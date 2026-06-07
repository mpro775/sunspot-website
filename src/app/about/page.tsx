import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";

export const metadata: Metadata = {
  title: "About Sunspot Consultancy",
  description:
    "Learn about Sunspot Consultancy, a business intelligence and market advisory firm helping organizations navigate Yemen’s complex market."
};

const approach = ["Field intelligence", "Commercial understanding", "Data-driven analysis", "Operational verification", "Market reality insights"];
const methodology = ["Structured field operations", "Strong quality control", "Technology-enabled data collection", "Commercial-focused analysis", "Reliable reporting standards"];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section relative overflow-hidden bg-[var(--sunspot-cream)]">
        {/* Soft background radial glows with parallax */}
        <ParallaxBackground speed={-0.12}>
          <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle_at_center,rgba(242,178,26,0.06)_0%,transparent_70%)]" />
        </ParallaxBackground>
        <ParallaxBackground speed={0.15}>
          <div className="absolute left-[-10%] top-[-10%] h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle_at_center,rgba(38,92,103,0.05)_0%,transparent_70%)]" />
        </ParallaxBackground>
        
        <div className="container relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <ScrollReveal variant="fade-right" duration={0.8}>
            <span className="gold-rule mb-7" />
            <p className="eyebrow">About Us</p>
            <h1 className="mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-[800] leading-[1.05] text-[var(--sunspot-green)]">
              Business Intelligence <span className="text-[var(--sunspot-teal)] font-[700]">&amp; Strategic Advisory</span> for Yemen
            </h1>
            <p className="lead mt-6 leading-relaxed">
              Sunspot Consultancy is a business intelligence and market advisory firm specialized in helping organizations navigate complex and emerging markets like Yemen through strategic insights, commercial intelligence, and field-driven market visibility solutions.
            </p>
          </ScrollReveal>
          
          <ScrollReveal variant="scale" duration={0.9} delay={0.2} className="relative flex items-center justify-center">
            {/* Visual card representing pillars */}
            <div className="w-full max-w-sm rounded-[16px] glass-card-light p-8 shadow-2xl relative overflow-hidden border border-white/40">
              <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-[var(--sunspot-gold)]/10 blur-xl" />
              <p className="text-[10px] font-black uppercase tracking-wider text-[var(--sunspot-teal)] mb-6">Sunspot Pillars</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-[var(--sunspot-gold)]/10 text-[var(--sunspot-gold)] flex items-center justify-center font-bold text-sm shrink-0">1</div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[var(--sunspot-green)]">Local Presence</h4>
                    <p className="text-xs text-[rgba(30,33,31,0.65)] mt-1">Country-wide networks with direct access to field intelligence.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-[var(--sunspot-teal)]/10 text-[var(--sunspot-teal)] flex items-center justify-center font-bold text-sm shrink-0">2</div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[var(--sunspot-green)]">Global Standards</h4>
                    <p className="text-xs text-[rgba(30,33,31,0.65)] mt-1">Advisory methodologies aligned with international practices.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-[var(--sunspot-green)]/10 text-[var(--sunspot-green)] flex items-center justify-center font-bold text-sm shrink-0">3</div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[var(--sunspot-green)]">Actionable Insights</h4>
                    <p className="text-xs text-[rgba(30,33,31,0.65)] mt-1">Data converted directly into commercial strategic recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section bg-[#fbfaf6] relative overflow-hidden">
        <ParallaxBackground speed={-0.1}>
          <div className="absolute right-[-10%] bottom-0 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(242,178,26,0.04)_0%,transparent_70%)]" />
        </ParallaxBackground>
        
        <div className="container relative z-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-start">
            <ScrollReveal variant="fade-up">
              <SectionHeader eyebrow="Who We Are" title="A trusted local intelligence partner for high-risk decisions." />
            </ScrollReveal>
            
            {/* Quote Card */}
            <ScrollReveal variant="fade-up" delay={0.1}>
              <div className="mt-8 rounded-[16px] border border-[var(--sunspot-line)] bg-white p-7 shadow-lg relative overflow-hidden">
                <div className="absolute -right-4 -top-6 text-7xl font-serif text-[rgba(242,178,26,0.15)] select-none">“</div>
                <p className="text-sm font-semibold italic text-[var(--sunspot-teal)] relative z-10 leading-relaxed pl-2">
                  Operating in emerging and under-served markets requires more than data collection. It requires operational flexibility and deep market realism.
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal variant="fade-up" delay={0.15} className="space-y-6 text-[15px] leading-8 text-[rgba(30,33,31,0.76)] flex flex-col justify-center">
            <p className="font-bold text-[var(--sunspot-green)] text-[16px]">
              We support local and regional companies in understanding complex market environments through market research,
              distributor audits, competitor intelligence, field verification, and commercial monitoring solutions.
            </p>
            <p>
              In markets where visibility is limited and decision-making carries high risk, Sunspot Consultancy acts as a trusted local intelligence partner — helping organizations make smarter, faster, and more confident commercial decisions.
            </p>
            <p>
              Our strength combines deep local market understanding with multinational commercial experience, enabling us
              to bridge the gap between global business expectations and local market realities.
            </p>
            <p>
              We support companies across different stages of growth — from market entry and expansion planning to
              distributor evaluation, competitive positioning, operational assessment, and commercial performance improvement.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section bg-[var(--sunspot-green)] text-white relative overflow-hidden py-20">
        {/* Parallax background ambient glow */}
        <ParallaxBackground speed={0.1}>
          <div className="absolute inset-0 bg-glow-radial opacity-40" />
        </ParallaxBackground>
        
        {/* Parallax Sun Motif inline shape */}
        <ParallaxBackground speed={-0.07} className="absolute inset-0 hidden md:block">
          <div 
            className="absolute right-[4%] top-[28px] w-[190px] h-[190px] rounded-full opacity-35 pointer-events-none"
            style={{
              background: `
                linear-gradient(var(--sunspot-gold), var(--sunspot-gold)) center top / 2px 58px no-repeat,
                radial-gradient(circle at center, rgba(242, 178, 26, 0.2) 0 26%, transparent 27%),
                conic-gradient(from 232deg, transparent 0 8deg, rgba(242, 178, 26, 0.35) 8deg 11deg, transparent 11deg 31deg)
              `
            }}
          />
        </ParallaxBackground>

        <div className="container relative z-10 grid gap-8 md:grid-cols-2">
          <ScrollReveal variant="fade-right" duration={0.8} className="h-full">
            <div className="glass-card-dark rounded-[16px] p-6 sm:p-8 lg:p-10 border border-white/8 shadow-2xl relative overflow-hidden h-full transition-all duration-300 hover:border-[var(--sunspot-gold)]/40 hover:-translate-y-1 hover:bg-white/[0.06]">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[var(--sunspot-gold)]" />
              <p className="eyebrow !text-[var(--sunspot-gold)] tracking-widest">Our Mission</p>
              <p className="mt-6 text-[18px] leading-8 font-medium text-white/90">
                To empower organizations with reliable market intelligence, strategic business insights, and actionable
                commercial recommendations that support confident decision-making and sustainable growth in complex and emerging markets.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal variant="fade-left" duration={0.8} delay={0.1} className="h-full">
            <div className="glass-card-dark rounded-[16px] p-6 sm:p-8 lg:p-10 border border-white/8 shadow-2xl relative overflow-hidden h-full transition-all duration-300 hover:border-[var(--sunspot-teal)]/40 hover:-translate-y-1 hover:bg-white/[0.06]">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[var(--sunspot-teal)]" />
              <p className="eyebrow !text-[var(--sunspot-gold)] tracking-widest">Our Vision</p>
              <p className="mt-6 text-[18px] leading-8 font-medium text-white/90">
                To become the leading business intelligence and market advisory partner for organizations operating in Yemen
                and emerging markets across the region.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Approach & Methodology Section */}
      <section className="section bg-[#fbfaf6] relative overflow-hidden">
        <ParallaxBackground speed={0.08}>
          <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(38,92,103,0.04)_0%,transparent_70%)]" />
        </ParallaxBackground>
        
        <div className="container relative z-10">
          <ScrollReveal variant="fade-up">
            <SectionHeader
              eyebrow="Our Approach"
              title="Local Knowledge. International Standards."
              description="We combine strategic thinking with execution-focused market intelligence to help organizations move from information to action."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            
            {/* Approach Card */}
            <ScrollReveal variant="fade-right" duration={0.8} delay={0.05} className="h-full">
              <div className="surface rounded-[16px] p-6 md:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:border-[var(--sunspot-teal)]/30 bg-white/70 backdrop-blur-md flex flex-col justify-between h-full min-h-[420px]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[var(--sunspot-mist)] px-3 py-1 border border-[var(--sunspot-line)] mb-6">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--sunspot-teal)] animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--sunspot-teal)]">Methodology</span>
                  </div>
                  <h2 className="text-2xl font-black text-[var(--sunspot-green)]">Strategic Integration</h2>
                  <p className="text-sm text-[rgba(30,33,31,0.6)] mt-2">How we combine different dimensions of intelligence:</p>
                  
                  <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
                    {approach.map((item) => (
                      <div 
                        className="flex items-center gap-3 rounded-[10px] bg-white border border-[var(--sunspot-line)] p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[var(--sunspot-teal)]/30 group/item" 
                        key={item}
                      >
                        <CheckCircle2 size={18} className="text-[var(--sunspot-teal)] shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                        <span className="text-xs font-bold text-[rgba(30,33,31,0.8)] leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className="mt-8 border-t border-[var(--sunspot-line)] pt-5 text-sm font-bold italic text-[rgba(30,33,31,0.65)] flex items-center gap-2">
                  <span className="inline-block w-6 h-px bg-[var(--sunspot-teal)]" />
                  to deliver practical recommendations that businesses can confidently act upon.
                </p>
              </div>
            </ScrollReveal>

            {/* Methodology Card */}
            <ScrollReveal variant="fade-left" duration={0.8} delay={0.15} className="h-full">
              <div className="surface rounded-[16px] p-6 md:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:border-[var(--sunspot-gold)]/40 bg-white/70 backdrop-blur-md flex flex-col justify-between h-full min-h-[420px]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[var(--sunspot-gold)]/10 px-3 py-1 border border-[var(--sunspot-gold)]/20 mb-6">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--sunspot-gold)] animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--sunspot-gold)]">Execution</span>
                  </div>
                  <h2 className="text-2xl font-black text-[var(--sunspot-green)]">Core Principles</h2>
                  <p className="text-sm text-[rgba(30,33,31,0.6)] mt-2">What our fieldwork and systems are built around:</p>
                  
                  <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
                    {methodology.map((item) => (
                      <div 
                        className="flex items-center gap-3 rounded-[10px] bg-white border border-[var(--sunspot-line)] p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[var(--sunspot-gold)]/30 group/item" 
                        key={item}
                      >
                        <CheckCircle2 size={18} className="text-[var(--sunspot-gold)] shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                        <span className="text-xs font-bold text-[rgba(30,33,31,0.8)] leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-8 border-t border-[var(--sunspot-line)] pt-5 text-sm font-bold italic text-[rgba(30,33,31,0.65)] flex items-center gap-2">
                  <span className="inline-block w-6 h-px bg-[var(--sunspot-gold)]" />
                  ensuring accuracy and clarity under complex market conditions.
                </p>
              </div>
            </ScrollReveal>
            
          </div>
          
          {/* Discuss Button */}
          <ScrollReveal variant="scale" duration={0.8} delay={0.2} className="mt-12 flex justify-center">
            <Link className="btn btn-primary group shadow-lg shadow-[rgba(242,178,26,0.15)] hover:shadow-xl hover:shadow-[rgba(242,178,26,0.3)] transition-all duration-300 px-8 py-3.5" href="/contact">
              <span>Discuss Your Objectives</span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
