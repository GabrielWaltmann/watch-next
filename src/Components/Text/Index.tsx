
export type Props = {
    size?: 'xs' | 'sm' | 'md' | 'lg',
    children: string,
    className?: string
}

export default function Text({children, size= 'lg', className}: Props){
    return(
        <h2 className={className}>
            {children}
        </h2>
    )
}