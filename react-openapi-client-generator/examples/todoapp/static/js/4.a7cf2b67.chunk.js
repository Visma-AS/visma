(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[4],{304:function(n,t){},310:function(n,t,e){"use strict";e.r(t),e.d(t,"worker",(function(){return s}));var i=e(17),a=e(231),o=e(234),c=e(26),r=e(18),d=e(88),u=0,p=d.paths["/items"].get.responses[200].content["application/json"].examples["example-1"].value,f={postItem:function(n){p.push(Object(r.a)(Object(r.a)({},n.body),{},{timestamp:Date.now(),_id:String(u++)}))},putItem:function(n){var t=n.body,e=p.findIndex((function(t){return t._id===n.params.itemId}));p[e]=t},putItems:function(n){var t,e=n.body,i=Object(c.a)(e);try{var a=function(){var n=t.value,e=p.findIndex((function(t){return t._id===n._id}));p[e]=n};for(i.s();!(t=i.n()).done;)a()}catch(o){i.e(o)}finally{i.f()}},deleteItem:function(n){var t=p.findIndex((function(t){return t._id===n.params.itemId}));p.splice(t,1)},deleteItems:function(n){var t,e=Object(c.a)(n.body);try{var i=function(){var n=t.value,e=p.findIndex((function(t){return t._id===n}));p.splice(e,1)};for(e.s();!(t=e.n()).done;)i()}catch(a){e.e(a)}finally{e.f()}}},s=a.a.apply(void 0,Object(i.a)(Object(o.a)({definition:d},f)))}}]);
//# sourceMappingURL=4.a7cf2b67.chunk.js.map