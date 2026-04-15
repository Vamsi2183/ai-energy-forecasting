import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  glow?: "primary" | "accent" | "none";
  hover?: boolean;
}

export const GlassCard = ({ className, glow = "none", hover = true, children, ...props }: GlassCardProps) => (
  <motion.div
    className={cn(
      "glass rounded-xl p-6",
      hover && "glass-hover",
      glow === "primary" && "glow-primary",
      glow === "accent" && "glow-accent",
      className
    )}
    {...props}
  >
    {children}
  </motion.div>
);
