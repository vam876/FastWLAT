const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DashboardPage-BRQVp4pV.js","./memoryStore-DY1yPL7M.js","./ThemeContainer.vue_vue_type_script_setup_true_lang-CmUDCaT3.js","./dataSourceUtils-IiewxtUB.js","./indexedDBStore-vYrXL9Qh.js","./ipGeoLocationAdvanced-GdEHxI3I.js","./DashboardPage-cNCJQuJb.css","./ImportPage-C-qTA-Jz.js","./LogViewPage-BU48ZkaJ.js","./exportService-Dg1pRR2c.js","./AnalysisPage-KUWKaZpu.js","./ThreatAnalysisPage-ByXDQBMy.js","./ThreatAnalysisPage-DjJ4i5bF.css","./ReportsPage-D4aMZnRK.js","./ReportsPage-BiICtecW.css","./RulesPage-C_TOK39V.js","./SettingsPage-Ddp4UmtQ.js","./SettingsPage-CWGdyX0B.css","./ThreatMapPage-CW73exd-.js","./ThreatMapPage-CJ_g5BjE.css"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function makeMap(str) {
  const map = /* @__PURE__ */ Object.create(null);
  for (const key of str.split(",")) map[key] = 1;
  return (val) => val in map;
}
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove$1 = (arr, el) => {
  const i2 = arr.indexOf(el);
  if (i2 > -1) {
    arr.splice(i2, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
const isArray$1 = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => toTypeString(val) === "[object Date]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction(
  (str) => {
    return str.replace(camelizeRE, (_2, c2) => c2 ? c2.toUpperCase() : "");
  }
);
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction(
  (str) => {
    const s2 = str ? `on${capitalize(str)}` : ``;
    return s2;
  }
);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, ...arg) => {
  for (let i2 = 0; i2 < fns.length; i2++) {
    fns[i2](...arg);
  }
};
const def = (obj, key, value, writable = false) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    writable,
    value
  });
};
const looseToNumber = (val) => {
  const n2 = parseFloat(val);
  return isNaN(n2) ? val : n2;
};
const toNumber = (val) => {
  const n2 = isString(val) ? Number(val) : NaN;
  return isNaN(n2) ? val : n2;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value) {
  if (isArray$1(value)) {
    const res = {};
    for (let i2 = 0; i2 < value.length; i2++) {
      const item = value[i2];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value) || isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray$1(value)) {
    for (let i2 = 0; i2 < value.length; i2++) {
      const normalized = normalizeClass(value[i2]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
function looseCompareArrays(a2, b2) {
  if (a2.length !== b2.length) return false;
  let equal = true;
  for (let i2 = 0; equal && i2 < a2.length; i2++) {
    equal = looseEqual(a2[i2], b2[i2]);
  }
  return equal;
}
function looseEqual(a2, b2) {
  if (a2 === b2) return true;
  let aValidType = isDate(a2);
  let bValidType = isDate(b2);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a2.getTime() === b2.getTime() : false;
  }
  aValidType = isSymbol(a2);
  bValidType = isSymbol(b2);
  if (aValidType || bValidType) {
    return a2 === b2;
  }
  aValidType = isArray$1(a2);
  bValidType = isArray$1(b2);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a2, b2) : false;
  }
  aValidType = isObject(a2);
  bValidType = isObject(b2);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a2).length;
    const bKeysCount = Object.keys(b2).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a2) {
      const aHasKey = a2.hasOwnProperty(key);
      const bHasKey = b2.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a2[key], b2[key])) {
        return false;
      }
    }
  }
  return String(a2) === String(b2);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const isRef$1 = (val) => {
  return !!(val && val["__v_isRef"] === true);
};
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray$1(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef$1(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (isRef$1(val)) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key, val2], i2) => {
          entries[stringifySymbol(key, i2) + " =>"] = val2;
          return entries;
        },
        {}
      )
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v2) => stringifySymbol(v2))
    };
  } else if (isSymbol(val)) {
    return stringifySymbol(val);
  } else if (isObject(val) && !isArray$1(val) && !isPlainObject$1(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v2, i2 = "") => {
  var _a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol(v2) ? `Symbol(${(_a = v2.description) != null ? _a : i2})` : v2
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this._on = 0;
    this.effects = [];
    this.cleanups = [];
    this._isPaused = false;
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let i2, l2;
      if (this.scopes) {
        for (i2 = 0, l2 = this.scopes.length; i2 < l2; i2++) {
          this.scopes[i2].pause();
        }
      }
      for (i2 = 0, l2 = this.effects.length; i2 < l2; i2++) {
        this.effects[i2].pause();
      }
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active) {
      if (this._isPaused) {
        this._isPaused = false;
        let i2, l2;
        if (this.scopes) {
          for (i2 = 0, l2 = this.scopes.length; i2 < l2; i2++) {
            this.scopes[i2].resume();
          }
        }
        for (i2 = 0, l2 = this.effects.length; i2 < l2; i2++) {
          this.effects[i2].resume();
        }
      }
    }
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    if (++this._on === 1) {
      this.prevScope = activeEffectScope;
      activeEffectScope = this;
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      activeEffectScope = this.prevScope;
      this.prevScope = void 0;
    }
  }
  stop(fromParent) {
    if (this._active) {
      this._active = false;
      let i2, l2;
      for (i2 = 0, l2 = this.effects.length; i2 < l2; i2++) {
        this.effects[i2].stop();
      }
      this.effects.length = 0;
      for (i2 = 0, l2 = this.cleanups.length; i2 < l2; i2++) {
        this.cleanups[i2]();
      }
      this.cleanups.length = 0;
      if (this.scopes) {
        for (i2 = 0, l2 = this.scopes.length; i2 < l2; i2++) {
          this.scopes[i2].stop(true);
        }
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn, failSilently = false) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  }
}
let activeSub;
const pausedQueueEffects = /* @__PURE__ */ new WeakSet();
class ReactiveEffect {
  constructor(fn) {
    this.fn = fn;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 1 | 4;
    this.next = void 0;
    this.cleanup = void 0;
    this.scheduler = void 0;
    if (activeEffectScope && activeEffectScope.active) {
      activeEffectScope.effects.push(this);
    }
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    if (this.flags & 64) {
      this.flags &= -65;
      if (pausedQueueEffects.has(this)) {
        pausedQueueEffects.delete(this);
        this.trigger();
      }
    }
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags & 2 && !(this.flags & 32)) {
      return;
    }
    if (!(this.flags & 8)) {
      batch(this);
    }
  }
  run() {
    if (!(this.flags & 1)) {
      return this.fn();
    }
    this.flags |= 2;
    cleanupEffect(this);
    prepareDeps(this);
    const prevEffect = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = this;
    shouldTrack = true;
    try {
      return this.fn();
    } finally {
      cleanupDeps(this);
      activeSub = prevEffect;
      shouldTrack = prevShouldTrack;
      this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let link = this.deps; link; link = link.nextDep) {
        removeSub(link);
      }
      this.deps = this.depsTail = void 0;
      cleanupEffect(this);
      this.onStop && this.onStop();
      this.flags &= -2;
    }
  }
  trigger() {
    if (this.flags & 64) {
      pausedQueueEffects.add(this);
    } else if (this.scheduler) {
      this.scheduler();
    } else {
      this.runIfDirty();
    }
  }
  /**
   * @internal
   */
  runIfDirty() {
    if (isDirty(this)) {
      this.run();
    }
  }
  get dirty() {
    return isDirty(this);
  }
}
let batchDepth = 0;
let batchedSub;
let batchedComputed;
function batch(sub, isComputed2 = false) {
  sub.flags |= 8;
  if (isComputed2) {
    sub.next = batchedComputed;
    batchedComputed = sub;
    return;
  }
  sub.next = batchedSub;
  batchedSub = sub;
}
function startBatch() {
  batchDepth++;
}
function endBatch() {
  if (--batchDepth > 0) {
    return;
  }
  if (batchedComputed) {
    let e2 = batchedComputed;
    batchedComputed = void 0;
    while (e2) {
      const next = e2.next;
      e2.next = void 0;
      e2.flags &= -9;
      e2 = next;
    }
  }
  let error;
  while (batchedSub) {
    let e2 = batchedSub;
    batchedSub = void 0;
    while (e2) {
      const next = e2.next;
      e2.next = void 0;
      e2.flags &= -9;
      if (e2.flags & 1) {
        try {
          ;
          e2.trigger();
        } catch (err) {
          if (!error) error = err;
        }
      }
      e2 = next;
    }
  }
  if (error) throw error;
}
function prepareDeps(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    link.version = -1;
    link.prevActiveLink = link.dep.activeLink;
    link.dep.activeLink = link;
  }
}
function cleanupDeps(sub) {
  let head;
  let tail = sub.depsTail;
  let link = tail;
  while (link) {
    const prev = link.prevDep;
    if (link.version === -1) {
      if (link === tail) tail = prev;
      removeSub(link);
      removeDep(link);
    } else {
      head = link;
    }
    link.dep.activeLink = link.prevActiveLink;
    link.prevActiveLink = void 0;
    link = prev;
  }
  sub.deps = head;
  sub.depsTail = tail;
}
function isDirty(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
      return true;
    }
  }
  if (sub._dirty) {
    return true;
  }
  return false;
}
function refreshComputed(computed2) {
  if (computed2.flags & 4 && !(computed2.flags & 16)) {
    return;
  }
  computed2.flags &= -17;
  if (computed2.globalVersion === globalVersion) {
    return;
  }
  computed2.globalVersion = globalVersion;
  if (!computed2.isSSR && computed2.flags & 128 && (!computed2.deps && !computed2._dirty || !isDirty(computed2))) {
    return;
  }
  computed2.flags |= 2;
  const dep = computed2.dep;
  const prevSub = activeSub;
  const prevShouldTrack = shouldTrack;
  activeSub = computed2;
  shouldTrack = true;
  try {
    prepareDeps(computed2);
    const value = computed2.fn(computed2._value);
    if (dep.version === 0 || hasChanged(value, computed2._value)) {
      computed2.flags |= 128;
      computed2._value = value;
      dep.version++;
    }
  } catch (err) {
    dep.version++;
    throw err;
  } finally {
    activeSub = prevSub;
    shouldTrack = prevShouldTrack;
    cleanupDeps(computed2);
    computed2.flags &= -3;
  }
}
function removeSub(link, soft = false) {
  const { dep, prevSub, nextSub } = link;
  if (prevSub) {
    prevSub.nextSub = nextSub;
    link.prevSub = void 0;
  }
  if (nextSub) {
    nextSub.prevSub = prevSub;
    link.nextSub = void 0;
  }
  if (dep.subs === link) {
    dep.subs = prevSub;
    if (!prevSub && dep.computed) {
      dep.computed.flags &= -5;
      for (let l2 = dep.computed.deps; l2; l2 = l2.nextDep) {
        removeSub(l2, true);
      }
    }
  }
  if (!soft && !--dep.sc && dep.map) {
    dep.map.delete(dep.key);
  }
}
function removeDep(link) {
  const { prevDep, nextDep } = link;
  if (prevDep) {
    prevDep.nextDep = nextDep;
    link.prevDep = void 0;
  }
  if (nextDep) {
    nextDep.prevDep = prevDep;
    link.nextDep = void 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function cleanupEffect(e2) {
  const { cleanup } = e2;
  e2.cleanup = void 0;
  if (cleanup) {
    const prevSub = activeSub;
    activeSub = void 0;
    try {
      cleanup();
    } finally {
      activeSub = prevSub;
    }
  }
}
let globalVersion = 0;
class Link {
  constructor(sub, dep) {
    this.sub = sub;
    this.dep = dep;
    this.version = dep.version;
    this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Dep {
  // TODO isolatedDeclarations "__v_skip"
  constructor(computed2) {
    this.computed = computed2;
    this.version = 0;
    this.activeLink = void 0;
    this.subs = void 0;
    this.map = void 0;
    this.key = void 0;
    this.sc = 0;
    this.__v_skip = true;
  }
  track(debugInfo) {
    if (!activeSub || !shouldTrack || activeSub === this.computed) {
      return;
    }
    let link = this.activeLink;
    if (link === void 0 || link.sub !== activeSub) {
      link = this.activeLink = new Link(activeSub, this);
      if (!activeSub.deps) {
        activeSub.deps = activeSub.depsTail = link;
      } else {
        link.prevDep = activeSub.depsTail;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
      }
      addSub(link);
    } else if (link.version === -1) {
      link.version = this.version;
      if (link.nextDep) {
        const next = link.nextDep;
        next.prevDep = link.prevDep;
        if (link.prevDep) {
          link.prevDep.nextDep = next;
        }
        link.prevDep = activeSub.depsTail;
        link.nextDep = void 0;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
        if (activeSub.deps === link) {
          activeSub.deps = next;
        }
      }
    }
    return link;
  }
  trigger(debugInfo) {
    this.version++;
    globalVersion++;
    this.notify(debugInfo);
  }
  notify(debugInfo) {
    startBatch();
    try {
      if (false) ;
      for (let link = this.subs; link; link = link.prevSub) {
        if (link.sub.notify()) {
          ;
          link.sub.dep.notify();
        }
      }
    } finally {
      endBatch();
    }
  }
}
function addSub(link) {
  link.dep.sc++;
  if (link.sub.flags & 4) {
    const computed2 = link.dep.computed;
    if (computed2 && !link.dep.subs) {
      computed2.flags |= 4 | 16;
      for (let l2 = computed2.deps; l2; l2 = l2.nextDep) {
        addSub(l2);
      }
    }
    const currentTail = link.dep.subs;
    if (currentTail !== link) {
      link.prevSub = currentTail;
      if (currentTail) currentTail.nextSub = link;
    }
    link.dep.subs = link;
  }
}
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol(
  ""
);
const MAP_KEY_ITERATE_KEY = Symbol(
  ""
);
const ARRAY_ITERATE_KEY = Symbol(
  ""
);
function track(target, type, key) {
  if (shouldTrack && activeSub) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = new Dep());
      dep.map = depsMap;
      dep.key = key;
    }
    {
      dep.track();
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    globalVersion++;
    return;
  }
  const run = (dep) => {
    if (dep) {
      {
        dep.trigger();
      }
    }
  };
  startBatch();
  if (type === "clear") {
    depsMap.forEach(run);
  } else {
    const targetIsArray = isArray$1(target);
    const isArrayIndex = targetIsArray && isIntegerKey(key);
    if (targetIsArray && key === "length") {
      const newLength = Number(newValue);
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol(key2) && key2 >= newLength) {
          run(dep);
        }
      });
    } else {
      if (key !== void 0 || depsMap.has(void 0)) {
        run(depsMap.get(key));
      }
      if (isArrayIndex) {
        run(depsMap.get(ARRAY_ITERATE_KEY));
      }
      switch (type) {
        case "add":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isArrayIndex) {
            run(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            run(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
  }
  endBatch();
}
function getDepFromReactive(object, key) {
  const depMap = targetMap.get(object);
  return depMap && depMap.get(key);
}
function reactiveReadArray(array) {
  const raw = toRaw(array);
  if (raw === array) return raw;
  track(raw, "iterate", ARRAY_ITERATE_KEY);
  return isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
  track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
  return arr;
}
const arrayInstrumentations = {
  __proto__: null,
  [Symbol.iterator]() {
    return iterator(this, Symbol.iterator, toReactive);
  },
  concat(...args) {
    return reactiveReadArray(this).concat(
      ...args.map((x) => isArray$1(x) ? reactiveReadArray(x) : x)
    );
  },
  entries() {
    return iterator(this, "entries", (value) => {
      value[1] = toReactive(value[1]);
      return value;
    });
  },
  every(fn, thisArg) {
    return apply(this, "every", fn, thisArg, void 0, arguments);
  },
  filter(fn, thisArg) {
    return apply(this, "filter", fn, thisArg, (v2) => v2.map(toReactive), arguments);
  },
  find(fn, thisArg) {
    return apply(this, "find", fn, thisArg, toReactive, arguments);
  },
  findIndex(fn, thisArg) {
    return apply(this, "findIndex", fn, thisArg, void 0, arguments);
  },
  findLast(fn, thisArg) {
    return apply(this, "findLast", fn, thisArg, toReactive, arguments);
  },
  findLastIndex(fn, thisArg) {
    return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(fn, thisArg) {
    return apply(this, "forEach", fn, thisArg, void 0, arguments);
  },
  includes(...args) {
    return searchProxy(this, "includes", args);
  },
  indexOf(...args) {
    return searchProxy(this, "indexOf", args);
  },
  join(separator) {
    return reactiveReadArray(this).join(separator);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...args) {
    return searchProxy(this, "lastIndexOf", args);
  },
  map(fn, thisArg) {
    return apply(this, "map", fn, thisArg, void 0, arguments);
  },
  pop() {
    return noTracking(this, "pop");
  },
  push(...args) {
    return noTracking(this, "push", args);
  },
  reduce(fn, ...args) {
    return reduce(this, "reduce", fn, args);
  },
  reduceRight(fn, ...args) {
    return reduce(this, "reduceRight", fn, args);
  },
  shift() {
    return noTracking(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(fn, thisArg) {
    return apply(this, "some", fn, thisArg, void 0, arguments);
  },
  splice(...args) {
    return noTracking(this, "splice", args);
  },
  toReversed() {
    return reactiveReadArray(this).toReversed();
  },
  toSorted(comparer) {
    return reactiveReadArray(this).toSorted(comparer);
  },
  toSpliced(...args) {
    return reactiveReadArray(this).toSpliced(...args);
  },
  unshift(...args) {
    return noTracking(this, "unshift", args);
  },
  values() {
    return iterator(this, "values", toReactive);
  }
};
function iterator(self2, method, wrapValue) {
  const arr = shallowReadArray(self2);
  const iter = arr[method]();
  if (arr !== self2 && !isShallow(self2)) {
    iter._next = iter.next;
    iter.next = () => {
      const result = iter._next();
      if (result.value) {
        result.value = wrapValue(result.value);
      }
      return result;
    };
  }
  return iter;
}
const arrayProto = Array.prototype;
function apply(self2, method, fn, thisArg, wrappedRetFn, args) {
  const arr = shallowReadArray(self2);
  const needsWrap = arr !== self2 && !isShallow(self2);
  const methodFn = arr[method];
  if (methodFn !== arrayProto[method]) {
    const result2 = methodFn.apply(self2, args);
    return needsWrap ? toReactive(result2) : result2;
  }
  let wrappedFn = fn;
  if (arr !== self2) {
    if (needsWrap) {
      wrappedFn = function(item, index2) {
        return fn.call(this, toReactive(item), index2, self2);
      };
    } else if (fn.length > 2) {
      wrappedFn = function(item, index2) {
        return fn.call(this, item, index2, self2);
      };
    }
  }
  const result = methodFn.call(arr, wrappedFn, thisArg);
  return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self2, method, fn, args) {
  const arr = shallowReadArray(self2);
  let wrappedFn = fn;
  if (arr !== self2) {
    if (!isShallow(self2)) {
      wrappedFn = function(acc, item, index2) {
        return fn.call(this, acc, toReactive(item), index2, self2);
      };
    } else if (fn.length > 3) {
      wrappedFn = function(acc, item, index2) {
        return fn.call(this, acc, item, index2, self2);
      };
    }
  }
  return arr[method](wrappedFn, ...args);
}
function searchProxy(self2, method, args) {
  const arr = toRaw(self2);
  track(arr, "iterate", ARRAY_ITERATE_KEY);
  const res = arr[method](...args);
  if ((res === -1 || res === false) && isProxy(args[0])) {
    args[0] = toRaw(args[0]);
    return arr[method](...args);
  }
  return res;
}
function noTracking(self2, method, args = []) {
  pauseTracking();
  startBatch();
  const res = toRaw(self2)[method].apply(self2, args);
  endBatch();
  resetTracking();
  return res;
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
function hasOwnProperty(key) {
  if (!isSymbol(key)) key = String(key);
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    if (key === "__v_skip") return target["__v_skip"];
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray$1(target);
    if (!isReadonly2) {
      let fn;
      if (targetIsArray && (fn = arrayInstrumentations[key])) {
        return fn;
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(
      target,
      key,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      isRef(target) ? target : receiver
    );
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray$1(target) && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          return false;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = isArray$1(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(
      target,
      key,
      value,
      isRef(target) ? target : receiver
    );
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray$1(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    return true;
  }
  deleteProperty(target, key) {
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value) => value;
const getProto = (v2) => Reflect.getPrototypeOf(v2);
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations(readonly2, shallow) {
  const instrumentations = {
    get(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "get", key);
        }
        track(rawTarget, "get", rawKey);
      }
      const { has } = getProto(rawTarget);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    },
    get size() {
      const target = this["__v_raw"];
      !readonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
      return Reflect.get(target, "size", target);
    },
    has(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "has", key);
        }
        track(rawTarget, "has", rawKey);
      }
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    },
    forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      !readonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    }
  };
  extend(
    instrumentations,
    readonly2 ? {
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear")
    } : {
      add(value) {
        if (!shallow && !isShallow(value) && !isReadonly(value)) {
          value = toRaw(value);
        }
        const target = toRaw(this);
        const proto = getProto(target);
        const hadKey = proto.has.call(target, value);
        if (!hadKey) {
          target.add(value);
          trigger(target, "add", value, value);
        }
        return this;
      },
      set(key, value) {
        if (!shallow && !isShallow(value) && !isReadonly(value)) {
          value = toRaw(value);
        }
        const target = toRaw(this);
        const { has, get } = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has.call(target, key);
        }
        const oldValue = get.call(target, key);
        target.set(key, value);
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value);
        }
        return this;
      },
      delete(key) {
        const target = toRaw(this);
        const { has, get } = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has.call(target, key);
        }
        get ? get.call(target, key) : void 0;
        const result = target.delete(key);
        if (hadKey) {
          trigger(target, "delete", key, void 0);
        }
        return result;
      },
      clear() {
        const target = toRaw(this);
        const hadItems = target.size !== 0;
        const result = target.clear();
        if (hadItems) {
          trigger(
            target,
            "clear",
            void 0,
            void 0
          );
        }
        return result;
      }
    }
  );
  const iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ];
  iteratorMethods.forEach((method) => {
    instrumentations[method] = createIterableMethod(method, readonly2, shallow);
  });
  return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = createInstrumentations(isReadonly2, shallow);
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return value ? !!value["__v_raw"] : false;
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) {
    def(value, "__v_skip", true);
  }
  return value;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
function isRef(r2) {
  return r2 ? r2["__v_isRef"] === true : false;
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, isShallow2) {
    this.dep = new Dep();
    this["__v_isRef"] = true;
    this["__v_isShallow"] = false;
    this._rawValue = isShallow2 ? value : toRaw(value);
    this._value = isShallow2 ? value : toReactive(value);
    this["__v_isShallow"] = isShallow2;
  }
  get value() {
    {
      this.dep.track();
    }
    return this._value;
  }
  set value(newValue) {
    const oldValue = this._rawValue;
    const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
    newValue = useDirectValue ? newValue : toRaw(newValue);
    if (hasChanged(newValue, oldValue)) {
      this._rawValue = newValue;
      this._value = useDirectValue ? newValue : toReactive(newValue);
      {
        this.dep.trigger();
      }
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
function toRefs(object) {
  const ret = isArray$1(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = propertyToRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this["__v_isRef"] = true;
    this._value = void 0;
  }
  get value() {
    const val = this._object[this._key];
    return this._value = val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(toRaw(this._object), this._key);
  }
}
function propertyToRef(source, key, defaultValue) {
  const val = source[key];
  return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
}
class ComputedRefImpl {
  constructor(fn, setter, isSSR) {
    this.fn = fn;
    this.setter = setter;
    this._value = void 0;
    this.dep = new Dep(this);
    this.__v_isRef = true;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 16;
    this.globalVersion = globalVersion - 1;
    this.next = void 0;
    this.effect = this;
    this["__v_isReadonly"] = !setter;
    this.isSSR = isSSR;
  }
  /**
   * @internal
   */
  notify() {
    this.flags |= 16;
    if (!(this.flags & 8) && // avoid infinite self recursion
    activeSub !== this) {
      batch(this, true);
      return true;
    }
  }
  get value() {
    const link = this.dep.track();
    refreshComputed(this);
    if (link) {
      link.version = this.dep.version;
    }
    return this._value;
  }
  set value(newValue) {
    if (this.setter) {
      this.setter(newValue);
    }
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  if (isFunction(getterOrOptions)) {
    getter = getterOrOptions;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, isSSR);
  return cRef;
}
const INITIAL_WATCHER_VALUE = {};
const cleanupMap = /* @__PURE__ */ new WeakMap();
let activeWatcher = void 0;
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
  if (owner) {
    let cleanups = cleanupMap.get(owner);
    if (!cleanups) cleanupMap.set(owner, cleanups = []);
    cleanups.push(cleanupFn);
  }
}
function watch$1(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, once, scheduler, augmentJob, call } = options;
  const reactiveGetter = (source2) => {
    if (deep) return source2;
    if (isShallow(source2) || deep === false || deep === 0)
      return traverse(source2, 1);
    return traverse(source2);
  };
  let effect2;
  let getter;
  let cleanup;
  let boundCleanup;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if (isArray$1(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s2) => isReactive(s2) || isShallow(s2));
    getter = () => source.map((s2) => {
      if (isRef(s2)) {
        return s2.value;
      } else if (isReactive(s2)) {
        return reactiveGetter(s2);
      } else if (isFunction(s2)) {
        return call ? call(s2, 2) : s2();
      } else ;
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = call ? () => call(source, 2) : source;
    } else {
      getter = () => {
        if (cleanup) {
          pauseTracking();
          try {
            cleanup();
          } finally {
            resetTracking();
          }
        }
        const currentEffect = activeWatcher;
        activeWatcher = effect2;
        try {
          return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
        } finally {
          activeWatcher = currentEffect;
        }
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    const depth = deep === true ? Infinity : deep;
    getter = () => traverse(baseGetter(), depth);
  }
  const scope = getCurrentScope();
  const watchHandle = () => {
    effect2.stop();
    if (scope && scope.active) {
      remove$1(scope.effects, effect2);
    }
  };
  if (once && cb) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      watchHandle();
    };
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = (immediateFirstRun) => {
    if (!(effect2.flags & 1) || !effect2.dirty && !immediateFirstRun) {
      return;
    }
    if (cb) {
      const newValue = effect2.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v2, i2) => hasChanged(v2, oldValue[i2])) : hasChanged(newValue, oldValue))) {
        if (cleanup) {
          cleanup();
        }
        const currentWatcher = activeWatcher;
        activeWatcher = effect2;
        try {
          const args = [
            newValue,
            // pass undefined as the old value when it's changed for the first time
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
            boundCleanup
          ];
          oldValue = newValue;
          call ? call(cb, 3, args) : (
            // @ts-expect-error
            cb(...args)
          );
        } finally {
          activeWatcher = currentWatcher;
        }
      }
    } else {
      effect2.run();
    }
  };
  if (augmentJob) {
    augmentJob(job);
  }
  effect2 = new ReactiveEffect(getter);
  effect2.scheduler = scheduler ? () => scheduler(job, false) : job;
  boundCleanup = (fn) => onWatcherCleanup(fn, false, effect2);
  cleanup = effect2.onStop = () => {
    const cleanups = cleanupMap.get(effect2);
    if (cleanups) {
      if (call) {
        call(cleanups, 4);
      } else {
        for (const cleanup2 of cleanups) cleanup2();
      }
      cleanupMap.delete(effect2);
    }
  };
  if (cb) {
    if (immediate) {
      job(true);
    } else {
      oldValue = effect2.run();
    }
  } else if (scheduler) {
    scheduler(job.bind(null, true), true);
  } else {
    effect2.run();
  }
  watchHandle.pause = effect2.pause.bind(effect2);
  watchHandle.resume = effect2.resume.bind(effect2);
  watchHandle.stop = watchHandle;
  return watchHandle;
}
function traverse(value, depth = Infinity, seen2) {
  if (depth <= 0 || !isObject(value) || value["__v_skip"]) {
    return value;
  }
  seen2 = seen2 || /* @__PURE__ */ new Set();
  if (seen2.has(value)) {
    return value;
  }
  seen2.add(value);
  depth--;
  if (isRef(value)) {
    traverse(value.value, depth, seen2);
  } else if (isArray$1(value)) {
    for (let i2 = 0; i2 < value.length; i2++) {
      traverse(value[i2], depth, seen2);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v2) => {
      traverse(v2, depth, seen2);
    });
  } else if (isPlainObject$1(value)) {
    for (const key in value) {
      traverse(value[key], depth, seen2);
    }
    for (const key of Object.getOwnPropertySymbols(value)) {
      if (Object.prototype.propertyIsEnumerable.call(value, key)) {
        traverse(value[key], depth, seen2);
      }
    }
  }
  return value;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const stack = [];
let isWarning = false;
function warn$1(msg, ...args) {
  if (isWarning) return;
  isWarning = true;
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        msg + args.map((a2) => {
          var _a, _b;
          return (_b = (_a = a2.toString) == null ? void 0 : _a.call(a2)) != null ? _b : JSON.stringify(a2);
        }).join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
  isWarning = false;
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i2) => {
    logs.push(...i2 === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
function callWithErrorHandling(fn, instance, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  if (isArray$1(fn)) {
    const values = [];
    for (let i2 = 0; i2 < fn.length; i2++) {
      values.push(callWithAsyncErrorHandling(fn[i2], instance, type, args));
    }
    return values;
  }
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  const { errorHandler: errorHandler2, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = `https://vuejs.org/error-reference/#runtime-${type}`;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i2 = 0; i2 < errorCapturedHooks.length; i2++) {
          if (errorCapturedHooks[i2](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    if (errorHandler2) {
      pauseTracking();
      callWithErrorHandling(errorHandler2, null, 10, [
        err,
        exposedInstance,
        errorInfo
      ]);
      resetTracking();
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
  if (throwInProd) {
    throw err;
  } else {
    console.error(err);
  }
}
const queue = [];
let flushIndex = -1;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex$1(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.flags & 2) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!(job.flags & 1)) {
    const jobId = getId(job);
    const lastJob = queue[queue.length - 1];
    if (!lastJob || // fast path when the job id is larger than the tail
    !(job.flags & 2) && jobId >= getId(lastJob)) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex$1(jobId), 0, job);
    }
    job.flags |= 1;
    queueFlush();
  }
}
function queueFlush() {
  if (!currentFlushPromise) {
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray$1(cb)) {
    if (activePostFlushCbs && cb.id === -1) {
      activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
    } else if (!(cb.flags & 1)) {
      pendingPostFlushCbs.push(cb);
      cb.flags |= 1;
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen2, i2 = flushIndex + 1) {
  for (; i2 < queue.length; i2++) {
    const cb = queue[i2];
    if (cb && cb.flags & 2) {
      if (instance && cb.id !== instance.uid) {
        continue;
      }
      queue.splice(i2, 1);
      i2--;
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      cb();
      if (!(cb.flags & 4)) {
        cb.flags &= -2;
      }
    }
  }
}
function flushPostFlushCbs(seen2) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort(
      (a2, b2) => getId(a2) - getId(b2)
    );
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      const cb = activePostFlushCbs[postFlushIndex];
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      if (!(cb.flags & 8)) cb();
      cb.flags &= -2;
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen2) {
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && !(job.flags & 8)) {
        if (false) ;
        if (job.flags & 4) {
          job.flags &= ~1;
        }
        callWithErrorHandling(
          job,
          job.i,
          job.i ? 15 : 14
        );
        if (!(job.flags & 4)) {
          job.flags &= ~1;
        }
      }
    }
  } finally {
    for (; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job) {
        job.flags &= -2;
      }
    }
    flushIndex = -1;
    queue.length = 0;
    flushPostFlushCbs();
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs();
    }
  }
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx) return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function withDirectives(vnode, directives) {
  if (currentRenderingInstance === null) {
    return vnode;
  }
  const instance = getComponentPublicInstance(currentRenderingInstance);
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i2 = 0; i2 < directives.length; i2++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i2];
    if (dir) {
      if (isFunction(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i2 = 0; i2 < bindings.length; i2++) {
    const binding = bindings[i2];
    if (oldBindings) {
      binding.oldValue = oldBindings[i2].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
const TeleportEndKey = Symbol("_vte");
const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
const isTeleportDeferred = (props) => props && (props.defer || props.defer === "");
const isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
const isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
const resolveTarget = (props, select) => {
  const targetSelector = props && props.to;
  if (isString(targetSelector)) {
    if (!select) {
      return null;
    } else {
      const target = select(targetSelector);
      return target;
    }
  } else {
    return targetSelector;
  }
};
const TeleportImpl = {
  name: "Teleport",
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
    const {
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      o: { insert, querySelector, createText, createComment }
    } = internals;
    const disabled = isTeleportDisabled(n2.props);
    let { shapeFlag, children, dynamicChildren } = n2;
    if (n1 == null) {
      const placeholder = n2.el = createText("");
      const mainAnchor = n2.anchor = createText("");
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      const mount = (container2, anchor2) => {
        if (shapeFlag & 16) {
          if (parentComponent && parentComponent.isCE) {
            parentComponent.ce._teleportTarget = container2;
          }
          mountChildren(
            children,
            container2,
            anchor2,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      };
      const mountToTarget = () => {
        const target = n2.target = resolveTarget(n2.props, querySelector);
        const targetAnchor = prepareAnchor(target, n2, createText, insert);
        if (target) {
          if (namespace !== "svg" && isTargetSVG(target)) {
            namespace = "svg";
          } else if (namespace !== "mathml" && isTargetMathML(target)) {
            namespace = "mathml";
          }
          if (!disabled) {
            mount(target, targetAnchor);
            updateCssVars(n2, false);
          }
        }
      };
      if (disabled) {
        mount(container, mainAnchor);
        updateCssVars(n2, true);
      }
      if (isTeleportDeferred(n2.props)) {
        n2.el.__isMounted = false;
        queuePostRenderEffect(() => {
          mountToTarget();
          delete n2.el.__isMounted;
        }, parentSuspense);
      } else {
        mountToTarget();
      }
    } else {
      if (isTeleportDeferred(n2.props) && n1.el.__isMounted === false) {
        queuePostRenderEffect(() => {
          TeleportImpl.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        }, parentSuspense);
        return;
      }
      n2.el = n1.el;
      n2.targetStart = n1.targetStart;
      const mainAnchor = n2.anchor = n1.anchor;
      const target = n2.target = n1.target;
      const targetAnchor = n2.targetAnchor = n1.targetAnchor;
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      if (namespace === "svg" || isTargetSVG(target)) {
        namespace = "svg";
      } else if (namespace === "mathml" || isTargetMathML(target)) {
        namespace = "mathml";
      }
      if (dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          currentContainer,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(
          n1,
          n2,
          currentContainer,
          currentAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          false
        );
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(
            n2,
            container,
            mainAnchor,
            internals,
            1
          );
        } else {
          if (n2.props && n1.props && n2.props.to !== n1.props.to) {
            n2.props.to = n1.props.to;
          }
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = n2.target = resolveTarget(
            n2.props,
            querySelector
          );
          if (nextTarget) {
            moveTeleport(
              n2,
              nextTarget,
              null,
              internals,
              0
            );
          }
        } else if (wasDisabled) {
          moveTeleport(
            n2,
            target,
            targetAnchor,
            internals,
            1
          );
        }
      }
      updateCssVars(n2, disabled);
    }
  },
  remove(vnode, parentComponent, parentSuspense, { um: unmount, o: { remove: hostRemove } }, doRemove) {
    const {
      shapeFlag,
      children,
      anchor,
      targetStart,
      targetAnchor,
      target,
      props
    } = vnode;
    if (target) {
      hostRemove(targetStart);
      hostRemove(targetAnchor);
    }
    doRemove && hostRemove(anchor);
    if (shapeFlag & 16) {
      const shouldRemove = doRemove || !isTeleportDisabled(props);
      for (let i2 = 0; i2 < children.length; i2++) {
        const child = children[i2];
        unmount(
          child,
          parentComponent,
          parentSuspense,
          shouldRemove,
          !!child.dynamicChildren
        );
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  const { el, anchor, shapeFlag, children, props } = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props)) {
    if (shapeFlag & 16) {
      for (let i2 = 0; i2 < children.length; i2++) {
        move(
          children[i2],
          container,
          parentAnchor,
          2
        );
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {
  o: { nextSibling, parentNode, querySelector, insert, createText }
}, hydrateChildren) {
  const target = vnode.target = resolveTarget(
    vnode.props,
    querySelector
  );
  if (target) {
    const disabled = isTeleportDisabled(vnode.props);
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (disabled) {
        vnode.anchor = hydrateChildren(
          nextSibling(node),
          vnode,
          parentNode(node),
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
        vnode.targetStart = targetNode;
        vnode.targetAnchor = targetNode && nextSibling(targetNode);
      } else {
        vnode.anchor = nextSibling(node);
        let targetAnchor = targetNode;
        while (targetAnchor) {
          if (targetAnchor && targetAnchor.nodeType === 8) {
            if (targetAnchor.data === "teleport start anchor") {
              vnode.targetStart = targetAnchor;
            } else if (targetAnchor.data === "teleport anchor") {
              vnode.targetAnchor = targetAnchor;
              target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
              break;
            }
          }
          targetAnchor = nextSibling(targetAnchor);
        }
        if (!vnode.targetAnchor) {
          prepareAnchor(target, vnode, createText, insert);
        }
        hydrateChildren(
          targetNode && nextSibling(targetNode),
          vnode,
          target,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      }
    }
    updateCssVars(vnode, disabled);
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
function updateCssVars(vnode, isDisabled) {
  const ctx = vnode.ctx;
  if (ctx && ctx.ut) {
    let node, anchor;
    if (isDisabled) {
      node = vnode.el;
      anchor = vnode.anchor;
    } else {
      node = vnode.targetStart;
      anchor = vnode.targetAnchor;
    }
    while (node && node !== anchor) {
      if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
      node = node.nextSibling;
    }
    ctx.ut();
  }
}
function prepareAnchor(target, vnode, createText, insert) {
  const targetStart = vnode.targetStart = createText("");
  const targetAnchor = vnode.targetAnchor = createText("");
  targetStart[TeleportEndKey] = targetAnchor;
  if (target) {
    insert(targetStart, target);
    insert(targetAnchor, target);
  }
  return targetAnchor;
}
const leaveCbKey = Symbol("_leaveCb");
const enterCbKey$1 = Symbol("_enterCb");
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionPropsValidators = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: TransitionHookValidator,
  onEnter: TransitionHookValidator,
  onAfterEnter: TransitionHookValidator,
  onEnterCancelled: TransitionHookValidator,
  // leave
  onBeforeLeave: TransitionHookValidator,
  onLeave: TransitionHookValidator,
  onAfterLeave: TransitionHookValidator,
  onLeaveCancelled: TransitionHookValidator,
  // appear
  onBeforeAppear: TransitionHookValidator,
  onAppear: TransitionHookValidator,
  onAfterAppear: TransitionHookValidator,
  onAppearCancelled: TransitionHookValidator
};
const recursiveGetSubtree = (instance) => {
  const subTree = instance.subTree;
  return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
};
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: BaseTransitionPropsValidators,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      const child = findNonCommentChild(children);
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getInnerChild$1(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      let enterHooks = resolveTransitionHooks(
        innerChild,
        rawProps,
        state,
        instance,
        // #11061, ensure enterHooks is fresh after clone
        (hooks) => enterHooks = hooks
      );
      if (innerChild.type !== Comment) {
        setTransitionHooks(innerChild, enterHooks);
      }
      let oldInnerChild = instance.subTree && getInnerChild$1(instance.subTree);
      if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(innerChild, oldInnerChild) && recursiveGetSubtree(instance).type !== Comment) {
        let leavingHooks = resolveTransitionHooks(
          oldInnerChild,
          rawProps,
          state,
          instance
        );
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in" && innerChild.type !== Comment) {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            if (!(instance.job.flags & 8)) {
              instance.update();
            }
            delete leavingHooks.afterLeave;
            oldInnerChild = void 0;
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(
              state,
              oldInnerChild
            );
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el[leaveCbKey] = () => {
              earlyRemove();
              el[leaveCbKey] = void 0;
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
            enterHooks.delayedLeave = () => {
              delayedLeave();
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
          };
        } else {
          oldInnerChild = void 0;
        }
      } else if (oldInnerChild) {
        oldInnerChild = void 0;
      }
      return child;
    };
  }
};
function findNonCommentChild(children) {
  let child = children[0];
  if (children.length > 1) {
    for (const c2 of children) {
      if (c2.type !== Comment) {
        child = c2;
        break;
      }
    }
  }
  return child;
}
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance, postClone) {
  const {
    appear,
    mode,
    persisted = false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled
  } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(
      hook,
      instance,
      9,
      args
    );
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook2(hook, args);
    if (isArray$1(hook)) {
      if (hook.every((hook2) => hook2.length <= 1)) done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el[leaveCbKey]) {
        el[leaveCbKey](
          true
          /* cancelled */
        );
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
        leavingVNode.el[leaveCbKey]();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el[enterCbKey$1] = (cancelled) => {
        if (called) return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el[enterCbKey$1] = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el[enterCbKey$1]) {
        el[enterCbKey$1](
          true
          /* cancelled */
        );
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = el[leaveCbKey] = (cancelled) => {
        if (called) return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el[leaveCbKey] = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      const hooks2 = resolveTransitionHooks(
        vnode2,
        props,
        state,
        instance,
        postClone
      );
      if (postClone) postClone(hooks2);
      return hooks2;
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getInnerChild$1(vnode) {
  if (!isKeepAlive(vnode)) {
    if (isTeleport(vnode.type) && vnode.children) {
      return findNonCommentChild(vnode.children);
    }
    return vnode;
  }
  if (vnode.component) {
    return vnode.component.subTree;
  }
  const { shapeFlag, children } = vnode;
  if (children) {
    if (shapeFlag & 16) {
      return children[0];
    }
    if (shapeFlag & 32 && isFunction(children.default)) {
      return children.default();
    }
  }
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    vnode.transition = hooks;
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i2 = 0; i2 < children.length; i2++) {
    let child = children[i2];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i2);
    if (child.type === Fragment) {
      if (child.patchFlag & 128) keyedFragmentCount++;
      ret = ret.concat(
        getTransitionRawChildren(child.children, keepComment, key)
      );
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i2 = 0; i2 < ret.length; i2++) {
      ret[i2].patchFlag = -2;
    }
  }
  return ret;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
  return isFunction(options) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
}
function markAsyncBoundary(instance) {
  instance.ids = [instance.ids[0] + instance.ids[2]++ + "-", 0, 0];
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray$1(rawRef)) {
    rawRef.forEach(
      (r2, i2) => setRef(
        r2,
        oldRawRef && (isArray$1(oldRawRef) ? oldRawRef[i2] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) {
      setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
    }
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref3 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  const rawSetupState = toRaw(setupState);
  const canSetSetupRef = setupState === EMPTY_OBJ ? () => false : (key) => {
    return hasOwn(rawSetupState, key);
  };
  if (oldRef != null && oldRef !== ref3) {
    if (isString(oldRef)) {
      refs[oldRef] = null;
      if (canSetSetupRef(oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction(ref3)) {
    callWithErrorHandling(ref3, owner, 12, [value, refs]);
  } else {
    const _isString = isString(ref3);
    const _isRef = isRef(ref3);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? canSetSetupRef(ref3) ? setupState[ref3] : refs[ref3] : ref3.value;
          if (isUnmount) {
            isArray$1(existing) && remove$1(existing, refValue);
          } else {
            if (!isArray$1(existing)) {
              if (_isString) {
                refs[ref3] = [refValue];
                if (canSetSetupRef(ref3)) {
                  setupState[ref3] = refs[ref3];
                }
              } else {
                ref3.value = [refValue];
                if (rawRef.k) refs[rawRef.k] = ref3.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref3] = value;
          if (canSetSetupRef(ref3)) {
            setupState[ref3] = value;
          }
        } else if (_isRef) {
          ref3.value = value;
          if (rawRef.k) refs[rawRef.k] = value;
        } else ;
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    }
  }
}
getGlobalThis().requestIdleCallback || ((cb) => setTimeout(cb, 1));
getGlobalThis().cancelIdleCallback || ((id) => clearTimeout(id));
const isAsyncWrapper = (i2) => !!i2.type.__asyncLoader;
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove$1(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      pauseTracking();
      const reset = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      reset();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => {
  if (!isInSSRComponentSetup || lifecycle === "sp") {
    injectHook(lifecycle, (...args) => hook(...args), target);
  }
};
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook(
  "bu"
);
const onUpdated = createHook("u");
const onBeforeUnmount = createHook(
  "bum"
);
const onUnmounted = createHook("um");
const onServerPrefetch = createHook(
  "sp"
);
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    {
      const selfName = getComponentName(
        Component,
        false
      );
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type] || Component[type], name) || // global registration
      resolve(instance.appContext[type], name)
    );
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function renderList(source, renderItem, cache, index2) {
  let ret;
  const cached = cache;
  const sourceIsArray = isArray$1(source);
  if (sourceIsArray || isString(source)) {
    const sourceIsReactiveArray = sourceIsArray && isReactive(source);
    let needsWrap = false;
    let isReadonlySource = false;
    if (sourceIsReactiveArray) {
      needsWrap = !isShallow(source);
      isReadonlySource = isReadonly(source);
      source = shallowReadArray(source);
    }
    ret = new Array(source.length);
    for (let i2 = 0, l2 = source.length; i2 < l2; i2++) {
      ret[i2] = renderItem(
        needsWrap ? isReadonlySource ? toReadonly(toReactive(source[i2])) : toReactive(source[i2]) : source[i2],
        i2,
        void 0,
        cached
      );
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i2 = 0; i2 < source; i2++) {
      ret[i2] = renderItem(i2 + 1, i2, void 0, cached);
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(
        source,
        (item, i2) => renderItem(item, i2, void 0, cached)
      );
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i2 = 0, l2 = keys.length; i2 < l2; i2++) {
        const key = keys[i2];
        ret[i2] = renderItem(source[key], key, i2, cached);
      }
    }
  } else {
    ret = [];
  }
  return ret;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.ce || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.ce) {
    return openBlock(), createBlock(
      Fragment,
      null,
      [createVNode("slot", props, fallback)],
      64
    );
  }
  let slot = slots[name];
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const slotKey = props.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  validSlotContent && validSlotContent.key;
  const rendered = createBlock(
    Fragment,
    {
      key: (slotKey && !isSymbol(slotKey) ? slotKey : `_${name}`) + // #7256 force differentiate fallback content from actual content
      (!validSlotContent && fallback ? "_fb" : "")
    },
    validSlotContent || [],
    validSlotContent && slots._ === 1 ? 64 : -2
  );
  if (rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
const getPublicInstance = (i2) => {
  if (!i2) return null;
  if (isStatefulComponent(i2)) return getComponentPublicInstance(i2);
  return getPublicInstance(i2.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i2) => i2,
    $el: (i2) => i2.vnode.el,
    $data: (i2) => i2.data,
    $props: (i2) => i2.props,
    $attrs: (i2) => i2.attrs,
    $slots: (i2) => i2.slots,
    $refs: (i2) => i2.refs,
    $parent: (i2) => getPublicInstance(i2.parent),
    $root: (i2) => getPublicInstance(i2.root),
    $host: (i2) => i2.ce,
    $emit: (i2) => i2.emit,
    $options: (i2) => resolveMergedOptions(i2),
    $forceUpdate: (i2) => i2.f || (i2.f = () => {
      queueJob(i2.update);
    }),
    $nextTick: (i2) => i2.n || (i2.n = nextTick.bind(i2.proxy)),
    $watch: (i2) => instanceWatch.bind(i2)
  })
);
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    if (key === "__v_skip") {
      return true;
    }
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    let normalizedProps;
    if (key[0] !== "$") {
      const n2 = accessCache[key];
      if (n2 !== void 0) {
        switch (n2) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
      ) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance.attrs, "get", "");
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else ;
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, propsOptions }
  }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
function normalizePropsOrEmits(props) {
  return isArray$1(props) ? props.reduce(
    (normalized, p2) => (normalized[p2] = null, normalized),
    {}
  ) : props;
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          ctx[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    if (!isObject(data)) ;
    else {
      instance.data = reactive(data);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c2 = computed({
        get,
        set
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c2.value,
        set: (v2) => c2.value = v2
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray$1(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray$1(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components) instance.components = components;
  if (directives) instance.directives = directives;
  if (serverPrefetch) {
    markAsyncBoundary(instance);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  if (isArray$1(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v2) => injected.value = v2
      });
    } else {
      ctx[key] = injected;
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(
    isArray$1(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type
  );
}
function createWatcher(raw, ctx, publicThis, key) {
  let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      {
        watch(getter, handler);
      }
    }
  } else if (isFunction(raw)) {
    {
      watch(getter, raw.bind(publicThis));
    }
  } else if (isObject(raw)) {
    if (isArray$1(raw)) {
      raw.forEach((r2) => createWatcher(r2, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else ;
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m2) => mergeOptions$1(resolved, m2, optionMergeStrategies, true)
      );
    }
    mergeOptions$1(resolved, base, optionMergeStrategies);
  }
  if (isObject(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions$1(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m2) => mergeOptions$1(to, m2, strats, true)
    );
  }
  for (const key in from) {
    if (asMixin && key === "expose") ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(
      isFunction(to) ? to.call(this, this) : to,
      isFunction(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray$1(raw)) {
    const res = {};
    for (let i2 = 0; i2 < raw.length; i2++) {
      res[raw[i2]] = raw[i2];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray$1(to) && isArray$1(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    const pluginCleanupFns = [];
    let isMounted = false;
    const app2 = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v2) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin)) ;
        else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app2, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app2, ...options);
        } else ;
        return app2;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app2;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app2;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app2;
      },
      mount(rootContainer, isHydrate, namespace) {
        if (!isMounted) {
          const vnode = app2._ceVNode || createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (namespace === true) {
            namespace = "svg";
          } else if (namespace === false) {
            namespace = void 0;
          }
          {
            render(vnode, rootContainer, namespace);
          }
          isMounted = true;
          app2._container = rootContainer;
          rootContainer.__vue_app__ = app2;
          return getComponentPublicInstance(vnode.component);
        }
      },
      onUnmount(cleanupFn) {
        pluginCleanupFns.push(cleanupFn);
      },
      unmount() {
        if (isMounted) {
          callWithAsyncErrorHandling(
            pluginCleanupFns,
            app2._instance,
            16
          );
          render(null, app2._container);
          delete app2._container.__vue_app__;
        }
      },
      provide(key, value) {
        context.provides[key] = value;
        return app2;
      },
      runWithContext(fn) {
        const lastApp = currentApp;
        currentApp = app2;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app2;
  };
}
let currentApp = null;
function provide(key, value) {
  if (!currentInstance) ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance || currentApp) {
    let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else ;
  }
}
function hasInjectionContext() {
  return !!(currentInstance || currentRenderingInstance || currentApp);
}
const internalObjectProto = {};
const createInternalObject = () => Object.create(internalObjectProto);
const isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = createInternalObject();
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
        let key = propsToUpdate[i2];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance.attrs, "set", "");
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i2 = 0; i2 < needCastKeys.length; i2++) {
      const key = needCastKeys[i2];
      props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !hasOwn(castValues, key)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          const reset = setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(
            null,
            props
          );
          reset();
        }
      } else {
        value = defaultValue;
      }
      if (instance.ce) {
        instance.ce._setProp(key, value);
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
const mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = asMixin ? mixinPropsCache : appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys) needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray$1(raw)) {
    for (let i2 = 0; i2 < raw.length; i2++) {
      const normalizedKey = camelize(raw[i2]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray$1(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
        const propType = prop.type;
        let shouldCast = false;
        let shouldCastTrue = true;
        if (isArray$1(propType)) {
          for (let index2 = 0; index2 < propType.length; ++index2) {
            const type = propType[index2];
            const typeName = isFunction(type) && type.name;
            if (typeName === "Boolean") {
              shouldCast = true;
              break;
            } else if (typeName === "String") {
              shouldCastTrue = false;
            }
          }
        } else {
          shouldCast = isFunction(propType) && propType.name === "Boolean";
        }
        prop[
          0
          /* shouldCast */
        ] = shouldCast;
        prop[
          1
          /* shouldCastTrue */
        ] = shouldCastTrue;
        if (shouldCast || hasOwn(prop, "default")) {
          needCastKeys.push(normalizedKey);
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$" && !isReservedProp(key)) {
    return true;
  }
  return false;
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => isArray$1(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot$1 = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (false) ;
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key)) continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot$1(key, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const assignSlots = (slots, children, optimized) => {
  for (const key in children) {
    if (optimized || !isInternalKey(key)) {
      slots[key] = children[key];
    }
  }
};
const initSlots = (instance, children, optimized) => {
  const slots = instance.slots = createInternalObject();
  if (instance.vnode.shapeFlag & 32) {
    const cacheIndexes = children.__;
    if (cacheIndexes) def(slots, "__", cacheIndexes, true);
    const type = children._;
    if (type) {
      assignSlots(slots, children, optimized);
      if (optimized) {
        def(slots, "_", type, true);
      }
    } else {
      normalizeObjectSlots(children, slots);
    }
  } else if (children) {
    normalizeVNodeSlots(instance, children);
  }
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        assignSlots(slots, children, optimized);
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
        delete slots[key];
      }
    }
  }
};
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis();
  target.__VUE__ = true;
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref3, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, namespace);
        }
        break;
      case Fragment:
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        break;
      default:
        if (shapeFlag & 1) {
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 6) {
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 64) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (shapeFlag & 128) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else ;
    }
    if (ref3 != null && parentComponent) {
      setRef(ref3, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    } else if (ref3 == null && n1 && n1.ref != null) {
      setRef(n1.ref, null, parentSuspense, n1, true);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || ""),
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, namespace) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      namespace,
      n2.el,
      n2.anchor
    );
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    if (n2.type === "svg") {
      namespace = "svg";
    } else if (n2.type === "math") {
      namespace = "mathml";
    }
    if (n1 == null) {
      mountElement(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      patchElement(
        n1,
        n2,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      namespace,
      props && props.is,
      props
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(
        vnode.children,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(vnode, namespace),
        slotScopeIds,
        optimized
      );
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(el, key, null, props[key], namespace, parentComponent);
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value, namespace);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = needTransition(parentSuspense, transition);
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i2 = 0; i2 < slotScopeIds.length; i2++) {
        hostSetScopeId(el, slotScopeIds[i2]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
        const parentVNode = parentComponent.vnode;
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
    for (let i2 = start; i2 < children.length; i2++) {
      const child = children[i2] = optimized ? cloneIfMounted(children[i2]) : normalizeVNode(children[i2]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) {
      hostSetElementText(el, "");
    }
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds
      );
    } else if (!optimized) {
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds,
        false
      );
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, oldProps, newProps, parentComponent, namespace);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, namespace);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
            const key = propsToUpdate[i2];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, namespace, parentComponent);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, oldProps, newProps, parentComponent, namespace);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
    for (let i2 = 0; i2 < newChildren.length; i2++) {
      const oldVNode = oldChildren[i2];
      const newVNode = newChildren[i2];
      const container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64 | 128)) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        true
      );
    }
  };
  const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(
              el,
              key,
              oldProps[key],
              null,
              namespace,
              parentComponent
            );
          }
        }
      }
      for (const key in newProps) {
        if (isReservedProp(key)) continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, namespace, parentComponent);
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        // #10007
        // such fragment like `<></>` will be compiled into
        // a fragment which doesn't have a children.
        // In this case fallback to an empty array
        n2.children || [],
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        if (
          // #2080 if the stable fragment has a key, it's a <template v-for> that may
          //  get moved around. Make sure all root level vnodes inherit el.
          // #2134 or if it's a component root, it may also get moved around
          // as the component is being moved.
          n2.key != null || parentComponent && n2 === parentComponent.subTree
        ) {
          traverseStaticChildren(
            n1,
            n2,
            true
            /* shallow */
          );
        }
      } else {
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(
          n2,
          container,
          anchor,
          namespace,
          optimized
        );
      } else {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          optimized
        );
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
    const instance = initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    );
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      setupComponent(instance, false, optimized);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
    } else {
      setupRenderEffect(
        instance,
        initialVNode,
        container,
        anchor,
        parentSuspense,
        namespace,
        optimized
      );
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m: m2, parent, root, type } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        {
          if (root.ce && // @ts-expect-error _def is private
          root.ce._def.shadowRoot !== false) {
            root.ce._injectChildStyle(type);
          }
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            namespace
          );
          initialVNode.el = subTree.el;
        }
        if (m2) {
          queuePostRenderEffect(m2, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
            parentSuspense
          );
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u: u2, parent, vnode } = instance;
        {
          const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
          if (nonHydratedAsyncRoot) {
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            }
            nonHydratedAsyncRoot.asyncDep.then(() => {
              if (!instance.isUnmounted) {
                componentUpdateFn();
              }
            });
            return;
          }
        }
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          namespace
        );
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u2) {
          queuePostRenderEffect(u2, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, next, vnode),
            parentSuspense
          );
        }
      }
    };
    instance.scope.on();
    const effect2 = instance.effect = new ReactiveEffect(componentUpdateFn);
    instance.scope.off();
    const update = instance.update = effect2.run.bind(effect2);
    const job = instance.job = effect2.runIfDirty.bind(effect2);
    job.i = instance;
    job.id = instance.uid;
    effect2.scheduler = () => queueJob(job);
    toggleRecurse(instance, true);
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(instance);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i2;
    for (i2 = 0; i2 < commonLength; i2++) {
      const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
      patch(
        c1[i2],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
    if (oldLength > newLength) {
      unmountChildren(
        c1,
        parentComponent,
        parentSuspense,
        true,
        false,
        commonLength
      );
    } else {
      mountChildren(
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized,
        commonLength
      );
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let i2 = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i2 <= e1 && i2 <= e2) {
      const n1 = c1[i2];
      const n2 = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      i2++;
    }
    while (i2 <= e1 && i2 <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i2 > e1) {
      if (i2 <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i2 <= e2) {
          patch(
            null,
            c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          i2++;
        }
      }
    } else if (i2 > e2) {
      while (i2 <= e1) {
        unmount(c1[i2], parentComponent, parentSuspense, true);
        i2++;
      }
    } else {
      const s1 = i2;
      const s2 = i2;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i2 = s2; i2 <= e2; i2++) {
        const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i2);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i2 = 0; i2 < toBePatched; i2++) newIndexToOldIndexMap[i2] = 0;
      for (i2 = s1; i2 <= e1; i2++) {
        const prevChild = c1[i2];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i2 + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(
            prevChild,
            c2[newIndex],
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i2 = toBePatched - 1; i2 >= 0; i2--) {
        const nextIndex = s2 + i2;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i2] === 0) {
          patch(
            null,
            nextChild,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (moved) {
          if (j < 0 || i2 !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i2 = 0; i2 < children.length; i2++) {
        move(children[i2], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition2) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove22 = () => {
          if (vnode.ctx.isUnmounted) {
            hostRemove(el);
          } else {
            hostInsert(el, container, anchor);
          }
        };
        const performLeave = () => {
          leave(el, () => {
            remove22();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove22, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props,
      ref: ref3,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs,
      cacheIndex
    } = vnode;
    if (patchFlag === -2) {
      optimized = false;
    }
    if (ref3 != null) {
      pauseTracking();
      setRef(ref3, null, parentSuspense, vnode, true);
      resetTracking();
    }
    if (cacheIndex != null) {
      parentComponent.renderCache[cacheIndex] = void 0;
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(
          vnode,
          parentComponent,
          parentSuspense,
          internals,
          doRemove
        );
      } else if (dynamicChildren && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !dynamicChildren.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(
          dynamicChildren,
          parentComponent,
          parentSuspense,
          false,
          true
        );
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const {
      bum,
      scope,
      job,
      subTree,
      um,
      m: m2,
      a: a2,
      parent,
      slots: { __: slotCacheKeys }
    } = instance;
    invalidateMount(m2);
    invalidateMount(a2);
    if (bum) {
      invokeArrayFns(bum);
    }
    if (parent && isArray$1(slotCacheKeys)) {
      slotCacheKeys.forEach((v2) => {
        parent.renderCache[v2] = void 0;
      });
    }
    scope.stop();
    if (job) {
      job.flags |= 8;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i2 = start; i2 < children.length; i2++) {
      unmount(children[i2], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    const el = hostNextSibling(vnode.anchor || vnode.el);
    const teleportEnd = el && el[TeleportEndKey];
    return teleportEnd ? hostNextSibling(teleportEnd) : el;
  };
  let isFlushing = false;
  const render = (vnode, container, namespace) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(
        container._vnode || null,
        vnode,
        container,
        null,
        null,
        null,
        namespace
      );
    }
    container._vnode = vnode;
    if (!isFlushing) {
      isFlushing = true;
      flushPreFlushCbs();
      flushPostFlushCbs();
      isFlushing = false;
    }
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  return {
    render,
    hydrate,
    createApp: createAppAPI(render)
  };
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
  return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect: effect2, job }, allowed) {
  if (allowed) {
    effect2.flags |= 32;
    job.flags |= 4;
  } else {
    effect2.flags &= -33;
    job.flags &= -5;
  }
}
function needTransition(parentSuspense, transition) {
  return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray$1(ch1) && isArray$1(ch2)) {
    for (let i2 = 0; i2 < ch1.length; i2++) {
      const c1 = ch1[i2];
      let c2 = ch2[i2];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i2] = cloneIfMounted(ch2[i2]);
          c2.el = c1.el;
        }
        if (!shallow && c2.patchFlag !== -2)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        c2.el = c1.el;
      }
      if (c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i2, j, u2, v2, c2;
  const len = arr.length;
  for (i2 = 0; i2 < len; i2++) {
    const arrI = arr[i2];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i2] = j;
        result.push(i2);
        continue;
      }
      u2 = 0;
      v2 = result.length - 1;
      while (u2 < v2) {
        c2 = u2 + v2 >> 1;
        if (arr[result[c2]] < arrI) {
          u2 = c2 + 1;
        } else {
          v2 = c2;
        }
      }
      if (arrI < arr[result[u2]]) {
        if (u2 > 0) {
          p2[i2] = result[u2 - 1];
        }
        result[u2] = i2;
      }
    }
  }
  u2 = result.length;
  v2 = result[u2 - 1];
  while (u2-- > 0) {
    result[u2] = v2;
    v2 = p2[v2];
  }
  return result;
}
function locateNonHydratedAsyncRoot(instance) {
  const subComponent = instance.subTree.component;
  if (subComponent) {
    if (subComponent.asyncDep && !subComponent.asyncResolved) {
      return subComponent;
    } else {
      return locateNonHydratedAsyncRoot(subComponent);
    }
  }
}
function invalidateMount(hooks) {
  if (hooks) {
    for (let i2 = 0; i2 < hooks.length; i2++)
      hooks[i2].flags |= 8;
  }
}
const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    return ctx;
  }
};
function watchEffect(effect2, options) {
  return doWatch(effect2, null, options);
}
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, flush, once } = options;
  const baseWatchOptions = extend({}, options);
  const runsImmediately = cb && immediate || !cb && flush !== "post";
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else if (!runsImmediately) {
      const watchStopHandle = () => {
      };
      watchStopHandle.stop = NOOP;
      watchStopHandle.resume = NOOP;
      watchStopHandle.pause = NOOP;
      return watchStopHandle;
    }
  }
  const instance = currentInstance;
  baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
  let isPre = false;
  if (flush === "post") {
    baseWatchOptions.scheduler = (job) => {
      queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else if (flush !== "sync") {
    isPre = true;
    baseWatchOptions.scheduler = (job, isFirstRun) => {
      if (isFirstRun) {
        job();
      } else {
        queueJob(job);
      }
    };
  }
  baseWatchOptions.augmentJob = (job) => {
    if (cb) {
      job.flags |= 4;
    }
    if (isPre) {
      job.flags |= 2;
      if (instance) {
        job.id = instance.uid;
        job.i = instance;
      }
    }
  };
  const watchHandle = watch$1(source, cb, baseWatchOptions);
  if (isInSSRComponentSetup) {
    if (ssrCleanup) {
      ssrCleanup.push(watchHandle);
    } else if (runsImmediately) {
      watchHandle();
    }
  }
  return watchHandle;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i2 = 0; i2 < segments.length && cur; i2++) {
      cur = cur[segments[i2]];
    }
    return cur;
  };
}
const getModelModifiers = (props, modelName) => {
  return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted) return;
  const props = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modifiers = isModelListener2 && getModelModifiers(props, event.slice(7));
  if (modifiers) {
    if (modifiers.trim) {
      args = rawArgs.map((a2) => isString(a2) ? a2.trim() : a2);
    }
    if (modifiers.number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray$1(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render,
    renderCache,
    props,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  const prev = setCurrentRenderingInstance(instance);
  let result;
  let fallthroughAttrs;
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      const thisProxy = false ? new Proxy(proxyToUse, {
        get(target, key, receiver) {
          warn$1(
            `Property '${String(
              key
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          );
          return Reflect.get(target, key, receiver);
        }
      }) : proxyToUse;
      result = normalizeVNode(
        render.call(
          thisProxy,
          proxyToUse,
          renderCache,
          false ? shallowReadonly(props) : props,
          setupState,
          data,
          ctx
        )
      );
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if (false) ;
      result = normalizeVNode(
        render2.length > 1 ? render2(
          false ? shallowReadonly(props) : props,
          false ? {
            get attrs() {
              markAttrsAccessed();
              return shallowReadonly(attrs);
            },
            slots,
            emit: emit2
          } : { attrs, slots, emit: emit2 }
        ) : render2(
          false ? shallowReadonly(props) : props,
          null
        )
      );
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          );
        }
        root = cloneVNode(root, fallthroughAttrs, false, true);
      }
    }
  }
  if (vnode.dirs) {
    root = cloneVNode(root, null, false, true);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    setTransitionHooks(root, vnode.transition);
  }
  {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i2 = 0; i2 < dynamicProps.length; i2++) {
        const key = dynamicProps[i2];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i2 = 0; i2 < nextKeys.length; i2++) {
    const key = nextKeys[i2];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent) {
    const root = parent.subTree;
    if (root.suspense && root.suspense.activeBranch === vnode) {
      root.el = vnode.el;
    }
    if (root === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    } else {
      break;
    }
  }
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray$1(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
  isBlockTreeEnabled += value;
  if (value < 0 && currentBlock && inVOnce) {
    currentBlock.hasOnce = true;
  }
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
    )
  );
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({
  ref: ref3,
  ref_key,
  ref_for
}) => {
  if (typeof ref3 === "number") {
    ref3 = "" + ref3;
  }
  return ref3 != null ? isString(ref3) || isRef(ref3) || isFunction(ref3) ? { i: currentRenderingInstance, r: ref3, k: ref_key, f: !!ref_for } : ref3 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag = -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style: style2 } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject(style2)) {
      if (isProxy(style2) && !isArray$1(style2)) {
        style2 = extend({}, style2);
      }
      props.style = normalizeStyle(style2);
    }
  }
  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
  return createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props) {
  if (!props) return null;
  return isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
  const { props, ref: ref3, patchFlag, children, transition } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref3 ? isArray$1(ref3) ? ref3.concat(normalizeRef(extraProps)) : [ref3, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref3,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetStart: vnode.targetStart,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  if (transition && cloneTransition) {
    setTransitionHooks(
      cloned,
      transition.clone(cloned)
    );
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray$1(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (isVNode(child)) {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray$1(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !isInternalObject(children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i2 = 0; i2 < args.length; i2++) {
    const toMerge = args[i2];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray$1(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    ids: parent ? parent.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
  const g2 = getGlobalThis();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g2[key])) setters = g2[key] = [];
    setters.push(setter);
    return (v2) => {
      if (setters.length > 1) setters.forEach((set) => set(v2));
      else setters[0](v2);
    };
  };
  internalSetCurrentInstance = registerGlobalSetter(
    `__VUE_INSTANCE_SETTERS__`,
    (v2) => currentInstance = v2
  );
  setInSSRSetupState = registerGlobalSetter(
    `__VUE_SSR_SETTERS__`,
    (v2) => isInSSRComponentSetup = v2
  );
}
const setCurrentInstance = (instance) => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
  isSSR && setInSSRSetupState(isSSR);
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children, optimized || isSSR);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
  const { setup: setup2 } = Component;
  if (setup2) {
    pauseTracking();
    const setupContext = instance.setupContext = setup2.length > 1 ? createSetupContext(instance) : null;
    const reset = setCurrentInstance(instance);
    const setupResult = callWithErrorHandling(
      setup2,
      instance,
      0,
      [
        instance.props,
        setupContext
      ]
    );
    const isAsyncSetup = isPromise(setupResult);
    resetTracking();
    reset();
    if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) {
      markAsyncBoundary(instance);
    }
    if (isAsyncSetup) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult);
        }).catch((e2) => {
          handleError(e2, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult);
    }
  } else {
    finishComponentSetup(instance);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else ;
  finishComponentSetup(instance);
}
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    instance.render = Component.render || NOOP;
  }
  {
    const reset = setCurrentInstance(instance);
    pauseTracking();
    try {
      applyOptions(instance);
    } finally {
      resetTracking();
      reset();
    }
  }
}
const attrsProxyHandlers = {
  get(target, key) {
    track(target, "get", "");
    return target[key];
  }
};
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  {
    return {
      attrs: new Proxy(instance.attrs, attrsProxyHandlers),
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getComponentPublicInstance(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  } else {
    return instance.proxy;
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c2) => c2.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(
      instance.components || instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  const c2 = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
  return c2;
};
function h$4(type, propsOrChildren, children) {
  const l2 = arguments.length;
  if (l2 === 2) {
    if (isObject(propsOrChildren) && !isArray$1(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l2 > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l2 === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
const version = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let policy = void 0;
const tt$1 = typeof window !== "undefined" && window.trustedTypes;
if (tt$1) {
  try {
    policy = /* @__PURE__ */ tt$1.createPolicy("vue", {
      createHTML: (val) => val
    });
  } catch (e2) {
  }
}
const unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, namespace, is, props) => {
    const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent, anchor, namespace, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling)) break;
      }
    } else {
      templateContainer.innerHTML = unsafeToTrustedHTML(
        namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content
      );
      const template = templateContainer.content;
      if (namespace === "svg" || namespace === "mathml") {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent.firstChild,
      // last
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
const TRANSITION = "transition";
const ANIMATION = "animation";
const vtcKey = Symbol("_vtc");
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const TransitionPropsValidators = /* @__PURE__ */ extend(
  {},
  BaseTransitionPropsValidators,
  DOMTransitionPropsValidators
);
const decorate$1 = (t2) => {
  t2.displayName = "Transition";
  t2.props = TransitionPropsValidators;
  return t2;
};
const Transition = /* @__PURE__ */ decorate$1(
  (props, { slots }) => h$4(BaseTransition, resolveTransitionProps(props), slots)
);
const callHook = (hook, args = []) => {
  if (isArray$1(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray$1(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const {
    name = "v",
    type,
    duration,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`
  } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled
  } = baseProps;
  const finishEnter = (el, isAppear, done, isCancelled) => {
    el._enterCancelled = isCancelled;
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve2);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      if (!el._enterCancelled) {
        forceReflow();
        addTransitionClass(el, leaveActiveClass);
      } else {
        addTransitionClass(el, leaveActiveClass);
        forceReflow();
      }
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false, void 0, true);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true, void 0, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n2 = NumberOf(duration);
    return [n2, n2];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c2) => c2 && el.classList.add(c2));
  (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c2) => c2 && el.classList.remove(c2));
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el[vtcKey] = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout != null) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve2();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e2) => {
    if (e2.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
  const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
  const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(
    getStyleProperties(`${TRANSITION}Property`).toString()
  );
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d2, i2) => toMs(d2) + toMs(delays[i2])));
}
function toMs(s2) {
  if (s2 === "auto") return 0;
  return Number(s2.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
function patchClass(el, value, isSVG) {
  const transitionClasses = el[vtcKey];
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
const vShowOriginalDisplay = Symbol("_vod");
const vShowHidden = Symbol("_vsh");
const vShow = {
  beforeMount(el, { value }, { transition }) {
    el[vShowOriginalDisplay] = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue) return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el[vShowOriginalDisplay] : "none";
  el[vShowHidden] = !value;
}
const CSS_VAR_TEXT = Symbol("");
const displayRE = /(^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
  const style2 = el.style;
  const isCssString = isString(next);
  let hasControlledDisplay = false;
  if (next && !isCssString) {
    if (prev) {
      if (!isString(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style2, key, "");
          }
        }
      } else {
        for (const prevStyle of prev.split(";")) {
          const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
          if (next[key] == null) {
            setStyle(style2, key, "");
          }
        }
      }
    }
    for (const key in next) {
      if (key === "display") {
        hasControlledDisplay = true;
      }
      setStyle(style2, key, next[key]);
    }
  } else {
    if (isCssString) {
      if (prev !== next) {
        const cssVarText = style2[CSS_VAR_TEXT];
        if (cssVarText) {
          next += ";" + cssVarText;
        }
        style2.cssText = next;
        hasControlledDisplay = displayRE.test(next);
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
  }
  if (vShowOriginalDisplay in el) {
    el[vShowOriginalDisplay] = hasControlledDisplay ? style2.display : "";
    if (el[vShowHidden]) {
      style2.display = "none";
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style2, name, val) {
  if (isArray$1(val)) {
    val.forEach((v2) => setStyle(style2, name, v2));
  } else {
    if (val == null) val = "";
    if (name.startsWith("--")) {
      style2.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style2, name);
      if (importantRE.test(val)) {
        style2.setProperty(
          hyphenate(prefixed),
          val.replace(importantRE, ""),
          "important"
        );
      } else {
        style2[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style2, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style2) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i2 = 0; i2 < prefixes.length; i2++) {
    const prefixed = prefixes[i2] + name;
    if (prefixed in style2) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean = isSpecialBooleanAttr(key)) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (value == null || isBoolean && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(
        key,
        isBoolean ? "" : isSymbol(value) ? String(value) : value
      );
    }
  }
}
function patchDOMProp(el, key, value, parentComponent, attrName) {
  if (key === "innerHTML" || key === "textContent") {
    if (value != null) {
      el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
    }
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
    const newValue = value == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      el.type === "checkbox" ? "on" : ""
    ) : String(value);
    if (oldValue !== newValue || !("_value" in el)) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    el._value = value;
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e2) {
  }
  needRemove && el.removeAttribute(attrName || key);
}
function addEventListener$1(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
const veiKey = Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el[veiKey] || (el[veiKey] = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(
        nextValue,
        instance
      );
      addEventListener$1(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m2;
    while (m2 = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m2[0].length);
      options[m2[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p$5 = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p$5.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e2) => {
    if (!e2._vts) {
      e2._vts = Date.now();
    } else if (e2._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(
      patchStopImmediatePropagation(e2, invoker.value),
      instance,
      5,
      [e2]
    );
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e2, value) {
  if (isArray$1(value)) {
    const originalStop = e2.stopImmediatePropagation;
    e2.stopImmediatePropagation = () => {
      originalStop.call(e2);
      e2._stopped = true;
    };
    return value.map(
      (fn) => (e22) => !e22._stopped && fn && fn(e22)
    );
  } else {
    return value;
  }
}
const isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
  const isSVG = namespace === "svg";
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue);
    if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) {
      patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
    }
  } else if (
    // #11081 force set props for possible async custom element
    el._isVueCE && (/[A-Z]/.test(key) || !isString(nextValue))
  ) {
    patchDOMProp(el, camelize(key), nextValue, parentComponent, key);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && isNativeOn(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (key === "width" || key === "height") {
    const tag = el.tagName;
    if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
      return false;
    }
  }
  if (isNativeOn(key) && isString(value)) {
    return false;
  }
  return key in el;
}
const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const moveCbKey = Symbol("_moveCb");
const enterCbKey = Symbol("_enterCb");
const decorate = (t2) => {
  delete t2.props.mode;
  return t2;
};
const TransitionGroupImpl = /* @__PURE__ */ decorate({
  name: "TransitionGroup",
  props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevChildren;
    let children;
    onUpdated(() => {
      if (!prevChildren.length) {
        return;
      }
      const moveClass = props.moveClass || `${props.name || "v"}-move`;
      if (!hasCSSTransform(
        prevChildren[0].el,
        instance.vnode.el,
        moveClass
      )) {
        prevChildren = [];
        return;
      }
      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      const movedChildren = prevChildren.filter(applyTranslation);
      forceReflow();
      movedChildren.forEach((c2) => {
        const el = c2.el;
        const style2 = el.style;
        addTransitionClass(el, moveClass);
        style2.transform = style2.webkitTransform = style2.transitionDuration = "";
        const cb = el[moveCbKey] = (e2) => {
          if (e2 && e2.target !== el) {
            return;
          }
          if (!e2 || /transform$/.test(e2.propertyName)) {
            el.removeEventListener("transitionend", cb);
            el[moveCbKey] = null;
            removeTransitionClass(el, moveClass);
          }
        };
        el.addEventListener("transitionend", cb);
      });
      prevChildren = [];
    });
    return () => {
      const rawProps = toRaw(props);
      const cssTransitionProps = resolveTransitionProps(rawProps);
      let tag = rawProps.tag || Fragment;
      prevChildren = [];
      if (children) {
        for (let i2 = 0; i2 < children.length; i2++) {
          const child = children[i2];
          if (child.el && child.el instanceof Element) {
            prevChildren.push(child);
            setTransitionHooks(
              child,
              resolveTransitionHooks(
                child,
                cssTransitionProps,
                state,
                instance
              )
            );
            positionMap.set(
              child,
              child.el.getBoundingClientRect()
            );
          }
        }
      }
      children = slots.default ? getTransitionRawChildren(slots.default()) : [];
      for (let i2 = 0; i2 < children.length; i2++) {
        const child = children[i2];
        if (child.key != null) {
          setTransitionHooks(
            child,
            resolveTransitionHooks(child, cssTransitionProps, state, instance)
          );
        }
      }
      return createVNode(tag, null, children);
    };
  }
});
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c2) {
  const el = c2.el;
  if (el[moveCbKey]) {
    el[moveCbKey]();
  }
  if (el[enterCbKey]) {
    el[enterCbKey]();
  }
}
function recordPosition(c2) {
  newPositionMap.set(c2, c2.el.getBoundingClientRect());
}
function applyTranslation(c2) {
  const oldPos = positionMap.get(c2);
  const newPos = newPositionMap.get(c2);
  const dx = oldPos.left - newPos.left;
  const dy = oldPos.top - newPos.top;
  if (dx || dy) {
    const s2 = c2.el.style;
    s2.transform = s2.webkitTransform = `translate(${dx}px,${dy}px)`;
    s2.transitionDuration = "0s";
    return c2;
  }
}
function hasCSSTransform(el, root, moveClass) {
  const clone = el.cloneNode();
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.forEach((cls) => {
      cls.split(/\s+/).forEach((c2) => c2 && clone.classList.remove(c2));
    });
  }
  moveClass.split(/\s+/).forEach((c2) => c2 && clone.classList.add(c2));
  clone.style.display = "none";
  const container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);
  const { hasTransform } = getTransitionInfo(clone);
  container.removeChild(clone);
  return hasTransform;
}
const getModelAssigner = (vnode) => {
  const fn = vnode.props["onUpdate:modelValue"] || false;
  return isArray$1(fn) ? (value) => invokeArrayFns(fn, value) : fn;
};
function onCompositionStart(e2) {
  e2.target.composing = true;
}
function onCompositionEnd(e2) {
  const target = e2.target;
  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event("input"));
  }
}
const assignKey = Symbol("_assign");
const vModelText = {
  created(el, { modifiers: { lazy, trim, number } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    const castToNumber = number || vnode.props && vnode.props.type === "number";
    addEventListener$1(el, lazy ? "change" : "input", (e2) => {
      if (e2.target.composing) return;
      let domValue = el.value;
      if (trim) {
        domValue = domValue.trim();
      }
      if (castToNumber) {
        domValue = looseToNumber(domValue);
      }
      el[assignKey](domValue);
    });
    if (trim) {
      addEventListener$1(el, "change", () => {
        el.value = el.value.trim();
      });
    }
    if (!lazy) {
      addEventListener$1(el, "compositionstart", onCompositionStart);
      addEventListener$1(el, "compositionend", onCompositionEnd);
      addEventListener$1(el, "change", onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(el, { value }) {
    el.value = value == null ? "" : value;
  },
  beforeUpdate(el, { value, oldValue, modifiers: { lazy, trim, number } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (el.composing) return;
    const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? looseToNumber(el.value) : el.value;
    const newValue = value == null ? "" : value;
    if (elValue === newValue) {
      return;
    }
    if (document.activeElement === el && el.type !== "range") {
      if (lazy && value === oldValue) {
        return;
      }
      if (trim && el.value.trim() === newValue) {
        return;
      }
    }
    el.value = newValue;
  }
};
const vModelCheckbox = {
  // #4096 array checkboxes need to be deep traversed
  deep: true,
  created(el, _2, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    addEventListener$1(el, "change", () => {
      const modelValue = el._modelValue;
      const elementValue = getValue(el);
      const checked = el.checked;
      const assign2 = el[assignKey];
      if (isArray$1(modelValue)) {
        const index2 = looseIndexOf(modelValue, elementValue);
        const found = index2 !== -1;
        if (checked && !found) {
          assign2(modelValue.concat(elementValue));
        } else if (!checked && found) {
          const filtered = [...modelValue];
          filtered.splice(index2, 1);
          assign2(filtered);
        }
      } else if (isSet(modelValue)) {
        const cloned = new Set(modelValue);
        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }
        assign2(cloned);
      } else {
        assign2(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate(el, binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};
function setChecked(el, { value, oldValue }, vnode) {
  el._modelValue = value;
  let checked;
  if (isArray$1(value)) {
    checked = looseIndexOf(value, vnode.props.value) > -1;
  } else if (isSet(value)) {
    checked = value.has(vnode.props.value);
  } else {
    if (value === oldValue) return;
    checked = looseEqual(value, getCheckboxValue(el, true));
  }
  if (el.checked !== checked) {
    el.checked = checked;
  }
}
const vModelRadio = {
  created(el, { value }, vnode) {
    el.checked = looseEqual(value, vnode.props.value);
    el[assignKey] = getModelAssigner(vnode);
    addEventListener$1(el, "change", () => {
      el[assignKey](getValue(el));
    });
  },
  beforeUpdate(el, { value, oldValue }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (value !== oldValue) {
      el.checked = looseEqual(value, vnode.props.value);
    }
  }
};
const vModelSelect = {
  // <select multiple> value need to be deep traversed
  deep: true,
  created(el, { value, modifiers: { number } }, vnode) {
    const isSetModel = isSet(value);
    addEventListener$1(el, "change", () => {
      const selectedVal = Array.prototype.filter.call(el.options, (o2) => o2.selected).map(
        (o2) => number ? looseToNumber(getValue(o2)) : getValue(o2)
      );
      el[assignKey](
        el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]
      );
      el._assigning = true;
      nextTick(() => {
        el._assigning = false;
      });
    });
    el[assignKey] = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(el, { value }) {
    setSelected(el, value);
  },
  beforeUpdate(el, _binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
  },
  updated(el, { value }) {
    if (!el._assigning) {
      setSelected(el, value);
    }
  }
};
function setSelected(el, value) {
  const isMultiple = el.multiple;
  const isArrayValue = isArray$1(value);
  if (isMultiple && !isArrayValue && !isSet(value)) {
    return;
  }
  for (let i2 = 0, l2 = el.options.length; i2 < l2; i2++) {
    const option = el.options[i2];
    const optionValue = getValue(option);
    if (isMultiple) {
      if (isArrayValue) {
        const optionType = typeof optionValue;
        if (optionType === "string" || optionType === "number") {
          option.selected = value.some((v2) => String(v2) === String(optionValue));
        } else {
          option.selected = looseIndexOf(value, optionValue) > -1;
        }
      } else {
        option.selected = value.has(optionValue);
      }
    } else if (looseEqual(getValue(option), value)) {
      if (el.selectedIndex !== i2) el.selectedIndex = i2;
      return;
    }
  }
  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
}
function getValue(el) {
  return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
  const key = checked ? "_trueValue" : "_falseValue";
  return key in el ? el[key] : checked;
}
const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e2) => e2.stopPropagation(),
  prevent: (e2) => e2.preventDefault(),
  self: (e2) => e2.target !== e2.currentTarget,
  ctrl: (e2) => !e2.ctrlKey,
  shift: (e2) => !e2.shiftKey,
  alt: (e2) => !e2.altKey,
  meta: (e2) => !e2.metaKey,
  left: (e2) => "button" in e2 && e2.button !== 0,
  middle: (e2) => "button" in e2 && e2.button !== 1,
  right: (e2) => "button" in e2 && e2.button !== 2,
  exact: (e2, modifiers) => systemModifiers.some((m2) => e2[`${m2}Key`] && !modifiers.includes(m2))
};
const withModifiers = (fn, modifiers) => {
  const cache = fn._withMods || (fn._withMods = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = (event, ...args) => {
    for (let i2 = 0; i2 < modifiers.length; i2++) {
      const guard = modifierGuards[modifiers[i2]];
      if (guard && guard(event, modifiers)) return;
    }
    return fn(event, ...args);
  });
};
const keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
const withKeys = (fn, modifiers) => {
  const cache = fn._withKeys || (fn._withKeys = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = (event) => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = hyphenate(event.key);
    if (modifiers.some(
      (k2) => k2 === eventKey || keyNames[k2] === eventKey
    )) {
      return fn(event);
    }
  });
};
const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
let renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
const createApp = (...args) => {
  const app2 = ensureRenderer().createApp(...args);
  const { mount } = app2;
  app2.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container) return;
    const component = app2._component;
    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    if (container.nodeType === 1) {
      container.textContent = "";
    }
    const proxy = mount(container, false, resolveRootNamespace(container));
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app2;
};
function resolveRootNamespace(container) {
  if (container instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
    return "mathml";
  }
}
function normalizeContainer(container) {
  if (isString(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia2) => activePinia = pinia2;
const piniaSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject(o2) {
  return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia2 = markRaw({
    install(app2) {
      setActivePinia(pinia2);
      {
        pinia2._a = app2;
        app2.provide(piniaSymbol, pinia2);
        app2.config.globalProperties.$pinia = pinia2;
        toBeInstalled.forEach((plugin) => _p.push(plugin));
        toBeInstalled = [];
      }
    },
    use(plugin) {
      if (!this._a && true) {
        toBeInstalled.push(plugin);
      } else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia2;
}
const noop$1 = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop$1) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
const ACTION_MARKER = Symbol();
const ACTION_NAME = Symbol();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  } else if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign: assign$1 } = Object;
function isComputed(o2) {
  return !!(isRef(o2) && o2.effect);
}
function createOptionsStore(id, options, pinia2, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia2.state.value[id];
  let store;
  function setup2() {
    if (!initialState && true) {
      {
        pinia2.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia2.state.value[id]);
    return assign$1(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia2);
        const store2 = pinia2._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup2, options, pinia2, hot, true);
  return store;
}
function createSetupStore($id, setup2, options = {}, pinia2, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign$1({ actions: {} }, options);
  const $subscribeOptions = { deep: true };
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia2.state.value[$id];
  if (!isOptionsStore && !initialState && true) {
    {
      pinia2.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia2.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia2.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia2.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign$1($state, newState);
    });
  } : (
    /* istanbul ignore next */
    noop$1
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia2._s.delete($id);
  }
  const action = (fn, name = "") => {
    if (ACTION_MARKER in fn) {
      fn[ACTION_NAME] = name;
      return fn;
    }
    const wrappedAction = function() {
      setActivePinia(pinia2);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name: wrappedAction[ACTION_NAME],
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = fn.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
    wrappedAction[ACTION_MARKER] = true;
    wrappedAction[ACTION_NAME] = name;
    return wrappedAction;
  };
  const partialStore = {
    _p: pinia2,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia2.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign$1({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(partialStore);
  pinia2._s.set($id, store);
  const runWithContext = pinia2._a && pinia2._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia2._e.run(() => (scope = effectScope()).run(() => setup2({ action }))));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia2.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = action(prop, key);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  {
    assign$1(store, setupStore);
    assign$1(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia2.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign$1($state, state);
      });
    }
  });
  pinia2._p.forEach((extender) => {
    {
      assign$1(store, scope.run(() => extender({
        store,
        app: pinia2._a,
        pinia: pinia2,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineStore(idOrOptions, setup2, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup2 === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup2;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia2, hot) {
    const hasContext = hasInjectionContext();
    pinia2 = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    pinia2 || (hasContext ? inject(piniaSymbol, null) : null);
    if (pinia2)
      setActivePinia(pinia2);
    pinia2 = activePinia;
    if (!pinia2._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup2, options, pinia2);
      } else {
        createOptionsStore(id, options, pinia2);
      }
    }
    const store = pinia2._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
const isBrowser = typeof document !== "undefined";
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function isESModule(obj) {
  return obj.__esModule || obj[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  obj.default && isRouteComponent(obj.default);
}
const assign = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = isArray(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop = () => {
};
const isArray = Array.isArray;
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
  }
  return "" + text;
}
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const hashPos = location2.indexOf("#");
  let searchPos = location2.indexOf("?");
  if (hashPos < searchPos && hashPos >= 0) {
    searchPos = -1;
  }
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash: decode(hash)
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base) {
  if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
    return pathname;
  return pathname.slice(base.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a2, b2) {
  const aLastIndex = a2.matched.length - 1;
  const bLastIndex = b2.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a2.matched[aLastIndex], b2.matched[bLastIndex]) && isSameRouteLocationParams(a2.params, b2.params) && stringifyQuery2(a2.query) === stringifyQuery2(b2.query) && a2.hash === b2.hash;
}
function isSameRouteRecord(a2, b2) {
  return (a2.aliasOf || a2) === (b2.aliasOf || b2);
}
function isSameRouteLocationParams(a2, b2) {
  if (Object.keys(a2).length !== Object.keys(b2).length)
    return false;
  for (const key in a2) {
    if (!isSameRouteLocationParamsValue(a2[key], b2[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a2, b2) {
  return isArray(a2) ? isEquivalentArray(a2, b2) : isArray(b2) ? isEquivalentArray(b2, a2) : a2 === b2;
}
function isEquivalentArray(a2, b2) {
  return isArray(b2) ? a2.length === b2.length && a2.every((value, i2) => value === b2[i2]) : a2.length === 1 && a2[0] === b2;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  const lastToSegment = toSegments[toSegments.length - 1];
  if (lastToSegment === ".." || lastToSegment === ".") {
    toSegments.push("");
  }
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (segment === ".")
      continue;
    if (segment === "..") {
      if (position > 1)
        position--;
    } else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  // TODO: could we use a symbol in the future?
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base) {
  if (!base) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base = baseEl && baseEl.getAttribute("href") || "/";
      base = base.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base = "/";
    }
  }
  if (base[0] !== "/" && base[0] !== "#")
    base = "/" + base;
  return removeTrailingSlash(base);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location2) {
  return base.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base, location2) {
  const { pathname, search, hash } = location2;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path = stripBase(pathname, base);
  return path + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
  let listeners2 = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to = createCurrentLocation(base, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    }
    listeners2.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners2.push(callback);
    const teardown = () => {
      const index2 = listeners2.indexOf(callback);
      if (index2 > -1)
        listeners2.splice(index2, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const { history: history2 } = window;
    if (!history2.state)
      return;
    history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener, {
    passive: true
  });
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base) {
  const { history: history2, location: location2 } = window;
  const currentLocation = {
    value: createCurrentLocation(base, location2)
  };
  const historyState = { value: history2.state };
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      // the length is off by one, we need to decrease it
      position: history2.length - 1,
      replaced: true,
      // don't add a scroll as the user may have an anchor, and we want
      // scrollBehavior to be triggered without a saved position
      scroll: null
    }, true);
  }
  function changeLocation(to, state, replace2) {
    const hashIndex = base.indexOf("#");
    const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err) {
      {
        console.error(err);
      }
      location2[replace2 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data) {
    const state = assign({}, history2.state, buildState(
      historyState.value.back,
      // keep back and forward entries but override current position
      to,
      historyState.value.forward,
      true
    ), data, { position: historyState.value.position });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }
  function push(to, data) {
    const currentState = assign(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      historyState.value,
      history2.state,
      {
        forward: to,
        scroll: computeScrollPosition()
      }
    );
    changeLocation(currentState.current, currentState, true);
    const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base) {
  base = normalizeBase(base);
  const historyNavigation = useHistoryStateNavigation(base);
  const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign({
    // it's overridden right after
    location: "",
    base,
    go,
    createHref: createHref.bind(null, base)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function createWebHashHistory(base) {
  base = location.host ? base || location.pathname + location.search : "";
  if (!base.includes("#"))
    base += "#";
  return createWebHistory(base);
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const NavigationFailureSymbol = Symbol("");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type, params) {
  {
    return assign(new Error(), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [
      90
      /* PathScore.Root */
    ];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
          // or /:p?-:p2
          optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i2 = score.length - 1;
    score[i2][score[i2].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict && !pattern.endsWith("/"))
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path) {
    const match = path.match(re);
    const params = {};
    if (!match)
      return null;
    for (let i2 = 1; i2 < match.length; i2++) {
      const value = match[i2] || "";
      const key = keys[i2 - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (isArray(param) && !repeatable) {
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          }
          const text = isArray(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path || "/";
  }
  return {
    re,
    score,
    keys,
    parse,
    stringify
  };
}
function compareScoreArray(a2, b2) {
  let i2 = 0;
  while (i2 < a2.length && i2 < b2.length) {
    const diff = b2[i2] - a2[i2];
    if (diff)
      return diff;
    i2++;
  }
  if (a2.length < b2.length) {
    return a2.length === 1 && a2[0] === 40 + 40 ? -1 : 1;
  } else if (a2.length > b2.length) {
    return b2.length === 1 && b2[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a2, b2) {
  let i2 = 0;
  const aScore = a2.score;
  const bScore = b2.score;
  while (i2 < aScore.length && i2 < bScore.length) {
    const comp = compareScoreArray(aScore[i2], bScore[i2]);
    if (comp)
      return comp;
    i2++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore))
      return 1;
    if (isLastScoreNegative(bScore))
      return -1;
  }
  return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
  const last = score[score.length - 1];
  return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(`Invalid path "${path}"`);
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i2 = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i2 < path.length) {
    char = path[i2++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i2--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i2--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  const matcher = assign(parser, {
    record,
    parent,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes2, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [mainNormalizedRecord];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          normalizeRouteRecord(assign({}, mainNormalizedRecord, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            // we might be the child of an alias
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher)) {
          removeRoute(record.name);
        }
      }
      if (isMatchable(matcher)) {
        insertMatcher(matcher);
      }
      if (mainNormalizedRecord.children) {
        const children = mainNormalizedRecord.children;
        for (let i2 = 0; i2 < children.length; i2++) {
          addRoute(children[i2], matcher, originalRecord && originalRecord.children[i2]);
        }
      }
      originalRecord = originalRecord || matcher;
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index2 = matchers.indexOf(matcherRef);
      if (index2 > -1) {
        matchers.splice(index2, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    const index2 = findInsertionIndex(matcher, matchers);
    matchers.splice(index2, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      name = matcher.record.name;
      params = assign(
        // paramsFromLocation is a new object
        paramsFromLocation(
          currentLocation.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          matcher.keys.filter((k2) => !k2.optional).concat(matcher.parent ? matcher.parent.keys.filter((k2) => k2.optional) : []).map((k2) => k2.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        location2.params && paramsFromLocation(location2.params, matcher.keys.map((k2) => k2.name))
      );
      path = matcher.stringify(params);
    } else if (location2.path != null) {
      path = location2.path;
      matcher = matchers.find((m2) => m2.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m2) => m2.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes2.forEach((route) => addRoute(route));
  function clearRoutes() {
    matchers.length = 0;
    matcherMap.clear();
  }
  return {
    addRoute,
    resolve: resolve2,
    removeRoute,
    clearRoutes,
    getRoutes,
    getRecordMatcher
  };
}
function paramsFromLocation(params, keys) {
  const newParams = {};
  for (const key of keys) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  const normalized = {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: record.aliasOf,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    // must be declared afterwards
    // mods: {},
    components: "components" in record ? record.components || null : record.component && { default: record.component }
  };
  Object.defineProperty(normalized, "mods", {
    value: {}
  });
  return normalized;
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "object" ? props[name] : props;
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
  const options = {};
  for (const key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }
  return options;
}
function findInsertionIndex(matcher, matchers) {
  let lower = 0;
  let upper = matchers.length;
  while (lower !== upper) {
    const mid = lower + upper >> 1;
    const sortOrder = comparePathParserScore(matcher, matchers[mid]);
    if (sortOrder < 0) {
      upper = mid;
    } else {
      lower = mid + 1;
    }
  }
  const insertionAncestor = getInsertionAncestor(matcher);
  if (insertionAncestor) {
    upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
  }
  return upper;
}
function getInsertionAncestor(matcher) {
  let ancestor = matcher;
  while (ancestor = ancestor.parent) {
    if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) {
      return ancestor;
    }
  }
  return;
}
function isMatchable({ record }) {
  return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i2 = 0; i2 < searchParams.length; ++i2) {
    const searchParam = searchParams[i2].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search += (search.length ? "&" : "") + key;
      }
      continue;
    }
    const values = isArray(value) ? value.map((v2) => v2 && encodeQueryValue(v2)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value2 != null)
          search += "=" + value2;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = isArray(value) ? value.map((v2) => v2 == null ? null : "" + v2) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
const matchedRouteKey = Symbol("");
const viewDepthKey = Symbol("");
const routerKey = Symbol("");
const routeLocationKey = Symbol("");
const routerViewLocationKey = Symbol("");
function useCallbacks() {
  let handlers = [];
  function add2(handler) {
    handlers.push(handler);
    return () => {
      const i2 = handlers.indexOf(handler);
      if (i2 > -1)
        handlers.splice(i2, 1);
    };
  }
  function reset() {
    handlers = [];
  }
  return {
    add: add2,
    list: () => handlers.slice(),
    reset
  };
}
function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn) => fn()) {
  const enterCallbackArray = record && // name is defined if record is because of the function overload
  (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false) {
        reject(createRouterError(4, {
          from,
          to
        }));
      } else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
        record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
          enterCallbackArray.push(valid);
        }
        resolve2();
      }
    };
    const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from, next));
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    guardCall.catch((err) => reject(err));
  });
}
function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn) => fn()) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
      } else {
        let componentPromise = rawComponent();
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.mods[name] = resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
        }));
      }
    }
  }
  return guards;
}
function useLink(props) {
  const router2 = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => {
    const to = unref(props.to);
    return router2.resolve(to);
  });
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index2 > -1)
      return index2;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return (
      // we are dealing with nested routes
      length > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
      currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2
    );
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e2 = {}) {
    if (guardEvent(e2)) {
      const p2 = router2[unref(props.replace) ? "replace" : "push"](
        unref(props.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(noop);
      if (props.viewTransition && typeof document !== "undefined" && "startViewTransition" in document) {
        document.startViewTransition(() => p2);
      }
      return p2;
    }
    return Promise.resolve();
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
function preferSingleVNode(vnodes) {
  return vnodes.length === 1 ? vnodes[0] : vnodes;
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    },
    viewTransition: Boolean
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && preferSingleVNode(slots.default(link));
      return props.custom ? children : h$4("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e2) {
  if (e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey)
    return;
  if (e2.defaultPrevented)
    return;
  if (e2.button !== void 0 && e2.button !== 0)
    return;
  if (e2.currentTarget && e2.currentTarget.getAttribute) {
    const target = e2.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e2.preventDefault)
    e2.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i2) => value !== outerValue[i2]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(props, { attrs, slots }) {
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const injectedDepth = inject(viewDepthKey, 0);
    const depth = computed(() => {
      let initialDepth = unref(injectedDepth);
      const { matched } = routeToDisplay.value;
      let matchedRoute;
      while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
        initialDepth++;
      }
      return initialDepth;
    });
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
    provide(viewDepthKey, computed(() => depth.value + 1));
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && // if there is no instance but to and from are the same this might be
      // the first visit
      (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const currentName = props.name;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[currentName];
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[currentName];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h$4(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        normalizeSlot(slots.default, { Component: component, route }) || component
      );
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot)
    return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = (
    // @ts-expect-error: intentionally avoid the type check
    applyToParams.bind(null, decode)
  );
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      return assign(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if (rawLocation.path != null) {
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(targetParams)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    return assign({
      fullPath,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      )
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : (
          // force empty params
          { path: newTargetLocation }
        );
        newTargetLocation.params = {};
      }
      return assign({
        query: to.query,
        hash: to.hash,
        // avoid transferring params if the redirect has a path
        params: newTargetLocation.path != null ? {} : to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(
        assign(locationAsObject(shouldRedirect), {
          state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
          force,
          replace: replace2
        }),
        // keep original redirectedFrom if it exists
        redirectedFrom || targetLocation
      );
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(
        from,
        from,
        // this is a push, the only way for it to be triggered from a
        // history.listen is with a redirect, which makes it become a push
        true,
        // This cannot be the first navigation because the initial location
        // cannot be manually navigated to
        false
      );
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? (
      // navigation redirects still mark the router as ready
      isNavigationFailure(
        error,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? error : markAsReady(error)
    ) : (
      // reject any unknown error
      triggerError(error, toLocation, from)
    )).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(
          failure2,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          return pushWithRedirect(
            // keep options
            assign({
              // preserve an existing replacement but allow the redirect to override it
              replace: replace2
            }, locationAsObject(failure2.to), {
              state: typeof failure2.to === "object" ? assign({}, data, failure2.to.state) : data,
              force
            }),
            // preserve the original redirectedFrom if any
            redirectedFrom || toLocation
          );
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function runWithContext(fn) {
    const app2 = installedApps.values().next().value;
    return app2 && typeof app2.runWithContext === "function" ? app2.runWithContext(fn) : fn();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of enteringRecords) {
        if (record.beforeEnter) {
          if (isArray(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(
      err,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state && state.scroll
        }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    if (removeHistoryListener)
      return;
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      if (!router2.listening)
        return;
      const toLocation = resolve2(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, { replace: true, force: true }), toLocation).catch(noop);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(
          error,
          4 | 8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        )) {
          return error;
        }
        if (isNavigationFailure(
          error,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          pushWithRedirect(
            assign(locationAsObject(error.to), {
              force: true
            }),
            toLocation
            // avoid an uncaught rejection, let push call triggerError
          ).then((failure) => {
            if (isNavigationFailure(
              failure,
              4 | 16
              /* ErrorTypes.NAVIGATION_DUPLICATED */
            ) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop);
          return Promise.reject();
        }
        if (info.delta) {
          routerHistory.go(-info.delta, false);
        }
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(
          // after navigation, all matched components are resolved
          toLocation,
          from,
          false
        );
        if (failure) {
          if (info.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
          // entry while a different route is displayed
          !isNavigationFailure(
            failure,
            8
            /* ErrorTypes.NAVIGATION_CANCELLED */
          )) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(
            failure,
            4 | 16
            /* ErrorTypes.NAVIGATION_DUPLICATED */
          )) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop);
    });
  }
  let readyHandlers = useCallbacks();
  let errorListeners = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorListeners.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve22, reject) => {
      readyHandlers.add([resolve22, reject]);
    });
  }
  function markAsReady(err) {
    if (!ready) {
      ready = !err;
      setupListeners();
      readyHandlers.list().forEach(([resolve22, reject]) => err ? reject(err) : resolve22());
      readyHandlers.reset();
    }
    return err;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router2 = {
    currentRoute,
    listening: true,
    addRoute,
    removeRoute,
    clearRoutes: matcher.clearRoutes,
    hasRoute,
    getRoutes,
    resolve: resolve2,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorListeners.add,
    isReady,
    install(app2) {
      const router22 = this;
      app2.component("RouterLink", RouterLink);
      app2.component("RouterView", RouterView);
      app2.config.globalProperties.$router = router22;
      Object.defineProperty(app2.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err) => {
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        Object.defineProperty(reactiveRoute, key, {
          get: () => currentRoute.value[key],
          enumerable: true
        });
      }
      app2.provide(routerKey, router22);
      app2.provide(routeLocationKey, shallowReactive(reactiveRoute));
      app2.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app2.unmount;
      installedApps.add(app2);
      app2.unmount = function() {
        installedApps.delete(app2);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
    }
  };
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
  }
  return router2;
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i2 = 0; i2 < len; i2++) {
    const recordFrom = from.matched[i2];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i2];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter() {
  return inject(routerKey);
}
function useRoute(_name) {
  return inject(routeLocationKey);
}
const useThemeStore = /* @__PURE__ */ defineStore("theme", () => {
  const currentTheme = ref("styleB");
  const themes = {
    styleA: {
      name: "styleA",
      label: "风格A",
      colors: {
        primary: "#00d4ff",
        secondary: "#0099cc",
        accent: "#00ffff",
        background: "#0a0a0f",
        surface: "#1a1a2e",
        text: "#ffffff",
        textSecondary: "#88ccff",
        border: "#00d4ff",
        success: "#00ff88",
        warning: "#ffaa00",
        error: "#ff0066",
        info: "#00d4ff"
      },
      classes: {
        background: "bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950",
        cardBackground: "bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20",
        buttonStyle: "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border border-cyan-400/50 shadow-lg shadow-cyan-500/25 backdrop-blur-sm",
        headerStyle: "bg-gradient-to-r from-slate-900/90 to-blue-900/90 backdrop-blur-xl border-b border-cyan-500/40",
        borderStyle: "border-cyan-500/40",
        textStyle: "text-cyan-100",
        inputStyle: "bg-slate-800/50 border border-cyan-500/30 text-white backdrop-blur-sm focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20",
        sidebarBackground: "bg-gradient-to-b from-slate-950 via-blue-950 to-cyan-950 backdrop-blur-xl border-r border-cyan-500/30"
      }
    },
    styleB: {
      name: "styleB",
      label: "风格B",
      colors: {
        primary: "#059669",
        secondary: "#047857",
        accent: "#10b981",
        background: "#111827",
        surface: "#1f2937",
        text: "#f9fafb",
        textSecondary: "#d1d5db",
        border: "#374151",
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#3b82f6"
      },
      classes: {
        background: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
        cardBackground: "bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-sm border border-gray-600/50",
        buttonStyle: "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white border border-gray-500/50",
        headerStyle: "bg-gradient-to-r from-gray-800 to-gray-700 border-b border-gray-600",
        borderStyle: "border-gray-600/50",
        textStyle: "text-gray-100",
        inputStyle: "bg-gray-800/50 border-gray-600 text-white",
        sidebarBackground: "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-r border-gray-700"
      }
    },
    styleC: {
      name: "styleC",
      label: "风格C",
      colors: {
        primary: "#3b82f6",
        secondary: "#6366f1",
        accent: "#10b981",
        background: "#0f172a",
        surface: "#1e293b",
        text: "#f8fafc",
        textSecondary: "#cbd5e1",
        border: "#475569",
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#3b82f6"
      },
      classes: {
        background: "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900",
        cardBackground: "bg-white/10 backdrop-blur-xl border border-blue-500/30 shadow-2xl shadow-blue-500/10",
        buttonStyle: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border border-blue-400/50 shadow-lg shadow-blue-500/25",
        headerStyle: "bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-md border-b border-blue-500/40",
        borderStyle: "border-blue-500/40",
        textStyle: "text-blue-100",
        inputStyle: "bg-slate-800/50 border border-blue-500/30 text-white backdrop-blur-sm focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20",
        sidebarBackground: "bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-900 backdrop-blur-xl border-r border-blue-500/30"
      }
    }
  };
  const currentThemeConfig = computed(() => themes[currentTheme.value]);
  const themeClasses = computed(() => currentThemeConfig.value.classes);
  const themeColors = computed(() => currentThemeConfig.value.colors);
  const theme = computed(() => currentThemeConfig.value);
  const setTheme = (themeName) => {
    currentTheme.value = themeName;
    updateCSSVariables();
    localStorage.setItem("app-theme", themeName);
  };
  const toggleTheme = () => {
    const themeOrder = ["styleA", "styleB", "styleC"];
    const currentIndex = themeOrder.indexOf(currentTheme.value);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  };
  const updateCSSVariables = () => {
    const root = document.documentElement;
    const theme2 = themes[currentTheme.value];
    Object.entries(theme2.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    root.style.setProperty("--theme-background", theme2.classes.background);
    root.style.setProperty("--theme-card-bg", theme2.classes.cardBackground);
  };
  const initTheme = () => {
    const savedTheme = localStorage.getItem("app-theme");
    if (savedTheme && themes[savedTheme]) {
      currentTheme.value = savedTheme;
    }
    updateCSSVariables();
  };
  const getThemeList = () => {
    return Object.entries(themes).map(([key, theme2]) => ({
      key,
      name: theme2.name,
      label: theme2.label
    }));
  };
  const isTheme = (themeName) => currentTheme.value === themeName;
  return {
    // 状态
    currentTheme,
    // 计算属性
    currentThemeConfig,
    themeClasses,
    themeColors,
    theme,
    // 方法
    setTheme,
    toggleTheme,
    updateCSSVariables,
    initTheme,
    getThemeList,
    isTheme
  };
});
const _hoisted_1$2 = ["title"];
const _hoisted_2$2 = { class: "mb-6 overflow-hidden" };
const _hoisted_3$2 = { class: "flex items-center gap-3" };
const _hoisted_4$2 = { class: "flex items-center gap-2" };
const _hoisted_5$2 = { class: "space-y-2" };
const _hoisted_6$2 = {
  key: 0,
  class: "absolute inset-0 bg-gradient-to-r from-slate-400/20 via-slate-500/20 to-slate-600/20 animate-pulse"
};
const _hoisted_7$1 = {
  key: 1,
  class: "absolute left-full ml-2 px-3 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 border border-gray-600/30 shadow-xl backdrop-blur-sm"
};
const _hoisted_8$1 = { class: "absolute bottom-4 left-4 right-4 space-y-3" };
const _hoisted_9$1 = { class: "flex items-center justify-center" };
const _hoisted_10$1 = ["title"];
const _hoisted_11$1 = { class: "relative z-10" };
const _hoisted_12$1 = {
  key: 0,
  class: "mt-2 text-center"
};
const _hoisted_13$1 = { class: "flex items-center justify-center gap-2" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppSidebar",
  setup(__props) {
    const route = useRoute();
    const isCollapsed = ref(false);
    const themeStore2 = useThemeStore();
    const links = [
      { to: "/dashboard", label: "仪表盘", icon: "pi-chart-bar" },
      { to: "/import", label: "导入日志", icon: "pi-upload" },
      { to: "/logs", label: "日志浏览", icon: "pi-list" },
      { to: "/analysis", label: "日志统计", icon: "pi-chart-line" },
      { to: "/threat", label: "威胁分析", icon: "pi-shield" },
      { to: "/threat-map", label: "威胁地图", icon: "pi-globe" },
      { to: "/reports", label: "报告生成", icon: "pi-file-pdf" },
      { to: "/rules", label: "规则管理", icon: "pi-sliders-h" },
      { to: "/settings", label: "设置", icon: "pi-cog" }
    ];
    onMounted(() => {
      const saved = localStorage.getItem("sidebar-collapsed");
      if (saved !== null) {
        isCollapsed.value = JSON.parse(saved);
      }
    });
    watch(isCollapsed, (newValue) => {
      localStorage.setItem("sidebar-collapsed", JSON.stringify(newValue));
      window.dispatchEvent(new Event("sidebar-toggled"));
    });
    function toggleCollapse() {
      isCollapsed.value = !isCollapsed.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", {
        class: normalizeClass([
          "h-full p-4 transition-all duration-300 ease-in-out relative",
          isCollapsed.value ? "w-16" : "w-64",
          unref(themeStore2).themeClasses.sidebarBackground
        ])
      }, [
        createBaseVNode("button", {
          onClick: toggleCollapse,
          class: normalizeClass([
            "absolute -right-3 top-6 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg z-10 hover:scale-110 active:scale-95",
            unref(themeStore2).currentTheme === "styleA" ? "bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 shadow-slate-500/30" : unref(themeStore2).currentTheme === "styleB" ? "bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 shadow-gray-500/30" : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-blue-500/30"
          ]),
          title: isCollapsed.value ? "展开侧边栏" : "折叠侧边栏"
        }, [
          createBaseVNode("i", {
            class: normalizeClass([
              "pi text-xs text-white transition-transform duration-300",
              isCollapsed.value ? "pi-angle-right" : "pi-angle-left"
            ])
          }, null, 2)
        ], 10, _hoisted_1$2),
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$2, [
            createBaseVNode("div", {
              class: normalizeClass([
                "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border",
                unref(themeStore2).currentTheme === "styleA" ? "bg-gradient-to-br from-slate-500 via-slate-600 to-slate-700 shadow-slate-500/30 border-slate-400/30" : unref(themeStore2).currentTheme === "styleB" ? "bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 shadow-gray-500/30 border-gray-400/30" : "bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 shadow-blue-500/30 border-blue-400/30"
              ])
            }, _cache[1] || (_cache[1] = [
              createBaseVNode("i", { class: "pi pi-bolt text-white text-base" }, null, -1)
            ]), 2),
            createBaseVNode("div", {
              class: normalizeClass([
                "transition-all duration-300",
                isCollapsed.value ? "opacity-0 w-0" : "opacity-100 w-auto"
              ])
            }, [
              createBaseVNode("div", _hoisted_4$2, [
                _cache[2] || (_cache[2] = createBaseVNode("h2", { class: "text-lg font-semibold text-white whitespace-nowrap" }, "FastWLAT", -1)),
                createBaseVNode("span", {
                  class: normalizeClass([
                    "px-2 py-0.5 text-white text-xs font-bold rounded-full border shadow-sm",
                    unref(themeStore2).currentTheme === "styleA" ? "bg-gradient-to-r from-slate-500 to-slate-600 border-slate-400/30" : unref(themeStore2).currentTheme === "styleB" ? "bg-gradient-to-r from-gray-500 to-gray-600 border-gray-400/30" : "bg-gradient-to-r from-blue-500 to-indigo-600 border-blue-400/30"
                  ])
                }, " BETA ", 2)
              ]),
              createBaseVNode("p", {
                class: normalizeClass([
                  "text-xs whitespace-nowrap",
                  unref(themeStore2).currentTheme === "styleA" ? "text-slate-400" : unref(themeStore2).currentTheme === "styleB" ? "text-gray-400" : "text-blue-400"
                ])
              }, " Web 日志分析工具 ", 2)
            ], 2)
          ])
        ]),
        createBaseVNode("nav", _hoisted_5$2, [
          (openBlock(), createElementBlock(Fragment, null, renderList(links, (link) => {
            return createVNode(unref(RouterLink), {
              key: link.to,
              to: link.to,
              class: normalizeClass([
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 text-sm group relative overflow-hidden",
                unref(route).path === link.to ? [
                  unref(themeStore2).currentTheme === "styleA" ? "bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-white shadow-lg shadow-slate-600/30 border border-slate-500/30" : unref(themeStore2).currentTheme === "styleB" ? "bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white shadow-lg shadow-gray-600/30 border border-gray-500/30" : "bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white shadow-lg shadow-blue-600/30 border border-blue-500/30"
                ] : [
                  "text-gray-300 hover:text-white",
                  unref(themeStore2).currentTheme === "styleA" ? "hover:bg-gradient-to-r hover:from-slate-500/20 hover:to-slate-600/20 hover:border hover:border-slate-400/20" : unref(themeStore2).currentTheme === "styleB" ? "hover:bg-white/10 hover:border hover:border-white/20" : "hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-indigo-600/20 hover:border hover:border-blue-400/20"
                ]
              ]),
              title: isCollapsed.value ? link.label : ""
            }, {
              default: withCtx(() => [
                unref(route).path === link.to ? (openBlock(), createElementBlock("div", _hoisted_6$2)) : createCommentVNode("", true),
                createBaseVNode("i", {
                  class: normalizeClass(["pi", link.icon, "text-base flex-shrink-0 relative z-10"])
                }, null, 2),
                createBaseVNode("span", {
                  class: normalizeClass([
                    "transition-all duration-300 whitespace-nowrap relative z-10",
                    isCollapsed.value ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
                  ])
                }, toDisplayString(link.label), 3),
                isCollapsed.value ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
                  createTextVNode(toDisplayString(link.label) + " ", 1),
                  _cache[3] || (_cache[3] = createBaseVNode("div", { class: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gradient-to-r from-gray-800 to-gray-900 rotate-45" }, null, -1))
                ])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1032, ["to", "class", "title"]);
          }), 64))
        ]),
        createBaseVNode("div", _hoisted_8$1, [
          createBaseVNode("div", {
            class: normalizeClass(["border-t pt-3", unref(themeStore2).themeClasses.borderStyle])
          }, [
            createBaseVNode("div", _hoisted_9$1, [
              createBaseVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => unref(themeStore2).toggleTheme()),
                class: normalizeClass([
                  "group relative w-12 h-12 rounded-xl transition-all duration-300 ease-in-out",
                  "flex items-center justify-center overflow-hidden",
                  unref(themeStore2).currentTheme === "styleA" ? "bg-gradient-to-br from-slate-500/30 via-slate-600/30 to-slate-700/30 border border-slate-400/40 shadow-lg shadow-slate-500/20" : unref(themeStore2).currentTheme === "styleB" ? "bg-gradient-to-br from-gray-500/30 via-gray-600/30 to-gray-700/30 border border-gray-500/40 shadow-lg shadow-gray-600/20" : "bg-gradient-to-br from-blue-500/30 via-indigo-600/30 to-purple-700/30 border border-blue-400/40 shadow-lg shadow-blue-500/20",
                  "hover:scale-105 hover:shadow-xl active:scale-95"
                ]),
                title: "当前：" + unref(themeStore2).theme.label + "，点击切换风格"
              }, [
                createBaseVNode("div", {
                  class: normalizeClass([
                    "absolute inset-0 transition-all duration-500",
                    unref(themeStore2).currentTheme === "styleA" ? "bg-gradient-to-r from-slate-400/20 via-slate-500/20 to-slate-600/20" : unref(themeStore2).currentTheme === "styleB" ? "bg-gradient-to-r from-gray-400/20 via-gray-500/20 to-gray-600/20" : "bg-gradient-to-r from-blue-400/20 via-indigo-500/20 to-purple-600/20"
                  ])
                }, null, 2),
                createBaseVNode("div", _hoisted_11$1, [
                  createBaseVNode("i", {
                    class: normalizeClass([
                      "text-lg transition-all duration-300",
                      unref(themeStore2).currentTheme === "styleA" ? "pi pi-chart-pie text-slate-200 group-hover:text-slate-100" : unref(themeStore2).currentTheme === "styleB" ? "pi pi-th-large text-gray-200 group-hover:text-white" : "pi pi-palette text-blue-200 group-hover:text-blue-100"
                    ])
                  }, null, 2)
                ]),
                createBaseVNode("div", {
                  class: normalizeClass(["absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300", [
                    unref(themeStore2).currentTheme === "styleA" ? "bg-gradient-to-br from-slate-400/30 via-slate-500/30 to-slate-600/30" : unref(themeStore2).currentTheme === "styleB" ? "bg-gradient-to-br from-gray-400/30 via-gray-500/30 to-gray-600/30" : "bg-gradient-to-br from-blue-400/30 via-indigo-500/30 to-purple-600/30"
                  ]])
                }, null, 2)
              ], 10, _hoisted_10$1)
            ]),
            !isCollapsed.value ? (openBlock(), createElementBlock("div", _hoisted_12$1, [
              createBaseVNode("span", {
                class: normalizeClass([
                  "text-xs font-medium",
                  unref(themeStore2).currentTheme === "styleA" ? "text-slate-400" : unref(themeStore2).currentTheme === "styleB" ? "text-gray-400" : "text-blue-400"
                ])
              }, toDisplayString(unref(themeStore2).theme.label), 3)
            ])) : createCommentVNode("", true)
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass([
              "transition-all duration-300",
              isCollapsed.value ? "opacity-0" : "opacity-100"
            ])
          }, [
            createBaseVNode("div", {
              class: normalizeClass([
                "text-xs text-center",
                unref(themeStore2).currentTheme === "styleA" ? "text-slate-400" : unref(themeStore2).currentTheme === "styleB" ? "text-gray-400" : "text-blue-400"
              ])
            }, [
              createBaseVNode("div", _hoisted_13$1, [
                _cache[5] || (_cache[5] = createBaseVNode("span", null, "© 2025", -1)),
                createBaseVNode("a", {
                  href: "https://github.com/vam876/FastWLAT",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  class: normalizeClass([
                    "hover:underline transition-colors duration-200",
                    unref(themeStore2).currentTheme === "styleA" ? "hover:text-slate-300" : unref(themeStore2).currentTheme === "styleB" ? "hover:text-gray-300" : "hover:text-blue-300"
                  ])
                }, " FastWLAT v1.1.0 ", 2),
                createBaseVNode("a", {
                  href: "https://github.com/vam876/FastWLAT",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  class: normalizeClass([
                    "transition-colors duration-200",
                    unref(themeStore2).currentTheme === "styleA" ? "text-slate-400 hover:text-slate-300" : unref(themeStore2).currentTheme === "styleB" ? "text-gray-400 hover:text-gray-300" : "text-blue-400 hover:text-blue-300"
                  ]),
                  title: "查看GitHub项目"
                }, _cache[4] || (_cache[4] = [
                  createBaseVNode("i", { class: "pi pi-github text-sm" }, null, -1)
                ]), 2)
              ])
            ], 2)
          ], 2)
        ])
      ], 2);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const AppSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-de8d7eb0"]]);
let currentMode = "loading";
let listeners = [];
async function detectDataMode(config = {}) {
  ({ ...config });
  const userPreference = localStorage.getItem("fastwlat.user.preference.mode");
  console.log("[DataMode] detectDataMode called - userPreference:", userPreference);
  if (userPreference === "local") {
    console.log("[DataMode] User selected local (memory-only) mode");
    currentMode = "local";
    notifyListeners();
    return currentMode;
  }
  console.log("[DataMode] Using IndexedDB mode (default)");
  currentMode = "indexedDB";
  notifyListeners();
  return currentMode;
}
function getCurrentDataMode() {
  return currentMode;
}
function isIndexedDBMode() {
  return currentMode === "indexedDB";
}
function forceLocalMode() {
  currentMode = "local";
  console.log("[DataMode] Forced to local mode");
  notifyListeners();
}
function addDataModeListener(callback) {
  listeners.push(callback);
}
function removeDataModeListener(callback) {
  listeners = listeners.filter((listener) => listener !== callback);
}
function notifyListeners() {
  listeners.forEach((callback) => {
    try {
      callback(currentMode);
    } catch (error) {
      console.error("[DataMode] Listener callback failed:", error);
    }
  });
}
if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", () => {
  });
}
const useAppStore = /* @__PURE__ */ defineStore("app", () => {
  const dataMode = ref("loading");
  let dataModeListener = null;
  function initDataModeListener() {
    if (dataModeListener) {
      removeDataModeListener(dataModeListener);
    }
    dataModeListener = (mode) => {
      console.log("[AppStore] Data mode changed to:", mode);
      dataMode.value = mode;
    };
    addDataModeListener(dataModeListener);
    const currentMode2 = getCurrentDataMode();
    dataMode.value = currentMode2;
    console.log("[AppStore] Initial data mode:", currentMode2);
  }
  function cleanupDataModeListener() {
    if (dataModeListener) {
      removeDataModeListener(dataModeListener);
      dataModeListener = null;
    }
  }
  async function refreshDataMode() {
    const mode = await detectDataMode();
    dataMode.value = mode;
    return mode;
  }
  function switchToLocalMode() {
    localStorage.setItem("fastwlat.user.preference.mode", "local");
    return refreshDataMode();
  }
  function switchToIndexedDBMode() {
    localStorage.removeItem("fastwlat.user.preference.mode");
    return refreshDataMode();
  }
  initDataModeListener();
  const message = ref(null);
  const messageTimeout = ref(null);
  function showMessage(text, type = "info", duration = 3e3) {
    if (messageTimeout.value) {
      clearTimeout(messageTimeout.value);
    }
    message.value = { text, type };
    if (duration > 0) {
      messageTimeout.value = window.setTimeout(() => {
        message.value = null;
        messageTimeout.value = null;
      }, duration);
    }
  }
  function hideMessage() {
    if (messageTimeout.value) {
      clearTimeout(messageTimeout.value);
      messageTimeout.value = null;
    }
    message.value = null;
  }
  return {
    dataMode,
    message,
    refreshDataMode,
    switchToLocalMode,
    switchToIndexedDBMode,
    initDataModeListener,
    cleanupDataModeListener,
    showMessage,
    hideMessage
  };
});
const _hoisted_1$1 = { class: "w-full h-full flex bg-gradient-to-br from-gray-900 to-gray-800" };
const _hoisted_2$1 = { class: "flex-1 min-h-0 min-w-0 overflow-hidden" };
const _hoisted_3$1 = { class: "h-[calc(100%-3rem)] overflow-auto bg-gradient-to-br from-gray-900/50 to-gray-800/50" };
const _hoisted_4$1 = {
  key: 0,
  class: "fixed top-4 right-4 z-50 max-w-sm"
};
const _hoisted_5$1 = { class: "flex items-center justify-between" };
const _hoisted_6$1 = { class: "text-sm font-medium" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MainLayout",
  setup(__props) {
    const app2 = useAppStore();
    onMounted(async () => {
      console.log("[MainLayout] Initializing data mode...");
      app2.initDataModeListener();
      await app2.refreshDataMode();
      console.log("[MainLayout] Data mode initialized:", app2.dataMode);
    });
    onUnmounted(() => {
      app2.cleanupDataModeListener();
    });
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(AppSidebar),
        createBaseVNode("div", _hoisted_2$1, [
          _cache[1] || (_cache[1] = createStaticVNode('<header class="h-12 bg-white/5 backdrop-blur-sm border-b border-white/10 flex items-center px-4 text-sm justify-between"><div class="text-white font-semibold">FastWLAT - WEB Log Analysis Tool</div><div class="flex items-center gap-3"><a href="https://github.com/vam876/FastWLAT" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 group" title="FastWLAT - WEB日志分析工具"><i class="pi pi-github text-white/80 group-hover:text-white text-base"></i><span class="text-white/80 group-hover:text-white text-xs font-medium">FastWLAT</span></a><a href="https://github.com/vam876/FastWinLog" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 group" title="FastWinLog - Windows日志分析工具"><i class="pi pi-microsoft text-white/80 group-hover:text-white text-base"></i><span class="text-white/80 group-hover:text-white text-xs font-medium">FastWinLog</span></a><a href="https://github.com/vam876/FastLinLog" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 group" title="FastLinLog - Linux日志分析工具"><i class="pi pi-server text-white/80 group-hover:text-white text-base"></i><span class="text-white/80 group-hover:text-white text-xs font-medium">FastLinLog</span></a></div></header>', 1)),
          createBaseVNode("main", _hoisted_3$1, [
            createVNode(_component_router_view)
          ])
        ]),
        unref(app2).message ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
          createBaseVNode("div", {
            class: normalizeClass([
              "px-4 py-3 rounded-lg shadow-lg border backdrop-blur-sm transition-all duration-300",
              {
                "bg-green-500/20 border-green-500/50 text-green-400": unref(app2).message.type === "success",
                "bg-red-500/20 border-red-500/50 text-red-400": unref(app2).message.type === "error",
                "bg-yellow-500/20 border-yellow-500/50 text-yellow-400": unref(app2).message.type === "warning",
                "bg-blue-500/20 border-blue-500/50 text-blue-400": unref(app2).message.type === "info"
              }
            ])
          }, [
            createBaseVNode("div", _hoisted_5$1, [
              createBaseVNode("span", _hoisted_6$1, toDisplayString(unref(app2).message.text), 1),
              createBaseVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => unref(app2).hideMessage()),
                class: "ml-3 text-white/60 hover:text-white/80 transition-colors"
              }, " × ")
            ])
          ], 2)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var ErrorType = /* @__PURE__ */ ((ErrorType2) => {
  ErrorType2["NETWORK"] = "network";
  ErrorType2["VALIDATION"] = "validation";
  ErrorType2["PERMISSION"] = "permission";
  ErrorType2["RESOURCE"] = "resource";
  ErrorType2["SYSTEM"] = "system";
  ErrorType2["USER"] = "user";
  return ErrorType2;
})(ErrorType || {});
var ErrorSeverity = /* @__PURE__ */ ((ErrorSeverity2) => {
  ErrorSeverity2["LOW"] = "low";
  ErrorSeverity2["MEDIUM"] = "medium";
  ErrorSeverity2["HIGH"] = "high";
  ErrorSeverity2["CRITICAL"] = "critical";
  return ErrorSeverity2;
})(ErrorSeverity || {});
class ErrorHandler {
  constructor() {
    this.errorQueue = [];
    this.listeners = [];
    this.errorMap = /* @__PURE__ */ new Map([
      // Redis 连接错误
      ["REDIS_CONNECTION_FAILED", {
        type: "network",
        severity: "high",
        userMessage: "Redis 数据库连接失败，请检查连接配置或使用本地模式",
        action: "检查设置",
        retryable: true
      }],
      // 文件处理错误
      ["FILE_TOO_LARGE", {
        type: "validation",
        severity: "medium",
        userMessage: "文件过大，请选择小于 100MB 的文件",
        retryable: false
      }],
      ["FILE_FORMAT_INVALID", {
        type: "validation",
        severity: "medium",
        userMessage: "文件格式不支持，请选择日志文件（.log, .txt）",
        retryable: false
      }],
      // 导出错误
      ["EXPORT_FAILED", {
        type: "system",
        severity: "medium",
        userMessage: "导出失败，请稍后重试",
        action: "重试",
        retryable: true
      }],
      ["NO_DATA_TO_EXPORT", {
        type: "user",
        severity: "low",
        userMessage: "没有数据可以导出，请先导入日志文件",
        retryable: false
      }],
      // 权限错误
      ["NOTIFICATION_PERMISSION_DENIED", {
        type: "permission",
        severity: "low",
        userMessage: "通知权限被拒绝，请在浏览器设置中允许通知",
        action: "设置权限",
        retryable: false
      }],
      // 系统错误
      ["MEMORY_EXHAUSTED", {
        type: "system",
        severity: "critical",
        userMessage: "内存不足，请关闭其他程序或减少数据量",
        retryable: false
      }],
      ["PARSE_ERROR", {
        type: "validation",
        severity: "medium",
        userMessage: "日志解析失败，请检查文件格式",
        action: "选择格式",
        retryable: true
      }]
    ]);
  }
  /**
   * 处理错误
   */
  handle(error, context) {
    let errorInfo;
    if (typeof error === "string") {
      errorInfo = this.createErrorInfo(error, context);
    } else if (error instanceof Error) {
      errorInfo = this.mapError(error, context);
    } else {
      errorInfo = error;
    }
    this.logError(errorInfo, context);
    this.errorQueue.unshift(errorInfo);
    if (this.errorQueue.length > 100) {
      this.errorQueue = this.errorQueue.slice(0, 100);
    }
    this.notifyListeners(errorInfo);
    return errorInfo;
  }
  /**
   * 重试操作
   */
  async retry(operation, config = { maxAttempts: 3, delay: 1e3, backoff: true }) {
    let lastError;
    for (let attempt = 1; attempt <= config.maxAttempts; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error;
        if (attempt === config.maxAttempts) {
          throw this.handle(lastError, { attempt, maxAttempts: config.maxAttempts });
        }
        const delay = config.backoff ? config.delay * Math.pow(2, attempt - 1) : config.delay;
        await this.sleep(delay);
      }
    }
    throw lastError;
  }
  /**
   * 安全执行操作
   */
  async safe(operation, fallback, context) {
    try {
      return await operation();
    } catch (error) {
      this.handle(error, context);
      return fallback;
    }
  }
  /**
   * 创建错误信息
   */
  createErrorInfo(code, context) {
    const predefined = this.errorMap.get(code) || {};
    return {
      code,
      type: predefined.type || "system",
      severity: predefined.severity || "medium",
      message: predefined.message || `系统错误: ${code}`,
      userMessage: predefined.userMessage || "操作失败，请稍后重试",
      action: predefined.action,
      retryable: predefined.retryable ?? false,
      data: context
    };
  }
  /**
   * 映射原生错误
   */
  mapError(error, context) {
    let code = "SYSTEM_ERROR";
    let type = "system";
    let severity = "medium";
    let userMessage = "系统繁忙，请稍后重试";
    let retryable = true;
    const errorName = error.name?.toLowerCase() || "";
    const message = error.message?.toLowerCase() || "";
    if (errorName.includes("dexie") || message.includes("database") || message.includes("indexeddb")) {
      code = "DATABASE_ERROR";
      type = "system";
      userMessage = "数据存储异常，请重试";
      retryable = true;
    } else if (message.includes("network") || message.includes("fetch") || message.includes("connection")) {
      code = "NETWORK_ERROR";
      type = "network";
      userMessage = "网络连接失败，请检查网络状态";
      retryable = true;
    } else if (message.includes("permission") || message.includes("denied") || message.includes("unauthorized")) {
      code = "PERMISSION_ERROR";
      type = "permission";
      userMessage = "权限不足，请检查相关权限设置";
    } else if (message.includes("not found") || message.includes("404")) {
      code = "RESOURCE_NOT_FOUND";
      type = "resource";
      userMessage = "请求的资源不存在";
    } else if (message.includes("timeout")) {
      code = "TIMEOUT_ERROR";
      type = "network";
      userMessage = "操作超时，请稍后重试";
      retryable = true;
    } else if (message.includes("memory") || message.includes("out of")) {
      code = "MEMORY_ERROR";
      type = "system";
      severity = "high";
      userMessage = "系统资源不足，请稍后重试";
    }
    return {
      code,
      type,
      severity,
      message: error.message,
      userMessage,
      retryable,
      data: { ...context, stack: error.stack }
    };
  }
  /**
   * 记录错误
   */
  logError(error, context) {
    const logLevel = this.getLogLevel(error.severity);
    const logMessage = `[${error.code}] ${error.message}`;
    switch (logLevel) {
      case "error":
        console.error(logMessage, { error, context });
        break;
      case "warn":
        console.warn(logMessage, { error, context });
        break;
      default:
        console.info(logMessage, { error, context });
    }
    this.sendToMonitoring(error, context);
  }
  /**
   * 获取日志级别
   */
  getLogLevel(severity) {
    switch (severity) {
      case "critical":
      case "high":
        return "error";
      case "medium":
        return "warn";
      default:
        return "info";
    }
  }
  /**
   * 发送到监控系统
   */
  sendToMonitoring(error, context) {
    if (error.severity === "critical") ;
  }
  /**
   * 睡眠函数
   */
  sleep(ms) {
    return new Promise((resolve2) => setTimeout(resolve2, ms));
  }
  /**
   * 通知监听器
   */
  notifyListeners(error) {
    this.listeners.forEach((listener) => {
      try {
        listener(error);
      } catch (e2) {
        console.error("Error listener failed:", e2);
      }
    });
  }
  // 公共 API
  /**
   * 添加错误监听器
   */
  addListener(listener) {
    this.listeners.push(listener);
  }
  /**
   * 移除错误监听器
   */
  removeListener(listener) {
    const index2 = this.listeners.indexOf(listener);
    if (index2 > -1) {
      this.listeners.splice(index2, 1);
    }
  }
  /**
   * 获取错误历史
   */
  getErrorHistory() {
    return [...this.errorQueue];
  }
  /**
   * 清除错误历史
   */
  clearErrorHistory() {
    this.errorQueue = [];
  }
  /**
   * 添加错误映射
   */
  addErrorMapping(code, errorInfo) {
    this.errorMap.set(code, errorInfo);
  }
  /**
   * 获取用户友好的错误消息
   */
  getUserMessage(error) {
    if (typeof error === "string") {
      return this.errorMap.get(error)?.userMessage || "操作失败，请稍后重试";
    } else if (error instanceof Error) {
      return this.mapError(error).userMessage;
    } else {
      return error.userMessage;
    }
  }
}
const errorHandler = new ErrorHandler();
window.addEventListener("error", (event) => {
  errorHandler.handle(event.error, {
    type: "global",
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno
  });
});
window.addEventListener("unhandledrejection", (event) => {
  errorHandler.handle(event.reason, {
    type: "promise",
    promise: event.promise
  });
});
const _hoisted_1 = {
  key: 0,
  class: "fixed top-4 right-4 z-50 space-y-3 max-w-sm w-full"
};
const _hoisted_2 = {
  key: 0,
  class: "flex items-center justify-between p-2 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-600"
};
const _hoisted_3 = { class: "text-white text-sm" };
const _hoisted_4 = { class: "flex items-start gap-3" };
const _hoisted_5 = { class: "flex-1 min-w-0" };
const _hoisted_6 = { class: "flex items-center gap-2 mb-1" };
const _hoisted_7 = { class: "text-white font-medium text-sm" };
const _hoisted_8 = { class: "text-gray-200 text-sm mb-2 leading-relaxed" };
const _hoisted_9 = {
  key: 0,
  class: "mb-3"
};
const _hoisted_10 = { class: "text-gray-400 text-xs mt-1 font-mono bg-black/20 p-2 rounded" };
const _hoisted_11 = { class: "flex items-center gap-2" };
const _hoisted_12 = ["onClick"];
const _hoisted_13 = ["onClick"];
const _hoisted_14 = ["onClick"];
const _hoisted_15 = ["onClick"];
const _hoisted_16 = {
  key: 0,
  class: "mt-3 h-1 bg-black/20 rounded-full overflow-hidden"
};
const maxErrors = 5;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ErrorToast",
  emits: ["retry", "action"],
  setup(__props, { emit: __emit }) {
    const errors = ref([]);
    let errorListener;
    onMounted(() => {
      errorListener = (error) => {
        showError(error);
      };
      errorHandler.addListener(errorListener);
    });
    onUnmounted(() => {
      if (errorListener) {
        errorHandler.removeListener(errorListener);
      }
    });
    function showError(error) {
      const toastError = {
        ...error,
        id: `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        dismissed: false,
        timestamp: /* @__PURE__ */ new Date()
      };
      errors.value.unshift(toastError);
      if (errors.value.length > maxErrors) {
        errors.value = errors.value.slice(0, maxErrors);
      }
      if (error.severity !== ErrorSeverity.CRITICAL) {
        const autoHideTime = getAutoHideTime(error.severity);
        setTimeout(() => {
          dismissError(toastError.id);
        }, autoHideTime);
      }
    }
    function dismissError(id) {
      const index2 = errors.value.findIndex((e2) => e2.id === id);
      if (index2 > -1) {
        errors.value[index2].dismissed = true;
        setTimeout(() => {
          errors.value.splice(index2, 1);
        }, 300);
      }
    }
    function dismissAll() {
      errors.value.forEach((error) => {
        error.dismissed = true;
      });
      setTimeout(() => {
        errors.value = [];
      }, 300);
    }
    function retryError(error) {
      if (error.retryable && error.action) {
        emit2("retry", error);
        dismissError(error.id);
      }
    }
    function getErrorIcon(type) {
      switch (type) {
        case ErrorType.NETWORK:
          return "pi-wifi";
        case ErrorType.VALIDATION:
          return "pi-exclamation-triangle";
        case ErrorType.PERMISSION:
          return "pi-lock";
        case ErrorType.RESOURCE:
          return "pi-file";
        case ErrorType.USER:
          return "pi-info-circle";
        default:
          return "pi-times-circle";
      }
    }
    function getSeverityClass(severity) {
      switch (severity) {
        case ErrorSeverity.CRITICAL:
          return "border-red-500 bg-red-500/10";
        case ErrorSeverity.HIGH:
          return "border-orange-500 bg-orange-500/10";
        case ErrorSeverity.MEDIUM:
          return "border-yellow-500 bg-yellow-500/10";
        default:
          return "border-blue-500 bg-blue-500/10";
      }
    }
    function getSeverityTextClass(severity) {
      switch (severity) {
        case ErrorSeverity.CRITICAL:
          return "text-red-400";
        case ErrorSeverity.HIGH:
          return "text-orange-400";
        case ErrorSeverity.MEDIUM:
          return "text-yellow-400";
        default:
          return "text-blue-400";
      }
    }
    function getAutoHideTime(severity) {
      switch (severity) {
        case ErrorSeverity.HIGH:
          return 8e3;
        case ErrorSeverity.MEDIUM:
          return 6e3;
        default:
          return 4e3;
      }
    }
    const hasErrors = computed(() => errors.value.length > 0);
    const emit2 = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        hasErrors.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
          errors.value.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createBaseVNode("span", _hoisted_3, toDisplayString(errors.value.length) + " 个错误", 1),
            createBaseVNode("button", {
              onClick: dismissAll,
              class: "text-gray-400 hover:text-white text-xs px-2 py-1 rounded transition-colors"
            }, " 全部关闭 ")
          ])) : createCommentVNode("", true),
          createVNode(TransitionGroup, {
            name: "error-toast",
            tag: "div",
            class: "space-y-2"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(errors.value, (error) => {
                return openBlock(), createElementBlock("div", {
                  key: error.id,
                  class: normalizeClass([
                    "p-4 rounded-lg border backdrop-blur-sm transition-all duration-300",
                    getSeverityClass(error.severity),
                    error.dismissed ? "opacity-0 translate-x-full" : "opacity-100 translate-x-0"
                  ])
                }, [
                  createBaseVNode("div", _hoisted_4, [
                    createBaseVNode("div", {
                      class: normalizeClass(["mt-0.5", getSeverityTextClass(error.severity)])
                    }, [
                      createBaseVNode("i", {
                        class: normalizeClass(["pi", getErrorIcon(error.type), "text-lg"])
                      }, null, 2)
                    ], 2),
                    createBaseVNode("div", _hoisted_5, [
                      createBaseVNode("div", _hoisted_6, [
                        createBaseVNode("span", _hoisted_7, toDisplayString(error.code), 1),
                        createBaseVNode("span", {
                          class: normalizeClass(["text-xs px-2 py-0.5 rounded-full", getSeverityTextClass(error.severity)])
                        }, toDisplayString(error.severity), 3)
                      ]),
                      createBaseVNode("p", _hoisted_8, toDisplayString(error.userMessage), 1),
                      error.message !== error.userMessage ? (openBlock(), createElementBlock("details", _hoisted_9, [
                        _cache[0] || (_cache[0] = createBaseVNode("summary", { class: "text-gray-400 text-xs cursor-pointer hover:text-gray-300" }, " 技术详情 ", -1)),
                        createBaseVNode("p", _hoisted_10, toDisplayString(error.message), 1)
                      ])) : createCommentVNode("", true),
                      createBaseVNode("div", _hoisted_11, [
                        error.retryable ? (openBlock(), createElementBlock("button", {
                          key: 0,
                          onClick: ($event) => retryError(error),
                          class: "px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-colors"
                        }, [
                          _cache[1] || (_cache[1] = createBaseVNode("i", { class: "pi pi-refresh mr-1" }, null, -1)),
                          createTextVNode(" " + toDisplayString(error.action || "重试"), 1)
                        ], 8, _hoisted_12)) : createCommentVNode("", true),
                        error.action && !error.retryable ? (openBlock(), createElementBlock("button", {
                          key: 1,
                          onClick: ($event) => emit2("action", error, error.action),
                          class: "px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs rounded transition-colors"
                        }, toDisplayString(error.action), 9, _hoisted_13)) : createCommentVNode("", true),
                        createBaseVNode("button", {
                          onClick: ($event) => dismissError(error.id),
                          class: "px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white text-xs rounded transition-colors ml-auto"
                        }, " 关闭 ", 8, _hoisted_14)
                      ])
                    ]),
                    createBaseVNode("button", {
                      onClick: ($event) => dismissError(error.id),
                      class: "text-gray-400 hover:text-white transition-colors"
                    }, _cache[2] || (_cache[2] = [
                      createBaseVNode("i", { class: "pi pi-times" }, null, -1)
                    ]), 8, _hoisted_15)
                  ]),
                  error.severity !== unref(ErrorSeverity).CRITICAL ? (openBlock(), createElementBlock("div", _hoisted_16, [
                    createBaseVNode("div", {
                      class: normalizeClass(["h-full bg-current opacity-30 animate-shrink", getSeverityTextClass(error.severity)]),
                      style: normalizeStyle({
                        animationDuration: getAutoHideTime(error.severity) + "ms",
                        animationTimingFunction: "linear"
                      })
                    }, null, 6)
                  ])) : createCommentVNode("", true)
                ], 2);
              }), 128))
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const ErrorToast = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5715707b"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$2),
        createVNode(ErrorToast)
      ], 64);
    };
  }
});
const scriptRel = /* @__PURE__ */ function detectScriptRel() {
  const relList = typeof document !== "undefined" && document.createElement("link").relList;
  return relList && relList.supports && relList.supports("modulepreload") ? "modulepreload" : "preload";
}();
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled2 = function(promises) {
      return Promise.all(
        promises.map(
          (p2) => Promise.resolve(p2).then(
            (value) => ({ status: "fulfilled", value }),
            (reason) => ({ status: "rejected", reason })
          )
        )
      );
    };
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = allSettled2(
      deps.map((dep) => {
        dep = assetsURL(dep, importerUrl);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        const isBaseRelative = !!importerUrl;
        if (isBaseRelative) {
          for (let i2 = links.length - 1; i2 >= 0; i2--) {
            const link2 = links[i2];
            if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
              return;
            }
          }
        } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e2 = new Event("vite:preloadError", {
      cancelable: true
    });
    e2.payload = err;
    window.dispatchEvent(e2);
    if (!e2.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const DashboardPage = () => __vitePreload(() => import("./DashboardPage-BRQVp4pV.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0, import.meta.url);
const ImportPage = () => __vitePreload(() => import("./ImportPage-C-qTA-Jz.js"), true ? __vite__mapDeps([7,1,4,2]) : void 0, import.meta.url);
const LogViewPage = () => __vitePreload(() => import("./LogViewPage-BU48ZkaJ.js"), true ? __vite__mapDeps([8,1,4,9,2]) : void 0, import.meta.url);
const AnalysisPage = () => __vitePreload(() => import("./AnalysisPage-KUWKaZpu.js"), true ? __vite__mapDeps([10,1,3,4,2]) : void 0, import.meta.url);
const ThreatAnalysisPage = () => __vitePreload(() => import("./ThreatAnalysisPage-ByXDQBMy.js"), true ? __vite__mapDeps([11,3,1,4,12]) : void 0, import.meta.url);
const ReportsPage = () => __vitePreload(() => import("./ReportsPage-D4aMZnRK.js"), true ? __vite__mapDeps([13,1,3,4,9,14]) : void 0, import.meta.url);
const RulesPage = () => __vitePreload(() => import("./RulesPage-C_TOK39V.js"), true ? __vite__mapDeps([15,2]) : void 0, import.meta.url);
const SettingsPage = () => __vitePreload(() => import("./SettingsPage-Ddp4UmtQ.js"), true ? __vite__mapDeps([16,1,2,17]) : void 0, import.meta.url);
const ThreatMapPage = () => __vitePreload(() => import("./ThreatMapPage-CW73exd-.js"), true ? __vite__mapDeps([18,1,5,3,4,2,19]) : void 0, import.meta.url);
const routes = [
  {
    path: "/",
    redirect: "/dashboard"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardPage,
    meta: {
      title: "仪表盘",
      icon: "pi-chart-bar",
      description: "系统概览和关键指标展示"
    }
  },
  {
    path: "/import",
    name: "Import",
    component: ImportPage,
    meta: {
      title: "导入",
      icon: "pi-upload",
      description: "导入和解析日志文件"
    }
  },
  {
    path: "/logs",
    name: "Logs",
    component: LogViewPage,
    meta: {
      title: "日志",
      icon: "pi-list",
      description: "日志查看和过滤"
    }
  },
  {
    path: "/analysis",
    name: "Analysis",
    component: AnalysisPage,
    meta: {
      title: "分析",
      icon: "pi-chart-line",
      description: "统计分析和数据洞察"
    }
  },
  {
    path: "/threat",
    name: "Threat",
    component: ThreatAnalysisPage,
    meta: {
      title: "威胁",
      icon: "pi-shield",
      description: "威胁分析和安全评估"
    }
  },
  {
    path: "/threat-map",
    name: "ThreatMap",
    component: ThreatMapPage,
    meta: {
      title: "威胁地图",
      icon: "pi-globe",
      description: "地理位置威胁态势可视化"
    }
  },
  {
    path: "/reports",
    name: "Reports",
    component: ReportsPage,
    meta: {
      title: "报告",
      icon: "pi-file-pdf",
      description: "生成和导出分析报告"
    }
  },
  {
    path: "/rules",
    name: "Rules",
    component: RulesPage,
    meta: {
      title: "规则",
      icon: "pi-sliders-h",
      description: "威胁检测规则管理"
    }
  },
  {
    path: "/settings",
    name: "Settings",
    component: SettingsPage,
    meta: {
      title: "设置",
      icon: "pi-cog",
      description: "系统配置和偏好设置"
    }
  },
  // 404 页面
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    redirect: "/dashboard"
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = `FastWLAT - ${to.meta.title}`;
  }
  console.log(`[Router] 导航: ${from.path} -> ${to.path}`);
  next();
});
router.afterEach((to) => {
  console.log(`[Router] 页面已加载: ${to.path}`);
});
var oe$1 = Object.defineProperty;
var K = Object.getOwnPropertySymbols;
var ue$1 = Object.prototype.hasOwnProperty, fe = Object.prototype.propertyIsEnumerable;
var N$1 = (e2, t2, n2) => t2 in e2 ? oe$1(e2, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e2[t2] = n2, d$x = (e2, t2) => {
  for (var n2 in t2 || (t2 = {})) ue$1.call(t2, n2) && N$1(e2, n2, t2[n2]);
  if (K) for (var n2 of K(t2)) fe.call(t2, n2) && N$1(e2, n2, t2[n2]);
  return e2;
};
function a$F(e2) {
  return e2 == null || e2 === "" || Array.isArray(e2) && e2.length === 0 || !(e2 instanceof Date) && typeof e2 == "object" && Object.keys(e2).length === 0;
}
function l$h(e2) {
  return typeof e2 == "function" && "call" in e2 && "apply" in e2;
}
function s$b(e2) {
  return !a$F(e2);
}
function i$r(e2, t2 = true) {
  return e2 instanceof Object && e2.constructor === Object && (t2 || Object.keys(e2).length !== 0);
}
function $$1(e2 = {}, t2 = {}) {
  let n2 = d$x({}, e2);
  return Object.keys(t2).forEach((r2) => {
    let o2 = r2;
    i$r(t2[o2]) && o2 in e2 && i$r(e2[o2]) ? n2[o2] = $$1(e2[o2], t2[o2]) : n2[o2] = t2[o2];
  }), n2;
}
function w(...e2) {
  return e2.reduce((t2, n2, r2) => r2 === 0 ? n2 : $$1(t2, n2), {});
}
function m$3(e2, ...t2) {
  return l$h(e2) ? e2(...t2) : e2;
}
function p$4(e2, t2 = true) {
  return typeof e2 == "string" && (t2 || e2 !== "");
}
function _(e2) {
  return s$b(e2) && !isNaN(e2);
}
function z(e2, t2) {
  if (t2) {
    let n2 = t2.test(e2);
    return t2.lastIndex = 0, n2;
  }
  return false;
}
function U(...e2) {
  return w(...e2);
}
function G(e2) {
  return e2 && e2.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function ee(e2) {
  return p$4(e2) ? e2.replace(/(_)/g, "-").replace(/[A-Z]/g, (t2, n2) => n2 === 0 ? t2 : "-" + t2.toLowerCase()).toLowerCase() : e2;
}
function s$a() {
  let r2 = /* @__PURE__ */ new Map();
  return { on(e2, t2) {
    let n2 = r2.get(e2);
    return n2 ? n2.push(t2) : n2 = [t2], r2.set(e2, n2), this;
  }, off(e2, t2) {
    let n2 = r2.get(e2);
    return n2 && n2.splice(n2.indexOf(t2) >>> 0, 1), this;
  }, emit(e2, t2) {
    let n2 = r2.get(e2);
    n2 && n2.forEach((i2) => {
      i2(t2);
    });
  }, clear() {
    r2.clear();
  } };
}
function y(t2) {
  if (t2) {
    let e2 = t2.parentNode;
    return e2 && e2 instanceof ShadowRoot && e2.host && (e2 = e2.host), e2;
  }
  return null;
}
function T(t2) {
  return !!(t2 !== null && typeof t2 != "undefined" && t2.nodeName && y(t2));
}
function p$3(t2) {
  return typeof Element != "undefined" ? t2 instanceof Element : t2 !== null && typeof t2 == "object" && t2.nodeType === 1 && typeof t2.nodeName == "string";
}
function A(t2, e2 = {}) {
  if (p$3(t2)) {
    let o2 = (n2, r2) => {
      var l2, d2;
      let i2 = (l2 = t2 == null ? void 0 : t2.$attrs) != null && l2[n2] ? [(d2 = t2 == null ? void 0 : t2.$attrs) == null ? void 0 : d2[n2]] : [];
      return [r2].flat().reduce((s2, a2) => {
        if (a2 != null) {
          let u2 = typeof a2;
          if (u2 === "string" || u2 === "number") s2.push(a2);
          else if (u2 === "object") {
            let c2 = Array.isArray(a2) ? o2(n2, a2) : Object.entries(a2).map(([f2, g2]) => n2 === "style" && (g2 || g2 === 0) ? `${f2.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${g2}` : g2 ? f2 : void 0);
            s2 = c2.length ? s2.concat(c2.filter((f2) => !!f2)) : s2;
          }
        }
        return s2;
      }, i2);
    };
    Object.entries(e2).forEach(([n2, r2]) => {
      if (r2 != null) {
        let i2 = n2.match(/^on(.+)/);
        i2 ? t2.addEventListener(i2[1].toLowerCase(), r2) : n2 === "p-bind" || n2 === "pBind" ? A(t2, r2) : (r2 = n2 === "class" ? [...new Set(o2("class", r2))].join(" ").trim() : n2 === "style" ? o2("style", r2).join(";").trim() : r2, (t2.$attrs = t2.$attrs || {}) && (t2.$attrs[n2] = r2), t2.setAttribute(n2, r2));
      }
    });
  }
}
function tt() {
  return !!(typeof window != "undefined" && window.document && window.document.createElement);
}
function Kt(t2, e2 = "", o2) {
  p$3(t2) && o2 !== null && o2 !== void 0 && t2.setAttribute(e2, o2);
}
var rt = Object.defineProperty, st = Object.defineProperties;
var nt = Object.getOwnPropertyDescriptors;
var F = Object.getOwnPropertySymbols;
var xe = Object.prototype.hasOwnProperty, be = Object.prototype.propertyIsEnumerable;
var _e = (e2, t2, r2) => t2 in e2 ? rt(e2, t2, { enumerable: true, configurable: true, writable: true, value: r2 }) : e2[t2] = r2, g$5 = (e2, t2) => {
  for (var r2 in t2 || (t2 = {})) xe.call(t2, r2) && _e(e2, r2, t2[r2]);
  if (F) for (var r2 of F(t2)) be.call(t2, r2) && _e(e2, r2, t2[r2]);
  return e2;
}, $ = (e2, t2) => st(e2, nt(t2));
var v$2 = (e2, t2) => {
  var r2 = {};
  for (var s2 in e2) xe.call(e2, s2) && t2.indexOf(s2) < 0 && (r2[s2] = e2[s2]);
  if (e2 != null && F) for (var s2 of F(e2)) t2.indexOf(s2) < 0 && be.call(e2, s2) && (r2[s2] = e2[s2]);
  return r2;
};
var at = s$a(), N = at;
var k$3 = /{([^}]*)}/g, ne = /(\d+\s+[\+\-\*\/]\s+\d+)/g, ie = /var\([^)]+\)/g;
function oe(e2) {
  return p$4(e2) ? e2.replace(/[A-Z]/g, (t2, r2) => r2 === 0 ? t2 : "." + t2.toLowerCase()).toLowerCase() : e2;
}
function ve(e2) {
  return i$r(e2) && e2.hasOwnProperty("$value") && e2.hasOwnProperty("$type") ? e2.$value : e2;
}
function dt(e2) {
  return e2.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Q(e2 = "", t2 = "") {
  return dt(`${p$4(e2, false) && p$4(t2, false) ? `${e2}-` : e2}${t2}`);
}
function ae(e2 = "", t2 = "") {
  return `--${Q(e2, t2)}`;
}
function gt(e2 = "") {
  let t2 = (e2.match(/{/g) || []).length, r2 = (e2.match(/}/g) || []).length;
  return (t2 + r2) % 2 !== 0;
}
function Y(e2, t2 = "", r2 = "", s2 = [], i2) {
  if (p$4(e2)) {
    let a2 = e2.trim();
    if (gt(a2)) return;
    if (z(a2, k$3)) {
      let n2 = a2.replaceAll(k$3, (l2) => {
        let c2 = l2.replace(/{|}/g, "").split(".").filter((m2) => !s2.some((d2) => z(m2, d2)));
        return `var(${ae(r2, ee(c2.join("-")))}${s$b(i2) ? `, ${i2}` : ""})`;
      });
      return z(n2.replace(ie, "0"), ne) ? `calc(${n2})` : n2;
    }
    return a2;
  } else if (_(e2)) return e2;
}
function Re(e2, t2, r2) {
  p$4(t2, false) && e2.push(`${t2}:${r2};`);
}
function C(e2, t2) {
  return e2 ? `${e2}{${t2}}` : "";
}
function le(e2, t2) {
  if (e2.indexOf("dt(") === -1) return e2;
  function r2(n2, l2) {
    let o2 = [], c2 = 0, m2 = "", d2 = null, u2 = 0;
    for (; c2 <= n2.length; ) {
      let h2 = n2[c2];
      if ((h2 === '"' || h2 === "'" || h2 === "`") && n2[c2 - 1] !== "\\" && (d2 = d2 === h2 ? null : h2), !d2 && (h2 === "(" && u2++, h2 === ")" && u2--, (h2 === "," || c2 === n2.length) && u2 === 0)) {
        let f2 = m2.trim();
        f2.startsWith("dt(") ? o2.push(le(f2, l2)) : o2.push(s2(f2)), m2 = "", c2++;
        continue;
      }
      h2 !== void 0 && (m2 += h2), c2++;
    }
    return o2;
  }
  function s2(n2) {
    let l2 = n2[0];
    if ((l2 === '"' || l2 === "'" || l2 === "`") && n2[n2.length - 1] === l2) return n2.slice(1, -1);
    let o2 = Number(n2);
    return isNaN(o2) ? n2 : o2;
  }
  let i2 = [], a2 = [];
  for (let n2 = 0; n2 < e2.length; n2++) if (e2[n2] === "d" && e2.slice(n2, n2 + 3) === "dt(") a2.push(n2), n2 += 2;
  else if (e2[n2] === ")" && a2.length > 0) {
    let l2 = a2.pop();
    a2.length === 0 && i2.push([l2, n2]);
  }
  if (!i2.length) return e2;
  for (let n2 = i2.length - 1; n2 >= 0; n2--) {
    let [l2, o2] = i2[n2], c2 = e2.slice(l2 + 3, o2), m2 = r2(c2, t2), d2 = t2(...m2);
    e2 = e2.slice(0, l2) + d2 + e2.slice(o2 + 1);
  }
  return e2;
}
var E = (...e2) => ue(S.getTheme(), ...e2), ue = (e2 = {}, t2, r2, s2) => {
  if (t2) {
    let { variable: i2, options: a2 } = S.defaults || {}, { prefix: n2, transform: l2 } = (e2 == null ? void 0 : e2.options) || a2 || {}, o2 = z(t2, k$3) ? t2 : `{${t2}}`;
    return s2 === "value" || a$F(s2) && l2 === "strict" ? S.getTokenValue(t2) : Y(o2, void 0, n2, [i2.excludedKeyRegex], r2);
  }
  return "";
};
function ar(e2, ...t2) {
  if (e2 instanceof Array) {
    let r2 = e2.reduce((s2, i2, a2) => {
      var n2;
      return s2 + i2 + ((n2 = m$3(t2[a2], { dt: E })) != null ? n2 : "");
    }, "");
    return le(r2, E);
  }
  return m$3(e2, { dt: E });
}
function de(e2, t2 = {}) {
  let r2 = S.defaults.variable, { prefix: s2 = r2.prefix, selector: i2 = r2.selector, excludedKeyRegex: a2 = r2.excludedKeyRegex } = t2, n2 = [], l2 = [], o2 = [{ node: e2, path: s2 }];
  for (; o2.length; ) {
    let { node: m2, path: d2 } = o2.pop();
    for (let u2 in m2) {
      let h2 = m2[u2], f2 = ve(h2), p2 = z(u2, a2) ? Q(d2) : Q(d2, ee(u2));
      if (i$r(f2)) o2.push({ node: f2, path: p2 });
      else {
        let y2 = ae(p2), R = Y(f2, p2, s2, [a2]);
        Re(l2, y2, R);
        let T2 = p2;
        s2 && T2.startsWith(s2 + "-") && (T2 = T2.slice(s2.length + 1)), n2.push(T2.replace(/-/g, "."));
      }
    }
  }
  let c2 = l2.join("");
  return { value: l2, tokens: n2, declarations: c2, css: C(i2, c2) };
}
var b$4 = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(e2) {
  return { type: "class", selector: e2, matched: this.pattern.test(e2.trim()) };
} }, attr: { pattern: /^\[(.*)\]$/, resolve(e2) {
  return { type: "attr", selector: `:root${e2}`, matched: this.pattern.test(e2.trim()) };
} }, media: { pattern: /^@media (.*)$/, resolve(e2) {
  return { type: "media", selector: e2, matched: this.pattern.test(e2.trim()) };
} }, system: { pattern: /^system$/, resolve(e2) {
  return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(e2.trim()) };
} }, custom: { resolve(e2) {
  return { type: "custom", selector: e2, matched: true };
} } }, resolve(e2) {
  let t2 = Object.keys(this.rules).filter((r2) => r2 !== "custom").map((r2) => this.rules[r2]);
  return [e2].flat().map((r2) => {
    var s2;
    return (s2 = t2.map((i2) => i2.resolve(r2)).find((i2) => i2.matched)) != null ? s2 : this.rules.custom.resolve(r2);
  });
} }, _toVariables(e2, t2) {
  return de(e2, { prefix: t2 == null ? void 0 : t2.prefix });
}, getCommon({ name: e2 = "", theme: t2 = {}, params: r2, set: s2, defaults: i2 }) {
  var R, T2, j, O, M, z2, V;
  let { preset: a2, options: n2 } = t2, l2, o2, c2, m2, d2, u2, h2;
  if (s$b(a2) && n2.transform !== "strict") {
    let { primitive: L, semantic: te, extend: re } = a2, f2 = te || {}, { colorScheme: K2 } = f2, A2 = v$2(f2, ["colorScheme"]), x = re || {}, { colorScheme: X } = x, G2 = v$2(x, ["colorScheme"]), p2 = K2 || {}, { dark: U2 } = p2, B = v$2(p2, ["dark"]), y2 = X || {}, { dark: I } = y2, H = v$2(y2, ["dark"]), W = s$b(L) ? this._toVariables({ primitive: L }, n2) : {}, q = s$b(A2) ? this._toVariables({ semantic: A2 }, n2) : {}, Z = s$b(B) ? this._toVariables({ light: B }, n2) : {}, pe = s$b(U2) ? this._toVariables({ dark: U2 }, n2) : {}, fe2 = s$b(G2) ? this._toVariables({ semantic: G2 }, n2) : {}, ye = s$b(H) ? this._toVariables({ light: H }, n2) : {}, Se = s$b(I) ? this._toVariables({ dark: I }, n2) : {}, [Me, ze] = [(R = W.declarations) != null ? R : "", W.tokens], [Ke, Xe] = [(T2 = q.declarations) != null ? T2 : "", q.tokens || []], [Ge, Ue] = [(j = Z.declarations) != null ? j : "", Z.tokens || []], [Be, Ie] = [(O = pe.declarations) != null ? O : "", pe.tokens || []], [He, We] = [(M = fe2.declarations) != null ? M : "", fe2.tokens || []], [qe, Ze] = [(z2 = ye.declarations) != null ? z2 : "", ye.tokens || []], [Fe, Je] = [(V = Se.declarations) != null ? V : "", Se.tokens || []];
    l2 = this.transformCSS(e2, Me, "light", "variable", n2, s2, i2), o2 = ze;
    let Qe = this.transformCSS(e2, `${Ke}${Ge}`, "light", "variable", n2, s2, i2), Ye = this.transformCSS(e2, `${Be}`, "dark", "variable", n2, s2, i2);
    c2 = `${Qe}${Ye}`, m2 = [.../* @__PURE__ */ new Set([...Xe, ...Ue, ...Ie])];
    let et = this.transformCSS(e2, `${He}${qe}color-scheme:light`, "light", "variable", n2, s2, i2), tt2 = this.transformCSS(e2, `${Fe}color-scheme:dark`, "dark", "variable", n2, s2, i2);
    d2 = `${et}${tt2}`, u2 = [.../* @__PURE__ */ new Set([...We, ...Ze, ...Je])], h2 = m$3(a2.css, { dt: E });
  }
  return { primitive: { css: l2, tokens: o2 }, semantic: { css: c2, tokens: m2 }, global: { css: d2, tokens: u2 }, style: h2 };
}, getPreset({ name: e2 = "", preset: t2 = {}, options: r2, params: s2, set: i2, defaults: a2, selector: n2 }) {
  var f2, x, p2;
  let l2, o2, c2;
  if (s$b(t2) && r2.transform !== "strict") {
    let y2 = e2.replace("-directive", ""), m2 = t2, { colorScheme: R, extend: T2, css: j } = m2, O = v$2(m2, ["colorScheme", "extend", "css"]), d2 = T2 || {}, { colorScheme: M } = d2, z2 = v$2(d2, ["colorScheme"]), u2 = R || {}, { dark: V } = u2, L = v$2(u2, ["dark"]), h2 = M || {}, { dark: te } = h2, re = v$2(h2, ["dark"]), K2 = s$b(O) ? this._toVariables({ [y2]: g$5(g$5({}, O), z2) }, r2) : {}, A2 = s$b(L) ? this._toVariables({ [y2]: g$5(g$5({}, L), re) }, r2) : {}, X = s$b(V) ? this._toVariables({ [y2]: g$5(g$5({}, V), te) }, r2) : {}, [G2, U2] = [(f2 = K2.declarations) != null ? f2 : "", K2.tokens || []], [B, I] = [(x = A2.declarations) != null ? x : "", A2.tokens || []], [H, W] = [(p2 = X.declarations) != null ? p2 : "", X.tokens || []], q = this.transformCSS(y2, `${G2}${B}`, "light", "variable", r2, i2, a2, n2), Z = this.transformCSS(y2, H, "dark", "variable", r2, i2, a2, n2);
    l2 = `${q}${Z}`, o2 = [.../* @__PURE__ */ new Set([...U2, ...I, ...W])], c2 = m$3(j, { dt: E });
  }
  return { css: l2, tokens: o2, style: c2 };
}, getPresetC({ name: e2 = "", theme: t2 = {}, params: r2, set: s2, defaults: i2 }) {
  var o2;
  let { preset: a2, options: n2 } = t2, l2 = (o2 = a2 == null ? void 0 : a2.components) == null ? void 0 : o2[e2];
  return this.getPreset({ name: e2, preset: l2, options: n2, params: r2, set: s2, defaults: i2 });
}, getPresetD({ name: e2 = "", theme: t2 = {}, params: r2, set: s2, defaults: i2 }) {
  var c2, m2;
  let a2 = e2.replace("-directive", ""), { preset: n2, options: l2 } = t2, o2 = ((c2 = n2 == null ? void 0 : n2.components) == null ? void 0 : c2[a2]) || ((m2 = n2 == null ? void 0 : n2.directives) == null ? void 0 : m2[a2]);
  return this.getPreset({ name: a2, preset: o2, options: l2, params: r2, set: s2, defaults: i2 });
}, applyDarkColorScheme(e2) {
  return !(e2.darkModeSelector === "none" || e2.darkModeSelector === false);
}, getColorSchemeOption(e2, t2) {
  var r2;
  return this.applyDarkColorScheme(e2) ? this.regex.resolve(e2.darkModeSelector === true ? t2.options.darkModeSelector : (r2 = e2.darkModeSelector) != null ? r2 : t2.options.darkModeSelector) : [];
}, getLayerOrder(e2, t2 = {}, r2, s2) {
  let { cssLayer: i2 } = t2;
  return i2 ? `@layer ${m$3(i2.order || i2.name || "primeui", r2)}` : "";
}, getCommonStyleSheet({ name: e2 = "", theme: t2 = {}, params: r2, props: s2 = {}, set: i2, defaults: a2 }) {
  let n2 = this.getCommon({ name: e2, theme: t2, params: r2, set: i2, defaults: a2 }), l2 = Object.entries(s2).reduce((o2, [c2, m2]) => o2.push(`${c2}="${m2}"`) && o2, []).join(" ");
  return Object.entries(n2 || {}).reduce((o2, [c2, m2]) => {
    if (i$r(m2) && Object.hasOwn(m2, "css")) {
      let d2 = G(m2.css), u2 = `${c2}-variables`;
      o2.push(`<style type="text/css" data-primevue-style-id="${u2}" ${l2}>${d2}</style>`);
    }
    return o2;
  }, []).join("");
}, getStyleSheet({ name: e2 = "", theme: t2 = {}, params: r2, props: s2 = {}, set: i2, defaults: a2 }) {
  var c2;
  let n2 = { name: e2, theme: t2, params: r2, set: i2, defaults: a2 }, l2 = (c2 = e2.includes("-directive") ? this.getPresetD(n2) : this.getPresetC(n2)) == null ? void 0 : c2.css, o2 = Object.entries(s2).reduce((m2, [d2, u2]) => m2.push(`${d2}="${u2}"`) && m2, []).join(" ");
  return l2 ? `<style type="text/css" data-primevue-style-id="${e2}-variables" ${o2}>${G(l2)}</style>` : "";
}, createTokens(e2 = {}, t2, r2 = "", s2 = "", i2 = {}) {
  let a2 = function(l2, o2 = {}, c2 = []) {
    if (c2.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: l2, path: this.path, paths: o2, value: void 0 };
    c2.push(this.path), o2.name = this.path, o2.binding || (o2.binding = {});
    let m2 = this.value;
    if (typeof this.value == "string" && k$3.test(this.value)) {
      let u2 = this.value.trim().replace(k$3, (h2) => {
        var y2;
        let f2 = h2.slice(1, -1), x = this.tokens[f2];
        if (!x) return console.warn(`Token not found for path: ${f2}`), "__UNRESOLVED__";
        let p2 = x.computed(l2, o2, c2);
        return Array.isArray(p2) && p2.length === 2 ? `light-dark(${p2[0].value},${p2[1].value})` : (y2 = p2 == null ? void 0 : p2.value) != null ? y2 : "__UNRESOLVED__";
      });
      m2 = ne.test(u2.replace(ie, "0")) ? `calc(${u2})` : u2;
    }
    return a$F(o2.binding) && delete o2.binding, c2.pop(), { colorScheme: l2, path: this.path, paths: o2, value: m2.includes("__UNRESOLVED__") ? void 0 : m2 };
  }, n2 = (l2, o2, c2) => {
    Object.entries(l2).forEach(([m2, d2]) => {
      let u2 = z(m2, t2.variable.excludedKeyRegex) ? o2 : o2 ? `${o2}.${oe(m2)}` : oe(m2), h2 = c2 ? `${c2}.${m2}` : m2;
      i$r(d2) ? n2(d2, u2, h2) : (i2[u2] || (i2[u2] = { paths: [], computed: (f2, x = {}, p2 = []) => {
        if (i2[u2].paths.length === 1) return i2[u2].paths[0].computed(i2[u2].paths[0].scheme, x.binding, p2);
        if (f2 && f2 !== "none") for (let y2 = 0; y2 < i2[u2].paths.length; y2++) {
          let R = i2[u2].paths[y2];
          if (R.scheme === f2) return R.computed(f2, x.binding, p2);
        }
        return i2[u2].paths.map((y2) => y2.computed(y2.scheme, x[y2.scheme], p2));
      } }), i2[u2].paths.push({ path: h2, value: d2, scheme: h2.includes("colorScheme.light") ? "light" : h2.includes("colorScheme.dark") ? "dark" : "none", computed: a2, tokens: i2 }));
    });
  };
  return n2(e2, r2, s2), i2;
}, getTokenValue(e2, t2, r2) {
  var l2;
  let i2 = ((o2) => o2.split(".").filter((m2) => !z(m2.toLowerCase(), r2.variable.excludedKeyRegex)).join("."))(t2), a2 = t2.includes("colorScheme.light") ? "light" : t2.includes("colorScheme.dark") ? "dark" : void 0, n2 = [(l2 = e2[i2]) == null ? void 0 : l2.computed(a2)].flat().filter((o2) => o2);
  return n2.length === 1 ? n2[0].value : n2.reduce((o2 = {}, c2) => {
    let u2 = c2, { colorScheme: m2 } = u2, d2 = v$2(u2, ["colorScheme"]);
    return o2[m2] = d2, o2;
  }, void 0);
}, getSelectorRule(e2, t2, r2, s2) {
  return r2 === "class" || r2 === "attr" ? C(s$b(t2) ? `${e2}${t2},${e2} ${t2}` : e2, s2) : C(e2, C(t2 != null ? t2 : ":root", s2));
}, transformCSS(e2, t2, r2, s2, i2 = {}, a2, n2, l2) {
  if (s$b(t2)) {
    let { cssLayer: o2 } = i2;
    if (s2 !== "style") {
      let c2 = this.getColorSchemeOption(i2, n2);
      t2 = r2 === "dark" ? c2.reduce((m2, { type: d2, selector: u2 }) => (s$b(u2) && (m2 += u2.includes("[CSS]") ? u2.replace("[CSS]", t2) : this.getSelectorRule(u2, l2, d2, t2)), m2), "") : C(l2 != null ? l2 : ":root", t2);
    }
    if (o2) {
      let c2 = { name: "primeui" };
      i$r(o2) && (c2.name = m$3(o2.name, { name: e2, type: s2 })), s$b(c2.name) && (t2 = C(`@layer ${c2.name}`, t2), a2 == null || a2.layerNames(c2.name));
    }
    return t2;
  }
  return "";
} };
var S = { defaults: { variable: { prefix: "p", selector: ":root", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: false } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(e2 = {}) {
  let { theme: t2 } = e2;
  t2 && (this._theme = $(g$5({}, t2), { options: g$5(g$5({}, this.defaults.options), t2.options) }), this._tokens = b$4.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
}, get theme() {
  return this._theme;
}, get preset() {
  var e2;
  return ((e2 = this.theme) == null ? void 0 : e2.preset) || {};
}, get options() {
  var e2;
  return ((e2 = this.theme) == null ? void 0 : e2.options) || {};
}, get tokens() {
  return this._tokens;
}, getTheme() {
  return this.theme;
}, setTheme(e2) {
  this.update({ theme: e2 }), N.emit("theme:change", e2);
}, getPreset() {
  return this.preset;
}, setPreset(e2) {
  this._theme = $(g$5({}, this.theme), { preset: e2 }), this._tokens = b$4.createTokens(e2, this.defaults), this.clearLoadedStyleNames(), N.emit("preset:change", e2), N.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(e2) {
  this._theme = $(g$5({}, this.theme), { options: e2 }), this.clearLoadedStyleNames(), N.emit("options:change", e2), N.emit("theme:change", this.theme);
}, getLayerNames() {
  return [...this._layerNames];
}, setLayerNames(e2) {
  this._layerNames.add(e2);
}, getLoadedStyleNames() {
  return this._loadedStyleNames;
}, isStyleNameLoaded(e2) {
  return this._loadedStyleNames.has(e2);
}, setLoadedStyleName(e2) {
  this._loadedStyleNames.add(e2);
}, deleteLoadedStyleName(e2) {
  this._loadedStyleNames.delete(e2);
}, clearLoadedStyleNames() {
  this._loadedStyleNames.clear();
}, getTokenValue(e2) {
  return b$4.getTokenValue(this.tokens, e2, this.defaults);
}, getCommon(e2 = "", t2) {
  return b$4.getCommon({ name: e2, theme: this.theme, params: t2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(e2 = "", t2) {
  let r2 = { name: e2, theme: this.theme, params: t2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b$4.getPresetC(r2);
}, getDirective(e2 = "", t2) {
  let r2 = { name: e2, theme: this.theme, params: t2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b$4.getPresetD(r2);
}, getCustomPreset(e2 = "", t2, r2, s2) {
  let i2 = { name: e2, preset: t2, options: this.options, selector: r2, params: s2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b$4.getPreset(i2);
}, getLayerOrderCSS(e2 = "") {
  return b$4.getLayerOrder(e2, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(e2 = "", t2, r2 = "style", s2) {
  return b$4.transformCSS(e2, t2, s2, r2, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(e2 = "", t2, r2 = {}) {
  return b$4.getCommonStyleSheet({ name: e2, theme: this.theme, params: t2, props: r2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(e2, t2, r2 = {}) {
  return b$4.getStyleSheet({ name: e2, theme: this.theme, params: t2, props: r2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(e2) {
  this._loadingStyles.add(e2);
}, onStyleUpdated(e2) {
  this._loadingStyles.add(e2);
}, onStyleLoaded(e2, { name: t2 }) {
  this._loadingStyles.size && (this._loadingStyles.delete(t2), N.emit(`theme:${t2}:load`, e2), !this._loadingStyles.size && N.emit("theme:load"));
} };
var FilterMatchMode = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
};
var style = "\n    *,\n    ::before,\n    ::after {\n        box-sizing: border-box;\n    }\n\n    /* Non vue overlay animations */\n    .p-connected-overlay {\n        opacity: 0;\n        transform: scaleY(0.8);\n        transition:\n            transform 0.12s cubic-bezier(0, 0, 0.2, 1),\n            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-visible {\n        opacity: 1;\n        transform: scaleY(1);\n    }\n\n    .p-connected-overlay-hidden {\n        opacity: 0;\n        transform: scaleY(1);\n        transition: opacity 0.1s linear;\n    }\n\n    /* Vue based overlay animations */\n    .p-connected-overlay-enter-from {\n        opacity: 0;\n        transform: scaleY(0.8);\n    }\n\n    .p-connected-overlay-leave-to {\n        opacity: 0;\n    }\n\n    .p-connected-overlay-enter-active {\n        transition:\n            transform 0.12s cubic-bezier(0, 0, 0.2, 1),\n            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-leave-active {\n        transition: opacity 0.1s linear;\n    }\n\n    /* Toggleable Content */\n    .p-toggleable-content-enter-from,\n    .p-toggleable-content-leave-to {\n        max-height: 0;\n    }\n\n    .p-toggleable-content-enter-to,\n    .p-toggleable-content-leave-from {\n        max-height: 1000px;\n    }\n\n    .p-toggleable-content-leave-active {\n        overflow: hidden;\n        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);\n    }\n\n    .p-toggleable-content-enter-active {\n        overflow: hidden;\n        transition: max-height 1s ease-in-out;\n    }\n\n    .p-disabled,\n    .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-disabled,\n    .p-component:disabled {\n        opacity: dt('disabled.opacity');\n    }\n\n    .pi {\n        font-size: dt('icon.size');\n    }\n\n    .p-icon {\n        width: dt('icon.size');\n        height: dt('icon.size');\n    }\n\n    .p-overlay-mask {\n        background: dt('mask.background');\n        color: dt('mask.color');\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-overlay-mask-enter {\n        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;\n    }\n\n    .p-overlay-mask-leave {\n        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;\n    }\n\n    @keyframes p-overlay-mask-enter-animation {\n        from {\n            background: transparent;\n        }\n        to {\n            background: dt('mask.background');\n        }\n    }\n    @keyframes p-overlay-mask-leave-animation {\n        from {\n            background: dt('mask.background');\n        }\n        to {\n            background: transparent;\n        }\n    }\n";
function _typeof$3(o2) {
  "@babel/helpers - typeof";
  return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$3(o2);
}
function ownKeys$3(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$3(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$3(Object(t2), true).forEach(function(r3) {
      _defineProperty$3(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$3(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _defineProperty$3(e2, r2, t2) {
  return (r2 = _toPropertyKey$3(r2)) in e2 ? Object.defineProperty(e2, r2, { value: t2, enumerable: true, configurable: true, writable: true }) : e2[r2] = t2, e2;
}
function _toPropertyKey$3(t2) {
  var i2 = _toPrimitive$3(t2, "string");
  return "symbol" == _typeof$3(i2) ? i2 : i2 + "";
}
function _toPrimitive$3(t2, r2) {
  if ("object" != _typeof$3(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != _typeof$3(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function tryOnMounted(fn) {
  var sync = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (getCurrentInstance() && getCurrentInstance().components) onMounted(fn);
  else if (sync) fn();
  else nextTick(fn);
}
var _id = 0;
function useStyle(css3) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var isLoaded = ref(false);
  var cssRef = ref(css3);
  var styleRef = ref(null);
  var defaultDocument = tt() ? window.document : void 0;
  var _options$document = options.document, document2 = _options$document === void 0 ? defaultDocument : _options$document, _options$immediate = options.immediate, immediate = _options$immediate === void 0 ? true : _options$immediate, _options$manual = options.manual, manual = _options$manual === void 0 ? false : _options$manual, _options$name = options.name, name = _options$name === void 0 ? "style_".concat(++_id) : _options$name, _options$id = options.id, id = _options$id === void 0 ? void 0 : _options$id, _options$media = options.media, media = _options$media === void 0 ? void 0 : _options$media, _options$nonce = options.nonce, nonce = _options$nonce === void 0 ? void 0 : _options$nonce, _options$first = options.first, first = _options$first === void 0 ? false : _options$first, _options$onMounted = options.onMounted, onStyleMounted = _options$onMounted === void 0 ? void 0 : _options$onMounted, _options$onUpdated = options.onUpdated, onStyleUpdated = _options$onUpdated === void 0 ? void 0 : _options$onUpdated, _options$onLoad = options.onLoad, onStyleLoaded = _options$onLoad === void 0 ? void 0 : _options$onLoad, _options$props = options.props, props = _options$props === void 0 ? {} : _options$props;
  var stop = function stop2() {
  };
  var load2 = function load3(_css) {
    var _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!document2) return;
    var _styleProps = _objectSpread$3(_objectSpread$3({}, props), _props);
    var _name = _styleProps.name || name, _id2 = _styleProps.id || id, _nonce = _styleProps.nonce || nonce;
    styleRef.value = document2.querySelector('style[data-primevue-style-id="'.concat(_name, '"]')) || document2.getElementById(_id2) || document2.createElement("style");
    if (!styleRef.value.isConnected) {
      cssRef.value = _css || css3;
      A(styleRef.value, {
        type: "text/css",
        id: _id2,
        media,
        nonce: _nonce
      });
      first ? document2.head.prepend(styleRef.value) : document2.head.appendChild(styleRef.value);
      Kt(styleRef.value, "data-primevue-style-id", _name);
      A(styleRef.value, _styleProps);
      styleRef.value.onload = function(event) {
        return onStyleLoaded === null || onStyleLoaded === void 0 ? void 0 : onStyleLoaded(event, {
          name: _name
        });
      };
      onStyleMounted === null || onStyleMounted === void 0 || onStyleMounted(_name);
    }
    if (isLoaded.value) return;
    stop = watch(cssRef, function(value) {
      styleRef.value.textContent = value;
      onStyleUpdated === null || onStyleUpdated === void 0 || onStyleUpdated(_name);
    }, {
      immediate: true
    });
    isLoaded.value = true;
  };
  var unload = function unload2() {
    if (!document2 || !isLoaded.value) return;
    stop();
    T(styleRef.value) && document2.head.removeChild(styleRef.value);
    isLoaded.value = false;
    styleRef.value = null;
  };
  if (immediate && !manual) tryOnMounted(load2);
  return {
    id,
    name,
    el: styleRef,
    css: cssRef,
    unload,
    load: load2,
    isLoaded: readonly(isLoaded)
  };
}
function _typeof$2(o2) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$2(o2);
}
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _slicedToArray(r2, e2) {
  return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e2) || _unsupportedIterableToArray(r2, e2) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r2, a2) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray(r2, a2);
    var t2 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r2, a2) : void 0;
  }
}
function _arrayLikeToArray(r2, a2) {
  (null == a2 || a2 > r2.length) && (a2 = r2.length);
  for (var e2 = 0, n2 = Array(a2); e2 < a2; e2++) n2[e2] = r2[e2];
  return n2;
}
function _iterableToArrayLimit(r2, l2) {
  var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t2) {
    var e2, n2, i2, u2, a2 = [], f2 = true, o2 = false;
    try {
      if (i2 = (t2 = t2.call(r2)).next, 0 === l2) ;
      else for (; !(f2 = (e2 = i2.call(t2)).done) && (a2.push(e2.value), a2.length !== l2); f2 = true) ;
    } catch (r3) {
      o2 = true, n2 = r3;
    } finally {
      try {
        if (!f2 && null != t2["return"] && (u2 = t2["return"](), Object(u2) !== u2)) return;
      } finally {
        if (o2) throw n2;
      }
    }
    return a2;
  }
}
function _arrayWithHoles(r2) {
  if (Array.isArray(r2)) return r2;
}
function ownKeys$2(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$2(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$2(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$2(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _defineProperty$2(e2, r2, t2) {
  return (r2 = _toPropertyKey$2(r2)) in e2 ? Object.defineProperty(e2, r2, { value: t2, enumerable: true, configurable: true, writable: true }) : e2[r2] = t2, e2;
}
function _toPropertyKey$2(t2) {
  var i2 = _toPrimitive$2(t2, "string");
  return "symbol" == _typeof$2(i2) ? i2 : i2 + "";
}
function _toPrimitive$2(t2, r2) {
  if ("object" != _typeof$2(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != _typeof$2(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function _taggedTemplateLiteral(e2, t2) {
  return t2 || (t2 = e2.slice(0)), Object.freeze(Object.defineProperties(e2, { raw: { value: Object.freeze(t2) } }));
}
var css = function css2(_ref) {
  var dt2 = _ref.dt;
  return "\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    opacity: 0;\n    overflow: hidden;\n    padding: 0;\n    pointer-events: none;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n    padding-right: ".concat(dt2("scrollbar.width"), ";\n}\n");
};
var classes = {};
var inlineStyles = {};
var BaseStyle = {
  name: "base",
  css,
  style,
  classes,
  inlineStyles,
  load: function load(style2) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var transform = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(cs) {
      return cs;
    };
    var computedStyle = transform(ar(_templateObject || (_templateObject = _taggedTemplateLiteral(["", ""])), style2));
    return s$b(computedStyle) ? useStyle(G(computedStyle), _objectSpread$2({
      name: this.name
    }, options)) : {};
  },
  loadCSS: function loadCSS() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, options);
  },
  loadStyle: function loadStyle() {
    var _this = this;
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var style2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, options, function() {
      var computedStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return S.transformCSS(options.name || _this.name, "".concat(computedStyle).concat(ar(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["", ""])), style2)));
    });
  },
  getCommonTheme: function getCommonTheme(params) {
    return S.getCommon(this.name, params);
  },
  getComponentTheme: function getComponentTheme(params) {
    return S.getComponent(this.name, params);
  },
  getDirectiveTheme: function getDirectiveTheme(params) {
    return S.getDirective(this.name, params);
  },
  getPresetTheme: function getPresetTheme(preset, selector, params) {
    return S.getCustomPreset(this.name, preset, selector, params);
  },
  getLayerOrderThemeCSS: function getLayerOrderThemeCSS() {
    return S.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function getStyleSheet() {
    var extendedCSS = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var _css = m$3(this.css, {
        dt: E
      }) || "";
      var _style = G(ar(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["", "", ""])), _css, extendedCSS));
      var _props = Object.entries(props).reduce(function(acc, _ref2) {
        var _ref3 = _slicedToArray(_ref2, 2), k2 = _ref3[0], v2 = _ref3[1];
        return acc.push("".concat(k2, '="').concat(v2, '"')) && acc;
      }, []).join(" ");
      return s$b(_style) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(_props, ">").concat(_style, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function getCommonThemeStyleSheet(params) {
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return S.getCommonStyleSheet(this.name, params, props);
  },
  getThemeStyleSheet: function getThemeStyleSheet(params) {
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var css3 = [S.getStyleSheet(this.name, params, props)];
    if (this.style) {
      var name = this.name === "base" ? "global-style" : "".concat(this.name, "-style");
      var _css = ar(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["", ""])), m$3(this.style, {
        dt: E
      }));
      var _style = G(S.transformCSS(name, _css));
      var _props = Object.entries(props).reduce(function(acc, _ref4) {
        var _ref5 = _slicedToArray(_ref4, 2), k2 = _ref5[0], v2 = _ref5[1];
        return acc.push("".concat(k2, '="').concat(v2, '"')) && acc;
      }, []).join(" ");
      s$b(_style) && css3.push('<style type="text/css" data-primevue-style-id="'.concat(name, '" ').concat(_props, ">").concat(_style, "</style>"));
    }
    return css3.join("");
  },
  extend: function extend2(inStyle) {
    return _objectSpread$2(_objectSpread$2({}, this), {}, {
      css: void 0,
      style: void 0
    }, inStyle);
  }
};
var PrimeVueService = s$a();
function _typeof$1(o2) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$1(o2);
}
function ownKeys$1(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$1(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$1(Object(t2), true).forEach(function(r3) {
      _defineProperty$1(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$1(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _defineProperty$1(e2, r2, t2) {
  return (r2 = _toPropertyKey$1(r2)) in e2 ? Object.defineProperty(e2, r2, { value: t2, enumerable: true, configurable: true, writable: true }) : e2[r2] = t2, e2;
}
function _toPropertyKey$1(t2) {
  var i2 = _toPrimitive$1(t2, "string");
  return "symbol" == _typeof$1(i2) ? i2 : i2 + "";
}
function _toPrimitive$1(t2, r2) {
  if ("object" != _typeof$1(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != _typeof$1(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
var defaultOptions = {
  ripple: false,
  inputStyle: null,
  inputVariant: null,
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    showMonthAfterYear: false,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    fileChosenMessage: "{0} files",
    noFileChosenMessage: "No file chosen",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "Page {page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List"
    }
  },
  filterMatchModeOptions: {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  theme: void 0,
  unstyled: false,
  pt: void 0,
  ptOptions: {
    mergeSections: true,
    mergeProps: false
  },
  csp: {
    nonce: void 0
  }
};
var PrimeVueSymbol = Symbol();
function setup(app2, options) {
  var PrimeVue2 = {
    config: reactive(options)
  };
  app2.config.globalProperties.$primevue = PrimeVue2;
  app2.provide(PrimeVueSymbol, PrimeVue2);
  clearConfig();
  setupConfig(app2, PrimeVue2);
  return PrimeVue2;
}
var stopWatchers = [];
function clearConfig() {
  N.clear();
  stopWatchers.forEach(function(fn) {
    return fn === null || fn === void 0 ? void 0 : fn();
  });
  stopWatchers = [];
}
function setupConfig(app2, PrimeVue2) {
  var isThemeChanged = ref(false);
  var loadCommonTheme = function loadCommonTheme2() {
    var _PrimeVue$config;
    if (((_PrimeVue$config = PrimeVue2.config) === null || _PrimeVue$config === void 0 ? void 0 : _PrimeVue$config.theme) === "none") return;
    if (!S.isStyleNameLoaded("common")) {
      var _BaseStyle$getCommonT, _PrimeVue$config2;
      var _ref = ((_BaseStyle$getCommonT = BaseStyle.getCommonTheme) === null || _BaseStyle$getCommonT === void 0 ? void 0 : _BaseStyle$getCommonT.call(BaseStyle)) || {}, primitive = _ref.primitive, semantic = _ref.semantic, global2 = _ref.global, style2 = _ref.style;
      var styleOptions = {
        nonce: (_PrimeVue$config2 = PrimeVue2.config) === null || _PrimeVue$config2 === void 0 || (_PrimeVue$config2 = _PrimeVue$config2.csp) === null || _PrimeVue$config2 === void 0 ? void 0 : _PrimeVue$config2.nonce
      };
      BaseStyle.load(primitive === null || primitive === void 0 ? void 0 : primitive.css, _objectSpread$1({
        name: "primitive-variables"
      }, styleOptions));
      BaseStyle.load(semantic === null || semantic === void 0 ? void 0 : semantic.css, _objectSpread$1({
        name: "semantic-variables"
      }, styleOptions));
      BaseStyle.load(global2 === null || global2 === void 0 ? void 0 : global2.css, _objectSpread$1({
        name: "global-variables"
      }, styleOptions));
      BaseStyle.loadStyle(_objectSpread$1({
        name: "global-style"
      }, styleOptions), style2);
      S.setLoadedStyleName("common");
    }
  };
  N.on("theme:change", function(newTheme) {
    if (!isThemeChanged.value) {
      app2.config.globalProperties.$primevue.config.theme = newTheme;
      isThemeChanged.value = true;
    }
  });
  var stopConfigWatcher = watch(PrimeVue2.config, function(newValue, oldValue) {
    PrimeVueService.emit("config:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: true
  });
  var stopRippleWatcher = watch(function() {
    return PrimeVue2.config.ripple;
  }, function(newValue, oldValue) {
    PrimeVueService.emit("config:ripple:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: true
  });
  var stopThemeWatcher = watch(function() {
    return PrimeVue2.config.theme;
  }, function(newValue, oldValue) {
    if (!isThemeChanged.value) {
      S.setTheme(newValue);
    }
    if (!PrimeVue2.config.unstyled) {
      loadCommonTheme();
    }
    isThemeChanged.value = false;
    PrimeVueService.emit("config:theme:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: false
  });
  var stopUnstyledWatcher = watch(function() {
    return PrimeVue2.config.unstyled;
  }, function(newValue, oldValue) {
    if (!newValue && PrimeVue2.config.theme) {
      loadCommonTheme();
    }
    PrimeVueService.emit("config:unstyled:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: true
  });
  stopWatchers.push(stopConfigWatcher);
  stopWatchers.push(stopRippleWatcher);
  stopWatchers.push(stopThemeWatcher);
  stopWatchers.push(stopUnstyledWatcher);
}
var PrimeVue = {
  install: function install(app2, options) {
    var configOptions = U(defaultOptions, options);
    setup(app2, configOptions);
  }
};
var o$1l = { transitionDuration: "{transition.duration}" }, r$1i = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" }, t$D = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, e$U = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" }, c$p = { root: o$1l, panel: r$1i, header: t$D, content: e$U };
var o$1k = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, r$1h = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, d$w = { padding: "{list.padding}", gap: "{list.gap}" }, e$T = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, l$g = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, i$q = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, c$o = { borderRadius: "{border.radius.sm}" }, f$9 = { padding: "{list.option.padding}" }, s$9 = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, a$E = { root: o$1k, overlay: r$1h, list: d$w, option: e$T, optionGroup: l$g, dropdown: i$q, chip: c$o, emptyMessage: f$9, colorScheme: s$9 };
var e$S = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, r$1g = { size: "1rem" }, o$1j = { borderColor: "{content.background}", offset: "-0.75rem" }, t$C = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, i$p = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, n$B = { root: e$S, icon: r$1g, group: o$1j, lg: t$C, xl: i$p };
var r$1f = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, o$1i = { size: "0.5rem" }, e$R = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, c$n = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, a$D = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, n$A = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, d$v = { root: r$1f, dot: o$1i, sm: e$R, lg: c$n, xl: a$D, colorScheme: n$A };
var r$1e = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, o$1h = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.15s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, e$Q = { primitive: r$1e, semantic: o$1h };
var r$1d = { borderRadius: "{content.border.radius}" }, o$1g = { root: r$1d };
var o$1f = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, r$1c = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, i$o = { color: "{navigation.item.icon.color}" }, t$B = { root: o$1f, item: r$1c, separator: i$o };
var r$1b = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, o$1e = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, e$P = { root: r$1b, colorScheme: o$1e };
var o$1d = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" }, r$1a = { padding: "1.25rem", gap: "0.5rem" }, t$A = { gap: "0.5rem" }, e$O = { fontSize: "1.25rem", fontWeight: "500" }, a$C = { color: "{text.muted.color}" }, d$u = { root: o$1d, body: r$1a, caption: t$A, title: e$O, subtitle: a$C };
var r$19 = { transitionDuration: "{transition.duration}" }, o$1c = { gap: "0.25rem" }, a$B = { padding: "1rem", gap: "0.5rem" }, i$n = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, c$m = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, t$z = { root: r$19, content: o$1c, indicatorList: a$B, indicator: i$n, colorScheme: c$m };
var o$1b = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, r$18 = { width: "2.5rem", color: "{form.field.icon.color}" }, d$t = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, l$f = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" }, e$N = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, i$m = { color: "{form.field.icon.color}" }, f$8 = { root: o$1b, dropdown: r$18, overlay: d$t, list: l$f, option: e$N, clearIcon: i$m };
var r$17 = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, o$1a = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } }, e$M = { root: r$17, icon: o$1a };
var o$19 = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, r$16 = { width: "2rem", height: "2rem" }, e$L = { size: "1rem" }, c$l = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, i$l = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, s$8 = { root: o$19, image: r$16, icon: e$L, removeIcon: c$l, colorScheme: i$l };
var r$15 = { transitionDuration: "{transition.duration}" }, o$18 = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, e$K = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, a$A = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, s$7 = { root: r$15, preview: o$18, panel: e$K, colorScheme: a$A };
var o$17 = { size: "2rem", color: "{overlay.modal.color}" }, e$J = { gap: "1rem" }, r$14 = { icon: o$17, content: e$J };
var o$16 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, r$13 = { padding: "{overlay.popover.padding}", gap: "1rem" }, e$I = { size: "1.5rem", color: "{overlay.popover.color}" }, p$2 = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, a$z = { root: o$16, content: r$13, icon: e$I, footer: p$2 };
var o$15 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, i$k = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, n$z = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, a$y = { mobileIndent: "1rem" }, t$y = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, r$12 = { borderColor: "{content.border.color}" }, c$k = { root: o$15, list: i$k, item: n$z, submenu: a$y, submenuIcon: t$y, separator: r$12 };
var o$14 = { transitionDuration: "{transition.duration}" }, r$11 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, e$H = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, d$s = { fontWeight: "600" }, t$x = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, l$e = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, c$j = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, n$y = { fontWeight: "600" }, a$x = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, i$j = { color: "{primary.color}" }, s$6 = { width: "0.5rem" }, g$4 = { width: "1px", color: "{primary.color}" }, u$5 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, b$3 = { size: "2rem" }, p$1 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, m$2 = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, h$3 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, f$7 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, v$1 = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, k$2 = { root: o$14, header: r$11, headerCell: e$H, columnTitle: d$s, row: t$x, bodyCell: l$e, footerCell: c$j, columnFooter: n$y, footer: a$x, dropPoint: i$j, columnResizer: s$6, resizeIndicator: g$4, sortIcon: u$5, loadingIcon: b$3, rowToggleButton: p$1, filter: m$2, paginatorTop: h$3, paginatorBottom: f$7, colorScheme: v$1 };
var o$13 = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" }, r$10 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" }, d$r = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" }, e$G = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" }, t$w = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, n$x = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, c$i = { root: o$13, header: r$10, content: d$r, footer: e$G, paginatorTop: t$w, paginatorBottom: n$x };
var o$12 = { transitionDuration: "{transition.duration}" }, r$$ = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, e$F = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" }, c$h = { gap: "0.5rem", fontWeight: "500" }, d$q = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, n$w = { color: "{form.field.icon.color}" }, t$v = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, a$w = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, i$i = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, l$d = { margin: "0.5rem 0 0 0" }, u$4 = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" }, s$5 = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, g$3 = { margin: "0.5rem 0 0 0" }, f$6 = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, h$2 = { margin: "0.5rem 0 0 0" }, b$2 = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, m$1 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" }, p = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, v = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, k$1 = { root: o$12, panel: r$$, header: e$F, title: c$h, dropdown: d$q, inputIcon: n$w, selectMonth: t$v, selectYear: a$w, group: i$i, dayView: l$d, weekDay: u$4, date: s$5, monthView: g$3, month: f$6, yearView: h$2, year: b$2, buttonbar: m$1, timePicker: p, colorScheme: v };
var o$11 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, a$v = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, d$p = { fontSize: "1.25rem", fontWeight: "600" }, r$_ = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, l$c = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, e$E = { root: o$11, header: a$v, title: d$p, content: r$_, footer: l$c };
var r$Z = { borderColor: "{content.border.color}" }, o$10 = { background: "{content.background}", color: "{text.color}" }, n$v = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } }, e$D = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } }, t$u = { root: r$Z, content: o$10, horizontal: n$v, vertical: e$D };
var r$Y = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" }, o$$ = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, d$o = { root: r$Y, item: o$$ };
var o$_ = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, a$u = { padding: "{overlay.modal.padding}" }, d$n = { fontSize: "1.5rem", fontWeight: "600" }, r$X = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, l$b = { padding: "{overlay.modal.padding}" }, e$C = { root: o$_, header: a$u, title: d$n, content: r$X, footer: l$b };
var o$Z = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, r$W = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, e$B = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, t$t = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, d$m = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, l$a = { toolbar: o$Z, toolbarItem: r$W, overlay: e$B, overlayOption: t$t, content: d$m };
var o$Y = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, r$V = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, t$s = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, n$u = { padding: "0" }, e$A = { root: o$Y, legend: r$V, toggleIcon: t$s, content: n$u };
var r$U = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, o$X = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" }, e$z = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" }, t$r = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, a$t = { gap: "0.5rem" }, n$t = { height: "0.25rem" }, d$l = { gap: "0.5rem" }, i$h = { root: r$U, header: o$X, content: e$z, file: t$r, fileList: a$t, progressbar: n$t, basic: d$l };
var o$W = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, i$g = { active: { top: "-1.25rem" } }, r$T = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, a$s = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, d$k = { root: o$W, over: i$g, in: r$T, on: a$s };
var o$V = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, r$S = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, e$y = { size: "1.5rem" }, t$q = { background: "{content.background}", padding: "1rem 0.25rem" }, c$g = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, n$s = { size: "1rem" }, a$r = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, s$4 = { gap: "0.5rem", padding: "1rem" }, u$3 = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, i$f = { background: "rgba(0, 0, 0, 0.5)" }, d$j = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, g$2 = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, f$5 = { size: "1.5rem" }, h$1 = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, l$9 = { root: o$V, navButton: r$S, navIcon: e$y, thumbnailsContent: t$q, thumbnailNavButton: c$g, thumbnailNavButtonIcon: n$s, caption: a$r, indicatorList: s$4, indicatorButton: u$3, insetIndicatorList: i$f, insetIndicatorButton: d$j, closeButton: g$2, closeButtonIcon: f$5, colorScheme: h$1 };
var o$U = { color: "{form.field.icon.color}" }, r$R = { icon: o$U };
var o$T = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, l$8 = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, i$e = { root: o$T, input: l$8 };
var o$S = { transitionDuration: "{transition.duration}" }, r$Q = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, a$q = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" }, i$d = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, e$x = { root: o$S, preview: r$Q, toolbar: a$q, action: i$d };
var o$R = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, r$P = { handle: o$R };
var r$O = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, o$Q = { fontWeight: "500" }, e$w = { size: "1rem" }, n$r = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } }, a$p = { root: r$O, text: o$Q, icon: e$w, colorScheme: n$r };
var o$P = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, r$N = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, n$q = { root: o$P, display: r$N };
var o$O = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, r$M = { borderRadius: "{border.radius.sm}" }, d$i = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, f$4 = { root: o$O, chip: r$M, colorScheme: d$i };
var r$L = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" }, o$N = { addon: r$L };
var r$K = { transitionDuration: "{transition.duration}" }, o$M = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, e$v = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } }, a$o = { root: r$K, button: o$M, colorScheme: e$v };
var r$J = { gap: "0.5rem" }, t$p = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, e$u = { root: r$J, input: t$p };
var o$L = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, d$h = { root: o$L };
var o$K = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, r$I = { background: "{primary.color}" }, t$o = { background: "{content.border.color}" }, n$p = { color: "{text.muted.color}" }, c$f = { root: o$K, value: r$I, range: t$o, text: n$p };
var o$J = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, r$H = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, d$g = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, i$c = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, t$n = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, e$t = { padding: "{list.option.padding}" }, l$7 = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, n$o = { root: o$J, list: r$H, option: d$g, optionGroup: i$c, checkmark: t$n, emptyMessage: e$t, colorScheme: l$7 };
var o$I = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, n$n = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, i$b = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, a$n = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, r$G = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, t$m = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background.}", color: "{navigation.submenu.label.color}" }, e$s = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, c$e = { borderColor: "{content.border.color}" }, d$f = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, g$1 = { root: o$I, baseItem: n$n, item: i$b, overlay: a$n, submenu: r$G, submenuLabel: t$m, submenuIcon: e$s, separator: c$e, mobileButton: d$f };
var o$H = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, n$m = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, a$m = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, i$a = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, t$l = { borderColor: "{content.border.color}" }, r$F = { root: o$H, list: n$m, item: a$m, submenuLabel: i$a, separator: t$l };
var o$G = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" }, i$9 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, n$l = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, r$E = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, a$l = { borderColor: "{content.border.color}" }, t$k = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, e$r = { root: o$G, baseItem: i$9, item: n$l, submenu: r$E, separator: a$l, mobileButton: t$k };
var o$F = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, r$D = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } }, e$q = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, n$k = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } }, l$6 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, s$3 = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, c$d = { root: { borderWidth: "1px" } }, a$k = { content: { padding: "0" } }, d$e = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, u$2 = { root: o$F, content: r$D, text: e$q, icon: n$k, closeButton: l$6, closeIcon: s$3, outlined: c$d, simple: a$k, colorScheme: d$e };
var e$p = { borderRadius: "{content.border.radius}", gap: "1rem" }, r$C = { background: "{content.border.color}", size: "0.5rem" }, a$j = { gap: "0.5rem" }, o$E = { size: "0.5rem" }, l$5 = { size: "1rem" }, t$j = { verticalGap: "0.5rem", horizontalGap: "1rem" }, b$1 = { root: e$p, meters: r$C, label: a$j, labelMarker: o$E, labelIcon: l$5, labelList: t$j };
var o$D = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, d$d = { width: "2.5rem", color: "{form.field.icon.color}" }, r$B = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, l$4 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, i$8 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, e$o = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, f$3 = { color: "{form.field.icon.color}" }, a$i = { borderRadius: "{border.radius.sm}" }, c$c = { padding: "{list.option.padding}" }, n$j = { root: o$D, dropdown: d$d, overlay: r$B, list: l$4, option: i$8, optionGroup: e$o, chip: a$i, clearIcon: f$3, emptyMessage: c$c };
var r$A = { gap: "1.125rem" }, a$h = { gap: "0.5rem" }, o$C = { root: r$A, controls: a$h };
var o$B = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, r$z = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" }, e$n = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, t$i = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, n$i = { root: o$B, node: r$z, nodeToggleButton: e$n, connector: t$i };
var o$A = { outline: { width: "2px", color: "{content.background}" } }, t$h = { root: o$A };
var o$z = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, r$y = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, t$g = { color: "{text.muted.color}" }, e$m = { maxWidth: "2.5rem" }, n$h = { root: o$z, navButton: r$y, currentPageReport: t$g, jumpToPageInput: e$m };
var r$x = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, o$y = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" }, e$l = { padding: "0.375rem 1.125rem" }, d$c = { fontWeight: "600" }, t$f = { padding: "0 1.125rem 1.125rem 1.125rem" }, n$g = { padding: "0 1.125rem 1.125rem 1.125rem" }, a$g = { root: r$x, header: o$y, toggleableHeader: e$l, title: d$c, content: t$f, footer: n$g };
var o$x = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, r$w = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } }, n$f = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, i$7 = { indent: "1rem" }, t$e = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, a$f = { root: o$x, panel: r$w, item: n$f, submenu: i$7, submenuIcon: t$e };
var r$v = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, o$w = { color: "{form.field.icon.color}" }, e$k = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, a$e = { gap: "0.5rem" }, d$b = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, n$e = { meter: r$v, icon: o$w, overlay: e$k, content: a$e, colorScheme: d$b };
var r$u = { gap: "1.125rem" }, a$d = { gap: "0.5rem" }, o$v = { root: r$u, controls: a$d };
var o$u = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, r$t = { padding: "{overlay.popover.padding}" }, e$j = { root: o$u, content: r$t };
var r$s = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" }, o$t = { background: "{primary.color}" }, e$i = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" }, t$d = { root: r$s, value: o$t, label: e$i };
var o$s = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } }, r$r = { colorScheme: o$s };
var o$r = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, r$q = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } }, e$h = { root: o$r, icon: r$q };
var o$q = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, r$p = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, i$6 = { root: o$q, icon: r$p };
var r$o = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, o$p = { colorScheme: r$o };
var r$n = { transitionDuration: "{transition.duration}" }, o$o = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, s$2 = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } }, a$c = { root: r$n, bar: o$o, colorScheme: s$2 };
var o$n = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, r$m = { width: "2.5rem", color: "{form.field.icon.color}" }, d$a = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, l$3 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, i$5 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, e$g = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, f$2 = { color: "{form.field.icon.color}" }, c$b = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, a$b = { padding: "{list.option.padding}" }, n$d = { root: o$n, dropdown: r$m, overlay: d$a, list: l$3, option: i$5, optionGroup: e$g, clearIcon: f$2, checkmark: c$b, emptyMessage: a$b };
var r$l = { borderRadius: "{form.field.border.radius}" }, o$m = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, d$9 = { root: r$l, colorScheme: o$m };
var r$k = { borderRadius: "{content.border.radius}" }, a$a = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, o$l = { root: r$k, colorScheme: a$a };
var o$k = { transitionDuration: "{transition.duration}" }, r$j = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, n$c = { background: "{primary.color}" }, t$c = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, e$f = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, a$9 = { root: o$k, track: r$j, range: n$c, handle: t$c, colorScheme: e$f };
var t$b = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, a$8 = { root: t$b };
var r$i = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, d$8 = { root: r$i };
var o$j = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, r$h = { background: "{content.border.color}" }, n$b = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, t$a = { root: o$j, gutter: r$h, handle: n$b };
var o$i = { transitionDuration: "{transition.duration}" }, r$g = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, e$e = { padding: "0.5rem", gap: "1rem" }, t$9 = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, n$a = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, a$7 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, c$a = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, d$7 = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, i$4 = { root: o$i, separator: r$g, step: e$e, stepHeader: t$9, stepTitle: n$a, stepNumber: a$7, steppanels: c$a, steppanel: d$7 };
var o$h = { transitionDuration: "{transition.duration}" }, r$f = { background: "{content.border.color}" }, t$8 = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, e$d = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, n$9 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, c$9 = { root: o$h, separator: r$f, itemLink: t$8, itemLabel: e$d, itemNumber: n$9 };
var o$g = { transitionDuration: "{transition.duration}" }, r$e = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, t$7 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, e$c = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, c$8 = { height: "1px", bottom: "-1px", background: "{primary.color}" }, n$8 = { root: o$g, tablist: r$e, item: t$7, itemIcon: e$c, activeBar: c$8 };
var o$f = { transitionDuration: "{transition.duration}" }, r$d = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, t$6 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, n$7 = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, c$7 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, e$b = { height: "1px", bottom: "-1px", background: "{primary.color}" }, a$6 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, i$3 = { root: o$f, tablist: r$d, tab: t$6, tabpanel: n$7, navButton: c$7, activeBar: e$b, colorScheme: a$6 };
var o$e = { transitionDuration: "{transition.duration}" }, r$c = { background: "{content.background}", borderColor: "{content.border.color}" }, t$5 = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, n$6 = { background: "{content.background}", color: "{content.color}" }, a$5 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, c$6 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, e$a = { root: o$e, tabList: r$c, tab: t$5, tabPanel: n$6, navButton: a$5, colorScheme: c$6 };
var r$b = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, o$d = { size: "0.75rem" }, a$4 = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, n$5 = { root: r$b, icon: o$d, colorScheme: a$4 };
var r$a = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, o$c = { gap: "0.25rem" }, d$6 = { margin: "2px 0" }, e$9 = { root: r$a, prompt: o$c, commandResponse: d$6 };
var o$b = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, d$5 = { root: o$b };
var o$a = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, i$2 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, n$4 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, a$3 = { mobileIndent: "1rem" }, t$4 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, r$9 = { borderColor: "{content.border.color}" }, c$5 = { root: o$a, list: i$2, item: n$4, submenu: a$3, submenuIcon: t$4, separator: r$9 };
var e$8 = { minHeight: "5rem" }, r$8 = { eventContent: { padding: "1rem 0" } }, o$9 = { eventContent: { padding: "0 1rem" } }, n$3 = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } }, t$3 = { color: "{content.border.color}", size: "2px" }, d$4 = { event: e$8, horizontal: r$8, vertical: o$9, eventMarker: n$3, eventConnector: t$3 };
var o$8 = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, r$7 = { size: "1.125rem" }, e$7 = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, n$2 = { gap: "0.5rem" }, a$2 = { fontWeight: "500", fontSize: "1rem" }, s$1 = { fontWeight: "500", fontSize: "0.875rem" }, c$4 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, l$2 = { size: "1rem" }, t$2 = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } }, u$1 = { root: o$8, icon: r$7, content: e$7, text: n$2, summary: a$2, detail: s$1, closeButton: c$4, closeIcon: l$2, colorScheme: t$2 };
var r$6 = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } }, o$7 = { disabledColor: "{form.field.disabled.color}" }, e$6 = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } }, d$3 = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } }, c$3 = { root: r$6, icon: o$7, content: e$6, colorScheme: d$3 };
var r$5 = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, o$6 = { borderRadius: "50%", size: "1rem" }, e$5 = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, c$2 = { root: r$5, handle: o$6, colorScheme: e$5 };
var o$5 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, r$4 = { root: o$5 };
var r$3 = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, o$4 = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, e$4 = { root: r$3, colorScheme: o$4 };
var o$3 = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, r$2 = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" }, e$3 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, t$1 = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, c$1 = { size: "2rem" }, n$1 = { margin: "0 0 0.5rem 0" }, d$2 = { root: o$3, node: r$2, nodeIcon: e$3, nodeToggleButton: t$1, loadingIcon: c$1, filter: n$1 };
var o$2 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, r$1 = { width: "2.5rem", color: "{form.field.icon.color}" }, d$1 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, l$1 = { padding: "{list.padding}" }, e$2 = { padding: "{list.option.padding}" }, i$1 = { borderRadius: "{border.radius.sm}" }, f$1 = { color: "{form.field.icon.color}" }, a$1 = { root: o$2, dropdown: r$1, overlay: d$1, tree: l$1, emptyMessage: e$2, chip: i$1, clearIcon: f$1 };
var o$1 = { transitionDuration: "{transition.duration}" }, r = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, e$1 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, t = { fontWeight: "600" }, c = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, n = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, d = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" }, l = { fontWeight: "600" }, i = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, a = { width: "0.5rem" }, g = { width: "1px", color: "{primary.color}" }, s = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, u = { size: "2rem" }, h = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, b = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, f = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, m = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, k = { root: o$1, header: r, headerCell: e$1, columnTitle: t, row: c, bodyCell: n, footerCell: d, columnFooter: l, footer: i, columnResizer: a, resizeIndicator: g, sortIcon: s, loadingIcon: u, nodeToggleButton: h, paginatorTop: b, paginatorBottom: f, colorScheme: m };
var o = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, e = { loader: o };
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}
function ownKeys(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _defineProperty(e2, r2, t2) {
  return (r2 = _toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, { value: t2, enumerable: true, configurable: true, writable: true }) : e2[r2] = t2, e2;
}
function _toPropertyKey(t2) {
  var i2 = _toPrimitive(t2, "string");
  return "symbol" == _typeof(i2) ? i2 : i2 + "";
}
function _toPrimitive(t2, r2) {
  if ("object" != _typeof(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != _typeof(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
var index = _objectSpread(_objectSpread({}, e$Q), {}, {
  components: {
    accordion: c$p,
    autocomplete: a$E,
    avatar: n$B,
    badge: d$v,
    blockui: o$1g,
    breadcrumb: t$B,
    button: e$P,
    datepicker: k$1,
    card: d$u,
    carousel: t$z,
    cascadeselect: f$8,
    checkbox: e$M,
    chip: s$8,
    colorpicker: s$7,
    confirmdialog: r$14,
    confirmpopup: a$z,
    contextmenu: c$k,
    dataview: c$i,
    datatable: k$2,
    dialog: e$E,
    divider: t$u,
    dock: d$o,
    drawer: e$C,
    editor: l$a,
    fieldset: e$A,
    fileupload: i$h,
    iftalabel: i$e,
    floatlabel: d$k,
    galleria: l$9,
    iconfield: r$R,
    image: e$x,
    imagecompare: r$P,
    inlinemessage: a$p,
    inplace: n$q,
    inputchips: f$4,
    inputgroup: o$N,
    inputnumber: a$o,
    inputotp: e$u,
    inputtext: d$h,
    knob: c$f,
    listbox: n$o,
    megamenu: g$1,
    menu: r$F,
    menubar: e$r,
    message: u$2,
    metergroup: b$1,
    multiselect: n$j,
    orderlist: o$C,
    organizationchart: n$i,
    overlaybadge: t$h,
    popover: e$j,
    paginator: n$h,
    password: n$e,
    panel: a$g,
    panelmenu: a$f,
    picklist: o$v,
    progressbar: t$d,
    progressspinner: r$r,
    radiobutton: e$h,
    rating: i$6,
    ripple: o$p,
    scrollpanel: a$c,
    select: n$d,
    selectbutton: d$9,
    skeleton: o$l,
    slider: a$9,
    speeddial: a$8,
    splitter: t$a,
    splitbutton: d$8,
    stepper: i$4,
    steps: c$9,
    tabmenu: n$8,
    tabs: i$3,
    tabview: e$a,
    textarea: d$5,
    tieredmenu: c$5,
    tag: n$5,
    terminal: e$9,
    timeline: d$4,
    togglebutton: c$3,
    toggleswitch: c$2,
    tree: d$2,
    treeselect: a$1,
    treetable: k,
    toast: u$1,
    toolbar: r$4,
    tooltip: e$4,
    virtualscroller: e
  }
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var dexie_min$1 = { exports: {} };
var dexie_min = dexie_min$1.exports;
var hasRequiredDexie_min;
function requireDexie_min() {
  if (hasRequiredDexie_min) return dexie_min$1.exports;
  hasRequiredDexie_min = 1;
  (function(module, exports) {
    (function(e2, t2) {
      module.exports = t2();
    })(dexie_min, function() {
      var s2 = function(e3, t3) {
        return (s2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
          e4.__proto__ = t4;
        } || function(e4, t4) {
          for (var n3 in t4) Object.prototype.hasOwnProperty.call(t4, n3) && (e4[n3] = t4[n3]);
        })(e3, t3);
      };
      var _2 = function() {
        return (_2 = Object.assign || function(e3) {
          for (var t3, n3 = 1, r3 = arguments.length; n3 < r3; n3++) for (var i3 in t3 = arguments[n3]) Object.prototype.hasOwnProperty.call(t3, i3) && (e3[i3] = t3[i3]);
          return e3;
        }).apply(this, arguments);
      };
      function i2(e3, t3, n3) {
        for (var r3, i3 = 0, o3 = t3.length; i3 < o3; i3++) !r3 && i3 in t3 || ((r3 = r3 || Array.prototype.slice.call(t3, 0, i3))[i3] = t3[i3]);
        return e3.concat(r3 || Array.prototype.slice.call(t3));
      }
      var f2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : commonjsGlobal, x = Object.keys, k2 = Array.isArray;
      function a2(t3, n3) {
        return "object" != typeof n3 || x(n3).forEach(function(e3) {
          t3[e3] = n3[e3];
        }), t3;
      }
      "undefined" == typeof Promise || f2.Promise || (f2.Promise = Promise);
      var c2 = Object.getPrototypeOf, n2 = {}.hasOwnProperty;
      function m2(e3, t3) {
        return n2.call(e3, t3);
      }
      function r2(t3, n3) {
        "function" == typeof n3 && (n3 = n3(c2(t3))), ("undefined" == typeof Reflect ? x : Reflect.ownKeys)(n3).forEach(function(e3) {
          l2(t3, e3, n3[e3]);
        });
      }
      var u2 = Object.defineProperty;
      function l2(e3, t3, n3, r3) {
        u2(e3, t3, a2(n3 && m2(n3, "get") && "function" == typeof n3.get ? { get: n3.get, set: n3.set, configurable: true } : { value: n3, configurable: true, writable: true }, r3));
      }
      function o2(t3) {
        return { from: function(e3) {
          return t3.prototype = Object.create(e3.prototype), l2(t3.prototype, "constructor", t3), { extend: r2.bind(null, t3.prototype) };
        } };
      }
      var h2 = Object.getOwnPropertyDescriptor;
      var d2 = [].slice;
      function b2(e3, t3, n3) {
        return d2.call(e3, t3, n3);
      }
      function p2(e3, t3) {
        return t3(e3);
      }
      function y2(e3) {
        if (!e3) throw new Error("Assertion Failed");
      }
      function v2(e3) {
        f2.setImmediate ? setImmediate(e3) : setTimeout(e3, 0);
      }
      function O(e3, t3) {
        if ("string" == typeof t3 && m2(e3, t3)) return e3[t3];
        if (!t3) return e3;
        if ("string" != typeof t3) {
          for (var n3 = [], r3 = 0, i3 = t3.length; r3 < i3; ++r3) {
            var o3 = O(e3, t3[r3]);
            n3.push(o3);
          }
          return n3;
        }
        var a3 = t3.indexOf(".");
        if (-1 !== a3) {
          var u3 = e3[t3.substr(0, a3)];
          return null == u3 ? void 0 : O(u3, t3.substr(a3 + 1));
        }
      }
      function P(e3, t3, n3) {
        if (e3 && void 0 !== t3 && !("isFrozen" in Object && Object.isFrozen(e3))) if ("string" != typeof t3 && "length" in t3) {
          y2("string" != typeof n3 && "length" in n3);
          for (var r3 = 0, i3 = t3.length; r3 < i3; ++r3) P(e3, t3[r3], n3[r3]);
        } else {
          var o3, a3, u3 = t3.indexOf(".");
          -1 !== u3 ? (o3 = t3.substr(0, u3), "" === (a3 = t3.substr(u3 + 1)) ? void 0 === n3 ? k2(e3) && !isNaN(parseInt(o3)) ? e3.splice(o3, 1) : delete e3[o3] : e3[o3] = n3 : P(u3 = !(u3 = e3[o3]) || !m2(e3, o3) ? e3[o3] = {} : u3, a3, n3)) : void 0 === n3 ? k2(e3) && !isNaN(parseInt(t3)) ? e3.splice(t3, 1) : delete e3[t3] : e3[t3] = n3;
        }
      }
      function g2(e3) {
        var t3, n3 = {};
        for (t3 in e3) m2(e3, t3) && (n3[t3] = e3[t3]);
        return n3;
      }
      var t2 = [].concat;
      function w2(e3) {
        return t2.apply([], e3);
      }
      var e2 = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(w2([8, 16, 32, 64].map(function(t3) {
        return ["Int", "Uint", "Float"].map(function(e3) {
          return e3 + t3 + "Array";
        });
      }))).filter(function(e3) {
        return f2[e3];
      }), K2 = new Set(e2.map(function(e3) {
        return f2[e3];
      }));
      var E2 = null;
      function S2(e3) {
        E2 = /* @__PURE__ */ new WeakMap();
        e3 = function e4(t3) {
          if (!t3 || "object" != typeof t3) return t3;
          var n3 = E2.get(t3);
          if (n3) return n3;
          if (k2(t3)) {
            n3 = [], E2.set(t3, n3);
            for (var r3 = 0, i3 = t3.length; r3 < i3; ++r3) n3.push(e4(t3[r3]));
          } else if (K2.has(t3.constructor)) n3 = t3;
          else {
            var o3, a3 = c2(t3);
            for (o3 in n3 = a3 === Object.prototype ? {} : Object.create(a3), E2.set(t3, n3), t3) m2(t3, o3) && (n3[o3] = e4(t3[o3]));
          }
          return n3;
        }(e3);
        return E2 = null, e3;
      }
      var j = {}.toString;
      function A2(e3) {
        return j.call(e3).slice(8, -1);
      }
      var C2 = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator", T2 = "symbol" == typeof C2 ? function(e3) {
        var t3;
        return null != e3 && (t3 = e3[C2]) && t3.apply(e3);
      } : function() {
        return null;
      };
      function q(e3, t3) {
        t3 = e3.indexOf(t3);
        return 0 <= t3 && e3.splice(t3, 1), 0 <= t3;
      }
      var D = {};
      function I(e3) {
        var t3, n3, r3, i3;
        if (1 === arguments.length) {
          if (k2(e3)) return e3.slice();
          if (this === D && "string" == typeof e3) return [e3];
          if (i3 = T2(e3)) {
            for (n3 = []; !(r3 = i3.next()).done; ) n3.push(r3.value);
            return n3;
          }
          if (null == e3) return [e3];
          if ("number" != typeof (t3 = e3.length)) return [e3];
          for (n3 = new Array(t3); t3--; ) n3[t3] = e3[t3];
          return n3;
        }
        for (t3 = arguments.length, n3 = new Array(t3); t3--; ) n3[t3] = arguments[t3];
        return n3;
      }
      var B = "undefined" != typeof Symbol ? function(e3) {
        return "AsyncFunction" === e3[Symbol.toStringTag];
      } : function() {
        return false;
      }, R = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], F2 = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(R), M = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function N2(e3, t3) {
        this.name = e3, this.message = t3;
      }
      function L(e3, t3) {
        return e3 + ". Errors: " + Object.keys(t3).map(function(e4) {
          return t3[e4].toString();
        }).filter(function(e4, t4, n3) {
          return n3.indexOf(e4) === t4;
        }).join("\n");
      }
      function U2(e3, t3, n3, r3) {
        this.failures = t3, this.failedKeys = r3, this.successCount = n3, this.message = L(e3, t3);
      }
      function V(e3, t3) {
        this.name = "BulkError", this.failures = Object.keys(t3).map(function(e4) {
          return t3[e4];
        }), this.failuresByPos = t3, this.message = L(e3, this.failures);
      }
      o2(N2).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), o2(U2).from(N2), o2(V).from(N2);
      var z2 = F2.reduce(function(e3, t3) {
        return e3[t3] = t3 + "Error", e3;
      }, {}), W = N2, Y2 = F2.reduce(function(e3, n3) {
        var r3 = n3 + "Error";
        function t3(e4, t4) {
          this.name = r3, e4 ? "string" == typeof e4 ? (this.message = "".concat(e4).concat(t4 ? "\n " + t4 : ""), this.inner = t4 || null) : "object" == typeof e4 && (this.message = "".concat(e4.name, " ").concat(e4.message), this.inner = e4) : (this.message = M[n3] || r3, this.inner = null);
        }
        return o2(t3).from(W), e3[n3] = t3, e3;
      }, {});
      Y2.Syntax = SyntaxError, Y2.Type = TypeError, Y2.Range = RangeError;
      var $2 = R.reduce(function(e3, t3) {
        return e3[t3 + "Error"] = Y2[t3], e3;
      }, {});
      var Q2 = F2.reduce(function(e3, t3) {
        return -1 === ["Syntax", "Type", "Range"].indexOf(t3) && (e3[t3 + "Error"] = Y2[t3]), e3;
      }, {});
      function G2() {
      }
      function X(e3) {
        return e3;
      }
      function H(t3, n3) {
        return null == t3 || t3 === X ? n3 : function(e3) {
          return n3(t3(e3));
        };
      }
      function J(e3, t3) {
        return function() {
          e3.apply(this, arguments), t3.apply(this, arguments);
        };
      }
      function Z(i3, o3) {
        return i3 === G2 ? o3 : function() {
          var e3 = i3.apply(this, arguments);
          void 0 !== e3 && (arguments[0] = e3);
          var t3 = this.onsuccess, n3 = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var r3 = o3.apply(this, arguments);
          return t3 && (this.onsuccess = this.onsuccess ? J(t3, this.onsuccess) : t3), n3 && (this.onerror = this.onerror ? J(n3, this.onerror) : n3), void 0 !== r3 ? r3 : e3;
        };
      }
      function ee2(n3, r3) {
        return n3 === G2 ? r3 : function() {
          n3.apply(this, arguments);
          var e3 = this.onsuccess, t3 = this.onerror;
          this.onsuccess = this.onerror = null, r3.apply(this, arguments), e3 && (this.onsuccess = this.onsuccess ? J(e3, this.onsuccess) : e3), t3 && (this.onerror = this.onerror ? J(t3, this.onerror) : t3);
        };
      }
      function te(i3, o3) {
        return i3 === G2 ? o3 : function(e3) {
          var t3 = i3.apply(this, arguments);
          a2(e3, t3);
          var n3 = this.onsuccess, r3 = this.onerror;
          this.onsuccess = null, this.onerror = null;
          e3 = o3.apply(this, arguments);
          return n3 && (this.onsuccess = this.onsuccess ? J(n3, this.onsuccess) : n3), r3 && (this.onerror = this.onerror ? J(r3, this.onerror) : r3), void 0 === t3 ? void 0 === e3 ? void 0 : e3 : a2(t3, e3);
        };
      }
      function ne2(e3, t3) {
        return e3 === G2 ? t3 : function() {
          return false !== t3.apply(this, arguments) && e3.apply(this, arguments);
        };
      }
      function re(i3, o3) {
        return i3 === G2 ? o3 : function() {
          var e3 = i3.apply(this, arguments);
          if (e3 && "function" == typeof e3.then) {
            for (var t3 = this, n3 = arguments.length, r3 = new Array(n3); n3--; ) r3[n3] = arguments[n3];
            return e3.then(function() {
              return o3.apply(t3, r3);
            });
          }
          return o3.apply(this, arguments);
        };
      }
      Q2.ModifyError = U2, Q2.DexieError = N2, Q2.BulkError = V;
      var ie2 = "undefined" != typeof location && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function oe2(e3) {
        ie2 = e3;
      }
      var ae2 = {}, ue2 = 100, e2 = "undefined" == typeof Promise ? [] : function() {
        var e3 = Promise.resolve();
        if ("undefined" == typeof crypto || !crypto.subtle) return [e3, c2(e3), e3];
        var t3 = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t3, c2(t3), e3];
      }(), R = e2[0], F2 = e2[1], e2 = e2[2], F2 = F2 && F2.then, se = R && R.constructor, ce = !!e2;
      var le2 = function(e3, t3) {
        be2.push([e3, t3]), he && (queueMicrotask(Se), he = false);
      }, fe2 = true, he = true, de2 = [], pe = [], ye = X, ve2 = { id: "global", global: true, ref: 0, unhandleds: [], onunhandled: G2, pgp: false, env: {}, finalize: G2 }, me = ve2, be2 = [], ge = 0, we = [];
      function _e2(e3) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = false;
        var t3 = this._PSD = me;
        if ("function" != typeof e3) {
          if (e3 !== ae2) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (false === this._state && Oe(this, this._value));
        }
        this._state = null, this._value = null, ++t3.ref, function t4(r3, e4) {
          try {
            e4(function(n3) {
              if (null === r3._state) {
                if (n3 === r3) throw new TypeError("A promise cannot be resolved with itself.");
                var e5 = r3._lib && je();
                n3 && "function" == typeof n3.then ? t4(r3, function(e6, t5) {
                  n3 instanceof _e2 ? n3._then(e6, t5) : n3.then(e6, t5);
                }) : (r3._state = true, r3._value = n3, Pe(r3)), e5 && Ae();
              }
            }, Oe.bind(null, r3));
          } catch (e5) {
            Oe(r3, e5);
          }
        }(this, e3);
      }
      var xe2 = { get: function() {
        var u3 = me, t3 = Fe;
        function e3(n3, r3) {
          var i3 = this, o3 = !u3.global && (u3 !== me || t3 !== Fe), a3 = o3 && !Ue(), e4 = new _e2(function(e5, t4) {
            Ke(i3, new ke(Qe(n3, u3, o3, a3), Qe(r3, u3, o3, a3), e5, t4, u3));
          });
          return this._consoleTask && (e4._consoleTask = this._consoleTask), e4;
        }
        return e3.prototype = ae2, e3;
      }, set: function(e3) {
        l2(this, "then", e3 && e3.prototype === ae2 ? xe2 : { get: function() {
          return e3;
        }, set: xe2.set });
      } };
      function ke(e3, t3, n3, r3, i3) {
        this.onFulfilled = "function" == typeof e3 ? e3 : null, this.onRejected = "function" == typeof t3 ? t3 : null, this.resolve = n3, this.reject = r3, this.psd = i3;
      }
      function Oe(e3, t3) {
        var n3, r3;
        pe.push(t3), null === e3._state && (n3 = e3._lib && je(), t3 = ye(t3), e3._state = false, e3._value = t3, r3 = e3, de2.some(function(e4) {
          return e4._value === r3._value;
        }) || de2.push(r3), Pe(e3), n3 && Ae());
      }
      function Pe(e3) {
        var t3 = e3._listeners;
        e3._listeners = [];
        for (var n3 = 0, r3 = t3.length; n3 < r3; ++n3) Ke(e3, t3[n3]);
        var i3 = e3._PSD;
        --i3.ref || i3.finalize(), 0 === ge && (++ge, le2(function() {
          0 == --ge && Ce();
        }, []));
      }
      function Ke(e3, t3) {
        if (null !== e3._state) {
          var n3 = e3._state ? t3.onFulfilled : t3.onRejected;
          if (null === n3) return (e3._state ? t3.resolve : t3.reject)(e3._value);
          ++t3.psd.ref, ++ge, le2(Ee, [n3, e3, t3]);
        } else e3._listeners.push(t3);
      }
      function Ee(e3, t3, n3) {
        try {
          var r3, i3 = t3._value;
          !t3._state && pe.length && (pe = []), r3 = ie2 && t3._consoleTask ? t3._consoleTask.run(function() {
            return e3(i3);
          }) : e3(i3), t3._state || -1 !== pe.indexOf(i3) || function(e4) {
            var t4 = de2.length;
            for (; t4; ) if (de2[--t4]._value === e4._value) return de2.splice(t4, 1);
          }(t3), n3.resolve(r3);
        } catch (e4) {
          n3.reject(e4);
        } finally {
          0 == --ge && Ce(), --n3.psd.ref || n3.psd.finalize();
        }
      }
      function Se() {
        $e(ve2, function() {
          je() && Ae();
        });
      }
      function je() {
        var e3 = fe2;
        return he = fe2 = false, e3;
      }
      function Ae() {
        var e3, t3, n3;
        do {
          for (; 0 < be2.length; ) for (e3 = be2, be2 = [], n3 = e3.length, t3 = 0; t3 < n3; ++t3) {
            var r3 = e3[t3];
            r3[0].apply(null, r3[1]);
          }
        } while (0 < be2.length);
        he = fe2 = true;
      }
      function Ce() {
        var e3 = de2;
        de2 = [], e3.forEach(function(e4) {
          e4._PSD.onunhandled.call(null, e4._value, e4);
        });
        for (var t3 = we.slice(0), n3 = t3.length; n3; ) t3[--n3]();
      }
      function Te(e3) {
        return new _e2(ae2, false, e3);
      }
      function qe(n3, r3) {
        var i3 = me;
        return function() {
          var e3 = je(), t3 = me;
          try {
            return We(i3, true), n3.apply(this, arguments);
          } catch (e4) {
            r3 && r3(e4);
          } finally {
            We(t3, false), e3 && Ae();
          }
        };
      }
      r2(_e2.prototype, { then: xe2, _then: function(e3, t3) {
        Ke(this, new ke(null, null, e3, t3, me));
      }, catch: function(e3) {
        if (1 === arguments.length) return this.then(null, e3);
        var t3 = e3, n3 = arguments[1];
        return "function" == typeof t3 ? this.then(null, function(e4) {
          return (e4 instanceof t3 ? n3 : Te)(e4);
        }) : this.then(null, function(e4) {
          return (e4 && e4.name === t3 ? n3 : Te)(e4);
        });
      }, finally: function(t3) {
        return this.then(function(e3) {
          return _e2.resolve(t3()).then(function() {
            return e3;
          });
        }, function(e3) {
          return _e2.resolve(t3()).then(function() {
            return Te(e3);
          });
        });
      }, timeout: function(r3, i3) {
        var o3 = this;
        return r3 < 1 / 0 ? new _e2(function(e3, t3) {
          var n3 = setTimeout(function() {
            return t3(new Y2.Timeout(i3));
          }, r3);
          o3.then(e3, t3).finally(clearTimeout.bind(null, n3));
        }) : this;
      } }), "undefined" != typeof Symbol && Symbol.toStringTag && l2(_e2.prototype, Symbol.toStringTag, "Dexie.Promise"), ve2.env = Ye(), r2(_e2, { all: function() {
        var o3 = I.apply(null, arguments).map(Ve);
        return new _e2(function(n3, r3) {
          0 === o3.length && n3([]);
          var i3 = o3.length;
          o3.forEach(function(e3, t3) {
            return _e2.resolve(e3).then(function(e4) {
              o3[t3] = e4, --i3 || n3(o3);
            }, r3);
          });
        });
      }, resolve: function(n3) {
        return n3 instanceof _e2 ? n3 : n3 && "function" == typeof n3.then ? new _e2(function(e3, t3) {
          n3.then(e3, t3);
        }) : new _e2(ae2, true, n3);
      }, reject: Te, race: function() {
        var e3 = I.apply(null, arguments).map(Ve);
        return new _e2(function(t3, n3) {
          e3.map(function(e4) {
            return _e2.resolve(e4).then(t3, n3);
          });
        });
      }, PSD: { get: function() {
        return me;
      }, set: function(e3) {
        return me = e3;
      } }, totalEchoes: { get: function() {
        return Fe;
      } }, newPSD: Ne, usePSD: $e, scheduler: { get: function() {
        return le2;
      }, set: function(e3) {
        le2 = e3;
      } }, rejectionMapper: { get: function() {
        return ye;
      }, set: function(e3) {
        ye = e3;
      } }, follow: function(i3, n3) {
        return new _e2(function(e3, t3) {
          return Ne(function(n4, r3) {
            var e4 = me;
            e4.unhandleds = [], e4.onunhandled = r3, e4.finalize = J(function() {
              var t4, e5 = this;
              t4 = function() {
                0 === e5.unhandleds.length ? n4() : r3(e5.unhandleds[0]);
              }, we.push(function e6() {
                t4(), we.splice(we.indexOf(e6), 1);
              }), ++ge, le2(function() {
                0 == --ge && Ce();
              }, []);
            }, e4.finalize), i3();
          }, n3, e3, t3);
        });
      } }), se && (se.allSettled && l2(_e2, "allSettled", function() {
        var e3 = I.apply(null, arguments).map(Ve);
        return new _e2(function(n3) {
          0 === e3.length && n3([]);
          var r3 = e3.length, i3 = new Array(r3);
          e3.forEach(function(e4, t3) {
            return _e2.resolve(e4).then(function(e5) {
              return i3[t3] = { status: "fulfilled", value: e5 };
            }, function(e5) {
              return i3[t3] = { status: "rejected", reason: e5 };
            }).then(function() {
              return --r3 || n3(i3);
            });
          });
        });
      }), se.any && "undefined" != typeof AggregateError && l2(_e2, "any", function() {
        var e3 = I.apply(null, arguments).map(Ve);
        return new _e2(function(n3, r3) {
          0 === e3.length && r3(new AggregateError([]));
          var i3 = e3.length, o3 = new Array(i3);
          e3.forEach(function(e4, t3) {
            return _e2.resolve(e4).then(function(e5) {
              return n3(e5);
            }, function(e5) {
              o3[t3] = e5, --i3 || r3(new AggregateError(o3));
            });
          });
        });
      }), se.withResolvers && (_e2.withResolvers = se.withResolvers));
      var De = { awaits: 0, echoes: 0, id: 0 }, Ie = 0, Be = [], Re2 = 0, Fe = 0, Me = 0;
      function Ne(e3, t3, n3, r3) {
        var i3 = me, o3 = Object.create(i3);
        o3.parent = i3, o3.ref = 0, o3.global = false, o3.id = ++Me, ve2.env, o3.env = ce ? { Promise: _e2, PromiseProp: { value: _e2, configurable: true, writable: true }, all: _e2.all, race: _e2.race, allSettled: _e2.allSettled, any: _e2.any, resolve: _e2.resolve, reject: _e2.reject } : {}, t3 && a2(o3, t3), ++i3.ref, o3.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        };
        r3 = $e(o3, e3, n3, r3);
        return 0 === o3.ref && o3.finalize(), r3;
      }
      function Le() {
        return De.id || (De.id = ++Ie), ++De.awaits, De.echoes += ue2, De.id;
      }
      function Ue() {
        return !!De.awaits && (0 == --De.awaits && (De.id = 0), De.echoes = De.awaits * ue2, true);
      }
      function Ve(e3) {
        return De.echoes && e3 && e3.constructor === se ? (Le(), e3.then(function(e4) {
          return Ue(), e4;
        }, function(e4) {
          return Ue(), Xe(e4);
        })) : e3;
      }
      function ze() {
        var e3 = Be[Be.length - 1];
        Be.pop(), We(e3, false);
      }
      function We(e3, t3) {
        var n3, r3 = me;
        (t3 ? !De.echoes || Re2++ && e3 === me : !Re2 || --Re2 && e3 === me) || queueMicrotask(t3 ? function(e4) {
          ++Fe, De.echoes && 0 != --De.echoes || (De.echoes = De.awaits = De.id = 0), Be.push(me), We(e4, true);
        }.bind(null, e3) : ze), e3 !== me && (me = e3, r3 === ve2 && (ve2.env = Ye()), ce && (n3 = ve2.env.Promise, t3 = e3.env, (r3.global || e3.global) && (Object.defineProperty(f2, "Promise", t3.PromiseProp), n3.all = t3.all, n3.race = t3.race, n3.resolve = t3.resolve, n3.reject = t3.reject, t3.allSettled && (n3.allSettled = t3.allSettled), t3.any && (n3.any = t3.any))));
      }
      function Ye() {
        var e3 = f2.Promise;
        return ce ? { Promise: e3, PromiseProp: Object.getOwnPropertyDescriptor(f2, "Promise"), all: e3.all, race: e3.race, allSettled: e3.allSettled, any: e3.any, resolve: e3.resolve, reject: e3.reject } : {};
      }
      function $e(e3, t3, n3, r3, i3) {
        var o3 = me;
        try {
          return We(e3, true), t3(n3, r3, i3);
        } finally {
          We(o3, false);
        }
      }
      function Qe(t3, n3, r3, i3) {
        return "function" != typeof t3 ? t3 : function() {
          var e3 = me;
          r3 && Le(), We(n3, true);
          try {
            return t3.apply(this, arguments);
          } finally {
            We(e3, false), i3 && queueMicrotask(Ue);
          }
        };
      }
      function Ge(e3) {
        Promise === se && 0 === De.echoes ? 0 === Re2 ? e3() : enqueueNativeMicroTask(e3) : setTimeout(e3, 0);
      }
      -1 === ("" + F2).indexOf("[native code]") && (Le = Ue = G2);
      var Xe = _e2.reject;
      var He = String.fromCharCode(65535), Je = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Ze = "String expected.", et = [], tt2 = "__dbnames", nt2 = "readonly", rt2 = "readwrite";
      function it(e3, t3) {
        return e3 ? t3 ? function() {
          return e3.apply(this, arguments) && t3.apply(this, arguments);
        } : e3 : t3;
      }
      var ot = { type: 3, lower: -1 / 0, lowerOpen: false, upper: [[]], upperOpen: false };
      function at2(t3) {
        return "string" != typeof t3 || /\./.test(t3) ? function(e3) {
          return e3;
        } : function(e3) {
          return void 0 === e3[t3] && t3 in e3 && delete (e3 = S2(e3))[t3], e3;
        };
      }
      function ut() {
        throw Y2.Type();
      }
      function st2(e3, t3) {
        try {
          var n3 = ct(e3), r3 = ct(t3);
          if (n3 !== r3) return "Array" === n3 ? 1 : "Array" === r3 ? -1 : "binary" === n3 ? 1 : "binary" === r3 ? -1 : "string" === n3 ? 1 : "string" === r3 ? -1 : "Date" === n3 ? 1 : "Date" !== r3 ? NaN : -1;
          switch (n3) {
            case "number":
            case "Date":
            case "string":
              return t3 < e3 ? 1 : e3 < t3 ? -1 : 0;
            case "binary":
              return function(e4, t4) {
                for (var n4 = e4.length, r4 = t4.length, i3 = n4 < r4 ? n4 : r4, o3 = 0; o3 < i3; ++o3) if (e4[o3] !== t4[o3]) return e4[o3] < t4[o3] ? -1 : 1;
                return n4 === r4 ? 0 : n4 < r4 ? -1 : 1;
              }(lt(e3), lt(t3));
            case "Array":
              return function(e4, t4) {
                for (var n4 = e4.length, r4 = t4.length, i3 = n4 < r4 ? n4 : r4, o3 = 0; o3 < i3; ++o3) {
                  var a3 = st2(e4[o3], t4[o3]);
                  if (0 !== a3) return a3;
                }
                return n4 === r4 ? 0 : n4 < r4 ? -1 : 1;
              }(e3, t3);
          }
        } catch (e4) {
        }
        return NaN;
      }
      function ct(e3) {
        var t3 = typeof e3;
        if ("object" != t3) return t3;
        if (ArrayBuffer.isView(e3)) return "binary";
        e3 = A2(e3);
        return "ArrayBuffer" === e3 ? "binary" : e3;
      }
      function lt(e3) {
        return e3 instanceof Uint8Array ? e3 : ArrayBuffer.isView(e3) ? new Uint8Array(e3.buffer, e3.byteOffset, e3.byteLength) : new Uint8Array(e3);
      }
      var ft = (ht.prototype._trans = function(e3, r3, t3) {
        var n3 = this._tx || me.trans, i3 = this.name, o3 = ie2 && "undefined" != typeof console && console.createTask && console.createTask("Dexie: ".concat("readonly" === e3 ? "read" : "write", " ").concat(this.name));
        function a3(e4, t4, n4) {
          if (!n4.schema[i3]) throw new Y2.NotFound("Table " + i3 + " not part of transaction");
          return r3(n4.idbtrans, n4);
        }
        var u3 = je();
        try {
          var s3 = n3 && n3.db._novip === this.db._novip ? n3 === me.trans ? n3._promise(e3, a3, t3) : Ne(function() {
            return n3._promise(e3, a3, t3);
          }, { trans: n3, transless: me.transless || me }) : function t4(n4, r4, i4, o4) {
            if (n4.idbdb && (n4._state.openComplete || me.letThrough || n4._vip)) {
              var a4 = n4._createTransaction(r4, i4, n4._dbSchema);
              try {
                a4.create(), n4._state.PR1398_maxLoop = 3;
              } catch (e4) {
                return e4.name === z2.InvalidState && n4.isOpen() && 0 < --n4._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), n4.close({ disableAutoOpen: false }), n4.open().then(function() {
                  return t4(n4, r4, i4, o4);
                })) : Xe(e4);
              }
              return a4._promise(r4, function(e4, t5) {
                return Ne(function() {
                  return me.trans = a4, o4(e4, t5, a4);
                });
              }).then(function(e4) {
                if ("readwrite" === r4) try {
                  a4.idbtrans.commit();
                } catch (e5) {
                }
                return "readonly" === r4 ? e4 : a4._completion.then(function() {
                  return e4;
                });
              });
            }
            if (n4._state.openComplete) return Xe(new Y2.DatabaseClosed(n4._state.dbOpenError));
            if (!n4._state.isBeingOpened) {
              if (!n4._state.autoOpen) return Xe(new Y2.DatabaseClosed());
              n4.open().catch(G2);
            }
            return n4._state.dbReadyPromise.then(function() {
              return t4(n4, r4, i4, o4);
            });
          }(this.db, e3, [this.name], a3);
          return o3 && (s3._consoleTask = o3, s3 = s3.catch(function(e4) {
            return console.trace(e4), Xe(e4);
          })), s3;
        } finally {
          u3 && Ae();
        }
      }, ht.prototype.get = function(t3, e3) {
        var n3 = this;
        return t3 && t3.constructor === Object ? this.where(t3).first(e3) : null == t3 ? Xe(new Y2.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(e4) {
          return n3.core.get({ trans: e4, key: t3 }).then(function(e5) {
            return n3.hook.reading.fire(e5);
          });
        }).then(e3);
      }, ht.prototype.where = function(o3) {
        if ("string" == typeof o3) return new this.db.WhereClause(this, o3);
        if (k2(o3)) return new this.db.WhereClause(this, "[".concat(o3.join("+"), "]"));
        var n3 = x(o3);
        if (1 === n3.length) return this.where(n3[0]).equals(o3[n3[0]]);
        var e3 = this.schema.indexes.concat(this.schema.primKey).filter(function(t4) {
          if (t4.compound && n3.every(function(e5) {
            return 0 <= t4.keyPath.indexOf(e5);
          })) {
            for (var e4 = 0; e4 < n3.length; ++e4) if (-1 === n3.indexOf(t4.keyPath[e4])) return false;
            return true;
          }
          return false;
        }).sort(function(e4, t4) {
          return e4.keyPath.length - t4.keyPath.length;
        })[0];
        if (e3 && this.db._maxKey !== He) {
          var t3 = e3.keyPath.slice(0, n3.length);
          return this.where(t3).equals(t3.map(function(e4) {
            return o3[e4];
          }));
        }
        !e3 && ie2 && console.warn("The query ".concat(JSON.stringify(o3), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(n3.join("+"), "]"));
        var a3 = this.schema.idxByName;
        function u3(e4, t4) {
          return 0 === st2(e4, t4);
        }
        var r3 = n3.reduce(function(e4, t4) {
          var n4 = e4[0], r4 = e4[1], e4 = a3[t4], i3 = o3[t4];
          return [n4 || e4, n4 || !e4 ? it(r4, e4 && e4.multi ? function(e5) {
            e5 = O(e5, t4);
            return k2(e5) && e5.some(function(e6) {
              return u3(i3, e6);
            });
          } : function(e5) {
            return u3(i3, O(e5, t4));
          }) : r4];
        }, [null, null]), t3 = r3[0], r3 = r3[1];
        return t3 ? this.where(t3.name).equals(o3[t3.keyPath]).filter(r3) : e3 ? this.filter(r3) : this.where(n3).equals("");
      }, ht.prototype.filter = function(e3) {
        return this.toCollection().and(e3);
      }, ht.prototype.count = function(e3) {
        return this.toCollection().count(e3);
      }, ht.prototype.offset = function(e3) {
        return this.toCollection().offset(e3);
      }, ht.prototype.limit = function(e3) {
        return this.toCollection().limit(e3);
      }, ht.prototype.each = function(e3) {
        return this.toCollection().each(e3);
      }, ht.prototype.toArray = function(e3) {
        return this.toCollection().toArray(e3);
      }, ht.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, ht.prototype.orderBy = function(e3) {
        return new this.db.Collection(new this.db.WhereClause(this, k2(e3) ? "[".concat(e3.join("+"), "]") : e3));
      }, ht.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, ht.prototype.mapToClass = function(r3) {
        var e3, t3 = this.db, n3 = this.name;
        function i3() {
          return null !== e3 && e3.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = r3).prototype instanceof ut && (function(e4, t4) {
          if ("function" != typeof t4 && null !== t4) throw new TypeError("Class extends value " + String(t4) + " is not a constructor or null");
          function n4() {
            this.constructor = e4;
          }
          s2(e4, t4), e4.prototype = null === t4 ? Object.create(t4) : (n4.prototype = t4.prototype, new n4());
        }(i3, e3 = r3), Object.defineProperty(i3.prototype, "db", { get: function() {
          return t3;
        }, enumerable: false, configurable: true }), i3.prototype.table = function() {
          return n3;
        }, r3 = i3);
        for (var o3 = /* @__PURE__ */ new Set(), a3 = r3.prototype; a3; a3 = c2(a3)) Object.getOwnPropertyNames(a3).forEach(function(e4) {
          return o3.add(e4);
        });
        function u3(e4) {
          if (!e4) return e4;
          var t4, n4 = Object.create(r3.prototype);
          for (t4 in e4) if (!o3.has(t4)) try {
            n4[t4] = e4[t4];
          } catch (e5) {
          }
          return n4;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = u3, this.hook("reading", u3), r3;
      }, ht.prototype.defineClass = function() {
        return this.mapToClass(function(e3) {
          a2(this, e3);
        });
      }, ht.prototype.add = function(t3, n3) {
        var r3 = this, e3 = this.schema.primKey, i3 = e3.auto, o3 = e3.keyPath, a3 = t3;
        return o3 && i3 && (a3 = at2(o3)(t3)), this._trans("readwrite", function(e4) {
          return r3.core.mutate({ trans: e4, type: "add", keys: null != n3 ? [n3] : null, values: [a3] });
        }).then(function(e4) {
          return e4.numFailures ? _e2.reject(e4.failures[0]) : e4.lastResult;
        }).then(function(e4) {
          if (o3) try {
            P(t3, o3, e4);
          } catch (e5) {
          }
          return e4;
        });
      }, ht.prototype.update = function(e3, t3) {
        if ("object" != typeof e3 || k2(e3)) return this.where(":id").equals(e3).modify(t3);
        e3 = O(e3, this.schema.primKey.keyPath);
        return void 0 === e3 ? Xe(new Y2.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e3).modify(t3);
      }, ht.prototype.put = function(t3, n3) {
        var r3 = this, e3 = this.schema.primKey, i3 = e3.auto, o3 = e3.keyPath, a3 = t3;
        return o3 && i3 && (a3 = at2(o3)(t3)), this._trans("readwrite", function(e4) {
          return r3.core.mutate({ trans: e4, type: "put", values: [a3], keys: null != n3 ? [n3] : null });
        }).then(function(e4) {
          return e4.numFailures ? _e2.reject(e4.failures[0]) : e4.lastResult;
        }).then(function(e4) {
          if (o3) try {
            P(t3, o3, e4);
          } catch (e5) {
          }
          return e4;
        });
      }, ht.prototype.delete = function(t3) {
        var n3 = this;
        return this._trans("readwrite", function(e3) {
          return n3.core.mutate({ trans: e3, type: "delete", keys: [t3] });
        }).then(function(e3) {
          return e3.numFailures ? _e2.reject(e3.failures[0]) : void 0;
        });
      }, ht.prototype.clear = function() {
        var t3 = this;
        return this._trans("readwrite", function(e3) {
          return t3.core.mutate({ trans: e3, type: "deleteRange", range: ot });
        }).then(function(e3) {
          return e3.numFailures ? _e2.reject(e3.failures[0]) : void 0;
        });
      }, ht.prototype.bulkGet = function(t3) {
        var n3 = this;
        return this._trans("readonly", function(e3) {
          return n3.core.getMany({ keys: t3, trans: e3 }).then(function(e4) {
            return e4.map(function(e5) {
              return n3.hook.reading.fire(e5);
            });
          });
        });
      }, ht.prototype.bulkAdd = function(r3, e3, t3) {
        var o3 = this, a3 = Array.isArray(e3) ? e3 : void 0, u3 = (t3 = t3 || (a3 ? void 0 : e3)) ? t3.allKeys : void 0;
        return this._trans("readwrite", function(e4) {
          var t4 = o3.schema.primKey, n3 = t4.auto, t4 = t4.keyPath;
          if (t4 && a3) throw new Y2.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (a3 && a3.length !== r3.length) throw new Y2.InvalidArgument("Arguments objects and keys must have the same length");
          var i3 = r3.length, t4 = t4 && n3 ? r3.map(at2(t4)) : r3;
          return o3.core.mutate({ trans: e4, type: "add", keys: a3, values: t4, wantResults: u3 }).then(function(e5) {
            var t5 = e5.numFailures, n4 = e5.results, r4 = e5.lastResult, e5 = e5.failures;
            if (0 === t5) return u3 ? n4 : r4;
            throw new V("".concat(o3.name, ".bulkAdd(): ").concat(t5, " of ").concat(i3, " operations failed"), e5);
          });
        });
      }, ht.prototype.bulkPut = function(r3, e3, t3) {
        var o3 = this, a3 = Array.isArray(e3) ? e3 : void 0, u3 = (t3 = t3 || (a3 ? void 0 : e3)) ? t3.allKeys : void 0;
        return this._trans("readwrite", function(e4) {
          var t4 = o3.schema.primKey, n3 = t4.auto, t4 = t4.keyPath;
          if (t4 && a3) throw new Y2.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (a3 && a3.length !== r3.length) throw new Y2.InvalidArgument("Arguments objects and keys must have the same length");
          var i3 = r3.length, t4 = t4 && n3 ? r3.map(at2(t4)) : r3;
          return o3.core.mutate({ trans: e4, type: "put", keys: a3, values: t4, wantResults: u3 }).then(function(e5) {
            var t5 = e5.numFailures, n4 = e5.results, r4 = e5.lastResult, e5 = e5.failures;
            if (0 === t5) return u3 ? n4 : r4;
            throw new V("".concat(o3.name, ".bulkPut(): ").concat(t5, " of ").concat(i3, " operations failed"), e5);
          });
        });
      }, ht.prototype.bulkUpdate = function(t3) {
        var h3 = this, n3 = this.core, r3 = t3.map(function(e3) {
          return e3.key;
        }), i3 = t3.map(function(e3) {
          return e3.changes;
        }), d3 = [];
        return this._trans("readwrite", function(e3) {
          return n3.getMany({ trans: e3, keys: r3, cache: "clone" }).then(function(c3) {
            var l3 = [], f3 = [];
            t3.forEach(function(e4, t4) {
              var n4 = e4.key, r4 = e4.changes, i4 = c3[t4];
              if (i4) {
                for (var o3 = 0, a3 = Object.keys(r4); o3 < a3.length; o3++) {
                  var u3 = a3[o3], s4 = r4[u3];
                  if (u3 === h3.schema.primKey.keyPath) {
                    if (0 !== st2(s4, n4)) throw new Y2.Constraint("Cannot update primary key in bulkUpdate()");
                  } else P(i4, u3, s4);
                }
                d3.push(t4), l3.push(n4), f3.push(i4);
              }
            });
            var s3 = l3.length;
            return n3.mutate({ trans: e3, type: "put", keys: l3, values: f3, updates: { keys: r3, changeSpecs: i3 } }).then(function(e4) {
              var t4 = e4.numFailures, n4 = e4.failures;
              if (0 === t4) return s3;
              for (var r4 = 0, i4 = Object.keys(n4); r4 < i4.length; r4++) {
                var o3, a3 = i4[r4], u3 = d3[Number(a3)];
                null != u3 && (o3 = n4[a3], delete n4[a3], n4[u3] = o3);
              }
              throw new V("".concat(h3.name, ".bulkUpdate(): ").concat(t4, " of ").concat(s3, " operations failed"), n4);
            });
          });
        });
      }, ht.prototype.bulkDelete = function(t3) {
        var r3 = this, i3 = t3.length;
        return this._trans("readwrite", function(e3) {
          return r3.core.mutate({ trans: e3, type: "delete", keys: t3 });
        }).then(function(e3) {
          var t4 = e3.numFailures, n3 = e3.lastResult, e3 = e3.failures;
          if (0 === t4) return n3;
          throw new V("".concat(r3.name, ".bulkDelete(): ").concat(t4, " of ").concat(i3, " operations failed"), e3);
        });
      }, ht);
      function ht() {
      }
      function dt2(i3) {
        function t3(e4, t4) {
          if (t4) {
            for (var n4 = arguments.length, r3 = new Array(n4 - 1); --n4; ) r3[n4 - 1] = arguments[n4];
            return a3[e4].subscribe.apply(null, r3), i3;
          }
          if ("string" == typeof e4) return a3[e4];
        }
        var a3 = {};
        t3.addEventType = u3;
        for (var e3 = 1, n3 = arguments.length; e3 < n3; ++e3) u3(arguments[e3]);
        return t3;
        function u3(e4, n4, r3) {
          if ("object" != typeof e4) {
            var i4;
            n4 = n4 || ne2;
            var o3 = { subscribers: [], fire: r3 = r3 || G2, subscribe: function(e5) {
              -1 === o3.subscribers.indexOf(e5) && (o3.subscribers.push(e5), o3.fire = n4(o3.fire, e5));
            }, unsubscribe: function(t4) {
              o3.subscribers = o3.subscribers.filter(function(e5) {
                return e5 !== t4;
              }), o3.fire = o3.subscribers.reduce(n4, r3);
            } };
            return a3[e4] = t3[e4] = o3;
          }
          x(i4 = e4).forEach(function(e5) {
            var t4 = i4[e5];
            if (k2(t4)) u3(e5, i4[e5][0], i4[e5][1]);
            else {
              if ("asap" !== t4) throw new Y2.InvalidArgument("Invalid event config");
              var n5 = u3(e5, X, function() {
                for (var e6 = arguments.length, t5 = new Array(e6); e6--; ) t5[e6] = arguments[e6];
                n5.subscribers.forEach(function(e7) {
                  v2(function() {
                    e7.apply(null, t5);
                  });
                });
              });
            }
          });
        }
      }
      function pt(e3, t3) {
        return o2(t3).from({ prototype: e3 }), t3;
      }
      function yt(e3, t3) {
        return !(e3.filter || e3.algorithm || e3.or) && (t3 ? e3.justLimit : !e3.replayFilter);
      }
      function vt(e3, t3) {
        e3.filter = it(e3.filter, t3);
      }
      function mt(e3, t3, n3) {
        var r3 = e3.replayFilter;
        e3.replayFilter = r3 ? function() {
          return it(r3(), t3());
        } : t3, e3.justLimit = n3 && !r3;
      }
      function bt(e3, t3) {
        if (e3.isPrimKey) return t3.primaryKey;
        var n3 = t3.getIndexByKeyPath(e3.index);
        if (!n3) throw new Y2.Schema("KeyPath " + e3.index + " on object store " + t3.name + " is not indexed");
        return n3;
      }
      function gt2(e3, t3, n3) {
        var r3 = bt(e3, t3.schema);
        return t3.openCursor({ trans: n3, values: !e3.keysOnly, reverse: "prev" === e3.dir, unique: !!e3.unique, query: { index: r3, range: e3.range } });
      }
      function wt(e3, o3, t3, n3) {
        var a3 = e3.replayFilter ? it(e3.filter, e3.replayFilter()) : e3.filter;
        if (e3.or) {
          var u3 = {}, r3 = function(e4, t4, n4) {
            var r4, i3;
            a3 && !a3(t4, n4, function(e5) {
              return t4.stop(e5);
            }, function(e5) {
              return t4.fail(e5);
            }) || ("[object ArrayBuffer]" === (i3 = "" + (r4 = t4.primaryKey)) && (i3 = "" + new Uint8Array(r4)), m2(u3, i3) || (u3[i3] = true, o3(e4, t4, n4)));
          };
          return Promise.all([e3.or._iterate(r3, t3), _t(gt2(e3, n3, t3), e3.algorithm, r3, !e3.keysOnly && e3.valueMapper)]);
        }
        return _t(gt2(e3, n3, t3), it(e3.algorithm, a3), o3, !e3.keysOnly && e3.valueMapper);
      }
      function _t(e3, r3, i3, o3) {
        var a3 = qe(o3 ? function(e4, t3, n3) {
          return i3(o3(e4), t3, n3);
        } : i3);
        return e3.then(function(n3) {
          if (n3) return n3.start(function() {
            var t3 = function() {
              return n3.continue();
            };
            r3 && !r3(n3, function(e4) {
              return t3 = e4;
            }, function(e4) {
              n3.stop(e4), t3 = G2;
            }, function(e4) {
              n3.fail(e4), t3 = G2;
            }) || a3(n3.value, n3, function(e4) {
              return t3 = e4;
            }), t3();
          });
        });
      }
      var xt = (kt.prototype.execute = function(e3) {
        var t3 = this["@@propmod"];
        if (void 0 !== t3.add) {
          var n3 = t3.add;
          if (k2(n3)) return i2(i2([], k2(e3) ? e3 : [], true), n3).sort();
          if ("number" == typeof n3) return (Number(e3) || 0) + n3;
          if ("bigint" == typeof n3) try {
            return BigInt(e3) + n3;
          } catch (e4) {
            return BigInt(0) + n3;
          }
          throw new TypeError("Invalid term ".concat(n3));
        }
        if (void 0 !== t3.remove) {
          var r3 = t3.remove;
          if (k2(r3)) return k2(e3) ? e3.filter(function(e4) {
            return !r3.includes(e4);
          }).sort() : [];
          if ("number" == typeof r3) return Number(e3) - r3;
          if ("bigint" == typeof r3) try {
            return BigInt(e3) - r3;
          } catch (e4) {
            return BigInt(0) - r3;
          }
          throw new TypeError("Invalid subtrahend ".concat(r3));
        }
        n3 = null === (n3 = t3.replacePrefix) || void 0 === n3 ? void 0 : n3[0];
        return n3 && "string" == typeof e3 && e3.startsWith(n3) ? t3.replacePrefix[1] + e3.substring(n3.length) : e3;
      }, kt);
      function kt(e3) {
        this["@@propmod"] = e3;
      }
      var Ot = (Pt.prototype._read = function(e3, t3) {
        var n3 = this._ctx;
        return n3.error ? n3.table._trans(null, Xe.bind(null, n3.error)) : n3.table._trans("readonly", e3).then(t3);
      }, Pt.prototype._write = function(e3) {
        var t3 = this._ctx;
        return t3.error ? t3.table._trans(null, Xe.bind(null, t3.error)) : t3.table._trans("readwrite", e3, "locked");
      }, Pt.prototype._addAlgorithm = function(e3) {
        var t3 = this._ctx;
        t3.algorithm = it(t3.algorithm, e3);
      }, Pt.prototype._iterate = function(e3, t3) {
        return wt(this._ctx, e3, t3, this._ctx.table.core);
      }, Pt.prototype.clone = function(e3) {
        var t3 = Object.create(this.constructor.prototype), n3 = Object.create(this._ctx);
        return e3 && a2(n3, e3), t3._ctx = n3, t3;
      }, Pt.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Pt.prototype.each = function(t3) {
        var n3 = this._ctx;
        return this._read(function(e3) {
          return wt(n3, t3, e3, n3.table.core);
        });
      }, Pt.prototype.count = function(e3) {
        var i3 = this;
        return this._read(function(e4) {
          var t3 = i3._ctx, n3 = t3.table.core;
          if (yt(t3, true)) return n3.count({ trans: e4, query: { index: bt(t3, n3.schema), range: t3.range } }).then(function(e5) {
            return Math.min(e5, t3.limit);
          });
          var r3 = 0;
          return wt(t3, function() {
            return ++r3, false;
          }, e4, n3).then(function() {
            return r3;
          });
        }).then(e3);
      }, Pt.prototype.sortBy = function(e3, t3) {
        var n3 = e3.split(".").reverse(), r3 = n3[0], i3 = n3.length - 1;
        function o3(e4, t4) {
          return t4 ? o3(e4[n3[t4]], t4 - 1) : e4[r3];
        }
        var a3 = "next" === this._ctx.dir ? 1 : -1;
        function u3(e4, t4) {
          return st2(o3(e4, i3), o3(t4, i3)) * a3;
        }
        return this.toArray(function(e4) {
          return e4.sort(u3);
        }).then(t3);
      }, Pt.prototype.toArray = function(e3) {
        var o3 = this;
        return this._read(function(e4) {
          var t3 = o3._ctx;
          if ("next" === t3.dir && yt(t3, true) && 0 < t3.limit) {
            var n3 = t3.valueMapper, r3 = bt(t3, t3.table.core.schema);
            return t3.table.core.query({ trans: e4, limit: t3.limit, values: true, query: { index: r3, range: t3.range } }).then(function(e5) {
              e5 = e5.result;
              return n3 ? e5.map(n3) : e5;
            });
          }
          var i3 = [];
          return wt(t3, function(e5) {
            return i3.push(e5);
          }, e4, t3.table.core).then(function() {
            return i3;
          });
        }, e3);
      }, Pt.prototype.offset = function(t3) {
        var e3 = this._ctx;
        return t3 <= 0 || (e3.offset += t3, yt(e3) ? mt(e3, function() {
          var n3 = t3;
          return function(e4, t4) {
            return 0 === n3 || (1 === n3 ? --n3 : t4(function() {
              e4.advance(n3), n3 = 0;
            }), false);
          };
        }) : mt(e3, function() {
          var e4 = t3;
          return function() {
            return --e4 < 0;
          };
        })), this;
      }, Pt.prototype.limit = function(e3) {
        return this._ctx.limit = Math.min(this._ctx.limit, e3), mt(this._ctx, function() {
          var r3 = e3;
          return function(e4, t3, n3) {
            return --r3 <= 0 && t3(n3), 0 <= r3;
          };
        }, true), this;
      }, Pt.prototype.until = function(r3, i3) {
        return vt(this._ctx, function(e3, t3, n3) {
          return !r3(e3.value) || (t3(n3), i3);
        }), this;
      }, Pt.prototype.first = function(e3) {
        return this.limit(1).toArray(function(e4) {
          return e4[0];
        }).then(e3);
      }, Pt.prototype.last = function(e3) {
        return this.reverse().first(e3);
      }, Pt.prototype.filter = function(t3) {
        var e3;
        return vt(this._ctx, function(e4) {
          return t3(e4.value);
        }), (e3 = this._ctx).isMatch = it(e3.isMatch, t3), this;
      }, Pt.prototype.and = function(e3) {
        return this.filter(e3);
      }, Pt.prototype.or = function(e3) {
        return new this.db.WhereClause(this._ctx.table, e3, this);
      }, Pt.prototype.reverse = function() {
        return this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Pt.prototype.desc = function() {
        return this.reverse();
      }, Pt.prototype.eachKey = function(n3) {
        var e3 = this._ctx;
        return e3.keysOnly = !e3.isMatch, this.each(function(e4, t3) {
          n3(t3.key, t3);
        });
      }, Pt.prototype.eachUniqueKey = function(e3) {
        return this._ctx.unique = "unique", this.eachKey(e3);
      }, Pt.prototype.eachPrimaryKey = function(n3) {
        var e3 = this._ctx;
        return e3.keysOnly = !e3.isMatch, this.each(function(e4, t3) {
          n3(t3.primaryKey, t3);
        });
      }, Pt.prototype.keys = function(e3) {
        var t3 = this._ctx;
        t3.keysOnly = !t3.isMatch;
        var n3 = [];
        return this.each(function(e4, t4) {
          n3.push(t4.key);
        }).then(function() {
          return n3;
        }).then(e3);
      }, Pt.prototype.primaryKeys = function(e3) {
        var n3 = this._ctx;
        if ("next" === n3.dir && yt(n3, true) && 0 < n3.limit) return this._read(function(e4) {
          var t3 = bt(n3, n3.table.core.schema);
          return n3.table.core.query({ trans: e4, values: false, limit: n3.limit, query: { index: t3, range: n3.range } });
        }).then(function(e4) {
          return e4.result;
        }).then(e3);
        n3.keysOnly = !n3.isMatch;
        var r3 = [];
        return this.each(function(e4, t3) {
          r3.push(t3.primaryKey);
        }).then(function() {
          return r3;
        }).then(e3);
      }, Pt.prototype.uniqueKeys = function(e3) {
        return this._ctx.unique = "unique", this.keys(e3);
      }, Pt.prototype.firstKey = function(e3) {
        return this.limit(1).keys(function(e4) {
          return e4[0];
        }).then(e3);
      }, Pt.prototype.lastKey = function(e3) {
        return this.reverse().firstKey(e3);
      }, Pt.prototype.distinct = function() {
        var e3 = this._ctx, e3 = e3.index && e3.table.schema.idxByName[e3.index];
        if (!e3 || !e3.multi) return this;
        var n3 = {};
        return vt(this._ctx, function(e4) {
          var t3 = e4.primaryKey.toString(), e4 = m2(n3, t3);
          return n3[t3] = true, !e4;
        }), this;
      }, Pt.prototype.modify = function(w3) {
        var n3 = this, r3 = this._ctx;
        return this._write(function(d3) {
          var a3, u3, p3;
          p3 = "function" == typeof w3 ? w3 : (a3 = x(w3), u3 = a3.length, function(e4) {
            for (var t4 = false, n4 = 0; n4 < u3; ++n4) {
              var r4 = a3[n4], i3 = w3[r4], o3 = O(e4, r4);
              i3 instanceof xt ? (P(e4, r4, i3.execute(o3)), t4 = true) : o3 !== i3 && (P(e4, r4, i3), t4 = true);
            }
            return t4;
          });
          var y3 = r3.table.core, e3 = y3.schema.primaryKey, v3 = e3.outbound, m3 = e3.extractKey, b3 = 200, e3 = n3.db._options.modifyChunkSize;
          e3 && (b3 = "object" == typeof e3 ? e3[y3.name] || e3["*"] || 200 : e3);
          function g3(e4, t4) {
            var n4 = t4.failures, t4 = t4.numFailures;
            c3 += e4 - t4;
            for (var r4 = 0, i3 = x(n4); r4 < i3.length; r4++) {
              var o3 = i3[r4];
              s3.push(n4[o3]);
            }
          }
          var s3 = [], c3 = 0, t3 = [];
          return n3.clone().primaryKeys().then(function(l3) {
            function f3(s4) {
              var c4 = Math.min(b3, l3.length - s4);
              return y3.getMany({ trans: d3, keys: l3.slice(s4, s4 + c4), cache: "immutable" }).then(function(e4) {
                for (var n4 = [], t4 = [], r4 = v3 ? [] : null, i3 = [], o3 = 0; o3 < c4; ++o3) {
                  var a4 = e4[o3], u4 = { value: S2(a4), primKey: l3[s4 + o3] };
                  false !== p3.call(u4, u4.value, u4) && (null == u4.value ? i3.push(l3[s4 + o3]) : v3 || 0 === st2(m3(a4), m3(u4.value)) ? (t4.push(u4.value), v3 && r4.push(l3[s4 + o3])) : (i3.push(l3[s4 + o3]), n4.push(u4.value)));
                }
                return Promise.resolve(0 < n4.length && y3.mutate({ trans: d3, type: "add", values: n4 }).then(function(e5) {
                  for (var t5 in e5.failures) i3.splice(parseInt(t5), 1);
                  g3(n4.length, e5);
                })).then(function() {
                  return (0 < t4.length || h3 && "object" == typeof w3) && y3.mutate({ trans: d3, type: "put", keys: r4, values: t4, criteria: h3, changeSpec: "function" != typeof w3 && w3, isAdditionalChunk: 0 < s4 }).then(function(e5) {
                    return g3(t4.length, e5);
                  });
                }).then(function() {
                  return (0 < i3.length || h3 && w3 === Kt2) && y3.mutate({ trans: d3, type: "delete", keys: i3, criteria: h3, isAdditionalChunk: 0 < s4 }).then(function(e5) {
                    return g3(i3.length, e5);
                  });
                }).then(function() {
                  return l3.length > s4 + c4 && f3(s4 + b3);
                });
              });
            }
            var h3 = yt(r3) && r3.limit === 1 / 0 && ("function" != typeof w3 || w3 === Kt2) && { index: r3.index, range: r3.range };
            return f3(0).then(function() {
              if (0 < s3.length) throw new U2("Error modifying one or more objects", s3, c3, t3);
              return l3.length;
            });
          });
        });
      }, Pt.prototype.delete = function() {
        var i3 = this._ctx, n3 = i3.range;
        return yt(i3) && (i3.isPrimKey || 3 === n3.type) ? this._write(function(e3) {
          var t3 = i3.table.core.schema.primaryKey, r3 = n3;
          return i3.table.core.count({ trans: e3, query: { index: t3, range: r3 } }).then(function(n4) {
            return i3.table.core.mutate({ trans: e3, type: "deleteRange", range: r3 }).then(function(e4) {
              var t4 = e4.failures;
              e4.lastResult, e4.results;
              e4 = e4.numFailures;
              if (e4) throw new U2("Could not delete some values", Object.keys(t4).map(function(e5) {
                return t4[e5];
              }), n4 - e4);
              return n4 - e4;
            });
          });
        }) : this.modify(Kt2);
      }, Pt);
      function Pt() {
      }
      var Kt2 = function(e3, t3) {
        return t3.value = null;
      };
      function Et(e3, t3) {
        return e3 < t3 ? -1 : e3 === t3 ? 0 : 1;
      }
      function St(e3, t3) {
        return t3 < e3 ? -1 : e3 === t3 ? 0 : 1;
      }
      function jt(e3, t3, n3) {
        e3 = e3 instanceof Dt ? new e3.Collection(e3) : e3;
        return e3._ctx.error = new (n3 || TypeError)(t3), e3;
      }
      function At(e3) {
        return new e3.Collection(e3, function() {
          return qt("");
        }).limit(0);
      }
      function Ct(e3, s3, n3, r3) {
        var i3, c3, l3, f3, h3, d3, p3, y3 = n3.length;
        if (!n3.every(function(e4) {
          return "string" == typeof e4;
        })) return jt(e3, Ze);
        function t3(e4) {
          i3 = "next" === e4 ? function(e5) {
            return e5.toUpperCase();
          } : function(e5) {
            return e5.toLowerCase();
          }, c3 = "next" === e4 ? function(e5) {
            return e5.toLowerCase();
          } : function(e5) {
            return e5.toUpperCase();
          }, l3 = "next" === e4 ? Et : St;
          var t4 = n3.map(function(e5) {
            return { lower: c3(e5), upper: i3(e5) };
          }).sort(function(e5, t5) {
            return l3(e5.lower, t5.lower);
          });
          f3 = t4.map(function(e5) {
            return e5.upper;
          }), h3 = t4.map(function(e5) {
            return e5.lower;
          }), p3 = "next" === (d3 = e4) ? "" : r3;
        }
        t3("next");
        e3 = new e3.Collection(e3, function() {
          return Tt(f3[0], h3[y3 - 1] + r3);
        });
        e3._ondirectionchange = function(e4) {
          t3(e4);
        };
        var v3 = 0;
        return e3._addAlgorithm(function(e4, t4, n4) {
          var r4 = e4.key;
          if ("string" != typeof r4) return false;
          var i4 = c3(r4);
          if (s3(i4, h3, v3)) return true;
          for (var o3 = null, a3 = v3; a3 < y3; ++a3) {
            var u3 = function(e5, t5, n5, r5, i5, o4) {
              for (var a4 = Math.min(e5.length, r5.length), u4 = -1, s4 = 0; s4 < a4; ++s4) {
                var c4 = t5[s4];
                if (c4 !== r5[s4]) return i5(e5[s4], n5[s4]) < 0 ? e5.substr(0, s4) + n5[s4] + n5.substr(s4 + 1) : i5(e5[s4], r5[s4]) < 0 ? e5.substr(0, s4) + r5[s4] + n5.substr(s4 + 1) : 0 <= u4 ? e5.substr(0, u4) + t5[u4] + n5.substr(u4 + 1) : null;
                i5(e5[s4], c4) < 0 && (u4 = s4);
              }
              return a4 < r5.length && "next" === o4 ? e5 + n5.substr(e5.length) : a4 < e5.length && "prev" === o4 ? e5.substr(0, n5.length) : u4 < 0 ? null : e5.substr(0, u4) + r5[u4] + n5.substr(u4 + 1);
            }(r4, i4, f3[a3], h3[a3], l3, d3);
            null === u3 && null === o3 ? v3 = a3 + 1 : (null === o3 || 0 < l3(o3, u3)) && (o3 = u3);
          }
          return t4(null !== o3 ? function() {
            e4.continue(o3 + p3);
          } : n4), false;
        }), e3;
      }
      function Tt(e3, t3, n3, r3) {
        return { type: 2, lower: e3, upper: t3, lowerOpen: n3, upperOpen: r3 };
      }
      function qt(e3) {
        return { type: 1, lower: e3, upper: e3 };
      }
      var Dt = (Object.defineProperty(It.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: false, configurable: true }), It.prototype.between = function(e3, t3, n3, r3) {
        n3 = false !== n3, r3 = true === r3;
        try {
          return 0 < this._cmp(e3, t3) || 0 === this._cmp(e3, t3) && (n3 || r3) && (!n3 || !r3) ? At(this) : new this.Collection(this, function() {
            return Tt(e3, t3, !n3, !r3);
          });
        } catch (e4) {
          return jt(this, Je);
        }
      }, It.prototype.equals = function(e3) {
        return null == e3 ? jt(this, Je) : new this.Collection(this, function() {
          return qt(e3);
        });
      }, It.prototype.above = function(e3) {
        return null == e3 ? jt(this, Je) : new this.Collection(this, function() {
          return Tt(e3, void 0, true);
        });
      }, It.prototype.aboveOrEqual = function(e3) {
        return null == e3 ? jt(this, Je) : new this.Collection(this, function() {
          return Tt(e3, void 0, false);
        });
      }, It.prototype.below = function(e3) {
        return null == e3 ? jt(this, Je) : new this.Collection(this, function() {
          return Tt(void 0, e3, false, true);
        });
      }, It.prototype.belowOrEqual = function(e3) {
        return null == e3 ? jt(this, Je) : new this.Collection(this, function() {
          return Tt(void 0, e3);
        });
      }, It.prototype.startsWith = function(e3) {
        return "string" != typeof e3 ? jt(this, Ze) : this.between(e3, e3 + He, true, true);
      }, It.prototype.startsWithIgnoreCase = function(e3) {
        return "" === e3 ? this.startsWith(e3) : Ct(this, function(e4, t3) {
          return 0 === e4.indexOf(t3[0]);
        }, [e3], He);
      }, It.prototype.equalsIgnoreCase = function(e3) {
        return Ct(this, function(e4, t3) {
          return e4 === t3[0];
        }, [e3], "");
      }, It.prototype.anyOfIgnoreCase = function() {
        var e3 = I.apply(D, arguments);
        return 0 === e3.length ? At(this) : Ct(this, function(e4, t3) {
          return -1 !== t3.indexOf(e4);
        }, e3, "");
      }, It.prototype.startsWithAnyOfIgnoreCase = function() {
        var e3 = I.apply(D, arguments);
        return 0 === e3.length ? At(this) : Ct(this, function(t3, e4) {
          return e4.some(function(e5) {
            return 0 === t3.indexOf(e5);
          });
        }, e3, He);
      }, It.prototype.anyOf = function() {
        var t3 = this, i3 = I.apply(D, arguments), o3 = this._cmp;
        try {
          i3.sort(o3);
        } catch (e4) {
          return jt(this, Je);
        }
        if (0 === i3.length) return At(this);
        var e3 = new this.Collection(this, function() {
          return Tt(i3[0], i3[i3.length - 1]);
        });
        e3._ondirectionchange = function(e4) {
          o3 = "next" === e4 ? t3._ascending : t3._descending, i3.sort(o3);
        };
        var a3 = 0;
        return e3._addAlgorithm(function(e4, t4, n3) {
          for (var r3 = e4.key; 0 < o3(r3, i3[a3]); ) if (++a3 === i3.length) return t4(n3), false;
          return 0 === o3(r3, i3[a3]) || (t4(function() {
            e4.continue(i3[a3]);
          }), false);
        }), e3;
      }, It.prototype.notEqual = function(e3) {
        return this.inAnyRange([[-1 / 0, e3], [e3, this.db._maxKey]], { includeLowers: false, includeUppers: false });
      }, It.prototype.noneOf = function() {
        var e3 = I.apply(D, arguments);
        if (0 === e3.length) return new this.Collection(this);
        try {
          e3.sort(this._ascending);
        } catch (e4) {
          return jt(this, Je);
        }
        var t3 = e3.reduce(function(e4, t4) {
          return e4 ? e4.concat([[e4[e4.length - 1][1], t4]]) : [[-1 / 0, t4]];
        }, null);
        return t3.push([e3[e3.length - 1], this.db._maxKey]), this.inAnyRange(t3, { includeLowers: false, includeUppers: false });
      }, It.prototype.inAnyRange = function(e3, t3) {
        var o3 = this, a3 = this._cmp, u3 = this._ascending, n3 = this._descending, s3 = this._min, c3 = this._max;
        if (0 === e3.length) return At(this);
        if (!e3.every(function(e4) {
          return void 0 !== e4[0] && void 0 !== e4[1] && u3(e4[0], e4[1]) <= 0;
        })) return jt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", Y2.InvalidArgument);
        var r3 = !t3 || false !== t3.includeLowers, i3 = t3 && true === t3.includeUppers;
        var l3, f3 = u3;
        function h3(e4, t4) {
          return f3(e4[0], t4[0]);
        }
        try {
          (l3 = e3.reduce(function(e4, t4) {
            for (var n4 = 0, r4 = e4.length; n4 < r4; ++n4) {
              var i4 = e4[n4];
              if (a3(t4[0], i4[1]) < 0 && 0 < a3(t4[1], i4[0])) {
                i4[0] = s3(i4[0], t4[0]), i4[1] = c3(i4[1], t4[1]);
                break;
              }
            }
            return n4 === r4 && e4.push(t4), e4;
          }, [])).sort(h3);
        } catch (e4) {
          return jt(this, Je);
        }
        var d3 = 0, p3 = i3 ? function(e4) {
          return 0 < u3(e4, l3[d3][1]);
        } : function(e4) {
          return 0 <= u3(e4, l3[d3][1]);
        }, y3 = r3 ? function(e4) {
          return 0 < n3(e4, l3[d3][0]);
        } : function(e4) {
          return 0 <= n3(e4, l3[d3][0]);
        };
        var v3 = p3, e3 = new this.Collection(this, function() {
          return Tt(l3[0][0], l3[l3.length - 1][1], !r3, !i3);
        });
        return e3._ondirectionchange = function(e4) {
          f3 = "next" === e4 ? (v3 = p3, u3) : (v3 = y3, n3), l3.sort(h3);
        }, e3._addAlgorithm(function(e4, t4, n4) {
          for (var r4, i4 = e4.key; v3(i4); ) if (++d3 === l3.length) return t4(n4), false;
          return !p3(r4 = i4) && !y3(r4) || (0 === o3._cmp(i4, l3[d3][1]) || 0 === o3._cmp(i4, l3[d3][0]) || t4(function() {
            f3 === u3 ? e4.continue(l3[d3][0]) : e4.continue(l3[d3][1]);
          }), false);
        }), e3;
      }, It.prototype.startsWithAnyOf = function() {
        var e3 = I.apply(D, arguments);
        return e3.every(function(e4) {
          return "string" == typeof e4;
        }) ? 0 === e3.length ? At(this) : this.inAnyRange(e3.map(function(e4) {
          return [e4, e4 + He];
        })) : jt(this, "startsWithAnyOf() only works with strings");
      }, It);
      function It() {
      }
      function Bt(t3) {
        return qe(function(e3) {
          return Rt(e3), t3(e3.target.error), false;
        });
      }
      function Rt(e3) {
        e3.stopPropagation && e3.stopPropagation(), e3.preventDefault && e3.preventDefault();
      }
      var Ft = "storagemutated", Mt = "x-storagemutated-1", Nt = dt2(null, Ft), Lt = (Ut.prototype._lock = function() {
        return y2(!me.global), ++this._reculock, 1 !== this._reculock || me.global || (me.lockOwnerFor = this), this;
      }, Ut.prototype._unlock = function() {
        if (y2(!me.global), 0 == --this._reculock) for (me.global || (me.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e3 = this._blockedFuncs.shift();
          try {
            $e(e3[1], e3[0]);
          } catch (e4) {
          }
        }
        return this;
      }, Ut.prototype._locked = function() {
        return this._reculock && me.lockOwnerFor !== this;
      }, Ut.prototype.create = function(t3) {
        var n3 = this;
        if (!this.mode) return this;
        var e3 = this.db.idbdb, r3 = this.db._state.dbOpenError;
        if (y2(!this.idbtrans), !t3 && !e3) switch (r3 && r3.name) {
          case "DatabaseClosedError":
            throw new Y2.DatabaseClosed(r3);
          case "MissingAPIError":
            throw new Y2.MissingAPI(r3.message, r3);
          default:
            throw new Y2.OpenFailed(r3);
        }
        if (!this.active) throw new Y2.TransactionInactive();
        return y2(null === this._completion._state), (t3 = this.idbtrans = t3 || (this.db.core || e3).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = qe(function(e4) {
          Rt(e4), n3._reject(t3.error);
        }), t3.onabort = qe(function(e4) {
          Rt(e4), n3.active && n3._reject(new Y2.Abort(t3.error)), n3.active = false, n3.on("abort").fire(e4);
        }), t3.oncomplete = qe(function() {
          n3.active = false, n3._resolve(), "mutatedParts" in t3 && Nt.storagemutated.fire(t3.mutatedParts);
        }), this;
      }, Ut.prototype._promise = function(n3, r3, i3) {
        var o3 = this;
        if ("readwrite" === n3 && "readwrite" !== this.mode) return Xe(new Y2.ReadOnly("Transaction is readonly"));
        if (!this.active) return Xe(new Y2.TransactionInactive());
        if (this._locked()) return new _e2(function(e4, t3) {
          o3._blockedFuncs.push([function() {
            o3._promise(n3, r3, i3).then(e4, t3);
          }, me]);
        });
        if (i3) return Ne(function() {
          var e4 = new _e2(function(e5, t3) {
            o3._lock();
            var n4 = r3(e5, t3, o3);
            n4 && n4.then && n4.then(e5, t3);
          });
          return e4.finally(function() {
            return o3._unlock();
          }), e4._lib = true, e4;
        });
        var e3 = new _e2(function(e4, t3) {
          var n4 = r3(e4, t3, o3);
          n4 && n4.then && n4.then(e4, t3);
        });
        return e3._lib = true, e3;
      }, Ut.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Ut.prototype.waitFor = function(e3) {
        var t3, r3 = this._root(), i3 = _e2.resolve(e3);
        r3._waitingFor ? r3._waitingFor = r3._waitingFor.then(function() {
          return i3;
        }) : (r3._waitingFor = i3, r3._waitingQueue = [], t3 = r3.idbtrans.objectStore(r3.storeNames[0]), function e4() {
          for (++r3._spinCount; r3._waitingQueue.length; ) r3._waitingQueue.shift()();
          r3._waitingFor && (t3.get(-1 / 0).onsuccess = e4);
        }());
        var o3 = r3._waitingFor;
        return new _e2(function(t4, n3) {
          i3.then(function(e4) {
            return r3._waitingQueue.push(qe(t4.bind(null, e4)));
          }, function(e4) {
            return r3._waitingQueue.push(qe(n3.bind(null, e4)));
          }).finally(function() {
            r3._waitingFor === o3 && (r3._waitingFor = null);
          });
        });
      }, Ut.prototype.abort = function() {
        this.active && (this.active = false, this.idbtrans && this.idbtrans.abort(), this._reject(new Y2.Abort()));
      }, Ut.prototype.table = function(e3) {
        var t3 = this._memoizedTables || (this._memoizedTables = {});
        if (m2(t3, e3)) return t3[e3];
        var n3 = this.schema[e3];
        if (!n3) throw new Y2.NotFound("Table " + e3 + " not part of transaction");
        n3 = new this.db.Table(e3, n3, this);
        return n3.core = this.db.core.table(e3), t3[e3] = n3;
      }, Ut);
      function Ut() {
      }
      function Vt(e3, t3, n3, r3, i3, o3, a3) {
        return { name: e3, keyPath: t3, unique: n3, multi: r3, auto: i3, compound: o3, src: (n3 && !a3 ? "&" : "") + (r3 ? "*" : "") + (i3 ? "++" : "") + zt(t3) };
      }
      function zt(e3) {
        return "string" == typeof e3 ? e3 : e3 ? "[" + [].join.call(e3, "+") + "]" : "";
      }
      function Wt(e3, t3, n3) {
        return { name: e3, primKey: t3, indexes: n3, mappedClass: null, idxByName: (r3 = function(e4) {
          return [e4.name, e4];
        }, n3.reduce(function(e4, t4, n4) {
          n4 = r3(t4, n4);
          return n4 && (e4[n4[0]] = n4[1]), e4;
        }, {})) };
        var r3;
      }
      var Yt = function(e3) {
        try {
          return e3.only([[]]), Yt = function() {
            return [[]];
          }, [[]];
        } catch (e4) {
          return Yt = function() {
            return He;
          }, He;
        }
      };
      function $t(t3) {
        return null == t3 ? function() {
        } : "string" == typeof t3 ? 1 === (n3 = t3).split(".").length ? function(e3) {
          return e3[n3];
        } : function(e3) {
          return O(e3, n3);
        } : function(e3) {
          return O(e3, t3);
        };
        var n3;
      }
      function Qt(e3) {
        return [].slice.call(e3);
      }
      var Gt = 0;
      function Xt(e3) {
        return null == e3 ? ":id" : "string" == typeof e3 ? e3 : "[".concat(e3.join("+"), "]");
      }
      function Ht(e3, i3, t3) {
        function _3(e4) {
          if (3 === e4.type) return null;
          if (4 === e4.type) throw new Error("Cannot convert never type to IDBKeyRange");
          var t4 = e4.lower, n4 = e4.upper, r4 = e4.lowerOpen, e4 = e4.upperOpen;
          return void 0 === t4 ? void 0 === n4 ? null : i3.upperBound(n4, !!e4) : void 0 === n4 ? i3.lowerBound(t4, !!r4) : i3.bound(t4, n4, !!r4, !!e4);
        }
        function n3(e4) {
          var h3, w3 = e4.name;
          return { name: w3, schema: e4, mutate: function(e5) {
            var y3 = e5.trans, v3 = e5.type, m3 = e5.keys, b3 = e5.values, g3 = e5.range;
            return new Promise(function(t4, e6) {
              t4 = qe(t4);
              var n4 = y3.objectStore(w3), r4 = null == n4.keyPath, i4 = "put" === v3 || "add" === v3;
              if (!i4 && "delete" !== v3 && "deleteRange" !== v3) throw new Error("Invalid operation type: " + v3);
              var o4, a4 = (m3 || b3 || { length: 1 }).length;
              if (m3 && b3 && m3.length !== b3.length) throw new Error("Given keys array must have same length as given values array.");
              if (0 === a4) return t4({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function u4(e7) {
                ++l3, Rt(e7);
              }
              var s4 = [], c4 = [], l3 = 0;
              if ("deleteRange" === v3) {
                if (4 === g3.type) return t4({ numFailures: l3, failures: c4, results: [], lastResult: void 0 });
                3 === g3.type ? s4.push(o4 = n4.clear()) : s4.push(o4 = n4.delete(_3(g3)));
              } else {
                var r4 = i4 ? r4 ? [b3, m3] : [b3, null] : [m3, null], f3 = r4[0], h4 = r4[1];
                if (i4) for (var d3 = 0; d3 < a4; ++d3) s4.push(o4 = h4 && void 0 !== h4[d3] ? n4[v3](f3[d3], h4[d3]) : n4[v3](f3[d3])), o4.onerror = u4;
                else for (d3 = 0; d3 < a4; ++d3) s4.push(o4 = n4[v3](f3[d3])), o4.onerror = u4;
              }
              function p3(e7) {
                e7 = e7.target.result, s4.forEach(function(e8, t5) {
                  return null != e8.error && (c4[t5] = e8.error);
                }), t4({ numFailures: l3, failures: c4, results: "delete" === v3 ? m3 : s4.map(function(e8) {
                  return e8.result;
                }), lastResult: e7 });
              }
              o4.onerror = function(e7) {
                u4(e7), p3(e7);
              }, o4.onsuccess = p3;
            });
          }, getMany: function(e5) {
            var f3 = e5.trans, h4 = e5.keys;
            return new Promise(function(t4, e6) {
              t4 = qe(t4);
              for (var n4, r4 = f3.objectStore(w3), i4 = h4.length, o4 = new Array(i4), a4 = 0, u4 = 0, s4 = function(e7) {
                e7 = e7.target;
                o4[e7._pos] = e7.result, ++u4 === a4 && t4(o4);
              }, c4 = Bt(e6), l3 = 0; l3 < i4; ++l3) null != h4[l3] && ((n4 = r4.get(h4[l3]))._pos = l3, n4.onsuccess = s4, n4.onerror = c4, ++a4);
              0 === a4 && t4(o4);
            });
          }, get: function(e5) {
            var r4 = e5.trans, i4 = e5.key;
            return new Promise(function(t4, e6) {
              t4 = qe(t4);
              var n4 = r4.objectStore(w3).get(i4);
              n4.onsuccess = function(e7) {
                return t4(e7.target.result);
              }, n4.onerror = Bt(e6);
            });
          }, query: (h3 = s3, function(f3) {
            return new Promise(function(n4, e5) {
              n4 = qe(n4);
              var r4, i4, o4, t4 = f3.trans, a4 = f3.values, u4 = f3.limit, s4 = f3.query, c4 = u4 === 1 / 0 ? void 0 : u4, l3 = s4.index, s4 = s4.range, t4 = t4.objectStore(w3), l3 = l3.isPrimaryKey ? t4 : t4.index(l3.name), s4 = _3(s4);
              if (0 === u4) return n4({ result: [] });
              h3 ? ((c4 = a4 ? l3.getAll(s4, c4) : l3.getAllKeys(s4, c4)).onsuccess = function(e6) {
                return n4({ result: e6.target.result });
              }, c4.onerror = Bt(e5)) : (r4 = 0, i4 = !a4 && "openKeyCursor" in l3 ? l3.openKeyCursor(s4) : l3.openCursor(s4), o4 = [], i4.onsuccess = function(e6) {
                var t5 = i4.result;
                return t5 ? (o4.push(a4 ? t5.value : t5.primaryKey), ++r4 === u4 ? n4({ result: o4 }) : void t5.continue()) : n4({ result: o4 });
              }, i4.onerror = Bt(e5));
            });
          }), openCursor: function(e5) {
            var c4 = e5.trans, o4 = e5.values, a4 = e5.query, u4 = e5.reverse, l3 = e5.unique;
            return new Promise(function(t4, n4) {
              t4 = qe(t4);
              var e6 = a4.index, r4 = a4.range, i4 = c4.objectStore(w3), i4 = e6.isPrimaryKey ? i4 : i4.index(e6.name), e6 = u4 ? l3 ? "prevunique" : "prev" : l3 ? "nextunique" : "next", s4 = !o4 && "openKeyCursor" in i4 ? i4.openKeyCursor(_3(r4), e6) : i4.openCursor(_3(r4), e6);
              s4.onerror = Bt(n4), s4.onsuccess = qe(function(e7) {
                var r5, i5, o5, a5, u5 = s4.result;
                u5 ? (u5.___id = ++Gt, u5.done = false, r5 = u5.continue.bind(u5), i5 = (i5 = u5.continuePrimaryKey) && i5.bind(u5), o5 = u5.advance.bind(u5), a5 = function() {
                  throw new Error("Cursor not stopped");
                }, u5.trans = c4, u5.stop = u5.continue = u5.continuePrimaryKey = u5.advance = function() {
                  throw new Error("Cursor not started");
                }, u5.fail = qe(n4), u5.next = function() {
                  var e8 = this, t5 = 1;
                  return this.start(function() {
                    return t5-- ? e8.continue() : e8.stop();
                  }).then(function() {
                    return e8;
                  });
                }, u5.start = function(e8) {
                  function t5() {
                    if (s4.result) try {
                      e8();
                    } catch (e9) {
                      u5.fail(e9);
                    }
                    else u5.done = true, u5.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, u5.stop();
                  }
                  var n5 = new Promise(function(t6, e9) {
                    t6 = qe(t6), s4.onerror = Bt(e9), u5.fail = e9, u5.stop = function(e10) {
                      u5.stop = u5.continue = u5.continuePrimaryKey = u5.advance = a5, t6(e10);
                    };
                  });
                  return s4.onsuccess = qe(function(e9) {
                    s4.onsuccess = t5, t5();
                  }), u5.continue = r5, u5.continuePrimaryKey = i5, u5.advance = o5, t5(), n5;
                }, t4(u5)) : t4(null);
              }, n4);
            });
          }, count: function(e5) {
            var t4 = e5.query, i4 = e5.trans, o4 = t4.index, a4 = t4.range;
            return new Promise(function(t5, e6) {
              var n4 = i4.objectStore(w3), r4 = o4.isPrimaryKey ? n4 : n4.index(o4.name), n4 = _3(a4), r4 = n4 ? r4.count(n4) : r4.count();
              r4.onsuccess = qe(function(e7) {
                return t5(e7.target.result);
              }), r4.onerror = Bt(e6);
            });
          } };
        }
        var r3, o3, a3, u3 = (o3 = t3, a3 = Qt((r3 = e3).objectStoreNames), { schema: { name: r3.name, tables: a3.map(function(e4) {
          return o3.objectStore(e4);
        }).map(function(t4) {
          var e4 = t4.keyPath, n4 = t4.autoIncrement, r4 = k2(e4), i4 = {}, n4 = { name: t4.name, primaryKey: { name: null, isPrimaryKey: true, outbound: null == e4, compound: r4, keyPath: e4, autoIncrement: n4, unique: true, extractKey: $t(e4) }, indexes: Qt(t4.indexNames).map(function(e5) {
            return t4.index(e5);
          }).map(function(e5) {
            var t5 = e5.name, n5 = e5.unique, r5 = e5.multiEntry, e5 = e5.keyPath, r5 = { name: t5, compound: k2(e5), keyPath: e5, unique: n5, multiEntry: r5, extractKey: $t(e5) };
            return i4[Xt(e5)] = r5;
          }), getIndexByKeyPath: function(e5) {
            return i4[Xt(e5)];
          } };
          return i4[":id"] = n4.primaryKey, null != e4 && (i4[Xt(e4)] = n4.primaryKey), n4;
        }) }, hasGetAll: 0 < a3.length && "getAll" in o3.objectStore(a3[0]) && !("undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), t3 = u3.schema, s3 = u3.hasGetAll, u3 = t3.tables.map(n3), c3 = {};
        return u3.forEach(function(e4) {
          return c3[e4.name] = e4;
        }), { stack: "dbcore", transaction: e3.transaction.bind(e3), table: function(e4) {
          if (!c3[e4]) throw new Error("Table '".concat(e4, "' not found"));
          return c3[e4];
        }, MIN_KEY: -1 / 0, MAX_KEY: Yt(i3), schema: t3 };
      }
      function Jt(e3, t3, n3, r3) {
        var i3 = n3.IDBKeyRange;
        return n3.indexedDB, { dbcore: (r3 = Ht(t3, i3, r3), e3.dbcore.reduce(function(e4, t4) {
          t4 = t4.create;
          return _2(_2({}, e4), t4(e4));
        }, r3)) };
      }
      function Zt(n3, e3) {
        var t3 = e3.db, e3 = Jt(n3._middlewares, t3, n3._deps, e3);
        n3.core = e3.dbcore, n3.tables.forEach(function(e4) {
          var t4 = e4.name;
          n3.core.schema.tables.some(function(e5) {
            return e5.name === t4;
          }) && (e4.core = n3.core.table(t4), n3[t4] instanceof n3.Table && (n3[t4].core = e4.core));
        });
      }
      function en(i3, e3, t3, o3) {
        t3.forEach(function(n3) {
          var r3 = o3[n3];
          e3.forEach(function(e4) {
            var t4 = function e5(t5, n4) {
              return h2(t5, n4) || (t5 = c2(t5)) && e5(t5, n4);
            }(e4, n3);
            (!t4 || "value" in t4 && void 0 === t4.value) && (e4 === i3.Transaction.prototype || e4 instanceof i3.Transaction ? l2(e4, n3, { get: function() {
              return this.table(n3);
            }, set: function(e5) {
              u2(this, n3, { value: e5, writable: true, configurable: true, enumerable: true });
            } }) : e4[n3] = new i3.Table(n3, r3));
          });
        });
      }
      function tn(n3, e3) {
        e3.forEach(function(e4) {
          for (var t3 in e4) e4[t3] instanceof n3.Table && delete e4[t3];
        });
      }
      function nn(e3, t3) {
        return e3._cfg.version - t3._cfg.version;
      }
      function rn(n3, r3, i3, e3) {
        var o3 = n3._dbSchema;
        i3.objectStoreNames.contains("$meta") && !o3.$meta && (o3.$meta = Wt("$meta", hn("")[0], []), n3._storeNames.push("$meta"));
        var a3 = n3._createTransaction("readwrite", n3._storeNames, o3);
        a3.create(i3), a3._completion.catch(e3);
        var u3 = a3._reject.bind(a3), s3 = me.transless || me;
        Ne(function() {
          return me.trans = a3, me.transless = s3, 0 !== r3 ? (Zt(n3, i3), t3 = r3, ((e4 = a3).storeNames.includes("$meta") ? e4.table("$meta").get("version").then(function(e5) {
            return null != e5 ? e5 : t3;
          }) : _e2.resolve(t3)).then(function(e5) {
            return c3 = e5, l3 = a3, f3 = i3, t4 = [], e5 = (s4 = n3)._versions, h3 = s4._dbSchema = ln(0, s4.idbdb, f3), 0 !== (e5 = e5.filter(function(e6) {
              return e6._cfg.version >= c3;
            })).length ? (e5.forEach(function(u4) {
              t4.push(function() {
                var t5 = h3, e6 = u4._cfg.dbschema;
                fn(s4, t5, f3), fn(s4, e6, f3), h3 = s4._dbSchema = e6;
                var n4 = an(t5, e6);
                n4.add.forEach(function(e7) {
                  un(f3, e7[0], e7[1].primKey, e7[1].indexes);
                }), n4.change.forEach(function(e7) {
                  if (e7.recreate) throw new Y2.Upgrade("Not yet support for changing primary key");
                  var t6 = f3.objectStore(e7.name);
                  e7.add.forEach(function(e8) {
                    return cn(t6, e8);
                  }), e7.change.forEach(function(e8) {
                    t6.deleteIndex(e8.name), cn(t6, e8);
                  }), e7.del.forEach(function(e8) {
                    return t6.deleteIndex(e8);
                  });
                });
                var r4 = u4._cfg.contentUpgrade;
                if (r4 && u4._cfg.version > c3) {
                  Zt(s4, f3), l3._memoizedTables = {};
                  var i4 = g2(e6);
                  n4.del.forEach(function(e7) {
                    i4[e7] = t5[e7];
                  }), tn(s4, [s4.Transaction.prototype]), en(s4, [s4.Transaction.prototype], x(i4), i4), l3.schema = i4;
                  var o4, a4 = B(r4);
                  a4 && Le();
                  n4 = _e2.follow(function() {
                    var e7;
                    (o4 = r4(l3)) && a4 && (e7 = Ue.bind(null, null), o4.then(e7, e7));
                  });
                  return o4 && "function" == typeof o4.then ? _e2.resolve(o4) : n4.then(function() {
                    return o4;
                  });
                }
              }), t4.push(function(e6) {
                var t5, n4, r4 = u4._cfg.dbschema;
                t5 = r4, n4 = e6, [].slice.call(n4.db.objectStoreNames).forEach(function(e7) {
                  return null == t5[e7] && n4.db.deleteObjectStore(e7);
                }), tn(s4, [s4.Transaction.prototype]), en(s4, [s4.Transaction.prototype], s4._storeNames, s4._dbSchema), l3.schema = s4._dbSchema;
              }), t4.push(function(e6) {
                s4.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(s4.idbdb.version / 10) === u4._cfg.version ? (s4.idbdb.deleteObjectStore("$meta"), delete s4._dbSchema.$meta, s4._storeNames = s4._storeNames.filter(function(e7) {
                  return "$meta" !== e7;
                })) : e6.objectStore("$meta").put(u4._cfg.version, "version"));
              });
            }), function e6() {
              return t4.length ? _e2.resolve(t4.shift()(l3.idbtrans)).then(e6) : _e2.resolve();
            }().then(function() {
              sn(h3, f3);
            })) : _e2.resolve();
            var s4, c3, l3, f3, t4, h3;
          }).catch(u3)) : (x(o3).forEach(function(e5) {
            un(i3, e5, o3[e5].primKey, o3[e5].indexes);
          }), Zt(n3, i3), void _e2.follow(function() {
            return n3.on.populate.fire(a3);
          }).catch(u3));
          var e4, t3;
        });
      }
      function on(e3, r3) {
        sn(e3._dbSchema, r3), r3.db.version % 10 != 0 || r3.objectStoreNames.contains("$meta") || r3.db.createObjectStore("$meta").add(Math.ceil(r3.db.version / 10 - 1), "version");
        var t3 = ln(0, e3.idbdb, r3);
        fn(e3, e3._dbSchema, r3);
        for (var n3 = 0, i3 = an(t3, e3._dbSchema).change; n3 < i3.length; n3++) {
          var o3 = function(t4) {
            if (t4.change.length || t4.recreate) return console.warn("Unable to patch indexes of table ".concat(t4.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var n4 = r3.objectStore(t4.name);
            t4.add.forEach(function(e4) {
              ie2 && console.debug("Dexie upgrade patch: Creating missing index ".concat(t4.name, ".").concat(e4.src)), cn(n4, e4);
            });
          }(i3[n3]);
          if ("object" == typeof o3) return o3.value;
        }
      }
      function an(e3, t3) {
        var n3, r3 = { del: [], add: [], change: [] };
        for (n3 in e3) t3[n3] || r3.del.push(n3);
        for (n3 in t3) {
          var i3 = e3[n3], o3 = t3[n3];
          if (i3) {
            var a3 = { name: n3, def: o3, recreate: false, del: [], add: [], change: [] };
            if ("" + (i3.primKey.keyPath || "") != "" + (o3.primKey.keyPath || "") || i3.primKey.auto !== o3.primKey.auto) a3.recreate = true, r3.change.push(a3);
            else {
              var u3 = i3.idxByName, s3 = o3.idxByName, c3 = void 0;
              for (c3 in u3) s3[c3] || a3.del.push(c3);
              for (c3 in s3) {
                var l3 = u3[c3], f3 = s3[c3];
                l3 ? l3.src !== f3.src && a3.change.push(f3) : a3.add.push(f3);
              }
              (0 < a3.del.length || 0 < a3.add.length || 0 < a3.change.length) && r3.change.push(a3);
            }
          } else r3.add.push([n3, o3]);
        }
        return r3;
      }
      function un(e3, t3, n3, r3) {
        var i3 = e3.db.createObjectStore(t3, n3.keyPath ? { keyPath: n3.keyPath, autoIncrement: n3.auto } : { autoIncrement: n3.auto });
        return r3.forEach(function(e4) {
          return cn(i3, e4);
        }), i3;
      }
      function sn(t3, n3) {
        x(t3).forEach(function(e3) {
          n3.db.objectStoreNames.contains(e3) || (ie2 && console.debug("Dexie: Creating missing table", e3), un(n3, e3, t3[e3].primKey, t3[e3].indexes));
        });
      }
      function cn(e3, t3) {
        e3.createIndex(t3.name, t3.keyPath, { unique: t3.unique, multiEntry: t3.multi });
      }
      function ln(e3, t3, u3) {
        var s3 = {};
        return b2(t3.objectStoreNames, 0).forEach(function(e4) {
          for (var t4 = u3.objectStore(e4), n3 = Vt(zt(a3 = t4.keyPath), a3 || "", true, false, !!t4.autoIncrement, a3 && "string" != typeof a3, true), r3 = [], i3 = 0; i3 < t4.indexNames.length; ++i3) {
            var o3 = t4.index(t4.indexNames[i3]), a3 = o3.keyPath, o3 = Vt(o3.name, a3, !!o3.unique, !!o3.multiEntry, false, a3 && "string" != typeof a3, false);
            r3.push(o3);
          }
          s3[e4] = Wt(e4, n3, r3);
        }), s3;
      }
      function fn(e3, t3, n3) {
        for (var r3 = n3.db.objectStoreNames, i3 = 0; i3 < r3.length; ++i3) {
          var o3 = r3[i3], a3 = n3.objectStore(o3);
          e3._hasGetAll = "getAll" in a3;
          for (var u3 = 0; u3 < a3.indexNames.length; ++u3) {
            var s3 = a3.indexNames[u3], c3 = a3.index(s3).keyPath, l3 = "string" == typeof c3 ? c3 : "[" + b2(c3).join("+") + "]";
            !t3[o3] || (c3 = t3[o3].idxByName[l3]) && (c3.name = s3, delete t3[o3].idxByName[l3], t3[o3].idxByName[s3] = c3);
          }
        }
        "undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && f2.WorkerGlobalScope && f2 instanceof f2.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e3._hasGetAll = false);
      }
      function hn(e3) {
        return e3.split(",").map(function(e4, t3) {
          var n3 = (e4 = e4.trim()).replace(/([&*]|\+\+)/g, ""), r3 = /^\[/.test(n3) ? n3.match(/^\[(.*)\]$/)[1].split("+") : n3;
          return Vt(n3, r3 || null, /\&/.test(e4), /\*/.test(e4), /\+\+/.test(e4), k2(r3), 0 === t3);
        });
      }
      var dn = (pn.prototype._parseStoresSpec = function(r3, i3) {
        x(r3).forEach(function(e3) {
          if (null !== r3[e3]) {
            var t3 = hn(r3[e3]), n3 = t3.shift();
            if (n3.unique = true, n3.multi) throw new Y2.Schema("Primary key cannot be multi-valued");
            t3.forEach(function(e4) {
              if (e4.auto) throw new Y2.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!e4.keyPath) throw new Y2.Schema("Index must have a name and cannot be an empty string");
            }), i3[e3] = Wt(e3, n3, t3);
          }
        });
      }, pn.prototype.stores = function(e3) {
        var t3 = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? a2(this._cfg.storesSource, e3) : e3;
        var e3 = t3._versions, n3 = {}, r3 = {};
        return e3.forEach(function(e4) {
          a2(n3, e4._cfg.storesSource), r3 = e4._cfg.dbschema = {}, e4._parseStoresSpec(n3, r3);
        }), t3._dbSchema = r3, tn(t3, [t3._allTables, t3, t3.Transaction.prototype]), en(t3, [t3._allTables, t3, t3.Transaction.prototype, this._cfg.tables], x(r3), r3), t3._storeNames = x(r3), this;
      }, pn.prototype.upgrade = function(e3) {
        return this._cfg.contentUpgrade = re(this._cfg.contentUpgrade || G2, e3), this;
      }, pn);
      function pn() {
      }
      function yn(e3, t3) {
        var n3 = e3._dbNamesDB;
        return n3 || (n3 = e3._dbNamesDB = new er(tt2, { addons: [], indexedDB: e3, IDBKeyRange: t3 })).version(1).stores({ dbnames: "name" }), n3.table("dbnames");
      }
      function vn(e3) {
        return e3 && "function" == typeof e3.databases;
      }
      function mn(e3) {
        return Ne(function() {
          return me.letThrough = true, e3();
        });
      }
      function bn(e3) {
        return !("from" in e3);
      }
      var gn = function(e3, t3) {
        if (!this) {
          var n3 = new gn();
          return e3 && "d" in e3 && a2(n3, e3), n3;
        }
        a2(this, arguments.length ? { d: 1, from: e3, to: 1 < arguments.length ? t3 : e3 } : { d: 0 });
      };
      function wn(e3, t3, n3) {
        var r3 = st2(t3, n3);
        if (!isNaN(r3)) {
          if (0 < r3) throw RangeError();
          if (bn(e3)) return a2(e3, { from: t3, to: n3, d: 1 });
          var i3 = e3.l, r3 = e3.r;
          if (st2(n3, e3.from) < 0) return i3 ? wn(i3, t3, n3) : e3.l = { from: t3, to: n3, d: 1, l: null, r: null }, On(e3);
          if (0 < st2(t3, e3.to)) return r3 ? wn(r3, t3, n3) : e3.r = { from: t3, to: n3, d: 1, l: null, r: null }, On(e3);
          st2(t3, e3.from) < 0 && (e3.from = t3, e3.l = null, e3.d = r3 ? r3.d + 1 : 1), 0 < st2(n3, e3.to) && (e3.to = n3, e3.r = null, e3.d = e3.l ? e3.l.d + 1 : 1);
          n3 = !e3.r;
          i3 && !e3.l && _n(e3, i3), r3 && n3 && _n(e3, r3);
        }
      }
      function _n(e3, t3) {
        bn(t3) || function e4(t4, n3) {
          var r3 = n3.from, i3 = n3.to, o3 = n3.l, n3 = n3.r;
          wn(t4, r3, i3), o3 && e4(t4, o3), n3 && e4(t4, n3);
        }(e3, t3);
      }
      function xn(e3, t3) {
        var n3 = kn(t3), r3 = n3.next();
        if (r3.done) return false;
        for (var i3 = r3.value, o3 = kn(e3), a3 = o3.next(i3.from), u3 = a3.value; !r3.done && !a3.done; ) {
          if (st2(u3.from, i3.to) <= 0 && 0 <= st2(u3.to, i3.from)) return true;
          st2(i3.from, u3.from) < 0 ? i3 = (r3 = n3.next(u3.from)).value : u3 = (a3 = o3.next(i3.from)).value;
        }
        return false;
      }
      function kn(e3) {
        var n3 = bn(e3) ? null : { s: 0, n: e3 };
        return { next: function(e4) {
          for (var t3 = 0 < arguments.length; n3; ) switch (n3.s) {
            case 0:
              if (n3.s = 1, t3) for (; n3.n.l && st2(e4, n3.n.from) < 0; ) n3 = { up: n3, n: n3.n.l, s: 1 };
              else for (; n3.n.l; ) n3 = { up: n3, n: n3.n.l, s: 1 };
            case 1:
              if (n3.s = 2, !t3 || st2(e4, n3.n.to) <= 0) return { value: n3.n, done: false };
            case 2:
              if (n3.n.r) {
                n3.s = 3, n3 = { up: n3, n: n3.n.r, s: 0 };
                continue;
              }
            case 3:
              n3 = n3.up;
          }
          return { done: true };
        } };
      }
      function On(e3) {
        var t3, n3, r3 = ((null === (t3 = e3.r) || void 0 === t3 ? void 0 : t3.d) || 0) - ((null === (n3 = e3.l) || void 0 === n3 ? void 0 : n3.d) || 0), i3 = 1 < r3 ? "r" : r3 < -1 ? "l" : "";
        i3 && (t3 = "r" == i3 ? "l" : "r", n3 = _2({}, e3), r3 = e3[i3], e3.from = r3.from, e3.to = r3.to, e3[i3] = r3[i3], n3[i3] = r3[t3], (e3[t3] = n3).d = Pn(n3)), e3.d = Pn(e3);
      }
      function Pn(e3) {
        var t3 = e3.r, e3 = e3.l;
        return (t3 ? e3 ? Math.max(t3.d, e3.d) : t3.d : e3 ? e3.d : 0) + 1;
      }
      function Kn(t3, n3) {
        return x(n3).forEach(function(e3) {
          t3[e3] ? _n(t3[e3], n3[e3]) : t3[e3] = function e4(t4) {
            var n4, r3, i3 = {};
            for (n4 in t4) m2(t4, n4) && (r3 = t4[n4], i3[n4] = !r3 || "object" != typeof r3 || K2.has(r3.constructor) ? r3 : e4(r3));
            return i3;
          }(n3[e3]);
        }), t3;
      }
      function En(t3, n3) {
        return t3.all || n3.all || Object.keys(t3).some(function(e3) {
          return n3[e3] && xn(n3[e3], t3[e3]);
        });
      }
      r2(gn.prototype, ((F2 = { add: function(e3) {
        return _n(this, e3), this;
      }, addKey: function(e3) {
        return wn(this, e3, e3), this;
      }, addKeys: function(e3) {
        var t3 = this;
        return e3.forEach(function(e4) {
          return wn(t3, e4, e4);
        }), this;
      }, hasKey: function(e3) {
        var t3 = kn(this).next(e3).value;
        return t3 && st2(t3.from, e3) <= 0 && 0 <= st2(t3.to, e3);
      } })[C2] = function() {
        return kn(this);
      }, F2));
      var Sn = {}, jn = {}, An = false;
      function Cn(e3) {
        Kn(jn, e3), An || (An = true, setTimeout(function() {
          An = false, Tn(jn, !(jn = {}));
        }, 0));
      }
      function Tn(e3, t3) {
        void 0 === t3 && (t3 = false);
        var n3 = /* @__PURE__ */ new Set();
        if (e3.all) for (var r3 = 0, i3 = Object.values(Sn); r3 < i3.length; r3++) qn(a3 = i3[r3], e3, n3, t3);
        else for (var o3 in e3) {
          var a3, u3 = /^idb\:\/\/(.*)\/(.*)\//.exec(o3);
          u3 && (o3 = u3[1], u3 = u3[2], (a3 = Sn["idb://".concat(o3, "/").concat(u3)]) && qn(a3, e3, n3, t3));
        }
        n3.forEach(function(e4) {
          return e4();
        });
      }
      function qn(e3, t3, n3, r3) {
        for (var i3 = [], o3 = 0, a3 = Object.entries(e3.queries.query); o3 < a3.length; o3++) {
          for (var u3 = a3[o3], s3 = u3[0], c3 = [], l3 = 0, f3 = u3[1]; l3 < f3.length; l3++) {
            var h3 = f3[l3];
            En(t3, h3.obsSet) ? h3.subscribers.forEach(function(e4) {
              return n3.add(e4);
            }) : r3 && c3.push(h3);
          }
          r3 && i3.push([s3, c3]);
        }
        if (r3) for (var d3 = 0, p3 = i3; d3 < p3.length; d3++) {
          var y3 = p3[d3], s3 = y3[0], c3 = y3[1];
          e3.queries.query[s3] = c3;
        }
      }
      function Dn(f3) {
        var h3 = f3._state, r3 = f3._deps.indexedDB;
        if (h3.isBeingOpened || f3.idbdb) return h3.dbReadyPromise.then(function() {
          return h3.dbOpenError ? Xe(h3.dbOpenError) : f3;
        });
        h3.isBeingOpened = true, h3.dbOpenError = null, h3.openComplete = false;
        var t3 = h3.openCanceller, d3 = Math.round(10 * f3.verno), p3 = false;
        function e3() {
          if (h3.openCanceller !== t3) throw new Y2.DatabaseClosed("db.open() was cancelled");
        }
        function y3() {
          return new _e2(function(s3, n4) {
            if (e3(), !r3) throw new Y2.MissingAPI();
            var c3 = f3.name, l3 = h3.autoSchema || !d3 ? r3.open(c3) : r3.open(c3, d3);
            if (!l3) throw new Y2.MissingAPI();
            l3.onerror = Bt(n4), l3.onblocked = qe(f3._fireOnBlocked), l3.onupgradeneeded = qe(function(e4) {
              var t4;
              v3 = l3.transaction, h3.autoSchema && !f3._options.allowEmptyDB ? (l3.onerror = Rt, v3.abort(), l3.result.close(), (t4 = r3.deleteDatabase(c3)).onsuccess = t4.onerror = qe(function() {
                n4(new Y2.NoSuchDatabase("Database ".concat(c3, " doesnt exist")));
              })) : (v3.onerror = Bt(n4), e4 = e4.oldVersion > Math.pow(2, 62) ? 0 : e4.oldVersion, m3 = e4 < 1, f3.idbdb = l3.result, p3 && on(f3, v3), rn(f3, e4 / 10, v3, n4));
            }, n4), l3.onsuccess = qe(function() {
              v3 = null;
              var e4, t4, n5, r4, i4, o3 = f3.idbdb = l3.result, a3 = b2(o3.objectStoreNames);
              if (0 < a3.length) try {
                var u3 = o3.transaction(1 === (r4 = a3).length ? r4[0] : r4, "readonly");
                if (h3.autoSchema) t4 = o3, n5 = u3, (e4 = f3).verno = t4.version / 10, n5 = e4._dbSchema = ln(0, t4, n5), e4._storeNames = b2(t4.objectStoreNames, 0), en(e4, [e4._allTables], x(n5), n5);
                else if (fn(f3, f3._dbSchema, u3), ((i4 = an(ln(0, (i4 = f3).idbdb, u3), i4._dbSchema)).add.length || i4.change.some(function(e5) {
                  return e5.add.length || e5.change.length;
                })) && !p3) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), o3.close(), d3 = o3.version + 1, p3 = true, s3(y3());
                Zt(f3, u3);
              } catch (e5) {
              }
              et.push(f3), o3.onversionchange = qe(function(e5) {
                h3.vcFired = true, f3.on("versionchange").fire(e5);
              }), o3.onclose = qe(function(e5) {
                f3.on("close").fire(e5);
              }), m3 && (i4 = f3._deps, u3 = c3, o3 = i4.indexedDB, i4 = i4.IDBKeyRange, vn(o3) || u3 === tt2 || yn(o3, i4).put({ name: u3 }).catch(G2)), s3();
            }, n4);
          }).catch(function(e4) {
            switch (null == e4 ? void 0 : e4.name) {
              case "UnknownError":
                if (0 < h3.PR1398_maxLoop) return h3.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), y3();
                break;
              case "VersionError":
                if (0 < d3) return d3 = 0, y3();
            }
            return _e2.reject(e4);
          });
        }
        var n3, i3 = h3.dbReadyResolve, v3 = null, m3 = false;
        return _e2.race([t3, ("undefined" == typeof navigator ? _e2.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(e4) {
          function t4() {
            return indexedDB.databases().finally(e4);
          }
          n3 = setInterval(t4, 100), t4();
        }).finally(function() {
          return clearInterval(n3);
        }) : Promise.resolve()).then(y3)]).then(function() {
          return e3(), h3.onReadyBeingFired = [], _e2.resolve(mn(function() {
            return f3.on.ready.fire(f3.vip);
          })).then(function e4() {
            if (0 < h3.onReadyBeingFired.length) {
              var t4 = h3.onReadyBeingFired.reduce(re, G2);
              return h3.onReadyBeingFired = [], _e2.resolve(mn(function() {
                return t4(f3.vip);
              })).then(e4);
            }
          });
        }).finally(function() {
          h3.openCanceller === t3 && (h3.onReadyBeingFired = null, h3.isBeingOpened = false);
        }).catch(function(e4) {
          h3.dbOpenError = e4;
          try {
            v3 && v3.abort();
          } catch (e5) {
          }
          return t3 === h3.openCanceller && f3._close(), Xe(e4);
        }).finally(function() {
          h3.openComplete = true, i3();
        }).then(function() {
          var n4;
          return m3 && (n4 = {}, f3.tables.forEach(function(t4) {
            t4.schema.indexes.forEach(function(e4) {
              e4.name && (n4["idb://".concat(f3.name, "/").concat(t4.name, "/").concat(e4.name)] = new gn(-1 / 0, [[[]]]));
            }), n4["idb://".concat(f3.name, "/").concat(t4.name, "/")] = n4["idb://".concat(f3.name, "/").concat(t4.name, "/:dels")] = new gn(-1 / 0, [[[]]]);
          }), Nt(Ft).fire(n4), Tn(n4, true)), f3;
        });
      }
      function In(t3) {
        function e3(e4) {
          return t3.next(e4);
        }
        var r3 = n3(e3), i3 = n3(function(e4) {
          return t3.throw(e4);
        });
        function n3(n4) {
          return function(e4) {
            var t4 = n4(e4), e4 = t4.value;
            return t4.done ? e4 : e4 && "function" == typeof e4.then ? e4.then(r3, i3) : k2(e4) ? Promise.all(e4).then(r3, i3) : r3(e4);
          };
        }
        return n3(e3)();
      }
      function Bn(e3, t3, n3) {
        for (var r3 = k2(e3) ? e3.slice() : [e3], i3 = 0; i3 < n3; ++i3) r3.push(t3);
        return r3;
      }
      var Rn = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(f3) {
        return _2(_2({}, f3), { table: function(e3) {
          var a3 = f3.table(e3), t3 = a3.schema, u3 = {}, s3 = [];
          function c3(e4, t4, n4) {
            var r4 = Xt(e4), i4 = u3[r4] = u3[r4] || [], o3 = null == e4 ? 0 : "string" == typeof e4 ? 1 : e4.length, a4 = 0 < t4, a4 = _2(_2({}, n4), { name: a4 ? "".concat(r4, "(virtual-from:").concat(n4.name, ")") : n4.name, lowLevelIndex: n4, isVirtual: a4, keyTail: t4, keyLength: o3, extractKey: $t(e4), unique: !a4 && n4.unique });
            return i4.push(a4), a4.isPrimaryKey || s3.push(a4), 1 < o3 && c3(2 === o3 ? e4[0] : e4.slice(0, o3 - 1), t4 + 1, n4), i4.sort(function(e5, t5) {
              return e5.keyTail - t5.keyTail;
            }), a4;
          }
          e3 = c3(t3.primaryKey.keyPath, 0, t3.primaryKey);
          u3[":id"] = [e3];
          for (var n3 = 0, r3 = t3.indexes; n3 < r3.length; n3++) {
            var i3 = r3[n3];
            c3(i3.keyPath, 0, i3);
          }
          function l3(e4) {
            var t4, n4 = e4.query.index;
            return n4.isVirtual ? _2(_2({}, e4), { query: { index: n4.lowLevelIndex, range: (t4 = e4.query.range, n4 = n4.keyTail, { type: 1 === t4.type ? 2 : t4.type, lower: Bn(t4.lower, t4.lowerOpen ? f3.MAX_KEY : f3.MIN_KEY, n4), lowerOpen: true, upper: Bn(t4.upper, t4.upperOpen ? f3.MIN_KEY : f3.MAX_KEY, n4), upperOpen: true }) } }) : e4;
          }
          return _2(_2({}, a3), { schema: _2(_2({}, t3), { primaryKey: e3, indexes: s3, getIndexByKeyPath: function(e4) {
            return (e4 = u3[Xt(e4)]) && e4[0];
          } }), count: function(e4) {
            return a3.count(l3(e4));
          }, query: function(e4) {
            return a3.query(l3(e4));
          }, openCursor: function(t4) {
            var e4 = t4.query.index, r4 = e4.keyTail, n4 = e4.isVirtual, i4 = e4.keyLength;
            return n4 ? a3.openCursor(l3(t4)).then(function(e5) {
              return e5 && o3(e5);
            }) : a3.openCursor(t4);
            function o3(n5) {
              return Object.create(n5, { continue: { value: function(e5) {
                null != e5 ? n5.continue(Bn(e5, t4.reverse ? f3.MAX_KEY : f3.MIN_KEY, r4)) : t4.unique ? n5.continue(n5.key.slice(0, i4).concat(t4.reverse ? f3.MIN_KEY : f3.MAX_KEY, r4)) : n5.continue();
              } }, continuePrimaryKey: { value: function(e5, t5) {
                n5.continuePrimaryKey(Bn(e5, f3.MAX_KEY, r4), t5);
              } }, primaryKey: { get: function() {
                return n5.primaryKey;
              } }, key: { get: function() {
                var e5 = n5.key;
                return 1 === i4 ? e5[0] : e5.slice(0, i4);
              } }, value: { get: function() {
                return n5.value;
              } } });
            }
          } });
        } });
      } };
      function Fn(i3, o3, a3, u3) {
        return a3 = a3 || {}, u3 = u3 || "", x(i3).forEach(function(e3) {
          var t3, n3, r3;
          m2(o3, e3) ? (t3 = i3[e3], n3 = o3[e3], "object" == typeof t3 && "object" == typeof n3 && t3 && n3 ? (r3 = A2(t3)) !== A2(n3) ? a3[u3 + e3] = o3[e3] : "Object" === r3 ? Fn(t3, n3, a3, u3 + e3 + ".") : t3 !== n3 && (a3[u3 + e3] = o3[e3]) : t3 !== n3 && (a3[u3 + e3] = o3[e3])) : a3[u3 + e3] = void 0;
        }), x(o3).forEach(function(e3) {
          m2(i3, e3) || (a3[u3 + e3] = o3[e3]);
        }), a3;
      }
      function Mn(e3, t3) {
        return "delete" === t3.type ? t3.keys : t3.keys || t3.values.map(e3.extractKey);
      }
      var Nn = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e3) {
        return _2(_2({}, e3), { table: function(r3) {
          var y3 = e3.table(r3), v3 = y3.schema.primaryKey;
          return _2(_2({}, y3), { mutate: function(e4) {
            var t3 = me.trans, n3 = t3.table(r3).hook, h3 = n3.deleting, d3 = n3.creating, p3 = n3.updating;
            switch (e4.type) {
              case "add":
                if (d3.fire === G2) break;
                return t3._promise("readwrite", function() {
                  return a3(e4);
                }, true);
              case "put":
                if (d3.fire === G2 && p3.fire === G2) break;
                return t3._promise("readwrite", function() {
                  return a3(e4);
                }, true);
              case "delete":
                if (h3.fire === G2) break;
                return t3._promise("readwrite", function() {
                  return a3(e4);
                }, true);
              case "deleteRange":
                if (h3.fire === G2) break;
                return t3._promise("readwrite", function() {
                  return function n4(r4, i3, o3) {
                    return y3.query({ trans: r4, values: false, query: { index: v3, range: i3 }, limit: o3 }).then(function(e5) {
                      var t4 = e5.result;
                      return a3({ type: "delete", keys: t4, trans: r4 }).then(function(e6) {
                        return 0 < e6.numFailures ? Promise.reject(e6.failures[0]) : t4.length < o3 ? { failures: [], numFailures: 0, lastResult: void 0 } : n4(r4, _2(_2({}, i3), { lower: t4[t4.length - 1], lowerOpen: true }), o3);
                      });
                    });
                  }(e4.trans, e4.range, 1e4);
                }, true);
            }
            return y3.mutate(e4);
            function a3(c3) {
              var e5, t4, n4, l3 = me.trans, f3 = c3.keys || Mn(v3, c3);
              if (!f3) throw new Error("Keys missing");
              return "delete" !== (c3 = "add" === c3.type || "put" === c3.type ? _2(_2({}, c3), { keys: f3 }) : _2({}, c3)).type && (c3.values = i2([], c3.values)), c3.keys && (c3.keys = i2([], c3.keys)), e5 = y3, n4 = f3, ("add" === (t4 = c3).type ? Promise.resolve([]) : e5.getMany({ trans: t4.trans, keys: n4, cache: "immutable" })).then(function(u3) {
                var s3 = f3.map(function(e6, t5) {
                  var n5, r4, i3, o3 = u3[t5], a4 = { onerror: null, onsuccess: null };
                  return "delete" === c3.type ? h3.fire.call(a4, e6, o3, l3) : "add" === c3.type || void 0 === o3 ? (n5 = d3.fire.call(a4, e6, c3.values[t5], l3), null == e6 && null != n5 && (c3.keys[t5] = e6 = n5, v3.outbound || P(c3.values[t5], v3.keyPath, e6))) : (n5 = Fn(o3, c3.values[t5]), (r4 = p3.fire.call(a4, n5, e6, o3, l3)) && (i3 = c3.values[t5], Object.keys(r4).forEach(function(e7) {
                    m2(i3, e7) ? i3[e7] = r4[e7] : P(i3, e7, r4[e7]);
                  }))), a4;
                });
                return y3.mutate(c3).then(function(e6) {
                  for (var t5 = e6.failures, n5 = e6.results, r4 = e6.numFailures, e6 = e6.lastResult, i3 = 0; i3 < f3.length; ++i3) {
                    var o3 = (n5 || f3)[i3], a4 = s3[i3];
                    null == o3 ? a4.onerror && a4.onerror(t5[i3]) : a4.onsuccess && a4.onsuccess("put" === c3.type && u3[i3] ? c3.values[i3] : o3);
                  }
                  return { failures: t5, results: n5, numFailures: r4, lastResult: e6 };
                }).catch(function(t5) {
                  return s3.forEach(function(e6) {
                    return e6.onerror && e6.onerror(t5);
                  }), Promise.reject(t5);
                });
              });
            }
          } });
        } });
      } };
      function Ln(e3, t3, n3) {
        try {
          if (!t3) return null;
          if (t3.keys.length < e3.length) return null;
          for (var r3 = [], i3 = 0, o3 = 0; i3 < t3.keys.length && o3 < e3.length; ++i3) 0 === st2(t3.keys[i3], e3[o3]) && (r3.push(n3 ? S2(t3.values[i3]) : t3.values[i3]), ++o3);
          return r3.length === e3.length ? r3 : null;
        } catch (e4) {
          return null;
        }
      }
      var Un = { stack: "dbcore", level: -1, create: function(t3) {
        return { table: function(e3) {
          var n3 = t3.table(e3);
          return _2(_2({}, n3), { getMany: function(t4) {
            if (!t4.cache) return n3.getMany(t4);
            var e4 = Ln(t4.keys, t4.trans._cache, "clone" === t4.cache);
            return e4 ? _e2.resolve(e4) : n3.getMany(t4).then(function(e5) {
              return t4.trans._cache = { keys: t4.keys, values: "clone" === t4.cache ? S2(e5) : e5 }, e5;
            });
          }, mutate: function(e4) {
            return "add" !== e4.type && (e4.trans._cache = null), n3.mutate(e4);
          } });
        } };
      } };
      function Vn(e3, t3) {
        return "readonly" === e3.trans.mode && !!e3.subscr && !e3.trans.explicit && "disabled" !== e3.trans.db._options.cache && !t3.schema.primaryKey.outbound;
      }
      function zn(e3, t3) {
        switch (e3) {
          case "query":
            return t3.values && !t3.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return false;
        }
      }
      var Wn = { stack: "dbcore", level: 0, name: "Observability", create: function(b3) {
        var g3 = b3.schema.name, w3 = new gn(b3.MIN_KEY, b3.MAX_KEY);
        return _2(_2({}, b3), { transaction: function(e3, t3, n3) {
          if (me.subscr && "readonly" !== t3) throw new Y2.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(me.querier));
          return b3.transaction(e3, t3, n3);
        }, table: function(d3) {
          var p3 = b3.table(d3), y3 = p3.schema, v3 = y3.primaryKey, e3 = y3.indexes, c3 = v3.extractKey, l3 = v3.outbound, m3 = v3.autoIncrement && e3.filter(function(e4) {
            return e4.compound && e4.keyPath.includes(v3.keyPath);
          }), t3 = _2(_2({}, p3), { mutate: function(a3) {
            function u3(e5) {
              return e5 = "idb://".concat(g3, "/").concat(d3, "/").concat(e5), n3[e5] || (n3[e5] = new gn());
            }
            var e4, o3, s3, t4 = a3.trans, n3 = a3.mutatedParts || (a3.mutatedParts = {}), r3 = u3(""), i3 = u3(":dels"), c4 = a3.type, l4 = "deleteRange" === a3.type ? [a3.range] : "delete" === a3.type ? [a3.keys] : a3.values.length < 50 ? [Mn(v3, a3).filter(function(e5) {
              return e5;
            }), a3.values] : [], f4 = l4[0], h3 = l4[1], l4 = a3.trans._cache;
            return k2(f4) ? (r3.addKeys(f4), (l4 = "delete" === c4 || f4.length === h3.length ? Ln(f4, l4) : null) || i3.addKeys(f4), (l4 || h3) && (e4 = u3, o3 = l4, s3 = h3, y3.indexes.forEach(function(t5) {
              var n4 = e4(t5.name || "");
              function r4(e5) {
                return null != e5 ? t5.extractKey(e5) : null;
              }
              function i4(e5) {
                return t5.multiEntry && k2(e5) ? e5.forEach(function(e6) {
                  return n4.addKey(e6);
                }) : n4.addKey(e5);
              }
              (o3 || s3).forEach(function(e5, t6) {
                var n5 = o3 && r4(o3[t6]), t6 = s3 && r4(s3[t6]);
                0 !== st2(n5, t6) && (null != n5 && i4(n5), null != t6 && i4(t6));
              });
            }))) : f4 ? (h3 = { from: null !== (h3 = f4.lower) && void 0 !== h3 ? h3 : b3.MIN_KEY, to: null !== (h3 = f4.upper) && void 0 !== h3 ? h3 : b3.MAX_KEY }, i3.add(h3), r3.add(h3)) : (r3.add(w3), i3.add(w3), y3.indexes.forEach(function(e5) {
              return u3(e5.name).add(w3);
            })), p3.mutate(a3).then(function(o4) {
              return !f4 || "add" !== a3.type && "put" !== a3.type || (r3.addKeys(o4.results), m3 && m3.forEach(function(t5) {
                for (var e5 = a3.values.map(function(e6) {
                  return t5.extractKey(e6);
                }), n4 = t5.keyPath.findIndex(function(e6) {
                  return e6 === v3.keyPath;
                }), r4 = 0, i4 = o4.results.length; r4 < i4; ++r4) e5[r4][n4] = o4.results[r4];
                u3(t5.name).addKeys(e5);
              })), t4.mutatedParts = Kn(t4.mutatedParts || {}, n3), o4;
            });
          } }), e3 = function(e4) {
            var t4 = e4.query, e4 = t4.index, t4 = t4.range;
            return [e4, new gn(null !== (e4 = t4.lower) && void 0 !== e4 ? e4 : b3.MIN_KEY, null !== (t4 = t4.upper) && void 0 !== t4 ? t4 : b3.MAX_KEY)];
          }, f3 = { get: function(e4) {
            return [v3, new gn(e4.key)];
          }, getMany: function(e4) {
            return [v3, new gn().addKeys(e4.keys)];
          }, count: e3, query: e3, openCursor: e3 };
          return x(f3).forEach(function(s3) {
            t3[s3] = function(i3) {
              var e4 = me.subscr, t4 = !!e4, n3 = Vn(me, p3) && zn(s3, i3) ? i3.obsSet = {} : e4;
              if (t4) {
                var r3 = function(e5) {
                  e5 = "idb://".concat(g3, "/").concat(d3, "/").concat(e5);
                  return n3[e5] || (n3[e5] = new gn());
                }, o3 = r3(""), a3 = r3(":dels"), e4 = f3[s3](i3), t4 = e4[0], e4 = e4[1];
                if (("query" === s3 && t4.isPrimaryKey && !i3.values ? a3 : r3(t4.name || "")).add(e4), !t4.isPrimaryKey) {
                  if ("count" !== s3) {
                    var u3 = "query" === s3 && l3 && i3.values && p3.query(_2(_2({}, i3), { values: false }));
                    return p3[s3].apply(this, arguments).then(function(t5) {
                      if ("query" === s3) {
                        if (l3 && i3.values) return u3.then(function(e6) {
                          e6 = e6.result;
                          return o3.addKeys(e6), t5;
                        });
                        var e5 = i3.values ? t5.result.map(c3) : t5.result;
                        (i3.values ? o3 : a3).addKeys(e5);
                      } else if ("openCursor" === s3) {
                        var n4 = t5, r4 = i3.values;
                        return n4 && Object.create(n4, { key: { get: function() {
                          return a3.addKey(n4.primaryKey), n4.key;
                        } }, primaryKey: { get: function() {
                          var e6 = n4.primaryKey;
                          return a3.addKey(e6), e6;
                        } }, value: { get: function() {
                          return r4 && o3.addKey(n4.primaryKey), n4.value;
                        } } });
                      }
                      return t5;
                    });
                  }
                  a3.add(w3);
                }
              }
              return p3[s3].apply(this, arguments);
            };
          }), t3;
        } });
      } };
      function Yn(e3, t3, n3) {
        if (0 === n3.numFailures) return t3;
        if ("deleteRange" === t3.type) return null;
        var r3 = t3.keys ? t3.keys.length : "values" in t3 && t3.values ? t3.values.length : 1;
        if (n3.numFailures === r3) return null;
        t3 = _2({}, t3);
        return k2(t3.keys) && (t3.keys = t3.keys.filter(function(e4, t4) {
          return !(t4 in n3.failures);
        })), "values" in t3 && k2(t3.values) && (t3.values = t3.values.filter(function(e4, t4) {
          return !(t4 in n3.failures);
        })), t3;
      }
      function $n(e3, t3) {
        return n3 = e3, (void 0 === (r3 = t3).lower || (r3.lowerOpen ? 0 < st2(n3, r3.lower) : 0 <= st2(n3, r3.lower))) && (e3 = e3, void 0 === (t3 = t3).upper || (t3.upperOpen ? st2(e3, t3.upper) < 0 : st2(e3, t3.upper) <= 0));
        var n3, r3;
      }
      function Qn(e3, d3, t3, n3, r3, i3) {
        if (!t3 || 0 === t3.length) return e3;
        var o3 = d3.query.index, p3 = o3.multiEntry, y3 = d3.query.range, v3 = n3.schema.primaryKey.extractKey, m3 = o3.extractKey, a3 = (o3.lowLevelIndex || o3).extractKey, t3 = t3.reduce(function(e4, t4) {
          var n4 = e4, r4 = [];
          if ("add" === t4.type || "put" === t4.type) for (var i4 = new gn(), o4 = t4.values.length - 1; 0 <= o4; --o4) {
            var a4, u3 = t4.values[o4], s3 = v3(u3);
            i4.hasKey(s3) || (a4 = m3(u3), (p3 && k2(a4) ? a4.some(function(e5) {
              return $n(e5, y3);
            }) : $n(a4, y3)) && (i4.addKey(s3), r4.push(u3)));
          }
          switch (t4.type) {
            case "add":
              var c3 = new gn().addKeys(d3.values ? e4.map(function(e5) {
                return v3(e5);
              }) : e4), n4 = e4.concat(d3.values ? r4.filter(function(e5) {
                e5 = v3(e5);
                return !c3.hasKey(e5) && (c3.addKey(e5), true);
              }) : r4.map(function(e5) {
                return v3(e5);
              }).filter(function(e5) {
                return !c3.hasKey(e5) && (c3.addKey(e5), true);
              }));
              break;
            case "put":
              var l3 = new gn().addKeys(t4.values.map(function(e5) {
                return v3(e5);
              }));
              n4 = e4.filter(function(e5) {
                return !l3.hasKey(d3.values ? v3(e5) : e5);
              }).concat(d3.values ? r4 : r4.map(function(e5) {
                return v3(e5);
              }));
              break;
            case "delete":
              var f3 = new gn().addKeys(t4.keys);
              n4 = e4.filter(function(e5) {
                return !f3.hasKey(d3.values ? v3(e5) : e5);
              });
              break;
            case "deleteRange":
              var h3 = t4.range;
              n4 = e4.filter(function(e5) {
                return !$n(v3(e5), h3);
              });
          }
          return n4;
        }, e3);
        return t3 === e3 ? e3 : (t3.sort(function(e4, t4) {
          return st2(a3(e4), a3(t4)) || st2(v3(e4), v3(t4));
        }), d3.limit && d3.limit < 1 / 0 && (t3.length > d3.limit ? t3.length = d3.limit : e3.length === d3.limit && t3.length < d3.limit && (r3.dirty = true)), i3 ? Object.freeze(t3) : t3);
      }
      function Gn(e3, t3) {
        return 0 === st2(e3.lower, t3.lower) && 0 === st2(e3.upper, t3.upper) && !!e3.lowerOpen == !!t3.lowerOpen && !!e3.upperOpen == !!t3.upperOpen;
      }
      function Xn(e3, t3) {
        return function(e4, t4, n3, r3) {
          if (void 0 === e4) return void 0 !== t4 ? -1 : 0;
          if (void 0 === t4) return 1;
          if (0 === (t4 = st2(e4, t4))) {
            if (n3 && r3) return 0;
            if (n3) return 1;
            if (r3) return -1;
          }
          return t4;
        }(e3.lower, t3.lower, e3.lowerOpen, t3.lowerOpen) <= 0 && 0 <= function(e4, t4, n3, r3) {
          if (void 0 === e4) return void 0 !== t4 ? 1 : 0;
          if (void 0 === t4) return -1;
          if (0 === (t4 = st2(e4, t4))) {
            if (n3 && r3) return 0;
            if (n3) return -1;
            if (r3) return 1;
          }
          return t4;
        }(e3.upper, t3.upper, e3.upperOpen, t3.upperOpen);
      }
      function Hn(n3, r3, i3, e3) {
        n3.subscribers.add(i3), e3.addEventListener("abort", function() {
          var e4, t3;
          n3.subscribers.delete(i3), 0 === n3.subscribers.size && (e4 = n3, t3 = r3, setTimeout(function() {
            0 === e4.subscribers.size && q(t3, e4);
          }, 3e3));
        });
      }
      var Jn = { stack: "dbcore", level: 0, name: "Cache", create: function(k3) {
        var O2 = k3.schema.name;
        return _2(_2({}, k3), { transaction: function(g3, w3, e3) {
          var _3, t3, x2 = k3.transaction(g3, w3, e3);
          return "readwrite" === w3 && (t3 = (_3 = new AbortController()).signal, e3 = function(b3) {
            return function() {
              if (_3.abort(), "readwrite" === w3) {
                for (var t4 = /* @__PURE__ */ new Set(), e4 = 0, n3 = g3; e4 < n3.length; e4++) {
                  var r3 = n3[e4], i3 = Sn["idb://".concat(O2, "/").concat(r3)];
                  if (i3) {
                    var o3 = k3.table(r3), a3 = i3.optimisticOps.filter(function(e5) {
                      return e5.trans === x2;
                    });
                    if (x2._explicit && b3 && x2.mutatedParts) for (var u3 = 0, s3 = Object.values(i3.queries.query); u3 < s3.length; u3++) for (var c3 = 0, l3 = (d3 = s3[u3]).slice(); c3 < l3.length; c3++) En((p3 = l3[c3]).obsSet, x2.mutatedParts) && (q(d3, p3), p3.subscribers.forEach(function(e5) {
                      return t4.add(e5);
                    }));
                    else if (0 < a3.length) {
                      i3.optimisticOps = i3.optimisticOps.filter(function(e5) {
                        return e5.trans !== x2;
                      });
                      for (var f3 = 0, h3 = Object.values(i3.queries.query); f3 < h3.length; f3++) for (var d3, p3, y3, v3 = 0, m3 = (d3 = h3[f3]).slice(); v3 < m3.length; v3++) null != (p3 = m3[v3]).res && x2.mutatedParts && (b3 && !p3.dirty ? (y3 = Object.isFrozen(p3.res), y3 = Qn(p3.res, p3.req, a3, o3, p3, y3), p3.dirty ? (q(d3, p3), p3.subscribers.forEach(function(e5) {
                        return t4.add(e5);
                      })) : y3 !== p3.res && (p3.res = y3, p3.promise = _e2.resolve({ result: y3 }))) : (p3.dirty && q(d3, p3), p3.subscribers.forEach(function(e5) {
                        return t4.add(e5);
                      })));
                    }
                  }
                }
                t4.forEach(function(e5) {
                  return e5();
                });
              }
            };
          }, x2.addEventListener("abort", e3(false), { signal: t3 }), x2.addEventListener("error", e3(false), { signal: t3 }), x2.addEventListener("complete", e3(true), { signal: t3 })), x2;
        }, table: function(c3) {
          var l3 = k3.table(c3), i3 = l3.schema.primaryKey;
          return _2(_2({}, l3), { mutate: function(t3) {
            var e3 = me.trans;
            if (i3.outbound || "disabled" === e3.db._options.cache || e3.explicit || "readwrite" !== e3.idbtrans.mode) return l3.mutate(t3);
            var n3 = Sn["idb://".concat(O2, "/").concat(c3)];
            if (!n3) return l3.mutate(t3);
            e3 = l3.mutate(t3);
            return "add" !== t3.type && "put" !== t3.type || !(50 <= t3.values.length || Mn(i3, t3).some(function(e4) {
              return null == e4;
            })) ? (n3.optimisticOps.push(t3), t3.mutatedParts && Cn(t3.mutatedParts), e3.then(function(e4) {
              0 < e4.numFailures && (q(n3.optimisticOps, t3), (e4 = Yn(0, t3, e4)) && n3.optimisticOps.push(e4), t3.mutatedParts && Cn(t3.mutatedParts));
            }), e3.catch(function() {
              q(n3.optimisticOps, t3), t3.mutatedParts && Cn(t3.mutatedParts);
            })) : e3.then(function(r3) {
              var e4 = Yn(0, _2(_2({}, t3), { values: t3.values.map(function(e5, t4) {
                var n4;
                if (r3.failures[t4]) return e5;
                e5 = null !== (n4 = i3.keyPath) && void 0 !== n4 && n4.includes(".") ? S2(e5) : _2({}, e5);
                return P(e5, i3.keyPath, r3.results[t4]), e5;
              }) }), r3);
              n3.optimisticOps.push(e4), queueMicrotask(function() {
                return t3.mutatedParts && Cn(t3.mutatedParts);
              });
            }), e3;
          }, query: function(t3) {
            if (!Vn(me, l3) || !zn("query", t3)) return l3.query(t3);
            var i4 = "immutable" === (null === (o3 = me.trans) || void 0 === o3 ? void 0 : o3.db._options.cache), e3 = me, n3 = e3.requery, r3 = e3.signal, o3 = function(e4, t4, n4, r4) {
              var i5 = Sn["idb://".concat(e4, "/").concat(t4)];
              if (!i5) return [];
              if (!(t4 = i5.queries[n4])) return [null, false, i5, null];
              var o4 = t4[(r4.query ? r4.query.index.name : null) || ""];
              if (!o4) return [null, false, i5, null];
              switch (n4) {
                case "query":
                  var a4 = o4.find(function(e5) {
                    return e5.req.limit === r4.limit && e5.req.values === r4.values && Gn(e5.req.query.range, r4.query.range);
                  });
                  return a4 ? [a4, true, i5, o4] : [o4.find(function(e5) {
                    return ("limit" in e5.req ? e5.req.limit : 1 / 0) >= r4.limit && (!r4.values || e5.req.values) && Xn(e5.req.query.range, r4.query.range);
                  }), false, i5, o4];
                case "count":
                  a4 = o4.find(function(e5) {
                    return Gn(e5.req.query.range, r4.query.range);
                  });
                  return [a4, !!a4, i5, o4];
              }
            }(O2, c3, "query", t3), a3 = o3[0], e3 = o3[1], u3 = o3[2], s3 = o3[3];
            return a3 && e3 ? a3.obsSet = t3.obsSet : (e3 = l3.query(t3).then(function(e4) {
              var t4 = e4.result;
              if (a3 && (a3.res = t4), i4) {
                for (var n4 = 0, r4 = t4.length; n4 < r4; ++n4) Object.freeze(t4[n4]);
                Object.freeze(t4);
              } else e4.result = S2(t4);
              return e4;
            }).catch(function(e4) {
              return s3 && a3 && q(s3, a3), Promise.reject(e4);
            }), a3 = { obsSet: t3.obsSet, promise: e3, subscribers: /* @__PURE__ */ new Set(), type: "query", req: t3, dirty: false }, s3 ? s3.push(a3) : (s3 = [a3], (u3 = u3 || (Sn["idb://".concat(O2, "/").concat(c3)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[t3.query.index.name || ""] = s3)), Hn(a3, s3, n3, r3), a3.promise.then(function(e4) {
              return { result: Qn(e4.result, t3, null == u3 ? void 0 : u3.optimisticOps, l3, a3, i4) };
            });
          } });
        } });
      } };
      function Zn(e3, r3) {
        return new Proxy(e3, { get: function(e4, t3, n3) {
          return "db" === t3 ? r3 : Reflect.get(e4, t3, n3);
        } });
      }
      var er = (tr.prototype.version = function(t3) {
        if (isNaN(t3) || t3 < 0.1) throw new Y2.Type("Given version is not a positive number");
        if (t3 = Math.round(10 * t3) / 10, this.idbdb || this._state.isBeingOpened) throw new Y2.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, t3);
        var e3 = this._versions, n3 = e3.filter(function(e4) {
          return e4._cfg.version === t3;
        })[0];
        return n3 || (n3 = new this.Version(t3), e3.push(n3), e3.sort(nn), n3.stores({}), this._state.autoSchema = false, n3);
      }, tr.prototype._whenReady = function(e3) {
        var n3 = this;
        return this.idbdb && (this._state.openComplete || me.letThrough || this._vip) ? e3() : new _e2(function(e4, t3) {
          if (n3._state.openComplete) return t3(new Y2.DatabaseClosed(n3._state.dbOpenError));
          if (!n3._state.isBeingOpened) {
            if (!n3._state.autoOpen) return void t3(new Y2.DatabaseClosed());
            n3.open().catch(G2);
          }
          n3._state.dbReadyPromise.then(e4, t3);
        }).then(e3);
      }, tr.prototype.use = function(e3) {
        var t3 = e3.stack, n3 = e3.create, r3 = e3.level, i3 = e3.name;
        i3 && this.unuse({ stack: t3, name: i3 });
        e3 = this._middlewares[t3] || (this._middlewares[t3] = []);
        return e3.push({ stack: t3, create: n3, level: null == r3 ? 10 : r3, name: i3 }), e3.sort(function(e4, t4) {
          return e4.level - t4.level;
        }), this;
      }, tr.prototype.unuse = function(e3) {
        var t3 = e3.stack, n3 = e3.name, r3 = e3.create;
        return t3 && this._middlewares[t3] && (this._middlewares[t3] = this._middlewares[t3].filter(function(e4) {
          return r3 ? e4.create !== r3 : !!n3 && e4.name !== n3;
        })), this;
      }, tr.prototype.open = function() {
        var e3 = this;
        return $e(ve2, function() {
          return Dn(e3);
        });
      }, tr.prototype._close = function() {
        var n3 = this._state, e3 = et.indexOf(this);
        if (0 <= e3 && et.splice(e3, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch (e4) {
          }
          this.idbdb = null;
        }
        n3.isBeingOpened || (n3.dbReadyPromise = new _e2(function(e4) {
          n3.dbReadyResolve = e4;
        }), n3.openCanceller = new _e2(function(e4, t3) {
          n3.cancelOpen = t3;
        }));
      }, tr.prototype.close = function(e3) {
        var t3 = (void 0 === e3 ? { disableAutoOpen: true } : e3).disableAutoOpen, e3 = this._state;
        t3 ? (e3.isBeingOpened && e3.cancelOpen(new Y2.DatabaseClosed()), this._close(), e3.autoOpen = false, e3.dbOpenError = new Y2.DatabaseClosed()) : (this._close(), e3.autoOpen = this._options.autoOpen || e3.isBeingOpened, e3.openComplete = false, e3.dbOpenError = null);
      }, tr.prototype.delete = function(n3) {
        var i3 = this;
        void 0 === n3 && (n3 = { disableAutoOpen: true });
        var o3 = 0 < arguments.length && "object" != typeof arguments[0], a3 = this._state;
        return new _e2(function(r3, t3) {
          function e3() {
            i3.close(n3);
            var e4 = i3._deps.indexedDB.deleteDatabase(i3.name);
            e4.onsuccess = qe(function() {
              var e5, t4, n4;
              e5 = i3._deps, t4 = i3.name, n4 = e5.indexedDB, e5 = e5.IDBKeyRange, vn(n4) || t4 === tt2 || yn(n4, e5).delete(t4).catch(G2), r3();
            }), e4.onerror = Bt(t3), e4.onblocked = i3._fireOnBlocked;
          }
          if (o3) throw new Y2.InvalidArgument("Invalid closeOptions argument to db.delete()");
          a3.isBeingOpened ? a3.dbReadyPromise.then(e3) : e3();
        });
      }, tr.prototype.backendDB = function() {
        return this.idbdb;
      }, tr.prototype.isOpen = function() {
        return null !== this.idbdb;
      }, tr.prototype.hasBeenClosed = function() {
        var e3 = this._state.dbOpenError;
        return e3 && "DatabaseClosed" === e3.name;
      }, tr.prototype.hasFailed = function() {
        return null !== this._state.dbOpenError;
      }, tr.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(tr.prototype, "tables", { get: function() {
        var t3 = this;
        return x(this._allTables).map(function(e3) {
          return t3._allTables[e3];
        });
      }, enumerable: false, configurable: true }), tr.prototype.transaction = function() {
        var e3 = function(e4, t3, n3) {
          var r3 = arguments.length;
          if (r3 < 2) throw new Y2.InvalidArgument("Too few arguments");
          for (var i3 = new Array(r3 - 1); --r3; ) i3[r3 - 1] = arguments[r3];
          return n3 = i3.pop(), [e4, w2(i3), n3];
        }.apply(this, arguments);
        return this._transaction.apply(this, e3);
      }, tr.prototype._transaction = function(e3, t3, n3) {
        var r3 = this, i3 = me.trans;
        i3 && i3.db === this && -1 === e3.indexOf("!") || (i3 = null);
        var o3, a3, u3 = -1 !== e3.indexOf("?");
        e3 = e3.replace("!", "").replace("?", "");
        try {
          if (a3 = t3.map(function(e4) {
            e4 = e4 instanceof r3.Table ? e4.name : e4;
            if ("string" != typeof e4) throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return e4;
          }), "r" == e3 || e3 === nt2) o3 = nt2;
          else {
            if ("rw" != e3 && e3 != rt2) throw new Y2.InvalidArgument("Invalid transaction mode: " + e3);
            o3 = rt2;
          }
          if (i3) {
            if (i3.mode === nt2 && o3 === rt2) {
              if (!u3) throw new Y2.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              i3 = null;
            }
            i3 && a3.forEach(function(e4) {
              if (i3 && -1 === i3.storeNames.indexOf(e4)) {
                if (!u3) throw new Y2.SubTransaction("Table " + e4 + " not included in parent transaction.");
                i3 = null;
              }
            }), u3 && i3 && !i3.active && (i3 = null);
          }
        } catch (n4) {
          return i3 ? i3._promise(null, function(e4, t4) {
            t4(n4);
          }) : Xe(n4);
        }
        var s3 = function i4(o4, a4, u4, s4, c3) {
          return _e2.resolve().then(function() {
            var e4 = me.transless || me, t4 = o4._createTransaction(a4, u4, o4._dbSchema, s4);
            if (t4.explicit = true, e4 = { trans: t4, transless: e4 }, s4) t4.idbtrans = s4.idbtrans;
            else try {
              t4.create(), t4.idbtrans._explicit = true, o4._state.PR1398_maxLoop = 3;
            } catch (e5) {
              return e5.name === z2.InvalidState && o4.isOpen() && 0 < --o4._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), o4.close({ disableAutoOpen: false }), o4.open().then(function() {
                return i4(o4, a4, u4, null, c3);
              })) : Xe(e5);
            }
            var n4, r4 = B(c3);
            return r4 && Le(), e4 = _e2.follow(function() {
              var e5;
              (n4 = c3.call(t4, t4)) && (r4 ? (e5 = Ue.bind(null, null), n4.then(e5, e5)) : "function" == typeof n4.next && "function" == typeof n4.throw && (n4 = In(n4)));
            }, e4), (n4 && "function" == typeof n4.then ? _e2.resolve(n4).then(function(e5) {
              return t4.active ? e5 : Xe(new Y2.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : e4.then(function() {
              return n4;
            })).then(function(e5) {
              return s4 && t4._resolve(), t4._completion.then(function() {
                return e5;
              });
            }).catch(function(e5) {
              return t4._reject(e5), Xe(e5);
            });
          });
        }.bind(null, this, o3, a3, i3, n3);
        return i3 ? i3._promise(o3, s3, "lock") : me.trans ? $e(me.transless, function() {
          return r3._whenReady(s3);
        }) : this._whenReady(s3);
      }, tr.prototype.table = function(e3) {
        if (!m2(this._allTables, e3)) throw new Y2.InvalidTable("Table ".concat(e3, " does not exist"));
        return this._allTables[e3];
      }, tr);
      function tr(e3, t3) {
        var o3 = this;
        this._middlewares = {}, this.verno = 0;
        var n3 = tr.dependencies;
        this._options = t3 = _2({ addons: tr.addons, autoOpen: true, indexedDB: n3.indexedDB, IDBKeyRange: n3.IDBKeyRange, cache: "cloned" }, t3), this._deps = { indexedDB: t3.indexedDB, IDBKeyRange: t3.IDBKeyRange };
        n3 = t3.addons;
        this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var a3, r3, u3, i3, s3, c3 = { dbOpenError: null, isBeingOpened: false, onReadyBeingFired: null, openComplete: false, dbReadyResolve: G2, dbReadyPromise: null, cancelOpen: G2, openCanceller: null, autoSchema: true, PR1398_maxLoop: 3, autoOpen: t3.autoOpen };
        c3.dbReadyPromise = new _e2(function(e4) {
          c3.dbReadyResolve = e4;
        }), c3.openCanceller = new _e2(function(e4, t4) {
          c3.cancelOpen = t4;
        }), this._state = c3, this.name = e3, this.on = dt2(this, "populate", "blocked", "versionchange", "close", { ready: [re, G2] }), this.on.ready.subscribe = p2(this.on.ready.subscribe, function(i4) {
          return function(n4, r4) {
            tr.vip(function() {
              var t4, e4 = o3._state;
              e4.openComplete ? (e4.dbOpenError || _e2.resolve().then(n4), r4 && i4(n4)) : e4.onReadyBeingFired ? (e4.onReadyBeingFired.push(n4), r4 && i4(n4)) : (i4(n4), t4 = o3, r4 || i4(function e5() {
                t4.on.ready.unsubscribe(n4), t4.on.ready.unsubscribe(e5);
              }));
            });
          };
        }), this.Collection = (a3 = this, pt(Ot.prototype, function(e4, t4) {
          this.db = a3;
          var n4 = ot, r4 = null;
          if (t4) try {
            n4 = t4();
          } catch (e5) {
            r4 = e5;
          }
          var i4 = e4._ctx, t4 = i4.table, e4 = t4.hook.reading.fire;
          this._ctx = { table: t4, index: i4.index, isPrimKey: !i4.index || t4.schema.primKey.keyPath && i4.index === t4.schema.primKey.name, range: n4, keysOnly: false, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: true, isMatch: null, offset: 0, limit: 1 / 0, error: r4, or: i4.or, valueMapper: e4 !== X ? e4 : null };
        })), this.Table = (r3 = this, pt(ft.prototype, function(e4, t4, n4) {
          this.db = r3, this._tx = n4, this.name = e4, this.schema = t4, this.hook = r3._allTables[e4] ? r3._allTables[e4].hook : dt2(null, { creating: [Z, G2], reading: [H, X], updating: [te, G2], deleting: [ee2, G2] });
        })), this.Transaction = (u3 = this, pt(Lt.prototype, function(e4, t4, n4, r4, i4) {
          var o4 = this;
          this.db = u3, this.mode = e4, this.storeNames = t4, this.schema = n4, this.chromeTransactionDurability = r4, this.idbtrans = null, this.on = dt2(this, "complete", "error", "abort"), this.parent = i4 || null, this.active = true, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new _e2(function(e5, t5) {
            o4._resolve = e5, o4._reject = t5;
          }), this._completion.then(function() {
            o4.active = false, o4.on.complete.fire();
          }, function(e5) {
            var t5 = o4.active;
            return o4.active = false, o4.on.error.fire(e5), o4.parent ? o4.parent._reject(e5) : t5 && o4.idbtrans && o4.idbtrans.abort(), Xe(e5);
          });
        })), this.Version = (i3 = this, pt(dn.prototype, function(e4) {
          this.db = i3, this._cfg = { version: e4, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (s3 = this, pt(Dt.prototype, function(e4, t4, n4) {
          if (this.db = s3, this._ctx = { table: e4, index: ":id" === t4 ? null : t4, or: n4 }, this._cmp = this._ascending = st2, this._descending = function(e5, t5) {
            return st2(t5, e5);
          }, this._max = function(e5, t5) {
            return 0 < st2(e5, t5) ? e5 : t5;
          }, this._min = function(e5, t5) {
            return st2(e5, t5) < 0 ? e5 : t5;
          }, this._IDBKeyRange = s3._deps.IDBKeyRange, !this._IDBKeyRange) throw new Y2.MissingAPI();
        })), this.on("versionchange", function(e4) {
          0 < e4.newVersion ? console.warn("Another connection wants to upgrade database '".concat(o3.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(o3.name, "'. Closing db now to resume the delete request.")), o3.close({ disableAutoOpen: false });
        }), this.on("blocked", function(e4) {
          !e4.newVersion || e4.newVersion < e4.oldVersion ? console.warn("Dexie.delete('".concat(o3.name, "') was blocked")) : console.warn("Upgrade '".concat(o3.name, "' blocked by other connection holding version ").concat(e4.oldVersion / 10));
        }), this._maxKey = Yt(t3.IDBKeyRange), this._createTransaction = function(e4, t4, n4, r4) {
          return new o3.Transaction(e4, t4, n4, o3._options.chromeTransactionDurability, r4);
        }, this._fireOnBlocked = function(t4) {
          o3.on("blocked").fire(t4), et.filter(function(e4) {
            return e4.name === o3.name && e4 !== o3 && !e4._state.vcFired;
          }).map(function(e4) {
            return e4.on("versionchange").fire(t4);
          });
        }, this.use(Un), this.use(Jn), this.use(Wn), this.use(Rn), this.use(Nn);
        var l3 = new Proxy(this, { get: function(e4, t4, n4) {
          if ("_vip" === t4) return true;
          if ("table" === t4) return function(e5) {
            return Zn(o3.table(e5), l3);
          };
          var r4 = Reflect.get(e4, t4, n4);
          return r4 instanceof ft ? Zn(r4, l3) : "tables" === t4 ? r4.map(function(e5) {
            return Zn(e5, l3);
          }) : "_createTransaction" === t4 ? function() {
            return Zn(r4.apply(this, arguments), l3);
          } : r4;
        } });
        this.vip = l3, n3.forEach(function(e4) {
          return e4(o3);
        });
      }
      var nr, F2 = "undefined" != typeof Symbol && "observable" in Symbol ? Symbol.observable : "@@observable", rr = (ir.prototype.subscribe = function(e3, t3, n3) {
        return this._subscribe(e3 && "function" != typeof e3 ? e3 : { next: e3, error: t3, complete: n3 });
      }, ir.prototype[F2] = function() {
        return this;
      }, ir);
      function ir(e3) {
        this._subscribe = e3;
      }
      try {
        nr = { indexedDB: f2.indexedDB || f2.mozIndexedDB || f2.webkitIndexedDB || f2.msIndexedDB, IDBKeyRange: f2.IDBKeyRange || f2.webkitIDBKeyRange };
      } catch (e3) {
        nr = { indexedDB: null, IDBKeyRange: null };
      }
      function or(h3) {
        var d3, p3 = false, e3 = new rr(function(r3) {
          var i3 = B(h3);
          var o3, a3 = false, u3 = {}, s3 = {}, e4 = { get closed() {
            return a3;
          }, unsubscribe: function() {
            a3 || (a3 = true, o3 && o3.abort(), c3 && Nt.storagemutated.unsubscribe(f3));
          } };
          r3.start && r3.start(e4);
          var c3 = false, l3 = function() {
            return Ge(t3);
          };
          var f3 = function(e5) {
            Kn(u3, e5), En(s3, u3) && l3();
          }, t3 = function() {
            var t4, n3, e5;
            !a3 && nr.indexedDB && (u3 = {}, t4 = {}, o3 && o3.abort(), o3 = new AbortController(), e5 = function(e6) {
              var t5 = je();
              try {
                i3 && Le();
                var n4 = Ne(h3, e6);
                return n4 = i3 ? n4.finally(Ue) : n4;
              } finally {
                t5 && Ae();
              }
            }(n3 = { subscr: t4, signal: o3.signal, requery: l3, querier: h3, trans: null }), Promise.resolve(e5).then(function(e6) {
              p3 = true, d3 = e6, a3 || n3.signal.aborted || (u3 = {}, function(e7) {
                for (var t5 in e7) if (m2(e7, t5)) return;
                return 1;
              }(s3 = t4) || c3 || (Nt(Ft, f3), c3 = true), Ge(function() {
                return !a3 && r3.next && r3.next(e6);
              }));
            }, function(e6) {
              p3 = false, ["DatabaseClosedError", "AbortError"].includes(null == e6 ? void 0 : e6.name) || a3 || Ge(function() {
                a3 || r3.error && r3.error(e6);
              });
            }));
          };
          return setTimeout(l3, 0), e4;
        });
        return e3.hasValue = function() {
          return p3;
        }, e3.getValue = function() {
          return d3;
        }, e3;
      }
      var ar2 = er;
      function ur(e3) {
        var t3 = cr;
        try {
          cr = true, Nt.storagemutated.fire(e3), Tn(e3, true);
        } finally {
          cr = t3;
        }
      }
      r2(ar2, _2(_2({}, Q2), { delete: function(e3) {
        return new ar2(e3, { addons: [] }).delete();
      }, exists: function(e3) {
        return new ar2(e3, { addons: [] }).open().then(function(e4) {
          return e4.close(), true;
        }).catch("NoSuchDatabaseError", function() {
          return false;
        });
      }, getDatabaseNames: function(e3) {
        try {
          return t3 = ar2.dependencies, n3 = t3.indexedDB, t3 = t3.IDBKeyRange, (vn(n3) ? Promise.resolve(n3.databases()).then(function(e4) {
            return e4.map(function(e5) {
              return e5.name;
            }).filter(function(e5) {
              return e5 !== tt2;
            });
          }) : yn(n3, t3).toCollection().primaryKeys()).then(e3);
        } catch (e4) {
          return Xe(new Y2.MissingAPI());
        }
        var t3, n3;
      }, defineClass: function() {
        return function(e3) {
          a2(this, e3);
        };
      }, ignoreTransaction: function(e3) {
        return me.trans ? $e(me.transless, e3) : e3();
      }, vip: mn, async: function(t3) {
        return function() {
          try {
            var e3 = In(t3.apply(this, arguments));
            return e3 && "function" == typeof e3.then ? e3 : _e2.resolve(e3);
          } catch (e4) {
            return Xe(e4);
          }
        };
      }, spawn: function(e3, t3, n3) {
        try {
          var r3 = In(e3.apply(n3, t3 || []));
          return r3 && "function" == typeof r3.then ? r3 : _e2.resolve(r3);
        } catch (e4) {
          return Xe(e4);
        }
      }, currentTransaction: { get: function() {
        return me.trans || null;
      } }, waitFor: function(e3, t3) {
        t3 = _e2.resolve("function" == typeof e3 ? ar2.ignoreTransaction(e3) : e3).timeout(t3 || 6e4);
        return me.trans ? me.trans.waitFor(t3) : t3;
      }, Promise: _e2, debug: { get: function() {
        return ie2;
      }, set: function(e3) {
        oe2(e3);
      } }, derive: o2, extend: a2, props: r2, override: p2, Events: dt2, on: Nt, liveQuery: or, extendObservabilitySet: Kn, getByKeyPath: O, setByKeyPath: P, delByKeyPath: function(t3, e3) {
        "string" == typeof e3 ? P(t3, e3, void 0) : "length" in e3 && [].map.call(e3, function(e4) {
          P(t3, e4, void 0);
        });
      }, shallowClone: g2, deepClone: S2, getObjectDiff: Fn, cmp: st2, asap: v2, minKey: -1 / 0, addons: [], connections: et, errnames: z2, dependencies: nr, cache: Sn, semVer: "4.0.11", version: "4.0.11".split(".").map(function(e3) {
        return parseInt(e3);
      }).reduce(function(e3, t3, n3) {
        return e3 + t3 / Math.pow(10, 2 * n3);
      }) })), ar2.maxKey = Yt(ar2.dependencies.IDBKeyRange), "undefined" != typeof dispatchEvent && "undefined" != typeof addEventListener && (Nt(Ft, function(e3) {
        cr || (e3 = new CustomEvent(Mt, { detail: e3 }), cr = true, dispatchEvent(e3), cr = false);
      }), addEventListener(Mt, function(e3) {
        e3 = e3.detail;
        cr || ur(e3);
      }));
      var sr, cr = false, lr = function() {
      };
      return "undefined" != typeof BroadcastChannel && ((lr = function() {
        (sr = new BroadcastChannel(Mt)).onmessage = function(e3) {
          return e3.data && ur(e3.data);
        };
      })(), "function" == typeof sr.unref && sr.unref(), Nt(Ft, function(e3) {
        cr || sr.postMessage(e3);
      })), "undefined" != typeof addEventListener && (addEventListener("pagehide", function(e3) {
        if (!er.disableBfCache && e3.persisted) {
          ie2 && console.debug("Dexie: handling persisted pagehide"), null != sr && sr.close();
          for (var t3 = 0, n3 = et; t3 < n3.length; t3++) n3[t3].close({ disableAutoOpen: false });
        }
      }), addEventListener("pageshow", function(e3) {
        !er.disableBfCache && e3.persisted && (ie2 && console.debug("Dexie: handling persisted pageshow"), lr(), ur({ all: new gn(-1 / 0, [[]]) }));
      })), _e2.rejectionMapper = function(e3, t3) {
        return !e3 || e3 instanceof N2 || e3 instanceof TypeError || e3 instanceof SyntaxError || !e3.name || !$2[e3.name] ? e3 : (t3 = new $2[e3.name](t3 || e3.message, e3), "stack" in e3 && l2(t3, "stack", { get: function() {
          return this.inner.stack;
        } }), t3);
      }, oe2(ie2), _2(er, Object.freeze({ __proto__: null, Dexie: er, liveQuery: or, Entity: ut, cmp: st2, PropModification: xt, replacePrefix: function(e3, t3) {
        return new xt({ replacePrefix: [e3, t3] });
      }, add: function(e3) {
        return new xt({ add: e3 });
      }, remove: function(e3) {
        return new xt({ remove: e3 });
      }, default: er, RangeSet: gn, mergeRanges: _n, rangesOverlap: xn }), { default: er }), er;
    });
  })(dexie_min$1);
  return dexie_min$1.exports;
}
var dexie_minExports = requireDexie_min();
const _Dexie = /* @__PURE__ */ getDefaultExportFromCjs(dexie_minExports);
const DexieSymbol = Symbol.for("Dexie");
const Dexie = globalThis[DexieSymbol] || (globalThis[DexieSymbol] = _Dexie);
if (_Dexie.semVer !== Dexie.semVer) {
  throw new Error(`Two different versions of Dexie loaded in the same app: ${_Dexie.semVer} and ${Dexie.semVer}`);
}
const {
  liveQuery,
  mergeRanges,
  rangesOverlap,
  RangeSet,
  cmp,
  Entity,
  PropModification,
  replacePrefix,
  add,
  remove
} = Dexie;
var ThreatLevel = /* @__PURE__ */ ((ThreatLevel2) => {
  ThreatLevel2["NORMAL"] = "normal";
  ThreatLevel2["LOW"] = "low";
  ThreatLevel2["MEDIUM"] = "medium";
  ThreatLevel2["HIGH"] = "high";
  ThreatLevel2["CRITICAL"] = "critical";
  return ThreatLevel2;
})(ThreatLevel || {});
var LogFormat = /* @__PURE__ */ ((LogFormat2) => {
  LogFormat2["APACHE"] = "apache";
  LogFormat2["NGINX"] = "nginx";
  LogFormat2["IIS"] = "iis";
  LogFormat2["TOMCAT"] = "tomcat";
  LogFormat2["GENERIC"] = "generic";
  LogFormat2["AUTO"] = "auto";
  return LogFormat2;
})(LogFormat || {});
class AppDatabase extends Dexie {
  constructor() {
    super("fastwlat");
    this.isInitialized = false;
    this.initPromise = null;
    this.version(1).stores({
      threatRules: "id, name, category, enabled"
    });
    this.on("ready", () => {
      console.log("[Database] Database ready");
    });
    this.on("blocked", () => {
      console.warn("[Database] Database is blocked by another connection");
    });
    this.on("versionchange", () => {
      console.log("[Database] Database version changed, closing...");
      this.close();
    });
  }
  async initialize() {
    if (this.isInitialized) {
      return;
    }
    if (this.initPromise) {
      return this.initPromise;
    }
    this.initPromise = this.performInitialization();
    return this.initPromise;
  }
  async performInitialization() {
    try {
      console.log("[Database] Initializing database...");
      await this.open();
      const existingRules = await this.threatRules.count();
      if (existingRules === 0) {
        console.log("[Database] No rules found, initializing with default rules...");
        await this.initializeDefaultRules();
      }
      this.isInitialized = true;
      console.log("[Database] Database initialized successfully");
    } catch (error) {
      console.error("[Database] Failed to initialize:", error);
      if (error instanceof Error && (error.message.includes("UnknownError") || error.message.includes("DatabaseClosedError") || error.message.includes("Internal error"))) {
        console.log("[Database] Attempting to reset database...");
        await this.resetDatabase();
      }
      throw error;
    }
  }
  async resetDatabase() {
    try {
      this.close();
      try {
        await Dexie.delete("fastwlat");
        console.log("[Database] Database deleted successfully");
      } catch (deleteError) {
        console.warn("[Database] Failed to delete database, continuing...", deleteError);
      }
      await new Promise((resolve2) => setTimeout(resolve2, 1e3));
      await this.open();
      await this.initializeDefaultRules();
      this.isInitialized = true;
      console.log("[Database] Database recreated successfully");
    } catch (error) {
      console.error("[Database] Failed to reset database:", error);
      this.isInitialized = true;
      throw error;
    }
  }
  // 公开重置方法供外部调用
  async forceReset() {
    this.isInitialized = false;
    this.initPromise = null;
    await this.resetDatabase();
  }
  async initializeDefaultRules() {
    const defaultRules = [
      {
        name: "SQL注入 - Union查询",
        pattern: `(['"]\\s*union\\s+(all\\s+)?select\\s+.*?\\s+from|union\\s+(all\\s+)?select\\s+.*?\\s+from|union\\s+(all\\s+)?select\\s+.*?\\s+where)`,
        category: "sql_injection",
        description: "[示例数据，需自行修改]检测Union SQL注入攻击",
        enabled: true,
        priority: 1,
        severity: ThreatLevel.HIGH,
        action: "log",
        contributor: "admin",
        // 规则贡献用户
        conditions: {
          statusCodes: [200, 500],
          methods: ["GET", "POST"],
          excludePaths: ["/api/search", "/api/query", "/admin/database"]
        },
        matchCount: 0,
        lastMatchedAt: void 0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        name: "SQL注入 - 布尔盲注",
        pattern: `(['"]\\s*or\\s+['"]?\\d+['"]?\\s*[=<>]\\s*['"]?\\d+['"]?|['"]\\s*and\\s+['"]?\\d+['"]?\\s*[=<>]\\s*['"]?\\d+['"]?|['"]\\s*or\\s*['"]\\s*[=<>]\\s*['"]|['"]\\s*and\\s*['"]\\s*[=<>]\\s*['"])`,
        category: "sql_injection",
        description: "[示例数据，需自行修改]检测布尔盲注SQL注入",
        enabled: true,
        priority: 2,
        severity: ThreatLevel.HIGH,
        action: "log",
        contributor: "admin",
        conditions: {
          statusCodes: [200, 500],
          methods: ["GET", "POST"],
          excludePaths: ["/api/search", "/api/query", "/admin/database"]
        },
        matchCount: 0,
        lastMatchedAt: void 0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        name: "SQL注入 - 时间盲注",
        pattern: "(sleep\\s*\\(|waitfor\\s+delay|benchmark\\s*\\(|pg_sleep\\s*\\(|dbms_pipe\\.receive_message|dbms_lock\\.sleep)",
        category: "sql_injection",
        description: "[示例数据，需自行修改]检测时间盲注SQL注入",
        enabled: true,
        priority: 3,
        severity: ThreatLevel.HIGH,
        action: "log",
        contributor: "admin",
        conditions: {
          statusCodes: [200, 500],
          methods: ["GET", "POST"],
          excludePaths: ["/api/performance", "/admin/benchmark", "/system/test"]
        },
        matchCount: 0,
        lastMatchedAt: void 0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        name: "SQL注入 - 错误注入",
        pattern: "(extractvalue\\s*\\(|updatexml\\s*\\(|exp\\s*\\(|floor\\s*\\(.*?rand\\s*\\(|cast\\s*\\(.*?as\\s+|convert\\s*\\(|geometrycollection\\s*\\(|multipoint\\s*\\(|polygon\\s*\\()",
        category: "sql_injection",
        description: "[示例数据，需自行修改]检测错误注入SQL攻击",
        enabled: true,
        priority: 4,
        severity: ThreatLevel.HIGH,
        action: "log",
        contributor: "admin",
        conditions: {
          statusCodes: [200, 500],
          methods: ["GET", "POST"],
          excludePaths: ["/api/convert", "/admin/cast", "/system/geometry"]
        },
        matchCount: 0,
        lastMatchedAt: void 0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        name: "SQL注入 - 堆叠查询",
        pattern: "(;\\s*(select|insert|update|delete|drop|create|alter|declare|set)\\b|\\bexec\\s*\\(|\\bexecute\\s*\\(|\\bxp_cmdshell\\s*\\()",
        category: "sql_injection",
        description: "[示例数据，需自行修改]检测堆叠查询SQL注入",
        enabled: true,
        priority: 5,
        severity: ThreatLevel.HIGH,
        action: "log",
        contributor: "admin",
        conditions: {
          statusCodes: [200, 500],
          methods: ["GET", "POST"],
          excludePaths: ["/api/batch", "/admin/execute", "/system/command"]
        },
        matchCount: 0,
        lastMatchedAt: void 0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        name: "XSS攻击检测",
        pattern: "(<script[^>]*>|javascript:[^\\s]*|vbscript:[^\\s]*|data:text/html|on(load|error|click|mouse|key)\\s*=|alert\\s*\\(|document\\.cookie|eval\\s*\\()",
        category: "xss",
        description: "[示例数据，需自行修改]检测跨站脚本攻击",
        enabled: true,
        priority: 6,
        severity: ThreatLevel.HIGH,
        action: "log",
        contributor: "admin",
        conditions: {
          statusCodes: [200, 500],
          methods: ["GET", "POST"],
          excludePaths: ["/admin/editor", "/api/content", "/blog/post"]
        },
        matchCount: 0,
        lastMatchedAt: void 0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        name: "路径遍历攻击",
        pattern: "((\\.\\./|\\.\\.%2f|\\.%2e/|\\.%2e%2f|%2e%2e/|%2e%2e%2f){3,}|(etc/passwd|etc/shadow|windows\\\\system32|boot\\.ini|win\\.ini|proc/self|proc/version))",
        category: "path_traversal",
        description: "[示例数据，需自行修改]检测目录遍历攻击",
        enabled: true,
        priority: 7,
        severity: ThreatLevel.MEDIUM,
        action: "log",
        contributor: "admin",
        conditions: {
          statusCodes: [404, 403, 500],
          methods: ["GET"],
          excludePaths: ["/admin/files", "/api/files", "/upload"]
        },
        matchCount: 0,
        lastMatchedAt: void 0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        name: "命令注入检测",
        pattern: "(;\\s*(cat|ls|dir|whoami|id|ping|wget|curl|nc|bash|sh|cmd|powershell|net)\\b|\\|\\s*(cat|ls|dir|whoami|id|ping|wget|curl|nc|bash|sh|cmd|powershell|net)\\b|&&\\s*(cat|ls|dir|whoami|id|ping|wget|curl|nc|bash|sh|cmd|powershell|net)\\b)",
        category: "command_injection",
        description: "[示例数据，需自行修改]检测命令注入攻击",
        enabled: true,
        priority: 8,
        severity: ThreatLevel.HIGH,
        action: "log",
        contributor: "admin",
        conditions: {
          statusCodes: [200, 500],
          methods: ["GET", "POST"],
          excludePaths: ["/admin/terminal", "/api/command", "/system/exec"]
        },
        matchCount: 0,
        lastMatchedAt: void 0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        name: "扫描工具检测",
        pattern: "\\b(sqlmap|nikto|nmap|dirb|gobuster|wpscan|burpsuite|metasploit|acunetix|nessus|openvas|masscan|zmap|amass|subfinder)\\b",
        category: "scanner",
        description: "[示例数据，需自行修改]检测常见安全扫描工具",
        enabled: true,
        priority: 9,
        severity: ThreatLevel.MEDIUM,
        action: "log",
        contributor: "admin",
        conditions: {
          statusCodes: [200, 404, 403],
          methods: ["GET", "HEAD"],
          excludePaths: ["/robots.txt", "/sitemap.xml", "/favicon.ico"]
        },
        matchCount: 0,
        lastMatchedAt: void 0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        name: "敏感文件访问",
        pattern: "\\b(\\.env|wp-config\\.php|config\\.php|phpinfo\\.php|admin\\.php|passwd|shadow|\\.git/|\\.svn/|backup\\.(sql|zip|tar|bak)|composer\\.json|package\\.json|web\\.config)\\b",
        category: "sensitive_file",
        description: "[示例数据，需自行修改]检测敏感文件访问尝试",
        enabled: true,
        priority: 10,
        severity: ThreatLevel.MEDIUM,
        action: "log",
        contributor: "admin",
        conditions: {
          statusCodes: [200, 404, 403],
          methods: ["GET"],
          excludePaths: ["/admin/config", "/api/config", "/system/info"]
        },
        matchCount: 0,
        lastMatchedAt: void 0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        name: "Web Shell检测",
        pattern: "\\b(c99|r57|b374k|c100|simple-backdoor|phpspy|shell\\.php|cmd\\.php|upload\\.php|webshell|backdoor|hack|exploit)\\.(php|asp|aspx|jsp|jspx)\\b",
        category: "webshell",
        description: "[示例数据，需自行修改]检测Web Shell上传和访问",
        enabled: true,
        priority: 11,
        severity: ThreatLevel.HIGH,
        action: "log",
        contributor: "admin",
        conditions: {
          statusCodes: [200, 404, 403],
          methods: ["GET", "POST"],
          excludePaths: ["/admin/upload", "/api/upload", "/system/upload"]
        },
        matchCount: 0,
        lastMatchedAt: void 0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      }
    ];
    for (const rule of defaultRules) {
      await this.threatRules.add({
        id: crypto.randomUUID(),
        ...rule
      });
    }
  }
}
const db = new AppDatabase();
let memoryRules = [];
let usingMemoryFallback = false;
function getDefaultRules() {
  return [
    {
      id: crypto.randomUUID(),
      name: "SQL注入 - Union查询",
      pattern: `(['"]\\s*union\\s+(all\\s+)?select|union\\s+(all\\s+)?select)`,
      category: "sql_injection",
      description: "[示例数据，需自行修改]检测Union SQL注入攻击",
      enabled: true,
      priority: 1,
      severity: ThreatLevel.HIGH,
      action: "log",
      contributor: "admin",
      conditions: {
        statusCodes: [200]
      },
      matchCount: 0,
      lastMatchedAt: void 0,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    },
    {
      id: crypto.randomUUID(),
      name: "SQL注入 - 布尔盲注",
      pattern: `(\\bor\\b\\s*['"]?\\d+['"]?\\s*[=<>]\\s*['"]?\\d+['"]?|\\band\\b\\s*['"]?\\d+['"]?\\s*[=<>]\\s*['"]?\\d+['"]?|['"]\\s*or\\s*['"]|['"]\\s*and\\s*['"])`,
      category: "sql_injection",
      description: "[示例数据，需自行修改]检测布尔盲注SQL注入",
      enabled: true,
      priority: 2,
      severity: ThreatLevel.HIGH,
      action: "log",
      contributor: "admin",
      conditions: {
        statusCodes: [200]
      },
      matchCount: 0,
      lastMatchedAt: void 0,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    },
    {
      id: crypto.randomUUID(),
      name: "SQL注入 - 时间盲注",
      pattern: "(sleep\\s*\\(|waitfor\\s+delay|benchmark\\s*\\(|pg_sleep\\s*\\()",
      category: "sql_injection",
      description: "[示例数据，需自行修改]检测时间盲注SQL注入",
      enabled: true,
      priority: 3,
      severity: ThreatLevel.HIGH,
      action: "log",
      contributor: "admin",
      conditions: {
        statusCodes: [200]
      },
      matchCount: 0,
      lastMatchedAt: void 0,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    },
    {
      id: crypto.randomUUID(),
      name: "SQL注入 - 错误注入",
      pattern: "(extractvalue\\s*\\(|updatexml\\s*\\(|exp\\s*\\(|floor\\s*\\(.*?rand\\s*\\(|cast\\s*\\(.*?as\\s+|convert\\s*\\()",
      category: "sql_injection",
      description: "[示例数据，需自行修改]检测错误注入SQL攻击",
      enabled: true,
      priority: 4,
      severity: ThreatLevel.HIGH,
      action: "log",
      contributor: "admin",
      conditions: {
        statusCodes: [200]
      },
      matchCount: 0,
      lastMatchedAt: void 0,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    },
    {
      id: crypto.randomUUID(),
      name: "SQL注入 - 堆叠查询",
      pattern: "(;\\s*(select|insert|update|delete|drop|create|alter)\\b|\\bexec\\s*\\(|\\bexecute\\s*\\()",
      category: "sql_injection",
      description: "[示例数据，需自行修改]检测堆叠查询SQL注入",
      enabled: true,
      priority: 5,
      severity: ThreatLevel.HIGH,
      action: "log",
      contributor: "admin",
      conditions: {
        statusCodes: [200]
      },
      matchCount: 0,
      lastMatchedAt: void 0,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    },
    {
      id: crypto.randomUUID(),
      name: "XSS攻击检测",
      pattern: "(<(script|img|iframe|svg|object|embed)\\b[^>]*?(src|href|on\\w+|data)\\s*=|javascript:|vbscript:|data:text\\/html|alert\\s*\\(|document\\.cookie)",
      category: "xss",
      description: "[示例数据，需自行修改]检测跨站脚本攻击",
      enabled: true,
      priority: 6,
      severity: ThreatLevel.HIGH,
      action: "log",
      contributor: "admin",
      matchCount: 0,
      lastMatchedAt: void 0,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    },
    {
      id: crypto.randomUUID(),
      name: "路径遍历攻击",
      pattern: "((\\.\\./|\\.\\.%2f|\\.%2e/|\\.%2e%2f|%2e%2e/|%2e%2e%2f){2,}|(etc/passwd|etc/shadow|windows\\\\system32|boot\\.ini|win\\.ini))",
      category: "path_traversal",
      description: "[示例数据，需自行修改]检测目录遍历攻击",
      enabled: true,
      priority: 7,
      severity: ThreatLevel.MEDIUM,
      action: "log",
      contributor: "admin",
      matchCount: 0,
      lastMatchedAt: void 0,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    },
    {
      id: crypto.randomUUID(),
      name: "命令注入检测",
      pattern: "(;\\s*(cat|ls|dir|whoami|id|ping|wget|curl|nc|bash|sh|cmd)\\b|\\|\\s*(cat|ls|dir|whoami|id|ping|wget|curl|nc|bash|sh|cmd)\\b|&&\\s*(cat|ls|dir|whoami|id|ping|wget|curl|nc|bash|sh|cmd)\\b)",
      category: "command_injection",
      description: "[示例数据，需自行修改]检测命令注入攻击",
      enabled: true,
      priority: 8,
      severity: ThreatLevel.HIGH,
      action: "log",
      contributor: "admin",
      matchCount: 0,
      lastMatchedAt: void 0,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    },
    {
      id: crypto.randomUUID(),
      name: "扫描工具检测",
      pattern: "\\b(sqlmap|nikto|nmap|dirb|gobuster|wpscan|burpsuite|metasploit|acunetix|nessus|openvas)\\b",
      category: "scanner",
      description: "[示例数据，需自行修改]检测常见安全扫描工具",
      enabled: true,
      priority: 9,
      severity: ThreatLevel.MEDIUM,
      action: "log",
      contributor: "admin",
      matchCount: 0,
      lastMatchedAt: void 0,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    },
    {
      id: crypto.randomUUID(),
      name: "敏感文件访问",
      pattern: "\\b(\\.env|wp-config|config\\.php|phpinfo\\.php|admin\\.php|passwd|shadow|\\.git/|\\.svn/|backup\\.(sql|zip|tar))\\b",
      category: "sensitive_file",
      description: "[示例数据，需自行修改]检测敏感文件访问尝试",
      enabled: true,
      priority: 10,
      severity: ThreatLevel.MEDIUM,
      action: "log",
      contributor: "admin",
      matchCount: 0,
      lastMatchedAt: void 0,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    },
    {
      id: crypto.randomUUID(),
      name: "Web Shell检测",
      pattern: "\\b(c99|r57|b374k|c100|simple-backdoor|phpspy|shell\\.php|cmd\\.php|upload\\.php)\\b",
      category: "webshell",
      description: "[示例数据，需自行修改]检测Web Shell上传和访问",
      enabled: true,
      priority: 11,
      severity: ThreatLevel.HIGH,
      action: "log",
      contributor: "admin",
      matchCount: 0,
      lastMatchedAt: void 0,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    }
  ];
}
const rulesRepo = {
  async getAll() {
    if (usingMemoryFallback) {
      console.log("[rulesRepo] Using memory fallback for rules");
      return [...memoryRules];
    }
    try {
      await db.initialize();
      return await db.threatRules.toArray();
    } catch (error) {
      console.error("[rulesRepo] Failed to get all rules, switching to memory fallback:", error);
      if (memoryRules.length === 0) {
        memoryRules = getDefaultRules();
      }
      usingMemoryFallback = true;
      return [...memoryRules];
    }
  },
  async getAllRules() {
    return this.getAll();
  },
  async getActiveRules() {
    if (usingMemoryFallback) {
      console.log("[rulesRepo] Using memory fallback for active rules");
      return memoryRules.filter((rule) => rule.enabled);
    }
    try {
      await db.initialize();
      return await db.threatRules.filter((rule) => rule.enabled).toArray();
    } catch (error) {
      console.error("[rulesRepo] Failed to get active rules, switching to memory fallback:", error);
      if (memoryRules.length === 0) {
        memoryRules = getDefaultRules();
      }
      usingMemoryFallback = true;
      return memoryRules.filter((rule) => rule.enabled);
    }
  },
  async add(rule) {
    if (usingMemoryFallback) {
      const newRule = {
        ...rule,
        id: crypto.randomUUID(),
        matchCount: 0,
        lastMatchedAt: void 0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      };
      memoryRules.push(newRule);
      return newRule;
    }
    try {
      await db.initialize();
      const newRule = {
        ...rule,
        id: crypto.randomUUID(),
        matchCount: 0,
        lastMatchedAt: void 0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      };
      await db.threatRules.add(newRule);
      return newRule;
    } catch (error) {
      console.error("[rulesRepo] Failed to add rule:", error);
      if (error.name === "DexieError" || error.name === "ConstraintError" || error.name === "AbortError") {
        console.warn("[rulesRepo] Database error, switching to memory fallback for add");
        usingMemoryFallback = true;
        if (memoryRules.length === 0) {
          memoryRules = getDefaultRules();
        }
        const newRule = {
          ...rule,
          id: crypto.randomUUID(),
          matchCount: 0,
          lastMatchedAt: void 0,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        };
        memoryRules.push(newRule);
        return newRule;
      }
      throw error;
    }
  },
  async createRule(rule) {
    return this.add(rule);
  },
  async update(id, patch) {
    if (usingMemoryFallback) {
      const ruleIndex = memoryRules.findIndex((rule) => rule.id === id);
      if (ruleIndex !== -1) {
        memoryRules[ruleIndex] = { ...memoryRules[ruleIndex], ...patch };
      }
      return;
    }
    try {
      await db.initialize();
      await db.transaction("rw", db.threatRules, async () => {
        await db.threatRules.update(id, patch);
      });
    } catch (error) {
      console.error("[rulesRepo] Failed to update rule:", error);
      if (error.name === "DexieError" || error.name === "ConstraintError" || error.name === "AbortError") {
        console.warn("[rulesRepo] Database error, switching to memory fallback");
        usingMemoryFallback = true;
        if (memoryRules.length === 0) {
          memoryRules = getDefaultRules();
        }
        const ruleIndex = memoryRules.findIndex((rule) => rule.id === id);
        if (ruleIndex !== -1) {
          memoryRules[ruleIndex] = { ...memoryRules[ruleIndex], ...patch };
        }
        return;
      }
      throw error;
    }
  },
  async updateRule(id, patch) {
    return this.update(id, patch);
  },
  async remove(id) {
    try {
      await db.initialize();
      await db.threatRules.delete(id);
    } catch (error) {
      console.error("[rulesRepo] Failed to remove rule:", error);
      throw error;
    }
  },
  async deleteRule(id) {
    return this.remove(id);
  },
  // 重置为默认规则
  async resetToDefaults() {
    try {
      await db.forceReset();
      usingMemoryFallback = false;
      console.log("[rulesRepo] Database reset to defaults successfully");
    } catch (error) {
      console.error("[rulesRepo] Failed to reset database, using memory fallback:", error);
      memoryRules = getDefaultRules();
      usingMemoryFallback = true;
    }
  }
};
class ThreatDetectionEngine {
  constructor() {
    this.rules = [];
    this.isInitialized = false;
  }
  // 🚀 新增：智能检测策略判断
  getDetectionStrategy(entryCount, fileSize) {
    if (entryCount < 5e4) {
      return {
        mode: "IMPORT_TIME",
        skipImportDetection: false,
        useBasicRulesOnly: false,
        enableBackgroundDetection: false,
        description: "实时检测模式 - 导入时立即进行完整威胁检测",
        estimatedPerformanceImpact: "low"
      };
    } else if (entryCount < 2e5) {
      return {
        mode: "HYBRID",
        skipImportDetection: false,
        useBasicRulesOnly: true,
        // 导入时只用基础规则
        enableBackgroundDetection: true,
        description: "混合检测模式 - 导入时基础检测，分析时完整检测",
        estimatedPerformanceImpact: "medium"
      };
    } else {
      return {
        mode: "ANALYSIS_PAGE",
        skipImportDetection: true,
        useBasicRulesOnly: false,
        enableBackgroundDetection: true,
        description: "延迟检测模式 - 仅在分析页面进行威胁检测",
        estimatedPerformanceImpact: "high"
      };
    }
  }
  // 🚀 新增：轻量级检测（仅内置规则）
  detectThreatsLite(logContext) {
    console.log("[ThreatDetection] Using lite detection mode");
    return this.builtinDetection(logContext);
  }
  async initialize() {
    if (this.isInitialized) return;
    try {
      this.rules = await rulesRepo.getActiveRules();
      console.log(`[ThreatDetection] Loaded ${this.rules.length} active rules`);
      this.isInitialized = true;
    } catch (error) {
      console.error("[ThreatDetection] Failed to load rules:", error);
      this.rules = this.getBuiltinRules();
      this.isInitialized = true;
    }
  }
  async refreshRules() {
    try {
      this.rules = await rulesRepo.getActiveRules();
      console.log(`[ThreatDetection] Refreshed ${this.rules.length} active rules`);
    } catch (error) {
      console.error("[ThreatDetection] Failed to refresh rules:", error);
    }
  }
  detectThreats(logContext) {
    if (!this.isInitialized) {
      return this.builtinDetection(logContext);
    }
    const matchedRules = [];
    const threats = [];
    let maxThreatLevel = ThreatLevel.NORMAL;
    const sortedRules = [...this.rules].sort((a2, b2) => (b2.priority || 50) - (a2.priority || 50));
    for (const rule of sortedRules) {
      if (!rule.enabled) continue;
      try {
        const isMatch = this.evaluateRule(rule, logContext);
        if (isMatch) {
          matchedRules.push(rule);
          threats.push(rule.name);
          const ruleThreatLevel = this.mapSeverityToThreatLevel(rule.severity);
          if (this.getThreatLevelWeight(ruleThreatLevel) > this.getThreatLevelWeight(maxThreatLevel)) {
            maxThreatLevel = ruleThreatLevel;
          }
          this.updateRuleStats(rule.id);
        }
      } catch (error) {
        console.warn(`[ThreatDetection] Rule evaluation failed: ${rule.name}`, error);
      }
    }
    return {
      threatLevel: maxThreatLevel,
      threats,
      matchedRules
    };
  }
  evaluateRule(rule, logContext) {
    try {
      const regex = new RegExp(rule.pattern, "i");
      const textToMatch = this.getMatchText(logContext);
      let patternMatch = regex.test(textToMatch);
      if (rule.conditions && patternMatch) {
        patternMatch = this.evaluateConditions(rule.conditions, logContext);
      }
      return patternMatch;
    } catch (error) {
      console.warn(`[ThreatDetection] Invalid regex pattern in rule ${rule.name}:`, error);
      return false;
    }
  }
  evaluateConditions(conditions, logContext) {
    if (!conditions) return true;
    if (conditions.methods && conditions.methods.length > 0) {
      if (!conditions.methods.includes(logContext.method.toUpperCase())) {
        return false;
      }
    }
    if (conditions.statusCodes && conditions.statusCodes.length > 0) {
      if (!conditions.statusCodes.includes(logContext.statusCode)) {
        return false;
      }
    }
    if (conditions.ipWhitelist && conditions.ipWhitelist.length > 0) {
      if (conditions.ipWhitelist.includes(logContext.ip)) {
        return false;
      }
    }
    if (conditions.ipBlacklist && conditions.ipBlacklist.length > 0) {
      if (conditions.ipBlacklist.includes(logContext.ip)) {
        return true;
      }
    }
    if (conditions.timeRange) {
      const now = /* @__PURE__ */ new Date();
      const currentTime = now.getHours() * 100 + now.getMinutes();
      const [startHour, startMin] = conditions.timeRange.start.split(":").map(Number);
      const [endHour, endMin] = conditions.timeRange.end.split(":").map(Number);
      const startTime = startHour * 100 + startMin;
      const endTime = endHour * 100 + endMin;
      if (startTime <= endTime) {
        if (currentTime < startTime || currentTime > endTime) {
          return false;
        }
      } else {
        if (currentTime < startTime && currentTime > endTime) {
          return false;
        }
      }
    }
    return true;
  }
  getMatchText(logContext) {
    return [
      logContext.raw,
      logContext.uri,
      logContext.userAgent,
      logContext.referer || ""
    ].join(" ");
  }
  mapSeverityToThreatLevel(severity) {
    return severity;
  }
  getThreatLevelWeight(level) {
    const weights = {
      [ThreatLevel.NORMAL]: 0,
      [ThreatLevel.LOW]: 1,
      [ThreatLevel.MEDIUM]: 2,
      [ThreatLevel.HIGH]: 3,
      [ThreatLevel.CRITICAL]: 4
    };
    return weights[level] || 0;
  }
  async updateRuleStats(ruleId) {
    try {
      const rule = this.rules.find((r2) => r2.id === ruleId);
      if (!rule) return;
      await rulesRepo.updateRule(ruleId, {
        matchCount: (rule.matchCount || 0) + 1,
        lastMatchedAt: /* @__PURE__ */ new Date()
      });
    } catch (error) {
      if (error.name === "ConstraintError" || error.name === "AbortError") {
        return;
      }
      console.warn("[ThreatDetection] Failed to update rule stats:", error);
    }
  }
  // 内置威胁检测规则作为后备
  getBuiltinRules() {
    return [
      {
        id: "builtin-sql-injection",
        name: "SQL注入检测",
        pattern: "(union|select|insert|update|delete|drop|exec|script)",
        category: "sql_injection",
        description: "检测常见的SQL注入攻击模式",
        enabled: true,
        priority: 90,
        severity: ThreatLevel.HIGH,
        action: "log",
        matchCount: 0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        id: "builtin-xss",
        name: "XSS攻击检测",
        pattern: "(<script|javascript:|on\\w+\\s*=)",
        category: "xss",
        description: "检测跨站脚本攻击",
        enabled: true,
        priority: 90,
        severity: ThreatLevel.HIGH,
        action: "log",
        matchCount: 0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        id: "builtin-path-traversal",
        name: "路径遍历检测",
        pattern: "(\\.\\./|\\.\\.\\\\|%2e%2e%2f|%2e%2e%5c)",
        category: "path_traversal",
        description: "检测目录遍历攻击",
        enabled: true,
        priority: 80,
        severity: ThreatLevel.MEDIUM,
        action: "log",
        matchCount: 0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      }
    ];
  }
  // 后备检测方法 - 优化版，降低误报
  builtinDetection(logContext) {
    const threats = [];
    let threatLevel = ThreatLevel.NORMAL;
    const uri = logContext.uri.toLowerCase();
    const userAgent = logContext.userAgent.toLowerCase();
    if (/(union\s+select\s+.*?\s+from|union\s+all\s+select\s+.*?\s+from|'?\s*or\s*'?\s*[=<>]\s*'?|'?\s*and\s*'?\s*[=<>]\s*'?)/.test(uri)) {
      threats.push("SQL注入");
      threatLevel = ThreatLevel.HIGH;
    }
    if (/(<script[^>]*>|javascript:[^\s]*|vbscript:[^\s]*|on(load|error|click|mouse|key)\s*=|alert\s*\(|document\.cookie|eval\s*\()/.test(uri)) {
      threats.push("XSS攻击");
      threatLevel = ThreatLevel.HIGH;
    }
    if (/(\.\.\/.*?\.\.\/|\.\.%2f.*?\.\.%2f|%2e%2e%2f.*?%2e%2e%2f)/.test(uri)) {
      threats.push("路径遍历");
      threatLevel = ThreatLevel.MEDIUM;
    }
    if (/\b(sqlmap|nikto|nmap|dirb|gobuster|wpscan|burpsuite|metasploit|acunetix|nessus|openvas)\b/.test(userAgent)) {
      threats.push("扫描工具");
      if (threatLevel === ThreatLevel.NORMAL) {
        threatLevel = ThreatLevel.LOW;
      }
    }
    return {
      threatLevel,
      threats,
      matchedRules: []
    };
  }
  // 获取当前加载的规则
  getRules() {
    return [...this.rules];
  }
  // 获取规则统计信息
  getRuleStats() {
    const total = this.rules.length;
    const enabled = this.rules.filter((r2) => r2.enabled).length;
    const disabled = total - enabled;
    return { total, enabled, disabled };
  }
}
const threatDetectionEngine = new ThreatDetectionEngine();
const app = createApp(_sfc_main);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: index,
    options: {
      prefix: "p",
      darkModeSelector: ".dark"
    }
  }
});
const themeStore = useThemeStore(pinia);
themeStore.initTheme();
app.config.errorHandler = (err, instance, info) => {
  console.error("[App] Global error:", err);
  console.error("[App] Component instance:", instance);
  console.error("[App] Error info:", info);
  if (err && typeof err === "object" && ("message" in err && typeof err.message === "string" && (err.message.includes("Internal error") || err.message.includes("UNKNOWN_ERROR") || err.message.includes("操作失败，请稍后重试")) || "name" in err && (err.name === "InternalError" || err.name === "UNKNOWN_ERROR"))) {
    console.warn("[App] Suppressing internal error from user display");
    return;
  }
};
window.addEventListener("unhandledrejection", (event) => {
  console.error("[App] Unhandled promise rejection:", event.reason);
  event.preventDefault();
});
threatDetectionEngine.initialize().then(() => {
  console.log("[App] Threat detection engine initialized");
}).catch((error) => {
  console.error("[App] Failed to initialize threat detection engine:", error);
});
app.mount("#app");
export {
  watchEffect as $,
  detectDataMode as A,
  watch as B,
  reactive as C,
  withKeys as D,
  withDirectives as E,
  Fragment as F,
  vModelCheckbox as G,
  vModelText as H,
  vModelSelect as I,
  onBeforeUnmount as J,
  nextTick as K,
  LogFormat as L,
  resolveComponent as M,
  rulesRepo as N,
  __vitePreload as O,
  threatDetectionEngine as P,
  vShow as Q,
  vModelRadio as R,
  forceLocalMode as S,
  ThreatLevel as T,
  Transition as U,
  h$4 as V,
  shallowRef as W,
  inject as X,
  toRefs as Y,
  getCurrentInstance as Z,
  _export_sfc as _,
  createElementBlock as a,
  isRef as a0,
  Teleport as a1,
  isIndexedDBMode as a2,
  defineStore as a3,
  Dexie as a4,
  renderSlot as a5,
  createStaticVNode as b,
  computed as c,
  defineComponent as d,
  createBaseVNode as e,
  createCommentVNode as f,
  createTextVNode as g,
  onMounted as h,
  onUnmounted as i,
  createBlock as j,
  createVNode as k,
  useThemeStore as l,
  ref as m,
  normalizeClass as n,
  openBlock as o,
  unref as p,
  normalizeStyle as q,
  renderList as r,
  useRouter as s,
  toDisplayString as t,
  useAppStore as u,
  withModifiers as v,
  withCtx as w,
  getCurrentDataMode as x,
  removeDataModeListener as y,
  addDataModeListener as z
};
