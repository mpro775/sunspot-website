import Link from "next/link";

type LogoProps = {
  variant?: "dark" | "light";
};

export function Logo({ variant = "dark" }: LogoProps) {
  return (
    <Link className="inline-flex items-center gap-3" href="/" aria-label="Sunspot Consultancy home">
      <img className="h-auto w-[170px]" src="/logo.svg" alt="Sunspot Consultancy" width={170} height={66} />
      <span className={variant === "light" ? "sr-only" : "sr-only"}>Sunspot Consultancy</span>
    </Link>
  );
}
