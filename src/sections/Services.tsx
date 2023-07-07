import { ServiceCard } from "@/components/ui";
import { contentConfig } from "@/config/site";
import Image from "next/image";

type Props = {};

const Services = (props: Props) => {
  return (
    <section id="services" className="flex flex-col gap-10 py-10  container">

      <h2 className="font-mightyShadow text-center lg:text-7xl  text-4xl ">Services</h2>
      <div className="lg:relative h-full w-full">
        <Image
          src={"/v1688293745/wallpaper/mushrooms.png"}
          className="object-cover lg:block hidden w-screen "
          alt="Mushroom"
          aria-hidden
          height={1124}
          width={1440}
        />

        <div className="lg:absolute lg:inset-0    md:container">
          <div className="lg:grid lg:grid-flow-col w-full overflow-x-auto lg:gap-9 gap-5 gap-y-0 lg:justify-items-center lg:place-items-center h-full lg:grid-rows-2 flex flex-nowrap ">
             {
               contentConfig.services.map((service, index) => (
                <ServiceCard service={service} key={index}/>
               ))
             }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
