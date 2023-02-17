import axios from "axios";
import nookies, { setCookie } from "nookies";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { URL_DOMAIN } from "../../../env";
import Header from "../../components/Header";
import List from "../../components/home/list";
import { IUser } from "../../types/User";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookies = nookies.get(context)
    const { session } = cookies
    const { list } = cookies

    const params = {
        user: (session),
        data: (list)
    }

    const UserNull = { user: null }

    if (session) { return { props: params } }
    else { return { props: UserNull } }
}

export default function Home({ user, data }: { user: IUser, data: string }) {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            const cookies = nookies.get()
            const { session } = cookies
            if (!session) { router.push('/Entrar') }
            else { setCurrentUser(JSON.parse(session)) }
        }, 3000)

    }, [])

    const [list, setList] = useState(data)
    const [currentUser, setCurrentUser] = useState<IUser>(user)
    if (user) {

        const data = JSON.parse(list)
        return (
            <>
                <Header key={'Header'} />

                <List list={data} user={user} />
            </>
        )
    }

    // update list cookie
    useEffect(() => {
        const { id, token } = currentUser
        const config = { headers: { Authorization: `Bearer ${token}` } }
        axios.get(`${URL_DOMAIN}list/${id}`, config)
            .then(({ data }) => {
                const { list } = data
                const string = JSON.stringify(list)
                setCookie(null, 'list', string, {
                    path: '/',
                    maxAge: 86400 * 30
                })

                setList(list)
            })
    }, [])

}
