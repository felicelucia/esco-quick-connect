import { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  "Permitting agrivoltaico 8,32 MWp sito in Maida (CZ)",
  "Permitting fotovoltaico in CER da 1 MWp sito in Airola (CE)",
  "Autorizzazione Unica agrivoltaico 12 MWp sito in Aprilia (LT) comprensiva di Studio di impatto ambientale",
  "Consulenza per la gestione di impianti in esercizio e rapporti con GSE/e-distribuzione per impianti idroelettrici e fotovoltaici in provincia di Salerno",
  "Revamping fotovoltaico impianti da 50 kWp e 70 kWp siti in Prignano Cilento",
  "Gestione pratiche e realizzazione impianti per Conto termico siti in regione Campania",
  "Progetto di finanza per bando PNRR misura M7 I17 per ATERP in provincia di Cosenza",
  "Consulenze su contenziosi in particolare su superbonus",
];

const Progetti = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  
  // Calculate card width based on container
  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        // Full viewport width minus padding
        setCardWidth(window.innerWidth);
      }
    };
    
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Infinite scroll animation
  useAnimationFrame((time, delta) => {
    if (isPaused || cardWidth === 0) return;
    
    const speed = 0.05; // pixels per ms
    const totalWidth = cardWidth * projects.length;
    
    setOffset((prev) => {
      const newOffset = prev + delta * speed;
      // Reset when we've scrolled one full set
      return newOffset >= totalWidth ? 0 : newOffset;
    });
  });

  // Duplicate projects for seamless loop
  const allProjects = [...projects, ...projects];

  return (
    <section id="progetti" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
            {t.iNostriProgetti}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.esperienzeRealizzazioni}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.progettiDescription}
          </p>
        </motion.div>
      </div>

      {/* Full-width Carousel */}
      <div 
        ref={containerRef}
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex"
          style={{ 
            transform: `translateX(-${offset}px)`,
            width: `${cardWidth * allProjects.length}px`
          }}
        >
          {allProjects.map((project, index) => (
            <div
              key={`project-${index}`}
              className="flex-shrink-0 px-6"
              style={{ width: `${cardWidth}px` }}
            >
              <div className="bg-card rounded-3xl p-8 md:p-12 h-full shadow-card border border-border hover:border-primary/30 transition-colors mx-auto max-w-4xl">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <p className="text-foreground text-xl md:text-2xl font-medium leading-relaxed">
                    {project}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => {
            const currentIndex = Math.floor(offset / cardWidth) % projects.length;
            return (
              <button
                key={index}
                onClick={() => setOffset(index * cardWidth)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index 
                    ? "bg-primary w-6" 
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Progetti;
