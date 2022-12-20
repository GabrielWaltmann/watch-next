import styled from "styled-components"
import { GlobalTheme } from "../../../Style/Tokens"

export const Container = styled.main`
    background-Color: ${GlobalTheme.colors["gray-800"]};
    height: 100vh; 
    width: 100vw; 
    display: flex;

    font-size: ${GlobalTheme.fontSize.lg}; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${GlobalTheme.colors["white-800"]};
    gap: 0;

    .logo{
        height: 100px;
        width: 100px;
    }

    header, footer, form{
        width: 400px;
    }

    header{
        width: 400px;
        align-items: center;
        display: flex;
        flex-direction: column;
    }


    form{
        margin-top: 16px;

        label{
            display: flex;
            flex-direction: column;
            margin-top: 16px;
            gap: 8px;
            span{
                font-weight: 600;
            }
        }

        button{
            margin-top: 32px;
        }

        .customCheckbox{
            flex-direction: row !important;
        }
    }

    footer{
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        font-size: ${GlobalTheme.fontSize.sm};
        text-align: left;
        gap: 16px;

        a{
            transition: all .5s ease;
            text-align: center;
            color: ${GlobalTheme.colors["white-800"]};

            &:hover{
                transition: all .3s ease;
                color: ${GlobalTheme.colors["gray-400"]};

            }
        }
    }
`