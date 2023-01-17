import Header from "../../../components/Header";
import Text from "../../../components/Text";
import Card from "../Card";
export async function getStaticProps(context: any) {
    const url = ` https://api.themoviedb.org/3/movie/popular?api_key=37515be8a40c641389533f4f4c0724ee&language=pt-BR&page=2`
    const getDatas = await fetch(url)
    const datas = await getDatas.json()

    return { props: { datas } }
}

export default function Movies({datas}: any) {
  const popularMovies = datas.results
  type MovieProps = {
    title: string,
    backdrop_path: string,
    poster_path: string,
    release_date: string,
    id: number,
    overview: string
  }
  return (
    <>
    <Header/>
    <div className="min-h-screen w-full p-8 mt-8">
        <Text className="text-white-primary text-left w-full mb-4">Descubra novos Filmes</Text>
        <ul className="grid grid-cols-5 grid-rows-4 gap-4">
        
          {
            popularMovies.map((movie: MovieProps) => {
              console.log(movie)
              const year = +movie.release_date.slice(0,4)
              const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

              return (
                <Card
                overview={movie.overview}
                href={movie.id}
                name={movie.title}
                poster_path={url}
                year={year}
                />
              )
            })
          }
            
        </ul>
    </div>
    </>
  );
}