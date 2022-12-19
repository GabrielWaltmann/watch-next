import  styled from 'styled-components';
import { GlobalTheme } from '../../../Style/Tokens';
const fortSize = GlobalTheme.fontSize

export const Input = styled.input`
    border: none;
    background-color: ${GlobalTheme.colors.transparent};
    color: ${GlobalTheme.colors['white-800']};
    font-size: ${GlobalTheme.fontSize.sm};
    font-weight: normal;
    padding: 10px 0 10px 16px;

    &::placeholder{
        color: ${GlobalTheme.colors['gray-400']};
    }

    &:focus{
        outline: none;
    }
`

export const Container = styled.div`
    padding: 12px 16px;
    width: 100%;
    position: relative;
    background-color: ${GlobalTheme.colors['gray-600']};
    border-radius: ${GlobalTheme.rounded};
    display: flex;
    align-items: center;

    &:focus{
        outline-color: ${GlobalTheme.colors['gray-400']};
    }

    &:hover{
        cursor: text;
    }

    svg{
        height: 32px;
        width: 32px;
        color: ${GlobalTheme.colors['gray-400']};
    }
`