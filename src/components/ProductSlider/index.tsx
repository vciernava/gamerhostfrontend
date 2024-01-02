'use client';
import { ReactNode, useEffect, useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { NavigationOptions } from 'swiper/types';
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconFlame,
} from '@tabler/icons-react';
import PrimaryButton from '../PrimaryButton';

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
      loop
      draggable
      className={className}
      {...props}
    >
      {children}
      <div className='swiper__navigation flex flex-nowrap justify-center items-center gap-16'>
        <IconArrowNarrowLeft
          ref={navigationPrevRef}
          className='h-12 w-12 text-secondary-500 hover:text-primary-700 transition-colors cursor-pointer'
        />
        <IconArrowNarrowRight
          ref={navigationNextRef}
          className='h-12 w-12 text-secondary-500 hover:text-primary-700 transition-colors cursor-pointer'
        />
      </div>
    </Swiper>
  );
};

const ProductSlider = ({ products }: { products: Products }) => {
  useEffect(() => {
    const categoryItems = document.querySelectorAll('.product__item');
    categoryItems.forEach((item) => {
      (item as HTMLElement).style.setProperty('--rotation', `0deg`);
    });
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const item = e.currentTarget;
    const itemRect = item.getBoundingClientRect();

    const itemCenterX = itemRect.left + itemRect.width / 2;
    const itemCenterY = itemRect.top + itemRect.height / 2;

    const angle = Math.atan2(e.clientY - itemCenterY, e.clientX - itemCenterX);

    const rotation = angle + Math.PI / 2;

    item.style.setProperty('--rotation', `${rotation}rad`);
  };
  return (
    <ProductSliderWrapper>
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <div
            className={`product__item py-6 px-8 bg-gray-200 rounded-md ${
              product.featured ? 'featured' : ''
            }`}
            onMouseMove={handleMouseEnter}
          >
            <div className='product__header relative flex items-center gap-4 z-[2]'>
              {product.featured && (
                <div className='absolute -top-5 -right-7 bg-blue-600 text-white rounded-md p-1'>
                  <IconFlame className='w-6 h-6' />
                </div>
              )}
              <div className='product__image h-20 w-20'>
                <img src={product.image} alt={product.title} />
              </div>
              <div className='product__title text-2xl font-bold'>
                <h3>{product.title}</h3>
                <small
                  className={`${
                    product.featured ? 'text-blue-600' : 'text-primary-700'
                  }`}
                >
                  {
                    product.features.find((feature) => feature.title === 'RAM')
                      ?.value
                  }{' '}
                  <span className='text-secondary-700 text-sm'>
                    {
                      product.features.find(
                        (feature) => feature.title === 'RAM'
                      )?.title
                    }
                  </span>
                </small>
              </div>
            </div>
            <div className='product__features relative py-6 z-[2]'>
              <ul className='flex flex-col gap-2'>
                {product.features.map((feature, index) => {
                  return feature.title === 'RAM' ? null : (
                    <li key={index} className='flex items-center gap-2'>
                      {feature.icon && (
                        <feature.icon
                          className={`h-5 w-5 ${
                            product.featured
                              ? 'text-blue-600'
                              : 'text-primary-700'
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
              className={`product__footer relative flex flex-col gap-4 items-center p-4 rounded-md z-[2] ${
                product.featured ? 'bg-blue-900' : 'bg-primary-900'
              }`}
            >
              <div className='product__price text-white text-xl font-bold'>
                <h4>{product.price} Kč /měsíc</h4>
              </div>
              <PrimaryButton
                className={`product__button ${
                  product.featured ? 'bg-blue-600 hover:bg-blue-500' : ''
                }`}
              >
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
