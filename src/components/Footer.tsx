import { contentConfig, siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, GithubIcon, LinkedInIcon, TwitterIcon } from "./ui/Icons";

type Props = {};

const Footer = (props: Props) => {
  const { aboutTheCompany, address, copyright, email, phone } =
    contentConfig.footer;
  return (
    <footer>
      <div className="flex md:flex-row flex-col max-md:gap-10 container md:justify-between md:items-center py-5">
        <div className="flex  flex-col">
          <Image
            src={siteConfig.logoWithText}
            height={200}
            width={200}
            alt="Logo"
          />
          <nav>
            {siteConfig.navLinks.map((link, i) => (
              <Link key={i} href={link.href}>
                {link.title +
                  (siteConfig.navLinks.length - 1 === i ? "" : " | ")}
              </Link>
            ))}
          </nav>
          <div>{copyright}</div>
        </div>
        <div className="flex flex-col">
          <p>{address}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h4 className="text-xl">About The Company</h4>
            <p>{aboutTheCompany}</p>
          </div>
          <div className="flex gap-2.5">
            {siteConfig.socialLinks.map((link, i) => {
              let icon: JSX.Element | null = null;
              switch (link.iconKey) {
                case "facebook":
                  icon = <FacebookIcon />;
                  break;
                case "twitter":
                  icon = <TwitterIcon />;
                  break;
                case "linkedin":
                  icon = <LinkedInIcon/>;
                  break;
                case "github":
                  icon = <GithubIcon />;
                  break;
                default:
                  icon = null;   
              }
              return (
                <Link
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center"
                >
                  {icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
