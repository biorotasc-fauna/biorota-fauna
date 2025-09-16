self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});
// Pass-through network (no caching) - simples e suficiente para PWA reconhecer
self.addEventListener('fetch', (event) => {
  // Mantém comportamento padrão
});
