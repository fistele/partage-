import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Réduction du gaspillage",
    description:
      "Partage+ optimise l'utilisation des ressources en les mettant à disposition de manière collaborative.",
    icon: <ChartIcon />,
  },
  {
    title: "Économies potentielles",
    description:
      "Partage+ offre un accès économique à une variété de ressources sans avoir à les acheter individuellement.",
    icon: <WalletIcon />,
  },
  {
    title: "Simplification de l'accès aux ressources",
    description:
      "Les utilisateurs peuvent trouver et accéder facilement aux ressources dont ils ont besoin.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Quelques {" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              avantages{" "}
            </span>
            de Partage+
          </h2>

          <p className="text-muted-foreground mt-4 mb-8 ">
          Découvrez les avantages uniques de Partage+ qui rendent le partage et la 
          collaboration communautaire plus efficaces et enrichissants.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
