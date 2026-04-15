import { GlassCard } from "@/components/GlassCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { kpiMetrics } from "@/lib/mockData";
import { Activity, Target, TrendingDown, BarChart } from "lucide-react";

const cards = [
  { label: "MAE", value: kpiMetrics.mae, icon: Target, color: "text-primary" },
  { label: "RMSE", value: kpiMetrics.rmse, icon: Activity, color: "text-accent" },
  { label: "MAPE", value: kpiMetrics.mape, suffix: "%", icon: TrendingDown, color: "text-primary" },
  { label: "R² Score", value: kpiMetrics.r2, icon: BarChart, color: "text-accent" },
];

export function KpiCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c, i) => (
        <GlassCard
          key={c.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground font-medium">{c.label}</span>
            <c.icon className={`w-4 h-4 ${c.color}`} />
          </div>
          <AnimatedCounter value={c.value} suffix={c.suffix} />
        </GlassCard>
      ))}
    </div>
  );
}
