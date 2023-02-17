import { Table } from "flowbite-react"
import { Eye } from "phosphor-react"
import { ITVEpisode } from "../../../../../types/MovieDB"

export default function Body({ list, season_number }: { list: ITVEpisode[], season_number: number }) {
    
    return (
        <>
            <Table.Body className="divide-y ">
                {list.map((TVEpisode: ITVEpisode) => {
                    if (season_number === 1) {
                        const {name, air_date} = TVEpisode
                        return (
                            <Table.Row className="bg-transparent w-full">
                                <Table.Cell className="whitespace-nowrap font-medium text-white-primary ">
                                    {name}
                                </Table.Cell>
                                <Table.Cell>
                                    {air_date}
                                </Table.Cell>
                                <Table.Cell>
                                    <Eye height={"60px"} width={"60px"} />
                                </Table.Cell>

                            </Table.Row>
                        )
                    }
                })}


            </Table.Body></>
    )
}