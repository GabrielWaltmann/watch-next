import axios from "axios";
import { useSession, signOut } from 'next-auth/react'
import { Spinner } from "flowbite-react";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Text from "../../components/Text";
import Image from "next/image";
import { Eye } from "phosphor-react";

function List() {
    const [list, setList] = useState(null)

    const EMAIL_URL = `http://localhost:4000/auth/id`
    const LIST_URL = `http://localhost:4000/user`
    const { data: session }: any = useSession()
    console.log(session)
    try{
        axios.post(EMAIL_URL, { email: session.user.email })
        .then((res) => {
            const id = (res.data.id)
            const token = (localStorage.getItem('token'))
            const config = { headers: { Authorization: `Bearer ${token}` } }

            axios.get(`${LIST_URL}/${id}`, config)
                .then((res) => {
                    const list = res.data.user.titles
                    const content: any = container.current
                    console.log(list)
                    setTimeout(() => {
                        content ? content.innerHTML = '' : null


                        list.map((i: any) => {
                            try {
                                const eye = {
                                    watched: <Eye className="  text-green-primary " height={'60px'} width={'60px'} />,
                                    watch: <Eye className=" text-white-primary" height={'60px'} width={'60px'} />
                                }
                                const url = i.poster_path
                                const title = i.name
                                const watched = false
                                const overview = i.overview
                                const SE = {
                                    episode: 0,
                                    season: 0
                                }

                                content.innerHTML += (
                                    `<div class="text-white-primary p-2 max-sm:p-1 grid grid-cols-6 justify-center justify-items-center items-center border-gray-2 border-2 rounded-lg">
                                        <div class="w-full">
                                            <img
                                                alt=${'Poster from '+title}}
                                                width=${320}
                                                height=${480}
                                                src=${url}
                                                class="w-full max-w-[120px] max-h-[280px]"
                                            />
                                        </div>

                                        <div class="col-span-4 h-full max-sm:p-1">
                                            <h5 class="text-sm max-sm:text-xs max-sm:font-bold font-semibol">
                                                ${title}
                                            </h5>
                                            <p class="text-justify text-xs w-2/3 max-sm:w-full  text-gray-3 ">
                                                ${overview}
                                            </p>
                                            <div class="flex gap-4 mt-4">
                                                <p class="text-xs font-normal text-gray-3">Temporada / Episodio: </p>
                                                <p class="text-xs font-normal text-gray-3">SE${SE.season} / E${SE.episode}</p>
                                            </div>
                                        </div>

                                        <div class="flex flex-col justify-center -translate-y-4 max-sm:-translate-y-0 text-center h-full items-center">
                                            <h3 class="3 font-normal text-xs text-gray-3">STATUS</h3>
                                            <img src="watch.svg" alt="My Happy SVG"/>
                                        </div>

                                    </div>`
                                )
                    
                            } catch { }
                        })
                    }, 1000)



                })
                .catch((err) => { console.log(err) })
        })
        .catch((err) => { console.log(err) })
    }catch{}

    const container = useRef(null)
    const loading = (
        <div className="w-full justify-center items-center mt-16 flex gap-4 flex-col" ref={container}>
            <Spinner aria-label="Default status example" className="loading" />
            <Text className="text-white-primary loading" >Carregando sua lista...</Text>

        </div>
    )

    const [listElement, setlistElement] = useState(loading)

    return listElement
}


export default function Home(): JSX.Element {
    const container = useRef<null | HTMLDivElement>(null)
    const router = useRouter()
    const { data: session, status }: any = useSession()

    if (status === 'unauthenticated') { router.push("/Entrar") }


    return (
        <>
            <Header />
            <div className="w-screen min-h-screen" >

                <div className="w-full px-32 py-16 flex flex-col gap-4 max-sm:py-4 max-md:px-4">
                    <div className="text-white-primary text-lg font-bold pl-4 max-sm:pl-0 flex justify-between ">
                        Assistir a seguir
                        <button className="border-gray-2 border px-2 rounded" onClick={() => signOut()}>Sair</button>
                    </div>

                    <List />

                </div>

            </div>
        </>
    )
}
