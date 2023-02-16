import Card, { CardProps } from "./Card";
import  nookies,{ destroyCookie, setCookie } from "nookies";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { URL_DOMAIN } from "../../../../env";
import axios from "axios";

export default function List({list, user}: any) {
    const router = useRouter()
    const signOut = () => {
        destroyCookie(null, 'session')
        destroyCookie(null, 'list')
        router.push('/Entrar')
    }
    
    return (
        <div className="w-screen min-h-screen" key={'container'}>

            <div className="w-full px-32 py-16 flex flex-col gap-4 max-sm:py-4 max-md:px-4">
                <div className="text-white-primary text-lg mt-32 font-bold pl-4 max-sm:pl-0 flex justify-between">
                    Assistir a seguir

                    <button
                        className="border-gray-2 border px-2 rounded"
                        onClick={() => signOut()}>Sair</button>
                </div>
               
                    {list.map(({watched, name, overview, poster_path, id}: CardProps)=>{
                        return(
                            <Card
                            user={user}
                            watched={watched}
                            name={name}
                            overview={overview ? overview : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea corrupti recusandae cumque quos repudiandae odit atque, voluptatem dolorem minima neque, provident perferendis pariatur officiis aspernatur veritatis amet at veniam saepe.'}
                            poster_path={'https://image.tmdb.org/t/p/original/' + poster_path}
                            key={id}
                            id={id}
                        />
                        )
                    })}
            </div>

        </div>
    )
}