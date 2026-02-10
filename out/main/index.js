"use strict";
const electron = require("electron");
const path = require("path");
const utils$2 = require("@electron-toolkit/utils");
const require$$0$2 = require("assert");
const require$$0 = require("net");
const require$$0$1 = require("fs");
const require$$1 = require("util");
const icon = path.join(__dirname, "../../resources/icon.png");
var lib$1 = {};
var lib = {};
var decoder = {};
var utils$1 = {};
var hasRequiredUtils$1;
function requireUtils$1() {
  if (hasRequiredUtils$1) return utils$1;
  hasRequiredUtils$1 = 1;
  Object.defineProperty(utils$1, "__esModule", { value: true });
  const legacyErrorMessage = `Maxmind v2 module has changed API.
Upgrade instructions can be found here: https://github.com/runk/node-maxmind/wiki/Migration-guide
If you want to use legacy library then explicitly install maxmind@1`;
  const assert = (condition, message) => {
    if (!condition) {
      throw new Error(message);
    }
  };
  utils$1.default = {
    assert,
    legacyErrorMessage
  };
  return utils$1;
}
var hasRequiredDecoder;
function requireDecoder() {
  if (hasRequiredDecoder) return decoder;
  hasRequiredDecoder = 1;
  var __importDefault = decoder && decoder.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(decoder, "__esModule", { value: true });
  const utils_1 = __importDefault(requireUtils$1());
  utils_1.default.assert(typeof BigInt !== "undefined", "Apparently you are using old version of node. Please upgrade to node 10.4.x or above.");
  const MAX_INT_32 = 2147483647;
  var DataType;
  (function(DataType2) {
    DataType2[DataType2["Extended"] = 0] = "Extended";
    DataType2[DataType2["Pointer"] = 1] = "Pointer";
    DataType2[DataType2["Utf8String"] = 2] = "Utf8String";
    DataType2[DataType2["Double"] = 3] = "Double";
    DataType2[DataType2["Bytes"] = 4] = "Bytes";
    DataType2[DataType2["Uint16"] = 5] = "Uint16";
    DataType2[DataType2["Uint32"] = 6] = "Uint32";
    DataType2[DataType2["Map"] = 7] = "Map";
    DataType2[DataType2["Int32"] = 8] = "Int32";
    DataType2[DataType2["Uint64"] = 9] = "Uint64";
    DataType2[DataType2["Uint128"] = 10] = "Uint128";
    DataType2[DataType2["Array"] = 11] = "Array";
    DataType2[DataType2["Container"] = 12] = "Container";
    DataType2[DataType2["EndMarker"] = 13] = "EndMarker";
    DataType2[DataType2["Boolean"] = 14] = "Boolean";
    DataType2[DataType2["Float"] = 15] = "Float";
  })(DataType || (DataType = {}));
  const pointerValueOffset = [0, 2048, 526336, 0];
  const noCache = {
    get: () => void 0,
    set: () => void 0
  };
  const cursor = (value, offset) => ({ value, offset });
  class Decoder {
    constructor(db, baseOffset = 0, cache = noCache) {
      this.telemetry = {};
      utils_1.default.assert(Boolean(db), "Database buffer is required");
      this.db = db;
      this.baseOffset = baseOffset;
      this.cache = cache;
    }
    decode(offset) {
      let tmp;
      const ctrlByte = this.db[offset++];
      let type = ctrlByte >> 5;
      if (type === DataType.Pointer) {
        tmp = this.decodePointer(ctrlByte, offset);
        return cursor(this.decodeFast(tmp.value).value, tmp.offset);
      }
      if (type === DataType.Extended) {
        tmp = this.db[offset] + 7;
        if (tmp < 8) {
          throw new Error("Invalid Extended Type at offset " + offset + " val " + tmp);
        }
        type = tmp;
        offset++;
      }
      const size = this.sizeFromCtrlByte(ctrlByte, offset);
      return this.decodeByType(type, size.offset, size.value);
    }
    decodeFast(offset) {
      const cached = this.cache.get(offset);
      if (cached) {
        return cached;
      }
      const result = this.decode(offset);
      this.cache.set(offset, result);
      return result;
    }
    decodeByType(type, offset, size) {
      const newOffset = offset + size;
      switch (type) {
        case DataType.Utf8String:
          return cursor(this.decodeString(offset, size), newOffset);
        case DataType.Map:
          return this.decodeMap(size, offset);
        case DataType.Uint32:
          return cursor(this.decodeUint(offset, size), newOffset);
        case DataType.Double:
          return cursor(this.decodeDouble(offset), newOffset);
        case DataType.Array:
          return this.decodeArray(size, offset);
        case DataType.Boolean:
          return cursor(this.decodeBoolean(size), offset);
        case DataType.Float:
          return cursor(this.decodeFloat(offset), newOffset);
        case DataType.Bytes:
          return cursor(this.decodeBytes(offset, size), newOffset);
        case DataType.Uint16:
          return cursor(this.decodeUint(offset, size), newOffset);
        case DataType.Int32:
          return cursor(this.decodeInt32(offset, size), newOffset);
        case DataType.Uint64:
          return cursor(this.decodeBigUint(offset, size), newOffset);
        case DataType.Uint128:
          return cursor(this.decodeBigUint(offset, size), newOffset);
      }
      throw new Error("Unknown type " + type + " at offset " + offset);
    }
    sizeFromCtrlByte(ctrlByte, offset) {
      const size = ctrlByte & 31;
      if (size < 29) {
        return cursor(size, offset);
      }
      if (size === 29) {
        return cursor(29 + this.db[offset], offset + 1);
      }
      if (size === 30) {
        return cursor(285 + this.db.readUInt16BE(offset), offset + 2);
      }
      return cursor(65821 + this.db.readUIntBE(offset, 3), offset + 3);
    }
    decodeBytes(offset, size) {
      return this.db.subarray(offset, offset + size);
    }
    decodePointer(ctrlByte, offset) {
      const pointerSize = ctrlByte >> 3 & 3;
      const pointer = this.baseOffset + pointerValueOffset[pointerSize];
      let packed = 0;
      if (pointerSize === 0) {
        packed = (ctrlByte & 7) << 8 | this.db[offset];
      } else if (pointerSize === 1) {
        packed = (ctrlByte & 7) << 16 | this.db.readUInt16BE(offset);
      } else if (pointerSize === 2) {
        packed = (ctrlByte & 7) << 24 | this.db.readUIntBE(offset, 3);
      } else {
        packed = this.db.readUInt32BE(offset);
      }
      offset += pointerSize + 1;
      return cursor(pointer + packed, offset);
    }
    decodeArray(size, offset) {
      let tmp;
      const array = new Array(size);
      for (let i = 0; i < size; i++) {
        tmp = this.decode(offset);
        offset = tmp.offset;
        array[i] = tmp.value;
      }
      return cursor(array, offset);
    }
    decodeBoolean(size) {
      return size !== 0;
    }
    decodeDouble(offset) {
      return this.db.readDoubleBE(offset);
    }
    decodeFloat(offset) {
      return this.db.readFloatBE(offset);
    }
    decodeMap(size, offset) {
      let tmp;
      let key;
      const map = {};
      for (let i = 0; i < size; i++) {
        tmp = this.decode(offset);
        key = tmp.value;
        tmp = this.decode(tmp.offset);
        offset = tmp.offset;
        map[key] = tmp.value;
      }
      return cursor(map, offset);
    }
    decodeInt32(offset, size) {
      if (size === 0) {
        return 0;
      }
      if (size < 4) {
        return this.db.readUIntBE(offset, size);
      }
      return this.db.readInt32BE(offset);
    }
    decodeUint(offset, size) {
      if (size === 0) {
        return 0;
      }
      if (size <= 4) {
        return this.db.readUIntBE(offset, size);
      }
      throw new Error(`Invalid size for unsigned integer: ${size}`);
    }
    decodeString(offset, size) {
      const newOffset = offset + size;
      return newOffset >= MAX_INT_32 ? this.db.subarray(offset, newOffset).toString("utf8") : this.db.toString("utf8", offset, newOffset);
    }
    decodeBigUint(offset, size) {
      if (size > 16) {
        throw new Error(`Invalid size for big unsigned integer: ${size}`);
      }
      let integer = 0n;
      for (let i = 0; i < size; i++) {
        integer <<= 8n;
        integer |= BigInt(this.db.readUInt8(offset + i));
      }
      return integer;
    }
  }
  decoder.default = Decoder;
  return decoder;
}
var ip$1 = {};
var hasRequiredIp$1;
function requireIp$1() {
  if (hasRequiredIp$1) return ip$1;
  hasRequiredIp$1 = 1;
  var __importDefault = ip$1 && ip$1.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(ip$1, "__esModule", { value: true });
  const net_1 = __importDefault(require$$0);
  const parseIPv4 = (input) => {
    const ip2 = input.split(".", 4);
    const o0 = parseInt(ip2[0]);
    const o1 = parseInt(ip2[1]);
    const o2 = parseInt(ip2[2]);
    const o3 = parseInt(ip2[3]);
    return [o0, o1, o2, o3];
  };
  const hex = (v) => {
    const h = parseInt(v, 10).toString(16);
    return h.length === 2 ? h : "0" + h;
  };
  const parseIPv6 = (input) => {
    const addr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let i;
    let parsed;
    let chunk;
    const ip2 = input.indexOf(".") > -1 ? input.replace(/(\d+)\.(\d+)\.(\d+)\.(\d+)/, (match, a, b, c, d) => {
      return hex(a) + hex(b) + ":" + hex(c) + hex(d);
    }) : input;
    const [left, right] = ip2.split("::", 2);
    if (left) {
      parsed = left.split(":");
      for (i = 0; i < parsed.length; i++) {
        chunk = parseInt(parsed[i], 16);
        addr[i * 2] = chunk >> 8;
        addr[i * 2 + 1] = chunk & 255;
      }
    }
    if (right) {
      parsed = right.split(":");
      const offset = 16 - parsed.length * 2;
      for (i = 0; i < parsed.length; i++) {
        chunk = parseInt(parsed[i], 16);
        addr[offset + i * 2] = chunk >> 8;
        addr[offset + (i * 2 + 1)] = chunk & 255;
      }
    }
    return addr;
  };
  const parse = (ip2) => {
    return ip2.indexOf(":") === -1 ? parseIPv4(ip2) : parseIPv6(ip2);
  };
  const bitAt = (rawAddress, idx) => {
    const bufIdx = idx >> 3;
    const bitIdx = 7 ^ idx & 7;
    return rawAddress[bufIdx] >>> bitIdx & 1;
  };
  const validate = (ip2) => {
    const version = net_1.default.isIP(ip2);
    return version === 4 || version === 6;
  };
  ip$1.default = {
    bitAt,
    parse,
    validate
  };
  return ip$1;
}
var metadata = {};
var hasRequiredMetadata;
function requireMetadata() {
  if (hasRequiredMetadata) return metadata;
  hasRequiredMetadata = 1;
  (function(exports) {
    var __importDefault = metadata && metadata.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isLegacyFormat = exports.parseMetadata = void 0;
    const decoder_1 = __importDefault(requireDecoder());
    const utils_1 = __importDefault(requireUtils$1());
    const METADATA_START_MARKER = Buffer.from("ABCDEF4D61784D696E642E636F6D", "hex");
    const parseMetadata = (db) => {
      const offset = findStart(db);
      const decoder2 = new decoder_1.default(db, offset);
      const metadata2 = decoder2.decode(offset).value;
      if (!metadata2) {
        throw new Error((0, exports.isLegacyFormat)(db) ? utils_1.default.legacyErrorMessage : "Cannot parse binary database");
      }
      utils_1.default.assert([24, 28, 32].indexOf(metadata2.record_size) > -1, "Unsupported record size");
      return {
        binaryFormatMajorVersion: metadata2.binary_format_major_version,
        binaryFormatMinorVersion: metadata2.binary_format_minor_version,
        buildEpoch: new Date(Number(metadata2.build_epoch) * 1e3),
        databaseType: metadata2.database_type,
        description: metadata2.description,
        ipVersion: metadata2.ip_version,
        languages: metadata2.languages,
        nodeByteSize: metadata2.record_size / 4,
        nodeCount: metadata2.node_count,
        recordSize: metadata2.record_size,
        searchTreeSize: metadata2.node_count * metadata2.record_size / 4,
        // Depth depends on the IP version, it's 32 for IPv4 and 128 for IPv6.
        treeDepth: Math.pow(2, metadata2.ip_version + 1)
      };
    };
    exports.parseMetadata = parseMetadata;
    const findStart = (db) => {
      let found = 0;
      let fsize = db.length - 1;
      const mlen = METADATA_START_MARKER.length - 1;
      while (found <= mlen && fsize-- > 0) {
        found += db[fsize] === METADATA_START_MARKER[mlen - found] ? 1 : -found;
      }
      return fsize + found;
    };
    const isLegacyFormat = (db) => {
      const structureInfoMaxSize = 20;
      for (let i = 0; i < structureInfoMaxSize; i++) {
        const delim = db.slice(db.length - 3 - i, db.length - i);
        if (delim[0] === 255 && delim[1] === 255 && delim[2] === 255) {
          return true;
        }
      }
      return false;
    };
    exports.isLegacyFormat = isLegacyFormat;
  })(metadata);
  return metadata;
}
var walker = {};
var hasRequiredWalker;
function requireWalker() {
  if (hasRequiredWalker) return walker;
  hasRequiredWalker = 1;
  Object.defineProperty(walker, "__esModule", { value: true });
  const readNodeRight24 = (db) => (offset) => db.readUIntBE(offset + 3, 3);
  const readNodeLeft24 = (db) => (offset) => db.readUIntBE(offset, 3);
  const readNodeLeft28 = (db) => (offset) => (db[offset + 3] & 240) << 20 | db.readUIntBE(offset, 3);
  const readNodeRight28 = (db) => (offset) => (db[offset + 3] & 15) << 24 | db.readUIntBE(offset + 4, 3);
  const readNodeLeft32 = (db) => (offset) => db.readUInt32BE(offset);
  const readNodeRight32 = (db) => (offset) => db.readUInt32BE(offset + 4);
  walker.default = (db, recordSize) => {
    switch (recordSize) {
      case 24:
        return { left: readNodeLeft24(db), right: readNodeRight24(db) };
      case 28:
        return { left: readNodeLeft28(db), right: readNodeRight28(db) };
      case 32:
        return { left: readNodeLeft32(db), right: readNodeRight32(db) };
    }
    throw new Error("Unsupported record size");
  };
  return walker;
}
var response = {};
var hasRequiredResponse;
function requireResponse() {
  if (hasRequiredResponse) return response;
  hasRequiredResponse = 1;
  Object.defineProperty(response, "__esModule", { value: true });
  return response;
}
var hasRequiredLib$1;
function requireLib$1() {
  if (hasRequiredLib$1) return lib;
  hasRequiredLib$1 = 1;
  (function(exports) {
    var __createBinding = lib && lib.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = lib && lib.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    var __importDefault = lib && lib.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Reader = void 0;
    const decoder_1 = __importDefault(requireDecoder());
    const ip_1 = __importDefault(requireIp$1());
    const metadata_1 = requireMetadata();
    const walker_1 = __importDefault(requireWalker());
    const DATA_SECTION_SEPARATOR_SIZE = 16;
    class Reader {
      constructor(db, opts = {}) {
        this.opts = opts;
        this.load(db);
      }
      load(db) {
        if (!Buffer.isBuffer(db)) {
          throw new Error(`mmdb-lib expects an instance of Buffer, got: ${typeof db}`);
        }
        this.db = db;
        this.metadata = (0, metadata_1.parseMetadata)(this.db);
        this.decoder = new decoder_1.default(this.db, this.metadata.searchTreeSize + DATA_SECTION_SEPARATOR_SIZE, this.opts.cache);
        this.walker = (0, walker_1.default)(this.db, this.metadata.recordSize);
        this.ipv4StartNodeNumber = this.ipv4Start();
      }
      get(ipAddress) {
        const [data] = this.getWithPrefixLength(ipAddress);
        return data;
      }
      getWithPrefixLength(ipAddress) {
        const [pointer, prefixLength] = this.findAddressInTree(ipAddress);
        const data = pointer ? this.resolveDataPointer(pointer) : null;
        return [data, prefixLength];
      }
      findAddressInTree(ipAddress) {
        const rawAddress = ip_1.default.parse(ipAddress);
        const nodeCount = this.metadata.nodeCount;
        const bitLength = rawAddress.length * 8;
        let bit;
        let nodeNumber = 0;
        let offset;
        let depth = 0;
        if (rawAddress.length === 4) {
          nodeNumber = this.ipv4StartNodeNumber;
        }
        for (; depth < bitLength && nodeNumber < nodeCount; depth++) {
          bit = ip_1.default.bitAt(rawAddress, depth);
          offset = nodeNumber * this.metadata.nodeByteSize;
          nodeNumber = bit ? this.walker.right(offset) : this.walker.left(offset);
        }
        if (nodeNumber > nodeCount) {
          return [nodeNumber, depth];
        }
        return [null, depth];
      }
      resolveDataPointer(pointer) {
        const resolved = pointer - this.metadata.nodeCount + this.metadata.searchTreeSize;
        return this.decoder.decodeFast(resolved).value;
      }
      ipv4Start() {
        if (this.metadata.ipVersion === 4) {
          return 0;
        }
        const nodeCount = this.metadata.nodeCount;
        let pointer = 0;
        let i = 0;
        for (; i < 96 && pointer < nodeCount; i++) {
          const offset = pointer * this.metadata.nodeByteSize;
          pointer = this.walker.left(offset);
        }
        return pointer;
      }
    }
    exports.Reader = Reader;
    __exportStar(requireResponse(), exports);
  })(lib);
  return lib;
}
var tinyLru = {};
/**
 * tiny-lru
 *
 * @copyright 2025 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 11.3.4
 */
var hasRequiredTinyLru;
function requireTinyLru() {
  if (hasRequiredTinyLru) return tinyLru;
  hasRequiredTinyLru = 1;
  class LRU {
    /**
     * Creates a new LRU cache instance.
     *
     * @constructor
     * @param {number} [max=0] - Maximum number of items to store. 0 means unlimited.
     * @param {number} [ttl=0] - Time to live in milliseconds. 0 means no expiration.
     * @param {boolean} [resetTtl=false] - Whether to reset TTL when accessing existing items.
     * @throws {TypeError} When parameters are of invalid type.
     * @example
     * const cache = new LRU(1000, 60000, true); // 1000 items, 1 minute TTL, reset on access
     * @since 1.0.0
     */
    constructor(max = 0, ttl = 0, resetTtl = false) {
      this.first = null;
      this.items = /* @__PURE__ */ Object.create(null);
      this.last = null;
      this.max = max;
      this.resetTtl = resetTtl;
      this.size = 0;
      this.ttl = ttl;
    }
    /**
     * Removes all items from the cache.
     *
     * @method clear
     * @memberof LRU
     * @returns {LRU} The LRU instance for method chaining.
     * @example
     * cache.clear();
     * console.log(cache.size); // 0
     * @since 1.0.0
     */
    clear() {
      this.first = null;
      this.items = /* @__PURE__ */ Object.create(null);
      this.last = null;
      this.size = 0;
      return this;
    }
    /**
     * Removes an item from the cache by key.
     *
     * @method delete
     * @memberof LRU
     * @param {string} key - The key of the item to delete.
     * @returns {LRU} The LRU instance for method chaining.
     * @example
     * cache.set('key1', 'value1');
     * cache.delete('key1');
     * console.log(cache.has('key1')); // false
     * @see {@link LRU#has}
     * @see {@link LRU#clear}
     * @since 1.0.0
     */
    delete(key) {
      if (this.has(key)) {
        const item = this.items[key];
        delete this.items[key];
        this.size--;
        if (item.prev !== null) {
          item.prev.next = item.next;
        }
        if (item.next !== null) {
          item.next.prev = item.prev;
        }
        if (this.first === item) {
          this.first = item.next;
        }
        if (this.last === item) {
          this.last = item.prev;
        }
      }
      return this;
    }
    /**
     * Returns an array of [key, value] pairs for the specified keys.
     *
     * @method entries
     * @memberof LRU
     * @param {string[]} [keys=this.keys()] - Array of keys to get entries for. Defaults to all keys.
     * @returns {Array<Array<*>>} Array of [key, value] pairs.
     * @example
     * cache.set('a', 1).set('b', 2);
     * console.log(cache.entries()); // [['a', 1], ['b', 2]]
     * console.log(cache.entries(['a'])); // [['a', 1]]
     * @see {@link LRU#keys}
     * @see {@link LRU#values}
     * @since 11.1.0
     */
    entries(keys = this.keys()) {
      return keys.map((key) => [key, this.get(key)]);
    }
    /**
     * Removes the least recently used item from the cache.
     *
     * @method evict
     * @memberof LRU
     * @param {boolean} [bypass=false] - Whether to bypass the size check and force eviction.
     * @returns {LRU} The LRU instance for method chaining.
     * @example
     * cache.set('old', 'value').set('new', 'value');
     * cache.evict(); // Removes 'old' item
     * @see {@link LRU#setWithEvicted}
     * @since 1.0.0
     */
    evict(bypass = false) {
      if (bypass || this.size > 0) {
        const item = this.first;
        delete this.items[item.key];
        if (--this.size === 0) {
          this.first = null;
          this.last = null;
        } else {
          this.first = item.next;
          this.first.prev = null;
        }
      }
      return this;
    }
    /**
     * Returns the expiration timestamp for a given key.
     *
     * @method expiresAt
     * @memberof LRU
     * @param {string} key - The key to check expiration for.
     * @returns {number|undefined} The expiration timestamp in milliseconds, or undefined if key doesn't exist.
     * @example
     * const cache = new LRU(100, 5000); // 5 second TTL
     * cache.set('key1', 'value1');
     * console.log(cache.expiresAt('key1')); // timestamp 5 seconds from now
     * @see {@link LRU#get}
     * @see {@link LRU#has}
     * @since 1.0.0
     */
    expiresAt(key) {
      let result;
      if (this.has(key)) {
        result = this.items[key].expiry;
      }
      return result;
    }
    /**
     * Retrieves a value from the cache by key. Updates the item's position to most recently used.
     *
     * @method get
     * @memberof LRU
     * @param {string} key - The key to retrieve.
     * @returns {*} The value associated with the key, or undefined if not found or expired.
     * @example
     * cache.set('key1', 'value1');
     * console.log(cache.get('key1')); // 'value1'
     * console.log(cache.get('nonexistent')); // undefined
     * @see {@link LRU#set}
     * @see {@link LRU#has}
     * @since 1.0.0
     */
    get(key) {
      let result;
      if (this.has(key)) {
        const item = this.items[key];
        if (this.ttl > 0 && item.expiry <= Date.now()) {
          this.delete(key);
        } else {
          result = item.value;
          this.set(key, result, true);
        }
      }
      return result;
    }
    /**
     * Checks if a key exists in the cache.
     *
     * @method has
     * @memberof LRU
     * @param {string} key - The key to check for.
     * @returns {boolean} True if the key exists, false otherwise.
     * @example
     * cache.set('key1', 'value1');
     * console.log(cache.has('key1')); // true
     * console.log(cache.has('nonexistent')); // false
     * @see {@link LRU#get}
     * @see {@link LRU#delete}
     * @since 9.0.0
     */
    has(key) {
      return key in this.items;
    }
    /**
     * Returns an array of all keys in the cache, ordered from least to most recently used.
     *
     * @method keys
     * @memberof LRU
     * @returns {string[]} Array of keys in LRU order.
     * @example
     * cache.set('a', 1).set('b', 2);
     * cache.get('a'); // Move 'a' to most recent
     * console.log(cache.keys()); // ['b', 'a']
     * @see {@link LRU#values}
     * @see {@link LRU#entries}
     * @since 9.0.0
     */
    keys() {
      const result = [];
      let x = this.first;
      while (x !== null) {
        result.push(x.key);
        x = x.next;
      }
      return result;
    }
    /**
     * Sets a value in the cache and returns any evicted item.
     *
     * @method setWithEvicted
     * @memberof LRU
     * @param {string} key - The key to set.
     * @param {*} value - The value to store.
     * @param {boolean} [resetTtl=this.resetTtl] - Whether to reset the TTL for this operation.
     * @returns {Object|null} The evicted item (if any) with shape {key, value, expiry, prev, next}, or null.
     * @example
     * const cache = new LRU(2);
     * cache.set('a', 1).set('b', 2);
     * const evicted = cache.setWithEvicted('c', 3); // evicted = {key: 'a', value: 1, ...}
     * @see {@link LRU#set}
     * @see {@link LRU#evict}
     * @since 11.3.0
     */
    setWithEvicted(key, value, resetTtl = this.resetTtl) {
      let evicted = null;
      if (this.has(key)) {
        this.set(key, value, true, resetTtl);
      } else {
        if (this.max > 0 && this.size === this.max) {
          evicted = { ...this.first };
          this.evict(true);
        }
        let item = this.items[key] = {
          expiry: this.ttl > 0 ? Date.now() + this.ttl : this.ttl,
          key,
          prev: this.last,
          next: null,
          value
        };
        if (++this.size === 1) {
          this.first = item;
        } else {
          this.last.next = item;
        }
        this.last = item;
      }
      return evicted;
    }
    /**
     * Sets a value in the cache. Updates the item's position to most recently used.
     *
     * @method set
     * @memberof LRU
     * @param {string} key - The key to set.
     * @param {*} value - The value to store.
     * @param {boolean} [bypass=false] - Whether to bypass normal LRU positioning (internal use).
     * @param {boolean} [resetTtl=this.resetTtl] - Whether to reset the TTL for this operation.
     * @returns {LRU} The LRU instance for method chaining.
     * @example
     * cache.set('key1', 'value1')
     *      .set('key2', 'value2')
     *      .set('key3', 'value3');
     * @see {@link LRU#get}
     * @see {@link LRU#setWithEvicted}
     * @since 1.0.0
     */
    set(key, value, bypass = false, resetTtl = this.resetTtl) {
      let item;
      if (bypass || this.has(key)) {
        item = this.items[key];
        item.value = value;
        if (bypass === false && resetTtl) {
          item.expiry = this.ttl > 0 ? Date.now() + this.ttl : this.ttl;
        }
        if (this.last !== item) {
          const last = this.last, next = item.next, prev = item.prev;
          if (this.first === item) {
            this.first = item.next;
          }
          item.next = null;
          item.prev = this.last;
          last.next = item;
          if (prev !== null) {
            prev.next = next;
          }
          if (next !== null) {
            next.prev = prev;
          }
        }
      } else {
        if (this.max > 0 && this.size === this.max) {
          this.evict(true);
        }
        item = this.items[key] = {
          expiry: this.ttl > 0 ? Date.now() + this.ttl : this.ttl,
          key,
          prev: this.last,
          next: null,
          value
        };
        if (++this.size === 1) {
          this.first = item;
        } else {
          this.last.next = item;
        }
      }
      this.last = item;
      return this;
    }
    /**
     * Returns an array of all values in the cache for the specified keys.
     *
     * @method values
     * @memberof LRU
     * @param {string[]} [keys=this.keys()] - Array of keys to get values for. Defaults to all keys.
     * @returns {Array<*>} Array of values corresponding to the keys.
     * @example
     * cache.set('a', 1).set('b', 2);
     * console.log(cache.values()); // [1, 2]
     * console.log(cache.values(['a'])); // [1]
     * @see {@link LRU#keys}
     * @see {@link LRU#entries}
     * @since 11.1.0
     */
    values(keys = this.keys()) {
      return keys.map((key) => this.get(key));
    }
  }
  function lru(max = 1e3, ttl = 0, resetTtl = false) {
    if (isNaN(max) || max < 0) {
      throw new TypeError("Invalid max value");
    }
    if (isNaN(ttl) || ttl < 0) {
      throw new TypeError("Invalid ttl value");
    }
    if (typeof resetTtl !== "boolean") {
      throw new TypeError("Invalid resetTtl value");
    }
    return new LRU(max, ttl, resetTtl);
  }
  tinyLru.LRU = LRU;
  tinyLru.lru = lru;
  return tinyLru;
}
var fs = {};
var hasRequiredFs;
function requireFs() {
  if (hasRequiredFs) return fs;
  hasRequiredFs = 1;
  var __importDefault = fs && fs.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(fs, "__esModule", { value: true });
  const fs_1 = __importDefault(require$$0$1);
  const util_1 = __importDefault(require$$1);
  fs.default = {
    existsSync: fs_1.default.existsSync,
    readFile: util_1.default.promisify(fs_1.default.readFile),
    watchFile: fs_1.default.watchFile,
    createReadStream: fs_1.default.createReadStream,
    stat: util_1.default.promisify(fs_1.default.stat)
  };
  return fs;
}
var ip = {};
var hasRequiredIp;
function requireIp() {
  if (hasRequiredIp) return ip;
  hasRequiredIp = 1;
  var __importDefault = ip && ip.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(ip, "__esModule", { value: true });
  const net_1 = __importDefault(require$$0);
  const parseIPv4 = (input) => {
    const ip2 = input.split(".", 4);
    const o0 = parseInt(ip2[0]);
    const o1 = parseInt(ip2[1]);
    const o2 = parseInt(ip2[2]);
    const o3 = parseInt(ip2[3]);
    return [o0, o1, o2, o3];
  };
  const hex = (v) => {
    v = parseInt(v, 10).toString(16);
    return v.length === 2 ? v : "0" + v;
  };
  const parseIPv6 = (ip2) => {
    const addr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let i;
    let parsed;
    let chunk;
    if (ip2.indexOf(".") > -1) {
      ip2 = ip2.replace(/(\d+)\.(\d+)\.(\d+)\.(\d+)/, (match, a, b, c, d) => {
        return hex(a) + hex(b) + ":" + hex(c) + hex(d);
      });
    }
    const [left, right] = ip2.split("::", 2);
    if (left) {
      parsed = left.split(":");
      for (i = 0; i < parsed.length; i++) {
        chunk = parseInt(parsed[i], 16);
        addr[i * 2] = chunk >> 8;
        addr[i * 2 + 1] = chunk & 255;
      }
    }
    if (right) {
      parsed = right.split(":");
      const offset = 16 - parsed.length * 2;
      for (i = 0; i < parsed.length; i++) {
        chunk = parseInt(parsed[i], 16);
        addr[offset + i * 2] = chunk >> 8;
        addr[offset + (i * 2 + 1)] = chunk & 255;
      }
    }
    return addr;
  };
  const parse = (ip2) => {
    return ip2.indexOf(":") === -1 ? parseIPv4(ip2) : parseIPv6(ip2);
  };
  const bitAt = (rawAddress, idx) => {
    const bufIdx = idx >> 3;
    const bitIdx = 7 ^ idx & 7;
    return rawAddress[bufIdx] >>> bitIdx & 1;
  };
  const validate = (ip2) => {
    const version = net_1.default.isIP(ip2);
    return version === 4 || version === 6;
  };
  ip.default = {
    bitAt,
    parse,
    validate
  };
  return ip;
}
var isGzip = {};
var hasRequiredIsGzip;
function requireIsGzip() {
  if (hasRequiredIsGzip) return isGzip;
  hasRequiredIsGzip = 1;
  Object.defineProperty(isGzip, "__esModule", { value: true });
  isGzip.default = (buf) => {
    if (!buf || buf.length < 3) {
      return false;
    }
    return buf[0] === 31 && buf[1] === 139 && buf[2] === 8;
  };
  return isGzip;
}
var utils = {};
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  Object.defineProperty(utils, "__esModule", { value: true });
  const concat2 = (a, b) => {
    return a << 8 | b;
  };
  const concat3 = (a, b, c) => {
    return a << 16 | b << 8 | c;
  };
  const concat4 = (a, b, c, d) => {
    return a << 24 | b << 16 | c << 8 | d;
  };
  const legacyErrorMessage = `Maxmind v2 module has changed API.
Upgrade instructions can be found here: https://github.com/runk/node-maxmind/wiki/Migration-guide
If you want to use legacy libary then explicitly install maxmind@1`;
  utils.default = {
    concat2,
    concat3,
    concat4,
    legacyErrorMessage
  };
  return utils;
}
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib$1;
  hasRequiredLib = 1;
  (function(exports) {
    var __createBinding = lib$1 && lib$1.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = lib$1 && lib$1.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    var __importDefault = lib$1 && lib$1.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Reader = exports.validate = exports.init = exports.openSync = exports.open = void 0;
    const assert_1 = __importDefault(require$$0$2);
    const mmdb_lib_1 = requireLib$1();
    Object.defineProperty(exports, "Reader", { enumerable: true, get: function() {
      return mmdb_lib_1.Reader;
    } });
    const tiny_lru_1 = requireTinyLru();
    const fs_1 = __importDefault(requireFs());
    const ip_1 = __importDefault(requireIp());
    const is_gzip_1 = __importDefault(requireIsGzip());
    const utils_1 = __importDefault(requireUtils());
    const LARGE_FILE_THRESHOLD = 512 * 1024 * 1024;
    const STREAM_WATERMARK = 8 * 1024 * 1024;
    const readLargeFile = async (filepath, size) => new Promise((resolve, reject) => {
      let buffer = Buffer.allocUnsafe(size);
      let offset = 0;
      const stream = fs_1.default.createReadStream(filepath, {
        highWaterMark: STREAM_WATERMARK
      });
      stream.on("data", (chunk) => {
        if (Buffer.isBuffer(chunk)) {
          chunk.copy(buffer, offset);
          offset += chunk.length;
        } else {
          const bufferChunk = Buffer.from(chunk);
          bufferChunk.copy(buffer, offset);
          offset += bufferChunk.length;
        }
      });
      stream.on("end", () => {
        stream.close();
        resolve(buffer);
      });
      stream.on("error", (err) => {
        reject(err);
      });
    });
    const readFile = async (filepath) => {
      const fstat = await fs_1.default.stat(filepath);
      return fstat.size < LARGE_FILE_THRESHOLD ? fs_1.default.readFile(filepath) : readLargeFile(filepath, fstat.size);
    };
    const open = async (filepath, opts, cb) => {
      (0, assert_1.default)(!cb, utils_1.default.legacyErrorMessage);
      const database = await readFile(filepath);
      if ((0, is_gzip_1.default)(database)) {
        throw new Error("Looks like you are passing in a file in gzip format, please use mmdb database instead.");
      }
      const cache = (0, tiny_lru_1.lru)(opts?.cache?.max || 1e4);
      const reader = new mmdb_lib_1.Reader(database, { cache });
      if (opts && !!opts.watchForUpdates) {
        if (opts.watchForUpdatesHook && typeof opts.watchForUpdatesHook !== "function") {
          throw new Error("opts.watchForUpdatesHook should be a function");
        }
        const watcherOptions = {
          persistent: opts.watchForUpdatesNonPersistent !== true
        };
        fs_1.default.watchFile(filepath, watcherOptions, async () => {
          const waitExists = async () => {
            for (let i = 0; i < 3; i++) {
              if (fs_1.default.existsSync(filepath)) {
                return true;
              }
              await new Promise((a) => setTimeout(a, 500));
            }
            return false;
          };
          if (!await waitExists()) {
            return;
          }
          const updatedDatabase = await readFile(filepath);
          cache.clear();
          reader.load(updatedDatabase);
          if (opts.watchForUpdatesHook) {
            opts.watchForUpdatesHook();
          }
        });
      }
      return reader;
    };
    exports.open = open;
    const openSync = () => {
      throw new Error(utils_1.default.legacyErrorMessage);
    };
    exports.openSync = openSync;
    const init = () => {
      throw new Error(utils_1.default.legacyErrorMessage);
    };
    exports.init = init;
    exports.validate = ip_1.default.validate;
    __exportStar(requireLib$1(), exports);
    exports.default = {
      init: exports.init,
      open: exports.open,
      openSync: exports.openSync,
      validate: ip_1.default.validate
    };
  })(lib$1);
  return lib$1;
}
var libExports = requireLib();
class IPGeoLocationService {
  cityReader = null;
  countryReader = null;
  asnReader = null;
  isInitialized = false;
  cache = /* @__PURE__ */ new Map();
  CACHE_SIZE_LIMIT = 5e4;
  CACHE_CLEANUP_THRESHOLD = 45e3;
  constructor() {
    this.initializeDatabase();
  }
  async initializeDatabase() {
    try {
      console.log("[IPGeoLocationService] 开始初始化MaxMind数据库...");
      const possiblePaths = [
        // 开发环境路径
        path.join(process.cwd(), "data"),
        path.join(process.cwd(), "public/data"),
        // 编译后路径 - Electron打包后的资源目录
        path.join(process.resourcesPath, "data"),
        path.join(process.resourcesPath, "app.asar.unpacked", "data"),
        path.join(process.resourcesPath, "app", "data"),
        // App路径相关
        path.join(electron.app.getAppPath(), "data"),
        path.join(electron.app.getAppPath(), "public/data"),
        path.join(electron.app.getAppPath(), "..", "data"),
        // __dirname相对路径
        path.join(__dirname, "../../data"),
        path.join(__dirname, "../../../data"),
        path.join(__dirname, "../../../../data"),
        // 用户数据目录
        path.join(electron.app.getPath("userData"), "data"),
        path.join(electron.app.getPath("exe"), "..", "data"),
        // 可执行文件目录
        path.join(process.execPath, "..", "data"),
        path.join(process.execPath, "..", "resources", "data")
      ];
      console.log("[IPGeoLocationService] 环境信息:");
      console.log("  - process.cwd():", process.cwd());
      console.log("  - app.getAppPath():", electron.app.getAppPath());
      console.log("  - __dirname:", __dirname);
      console.log("  - process.resourcesPath:", process.resourcesPath);
      console.log("  - process.execPath:", process.execPath);
      console.log('  - app.getPath("userData"):', electron.app.getPath("userData"));
      console.log("  - app.isPackaged:", electron.app.isPackaged);
      let dataPath = null;
      console.log("[IPGeoLocationService] 搜索数据目录...");
      for (const path$1 of possiblePaths) {
        console.log(`[IPGeoLocationService] 检查路径: ${path$1}`);
        if (require$$0$1.existsSync(path$1)) {
          dataPath = path$1;
          console.log(`[IPGeoLocationService] ✓ 找到数据目录: ${path$1}`);
          const cityDbPath2 = path.join(path$1, "GeoLite2-City.mmdb");
          const countryDbPath2 = path.join(path$1, "GeoLite2-Country.mmdb");
          const asnDbPath2 = path.join(path$1, "GeoLite2-ASN.mmdb");
          console.log(`[IPGeoLocationService] 检查MMDB文件:`);
          console.log(`  - 城市数据库: ${require$$0$1.existsSync(cityDbPath2) ? "✓" : "✗"} ${cityDbPath2}`);
          console.log(`  - 国家数据库: ${require$$0$1.existsSync(countryDbPath2) ? "✓" : "✗"} ${countryDbPath2}`);
          console.log(`  - ASN数据库: ${require$$0$1.existsSync(asnDbPath2) ? "✓" : "✗"} ${asnDbPath2}`);
          break;
        } else {
          console.log(`[IPGeoLocationService] ✗ 路径不存在: ${path$1}`);
        }
      }
      if (!dataPath) {
        console.error("[IPGeoLocationService] ❌ 未找到数据目录，将使用默认位置信息");
        console.log("[IPGeoLocationService] 请确保MMDB文件位于以下任一目录:");
        possiblePaths.forEach((path2, index) => {
          console.log(`  ${index + 1}. ${path2}`);
        });
        return;
      }
      const cityDbPath = path.join(dataPath, "GeoLite2-City.mmdb");
      if (require$$0$1.existsSync(cityDbPath)) {
        console.log("[IPGeoLocationService] 加载城市数据库:", cityDbPath);
        try {
          this.cityReader = await libExports.open(cityDbPath);
          console.log("[IPGeoLocationService] 城市数据库加载成功");
        } catch (error) {
          console.error("[IPGeoLocationService] 城市数据库加载失败:", error);
        }
      } else {
        console.warn("[IPGeoLocationService] 城市数据库文件不存在:", cityDbPath);
      }
      const countryDbPath = path.join(dataPath, "GeoLite2-Country.mmdb");
      if (require$$0$1.existsSync(countryDbPath)) {
        console.log("[IPGeoLocationService] 加载国家数据库:", countryDbPath);
        try {
          this.countryReader = await libExports.open(countryDbPath);
          console.log("[IPGeoLocationService] 国家数据库加载成功");
        } catch (error) {
          console.error("[IPGeoLocationService] 国家数据库加载失败:", error);
        }
      } else {
        console.warn("[IPGeoLocationService] 国家数据库文件不存在:", countryDbPath);
      }
      const asnDbPath = path.join(dataPath, "GeoLite2-ASN.mmdb");
      if (require$$0$1.existsSync(asnDbPath)) {
        console.log("[IPGeoLocationService] 加载ASN数据库:", asnDbPath);
        try {
          this.asnReader = await libExports.open(asnDbPath);
          console.log("[IPGeoLocationService] ASN数据库加载成功");
        } catch (error) {
          console.error("[IPGeoLocationService] ASN数据库加载失败:", error);
        }
      }
      if (this.cityReader || this.countryReader) {
        this.isInitialized = true;
        console.log("[IPGeoLocationService] MaxMind数据库初始化完成");
      } else {
        console.error("[IPGeoLocationService] 所有数据库文件都无法加载");
      }
    } catch (error) {
      console.error("[IPGeoLocationService] 数据库初始化失败:", error);
      this.isInitialized = false;
    }
  }
  async getIPLocation(ip2) {
    if (this.cache.has(ip2)) {
      return this.cache.get(ip2);
    }
    const location = await this.queryLocation(ip2);
    this.cacheLocation(ip2, location);
    return location;
  }
  async queryLocation(ip2) {
    const result = {
      ip: ip2,
      isValid: this.isValidIP(ip2),
      isPrivate: this.isPrivateIP(ip2)
    };
    if (!result.isValid || result.isPrivate) {
      return {
        ...result,
        country: "本地/私有网络",
        countryCode: "LOCAL",
        city: "本地",
        latitude: 39.9042,
        longitude: 116.4074
      };
    }
    if (!this.isInitialized) {
      console.warn("[IPGeoLocationService] 数据库未初始化，返回默认位置");
      return this.getDefaultLocation(ip2);
    }
    try {
      const locationData = await this.performSeparateQueries(ip2);
      return this.mergeLocationData(ip2, locationData);
    } catch (error) {
      console.error(`[IPGeoLocationService] IP查询失败 ${ip2}:`, error);
      return this.getDefaultLocation(ip2);
    }
  }
  async performSeparateQueries(ip2) {
    const results = {};
    const startTime = Date.now();
    if (this.cityReader) {
      try {
        results.cityData = this.cityReader.get(ip2);
        if (results.cityData) {
          const queryTime = Date.now() - startTime;
          if (queryTime > 10) {
            console.log(`[IPGeoLocationService] 城市查询完成 ${ip2}: ${queryTime}ms`);
          }
          return results;
        }
      } catch (error) {
        console.warn(`[IPGeoLocationService] 城市查询失败 ${ip2}:`, error);
      }
    }
    if (this.countryReader && !results.cityData) {
      try {
        results.countryData = this.countryReader.get(ip2);
        if (results.countryData) {
          const queryTime = Date.now() - startTime;
          if (queryTime > 10) {
            console.log(`[IPGeoLocationService] 国家查询完成 ${ip2}: ${queryTime}ms`);
          }
        }
      } catch (error) {
        console.warn(`[IPGeoLocationService] 国家查询失败 ${ip2}:`, error);
      }
    }
    if (this.asnReader && (results.cityData || results.countryData)) {
      try {
        results.asnData = this.asnReader.get(ip2);
      } catch (error) {
      }
    }
    const totalTime = Date.now() - startTime;
    if (totalTime > 20) {
      console.warn(`[IPGeoLocationService] IP查询耗时过长 ${ip2}: ${totalTime}ms`);
    }
    return results;
  }
  mergeLocationData(ip2, data) {
    const result = {
      ip: ip2,
      isValid: this.isValidIP(ip2),
      isPrivate: this.isPrivateIP(ip2)
    };
    const primaryData = data.cityData || data.countryData;
    const countryInfo = data.cityData?.country || data.countryData?.country;
    if (primaryData && countryInfo) {
      result.country = countryInfo.names?.["zh-CN"] || countryInfo.names?.en || "未知国家";
      result.countryCode = countryInfo.iso_code || "UNKNOWN";
      if (data.cityData?.subdivisions && data.cityData.subdivisions.length > 0) {
        const subdivision = data.cityData.subdivisions[0];
        result.region = subdivision.names?.["zh-CN"] || subdivision.names?.en;
      }
      if (!result.region) {
        result.region = result.country === "中国" ? "未知省份" : "未知地区";
      }
      if (data.cityData?.city?.names) {
        result.city = data.cityData.city.names["zh-CN"] || data.cityData.city.names.en;
      }
      if (!result.city) {
        result.city = result.country === "中国" ? "未知城市" : "未知城市";
      }
      if (data.cityData?.location) {
        result.latitude = data.cityData.location.latitude;
        result.longitude = data.cityData.location.longitude;
        result.timezone = data.cityData.location.time_zone;
        result.accuracy = data.cityData.location.accuracy_radius;
      } else {
        const coords = this.getCountryDefaultCoordinates(result.country);
        result.latitude = coords.latitude;
        result.longitude = coords.longitude;
      }
    }
    if (data.asnData) {
      result.asn = data.asnData.autonomous_system_number;
      result.organization = data.asnData.autonomous_system_organization;
      result.isp = data.asnData.autonomous_system_organization;
    }
    if (!result.country || result.country === "未知国家") {
      console.warn(`[IPGeoLocationService] IP ${ip2} 在所有数据库中都无法解析，使用默认位置`);
      return this.getDefaultLocation(ip2);
    }
    console.log(`[IPGeoLocationService] IP ${ip2} 最终结果:`, {
      country: result.country,
      region: result.region,
      city: result.city,
      coordinates: `${result.latitude}, ${result.longitude}`,
      source: data.cityData ? "City+Country+ASN" : data.countryData ? "Country+ASN" : "Default"
    });
    return result;
  }
  getCountryDefaultCoordinates(country) {
    const countryCoordinates = {
      "中国": { latitude: 39.9042, longitude: 116.4074 },
      // 北京
      "美国": { latitude: 39.8283, longitude: -98.5795 },
      // 美国中心
      "日本": { latitude: 36.2048, longitude: 138.2529 },
      // 日本中心
      "韩国": { latitude: 35.9078, longitude: 127.7669 },
      // 韩国中心
      "德国": { latitude: 51.1657, longitude: 10.4515 },
      // 德国中心
      "英国": { latitude: 55.3781, longitude: -3.436 },
      // 英国中心
      "法国": { latitude: 46.2276, longitude: 2.2137 },
      // 法国中心
      "俄罗斯": { latitude: 61.524, longitude: 105.3188 },
      // 俄罗斯中心
      "印度": { latitude: 20.5937, longitude: 78.9629 },
      // 印度中心
      "巴西": { latitude: -14.235, longitude: -51.9253 },
      // 巴西中心
      "加拿大": { latitude: 56.1304, longitude: -106.3468 },
      // 加拿大中心
      "澳大利亚": { latitude: -25.2744, longitude: 133.7751 }
      // 澳大利亚中心
    };
    return countryCoordinates[country] || { latitude: 0, longitude: 0 };
  }
  getDefaultLocation(ip2) {
    return {
      ip: ip2,
      country: "未知地区",
      countryCode: "UNKNOWN",
      region: "未知地区",
      city: "未知城市",
      latitude: 0,
      // 使用真实的0坐标而不是默认的北京坐标
      longitude: 0,
      isValid: this.isValidIP(ip2),
      isPrivate: this.isPrivateIP(ip2),
      timezone: void 0,
      accuracy: 0
    };
  }
  isValidIP(ip2) {
    const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
    const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return ipv4Regex.test(ip2) || ipv6Regex.test(ip2);
  }
  isPrivateIP(ip2) {
    if (!this.isValidIP(ip2)) return true;
    const parts = ip2.split(".").map(Number);
    if (parts.length !== 4) return false;
    return parts[0] === 10 || parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31 || parts[0] === 192 && parts[1] === 168 || parts[0] === 127 || // 回环地址
    parts[0] === 0 || // 无效地址
    parts[0] >= 224;
  }
  cacheLocation(ip2, location) {
    if (this.cache.size >= this.CACHE_SIZE_LIMIT) {
      const keysToDelete = Array.from(this.cache.keys()).slice(0, this.cache.size - this.CACHE_CLEANUP_THRESHOLD);
      keysToDelete.forEach((key) => this.cache.delete(key));
      console.log(`[IPGeoLocationService] 清理缓存，删除 ${keysToDelete.length} 条记录`);
    }
    this.cache.set(ip2, location);
  }
  getServiceStatus() {
    return {
      initialized: this.isInitialized,
      cacheSize: this.cache.size,
      cityDbLoaded: !!this.cityReader,
      countryDbLoaded: !!this.countryReader,
      asnDbLoaded: !!this.asnReader
    };
  }
  clearCache() {
    this.cache.clear();
    console.log("[IPGeoLocationService] 缓存已清空");
  }
  async reinitialize() {
    console.log("[IPGeoLocationService] 重新初始化数据库...");
    this.isInitialized = false;
    this.clearCache();
    await this.initializeDatabase();
  }
  // 批量查询接口，提高性能
  async batchGetIPLocations(ips) {
    const results = /* @__PURE__ */ new Map();
    const uncachedIPs = [];
    for (const ip2 of ips) {
      if (this.cache.has(ip2)) {
        results.set(ip2, this.cache.get(ip2));
      } else {
        uncachedIPs.push(ip2);
      }
    }
    const batchPromises = uncachedIPs.map(async (ip2) => {
      const location = await this.queryLocation(ip2);
      this.cacheLocation(ip2, location);
      return { ip: ip2, location };
    });
    const batchResults = await Promise.all(batchPromises);
    batchResults.forEach(({ ip: ip2, location }) => {
      results.set(ip2, location);
    });
    console.log(`[IPGeoLocationService] 批量查询完成: ${ips.length} 个IP，${uncachedIPs.length} 个新查询`);
    return results;
  }
}
const ipGeoLocationService = new IPGeoLocationService();
function createWindow() {
  const mainWindow = new electron.BrowserWindow({
    width: 1600,
    // 增加窗口宽度到1600
    height: 1e3,
    // 增加窗口高度到1000
    minWidth: 1400,
    // 增加最小宽度到1400
    minHeight: 900,
    // 增加最小高度到900
    show: false,
    autoHideMenuBar: true,
    title: "FastWLAT - Web日志分析工具 v1.1.0",
    // 设置窗口标题
    ...process.platform === "linux" ? { icon } : {},
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      sandbox: false
    }
  });
  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });
  mainWindow.webContents.setWindowOpenHandler((details) => {
    electron.shell.openExternal(details.url);
    return { action: "deny" };
  });
  if (utils$2.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));
  }
}
electron.app.whenReady().then(() => {
  utils$2.electronApp.setAppUserModelId("com.electron");
  electron.app.on("browser-window-created", (_, window) => {
    utils$2.optimizer.watchWindowShortcuts(window);
  });
  electron.ipcMain.on("ping", () => console.log("pong"));
  electron.ipcMain.handle("ip-geo:getLocation", async (_e, ip2) => {
    return ipGeoLocationService.getIPLocation(ip2);
  });
  electron.ipcMain.handle("ip-geo:batchGetLocations", async (_e, ips) => {
    const results = await ipGeoLocationService.batchGetIPLocations(ips);
    return Array.from(results.entries());
  });
  electron.ipcMain.handle("ip-geo:getStatus", async () => {
    return ipGeoLocationService.getServiceStatus();
  });
  electron.ipcMain.handle("ip-geo:clearCache", async () => {
    return ipGeoLocationService.clearCache();
  });
  electron.ipcMain.handle("ip-geo:reinitialize", async () => {
    return ipGeoLocationService.reinitialize();
  });
  createWindow();
  electron.app.on("activate", function() {
    if (electron.BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
