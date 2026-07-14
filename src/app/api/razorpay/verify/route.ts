import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      plan,
      amount,
    } = await req.json();

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET as string)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      // Valid payment - save to database
      const membershipEnum = plan.toUpperCase() as "FREE" | "BASIC" | "PRO" | "MASTER";

      await db.$transaction([
        db.payment.create({
          data: {
            userId: session.user.id,
            razorpayOrderId: razorpay_order_id,
            razorpayPaymentId: razorpay_payment_id,
            razorpaySignature: razorpay_signature,
            amount: parseInt(amount.replace(/[^0-9]/g, "")) * 100,
            currency: "INR",
            status: "SUCCESS",
            membershipPurchased: membershipEnum,
          },
        }),
        db.user.update({
          where: { id: session.user.id },
          data: { membership: membershipEnum },
        })
      ]);

      return NextResponse.json({ message: "Payment verified successfully" });
    } else {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }
  } catch (error) {
    console.error("Razorpay Verification Error:", error);
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}
