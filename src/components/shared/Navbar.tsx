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
import Tooltip from "../ui/tooltip";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {
  const [menu, setMenu] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous! && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const renderNavLinks = jsonData.navbar.navlinks.map((nav, idx) => (
    <li key={"navlink-" + idx}>
      <NavLink path={nav.path}>{nav.navName}</NavLink>
    </li>
  ));

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: "-100%", x: "-50%" },
          visible: { opacity: 1, y: 0, x: "-50%" },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        initial="hidden"
        animate={hidden ? "hidden" : "visible"}
        className="bg-background/70 fixed left-1/2 top-0 z-[110] w-full p-2 shadow backdrop-blur-md"
      >
        <nav className="container flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-10">
            <SiteLogo />
            <ul className="flex items-center gap-6 max-md:hidden">
              {renderNavLinks}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Tooltip.provider>
              <Tooltip>
                <Tooltip.trigger asChild>
                  <Button className="max-md:hidden" asChild>
                    <Link href={jsonData.navbar.ctaButton.link}>
                      {jsonData.navbar.ctaButton.text}
                    </Link>
                  </Button>
                </Tooltip.trigger>
                <Tooltip.content>
                  <p>Click to download</p>
                </Tooltip.content>
              </Tooltip>
            </Tooltip.provider>

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
      </motion.div>
      <div
        className={cn(
          "bg-background/20 fixed top-0 z-[110] flex h-screen w-full max-w-xs flex-col items-center gap-10 overflow-auto p-4 shadow backdrop-blur-md duration-300 md:hidden",
          menu ? "right-0" : "-right-full",
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
        "text-xl font-medium hover:text-primary",
        pathName === path && "text-primary",
      )}
      href={path}
    >
      {children}
    </Link>
  );
}
