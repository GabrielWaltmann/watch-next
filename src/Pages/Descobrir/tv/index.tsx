import Header from "../../../components/Header";
import Text from "../../../components/Text";
import Card from "../Card";

export async function getStaticProps(context: any) {
  const url = ` https://api.themoviedb.org/3/tv/popular?api_key=37515be8a40c641389533f4f4c0724ee&language=pt-BR&page=1`
  const getDatas = await fetch(url)
  const datas = await getDatas.json()
  console.log(datas)
  return { props: { datas } }
}
export default function Series({ datas }: any) {
  const popularTV = datas.results
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
    <Header/>
      <div className="min-h-screen w-full p-8 mt-8">
        <Text className="text-white-primary text-left w-full mb-4">Descubra novas Séries para você</Text>
        <ul className="grid grid-cols-5 grid-rows-4 gap-4">

          {
            popularTV.map((movie: TVProps) => {
              console.log(movie)
              const year = +movie.first_air_date.slice(0, 4)
              const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

              return (
                 <Card
                overview={movie.overview}
                href={movie.id}
                name={movie.name}
                poster_path={url}
                first_air_date={year}
                />
              )
            })
          }

        </ul>
      </div>
    </>
  )
}
