"use client";

import * as React from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const details = [
  { icon: MapPin, label: "Visit Us", value: "63 Aka Itiam Road, Off Oron Road, Uyo, Akwa Ibom" },
  { icon: Phone, label: "Call Us", value: "+234 902 170 0158" },
  { icon: Mail, label: "Email Us", value: "empirejjay@gmail.com" },
  { icon: Clock, label: "Opening Hours", value: "Mon – Sat: 9:00am – 7:00pm" },
];

export default function ContactPage() {
  const { toast } = useToast();
  const headerImage = PlaceHolderImages.find((img) => img.id === "hero-spa");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. Our team will be in touch shortly.",
    });
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        label="Contact"
        title={<>Let&apos;s <span className="italic font-light text-accent">Connect</span></>}
        description="Have a question, want to book a treatment, or simply say hello? We would love to hear from you."
        imageUrl={headerImage?.imageUrl || ""}
        imageHint="luxury spa woman"
      />

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.4em] text-primary/60 font-medium">Get In Touch</span>
                <h2 className="text-4xl md:text-5xl font-headline text-primary italic">We&apos;re Here For You</h2>
                <p className="text-lg text-secondary-foreground/70 leading-relaxed max-w-md">
                  Reach out through any of the channels below, or send us a message and we&apos;ll respond as soon as we can.
                </p>
              </div>

              <div className="space-y-8">
                {details.map((d) => (
                  <div key={d.label} className="flex items-start gap-5">
                    <div className="w-12 h-12 shrink-0 bg-secondary flex items-center justify-center text-accent">
                      <d.icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/50">{d.label}</h3>
                      <p className="text-primary leading-relaxed">{d.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                <a href="#" className="w-11 h-11 bg-primary text-white flex items-center justify-center hover:bg-accent transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-11 h-11 bg-primary text-white flex items-center justify-center hover:bg-accent transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-11 h-11 bg-primary text-white flex items-center justify-center hover:bg-accent transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-secondary p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-primary/60">Full Name</label>
                    <Input required placeholder="Your name" className="bg-white border-primary/10 rounded-none h-12 focus-visible:ring-accent" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-primary/60">Phone</label>
                    <Input type="tel" placeholder="+234 ..." className="bg-white border-primary/10 rounded-none h-12 focus-visible:ring-accent" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-primary/60">Email Address</label>
                  <Input type="email" required placeholder="you@example.com" className="bg-white border-primary/10 rounded-none h-12 focus-visible:ring-accent" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-primary/60">Subject</label>
                  <Input placeholder="How can we help?" className="bg-white border-primary/10 rounded-none h-12 focus-visible:ring-accent" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-primary/60">Message</label>
                  <Textarea required rows={5} placeholder="Tell us a little more..." className="bg-white border-primary/10 rounded-none focus-visible:ring-accent resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-none h-14 bg-primary text-white hover:bg-primary/90 uppercase tracking-[0.2em] text-xs">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-secondary">
        <iframe
          title="Jay'z Beautie Empire location"
          src="https://www.google.com/maps?q=Uyo,+Akwa+Ibom,+Nigeria&output=embed"
          className="w-full h-[450px] border-0 grayscale-[0.3]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Footer />
    </main>
  );
}
