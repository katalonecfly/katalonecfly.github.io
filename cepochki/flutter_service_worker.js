'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "202998a60f16e40d6b0e71e813c34544",
"assets/AssetManifest.json": "82d2eb6054779be0cbf778ce909ca92e",
"assets/assets/levels/0001.xml": "16073ee677273f7a60c33628f059c156",
"assets/assets/levels/0002.xml": "338d45e2d8b2314a9fd3d06769cd2574",
"assets/assets/levels/0003.xml": "10266858716f86b9695aeed9eb66bb96",
"assets/assets/levels/0004.xml": "ff60d17037957f1f0795a3e169f427f4",
"assets/assets/levels/0005.xml": "c11f2954666f7d55c83d4257250af0b3",
"assets/assets/levels/0006.xml": "c77cc41e7613b7f7adfbb8645d8b8d6b",
"assets/assets/levels/0007.xml": "23bada1a613fc361c8d137373a4f005d",
"assets/assets/levels/0008.xml": "72231a2f098ce999ca670f9525f1ca4d",
"assets/assets/levels/0009.xml": "1f0f451e9581804f8d6a67e4066f1b72",
"assets/assets/levels/0010.xml": "f00db50fd99a97fa5d0737948d384ad9",
"assets/assets/levels/0011.xml": "b1abe9d448b9bada4c66f2483685a535",
"assets/assets/levels/0012.xml": "0b82aa0a8670d151bd4ec7f37676d523",
"assets/assets/levels/0013.xml": "1bfbe93a760b239d5444032632f1cef8",
"assets/assets/levels/0014.xml": "066632cfc087edfe3a86086a102695a0",
"assets/assets/levels/0015.xml": "d89bcd8584270fb977827783451bc82a",
"assets/assets/levels/0016.xml": "cd1581bbcfc77f73b96d725c02c759e2",
"assets/assets/levels/0017.xml": "18ddd6f0f41fcca83d5c5f20e9bf34ee",
"assets/assets/levels/0018.xml": "8432c78512605494a5d803b6448c0b3e",
"assets/assets/levels/0019.xml": "54cc07f64e09cd3183eb22a3a195bb26",
"assets/assets/levels/0020.xml": "fbdbdf25feb79d45750d4d6a2293b31e",
"assets/assets/levels/0021.xml": "332ba6a4f6f4041b597c5e07ac9d86a4",
"assets/assets/levels/0022.xml": "3b24878f29a577054259ab2660cb53a0",
"assets/assets/levels/0023.xml": "0eace347462a1ba2ef10b102f05d3c6e",
"assets/assets/levels/0024.xml": "47b4c7c1dff84cdd208e59dd4bb94316",
"assets/assets/levels/0025.xml": "ec7b85520ae309c4086786c867f72042",
"assets/assets/levels/0026.xml": "7666cb4ec1d3ad5f812d70483466e09f",
"assets/assets/levels/0027.xml": "e820c52c7bb49bf5e57ddcab3efc9918",
"assets/assets/levels/0028.xml": "918526bd972608f65e548d6ec2393357",
"assets/assets/levels/0029.xml": "88c33d1e2bae94bcf5372605d01fd261",
"assets/assets/levels/0030.xml": "289d2b0db035cf8aaa2526606b7f7263",
"assets/assets/levels/0031.xml": "81f472c44fbc29194471a55c234edd60",
"assets/assets/levels/0032.xml": "800d58cfaf51324f2023f3278c538802",
"assets/assets/levels/0033.xml": "47f4f340d29f911a8ebb5c18db0552f5",
"assets/assets/levels/0034.xml": "af493c07685d3fb026be77a23ec246f6",
"assets/assets/levels/0035.xml": "32eb1c02e31b7b8315d00a216aba54c5",
"assets/assets/levels/0036.xml": "0d0b1321f5aa02d8729db3c931258213",
"assets/assets/levels/0037.xml": "4634e57a7e19d23039d148b905deec56",
"assets/assets/levels/0038.xml": "a957057a8fc1f6408bbb7dc7988e1946",
"assets/assets/levels/0039.xml": "eeea24c1fd13ca8ac4019a909de5b066",
"assets/assets/levels/0040.xml": "f346cc9285a6c29b3ae449a292780e65",
"assets/assets/levels/0041.xml": "370eb31bc8cbb8b7734940a4ca3ba684",
"assets/assets/levels/0042.xml": "7728f80f4ee73d171c45c2aaa489f67e",
"assets/assets/levels/0043.xml": "3920875cf5db1a7226c6dee8d8ace79f",
"assets/assets/levels/0044.xml": "b095f38c8e92025ab1dd2d7d8683e4bc",
"assets/assets/levels/0045.xml": "3d83e952d802467f8c13774fa05a30ef",
"assets/assets/levels/0046.xml": "af87ed940edcf710fb053c55b6130e23",
"assets/assets/levels/0047.xml": "5ce834ac8c847bafbccbe49d25c4f0d0",
"assets/assets/levels/0048.xml": "bd7fbb353166d8296687a704a055937a",
"assets/assets/levels/0049.xml": "9da8f6c97bc02c6e4a608385d71eaab1",
"assets/assets/levels/0050.xml": "571d76d78677ca24eda1e5be98c93471",
"assets/assets/levels/0051.xml": "6fbcaf1cf4bf53a6bf49081b70c2d79b",
"assets/assets/levels/0052.xml": "90c62d01235727355595895f6951489f",
"assets/assets/levels/0053.xml": "aaf66b2f635e938d164ccc9fbaac6dc1",
"assets/assets/levels/0054.xml": "b9f8a132cb5673a9dd6e3c9b3b4c6d7b",
"assets/assets/levels/0055.xml": "9a6d56985fc30f900c451a9e7154085e",
"assets/assets/levels/0056.xml": "b2d75a9243adec05faba4c72297cea3d",
"assets/assets/levels/0057.xml": "8deada9610ef9d9534ad58691f83c6f2",
"assets/assets/levels/0058.xml": "9f36f663490f23e63faa1d3441f1c787",
"assets/assets/levels/0059.xml": "5aa168574e16cdaa8579323d3bf172ff",
"assets/assets/levels/0060.xml": "e3142dfe04875895bbbff8254e13a04d",
"assets/assets/levels/0061.xml": "2d75451aae41e1ccc2ea0555bd3aa0b2",
"assets/assets/levels/0062.xml": "f3f07c79bc6c44ff17c532e8a6a2e941",
"assets/assets/levels/0063.xml": "8e2c45a8474e72911fc7e4eb5b8e2caa",
"assets/assets/levels/0064.xml": "9ae2a32052af2aaa4b741f1e9c6a8a4f",
"assets/assets/levels/0065.xml": "5db7d7e7d6aa580fb3e9e860ef3f1f1a",
"assets/assets/levels/0066.xml": "a3b8e47e0465cad9c0debbe3aeee104a",
"assets/assets/levels/0067.xml": "dcc51711c360e5d895014c5c1d4da26b",
"assets/assets/levels/0068.xml": "17d11d74c28a7b1883c71e82d0f69573",
"assets/assets/levels/0069.xml": "d1e51f914cf6c86f11dfd7aeba6a9e59",
"assets/assets/levels/0070.xml": "0b7455393e54c1d37e467abf01fa72fc",
"assets/assets/levels/0071.xml": "cd25997fb2ac82c9808da281bccf2840",
"assets/assets/levels/0072.xml": "d927c1cf43fa4fa40a3926a6633a36e8",
"assets/assets/levels/0073.xml": "0a7e505a55056ef53e3ce8dc63d24e74",
"assets/assets/levels/0074.xml": "c17c373afd45b200996b427247332be0",
"assets/assets/levels/0075.xml": "7d67cbc5b13d37f331df5f1a9232a112",
"assets/assets/levels/0076.xml": "488965105902abfe25f59ad0e06e67be",
"assets/assets/levels/0077.xml": "2b9fc306ab8edeeb8d6db58d5ceefd26",
"assets/assets/levels/0078.xml": "83bf0a39b37108ada8c257ec5e2da077",
"assets/assets/levels/0079.xml": "e31dad2f82059931477ba9843d7a3da3",
"assets/assets/levels/0080.xml": "8010472cf997502b0ce7fe6159153917",
"assets/assets/levels/0081.xml": "7867c0b399b1e0ed5d28b76ab1f74490",
"assets/assets/levels/0082.xml": "5d0f3725fb714746f8fee4779117be29",
"assets/assets/levels/0083.xml": "fa3c4663fec49305972fc7ca2daef6b9",
"assets/assets/levels/0084.xml": "4e45b05dfc2e85f8130ce2dbc3f32a1e",
"assets/assets/levels/0085.xml": "13cd0c6da33b784285598d380b21e353",
"assets/assets/levels/0086.xml": "836b4b3d49f9736c608531809e6cb7dc",
"assets/assets/levels/0087.xml": "dff27bbaf364f4ba193b33628883324e",
"assets/assets/levels/0088.xml": "8b25f3bce6e348563a0539434c61abf0",
"assets/assets/levels/0089.xml": "79d61067d31cebed5a2a1d2c4ef9973e",
"assets/assets/levels/0090.xml": "8c3317ed56eb5ab76be9a899e16c1b05",
"assets/assets/levels/0091.xml": "ad174f19b7803c2a3abd35d1cb987b54",
"assets/assets/levels/0092.xml": "4add09ba14213402f7a363be4f82d019",
"assets/assets/levels/0093.xml": "b419ac96583d52568b02f2065bf58e1e",
"assets/assets/levels/0094.xml": "281be94a8c58c70fc6b5504c2f7f688c",
"assets/assets/levels/0095.xml": "2aa4cce85d66883116fb386869ad5f79",
"assets/assets/levels/0096.xml": "2dd42207162e7142fe72c7012f7bf283",
"assets/assets/levels/0097.xml": "2ed6b42ae11a735720fc15c77db4c911",
"assets/assets/levels/0098.xml": "e1131d4c4f3b4e7d93d8d22889f70a0a",
"assets/assets/levels/0099.xml": "4699849765f47897ad1c62f4bd3373c6",
"assets/assets/levels/0100.xml": "276a1b9099a9da94976b49346d533f0e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7bc8dfea41d88a8b06e9011d78614248",
"assets/NOTICES": "503964744e6c8565e2b48285acd1af9b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0cebb863d25cd86cd5e7a6237bab52b5",
"/": "0cebb863d25cd86cd5e7a6237bab52b5",
"main.dart.js": "2b821c423e5d52da5792833ac73915db",
"manifest.json": "ed6b3ed99bd50e60c109c218306ad9b2",
"sqflite_sw.js": "4fdd89a73707c2fe970ba46b4f9eea1c",
"sqlite3.wasm": "2068781fd3a05f89e76131a98da09b5b",
"version.json": "8bf3ed7dacff3f9a021fed58d106d0c0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
