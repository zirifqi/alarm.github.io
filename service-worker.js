self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('pwa-fullscreen-v1')
        .then((cache) => {
          return cache.addAll([
            '/',
            '/index.html',
            '/manifest.json',
            // '/icon.png',
            // '/app.js',
            // tambahkan sumber daya lain yang ingin di-cache
          ]);
        })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request);
        })
    );
  });
  