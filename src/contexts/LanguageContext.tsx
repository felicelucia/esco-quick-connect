import { createContext, useContext, useState, ReactNode } from "react";

type Language = "it" | "en";

interface Translations {
  // Header
  chiSiamo: string;
  servizi: string;
  progetti: string;
  contatti: string;
  richiediConsulenza: string;
  
  // Hero
  escoCertificata: string;
  societaIngegneria: string;
  heroSubtitle: string;
  scopriServizi: string;
  contattaci: string;
  
  // Chi Siamo
  chiSiamoTitle: string;
  tuaPartnerEnergetica: string;
  chiSiamoDescription: string;
  escoTitle: string;
  escoDesc: string;
  teamTitle: string;
  teamDesc: string;
  esperienzaTitle: string;
  esperienzaDesc: string;
  supportoTitle: string;
  supportoDesc: string;
  
  // Progetti
  iNostriProgetti: string;
  esperienzeRealizzazioni: string;
  progettiDescription: string;
  
  // Servizi
  iNostriServizi: string;
  soluzioniComplete: string;
  serviziDescription: string;
  rinnovabili: string;
  rinnovabiliDesc: string;
  rinnovabiliFeatures: string[];
  efficienza: string;
  efficienzaDesc: string;
  efficienzaFeatures: string[];
  installazione: string;
  installazioneDesc: string;
  installazioneFeatures: string[];
  ingegneria: string;
  ingegneriaDesc: string;
  ingegneriaFeatures: string[];
  
  // Contatti
  contattaciTitle: string;
  parliamoProjetto: string;
  contattiDescription: string;
  email: string;
  operativiIn: string;
  tuttaItalia: string;
  richiediInfo: string;
  nomeCognome: string;
  emailPlaceholder: string;
  telefonoOpzionale: string;
  tuoMessaggio: string;
  inviaMessaggio: string;
  invioInCorso: string;
  rispondiamo24h: string;
  messaggioInviato: string;
  messaggioInviatoDesc: string;
  
  // Footer
  dirittiRiservati: string;
  
  // Validation
  nomeObbligatorio: string;
  nomeTroppoLungo: string;
  emailNonValida: string;
  emailTroppoLunga: string;
  messaggioObbligatorio: string;
  messaggioTroppoLungo: string;
}

const translations: Record<Language, Translations> = {
  it: {
    // Header
    chiSiamo: "Chi Siamo",
    servizi: "Servizi",
    progetti: "Progetti",
    contatti: "Contatti",
    richiediConsulenza: "Richiedi Consulenza",
    
    // Hero
    escoCertificata: "ESCO Certificata",
    societaIngegneria: "Società di Ingegneria",
    heroSubtitle: "Oltre 15 anni di esperienza nella consulenza energetica per aziende e privati in tutta Italia",
    scopriServizi: "Scopri i Servizi",
    contattaci: "Contattaci",
    
    // Chi Siamo
    chiSiamoTitle: "Chi Siamo",
    tuaPartnerEnergetica: "Il Tuo Partner Energetico",
    chiSiamoDescription: "GEA Energy è una <strong>ESCO certificata</strong> e <strong>società di ingegneria</strong> specializzata in soluzioni di efficienza energetica. Offriamo consulenza professionale su tutto il territorio nazionale, supportando aziende e privati nel percorso verso la sostenibilità.",
    escoTitle: "ESCO Certificata",
    escoDesc: "Energy Service Company certificata per garantire standard di qualità elevati",
    teamTitle: "Team Multidisciplinare",
    teamDesc: "Ingegneri, architetti e geometri con specifica esperienza nel settore energetico",
    esperienzaTitle: "15+ Anni di Esperienza",
    esperienzaDesc: "Da oltre 15 anni al fianco di aziende e privati per l'efficientamento energetico",
    supportoTitle: "Supporto a 360°",
    supportoDesc: "Dalla consulenza alla realizzazione, compresa l'assistenza post-vendita",
    
    // Progetti
    iNostriProgetti: "I Nostri Progetti",
    esperienzeRealizzazioni: "Esperienze e Realizzazioni",
    progettiDescription: "Una selezione dei progetti che abbiamo seguito con successo nel settore delle energie rinnovabili e dell'efficienza energetica.",
    
    // Servizi
    iNostriServizi: "I Nostri Servizi",
    soluzioniComplete: "Soluzioni Complete per l'Energia",
    serviziDescription: "Dalla progettazione alla realizzazione, offriamo un servizio completo per ogni esigenza di efficientamento energetico.",
    rinnovabili: "Rinnovabili",
    rinnovabiliDesc: "Progettazione e sviluppo di impianti da fonti rinnovabili per la produzione di energia pulita.",
    rinnovabiliFeatures: ["Fotovoltaico", "Eolico", "Biomassa", "Biogas", "Idrogeno", "Idroelettrico"],
    efficienza: "Efficienza Energetica",
    efficienzaDesc: "Soluzioni per ottimizzare i consumi e accedere agli incentivi statali.",
    efficienzaFeatures: ["Bonus edilizi", "Conto termico", "Residenziale", "PMI", "Pubblica Amministrazione"],
    installazione: "Installazione Fotovoltaico e O&M",
    installazioneDesc: "Installazione professionale di impianti fotovoltaici e servizi di Operation & Maintenance.",
    installazioneFeatures: ["Installazione chiavi in mano", "Manutenzione ordinaria", "Manutenzione straordinaria"],
    ingegneria: "Servizi di Ingegneria",
    ingegneriaDesc: "Progettazione multidisciplinare per interventi edilizi, ambientali e idraulici.",
    ingegneriaFeatures: ["Progettazione edile", "Progettazione ambientale", "Progettazione idraulica"],
    
    // Contatti
    contattaciTitle: "Contattaci",
    parliamoProjetto: "Parliamo del Tuo Progetto",
    contattiDescription: "Hai bisogno di consulenza energetica? Contattaci per una valutazione gratuita. Lavoriamo su tutto il territorio nazionale.",
    email: "Email",
    operativiIn: "Operativi in",
    tuttaItalia: "Tutta Italia",
    richiediInfo: "Richiedi Informazioni",
    nomeCognome: "Nome e Cognome *",
    emailPlaceholder: "Email *",
    telefonoOpzionale: "Telefono (opzionale)",
    tuoMessaggio: "Il tuo messaggio *",
    inviaMessaggio: "Invia Messaggio",
    invioInCorso: "Invio in corso...",
    rispondiamo24h: "Ti risponderemo entro 24 ore lavorative",
    messaggioInviato: "Messaggio inviato!",
    messaggioInviatoDesc: "Ti risponderemo il prima possibile.",
    
    // Footer
    dirittiRiservati: "Tutti i diritti riservati.",
    
    // Validation
    nomeObbligatorio: "Il nome è obbligatorio",
    nomeTroppoLungo: "Il nome è troppo lungo",
    emailNonValida: "Email non valida",
    emailTroppoLunga: "Email troppo lunga",
    messaggioObbligatorio: "Il messaggio è obbligatorio",
    messaggioTroppoLungo: "Il messaggio è troppo lungo",
  },
  en: {
    // Header
    chiSiamo: "About Us",
    servizi: "Services",
    progetti: "Projects",
    contatti: "Contact",
    richiediConsulenza: "Request Consultation",
    
    // Hero
    escoCertificata: "Certified ESCO",
    societaIngegneria: "Engineering Firm",
    heroSubtitle: "Over 15 years of experience in energy consulting for businesses and individuals throughout Italy",
    scopriServizi: "Discover Services",
    contattaci: "Contact Us",
    
    // Chi Siamo
    chiSiamoTitle: "About Us",
    tuaPartnerEnergetica: "Your Energy Partner",
    chiSiamoDescription: "GEA Energy is a <strong>certified ESCO</strong> and <strong>engineering firm</strong> specialized in energy efficiency solutions. We offer professional consulting throughout Italy, supporting businesses and individuals on their path to sustainability.",
    escoTitle: "Certified ESCO",
    escoDesc: "Certified Energy Service Company ensuring high quality standards",
    teamTitle: "Multidisciplinary Team",
    teamDesc: "Engineers, architects and surveyors with specific experience in the energy sector",
    esperienzaTitle: "15+ Years of Experience",
    esperienzaDesc: "Over 15 years alongside businesses and individuals for energy efficiency",
    supportoTitle: "360° Support",
    supportoDesc: "From consulting to implementation, including after-sales assistance",
    
    // Progetti
    iNostriProgetti: "Our Projects",
    esperienzeRealizzazioni: "Experience & Achievements",
    progettiDescription: "A selection of projects we have successfully completed in the renewable energy and energy efficiency sector.",
    
    // Servizi
    iNostriServizi: "Our Services",
    soluzioniComplete: "Complete Energy Solutions",
    serviziDescription: "From design to implementation, we offer a complete service for every energy efficiency need.",
    rinnovabili: "Renewables",
    rinnovabiliDesc: "Design and development of renewable energy plants for clean energy production.",
    rinnovabiliFeatures: ["Photovoltaic", "Wind", "Biomass", "Biogas", "Hydrogen", "Hydroelectric"],
    efficienza: "Energy Efficiency",
    efficienzaDesc: "Solutions to optimize consumption and access government incentives.",
    efficienzaFeatures: ["Building Bonuses", "Thermal Account", "Residential", "SMEs", "Public Administration"],
    installazione: "PV Installation & O&M",
    installazioneDesc: "Professional installation of photovoltaic systems and Operation & Maintenance services.",
    installazioneFeatures: ["Turnkey Installation", "Routine Maintenance", "Extraordinary Maintenance"],
    ingegneria: "Engineering Services",
    ingegneriaDesc: "Multidisciplinary design for building, environmental and hydraulic projects.",
    ingegneriaFeatures: ["Building Design", "Environmental Design", "Hydraulic Design"],
    
    // Contatti
    contattaciTitle: "Contact Us",
    parliamoProjetto: "Let's Talk About Your Project",
    contattiDescription: "Need energy consulting? Contact us for a free assessment. We operate throughout Italy.",
    email: "Email",
    operativiIn: "Operating in",
    tuttaItalia: "All of Italy",
    richiediInfo: "Request Information",
    nomeCognome: "Full Name *",
    emailPlaceholder: "Email *",
    telefonoOpzionale: "Phone (optional)",
    tuoMessaggio: "Your message *",
    inviaMessaggio: "Send Message",
    invioInCorso: "Sending...",
    rispondiamo24h: "We'll respond within 24 business hours",
    messaggioInviato: "Message sent!",
    messaggioInviatoDesc: "We'll get back to you as soon as possible.",
    
    // Footer
    dirittiRiservati: "All rights reserved.",
    
    // Validation
    nomeObbligatorio: "Name is required",
    nomeTroppoLungo: "Name is too long",
    emailNonValida: "Invalid email",
    emailTroppoLunga: "Email is too long",
    messaggioObbligatorio: "Message is required",
    messaggioTroppoLungo: "Message is too long",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("it");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
