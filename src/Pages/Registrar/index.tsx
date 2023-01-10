import Text from "../../components/Text";
import { Popcorn, LockKey } from "phosphor-react";
import Button from "../../components/Button";
import Link from "next/link";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";

export default function Entrar(){

    return (
        <> 
            <Head />

            <Form />
        </>
    )
}

function Head(){
    return(
        <div className="flex justify-center mb-6 items-center flex-col text-center">
            <Popcorn className="text-blue-primary h-16 w-16"/>
            <Text className="text-lg font-bold text-white-primary max-sm:text-xm"> 
                Watch Next 
            </Text>
            <Text className="text-md max-sm:text-sm text-white-primary">
                Faça Login e comece a diversão!
            </Text>
        </div>
    )
}

function Form(){
    return (
        <form className=" flex flex-col">
            <div className="flex flex-col mb-3 gap-1">
                <label className="text-white-primary text-sm max-sm:text-xs">
                    Nome de usuário
                </label>
                <Input
                placeholder="Nome de exemplo"
                type="username"
                />
            </div>

            <div className="flex flex-col mb-3 gap-1">
                <label className="text-white-primary text-sm max-sm:text-xs">
                    Senha
                </label>
                <Input
                placeholder="********"
                type="password"
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

            <Button className='mb-6 py-4' >
                Criar conta
            </Button>

            <div className="flex flex-col gap-1">
                <Link className="text-gray-3 underline text-sm max-sm:text-xs text-center" href={'/'}>Esqueceu sua senha?</Link>
               
            </div>
        </form>
    )
}