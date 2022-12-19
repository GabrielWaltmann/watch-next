
import  styled from 'styled-components';
import { GlobalTheme } from '../../../Style/Tokens';

const fortSize = GlobalTheme.fontSize
export const Container = styled.h2`
    font-weight: bold;

    &.sm{
        font-size: ${fortSize.sm};
    }
    &.md{
        font-size: ${fortSize.md};

    }
    &.lg{
        font-size: ${fortSize.lg};
    }
`
