import Link from "next/link";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="whoWeAre" className=" flex items-center h-screen container">
      <div className="flex md:flex-row flex-col  items-start lg:gap-40 gap-24 justify-between">
        <div className="flex justify-center w-full">
          <div className="bg-primary flex md:justify-end max-lg:items-start  w-36 h-20  md:w-96 md:h-72">
            <h2 className="md:text-9xl text-5xl md:w-3/4 lg:pt-10  lg:text-start font-jeju">
              Who Are We?
            </h2>
          </div>
        </div>
        <div className="lg:text-xl text-sm max-lg:text-center space-y-5 first:!pt-0 " style={{lineHeight:"normal"}}>
          <p>
            Founded by IIT Kanpur graduates, Khushi Gautam and Charandeep
            Kapoor, ByteBrilliance is your trusted partner for exceptional tech
            consultancy services. From captivating web development to seamless
            mobile experiences, we excel in crafting innovative solutions
            tailored to your business needs.
          </p>
          <p>
            Beyond web and mobile, we lead in cloud computing, data analytics,
            and AI, leveraging the latest tech and industry best practices. Our
            unwavering commitment to excellence drives tangible results, as we
            understand your objectives and challenges, delivering customized
            strategies with meticulous attention to detail.
          </p>
          <p>
            Choose ByteBrilliance for a highly skilled team dedicated to your
            success. We foster collaboration, build lasting relationships, and
            provide ongoing support in the ever-evolving tech landscape.
          </p>
          <p>
            Unlock your business&apos;s digital excellence with ByteBrilliance today.
          </p>
          <button className="px-6 py-2 text-xl font-bold transition-colors duration-300 hover:bg-transparent border border-transparent  hover:border-primary     bg-primary rounded-3xl shadow-md">
            <Link href="#contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
