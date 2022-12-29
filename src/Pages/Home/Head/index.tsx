import { Table } from "flowbite-react";


export default function Head(){
    return (
        <Table.Head className="bg-gray-1 ">
            <Table.HeadCell className="text-sm text-white-primary text-left">
            Próximos da sua lista a assistir
            </Table.HeadCell>

            <Table.HeadCell className="text-sm text-white-primary text-center">
            Temporada / Episódio
            </Table.HeadCell>

            <Table.HeadCell className="text-sm text-white-primary text-center">
            Status
            </Table.HeadCell>
        </Table.Head>
    )
}