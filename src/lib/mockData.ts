export const generateForecastData = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months.map((month, i) => {
    const actual = 200 + Math.sin(i * 0.5) * 80 + Math.random() * 40;
    const predicted = actual + (Math.random() - 0.5) * 30;
    return {
      month,
      actual: Math.round(actual),
      predicted: Math.round(predicted),
      upper: Math.round(predicted + 25 + Math.random() * 15),
      lower: Math.round(predicted - 25 - Math.random() * 15),
    };
  });
};

export const modelComparison = [
  { model: "ARIMA", mae: 12.4, rmse: 18.7, mape: 4.2 },
  { model: "SARIMA", mae: 10.1, rmse: 15.3, mape: 3.5 },
  { model: "LSTM", mae: 8.6, rmse: 13.1, mape: 2.8 },
  { model: "Prophet", mae: 9.3, rmse: 14.2, mape: 3.1 },
];

export const kpiMetrics = {
  mae: 8.6,
  rmse: 13.1,
  mape: 2.8,
  r2: 0.94,
};

export const insightsData = [
  { title: "Peak Demand Alert", description: "Expected peak at 3PM–6PM today. Consider load shifting.", severity: "high" as const, icon: "Zap" as const },
  { title: "Renewable Opportunity", description: "Solar output forecasted 22% above average tomorrow.", severity: "low" as const, icon: "Sun" as const },
  { title: "Anomaly Detected", description: "Unusual consumption pattern on Floor 3, Building A.", severity: "medium" as const, icon: "AlertTriangle" as const },
  { title: "Cost Optimization", description: "Switch to off-peak charging to save ~$240/month.", severity: "low" as const, icon: "DollarSign" as const },
  { title: "Grid Stability", description: "Grid frequency stable. No disruptions expected.", severity: "low" as const, icon: "Activity" as const },
  { title: "Weather Impact", description: "Cold front arriving — heating demand +18% expected.", severity: "medium" as const, icon: "Cloud" as const },
];
