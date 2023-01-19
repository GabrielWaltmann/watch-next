import Header from "../components/Header";
import { useRouter } from "next/router";
import Text from "../components/Text";
import Card from "./Descobrir/Card";
import { SessionProvider } from "next-auth/react";
import { useSession } from 'next-auth/react'
import { useEffect } from "react";
export async function getStaticProps(context: any) {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=37515be8a40c641389533f4f4c0724ee&language=pt-BR&page=1`
  const getDatas = await fetch(url)
  const datas = await getDatas.json()

  return { props: { datas } }
}

export default function Descobrir({ datas }: any) {

  const popularAllTitles = datas.results;
  type MovieProps = {
    title: string,
    backdrop_path: string,
    poster_path: string,
    release_date: string,
    overview: String
    id: number
  }
  return (
    <>
      <Header />
      <div className="min-h-screen w-full p-8 mt-8">
        <Text className="text-white-primary text-left w-full mb-4">Descubra novas aventuras</Text>
        <ul className="grid grid-cols-5 grid-rows-4 gap-4">

          {
            popularAllTitles.map((movie: MovieProps) => {
              const year = +movie.release_date.slice(0, 4)
              const href = movie.id.toString()
              const title = movie.title
              const overview = movie.overview
              const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
              console.log(movie)

              return (
                <Card
                  overview={overview}
                  name={title}
                  poster_path={url}
                  year={year}
                  href={href}
                  key={title}
                />
              )
            })
          }

        </ul>
      </div>
    </>
  );
} 