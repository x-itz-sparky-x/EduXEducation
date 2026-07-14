"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Crown, Zap, Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const plans = [
  {
    name: "Basic",
    price: "₹2,999",
    period: "/one-time",
    description: "Perfect for beginners starting their financial education journey.",
    icon: Zap,
    badge: null,
    badgeVariant: "default" as const,
    features: [
      "Beginner Course Modules",
      "HD Video Lessons",
      "Lifetime Course Access",
      "Community Access",
      "Certificate of Completion",
      "Email Support",
    ],
    buttonVariant: "secondary" as const,
    highlighted: false,
    gradient: "",
  },
  {
    name: "Pro",
    price: "₹7,999",
    period: "/one-time",
    description: "Most popular choice for serious learners who want comprehensive knowledge.",
    icon: Sparkles,
    badge: "Most Popular",
    badgeVariant: "primary" as const,
    features: [
      "Everything in Basic",
      "Advanced Course Modules",
      "Assignments & Quizzes",
      "Weekly Live Sessions",
      "Premium Community Access",
      "Priority Support",
      "Exclusive Learning Resources",
      "Progress Analytics",
    ],
    buttonVariant: "primary" as const,
    highlighted: true,
    gradient: "from-primary/20 via-primary/5 to-transparent",
  },
  {
    name: "Master",
    price: "₹14,999",
    period: "/one-time",
    description: "The complete package for learners who want personalized mastery.",
    icon: Crown,
    badge: "Premium",
    badgeVariant: "gold" as const,
    features: [
      "Everything in Pro",
      "One-to-One Mentorship",
      "Portfolio Review Sessions",
      "VIP Community Access",
      "Career Guidance",
      "Exclusive Masterclasses",
      "Lifetime Course Updates",
      "VIP Priority Support",
      "Custom Learning Plan",
    ],
    buttonVariant: "secondary" as const,
    highlighted: false,
    gradient: "",
  },
];

export function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const { data: session, update } = useSession();
  const router = useRouter();

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (planName: string, price: string) => {
    if (!session) {
      router.push("/login");
      return;
    }

    setLoadingPlan(planName);

    try {
      const res = await loadRazorpay();
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        setLoadingPlan(null);
        return;
      }

      // Create Order
      const orderRes = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planName, price }),
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok) {
        alert(orderData.error || "Failed to create order");
        setLoadingPlan(null);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use NEXT_PUBLIC for client side if needed, or pass via API
        amount: orderData.amount,
        currency: orderData.currency,
        name: "EduXEducation",
        description: `Upgrade to ${planName} Plan`,
        order_id: orderData.id,
        handler: async function (response: any) {
          // Verify Signature
          const verifyRes = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              plan: planName,
              amount: price,
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyRes.ok) {
            await update({ membership: planName.toUpperCase() });
            router.push("/dashboard/payments");
          } else {
            alert(verifyData.error || "Payment verification failed");
          }
        },
        prefill: {
          name: session.user?.name,
          email: session.user?.email,
        },
        theme: {
          color: "#7C3AED",
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoadingPlan(null);
    }
  };

  const getButtonState = (planName: string) => {
    const currentMembership = session?.user?.membership?.toUpperCase() || "FREE";
    const levels = ["FREE", "BASIC", "PRO", "MASTER"];
    
    const currentIndex = levels.indexOf(currentMembership);
    const planIndex = levels.indexOf(planName.toUpperCase());

    if (currentMembership === planName.toUpperCase()) {
      return { text: "Current Plan", disabled: true };
    }
    if (planIndex < currentIndex) {
      return { text: "Included", disabled: true };
    }
    if (currentMembership !== "FREE" && planIndex > currentIndex) {
      return { text: "Upgrade", disabled: false };
    }
    return { text: "Enroll Now", disabled: false };
  };

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

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
            Simple Pricing
          </p>
          <h2 className="section-heading mb-4">
            Choose Your{" "}
            <span className="gradient-text-purple">Learning Plan</span>
          </h2>
          <p className="section-subheading">
            Invest in yourself with a plan that fits your goals. All plans
            include lifetime access and no hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isHovered = hoveredPlan === plan.name;
            const { text: buttonText, disabled } = getButtonState(plan.name);

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredPlan(plan.name)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`relative rounded-2xl transition-all duration-500 ${
                  plan.highlighted
                    ? "md:-mt-4 md:mb-4"
                    : ""
                }`}
              >
                {/* Highlight glow for Pro */}
                {plan.highlighted && (
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary via-primary/50 to-primary/20 opacity-60 blur-sm" />
                )}

                <div
                  className={`relative h-full rounded-2xl border transition-all duration-500 ${
                    plan.highlighted
                      ? "bg-gradient-to-b from-primary/[0.08] to-background border-primary/30 shadow-glow-lg"
                      : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]"
                  } ${isHovered && !plan.highlighted ? "shadow-card-hover -translate-y-1" : ""}`}
                >
                  {/* Top gradient */}
                  {plan.gradient && (
                    <div
                      className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${plan.gradient} rounded-t-2xl pointer-events-none`}
                    />
                  )}

                  <div className="relative p-7 sm:p-8">
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            plan.highlighted
                              ? "bg-primary/20"
                              : "bg-white/[0.06]"
                          }`}
                        >
                          <Icon
                            size={20}
                            className={
                              plan.highlighted
                                ? "text-primary-300"
                                : "text-muted"
                            }
                          />
                        </div>
                        <h3 className="font-display text-xl font-bold text-white">
                          {plan.name}
                        </h3>
                      </div>
                      {plan.badge && (
                        <Badge variant={plan.badgeVariant} size="sm">
                          {plan.badge}
                        </Badge>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted mb-6 leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="font-display text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-sm text-muted">{plan.period}</span>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant={plan.buttonVariant}
                      size="lg"
                      className={`w-full mb-8 ${plan.highlighted ? "shadow-glow" : ""}`}
                      disabled={disabled || loadingPlan === plan.name}
                      onClick={() => handlePayment(plan.name, plan.price)}
                    >
                      {loadingPlan === plan.name ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : (
                        buttonText
                      )}
                    </Button>

                    {/* Features */}
                    <div className="space-y-3.5">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted">
                        What&apos;s included
                      </p>
                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 text-sm"
                        >
                          <div
                            className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                              plan.highlighted
                                ? "bg-primary/20 text-primary-300"
                                : "bg-white/[0.06] text-muted"
                            }`}
                          >
                            <Check size={12} />
                          </div>
                          <span className="text-white/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-muted mt-10"
        >
          All plans include a 7-day money-back guarantee. No questions asked.
        </motion.p>
      </div>
    </section>
  );
}
