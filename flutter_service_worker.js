'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "08d7802b0813005a13a239a81ec937d3",
".git/config": "e730b0f3c54e5a0a8164dae397990c88",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0b3f4e71e56a4ee6b4709244a5b11ab1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7c1ceff08785da77a346b9ae17346101",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6c1a5c320abcc1621abee080b608f36a",
".git/logs/refs/heads/main": "f5a52f388cabe6aa31bf8cd9c38bd63a",
".git/logs/refs/remotes/origin/main": "322ed8a6de2173284eadd2fdf1cc2af0",
".git/objects/02/f7c59a43cbd3d65c67063187f8c0440b3ead0f": "38bd2477eed67ccbea2a72df74a70fae",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/08/9b12be397127a769720422c89111adb44ddfab": "33d167226f9497dcc8c9a1e082823240",
".git/objects/09/832b557ab6a0c202798952b821c6d0cea02697": "0b98e8792d20598c260db33575e979a0",
".git/objects/09/d2de3bc3429152ba2680d307b34f047291579f": "7be586f1f1973c30bdf28d146ab27e52",
".git/objects/0c/23b8c80994a476742efa65733d38f2df005a74": "b6169fdd19d2521da670b457931a4da5",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/15/c3b91df6788472b226cd26f3418db1e82b6fc8": "b935e797076fae983fac1f035aa53c98",
".git/objects/16/3df1e30f4252f6943700be99ca107c6fe6943a": "d0e494ae1957cd350d26f30fc9799b43",
".git/objects/16/767d235e762a5a0d939e89bd50d617328db5ba": "8742e9e9bf8575a95618c990a6a8768f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2a/c3a36a187c8942f7346269e7c69c38dd104e83": "0f8d2825c846acaf20fcf131c30d8e27",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/31/25be20f627c2c201c18decadb87dd154170795": "c9ff83a5a08826dc20306d0ea2d51b2b",
".git/objects/37/16ee12007bbc262155b934a145a3f30bda8a66": "18ca0eb58f6693d30c63d2da0f2c7cfa",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/9fcc1e31775726d6dafb76563aae76cf7f5e0d": "05fdf5b18b3d2cfb5e74541a7d8e8cf8",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/3a5d6ee5fdf7ba41bf7a34bd5d027a15b5a6fb": "9a518f2e9ed83ba11405e271bcd155e7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/097e3d2379bd9b3d0bfd3a2f081857ee5f70a2": "f354f5da57366acb20822a2ce5066b13",
".git/objects/4a/15641b825c80dce368486694c47559d9324b2f": "c698ba55d2a23df00b523c053d25a2e9",
".git/objects/4e/163fbadf3f221cb53d70f8b7b91ce07292e007": "f4deee1407b197ae86156cec15d0ae36",
".git/objects/4f/64584d71019ba3587deee6407a0baaae83fdc7": "cd2b69539b6a50d55e11b82c898014c1",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/36eb64cf322fa1a5cdf5a01d53c45e41a8d128": "d661cd73afe6d4f53657903e903ea997",
".git/objects/59/3726c40ed739db21a7e29abda5697ff320003e": "53476ffa58b35248bdc9853bdd30ff15",
".git/objects/65/635875bda1476eb0b2c69af6b588164bde0dbe": "7cab8b580139d1c64fd599d292e91793",
".git/objects/72/95166b6b226b82459bb7af4067ea55cc806db0": "321b28d86fc0b35bec1644176104f057",
".git/objects/79/ecf9260e372ce3b85d7b24042605ce58ba52fc": "eac570b114f85e0853edd6571b423a0a",
".git/objects/7e/aaf6f332ccaf7309be2c170dbe8189e875d9a1": "eb1bbc464fada60a2d3426fc93803044",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/84f008cece749fc4733da80c2ed585ef99949e": "17520baf89a24de3eca76b7057140d88",
".git/objects/91/cd384785b1f0d29b255e8c4bc5bbf3ddb6919c": "b39dc016ceb51113ca57cc5c88acdd31",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9a/8e5b1fb16e6580d359a9027bbd1641f72d2ba0": "0eb2701d5b75f402719da1d1462262b3",
".git/objects/9b/96df41fcd5f2e9e20f2a845cbe5c2babcba12b": "8ea97a3b6112fa3c5c204cd32bbcbca5",
".git/objects/9c/fb070c1415c249b43e9123eab11114fb447901": "b1a76af821d0db44118c28b9a9f1e6ff",
".git/objects/ae/be6fa4ada2e608fd4ff8f39ba30f05489ca323": "7210b6412a2cb717d085c30c24582025",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/ce/24bd84b85f0b20625e5b503a60929abff9d1b0": "f077fabfa2069fbee9c9811def2b3cf3",
".git/objects/d2/fed2af0a464023a12c66f1df4b23ae2aa8de60": "cb57ab3faa232f67612473849e53230c",
".git/objects/d5/f3a0cf213cdd0426fb398248ec101b27bc4051": "5d9b56b2562f2a716ab7bea3be8f3d67",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ea/00d9265e312032122ba73016d44c0cd187624e": "00df139ac3cb698cfa013186e080e349",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04e1a7ebb04159848bd72ff989ba69721951ea": "332709fe6c098444303658b4c7c6552f",
".git/objects/f9/39fc1a65f030bbcfca7a4b17c6d74e9db7ea45": "7d31aa82e964a4afcae796abc0e670bf",
".git/refs/heads/main": "4b374f84d4aba8daa547aa5b83289262",
".git/refs/remotes/origin/main": "ea879fdf20562bdee04aa12379755884",
"assets/AssetManifest.bin": "6ddf0f6af4d703b2324df4a0cad20fc8",
"assets/AssetManifest.bin.json": "9f5d31eae1713ea08e3dc3f9afaecf51",
"assets/AssetManifest.json": "745c0bdc0bf080315e0f597654d0350b",
"assets/assets/bagong-pilipinas.png": "ddd841e29ae477563dd2502f742e2c2a",
"assets/assets/dict.png": "43f688ffca0c96ad46effef8fe396a1a",
"assets/assets/dtc.png": "f835006c05aa50a0491e50ba28545fa6",
"assets/assets/ilcdb.png": "21bc5114626483207ea43f86ebb39787",
"assets/assets/tech4ed.png": "aea59a540f52237f77c35a306837eaf1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7b4c3447f639c3385283b66ca36dc88a",
"assets/NOTICES": "e9a16b015c207419347d46ca94484689",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "094f876a5de0477eab11c7f0672d37c8",
"/": "094f876a5de0477eab11c7f0672d37c8",
"main.dart.js": "cea64ba4e1f25cacdb8c346581501d89",
"manifest.json": "20cdfebac9dfd0ae2a95f8fa949df38e",
"version.json": "e31fb8565766e2ea01ec4739aca94dc0"};
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
