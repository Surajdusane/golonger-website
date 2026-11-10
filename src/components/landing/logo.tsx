import Image from "next/image";
import Link from "next/link";

import logo from "@/../public/logo.webp";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <Image
        src={logo}
        alt="GoLonger logo"
        priority
        className="h-8 w-8 object-cover"
      />
      <span className="text-xl font-extrabold tracking-wide">GOLONGER</span>
    </Link>
  );
}
