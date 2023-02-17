import axios from "axios"
import { Table } from "flowbite-react"
import { Eye } from "phosphor-react"
import { useEffect, useState } from "react"
import { ISearchMovie, ISearchTV, ITVEpisode } from "../../../../types/MovieDB"
import Body from "./Body"
import Head from "./Head"


export default function EpisodesList({ seasons, title_id }: {seasons: ITVEpisode[], title_id: number}) {

    const [Episodes, setEpisodes] = useState<ITVEpisode[]>([{
        id: 0,
        name: "",
        overview: "",
        episode_number: 0,
        still_path: "",
        air_date: "",
        season_number: 1
    }])
    async function getEpisodesForSeason(tvId: number, seasonNumber: number) {
        axios.get(`https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}?api_key=37515be8a40c641389533f4f4c0724ee&language=pt-BR`)
            .then(({ data }) => {
                const { episodes } = data
                if (episodes.length !== Episodes.length) { setEpisodes(episodes) }
            })
    }

    return (
        <>
            {seasons.map(({ name, season_number }) => {

                getEpisodesForSeason(title_id, 1)
                if (season_number !== 0) {


                    return (<Table className="" key={season_number}>
                        <Head
                            name={name}
                        />
                        <Body
                            list={Episodes}
                            season_number={season_number}
                        />
                    </Table>
                    )
                }
            })}
        </>
    )

}