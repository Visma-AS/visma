(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[4],{594:function(t,n){},600:function(t,n,e){"use strict";e.r(n),e.d(n,"worker",(function(){return v}));var r=e(505),o=e(527),a=e(484),i=e(530),u=e.n(i);var s=e(40),c=e(24),p=e(181),d=0,f=p.paths["/items"].get.responses[200].content["application/json"].examples["example-1"].value,l={postItem:function(t){f.push(Object(c.a)(Object(c.a)({},t.body),{},{timestamp:Date.now(),_id:String(d++)}))},putItem:function(t){var n=t.body,e=f.findIndex((function(n){return n._id===t.params.itemId}));f[e]=n},putItems:function(t){var n,e=t.body,r=Object(s.a)(e);try{var o=function(){var t=n.value,e=f.findIndex((function(n){return n._id===t._id}));f[e]=t};for(r.s();!(n=r.n()).done;)o()}catch(a){r.e(a)}finally{r.f()}},deleteItem:function(t){var n=f.findIndex((function(n){return n._id===t.params.itemId}));f.splice(n,1)},deleteItems:function(t){var n,e=Object(s.a)(t.body);try{var r=function(){var t=n.value,e=f.findIndex((function(n){return n._id===t}));f.splice(e,1)};for(e.s();!(n=e.n()).done;)r()}catch(o){e.e(o)}finally{e.f()}}},v=o.a.apply(void 0,Object(r.a)(function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=new u.a(t);e.register("notFound",(function(t,n,e){return n(e.status(404))})),e.register("notImplemented",(function(t,e,r,o){var a=n[t.operation.operationId];if(a){var i=a(t.request);if(i){var u=i.status,s=i.mock;return e(r.status(u),r.json(s))}}var c=t.api.mockResponseForOperation(t.operation.operationId),p=c.status,d=c.mock;return e(r.status(p),r.json(d))}));var r=Object.keys(a.c);return r.flatMap((function(n){return t.definition.servers.map((function(t){var r=t.url;return a.c[n]("".concat(r,"/*"),(function(t,n,o){return t.path=t.url.href.slice(r.length),e.handleRequest(t,n,o)}))}))}))}({definition:p},l)))}}]);
//# sourceMappingURL=4.64c172ef.chunk.js.map