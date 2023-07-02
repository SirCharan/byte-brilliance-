import { siteConfig } from "@/config/site";
import "../styles/globals.css";
import { Hubballi } from "next/font/google";
import { Footer, Navbar } from "@/components";
import {twJoin} from 'tailwind-merge';
import { TailwindIndicator } from "@/components/ui/TailwindIndicator";
import localFont from 'next/font/local'
 
const hubballi = Hubballi({ weight: "400", subsets: ["latin"] });
const mightySahdowFont = localFont({
  src: './MightyShadow.ttf',
  display: 'swap',
  variable: '--font-mighty-shadow',
})

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twJoin(hubballi.className, "bg-black", mightySahdowFont.variable)}>
        <Navbar />
        {children}
        <Footer />
        <TailwindIndicator />
        </body>
    </html>
  );
}
