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

var precacheConfig = [["/2020/07/14/关于Hexo博客系统的使用/index.html","e3e4e2f32fd7344737742452872d1bf6"],["/2020/07/18/Typora + PicGo + Github实现图床/index.html","dbdb8a5c013341d0fe335f9a556ced9e"],["/2020/08/01/剑指-Offer-68-II-二叉树的最近公共祖先/index.html","1b1c7c844105b5ca27955dd978df2cff"],["/2020/08/02/剑指-Offer-68-I-二叉搜索树的最近公共祖先/index.html","ba860f26505fb6568a1b13d235702fbb"],["/2020/08/03/剑指-Offer-66-构建乘积数组/index.html","81f630ae33c51c86f4f1e01fcca034e4"],["/2020/08/04/剑指-Offer-65-不用加减乘除做加法/index.html","cc7d6005042a8fc4ba00fe11e4b4e11e"],["/2020/08/05/剑指-Offer-64-求1-2-…-n/index.html","93a783fc8b19d870c3d261172fbf930a"],["/2020/08/06/剑指-Offer-63-股票的最大利润/index.html","db9f2856ea526fa3eee95cce0c07fb33"],["/2020/08/07/剑指-Offer-62-圆圈中最后剩下的数字/index.html","9ff8053a36309711542db2f1040e1543"],["/2020/08/08/剑指-Offer-61-扑克牌中的顺子/index.html","0fb29a8570aacf70a67ba864688a8e96"],["/2020/08/09/剑指-Offer-59-II-队列的最大值/index.html","80a3bfe3f205b4e695da2577c2d04eb0"],["/2020/08/10/剑指-Offer-59-I-滑动窗口的最大值/index.html","e5fc4ee016b6817bcdb66db5e7bae370"],["/2020/08/11/剑指-Offer-58-II-左旋转字符串/index.html","c1b951f35e2e1bcb576c101791bff249"],["/2020/08/12/剑指-Offer-58-I-翻转单词顺序/index.html","3ef0dc7bde8e88df885caab99247713a"],["/2020/08/13/剑指-Offer-57-II-和为s的连续正数序列/index.html","bb6faa63e6695946ac01932194aa1a6e"],["/2020/08/14/剑指-Offer-57-I-和为s的两个数字/index.html","438b63d676e4b5237e929cfba18b9a4d"],["/2020/08/15/剑指-Offer-56-I-数组中数字出现的次数/index.html","1a9f01111c39a6c2fc1966b3f0907e49"],["/2020/08/16/剑指-Offer-55-II-平衡二叉树/index.html","4bae648d95fa073409aab4a19a4b618c"],["/2020/08/17/剑指-Offer-55-I-二叉树的深度/index.html","e383015720609c1da6b51fab78b45d58"],["/2020/08/18/剑指-Offer-54-二叉搜索树的第k大节点/index.html","ca9854d5f0094d5dae9ea5744a59a7aa"],["/2020/08/19/剑指-Offer-53-II-0～n-1中缺失的数字/index.html","f2b210a44a08841d572a9727a4b1eb4b"],["/2020/08/20/剑指-Offer-53-I-在排序数组中查找数字-I/index.html","3fd61e6c2bcf95827e16284662dd04c8"],["/2020/08/21/剑指-Offer-52-两个链表的第一个公共节点/index.html","777fa68fb22b2f79416a5736d0ae9ed2"],["/2020/08/22/剑指-Offer-50-第一个只出现一次的字符/index.html","a613f2f6e6e66af249d1cb73275b040b"],["/2020/08/23/剑指-Offer-49-丑数/index.html","94cc09e7c0bdc2fc4e93690b1aacba0e"],["/2020/08/24/剑指-Offer-48-最长不含重复字符的子字符串/index.html","f196ba1b09af2c5041718d8ebbe79fbe"],["/2020/08/25/剑指-Offer-47-礼物的最大价值/index.html","14b5c6add3b050907c0ec903cebe494c"],["/2020/08/26/剑指-Offer-46-把数字翻译成字符串/index.html","130555ef0716a05192c70d7a6bb76032"],["/2020/08/27/剑指-Offer-45-把数组排成最小的数/index.html","ad18f32538a4fdc015a54ab1593d731c"],["/2020/08/28/剑指-Offer-44-数字序列中某一位的数字/index.html","a0d03ba592b2358de98d0b78444c3474"],["/2020/08/29/剑指-Offer-43-1～n整数中1出现的次数/index.html","16eb7f3f06dc7c800dddd6c662650e23"],["/2020/08/30/剑指-Offer-42-连续子数组的最大和/index.html","4d2652ff09a7d70dbfb56ed9a164a8bf"],["/2020/08/31/剑指-Offer-41-数据流中的中位数/index.html","f354fe886218bee5521fd53ef5763220"],["/2020/09/01/剑指-Offer-40-最小的k个数/index.html","70ddf6c9f455e6fe6bc69f5712a94168"],["/2020/09/02/剑指-Offer-39-数组中出现次数超过一半的数字/index.html","1bff34fbf436b335ded6cd03e7f23171"],["/2020/09/03/剑指-Offer-38-字符串的排列/index.html","8b796642cab791b00df7e3b75c481753"],["/2020/09/04/剑指-Offer-37-序列化二叉树/index.html","a0a6cf6a50fa4d77aaef6103cc83eb22"],["/2020/09/05/剑指-Offer-36-二叉搜索树与双向链表/index.html","e201934d20387e6670a17e69c27d4433"],["/2020/09/06/剑指-Offer-35-复杂链表的复制/index.html","f03957c227017e1f8cc52522bcf79050"],["/2020/09/07/剑指-Offer-34-二叉树中和为某一值的路径/index.html","43ee19afcacff81f62bf10ef3a13fbc0"],["/2020/09/08/剑指-Offer-30-包含min函数的栈/index.html","d0e9c1bfb840440a43325a19d0e978bc"],["/2020/09/08/剑指-Offer-31-栈的压入、弹出序列/index.html","1610a6a4c2f35630c9b3818f4c50e586"],["/2020/09/08/剑指-Offer-32-I-从上到下打印二叉树/index.html","2bc8abcf9fcb2df431da7baecff6b5c8"],["/2020/09/08/剑指-Offer-32-II-从上到下打印二叉树-II/index.html","425cf2af579871d21f590951ac377ab9"],["/2020/09/08/剑指-Offer-32-III-从上到下打印二叉树-III/index.html","38f82ea0c2ddcecfa3dba35a0c07ff14"],["/2020/09/08/剑指-Offer-33-二叉搜索树的后序遍历序列/index.html","4dc87110a35dd818f25f164d54d0fab2"],["/2020/11/30/Kafka如何做到支持百万级TPS？/index.html","3321d50d284b7cce8eeb8f60ce275583"],["/2020/12/04/Kafka消息中间件到底会不会丢消息/index.html","c2b59e3553b6e0bb4cb469900fdba218"],["/2020/12/06/在浏览器输入URL回车之后发生了什么/index.html","ca6c81d08f3bf7e09f356ac84b2eb264"],["/2020/12/06/静态代理+ JDK,CGLIB动态代理详解与实战/index.html","a6ad6385f77948ed85297b834ae75426"],["/2021/01/09/每日一题-实现LRU算法/index.html","8389e7eb812d2fd6c2ecbafb083675c9"],["/2021/01/14/每日一题-股票问题/index.html","5622bc3acb086e7efe8f95ceace01d0f"],["/about/index.html","11c88bb258426a603f1dcbb3be629eb6"],["/archives/2020/07/index.html","a67675a39ca8ffbf5d069c84d21527da"],["/archives/2020/08/index.html","99e0548233be4e3e7f9a84b426dc6484"],["/archives/2020/08/page/2/index.html","561512dde9cde556e64993429eb76260"],["/archives/2020/08/page/3/index.html","935fbc249c4fc2e412ec0092462c2f8b"],["/archives/2020/08/page/4/index.html","44a34659adda16ee98256e83e64367b4"],["/archives/2020/09/index.html","670656046233377003c0608cc769059c"],["/archives/2020/09/page/2/index.html","30534cf4532a7c3ce849565d5fefe694"],["/archives/2020/11/index.html","bdef577a341b5580e4dcad6922a89250"],["/archives/2020/12/index.html","dbff8655b86c402751fb6eb03d388fc6"],["/archives/2020/index.html","f3b95fb8c7c31cb7da1e0a5871917038"],["/archives/2020/page/2/index.html","b0e379f9d489abf75898be5b6a852737"],["/archives/2020/page/3/index.html","77a7d6550df0669e6cad1495e2d9cc03"],["/archives/2020/page/4/index.html","6ab289734f0f8597a75e77fb5f83239a"],["/archives/2020/page/5/index.html","0d87fbfebb122682ed2cefcc4bb0d380"],["/archives/2021/01/index.html","ed4ad1ed1d6911d0e98cc71c8670f0cb"],["/archives/2021/index.html","42d6835ef4a39af72a309a36dd6d4363"],["/archives/index.html","c36fa1661779ad11f0bdaba7b7e4cdf6"],["/archives/page/2/index.html","98e26310607bc661ae3cb3b3b1acc113"],["/archives/page/3/index.html","a601defa2a3036257f5d5b449c55e845"],["/archives/page/4/index.html","c26f01efcc95be5e4fffc4bab9646b12"],["/archives/page/5/index.html","3b18330fe1558264bd5ea518b90033ff"],["/archives/page/6/index.html","720166048a5386daa956a6dcb53a6aa3"],["/books/index.html","ee2898662410ac8d495987267a46ed88"],["/categories/Java基础/index.html","0280a2853db602ba2c8b7a0aed200ef1"],["/categories/index.html","7f7ec9eec5bab3872eec880c553c2291"],["/categories/中间件/index.html","ea48da50ba3b573533665145883f28e9"],["/categories/工具/index.html","6b39df83b863c3c5829d021a54a3c99a"],["/categories/数据结构与算法/index.html","3fde23f03b446c7ccbe4053b2cce5a13"],["/categories/数据结构与算法/page/2/index.html","68ef1b479d56787ad9ede906c825df48"],["/categories/数据结构与算法/page/3/index.html","0808c96077225525fcf10be9d24e2a99"],["/categories/数据结构与算法/page/4/index.html","69a303db4bb5e7163a1bdaa1b452a877"],["/categories/数据结构与算法/page/5/index.html","136872829f315001718101d1b085afbb"],["/categories/计算机网络/index.html","54b9cb8a36f7de2ac2de5634458bda95"],["/comment/index.html","2fe887cdbc7ae9aa4724e167925f0569"],["/css/index.css","1b987c9a7179ed4d7749845fb7bdee4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","32527ac06a21a24497dae1ff97fbee61"],["/img/favicon.png","d8a6f5ec6c689058761afc671a6fecec"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","63b46e3a51f9e0d8b33315d6972d1f50"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","c904082d672e2ea40ac9ca3be5a2476e"],["/movies/index.html","0f41a75271a5ad0949fe46c90e62d2d7"],["/music/index.html","b7e8f6ca26a411207743493aa2b45af7"],["/page/2/index.html","3b444c0e57de863417944a3569056b74"],["/page/3/index.html","e3db91c9ae9125e5fc42c7df877b33f9"],["/page/4/index.html","87871b0b9f211ada9ffef716c992e993"],["/page/5/index.html","bae291a111e0a443d5c42f4bbec811ed"],["/page/6/index.html","67b12cbf91e8f158e43546b67f108650"],["/tags/Http/index.html","237943fd3628032e5ac885219cd02216"],["/tags/Kafka/index.html","dd8453b4637a70af125be604f1191c29"],["/tags/index.html","244fac81ed347a5c3f0f698cb1e33af3"],["/tags/中序遍历/index.html","d900d8a83abae636cd11193e49cb3d37"],["/tags/二分查找/index.html","d9f748a93694e007aee05edd9c9ccbed"],["/tags/二叉搜索树/index.html","4cd2d6da309e70480d4ca908de0b585c"],["/tags/二叉树/index.html","57e67a3169cdd1f849291ee98dc3d6f4"],["/tags/代理模式/index.html","52fdfaf2cfd7bfeda1630f20b157a0af"],["/tags/位运算/index.html","711f8fa42920d591ef81e358df11c94d"],["/tags/分治法/index.html","3971da48c880964d42c33f4588a4f540"],["/tags/动态规划/index.html","b6a0eb3757ddf00a3573705ea5ade30a"],["/tags/单链表/index.html","e27c5465f1f2b0a0b5eca2a0ab7a4963"],["/tags/博客/index.html","6ca413482ec284d13da63ef84a2da481"],["/tags/双指针/index.html","d93e4b493bb03244918f46fe62d39e3f"],["/tags/双端队列/index.html","383c2df871898cd920cc18d828f92720"],["/tags/后序遍历/index.html","45901021f7797d9757e5d671d03b067a"],["/tags/哈希表/index.html","9d3bc34694846cba9752f6414283e566"],["/tags/回溯法/index.html","e6dd841cfc2a5703c1590a6d47555b46"],["/tags/图床/index.html","ff5788bcf458c6e88d2fbdc47be56664"],["/tags/大根堆/index.html","0b7d4fe488d769cb38e0b2e9dd762582"],["/tags/字符串/index.html","fb7ea41c1f8261c27479da45e33f985c"],["/tags/小根堆/index.html","25f95672e26f8a482e16dfc9d4fe5352"],["/tags/层序遍历/index.html","7c3998da3c5acc5a292e3fcdae9ce731"],["/tags/平衡二叉树/index.html","61717f59c03e23db4f5ef2b0f0a47579"],["/tags/广度优先搜索/index.html","b49fee845b8808126e0ab4ad6f4d7766"],["/tags/快速排序/index.html","24ba5c7652967e2829beeb57f73c38fc"],["/tags/排序/index.html","94fde00c30b7d72f9672c822ae60c019"],["/tags/数组/index.html","20b64f292c358b0bd8d86749d9a3e467"],["/tags/栈/index.html","5ab25c75acea3aea9fed9bbbd68a3b9d"],["/tags/消息中间件/index.html","c19e71169f3aa9e2b8f75dab0e1ecb4c"],["/tags/深度优先搜索/index.html","ed9422c5446e5582629ee6d4bb569c31"],["/tags/滑动窗口/index.html","2283769d44a0381ca84cb517b84bb3f9"],["/tags/约瑟夫环/index.html","1224daa32ec6578ed0fdba143e42bfae"],["/tags/规律/index.html","77c80b2d6a9ca60909c76bd030eae018"],["/tags/设计模式/index.html","7512b1bee1fdf9c3c71fc6314bb2655a"],["/tags/贪心算法/index.html","e1fada33629f56dc766ea93d8b82ebd7"],["/tags/迭代/index.html","15f81627fa012a8165d6b3a47ea96d50"],["/tags/递归/index.html","5d09f20e0985300675c677f182231298"],["/tags/链表/index.html","9fc2d30992122e6afe43075823dc833e"],["/tags/队列/index.html","db59e1caa0e8514bd2ad63901984df17"],["/tags/限制运算符号/index.html","313c679ee933ab30a8ad6ff72b449e02"]];
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




