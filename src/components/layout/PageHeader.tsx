import Image from "next/image";
import Link from "next/link";

type PageHeaderProps = {
  label: string;
  title: React.ReactNode;
  description?: string;
  imageUrl: string;
  imageHint?: string;
};

export function PageHeader({ label, title, description, imageUrl, imageHint }: PageHeaderProps) {
  return (
    <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={typeof title === "string" ? title : label}
          fill
          className="object-cover brightness-[0.7] scale-105"
          priority
          data-ai-hint={imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-primary/60" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20 text-center text-white">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="flex flex-col items-center gap-4">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-xs uppercase tracking-[0.5em] font-medium text-accent">{label}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline leading-[1.1]">{title}</h1>
          {description && (
            <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed opacity-90">{description}</p>
          )}
          <div className="flex items-center justify-center gap-3 pt-4 text-[10px] uppercase tracking-[0.3em] opacity-70">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-accent">{label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
