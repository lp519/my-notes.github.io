/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0b9d43310ea34ab6db30204ed69392ee"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.73dc42e5.js",
    "revision": "30e828c146c3447f6cbf728cdd82e925"
  },
  {
    "url": "assets/js/10.f90154aa.js",
    "revision": "2d186e0b80e993bf73e697cd6f792bb4"
  },
  {
    "url": "assets/js/11.e8633219.js",
    "revision": "c6b1a8edcabf36b3249cd03c29f993dd"
  },
  {
    "url": "assets/js/12.06ef4276.js",
    "revision": "05b38751e842897cc6c68a24d7c5732c"
  },
  {
    "url": "assets/js/13.22a5038a.js",
    "revision": "8972b7c72d314ad6b6d13f0ede93dd3c"
  },
  {
    "url": "assets/js/14.41a592c5.js",
    "revision": "ececb7b1f746ccba84b49768dd2c5f82"
  },
  {
    "url": "assets/js/15.50a7b002.js",
    "revision": "4af495968cb4e72dfefdb55963743c7f"
  },
  {
    "url": "assets/js/16.1f0e2f0a.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
  },
  {
    "url": "assets/js/17.8faa0753.js",
    "revision": "f8bf5c88f9cd04152dd34f36961f89d7"
  },
  {
    "url": "assets/js/18.ce4df536.js",
    "revision": "d694268519b57a4802a37a1900aa9515"
  },
  {
    "url": "assets/js/4.d94921b7.js",
    "revision": "6a9061b507f12ee2770b1f19b8e3d4da"
  },
  {
    "url": "assets/js/5.aafec39e.js",
    "revision": "1689296e32236e06547752a56f9265f6"
  },
  {
    "url": "assets/js/6.fcea16c6.js",
    "revision": "4719502381b5c3d6ac6a2e6d590b4322"
  },
  {
    "url": "assets/js/7.7fcc8b8f.js",
    "revision": "c38484adcb3f89dd39a62f70a7b1ea62"
  },
  {
    "url": "assets/js/8.8dfc7fd6.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.e8364819.js",
    "revision": "05c8a35278c075892025e2714a299d64"
  },
  {
    "url": "assets/js/app.27aedb2a.js",
    "revision": "34818a95e9752faaf8060b94f806a442"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "b73c783d2a3617012347a0b012fc9464"
  },
  {
    "url": "categories/java/index.html",
    "revision": "6cabbd19cb31e4f1779d39c63294c8b2"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "92a7c3619990aa308b0012baf440328a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b8d9cc67c72f3d9eb57f357f2c8d0143"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "6391c482c06ec8da3c08e287d8ba7972"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "b3547186122e5e04b9ec89e7f590a05a"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "f4b751d755f0a227cd0c180eef2cc17d"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "f59f2c0c916a4308c1d6c1981f19cf44"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "6e958e09a9c4256f0d1b1df47d80c7fb"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a92c848203adee417befd38d2d823ef9"
  },
  {
    "url": "tags/js/index.html",
    "revision": "81a5c7dface00829068b31815182bec7"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "faf85c9a17a05e9051e4a18459186fef"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "f17cd920048d9086009df88f3871c71d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4d3f86623b672604d61294c5efb1e095"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "25702542b1b067cb60030529dd8d4abe"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "cecbc6dba424a5d294e49a47dc5c0f4e"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "530809472090981b8a3382b4345ef7f3"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "3f04150bc5aed94bb4169768585bd719"
  },
  {
    "url": "timeline/index.html",
    "revision": "68bfbd7cfbc3ce510fd7e7106f6bd089"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "21f6e9ac2db42a659d0e934606be6adb"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "f3e22516e3b3f01a67d4fa04e653c3b7"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "900afea00658df8bfcf6c868a7ed999f"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "c8da4d5487a20ca61cb53f73ad8f1327"
  },
  {
    "url": "生活分享/life.html",
    "revision": "eeea71132baa8a8c4a0d195bb3d9c9ba"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
