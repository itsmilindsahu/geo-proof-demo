const CACHE_NAME = "tracewaste-cache-v1";

const FILES_TO_CACHE = [
  "/geo-proof-demo/",
  "/geo-proof-demo/index.html",
  "/geo-proof-demo/qr.html",
  "/geo-proof-demo/manifest.json",
  "/geo-proof-demo/logo.png",
  "/geo-proof-demo/favicon.png"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
