(function(){var b=null,g=g||{};g.global=this;g.e=!0;g.v="en";g.W=function(a){g.g(a)};g.$=function(a){if(!g.e)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};g.g=function(a,c,d){a=a.split(".");d=d||g.global;!(a[0]in d)&&d.execScript&&d.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)!a.length&&g.p(c)?d[e]=c:d=d[e]?d[e]:d[e]={}};g.J=function(a,c){for(var d=a.split("."),e=c||g.global,f;f=d.shift();)if(g.q(e[f]))e=e[f];else return b;return e};
g.K=function(a,c){var d=c||g.global,e;for(e in a)d[e]=a[e]};g.z=function(){};g.u=!0;g.Y=function(){};g.C="";g.U=function(){};g.L=function(a){return a};g.w=function(){throw Error("unimplemented abstract method");};g.A=function(a){a.H=function(){if(a.h)return a.h;g.e&&(g.i[g.i.length]=a);return a.h=new a}};g.i=[];
g.d=function(a){var c=typeof a;if("object"==c)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return c;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==c&&"undefined"==typeof a.call)return"object";return c};g.p=function(a){return void 0!==a};g.Q=function(a){return a===b};g.q=function(a){return a!=b};g.isArray=function(a){return"array"==g.d(a)};g.N=function(a){var c=g.d(a);return"array"==c||"object"==c&&"number"==typeof a.length};g.P=function(a){return g.r(a)&&"function"==typeof a.getFullYear};g.S=function(a){return"string"==typeof a};g.O=function(a){return"boolean"==typeof a};g.R=function(a){return"number"==typeof a};
g.isFunction=function(a){return"function"==g.d(a)};g.r=function(a){var c=typeof a;return"object"==c&&a!=b||"function"==c};g.o=function(a){return a[g.a]||(a[g.a]=++g.t)};g.s=function(a){"removeAttribute"in a&&a.removeAttribute(g.a);try{delete a[g.a]}catch(c){}};g.a="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36);g.t=0;g.G=g.o;g.X=g.s;g.l=function(a){var c=g.d(a);if("object"==c||"array"==c){if(a.clone)return a.clone();var c="array"==c?[]:{},d;for(d in a)c[d]=g.l(a[d]);return c}return a};
g.k=function(a,c,d){return a.call.apply(a.bind,arguments)};g.j=function(a,c,d){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,e);return a.apply(c,d)}}return function(){return a.apply(c,arguments)}};g.bind=function(a,c,d){g.bind=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.k:g.j;return g.bind.apply(b,arguments)};
g.V=function(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var c=Array.prototype.slice.call(arguments);c.unshift.apply(c,d);return a.apply(this,c)}};g.T=function(a,c){for(var d in c)a[d]=c[d]};g.now=Date.now||function(){return+new Date};
g.globalEval=function(a){if(g.global.execScript)g.global.execScript(a,"JavaScript");else if(g.global.eval)if(g.b==b&&(g.global.eval("var _et_ = 1;"),"undefined"!=typeof g.global._et_?(delete g.global._et_,g.b=!0):g.b=!1),g.b)g.global.eval(a);else{var c=g.global.document,d=c.createElement("script");d.type="text/javascript";d.defer=!1;d.appendChild(c.createTextNode(a));c.body.appendChild(d);c.body.removeChild(d)}else throw Error("goog.globalEval not available");};g.b=b;
g.F=function(a,c){function d(a){for(var a=a.split("-"),c=[],d=0;d<a.length;d++)c.push(e(a[d]));return c.join("-")}function e(a){return g.f[a]||a}var f;f=g.f?"BY_WHOLE"==g.m?e:d:function(a){return a};return c?a+"-"+f(c):f(a)};g.Z=function(a,c){g.f=a;g.m=c};g.I=function(a,c){var d=c||{},e;for(e in d)var f=(""+d[e]).replace(/\$/g,"$$$$"),a=a.replace(RegExp("\\{\\$"+e+"\\}","gi"),f);return a};g.n=function(){g.g("example.init",j,void 0)};g.D=function(a,c,d){a[c]=d};
g.M=function(a,c){function d(){}d.prototype=c.prototype;a.c=c.prototype;a.prototype=new d;a.prototype.constructor=a};
g.B=function(a,c,d){var e=arguments.callee.caller;if(e.c)return e.c.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var f=Array.prototype.slice.call(arguments,2),i=!1,h=a.constructor;h;h=h.c&&h.c.constructor)if(h.prototype[c]===e)i=!0;else if(i)return h.prototype[c].apply(a,f);if(a[c]===e)return a.constructor.prototype[c].apply(a,f);throw Error("goog.base called from a method of one name to a method of a different name");};g.scope=function(a){a.call(g.global)};function j(){document.getElementById("world").innerHTML="world";document.getElementById("output").innerHTML="100 -- now this--addThisaddThis"}g.n();}).call(this);
