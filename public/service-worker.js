const cacheName = "cache_v1";

const shouldCachedUrl = ["index.html", "favicon64.ico", "offline.html"]

const self = this;

//install serviceWorker
self.addEventListener("install", async (event) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(shouldCachedUrl);
  return self.skipWaiting();
});

//request listiner
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(() => {
        return fetch(event.request)
          .catch(() => caches.match('offline.html'))
      })
  )
});



//activate serviceWorker
self.addEventListener("activate", async (event) => {
  self.clients.claim();
});