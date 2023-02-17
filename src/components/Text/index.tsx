import { IText } from "../../types/Components";


export default function Text({children, size= 'lg', className}: IText){
    return(
        <h2 className={className}>
            {children}
        </h2>
    )
}