import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = Array.from({ length: 40 }, (_, i) => ({
  v: Math.sin(i * 0.3) * 30 + 50 + Math.random() * 10,
}));

export const BackgroundChart = () => (
  <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line type="monotone" dataKey="v" stroke="hsl(199, 89%, 48%)" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);
