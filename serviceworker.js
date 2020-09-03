const VERSION = "v0.0.1";

self.addEventListener("install", (event) => {
	console.log("Installing FFotG SW " + VERSION);
	event.waitUntil(caches.open(VERSION)
		.then((cache) => {
			console.log("Precaching assets...");
			cache.addAll([
				"offline.html",
				"index.html",
				"https://unpkg.com/material-components-web@7.0.0/dist/material-components-web.min.css",
				"https://unpkg.com/material-components-web@7.0.0/dist/material-components-web.min.js",
				"https://fonts.googleapis.com/icon?family=Material+Icons",
				"/"
			]);
		})
	);
});

self.addEventListener("activate", (event) => {
	console.log("Activated FFotG SW " + VERSION);
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.open(VERSION).then((cache) => {
			return cache.match(event.request).then((response) => {
				return response || fetch(event.request).then((response) => {
					cache.put(event.request, response.clone());
					return response;
				});
			});
		})
	);
});
