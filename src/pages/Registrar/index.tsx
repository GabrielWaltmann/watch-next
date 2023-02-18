import Text from "../../components/Text";
import { Popcorn } from "phosphor-react";
import Button from "../../components/Button";
import Link from "next/link";
import Input from "../../components/Input";
import { useEffect, useState } from "react";
import { URL_DOMAIN } from "../../../env";
import axios from "axios";
import { Alert } from "flowbite-react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import nookies, { setCookie } from 'nookies'
import { ILogin } from "../../types/Login";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const user = nookies.get(context).user
    if (user) {
        const json = JSON.parse(user)
        return { props: { user: json } }
    }
    return { props: { user: null } } 
}

export default function Registrar({ user }: ILogin) {
    const router = useRouter()


    useEffect(() => { if (user) { router.push('app') } }, [user])
    return (
        <>
            <Alert color="failure" className="w-auto absolute top-16 right-24 x hidden noValue transition-transform duration-700 z-10">
                <span className="text-sm"> Informe um email e senha válidos! </span>
            </Alert>

            <Alert color="failure" className="w-auto absolute top-16 right-24 x hidden userExist transition-transform duration-700 z-10">
                <span className="text-sm"> Já existe um usuário com este email! </span>
            </Alert>

            <Head />

            <Form />
        </>
    )
}

function alert(type: 'noValue' | 'userExist') {
    const alert = document.querySelector("." + type)
    console.log(alert)
    alert ? alert.classList.remove('hidden') : null

    setTimeout(() => {
        alert ? alert.classList.add('hidden') : null
    }, 3000)
}


type UserProps = {
    username: String,
    email: String,
    password: string
    confirmPassword: String
}



function Head() {
    return (
        <div className="flex justify-center mb-6 items-center flex-col text-center">
            <Popcorn className="text-blue-primary h-16 w-16" />
            <Text className="text-lg font-bold text-white-primary max-sm:text-xm">
                Watch Next
            </Text>
            <Text className="text-md max-sm:text-sm text-white-primary">
                Crie sua conta e comece a diversão!
            </Text>
        </div>
    )
}

function Form() {
    const [passwordValue, setPasswordValue] = useState('')
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('')
    const router = useRouter()
    const [emailValue, setEmailValue] = useState('')
    const [usernameValue, setUsernameValue] = useState('')

    function Register({ username, email, password, confirmPassword }: UserProps) {
        const DB_URL = URL_DOMAIN

        if (password === '' || email === '' || username === '') { alert(`noValue`) }
        else if (email.indexOf('@') === -1 || email.indexOf('.com') === -1) { console.log('Informe um e-mail válido') }
        else if (password.length !== 8) { console.log('Informe uma senha válida') }
        else if (password !== confirmPassword) { console.log('As senhas devem ser iguais') }
        else {

            axios.post(`${DB_URL}user/register/`, {
                username: username,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                titles: []
            })
                .then(() =>
                    router.push('/Entrar')
                )
                .catch((err => {
                    if (err.response.data.msg === "Já existe um usuário com este email!") {
                        alert('userExist')

                    } else { console.log(err) }
                }))
        }

    }

    return (
        <form className=" flex flex-col">
            <div className="flex flex-col mb-3 gap-1">
                <label className="text-white-primary text-sm max-sm:text-xs">
                    Nome de usuário
                </label>
                <Input
                    setValue={setUsernameValue}
                    placeholder="Nome de exemplo"
                    type="username"
                />
            </div>

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

            <div className="flex flex-col mb-3 gap-1">
                <label className="text-white-primary text-sm max-sm:text-xs">
                    Confirme a senha
                </label>
                <Input
                    setValue={setConfirmPasswordValue}

                    placeholder="********"
                    type="password"
                />
            </div>

            <Button className='mb-6 py-4' onClick={(e: Event) => {
                e.preventDefault()
                Register({
                    username: usernameValue,
                    email: emailValue,
                    password: passwordValue,
                    confirmPassword: confirmPasswordValue
                })
            }}>
                Criar conta
            </Button>

            <div className="flex flex-col gap-1">
                <Link className="text-gray-3 underline text-sm max-sm:text-xs text-center" href={'/'}>Esqueceu sua senha?</Link>

            </div>
        </form>
    )
}