"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.gif" alt="BrainRoots Logo" width={160} height={50} className="h-10 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-teal-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button asChild size="sm" className="bg-teal-700 hover:bg-teal-800">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-teal-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-gray-700 hover:text-teal-700 py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="w-full bg-teal-700 hover:bg-teal-800 mt-2">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Get in Touch
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
