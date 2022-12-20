import { Container } from "./Style/Index";

export type Props = {
    size?: 'xs' | 'sm' | 'md' | 'lg',
    children: string,
    className?: string
}

export function Heading({children, size= 'lg', className}: Props){
    return(
        <Container className={size +  className}>
            {children}
        </Container>
    )
}