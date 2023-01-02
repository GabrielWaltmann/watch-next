import Text from "../../../Components/Text/Index";
import Card from "../Card";

export default function Filmes() {
    return (
        <div className="min-h-screen text-left w-full px-20">
            <Text className="text-white-primary font-bold pt-8 text-md">Descubra novos filmes para você</Text>
            <ul className="grid grid-cols-4 gap-4 p-4 pl-0 items-center justify-items-center">
                <Card
                    href="Movie"
                    title="Avenger"
                    url="avengers.jpg"
                    year={2019}
                />
                <Card
                    href="Movie"
                    title="Strangers Things"
                    url="stranger.jpg"
                    year={2017}
                />
                <Card
                    href="Movie"
                    title="Avatar: The way of wather"
                    url="avatar.jpg"
                    year={2022}
                />
                <Card
                    href="Movie"
                    title="Pokemon"
                    url="pokemon.jpg"
                    year={2018}
                />
                <Card
                    href="Movie"
                    title="Pokemon"
                    url="pokemon.jpg"
                    year={2018}
                />
                <Card
                    href="Movie"
                    title="Pokemon"
                    url="pokemon.jpg"
                    year={2018}
                />

                <Card
                    href="Movie"
                    title="Pokemon"
                    url="pokemon.jpg"
                    year={2018}
                />
                <Card
                    href="Movie"
                    title="Pokemon"
                    url="pokemon.jpg"
                    year={2018}
                />  
                <Card
                    href="Movie"
                    title="Pokemon"
                    url="pokemon.jpg"
                    year={2018}
                />  
                <Card
                    href="Movie"
                    title="Pokemon"
                    url="pokemon.jpg"
                    year={2018}
                />  
                <Card
                    href="Movie"
                    title="Pokemon"
                    url="pokemon.jpg"
                    year={2018}
                />  
                <Card
                    href="Movie"
                    title="Pokemon"
                    url="pokemon.jpg"
                    year={2018}
                />
            </ul>
        </div>
    )
}