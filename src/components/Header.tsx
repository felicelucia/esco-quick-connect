import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoGea from "@/assets/logo-gea.jpg";

const navLinks = [
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#servizi", label: "Servizi" },
  { href: "#contatti", label: "Contatti" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center group"
          >
            <img 
              src={logoGea} 
              alt="GEA Energy" 
              className={`h-12 w-auto transition-all ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant={isScrolled ? "default" : "hero"}
              size="sm"
              onClick={() => scrollToSection("#contatti")}
            >
              Richiedi Consulenza
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-foreground font-medium py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              className="w-full"
              onClick={() => scrollToSection("#contatti")}
            >
              Richiedi Consulenza
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
