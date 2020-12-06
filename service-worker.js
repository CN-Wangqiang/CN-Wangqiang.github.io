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

var precacheConfig = [["/2020/07/14/关于Hexo博客系统的使用/index.html","4e9e84dbff88a41fa6ecf8c27b2f6afa"],["/2020/07/18/Typora + PicGo + Github实现图床/index.html","d13625c91962026e0d835efba419c55f"],["/2020/08/01/剑指-Offer-68-II-二叉树的最近公共祖先/index.html","0ccf62da4502656b04a771d9584b99ea"],["/2020/08/02/剑指-Offer-68-I-二叉搜索树的最近公共祖先/index.html","9aa689f4db169603a4d61195d12ef553"],["/2020/08/03/剑指-Offer-66-构建乘积数组/index.html","3c3a3d6642ae47c4300b6c78f5fdec82"],["/2020/08/04/剑指-Offer-65-不用加减乘除做加法/index.html","bbe689bbc4cd72a52f5db27fe287711b"],["/2020/08/05/剑指-Offer-64-求1-2-…-n/index.html","783769795e65dff3233d87a62ac130f5"],["/2020/08/06/剑指-Offer-63-股票的最大利润/index.html","0d95bfa5944baf7b847d540138d455fd"],["/2020/08/07/剑指-Offer-62-圆圈中最后剩下的数字/index.html","1b58573fe624d50de2045c9b0d0e941c"],["/2020/08/08/剑指-Offer-61-扑克牌中的顺子/index.html","0884eb8bf091140e1a8273e46855f924"],["/2020/08/09/剑指-Offer-59-II-队列的最大值/index.html","97152e5ed0f9b4b214b27a02e9b320a1"],["/2020/08/10/剑指-Offer-59-I-滑动窗口的最大值/index.html","ba863bc9b0bea27f1487c4e34f2303fc"],["/2020/08/11/剑指-Offer-58-II-左旋转字符串/index.html","e9e6749872417f498317e2a57b853348"],["/2020/08/12/剑指-Offer-58-I-翻转单词顺序/index.html","afe85dc98a7c63182e1e7736c77e4830"],["/2020/08/13/剑指-Offer-57-II-和为s的连续正数序列/index.html","079906c695ddad29446749a0ba6af696"],["/2020/08/14/剑指-Offer-57-I-和为s的两个数字/index.html","0f055b6143ea203753e15a830cc1d7ea"],["/2020/08/15/剑指-Offer-56-I-数组中数字出现的次数/index.html","3eaf06e57838d350bb53f8c3db76aceb"],["/2020/08/16/剑指-Offer-55-II-平衡二叉树/index.html","71e31b7fef35b8cb81dbd2236140e3cb"],["/2020/08/17/剑指-Offer-55-I-二叉树的深度/index.html","16a98a72b25f3ebe9c93a06b8fbe2618"],["/2020/08/18/剑指-Offer-54-二叉搜索树的第k大节点/index.html","db832b81c222bb8a350499ec3a94a765"],["/2020/08/19/剑指-Offer-53-II-0～n-1中缺失的数字/index.html","8d0bd04be72ba720fc2b04f8d1186331"],["/2020/08/20/剑指-Offer-53-I-在排序数组中查找数字-I/index.html","bd6ce704ee7eac2570bb43818a01630b"],["/2020/08/21/剑指-Offer-52-两个链表的第一个公共节点/index.html","9ef6c0a2e168ab57a6a6f93b37fd3c1b"],["/2020/08/22/剑指-Offer-50-第一个只出现一次的字符/index.html","1849091eae49f4dda1e7babb55ec7a98"],["/2020/08/23/剑指-Offer-49-丑数/index.html","d4b99730e8bfec4752a47d84fede08ad"],["/2020/08/24/剑指-Offer-48-最长不含重复字符的子字符串/index.html","8cfb0fdcf2e94e334be0947f4b850722"],["/2020/08/25/剑指-Offer-47-礼物的最大价值/index.html","cd010759a1e72abe8be6dc298e7baba0"],["/2020/08/26/剑指-Offer-46-把数字翻译成字符串/index.html","38d76d85f743e01dfd33049c750767f4"],["/2020/08/27/剑指-Offer-45-把数组排成最小的数/index.html","7942891c32f67f0d5e29b37a332328dd"],["/2020/08/28/剑指-Offer-44-数字序列中某一位的数字/index.html","4ceee1cdaac02b43fa958367d3eca7d9"],["/2020/08/29/剑指-Offer-43-1～n整数中1出现的次数/index.html","2d8288cdb23ba781196b797bec0e5d4b"],["/2020/08/30/剑指-Offer-42-连续子数组的最大和/index.html","7e48b5ec0bd1a1b9e26b46a78a90f744"],["/2020/08/31/剑指-Offer-41-数据流中的中位数/index.html","c36d313d832c89de5517a6c9f75dd0cf"],["/2020/09/01/剑指-Offer-40-最小的k个数/index.html","f20c7dc09a45a6767982bc981780e2fd"],["/2020/09/02/剑指-Offer-39-数组中出现次数超过一半的数字/index.html","a0e1681b544d10e1d24d1252ff7ddef9"],["/2020/09/03/剑指-Offer-38-字符串的排列/index.html","aad66b5de3d5121321c2e545af74565e"],["/2020/09/04/剑指-Offer-37-序列化二叉树/index.html","0cc23989e8f083fdfd8e07830bac994d"],["/2020/09/05/剑指-Offer-36-二叉搜索树与双向链表/index.html","67a9780724a505bf032e7dde212a1ffd"],["/2020/09/06/剑指-Offer-35-复杂链表的复制/index.html","17b0e3a8b1d39b46a4126e423576d892"],["/2020/09/07/剑指-Offer-34-二叉树中和为某一值的路径/index.html","d54944878e48e3ef423a4d5025e99dd3"],["/2020/09/08/剑指-Offer-30-包含min函数的栈/index.html","1fd9cbd9e8f917567a10421324aa3dc1"],["/2020/09/08/剑指-Offer-31-栈的压入、弹出序列/index.html","3126da43bd9986a001d30eeb92928d59"],["/2020/09/08/剑指-Offer-32-I-从上到下打印二叉树/index.html","2dd045b38127b837080bbe90563f85c6"],["/2020/09/08/剑指-Offer-32-II-从上到下打印二叉树-II/index.html","337fda4345650c047cde49b3c73a8bcc"],["/2020/09/08/剑指-Offer-32-III-从上到下打印二叉树-III/index.html","f9d456e0ee9a764b7c5002f819aea55d"],["/2020/09/08/剑指-Offer-33-二叉搜索树的后序遍历序列/index.html","1543b9b9156d73684f2b9cb45bb20568"],["/2020/11/30/Kafka如何做到支持百万级TPS？/index.html","93e8dd752876a879df330956e530a1e1"],["/2020/12/04/Kafka消息中间件到底会不会丢消息/index.html","5819c896e25de6a48f2969ac8a97d2a5"],["/2020/12/06/在浏览器输入URL回车之后发生了什么/index.html","2a4a8b024e656511a292484051b7bd6f"],["/2020/12/06/静态代理+ JDK,CGLIB动态代理详解与实战/index.html","1c316ba7acd4497d8113742403d279df"],["/about/index.html","22d7f34dcfc83c66cfb0e3e2eab368ff"],["/archives/2020/07/index.html","279cb2f07062bcf1ccd66b9ae352315e"],["/archives/2020/08/index.html","63436e648bed8c7bb6134e307eb1b777"],["/archives/2020/08/page/2/index.html","8444f700cf5327ab96b52d2c30b2a152"],["/archives/2020/08/page/3/index.html","084a9d5ba574bf68e0a524f75c61bf40"],["/archives/2020/08/page/4/index.html","31a9737d448c5a9ec1eedf4ec2ce18f1"],["/archives/2020/09/index.html","c0b9d7ab3cb05a6ae01cdc70ea79d224"],["/archives/2020/09/page/2/index.html","41811b1e9442800fee8fbf6f3475883f"],["/archives/2020/11/index.html","aa47e71fdddfd43f655d2e39234dd4a3"],["/archives/2020/12/index.html","8bf28ea39d4f31a907d1af6cfbaa1ae9"],["/archives/2020/index.html","dd29d32c144ca84f217e1e222ce7757d"],["/archives/2020/page/2/index.html","293c25132c44ca9c9e561787cecead3b"],["/archives/2020/page/3/index.html","17f0956d34f9a1f866a7f6c52d18a0e2"],["/archives/2020/page/4/index.html","3ae1647a13a361534330da1fc9682613"],["/archives/2020/page/5/index.html","4f26c0c26c4a5aa4e6c3fc1f5540d029"],["/archives/index.html","fb6d09e3c5ab01357c295e14b2a17aa6"],["/archives/page/2/index.html","b7a24c5878dbb3976325e48435003962"],["/archives/page/3/index.html","f33d1b9957f5444b5168fea742fb2a3c"],["/archives/page/4/index.html","e0a83889fbee764dc4eb3e957f8baf18"],["/archives/page/5/index.html","c5d6f3346900d72d61daa7b246e196a6"],["/books/index.html","fdd5d5198d23fceb2dcee26be5550031"],["/categories/Java基础/index.html","bc5674fb4e12eed0afb861cf59edf2d9"],["/categories/index.html","0f3d1b026895d09541ba799bf54c5d58"],["/categories/中间件/index.html","76907bfd646e885eebddaf76cad798d7"],["/categories/工具/index.html","01fddf9a229915ead8548c800b315228"],["/categories/数据结构与算法/index.html","6a012887368edbbb1013b2dc21fbc6e3"],["/categories/数据结构与算法/page/2/index.html","61596a00a115e6d723861dfa5f0ce4d3"],["/categories/数据结构与算法/page/3/index.html","83543b64d06f4f4635cf92c9ac49992a"],["/categories/数据结构与算法/page/4/index.html","0e2f8436f1115abb5896b78bf6220fa0"],["/categories/数据结构与算法/page/5/index.html","4c5005b43cf53c34291b82262ba6dba9"],["/categories/计算机网络/index.html","247449f09400bd9e6a3d974034e068b2"],["/comment/index.html","606904b6c7881b05134e965a28f20563"],["/css/index.css","1b987c9a7179ed4d7749845fb7bdee4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","32527ac06a21a24497dae1ff97fbee61"],["/img/favicon.png","d8a6f5ec6c689058761afc671a6fecec"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","933a9dfa7f17c6b0ebaaac148a6f7a35"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","3415883a04bf1fc81a91820de7f1a877"],["/movies/index.html","b27d17517128e36e27a309be1a841841"],["/music/index.html","de91ee62e2a73867b97eff07258227a6"],["/page/2/index.html","5743d996b95b0b80952296a1fb0161c7"],["/page/3/index.html","a5ecb510520fd03de28f470bc3f9e2c1"],["/page/4/index.html","95acdb9c64dec02b90ad715369318282"],["/page/5/index.html","0a57e62ef056aed9315757d6e6269a5f"],["/tags/Http/index.html","852097992548dfb55b961eeabff246b7"],["/tags/Kafka/index.html","db64a042f9027054ce08b4e5c8982302"],["/tags/index.html","6bc1a2b4671601294d1e9e60db24f246"],["/tags/中序遍历/index.html","26aa325b9f1834a462118015f02cfc00"],["/tags/二分查找/index.html","8982127311b087e8eb9d702648fe1315"],["/tags/二叉搜索树/index.html","2b82477b51e1b8c51e00a171d7a397b9"],["/tags/二叉树/index.html","8e793fef03c2de5dee9d1cb52a2c23c6"],["/tags/代理模式/index.html","1609273a67c62c46e126fe0e7115a655"],["/tags/位运算/index.html","dd77cd2b3b5398f256059c1f1de64eb1"],["/tags/分治法/index.html","dfd9cc17fb7a85450e2a7bcca7295368"],["/tags/动态规划/index.html","cc3c8b8ab252e38eb9b6227fcc73ac6c"],["/tags/单链表/index.html","94a3a17681b29307d9d2bdcd54248d42"],["/tags/博客/index.html","6785b62e5ed1aa5389890075c6435172"],["/tags/双指针/index.html","c653751a37dc8fddec4358fce5011438"],["/tags/双端队列/index.html","3bc4cc8f5a78ce0c367bcd0d91b9788d"],["/tags/后序遍历/index.html","9f98d7d57a667de4117d1f502ad2d18f"],["/tags/哈希表/index.html","daad63790fa9f7790cfddca98b680a8f"],["/tags/回溯法/index.html","e73e2a3ec4ccf6044c16098c4a65d6c9"],["/tags/图床/index.html","1b6683ce72af59125d647b93ef7feb02"],["/tags/大根堆/index.html","b0cc5467b97d28a7614d579b4896c6a8"],["/tags/字符串/index.html","98ca84bb2725750d98d5a1ef14b2f34e"],["/tags/小根堆/index.html","dc5d7f3c11e9b3441b5b53dd80ce967f"],["/tags/层序遍历/index.html","8c95cac677ba258b66e98fb9ccbb32a0"],["/tags/平衡二叉树/index.html","906c2e1940feecc9fb821605b9c19060"],["/tags/广度优先搜索/index.html","bb595815c2236e716c5d1532e9f89598"],["/tags/快速排序/index.html","343021c25af9c79213ee693384d0b65b"],["/tags/排序/index.html","d3e92318060bc190815f0a2853ce41c5"],["/tags/数组/index.html","2c7845fa25b9d152111d10e7da22eb5b"],["/tags/栈/index.html","6132dcd8c38e28ba1ee2238a4bf2cf70"],["/tags/消息中间件/index.html","d47fd4de39c0f9787010a87c5dc6e3c9"],["/tags/深度优先搜索/index.html","895b74b719c7a086dbaa848ac45583ce"],["/tags/滑动窗口/index.html","68f88d991b43a664718a79368309d652"],["/tags/约瑟夫环/index.html","98a5ed73ceffcfec7b3dad54e0465732"],["/tags/规律/index.html","b5a09ba13a9f39168f8e21e8f0d72f9b"],["/tags/设计模式/index.html","b34c43efd09caa923e69e896e69bebe0"],["/tags/迭代/index.html","4b6c1fa4314499a61c75495e99abd6ac"],["/tags/递归/index.html","5bc86cb429259260b5933b7b07062072"],["/tags/链表/index.html","a3780de07872dc48e8c87e2eccb89e0b"],["/tags/队列/index.html","c3b941eabba92aebb3eccca168eea01a"],["/tags/限制运算符号/index.html","92a401309c6d1dc92e12337c36089eb9"]];
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




