"use client";
import { useEffect, useState } from "react";
import ProductSlider from "../ProductSlider";
import {
  IconCloud,
  IconCloudBolt,
  IconCloudComputing,
  IconCloudDataConnection,
  IconCpu,
} from "@tabler/icons-react";

const productsStandard: Products = [
  {
    title: "Starter",
    price: 199,
    features: [
      {
        title: "RAM",
        value: "4GB",
      },
      {
        icon: IconCloudComputing,
        title: "CPU",
        value: "Intel Xeon",
      },
      {
        icon: IconCpu,
        title: "vCPU",
        value: "1x",
      },
      {
        icon: IconCloudBolt,
        title: "Boost",
        value: "3.2GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "30GB",
      },
      {
        icon: IconCloudDataConnection,
        title: "Provoz",
        value: "až 1.8Tbps",
      },
    ],
    image: "../icons/VPS.svg",
    featured: false,
  },
  {
    title: "Standard",
    price: 299,
    features: [
      {
        title: "RAM",
        value: "8GB",
      },
      {
        icon: IconCloudComputing,
        title: "CPU",
        value: "Intel Xeon",
      },
      {
        icon: IconCpu,
        title: "vCPU",
        value: "2x",
      },
      {
        icon: IconCloudBolt,
        title: "Boost",
        value: "3.2GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "60GB",
      },
      {
        icon: IconCloudDataConnection,
        title: "Provoz",
        value: "až 1.8Tbps",
      },
    ],
    image: "../icons/VPS.svg",
    featured: false,
  },
  {
    title: "Premium",
    price: 399,
    features: [
      {
        title: "RAM",
        value: "16GB",
      },
      {
        icon: IconCloudComputing,
        title: "CPU",
        value: "Intel Xeon",
      },
      {
        icon: IconCpu,
        title: "vCPU",
        value: "4x",
      },
      {
        icon: IconCloudBolt,
        title: "Boost",
        value: "3.2GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "120GB",
      },
      {
        icon: IconCloudDataConnection,
        title: "Provoz",
        value: "až 1.8Tbps",
      },
    ],
    image: "../icons/VPS Featured.svg",
    featured: true,
  },
  {
    title: "Extreme",
    price: 499,
    features: [
      {
        title: "RAM",
        value: "32GB",
      },
      {
        icon: IconCloudComputing,
        title: "CPU",
        value: "Intel Xeon",
      },
      {
        icon: IconCpu,
        title: "vCPU",
        value: "8x",
      },
      {
        icon: IconCloudBolt,
        title: "Boost",
        value: "3.2GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "240GB",
      },
      {
        icon: IconCloudDataConnection,
        title: "Provoz",
        value: "až 1.8Tbps",
      },
    ],
    image: "../icons/VPS.svg",
    featured: false,
  },
  {
    title: "Professional",
    price: 699,
    features: [
      {
        title: "RAM",
        value: "64GB",
      },
      {
        icon: IconCloudComputing,
        title: "CPU",
        value: "Intel Xeon",
      },
      {
        icon: IconCpu,
        title: "vCPU",
        value: "16x",
      },
      {
        icon: IconCloudBolt,
        title: "Boost",
        value: "3.2GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "480GB",
      },
      {
        icon: IconCloudDataConnection,
        title: "Provoz",
        value: "až 1.8Tbps",
      },
    ],
    image: "../icons/VPS.svg",
    featured: false,
  },
  {
    title: "Enterprise",
    price: 899,
    features: [
      {
        title: "RAM",
        value: "128GB",
      },
      {
        icon: IconCloudComputing,
        title: "CPU",
        value: "Intel Xeon",
      },
      {
        icon: IconCpu,
        title: "vCPU",
        value: "32x",
      },
      {
        icon: IconCloudBolt,
        title: "Boost",
        value: "3.2GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "960GB",
      },
      {
        icon: IconCloudDataConnection,
        title: "Provoz",
        value: "až 1.8Tbps",
      },
    ],
    image: "../icons/VPS.svg",
    featured: false,
  },
];

const productsPerformance: Products = [
  {
    title: "Starter",
    price: 309,
    features: [
      {
        title: "RAM",
        value: "4GB",
      },
      {
        icon: IconCloudComputing,
        title: "CPU",
        value: "AMD Ryzen 9 5900X",
      },
      {
        icon: IconCpu,
        title: "vCPU",
        value: "1x",
      },
      {
        icon: IconCloudBolt,
        title: "Boost",
        value: "4.8GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "30GB",
      },
      {
        icon: IconCloudDataConnection,
        title: "Provoz",
        value: "až 1.8Tbps",
      },
    ],
    image: "../icons/VPS.svg",
    featured: false,
  },
  {
    title: "Standard",
    price: 409,
    features: [
      {
        title: "RAM",
        value: "8GB",
      },
      {
        icon: IconCloudComputing,
        title: "CPU",
        value: "AMD Ryzen 9 5900X",
      },
      {
        icon: IconCpu,
        title: "vCPU",
        value: "2x",
      },
      {
        icon: IconCloudBolt,
        title: "Boost",
        value: "4.8GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "60GB",
      },
      {
        icon: IconCloudDataConnection,
        title: "Provoz",
        value: "až 1.8Tbps",
      },
    ],
    image: "../icons/VPS.svg",
    featured: false,
  },
  {
    title: "Premium",
    price: 509,
    features: [
      {
        title: "RAM",
        value: "16GB",
      },
      {
        icon: IconCloudComputing,
        title: "CPU",
        value: "AMD Ryzen 9 5900X",
      },
      {
        icon: IconCpu,
        title: "vCPU",
        value: "4x",
      },
      {
        icon: IconCloudBolt,
        title: "Boost",
        value: "4.8GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "120GB",
      },
      {
        icon: IconCloudDataConnection,
        title: "Provoz",
        value: "až 1.8Tbps",
      },
    ],
    image: "../icons/VPS.svg",
    featured: false,
  },
  {
    title: "Extreme",
    price: 609,
    features: [
      {
        title: "RAM",
        value: "32GB",
      },
      {
        icon: IconCloudComputing,
        title: "CPU",
        value: "AMD Ryzen 9 5900X",
      },
      {
        icon: IconCpu,
        title: "vCPU",
        value: "8x",
      },
      {
        icon: IconCloudBolt,
        title: "Boost",
        value: "4.8GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "240GB",
      },
      {
        icon: IconCloudDataConnection,
        title: "Provoz",
        value: "až 1.8Tbps",
      },
    ],
    image: "../icons/VPS Featured.svg",
    featured: true,
  },
  {
    title: "Professional",
    price: 809,
    features: [
      {
        title: "RAM",
        value: "64GB",
      },
      {
        icon: IconCloudComputing,
        title: "CPU",
        value: "AMD Ryzen 9 5900X",
      },
      {
        icon: IconCpu,
        title: "vCPU",
        value: "16x",
      },
      {
        icon: IconCloudBolt,
        title: "Boost",
        value: "4.8GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "480GB",
      },
      {
        icon: IconCloudDataConnection,
        title: "Provoz",
        value: "až 1.8Tbps",
      },
    ],
    image: "../icons/VPS.svg",
    featured: false,
  },
  {
    title: "Enterprise",
    price: 1009,
    features: [
      {
        title: "RAM",
        value: "128GB",
      },
      {
        icon: IconCloudComputing,
        title: "CPU",
        value: "AMD Ryzen 9 5900X",
      },
      {
        icon: IconCpu,
        title: "vCPU",
        value: "32x",
      },
      {
        icon: IconCloudBolt,
        title: "Boost",
        value: "4.8GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "960GB",
      },
      {
        icon: IconCloudDataConnection,
        title: "Provoz",
        value: "až 1.8Tbps",
      },
    ],
    image: "../icons/VPS.svg",
    featured: false,
  },
];

const VPSProducts = () => {
  const [products, setProducts] = useState<Products>(productsStandard);
  const [active, setActive] = useState<"standard" | "performance">("standard");

  useEffect(() => {
    if (active === "standard") {
      setProducts(productsStandard);
    } else {
      setProducts(productsPerformance);
    }
  }, [active]);

  return (
    <section>
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
        <ProductSlider products={products} />
      </div>
    </section>
  );
};

export default VPSProducts;
