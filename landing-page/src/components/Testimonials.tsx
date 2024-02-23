import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://avatars.githubusercontent.com/u/110671224",
    name: "Randyglobal",
    userName: "@Randyglobal",
    comment: "Partage+ a transformé la façon dont je gère mes ressources. C'est tellement facile de partager et de trouver ce dont j'ai besoin!",
  },
  {
    image: "https://avatars.githubusercontent.com/u/110671418",
    name: "Ande Tracy",
    userName: "@Ande12",
    comment:
      "Grâce à Partage+, j'ai rencontré de nouvelles personnes dans ma communauté et j'ai élargi mes horizons. C'est une expérience incroyablement enrichissante.",
  },

  {
    image: "https://avatars.githubusercontent.com/u/36332832",
    name: "Onesime Moffo",
    userName: "@OnyxM",
    comment:
      "Je suis impressionné par la convivialité de l'interface de Partage+. C'est tellement intuitif et simple à utiliser!",
  },
  {
    image: "https://avatars.githubusercontent.com/u/74919689",
    name: "Ismael Youssef",
    userName: "@ismaelyoussef1009",
    comment:
      "Partage+ m'a permis d'économiser de l'argent en partageant des ressources au lieu de les acheter. C'est vraiment une solution économique!",
  },
  {
    image: "https://avatars.githubusercontent.com/u/57965655",
    name: "Cédric Lonla",
    userName: "@lonla26",
    comment:
      "La fonction de calendrier de Partage+ est un vrai plus! Ça m'aide à organiser mes prêts et à éviter les conflits d'horaire.",
  },
  {
    image: "https://avatars.githubusercontent.com/u/81180104",
    name: "Ronice Yemeli",
    userName: "@roniceyemeli",
    comment:
      "Je recommande vivement Partage+ à tous ceux qui recherchent une façon simple et pratique de partager et de découvrir de nouvelles ressources dans leur communauté.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
      Découvrez ce que 
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          nos utilisateurs {" "}
        </span>
        pensent de Partage+
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
      Quelques témoignages inspirants de ceux qui ont 
      bénéficié de l'expérience Partage+.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>NM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
