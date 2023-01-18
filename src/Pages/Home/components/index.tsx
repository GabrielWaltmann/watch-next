import { Eye } from "phosphor-react"

export type CardProps = {
    name: string
    overview: string
    SE?: {season: number, episode: number}
    poster_path: string,
    id: number,
    watched: Boolean
}

export const Card = ({name, overview, SE={season: 0, episode: 0}, poster_path, watched}:CardProps) => {
    const eye = {
        watched: <Eye className="  text-green-primary " height={'60px'} width={'60px'}/>,
        watch: <Eye className=" text-white-primary" height={'60px'} width={'60px'}/>
    }
    return (
        <>
        <div className="text-white-primary p-2 max-sm:p-1 grid grid-cols-6 justify-center justify-items-center items-center border-gray-2 border-2 rounded-lg">
            <div className="w-full">
                <img
                    alt={'Poster from ' + name}
                    width={320}
                    height={480}
                    src={poster_path}
                    className="w-full max-w-[120px] max-h-[280px]"
                />
            </div>

            <div className="col-span-3 h-full max-sm:p-1 ml-4">
                <h5 className="text-sm max-sm:text-xs max-sm:font-bold font-semibol">
                    {name}
                </h5>
                <p className="text-justify text-xs w-full max-sm:w-full  text-gray-3 ">
                    {overview}
                </p>
                <div className="flex gap-4 mt-4">
                    <p className="text-xs font-normal text-gray-3">Temporada / Episodio: </p>
                    <p className="text-xs font-normal text-gray-3">SE{SE.season} / E{SE.episode}</p>
                </div>
            </div>

            <div className="flex col-span-2 flex-col justify-center  text-center h-full items-center w-full ml-4">
                <h3 className="3 font-normal text-xs text-gray-3">OPTIONS</h3>
                <div className="flex gap-4">
                    {watched ? eye.watched : eye.watch}
                    <img src="trash.svg" alt="delete title from your list" />
                </div>
            </div>

        </div>
        </>
    )
}