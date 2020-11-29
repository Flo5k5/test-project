import{jsx as n,jsxs as i,Fragment as e}from"react/jsx-runtime";import t,{createGlobalStyle as o,ThemeProvider as r}from"styled-components";import{createContext as a,useState as d,useContext as l,useEffect as c}from"react";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var p=function(){return(p=Object.assign||function(n){for(var i,e=1,t=arguments.length;e<t;e++)for(var o in i=arguments[e])Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o]);return n}).apply(this,arguments)};function s(n,i){return Object.defineProperty?Object.defineProperty(n,"raw",{value:i}):n.raw=i,n}var h,f,u,g,m,x,b,w,v,k,y,F,C,L,j,z,M,S,P,A,I,W,H,O,B=function(i){var e=i.name,t=i.size,o=void 0===t?"":t,r=i.onClick;return n("i",p({className:"material-icons "+o,role:r&&"button",onClick:r},{children:e}),void 0)},R=t.div(h||(h=s(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  background-color: ",";\n  color: ",";\n  align-items: center;\n  justify-content: center;\n"],["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  background-color: ",";\n  color: ",";\n  align-items: center;\n  justify-content: center;\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.onPrimary})),T=function(){return n(R,{children:n(B,{name:"broken_image"},void 0)},void 0)},E=t.div(f||(f=s(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  font-weight: bold;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  text-align: center;\n  ","\n  ","\n"],["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  font-weight: bold;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  text-align: center;\n  ","\n  ","\n"])),(function(n){var i=n.theme;return i.background&&"background-color: "+i.background+"bf;"}),(function(n){return n.isVisible?"visibility: visible;":"visibility: hidden;"})),_=t.img(u||(u=s(["\n  ","\n  ","\n  vertical-align: top;\n"],["\n  ","\n  ","\n  vertical-align: top;\n"])),(function(n){return n.fullWidth&&"width: 100%;"}),(function(n){return n.fullHeight&&"height: 100%;"})),V=t.input(g||(g=s(["\n  box-sizing: border-box;\n  ","\n\n  &:focus {\n    outline: none;\n  }\n"],["\n  box-sizing: border-box;\n  ","\n\n  &:focus {\n    outline: none;\n  }\n"])),(function(n){return n.fullWidth&&"width: 100%;"})),N=t.div(m||(m=s(["\n  display: inline-flex;\n"],["\n  display: inline-flex;\n"]))),q=o(x||(x=s(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n    font-family: Roboto, Helvetica, Arial, sans-serif;\n  }\n\n  body {\n    background: ",";\n    color: ",';\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    font-family: Roboto, Helvetica, Arial, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    transition: all 0.25s linear;\n  }\n  \n  [type="search"]::-webkit-search-cancel-button,\n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n    appearance: none;\n  }\n  '],["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n    font-family: Roboto, Helvetica, Arial, sans-serif;\n  }\n\n  body {\n    background: ",";\n    color: ",';\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    font-family: Roboto, Helvetica, Arial, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    transition: all 0.25s linear;\n  }\n  \n  [type="search"]::-webkit-search-cancel-button,\n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n    appearance: none;\n  }\n  '])),(function(n){return n.theme.background}),(function(n){return n.theme.onBackground})),D=function(){var n=window.localStorage.getItem("theme");return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&!n?(window.localStorage.setItem("theme","dark"),"dark"):n||(window.localStorage.setItem("theme","light"),"light")},G=a({themeMode:D(),toggleMode:function(){}}),J={light:{primary:"#60A5FA",onPrimary:"#FFFFFF",background:"#FFFFFF",onBackground:"#000000"},dark:{primary:"#1F2937",onPrimary:"#FFFFFF",background:"#4B5563",onBackground:"#FFFFFF"}},K=function(t){var o=t.children,a=d(D()),l=a[0],c=a[1];return n(G.Provider,p({value:{themeMode:l,toggleMode:function(){var n="light"===l?"dark":"light";window.localStorage.setItem("theme",n),c(n)}}},{children:n(r,p({theme:J[l]},{children:i(e,{children:[n(q,{},void 0),o]},void 0)}),void 0)}),void 0)},Q={mobileS:"320px",mobileM:"375px",mobileL:"425px",tablet:"768px",laptop:"1024px",laptopL:"1440px",desktop:"2560px"},U={mobileS:"(min-width: "+Q.mobileS+")",mobileM:"(min-width: "+Q.mobileM+")",mobileL:"(min-width: "+Q.mobileL+")",tablet:"(min-width: "+Q.tablet+")",laptop:"(min-width: "+Q.laptop+")",laptopL:"(min-width: "+Q.laptopL+")",desktop:"(min-width: "+Q.desktop+")",desktopL:"(min-width: "+Q.desktop+")"},X={mobileS:"(max-width: "+Q.mobileS+")",mobileM:"(max-width: "+Q.mobileM+")",mobileL:"(max-width: "+Q.mobileL+")",tablet:"(max-width: "+Q.tablet+")",laptop:"(max-width: "+Q.laptop+")",laptopL:"(max-width: "+Q.laptopL+")",desktop:"(max-width: "+Q.desktop+")",desktopL:"(max-width: "+Q.desktop+")"},Y=t.ul(b||(b=s(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 0;\n  gap: 5px;\n\n  & li {\n    ","\n  }\n\n  @media "," {\n    gap: 4px;\n    & li {\n      ","\n    }\n  }\n\n  @media "," {\n    gap: 3px;\n    & li {\n      ","\n    }\n  }\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 0;\n  gap: 5px;\n\n  & li {\n    ","\n  }\n\n  @media "," {\n    gap: 4px;\n    & li {\n      ","\n    }\n  }\n\n  @media "," {\n    gap: 3px;\n    & li {\n      ","\n    }\n  }\n"])),(function(n){var i=n.columns;return i&&"width: calc(calc(100%/"+i+") - "+(i-1)+"px)"}),X.tablet,(function(n){var i=n.columns;return i&&"width: calc(calc(100%/"+(i-1)+") - "+(i-2)+"px)"}),X.mobileL,(function(n){var i=n.columns;return i&&"width: calc(calc(100%/"+(i-3)+") - "+(i-3)+"px)"})),Z=t.li(w||(w=s(["\n  position: relative;\n  width: calc(100% / 3);\n  overflow: hidden;\n  ","\n  ","\n"],["\n  position: relative;\n  width: calc(100% / 3);\n  overflow: hidden;\n  ","\n  ","\n"])),(function(n){return n.hasTextCentered&&"text-align: center;"}),(function(n){return n.onClick&&"cursor: pointer;"})),$=t.span(v||(v=s([""],[""]))),nn=t.button(k||(k=s(["\n  background: #fff;\n  border: 1px solid #999;\n  font-size: 3em;\n  font-weight: bold;\n  width: ",";\n  height: 176px;\n  margin-right: -1px;\n  margin-top: -1px;\n  padding: 0;\n  text-align: center;\n"],["\n  background: #fff;\n  border: 1px solid #999;\n  font-size: 3em;\n  font-weight: bold;\n  width: ",";\n  height: 176px;\n  margin-right: -1px;\n  margin-top: -1px;\n  padding: 0;\n  text-align: center;\n"])),(function(n){return n.width||"auto"})),en=t.h2(y||(y=s(["\n  font-size: 1.5em;\n  ","\n"],["\n  font-size: 1.5em;\n  ","\n"])),(function(n){return n.hasTextCentered&&"text-align: center;"})),tn=t.h3(F||(F=s(["\n  ","\n"],["\n  ","\n"])),(function(n){return n.hasTextCentered&&"text-align: center;"})),on=function(e){var t=e.id,o=e.imageSource,r=e.title,a=e.onClick,l=d(!1),c=l[0],s=l[1],h=d(!1),f=h[0],u=h[1];return i(Z,p({onClick:function(){return n=t,void(a&&a(n));var n},onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)}},{children:[!f&&n(_,{alt:r,fullWidth:!0,src:o,loading:"lazy",onError:function(){u(!0)}},void 0),f&&n(T,{},void 0),n(E,p({isVisible:c},{children:n("p",{children:r},void 0)}),void 0)]}),void 0)},rn=t.div(C||(C=s(["\n  ","\n"],["\n  ","\n"])),(function(n){return n.fullWidth&&"width: 100%;"})),an=t.div(L||(L=s(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px auto;\n  padding: 0 10px;\n  ","\n\n  @media "," {\n    max-width: 700px;\n  }\n\n  @media "," {\n    max-width: 800px;\n  }\n\n  @media "," {\n    max-width: 1400px;\n  }\n"],["\n  display: flex;\n  flex-direction: column;\n  margin: 10px auto;\n  padding: 0 10px;\n  ","\n\n  @media "," {\n    max-width: 700px;\n  }\n\n  @media "," {\n    max-width: 800px;\n  }\n\n  @media "," {\n    max-width: 1400px;\n  }\n"])),(function(n){return n.fullWidth&&"width: 100%;"}),U.tablet,U.laptop,U.desktop),dn=t.div(j||(j=s(["\n  position: relative;\n"],["\n  position: relative;\n"]))),ln=t.label(z||(z=s(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 42px;\n  margin: 0;\n  padding: 0;\n  border-radius: 15px;\n  background: #bebebe;\n  cursor: pointer;\n  &::after {\n    content: '';\n    display: block;\n    border-radius: 50%;\n    width: 18px;\n    height: 18px;\n    margin: 3px;\n    background: #ffffff;\n    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);\n    transition: 0.2s;\n  }\n"],["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 42px;\n  margin: 0;\n  padding: 0;\n  border-radius: 15px;\n  background: #bebebe;\n  cursor: pointer;\n  &::after {\n    content: '';\n    display: block;\n    border-radius: 50%;\n    width: 18px;\n    height: 18px;\n    margin: 3px;\n    background: #ffffff;\n    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);\n    transition: 0.2s;\n  }\n"]))),cn=t.input(M||(M=s(["\n  opacity: 0;\n  z-index: 1;\n  border-radius: 15px;\n  width: 42px;\n  &:checked + "," {\n    &::after {\n      content: '';\n      display: block;\n      border-radius: 50%;\n      width: 18px;\n      height: 18px;\n      margin-left: 21px;\n      transition: 0.2s;\n    }\n  }\n"],["\n  opacity: 0;\n  z-index: 1;\n  border-radius: 15px;\n  width: 42px;\n  &:checked + "," {\n    &::after {\n      content: '';\n      display: block;\n      border-radius: 50%;\n      width: 18px;\n      height: 18px;\n      margin-left: 21px;\n      transition: 0.2s;\n    }\n  }\n"])),ln),pn=function(e){var t=e.isChecked,o=e.onChange;return i(dn,{children:[n(cn,{id:"checkbox",type:"checkbox",checked:t,onChange:o},void 0),n(ln,{htmlFor:"checkbox"},void 0)]},void 0)},sn=function(){var e=l(G),t=e.themeMode,o=e.toggleMode;return i(N,{children:[n(B,{name:"wb_sunny"},void 0),n(pn,{isChecked:"dark"===t,onChange:o},void 0),n(B,{name:"brightness_3"},void 0)]},void 0)},hn=t.header(S||(S=s(["\n  display: grid;\n  align-items: center;\n  padding: 0 10px;\n  ","\n\n  & a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  & > * {\n    grid-column-start: 1;\n    grid-row-start: 1;\n    justify-self: center;\n    align-items: center;\n  }\n\n  & > *:first-child {\n    justify-self: left;\n  }\n\n  & > *:last-child {\n    justify-self: right;\n\n    @media "," {\n      visibility: hidden;\n    }\n  }\n"],["\n  display: grid;\n  align-items: center;\n  padding: 0 10px;\n  ","\n\n  & a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  & > * {\n    grid-column-start: 1;\n    grid-row-start: 1;\n    justify-self: center;\n    align-items: center;\n  }\n\n  & > *:first-child {\n    justify-self: left;\n  }\n\n  & > *:last-child {\n    justify-self: right;\n\n    @media "," {\n      visibility: hidden;\n    }\n  }\n"])),(function(n){var i=n.theme;return i&&"\n    color:"+i.onPrimary+";\n    background-color: "+i.primary+";\n  "}),X.mobileL),fn=t.label(P||(P=s(["\n  display: none;\n"],["\n  display: none;\n"]))),un=t.div(A||(A=s(["\n  display: flex;\n  align-items: center;\n  background-color: #ffffff;\n  color: black;\n  height: 30px;\n  padding: 3px 5px;\n  border: solid 1px #4b5563;\n  border-radius: 5px;\n\n  & > "," {\n    flex: 1;\n    padding: 0;\n    margin: 0;\n    border: 0;\n    border: none;\n    color: black;\n    background-color: transparent;\n  }\n\n  & > i {\n    cursor: pointer;\n  }\n"],["\n  display: flex;\n  align-items: center;\n  background-color: #ffffff;\n  color: black;\n  height: 30px;\n  padding: 3px 5px;\n  border: solid 1px #4b5563;\n  border-radius: 5px;\n\n  & > "," {\n    flex: 1;\n    padding: 0;\n    margin: 0;\n    border: 0;\n    border: none;\n    color: black;\n    background-color: transparent;\n  }\n\n  & > i {\n    cursor: pointer;\n  }\n"])),V),gn=function(e){var t=e.placeholder,o=e.onChange,r=d(""),a=r[0],l=r[1];c((function(){o&&o(a)}),[o,a]);return i(un,{children:[n(fn,p({htmlFor:"search"},{children:"Search:"}),void 0),n(V,{"aria-label":"Search:",id:"search",type:"search",placeholder:t,onChange:function(n){var i=n.target.value;l(i)},value:a},void 0),a&&n(B,{name:"close",onClick:function(){l("")}},void 0)]},void 0)},mn=t.div(I||(I=s(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"],["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]))),xn=t.article(W||(W=s([""],[""]))),bn=t.div(H||(H=s([""],[""]))),wn=t.div(O||(O=s(["\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  padding-top: 10px;\n\n  @media "," {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  & "," {\n    margin-top: 0;\n  }\n\n  ","\n"],["\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  padding-top: 10px;\n\n  @media "," {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  & "," {\n    margin-top: 0;\n  }\n\n  ","\n"])),X.mobileL,tn,(function(n){return n.hasImage&&"\n        & > "+xn+" {\n            width: 70%;\n\n            @media "+X.mobileL+" {\n              width: 100%;\n            }\n        }\n\n        & > "+bn+" {\n            width: 30%;\n        }\n  "})),vn=function(e){var t=e.children,o=e.title,r=e.imageSource,a=d(!1),l=a[0],c=a[1];return i(wn,p({hasImage:!!r},{children:[i(xn,{children:[n("header",{children:n(tn,{children:o},void 0)},void 0),n("section",{children:t},void 0)]},void 0),r&&i(bn,{children:[!l&&n(_,{alt:o,fullWidth:!0,src:r,loading:"lazy",onError:function(){c(!0)}},void 0),l&&n(T,{},void 0)]},void 0)]}),void 0)},kn=function(i){var e=i.items,t=i.onCardClick;return n(Y,p({columns:5},{children:e.map((function(i){var e=i.id,o=i.imageSource,r=i.title;return n(on,{id:e,imageSource:o,title:r,onClick:t},e)}))}),void 0)};export{vn as Article,T as BrokenImage,on as Card,kn as CardList,E as CardOverlay,rn as Container,an as ContentWrapper,sn as DarkModeToggleButton,q as GlobalStyles,hn as Header,_ as Image,N as InlineFlex,V as Input,Y as List,Z as ListItem,B as MaterialIcon,gn as SearchBar,$ as Text,G as ThemeModeContext,K as ThemeProvider,nn as Tile,mn as TileBoard,en as Title2,tn as Title3,pn as ToggleButton,Q as devices,D as getInitialThemeMode,X as maxWidthDevice,U as minWidthDevice,J as themes};
