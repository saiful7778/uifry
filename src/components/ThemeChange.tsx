"use client";
import DropdownMenu from "./ui/dropdown-menu";
import Button from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Tooltip from "./ui/tooltip";

export default function ThemeChange() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenu.trigger asChild>
        <Tooltip.provider>
          <Tooltip>
            <Tooltip.trigger asChild>
              <Button size="icon">
                <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </Tooltip.trigger>
            <Tooltip.content>
              <p>Change theme</p>
            </Tooltip.content>
          </Tooltip>
        </Tooltip.provider>
      </DropdownMenu.trigger>
      <DropdownMenu.content align="end">
        <DropdownMenu.item onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenu.item>
        <DropdownMenu.item onClick={() => setTheme("light")}>
          Light
        </DropdownMenu.item>
        <DropdownMenu.item onClick={() => setTheme("system")}>
          System
        </DropdownMenu.item>
      </DropdownMenu.content>
    </DropdownMenu>
  );
}
