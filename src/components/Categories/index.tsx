"use client";
import Link from "next/link";
import { useEffect } from "react";

const Categories = () => {
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

  return (
    <section>
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
              BUDGET
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
  );
};

export default Categories;
