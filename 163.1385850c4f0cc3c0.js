"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[163],{5163:(y,c,l)=>{l.r(c),l.d(c,{DemoModule:()=>f});var i=l(6814),j=l(9168),t=l(9776),d=l(1386),p=l(9212);let u=(()=>{var s;class e{resolved(a){console.log(`Resolved captcha with response: ${a}`)}onError(a){console.log("reCAPTCHA error encountered; details:",a)}}return(s=e).\u0275fac=function(a){return new(a||s)},s.\u0275cmp=p.Xpm({type:s,selectors:[["recaptcha-demo"]],decls:1,vars:0,consts:[["errorMode","handled",3,"resolved","errored"]],template:function(a,h){1&a&&(p.TgZ(0,"re-captcha",0),p.NdJ("resolved",function(o){return h.resolved(o)})("errored",function(o){return h.onError(o)}),p.qZA())},dependencies:[t.wT],encapsulation:2}),e})();var r=l(2598);const g=[{path:"",component:u,data:{page:{feature:"basic",title:"Basic Example",content:{component:'<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@angular/core&quot;</span>;\n\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RecaptchaErrorParameters</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;ng-recaptcha&quot;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&quot;recaptcha-demo&quot;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&quot;./basic-demo.component.html&quot;</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">BasicDemoComponent</span> {\n  <span class="hljs-keyword">public</span> <span class="hljs-title function_">resolved</span>(<span class="hljs-attr">captchaResponse</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">void</span> {\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">`Resolved captcha with response: <span class="hljs-subst">${captchaResponse}</span>`</span>);\n  }\n\n  <span class="hljs-keyword">public</span> <span class="hljs-title function_">onError</span>(<span class="hljs-attr">errorDetails</span>: <span class="hljs-title class_">RecaptchaErrorParameters</span>): <span class="hljs-built_in">void</span> {\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">`reCAPTCHA error encountered; details:`</span>, errorDetails);\n  }\n}\n',html:'<span class="hljs-tag">&lt;<span class="hljs-name">re-captcha</span> (<span class="hljs-attr">resolved</span>)=<span class="hljs-string">&quot;resolved($event)&quot;</span> (<span class="hljs-attr">errored</span>)=<span class="hljs-string">&quot;onError($event)&quot;</span> <span class="hljs-attr">errorMode</span>=<span class="hljs-string">&quot;handled&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">re-captcha</span>&gt;</span>\n',module:'<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@angular/core&quot;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">CommonModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@angular/common&quot;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Routes</span>, <span class="hljs-title class_">RouterModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@angular/router&quot;</span>;\n\n<span class="hljs-keyword">import</span> {\n  <span class="hljs-title class_">RecaptchaModule</span>,\n  <span class="hljs-variable constant_">RECAPTCHA_SETTINGS</span>,\n  <span class="hljs-title class_">RecaptchaSettings</span>,\n  <span class="hljs-variable constant_">RECAPTCHA_V3_SITE_KEY</span>,\n  <span class="hljs-variable constant_">RECAPTCHA_LOADER_OPTIONS</span>,\n  <span class="hljs-title class_">RecaptchaLoaderOptions</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;ng-recaptcha&quot;</span>;\n\n<span class="hljs-keyword">import</span> { parseLangFromHref } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;../../parse-lang-from-href&quot;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BasicDemoComponent</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./basic-demo.component&quot;</span>;\n<span class="hljs-keyword">import</span> { settings } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./basic-demo.data&quot;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ConfigService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;../config.service&quot;</span>;\n\n<span class="hljs-keyword">const</span> <span class="hljs-attr">routes</span>: <span class="hljs-title class_">Routes</span> = [\n  {\n    <span class="hljs-attr">path</span>: <span class="hljs-string">&quot;&quot;</span>,\n    <span class="hljs-attr">component</span>: <span class="hljs-title class_">BasicDemoComponent</span>,\n    <span class="hljs-attr">data</span>: { <span class="hljs-attr">page</span>: settings },\n  },\n];\n\n<span class="hljs-meta">@NgModule</span>({\n  <span class="hljs-attr">declarations</span>: [<span class="hljs-title class_">BasicDemoComponent</span>],\n  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">RouterModule</span>.<span class="hljs-title function_">forChild</span>(routes), <span class="hljs-title class_">RecaptchaModule</span>, <span class="hljs-title class_">CommonModule</span>],\n  <span class="hljs-attr">providers</span>: [\n    {\n      <span class="hljs-attr">provide</span>: <span class="hljs-variable constant_">RECAPTCHA_V3_SITE_KEY</span>,\n      <span class="hljs-attr">useFactory</span>: <span class="hljs-function">(<span class="hljs-params">config: ConfigService</span>) =&gt;</span> {\n        <span class="hljs-keyword">return</span> config.<span class="hljs-property">recaptchaSiteKeyV3</span>;\n      },\n      <span class="hljs-attr">deps</span>: [<span class="hljs-title class_">ConfigService</span>],\n    },\n    {\n      <span class="hljs-attr">provide</span>: <span class="hljs-variable constant_">RECAPTCHA_SETTINGS</span>,\n      <span class="hljs-attr">useFactory</span>: (<span class="hljs-attr">config</span>: <span class="hljs-title class_">ConfigService</span>): <span class="hljs-function"><span class="hljs-params">RecaptchaSettings</span> =&gt;</span> {\n        <span class="hljs-keyword">return</span> { <span class="hljs-attr">siteKey</span>: config.<span class="hljs-property">recaptchaSiteKeyV2</span> };\n      },\n      <span class="hljs-attr">deps</span>: [<span class="hljs-title class_">ConfigService</span>],\n    },\n    {\n      <span class="hljs-attr">provide</span>: <span class="hljs-variable constant_">RECAPTCHA_LOADER_OPTIONS</span>,\n      <span class="hljs-attr">useValue</span>: {\n        <span class="hljs-title function_">onBeforeLoad</span>(<span class="hljs-params">url</span>) {\n          <span class="hljs-keyword">const</span> langOverride = <span class="hljs-title function_">parseLangFromHref</span>();\n          <span class="hljs-keyword">if</span> (langOverride) url.<span class="hljs-property">searchParams</span>.<span class="hljs-title function_">set</span>(<span class="hljs-string">&quot;hl&quot;</span>, langOverride);\n\n          <span class="hljs-keyword">return</span> { url };\n        },\n      } <span class="hljs-keyword">as</span> <span class="hljs-title class_">RecaptchaLoaderOptions</span>,\n    },\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DemoModule</span> {}\n'}}}}];let f=(()=>{var s;class e{}return(s=e).\u0275fac=function(a){return new(a||s)},s.\u0275mod=p.oAB({type:s}),s.\u0275inj=p.cJS({providers:[{provide:t.We,useFactory:n=>n.recaptchaSiteKeyV3,deps:[r.E]},{provide:t.BZ,useFactory:n=>({siteKey:n.recaptchaSiteKeyV2}),deps:[r.E]},{provide:t.iV,useValue:{onBeforeLoad(n){const a=(0,d.g)();return a&&n.searchParams.set("hl",a),{url:n}}}}],imports:[j.Bz.forChild(g),t.a,i.ez]}),e})()}}]);