import axios from "axios";
import { useSession, signOut } from 'next-auth/react'
import React, {  useEffect, useState } from "react";
import { URL_DOMAIN } from "../../../env";
import Header from "../../components/Header";
import Card, { CardProps } from "../../components/HomeCard";

export default function Home() {
    const { data: session, status }: any = useSession()
    const [list, setList] = useState([])
    const EMAIL_URL = `${URL_DOMAIN}auth/id`
    const LIST_URL = `${URL_DOMAIN}user`
    const getEmail = ()=>{
        try{
            return session.user.email
        }catch{}
    }

    const email = getEmail()
    if (status === 'unauthenticated') { window.location.href = ("/Entrar") }
    useEffect(()=>{
        if(email && list.length === 0){
            axios.post(EMAIL_URL, { email: email })
            .then((res) => {
                const id = (res.data.id)
                localStorage.setItem('id', id)
                const token = (localStorage.getItem('token'))
                const config = { headers: { Authorization: `Bearer ${token}` } }
                axios.get(`${LIST_URL}/${id}`, config)
                    .then((res) => {
                        const datas = res.data.user.titles
                        setList(datas)
                    })
                    .catch((err) => { console.log(err) })
                })
            .catch()
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
                    {list.map((item: CardProps)=>{
                        // console.log(item)
                        return (
                            <Card
                            watched={item.watched}
                            name={item.name}
                            overview={item.overview ? item.overview : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea corrupti recusandae cumque quos repudiandae odit atque, voluptatem dolorem minima neque, provident perferendis pariatur officiis aspernatur veritatis amet at veniam saepe.'}
                            poster_path={'https://image.tmdb.org/t/p/original/'+item.poster_path}
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
