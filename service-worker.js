/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2020/07/14/关于Hexo博客系统的使用/index.html","e1ec022bf56fead0c2bd0d5c3bf71d62"],["/2020/07/18/Typora + PicGo + Github实现图床/index.html","17edc67c6610bdc66b99292c44aa2084"],["/2020/08/01/剑指-Offer-68-II-二叉树的最近公共祖先/index.html","a9d8746fa8aa24af86a95b01787af374"],["/2020/08/02/剑指-Offer-68-I-二叉搜索树的最近公共祖先/index.html","23e8419deb23e6e9e0a7d088af783307"],["/2020/08/03/剑指-Offer-66-构建乘积数组/index.html","3c7b37a0c030383b920b0a6b7ff2138c"],["/2020/08/04/剑指-Offer-65-不用加减乘除做加法/index.html","b3e0ee7a1f023fc8074a62f1c5b141e8"],["/2020/08/05/剑指-Offer-64-求1-2-…-n/index.html","3db2322764dcd59d0033fa9e0d7bc052"],["/2020/08/06/剑指-Offer-63-股票的最大利润/index.html","e1ae8ce694420cd757131198c94debb2"],["/2020/08/07/剑指-Offer-62-圆圈中最后剩下的数字/index.html","014ea5956087af68ef10c1fb6872c954"],["/2020/08/08/剑指-Offer-61-扑克牌中的顺子/index.html","eb3cc35dd12784fd6cc8c962e9807b6d"],["/2020/08/09/剑指-Offer-59-II-队列的最大值/index.html","80b146cc96b3e2765cfc13d48b1b490c"],["/2020/08/10/剑指-Offer-59-I-滑动窗口的最大值/index.html","8f219f15916399f9887161cfc7a02d55"],["/2020/08/11/剑指-Offer-58-II-左旋转字符串/index.html","ee4e99216799a22e1d90c3ec0d898f5d"],["/2020/08/12/剑指-Offer-58-I-翻转单词顺序/index.html","f8d66d29962c68df635e548015e7ac37"],["/2020/08/13/剑指-Offer-57-II-和为s的连续正数序列/index.html","a12718a0106c83d4ba97e80ad595bb8e"],["/2020/08/14/剑指-Offer-57-I-和为s的两个数字/index.html","17a216bc317414d3e8d0b0a05633abe0"],["/2020/08/15/剑指-Offer-56-I-数组中数字出现的次数/index.html","de78eaaf5f6c6fde1ddc27cb5fc70885"],["/2020/08/16/剑指-Offer-55-II-平衡二叉树/index.html","556663905c083d23d3d5b5c1741f337e"],["/2020/08/17/剑指-Offer-55-I-二叉树的深度/index.html","f463c7714459d7c9339b839350cd687e"],["/2020/08/18/剑指-Offer-54-二叉搜索树的第k大节点/index.html","8ff10fb1634ab3a2bc13688fef252737"],["/2020/08/19/剑指-Offer-53-II-0～n-1中缺失的数字/index.html","c4df6b7fa2c60c747a988759ec708290"],["/2020/08/20/剑指-Offer-53-I-在排序数组中查找数字-I/index.html","ec583600b607ff173d286dd2c8a739a5"],["/2020/08/21/剑指-Offer-52-两个链表的第一个公共节点/index.html","49c4998d7917341022bff3da2d065470"],["/2020/08/22/剑指-Offer-50-第一个只出现一次的字符/index.html","b3ac9d30d0b7085b973c8e71bf51cb9d"],["/2020/08/23/剑指-Offer-49-丑数/index.html","a754f8390defa5b42138641eb1f6063e"],["/2020/08/24/剑指-Offer-48-最长不含重复字符的子字符串/index.html","9a8a59c73980564ae041ad5ab8f4c478"],["/2020/08/25/剑指-Offer-47-礼物的最大价值/index.html","d23977c22664fa4556d43f1144c364aa"],["/2020/08/26/剑指-Offer-46-把数字翻译成字符串/index.html","797e1a38badcca75b3c74e07b1d0f99f"],["/2020/08/27/剑指-Offer-45-把数组排成最小的数/index.html","9d81751cd1b741b960672da56ab689b8"],["/2020/08/28/剑指-Offer-44-数字序列中某一位的数字/index.html","e29398af987b0d81fd60e6b86cd4ccd3"],["/2020/08/29/剑指-Offer-43-1～n整数中1出现的次数/index.html","433b2ccd3dc4ccc02490492fe1e018ee"],["/2020/08/30/剑指-Offer-42-连续子数组的最大和/index.html","3bcf79cdb5e8838d38f9c95cc028652b"],["/2020/08/31/剑指-Offer-41-数据流中的中位数/index.html","7ae6f25d2720e9dbcda1f0b60c5e602d"],["/2020/09/01/剑指-Offer-40-最小的k个数/index.html","16bad4126d6f8b0f1b57ee9d6644d32b"],["/2020/09/02/剑指-Offer-39-数组中出现次数超过一半的数字/index.html","e1ce9e1cc70329077ee468afe2e2f19e"],["/2020/09/03/剑指-Offer-38-字符串的排列/index.html","b55ca4d542bf2f0d015477a382e65592"],["/2020/09/04/剑指-Offer-37-序列化二叉树/index.html","c33db17f8e2645d02ed6a0ef069f4eb3"],["/2020/09/05/剑指-Offer-36-二叉搜索树与双向链表/index.html","f7815aca4e3f22ab61e1561fb66f8da1"],["/2020/09/06/剑指-Offer-35-复杂链表的复制/index.html","af1da6e370678a29922b669e5b459df2"],["/2020/09/07/剑指-Offer-34-二叉树中和为某一值的路径/index.html","0b4f2dc732624da13b0b25e3bfb612ea"],["/2020/09/08/剑指-Offer-30-包含min函数的栈/index.html","bd8b25a5d19d06857477050645e76212"],["/2020/09/08/剑指-Offer-31-栈的压入、弹出序列/index.html","dcc41fc00c44a001a24efbb95131a27c"],["/2020/09/08/剑指-Offer-32-I-从上到下打印二叉树/index.html","744204824946016cef6f64f4a368e384"],["/2020/09/08/剑指-Offer-32-II-从上到下打印二叉树-II/index.html","ce37d2a5f6698b69dbadbaf6b0483029"],["/2020/09/08/剑指-Offer-32-III-从上到下打印二叉树-III/index.html","fd16f56731c444cba3411b5460d948d1"],["/2020/09/08/剑指-Offer-33-二叉搜索树的后序遍历序列/index.html","d27f241f48ce84933f4311a4915c226d"],["/2020/12/04/Kafka消息中间件到底会不会丢消息/index.html","df92b02fc2d0e945940ddb4678756994"],["/about/index.html","3a2d986666a5fdfb7552908e477cac9e"],["/archives/2020/07/index.html","7311f59f1ac7f7e3d74e727c2c8e3760"],["/archives/2020/08/index.html","c19fb45ea53f9550408ac2801a0653bf"],["/archives/2020/08/page/2/index.html","f8b612adee292777b0cf4287b11ab881"],["/archives/2020/08/page/3/index.html","185164bcef6beb93ddfee9d723ded8b6"],["/archives/2020/08/page/4/index.html","297e7518f9df51cedd6097d316380ae6"],["/archives/2020/09/index.html","35fa090ea5e82b7fde28d0a22bd521b5"],["/archives/2020/09/page/2/index.html","9926f7e57113b9c434de19b891d2fe8e"],["/archives/2020/12/index.html","586b896a0c566951c661f660f831de9f"],["/archives/2020/index.html","8eb2f638a69aa7c262897aa56f7c1830"],["/archives/2020/page/2/index.html","97c49b47e77b4c8fd5928947baf73a83"],["/archives/2020/page/3/index.html","713f8f55aacf2781b80d04f3565434af"],["/archives/2020/page/4/index.html","e7ffbfb5601ebb9f77fff75b77268392"],["/archives/2020/page/5/index.html","15f3998631f35ef42247effd46812a9b"],["/archives/index.html","0a92f6b4f82f1c2c600a160facdaea75"],["/archives/page/2/index.html","cb9aa30c8c0b8921e68afd270eb5a0b4"],["/archives/page/3/index.html","c3e89e4c54f4be779256d460a11e7540"],["/archives/page/4/index.html","57cf09889b8c5fe287d450fec5f13af4"],["/archives/page/5/index.html","0245fff3b09c989f61a4462ca582c904"],["/books/index.html","baf1d291144c1c68ae4f0ce3ced8c770"],["/categories/index.html","ac6d3918c3f9f59b8535aa1017515404"],["/categories/工具/index.html","35de6cdc369f4ffd0bc8e5751da7f395"],["/categories/数据结构与算法/index.html","4182a29e17e066f5a39da7707a0c4f12"],["/categories/数据结构与算法/page/2/index.html","f479dc14e1074842e62dda5e997383e6"],["/categories/数据结构与算法/page/3/index.html","8e5cf29bbd41950ee75ff19013cd6fba"],["/categories/数据结构与算法/page/4/index.html","c8d8d79ec1f4a882462466ecfdc463db"],["/categories/数据结构与算法/page/5/index.html","1dfdfbd7c2a09ed76bd7f41a9bf774ce"],["/comment/index.html","a83a0f9bf607259a1f0f5d8de0f2dbce"],["/css/index.css","1b987c9a7179ed4d7749845fb7bdee4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","32527ac06a21a24497dae1ff97fbee61"],["/img/favicon.png","d8a6f5ec6c689058761afc671a6fecec"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","fc22944f7f2b87e33bb3c67a6dd3b333"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","a258c346ac68593b29310ee03e8e09e6"],["/movies/index.html","c4ba396853d540d09f18f5398570a5c0"],["/music/index.html","f554ad7531afd888b4168b8f46ddec30"],["/page/2/index.html","0fd148bff926a2dd90a09adba51c93ce"],["/page/3/index.html","be889529eed334b192a349a60f2582b5"],["/page/4/index.html","189d0fcb7034bcfda71af3c8b33ecdc1"],["/page/5/index.html","59d6bf2efb538d0aa6b8ea8df004e5cc"],["/tags/index.html","e17e626eb77f49a7e854654071101eef"],["/tags/中序遍历/index.html","4595632830a21db089728683067f21a0"],["/tags/二分查找/index.html","58ad99021ab33c521c08a46761f1ccff"],["/tags/二叉搜索树/index.html","07fd94ca2777da5bb1709403b561a1b5"],["/tags/二叉树/index.html","c6202b11b64c4549d3931cc18592bfd0"],["/tags/位运算/index.html","3f4db4b786083e4c9776253957b4621d"],["/tags/分治法/index.html","0fa5fa834d333338c12ac3d49d5c8c70"],["/tags/动态规划/index.html","fe28f3a2fadac51fb7c792825eb889b3"],["/tags/单链表/index.html","e526d832a3a2c5b2bdc5139e871cfff1"],["/tags/博客/index.html","0fe1c4fb03cefdac11cdc3387706aa2e"],["/tags/双指针/index.html","3bc91ac3d4171c7c661d76198722eb31"],["/tags/双端队列/index.html","231b883f8b3e3ee263ff4309a5d3d59a"],["/tags/后序遍历/index.html","91b8ee352825009251665842efdfd9fe"],["/tags/哈希表/index.html","d906056a44a9147ea1adb417233d2fc4"],["/tags/回溯法/index.html","ccce2a50b8d1e9e86269cd5e748e861a"],["/tags/图床/index.html","eca126e76cd3b9927689bc0a0d511cf6"],["/tags/大根堆/index.html","f8b74c1168837c41a547cd62e6a9c3e4"],["/tags/字符串/index.html","1db62745fb04ec4c6cb41e4e7b703926"],["/tags/小根堆/index.html","5929c58499449d7dd73fa7cfdf952a93"],["/tags/层序遍历/index.html","67d23b9c40ff5c6b2ff4f437504c79db"],["/tags/平衡二叉树/index.html","ea0f9ff543d465b604ccc4f58b55d1df"],["/tags/广度优先搜索/index.html","6c8c67ed1cf082d7399da62d5225acb9"],["/tags/快速排序/index.html","00d899377f9020e5fbb247bc3d89bd18"],["/tags/排序/index.html","5385e809e82ffb4b0513fa8e25e648b1"],["/tags/数组/index.html","6ddf7310269a4dc0ce5d93be6c0102cb"],["/tags/栈/index.html","0271687927b8715ed7cc1843cba820cf"],["/tags/深度优先搜索/index.html","0ec93ba80b688f64740b1fea4b64b4f1"],["/tags/滑动窗口/index.html","29b3a2d66569118266672bdf3852483c"],["/tags/约瑟夫环/index.html","1cca9b3cc29e4544006e428af7758989"],["/tags/规律/index.html","371dab4c0c3dde9110d3ed4ef22b71af"],["/tags/迭代/index.html","01f5cd4ad525c77df8b1801b7bebdfed"],["/tags/递归/index.html","702c068727ac7082feafac81fa6e1835"],["/tags/链表/index.html","504607adaa583bccdfbea6189f933f99"],["/tags/队列/index.html","a2e51a25afc5e859ecf9f5e422ff9b6a"],["/tags/限制运算符号/index.html","c7997799f868ef45d8cc7290ad270979"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"www.wangqiang.cool"});




