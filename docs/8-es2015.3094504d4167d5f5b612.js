(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{zXGU:function(n,t,e){"use strict";e.r(t);var l=e("8Y7J");class o{}var a=e("pMnS"),r=e("IheW");const c=(()=>{class n{constructor(n){this.http=n}getRandomJoke(){return this.http.get("https://api.chucknorris.io/jokes/random")}}return n.ngInjectableDef=l.Lb({factory:function(){return new n(l.Pb(r.c))},token:n,providedIn:"root"}),n})();class s{constructor(n){this.service=n,this.randomJoke={icon_url:"",value:""}}ngOnInit(){this.service.getRandomJoke().subscribe(n=>{this.randomJoke=n})}getRandomJoke(){this.service.getRandomJoke().subscribe(n=>{this.randomJoke=n})}}var u=l.pb({encapsulation:0,styles:[[""]],data:{}});function i(n){return l.Jb(0,[(n()(),l.rb(0,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(n()(),l.rb(1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l.Hb(2,null,["",""])),(n()(),l.rb(3,0,null,null,1,"button",[],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.getRandomJoke()&&l),l},null,null)),(n()(),l.Hb(-1,null,["Refresh"]))],null,function(n,t){var e=t.component;n(t,0,0,l.tb(1,"",e.randomJoke.icon_url,"")),n(t,2,0,e.randomJoke.value)})}const b=(()=>{class n{constructor(n){this.http=n}getRandomNerdJokes(){return this.http.get("https://geek-jokes.sameerkumar.website/api")}}return n.ngInjectableDef=l.Lb({factory:function(){return new n(l.Pb(r.c))},token:n,providedIn:"root"}),n})();class p{constructor(n){this.service=n}ngOnInit(){this.getRandomNerdJokes()}getRandomNerdJokes(){this.service.getRandomNerdJokes().subscribe(n=>{this.joke=n})}}var f=l.pb({encapsulation:0,styles:[[""]],data:{}});function g(n){return l.Jb(0,[(n()(),l.rb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l.Hb(1,null,["",""])),(n()(),l.rb(2,0,null,null,1,"button",[],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.getRandomNerdJokes()&&l),l},null,null)),(n()(),l.Hb(-1,null,["Refresh"]))],null,function(n,t){n(t,1,0,t.component.joke)})}const d=(()=>{class n{constructor(n){this.http=n}getRandomDadJoke(){return this.http.get("https://icanhazdadjoke.com/",{headers:{accept:"application/json"}})}}return n.ngInjectableDef=l.Lb({factory:function(){return new n(l.Pb(r.c))},token:n,providedIn:"root"}),n})();class h{constructor(n){this.service=n}ngOnInit(){this.getRandomDadJoke()}getRandomDadJoke(){this.service.getRandomDadJoke().subscribe(n=>{this.dadJoke=n.joke})}}var O=l.pb({encapsulation:0,styles:[[""]],data:{}});function M(n){return l.Jb(0,[(n()(),l.rb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l.Hb(1,null,["",""])),(n()(),l.rb(2,0,null,null,1,"button",[],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.getRandomDadJoke()&&l),l},null,null)),(n()(),l.Hb(-1,null,["Refresh"]))],null,function(n,t){n(t,1,0,t.component.dadJoke)})}const P=(()=>{class n{constructor(){}}return n.ngInjectableDef=l.Lb({factory:function(){return new n},token:n,providedIn:"root"}),n})();class C{constructor(n){this.service=n}ngOnInit(){}}var _=l.pb({encapsulation:0,styles:[['@import url(https://fonts.googleapis.com/css?family=Raleway:400,400i,700);body[_ngcontent-%COMP%]{background:#fafafa}*[_ngcontent-%COMP%]{transition-duration:.5s}.frame[_ngcontent-%COMP%]{position:absolute;top:48%;left:30%;width:80%;height:50%;margin-top:-250px;margin-left:-250px;border-radius:2px;box-shadow:4px 8px 16px 0 rgba(0,0,0,.1);overflow:hidden;background:#fff;color:#333;font-family:Raleway,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media only screen and (max-width:500px){.frame[_ngcontent-%COMP%]{left:70%;height:466px}}.center[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.footer[_ngcontent-%COMP%]{color:#888;position:fixed;bottom:50px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);text-align:center}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#80c3f0;padding-bottom:3px;text-decoration:none;border-bottom:2px dashed #80c3f0;transition:.3s}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#4479c3;border-bottom:2px solid #4479c3}.tabs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.tabs[_ngcontent-%COMP%]   .tabs-list[_ngcontent-%COMP%]{width:100%;background:#eceff1;display:flex;margin-bottom:20px;box-shadow:0 8px 17px 2px rgba(0,0,0,.14)}.tabs[_ngcontent-%COMP%]   .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{text-transform:uppercase;padding:15px 30px;display:block;position:relative;overflow:hidden;flex-grow:1;box-sizing:border-box;height:48px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tabs[_ngcontent-%COMP%]   .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover{background:#cfd8dc}.tabs[_ngcontent-%COMP%]   .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover:after{background:#0288d1}.tabs[_ngcontent-%COMP%]   .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]::after{transition-duration:.5s;transition-property:transform,-webkit-transform;content:"";display:block;position:absolute;height:3px;width:100%;bottom:0;left:0;background:#03a9f4}.tabs[_ngcontent-%COMP%]   .tabs-content[_ngcontent-%COMP%]{position:relative}.tabs[_ngcontent-%COMP%]   .tabs-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:20px;position:absolute}.tabs[_ngcontent-%COMP%]   .tabs-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.4em;margin-bottom:10px}.tabs[_ngcontent-%COMP%]   .tabs-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:20px 10px 20px 0;padding:12px;border:none;background:#03a9f4;color:#fff;text-transform:uppercase;box-shadow:0 8px 17px 2px rgba(0,0,0,.14);border-radius:5px}.tabs[_ngcontent-%COMP%]   .tabs-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#0288d1}.tabs[_ngcontent-%COMP%]   .tabs-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:0}input[_ngcontent-%COMP%]:nth-of-type(1):checked ~ .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1){color:#03a9f4}input[_ngcontent-%COMP%]:nth-of-type(1):checked ~ .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)::after{-webkit-transform:translateX(-100%);transform:translateX(-100%)}input[_ngcontent-%COMP%]:nth-of-type(1):checked ~ .tabs-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:nth-of-type(2){-webkit-transform:translateX(50%);transform:translateX(50%);opacity:0}input[_ngcontent-%COMP%]:nth-of-type(1):checked ~ .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)::after{-webkit-transform:translateX(-200%);transform:translateX(-200%)}input[_ngcontent-%COMP%]:nth-of-type(1):checked ~ .tabs-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:nth-of-type(3){-webkit-transform:translateX(100%);transform:translateX(100%);opacity:0}input[_ngcontent-%COMP%]:nth-of-type(1):checked ~ .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)::after{-webkit-transform:translateX(-300%);transform:translateX(-300%)}input[_ngcontent-%COMP%]:nth-of-type(1):checked ~ .tabs-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:nth-of-type(4){-webkit-transform:translateX(150%);transform:translateX(150%);opacity:0}input[_ngcontent-%COMP%]:nth-of-type(2):checked ~ .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)::after{-webkit-transform:translateX(100%);transform:translateX(100%)}input[_ngcontent-%COMP%]:nth-of-type(2):checked ~ .tabs-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:nth-of-type(1){-webkit-transform:translateX(-50%);transform:translateX(-50%);opacity:0}input[_ngcontent-%COMP%]:nth-of-type(2):checked ~ .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2){color:#03a9f4}input[_ngcontent-%COMP%]:nth-of-type(2):checked ~ .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)::after{-webkit-transform:translateX(-100%);transform:translateX(-100%)}input[_ngcontent-%COMP%]:nth-of-type(2):checked ~ .tabs-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:nth-of-type(3){-webkit-transform:translateX(50%);transform:translateX(50%);opacity:0}input[_ngcontent-%COMP%]:nth-of-type(2):checked ~ .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)::after{-webkit-transform:translateX(-200%);transform:translateX(-200%)}input[_ngcontent-%COMP%]:nth-of-type(2):checked ~ .tabs-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:nth-of-type(4){-webkit-transform:translateX(100%);transform:translateX(100%);opacity:0}input[_ngcontent-%COMP%]:nth-of-type(3):checked ~ .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)::after{-webkit-transform:translateX(200%);transform:translateX(200%)}input[_ngcontent-%COMP%]:nth-of-type(3):checked ~ .tabs-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:nth-of-type(1){-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}input[_ngcontent-%COMP%]:nth-of-type(3):checked ~ .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)::after{-webkit-transform:translateX(100%);transform:translateX(100%)}input[_ngcontent-%COMP%]:nth-of-type(3):checked ~ .tabs-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:nth-of-type(2){-webkit-transform:translateX(-50%);transform:translateX(-50%);opacity:0}input[_ngcontent-%COMP%]:nth-of-type(3):checked ~ .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3){color:#03a9f4}input[_ngcontent-%COMP%]:nth-of-type(3):checked ~ .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)::after{-webkit-transform:translateX(-100%);transform:translateX(-100%)}input[_ngcontent-%COMP%]:nth-of-type(3):checked ~ .tabs-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:nth-of-type(4){-webkit-transform:translateX(50%);transform:translateX(50%);opacity:0}input[_ngcontent-%COMP%]:nth-of-type(4):checked ~ .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)::after{-webkit-transform:translateX(300%);transform:translateX(300%)}input[_ngcontent-%COMP%]:nth-of-type(4):checked ~ .tabs-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:nth-of-type(1){-webkit-transform:translateX(-150%);transform:translateX(-150%);opacity:0}input[_ngcontent-%COMP%]:nth-of-type(4):checked ~ .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)::after{-webkit-transform:translateX(200%);transform:translateX(200%)}input[_ngcontent-%COMP%]:nth-of-type(4):checked ~ .tabs-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:nth-of-type(2){-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}input[_ngcontent-%COMP%]:nth-of-type(4):checked ~ .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)::after{-webkit-transform:translateX(100%);transform:translateX(100%)}input[_ngcontent-%COMP%]:nth-of-type(4):checked ~ .tabs-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:nth-of-type(3){-webkit-transform:translateX(-50%);transform:translateX(-50%);opacity:0}input[_ngcontent-%COMP%]:nth-of-type(4):checked ~ .tabs-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4){color:#03a9f4}']],data:{}});function k(n){return l.Jb(0,[(n()(),l.rb(0,0,null,null,31,"div",[["class","container"]],null,null,null,null,null)),(n()(),l.rb(1,0,null,null,30,"div",[["class","frame"]],null,null,null,null,null)),(n()(),l.rb(2,0,null,null,29,"div",[["class","tabs"]],null,null,null,null,null)),(n()(),l.rb(3,0,null,null,0,"input",[["checked",""],["id","1"],["name","tab"],["type","radio"]],null,null,null,null,null)),(n()(),l.rb(4,0,null,null,0,"input",[["id","2"],["name","tab"],["type","radio"]],null,null,null,null,null)),(n()(),l.rb(5,0,null,null,0,"input",[["id","3"],["name","tab"],["type","radio"]],null,null,null,null,null)),(n()(),l.rb(6,0,null,null,6,"div",[["class","tabs-list"]],null,null,null,null,null)),(n()(),l.rb(7,0,null,null,1,"label",[["class","tab"],["for","1"]],null,null,null,null,null)),(n()(),l.Hb(-1,null,["Chuck Norris"])),(n()(),l.rb(9,0,null,null,1,"label",[["class","tab"],["for","2"]],null,null,null,null,null)),(n()(),l.Hb(-1,null,["Geeky/Nerdy Jokes"])),(n()(),l.rb(11,0,null,null,1,"label",[["class","tab"],["for","3"]],null,null,null,null,null)),(n()(),l.Hb(-1,null,["Dad Jokes"])),(n()(),l.rb(13,0,null,null,18,"div",[["class","tabs-content"]],null,null,null,null,null)),(n()(),l.rb(14,0,null,null,5,"div",[["class","content"]],null,null,null,null,null)),(n()(),l.rb(15,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),l.Hb(-1,null,["Chuck Norris Jokes"])),(n()(),l.rb(17,0,null,null,2,"app-chuck-norris",[],null,null,null,i,u)),l.Fb(512,null,c,c,[r.c]),l.qb(19,114688,null,0,s,[c],null,null),(n()(),l.rb(20,0,null,null,5,"div",[["class","content"]],null,null,null,null,null)),(n()(),l.rb(21,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),l.Hb(-1,null,["Nerdy Jokes"])),(n()(),l.rb(23,0,null,null,2,"app-nerd-jokes",[],null,null,null,g,f)),l.Fb(512,null,b,b,[r.c]),l.qb(25,114688,null,0,p,[b],null,null),(n()(),l.rb(26,0,null,null,5,"div",[["class","content"]],null,null,null,null,null)),(n()(),l.rb(27,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),l.Hb(-1,null,["Dad Jokes"])),(n()(),l.rb(29,0,null,null,2,"app-dad-jokes",[],null,null,null,M,O)),l.Fb(512,null,d,d,[r.c]),l.qb(31,114688,null,0,h,[d],null,null)],function(n,t){n(t,19,0),n(t,25,0),n(t,31,0)},null)}function m(n){return l.Jb(0,[(n()(),l.rb(0,0,null,null,2,"app-jokes",[],null,null,null,k,_)),l.Fb(512,null,P,P,[]),l.qb(2,114688,null,0,C,[P],null,null)],function(n,t){n(t,2,0)},null)}var y=l.nb("app-jokes",C,m,{},{},[]),w=e("SVse"),X=e("iInd");class v{}e.d(t,"JokesModuleNgFactory",function(){return x});var x=l.ob(o,[],function(n){return l.yb([l.zb(512,l.l,l.bb,[[8,[a.a,y]],[3,l.l],l.y]),l.zb(4608,w.l,w.k,[l.v,[2,w.s]]),l.zb(1073742336,w.b,w.b,[]),l.zb(1073742336,X.m,X.m,[[2,X.r],[2,X.k]]),l.zb(1073742336,v,v,[]),l.zb(1073742336,o,o,[]),l.zb(1024,X.i,function(){return[[{path:"",component:C,pathMatch:"full"}]]},[])])})}}]);