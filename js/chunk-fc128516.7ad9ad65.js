(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fc128516"],{"4fdd":function(t,e,s){"use strict";s("d9bf")},"73cf":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"container"}},[s("div",{attrs:{id:"deco"}}),s("div",{attrs:{id:"ui-container"}},[s("div",{staticClass:"title"},[t._v("TODO")]),s("div",{attrs:{id:"register-container"}},[s("h2",{staticClass:"title-page"},[t._v("REGISTER")]),s("label",{attrs:{for:"register-username",id:"labelU"}},[t._v("Username:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.input.username,expression:"input.username"}],staticClass:"input-info",class:{invalid:t.validation},attrs:{type:"text",id:"register-username",autocomplete:"off"},domProps:{value:t.input.username},on:{input:[function(e){e.target.composing||t.$set(t.input,"username",e.target.value)},t.resetInputValidation],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onCreateBtnClick(e)}}}),s("label",{attrs:{for:"register-password",id:"labelP"}},[t._v("Password:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.input.password,expression:"input.password"}],staticClass:"input-info",class:{invalid:t.validation},attrs:{type:"password",id:"register-password",autocomplete:"off"},domProps:{value:t.input.password},on:{input:[function(e){e.target.composing||t.$set(t.input,"password",e.target.value)},t.resetInputValidation],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onCreateBtnClick(e)}}}),s("font-awesome-icon",{staticClass:"eyeP",staticStyle:{display:"inline"},attrs:{icon:"eye",id:"eyeS"},on:{click:t.togglePassword}}),s("font-awesome-icon",{staticClass:"eyeP",staticStyle:{display:"none"},attrs:{icon:"eye-slash",id:"eyeH"},on:{click:t.togglePassword}}),s("label",{attrs:{for:"register-cfpassword",id:"labelcfP"}},[t._v("Confirm Password:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.input.cfpassword,expression:"input.cfpassword"}],staticClass:"input-info",class:{invalid:t.validation},attrs:{type:"password",id:"register-cfpassword",autocomplete:"off"},domProps:{value:t.input.cfpassword},on:{input:[function(e){e.target.composing||t.$set(t.input,"cfpassword",e.target.value)},t.resetInputValidation],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onCreateBtnClick(e)}}}),s("font-awesome-icon",{staticClass:"eyecfP",staticStyle:{display:"inline"},attrs:{icon:"eye",id:"eyecfS"},on:{click:t.togglePassword}}),s("font-awesome-icon",{staticClass:"eyecfP",staticStyle:{display:"none"},attrs:{icon:"eye-slash",id:"eyecfH"},on:{click:t.togglePassword}}),s("button",{staticClass:"button",attrs:{id:"btn-create"},on:{click:t.onCreateBtnClick}},[t._v(" Create ")]),s("button",{staticClass:"button",attrs:{id:"btn-back"},on:{click:t.onBackBtnClick}},[t._v(" Back ")])],1)])])},n=[],a=(s("caad"),s("cab3")),r={name:"Register",data:function(){return{input:{username:"",password:"",cfpassword:""},validation:!1}},methods:{onCreateBtnClick:function(){for(var t=this.$store.state.users,e=[],s=[],i=0;i<t.length;i++)e.push(t[i].username),s.push(t[i].password);e.includes(this.input.username)?(alert("Username existed!"),this.validation=!0):""==this.input.username?(alert("Type info!"),this.validation=!0):this.input.password!==this.input.cfpassword?(alert("Password not match!"),this.validation=!0):(this.addUser(this.input.username,this.input.cfpassword,[]),this.input.username="",this.input.password="",this.input.cfpassword="",this.$router.push({name:"Main"}))},addUser:function(t,e,s){var i=new a["a"](t,e,s);this.$store.commit("addUser",i),this.$store.commit("setCurrentUser",i),this.$store.commit("saveData")},resetInputValidation:function(){this.validation=!1},togglePassword:function(){var t=document.getElementById("register-password"),e=document.getElementById("eyeS"),s=document.getElementById("eyeH"),i=document.getElementById("register-cfpassword"),n=document.getElementById("eyecfS"),a=document.getElementById("eyecfH");"password"==t.getAttribute("type")?(t.setAttribute("type","text"),e.setAttribute("style","display: none;"),s.setAttribute("style","display: inline;"),i.setAttribute("type","text"),n.setAttribute("style","display: none;"),a.setAttribute("style","display: inline;"),setTimeout((function(){t.setAttribute("type","password"),e.setAttribute("style","display: inline;"),s.setAttribute("style","display: none;"),i.setAttribute("type","password"),n.setAttribute("style","display: inline;"),a.setAttribute("style","display: none;")}),2e3)):(t.setAttribute("type","password"),e.setAttribute("style","display: inline;"),s.setAttribute("style","display: none;"),i.setAttribute("type","password"),n.setAttribute("style","display: inline;"),a.setAttribute("style","display: none;"))},onBackBtnClick:function(){this.$router.push({name:"Login"})}}},o=r,l=(s("4fdd"),s("2877")),d=Object(l["a"])(o,i,n,!1,null,"6a4f21f2",null);e["default"]=d.exports},d9bf:function(t,e,s){}}]);
//# sourceMappingURL=chunk-fc128516.7ad9ad65.js.map