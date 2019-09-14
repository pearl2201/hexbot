/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@mr.y/clusterfck/lib/clusterfck.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mr.y/clusterfck/lib/clusterfck.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\r\n   hcluster: __webpack_require__(/*! ./hcluster */ \"./node_modules/@mr.y/clusterfck/lib/hcluster.js\"),\r\n   Kmeans: __webpack_require__(/*! ./kmeans */ \"./node_modules/@mr.y/clusterfck/lib/kmeans.js\"),\r\n   kmeans: __webpack_require__(/*! ./kmeans */ \"./node_modules/@mr.y/clusterfck/lib/kmeans.js\").kmeans\r\n};\n\n//# sourceURL=webpack:///./node_modules/@mr.y/clusterfck/lib/clusterfck.js?");

/***/ }),

/***/ "./node_modules/@mr.y/clusterfck/lib/distance.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mr.y/clusterfck/lib/distance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n  euclidean: function(v1, v2) {\r\n      var total = 0;\r\n      for (var i = 0; i < v1.length; i++) {\r\n         total += Math.pow(v2[i] - v1[i], 2);      \r\n      }\r\n      return Math.sqrt(total);\r\n   },\r\n   manhattan: function(v1, v2) {\r\n     var total = 0;\r\n     for (var i = 0; i < v1.length ; i++) {\r\n        total += Math.abs(v2[i] - v1[i]);      \r\n     }\r\n     return total;\r\n   },\r\n   max: function(v1, v2) {\r\n     var max = 0;\r\n     for (var i = 0; i < v1.length; i++) {\r\n        max = Math.max(max , Math.abs(v2[i] - v1[i]));      \r\n     }\r\n     return max;\r\n   }\r\n};\n\n//# sourceURL=webpack:///./node_modules/@mr.y/clusterfck/lib/distance.js?");

/***/ }),

/***/ "./node_modules/@mr.y/clusterfck/lib/hcluster.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mr.y/clusterfck/lib/hcluster.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var distances = __webpack_require__(/*! ./distance */ \"./node_modules/@mr.y/clusterfck/lib/distance.js\");\r\n\r\nvar HierarchicalClustering = function(distance, linkage, threshold) {\r\n   this.distance = distance;\r\n   this.linkage = linkage;\r\n   this.threshold = threshold == undefined ? Infinity : threshold;\r\n}\r\n\r\nHierarchicalClustering.prototype = {\r\n   cluster : function(items, snapshotPeriod, snapshotCb) {\r\n      this.clusters = [];\r\n      this.dists = [];  // distances between each pair of clusters\r\n      this.mins = []; // closest cluster for each cluster\r\n      this.index = []; // keep a hash of all clusters by key\r\n      \r\n      for (var i = 0; i < items.length; i++) {\r\n         var cluster = {\r\n            value: items[i],\r\n            key: i,\r\n            index: i,\r\n            size: 1\r\n         };\r\n         this.clusters[i] = cluster;\r\n         this.index[i] = cluster;\r\n         this.dists[i] = [];\r\n         this.mins[i] = 0;\r\n      }\r\n\r\n      for (var i = 0; i < this.clusters.length; i++) {\r\n         for (var j = 0; j <= i; j++) {\r\n            var dist = (i == j) ? Infinity : \r\n               this.distance(this.clusters[i].value, this.clusters[j].value);\r\n            this.dists[i][j] = dist;\r\n            this.dists[j][i] = dist;\r\n\r\n            if (dist < this.dists[i][this.mins[i]]) {\r\n               this.mins[i] = j;               \r\n            }\r\n         }\r\n      }\r\n\r\n      var merged = this.mergeClosest();\r\n      var i = 0;\r\n      while (merged) {\r\n        if (snapshotCb && (i++ % snapshotPeriod) == 0) {\r\n           snapshotCb(this.clusters);           \r\n        }\r\n        merged = this.mergeClosest();\r\n      }\r\n    \r\n      this.clusters.forEach(function(cluster) {\r\n        // clean up metadata used for clustering\r\n        delete cluster.key;\r\n        delete cluster.index;\r\n      });\r\n\r\n      return this.clusters;\r\n   },\r\n  \r\n   mergeClosest: function() {\r\n      // find two closest clusters from cached mins\r\n      var minKey = 0, min = Infinity;\r\n      for (var i = 0; i < this.clusters.length; i++) {\r\n         var key = this.clusters[i].key,\r\n             dist = this.dists[key][this.mins[key]];\r\n         if (dist < min) {\r\n            minKey = key;\r\n            min = dist;\r\n         }\r\n      }\r\n      if (min >= this.threshold) {\r\n         return false;         \r\n      }\r\n\r\n      var c1 = this.index[minKey],\r\n          c2 = this.index[this.mins[minKey]];\r\n\r\n      // merge two closest clusters\r\n      var merged = {\r\n         left: c1,\r\n         right: c2,\r\n         key: c1.key,\r\n         size: c1.size + c2.size\r\n      };\r\n\r\n      this.clusters[c1.index] = merged;\r\n      this.clusters.splice(c2.index, 1);\r\n      this.index[c1.key] = merged;\r\n\r\n      // update distances with new merged cluster\r\n      for (var i = 0; i < this.clusters.length; i++) {\r\n         var ci = this.clusters[i];\r\n         var dist;\r\n         if (c1.key == ci.key) {\r\n            dist = Infinity;            \r\n         }\r\n         else if (this.linkage == \"single\") {\r\n            dist = this.dists[c1.key][ci.key];\r\n            if (this.dists[c1.key][ci.key] > this.dists[c2.key][ci.key]) {\r\n               dist = this.dists[c2.key][ci.key];\r\n            }\r\n         }\r\n         else if (this.linkage == \"complete\") {\r\n            dist = this.dists[c1.key][ci.key];\r\n            if (this.dists[c1.key][ci.key] < this.dists[c2.key][ci.key]) {\r\n               dist = this.dists[c2.key][ci.key];              \r\n            }\r\n         }\r\n         else if (this.linkage == \"average\") {\r\n            dist = (this.dists[c1.key][ci.key] * c1.size\r\n                   + this.dists[c2.key][ci.key] * c2.size) / (c1.size + c2.size);\r\n         }\r\n         else {\r\n            dist = this.distance(ci.value, c1.value);            \r\n         }\r\n\r\n         this.dists[c1.key][ci.key] = this.dists[ci.key][c1.key] = dist;\r\n      }\r\n\r\n    \r\n      // update cached mins\r\n      for (var i = 0; i < this.clusters.length; i++) {\r\n         var key1 = this.clusters[i].key;        \r\n         if (this.mins[key1] == c1.key || this.mins[key1] == c2.key) {\r\n            var min = key1;\r\n            for (var j = 0; j < this.clusters.length; j++) {\r\n               var key2 = this.clusters[j].key;\r\n               if (this.dists[key1][key2] < this.dists[key1][min]) {\r\n                  min = key2;                  \r\n               }\r\n            }\r\n            this.mins[key1] = min;\r\n         }\r\n         this.clusters[i].index = i;\r\n      }\r\n    \r\n      // clean up metadata used for clustering\r\n      delete c1.key; delete c2.key;\r\n      delete c1.index; delete c2.index;\r\n\r\n      return true;\r\n   }\r\n}\r\n\r\nvar hcluster = function(items, distance, linkage, threshold, snapshot, snapshotCallback) {\r\n   distance = distance || \"euclidean\";\r\n   linkage = linkage || \"average\";\r\n\r\n   if (typeof distance == \"string\") {\r\n     distance = distances[distance];\r\n   }\r\n   var clusters = (new HierarchicalClustering(distance, linkage, threshold))\r\n                  .cluster(items, snapshot, snapshotCallback);\r\n      \r\n   if (threshold === undefined) {\r\n      return clusters[0]; // all clustered into one\r\n   }\r\n   return clusters;\r\n}\r\n\r\nmodule.exports = hcluster;\r\n\n\n//# sourceURL=webpack:///./node_modules/@mr.y/clusterfck/lib/hcluster.js?");

/***/ }),

/***/ "./node_modules/@mr.y/clusterfck/lib/kmeans.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mr.y/clusterfck/lib/kmeans.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var distances = __webpack_require__(/*! ./distance */ \"./node_modules/@mr.y/clusterfck/lib/distance.js\");\r\n\r\nfunction KMeans(centroids) {\r\n   this.centroids = centroids || [];\r\n}\r\n\r\nKMeans.prototype.randomCentroids = function(points, k) {\r\n   var centroids = points.slice(0); // copy\r\n   centroids.sort(function() {\r\n      return (Math.round(Math.random()) - 0.5);\r\n   });\r\n   return centroids.slice(0, k);\r\n}\r\n\r\nKMeans.prototype.classify = function(point, distance) {\r\n   var min = Infinity,\r\n       index = 0;\r\n\r\n   distance = distance || \"euclidean\";\r\n   if (typeof distance == \"string\") {\r\n      distance = distances[distance];\r\n   }\r\n\r\n   for (var i = 0; i < this.centroids.length; i++) {\r\n      var dist = distance(point, this.centroids[i]);\r\n      if (dist < min) {\r\n         min = dist;\r\n         index = i;\r\n      }\r\n   }\r\n\r\n   return index;\r\n}\r\n\r\nKMeans.prototype.cluster = function(points, k, distance, snapshotPeriod, snapshotCb) {\r\n   k = k || Math.max(2, Math.ceil(Math.sqrt(points.length / 2)));\r\n\r\n   distance = distance || \"euclidean\";\r\n   if (typeof distance == \"string\") {\r\n      distance = distances[distance];\r\n   }\r\n\r\n   if (this.centroids.length < k) {\r\n        var diff = k - this.centroids.length;\r\n        this.centroids = this.centroids.concat(this.randomCentroids(points, diff));\r\n   }\r\n\r\n   this.centroids = this.randomCentroids(points, k);\r\n\r\n   var assignment = new Array(points.length);\r\n   var clusters = new Array(k);\r\n\r\n   var iterations = 0;\r\n   var movement = true;\r\n   while (movement) {\r\n      // update point-to-centroid assignments\r\n      for (var i = 0; i < points.length; i++) {\r\n         assignment[i] = this.classify(points[i], distance);\r\n      }\r\n\r\n      // update location of each centroid\r\n      movement = false;\r\n      for (var j = 0; j < k; j++) {\r\n         var assigned = [];\r\n         for (var i = 0; i < assignment.length; i++) {\r\n            if (assignment[i] == j) {\r\n               assigned.push(points[i]);\r\n            }\r\n         }\r\n\r\n         if (!assigned.length) {\r\n            continue;\r\n         }\r\n\r\n         var centroid = this.centroids[j];\r\n         var newCentroid = new Array(centroid.length);\r\n\r\n         for (var g = 0; g < centroid.length; g++) {\r\n            var sum = 0;\r\n            for (var i = 0; i < assigned.length; i++) {\r\n               sum += assigned[i][g];\r\n            }\r\n            newCentroid[g] = sum / assigned.length;\r\n\r\n            if (newCentroid[g] != centroid[g]) {\r\n               movement = true;\r\n            }\r\n         }\r\n\r\n         this.centroids[j] = newCentroid;\r\n         clusters[j] = assigned;\r\n      }\r\n\r\n      if (snapshotCb && (iterations++ % snapshotPeriod == 0)) {\r\n         snapshotCb(clusters);\r\n      }\r\n   }\r\n\r\n   return clusters;\r\n}\r\n\r\nKMeans.prototype.toJSON = function() {\r\n   return JSON.stringify(this.centroids);\r\n}\r\n\r\nKMeans.prototype.fromJSON = function(json) {\r\n   this.centroids = JSON.parse(json);\r\n   return this;\r\n}\r\n\r\nmodule.exports = KMeans;\r\n\r\nmodule.exports.kmeans = function(vectors, k) {\r\n   return (new KMeans()).cluster(vectors, k);\r\n}\n\n//# sourceURL=webpack:///./node_modules/@mr.y/clusterfck/lib/kmeans.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var clusterfck = __webpack_require__(/*! @mr.y/clusterfck */ \"./node_modules/@mr.y/clusterfck/lib/clusterfck.js\");\r\n\r\n\r\nfunction hexToRgb(hex) {\r\n\t\t  var result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);\r\n\t\t  return result ? {\r\n\t\t\tr: parseInt(result[1], 16),\r\n\t\t\tg: parseInt(result[2], 16),\r\n\t\t\tb: parseInt(result[3], 16)\r\n\t\t  } : null;\r\n\t\t}\r\n\r\n\r\n\t\tfunction readFileAsync(file) {\r\n\t\t  return new Promise((resolve, reject) => {\r\n\t\t\tlet reader = new FileReader();\r\n\r\n\t\t\treader.onload = () => {\r\n\t\t\t  resolve(reader.result);\r\n\t\t\t};\r\n\r\n\t\t\treader.onerror = reject;\r\n\r\n\t\t\treader.readAsDataURL(file);\r\n\t\t  })\r\n\t\t}\r\n\t\t\r\n\t\tfunction getColor(n) {\r\n\t\t  return new Promise((resolve, reject) => {\r\n\t\t\t  var url = \"http://api.noopschallenge.com/hexbot?count=\" + n;\r\n\t\t\t \r\n\t\t\t$.ajax({\r\n\t\t\t  type: \"GET\",\r\n\t\t\t  url:url,\r\n\t\t\t  success: (data,status,jqxhr) => {resolve(data)}\r\n\t\t\t});\r\n\t\t  })\r\n\t\t}\r\n\t\t\r\n\t\t$(\"#file\").change(async function(evt){\r\n\t\tvar files = evt.target.files;\r\n\t\t\tvar kmeans = new clusterfck.Kmeans();\r\n\t\t\tvar dataURL = await readFileAsync(files[0]);\r\n\t\t\t\r\n\t\t\t$(\"#color\").attr(\"src\",dataURL);\r\n\t\t\t\r\n\t\t\t\r\n\t\t\tlet loaded_image = await IJS.Image.load(dataURL);\r\n\t\t\tlet image = loaded_image.colorDepth(8);\r\n\t\t\t\r\n\t\t\tlet color_pixels = image.getPixelsArray();\r\n\t\t\tvar colod_mode = color_pixels[0].length;\r\n\t\t\t\r\n\t\t\t// Get colors\r\n\t\t\tlet color_count = parseInt($(\"#color_count\").val());\r\n\t\t\tlet color_text = await getColor(color_count);\r\n\t\t\tlet colors = [];\r\n\t\t\tfor (var  i = 0; i< color_text.colors.length; i++)\r\n\t\t\t{\r\n\t\t\t\tvar c = hexToRgb(color_text.colors[i].value);\r\n\t\t\t\tcolors.push([c.r,c.g,c.b]);\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t\r\n\t\t\tvar clusters = kmeans.cluster(color_pixels, color_count);\r\n\t\t\t\r\n\t\t\tvar indexes = [];\r\n\t\t\tif (colod_mode == 3)\r\n\t\t\t{\r\n\t\t\t\tfor (var idxPixel = 0; idxPixel < color_pixels.length; idxPixel++)\r\n\t\t\t\t{\r\n\t\t\t\t\tvar pixel = color_pixels[idxPixel];\r\n\t\t\t\t\tvar clusterIndex = kmeans.classify(pixel);\r\n\t\t\t\t\tindexes.push(clusterIndex);\r\n\t\t\t\t\t\r\n\t\t\t\t\timage.setPixel(idxPixel,colors[clusterIndex]);\r\n\t\t\t\t\t\r\n\t\t\t\t}\r\n\t\t\t}else\r\n\t\t\t{\r\n\t\t\t\tfor (var idxPixel = 0; idxPixel < color_pixels.length; idxPixel++)\r\n\t\t\t\t{\r\n\t\t\t\t\tvar pixel = color_pixels[idxPixel];\r\n\t\t\t\t\tvar clusterIndex = kmeans.classify(pixel);\r\n\t\t\t\t\tindexes.push(clusterIndex);\r\n\t\t\t\t\t\r\n\t\t\t\t\timage.setPixel(idxPixel,[colors[clusterIndex][0],colors[clusterIndex][1],colors[clusterIndex][2],pixel[3]]);\r\n\t\t\t\t\t\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t$(\"#result\").attr(\"src\", image.toDataURL());\r\n\t\t\t\r\n\t\t\t\r\n\t\t});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });