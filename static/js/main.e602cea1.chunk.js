(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{31:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var r,o,c,a,i,s,d,l,u,b,j,h,f,x,m,g,p,O,k,C,v,y=t(1),T=t.n(y),w=t(7),A=t.n(w),E=t(5),S=t(3),D=t(4),_=D.a.input(r||(r=Object(S.a)(["\n  appearance: none;\n  font-size: 1.5rem;\n  width: 0.9em;\n  height: 0.9em;\n  margin: 0;\n  margin-right: 0.5em;\n  line-height: 0.6;\n  background-color: transparent;\n  border: 1px solid hsl(234, 11%, 52%);\n  border-radius: 1em;\n  transform: translateY(-0.075em);\n  overflow: hidden;\n  display: grid;\n  place-content: center;\n\n  &::before {\n    content: \"\";\n    text-align: center;\n    width: 0.9em;\n    height: 0.9em;\n    border-radius: 1em;\n    transition: 150ms transform ease-in-out;\n    transform: scale(0);\n    background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));\n    );\n  }\n\n  &:checked::before {\n      content: url('./images/icon-check.svg');\n      transform: scale(1);\n  }\n"]))),z=t(0),K=function(e){var n=e.checked,t=e.onChange;return Object(z.jsx)("label",{children:Object(z.jsx)(_,{type:"checkbox",name:"checkbox",checked:n,onChange:t})})},M=t(8),P=t(12),F=function(e,n){switch(n.type){case"ADD_TASK":return{tasks:[].concat(Object(P.a)(e.tasks),[n.payload])};case"REMOVE_TASK":return{tasks:e.tasks.filter((function(e){return e!==n.payload}))};case"UPDATE_TASK":return{tasks:n.payload};case"CLEAR_COMPLETED_TASKS":return{tasks:e.tasks.filter((function(e){return!1===e.isChecked}))};default:return e}},L={tasks:[]},I=Object(y.createContext)(L),R=function(e){var n=e.children,t=Object(y.useReducer)(F,L),r=Object(E.a)(t,2),o=r[0],c=r[1];return Object(z.jsx)(I.Provider,{value:{tasks:o.tasks,addTask:function(e){c({type:"ADD_TASK",payload:e})},removeTask:function(e){c({type:"REMOVE_TASK",payload:e})},updateTask:function(e){c({type:"UPDATE_TASK",payload:e})},clearCompletedTasks:function(e){c({type:"CLEAR_COMPLETED_TASKS",payload:e})}},children:n})},q=D.a.form(o||(o=Object(S.a)(["\n  display: flex;\n  padding: 1rem;\n  background-color: ",";\n  color: ",";\n  border: none;\n  border-radius: 0.5rem;\n"])),(function(e){return e.backgroundColor||"hsl(235, 24%, 19%)"}),(function(e){return e.textColor||"#ffffff"})),B=D.a.label(c||(c=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 0.75rem;\n  height: 0.75rem;\n  background-color: hsl(234, 11%, 52%);\n  border-radius: 2rem;\n  padding: 0.5rem;\n  margin-right: 0.5rem;\n  cursor: pointer;\n"]))),J=D.a.input(a||(a=Object(S.a)(["\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]))),U=function(){return Math.floor(1e3+9e3*Math.random())},V=function(e){var n=e.backgroundColor,t=e.textColor,r=Object(y.useState)({text:"",isChecked:!1,id:U()}),o=Object(E.a)(r,2),c=o[0],a=o[1],i=Object(y.useContext)(I).addTask;return Object(z.jsxs)(q,{onSubmit:function(e){c.text.length&&(e.preventDefault(),i(c),a({text:"",isChecked:!1,id:U()}))},backgroundColor:n,children:[Object(z.jsx)(B,{htmlFor:"addTodo",children:Object(z.jsx)("img",{src:"./images/icon-add.svg",alt:"add symbol"})}),Object(z.jsx)(J,{type:"submit",value:"submit",id:"addTodo",name:"add-to-do"}),Object(z.jsx)(ne,{id:"createTodo",value:c.text,onChange:function(e){e.preventDefault(),a(Object(M.a)(Object(M.a)({},c),{},{text:e.target.value}))},textColor:t,placeholder:"Create a new todo...",required:!0})]})},Y=D.a.span(i||(i=Object(S.a)(["\n  text-decoration: ",";\n  opacity: ",";\n  color: ",";\n"])),(function(e){return e.isChecked?"line-through":"none"}),(function(e){return e.isChecked?"30%":"100%"}),(function(e){return e.textColor||"#ffffff"})),G=function(e){var n=e.children,t=e.isChecked,r=e.textColor;return Object(z.jsx)(Y,{isChecked:t,textColor:r,children:n})},H=D.a.div(s||(s=Object(S.a)(["\n  display: flex;\n  align-items: center;\n"]))),N=function(e){var n=e.item,t=e.textColor,r=Object(y.useContext)(I),o=r.tasks,c=r.updateTask;return Object(z.jsxs)(H,{children:[Object(z.jsx)(K,{onChange:function(){return function(e){var n=o.map((function(n){return n.id===e?Object(M.a)(Object(M.a)({},n),{},{isChecked:!n.isChecked}):n}));c(n)}(n.id)},checked:n.isChecked}),Object(z.jsx)(G,{isChecked:n.isChecked,textColor:t,children:n.text})]})},Q=D.a.header(d||(d=Object(S.a)(["\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n"]))),W=D.a.h1(l||(l=Object(S.a)(["\n  letter-spacing: 1rem;\n  padding-top: 1rem;\n"]))),X=function(e){var n=e.handleOnClick,t=e.darkmode;return Object(z.jsxs)(Q,{children:[Object(z.jsx)(W,{children:"TODO"}),Object(z.jsx)("span",{children:t?Object(z.jsx)("img",{src:"./images/icon-sun.svg",alt:"sun",onClick:n}):Object(z.jsx)("img",{src:"./images/icon-moon.svg",alt:"moon",onClick:n})})]})},Z=D.a.footer(u||(u=Object(S.a)(["\n  color: hsl(234, 11%, 52%);\n  text-align: center;\n  margin-top: 1em;\n"]))),$=function(){return Object(z.jsx)(Z,{children:"Drag and drop to reorder list"})},ee=D.a.input(b||(b=Object(S.a)(["\n  color: ",";\n  border: none;\n  background-color: transparent;\n\n  ::placeholder {\n    color: hsl(234, 11%, 52%);\n  }\n\n  :focus {\n    outline: none;\n  }\n"])),(function(e){return e.textColor||"#ffffff"})),ne=function(e){var n=e.value,t=e.onChange,r=e.placeholder,o=e.textColor,c=e.required;return Object(z.jsx)(ee,{type:"text",placeholder:r,value:n,onChange:t,textColor:o,required:c})},te=D.a.input(j||(j=Object(S.a)(["\n  background-color: transparent;\n  border: none;\n  color: hsl(234, 11%, 52%);\n  margin-left: 0.5rem;\n  z-index: 10;\n  cursor: pointer;\n"]))),re=function(e){var n=e.item,t=Object(y.useContext)(I).removeTask;return Object(z.jsx)(te,{type:"image",name:"remove button",onClick:function(e){e.stopPropagation(),t(n)},src:"./images/icon-cross.svg",alt:"close"})},oe=D.a.div(h||(h=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.9rem;\n  padding: 1.5em 1em;\n  color: hsl(234, 11%, 52%);\n"]))),ce=D.a.button(f||(f=Object(S.a)(["\n  background: transparent;\n  border: none;\n  color: hsl(234, 11%, 52%);\n  cursor: pointer;\n"]))),ae=function(){var e,n=Object(y.useContext)(I),t=n.tasks,r=n.clearCompletedTasks;return Object(z.jsxs)(oe,{children:[Object(z.jsx)("span",{children:(e=t.filter((function(e){return!1===e.isChecked})),e.length>1?"".concat(e.length," Items Left"):1===e.length?"1 Item Left":"You're all done!")}),Object(z.jsx)(ce,{onClick:function(){t.forEach((function(e){return r(e)}))},children:"Clear Completed"})]})},ie=t(15),se=t(21),de=D.a.ul(x||(x=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  margin: 0;\n  color: #ffffff;\n  border: none;\n  border-radius: 0.5rem;\n  list-style: none;\n  margin-top: 1em;\n"]))),le=D.a.li(m||(m=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.9rem;\n  padding: 1.5em 1em;\n  border-bottom: 1px solid hsl(234, 11%, 52%);\n  z-index: 2;\n"]))),ue=Object(ie.a)((function(e){var n=e.children;return Object(z.jsx)(de,{children:n})})),be=Object(ie.b)((function(e){var n=e.children;return Object(z.jsx)(le,{children:n})})),je=function(e){var n=e.textColor,t=Object(y.useContext)(I),r=t.tasks,o=t.updateTask;return Object(z.jsx)(ue,{onSortEnd:function(e){var n=e.oldIndex,t=e.newIndex,c=Object(se.a)(r,n,t);o(c)},children:r.map((function(e,t){return Object(z.jsxs)(be,{index:t,children:[Object(z.jsx)(N,{item:e,textColor:n}),Object(z.jsx)(re,{item:e})]},e.id)}))})},he=D.a.div(g||(g=Object(S.a)(["\n  background-color: ",";\n  border-radius: 0.5em;\n"])),(function(e){return e.backgroundColor||"hsl(235, 24%, 19%)"})),fe=function(e){var n=e.backgroundColor,t=e.textColor;return Object(z.jsxs)(he,{backgroundColor:n,children:[Object(z.jsx)(je,{textColor:t}),Object(z.jsx)(ae,{})]})},xe=(D.a.div(p||(p=Object(S.a)(["\n  width: 100%;\n  background-color: #25273c;\n  padding: 0.25em;\n  margin-top: 1rem;\n  border-radius: 0.5em;\n\n  ul {\n    display: flex;\n    justify-content: space-evenly;\n    list-style: none;\n\n    li {\n      color: #60617d;\n    }\n\n    li#active {\n      color: hsl(220, 98%, 61%);\n    }\n  }\n"]))),{background:"#E4E5F1",foreground:"#FAFAFA",text:"#484B6A",completedText:"#D2D3DB"}),me={background:"#161722",foreground:"#25273C",text:"#E4E5F1",completedText:"#777A92"},ge=Object(y.createContext)(me),pe=D.a.div(O||(O=Object(S.a)(['\n  font-family: "Josefin Sans", sans-serif;\n  color: #ffffff;\n  background-color: ',";\n  height: 100vh;\n  width: 100%;\n"])),(function(e){return e.backgroundColor||"hsl(235, 21%, 11%)"})),Oe=D.a.div(k||(k=Object(S.a)(["\n  padding: 1rem 2rem;\n"]))),ke=D.a.picture(C||(C=Object(S.a)(["\n  object-fit: cover;\n  width: 100%;\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  img {\n    width: 100%;\n  }\n"]))),Ce=D.a.main(v||(v=Object(S.a)(["\n  position: relative;\n  z-index: 2;\n"])));var ve=function(){var e,n=Object(y.useState)(me),t=Object(E.a)(n,2),r=t[0],o=t[1];return Object(z.jsx)(pe,{textColor:r.text,backgroundColor:r.background,children:Object(z.jsx)(R,{children:Object(z.jsxs)(ge.Provider,{value:r,children:[(e=me===r,e?Object(z.jsxs)(ke,{children:[Object(z.jsx)("source",{media:"(min-width: 800px)",srcSet:"/images/bg-desktop-dark.jpg"}),Object(z.jsx)("img",{src:"/images/bg-mobile-dark.jpg",alt:"mobile dark background","aria-hidden":"true"})]}):Object(z.jsxs)(ke,{children:[Object(z.jsx)("source",{media:"(min-width: 800px)",srcSet:"/images/bg-desktop-light.jpg"}),Object(z.jsx)("img",{src:"/images/bg-mobile-light.jpg",alt:"mobile light background","aria-hidden":"true"})]})),Object(z.jsxs)(Oe,{children:[Object(z.jsx)(X,{handleOnClick:function(){o(r===me?xe:me)},darkmode:me===r}),Object(z.jsxs)(Ce,{children:[Object(z.jsx)(V,{backgroundColor:r.foreground,textColor:r.text}),Object(z.jsx)(fe,{backgroundColor:r.foreground,textColor:r.text})]})]}),Object(z.jsx)($,{})]})})})};t(31);A.a.render(Object(z.jsx)(T.a.StrictMode,{children:Object(z.jsx)(ve,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e602cea1.chunk.js.map