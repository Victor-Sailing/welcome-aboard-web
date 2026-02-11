"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "@/_lib/locale-context";
import { localeLabels, localeFlags, type Locale, type Currency } from "@/_lib/i18n";

function CalendarIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-champagne text-xl hover:opacity-70 transition-opacity"
        aria-label="Select language"
        aria-expanded={open}
      >
        <span>{localeFlags[locale]}</span>
        <ChevronDownIcon />
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 bg-[#121212]/95 backdrop-blur-xl border border-champagne/20 rounded-sm overflow-hidden z-50" style={{ width: "280px" }}>
          <div className="grid grid-cols-2 gap-0">
            {(Object.keys(localeLabels) as Locale[]).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setLocale(key);
                  setOpen(false);
                }}
                className={`flex items-center gap-2 px-3 py-2.5 text-[10px] tracking-[0.15em] text-left transition-colors ${
                  locale === key
                    ? "text-champagne bg-champagne/10"
                    : "text-champagne/60 hover:text-champagne hover:bg-champagne/5"
                }`}
              >
                <span className="text-base">{localeFlags[key]}</span>
                <span className="whitespace-nowrap">{localeLabels[key]}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CurrencySwitcher() {
  const { currency, setCurrency } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currencies: Array<{ code: Currency; symbol: string }> = [
    { code: "MXN", symbol: "$" },
    { code: "USD", symbol: "$" },
    { code: "EUR", symbol: "€" },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-champagne text-xs font-sans tracking-[0.15em] hover:opacity-70 transition-opacity"
        aria-label="Select currency"
        aria-expanded={open}
      >
        <span>{currency}</span>
        <ChevronDownIcon />
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 bg-[#121212]/95 backdrop-blur-xl border border-champagne/20 rounded-sm overflow-hidden z-50 min-w-[100px]">
          {currencies.map((curr) => (
            <button
              key={curr.code}
              onClick={() => {
                setCurrency(curr.code);
                setOpen(false);
              }}
              className={`flex items-center justify-between w-full px-4 py-2.5 text-[10px] tracking-[0.15em] transition-colors ${
                currency === curr.code
                  ? "text-champagne bg-champagne/10"
                  : "text-champagne/60 hover:text-champagne hover:bg-champagne/5"
              }`}
            >
              <span>{curr.code}</span>
              <span className="text-sm ml-2">{curr.symbol}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const { t, locale } = useLocale();

  // Asian languages that should not be stacked
  const asianLanguages: Locale[] = ["ja", "ko", "zh"];
  const isAsianLanguage = asianLanguages.includes(locale);

  // Split brand text for mobile stacking (only for non-Asian languages)
  const brandWords = t.header.brand.split(" ");
  const firstWord = brandWords[0] || "WELCOME";
  const secondWord = brandWords.slice(1).join(" ") || "ABOARD";

  return (
    <header className="relative lg:fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      {/* Desktop: Refined Pill with champagne border (1px) and 15px radius */}
      <nav
        className="hidden lg:flex items-center justify-between mt-6 mx-auto px-8 py-4 pointer-events-auto border"
        style={{
          minWidth: "min(780px, 90vw)",
          backgroundColor: "rgba(18, 18, 18, 0.2)",
          backdropFilter: "blur(12px)",
          borderColor: "#F5F2E9",
          borderWidth: "1px",
          borderRadius: "15px",
        }}
        aria-label="Main navigation"
      >
        {/* Left utilities */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <CurrencySwitcher />
        </div>

        {/* Center brand */}
        <span className="font-serif text-champagne text-3xl tracking-[0.35em] select-none">
          {t.header.brand}
        </span>

        {/* Right utilities */}
        <div className="flex items-center gap-4">
          <button
            className="text-champagne hover:opacity-70 transition-opacity"
            style={{ borderRadius: "10px" }}
            aria-label={t.header.calendar}
          >
            <CalendarIcon />
          </button>
          <button
            className="text-champagne hover:opacity-70 transition-opacity"
            style={{ borderRadius: "10px" }}
            aria-label={t.header.signIn}
          >
            <UserIcon />
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet: Full-width Row with centered content */}
      <nav
        className="flex lg:hidden items-center justify-between w-full px-5 py-4 pointer-events-auto"
        style={{
          backgroundColor: "#121212",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #F5F2E9",
        }}
        aria-label="Main navigation"
      >
        {/* Left utilities - centered in row */}
        <div className="flex items-center gap-4 justify-center flex-1">
          <LanguageSwitcher />
          <CurrencySwitcher />
        </div>

        {/* Center brand - stacked (except Asian languages) or centered */}
        <div className="flex flex-col items-center justify-center flex-1">
          {isAsianLanguage ? (
            <span className="font-serif text-champagne text-xl tracking-[0.25em] select-none">
              {t.header.brand}
            </span>
          ) : (
            <>
              <span className="font-serif text-champagne text-xl tracking-[0.25em] select-none">
                {firstWord}
              </span>
              <span className="font-serif text-champagne text-xl tracking-[0.25em] select-none">
                {secondWord}
              </span>
            </>
          )}
        </div>

        {/* Right utilities - centered in row */}
        <div className="flex items-center gap-4 justify-center flex-1">
          <button
            className="text-champagne hover:opacity-70 transition-opacity p-2"
            style={{ borderRadius: "10px" }}
            aria-label={t.header.calendar}
          >
            <CalendarIcon />
          </button>
          <button
            className="text-champagne hover:opacity-70 transition-opacity p-2"
            style={{ borderRadius: "10px" }}
            aria-label={t.header.signIn}
          >
            <UserIcon />
          </button>
        </div>
      </nav>
    </header>
  );
}
