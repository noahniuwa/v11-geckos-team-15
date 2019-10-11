(window["webpackJsonpchingu-app"]=window["webpackJsonpchingu-app"]||[]).push([[0],{11:function(t,e,a){t.exports=a(17)},16:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(10),o=a.n(i),c=(a(16),a(2)),r=a(3),l=a(6),u=a(4),h=a(1),b=a(5),m=(a(9),function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"jobs"},s.a.createElement("div",null,s.a.createElement("div",{className:"title"},this.props.jobSourceString)),s.a.createElement("div",null,this.props.jobs.map(function(t){return s.a.createElement("div",{className:"job",key:t.id},s.a.createElement("p",null,s.a.createElement("b",null,"Title: "),t.title),s.a.createElement("p",null,s.a.createElement("b",null,"Location: "),t.location),s.a.createElement("p",null,s.a.createElement("b",null,"Description: "),t.description.slice(0,100)+"..."),s.a.createElement("p",{className:"links-container"},s.a.createElement("a",{href:t.url,rel:"noopener noreferrer",target:"_blank"},"Link"),s.a.createElement("span",null,"  "),s.a.createElement("a",{rel:"noopener noreferrer",href:"#",target:"_blank"},"Add")),s.a.createElement("br",null))})))}}]),e}(s.a.Component)),d=a(7),p=a.n(d);var j={searchJuju:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=document.createElement("div"),i="https://cors-anywhere.herokuapp.com/http://www.juju.com/jobs?k=".concat(a,"&l=").concat(e,"&r=20&page=").concat(n);return p()(i).then(function(t){return t.text()}).then(function(e){s.innerHTML=e;var a=s.querySelectorAll(".job");a=(a=Array.prototype.slice.call(a)).map(function(t,e){return{id:e+t.querySelector(".result").href,url:t.querySelector(".result").href,title:t.querySelector(".result").innerText,location:t.querySelector(".company span").innerText.replace(/[\(\)]/g,""),description:t.querySelector(".description").innerText.replace(/[\.{3}]/g,"").replace(/\s\s+/g," ").trim().replace(/more$/,"")}}),t.setState({jujuJobs:t.state.jujuJobs.concat(a)})})},searchGithub:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=".concat(a,"&location=").concat(e,"&page=").concat(n);p()(s).then(function(t){return t.json()}).then(function(e){var a=e.map(function(t){var e=document.createElement("div");e.innerHTML=t.description;var a=e.innerText;return{title:t.title,location:t.location,url:t.url,description:a,id:t.id}});t.setState({githubJobs:t.state.githubJobs.concat(a)})})},searchAuthentic:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;console.log("Location: "+e+" query: "+a+" page: "+n),a=a.replace(/\s+/g," ").trim().split(" ").join(",");var s="https://cors-anywhere.herokuapp.com/https://authenticjobs.com/api/?api_key=d6ff48adcf9b56967e2dbdded1d460c4&method=aj.jobs.search&format=json&location=".concat(e,"&page=").concat(n,"&keywords=").concat(a);p()(s).then(function(t){return t.json()}).then(function(e){var a=e.listings.listing.map(function(t){var e=document.createElement("div");e.innerHTML=t.description;var a=e.innerText;return{id:t.id,location:t.company.location?t.company.location.name:"",description:a,title:t.title,url:t.url}});t.setState({authenticJobs:t.state.authenticJobs.concat(a)})})}},g=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={fields:{keywords:"",location:""}},a.onSearchChange=a.onSearchChange.bind(Object(h.a)(a)),a.onSubmit=a.onSubmit.bind(Object(h.a)(a)),a}return Object(b.a)(e,t),Object(r.a)(e,[{key:"onSearchChange",value:function(t){var e=Object.assign({},this.state.fields);e[t.target.name]=t.target.value,this.setState({fields:e})}},{key:"onSubmit",value:function(t){console.log("Submitted"),this.props.getJobs(this.state.fields.location,this.state.fields.keywords),t.preventDefault()}},{key:"render",value:function(){return s.a.createElement("div",{className:"search"},s.a.createElement("form",{className:"form",onSubmit:this.onSubmit},s.a.createElement("div",{className:"container-flex search-container"},s.a.createElement("input",{className:"search-input",name:"keywords",type:"text",placeholder:"Keywords",onChange:this.onSearchChange}),s.a.createElement("input",{className:"search-input",name:"location",type:"text",placeholder:"Location",onChange:this.onSearchChange}),s.a.createElement("div",{className:"container-flex buttons-container"},s.a.createElement("div",{type:"submit",onClick:this.onSubmit,className:"search-button"},"Submit"),s.a.createElement("div",{className:"search-button",type:"button",value:"Load More",onClick:this.props.getMoreJobs},"Get More Results")))),s.a.createElement("p",{className:"main-title"},"Job Search Aggregator"))}}]),e}(s.a.Component),v=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={githubJobs:[],jujuJobs:[],authenticJobs:[],resultsLimit:10,githubIndex:1,jujuIndex:0,authenticIndex:1,keywords:"",location:"",searchInitiated:!1},a.getJobs=a.getJobs.bind(Object(h.a)(a)),a.getMoreJobs=a.getMoreJobs.bind(Object(h.a)(a)),a.searchGithub=j.searchGithub.bind(Object(h.a)(a)),a.searchJuju=j.searchJuju.bind(Object(h.a)(a)),a.searchAuthentic=j.searchAuthentic.bind(Object(h.a)(a)),a}return Object(b.a)(e,t),Object(r.a)(e,[{key:"getJobs",value:function(t,e){this.setState({searchInitiated:!0}),this.setState({resultsLimit:10}),this.setState({githubIndex:1}),this.setState({githubJobs:[]}),this.setState({jujuIndex:0}),this.setState({jujuJobs:[]}),this.setState({authenticJobs:[]}),this.setState({authenticIndex:1}),this.setState({keywords:e}),this.setState({location:t}),this.searchAuthentic(t,e,this.state.authenticIndex),this.searchJuju(t,e,this.state.jujuIndex),this.searchGithub(t,e,this.state.githubIndex)}},{key:"getMoreJobs",value:function(){this.state.searchInitiated&&(this.state.authenticJobs.length<this.state.resultsLimit+10&&(console.log(this.state.location),this.searchAuthentic(this.state.location,this.state.keywords,this.state.authenticIndex+1),this.setState({authenticIndex:this.state.authenticIndex+1})),this.state.jujuJobs.length<this.state.resultsLimit+10&&(this.searchJuju(this.state.location,this.state.keywords,this.state.jujuIndex+1),this.setState({jujuIndex:this.state.jujuIndex+1})),this.state.githubJobs.length<this.state.resultsLimit+10&&(this.searchGithub(this.state.location,this.state.keywords,this.state.githubIndex+1),this.setState({githubIndex:this.state.githubIndex+1})),this.setState({resultsLimit:this.state.resultsLimit+10}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:""},s.a.createElement(g,{getJobs:this.getJobs,getMoreJobs:this.getMoreJobs})),s.a.createElement("div",{className:"main container-flex"},s.a.createElement("div",{className:"column"},s.a.createElement(m,{jobSourceString:"GitHub Jobs",jobs:this.state.githubJobs.slice(0,this.state.resultsLimit)})),s.a.createElement("div",{className:"column"},s.a.createElement(m,{jobSourceString:"Authentic Jobs",jobs:this.state.authenticJobs.slice(0,this.state.resultsLimit)})),s.a.createElement("div",{className:"column"},s.a.createElement(m,{jobSourceString:"Juju Jobs",jobs:this.state.jujuJobs.slice(0,this.state.resultsLimit)})),s.a.createElement("div",{className:"column"},s.a.createElement(m,{jobSourceString:"Saved Jobs",jobs:[]}))))}}]),e}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.9301dc39.chunk.js.map