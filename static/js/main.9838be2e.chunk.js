(this.webpackJsonpmyreacttodoapp=this.webpackJsonpmyreacttodoapp||[]).push([[0],{38:function(t,e,o){},61:function(t,e,o){},62:function(t,e,o){"use strict";o.r(e);var n=o(1),a=o(0),c=o.n(a),r=o(30),s=o.n(r),i=(o(38),o(20)),d=o(8),l=o(9),p=o(11),u=o(10),h=o(14),j=o(2);function b(){return Object(n.jsxs)("header",{className:"header center",style:m,children:[Object(n.jsx)("h1",{children:"React Todo List"}),Object(n.jsx)(h.b,{to:"/",style:f,children:"Home"})," | ",Object(n.jsx)(h.b,{to:"/about",style:f,children:"About"})]})}var m={padding:"10px"},f={color:"white",textDecoration:"none",fontSize:"1.2em"},O=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).getStyle=function(){return{background:"#434956",padding:"10px",borderBottom:"1px dotted #ccc",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title,a=t.completed;return Object(n.jsx)("div",{style:this.getStyle(),children:Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{style:{paddingRight:"5px"},children:Object(n.jsx)("input",{style:{width:"15px",height:"15px"},type:"checkbox",checked:a,onChange:this.props.markComplete.bind(this,e)})}),o,Object(n.jsx)("button",{style:x,onClick:this.props.delTodo.bind(this,e),children:"x"})]})})}}]),o}(a.Component),x={background:"red",color:"white",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right",textAlign:"center"},y=O,v=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){return Object(d.a)(this,o),e.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return Object(n.jsx)(y,{todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo},e.id)}))}}]),o}(a.Component),g=o(32),k=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t.onChange=function(e){return t.setState(Object(g.a)({},e.target.name,e.target.value))},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(n.jsxs)("form",{style:{display:"flex"},onSubmit:this.onSubmit,children:[Object(n.jsx)("input",{type:"text",name:"title",placeholder:"Add Todo...",style:{flex:"10",padding:"10px"},value:this.state.title,onChange:this.onChange}),Object(n.jsx)("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}})]})}}]),o}(a.Component);function C(){return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)("h1",{children:"About"}),Object(n.jsxs)("p",{children:["This is my React Todo List app v1.0.0. It is based off of Traversy Media's React JS crash course video, located ",Object(n.jsx)("a",{href:"https://www.youtube.com/watch?v=sBws8MSXN7A",children:"here."})]})]})}var S=o(64),T=o(15),w=o.n(T),A=(o(61),function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){w.a.delete("http://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(o){t.setState({todos:Object(i.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.addTodo=function(e){w.a.post("http://jsonplaceholder.typicode.com/todos",{}).then((function(o){o.data.title=e,o.data.id=Object(S.a)(),o.data.completed=!1,t.setState({todos:[].concat(Object(i.a)(t.state.todos),[o.data])})}))},t}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var t=this;w.a.get("http://jsonplaceholder.typicode.com/todos?_limit=8").then((function(e){t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return Object(n.jsx)(h.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(b,{}),Object(n.jsx)(j.a,{exact:!0,path:"/",render:function(e){return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(k,{addTodo:t.addTodo}),Object(n.jsx)(v,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo})]})}}),Object(n.jsx)(j.a,{path:"/about",component:C})]})})})}}]),o}(a.Component)),F=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,65)).then((function(e){var o=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;o(t),n(t),a(t),c(t),r(t)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root")),F()}},[[62,1,2]]]);
//# sourceMappingURL=main.9838be2e.chunk.js.map