
import { GlobalTheme } from '../../../Style/Tokens';
import  styled  from 'styled-components';

export const Container = styled.label`
    display: flex;
    color: ${GlobalTheme.colors['gray-400']};
    align-items: center;
    font-size: ${GlobalTheme.fontSize.sm};
    input{
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px; 
    }

    .checkbox {
        padding: 2px;
        display: inline-block;
        height: 24px;
        width: 24px;
        background: ${GlobalTheme.colors['gray-600']};
        border: none;
        margin-right: 4px;

        &:hover{
            cursor: pointer;
        }
    }

    .checkbox--active {
        border-color: purple;
        background-image: url('public/checked.svg');
        background-size: contain;
    }
`
