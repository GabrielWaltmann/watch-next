export type Props = {
    size?: 'xs' | 'sm' | 'md' | 'lg',
    children: string,
    className?: string,
    onClick?: any,
}

export default function Button({children = 'Create Accout', className, onClick}: Props){
    return(
        <button className={"bg-blue-primary py-2 rounded text-white-primary font-semibold max-sm:font-normal max-sm:text-xs text-sm" + ' ' + className} onClick={onClick}>
            {children}
        </button>
    )
}