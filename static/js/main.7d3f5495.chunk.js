(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,c){e.exports=c(18)},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),l=c(2),r=c.n(l),i=(c(14),c(3)),o=c(4),s=c(6),d=c(5),u=c(7),m=(c(15),function(e){return a.a.createElement("div",{className:"CircleSelector"},e.circles.map(function(t){return a.a.createElement("button",{onClick:e.handleClick,className:e.selectedCircle===t?"selected":"",id:t},e.selectedCircle===t?"Circle ".concat(t," Selected"):"Select Circle ".concat(t))}))}),h=(c(16),function(e){return a.a.createElement("div",{className:"Circles"},e.circles.map(function(t){return a.a.createElement("div",{className:e.selectedCircle===t?"selected":""},t)}))}),C=(c(17),[1,2,3,4]),f=function(e){function t(){var e,c;Object(i.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(c=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={selectedCircle:1},c.handleClick=function(e){console.log(e.target.id),c.setState({selectedCircle:Number(e.target.id)})},c}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},"UNIT 4 FINAL ASSESSMENT"),a.a.createElement("main",null,a.a.createElement(m,{circles:C,selectedCircle:this.state.selectedCircle,handleClick:this.handleClick}),a.a.createElement(h,{circles:C,selectedCircle:this.state.selectedCircle})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.7d3f5495.chunk.js.map