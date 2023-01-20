import axios from "axios";
import { Alert } from "flowbite-react";
import { X } from "phosphor-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Header from "../../components/Header";
import Card, {TitleProps} from "./Card";

export default function Pesquisar() {
    const [value, setValue] = useState('')
    const [MovieResults, setMovieResults] = useState<any>([])
    const [TVResults, setTVResults] = useState<any>([])

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

            {/* input */}
            <div className="pt-16 pb-8 w-5/6">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input type="search" id="search" onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                    " placeholder="Digite um filme, série ou anime ...." required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => searchTitle(value)}>Search</button>
                </div>
            </div>

            <ul className="grid grid-cols-5 grid-rows-4 gap-4">
                {MovieResults.map((result: any) =>{
                    const url = `https://image.tmdb.org/t/p/w500${result.poster_path}`;

                    return (
                        <Card 
                        href={result.id}
                        name={result.title ? result.title :result.name}
                        overview={result.overview}
                        poster_path={url}
                        first_air_date={result.release_date ? result.release_date : result.first_air_date}
                        />
                    )
                })}
                {TVResults.map((result: any) =>{
                    const url = `https://image.tmdb.org/t/p/w500${result.poster_path}`;

                    return (
                        <Card 
                        href={result.id}
                        name={result.title ? result.title :result.name}
                        overview={result.overview}
                        poster_path={url}
                        first_air_date={result.release_date ? result.release_date : result.first_air_date}
                        />
                    )
                })}
            </ul>
        </>

    )
}

