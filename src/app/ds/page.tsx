"use client";
import { FaqWrapper, FaqContent, FaqItem, FaqTrigger } from "@/components/Faq";
import PrimaryButton from "@/components/PrimaryButton";
import ProductGrid from "@/components/ProductGrid";
import SmallHeader from "@/components/Smallheader";
import { productsDS } from "@/Data/DS";
import { IconCheck, IconCpu } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const [products, setProducts] = useState<Products>(productsDS);

  return (
    <>
      <SmallHeader
        title="Dedikované servery"
        description="Posouvejte hranice vašich projektů s našimi dedikovanými servery."
      />
      <section id="standard">
        <div className="container grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="relative col-span-1">
            <div className="left-50 absolute top-0 flex gap-2 text-alternative-500">
              <IconCpu className="h-6 w-6" /> INTEL XEON
            </div>
            <h1 className="mt-6 text-3xl font-bold leading-relaxed">
              Virtuální server Standard
            </h1>
            <p className="text-lg leading-relaxed">
              Nabízíme cenově dostupné servery s procesory Intel Xeon pro ty
              méně náročnější projekty. Ideální pro servery s menším počtem
              hráčů, zaručuje stabilitu a plynulý zážitek.
            </p>
            <ul className="mt-4">
              <li className="flex items-center gap-2">
                <IconCheck className="h-6 w-6 text-primary-700" /> Cenově
                dostupné řešení
              </li>
              <li className="flex items-center gap-2">
                <IconCheck className="h-6 w-6 text-primary-700" /> Optimální
                poměr cena/výkon
              </li>
              <li className="flex items-center gap-2">
                <IconCheck className="h-6 w-6 text-primary-700" /> Ideální pro
                menší projekty
              </li>
              <li className="flex items-center gap-2">
                <IconCheck className="h-6 w-6 text-primary-700" /> Stabilita a
                plynulý zážitek
              </li>
            </ul>
            <PrimaryButton className="mt-8">Zobrazit nabídku</PrimaryButton>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <Image
              src="/images/minecraft-standard.png"
              alt="minecraft standard"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      <section id="performance">
        <div className="container grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="col-span-1 flex items-center justify-center">
            <Image
              src="/images/minecraft-performance.png"
              alt="minecraft performance"
              width={500}
              height={500}
            />
          </div>
          <div className="relative col-span-1">
            <div className="left-50 absolute top-0 flex gap-2 text-alternative-500">
              <IconCpu className="h-6 w-6" /> AMD RYZEN 9 5900X
            </div>
            <h1 className="mt-6 text-3xl font-bold leading-relaxed">
              Virtální server Performance
            </h1>
            <p className="text-lg leading-relaxed">
              Nabízíme výkonné servery s AMD Ryzen 9 5900X procesory pro ty nej
              náročnější projekty. Ideální pro servery s vysokým počtem hráčů,
              zaručuje plynulý zážitek bez kompromisů.
            </p>
            <ul className="mt-4">
              <li className="flex items-center gap-2">
                <IconCheck className="h-6 w-6 text-primary-700" /> Pro náročené
                projekty
              </li>
              <li className="flex items-center gap-2">
                <IconCheck className="h-6 w-6 text-primary-700" /> Nejlepší
                výkon pro jakýkoliv úkol
              </li>
              <li className="flex items-center gap-2">
                <IconCheck className="h-6 w-6 text-primary-700" /> Ideální pro
                servery s vysokým počtem hráčů
              </li>
              <li className="flex items-center gap-2">
                <IconCheck className="h-6 w-6 text-primary-700" /> Nepřetržitý
                zážitek z hraní
              </li>
            </ul>
            <PrimaryButton className="mt-8">Zobrazit nabídku</PrimaryButton>
          </div>
        </div>
      </section>
      <section className="bg-gray-50" id="faq">
        <div className="container">
          <h1 className="text-center text-4xl font-bold">
            Máte nějaké otázky?
          </h1>
          <p className="text-center text-xl">
            Jsme tu, abychom vám poskytli odpovědi na ty nejčastější otázky,
            které by vás mohly zajímat.
          </p>
          <FaqWrapper>
            <FaqItem>
              <FaqTrigger>Jaký typ serveru byste mi doporučili?</FaqTrigger>
              <FaqContent>
                Rádi bychom vám pomohli vybrat ten nejlepší server pro vaše
                potřeby. Pokud plánujete menší herní zážitky s přáteli,
                doporučujeme balíček &quot;Standard&quot; s procesorem AMD Ryzen
                5 3600 pro optimální výkon. Pro větší a náročnější projekty je
                tu balíček &quot;Performance&quot; s procesorem AMD Ryzen 9
                5900X, který zvládne i ty nejnáročnější Minecraft servery. A
                nezapomeňte na dostatek RAM – pro menší projekty 4GB, pro větší
                a výkonnější servery alespoň 8GB. Pokud si nejste jisti výběrem,
                můžete se obrátit na naši podporu na emailu
                support@gamerhost.pro nebo přes livechat.
              </FaqContent>
            </FaqItem>
            <FaqItem>
              <FaqTrigger>
                Jsem YouTuber/Streamer. Je možnost domluvit u vás spolupráci?
              </FaqTrigger>
              <FaqContent>
                Ano, rádi spolupracujeme se streamery a youtubery. Máme ale
                několik požadavků, jako je minimálně 5000 odběratelů pro
                youtubery a průměrně více než 50 diváků pro streamery na
                Twitchi. Pokud splňujete tyto podmínky, kontaktujte nás na
                emailu support@gamerhost.pro a poskytneme vám více informací o
                možné spolupráci.
              </FaqContent>
            </FaqItem>
            <FaqItem>
              <FaqTrigger>Jaké funkce nabízí váš panel?</FaqTrigger>
              <FaqContent>
                Náš herní panel je plný užitečných funkcí, včetně přístupu k
                herní konzoli, základního nastavení serveru, manažeru souborů,
                databáze a systému záloh. Navíc máme VIP systém. Pro více
                informací si přečtěte naši wiki na stránce wiki.gamerhost.pro
                nebo nás kontaktujte přes livechat nebo e-mail
                support@gamerhost.pro.
              </FaqContent>
            </FaqItem>
          </FaqWrapper>
        </div>
      </section>
      <section id="products">
        <div className="container">
          <div className="section__title mb-4 flex flex-row flex-wrap items-center justify-between">
            <h1 className="text-3xl font-bold">Dostupné dedikované servery</h1>
          </div>
          <ProductGrid products={products} />
        </div>
      </section>
    </>
  );
};

export default Page;
