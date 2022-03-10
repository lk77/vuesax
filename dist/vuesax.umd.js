(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vuesax"] = factory(require("vue"));
	else
		root["vuesax"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "34d8");
/******/ })
/************************************************************************/
/******/ ({

/***/ "010c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e510");
var isObject = __webpack_require__("633b");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "0190":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("f3c1");
var toString = __webpack_require__("649c");
var requireObjectCoercible = __webpack_require__("d9a4");

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "027b":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("96c7");
var isCallable = __webpack_require__("3e6e");
var classof = __webpack_require__("ee97");
var regexpExec = __webpack_require__("f28a");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = exec.call(R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return regexpExec.call(R, S);
  throw TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "064e":
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__("28d0");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "0a53":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("633b");
var isSymbol = __webpack_require__("19a0");
var getMethod = __webpack_require__("1430");
var ordinaryToPrimitive = __webpack_require__("668f");
var wellKnownSymbol = __webpack_require__("e900");

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "0aba":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("7b2d");
var global = __webpack_require__("e510");
var getBuiltIn = __webpack_require__("8256");
var IS_PURE = __webpack_require__("846f");
var DESCRIPTORS = __webpack_require__("4b0d");
var NATIVE_SYMBOL = __webpack_require__("0cbf");
var fails = __webpack_require__("6387");
var hasOwn = __webpack_require__("724f");
var isArray = __webpack_require__("7c65");
var isCallable = __webpack_require__("3e6e");
var isObject = __webpack_require__("633b");
var isSymbol = __webpack_require__("19a0");
var anObject = __webpack_require__("96c7");
var toObject = __webpack_require__("89a2");
var toIndexedObject = __webpack_require__("2f8f");
var toPropertyKey = __webpack_require__("d64b");
var $toString = __webpack_require__("649c");
var createPropertyDescriptor = __webpack_require__("a381");
var nativeObjectCreate = __webpack_require__("7513");
var objectKeys = __webpack_require__("c5f2");
var getOwnPropertyNamesModule = __webpack_require__("2470");
var getOwnPropertyNamesExternal = __webpack_require__("3851");
var getOwnPropertySymbolsModule = __webpack_require__("40ad");
var getOwnPropertyDescriptorModule = __webpack_require__("cff0");
var definePropertyModule = __webpack_require__("18f2");
var propertyIsEnumerableModule = __webpack_require__("5101");
var redefine = __webpack_require__("5dce");
var shared = __webpack_require__("5261");
var sharedKey = __webpack_require__("5821");
var hiddenKeys = __webpack_require__("5256");
var uid = __webpack_require__("bb84");
var wellKnownSymbol = __webpack_require__("e900");
var wrappedWellKnownSymbolModule = __webpack_require__("726d");
var defineWellKnownSymbol = __webpack_require__("3190");
var setToStringTag = __webpack_require__("ac9a");
var InternalStateModule = __webpack_require__("386c");
var $forEach = __webpack_require__("efbe").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = $toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (isCallable($replacer)) value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  var valueOf = $Symbol[PROTOTYPE].valueOf;
  redefine($Symbol[PROTOTYPE], TO_PRIMITIVE, function () {
    return valueOf.apply(this, arguments);
  });
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "0b93":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("2f8f");
var toAbsoluteIndex = __webpack_require__("f98a");
var lengthOfArrayLike = __webpack_require__("7410");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "0cbf":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("e61f");
var fails = __webpack_require__("6387");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "0d8d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("f3c1");
var toString = __webpack_require__("649c");
var requireObjectCoercible = __webpack_require__("d9a4");

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "0dfa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("1dca");
var fails = __webpack_require__("6387");
var anObject = __webpack_require__("96c7");
var isCallable = __webpack_require__("3e6e");
var toIntegerOrInfinity = __webpack_require__("f3c1");
var toLength = __webpack_require__("b946");
var toString = __webpack_require__("649c");
var requireObjectCoercible = __webpack_require__("d9a4");
var advanceStringIndex = __webpack_require__("6ee3");
var getMethod = __webpack_require__("1430");
var getSubstitution = __webpack_require__("3dd6");
var regExpExec = __webpack_require__("027b");
var wellKnownSymbol = __webpack_require__("e900");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue === 'string' &&
        replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 &&
        replaceValue.indexOf('$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = toString(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "0e95":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("e900");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "10dc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1430":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("1d1b");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "18f2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("4b0d");
var IE8_DOM_DEFINE = __webpack_require__("a24d");
var anObject = __webpack_require__("96c7");
var toPropertyKey = __webpack_require__("d64b");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "190f":
/***/ (function(module, exports) {

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "19a0":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("3e6e");
var getBuiltIn = __webpack_require__("8256");
var USE_SYMBOL_AS_UID = __webpack_require__("9e8d");

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && Object(it) instanceof $Symbol;
};


/***/ }),

/***/ "1a04":
/***/ (function(module, exports) {

// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "1cba":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("4b0d");
var definePropertyModule = __webpack_require__("18f2");
var createPropertyDescriptor = __webpack_require__("a381");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "1d1b":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("3e6e");
var tryToString = __webpack_require__("190f");

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "1dca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("d0a8");
var redefine = __webpack_require__("5dce");
var regexpExec = __webpack_require__("f28a");
var fails = __webpack_require__("6387");
var wellKnownSymbol = __webpack_require__("e900");
var createNonEnumerableProperty = __webpack_require__("1cba");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "2447":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e510");
var isCallable = __webpack_require__("3e6e");
var inspectSource = __webpack_require__("8b02");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "2470":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("cb80");
var enumBugKeys = __webpack_require__("a4cd");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2534":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("1d1b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aCallable(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "25a2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("4b0d");
var global = __webpack_require__("e510");
var isForced = __webpack_require__("871a");
var redefine = __webpack_require__("5dce");
var hasOwn = __webpack_require__("724f");
var inheritIfRequired = __webpack_require__("cd5d");
var isSymbol = __webpack_require__("19a0");
var toPrimitive = __webpack_require__("0a53");
var fails = __webpack_require__("6387");
var getOwnPropertyNames = __webpack_require__("2470").f;
var getOwnPropertyDescriptor = __webpack_require__("cff0").f;
var defineProperty = __webpack_require__("18f2").f;
var thisNumberValue = __webpack_require__("ec29");
var trim = __webpack_require__("41a2").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue === 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    var dummy = this;
    // check on 1..constructor(foo) case
    return dummy instanceof NumberWrapper && fails(function () { thisNumberValue(dummy); })
      ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(NativeNumber, key = keys[j]) && !hasOwn(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "26d0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("4b0d");
var definePropertyModule = __webpack_require__("18f2");
var anObject = __webpack_require__("96c7");
var objectKeys = __webpack_require__("c5f2");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "28d0":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("7c65");
var isConstructor = __webpack_require__("2edb");
var isObject = __webpack_require__("633b");
var wellKnownSymbol = __webpack_require__("e900");

var SPECIES = wellKnownSymbol('species');

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "2a53":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e510");
var DOMIterables = __webpack_require__("b8fd");
var DOMTokenListPrototype = __webpack_require__("a964");
var forEach = __webpack_require__("9344");
var createNonEnumerableProperty = __webpack_require__("1cba");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "2edb":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("6387");
var isCallable = __webpack_require__("3e6e");
var classof = __webpack_require__("5574");
var getBuiltIn = __webpack_require__("8256");
var inspectSource = __webpack_require__("8b02");

var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = constructorRegExp.exec;
var INCORRECT_TO_STRING = !constructorRegExp.exec(function () { /* empty */ });

var isConstructorModern = function (argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(Object, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function (argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
    // we can't check .prototype since constructors produced by .bind haven't it
  } return INCORRECT_TO_STRING || !!exec.call(constructorRegExp, inspectSource(argument));
};

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "2f84":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("724f");
var ownKeys = __webpack_require__("32f4");
var getOwnPropertyDescriptorModule = __webpack_require__("cff0");
var definePropertyModule = __webpack_require__("18f2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "2f8f":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("7794");
var requireObjectCoercible = __webpack_require__("d9a4");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "30e4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__("d64b");
var definePropertyModule = __webpack_require__("18f2");
var createPropertyDescriptor = __webpack_require__("a381");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "3190":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("9e4b");
var hasOwn = __webpack_require__("724f");
var wrappedWellKnownSymbolModule = __webpack_require__("726d");
var defineProperty = __webpack_require__("18f2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "321b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("7b2d");
var DESCRIPTORS = __webpack_require__("4b0d");
var global = __webpack_require__("e510");
var hasOwn = __webpack_require__("724f");
var isCallable = __webpack_require__("3e6e");
var isObject = __webpack_require__("633b");
var defineProperty = __webpack_require__("18f2").f;
var copyConstructorProperties = __webpack_require__("2f84");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var nativeSymbol = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var desc = nativeSymbol ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "32ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("6387");
var global = __webpack_require__("e510");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "32f4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("8256");
var getOwnPropertyNamesModule = __webpack_require__("2470");
var getOwnPropertySymbolsModule = __webpack_require__("40ad");
var anObject = __webpack_require__("96c7");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "34d8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "vsButton", function() { return /* reexport */ components_vsButton; });
__webpack_require__.d(__webpack_exports__, "vsSwitch", function() { return /* reexport */ components_vsSwitch; });
__webpack_require__.d(__webpack_exports__, "vsCheckbox", function() { return /* reexport */ components_vsCheckBox; });
__webpack_require__.d(__webpack_exports__, "vsRadio", function() { return /* reexport */ components_vsRadio; });
__webpack_require__.d(__webpack_exports__, "vsInput", function() { return /* reexport */ components_vsInput; });
__webpack_require__.d(__webpack_exports__, "vsTabs", function() { return /* reexport */ components_vsTabs; });
__webpack_require__.d(__webpack_exports__, "vsSlider", function() { return /* reexport */ components_vsSlider; });
__webpack_require__.d(__webpack_exports__, "vsInputNumber", function() { return /* reexport */ components_vsInputNumber; });
__webpack_require__.d(__webpack_exports__, "vsTooltip", function() { return /* reexport */ components_vsTooltip; });
__webpack_require__.d(__webpack_exports__, "vsUpload", function() { return /* reexport */ components_vsUpload; });
__webpack_require__.d(__webpack_exports__, "vsPopup", function() { return /* reexport */ components_vsPopup; });
__webpack_require__.d(__webpack_exports__, "vsAlert", function() { return /* reexport */ components_vsAlert; });
__webpack_require__.d(__webpack_exports__, "vsChip", function() { return /* reexport */ components_vsChip; });
__webpack_require__.d(__webpack_exports__, "vsProgress", function() { return /* reexport */ components_vsProgress; });
__webpack_require__.d(__webpack_exports__, "vsCard", function() { return /* reexport */ components_vsCard; });
__webpack_require__.d(__webpack_exports__, "vsList", function() { return /* reexport */ components_vsList; });
__webpack_require__.d(__webpack_exports__, "vsAvatar", function() { return /* reexport */ components_vsAvatar; });
__webpack_require__.d(__webpack_exports__, "vsPagination", function() { return /* reexport */ components_vsPagination; });
__webpack_require__.d(__webpack_exports__, "vsBreadcrumb", function() { return /* reexport */ components_vsBreadcrumb; });
__webpack_require__.d(__webpack_exports__, "vsPrompt", function() { return /* reexport */ vsPrompt; });
__webpack_require__.d(__webpack_exports__, "vsDivider", function() { return /* reexport */ components_vsDivider; });
__webpack_require__.d(__webpack_exports__, "vsSpacer", function() { return /* reexport */ components_vsSpacer; });
__webpack_require__.d(__webpack_exports__, "vsIcon", function() { return /* reexport */ components_vsIcon; });
__webpack_require__.d(__webpack_exports__, "vsNavbar", function() { return /* reexport */ components_vsNavbar; });
__webpack_require__.d(__webpack_exports__, "vsSideBar", function() { return /* reexport */ vsSideBar; });
__webpack_require__.d(__webpack_exports__, "vsDropDown", function() { return /* reexport */ components_vsDropDown; });
__webpack_require__.d(__webpack_exports__, "vsTextarea", function() { return /* reexport */ components_vsTextarea; });
__webpack_require__.d(__webpack_exports__, "vsCollapse", function() { return /* reexport */ components_vsCollapse; });
__webpack_require__.d(__webpack_exports__, "vsImages", function() { return /* reexport */ components_vsImages; });
__webpack_require__.d(__webpack_exports__, "vsRow", function() { return /* reexport */ layout_vsRow; });
__webpack_require__.d(__webpack_exports__, "vsCol", function() { return /* reexport */ layout_vsCol; });

// NAMESPACE OBJECT: ./src/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "vsButton", function() { return components_vsButton; });
__webpack_require__.d(components_namespaceObject, "vsSelect", function() { return components_vsSelect; });
__webpack_require__.d(components_namespaceObject, "vsSwitch", function() { return components_vsSwitch; });
__webpack_require__.d(components_namespaceObject, "vsCheckbox", function() { return components_vsCheckBox; });
__webpack_require__.d(components_namespaceObject, "vsRadio", function() { return components_vsRadio; });
__webpack_require__.d(components_namespaceObject, "vsInput", function() { return components_vsInput; });
__webpack_require__.d(components_namespaceObject, "vsTabs", function() { return components_vsTabs; });
__webpack_require__.d(components_namespaceObject, "vsSlider", function() { return components_vsSlider; });
__webpack_require__.d(components_namespaceObject, "vsInputNumber", function() { return components_vsInputNumber; });
__webpack_require__.d(components_namespaceObject, "vsTooltip", function() { return components_vsTooltip; });
__webpack_require__.d(components_namespaceObject, "vsUpload", function() { return components_vsUpload; });
__webpack_require__.d(components_namespaceObject, "vsPopup", function() { return components_vsPopup; });
__webpack_require__.d(components_namespaceObject, "vsAlert", function() { return components_vsAlert; });
__webpack_require__.d(components_namespaceObject, "vsChip", function() { return components_vsChip; });
__webpack_require__.d(components_namespaceObject, "vsProgress", function() { return components_vsProgress; });
__webpack_require__.d(components_namespaceObject, "vsCard", function() { return components_vsCard; });
__webpack_require__.d(components_namespaceObject, "vsList", function() { return components_vsList; });
__webpack_require__.d(components_namespaceObject, "vsAvatar", function() { return components_vsAvatar; });
__webpack_require__.d(components_namespaceObject, "vsPagination", function() { return components_vsPagination; });
__webpack_require__.d(components_namespaceObject, "vsBreadcrumb", function() { return components_vsBreadcrumb; });
__webpack_require__.d(components_namespaceObject, "vsPrompt", function() { return vsPrompt; });
__webpack_require__.d(components_namespaceObject, "vsDivider", function() { return components_vsDivider; });
__webpack_require__.d(components_namespaceObject, "vsSpacer", function() { return components_vsSpacer; });
__webpack_require__.d(components_namespaceObject, "vsIcon", function() { return components_vsIcon; });
__webpack_require__.d(components_namespaceObject, "vsNavbar", function() { return components_vsNavbar; });
__webpack_require__.d(components_namespaceObject, "vsSideBar", function() { return vsSideBar; });
__webpack_require__.d(components_namespaceObject, "vsDropDown", function() { return components_vsDropDown; });
__webpack_require__.d(components_namespaceObject, "vsTextarea", function() { return components_vsTextarea; });
__webpack_require__.d(components_namespaceObject, "vsCollapse", function() { return components_vsCollapse; });
__webpack_require__.d(components_namespaceObject, "vsImages", function() { return components_vsImages; });
__webpack_require__.d(components_namespaceObject, "vsRow", function() { return layout_vsRow; });
__webpack_require__.d(components_namespaceObject, "vsCol", function() { return layout_vsCol; });

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("39d7")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/style/vuesax.styl
var vuesax = __webpack_require__("99c0");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("8200");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("2a53");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__("9453");

// CONCATENATED MODULE: ./src/utils/options.js
/**
 * All vuesax framework options listed here
 * all options listed here are reactive
 */
/* harmony default export */ var utils_options = ({
  rtl: false
});
// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("918e");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("d0a8");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__("fbac");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsButton/vsButton.vue?vue&type=template&id=a768630a&lang=html




var _hoisted_1 = ["type"];
var _hoisted_2 = {
  key: 2,
  class: "vs-button-text vs-button--text"
};
function vsButtonvue_type_template_id_a768630a_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _normalizeStyle2;

  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("button", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])($options.attrs, {
    ref: "btn",
    class: [["vs-button-".concat($options.isColor() ? $props.color : null), "vs-button-".concat($props.type), {
      'isActive': _ctx.isActive,
      'includeIcon': $props.icon,
      'includeIconOnly': $props.icon && !_ctx.$slots.default,
      'vs-radius': $props.radius
    }, $props.size, this.class], "vs-component vs-button"],
    style: [$options.styles, {
      'width': /[px]/.test($props.size) ? "".concat($props.size) : null,
      'height': /[px]/.test($props.size) ? "".concat($props.size) : null
    }, this.style],
    type: $props.button,
    name: "button"
  }), [!$options.is('line') && !$options.is('gradient') && !$options.is('relief') ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
    key: 0,
    ref: "backgroundx",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.stylesBackGround),
    class: "vs-button-backgroundx vs-button--background"
  }, null, 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.icon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_vs_icon, {
    key: 1,
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])((_normalizeStyle2 = {
      'order': $props.iconAfter ? 2 : 0
    }, _defineProperty(_normalizeStyle2, 'margin-' + $options.isRTL('left'), _ctx.$slots.default && !$props.iconAfter ? '5px' : '0px'), _defineProperty(_normalizeStyle2, 'margin-' + $options.isRTL('right'), _ctx.$slots.default && $props.iconAfter ? '5px' : '0px'), _normalizeStyle2)),
    "icon-pack": $props.iconPack,
    icon: $props.icon,
    class: "vs-button--icon"
  }, null, 8, ["style", "icon-pack", "icon"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.$slots.default ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    ref: "linex",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleLine),
    class: "vs-button-linex"
  }, null, 4)], 16, _hoisted_1);
}
// CONCATENATED MODULE: ./src/components/vsButton/vsButton.vue?vue&type=template&id=a768630a&lang=html

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("680b");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("d6a4");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("a6ed");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__("7227");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("0dfa");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("beb6");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("b76c");

// CONCATENATED MODULE: ./src/utils/color.js

















/* harmony default export */ var utils_color = ({
  darken: function darken(color, percent) {
    var f = color.split(","),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = parseInt(f[0].slice(4)),
        G = parseInt(f[1]),
        B = parseInt(f[2]);
    return "rgb(" + (Math.round((t - R) * p) + R) + "," + (Math.round((t - G) * p) + G) + "," + (Math.round((t - B) * p) + B) + ")";
  },
  getColor: function getColor(colorx) {
    var alphax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var defaultx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    // change color hex to RGB
    if (/^[#]/.test(colorx)) {
      var c = this.hexToRgb(colorx);

      if (alphax == 1) {
        colorx = "rgb(".concat(c.r, ",").concat(c.g, ",").concat(c.b, ")");
      } else {
        colorx = "rgba(".concat(c.r, ",").concat(c.g, ",").concat(c.b, ",").concat(alphax, ")");
      }
    } else if (/^rgba/.test(colorx)) {
      if (colorx.search(/.([0-9]\))$/) == -1 && !defaultx) {
        colorx = colorx.replace(/.?([0-9]\))$/, "".concat(alphax, ")"));
      }
    } else if (/^(rgb)/.test(colorx)) {
      // change rgb and rgba
      if (alphax != 1) {
        colorx = colorx.replace(/^(rgb)/, "rgba");
        colorx = colorx.replace(/\)$/, ",".concat(alphax, ")"));
      }
    }

    return colorx;
  },
  isColor: function isColor(colorx) {
    var vscolors = ['primary', 'secondary', 'success', 'danger', 'warning', 'dark', 'light'];
    return vscolors.includes(colorx);
  },
  RandomColor: function RandomColor() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    return "rgb(".concat(getRandomInt(0, 255), ",").concat(getRandomInt(0, 255), ",").concat(getRandomInt(0, 255), ")");
  },
  rColor: function rColor(colorx) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    if (/^[#]/.test(colorx)) {
      var c = this.hexToRgb(colorx);
      colorx = "rgba(".concat(c.r, ",").concat(c.g, ",").concat(c.b, ",").concat(opacity, ")");
    } else if (/^[rgb]/.test(colorx)) {
      var colorSplit = colorx.split(')')[0];

      if (!/^[rgba]/.test(colorx)) {
        colorSplit.replace('rgb', 'rgba');
        colorSplit += ",".concat(opacity, ")");
      } else {
        // colorSplit.replace('rgb','rgba')
        colorSplit += ")";
      }

      colorx = colorSplit;
    }

    var vscolors = ['primary', 'success', 'danger', 'warning', 'dark'];

    if (colorx) {
      if (/[#()]/.test(colorx)) {
        return colorx;
      } else {
        if (vscolors.includes(colorx)) {
          return "rgba(var(--vs-".concat(colorx, "),").concat(opacity, ")");
        } else {
          return "rgba(var(--vs-primary),".concat(opacity, ")");
        }
      }
    } else {
      return "rgba(var(--vs-primary),".concat(opacity, ")");
    }
  },
  contrastColor: function contrastColor(elementx) {
    var c = elementx;

    if (/[#]/g.test(elementx)) {
      var rgbx = this.hexToRgb(elementx);
      c = "rgb(".concat(rgbx.r, ",").concat(rgbx.g, ",").concat(rgbx.b, ")");
    }

    var rgb = c.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');
    var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;

    if (yiq >= 128) {
      return true;
    } else {
      return false;
    }
  },
  setCssVariable: function setCssVariable(propertyName, value) {
    if (typeof window !== 'undefined') {
      document.documentElement.style.setProperty(propertyName, value);
    }
  },
  hexToRgb: function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  },
  getVariable: function getVariable(styles, propertyName) {
    return String(styles.getPropertyValue(propertyName)).trim();
  },
  changeColor: function changeColor(colorInicial) {
    var colores = ['primary', 'success', 'danger', 'warning', 'dark'];
    var colorx;

    if (colores.includes(colorInicial)) {
      var style = getComputedStyle(document.documentElement);
      colorx = this.getVariable(style, '--vs-' + colorInicial);
    } else {
      if (/[rgb()]/g.test(colorInicial)) {
        colorx = colorInicial.replace(/[rgb()]/g, '');
      } else if (/[#]/g.test(colorInicial)) {
        var rgbx = this.hexToRgb(colorInicial);
        colorx = "".concat(rgbx.r, ",").concat(rgbx.g, ",").concat(rgbx.b);
      } else {
        colorx = '--vs-' + colorInicial;
      }
    }

    return colorx; // this.setCssVariable('--vs-'+clave,colorx)
  }
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsButton/vsButton.vue?vue&type=script&lang=js




/* harmony default export */ var vsButtonvue_type_script_lang_js = ({
  name: 'VsButton',
  inheritAttrs: false,
  props: {
    type: {
      default: 'filled',
      type: String
    },
    color: {
      default: 'primary',
      type: String
    },
    textColor: {
      default: null,
      type: String
    },
    lineOrigin: {
      default: 'center',
      type: String
    },
    linePosition: {
      default: 'bottom',
      type: String
    },
    gradientDirection: {
      default: '30deg',
      type: String
    },
    gradientColorSecondary: {
      default: 'primary',
      type: String
    },
    size: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    iconAfter: {
      default: false,
      type: Boolean
    },
    radius: {
      default: false,
      type: Boolean
    },
    to: {
      default: false,
      type: [String, Object, Boolean]
    },
    href: {
      default: '',
      type: [String, Object]
    },
    target: {
      default: false,
      type: [Boolean, String]
    },
    button: {
      default: 'button',
      type: String
    },
    // temporary fix because missing from $attrs
    class: {},
    style: {}
  },
  data: function data() {
    return {
      isActive: false,
      hoverx: false,
      leftBackgorund: 20,
      topBackgorund: 20,
      radio: 0,
      time: 0.3,
      timeOpacity: 0.3,
      opacity: 1
    };
  },
  computed: {
    attrs: function attrs() {
      var _this = this;

      return _objectSpread2(_objectSpread2({}, this.$attrs), {}, {
        onClick: function onClick(event) {
          return _this.clickButton(event);
        },
        onBlur: function onBlur(event) {
          return _this.blurButton(event);
        },
        onMouseover: function onMouseover(event) {
          return _this.mouseoverx(event);
        },
        onMouseout: function onMouseout(event) {
          return _this.mouseoutx(event);
        }
      });
    },
    styles: function styles() {
      if (this.is('filled')) {
        return {
          color: utils_color.getColor(this.textColor, 1),
          background: utils_color.getColor(this.color, 1),
          boxShadow: this.hoverx ? "0px 8px 25px -8px ".concat(utils_color.getColor(this.color, 1)) : null
        };
      } else if (this.is('border') || this.is('flat')) {
        return {
          border: "".concat(this.is('flat') ? 0 : 1, "px solid ").concat(utils_color.getColor(this.color, 1)),
          background: this.hoverx ? utils_color.getColor(this.color, .1) : 'transparent',
          color: utils_color.getColor(this.textColor, 1) || utils_color.getColor(this.color, 1)
        };
      } else if (this.is('line')) {
        return {
          color: utils_color.getColor(this.textColor, 1) || utils_color.getColor(this.color, 1),
          borderBottomWidth: this.linePosition == 'bottom' ? "2px" : null,
          borderColor: "".concat(utils_color.getColor(this.color, .2)),
          borderTopWidth: this.linePosition == 'top' ? "2px" : null
        };
      } else if (this.is('gradient')) {
        var backgroundx = "linear-gradient(".concat(this.gradientDirection, ", ").concat(utils_color.getColor(this.color), " 0%, ").concat(utils_color.getColor(this.gradientColorSecondary, 1), " 100%)");
        return {
          background: backgroundx
        };
      } else if (this.is('relief')) {
        var color = utils_color.getColor(this.color, 1);

        return {
          background: utils_color.getColor(this.color, 1),
          boxShadow: "0 3px 0 0 ".concat(utils_color.darken(color, -0.4))
        };
      }
    },
    stylesBackGround: function stylesBackGround() {
      var styles = {
        background: this.is('flat') || this.is('border') ? utils_color.getColor(this.color, 1, false) : null,
        opacity: this.opacity,
        left: "".concat(this.leftBackgorund, "px"),
        top: "".concat(this.topBackgorund, "px"),
        width: "".concat(this.radio, "px"),
        height: "".concat(this.radio, "px"),
        transition: "width ".concat(this.time, "s ease, height ").concat(this.time, "s ease, opacity ").concat(this.timeOpacity, "s ease")
      };
      return styles;
    },
    styleLine: function styleLine() {
      var lineOrigin = '50%';

      if (this.lineOrigin == 'left') {
        lineOrigin = '0%';
      } else if (this.lineOrigin == 'right') {
        lineOrigin = 'auto';
      }

      var styles = {
        top: this.linePosition == 'top' ? '-2px' : 'auto',
        bottom: this.linePosition == 'bottom' ? '-2px' : 'auto',
        background: utils_color.getColor(this.color, 1),
        left: lineOrigin,
        right: lineOrigin == 'auto' ? '0px' : null,
        transform: lineOrigin == '50%' ? 'translate(-50%)' : null
      };
      return styles;
    }
  },
  methods: {
    isRTL: function isRTL(modelValue) {
      if (this.$vs.rtl) {
        return modelValue;
      } else {
        if (modelValue === 'right') {
          return 'left';
        }

        if (modelValue === 'left') {
          return 'right';
        }
      }
    },
    routerPush: function routerPush() {
      var _this2 = this;

      this.$router.push(this.to).catch(function (err) {
        _this2.$emit("routeErr", err);
      });
    },
    is: function is(which) {
      var type = this.type;
      return type == which;
    },
    mouseoverx: function mouseoverx(event) {
      this.$emit('mouseover', event);
      this.hoverx = true;
    },
    mouseoutx: function mouseoutx(event) {
      this.$emit('mouseout', event);
      this.hoverx = false;
    },
    blurButton: function blurButton(event) {
      var _this3 = this;

      this.$emit('blur', event);
      this.$nextTick(function () {
        if (_this3.type == 'border' || _this3.type == 'flat') {
          _this3.opacity = 0;
          setTimeout(function () {
            _this3.radio = 0;
          }, 150);
          _this3.isActive = false;
        }
      });
    },
    clickButton: function clickButton(event) {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.$emit('click', event);

        if (_this4.isActive) {
          return;
        }

        if (_this4.to) {
          _this4.routerPush();
        }

        if (_this4.href) {
          if (typeof _this4.href == 'string') {
            _this4.target ? window.open(_this4.href) : window.location.href = _this4.href;
          } else {
            _this4.target ? window.open(_this4.href.url) : window.location.href = _this4.href.url;
          }
        }

        if (_this4.type == 'border' || _this4.type == 'flat') {
          _this4.isActive = true;
        }

        var btn = _this4.$refs.btn;
        var xEvent = event.offsetX;
        var yEvent = event.offsetY;
        var radio = btn.clientWidth * 3;
        _this4.time = btn.clientWidth / (btn.clientWidth + (_this4.is('border') || _this4.is('flat') ? 70 : 20));

        if (_this4.is('filled')) {
          _this4.timeOpacity = _this4.time;
        }

        if (event.srcElement ? event.srcElement != btn : false) {
          xEvent += event.target.offsetLeft;
          yEvent += event.target.offsetTop;
        }

        _this4.leftBackgorund = xEvent;
        _this4.topBackgorund = yEvent;
        _this4.radio = radio;

        if (_this4.is('filled')) {
          _this4.opacity = 0;
        } else {
          _this4.opacity = 1;
        }

        if (_this4.is('filled')) {
          setTimeout(function () {
            _this4.time = _this4.timeOpacity = _this4.radio = 0;
            _this4.opacity = 1;
            _this4.isActive = false;
          }, _this4.time * 1100);
        } else {
          setTimeout(function () {
            _this4.timeOpacity = .15;
          }, _this4.time * 1100);
        }
      });
    },
    isColor: function isColor() {
      return utils_color.isColor(this.color);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsButton/vsButton.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("a609");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/vsButton/vsButton.vue





const __exports__ = /*#__PURE__*/exportHelper_default()(vsButtonvue_type_script_lang_js, [['render',vsButtonvue_type_template_id_a768630a_lang_html_render]])

/* harmony default export */ var vsButton = (__exports__);
// CONCATENATED MODULE: ./src/components/vsButton/index.js



/* harmony default export */ var components_vsButton = (function (Vue) {
  Vue.component(vsButton.name, vsButton);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsSelect/vsSelect.vue?vue&type=template&id=0e27c202&lang=html



var vsSelectvue_type_template_id_0e27c202_lang_html_hoisted_1 = {
  class: "input-select-con"
};
var vsSelectvue_type_template_id_0e27c202_lang_html_hoisted_2 = ["value", "readonly"];
var _hoisted_3 = ["name", "value"];

var _hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
  class: "material-icons"
}, " close ", -1);

var _hoisted_5 = [_hoisted_4];
var _hoisted_6 = {
  ref: "ulx"
};
var _hoisted_7 = {
  key: "success",
  class: "con-text-validation"
};
var _hoisted_8 = {
  class: "span-text-validation span-text-validation-success"
};
var _hoisted_9 = {
  key: "danger",
  class: "con-text-validation span-text-validation-danger"
};
var _hoisted_10 = {
  class: "span-text-validation"
};
var _hoisted_11 = {
  key: "warning",
  class: "con-text-validation span-text-validation-warning"
};
var _hoisted_12 = {
  class: "span-text-validation"
};
var _hoisted_13 = {
  key: "description",
  class: "con-text-validation span-text-validation"
};
var _hoisted_14 = {
  class: "span-text-validation"
};
function vsSelectvue_type_template_id_0e27c202_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'autocompletex': $props.autocomplete,
      'activeOptions': _ctx.active,
      'input-select-validate-success': $props.success,
      'input-select-validate-danger': $props.danger,
      'input-select-validate-warning': $props.warning
    }, "con-select"]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.getWidth)
  }, [$props.label ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("label", {
    key: 0,
    ref: "inputSelectLabel",
    class: "vs-select--label"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label), 513)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsSelectvue_type_template_id_0e27c202_lang_html_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])($options.attrs, {
    value: _ctx.modelValuex,
    ref: "inputselect",
    readonly: !$props.autocomplete,
    class: "input-select vs-select--input",
    type: "text",
    onKeydown: _cache[0] || (_cache[0] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function () {
      return $options.closeOptions && $options.closeOptions.apply($options, arguments);
    }, ["stop", "prevent"]), ["esc"]))
  }), null, 16, vsSelectvue_type_template_id_0e27c202_lang_html_hoisted_2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    name: _ctx.$attrs.name,
    type: "hidden",
    value: $props.modelValue
  }, null, 8, _hoisted_3), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'activeBtnClear': $options.activeBtnClear
    }, "icon-select-clear vs-select--icon-clear"]),
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.clearValue && $options.clearValue.apply($options, arguments);
    })
  }, _hoisted_5, 2), !$options.activeBtnClear ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_vs_icon, {
    key: 0,
    "icon-pack": $props.iconPack,
    icon: $props.icon,
    class: "icon-select vs-select--icon"
  }, null, 8, ["icon-pack", "icon"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "fadeselect"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        ref: "vsSelectOptions",
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.cords),
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-select-".concat($props.color), {
          'scrollx': _ctx.scrollx
        }], "vs-select--options"])
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", _hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", {
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return $options.filterItems(''), $options.changeValue();
        })
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.noData), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.clear]])], 6), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.active]])];
    }),
    _: 3
  })]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["TransitionGroup"], {
    onBeforeEnter: $options.beforeEnter,
    onEnter: $options.enter,
    onLeave: $options.leave
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [$props.success ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.successText), 1)])) : $props.danger ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.dangerText), 1)])) : $props.warning ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_12, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.warningText), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.descriptionText ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_13, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_14, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.descriptionText), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 1
  }, 8, ["onBeforeEnter", "onEnter", "onLeave"])], 6);
}
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelect.vue?vue&type=template&id=0e27c202&lang=html

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("25a2");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("f241");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d1ce");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("ef62");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a1a1");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("bf56");

// CONCATENATED MODULE: ./src/utils/index.js








/* harmony default export */ var utils = ({
  randomId: function randomId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
  },
  insertBody: function insertBody(elx, parent) {
    var bodyx = parent ? parent : document.body;
    bodyx.insertBefore(elx, bodyx.firstChild);
  },
  removeBody: function removeBody(element, parent) {
    var bodyx = parent ? parent : document.body;
    bodyx.removeChild(element);
  },
  changePosition: function changePosition(elx, content, conditional) {
    var topx = 0;
    var leftx = 0;
    var widthx = 0;
    var scrollTopx = window.pageYOffset || document.documentElement.scrollTop;

    if (elx.getBoundingClientRect().top + 300 >= window.innerHeight) {
      setTimeout(function () {
        if (conditional) {
          topx = elx.getBoundingClientRect().top - content.clientHeight + scrollTopx;
        } else {
          topx = elx.getBoundingClientRect().top - content.clientHeight + elx.clientHeight + scrollTopx;
        }
      }, 1);
    } else {
      topx = conditional ? elx.getBoundingClientRect().top + elx.clientHeight + scrollTopx + 5 : elx.getBoundingClientRect().top + scrollTopx;
    }

    leftx = elx.getBoundingClientRect().left;
    widthx = elx.offsetWidth;
    var cords = {
      left: "".concat(leftx, "px"),
      top: "".concat(topx, "px"),
      width: "".concat(widthx, "px")
    };
    return cords;
  }
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsSelect/vsSelect.vue?vue&type=script&lang=js





























/* harmony default export */ var vsSelectvue_type_script_lang_js = ({
  name: "VsSelect",
  props: {
    modelValue: {},
    noData: {
      default: "No data available",
      type: String
    },
    maxSelected: {
      default: null,
      type: [Number, String]
    },
    autocomplete: {
      default: false,
      type: Boolean
    },
    color: {
      default: "primary",
      type: String
    },
    multiple: {
      default: false,
      type: Boolean
    },
    label: {
      default: null,
      type: [String]
    },
    success: {
      default: false,
      type: Boolean
    },
    danger: {
      default: false,
      type: Boolean
    },
    warning: {
      default: false,
      type: Boolean
    },
    successText: {
      default: null,
      type: String
    },
    dangerText: {
      default: null,
      type: String
    },
    warningText: {
      default: null,
      type: String
    },
    descriptionText: {
      default: null,
      type: String
    },
    iconPack: {
      default: "material-icons",
      type: String
    },
    icon: {
      default: "keyboard_arrow_down",
      type: String
    },
    iconClear: {
      default: "close",
      type: String
    },
    width: {
      default: null,
      type: String
    }
  },
  data: function data() {
    return {
      modelValueFilter: "",
      active: false,
      modelValuex: "",
      clear: false,
      scrollx: false,
      cords: {},
      filterx: false,
      childrenItems: []
    };
  },
  computed: {
    activeBtnClear: function activeBtnClear() {
      return this.autocomplete && this.filterx;
    },
    getWidth: function getWidth() {
      return this.width ? "width:".concat(this.width, ";") : null;
    },
    parent: function parent() {
      return this;
    },
    attrs: function attrs() {
      var _this = this;

      return _objectSpread2(_objectSpread2({}, this.$attrs), {}, {
        name: this.$attrs.name + '_label',
        onBlur: function onBlur(event) {
          if (_this.autocomplete && event.relatedTarget ? !event.relatedTarget.closest(".vs-select--options") : false) {
            _this.closeOptions();
          }

          _this.$emit("blur", event);
        },
        onFocus: function onFocus(event) {
          _this.$emit("focus", event);

          if (event.keyCode ? event.keyCode : event.which) {
            _this.focus();
          }
        },
        onMouseup: function onMouseup() {
          _this.focus();
        },
        onInput: function onInput(event) {
          if (_this.autocomplete) {
            _this.$emit("input-change", event);
          }
        },
        onKeyup: function onKeyup(event) {
          if (event.key == "ArrowDown" || event.key == "ArrowUp") {
            event.preventDefault();

            var childrens = _this.childrenItems.filter(function (item) {
              return item.visible;
            });

            childrens[0].$el.querySelector(".vs-select--item").focus();
          } else {
            if (_this.autocomplete) {
              _this.filterItems(event.target.value);
            }
          }

          _this.childrenItems.map(function (item) {
            item.modelValueInputx = _this.$refs.inputselect.value;
          });
        }
      });
    }
  },
  watch: {
    modelValue: function modelValue(event) {
      this.modelValuex = this.modelValue;
      this.$emit("change", event);
    },
    active: function active() {
      var _this2 = this;

      this.$nextTick(function () {
        if (_this2.active) {
          utils.insertBody(_this2.$refs.vsSelectOptions);
          setTimeout(function () {
            _this2.childrenItems.forEach(function (item) {
              if (item.focusValue) {
                item.focusValue();
              }
            });

            if (_this2.$refs.ulx.scrollHeight >= 260) _this2.scrollx = true;
          }, 100);
        } else {
          var _document$getElements = document.getElementsByTagName("body"),
              _document$getElements2 = _slicedToArray(_document$getElements, 1),
              parent = _document$getElements2[0];

          parent.removeChild(_this2.$refs.vsSelectOptions);
        }
      });
    }
  },
  mounted: function mounted() {
    this.$refs.inputselect.value = this.modelValue;
    this.changeValue();

    if (this.active) {
      utils.insertBody(this.$refs.vsSelectOptions);
    }
  },
  beforeUnmount: function beforeUnmount() {
    var _document$getElements3 = document.getElementsByTagName("body"),
        _document$getElements4 = _slicedToArray(_document$getElements3, 1),
        parent = _document$getElements4[0];

    if (this.active) {
      this.closeOptions();
    }

    if (parent && this.$refs.vsSelectOptions && this.$refs.vsSelectOptions.parentNode === parent) {
      parent.removeChild(this.$refs.vsSelectOptions);
    }
  },
  updated: function updated() {
    if (!this.active) {
      this.changeValue();
    }
  },
  methods: {
    clearValue: function clearValue() {
      this.focus();
      this.filterItems("");
      this.changeValue();
    },
    addMultiple: function addMultiple(modelValue) {
      var currentValues = this.modelValue ? this.modelValue : [];

      if (currentValues.includes(modelValue)) {
        currentValues.splice(currentValues.indexOf(modelValue), 1);
        this.$emit('update:modelValue', currentValues);
        this.changeValue();

        if (this.autocomplete) {
          this.$refs.inputselect.focus();
        }
      } else {
        if (this.autocomplete) {
          currentValues.push(modelValue);
          this.$emit('update:modelValue', currentValues);
          this.filterItems("");
          this.changeValue(); // this.$refs.inputselect.value += ','

          this.$refs.inputselect.focus();
        } else {
          currentValues.push(modelValue);
          this.$emit('update:modelValue', currentValues);
          this.changeValue();
        }
      }
    },
    filterItems: function filterItems(modelValue) {
      var _this3 = this;

      if (modelValue) {
        this.filterx = true;
      } else {
        this.filterx = false;
      }

      var items = this.childrenItems;
      /*items.forEach(item => {
        if (item.childrenItems.length > 0) {
          items = [...items, ...item.childrenItems];
        }
      });*/

      items.map(function (item) {
        if (!("text" in item)) return;
        var text = item.text;

        if (_this3.multiple) {
          var modelValuesx = modelValue.split(",");
          modelValuesx.forEach(function (modelValue_multi) {
            if (text.toUpperCase().indexOf(modelValue_multi.toUpperCase()) == -1) {
              item.visible = false;
            } else {
              item.visible = true;
            }
          });
        } else {
          if (text.toUpperCase().indexOf(modelValue.toUpperCase()) == -1) {
            item.visible = false;
          } else {
            item.visible = true;
          }
        }
      });
      var lengthx = items.filter(function (item) {
        return item.visible;
      });

      if (lengthx.length == 0) {
        this.clear = true;
      } else {
        this.clear = false;
      }

      this.$nextTick(function () {
        _this3.cords = _this3.changePosition();
      });
    },
    changeValue: function changeValue() {
      this.filterx = false;

      if (this.multiple) {
        var modelValues = this.modelValue ? this.modelValue : [];
        var options = this.childrenItems;
        /*options.forEach(item => {
          if (item.childrenItems.length > 0) {
            options = [...options, ...item.childrenItems];
          }
        });
        options = options.filter(o => !o.childrenItems);*/

        var optionsValues = [];
        modelValues.forEach(function (item) {
          options.forEach(function (item_option) {
            if (item_option.modelValue == item) {
              var text = item_option.text;
              text = text.replace("check_circle", "");
              optionsValues.push(text.trim());
            }
          });
        });
        this.$refs.inputselect.value = optionsValues.toString();
      } else {
        if (this.$refs.inputselect) {
          this.$refs.inputselect.value = this.modelValuex;
        }
      }
    },
    focus: function focus() {
      var _this4 = this;

      this.active = true;
      document.addEventListener('click', this.clickBlur);
      this.setLabelClass(this.$refs.inputSelectLabel, true);
      var inputx = this.$refs.inputselect;

      if (this.autocomplete && this.multiple) {
        setTimeout(function () {
          if (inputx.modelValue) {
            _this4.$refs.inputselect.value = inputx.modelValue += ",";
          }

          inputx.selectionStart = inputx.selectionEnd = 10000;
        }, 10);
      } else if (this.autocomplete && !this.multiple) {
        this.$refs.inputselect.select();
      }

      if (!this.autocomplete) {
        if (this.multiple ? this.modelValue.length == 0 : !this.modelValue || this.multiple) {
          setTimeout(function () {
            var el = _this4.childrenItems[0].$el.querySelector(".vs-select--item");

            if (el) el.focus();
          }, 50);
        }
      }

      this.$nextTick(function () {
        _this4.cords = _this4.changePosition();
      });
    },
    clickBlur: function clickBlur(event) {
      if (event.target === this.$refs.inputselect) {
        return;
      }

      var closestx = event.target.closest(".vs-select--option");

      if (!closestx) {
        this.closeOptions();

        if (this.autocomplete) {
          this.filterItems("");
        }

        this.changeValue();
      }
    },
    closeOptions: function closeOptions() {
      this.active = false;
      this.setLabelClass(this.$refs.inputSelectLabel, false);
      document.removeEventListener("click", this.clickBlur);
    },
    changePosition: function changePosition() {
      var elx = this.$refs.inputselect;
      var content = this.$refs.vsSelectOptions;
      var conditional = this.autocomplete;
      var topx = 0;
      var leftx = 0;
      var widthx = 0;
      var scrollTopx = window.pageYOffset || document.documentElement.scrollTop;

      if (elx.getBoundingClientRect().top + content.scrollHeight + 20 >= window.innerHeight) {
        topx = elx.getBoundingClientRect().top + elx.clientHeight + scrollTopx - content.scrollHeight;

        if (conditional) {
          topx = topx - elx.clientHeight - 5;
        }
      } else {
        topx = conditional ? elx.getBoundingClientRect().top + elx.clientHeight + scrollTopx + 5 : elx.getBoundingClientRect().top + scrollTopx;
      }

      leftx = elx.getBoundingClientRect().left;
      widthx = elx.offsetWidth;
      var cords = {
        left: "".concat(leftx, "px"),
        top: "".concat(topx, "px"),
        width: "".concat(widthx, "px")
      };
      return cords;
    },
    beforeEnter: function beforeEnter(el) {
      el.style.height = 0;
    },
    enter: function enter(el, done) {
      var h = el.scrollHeight;
      el.style.height = h + "px";
      done();
    },
    leave: function leave(el) {
      el.style.height = 0 + "px";
    },
    setLabelClass: function setLabelClass(label, focusing) {
      if (!label) {
        return;
      }

      if (focusing) {
        label.classList.add("input-select-label-" + this.color + "--active");
        return;
      }

      label.classList.remove("input-select-label-" + this.color + "--active");
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelect.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelect.vue





const vsSelect_exports_ = /*#__PURE__*/exportHelper_default()(vsSelectvue_type_script_lang_js, [['render',vsSelectvue_type_template_id_0e27c202_lang_html_render]])

/* harmony default export */ var vsSelect = (vsSelect_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsSelect/vsSelectItem.vue?vue&type=template&id=82451174&lang=html

var vsSelectItemvue_type_template_id_82451174_lang_html_hoisted_1 = ["data-text"];
var vsSelectItemvue_type_template_id_82451174_lang_html_hoisted_2 = ["disabled"];
var vsSelectItemvue_type_template_id_82451174_lang_html_hoisted_3 = ["innerHTML"];
function vsSelectItemvue_type_template_id_82451174_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return _ctx.parent ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    key: 0
  }, _ctx.$attrs, {
    "data-text": $props.text,
    class: "vs-component"
  }), [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])($options.attrs, {
    ref: "item",
    disabled: $props.disabled,
    style: $options.styles,
    class: [{
      'activex': _ctx.parent.multiple ? $options.getValue.indexOf($props.modelValue) != -1 : $options.getValue == $props.modelValue,
      'con-icon': _ctx.parent.multiple,
      'disabledx': $options.disabledx
    }, "vs-select--item"],
    type: "button",
    name: "button",
    onKeydown: [_cache[0] || (_cache[0] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function () {
      return $options.backspace && $options.backspace.apply($options, arguments);
    }, ["prevent"]), ["backspace"])), _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function ($event) {
      return $options.navigateOptions('next');
    }, ["prevent"]), ["down"])), _cache[2] || (_cache[2] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function ($event) {
      return $options.navigateOptions('prev');
    }, ["prevent"]), ["up"])), _cache[3] || (_cache[3] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function ($event) {
      return $options.clickOption();
    }, ["prevent"]), ["enter"]))]
  }), [_ctx.parent.multiple ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_vs_icon, {
    key: 0,
    class: "icon-item vs-select--item-icon",
    icon: "check_circle"
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    innerHTML: _ctx.getText
  }, null, 8, vsSelectItemvue_type_template_id_82451174_lang_html_hoisted_3)], 16, vsSelectItemvue_type_template_id_82451174_lang_html_hoisted_2)], 16, vsSelectItemvue_type_template_id_82451174_lang_html_hoisted_1)), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.visible]]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true);
}
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectItem.vue?vue&type=template&id=82451174&lang=html

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__("f304");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.regexp.dot-all.js
var es_regexp_dot_all = __webpack_require__("c4cd");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.regexp.sticky.js
var es_regexp_sticky = __webpack_require__("d5e3");

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsSelect/vsSelectItem.vue?vue&type=script&lang=js


























/* harmony default export */ var vsSelectItemvue_type_script_lang_js = ({
  name: 'VsSelectItem',
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: {
      default: null
    },
    text: {
      default: null
    }
  },
  data: function data() {
    return {
      hoverx: false,
      visible: true,
      getText: null,
      modelValueInputx: '',
      parent: null
    };
  },
  computed: {
    disabledx: function disabledx() {
      if (this.parent.multiple) {
        if (this.isActive) {
          return false;
        } else {
          return this.parent.maxSelected == this.parent.modelValue.length;
        }
      } else {
        return false;
      }
    },
    isActive: function isActive() {
      return this.parent.multiple ? this.getValue.indexOf(this.modelValue) != -1 : this.getValue == this.modelValue;
    },
    attrs: function attrs() {
      var _this2 = this;

      return _objectSpread2(_objectSpread2({}, this.$attrs), {}, {
        onBlur: function onBlur(event) {
          if (event.relatedTarget ? !event.relatedTarget.closest('.vs-select--options') : true) {
            _this2.parent.closeOptions();
          }
        },
        onClick: function onClick(event) {
          return _this2.clickOption(event);
        },
        onMouseover: function onMouseover(event) {
          _this2.$emit('mouseover', event);

          _this2.changeHover(true);
        },
        onMouseout: function onMouseout(event) {
          _this2.$emit('mouseover', event);

          _this2.changeHover(false);
        }
      });
    },
    styles: function styles() {
      return {
        background: this.isActive ? utils_color.getColor(this.parent.color, .1) : null,
        color: this.isActive ? utils_color.getColor(this.parent.color, 1) : null,
        fontWeight: this.isActive ? 'bold' : null
      };
    },
    getValue: function getValue() {
      return this.parent.modelValue;
    }
  },
  watch: {
    'parent.active': function parentActive() {
      var _this3 = this;

      this.$nextTick(function () {
        if (_this3.parent.multiple ? _this3.getValue.indexOf(_this3.modelValue) != -1 : _this3.getValue == _this3.modelValue) {
          _this3.$emit('update:isSelected', true);

          _this3.getText = _this3.text;

          _this3.putValue();
        } else {
          _this3.$emit('update:isSelected', false);

          _this3.getText = _this3.text;

          _this3.putValue();
        }
      });
    },
    modelValueInputx: function modelValueInputx() {
      if (this.visible) {
        var modelValueInputx = this.modelValueInputx.split(',');

        if (modelValueInputx[modelValueInputx.length - 1] == '') {
          this.getText = this.text;
          return;
        }

        var modelValuex = modelValueInputx[modelValueInputx.length - 1];
        var re = new RegExp(modelValuex, "i");

        if (this.text.toUpperCase().indexOf(modelValuex.toUpperCase()) == 0) {
          modelValuex = this.MaysPrimera(modelValuex);
        }

        var text = this.text.replace(re, "<span class=\"searchx\">".concat(modelValuex, "</span>"));
        this.getText = text;
      } else {
        this.getText = this.text;
      }
    }
  },
  created: function created() {
    var _this4 = this;

    this.searchParent(this, function (parent) {
      parent.childrenItems.push(_this4);
      _this4.parent = parent;

      _this4.putValue();

      _this4.$nextTick(function () {
        if (_this4.parent.multiple ? _this4.getValue.indexOf(_this4.modelValue) != -1 : _this4.getValue == _this4.modelValue) {
          _this4.$emit('update:isSelected', true);

          _this4.getText = _this4.text;

          _this4.putValue();
        } else {
          _this4.$emit('update:isSelected', false);

          _this4.getText = _this4.text;

          _this4.putValue();
        }
      });
    });
  },
  updated: function updated() {
    this.putValue();
  },
  methods: {
    searchParent: function searchParent(_this, callback) {
      var parent = _this.$parent; //if (!(parent.$el && parent.$el.className)) return

      if (!Object.prototype.hasOwnProperty.call(parent, 'childrenItems')) {
        this.searchParent(parent, callback);
      } else {
        callback(parent);
      }
    },
    changeHover: function changeHover(booleanx) {
      this.hoverx = booleanx;
    },
    MaysPrimera: function MaysPrimera(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    backspace: function backspace() {
      if (this.parent.autocomplete) {
        var modelValueInput = this.parent.$refs.inputselect.modelValue;
        this.parent.$refs.inputselect.modelValue = modelValueInput.substr(0, modelValueInput.length - 1);
        this.parent.$refs.inputselect.focus();
      }
    },
    navigateOptions: function navigateOptions(orientation) {
      var orientationObject = 'nextSibling',
          lengthx = 0;

      function getNextLi(li, orientationObject) {
        if (li && li.localName == 'li') {
          var lix = li[orientationObject];

          if (li.style) {
            if (li.style.display == 'none') {
              return getNextLi(lix, orientationObject);
            } else {
              return li;
            }
          } else {
            return li;
          }
        } else {
          return false;
        }
      }

      var children = this.parent.childrenItems;
      children.forEach(function (item) {
        if (item.childrenItems.length > 0) {
          children = [].concat(_toConsumableArray(children), _toConsumableArray(item.childrenItems));
        }
      });
      children = children.filter(function (item) {
        return item.childrenItems.length == 0 && item.$el.localName != 'span';
      });

      if (orientation == 'prev') {
        orientationObject = 'previousSibling';
        lengthx = children.length;
      }

      var nextElement = getNextLi(this.$el[orientationObject], orientationObject);

      if (nextElement) {
        nextElement.querySelector('.vs-select--item').focus();
      } else {
        if (lengthx === children.length) lengthx--;
        getNextLi(children[lengthx == 0 ? 1 : lengthx].$el, orientationObject).querySelector('.vs-select--item').focus();
      }
    },
    focusValue: function focusValue(index) {
      var _this5 = this;

      if (this.parent.multiple ? this.parent.modelValue.indexOf(this.modelValue) != -1 : this.modelValue == this.parent.modelValue) {
        if (!this.parent.autocomplete) {
          setTimeout(function () {
            _this5.$refs.item.focus();
          }, 50);
        }
      } else if (index === 0) {
        if (!this.parent.autocomplete) {
          setTimeout(function () {
            _this5.$refs.item.focus();
          }, 50);
        }
      }
    },
    putValue: function putValue() {
      if (this.modelValue == this.parent.modelValue) {
        this.parent.modelValuex = this.text;
      }
    },
    clickOption: function clickOption() {
      if (this.disabledx) {
        return;
      }

      var text = this.text;

      if (!this.parent.multiple) {
        this.parent.active = false;
        document.removeEventListener('click', this.parent.clickBlur);
        this.parent.modelValuex = text;
        this.parent.$emit('update:modelValue', this.modelValue);
        this.parent.changeValue();
      } else if (this.parent.multiple) {
        this.parent.modelValuex = text;
        this.parent.addMultiple(this.modelValue);
      }

      this.parent.childrenItems.map(function (item) {
        item.modelValueInputx = '';
      });
    },
    // methods colors
    isColor: function isColor() {
      return utils_color.isColor(this.color);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectItem.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectItem.vue





const vsSelectItem_exports_ = /*#__PURE__*/exportHelper_default()(vsSelectItemvue_type_script_lang_js, [['render',vsSelectItemvue_type_template_id_82451174_lang_html_render]])

/* harmony default export */ var vsSelectItem = (vsSelectItem_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsSelect/vsSelectGroup.vue?vue&type=template&id=9768f064

var vsSelectGroupvue_type_template_id_9768f064_hoisted_1 = {
  class: "vs-select-group"
};
var vsSelectGroupvue_type_template_id_9768f064_hoisted_2 = {
  key: 0
};
function vsSelectGroupvue_type_template_id_9768f064_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsSelectGroupvue_type_template_id_9768f064_hoisted_1, [!$options.filterx ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("h4", vsSelectGroupvue_type_template_id_9768f064_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.title), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")]);
}
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectGroup.vue?vue&type=template&id=9768f064

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsSelect/vsSelectGroup.vue?vue&type=script&lang=js
/* harmony default export */ var vsSelectGroupvue_type_script_lang_js = ({
  name: 'VsSelectGroup',
  props: {
    title: {
      default: 'Group',
      type: String
    }
  },
  data: function data() {
    return {
      activeTitle: true,
      //childrenItems: [],
      parent: null
    };
  },
  created: function created() {
    var _this2 = this;

    this.searchParent(this, function (parent) {
      _this2.parent = parent;
    });
  },
  computed: {
    filterx: function filterx() {
      return this.parent.filterx;
    }
  },
  methods: {
    focusValue: function focusValue(index) {
      this.childrenItems[0].focusValue(index);
    },
    searchParent: function searchParent(_this, callback) {
      var parent = _this.$parent; //if (!(parent.$el && parent.$el.className)) return

      if (!Object.prototype.hasOwnProperty.call(parent, 'childrenItems')) {
        this.searchParent(parent, callback);
      } else {
        callback(parent);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectGroup.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectGroup.vue





const vsSelectGroup_exports_ = /*#__PURE__*/exportHelper_default()(vsSelectGroupvue_type_script_lang_js, [['render',vsSelectGroupvue_type_template_id_9768f064_render]])

/* harmony default export */ var vsSelectGroup = (vsSelectGroup_exports_);
// CONCATENATED MODULE: ./src/components/vsSelect/index.js





/* harmony default export */ var components_vsSelect = (function (Vue) {
  Vue.component(vsSelect.name, vsSelect);
  Vue.component(vsSelectItem.name, vsSelectItem);
  Vue.component(vsSelectGroup.name, vsSelectGroup);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsSwitch/vsSwitch.vue?vue&type=template&id=019b3f90&lang=html

var vsSwitchvue_type_template_id_019b3f90_lang_html_hoisted_1 = ["disabled", "value"];

var vsSwitchvue_type_template_id_019b3f90_lang_html_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "vs-circle-switch vs-switch--circle"
}, null, -1);

function vsSwitchvue_type_template_id_019b3f90_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("button", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])(_ctx.$attrs, {
    class: [["vs-switch-".concat($props.color), {
      'vs-switch-active': $options.isChecked || _ctx.$attrs.checked
    }], "vs-component vs-switch"],
    style: $options.style
  }), [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])($options.attrs, {
    ref: "inputCheckbox",
    disabled: _ctx.$attrs.disabled,
    value: $props.modelValue,
    class: "input-switch vs-switch--input",
    type: "checkbox"
  }), null, 16, vsSwitchvue_type_template_id_019b3f90_lang_html_hoisted_1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    ref: "on",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'active-text': $options.isChecked || _ctx.$attrs.checked
    }, "text-on text-switch vs-switch--text"])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "on"), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, {
    "icon-pack": $props.iconPack,
    icon: $props.vsIconOn || $props.vsIcon,
    class: "icons-switch vs-switch--icon"
  }, null, 8, ["icon-pack", "icon"])], 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    ref: "off",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'active-text': !$options.isChecked && !_ctx.$attrs.checked
    }, "text-off text-switch vs-switch--text"])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "off"), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, {
    "icon-pack": $props.iconPack,
    icon: $props.vsIconOff || $props.vsIcon,
    class: "icons-switch vs-switch--icon"
  }, null, 8, ["icon-pack", "icon"])], 2), vsSwitchvue_type_template_id_019b3f90_lang_html_hoisted_2], 16);
}
// CONCATENATED MODULE: ./src/components/vsSwitch/vsSwitch.vue?vue&type=template&id=019b3f90&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsSwitch/vsSwitch.vue?vue&type=script&lang=js










/* harmony default export */ var vsSwitchvue_type_script_lang_js = ({
  name: 'VsSwitch',
  inheritAttrs: false,
  props: {
    modelValue: {},
    color: {
      default: 'primary',
      type: String
    },
    vsIcon: {
      default: null,
      type: String
    },
    vsIconOn: {
      default: null,
      type: String
    },
    vsIconOff: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    vsValue: {}
  },
  data: function data() {
    return {
      widthx: 42,
      checkboxClicked: false
    };
  },
  computed: {
    style: function style() {
      return {
        background: this.modelValue ? utils_color.getColor(this.color, 1) : null,
        width: "".concat(this.widthx, "px")
      };
    },
    attrs: function attrs() {
      var _this = this;

      return _objectSpread2(_objectSpread2({}, this.$attrs), {}, {
        onInput: function onInput(evt) {
          evt.stopPropagation();

          _this.toggleValue(evt);
        }
      });
    },
    isChecked: function isChecked() {
      return this.isArrayx() ? this.isArrayIncludes() : this.modelValue;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      var w = _this2.$refs.on.clientWidth > _this2.$refs.off.clientWidth ? _this2.$refs.on.clientWidth : _this2.$refs.off.clientWidth;
      _this2.widthx = w + 24;
    });
  },
  methods: {
    toggleValue: function toggleValue(evt) {
      if (Array.isArray(this.modelValue)) {
        this.setArray(evt);
      } else {
        this.$emit('update:modelValue', !this.modelValue);
        this.$emit('change', evt);
      }
    },
    setArray: function setArray(evt) {
      var modelValue = this.modelValue.slice(0); // Copy Array.

      if (this.isArrayIncludes()) {
        modelValue.splice(modelValue.indexOf(this.vsValue), 1); // delete modelValue

        this.$emit('update:modelValue', modelValue);
        this.$emit('change', evt);
      } else {
        modelValue.push(this.vsValue); // add modelValue new

        this.$emit('update:modelValue', modelValue);
        this.$emit('change', evt);
      }
    },
    isArrayIncludes: function isArrayIncludes() {
      var modelx = this.modelValue;
      var modelValue = this.vsValue;
      return modelx.includes(modelValue);
    },
    isArrayx: function isArrayx() {
      return Array.isArray(this.modelValue);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsSwitch/vsSwitch.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsSwitch/vsSwitch.vue





const vsSwitch_exports_ = /*#__PURE__*/exportHelper_default()(vsSwitchvue_type_script_lang_js, [['render',vsSwitchvue_type_template_id_019b3f90_lang_html_render]])

/* harmony default export */ var vsSwitch = (vsSwitch_exports_);
// CONCATENATED MODULE: ./src/components/vsSwitch/index.js



/* harmony default export */ var components_vsSwitch = (function (Vue) {
  Vue.component(vsSwitch.name, vsSwitch);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsCheckBox/vsCheckBox.vue?vue&type=template&id=6e40fc40&lang=html

var vsCheckBoxvue_type_template_id_6e40fc40_lang_html_hoisted_1 = ["checked", "value"];
var vsCheckBoxvue_type_template_id_6e40fc40_lang_html_hoisted_2 = {
  class: "con-slot-label"
};
function vsCheckBoxvue_type_template_id_6e40fc40_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-checkbox-".concat($props.color), "vs-checkbox-".concat($props.size), _ctx.$attrs.class], "vs-component con-vs-checkbox"]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.$attrs.style)
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])(_ctx.$attrs, {
    checked: $options.isChecked || _ctx.$attrs.checked,
    value: $props.modelValue,
    onChange: _cache[0] || (_cache[0] = function () {
      return $options.toggleValue && $options.toggleValue.apply($options, arguments);
    }),
    type: "checkbox",
    class: "vs-checkbox--input"
  }), null, 16, vsCheckBoxvue_type_template_id_6e40fc40_lang_html_hoisted_1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.style),
    class: "checkbox_x vs-checkbox"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.style_check),
    class: "vs-checkbox--check"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, {
    icon: $props.icon,
    "icon-pack": $props.iconPack,
    class: "vs-checkbox--icon"
  }, null, 8, ["icon", "icon-pack"])], 4)], 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", vsCheckBoxvue_type_template_id_6e40fc40_lang_html_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")])], 6);
}
// CONCATENATED MODULE: ./src/components/vsCheckBox/vsCheckBox.vue?vue&type=template&id=6e40fc40&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsCheckBox/vsCheckBox.vue?vue&type=script&lang=js











/* harmony default export */ var vsCheckBoxvue_type_script_lang_js = ({
  name: 'VsCheckbox',
  //inheritAttrs: false,
  props: {
    color: {
      default: 'primary',
      type: String
    },
    modelValue: {},
    icon: {
      default: 'check',
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    vsValue: {
      type: [Boolean, Array, String, Number, Object],
      default: false
    },
    size: {
      default: 'default',
      type: String
    }
  },
  computed: {
    style_check: function style_check() {
      return {
        background: this.isChecked ? utils_color.getColor(this.color, 1) : null
      };
    },
    style: function style() {
      return {
        border: "2px solid ".concat(this.isChecked ? utils_color.getColor(this.color, 1) : 'rgb(180, 180, 180)')
      };
    },
    isChecked: function isChecked() {
      return this.isArrayx() ? this.isArrayIncludes() : this.modelValue;
    }
  },
  methods: {
    giveColor: function giveColor(color) {
      return utils_color.rColor(color);
    },
    toggleValue: function toggleValue(evt) {
      if (this.isArrayx()) {
        this.setArray();
      } else if (typeof this.vsValue == 'string') {
        this.setValueString();
      } else {
        this.$emit('update:modelValue', !this.modelValue);
        this.$emit('change', evt);
      }
    },
    setArray: function setArray() {
      // Copy Array
      var modelValue = this.modelValue.slice(0);

      if (this.isArrayIncludes()) {
        modelValue.splice(modelValue.indexOf(this.vsValue), 1);
        this.$emit('update:modelValue', modelValue);
        this.$emit('change', modelValue);
      } else {
        modelValue.push(this.vsValue);
        this.$emit('update:modelValue', modelValue);
        this.$emit('change', modelValue);
      }
    },
    setValueString: function setValueString() {
      if (this.modelValue == this.vsValue) {
        this.$emit('update:modelValue', null);
        this.$emit('change', null);
      } else {
        this.$emit('update:modelValue', this.vsValue);
        this.$emit('change', this.vsValue);
      }
    },
    isArrayIncludes: function isArrayIncludes() {
      var modelx = this.modelValue;
      var modelValue = this.vsValue;
      return modelx.includes(modelValue);
    },
    isArrayx: function isArrayx() {
      return Array.isArray(this.modelValue);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsCheckBox/vsCheckBox.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsCheckBox/vsCheckBox.vue





const vsCheckBox_exports_ = /*#__PURE__*/exportHelper_default()(vsCheckBoxvue_type_script_lang_js, [['render',vsCheckBoxvue_type_template_id_6e40fc40_lang_html_render]])

/* harmony default export */ var vsCheckBox = (vsCheckBox_exports_);
// CONCATENATED MODULE: ./src/components/vsCheckBox/index.js



/* harmony default export */ var components_vsCheckBox = (function (Vue) {
  Vue.component(vsCheckBox.name, vsCheckBox);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsRadio/vsRadio.vue?vue&type=template&id=06a95bfe&lang=html

var vsRadiovue_type_template_id_06a95bfe_lang_html_hoisted_1 = ["checked", "value", "name"];
var vsRadiovue_type_template_id_06a95bfe_lang_html_hoisted_2 = {
  class: "vs-radio"
};
var vsRadiovue_type_template_id_06a95bfe_lang_html_hoisted_3 = {
  class: "vs-radio--label"
};
function vsRadiovue_type_template_id_06a95bfe_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("label", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-radio-".concat($props.color), this.$attrs.class], "vs-component con-vs-radio"]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(this.$attrs.style)
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])($options.attrs, {
    checked: $options.isChecked,
    value: $props.modelValue,
    name: $props.vsName || $props.modelValue,
    type: "radio",
    class: "vs-radio--input"
  }), null, 16, vsRadiovue_type_template_id_06a95bfe_lang_html_hoisted_1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", vsRadiovue_type_template_id_06a95bfe_lang_html_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styles),
    class: "vs-radio--borde"
  }, null, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleCircle),
    class: "vs-radio--circle"
  }, null, 4)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", vsRadiovue_type_template_id_06a95bfe_lang_html_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")])], 6);
}
// CONCATENATED MODULE: ./src/components/vsRadio/vsRadio.vue?vue&type=template&id=06a95bfe&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsRadio/vsRadio.vue?vue&type=script&lang=js


/* harmony default export */ var vsRadiovue_type_script_lang_js = ({
  name: 'VsRadio',
  //inheritAttrs:false,
  props: {
    modelValue: {},
    vsValue: {},
    vsName: {},
    color: {
      default: 'primary',
      type: String
    }
  },
  computed: {
    attrs: function attrs() {
      var _this = this;

      return _objectSpread2(_objectSpread2({}, this.$attrs), {}, {
        class: '',
        style: '',
        onInput: function onInput() {
          return _this.$emit('update:modelValue', _this.vsValue);
        } //click: () => this.$emit('update:modelValue', this.vsValue)

      });
    },

    /*attrs(){
      let attrsx = JSON.parse(JSON.stringify(this.$attrs))
      return {
        attrsx
      }
    },*/
    isChecked: function isChecked() {
      return this.vsValue == this.modelValue;
    },
    styles: function styles() {
      return {
        'border': "2px solid ".concat(this.isChecked ? utils_color.getColor(this.color, 1) : 'rgb(200, 200, 200)')
      };
    },
    styleCircle: function styleCircle() {
      return {
        'background': utils_color.getColor(this.color, 1),
        'box-shadow': "0px 3px 12px 0px ".concat(utils_color.getColor(this.color, .4))
      };
    }
  },
  methods: {
    giveColor: function giveColor(color, opacity) {
      return utils_color.rColor(color, opacity);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsRadio/vsRadio.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsRadio/vsRadio.vue





const vsRadio_exports_ = /*#__PURE__*/exportHelper_default()(vsRadiovue_type_script_lang_js, [['render',vsRadiovue_type_template_id_06a95bfe_lang_html_render]])

/* harmony default export */ var vsRadio = (vsRadio_exports_);
// CONCATENATED MODULE: ./src/components/vsRadio/index.js



/* harmony default export */ var components_vsRadio = (function (Vue) {
  Vue.component(vsRadio.name, vsRadio);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsInput/vsInput.vue?vue&type=template&id=3bbb6341&lang=html

var vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_1 = {
  class: "vs-con-input"
};
var vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_2 = ["autofocus", "value", "type"];
var vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_3 = {
  key: "success",
  class: "con-text-validation vs-input--text-validation"
};
var vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_4 = {
  class: "span-text-validation span-text-validation-success vs-input--text-validation-span"
};
var vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_5 = {
  key: "danger",
  class: "con-text-validation span-text-validation-danger vs-input--text-validation-span"
};
var vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_6 = {
  class: "span-text-validation"
};
var vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_7 = {
  key: "warning",
  class: "con-text-validation span-text-validation-warning vs-input--text-validation-span"
};
var vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_8 = {
  class: "span-text-validation"
};
var vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_9 = {
  key: "description",
  class: "con-text-validation span-text-validation vs-input--text-validation-span"
};
var vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_10 = {
  class: "span-text-validation"
};
function vsInputvue_type_template_id_3bbb6341_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    ref: "coninput",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])([$options.styleLabel, _ctx.$attrs.style]),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-input-".concat($props.color), {
      'isFocus': _ctx.isFocus,
      'input-icon-validate-success': $props.success,
      'input-icon-validate-danger': $props.danger,
      'input-icon-validate-warning': $props.warning,
      'is-label-placeholder': $props.labelPlaceholder
    }, _ctx.$attrs.class], "vs-component vs-con-input-label vs-input"])
  }, [($props.labelPlaceholder ? false : $props.label) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("label", {
    key: 0,
    class: "vs-input--label",
    for: "",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.focusInput && $options.focusInput.apply($options, arguments);
    })
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])($options.attrs, {
    ref: "vsinput",
    style: $options.style,
    autofocus: $props.autofocus,
    class: [[$props.size, {
      'hasValue': $props.modelValue !== '',
      'hasIcon': $props.icon,
      'icon-after-input': $props.iconAfter
    }], "vs-inputx vs-input--input"],
    placeholder: null,
    value: $props.modelValue,
    type: _ctx.$attrs.type ? _ctx.$attrs.type : 'text'
  }), null, 16, vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "placeholderx"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [$options.isValue && ($props.labelPlaceholder || _ctx.$attrs.placeholder) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
        key: 0,
        ref: "spanplaceholder",
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleLabel),
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([[$props.labelPlaceholder && $props.size, $props.size, {
          'vs-placeholder-label': $props.labelPlaceholder
        }], "input-span-placeholder vs-input--placeholder"]),
        onClick: _cache[1] || (_cache[1] = function () {
          return $options.focusInput && $options.focusInput.apply($options, arguments);
        })
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.$attrs.placeholder || $props.labelPlaceholder), 7)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 1
  }), $props.icon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_vs_icon, {
    key: 0,
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'icon-after': $props.iconAfter,
      'icon-no-border': $props.iconNoBorder
    }, "icon-inputx notranslate vs-input--icon"]),
    "icon-pack": $props.iconPack,
    icon: $props.icon,
    onClick: _cache[2] || (_cache[2] = function ($event) {
      $options.focusInput();

      _ctx.$emit('icon-click');
    })
  }, null, 8, ["class", "icon-pack", "icon"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "icon-validate"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [$props.success || $props.danger || $props.warning ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
        key: 0,
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
          'icon-before': $props.iconAfter
        }, "input-icon-validate vs-input--icon-validate"])
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])({
          'icon-before': $props.iconAfter
        }),
        "icon-pack": $props.valIconPack,
        icon: $options.getIcon
      }, null, 8, ["class", "icon-pack", "icon"])], 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 1
  })]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["TransitionGroup"], {
    onBeforeEnter: $options.beforeEnter,
    onEnter: $options.enter,
    onLeave: $options.leave
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [$props.success ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.successText), 1)])) : $props.danger ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.dangerText), 1)])) : $props.warning ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.warningText), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.descriptionText ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", vsInputvue_type_template_id_3bbb6341_lang_html_hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.descriptionText), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 1
  }, 8, ["onBeforeEnter", "onEnter", "onLeave"])], 6);
}
// CONCATENATED MODULE: ./src/components/vsInput/vsInput.vue?vue&type=template&id=3bbb6341&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsInput/vsInput.vue?vue&type=script&lang=js




/* harmony default export */ var vsInputvue_type_script_lang_js = ({
  name: 'VsInput',
  //inheritAttrs: false,
  props: {
    modelValue: {
      default: '',
      type: [String, Number]
    },
    labelPlaceholder: {
      default: null,
      type: [String, Number]
    },
    label: {
      default: null,
      type: [String, Number]
    },
    autofocus: {
      default: false,
      type: [Boolean, String]
    },
    icon: {
      default: null,
      type: String
    },
    iconAfter: {
      default: false,
      type: [Boolean, String]
    },
    iconNoBorder: {
      default: false,
      type: Boolean
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    color: {
      default: 'primary',
      type: String
    },
    success: {
      default: false,
      type: Boolean
    },
    danger: {
      default: false,
      type: Boolean
    },
    warning: {
      default: false,
      type: Boolean
    },
    successText: {
      default: null,
      type: String
    },
    dangerText: {
      default: null,
      type: String
    },
    warningText: {
      default: null,
      type: String
    },
    descriptionText: {
      default: null,
      type: String
    },
    size: {
      default: 'normal',
      type: String
    },
    valIconPack: {
      default: 'material-icons',
      type: String
    },
    valIconSuccess: {
      default: null,
      type: String
    },
    valIconDanger: {
      default: null,
      type: String
    },
    valIconWarning: {
      default: null,
      type: String
    }
  },
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  data: function data() {
    return {
      isFocus: false
    };
  },
  computed: {
    style: function style() {
      return {
        border: "1px solid ".concat(this.isFocus ? utils_color.getColor(this.color, 1) : 'rgba(0, 0, 0,.2)')
      };
    },
    styleLabel: function styleLabel() {
      return {
        color: this.isFocus ? utils_color.getColor(this.color, 1) : null
      };
    },
    attrs: function attrs() {
      var _this = this;

      return _objectSpread2(_objectSpread2({}, this.$attrs), {}, {
        onInput: function onInput(evt) {
          _this.$emit('update:modelValue', evt.target.value);
        },
        onFocus: function onFocus(evt) {
          _this.$emit('focus', evt);

          _this.changeFocus(true);
        },
        onBlur: function onBlur(evt) {
          _this.$emit('blur', evt);

          _this.changeFocus(false);
        }
      });
    },
    isValue: function isValue() {
      return this.labelPlaceholder ? true : !this.modelValue;
    },
    getIcon: function getIcon() {
      return this.danger ? this.valIconDanger : this.warning ? this.valIconWarning : this.success ? this.valIconSuccess : '';
    }
  },
  methods: {
    // animation
    changeFocus: function changeFocus(booleanx) {
      this.isFocus = booleanx;
    },
    beforeEnter: function beforeEnter(el) {
      el.style.height = 0;
    },
    enter: function enter(el, done) {
      var h = el.scrollHeight;
      el.style.height = h + 'px';
      done();
    },
    leave: function leave(el) {
      el.style.height = 0 + 'px';
    },
    focusInput: function focusInput() {
      this.$refs.vsinput.focus();
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsInput/vsInput.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsInput/vsInput.vue





const vsInput_exports_ = /*#__PURE__*/exportHelper_default()(vsInputvue_type_script_lang_js, [['render',vsInputvue_type_template_id_3bbb6341_lang_html_render]])

/* harmony default export */ var vsInput = (vsInput_exports_);
// CONCATENATED MODULE: ./src/components/vsInput/index.js



/* harmony default export */ var components_vsInput = (function (Vue) {
  Vue.component(vsInput.name, vsInput);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsTabs/vsTabs.vue?vue&type=template&id=218201bc&lang=html

var vsTabsvue_type_template_id_218201bc_lang_html_hoisted_1 = {
  class: "con-ul-tabs"
};
var vsTabsvue_type_template_id_218201bc_lang_html_hoisted_2 = ["onClick"];
var vsTabsvue_type_template_id_218201bc_lang_html_hoisted_3 = {
  key: 1
};
var vsTabsvue_type_template_id_218201bc_lang_html_hoisted_4 = ["onClick"];
var vsTabsvue_type_template_id_218201bc_lang_html_hoisted_5 = {
  class: "con-slot-tabs"
};
function vsTabsvue_type_template_id_218201bc_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-tabs-".concat($props.color), "vs-tabs-position-".concat($props.position)], "con-vs-tabs vs-tabs"])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsTabsvue_type_template_id_218201bc_lang_html_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", {
    ref: "ul",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["ul-tabs-".concat($props.alignment)], "ul-tabs vs-tabs--ul"])
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.childrenItems, function (child, index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
      ref: 'li-' + index,
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
        'activeChild': _ctx.childActive == index
      }, "vs-tabs--li"]),
      style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.childActive == index ? $options.styleTab : {}),
      onMouseover: _cache[0] || (_cache[0] = function ($event) {
        return _ctx.hover = true;
      }),
      onMouseout: _cache[1] || (_cache[1] = function ($event) {
        return _ctx.hover = false;
      })
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])($options.allowedAttrs(child.$attrs), {
      style: $options.styleAlignIcon(child.icon),
      class: "vs-tabs--btn",
      type: "button",
      onClick: function onClick($event) {
        return $options.activeChild(index);
      }
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toHandlers"])(child.$attrs)), [child.icon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_vs_icon, {
      key: 0,
      "icon-pack": child.iconPack,
      icon: child.icon,
      color: $props.color,
      class: "vs-tabs--btn-icon"
    }, null, 8, ["icon-pack", "icon", "color"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), child.label ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", vsTabsvue_type_template_id_218201bc_lang_html_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(child.label), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 16, vsTabsvue_type_template_id_218201bc_lang_html_hoisted_2), child.tag ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("button", {
      key: 0,
      class: "vs-tabs--btn-tag",
      onClick: function onClick($event) {
        return $options.clickTag(child);
      }
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, {
      "icon-pack": child.iconPack,
      icon: child.tag,
      color: child.tagColor
    }, null, 8, ["icon-pack", "icon", "color"])], 8, vsTabsvue_type_template_id_218201bc_lang_html_hoisted_4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 38);
  }), 256))], 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.stylex),
    class: "line-vs-tabs"
  }, null, 4)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsTabsvue_type_template_id_218201bc_lang_html_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")])], 2);
}
// CONCATENATED MODULE: ./src/components/vsTabs/vsTabs.vue?vue&type=template&id=218201bc&lang=html

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("9769");

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsIcon/vsIcon.vue?vue&type=template&id=16c8647e

function vsIconvue_type_template_id_16c8647e_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("i", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])(_ctx.$attrs, {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('click');
    }),
    style: $options.iconStyle,
    class: [[$props.iconPack, $props.iconPack != 'material-icons' ? $props.icon : '', $options.iconClass, $options.getBg, $options.getBgSize, {
      'round': $props.round
    }], "vs-icon notranslate icon-scale"]
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.iconPack == 'material-icons' ? $props.icon : ''), 17);
}
// CONCATENATED MODULE: ./src/components/vsIcon/vsIcon.vue?vue&type=template&id=16c8647e

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsIcon/vsIcon.vue?vue&type=script&lang=js





/* harmony default export */ var vsIconvue_type_script_lang_js = ({
  name: 'VsIcon',
  props: {
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    color: {
      default: null,
      type: String
    },
    bg: {
      default: null,
      type: String
    },
    size: {
      default: null,
      type: String
    },
    round: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    iconClass: function iconClass() {
      var classes = {};
      classes[this.size] = true;

      if (utils_color.isColor(this.color)) {
        classes["vs-icon-".concat(this.color)] = true;
      }

      return classes;
    },
    iconStyle: function iconStyle() {
      var style = {
        width: /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        height: /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        'font-size': /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        color: this.getColor,
        background: this.getBgColor
      };
      return style;
    },
    getBg: function getBg() {
      var classes = {};

      if (utils_color.isColor(this.bg)) {
        classes["con-vs-icon-bg-".concat(this.bg)] = true;
      }

      return classes;
    },
    getBgSize: function getBgSize() {
      var classes = {};

      if (['small', 'medium', 'large'].includes(this.size)) {
        classes["bg-".concat(this.size)] = true;
        classes['vs-icon-bg'] = true;
      }

      return classes;
    },
    getColor: function getColor() {
      return utils_color.isColor(this.color) ? this.color : this.color;
    },
    getBgColor: function getBgColor() {
      return utils_color.isColor(this.bg) ? this.bg : this.bg;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsIcon/vsIcon.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsIcon/vsIcon.vue





const vsIcon_exports_ = /*#__PURE__*/exportHelper_default()(vsIconvue_type_script_lang_js, [['render',vsIconvue_type_template_id_16c8647e_render]])

/* harmony default export */ var vsIcon = (vsIcon_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsTabs/vsTabs.vue?vue&type=script&lang=js















/* harmony default export */ var vsTabsvue_type_script_lang_js = ({
  name: 'VsTabs',
  components: {
    vsIcon: vsIcon
  },
  props: {
    modelValue: {
      default: 0,
      type: [Number, String]
    },
    color: {
      default: 'primary',
      type: String
    },
    tagColor: {
      default: 'primary',
      type: String
    },
    alignment: {
      default: 'left',
      type: String
    },
    position: {
      default: 'top',
      type: String
    }
  },
  data: function data() {
    return {
      topx: 'auto',
      heightx: 2,
      hover: false,
      childActive: 0,
      leftx: 0,
      widthx: 0,
      these: false,
      refsLi: [],
      childrenItems: []
    };
  },
  computed: {
    styleTab: function styleTab() {
      return {
        color: utils_color.getColor(this.color, 1)
      };
    },
    stylex: function stylex() {
      return {
        top: "".concat(this.topx, "px"),
        left: "".concat(this.leftx, "px"),
        width: "".concat(this.widthx, "px"),
        height: "".concat(this.heightx, "px"),
        background: "linear-gradient(30deg, ".concat(utils_color.getColor(this.color, 1), " 0%, ").concat(utils_color.getColor(this.color, .5), " 100%)"),
        boxShadow: "0px 0px 8px 0px ".concat(utils_color.getColor(this.color, .5)),
        transform: "scaleX(".concat(this.these ? 1.3 : 1, ")")
      };
    }
  },
  watch: {
    modelValue: function modelValue(index) {
      var _this = this;

      this.$nextTick(function () {
        var activeIndex = _this.parseIndex(index);

        _this.activeChild(activeIndex);
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      var activeIndex = _this2.parseIndex(_this2.modelValue);

      _this2.childActive = activeIndex;

      _this2.$nextTick(function () {
        _this2.activeChild(activeIndex, true);
      });
    });
  },
  methods: {
    // restore old behaviour without class/style in $attrs
    allowedAttrs: function allowedAttrs(attrs) {
      var result = {};
      Object.keys(attrs).forEach(function (attrName) {
        if (!['class', 'style'].includes(attrName)) {
          result[attrName] = attrs[attrName];
        }
      });
      return result;
    },
    clickTag: function clickTag(child) {
      this.$emit('click-tag', child);
    },
    styleAlignIcon: function styleAlignIcon(icon) {
      return icon ? 'display:flex;align-items:center' : '';
    },
    parseIndex: function parseIndex(index) {
      var activeIndex = this.childActive;

      if (index < 0) {
        activeIndex = 0;
      } else if (index >= this.childrenItems.length) {
        activeIndex = this.childrenItems.length - 1;
      } else if (this.childrenItems[index] && this.childrenItems[index].$attrs && typeof this.childrenItems[index].$attrs.disabled === 'undefined') {
        activeIndex = parseInt(index);
      }

      return activeIndex;
    },
    activeChild: function activeChild(index, initialAnimation) {
      var _this3 = this;

      initialAnimation = !!initialAnimation;
      var elem = this.$refs['li-' + index];

      if (this.childActive == index && !initialAnimation) {
        this.these = true;
        elem.classList.add('isActive');
        setTimeout(function () {
          elem.classList.remove('isActive');
          _this3.these = false;
        }, 200);
      }

      this.childrenItems.map(function (item, item_index) {
        if (item_index != index) {
          item.active = false;
        }
      });

      if (this.childActive > index) {
        this.childrenItems[index].invert = true;
        this.childrenItems[this.childActive].invert = false;
      } else {
        this.childrenItems[this.childActive].invert = true;
        this.childrenItems[index].invert = false;
      }

      this.childrenItems[index].active = true;
      this.childActive = index;
      this.$emit('update:modelValue', this.childActive);

      if (this.position == 'left' || this.position == 'right') {
        this.childrenItems[index].vertical = true;
      }

      this.changePositionLine(elem, initialAnimation);
    },
    changePositionLine: function changePositionLine(elem, initialAnimation) {
      var _this4 = this;

      if (this.position == 'left' || this.position == 'right') {
        this.topx = elem.offsetTop;
        this.heightx = elem.offsetHeight;
        this.widthx = 2;
      } else {
        var update = function update() {
          _this4.leftx = elem.offsetLeft;
          _this4.widthx = elem.offsetWidth;
          _this4.topx = elem.offsetHeight + (elem.getBoundingClientRect().top - _this4.$refs.ul.getBoundingClientRect().top);
        };

        if (!initialAnimation) {
          update();
        } else {
          setTimeout(update, 100);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsTabs/vsTabs.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsTabs/vsTabs.vue





const vsTabs_exports_ = /*#__PURE__*/exportHelper_default()(vsTabsvue_type_script_lang_js, [['render',vsTabsvue_type_template_id_218201bc_lang_html_render]])

/* harmony default export */ var vsTabs = (vsTabs_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsTabs/vsTab.vue?vue&type=template&id=07d38360&lang=html

var vsTabvue_type_template_id_07d38360_lang_html_hoisted_1 = {
  key: 0,
  class: "con-tab vs-tabs--content"
};
function vsTabvue_type_template_id_07d38360_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(_ctx.$attrs.class),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.$attrs.style),
    name: _ctx.invert ? _ctx.vertical ? 'fade-tab-vertical-invert' : 'fade-tab-invert' : _ctx.vertical ? 'fade-tab-vertical' : 'fade-tab'
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [_ctx.active ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsTabvue_type_template_id_07d38360_lang_html_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 3
  }, 8, ["class", "style", "name"]);
}
// CONCATENATED MODULE: ./src/components/vsTabs/vsTab.vue?vue&type=template&id=07d38360&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsTabs/vsTab.vue?vue&type=script&lang=js
/* harmony default export */ var vsTabvue_type_script_lang_js = ({
  name: 'VsTab',
  inheritAttrs: false,
  props: {
    label: {
      default: 'Label',
      type: String
    },
    icon: {
      default: '',
      type: String
    },
    tag: {
      default: '',
      type: String
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    }
  },
  data: function data() {
    return {
      vertical: false,
      active: false,
      id: null,
      invert: false,
      parent: null
    };
  },
  mounted: function mounted() {
    var _this2 = this;

    this.searchParent(this, function (parent) {
      _this2.parent = parent;
      _this2.id = _this2.parent.childrenItems.length;

      _this2.parent.childrenItems.push(_this2);
    });
  },
  methods: {
    searchParent: function searchParent(_this, callback) {
      var parent = _this.$parent;

      if (!Object.prototype.hasOwnProperty.call(parent, 'childrenItems')) {
        this.searchParent(parent, callback);
      } else {
        callback(parent);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsTabs/vsTab.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsTabs/vsTab.vue





const vsTab_exports_ = /*#__PURE__*/exportHelper_default()(vsTabvue_type_script_lang_js, [['render',vsTabvue_type_template_id_07d38360_lang_html_render]])

/* harmony default export */ var vsTab = (vsTab_exports_);
// CONCATENATED MODULE: ./src/components/vsTabs/index.js




/* harmony default export */ var components_vsTabs = (function (Vue) {
  Vue.component(vsTabs.name, vsTabs);
  Vue.component(vsTab.name, vsTab);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsSlider/vsSlider.vue?vue&type=template&id=566bc86e&lang=html

var vsSlidervue_type_template_id_566bc86e_lang_html_hoisted_1 = ["disabled"];

var vsSlidervue_type_template_id_566bc86e_lang_html_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "vs-slider-line-two"
}, null, -1);

var vsSlidervue_type_template_id_566bc86e_lang_html_hoisted_3 = ["disabled"];
var vsSlidervue_type_template_id_566bc86e_lang_html_hoisted_4 = {
  key: 0
};
var vsSlidervue_type_template_id_566bc86e_lang_html_hoisted_5 = ["disabled"];
var vsSlidervue_type_template_id_566bc86e_lang_html_hoisted_6 = {
  key: 0
};
var vsSlidervue_type_template_id_566bc86e_lang_html_hoisted_7 = {
  key: 1,
  translate: "no",
  class: "material-icons notranslate"
};
function vsSlidervue_type_template_id_566bc86e_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-slider-".concat($props.color), {
      'disabledx': $props.disabled
    }], "con-vs-slider"]),
    onMousewheel: _cache[5] || (_cache[5] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function () {
      return $options.mousewheelx && $options.mousewheelx.apply($options, arguments);
    }, ["prevent"])),
    onKeydown: [_cache[6] || (_cache[6] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(function () {
      return $options.keydownLeft && $options.keydownLeft.apply($options, arguments);
    }, ["left"])), _cache[7] || (_cache[7] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(function () {
      return $options.keydownRight && $options.keydownRight.apply($options, arguments);
    }, ["right"]))]
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
    ref: "slider",
    disabled: $props.disabled,
    class: "vs-slider",
    type: "button",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.clickSlider($event), _ctx.actived = true;
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleLineOne),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'hasTransition': _ctx.effect
    }, "vs-slider-line-one"])
  }, null, 6), vsSlidervue_type_template_id_566bc86e_lang_html_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'run-effect': _ctx.effect
    }, "vs-slider-line-efect"]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleEfect)
  }, null, 6), $props.ticks && _ctx.tick ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 0
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.countTicks, function (tick, index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
        'isEnd': index == $options.countTicks - 1
      }, "vs-slider--tick"]),
      style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleTicks(index))
    }, null, 6);
  }), 256)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 8, vsSlidervue_type_template_id_566bc86e_lang_html_hoisted_1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
    ref: "circle1",
    disabled: $props.disabled,
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'hasTransition': _ctx.effect,
      'isEquals': $options.isEquals,
      'changeValue': _ctx.changeValue,
      'isEndValue': _ctx.value == $props.max
    }, "vs-circle-slider vs-circles-slider vs-slider--circles vs-slider--circle"]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleCircle),
    type: "button",
    onTouchstart: _cache[1] || (_cache[1] = function ($event) {
      return $options.activeFocus($event), _ctx.actived = true;
    }),
    onMousedown: _cache[2] || (_cache[2] = function ($event) {
      return $options.activeFocus($event), _ctx.actived = true;
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleText),
    class: "text-circle-slider vs-slider--circle-text"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.valueCircle1) + " ", 1), $props.textFixed ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", vsSlidervue_type_template_id_566bc86e_lang_html_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.textFixed), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, {
    "icon-pack": $props.iconPack,
    icon: $props.icon
  }, null, 8, ["icon-pack", "icon"])], 4)], 46, vsSlidervue_type_template_id_566bc86e_lang_html_hoisted_3), Array.isArray($props.modelValue) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("button", {
    key: 0,
    ref: "circle2",
    disabled: $props.disabled,
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'hasTransition': _ctx.effect,
      'isEquals': $options.isEquals,
      'changeValue': _ctx.changeValue,
      'isEndValue': _ctx.value == $props.max
    }, "vs-circle-slider-two vs-circles-slider vs-slider--circles vs-slider--circle-two"]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleCircleTwo),
    type: "button",
    onTouchstart: _cache[3] || (_cache[3] = function ($event) {
      return $options.activeFocus($event), _ctx.two = true, _ctx.actived = true;
    }),
    onMousedown: _cache[4] || (_cache[4] = function ($event) {
      return $options.activeFocus($event), _ctx.two = true, _ctx.actived = true;
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleText),
    class: "text-circle-slider vs-slider--circle-text"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.valueCircle2) + " ", 1), $props.textFixed ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", vsSlidervue_type_template_id_566bc86e_lang_html_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.textFixed), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.icon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("i", vsSlidervue_type_template_id_566bc86e_lang_html_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.icon), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 4)], 46, vsSlidervue_type_template_id_566bc86e_lang_html_hoisted_5)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 34);
}
// CONCATENATED MODULE: ./src/components/vsSlider/vsSlider.vue?vue&type=template&id=566bc86e&lang=html

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.math.sign.js
var es_math_sign = __webpack_require__("a5c6");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__("bd01");

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsSlider/vsSlider.vue?vue&type=script&lang=js







/* harmony default export */ var vsSlidervue_type_script_lang_js = ({
  name: "VsSlider",
  props: {
    modelValue: {},
    disabled: {
      default: false,
      type: [Boolean, String]
    },
    color: {
      default: "primary",
      type: String
    },
    max: {
      default: 100,
      type: [Number, String]
    },
    min: {
      default: 0,
      type: Number
    },
    ticks: {
      default: false,
      type: Boolean
    },
    step: {
      default: 1,
      type: [Number, String]
    },
    stepDecimals: {
      type: Boolean,
      required: false,
      default: false
    },
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: "material-icons",
      type: String
    },
    textFixed: {
      default: null,
      type: String
    }
  },
  data: function data() {
    return {
      leftx: 0,
      leftTwo: 0,
      effect: false,
      two: false,
      actived: false,
      changeValue: false,
      valueCircle1: 0,
      calueCircle2: 0
    };
  },
  computed: {
    isEquals: function isEquals() {
      return Array.isArray(this.modelValue) ? this.modelValue[0] == this.modelValue[1] : false;
    },
    countTicks: function countTicks() {
      return this.max + 1;
    },

    /*
     * styles component
     */
    styleSlider: function styleSlider() {
      return {
        background: utils_color.getColor(this.color, 1)
      };
    },
    styleLineOne: function styleLineOne() {
      var widthx = this.leftTwo - this.leftx;
      var leftx = this.leftx;

      if (this.leftx > this.leftTwo) {
        widthx = this.leftx - this.leftTwo;
        leftx = this.leftTwo;
      }

      return {
        width: "".concat(widthx, "%"),
        left: "".concat(leftx, "%"),
        background: utils_color.getColor(this.color, 1)
      };
    },
    styleCircle: function styleCircle() {
      return {
        left: "".concat(this.leftx, "%"),
        border: "2px solid ".concat(utils_color.getColor(this.color, 1))
      };
    },
    styleCircleTwo: function styleCircleTwo() {
      return {
        left: "".concat(this.leftTwo, "%"),
        border: "2px solid ".concat(utils_color.getColor(this.color, 1))
      };
    },
    styleEfect: function styleEfect() {
      return {
        left: "".concat(this.leftx, "%"),
        background: utils_color.getColor(this.color, 1)
      };
    },
    styleText: function styleText() {
      return {
        background: utils_color.getColor(this.color, 1)
      };
    }
  },
  watch: {
    modelValue: function modelValue() {
      var _this = this;

      if (!this.actived) {
        this.changePosition();
      }

      this.changeValue = true;
      setTimeout(function () {
        _this.changeValue = false;
      }, 300);
      this.$emit("change", this.modelValue);
    },
    leftx: function leftx() {
      if (Array.isArray(this.modelValue)) {
        if (this.leftx > this.leftTwo) {
          this.valueCircle1 = this.modelValue[1];
        } else {
          this.valueCircle1 = this.modelValue[0];
        }
      } else {
        this.valueCircle1 = this.modelValue;
      }
    },
    leftTwo: {
      handler: function handler() {
        if (this.leftTwo > this.leftx) {
          this.valueCircle2 = this.modelValue[1];
        } else {
          this.valueCircle2 = this.modelValue[0];
        }
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.changePosition();
  },
  methods: {
    mousewheelx: function mousewheelx(evt) {
      if (!Array.isArray(this.modelValue)) {
        if (evt.wheelDelta > 0) {
          var val = parseFloat(this.modelValue) + parseFloat(this.step);
          val = this.stepDecimals ? this.toDecimal(val) : Math.round(val);

          if (this.modelValue >= this.max) {
            val = this.max;
          }

          this.leftx = val;
          this.$emit('update:modelValue', val);
        } else {
          var _val = parseFloat(this.modelValue) - parseFloat(this.step);

          _val = this.stepDecimals ? this.toDecimal(_val) : Math.round(_val);

          if (this.modelValue <= this.min) {
            _val = this.min;
          }

          this.leftx = _val;
          this.$emit('update:modelValue', _val);
        }
      }
    },
    keydownLeft: function keydownLeft() {
      if (!Array.isArray(this.modelValue)) {
        var val = parseFloat(this.modelValue) - parseFloat(this.step);
        val = this.stepDecimals ? this.toDecimal(val) : Math.round(val);

        if (this.modelValue == this.min) {
          val = this.min;
        }

        this.leftx = val;
        this.$emit('update:modelValue', val);
      }
    },
    keydownRight: function keydownRight() {
      if (!Array.isArray(this.modelValue)) {
        var val = parseFloat(this.modelValue) + parseFloat(this.step);
        val = this.stepDecimals ? this.toDecimal(val) : Math.round(val);

        if (this.modelValue >= this.max) {
          val = this.max;
        }

        this.leftx = val;
        this.$emit('update:modelValue', val);
      }
    },
    changePosition: function changePosition() {
      if (Array.isArray(this.modelValue)) {
        this.leftx = (this.modelValue[1] - this.min) / (this.max - this.min) * 100;
        this.leftTwo = (this.modelValue[0] - this.min) / (this.max - this.min) * 100;
      } else {
        this.leftx = (this.modelValue - this.min) / (this.max - this.min) * 100;
      }
    },
    styleTicks: function styleTicks(index) {
      var lengthPerStep = 100 / ((this.max - this.min) / this.step);
      var steps = index / lengthPerStep;
      return {
        left: steps * lengthPerStep + "%"
      };
    },
    activeFocus: function activeFocus() {
      window.addEventListener("mousemove", this.mouseMovex);
      window.addEventListener("mouseup", this.removeEvents);
      window.addEventListener("touchmove", this.mouseMovex);
      window.addEventListener("touchend", this.removeEvents);
    },
    mouseMovex: function mouseMovex(evt) {
      var slider = this.$refs.slider;
      var leftx;
      /*
       * change position left circle and bar
       */

      if (evt.type == "touchmove") {
        leftx = event.targetTouches[0].clientX - slider.getBoundingClientRect().left;
      } else {
        leftx = evt.clientX - slider.getBoundingClientRect().left;
      }

      if (Math.sign(leftx) == -1) {
        leftx = 0;
      } else if (leftx > slider.clientWidth) {
        leftx = slider.clientWidth;
      }

      this.changeLeft(leftx);
    },
    removeEvents: function removeEvents() {
      this.two = this.actived = false;
      window.removeEventListener("mouseup", this.removeEvents);
      window.removeEventListener("mousemove", this.mouseMovex);
      window.removeEventListener("touchmove", this.mouseMovex);
      window.removeEventListener("touchend", this.removeEvents);
    },
    clickSlider: function clickSlider(evt) {
      var _this2 = this;

      var slider = this.$refs.slider;
      var leftx = evt.clientX - slider.getBoundingClientRect().left;
      this.effect = true;
      setTimeout(function () {
        _this2.effect = false;
      }, 200);
      var percentX = Math.round(leftx / slider.clientWidth * 100);

      if (Array.isArray(this.modelValue)) {
        if (Math.abs(percentX - this.leftx) > Math.abs(percentX - this.leftTwo)) {
          this.two = true;
        } else {
          this.two = false;
        }
      }

      this.changeLeft(leftx);
    },
    changeLeft: function changeLeft(leftx) {
      var slider = this.$refs.slider;
      var percentX = leftx / slider.clientWidth * 100;
      var lengthPerStep = 100 / ((this.max - this.min) / this.step);
      var steps = Math.round(percentX / lengthPerStep);
      var val = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min;
      val = this.stepDecimals ? this.toDecimal(val) : Math.round(val);

      if (val > this.max) {
        val = this.max;
        this[this.two ? "leftTwo" : "leftx"] = 100;
      } else {
        this[this.two ? "leftTwo" : "leftx"] = steps * lengthPerStep;
      }

      if (Array.isArray(this.modelValue)) {
        var modelValueNew = val;

        if (val == this.max) {
          modelValueNew = this.max;
        }

        var vals = this.modelValue;
        var min = Math.round(this.leftTwo / 100 * (this.max / this.step)) * this.step;
        var max = Math.round(this.leftx / 100 * (this.max / this.step)) * this.step;

        if (this.two) {
          if (min < max) {
            this.$emit('update:modelValue', [modelValueNew, vals[1]]);
          } else if (min > max) {
            this.$emit('update:modelValue', [vals[0], modelValueNew]);
          } else {
            this.$emit('update:modelValue', [modelValueNew, modelValueNew]);
          }
        } else {
          if (min > max) {
            this.$emit('update:modelValue', [modelValueNew, vals[1]]);
          } else if (min < max) {
            this.$emit('update:modelValue', [vals[0], modelValueNew]);
          } else {
            this.$emit('update:modelValue', [modelValueNew, modelValueNew]);
          }
        }
      } else {
        this.$emit('update:modelValue', val);
      }
    },
    toDecimal: function toDecimal(modelValue) {
      return parseFloat(modelValue.toFixed(1));
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsSlider/vsSlider.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsSlider/vsSlider.vue





const vsSlider_exports_ = /*#__PURE__*/exportHelper_default()(vsSlidervue_type_script_lang_js, [['render',vsSlidervue_type_template_id_566bc86e_lang_html_render]])

/* harmony default export */ var vsSlider = (vsSlider_exports_);
// CONCATENATED MODULE: ./src/components/vsSlider/index.js



/* harmony default export */ var components_vsSlider = (function (Vue) {
  Vue.component(vsSlider.name, vsSlider);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsInputNumber/vsInputNumber.vue?vue&type=template&id=7fc5e9be&lang=html

var vsInputNumbervue_type_template_id_7fc5e9be_lang_html_hoisted_1 = ["disabled"];
var vsInputNumbervue_type_template_id_7fc5e9be_lang_html_hoisted_2 = {
  key: 0
};
var vsInputNumbervue_type_template_id_7fc5e9be_lang_html_hoisted_3 = ["value", "disabled", "min", "max"];
var vsInputNumbervue_type_template_id_7fc5e9be_lang_html_hoisted_4 = ["disabled"];
function vsInputNumbervue_type_template_id_7fc5e9be_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  var _directive_repeat_click = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("repeat-click");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: [["vs-input-number-size-".concat($props.size), "vs-input-number-".concat($props.color), {
      'isChangeValue': _ctx.isChangeValue
    }], "vs-input-number"]
  }, _ctx.$attrs), [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
    disabled: _ctx.$attrs.disabled,
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      limit: parseInt($props.modelValue) <= parseInt($props.min)
    }, "btn-less vs-input-number--button-less"]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      background: $options.getColor
    }),
    type: "button"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, {
    "icon-pack": $props.iconPack,
    icon: $props.iconDec
  }, null, 8, ["icon-pack", "icon"])], 14, vsInputNumbervue_type_template_id_7fc5e9be_lang_html_hoisted_1), [[_directive_repeat_click, $options.less]]), $props.label ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", vsInputNumbervue_type_template_id_7fc5e9be_lang_html_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])($options.attrs, {
    ref: "input",
    style: $options.styleInput,
    value: $props.modelValue,
    disabled: $props.isDisabled,
    min: $props.min,
    max: $props.max,
    type: "number",
    class: "vs-input-number--input"
  }), null, 16, vsInputNumbervue_type_template_id_7fc5e9be_lang_html_hoisted_3), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
    disabled: _ctx.$attrs.disabled,
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      limit: parseInt($props.modelValue) >= parseInt($props.max) && $props.max !== null
    }, "btn-plus vs-input-number--button-plus"]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      background: $options.getColor
    }),
    type: "button"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, {
    "icon-pack": $props.iconPack,
    icon: $props.iconInc
  }, null, 8, ["icon-pack", "icon"])], 14, vsInputNumbervue_type_template_id_7fc5e9be_lang_html_hoisted_4), [[_directive_repeat_click, $options.plus]])], 16);
}
// CONCATENATED MODULE: ./src/components/vsInputNumber/vsInputNumber.vue?vue&type=template&id=7fc5e9be&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsInputNumber/vsInputNumber.vue?vue&type=script&lang=js













/* harmony default export */ var vsInputNumbervue_type_script_lang_js = ({
  name: 'VsInputNumber',
  directives: {
    repeatClick: {
      beforeMount: function beforeMount(el, binding, vnode) {
        var intervalx = null;
        var startT;
        var functionx = binding.value;

        var bucle = function bucle() {
          if (new Date() - startT < 100) {
            functionx();
          }

          clearInterval(intervalx);
          intervalx = null;
        };

        var eventx = function eventx(e) {
          if (e.button !== 0) return;
          startT = new Date();

          var escuchando = function escuchando() {
            if (bucle) {
              bucle.apply(this, arguments);
            }

            el.removeEventListener('mouseup', escuchando, false);
          };

          el.addEventListener('mouseleave', escuchando, false);
          el.addEventListener('mouseup', escuchando, false);
          clearInterval(intervalx);
          intervalx = setInterval(functionx, 100);
        };

        el.addEventListener('mousedown', eventx, false);
      }
    }
  },
  inheritAttrs: false,
  props: {
    modelValue: {},
    color: {
      default: 'primary',
      type: String
    },
    label: {
      default: null,
      type: String
    },
    max: {
      default: null,
      type: [Number, String]
    },
    min: {
      default: 0,
      type: [Number, String]
    },
    size: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    iconDec: {
      default: 'remove',
      type: String
    },
    iconInc: {
      default: 'add',
      type: String
    },
    step: {
      default: 1,
      type: [Number, String]
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      isChangeValue: false
    };
  },
  computed: {
    styleInput: function styleInput() {
      return {
        width: "".concat(this.getLength, "px")
      };
    },
    getLength: function getLength() {
      if (this.modelValue) {
        return this.modelValue.toString().length * 9.1;
      } else {
        return 0;
      }
    },
    getColor: function getColor() {
      return utils_color.getColor(this.color, 1);
    },
    attrs: function attrs() {
      var _this = this;

      return {
        //...this.$attrs,
        onBlur: function onBlur(evt) {
          if (parseFloat(_this.modelValue) > parseFloat(_this.max)) {
            _this.$emit('update:modelValue', _this.max);
          } else if (parseFloat(_this.modelValue) < parseFloat(_this.min)) {
            _this.$emit('update:modelValue', _this.min);

            _this.$emit('blur', evt);
          }
        },
        onInput: function onInput(evt) {
          _this.$emit('update:modelValue', evt.target.value);
        }
      };
    }
  },
  watch: {
    modelValue: function modelValue() {
      var _this2 = this;

      this.isChangeValue = true;
      setTimeout(function () {
        _this2.isChangeValue = false;
      }, 200);
    }
  },
  methods: {
    plus: function plus() {
      var newValue;

      if (this.modelValue === '') {
        newValue = 0;
        this.$emit('update:modelValue', this.fixPrecision(newValue));
      } else {
        if (this.max ? parseFloat(this.modelValue) < parseFloat(this.max) : true) {
          newValue = parseFloat(this.modelValue) + parseFloat(this.step);
          this.$emit('update:modelValue', this.fixPrecision(newValue));
        }
      }
    },
    less: function less() {
      var newValue;

      if (this.modelValue === '') {
        newValue = 0;
        this.$emit('update:modelValue', this.fixPrecision(newValue));
      } else {
        if (this.min ? parseFloat(this.modelValue) > parseFloat(this.min) : true) {
          newValue = parseFloat(this.modelValue) - parseFloat(this.step);
          this.$emit('update:modelValue', this.fixPrecision(newValue));
        }
      }
    },
    fixPrecision: function fixPrecision(n) {
      var precision = (this.step + '').split('.')[1];
      return n.toFixed(precision ? precision.length : 0);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsInputNumber/vsInputNumber.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsInputNumber/vsInputNumber.vue





const vsInputNumber_exports_ = /*#__PURE__*/exportHelper_default()(vsInputNumbervue_type_script_lang_js, [['render',vsInputNumbervue_type_template_id_7fc5e9be_lang_html_render]])

/* harmony default export */ var vsInputNumber = (vsInputNumber_exports_);
// CONCATENATED MODULE: ./src/components/vsInputNumber/index.js



/* harmony default export */ var components_vsInputNumber = (function (Vue) {
  Vue.component(vsInputNumber.name, vsInputNumber);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsTooltip/vsTooltip.vue?vue&type=template&id=205d33d1

var vsTooltipvue_type_template_id_205d33d1_hoisted_1 = {
  key: 0
};
function vsTooltipvue_type_template_id_205d33d1_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    ref: "convstooltip",
    class: "con-vs-tooltip",
    onMouseleave: _cache[0] || (_cache[0] = function () {
      return $options.mouseleavex && $options.mouseleavex.apply($options, arguments);
    }),
    onMouseenter: _cache[1] || (_cache[1] = function () {
      return $options.mouseenterx && $options.mouseenterx.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "tooltip-fade"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        ref: "vstooltip",
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-tooltip-".concat($data.positionx || $props.position), "vs-tooltip-".concat($props.color), {
          'after-none': $data.noneAfter
        }], "vs-tooltip"]),
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.style)
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "content", {}, function () {
        return [$props.title ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("h4", vsTooltipvue_type_template_id_205d33d1_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.title), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.text), 1)];
      })], 6), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $data.activeTooltip]])];
    }),
    _: 3
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 544);
}
// CONCATENATED MODULE: ./src/components/vsTooltip/vsTooltip.vue?vue&type=template&id=205d33d1

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsTooltip/vsTooltip.vue?vue&type=script&lang=js






/* harmony default export */ var vsTooltipvue_type_script_lang_js = ({
  name: 'VsTooltip',
  props: {
    title: {
      default: null,
      type: [String, Number]
    },
    text: {
      default: null,
      type: [String, Number]
    },
    color: {
      default: null,
      type: String
    },
    position: {
      default: 'top',
      type: String
    },
    delay: {
      default: '0s',
      type: [Number, String]
    },
    active: {
      default: true,
      type: [Boolean]
    },
    modelValue: Boolean
  },
  data: function data() {
    return {
      cords: {},
      activeTooltip: this.modelValue,
      widthx: 'auto',
      positionx: null,
      noneAfter: false
    };
  },
  computed: {
    style: function style() {
      return {
        left: this.cords.left,
        top: this.cords.top,
        transitionDelay: this.activeTooltip ? this.delay : '0s',
        background: utils_color.getColor(this.color, 1),
        width: this.widthx
      };
    }
  },
  watch: {
    modelValue: function modelValue(val) {
      this.activeTooltip = val;
    },
    activeTooltip: function activeTooltip(val) {
      if (this.modelValue !== val) {
        this.$emit('update:modelValue', val);
      }
    }
  },
  mounted: function mounted() {// utils.insertBody(this.$refs.vstooltip)
  },
  updated: function updated() {
    if (!this.$slots.default) {
      this.activeTooltip = false;
    }
  },
  beforeUnmount: function beforeUnmount() {
    if (this.$refs.vstooltip && this.activeTooltip) {
      utils.removeBody(this.$refs.vstooltip);
    }
  },
  methods: {
    mouseenterx: function mouseenterx() {
      var _this = this;

      if (this.active) {
        this.activeTooltip = true;
        this.$nextTick(function () {
          utils.insertBody(_this.$refs.vstooltip);

          _this.changePosition(_this.$refs.convstooltip, _this.$refs.vstooltip);
        });
      }
    },
    mouseleavex: function mouseleavex() {
      this.activeTooltip = false;

      if (this.$refs.vstooltip) {
        utils.removeBody(this.$refs.vstooltip);
      }
    },
    changePosition: function changePosition(elxEvent, tooltip) {
      this.noneAfter = false;
      this.positionx = null;
      var elx = elxEvent.closest('.con-vs-tooltip');
      var scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      var topx = elx.getBoundingClientRect().top + scrollTopx - tooltip.clientHeight - 4;
      var leftx = elx.getBoundingClientRect().left - tooltip.clientWidth / 2 + elx.clientWidth / 2;
      var widthx = elx.clientWidth;

      if (this.position === 'bottom') {
        topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4;
      } else if (this.position === 'left') {
        leftx = elx.getBoundingClientRect().left - tooltip.clientWidth - 4;
        topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight / 2 - tooltip.clientHeight / 2;

        if (Math.sign(leftx) === -1) {
          leftx = elx.getBoundingClientRect().left;
          topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4;
          this.positionx = 'bottom';
          this.noneAfter = true;
        }
      } else if (this.position === 'right') {
        leftx = elx.getBoundingClientRect().left + elx.clientWidth + 4;
        topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight / 2 - tooltip.clientHeight / 2;

        if (window.innerWidth - (leftx + tooltip.clientWidth) <= 20) {
          leftx = elx.getBoundingClientRect().left - tooltip.clientWidth / 2 - 10;
          topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4;
          this.positionx = 'bottom';
          this.noneAfter = true;
        }
      }

      this.cords = {
        left: "".concat(leftx, "px"),
        top: "".concat(topx, "px"),
        width: "".concat(widthx, "px")
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsTooltip/vsTooltip.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsTooltip/vsTooltip.vue





const vsTooltip_exports_ = /*#__PURE__*/exportHelper_default()(vsTooltipvue_type_script_lang_js, [['render',vsTooltipvue_type_template_id_205d33d1_render]])

/* harmony default export */ var vsTooltip = (vsTooltip_exports_);
// CONCATENATED MODULE: ./src/components/vsTooltip/index.js



/* harmony default export */ var components_vsTooltip = (function (Vue) {
  Vue.component(vsTooltip.name, vsTooltip);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsUpload/vsUpload.vue?vue&type=template&id=675f269b









var vsUploadvue_type_template_id_675f269b_hoisted_1 = {
  class: "con-upload"
};
var vsUploadvue_type_template_id_675f269b_hoisted_2 = {
  class: "con-img-upload"
};
var vsUploadvue_type_template_id_675f269b_hoisted_3 = ["onClick"];

var vsUploadvue_type_template_id_675f269b_hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
  translate: "no",
  class: "material-icons notranslate"
}, " clear ", -1);

var vsUploadvue_type_template_id_675f269b_hoisted_5 = [vsUploadvue_type_template_id_675f269b_hoisted_4];
var vsUploadvue_type_template_id_675f269b_hoisted_6 = ["onClick"];
var vsUploadvue_type_template_id_675f269b_hoisted_7 = {
  translate: "no",
  class: "material-icons notranslate"
};
var vsUploadvue_type_template_id_675f269b_hoisted_8 = ["src", "onTouchend", "onClick"];
var vsUploadvue_type_template_id_675f269b_hoisted_9 = {
  key: 2,
  class: "text-archive"
};

var vsUploadvue_type_template_id_675f269b_hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
  translate: "no",
  class: "material-icons notranslate"
}, " description ", -1);

var vsUploadvue_type_template_id_675f269b_hoisted_11 = ["disabled"];
var vsUploadvue_type_template_id_675f269b_hoisted_12 = {
  class: "text-input"
};
var vsUploadvue_type_template_id_675f269b_hoisted_13 = ["disabled"];

var vsUploadvue_type_template_id_675f269b_hoisted_14 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
  translate: "no",
  class: "material-icons notranslate"
}, " cloud_upload ", -1);

var _hoisted_15 = [vsUploadvue_type_template_id_675f269b_hoisted_14];
function vsUploadvue_type_template_id_675f269b_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_view_upload = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("view-upload");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsUploadvue_type_template_id_675f269b_hoisted_1, [_ctx.viewActive ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_view_upload, {
    key: 0,
    src: _ctx.viewSrc
  }, null, 8, ["src"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsUploadvue_type_template_id_675f269b_hoisted_2, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.getFilesFilter, function (img, index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
        'fileError': img.error,
        'removeItem': _ctx.itemRemove.includes(index)
      }, "img-upload"]),
      key: index
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
      class: "btn-x-file",
      type: "button",
      onClick: function onClick($event) {
        return $options.removeFile(index);
      }
    }, vsUploadvue_type_template_id_675f269b_hoisted_5, 8, vsUploadvue_type_template_id_675f269b_hoisted_3), $props.showUploadButton ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("button", {
      key: 0,
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
        'on-progress': img.percent,
        'ready-progress': img.percent >= 100
      }, "btn-upload-file"]),
      style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
        height: "".concat(img.percent, "%")
      }),
      onClick: function onClick($event) {
        return $options.upload(index);
      }
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", vsUploadvue_type_template_id_675f269b_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(img.percent >= 100 ? img.error ? 'report_problem' : 'cloud_done' : 'cloud_upload'), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(img.percent) + " %", 1)], 14, vsUploadvue_type_template_id_675f269b_hoisted_6)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), img.src ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("img", {
      style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
        maxWidth: img.orientation == 'h' ? '100%' : 'none',
        maxHeight: img.orientation == 'w' ? '100%' : 'none'
      }),
      key: index,
      src: img.src,
      onTouchend: function onTouchend($event) {
        return $options.viewImage(img.src, $event);
      },
      onClick: function onClick($event) {
        return $options.viewImage(img.src, $event);
      }
    }, null, 44, vsUploadvue_type_template_id_675f269b_hoisted_8)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !img.src ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("h4", vsUploadvue_type_template_id_675f269b_hoisted_9, [vsUploadvue_type_template_id_675f269b_hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(img.name), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 2);
  }), 128)), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'on-progress-all-upload': _ctx.percent != 0,
      'is-ready-all-upload': _ctx.percent >= 100,
      'disabled-upload': Object.prototype.hasOwnProperty.call(_ctx.$attrs, 'disabled') || $props.limit ? _ctx.srcs.length - _ctx.itemRemove.length >= Number($props.limit) : false
    }, "con-input-upload"])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])(_ctx.$attrs, {
    ref: "fileInput",
    disabled: _ctx.$attrs.disabled || $props.limit ? _ctx.srcs.length - _ctx.itemRemove.length >= Number($props.limit) : false,
    type: "file",
    onChange: _cache[0] || (_cache[0] = function () {
      return $options.getFiles && $options.getFiles.apply($options, arguments);
    })
  }), null, 16, vsUploadvue_type_template_id_675f269b_hoisted_11), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", vsUploadvue_type_template_id_675f269b_hoisted_12, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.text), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      width: "".concat(_ctx.percent, "%")
    }),
    class: "input-progress"
  }, null, 4), $props.showUploadButton ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("button", {
    key: 0,
    disabled: _ctx.filesx.length == 0,
    type: "button",
    title: "Upload",
    class: "btn-upload-all vs-upload--button-upload",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.upload('all');
    })
  }, _hoisted_15, 8, vsUploadvue_type_template_id_675f269b_hoisted_13)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 2)])]);
}
// CONCATENATED MODULE: ./src/components/vsUpload/vsUpload.vue?vue&type=template&id=675f269b

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.math.trunc.js
var es_math_trunc = __webpack_require__("fd3f");

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsUpload/viewUpload.vue?vue&type=template&id=31591ed5

var viewUploadvue_type_template_id_31591ed5_hoisted_1 = ["src"];
function viewUploadvue_type_template_id_31591ed5_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "view-upload"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        ref: "view",
        class: "view-upload",
        onClick: _cache[0] || (_cache[0] = function () {
          return $options.closeView && $options.closeView.apply($options, arguments);
        })
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
        src: $props.src,
        alt: "image"
      }, null, 8, viewUploadvue_type_template_id_31591ed5_hoisted_1)], 512)];
    }),
    _: 1
  });
}
// CONCATENATED MODULE: ./src/components/vsUpload/viewUpload.vue?vue&type=template&id=31591ed5

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsUpload/viewUpload.vue?vue&type=script&lang=js

/* harmony default export */ var viewUploadvue_type_script_lang_js = ({
  name: 'ViewUpload',
  props: {
    active: {
      default: false,
      type: Boolean
    },
    src: {
      default: null,
      type: String
    }
  },
  mounted: function mounted() {
    utils.insertBody(this.$refs.view);
  },
  upload: function upload() {
    utils.insertBody(this.$refs.view);
  },
  methods: {
    closeView: function closeView(evt) {
      if (evt.target.tagName != 'IMG') {
        this.$parent.viewActive = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsUpload/viewUpload.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsUpload/viewUpload.vue





const viewUpload_exports_ = /*#__PURE__*/exportHelper_default()(viewUploadvue_type_script_lang_js, [['render',viewUploadvue_type_template_id_31591ed5_render]])

/* harmony default export */ var viewUpload = (viewUpload_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsUpload/vsUpload.vue?vue&type=script&lang=js
















var lastTap = 0;
/* harmony default export */ var vsUploadvue_type_script_lang_js = ({
  name: 'VsUpload',
  components: {
    viewUpload: viewUpload
  },
  inheritAttrs: false,
  props: {
    fileName: {
      default: null,
      type: String
    },
    text: {
      default: 'Upload File',
      type: String
    },
    textMax: {
      default: 'Maximum of files reached',
      type: String
    },
    limit: {
      default: null,
      type: [Number, String]
    },
    action: {
      default: null,
      type: String
    },
    headers: {
      default: null,
      type: Object
    },
    data: {
      default: null,
      type: Object
    },
    automatic: {
      default: false,
      type: Boolean
    },
    showUploadButton: {
      default: true,
      type: Boolean
    },
    singleUpload: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      inputValue: null,
      type: null,
      srcs: [],
      filesx: [],
      itemRemove: [],
      percent: 0,
      viewActive: false,
      viewSrc: null
    };
  },
  computed: {
    getFilesFilter: function getFilesFilter() {
      var files = this.srcs.filter(function (item) {
        return !item.remove;
      });
      return files;
    },
    postFiles: function postFiles() {
      var postFiles = Array.prototype.slice.call(this.filesx);
      postFiles = postFiles.filter(function (item) {
        return !Object.prototype.hasOwnProperty.call(item, 'remove') && !Object.prototype.hasOwnProperty.call(item, 'success');
      });
      return postFiles.length;
    }
  },
  watch: {
    percent: function percent() {
      var _this2 = this;

      if (this.percent >= 100) {
        this.srcs.forEach(function (file) {
          file.percent = 100;
        });
        setTimeout(function () {
          _this2.percent = 0;
        }, 1000);
      }
    }
  },
  methods: {
    viewImage: function viewImage(src, evt) {
      var timeout;
      var eventx = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch ? 'touchstart' : 'click';

      if (eventx == 'click') {
        this.viewActive = true;
        this.viewSrc = src;
      } else {
        if (evt.type == 'touchend') {
          var currentTime = new Date().getTime();
          var tapLength = currentTime - lastTap;
          clearTimeout(timeout);

          if (tapLength < 500 && tapLength > 0) {
            this.viewActive = true;
            this.viewSrc = src;
            event.preventDefault();
          }

          lastTap = currentTime;
        }
      }
    },
    removeFile: function removeFile(index) {
      var _this3 = this;

      this.itemRemove.push(index);
      this.$emit('on-delete', this.filesx[index]);
      setTimeout(function () {
        _this3.filesx[index].remove = true;
      }, 301);
    },
    getFiles: function getFiles(e) {
      this.$emit('update:vsFile', e.target.value);

      var _this = this;

      function uploadImage(e) {
        var orientation = 'h';
        var image = new Image();
        image.src = e.target.result;

        image.onload = function () {
          if (this.width > this.height) {
            orientation = 'w';
          }

          switchImage(this, orientation);
        };
      }

      function switchImage(image, orientation) {
        _this.srcs.push({
          src: image.src,
          orientation: orientation,
          type: _this.typex,
          percent: null,
          error: false,
          remove: null
        });
      }

      var files = e.target.files;
      var count = this.srcs.length - this.itemRemove.length;

      for (var file in files) {
        if (Object.prototype.hasOwnProperty.call(files, file)) {
          if (this.limit) {
            count++;

            if (count > Number(this.limit)) {
              break;
            }
          }

          var reader = new FileReader();
          var filex = files[file];

          if (/image.*/.test(filex.type)) {
            this.typex = 'image';
            this.filesx.push(filex);
            reader.onload = uploadImage;
            reader.readAsDataURL(filex);
          } else if (/video.*/.test(filex.type)) {
            this.typex = 'video';
            this.filesx.push(filex);

            _this.srcs.push({
              src: null,
              name: filex.name,
              type: 'video',
              percent: null,
              error: false,
              remove: null
            });
          } else {
            this.filesx.push(filex);

            _this.srcs.push({
              src: null,
              name: filex.name,
              percent: null,
              error: false,
              remove: null
            });
          }

          this.$emit('change', e.target.value, this.filesx);
        }
      }

      var input = this.$refs.fileInput;
      input.type = 'text';
      input.type = 'file';

      if (this.automatic) {
        this.upload('all');
      }
    },
    upload: function upload(index) {
      var _this4 = this;

      var formData = new FormData();
      var postFiles = Array.prototype.slice.call(this.filesx);

      if (typeof index == 'number') {
        postFiles = [postFiles[index]];
      } else if (index == 'all') {
        postFiles = postFiles.filter(function (item) {
          return !Object.prototype.hasOwnProperty.call(item, 'remove') && !Object.prototype.hasOwnProperty.call(item, 'success');
        });
      }

      var data = this.data || {};

      for (var key in data) {
        formData.append(key, data[key]);
      }

      if (this.singleUpload) {
        postFiles.forEach(function (filex) {
          var formData = new FormData();

          for (var key in data) {
            formData.append(key, data[key]);
          }

          formData.append(_this4.fileName, filex, filex.name);

          _this4.uploadx(index, formData);
        });
      } else {
        postFiles.forEach(function (filex) {
          formData.append(_this4.fileName, filex, filex.name);
        });
        this.uploadx(index, formData);
      }
    },
    uploadx: function uploadx(index, formData) {
      var self = this;
      var xhr = new XMLHttpRequest();

      xhr.onerror = function error(e) {
        self.$emit('on-error', e);

        if (typeof index == 'number') {
          self.srcs[index].error = true;
        }
      };

      xhr.onload = function onload(e) {
        if (xhr.status < 200 || xhr.status >= 300) {
          self.$emit('on-error', e);

          if (typeof index == 'number') {
            self.srcs[index].error = true;
          }
        } else {
          self.filesx.forEach(function (loaded) {
            loaded.success = true;
          });
          self.$emit('on-success', e);
        }
      };

      if (xhr.upload) {
        xhr.upload.onprogress = function progress(e) {
          if (e.total > 0) {
            var percent = e.loaded / e.total * 100;

            if (typeof index == 'number') {
              self.srcs[index].percent = Math.trunc(percent);
            } else {
              self.percent = Math.trunc(percent);
            }
          }
        };
      }

      xhr.withCredentials = true;
      xhr.open('POST', this.action, true);
      var headers = this.headers || {};

      for (var head in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, head) && headers[head] !== null) {
          xhr.setRequestHeader(head, headers[head]);
        }
      }

      xhr.send(formData);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsUpload/vsUpload.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsUpload/vsUpload.vue





const vsUpload_exports_ = /*#__PURE__*/exportHelper_default()(vsUploadvue_type_script_lang_js, [['render',vsUploadvue_type_template_id_675f269b_render]])

/* harmony default export */ var vsUpload = (vsUpload_exports_);
// CONCATENATED MODULE: ./src/components/vsUpload/index.js



/* harmony default export */ var components_vsUpload = (function (Vue) {
  Vue.component(vsUpload.name, vsUpload);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsPopup/vsPopup.vue?vue&type=template&id=3db4cb35&lang=html

var vsPopupvue_type_template_id_3db4cb35_lang_html_hoisted_1 = {
  class: "vs-popup--title"
};
function vsPopupvue_type_template_id_3db4cb35_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "popup-t"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        ref: "con",
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-popup-".concat($props.color), {
          'fullscreen': $props.fullscreen
        }], "vs-component con-vs-popup"]),
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return $options.close($event, true);
        })
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleCon),
        class: "vs-popup--background"
      }, null, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        ref: "popupx",
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.stylePopup),
        class: "vs-popup"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("header", {
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleHeader),
        class: "vs-popup--header"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsPopupvue_type_template_id_3db4cb35_lang_html_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.title), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "subtitle")]), !$props.buttonCloseHidden ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_vs_icon, {
        key: 0,
        ref: "btnclose",
        "icon-pack": $props.iconPack,
        icon: $props.iconClose,
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.stylePopup),
        class: "vs-popup--close vs-popup--close--icon",
        onClick: $options.close
      }, null, 8, ["icon-pack", "icon", "style", "onClick"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($props.styleContent),
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([$props.classContent, "vs-popup--content"])
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 6)], 4)], 2), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $props.active]])];
    }),
    _: 3
  });
}
// CONCATENATED MODULE: ./src/components/vsPopup/vsPopup.vue?vue&type=template&id=3db4cb35&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsPopup/vsPopup.vue?vue&type=script&lang=js

/* harmony default export */ var vsPopupvue_type_script_lang_js = ({
  name: 'VsPopup',
  props: {
    color: {
      default: 'primary',
      type: String
    },
    active: {
      default: false,
      type: Boolean
    },
    title: {
      default: 'popup',
      type: String
    },
    buttonCloseHidden: {
      default: false,
      type: Boolean
    },
    fullscreen: {
      default: false,
      type: Boolean
    },
    backgroundColor: {
      default: null,
      type: String
    },
    backgroundColorPopup: {
      default: 'rgb(255,255,255)',
      type: String
    },
    styleContent: {
      default: null,
      type: String
    },
    classContent: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    iconClose: {
      default: 'close',
      type: String
    }
  },
  computed: {
    styleHeader: function styleHeader() {
      return {
        color: utils_color.getColor(this.color, 1)
      };
    },
    styleAfter: function styleAfter() {
      return {
        background: utils_color.getColor(this.color, 1)
      };
    },
    styleCon: function styleCon() {
      return {
        background: utils_color.getColor(this.backgroundColor, 1)
      };
    },
    stylePopup: function stylePopup() {
      return {
        background: utils_color.getColor(this.backgroundColorPopup, 1)
      };
    }
  },
  mounted: function mounted() {
    this.insertBody();
  },
  beforeUnmount: function beforeUnmount() {
    // close the left open prompt
    var elx = this.$refs.con;

    if (document.body) {
      document.body.removeChild(elx);
    }
  },
  methods: {
    giveColor: function giveColor(color) {
      return utils_color.rColor(color);
    },
    close: function close(event, con) {
      if (con) {
        if (event.target.className && event.target.className.indexOf && event.target.className.indexOf('vs-popup--background') != -1) {
          this.$emit('update:active', false);
          this.$emit('close', false);
        } else if (!this.buttonCloseHidden && event.srcElement == this.$refs.btnclose.$el) {
          this.$emit('update:active', false);
          this.$emit('close', false);
        }
      }
    },
    insertBody: function insertBody() {
      var elx = this.$refs.con;
      document.body.insertBefore(elx, document.body.firstChild);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsPopup/vsPopup.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsPopup/vsPopup.vue





const vsPopup_exports_ = /*#__PURE__*/exportHelper_default()(vsPopupvue_type_script_lang_js, [['render',vsPopupvue_type_template_id_3db4cb35_lang_html_render]])

/* harmony default export */ var vsPopup = (vsPopup_exports_);
// CONCATENATED MODULE: ./src/components/vsPopup/index.js



/* harmony default export */ var components_vsPopup = (function (Vue) {
  Vue.component(vsPopup.name, vsPopup);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsAlert/vsAlert.vue?vue&type=template&id=fd2099da&lang=html

var vsAlertvue_type_template_id_fd2099da_lang_html_hoisted_1 = ["textContent"];
function vsAlertvue_type_template_id_fd2099da_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    onBeforeEnter: $options.beforeEnter,
    onEnter: $options.enter,
    onLeave: $options.leave
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [$props.active ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
        key: 0
      }, _ctx.$attrs, {
        ref: "alert",
        class: [["con-vs-alert-".concat($props.color), {
          'con-icon': $props.icon
        }], "con-vs-alert"],
        style: $options.styleAlert
      }), [$props.closable ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
        key: 0,
        class: "con-x vs-alert--close",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return _ctx.$emit('update:active', false);
        })
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, {
        "icon-pack": $props.iconPack,
        icon: $props.closeIcon
      }, null, 8, ["icon-pack", "icon"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.title ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("h4", {
        key: 1,
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleTitle),
        class: "titlex vs-alert--title",
        textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.title)
      }, null, 12, vsAlertvue_type_template_id_fd2099da_lang_html_hoisted_1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
          'con-icon': $props.icon
        }, "vs-alert"])
      }, [$props.icon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_vs_icon, {
        key: 0,
        "icon-pack": $props.iconPack,
        icon: $props.icon,
        class: "icon-alert"
      }, null, 8, ["icon-pack", "icon"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 2)], 16)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 3
  }, 8, ["onBeforeEnter", "onEnter", "onLeave"]);
}
// CONCATENATED MODULE: ./src/components/vsAlert/vsAlert.vue?vue&type=template&id=fd2099da&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsAlert/vsAlert.vue?vue&type=script&lang=js

/* harmony default export */ var vsAlertvue_type_script_lang_js = ({
  name: 'VsAlert',
  props: {
    active: {
      type: [Boolean, String],
      default: true
    },
    title: {
      type: String,
      default: null
    },
    closable: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'primary'
    },
    margin: {
      type: [String, Boolean],
      default: '10px'
    },
    icon: {
      type: String,
      default: null
    },
    closeIcon: {
      type: String,
      default: 'close'
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    }
  },
  computed: {
    styleAlert: function styleAlert() {
      return {
        background: utils_color.getColor(this.color, .15),
        boxShadow: "0px 0px 25px 0px ".concat(utils_color.getColor(this.color, .15)),
        color: utils_color.getColor(this.color, 1)
      };
    },
    styleTitle: function styleTitle() {
      return {
        boxShadow: "0px 6px 15px -7px ".concat(utils_color.getColor(this.color, .4))
      };
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.$refs.alert) {
      this.$nextTick(function () {
        var h = _this.$refs.alert.scrollHeight;
        _this.$refs.alert.style.height = h + 'px';
      });
    }
  },
  methods: {
    beforeEnter: function beforeEnter(el) {
      el.style.height = 0;
      el.style.opacity = 0;
    },
    enter: function enter(el, done) {
      var h = this.$refs.alert.scrollHeight;
      this.$refs.alert.style.height = h + 'px';
      el.style.opacity = 1;
      done();
    },
    leave: function leave(el) {
      this.$refs.alert.style.height = 0 + 'px';
      el.style.opacity = 0;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsAlert/vsAlert.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsAlert/vsAlert.vue





const vsAlert_exports_ = /*#__PURE__*/exportHelper_default()(vsAlertvue_type_script_lang_js, [['render',vsAlertvue_type_template_id_fd2099da_lang_html_render]])

/* harmony default export */ var vsAlert = (vsAlert_exports_);
// CONCATENATED MODULE: ./src/components/vsAlert/index.js



/* harmony default export */ var components_vsAlert = (function (Vue) {
  Vue.component(vsAlert.name, vsAlert);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsChip/vsChip.vue?vue&type=template&id=6c639850&lang=html

var vsChipvue_type_template_id_6c639850_lang_html_hoisted_1 = {
  class: "text-chip vs-chip--text"
};
function vsChipvue_type_template_id_6c639850_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleChip),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-chip-".concat($props.color), {
      'closable': $props.closable,
      'con-color': $props.color,
      'bg-chip-transparent': $props.transparent
    }], "con-vs-chip"])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", vsChipvue_type_template_id_6c639850_lang_html_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")]), $props.closable ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("button", {
    key: 0,
    class: "btn-close vs-chip--close",
    type: "button",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.closeChip && $options.closeChip.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, {
    "icon-pack": $props.iconPack,
    icon: $props.closeIcon
  }, null, 8, ["icon-pack", "icon"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 6);
}
// CONCATENATED MODULE: ./src/components/vsChip/vsChip.vue?vue&type=template&id=6c639850&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsChip/vsChip.vue?vue&type=script&lang=js

/* harmony default export */ var vsChipvue_type_script_lang_js = ({
  name: 'VsChip',
  props: {
    item: {
      type: Boolean
    },
    modelValue: {},
    active: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: null
    },
    closable: {
      type: [Boolean, String],
      default: false
    },
    color: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    closeIcon: {
      type: String,
      default: 'clear'
    },
    transparent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    styleChip: function styleChip() {
      var background = this.transparent ? utils_color.getColor(this.color, .15) : utils_color.getColor(this.color, 1);
      var color = this.transparent ? utils_color.getColor(this.color, 1) : this.color ? 'rgba(255,255,255,.9)' : 'rgba(0,0,0,.7)';
      return {
        background: background,
        color: color
      };
    },
    eliminado: function eliminado() {
      if (this.item) {
        return true;
      } else {
        if (this.vsClosable) {
          return this.modelValue;
        } else {
          return true;
        }
      }
    }
  },
  methods: {
    closeChip: function closeChip() {
      this.$emit('update:modelValue', false);
      this.$emit('click');
    },
    remove: function remove() {
      this.$emit('vs-remove', false);
      this.$emit('update:modelValue', false);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsChip/vsChip.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsChip/vsChip.vue





const vsChip_exports_ = /*#__PURE__*/exportHelper_default()(vsChipvue_type_script_lang_js, [['render',vsChipvue_type_template_id_6c639850_lang_html_render]])

/* harmony default export */ var vsChip = (vsChip_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsChip/vsChips.vue?vue&type=template&id=408e502a&lang=html

var vsChipsvue_type_template_id_408e502a_lang_html_hoisted_1 = {
  class: ""
};
var vsChipsvue_type_template_id_408e502a_lang_html_hoisted_2 = ["placeholder"];
function vsChipsvue_type_template_id_408e502a_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsChipsvue_type_template_id_408e502a_lang_html_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'no-items': _ctx.value.length == 0
    }, "con-chips"])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default"), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    placeholder: $props.modelValue.length > 0 ? null : $props.placeholder,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.newChip = $event;
    }),
    type: "text",
    class: "con-chips--input",
    onKeypress: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(function () {
      return $options.addItem && $options.addItem.apply($options, arguments);
    }, ["enter"]))
  }, null, 40, vsChipsvue_type_template_id_408e502a_lang_html_hoisted_2), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.newChip]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "x-global con-chips--remove-all",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.removeTotalItems && $options.removeTotalItems.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, {
    "icon-pack": $props.iconPack,
    icon: $props.removeIcon
  }, null, 8, ["icon-pack", "icon"])])], 2)]);
}
// CONCATENATED MODULE: ./src/components/vsChip/vsChips.vue?vue&type=template&id=408e502a&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsChip/vsChips.vue?vue&type=script&lang=js



/* harmony default export */ var vsChipsvue_type_script_lang_js = ({
  name: 'VsChips',
  components: {
    vsChip: vsChip
  },
  props: {
    modelValue: {},
    vsColor: {
      type: String,
      default: 'primary'
    },
    placeholder: {
      type: String,
      default: ''
    },
    items: {
      type: Array
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    removeIcon: {
      type: String,
      default: 'close'
    }
  },
  data: function data() {
    return {
      newChip: '',
      chip1: true
    };
  },
  methods: {
    addItem: function addItem() {
      var modelValueOld = this.modelValue;
      modelValueOld.push(this.newChip);
      this.$emit('update:modelValue', modelValueOld);
      this.newChip = '';
    },
    removeTotalItems: function removeTotalItems() {
      var modelValueOld = this.modelValue;
      modelValueOld.splice(0, this.modelValue.length);
      this.$emit('update:modelValue', modelValueOld);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsChip/vsChips.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsChip/vsChips.vue





const vsChips_exports_ = /*#__PURE__*/exportHelper_default()(vsChipsvue_type_script_lang_js, [['render',vsChipsvue_type_template_id_408e502a_lang_html_render]])

/* harmony default export */ var vsChips = (vsChips_exports_);
// CONCATENATED MODULE: ./src/components/vsChip/index.js




/* harmony default export */ var components_vsChip = (function (Vue) {
  Vue.component(vsChip.name, vsChip);
  Vue.component(vsChips.name, vsChips);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsProgress/vsProgress.vue?vue&type=template&id=df48fcfc&lang=html

function vsProgressvue_type_template_id_df48fcfc_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-progress-".concat($props.color), {
      'indeterminate': $props.indeterminate
    }], "vs-progress--background"]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleConProgress)
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleProgress),
    class: "vs-progress--foreground"
  }, null, 4), $props.indeterminate ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 0,
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleProgress),
    class: "vs-progress--indeterminate"
  }, null, 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 6);
}
// CONCATENATED MODULE: ./src/components/vsProgress/vsProgress.vue?vue&type=template&id=df48fcfc&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsProgress/vsProgress.vue?vue&type=script&lang=js



/* harmony default export */ var vsProgressvue_type_script_lang_js = ({
  name: 'VsProgress',
  props: {
    height: {
      type: [Number, String],
      default: 5
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    percent: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: 'primary'
    }
  },
  data: function data() {
    return {
      percentx: 0
    };
  },
  computed: {
    styleConProgress: function styleConProgress() {
      return {
        background: utils_color.getColor(this.color, .1),
        height: "".concat(this.height, "px")
      };
    },
    styleProgress: function styleProgress() {
      return {
        background: utils_color.getColor(this.color),
        width: "".concat(this.percentx, "%")
      };
    }
  },
  watch: {
    percent: function percent() {
      this.percentx = this.percent;
    }
  },
  created: function created() {
    this.percentx = 0;
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.percentx = _this.percent; // to force animation
    }, 600);
  }
});
// CONCATENATED MODULE: ./src/components/vsProgress/vsProgress.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsProgress/vsProgress.vue





const vsProgress_exports_ = /*#__PURE__*/exportHelper_default()(vsProgressvue_type_script_lang_js, [['render',vsProgressvue_type_template_id_df48fcfc_lang_html_render]])

/* harmony default export */ var vsProgress = (vsProgress_exports_);
// CONCATENATED MODULE: ./src/components/vsProgress/index.js



/* harmony default export */ var components_vsProgress = (function (Vue) {
  Vue.component(vsProgress.name, vsProgress);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsCard/vsCard.vue?vue&type=template&id=32732618

var vsCardvue_type_template_id_32732618_hoisted_1 = {
  key: 0,
  class: "vs-card--header"
};
var vsCardvue_type_template_id_32732618_hoisted_2 = {
  key: 1,
  class: "vs-card--media"
};
var vsCardvue_type_template_id_32732618_hoisted_3 = {
  key: 3,
  class: "vs-card-extra--content"
};
function vsCardvue_type_template_id_32732618_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'withHover': $props.actionable,
      'fixedHeight': $props.fixedHeight
    }, "con-vs-card"])
  }, [$options.hasSlot('header') ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("header", vsCardvue_type_template_id_32732618_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "header")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $options.hasSlot('media') ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsCardvue_type_template_id_32732618_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "media")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $options.hasSlot('default') ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 2,
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'fixedHeight': $props.fixedHeight
    }, "vs-card--content"])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $options.hasSlot('extra-content') ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsCardvue_type_template_id_32732618_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "extra-content")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $options.hasSlot('footer') ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("footer", {
    key: 4,
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'fixedHeight': $props.fixedHeight
    }, "vs-card--footer"])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "footer")], 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 2);
}
// CONCATENATED MODULE: ./src/components/vsCard/vsCard.vue?vue&type=template&id=32732618

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsCard/vsCard.vue?vue&type=script&lang=js
/* harmony default export */ var vsCardvue_type_script_lang_js = ({
  name: 'VsCard',
  props: {
    actionable: {
      default: false,
      type: Boolean
    },
    fixedHeight: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    hasSlot: function hasSlot(slot) {
      return this.$slots[slot];
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsCard/vsCard.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsCard/vsCard.vue





const vsCard_exports_ = /*#__PURE__*/exportHelper_default()(vsCardvue_type_script_lang_js, [['render',vsCardvue_type_template_id_32732618_render]])

/* harmony default export */ var vsCard = (vsCard_exports_);
// CONCATENATED MODULE: ./src/components/vsCard/index.js



/* harmony default export */ var components_vsCard = (function (Vue) {
  Vue.component(vsCard.name, vsCard);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsList/vsList.vue?vue&type=template&id=38998322&lang=html

var vsListvue_type_template_id_38998322_lang_html_hoisted_1 = {
  class: "vs-list"
};
function vsListvue_type_template_id_38998322_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsListvue_type_template_id_38998322_lang_html_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")]);
}
// CONCATENATED MODULE: ./src/components/vsList/vsList.vue?vue&type=template&id=38998322&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsList/vsList.vue?vue&type=script&lang=js
/* harmony default export */ var vsListvue_type_script_lang_js = ({
  name: 'VsList'
});
// CONCATENATED MODULE: ./src/components/vsList/vsList.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsList/vsList.vue





const vsList_exports_ = /*#__PURE__*/exportHelper_default()(vsListvue_type_script_lang_js, [['render',vsListvue_type_template_id_38998322_lang_html_render]])

/* harmony default export */ var vsList = (vsList_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsList/vsListItem.vue?vue&type=template&id=c3fb47ec&lang=html

var vsListItemvue_type_template_id_c3fb47ec_lang_html_hoisted_1 = {
  class: "vs-list--item"
};
var vsListItemvue_type_template_id_c3fb47ec_lang_html_hoisted_2 = {
  key: 0,
  class: "vs-list--avatar"
};
var vsListItemvue_type_template_id_c3fb47ec_lang_html_hoisted_3 = {
  key: 1,
  class: "vs-list--icon"
};
var vsListItemvue_type_template_id_c3fb47ec_lang_html_hoisted_4 = {
  class: "list-titles"
};
var vsListItemvue_type_template_id_c3fb47ec_lang_html_hoisted_5 = {
  key: 0,
  class: "vs-list--title"
};
var vsListItemvue_type_template_id_c3fb47ec_lang_html_hoisted_6 = {
  key: 2,
  class: "vs-list--subtitle"
};
var vsListItemvue_type_template_id_c3fb47ec_lang_html_hoisted_7 = {
  class: "vs-list--slot"
};
function vsListItemvue_type_template_id_c3fb47ec_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsListItemvue_type_template_id_c3fb47ec_lang_html_hoisted_1, [_ctx.$slots.avatar ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsListItemvue_type_template_id_c3fb47ec_lang_html_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "avatar")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.icon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsListItemvue_type_template_id_c3fb47ec_lang_html_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, {
    "icon-pack": $props.iconPack,
    icon: $props.icon
  }, null, 8, ["icon-pack", "icon"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsListItemvue_type_template_id_c3fb47ec_lang_html_hoisted_4, [$props.title ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsListItemvue_type_template_id_c3fb47ec_lang_html_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.title), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "title", {
    key: 1
  }), $props.subtitle ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsListItemvue_type_template_id_c3fb47ec_lang_html_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.subtitle), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "subtitle", {
    key: 3
  })]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsListItemvue_type_template_id_c3fb47ec_lang_html_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")])]);
}
// CONCATENATED MODULE: ./src/components/vsList/vsListItem.vue?vue&type=template&id=c3fb47ec&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsList/vsListItem.vue?vue&type=script&lang=js
/* harmony default export */ var vsListItemvue_type_script_lang_js = ({
  name: 'VsListItem',
  props: {
    vsAvatar: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsList/vsListItem.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsList/vsListItem.vue





const vsListItem_exports_ = /*#__PURE__*/exportHelper_default()(vsListItemvue_type_script_lang_js, [['render',vsListItemvue_type_template_id_c3fb47ec_lang_html_render]])

/* harmony default export */ var vsListItem = (vsListItem_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsList/vsListHeader.vue?vue&type=template&id=75b02950&lang=html

var vsListHeadervue_type_template_id_75b02950_lang_html_hoisted_1 = {
  key: 0,
  class: "vs-list--icon"
};
var vsListHeadervue_type_template_id_75b02950_lang_html_hoisted_2 = {
  class: "list-titles"
};
var vsListHeadervue_type_template_id_75b02950_lang_html_hoisted_3 = {
  key: 0,
  class: "vs-list--title"
};
function vsListHeadervue_type_template_id_75b02950_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-header-list-".concat($props.color), {
      'with-icon': $props.icon
    }], "vs-list--header"]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleHeader)
  }, [$props.icon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsListHeadervue_type_template_id_75b02950_lang_html_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, {
    "icon-pack": $props.iconPack,
    icon: $props.icon
  }, null, 8, ["icon-pack", "icon"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsListHeadervue_type_template_id_75b02950_lang_html_hoisted_2, [$props.title ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsListHeadervue_type_template_id_75b02950_lang_html_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.title), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])], 6);
}
// CONCATENATED MODULE: ./src/components/vsList/vsListHeader.vue?vue&type=template&id=75b02950&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsList/vsListHeader.vue?vue&type=script&lang=js

/* harmony default export */ var vsListHeadervue_type_script_lang_js = ({
  name: 'VsListHeader',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    }
  },
  computed: {
    styleHeader: function styleHeader() {
      return {
        color: utils_color.getColor(this.color)
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsList/vsListHeader.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsList/vsListHeader.vue





const vsListHeader_exports_ = /*#__PURE__*/exportHelper_default()(vsListHeadervue_type_script_lang_js, [['render',vsListHeadervue_type_template_id_75b02950_lang_html_render]])

/* harmony default export */ var vsListHeader = (vsListHeader_exports_);
// CONCATENATED MODULE: ./src/components/vsList/index.js





/* harmony default export */ var components_vsList = (function (Vue) {
  Vue.component(vsList.name, vsList);
  Vue.component(vsListItem.name, vsListItem);
  Vue.component(vsListHeader.name, vsListHeader);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsAvatar/vsAvatar.vue?vue&type=template&id=3eb7ca6e&lang=html

var vsAvatarvue_type_template_id_3eb7ca6e_lang_html_hoisted_1 = {
  key: 1,
  class: "con-img vs-avatar--con-img"
};
var vsAvatarvue_type_template_id_3eb7ca6e_lang_html_hoisted_2 = ["src", "alt"];
var vsAvatarvue_type_template_id_3eb7ca6e_lang_html_hoisted_3 = ["title"];
function vsAvatarvue_type_template_id_3eb7ca6e_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])(_ctx.$attrs, {
    style: $options.avatarStyle,
    class: [$options.avatarClass, "con-vs-avatar"]
  }), [$props.badge && $props.badge > 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 0,
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.badgeStyle),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([$options.badgeClass, "dot-count vs-avatar--count"])
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(typeof $props.badge != 'boolean' ? $props.badge : null), 7)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.src ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsAvatarvue_type_template_id_3eb7ca6e_lang_html_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: $props.src,
    alt: $props.text
  }, null, 8, vsAvatarvue_type_template_id_3eb7ca6e_lang_html_hoisted_2)])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
    key: 2,
    title: $props.text,
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.textStyle),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([[$props.text ? '' : $props.iconPack, $props.text ? '' : $props.icon, $options.textClass], "vs-avatar--text notranslate"]),
    translate: "no"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.text ? $options.returnText : $props.iconPack == 'material-icons' ? $props.icon : ''), 15, vsAvatarvue_type_template_id_3eb7ca6e_lang_html_hoisted_3))], 16);
}
// CONCATENATED MODULE: ./src/components/vsAvatar/vsAvatar.vue?vue&type=template&id=3eb7ca6e&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsAvatar/vsAvatar.vue?vue&type=script&lang=js











/* harmony default export */ var vsAvatarvue_type_script_lang_js = ({
  name: 'VsAvatar',
  props: {
    badge: {
      type: [Boolean, String, Number],
      default: false
    },
    badgeColor: {
      default: 'danger',
      type: String
    },
    size: {
      type: String,
      default: null
    },
    src: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: 'person'
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    textColor: {
      type: String,
      default: 'rgb(255, 255, 255)'
    },
    text: {
      type: [String, Number],
      default: null
    },
    color: {
      type: String,
      default: 'rgb(195, 195, 195)'
    }
  },
  computed: {
    avatarClass: function avatarClass() {
      var classes = {};
      classes[this.size] = true;

      if (utils_color.isColor(this.color)) {
        classes["con-vs-avatar-".concat(this.color)] = true;
      }

      return classes;
    },
    avatarStyle: function avatarStyle() {
      var style = {
        width: /[px]/.test(this.size) ? this.size : null,
        height: /[px]/.test(this.size) ? this.size : null
      };

      if (!utils_color.isColor(this.color)) {
        style.background = utils_color.getColor(this.color);
      }

      return style;
    },
    badgeClass: function badgeClass() {
      var classes = {
        badgeNumber: typeof badge != 'boolean'
      };

      if (utils_color.isColor(this.badgeColor)) {
        classes["dot-count-".concat(this.badgeColor)] = true;
      }

      return classes;
    },
    badgeStyle: function badgeStyle() {
      var style = {};

      if (!utils_color.isColor(this.badgeColor)) {
        style.background = utils_color.getColor(this.badgeColor);
      }

      return style;
    },
    textClass: function textClass() {
      var classes = {
        'material-icons': !this.text
      };

      if (utils_color.isColor(this.textColor)) {
        classes["vs-avatar-text-".concat(this.textColor)] = true;
      }

      return classes;
    },
    textStyle: function textStyle() {
      var style = {
        transform: "translate(-50%,-50%) scale(".concat(this.returnScale, ")")
      };

      if (!utils_color.isColor(this.textColor)) {
        style.color = utils_color.getColor(this.textColor);
      }

      return style;
    },
    returnText: function returnText() {
      if (this.text.length <= 5) {
        return this.text;
      }

      var exp = /\s/g;
      var letras = '';

      if (exp.test(this.text)) {
        this.text.split(exp).forEach(function (word) {
          letras += word[0].toUpperCase();
        });
      } else {
        letras = this.text[0].toUpperCase();
      }

      return letras.length > 5 ? letras[0] : letras;
    },
    returnScale: function returnScale() {
      if (!this.text) return 1;
      var lengthx = this.returnText.length;

      if (lengthx <= 5 && lengthx > 1) {
        return lengthx / (lengthx * 1.50);
      } else {
        return 1;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsAvatar/vsAvatar.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsAvatar/vsAvatar.vue





const vsAvatar_exports_ = /*#__PURE__*/exportHelper_default()(vsAvatarvue_type_script_lang_js, [['render',vsAvatarvue_type_template_id_3eb7ca6e_lang_html_render]])

/* harmony default export */ var vsAvatar = (vsAvatar_exports_);
// CONCATENATED MODULE: ./src/components/vsAvatar/index.js



/* harmony default export */ var components_vsAvatar = (function (Vue) {
  Vue.component(vsAvatar.name, vsAvatar);
});
// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("0aba");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("321b");

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsPagination/vsPagination.vue?vue&type=template&id=d26aab72





var vsPaginationvue_type_template_id_d26aab72_hoisted_1 = {
  style: {
    "margin-right": "5px"
  }
};
var vsPaginationvue_type_template_id_d26aab72_hoisted_2 = {
  class: "vs-pagination--array"
};
var vsPaginationvue_type_template_id_d26aab72_hoisted_3 = ["onClick"];
var vsPaginationvue_type_template_id_d26aab72_hoisted_4 = {
  key: 0
};
var vsPaginationvue_type_template_id_d26aab72_hoisted_5 = {
  class: "vs-pagination--nav"
};
var vsPaginationvue_type_template_id_d26aab72_hoisted_6 = ["disabled"];
var vsPaginationvue_type_template_id_d26aab72_hoisted_7 = {
  class: "vs-pagination--ul"
};
var vsPaginationvue_type_template_id_d26aab72_hoisted_8 = ["onClick"];

var vsPaginationvue_type_template_id_d26aab72_hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "effect"
}, null, -1);

var vsPaginationvue_type_template_id_d26aab72_hoisted_10 = ["disabled"];
var vsPaginationvue_type_template_id_d26aab72_hoisted_11 = ["max"];
function vsPaginationvue_type_template_id_d26aab72_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_col = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-col");

  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  var _component_vs_row = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-row");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_vs_row, {
    "vs-justify": $props.description ? 'space-between' : 'center',
    "vs-type": "flex",
    "vs-w": "12"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [$props.description ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_vs_col, {
        key: 0,
        class: "vs-pagination--mb",
        "vs-type": "flex",
        "vs-justify": "flex-start",
        "vs-align": "center",
        "vs-lg": "6",
        "vs-sm": "12",
        "vs-xs": "12"
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", vsPaginationvue_type_template_id_d26aab72_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.descriptionTitle) + ": " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.minRows) + " - " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.maxRows) + " " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.descriptionConnector) + " " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.sizeArray) + " | " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.descriptionBody) + ": ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", vsPaginationvue_type_template_id_d26aab72_hoisted_2, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.descriptionItems, function (row, index) {
            return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
              key: index
            }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
              style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleDescription),
              class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["vs-description-".concat($props.color), {
                'vs-pagination--bold': index == _ctx.indexRows
              }]),
              onClick: function onClick($event) {
                return $options.changeRowMaxItems(index);
              }
            }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(row), 15, vsPaginationvue_type_template_id_d26aab72_hoisted_3), index != $props.descriptionItems.length - 1 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", vsPaginationvue_type_template_id_d26aab72_hoisted_4, " , ")) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
          }), 128))])])];
        }),
        _: 1
      })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_col, {
        "vs-lg": $props.description ? 6 : 12,
        class: "vs-pagination--mb",
        "vs-type": "flex",
        "vs-justify": "flex-end",
        "vs-align": "center",
        "vs-sm": "12",
        "vs-xs": "12"
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
            style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.stylePagination),
            class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-pagination-".concat($props.color)], "con-vs-pagination"])
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("nav", vsPaginationvue_type_template_id_d26aab72_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
            class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
              disabled: _ctx.current <= 1 ? 'disabled' : null
            }, "vs-pagination--buttons btn-prev-pagination vs-pagination--button-prev"]),
            disabled: _ctx.current === 1,
            onClick: _cache[0] || (_cache[0] = function () {
              return $options.prevPage && $options.prevPage.apply($options, arguments);
            })
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, {
            "icon-pack": $props.iconPack,
            icon: $props.prevIcon ? $props.prevIcon : $options.defaultPrevIcon
          }, null, 8, ["icon-pack", "icon"])], 10, vsPaginationvue_type_template_id_d26aab72_hoisted_6), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", vsPaginationvue_type_template_id_d26aab72_hoisted_7, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.pages, function (page, index) {
            return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
              key: index,
              class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
                'is-current': page == _ctx.current
              }, "item-pagination vs-pagination--li"]),
              onClick: function onClick($event) {
                return $options.goTo(page);
              }
            }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(page), 1), vsPaginationvue_type_template_id_d26aab72_hoisted_9], 10, vsPaginationvue_type_template_id_d26aab72_hoisted_8);
          }), 128))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
            class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
              disabled: _ctx.current === $props.total ? 'disabled' : null
            }, "vs-pagination--buttons btn-next-pagination vs-pagination--button-next"]),
            disabled: _ctx.current === $props.total,
            onClick: _cache[1] || (_cache[1] = function () {
              return $options.nextPage && $options.nextPage.apply($options, arguments);
            })
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, {
            "icon-pack": $props.iconPack,
            icon: $props.nextIcon ? $props.nextIcon : $options.defaultNextIcon
          }, null, 8, ["icon-pack", "icon"])], 10, vsPaginationvue_type_template_id_d26aab72_hoisted_10), $props.goto ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("input", {
            key: 0,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return _ctx.go = $event;
            }),
            max: $props.total,
            class: "vs-pagination--input-goto",
            min: "1",
            type: "number",
            onChange: _cache[3] || (_cache[3] = function () {
              return $options.goTo && $options.goTo.apply($options, arguments);
            })
          }, null, 40, vsPaginationvue_type_template_id_d26aab72_hoisted_11)), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.go]]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])], 6)];
        }),
        _: 1
      }, 8, ["vs-lg"])];
    }),
    _: 1
  }, 8, ["vs-justify"]);
}
// CONCATENATED MODULE: ./src/components/vsPagination/vsPagination.vue?vue&type=template&id=d26aab72

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("3d48");

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsPagination/vsPagination.vue?vue&type=script&lang=js









/* harmony default export */ var vsPaginationvue_type_script_lang_js = ({
  name: 'VsPagination',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    total: {
      type: Number,
      required: true
    },
    sizeArray: {
      type: Number,
      required: false
    },
    maxItems: {
      type: [Number, String],
      required: false
    },
    modelValue: {
      type: Number,
      required: true,
      default: 1
    },
    max: {
      type: Number,
      default: 9
    },
    goto: {
      type: Boolean
    },
    type: {
      type: String
    },
    prevIcon: {
      type: String
    },
    nextIcon: {
      type: String
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    description: {
      default: false,
      type: Boolean
    },
    descriptionItems: {
      default: function _default() {
        return [];
      },
      type: Array
    },
    descriptionTitle: {
      type: String,
      default: 'Registries'
    },
    descriptionConnector: {
      type: String,
      default: 'of'
    },
    descriptionBody: {
      type: String,
      default: 'Pages'
    }
  },
  data: function data() {
    return {
      pages: [],
      current: 0,
      go: 0,
      prevRange: '',
      nextRange: '',
      hoverBtn1: false,
      minRows: 0,
      maxRows: 0,
      indexRows: 0
    };
  },
  computed: {
    defaultNextIcon: function defaultNextIcon() {
      if (this.$vs.rtl) return 'chevron_left';
      return 'chevron_right';
    },
    defaultPrevIcon: function defaultPrevIcon() {
      if (this.$vs.rtl) return 'chevron_right';
      return 'chevron_left';
    },
    stylePagination: function stylePagination() {
      var style = {};

      if (!utils_color.isColor(this.color)) {
        style = {
          '--vs-color-pagination': utils_color.getColor(this.color),
          '--vs-color-pagination-alpha': utils_color.getColor(this.color, .5)
        };
      }

      return style;
    },
    styleDescription: function styleDescription() {
      return {
        'cursor': 'pointer'
      };
    }
  },
  watch: {
    current: function current(val) {
      this.getPages();
      this.calculateMinMax(val);
      this.$emit('update:modelValue', this.current);
      this.$emit('change', this.current);
    },
    total: function total() {
      this.getPages();
    },
    max: function max() {
      this.getPages();
    },
    modelValue: function modelValue(val) {
      var pageNum = val < 1 ? 1 : val <= this.total ? val : this.total;
      this.goTo(pageNum);
    }
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.current = _this.go = _this.modelValue;
              _context.next = 3;
              return _this.calculateMinMax(_this.current);

            case 3:
              _this.indexRows = _this.descriptionItems.indexOf(_this.maxItems);

              _this.getPages();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    changeRowMaxItems: function changeRowMaxItems(index) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.indexRows = index;
                _context2.next = 3;
                return _this2.$emit('changeMaxItems', index);

              case 3:
                _context2.next = 5;
                return _this2.calculateMinMax(_this2.current);

              case 5:
                _this2.current = 1;

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    calculateMinMax: function calculateMinMax(val) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.maxRows = val * _this3.maxItems <= _this3.sizeArray ? val * _this3.maxItems : _this3.sizeArray;
                _this3.minRows = val * _this3.maxItems <= _this3.sizeArray ? _this3.maxRows - _this3.maxItems + 1 : (_this3.current - 1) * _this3.maxItems + 1;

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    isEllipsis: function isEllipsis(page) {
      return page === '...';
    },
    goTo: function goTo(page) {
      if (page === '...') {
        return;
      }

      if (typeof page.target === 'undefined') {
        this.current = page;
      } else {
        var modelValue = parseInt(page.target.value, 10);
        this.go = modelValue < 1 ? 1 : modelValue <= this.total ? modelValue : this.total;
        this.current = this.go;
      }
    },
    getPages: function getPages() {
      if (this.total <= this.max) {
        var pages = this.setPages(1, this.total);
        this.pages = pages;
      }

      var even = this.max % 2 === 0 ? 1 : 0;

      if (this.total < 6) {
        this.prevRange = Math.floor(this.max / (this.max / 2));
      } else {
        this.prevRange = Math.floor(this.max / 2);
      }

      this.nextRange = this.total - this.prevRange + 1 + even;

      if (this.current >= this.prevRange && this.current <= this.nextRange) {
        var start = this.current - this.prevRange + 2;
        var end = this.current + this.prevRange - 2 - even;
        this.pages = [1, '...'].concat(_toConsumableArray(this.setPages(start, end)), ['...', this.total]);
      } else if (this.total < 6) {
        this.pages = _toConsumableArray(this.setPages(1, this.total));
      } else {
        this.pages = [].concat(_toConsumableArray(this.setPages(1, this.prevRange)), ['...'], _toConsumableArray(this.setPages(this.nextRange, this.total)));
      }
    },
    setPages: function setPages(start, end) {
      var setPages = [];

      for (start > 0 ? start : 1; start <= end; start++) {
        setPages.push(start);
      }

      return setPages;
    },
    nextPage: function nextPage() {
      if (this.current < this.total) {
        this.current++;
      }
    },
    prevPage: function prevPage() {
      if (this.current > 1) {
        this.current--;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsPagination/vsPagination.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsPagination/vsPagination.vue





const vsPagination_exports_ = /*#__PURE__*/exportHelper_default()(vsPaginationvue_type_script_lang_js, [['render',vsPaginationvue_type_template_id_d26aab72_render]])

/* harmony default export */ var vsPagination = (vsPagination_exports_);
// CONCATENATED MODULE: ./src/components/vsPagination/index.js



/* harmony default export */ var components_vsPagination = (function (Vue) {
  Vue.component(vsPagination.name, vsPagination);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsBreadcrumb/vsBreadcrumb.vue?vue&type=template&id=43ef543e&lang=html

var vsBreadcrumbvue_type_template_id_43ef543e_lang_html_hoisted_1 = {
  class: "vs-breadcrumb--ol"
};
var vsBreadcrumbvue_type_template_id_43ef543e_lang_html_hoisted_2 = ["aria-current"];
var vsBreadcrumbvue_type_template_id_43ef543e_lang_html_hoisted_3 = ["href", "title", "textContent"];
var vsBreadcrumbvue_type_template_id_43ef543e_lang_html_hoisted_4 = ["textContent"];
var vsBreadcrumbvue_type_template_id_43ef543e_lang_html_hoisted_5 = ["textContent"];
function vsBreadcrumbvue_type_template_id_43ef543e_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("nav", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])(_ctx.$attrs, {
    class: ["vs-align-".concat($props.align), "vs-breadcrumb"],
    "aria-label": "breadcrumb"
  }), [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ol", vsBreadcrumbvue_type_template_id_43ef543e_lang_html_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default"), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.items, function (item) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
      key: item.title,
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])({
        'vs-active': item.active,
        'disabled-link': item.disabled
      }),
      "aria-current": item.active ? 'page' : null
    }, [!item.active ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
      key: 0,
      href: item.url ? item.url : '#',
      title: item.title,
      class: "vs-breadcrumb--link",
      textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(item.title)
    }, null, 8, vsBreadcrumbvue_type_template_id_43ef543e_lang_html_hoisted_3)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
      key: 1,
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([$options.textClass, "vs-breadcrumb--text"]),
      style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.textStyle),
      textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(item.title)
    }, null, 14, vsBreadcrumbvue_type_template_id_43ef543e_lang_html_hoisted_4)), !item.active ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
      key: 2,
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([$props.separator.length > 1 ? 'material-icons' : null, "separator notranslate vs-breadcrum--separator"]),
      translate: "no",
      "aria-hidden": "true",
      textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.separator)
    }, null, 10, vsBreadcrumbvue_type_template_id_43ef543e_lang_html_hoisted_5)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 10, vsBreadcrumbvue_type_template_id_43ef543e_lang_html_hoisted_2)), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !$options.hasSlot]]);
  }), 128))])], 16);
}
// CONCATENATED MODULE: ./src/components/vsBreadcrumb/vsBreadcrumb.vue?vue&type=template&id=43ef543e&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsBreadcrumb/vsBreadcrumb.vue?vue&type=script&lang=js




/* harmony default export */ var vsBreadcrumbvue_type_script_lang_js = ({
  name: 'VsBreadcrumb',
  props: {
    items: {
      type: Array
    },
    separator: {
      type: String,
      default: '/'
    },
    color: {
      type: String,
      default: 'primary'
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    textClass: function textClass() {
      var classes = {};

      if (utils_color.isColor(this.color)) {
        classes["vs-breadcrumb-text-".concat(this.color)] = true;
      }

      return classes;
    },
    textStyle: function textStyle() {
      var style = {};

      if (!utils_color.isColor(this.color)) {
        style.color = utils_color.getColor(this.color);
      }

      return style;
    },
    hasSlot: function hasSlot() {
      return !!this.$slots.default;
    }
  },
  created: function created() {
    var _this = this;

    if (this.items) {
      this.items = this.items.map(function (item) {
        if (typeof item.title === "function") {
          return _objectSpread2(_objectSpread2({}, item), {}, {
            title: item.title(_this.$route.params)
          });
        }

        return item;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsBreadcrumb/vsBreadcrumb.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsBreadcrumb/vsBreadcrumb.vue





const vsBreadcrumb_exports_ = /*#__PURE__*/exportHelper_default()(vsBreadcrumbvue_type_script_lang_js, [['render',vsBreadcrumbvue_type_template_id_43ef543e_lang_html_render]])

/* harmony default export */ var vsBreadcrumb = (vsBreadcrumb_exports_);
// CONCATENATED MODULE: ./src/components/vsBreadcrumb/index.js



/* harmony default export */ var components_vsBreadcrumb = (function (Vue) {
  Vue.component(vsBreadcrumb.name, vsBreadcrumb);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/functions/vsDialog/index.vue?vue&type=template&id=f7263632&lang=html

var vsDialogvue_type_template_id_f7263632_lang_html_hoisted_1 = {
  ref: "dialogx",
  class: "vs-dialog"
};
var vsDialogvue_type_template_id_f7263632_lang_html_hoisted_2 = {
  class: "con-title-after"
};
var vsDialogvue_type_template_id_f7263632_lang_html_hoisted_3 = {
  class: "dialog-title"
};
var vsDialogvue_type_template_id_f7263632_lang_html_hoisted_4 = {
  class: "vs-dialog-text"
};
var vsDialogvue_type_template_id_f7263632_lang_html_hoisted_5 = {
  key: 0
};
var vsDialogvue_type_template_id_f7263632_lang_html_hoisted_6 = {
  key: 1
};
function vsDialogvue_type_template_id_f7263632_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  var _component_vs_button = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-button");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "dialog-t"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [(_ctx.isPrompt ? $props.active : _ctx.fActive) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
        key: 0,
        ref: "con",
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-dialog-".concat($props.color)], "vs-component con-vs-dialog"])
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        class: "vs-dialog-dark",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return $options.handleClose($event, true);
        })
      }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsDialogvue_type_template_id_f7263632_lang_html_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("header", {
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleHeader),
        class: "vs-dialog-header"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsDialogvue_type_template_id_f7263632_lang_html_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleAfter),
        class: "after"
      }, null, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", vsDialogvue_type_template_id_f7263632_lang_html_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.title), 1)]), $props.type == 'alert' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_vs_icon, {
        key: 0,
        icon: $props.closeIcon,
        "icon-pack": $props.iconPack,
        class: "vs-dialog-cancel vs-dialog-cancel--icon notranslate",
        onClick: $options.handleClose
      }, null, 8, ["icon", "icon-pack", "onClick"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsDialogvue_type_template_id_f7263632_lang_html_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default"), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.text), 1)]), ($props.buttonsHidden ? false : _ctx.isPrompt || $props.type == 'confirm') ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("footer", vsDialogvue_type_template_id_f7263632_lang_html_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_button, {
        disabled: $props.isValid == 'none' ? false : !$props.isValid,
        color: $props.color,
        type: $props.buttonAccept,
        class: "vs-dialog-accept-button",
        onClick: $options.acceptDialog
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.acceptText), 1)];
        }),
        _: 1
      }, 8, ["disabled", "color", "type", "onClick"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_button, {
        "text-color": 'rgba(0,0,0,.5)',
        type: $props.buttonCancel,
        class: "vs-dialog-cancel-button",
        onClick: $options.cancelClose
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.cancelText), 1)];
        }),
        _: 1
      }, 8, ["text-color", "type", "onClick"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.type == 'alert' && !_ctx.isPrompt ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("footer", vsDialogvue_type_template_id_f7263632_lang_html_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_button, {
        color: $props.color,
        type: $props.buttonAccept,
        class: "vs-dialog-accept-button",
        onClick: $options.acceptDialog
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.acceptText), 1)];
        }),
        _: 1
      }, 8, ["color", "type", "onClick"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 512)], 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 3
  });
}
// CONCATENATED MODULE: ./src/functions/vsDialog/index.vue?vue&type=template&id=f7263632&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/functions/vsDialog/index.vue?vue&type=script&lang=js

/* harmony default export */ var vsDialogvue_type_script_lang_js = ({
  name: 'VsPrompt',
  props: {
    color: {
      default: 'primary',
      type: String
    },
    active: {
      default: false,
      type: Boolean
    },
    buttonAccept: {
      default: 'filled',
      type: String
    },
    buttonCancel: {
      default: 'flat',
      type: String
    },
    isValid: {
      default: 'none',
      type: [Boolean, String]
    },
    buttonsHidden: {
      default: false,
      type: Boolean
    },
    acceptText: {
      default: 'Accept',
      type: String
    },
    cancelText: {
      default: 'Cancel',
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    closeIcon: {
      default: 'close',
      type: String
    },
    text: {
      default: null,
      type: String
    },
    title: {
      default: 'Dialog',
      type: String
    },
    type: {
      default: 'alert',
      type: String
    },
    parent: {
      default: null
    }
  },
  data: function data() {
    return {
      isPrompt: true,
      fActive: false,
      parameters: null,
      console: console
    };
  },
  computed: {
    styleHeader: function styleHeader() {
      return {
        color: utils_color.getColor(this.color, 1)
      };
    },
    styleAfter: function styleAfter() {
      return {
        background: utils_color.getColor(this.color, 1)
      };
    }
  },
  watch: {
    active: function active() {
      var _this = this;

      this.$nextTick(function () {
        if (_this.active) {
          _this.insertBody();
        }
      });
    },
    fActive: function fActive() {
      var _this2 = this;

      this.$nextTick(function () {
        if (_this2.fActive) {
          _this2.insertBody();
        }
      });
    }
  },
  mounted: function mounted() {
    if (this.active && this.isPrompt) {
      this.insertBody();
    }

    this.fActive = this.active;
  },
  beforeUnmount: function beforeUnmount() {
    // close the left open prompt
    var elx = this.$refs.con;
    var parentx = this.parent ? this.parent : document.body;

    if (elx) {
      parentx.removeChild(elx);
    }
  },
  methods: {
    giveColor: function giveColor(color) {
      return utils_color.rColor(color);
    },
    acceptDialog: function acceptDialog() {
      if (!this.isPrompt) {
        this.accept ? this.accept(this.parameters) : null;
        this.fActive = false;
        this.$emit('update:active', false);
        this.$emit('accept', this.parameters);
      } else {
        if (this.isValid || this.isValid == 'none') {
          this.accept ? this.accept() : null;
          this.fActive = false;
          this.$emit('update:active', false);
          this.$emit('accept', this.parameters);
        }
      }
    },
    rebound: function rebound() {
      var _this3 = this;

      this.$refs.dialogx.classList.add('locked');
      setTimeout(function () {
        _this3.$refs.dialogx.classList.remove('locked');
      }, 200);
    },
    handleClose: function handleClose(event, con) {
      if (con) {
        if (event.target.className.indexOf('vs-dialog-dark') != -1 && this.type == 'alert') {
          this.fActive = false;
          this.$emit('update:active', false);
        } else if (event.target.className.indexOf('vs-dialog-dark') != -1) {
          this.rebound();
        }
      } else {
        if (event ? event.target.className.indexOf('vs-dialog-cancel') != -1 : event ? event.target.className.indexOf('vs-dialog-cancel--icon') != -1 : false) {
          this.fActive = false;
          this.$emit('update:active', false);
        }
      }

      this.$emit('close');
    },
    cancelClose: function cancelClose() {
      this.fActive = false;
      this.$emit('update:active', false);
      this.$emit('cancel'); // this.$emit('cancel')

      this.cancel ? this.cancel(this.parameters) : null;
    },
    insertBody: function insertBody() {
      var elx = this.$refs.con;
      var parentx = this.parent ? this.parent : document.body;
      parentx.insertBefore(elx, parentx.firstChild);
    }
  }
});
// CONCATENATED MODULE: ./src/functions/vsDialog/index.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/functions/vsDialog/index.vue





const vsDialog_exports_ = /*#__PURE__*/exportHelper_default()(vsDialogvue_type_script_lang_js, [['render',vsDialogvue_type_template_id_f7263632_lang_html_render]])

/* harmony default export */ var vsDialog = (vsDialog_exports_);
// CONCATENATED MODULE: ./src/components/vsPrompt/index.js



/* harmony default export */ var vsPrompt = (function (Vue) {
  Vue.component(vsDialog.name, vsDialog);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsDivider/vsDivider.vue?vue&type=template&id=4d91634e&lang=html

var vsDividervue_type_template_id_4d91634e_lang_html_hoisted_1 = {
  class: "vs-component vs-divider"
};
function vsDividervue_type_template_id_4d91634e_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsDividervue_type_template_id_4d91634e_lang_html_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([$options.borderClass, "vs-divider-border after"]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.afterStyle)
  }, null, 6), $props.icon || _ctx.$slots.default ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
    key: 0,
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      'color': $options.textColor,
      'background': $options.backgroundColor
    }),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([$options.textAndBackgroundClass, "vs-divider--text"])
  }, [!$props.icon ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {
    key: 0
  }) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_vs_icon, {
    key: 1,
    "icon-pack": $props.iconPack,
    icon: $props.icon,
    class: "icon-divider notranslate vs-divider--icon"
  }, null, 8, ["icon-pack", "icon"]))], 6)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.beforeStyle),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([$options.borderClass, "vs-divider-border before"])
  }, null, 6)]);
}
// CONCATENATED MODULE: ./src/components/vsDivider/vsDivider.vue?vue&type=template&id=4d91634e&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsDivider/vsDivider.vue?vue&type=script&lang=js

/* harmony default export */ var vsDividervue_type_script_lang_js = ({
  name: "VsDivider",
  props: {
    color: {
      type: String,
      default: 'rgba(0, 0, 0,.1)'
    },
    background: {
      type: String,
      default: 'transparent'
    },
    icon: {
      default: null,
      type: String
    },
    borderStyle: {
      default: 'solid',
      type: String
    },
    borderHeight: {
      default: '1px',
      type: String
    },
    position: {
      default: 'center',
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    }
  },
  computed: {
    getWidthAfter: function getWidthAfter() {
      var widthx = '100%';

      if (this.position == 'left') {
        widthx = '0%';
      } else if (this.position == 'left-center') {
        widthx = '25%';
      } else if (this.position == 'right-center') {
        widthx = '75%';
      } else if (this.position == 'right') {
        widthx = '100%';
      }

      return widthx;
    },
    getWidthBefore: function getWidthBefore() {
      var widthx = '100%';

      if (this.position == 'left') {
        widthx = '100%';
      } else if (this.position == 'left-center') {
        widthx = '75%';
      } else if (this.position == 'right-center') {
        widthx = '25%';
      } else if (this.position == 'right') {
        widthx = '0%';
      }

      return widthx;
    },
    borderColor: function borderColor() {
      if (!utils_color.isColor(this.color)) {
        return utils_color.getColor(this.color);
      }
    },
    afterStyle: function afterStyle() {
      var classes = {
        width: this.getWidthAfter,
        'border-top-width': this.borderHeight,
        'border-top-style': this.borderStyle
      };

      if (!utils_color.isColor(this.color)) {
        classes['border-top-color'] = this.borderColor;
      }

      return classes;
    },
    beforeStyle: function beforeStyle() {
      var classes = {
        width: this.getWidthBefore,
        'border-top-width': this.borderHeight,
        'border-top-style': this.borderStyle
      };

      if (!utils_color.isColor(this.color)) {
        classes['border-top-color'] = this.borderColor;
      }

      return classes;
    },
    borderClass: function borderClass() {
      var classes = {};
      var borderColor = utils_color.isColor(this.color) ? this.color : 'default';
      classes["vs-divider-border-".concat(borderColor)] = true;
      return classes;
    },
    textColor: function textColor() {
      if (!utils_color.isColor(this.color)) {
        return utils_color.getColor(this.color !== 'rgba(0, 0, 0,.1)' ? this.color : null);
      }
    },
    backgroundColor: function backgroundColor() {
      if (!utils_color.isColor(this.background)) {
        return utils_color.getColor(this.background);
      }
    },
    textAndBackgroundClass: function textAndBackgroundClass() {
      var classes = {};
      var textColor = utils_color.isColor(this.color) ? this.color : 'default';
      classes["vs-divider-text-".concat(textColor)] = true;
      var backgroundColor = utils_color.isColor(this.background) ? this.background : 'default';
      classes["vs-divider-background-".concat(backgroundColor)] = true;
      return classes;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsDivider/vsDivider.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsDivider/vsDivider.vue





const vsDivider_exports_ = /*#__PURE__*/exportHelper_default()(vsDividervue_type_script_lang_js, [['render',vsDividervue_type_template_id_4d91634e_lang_html_render]])

/* harmony default export */ var vsDivider = (vsDivider_exports_);
// CONCATENATED MODULE: ./src/components/vsDivider/index.js



/* harmony default export */ var components_vsDivider = (function (Vue) {
  Vue.component(vsDivider.name, vsDivider);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsSpacer/vsSpacer.vue?vue&type=template&id=44914ac6

var vsSpacervue_type_template_id_44914ac6_hoisted_1 = {
  class: "vs-spacer"
};
function vsSpacervue_type_template_id_44914ac6_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsSpacervue_type_template_id_44914ac6_hoisted_1);
}
// CONCATENATED MODULE: ./src/components/vsSpacer/vsSpacer.vue?vue&type=template&id=44914ac6

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsSpacer/vsSpacer.vue?vue&type=script&lang=js
/* harmony default export */ var vsSpacervue_type_script_lang_js = ({
  name: 'VsSpacer'
});
// CONCATENATED MODULE: ./src/components/vsSpacer/vsSpacer.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsSpacer/vsSpacer.vue





const vsSpacer_exports_ = /*#__PURE__*/exportHelper_default()(vsSpacervue_type_script_lang_js, [['render',vsSpacervue_type_template_id_44914ac6_render]])

/* harmony default export */ var vsSpacer = (vsSpacer_exports_);
// CONCATENATED MODULE: ./src/components/vsSpacer/index.js



/* harmony default export */ var components_vsSpacer = (function (Vue) {
  Vue.component(vsSpacer.name, vsSpacer);
});
// CONCATENATED MODULE: ./src/components/vsIcon/index.js



/* harmony default export */ var components_vsIcon = (function (Vue) {
  Vue.component(vsIcon.name, vsIcon);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsNavbar/vsNavbar.vue?vue&type=template&id=0524d10d&lang=html

var vsNavbarvue_type_template_id_0524d10d_lang_html_hoisted_1 = {
  class: "vs-navbar--header"
};

var vsNavbarvue_type_template_id_0524d10d_lang_html_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "btn-responsive-line line--1"
}, null, -1);

var vsNavbarvue_type_template_id_0524d10d_lang_html_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "btn-responsive-line line--2"
}, null, -1);

var vsNavbarvue_type_template_id_0524d10d_lang_html_hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "btn-responsive-line line--3"
}, null, -1);

var vsNavbarvue_type_template_id_0524d10d_lang_html_hoisted_5 = [vsNavbarvue_type_template_id_0524d10d_lang_html_hoisted_2, vsNavbarvue_type_template_id_0524d10d_lang_html_hoisted_3, vsNavbarvue_type_template_id_0524d10d_lang_html_hoisted_4];
function vsNavbarvue_type_template_id_0524d10d_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("header", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])([$options.styleNavbar, $props.style]),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-navbar-".concat($props.type), "vs-navbar-color-".concat($props.color), {
      'collapse': $props.collapse
    }, this.class], "vs-navbar"])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsNavbarvue_type_template_id_0524d10d_lang_html_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'active-menu': _ctx.activeMenuResponsive
    }, "vs-navbar--btn-responsive"]),
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.activeMenuResponsive = !_ctx.activeMenuResponsive;
    })
  }, vsNavbarvue_type_template_id_0524d10d_lang_html_hoisted_5, 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "title")]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'activeMenuResponsive': _ctx.activeMenuResponsive
    }, "vs-con-items"])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 2)], 6);
}
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbar.vue?vue&type=template&id=0524d10d&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsNavbar/vsNavbar.vue?vue&type=script&lang=js

/* harmony default export */ var vsNavbarvue_type_script_lang_js = ({
  name: 'VsNavbar',
  props: {
    modelValue: {},
    type: {
      default: null,
      type: String
    },
    collapse: {
      default: false,
      type: Boolean
    },
    color: {
      type: String,
      default: 'transparent'
    },
    activeTextColor: {
      type: String,
      default: 'primary'
    },
    textColor: {
      type: String,
      default: 'rgb(40,40,40)'
    },
    // temporary fix because missing from $attrs
    class: {},
    style: {}
  },
  data: function data() {
    return {
      activeMenuResponsive: false
    };
  },
  computed: {
    styleNavbar: function styleNavbar() {
      if (utils_color.isColor(this.color)) {
        return {
          background: "rgb(".concat(utils_color.changeColor(this.color), ")")
        };
      }

      return {
        background: utils_color.getColor(this.color)
      };
    }
  },
  methods: {
    changeIndex: function changeIndex(index) {
      this.$emit('update:modelValue', index);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbar.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbar.vue





const vsNavbar_exports_ = /*#__PURE__*/exportHelper_default()(vsNavbarvue_type_script_lang_js, [['render',vsNavbarvue_type_template_id_0524d10d_lang_html_render]])

/* harmony default export */ var vsNavbar = (vsNavbar_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsNavbar/vsNavItem.vue?vue&type=template&id=38413b8f

function vsNavItemvue_type_template_id_38413b8f_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])([$options.styleHover]),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([[{
      'is-active-item': $options.isActiveItem
    }, "vs-navbar-item-".concat($options.getActiveTextColor)], "vs-navbar--item"]),
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.clickItem();
    }),
    onMouseout: _cache[1] || (_cache[1] = function () {
      return $options.mouseout && $options.mouseout.apply($options, arguments);
    }),
    onMouseover: _cache[2] || (_cache[2] = function () {
      return $options.mouseover && $options.mouseover.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default"), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])([$options.styleAfter]),
    class: "vs-navbar-after"
  }, null, 4)], 38);
}
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavItem.vue?vue&type=template&id=38413b8f

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsNavbar/vsNavItem.vue?vue&type=script&lang=js



/* harmony default export */ var vsNavItemvue_type_script_lang_js = ({
  name: 'VsNavbarItem',
  props: {
    index: {
      type: [Number, String],
      default: null
    }
  },
  data: function data() {
    return {
      hover: false
    };
  },
  computed: {
    getActiveTextColor: function getActiveTextColor() {
      return this.$parent.$props.activeTextColor;
    },
    isActiveItem: function isActiveItem() {
      return this.$parent.modelValue == this.index;
    },
    styleAfter: function styleAfter() {
      return {
        background: utils_color.getColor(this.getActiveTextColor)
      };
    },
    styleHover: function styleHover() {
      if (this.isActiveItem) {
        return {
          color: utils_color.getColor(this.getActiveTextColor)
        };
      } else {
        return {
          color: this.hover ? utils_color.getColor(this.getActiveTextColor) : utils_color.getColor(this.$parent.$props.textColor)
        };
      }
    }
  },
  methods: {
    clickItem: function clickItem() {
      this.$parent.changeIndex(this.index);
    },
    mouseout: function mouseout() {
      this.hover = false;
    },
    mouseover: function mouseover() {
      this.hover = true;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavItem.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavItem.vue





const vsNavItem_exports_ = /*#__PURE__*/exportHelper_default()(vsNavItemvue_type_script_lang_js, [['render',vsNavItemvue_type_template_id_38413b8f_render]])

/* harmony default export */ var vsNavItem = (vsNavItem_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsNavbar/vsNavGroup.vue?vue&type=template&id=2d6da28e

var vsNavGroupvue_type_template_id_2d6da28e_hoisted_1 = {
  class: "vs-nav-item"
};
var vsNavGroupvue_type_template_id_2d6da28e_hoisted_2 = {
  class: "vs-nav-item-slot"
};
var vsNavGroupvue_type_template_id_2d6da28e_hoisted_3 = {
  class: "vs-nav-submenu"
};
function vsNavGroupvue_type_template_id_2d6da28e_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", vsNavGroupvue_type_template_id_2d6da28e_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsNavGroupvue_type_template_id_2d6da28e_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", vsNavGroupvue_type_template_id_2d6da28e_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "submenu")])]);
}
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavGroup.vue?vue&type=template&id=2d6da28e

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsNavbar/vsNavGroup.vue?vue&type=script&lang=js
/* harmony default export */ var vsNavGroupvue_type_script_lang_js = ({
  name: 'VsNavbarGroup'
});
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavGroup.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavGroup.vue





const vsNavGroup_exports_ = /*#__PURE__*/exportHelper_default()(vsNavGroupvue_type_script_lang_js, [['render',vsNavGroupvue_type_template_id_2d6da28e_render]])

/* harmony default export */ var vsNavGroup = (vsNavGroup_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsNavbar/vsNavbarTitle.vue?vue&type=template&id=abff2492

var vsNavbarTitlevue_type_template_id_abff2492_hoisted_1 = {
  class: "vs-navbar--title"
};
function vsNavbarTitlevue_type_template_id_abff2492_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("h3", vsNavbarTitlevue_type_template_id_abff2492_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")]);
}
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarTitle.vue?vue&type=template&id=abff2492

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsNavbar/vsNavbarTitle.vue?vue&type=script&lang=js
/* harmony default export */ var vsNavbarTitlevue_type_script_lang_js = ({
  name: 'VsNavbarTitle'
});
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarTitle.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarTitle.vue





const vsNavbarTitle_exports_ = /*#__PURE__*/exportHelper_default()(vsNavbarTitlevue_type_script_lang_js, [['render',vsNavbarTitlevue_type_template_id_abff2492_render]])

/* harmony default export */ var vsNavbarTitle = (vsNavbarTitle_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsNavbar/vsNavbarItems.vue?vue&type=template&id=fd9aae46

var vsNavbarItemsvue_type_template_id_fd9aae46_hoisted_1 = {
  class: "vs-navbar--items"
};
function vsNavbarItemsvue_type_template_id_fd9aae46_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsNavbarItemsvue_type_template_id_fd9aae46_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")]);
}
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarItems.vue?vue&type=template&id=fd9aae46

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsNavbar/vsNavbarItems.vue?vue&type=script&lang=js
/* harmony default export */ var vsNavbarItemsvue_type_script_lang_js = ({
  name: 'VsNavbarItems'
});
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarItems.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarItems.vue





const vsNavbarItems_exports_ = /*#__PURE__*/exportHelper_default()(vsNavbarItemsvue_type_script_lang_js, [['render',vsNavbarItemsvue_type_template_id_fd9aae46_render]])

/* harmony default export */ var vsNavbarItems = (vsNavbarItems_exports_);
// CONCATENATED MODULE: ./src/components/vsNavbar/index.js







/* harmony default export */ var components_vsNavbar = (function (Vue) {
  Vue.component(vsNavbar.name, vsNavbar);
  Vue.component(vsNavItem.name, vsNavItem);
  Vue.component(vsNavGroup.name, vsNavGroup);
  Vue.component(vsNavbarTitle.name, vsNavbarTitle);
  Vue.component(vsNavbarItems.name, vsNavbarItems);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsSideBar/vsSidebar.vue?vue&type=template&id=2d0f2132


var vsSidebarvue_type_template_id_2d0f2132_hoisted_1 = {
  key: 0,
  class: "vs-sidebar--background"
};
var vsSidebarvue_type_template_id_2d0f2132_hoisted_2 = {
  key: 0,
  class: "vs-sidebar--header"
};
var vsSidebarvue_type_template_id_2d0f2132_hoisted_3 = {
  class: "vs-sidebar--items"
};
var vsSidebarvue_type_template_id_2d0f2132_hoisted_4 = {
  key: 2,
  class: "vs-sidebar--footer"
};
function vsSidebarvue_type_template_id_2d0f2132_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_spacer = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-spacer");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "vs-sidebar-animate"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        ref: "sidebarbackground",
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([_ctx.$attrs.class, "vs-content-sidebar"]),
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.$attrs.style)
      }, [!$props.hiddenBackground ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsSidebarvue_type_template_id_2d0f2132_hoisted_1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        ref: "sidebarContainer",
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-sidebar-".concat($props.color), {
          'vs-sidebar-parent': $props.parent != 'body',
          'vs-sidebar-staticPosition': $props.staticPosition,
          'vs-sidebar-position-right': $props.positionRight,
          'vs-sidebar-reduce': $props.reduce,
          'vs-sidebar-reduceNotRebound': $props.reduceNotRebound,
          'vs-sidebar-reduceNotHoverExpand': $props.reduceNotHoverExpand
        }], "vs-sidebar"])
      }, [_ctx.$slots.header ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("header", vsSidebarvue_type_template_id_2d0f2132_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "header")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsSidebarvue_type_template_id_2d0f2132_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")]), $props.spacer ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_vs_spacer, {
        key: 1
      })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.$slots.footer ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("footer", vsSidebarvue_type_template_id_2d0f2132_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "footer")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 2)], 6), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $props.staticPosition || $props.modelValue]])];
    }),
    _: 3
  });
}
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebar.vue?vue&type=template&id=2d0f2132

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsSideBar/vsSidebar.vue?vue&type=script&lang=js


/* harmony default export */ var vsSidebarvue_type_script_lang_js = ({
  name: 'VsSidebar',
  props: {
    modelValue: {
      default: false
    },
    defaultIndex: {
      default: null,
      type: [String, Number]
    },
    color: {
      default: 'primary',
      type: String
    },
    parent: {
      default: null,
      type: [String, Object]
    },
    spacer: {
      default: false,
      type: Boolean
    },
    staticPosition: {
      default: false,
      type: Boolean
    },
    positionRight: {
      default: false,
      type: Boolean
    },
    clickNotClose: {
      default: false,
      type: Boolean
    },
    reduce: {
      default: false,
      type: Boolean
    },
    reduceNotRebound: {
      default: false,
      type: Boolean
    },
    reduceNotHoverExpand: {
      default: false,
      type: Boolean
    },
    hiddenBackground: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      currentIndex: 0
    };
  },
  watch: {
    modelValue: function modelValue() {
      if (!this.clickNotClose) this.addEventClick();
    }
  },
  created: function created() {
    this.currentIndex = this.defaultIndex;
  },
  mounted: function mounted() {
    this.insertBody();
  },
  methods: {
    getActive: function getActive() {
      return this.currentIndex;
    },
    setIndexActive: function setIndexActive(index) {
      this.currentIndex = index;
    },
    addEventClick: function addEventClick() {
      var _this = this;

      this.$nextTick(function () {
        var parentx = typeof _this.parent == 'string' ? document.querySelector(_this.parent) : _this.parent;
        var element = parentx || window;

        if (_this.modelValue) {
          setTimeout(function () {
            element.addEventListener('click', _this.closeSidebar);
          }, 300);
        }
      });
    },
    closeSidebar: function closeSidebar(evt) {
      var parent = evt.target.closest('.vs-sidebar');

      if (!parent) {
        this.$emit('update:modelValue', false);
        var parentx = typeof this.parent == 'string' ? document.querySelector(this.parent) : this.parent;
        var element = parentx || window;
        element.removeEventListener('click', this.closeSidebar);
      }
    },
    insertBody: function insertBody() {
      if (this.parent) {
        var elx = this.$refs.sidebarbackground;
        var parentx = typeof this.parent == 'string' ? document.querySelector(this.parent) : this.parent;
        parentx.insertBefore(elx, parentx.firstChild);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebar.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebar.vue





const vsSidebar_exports_ = /*#__PURE__*/exportHelper_default()(vsSidebarvue_type_script_lang_js, [['render',vsSidebarvue_type_template_id_2d0f2132_render]])

/* harmony default export */ var vsSidebar = (vsSidebar_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsSideBar/vsSidebarItem.vue?vue&type=template&id=4b9f5f94

var vsSidebarItemvue_type_template_id_4b9f5f94_hoisted_1 = ["href"];
function vsSidebarItemvue_type_template_id_4b9f5f94_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  var _component_router_link = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("router-link");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'vs-sidebar-item-active': $options.getActive
    }, "vs-sidebar--item"]),
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.setIndexActive && $options.setIndexActive.apply($options, arguments);
    })
  }, [$props.to ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_router_link, {
    key: 0,
    to: $props.to
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, {
        "icon-pack": $props.iconPack,
        icon: $props.icon
      }, null, 8, ["icon-pack", "icon"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 8, ["to"])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 1,
    href: $props.href
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, {
    "icon-pack": $props.iconPack,
    icon: $props.icon
  }, null, 8, ["icon-pack", "icon"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 8, vsSidebarItemvue_type_template_id_4b9f5f94_hoisted_1))], 2);
}
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarItem.vue?vue&type=template&id=4b9f5f94

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsSideBar/vsSidebarItem.vue?vue&type=script&lang=js


/* harmony default export */ var vsSidebarItemvue_type_script_lang_js = ({
  name: 'VsSidebarItem',
  props: {
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    href: {
      default: '#',
      type: String
    },
    to: {
      default: null,
      type: [String, Object]
    },
    index: {
      default: null,
      type: [String, Number]
    }
  },
  computed: {
    getActive: function getActive() {
      return this.$parent.getActive() == this.index;
    }
  },
  methods: {
    setIndexActive: function setIndexActive() {
      this.$parent.setIndexActive(this.index);
      this.$emit('click');
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarItem.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarItem.vue





const vsSidebarItem_exports_ = /*#__PURE__*/exportHelper_default()(vsSidebarItemvue_type_script_lang_js, [['render',vsSidebarItemvue_type_template_id_4b9f5f94_render]])

/* harmony default export */ var vsSidebarItem = (vsSidebarItem_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsSideBar/vsSidebarGroup.vue?vue&type=template&id=03dfb3d2


var vsSidebarGroupvue_type_template_id_03dfb3d2_hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("keyboard_arrow_down");

var vsSidebarGroupvue_type_template_id_03dfb3d2_hoisted_2 = {
  class: "vs-sidebar--tooltip"
};
function vsSidebarGroupvue_type_template_id_03dfb3d2_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'vs-sidebar-group-open': _ctx.openItems
    }, "vs-sidebar-group"]),
    onMouseover: _cache[1] || (_cache[1] = function () {
      return $options.mouseover && $options.mouseover.apply($options, arguments);
    }),
    onMouseout: _cache[2] || (_cache[2] = function () {
      return $options.mouseout && $options.mouseout.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h4", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.clickGroup && $options.clickGroup.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.title) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, null, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [vsSidebarGroupvue_type_template_id_03dfb3d2_hoisted_1];
    }),
    _: 1
  })]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", vsSidebarGroupvue_type_template_id_03dfb3d2_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.title), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", {
    ref: "items",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleItems),
    class: "vs-sidebar--group-items"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 4)], 34);
}
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarGroup.vue?vue&type=template&id=03dfb3d2

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsSideBar/vsSidebarGroup.vue?vue&type=script&lang=js
/* harmony default export */ var vsSidebarGroupvue_type_script_lang_js = ({
  name: 'VsSidebarGroup',
  props: {
    collapsed: {
      default: false,
      type: Boolean
    },
    title: {
      default: null,
      type: String
    },
    openHover: {
      default: false,
      type: Boolean
    },
    open: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      maxHeight: '0px',
      openItems: false
    };
  },
  computed: {
    styleItems: function styleItems() {
      return {
        maxHeight: this.maxHeight
      };
    }
  },
  watch: {
    maxHeight: function maxHeight() {
      this.openItems = this.maxHeight != '0px';
    }
  },
  mounted: function mounted() {
    this.openItems = this.open;

    if (this.open) {
      this.maxHeight = 'none';
    }
  },
  methods: {
    getActive: function getActive() {
      return this.$parent.getActive();
    },
    setIndexActive: function setIndexActive(index) {
      this.$parent.setIndexActive(index);
    },
    clickGroup: function clickGroup() {
      var _this = this;

      if (!this.openHover) {
        var scrollHeight = this.$refs.items.scrollHeight;

        if (this.maxHeight == '0px') {
          this.maxHeight = "".concat(scrollHeight, "px");
          setTimeout(function () {
            _this.maxHeight = 'none';
          }, 300);
        } else {
          this.maxHeight = "".concat(scrollHeight, "px");
          setTimeout(function () {
            _this.maxHeight = "".concat(0, "px");
          }, 50);
        }
      }
    },
    mouseover: function mouseover() {
      if (this.openHover) {
        var scrollHeight = this.$refs.items.scrollHeight;
        this.maxHeight = "".concat(scrollHeight, "px");
      }
    },
    mouseout: function mouseout() {
      if (this.openHover) {
        var scrollHeight = 0;
        this.maxHeight = "".concat(scrollHeight, "px");
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarGroup.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarGroup.vue





const vsSidebarGroup_exports_ = /*#__PURE__*/exportHelper_default()(vsSidebarGroupvue_type_script_lang_js, [['render',vsSidebarGroupvue_type_template_id_03dfb3d2_render]])

/* harmony default export */ var vsSidebarGroup = (vsSidebarGroup_exports_);
// CONCATENATED MODULE: ./src/components/vsSideBar/index.js





/* harmony default export */ var vsSideBar = (function (Vue) {
  Vue.component(vsSidebar.name, vsSidebar);
  Vue.component(vsSidebarItem.name, vsSidebarItem);
  Vue.component(vsSidebarGroup.name, vsSidebarGroup);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsDropDown/vsDropDown.vue?vue&type=template&id=b9c6891e&lang=html

function vsDropDownvue_type_template_id_b9c6891e_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("button", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: ['vs-con-dropdown parent-dropdown', _ctx.$attrs.class],
    style: _ctx.$attrs.style
  }, $options.attrs, {
    ref: "dropdown",
    type: "button"
  }), [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 16);
}
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDown.vue?vue&type=template&id=b9c6891e&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsDropDown/vsDropDown.vue?vue&type=script&lang=js







/* harmony default export */ var vsDropDownvue_type_script_lang_js = ({
  name: "VsDropdown",
  //inheritAttrs: false,
  props: {
    vsTriggerClick: {
      default: false,
      type: Boolean
    },
    vsTriggerContextmenu: {
      default: false,
      type: Boolean
    },
    color: {
      default: 'primary',
      type: String
    },
    vsCustomContent: {
      default: false,
      type: Boolean
    },
    vsDropRight: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      vsDropdownVisible: false,
      rightx: false,
      childrenItems: []
    };
  },
  computed: {
    attrs: function attrs() {
      var _this = this;

      return _objectSpread2(_objectSpread2({}, this.$attrs), {}, {
        onContextmenu: function onContextmenu(evt) {
          return _this.vsTriggerContextmenu ? _this.clickToogleMenu(evt, true) : {};
        },
        onClick: function onClick(evt) {
          if (!_this.vsTriggerContextmenu) {
            _this.clickToogleMenu(evt);
          }

          if (_this.$el === evt.target) {
            _this.$emit('click');
          }
        },
        onMouseout: function onMouseout(evt) {
          return _this.toggleMenu('out', evt);
        },
        onMouseover: function onMouseover(evt) {
          return _this.toggleMenu('over', evt);
        }
      });
    }
  },
  watch: {
    vsDropdownVisible: function vsDropdownVisible() {
      this.changePositionMenu();

      if (this.vsDropdownVisible) {
        this.$emit('focus');
        document.addEventListener('click', this.clickx);
      } else {
        this.$emit('blur');
      }
    }
  },
  mounted: function mounted() {
    this.changeColor();
    document.addEventListener('click', this.clickx);
  },
  beforeUnmount: function beforeUnmount() {
    document.removeEventListener('click', this.clickx);
  },
  methods: {
    clickx: function clickx(evt) {
      var _this$childrenItems$f = this.childrenItems.filter(function (item) {
        return Object.prototype.hasOwnProperty.call(item, 'dropdownVisible');
      }),
          _this$childrenItems$f2 = _slicedToArray(_this$childrenItems$f, 1),
          dropdownMenu = _this$childrenItems$f2[0];

      dropdownMenu.vsCustomContent = this.vsCustomContent;
      dropdownMenu.vsTriggerClick = this.vsTriggerClick;
      dropdownMenu.vsDropRight = this.vsDropRight;

      if ((this.vsTriggerClick || this.vsCustomContent) && this.vsDropdownVisible) {
        if (evt.target !== this.$refs.dropdown && evt.target.parentNode !== this.$refs.dropdown && evt.target.parentNode.parentNode !== this.$refs.dropdown) {
          if (!evt.target.closest('.vs-dropdown--menu')) {
            dropdownMenu.dropdownVisible = this.vsDropdownVisible = false;
            document.removeEventListener('click', this.clickx);
          }
        }
      }
    },
    changeColor: function changeColor() {
      var child = this.childrenItems;
      child.forEach(function (item) {// todo : fix vnode
        //if (item.$vnode.tag.indexOf('dropdown') != -1) {
        //item.color = this.color
        //}
      });
    },
    changePositionMenu: function changePositionMenu() {
      var _this2 = this;

      var _this$childrenItems$f3 = this.childrenItems.filter(function (item) {
        return Object.prototype.hasOwnProperty.call(item, 'dropdownVisible');
      }),
          _this$childrenItems$f4 = _slicedToArray(_this$childrenItems$f3, 1),
          dropdownMenu = _this$childrenItems$f4[0];

      var scrollTopx = window.pageYOffset || document.documentElement.scrollTop;

      if (this.$refs.dropdown.getBoundingClientRect().top + 300 >= window.innerHeight) {
        this.$nextTick(function () {
          dropdownMenu.topx = _this2.$refs.dropdown.getBoundingClientRect().top - dropdownMenu.$el.clientHeight - 7 + scrollTopx;
          dropdownMenu.notHeight = true;
        });
      } else {
        dropdownMenu.notHeight = false;
        dropdownMenu.topx = this.$refs.dropdown.getBoundingClientRect().top + this.$refs.dropdown.clientHeight + scrollTopx - 5;
      }

      this.$nextTick(function () {
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (_this2.$refs.dropdown.getBoundingClientRect().left + dropdownMenu.$el.offsetWidth >= w - 25) {// this.rightx = true
        }

        if (_this2.$refs.dropdown.getBoundingClientRect().right < dropdownMenu.$el.clientWidth + 25) {
          dropdownMenu.leftx = dropdownMenu.$el.clientWidth + _this2.$refs.dropdown.getBoundingClientRect().left;
          _this2.rightx = true;
          return;
        }

        dropdownMenu.leftx = _this2.$refs.dropdown.getBoundingClientRect().left + (_this2.vsDropRight ? dropdownMenu.$el.clientWidth : _this2.$refs.dropdown.clientWidth);
      });
    },
    clickToogleMenu: function clickToogleMenu(evt) {
      var _this3 = this;

      if (evt.type == 'contextmenu') {
        evt.preventDefault();
      }

      var _this$childrenItems$f5 = this.childrenItems.filter(function (item) {
        return Object.prototype.hasOwnProperty.call(item, 'dropdownVisible');
      }),
          _this$childrenItems$f6 = _slicedToArray(_this$childrenItems$f5, 1),
          dropdownMenu = _this$childrenItems$f6[0];

      if (this.vsTriggerClick || this.vsTriggerContextmenu) {
        if (this.vsDropdownVisible && !evt.target.closest('.vs-dropdown--menu')) {
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = false;
        } else {
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = true;
          window.addEventListener('click', function () {
            if (!evt.target.closest('.vs-con-dropdown') && !evt.target.closest('.vs-dropdown--menu')) {
              dropdownMenu.dropdownVisible = _this3.vsDropdownVisible = false;
            }
          });
        }
      }

      this.$emit('click');
    },
    toggleMenu: function toggleMenu(typex, evt) {
      var _this$childrenItems$f7 = this.childrenItems.filter(function (item) {
        return Object.prototype.hasOwnProperty.call(item, 'dropdownVisible');
      }),
          _this$childrenItems$f8 = _slicedToArray(_this$childrenItems$f7, 1),
          dropdownMenu = _this$childrenItems$f8[0];

      if (!this.vsTriggerClick && !this.vsTriggerContextmenu) {
        if (typex == 'over') {
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = true;
        } else {
          if (!evt.relatedTarget.classList.contains('vs-dropdown-menu')) {
            dropdownMenu.dropdownVisible = this.vsDropdownVisible = false;
          }
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDown.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDown.vue





const vsDropDown_exports_ = /*#__PURE__*/exportHelper_default()(vsDropDownvue_type_script_lang_js, [['render',vsDropDownvue_type_template_id_b9c6891e_lang_html_render]])

/* harmony default export */ var vsDropDown = (vsDropDown_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsDropDown/vsDropDownMenu.vue?vue&type=template&id=e6dd2880&lang=html

var vsDropDownMenuvue_type_template_id_e6dd2880_lang_html_hoisted_1 = {
  key: 0,
  class: "vs-component vs-dropdown--menu"
};
var vsDropDownMenuvue_type_template_id_e6dd2880_lang_html_hoisted_2 = {
  key: 1,
  class: "vs-dropdown--custom vs-dropdown--menu"
};
function vsDropDownMenuvue_type_template_id_e6dd2880_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "dropdownx"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [_ctx.dropdownVisible ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
        key: 0,
        ref: "options",
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
          'rightx': _ctx.vsDropRight || _ctx.$parent.rightx,
          'notHeight': _ctx.notHeight
        }, "con-vs-dropdown--menu vs-dropdown-menu"]),
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])([{
          'left': "".concat(_ctx.leftx, "px"),
          'top': "".concat(_ctx.topx, "px")
        }, {
          "position": "absolute!important"
        }]),
        onMouseleave: _cache[0] || (_cache[0] = function () {
          return $options.mouseleavex && $options.mouseleavex.apply($options, arguments);
        }),
        onMouseenter: _cache[1] || (_cache[1] = function () {
          return $options.mouseenterx && $options.mouseenterx.apply($options, arguments);
        })
      }, [!_ctx.vsCustomContent ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("ul", vsDropDownMenuvue_type_template_id_e6dd2880_lang_html_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsDropDownMenuvue_type_template_id_e6dd2880_lang_html_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")])), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        ref: "menuAfter",
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([_ctx.vsDropRight ? 'vs-dropdown-right--menu--after' : 'vs-dropdown--menu--after'])
      }, null, 2)], 38)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 3
  });
}
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownMenu.vue?vue&type=template&id=e6dd2880&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsDropDown/vsDropDownMenu.vue?vue&type=script&lang=js





/* harmony default export */ var vsDropDownMenuvue_type_script_lang_js = ({
  name: "VsDropdownMenu",
  data: function data() {
    return {
      dropdownVisible: false,
      leftAfter: 20,
      leftx: 0,
      topx: 0,
      rightx: true,
      vsTriggerClick: false,
      vsDropRight: false,
      widthx: 0,
      notHeight: false,
      vsCustomContent: false,
      parentNode: null,
      childrenItems: []
    };
  },
  watch: {
    dropdownVisible: function dropdownVisible(val) {
      var dropdownGroup = this.childrenItems.filter(function (item) {
        return Object.prototype.hasOwnProperty.call(item, 'activeGroup');
      });
      dropdownGroup.forEach(function (item_group) {
        item_group.activeGroup = false;
      });
      this.setDirection();
      !val ? this.$parent.rightx = false : null;
    }
  },
  mounted: function mounted() {
    this.insertBody();
    this.$parent.childrenItems.push(this);
  },
  beforeUnmount: function beforeUnmount() {
    this.$el.parentNode.removeChild(this.$el);
  },
  methods: {
    mouseenterx: function mouseenterx() {
      if (!this.vsTriggerClick) {
        this.dropdownVisible = true;
        this.widthx = this.$el.clientWidth;
      }
    },
    mouseleavex: function mouseleavex() {
      if (!this.vsTriggerClick) {
        this.dropdownVisible = false;
        this.widthx = this.$el.clientWidth;
      }
    },
    setDirection: function setDirection() {
      var _this = this;

      setTimeout(function () {
        var dropdown = _this.parentNode;
        var menuAfter = _this.$refs.menuAfter;
        if (!menuAfter) return;

        if (dropdown && menuAfter && dropdown.getBoundingClientRect().top + 300 >= window.innerHeight) {
          // const hasGroup = this.$childrenItems.find(it=>Object.prototype.hasOwnProperty.call(it, 'activeGroup'))
          menuAfter.style.bottom = '-5px';
          menuAfter.style.transform = 'rotate(225deg)';
          return;
        }

        menuAfter.style.top = '10px';
      }, 100);
    },
    toggleMenu: function toggleMenu(event) {
      if (event.type == 'mouseover' && !this.vsTriggerClick) {
        this.dropdownVisible = true;
      } else if (!this.vsTriggerClick) {
        this.dropdownVisible = false;
      }

      this.widthx = this.$el.clientWidth;
    },
    insertBody: function insertBody() {
      var elp = this.$el;
      this.parentNode = this.$root.$el.parentNode;
      document.body.prepend(elp);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownMenu.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownMenu.vue





const vsDropDownMenu_exports_ = /*#__PURE__*/exportHelper_default()(vsDropDownMenuvue_type_script_lang_js, [['render',vsDropDownMenuvue_type_template_id_e6dd2880_lang_html_render]])

/* harmony default export */ var vsDropDownMenu = (vsDropDownMenu_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsDropDown/vsDropDownItem.vue?vue&type=template&id=573fb5cd&lang=html

function vsDropDownItemvue_type_template_id_573fb5cd_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("router-link");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'divider': $props.divider
    }, "vs-component vs-dropdown--item"]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      'color': _ctx.hoverx ? $options.giveColor() + ' !important' : null,
      'background': _ctx.hoverx ? $options.giveColor(.01) + ' !important' : null
    }),
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.closeParent && $options.closeParent.apply($options, arguments);
    }),
    onMouseover: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.hoverx = true;
    }),
    onMouseout: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.hoverx = false;
    })
  }, [$props.to ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_router_link, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    key: 0
  }, _ctx.$attrs, {
    to: $props.to,
    class: [{
      'disabled': $props.disabled
    }, "vs-dropdown--item-link"]
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.$attrs.disabled) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["to", "class"])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    key: 1
  }, _ctx.$attrs, {
    class: [{
      'disabled': $props.disabled
    }, "vs-dropdown--item-link"]
  }), [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 16))], 38);
}
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownItem.vue?vue&type=template&id=573fb5cd&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsDropDown/vsDropDownItem.vue?vue&type=script&lang=js

/* harmony default export */ var vsDropDownItemvue_type_script_lang_js = ({
  name: "VsDropdownItem",
  inheritAttrs: false,
  props: {
    to: {},
    disabled: {
      default: false,
      type: Boolean
    },
    divider: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      hoverx: false,
      vsDropDownItem: true,
      color: null
    };
  },
  mounted: function mounted() {
    var _this2 = this;

    this.changeColor();
    this.searchParent(this, function (parent) {
      parent.childrenItems.push(_this2);
    });
  },
  updated: function updated() {
    this.changeColor();
  },
  methods: {
    searchParent: function searchParent(_this, callback) {
      var parent = _this.$parent;
      if (!parent.$el.className) return;

      if (!Object.prototype.hasOwnProperty.call(parent, 'childrenItems')) {
        this.searchParent(parent, callback);
      } else {
        callback(parent);
      }
    },
    closeParent: function closeParent() {
      var _this3 = this;

      if (this.disabled) return;
      this.searchParent(this, function (dropdownMenu) {
        _this3.searchParent(dropdownMenu, function (dropdown) {
          dropdownMenu.dropdownVisible = dropdown.vsDropdownVisible = false;
        });
      });
    },
    changeColor: function changeColor() {
      var _self = this;

      this.searchParent(this, function (parent) {
        _self.color = parent.color;
      });
    },
    giveColor: function giveColor() {
      var opacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return utils_color.rColor(this.color, opacity);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownItem.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownItem.vue





const vsDropDownItem_exports_ = /*#__PURE__*/exportHelper_default()(vsDropDownItemvue_type_script_lang_js, [['render',vsDropDownItemvue_type_template_id_573fb5cd_lang_html_render]])

/* harmony default export */ var vsDropDownItem = (vsDropDownItem_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsDropDown/vsDropDownGroup.vue?vue&type=template&id=484ce449&lang=html

var vsDropDownGroupvue_type_template_id_484ce449_lang_html_hoisted_1 = ["textContent"];
var vsDropDownGroupvue_type_template_id_484ce449_lang_html_hoisted_2 = ["textContent"];
var vsDropDownGroupvue_type_template_id_484ce449_lang_html_hoisted_3 = {
  class: "con-dropdown--group-ul"
};
function vsDropDownGroupvue_type_template_id_484ce449_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
    ref: "group",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'marginIcon': $props.vsCollapse,
      'no-cascading': !$props.vsCollapse,
      'group-rightx': _ctx.rightx
    }, "vs-component vs-dropdown--group"]),
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.clickGroup && $options.clickGroup.apply($options, arguments);
    })
  }, [$props.vsCollapse ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
    key: 0,
    class: "span vs-dropdown--group-label",
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.vsLabel)
  }, null, 8, vsDropDownGroupvue_type_template_id_484ce449_lang_html_hoisted_1)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("h3", {
    key: 1,
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.vsLabel)
  }, null, 8, vsDropDownGroupvue_type_template_id_484ce449_lang_html_hoisted_2)), $props.vsCollapse ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_vs_icon, {
    key: 2,
    "icon-pack": $props.iconPack,
    icon: $props.vsIcon,
    class: "icon-group notranslate vs-dropdown--group-icon"
  }, null, 8, ["icon-pack", "icon"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    ref: "ulx",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleItems),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'con-dropdown-group-no-cascading': !$props.vsCollapse
    }, "con-dropdown--group-con-ul"])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", vsDropDownGroupvue_type_template_id_484ce449_lang_html_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")])], 6)], 2);
}
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownGroup.vue?vue&type=template&id=484ce449&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsDropDown/vsDropDownGroup.vue?vue&type=script&lang=js
/* harmony default export */ var vsDropDownGroupvue_type_script_lang_js = ({
  name: 'VsDropdownGroup',
  props: {
    vsLabel: {
      default: 'Options',
      type: String
    },
    vsCollapse: {
      default: false,
      type: Boolean
    },
    vsIcon: {
      default: 'keyboard_arrow_right',
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    }
  },
  data: function data() {
    return {
      activeGroup: false,
      rightx: false,
      widthx: 0,
      maxHeight: '0px'
    };
  },
  computed: {
    styleItems: function styleItems() {
      return {
        maxHeight: this.vsCollapse ? this.maxHeight : 'auto'
      };
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.searchParent(this, function (parent) {
      parent.childrenItems.push(_this2);
    });
  },
  methods: {
    searchParent: function searchParent(_this, callback) {
      var parent = _this.$parent;
      if (!parent.$el.className) return;

      if (!Object.prototype.hasOwnProperty.call(parent, 'childrenItems')) {
        this.searchParent(parent, callback);
      } else {
        callback(parent);
      }
    },
    clickGroup: function clickGroup(evt) {
      var _this3 = this;

      if (evt.target != this.$refs.group) return;

      if (!this.openHover) {
        var scrollHeight = this.$refs.ulx.scrollHeight;

        if (this.maxHeight == '0px') {
          this.maxHeight = "".concat(scrollHeight, "px");
          setTimeout(function () {
            _this3.maxHeight = 'none';
          }, 300);
        } else {
          this.maxHeight = "".concat(scrollHeight, "px");
          setTimeout(function () {
            _this3.maxHeight = "".concat(0, "px");
          }, 50);
        }
      }
    },
    beforeEnter: function beforeEnter(el) {
      el.style.height = 0;
      el.style.opacity = 0;
    },
    enter: function enter(el, done) {
      // let h = this.$refs.ulx.scrollHeight
      // this.$refs.ulx.style.height = h + 'px'
      // el.style.opacity = 1
      // parents(this)
      // function parents(_this){
      //   if(_this.$parent.$el.className.search('vs-dropdown--group')!=-1){
      //     // this.$parent.$el
      //     let hp = _this.$parent.$refs.ulx.scrollHeight
      //     _this.$parent.$refs.ulx.style.height = hp + h + 'px'
      //     parents(_this.$parent)
      //   }
      // }
      done();
    },
    leave: function leave(el) {
      var __this = this;

      addParents(this);

      function addParents(_this) {
        if (_this.$parent.$refs.ulx) {
          var hp = _this.$parent.$refs.ulx.scrollHeight - __this.$refs.ulx.scrollHeight;
          _this.$parent.$refs.ulx.style.height = hp + 'px';
          addParents(_this.$parent);
        }
      }

      if (!this.$parent.$refs.ulx) {
        this.$refs.ulx.style.height = 0 + 'px';
      }

      this.$refs.ulx.style.height = 0 + 'px';
      el.style.opacity = 0;
    },
    toggleGroup: function toggleGroup(evt) {
      if (evt.target == this.$refs.group) {
        this.activeGroup = !this.activeGroup;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownGroup.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownGroup.vue





const vsDropDownGroup_exports_ = /*#__PURE__*/exportHelper_default()(vsDropDownGroupvue_type_script_lang_js, [['render',vsDropDownGroupvue_type_template_id_484ce449_lang_html_render]])

/* harmony default export */ var vsDropDownGroup = (vsDropDownGroup_exports_);
// CONCATENATED MODULE: ./src/components/vsDropDown/index.js






/* harmony default export */ var components_vsDropDown = (function (Vue) {
  Vue.component(vsDropDown.name, vsDropDown);
  Vue.component(vsDropDownMenu.name, vsDropDownMenu);
  Vue.component(vsDropDownItem.name, vsDropDownItem);
  Vue.component(vsDropDownGroup.name, vsDropDownGroup);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsTextarea/vsTextarea.vue?vue&type=template&id=2887782f&lang=html

var vsTextareavue_type_template_id_2887782f_lang_html_hoisted_1 = {
  key: 0
};
var vsTextareavue_type_template_id_2887782f_lang_html_hoisted_2 = ["value"];
var vsTextareavue_type_template_id_2887782f_lang_html_hoisted_3 = {
  key: 1,
  class: "count vs-textarea--count"
};
function vsTextareavue_type_template_id_2887782f_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.style),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-textarea-".concat($props.color), {
      'textarea-danger': $props.counter ? $props.modelValue && $props.modelValue.length > $props.counter : false,
      'focusx': _ctx.isFocus
    }], "vs-component vs-con-textarea"])
  }, [$props.label ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("h4", vsTextareavue_type_template_id_2887782f_lang_html_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("textarea", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])($options.attrs, {
    value: $props.modelValue,
    class: "vs-textarea"
  }), "\n    ", 16, vsTextareavue_type_template_id_2887782f_lang_html_hoisted_2), $props.counter ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", vsTextareavue_type_template_id_2887782f_lang_html_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.modelValue ? $props.modelValue.length : 0) + " / " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.counter), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 6);
}
// CONCATENATED MODULE: ./src/components/vsTextarea/vsTextarea.vue?vue&type=template&id=2887782f&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsTextarea/vsTextarea.vue?vue&type=script&lang=js




/* harmony default export */ var vsTextareavue_type_script_lang_js = ({
  name: "VsTextarea",
  inheritAttrs: false,
  props: {
    modelValue: {},
    label: {
      default: null,
      type: String
    },
    color: {
      default: 'primary',
      type: String
    },
    counter: {
      default: null,
      type: [Number, String]
    },
    counterDanger: {
      default: false,
      type: Boolean
    },
    height: {
      default: null,
      type: String
    },
    width: {
      default: null,
      type: String
    }
  },
  data: function data() {
    return {
      isFocus: false
    };
  },
  computed: {
    style: function style() {
      var style = {};
      style.border = "1px solid ".concat(this.isFocus ? utils_color.getColor(this.color, 1) : 'rgba(0, 0, 0,.08)');
      style.height = this.height;
      style.width = this.width;
      return style;
    },
    attrs: function attrs() {
      var _this = this;

      return _objectSpread2(_objectSpread2({}, this.$attrs), {}, {
        onInput: function onInput(evt) {
          _this.$emit('update:modelValue', evt.target.value);
        },
        onFocus: function onFocus() {
          _this.focus();
        },
        onBlur: function onBlur() {
          _this.blur();
        }
      });
    }
  },
  watch: {
    modelValue: function modelValue() {
      if (this.modelValue && this.modelValue.length > this.counter) {
        this.$emit('update:counterDanger', true);
      } else {
        this.$emit('update:counterDanger', false);
      }
    }
  },
  methods: {
    focus: function focus() {
      this.isFocus = true;
      this.$emit('focus');
    },
    blur: function blur() {
      this.isFocus = false;
      this.$emit('blur');
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsTextarea/vsTextarea.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsTextarea/vsTextarea.vue





const vsTextarea_exports_ = /*#__PURE__*/exportHelper_default()(vsTextareavue_type_script_lang_js, [['render',vsTextareavue_type_template_id_2887782f_lang_html_render]])

/* harmony default export */ var vsTextarea = (vsTextarea_exports_);
// CONCATENATED MODULE: ./src/components/vsTextarea/index.js



/* harmony default export */ var components_vsTextarea = (function (Vue) {
  Vue.component(vsTextarea.name, vsTextarea);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsCollapse/vsCollapse.vue?vue&type=template&id=612664fc

function vsCollapsevue_type_template_id_612664fc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([[$props.type], "vs-collapse"])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 2);
}
// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapse.vue?vue&type=template&id=612664fc

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsCollapse/vsCollapse.vue?vue&type=script&lang=js


/* harmony default export */ var vsCollapsevue_type_script_lang_js = ({
  name: 'VsCollapse',
  props: {
    accordion: {
      default: false,
      type: Boolean
    },
    type: {
      default: 'default',
      type: String
    },
    openHover: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    emitChange: function emitChange() {
      this.$emit('change');
    },
    closeAllItems: function closeAllItems(el) {
      var children = this.$children;
      children.map(function (item) {
        if (item.$el !== el) {
          item.maxHeight = '0px';
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapse.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapse.vue





const vsCollapse_exports_ = /*#__PURE__*/exportHelper_default()(vsCollapsevue_type_script_lang_js, [['render',vsCollapsevue_type_template_id_612664fc_render]])

/* harmony default export */ var vsCollapse = (vsCollapse_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsCollapse/vsCollapseItem.vue?vue&type=template&id=61592fee

var vsCollapseItemvue_type_template_id_61592fee_hoisted_1 = {
  key: 0,
  class: "icon-header vs-collapse-item--icon-header"
};
var vsCollapseItemvue_type_template_id_61592fee_hoisted_2 = {
  class: "con-content--item"
};
function vsCollapseItemvue_type_template_id_61592fee_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'open-item': _ctx.maxHeight != '0px',
      'disabledx': $props.disabled
    }, "vs-collapse-item"]),
    onMouseover: _cache[1] || (_cache[1] = function () {
      return $options.mouseover && $options.mouseover.apply($options, arguments);
    }),
    onMouseout: _cache[2] || (_cache[2] = function () {
      return $options.mouseout && $options.mouseout.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("header", {
    class: "vs-collapse-item--header",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.toggleContent && $options.toggleContent.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "header"), !$props.notArrow ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", vsCollapseItemvue_type_template_id_61592fee_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vs_icon, {
    "icon-pack": $props.iconPack,
    icon: $props.iconArrow
  }, null, 8, ["icon-pack", "icon"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    ref: "content",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleContent),
    class: "vs-collapse-item--content"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsCollapseItemvue_type_template_id_61592fee_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")])], 4)], 34);
}
// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapseItem.vue?vue&type=template&id=61592fee

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsCollapse/vsCollapseItem.vue?vue&type=script&lang=js

/* harmony default export */ var vsCollapseItemvue_type_script_lang_js = ({
  name: 'VsCollapseItem',
  components: {
    vsicon: components_vsIcon
  },
  props: {
    open: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
    notArrow: {
      default: false,
      type: Boolean
    },
    iconArrow: {
      default: 'keyboard_arrow_down',
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    sst: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      maxHeight: '0px',
      // only used for sst
      dataReady: false
    };
  },
  computed: {
    accordion: function accordion() {
      return this.$parent.accordion;
    },
    openHover: function openHover() {
      return this.$parent.openHover;
    },
    styleContent: function styleContent() {
      return {
        maxHeight: this.maxHeight
      };
    }
  },
  watch: {
    maxHeight: function maxHeight() {
      this.$parent.emitChange();
    },
    ready: function ready(newVal, oldVal) {
      if (oldVal != newVal && newVal) {
        this.initMaxHeight();
      }
    }
  },
  mounted: function mounted() {
    window.addEventListener('resize', this.changeHeight);
    var maxHeightx = this.$refs.content.scrollHeight;

    if (this.open) {
      this.maxHeight = "".concat(maxHeightx, "px");
    }
  },
  beforeUnmount: function beforeUnmount() {
    window.removeEventListener('resize', this.changeHeight);
  },
  methods: {
    changeHeight: function changeHeight() {
      var maxHeightx = this.$refs.content.scrollHeight;

      if (this.maxHeight != '0px') {
        this.maxHeight = "".concat(maxHeightx, "px");
      }
    },
    toggleContent: function toggleContent() {
      var _this = this;

      if (this.openHover || this.disabled) return;

      if (this.accordion) {
        this.$parent.closeAllItems(this.$el);
      }

      if (this.sst && !this.dataReady) {
        this.$emit('fetch', {
          done: function done() {
            _this.initMaxHeight();

            _this.dataReady = true;
          }
        });
      } else {
        this.initMaxHeight();
      }
    },
    initMaxHeight: function initMaxHeight() {
      var maxHeightx = this.$refs.content.scrollHeight;

      if (this.maxHeight == '0px') {
        this.maxHeight = "".concat(maxHeightx, "px");
      } else {
        this.maxHeight = "0px";
      }
    },
    mouseover: function mouseover() {
      if (this.disabled) return;
      var maxHeightx = this.$refs.content.scrollHeight;

      if (this.openHover) {
        this.maxHeight = "".concat(maxHeightx, "px");
      }
    },
    mouseout: function mouseout() {
      if (this.openHover) {
        this.maxHeight = "0px";
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapseItem.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapseItem.vue





const vsCollapseItem_exports_ = /*#__PURE__*/exportHelper_default()(vsCollapseItemvue_type_script_lang_js, [['render',vsCollapseItemvue_type_template_id_61592fee_render]])

/* harmony default export */ var vsCollapseItem = (vsCollapseItem_exports_);
// CONCATENATED MODULE: ./src/components/vsCollapse/index.js




/* harmony default export */ var components_vsCollapse = (function (Vue) {
  Vue.component(vsCollapse.name, vsCollapse);
  Vue.component(vsCollapseItem.name, vsCollapseItem);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsImages/vsImages.vue?vue&type=template&id=436ca6f9&lang=html

var vsImagesvue_type_template_id_436ca6f9_lang_html_hoisted_1 = {
  class: "vs-ul-images vs-images--ul"
};
function vsImagesvue_type_template_id_436ca6f9_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-images-hover-".concat($props.hover), {
      'alternating': $props.alternating,
      'notBorderRadius': $props.notBorderRadius,
      'notMargin': $props.notMargin
    }], "vs-component vs-images"])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", vsImagesvue_type_template_id_436ca6f9_lang_html_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")])], 2);
}
// CONCATENATED MODULE: ./src/components/vsImages/vsImages.vue?vue&type=template&id=436ca6f9&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsImages/vsImages.vue?vue&type=script&lang=js
/* harmony default export */ var vsImagesvue_type_script_lang_js = ({
  name: "VsImages",
  inheritAttrs: false,
  props: {
    hover: {
      default: 'default',
      type: String
    },
    alternating: {
      default: false,
      type: Boolean
    },
    notBorderRadius: {
      default: false,
      type: Boolean
    },
    notMargin: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/components/vsImages/vsImages.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsImages/vsImages.vue





const vsImages_exports_ = /*#__PURE__*/exportHelper_default()(vsImagesvue_type_script_lang_js, [['render',vsImagesvue_type_template_id_436ca6f9_lang_html_render]])

/* harmony default export */ var vsImages = (vsImages_exports_);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsImages/vsImage.vue?vue&type=template&id=3004bb21

var vsImagevue_type_template_id_3004bb21_hoisted_1 = {
  class: "con-vs-image"
};
var vsImagevue_type_template_id_3004bb21_hoisted_2 = ["v-bind"];
var vsImagevue_type_template_id_3004bb21_hoisted_3 = ["src"];
function vsImagevue_type_template_id_3004bb21_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["vs-image", _ctx.$attrs.class]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.$attrs.style)
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsImagevue_type_template_id_3004bb21_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    "v-bind": _ctx.$attrs,
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleImage),
    class: "vs-image--img"
  }, null, 12, vsImagevue_type_template_id_3004bb21_hoisted_2)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: $props.src,
    class: "imag-blur",
    alt: ""
  }, null, 8, vsImagevue_type_template_id_3004bb21_hoisted_3)], 6);
}
// CONCATENATED MODULE: ./src/components/vsImages/vsImage.vue?vue&type=template&id=3004bb21

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vsImages/vsImage.vue?vue&type=script&lang=js
/* harmony default export */ var vsImagevue_type_script_lang_js = ({
  name: 'VsImage',
  //inheritAttrs: false,
  props: {
    src: {
      default: null,
      type: String
    }
  },
  computed: {
    styleImage: function styleImage() {
      return {
        backgroundImage: "url(".concat(this.src, ")")
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsImages/vsImage.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vsImages/vsImage.vue





const vsImage_exports_ = /*#__PURE__*/exportHelper_default()(vsImagevue_type_script_lang_js, [['render',vsImagevue_type_template_id_3004bb21_render]])

/* harmony default export */ var vsImage = (vsImage_exports_);
// CONCATENATED MODULE: ./src/components/vsImages/index.js




/* harmony default export */ var components_vsImages = (function (Vue) {
  Vue.component(vsImages.name, vsImages);
  Vue.component(vsImage.name, vsImage);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/layout/vsRow/vsRow.vue?vue&type=template&id=517f8bed&lang=html

function vsRowvue_type_template_id_517f8bed_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      'align-items': $props.vsAlign,
      'justify-content': $props.vsJustify,
      'display': $props.vsType,
      'overflow': $props.vsType === 'block' ? 'hidden' : null,
      'width': $props.vsW * 100 / 12 + '%'
    }),
    class: "vs-row"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 4);
}
// CONCATENATED MODULE: ./src/layout/vsRow/vsRow.vue?vue&type=template&id=517f8bed&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/layout/vsRow/vsRow.vue?vue&type=script&lang=js


/* harmony default export */ var vsRowvue_type_script_lang_js = ({
  name: 'VsRow',
  props: {
    vsType: {
      default: 'flex',
      type: String
    },
    vsW: {
      type: [Number, String],
      default: 12
    },
    vsJustify: {
      type: String,
      default: null
    },
    vsAlign: {
      type: String,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./src/layout/vsRow/vsRow.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/layout/vsRow/vsRow.vue?vue&type=style&index=0&id=517f8bed&lang=css
var vsRowvue_type_style_index_0_id_517f8bed_lang_css = __webpack_require__("7612");

// CONCATENATED MODULE: ./src/layout/vsRow/vsRow.vue







const vsRow_exports_ = /*#__PURE__*/exportHelper_default()(vsRowvue_type_script_lang_js, [['render',vsRowvue_type_template_id_517f8bed_lang_html_render]])

/* harmony default export */ var vsRow = (vsRow_exports_);
// CONCATENATED MODULE: ./src/layout/vsRow/index.js



/* harmony default export */ var layout_vsRow = (function (Vue) {
  Vue.component(vsRow.name, vsRow);
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/layout/vsCol/vsCol.vue?vue&type=template&id=61c2982a&lang=html

function vsColvue_type_template_id_61c2982a_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([['vs-xs-' + $props.vsXs, 'vs-sm-' + $props.vsSm, 'vs-lg-' + $props.vsLg], "vs-col"]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      'order': $props.vsOrder,
      'justify-content': $props.vsJustify,
      'display': $props.vsType,
      'align-items': $props.vsAlign,
      'margin-left': $props.vsOffset * 100 / 12 + '%',
      'width': $props.vsW * 100 / 12 + '%'
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 6);
}
// CONCATENATED MODULE: ./src/layout/vsCol/vsCol.vue?vue&type=template&id=61c2982a&lang=html

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/layout/vsCol/vsCol.vue?vue&type=script&lang=js


/* harmony default export */ var vsColvue_type_script_lang_js = ({
  name: 'VsCol',
  props: {
    vsW: {
      type: [Number, String],
      default: 12
    },
    vsXs: {
      type: [Number, String],
      default: ''
    },
    vsSm: {
      type: [Number, String],
      default: ''
    },
    vsLg: {
      type: [Number, String],
      default: ''
    },
    vsOffset: {
      type: [Number, String],
      default: 0
    },
    vsType: {
      type: String,
      default: null
    },
    vsJustify: {
      type: String,
      default: null
    },
    vsAlign: {
      type: String,
      default: null
    },
    vsOrder: {
      default: null,
      type: [String, Number]
    }
  }
});
// CONCATENATED MODULE: ./src/layout/vsCol/vsCol.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/layout/vsCol/vsCol.vue?vue&type=style&index=0&id=61c2982a&lang=css
var vsColvue_type_style_index_0_id_61c2982a_lang_css = __webpack_require__("adb2");

// CONCATENATED MODULE: ./src/layout/vsCol/vsCol.vue







const vsCol_exports_ = /*#__PURE__*/exportHelper_default()(vsColvue_type_script_lang_js, [['render',vsColvue_type_template_id_61c2982a_lang_html_render]])

/* harmony default export */ var vsCol = (vsCol_exports_);
// CONCATENATED MODULE: ./src/layout/vsCol/index.js



/* harmony default export */ var layout_vsCol = (function (Vue) {
  Vue.component(vsCol.name, vsCol);
});
// CONCATENATED MODULE: ./src/components/index.js


























 //export { default as vsTable } from './vsTable'



 //New Component import
//layout



// CONCATENATED MODULE: ./src/utils/theme.js








/* harmony default export */ var theme = ({
  name: 'theme',
  vsfunction: function vsfunction(json) {
    for (var clave in json) {
      var colorx = void 0;

      if (/^[rgb(]/g.test(json[clave])) {
        colorx = json[clave].replace(/[rgb()]/g, '');
      } else if (/[#]/g.test(json[clave])) {
        var rgbx = utils_color.hexToRgb(json[clave]);
        colorx = "".concat(rgbx.r, ",").concat(rgbx.g, ",").concat(rgbx.b);
      } else {
        colorx = json[clave];
      }

      utils_color.setCssVariable('--vs-' + clave, colorx);
    }
  }
});
// CONCATENATED MODULE: ./src/utils/rtl.js
/**
 * @injectDirectionClass
 * will inject 'vuesax-app-is-ltr' (ltr case) or 'vuexsax-app-is-rtl' (rtl case) in the html tag
 */
var injectDirectionClass = function injectDirectionClass(dir) {
  if (document) {
    if (dir) {
      document.documentElement.classList.remove("vuesax-app-is-ltr");
      document.documentElement.classList.add("vuesax-app-is-rtl");
    } else {
      document.documentElement.classList.add("vuesax-app-is-ltr");
      document.documentElement.classList.remove("vuesax-app-is-rtl");
    }
  }
};
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/functions/vsNotifications/index.vue?vue&type=template&id=96f60dd2&lang=html

var vsNotificationsvue_type_template_id_96f60dd2_lang_html_hoisted_1 = {
  class: "content-noti"
};
var vsNotificationsvue_type_template_id_96f60dd2_lang_html_hoisted_2 = {
  class: "con-text-noti"
};
var vsNotificationsvue_type_template_id_96f60dd2_lang_html_hoisted_3 = ["innerHTML"];
var vsNotificationsvue_type_template_id_96f60dd2_lang_html_hoisted_4 = ["innerHTML"];
function vsNotificationsvue_type_template_id_96f60dd2_lang_html_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vs_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vs-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "noti",
    onBeforeEnter: $options.beforeEnter,
    onEnter: $options.enter,
    onLeave: $options.leave
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [_ctx.active ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
        key: 0,
        ref: "noti",
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.stylex),
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-noti-".concat(_ctx.position), "vs-noti-".concat(_ctx.color), {
          'activeNoti': _ctx.active
        }], "vs-component vs-notifications"]),
        onClick: _cache[0] || (_cache[0] = function () {
          return $options.clickNoti && $options.clickNoti.apply($options, arguments);
        })
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsNotificationsvue_type_template_id_96f60dd2_lang_html_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", vsNotificationsvue_type_template_id_96f60dd2_lang_html_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", {
        innerHTML: _ctx.title
      }, null, 8, vsNotificationsvue_type_template_id_96f60dd2_lang_html_hoisted_3), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", {
        innerHTML: _ctx.text
      }, null, 8, vsNotificationsvue_type_template_id_96f60dd2_lang_html_hoisted_4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")]), _ctx.icon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_vs_icon, {
        key: 0,
        icon: _ctx.icon,
        "icon-pack": _ctx.iconPack,
        class: "vs-icon-noti"
      }, null, 8, ["icon", "icon-pack"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.fillingStyle),
        class: "filling"
      }, null, 4)], 6)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 3
  }, 8, ["onBeforeEnter", "onEnter", "onLeave"]);
}
// CONCATENATED MODULE: ./src/functions/vsNotifications/index.vue?vue&type=template&id=96f60dd2&lang=html

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.string.fixed.js
var es_string_fixed = __webpack_require__("aee8");

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/functions/vsNotifications/index.vue?vue&type=script&lang=js










/* harmony default export */ var vsNotificationsvue_type_script_lang_js = ({
  components: {
    vsIcon: vsIcon
  },
  data: function data() {
    return {
      fullWidth: false,
      icon: null,
      iconPack: 'material-icons',
      color: 'primary',
      colorText: 'rgb(255, 255, 255)',
      active: true,
      text: null,
      title: null,
      position: 'bottom-right',
      time: 3000,
      cords: {
        top: null,
        left: null,
        right: null,
        bottom: null
      },
      widthx: 0,
      fixed: false
    };
  },
  computed: {
    fillingStyle: function fillingStyle() {
      return {
        left: this.cords.left ? '-100px' : null,
        right: this.cords.right ? '-100px' : null,
        background: this.color,
        height: "".concat(this.widthx * 2, "px"),
        width: "".concat(this.widthx * 2, "px")
      };
    },
    stylex: function stylex() {
      return _objectSpread2(_objectSpread2({}, this.cords), {}, {
        color: this.colorText,
        width: this.fullWidth ? "calc(100% - 14px)" : "",
        maxWidth: this.fullWidth ? 'none' : "350px"
      });
    }
  },
  created: function created() {
    var _this = this;

    setTimeout(function () {
      _this.moverNotis();
    }, 0);
    this.changeCords();
  },
  mounted: function mounted() {
    var _this2 = this;

    setTimeout(function () {
      _this2.widthx = _this2.$refs.noti.clientWidth;
    }, 0);

    if (!this.fixed) {
      setTimeout(function () {
        _this2.closeNoti();
      }, this.time);
    }
  },
  methods: {
    clickNoti: function clickNoti() {
      this.active = false;
      this.click ? this.click() : null;
    },
    beforeEnter: function beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter: function enter(el, done) {
      el.style.opacity = 1;
      done();
    },
    leave: function leave(el, done) {
      var _this3 = this;

      el.style.opacity = 0;
      var transformx = el.style.transform;

      if (this.cords.left == '50%' || this.fullWidth) {
        transformx += " translateY(".concat(this.cords.top ? '-' : '', "100%)");
      } else {
        transformx += " translateX(".concat(this.cords.left ? '-' : '', "100%)");
      }

      el.style.transform = transformx;
      setTimeout(function () {
        done();

        _this3.moverNotis();
      }, 150);
    },
    closeNoti: function closeNoti() {
      this.active = false;
    },
    changeCords: function changeCords() {
      var positions = this.position.split('-');

      var search = function search(text) {
        return positions.indexOf(text) != -1;
      };

      if (search('top')) {
        this.cords.top = '0px';
      }

      if (search('bottom')) {
        this.cords.bottom = '0px';
      }

      if (search('right')) {
        this.cords.right = '0px';
      }

      if (search('left')) {
        this.cords.left = '0px';
      }

      if (search('center')) {
        this.cords.left = '50%';
      }
    },
    moverNotis: function moverNotis() {
      var notisx = document.querySelectorAll('.vs-noti-' + this.position);

      for (var i = 0; i < notisx.length; i++) {
        var hx = 10;

        for (var i2 = 0; i2 < i; i2++) {
          hx += notisx[i2].clientHeight + 6;
        }

        if (this.position.search('center') == -1) {
          if (this.position.search('top') != -1) {
            notisx[i].style.transform = "translatey(".concat(hx, "px)");
          } else if (this.position.search('bottom') != -1) {
            notisx[i].style.transform = "translatey(-".concat(hx, "px)");
          }
        }

        if (this.position.search('top') != -1 && this.position.search('center') != -1) {
          notisx[i].style.transform = "translate(-50%,".concat(hx, "px)");
          notisx[i].style.zIndex = 10000 - i;
        }

        if (this.position.search('bottom') != -1 && this.position.search('center') != -1) {
          notisx[i].style.transform = "translate(-50%,-".concat(hx, "px)");
          notisx[i].style.zIndex = 10000 - i;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/functions/vsNotifications/index.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/functions/vsNotifications/index.vue





const vsNotifications_exports_ = /*#__PURE__*/exportHelper_default()(vsNotificationsvue_type_script_lang_js, [['render',vsNotificationsvue_type_template_id_96f60dd2_lang_html_render]])

/* harmony default export */ var vsNotifications = (vsNotifications_exports_);
// CONCATENATED MODULE: ./src/functions/vsNotifications/index.js







var vsNotifications_instance;
/* harmony default export */ var functions_vsNotifications = ({
  name: 'notify',
  vsfunction: function vsfunction(parameters) {
    if (parameters.fullWidth) {
      if (parameters.position) {
        parameters.position = parameters.position.replace('right', 'left');
      }
    }

    var div = document.createElement("div");
    var id = utils.randomId();
    div.setAttribute('id', id);
    utils.insertBody(div);
    var app = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createApp"])({
      render: function render() {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])({
          extends: vsNotifications,
          data: function data() {
            return parameters;
          }
        });
      }
    });
    app.mount('#' + id);
    setTimeout(function () {
      app.unmount();
      utils.removeBody(div);
    }, parameters.time || 3000);
  }
});
// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("c4bc");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("ff0a");

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/functions/vsLoading/index.vue?vue&type=template&id=6dfeeb48

var vsLoadingvue_type_template_id_6dfeeb48_hoisted_1 = {
  key: 0,
  class: "title-loading"
};
var vsLoadingvue_type_template_id_6dfeeb48_hoisted_2 = ["src"];
var vsLoadingvue_type_template_id_6dfeeb48_hoisted_3 = {
  key: 3,
  class: "spinner",
  width: "50px",
  height: "50px",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
};

var vsLoadingvue_type_template_id_6dfeeb48_hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("circle", {
  class: "path",
  fill: "none",
  "stroke-width": "5",
  "stroke-linecap": "round",
  cx: "33",
  cy: "33",
  r: "30"
}, null, -1);

var vsLoadingvue_type_template_id_6dfeeb48_hoisted_5 = [vsLoadingvue_type_template_id_6dfeeb48_hoisted_4];
function vsLoadingvue_type_template_id_6dfeeb48_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "fade"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [_ctx.active ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
        key: 0,
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.style),
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([["vs-loading-background-".concat(_ctx.background), "vs-loading-color-".concat(_ctx.color), {
          'textAfter': _ctx.textAfter
        }], "con-vs-loading"]),
        onClick: _cache[0] || (_cache[0] = function () {
          return $options.effectClick && $options.effectClick.apply($options, arguments);
        })
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
        name: "effect-click"
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [_ctx.activeEffectClick && _ctx.clickEffect ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
            key: 0,
            style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleEffectClick),
            class: "effect-click"
          }, null, 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
        }),
        _: 1
      }), _ctx.text ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("h4", vsLoadingvue_type_template_id_6dfeeb48_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.text), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
          transform: "scale(".concat(_ctx.scale, ")")
        }),
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([[_ctx.type], "vs-loading"])
      }, [_ctx.type != 'material' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
        key: 0,
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleEffect1),
        class: "effect-1 effects"
      }, null, 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.type != 'material' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
        key: 1,
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleEffect2),
        class: "effect-2 effects"
      }, null, 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.type != 'material' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
        key: 2,
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.styleEffect3),
        class: "effect-3 effects"
      }, null, 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
        src: _ctx.src
      }, null, 8, vsLoadingvue_type_template_id_6dfeeb48_hoisted_2), _ctx.type == 'material' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("svg", vsLoadingvue_type_template_id_6dfeeb48_hoisted_3, vsLoadingvue_type_template_id_6dfeeb48_hoisted_5)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 6)], 6)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 1
  });
}
// CONCATENATED MODULE: ./src/functions/vsLoading/index.vue?vue&type=template&id=6dfeeb48

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader-v16/dist??ref--0-1!./src/functions/vsLoading/index.vue?vue&type=script&lang=js

/* harmony default export */ var vsLoadingvue_type_script_lang_js = ({
  data: function data() {
    return {
      active: false,
      type: 'default',
      color: null,
      background: 'rgba(255,255,255,.6)',
      src: '',
      leftx: 0,
      topx: 0,
      clickEffect: false,
      activeEffectClick: false,
      scale: 1,
      textAfter: false,
      text: null
    };
  },
  computed: {
    styleEffectClick: function styleEffectClick() {
      return {
        left: "".concat(this.leftx, "px"),
        top: "".concat(this.topx, "px")
      };
    },
    styleEffect1: function styleEffect1() {
      var style = {
        borderLeft: "3px solid ".concat(utils_color.getColor(this.color, 1))
      };

      if (this.type == 'border') {
        style = {
          borderLeft: "1px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }

      if (this.type == 'point') {
        style = {
          background: utils_color.getColor(this.color, .4)
        };
      }

      if (this.type == 'radius') {
        style = {
          border: "3px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }

      if (this.type == 'corners') {
        style = {
          border: "3px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }

      if (this.type == 'sound') {
        style = {
          background: utils_color.getColor(this.color, 1)
        };
      }

      return style;
    },
    styleEffect2: function styleEffect2() {
      var style = {
        borderLeft: "3px solid ".concat(utils_color.getColor(this.color, 1))
      };

      if (this.type == 'border') {
        style = {
          borderLeft: "1px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }

      if (this.type == 'point') {
        style = {
          background: utils_color.getColor(this.color, .4)
        };
      }

      if (this.type == 'radius') {
        style = {
          border: "3px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }

      if (this.type == 'corners') {
        style = {};
      }

      if (this.type == 'sound') {
        style = {
          background: utils_color.getColor(this.color, 1)
        };
      }

      return style;
    },
    styleEffect3: function styleEffect3() {
      var style = {
        borderLeft: "3px solid ".concat(utils_color.getColor(this.color, 1))
      };

      if (this.type == 'border') {
        style = {
          borderLeft: "1px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }

      if (this.type == 'point') {
        style = {
          background: utils_color.getColor(this.color, .4)
        };
      }

      if (this.type == 'radius') {
        style = {
          border: "3px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }

      if (this.type == 'corners') {
        style = {};
      }

      if (this.type == 'sound') {
        style = {
          background: utils_color.getColor(this.color, 1)
        };
      }

      return style;
    },
    style: function style() {
      return {
        background: utils_color.getColor(this.background, 1)
      };
    }
  },
  mounted: function mounted() {
    this.active = true;
  },
  methods: {
    effectClick: function effectClick(evt) {
      var _this = this;

      this.leftx = evt.offsetX;
      this.topx = evt.offsetY;
      this.activeEffectClick = true;
      setTimeout(function () {
        _this.activeEffectClick = false;
      }, 50);
    },
    close: function close() {
      this.active = false;
    }
  }
});
// CONCATENATED MODULE: ./src/functions/vsLoading/index.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/functions/vsLoading/index.vue





const vsLoading_exports_ = /*#__PURE__*/exportHelper_default()(vsLoadingvue_type_script_lang_js, [['render',vsLoadingvue_type_template_id_6dfeeb48_render]])

/* harmony default export */ var vsLoading = (vsLoading_exports_);
// CONCATENATED MODULE: ./src/functions/vsLoading/index.js











/* harmony default export */ var functions_vsLoading = ({
  name: 'loading',
  vsfunction: function vsfunction(parameters) {
    var instance = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createApp"])({
      extends: vsLoading,
      data: function data() {
        if (parameters) {
          return {
            type: parameters.type || 'default',
            background: parameters.background,
            color: parameters.color,
            scale: parameters.scale,
            text: parameters.text,
            clickEffect: parameters.clickEffect
          };
        }

        return {};
      }
    });
    var containerx = document.body;

    if (parameters) {
      if (parameters.container) {
        containerx = parameters.container instanceof Element ? parameters.container : document.querySelector(parameters.container);
      }
    } //instance.vm = instance.mount();
    //console.log(instance.vm);
    //console.log(containerx, instance);
    //containerx.insertBefore(instance.vm.$el, containerx.firstChild)

  },
  close: function close(elx) {
    var loadings;

    if (elx instanceof Element) {
      // Mimicking the behavior of doing `elx.querySelectorAll('> con-vs-loading')` but `>` is not well supported.
      // We are doing this because we can only add the respective classes to .con-vs-loading
      loadings = Array.from(elx.children).filter(function (el) {
        return el.classList.contains('con-vs-loading');
      });
    } else {
      loadings = document.querySelectorAll(elx || 'body > .con-vs-loading');
    }

    loadings.forEach(function (loading) {
      loading.classList.add('beforeRemove');
      setTimeout(function () {
        loading.remove();
      }, 300);
    });
  }
});
// CONCATENATED MODULE: ./src/functions/vsDialog/index.js



/* harmony default export */ var functions_vsDialog = ({
  name: 'dialog',
  vsfunction: function vsfunction(props) {
    var div = document.createElement("div");
    var id = utils.randomId();
    div.setAttribute('id', id);
    utils.insertBody(div);
    var app = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createApp"])({
      render: function render() {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])({
          extends: vsDialog,
          data: function data() {
            return {
              isPrompt: false
            };
          },
          mounted: function mounted() {
            this.fActive = true;
          },
          watch: {
            fActive: function fActive(val) {
              if (!val) {
                app.unmount();
                utils.removeBody(div);
              }
            }
          }
        }, {
          onAccept: props.accept || null,
          onCancel: props.cancel || null,
          text: props.text,
          title: props.title || 'Dialog',
          color: props.color,
          type: props.type || 'alert',
          buttonAccept: props.buttonAccept || 'filled',
          buttonCancel: props.buttonCancel || 'flat',
          acceptText: props.acceptText || 'Accept',
          cancelText: props.cancelText || 'Cancel',
          closeIcon: props.closeIcon || 'close',
          iconPack: props.iconPack || 'material-icons',
          isValid: props.isValid || 'none'
        });
      }
    });
    app.mount('#' + id);
  }
});
// CONCATENATED MODULE: ./src/functions/index.js







// Functions


 //theme


var vsFunctions = {
  vsNotifications: functions_vsNotifications,
  vsLoading: functions_vsLoading,
  vsTheme: theme,
  vsDialog: functions_vsDialog
};
/* harmony default export */ var functions = (function (vm) {
  Object.values(vsFunctions).forEach(function (vsFunctions) {
    if (Object.prototype.hasOwnProperty.call(vsFunctions, 'subName')) {
      vm.$vs[vsFunctions.name][vsFunctions.subName] = vsFunctions.vsfunction;
    } else {
      vm.$vs[vsFunctions.name] = vsFunctions.vsfunction;
    }
  });
  vm.$vs.loading.close = functions_vsLoading.close;
});
// CONCATENATED MODULE: ./src/defineGlobalMixin.js



/**
 * Vuesax global mixin, all vueasx functions and properties injected
 * in the @beforeCreate hook.
 */

/* harmony default export */ var defineGlobalMixin = (function (app, options) {
  app.mixin({
    watch: {
      '$vs.rtl': {
        handler: function handler(val) {
          injectDirectionClass(val);
        }
      }
    },
    beforeCreate: function beforeCreate() {
      // create $vs property if not exist
      if (!this.$vs) {
        // define $vs reactive properties
        this.$vs = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])(options); // define $vs functions

        functions(this);
      }
    },
    mounted: function mounted() {
      // inject the direction class for the initial options
      injectDirectionClass(this.$vs.rtl);
    }
  });
});
// CONCATENATED MODULE: ./src/install.js









function install(app) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // set default options
  for (var prop in utils_options) {
    if (!options[prop]) {
      options[prop] = utils_options[prop];
    }
  } // Use Components


  Object.values(components_namespaceObject).forEach(function (vsComponent) {
    app.use(vsComponent);
  });

  if (options) {
    if (Object.prototype.hasOwnProperty.call(options, 'theme')) {
      if (Object.prototype.hasOwnProperty.call(options.theme, 'colors')) {
        if (typeof window !== 'undefined') {
          theme.vsfunction(options.theme.colors, options.server);
        }
      }
    }
  } // Define vuesax functions and properties ($vs)


  defineGlobalMixin(app, options);
}
// CONCATENATED MODULE: ./src/index.js



if (typeof window !== 'undefined' && window.Vue) {
  window.Vuesax = install;
}

/* harmony default export */ var src_0 = (install);
 //export { default as vsSelect } from './components/vsSelect'

























 //export { default as vsTable } from './components/vsTable'



 //New Component import
//layout



// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "3851":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var toIndexedObject = __webpack_require__("2f8f");
var $getOwnPropertyNames = __webpack_require__("2470").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "386c":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("2447");
var global = __webpack_require__("e510");
var isObject = __webpack_require__("633b");
var createNonEnumerableProperty = __webpack_require__("1cba");
var hasOwn = __webpack_require__("724f");
var shared = __webpack_require__("89f3");
var sharedKey = __webpack_require__("5821");
var hiddenKeys = __webpack_require__("5256");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "39d7":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "3d48":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "3dd6":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("89a2");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "3e6e":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument === 'function';
};


/***/ }),

/***/ "40ad":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "41a2":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("d9a4");
var toString = __webpack_require__("649c");
var whitespaces = __webpack_require__("dafb");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "41f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("6387");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "46e6":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("e900");
var create = __webpack_require__("7513");
var definePropertyModule = __webpack_require__("18f2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "4b0d":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("6387");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "5101":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "5256":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "5261":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("846f");
var store = __webpack_require__("89f3");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.18.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5574":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("0e95");
var isCallable = __webpack_require__("3e6e");
var classofRaw = __webpack_require__("ee97");
var wellKnownSymbol = __webpack_require__("e900");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "5821":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5261");
var uid = __webpack_require__("bb84");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "5dce":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e510");
var isCallable = __webpack_require__("3e6e");
var hasOwn = __webpack_require__("724f");
var createNonEnumerableProperty = __webpack_require__("1cba");
var setGlobal = __webpack_require__("fba2");
var inspectSource = __webpack_require__("8b02");
var InternalStateModule = __webpack_require__("386c");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("cde7").CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "633b":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("3e6e");

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "6387":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "649c":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("5574");

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "668f":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("3e6e");
var isObject = __webpack_require__("633b");

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = fn.call(input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "680b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("7b2d");
var fails = __webpack_require__("6387");
var isArray = __webpack_require__("7c65");
var isObject = __webpack_require__("633b");
var toObject = __webpack_require__("89a2");
var lengthOfArrayLike = __webpack_require__("7410");
var createProperty = __webpack_require__("30e4");
var arraySpeciesCreate = __webpack_require__("064e");
var arrayMethodHasSpeciesSupport = __webpack_require__("818d");
var wellKnownSymbol = __webpack_require__("e900");
var V8_VERSION = __webpack_require__("e61f");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "6ca1":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("e900");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "6ee3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("0190").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "719a":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("4b0d");
var objectKeys = __webpack_require__("c5f2");
var toIndexedObject = __webpack_require__("2f8f");
var propertyIsEnumerable = __webpack_require__("5101").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "7227":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("1dca");
var anObject = __webpack_require__("96c7");
var requireObjectCoercible = __webpack_require__("d9a4");
var sameValue = __webpack_require__("c91e");
var toString = __webpack_require__("649c");
var getMethod = __webpack_require__("1430");
var regExpExec = __webpack_require__("027b");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : getMethod(regexp, SEARCH);
      return searcher ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "724f":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("89a2");

var hasOwnProperty = {}.hasOwnProperty;

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "726d":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("e900");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "7410":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("b946");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "7513":
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("96c7");
var defineProperties = __webpack_require__("26d0");
var enumBugKeys = __webpack_require__("a4cd");
var hiddenKeys = __webpack_require__("5256");
var html = __webpack_require__("8b0d");
var documentCreateElement = __webpack_require__("010c");
var sharedKey = __webpack_require__("5821");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7612":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_v16_dist_stylePostLoader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_usr_local_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_v16_dist_index_js_ref_0_1_vsRow_vue_vue_type_style_index_0_id_517f8bed_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("10dc");
/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_v16_dist_stylePostLoader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_usr_local_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_v16_dist_index_js_ref_0_1_vsRow_vue_vue_type_style_index_0_id_517f8bed_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_v16_dist_stylePostLoader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_usr_local_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_v16_dist_index_js_ref_0_1_vsRow_vue_vue_type_style_index_0_id_517f8bed_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7794":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("6387");
var classof = __webpack_require__("ee97");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "7a21":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("0e95");
var classof = __webpack_require__("5574");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "7b2d":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e510");
var getOwnPropertyDescriptor = __webpack_require__("cff0").f;
var createNonEnumerableProperty = __webpack_require__("1cba");
var redefine = __webpack_require__("5dce");
var setGlobal = __webpack_require__("fba2");
var copyConstructorProperties = __webpack_require__("2f84");
var isForced = __webpack_require__("871a");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "7c65":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("ee97");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "7f8f":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("e900");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "818d":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("6387");
var wellKnownSymbol = __webpack_require__("e900");
var V8_VERSION = __webpack_require__("e61f");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "8200":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("0e95");
var redefine = __webpack_require__("5dce");
var toString = __webpack_require__("7a21");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "8256":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e510");
var isCallable = __webpack_require__("3e6e");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "846f":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "871a":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("6387");
var isCallable = __webpack_require__("3e6e");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "8868":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "893f":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("633b");
var classof = __webpack_require__("ee97");
var wellKnownSymbol = __webpack_require__("e900");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "89a2":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("d9a4");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "89f3":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e510");
var setGlobal = __webpack_require__("fba2");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "8b02":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("3e6e");
var store = __webpack_require__("89f3");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8b0d":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("8256");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8c1d":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("1d1b");
var anObject = __webpack_require__("96c7");
var getIteratorMethod = __webpack_require__("b6e1");

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(iteratorMethod.call(argument));
  throw TypeError(String(argument) + ' is not iterable');
};


/***/ }),

/***/ "8db5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("2534");
var toObject = __webpack_require__("89a2");
var callWithSafeIterationClosing = __webpack_require__("98c6");
var isArrayIteratorMethod = __webpack_require__("fe0f");
var isConstructor = __webpack_require__("2edb");
var lengthOfArrayLike = __webpack_require__("7410");
var createProperty = __webpack_require__("30e4");
var getIterator = __webpack_require__("8c1d");
var getIteratorMethod = __webpack_require__("b6e1");

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "8f69":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("96c7");
var getMethod = __webpack_require__("1430");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = innerResult.call(iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "918e":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("4b0d");
var FUNCTION_NAME_EXISTS = __webpack_require__("cde7").EXISTS;
var defineProperty = __webpack_require__("18f2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "9344":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("efbe").forEach;
var arrayMethodIsStrict = __webpack_require__("41f1");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "9453":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("7b2d");
var $values = __webpack_require__("719a").values;

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "96c7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("633b");

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "9769":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("7b2d");
var toObject = __webpack_require__("89a2");
var nativeKeys = __webpack_require__("c5f2");
var fails = __webpack_require__("6387");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "98c6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("96c7");
var iteratorClose = __webpack_require__("8f69");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ "99c0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9e4b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e510");

module.exports = global;


/***/ }),

/***/ "9e8d":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("0cbf");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "a1a1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("7b2d");
var toAbsoluteIndex = __webpack_require__("f98a");
var toIntegerOrInfinity = __webpack_require__("f3c1");
var lengthOfArrayLike = __webpack_require__("7410");
var toObject = __webpack_require__("89a2");
var arraySpeciesCreate = __webpack_require__("064e");
var createProperty = __webpack_require__("30e4");
var arrayMethodHasSpeciesSupport = __webpack_require__("818d");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a24d":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("4b0d");
var fails = __webpack_require__("6387");
var createElement = __webpack_require__("010c");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "a381":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "a4cd":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "a4e8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("7b2d");
var IS_PURE = __webpack_require__("846f");
var FunctionName = __webpack_require__("cde7");
var isCallable = __webpack_require__("3e6e");
var createIteratorConstructor = __webpack_require__("c419");
var getPrototypeOf = __webpack_require__("e57d");
var setPrototypeOf = __webpack_require__("b69d");
var setToStringTag = __webpack_require__("ac9a");
var createNonEnumerableProperty = __webpack_require__("1cba");
var redefine = __webpack_require__("5dce");
var wellKnownSymbol = __webpack_require__("e900");
var Iterators = __webpack_require__("a5a5");
var IteratorsCore = __webpack_require__("d730");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return nativeIterator.call(this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "a5a5":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "a5c6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("7b2d");
var sign = __webpack_require__("1a04");

// `Math.sign` method
// https://tc39.es/ecma262/#sec-math.sign
$({ target: 'Math', stat: true }, {
  sign: sign
});


/***/ }),

/***/ "a609":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    for (const [key, val] of props) {
        sfc[key] = val;
    }
    return sfc;
};


/***/ }),

/***/ "a6ed":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("7b2d");
var isArray = __webpack_require__("7c65");
var isConstructor = __webpack_require__("2edb");
var isObject = __webpack_require__("633b");
var toAbsoluteIndex = __webpack_require__("f98a");
var lengthOfArrayLike = __webpack_require__("7410");
var toIndexedObject = __webpack_require__("2f8f");
var createProperty = __webpack_require__("30e4");
var wellKnownSymbol = __webpack_require__("e900");
var arrayMethodHasSpeciesSupport = __webpack_require__("818d");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "a82d":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("8256");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "a964":
/***/ (function(module, exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__("010c");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "aa78":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ac9a":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("18f2").f;
var hasOwn = __webpack_require__("724f");
var wellKnownSymbol = __webpack_require__("e900");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !hasOwn(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "adb2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_v16_dist_stylePostLoader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_usr_local_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_v16_dist_index_js_ref_0_1_vsCol_vue_vue_type_style_index_0_id_61c2982a_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aa78");
/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_v16_dist_stylePostLoader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_usr_local_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_v16_dist_index_js_ref_0_1_vsCol_vue_vue_type_style_index_0_id_61c2982a_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_v16_dist_stylePostLoader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_usr_local_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_v16_dist_index_js_ref_0_1_vsCol_vue_vue_type_style_index_0_id_61c2982a_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "aee8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("7b2d");
var createHTML = __webpack_require__("e2f4");
var forcedStringHTMLMethod = __webpack_require__("de70");

// `String.prototype.fixed` method
// https://tc39.es/ecma262/#sec-string.prototype.fixed
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fixed') }, {
  fixed: function fixed() {
    return createHTML(this, 'tt', '', '');
  }
});


/***/ }),

/***/ "b69d":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__("96c7");
var aPossiblePrototype = __webpack_require__("f86a");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "b6e1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("5574");
var getMethod = __webpack_require__("1430");
var Iterators = __webpack_require__("a5a5");
var wellKnownSymbol = __webpack_require__("e900");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "b76c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("7b2d");
var $trim = __webpack_require__("41a2").trim;
var forcedStringTrimMethod = __webpack_require__("db72");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "b8fd":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "b946":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("f3c1");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "bb84":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "bc92":
/***/ (function(module, exports, __webpack_require__) {

var isConstructor = __webpack_require__("2edb");
var tryToString = __webpack_require__("190f");

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ "bd01":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("7b2d");
var toIntegerOrInfinity = __webpack_require__("f3c1");
var thisNumberValue = __webpack_require__("ec29");
var repeat = __webpack_require__("0d8d");
var fails = __webpack_require__("6387");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String(data[index]);
      s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "bd11":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("96c7");
var aConstructor = __webpack_require__("bc92");
var wellKnownSymbol = __webpack_require__("e900");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ "beb6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("7b2d");
var $includes = __webpack_require__("0b93").includes;
var addToUnscopables = __webpack_require__("46e6");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "bf56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = __webpack_require__("cde7").PROPER;
var redefine = __webpack_require__("5dce");
var anObject = __webpack_require__("96c7");
var $toString = __webpack_require__("649c");
var fails = __webpack_require__("6387");
var flags = __webpack_require__("f23c");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "c419":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("d730").IteratorPrototype;
var create = __webpack_require__("7513");
var createPropertyDescriptor = __webpack_require__("a381");
var setToStringTag = __webpack_require__("ac9a");
var Iterators = __webpack_require__("a5a5");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "c4bc":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("7b2d");
var from = __webpack_require__("8db5");
var checkCorrectnessOfIteration = __webpack_require__("7f8f");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "c4cd":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("4b0d");
var UNSUPPORTED_DOT_ALL = __webpack_require__("ffde");
var defineProperty = __webpack_require__("18f2").f;
var getInternalState = __webpack_require__("386c").get;
var RegExpPrototype = RegExp.prototype;

// `RegExp.prototype.dotAll` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
if (DESCRIPTORS && UNSUPPORTED_DOT_ALL) {
  defineProperty(RegExpPrototype, 'dotAll', {
    configurable: true,
    get: function () {
      if (this === RegExpPrototype) return undefined;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (this instanceof RegExp) {
        return !!getInternalState(this).dotAll;
      }
      throw TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),

/***/ "c5e4":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("893f");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "c5f2":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("cb80");
var enumBugKeys = __webpack_require__("a4cd");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "c91e":
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "cb80":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("724f");
var toIndexedObject = __webpack_require__("2f8f");
var indexOf = __webpack_require__("0b93").indexOf;
var hiddenKeys = __webpack_require__("5256");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cd5d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("3e6e");
var isObject = __webpack_require__("633b");
var setPrototypeOf = __webpack_require__("b69d");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "cde7":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("4b0d");
var hasOwn = __webpack_require__("724f");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "cff0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("4b0d");
var propertyIsEnumerableModule = __webpack_require__("5101");
var createPropertyDescriptor = __webpack_require__("a381");
var toIndexedObject = __webpack_require__("2f8f");
var toPropertyKey = __webpack_require__("d64b");
var hasOwn = __webpack_require__("724f");
var IE8_DOM_DEFINE = __webpack_require__("a24d");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "d0a8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("7b2d");
var exec = __webpack_require__("f28a");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "d1ce":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("7b2d");
var $map = __webpack_require__("efbe").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("818d");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "d5e3":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("4b0d");
var UNSUPPORTED_Y = __webpack_require__("da9b").UNSUPPORTED_Y;
var defineProperty = __webpack_require__("18f2").f;
var getInternalState = __webpack_require__("386c").get;
var RegExpPrototype = RegExp.prototype;

// `RegExp.prototype.sticky` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
if (DESCRIPTORS && UNSUPPORTED_Y) {
  defineProperty(RegExpPrototype, 'sticky', {
    configurable: true,
    get: function () {
      if (this === RegExpPrototype) return undefined;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (this instanceof RegExp) {
        return !!getInternalState(this).sticky;
      }
      throw TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),

/***/ "d64b":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("0a53");
var isSymbol = __webpack_require__("19a0");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};


/***/ }),

/***/ "d6a4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("1dca");
var isRegExp = __webpack_require__("893f");
var anObject = __webpack_require__("96c7");
var requireObjectCoercible = __webpack_require__("d9a4");
var speciesConstructor = __webpack_require__("bd11");
var advanceStringIndex = __webpack_require__("6ee3");
var toLength = __webpack_require__("b946");
var toString = __webpack_require__("649c");
var getMethod = __webpack_require__("1430");
var callRegExpExec = __webpack_require__("027b");
var regexpExec = __webpack_require__("f28a");
var stickyHelpers = __webpack_require__("da9b");
var fails = __webpack_require__("6387");

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? splitter.call(separator, O, limit)
        : internalSplit.call(toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? S.slice(q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ "d730":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("6387");
var isCallable = __webpack_require__("3e6e");
var create = __webpack_require__("7513");
var getPrototypeOf = __webpack_require__("e57d");
var redefine = __webpack_require__("5dce");
var wellKnownSymbol = __webpack_require__("e900");
var IS_PURE = __webpack_require__("846f");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "d9a4":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "da9b":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("6387");
var global = __webpack_require__("e510");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

exports.UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "dafb":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "db72":
/***/ (function(module, exports, __webpack_require__) {

var PROPER_FUNCTION_NAME = __webpack_require__("cde7").PROPER;
var fails = __webpack_require__("6387");
var whitespaces = __webpack_require__("dafb");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ "ddcf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("8256");
var definePropertyModule = __webpack_require__("18f2");
var wellKnownSymbol = __webpack_require__("e900");
var DESCRIPTORS = __webpack_require__("4b0d");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "de70":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("6387");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "e2f4":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("d9a4");
var toString = __webpack_require__("649c");

var quot = /"/g;

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = toString(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + toString(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "e510":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("8868")))

/***/ }),

/***/ "e57d":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("724f");
var isCallable = __webpack_require__("3e6e");
var toObject = __webpack_require__("89a2");
var sharedKey = __webpack_require__("5821");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("ec78");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e61f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e510");
var userAgent = __webpack_require__("a82d");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "e900":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e510");
var shared = __webpack_require__("5261");
var hasOwn = __webpack_require__("724f");
var uid = __webpack_require__("bb84");
var NATIVE_SYMBOL = __webpack_require__("0cbf");
var USE_SYMBOL_AS_UID = __webpack_require__("9e8d");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "ec29":
/***/ (function(module, exports) {

var valueOf = 1.0.valueOf;

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  return valueOf.call(value);
};


/***/ }),

/***/ "ec78":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("6387");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "ee97":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "ef62":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("7b2d");
var notARegExp = __webpack_require__("c5e4");
var requireObjectCoercible = __webpack_require__("d9a4");
var toString = __webpack_require__("649c");
var correctIsRegExpLogic = __webpack_require__("6ca1");

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~toString(requireObjectCoercible(this))
      .indexOf(toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "efbe":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("2534");
var IndexedObject = __webpack_require__("7794");
var toObject = __webpack_require__("89a2");
var lengthOfArrayLike = __webpack_require__("7410");
var arraySpeciesCreate = __webpack_require__("064e");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "f23c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("96c7");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "f241":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("7b2d");
var $filter = __webpack_require__("efbe").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("818d");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "f28a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var toString = __webpack_require__("649c");
var regexpFlags = __webpack_require__("f23c");
var stickyHelpers = __webpack_require__("da9b");
var shared = __webpack_require__("5261");
var create = __webpack_require__("7513");
var getInternalState = __webpack_require__("386c").get;
var UNSUPPORTED_DOT_ALL = __webpack_require__("ffde");
var UNSUPPORTED_NCG = __webpack_require__("32ca");

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = patchedExec.call(raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = str.slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str.charAt(re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "f304":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("4b0d");
var global = __webpack_require__("e510");
var isForced = __webpack_require__("871a");
var inheritIfRequired = __webpack_require__("cd5d");
var createNonEnumerableProperty = __webpack_require__("1cba");
var defineProperty = __webpack_require__("18f2").f;
var getOwnPropertyNames = __webpack_require__("2470").f;
var isRegExp = __webpack_require__("893f");
var toString = __webpack_require__("649c");
var getFlags = __webpack_require__("f23c");
var stickyHelpers = __webpack_require__("da9b");
var redefine = __webpack_require__("5dce");
var fails = __webpack_require__("6387");
var hasOwn = __webpack_require__("724f");
var enforceInternalState = __webpack_require__("386c").enforce;
var setSpecies = __webpack_require__("ddcf");
var wellKnownSymbol = __webpack_require__("e900");
var UNSUPPORTED_DOT_ALL = __webpack_require__("ffde");
var UNSUPPORTED_NCG = __webpack_require__("32ca");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
// TODO: Use only propper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = string.charAt(index);
    if (chr === '\\') {
      result += chr + string.charAt(++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = string.charAt(index);
    if (chr === '\\') {
      chr = chr + string.charAt(++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (IS_NCG.test(string.slice(index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named.push([groupname, groupid]);
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || pattern instanceof RegExpWrapper) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags.call(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && flags.indexOf('s') > -1;
      if (dotAll) flags = flags.replace(/s/g, '');
    }

    rawFlags = flags;

    if (UNSUPPORTED_Y && 'sticky' in re1) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxy(keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "f3c1":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "f86a":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("3e6e");

module.exports = function (argument) {
  if (typeof argument === 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ "f98a":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("f3c1");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "fba2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e510");

module.exports = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "fbac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("d0a8");
var $ = __webpack_require__("7b2d");
var isCallable = __webpack_require__("3e6e");
var isObject = __webpack_require__("633b");

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var nativeTest = /./.test;

// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (str) {
    var exec = this.exec;
    if (!isCallable(exec)) return nativeTest.call(this, str);
    var result = exec.call(this, str);
    if (result !== null && !isObject(result)) {
      throw new Error('RegExp exec method returned something other than an Object or null');
    }
    return !!result;
  }
});


/***/ }),

/***/ "fd3f":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("7b2d");

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
$({ target: 'Math', stat: true }, {
  trunc: function trunc(it) {
    return (it > 0 ? floor : ceil)(it);
  }
});


/***/ }),

/***/ "fe0f":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("e900");
var Iterators = __webpack_require__("a5a5");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "ff0a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("0190").charAt;
var toString = __webpack_require__("649c");
var InternalStateModule = __webpack_require__("386c");
var defineIterator = __webpack_require__("a4e8");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "ffde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("6387");
var global = __webpack_require__("e510");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ })

/******/ });
});