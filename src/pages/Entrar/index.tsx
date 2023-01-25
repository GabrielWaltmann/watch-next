import Text from "../../components/Text";
import { Popcorn } from "phosphor-react";
import Button from "../../components/Button";
import Link from "next/link";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import axios from 'axios'
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import { URL_DOMAIN } from "../../../env";
import { Alert } from "flowbite-react";

function Login(email: string, password: string) {

    axios.post(`${URL_DOMAIN}user/login`, {
        email: email,
        password: password
    })
        .then((res) => {
            const data = res.data
            const user = {
                email: data.email,
                id: data.id,
                token: data.token
            }
            localStorage.setItem('session', JSON.stringify(user))
    
            window.location.href = ('/Home')
        }).catch((err) => {
            console.log(err)
        })
}

export default function Entrar() {
    const router = useRouter()
    const getSession = () => {
        const session = localStorage.getItem('session')
        if (session) {
            const json = JSON.parse(session)
            return (json)
        }
        return null
    }

    useEffect(() => {
        if (getSession()) {
            router.push('/Home')
        }
    }, [])

    return (
        <>
            <Head />

            <Form />
        </>
    )
}

function Head() {
    return (
        <div className="flex justify-center mb-6 items-center flex-col text-center">
            <Popcorn className="text-blue-primary h-16 w-16" />
            <Text className="text-lg font-bold text-white-primary max-sm:text-xm">
                Watch Next
            </Text>
            <Text className="text-md max-sm:text-sm text-white-primary">
                Faça Login e comece a diversão!
            </Text>
        </div>
    )
}

function Form() {
    const [passwordValue, setPasswordValue] = useState('')
    const [emailValue, setEmailValue] = useState('')

    return (
        <form className=" flex flex-col" method="post" action="/api/auth/signin/email">
            <div className="flex flex-col mb-3 gap-1">
                <label className="text-white-primary text-sm max-sm:text-xs">
                    Endereço de E-mail
                </label>
                <Input
                    setValue={setEmailValue}
                    placeholder="exemple@hotmail.com"
                    type="email"
                />
            </div>

            <div className="flex flex-col mb-3 gap-1">
                <label className="text-white-primary text-sm max-sm:text-xs">
                    Senha
                </label>
                <Input
                    setValue={setPasswordValue}
                    placeholder="********"
                    type="password"
                />
            </div>

            <Checkbox className='mb-3'>
                Lembrar de mim por 30 dias
            </Checkbox>

            <Button className='mb-6 py-4' onClick={(e: any) => {
                e.preventDefault()
                Login(emailValue, passwordValue)

            }}>
                Entrar na plataforma
            </Button>

            <div className="flex flex-col gap-1">
                <Link className="text-gray-3 underline text-sm max-sm:text-xs text-center" href={'/'}>Esqueceu sua senha?</Link>
                <Link className="text-gray-3 underline text-sm text-center max-sm:text-xs" href={'/Registrar'}>Não possui conta? Crie uma agora!</Link>
            </div>
        </form>
    )
}