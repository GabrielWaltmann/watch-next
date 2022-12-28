import Text from "../../Components/Text/Index";
import Input from "../../Components/Input";
import { Popcorn } from "phosphor-react";
import Checkbox from "../../Components/Checkbox/Index";
import Button from "../../Components/Button/Index";
import Link from "next/link";

export default function Login(){
    return (
        <>
            <Header />
            
            <Form />
        </>
    )
}

function Header(){
    return(
        <header className="flex justify-center mb-6 items-center flex-col text-center">
            <Popcorn className="text-blue-primary h-16 w-16" />
            <Text className="text-lg font-bold text-white-primary max-sm:text-xm"> 
                Watch Next 
            </Text>
            <Text className="text-md max-sm:text-sm text-white-primary">
                Faça Login e comece a diversão!
            </Text>
        </header>
    )
}

function Form(){
    return (
        <form className=" flex flex-col">
            <div className="flex flex-col mb-3 gap-1">
                <label className="text-white-primary text-sm max-sm:text-xs">
                    Endereço de E-mail
                </label>
                <Input
                placeholder="exemple@hotmail.com"
                type="email"
                />
            </div>
            
            <div className="flex flex-col mb-3 gap-1">
                <label className="text-white-primary text-sm max-sm:text-xs">
                    Endereço de E-mail
                </label>
                <Input
                placeholder="exemple@hotmail.com"
                type="password"
                />
            </div>

            <Checkbox className='mb-3'>
                Lembrar de mim por 30 dias
            </Checkbox>

            <Button className='mb-6 py-4' >
                Entrar na plataforma
            </Button>

            <div className="flex flex-col gap-1">
                <Link className="text-gray-800 underline text-sm max-sm:text-xs text-center" href={'/'}>Esqueceu sua senha?</Link>
                <Link className="text-gray-800 underline text-sm text-center max-sm:text-xs" href={'/'}>Não possui conta? Crie uma agora!</Link>
            </div>
        </form>
    )
}