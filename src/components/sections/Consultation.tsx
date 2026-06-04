
"use client";

import { Button } from "@/components/ui/button";

export function Consultation() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Texture or abstract background element */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary/50 rounded-full blur-[100px]" />
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
        <div className="space-y-8">
          <span className="text-xs uppercase tracking-[0.4em] text-primary/60 font-medium">Personalized Wellness</span>
          <h2 className="text-4xl md:text-6xl font-headline text-primary">Not Sure What Your <br /><span className="italic">Skin Needs?</span></h2>
          <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Every skin journey is unique. Our beauty specialists help identify the treatments and products best suited for your skin goals through a detailed professional assessment.
          </p>
          <div className="pt-4">
            <Button size="lg" className="rounded-none px-12 h-14 bg-primary text-white hover:bg-primary/90 uppercase tracking-[0.2em] text-xs">
              Book A Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
