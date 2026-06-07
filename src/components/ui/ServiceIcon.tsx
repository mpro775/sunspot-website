import { Binoculars, BriefcaseBusiness, Eye, Map, Radar, Route, Search, Store } from "lucide-react";
import type { Service } from "@/data/services";

const iconMap = {
  search: Search,
  route: Route,
  radar: Radar,
  store: Store,
  eye: Eye,
  briefcase: BriefcaseBusiness,
  map: Map
};

export function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  const Icon = iconMap[icon] ?? Binoculars;

  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--sunspot-mist)] text-[var(--sunspot-teal)]">
      <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
    </span>
  );
}
