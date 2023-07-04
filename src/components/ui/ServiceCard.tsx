import Image from "next/image";

type Props = {
  service: {
      title: string;
      description: string;
      imgUrl: string;
  } 
};

const ServiceCard = ({service}: Props) => {
  return (
    <div className="">
      
      <div className="flex flex-col flex-shrink-0 w-80 h-96 cursor-pointer group border-2 border-primary  ">
        <div className="flex-grow flex justify-center items-center">
          <Image src={service.imgUrl} className="group-hover:scale-110 ease-in-out duration-200" height={250} width={250} alt={service.title} aria-hidden />
        </div>
        <div className="h-28  bg-secondary px-5 py-3 space-y-3 group-hover:text-primary text-black w-full flex flex-col ">
          <h3 className="text-xl underline font-semibold">{service.title}</h3>
          <div className="flex items-center  justify-between">
            <p>{service.description}</p>
            <svg
            className="text-2xl group-hover:translate-x-2 ease-in-out duration-200 group-hover:text-primary"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 16C5 15.4872 5.38604 15.0645 5.88338 15.0067L6 15L24 15C24.5523 15 25 15.4477 25 16C25 16.5128 24.614 16.9355 24.1166 16.9933L24 17L6 17C5.44772 17 5 16.5523 5 16Z"
                fill="#3C3C3C"
              />
              <path
                d="M26.7071 15.2929C27.0676 15.6534 27.0953 16.2206 26.7903 16.6129L26.7071 16.7071L17.7071 25.7071C17.3166 26.0976 16.6834 26.0976 16.2929 25.7071C15.9324 25.3466 15.9047 24.7794 16.2097 24.3871L16.2929 24.2929L24.585 16L16.2929 7.70711C15.9324 7.34662 15.9047 6.77939 16.2097 6.3871L16.2929 6.29289C16.6534 5.93241 17.2206 5.90468 17.6129 6.2097L17.7071 6.29289L26.7071 15.2929Z"
                fill="#3C3C3C"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
