import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user) return null;

  const user = await db.user.findUnique({
    where: { id: session.user.id }
  });

  if (!user) return null;

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h2 className="text-3xl font-display font-bold text-white mb-2">My Profile</h2>
        <p className="text-muted">Manage your personal information and preferences.</p>
      </div>

      <div className="glass-card p-6 sm:p-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/10 shrink-0">
            <img 
              src={user.image || "https://api.dicebear.com/7.x/avataaars/svg?seed=fallback"} 
              alt={user.name || "User"} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-white mb-1">{user.name}</h3>
            <p className="text-muted mb-3">{user.email}</p>
            <Badge variant="primary">{user.membership} Member</Badge>
          </div>
          <div>
            <Button variant="outline">Edit Photo</Button>
          </div>
        </div>

        <div className="h-px bg-white/10" />

        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Full Name</label>
              <input 
                type="text" 
                defaultValue={user.name || ""} 
                className="w-full h-12 px-4 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Email Address</label>
              <input 
                type="email" 
                defaultValue={user.email || ""} 
                disabled
                className="w-full h-12 px-4 rounded-xl bg-white/[0.01] border border-white/5 text-muted cursor-not-allowed"
              />
              <p className="text-xs text-muted/60">Email is linked to your Google account.</p>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Button variant="ghost">Cancel</Button>
            <Button variant="primary">Save Changes</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
