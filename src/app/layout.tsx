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
  authors: [
    {
      name: "Saiful Islam",
      url: "https://www.linkedin.com/in/saiful-islam-0471b924b",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Uifry",
    description: "This is Uifry app website",
    images:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/83330293/335883168-96cefa20-3135-4cad-a2e6-8ae3223dc030.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240611T083749Z&X-Amz-Expires=300&X-Amz-Signature=64ee51d55ab82779e436b77c7b305f5d9d2d25faa45a477462eb96e3d627fe44&X-Amz-SignedHeaders=host&actor_id=83330293&key_id=0&repo_id=808764902",
  },
  description: "This is Uifry app website",
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
