import { motion } from "framer-motion";
import { ShieldCheck, Target, Eye, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission", desc: "To make medicine verification accessible to everyone, especially in underserved communities where counterfeit drugs pose the greatest threat." },
  { icon: Eye, title: "Our Vision", desc: "A world where no one falls victim to fake or expired medicines, powered by AI technology and community vigilance." },
  { icon: Users, title: "Who We Serve", desc: "Patients, pharmacists, healthcare workers, and regulatory bodies seeking fast, reliable medicine authentication." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const AboutPage = () => (
  <div className="container py-12 max-w-3xl">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-primary" />
        </div>
        <h1 className="font-display text-3xl font-bold">About MedVerify AI</h1>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
        MedVerify AI is an AI-powered platform designed to combat the growing threat of counterfeit medicines. By leveraging deep learning and verified pharmaceutical databases, we empower individuals and healthcare professionals to verify medicine authenticity in seconds.
      </p>

      <div className="space-y-5">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-card rounded-xl border p-6 flex gap-4 items-start"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <v.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg mb-1">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default AboutPage;
