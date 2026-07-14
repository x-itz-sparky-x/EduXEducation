"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Route,
  UserCheck,
  FileText,
  Infinity,
  Award,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Route,
    title: "Structured Learning Paths",
    description:
      "Follow carefully designed curricula that take you from fundamentals to advanced concepts, step by step.",
  },
  {
    icon: UserCheck,
    title: "Industry Expert Mentors",
    description:
      "Learn from professionals with years of real-world experience in financial markets and education.",
  },
  {
    icon: FileText,
    title: "Practical Case Studies",
    description:
      "Apply your knowledge through real-world case studies, simulations, and hands-on exercises.",
  },
  {
    icon: Infinity,
    title: "Lifetime Course Access",
    description:
      "Enroll once and access your courses forever. Revisit lessons anytime, at your own pace.",
  },
  {
    icon: Award,
    title: "Certificate of Completion",
    description:
      "Earn recognized certificates upon completing each course to showcase your expertise.",
  },
  {
    icon: Users,
    title: "Dedicated Community Support",
    description:
      "Join a vibrant community of learners, participate in discussions, and grow together.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

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
            Why Choose Us
          </p>
          <h2 className="section-heading mb-4">
            Why Choose{" "}
            <span className="gradient-text-purple">EduXEducation</span>
          </h2>
          <p className="section-subheading">
            We combine expert instruction, structured learning, and a
            supportive community to deliver a world-class educational
            experience.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glow-card p-7 sm:p-8 group cursor-default"
              >
                {/* Icon */}
                <div className="relative mb-5">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:shadow-glow">
                    <Icon
                      size={26}
                      className="text-primary-400 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-white mb-3 transition-colors duration-200">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
