import { IButton } from "../../types/Components";


export default function Button({children = 'Create Accout', className, onClick}: IButton){
    return(
        <button className={"bg-blue-primary py-2 rounded text-white-primary font-semibold max-sm:font-normal max-sm:text-xs text-sm" + ' ' + className} onClick={onClick}>
            {children}
        </button>
    )
}