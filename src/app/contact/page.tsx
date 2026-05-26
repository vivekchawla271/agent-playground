import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Headquarters",
    lines: ["A-1/271 Paschim Vihar", "New Delhi – 110063", "India"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91-9810042232"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["vivek.chawla@brainroots.com", "chawla.vivek@gmail.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday – Friday", "9:00 AM – 6:00 PM IST"],
  },
];

const offices = [
  { location: "New Delhi, India", type: "Headquarters" },
  { location: "United Kingdom", type: "European Operations" },
  { location: "Japan", type: "Asia-Pacific Operations" },
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <Badge className="mb-4 bg-teal-600/40 text-teal-100 border-teal-500 hover:bg-teal-600/40">
            Contact Us
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 max-w-2xl">
            Get in Touch with Our Team
          </h1>
          <p className="text-teal-100 text-lg max-w-xl leading-relaxed">
            Interested in UltraBill, a demo, or a consulting engagement? Reach out and
            our team will respond within one business day.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="w-full px-3 py-2.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Smith"
                    className="w-full px-3 py-2.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Company / Organization
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Acme Telecom"
                  className="w-full px-3 py-2.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@acmetelecom.com"
                  className="w-full px-3 py-2.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3 py-2.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Area of Interest
                </label>
                <select
                  id="interest"
                  className="w-full px-3 py-2.5 rounded-md border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="">Select an area…</option>
                  <option value="demo">Product Demo (UltraBill)</option>
                  <option value="managed">Managed Services</option>
                  <option value="consulting">Consulting Engagement</option>
                  <option value="integration">System Integration</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your billing requirements or what you'd like to discuss…"
                  className="w-full px-3 py-2.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-teal-700 hover:bg-teal-800 font-semibold"
              >
                Send Message
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form you agree to be contacted by BrainRoots
                Solutions regarding your inquiry.
              </p>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {contactDetails.map((d) => (
                <Card key={d.title} className="border-0 shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <d.icon size={18} className="text-teal-700" />
                      <CardTitle className="text-sm font-semibold text-gray-900">
                        {d.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {d.lines.map((line, i) => (
                      <p key={i} className="text-sm text-gray-600">
                        {d.title === "Email" ? (
                          <a
                            href={`mailto:${line}`}
                            className="hover:text-teal-700 transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                Global Offices
              </h3>
              <div className="space-y-3">
                {offices.map((o) => (
                  <div
                    key={o.location}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-sm font-medium text-gray-900">
                      {o.location}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {o.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-teal-50 rounded-xl p-6 mt-8">
              <h3 className="font-semibold text-teal-900 mb-2">
                Looking for a Demo?
              </h3>
              <p className="text-sm text-teal-800 leading-relaxed">
                We offer live demonstrations of UltraBill tailored to your specific
                CSP environment — VoIP, broadband, pre-paid, interconnect, and more.
                Select &ldquo;Product Demo&rdquo; in the form to request one.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
