(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{271:function(e,t,n){e.exports=n(598)},277:function(e,t,n){},596:function(e,t,n){},597:function(e,t,n){},598:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(10),r=n.n(c),l=(n(276),n(277),n(80)),s=n.n(l),o=n(114),u=n(115),m=n(116),d=n(122),f=n(117),p=n(123),g=n(82),h=n(96),b=(n(596),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).onTimeserieSelectionChange=function(e){n.setState({timeseriesIds:e})},n.onFileSelected=function(e){if(e.target&&e.target.files&&e.target.files.length){var t=e.target.files[0];n.imageRef&&n.imageRef.current&&(n.imageRef.current.src=URL.createObjectURL(t),n.setState({isImageLoaded:!0}))}},n.state={timeseriesIds:[],isImageLoaded:!1},n.imageRef=i.a.createRef(),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"main-layout"},i.a.createElement("div",{className:"left-side"},i.a.createElement("input",{type:"file",onChange:this.onFileSelected}),i.a.createElement(g.b,{timeseriesIds:this.state.timeseriesIds},i.a.createElement("img",{alt:"",ref:this.imageRef,style:{width:"100%",display:this.state.isImageLoaded?"block":"none"}}))),i.a.createElement("div",{className:"right-side"},i.a.createElement(g.d,{onTimeserieSelectionChange:this.onTimeserieSelectionChange})))}}]),t}(a.Component)),v=(n(597),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).state={tenant:null},n.client=new h.CogniteClient({appId:"charting-app-example"}),n.onTenantSelected=function(){var e=Object(o.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.client.loginWithOAuth({project:t,onAuthenticate:h.POPUP}),e.next=3,n.client.authenticate();case 3:n.setState({tenant:t});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){Object(h.isLoginPopupWindow)()&&Object(h.loginPopupHandler)()}},{key:"renderLoginScreen",value:function(){return i.a.createElement("div",{className:"login-page-container"},i.a.createElement("div",{className:"login-container"},i.a.createElement(g.c,{title:"Infographic App",initialTenant:"publicdata",onTenantSelected:this.onTenantSelected})))}},{key:"render",value:function(){var e=null!==this.state.tenant;return i.a.createElement(g.a,{client:this.client},i.a.createElement("div",{className:"main-layout"},e?i.a.createElement(b,null):this.renderLoginScreen()))}}]),t}(a.Component));r.a.render(i.a.createElement(v,null),document.getElementById("root"))}},[[271,1,2]]]);
//# sourceMappingURL=main.0e09365c.chunk.js.map