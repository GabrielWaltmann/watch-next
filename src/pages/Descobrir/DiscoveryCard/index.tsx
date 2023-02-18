import axios from "axios"
import { Tooltip } from "flowbite-react"
import { useRouter } from "next/dist/client/router"
import Image from "next/image"
import Link from "next/link"
import nookies, { setCookie } from "nookies"

import { PlusCircle } from "phosphor-react"
import { URL_DOMAIN } from "../../../../env"
import Text from "../../../components/Text"
import { ICard, IDadabaseProps } from "../../../types/DiscoveryList"




export default function Card({ poster_path, name, release_date, href = '', overview }: ICard) {
    const router = useRouter()
    function addTitleOnDB({ name, overview, poster_path, release_date }: IDadabaseProps) {
        const DB_URL = URL_DOMAIN
        const getSession = () => {
            const session = nookies.get().user
            if (session) {
                const json = JSON.parse(session)
                return (json)
            }
            return null
        }
        const id = getSession().id
        axios.patch(`${DB_URL}list/add/`, {
            id: id,
            title: {
                name: name,
                overview: overview,
                poster_path: poster_path,
                watched: false,
                release_date: release_date
            }
        }).then((res) => {
            refreshData()
            router.push('app')
        }).catch((err) => console.log(err))
    }
    const refreshData = () => router.replace(router.asPath);
    return (
        <Link
            className="max-w-[220px] bg-gray-2 rounded-md overflow-hidden relative"
            href={"/" + href}
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
                    onClick={(e) => {
                        e.preventDefault()
                        addTitleOnDB({
                            name: name,
                            overview: overview,
                            poster_path: poster_path,
                            release_date: release_date,
                        })
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

                <p className="text-xs">{release_date}</p>
            </div>


        </Link>

    )
}