import Text from "../../Components/Text/Index";
import Item from "./Card";

export default function Home(){
    return (
        <div className="w-screen min-h-screen">

           <div className="w-full px-32 py-16 flex flex-col gap-4">
                <Text className="text-white-primary text-lg font-bold pl-4">Assistir a seguir</Text>

                <Item
                title="Stranger Thigns"
                url="stranger.jpg"
                SE={{episode: 8, season:3}}
                watched={false}
                />
               
               <Item
                title="Avenger"
                url="avengers.jpg"
                watched={true}
                />

                
                <Item
                title="Avatar"
                url="avatar.jpg"
                SE={{episode: 0, season:0}}
                watched={false}
                />

                
                <Item
                title="Pokemon: The Movie"
                url="pokemon.jpg"
                SE={{episode: 0, season:0}}
                watched={true}
                />
            </div>
          
        </div>
    )
}


