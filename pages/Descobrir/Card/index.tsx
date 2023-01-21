import axios from "axios"
import { Tooltip } from "flowbite-react"
import Image from "next/image"
import Link from "next/link"
import { type } from "os"
import { PlusCircle } from "phosphor-react"
import { api, instance } from "../../../api/axios"
import Text from "../../../components/Text"

type CardProps = {
    poster_path: string,
    name: string,
    first_air_date?: number,
    release_date?: number,
    href?: String | number,
    overview: String,
}

export type TitleProps = {
    name: string,
    title?: string,
    overview: String,
    poster_path: string,
    release_date: undefined | number,
}
function addTitle({name, overview, poster_path, release_date}: TitleProps){
    const DB_URL = `http://localhost:4000/`
    const id = localStorage.getItem('id')
    api(instance).patch(`${DB_URL}user/list/add/`, {
        id: id,
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

export default function Card({ poster_path, name, first_air_date, release_date, href='', overview }: CardProps) {

    const date = () => {
        if(first_air_date){return first_air_date}
        else return release_date
    }

    return (
        <Link 
        className="max-w-[220px] bg-gray-2 rounded-md overflow-hidden relative"
        href={'/'+href}
        onClick={()=>{localStorage.setItem('titleTemp', name)}}
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
                        e.preventDefault()
                        addTitle(
                            {
                                name: name, 
                                overview: overview, 
                                poster_path: poster_path, 
                                release_date: date(),
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

                <p className="text-xs">{date()}</p>
            </div>


        </Link>

    )
}