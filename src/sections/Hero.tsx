import { cn } from "@/lib/utils";

import { Corousal } from "@/components";
import { contentConfig } from "@/config/site";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className={" h-screen flex items-center  container  box-border w-full  pt-16 "}>
      <Corousal corousalItems={contentConfig.corousals} />
    </section>
  );
};

export default Hero;
