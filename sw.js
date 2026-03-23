// Service Worker for HaOtzar Site
const CACHE_NAME = 'haotzar-v1';
const urlsToCache = [
  '/haotzar-site/',
  '/haotzar-site/index.html',
  '/haotzar-site/manifest.json',
  '/haotzar-site/assets/style.css',
  '/haotzar-site/assets/index.js',
  '/haotzar-site/assets/i18n.js',
  '/haotzar-site/assets/icon.png',
  '/haotzar-site/assets/fonts/DrugulinCLM-Bold.otf',
  '/haotzar-site/art/app-screenshot.PNG',
  '/haotzar-site/art/app-screenshot-2.PNG',
  '/haotzar-site/art/app-screenshot-3.PNG',
  '/haotzar-site/art/home-background.png'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
