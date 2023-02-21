import axios from "axios";
import nookies, { setCookie } from "nookies";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { URL_DOMAIN } from "../../../env";
import Header from "../../components/Header";
import List from "../../components/home/list";
import { IUser } from "../../types/User";
import IItem from "../../types/MongoDB";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookies = nookies.get(context)
    const user = (cookies.user)
    if (user) {
        const { token, id } = JSON.parse(user)
        const config = { headers: { Authorization: `Bearer ${token}` } }
        const url = `${URL_DOMAIN}list/${id}/`
        const { data } = await axios.get(url, config)
        return { props: { user: JSON.parse(user), list: data } }
    }

    return { props: { user: null, list: null } }
}

export default function App({ user, list }: { user: IUser, list: IItem[] }) {
    const router = useRouter()
    const refreshData = () => router.replace(router.asPath);

    useEffect(() => {  if(!user) { router.push('Entrar') } }, [user])

    useEffect(()=>{
        refreshData()
    }, [])

    return (
        <>
            <Header key={'Header'} />

            {list ? <List data={list} user={user} /> : null}
        </>
    )

}
