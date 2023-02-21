import { Navbar } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MagnifyingGlass } from "phosphor-react";
import React, { useEffect, useState } from "react";
import Logo from "../Logo";

export default function Header() {
    const [initialRenderComplete, setInitialRenderComplete] = useState(false);

    const navItens = [
        { slug: "Minha Lista", link: "/app" },
        { slug: "Filmes", link: "/Movies" },
        { slug: "Séries", link: "/TV" },
        { slug: "Animes", link: "/Animes" },
    ]

    useEffect(() => { Scroll(setInitialRenderComplete) }, []);


    if (!initialRenderComplete) { return null }
    else {
        return (
            <header className="w-screen top-0" id="navbar">
                <Navbar
                    rounded={true}
                    className='bg-transparent w-full transition-all duration-300 m-0'
                >
                    <div className="flex justify-center w-10/12 items-center gap-4 max-md:justify-between">
                        <Navbar.Brand href={'/'}>

                            <Logo/>

                        </Navbar.Brand>

                        <Navbar.Toggle className="hover:bg-transparent text-white-primary border-0 focus:ring-opacity-0 " />
                        <Navbar.Collapse>
                            {navItens.map(({ link, slug }) => {
                                return (
                                    <Link className="text-white-primary text-sm text-center hover:text-gray-3 transition-all duration-300" href={link} >
                                        {slug}
                                    </Link>
                                )
                            })}

                        </Navbar.Collapse>
                    </div>
                    <Link href={'/Descobrir/'}>
                        <MagnifyingGlass
                            className="text-white-primary hover:cursor-pointer"
                            height={'40px'}
                            width={'40px'}
                        />
                    </Link>
                </Navbar>
            </header>
        )
    }
}

function Scroll(setInitialRenderComplete: Function){
    window.onscroll = () => scrollFunction()

        function scrollFunction() {
            const navbar: any = document.getElementById("navbar")
            const scrollTop = {
                body: document.body.scrollTop,
                element: document.documentElement.scrollTop,
                userIsOnTop: () => scrollTop.element > 10 || scrollTop.body > 10
            }
            scrollTop.userIsOnTop() ? navbar.style.top = "-90px" : navbar.style.top = "0"
        }
        setInitialRenderComplete(true);
}