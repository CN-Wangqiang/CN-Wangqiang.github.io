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

var precacheConfig = [["/2020/07/14/关于Hexo博客系统的使用/index.html","3515f3e08e25745c8d317015fc0758c1"],["/2020/07/18/Typora + PicGo + Github实现图床/index.html","121a56807d1d90a709501dfafea17c0b"],["/2020/08/01/剑指-Offer-68-II-二叉树的最近公共祖先/index.html","36956d01761d77c20f2e8e02072355c7"],["/2020/08/02/剑指-Offer-68-I-二叉搜索树的最近公共祖先/index.html","61d8a3b052bbf28ac29c58f4a5999e54"],["/2020/08/03/剑指-Offer-66-构建乘积数组/index.html","355d8e0d0d742debc8397ddcc510cd07"],["/2020/08/04/剑指-Offer-65-不用加减乘除做加法/index.html","8cb6ef729159cb873e4f478b61d58527"],["/2020/08/05/剑指-Offer-64-求1-2-…-n/index.html","c0a5c5851e08bf3186a6fba38bdbd173"],["/2020/08/06/剑指-Offer-63-股票的最大利润/index.html","159a5d13e39bf08f23e1f346423b0bda"],["/2020/08/07/剑指-Offer-62-圆圈中最后剩下的数字/index.html","6d9c9042b18338945046a32ce063573c"],["/2020/08/08/剑指-Offer-61-扑克牌中的顺子/index.html","e5c6d8cd406d29c7e273181949a8b3c9"],["/2020/08/09/剑指-Offer-59-II-队列的最大值/index.html","7cf5c17cc848debfb8f0702438f408a3"],["/2020/08/10/剑指-Offer-59-I-滑动窗口的最大值/index.html","e3745e9577d120c93f3b7bfa43e4005e"],["/2020/08/11/剑指-Offer-58-II-左旋转字符串/index.html","e91cafddaa415fe600b408a84b15d025"],["/2020/08/12/剑指-Offer-58-I-翻转单词顺序/index.html","952e57401b9de8e2c05ec6b5e9203d06"],["/2020/08/13/剑指-Offer-57-II-和为s的连续正数序列/index.html","639e47be11b411d87a4c3b0d608ada26"],["/2020/08/14/剑指-Offer-57-I-和为s的两个数字/index.html","9e6c61b5f53634f394f08e5c5abfc410"],["/2020/08/15/剑指-Offer-56-I-数组中数字出现的次数/index.html","306fdfdb23061dfb8e9b745fdb29dec4"],["/2020/08/16/剑指-Offer-55-II-平衡二叉树/index.html","5e473c52466c654188f4c857bfdef427"],["/2020/08/17/剑指-Offer-55-I-二叉树的深度/index.html","f19be90001c3e4ba193abddb16a6d4c5"],["/2020/08/18/剑指-Offer-54-二叉搜索树的第k大节点/index.html","64dd94b809e5249919d2d9e8c6e40e14"],["/2020/08/19/剑指-Offer-53-II-0～n-1中缺失的数字/index.html","132f0c8a847a3167c1a1e1cd90207ade"],["/2020/08/20/剑指-Offer-53-I-在排序数组中查找数字-I/index.html","222095ad77ec094b258f26839b955628"],["/2020/08/21/剑指-Offer-52-两个链表的第一个公共节点/index.html","2923c2829eb45ec6757498c9093eac27"],["/2020/08/22/剑指-Offer-50-第一个只出现一次的字符/index.html","bbf39a62cf09fc5831354188524cfbfb"],["/2020/08/23/剑指-Offer-49-丑数/index.html","df0185057c33045dbdc385d03dc4e13c"],["/2020/08/24/剑指-Offer-48-最长不含重复字符的子字符串/index.html","da9a4c567ba0500ff8dce6c1486e7592"],["/2020/08/25/剑指-Offer-47-礼物的最大价值/index.html","de87fe526f95cc4893eae338ac8f22fc"],["/2020/08/26/剑指-Offer-46-把数字翻译成字符串/index.html","911b6b7ffd1c82f0e17d9f0c1502e8f4"],["/2020/08/27/剑指-Offer-45-把数组排成最小的数/index.html","4cf7506e35ba0e891c18853353cda124"],["/2020/08/28/剑指-Offer-44-数字序列中某一位的数字/index.html","c33c942c47238d77116b3b5b6fc6094b"],["/2020/08/29/剑指-Offer-43-1～n整数中1出现的次数/index.html","6a4bd3b791993c6a84747f70fe385bbe"],["/2020/08/30/剑指-Offer-42-连续子数组的最大和/index.html","1f0d3a8502406d85722a8616561ba120"],["/2020/08/31/剑指-Offer-41-数据流中的中位数/index.html","67bc761f1f01b69a9d4ec4efca1c8b9a"],["/2020/09/01/剑指-Offer-40-最小的k个数/index.html","48d2577c200ae017ff6ec9c423e6ffa0"],["/2020/09/02/剑指-Offer-39-数组中出现次数超过一半的数字/index.html","f4cfbd96b74609ad6c3fb4a61f96dad0"],["/2020/09/03/剑指-Offer-38-字符串的排列/index.html","be10c20b011b5eca68c81ae05aea5f91"],["/2020/09/04/剑指-Offer-37-序列化二叉树/index.html","0458e2e519352bac96ca128af805e67f"],["/2020/09/05/剑指-Offer-36-二叉搜索树与双向链表/index.html","65731b039b6efd15a9847e3a0ba783a8"],["/2020/09/06/剑指-Offer-35-复杂链表的复制/index.html","bdec76cda82feca70dedb85eed5764bd"],["/2020/09/07/剑指-Offer-34-二叉树中和为某一值的路径/index.html","7babe6506a13cdd8ee7075c081ec8de2"],["/2020/09/08/剑指-Offer-30-包含min函数的栈/index.html","96e2fa83e70d1cf2ef57cdd1de5bea34"],["/2020/09/08/剑指-Offer-31-栈的压入、弹出序列/index.html","6ca900429efd08726c8779a5ea8f8285"],["/2020/09/08/剑指-Offer-32-I-从上到下打印二叉树/index.html","fc0cc402529f04c89c24808a1b557e44"],["/2020/09/08/剑指-Offer-32-II-从上到下打印二叉树-II/index.html","d9bb2bc216b8bc14b77a673b92b1c5de"],["/2020/09/08/剑指-Offer-32-III-从上到下打印二叉树-III/index.html","50cdf8e8e9ff3b0a048eef191b9b7108"],["/2020/09/08/剑指-Offer-33-二叉搜索树的后序遍历序列/index.html","bfef80dc6a849d05ba1c3ca0474fb252"],["/2020/12/01/Kafka消息中间件到底会不会丢消息/index.html","1b7cc7eaf7272886b1377c8485451e46"],["/about/index.html","888db019ae4ae80b86e21b38ceffd4d1"],["/archives/2020/07/index.html","e6827baf72e5f2d0da8c438a372cbada"],["/archives/2020/08/index.html","f073d4d43513e85b1fcfc0b7a8944bbe"],["/archives/2020/08/page/2/index.html","4dd1bb8a64528f07fa0fdfb8cf5f0f58"],["/archives/2020/08/page/3/index.html","7d710dda1b2c694d2d79e1408ed4a0db"],["/archives/2020/08/page/4/index.html","c2f1b6eed39e19568bdb4384b279401b"],["/archives/2020/09/index.html","ca5cc0f1072fb70844c718415cb0226c"],["/archives/2020/09/page/2/index.html","d50037a0c2cd5f1af8d04baf02178387"],["/archives/2020/12/index.html","3cfe651f1d9c5975a6eb152fc2dc0b28"],["/archives/2020/index.html","6c48f33d28715cec36a50ac25e4620ee"],["/archives/2020/page/2/index.html","03cdc07518411af2756f47dce5c58f8f"],["/archives/2020/page/3/index.html","625323384849c9ef38cd88540ff5a327"],["/archives/2020/page/4/index.html","836ccf18208688e546f1e6fe96a878ca"],["/archives/2020/page/5/index.html","585f466473b55e8585706ad456536682"],["/archives/index.html","1366d6786eca3ab01c646ec2888a96c2"],["/archives/page/2/index.html","1c5a4b29fd26c53d22a2ed90ed04e8ad"],["/archives/page/3/index.html","c2f12f26b509d1b6842513c941d7caca"],["/archives/page/4/index.html","6652563373dd883a91f4c200772d0f87"],["/archives/page/5/index.html","8097756aa20521aad43f7aa93a0ea842"],["/books/index.html","bda91d212ba43f6795536aeedefb78bc"],["/categories/index.html","30974c5b724125a2032f6f65a57451ca"],["/categories/中间件/index.html","f2f6979ceb8f373ab2cb3c04956c08ac"],["/categories/工具/index.html","aa19e7eacc2a6d89b61be2bd911eed40"],["/categories/数据结构与算法/index.html","322e642c2a4bcdb8e713f52d15547d16"],["/categories/数据结构与算法/page/2/index.html","94d5f86cadb406538279548df7a47129"],["/categories/数据结构与算法/page/3/index.html","181ca3294e4bef93fd809932f1cf143f"],["/categories/数据结构与算法/page/4/index.html","a4ea26267b61173ba6c8d00f411cdb46"],["/categories/数据结构与算法/page/5/index.html","c0fc50c0ac7bbc9056cd4e5e98a8e312"],["/comment/index.html","380efe4c37974425ca867dfacaf14776"],["/css/index.css","1b987c9a7179ed4d7749845fb7bdee4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","32527ac06a21a24497dae1ff97fbee61"],["/img/favicon.png","d8a6f5ec6c689058761afc671a6fecec"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","afd084104bee715c1c69b69585b09091"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","37ad19b6f568cefe00a474e036e8709e"],["/movies/index.html","9d96afcb95ca264134d0bda786b4ebe9"],["/music/index.html","d58674fa50749c0424e9b279e8abec74"],["/page/2/index.html","84dc4e2a22d2a68786b96787ca2892c3"],["/page/3/index.html","e62d84231564c55a9a8767579e685860"],["/page/4/index.html","9b0351468bb9a007619da158fac1042d"],["/page/5/index.html","4d9d6505b0a16dd27df8837df51a50c1"],["/tags/Kafka/index.html","ccb45b8d5b3fbdf7791e82ee3388b0d3"],["/tags/index.html","e2946adf34b80f41ecd237773df2aa29"],["/tags/中序遍历/index.html","e17090e837098ecea6bcccc8ce09f1f8"],["/tags/二分查找/index.html","235db819df50fa6f50a751acbcdfcb72"],["/tags/二叉搜索树/index.html","2de537888d5a7451d1237d96b1620ee8"],["/tags/二叉树/index.html","388fdc76ed7f14b924250a86a315cfa3"],["/tags/位运算/index.html","fd2adee58e83af1a95b7fabf5501570d"],["/tags/分治法/index.html","034c788555e67cfdf483f0b21ac8980d"],["/tags/动态规划/index.html","2bcf726cf32a046aa2294fe87f4cf46c"],["/tags/单链表/index.html","1545ed715f34392473f44b1dca1014da"],["/tags/博客/index.html","b1b5bdbcda44762bc0aab42417f96eef"],["/tags/双指针/index.html","87c2a206a85a54dcbc3c8d567e8d4e86"],["/tags/双端队列/index.html","40d2e14b9081bd9fe1304c77700a4148"],["/tags/后序遍历/index.html","a6a435c25983c2359c85d30d44034b96"],["/tags/哈希表/index.html","c1a364d3c0cb1eebb3fa4bdacaa48a2f"],["/tags/回溯法/index.html","e07ba7356cf3564306e7b5d0f6be4c9b"],["/tags/图床/index.html","37bfa7f1b2a940d84f9350e6819be532"],["/tags/大根堆/index.html","25611ecb3a10d3379c7bb8ce6aac86f9"],["/tags/字符串/index.html","4f4811746e8fe2dfb6fb1902c9c6d638"],["/tags/小根堆/index.html","fb3ec4816153ecfd1ab27d9dd1d88d00"],["/tags/层序遍历/index.html","c8c0e07c2b6e9ae86efb23d022db16e0"],["/tags/平衡二叉树/index.html","af3dcf8b67d6525f8736a2bca985c95c"],["/tags/广度优先搜索/index.html","85b9ada194447c9bd9b45871e3cbbaf1"],["/tags/快速排序/index.html","3ee9a903e177c31d7bc6dec20a616fc8"],["/tags/排序/index.html","4b1b7ade521dd1ab827bec5344bdd6a1"],["/tags/数组/index.html","02ee9133f5f28b1a1b42578aadb3137e"],["/tags/栈/index.html","79f0ea286f4edf21df01f156b89cd7e4"],["/tags/消息中间件/index.html","e4c4d58b8ccd7727619256aaaed3d770"],["/tags/消息队列/index.html","77e4f9b04101c709847edf84d9545de2"],["/tags/深度优先搜索/index.html","df210b8d904e3748b3885c7fabcd7e56"],["/tags/滑动窗口/index.html","7a86356b4706ff26f44bfe59db165759"],["/tags/约瑟夫环/index.html","0b02ad0c702d626858b7173ceb41895a"],["/tags/规律/index.html","5d13da7bc38f3bb4ff2dfb8c66c6b3c2"],["/tags/迭代/index.html","76f0f589ceeb1b9f47655d3b7ad6dd46"],["/tags/递归/index.html","8b6ab6015691dd51185c5e17e3a1cd55"],["/tags/链表/index.html","db686a448a8d2e2167997b3e5b27b6d7"],["/tags/队列/index.html","4d4fe53eb7c73e9f8fec57c72062ca90"],["/tags/限制运算符号/index.html","0c99a6dd9d0c7d89b9af5db07e425582"]];
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




