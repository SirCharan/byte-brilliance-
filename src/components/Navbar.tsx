import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="h-32 sticky  top-0 left-0 right-0 z-50 bg-black">
      <div className="py-7 flex  container mx-auto items-center text-xl justify-between gap-36 ">
        <div>
          <Image
            src={siteConfig.logoWithText}
            height={72}
            width={193}
            alt="logo"
          />
        </div>
        <nav className="md:flex hidden  justify-center  gap-12 ">
          {siteConfig.navLinks.map((link, i) => (
            <Link key={i} href={link.href}>
              {link.title}
            </Link>
          ))}
        </nav>
        <button className="px-6 py-2 text-xl font-bold  hover:bg-black hover:border-2 box-border hover:border-primary   bg-primary rounded-3xl shadow-md">
            <Link href="#contact">Contact Us</Link>
          </button>
      </div>
    </header>
  );
};

export default Navbar;
