// TradePass service worker — makes the app installable and usable offline.
// Strategy: network-first with cache fallback. Online users always get the
// newest questions; offline users get the last version they loaded.
// Bump the version when you need to force old caches out.
const CACHE = "tradepass-v1";

const ASSETS = [
  "./",
  "index.html",
  "css/app.css",
  "js/questions-core.js",
  "js/questions-type1.js",
  "js/questions-type2.js",
  "js/questions-type3.js",
  "js/data.js",
  "js/app.js",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-180.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  if (new URL(e.request.url).origin !== location.origin) return; // let Gumroad etc. pass through untouched
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return res;
      })
      .catch(() =>
        caches.match(e.request, { ignoreSearch: true })
          .then((m) => m || caches.match("index.html"))
      )
  );
});
