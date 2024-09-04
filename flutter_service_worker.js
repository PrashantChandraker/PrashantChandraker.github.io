'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e23a50070450a4d0846dbdb958f178f6",
"assets/AssetManifest.bin.json": "47b07f0e95219a0bd4d915fb85f06f9b",
"assets/AssetManifest.json": "b7b101a62ee4879089919cd69dc5be7d",
"assets/assets/contact/github.png": "3d4c7482f267f5accbb7461766f3f790",
"assets/assets/contact/gmail.png": "eabc1a70245f1384e30960f25f9b2784",
"assets/assets/contact/instagram.png": "8ce47fd872187bfa8d11505b3bd8944e",
"assets/assets/contact/linkedin.png": "d604727cedcd27fcc981ffdb1f318a66",
"assets/assets/featured_projects/chat.png": "e07bb6a459902839fe677bd8078d7eb2",
"assets/assets/featured_projects/digital-signature.png": "4cec392fa4ecdab0e1bff0d25558bf81",
"assets/assets/featured_projects/money.png": "6e3f09326317b9907ba67c0717f6b41e",
"assets/assets/featured_projects/music-notes.png": "e777e7f6eb82f27cf90d24290cb2b458",
"assets/assets/featured_projects/note.png": "1d0e221c6816d2ee143a3258917cdfbd",
"assets/assets/featured_projects/notes.png": "0b11f4af632105012f46da86da9fddc0",
"assets/assets/featured_projects/qr-code.png": "aa297024eb4ac581f506551930295b22",
"assets/assets/featured_projects/season.png": "5e22cf975b15003e20064a6de1e0d602",
"assets/assets/featured_projects/shopping.png": "786a1911c3fbe48d68602eccd0800de0",
"assets/assets/featured_projects/translate.png": "cafa0382db5589424b92d36d8fdea264",
"assets/assets/featured_projects/ui-design.png": "b371ee2ba98e4aa2734d66a70c5a7dff",
"assets/assets/featured_projects/video.png": "2521c958572f7317b265f7a94d1d6279",
"assets/assets/fonts/BaskervvilleSC-Regular.ttf": "c6c34517afd2f53c6f1174e4fc8ed496",
"assets/assets/fonts/HindSiliguri-Bold.ttf": "09e7451bd892e6af09275b701369b454",
"assets/assets/fonts/HindSiliguri-Light.ttf": "8265fea97f78727b251c512253942467",
"assets/assets/fonts/HindSiliguri-Medium.ttf": "41fd138da9f718913aa98aae255b859b",
"assets/assets/fonts/HindSiliguri-Regular.ttf": "5858488e9870f755271e8a71754eda49",
"assets/assets/fonts/HindSiliguri-SemiBold.ttf": "c75e4224905a200c868801e66480b7d3",
"assets/assets/icons/android.png": "eb9e9538a45596a230a017f02756a109",
"assets/assets/icons/apple.png": "7ddfc140089c7118cb1613c5f474f421",
"assets/assets/icons/flutter.png": "9d5f5f55edd71e589630e24f2d8e3724",
"assets/assets/icons/web.png": "b736989d08e0cf33917d7e4f67a7ba62",
"assets/assets/images/esanchaya.png": "7a2713c54c94381916a6aaf345715fc5",
"assets/assets/images/pellipandiri.jpg": "1aef5b35021a26ca4e0a689698bac1ac",
"assets/assets/images/prashant.jpeg": "9fd5b8552fbb4e651c99fa63475b256d",
"assets/assets/images/priyafoods.jpg": "4474cb9a40db9fd0cd23ec67648c9c42",
"assets/FontManifest.json": "64e86aa294ff6e3159ae759294630566",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "139acee546006f341954977c31040200",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "80a3df1b6e3cf3a1b5eed6c49e1f45b8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a0377eee8e58597ee2eb883b18772314",
"/": "a0377eee8e58597ee2eb883b18772314",
"main.dart.js": "52c982dece4f81cf4cfe0e2068e44e12",
"manifest.json": "7d7458b7b7b38b2594cd6e46f0cf2772",
"version.json": "f27b7b9773bed5f6fbbd259fb72d0eff"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
