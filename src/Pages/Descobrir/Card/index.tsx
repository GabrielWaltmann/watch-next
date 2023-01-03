import { Tooltip } from "flowbite-react"
import Image from "next/image"
import Link from "next/link"
import { PlusCircle } from "phosphor-react"
import Text from "../../../Components/Text"

type CardProps = {
    url: string,
    title: string,
    year: number,
    href: string
}

export default function Card({ url, title, year, href }: CardProps) {
    return (
        <Link 
        className="max-w-[220px] bg-gray-2 rounded-md overflow-hidden relative"
        href={'/Descobrir/'+href}
        >
            <Tooltip content="Adicionar a sua lista" className="text-xs text translate-y-2/3" placement="left"
            >
                <PlusCircle
                    className="text-white-primary absolute top-1 hover:cursor-pointer left-1"
                    height={'32px'}
                    width={'32px'}
                />
            </Tooltip>
            <Image
                src={'/' + url}
                height={330}
                width={220}
                alt={'Poster from ' + title}
            />


            <div className="text-white-primary gap-4 w-full text-end flex justify-between py-1 px-1">
                <Text className="text-xs text-left">{title}</Text>

                <p className="text-xs">{year}</p>
            </div>


        </Link>

    )
}