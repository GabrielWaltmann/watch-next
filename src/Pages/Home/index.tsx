import axios from "axios";
import { useEffect } from "react";
import { getTokenOnLocalStorage } from "../Entrar";

const DB_URL = `http://localhost:4000/`
let list: any[] = []

function getList(id: string) {
    try{
        const token = (localStorage.getItem('token'))
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.get(
            `${DB_URL}user/${id}/`,
            config
        )
            .then((res) => {
                const length = res.data.list.length
                res.data.list.map((item: any) => {
                    list.length < length ? list.push(item) : null
                console.log(list)
                })

            })
            .catch((err => console.log(err)))

        return (list)
    }catch{

    }

}
export default function index() {
    useEffect(()=>{
        if (getTokenOnLocalStorage() === '') {
            try {
                window.location.href = '/Entrar'
            } catch { }
        }
            const id: any = localStorage.getItem('id')
        try{
            getList(id)
        }catch{}
    }, [])
    return(
        <h1></h1>
    )
}