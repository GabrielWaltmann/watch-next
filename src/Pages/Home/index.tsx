import axios from "axios";
import { useSession, signOut } from 'next-auth/react'
import { Spinner } from "flowbite-react";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Text from "../../components/Text";
import Image from "next/image";
import {Card, CardProps} from "./components/Card";
import { api, instance } from "../../api/axios";


export default function Home(): JSX.Element {
    const router = useRouter()
    const { data: session, status }: any = useSession()
    const [list, setList] = useState([])
    const EMAIL_URL = `http://localhost:4000/auth/id`
    const LIST_URL = `http://localhost:4000/user`
    const getEmail = ()=>{
        try{
            return session.user.email
        }catch{}
    }

    const email = getEmail()
    if (status === 'unauthenticated') { router.push("/Entrar") }
    if(email && list.length === 0){
        api(instance).post(EMAIL_URL, { email: email })
        .then((res) => {
            const id = (res.data.id)
            localStorage.setItem('id', id)
            const token = (localStorage.getItem('token'))
            const config = { headers: { Authorization: `Bearer ${token}` } }
            api(instance).get(`${LIST_URL}/${id}`, config)
                .then((res) => {

                    const datas = res.data.user.titles
                    setList(datas)
                })
                .catch((err) => { console.log(err) })
            })
        .catch()
    }

    return (
        <>
            <Header />
            <div className="w-screen min-h-screen" >

                <div className="w-full px-32 py-16 flex flex-col gap-4 max-sm:py-4 max-md:px-4">
                    <div className="text-white-primary text-lg font-bold pl-4 max-sm:pl-0 flex justify-between">
                        Assistir a seguir
                        <button className="border-gray-2 border px-2 rounded" onClick={() => signOut()}>Sair</button>
                    </div>
                    {list.map((item: CardProps)=>{
                        console.log(item)
                        return (
                            <Card
                            watched={item.watched}
                            name={item.name}
                            overview={item.overview}
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
