import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Créez un compte",
    description:
      "Inscrivez-vous rapidement pour accéder à toutes les fonctionnalités de Partage+.",
  },
  {
    icon: <MapIcon />,
    title: "Découvrez ou partagez",
    description:
      "Découvrez un large éventail d'articles disponibles ou partagez les vôtres pour enrichir la communauté.",
  },
  {
    icon: <PlaneIcon />,
    title: "Rejoignez nous",
    description:
      "Rejoignez une communauté dynamique de partage, d'échange et de collaboration pour rester connecté.",
  },
  {
    icon: <GiftIcon />,
    title: "Faites un don",
    description:
      "Participez à la générosité en offrant votre soutien à des causes qui changent des vies et font une différence.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
      Guide étape par étape sur le{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        fonctionnement{" "}
        </span>
        de Partage+
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Découvrez le fonctionnement de Partage+ en quatres étapes simples.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
