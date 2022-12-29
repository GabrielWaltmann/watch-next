import { Table } from "flowbite-react";
import Header from "../../Components/Header";
import Head from "./Head";
import Item from "./Item";

export default function Home(){
    return (
        <div className="min-h-screen">
            <Header />

            <section className="relative w-full my-16 px-8 ">
                    <Table className="bg-transparent ">
                        <Head/>
                        
                        <Table.Body className="divide-y ">
                            <Item
                            title="Avengers"
                            watched={false}
                            url={'avengers.jpg'}
                            />
                            <Item
                            title="Avatar"
                            watched={false}
                            url={'avatar.jpg'}
                            />
                            <Item
                            title="Stranger Things"
                            watched={false}
                            url={'stranger.jpg'}
                            />
                            <Item
                            title="Pokemon"
                            watched={true}
                            url={'pokemon.jpg'}
                            />

                        </Table.Body>
                    </Table>
            </section>
        </div>
    )
}


