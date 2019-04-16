var cacheName = 'arai-test';
var fileToCache = [
    '/',
    '/index.html',
    '/scripts/app.js',
    '/styles/inline.css'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker_arai] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker_arai] Caching app shell');
            return cache.addAll(fileToCache);
        })
    );
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker_arai] Activate');
});

self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker_arai] Fetch');
});