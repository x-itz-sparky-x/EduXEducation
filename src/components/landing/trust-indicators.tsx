"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import {
  Users,
  PlayCircle,
  Star,
  UserCheck,
  Heart,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Students",
    color: "text-primary-400",
    bg: "bg-primary/10",
  },
  {
    icon: PlayCircle,
    value: 500,
    suffix: "+",
    label: "Video Lessons",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "★",
    label: "Student Rating",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    isDecimal: true,
  },
  {
    icon: UserCheck,
    value: 50,
    suffix: "+",
    label: "Expert Mentors",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Heart,
    value: 10000,
    suffix: "+",
    label: "Lifetime Community",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: Award,
    value: 8000,
    suffix: "+",
    label: "Certificates Issued",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

export function TrustIndicators() {
  return (
    <section className="relative py-20 sm:py-24">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary-400 mb-2">
            Trusted by Thousands
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Numbers That Speak for Themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-5 sm:p-6 text-center group"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat.bg} mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={22} className={stat.color} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-white mb-1">
                  {stat.isDecimal ? (
                    <span>
                      4.9<span className="text-amber-400 ml-0.5 text-xl">{stat.suffix}</span>
                    </span>
                  ) : (
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  )}
                </div>
                <p className="text-xs sm:text-sm text-muted">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
