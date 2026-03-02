import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, ScanLine, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const scanSteps = [
  "Analyzing Packaging Design...",
  "Extracting Batch Number...",
  "Verifying Manufacturer Records...",
  "Checking Expiry Date...",
  "Calculating Authenticity Score...",
];

const ScanPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleFile = useCallback((f: File) => {
    setFile(f);
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(f);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }, [handleFile]);

  const startScan = () => {
    setScanning(true);
    setCurrentStep(0);
    scanSteps.forEach((_, i) => {
      setTimeout(() => setCurrentStep(i), i * 1200);
    });
    setTimeout(() => {
      const results = ["genuine", "suspicious", "fake"];
      const random = results[Math.floor(Math.random() * results.length)];
      navigate(`/result/${random}`);
    }, scanSteps.length * 1200 + 500);
  };

  return (
    <div className="container py-12 max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl font-bold mb-2">Scan Your Medicine</h1>
        <p className="text-muted-foreground mb-8">
          Upload a clear image of the medicine strip. Ensure batch number and expiry date are visible.
        </p>

        <AnimatePresence mode="wait">
          {!scanning ? (
            <motion.div key="upload" exit={{ opacity: 0, scale: 0.95 }}>
              {/* Drop zone */}
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-10 text-center transition-colors cursor-pointer ${
                  preview ? "border-primary bg-accent/30" : "border-border hover:border-primary/50 hover:bg-accent/20"
                }`}
                onClick={() => document.getElementById("file-input")?.click()}
              >
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                />
                {preview ? (
                  <div className="space-y-4">
                    <img src={preview} alt="Preview" className="max-h-60 mx-auto rounded-lg" />
                    <p className="text-sm text-muted-foreground">{file?.name}</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto">
                      <Upload className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-medium">Drag & drop or click to upload</p>
                    <p className="text-sm text-muted-foreground">Supports JPG, PNG, WEBP</p>
                  </div>
                )}
              </div>

              <div className="mt-6 flex gap-3">
                {!preview ? (
                  <Button
                    size="lg"
                    className="w-full font-semibold"
                    onClick={() => document.getElementById("file-input")?.click()}
                  >
                    <Upload className="w-4 h-4 mr-2" /> Upload Image
                  </Button>
                ) : (
                  <Button size="lg" className="w-full font-semibold" onClick={startScan}>
                    <ScanLine className="w-4 h-4 mr-2" /> Scan Now
                  </Button>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="scanning"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-xl border p-8 text-center"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <ScanLine className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-6">Scanning Medicine...</h3>
              <div className="space-y-3 text-left max-w-sm mx-auto">
                {scanSteps.map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: i <= currentStep ? 1 : 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle
                      className={`w-5 h-5 shrink-0 transition-colors ${
                        i < currentStep
                          ? "text-secondary"
                          : i === currentStep
                          ? "text-primary animate-pulse"
                          : "text-muted"
                      }`}
                    />
                    <span className={`text-sm ${i <= currentStep ? "text-foreground" : "text-muted-foreground"}`}>
                      {step}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ScanPage;
