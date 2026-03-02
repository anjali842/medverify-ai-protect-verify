import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flag, CheckCircle, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ReportPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container py-12 max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
            <Flag className="w-5 h-5 text-destructive" />
          </div>
          <h1 className="font-display text-3xl font-bold">Report Suspicious Medicine</h1>
        </div>
        <p className="text-muted-foreground mb-8">
          Help protect the community by reporting counterfeit medicines.
        </p>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleSubmit}
              className="bg-card rounded-xl border p-6 md:p-8 space-y-5"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="medicine">Medicine Name</Label>
                  <Input id="medicine" placeholder="e.g. Paracetamol 500mg" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="batch">Batch Number</Label>
                  <Input id="batch" placeholder="e.g. CPX2026" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pharmacy">Pharmacy Name</Label>
                  <Input id="pharmacy" placeholder="Where was it purchased?" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="City / Town" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Upload Image</Label>
                <div
                  className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 hover:bg-accent/20 transition-colors"
                  onClick={() => document.getElementById("report-file")?.click()}
                >
                  <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Click to upload an image</p>
                  <input id="report-file" type="file" accept="image/*" className="hidden" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea id="notes" placeholder="Any other details..." rows={3} />
              </div>

              <Button type="submit" size="lg" className="w-full font-semibold">
                Submit Report
              </Button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-xl border p-10 text-center"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-2">Report Submitted</h2>
              <p className="text-muted-foreground mb-6">
                Your report has been successfully submitted. Thank you for protecting public health.
              </p>
              <Button variant="outline" onClick={() => setSubmitted(false)}>
                Submit Another Report
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ReportPage;
