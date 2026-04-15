import { useState } from "react";
import { motion } from "framer-motion";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { TopNav } from "@/components/TopNav";
import { FileUploadZone } from "@/components/FileUploadZone";
import { ModelSelector } from "@/components/ModelSelector";
import { EnergyTypeToggle } from "@/components/EnergyTypeToggle";
import { Button } from "@/components/ui/button";
import { Loader2, Play } from "lucide-react";

export default function UploadPage() {
  const [model, setModel] = useState("LSTM");
  const [energyType, setEnergyType] = useState<"residential" | "commercial">("residential");
  const [loading, setLoading] = useState(false);

  const handleRun = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2500);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <TopNav />
          <main className="flex-1 p-4 md:p-6 overflow-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Upload Data</h1>
                <p className="text-sm text-muted-foreground">Upload your energy consumption CSV and configure your forecast</p>
              </div>

              <FileUploadZone />

              <div className="glass rounded-xl p-6 space-y-4">
                <h3 className="font-semibold text-foreground">Configuration</h3>
                <div className="flex flex-wrap gap-4">
                  <ModelSelector value={model} onChange={setModel} />
                  <EnergyTypeToggle value={energyType} onChange={setEnergyType} />
                </div>
              </div>

              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-semibold glow-primary"
                onClick={handleRun}
                disabled={loading}
              >
                {loading ? (
                  <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Running Forecast…</>
                ) : (
                  <><Play className="w-5 h-5 mr-2" /> Run Forecast</>
                )}
              </Button>
            </motion.div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
