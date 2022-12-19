
import  styled from 'styled-components';
import { GlobalTheme } from '../../../Style/Tokens';

const fortSize = GlobalTheme.fontSize
export const Container = styled.span`

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
