import { Building2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EnergyTypeToggleProps {
  value: "residential" | "commercial";
  onChange: (v: "residential" | "commercial") => void;
}

export function EnergyTypeToggle({ value, onChange }: EnergyTypeToggleProps) {
  return (
    <div className="glass rounded-lg p-1 flex gap-1">
      <Button
        size="sm"
        variant="ghost"
        className={`gap-2 ${value === "residential" ? "bg-primary/15 text-primary" : "text-muted-foreground"}`}
        onClick={() => onChange("residential")}
      >
        <Home className="w-4 h-4" /> Residential
      </Button>
      <Button
        size="sm"
        variant="ghost"
        className={`gap-2 ${value === "commercial" ? "bg-primary/15 text-primary" : "text-muted-foreground"}`}
        onClick={() => onChange("commercial")}
      >
        <Building2 className="w-4 h-4" /> Commercial
      </Button>
    </div>
  );
}
