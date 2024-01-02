import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Link from "next/link";

const SocialsBar = () => {
  return (
    <div className="fixed right-10 top-1/2 z-10 -translate-y-1/2 rounded-full border border-secondary-100 bg-gray-50 p-2">
      <div className="flex flex-col gap-2">
        <Link
          href="https://www.facebook.com/gamerhost.pro"
          className="social-link"
        >
          <IconBrandFacebook />
        </Link>
        <Link
          href="https://www.instagram.com/gamerhostpro/"
          className="social-link"
        >
          <IconBrandInstagram />
        </Link>
        <Link href="https://twitter.com/gamerhostpro" className="social-link">
          <IconBrandTwitter />
        </Link>
        <Link href="https://discord.gamerhost.pro/" className="social-link">
          <IconBrandDiscord />
        </Link>
      </div>
    </div>
  );
};

export default SocialsBar;
