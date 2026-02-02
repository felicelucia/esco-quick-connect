import { motion } from "framer-motion";

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
            I Nostri Progetti
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Esperienze e Realizzazioni
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una selezione dei progetti che abbiamo seguito con successo 
            nel settore delle energie rinnovabili e dell'efficienza energetica.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling content */}
        <div className="flex animate-marquee">
          {/* First set */}
          {projects.map((project, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-[400px] mx-4"
            >
              <div className="bg-card rounded-2xl p-6 h-full shadow-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">{index + 1}</span>
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  {project}
                </p>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {projects.map((project, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-[400px] mx-4"
            >
              <div className="bg-card rounded-2xl p-6 h-full shadow-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">{index + 1}</span>
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  {project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Progetti;
