(function(){"use strict";var t={5935:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(9567),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"start",on:{click:t.start}},[t._v(" Start ")]),t._m(0),n("div",{staticClass:"wheel"},[n("div",{staticClass:"innerWheel"},t._l(t.prize1,(function(e,r){return n("div",{key:r,staticClass:"sector",style:t.drawFan(r,t.prize1)},[n("div",{staticClass:"content",style:t.drawContent(r,t.prize1)},["0"==r?n("div",{staticClass:"prize-text"},[t._v(t._s(e.prize))]):t._e(),"1"==r?n("div",{staticClass:"prize-text2"},[t._v(t._s(e.prize))]):t._e(),"2"==r?n("div",{staticClass:"prize-text3"},[t._v(t._s(e.prize))]):t._e(),"3"==r?n("div",{staticClass:"prize-text4"},[t._v(t._s(e.prize))]):t._e()])])})),0)]),n("div",{staticClass:"hours-hand",style:{transition:t.transitionTime}})])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fan"},[n("div",{staticClass:"inner"})])}],a=(n(2222),n(1539),n(4747),{name:"app",data:function(){return{transitionTime:"2.5s",clickable:!0,prize1:[],Deg:0,prizeContent:"",total1:10}},methods:{drawFan:function(t,e){var n=360/e.length,r=-n;return"transform:rotate(".concat(r+t*n,"deg)")},drawContent:function(t,e){var n=360/e.length,r=e.length>10?"translate(10px, 180px)":"translate(100px, 35px)";return"transform:rotate(".concat(n,"deg)").concat(r)},generateIndex:function(t){for(var e=[],n=0;n<t.length;n++)0!==t[n].number&&e.push(n);return e},getRandom:function(t,e){var n=this.generateIndex(t),r=Math.floor(Math.random()*e/(e/n.length));return n[r]},start:function(){if(!0===this.clickable){this.transitionTime="2.5s",this.clickable=!this.clickable;var t=3,e="",n=this.getRandom(this.prize1,this.total1),r=360/this.prize1.length,i=360*t+n*r;this.Deg+=i-this.Deg%360-45,e=this.prize1[n].prize,document.querySelector(".hours-hand").style.transform="rotate(".concat(this.Deg,"deg)");var o=document.querySelectorAll(".sector");o.forEach((function(t){t.classList.remove("active")})),document.querySelector(".hours-hand").style.transform="rotate(".concat(this.Deg,"deg)");var a=this;setTimeout((function(){a.prizeContent=e,o[n].classList.add("active"),a.prize1[n].number>0&&(a.prize1[n].number-=1,a.total1-=1),a.clickable=!0}),2500),setTimeout((function(){alert("恭喜您抽中: "+e),0===a.total1&&a.reset()}),2800)}},reset:function(){var t=this,e=confirm("是否重置獎品數量?");if(!0!==e)return!1;t.prize1=[],t.getJSON(),t.transitionTime="0s",t.Deg=-45,t.total1=10,document.querySelector(".hours-hand").style.transform="rotate(".concat(this.Deg,"deg)")},getJSON:function(){var t=this;fetch("db.json").then((function(t){return t.json()})).then((function(e){t.prize1=e}))}},mounted:function(){this.getJSON()}}),s=a,c=n(1001),u=(0,c.Z)(s,i,o,!1,null,null,null),l=u.exports;r.Z.config.productionTip=!1,new r.Z({render:function(t){return t(l)}}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],i=t[l][1],o=t[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(s=!1,o<a&&(a=o));if(s){t.splice(l--,1);var u=i();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,i,o]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,a=r[0],s=r[1],c=r[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var l=c(n)}for(e&&e(r);u<a.length;u++)o=a[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},r=self["webpackChunklucky_wheel"]=self["webpackChunklucky_wheel"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5935)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.js.map