
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-spa");

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Enhanced Editorial Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || ""}
          alt="Luxury Spa Hero"
          fill
          className="object-cover scale-110 animate-subtle-zoom brightness-[0.85]"
          priority
          data-ai-hint="luxury spa woman"
        />
        {/* Multi-layered overlay for depth and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-primary/40" />
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
      </div>

      {/* Main Content Container - Added pt-32 to solve collision with fixed navbar */}
      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Subtle Accent Line & Label */}
          <div className="flex flex-col items-center gap-4 animate-fade-in-up">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="text-xs md:text-sm uppercase tracking-[0.5em] font-medium text-accent">
              The Gold Standard of Beauty
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline leading-[1.1] md:leading-[1.05] animate-fade-in-up delay-100">
            Radiance Begins With <br />
            <span className="italic font-light text-accent">Exceptional Care</span>
          </h1>

          <p className="text-lg md:text-xl font-body max-w-2xl mx-auto opacity-90 leading-relaxed font-light animate-fade-in-up delay-200">
            A sanctuary where luxury meets results. Experience premium skincare, rejuvenating spa treatments, and curated beauty essentials designed for the modern woman.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 animate-fade-in-up delay-300">
            <Button size="lg" className="h-16 px-12 rounded-none bg-primary text-white hover:bg-primary/90 border border-transparent uppercase tracking-[0.25em] text-[10px] md:text-xs shadow-2xl">
              Book Appointment
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-12 rounded-none bg-white/5 text-white border-white/40 hover:bg-white hover:text-primary uppercase tracking-[0.25em] text-[10px] md:text-xs backdrop-blur-sm transition-all">
              Shop Collections
            </Button>
          </div>

          {/* Trusted Badges with refined look */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 pt-16 opacity-80 animate-fade-in-up delay-400">
            {[
              "Premium Treatments",
              "Expert Care",
              "Luxury Space",
              "Proven Results",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium border-b border-white/10 pb-2">
                <Check className="w-3 h-3 text-accent" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 animate-pulse cursor-pointer">
         <span className="text-[9px] uppercase tracking-[0.4em] vertical-text">Explore</span>
         <ChevronDown className="w-4 h-4" />
      </div>

      <style jsx global>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 30s infinite alternate ease-in-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.15s; }
        .delay-200 { animation-delay: 0.3s; }
        .delay-300 { animation-delay: 0.45s; }
        .delay-400 { animation-delay: 0.6s; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </section>
  );
}
