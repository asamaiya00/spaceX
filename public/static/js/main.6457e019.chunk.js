(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,a,n){e.exports=n.p+"static/media/logo.ab10d000.png"},42:function(e,a,n){e.exports=n(58)},47:function(e,a,n){},48:function(e,a,n){},58:function(e,a,n){"use strict";n.r(a);var t=n(1),l=n.n(t),c=n(34),r=n.n(c),s=(n(47),n(25)),m=n(7),u=n(18),i=n(6),o=(n(48),n(35)),h=n.n(o),E=n(21),p=n(20),g=n.n(p),d=n(59),_=n(22),b=n.n(_),f=n(36),N=n.n(f),y=function(e){var a=e.launch,n=a.flight_number,t=a.mission_name,c=a.launch_date_local,r=a.launch_success;return l.a.createElement("div",{className:"card card-body mb-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9"},l.a.createElement("h5",null,"Mission:",l.a.createElement("span",{className:b()({"text-success":r,"text-danger":!r})}," ",t)),l.a.createElement("p",null,"Date: ",l.a.createElement(N.a,{format:"YYYY-MM-DD HH:mm"},c))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement(u.b,{to:"/launch/".concat(n),className:"btn btn-secondary"},"Launch Details"))))},v=function(){return l.a.createElement("div",{className:"my-3"},l.a.createElement("p",null,l.a.createElement("span",{className:"px-3 mr-2 bg-success"})," : Success"),l.a.createElement("p",null,l.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," : Fail"))};function k(){var e=Object(E.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return k=function(){return e},e}var x=g()(k()),L=function(){return l.a.createElement(t.Fragment,null,l.a.createElement("h1",{className:"display-4 my-3"},"Launches"),l.a.createElement(v,null),l.a.createElement(d.a,{query:x},(function(e){var a=e.loading,n=e.error,c=e.data;return a?l.a.createElement("h4",null,"Loading..."):(n&&console.log(n),l.a.createElement(t.Fragment,null,c.launches.map((function(e){return l.a.createElement(y,{key:e.flight_number,launch:e})}))))})))};function D(){var e=Object(E.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return D=function(){return e},e}var Y=Object(s.b)(D()),q=function(e){var a=e.match.params.flight_number;return a=parseInt(a),l.a.createElement(t.Fragment,null,l.a.createElement(d.a,{query:Y,variables:{flight_number:a}},(function(e){var a=e.loading,n=e.error,t=e.data;if(a)return l.a.createElement("h4",null,"Loading...");n&&console.log(n);var c=t.launch,r=c.mission_name,s=c.flight_number,m=c.launch_year,i=c.launch_success,o=c.rocket,h=o.rocket_name,E=o.rocket_id,p=o.rocket_type;return l.a.createElement("div",null,l.a.createElement("h1",{className:"display-4 my-3"},l.a.createElement("span",{className:"text-dark"},"Mission:")," ",r),l.a.createElement("h4",{className:"mb-3"},"Launch Details"),l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),l.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),l.a.createElement("li",{className:"list-group-item"},"Launch Success:"," ",l.a.createElement("span",{className:b()({"text-sucess":i,"text-danger":!i})},i?"Yes":"No")," ")),l.a.createElement("h4",{className:"my-3"},"Rocket Details "),l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",E),l.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",h),l.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",p)),l.a.createElement("hr",null),l.a.createElement(u.b,{to:"/",className:"btn btn-secondary"},"Back"," "))})))},w=new s.a({uri:"/graphql"});var F=function(){return l.a.createElement(m.a,{client:w},l.a.createElement(u.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:h.a,alt:"SpaceX",style:{width:500,margin:"auto",display:"flex"}}),l.a.createElement(i.a,{exact:!0,path:"/",component:L}),l.a.createElement(i.a,{exact:!0,path:"/launch/:flight_number",component:q}))))};r.a.render(l.a.createElement(F,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.6457e019.chunk.js.map