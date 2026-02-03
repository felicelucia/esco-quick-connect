import { Mail } from "lucide-react";
import logoGea from "@/assets/logo-gea.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <img 
              src={logoGea} 
              alt="GEA Energy" 
              className="h-10 w-auto"
            />
            <p className="text-background/60 text-sm">
              ESCO • {t.societaIngegneria}
            </p>
          </div>

          {/* Quick Contacts */}
          <div className="flex items-center">
            <a
              href="mailto:info@geaenergy.it"
              className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@geaenergy.it</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            © {currentYear} GEA Energy Srl. {t.dirittiRiservati}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
