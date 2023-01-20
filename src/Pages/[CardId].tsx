import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export function getStaticPaths(){ return { paths: [], fallback: true } }

type Params = { params: { slug: string } }
export const getStaticProps: any = async ({ params }: Params) => {
    const {CardId}: any = params;
    
    return { 
        props: { id: CardId }
    }  
    
}

type MovieProps = {
    title: string,
    PosterPath: string,
    Release_date: string,
    Overview: string,
    Episodes: {} | null
}

export default function CardId({id}: any){
    const [title, setTitle] = useState('Title')
    const [PosterPath, setPosterPath] = useState('/stranger.jpg')
    const [Overview, setOverview] = useState('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero accusantium deleniti adipisci sapiente magnam fugiat, atque repellendus suscipit blanditiis sed minima, ducimus assumenda, molestiae vitae numquam. Iure recusandae reprehenderit perferendis.')
    const [Release_date, setRelease_date] = useState('2000-00-00')
    const [Episodes, setEpisodes] = useState(null)
    const movieurl = `https://api.themoviedb.org/3/movie/${id}?api_key=37515be8a40c641389533f4f4c0724ee`
    const tvurl = `https://api.themoviedb.org/3/tv/${id}?api_key=37515be8a40c641389533f4f4c0724ee`

    useEffect(()=>{
        if(id !== undefined){
            axios.get(movieurl)
            .then((res)=>{ 
                console.log(res.data)
                setTitle(res.data.title) 
                setPosterPath('https://image.tmdb.org/t/p/w500/'+res.data.poster_path)
                setOverview(res.data.overview)
                setRelease_date(res.data.release_date)
            })
            .catch((err)=>{
                axios.get(tvurl)
                .then((res)=>{ 
                    console.log(res.data)
                    setTitle(res.data.name) 
                    setPosterPath('https://image.tmdb.org/t/p/w500/'+res.data.poster_path)
                    setOverview(res.data.overview)
                    setRelease_date(res.data.first_air_date)
                })
                .catch((err)=>{})
            })
        }
    }, [id])

    return ( <>
        <Header />
        <Body
        title={title}
        Overview={Overview}
        PosterPath={PosterPath}
        Release_date={Release_date}
        Episodes={Episodes}
        />
    </> )
}

function Body({title, PosterPath, Release_date, Overview, Episodes}: MovieProps){
    return (
    <div className="w-screen overflow-hidden max-md:overflow-auto h-screen">
             <div className={`h-screen mt-[88px]`}>
                 <div className="h-full w-full bg-transparent">
                     <div className="flex h-full w-full justify-center items-center">
                         <main className="flex items-center gap-8 max-w-[850px] max-h-[330px] max-md:max-h-full max-md:translate-y-0 max-md:flex-col max-md:py-4 -translate-y-14">
                             <Image
                             height={450}
                             width={300}
                             alt={'Poster da Série Stranger Things'}
                             src={PosterPath}
                             className=' w-[300px]'
                             /> 
                             <div className="infos flex flex-col gap-2 max-md:px-4">
                                 <div className="flex justify-center">
                                     <h1 className="text-white-primary text-lg">
                                        {title}
                                    </h1>
                                     <h1 className="text-white-primary text-lg">({Release_date})</h1>
                                 </div>
                                 <div className="description">
                                     <p className="text-white-primary text-md text-justify max-md:text-sm">
                                         <span className="max-md:text-sm">Visão Geral: </span>
                                         {Overview}
                                     </p>
                                 </div>
                             </div>
                             
                         </main>
                     </div>  
                 </div>
             </div>
         </div>
    )
}
