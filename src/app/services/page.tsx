import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Services } from "@/components/sections/Services";
import { Consultation } from "@/components/sections/Consultation";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata = {
  title: "Services | Jay'z Beautie Empire",
  description: "Explore our luxury spa treatments, facials, massage therapy and skincare consultations.",
};

const process = [
  { step: "01", title: "Consultation", desc: "We begin with a detailed assessment of your skin and beauty goals." },
  { step: "02", title: "Personalized Plan", desc: "A bespoke treatment plan tailored to your unique needs and lifestyle." },
  { step: "03", title: "The Treatment", desc: "Relax in our sanctuary while our experts work their craft." },
  { step: "04", title: "Aftercare", desc: "Ongoing guidance and product recommendations to maintain your glow." },
];

const pricing = [
  { name: "Glow Facial", duration: "60 min", price: "₦35,000" },
  { name: "Deep Cleansing Facial", duration: "75 min", price: "₦42,000" },
  { name: "Massage Therapy", duration: "60 min", price: "₦40,000" },
  { name: "Skincare Consultation", duration: "45 min", price: "₦20,000" },
  { name: "Signature Spa Ritual", duration: "120 min", price: "₦75,000" },
];

export default function ServicesPage() {
  const headerImage = PlaceHolderImages.find((img) => img.id === "facial-treatment");

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        label="Services"
        title={<>Treatments That <span className="italic font-light text-accent">Transform</span></>}
        description="From rejuvenating facials to deeply relaxing spa rituals, every treatment is crafted to deliver visible results and a moment of pure indulgence."
        imageUrl={headerImage?.imageUrl || ""}
        imageHint="facial treatment"
      />

      <Services />

      {/* Process */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] text-primary/60 font-medium">The Experience</span>
            <h2 className="text-4xl md:text-5xl font-headline text-primary italic">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {process.map((p) => (
              <div key={p.step} className="space-y-4">
                <span className="font-headline text-5xl text-accent/40">{p.step}</span>
                <h3 className="text-xl font-headline text-primary italic">{p.title}</h3>
                <p className="text-sm text-secondary-foreground/70 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] text-primary/60 font-medium">Investment</span>
            <h2 className="text-4xl md:text-5xl font-headline text-primary italic">Treatment Menu</h2>
          </div>
          <div className="divide-y divide-primary/10 border-y border-primary/10">
            {pricing.map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-6 py-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-headline text-primary">{item.name}</h3>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50">{item.duration}</span>
                </div>
                <span className="font-body text-lg text-primary whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button size="lg" className="rounded-none px-12 h-14 bg-primary text-white hover:bg-primary/90 uppercase tracking-[0.2em] text-xs">
              Book Appointment
            </Button>
          </div>
        </div>
      </section>

      <Consultation />
      <Footer />
    </main>
  );
}
