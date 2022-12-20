import { Container } from "./Style/Index";
export type Props = {
    size?: 'xs' | 'sm' | 'md' | 'lg',
    children: string
}

export function Button({children = 'Create Accout', size= 'lg'}: Props){
    return(
        <Container className={size}>
            {children}
        </Container>
    )
}