"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mail, Phone, ArrowRight } from "lucide-react";
import { navigation } from "@/data/navigation";
import { Logo } from "@/components/ui/Logo";
import { contactDetails } from "@/data/contact";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lenis = useLenis();

  // Prevent scroll when mobile menu is open, using both overflow: hidden and Lenis stop/start
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "unset";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "unset";
      lenis?.start();
    };
  }, [open, lenis]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#fbfaf6]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(27,57,46,0.05)] border-b border-[rgba(27,57,46,0.12)]"
            : "bg-[#fbfaf6] md:bg-transparent border-b border-transparent"
        }`}
      >
        {/* Top Utility Bar - Hidden when scrolled or on mobile */}
        <div
          className={`hidden md:block bg-[var(--sunspot-green)] text-white text-[12px] font-semibold transition-all duration-300 overflow-hidden ${
            scrolled ? "max-h-0 opacity-0" : "max-h-[38px] py-2.5 border-b border-white/10"
          }`}
        >
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href={`mailto:${contactDetails.email}`}
                className="flex items-center gap-2 opacity-85 hover:opacity-100 transition-opacity"
              >
                <Mail size={13} className="text-[var(--sunspot-gold)]" />
                <span>{contactDetails.email}</span>
              </a>
              <a
                href={`https://wa.me/${contactDetails.whatsapp.replace(/\+/g, "").replace(/\s/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-85 hover:opacity-100 transition-opacity"
              >
                <Phone size={13} className="text-[var(--sunspot-gold)]" />
                <span>{contactDetails.phone}</span>
              </a>
            </div>
            <div className="flex items-center gap-4 opacity-85">
              <span>The Trusted Market Intelligence & Strategic Advisory Partner for Yemen</span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`container flex items-center justify-between gap-5 transition-all duration-300 ${
            scrolled ? "min-h-[68px] py-1.5" : "min-h-[82px] py-3.5"
          }`}
        >
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  className={`group relative py-2 px-1 text-[14px] font-bold tracking-wide transition-colors duration-300 ${
                    active ? "text-[var(--sunspot-green)]" : "text-[rgba(30,33,31,0.78)] hover:text-[var(--sunspot-green)]"
                  }`}
                  href={item.href}
                >
                  {item.label}
                  {/* Sliding Underline Accent */}
                  <span
                    className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-[var(--sunspot-gold)] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:block">
            <Link
              className="btn btn-primary group/btn flex items-center gap-2 px-5 py-2.5 text-[14px] font-bold tracking-wide shadow-sm hover:shadow-md transition-all duration-300"
              href="/contact"
            >
              <span>Discuss a Project</span>
              <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggler */}
          <button
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--sunspot-line)] text-[var(--sunspot-green)] hover:bg-[var(--sunspot-mist)] transition-colors md:hidden focus:outline-none focus:ring-2 focus:ring-[var(--sunspot-green)]/20 ${
              open ? "bg-[var(--sunspot-mist)]" : ""
            }`}
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 190 }}
            className="fixed inset-0 z-40 bg-[#fbfaf6] md:hidden pt-28 px-6 flex flex-col justify-between pb-10 border-b border-[var(--sunspot-line)] shadow-2xl"
          >
            <motion.nav 
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                  }
                }
              }}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-5" 
              aria-label="Mobile navigation"
            >
              {navigation.map((item, index) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 150, damping: 18 } }
                    }}
                  >
                    <Link
                      className="group flex items-baseline gap-4 border-b border-[var(--sunspot-line)] pb-3.5 text-[22px] font-bold tracking-wide transition-colors"
                      href={item.href}
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-xs font-semibold text-[var(--sunspot-teal)] opacity-60">
                        0{index + 1}.
                      </span>
                      <span
                        className={`transition-colors duration-300 ${
                          active ? "text-[var(--sunspot-gold)]" : "text-[var(--sunspot-green)] group-hover:text-[var(--sunspot-gold)]"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.25, type: "spring", stiffness: 120 } }}
              className="flex flex-col gap-6"
            >
              <div className="h-px bg-[var(--sunspot-line)] w-full" />
              <div className="grid gap-3 text-sm text-[rgba(30,33,31,0.8)]">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--sunspot-teal)]">Get in Touch</p>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="hover:text-[var(--sunspot-gold)] transition-colors flex items-center gap-2"
                >
                  <Mail size={15} className="text-[var(--sunspot-teal)]" />
                  <span>{contactDetails.email}</span>
                </a>
                <a
                  href={`https://wa.me/${contactDetails.whatsapp.replace(/\+/g, "").replace(/\s/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--sunspot-gold)] transition-colors flex items-center gap-2"
                >
                  <Phone size={15} className="text-[var(--sunspot-teal)]" />
                  <span>{contactDetails.phone}</span>
                </a>
              </div>
              <Link
                className="btn btn-primary w-full text-center py-3.5 font-bold"
                href="/contact"
                onClick={() => setOpen(false)}
              >
                Discuss a Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
