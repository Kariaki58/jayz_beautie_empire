
"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";

const igPosts = [
  { id: 1, image: "hero-spa" },
  { id: 2, image: "skincare-products" },
  { id: 3, image: "lifestyle-woman" },
  { id: 4, image: "mask-treatment" },
  { id: 5, image: "body-oil" },
  { id: 6, image: "facial-treatment" }
];

export function InstagramShowcase() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] text-primary/60 font-medium">Connect With Us</span>
          <h2 className="text-4xl md:text-5xl font-headline text-primary italic">Beauty Inspiration Daily</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {igPosts.map((post) => (
            <div key={post.id} className="group relative aspect-square overflow-hidden cursor-pointer">
              <Image
                src={`https://picsum.photos/seed/ig-${post.id}/600/600`}
                alt="Instagram Post"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary hover:text-accent transition-colors">
            Follow @jayzbeautie_empire
          </button>
        </div>
      </div>
    </section>
  );
}
