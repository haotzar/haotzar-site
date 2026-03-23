// Service Worker for HaOtzar Site
const CACHE_NAME = 'haotzar-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/style.css',
  '/assets/index.js',
  '/assets/i18n.js',
  '/assets/icon.png',
  '/assets/fonts/DrugulinCLM-Bold.otf',
  '/art/app-screenshot.PNG',
  '/art/app-screenshot-2.PNG',
  '/art/app-screenshot-3.PNG',
  '/art/home-background.png'
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
