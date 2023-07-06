import { contentConfig } from "@/config/site"
import Image from "next/image"

type Props = {}

const Clients = (props: Props) => {
  return (
    <section className="md:h-56 h-20 container bg-[#C04BF233]">
        <div className="flex h-full max-md:flex-nowrap max-md:overflow-x-auto md:justify-center justify-start md:gap-28 gap-16 items-center">
           {
            contentConfig.clients.map((client, index) => (
              <div key={index} className="md:w-20 w-16 h-10 flex max-md:flex-shrink-0 items-center md:h-16">
                <Image src={client.imgUrl} alt={client.title} height={60} className="h-full w-full  object-contain " width={130} />
              </div>
            ))
           }
        </div>
    </section>
  )
}

export default Clients