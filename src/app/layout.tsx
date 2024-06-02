import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import StateContextProvider from "@/context/StateContext";
import ThemeContextProvider from "@/context/ThemeContext";
import Footer from "@/components/shared/Footer";
import Toaster from "@/components/ui/toaster";

const clashDisplayFont = localFont({
  src: [
    {
      path: "../../public/fonts/clash-display/ClashDisplayLight.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/clash-display/ClashDisplayRegular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/clash-display/ClashDisplayMedium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/clash-display/ClashDisplaySemibold.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/clash-display/ClashDisplayBold.otf",
      weight: "700",
    },
  ],
  variable: "--font-clash-display",
});

export const metadata: Metadata = {
  title: "Uifry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clashDisplayFont.variable}>
        <ThemeContextProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StateContextProvider>
            {children}
            <Toaster />
          </StateContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
