import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const models = ["ARIMA", "SARIMA", "LSTM", "Prophet"];

interface ModelSelectorProps {
  value: string;
  onChange: (v: string) => void;
}

export function ModelSelector({ value, onChange }: ModelSelectorProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px] glass border-border/50">
        <SelectValue placeholder="Select model" />
      </SelectTrigger>
      <SelectContent className="bg-card border-border/50">
        {models.map((m) => (
          <SelectItem key={m} value={m}>{m}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
