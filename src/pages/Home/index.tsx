import axios from "axios";
import { useSession, signOut } from 'next-auth/react'
import React, { useEffect, useState } from "react";
import { URL_DOMAIN } from "../../../env";
import Header from "../../components/Header";
import Card, { CardProps } from "../../components/HomeCard";

export default function Home() {
    const token = () => (localStorage.getItem('token'))
    const { status }: any = useSession()
    const session = useSession()
    const [list, setList] = useState([])

    if (status === 'unauthenticated') { window.location.href = ("/Entrar") }
    useEffect(() => {
        const id = (localStorage.getItem('id'))
        const URL = `${URL_DOMAIN}list/${id}`
        if (id !== `undefined` && token() !== `undefined` && list.length === 0) {
            const config = { headers: { Authorization: `Bearer ${token()}` } }
            axios.get(URL, config)
            .then((res) => {
                const datas = res.data.list
                setList(datas)
            })
            .catch((err) => { console.log(err) })
        }
    }, [])

    return (
        <>
            <Header />
            <div className="w-screen min-h-screen" >

                <div className="w-full px-32 py-16 flex flex-col gap-4 max-sm:py-4 max-md:px-4">
                    <div className="text-white-primary text-lg mt-32 font-bold pl-4 max-sm:pl-0 flex justify-between">
                        Assistir a seguir

                        <button className="border-gray-2 border px-2 rounded" onClick={() => signOut()}>Sair</button>
                    </div>
                    {list.map((item: CardProps) => {
                        // console.log(item)
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
