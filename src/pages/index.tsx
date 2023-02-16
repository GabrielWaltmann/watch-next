import Header from "../components/Header";
import { useRouter } from "next/router";
import Text from "../components/Text";
import Card from "./Descobrir/DiscoveryCard";
import { useEffect } from "react";
import axios from "axios";
export async function getStaticProps() {
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=37515be8a40c641389533f4f4c0724ee&language=pt-BR&page=1"
  try {
    const response = await axios.get(url);
    const titles = response.data.results;
    return {
      props: { datas: titles },
    };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
}



export default function Descobrir({ datas }: any) {

  
  const popularAllTitles = datas;
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
        <Text className="text-white-primary mt-16 text-left w-full mb-4">Descubra novas aventuras</Text>
        <ul className="grid grid-cols-5 grid-rows-4 gap-4 max-md:grid-cols-2 ">

          {
            popularAllTitles.map(({release_date, id, title, overview, poster_path}: MovieProps) => {
              const year = +release_date.slice(0, 4)
              const href = id.toString()
              const url = `https://image.tmdb.org/t/p/w500${poster_path}`;
              return (
                <Card
                type="tv"
                  overview={overview}
                  name={title}
                  poster_path={url}
                  release_date={year}
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