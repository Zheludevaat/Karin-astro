const CACHE = 'deine-sterne-v4';

const CORE_ASSETS = [
  '/',
  'index.html',
  'manifest.webmanifest',
  'app-icon.svg',
  'icons/icon-180.png',
  'karin-chart.svg',
  'transit-cache.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);

  if (requestUrl.origin !== self.location.origin) return;

  if (requestUrl.pathname.endsWith('.json')) {
    event.respondWith(
      caches.open(CACHE).then(async cache => {
        const cached = await cache.match(event.request);

        try {
          const fresh = await fetch(event.request);
          if (fresh.ok) await cache.put(event.request, fresh.clone());
          return fresh;
        } catch (error) {
          if (cached) return cached;
          throw error;
        }
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
