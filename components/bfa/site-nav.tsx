"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

const navLinks = [
  { href: "#gallery", label: "Gallery", id: "nav-gallery-link" },
  { href: "#programs", label: "Programs", id: "nav-programs-link" },
  { href: "#schedule", label: "Schedule", id: "nav-schedule-link" },
  { href: "#coaches", label: "Coaches", id: "nav-coaches-link" },
  { href: "#tournaments", label: "Tournaments", id: "nav-tournaments-link" },
] as const;

const whatsappLink =
  "https://wa.me/919871141009?text=" +
  encodeURIComponent("Hi Bharat Football Academy, I want to book a free trial.");

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 z-50 w-full border-b border-gray-100">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1F1A55]">
            <Icon icon="lucide:trophy" className="text-xl text-white" />
          </div>
          <span className="bfa-font-display text-xl font-bold tracking-tighter text-[#1F1A55] uppercase">
            Bharat Academy
          </span>
        </div>
        <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={link.id}
              className="transition-colors hover:text-[#F28C28]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-cta-trial-btn"
            className="rounded-full bg-[#1F1A55] px-6 py-2.5 text-white transition-all hover:bg-[#F28C28]"
            onClick={() => setOpen(false)}
          >
            Book Free Trial
          </a>
        </div>
        <button
          type="button"
          className="text-2xl text-[#1F1A55] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon icon={open ? "lucide:x" : "lucide:menu"} />
        </button>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-gray-100 bg-white px-6 py-4 shadow-lg md:hidden"
        >
          <div className="flex flex-col gap-4 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`${link.id}-mobile`}
                className="py-1 transition-colors hover:text-[#F28C28]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-[#1F1A55] px-6 py-3 text-center text-white transition-all hover:bg-[#F28C28]"
              onClick={() => setOpen(false)}
            >
              Book Free Trial
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
