import axios from "axios";
import Content from "./Content";
import { useEffect,  useState } from "react";
import Header from "../../components/Header";
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from "next/router";
import { Spinner } from "flowbite-react";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
    const { id }: any = context.params;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=37515be8a40c641389533f4f4c0724ee&language=pt-BR`
    
    try {
        const result = await axios.get(url)
        const { data } = result;

        return { props: {
            data: data, 
            id
        } }
    } catch { 
        return { props: { id } }
    }
}

export default function Page({ data, id }: any) {
    const router = useRouter();

    if (router.isFallback) { return <Spinner aria-label="Default status example" />}

    const [TitleInfos, setTitleInfos] = useState({
        name: "",
        overview: "",
        poster_path: "",
        release_date: "",
        seasons: []
    })
    const {name, overview, poster_path, release_date, seasons} = TitleInfos
    const imageURL = 'https://image.tmdb.org/t/p/w500' + poster_path

    useEffect(()=> {(data) ? setTitleInfos(data): null} , [data])

    return (
        <>
            <Header />
            <Content
                title_id={id}
                title={name}
                overview={overview}
                poster_path={imageURL}
                release_date={release_date}
                seasons={seasons}
            />
        </>
    )
}

