import axios from "axios";
import { Alert } from "flowbite-react";
import { ChangeEvent, useState } from "react";
import Header from "../../components/Header";
import { ICard } from "../../types/DiscoveryList";
import Card from "./DiscoveryCard";

export default function Descobrir() {
    const [value, setValue] = useState('')
    const [MovieResults, setMovieResults] = useState([])
    const [TVResults, setTVResults] = useState([])

    function searchTitle(value: string) {
        function alert() {
            const alert = document.querySelector('.notFound')

            alert ? alert.classList.add('opacity-100') : null

            setTimeout(() => { alert ? alert.classList.remove('opacity-100') : null }, 3000)
        }
        if (value === '') { return alert() }

        const valueFormated = value.replace(' ', '+')
        const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=37515be8a40c641389533f4f4c0724ee&language=pt-BR&query=${valueFormated}`
        const TVUrl = `https://api.themoviedb.org/3/search/tv?api_key=37515be8a40c641389533f4f4c0724ee&language=pt-BR&query=${valueFormated}`
        axios.get(movieUrl)
            .then((res) => {
                const data = res.data
                const result = data.results
                setMovieResults(result)
            })
        axios.get(TVUrl)
            .then((res) => {
                const data = res.data
                const result = data.results
                setTVResults(result)
            })
    }


    return (
        <>
            <Header />

            <Alert color="failure" className="w-auto absolute bottom-16 right-24 x opacity-0 notFound transition-all duration-150 z-10">
                <span className="text-sm"> Informe um filme, série ou anime validos! </span>
            </Alert>

            <div className="pt-16 gap-5 mt-16 pb-8 w-5/6 flex items-center ">

                <input type="search" id="search" onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} className=" max-md:w-2/3 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                    " placeholder="Digite um filme, série ou anime ...." required />
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => searchTitle(value)}>Search</button>

            </div>

            <ul className="grid grid-cols-5 grid-rows-4 gap-4 max-md:grid-cols-2">
                {MovieResults.map((datas: ICard) => {
                    const { id, title, overview, release_date, first_air_date, poster_path } = datas
                    const url = `https://image.tmdb.org/t/p/w500${poster_path}`;

                    return (
                        <Card
                            href={"/movies/"+id}
                            name={title}
                            title={title}
                            overview={overview}
                            poster_path={url}
                            release_date={release_date}
                            first_air_date={first_air_date}
                            type={"movies"}
                            id={id}
                        />
                    )
                })}
                {TVResults.map((datas: ICard) => {
                    const { id, name, overview, release_date, first_air_date, poster_path } = datas
                    const url = `https://image.tmdb.org/t/p/w500${poster_path}`;

                    return (
                        <Card
                            href={"/tv/"+id}
                            name={name}
                            title={name}
                            overview={overview}
                            poster_path={url}
                            release_date={release_date}
                            first_air_date={first_air_date}
                            type={"tv"}
                            id={id}
                        />
                    )
                })}
            </ul>
        </>

    )
}

