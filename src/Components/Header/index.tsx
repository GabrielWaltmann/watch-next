import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";



export default function Header() {
    const { asPath } = useRouter()

    useEffect( () =>{
        if(asPath === '/' || asPath === '/Login'){
            document.querySelector<any | null>('header').classList.add('hidden')
        }

        const pages = ['Descobrir/Series', 'Descobrir/Filmes', 'Descobrir/Animes', 'Home']
        pages.map(name =>{
            const url = `a[href='/${name}']`
            const element = document.querySelector(url)
            const index = asPath.indexOf(name)
            const isCurrentURL = index != -1
            const setActive = () => element?.classList.add('active')
            const removeActive = () => element?.classList.remove('active')
            isCurrentURL ? setActive() : removeActive()
        })
    }, [asPath])

    return (
        <header className="">
            <Navbar
                fluid={true}
                rounded={true}
                className='bg-transparent transition-all duration-300'
            >
                <Navbar.Brand href="/">
                    <Image
                        src="/logo.svg"
                        alt="Logo do site Watch Next"
                        width={168}
                        height={63}
                    />
                </Navbar.Brand>
                
                <Navbar.Toggle className="hover:bg-transparent text-white-primary border-0 focus:ring-opacity-0 "/>

                <Navbar.Collapse>
                    <Link className="text-white-primary text-sm text-center hover:text-gray-3 transition-all duration-300" href="/Home" >
                        Minha Lista
                    </Link>
                    <Link className="text-white-primary text-sm text-center hover:text-gray-3 transition-all duration-300" href="/Descobrir/Filmes">
                        Filmes
                    </Link>
                    <Link className="text-white-primary text-sm text-center hover:text-gray-3 transition-all duration-300" href="/Descobrir/Series">
                        Séries
                    </Link>
                    <Link className="text-white-primary text-sm text-center hover:text-gray-3 transition-all duration-300" href="/Descobrir/Animes">
                        Animes
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

