import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../components/Header";

// set posibles Paths
 export async function getStaticPaths(params:any) {
    return { paths: [], fallback: true }
}  

export async function getStaticProps(context: any) {
    const id = context.params.id;  
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=37515be8a40c641389533f4f4c0724ee&language=pt-BR`;
    const response = await fetch(url)
    const datas = await response.json()
    return { // Will be disponible in Discovery Page
        props: { datas }
    }
} 

export default function Movie({datas}: {datas: any}){
    const id = datas.id
    const title = datas.title
    const url = `https://image.tmdb.org/t/p/w500${datas.poster_path}`;
    const overview = datas.overview;  
    const year = datas.release_date.slice(0,4)
    console.log(datas)
    function changeBackground(){
        const url = `https://image.tmdb.org/t/p/w500${datas.backdrop_path}`;
        const bg: any = document.querySelector('.bg-url')
        bg.style.backgroundImage = `url(${url})`
    }

    return(
        <>
            <Header/>
            <div className="w-screen overflow-hidden h-screen">
                <div className={`bg-url bg-no-repeat bg-cover h-screen mt-[88px] bg-center`} onLoad={()=>changeBackground()}>
                    <div className="bg-black bg-opacity-80 h-full w-full">
                        <div className="flex h-full w-full justify-center items-center">
                            <main className="flex items-center gap-8 max-w-[850px] max-h-[330px] max-md:max-h-full max-md:translate-y-0 max-md:flex-col max-md:py-4 -translate-y-14">
                                <Image
                                height={450}
                                width={300}
                                alt={'Poster da Série Stranger Things'}
                                src={url}
                                className=' w-[300px]'
                                />
                                <div className="infos flex flex-col gap-2 max-md:px-4">
                                    <div className="flex justify-center">
                                        <h1 className="text-white-primary text-lg">{title}</h1>
                                        <h1 className="text-white-primary text-lg">({year})</h1>
                                    </div>
                                    <div className="description">
                                        <p className="text-white-primary text-md text-justify max-md:text-sm">
                                            <span className="max-md:text-sm">Visão Geral: </span>
                                            {overview}
                                        </p>
                                    </div>
                                </div>
                            </main>
                        </div>
                        <button className="text-white-primary">Adicionar </button>
                    </div>
                    
                </div>
            </div> 
        </>
    )
}