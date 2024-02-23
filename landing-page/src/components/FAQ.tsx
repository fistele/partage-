import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "La version gratuite de cette application est-elle limitée?",
    answer: "Non, la version gratuite offre toutes les fonctionnalités de base de l'application.",
    value: "item-1",
  },
  {
    question: "Quels sont les avantages de la version premium de Partage+?",
    answer:
      "La version premium offre des fonctionnalités avancées telles que la gestion avancée des annonces et un support prioritaire.",
    value: "item-2",
  },
  {
    question:
      "Comment puis-je contacter le support client de Partage+ en cas de problème?",
    answer:
      "Vous pouvez contacter notre équipe de support client via notre formulaire de contact en ligne ou par e-mail à support@partageplus.com.",
    value: "item-3",
  },
  {
    question: "Partage+ est-il disponible sur mobile?",
    answer: "Oui, Partage+ est disponible sur iOS et Android. Vous pouvez télécharger l'application depuis l'App Store ou Google Play Store.",
    value: "item-4",
  },
  {
    question:
      "Quelles sont les mesures de sécurité mises en place pour protéger mes données personnelles sur Partage+?",
    answer:
      "Partage+ utilise des protocoles de sécurité avancés pour protéger vos données personnelles. Nous employons des technologies de cryptage robustes et suivons les meilleures pratiques de sécurité.",
    value: "item-5",
  },
];


export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Questions {" "}
        </span>
        Fréquemment Posées
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
      Vous avez encore des questions?{" "}
        <a
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contactez-nous
        </a>
      </h3>
    </section>
  );
};
