import google from "../assets/google.webp";
import microsoft from "../assets/microsoft.webp";
import amazon from "../assets/amazon.webp";
import facebook from "../assets/facebook.png";
import tikosoft from "../assets/tikosoft.png";

interface SponsorProps {
  icon: string;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: google,
    name: "Google",
  },
  {
    icon: microsoft,
    name: "Microsoft",
  },
  {
    icon: amazon,
    name: "Amazon",
  },
  {
    icon: facebook,
    name: "Facebook",
  },
  {
    icon: tikosoft,
    name: "tikosoft",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-10 text-primary">
      Investisseurs et fondateur
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <img src={icon} alt="" width={100}/>
            <h3 className="text-xl  font-bold ml-20"></h3>
          </div>
        ))}
      </div>
    </section>
  );
};
