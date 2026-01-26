import { motion } from "framer-motion";
import { Sun, Thermometer, FileCheck, Lightbulb, Building, Wrench } from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Fotovoltaico",
    description: "Progettazione e installazione di impianti fotovoltaici residenziali e industriali con accumulo.",
    features: ["Impianti fino a 10kW+", "Sistemi con accumulo", "Manutenzione e monitoraggio"],
  },
  {
    icon: Thermometer,
    title: "Solare Termico",
    description: "Impianti solari termici a circolazione naturale e forzata per acqua calda sanitaria.",
    features: ["Circolazione naturale", "Circolazione forzata", "Integrazione con caldaia"],
  },
  {
    icon: FileCheck,
    title: "Verifiche SPI",
    description: "Verifiche del Sistema di Protezione d'Interfaccia con cassetta prova relè.",
    features: ["Impianti MT e BT", "Conformità normativa", "Certificazioni ufficiali"],
  },
  {
    icon: Lightbulb,
    title: "Consulenza Energetica",
    description: "Analisi e ottimizzazione dei consumi energetici per ridurre costi e impatto ambientale.",
    features: ["Audit energetici", "Diagnosi certificata", "Piano di interventi"],
  },
  {
    icon: Building,
    title: "Servizi per PA",
    description: "Soluzioni smart city per la Pubblica Amministrazione con illuminazione LED intelligente.",
    features: ["Lampade solari LED", "Finanziamento zero", "Smart city solutions"],
  },
  {
    icon: Wrench,
    title: "Autorizzazioni",
    description: "Supporto per autorizzazioni ambientali e pratiche per attività produttive.",
    features: ["Autorizzazioni scarico", "Pratiche ambientali", "Consulenza normativa"],
  },
];

const Servizi = () => {
  return (
    <section id="servizi" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
            I Nostri Servizi
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Soluzioni Complete per l'Energia
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dalla progettazione alla realizzazione, offriamo un servizio completo 
            per ogni esigenza di efficientamento energetico.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-lg border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servizi;
