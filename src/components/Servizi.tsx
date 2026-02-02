import { motion } from "framer-motion";
import { Sun, Lightbulb, Building, Wrench } from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Rinnovabili",
    description: "Progettazione e sviluppo di impianti da fonti rinnovabili per la produzione di energia pulita.",
    features: ["Fotovoltaico", "Eolico", "Biomassa", "Biogas", "Idrogeno", "Idroelettrico"],
  },
  {
    icon: Lightbulb,
    title: "Efficienza Energetica",
    description: "Soluzioni per ottimizzare i consumi e accedere agli incentivi statali.",
    features: ["Bonus edilizi", "Conto termico", "Residenziale", "PMI", "Pubblica Amministrazione"],
  },
  {
    icon: Wrench,
    title: "Installazione Fotovoltaico e O&M",
    description: "Installazione professionale di impianti fotovoltaici e servizi di Operation & Maintenance.",
    features: ["Installazione chiavi in mano", "Manutenzione ordinaria", "Manutenzione straordinaria"],
  },
  {
    icon: Building,
    title: "Servizi di Ingegneria",
    description: "Progettazione multidisciplinare per interventi edilizi, ambientali e idraulici.",
    features: ["Progettazione edile", "Progettazione ambientale", "Progettazione idraulica"],
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

        <div className="grid md:grid-cols-2 gap-8">
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
