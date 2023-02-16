import axios from "axios";
import Header from "../../components/Header";
import Text from "../../components/Text";
import Card from "../Descobrir/DiscoveryCard";

export async function getStaticProps() {
  const url = ` https://api.themoviedb.org/3/tv/popular?api_key=37515be8a40c641389533f4f4c0724ee&language=pt-BR&page=1`

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

export default function Series({ datas }: any) {
  console.log(datas)
  const popularTV = datas
  type TVProps = {
    name: string,
    backdrop_path: string,
    poster_path: string,
    first_air_date: string,
    id: number,
    overview: string
  }

  return (
    <>
      <Header />

      <div className="min-h-screen w-full p-8 mt-32">
        <Text className="text-white-primary text-left w-full mb-4">Descubra novas Séries para você</Text>
        <ul className="grid grid-cols-5 grid-rows-4 gap-4 max-md:grid-cols-2 ">

          {
            popularTV.map((datas: TVProps) => {
              const {overview, id, name, first_air_date, poster_path} = datas
              const year = +first_air_date.slice(0, 4)
              const url = `https://image.tmdb.org/t/p/w500${poster_path}`;
              const type = "tv"
              return (
                <Card
                  type={type}
                  overview={overview}
                  href={type+"/"+id}
                  name={name}
                  poster_path={url}
                  release_date={year}
                />
              )
            })
          }

        </ul>
      </div>
    </>
  )
}
