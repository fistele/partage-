import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[300px] left-[250px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://avatars.githubusercontent.com/u/28824047"
            />
            <AvatarFallback>NM</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">NTONO Mathieu</CardTitle>
            <CardDescription className="text-primary">@fistele</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Team lead chez tikoXtreme</CardContent>
      </Card>

      <Card className="absolute w-[300px] left-[270px] -top-[-150px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://avatars.githubusercontent.com/u/91949555"
            />
            <AvatarFallback>FD</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">FOYOU Dechateau</CardTitle>
            <CardDescription className="text-primary">@Dechateau2035</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Développeur chez tikoXtreme</CardContent>
      </Card>

      <Card className="absolute w-[300px] left-[250px] -top-[-320px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://avatars.githubusercontent.com/u/91949555"
            />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">MAHOUKOU Dieuveil</CardTitle>
            <CardDescription className="text-primary">@Dieuveil</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Développeur chez tikoXtreme</CardContent>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[50px] left-[-50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Gratuit
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Version beta
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /month</span>
          </div>

          <CardDescription>
          Cette version est une version test qui a besoin de vos retours.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Commencer l'essai gratuit</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["20 Partages", "4 Demandes", "2 Equipes"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
