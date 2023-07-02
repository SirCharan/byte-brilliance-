import { cn } from "@/lib/utils";

import { Corousal } from "@/components";
import { contentConfig } from "@/config/site";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className={" h-screen container  box-border w-full py-7 "}>
      <Corousal corousalItems={contentConfig.corousals} />
    </section>
  );
};

export default Hero;
