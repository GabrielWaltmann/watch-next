import { Table } from "flowbite-react"
import { Eye } from "phosphor-react"

export default function Body({list, season_number}: {list: any[], season_number: number}){
    return (
        <>
        <Table.Body className="divide-y ">
                            {list.map((t) => {
                                if(season_number === 1){

                                    return (
                                        <Table.Row className="bg-transparent w-full">
                                            <Table.Cell className="whitespace-nowrap font-medium text-white-primary ">
                                                {t.name}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {t.air_date}
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