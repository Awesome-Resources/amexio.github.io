webpackJsonp(["navbar.demo.module"],{VOFk:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t("LMZF"),u=function(){},a=t("tfJK"),i=t("drlO"),_=t("KhCp"),o=t("kL+h"),d=t("Un6q"),r=t("TMwh"),c=function(){function l(l){this.http=l,this.topMenuData=JSON.parse('[\n    {\n      "label" : "Home"\n    },\n    {\n      "label" : "Features"\n    },{\n    \n      "label" : "Roadmap"\n    },\n    {\n      "label" : "Downloads"\n    },\n    {\n      "label" : "Forum"\n    },\n    {\n      "label" : "Blogs"\n    },\n    {\n      "label" : "MetaMagic"\n    }\n  ]\n'),this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,t,e=this;this.http.get("assets/data/code/navigation/navbar/navigation.html").subscribe(function(n){l=n.text()},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/navigation/navbar/navigation.text").subscribe(function(l){n=l.text()},function(l){},function(){e.typeScriptCode=n}),this.http.get("assets/data/componentdata/navbar.json").subscribe(function(l){t=l.text()},function(l){},function(){e.dataSource=t})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),p=e._1({encapsulation:2,styles:[],data:{}});function m(l){return e._27(0,[(l()(),e._3(0,0,null,null,5,"amexio-nav-item",[["position-center",""]],null,null,null,a._98,a._10)),e._2(1,114688,null,0,i._37,[],null,null),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._3(3,0,null,0,1,"a",[["style","padding-left: 30px;color: white;text-decoration:none;cursor: pointer"]],[[8,"target",0]],null,null,null,null)),(l()(),e._25(4,null,["",""])),(l()(),e._25(-1,0,["\n                    "]))],function(l,n){l(n,1,0)},function(l,n){l(n,3,0,"Home"==n.context.$implicit.label?"":"_blank"),l(n,4,0,n.context.$implicit.label)})}function s(l){return e._27(0,[(l()(),e._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(3,0,null,null,1,"prism-block",[],null,null,null,_.b,_.a)),e._2(4,4243456,null,0,o.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function h(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,_.b,_.a)),e._2(3,4243456,null,0,o.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function b(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,_.b,_.a)),e._2(3,4243456,null,0,o.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.dataSource,"json")},null)}function f(l){return e._27(0,[(l()(),e._25(-1,null,["\n    "])),(l()(),e._3(1,0,null,null,120,"amexio-card",[["header","true"]],null,null,null,a._41,a.f)),e._2(2,114688,null,0,i.g,[],{header:[0,"header"]},null),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(4,0,null,0,2,"amexio-header",[],null,null,null,a._46,a.k)),e._2(5,114688,null,0,i.q,[],null,null),(l()(),e._25(-1,0,["\n         Nav Bar \n      "])),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(8,0,null,1,112,"amexio-body",[],null,null,null,a._38,a.c)),e._2(9,114688,null,0,i.d,[],null,null),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["The Nav Bar Component is a familiar top navigation pattern for users.\n        "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(14,0,null,0,105,"amexio-tab-view",[],null,null,null,a._55,a.t)),e._2(15,5357568,null,1,i.D,[e.B],null,null),e._23(603979776,1,{queryTabs:1}),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(18,0,null,0,20,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,a._56,a.u)),e._2(19,114688,[[1,4]],0,i.E,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(21,0,null,0,16,"amexio-row",[],null,null,null,a._52,a.q)),e._2(22,1163264,null,0,i.A,[],null,null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(24,0,null,0,12,"amexio-column",[],[[8,"className",0]],null,null,a._43,a.h)),e._2(25,114688,null,0,i.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(27,0,null,0,8,"div",[["class","navbardemo"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(29,0,null,null,5,"amexio-nav",[],null,null,null,a._48,a.m)),e._2(30,1163264,null,0,i.u,[i._8],{title:[0,"title"],logo:[1,"logo"]},null),(l()(),e._25(-1,null,["\n                    "])),(l()(),e.Y(16777216,null,1,1,null,m)),e._2(33,802816,null,0,d.k,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,0,["\n               \n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["\n          \n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(40,0,null,0,44,"amexio-tab",[["title","API Reference"]],null,null,null,a._56,a.u)),e._2(41,114688,[[1,4]],0,i.E,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(43,0,null,0,23,"amexio-datagrid",[["title","Properties:amexio-nav"]],null,null,null,a._103,a._15)),e._2(44,1425408,null,1,i._44,[i.Y,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e._23(603979776,2,{columnRef:1}),(l()(),e._25(-1,null,["\n             "])),(l()(),e._3(47,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(48,49152,[[2,4]],2,i._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,3,{headerTemplate:0}),e._23(335544320,4,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(52,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(53,49152,[[2,4]],2,i._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,5,{headerTemplate:0}),e._23(335544320,6,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(57,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(58,49152,[[2,4]],2,i._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,7,{headerTemplate:0}),e._23(335544320,8,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(62,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(63,49152,[[2,4]],2,i._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,9,{headerTemplate:0}),e._23(335544320,10,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(68,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(70,0,null,0,13,"amexio-datagrid",[["title","Properties:amexio-nav-item"]],null,null,null,a._103,a._15)),e._2(71,1425408,null,1,i._44,[i.Y,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e._23(603979776,11,{columnRef:1}),(l()(),e._25(-1,null,["\n               "])),(l()(),e._3(74,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(75,49152,[[11,4]],2,i._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,12,{headerTemplate:0}),e._23(335544320,13,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(79,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._104,a._16)),e._2(80,49152,[[11,4]],2,i._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,14,{headerTemplate:0}),e._23(335544320,15,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(86,0,null,0,28,"amexio-tab",[["title","Source"]],null,null,null,a._56,a.u)),e._2(87,114688,[[1,4]],0,i.E,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(89,0,null,0,24,"amexio-vertical-tab-view",[],null,null,null,a._58,a.w)),e._2(90,5357568,null,1,i.I,[e.B],null,null),e._23(603979776,16,{queryTabs:1}),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(93,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,a._56,a.u)),e._2(94,114688,[[16,4]],0,i.E,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,s)),e._2(97,16384,null,0,d.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(100,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,a._56,a.u)),e._2(101,114688,[[16,4]],0,i.E,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,h)),e._2(104,16384,null,0,d.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(107,0,null,0,5,"amexio-tab",[["title","Data Source"]],null,null,null,a._56,a.u)),e._2(108,114688,[[16,4]],0,i.E,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,b)),e._2(111,16384,null,0,d.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(116,0,null,0,2,"amexio-tab",[["title","Live"]],null,null,null,a._56,a.u)),e._2(117,114688,[[1,4]],0,i.E,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            Work in Progress\n          "])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n    "])),(l()(),e._25(-1,null,["\n    "])),(l()(),e._25(-1,null,["\n\n  "]))],function(l,n){var t=n.component;l(n,2,0,"true"),l(n,5,0),l(n,9,0),l(n,15,0),l(n,19,0,"Demo","true"),l(n,22,0),l(n,25,0,12),l(n,30,0,"Amexio","assets/images/logos/amexio-logo.png"),l(n,33,0,t.topMenuData),l(n,41,0,"API Reference"),l(n,44,0,"Properties:amexio-nav","assets/apireference/navigation/navbar.json","get","properties",!1,!1),l(n,48,0,"Name","name",!1,"string",15),l(n,53,0,"Type","type",!1,"string",10),l(n,58,0,"Default","default",!1,"string",10),l(n,63,0,"Description","description",!1,"string",65),l(n,71,0,"Properties:amexio-nav-item","assets/apireference/navigation/navbar.json","get","propertiesitem",!1,!1),l(n,75,0,"Name","name",!1,"string",20),l(n,80,0,"Description","description",!1,"string",80),l(n,87,0,"Source"),l(n,90,0),l(n,94,0,"HTML",!0),l(n,97,0,t.htmlCode),l(n,101,0,"Type Script"),l(n,104,0,t.typeScriptCode),l(n,108,0,"Data Source"),l(n,111,0,t.dataSource),l(n,117,0,"Live")},function(l,n){l(n,24,0,e._16(n,25).colclass)})}var g=e.Z("navbar-demo",c,function(l){return e._27(0,[(l()(),e._3(0,0,null,null,1,"navbar-demo",[],null,null,null,f,p)),e._2(1,49152,null,0,c,[r.e],null,null)],null,null)},{},{},[]),x=t("0nO6"),y=t("UHIZ");t.d(n,"NavBarDemoModuleNgFactory",function(){return v});var v=e._0(u,[],function(l){return e._12([e._13(512,e.j,e.W,[[8,[g]],[3,e.j],e.v]),e._13(4608,d.n,d.m,[e.s,[2,d.u]]),e._13(4608,x.n,x.n,[]),e._13(4608,r.c,r.c,[]),e._13(4608,r.h,r.b,[]),e._13(5120,r.j,r.k,[]),e._13(4608,r.i,r.i,[r.c,r.h,r.j]),e._13(4608,r.g,r.a,[]),e._13(5120,r.e,r.l,[r.i,r.g]),e._13(4608,i.a,i.a,[]),e._13(512,d.b,d.b,[]),e._13(512,x.k,x.k,[]),e._13(512,x.d,x.d,[]),e._13(512,r.f,r.f,[]),e._13(512,o.b,o.b,[]),e._13(512,i.r,i.r,[]),e._13(512,i.p,i.p,[]),e._13(512,i._34,i._34,[]),e._13(512,i.v,i.v,[]),e._13(512,i.y,i.y,[]),e._13(512,i.l,i.l,[]),e._13(512,i.J,i.J,[]),e._13(512,y.m,y.m,[[2,y.r],[2,y.k]]),e._13(512,u,u,[]),e._13(1024,y.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})}});