import { Table } from "flowbite-react";

export default function Head({name}: {name:string}){
    return (<>
    <Table.Head className="bg-transparent">
                            <Table.HeadCell className="text-white-primary">
                                {name}
                            </Table.HeadCell>
                            <Table.HeadCell className="text-white-primary">
                                Data de lançamento
                            </Table.HeadCell>
                            <Table.HeadCell className="text-white-primary">
                                Status
                            </Table.HeadCell>

                        </Table.Head>
    </>)
}