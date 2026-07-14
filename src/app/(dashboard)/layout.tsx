"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { GraduationCap, LayoutDashboard, PlaySquare, Award, CreditCard, Crown, Settings, User, LogOut, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const sidebarLinks = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "My Courses", href: "/dashboard/courses", icon: PlaySquare },
  { label: "Certificates", href: "/dashboard/certificates", icon: Award },
  { label: "Payments", href: "/dashboard/payments", icon: CreditCard },
  { label: "Membership", href: "/dashboard/membership", icon: Crown },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
  { label: "Profile", href: "/dashboard/profile", icon: User },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-white/10 glass-nav sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap size={24} className="text-primary-400" />
          <span className="font-display font-bold text-white text-lg">Edu<span className="text-primary">X</span>Education</span>
        </Link>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {(isMobileMenuOpen || typeof window !== 'undefined' && window.innerWidth >= 768) && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className={cn(
              "fixed md:sticky top-0 left-0 h-screen w-64 glass-card border-r border-y-0 rounded-none border-white/10 flex flex-col z-40 transition-transform duration-300",
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            )}
          >
            <div className="p-6 hidden md:flex items-center gap-2">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-400">
                <GraduationCap size={16} className="text-white" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                Edu<span className="text-primary">X</span>Education
              </span>
            </div>

            <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 mt-16 md:mt-0">
              {sidebarLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all",
                      isActive
                        ? "bg-primary/20 text-primary-300 border border-primary/20 shadow-glow"
                        : "text-muted hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <Icon size={18} />
                    <span className="font-medium text-sm">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="p-4 mt-auto">
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <LogOut size={18} />
                <span className="font-medium text-sm">Logout</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="hidden md:flex items-center justify-between p-6 border-b border-white/10 bg-background/50 backdrop-blur-xl sticky top-0 z-30">
          <div>
            <h1 className="font-display text-2xl font-bold text-white">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            {session?.user?.membership && (
              <Badge variant="gold" className="text-xs uppercase px-2 py-0.5 font-bold tracking-wider">
                {session.user.membership}
              </Badge>
            )}
            <div className="flex items-center gap-3">
              <div className="text-right hidden lg:block">
                <p className="text-sm font-medium text-white">{session?.user?.name}</p>
                <p className="text-xs text-muted">{session?.user?.email}</p>
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/10">
                <img
                  src={session?.user?.image || "https://api.dicebear.com/7.x/avataaars/svg?seed=fallback"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
