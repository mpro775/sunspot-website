import type { Metadata } from "next";
import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactDetails } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Sunspot Consultancy",
  description:
    "Contact Sunspot Consultancy to discuss market challenges, commercial visibility, and growth opportunities in Yemen."
};

const serviceOptions = [
  "Market Research",
  "Distributor Audit",
  "Competitor Intelligence",
  "Mystery Shopping",
  "Merchandising Audit",
  "Strategic Advisory",
  "Market Entry & Expansion",
  "Other"
];

const WEB3FORMS_ACCESS_KEY = "21929a12-f4ad-4428-ad53-8e00310a6ba1";

export default function ContactPage() {
  return (
    <>
      <section className="section bg-[var(--sunspot-cream)]">
        <div className="container max-w-4xl">
          <span className="gold-rule mb-7" />
          <p className="eyebrow">Contact Us</p>

          <h1 className="mt-4 text-[clamp(2.4rem,6vw,4.7rem)] font-[780] leading-[1.02] text-[var(--sunspot-green)]">
            Let’s discuss your market challenges and growth opportunities.
          </h1>

          <p className="lead mt-6">
            Share your business question, target market, or service interest.
            Sunspot will respond with a practical next step.
          </p>
        </div>
      </section>

      <section className="section bg-[#fbfaf6]">
        <div className="container grid gap-8 lg:grid-cols-[1fr_0.72fr]">
          <form
            className="surface grid gap-5 p-6 md:p-8"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value={WEB3FORMS_ACCESS_KEY}
            />

            <input
              type="hidden"
              name="subject"
              value="New inquiry from Sunspot Consultancy website"
            />

            <input
              type="hidden"
              name="from_name"
              value="Sunspot Consultancy Website"
            />

            <input
              type="hidden"
              name="redirect"
              value="https://sunspot-consultancy.com/thank-you"
            />

            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-[var(--sunspot-green)]">
                Full Name
                <input
                  className="min-h-12 rounded-[8px] border border-[var(--sunspot-line)] bg-white px-4 text-[var(--sunspot-charcoal)] outline-none focus:border-[var(--sunspot-gold)]"
                  name="name"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-[var(--sunspot-green)]">
                Company Name
                <input
                  className="min-h-12 rounded-[8px] border border-[var(--sunspot-line)] bg-white px-4 text-[var(--sunspot-charcoal)] outline-none focus:border-[var(--sunspot-gold)]"
                  name="company"
                  required
                />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-[var(--sunspot-green)]">
                Email
                <input
                  className="min-h-12 rounded-[8px] border border-[var(--sunspot-line)] bg-white px-4 text-[var(--sunspot-charcoal)] outline-none focus:border-[var(--sunspot-gold)]"
                  name="email"
                  required
                  type="email"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-[var(--sunspot-green)]">
                Phone Number
                <input
                  className="min-h-12 rounded-[8px] border border-[var(--sunspot-line)] bg-white px-4 text-[var(--sunspot-charcoal)] outline-none focus:border-[var(--sunspot-gold)]"
                  name="phone"
                  type="tel"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-bold text-[var(--sunspot-green)]">
              Service of Interest
              <select
                className="min-h-12 rounded-[8px] border border-[var(--sunspot-line)] bg-white px-4 text-[var(--sunspot-charcoal)] outline-none focus:border-[var(--sunspot-gold)]"
                name="service"
                defaultValue="Market Research"
              >
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold text-[var(--sunspot-green)]">
              Message
              <textarea
                className="min-h-36 rounded-[8px] border border-[var(--sunspot-line)] bg-white px-4 py-3 text-[var(--sunspot-charcoal)] outline-none focus:border-[var(--sunspot-gold)]"
                name="message"
                required
              />
            </label>

            <button className="btn btn-primary w-full sm:w-fit" type="submit">
              Send Inquiry
            </button>
          </form>

          <aside className="grid gap-5">
            <div className="surface p-7">
              <p className="eyebrow">Direct Contact</p>

              <div className="mt-6 grid gap-4 text-sm font-semibold text-[rgba(30,33,31,0.78)]">
                <a
                  className="inline-flex items-center gap-3 hover:text-[var(--sunspot-green)]"
                  href={`mailto:${contactDetails.email}`}
                >
                  <Mail className="text-[var(--sunspot-teal)]" size={20} />
                  {contactDetails.email}
                </a>

                <a
                  className="inline-flex items-center gap-3 hover:text-[var(--sunspot-green)]"
                  href={`tel:${contactDetails.phone.replaceAll(" ", "")}`}
                >
                  <Phone className="text-[var(--sunspot-teal)]" size={20} />
                  {contactDetails.phone}
                </a>

                <a
                  className="inline-flex items-center gap-3 hover:text-[var(--sunspot-green)]"
                  href={`https://wa.me/${contactDetails.whatsapp.replace(/[^\d]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle
                    className="text-[var(--sunspot-teal)]"
                    size={20}
                  />
                  WhatsApp
                </a>

                <a
                  className="inline-flex items-center gap-3 hover:text-[var(--sunspot-green)]"
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink
                    className="text-[var(--sunspot-teal)]"
                    size={20}
                  />
                  LinkedIn
                </a>

                <span className="inline-flex items-center gap-3">
                  <MapPin className="text-[var(--sunspot-teal)]" size={20} />
                  {contactDetails.address}
                </span>
              </div>
            </div>

            <div className="rounded-[8px] bg-[var(--sunspot-green)] p-7 text-white">
              <p className="eyebrow !text-[var(--sunspot-gold)]">
                Trust Statement
              </p>

              <p className="mt-4 leading-8 text-white/78">
                Sunspot combines local field knowledge with reliable reporting
                standards to support practical, confidential, and commercially
                focused business discussions.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}