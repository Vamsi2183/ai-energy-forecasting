import { motion } from "framer-motion";
import { Zap, Sun, AlertTriangle, DollarSign, Activity, Cloud } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { insightsData } from "@/lib/mockData";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { TopNav } from "@/components/TopNav";

const iconMap = { Zap, Sun, AlertTriangle, DollarSign, Activity, Cloud } as const;
const severityColor = { high: "text-destructive", medium: "text-primary", low: "text-accent" };

export default function Insights() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <TopNav />
          <main className="flex-1 p-4 md:p-6 overflow-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Smart Insights</h1>
                <p className="text-sm text-muted-foreground">AI-generated alerts and recommendations</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {insightsData.map((item, i) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <GlassCard
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{ y: -4 }}
                      className="gradient-border"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-5 h-5 ${severityColor[item.severity]}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                          <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </GlassCard>
                  );
                })}
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
