import { Spinner } from "flowbite-react";
import Header from "../../components/Header";
import Text from "../../components/Text";
import { getTokenOnLocalStorage } from "../Entrar";
import Item from "./Card";
export function clearTokenOnLocalStorage(){
    try{localStorage.setItem('token', '')}catch{}
    try{localStorage.setItem('email', '')}catch{}
    try{localStorage.setItem('id', '')}catch{}
}

export default function List(){
    try{

        console.log(localStorage.getItem('id'))
    }catch{}
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
                <div className="text-white-primary text-lg font-bold pl-4 max-sm:pl-0 flex justify-between">
                    Assistir a seguir
                    <button className="border-gray-2 border px-2 rounded" onClick={()=>{
                        clearTokenOnLocalStorage()
                        try{window.location.href = '/Entrar'}catch{}
                    }}>Sair</button>
                    </div>

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


