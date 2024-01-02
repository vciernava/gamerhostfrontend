"use client";
import { ReactNode, useEffect, useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { NavigationOptions } from "swiper/types";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconFlame,
} from "@tabler/icons-react";
import PrimaryButton from "../PrimaryButton";

const ProductSliderWrapper = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={80}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          const navigation = swiper.params.navigation as NavigationOptions;

          navigation.prevEl = navigationPrevRef.current;
          navigation.nextEl = navigationNextRef.current;
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        loop
        draggable
        className={className}
        {...props}
      >
        {children}
      </Swiper>
      <div className="bottom:0 flex w-full flex-row flex-nowrap items-center justify-between px-32 2xl:absolute 2xl:left-1/2 2xl:top-1/2 2xl:-translate-x-1/2 2xl:-translate-y-1/2">
        <div
          ref={navigationPrevRef}
          className="cursor-pointer rounded-md p-2 text-primary-700 transition-colors hover:bg-primary-50"
        >
          <IconArrowNarrowLeft className="h-8 w-8" />
        </div>

        <div
          ref={navigationNextRef}
          className="cursor-pointer rounded-md p-2 text-primary-700 transition-colors hover:bg-primary-50"
        >
          <IconArrowNarrowRight className="h-8 w-8" />
        </div>
      </div>
    </>
  );
};

const ProductSlider = ({ products }: { products: Products }) => {
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
    <ProductSliderWrapper>
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <div
            className={`product__item rounded-md bg-gray-200 px-8 py-6 ${
              product.featured ? "featured" : ""
            }`}
            onMouseMove={handleMouseEnter}
          >
            <div className="product__header relative z-[2] flex items-center gap-4">
              {product.featured && (
                <div className="absolute -right-7 -top-5 rounded-md bg-blue-600 p-1 text-white">
                  <IconFlame className="h-6 w-6" />
                </div>
              )}
              <div className="product__image h-20 w-20">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product__title text-2xl font-bold">
                <h3>{product.title}</h3>
                <small
                  className={`${
                    product.featured ? "text-blue-600" : "text-primary-700"
                  }`}
                >
                  {
                    product.features.find((feature) => feature.title === "RAM")
                      ?.value
                  }{" "}
                  <span className="text-sm text-secondary-700">
                    {
                      product.features.find(
                        (feature) => feature.title === "RAM",
                      )?.title
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
                              ? "text-blue-600"
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
                product.featured ? "bg-blue-900" : "bg-primary-900"
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
        </SwiperSlide>
      ))}
    </ProductSliderWrapper>
  );
};

export default ProductSlider;
