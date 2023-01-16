import axios from "axios";
import {useSession, signOut} from 'next-auth/react'
import { Spinner } from "flowbite-react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import Header from "../../components/Header";
import Text from "../../components/Text";
import Item from "./Card";
/* export async function getStaticProps(context: any) {
    const id = context.params.UserId;
    /* const url = `https://api.themoviedb.org/3/movie/${id}?api_key=37515be8a40c641389533f4f4c0724ee&language=pt-BR`;
    const response = await fetch(url)
    const datas = await response.json() 
    return { // Will be disponible in Discovery Page
        props: { id: id }
    }
}
 */


export function clearTokenOnLocalStorage() {
    try { localStorage.setItem('token', '') } catch { }
    try { localStorage.setItem('email', '') } catch { }
    try { localStorage.setItem('id', '') } catch { }
}

export default function List() {
    const container = useRef(null)
    const router = useRouter()
    const { data: session, status } = useSession()
    console.log(session)

    if(status === 'unauthenticated'){
        router.push("/Entrar")
    }

   /* 


        const user = session
         }catch{}


         useEffect(() => {
            try {
                const token = (localStorage.getItem('token'))
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
                axios.post(
                    `${DB_URL}auth/id`,
                    { email: 'gabrielwaltmann030@gmail.com' }
                )
                    .then((res) => {
                        id = res.data.id
    
                        axios.get(
                            `${DB_URL}user/${id}/`,
                            config
                        )
                        .then((res) => {
                        })
                        .catch((err => console.log(err)))
                    })
                    .catch((err => console.log(err)))
            } catch { }
        }, []) */

    return (
        <>
            <Header />
            <div className="w-screen min-h-screen" >

                <div className="w-full px-32 py-16 flex flex-col gap-4 max-sm:py-4 max-md:px-4">
                    <div className="text-white-primary text-lg font-bold pl-4 max-sm:pl-0 flex justify-between">
                        Assistir a seguir
                        <button className="border-gray-2 border px-2 rounded" onClick={() => signOut()}>Sair</button>
                    </div>

                    <div className="w-full justify-center items-center mt-16 flex gap-4" ref={container}>
                        <Spinner aria-label="Default status example" className="loading" />
                        <Text className="text-white-primary loading" >Carregando sua lista...</Text>

                    </div>
                    {



                    }
                </div>

            </div>
        </>
    )
}
