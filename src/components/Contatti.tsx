import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Il nome è obbligatorio").max(100, "Il nome è troppo lungo"),
  email: z.string().trim().email("Email non valida").max(255, "Email troppo lunga"),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(1, "Il messaggio è obbligatorio").max(1000, "Il messaggio è troppo lungo"),
});

const Contatti = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Messaggio inviato!",
      description: "Ti risponderemo il prima possibile.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsLoading(false);
  };

  return (
    <section id="contatti" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
              Contattaci
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Parliamo del Tuo Progetto
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-12 leading-relaxed">
              Hai bisogno di consulenza energetica? Contattaci per una valutazione 
              gratuita. Lavoriamo su tutto il territorio nazionale.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:info@geaenergy.it"
                className="flex items-center gap-4 text-primary-foreground/90 hover:text-primary-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Email</p>
                  <p className="font-semibold">info@geaenergy.it</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-primary-foreground/90">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Operativi in</p>
                  <p className="font-semibold">Tutta Italia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 md:p-10 shadow-lg"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Richiedi Informazioni
              </h3>
              
              <div className="space-y-5">
                <div>
                  <Input
                    name="name"
                    placeholder="Nome e Cognome *"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Telefono (opzionale)"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Il tuo messaggio *"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Invia Messaggio
                    </>
                  )}
                </Button>
              </div>

              <p className="text-muted-foreground text-sm mt-4 text-center">
                Ti risponderemo entro 24 ore lavorative
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contatti;
