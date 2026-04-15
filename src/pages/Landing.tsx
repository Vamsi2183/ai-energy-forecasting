import { motion } from "framer-motion";
import { ArrowRight, Upload, BarChart3, FileDown, Check, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackgroundChart } from "@/components/BackgroundChart";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const features = [
  { icon: Upload, title: "Upload CSV", desc: "Drag & drop your energy consumption data" },
  { icon: BarChart3, title: "AI Forecast", desc: "Compare ARIMA, LSTM, Prophet and more" },
  { icon: FileDown, title: "Download Report", desc: "Export insights and predictions" },
];

const plans = [
  { name: "Free", price: "$0", features: ["5 forecasts/month", "2 models", "Basic charts", "CSV export"], cta: "Get Started", popular: false },
  { name: "Pro", price: "$29", features: ["Unlimited forecasts", "All models", "Advanced analytics", "API access", "Priority support"], cta: "Start Free Trial", popular: true },
  { name: "Enterprise", price: "Custom", features: ["Everything in Pro", "Custom models", "SSO & RBAC", "Dedicated support", "SLA guarantee"], cta: "Contact Sales", popular: false },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <BackgroundChart />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 text-sm text-muted-foreground">
            <Zap className="w-3.5 h-3.5 text-accent" />
            AI-Powered Energy Intelligence
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Predict Energy.{" "}
            <span className="text-gradient">Save the Planet.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Upload your consumption data, run state-of-the-art ML models, and get actionable forecasts — all in one dashboard.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold rounded-xl glow-primary"
              onClick={() => navigate("/dashboard")}
            >
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/50 text-foreground hover:bg-secondary px-8 py-6 text-base rounded-xl"
            >
              Watch Demo
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...fadeUp()} className="text-3xl md:text-4xl font-bold text-center mb-4">How it works</motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Three simple steps to energy intelligence
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <GlassCard
                key={f.title}
                {...fadeUp(0.1 + i * 0.1)}
                whileHover={{ y: -4, scale: 1.02 }}
                className="text-center gradient-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...fadeUp()} className="text-3xl md:text-4xl font-bold text-center mb-4">Simple pricing</motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-muted-foreground text-center mb-16">No hidden fees. Scale as you grow.</motion.p>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <GlassCard
                key={plan.name}
                {...fadeUp(0.1 + i * 0.1)}
                whileHover={{ y: -6, scale: 1.02 }}
                glow={plan.popular ? "primary" : "none"}
                className={plan.popular ? "gradient-border ring-1 ring-primary/20" : ""}
              >
                {plan.popular && (
                  <span className="inline-block text-xs font-medium bg-primary/20 text-primary px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <div className="my-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className={
                    plan.popular
                      ? "w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      : "w-full bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }
                >
                  {plan.cta}
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4 text-center text-sm text-muted-foreground">
        © 2026 AI Energy Forecasting Platform. All rights reserved.
      </footer>
    </div>
  );
}
