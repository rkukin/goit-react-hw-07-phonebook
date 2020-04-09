(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{40:function(t,e,n){t.exports=n(95)},95:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(17),c=n.n(a),u=n(7),i=n(8),s=n(12),l=n(9),f=n(13),m=n(1),h=n(4),d=n(5),b={light:{fontColor:"black",bodybg:"#fff"},dark:{fontColor:"white",bodybg:"#333333"}},p=o.a.createContext(),C=function(t){function e(){var t,n;Object(u.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(s.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).toggleTheme=function(){n.setState((function(t){return{type:"dark"===t.type?"light":"dark"}}))},n.state={type:"light",toggleTheme:n.toggleTheme,config:b},n}return Object(f.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement(p.Provider,{value:this.state},this.props.children)}}]),e}(r.Component);C.Consumer=p.Consumer;var g=function(t){return function(e){return o.a.createElement(C.Consumer,null,(function(n){return o.a.createElement(t,Object.assign({},e,{theme:n}))}))}},O=n(11),j=n(3),v={addContactRequest:Object(j.b)("contacts/addRequest"),addContactSuccess:Object(j.b)("contacts/addSuccess"),addContactError:Object(j.b)("contacts/addError"),fetchContactRequest:Object(j.b)("contacts/fetchRequest"),fetchContactSuccess:Object(j.b)("contacts/fetchSuccess"),fetchContactError:Object(j.b)("contacts/fetchError"),removeContactRequest:Object(j.b)("contacts/removeRequest"),removeContactSuccess:Object(j.b)("contacts/removeSuccess"),removeContactError:Object(j.b)("contacts/removeError"),changeFilter:Object(j.b)("contacts/changeFilter")},y=n(14),E=n.n(y);E.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com",E.a.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThiMTFkNWMzNWY3ODAwMTc4ZDIzZWYiLCJpYXQiOjE1ODYxNzI0MzR9.xr7BnpXeV4n8Di4cumBYZFpZNoasKPZabBQy15EG8pc",E.a.defaults.headers.post["Content-Type"]="application/json";var x={addContact:function(t,e){return function(n){n(v.addContactRequest()),E.a.post("/contacts",{name:t,number:e}).then((function(t){var e=t.data;n(v.addContactSuccess(e))})).catch((function(t){return n(v.addContactError(t))}))}},fetchContacts:function(){return function(t){t(v.fetchContactRequest()),E.a.get("/contacts").then((function(e){var n=e.data;return t(v.fetchContactSuccess(n))})).catch((function(t){return v.fetchContactError(t)}))}},removeContact:function(t){return function(e){e(v.removeContactRequest()),E.a.delete("/contacts/".concat(t)).then((function(){return e(v.removeContactSuccess(t))})).catch((function(t){return e(v.fetchContactError(t))}))}}},k=n(22),P=function(t){return t.contacts.items},S=function(t){return t.contacts.filter},w={getLoading:function(t){return t.contacts.loading},getContacts:P,getFilter:S,getError:function(t){return t.contacts.error},getFilteredContacts:Object(k.a)([P,S],(function(t,e){return""===e?t:t.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e.toLowerCase())}))}))};function R(){var t=Object(h.a)(["\nmax-width: 30%;\nborder-radius: 5px;\ncolor: ",";\nbackground-color: ",";\n"]);return R=function(){return t},t}function F(){var t=Object(h.a)(["\nmax-width: 40%;\nmargin-top: 10px;\nmargin-bottom: 30px;\ncolor: ",";\nbackground-color: ",";\n"]);return F=function(){return t},t}function q(){var t=Object(h.a)(["\nmax-width: 40%;\nfont-size: 20px;\ncolor: ","\n"]);return q=function(){return t},t}function D(){var t=Object(h.a)(["\nborder: 2px solid ",";\nmax-width: 400px;\npadding: 10px;\ndisplay: flex;\nflex-direction: column;\nbackground-color: ",";\n"]);return D=function(){return t},t}var A=d.a.form(D(),(function(t){return t.themeProps.fontColor}),(function(t){return t.themeProps.bodybg})),I=d.a.label(q(),(function(t){return t.themeProps.fontColor})),T=d.a.input(F(),(function(t){return t.themeProps.fontColor}),(function(t){return t.themeProps.bodybg})),L=d.a.button(R(),(function(t){return t.themeProps.fontColor}),(function(t){return t.themeProps.bodybg})),z=function(t){function e(){var t,n;Object(u.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(s.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={name:"",number:""},n.onAddValidContact=function(t,e){return""===t||""===e?alert("Please fill all fields!"):n.props.contacts.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?alert("This contact already added!"):void n.props.onAddContact(t,e)},n.handleChange=function(t){var e=t.target,r=e.name,o=e.value;n.setState(Object(m.a)({},r,o))},n.handleSubmit=function(t){t.preventDefault(),n.onAddValidContact(n.state.name,n.state.number),n.setState({name:"",number:""})},n}return Object(f.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.props.theme.config[this.props.theme.type];return o.a.createElement(A,{themeProps:t,onSubmit:this.handleSubmit},o.a.createElement(I,{themeProps:t,htmlFor:"name"},"Name"),o.a.createElement(T,{themeProps:t,type:"text",name:"name",id:"name",value:this.state.name,autoComplete:"off",onChange:this.handleChange}),o.a.createElement(I,{themeProps:t,htmlFor:"number"},"Number"),o.a.createElement(T,{themeProps:t,type:"tel",name:"number",id:"number",value:this.state.number,autoComplete:"off",onChange:this.handleChange}),o.a.createElement(L,{themeProps:t,type:"submit"},"Add contact"))}}]),e}(r.Component),J={onAddContact:function(t,e){return x.addContact(t,e)}},N=Object(O.b)((function(t){return{contacts:w.getContacts(t)}}),J)(g(z));function B(){var t=Object(h.a)(["\ndisplay: flex;\nmargin-bottom: 10px;\n"]);return B=function(){return t},t}function Z(){var t=Object(h.a)(["\nmax-width: 50%;\nborder-radius: 5px;\ncolor: ",";\nbackground-color: ",";\n"]);return Z=function(){return t},t}function M(){var t=Object(h.a)(["\nmargin-right: 30px;\nmin-width: 50%;\n"]);return M=function(){return t},t}var Y=d.a.li(M()),U=d.a.button(Z(),(function(t){return t.themeProps.fontColor}),(function(t){return t.themeProps.bodybg})),V=d.a.div(B());var W=g((function(t){var e=t.handleDelete,n=t.contact,r=n.id,a=n.name,c=n.number,u=t.theme;return o.a.createElement(V,null,o.a.createElement(Y,{key:r},a,": ",c," "),o.a.createElement(U,{themeProps:u.config[u.type],onClick:function(){return e(r)}},"Delete"))}));function Q(){var t=Object(h.a)(["\nmax-width: 400px;\ndisplay: flex;\nflex-direction: column;\n"]);return Q=function(){return t},t}var X=d.a.ul(Q()),G=function(t){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(X,null,this.props.getFilteredContacts.map((function(e){return o.a.createElement(W,{key:e.id,contact:e,handleDelete:t.props.onDeleteContact})})))}}]),e}(r.Component),K=Object(O.b)((function(t){return{contacts:w.getContacts(t),filter:w.getFilter(t),getFilteredContacts:w.getFilteredContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(x.removeContact(e))}}}))(g(G));function H(){var t=Object(h.a)(["\nmax-width: 40%;\nmargin-top: 10px;\nmargin-bottom: 30px;\ncolor: ",";\nbackground-color: ",";\n"]);return H=function(){return t},t}var $=d.a.input(H(),(function(t){return t.themeProps.fontColor}),(function(t){return t.themeProps.bodybg})),_=function(t){function e(){var t,n;Object(u.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(s.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).handleChange=function(t){var e=t.target.value;n.props.filterUpdated(e)},n}return Object(f.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement($,{themeProps:this.props.theme.config[this.props.theme.type],type:"text",onChange:this.handleChange,name:"filter",autoComplete:"off"})}}]),e}(r.Component),tt={filterUpdated:function(t){return v.changeFilter(t)}},et=Object(O.b)(null,tt)(g(_)),nt=(n(71),n(36)),rt=n.n(nt);function ot(){var t=Object(h.a)(["\nmargin: 10px;\n"]);return ot=function(){return t},t}var at=d.a.span(ot());var ct=g((function(t){return o.a.createElement("label",null,o.a.createElement(at,null,t.theme.type),o.a.createElement(rt.a,{type:"checkbox",checked:"dark"===t.theme.type,onChange:function(){return t.theme.toggleTheme()}}))}));function ut(){var t=Object(h.a)(["\nmargin: 0;\npadding: 10px;\ncolor: ",";\nbackground-color: ",";\n"]);return ut=function(){return t},t}var it=d.a.div(ut(),(function(t){return t.themeProps.fontColor}),(function(t){return t.themeProps.bodybg}));var st,lt,ft,mt=g((function(t){var e=t.children,n=t.theme;return o.a.createElement(it,{themeProps:n.config[n.type]},e)})),ht=n(37),dt=n.n(ht),bt=function(t){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){return o.a.createElement(mt,null,this.props.error&&o.a.createElement("h3",null,this.props.error),o.a.createElement(ct,null),o.a.createElement("h2",null,"PhoneBook"),o.a.createElement(N,null),o.a.createElement("h3",null,"Contacts"),o.a.createElement(et,null),this.props.loading&&o.a.createElement(dt.a,{type:"TailSpin",color:"blue"}),!this.props.loading&&o.a.createElement(K,null))}}]),e}(r.Component),pt={onFetchContacts:x.fetchContacts},Ct=Object(O.b)((function(t){return{contacts:w.getContacts(t),loading:w.getLoading(t),error:w.getError(t)}}),pt)(g(bt)),gt=n(38),Ot=n(10),jt=Object(j.c)([],(st={},Object(m.a)(st,v.fetchContactSuccess,(function(t,e){return e.payload})),Object(m.a)(st,v.addContactSuccess,(function(t,e){return[].concat(Object(gt.a)(t),[e.payload])})),Object(m.a)(st,v.removeContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),st)),vt=Object(j.c)("",Object(m.a)({},v.changeFilter,(function(t,e){return e.payload}))),yt=Object(j.c)(!1,(lt={},Object(m.a)(lt,v.fetchContactRequest,(function(){return!0})),Object(m.a)(lt,v.addContactRequest,(function(){return!0})),Object(m.a)(lt,v.removeContactRequest,(function(){return!0})),Object(m.a)(lt,v.addContactSuccess,(function(){return!1})),Object(m.a)(lt,v.fetchContactSuccess,(function(){return!1})),Object(m.a)(lt,v.removeContactSuccess,(function(){return!1})),Object(m.a)(lt,v.addContactError,(function(){return!1})),Object(m.a)(lt,v.fetchContactError,(function(){return!1})),Object(m.a)(lt,v.removeContactError,(function(){return!1})),lt)),Et=Object(j.c)("",(ft={},Object(m.a)(ft,v.fetchContactRequest,(function(){return""})),Object(m.a)(ft,v.addContactRequest,(function(){return""})),Object(m.a)(ft,v.removeContactRequest,(function(){return""})),Object(m.a)(ft,v.addContactError,(function(t,e){return e.payload.message})),Object(m.a)(ft,v.fetchContactError,(function(t,e){return e.payload.message})),Object(m.a)(ft,v.removeContactError,(function(t,e){return e.payload.message})),ft)),xt=Object(Ot.combineReducers)({items:jt,filter:vt,loading:yt,error:Et}),kt=Object(j.a)({reducer:{contacts:xt}});c.a.render(o.a.createElement(O.a,{store:kt},o.a.createElement(C,null,o.a.createElement(Ct,null))),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.b328351b.chunk.js.map