"use client";

import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/ui/hero-carousel";

const SLIDE_IMAGES = [
  "/images/slides/slide1.jpg",
  "/images/slides/slide2.webp",
  "/images/slides/slide3.webp",
  "/images/slides/slide4.webp",
  "/images/slides/slide5.jpeg",
];

interface SideBanner {
  src: string;
  alt: string;
  href: string;
}

const leftBanners: SideBanner[] = [
  {
    src: "/images/banners/Gemini_Generated_Image_1gagrs1gagrs1gag.png",
    alt: "iQOO 15R Premium 5G",
    href: "/products/iqoo-15r",
  },
  {
    src: "/images/banners/Gemini_Generated_Image_abvgiuabvgiuabvg.png",
    alt: "Best exchange offers",
    href: "/products",
  },
];

const rightBanners: SideBanner[] = [
  {
    src: "/images/banners/Gemini_Generated_Image_zerbi9zerbi9zerb.png",
    alt: "iQOO Neo 10 Gaming Flagship",
    href: "/products/iqoo-neo-10",
  },
  {
    src: "/images/banners/vivo-t5-pro-banner.jpg",
    alt: "Vivo T5 Pro 5G",
    href: "/products/vivo-t5-pro",
  },
];

function SideColumn({ banners }: { banners: SideBanner[] }) {
  return (
    <div className="flex flex-col gap-3 h-full">
      {banners.map((banner, i) => (
        <Link
          key={i}
          href={banner.href}
          className="relative flex-1 overflow-hidden rounded-2xl bg-slate-100 group shadow-sm hover:shadow-md transition-shadow"
        >
          <Image
            src={banner.src}
            alt={banner.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 0px, 20vw"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          <div className="absolute bottom-4 left-4 z-10 rounded-lg bg-white/95 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-900 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105">
            Shop Now
          </div>
        </Link>
      ))}
    </div>
  );
}

export function BannerSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_2.5fr_1fr]">
        {/* Left side — hidden below lg */}
        <div className="hidden lg:block">
          <SideColumn banners={leftBanners} />
        </div>

        {/* Center — main slider */}
        <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-[440px]">
          <HeroCarousel
            images={SLIDE_IMAGES}
            className="absolute inset-0 h-full rounded-2xl"
            autoPlayInterval={4500}
          />
        </div>

        {/* Right side — hidden below lg */}
        <div className="hidden lg:block">
          <SideColumn banners={rightBanners} />
        </div>
      </div>
    </section>
  );
}
