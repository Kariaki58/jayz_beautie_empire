
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  {
    title: "Glow Facial",
    description: "Restore hydration, improve skin texture, and reveal smoother, healthier-looking skin.",
    image: "facial-treatment"
  },
  {
    title: "Deep Cleansing Facial",
    description: "Deeply purify pores and rebalance your skin's natural oils for a clear complexion.",
    image: "mask-treatment"
  },
  {
    title: "Massage Therapy",
    description: "Release tension and find deep relaxation with our bespoke therapeutic techniques.",
    image: "hero-spa"
  },
  {
    title: "Skincare Consultation",
    description: "Professional analysis to build a skincare routine that truly delivers results.",
    image: "lifestyle-woman"
  }
];

export function Services() {
  return (
    <section className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] text-primary/60 font-medium">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-headline text-primary">Luxury Treatments <br /><span className="italic">Designed Around You</span></h2>
          </div>
          <Button asChild variant="outline" className="rounded-none px-8 uppercase tracking-[0.2em] border-primary text-primary hover:bg-primary hover:text-white h-12">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
          {services.map((service, idx) => {
            const imgData = PlaceHolderImages.find(img => img.id === service.image);
            return (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden mb-8">
                  <Image
                    src={imgData?.imageUrl || ""}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    data-ai-hint={imgData?.imageHint}
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-headline text-primary tracking-wide italic">{service.title}</h3>
                  <p className="text-secondary-foreground/70 leading-relaxed max-w-lg">
                    {service.description}
                  </p>
                  <Button variant="link" className="p-0 h-auto uppercase tracking-[0.3em] text-xs text-primary font-semibold border-b border-primary/20 hover:border-primary transition-all rounded-none">
                    Book Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
