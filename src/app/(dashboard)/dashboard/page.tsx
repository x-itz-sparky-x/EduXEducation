import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { BookOpen, Trophy, Clock, PlayCircle } from "lucide-react";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user) return null;

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    include: {
      courseProgress: true,
      payments: {
        orderBy: { createdAt: 'desc' },
        take: 3
      }
    }
  });

  const stats = [
    { label: "Courses Enrolled", value: user?.courseProgress.length || 0, icon: BookOpen, color: "text-blue-400", bg: "bg-blue-400/10" },
    { label: "Completed Lessons", value: user?.courseProgress.reduce((acc, curr) => acc + curr.completedLessons, 0) || 0, icon: Trophy, color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { label: "Current Plan", value: user?.membership || "FREE", icon: Clock, color: "text-primary-400", bg: "bg-primary-400/10" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-display font-bold text-white mb-2">
          Welcome back, {session.user.name?.split(" ")[0]}!
        </h2>
        <p className="text-muted">Here&apos;s a summary of your learning progress.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="glass-card p-6 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg}`}>
                <Icon size={24} className={stat.color} />
              </div>
              <div>
                <p className="text-sm font-medium text-muted">{stat.label}</p>
                <h3 className="text-2xl font-bold text-white mt-1">{stat.value}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Continue Learning */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-bold text-white mb-4">Continue Learning</h3>
          {user?.courseProgress.length ? (
            <div className="space-y-4">
              {/* Placeholder for actual course progress */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <PlayCircle size={20} className="text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Introduction to Options</h4>
                    <p className="text-xs text-muted">Module 2 • 15 mins left</p>
                  </div>
                </div>
                <div className="text-primary-300 font-medium text-sm">Resume</div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted mb-4">You haven&apos;t started any courses yet.</p>
              <a href="/#courses" className="text-primary-400 hover:text-primary-300 font-medium">Browse Courses &rarr;</a>
            </div>
          )}
        </div>

        {/* Recent Activity */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-bold text-white mb-4">Recent Payments</h3>
          {user?.payments.length ? (
            <div className="space-y-4">
              {user.payments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                  <div>
                    <h4 className="font-medium text-white">{payment.membershipPurchased} Plan Upgrade</h4>
                    <p className="text-xs text-muted">{new Date(payment.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-medium text-white">₹{payment.amount / 100}</span>
                    <p className="text-xs text-emerald-400">Success</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted mb-4">No recent payments found.</p>
              <a href="/#pricing" className="text-primary-400 hover:text-primary-300 font-medium">Upgrade Plan &rarr;</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
