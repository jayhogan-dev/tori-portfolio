"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import MobileNavbar from "./MobileNavbar";
import { routes } from "@/constants";
import { cn } from "@/lib/utils";

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [darkMode, setDarkMode] = useState("");
  const pathname = usePathname();

  return (
    <nav className="flex w-full max-w-[1580px] items-center justify-between px-6 py-4 md:px-10 lg:px-20">
      <Link href="/" className="relative h-10 w-10 rounded-lg hover:scale-110">
        <Image src="/logo.png" alt="logo" fill />
      </Link>
      <article className="hidden md:flex md:items-center md:justify-between md:gap-5">
        <ul className="flex items-center justify-between gap-8 text-small-regular">
          {routes.map((route) => (
            <li key={route.label}>
              <Link
                href={route.href}
                className={cn(
                  "cursor-pointer hover:text-primary-black-300",
                  pathname === route.href
                    ? "text-primary-blue-700 dark:text-primary-blue-300"
                    : "text-primary-white-500 dark:text-primary-white-800",
                )}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
        <Image src="/web-icons/line.svg" alt="divider" height={2} width={2} />
        <ThemeSwitcher setDarkMode={setDarkMode} />
      </article>
      <div className="flex md:hidden">
        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
