import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MagnifyingGlass } from "phosphor-react";
import { useEffect } from "react";



export default function Header() {
    // Hide header on Login Page
    const { asPath } = useRouter()
    useEffect( () =>{
        if(asPath === '/Login'){
            document.querySelector<any | null>('header').classList.add('hidden')
        }

        const pages = ['Descobrir/tv', 'Descobrir/movies', 'Descobrir/animes', 'Home']
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
        <header className="w-screen fixed top-0">
            <Navbar
    
                rounded={true}
                className='bg-transparent w-full transition-all duration-300 m-0'
            >
                <div className="flex justify-center min-w-screen items-center gap-4">
                    <Navbar.Brand href="/Descobrir">
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
                        <Link className="text-white-primary text-sm text-center hover:text-gray-3 transition-all duration-300" href="/Descobrir/movies">
                            Filmes
                        </Link>
                        <Link className="text-white-primary text-sm text-center hover:text-gray-3 transition-all duration-300" href="/Descobrir/tv">
                            Séries
                        </Link>
                        <Link className="text-white-primary text-sm text-center hover:text-gray-3 transition-all duration-300" href="/Descobrir/animes">
                            Animes
                        </Link>
                    </Navbar.Collapse>
                </div>

                <MagnifyingGlass 
                className="text-white-primary"
                height={'40px'} 
                width={'40px'}
                />
            </Navbar>
        </header>
    )
}

