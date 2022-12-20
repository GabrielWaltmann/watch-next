var s=Object.defineProperty;var t=(o,r)=>s(o,"name",{value:r,configurable:!0});import{r as n}from"./index-cb59b577.js";import{s as p,G as e}from"./styled-components.browser.esm-9b80438a.js";import{a as l,j as c}from"./jsx-runtime-d9537fda.js";const h=p.label`
    display: flex;
    flex-direction: row;
    color: ${e.colors["gray-400"]};
    align-items: center;
    font-size: ${e.fontSize.sm};
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
        display: inline-block;
        height: 24px;
        width: 24px;
        background: ${e.colors["gray-600"]};
        border: none;
        margin-right: 8px;
        border-radius: ${e.rounded};
        &:hover{
            cursor: pointer;
        }
    }

    .checkbox--active {
        border-color: purple;
        background-image: url('public/checked.svg');
        background-size: contain;
    }
`;function g({children:o="Create Accout",className:r}){const[i,a]=n.exports.useState(!1);return l(h,{className:r,children:[c("input",{type:"checkbox",onChange:()=>a(!i)}),c("span",{className:`checkbox ${i?"checkbox--active":""}`,"aria-hidden":"true"}),c("span",{children:o})]})}t(g,"Checkbox");export{g as C};
//# sourceMappingURL=Index-83e1fb4b.js.map
