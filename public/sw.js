if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js');
      let a = Promise.resolve();
      return (
        s[e] ||
          (a = new Promise(async (a) => {
            if ('document' in self) {
              const s = document.createElement('script');
              (s.src = e), document.head.appendChild(s), (s.onload = a);
            } else importScripts(e), a();
          })),
        a.then(() => {
          if (!s[e]) throw new Error(`Module ${e} didn’t register its module`);
          return s[e];
        })
      );
    },
    a = (a, s) => {
      Promise.all(a.map(e)).then((e) => s(1 === e.length ? e[0] : e));
    },
    s = { require: Promise.resolve(a) };
  self.define = (a, c, t) => {
    s[a] ||
      (s[a] = Promise.resolve().then(() => {
        let s = {};
        const i = { uri: location.origin + a.slice(1) };
        return Promise.all(
          c.map((a) => {
            switch (a) {
              case 'exports':
                return s;
              case 'module':
                return i;
              default:
                return e(a);
            }
          })
        ).then((e) => {
          const a = t(...e);
          return s.default || (s.default = a), s;
        });
      }));
  };
}
define('./sw.js', ['./workbox-c2b5e142'], function (e) {
  'use strict';
  importScripts(),
    e.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url:
            '/_next/static/chunks/37bb1d1918d20104cd505b6856be0fbf0c61006d.7a612cd81aefd46dd2db.js',
          revision: '2e2c4f6d473b7ee92b022008fe5a2919',
        },
        {
          url:
            '/_next/static/chunks/6fa2cae82b46f9f778eff42134c17ec9eecf762d.689400f89294ae0f9f99.js',
          revision: '665d9b7e61586874a41ecb8eb5d7b263',
        },
        {
          url:
            '/_next/static/chunks/ad18727501ea861b91113932e5f808cef694c2ab.c38b44812259402e15eb.js',
          revision: '26374872d8f45d6ff29bea0078d41836',
        },
        {
          url: '/_next/static/chunks/commons.020a96d8a8e71e9e3362.js',
          revision: '04f0577a5e9051f03506862353ab6be9',
        },
        {
          url: '/_next/static/chunks/framework.619a4f70c1d4d3a29cbc.js',
          revision: '8e6204793e3d11a8bedf359bfb6e110d',
        },
        {
          url: '/_next/static/css/0309f13a787c985c1d63.css',
          revision: 'f35e69a6b20fb76d63406b65a89d1cc9',
        },
        {
          url:
            '/_next/static/images/photo-1568605117036-5fe5e7bab0b7-1200-504290cd74e9f425ff7267bab15bcc94.jpeg',
          revision: '48b207ffcb1cd61ed89c6ef536166d10',
        },
        {
          url:
            '/_next/static/images/photo-1568605117036-5fe5e7bab0b7-1260-fca428dce313b13cd5b0ab808636ba48.jpeg',
          revision: '9a523e49e6cef7bfe81800724602bab1',
        },
        {
          url:
            '/_next/static/images/photo-1568605117036-5fe5e7bab0b7-1600-44ec278341bab7c2e616d18dda08f610.jpeg',
          revision: '3d0e5a568616d1f04d572382e0e8aad1',
        },
        {
          url:
            '/_next/static/images/photo-1568605117036-5fe5e7bab0b7-1640-8cbc2303e7d29cf1f890f13373aff643.jpeg',
          revision: 'b91019c3b81913dbb1240bc3296c85ce',
        },
        {
          url:
            '/_next/static/images/photo-1568605117036-5fe5e7bab0b7-2100-d4337cd5391092b7822ac5aa1f9b74fb.jpeg',
          revision: '4d70e4724c14513f5c5c43fc3af49a83',
        },
        {
          url:
            '/_next/static/images/photo-1568605117036-5fe5e7bab0b7-300-7a04d111f38b4904df5976aa61f20706.jpeg',
          revision: '24697262dc255b93af7c5cb8b8ba5224',
        },
        {
          url:
            '/_next/static/images/photo-1568605117036-5fe5e7bab0b7-400-e13f9bcc10af57a0fe989dfb92fdeb14.jpeg',
          revision: 'cd758f6d5d3f1bd7bdcf22b2060db670',
        },
        {
          url:
            '/_next/static/images/photo-1568605117036-5fe5e7bab0b7-500-d23428f7431c78809b64e1ed34a9fdc8.jpeg',
          revision: 'bbfd1f8c131ea89f916ebc9b3b427376',
        },
        {
          url:
            '/_next/static/images/photo-1568605117036-5fe5e7bab0b7-600-07cbe35e825dd4a5201274a357c3d3fd.jpeg',
          revision: 'ba390815d28a21cf2ba23020f8496c50',
        },
        {
          url:
            '/_next/static/images/photo-1568605117036-5fe5e7bab0b7-800-0e60ffbb7797bd1cf26a8c246d2b7582.jpeg',
          revision: '369b67d4b309ab50caeac69c734b62d7',
        },
        {
          url:
            '/_next/static/images/photo-1568605117036-5fe5e7bab0b7-820-6c97453f90fde893c8b1b5f2080e0bc3.jpeg',
          revision: 'dc9822a987cdc7a348aa7f6431cb7ff8',
        },
        {
          url: '/_next/static/lDtqCjQyZKt2XFY0_uElE/_buildManifest.js',
          revision: '22acc221ed0d36dd271e649c97ec78e3',
        },
        {
          url: '/_next/static/lDtqCjQyZKt2XFY0_uElE/_ssgManifest.js',
          revision: 'abee47769bf307639ace4945f9cfd4ff',
        },
        {
          url: '/_next/static/lDtqCjQyZKt2XFY0_uElE/pages/_app.js',
          revision: '1bc48276645e95943bca697ef13dbd98',
        },
        {
          url: '/_next/static/lDtqCjQyZKt2XFY0_uElE/pages/_error.js',
          revision: 'd007872d0d447364982a536a95f7c9f9',
        },
        {
          url: '/_next/static/lDtqCjQyZKt2XFY0_uElE/pages/artykuly.js',
          revision: '34843434241c61acd0bc40381fad4139',
        },
        {
          url: '/_next/static/lDtqCjQyZKt2XFY0_uElE/pages/artykuly/%5Bid%5D.js',
          revision: 'ce44606a877534fc1affbfc29eeddd2f',
        },
        {
          url: '/_next/static/lDtqCjQyZKt2XFY0_uElE/pages/index.js',
          revision: '734a6dd60abcd16e5c81a983e1f17b59',
        },
        {
          url: '/_next/static/lDtqCjQyZKt2XFY0_uElE/pages/kontakt.js',
          revision: '3d62fa6cd116864bf86791c71d5b3238',
        },
        {
          url: '/_next/static/lDtqCjQyZKt2XFY0_uElE/pages/ogloszenia.js',
          revision: '383fcee126e72f194d39790e144edfdf',
        },
        {
          url: '/_next/static/lDtqCjQyZKt2XFY0_uElE/pages/ogloszenia/%5Bid%5D.js',
          revision: 'b06a2f687d395db9f4499029d9e863a8',
        },
        {
          url: '/_next/static/lDtqCjQyZKt2XFY0_uElE/pages/porady.js',
          revision: '0bd65547064d68e015443064ef1d70a1',
        },
        {
          url: '/_next/static/lDtqCjQyZKt2XFY0_uElE/pages/porady/%5Bid%5D.js',
          revision: '83e50e157376fc9f5fd6a5974e4c862a',
        },
        {
          url: '/_next/static/runtime/main-28ce96b61e2299fe303e.js',
          revision: '7d3c30214d80346cf9af80972f5a1354',
        },
        {
          url: '/_next/static/runtime/polyfills-901ba2ee5b659327f527.js',
          revision: '559d2fb61183f8f5a7a7eafcfd37c1f1',
        },
        {
          url: '/_next/static/runtime/webpack-c212667a5f965e81e004.js',
          revision: 'f5e6e2fca3144cc944812cfa3547f475',
        },
        { url: '/admin/config.yml', revision: 'e2fe1056657eba56ae3fe6a062accfe9' },
        { url: '/admin/index.html', revision: 'fd1b7e8d12a87ee4d285e3cc2fc1107b' },
        { url: '/assets/fonts/MavenPro-Bold.ttf', revision: '24bce2323bb3443bd588f224fdfd5a01' },
        { url: '/assets/fonts/MavenPro-Medium.ttf', revision: 'f01a3baacc2032cacb81d33a42554415' },
        { url: '/assets/fonts/MavenPro-Regular.ttf', revision: 'c525be442d6c7b5cc3532407ebe542db' },
        {
          url: '/assets/icons/android-chrome-192x192.png',
          revision: '7b0bd67f4124b377026ad0522fa7649d',
        },
        { url: '/assets/icons/apple-touch-icon.png', revision: '9ef0cd8a7a7d640b207558e8a9b254c2' },
        { url: '/assets/icons/icon-512x512.png', revision: '1715680c81be4002ee18c3458a98ba78' },
        {
          url: '/assets/img/photo-1568605117036-5fe5e7bab0b7.jpeg',
          revision: '751c9a344b6b216ec4dd0ae378381bd9',
        },
        { url: '/carousel.min.css', revision: '96bf83a50e9fb3a732918dbed1ae3f13' },
        { url: '/favicon.ico', revision: '4dbcd653fd28ead147b491eca7ea38c9' },
        {
          url:
            '/images/photo-1568605117036-5fe5e7bab0b7-1200-23a64511b6715efca9359b5ed692d1ae.jpeg',
          revision: '23a64511b6715efca9359b5ed692d1ae',
        },
        {
          url:
            '/images/photo-1568605117036-5fe5e7bab0b7-1600-40f2bdfd8edfa6694202211d5dfa7e64.jpeg',
          revision: '40f2bdfd8edfa6694202211d5dfa7e64',
        },
        {
          url: '/images/photo-1568605117036-5fe5e7bab0b7-300-9d9f266ccb03515fff39ef5e95f4781e.jpeg',
          revision: '9d9f266ccb03515fff39ef5e95f4781e',
        },
        {
          url: '/images/photo-1568605117036-5fe5e7bab0b7-400-c2111b28880a7c4dd6dd6e4c4871cdde.jpeg',
          revision: 'c2111b28880a7c4dd6dd6e4c4871cdde',
        },
        {
          url: '/images/photo-1568605117036-5fe5e7bab0b7-600-d0514d96a2e8771c2bf3b05312884f1c.jpeg',
          revision: 'd0514d96a2e8771c2bf3b05312884f1c',
        },
        {
          url: '/images/photo-1568605117036-5fe5e7bab0b7-800-35609a2b22915268e81698125eb178a9.jpeg',
          revision: '35609a2b22915268e81698125eb178a9',
        },
        { url: '/manifest.json', revision: 'b04258b5f9fc68e8538e869574fb5b52' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 1, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    );
});
