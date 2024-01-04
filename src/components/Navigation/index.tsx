"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PrimaryButton from "../PrimaryButton";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";
import { ReactNode, useState } from "react";
import { NavLinks } from "@/Data/Navigation";
import Image from "next/image";

const Navigation = () => {
  const pathname = usePathname();

  if (typeof window !== "undefined") {
    let prevScrollpos = window.pageYOffset;

    window.onscroll = () => {
      if (window.innerWidth < 1280) return;

      let currentScrollPos = window.pageYOffset;
      const nav = document.querySelector("nav");
      if (window.pageYOffset > 0) {
        nav?.classList.add("scrolled");

        if (prevScrollpos > currentScrollPos) {
          nav?.style.setProperty("transform", "translateY(0)");
        } else {
          nav?.style.setProperty("transform", "translateY(-100%)");
        }
      } else {
        nav?.classList.remove("scrolled");
      }

      prevScrollpos = currentScrollPos;
    };
  }

  const toggleMenu = () => {
    const menu = document.querySelector(".mobile-menu");
    menu?.classList.toggle("hidden");
  };

  return (
    <nav className="fixed top-0 z-40 w-full bg-white transition-all xl:bg-transparent">
      <div className="container flex flex-row items-center justify-between py-4">
        <Link href="/">
          <Image
            src="/logo-classic-new.svg"
            alt="logo"
            className="transition-opacity hover:opacity-80"
            height={60}
            width={180}
          />
        </Link>
        <ul className="nav-links hidden flex-row items-center gap-10 xl:flex">
          {NavLinks.map((link, index) => (
            <Link
              href={link.url}
              className={`link ${pathname === link.url ? "active" : ""}`}
              key={index}
            >
              {link.title}
            </Link>
          ))}
          <PrimaryButton className="action-button py-3">
            Přihlásit se
          </PrimaryButton>
        </ul>
        <div className="flex flex-row items-center gap-4 xl:hidden">
          <button className="hamburger" onClick={toggleMenu}>
            <IconMenu2 size={24} />
          </button>
        </div>
        <div className="mobile-menu fixed left-0 top-0 z-50 hidden h-full w-full bg-white">
          <div className="container flex h-full flex-col items-center justify-center">
            <ul className="nav-links flex flex-col items-center justify-center gap-10">
              {NavLinks.map((link, index) => (
                <Link
                  href={link.url}
                  className={`link ${pathname === link.url ? "active" : ""}`}
                  key={index}
                >
                  {link.title}
                </Link>
              ))}
              <PrimaryButton className="action-button py-3">
                Přihlásit se
              </PrimaryButton>

              <button
                className="hamburger absolute left-1/2 top-6 -translate-x-1/2"
                onClick={toggleMenu}
              >
                <IconX size={24} />
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const DropdownLink = ({
  buttonTitle,
  DropdownContent,
}: {
  buttonTitle: string;
  DropdownContent: ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="relative">
      <button
        className="group flex items-center justify-center gap-2 text-base text-black"
        onClick={toggleMenu}
      >
        {buttonTitle}
        {open ? (
          <IconChevronDown className="h-4 w-4 rotate-180 transform text-primary-700 transition-all" />
        ) : (
          <IconChevronDown className="h-4 w-4 text-secondary-200 transition-all group-hover:text-primary-700" />
        )}
      </button>
      <div
        className={`absolute -bottom-10 right-0 rounded-md bg-white px-4 py-2 shadow-sm ${
          open ? "block" : "hidden"
        }`}
      >
        {DropdownContent}
      </div>
    </div>
  );
};

export default Navigation;
