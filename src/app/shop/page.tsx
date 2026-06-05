"use client";

import * as React from "react";
import Image from "next/image";
import { ShoppingBag, Eye, Heart } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const products = [
  { id: 1, name: "Pure Radiance Serum", price: "₦45,000", category: "Skincare", image: "serum-product", badge: "Best Seller" },
  { id: 2, name: "Botanical Cleansing Oil", price: "₦32,500", category: "Body Care", image: "body-oil", badge: "New" },
  { id: 3, name: "Hydra-Luxe Face Cream", price: "₦58,000", category: "Skincare", image: "skincare-products", badge: null },
  { id: 4, name: "Aromatic Treatment Mist", price: "₦28,000", category: "Beauty Essentials", image: "serum-product", badge: "Essential" },
  { id: 5, name: "Renewing Clay Mask", price: "₦24,000", category: "Skincare", image: "mask-treatment", badge: null },
  { id: 6, name: "Nourishing Body Oil", price: "₦30,000", category: "Body Care", image: "body-oil", badge: "Best Seller" },
  { id: 7, name: "Brightening Essence", price: "₦38,000", category: "Skincare", image: "skincare-products", badge: "New" },
  { id: 8, name: "Calm & Restore Balm", price: "₦26,500", category: "Beauty Essentials", image: "mask-treatment", badge: null },
];

const categories = ["All", "Skincare", "Body Care", "Beauty Essentials"];

export default function ShopPage() {
  const [active, setActive] = React.useState("All");
  const headerImage = PlaceHolderImages.find((img) => img.id === "skincare-products");

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        label="Shop"
        title={<>The Beauty <span className="italic font-light text-accent">Boutique</span></>}
        description="Curated skincare and beauty essentials formulated with the finest ingredients to bring the empire experience into your daily ritual."
        imageUrl={headerImage?.imageUrl || ""}
        imageHint="skincare products"
      />

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-8 mb-20 overflow-x-auto pb-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={
                  "text-[10px] uppercase tracking-[0.3em] whitespace-nowrap transition-colors pb-2 border-b " +
                  (active === cat ? "text-primary border-primary" : "text-primary/50 border-transparent hover:text-accent")
                }
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {filtered.map((product) => {
              const imgData = PlaceHolderImages.find((img) => img.id === product.image);
              return (
                <div key={product.id} className="group flex flex-col">
                  <div className="relative aspect-[4/5] bg-secondary overflow-hidden mb-6">
                    {product.badge && (
                      <Badge className="absolute top-4 left-4 z-10 bg-primary/90 text-white rounded-none border-none text-[10px] px-3 uppercase tracking-widest font-normal">
                        {product.badge}
                      </Badge>
                    )}
                    <Image
                      src={imgData?.imageUrl || ""}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button className="w-12 h-12 bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-xl">
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 shadow-xl delay-75">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-700 shadow-xl delay-150">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1 text-center">
                    <span className="text-[10px] uppercase tracking-widest text-primary/40 font-medium">{product.category}</span>
                    <h3 className="text-lg font-headline text-primary">{product.name}</h3>
                    <p className="text-sm font-body text-primary/80">{product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
