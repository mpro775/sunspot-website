import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { industries } from "@/data/industries";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";
import { ParallaxImage } from "@/components/ui/ParallaxImage";

export const metadata: Metadata = {
  title: "Industries | Sunspot Consultancy",
  description:
    "Sunspot supports FMCG, food and beverage, consumer electronics, telecom, retail, and distribution businesses in Yemen."
};

export default function IndustriesPage() {
  return (
    <>
      <section className="section relative overflow-hidden bg-[var(--sunspot-cream)] py-16 lg:py-24">
        <ParallaxBackground speed={-0.1}>
          <div className="absolute right-[5%] top-[-5%] h-80 w-80 rounded-full bg-[rgba(38,92,103,0.05)] blur-2xl" />
        </ParallaxBackground>
        <div className="container relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <ScrollReveal variant="fade-right">
            <span className="gold-rule mb-7" />
            <p className="eyebrow">Industries</p>
            <h1 className="mt-4 text-[clamp(2.4rem,5vw,4.2rem)] font-[780] leading-[1.02] text-[var(--sunspot-green)]">
              Sector visibility for companies operating across Yemen’s commercial channels.
            </h1>
            <p className="lead mt-6">
              Sunspot supports organizations that need reliable market visibility, channel intelligence, and field verification across priority industries.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="scale" duration={0.9} delay={0.2} className="relative">
            <div className="absolute -inset-4 rounded-[12px] bg-gradient-to-tr from-[var(--sunspot-gold)]/10 to-transparent blur-xl" />
            <ParallaxImage
              src="/images/retail-distribution-vehicles.webp"
              alt="Retail distribution vehicles representing logistics and channel coverage in Yemen"
              aspectRatio="aspect-[4/3]"
              containerClassName="rounded-[12px] shadow-2xl border border-[var(--sunspot-line)]"
              speed={-0.06}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-[#fbfaf6]">
        <div className="container">
          <ScrollReveal variant="fade-up">
            <SectionHeader eyebrow="Coverage" title="Industries we support" />
          </ScrollReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {industries.map((industry, index) => (
              <ScrollReveal
                variant="fade-up"
                delay={index * 0.08}
                key={industry.slug}
                className="h-full"
              >
                <article className="surface p-7 h-full">
                  <h2 className="text-2xl font-bold text-[var(--sunspot-green)]">{industry.title}</h2>
                  <p className="mt-4 leading-8 text-[rgba(30,33,31,0.74)]">{industry.description}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {industry.relatedServices.map((service) => (
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[rgba(30,33,31,0.78)]" key={service}>
                        <CheckCircle2 size={18} className="text-[var(--sunspot-teal)]" /> {service}
                      </span>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--sunspot-green)] text-white overflow-hidden relative">
        <ParallaxBackground speed={0.1}>
          <div className="absolute inset-0 bg-glow-radial opacity-35" />
        </ParallaxBackground>
        <div className="container relative z-10 text-center">
          <ScrollReveal variant="scale">
            <p className="eyebrow !text-[var(--sunspot-gold)]">Market Reality</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-[clamp(2rem,4vw,3.3rem)] font-[760] leading-tight">
              Better visibility supports better commercial decisions.
            </h2>
            <Link className="btn btn-primary mt-8" href="/contact">
              Discuss Your Industry <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
