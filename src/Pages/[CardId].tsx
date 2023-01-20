import axios from "axios";
import Image from "next/image";
import { Eye } from "phosphor-react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Text from "../components/Text";

export function getStaticPaths() { return { paths: [], fallback: true } }

type Params = { params: { slug: string } }
export const getStaticProps: any = async ({ params }: Params) => {
    const { CardId }: any = params;

    return {
        props: { id: CardId }
    }

}

type MovieProps = {
    title_id: number,
    title: string,
    PosterPath: string,
    Release_date: string,
    Overview: string,
    Episodes: any
}

export default function CardId({ id }: any) {
    const [title, setTitle] = useState('Title')
    const [PosterPath, setPosterPath] = useState('/stranger.jpg')
    const [Overview, setOverview] = useState('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero accusantium deleniti adipisci sapiente magnam fugiat, atque repellendus suscipit blanditiis sed minima, ducimus assumenda, molestiae vitae numquam. Iure recusandae reprehenderit perferendis.')
    const [Release_date, setRelease_date] = useState('2000-00-00')
    const [Episodes, setEpisodes] = useState(null)
    const movieurl = `https://api.themoviedb.org/3/movie/${id}?api_key=37515be8a40c641389533f4f4c0724ee`
    const tvurl = `https://api.themoviedb.org/3/tv/${id}?api_key=37515be8a40c641389533f4f4c0724ee`

    useEffect(() => {
        if (id !== undefined) {
            axios.get(movieurl)
                .then((res) => {
                    const data = res.data
                    const titleTemp = localStorage.getItem('titleTemp')
                    if(titleTemp === data.name){
                        setTitle(data.title)
                        setPosterPath('https://image.tmdb.org/t/p/w500/' + data.poster_path)
                        setOverview(data.overview)
                        setRelease_date(data.release_date)
                    }else{
                        axios.get(tvurl)
                        .then((res) => {
                            localStorage.removeItem('titleTemp')
                            setTitle(res.data.name)
                            setPosterPath('https://image.tmdb.org/t/p/w500/' + res.data.poster_path)
                            setOverview(res.data.overview)
                            setRelease_date(res.data.first_air_date)
                            setEpisodes(res.data.seasons)
                        })
                        .catch((err) => { })
                    }
                })
                .catch((err) => {
                    axios.get(tvurl)
                        .then((res) => {
                            // console.log(res.data)
                            setTitle(res.data.name)
                            setPosterPath('https://image.tmdb.org/t/p/w500/' + res.data.poster_path)
                            setOverview(res.data.overview)
                            setRelease_date(res.data.first_air_date)
                            setEpisodes(res.data.seasons)
                        })
                        .catch((err) => { })
                })
        }
    }, [id])

    return (<>
        <Header />
        <Body
        title_id={id}
            title={title}
            Overview={Overview}
            PosterPath={PosterPath}
            Release_date={Release_date}
            Episodes={Episodes}
        />
    </>)
}

function Body({ title, PosterPath, Release_date, Overview, Episodes, title_id }: MovieProps) {
    return (
        <div className="w-screen h-screen ">
            <div className={`h-screen mt-[88px]`}>
                <div className="h-full w-full bg-transparent">
                    <div className="flex flex-col h-full w-full justify-center items-center mt-16">
                        <main className="flex items-center gap-8 max-w-[850px] max-h-[330px] max-md:max-h-full  max-md:flex-col max-md:py-4">
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
                        {Episodes !== null ? createListToTVBody(Episodes, title_id) : ''}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

function createListToTVBody(Episodes: [], title_id: number) {
    const seaseons = Episodes
    const [EpisodesAll, setEpisodesAll] = useState<any>([])
    type SeaseonProps = {
        air_date: string | null,
        name: string,
        episode_count: number,
        season_number: number
    }
    function getEpisodesFromSeaseon(season_number: number, episode_count: number) {

        useEffect(() => {

            for (let i = 1; i <= episode_count; i++) {

                const url = `https://api.themoviedb.org/3/tv/${title_id}/season/${season_number}/episode/${i}?api_key=37515be8a40c641389533f4f4c0724ee&language=pt-BR`
                axios.get(url)
                .then((res) => {
                        console.log(i)
                        setEpisodesAll( (oldValues: any) => [...oldValues, res.data]);

                })
                
            }
            
        }, [])
        // ! Return episodes
        return (
            <>
                {EpisodesAll.map((data: {name: string, episode_number: number}, index: number)=>{
                    if(index < episode_count){
                    console.log(data)

                        return <li className="w-full text-white-primary mb-4 flex justify-between">
                            <span>{data.name}</span>
                            <div className="flex items-center gap-4">
                                <span>{data.episode_number}</span>
                                <Eye/>
                            </div>
                        </li>
                    }
                })}
            </>
        )
    }


    // ! Return seaseon
    return (
        <>
            {
                seaseons.map((seaseon: SeaseonProps) => {
                    const isNotSeaseon = seaseon.air_date === null
                    if (!isNotSeaseon) {
                        // console.log(seaseon)
                        return (
                            <ul className="w-full max-w-[850px] mt-16 max-md:px-4 mb-16 ">
                                <Text className="text-white-primary text-center text-lg">
                                    {seaseon.name}
                                </Text>
                                {getEpisodesFromSeaseon(seaseon.season_number, seaseon.episode_count)}
                            </ul>
                        )
                    }

                })
            }
        </>
    )
}