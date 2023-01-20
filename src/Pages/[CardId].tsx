import { useRouter } from "next/router";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from 'next'
import Header from "../components/Header";
import { api, instance } from "../api/axios";
import { useEffect, useState } from "react";
type Params = {
	params: {
		slug: string
	}
}

// set posibles Paths
export const getStaticPaths: GetStaticPaths = async () => {
    return { paths: [], fallback: true }
}

export const getStaticProps: any = async ({ params }: Params) => {
    const {CardId}: any = params;
    let datas: any
    const url = `https://api.themoviedb.org/3/movie/${CardId}?api_key=37515be8a40c641389533f4f4c0724ee`
    await api(instance).get(url)
    .then((res)=>datas = (res.data))


        return { 
            props: { datas }
        }
    
}

type Datas = {
    backdrop_path: string
    poster_path: string
    title: string
    overview: string,
    release_date: string
}

export default function Movie({datas}: {datas :  Datas}) {
    const [PosterURL, setPosterURL] = useState<null | string>(null)
    
    const posterDefault = `https://image.tmdb.org/t/p/w500/9xkGlFRqrN8btTLU0KQvOfn2PHr.jpg`


    useEffect(()=>{
        if(datas){
            console.log(datas)
            setPosterURL(`https://image.tmdb.org/t/p/w500${datas.poster_path}`)
        }
    }, [datas])

    return (
        <>
            <Header />
            <div className="w-screen overflow-hidden max-md:overflow-auto h-screen">
                <div className={`h-screen mt-[88px]`}>
                    <div className="h-full w-full bg-transparent">
                        <div className="flex h-full w-full justify-center items-center">
                            <main className="flex items-center gap-8 max-w-[850px] max-h-[330px] max-md:max-h-full max-md:translate-y-0 max-md:flex-col max-md:py-4 -translate-y-14">
                                <Image
                                height={450}
                                width={300}
                                alt={'Poster da Série Stranger Things'}
                                src={PosterURL ? PosterURL : posterDefault}
                                className=' w-[300px]'
                                /> 
                                <div className="infos flex flex-col gap-2 max-md:px-4">
                                    <div className="flex justify-center">
                                        <h1 className="text-white-primary text-lg">{datas.title}</h1>
                                        <h1 className="text-white-primary text-lg">({datas.release_date})</h1>
                                    </div>
                                    <div className="description">
                                        <p className="text-white-primary text-md text-justify max-md:text-sm">
                                            <span className="max-md:text-sm">Visão Geral: </span>
                                            {datas.overview}
                                        </p>
                                    </div>
                                </div>
                            </main>
                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    )
}