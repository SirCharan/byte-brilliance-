import { contentConfig } from "@/config/site";
import Image from "next/image";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <section id="portfolio" className="w-full container">
      <div className="flex items-center  justify-center text-black py-8  bg-white">
        <h2 className="font-judson  text-center lg:text-6xl text-4xl ">
          PORTFOLIO
        </h2>
      </div>

      <div className="h-screen flex justify-start max-md:overflow-x-auto max-md:flex-nowrap ">
        {contentConfig.portfolios.map((portfolio, i) => (
          <div key={i} className="h-full max-md:flex-shrink-0 md:flex-1 group  relative">
            <Image
              src={portfolio.imgUrl}
              height={740}
              width={300}
              className="object-cover h-full w-full"
              alt={"portfolio"}
            />
            <div className="absolute group-hover:top-3/4  bg-black-deep  ease-in duration-300 inset-0 ">
              <div className="h-full flex  items-end  w-full justify-center p-10">
                <h3 className="text-white text-center text-3xl group-hover:pb-10 ease-in duration-200">
                  {portfolio.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
