/* ============================
   RBC EASY – SERVICE WORKER
   Offline-First / Dynamic Cache
   ============================ */

const VERSION = 'v3';
const STATIC_CACHE = `rbc-static-${VERSION}`;
const DYNAMIC_CACHE = `rbc-dynamic-${VERSION}`;
const FALLBACK_HTML = '/index.html';

/* ---- Precache mínimo (App Shell) ---- */
const PRECACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/service-worker.js'
];

/* ============================
   INSTALL
   ============================ */
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      return cache.addAll(PRECACHE);
    })
  );
});

/* ============================
   ACTIVATE
   ============================ */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => ![STATIC_CACHE, DYNAMIC_CACHE].includes(key))
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

/* ============================
   FETCH STRATEGY
   ============================ */
self.addEventListener('fetch', event => {
  const request = event.request;

  // Solo GET
  if (request.method !== 'GET') return;

  const acceptHeader = request.headers.get('accept') || '';

  /* ---- HTML: Offline First ---- */
  if (acceptHeader.includes('text/html')) {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;

        return fetch(request)
          .then(response => {
            return cachePut(request, response);
          })
          .catch(() => caches.match(FALLBACK_HTML));
      })
    );
    return;
  }

  /* ---- Assets: Cache First ---- */
  if (
    acceptHeader.includes('text/css') ||
    acceptHeader.includes('application/javascript') ||
    acceptHeader.includes('image/') ||
    request.url.match(/\.(png|jpg|jpeg|gif|svg|webp|ico)$/)
  ) {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;

        return fetch(request)
          .then(response => cachePut(request, response));
      })
    );
    return;
  }

  /* ---- Default: Network → Cache ---- */
  event.respondWith(
    fetch(request)
      .then(response => cachePut(request, response))
      .catch(() => caches.match(request))
  );
});

/* ============================
   HELPERS
   ============================ */
function cachePut(request, response) {
  if (
    response &&
    response.status === 200 &&
    response.type === 'basic'
  ) {
    const clone = response.clone();
    caches.open(DYNAMIC_CACHE).then(cache => {
      cache.put(request, clone);
    });
  }
  return response;
}