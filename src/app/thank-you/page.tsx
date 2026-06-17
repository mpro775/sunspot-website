import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Sunspot Consultancy",
  description: "Thank you for contacting Sunspot Consultancy."
};

export default function ThankYouPage() {
  return (
    <section className="section bg-[var(--sunspot-cream)]">
      <div className="container max-w-3xl text-center">
        <span className="gold-rule mx-auto mb-7" />
        <p className="eyebrow">Message Sent</p>

        <h1 className="mt-4 text-[clamp(2.4rem,6vw,4.4rem)] font-[780] leading-[1.02] text-[var(--sunspot-green)]">
          Thank you for contacting Sunspot.
        </h1>

        <p className="lead mt-6">
          We received your inquiry and will respond with a practical next step.
        </p>

        <Link className="btn btn-primary mt-8 inline-flex" href="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
