"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UserPlus,
  BookOpen,
  FlaskConical,
  ClipboardCheck,
  Award,
  Users,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Enroll",
    description: "Choose your program and create your learning account.",
    color: "from-blue-500 to-blue-600",
    glow: "bg-blue-500/20",
  },
  {
    icon: BookOpen,
    title: "Learn",
    description: "Access HD video lessons, notes, and expert-curated content.",
    color: "from-primary to-primary-400",
    glow: "bg-primary/20",
  },
  {
    icon: FlaskConical,
    title: "Practice",
    description: "Apply knowledge through case studies and practical exercises.",
    color: "from-emerald-500 to-emerald-600",
    glow: "bg-emerald-500/20",
  },
  {
    icon: ClipboardCheck,
    title: "Complete Assessments",
    description: "Test your understanding with quizzes and assignments.",
    color: "from-amber-500 to-amber-600",
    glow: "bg-amber-500/20",
  },
  {
    icon: Award,
    title: "Earn Certificate",
    description: "Receive a recognized certificate of completion.",
    color: "from-pink-500 to-pink-600",
    glow: "bg-pink-500/20",
  },
  {
    icon: Users,
    title: "Join Alumni Community",
    description: "Connect with fellow graduates and keep learning together.",
    color: "from-violet-500 to-violet-600",
    glow: "bg-violet-500/20",
  },
];

export function LearningJourney() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 line-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary-400 mb-3">
            Your Path to Success
          </p>
          <h2 className="section-heading mb-4">
            Your <span className="gradient-text-purple">Learning Journey</span>
          </h2>
          <p className="section-subheading">
            A clear, structured path from enrollment to certification and
            beyond.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-0.5">
            <div className="h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>

          {/* Connecting line - mobile */}
          <div className="lg:hidden absolute top-0 bottom-0 left-[27px] w-0.5">
            <div className="h-full bg-gradient-to-b from-primary/30 via-primary/20 to-transparent" />
          </div>

          {/* Steps */}
          <div className="grid lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex lg:flex-col items-start lg:items-center lg:text-center gap-5 lg:gap-0"
                >
                  {/* Step number & icon */}
                  <div className="relative flex-shrink-0">
                    {/* Glow */}
                    <div
                      className={`absolute inset-0 ${step.glow} rounded-full blur-xl opacity-50`}
                    />

                    {/* Circle */}
                    <div
                      className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg z-10`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>

                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-white/20 flex items-center justify-center text-[10px] font-bold text-white z-20">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:mt-5">
                    <h3 className="font-display font-semibold text-white text-base mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-[200px] lg:max-w-none">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
