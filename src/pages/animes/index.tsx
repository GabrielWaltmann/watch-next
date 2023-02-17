import Header from "../../components/Header";
import Text from "../../components/Text";
import { IAnimeCard } from "../../types/Content";
import Card from "../Descobrir/DiscoveryCard";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (context) =>{
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=37515be8a40c641389533f4f4c0724ee&language=pt-BR&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=death`
  const getDatas = await fetch(url)
  const datas = await getDatas.json()

  return { props: { results: datas.results } }
}

export default function Animes( results: IAnimeCard[]) {

  const popularAnimes = results
  return (
    <>
      <Header />
      <div className="min-h-screen w-full p-8 mt-32">
        <Text className="text-white-primary text-left w-full mb-4">Descubra novos Filmes</Text>
        <ul className="grid grid-cols-5 grid-rows-4 gap-4 max-md:grid-cols-2 ">

          {
            popularAnimes.map((datas: IAnimeCard) => {
              const {overview, id, title, release_date, poster_path} = datas
              const year = +release_date.slice(0, 4).toString
              const url = `https://image.tmdb.org/t/p/w500${poster_path}`;
              const type = "movies"

              return (
                <Card
                title={title}
                first_air_date={release_date}
                  id={id}
                  type={type}
                  href={type+"/"+id}
                  overview={overview}
                  name={title}
                  poster_path={url}
                  release_date={year.toString()}
                />
              )
            })
          }

        </ul>
      </div>
    </>
  );
}