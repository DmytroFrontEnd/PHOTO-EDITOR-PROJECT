(this["webpackJsonpphoto-editor"]=this["webpackJsonpphoto-editor"]||[]).push([[0],[,,,function(e,t,a){e.exports={image:"Photos_image__2E4jy",imageDiv:"Photos_imageDiv__1jY2w"}},,,function(e,t,a){e.exports={editorImg:"Editor_editorImg__3YJBZ"}},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),s=a(1),c=a.n(s),r=a(5),n=a.n(r),o=(a(12),a(13),a(2)),u=a(6),l=a.n(u),m=function(e){var t={width:"100%",height:"100%",objectFit:"contain",filter:"opacity(".concat(e.opacity,"%) sepia(").concat(e.sepia,"%) saturate(").concat(e.saturate,"%) hue-rotate(").concat(e.hueRotate,"deg) grayscale(").concat(e.grayscale,"%) brightness(").concat(e.brightness,"%) contrast(").concat(e.contrast,"%) blur(").concat(e.blur,"px)")};return Object(i.jsx)("div",{className:"editor",children:Object(i.jsx)("div",{className:l.a.editorImg,children:e.image?Object(i.jsx)("img",{style:t,src:e.imageArr[e.image-1].img,alt:"/"}):null})})},g=[{img:a.p+"static/media/photo1.777afb19.jpeg",opacity:"100",sepia:"0",saturate:"100",hueRotate:"0",grayscale:"0",brightness:"100",contrast:"100",blur:"0"},{img:a.p+"static/media/photo2.1e33f1a3.jpeg",opacity:"100",sepia:"0",saturate:"100",hueRotate:"0",grayscale:"0",brightness:"100",contrast:"100",blur:"0"},{img:a.p+"static/media/photo3.12ae9907.jpeg",opacity:"100",sepia:"0",saturate:"100",hueRotate:"0",grayscale:"0",brightness:"100",contrast:"100",blur:"0"},{img:a.p+"static/media/photo4.6b238c70.jpeg",opacity:"100",sepia:"0",saturate:"100",hueRotate:"0",grayscale:"0",brightness:"100",contrast:"100",blur:"0"},{img:a.p+"static/media/photo5.ee15ab6f.jpeg",opacity:"100",sepia:"0",saturate:"100",hueRotate:"0",grayscale:"0",brightness:"100",contrast:"100",blur:"0"},{img:a.p+"static/media/photo6.fd9f6265.jpeg",opacity:"100",sepia:"0",saturate:"100",hueRotate:"0",grayscale:"0",brightness:"100",contrast:"100",blur:"0"},{img:a.p+"static/media/photo7.3a3ed14a.jpeg",opacity:"100",sepia:"0",saturate:"100",hueRotate:"0",grayscale:"0",brightness:"100",contrast:"100",blur:"0"},{img:a.p+"static/media/photo8.b9e79374.jpeg",opacity:"100",sepia:"0",saturate:"100",hueRotate:"0",grayscale:"0",brightness:"100",contrast:"100",blur:"0"},{img:a.p+"static/media/photo9.03c0ce43.jpeg",opacity:"100",sepia:"0",saturate:"100",hueRotate:"0",grayscale:"0",brightness:"100",contrast:"100",blur:"0"},{img:a.p+"static/media/photo10.add36828.jpeg",opacity:"100",sepia:"0",saturate:"100",hueRotate:"0",grayscale:"0",brightness:"100",contrast:"100",blur:"0"}],p=a(3),b=a.n(p),j=function(e){return Object(i.jsx)("div",{className:"photos",children:Object(i.jsxs)("div",{className:b.a.photosContainer,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h1",{className:"click",children:"Choose the image"})}),Object(i.jsx)("div",{className:b.a.imageDiv,children:g.map((function(t,a){return Object(i.jsx)("img",{className:b.a.image,onClick:function(){return e.imageHandler(a)},src:t.img,alt:"/"},a)}))})]})})},h=function(e){return Object(i.jsx)("div",{className:"range",children:Object(i.jsx)("div",{children:e.array.map((function(t,a){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:t.name}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:t.value}),Object(i.jsx)("input",{min:t.min,max:t.max,onChange:function(t){return e.inputHandler(t,a)},value:t.value,type:"range"})]})]},a)}))})})},d=function(){var e=Object(s.useState)(3),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(g[a-1].opacity),n=Object(o.a)(r,2),u=n[0],l=n[1],p=Object(s.useState)(g[a-1].sepia),b=Object(o.a)(p,2),d=b[0],O=b[1],v=Object(s.useState)(g[a-1].saturate),y=Object(o.a)(v,2),x=y[0],f=y[1],S=Object(s.useState)(g[a-1].hueRotate),R=Object(o.a)(S,2),N=R[0],C=R[1],_=Object(s.useState)(g[a-1].grayscale),B=Object(o.a)(_,2),H=B[0],F=B[1],I=Object(s.useState)(g[a-1].brightness),k=Object(o.a)(I,2),w=k[0],D=k[1],P=Object(s.useState)(g[a-1].contrast),A=Object(o.a)(P,2),E=A[0],J=A[1],G=Object(s.useState)(g[a-1].blur),L=Object(o.a)(G,2),T=L[0],Y=L[1],M=[{name:"Opacity",value:u,min:0,max:100},{name:"Sepia",value:d,min:0,max:100},{name:"Saturate",value:x,min:0,max:200},{name:"Hue-rotate",value:N,min:0,max:360},{name:"Gray-Scale",value:H,min:0,max:100},{name:"Brightness",value:w,min:0,max:200},{name:"Contrast",value:E,min:0,max:200},{name:"Blur",value:T,min:0,max:20}];return Object(i.jsxs)("div",{className:"main",children:[Object(i.jsx)(j,{imageHandler:function(e){c(e+1),l(g[e].opacity),O(g[e].sepia),f(g[e].saturate),C(g[e].hueRotate),F(g[e].grayscale),D(g[e].brightness),J(g[e].contrast),Y(g[e].blur)}}),Object(i.jsx)(m,{blur:T,contrast:E,brightness:w,hueRotate:N,saturate:x,sepia:d,imageArr:g,opacity:u,image:a,grayscale:H}),Object(i.jsx)(h,{inputHandler:function(e,t){return"Opacity"===M[t].name?l(e.target.value):"Sepia"===M[t].name?O(e.target.value):"Saturate"===M[t].name?f(e.target.value):"Hue-rotate"===M[t].name?C(e.target.value):"Gray-Scale"===M[t].name?F(e.target.value):"Brightness"===M[t].name?D(e.target.value):"Contrast"===M[t].name?J(e.target.value):void("Blur"===M[t].name&&Y(e.target.value))},array:M})]})};var O=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(d,{})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),i(e),s(e),c(e),r(e)}))};n.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),v()}],[[14,1,2]]]);
//# sourceMappingURL=main.75475f2b.chunk.js.map