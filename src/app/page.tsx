
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { Services } from "@/components/sections/Services";
import { Consultation } from "@/components/sections/Consultation";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramShowcase } from "@/components/sections/InstagramShowcase";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
      <FeaturedProducts />
      <Consultation />
      
      {/* Brand Identity / Why Us Section */}
      <section className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="absolute -left-20 top-0 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.4em] text-accent font-medium">The Empire Philosophy</span>
                <h2 className="text-4xl md:text-6xl font-headline leading-tight italic">More Than Beauty. <br />It&apos;s Confidence.</h2>
              </div>
              <p className="text-lg opacity-80 leading-relaxed max-w-xl">
                At Jay&apos;z Beautie Empire, we believe beauty is an experience of self-love and confidence. Our space is dedicated to modern women who value premium care and visible results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                {[
                  { title: "Personalized Care", desc: "Treatments as unique as you are." },
                  { title: "Luxury Experience", desc: "A sanctuary for total relaxation." },
                  { title: "Premium Products", desc: "Only the finest ingredients." },
                  { title: "Visible Results", desc: "Transformation you can see and feel." }
                ].map((card, i) => (
                  <div key={i} className="space-y-2 p-6 border border-white/10 hover:border-accent/30 transition-colors">
                    <h3 className="text-sm uppercase tracking-widest font-bold text-accent">{card.title}</h3>
                    <p className="text-xs opacity-60 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] bg-white/5 overflow-hidden">
               <img 
                 src="https://picsum.photos/seed/philosophy/800/1000" 
                 alt="Luxury Wellness" 
                 className="w-full h-full object-cover opacity-80 grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <InstagramShowcase />

      {/* Booking CTA Section */}
      <section className="py-32 bg-secondary text-center">
        <div className="container mx-auto px-6 max-w-3xl space-y-10">
          <h2 className="text-4xl md:text-6xl font-headline text-primary">Your Self-Care Journey <br /><span className="italic">Starts Here</span></h2>
          <p className="text-lg text-secondary-foreground/70 leading-relaxed">
            Whether you&apos;re booking a treatment or shopping for beauty essentials, we&apos;re here to help you look and feel your absolute best. Experience the empire of beauty today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <Button size="lg" className="h-16 px-12 rounded-none bg-primary text-white hover:bg-primary/90 uppercase tracking-[0.2em] text-xs">
              Book Appointment
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-12 rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-[0.2em] text-xs">
              Shop Beauty Products
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
