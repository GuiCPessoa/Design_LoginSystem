import{j as x}from"./jsx-runtime-j_jdvEMj.js";import{S as T}from"./index-BCNgif3m.js";import{c as z}from"./clsx-B-dksMZM.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";function C({size:t="md",children:b,asChild:y,className:H}){const S=y?T:"h2";return x.jsx(S,{className:z("text-gray-900 font-bold font-sans",{"text-lg":t==="sm","text-xl":t==="md","text-2xl":t==="lg"},H),children:b})}C.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const w={title:"Components/Heading",component:C,args:{children:"Lorem ipsum",size:"md"},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}}}},e={},s={args:{size:"sm"}},r={args:{size:"lg"}},a={args:{asChild:!0,children:x.jsx("h1",{children:"Heading with H1"})},argTypes:{children:{table:{disable:!0}},asChild:{table:{disable:!0}}}};var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    //size: 'lg'
    asChild: true,
    children: <h1>Heading with H1</h1>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const L=["Default","Small","Large","CustomComponent"];export{a as CustomComponent,e as Default,r as Large,s as Small,L as __namedExportsOrder,w as default};
