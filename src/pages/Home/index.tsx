import axios from "axios";
import nookies, { destroyCookie, setCookie } from "nookies";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { URL_DOMAIN } from "../../../env";
import Header from "../../components/Header";
import List from "./List";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookies = nookies.get(context)
    const { session } = cookies
    const { list } = cookies

    const params = {
        user: JSON.parse(session),
        data: JSON.parse(list)
    }

    if (session) {
        return { props: params}
    } else { return { props: { user: null } } }
}

export default function Home({ user, data }: any) {
    const router = useRouter()
    const { id, token } = user
    useEffect(() => { if (!user) router.push('/Entrar') }, [])
    const [list, setList] = useState(data)

    // update list cookie
    useEffect(() => {
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


    return (
        <>
            <Header key={'Header'} />

            <List list={list} user={user} />
        </>
    )
}
