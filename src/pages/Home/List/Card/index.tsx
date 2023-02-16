import axios from "axios"
import Image from "next/image"
import { Eye, Trash } from "phosphor-react"
import { useEffect, useState } from "react"
import { URL_DOMAIN } from "../../../../../env"
import  { setCookie } from "nookies";

export type CardProps = {
    name: string
    overview: string
    SE?: { season: number, episode: number }
    poster_path: string,
    id: number,
    watched: Boolean,
    user: string
}
export default function Card({ name, overview, SE = { season: 0, episode: 0 }, poster_path, watched, user }: CardProps) {
    const [IsWatched, setIsWatched] = useState(watched)
    const [EyeColor, setEyeColor] = useState('')
    const { id, token } = JSON.parse(user)
    const cookieConfig = {
        path: '/',
        maxAge: 86400 * 30
    }
    // set eye color
    useEffect(() => {
        if (IsWatched) {
            setEyeColor("text-green-primary")
        } else {
            setEyeColor("text-white-primary")
        }
    }, [IsWatched])


    function reducerOverview() {
        if (overview.length > 180) { return overview.slice(0, 190) + ' ....' }
        return overview
    }

    function toggleWatched() {
        const URL = `${URL_DOMAIN}list/watched`

        axios.patch(URL, { id, name })
            .then(({data}) => {
                const { user } = data
                const { titles } = user
                const string = JSON.stringify(titles)

                setCookie(null, 'list', string, cookieConfig)

                if (IsWatched) {
                    setIsWatched(false)
                } else {
                    setIsWatched(true)
                }
            })
    }

    function deleteItem() {
        const URL = `${URL_DOMAIN}list/remove`
        axios.patch(URL, { id, name })
        .then(({data}) => {
            const { user } = data
            const { titles } = user
            const string = JSON.stringify(titles)
            
            setCookie(null, 'list', string, cookieConfig)
            window.location.href = ('/Home')
        })
    }

    return (
        <div key={name} className={`text-white-primary p-2 max-sm:p-1 grid grid-cols-6 justify-center  justify-items-center items-center border-gray-2 border-2 rounded-lg ${'visibleClassName'}`} >
            <div className="w-full">
                <Image
                    alt={'Poster from ' + name}
                    width={320}
                    height={480}
                    src={poster_path}
                    className="w-full max-w-[120px] max-h-[280px]"
                />
            </div>

            <div className="col-span-3 h-full max-sm:p-1 ml-4">
                <h5 className="text-sm max-sm:text-xs max-sm:font-bold font-semibol">
                    {name}
                </h5>
                <p className="text-justify text-xs w-full max-sm:w-full  text-gray-3 ">
                    {reducerOverview()}
                </p>
                <div className="flex gap-4 mt-4">
                    <p className="text-xs font-normal text-gray-3">Temporada / Episodio: </p>
                    <p className="text-xs font-normal text-gray-3">SE{SE.season} / E{SE.episode}</p>
                </div>
            </div>

            <div className="flex col-span-2 flex-col justify-center  text-center h-full items-center w-full ml-4">
                <h3 className="3 font-normal text-xs text-gray-3">OPTIONS</h3>
                <div className="flex gap-4" >
                    <Eye
                        className={EyeColor + " hover:cursor-pointer"}
                        width='60px'
                        height='60px'
                        onClick={toggleWatched}
                    />
                    <Trash
                        id={name}
                        onClick={deleteItem}
                        className="hover:cursor-pointer text-white-primary"
                        height={'60px'}
                        width={'60px'} />
                </div>
            </div>
        </div>
    )
}
