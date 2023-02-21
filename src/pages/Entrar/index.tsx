import Text from "../../components/Text";
import { Popcorn } from "phosphor-react";
import Button from "../../components/Button";
import Link from "next/link";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import axios from 'axios'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { URL_DOMAIN } from "../../../env";
import { ILogin, ICredencials } from '../../types/Login'
import nookies, { setCookie } from "nookies";
import { GetServerSideProps } from "next";
import { IUser } from "../../types/User";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const user = nookies.get(context).user
    if (user) {
        const json = JSON.parse(user)
        return { props: { user: json } }
    }
    return { props: { user: null } } 
}

export default function Entrar({ user }: ILogin) {
    const router = useRouter()

    useEffect(() => { if (user) { router.push('App') } }, [user])

    return (
        <>
            <Head />

            <Form user={user}/>
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

function Form({user}:{user: IUser}) {
    const [passwordValue, setPasswordValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const router = useRouter()

    async function Login({ email, password }: ICredencials) {

        axios.post(`${URL_DOMAIN}user/login`, {
            email: email,
            password: password
        })
            .then(({ data }) => {
                const { email, id, token } = data
                const user = {
                    email: email,
                    id: id,
                    token: token
                }
                setCookie(null, 'user', JSON.stringify(user), {
                        path: '/',
                        maxAge: 86400 * 30
                })
                router.push("App")

            }).catch((err) => { console.log(err)})
    }
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

            <Button className='mb-6 py-4' onClick={(e: Event) => {
                e.preventDefault()
                const Credencials: ICredencials = {
                    email: emailValue,
                    password: passwordValue
                }
                Login(Credencials)

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