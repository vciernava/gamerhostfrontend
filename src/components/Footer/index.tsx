"use client";
import Link from "next/link";
import PrimaryButton from "../PrimaryButton";
import toast from "react-hot-toast";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold">Gamerhost s.r.o</h3>
            <p className="text-sm leading-relaxed text-secondary-500">
              Oderská 171,
              <br /> 749 01 Vítkov,
              <br /> Česká republika
            </p>
            <Link
              href="mailto:support@gamerhost.pro"
              className="text-sm leading-relaxed"
            >
              support@gamerhost.pro
            </Link>
          </div>
          <div className="col-span-1">
            <h3 className="text-2xl font-bold">Naše produkty</h3>
            <ul className="text-sm leading-relaxed text-secondary-500">
              <li>
                <Link href="/vps">Virtuální servery</Link>
              </li>
              <li>
                <Link href="/ds">Dedikované servery</Link>
              </li>
              <li>
                <Link href="/minecraft">Minecraft servery</Link>
              </li>
              <li>
                <Link href="/competition">Porovnání s konkurencí</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-2xl font-bold">Spojení</h3>
            <ul className="text-sm leading-relaxed text-secondary-500">
              <li>
                <Link href="https://discord.gg/8KZ6q6q">Discord</Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/gamerhostcz">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/gamerhostcz">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/gamerhostcz">Twitter</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 xl:col-span-2">
            <h3 className="text-2xl font-bold">Přihlaš se k novinkám</h3>
            <p className="text-sm leading-relaxed text-secondary-500">
              Chceš dostávat informace o novinkách a akcích? Přihlaš se k odběru
              novinek.
            </p>
            <div className="mt-4 flex flex-row flex-wrap gap-3">
              <input
                type="email"
                className="w-2/4 rounded-md border border-gray-300 px-3 py-2 transition-colors hover:border-primary-700 focus:border-primary-700 focus:outline-none"
                placeholder="E-mail"
              />
              <PrimaryButton
                onClick={() => toast.error("Tato funkce ještě nefunguje!")}
              >
                Přihlásit se
              </PrimaryButton>
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-5 border-t border-gray-200 pt-6">
          <div className="col-span-2">
            <p className="text-sm leading-relaxed text-secondary-500">
              © 2020 Gamerhost s.r.o. Všechna práva vyhrazena.
            </p>
          </div>
          <div className="col-span-3">
            <ul className="flex flex-row flex-wrap justify-end gap-3 text-sm leading-relaxed text-secondary-500">
              <li>
                <Link href="/terms">Obchodní podmínky</Link>
              </li>
              <li>
                <Link href="/privacy">Ochrana osobních údajů</Link>
              </li>
              <li>
                <Link href="/cookies">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
