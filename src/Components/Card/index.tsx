import Image from "next/image";
import { type } from "os";
import { Eye } from "phosphor-react";

type ItemProps = {
    title: string,
    watched: boolean,
    SE?: {
        season: number,
        episode: number
    },
    url: string
}

export default function Item({title, watched, SE={season: 0, episode: 0}, url}: ItemProps){
    const eye = {
        watched: <Eye className="  text-green-primary " height={'60px'} width={'60px'}/>,
        watch: <Eye className=" text-white-primary" height={'60px'} width={'60px'}/>
    }

    return(
        <div className="text-white-primary p-2 grid grid-cols-6 justify-center justify-items-center items-center border-gray-2 border-2 rounded-lg">
            <div className="w-full">
                <Image
                alt={'poster from ' + title}
                width={320}
                height={480}
                src={'/'+url}
                className="w-full max-w-[120px] max-h-[280px]"
                />
            </div>

            <div className="col-span-4 h-full">
                <h5 className="text-sm font-semibol">
                    {title}
                </h5>
                <p className="text-justify text-xs w-2/3 text-gray-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cumque modi omnis, alias nesciunt repellendus quasi perspiciatis optio at iusto laboriosam ad ex voluptatibus est eos deleniti facere sapiente eligendi!
                </p>
                <div className="flex gap-4 mt-4">
                    <p className="text-xs font-normal text-gray-3">Temporada / Episodio: </p>
                    <p className="text-xs font-normal text-gray-3">SE{SE.season} / E{SE.episode}</p>
                </div>
            </div>

            <div className="flex flex-col justify-center -translate-y-4 text-center h-full items-center">
                <h3 className="3 font-normal text-xs text-gray-3">STATUS</h3>
                {watched ? eye.watched : eye.watch}
            </div>

        </div>
    )
}