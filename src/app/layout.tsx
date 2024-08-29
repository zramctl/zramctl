import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Socials from "@/components/socials";
import { Buttons } from "@/components/buttons";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "zram.sh",
  description: "my personal website",
  icons: "/zr.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <div>
          <Navigation />
          <Socials />
          <Buttons />
        </div>
        {children}
      </body>
    </html>
  );
}
