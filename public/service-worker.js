const cacheFiles = [
    "/",
    "/styles.css",
    "/index.html",
    "/index.js",
    "/db.js",
    "/manifest.webmanifest",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png"
];

const cacheName = "static-cache-v2";
const dataCacheName = "data-cache-v1";

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log("Files were pre-cached successfully!");
            return cache.addAll(cacheFiles);
        })
    )
});

