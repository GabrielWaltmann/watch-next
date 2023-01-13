import { Spinner } from "flowbite-react";
import Header from "../../components/Header";
import Text from "../../components/Text";
import { getTokenOnLocalStorage } from "../Entrar";
import Item from "./Card";

export default function List(){
    
    if(getTokenOnLocalStorage() === ''){
        try{
            // window.location.href = '/Entrar'
        }catch{}
    }

    return (
        <>
            <Header />
            <div className="w-screen min-h-screen">

            <div className="w-full px-32 py-16 flex flex-col gap-4 max-sm:py-4 max-md:px-4">
                <Text className="text-white-primary text-lg font-bold pl-4 max-sm:pl-0">Assistir a seguir</Text>

                <div className="w-full justify-center items-center mt-16 flex gap-4">
                    <Spinner aria-label="Default status example" />
                    <Text className="text-white-primary" >Carregando sua lista...</Text>
                </div>
{/*                 <Item
                    title="Stranger Thigns"
                    url="stranger.jpg"
                    SE={{episode: 8, season:3}}
                    watched={false}
                    /> 
*/}
                </div>
            
            </div>
        </>
    )
}


