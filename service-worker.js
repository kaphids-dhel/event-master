const CACHE = 'jyc-2026-v7-sunday-key-corrected';
const CORE = ['./', './index.html', './script.js', './manifest.webmanifest', './assets/icon-192.png', './assets/icon-512.png', './assets/badge.png', './assets/map.png', './assets/adventurer.png', './assets/pathfinder.png', './assets/mit.png', './assets/staff.jpg', './assets/camp-sketch.png', './assets/camp-banner.gif', './assets/banner.png'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(cache => Promise.allSettled(CORE.map(url => cache.add(url))))); self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))); self.clients.claim(); });
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).then(res => { if (res.ok) { const copy=res.clone(); caches.open(CACHE).then(cache => cache.put('./index.html', copy)); } return res; }).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(res => { if (res.ok && !req.url.endsWith('.pdf') && !req.url.endsWith('.mp4')) { const copy=res.clone(); caches.open(CACHE).then(cache => cache.put(req,copy)); } return res; })));
});
