import Text from "../../components/Text";
import { Popcorn } from "phosphor-react";
import Button from "../../components/Button";
import Link from "next/link";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import axios from 'axios'
import { signIn, } from 'next-auth/react'
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { URL_DOMAIN } from "../../../env";
import { Alert } from "flowbite-react";

async function Login(email: string, password: string) {
    const DB_URL = `${URL_DOMAIN}user/login/`

    if (password === '' || email === '') {
        alert('invalidUser')
    }
    else if (email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
        alert('invalidUser')
    }
    else if (password.length !== 8) { console.log('Informe uma senha válida') }
    else {
        axios.post(DB_URL, {
            email: email,
            password: password
        })
            .then(async res => {
                localStorage.setItem('id', res.data.id)
                localStorage.setItem('token', res.data.token)
                console.log(localStorage.getItem('token'))

                await signIn('credentials', {
                    email: res.data.email,
                    password: password
                }).then(() => {
                    const router = useRouter()
                    const { status } = useSession()
                    if (status === 'authenticated') {
                        router.push("/Home")
                    }
                })
            })
            .catch((err => alert('userNoExist')))
    }
}

function alert(type: 'userNoExist' | 'invalidUser') {
    const alert = document.querySelector("." + type)
    console.log(alert)
    alert ? alert.classList.remove('hidden') : null

    setTimeout(() => {
        alert ? alert.classList.add('hidden') : null
    }, 3000)
}

export default function Entrar() {
    const router = useRouter()
    const { status } = useSession()
    if (status === 'authenticated') {
        router.push("/Home")
    }

    return (
        <>
            <Alert color="failure" className="w-auto absolute top-16 right-24 x hidden userNoExist transition-transform duration-700 z-10">
                <span className="text-sm"> Usuario não encontrado! </span>
            </Alert>

            <Alert color="failure" className="w-auto absolute top-16 right-24 x hidden invalidUser transition-transform duration-700 z-10">
                <span className="text-sm"> Informe um email e senha válidos! </span>
            </Alert>

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

            <Button className='mb-6 py-4' onClick={async (e: any) => {
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