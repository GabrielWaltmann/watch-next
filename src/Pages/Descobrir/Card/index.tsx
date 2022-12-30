import Image from "next/image"
import Text from "../../../Components/Text/Index"

type CardProps ={
    url: string,
    title: string,
    year: number,
}

export default function Card({url, title, year}: CardProps){
    return (
        <div className="max-w-[220px] bg-gray-2 rounded-md overflow-hidden">
            <Image
                src={'/'+url}
                height={330}
                width={220}
                alt={'Poster from ' + title}
            />

            <div className="text-white-primary w-full text-end flex justify-between py-1 px-1">
                <Text className="text-xs">{title}</Text> 

                <p className="text-xs">{year}</p> 
            </div>

        </div>
        
    )
}