import Text from "../../components/Text";
import { Popcorn, LockKey } from "phosphor-react";
import Button from "../../components/Button";
import Link from "next/link";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import { useState } from "react";
import axios from "axios";
import { URL_DOMAIN } from "../../../env";

export default function Entrar() {
    return (
        <>
            <Head />

            <Form />
        </>
    )
}
type UserProps = {
    username: String,
    email: String,
    password: string
    confirmPassword: String
}

function Register({ username, email, password, confirmPassword }: UserProps) {
    const DB_URL = URL_DOMAIN

    if (password === '' || email === '' || username === '') { console.log('Nome, email e senha são obrigatórios!') }
    else if (email.indexOf('@') === -1 || email.indexOf('.com') === -1) { console.log('Informe um e-mail válido') }
    else if (password.length !== 8) { console.log('Informe uma senha válida') }
    else if (password !== confirmPassword) { console.log('As senhas devem ser iguais') }
    else {

        axios.post(`${DB_URL}auth/register/`, {
            username: username,
            email: email,
            password: password,
            confirmPassword: password,
            titles: []
        })
            .then(res => {
                console.log(res)
                window.location.href = '/Entrar'
            })
            .catch((err => console.log(err)))
    }

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
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [usernameValue, setUsernameValue] = useState('')

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

            <Button className='mb-6 py-4' onClick={(e: Event)=> {
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