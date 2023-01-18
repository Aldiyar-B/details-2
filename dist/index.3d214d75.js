// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"awEvQ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _intervalToDuration = require("date-fns/intervalToDuration");
var _intervalToDurationDefault = parcelHelpers.interopDefault(_intervalToDuration);
var _locale = require("date-fns/locale");
//import format from 'date-fns';
const UI_ELEMENTS = {
    input: document.querySelector(".date__input"),
    formDate: document.querySelector(".date__form"),
    resultDiv: document.querySelector(".result")
};
UI_ELEMENTS.formDate.addEventListener("submit", showResult);
//console.log(inputValue);
function realDateAndTime() {}
function showResult(e) {
    e.preventDefault();
    let date = new Date(UI_ELEMENTS.input.value); //получаем данные из инпута и неявно парсим в дату
    //в формате "Sun Jan 15 2023 02:00:00 GMT+0200 (Восточная Европа, стандартное время)"
    let distanceDateAndTime = calcResult(date);
    UI_ELEMENTS.resultDiv.textContent = `Years: ${distanceDateAndTime.years}, 
                                        Months: ${distanceDateAndTime.months}, 
                                        Days: ${distanceDateAndTime.days}, 
                                        Hours: ${distanceDateAndTime.hours}, 
                                        Minutes: ${distanceDateAndTime.minutes}, 
                                        Seconds: ${distanceDateAndTime.seconds}`;
}
function calcResult(date) {
    let result;
    console.log(date);
    if (date === new Date()) return result = "This date is today";
    else {
        //const choosenDate = date;  
        /*
        const year = choosenDate.getFullYear(); //получаем год из строки даты
        const month = choosenDate.getMonth();  //получаем месяц из строки даты
        const day = choosenDate.getDate();  //получаем день из строки даты
        console.log(`${day}-${month}-${year}`);

        //const formateDate = format(new Date(year, day, month), 'MM/dd/yyyy');
        //console.log(formateDate);
        */ const distanceForDate = (0, _intervalToDurationDefault.default)({
            start: new Date(),
            end: new Date(date)
        });
        result = distanceForDate;
    }
    return result;
}
function showMessage(obj) {
    console.log(obj);
} //добавить локал сторедж или куки и сделать таймер

},{"date-fns/intervalToDuration":"5hNtu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","date-fns/locale":"lASMG"}],"5hNtu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../compareAsc/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../add/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../differenceInDays/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../differenceInHours/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../differenceInMinutes/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../differenceInMonths/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../differenceInSeconds/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("../differenceInYears/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("../toDate/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault9 = parcelHelpers.interopDefault(_indexJs9);
function intervalToDuration(interval) {
    (0, _indexJsDefault9.default)(1, arguments);
    var start = (0, _indexJsDefault8.default)(interval.start);
    var end = (0, _indexJsDefault8.default)(interval.end);
    if (isNaN(start.getTime())) throw new RangeError("Start Date is invalid");
    if (isNaN(end.getTime())) throw new RangeError("End Date is invalid");
    var duration = {};
    duration.years = Math.abs((0, _indexJsDefault7.default)(end, start));
    var sign = (0, _indexJsDefault.default)(end, start);
    var remainingMonths = (0, _indexJsDefault1.default)(start, {
        years: sign * duration.years
    });
    duration.months = Math.abs((0, _indexJsDefault5.default)(end, remainingMonths));
    var remainingDays = (0, _indexJsDefault1.default)(remainingMonths, {
        months: sign * duration.months
    });
    duration.days = Math.abs((0, _indexJsDefault2.default)(end, remainingDays));
    var remainingHours = (0, _indexJsDefault1.default)(remainingDays, {
        days: sign * duration.days
    });
    duration.hours = Math.abs((0, _indexJsDefault3.default)(end, remainingHours));
    var remainingMinutes = (0, _indexJsDefault1.default)(remainingHours, {
        hours: sign * duration.hours
    });
    duration.minutes = Math.abs((0, _indexJsDefault4.default)(end, remainingMinutes));
    var remainingSeconds = (0, _indexJsDefault1.default)(remainingMinutes, {
        minutes: sign * duration.minutes
    });
    duration.seconds = Math.abs((0, _indexJsDefault6.default)(end, remainingSeconds));
    return duration;
}
exports.default = intervalToDuration;

},{"../compareAsc/index.js":"h01l4","../add/index.js":"h7zb2","../differenceInDays/index.js":"1mpAo","../differenceInHours/index.js":"9Vac7","../differenceInMinutes/index.js":"4Qv17","../differenceInMonths/index.js":"8lj6Z","../differenceInSeconds/index.js":"5uZgU","../differenceInYears/index.js":"2tncr","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h01l4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function compareAsc(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    var diff = dateLeft.getTime() - dateRight.getTime();
    if (diff < 0) return -1;
    else if (diff > 0) return 1; // Return 0 if diff is 0; return NaN if diff is NaN
    else return diff;
}
exports.default = compareAsc;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fsust":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function toDate(argument) {
    (0, _indexJsDefault.default)(1, arguments);
    var argStr = Object.prototype.toString.call(argument); // Clone the date
    if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
    else if (typeof argument === "number" || argStr === "[object Number]") return new Date(argument);
    else {
        if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
            // eslint-disable-next-line no-console
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console
            console.warn(new Error().stack);
        }
        return new Date(NaN);
    }
}
exports.default = toDate;

},{"../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wUgQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function requiredArgs(required, args) {
    if (args.length < required) throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
}
exports.default = requiredArgs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"h7zb2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/toInteger/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function add(dirtyDate, duration) {
    (0, _indexJsDefault3.default)(2, arguments);
    if (!duration || _typeof(duration) !== "object") return new Date(NaN);
    var years = duration.years ? (0, _indexJsDefault4.default)(duration.years) : 0;
    var months = duration.months ? (0, _indexJsDefault4.default)(duration.months) : 0;
    var weeks = duration.weeks ? (0, _indexJsDefault4.default)(duration.weeks) : 0;
    var days = duration.days ? (0, _indexJsDefault4.default)(duration.days) : 0;
    var hours = duration.hours ? (0, _indexJsDefault4.default)(duration.hours) : 0;
    var minutes = duration.minutes ? (0, _indexJsDefault4.default)(duration.minutes) : 0;
    var seconds = duration.seconds ? (0, _indexJsDefault4.default)(duration.seconds) : 0; // Add years and months
    var date = (0, _indexJsDefault2.default)(dirtyDate);
    var dateWithMonths = months || years ? (0, _indexJsDefault1.default)(date, months + years * 12) : date; // Add weeks and days
    var dateWithDays = days || weeks ? (0, _indexJsDefault.default)(dateWithMonths, days + weeks * 7) : dateWithMonths; // Add days, hours, minutes and seconds
    var minutesToAdd = minutes + hours * 60;
    var secondsToAdd = seconds + minutesToAdd * 60;
    var msToAdd = secondsToAdd * 1000;
    var finalDate = new Date(dateWithDays.getTime() + msToAdd);
    return finalDate;
}
exports.default = add;

},{"../addDays/index.js":"g6fAH","../addMonths/index.js":"hES3W","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6fAH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addDays(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    if (isNaN(amount)) return new Date(NaN);
    if (!amount) // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
    date.setDate(date.getDate() + amount);
    return date;
}
exports.default = addDays;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f7kKX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) return NaN;
    var number = Number(dirtyNumber);
    if (isNaN(number)) return number;
    return number < 0 ? Math.ceil(number) : Math.floor(number);
}
exports.default = toInteger;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hES3W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addMonths(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    if (isNaN(amount)) return new Date(NaN);
    if (!amount) // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
    var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
    // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
    // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
    // want except that dates will wrap around the end of a month, meaning that
    // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
    // we'll default to the end of the desired month by adding 1 to the desired
    // month and using a date of 0 to back up one day to the end of the desired
    // month.
    var endOfDesiredMonth = new Date(date.getTime());
    endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
    var daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
    else {
        // Otherwise, we now know that setting the original day-of-month value won't
        // cause an overflow, so set the desired day-of-month. Note that we can't
        // just set the date of `endOfDesiredMonth` because that object may have had
        // its time changed in the unusual case where where a DST transition was on
        // the last day of the month and its local time was in the hour skipped or
        // repeated next to a DST transition.  So we use `date` instead which is
        // guaranteed to still have the original time.
        date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
        return date;
    }
}
exports.default = addMonths;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mpAo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../differenceInCalendarDays/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js"); // Like `compareAsc` but uses local time not UTC, which is needed
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(dateLeft, dateRight) {
    var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();
    if (diff < 0) return -1;
    else if (diff > 0) return 1; // Return 0 if diff is 0; return NaN if diff is NaN
    else return diff;
}
function differenceInDays(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault2.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    var sign = compareLocalAsc(dateLeft, dateRight);
    var difference = Math.abs((0, _indexJsDefault1.default)(dateLeft, dateRight));
    dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);
    var result = sign * (difference - isLastDayNotFull); // Prevent negative zero
    return result === 0 ? 0 : result;
}
exports.default = differenceInDays;

},{"../toDate/index.js":"fsust","../differenceInCalendarDays/index.js":"adZXy","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adZXy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var MILLISECONDS_IN_DAY = 86400000;
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault2.default)(2, arguments);
    var startOfDayLeft = (0, _indexJsDefault1.default)(dirtyDateLeft);
    var startOfDayRight = (0, _indexJsDefault1.default)(dirtyDateRight);
    var timestampLeft = startOfDayLeft.getTime() - (0, _indexJsDefault.default)(startOfDayLeft);
    var timestampRight = startOfDayRight.getTime() - (0, _indexJsDefault.default)(startOfDayRight); // Round the number of days to the nearest integer
    // because the number of milliseconds in a day is not constant
    // (e.g. it's different in the day of the daylight saving time clock shift)
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}
exports.default = differenceInCalendarDays;

},{"../_lib/getTimezoneOffsetInMilliseconds/index.js":"bc74C","../startOfDay/index.js":"4Tvs3","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bc74C":[function(require,module,exports) {
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
}
exports.default = getTimezoneOffsetInMilliseconds;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Tvs3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfDay(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfDay;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Vac7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../constants/index.js");
var _indexJs1 = require("../differenceInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/roundingMethods/index.js");
function differenceInHours(dateLeft, dateRight, options) {
    (0, _indexJsDefault1.default)(2, arguments);
    var diff = (0, _indexJsDefault.default)(dateLeft, dateRight) / (0, _indexJs.millisecondsInHour);
    return (0, _indexJs3.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
exports.default = differenceInHours;

},{"../constants/index.js":"iOhcx","../differenceInMilliseconds/index.js":"Eb6qZ","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/roundingMethods/index.js":"ilPgA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iOhcx":[function(require,module,exports) {
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "daysInWeek", ()=>daysInWeek);
parcelHelpers.export(exports, "daysInYear", ()=>daysInYear);
parcelHelpers.export(exports, "maxTime", ()=>maxTime);
parcelHelpers.export(exports, "millisecondsInMinute", ()=>millisecondsInMinute);
parcelHelpers.export(exports, "millisecondsInHour", ()=>millisecondsInHour);
parcelHelpers.export(exports, "millisecondsInSecond", ()=>millisecondsInSecond);
parcelHelpers.export(exports, "minTime", ()=>minTime);
parcelHelpers.export(exports, "minutesInHour", ()=>minutesInHour);
parcelHelpers.export(exports, "monthsInQuarter", ()=>monthsInQuarter);
parcelHelpers.export(exports, "monthsInYear", ()=>monthsInYear);
parcelHelpers.export(exports, "quartersInYear", ()=>quartersInYear);
parcelHelpers.export(exports, "secondsInHour", ()=>secondsInHour);
parcelHelpers.export(exports, "secondsInMinute", ()=>secondsInMinute);
parcelHelpers.export(exports, "secondsInDay", ()=>secondsInDay);
parcelHelpers.export(exports, "secondsInWeek", ()=>secondsInWeek);
parcelHelpers.export(exports, "secondsInYear", ()=>secondsInYear);
parcelHelpers.export(exports, "secondsInMonth", ()=>secondsInMonth);
parcelHelpers.export(exports, "secondsInQuarter", ()=>secondsInQuarter);
var daysInWeek = 7;
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 86400000;
var millisecondsInMinute = 60000;
var millisecondsInHour = 3600000;
var millisecondsInSecond = 1000;
var minTime = -maxTime;
var minutesInHour = 60;
var monthsInQuarter = 3;
var monthsInYear = 12;
var quartersInYear = 4;
var secondsInHour = 3600;
var secondsInMinute = 60;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Eb6qZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function differenceInMilliseconds(dateLeft, dateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    return (0, _indexJsDefault.default)(dateLeft).getTime() - (0, _indexJsDefault.default)(dateRight).getTime();
}
exports.default = differenceInMilliseconds;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ilPgA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRoundingMethod", ()=>getRoundingMethod);
var roundingMap = {
    ceil: Math.ceil,
    round: Math.round,
    floor: Math.floor,
    trunc: function trunc(value) {
        return value < 0 ? Math.ceil(value) : Math.floor(value);
    } // Math.trunc is not supported by IE
};
var defaultRoundingMethod = "trunc";
function getRoundingMethod(method) {
    return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Qv17":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../constants/index.js");
var _indexJs1 = require("../differenceInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/roundingMethods/index.js");
function differenceInMinutes(dateLeft, dateRight, options) {
    (0, _indexJsDefault1.default)(2, arguments);
    var diff = (0, _indexJsDefault.default)(dateLeft, dateRight) / (0, _indexJs.millisecondsInMinute);
    return (0, _indexJs3.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
exports.default = differenceInMinutes;

},{"../constants/index.js":"iOhcx","../differenceInMilliseconds/index.js":"Eb6qZ","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/roundingMethods/index.js":"ilPgA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8lj6Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../differenceInCalendarMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../compareAsc/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../isLastDayOfMonth/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault3.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    var sign = (0, _indexJsDefault2.default)(dateLeft, dateRight);
    var difference = Math.abs((0, _indexJsDefault1.default)(dateLeft, dateRight));
    var result; // Check for the difference of less than month
    if (difference < 1) result = 0;
    else {
        if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) // This will check if the date is end of Feb and assign a higher end of month date
        // to compare it with Jan
        dateLeft.setDate(30);
        dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
        // If so, result must be decreased by 1 in absolute value
        var isLastMonthNotFull = (0, _indexJsDefault2.default)(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month
        if ((0, _indexJsDefault4.default)((0, _indexJsDefault.default)(dirtyDateLeft)) && difference === 1 && (0, _indexJsDefault2.default)(dirtyDateLeft, dateRight) === 1) isLastMonthNotFull = false;
        result = sign * (difference - Number(isLastMonthNotFull));
    } // Prevent negative zero
    return result === 0 ? 0 : result;
}
exports.default = differenceInMonths;

},{"../toDate/index.js":"fsust","../differenceInCalendarMonths/index.js":"8oypH","../compareAsc/index.js":"h01l4","../_lib/requiredArgs/index.js":"9wUgQ","../isLastDayOfMonth/index.js":"1as6x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8oypH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
    var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
    return yearDiff * 12 + monthDiff;
}
exports.default = differenceInCalendarMonths;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1as6x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../endOfDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../endOfMonth/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function isLastDayOfMonth(dirtyDate) {
    (0, _indexJsDefault3.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    return (0, _indexJsDefault1.default)(date).getTime() === (0, _indexJsDefault2.default)(date).getTime();
}
exports.default = isLastDayOfMonth;

},{"../toDate/index.js":"fsust","../endOfDay/index.js":"kLkh7","../endOfMonth/index.js":"4tHlS","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kLkh7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfDay(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setHours(23, 59, 59, 999);
    return date;
}
exports.default = endOfDay;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4tHlS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfMonth(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var month = date.getMonth();
    date.setFullYear(date.getFullYear(), month + 1, 0);
    date.setHours(23, 59, 59, 999);
    return date;
}
exports.default = endOfMonth;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5uZgU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../differenceInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/roundingMethods/index.js");
function differenceInSeconds(dateLeft, dateRight, options) {
    (0, _indexJsDefault1.default)(2, arguments);
    var diff = (0, _indexJsDefault.default)(dateLeft, dateRight) / 1000;
    return (0, _indexJs2.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
exports.default = differenceInSeconds;

},{"../differenceInMilliseconds/index.js":"Eb6qZ","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/roundingMethods/index.js":"ilPgA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2tncr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../differenceInCalendarYears/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../compareAsc/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function differenceInYears(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault3.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    var sign = (0, _indexJsDefault2.default)(dateLeft, dateRight);
    var difference = Math.abs((0, _indexJsDefault1.default)(dateLeft, dateRight)); // Set both dates to a valid leap year for accurate comparison when dealing
    // with leap days
    dateLeft.setFullYear(1584);
    dateRight.setFullYear(1584); // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastYearNotFull = (0, _indexJsDefault2.default)(dateLeft, dateRight) === -sign;
    var result = sign * (difference - Number(isLastYearNotFull)); // Prevent negative zero
    return result === 0 ? 0 : result;
}
exports.default = differenceInYears;

},{"../toDate/index.js":"fsust","../differenceInCalendarYears/index.js":"f4WIY","../compareAsc/index.js":"h01l4","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4WIY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    return dateLeft.getFullYear() - dateRight.getFullYear();
}
exports.default = differenceInCalendarYears;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lASMG":[function(require,module,exports) {
// This file is generated automatically by `scripts/build/indices.ts`. Please, don't change it.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "af", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "ar", ()=>(0, _indexJsDefault1.default));
parcelHelpers.export(exports, "arDZ", ()=>(0, _indexJsDefault2.default));
parcelHelpers.export(exports, "arEG", ()=>(0, _indexJsDefault3.default));
parcelHelpers.export(exports, "arMA", ()=>(0, _indexJsDefault4.default));
parcelHelpers.export(exports, "arSA", ()=>(0, _indexJsDefault5.default));
parcelHelpers.export(exports, "arTN", ()=>(0, _indexJsDefault6.default));
parcelHelpers.export(exports, "az", ()=>(0, _indexJsDefault7.default));
parcelHelpers.export(exports, "be", ()=>(0, _indexJsDefault8.default));
parcelHelpers.export(exports, "beTarask", ()=>(0, _indexJsDefault9.default));
parcelHelpers.export(exports, "bg", ()=>(0, _indexJsDefault10.default));
parcelHelpers.export(exports, "bn", ()=>(0, _indexJsDefault11.default));
parcelHelpers.export(exports, "bs", ()=>(0, _indexJsDefault12.default));
parcelHelpers.export(exports, "ca", ()=>(0, _indexJsDefault13.default));
parcelHelpers.export(exports, "cs", ()=>(0, _indexJsDefault14.default));
parcelHelpers.export(exports, "cy", ()=>(0, _indexJsDefault15.default));
parcelHelpers.export(exports, "da", ()=>(0, _indexJsDefault16.default));
parcelHelpers.export(exports, "de", ()=>(0, _indexJsDefault17.default));
parcelHelpers.export(exports, "deAT", ()=>(0, _indexJsDefault18.default));
parcelHelpers.export(exports, "el", ()=>(0, _indexJsDefault19.default));
parcelHelpers.export(exports, "enAU", ()=>(0, _indexJsDefault20.default));
parcelHelpers.export(exports, "enCA", ()=>(0, _indexJsDefault21.default));
parcelHelpers.export(exports, "enGB", ()=>(0, _indexJsDefault22.default));
parcelHelpers.export(exports, "enIE", ()=>(0, _indexJsDefault23.default));
parcelHelpers.export(exports, "enIN", ()=>(0, _indexJsDefault24.default));
parcelHelpers.export(exports, "enNZ", ()=>(0, _indexJsDefault25.default));
parcelHelpers.export(exports, "enUS", ()=>(0, _indexJsDefault26.default));
parcelHelpers.export(exports, "enZA", ()=>(0, _indexJsDefault27.default));
parcelHelpers.export(exports, "eo", ()=>(0, _indexJsDefault28.default));
parcelHelpers.export(exports, "es", ()=>(0, _indexJsDefault29.default));
parcelHelpers.export(exports, "et", ()=>(0, _indexJsDefault30.default));
parcelHelpers.export(exports, "eu", ()=>(0, _indexJsDefault31.default));
parcelHelpers.export(exports, "faIR", ()=>(0, _indexJsDefault32.default));
parcelHelpers.export(exports, "fi", ()=>(0, _indexJsDefault33.default));
parcelHelpers.export(exports, "fr", ()=>(0, _indexJsDefault34.default));
parcelHelpers.export(exports, "frCA", ()=>(0, _indexJsDefault35.default));
parcelHelpers.export(exports, "frCH", ()=>(0, _indexJsDefault36.default));
parcelHelpers.export(exports, "fy", ()=>(0, _indexJsDefault37.default));
parcelHelpers.export(exports, "gd", ()=>(0, _indexJsDefault38.default));
parcelHelpers.export(exports, "gl", ()=>(0, _indexJsDefault39.default));
parcelHelpers.export(exports, "gu", ()=>(0, _indexJsDefault40.default));
parcelHelpers.export(exports, "he", ()=>(0, _indexJsDefault41.default));
parcelHelpers.export(exports, "hi", ()=>(0, _indexJsDefault42.default));
parcelHelpers.export(exports, "hr", ()=>(0, _indexJsDefault43.default));
parcelHelpers.export(exports, "ht", ()=>(0, _indexJsDefault44.default));
parcelHelpers.export(exports, "hu", ()=>(0, _indexJsDefault45.default));
parcelHelpers.export(exports, "hy", ()=>(0, _indexJsDefault46.default));
parcelHelpers.export(exports, "id", ()=>(0, _indexJsDefault47.default));
parcelHelpers.export(exports, "is", ()=>(0, _indexJsDefault48.default));
parcelHelpers.export(exports, "it", ()=>(0, _indexJsDefault49.default));
parcelHelpers.export(exports, "itCH", ()=>(0, _indexJsDefault50.default));
parcelHelpers.export(exports, "ja", ()=>(0, _indexJsDefault51.default));
parcelHelpers.export(exports, "jaHira", ()=>(0, _indexJsDefault52.default));
parcelHelpers.export(exports, "ka", ()=>(0, _indexJsDefault53.default));
parcelHelpers.export(exports, "kk", ()=>(0, _indexJsDefault54.default));
parcelHelpers.export(exports, "km", ()=>(0, _indexJsDefault55.default));
parcelHelpers.export(exports, "kn", ()=>(0, _indexJsDefault56.default));
parcelHelpers.export(exports, "ko", ()=>(0, _indexJsDefault57.default));
parcelHelpers.export(exports, "lb", ()=>(0, _indexJsDefault58.default));
parcelHelpers.export(exports, "lt", ()=>(0, _indexJsDefault59.default));
parcelHelpers.export(exports, "lv", ()=>(0, _indexJsDefault60.default));
parcelHelpers.export(exports, "mk", ()=>(0, _indexJsDefault61.default));
parcelHelpers.export(exports, "mn", ()=>(0, _indexJsDefault62.default));
parcelHelpers.export(exports, "ms", ()=>(0, _indexJsDefault63.default));
parcelHelpers.export(exports, "mt", ()=>(0, _indexJsDefault64.default));
parcelHelpers.export(exports, "nb", ()=>(0, _indexJsDefault65.default));
parcelHelpers.export(exports, "nl", ()=>(0, _indexJsDefault66.default));
parcelHelpers.export(exports, "nlBE", ()=>(0, _indexJsDefault67.default));
parcelHelpers.export(exports, "nn", ()=>(0, _indexJsDefault68.default));
parcelHelpers.export(exports, "oc", ()=>(0, _indexJsDefault69.default));
parcelHelpers.export(exports, "pl", ()=>(0, _indexJsDefault70.default));
parcelHelpers.export(exports, "pt", ()=>(0, _indexJsDefault71.default));
parcelHelpers.export(exports, "ptBR", ()=>(0, _indexJsDefault72.default));
parcelHelpers.export(exports, "ro", ()=>(0, _indexJsDefault73.default));
parcelHelpers.export(exports, "ru", ()=>(0, _indexJsDefault74.default));
parcelHelpers.export(exports, "sk", ()=>(0, _indexJsDefault75.default));
parcelHelpers.export(exports, "sl", ()=>(0, _indexJsDefault76.default));
parcelHelpers.export(exports, "sq", ()=>(0, _indexJsDefault77.default));
parcelHelpers.export(exports, "sr", ()=>(0, _indexJsDefault78.default));
parcelHelpers.export(exports, "srLatn", ()=>(0, _indexJsDefault79.default));
parcelHelpers.export(exports, "sv", ()=>(0, _indexJsDefault80.default));
parcelHelpers.export(exports, "ta", ()=>(0, _indexJsDefault81.default));
parcelHelpers.export(exports, "te", ()=>(0, _indexJsDefault82.default));
parcelHelpers.export(exports, "th", ()=>(0, _indexJsDefault83.default));
parcelHelpers.export(exports, "tr", ()=>(0, _indexJsDefault84.default));
parcelHelpers.export(exports, "ug", ()=>(0, _indexJsDefault85.default));
parcelHelpers.export(exports, "uk", ()=>(0, _indexJsDefault86.default));
parcelHelpers.export(exports, "uz", ()=>(0, _indexJsDefault87.default));
parcelHelpers.export(exports, "uzCyrl", ()=>(0, _indexJsDefault88.default));
parcelHelpers.export(exports, "vi", ()=>(0, _indexJsDefault89.default));
parcelHelpers.export(exports, "zhCN", ()=>(0, _indexJsDefault90.default));
parcelHelpers.export(exports, "zhHK", ()=>(0, _indexJsDefault91.default));
parcelHelpers.export(exports, "zhTW", ()=>(0, _indexJsDefault92.default));
var _indexJs = require("./af/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./ar/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./ar-DZ/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./ar-EG/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./ar-MA/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("./ar-SA/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("./ar-TN/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("./az/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("./be/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("./be-tarask/index.js");
var _indexJsDefault9 = parcelHelpers.interopDefault(_indexJs9);
var _indexJs10 = require("./bg/index.js");
var _indexJsDefault10 = parcelHelpers.interopDefault(_indexJs10);
var _indexJs11 = require("./bn/index.js");
var _indexJsDefault11 = parcelHelpers.interopDefault(_indexJs11);
var _indexJs12 = require("./bs/index.js");
var _indexJsDefault12 = parcelHelpers.interopDefault(_indexJs12);
var _indexJs13 = require("./ca/index.js");
var _indexJsDefault13 = parcelHelpers.interopDefault(_indexJs13);
var _indexJs14 = require("./cs/index.js");
var _indexJsDefault14 = parcelHelpers.interopDefault(_indexJs14);
var _indexJs15 = require("./cy/index.js");
var _indexJsDefault15 = parcelHelpers.interopDefault(_indexJs15);
var _indexJs16 = require("./da/index.js");
var _indexJsDefault16 = parcelHelpers.interopDefault(_indexJs16);
var _indexJs17 = require("./de/index.js");
var _indexJsDefault17 = parcelHelpers.interopDefault(_indexJs17);
var _indexJs18 = require("./de-AT/index.js");
var _indexJsDefault18 = parcelHelpers.interopDefault(_indexJs18);
var _indexJs19 = require("./el/index.js");
var _indexJsDefault19 = parcelHelpers.interopDefault(_indexJs19);
var _indexJs20 = require("./en-AU/index.js");
var _indexJsDefault20 = parcelHelpers.interopDefault(_indexJs20);
var _indexJs21 = require("./en-CA/index.js");
var _indexJsDefault21 = parcelHelpers.interopDefault(_indexJs21);
var _indexJs22 = require("./en-GB/index.js");
var _indexJsDefault22 = parcelHelpers.interopDefault(_indexJs22);
var _indexJs23 = require("./en-IE/index.js");
var _indexJsDefault23 = parcelHelpers.interopDefault(_indexJs23);
var _indexJs24 = require("./en-IN/index.js");
var _indexJsDefault24 = parcelHelpers.interopDefault(_indexJs24);
var _indexJs25 = require("./en-NZ/index.js");
var _indexJsDefault25 = parcelHelpers.interopDefault(_indexJs25);
var _indexJs26 = require("./en-US/index.js");
var _indexJsDefault26 = parcelHelpers.interopDefault(_indexJs26);
var _indexJs27 = require("./en-ZA/index.js");
var _indexJsDefault27 = parcelHelpers.interopDefault(_indexJs27);
var _indexJs28 = require("./eo/index.js");
var _indexJsDefault28 = parcelHelpers.interopDefault(_indexJs28);
var _indexJs29 = require("./es/index.js");
var _indexJsDefault29 = parcelHelpers.interopDefault(_indexJs29);
var _indexJs30 = require("./et/index.js");
var _indexJsDefault30 = parcelHelpers.interopDefault(_indexJs30);
var _indexJs31 = require("./eu/index.js");
var _indexJsDefault31 = parcelHelpers.interopDefault(_indexJs31);
var _indexJs32 = require("./fa-IR/index.js");
var _indexJsDefault32 = parcelHelpers.interopDefault(_indexJs32);
var _indexJs33 = require("./fi/index.js");
var _indexJsDefault33 = parcelHelpers.interopDefault(_indexJs33);
var _indexJs34 = require("./fr/index.js");
var _indexJsDefault34 = parcelHelpers.interopDefault(_indexJs34);
var _indexJs35 = require("./fr-CA/index.js");
var _indexJsDefault35 = parcelHelpers.interopDefault(_indexJs35);
var _indexJs36 = require("./fr-CH/index.js");
var _indexJsDefault36 = parcelHelpers.interopDefault(_indexJs36);
var _indexJs37 = require("./fy/index.js");
var _indexJsDefault37 = parcelHelpers.interopDefault(_indexJs37);
var _indexJs38 = require("./gd/index.js");
var _indexJsDefault38 = parcelHelpers.interopDefault(_indexJs38);
var _indexJs39 = require("./gl/index.js");
var _indexJsDefault39 = parcelHelpers.interopDefault(_indexJs39);
var _indexJs40 = require("./gu/index.js");
var _indexJsDefault40 = parcelHelpers.interopDefault(_indexJs40);
var _indexJs41 = require("./he/index.js");
var _indexJsDefault41 = parcelHelpers.interopDefault(_indexJs41);
var _indexJs42 = require("./hi/index.js");
var _indexJsDefault42 = parcelHelpers.interopDefault(_indexJs42);
var _indexJs43 = require("./hr/index.js");
var _indexJsDefault43 = parcelHelpers.interopDefault(_indexJs43);
var _indexJs44 = require("./ht/index.js");
var _indexJsDefault44 = parcelHelpers.interopDefault(_indexJs44);
var _indexJs45 = require("./hu/index.js");
var _indexJsDefault45 = parcelHelpers.interopDefault(_indexJs45);
var _indexJs46 = require("./hy/index.js");
var _indexJsDefault46 = parcelHelpers.interopDefault(_indexJs46);
var _indexJs47 = require("./id/index.js");
var _indexJsDefault47 = parcelHelpers.interopDefault(_indexJs47);
var _indexJs48 = require("./is/index.js");
var _indexJsDefault48 = parcelHelpers.interopDefault(_indexJs48);
var _indexJs49 = require("./it/index.js");
var _indexJsDefault49 = parcelHelpers.interopDefault(_indexJs49);
var _indexJs50 = require("./it-CH/index.js");
var _indexJsDefault50 = parcelHelpers.interopDefault(_indexJs50);
var _indexJs51 = require("./ja/index.js");
var _indexJsDefault51 = parcelHelpers.interopDefault(_indexJs51);
var _indexJs52 = require("./ja-Hira/index.js");
var _indexJsDefault52 = parcelHelpers.interopDefault(_indexJs52);
var _indexJs53 = require("./ka/index.js");
var _indexJsDefault53 = parcelHelpers.interopDefault(_indexJs53);
var _indexJs54 = require("./kk/index.js");
var _indexJsDefault54 = parcelHelpers.interopDefault(_indexJs54);
var _indexJs55 = require("./km/index.js");
var _indexJsDefault55 = parcelHelpers.interopDefault(_indexJs55);
var _indexJs56 = require("./kn/index.js");
var _indexJsDefault56 = parcelHelpers.interopDefault(_indexJs56);
var _indexJs57 = require("./ko/index.js");
var _indexJsDefault57 = parcelHelpers.interopDefault(_indexJs57);
var _indexJs58 = require("./lb/index.js");
var _indexJsDefault58 = parcelHelpers.interopDefault(_indexJs58);
var _indexJs59 = require("./lt/index.js");
var _indexJsDefault59 = parcelHelpers.interopDefault(_indexJs59);
var _indexJs60 = require("./lv/index.js");
var _indexJsDefault60 = parcelHelpers.interopDefault(_indexJs60);
var _indexJs61 = require("./mk/index.js");
var _indexJsDefault61 = parcelHelpers.interopDefault(_indexJs61);
var _indexJs62 = require("./mn/index.js");
var _indexJsDefault62 = parcelHelpers.interopDefault(_indexJs62);
var _indexJs63 = require("./ms/index.js");
var _indexJsDefault63 = parcelHelpers.interopDefault(_indexJs63);
var _indexJs64 = require("./mt/index.js");
var _indexJsDefault64 = parcelHelpers.interopDefault(_indexJs64);
var _indexJs65 = require("./nb/index.js");
var _indexJsDefault65 = parcelHelpers.interopDefault(_indexJs65);
var _indexJs66 = require("./nl/index.js");
var _indexJsDefault66 = parcelHelpers.interopDefault(_indexJs66);
var _indexJs67 = require("./nl-BE/index.js");
var _indexJsDefault67 = parcelHelpers.interopDefault(_indexJs67);
var _indexJs68 = require("./nn/index.js");
var _indexJsDefault68 = parcelHelpers.interopDefault(_indexJs68);
var _indexJs69 = require("./oc/index.js");
var _indexJsDefault69 = parcelHelpers.interopDefault(_indexJs69);
var _indexJs70 = require("./pl/index.js");
var _indexJsDefault70 = parcelHelpers.interopDefault(_indexJs70);
var _indexJs71 = require("./pt/index.js");
var _indexJsDefault71 = parcelHelpers.interopDefault(_indexJs71);
var _indexJs72 = require("./pt-BR/index.js");
var _indexJsDefault72 = parcelHelpers.interopDefault(_indexJs72);
var _indexJs73 = require("./ro/index.js");
var _indexJsDefault73 = parcelHelpers.interopDefault(_indexJs73);
var _indexJs74 = require("./ru/index.js");
var _indexJsDefault74 = parcelHelpers.interopDefault(_indexJs74);
var _indexJs75 = require("./sk/index.js");
var _indexJsDefault75 = parcelHelpers.interopDefault(_indexJs75);
var _indexJs76 = require("./sl/index.js");
var _indexJsDefault76 = parcelHelpers.interopDefault(_indexJs76);
var _indexJs77 = require("./sq/index.js");
var _indexJsDefault77 = parcelHelpers.interopDefault(_indexJs77);
var _indexJs78 = require("./sr/index.js");
var _indexJsDefault78 = parcelHelpers.interopDefault(_indexJs78);
var _indexJs79 = require("./sr-Latn/index.js");
var _indexJsDefault79 = parcelHelpers.interopDefault(_indexJs79);
var _indexJs80 = require("./sv/index.js");
var _indexJsDefault80 = parcelHelpers.interopDefault(_indexJs80);
var _indexJs81 = require("./ta/index.js");
var _indexJsDefault81 = parcelHelpers.interopDefault(_indexJs81);
var _indexJs82 = require("./te/index.js");
var _indexJsDefault82 = parcelHelpers.interopDefault(_indexJs82);
var _indexJs83 = require("./th/index.js");
var _indexJsDefault83 = parcelHelpers.interopDefault(_indexJs83);
var _indexJs84 = require("./tr/index.js");
var _indexJsDefault84 = parcelHelpers.interopDefault(_indexJs84);
var _indexJs85 = require("./ug/index.js");
var _indexJsDefault85 = parcelHelpers.interopDefault(_indexJs85);
var _indexJs86 = require("./uk/index.js");
var _indexJsDefault86 = parcelHelpers.interopDefault(_indexJs86);
var _indexJs87 = require("./uz/index.js");
var _indexJsDefault87 = parcelHelpers.interopDefault(_indexJs87);
var _indexJs88 = require("./uz-Cyrl/index.js");
var _indexJsDefault88 = parcelHelpers.interopDefault(_indexJs88);
var _indexJs89 = require("./vi/index.js");
var _indexJsDefault89 = parcelHelpers.interopDefault(_indexJs89);
var _indexJs90 = require("./zh-CN/index.js");
var _indexJsDefault90 = parcelHelpers.interopDefault(_indexJs90);
var _indexJs91 = require("./zh-HK/index.js");
var _indexJsDefault91 = parcelHelpers.interopDefault(_indexJs91);
var _indexJs92 = require("./zh-TW/index.js");
var _indexJsDefault92 = parcelHelpers.interopDefault(_indexJs92);

},{"./af/index.js":false,"./ar/index.js":"5cInk","./ar-DZ/index.js":false,"./ar-EG/index.js":false,"./ar-MA/index.js":false,"./ar-SA/index.js":false,"./ar-TN/index.js":false,"./az/index.js":false,"./be/index.js":false,"./be-tarask/index.js":false,"./bg/index.js":false,"./bn/index.js":false,"./bs/index.js":false,"./ca/index.js":false,"./cs/index.js":false,"./cy/index.js":false,"./da/index.js":false,"./de/index.js":false,"./de-AT/index.js":false,"./el/index.js":false,"./en-AU/index.js":false,"./en-CA/index.js":false,"./en-GB/index.js":false,"./en-IE/index.js":false,"./en-IN/index.js":false,"./en-NZ/index.js":false,"./en-US/index.js":false,"./en-ZA/index.js":false,"./eo/index.js":false,"./es/index.js":false,"./et/index.js":false,"./eu/index.js":false,"./fa-IR/index.js":false,"./fi/index.js":false,"./fr/index.js":false,"./fr-CA/index.js":false,"./fr-CH/index.js":false,"./fy/index.js":false,"./gd/index.js":false,"./gl/index.js":false,"./gu/index.js":false,"./he/index.js":false,"./hi/index.js":false,"./hr/index.js":false,"./ht/index.js":false,"./hu/index.js":false,"./hy/index.js":false,"./id/index.js":false,"./is/index.js":false,"./it/index.js":false,"./it-CH/index.js":false,"./ja/index.js":false,"./ja-Hira/index.js":false,"./ka/index.js":false,"./kk/index.js":false,"./km/index.js":false,"./kn/index.js":false,"./ko/index.js":false,"./lb/index.js":false,"./lt/index.js":false,"./lv/index.js":false,"./mk/index.js":false,"./mn/index.js":false,"./ms/index.js":false,"./mt/index.js":false,"./nb/index.js":false,"./nl/index.js":false,"./nl-BE/index.js":false,"./nn/index.js":false,"./oc/index.js":false,"./pl/index.js":false,"./pt/index.js":false,"./pt-BR/index.js":false,"./ro/index.js":false,"./ru/index.js":false,"./sk/index.js":false,"./sl/index.js":false,"./sq/index.js":false,"./sr/index.js":false,"./sr-Latn/index.js":false,"./sv/index.js":false,"./ta/index.js":false,"./te/index.js":false,"./th/index.js":false,"./tr/index.js":false,"./ug/index.js":false,"./uk/index.js":false,"./uz/index.js":false,"./uz-Cyrl/index.js":false,"./vi/index.js":false,"./zh-CN/index.js":false,"./zh-HK/index.js":false,"./zh-TW/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cInk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./_lib/formatDistance/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./_lib/formatLong/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./_lib/formatRelative/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./_lib/localize/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./_lib/match/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
/**
 * @type {Locale}
 * @category Locales
 * @summary Arabic locale (Modern Standard Arabic - Al-fussha).
 * @language Modern Standard Arabic
 * @iso-639-2 ara
 * @author Abdallah Hassan [@AbdallahAHO]{@link https://github.com/AbdallahAHO}
 * @author Koussay Haj Kacem [@essana3]{@link https://github.com/essana3}
 */ var locale = {
    code: "ar",
    formatDistance: (0, _indexJsDefault.default),
    formatLong: (0, _indexJsDefault1.default),
    formatRelative: (0, _indexJsDefault2.default),
    localize: (0, _indexJsDefault3.default),
    match: (0, _indexJsDefault4.default),
    options: {
        weekStartsOn: 6,
        firstWeekContainsDate: 1
    }
};
exports.default = locale;

},{"./_lib/formatDistance/index.js":"iVJRO","./_lib/formatLong/index.js":"i07cl","./_lib/formatRelative/index.js":"aocKa","./_lib/localize/index.js":"lRKN3","./_lib/match/index.js":"2ZCN3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iVJRO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "أقل من ثانية",
        two: "أقل من ثانيتين",
        threeToTen: "أقل من {{count}} ثواني",
        other: "أقل من {{count}} ثانية"
    },
    xSeconds: {
        one: "ثانية واحدة",
        two: "ثانيتان",
        threeToTen: "{{count}} ثواني",
        other: "{{count}} ثانية"
    },
    halfAMinute: "نصف دقيقة",
    lessThanXMinutes: {
        one: "أقل من دقيقة",
        two: "أقل من دقيقتين",
        threeToTen: "أقل من {{count}} دقائق",
        other: "أقل من {{count}} دقيقة"
    },
    xMinutes: {
        one: "دقيقة واحدة",
        two: "دقيقتان",
        threeToTen: "{{count}} دقائق",
        other: "{{count}} دقيقة"
    },
    aboutXHours: {
        one: "ساعة واحدة تقريباً",
        two: "ساعتين تقريبا",
        threeToTen: "{{count}} ساعات تقريباً",
        other: "{{count}} ساعة تقريباً"
    },
    xHours: {
        one: "ساعة واحدة",
        two: "ساعتان",
        threeToTen: "{{count}} ساعات",
        other: "{{count}} ساعة"
    },
    xDays: {
        one: "يوم واحد",
        two: "يومان",
        threeToTen: "{{count}} أيام",
        other: "{{count}} يوم"
    },
    aboutXWeeks: {
        one: "أسبوع واحد تقريبا",
        two: "أسبوعين تقريبا",
        threeToTen: "{{count}} أسابيع تقريبا",
        other: "{{count}} أسبوعا تقريبا"
    },
    xWeeks: {
        one: "أسبوع واحد",
        two: "أسبوعان",
        threeToTen: "{{count}} أسابيع",
        other: "{{count}} أسبوعا"
    },
    aboutXMonths: {
        one: "شهر واحد تقريباً",
        two: "شهرين تقريبا",
        threeToTen: "{{count}} أشهر تقريبا",
        other: "{{count}} شهرا تقريباً"
    },
    xMonths: {
        one: "شهر واحد",
        two: "شهران",
        threeToTen: "{{count}} أشهر",
        other: "{{count}} شهرا"
    },
    aboutXYears: {
        one: "سنة واحدة تقريباً",
        two: "سنتين تقريبا",
        threeToTen: "{{count}} سنوات تقريباً",
        other: "{{count}} سنة تقريباً"
    },
    xYears: {
        one: "سنة واحد",
        two: "سنتان",
        threeToTen: "{{count}} سنوات",
        other: "{{count}} سنة"
    },
    overXYears: {
        one: "أكثر من سنة",
        two: "أكثر من سنتين",
        threeToTen: "أكثر من {{count}} سنوات",
        other: "أكثر من {{count}} سنة"
    },
    almostXYears: {
        one: "ما يقارب سنة واحدة",
        two: "ما يقارب سنتين",
        threeToTen: "ما يقارب {{count}} سنوات",
        other: "ما يقارب {{count}} سنة"
    }
};
var formatDistance = function formatDistance(token, count, options) {
    var usageGroup = formatDistanceLocale[token];
    var result;
    if (typeof usageGroup === "string") result = usageGroup;
    else if (count === 1) result = usageGroup.one;
    else if (count === 2) result = usageGroup.two;
    else if (count <= 10) result = usageGroup.threeToTen.replace("{{count}}", String(count));
    else result = usageGroup.other.replace("{{count}}", String(count));
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) return "خلال " + result;
        else return "منذ " + result;
    }
    return result;
};
exports.default = formatDistance;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i07cl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildFormatLongFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var dateFormats = {
    full: "EEEE، do MMMM y",
    long: "do MMMM y",
    medium: "d MMM y",
    short: "dd/MM/yyyy"
};
var timeFormats = {
    full: "HH:mm:ss",
    long: "HH:mm:ss",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} 'عند الساعة' {{time}}",
    long: "{{date}} 'عند الساعة' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
var formatLong = {
    date: (0, _indexJsDefault.default)({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, _indexJsDefault.default)({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, _indexJsDefault.default)({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
exports.default = formatLong;

},{"../../../_lib/buildFormatLongFn/index.js":"h1FGd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h1FGd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildFormatLongFn(args) {
    return function() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // TODO: Remove String()
        var width = options.width ? String(options.width) : args.defaultWidth;
        var format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
exports.default = buildFormatLongFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aocKa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var formatRelativeLocale = {
    lastWeek: "eeee 'الماضي عند الساعة' p",
    yesterday: "'الأمس عند الساعة' p",
    today: "'اليوم عند الساعة' p",
    tomorrow: "'غدا عند الساعة' p",
    nextWeek: "eeee 'القادم عند الساعة' p",
    other: "P"
};
var formatRelative = function formatRelative(token) {
    return formatRelativeLocale[token];
};
exports.default = formatRelative;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRKN3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildLocalizeFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var eraValues = {
    narrow: [
        "ق",
        "ب"
    ],
    abbreviated: [
        "ق.م.",
        "ب.م."
    ],
    wide: [
        "قبل الميلاد",
        "بعد الميلاد"
    ]
};
var quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "ر1",
        "ر2",
        "ر3",
        "ر4"
    ],
    wide: [
        "الربع الأول",
        "الربع الثاني",
        "الربع الثالث",
        "الربع الرابع"
    ]
};
var monthValues = {
    narrow: [
        "ي",
        "ف",
        "م",
        "أ",
        "م",
        "ي",
        "ي",
        "أ",
        "س",
        "أ",
        "ن",
        "د"
    ],
    abbreviated: [
        "يناير",
        "فبراير",
        "مارس",
        "أبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر"
    ],
    wide: [
        "يناير",
        "فبراير",
        "مارس",
        "أبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر"
    ]
};
var dayValues = {
    narrow: [
        "ح",
        "ن",
        "ث",
        "ر",
        "خ",
        "ج",
        "س"
    ],
    short: [
        "أحد",
        "اثنين",
        "ثلاثاء",
        "أربعاء",
        "خميس",
        "جمعة",
        "سبت"
    ],
    abbreviated: [
        "أحد",
        "اثنين",
        "ثلاثاء",
        "أربعاء",
        "خميس",
        "جمعة",
        "سبت"
    ],
    wide: [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت"
    ]
};
var dayPeriodValues = {
    narrow: {
        am: "ص",
        pm: "م",
        morning: "الصباح",
        noon: "الظهر",
        afternoon: "بعد الظهر",
        evening: "المساء",
        night: "الليل",
        midnight: "منتصف الليل"
    },
    abbreviated: {
        am: "ص",
        pm: "م",
        morning: "الصباح",
        noon: "الظهر",
        afternoon: "بعد الظهر",
        evening: "المساء",
        night: "الليل",
        midnight: "منتصف الليل"
    },
    wide: {
        am: "ص",
        pm: "م",
        morning: "الصباح",
        noon: "الظهر",
        afternoon: "بعد الظهر",
        evening: "المساء",
        night: "الليل",
        midnight: "منتصف الليل"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "ص",
        pm: "م",
        morning: "في الصباح",
        noon: "الظهر",
        afternoon: "بعد الظهر",
        evening: "في المساء",
        night: "في الليل",
        midnight: "منتصف الليل"
    },
    abbreviated: {
        am: "ص",
        pm: "م",
        morning: "في الصباح",
        noon: "الظهر",
        afternoon: "بعد الظهر",
        evening: "في المساء",
        night: "في الليل",
        midnight: "منتصف الليل"
    },
    wide: {
        am: "ص",
        pm: "م",
        morning: "في الصباح",
        noon: "الظهر",
        afternoon: "بعد الظهر",
        evening: "في المساء",
        night: "في الليل",
        midnight: "منتصف الليل"
    }
};
var ordinalNumber = function ordinalNumber(num) {
    return String(num);
};
var localize = {
    ordinalNumber: ordinalNumber,
    era: (0, _indexJsDefault.default)({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, _indexJsDefault.default)({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: function argumentCallback(quarter) {
            return quarter - 1;
        }
    }),
    month: (0, _indexJsDefault.default)({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, _indexJsDefault.default)({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, _indexJsDefault.default)({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
exports.default = localize;

},{"../../../_lib/buildLocalizeFn/index.js":"5l2rZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5l2rZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildLocalizeFn(args) {
    return function(dirtyIndex, options) {
        var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
        var valuesArray;
        if (context === "formatting" && args.formattingValues) {
            var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            var _defaultWidth = args.defaultWidth;
            var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[_width] || args.values[_defaultWidth];
        }
        var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}
exports.default = buildLocalizeFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ZCN3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildMatchPatternFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/buildMatchFn/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /[قب]/,
    abbreviated: /[قب]\.م\./,
    wide: /(قبل|بعد) الميلاد/
};
var parseEraPatterns = {
    any: [
        /قبل/,
        /بعد/
    ]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /ر[1234]/,
    wide: /الربع (الأول|الثاني|الثالث|الرابع)/
};
var parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
var matchMonthPatterns = {
    narrow: /^[أيفمسند]/,
    abbreviated: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,
    wide: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/
};
var parseMonthPatterns = {
    narrow: [
        /^ي/i,
        /^ف/i,
        /^م/i,
        /^أ/i,
        /^م/i,
        /^ي/i,
        /^ي/i,
        /^أ/i,
        /^س/i,
        /^أ/i,
        /^ن/i,
        /^د/i
    ],
    any: [
        /^يناير/i,
        /^فبراير/i,
        /^مارس/i,
        /^أبريل/i,
        /^مايو/i,
        /^يونيو/i,
        /^يوليو/i,
        /^أغسطس/i,
        /^سبتمبر/i,
        /^أكتوبر/i,
        /^نوفمبر/i,
        /^ديسمبر/i
    ]
};
var matchDayPatterns = {
    narrow: /^[حنثرخجس]/i,
    short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
    abbreviated: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
    wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
};
var parseDayPatterns = {
    narrow: [
        /^ح/i,
        /^ن/i,
        /^ث/i,
        /^ر/i,
        /^خ/i,
        /^ج/i,
        /^س/i
    ],
    wide: [
        /^الأحد/i,
        /^الاثنين/i,
        /^الثلاثاء/i,
        /^الأربعاء/i,
        /^الخميس/i,
        /^الجمعة/i,
        /^السبت/i
    ],
    any: [
        /^أح/i,
        /^اث/i,
        /^ث/i,
        /^أر/i,
        /^خ/i,
        /^ج/i,
        /^س/i
    ]
};
var matchDayPeriodPatterns = {
    narrow: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/,
    any: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/
};
var parseDayPeriodPatterns = {
    any: {
        am: /^ص/,
        pm: /^م/,
        midnight: /منتصف الليل/,
        noon: /الظهر/,
        afternoon: /بعد الظهر/,
        morning: /في الصباح/,
        evening: /في المساء/,
        night: /في الليل/
    }
};
var match = {
    ordinalNumber: (0, _indexJsDefault.default)({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function valueCallback(value) {
            return parseInt(value, 10);
        }
    }),
    era: (0, _indexJsDefault1.default)({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, _indexJsDefault1.default)({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: function valueCallback(index) {
            return index + 1;
        }
    }),
    month: (0, _indexJsDefault1.default)({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, _indexJsDefault1.default)({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, _indexJsDefault1.default)({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
exports.default = match;

},{"../../../_lib/buildMatchPatternFn/index.js":"4GjCS","../../../_lib/buildMatchFn/index.js":"2nEf9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4GjCS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildMatchPatternFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
exports.default = buildMatchPatternFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nEf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildMatchFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var width = options.width;
        var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        }) : findKey(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        });
        var value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
exports.default = buildMatchFn;
function findKey(object, predicate) {
    for(var key in object){
        if (object.hasOwnProperty(key) && predicate(object[key])) return key;
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(var key = 0; key < array.length; key++){
        if (predicate(array[key])) return key;
    }
    return undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["awEvQ","bB7Pu"], "bB7Pu", "parcelRequireff97")

//# sourceMappingURL=index.3d214d75.js.map
