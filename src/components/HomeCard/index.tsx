import axios from "axios"
import { Alert } from "flowbite-react"
import Image from "next/image"
import { Eye, Trash } from "phosphor-react"
import { MouseEvent, useEffect,  useState } from "react"
import { URL_DOMAIN } from "../../../env"

export type CardProps = {
    name: string
    overview: string
    SE?: { season: number, episode: number }
    poster_path: string,
    id: number,
    watched: Boolean
}

export default function Card({ name, overview, SE = { season: 0, episode: 0 }, poster_path, watched }: CardProps) {
    const [status, setStatus] = useState<Boolean>(watched)
    const [eyeClassName, setEyeClassName] = useState<string>('')
    const [visible, setVisible] = useState(true);
    const [visibleClassName, setVisibleClassName] = useState('');

    const removeCard = () => {
        setVisible(false);
    };

    useEffect(()=>{
        visible === false ? setVisibleClassName('hidden') : null
        console.log(visibleClassName)
    }, [visible])

    useEffect(()=>{

            if (status === false) {
                setEyeClassName('text-white-primary')
            } else {
                
                setEyeClassName('text-green-primary')
                
            }
    },[status])
    function changeStatus(e: any) {
        // console.log(e.target.parentElement.parentElement.parentElement)
        const id = localStorage.getItem('id')
        const token = localStorage.getItem('token')
        const config = { headers: { Authorization: `Bearer ${token}` } }
        const URL = `${URL_DOMAIN}list/watched`

        const watched = () => {
            const isWatched = status === true
            if (isWatched) {
                setStatus(false)
                setEyeClassName('text-white-primary')
                return false
            } else {
                setStatus(true)
                setEyeClassName('text-green-primary')
                return true
            }
        }
        if(id !== ''){
            axios.patch(URL, {
                id: id,
                name: name,
                watched: watched()
            }, config)
            .then((res)=>{})
            .catch((res)=>{})
        }
    }
    const eye = ()=> {
        return <Eye
        id={name}
        onClick={(event: any) => changeStatus(event)}
        className={eyeClassName + ' hover:cursor-pointer'}
        height={'60px'}
        width={'60px'} />
    }

    const reducerOverview = () => {
        if (overview.length > 180) { return overview.slice(0, 190) + ' ....' }
        return overview
    }

    function deleteItemFromDB(){

        const id = localStorage.getItem('id')
        const token = localStorage.getItem('token')
        const config = { headers: { Authorization: `Bearer ${token}` } }
        const URL = `${URL_DOMAIN}list/remove/`


        if(id !== ''){
            axios.patch(URL, {
                id: id,
                name: name
            })
            .then((res)=>removeCard())
            .catch((res)=>{console.log(res)})
        }
    }

    return (
        <>

            <div className={`text-white-primary p-2 max-sm:p-1 grid grid-cols-6 justify-center  justify-items-center items-center border-gray-2 border-2 rounded-lg ${visibleClassName}`} >
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
                        {eye()}
                        <Trash
                        id={name}
                        onClick={(e:MouseEvent)=>deleteItemFromDB()}
                        className="hover:cursor-pointer text-white-primary" 
                        height={'60px'} 
                        width={'60px'} />
                    </div>
                </div>

            </div>
        </>
    )
}