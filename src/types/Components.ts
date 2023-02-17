export interface IButton  {
    size?: 'xs' | 'sm' | 'md' | 'lg',
    children: string,
    className?: string,
    onClick?: any,
}

export interface ICheckbox  {
    children: string, 
    className: string
}

export interface IInput {
    placeholder: string, 
    type: 'email' | 'password' | 'username' | 'text',
    setValue: Function
}

export interface IText{
    size?: 'xs' | 'sm' | 'md' | 'lg',
    children: string,
    className?: string
}