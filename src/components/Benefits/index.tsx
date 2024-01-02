import { ReactNode } from "react";

const BenefitsList = [
  {
    icon: "/icons/AntiDDOS.svg",
    title: "AntiDDOS",
    description:
      "Všechny naše servery jsou vybaveny kvalitní ochranou proti DDOS útokům",
  },
  {
    icon: "/icons/Podpora.svg",
    title: "Podpora",
    description:
      "Vážíme si naších zákazníků a proto máme aktivní tým podpory a členy komunity",
  },
  {
    icon: "/icons/Umístění.svg",
    title: "Umístění",
    description:
      "Všechny server, které vám nabízíme jsou umístěny a spravovány v Česku",
  },
  {
    icon: "/icons/Rychlost Kódu.svg",
    title: "Hardware",
    description:
      "Naše stroje jsou postaveny na tom nejlepším co lze sehnat na trhu od AMD",
  },
];

const Benefits = () => {
  return (
    <section>
      <div className="container border-b border-t border-gray-100 py-10">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {BenefitsList.map((item) => (
            <BenefitsItemContainer key={item.title}>
              <BenefitsItemIcon src={item.icon} alt={item.title} />
              <div>
                <BenefitsItemTitle>{item.title}</BenefitsItemTitle>
                <BenefitsItemDescription>
                  {item.description}
                </BenefitsItemDescription>
              </div>
            </BenefitsItemContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsItemContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex cursor-pointer flex-row flex-nowrap items-center gap-5 rounded-md bg-gray-50 p-4 transition-transform hover:scale-110">
      {children}
    </div>
  );
};

const BenefitsItemIcon = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} className="h-20 w-20" />;
};

const BenefitsItemTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-2xl font-bold">{children}</h3>;
};

const BenefitsItemDescription = ({ children }: { children: ReactNode }) => {
  return <p className="text-sm text-secondary-500">{children}</p>;
};

export default Benefits;
