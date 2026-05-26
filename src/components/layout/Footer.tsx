import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const solutions = [
  { href: "/solutions#voip", label: "VoIP Billing" },
  { href: "/solutions#prepaid", label: "Pre-Paid Calling Cards" },
  { href: "/solutions#bandwidth", label: "Bandwidth Management" },
  { href: "/solutions#interconnect", label: "Interconnect Billing" },
  { href: "/solutions#content", label: "Content Billing" },
  { href: "/solutions#mvno", label: "MVNO Billing" },
];

const company = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "UltraBill Product" },
  { href: "/services", label: "BSS Services" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-teal-600 text-white font-bold text-sm">
                BR
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Brain<span className="text-teal-400">Roots</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Convergent Billing & Customer Care solutions for telecom operators
              worldwide. ISO 9001:2000 certified.
            </p>
            <p className="text-xs text-teal-400 font-medium italic">
              Dedicated Convergence — Realizing Tomorrow
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Solutions
            </h3>
            <ul className="space-y-2">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-teal-400 mt-0.5 shrink-0" />
                <span>A-1/271 Paschim Vihar<br />New Delhi – 110063, India</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-teal-400 mt-0.5 shrink-0" />
                <span>+91.11.26516367</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-teal-400 mt-0.5 shrink-0" />
                <a href="mailto:info@brainroots.com" className="hover:text-teal-400 transition-colors">
                  info@brainroots.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} BrainRoots Solution Pvt. Ltd. All rights reserved.</p>
          <p>ISO 9001:2000 certified · New Delhi, India</p>
        </div>
      </div>
    </footer>
  );
}
