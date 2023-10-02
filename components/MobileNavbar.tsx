"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetClose,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/constants";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

const MobileNavbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Image
            src={
              localStorage.theme === "dark"
                ? "/web-icons/mobile-menu-dark.svg"
                : "/web-icons/mobile-menu.svg"
            }
            alt="menu"
            height={24}
            width={24}
          />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-10">
        <SheetHeader>
          <SheetClose asChild>
            <Link
              href="/"
              className="relative mb-5 h-10 w-10 rounded-lg hover:scale-110"
            >
              <Image src="/logo.svg" alt="logo" fill />
            </Link>
          </SheetClose>
        </SheetHeader>
        <Separator />
        <div className="mt-10 flex flex-col items-center gap-5">
          {routes.map((route) => (
            <SheetClose key={route.label} asChild>
              <Link
                href={route.href}
                className={cn(
                  "flex w-full cursor-pointer justify-center rounded-lg p-3 text-md font-medium transition hover:bg-primary-blue-300 hover:text-white",
                  pathname === route.href
                    ? "text-white bg-primary-blue-300"
                    : "text-primary-black-400 dark:text-primary-white-800",
                )}
              >
                {route.label}
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
