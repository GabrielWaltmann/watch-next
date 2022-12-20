import { GlobalTheme } from '../../../Style/Tokens';
import  styled from 'styled-components';

const fortSize = GlobalTheme.fontSize.sm

export const Container = styled.button`
    width: 100%;
    padding: ${GlobalTheme.padding.me};
    font-weight: 600;
    border: none;
    background-color: ${GlobalTheme.colors['blue-600']};
    border-radius: ${GlobalTheme.rounded};
    color: ${GlobalTheme.colors.black};
    font-size: ${GlobalTheme.fontSize.sm};
    transition: all .5s ease;
    &:hover{
        background-color: ${GlobalTheme.colors['blue-800']};
        cursor: pointer;
        transition: all .3s ease;
    }
    &:focus{
        outline-color: ${GlobalTheme.colors['white-800']};
    }
`