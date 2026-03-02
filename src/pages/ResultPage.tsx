import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, XCircle, Download, ScanLine, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type ResultType = "genuine" | "suspicious" | "fake";

const resultData: Record<ResultType, {
  icon: typeof CheckCircle;
  title: string;
  score: number;
  details: { label: string; value: string }[];
  message: string;
  bgClass: string;
  iconClass: string;
  progressClass: string;
  buttons: { label: string; icon: typeof ScanLine; to: string; variant: "default" | "outline" }[];
}> = {
  genuine: {
    icon: CheckCircle,
    title: "Medicine Verified ✔",
    score: 96,
    details: [
      { label: "Manufacturer", value: "Cipla Ltd" },
      { label: "Batch No", value: "CPX2026" },
      { label: "Expiry", value: "12/2027" },
      { label: "Database Match", value: "Confirmed" },
    ],
    message: "This medicine appears authentic and safe for use.",
    bgClass: "bg-secondary/5 border-secondary/30",
    iconClass: "text-secondary",
    progressClass: "[&>div]:bg-secondary",
    buttons: [
      { label: "Scan Another", icon: ScanLine, to: "/scan", variant: "outline" },
      { label: "Download Report", icon: Download, to: "#", variant: "default" },
    ],
  },
  suspicious: {
    icon: AlertTriangle,
    title: "Warning: Data Mismatch Detected",
    score: 64,
    details: [
      { label: "Batch Number", value: "Not found in official records" },
      { label: "Packaging", value: "Variation detected" },
    ],
    message: "Please verify with pharmacist before consumption.",
    bgClass: "bg-warning/5 border-warning/30",
    iconClass: "text-warning",
    progressClass: "[&>div]:bg-warning",
    buttons: [
      { label: "Report Medicine", icon: Flag, to: "/report", variant: "default" },
      { label: "Scan Another", icon: ScanLine, to: "/scan", variant: "outline" },
    ],
  },
  fake: {
    icon: XCircle,
    title: "High Risk: Possible Counterfeit",
    score: 18,
    details: [
      { label: "Batch Number", value: "Invalid" },
      { label: "Manufacturer", value: "Not recognized" },
    ],
    message: "Do NOT consume this medicine. Report immediately.",
    bgClass: "bg-destructive/5 border-destructive/30",
    iconClass: "text-destructive",
    progressClass: "[&>div]:bg-destructive",
    buttons: [
      { label: "Report Immediately", icon: Flag, to: "/report", variant: "default" },
      { label: "Scan Another", icon: ScanLine, to: "/scan", variant: "outline" },
    ],
  },
};

const ResultPage = () => {
  const { type } = useParams<{ type: string }>();
  const result = resultData[(type as ResultType) || "genuine"] || resultData.genuine;
  const Icon = result.icon;

  return (
    <div className="container py-12 max-w-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-xl border-2 p-6 md:p-8 ${result.bgClass}`}
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block"
          >
            <Icon className={`w-16 h-16 ${result.iconClass} mx-auto`} />
          </motion.div>
          <h1 className="font-display text-2xl font-bold mt-4 mb-2">{result.title}</h1>
        </div>

        {/* Score */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium">Authenticity Score</span>
            <span className="font-bold">{result.score}%</span>
          </div>
          <Progress value={result.score} className={`h-3 rounded-full ${result.progressClass}`} />
        </div>

        {/* Details */}
        <div className="bg-card rounded-lg border p-4 mb-6 space-y-3">
          {result.details.map((d) => (
            <div key={d.label} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{d.label}</span>
              <span className="font-medium">{d.value}</span>
            </div>
          ))}
        </div>

        {/* Message */}
        <p className="text-center font-medium text-sm mb-6 px-4">{result.message}</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {result.buttons.map((btn) => (
            <Button key={btn.label} asChild variant={btn.variant} size="lg" className="flex-1 font-semibold">
              <Link to={btn.to}>
                <btn.icon className="w-4 h-4 mr-2" /> {btn.label}
              </Link>
            </Button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ResultPage;
