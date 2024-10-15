var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/bundle-m6iAkh/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
__name(checkURL, "checkURL");
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// .wrangler/tmp/pages-M8CrYv/bundledWorker-0.23667494829142344.mjs
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
import("node:buffer").then(({ Buffer: Buffer2 }) => {
  globalThis.Buffer = Buffer2;
}).catch(() => null);
var __ALSes_PROMISE__ = import("node:async_hooks").then(({ AsyncLocalStorage }) => {
  globalThis.AsyncLocalStorage = AsyncLocalStorage;
  const envAsyncLocalStorage = new AsyncLocalStorage();
  const requestContextAsyncLocalStorage = new AsyncLocalStorage();
  globalThis.process = {
    env: new Proxy(
      {},
      {
        ownKeys: () => Reflect.ownKeys(envAsyncLocalStorage.getStore()),
        getOwnPropertyDescriptor: (_, ...args) => Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args),
        get: (_, property) => Reflect.get(envAsyncLocalStorage.getStore(), property),
        set: (_, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value)
      }
    )
  };
  globalThis[Symbol.for("__cloudflare-request-context__")] = new Proxy(
    {},
    {
      ownKeys: () => Reflect.ownKeys(requestContextAsyncLocalStorage.getStore()),
      getOwnPropertyDescriptor: (_, ...args) => Reflect.getOwnPropertyDescriptor(requestContextAsyncLocalStorage.getStore(), ...args),
      get: (_, property) => Reflect.get(requestContextAsyncLocalStorage.getStore(), property),
      set: (_, property, value) => Reflect.set(requestContextAsyncLocalStorage.getStore(), property, value)
    }
  );
  return { envAsyncLocalStorage, requestContextAsyncLocalStorage };
}).catch(() => null);
var se = Object.create;
var H = Object.defineProperty;
var ae = Object.getOwnPropertyDescriptor;
var ne = Object.getOwnPropertyNames;
var re = Object.getPrototypeOf;
var ie = Object.prototype.hasOwnProperty;
var E = /* @__PURE__ */ __name2((e, t) => () => (e && (t = e(e = 0)), t), "E");
var U = /* @__PURE__ */ __name2((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "U");
var ce = /* @__PURE__ */ __name2((e, t, a, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of ne(t))
      !ie.call(e, r) && r !== a && H(e, r, { get: () => t[r], enumerable: !(s = ae(t, r)) || s.enumerable });
  return e;
}, "ce");
var V = /* @__PURE__ */ __name2((e, t, a) => (a = e != null ? se(re(e)) : {}, ce(t || !e || !e.__esModule ? H(a, "default", { value: e, enumerable: true }) : a, e)), "V");
var g;
var u = E(() => {
  g = { collectedLocales: [] };
});
var f;
var l = E(() => {
  f = { version: 3, routes: { none: [{ src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$", headers: { Location: "/$1" }, status: 308, continue: true }, { src: "^/_next/__private/trace$", dest: "/404", status: 404, continue: true }, { src: "^/404/?$", status: 404, continue: true, missing: [{ type: "header", key: "x-prerender-revalidate" }] }, { src: "^/500$", status: 500, continue: true }, { src: "^/?$", has: [{ type: "header", key: "rsc" }], dest: "/index.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "rsc" }], dest: "/$1.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" }, continue: true, override: true }], filesystem: [{ src: "^/index(\\.action|\\.rsc)$", dest: "/", continue: true }, { src: "^/_next/data/(.*)$", dest: "/_next/data/$1", check: true }, { src: "^/\\.prefetch\\.rsc$", dest: "/__index.prefetch.rsc", check: true }, { src: "^/(.+)/\\.prefetch\\.rsc$", dest: "/$1.prefetch.rsc", check: true }, { src: "^/\\.rsc$", dest: "/index.rsc", check: true }, { src: "^/(.+)/\\.rsc$", dest: "/$1.rsc", check: true }], miss: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$", status: 404, check: true, dest: "$0" }], rewrite: [{ src: "^/_next/data/(.*)$", dest: "/404", status: 404 }], resource: [{ src: "^/.*$", status: 404 }], hit: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|Nmy2jNvf1ih9PMK33B7i3)/.+$", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }, { src: "^/index(?:/)?$", headers: { "x-matched-path": "/" }, continue: true, important: true }, { src: "^/((?!index$).*?)(?:/)?$", headers: { "x-matched-path": "/$1" }, continue: true, important: true }], error: [{ src: "^/.*$", dest: "/404", status: 404 }, { src: "^/.*$", dest: "/500", status: 500 }] }, images: { domains: ["firebasestorage.googleapis.com", "img.icons8.com", "icpc.global"], sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 16, 32, 48, 64, 96, 128, 256, 384], remotePatterns: [], minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", contentDispositionType: "inline" }, overrides: { "404.html": { path: "404", contentType: "text/html; charset=utf-8" }, "500.html": { path: "500", contentType: "text/html; charset=utf-8" }, "_app.rsc.json": { path: "_app.rsc", contentType: "application/json" }, "_error.rsc.json": { path: "_error.rsc", contentType: "application/json" }, "_document.rsc.json": { path: "_document.rsc", contentType: "application/json" }, "404.rsc.json": { path: "404.rsc", contentType: "application/json" } }, framework: { version: "14.2.5" }, crons: [] };
});
var m;
var p = E(() => {
  m = { "/404.html": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/404.rsc.json": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/500.html": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/Shortlisted.pdf": { type: "static" }, "/_app.rsc.json": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc.json": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc.json": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_next/static/Nmy2jNvf1ih9PMK33B7i3/_buildManifest.js": { type: "static" }, "/_next/static/Nmy2jNvf1ih9PMK33B7i3/_ssgManifest.js": { type: "static" }, "/_next/static/chunks/0e762574-52d36460b4266271.js": { type: "static" }, "/_next/static/chunks/138-e236ac82497ce8dd.js": { type: "static" }, "/_next/static/chunks/314-7f182d8b71ccc0ff.js": { type: "static" }, "/_next/static/chunks/472-18575cf3191a932f.js": { type: "static" }, "/_next/static/chunks/504-3208921a1031d75c.js": { type: "static" }, "/_next/static/chunks/526-5f5ca2d9db382b8a.js": { type: "static" }, "/_next/static/chunks/527-90bba2781c3aeb2d.js": { type: "static" }, "/_next/static/chunks/643-2cd5ae063837ddec.js": { type: "static" }, "/_next/static/chunks/648-cd5809eff941cac9.js": { type: "static" }, "/_next/static/chunks/726-bcc6262410918f78.js": { type: "static" }, "/_next/static/chunks/868-7036ca9b7ee8a4de.js": { type: "static" }, "/_next/static/chunks/8e1d74a4-0892682581fc179b.js": { type: "static" }, "/_next/static/chunks/910-e65d2355241478ed.js": { type: "static" }, "/_next/static/chunks/app/(default)/achievements/page-cbbd942be675b357.js": { type: "static" }, "/_next/static/chunks/app/(default)/events/page-69f4f7aeccc5388f.js": { type: "static" }, "/_next/static/chunks/app/(default)/layout-da8fba3594aafa77.js": { type: "static" }, "/_next/static/chunks/app/(default)/leads/page-9f6796a5271f831a.js": { type: "static" }, "/_next/static/chunks/app/(default)/members/page-545fa9a630889510.js": { type: "static" }, "/_next/static/chunks/app/(default)/page-c0b5fb3593e67e58.js": { type: "static" }, "/_next/static/chunks/app/(default)/pbctf/page-42752ada9c9b0e67.js": { type: "static" }, "/_next/static/chunks/app/(default)/recruitment/page-0edae43e37cf7289.js": { type: "static" }, "/_next/static/chunks/app/(default)/sihregistration/page-48a9de74c968382f.js": { type: "static" }, "/_next/static/chunks/app/_not-found/page-9a90575f033ccea7.js": { type: "static" }, "/_next/static/chunks/app/layout-17b2e1d82efd16ea.js": { type: "static" }, "/_next/static/chunks/app/login/page-c3a4b2c7e7becee3.js": { type: "static" }, "/_next/static/chunks/bc9e92e6-bf3dd3fab61ce35e.js": { type: "static" }, "/_next/static/chunks/daefeb30-67891a9f0539a512.js": { type: "static" }, "/_next/static/chunks/fd9d1056-ded38baf03f48746.js": { type: "static" }, "/_next/static/chunks/framework-aec844d2ccbe7592.js": { type: "static" }, "/_next/static/chunks/main-app-ce666dcd1f399ae5.js": { type: "static" }, "/_next/static/chunks/main-b07d2a05331f3962.js": { type: "static" }, "/_next/static/chunks/pages/_app-6a626577ffa902a4.js": { type: "static" }, "/_next/static/chunks/pages/_error-1be831200e60c5c0.js": { type: "static" }, "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js": { type: "static" }, "/_next/static/chunks/webpack-65da3b1fc88ae89d.js": { type: "static" }, "/_next/static/css/1e32577a24835007.css": { type: "static" }, "/_next/static/css/42d4debdd791748e.css": { type: "static" }, "/_next/static/css/511c9ee4d74dda65.css": { type: "static" }, "/_next/static/css/605a61c926755998.css": { type: "static" }, "/_next/static/css/9d16d0d6eae3d4ab.css": { type: "static" }, "/_next/static/css/ca9d1a9410f9e1e4.css": { type: "static" }, "/_next/static/css/cc25b19426e7ce46.css": { type: "static" }, "/_next/static/css/d051377ea4017e72.css": { type: "static" }, "/_next/static/css/ed5c0e527bc7c5ea.css": { type: "static" }, "/_next/static/css/ed9a001f61527863.css": { type: "static" }, "/_next/static/media/26a46d62cd723877-s.woff2": { type: "static" }, "/_next/static/media/31dd38bdb4daced8-s.woff2": { type: "static" }, "/_next/static/media/3511decdf5d10790-s.woff2": { type: "static" }, "/_next/static/media/55c55f0601d81cf3-s.woff2": { type: "static" }, "/_next/static/media/581909926a08bbc8-s.woff2": { type: "static" }, "/_next/static/media/60c1b9efbca49fe9-s.woff2": { type: "static" }, "/_next/static/media/6d93bde91c0c2823-s.woff2": { type: "static" }, "/_next/static/media/97e0cb1ae144a2a9-s.woff2": { type: "static" }, "/_next/static/media/999f4d94c8b14f83-s.woff2": { type: "static" }, "/_next/static/media/9b8c15de1de72117-s.p.woff2": { type: "static" }, "/_next/static/media/a34f9d1faa5f3315-s.p.woff2": { type: "static" }, "/_next/static/media/df0a9ae256c0569c-s.woff2": { type: "static" }, "/_next/static/media/google_logo.d59d72c3.png": { type: "static" }, "/_next/static/media/logo.8d55ed6e.svg": { type: "static" }, "/_next/static/media/pbach1.3984b569.jpg": { type: "static" }, "/_next/static/media/pbach2.ad50d4e4.jpg": { type: "static" }, "/_next/static/media/pbach3.f56fb0c6.jpg": { type: "static" }, "/favicon.ico": { type: "static" }, "/images/Lead2.jpg": { type: "static" }, "/images/advaith.jpg": { type: "static" }, "/images/announce.png": { type: "static" }, "/images/cp.jpeg": { type: "static" }, "/images/ctf.jpg": { type: "static" }, "/images/demo.jpg": { type: "static" }, "/images/dev.jpg": { type: "static" }, "/images/founder1.png": { type: "static" }, "/images/founder2.png": { type: "static" }, "/images/founder3.jpg": { type: "static" }, "/images/google_logo.png": { type: "static" }, "/images/hack.jpg": { type: "static" }, "/images/lead1.jpg": { type: "static" }, "/images/lead2.png": { type: "static" }, "/images/lead2.webp": { type: "static" }, "/images/lead3.jpg": { type: "static" }, "/images/logo.svg": { type: "static" }, "/images/openday.jpg": { type: "static" }, "/images/pbach1.jpg": { type: "static" }, "/images/pbach2.jpg": { type: "static" }, "/images/pbach3.jpg": { type: "static" }, "/images/pbctf.png": { type: "static" }, "/images/pbimage3.jpeg": { type: "static" }, "/images/recruit.jpeg": { type: "static" }, "/images/recruitment.png": { type: "static" }, "/images/sih.png": { type: "static" }, "/api/achievements": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/achievements.func.js" }, "/api/achievements.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/achievements.func.js" }, "/api/membersData": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/membersData.func.js" }, "/api/membersData.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/membersData.func.js" }, "/api/registration/pbctf": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/registration/pbctf.func.js" }, "/api/registration/pbctf.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/registration/pbctf.func.js" }, "/api/registration/recruitment": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/registration/recruitment.func.js" }, "/api/registration/recruitment.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/registration/recruitment.func.js" }, "/api/registration/sih": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/registration/sih.func.js" }, "/api/registration/sih.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/registration/sih.func.js" }, "/index": { type: "function", entrypoint: "__next-on-pages-dist__/functions/index.func.js" }, "/": { type: "function", entrypoint: "__next-on-pages-dist__/functions/index.func.js" }, "/index.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/index.func.js" }, "/login": { type: "function", entrypoint: "__next-on-pages-dist__/functions/login.func.js" }, "/login.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/login.func.js" }, "/pbctf": { type: "function", entrypoint: "__next-on-pages-dist__/functions/pbctf.func.js" }, "/pbctf.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/pbctf.func.js" }, "/recruitment": { type: "function", entrypoint: "__next-on-pages-dist__/functions/recruitment.func.js" }, "/recruitment.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/recruitment.func.js" }, "/sihregistration": { type: "function", entrypoint: "__next-on-pages-dist__/functions/sihregistration.func.js" }, "/sihregistration.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/sihregistration.func.js" }, "/404": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/500": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/404.rsc": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/achievements.html": { type: "override", path: "/achievements.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(default)/layout,_N_T_/(default)/achievements/layout,_N_T_/(default)/achievements/page,_N_T_/achievements", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/achievements": { type: "override", path: "/achievements.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(default)/layout,_N_T_/(default)/achievements/layout,_N_T_/(default)/achievements/page,_N_T_/achievements", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/achievements.rsc": { type: "override", path: "/achievements.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(default)/layout,_N_T_/(default)/achievements/layout,_N_T_/(default)/achievements/page,_N_T_/achievements", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } }, "/events.html": { type: "override", path: "/events.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(default)/layout,_N_T_/(default)/events/layout,_N_T_/(default)/events/page,_N_T_/events", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/events": { type: "override", path: "/events.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(default)/layout,_N_T_/(default)/events/layout,_N_T_/(default)/events/page,_N_T_/events", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/events.rsc": { type: "override", path: "/events.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(default)/layout,_N_T_/(default)/events/layout,_N_T_/(default)/events/page,_N_T_/events", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } }, "/leads.html": { type: "override", path: "/leads.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(default)/layout,_N_T_/(default)/leads/layout,_N_T_/(default)/leads/page,_N_T_/leads", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/leads": { type: "override", path: "/leads.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(default)/layout,_N_T_/(default)/leads/layout,_N_T_/(default)/leads/page,_N_T_/leads", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/leads.rsc": { type: "override", path: "/leads.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(default)/layout,_N_T_/(default)/leads/layout,_N_T_/(default)/leads/page,_N_T_/leads", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } }, "/members.html": { type: "override", path: "/members.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(default)/layout,_N_T_/(default)/members/layout,_N_T_/(default)/members/page,_N_T_/members", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/members": { type: "override", path: "/members.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(default)/layout,_N_T_/(default)/members/layout,_N_T_/(default)/members/page,_N_T_/members", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/members.rsc": { type: "override", path: "/members.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(default)/layout,_N_T_/(default)/members/layout,_N_T_/(default)/members/page,_N_T_/members", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } } };
});
var F = U((Ge, $) => {
  "use strict";
  u();
  l();
  p();
  function R(e, t) {
    e = String(e || "").trim();
    let a = e, s, r = "";
    if (/^[^a-zA-Z\\\s]/.test(e)) {
      s = e[0];
      let c = e.lastIndexOf(s);
      r += e.substring(c + 1), e = e.substring(1, c);
    }
    let n = 0;
    return e = le(e, (c) => {
      if (/^\(\?[P<']/.test(c)) {
        let o = /^\(\?P?[<']([^>']+)[>']/.exec(c);
        if (!o)
          throw new Error(`Failed to extract named captures from ${JSON.stringify(c)}`);
        let d = c.substring(o[0].length, c.length - 1);
        return t && (t[n] = o[1]), n++, `(${d})`;
      }
      return c.substring(0, 3) === "(?:" || n++, c;
    }), e = e.replace(/\[:([^:]+):\]/g, (c, o) => R.characterClasses[o] || c), new R.PCRE(e, r, a, r, s);
  }
  __name(R, "R");
  __name2(R, "R");
  function le(e, t) {
    let a = 0, s = 0, r = false;
    for (let i = 0; i < e.length; i++) {
      let n = e[i];
      if (r) {
        r = false;
        continue;
      }
      switch (n) {
        case "(":
          s === 0 && (a = i), s++;
          break;
        case ")":
          if (s > 0 && (s--, s === 0)) {
            let c = i + 1, o = a === 0 ? "" : e.substring(0, a), d = e.substring(c), h = String(t(e.substring(a, c)));
            e = o + h + d, i = a;
          }
          break;
        case "\\":
          r = true;
          break;
        default:
          break;
      }
    }
    return e;
  }
  __name(le, "le");
  __name2(le, "le");
  (function(e) {
    class t extends RegExp {
      constructor(s, r, i, n, c) {
        super(s, r), this.pcrePattern = i, this.pcreFlags = n, this.delimiter = c;
      }
    }
    __name(t, "t");
    __name2(t, "t");
    e.PCRE = t, e.characterClasses = { alnum: "[A-Za-z0-9]", word: "[A-Za-z0-9_]", alpha: "[A-Za-z]", blank: "[ \\t]", cntrl: "[\\x00-\\x1F\\x7F]", digit: "\\d", graph: "[\\x21-\\x7E]", lower: "[a-z]", print: "[\\x20-\\x7E]", punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]", space: "\\s", upper: "[A-Z]", xdigit: "[A-Fa-f0-9]" };
  })(R || (R = {}));
  R.prototype = R.PCRE.prototype;
  $.exports = R;
});
var X = U((O) => {
  "use strict";
  u();
  l();
  p();
  O.parse = we;
  O.serialize = ve;
  var be = Object.prototype.toString, C = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function we(e, t) {
    if (typeof e != "string")
      throw new TypeError("argument str must be a string");
    for (var a = {}, s = t || {}, r = s.decode || Pe, i = 0; i < e.length; ) {
      var n = e.indexOf("=", i);
      if (n === -1)
        break;
      var c = e.indexOf(";", i);
      if (c === -1)
        c = e.length;
      else if (c < n) {
        i = e.lastIndexOf(";", n - 1) + 1;
        continue;
      }
      var o = e.slice(i, n).trim();
      if (a[o] === void 0) {
        var d = e.slice(n + 1, c).trim();
        d.charCodeAt(0) === 34 && (d = d.slice(1, -1)), a[o] = Ne(d, r);
      }
      i = c + 1;
    }
    return a;
  }
  __name(we, "we");
  __name2(we, "we");
  function ve(e, t, a) {
    var s = a || {}, r = s.encode || Se;
    if (typeof r != "function")
      throw new TypeError("option encode is invalid");
    if (!C.test(e))
      throw new TypeError("argument name is invalid");
    var i = r(t);
    if (i && !C.test(i))
      throw new TypeError("argument val is invalid");
    var n = e + "=" + i;
    if (s.maxAge != null) {
      var c = s.maxAge - 0;
      if (isNaN(c) || !isFinite(c))
        throw new TypeError("option maxAge is invalid");
      n += "; Max-Age=" + Math.floor(c);
    }
    if (s.domain) {
      if (!C.test(s.domain))
        throw new TypeError("option domain is invalid");
      n += "; Domain=" + s.domain;
    }
    if (s.path) {
      if (!C.test(s.path))
        throw new TypeError("option path is invalid");
      n += "; Path=" + s.path;
    }
    if (s.expires) {
      var o = s.expires;
      if (!Te(o) || isNaN(o.valueOf()))
        throw new TypeError("option expires is invalid");
      n += "; Expires=" + o.toUTCString();
    }
    if (s.httpOnly && (n += "; HttpOnly"), s.secure && (n += "; Secure"), s.priority) {
      var d = typeof s.priority == "string" ? s.priority.toLowerCase() : s.priority;
      switch (d) {
        case "low":
          n += "; Priority=Low";
          break;
        case "medium":
          n += "; Priority=Medium";
          break;
        case "high":
          n += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (s.sameSite) {
      var h = typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite;
      switch (h) {
        case true:
          n += "; SameSite=Strict";
          break;
        case "lax":
          n += "; SameSite=Lax";
          break;
        case "strict":
          n += "; SameSite=Strict";
          break;
        case "none":
          n += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return n;
  }
  __name(ve, "ve");
  __name2(ve, "ve");
  function Pe(e) {
    return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
  }
  __name(Pe, "Pe");
  __name2(Pe, "Pe");
  function Se(e) {
    return encodeURIComponent(e);
  }
  __name(Se, "Se");
  __name2(Se, "Se");
  function Te(e) {
    return be.call(e) === "[object Date]" || e instanceof Date;
  }
  __name(Te, "Te");
  __name2(Te, "Te");
  function Ne(e, t) {
    try {
      return t(e);
    } catch {
      return e;
    }
  }
  __name(Ne, "Ne");
  __name2(Ne, "Ne");
});
u();
l();
p();
u();
l();
p();
u();
l();
p();
var w = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
u();
l();
p();
u();
l();
p();
u();
l();
p();
u();
l();
p();
var q = V(F());
function T(e, t, a) {
  if (t == null)
    return { match: null, captureGroupKeys: [] };
  let s = a ? "" : "i", r = [];
  return { match: (0, q.default)(`%${e}%${s}`, r).exec(t), captureGroupKeys: r };
}
__name(T, "T");
__name2(T, "T");
function v(e, t, a, { namedOnly: s } = {}) {
  return e.replace(/\$([a-zA-Z0-9_]+)/g, (r, i) => {
    let n = a.indexOf(i);
    return s && n === -1 ? r : (n === -1 ? t[parseInt(i, 10)] : t[n + 1]) || "";
  });
}
__name(v, "v");
__name2(v, "v");
function M(e, { url: t, cookies: a, headers: s, routeDest: r }) {
  switch (e.type) {
    case "host":
      return { valid: t.hostname === e.value };
    case "header":
      return e.value !== void 0 ? j(e.value, s.get(e.key), r) : { valid: s.has(e.key) };
    case "cookie": {
      let i = a[e.key];
      return i && e.value !== void 0 ? j(e.value, i, r) : { valid: i !== void 0 };
    }
    case "query":
      return e.value !== void 0 ? j(e.value, t.searchParams.get(e.key), r) : { valid: t.searchParams.has(e.key) };
  }
}
__name(M, "M");
__name2(M, "M");
function j(e, t, a) {
  let { match: s, captureGroupKeys: r } = T(e, t);
  return a && s && r.length ? { valid: !!s, newRouteDest: v(a, s, r, { namedOnly: true }) } : { valid: !!s };
}
__name(j, "j");
__name2(j, "j");
u();
l();
p();
function D(e) {
  let t = new Headers(e.headers);
  return e.cf && (t.set("x-vercel-ip-city", encodeURIComponent(e.cf.city)), t.set("x-vercel-ip-country", e.cf.country), t.set("x-vercel-ip-country-region", e.cf.regionCode), t.set("x-vercel-ip-latitude", e.cf.latitude), t.set("x-vercel-ip-longitude", e.cf.longitude)), t.set("x-vercel-sc-host", w), new Request(e, { headers: t });
}
__name(D, "D");
__name2(D, "D");
u();
l();
p();
function y(e, t, a) {
  let s = t instanceof Headers ? t.entries() : Object.entries(t);
  for (let [r, i] of s) {
    let n = r.toLowerCase(), c = a?.match ? v(i, a.match, a.captureGroupKeys) : i;
    n === "set-cookie" ? e.append(n, c) : e.set(n, c);
  }
}
__name(y, "y");
__name2(y, "y");
function P(e) {
  return /^https?:\/\//.test(e);
}
__name(P, "P");
__name2(P, "P");
function x(e, t) {
  for (let [a, s] of t.entries()) {
    let r = /^nxtP(.+)$/.exec(a), i = /^nxtI(.+)$/.exec(a);
    r?.[1] ? (e.set(a, s), e.set(r[1], s)) : i?.[1] ? e.set(i[1], s.replace(/(\(\.+\))+/, "")) : (!e.has(a) || !!s && !e.getAll(a).includes(s)) && e.append(a, s);
  }
}
__name(x, "x");
__name2(x, "x");
function I(e, t) {
  let a = new URL(t, e.url);
  return x(a.searchParams, new URL(e.url).searchParams), a.pathname = a.pathname.replace(/\/index.html$/, "/").replace(/\.html$/, ""), new Request(a, e);
}
__name(I, "I");
__name2(I, "I");
function S(e) {
  return new Response(e.body, e);
}
__name(S, "S");
__name2(S, "S");
function L(e) {
  return e.split(",").map((t) => {
    let [a, s] = t.split(";"), r = parseFloat((s ?? "q=1").replace(/q *= */gi, ""));
    return [a.trim(), isNaN(r) ? 1 : r];
  }).sort((t, a) => a[1] - t[1]).map(([t]) => t === "*" || t === "" ? [] : t).flat();
}
__name(L, "L");
__name2(L, "L");
u();
l();
p();
function A(e) {
  switch (e) {
    case "none":
      return "filesystem";
    case "filesystem":
      return "rewrite";
    case "rewrite":
      return "resource";
    case "resource":
      return "miss";
    default:
      return "miss";
  }
}
__name(A, "A");
__name2(A, "A");
async function N(e, { request: t, assetsFetcher: a, ctx: s }, { path: r, searchParams: i }) {
  let n, c = new URL(t.url);
  x(c.searchParams, i);
  let o = new Request(c, t);
  try {
    switch (e?.type) {
      case "function":
      case "middleware": {
        let d = await import(e.entrypoint);
        try {
          n = await d.default(o, s);
        } catch (h) {
          let _ = h;
          throw _.name === "TypeError" && _.message.endsWith("default is not a function") ? new Error(`An error occurred while evaluating the target edge function (${e.entrypoint})`) : h;
        }
        break;
      }
      case "override": {
        n = S(await a.fetch(I(o, e.path ?? r))), e.headers && y(n.headers, e.headers);
        break;
      }
      case "static": {
        n = await a.fetch(I(o, r));
        break;
      }
      default:
        n = new Response("Not Found", { status: 404 });
    }
  } catch (d) {
    return console.error(d), new Response("Internal Server Error", { status: 500 });
  }
  return S(n);
}
__name(N, "N");
__name2(N, "N");
function B(e, t) {
  let a = "^//?(?:", s = ")/(.*)$";
  return !e.startsWith(a) || !e.endsWith(s) ? false : e.slice(a.length, -s.length).split("|").every((i) => t.has(i));
}
__name(B, "B");
__name2(B, "B");
u();
l();
p();
function pe(e, { protocol: t, hostname: a, port: s, pathname: r }) {
  return !(t && e.protocol.replace(/:$/, "") !== t || !new RegExp(a).test(e.hostname) || s && !new RegExp(s).test(e.port) || r && !new RegExp(r).test(e.pathname));
}
__name(pe, "pe");
__name2(pe, "pe");
function de(e, t) {
  if (e.method !== "GET")
    return;
  let { origin: a, searchParams: s } = new URL(e.url), r = s.get("url"), i = Number.parseInt(s.get("w") ?? "", 10), n = Number.parseInt(s.get("q") ?? "75", 10);
  if (!r || Number.isNaN(i) || Number.isNaN(n) || !t?.sizes?.includes(i) || n < 0 || n > 100)
    return;
  let c = new URL(r, a);
  if (c.pathname.endsWith(".svg") && !t?.dangerouslyAllowSVG)
    return;
  let o = r.startsWith("//"), d = r.startsWith("/") && !o;
  if (!d && !t?.domains?.includes(c.hostname) && !t?.remotePatterns?.find((b) => pe(c, b)))
    return;
  let h = e.headers.get("Accept") ?? "", _ = t?.formats?.find((b) => h.includes(b))?.replace("image/", "");
  return { isRelative: d, imageUrl: c, options: { width: i, quality: n, format: _ } };
}
__name(de, "de");
__name2(de, "de");
function he(e, t, a) {
  let s = new Headers();
  if (a?.contentSecurityPolicy && s.set("Content-Security-Policy", a.contentSecurityPolicy), a?.contentDispositionType) {
    let i = t.pathname.split("/").pop(), n = i ? `${a.contentDispositionType}; filename="${i}"` : a.contentDispositionType;
    s.set("Content-Disposition", n);
  }
  e.headers.has("Cache-Control") || s.set("Cache-Control", `public, max-age=${a?.minimumCacheTTL ?? 60}`);
  let r = S(e);
  return y(r.headers, s), r;
}
__name(he, "he");
__name2(he, "he");
async function G(e, { buildOutput: t, assetsFetcher: a, imagesConfig: s }) {
  let r = de(e, s);
  if (!r)
    return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: i, imageUrl: n } = r, o = await (i && n.pathname in t ? a.fetch.bind(a) : fetch)(n);
  return he(o, n, s);
}
__name(G, "G");
__name2(G, "G");
u();
l();
p();
u();
l();
p();
var fe = "x-vercel-cache-tags";
var me = "x-next-cache-soft-tags";
var ge = Symbol.for("__cloudflare-request-context__");
async function z(e) {
  let t = `https://${w}/v1/suspense-cache/`;
  if (!e.url.startsWith(t))
    return null;
  try {
    let a = new URL(e.url), s = await _e();
    if (a.pathname === "/v1/suspense-cache/revalidate") {
      let i = a.searchParams.get("tags")?.split(",") ?? [];
      for (let n of i)
        await s.revalidateTag(n);
      return new Response(null, { status: 200 });
    }
    let r = a.pathname.replace("/v1/suspense-cache/", "");
    if (!r.length)
      return new Response("Invalid cache key", { status: 400 });
    switch (e.method) {
      case "GET": {
        let i = W(e, me), n = await s.get(r, { softTags: i });
        return n ? new Response(JSON.stringify(n.value), { status: 200, headers: { "Content-Type": "application/json", "x-vercel-cache-state": "fresh", age: `${(Date.now() - (n.lastModified ?? Date.now())) / 1e3}` } }) : new Response(null, { status: 404 });
      }
      case "POST": {
        let i = globalThis[ge], n = /* @__PURE__ */ __name2(async () => {
          let c = await e.json();
          c.data.tags === void 0 && (c.tags ??= W(e, fe) ?? []), await s.set(r, c);
        }, "n");
        return i ? i.ctx.waitUntil(n()) : await n(), new Response(null, { status: 200 });
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (a) {
    return console.error(a), new Response("Error handling cache request", { status: 500 });
  }
}
__name(z, "z");
__name2(z, "z");
async function _e() {
  return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE ? K("kv") : K("cache-api");
}
__name(_e, "_e");
__name2(_e, "_e");
async function K(e) {
  let t = await import(`./__next-on-pages-dist__/cache/${e}.js`);
  return new t.default();
}
__name(K, "K");
__name2(K, "K");
function W(e, t) {
  return e.headers.get(t)?.split(",")?.filter(Boolean);
}
__name(W, "W");
__name2(W, "W");
function Z() {
  globalThis[J] || (ye(), globalThis[J] = true);
}
__name(Z, "Z");
__name2(Z, "Z");
function ye() {
  let e = globalThis.fetch;
  globalThis.fetch = async (...t) => {
    let a = new Request(...t), s = await xe(a);
    return s || (s = await z(a), s) ? s : (Re(a), e(a));
  };
}
__name(ye, "ye");
__name2(ye, "ye");
async function xe(e) {
  if (e.url.startsWith("blob:"))
    try {
      let a = (await import(`./__next-on-pages-dist__/assets/${new URL(e.url).pathname}.bin`)).default, s = { async arrayBuffer() {
        return a;
      }, get body() {
        return new ReadableStream({ start(r) {
          let i = Buffer.from(a);
          r.enqueue(i), r.close();
        } });
      }, async text() {
        return Buffer.from(a).toString();
      }, async json() {
        let r = Buffer.from(a);
        return JSON.stringify(r.toString());
      }, async blob() {
        return new Blob(a);
      } };
      return s.clone = () => ({ ...s }), s;
    } catch {
    }
  return null;
}
__name(xe, "xe");
__name2(xe, "xe");
function Re(e) {
  e.headers.has("user-agent") || e.headers.set("user-agent", "Next.js Middleware");
}
__name(Re, "Re");
__name2(Re, "Re");
var J = Symbol.for("next-on-pages fetch patch");
u();
l();
p();
var Q = V(X());
var k = /* @__PURE__ */ __name2(class {
  constructor(t, a, s, r, i) {
    this.routes = t;
    this.output = a;
    this.reqCtx = s;
    this.url = new URL(s.request.url), this.cookies = (0, Q.parse)(s.request.headers.get("cookie") || ""), this.path = this.url.pathname || "/", this.headers = { normal: new Headers(), important: new Headers() }, this.searchParams = new URLSearchParams(), x(this.searchParams, this.url.searchParams), this.checkPhaseCounter = 0, this.middlewareInvoked = [], this.wildcardMatch = i?.find((n) => n.domain === this.url.hostname), this.locales = new Set(r.collectedLocales);
  }
  url;
  cookies;
  wildcardMatch;
  path;
  status;
  headers;
  searchParams;
  body;
  checkPhaseCounter;
  middlewareInvoked;
  locales;
  checkRouteMatch(t, { checkStatus: a, checkIntercept: s }) {
    let r = T(t.src, this.path, t.caseSensitive);
    if (!r.match || t.methods && !t.methods.map((n) => n.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))
      return;
    let i = { url: this.url, cookies: this.cookies, headers: this.reqCtx.request.headers, routeDest: t.dest };
    if (!t.has?.find((n) => {
      let c = M(n, i);
      return c.newRouteDest && (i.routeDest = c.newRouteDest), !c.valid;
    }) && !t.missing?.find((n) => M(n, i).valid) && !(a && t.status !== this.status)) {
      if (s && t.dest) {
        let n = /\/(\(\.+\))+/, c = n.test(t.dest), o = n.test(this.path);
        if (c && !o)
          return;
      }
      return { routeMatch: r, routeDest: i.routeDest };
    }
  }
  processMiddlewareResp(t) {
    let a = "x-middleware-override-headers", s = t.headers.get(a);
    if (s) {
      let o = new Set(s.split(",").map((d) => d.trim()));
      for (let d of o.keys()) {
        let h = `x-middleware-request-${d}`, _ = t.headers.get(h);
        this.reqCtx.request.headers.get(d) !== _ && (_ ? this.reqCtx.request.headers.set(d, _) : this.reqCtx.request.headers.delete(d)), t.headers.delete(h);
      }
      t.headers.delete(a);
    }
    let r = "x-middleware-rewrite", i = t.headers.get(r);
    if (i) {
      let o = new URL(i, this.url), d = this.url.hostname !== o.hostname;
      this.path = d ? `${o}` : o.pathname, x(this.searchParams, o.searchParams), t.headers.delete(r);
    }
    let n = "x-middleware-next";
    t.headers.get(n) ? t.headers.delete(n) : !i && !t.headers.has("location") ? (this.body = t.body, this.status = t.status) : t.headers.has("location") && t.status >= 300 && t.status < 400 && (this.status = t.status), y(this.reqCtx.request.headers, t.headers), y(this.headers.normal, t.headers), this.headers.middlewareLocation = t.headers.get("location");
  }
  async runRouteMiddleware(t) {
    if (!t)
      return true;
    let a = t && this.output[t];
    if (!a || a.type !== "middleware")
      return this.status = 500, false;
    let s = await N(a, this.reqCtx, { path: this.path, searchParams: this.searchParams, headers: this.headers, status: this.status });
    return this.middlewareInvoked.push(t), s.status === 500 ? (this.status = s.status, false) : (this.processMiddlewareResp(s), true);
  }
  applyRouteOverrides(t) {
    !t.override || (this.status = void 0, this.headers.normal = new Headers(), this.headers.important = new Headers());
  }
  applyRouteHeaders(t, a, s) {
    !t.headers || (y(this.headers.normal, t.headers, { match: a, captureGroupKeys: s }), t.important && y(this.headers.important, t.headers, { match: a, captureGroupKeys: s }));
  }
  applyRouteStatus(t) {
    !t.status || (this.status = t.status);
  }
  applyRouteDest(t, a, s) {
    if (!t.dest)
      return this.path;
    let r = this.path, i = t.dest;
    this.wildcardMatch && /\$wildcard/.test(i) && (i = i.replace(/\$wildcard/g, this.wildcardMatch.value)), this.path = v(i, a, s);
    let n = /\/index\.rsc$/i.test(this.path), c = /^\/(?:index)?$/i.test(r), o = /^\/__index\.prefetch\.rsc$/i.test(r);
    n && !c && !o && (this.path = r);
    let d = /\.rsc$/i.test(this.path), h = /\.prefetch\.rsc$/i.test(this.path), _ = this.path in this.output;
    d && !h && !_ && (this.path = this.path.replace(/\.rsc/i, ""));
    let b = new URL(this.path, this.url);
    return x(this.searchParams, b.searchParams), P(this.path) || (this.path = b.pathname), r;
  }
  applyLocaleRedirects(t) {
    if (!t.locale?.redirect || !/^\^(.)*$/.test(t.src) && t.src !== this.path || this.headers.normal.has("location"))
      return;
    let { locale: { redirect: s, cookie: r } } = t, i = r && this.cookies[r], n = L(i ?? ""), c = L(this.reqCtx.request.headers.get("accept-language") ?? ""), h = [...n, ...c].map((_) => s[_]).filter(Boolean)[0];
    if (h) {
      !this.path.startsWith(h) && (this.headers.normal.set("location", h), this.status = 307);
      return;
    }
  }
  getLocaleFriendlyRoute(t, a) {
    return !this.locales || a !== "miss" ? t : B(t.src, this.locales) ? { ...t, src: t.src.replace(/\/\(\.\*\)\$$/, "(?:/(.*))?$") } : t;
  }
  async checkRoute(t, a) {
    let s = this.getLocaleFriendlyRoute(a, t), { routeMatch: r, routeDest: i } = this.checkRouteMatch(s, { checkStatus: t === "error", checkIntercept: t === "rewrite" }) ?? {}, n = { ...s, dest: i };
    if (!r?.match || n.middlewarePath && this.middlewareInvoked.includes(n.middlewarePath))
      return "skip";
    let { match: c, captureGroupKeys: o } = r;
    if (this.applyRouteOverrides(n), this.applyLocaleRedirects(n), !await this.runRouteMiddleware(n.middlewarePath))
      return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation)
      return "done";
    this.applyRouteHeaders(n, c, o), this.applyRouteStatus(n);
    let h = this.applyRouteDest(n, c, o);
    if (n.check && !P(this.path))
      if (h === this.path) {
        if (t !== "miss")
          return this.checkPhase(A(t));
        this.status = 404;
      } else if (t === "miss") {
        if (!(this.path in this.output) && !(this.path.replace(/\/$/, "") in this.output))
          return this.checkPhase("filesystem");
        this.status === 404 && (this.status = void 0);
      } else
        return this.checkPhase("none");
    return !n.continue || n.status && n.status >= 300 && n.status <= 399 ? "done" : "next";
  }
  async checkPhase(t) {
    if (this.checkPhaseCounter++ >= 50)
      return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`), this.status = 500, "error";
    this.middlewareInvoked = [];
    let a = true;
    for (let i of this.routes[t]) {
      let n = await this.checkRoute(t, i);
      if (n === "error")
        return "error";
      if (n === "done") {
        a = false;
        break;
      }
    }
    if (t === "hit" || P(this.path) || this.headers.normal.has("location") || !!this.body)
      return "done";
    if (t === "none")
      for (let i of this.locales) {
        let n = new RegExp(`/${i}(/.*)`), o = this.path.match(n)?.[1];
        if (o && o in this.output) {
          this.path = o;
          break;
        }
      }
    let s = this.path in this.output;
    if (!s && this.path.endsWith("/")) {
      let i = this.path.replace(/\/$/, "");
      s = i in this.output, s && (this.path = i);
    }
    if (t === "miss" && !s) {
      let i = !this.status || this.status < 400;
      this.status = i ? 404 : this.status;
    }
    let r = "miss";
    return s || t === "miss" || t === "error" ? r = "hit" : a && (r = A(t)), this.checkPhase(r);
  }
  async run(t = "none") {
    this.checkPhaseCounter = 0;
    let a = await this.checkPhase(t);
    return this.headers.normal.has("location") && (!this.status || this.status < 300 || this.status >= 400) && (this.status = 307), a;
  }
}, "k");
async function Y(e, t, a, s) {
  let r = new k(t.routes, a, e, s, t.wildcard), i = await ee(r);
  return Ce(e, i, a);
}
__name(Y, "Y");
__name2(Y, "Y");
async function ee(e, t = "none", a = false) {
  return await e.run(t) === "error" || !a && e.status && e.status >= 400 ? ee(e, "error", true) : { path: e.path, status: e.status, headers: e.headers, searchParams: e.searchParams, body: e.body };
}
__name(ee, "ee");
__name2(ee, "ee");
async function Ce(e, { path: t = "/404", status: a, headers: s, searchParams: r, body: i }, n) {
  let c = s.normal.get("location");
  if (c) {
    if (c !== s.middlewareLocation) {
      let h = [...r.keys()].length ? `?${r.toString()}` : "";
      s.normal.set("location", `${c ?? "/"}${h}`);
    }
    return new Response(null, { status: a, headers: s.normal });
  }
  let o;
  if (i !== void 0)
    o = new Response(i, { status: a });
  else if (P(t)) {
    let h = new URL(t);
    x(h.searchParams, r), o = await fetch(h, e.request);
  } else
    o = await N(n[t], e, { path: t, status: a, headers: s, searchParams: r });
  let d = s.normal;
  return y(d, o.headers), y(d, s.important), o = new Response(o.body, { ...o, status: a || o.status, headers: d }), o;
}
__name(Ce, "Ce");
__name2(Ce, "Ce");
u();
l();
p();
function te() {
  globalThis.__nextOnPagesRoutesIsolation ??= { _map: /* @__PURE__ */ new Map(), getProxyFor: ke };
}
__name(te, "te");
__name2(te, "te");
function ke(e) {
  let t = globalThis.__nextOnPagesRoutesIsolation._map.get(e);
  if (t)
    return t;
  let a = Ee();
  return globalThis.__nextOnPagesRoutesIsolation._map.set(e, a), a;
}
__name(ke, "ke");
__name2(ke, "ke");
function Ee() {
  let e = /* @__PURE__ */ new Map();
  return new Proxy(globalThis, { get: (t, a) => e.has(a) ? e.get(a) : Reflect.get(globalThis, a), set: (t, a, s) => je.has(a) ? Reflect.set(globalThis, a, s) : (e.set(a, s), true) });
}
__name(Ee, "Ee");
__name2(Ee, "Ee");
var je = /* @__PURE__ */ new Set(["_nextOriginalFetch", "fetch", "__incrementalCache"]);
var ms = { async fetch(e, t, a) {
  te(), Z();
  let s = await __ALSes_PROMISE__;
  if (!s) {
    let n = new URL(e.url), c = await t.ASSETS.fetch(`${n.protocol}//${n.host}/cdn-cgi/errors/no-nodejs_compat.html`), o = c.ok ? c.body : "Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";
    return new Response(o, { status: 503 });
  }
  let { envAsyncLocalStorage: r, requestContextAsyncLocalStorage: i } = s;
  return r.run({ ...t, NODE_ENV: "production", SUSPENSE_CACHE_URL: w }, async () => i.run({ env: t, ctx: a, cf: e.cf }, async () => {
    if (new URL(e.url).pathname.startsWith("/_next/image"))
      return G(e, { buildOutput: m, assetsFetcher: t.ASSETS, imagesConfig: f.images });
    let c = D(e);
    return Y({ request: c, ctx: a, assetsFetcher: t.ASSETS }, f, m, g);
  }));
} };

// node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
__name(isRoutingRuleMatch, "isRoutingRuleMatch");
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}
__name(transformRoutingRuleToRegExp, "transformRoutingRuleToRegExp");

// .wrangler/tmp/pages-M8CrYv/fv8n5dnn8fq.js
var define_ROUTES_default = { version: 1, description: "Built with @cloudflare/next-on-pages@1.13.5.", include: ["/*"], exclude: ["/_next/static/*"] };
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (ms.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return ms.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-m6iAkh/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_dev_pipeline_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-m6iAkh/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
__name(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=fv8n5dnn8fq.js.map
