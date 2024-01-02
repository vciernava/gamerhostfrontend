"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PrimaryButton from "../PrimaryButton";
import { IconMenu2, IconX } from "@tabler/icons-react";

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
    <nav className="fixed top-0 z-40 w-full overflow-hidden bg-white transition-all xl:bg-transparent">
      <div className="container flex flex-row items-center justify-between py-4">
        <Link href="/">
          <img
            src="/logo-classic-new.svg"
            alt="logo"
            className="h-10 transition-opacity hover:opacity-80"
          />
        </Link>
        <ul className="nav-links hidden flex-row items-center gap-10 xl:flex">
          <Link href="/" className={`link ${pathname === "/" ? "active" : ""}`}>
            Domů
          </Link>
          <Link
            href="/minecraft"
            className={`link ${pathname === "/minecraft" ? "active" : ""}`}
          >
            Minecraft
          </Link>
          <Link
            href="/vps"
            className={`link ${pathname === "/vps" ? "active" : ""}`}
          >
            VPS
          </Link>
          <Link
            href="/ds"
            className={`link ${pathname === "/ds" ? "active" : ""}`}
          >
            DS
          </Link>
          <Link
            href="/wiki"
            className={`link ${pathname === "/wiki" ? "active" : ""}`}
          >
            Návody
          </Link>
          <Link
            href="/kontakt"
            className={`link ${pathname === "/kontakt" ? "active" : ""}`}
          >
            Kontakt
          </Link>
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
              <Link
                href="/"
                className={`link ${pathname === "/" ? "active" : ""}`}
              >
                Domů
              </Link>
              <Link
                href="/minecraft"
                className={`link ${pathname === "/minecraft" ? "active" : ""}`}
              >
                Minecraft
              </Link>
              <Link
                href="/vps"
                className={`link ${pathname === "/vps" ? "active" : ""}`}
              >
                VPS
              </Link>
              <Link
                href="/ds"
                className={`link ${pathname === "/ds" ? "active" : ""}`}
              >
                DS
              </Link>
              <Link
                href="/wiki"
                className={`link ${pathname === "/wiki" ? "active" : ""}`}
              >
                Návody
              </Link>
              <Link
                href="/kontakt"
                className={`link ${pathname === "/kontakt" ? "active" : ""}`}
              >
                Kontakt
              </Link>
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

export default Navigation;
