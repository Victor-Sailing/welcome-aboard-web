"use client";

import Image from "next/image";

const DESTINATIONS = [
  { id: "welcome", image: "/images/welcome.jpg" },
  { id: "cancun", image: "/images/cancun.jpg" },
  { id: "isla-mujeres", image: "/images/isla-mujeres.jpg" },
  { id: "riviera-maya", image: "/images/riviera-maya.jpg" },
  { id: "cozumel", image: "/images/cozumel.jpg" },
];

export function BackgroundPortal({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      {DESTINATIONS.map((dest, i) => (
        <div
          key={dest.id}
          className="absolute inset-0 transition-opacity ease-in-out"
          style={{
            opacity: activeIndex === i ? 1 : 0,
            transitionDuration: "800ms",
          }}
        >
          <Image
            src={dest.image || "/placeholder.svg"}
            alt=""
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
            quality={90}
          />
        </div>
      ))}
      {/* Dark gradient overlay at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      {/* Subtle overall darkening */}
      <div className="absolute inset-0 bg-black/15" />
    </div>
  );
}
