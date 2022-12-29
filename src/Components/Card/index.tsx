import Image from "next/image";

export type CardProps = {
    title: string,
    src: string,
    ImageAlt: string
}

export default function Card({title, src, ImageAlt}: CardProps){
    return (
        <div>
            <Image 
            src={src} 
            alt={ImageAlt} 
            height={330} 
            width={220}/>

            <h3 className="text-sm font-semibold text-white-primary">{title}</h3>

        </div>
    )
}