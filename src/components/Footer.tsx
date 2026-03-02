import { ShieldCheck, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-background/80">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-background">MedVerify AI</span>
          </div>
          <p className="text-sm text-background/60 leading-relaxed">
            AI-Based Healthcare Safety Platform
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-display font-semibold text-background">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-background transition-colors">Home</Link>
            <Link to="/scan" className="hover:text-background transition-colors">Scan Medicine</Link>
            <Link to="/report" className="hover:text-background transition-colors">Report</Link>
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="font-display font-semibold text-background">Contact</h4>
          <div className="flex flex-col gap-2 text-sm">
            <a href="mailto:support@medverify.ai" className="flex items-center gap-2 hover:text-background transition-colors">
              <Mail className="w-4 h-4" /> support@medverify.ai
            </a>
            <a href="tel:1800000000" className="flex items-center gap-2 hover:text-background transition-colors">
              <Phone className="w-4 h-4" /> Emergency: 1800-000-000
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-background/10 text-xs text-background/40 space-y-2">
        <p>© 2026 MedVerify AI. All Rights Reserved.</p>
        <p>This is an AI-assisted preliminary verification tool. Always consult a licensed pharmacist for confirmation.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
