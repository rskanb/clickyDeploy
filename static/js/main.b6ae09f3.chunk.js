(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,name:"one",image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png"},{id:2,name:"two",image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"},{id:3,name:"three",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626"},{id:4,name:"four",image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png"},{id:5,name:"five",image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423"},{id:6,name:"six",image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511"},{id:7,name:"seven",image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607"},{id:8,name:"eight",image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist"},{id:9,name:"nine",image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641"},{id:10,name:"ten",image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416"},{id:11,name:"eleven",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836"},{id:12,name:"twelve",image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png"}]},11:function(e,a,t){e.exports=t(22)},17:function(e,a,t){},20:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(4),c=t.n(o),r=t(8),s=t(5),l=t(6),m=t(9),g=t(7),p=t(10);t(17);var u=function(e){return i.a.createElement("div",{className:"navbar navbar-expand-lg fixed-top"},i.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{class:"navbar-toggler-icon"})),i.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},i.a.createElement("ul",{className:"navbar-nav mr-auto"},i.a.createElement("li",null,i.a.createElement("a",{className:"brand nav-link",href:"/"},"Clicky Game")),i.a.createElement("li",{className:"brand nav-item navinfo"},i.a.createElement("p",null,"Click an image to begin!")),i.a.createElement("li",{className:"brand nav-item navscore"},i.a.createElement("p",null,"Score: ",e.score?e.score:0," | Top Score: ",e.highscore?e.highscore:0)))))};t(3);var d=function(){return i.a.createElement("header",{className:"header"},i.a.createElement("h1",null,"Clicky Game!!!"),i.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!"))};t(20);var h=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("img",{className:"img-container",alt:e.name,src:e.image,id:e.id,onClick:function(){return e.clickCount(e.id)}}))};var v=function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("h4",null,"Clicky Game!!!"))},k=t(1),b=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(i)))).state={score:0,highscore:0,clicky:[],friends:k},t.shuffleArray=function(e){var a,t,n;for(a=e.length-1;a>0;a--)t=Math.floor(Math.random()*(a+1)),n=e[a],e[a]=e[t],e[t]=n;return e},t.highScore=function(){t.state.score>=0&&t.state.score>=t.state.highscore&&t.setState({highscore:t.state.score})},t.clickCount=function(e){console.log(e),console.log(t.state.clicky),console.log(t.state.clicky.includes(e)),!1===t.state.clicky.includes(e)?(t.setState({score:t.state.score+1}),t.setState({clicky:[].concat(Object(r.a)(t.state.clicky),[e])}),t.setState({friends:t.shuffleArray(k)}),console.log(t.state.clicky)):(t.setState({score:0,clicky:[]}),t.highScore())},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement(u,{score:this.state.score,highscore:this.state.highscore}),i.a.createElement(d,null),k.map(function(a){return i.a.createElement(h,{highScre:e.highScore,clickCount:e.clickCount,name:a.name,id:a.id,image:a.image,key:a.id})}),i.a.createElement(v,null))}}]),a}(i.a.Component);c.a.render(i.a.createElement(b,null),document.getElementById("root"))},3:function(e,a,t){}},[[11,2,1]]]);
//# sourceMappingURL=main.b6ae09f3.chunk.js.map