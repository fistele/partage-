import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Design Adaptatif",
    description:
      "Nous vous offrons une expérience fluide sur tous les appareils, vous permettant de partager sans contrainte.",
    image: image4,
  },
  {
    title: "Interface utilisateur intuitive",
    description:
      "Nous vous proposons une interface conviviale et facile à utiliser pour une expérience agréable et sans effort.",
    image: image3,
  },
  {
    title: "Fiabilité et transparence",
    description:
      "Nous vous garantissons une expérience fiable et transparente, renforçant la confiance au sein de la communauté",
    image: image,
  },
];

const featureList: string[] = [
  "Thème sombre/clair",
  "Annonces détaillées",
  "Recherche avancée",
  "Gestion du calendrier",
  "Système de notation",
  "Notifications",
  "Sécurité",
  "Multilingue",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        De nombreuses{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          fonctionnalités exceptionnelles.
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
