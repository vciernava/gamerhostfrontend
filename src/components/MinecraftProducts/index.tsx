"use client";
import { useEffect, useState } from "react";
import ProductSlider from "../ProductSlider";
import {
  IconCloud,
  IconCloudBolt,
  IconCloudComputing,
} from "@tabler/icons-react";

const productsStandard: Products = [
  {
    title: "Starter",
    price: 169,
    features: [
      {
        title: "RAM",
        value: "4GB",
      },
      {
        icon: IconCloudComputing,
        title: "CPU",
        value: "AMD Ryzen 5 3600",
      },
      {
        icon: IconCloudBolt,
        title: "Boost",
        value: "3.2GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "10GB",
      },
    ],
    image:
      "https://i.gyazo.com/thumb/1000/a4abc5fdb965d1b97db38453012efc73-png.png",
    featured: false,
  },
  {
    title: "Advanced",
    price: 299,
    features: [
      {
        title: "RAM",
        value: "8GB",
      },
      {
        icon: IconCloudComputing,
        title: "CPU",
        value: "AMD Ryzen 5 3600",
      },
      {
        icon: IconCloudBolt,
        title: "Boost",
        value: "3.2GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "20GB",
      },
    ],
    image:
      "https://i.gyazo.com/thumb/1000/a4abc5fdb965d1b97db38453012efc73-png.png",
    featured: true,
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
        value: "AMD Ryzen 5 3600",
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
    ],
    image:
      "https://i.gyazo.com/thumb/1000/a4abc5fdb965d1b97db38453012efc73-png.png",
    featured: false,
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
        value: "AMD Ryzen 5 3600",
      },
      {
        icon: IconCloudBolt,
        title: "Boost",
        value: "3.2GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "40GB",
      },
    ],
    image:
      "https://i.gyazo.com/thumb/1000/a4abc5fdb965d1b97db38453012efc73-png.png",
    featured: false,
  },
  {
    title: "Professional",
    price: 1000,
    features: [
      {
        title: "RAM",
        value: "64GB",
      },
      {
        icon: IconCloudComputing,
        title: "CPU",
        value: "AMD Ryzen 5 3600",
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
    ],
    image:
      "https://i.gyazo.com/thumb/1000/a4abc5fdb965d1b97db38453012efc73-png.png",
    featured: false,
  },
  {
    title: "Enterprise",
    price: 2000,
    features: [
      {
        title: "RAM",
        value: "128GB",
      },
      {
        icon: IconCloudComputing,
        title: "CPU",
        value: "AMD Ryzen 5 3600",
      },
      {
        icon: IconCloudBolt,
        title: "Boost",
        value: "3.2GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "80GB",
      },
    ],
    image:
      "https://i.gyazo.com/thumb/1000/a4abc5fdb965d1b97db38453012efc73-png.png",
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
        icon: IconCloudBolt,
        title: "Boost",
        value: "4.8GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "10GB",
      },
    ],
    image:
      "https://i.gyazo.com/thumb/1000/a4abc5fdb965d1b97db38453012efc73-png.png",
    featured: false,
  },
  {
    title: "Advanced",
    price: 499,
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
        icon: IconCloudBolt,
        title: "Boost",
        value: "4.8GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "20GB",
      },
    ],
    image:
      "https://i.gyazo.com/thumb/1000/a4abc5fdb965d1b97db38453012efc73-png.png",
    featured: true,
  },
  {
    title: "Premium",
    price: 699,
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
        icon: IconCloudBolt,
        title: "Boost",
        value: "4.8GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "30GB",
      },
    ],
    image:
      "https://i.gyazo.com/thumb/1000/a4abc5fdb965d1b97db38453012efc73-png.png",
    featured: false,
  },
  {
    title: "Extreme",
    price: 899,
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
        icon: IconCloudBolt,
        title: "Boost",
        value: "4.8GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "40GB",
      },
    ],
    image:
      "https://i.gyazo.com/thumb/1000/a4abc5fdb965d1b97db38453012efc73-png.png",
    featured: false,
  },
  {
    title: "Professional",
    price: 1500,
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
        icon: IconCloudBolt,
        title: "Boost",
        value: "4.8GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "60GB",
      },
    ],
    image:
      "https://i.gyazo.com/thumb/1000/a4abc5fdb965d1b97db38453012efc73-png.png",
    featured: false,
  },
  {
    title: "Enterprise",
    price: 3000,
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
        icon: IconCloudBolt,
        title: "Boost",
        value: "4.8GHz",
      },
      {
        icon: IconCloud,
        title: "SSD",
        value: "80GB",
      },
    ],
    image:
      "https://i.gyazo.com/thumb/1000/a4abc5fdb965d1b97db38453012efc73-png.png",
    featured: false,
  },
];

const MinecraftProducts = () => {
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
        <ProductSlider products={products} />
      </div>
    </section>
  );
};

export default MinecraftProducts;
