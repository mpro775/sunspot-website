"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck, FileSearch, LineChart, MapPinned, ShoppingBasket, Landmark, Smartphone, Wifi, Truck, Store, X, Compass, Globe, ShieldCheck, TrendingUp } from "lucide-react";
import type { Service } from "@/data/services";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const industryIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "fmcg": ShoppingBasket,
  "banking-financial-services": Landmark,
  "consumer-electronics": Smartphone,
  "telecom": Wifi,
  "retail-distribution": Truck
};

const whyIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "compass": Compass,
  "globe": Globe,
  "shield": ShieldCheck,
  "trend": TrendingUp
};
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { featuredServices } from "@/data/services";
import { industries } from "@/data/industries";

const whySunspot = [
  {
    title: "Deep Local Market Understanding",
    description: "Operating in emerging and under-served markets requires more than data collection. It requires operational flexibility, local market understanding, and the ability to generate reliable insights under complex market conditions. We understand the realities, complexities, and operational challenges of the Yemeni market.",
    iconName: "compass"
  },
  {
    title: "International Business Mindset",
    description: "Our team's experience of working with multinational companies enables us to communicate and operate according to international professional standards.",
    iconName: "globe"
  },
  {
    title: "Reliable Field Execution",
    description: "We utilize structured field operations, digital data collection systems, GPS verification, and quality control processes to ensure reliable results.",
    iconName: "shield"
  },
  {
    title: "Commercially Focused Insights",
    description: "We do not only collect data — we transform information into actionable business intelligence and strategic recommendations.",
    iconName: "trend"
  }
];

const process = [
  {
    title: "Understand Business Objectives",
    text: "We begin by understanding the client’s commercial objectives, operational challenges, and decision-making priorities.",
    icon: ClipboardCheck
  },
  {
    title: "Design the Right Intelligence Framework",
    text: "We develop tailored research methodologies, field execution plans, and market intelligence frameworks aligned with project objectives.",
    icon: FileSearch
  },
  {
    title: "Execute Reliable Field Operations",
    text: "Our teams utilize structured field execution, digital data collection systems, GPS validation, and quality control procedures to ensure reliable outputs.",
    icon: MapPinned
  },
  {
    title: "Transform Data into Actionable Insights",
    text: "We convert field intelligence and market data into practical commercial recommendations and strategic business insights.",
    icon: LineChart
  }
];

export default function Home() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for Hero Section parallax elements
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Smooth scroll animations for badges and text
  const badge1Y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -70]), { stiffness: 80, damping: 25 });
  const badge2Y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 60]), { stiffness: 80, damping: 25 });
  const heroTextY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 35]), { stiffness: 80, damping: 25 });

  return (
    <>
      <section ref={heroRef} className="relative overflow-hidden bg-[var(--sunspot-cream)] py-16 lg:py-24">
        {/* Decorative background gradients with individual parallax drift */}
        <ParallaxBackground speed={-0.12}>
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[rgba(38,92,103,0.06)] blur-3xl" />
        </ParallaxBackground>
        <ParallaxBackground speed={0.16}>
          <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[rgba(242,178,26,0.08)] blur-3xl" />
        </ParallaxBackground>
        
        <div className="container relative z-10 grid min-h-0 lg:min-h-[calc(100vh-140px)] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div style={{ y: heroTextY }} className="max-w-2xl">
            <ScrollReveal variant="fade-up" duration={0.6} delay={0.05}>
              {/* Styled Badge Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--sunspot-mist)] px-3.5 py-1.5 border border-[var(--sunspot-line)] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--sunspot-gold)] opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--sunspot-gold)]" />
                </span>
                <p className="text-[10px] font-black uppercase tracking-wider text-[var(--sunspot-teal)]">
                  Business Intelligence &amp; Strategic Advisory
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="fade-up" duration={0.7} delay={0.15}>
              <h1 className="text-[clamp(2.35rem,5.5vw,4.8rem)] font-[800] leading-[1.02] tracking-tight text-[var(--sunspot-green)]">
                Market Intelligence <span className="text-[var(--sunspot-teal)] font-[700] block sm:inline">&amp; Commercial Visibility</span> <span className="text-[var(--sunspot-gold)]">for Yemen</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal variant="fade-up" duration={0.7} delay={0.25}>
              <p className="lead mt-6 max-w-xl">
                Sunspot Consultancy helps organizations navigate Yemen’s complex market through reliable field intelligence,
                commercial insights, and strategic advisory.
              </p>
            </ScrollReveal>
            
            <ScrollReveal variant="fade-up" duration={0.8} delay={0.35}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link className="btn btn-primary group shadow-lg shadow-[rgba(242,178,26,0.22)] hover:shadow-xl hover:shadow-[rgba(242,178,26,0.35)] transition-all duration-300" href="/contact">
                  <span>Discuss Your Market Challenge</span>
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
                <Link className="btn btn-secondary" href="/services">
                  Explore Our Services
                </Link>
              </div>
            </ScrollReveal>
          </motion.div>
          
          <ScrollReveal variant="scale" duration={0.9} delay={0.2} className="relative">
            {/* Visual glow background behind image */}
            <div className="absolute -inset-4 rounded-[12px] bg-gradient-to-tr from-[var(--sunspot-gold)]/10 to-transparent blur-xl" />
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[rgba(242,178,26,0.4)] pointer-events-none" />
            
            {/* Floating Glassmorphism Badge 1 - Combines float and scroll parallax */}
            <motion.div 
              style={{ y: badge1Y }}
              className="absolute -left-6 top-16 z-20 hidden sm:flex items-center gap-3.5 rounded-[12px] glass-card-light p-4 shadow-xl animate-float"
            >
              <span className="relative flex h-3.5 w-3.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
              </span>
              <div>
                <p className="text-[9px] font-bold text-[var(--sunspot-teal)] uppercase tracking-wider">Field Operations</p>
                <p className="text-sm font-extrabold text-[var(--sunspot-green)]">100% GPS Verified</p>
              </div>
            </motion.div>
            
            {/* Floating Glassmorphism Badge 2 - Combines float and scroll parallax */}
            <motion.div 
              style={{ y: badge2Y }}
              className="absolute -right-6 bottom-16 z-20 hidden sm:flex items-center gap-3 rounded-[12px] glass-card-light p-4 shadow-xl animate-float-delayed"
            >
              <div className="rounded-full bg-[var(--sunspot-gold)]/10 p-2 text-[var(--sunspot-gold)]">
                <CheckCircle2 size={18} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[9px] font-bold text-[var(--sunspot-teal)] uppercase tracking-wider">Quality Assurance</p>
                <p className="text-sm font-extrabold text-[var(--sunspot-green)]">Double-Entry Auditing</p>
              </div>
            </motion.div>
            
            <ParallaxImage
              src="/images/market-intelligence-hero.webp"
              alt="Market intelligence workspace with maps, retail distribution routes, charts, and field research materials"
              priority
              speed={-0.08}
              containerClassName="relative z-10 w-full rounded-[8px] shadow-2xl shadow-[rgba(27,57,46,0.18)]"
            />
          </ScrollReveal>
        </div>
      </section>



      {/* Who We Are Section */}
      <section className="section bg-[var(--sunspot-cream)] border-b border-[var(--sunspot-line)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal variant="fade-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--sunspot-mist)] px-3.5 py-1.5 border border-[var(--sunspot-line)] mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--sunspot-gold)]" />
                <p className="text-[10px] font-black uppercase tracking-wider text-[var(--sunspot-teal)]">
                  Who We Are
                </p>
              </div>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-[760] leading-[1.15] tracking-tight text-[var(--sunspot-green)] mb-6">
                Your Strategic Entryway to Yemen
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-[rgba(30,33,31,0.76)] font-medium">
                Sunspot Consultancy is a business intelligence and strategic advisory firm established to help organizations navigate Yemen complex market through reliable market intelligence, commercial insights, and practical business solutions.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section bg-[#fbfaf6]">
        <div className="container">
          <ScrollReveal variant="fade-up">
            <SectionHeader
              eyebrow="Services"
              title="Commercial intelligence built for complex market decisions."
              description="Sunspot provides field-driven research, distribution visibility, and strategic analysis for companies that need reliable clarity before acting."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <ScrollReveal
                variant="fade-up"
                delay={index * 0.08}
                once={true}
                key={service.slug}
                className="h-full"
              >
                <div
                  className="group interactive-card surface p-8 relative overflow-hidden flex flex-col justify-between cursor-pointer text-left align-top h-full focus:outline-none focus:ring-2 focus:ring-[var(--sunspot-teal)]/20"
                  onClick={() => setSelectedService(service)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedService(service);
                    }
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <ServiceIcon icon={service.icon} />
                      <span className="h-1.5 w-1.5 rounded-full bg-transparent transition-all duration-300 group-hover:bg-[var(--sunspot-gold)] group-hover:scale-150" />
                    </div>
                    <h3 className="mt-6 text-xl font-[780] text-[var(--sunspot-green)] group-hover:text-[var(--sunspot-teal)] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-3.5 text-sm leading-7 text-[rgba(30,33,31,0.72)]">
                      {service.summary}
                    </p>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--sunspot-teal)] transition-colors duration-300 group-hover:text-[var(--sunspot-gold)]">
                    <span>Explore service</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--sunspot-green)] text-white overflow-hidden relative">
        {/* Parallax ambient glow background */}
        <ParallaxBackground speed={0.15}>
          <div className="absolute inset-0 bg-glow-radial opacity-40" />
        </ParallaxBackground>

        {/* Parallax Sun Motif inline shape */}
        <ParallaxBackground speed={-0.08} className="absolute inset-0 hidden md:block">
          <div 
            className="absolute right-[4%] top-[28px] w-[190px] h-[190px] rounded-full opacity-50 pointer-events-none"
            style={{
              background: `
                linear-gradient(var(--sunspot-gold), var(--sunspot-gold)) center top / 2px 58px no-repeat,
                radial-gradient(circle at center, rgba(242, 178, 26, 0.2) 0 26%, transparent 27%),
                conic-gradient(from 232deg, transparent 0 8deg, rgba(242, 178, 26, 0.35) 8deg 11deg, transparent 11deg 31deg)
              `
            }}
          />
        </ParallaxBackground>

        <div className="container relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <ScrollReveal variant="fade-right" className="flex flex-col justify-center">
            <span className="h-1 w-12 bg-[var(--sunspot-gold)] mb-6 rounded" />
            <p className="eyebrow !text-[var(--sunspot-gold)]">Why Sunspot</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.35rem)] font-[760] leading-[1.08] tracking-tight">
              Local market reality, international business discipline.
            </h2>
            <p className="mt-5 leading-8 text-white/74 max-w-xl">
              In markets where visibility is limited and decisions carry high risk, Sunspot acts as a trusted local
              intelligence partner for smarter, faster, and more confident commercial decisions.
            </p>
          </ScrollReveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {whySunspot.map((item, index) => {
              const Icon = whyIconMap[item.iconName || ""] || CheckCircle2;
              return (
                <ScrollReveal
                  variant="fade-up"
                  delay={index * 0.1}
                  key={item.title}
                  className="h-full"
                >
                  <div className="why-card group h-full">
                    <span className="why-card-number">0{index + 1}</span>
                    <div>
                      <div className="why-icon-wrapper">
                        <Icon size={20} />
                      </div>
                      <h3 className="why-card-title">
                        {item.title}
                      </h3>
                      <p className="why-card-text">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-[#fbfaf6]">
        {/* Parallax backdrop decoration glow */}
        <ParallaxBackground speed={0.1}>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle_at_center,rgba(38,92,103,0.05)_0%,transparent_70%)]" />
        </ParallaxBackground>

        <div className="container relative z-10">
          <ScrollReveal variant="fade-up">
            <SectionHeader eyebrow="How We Work" title="A structured path from business question to actionable insight." align="center" />
          </ScrollReveal>
          <div className="relative mt-16">
            {/* Timeline connector path for desktop with moving gradient flow */}
            <div className="timeline-flow-line hidden lg:block" />
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => {
                const Icon = step.icon;
                return (
                  <ScrollReveal
                    variant="fade-up"
                    delay={index * 0.12}
                    key={step.title}
                    className="h-full how-it-works-card-wrapper"
                  >
                    <div className="how-it-works-card group h-full">
                      <span className="how-it-works-number">0{index + 1}</span>
                      <div>
                        <div className="how-it-works-icon-wrapper">
                          <Icon size={22} strokeWidth={2} />
                        </div>
                        <h3 className="how-it-works-title">
                          {step.title}
                        </h3>
                        <p className="how-it-works-text">{step.text}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-[var(--sunspot-cream)]">
        {/* Soft background glows with parallax */}
        <ParallaxBackground speed={-0.1}>
          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(242,178,26,0.06)_0%,transparent_70%)]" />
        </ParallaxBackground>
        <ParallaxBackground speed={0.12}>
          <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(38,92,103,0.04)_0%,transparent_70%)]" />
        </ParallaxBackground>

        <div className="container relative z-10">
          <ScrollReveal variant="fade-up">
            <SectionHeader eyebrow="Industries" title="Focused support for commercial sectors where field visibility matters." />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {industries.map((industry, index) => {
              const Icon = industryIconMap[industry.slug] || Store;
              return (
                <ScrollReveal
                  variant="fade-up"
                  delay={index * 0.06}
                  key={industry.slug}
                  className="h-full"
                >
                  <Link 
                    className="industry-card group h-full" 
                    href="/industries"
                  >
                    <div className="industry-card-glow" />
                    
                    <div>
                      <div className="industry-icon-container">
                        <Icon size={20} />
                      </div>
                      <h3 className="industry-card-title">
                        {industry.title}
                      </h3>
                      <p className="industry-card-description">
                        {industry.description}
                      </p>
                    </div>
                    
                    <div>
                      {/* Related service pills/badges */}
                      <div className="mt-6 flex flex-wrap gap-1.5 pr-6">
                        {industry.relatedServices?.map((serviceName) => (
                          <span className="industry-card-badge" key={serviceName}>
                            {serviceName}
                          </span>
                        ))}
                      </div>
                      
                      {/* Interactive slide-in arrow */}
                      <ArrowRight size={16} className="industry-card-arrow" />
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-[#fbfaf6] overflow-hidden">
        <div className="container relative">
          {/* Decorative glow background behind the box with parallax */}
          <ParallaxBackground speed={-0.15}>
            <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-[var(--sunspot-gold)]/10 blur-3xl" />
          </ParallaxBackground>
          <ParallaxBackground speed={0.15}>
            <div className="absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-[var(--sunspot-teal)]/15 blur-3xl" />
          </ParallaxBackground>

          <ScrollReveal variant="scale" duration={0.9} once={true}>
            <div className="relative overflow-hidden rounded-[16px] bg-[var(--sunspot-green)] px-8 py-16 text-center text-white md:px-16 md:py-20 shadow-2xl border border-white/10">
              {/* Subtle radial sunspot background glow */}
              <div className="absolute inset-0 bg-glow-radial opacity-60 pointer-events-none" />

              <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 border border-white/10 mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--sunspot-gold)]" />
                  <p className="text-[10px] font-black uppercase tracking-wider text-[var(--sunspot-gold)]">
                    Partner with Sunspot
                  </p>
                </div>

                <h2 className="text-[clamp(2.1rem,4.5vw,3.6rem)] font-[800] leading-[1.08] tracking-tight">
                  Ready to gain clear commercial visibility in Yemen?
                </h2>
                
                <p className="mt-5 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
                  Let’s discuss your specific market challenges, research goals, and growth objectives. Our advisors are ready to design a tailored intelligence framework.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center w-full sm:w-auto">
                  <Link className="btn btn-primary group px-8 py-3.5 shadow-lg shadow-[rgba(242,178,26,0.15)] hover:shadow-xl hover:shadow-[rgba(242,178,26,0.3)] transition-all duration-300" href="/contact">
                    <span>Discuss Your Challenge</span>
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                  <Link 
                    className="btn border border-white/20 text-white hover:bg-white hover:text-[var(--sunspot-green)] hover:border-white transition-all duration-300 px-8" 
                    href="/contact"
                  >
                    Book a Consult Call
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Details Dialog Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Click outside to close / Background overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[var(--sunspot-green)]/60 backdrop-blur-md"
              onClick={() => setSelectedService(null)} 
            />
            
            {/* Modal Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto bg-[#fbfaf6] rounded-[24px] border border-[var(--sunspot-line)] shadow-2xl p-6 md:p-8 z-10"
            >
              {/* Decorative background radial glow */}
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[var(--sunspot-gold)]/10 blur-2xl pointer-events-none" />
              <div className="absolute -left-12 -bottom-12 h-36 w-36 rounded-full bg-[var(--sunspot-teal)]/10 blur-2xl pointer-events-none" />
              
              {/* Close Button */}
              <button 
                className="absolute top-5 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--sunspot-line)] text-[var(--sunspot-green)] hover:bg-[var(--sunspot-mist)] hover:text-[var(--sunspot-teal)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--sunspot-green)]/20 cursor-pointer z-10"
                onClick={() => setSelectedService(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--sunspot-mist)] px-3 py-1 border border-[var(--sunspot-line)] mb-4 relative z-10">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--sunspot-teal)] animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-wider text-[var(--sunspot-teal)]">
                  {selectedService.category}
                </p>
              </div>

              {/* Title & Icon */}
              <div className="flex items-start gap-4 mt-2 pr-8 relative z-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--sunspot-green)] text-white shrink-0 shadow-md">
                  <ServiceIcon icon={selectedService.icon} />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-[800] text-[var(--sunspot-green)] leading-tight">
                    {selectedService.title}
                  </h2>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 relative z-10">
                <p className="text-sm md:text-base leading-relaxed text-[rgba(30,33,31,0.76)]">
                  {selectedService.description}
                </p>
              </div>

              {/* Features / Value Pillars */}
              <div className="mt-6 pt-6 border-t border-[var(--sunspot-line)] relative z-10">
                <h4 className="text-xs font-black uppercase tracking-wider text-[var(--sunspot-teal)] mb-4">
                  Key Service Capabilities
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {selectedService.features.map((feature) => (
                    <div 
                      className="flex items-center gap-3 rounded-[10px] bg-white border border-[var(--sunspot-line)] p-3 shadow-sm transition-all hover:border-[var(--sunspot-teal)]/30 group/item" 
                      key={feature}
                    >
                      <CheckCircle2 size={16} className="text-[var(--sunspot-teal)] shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                      <span className="text-[12px] font-bold text-[rgba(30,33,31,0.8)] leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-end border-t border-[var(--sunspot-line)] pt-5 relative z-10">
                <button 
                  className="btn btn-secondary !min-height-0 py-2.5 px-5 text-sm cursor-pointer"
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </button>
                <Link 
                  className="btn btn-primary group/btn !min-height-0 py-2.5 px-5 text-sm flex items-center gap-2"
                  href={`/contact?service=${encodeURIComponent(selectedService.title)}`}
                >
                  <span>Discuss Service</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
