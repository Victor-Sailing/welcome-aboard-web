"use client";

import { useState } from "react";

type DestinationColumnProps = {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  index: number;
  mobileImage: string;
};

export function DestinationColumn({
  title,
  subtitle,
  cta,
  href,
  isActive,
  onHover,
  onLeave,
  index,
  mobileImage,
}: DestinationColumnProps) {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <>
      {/* Desktop Column */}
      <a
        href={href}
        className="hidden lg:flex relative flex-1 flex-col justify-end items-center group cursor-pointer transition-all duration-500"
        style={{ paddingBottom: "70px" }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        aria-label={`${title} - ${subtitle}`}
      >
        {/* Removed overlay - now handled by vertical lines in parent */}

        {/* Bottom content with slide-in button */}
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          {/* Title and Subtitle - pushed up when button slides in */}
          <div
            className={`transition-transform duration-500 ease-out ${
              isActive ? "-translate-y-8" : "translate-y-0"
            }`}
          >
            <h2 className="font-serif text-champagne text-2xl lg:text-3xl xl:text-4xl mb-2 tracking-wide text-balance">
              {title}
            </h2>
            <p className="font-sans text-champagne/70 text-[10px] lg:text-xs tracking-[0.3em] uppercase mb-6">
              {subtitle}
            </p>
          </div>

          {/* Button - slides in from bottom, hidden initially for ALL columns */}
          <span
            className={`inline-block border text-champagne text-[10px] tracking-[0.25em] px-6 py-2.5 transition-all duration-500 ease-out hover:bg-champagne/10 ${
              isActive
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              borderColor: "#F5F2E9",
              borderWidth: "1px",
              borderRadius: "10px",
            }}
          >
            {cta}
          </span>
        </div>
      </a>

      {/* Mobile Row */}
      <a
        href={href}
        className="flex lg:hidden relative h-[33.34vh] w-full items-end group"
        onTouchStart={() => {
          onHover();
          setIsTouched(true);
        }}
        onTouchEnd={() => {
          setTimeout(() => {
            onLeave();
            setIsTouched(false);
          }, 200);
        }}
        aria-label={`${title} - ${subtitle}`}
      >
        {/* Mobile background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mobileImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Separator */}
        <div
          className="absolute top-0 left-0 right-0 h-px bg-champagne/10"
          aria-hidden="true"
        />

        {/* Content - centered */}
        <div className="relative z-10 px-6 pb-12 w-full flex flex-col items-center text-center">
          <h2 className="font-serif text-champagne text-3xl mb-1 tracking-wide">
            {title}
          </h2>
          <p className="font-sans text-champagne/60 text-[10px] tracking-[0.3em] uppercase mb-3">
            {subtitle}
          </p>
          <span
            className={`inline-block border text-champagne text-[10px] tracking-[0.25em] px-5 py-2 transition-all duration-300 ${
              isTouched ? "opacity-100" : "opacity-70"
            }`}
            style={{
              borderColor: "#F5F2E9",
              borderWidth: "1px",
              borderRadius: "10px",
            }}
          >
            {cta}
          </span>
        </div>
      </a>
    </>
  );
}
