// Cache version — bump on every deploy to force update
const CACHE = 'patches-v4';
const ASSETS = ['./', './index.html', './style.css', './game.js', './manifest.json', './version.json'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())  // activate new SW immediately
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())  // take control of all open tabs
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  // Network-first for HTML, JS, CSS — always get the latest version
  if (e.request.mode === 'navigate' || /\.(js|css|html)(\?|$)/.test(url) || url.endsWith('version.json')) {
    e.respondWith(
      fetch(e.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return response;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request))
    );
  }
});
