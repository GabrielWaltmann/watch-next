import { InputHTMLAttributes } from "react";
import { Input, Container } from "./Style/Index"; 
import { LockKey } from "phosphor-react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function PasswordInput(props: Props){
    return(
        <Container>
            <LockKey/>
            <Input 
            placeholder={'********'}
            {...props}
            />
        </Container>
    )
}
