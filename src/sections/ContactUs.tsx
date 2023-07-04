import { ContactForm } from "@/components";
import Image from "next/image";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <section id="contact" className="container py-10 text-center">
      <h2 className="font-mightyShadow md:text-7xl text-4xl pb-5">Contact US</h2>
      <div className="flex ">
        <ContactForm />
        <div className="">
          <Image
            src={"/v1688470605/wallpaper/contact_wp.png"}
            height={600}
            alt="Contact"
            aria-hidden
            width={475}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
