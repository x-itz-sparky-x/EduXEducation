"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "Enrolling is simple! Browse our programs, choose the plan that suits your goals, and complete the secure checkout. Once payment is confirmed, you'll receive instant access to your courses and can start learning immediately from your personalized dashboard.",
  },
  {
    question: "Will I receive a certificate after completing a course?",
    answer:
      "Yes! Upon successfully completing all modules and assessments in a course, you'll receive a professional Certificate of Completion. This certificate can be shared on LinkedIn, added to your resume, and serves as proof of your expertise in the subject.",
  },
  {
    question: "Do I get lifetime access to the courses?",
    answer:
      "Absolutely. All our plans include lifetime access to your enrolled courses. This means you can revisit lessons, review materials, and access updated content at any time — there's no expiration. We also regularly update course content to keep it current.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Yes, our platform is designed for self-paced learning. There are no strict deadlines or schedules (except for optional live sessions). You can pause, resume, and replay lessons as many times as you need. Your progress is automatically saved so you can pick up right where you left off.",
  },
  {
    question: "How do I access my lessons after enrollment?",
    answer:
      "After enrollment, log in to your EduXEducation account and navigate to your Student Dashboard. All your enrolled courses will be listed there. Click on any course to access the video player, notes, assignments, and resources. You can access the platform from any device — desktop, tablet, or mobile.",
  },
  {
    question: "How can I upgrade my membership plan?",
    answer:
      "You can upgrade your plan at any time from your account settings. Navigate to 'Membership' in your dashboard, choose your desired plan, and complete the payment. Your new benefits will be activated instantly, and any additional course modules will be unlocked immediately.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary-400 mb-3">
            Got Questions?
          </p>
          <h2 className="section-heading mb-4">
            Frequently Asked{" "}
            <span className="gradient-text-purple">Questions</span>
          </h2>
          <p className="section-subheading">
            Find answers to common questions about our platform, courses, and
            membership.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
