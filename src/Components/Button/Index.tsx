export type Props = {
    size?: 'xs' | 'sm' | 'md' | 'lg',
    children: string,
    className?: string
}

export default function Button({children = 'Create Accout', className}: Props){
    return(
        <button className={"bg-blue-primary py-2 rounded text-white-primary font-semibold max-sm:font-normal max-sm:text-xs text-sm" + ' ' + className}>
            {children}
        </button>
    )
}