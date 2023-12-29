import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const font = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gamerhost BETA - Remastered design',
  description:
    'Toto je beta verze nového designu Gamerhostu. Vše je v testovacím provozu, takže se může stát, že narazíte na chybu. Pokud ano, dejte mi vědět na Discordu - rotzzik.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='cs'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
