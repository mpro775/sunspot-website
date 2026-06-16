import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { services } from "@/data/services";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";

export const metadata: Metadata = {
  title: "Services | Sunspot Consultancy",
  description:
    "Explore Sunspot’s market research, distributor audit, competitor intelligence, mystery shopping, merchandising audit, and strategic advisory services."
};

const categories = ["Market Intelligence Services", "Business Consultancy Services"] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="section relative overflow-hidden bg-[var(--sunspot-cream)]">
        <ParallaxBackground speed={-0.1}>
          <div className="absolute right-[5%] top-[-5%] h-80 w-80 rounded-full bg-[rgba(38,92,103,0.05)] blur-2xl" />
        </ParallaxBackground>
        <div className="container relative z-10 max-w-4xl">
          <ScrollReveal variant="fade-up">
            <span className="gold-rule mb-7" />
            <p className="eyebrow">Services</p>
            <h1 className="mt-4 text-[clamp(2.4rem,6vw,4.7rem)] font-[780] leading-[1.02] text-[var(--sunspot-green)]">
              Market intelligence and advisory services for confident commercial decisions.
            </h1>
            <p className="lead mt-6">
              Sunspot combines field execution, commercial analysis, and practical advisory to support companies operating in complex and emerging markets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#market-intelligence" className="btn btn-secondary text-sm font-bold flex items-center gap-2 py-2.5 px-5 shadow-sm hover:shadow-md transition-all duration-300">
                <span>Market Intelligence Services</span>
                <ArrowRight size={14} className="rotate-90 text-[var(--sunspot-gold)] transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a href="#business-consultancy" className="btn btn-secondary text-sm font-bold flex items-center gap-2 py-2.5 px-5 shadow-sm hover:shadow-md transition-all duration-300">
                <span>Business Consultancy Services</span>
                <ArrowRight size={14} className="rotate-90 text-[var(--sunspot-gold)] transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {categories.map((category, categoryIndex) => {
        const sectionId = category === "Market Intelligence Services" ? "market-intelligence" : "business-consultancy";
        return (
          <section 
            id={sectionId}
            className={categoryIndex === 0 ? "section bg-[#fbfaf6] relative overflow-hidden" : "section bg-[var(--sunspot-cream)] relative overflow-hidden"} 
            key={category}
          >
          {categoryIndex === 0 ? (
            <ParallaxBackground speed={0.08}>
              <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[rgba(38,92,103,0.03)] blur-2xl" />
            </ParallaxBackground>
          ) : (
            <ParallaxBackground speed={-0.08}>
              <div className="absolute right-[-10%] bottom-0 h-80 w-80 rounded-full bg-[rgba(242,178,26,0.04)] blur-2xl" />
            </ParallaxBackground>
          )}
          <div className="container relative z-10">
            <ScrollReveal variant="fade-up">
              <SectionHeader eyebrow={categoryIndex === 0 ? "Intelligence" : "Consultancy"} title={category} />
            </ScrollReveal>
            <div className="mt-10 grid gap-6">
              {services
                .filter((service) => service.category === category)
                .map((service, index) => (
                  <ScrollReveal
                    variant="fade-up"
                    delay={index * 0.08}
                    key={service.slug}
                    className="h-full"
                  >
                    <article className="surface grid gap-6 p-6 lg:grid-cols-[0.32fr_0.68fr] h-full" id={service.slug}>
                      <div>
                        <ServiceIcon icon={service.icon} />
                        <h2 className="mt-5 text-2xl font-bold text-[var(--sunspot-green)]">{service.title}</h2>
                        <p className="mt-4 text-sm leading-7 text-[rgba(30,33,31,0.72)]">{service.description}</p>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <span className="inline-flex items-center gap-2 rounded-[8px] border border-[var(--sunspot-line)] bg-white/65 px-4 py-3 text-sm font-semibold text-[rgba(30,33,31,0.78)]" key={feature}>
                            <Check size={17} className="shrink-0 text-[var(--sunspot-teal)]" /> {feature}
                          </span>
                        ))}
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
            </div>
          </div>
          </section>
        );
      })}

      <section className="section bg-[#fbfaf6] overflow-hidden relative">
        <div className="container relative z-10">
          <ScrollReveal variant="scale">
            <div className="rounded-[8px] border border-[var(--sunspot-line)] bg-[var(--sunspot-green)] p-8 text-white md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-glow-radial opacity-35 pointer-events-none" />
              <p className="eyebrow !text-[var(--sunspot-gold)]">Need a tailored scope?</p>
              <h2 className="mt-3 max-w-3xl text-[clamp(2rem,4vw,3.3rem)] font-[760] leading-tight relative z-10">
                We design the right intelligence framework to answer your critical business questions.
              </h2>
              <Link className="btn btn-primary mt-8 relative z-10" href="/contact">
                Contact Sunspot <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
