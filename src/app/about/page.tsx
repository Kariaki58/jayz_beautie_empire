import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Testimonials } from "@/components/sections/Testimonials";
import { Consultation } from "@/components/sections/Consultation";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata = {
  title: "About | Jay'z Beautie Empire",
  description: "Discover the story, philosophy and people behind Jay'z Beautie Empire.",
};

const stats = [
  { value: "5,000+", label: "Happy Clients" },
  { value: "8+", label: "Years of Care" },
  { value: "20+", label: "Signature Treatments" },
  { value: "100%", label: "Dedicated to You" },
];

const values = [
  { title: "Personalized Care", desc: "Treatments as unique as the women who receive them." },
  { title: "Luxury Experience", desc: "A serene sanctuary designed for total relaxation." },
  { title: "Premium Products", desc: "Only the finest, results-driven ingredients." },
  { title: "Visible Results", desc: "Transformation you can genuinely see and feel." },
];

export default function AboutPage() {
  const headerImage = PlaceHolderImages.find((img) => img.id === "wellness-interior");
  const storyImage = PlaceHolderImages.find((img) => img.id === "lifestyle-woman");

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        label="About"
        title={<>More Than Beauty. <span className="italic font-light text-accent">It&apos;s Confidence.</span></>}
        description="Jay'z Beautie Empire is a luxury beauty destination built on the belief that beauty is an experience of self-love and confidence."
        imageUrl={headerImage?.imageUrl || ""}
        imageHint="wellness interior"
      />

      {/* Story */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <Image
                src={storyImage?.imageUrl || ""}
                alt="Our Story"
                fill
                className="object-cover"
                data-ai-hint="elegant woman"
              />
            </div>
            <div className="space-y-8">
              <span className="text-xs uppercase tracking-[0.4em] text-primary/60 font-medium">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-headline text-primary leading-tight italic">A Sanctuary For The Modern Woman</h2>
              <div className="space-y-6 text-lg text-secondary-foreground/70 leading-relaxed">
                <p>
                  Born in Uyo, Akwa Ibom, Jay&apos;z Beautie Empire began with a simple vision: to create a space where premium care and visible results meet genuine warmth and luxury.
                </p>
                <p>
                  Every detail of our space — from our curated treatments to our handpicked products — is designed to help women embrace their beauty and walk out feeling more confident than when they arrived.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((s) => (
              <div key={s.label} className="space-y-2">
                <p className="font-headline text-4xl md:text-5xl text-accent">{s.value}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] text-primary/60 font-medium">The Empire Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-headline text-primary italic">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="space-y-3 p-8 bg-white border border-primary/5 hover:border-accent/30 transition-colors">
                <h3 className="text-sm uppercase tracking-widest font-bold text-primary">{v.title}</h3>
                <p className="text-sm text-secondary-foreground/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Consultation />
      <Footer />
    </main>
  );
}
