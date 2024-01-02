"use client";
import { productsVPSPerformance, productsVPSStandard } from "@/Data/VPS";
import { productsMCPerformance, productsMCStandard } from "@/Data/Minecaft";
import MainHeader from "@/components/MainHeader";
import ProductSlider from "@/components/ProductSlider";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BenefitsList } from "@/Data/Benefits";

export default function Home() {
  useEffect(() => {
    const categoryItems = document.querySelectorAll(".category__item");
    categoryItems.forEach((item) => {
      (item as HTMLElement).style.setProperty("--rotation", `0deg`);
    });
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const item = e.currentTarget;
    const itemRect = item.getBoundingClientRect();

    const itemCenterX = itemRect.left + itemRect.width / 2;
    const itemCenterY = itemRect.top + itemRect.height / 2;

    const angle = Math.atan2(e.clientY - itemCenterY, e.clientX - itemCenterX);

    const rotation = angle + Math.PI / 2;

    item.style.setProperty("--rotation", `${rotation}rad`);
  };

  const [MCproducts, setMCProducts] = useState<Products>(productsMCStandard);
  const [VPSproducts, setVPSProducts] = useState<Products>(productsVPSStandard);
  const [active, setActive] = useState<"standard" | "performance">("standard");

  useEffect(() => {
    if (active === "standard") {
      setVPSProducts(productsVPSStandard);
      setMCProducts(productsMCStandard);
    } else {
      setVPSProducts(productsVPSPerformance);
      setMCProducts(productsMCPerformance);
    }
  }, [active]);

  return (
    <>
      <MainHeader />
      <section id="benefits">
        <div className="container border-b border-t border-gray-100 py-10">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {BenefitsList.map((item) => (
              <div
                className="flex cursor-pointer flex-row flex-nowrap items-center gap-5 rounded-md bg-gray-50 p-4 transition-transform hover:scale-110"
                key={item.title}
              >
                <img src={item.icon} alt={item.title} className="h-20 w-20" />
                <div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-sm text-secondary-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="products">
        <div className="container">
          <div className="grid grid-cols-3 grid-rows-2 gap-5">
            <Link
              className="category__item category-servers h-[200px] bg-gray-200"
              href="/vps"
              onMouseMove={handleMouseEnter}
            >
              <h1 className="relative top-1/2 z-[2] -translate-y-1/2 text-5xl font-bold">
                <small className="block text-2xl font-bold">
                  Virtuální servery
                </small>
                PERFORMANCE
              </h1>
            </Link>
            <Link
              className="category__item category-servers h-[200px] bg-gray-200"
              href="/vps"
              onMouseMove={handleMouseEnter}
            >
              <h1 className="relative top-1/2 z-[2] -translate-y-1/2 text-5xl font-bold">
                <small className="block text-2xl font-bold">
                  Virtuální servery
                </small>
                STANDARD
              </h1>
            </Link>
            <Link
              className="category__item category-servers col-span-2 row-start-2 h-[200px] bg-gray-200"
              href="/ds"
              onMouseMove={handleMouseEnter}
            >
              <h1 className="relative top-1/2 z-[2] -translate-y-1/2 text-6xl font-bold">
                Dedikované servery
              </h1>
            </Link>
            <Link
              className="category__item category-minecraft row-span-2 bg-gray-200"
              href="/minecraft"
              onMouseMove={handleMouseEnter}
            >
              <h1 className="relative top-1/2 z-[2] -translate-y-1/2 text-7xl font-bold">
                Minecraft servery
              </h1>
            </Link>
          </div>
        </div>
      </section>
      <section id="mc-products">
        <div className="container">
          <div className="section__title mb-4 flex flex-row flex-wrap items-center justify-between">
            <h1 className="text-3xl font-bold">
              Nabídka naších Minecraft serverů
            </h1>
            <div className="flex gap-4">
              <button
                className={`${
                  active === "standard"
                    ? "bg-primary-700 text-white"
                    : "bg-white text-primary-700 hover:bg-primary-50"
                } rounded-md px-4 py-2 transition-colors`}
                onClick={() => setActive("standard")}
              >
                Standard
              </button>
              <button
                className={`${
                  active === "performance"
                    ? "bg-primary-700 text-white"
                    : "bg-white text-primary-700 hover:bg-primary-50"
                } rounded-md px-4 py-2 transition-colors`}
                onClick={() => setActive("performance")}
              >
                Performance
              </button>
            </div>
          </div>
          <ProductSlider products={MCproducts} />
        </div>
      </section>
      <section id="why-us">
        <div className="mx-auto max-w-screen-2xl rounded-md bg-primary-700">
          <div className="container max-w-6xl px-10 py-10 text-white">
            <h1 className="mb-4 text-center text-4xl font-bold">
              Proč si vybrat právě nás?
            </h1>
            <p>
              Od roku 2018 jsme váš spolehlivý partner pro herní a VPS servery s
              důrazem na kvalitu a přátelský přístup. Nabízíme servery v České
              republice, denně přidáváme novinky a vylepšení. Naše stroje jsou
              spojeny s páteřní sítí Peering.cz, zajišťující kvalitu a nízkou
              odezvu. Jsme tu s úsměvem, abychom splnili vaše požadavky a
              zajistili, že si plně užijete herní a online zážitky.
            </p>
          </div>
        </div>
      </section>
      <section id="vps-products">
        <div className="container">
          <div className="section__title mb-4 flex flex-row flex-wrap items-center justify-between">
            <h1 className="text-3xl font-bold">
              Nabídka naších Virtuálních serverů
            </h1>
            <div className="flex gap-4">
              <button
                className={`${
                  active === "standard"
                    ? "bg-primary-700 text-white"
                    : "bg-white text-primary-700 hover:bg-primary-50"
                } rounded-md px-4 py-2 transition-colors`}
                onClick={() => setActive("standard")}
              >
                Standard
              </button>
              <button
                className={`${
                  active === "performance"
                    ? "bg-primary-700 text-white"
                    : "bg-white text-primary-700 hover:bg-primary-50"
                } rounded-md px-4 py-2 transition-colors`}
                onClick={() => setActive("performance")}
              >
                Performance
              </button>
            </div>
          </div>
          <ProductSlider products={VPSproducts} />
        </div>
      </section>
    </>
  );
}
