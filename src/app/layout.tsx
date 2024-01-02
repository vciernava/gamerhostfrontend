import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import "./globals.css";
import { Toaster } from "react-hot-toast";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamerhost BETA - Remastered design",
  description:
    "Toto je beta verze nového designu Gamerhostu. Vše je v testovacím provozu, takže se může stát, že narazíte na chybu. Pokud ano, dejte mi vědět na Discordu - rotzzik.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={font.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
