import axios from "axios";
import Image from "next/image";
import { Eye } from "phosphor-react";
import { useEffect, useReducer, useState } from "react";
import Header from "../../components/Header";
import Text from "../../components/Text";
import { GetStaticProps } from 'next'
import { useRouter } from "next/router";
export function getStaticPaths() { return { paths: [], fallback: true } }

export const getStaticProps: GetStaticProps = async (context) => {
    const {params} = context
    const { CardId }: any = params;

    const url = {
        movies: `https://api.themoviedb.org/3/movie/${CardId}?api_key=37515be8a40c641389533f4f4c0724ee&language=pt-BR`,
        tv: `https://api.themoviedb.org/3/tv/${CardId}?api_key=37515be8a40c641389533f4f4c0724ee&language=pt-BR`
    }

    
    try {
        const result = await axios.get(url.movies)
        const { data } = result;
        return {
            props: {
                data, 
                id: CardId
            }
        }

    } catch { 
        const result = await axios.get(url.tv)
        const { data } = result;
        return {
            props: {
                data: data, 
                id: CardId
            }
        }
    }


}

type MovieProps = {
    title_id: number,
    title: string,
    poster_path: string,
    release_date: string,
    overview: string,
    Episodes: any
}

export default function CardId({ data, id }: any) {
    console.log(data)
    const [TitleInfos, setTitleInfos] = useState({
        title: "",
        overview: "",
        poster_path: "",
        release_date: "",
        Episodes: ""
    })
    useEffect(()=>{

        if(data){
            setTitleInfos(data)
        }
    }, [data])

    const {title, overview, poster_path, release_date, Episodes} = TitleInfos
    const imageURL = 'https://image.tmdb.org/t/p/w500' + poster_path
    console.log(useRouter().pathname)
    return (
        <>
            <Header />
            <Body
            title_id={id}
            title={title}
            overview={overview}
            poster_path={imageURL}
            release_date={release_date}
            Episodes={Episodes}
            />
        </>
    )
}


function Body({ title, poster_path, release_date, overview, Episodes, title_id }: MovieProps) {
    return (
        <div className="w-screen h-screen ">
            <div className={`h-screen mt-[88px]`}>
                <div className="h-full w-full bg-transparent">
                    <div className="flex flex-col h-full w-full justify-center items-center mt-16">
                        <main className="flex items-center gap-8 max-w-[850px] max-h-[330px] max-md:max-h-full  flex-col max-md:py-4">
                            <div className="flex items-center gap-4 max-md:flex-col">
                                <Image
                                    height={450}
                                    width={300}
                                    alt={'Poster da Série Stranger Things'}
                                    src={poster_path}
                                    className=' w-[300px]'
                                />
                                <div className="infos flex flex-col gap-2 max-md:px-4">
                                    <div className="flex justify-center">
                                        <h1 className="text-white-primary text-lg">
                                            {title}
                                        </h1>
                                        <h1 className="text-white-primary text-lg">({release_date})</h1>
                                    </div>
                                    <div className="description">
                                        <p className="text-white-primary text-md text-justify max-md:text-sm">
                                            <span className="max-md:text-sm">Visão Geral: </span>
                                            {overview}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        {/* {Episodes !== null ? createListToTVBody(Episodes, title_id) : ''} */}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

// function createListToTVBody(Episodes: [], title_id: number) {
//     const seaseons = Episodes
//     type SeaseonProps = {
//         air_date: string | null,
//         name: string,
//         episode_count: number,
//         season_number: number
//     }
//     function getEpisodesFromSeaseon(season_number: number, episode_count: number) {
//         const [EpisodesAll, setEpisodesAll] = useState<any>([])
//         useEffect(() => {
            
//             for (let i = 1; i <= episode_count; i++) {
//                 // console.log(episode_count)
//                 if(i === 1){setEpisodesAll([])}
//                 const url = `https://api.themoviedb.org/3/tv/${title_id}/season/${season_number}/episode/${i}?api_key=37515be8a40c641389533f4f4c0724ee&language=pt-BR`
//                 axios.get(url)
//                 .then((res) => { setEpisodesAll( (oldValues: any) => [...oldValues, res.data])})
//             }
//         }, [])
//         // ! Return each episode
//         return (
//             <>
//                 {EpisodesAll.map((data: {name: string, episode_number: number}, index: number)=>{
//                     if(index < episode_count && data.episode_number === index+1){
//                         // console.log(data)
//                         return (
//                             <li className="w-full text-white-primary mb-4 flex justify-between" key={index}>
//                                 <span>{data.name}</span>
//                                 <div className="flex items-center gap-4">
                                    
//                                     <Eye/>
//                                 </div>
//                             </li>
//                         )
//                     }
//                 })}
//             </>
//         )
//     }

//     // ! Return each seaseon 
//     return (
//         <>
//             {
//                 seaseons.map((seaseon: SeaseonProps) => {
//                     const isNotSeaseon = seaseon.air_date === null
//                     if (!isNotSeaseon) {
//                         console.log(seaseon)
//                         return (
//                             <ul className="w-full max-w-[850px] mt-16 max-md:px-4 mb-16 " key={seaseon.season_number}>
//                                 <Text className="text-white-primary text-center text-lg">
//                                     {seaseon.name}
//                                 </Text>
//                                 {getEpisodesFromSeaseon(seaseon.season_number, seaseon.episode_count)}
//                             </ul>
//                         )
//                     }

//                 })
//             }
//         </>
//     )
// }

    // const [PosterPath, setPosterPath] = useState('/stranger.jpg')
    // const [Overview, setOverview] = useState('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero accusantium deleniti adipisci sapiente magnam fugiat, atque repellendus suscipit blanditiis sed minima, ducimus assumenda, molestiae vitae numquam. Iure recusandae reprehenderit perferendis.')
    // const [Release_date, setRelease_date] = useState('2000-00-00')
    // const [Episodes, setEpisodes] = useState(null)

    // useEffect(() => {
    //     if(id){
    //         const titleTemp = localStorage.getItem('titleTemp')

    //         axios.get(movieurl)
    //         .then((res) => {
    //             const Moviedata = res.data
    //             if(Moviedata.title === titleTemp) {
    //                 setTitle(Moviedata.title)
    //                 setOverview(Moviedata.overview)
    //                 setPosterPath('https://image.tmdb.org/t/p/w500/' + Moviedata.poster_path)
    //             }else{
    //                 axios.get(tvurl)
    //                 .then((res) => {
    //                     const TVdata = res.data
    //                     if(TVdata.name === titleTemp) {
    //                         console.log(TVdata, titleTemp)    
    //                         setTitle(TVdata.name)
    //                         setOverview(TVdata.overview)
    //                         setPosterPath('https://image.tmdb.org/t/p/w500/' + TVdata.poster_path)
    //                     }
    //                 })
    //             }
    //         })
    //         .catch((err) => { 
    //             axios.get(tvurl)
    //             .then((res) => {
    //                 const TVdata = res.data
    //                 if(TVdata.name === titleTemp) {
    //                     console.log(TVdata, titleTemp)    
    //                     setTitle(TVdata.name)
    //                     setOverview(TVdata.overview)
    //                     setPosterPath('https://image.tmdb.org/t/p/w500/' + TVdata.poster_path)
    //                 }
    //             })
    //         })
    //     }
    // }, [id])
