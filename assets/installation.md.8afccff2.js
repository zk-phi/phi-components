import{_ as s,o as a,c as n,e as l}from"./app.95b97d1c.js";const h=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Browser","slug":"browser","link":"#browser","children":[{"level":3,"title":"UMD","slug":"umd","link":"#umd","children":[]},{"level":3,"title":"ES Modules","slug":"es-modules","link":"#es-modules","children":[]}]},{"level":2,"title":"Node","slug":"node","link":"#node","children":[{"level":3,"title":"Web Components","slug":"web-components","link":"#web-components","children":[]},{"level":3,"title":"Preact components","slug":"preact-components","link":"#preact-components","children":[]}]}],"relativePath":"installation.md"}'),o={name:"installation.md"},e=l(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h1><h2 id="browser" tabindex="-1">Browser <a class="header-anchor" href="#browser" aria-hidden="true">#</a></h2><h3 id="umd" tabindex="-1">UMD <a class="header-anchor" href="#umd" aria-hidden="true">#</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">path/to/phi-components.umd.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">PhiComponents</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">register</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="es-modules" tabindex="-1">ES Modules <a class="header-anchor" href="#es-modules" aria-hidden="true">#</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">register</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">path/to/phi-components.es.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">register</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="node" tabindex="-1">Node <a class="header-anchor" href="#node" aria-hidden="true">#</a></h2><h3 id="web-components" tabindex="-1">Web Components <a class="header-anchor" href="#web-components" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">register</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">phi-components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">register</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Note that you may need to bypass registration during SSR.</p><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">if (typeof window !== &quot;undefined&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   register();</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="preact-components" tabindex="-1">Preact components <a class="header-anchor" href="#preact-components" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// Raw Preact components are also exported</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Button</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">phi-components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,13),p=[e];function t(c,r,i,D,F,d){return a(),n("div",null,p)}const u=s(o,[["render",t]]);export{h as __pageData,u as default};
