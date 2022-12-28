import Image from "next/image";
import Link from "next/link";
import { CaretLeft, CaretRight, MagnifyingGlass } from "phosphor-react";
import Text from "../../../../Components/Text/Index";

export function Header(){
    return(
        <header className="w-full px-8 bg-blue-primary flex justify-between items-center absolute top-0 sticky z-10">
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

        <MagnifyingGlass className="h-9 w-9 text-white-primary hover:cursor-pointer"/>
        </header>
    )
}

export function Sections(){
    function moveSlide(move: string, id: string){
        const carouselTarget: any = document.querySelector('.'+id)
        console.log(carouselTarget)
        const carouselStyle = carouselTarget.style
        const carouselMargin = carouselStyle.marginLeft
        const MarginString = carouselMargin.toString()
        const carouselNoPx = MarginString.replace('px', '')
        const carouselMarginNumber = +carouselNoPx
        const carouselFirstChild  = () => carouselTarget.children[0]
        const carouselLastChild  = () => {
        const length = carouselTarget.children.length-3
        return carouselTarget.children[length]
        }
        const isInViewport = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        }
        const moveToLeft = () => {
        const reducedMargin = carouselMarginNumber + 230
        if(!isInViewport(carouselFirstChild())) carouselStyle.marginLeft = `${reducedMargin}px`
        }
        const moveToRigth = () => {
        const increasedMargin = carouselMarginNumber - 230
        if(!isInViewport(carouselLastChild())) carouselStyle.marginLeft = `${increasedMargin}px`
        }
        move === 'left' ? moveToLeft() : moveToRigth()
    }

    return(
        <main className="mt-48 pt-48 flex flex-col gap-6 items-center">

        <section className="w-4/5 overflow-hidden relative px-8 flex flex-col gap-1">
          <Text className="text-white-primary text-md">Fantasia</Text>
          <ul className="flex gap-8 w-[200%]  carousel-1 transition-all duration-100">
              <Card 
              ImageAlt="Avengers poster" 
              src="/avengers.jpg" 
              title="Avengers: Infinity wars"
              />
              <Card 
              ImageAlt="Strangers Things poster" 
              src="/stranger.jpg" 
              title="Strangers Things"
              />
              <Card 
              ImageAlt="Avatar poster" 
              src="/avatar.jpg" 
              title="Avatar: The Way of Water"
              />
              <Card 
              ImageAlt="Pokemon: The Movie poster" 
              src="/pokemon.jpg" 
              title="Pokemon: The Movie"
              />
              <Card 
              ImageAlt="Avengers poster" 
              src="/avengers.jpg" 
              title="Avengers: Infinity wars"
              />
              <Card 
              ImageAlt="Avengers poster" 
              src="/avengers.jpg" 
              title="Avengers: Infinity wars"
              />
              <CaretLeft  
              className="hover:cursor-pointer text-white-primary absolute w-16 h-16 -translate-y-1/2 bg-gray-800 rounded-full bg-opacity-20 left-8 inset-y-1/2"
              onClick={() => moveSlide('left', 'carousel-1')}
              />
              <CaretRight  
              className="hover:cursor-pointer text-white-primary absolute w-16 h-16 -translate-y-1/2 bg-gray-800 rounded-full bg-opacity-20 right-8 inset-y-1/2"
              onClick={() => moveSlide('rigth', 'carousel-1')}
              />
          </ul> 
        </section>

        <section className="w-4/5 overflow-hidden relative px-8 flex flex-col gap-1">
          <Text className="text-white-primary text-md">Aventura</Text>
          <ul className="flex gap-8 w-[200%] carousel-2 transition-all duration-100">
              <Card 
              ImageAlt="Avengers poster" 
              src="/avengers.jpg" 
              title="Avengers: Infinity wars"
              />
              <Card 
              ImageAlt="Strangers Things poster" 
              src="/stranger.jpg" 
              title="Strangers Things"
              />
              <Card 
              ImageAlt="Avatar poster" 
              src="/avatar.jpg" 
              title="Avatar: The Way of Water"
              />
              <Card 
              ImageAlt="Pokemon: The Movie poster" 
              src="/pokemon.jpg" 
              title="Pokemon: The Movie"
              />
              <Card 
              ImageAlt="Avengers poster" 
              src="/avengers.jpg" 
              title="Avengers: Infinity wars"
              />
              <Card 
              ImageAlt="Avengers poster" 
              src="/avengers.jpg" 
              title="Avengers: Infinity wars"
              />
              <CaretLeft  
              className="hover:cursor-pointer text-white-primary absolute w-16 h-16 -translate-y-1/2 bg-gray-800 rounded-full bg-opacity-20 left-8 inset-y-1/2"
              onClick={() => moveSlide('left', 'carousel-2')}
              />
              <CaretRight  
              className="hover:cursor-pointer text-white-primary absolute w-16 h-16 -translate-y-1/2 bg-gray-800 rounded-full bg-opacity-20 right-8 inset-y-1/2"
              onClick={() => moveSlide('rigth', 'carousel-2')}
              />
          </ul> 
        </section>

        <section className="w-4/5 overflow-hidden relative px-8 flex flex-col gap-1">
          <Text className="text-white-primary text-md">Animes</Text>
          <ul className="flex gap-8 w-[200%] carousel-3 transition-all duration-100">
              <Card 
              ImageAlt="Avengers poster" 
              src="/avengers.jpg" 
              title="Avengers: Infinity wars"
              />
              <Card 
              ImageAlt="Strangers Things poster" 
              src="/stranger.jpg" 
              title="Strangers Things"
              />
              <Card 
              ImageAlt="Avatar poster" 
              src="/avatar.jpg" 
              title="Avatar: The Way of Water"
              />
              <Card 
              ImageAlt="Pokemon: The Movie poster" 
              src="/pokemon.jpg" 
              title="Pokemon: The Movie"
              />
              <Card 
              ImageAlt="Avengers poster" 
              src="/avengers.jpg" 
              title="Avengers: Infinity wars"
              />
              <Card 
              ImageAlt="Avengers poster" 
              src="/avengers.jpg" 
              title="Avengers: Infinity wars"
              />
              <CaretLeft  
              className="hover:cursor-pointer text-white-primary absolute w-16 h-16 -translate-y-1/2 bg-gray-800 rounded-full bg-opacity-20 left-8 inset-y-1/2"
              onClick={() => moveSlide('left', 'carousel-3')}
              />
              <CaretRight
              className="hover:cursor-pointer text-white-primary absolute w-16 h-16 -translate-y-1/2 bg-gray-800 rounded-full bg-opacity-20 right-8 inset-y-1/2"
              onClick={() => moveSlide('rigth', 'carousel-3')}
              />
          </ul> 
        </section>
      </main>
    )
}

export type CardProps = {
    title: string,
    src: string,
    ImageAlt: string
}

function Card({title, src, ImageAlt}: CardProps){
    return (
        <div>
            <Image 
            src={src} 
            alt={ImageAlt} 
            height={330} 
            width={220}/>

            <h3 className="text-sm font-semibold text-white-primary">{title}</h3>

        </div>
    )
}