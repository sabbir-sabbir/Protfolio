import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import StarCanvas from "@/components/main/Starcanvas";
import NavBar from "@/components/main/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Protfolio..",
  description: "Personal prptfolio created by Next js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarCanvas/>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
