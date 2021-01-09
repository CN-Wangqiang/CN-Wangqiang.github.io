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

var precacheConfig = [["/2020/07/14/关于Hexo博客系统的使用/index.html","fae845926b033e46bf9de2f6afe609e7"],["/2020/07/18/Typora + PicGo + Github实现图床/index.html","96307dc0474d63f3b2b5cc4fbee72fdb"],["/2020/08/01/剑指-Offer-68-II-二叉树的最近公共祖先/index.html","8d6c6048afdbb5684e739537483c61e6"],["/2020/08/02/剑指-Offer-68-I-二叉搜索树的最近公共祖先/index.html","68dab5e2a746cdade10fb199fc821a25"],["/2020/08/03/剑指-Offer-66-构建乘积数组/index.html","77d78c8de442921ffc8ac80817f92781"],["/2020/08/04/剑指-Offer-65-不用加减乘除做加法/index.html","ccb5a7d7ab38cd03fa9318704e8325cf"],["/2020/08/05/剑指-Offer-64-求1-2-…-n/index.html","27082f884b53e62783031c010c4b2375"],["/2020/08/06/剑指-Offer-63-股票的最大利润/index.html","b3c8d5c5ab0c70d853c74625e8fa1d26"],["/2020/08/07/剑指-Offer-62-圆圈中最后剩下的数字/index.html","a70939c9528172d5caa2553a946570fa"],["/2020/08/08/剑指-Offer-61-扑克牌中的顺子/index.html","a7206d61d1970bf65b981d39198cb290"],["/2020/08/09/剑指-Offer-59-II-队列的最大值/index.html","476d0293d49644f9bab9cbeb21c30c86"],["/2020/08/10/剑指-Offer-59-I-滑动窗口的最大值/index.html","19d5127012d90a861fcb8db06df604cc"],["/2020/08/11/剑指-Offer-58-II-左旋转字符串/index.html","20e2c49ad62bf1793dcc0a45a87f60ed"],["/2020/08/12/剑指-Offer-58-I-翻转单词顺序/index.html","cbfb61bbbccf4d6fca6ff3b2304b4fe3"],["/2020/08/13/剑指-Offer-57-II-和为s的连续正数序列/index.html","8320302394c0ab43430c21c714953b92"],["/2020/08/14/剑指-Offer-57-I-和为s的两个数字/index.html","b83ada3ceb677ebc3c02463d06a0e649"],["/2020/08/15/剑指-Offer-56-I-数组中数字出现的次数/index.html","041681fc835d0228d7b5cad8ee53aa79"],["/2020/08/16/剑指-Offer-55-II-平衡二叉树/index.html","30d66f3e9e610dfc7bfda6b38436915d"],["/2020/08/17/剑指-Offer-55-I-二叉树的深度/index.html","004b15fe6fa8c0cc96cc7bad31bfae9d"],["/2020/08/18/剑指-Offer-54-二叉搜索树的第k大节点/index.html","ea6cc05c34022817ef92866af5adf6ad"],["/2020/08/19/剑指-Offer-53-II-0～n-1中缺失的数字/index.html","b72fd396c8fdacc1bbf93d12c854bae8"],["/2020/08/20/剑指-Offer-53-I-在排序数组中查找数字-I/index.html","3a660fbb11871641ef85aac9f7fd795f"],["/2020/08/21/剑指-Offer-52-两个链表的第一个公共节点/index.html","029a64127eb7d308717801ac0accf92a"],["/2020/08/22/剑指-Offer-50-第一个只出现一次的字符/index.html","6b923b80e42e2e580aa66df313a05b83"],["/2020/08/23/剑指-Offer-49-丑数/index.html","70fcb9ae266c96f828dfcd1668260382"],["/2020/08/24/剑指-Offer-48-最长不含重复字符的子字符串/index.html","f7ed91b7575635c76af7fa7c86e58ecf"],["/2020/08/25/剑指-Offer-47-礼物的最大价值/index.html","352c0cb84dbe1fc993f224187dec5e47"],["/2020/08/26/剑指-Offer-46-把数字翻译成字符串/index.html","0da33b5cbb3099b39b30639fc1b14211"],["/2020/08/27/剑指-Offer-45-把数组排成最小的数/index.html","73b235829f7d367108154b8a4f34e48e"],["/2020/08/28/剑指-Offer-44-数字序列中某一位的数字/index.html","8eb3b04a6af2d4d44f9f1e618172e1c4"],["/2020/08/29/剑指-Offer-43-1～n整数中1出现的次数/index.html","bac20f04df4ee4fc0c8176e528a5f926"],["/2020/08/30/剑指-Offer-42-连续子数组的最大和/index.html","bef9c1b367de98b2a390cfb590f338fa"],["/2020/08/31/剑指-Offer-41-数据流中的中位数/index.html","f8a3fc300fa9d8f72f618c6e7a9c7f99"],["/2020/09/01/剑指-Offer-40-最小的k个数/index.html","1f8f842ba81c4bc0333d350165b7872e"],["/2020/09/02/剑指-Offer-39-数组中出现次数超过一半的数字/index.html","a42c67e7074581b32fbb7b7bb401e57c"],["/2020/09/03/剑指-Offer-38-字符串的排列/index.html","7117c559449222ff3f89c6a43be53111"],["/2020/09/04/剑指-Offer-37-序列化二叉树/index.html","fed80ae522417987eb96ea6dbdbf4037"],["/2020/09/05/剑指-Offer-36-二叉搜索树与双向链表/index.html","81e7f43079544a528243f5f5c882abc0"],["/2020/09/06/剑指-Offer-35-复杂链表的复制/index.html","bcfdbbc7764c93d5d20487d37e3edc01"],["/2020/09/07/剑指-Offer-34-二叉树中和为某一值的路径/index.html","2ae1cbe95a33a2be8551acf8bd3cecd5"],["/2020/09/08/剑指-Offer-30-包含min函数的栈/index.html","fc89d8f9bae37c5bb1680c2598fde853"],["/2020/09/08/剑指-Offer-31-栈的压入、弹出序列/index.html","3f0b98a2f60b3a8eec341b9b02967612"],["/2020/09/08/剑指-Offer-32-I-从上到下打印二叉树/index.html","d37c41aef7d28fbb70f657ea1b95c6e5"],["/2020/09/08/剑指-Offer-32-II-从上到下打印二叉树-II/index.html","f0893d3a3b770ef7c2619b531e9f1aba"],["/2020/09/08/剑指-Offer-32-III-从上到下打印二叉树-III/index.html","ca3e12bf4241bd5d28e43e515f6bd543"],["/2020/09/08/剑指-Offer-33-二叉搜索树的后序遍历序列/index.html","a659e8625a106b2b4c9d5c0b39cf17fc"],["/2020/11/30/Kafka如何做到支持百万级TPS？/index.html","504a2b88715a0d1ab991d95addf34d66"],["/2020/12/04/Kafka消息中间件到底会不会丢消息/index.html","ee381e84551af6d6de61d43574a73c83"],["/2020/12/06/在浏览器输入URL回车之后发生了什么/index.html","5b4513f598a849eb59372082fc4757ce"],["/2020/12/06/静态代理+ JDK,CGLIB动态代理详解与实战/index.html","d519e4666f70628cc0b7b5a436f014be"],["/2021/01/09/每日一题-实现LRU算法/index.html","1355588eaa20cc40a9fe0f0746a79357"],["/about/index.html","77ecf845f4f72b09d2c4eabd9c512136"],["/archives/2020/07/index.html","1dbd9ac39947f1fb36e4e553b816ecc4"],["/archives/2020/08/index.html","0b506d239f1f9a3c335d549fa36af67e"],["/archives/2020/08/page/2/index.html","51e164ce126d850a3e31abefdf17e616"],["/archives/2020/08/page/3/index.html","328d29cc60ccae7809a1d212c4b6aaba"],["/archives/2020/08/page/4/index.html","f3388e2635440f847635bf0c6c8c7e14"],["/archives/2020/09/index.html","47ee586261db87ab88d477bfdb6986dd"],["/archives/2020/09/page/2/index.html","073fd182473667e231d34c524735ab0c"],["/archives/2020/11/index.html","6f207d3ed2f4ebe6e83d31e53fa1e6ff"],["/archives/2020/12/index.html","52355889339eb365d1409d645b477af2"],["/archives/2020/index.html","d532259385d523b7ffa98009666ab628"],["/archives/2020/page/2/index.html","6c5d51353d95b8dd7f9585ecdc080335"],["/archives/2020/page/3/index.html","db85f64043f030646146598b62f590f0"],["/archives/2020/page/4/index.html","e58b52c8a717dc2bf4a702b6e2926d0d"],["/archives/2020/page/5/index.html","d6d03b4ffa6a98a73d96786415d9f86c"],["/archives/2021/01/index.html","b6455ea6895ebdb58b662e07df587a3b"],["/archives/2021/index.html","ea7dec514d4edeaf7213b1dad9fdc768"],["/archives/index.html","cf49e9d801cfef82761a214b8a9c93c1"],["/archives/page/2/index.html","03d4dda5533d041cffdcc548cb687fa1"],["/archives/page/3/index.html","d69c5372d7944d9a92029446ee1521bf"],["/archives/page/4/index.html","24487d28c021cc767a024ca7f072ff23"],["/archives/page/5/index.html","cdc8486a40e86b38a83251113eafb49e"],["/archives/page/6/index.html","b1a9ec36493c59bc456899bd3563dc06"],["/books/index.html","4faa2ebbd07e29a1db812e30a096955d"],["/categories/Java基础/index.html","7884a00e0d2d1b3b0fe8817709ed5874"],["/categories/index.html","b7eb33f11bc258b977c527c48e912409"],["/categories/中间件/index.html","8f5b59fdf849bea1f52135bf37ec5762"],["/categories/工具/index.html","c04d1696b25c2eb6fd64154ca8fb1856"],["/categories/数据结构与算法/index.html","75d143a950edc6463f28350dc0d09e12"],["/categories/数据结构与算法/page/2/index.html","bc1ea91209ac719a0c4f5decb8c5c2e0"],["/categories/数据结构与算法/page/3/index.html","ef0512c7473177bab07a62f3d308ce93"],["/categories/数据结构与算法/page/4/index.html","d47e6a3640de7696dcf2558d76e70055"],["/categories/数据结构与算法/page/5/index.html","2879ecfe9b8b3e8b6e08561839478463"],["/categories/计算机网络/index.html","7e1d95fcdac07009969f005a6328e0c4"],["/comment/index.html","8ce10d2bf550ef5fb8941eef26856995"],["/css/index.css","1b987c9a7179ed4d7749845fb7bdee4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","32527ac06a21a24497dae1ff97fbee61"],["/img/favicon.png","d8a6f5ec6c689058761afc671a6fecec"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","284ab77e87b3153c1c77540d7609c750"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","835280fc0a36f176563eca08051f251f"],["/movies/index.html","12bb4df0fc3204e387119a450eac8e8f"],["/music/index.html","28292ff4a0c84d112f61d9ff5f079bcf"],["/page/2/index.html","7fb7fe8a54aeb169776aa89cadaae816"],["/page/3/index.html","601f34dc5ea204d8765a203e4b4a0a62"],["/page/4/index.html","3d8ad786f42bac2d07d2d69c85d4c06c"],["/page/5/index.html","b40a43a9308c36d1b876e0f655abfef9"],["/page/6/index.html","31d95e0c36f00d204884d8e57595b28d"],["/tags/Http/index.html","604826fbb2831569208b23b46327f44e"],["/tags/Kafka/index.html","8733b49381f3be39d1269fdd8f87e850"],["/tags/index.html","8b4218e77e35d2582106035e94b27957"],["/tags/中序遍历/index.html","65079fb304a76dbb664f25b5f58e3f48"],["/tags/二分查找/index.html","9a8ba6d4f49abdbb9884d62d6fca5020"],["/tags/二叉搜索树/index.html","4e56f0c9f362db731028f5fa42b10935"],["/tags/二叉树/index.html","46cc650a5a0bb9b383ab952819b31928"],["/tags/代理模式/index.html","f7282b1777f6aef1e9af4d26950d4ce6"],["/tags/位运算/index.html","ecaa540128cd3787f4bfcb7d21b763a0"],["/tags/分治法/index.html","ed801acbec169916a84a486a8a0a7ab2"],["/tags/动态规划/index.html","86643ea537d759c92d9e5b71374bd838"],["/tags/单链表/index.html","45cfaab407c022a207d5e3b39ad5fa2d"],["/tags/博客/index.html","9c223154eaa5131c0f8f45b0f65561f0"],["/tags/双指针/index.html","059ffab6ff91b1bbaedfaea07c6b5030"],["/tags/双端队列/index.html","0751eba45aa48d46e66a568c70244238"],["/tags/后序遍历/index.html","517cf2c7acb570b647096116c4deefee"],["/tags/哈希表/index.html","1999f5802c50a1489cc0729ebbd36d05"],["/tags/回溯法/index.html","dbedac1689daeb96ccec290b8aa59fb9"],["/tags/图床/index.html","434eb885d7648f0cfebba3e9be5f050f"],["/tags/大根堆/index.html","d0a5ea9838a436832e6979ea1eb09bec"],["/tags/字符串/index.html","c466fa2c88628758ce44be41ff922fc1"],["/tags/小根堆/index.html","7fe32aac25dadb31e1e3d0faee6667d6"],["/tags/层序遍历/index.html","f343633156a77f5dceb1151d4fe8843b"],["/tags/平衡二叉树/index.html","2dc2db88d7fe2b1bc5ec7cbfedf40fe0"],["/tags/广度优先搜索/index.html","9973745cff2d985a112c3a5e94f3b2e0"],["/tags/快速排序/index.html","042b025419627c21ba5cd859b0a6c310"],["/tags/排序/index.html","0a088a0eaed5810bdda81b7113bb7eea"],["/tags/数组/index.html","a7b3c20366b0e85989320fe0a0ae0c8d"],["/tags/栈/index.html","438c5ed9113b3920938e9cdc89bd028b"],["/tags/消息中间件/index.html","0c18ffc1f72b19915f8ff7914bfc2364"],["/tags/深度优先搜索/index.html","fe2fe5a16b6fbb3183eed7f81393459b"],["/tags/滑动窗口/index.html","8aa17afa0aa7c47f12ff49bd021b5318"],["/tags/约瑟夫环/index.html","a7340e75cf9a60deec9224e2ab8907f7"],["/tags/规律/index.html","be35e17f5d018f89fa4ec158af168e0e"],["/tags/设计模式/index.html","a75c768077a840e1f0b0203ee1e024e7"],["/tags/迭代/index.html","6cc08c7ab6c9c6401d834ba213091d97"],["/tags/递归/index.html","748dbc1531e17a9f4a4be2816928de48"],["/tags/链表/index.html","3e0cc1512455e02ad2f6679e059bdf3d"],["/tags/队列/index.html","528342d5a349eeba2b1346b8f334e9d4"],["/tags/限制运算符号/index.html","5a758f6757b030aeea349d36f59a3166"]];
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




