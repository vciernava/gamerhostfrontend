"use client";
import { ReactNode, useEffect } from "react";
import "swiper/css";
import { IconFlame } from "@tabler/icons-react";
import PrimaryButton from "../PrimaryButton";
import Image from "next/image";

const ProductGridWrapper = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <>
      <div
        className={`grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ${className}`}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

const ProductGrid = ({ products }: { products: Products }) => {
  useEffect(() => {
    const categoryItems = document.querySelectorAll(".product__item");
    categoryItems.forEach((item) => {
      (item as HTMLElement).style.setProperty("--rotation", `0deg`);
    });
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const item = e.currentTarget;
    const itemRect = item.getBoundingClientRect();

    const itemCenterX = itemRect.left + itemRect.width / 2;
    const itemCenterY = itemRect.top + itemRect.height / 2;

    const angle = Math.atan2(e.clientY - itemCenterY, e.clientX - itemCenterX);

    const rotation = angle + Math.PI / 2;

    item.style.setProperty("--rotation", `${rotation}rad`);
  };
  return (
    <ProductGridWrapper>
      {products.map((product, index) => (
        <div
          className={`product__item relative rounded-md bg-gray-200 px-8 py-6 ${
            product.featured ? "featured" : ""
          }`}
          key={index}
          onMouseMove={handleMouseEnter}
        >
          <div className="product__header relative z-[2] flex items-center gap-4">
            {product.featured && (
              <div className="absolute -right-7 -top-5 rounded-md bg-alternative-600 p-1 text-white">
                <IconFlame className="h-6 w-6" />
              </div>
            )}
            <div className="product__image">
              <Image
                src={product.image}
                alt={product.title}
                height={80}
                width={80}
              />
            </div>
            <div className="product__title text-2xl font-bold">
              <h3>{product.title}</h3>
              <small
                className={`${
                  product.featured ? "text-alternative-600" : "text-primary-700"
                }`}
              >
                {
                  product.features.find((feature) => feature.title === "RAM")
                    ?.value
                }{" "}
                <span className="text-sm text-secondary-700">
                  {
                    product.features.find((feature) => feature.title === "RAM")
                      ?.title
                  }
                </span>
              </small>
            </div>
          </div>
          <div className="product__features relative z-[2] py-6">
            <ul className="flex flex-col gap-2">
              {product.features.map((feature, index) => {
                return feature.title === "RAM" ? null : (
                  <li key={index} className="flex gap-2">
                    {feature.icon && (
                      <feature.icon
                        className={`h-5 w-5 ${
                          product.featured
                            ? "text-alternative-600"
                            : "text-primary-700"
                        }`}
                      />
                    )}
                    <span>
                      {feature.title} — {feature.value}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className={`product__footer relative z-[2] flex flex-col items-center gap-4 rounded-md p-4 ${
              product.featured ? "bg-alternative-900" : "bg-primary-900"
            }`}
          >
            <div className="product__price text-xl font-bold text-white">
              <h4>{product.price} Kč /měsíc</h4>
            </div>
            <PrimaryButton className={`product__button`}>
              Objednat
            </PrimaryButton>
          </div>
        </div>
      ))}
    </ProductGridWrapper>
  );
};

export default ProductGrid;
