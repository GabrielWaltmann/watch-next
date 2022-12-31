import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Header() {
    const { asPath } = useRouter()

    useEffect( ()=>{
        const setActiveLink = (pageName: string) => {
            const url = `a[href='/${pageName}']`
            const link: any = document.querySelector(url)
            link ? link.style = 'color: #868686' : null
        }

        ['Descobrir/Series', 'Descobrir/Filmes', 'Descobrir/Animes', 'Home'].map(name => {
            const index = asPath.indexOf(name)
            const isCurrentURL = index != -1
            isCurrentURL ? setActiveLink(name) : null
        })
    
    }, [])


    return (
        <header className="bg-transparent w-full sticky top-0">
            <Navbar
                fluid={true}
                rounded={true}
                className='bg-transparent'
            >
                <Navbar.Brand href="/">
                    <Image
                        src="/logo.svg"
                        alt="Logo do site Watch Next"
                        width={168}
                        height={63}
                    />
                </Navbar.Brand>
                
                <Navbar.Toggle className="hover:bg-transparent border-0 focus:ring-0"/>

                <Navbar.Collapse>
                    <Link className="text-white-primary text-center hover:text-gray-3 transition-all duration-300" href="/Home" >
                        Minha Lista
                    </Link>
                    <Link className="text-white-primary text-center hover:text-gray-3 transition-all duration-300" href="/Descobrir/Filmes">
                        Filmes
                    </Link>
                    <Link className="text-white-primary text-center hover:text-gray-3 transition-all duration-300" href="/Descobrir/Series">
                        Séries
                    </Link>
                    <Link className="text-white-primary text-center hover:text-gray-3 transition-all duration-300" href="/Descobrir/Animes">
                        Animes
                    </Link>
                
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export function hideHeader() {
    const header: any = document.querySelector('header')

    header.style.display = 'none'
}