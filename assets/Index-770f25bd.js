var h=Object.defineProperty;var a=(e,s)=>h(e,"name",{value:s,configurable:!0});import{s as c,G as d}from"./styled-components.browser.esm-9b80438a.js";import{a as r,F as i,j as n}from"./jsx-runtime-d9537fda.js";import{r as p}from"./index-cb59b577.js";import{I as f,r as L}from"./IconBase.esm-08fba5a9.js";var o=new Map;o.set("bold",function(e){return r(i,{children:[n("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("circle",{cx:"128",cy:"144",r:"20",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("line",{x1:"128",y1:"164",x2:"128",y2:"180",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});o.set("duotone",function(e){return r(i,{children:[n("path",{d:"M208,88H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V96A8,8,0,0,0,208,88Zm-80,72a20,20,0,1,1,20-20A20,20,0,0,1,128,160Z",opacity:"0.2"}),n("circle",{cx:"128",cy:"140",r:"20",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("line",{x1:"128",y1:"160",x2:"128",y2:"184",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});o.set("fill",function(){return r(i,{children:[n("circle",{cx:"128",cy:"140",r:"12"}),n("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-72,86.8V184a8,8,0,0,1-16,0V166.8a28,28,0,1,1,16,0ZM156,80H100V52a28,28,0,0,1,56,0Z"})]})});o.set("light",function(e){return r(i,{children:[n("circle",{cx:"128",cy:"140",r:"20",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("line",{x1:"128",y1:"160",x2:"128",y2:"184",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});o.set("thin",function(e){return r(i,{children:[n("circle",{cx:"128",cy:"140",r:"20",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("line",{x1:"128",y1:"160",x2:"128",y2:"184",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});o.set("regular",function(e){return r(i,{children:[n("circle",{cx:"128",cy:"140",r:"20",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("line",{x1:"128",y1:"160",x2:"128",y2:"184",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var x=a(function(s,l){return L(s,l,o)},"renderPath"),u=p.exports.forwardRef(function(e,s){return n(f,{...Object.assign({ref:s},e,{renderPath:x})})});u.displayName="LockKey";const y=u,k=d.padding,t=d.colors,g=c.input`
    border: none;
    background-color: ${t.transparent};
    color: ${t["white-800"]};
    font-size: ${d.fontSize.sm};
    font-weight: normal;
    padding: 10px 0 10px 16px;

    &::placeholder{
        color: ${t["gray-400"]};
    }

    &:focus{
        outline: none;
    }
`,j=c.div`
    max-height: 56px;
    padding: ${k.sm} ${k.me};
    width: 100%;
    position: relative;
    background-color: ${t["gray-600"]};
    border-radius: ${d.rounded};
    display: flex;
    align-items: center;

    &:focus{
        outline-color: ${t["gray-400"]};
    }

    &:hover{
        cursor: text;
    }

    svg{
        height: 32px;
        width: 32px;
        color: ${t["gray-400"]};
    }
`;function M(e){return r(j,{children:[n(y,{}),n(g,{placeholder:"********",...e})]})}a(M,"PasswordInput");export{M as P};
//# sourceMappingURL=Index-770f25bd.js.map
