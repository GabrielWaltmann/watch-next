import  styled from 'styled-components';
import { GlobalTheme } from '../../../../Style/Tokens';
const fortSize = GlobalTheme.fontSize
const padding = GlobalTheme.padding
const colors = GlobalTheme.colors

export const Input = styled.input`
    border: none;
    background-color: ${colors.transparent};
    color: ${colors['white-800']};
    font-size: ${GlobalTheme.fontSize.sm};
    font-weight: normal;
    padding: 10px 0 10px 16px;

    &::placeholder{
        color: ${colors['gray-400']};
    }

    &:focus{
        outline: none;
    }
`

export const Container = styled.div`
    max-height: 56px;
    padding: ${padding.sm} ${padding.me};
    width: 100%;
    position: relative;
    background-color: ${colors['gray-600']};
    border-radius: ${GlobalTheme.rounded};
    display: flex;
    align-items: center;

    &:focus{
        outline-color: ${colors['gray-400']};
    }

    &:hover{
        cursor: text;
    }

    svg{
        height: 32px;
        width: 32px;
        color: ${colors['gray-400']};
    }
`