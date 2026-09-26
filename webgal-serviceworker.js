const CACHE_NAME = 'webgal-assets-v2';

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

// Cache runtime assets while leaving game media and navigation requests on the network.
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  const shouldCache = request.method === 'GET' && url.origin === self.location.origin && url.pathname.startsWith('/assets/');

  if (!shouldCache) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(request);
      if (cached) return cached;

      const response = await fetch(request);
      if (response.ok && response.status === 200) {
        await cache.put(request, response.clone());
      }
      return response;
    }),
  );
});
