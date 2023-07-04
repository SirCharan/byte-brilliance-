import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="md:h-32 h-20 fixed   top-0 left-0 right-0 z-50 bg-black">
      <div className="py-7 flex  container h-full items-center text-xl justify-between  ">
        <div className="max-sm:w-32 max-sm:h-12 ">
          <Image
          className="object-cover h-full w-full"
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
        <button className="lg:px-6 lg:py-2  text-xl font-bold  hover:bg-black hover:border-2 box-border md:hover:border-primary   md:bg-primary md:rounded-3xl shadow-md">
          <Link href="#contact">
            <span className="md:block hidden ">Contact Us</span>
            <span className="md:hidden block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide text-primary lucide-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
