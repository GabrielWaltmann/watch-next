import Image from "next/image";
import EpisodesList from "./EpisodesList";
import {ITVProps} from '../../../types/MovieDB'

export default function Content(props: ITVProps) {
    const { title, poster_path, last_air_date, overview, seasons, title_id } = props

    return (

        <main className="pt-[88px] text-center mx-[20%]">
            <section className="">
                <Image
                    height={450}
                    width={300}
                    alt={'Poster da Série Stranger Things'}
                    src={poster_path}
                    className="mx-auto"
                />
                <div className="py-4 flex flex-col gap-4 text-white-primary">
                    <div className="">
                        <h1 className="text-lg">
                            {title}
                        </h1>
                        <h1 className="">({last_air_date})</h1>
                    </div>
                    <div className="">
                        <p className="text-md">
                            <span className="">Visão Geral: </span>
                            {overview}
                        </p>
                    </div>
                </div>
            </section>
            
            <EpisodesList
                seasons={seasons}
                title_id={title_id}
            />
        </main>

    )
}