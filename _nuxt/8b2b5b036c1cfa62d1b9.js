(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{248:function(e,t,n){var content=n(285);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(41).default)("139b72da",content,!0,{sourceMap:!1})},284:function(e,t,n){"use strict";var o=n(248);n.n(o).a},285:function(e,t,n){(t=n(40)(!1)).push([e.i,".login[data-v-4bebdd2b]{padding:20px 0;height:250px;position:relative;z-index:2;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:opacity .5s}.login.hide[data-v-4bebdd2b]{opacity:0}.loginBtn[data-v-4bebdd2b]{width:250px;display:flex;justify-content:space-between;align-items:center}.loginBtn .loginGame[data-v-4bebdd2b]{width:190px;height:40px}.loginBtn .goBack[data-v-4bebdd2b]{width:50px;height:40px}.iconStyle[data-v-4bebdd2b]{color:hsla(0,0%,100%,.5);cursor:pointer;transition:all .5s}.iconStyle[data-v-4bebdd2b]:hover{color:#fff;font-size:100px;-webkit-animation:floatmove 3s ease-in-out infinite;animation:floatmove 3s ease-in-out infinite}.content input[data-v-4bebdd2b]{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;border:1px solid hsla(0,0%,100%,.4);background-color:hsla(0,0%,100%,.2);width:250px;border-radius:3px;padding:10px 15px;margin:0 auto 10px;display:block;text-align:center;font-size:18px;color:#fff;transition-duration:.25s;font-weight:300}.content input[data-v-4bebdd2b]::-webkit-input-placeholder{color:#fff}.content input[data-v-4bebdd2b]:hover{background-color:hsla(0,0%,100%,.4)}.content input[data-v-4bebdd2b]:focus{background-color:#fff;width:300px;color:#53e3a6}.content button[data-v-4bebdd2b]{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;border:0;padding:10px 15px;color:#fff;border-radius:3px;cursor:pointer;font-size:18px;transition-duration:.25s;background-color:hsla(0,0%,100%,.2);border:1px solid hsla(0,0%,100%,.4)}.content button[data-v-4bebdd2b]:hover{background-color:#fff;color:#53e3a6}.content button:hover .moveDom .spinner-border[data-v-4bebdd2b]{color:#53e3a6!important}.moveDom[data-v-4bebdd2b]{transform:translateY(-4px)}.resText[data-v-4bebdd2b]{width:250px;color:#fff;text-align:left;height:25px;margin-top:10px}",""]),e.exports=t},303:function(e,t,n){"use strict";n.r(t);n(2),n(1),n(4),n(10),n(87);var o=n(52),r={data:function(){return{hide:!0,gameID:"",resText:"",loading:!1}},watch:{gameID:function(){this.gameID=this.gameID.replace(/[\W]/g,"")}},methods:{goSeabed:function(){var e=this;this.hide=!0,setTimeout((function(){e.$router.push({name:"index-seabed"})}),500)},checkID:function(){var e=this;if(""!=this.gameID){this.loading=!0;var t="",n=0;o.a.ref("/game").once("value",(function(n){if(null==n.val())return e.resText="遊戲ID不存在！",t=null,void(e.loading=!1);var o=Object.keys(n.val());t=o.indexOf(e.gameID)})).then((function(){if(-1==t||null==t)return e.resText="遊戲ID不存在！",void(e.loading=!1);o.a.ref("/game/".concat(e.gameID,"/playerUpperLimit")).once("value",(function(e){n=e.val()})).then((function(){n++,o.a.ref("/game/".concat(e.gameID,"/playerUpperLimit")).set(n)})).then((function(){sessionStorage.setItem("gameID",e.gameID),e.goSelectPlayer()}))}))}else this.resText="您尚未輸入ID"},goSelectPlayer:function(){var e=this;this.hide=!0,setTimeout((function(){e.$router.push({name:"index-selectPlayer"})}),500)},removeText:function(){this.resText=""}},mounted:function(){var e=this;setTimeout((function(){e.hide=!1}),500)}},d=(n(284),n(34)),component=Object(d.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("div",{staticClass:"login",class:{hide:e.hide}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.gameID,expression:"gameID"}],attrs:{type:"text",placeholder:"輸入遊戲 ID",maxlength:"8"},domProps:{value:e.gameID},on:{focus:e.removeText,input:function(t){t.target.composing||(e.gameID=t.target.value)}}}),e._v(" "),n("div",{staticClass:"loginBtn"},[n("button",{staticClass:"goBack",on:{click:e.goSeabed}},[n("fa",{attrs:{icon:["fas","reply"]}})],1),e._v(" "),n("button",{staticClass:"loginGame",attrs:{disabled:e.loading},on:{click:e.checkID}},[e.loading?n("div",{staticClass:"moveDom"},[n("div",{staticClass:"spinner-border spinner-border-sm text-light",attrs:{role:"status"}})]):n("fa",{attrs:{icon:["fas","door-open"]}})],1)]),e._v(" "),n("div",{staticClass:"resText"},[e._v(e._s(e.resText))])])])}),[],!1,null,"4bebdd2b",null);t.default=component.exports}}]);