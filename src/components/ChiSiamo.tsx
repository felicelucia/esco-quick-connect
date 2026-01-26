import { motion } from "framer-motion";
import { Award, Users, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "ESCO Certificata",
    description: "Energy Service Company certificata per garantire standard di qualità elevati",
  },
  {
    icon: Users,
    title: "Team Multidisciplinare",
    description: "Ingegneri, architetti e geometri con specifica esperienza nel settore energetico",
  },
  {
    icon: Clock,
    title: "15+ Anni di Esperienza",
    description: "Da oltre 15 anni al fianco di aziende e privati per l'efficientamento energetico",
  },
  {
    icon: Shield,
    title: "Supporto a 360°",
    description: "Dalla consulenza alla realizzazione, compresa l'assistenza post-vendita",
  },
];

const ChiSiamo = () => {
  return (
    <section id="chi-siamo" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
            Chi Siamo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            La Tua Partner Energetica
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            GEA Energy è una <strong className="text-foreground">ESCO certificata</strong> e{" "}
            <strong className="text-foreground">società di ingegneria</strong> specializzata 
            in soluzioni di efficienza energetica. Offriamo consulenza professionale 
            su tutto il territorio nazionale, supportando aziende e privati nel percorso 
            verso la sostenibilità.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChiSiamo;
