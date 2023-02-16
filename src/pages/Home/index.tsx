import axios from "axios";
import nookies, { destroyCookie, setCookie } from "nookies";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { URL_DOMAIN } from "../../../env";
import Header from "../../components/Header";
import List from "./List";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const user = nookies.get(context).session
    const { list } = nookies.get(context)

    if (user) {
        return { props: { user, listData: list } }
    } else {return { props: { user: null} }}
}

export default function Home({ user, listData }: any) {
    const stringList = JSON.parse(listData)
    const [list, setList] = useState(stringList)
    const router = useRouter()
    const { id, token } = JSON.parse(user)
    if(!id){
        router.push("/Entrar")
    }
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

    useEffect(() => { if (!user) router.push('/Entrar')}, [])

    return (
        <>
            <Header key={'Header'} />

            <List list={list} user={user} />
        </>
    )
}
