import { InputHTMLAttributes } from "react";
import { Input, Container } from "./Style/Index"; 
import { Envelope } from "phosphor-react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput(props: Props){
    return(
        <Container>
            <Envelope/>
            <Input 
            placeholder={'exemple@exemple.com'}
            {...props}
            />
        </Container>
    )
}
