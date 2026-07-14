import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { Badge } from "@/components/ui/badge";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user) return null;

  // Ideally, you would check if the user is an ADMIN here.
  // if (session.user.role !== "ADMIN") return <div>Unauthorized</div>;

  const users = await db.user.findMany({
    orderBy: { createdAt: "desc" },
    take: 10,
    include: {
      payments: true,
    }
  });

  type UserWithPayments = typeof users[0];

  const totalRevenue = users.reduce((acc: number, user: UserWithPayments) => {
    return acc + user.payments.reduce((sum: number, p: { amount: number }) => sum + p.amount, 0);
  }, 0);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-display font-bold text-white mb-2">Admin Dashboard</h2>
        <p className="text-muted">Manage platform users and view analytics.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6">
          <p className="text-sm font-medium text-muted">Total Users</p>
          <h3 className="text-2xl font-bold text-white mt-1">{users.length}</h3>
        </div>
        <div className="glass-card p-6">
          <p className="text-sm font-medium text-muted">Total Revenue</p>
          <h3 className="text-2xl font-bold text-white mt-1">₹{totalRevenue / 100}</h3>
        </div>
      </div>

      <div className="glass-card overflow-hidden mt-8">
        <div className="p-6 border-b border-white/10">
          <h3 className="text-lg font-bold text-white">Recent Users</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 border-b border-white/10 text-white font-medium">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Membership</th>
                <th className="px-6 py-4">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {users.map((user: UserWithPayments) => (
                <tr key={user.id} className="hover:bg-white/[0.02]">
                  <td className="px-6 py-4 font-medium text-white">{user.name}</td>
                  <td className="px-6 py-4 text-muted">{user.email}</td>
                  <td className="px-6 py-4">
                    <Badge variant="primary" size="sm">{user.membership}</Badge>
                  </td>
                  <td className="px-6 py-4 text-muted">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
