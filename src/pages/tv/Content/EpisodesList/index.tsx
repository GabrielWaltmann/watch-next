import axios from "axios"
import { Table } from "flowbite-react"
import { Eye } from "phosphor-react"
import { useEffect, useState } from "react"
import Body from "./Body"
import Head from "./Head"

type Episodes = {
    seasons: any[],
    title_id: number
}

export default function EpisodesList({ seasons, title_id }: Episodes) {
    let list: any[] = [{
                id: "",
                name: "",
                overview: "",
                episode_number: "",
                still_path: "",
                air_date: "",
            }]
    const [Episodes, setEpisodes] = useState(list)
    async function getEpisodesForSeason(tvId: number, seasonNumber: number) {
        axios.get(`https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}?api_key=37515be8a40c641389533f4f4c0724ee&language=pt-BR`)
        .then(({data})=>{
            	const {episodes } = data
                if(episodes.length !== Episodes.length) {setEpisodes(episodes)}
      
        })
    }

    return (
        <>
            {seasons.map(({ name, season_number }) => {

                getEpisodesForSeason(title_id, 1)
              
                if(season_number !== 0){
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