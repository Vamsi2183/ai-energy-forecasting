import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { modelComparison } from "@/lib/mockData";

export function ModelComparisonChart() {
  return (
    <div className="glass rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-1">Model Comparison</h3>
      <p className="text-sm text-muted-foreground mb-6">Error metrics across models</p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={modelComparison}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 16%)" />
          <XAxis dataKey="model" stroke="hsl(215, 20%, 55%)" fontSize={12} />
          <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} />
          <Tooltip
            contentStyle={{
              background: "hsl(220, 20%, 7%)",
              border: "1px solid hsl(220, 16%, 20%)",
              borderRadius: "8px",
              color: "hsl(210, 40%, 98%)",
            }}
          />
          <Bar dataKey="mae" fill="hsl(199, 89%, 48%)" radius={[4, 4, 0, 0]} name="MAE" />
          <Bar dataKey="rmse" fill="hsl(142, 70%, 45%)" radius={[4, 4, 0, 0]} name="RMSE" />
          <Bar dataKey="mape" fill="hsl(215, 20%, 55%)" radius={[4, 4, 0, 0]} name="MAPE" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
