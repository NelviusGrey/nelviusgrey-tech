import {
  BarChart3,
  BrainCircuit,
  Building2,
  Code2,
  FileText,
  Gauge,
  Globe2,
  HeartHandshake,
  Landmark,
  Leaf,
  LineChart,
  Map,
  Network,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Wheat,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import type { IconName } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<IconName, LucideIcon> = {
  Code2,
  Network,
  BarChart3,
  Leaf,
  HeartHandshake,
  Workflow,
  Building2,
  Globe2,
  Wheat,
  ShieldCheck,
  Landmark,
  BrainCircuit,
  ServerCog,
  Sparkles,
  LineChart,
  Gauge,
  Map,
  FileText,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.8,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Component = iconMap[name];

  return <Component className={cn("h-5 w-5", className)} strokeWidth={strokeWidth} />;
}
