"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  BarChart3,
  ArrowRight,
  BookOpen,
  TrendingUp,
  ShieldCheck,
  Brain,
  PiggyBank,
  Target,
  Briefcase,
  Wallet,
} from "lucide-react";

const courses = [
  {
    title: "Financial Market Fundamentals",
    description:
      "Build a solid foundation in understanding how financial markets operate, key participants, and market dynamics.",
    icon: BarChart3,
    level: "Beginner",
    duration: "8 Weeks",
    lessons: 42,
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-400",
    borderColor: "hover:border-blue-500/30",
  },
  {
    title: "Technical Analysis Mastery",
    description:
      "Learn to read and interpret market data, identify patterns, and build analytical frameworks for decision-making.",
    icon: TrendingUp,
    level: "Intermediate",
    duration: "10 Weeks",
    lessons: 56,
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary-400",
    borderColor: "hover:border-primary/30",
  },
  {
    title: "Risk Management Strategies",
    description:
      "Master the principles of risk assessment, position sizing, portfolio protection, and capital preservation.",
    icon: ShieldCheck,
    level: "Intermediate",
    duration: "6 Weeks",
    lessons: 38,
    color: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/30",
  },
  {
    title: "Trading Psychology",
    description:
      "Develop the mental discipline, emotional control, and cognitive frameworks needed for consistent decision-making.",
    icon: Brain,
    level: "All Levels",
    duration: "5 Weeks",
    lessons: 30,
    color: "from-pink-500/20 to-pink-600/5",
    iconColor: "text-pink-400",
    borderColor: "hover:border-pink-500/30",
  },
  {
    title: "Capital Management",
    description:
      "Learn professional approaches to capital allocation, money management rules, and building sustainable growth.",
    icon: PiggyBank,
    level: "Advanced",
    duration: "7 Weeks",
    lessons: 44,
    color: "from-amber-500/20 to-amber-600/5",
    iconColor: "text-amber-400",
    borderColor: "hover:border-amber-500/30",
  },
  {
    title: "Price Action Masterclass",
    description:
      "Deep dive into reading raw market movements, understanding supply-demand zones, and institutional-level analysis.",
    icon: Target,
    level: "Advanced",
    duration: "12 Weeks",
    lessons: 68,
    color: "from-violet-500/20 to-violet-600/5",
    iconColor: "text-violet-400",
    borderColor: "hover:border-violet-500/30",
  },
  {
    title: "Portfolio Building",
    description:
      "Learn how to construct, diversify, and manage a balanced portfolio aligned with your financial goals.",
    icon: Briefcase,
    level: "Intermediate",
    duration: "8 Weeks",
    lessons: 46,
    color: "from-cyan-500/20 to-cyan-600/5",
    iconColor: "text-cyan-400",
    borderColor: "hover:border-cyan-500/30",
  },
  {
    title: "Wealth Management Basics",
    description:
      "Understand personal finance fundamentals, tax planning, and long-term wealth creation strategies.",
    icon: Wallet,
    level: "Beginner",
    duration: "6 Weeks",
    lessons: 34,
    color: "from-orange-500/20 to-orange-600/5",
    iconColor: "text-orange-400",
    borderColor: "hover:border-orange-500/30",
  },
];

const levelColors: Record<string, "default" | "primary" | "success" | "warning"> = {
  Beginner: "success",
  Intermediate: "primary",
  Advanced: "warning",
  "All Levels": "default",
};

export function Courses() {
  return (
    <section id="courses" className="relative py-24 sm:py-32">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary-400 mb-3">
            Our Programs
          </p>
          <h2 className="section-heading mb-4">
            Featured{" "}
            <span className="gradient-text-purple">Courses</span>
          </h2>
          <p className="section-subheading">
            Comprehensive, expert-designed courses to take you from beginner to
            advanced across every essential financial discipline.
          </p>
        </motion.div>

        {/* Course Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden transition-all duration-[400ms] hover:bg-white/[0.04] ${course.borderColor} hover:shadow-card-hover hover:-translate-y-1 cursor-pointer`}
              >
                {/* Card Top - Gradient Area */}
                <div
                  className={`relative h-36 bg-gradient-to-br ${course.color} flex items-center justify-center overflow-hidden`}
                >
                  {/* Pattern */}
                  <div className="absolute inset-0 dot-pattern opacity-20" />
                  <Icon
                    size={48}
                    className={`${course.iconColor} opacity-60 transition-all duration-300 group-hover:opacity-80 group-hover:scale-110`}
                  />
                </div>

                {/* Card Content */}
                <div className="p-5">
                  {/* Level Badge */}
                  <Badge variant={levelColors[course.level]} className="mb-3">
                    {course.level}
                  </Badge>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-white text-base mb-2 leading-snug">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted leading-relaxed mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen size={12} />
                      {course.lessons} Lessons
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            icon={<ArrowRight size={18} />}
            iconPosition="right"
          >
            View All Courses
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
