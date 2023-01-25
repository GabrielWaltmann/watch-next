import axios from "axios";
import { Session } from "inspector";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { URL_DOMAIN } from "../../../env";
import Header from "../../components/Header";
import Card, { CardProps } from "../../components/HomeCard";

export default function Home() {

    const [list, setList] = useState([])
    const router = useRouter()
    const getSession = () => {
        const session = localStorage.getItem('session')
        if (session) {
            const json = JSON.parse(session)
            return (json)
        }
        return null
    }

    const clearSession = () => {
        localStorage.removeItem('session')
        router.push('Entrar')
    }


    useEffect(() => {
        if (!getSession()) {
            router.push('/Entrar')
        }else {
            const user = getSession()
            const config = { headers: { Authorization: `Bearer ${user.token}` } }
            axios.get(`${URL_DOMAIN}list/${user.id}/`, config)
            .then((res) => {
                const datas = res.data
                console.log(`${URL_DOMAIN}list/${user.id}/`, user)
                setList(datas)
            })
            .catch((err) => { console.log(err) })
        }
    }, [])

    useEffect(()=>{
         console.log(list)
    }, [list])

    return (
        <>
            <Header key={'Header'}/>
            <div className="w-screen min-h-screen" key={'container'}>

                <div className="w-full px-32 py-16 flex flex-col gap-4 max-sm:py-4 max-md:px-4">
                    <div className="text-white-primary text-lg mt-32 font-bold pl-4 max-sm:pl-0 flex justify-between">
                        Assistir a seguir

                        <button 
                        className="border-gray-2 border px-2 rounded" 
                        onClick={() => clearSession()}>Sair</button>
                    </div>
                    {list.map((item: CardProps) => {
            
                        return (
                            <Card
                                watched={item.watched}
                                name={item.name}
                                overview={item.overview ? item.overview : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea corrupti recusandae cumque quos repudiandae odit atque, voluptatem dolorem minima neque, provident perferendis pariatur officiis aspernatur veritatis amet at veniam saepe.'}
                                poster_path={'https://image.tmdb.org/t/p/original/' + item.poster_path}
                                key={item.id}
                                id={item.id}
                            />
                        )
                    })}

                </div>

            </div>
        </>
    )
}
