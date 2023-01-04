import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MagnifyingGlass } from "phosphor-react";
import { useEffect } from "react";

export default function Header() {
    useEffect(()=>{
        window.onscroll = () =>  scrollFunction() 

        function scrollFunction() {
            const navbar: any = document.getElementById("navbar")
            const scrollTop = {
                body: document.body.scrollTop,
                element: document.documentElement.scrollTop,
                userIsOnTop: () => scrollTop.element > 20 || scrollTop.body > 20
            }
            scrollTop.userIsOnTop() ? navbar.style.top = "-90px" : navbar.style.top = "0"
        }
    }, [])


    return (
        <header className="w-screen top-0" id="navbar">
            <Navbar
                rounded={true}
                className='bg-transparent w-full transition-all duration-300 m-0'
            >
                <div className="flex justify-center min-w-screen items-center gap-4">
                    <Navbar.Brand>
                        <Link href={'/Descobrir'}>
                            <Image
                                src="/logo.svg"
                                alt="Logo do site Watch Next"
                                width={168}
                                height={63}
                            />
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle className="hover:bg-transparent text-white-primary border-0 focus:ring-opacity-0 " />
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

