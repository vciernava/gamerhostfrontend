import { IconArrowNarrowLeft } from "@tabler/icons-react";
import Link from "next/dist/client/link";

export default function NotFound() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <img src="/icons/Nenalezeno.svg" className="h-[400px] w-[400px]" />
      <h1 className="text-8xl font-bold leading-relaxed text-primary-700">
        Oops!
      </h1>
      <p className="text-4xl font-bold leading-relaxed">
        Odkaz na tuto stránku byl ztracen v čase...
      </p>
      <Link
        href="/"
        className="flex flex-row flex-nowrap items-center gap-2 text-sm text-secondary-500 after:hidden"
      >
        <IconArrowNarrowLeft className="h-4 w-4" /> Vrátiť sa na úvodnú stránku
      </Link>
    </div>
  );
}
