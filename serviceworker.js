const VERSION = "v0.0.1";

self.addEventListener("install", (event) => {
	console.log("Installing FFotG SW " + VERSION);
	event.waitUntil(caches.open(VERSION)
		.then((cache) => {
			console.log("Precaching assets...");
			cache.addAll([
				"offline.html",
				
			]);
		})
	);
});
self.addEventListener("activate", (event) => {
	console.log("Activated FFotG SW " + VERSION);
});
self.addEventListener("fetch", (event) => {
	/*event.respondWith(
		fetch(event.request)
			.then((result) => {
				return caches.open(VERSION)
					.then((cache) => {
						cache.put(event.request.url, result.clone());
						return result;
					});
			}).catch(() => {
				return caches.match(event.request).then((result) => {
					if (res === undefined) {
						return caches.match("offline.html");
					}
					return res;
				});
			})
	);
	event.respondWith(
		fetch(event.request).then((result) => {
			return result;
			caches.open(VERSION).then((cache) => {
				cache.add(event.request);
			});
		}).catch(() => {
			return caches.match(event.request);
		})
	);*/
});