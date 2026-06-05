
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : isHome
          ? "bg-transparent py-6"
          : "bg-white py-4 border-b"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="group flex items-center" aria-label="Jay'z Beautie Empire — Home">
          <Image
            src={!isScrolled && isHome ? "/logo.png" : "/logo-dark.png"}
            alt="Jay'z Beautie Empire"
            width={105}
            height={102}
            priority
            className="h-14 w-auto transition-opacity duration-300"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-widest hover:text-accent transition-colors",
                !isScrolled && isHome ? "text-white" : "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4 lg:space-x-6">
          <button className={cn(
            "transition-colors",
            !isScrolled && isHome ? "text-white hover:text-white/70" : "text-foreground hover:text-primary"
          )}>
            <Heart className="w-5 h-5" />
          </button>
          <button className={cn(
            "transition-colors",
            !isScrolled && isHome ? "text-white hover:text-white/70" : "text-foreground hover:text-primary"
          )}>
            <ShoppingBag className="w-5 h-5" />
          </button>
          
          <Button
            asChild
            className={cn(
              "hidden md:flex rounded-none px-8 uppercase tracking-[0.15em] text-xs h-11",
              !isScrolled && isHome
                ? "bg-white text-primary hover:bg-white/90"
                : "bg-primary text-white hover:bg-primary/90"
            )}
          >
            <Link href="/contact">Book Appointment</Link>
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <button className={cn(
                "lg:hidden transition-colors",
                !isScrolled && isHome ? "text-white" : "text-foreground"
              )}>
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] flex flex-col pt-20">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex flex-col space-y-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xl font-headline tracking-widest text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild className="rounded-none uppercase tracking-[0.15em] w-full mt-4">
                  <Link href="/contact">Book Appointment</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
