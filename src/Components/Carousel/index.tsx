import { CaretLeft, CaretRight } from "phosphor-react";
import Text from "../Text/Index";


function moveSlide(move: string, id: string){
    const carouselTarget: any = document.querySelector('.'+id)
    const carouselStyle = carouselTarget.style
    const carouselMargin = carouselStyle.marginLeft
    const MarginString = carouselMargin.toString()
    const carouselNoPx = MarginString.replace('px', '')
    const carouselMarginNumber = +carouselNoPx
    const isInViewport = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const moveToRigth = () => {
        const carouselLastChild  = () => {
            const length = carouselTarget.children.length-3
            return carouselTarget.children[length]
        }
        const increasedMargin = carouselMarginNumber - 240
        if(!isInViewport(carouselLastChild())) {
            carouselStyle.marginLeft = `${increasedMargin}px`
        }
    }

    const moveToLeft = () => {
        const carouselFirstChild  = () => {return carouselTarget.children[0]}
        console.log(carouselFirstChild())

        const reducedMargin = carouselMarginNumber + 240;
        if(!isInViewport(carouselFirstChild())){
            carouselStyle.marginLeft = `${reducedMargin}px`
        }else{}
    }
    
    move === 'left' ? moveToLeft() : moveToRigth()
}

export default function Carousel({children, title, className=''}:{children: any, title: string, className?: string}){
    return (
        <section className={"relative flex flex-col gap-1 overflow-x-hidden mx-16 " + className} >
            <Text className="text-white-primary text-md">{title}</Text>
            <ul className={"flex gap-8  w-[200%]  carousel-1 transition-all h-auto duration-100 "+ title }>
                {children}
                <CaretLeft  
                className="hover:cursor-pointer text-white-primary absolute w-16 h-16 -translate-y-1/2 bg-gray-800 rounded-full bg-opacity-20 left-8 inset-y-1/2"
                onClick={() => moveSlide('left', title)}
                />
                <CaretRight  
                className="hover:cursor-pointer text-white-primary absolute w-16 h-16 -translate-y-1/2 bg-gray-800 rounded-full bg-opacity-20 right-8 inset-y-1/2"
                onClick={() => moveSlide('rigth', title)}
                />
            </ul> 
        </section>
    )
}