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
import nookies, { setCookie } from "nookies";
import { GetServerSideProps } from "next";

async function Login(email: string, password: string) {
    function getList() {
        const { token, id } = JSON.parse(nookies.get().session)

        const config = { headers: { Authorization: `Bearer ${token}` } }
        axios.get(`${URL_DOMAIN}list/${id}/`, config)
            .then(({ data }) => {
                const { list } = data
                setCookie(null, 'list', JSON.stringify(list), {
                    path: '/',
                    maxAge: 86400 * 30
                })  
            })
    }
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
            const userString = JSON.stringify(user)
            setCookie(null, 'session', userString, {
                path: '/',
                maxAge: 86400 * 30
            })

            getList()
        }).catch((err) => {
            console.log(err)
        })
}



export const getServerSideProps: GetServerSideProps = async (context) => {
    const user = nookies.get(context).session
    if (user) {
        const json = JSON.parse(user)
        return { props: { user: json } }

    }
    else {
        return { props: { user: null } }
    }
}

export default function Entrar({ user }: any) {
    const router = useRouter()

    useEffect(() => {

        if (user) {
            const userString = JSON.stringify(user)
            setCookie(null, 'session', userString, {
                path: '/',
                maxAge: 86400 * 30
            })
            router.push('/Home')
        }
    }, [user])

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
    const router = useRouter()

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
                router.push('/Home')
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