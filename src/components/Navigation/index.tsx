'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PrimaryButton from '../PrimaryButton';

// Sticky scroll-hide navigation bar
const Navigation = () => {
  const pathname = usePathname();

  // Add on scroll event
  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        document.querySelector('nav')?.classList.add('scrolled');
      } else {
        document.querySelector('nav')?.classList.remove('scrolled');
      }
    };
  }

  return (
    <nav className='fixed top-0 w-full z-40 transition-colors'>
      <div className='container py-4 flex flex-row items-center justify-between'>
        <Link href='/'>
          <img
            src='/logo-classic-new.svg'
            alt='logo'
            className='h-10 hover:opacity-80 transition-opacity'
          />
        </Link>
        <ul className='nav-links flex flex-row items-center gap-10'>
          <Link href='/' className={`link ${pathname === '/' ? 'active' : ''}`}>
            Domů
          </Link>
          <Link
            href='/minecraft'
            className={`link ${pathname === '/minecraft' ? 'active' : ''}`}
          >
            Minecraft
          </Link>
          <Link
            href='/vps'
            className={`link ${pathname === '/vps' ? 'active' : ''}`}
          >
            VPS
          </Link>
          <Link
            href='/ds'
            className={`link ${pathname === '/ds' ? 'active' : ''}`}
          >
            DS
          </Link>
          <Link
            href='/wiki'
            className={`link ${pathname === '/wiki' ? 'active' : ''}`}
          >
            Návody
          </Link>
          <Link
            href='/kontakt'
            className={`link ${pathname === '/kontakt' ? 'active' : ''}`}
          >
            Kontakt
          </Link>
          <PrimaryButton className='py-3'>Přihlásit se</PrimaryButton>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
