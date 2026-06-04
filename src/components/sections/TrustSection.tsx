
import { Sparkles, Heart, ShieldCheck, Zap } from "lucide-react";

const trustItems = [
  {
    icon: Sparkles,
    title: "Premium Treatments",
    desc: "Science-backed procedures using world-class technology."
  },
  {
    icon: ShieldCheck,
    title: "Expert Care",
    desc: "Dedicated specialists with years of dermatological experience."
  },
  {
    icon: Heart,
    title: "Personalized Focus",
    desc: "Every plan is custom-tailored to your unique skin journey."
  },
  {
    icon: Zap,
    title: "Visible Results",
    desc: "Noticeable transformation designed for long-term health."
  }
];

export function TrustSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] text-primary/60 font-medium">Why Jay&apos;z Beautie</span>
          <h2 className="text-3xl md:text-5xl font-headline text-primary italic">Trusted By Women Who Prioritize Self-Care</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-6 group">
              <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <item.icon className="w-6 h-6 stroke-[1.5px]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-headline uppercase tracking-widest text-primary">{item.title}</h3>
                <p className="text-sm text-secondary-foreground/70 leading-relaxed max-w-[220px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
