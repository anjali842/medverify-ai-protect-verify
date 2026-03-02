import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ScanLine,
  AlertTriangle,
  CalendarClock,
  Cpu,
  Users,
  Zap,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const features = [
  { icon: Cpu, title: "AI Packaging Analysis", desc: "Deep learning models analyze packaging design for inconsistencies." },
  { icon: ScanLine, title: "Batch Number Verification", desc: "Cross-reference batch numbers against manufacturer databases." },
  { icon: CalendarClock, title: "Expiry Detection", desc: "Automatic expiry date extraction and validation." },
  { icon: AlertTriangle, title: "Instant Safety Alerts", desc: "Real-time alerts when counterfeit medicine is detected." },
];

const trustPoints = [
  { icon: ShieldCheck, text: "AI-powered verification" },
  { icon: Heart, text: "Designed for rural healthcare safety" },
  { icon: Users, text: "Easy for patients and pharmacists" },
  { icon: Zap, text: "Fast and reliable results" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden medical-pattern">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-95" />
        <div className="container relative z-10 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary-foreground"
            >
              <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-primary-foreground/70">
                Scan. Verify. Protect.
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
                Protect Your Family from Fake Medicines
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-lg">
                MedVerify AI uses Artificial Intelligence to detect counterfeit medicines through packaging analysis and batch verification.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-card text-primary hover:bg-primary hover:text-primary-foreground font-semibold shadow-lg text-base px-7 transition-colors duration-300">
                  <Link to="/scan">Scan Medicine</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-card/40 bg-card/10 text-primary-foreground hover:bg-card hover:text-primary font-semibold text-base px-7 transition-colors duration-300">
                  <a href="#features">Learn How It Works</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:block"
            >
              <img
                src={heroImage}
                alt="Medicine verification with smartphone AI scanning"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl md:text-4xl font-bold mb-3">
            How MedVerify AI Works
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-xl mx-auto">
            Powerful AI tools to protect you from counterfeit medicines
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-xl p-6 border hover:border-primary/30 transition-all duration-300"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="bg-accent/50 medical-pattern">
        <div className="container py-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="font-display text-3xl font-bold text-center mb-10"
          >
            Why Trust MedVerify AI?
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustPoints.map((t, i) => (
              <motion.div
                key={t.text}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-3 bg-card rounded-xl p-5 border"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <t.icon className="w-5 h-5 text-secondary" />
                </div>
                <p className="font-medium text-sm leading-relaxed pt-2">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold mb-4">
            Ready to Verify?
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground mb-8">
            Scan your medicine now and ensure your safety in seconds.
          </motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <Button asChild size="lg" className="font-semibold text-base px-8 shadow-lg" style={{ boxShadow: "var(--shadow-primary)" }}>
              <Link to="/scan">
                Start Scanning Now <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Index;
