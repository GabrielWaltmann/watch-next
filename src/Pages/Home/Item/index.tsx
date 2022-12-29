import { Table } from "flowbite-react";
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
        watched: <Eye className=" text-green-primary " height={'50px'} width={'50px'}/>,
        watch: <Eye className=" text-white-primary" height={'50px'} width={'50px'}/>
    }

    return(
        <Table.Row className="">
            <Table.Cell className="text-white-primary text-md flex items-center gap-8 content-center">
                <Image
                src={'/'+url}
                width={165}
                height={115}
                alt={'Poster ' + title}
                />
                <span>{title}</span>
            </Table.Cell>
            <Table.Cell className="text-center text-md">
                {SE?.season} / {SE?.episode}
            </Table.Cell>
            <Table.Cell >
                <div className="flex justify-center items-center text-md"> 
                    {watched ? eye.watched : eye.watch} 
                </div>
            </Table.Cell>

        </Table.Row>
    )
}