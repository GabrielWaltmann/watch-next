import { Spinner } from "flowbite-react";
import Text from '../../../components/Text'
export function Loading({ref}: any){
    return (
        <div className="w-full justify-center items-center mt-16 flex gap-4 flex-col loading" ref={ref} >
            <Spinner aria-label="Default status example" className="" />
            <Text className="text-white-primary loading" >Carregando sua lista...</Text>

        </div>
    )
}