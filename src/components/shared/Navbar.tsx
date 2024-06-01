"use client";
import Link from "next/link";
import SiteLogo from "../SiteLogo";
import jsonData from "@/lib/data.json";
import cn from "@/lib/utils/cn";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import Button from "../ui/button";
import { SquareMenu, SquareX } from "lucide-react";
import ThemeChange from "../ThemeChange";

export default function Navbar() {
  const [menu, setMenu] = useState<boolean>(false);

  const renderNavLinks = jsonData.navbar.navlinks.map((nav, idx) => (
    <li key={"navlink-" + idx}>
      <NavLink path={nav.path}>{nav.navName}</NavLink>
    </li>
  ));

  return (
    <>
      <nav className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-10">
          <SiteLogo />
          <ul className="flex items-center gap-6 max-md:hidden">
            {renderNavLinks}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Button className="max-md:hidden" asChild>
            <Link href={jsonData.navbar.ctaButton.link}>
              {jsonData.navbar.ctaButton.text}
            </Link>
          </Button>
          <ThemeChange />
          <Button
            onClick={() => setMenu((l) => !l)}
            className="md:hidden"
            size="icon"
          >
            <SquareMenu size={20} />
          </Button>
        </div>
      </nav>
      <div
        className={cn(
          "fixed top-0 z-[110] flex h-screen w-full max-w-xs flex-col items-center gap-10 bg-background/50 p-4 shadow backdrop-blur-sm duration-300",
          menu ? "right-0" : "-right-full"
        )}
      >
        <div className="absolute left-0 top-0 z-[111] m-4">
          <Button onClick={() => setMenu((l) => !l)} size="icon">
            <SquareX size={20} />
          </Button>
        </div>
        <SiteLogo />
        <ul className="space-y-4 text-center">{renderNavLinks}</ul>
        <Button asChild>
          <Link href={jsonData.navbar.ctaButton.link}>
            {jsonData.navbar.ctaButton.text}
          </Link>
        </Button>
      </div>
    </>
  );
}

interface NavLinkProps {
  children: ReactNode;
  path: string;
}

function NavLink({ children, path }: NavLinkProps) {
  const pathName = usePathname();

  return (
    <Link
      className={cn(
        "font-medium text-xl hover:text-primary",
        pathName === path && "text-primary"
      )}
      href={path}
    >
      {children}
    </Link>
  );
}
