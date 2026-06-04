
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-spa");

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || ""}
          alt="Luxury Spa Hero"
          fill
          className="object-cover scale-110 animate-subtle-zoom"
          priority
          data-ai-hint="luxury spa woman"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="inline-block text-xs md:text-sm uppercase tracking-[0.4em] font-medium opacity-90 animate-fade-in-up">
            Beauty. Confidence. Luxury.
          </span>
          <h1 className="text-5xl md:text-8xl font-headline leading-tight animate-fade-in-up delay-100">
            Radiance Begins With <br />
            <span className="italic">Exceptional Care</span>
          </h1>
          <p className="text-lg md:text-xl font-body max-w-2xl mx-auto opacity-80 leading-relaxed animate-fade-in-up delay-200">
            Premium skincare, rejuvenating spa treatments, and carefully curated beauty essentials designed to help you look radiant and embrace your natural beauty.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 animate-fade-in-up delay-300">
            <Button size="lg" className="h-14 px-10 rounded-none bg-primary text-white hover:bg-primary/90 uppercase tracking-[0.2em] text-xs">
              Book Appointment
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-10 rounded-none bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary uppercase tracking-[0.2em] text-xs transition-all">
              Shop Beauty Products
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 opacity-90 animate-fade-in-up delay-400">
            {[
              "Premium Treatments",
              "Expert Care",
              "Luxury Experience",
              "Trusted Results",
            ].map((badge) => (
              <div key={badge} className="flex items-center justify-center gap-2 text-[10px] md:text-xs uppercase tracking-widest font-medium">
                <Check className="w-3 h-3 text-accent" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em] vertical-text">Scroll</span>
        <div className="w-[1px] h-12 bg-white" />
      </div>

      <style jsx global>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.1); }
          to { transform: scale(1.15); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s infinite alternate ease-in-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
