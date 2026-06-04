
"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          <div className="space-y-8">
            <div className="flex flex-col">
              <span className="font-headline text-2xl tracking-[0.15em]">JAY&apos;Z BEAUTIE</span>
              <span className="text-[0.6rem] tracking-[0.4em] uppercase opacity-70">Empire.Ng</span>
            </div>
            <p className="text-sm leading-relaxed opacity-70 max-w-xs">
              A luxury beauty destination offering premium spa treatments, skincare solutions, and products designed to help women embrace their beauty.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></Link>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold">Quick Links</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/shop" className="hover:text-accent transition-colors">Shop Products</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold">Visit Us</h4>
            <ul className="space-y-6 text-sm opacity-70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-accent" />
                <span>63 Aka Itiam Road, Off Oron Road, Uyo, Akwa Ibom</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                <span>+234 902 170 0158</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-accent" />
                <span>empirejjay@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold">Join Our Circle</h4>
            <p className="text-sm opacity-70">Subscribe to receive skincare tips and exclusive offers.</p>
            <div className="flex flex-col space-y-4">
              <Input 
                className="bg-transparent border-white/20 text-white rounded-none h-12 placeholder:text-white/40 focus-visible:ring-accent" 
                placeholder="Email Address" 
              />
              <Button className="bg-white text-primary hover:bg-accent hover:text-white rounded-none uppercase tracking-[0.2em] h-12">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] opacity-50">
          <p>© {new Date().getFullYear()} Jay&apos;z Beautie Empire.Ng. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
