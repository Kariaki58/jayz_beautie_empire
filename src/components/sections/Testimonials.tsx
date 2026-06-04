
"use client";

import * as React from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    text: "My skin has never looked healthier. The specialized facials at Jay'z Beautie are truly transformative. I feel more confident in my own skin than ever before.",
    author: "Sarah J.",
    location: "Lagos, Nigeria"
  },
  {
    text: "The atmosphere is elegant and relaxing. It's my go-to place for self-care and professional treatments. Every visit feels like a luxury retreat.",
    author: "Grace E.",
    location: "Uyo, Akwa Ibom"
  },
  {
    text: "I finally found products that work for me. The consultation was thorough and the results speak for themselves. Truly world-class expertise.",
    author: "Michelle O.",
    location: "Abuja, Nigeria"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Quote className="w-12 h-12 text-accent/30 mx-auto" />
            <h2 className="text-3xl md:text-5xl font-headline text-primary italic">Real Stories, Visible Radiance</h2>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((t, idx) => (
                <CarouselItem key={idx}>
                  <div className="flex flex-col items-center text-center space-y-8 px-12 md:px-24">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-xl md:text-3xl font-body leading-relaxed text-primary/80 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="space-y-1">
                      <p className="text-sm uppercase tracking-widest font-bold text-primary">{t.author}</p>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-primary/50">{t.location}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white text-primary hover:bg-primary hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-white text-primary hover:bg-primary hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
