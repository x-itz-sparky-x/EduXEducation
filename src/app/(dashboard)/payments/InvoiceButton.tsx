"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import jsPDF from "jspdf";
import { format } from "date-fns";

interface Payment {
  id: string;
  razorpayOrderId: string;
  razorpayPaymentId: string;
  amount: number;
  currency: string;
  status: string;
  membershipPurchased: string;
  createdAt: Date;
}

export function InvoiceButton({ payment, user }: { payment: Payment, user: { name: string | null, email: string | null } }) {
  const [loading, setLoading] = useState(false);

  const generateInvoice = async () => {
    setLoading(true);
    try {
      const doc = new jsPDF();
      
      // Invoice Header
      doc.setFontSize(22);
      doc.setTextColor(124, 58, 237); // Primary purple
      doc.text("EduXEducation", 20, 20);
      
      doc.setFontSize(10);
      doc.setTextColor(100);
      doc.text("Premium Financial Learning", 20, 28);
      
      doc.setFontSize(20);
      doc.setTextColor(40);
      doc.text("INVOICE", 150, 25);
      
      doc.setFontSize(10);
      doc.text(`Date: ${format(new Date(payment.createdAt), "dd MMM yyyy")}`, 150, 32);
      doc.text(`Invoice #: INV-${payment.id.slice(-6).toUpperCase()}`, 150, 38);
      
      // Bill To
      doc.setFontSize(12);
      doc.setTextColor(40);
      doc.text("Bill To:", 20, 50);
      doc.setFontSize(10);
      doc.setTextColor(80);
      doc.text(user.name || "Customer", 20, 58);
      doc.text(user.email || "", 20, 64);
      
      // Table Header
      doc.setFillColor(245, 243, 255);
      doc.rect(20, 80, 170, 10, "F");
      doc.setTextColor(40);
      doc.setFontSize(10);
      doc.text("Description", 25, 87);
      doc.text("Amount", 160, 87);
      
      // Table Content
      doc.setTextColor(80);
      doc.text(`EduXEducation ${payment.membershipPurchased} Plan - Lifetime Access`, 25, 100);
      doc.text(`Rs. ${(payment.amount / 100).toFixed(2)}`, 160, 100);
      
      // Total
      doc.line(20, 110, 190, 110);
      doc.setFontSize(12);
      doc.setTextColor(40);
      doc.text("Total:", 130, 120);
      doc.text(`Rs. ${(payment.amount / 100).toFixed(2)}`, 160, 120);
      
      // Footer
      doc.setFontSize(10);
      doc.setTextColor(150);
      doc.text("Thank you for investing in your education with EduXEducation.", 20, 280);
      
      doc.save(`Invoice_${payment.id}.pdf`);
    } catch (error) {
      console.error("Error generating invoice:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={generateInvoice}
      disabled={loading}
      className="text-primary-300 hover:text-primary-400 hover:bg-primary/10"
    >
      {loading ? <Loader2 size={16} className="animate-spin mr-2" /> : <Download size={16} className="mr-2" />}
      Download
    </Button>
  );
}
