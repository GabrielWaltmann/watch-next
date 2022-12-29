import { Envelope, LockKey } from "phosphor-react"

type Props = {placeholder: string, type: string}

export default function Input({placeholder, type}: Props){
    function createIcon(){
        const size = 'w-6 h-6 max-sm:w-4 max-sm:h-4'
        if(type === 'email') return <Envelope className={size + ' text-gray-3'}/>
        if(type === "password") return <LockKey className={size + ' text-gray-3'}/>
        else return null
    }

    return(
        <span className="p-3 max-sm:p-1 bg-gray-2 flex rounded items-center">
            {createIcon()}
            <input
            className=" pl-3 text-white-primary text-sm max-sm:text-xs placeholder:max-sm:text-xs  h-full bg-transparent placeholder:text-gray-3  placeholder:text-sm border-0 focus:ring-transparent"
            type={type}
            placeholder={placeholder} />
        </span>
            

    )
}