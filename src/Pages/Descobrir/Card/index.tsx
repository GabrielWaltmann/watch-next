import axios from "axios"
import { Tooltip } from "flowbite-react"
import Image from "next/image"
import Link from "next/link"
import { type } from "os"
import { PlusCircle } from "phosphor-react"
import Text from "../../../components/Text"

type CardProps = {
    poster_path: string,
    name: string,
    year: number,
    href?: String | number,
    overview: String,
    id_user: string
}

type TitleProps = {
    name: string,
    overview: String,
    poster_path: String,
    release_date: '' | number,
    id_user?: string
}
function addTitle({name, overview, poster_path, release_date, id_user=''}: TitleProps){
    const DB_URL = `http://localhost:4000/`

    axios.patch(`${DB_URL}user/list/add/`, {
        id: id_user,
        title: {
            name: name,
            overview: overview,
            poster_path: poster_path,
            watched: false,
            release_date: release_date
        }
    }).then((res)=>{
        console.log(res)
    }).catch((err)=> console.log(err))
}

export default function Card({ poster_path, name, year, href='', overview, id_user }: CardProps) {
    return (
        <Link 
        className="max-w-[220px] bg-gray-2 rounded-md overflow-hidden relative"
        href={'/'+href}
        >
            <Tooltip 
            content="Adicionar a sua lista" 
            className="text-xs text translate-y-2/3" 
            placement="top"
            >
                <PlusCircle
                    className="text-white-primary absolute top-1 hover:cursor-pointer left-1"
                    height={'32px'}
                    width={'32px'}
                    onClick={(e)=>{
                        addTitle(
                            {
                                name: name, 
                                overview: overview, 
                                poster_path: poster_path, 
                                release_date: year,
                                id_user: id_user
                            }
                            )
                        }
                    }
                />
            </Tooltip>
            <Image
                src={poster_path}
                height={330}
                width={220}
                alt={'Poster from ' + name}
            />


            <div className="text-white-primary gap-4 w-full text-end flex justify-between py-1 px-1">
                <Text className="text-xs text-left">{name}</Text>

                <p className="text-xs">{year}</p>
            </div>


        </Link>

    )
}