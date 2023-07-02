import { ServiceCard } from "@/components/ui";
import { contentConfig } from "@/config/site";
import Image from "next/image";

type Props = {};

const Services = (props: Props) => {
  return (
    <section id="services" className="min-h-screen">
      <h2 className="font-mightyShadow text-center lg:text-7xl text-4xl lg:pb-28 pb-7">Services</h2>
      <div className="lg:relative h-full w-full">
        <Image
          src={"/v1688293745/wallpaper/mushrooms.png"}
          className="object-cover lg:block hidden w-screen "
          alt="Mushroom"
          aria-hidden
          height={1124}
          width={1440}
        />

        <div className="lg:absolute lg:inset-0  container">
          <div className="grid grid-flow-col w-full gap-9 justify-items-center place-items-center h-full lg:grid-rows-2 grid-rows-1 overflow-x-auto ">
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
