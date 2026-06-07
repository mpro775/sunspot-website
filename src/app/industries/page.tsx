import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { industries } from "@/data/industries";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";

export const metadata: Metadata = {
  title: "Industries | Sunspot Consultancy",
  description:
    "Sunspot supports FMCG, food and beverage, consumer electronics, telecom, retail, and distribution businesses in Yemen."
};

export default function IndustriesPage() {
  return (
    <>
      <section className="section relative overflow-hidden bg-[var(--sunspot-cream)]">
        <ParallaxBackground speed={-0.1}>
          <div className="absolute right-[5%] top-[-5%] h-80 w-80 rounded-full bg-[rgba(38,92,103,0.05)] blur-2xl" />
        </ParallaxBackground>
        <div className="container relative z-10 max-w-4xl">
          <ScrollReveal variant="fade-up">
            <span className="gold-rule mb-7" />
            <p className="eyebrow">Industries</p>
            <h1 className="mt-4 text-[clamp(2.4rem,6vw,4.7rem)] font-[780] leading-[1.02] text-[var(--sunspot-green)]">
              Sector visibility for companies operating across Yemen’s commercial channels.
            </h1>
            <p className="lead mt-6">
              Sunspot supports organizations that need reliable market visibility, channel intelligence, and field verification across priority industries.
            </p>
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
