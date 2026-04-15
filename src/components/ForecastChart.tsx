import { Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { generateForecastData } from "@/lib/mockData";
import { useMemo } from "react";

export function ForecastChart() {
  const data = useMemo(() => generateForecastData(), []);

  return (
    <div className="glass rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-1">Actual vs Predicted</h3>
      <p className="text-sm text-muted-foreground mb-6">Energy consumption forecast (kWh)</p>
      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="confidence" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.15} />
              <stop offset="100%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 16%)" />
          <XAxis dataKey="month" stroke="hsl(215, 20%, 55%)" fontSize={12} />
          <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} />
          <Tooltip
            contentStyle={{
              background: "hsl(220, 20%, 7%)",
              border: "1px solid hsl(220, 16%, 20%)",
              borderRadius: "8px",
              color: "hsl(210, 40%, 98%)",
            }}
          />
          <Area type="monotone" dataKey="upper" stroke="none" fill="url(#confidence)" />
          <Area type="monotone" dataKey="lower" stroke="none" fill="url(#confidence)" />
          <Line type="monotone" dataKey="actual" stroke="hsl(215, 20%, 55%)" strokeWidth={2} dot={{ r: 3, fill: "hsl(215, 20%, 55%)" }} />
          <Line type="monotone" dataKey="predicted" stroke="hsl(199, 89%, 48%)" strokeWidth={2.5} dot={{ r: 3, fill: "hsl(199, 89%, 48%)" }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
