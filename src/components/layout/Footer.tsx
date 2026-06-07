import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { contactDetails } from "@/data/contact";
import { navigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-[var(--sunspot-green)] py-14 text-white">
      <div className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="inline-flex rounded-md bg-[#fbfaf6] px-3 py-2">
            <Logo variant="light" />
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/76">
            Business intelligence, commercial visibility, and strategic advisory for organizations operating in Yemen and emerging markets.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--sunspot-gold)]">Navigation</h2>
          <div className="mt-5 grid gap-3">
            {navigation.map((item) => (
              <Link className="text-sm text-white/78 transition hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--sunspot-gold)]">Contact</h2>
          <div className="mt-5 grid gap-3 text-sm text-white/78">
            <a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${contactDetails.email}`}>
              <Mail size={17} /> {contactDetails.email}
            </a>
            <a className="inline-flex items-center gap-2 hover:text-white" href={`tel:${contactDetails.phone.replaceAll(" ", "")}`}>
              <Phone size={17} /> {contactDetails.phone}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={17} /> {contactDetails.address}
            </span>
          </div>
        </div>
      </div>
      <div className="container mt-10 border-t border-white/12 pt-6 text-sm text-white/58">
        © {new Date().getFullYear()} Sunspot Consultancy. All rights reserved.
      </div>
    </footer>
  );
}
