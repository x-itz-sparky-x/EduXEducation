import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { InvoiceButton } from "./InvoiceButton";
import { Badge } from "@/components/ui/badge";

export default async function PaymentsPage() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user) return null;

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    include: {
      payments: {
        orderBy: { createdAt: "desc" }
      }
    }
  });

  if (!user) return null;

  return (
    <div className="max-w-5xl space-y-8">
      <div>
        <h2 className="text-3xl font-display font-bold text-white mb-2">Payment History</h2>
        <p className="text-muted">View your past transactions and download invoices.</p>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 border-b border-white/10 text-white font-medium">
              <tr>
                <th className="px-6 py-4">Transaction ID</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Membership</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {user.payments.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-muted">
                    No payment history found.
                  </td>
                </tr>
              ) : (
                user.payments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-mono text-xs text-muted">
                      {payment.razorpayPaymentId}
                    </td>
                    <td className="px-6 py-4 text-white">
                      {new Date(payment.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="primary" size="sm">{payment.membershipPurchased}</Badge>
                    </td>
                    <td className="px-6 py-4 font-medium text-white">
                      ₹{payment.amount / 100}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-emerald-400 font-medium">Success</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <InvoiceButton payment={payment} user={{ name: user.name, email: user.email }} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
