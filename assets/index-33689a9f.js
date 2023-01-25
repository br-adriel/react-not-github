import{j as P,r as l,a as He}from"./react-6919d956.js";import{c as Re}from"./react-dom-0e9186d3.js";import{u as x,a as ie,P as Le}from"./react-redux-253a7a30.js";import{W as Ee,s as n,F as We}from"./styled-components-f658196a.js";import{c as Pe,a as De}from"./@reduxjs-c35ff542.js";import{F as D,B as Me,a as M,b as ne,c as E,I as Oe,T as Ue,A as qe,d as Ge,e as _e,f as Qe,g as Ve,h as Je,R as Ke,i as Ye,j as Xe,k as J,l as Ze,m as re,H as et,n as tt,o as it,p as oe,q as nt,r as rt,s as O,t as ot,u as at,v as ae,w as st,x as dt,y as ct,z as lt,C as pt,D as ht,E as ut}from"./react-icons-0fc08fb8.js";import{i as ft,g as gt,o as mt,G as se,s as xt,O as B,A as $,U as de,c as bt,u as vt,a as yt,b as wt,T as ce,Q as $t,d as kt,K as At,e as le,h as pe,E as Ct,j as he}from"./@firebase-d6f2c2f7.js";import"./firebase-6f74f4e5.js";import{$ as St,a as jt,b as Tt,c as Nt,d as Ft,e as Bt,f as It,g as zt,h as ue,i as fe}from"./@radix-ui-170ed4c1.js";import"./hoist-non-react-statics-dd442a32.js";import"./react-is-d0c61868.js";import{N as C,L as ge,H as Ht}from"./react-router-dom-e171a479.js";import{W as T,q as Rt}from"./react-helmet-async-675ea681.js";import{d as U,r as Lt}from"./dayjs-26c6c506.js";import{O as Et,c as Wt,d as Pt,e as y}from"./react-router-4a8ba86d.js";import"./scheduler-04ce0582.js";import"./use-sync-external-store-bcc7387b.js";import"./@emotion-3c1bd611.js";import"./immer-75da4564.js";import"./redux-48b3e3b1.js";import"./@babel-8ea3f1de.js";import"./redux-thunk-ef899f4c.js";import"./tslib-c672c11e.js";import"./idb-f62f60ab.js";import"./react-remove-scroll-b702d54d.js";import"./react-remove-scroll-bar-7eab969e.js";import"./react-style-singleton-6c56e19d.js";import"./get-nonce-3d5abfe4.js";import"./use-sidecar-0a151065.js";import"./use-callback-ref-d84f932d.js";import"./aria-hidden-72cb0184.js";import"./@remix-run-405ccc70.js";import"./prop-types-4d501b15.js";import"./react-fast-compare-8dea2db9.js";import"./invariant-c4c304c3.js";import"./shallowequal-6a8ebf1c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function d(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=d(s);fetch(s.href,o)}})();const b=P.Fragment,t=P.jsx,i=P.jsxs,Dt={bg:"#15202B",text:"#ffffff",bgHover:"#25303B",accent:"#1D9BF0",textAlt:"#8B98A5",retweet:"#00BA7C",like:"#F91880",accentHover:"rgba(29, 155, 240, 0.2)",likeHover:"rgba(249, 24, 128, 0.2)",retweetHover:"rgba(0, 186, 124, 0.2)",bg2:"#1E2732",bg2Hover:"#252E38",brandColor:"#dddddd",borderColor:"#5555"},me={accentHover:"rgba(29, 155, 240, 0.2)",likeHover:"rgba(249, 24, 128, 0.2)",retweetHover:"rgba(0, 186, 124, 0.2)",bg:"#000000",text:"#ffffff",textAlt:"#71767B",bgHover:"#101010",accent:"#1D9BF0",retweet:"#00BA7C",like:"#F91880",bg2:"#16181C",bg2Hover:"#1D1F23",brandColor:"#ffffff",borderColor:"#222"},S={bg2Hover:"#EFF1F1",accentHover:"rgba(29, 155, 240, 0.2)",likeHover:"rgba(249, 24, 128, 0.2)",retweetHover:"rgba(0, 186, 124, 0.2)",textAlt:"#536471",bg:"#ffffff",text:"#000000",bgHover:"#efefef",accent:"#1D9BF0",brandColor:"#1D9BF0",retweet:"#00BA7C",borderColor:"#dddddd",bg2:"#F7F9F9",like:"#F91880"},Mt=Ee`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
  }

  body {
    background: ${({theme:e})=>e.bg};
    color: ${({theme:e})=>e.text};
  }

  #root {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button, a {
    cursor: pointer
  }
`,Ot={user:null},xe=Pe({name:"auth",initialState:Ot,reducers:{login:(e,r)=>{e.user=r.payload.user},logout:e=>{e.user=null},setUserTheme:(e,r)=>{e.user&&(e.user.theme=r.payload.theme)}}}),{login:z,logout:Ut,setUserTheme:qt}=xe.actions,v=e=>e.auth,Gt={apiKey:"AIzaSyDErTPV9mmY8K1IyG9gsdogtCO9RmArkQk",authDomain:"twitter-clone-789e0.firebaseapp.com",projectId:"twitter-clone-789e0",storageBucket:"twitter-clone-789e0.appspot.com",messagingSenderId:"8238254908",appId:"1:8238254908:web:cf650d56d83053e9cfec39"},be=ft(Gt),H=gt(be),f=mt(be),j=De({reducer:{auth:xe.reducer}}),_t=new se,q=async()=>{try{const e=await xt(H,_t),r=se.credentialFromResult(e),d=r==null?void 0:r.accessToken,a=e.user,s=await B($(f,"users",a.uid));if(a&&d){const o={uid:a.uid,photoURL:a.photoURL,displayName:a.displayName,email:a.email,theme:s.exists()?s.data().theme:S};if(sessionStorage.setItem("@AuthFirebase:user",JSON.stringify(o)),j.dispatch(z({user:o})),!s.exists()){const c=$(f,"users",o.uid);await de(c,o)}}}catch{alert("Um erro ocorreu")}},Qt=async(e,r,d)=>{const a=e.trim(),s=r.trim(),o=await bt(H,a,d);await vt(o.user,{displayName:s,photoURL:"https://cdn-icons-png.flaticon.com/512/149/149071.png"});const c={displayName:o.user.displayName,photoURL:o.user.photoURL,uid:o.user.uid,email:o.user.email,theme:S};j.dispatch(z({user:c}));const p=$(f,"users",c.uid);await de(p,c)},Vt=async(e,r)=>{try{const a=(await yt(H,e,r)).user,s=await B($(f,"users",a.uid));if(a){const o={uid:a.uid,photoURL:a.photoURL,displayName:a.displayName,theme:s.data().theme};sessionStorage.setItem("@AuthFirebase:user",JSON.stringify(o)),j.dispatch(z({user:o}))}}catch{alert("Credenciais inválidas")}},Jt=async()=>{await wt(H),sessionStorage.removeItem("@AuthFirebase:token"),sessionStorage.removeItem("@AuthFirebase:user"),j.dispatch(Ut())},ve=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`,ye=n.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  h2 {
    font-size: 28px;
  }

  button {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    outline: none;
    border: none;
    padding: 10px;
    font-weight: 600;
    font-size: 14px;
    margin: 10px 0;
    gap: 4px;
    background-color: #fff;
    border: 1px solid ${({theme:e})=>e.borderColor};

    :hover {
      opacity: 0.8;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  > p {
    font-size: 14px;
    margin-top: 30px;

    a {
      color: ${({theme:e})=>e.accent};
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }
    }
  }

  input {
    width: 100%;
    margin-top: 16px;
    padding: 12px 8px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    border: 1px solid ${({theme:e})=>e.borderColor};

    :focus {
      outline-color: ${({theme:e})=>e.accent};

      ::placeholder {
        color: ${({theme:e})=>e.accent};
      }
    }
  }
`,we=n.div`
  display: flex;
  align-items: center;
  gap: 10px;

  hr {
    flex-grow: 1;
    size: 3;
  }
`,Kt=()=>{const[e,r]=l.useState(""),[d,a]=l.useState(""),s=async o=>{o.preventDefault(),await Vt(e,d),a("")};return t(ve,{children:i(ye,{children:[t("h2",{children:"Entrar no Twitter"}),i("button",{type:"button",onClick:q,children:[t(D,{}),t("p",{children:"Fazer login com o Google"})]}),i(we,{children:[t("hr",{}),t("span",{children:"ou"}),t("hr",{})]}),i("form",{onSubmit:o=>{s(o)},children:[t("input",{type:"email",name:"email",id:"email",placeholder:"Email",value:e,onChange:o=>r(o.target.value)}),t("input",{type:"password",name:"senha",id:"senha",placeholder:"Senha",value:d,onChange:o=>a(o.target.value)}),t("button",{type:"submit",children:"Entrar"})]}),i("p",{children:["Não tem uma conta? ",t("a",{href:"",children:"Inscreva-se"})]})]})})},Yt=()=>{const[e,r]=l.useState(""),[d,a]=l.useState(""),[s,o]=l.useState(""),[c,p]=l.useState(""),g=async h=>{if(h.preventDefault(),s!==c){alert("As senhas são diferentes");return}await Qt(e,d,s)};return t(ve,{children:i(ye,{children:[t("h2",{children:"Entre hoje mesmo para o Twitter"}),i("button",{type:"button",onClick:q,children:[t(D,{}),t("p",{children:"Inscrever-se no Google"})]}),i(we,{children:[t("hr",{}),t("span",{children:"ou"}),t("hr",{})]}),i("form",{onSubmit:h=>{g(h)},children:[t("input",{type:"email",name:"email",id:"emailSignup",placeholder:"Email",value:e,onChange:h=>r(h.target.value)}),t("input",{type:"text",name:"displayName",id:"nameSignup",placeholder:"Nome",value:d,onChange:h=>a(h.target.value)}),t("input",{type:"password",name:"senha",id:"senhasignup",placeholder:"Senha",value:s,onChange:h=>o(h.target.value)}),t("input",{type:"password",name:"senha2",id:"senha2signup",placeholder:"Confirmação de senha",value:c,onChange:h=>p(h.target.value)}),t("button",{type:"submit",children:"Cadastrar-se"})]}),i("p",{children:["Já tem uma conta? ",t("a",{href:"",children:"Entre"})]})]})})},Xt=n(St)`
  width: 100vw;
  height: 100vh;
  background-color: #2225;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`,Zt=n(jt)`
  background-color: ${({theme:e})=>e.bg};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  display: relative;
  top: 0px;
  left: 0px;
  padding: 10px;
  width: min(100%, 400px);
  margin: 16px 0;
`,ei=n.div`
  display: flex;
  min-width: 350px;
  position: relative;
  justify-content: center;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
    object-fit: contain;
    margin-top: 4px;
  }

  button {
    position: absolute;
    top: 0px;
    left: 0px;
    background: none;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;

    svg {
      margin-top: 0;
      width: 24px;
      height: 24px;
      object-fit: contain;
    }

    :hover {
      background-color: #0002;
      border-radius: 50%;
    }
  }
`,I=({children:e,triggerContent:r,showHeader:d=!0,...a})=>i(Tt,{...a,children:[t(Nt,{children:r}),t(Ft,{children:t(Xt,{children:i(Zt,{children:[d??i(ei,{children:[t(Bt,{children:t(Me,{})}),t(It,{children:t(M,{})})]}),e]})})})]});n.div`
  width: 100%;
  max-width: 1200px;
`;const N=n.div`
  width: 100%;
  max-width: 600px;
  border-left: 1px solid ${({theme:e})=>e.borderColor};
  border-right: 1px solid ${({theme:e})=>e.borderColor};
`;n.div`
  width: 100%;
  max-width: 320px;
  border-left: 1px solid ${({theme:e})=>e.borderColor};
  border-right: 1px solid ${({theme:e})=>e.borderColor};
`;const ti=n.div`
  width: 100%;
  max-width: 920px;
`,ii=n.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme:e})=>e.accent};
  color: #fff;

  & > div {
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,ni=n.div`
  display: none;
  flex-direction: column;

  @media screen and (min-width: 721px) {
    display: flex;
  }
`,ri=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  button {
    padding: 8px 16px;
    border-radius: 40px;
    text-decoration: none;
    font-weight: 600;
    text-align: center;

    :hover {
      opacity: 0.85;
    }

    :first-of-type {
      background: ${({theme:e})=>e.accent};
      color: #fff;
      border: 1px solid #fff;
    }

    :last-of-type {
      color: #000;
      background: #fff;
      border: 1px solid #fff;
    }

    @media screen and (max-width: 720px) {
      flex-grow: 1;
    }
  }

  @media screen and (max-width: 720px) {
    flex-grow: 1;
  }
`,oi=()=>{const{user:e}=x(v);return e?null:t(ii,{children:i(ti,{children:[i(ni,{children:[t("h2",{children:"Não perca o que está acontecendo"}),t("p",{children:"As pessoas que usam o Twitter são as primeiras a saber."})]}),i(ri,{children:[t(I,{triggerContent:"Entrar",children:t(Kt,{})}),t(I,{triggerContent:"Inscrever-se",children:t(Yt,{})})]})]})})},ai=l.createContext({setCurrentTheme:()=>{}}),si=({children:e})=>{const{user:r}=x(v),[d,a]=l.useState(S);return l.useEffect(()=>{const o=r?r.theme:(()=>window.matchMedia("(prefers-color-scheme: dark)").matches?me:S)();a(o);const c=document.querySelector("meta[name=theme-color]");c==null||c.setAttribute("content",o.bg)},[r]),t(ai.Provider,{value:{setCurrentTheme:a},children:t(We,{theme:d,children:e})})},$e=n.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.bg2};
  border-radius: 16px;
  width: 100%;

  h3 {
    padding: 16px;
    padding-bottom: 8px;
    border-radius: 16px 16px 0 0;
  }

  & > a {
    padding: 12px 16px;
    border-radius: 0 0 16px 16px;
    text-decoration: none;
    color: ${({theme:e})=>e.accent};
    font-size: 0.95rem;

    :hover {
      background: ${({theme:e})=>e.bg2Hover};
    }
  }
`,di=n.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4px 16px;
  padding-bottom: 12px;
  cursor: pointer;

  background: ${({isOnSidebar:e,theme:r})=>e?r.bg2:r.bg};

  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-top: -5px;
    margin-bottom: 3px;
  }

  :hover {
    background: ${({theme:e})=>e.bg2Hover};
  }
`,K=n.p`
  color: ${({theme:e})=>e.textAlt};
  font-size: 0.85rem;
`,ci=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    padding: 8px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s all ease;

    :hover {
      background: ${({theme:e})=>e.accentHover};

      svg {
        color: ${({theme:e})=>e.accent};
      }
    }
  }

  svg {
    width: 19px;
    height: 19px;
    color: ${({theme:e})=>e.textAlt};
  }
`,A=({sidebar:e=!0})=>i(di,{isOnSidebar:e,children:[i(ci,{children:[t(K,{children:"Assuntos do momento"}),t("a",{href:"#",title:"Menu",children:t(ne,{})})]}),t("h4",{children:"Lorem ipsum"}),i(K,{children:[Math.floor(Math.random()*95)+5," mil tweets"]})]}),li=()=>i($e,{children:[t("h3",{children:"O que está acontecendo"}),t(A,{}),t(A,{}),t(A,{}),t(A,{}),t(A,{}),t("a",{href:"",children:"Mostrar mais"})]}),pi=n.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;

  :hover {
    background: ${({theme:e})=>e.bg2Hover};
  }

  button {
    background: ${({theme:e})=>e.text};
    color: ${({theme:e})=>e.bg};
    border-radius: 20px;
    padding: 6px 16px;

    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`,hi=n.div`
  display: flex;
  gap: 8px;
  align-items: center;

  img {
    border-radius: 50%;
  }
`,ui=n.p`
  font-weight: 600;
  text-overflow: ellipsis;
`,fi=n.p`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.textAlt};
  text-overflow: ellipsis;
`,L=()=>i(pi,{children:[i(hi,{children:[t("img",{src:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",alt:"",width:"48px",height:"48px"}),i("div",{children:[t(ui,{children:"Dolor Sit"}),t(fi,{children:"email@example.com"})]})]}),t("button",{children:"Seguir"})]}),ke=()=>i($e,{children:[t("h3",{children:"Quem seguir"}),t(L,{}),t(L,{}),t(L,{}),t("a",{href:"",children:"Mostrar mais"})]}),gi=n.footer`
  padding: 16px;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.textAlt};
  display: flex;
  flex-direction: column;
  gap: 6px;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  a {
    text-decoration: none;
    color: inherit;

    :hover {
      text-decoration: underline;
    }
  }
`,Ae=()=>i(gi,{children:[t("p",{children:"Essa página não tem qualquer relação com o twitter, e foi construída para parecer com o site oficial com a finalidade de praticar as habilidades de desenvolvimento frontend do desenvolvedor"}),i("div",{children:[t("a",{href:"https://github.com/br-adriel",target:"_blank",rel:"noopener noreferrer",children:"Github"}),t("a",{href:"https://www.linkedin.com/in/adriel-fsantos/",target:"_blank",rel:"noopener noreferrer",children:"Linkedin"}),t("a",{href:"https://br-adriel.github.io/site/",target:"_blank",rel:"noopener noreferrer",children:"Site"})]}),i("p",{children:[new Date().getFullYear()," Adriel Santos"]})]}),mi=n.div`
  width: 100%;
  background: ${({theme:e})=>e.bg};
  position: relative;

  form {
    width: 100%;
  }
`,xi=n.div`
  margin: 4px 0;
  background: ${({theme:e})=>e.bg2Hover};
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 30px;
  color: ${({theme:e})=>e.textAlt};
  gap: 12px;
  border: 1px solid transparent;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
  }

  :focus-within {
    background: ${({theme:e})=>e.bg};
    border: 1px solid ${({theme:e})=>e.accent};

    svg {
      color: ${({theme:e})=>e.accent};
    }
  }

  input {
    outline: none;
    flex-grow: 1;
    font-size: 1rem;
    border: none;
    background: inherit;
  }

  input:placeholder-shown + div {
    button {
      display: none;
    }
  }

  svg {
    font-size: 20px;
  }
`,bi=n.div`
  position: absolute;
  top: 0;
  right: 12px;
  display: flex;
  align-items: center;
  height: 100%;

  button[type='reset'] {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`,Ce=()=>t(mi,{children:t("form",{children:i(xi,{children:[t(E,{}),i("div",{children:[t("input",{type:"text",placeholder:"Buscar no Twitter"}),t(bi,{children:t("button",{type:"reset",title:"Limpar",children:t(Oe,{})})})]})]})})}),Se=n.section`
  flex-direction: column;
  flex-grow: 1;
  max-width: 350px;
  display: none;
  margin-left: 30px;

  @media screen and (min-width: 1021px) {
    display: flex;
  }
`,Y=n.div`
  width: 100%;
  display: flex;
  position: sticky;
  flex-direction: column;
  top: ${e=>e.top};
`,G=()=>i(Se,{children:[t(Y,{top:"0px",children:t(Ce,{})}),t(li,{}),i(Y,{top:"54px",children:[t(ke,{}),t(Ae,{})]})]}),vi=async e=>{const{auth:r}=j.getState(),{user:d}=r;if(d){const a=ce(f,"users",d.uid,"posts");await $t(a,{content:e,timestamp:kt(),likes:[],retweetsCount:0,isRetweet:!1,author:d.uid})}},je=async e=>{const r={...e.data(),id:e.id},d=$(f,"users",r.author),s=(await B(d)).data();let o=null;if(r.isRetweet&&r.retweeter){const c=$(f,"users",r.retweeter.uid);o=(await B(c)).data()}return{...r,author:{displayName:s.displayName,email:s.email,photoURL:s.photoURL,uid:s.uid},retweeter:o}},yi=n.div`
  display: flex;
  gap: 12px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor};
  border-top: none;
  width: 100%;

  & > img {
    border-radius: 50%;
  }
`,wi=n.div`
  display: flex;
  align-items: center;

  & > div {
    padding: 8px;
    border-radius: 50%;

    :hover {
      background: ${({theme:e})=>e.accentHover};
    }

    button {
      background: none;
      border: none;
      color: ${({theme:e})=>e.accent};
      cursor: pointer;
      padding: 0;
      font-size: 1.15rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`,$i=()=>i(wi,{children:[t("div",{children:t("button",{type:"button",title:"Adicionar imagem",children:t(Ue,{})})}),t("div",{children:t("button",{type:"button",title:"Adicionar GIF",children:t(qe,{})})}),t("div",{children:t("button",{type:"button",title:"Adicionar enquete",children:t(Ge,{})})}),t("div",{children:t("button",{type:"button",title:"Adicionar emoji",children:t(_e,{})})}),t("div",{children:t("button",{type:"button",title:"Programar envio",children:t(Qe,{})})}),t("div",{children:t("button",{type:"button",title:"Adicionar localização",children:t(Ve,{})})})]}),ki=n.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  textarea {
    border: none;
    font-size: 1.2rem;
    width: 100%;
    resize: none;
    padding: 0;
    outline: none;
    border: 2px solid transparent;
    background: ${({theme:e})=>e.bg};
    color: ${({theme:e})=>e.text};

    &.invalid {
      border: 2px red solid;
      border-radius: 5px;
    }
  }
`,Ai=n.button`
  border-radius: 20px;
  padding: 2px 12px;
  border: 1px solid ${({theme:e})=>e.borderColor};
  background: ${({theme:e})=>e.bg};
  color: ${({theme:e})=>e.accent};
  font-weight: 700;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 4px;
  margin-bottom: 20px;

  :hover {
    background: ${({theme:e})=>`${e.accent}10`};
  }
`,Ci=n.button`
  border: none;
  font-weight: 700;
  background: none;
  color: ${({theme:e})=>e.accent};
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    background: ${({theme:e})=>`${e.accent}10`};
  }

  svg {
    font-size: 1.1rem;
  }
`,Si=n.div`
  width: 100%;
  border-top: 1px solid ${({theme:e})=>e.borderColor};
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`,ji=n.button`
  padding: 10px 16px;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  color: #fff;
  background: ${({theme:e})=>e.accent};
  cursor: pointer;
  transition: opacity 0.3s ease;

  :hover {
    opacity: 0.9;
  }
`,Ti=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,Ni=n.p`
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.accent};

  &.invalid {
    color: red;
  }
`,Fi=({...e})=>{const[r,d]=l.useState(""),[a,s]=l.useState(!1);return i(ki,{onSubmit:c=>{!a&&e.onSubmit&&e.onSubmit(c),s(!1),d("")},children:[i(Ai,{type:"button",children:[t("p",{children:"Qualquer pessoa"}),t(Je,{})]}),t("textarea",{name:"tweet-content",id:"",placeholder:"O que está acontecendo?",rows:4,value:r,onChange:c=>{const p=c.target.value;s(p.length>140),d(c.target.value)},className:a?"invalid":""}),i(Ti,{children:[i(Ci,{type:"button",children:[t(Ke,{}),"Qualquer pessoa pode responder"]}),t(Ni,{className:a?"invalid":"",children:r&&r.length})]}),i(Si,{children:[t($i,{}),t(ji,{type:"submit",children:"Tweetar"})]})]})},Te=()=>{const{user:e}=x(v),r=async d=>{d.preventDefault();const a=d.target["tweet-content"].value.trim();a.length&&await vi(a)};return e?i(yi,{children:[t("img",{src:e.photoURL??"#",alt:"",width:"48px",height:"48px"}),t(Fi,{onSubmit:d=>r(d)})]}):null},Bi=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s all ease;
  ${e=>e.hideSmall?`@media screen and (max-width: 1020px) {
    display: none;
  }
    `:null}
  ${e=>e.hideLarge?`@media screen and (min-width: 1021px) {
    display: none;
  }
    `:null}

  :hover {
    background: ${({theme:e})=>`${e.text}11`};
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: inherit;

    svg {
      width: 27px;
      height: 27px;
    }
  }
`,k=e=>{const{link:r,icon:d,iconActive:a,hideSmall:s=!1,hideLarge:o=!1,title:c}=e;return t(Bi,{hideSmall:s,hideLarge:o,children:t(C,{to:r,title:c,children:({isActive:p})=>p?a:d})})},Ii=n.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,zi=()=>{const{user:e}=x(v);return i(Ii,{children:[e?t(k,{icon:t(Ye,{}),iconActive:t(Xe,{}),link:"/",title:"Página inicial"}):null,t(k,{icon:t(J,{}),iconActive:t(J,{style:{strokeWidth:"1px"}}),link:"/explore",hideSmall:!0,title:"Explorar"}),t(k,{icon:t(E,{}),iconActive:t(E,{style:{strokeWidth:"1px"}}),link:"/explore",hideLarge:!0,title:"Pesquisar"}),e?i(b,{children:[t(k,{icon:t(Ze,{}),iconActive:t(re,{}),link:"/notifications",title:"Notificações"}),t(k,{icon:t(et,{}),iconActive:t(tt,{}),link:"/messages",title:"Mensagens"}),t(k,{icon:t(it,{}),iconActive:t(oe,{}),link:"/profile",title:"Perfil"})]}):null]})},Hi=n.div`
  padding: 10px;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  fieldset {
    all: unset;
    width: 100%;
  }

  legend {
    margin: 10px 0;
  }

  form > button {
    padding: 8px;
    border-radius: 5px;
    border: none;
    background: ${({theme:e})=>e.accent};
    color: #fff;

    :hover {
      opacity: 0.8;
    }
  }
`,X=n(zt)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`,Ri=n(ue)`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`,Li=n(ue)`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.borderColor};
  box-sizing: border-box;
`,Ei=n(fe)`
  width: 85%;
  height: 85%;
  border: 2px solid #fff;
  border-radius: 50%;
`,Wi=n(fe)`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 2px solid ${({theme:e})=>e.accent};
  border-radius: 10px;
`,Z=[{title:"Azul",color:"#1D9BF0"},{title:"Amarelo",color:"#FFD400"},{title:"Rosa",color:"#F91880"},{title:"Roxo",color:"#7856FF"},{title:"Laranja",color:"#FF7A00"},{title:"Verde",color:"#00BA7C"}],Pi=[S,Dt,me],Di=["#ffffff","#15202B","#000000"],Mi=()=>{const{user:e}=x(v),r=ie();return t(Hi,{children:i("form",{onSubmit:async a=>{a.preventDefault();let s=a.target.fundo.value,o=Pi.filter(h=>h.bg===s)[0];o=o||S;let c=a.target.cor.value||Z[0].color;o={...o,accent:c};const p=$(f,"users",e.uid);await At(p,{theme:{...o}}),r(qt({theme:o})),sessionStorage.setItem("@AuthFirebase:user",JSON.stringify({...e,theme:o}));const g=document.querySelector("meta[name=theme-color]");g==null||g.setAttribute("content",o.bg)},children:[i("fieldset",{children:[t("legend",{children:"Cor"}),t(X,{name:"cor",defaultValue:e==null?void 0:e.theme.accent,children:Z.map(a=>t(Ri,{value:a.color,style:{background:a.color},children:t(Ei,{})},a.title))})]}),i("fieldset",{children:[t("legend",{children:"Plano de fundo"}),t(X,{name:"fundo",defaultValue:e==null?void 0:e.theme.bg,children:Di.map(a=>t(Li,{value:a,style:{background:a},children:t(Wi,{})},a))})]}),t("button",{type:"submit",children:"Aplicar alterações"})]})})},Oi=n.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 4px 2px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  button {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;

    svg {
      color: ${({theme:e})=>e.text};
    }

    :hover {
      background: ${({theme:e})=>`${e.text}11`};
    }

    svg {
      box-sizing: content-box;
      width: 24px;
      height: 24px;
      padding: 2px;
    }

    :first-of-type svg {
      border-radius: 50%;
      padding: 0;
      border: 2px solid ${({theme:e})=>e.text};
    }

    :last-of-type {
      background: ${({theme:e})=>e.accent};
      margin-top: 10px;

      :hover {
        opacity: 0.8;
      }

      svg {
        color: #fff;
      }
    }
  }
`,Ui=n.div`
  padding: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s all ease;

  :hover {
    background: ${({theme:e})=>`${e.text}11`};
  }

  img {
    border-radius: 50%;
  }
`,qi=n.div`
  padding: 12px;
  color: ${({theme:e})=>e.brandColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: ${({theme:e})=>e.accentHover};
  }

  a,
  svg {
    color: inherit;
  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: 28px;
    height: 28px;
  }
`,F=()=>{const{user:e}=x(v);return i(Oi,{children:[i("div",{children:[t(qi,{children:t(ge,{to:"/",title:"Página inicial",children:t(M,{})})}),t(zi,{}),e?i(b,{children:[t(I,{title:"Menu",triggerContent:t(nt,{}),children:t(Mi,{})}),t(I,{title:"Novo tweet",triggerContent:t(rt,{}),children:t(Te,{})})]}):null]}),e?t(Ui,{onClick:Jt,title:"Sair",children:t("img",{src:e.photoURL??"#",alt:"",width:"40px",height:"40px"})}):null]})},Gi=n.div`
  margin-top: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({theme:e})=>e.borderColor};
  padding: 16px;
  border-radius: 16px;
  gap: 8px;

  h2 {
    font-size: 1.25rem;
  }

  p {
    font-size: 0.75rem;
    color: ${({theme:e})=>e.textAlt};
  }

  button {
    border-radius: 25px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    background: #fff;
    color: #000;
    border: 1px solid ${({theme:e})=>e.borderColor};
    word-spacing: 1px;

    svg {
      width: 19px;
      height: 19px;
    }

    :hover {
      opacity: 0.85;
    }
  }
`,_i=()=>i(Gi,{children:[t("h2",{children:"Novo no Twitter?"}),t("p",{children:"Inscreva-se para ter sua própria timeline personalizada!"}),i("button",{type:"button",onClick:q,children:[t(D,{}),t("span",{children:"Inscrever-se no Google"})]})]}),_=n.nav`
  display: flex;
  justify-content: space-evenly;

  .active {
    font-weight: 700;
    opacity: 1;

    & > div > div {
      display: block;
    }
  }

  a {
    text-align: center;
    text-decoration: none;
    color: inherit;
    opacity: 0.75;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      position: relative;
      padding: 16px 0;

      & > div {
        background: ${({theme:e})=>`${e.accent}`};
        height: 4px;
        border-radius: 4px;
        width: 100%;
        position: absolute;
        bottom: 0px;
        left: 0px;
        display: none;
      }
    }

    :hover {
      background: ${({theme:e})=>`${e.bgHover}`};
    }
  }
`,m=n(A)`
  background: ${({theme:e})=>e.bg};
`,Qi=n(_)`
  justify-content: flex-start;

  > a {
    flex-grow: 0;
    padding: 0 16px;
  }
`,Vi=n.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`,Ji=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
  gap: 16px;

  input {
    color: ${({theme:e})=>e.text};
  }

  svg {
    color: ${({theme:e})=>e.text};
  }
`,Ki=n.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor};
`,Yi=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    background: ${({theme:e})=>e.bgHover};
  }

  button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    outline: none;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`,Xi=n(N)`
  min-height: 100vh;
  flex-direction: column;
  border-right: 1px solid ${({theme:e})=>e.borderColor};
  border-left: 1px solid ${({theme:e})=>e.borderColor};
  padding-bottom: 100px;
`,Ne=()=>{const{user:e}=x(v);return i(Vi,{children:[t(T,{children:t("title",{children:"Explorar / Not twitter"})}),t(F,{}),i(Xi,{children:[i(Ki,{children:[i(Ji,{children:[t(Ce,{}),t(Yi,{children:t("button",{children:t(O,{})})})]}),t(Qi,{children:t(C,{to:"",children:i("div",{children:[t("span",{children:"Assuntos do momento"}),t("div",{})]})})})]}),t(m,{sidebar:!1}),t(m,{sidebar:!1}),t(m,{sidebar:!1}),t(m,{sidebar:!1}),t(m,{sidebar:!1}),t(m,{sidebar:!1}),t(m,{sidebar:!1}),t(m,{sidebar:!1}),t(m,{sidebar:!1})]}),i(Se,{children:[e?t(ke,{}):t(_i,{}),t(Ae,{})]})]})},Zi=n.div`
  display: flex;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor};
  width: 100%;
  flex-direction: column;
  padding: 6px;
`,en=n.div`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 12px;
  padding: 4px;
  margin-bottom: 4px;
  align-items: center;
  color: ${({theme:e})=>e.textAlt};
  font-weight: 600;
  font-size: 0.9rem;

  svg {
    justify-self: end;
  }
`,tn=n.img`
  border-radius: 50%;
`,nn=n.div`
  padding: 0 4px;
  display: flex;
  gap: 12px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex-grow: 1;
  }
`,rn=n.div`
  display: flex;
  justify-content: space-between;
  color: ${({theme:e})=>e.textAlt};

  & > div {
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 0.9rem;

    :hover {
      color: ${({theme:e})=>e.accent};

      div {
        background: ${({theme:e})=>e.accentHover};
      }
    }

    :nth-of-type(3):hover {
      color: ${({theme:e})=>e.retweet};

      div {
        background: ${({theme:e})=>e.retweetHover};
      }
    }

    :nth-of-type(4):hover {
      color: ${({theme:e})=>e.like};

      div {
        background: ${({theme:e})=>e.likeHover};
      }
    }

    div {
      padding: 8px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    p {
      margin-left: -4px;
    }
  }

  svg {
    width: 19px;
    height: 19px;
  }
`,Fe=({likes:e,retweets:r})=>i(rn,{children:[t("div",{children:t("div",{children:t(ot,{})})}),t("div",{children:t("div",{children:t(at,{})})}),i("div",{children:[t("div",{children:t(ae,{})}),t("p",{children:r>0&&r})]}),i("div",{children:[t("div",{children:t(st,{})}),t("p",{children:e>0&&e})]}),t("div",{children:t("div",{children:t(dt,{})})})]}),on=n.div`
  display: flex;
  justify-content: space-between;

  p {
    display: flex;
    gap: 4px;
    align-items: center;
    max-width: 100%;

    a {
      font-weight: 600;
    }

    span {
      display: flex;
      align-items: center;
      opacity: 0.75;
    }
  }
`,Be=({displayName:e,email:r,timestamp:d})=>i(on,{children:[i("p",{children:[t("a",{children:e}),i("span",{children:[r," ",t(ct,{})," ",U(d).fromNow()]})]}),t("a",{href:"",children:t(ne,{})})]}),Ie=({tweet:e})=>{var r;return i(Zi,{children:[t(en,{children:e.isRetweet?i(b,{children:[t(ae,{}),i("p",{children:[(r=e.retweeter)==null?void 0:r.displayName," deu retweet"]})]}):null}),i(nn,{children:[t(tn,{src:e.author.photoURL,alt:"",width:"48px",height:"48px"}),i("div",{children:[t(Be,{email:e.author.email,displayName:e.author.displayName,timestamp:e.timestamp&&e.timestamp.toDate()}),t("p",{children:e.content}),t(Fe,{likes:e.likes.length,retweets:e.retweetsCount})]})]})]})},an=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor};
  position: sticky;
  top: 0;
  background: ${({theme:e})=>`${e.bg}aa`};
  backdrop-filter: blur(10px);
  z-index: 1;

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
  }

  & > div,
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div {
    border-radius: 50%;
    padding: 10px;

    :hover {
      background: ${({theme:e})=>`${e.text}11`};
    }
  }

  a,
  svg {
    color: inherit;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,sn=()=>{const[e,r]=l.useState(!1),[d,a]=l.useState([]);return l.useEffect(()=>{(async()=>{const o=le(Ct(f,"posts"),pe("timestamp","desc"));he(o,async c=>{const p=await Promise.all(c.docs.map(async g=>je(g)));a(p)}),r(!1)})()},[]),e?null:i(N,{children:[i(an,{children:[t("h2",{children:"Página inicial"}),t("div",{children:t("a",{href:"#",title:"Vendo tweets mais recentes",children:t(lt,{})})})]}),t(Te,{}),d.map(s=>t(Ie,{tweet:s},s.id))]})},dn=n.main`
  display: flex;
  justify-content: center;
  width: 100%;
`,cn=()=>{const{user:e}=x(v);return e?i(dn,{children:[t(T,{children:t("title",{children:"Página inicial / Not twitter"})}),t(F,{}),t(sn,{}),t(G,{})]}):t(Ne,{})},ln=n.div`
  padding: 12px 16px;
  display: flex;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor};
  ${e=>e.type==="response"?"padding-bottom: 4px;":null};
`,pn=n.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`,Q=n.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-bottom: 12px;

    img {
      border-radius: 50%;
    }
  }
`,V=n.p`
  a {
    font-weight: 700;
    color: inherit;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`,hn=({img:e})=>i(b,{children:[t(Q,{children:t("a",{href:"",children:t("img",{src:e,alt:"",width:"32px",height:"32px"})})}),i(V,{children:[t("a",{href:"",children:"Lorem Ipsum"})," seguiu você"]})]}),R=n.div`
  width: 52px;
  flex-grow: 0;
  display: flex;
  justify-content: flex-end;

  svg {
    width: 25px;
    height: 25px;
  }

  img {
    border-radius: 50%;
  }
`,un=n(R)`
  svg {
    color: ${({theme:e})=>e.like};
  }
`,ee=n(R)`
  svg {
    color: ${({theme:e})=>e.accent};
  }
`,fn=n(R)`
  svg {
    color: ${({theme:e})=>e.text};
  }
`,gn=({type:e,src:r})=>{switch(e){case"notification":return t(ee,{children:t(re,{})});case"like":return t(un,{children:t(pt,{})});case"device":return t(fn,{children:t(M,{})});case"follow":return t(ee,{children:t(oe,{})});case"response":return t(R,{children:t(ge,{to:"",children:t("img",{src:r,alt:"",width:"48px",height:"48px"})})});default:return null}},mn=n.p`
  color: ${({theme:e})=>e.textAlt};
  margin-top: 10px;
`,xn=({img:e})=>i(b,{children:[t(Q,{children:t("a",{href:"",children:t("img",{src:e,alt:"",width:"32px",height:"32px"})})}),i(V,{children:[t("a",{href:"",children:"Lorem Ipsum"})," curtiu seu tweet"]}),t(mn,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, perferendis."})]}),bn=({img:e})=>i(b,{children:[t(Q,{children:t("a",{href:"",children:t("img",{src:e,alt:"",width:"32px",height:"32px"})})}),i(V,{children:["Novas notificações de ",t("a",{href:"",children:"Lorem Ipsum"})]})]}),vn=n.p`
  font-size: 0.9rem;
  color: ${({theme:e})=>e.textAlt};

  a {
    text-decoration: none;
    color: ${({theme:e})=>e.accent};
    font-weight: 500;

    :hover {
      text-decoration: underline;
    }
  }
`,yn=()=>i(b,{children:[t(Be,{displayName:"Lorem Ipsum",email:"elpmaxe@email.com"}),i(vn,{children:["Em resposta a ",t("a",{href:"#",children:"example@email.com"})]}),t("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quasi expedita accusamus quos laboriosam iusto, maxime labore sequi iure laborum."}),t(Fe,{likes:20,retweets:2})]}),w=["https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1674601658~exp=1674602258~hmac=e93af533e61e59091dd8d3447bb05c2df4096a8f1aa312411847b9dab36bb990","https://img.freepik.com/free-psd/3d-illustration-person_23-2149436179.jpg?w=740&t=st=1674601667~exp=1674602267~hmac=ca389aaabeb87367c4b93e751a0eed2b8cf694a303148e6d4b34547463fba2b2","https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=740&t=st=1674601676~exp=1674602276~hmac=4324b456014d8846cbaf30843ef48123c64f48cc157686de291fc9f731c2cd09","https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg?w=740&t=st=1674601683~exp=1674602283~hmac=13d05585af52bb025e1cc828f6ba8da7e252130d2e4c0678d7b2392f04ed966e"],u=({type:e})=>i(ln,{type:e,children:[t(gn,{type:e,src:w[Math.floor(Math.random()*w.length)]}),i(pn,{children:[e!=="response"?null:t(yn,{}),e!=="follow"?null:t(hn,{img:w[Math.floor(Math.random()*w.length)]}),e!=="notification"?null:t(bn,{img:w[Math.floor(Math.random()*w.length)]}),e!=="like"?null:t(xn,{img:w[Math.floor(Math.random()*w.length)]}),e!=="device"?null:t("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, delectus?"})]})]}),wn=()=>i(b,{children:[t(u,{type:"notification"}),t(u,{type:"like"}),t(u,{type:"device"}),t(u,{type:"follow"}),t(u,{type:"response"}),t(u,{type:"like"}),t(u,{type:"like"})]}),$n=()=>i(b,{children:[t(u,{type:"response"}),t(u,{type:"response"}),t(u,{type:"response"}),t(u,{type:"response"}),t(u,{type:"response"}),t(u,{type:"response"})]}),kn=n.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,An=n.div`
  background: ${({theme:e})=>`${e.bg}aa`};
  backdrop-filter: blur(10px);
  width: 100%;
  display: flex;
  flex-direction: column;
  position: sticky;
  z-index: 2;
  top: 0;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor};

  h2 {
    font-size: 1.2rem;
    font-weight: 600px;
  }
`,Cn=n.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({theme:e})=>e.borderColor};
  border-left: 1px solid ${({theme:e})=>e.borderColor};
  height: 100%;
`,ze=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 16px;
  width: 100%;

  h2 {
    flex-grow: 1;
  }
`,W=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  display: flex;

  :hover {
    background: ${({theme:e})=>`${e.text}11`};
    border-radius: 50%;
  }

  a {
    justify-content: center;
    align-items: center;
    display: flex;
    color: inherit;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`,Sn=()=>i(kn,{children:[t(T,{children:t("title",{children:"Notificações / Not twitter"})}),t(F,{}),t(N,{children:i(Cn,{children:[i(An,{children:[i(ze,{children:[t("h2",{children:"Notificações"}),t(W,{children:t("a",{href:"",children:t(O,{})})})]}),i(_,{children:[t(C,{to:"/notifications/",children:i("div",{children:[t("span",{children:"Tudo"}),t("div",{})]})}),t(C,{to:"verified",children:i("div",{children:[t("span",{children:"Verificadas"}),t("div",{})]})}),t(C,{to:"mentions",children:i("div",{children:[t("span",{children:"Menções"}),t("div",{})]})})]})]}),t(Et,{})]})}),t(G,{})]}),jn=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  height: 70vh;

  > div {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 16px;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 0.95rem;
      color: ${({theme:e})=>e.textAlt};

      a {
        color: ${({theme:e})=>e.text};
        font-weight: 600;
      }
    }

    img {
      width: 100%;
    }
  }
`,Tn=()=>t(jn,{children:i("div",{children:[t("img",{src:"https://abs.twimg.com/responsive-web/client-web/verification-check-800x400.v1.52677a99.png",alt:""}),i("div",{children:[i("h2",{children:["Nada para ver aqui.",t("br",{}),"Ainda."]}),i("p",{children:["Curtidas, menções, Retweets e muito mais — quando se trata de uma conta verificada, você encontra aqui."," ",t("a",{href:"https://help.twitter.com/managing-your-account/about-twitter-verified-accounts",target:"_blank",rel:"noopener noreferrer",children:"Saiba mais"})]})]})]})}),Nn=n.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 1100px;
`,Fn=n.div`
  width: 100%;
  max-width: 600px;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    min-height: 100vh;

    > div:last-of-type {
      max-width: 320px;

      > h3,
      p {
        padding: 0 16px;
      }

      > h3 {
        font-size: 1.75rem;
        margin-top: 30px;
      }

      p {
        color: ${({theme:e})=>e.textAlt};
        font-size: 14px;
        margin: 10px 0;
      }
    }
  }

  @media screen and (min-width: 1020px) {
    width: 320px;
  }
`,Bn=n.div`
  display: flex;
  align-items: center;
`,In=n.div`
  display: none;
  border-right: 1px solid ${({theme:e})=>e.borderColor};
  min-height: 100vh;
  justify-content: center;
  align-items: center;

  div {
    max-width: 336px;
    margin: 20px auto;

    h3 {
      font-size: 2rem;
    }

    p {
      color: ${({theme:e})=>e.textAlt};
      margin-top: 10px;
      font-size: 0.9rem;
    }

    button {
      margin-left: 0;
      margin-right: 0;
    }
  }

  @media screen and (min-width: 1020px) {
    display: flex;
    flex-grow: 1;
  }
`,te=n.button`
  margin: 15px 20px;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 30px;
  padding: 16px;
  background-color: ${({theme:e})=>e.accent};
  color: ${({theme:e})=>e.text};
  border: none;
  outline: none;

  :hover {
    opacity: 0.9;
  }
`,zn=()=>i(Nn,{children:[t(T,{children:t("title",{children:"Mensagens / Not twitter"})}),t(F,{}),t(Fn,{children:i(N,{children:[i(ze,{children:[t("h3",{children:"Mensagens"}),i(Bn,{children:[t(W,{children:t("a",{href:"#",children:t(O,{})})}),t(W,{children:t("a",{href:"#",children:t(ht,{})})})]})]}),i("div",{children:[t("h3",{children:"Receba as boas-vindas à sua caixa de entrada!"}),t("p",{children:"Escreva, compartilhe Tweets e muito mais com conversas privadas entre você e outras pessoas no Twitter."}),t(te,{children:"Escrever uma mensagem"})]})]})}),t(In,{children:i("div",{children:[t("h3",{children:"Selecione uma mensagem"}),t("p",{children:"Escolha entre as conversas existentes, inicie uma nova ou continue explorando."}),t(te,{children:"Nova mensagem"})]})})]}),Hn=()=>{const e=Wt();return t(Rn,{onClick:()=>e(-1),children:t(ut,{})})},Rn=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({theme:e})=>e.text};
  padding: 10px;

  svg {
    width: 20px;
    height: 20px;
  }
`,Ln=({displayName:e,tweetsCount:r})=>i(En,{children:[t(Hn,{}),i(Wn,{children:[t("h2",{children:e}),i("p",{children:[r," Tweet",r!==1&&"s"]})]})]}),En=n.div`
  width: 100%;
  padding: 8px 4px;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  background-color: ${({theme:e})=>`${e.bg}bb`};
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 200;
`,Wn=n.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  h2 {
    font-size: 18px;
    font-weight: 600;
  }

  p {
    font-size: 12px;
    color: ${({theme:e})=>e.textAlt};
  }
`,Pn=n.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`,Dn=n(N)`
  min-height: 100%;
`,Mn=n.div`
  min-height: 100vh;
`,On=n.div`
  width: 100%;
  height: 150px;
  background: ${({theme:e})=>e.accent};
`,Un=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -15px;

  button {
    margin-right: 15px;
    padding: 8px 14px;
    border-radius: 30px;
    font-weight: 600;
    color: ${({theme:e})=>e.text};
    background-color: ${({theme:e})=>e.bg};
    border: 1px solid ${({theme:e})=>e.textAlt};

    :hover {
      opacity: 0.9;
    }
  }
`,qn=n.img`
  width: 25%;
  height: 25%;
  min-width: 64px;
  min-height: 64px;
  object-fit: contain;
  border-radius: 50%;
  position: relative;
  margin-top: -10%;
  margin-left: 5%;
  border: 5px solid ${({theme:e})=>e.bg};
`,Gn=n.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;

  h2 {
    font-weight: 600;
    font-size: 20px;
  }

  h3 {
    font-weight: 400;
    font-size: 0.9rem;
    color: ${({theme:e})=>e.textAlt};
  }

  div:last-of-type {
    display: flex;
    align-items: center;
    gap: 20px;

    p {
      font-size: 14px;
      color: ${({theme:e})=>e.textAlt};
    }

    p span {
      font-weight: 600;
      color: ${({theme:e})=>e.text};
    }
  }
`,_n=n(_)`
  border-bottom: 1px solid ${({theme:e})=>e.borderColor};

  span {
    font-size: 0.95rem;
  }
`,Qn=n.div`
  display: flex;
  flex-direction: column;
`,Vn=()=>{const{user:e}=x(v),[r,d]=l.useState(!0),[a,s]=l.useState([]);return l.useEffect(()=>{(async()=>{const c=le(ce(f,"users",e.uid,"posts"),pe("timestamp","desc"));he(c,async p=>{const g=await Promise.all(p.docs.map(async h=>je(h)));s(g)}),d(!1)})()},[]),i(Pn,{children:[t(T,{children:i("title",{children:[e==null?void 0:e.displayName," / Not twitter"]})}),t(F,{}),i(Dn,{children:[t(Ln,{displayName:e.displayName,tweetsCount:20}),i(Mn,{children:[t(On,{}),i(Un,{children:[t(qn,{src:(e==null?void 0:e.photoURL)||"#",alt:"Sua foto de perfil"}),t("button",{children:"Configurar perfil"})]}),i(Gn,{children:[i("div",{children:[t("h2",{children:e==null?void 0:e.displayName}),t("h3",{children:e==null?void 0:e.email})]}),i("div",{children:[i("p",{children:[t("span",{children:"2"})," seguindo"]}),i("p",{children:[t("span",{children:"10"})," seguidores"]})]})]}),i(_n,{children:[t(C,{to:"/profile",children:i("div",{children:[t("span",{children:"Tweets"}),t("div",{})]})}),t("a",{href:"/#/profile",children:i("div",{children:[t("span",{children:"Tweets e respostas"}),t("div",{})]})}),t("a",{href:"/#/profile",children:i("div",{children:[t("span",{children:"Mídias"}),t("div",{})]})}),t("a",{href:"/#/profile",children:i("div",{children:[t("span",{children:"Curtidas"}),t("div",{})]})})]}),t(Qn,{children:r?"LOADING...":a.map(o=>t(Ie,{tweet:o},o.id))})]})]}),t(G,{})]})},Jn=()=>t(Ht,{children:i(Pt,{children:[t(y,{path:"",element:t(cn,{})}),t(y,{path:"explore",element:t(Ne,{})}),i(y,{path:"notifications",element:t(Sn,{}),children:[t(y,{path:"",element:t(wn,{})}),t(y,{path:"verified",element:t(Tn,{})}),t(y,{path:"mentions",element:t($n,{})})]}),t(y,{path:"messages",element:t(zn,{})}),t(y,{path:"profile",element:t(Vn,{})})]})});U.locale("pt-br");U.extend(Lt);function Kn(){const e=ie();return l.useEffect(()=>{const r=sessionStorage.getItem("@AuthFirebase:user"),d=r?JSON.parse(r):null;d&&e(z({user:d}))},[]),i(si,{children:[t(Mt,{}),t(Rt,{children:t(Jn,{})}),t(oi,{})]})}Re.createRoot(document.getElementById("root")).render(t(He.StrictMode,{children:t(Le,{store:j,children:t(Kn,{})})}));
