

if (typeof importScripts === 'function') {
  importScripts('static/third_party/workbox/workbox-sw.js');
  workbox.setConfig({ modulePathPrefix: 'static/third_party/workbox/' });

  // Global workbox
  if (workbox) {
    console.log('Workbox is loaded');

    // Disable logging
    workbox.setConfig({ debug: false });

    // `generateSW` and `generateSWString` provide the option
    // to force update an exiting service worker.
    // Since we're using `injectManifest` to build SW,
    // manually overriding the skipWaiting();
    self.addEventListener('install', (event) => {
      self.skipWaiting();
      window.location.reload();
    });

    // Manual injection point for manifest files.
    // All assets under build/ and 5MB sizes are precached.
    workbox.precaching.precacheAndRoute([]);

    // // Font caching
    workbox.routing.registerRoute(
      new RegExp('https://fonts.(?:.googlepis|gstatic).com/(.*)'),
      workbox.strategies.cacheFirst({
        cacheName: 'googleapis',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 30,
          }),
        ],
      })
    );

    workbox.routing.registerRoute(/\/posts.|\/articles/,
      async ({ event }) => {
        try {
          return await workbox.strategies.staleWhileRevalidate({
            cacheName: 'cache-pages'
          }).handle({ event });
        } catch (error) {
          return caches.match(offlinePage);
        }
      }
    );


    // Image caching
    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg|svg)$/,
      workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      })
    );

    // JS, CSS caching
    workbox.routing.registerRoute(
      /\.(?:js|css)$/,
      workbox.strategies.staleWhileRevalidate({
        cacheName: 'static-resources',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 20 * 24 * 60 * 60, // 20 Days
          }),
        ],
      })
    );
  } else {
    console.error('Workbox could not be loaded. No offline support');
  }
}



workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
