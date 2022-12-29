import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlass } from "phosphor-react";

export default function Header(){
    return(
        <header className="w-screen px-8 bg-blue-primary flex justify-between items-center top-0 sticky">
            <Image
            src="logo.svg"
            alt="Logo do site Watch Next"
            width={168}
            height={63}
            />

            <nav className="flex list-none items-center gap-14 ">
                <Link className="text-sm opacity-60 hover:opacity-100 transition-all flex items-center text-white-primary font-bold"  href={'/Mylist'}>Minha Lista</Link>
                <Link className="text-sm opacity-60 hover:opacity-100 transition-all flex items-center text-white-primary font-bold"  href={'/Search/Movies'}>Filmes</Link>
                <Link className="text-sm opacity-60 hover:opacity-100 transition-all flex items-center text-white-primary font-bold"  href={'/Search/Series'}>Séries</Link>
                <Link className="text-sm opacity-60 hover:opacity-100 transition-all flex items-center text-white-primary font-bold"  href={'/Search/Animes'}>Animes</Link>
            </nav>

            <MagnifyingGlass className="h-8 w-8 text-white-primary hover:cursor-pointer"/>
        </header>
    )
}