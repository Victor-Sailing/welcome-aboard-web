"use client";

import { useState } from "react";
import { useLocale } from "@/_lib/locale-context";
import { BackgroundPortal } from "@/_components/background-portal";
import { DestinationColumn } from "@/_components/destination-column";

const DESTINATIONS = [
  { key: "welcome" as const, href: "#welcome", image: "/images/welcome.jpg" },
  { key: "cancun" as const, href: "#cancun", image: "/images/cancun.jpg" },
  {
    key: "islaMujeres" as const,
    href: "#isla-mujeres",
    image: "/images/isla-mujeres.jpg",
  },
  {
    key: "rivieraMaya" as const,
    href: "#riviera-maya",
    image: "/images/riviera-maya.jpg",
  },
  { key: "cozumel" as const, href: "#cozumel", image: "/images/cozumel.jpg" },
];

export function DestinationGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLocale();

  return (
    <>
      <BackgroundPortal activeIndex={activeIndex} />

      {/* Vertical divider lines behind menu bar - Desktop only */}
      <div className="hidden lg:block fixed inset-0 z-[5] pointer-events-none" aria-hidden="true">
        <div className="h-full flex">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex-1 border-r" style={{ borderColor: "#FFFFFF1A" }} />
          ))}
          <div className="flex-1" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Desktop: 5 vertical columns */}
        <div className="hidden lg:flex h-[calc(100dvh-6rem)]">
          {DESTINATIONS.map((dest, i) => (
            <DestinationColumn
              key={dest.key}
              title={t.columns[dest.key].title}
              subtitle={t.columns[dest.key].subtitle}
              cta={dest.key === "welcome" ? t.cta.welcome : t.cta.destinations}
              href={dest.href}
              isActive={activeIndex === i}
              onHover={() => setActiveIndex(i)}
              onLeave={() => setActiveIndex(0)}
              index={i}
              mobileImage={dest.image}
            />
          ))}
        </div>

        {/* Mobile: scrollable rows */}
        <div className="flex lg:hidden flex-col h-[calc(100dvh-5rem)] overflow-y-auto snap-y snap-mandatory">
          {DESTINATIONS.map((dest, i) => (
            <div key={dest.key} className="snap-start flex-shrink-0">
              <DestinationColumn
                title={t.columns[dest.key].title}
                subtitle={t.columns[dest.key].subtitle}
                cta={dest.key === "welcome" ? t.cta.welcome : t.cta.destinations}
                href={dest.href}
                isActive={activeIndex === i}
                onHover={() => setActiveIndex(i)}
                onLeave={() => {}}
                index={i}
                mobileImage={dest.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
