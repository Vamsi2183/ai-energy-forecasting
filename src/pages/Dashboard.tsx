import { useState } from "react";
import { motion } from "framer-motion";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { TopNav } from "@/components/TopNav";
import { KpiCards } from "@/components/KpiCards";
import { ForecastChart } from "@/components/ForecastChart";
import { ModelComparisonChart } from "@/components/ModelComparisonChart";
import { FileUploadZone } from "@/components/FileUploadZone";
import { ModelSelector } from "@/components/ModelSelector";
import { EnergyTypeToggle } from "@/components/EnergyTypeToggle";

export default function Dashboard() {
  const [model, setModel] = useState("LSTM");
  const [energyType, setEnergyType] = useState<"residential" | "commercial">("residential");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <TopNav />
          <main className="flex-1 p-4 md:p-6 overflow-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto space-y-6">
              {/* Controls */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Energy consumption forecast overview</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <ModelSelector value={model} onChange={setModel} />
                  <EnergyTypeToggle value={energyType} onChange={setEnergyType} />
                </div>
              </div>

              <KpiCards />

              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <ForecastChart />
                </div>
                <FileUploadZone />
              </div>

              <ModelComparisonChart />
            </motion.div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
