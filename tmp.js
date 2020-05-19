'use strict';
var CS_CONF = {
  "projectId" : 681,
  "status" : 1,
  "hostnames" : ["hobbycraft.co.uk"],
  "crossDomainTracking" : 0,
  "crossDomainSingleIframeTracking" : 0,
  "consentRequired" : 0,
  "allowSubdomains" : 1,
  "visitorCookieTimeout" : 34164000000,
  "sampleRate" : 100,
  "replayRecordingRate" : 1,
  "validationRate" : 10,
  "lastTrackingDraw" : 1522053177,
  "trackerDomain" : "c.contentsquare.net",
  "recordingDomain" : "r.contentsquare.net",
  "ed" : "l.contentsquare.net/log/web",
  "eMerchandisingEnabled" : 1,
  "mouseMoveHeatmapEnabled" : 0,
  "autoInsightsEnabled" : 1,
  "jsErrorsEnabled" : 0,
  "triggerSessionReplayEnabled" : 1,
  "triggerSessionReplayRegex" : "https\\:\\/\\/www\\.hobbycraft\\.co\\.uk\\/(basket|checkout|delivery|payment|thankyou).*",
  "dynamicIdRegex" : null,
  "tagDeploymentMode" : "CONTENTSQUARE"
};
!function(m) {
  /**
   * @param {string} i
   * @return {?}
   */
  function t(i) {
    if (n[i]) {
      return n[i].exports;
    }
    var module = n[i] = {
      i : i,
      l : false,
      exports : {}
    };
    return m[i].call(module.exports, module, module.exports, t), module.l = true, module.exports;
  }
  var n = {};
  /** @type {!Array} */
  t.m = m;
  t.c = n;
  /**
   * @param {!Function} d
   * @param {string} name
   * @param {!Function} n
   * @return {undefined}
   */
  t.d = function(d, name, n) {
    if (!t.o(d, name)) {
      Object.defineProperty(d, name, {
        enumerable : true,
        get : n
      });
    }
  };
  /**
   * @param {!Object} a
   * @return {undefined}
   */
  t.r = function(a) {
    if ("undefined" != typeof Symbol && Symbol.toStringTag) {
      Object.defineProperty(a, Symbol.toStringTag, {
        value : "Module"
      });
    }
    Object.defineProperty(a, "__esModule", {
      value : true
    });
  };
  /**
   * @param {(Object|string)} value
   * @param {number} defaultValue
   * @return {?}
   */
  t.t = function(value, defaultValue) {
    if (1 & defaultValue && (value = t(value)), 8 & defaultValue) {
      return value;
    }
    if (4 & defaultValue && "object" == typeof value && value && value.__esModule) {
      return value;
    }
    /** @type {!Object} */
    var d = Object.create(null);
    if (t.r(d), Object.defineProperty(d, "default", {
      enumerable : true,
      value : value
    }), 2 & defaultValue && "string" != typeof value) {
      var s;
      for (s in value) {
        t.d(d, s, function(subel) {
          return value[subel];
        }.bind(null, s));
      }
    }
    return d;
  };
  /**
   * @param {!Object} module
   * @return {?}
   */
  t.n = function(module) {
    /** @type {function(): ?} */
    var n = module && module.__esModule ? function() {
      return module.default;
    } : function() {
      return module;
    };
    return t.d(n, "a", n), n;
  };
  /**
   * @param {!Function} e
   * @param {string} input
   * @return {?}
   */
  t.o = function(e, input) {
    return Object.prototype.hasOwnProperty.call(e, input);
  };
  /** @type {string} */
  t.p = "";
  t(t.s = 4);
}([function(canCreateDiscussions, BeautifulProperties, i) {
  Object.defineProperty(BeautifulProperties, "__esModule", {
    value : true
  });
  (function(canCreateDiscussions) {
    /** @type {string} */
    canCreateDiscussions.ContentSquare = "CONTENTSQUARE";
    /** @type {string} */
    canCreateDiscussions.LoadedByClicktale = "LOADED_BY_CLICKTALE";
    /** @type {string} */
    canCreateDiscussions.LoadClicktalePtc = "LOAD_CLICKTALE_PTC";
    /** @type {string} */
    canCreateDiscussions.DualCollectionReview = "DUAL_COLLECTION_REVIEW";
    /** @type {string} */
    canCreateDiscussions.DualCollection = "DUAL_COLLECTION";
  })(BeautifulProperties.TagDeploymentMode || (BeautifulProperties.TagDeploymentMode = {}));
}, function(canCreateDiscussions, isSlidingUp) {
}, function(canCreateDiscussions, isSlidingUp) {
}, function(canCreateDiscussions, $G, i) {
  /**
   * @param {string} string
   * @param {!Function} template
   * @return {?}
   */
  function t(string, template) {
    return string.replace(regExpChar, function() {
      /** @type {!Array} */
      var args = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        args[i] = arguments[i];
      }
      var value = args[3] || args[7];
      var name = args[10];
      var _tagTmpl = (value || name).trim();
      return (value ? "@import " : "") + "url(" + template(_tagTmpl) + ")";
    });
  }
  Object.defineProperty($G, "__esModule", {
    value : true
  });
  /** @type {!RegExp} */
  var regExpChar = /(@import\s+url\s*\(\s*(["'])?([^"')]+)(\2)\s*\))|(@import\s+(["'])([^"']+)\6)|(url\s*\(\s*(["'])?([^"')]+)(\9)\s*\))/g;
  /** @type {function(string, !Function): ?} */
  $G.replaceIn = t;
  /**
   * @param {string} name
   * @return {?}
   */
  $G.extractFrom = function(name) {
    /** @type {!Array} */
    var e = [];
    return t(name, function(t) {
      return e.push(t), t;
    }), e;
  };
}, function(canCreateDiscussions, vars, clone) {
  /**
   * @param {string} param
   * @return {?}
   */
  function map(param) {
    return param.replace(/([#;&,.+*~':"!^$[\]()<=>|/%?@`{}\\ ])/g, "\\$1");
  }
  /**
   * @param {!Object} n
   * @return {?}
   */
  function next(n) {
    return n.nodeType === Node.ELEMENT_NODE;
  }
  /**
   * @param {!Node} el
   * @return {?}
   */
  function appendChild(el) {
    return el.nodeType === Node.TEXT_NODE;
  }
  /**
   * @param {!Object} b
   * @return {?}
   */
  function has(b) {
    return next(b) && "a" === b.localName;
  }
  /**
   * @param {!Object} t
   * @return {?}
   */
  function run(t) {
    return function(b) {
      return next(b) && "link" === b.localName;
    }(t) && "stylesheet" === t.rel;
  }
  /**
   * @param {!Object} a
   * @return {?}
   */
  function defined(a) {
    return next(a) && "img" === a.localName;
  }
  /**
   * @param {!Object} e
   * @return {?}
   */
  function traverse(e) {
    return next(e) && "style" === e.localName;
  }
  /**
   * @param {!Object} val
   * @return {?}
   */
  function error(val) {
    return next(val) && "input" === val.localName;
  }
  /**
   * @param {!Object} a
   * @return {?}
   */
  function func(a) {
    switch(a.nodeType) {
      case Node.DOCUMENT_NODE:
      case Node.DOCUMENT_FRAGMENT_NODE:
        return true;
      default:
        return false;
    }
  }
  /**
   * @param {!Object} s
   * @return {?}
   */
  function filter(s) {
    /** @type {!Object} */
    var e = s;
    /** @type {!Array} */
    var params = [e];
    for (; null !== e.parentNode;) {
      e = e.parentNode;
      params.push(e);
    }
    return a(e) && params.push(t), {
      ancestors : params,
      selectionRoot : e
    };
  }
  /**
   * @param {undefined} el
   * @return {?}
   */
  function a(el) {
    return evt.isValidElement(el);
  }
  /**
   * @param {?} b
   * @return {?}
   */
  function _(b) {
    return Array.prototype.slice.call(b);
  }
  /**
   * @param {undefined} t
   * @param {!Object} c
   * @param {!HTMLElement} s
   * @param {?} n
   * @return {?}
   */
  function parse(t, c, s, n) {
    var a = function(b) {
      return map(b.localName.toLowerCase());
    }(t);
    if (function(row, options) {
      var model = parseInt(row);
      return model && model.match(/^[\w-]+$/) && equal(p, model, options);
    }(t, s)) {
      var year = parseInt(t);
      return {
        hasUniqueIdentifier : true,
        elementSelector : a + "[" + p + '="' + year + '"]'
      };
    }
    var b = function(t) {
      var error = t.getAttribute("id");
      return error ? map(error) : error;
    }(t);
    return function(cell, component, type, isBgroundImg) {
      return component && !function(percentage) {
        return null !== parseInt(percentage);
      }(cell) && !function(object, src, isBgroundImg) {
        return object.hasAttribute(DATA_ORIGINAL_SRC) || function(t, set) {
          /** @type {boolean} */
          var firstPT = false;
          if (t && set) {
            firstPT = set.test(t);
          }
          return t && (transferArr.some(function(e) {
            return e.test(t);
          }) || firstPT);
        }(src, isBgroundImg);
      }(cell, component, isBgroundImg) && function(parent, msg) {
        return parent && equal("id", parent, msg);
      }(component, type);
    }(t, b, s, n) ? {
      hasUniqueIdentifier : true,
      elementSelector : a + "#" + b
    } : {
      hasUniqueIdentifier : false,
      elementSelector : a + ":eq(" + function(m, b) {
        return m === t || m.nodeType === versions ? 0 : _(m.childNodes).filter(function(prev) {
          return prev.nodeType === DOCUMENT_TYPE && prev.localName.toLowerCase() === b.localName.toLowerCase();
        }).indexOf(b);
      }(c, t) + ")"
    };
  }
  /**
   * @param {!Object} size
   * @return {?}
   */
  function parseInt(size) {
    return size.getAttribute(p);
  }
  /**
   * @param {string} value
   * @param {string} elem
   * @param {!HTMLElement} msg
   * @return {?}
   */
  function equal(value, elem, msg) {
    try {
      return 1 === msg.querySelectorAll("[" + value + '="' + elem + '"]').length;
    } catch (allBox) {
      if ("SyntaxError" !== allBox.name) {
        throw allBox;
      }
    }
    return false;
  }
  /**
   * @param {string} m
   * @param {!HTMLElement} res
   * @param {?} i
   * @param {?} length
   * @return {?}
   */
  function init(m, res, i, length) {
    var r = m.shift();
    if (0 === m.length) {
      return cb(r, i, length);
    }
    var action = parse(r, m[0], res, length);
    var a = action.elementSelector;
    var element = action.hasUniqueIdentifier;
    if (!i && element) {
      return "" + cb(m[m.length - 1], i, length) + a;
    }
    var ret = init(m, res, i, length);
    return (ret ? ret + ">" : "") + a;
  }
  /**
   * @param {!Object} result
   * @param {?} data
   * @param {?} value
   * @return {?}
   */
  function cb(result, data, value) {
    if (result === t) {
      return "|detached|";
    }
    if (result.host) {
      var self = filter(result.host);
      return init(self.ancestors, self.selectionRoot, data, value) + "|shadow-root|";
    }
    return result.nodeType === TEXT ? "|fragment|" : "";
  }
  /**
   * @return {?}
   */
  function floor() {
    return Math.floor(clock.now() / 1E3);
  }
  /**
   * @return {undefined}
   */
  function empty() {
  }
  /**
   * @param {string} source
   * @param {string} e
   * @return {?}
   */
  function get(source, e) {
    return 0 === source.lastIndexOf(e, 0);
  }
  /**
   * @param {string} src
   * @param {string} target
   * @return {?}
   */
  function toArray(src, target) {
    return -1 !== src.indexOf(target, src.length - target.length);
  }
  /**
   * @param {?} num
   * @return {?}
   */
  function Number(num) {
    return rand() < num;
  }
  /**
   * @return {?}
   */
  function rand() {
    return Math.floor(1E4 * Math.random()) / 100;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function isDefined(value) {
    return isArray(value) && ("number" == typeof value || value instanceof Number) && !isNaN(value);
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function isNumber(value) {
    return value === parseInt(value, 10);
  }
  /**
   * @param {string} message
   * @return {?}
   */
  function isString(message) {
    return isArray(message) && ("string" == typeof message || message instanceof String);
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function isFunction(value) {
    return "object" == typeof value;
  }
  /**
   * @param {?} object
   * @return {?}
   */
  function isArray(object) {
    return void 0 !== object;
  }
  /**
   * @param {?} property
   * @return {?}
   */
  function $(property) {
    return isArray(property) && null !== property;
  }
  /**
   * @param {number} a
   * @param {number} b
   * @param {number} epsilon
   * @return {?}
   */
  function contains(a, b, epsilon) {
    return isNumber(a) && a >= b && a <= epsilon;
  }
  /**
   * @param {!Function} value
   * @return {?}
   */
  function hide(value) {
    return "function" == typeof value;
  }
  /**
   * @param {!AudioNode} a
   * @return {?}
   */
  function getPosition(a) {
    return a instanceof Element;
  }
  /**
   * @return {?}
   */
  function jsonFixer() {
    return value;
  }
  /**
   * @return {?}
   */
  function castTemplate() {
    return {
      v : value
    };
  }
  /**
   * @param {!Object} options
   * @param {number} obj
   * @return {undefined}
   */
  function subscribe(options, obj) {
    if (void 0 === obj) {
      /** @type {boolean} */
      obj = server;
    }
    options.boundElement.addEventListener(options.type, options.listener, obj);
  }
  /**
   * @param {!Object} e
   * @param {number} obj
   * @return {undefined}
   */
  function done(e, obj) {
    if (void 0 === obj) {
      /** @type {boolean} */
      obj = server;
    }
    e.boundElement.removeEventListener(e.type, e.listener, obj);
  }
  /**
   * @return {?}
   */
  function exports() {
    var LZString = {
      _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      _f : String.fromCharCode,
      compressToBase64 : function(input) {
        if (null == input) {
          return "";
        }
        var block;
        var chr2;
        var chr3;
        var index;
        var enc2;
        var j;
        var r;
        /** @type {string} */
        var output = "";
        /** @type {number} */
        var i = 0;
        input = LZString.compress(input);
        for (; i < 2 * input.length;) {
          if (i % 2 == 0) {
            /** @type {number} */
            block = input.charCodeAt(i / 2) >> 8;
            /** @type {number} */
            chr2 = 255 & input.charCodeAt(i / 2);
            /** @type {number} */
            chr3 = i / 2 + 1 < input.length ? input.charCodeAt(i / 2 + 1) >> 8 : NaN;
          } else {
            /** @type {number} */
            block = 255 & input.charCodeAt((i - 1) / 2);
            if ((i + 1) / 2 < input.length) {
              /** @type {number} */
              chr2 = input.charCodeAt((i + 1) / 2) >> 8;
              /** @type {number} */
              chr3 = 255 & input.charCodeAt((i + 1) / 2);
            } else {
              /** @type {number} */
              chr2 = chr3 = NaN;
            }
          }
          /** @type {number} */
          i = i + 3;
          /** @type {number} */
          index = block >> 2;
          /** @type {number} */
          enc2 = (3 & block) << 4 | chr2 >> 4;
          /** @type {number} */
          j = (15 & chr2) << 2 | chr3 >> 6;
          /** @type {number} */
          r = 63 & chr3;
          if (isNaN(chr2)) {
            /** @type {number} */
            j = r = 64;
          } else {
            if (isNaN(chr3)) {
              /** @type {number} */
              r = 64;
            }
          }
          /** @type {string} */
          output = output + LZString._keyStr.charAt(index) + LZString._keyStr.charAt(enc2) + LZString._keyStr.charAt(j) + LZString._keyStr.charAt(r);
        }
        return output;
      },
      decompressFromBase64 : function(input) {
        if (null == input) {
          return "";
        }
        var output_;
        var chr1;
        var chr2;
        var chr3;
        var s;
        var a;
        var c;
        /** @type {string} */
        var output = "";
        /** @type {number} */
        var message = 0;
        /** @type {number} */
        var i = 0;
        /** @type {function(...number): string} */
        var f = LZString._f;
        input = input.replace(/[^A-Za-z0-9\+\/=]/g, "");
        for (; i < input.length;) {
          /** @type {number} */
          chr1 = LZString._keyStr.indexOf(input.charAt(i++)) << 2 | (s = LZString._keyStr.indexOf(input.charAt(i++))) >> 4;
          /** @type {number} */
          chr2 = (15 & s) << 4 | (a = LZString._keyStr.indexOf(input.charAt(i++))) >> 2;
          /** @type {number} */
          chr3 = (3 & a) << 6 | (c = LZString._keyStr.indexOf(input.charAt(i++)));
          if (message % 2 == 0) {
            /** @type {number} */
            output_ = chr1 << 8;
            if (64 != a) {
              /** @type {string} */
              output = output + f(output_ | chr2);
            }
            if (64 != c) {
              /** @type {number} */
              output_ = chr3 << 8;
            }
          } else {
            /** @type {string} */
            output = output + f(output_ | chr1);
            if (64 != a) {
              /** @type {number} */
              output_ = chr2 << 8;
            }
            if (64 != c) {
              /** @type {string} */
              output = output + f(output_ | chr3);
            }
          }
          /** @type {number} */
          message = message + 3;
        }
        return LZString.decompress(output);
      },
      compressToUTF16 : function(input) {
        if (null == input) {
          return "";
        }
        var p;
        var width;
        var x;
        /** @type {string} */
        var context_data_string = "";
        /** @type {number} */
        var endIndex = 0;
        /** @type {function(...number): string} */
        var f = LZString._f;
        input = LZString.compress(input);
        /** @type {number} */
        p = 0;
        for (; p < input.length; p++) {
          switch(width = input.charCodeAt(p), endIndex++) {
            case 0:
              /** @type {string} */
              context_data_string = context_data_string + f(32 + (width >> 1));
              /** @type {number} */
              x = (1 & width) << 14;
              break;
            case 1:
              /** @type {string} */
              context_data_string = context_data_string + f(x + (width >> 2) + 32);
              /** @type {number} */
              x = (3 & width) << 13;
              break;
            case 2:
              /** @type {string} */
              context_data_string = context_data_string + f(x + (width >> 3) + 32);
              /** @type {number} */
              x = (7 & width) << 12;
              break;
            case 3:
              /** @type {string} */
              context_data_string = context_data_string + f(x + (width >> 4) + 32);
              /** @type {number} */
              x = (15 & width) << 11;
              break;
            case 4:
              /** @type {string} */
              context_data_string = context_data_string + f(x + (width >> 5) + 32);
              /** @type {number} */
              x = (31 & width) << 10;
              break;
            case 5:
              /** @type {string} */
              context_data_string = context_data_string + f(x + (width >> 6) + 32);
              /** @type {number} */
              x = (63 & width) << 9;
              break;
            case 6:
              /** @type {string} */
              context_data_string = context_data_string + f(x + (width >> 7) + 32);
              /** @type {number} */
              x = (127 & width) << 8;
              break;
            case 7:
              /** @type {string} */
              context_data_string = context_data_string + f(x + (width >> 8) + 32);
              /** @type {number} */
              x = (255 & width) << 7;
              break;
            case 8:
              /** @type {string} */
              context_data_string = context_data_string + f(x + (width >> 9) + 32);
              /** @type {number} */
              x = (511 & width) << 6;
              break;
            case 9:
              /** @type {string} */
              context_data_string = context_data_string + f(x + (width >> 10) + 32);
              /** @type {number} */
              x = (1023 & width) << 5;
              break;
            case 10:
              /** @type {string} */
              context_data_string = context_data_string + f(x + (width >> 11) + 32);
              /** @type {number} */
              x = (2047 & width) << 4;
              break;
            case 11:
              /** @type {string} */
              context_data_string = context_data_string + f(x + (width >> 12) + 32);
              /** @type {number} */
              x = (4095 & width) << 3;
              break;
            case 12:
              /** @type {string} */
              context_data_string = context_data_string + f(x + (width >> 13) + 32);
              /** @type {number} */
              x = (8191 & width) << 2;
              break;
            case 13:
              /** @type {string} */
              context_data_string = context_data_string + f(x + (width >> 14) + 32);
              /** @type {number} */
              x = (16383 & width) << 1;
              break;
            case 14:
              /** @type {string} */
              context_data_string = context_data_string + f(x + (width >> 15) + 32, 32 + (32767 & width));
              /** @type {number} */
              endIndex = 0;
          }
        }
        return context_data_string + f(x + 32);
      },
      decompressFromUTF16 : function(input) {
        if (null == input) {
          return "";
        }
        var current;
        var c;
        /** @type {string} */
        var output = "";
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var peg$currPos = 0;
        /** @type {function(...number): string} */
        var f = LZString._f;
        for (; peg$currPos < input.length;) {
          switch(c = input.charCodeAt(peg$currPos) - 32, i++) {
            case 0:
              /** @type {number} */
              current = c << 1;
              break;
            case 1:
              /** @type {string} */
              output = output + f(current | c >> 14);
              /** @type {number} */
              current = (16383 & c) << 2;
              break;
            case 2:
              /** @type {string} */
              output = output + f(current | c >> 13);
              /** @type {number} */
              current = (8191 & c) << 3;
              break;
            case 3:
              /** @type {string} */
              output = output + f(current | c >> 12);
              /** @type {number} */
              current = (4095 & c) << 4;
              break;
            case 4:
              /** @type {string} */
              output = output + f(current | c >> 11);
              /** @type {number} */
              current = (2047 & c) << 5;
              break;
            case 5:
              /** @type {string} */
              output = output + f(current | c >> 10);
              /** @type {number} */
              current = (1023 & c) << 6;
              break;
            case 6:
              /** @type {string} */
              output = output + f(current | c >> 9);
              /** @type {number} */
              current = (511 & c) << 7;
              break;
            case 7:
              /** @type {string} */
              output = output + f(current | c >> 8);
              /** @type {number} */
              current = (255 & c) << 8;
              break;
            case 8:
              /** @type {string} */
              output = output + f(current | c >> 7);
              /** @type {number} */
              current = (127 & c) << 9;
              break;
            case 9:
              /** @type {string} */
              output = output + f(current | c >> 6);
              /** @type {number} */
              current = (63 & c) << 10;
              break;
            case 10:
              /** @type {string} */
              output = output + f(current | c >> 5);
              /** @type {number} */
              current = (31 & c) << 11;
              break;
            case 11:
              /** @type {string} */
              output = output + f(current | c >> 4);
              /** @type {number} */
              current = (15 & c) << 12;
              break;
            case 12:
              /** @type {string} */
              output = output + f(current | c >> 3);
              /** @type {number} */
              current = (7 & c) << 13;
              break;
            case 13:
              /** @type {string} */
              output = output + f(current | c >> 2);
              /** @type {number} */
              current = (3 & c) << 14;
              break;
            case 14:
              /** @type {string} */
              output = output + f(current | c >> 1);
              /** @type {number} */
              current = (1 & c) << 15;
              break;
            case 15:
              /** @type {string} */
              output = output + f(current | c);
              /** @type {number} */
              i = 0;
          }
          peg$currPos++;
        }
        return LZString.decompress(output);
      },
      compressToUint8Array : function(data) {
        var b = LZString.compress(data);
        /** @type {!Uint8Array} */
        var buf = new Uint8Array(2 * b.length);
        /** @type {number} */
        var i = 0;
        var bLength = b.length;
        for (; i < bLength; i++) {
          var current_value = b.charCodeAt(i);
          /** @type {number} */
          buf[2 * i] = current_value >>> 8;
          /** @type {number} */
          buf[2 * i + 1] = current_value % 256;
        }
        return buf;
      },
      decompressFromUint8Array : function(data) {
        if (null === data || void 0 === data) {
          return LZString.decompress(data);
        }
        /** @type {!Array} */
        var buf = new Array(data.length / 2);
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var l = buf.length;
        for (; i < l; i++) {
          buf[i] = 256 * data[2 * i] + data[2 * i + 1];
        }
        return LZString.decompress(String.fromCharCode.apply(null, buf));
      },
      compressToEncodedURIComponent : function(input) {
        return LZString.compressToBase64(input).replace("=", "$").replace("/", "-");
      },
      decompressFromEncodedURIComponent : function(data) {
        return data && (data = data.replace("$", "=").replace("-", "/")), LZString.decompressFromBase64(data);
      },
      compress : function(string) {
        if (null == string) {
          return "";
        }
        var r;
        var value;
        var i;
        var result = {};
        var row = {};
        /** @type {string} */
        var k = "";
        /** @type {string} */
        var name = "";
        /** @type {string} */
        var key = "";
        /** @type {number} */
        var randomValue = 2;
        /** @type {number} */
        var ordinal = 3;
        /** @type {number} */
        var charsetBitSize = 2;
        /** @type {string} */
        var context_data_string = "";
        /** @type {number} */
        var context_data_val = 0;
        /** @type {number} */
        var g = 0;
        /** @type {function(...number): string} */
        var f = LZString._f;
        /** @type {number} */
        i = 0;
        for (; i < string.length; i = i + 1) {
          if (k = string.charAt(i), Object.prototype.hasOwnProperty.call(result, k) || (result[k] = ordinal++, row[k] = true), name = key + k, Object.prototype.hasOwnProperty.call(result, name)) {
            /** @type {string} */
            key = name;
          } else {
            if (Object.prototype.hasOwnProperty.call(row, key)) {
              if (key.charCodeAt(0) < 256) {
                /** @type {number} */
                r = 0;
                for (; r < charsetBitSize; r++) {
                  /** @type {number} */
                  context_data_val = context_data_val << 1;
                  if (15 == g) {
                    /** @type {number} */
                    g = 0;
                    /** @type {string} */
                    context_data_string = context_data_string + f(context_data_val);
                    /** @type {number} */
                    context_data_val = 0;
                  } else {
                    g++;
                  }
                }
                /** @type {number} */
                value = key.charCodeAt(0);
                /** @type {number} */
                r = 0;
                for (; r < 8; r++) {
                  /** @type {number} */
                  context_data_val = context_data_val << 1 | 1 & value;
                  if (15 == g) {
                    /** @type {number} */
                    g = 0;
                    /** @type {string} */
                    context_data_string = context_data_string + f(context_data_val);
                    /** @type {number} */
                    context_data_val = 0;
                  } else {
                    g++;
                  }
                  /** @type {number} */
                  value = value >> 1;
                }
              } else {
                /** @type {number} */
                value = 1;
                /** @type {number} */
                r = 0;
                for (; r < charsetBitSize; r++) {
                  /** @type {number} */
                  context_data_val = context_data_val << 1 | value;
                  if (15 == g) {
                    /** @type {number} */
                    g = 0;
                    /** @type {string} */
                    context_data_string = context_data_string + f(context_data_val);
                    /** @type {number} */
                    context_data_val = 0;
                  } else {
                    g++;
                  }
                  /** @type {number} */
                  value = 0;
                }
                /** @type {number} */
                value = key.charCodeAt(0);
                /** @type {number} */
                r = 0;
                for (; r < 16; r++) {
                  /** @type {number} */
                  context_data_val = context_data_val << 1 | 1 & value;
                  if (15 == g) {
                    /** @type {number} */
                    g = 0;
                    /** @type {string} */
                    context_data_string = context_data_string + f(context_data_val);
                    /** @type {number} */
                    context_data_val = 0;
                  } else {
                    g++;
                  }
                  /** @type {number} */
                  value = value >> 1;
                }
              }
              if (0 == --randomValue) {
                /** @type {number} */
                randomValue = Math.pow(2, charsetBitSize);
                charsetBitSize++;
              }
              delete row[key];
            } else {
              value = result[key];
              /** @type {number} */
              r = 0;
              for (; r < charsetBitSize; r++) {
                /** @type {number} */
                context_data_val = context_data_val << 1 | 1 & value;
                if (15 == g) {
                  /** @type {number} */
                  g = 0;
                  /** @type {string} */
                  context_data_string = context_data_string + f(context_data_val);
                  /** @type {number} */
                  context_data_val = 0;
                } else {
                  g++;
                }
                /** @type {number} */
                value = value >> 1;
              }
            }
            if (0 == --randomValue) {
              /** @type {number} */
              randomValue = Math.pow(2, charsetBitSize);
              charsetBitSize++;
            }
            /** @type {number} */
            result[name] = ordinal++;
            /** @type {string} */
            key = String(k);
          }
        }
        if ("" !== key) {
          if (Object.prototype.hasOwnProperty.call(row, key)) {
            if (key.charCodeAt(0) < 256) {
              /** @type {number} */
              r = 0;
              for (; r < charsetBitSize; r++) {
                /** @type {number} */
                context_data_val = context_data_val << 1;
                if (15 == g) {
                  /** @type {number} */
                  g = 0;
                  /** @type {string} */
                  context_data_string = context_data_string + f(context_data_val);
                  /** @type {number} */
                  context_data_val = 0;
                } else {
                  g++;
                }
              }
              /** @type {number} */
              value = key.charCodeAt(0);
              /** @type {number} */
              r = 0;
              for (; r < 8; r++) {
                /** @type {number} */
                context_data_val = context_data_val << 1 | 1 & value;
                if (15 == g) {
                  /** @type {number} */
                  g = 0;
                  /** @type {string} */
                  context_data_string = context_data_string + f(context_data_val);
                  /** @type {number} */
                  context_data_val = 0;
                } else {
                  g++;
                }
                /** @type {number} */
                value = value >> 1;
              }
            } else {
              /** @type {number} */
              value = 1;
              /** @type {number} */
              r = 0;
              for (; r < charsetBitSize; r++) {
                /** @type {number} */
                context_data_val = context_data_val << 1 | value;
                if (15 == g) {
                  /** @type {number} */
                  g = 0;
                  /** @type {string} */
                  context_data_string = context_data_string + f(context_data_val);
                  /** @type {number} */
                  context_data_val = 0;
                } else {
                  g++;
                }
                /** @type {number} */
                value = 0;
              }
              /** @type {number} */
              value = key.charCodeAt(0);
              /** @type {number} */
              r = 0;
              for (; r < 16; r++) {
                /** @type {number} */
                context_data_val = context_data_val << 1 | 1 & value;
                if (15 == g) {
                  /** @type {number} */
                  g = 0;
                  /** @type {string} */
                  context_data_string = context_data_string + f(context_data_val);
                  /** @type {number} */
                  context_data_val = 0;
                } else {
                  g++;
                }
                /** @type {number} */
                value = value >> 1;
              }
            }
            if (0 == --randomValue) {
              /** @type {number} */
              randomValue = Math.pow(2, charsetBitSize);
              charsetBitSize++;
            }
            delete row[key];
          } else {
            value = result[key];
            /** @type {number} */
            r = 0;
            for (; r < charsetBitSize; r++) {
              /** @type {number} */
              context_data_val = context_data_val << 1 | 1 & value;
              if (15 == g) {
                /** @type {number} */
                g = 0;
                /** @type {string} */
                context_data_string = context_data_string + f(context_data_val);
                /** @type {number} */
                context_data_val = 0;
              } else {
                g++;
              }
              /** @type {number} */
              value = value >> 1;
            }
          }
          if (0 == --randomValue) {
            /** @type {number} */
            randomValue = Math.pow(2, charsetBitSize);
            charsetBitSize++;
          }
        }
        /** @type {number} */
        value = 2;
        /** @type {number} */
        r = 0;
        for (; r < charsetBitSize; r++) {
          /** @type {number} */
          context_data_val = context_data_val << 1 | 1 & value;
          if (15 == g) {
            /** @type {number} */
            g = 0;
            /** @type {string} */
            context_data_string = context_data_string + f(context_data_val);
            /** @type {number} */
            context_data_val = 0;
          } else {
            g++;
          }
          /** @type {number} */
          value = value >> 1;
        }
        for (;;) {
          if (context_data_val = context_data_val << 1, 15 == g) {
            /** @type {string} */
            context_data_string = context_data_string + f(context_data_val);
            break;
          }
          g++;
        }
        return context_data_string;
      },
      decompress : function(str) {
        if (null == str) {
          return "";
        }
        if ("" == str) {
          return null;
        }
        var id;
        var n;
        var m;
        var o;
        var hit;
        var _SELECTED_AXIS;
        var i;
        /** @type {!Array} */
        var ret = [];
        /** @type {number} */
        var el = 4;
        /** @type {number} */
        var j = 4;
        /** @type {number} */
        var y = 3;
        /** @type {string} */
        var name = "";
        /** @type {string} */
        var result = "";
        /** @type {function(...number): string} */
        var f = LZString._f;
        var data = {
          string : str,
          val : str.charCodeAt(0),
          position : 32768,
          index : 1
        };
        /** @type {number} */
        id = 0;
        for (; id < 3; id = id + 1) {
          /** @type {number} */
          ret[id] = id;
        }
        /** @type {number} */
        m = 0;
        /** @type {number} */
        hit = Math.pow(2, 2);
        /** @type {number} */
        _SELECTED_AXIS = 1;
        for (; _SELECTED_AXIS != hit;) {
          /** @type {number} */
          o = data.val & data.position;
          data.position >>= 1;
          if (0 == data.position) {
            /** @type {number} */
            data.position = 32768;
            data.val = data.string.charCodeAt(data.index++);
          }
          /** @type {number} */
          m = m | (o > 0 ? 1 : 0) * _SELECTED_AXIS;
          /** @type {number} */
          _SELECTED_AXIS = _SELECTED_AXIS << 1;
        }
        switch(m) {
          case 0:
            /** @type {number} */
            m = 0;
            /** @type {number} */
            hit = Math.pow(2, 8);
            /** @type {number} */
            _SELECTED_AXIS = 1;
            for (; _SELECTED_AXIS != hit;) {
              /** @type {number} */
              o = data.val & data.position;
              data.position >>= 1;
              if (0 == data.position) {
                /** @type {number} */
                data.position = 32768;
                data.val = data.string.charCodeAt(data.index++);
              }
              /** @type {number} */
              m = m | (o > 0 ? 1 : 0) * _SELECTED_AXIS;
              /** @type {number} */
              _SELECTED_AXIS = _SELECTED_AXIS << 1;
            }
            /** @type {string} */
            i = f(m);
            break;
          case 1:
            /** @type {number} */
            m = 0;
            /** @type {number} */
            hit = Math.pow(2, 16);
            /** @type {number} */
            _SELECTED_AXIS = 1;
            for (; _SELECTED_AXIS != hit;) {
              /** @type {number} */
              o = data.val & data.position;
              data.position >>= 1;
              if (0 == data.position) {
                /** @type {number} */
                data.position = 32768;
                data.val = data.string.charCodeAt(data.index++);
              }
              /** @type {number} */
              m = m | (o > 0 ? 1 : 0) * _SELECTED_AXIS;
              /** @type {number} */
              _SELECTED_AXIS = _SELECTED_AXIS << 1;
            }
            /** @type {string} */
            i = f(m);
            break;
          case 2:
            return "";
        }
        /** @type {(string|undefined)} */
        ret[3] = i;
        /** @type {(string|undefined)} */
        n = result = i;
        for (;;) {
          if (data.index > data.string.length) {
            return "";
          }
          /** @type {number} */
          m = 0;
          /** @type {number} */
          hit = Math.pow(2, y);
          /** @type {number} */
          _SELECTED_AXIS = 1;
          for (; _SELECTED_AXIS != hit;) {
            /** @type {number} */
            o = data.val & data.position;
            data.position >>= 1;
            if (0 == data.position) {
              /** @type {number} */
              data.position = 32768;
              data.val = data.string.charCodeAt(data.index++);
            }
            /** @type {number} */
            m = m | (o > 0 ? 1 : 0) * _SELECTED_AXIS;
            /** @type {number} */
            _SELECTED_AXIS = _SELECTED_AXIS << 1;
          }
          switch(i = m) {
            case 0:
              /** @type {number} */
              m = 0;
              /** @type {number} */
              hit = Math.pow(2, 8);
              /** @type {number} */
              _SELECTED_AXIS = 1;
              for (; _SELECTED_AXIS != hit;) {
                /** @type {number} */
                o = data.val & data.position;
                data.position >>= 1;
                if (0 == data.position) {
                  /** @type {number} */
                  data.position = 32768;
                  data.val = data.string.charCodeAt(data.index++);
                }
                /** @type {number} */
                m = m | (o > 0 ? 1 : 0) * _SELECTED_AXIS;
                /** @type {number} */
                _SELECTED_AXIS = _SELECTED_AXIS << 1;
              }
              /** @type {string} */
              ret[j++] = f(m);
              /** @type {number} */
              i = j - 1;
              el--;
              break;
            case 1:
              /** @type {number} */
              m = 0;
              /** @type {number} */
              hit = Math.pow(2, 16);
              /** @type {number} */
              _SELECTED_AXIS = 1;
              for (; _SELECTED_AXIS != hit;) {
                /** @type {number} */
                o = data.val & data.position;
                data.position >>= 1;
                if (0 == data.position) {
                  /** @type {number} */
                  data.position = 32768;
                  data.val = data.string.charCodeAt(data.index++);
                }
                /** @type {number} */
                m = m | (o > 0 ? 1 : 0) * _SELECTED_AXIS;
                /** @type {number} */
                _SELECTED_AXIS = _SELECTED_AXIS << 1;
              }
              /** @type {string} */
              ret[j++] = f(m);
              /** @type {number} */
              i = j - 1;
              el--;
              break;
            case 2:
              return result;
          }
          if (0 == el && (el = Math.pow(2, y), y++), ret[i]) {
            name = ret[i];
          } else {
            if (i !== j) {
              return null;
            }
            /** @type {string} */
            name = n + n.charAt(0);
          }
          result = result + name;
          ret[j++] = n + name.charAt(0);
          n = name;
          if (0 == --el) {
            /** @type {number} */
            el = Math.pow(2, y);
            y++;
          }
        }
      }
    };
    return LZString;
  }
  /**
   * @param {string} it
   * @return {?}
   */
  function forEach(it) {
    return it.split(/,$/)[0];
  }
  /**
   * @param {!Function} fn
   * @param {number} delay
   * @return {?}
   */
  function throttle(fn, delay) {
    var otherArgs;
    var timer;
    var from;
    var o;
    /**
     * @return {undefined}
     */
    var write = function() {
      /** @type {null} */
      timer = null;
      /** @type {number} */
      var diff = clock.now() - from;
      o = fn.apply(void 0, [diff].concat(otherArgs));
      /** @type {null} */
      from = null;
    };
    return function() {
      /** @type {!Array} */
      var argumentsArray = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        argumentsArray[i] = arguments[i];
      }
      return from || (from = clock.now()), timer && window.clearTimeout(timer), otherArgs = argumentsArray.slice()[0], timer = window.setTimeout(write, delay), o;
    };
  }
  /**
   * @return {?}
   */
  function setToSystem() {
    return {
      la : license
    };
  }
  /**
   * @param {!Object} obj
   * @param {undefined} value
   * @param {undefined} item
   * @return {?}
   */
  function toString(obj, value, item) {
    if (!isArray(value) && !isArray(item)) {
      return obj.href;
    }
    var sitesowners = isArray(value) ? function(path) {
      return get(path, "/") ? path : "/" + path;
    }(value) : obj.pathname;
    var siteName = isArray(item) ? function(data) {
      return get(data, "?") || "" === data ? data : "?" + data;
    }(item) : obj.search;
    return obj.protocol + "//" + obj.host + sitesowners + siteName;
  }
  /**
   * @param {?} dir
   * @return {?}
   */
  function remove(dir) {
    return dir.tagDeploymentMode === conn7.TagDeploymentMode.DualCollectionReview || dir.tagDeploymentMode === conn7.TagDeploymentMode.DualCollection;
  }
  /**
   * @param {?} path
   * @return {?}
   */
  function removePassingAssertion(path) {
    return remove(path) || path.tagDeploymentMode === conn7.TagDeploymentMode.LoadClicktalePtc;
  }
  /**
   * @param {!Object} options
   * @param {!Object} scope
   * @return {?}
   */
  function walk(options, scope) {
    return scope.visitor.visitsCount !== options.visitor.visitsCount ? scope.visitor.visitsCount - options.visitor.visitsCount : options.session ? scope.session ? scope.session.pageNumber - options.session.pageNumber : -1 : 1;
  }
  clone.r(vars);
  var n = {};
  clone.r(n);
  clone.d(n, "get", function() {
    return jsonFixer;
  });
  clone.d(n, "getRequestParameters", function() {
    return castTemplate;
  });
  var b = {};
  clone.r(b);
  clone.d(b, "getRequestParameters", function() {
    return setToSystem;
  });
  /** @type {string} */
  var t = "detached";
  /** @type {number} */
  var DOCUMENT_TYPE = 1;
  /** @type {number} */
  var versions = 9;
  /** @type {!Array} */
  var transferArr = [/\d{4}/, /^ember\d+$/];
  /** @type {string} */
  var p = "data-cs-override-id";
  /** @type {string} */
  var DATA_ORIGINAL_SRC = "data-cs-dynamic-id";
  var evt;
  /** @type {number} */
  var TEXT = 11;
  !function(column) {
    /**
     * @param {!Element} node
     * @return {?}
     */
    function isVisible(node) {
      return !!node && "localName" in node && "getAttribute" in node && "hasAttribute" in node && "parentNode" in node;
    }
    /**
     * @param {!Object} object
     * @return {?}
     */
    function wrap(object) {
      return object && "jquery" in object && 1 === object.length ? object[0] : object;
    }
    /** @type {string} */
    column.INVALID_ELEMENT = "INVALID_ELEMENT";
    /** @type {function(!Element): ?} */
    column.isValidElement = isVisible;
    /**
     * @param {!Object} element
     * @param {number} object
     * @return {?}
     */
    column.getElementPath = function(element, object) {
      var self = void 0 === object ? {} : object;
      var currentPath = self.fullPath;
      var length = void 0 !== currentPath && currentPath;
      var b = self.dynamicIdRegex;
      var callback = void 0 === b ? null : b;
      var el = wrap(element);
      if (el === document) {
        return "";
      }
      if (!isVisible(el)) {
        return column.INVALID_ELEMENT;
      }
      var options = filter(el);
      return init(options.ancestors, options.selectionRoot, length, callback);
    };
    /**
     * @param {!Object} message
     * @param {number} object
     * @return {?}
     */
    column.getElementPathAndFirstAnchorParent = function(message, object) {
      var self = void 0 === object ? {} : object;
      var currentPath = self.fullPath;
      var length = void 0 !== currentPath && currentPath;
      var key = self.dynamicIdRegex;
      var name = void 0 === key ? null : key;
      var a = wrap(message);
      if (a === document) {
        return {
          path : "",
          firstAnchorParent : null
        };
      }
      if (!isVisible(a)) {
        return {
          path : column.INVALID_ELEMENT,
          firstAnchorParent : null
        };
      }
      var args = function(arg2) {
        /** @type {!Object} */
        var e = arg2;
        /** @type {!Array} */
        var params = [e];
        /** @type {null} */
        var touch = null;
        for (; null !== e.parentNode;) {
          e = e.parentNode;
          params.push(e);
          if (null === touch && has(e)) {
            touch = e;
          }
        }
        return a(e) && params.push(t), {
          firstAnchorParent : touch,
          ancestors : params,
          selectionRoot : e
        };
      }(a);
      var instanceObject_7 = args.firstAnchorParent;
      return {
        path : init(args.ancestors, args.selectionRoot, length, name),
        firstAnchorParent : instanceObject_7
      };
    };
  }(evt || (evt = {}));
  window.CSPathComputation = window.CSPathComputation || evt;
  /** @type {number} */
  var w = 34164E6;
  var message;
  var app;
  var clock = {
    now : function() {
      return "undefined" != typeof performance && performance.now ? performance.timing.navigationStart + Math.round(performance.now()) : Date.now();
    }
  };
  /** @type {number} */
  var z = 0;
  var Poster = function() {
    /**
     * @param {!Object} options
     * @return {undefined}
     */
    function config(options) {
      this.trackerDomain = options.trackerDomain;
      this.loggerDomain = options.ed;
      this.projectId = options.projectId;
      this.status = options.status;
      this.hostnames = options.hostnames;
      /** @type {boolean} */
      this.crossDomainTracking = !!options.crossDomainTracking;
      /** @type {boolean} */
      this.crossDomainSingleIframeTracking = !!options.crossDomainSingleIframeTracking;
      /** @type {boolean} */
      this.consentRequired = !!options.consentRequired;
      /** @type {boolean} */
      this.allowSubdomains = !!options.allowSubdomains;
      this.visitorCookieTimeout = options.visitorCookieTimeout || w;
      this.sampleRate = options.sampleRate;
      this.replayRecordingRate = options.replayRecordingRate;
      this.validationRate = options.validationRate;
      this.lastTrackingDraw = options.lastTrackingDraw || 1;
      /** @type {boolean} */
      this.useHttps = true;
      this.recordingDomain = options.recordingDomain;
      this.eMerchandisingEnabled = options.eMerchandisingEnabled;
      this.mouseMoveHeatmapEnabled = options.mouseMoveHeatmapEnabled;
      this.autoInsightsEnabled = options.autoInsightsEnabled;
      this.jsErrorsEnabled = options.jsErrorsEnabled;
      this.triggerSessionReplayEnabled = options.triggerSessionReplayEnabled;
      this.triggerSessionReplayRegex = this.computeTriggerSessionReplayRegex(options.triggerSessionReplayRegex);
      this.metricRate = void 0 === options.metricRate ? z : options.metricRate;
      /** @type {(RegExp|null)} */
      this.dynamicIdRegex = options.dynamicIdRegex ? new RegExp(options.dynamicIdRegex) : null;
      this.tagDeploymentMode = options.tagDeploymentMode;
      this.dualCollectionTagDomain = options.dualCollectionTagDomain || null;
      this.ptcDomain = options.ptcDomain || null;
      this.ptcGuid = options.ptcGuid || null;
      this.ptcSha512 = options.ptcSha512 || null;
      this.ptcSnapshotPath = options.ptcSnapshotPath || null;
    }
    return config.prototype.getTrackerUri = function() {
      return this.protocol() + "://" + this.trackerDomain;
    }, config.prototype.getRecordingUri = function() {
      return this.protocol() + "://" + this.recordingDomain;
    }, config.prototype.getLoggerUri = function() {
      return this.protocol() + "://" + this.loggerDomain;
    }, config.prototype.protocol = function() {
      return this.useHttps ? "https" : "http";
    }, config.prototype.isProjectActive = function() {
      return 1 === this.status;
    }, config.prototype.processOptionOverrides = function(data) {
      var EditRoute = this;
      if (data && data.forEach) {
        data.forEach(function(data) {
          var passid = data[0];
          var shortcutItems = data.slice(1);
          if ("setOption" === passid) {
            var clojIsReversed = shortcutItems[0];
            var item = shortcutItems[1];
            EditRoute.setOverridableField(clojIsReversed, item);
          }
        });
      }
    }, config.prototype.setOverridableField = function(isSlidingUp, onlyFirst) {
      if ("trackerDomain" === isSlidingUp) {
        this.trackerDomain = onlyFirst;
      }
      if ("recordingDomain" === isSlidingUp) {
        this.recordingDomain = onlyFirst;
      }
      if ("loggerDomain" === isSlidingUp) {
        this.loggerDomain = onlyFirst;
      }
      if ("useHttps" === isSlidingUp) {
        /** @type {boolean} */
        this.useHttps = !!onlyFirst;
      }
    }, config.prototype.computeTriggerSessionReplayRegex = function(namespaces) {
      return namespaces ? new RegExp("^" + namespaces + "$") : null;
    }, config.prototype.getRequestParameters = function() {
      return {
        pid : "" + this.projectId
      };
    }, config;
  }();
  !function(exports) {
    /**
     * @param {string} p
     * @param {!Object} o
     * @return {?}
     */
    function callback(p, o) {
      return p.replace("{version}", o.version).replace("{token}", o.token).replace("{domain}", o.domain);
    }
    /**
     * @param {!Object} node
     * @return {?}
     */
    function push(node) {
      return node && "csBundleInjection" === node.type && contains(node.domain) && resolve(node.version) && isString(node.token);
    }
    /**
     * @param {?} dbName
     * @return {?}
     */
    function contains(dbName) {
      return /^https?:\/\/[a-zA-Z0-9\.\-]+\.(content-square\.fr|contentsquare\.com)$/.test(dbName);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    function isString(val) {
      return /^[a-zA-Z0-9]+$/.test(val);
    }
    /**
     * @param {?} reqStr
     * @return {?}
     */
    function resolve(reqStr) {
      return /^[a-zA-Z0-9\.]+$/.test(reqStr);
    }
    /**
     * @param {!Function} cb
     * @return {undefined}
     */
    function listen(cb) {
      window.addEventListener("message", cb, false);
    }
    /**
     * @param {!Function} callback
     * @return {undefined}
     */
    function log(callback) {
      window.removeEventListener("message", callback, false);
    }
    var t;
    /** @type {string} */
    var i = "{domain}/tag/bridge.html?v={version}#{token}";
    var spec = {
      loadBundle : function(options) {
        var win = options.source;
        var node = options.data;
        if (push(node)) {
          /**
           * @return {undefined}
           */
          var load = function() {
            !function(twitterWidgetURL, e) {
              /** @type {!Element} */
              var node = document.createElement("script");
              /** @type {string} */
              node.type = "text/javascript";
              /** @type {boolean} */
              node.async = true;
              /** @type {string} */
              node.src = twitterWidgetURL;
              /** @type {function(): ?} */
              node.onload = e;
              /** @type {string} */
              node.charset = "utf-8";
              document.head.appendChild(node);
            }(callback("{domain}/tag/tag.bundle.js?v={version}", node), function() {
              return win.postMessage("csBundleLoaded", options.origin);
            });
          };
          t = node.token;
          log(spec.loadBundle);
          if (contains(options.origin)) {
            load();
          } else {
            (function(row, success) {
              var iframe = function(value) {
                /** @type {!Element} */
                var layer = document.createElement("iframe");
                return layer.src = value, layer.id = "content-square-bridge", layer.setAttribute("style", "display: none !important; visibility: hidden !important;"), layer;
              }(callback(i, row));
              /**
               * @param {!Object} event
               * @return {undefined}
               */
              var done = function(event) {
                if (event.source === iframe.contentWindow && "TOKEN_VALID" === event.data) {
                  log(done);
                  iframe.remove();
                  success();
                }
              };
              listen(done);
              document.head.appendChild(iframe);
            })(node, load);
          }
        }
      }
    };
    /**
     * @return {?}
     */
    exports.getToken = function() {
      return t;
    };
    /** @type {function(!Object): ?} */
    exports.isAuthorizedIncomingMessage = push;
    /** @type {function(?): ?} */
    exports.isAuthorizedDomain = contains;
    /** @type {function(?): ?} */
    exports.isAuthorizedToken = isString;
    /** @type {function(?): ?} */
    exports.isAuthorizedTagVersion = resolve;
    /**
     * @return {?}
     */
    exports.isActivable = function() {
      /** @type {!Window} */
      var undefined = window.opener || window.parent;
      return window !== undefined && window.addEventListener;
    };
    /**
     * @return {undefined}
     */
    exports.waitForBundleInjection = function() {
      listen(spec.loadBundle);
    };
    /** @type {function(!Function): undefined} */
    exports.listen = listen;
    /** @type {function(!Function): undefined} */
    exports.removeListener = log;
  }(message || (message = {}));
  (function(self) {
    /**
     * @param {?} exception
     * @return {?}
     */
    function debug(exception) {
      return transferArr.some(function(dt) {
        return dt.test(exception);
      });
    }
    /**
     * @param {string} url
     * @param {!Node} onload
     * @return {undefined}
     */
    function loadScript(url, onload) {
      /** @type {!Element} */
      var script = document.createElement("script");
      /** @type {string} */
      script.type = "text/javascript";
      /** @type {boolean} */
      script.async = true;
      var fileDir = origin.replace(/^https?:/, "");
      /** @type {string} */
      script.src = fileDir + "/" + name + "/" + url;
      /** @type {!Node} */
      script.onload = onload;
      /** @type {string} */
      script.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(script);
    }
    /**
     * @param {!Function} callbackName
     * @return {undefined}
     */
    function callback(callbackName) {
      window.addEventListener("message", callbackName, false);
    }
    /**
     * @param {!Function} callback
     * @return {undefined}
     */
    function removeListener(callback) {
      window.removeEventListener("message", callback, false);
    }
    /**
     * @param {!Function} onmessage
     * @return {?}
     */
    function _wrapMessageHandler(onmessage) {
      return function(evt) {
        if (evt.origin === origin) {
          onmessage(evt);
        }
      };
    }
    var origin;
    /** @type {!Window} */
    var win = window.opener || window.parent;
    /** @type {string} */
    var name = "tag";
    /** @type {!Array} */
    var transferArr = [/^https?:\/\/.*\.content-square\.fr$/, /^https:\/\/.*\.contentsquare\.com$/];
    var e = {
      ping : function(event) {
        if ("ping" === event.data && debug(event.origin)) {
          origin = event.origin;
          removeListener(e.ping);
          callback(e.insertMessageScript);
          loadScript(function(canCreateDiscussions) {
            return canCreateDiscussions + "?cb=" + (new Date).getTime();
          }("utils.js"));
        }
      },
      insertMessageScript : _wrapMessageHandler(function(odfelement) {
        var s = odfelement.data;
        if ("string" == typeof s && "ping" !== s) {
          removeListener(e.insertMessageScript);
          loadScript(s);
        }
      })
    };
    /**
     * @return {?}
     */
    self.getToken = function() {
      return message.getToken();
    };
    /**
     * @return {?}
     */
    self.isActivable = function() {
      return window !== win && window.addEventListener;
    };
    /** @type {function(?): ?} */
    self.isAuthorizedDomain = debug;
    /**
     * @return {undefined}
     */
    self.waitForConnection = function() {
      callback(e.ping);
      message.waitForBundleInjection();
    };
    /** @type {function(!Function): undefined} */
    self.listen = callback;
    /** @type {function(!Function): undefined} */
    self.removeListener = removeListener;
    /** @type {function(!Function): ?} */
    self.secureListener = _wrapMessageHandler;
    /**
     * @param {?} data
     * @return {undefined}
     */
    self.post = function(data) {
      if (origin) {
        win.postMessage(data, origin);
      }
    };
  })(app || (app = {}));
  var context = window.CSFrameCommunication || app;
  var win;
  var opts;
  var $tar;
  var me;
  var PWWWService = function() {
    /**
     * @return {undefined}
     */
    function PWWWService() {
    }
    return PWWWService.check = function() {
      return void 0 === Object.assign || this.tryObjectAssign();
    }, PWWWService.tryObjectAssign = function() {
      try {
        var e = {};
        /** @type {!Object} */
        var item = Object.assign(e, {
          a : 1
        }, {
          b : 2,
          c : {
            d : 4
          }
        });
        var value = {
          a : 1,
          b : 2,
          c : {
            d : 4
          }
        };
        return JSON.stringify(item) === JSON.stringify(value) && JSON.stringify(e) === JSON.stringify(value);
      } catch (t) {
        return false;
      }
    }, PWWWService;
  }();
  !function(ListViewLoadOnDemandMode) {
    /** @type {string} */
    ListViewLoadOnDemandMode.None = "None";
    /** @type {string} */
    ListViewLoadOnDemandMode.Lax = "Lax";
    /** @type {string} */
    ListViewLoadOnDemandMode.NotSet = "X";
  }(win || (win = {}));
  (function(state) {
    /** @type {string} */
    state[state.Yes = 1] = "Yes";
    /** @type {string} */
    state[state.No = 0] = "No";
  })(opts || (opts = {}));
  (function($mmText) {
    /**
     * @return {?}
     */
    $mmText.getUrlProtocol = function() {
      return window.location.protocol;
    };
    /**
     * @param {string} e
     * @return {?}
     */
    $mmText.computeSameSite = function(e) {
      return "http:" === $mmText.getUrlProtocol() ? win.Lax : e.crossDomainTracking ? win.None : win.Lax;
    };
    /**
     * @param {string} i
     * @return {?}
     */
    $mmText.computeSecured = function(i) {
      return "http:" === $mmText.getUrlProtocol() ? opts.No : i.crossDomainTracking ? opts.Yes : opts.No;
    };
    /**
     * @return {?}
     */
    $mmText.browserIsSafariV12 = function() {
      return window.navigator.vendor && window.navigator.vendor.indexOf("Apple") > -1 && window.navigator.appVersion && window.navigator.appVersion.indexOf("Version/12.") > -1;
    };
  })($tar || ($tar = {}));
  (function(options) {
    /**
     * @param {string} name
     * @return {?}
     */
    function get(name) {
      /** @type {(Array<string>|null)} */
      var cookie = (new RegExp("(^|;)[ ]*" + name + "=([^;]*)")).exec(document.cookie);
      return cookie ? decodeURIComponent(cookie[2]) : null;
    }
    /**
     * @param {string} path
     * @param {string} data
     * @param {!Object} key
     * @param {?} hash
     * @param {?} value
     * @param {?} prop
     * @return {?}
     */
    function set(path, data, key, hash, value, prop) {
      /** @type {string} */
      var name = encodeURIComponent("" + data);
      var id = key === options.CURRENT_DOMAIN ? void 0 : key;
      var val = fn(hash);
      /** @type {string} */
      var result = path + "=" + name + (val ? ";expires=" + val.toUTCString() : "") + ";path=/" + ($(id) ? ";domain=" + id : "");
      return isArray(value) && (result = result + ";SameSite=" + value), isArray(prop) && prop === opts.Yes && (result = result + ";Secure"), document.cookie = result, true;
    }
    /**
     * @param {!Object} val
     * @return {?}
     */
    function fn(val) {
      return isDefined(val) ? new Date(clock.now() + val) : val;
    }
    /**
     * @param {string} name
     * @param {string} data
     * @return {undefined}
     */
    function callback(name, data) {
      if (get(name)) {
        set(name, "", data, -1);
      }
    }
    /**
     * @return {?}
     */
    function test() {
      /** @type {!Array<string>} */
      var deadPool = window.location.hostname.split(".");
      /** @type {string} */
      var value = deadPool.pop();
      for (; deadPool.length && !get("_cs_root-domain");) {
        set("_cs_root-domain", "1", value = [deadPool.pop(), value].join("."));
      }
      return callback("_cs_root-domain", value), value;
    }
    /** @type {string} */
    options.CURRENT_DOMAIN = "CURRENT_DOMAIN";
    /** @type {function(string): ?} */
    options.get = get;
    /** @type {function(string, string, !Object, ?, ?, ?): ?} */
    options.set = set;
    /** @type {function(!Object): ?} */
    options.toExpireDate = fn;
    /** @type {function(string, string): undefined} */
    options.remove = callback;
    /**
     * @param {string} now
     * @return {?}
     */
    options.getCookieDomain = function(now) {
      return now ? test() : options.CURRENT_DOMAIN;
    };
    /** @type {function(): ?} */
    options.getRootDomain = test;
  })(me || (me = {}));
  var result;
  var Emitter = function() {
    /**
     * @param {!Object} configuration
     * @return {undefined}
     */
    function Cerebrum(configuration) {
      /** @type {!Object} */
      this.configuration = configuration;
    }
    return Cerebrum.prototype.canTrack = function() {
      return this.isBrowsingContextSupported() && this.canTrackProject();
    }, Cerebrum.prototype.canTrackProject = function() {
      return this.configuration.isProjectActive() && this.matchHostnames();
    }, Cerebrum.prototype.matchHostnames = function() {
      return this.configuration.hostnames.some(function(theStringThatShouldBeAtTheStart) {
        return window.location.hostname.indexOf(theStringThatShouldBeAtTheStart) >= 0;
      });
    }, Cerebrum.prototype.isBrowsingContextSupported = function() {
      return this.areCookieEnabled() && !this.isDocPrerendered() && this.isBrowserSupported() && PWWWService.check();
    }, Cerebrum.prototype.areCookieEnabled = function() {
      return "cookie" in document && (document.cookie.length > 0 || me.set("_cs_t", 1, me.CURRENT_DOMAIN) && document.cookie.indexOf("_cs_t") > -1);
    }, Cerebrum.prototype.isDocPrerendered = function() {
      return "visibilityState" in document && "prerender" === document.visibilityState;
    }, Cerebrum.prototype.isBrowserSupported = function() {
      return "pageXOffset" in window && "pageYOffset" in window && "onpagehide" in window && function() {
        /** @type {string} */
        var i = "CSLocalStorageTest";
        try {
          return localStorage.setItem(i, i), localStorage.removeItem(i), true;
        } catch (t) {
          return false;
        }
      }() && window.JSON && window.JSON.parse && window.JSON.stringify && window.addEventListener && window.removeEventListener && window.Node && Array.prototype.filter && Array.prototype.forEach && document.querySelectorAll && Date.now && Object.keys && window.performance;
    }, Cerebrum;
  }();
  var Anchor = function() {
    /**
     * @param {!Object} options
     * @param {!Object} req
     * @param {?} md
     * @return {undefined}
     */
    function self(options, req, md) {
      /** @type {!Object} */
      this.configuration = options;
      /** @type {!Object} */
      this.request = req;
      this.pii = md;
      /** @type {boolean} */
      this.isLoggingActive = false;
      /** @type {number} */
      this.logCount = 0;
    }
    return self.prototype.init = function() {
      var storedParts = 0 === this.configuration.validationRate || this.configuration.validationRate ? this.configuration.validationRate : 10;
      this.isLoggingActive = Number(storedParts);
      this.request.init();
    }, self.prototype.logMessage = function(message) {
      var data = {
        message : message,
        app : "uxa",
        level : "WARNING",
        stacktrace : this.getContext()
      };
      this.sendLog(data);
    }, self.prototype.logError = function(errorText) {
      this.tryToExecute("logError", function() {
        throw new Error(errorText);
      })();
    }, self.prototype.tryToExecute = function(type, e) {
      var client = this;
      return function() {
        /** @type {!Array} */
        var args = [];
        /** @type {number} */
        var i = 0;
        for (; i < arguments.length; i++) {
          args[i] = arguments[i];
        }
        try {
          return e.apply(void 0, args);
        } catch (o) {
          try {
            var message = {
              app : "uxa",
              level : "ERROR",
              message : client.pii.anonymize((o.message || o.toString()) + " function " + type),
              stacktrace : (o.stack || "No stacktrace") + " " + client.getContext()
            };
            client.sendLog(message);
          } catch (t) {
          }
        }
      };
    }, self.prototype.sendLog = function(data) {
      if (this.isLoggingAllowed()) {
        this.request.send(data);
        this.logCount += 1;
      }
    }, self.prototype.isLoggingAllowed = function() {
      return this.isLoggingActive && this.logCount < 5;
    }, self.prototype.setContext = function(context, path) {
      this.visitorService = context;
      this.sessionService = path;
    }, self.prototype.getContext = function() {
      if (!this.visitorService || !this.visitorService.doesVisitorExist()) {
        return "No context";
      }
      var simonFull = this.visitorService.getVisitor();
      var event = this.sessionService.getSession();
      var fields = {
        userId : simonFull.id,
        sessionNumber : simonFull.visitsCount,
        pageNumber : null !== event ? event.pageNumber : null
      };
      return window.JSON.stringify(fields);
    }, self;
  }();
  !function(value) {
    /**
     * @param {!Object} query
     * @return {?}
     */
    value.toQuery = function(query) {
      return Object.keys(query).map(function(name) {
        return encodeURIComponent(name) + "=" + encodeURIComponent(query[name]);
      }).join("&");
    };
  }(result || (result = {}));
  /**
   * @return {?}
   */
  var merge = function() {
    return (merge = Object.assign || function(result) {
      var src;
      /** @type {number} */
      var i = 1;
      /** @type {number} */
      var argl = arguments.length;
      for (; i < argl; i++) {
        var prop;
        for (prop in src = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(src, prop)) {
            result[prop] = src[prop];
          }
        }
      }
      return result;
    }).apply(this, arguments);
  };
  var node = function() {
    /**
     * @param {string} data
     * @param {string} path
     * @return {undefined}
     */
    function Scope(data, path) {
      /** @type {string} */
      this.domainUri = data;
      /** @type {string} */
      this.path = path;
      /** @type {!Array} */
      this.beforeRequestCallbacks = [];
      /** @type {!Array} */
      this.afterRequestCallbacks = [];
    }
    return Scope.prototype.setRequestParametersProviders = function() {
      /** @type {!Array} */
      var argumentsArray = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        argumentsArray[i] = arguments[i];
      }
      /** @type {!Array} */
      this.requestParametersProviders = argumentsArray;
    }, Scope.prototype.before = function(dirname) {
      this.beforeRequestCallbacks.push(dirname);
    }, Scope.prototype.after = function(result) {
      this.afterRequestCallbacks.push(result);
    }, Scope.prototype.retrieveParameters = function() {
      return this.requestParametersProviders ? this.requestParametersProviders.map(function(event) {
        return event.getRequestParameters();
      }).reduce(function(rawUpdate, revLimit) {
        return merge({}, rawUpdate, revLimit);
      }) : {};
    }, Scope;
  }();
  var callService$1 = function() {
    /**
     * @param {?} pos
     * @param {!Object} obj
     * @return {?}
     */
    var fn = function(pos, obj) {
      return (fn = Object.setPrototypeOf || {
        __proto__ : []
      } instanceof Array && function(win, obj) {
        /** @type {!Object} */
        win.__proto__ = obj;
      } || function(el, obj) {
        var key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            el[key] = obj[key];
          }
        }
      })(pos, obj);
    };
    return function(child, data) {
      /**
       * @return {undefined}
       */
      function base() {
        this.constructor = child;
      }
      fn(child, data);
      child.prototype = null === data ? Object.create(data) : (base.prototype = data.prototype, new base);
    };
  }();
  var Node = function(t) {
    /**
     * @param {?} n
     * @param {?} msg
     * @return {?}
     */
    function e(n, msg) {
      return t.call(this, n, msg) || this;
    }
    return callService$1(e, t), e.prototype.send = function() {
      this.beforeRequestCallbacks.forEach(function(failure) {
        return failure();
      });
      var query = this.retrieveParameters();
      this.addCacheBusting(query);
      var element = result.toQuery(query);
      this.generatePixel(element);
      this.afterRequestCallbacks.forEach(function(failure) {
        return failure();
      });
    }, e.prototype.generatePixel = function(source) {
      var script = new window.Image(1, 1);
      /** @type {function(): undefined} */
      script.onload = empty;
      /** @type {function(): undefined} */
      script.onerror = empty;
      /** @type {string} */
      script.src = this.domainUri + (this.path ? "/" + this.path : "") + "?" + source;
    }, e.prototype.addCacheBusting = function(status) {
      /** @type {string} */
      status.r = ("" + Math.random()).slice(2, 8);
    }, e;
  }(node);
  var Row = function() {
    /**
     * @param {?} selector
     * @param {?} expectedIds
     * @return {undefined}
     */
    function t(selector, expectedIds) {
      this.projectConfiguration = selector;
      this.basicLogRequestParameter = expectedIds;
    }
    return t.prototype.init = function() {
      this.request = new Node(this.projectConfiguration.getLoggerUri());
      this.request.setRequestParametersProviders(this, this.basicLogRequestParameter);
    }, t.prototype.send = function(output) {
      /** @type {string} */
      this.log = output;
      this.request.send();
    }, t.prototype.getRequestParameters = function() {
      return {
        a : this.log.app,
        l : this.log.level,
        m : this.log.message,
        s : this.log.stacktrace
      };
    }, t;
  }();
  /** @type {string} */
  var value = "9.17.0";
  var config;
  /**
   * @return {?}
   */
  var Class = function() {
    return (Class = Object.assign || function(error) {
      var props;
      /** @type {number} */
      var i = 1;
      /** @type {number} */
      var argl = arguments.length;
      for (; i < argl; i++) {
        var prop;
        for (prop in props = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(props, prop)) {
            error[prop] = props[prop];
          }
        }
      }
      return error;
    }).apply(this, arguments);
  };
  var ApplicationClients = function() {
    /**
     * @param {!Object} configuration
     * @param {?} initialAssetBundle
     * @return {undefined}
     */
    function Cerebrum(configuration, initialAssetBundle) {
      /** @type {!Object} */
      this.configuration = configuration;
      this.pii = initialAssetBundle;
    }
    return Cerebrum.prototype.getRequestParameters = function() {
      return Class({
        d : "" + clock.now(),
        p : this.pii.anonymize(window.location.href),
        u : navigator.userAgent
      }, this.configuration.getRequestParameters(), castTemplate());
    }, Cerebrum;
  }();
  var Tooltip = function() {
    /**
     * @param {!Object} newConfig
     * @param {?} event
     * @return {undefined}
     */
    function init(newConfig, event) {
      /** @type {!Object} */
      this.configuration = newConfig;
      this.pii = event;
    }
    return init.prototype.create = function() {
      var clients = new ApplicationClients(this.configuration, this.pii);
      var row = new Row(this.configuration, clients);
      var a = new Anchor(this.configuration, row, this.pii);
      return a.init(), a;
    }, init;
  }();
  /** @type {!RegExp} */
  var REGEX_ESCAPE_EXPR = /[a-zA-Z0-9._%+-]+(?:@|%40)[a-zA-Z0-9.%-_]+((?:\.|%2[eE])[a-zA-Z0-9-]+)+/g;
  /** @type {!RegExp} */
  var NOT_FOUND_REGEX = /[a-zA-Z0-9+_-](?:@|%40)/;
  var FullContactCardOptions = function() {
    /**
     * @return {undefined}
     */
    function sparql() {
    }
    return sparql.prototype.anonymize = function(message) {
      return "string" == typeof message && NOT_FOUND_REGEX.test(message) ? message.replace(REGEX_ESCAPE_EXPR, "CS_ANONYMIZED_EMAIL") : message;
    }, sparql.prototype.anonymizeFields = function(data, e) {
      var options = this;
      return e.forEach(function(index) {
        data[index] = options.anonymize(data[index]);
      }), data;
    }, sparql;
  }();
  /** @type {string} */
  var key = "_cs_cvars";
  !function(context) {
    /**
     * @return {?}
     */
    function require() {
      return me.get(key);
    }
    /**
     * @return {?}
     */
    context.get = function() {
      var selector = require();
      return null !== selector ? window.JSON.parse(selector) : null;
    };
    /** @type {function(): ?} */
    context.getRaw = require;
    /**
     * @param {undefined} url
     * @param {undefined} data
     * @param {string} value
     * @param {?} x
     * @param {!Object} y
     * @return {undefined}
     */
    context.setRaw = function(url, data, value, x, y) {
      if (x.isSameSiteSupported()) {
        me.set(key, url, data, void 0, $tar.computeSameSite(value), $tar.computeSecured(value));
      } else {
        me.set(key, url, data);
      }
      y.setCookie(key, url);
    };
    /**
     * @param {string} name
     * @param {string} res
     * @return {undefined}
     */
    context.remove = function(name, res) {
      me.remove(key, name);
      res.removeCookie(key);
    };
    /**
     * @param {?} matchPart
     * @return {?}
     */
    context.isValidCustomVarString = function(matchPart) {
      return "string" == typeof matchPart;
    };
  }(config || (config = {}));
  var r;
  var self;
  var ValueReader = function() {
    /**
     * @param {?} is_acceptor
     * @param {?} sessionService
     * @param {string} bonjourName
     * @param {!Object} ssrc
     * @param {?} published
     * @param {?} ipVersion
     * @param {!Object} bep
     * @return {undefined}
     */
    function Session(is_acceptor, sessionService, bonjourName, ssrc, published, ipVersion, bep) {
      this.visitorService = is_acceptor;
      this.sessionService = sessionService;
      /** @type {string} */
      this.exclusionService = bonjourName;
      /** @type {!Object} */
      this.configuration = ssrc;
      this.cookieDomain = published;
      this.sameSiteService = ipVersion;
      /** @type {!Object} */
      this.crossDomainSingleIframeService = bep;
    }
    return Session.prototype.get = function() {
      return {
        exclusion : this.exclusionService.getAppliedTrackingDraw(),
        visitor : this.visitorService.getVisitor(),
        session : this.sessionService.getSession(),
        cvars : config.getRaw()
      };
    }, Session.prototype.apply = function(value) {
      if (value) {
        if (value.exclusion) {
          this.exclude();
        } else {
          this.include(value);
        }
      }
    }, Session.prototype.exclude = function() {
      this.exclusionService.exclude(this.configuration);
      this.visitorService.removeCurrentVisitor();
      this.sessionService.removeCurrentSession();
      config.remove(this.cookieDomain, this.crossDomainSingleIframeService);
    }, Session.prototype.include = function(args) {
      this.exclusionService.removeExclusion();
      this.visitorService.setVisitor(args.visitor);
      if (args.session) {
        this.sessionService.setSession(args.session);
      } else {
        this.sessionService.removeCurrentSession();
      }
      if (args.cvars) {
        config.setRaw(args.cvars, this.cookieDomain, this.configuration, this.sameSiteService, this.crossDomainSingleIframeService);
      } else {
        config.remove(this.cookieDomain, this.crossDomainSingleIframeService);
      }
    }, Session;
  }();
  /**
   * @return {?}
   */
  var render = function() {
    return (render = Object.assign || function(s) {
      var props;
      /** @type {number} */
      var i = 1;
      /** @type {number} */
      var argl = arguments.length;
      for (; i < argl; i++) {
        var prop;
        for (prop in props = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(props, prop)) {
            s[prop] = props[prop];
          }
        }
      }
      return s;
    }).apply(this, arguments);
  };
  /** @type {string} */
  var name = "_cs_id";
  /** @type {string} */
  var ENSURE_ID_SEP = ".";
  /** @type {!RegExp} */
  var startQuoteRegExp = /^(([a-z0-9\-])+(\.[0-9]+){6})(\.(None|Lax|X)\.(0|1))?$/;
  !function(options) {
    /**
     * @param {!Object} data
     * @return {?}
     */
    function _(data) {
      return [data.id, data.creationTimestamp, data.visitsCount, data.hitTimestamp, data.lastVisitTimestamp, data.appliedTrackingDraw, data.expires, data.sameSite, data.secured].join(ENSURE_ID_SEP);
    }
    /**
     * @param {string} id
     * @return {?}
     */
    function get(id) {
      var matches = id.split(ENSURE_ID_SEP);
      var widget_id = matches[0];
      var childName = matches[1];
      var additionalDigits = matches[2];
      var bulbID = matches[3];
      var minWorkers = matches[4];
      var a = matches[5];
      var expires = matches[6];
      var equalArguments = matches[7];
      var value = matches[8];
      return {
        id : widget_id,
        creationTimestamp : Number(childName),
        visitsCount : Number(additionalDigits),
        hitTimestamp : Number(bulbID),
        lastVisitTimestamp : Number(minWorkers),
        appliedTrackingDraw : Number(a),
        expires : Number(expires),
        sameSite : equalArguments || void 0,
        secured : value ? Number(value) : void 0
      };
    }
    /**
     * @return {?}
     */
    options.get = function() {
      var prop = me.get(name);
      return prop ? get(prop) : null;
    };
    /**
     * @param {!Object} options
     * @param {string} data
     * @param {!Object} args
     * @param {!Object} req
     * @return {undefined}
     */
    options.set = function(options, data, args, req) {
      /** @type {!Date} */
      var res = new Date(options.expires);
      if (args.isSameSiteSupported()) {
        var value = _(options);
        me.set(name, value, data, res, options.sameSite, options.secured);
        req.setCookie(name, value, res);
      } else {
        var value = render({}, options, {
          sameSite : win.NotSet,
          secured : opts.No
        });
        me.set(name, _(value), data, res);
        req.setCookie(name, _(value), res);
      }
    };
    /**
     * @param {string} cb
     * @param {string} res
     * @return {undefined}
     */
    options.remove = function(cb, res) {
      me.remove(name, cb);
      res.removeCookie(name);
    };
    /** @type {function(string): ?} */
    options.fromString = get;
    /**
     * @param {?} word
     * @return {?}
     */
    options.isValidVisitorString = function(word) {
      return startQuoteRegExp.test(word);
    };
  }(r || (r = {}));
  (function(utils) {
    var e = {};
    var timers = {};
    /**
     * @param {string} name
     * @return {?}
     */
    utils.getCookie = function(name) {
      var value = e[name];
      return value || me.get(name);
    };
    /**
     * @param {string} name
     * @param {string} val
     * @param {?} options
     * @param {?} cb
     * @param {string} value
     * @param {?} expireDays
     * @return {undefined}
     */
    utils.setCookie = function(name, val, options, cb, value, expireDays) {
      if (expireDays.isSameSiteSupported()) {
        me.set(name, val, options, cb, $tar.computeSameSite(value), $tar.computeSecured(value));
      } else {
        me.set(name, val, options, cb);
      }
      /** @type {string} */
      e[name] = val;
      (function(i, delay) {
        clearTimeout(timers[i]);
        /** @type {number} */
        timers[i] = setTimeout(function() {
          delete e[i];
        }, delay);
      })(name, cb);
    };
    /**
     * @param {string} name
     * @param {string} cb
     * @return {undefined}
     */
    utils.deleteCookie = function(name, cb) {
      me.remove(name, cb);
      clearTimeout(timers[name]);
      delete e[name];
    };
  })(self || (self = {}));
  var formatter;
  /** @type {!RegExp} */
  var rNum = /^\d+\.[0123]$/;
  var Color = function() {
    /**
     * @param {?} res
     * @param {?} callback
     * @param {!Object} service
     * @return {undefined}
     */
    function options(res, callback, service) {
      this.cookieDomain = res;
      this.sameSiteService = callback;
      /** @type {!Object} */
      this.crossDomainSingleIframeService = service;
    }
    return options.prototype.get = function(element) {
      var value = this.getRawSession(element);
      return this.isValid(value) ? options.fromString(value) : null;
    }, options.prototype.getRawSession = function(suppressDisabledCheck) {
      return suppressDisabledCheck ? me.get("_cs_s") : self.getCookie("_cs_s");
    }, options.prototype.set = function(data, value, options) {
      if (void 0 === options) {
        /** @type {number} */
        options = 18E5;
      }
      var token = this.toString(data);
      self.setCookie("_cs_s", token, this.cookieDomain, options, value, this.sameSiteService);
      this.crossDomainSingleIframeService.setCookie("_cs_s", token, options);
    }, options.prototype.remove = function(cb) {
      self.deleteCookie("_cs_s", cb);
      this.crossDomainSingleIframeService.removeCookie("_cs_s");
    }, options.prototype.isValid = function(val) {
      return null !== val && options.isValidSessionString(val);
    }, options.prototype.toString = function(data) {
      return [data.pageNumber, data.recordingState].join(".");
    }, options.fromString = function(name) {
      var main_axis = name.split(".");
      var displacement = main_axis[0];
      return {
        recordingState : main_axis[1],
        pageNumber : parseInt(displacement, 10)
      };
    }, options.isValidSessionString = function(val) {
      return rNum.test(val);
    }, options;
  }();
  !function(canCreateDiscussions) {
    /**
     * @param {?} data
     * @return {?}
     */
    (formatter || (formatter = {})).fromRaw = function(data) {
      return {
        exclusion : Number(data._cs_ex),
        visitor : data._cs_id ? r.fromString(data._cs_id) : null,
        session : data._cs_s ? Color.fromString(data._cs_s) : null,
        cvars : data._cs_cvars
      };
    };
  }();
  var $jwterm;
  /** @type {!RegExp} */
  var removedRelations = /^[0-9]+$/;
  var Option = function() {
    /**
     * @param {string} value
     * @param {?} proxy
     * @param {?} usual_flow
     * @param {!Object} mpx
     * @return {undefined}
     */
    function options(value, proxy, usual_flow, mpx) {
      /** @type {string} */
      this.location = value;
      this.cookieDomain = proxy;
      this.sameSiteService = usual_flow;
      /** @type {!Object} */
      this.crossDomainSingleIframeService = mpx;
    }
    return options.prototype.exclude = function(tag) {
      if (this.sameSiteService.isSameSiteSupported()) {
        me.set("_cs_ex", tag.lastTrackingDraw, this.cookieDomain, 2592E6, $tar.computeSameSite(tag), $tar.computeSecured(tag));
      } else {
        me.set("_cs_ex", tag.lastTrackingDraw, this.cookieDomain, 2592E6);
      }
      this.crossDomainSingleIframeService.setCookie("_cs_ex", "" + tag.lastTrackingDraw, 2592E6);
    }, options.prototype.removeExclusion = function() {
      me.remove("_cs_ex", this.cookieDomain);
      this.crossDomainSingleIframeService.removeCookie("_cs_ex");
    }, options.prototype.isExcluded = function() {
      return this.hasExclusionCookie() || this.hasExclusionInURL();
    }, options.prototype.hasExclusionCookie = function() {
      return 0 !== this.getAppliedTrackingDraw();
    }, options.prototype.getAppliedTrackingDraw = function() {
      return Number(me.get("_cs_ex"));
    }, options.prototype.hasExclusionInURL = function() {
      return this.location.href.indexOf("_cs_ex") > 0;
    }, options.isValidExclusionString = function(length) {
      return removedRelations.test(length);
    }, options;
  }();
  !function(canCreateDiscussions) {
    /**
     * @param {!Object} value
     * @return {?}
     */
    ($jwterm || ($jwterm = {})).isValid = function(value) {
      return (!value._cs_id || r.isValidVisitorString(value._cs_id)) && (!value._cs_s || Color.isValidSessionString(value._cs_s)) && (!value._cs_ex || Option.isValidExclusionString(value._cs_ex)) && (!value._cs_cvars || config.isValidCustomVarString(value._cs_cvars));
    };
  }();
  var Event;
  var Animation = function() {
    /**
     * @param {!Object} port
     * @param {!Function} logger
     * @param {string} names
     * @return {undefined}
     */
    function config(port, logger, names) {
      /** @type {!Object} */
      this.xdframeOpener = port;
      /** @type {!Function} */
      this.logger = logger;
      /** @type {string} */
      this.location = names;
    }
    return config.prototype.retrieve = function(messages, callback) {
      var me = this;
      /** @type {!Function} */
      this.callback = callback;
      /** @type {!Array} */
      this.retrievedStates = [];
      this.xdframeOrigins = messages.filter(function(t) {
        return me.isNotCurrentHostname(t);
      }).map(config.getXdframeOrigin);
      this.xdframeOpener.onMessage(function(t) {
        me.handleXdframeMessage(t);
      });
      this.xdframeOpener.onTimeout(function() {
        me.handleTimeout();
      });
      this.xdframeOpener.start();
      this.xdframeOrigins.map(config.getXdframeUrl).forEach(function(t) {
        return me.xdframeOpener.open(t);
      });
    }, config.prototype.handleXdframeMessage = function(e) {
      if (this.isXdframeMessage(e)) {
        var data = e.data;
        if (!$jwterm.isValid(data)) {
          throw this.xdframeOpener.stop(), "Invalid domain state: " + JSON.stringify(e.data) + " from " + e.origin;
        }
        this.retrievedStates.push(data);
      }
      if (this.allMessagesAreIn()) {
        this.xdframeOpener.stop();
        this.callback(this.retrievedStates.map(formatter.fromRaw));
      }
    }, config.prototype.handleTimeout = function() {
      this.logger.logMessage("xdframe: all messages not received");
    }, config.prototype.isXdframeMessage = function(instance) {
      return this.xdframeOrigins.indexOf(instance.origin) > -1;
    }, config.prototype.allMessagesAreIn = function() {
      return this.retrievedStates.length === this.xdframeOrigins.length;
    }, config.prototype.isNotCurrentHostname = function(list) {
      return !toArray(this.location.hostname, list);
    }, config.getXdframeOrigin = function(canCreateDiscussions) {
      return "https://csxd." + canCreateDiscussions;
    }, config.getXdframeUrl = function(canCreateDiscussions) {
      return canCreateDiscussions + "/xdframe-1.0.0.html";
    }, config;
  }();
  var Logger = function() {
    /**
     * @param {!Function} val
     * @return {undefined}
     */
    function self(val) {
      var worker = this;
      /** @type {!Function} */
      this.logger = val;
      /** @type {number} */
      this.ALL_MESSAGES_RECEIVED_TIMEOUT = 3E3;
      /**
       * @param {!Object} messageObject
       * @return {undefined}
       */
      this.scopedHandleMessage = function(messageObject) {
        worker.handleMessage(messageObject);
      };
    }
    return self.prototype.onMessage = function(storedAnnotations) {
      /** @type {!Node} */
      this.onMessageCallback = storedAnnotations;
    }, self.prototype.onTimeout = function(fn) {
      /** @type {!Node} */
      this.onTimeoutCallback = fn;
    }, self.prototype.start = function() {
      var t = this;
      window.addEventListener("message", this.scopedHandleMessage);
      this.timeout = window.setTimeout(function() {
        t.onTimeoutCallback();
      }, this.ALL_MESSAGES_RECEIVED_TIMEOUT);
    }, self.prototype.open = function(t) {
      /** @type {!Element} */
      var tmp = document.createElement("iframe");
      return tmp.src = t, tmp.style.display = "none", document.body.appendChild(tmp), tmp;
    }, self.prototype.stop = function() {
      window.removeEventListener("message", this.scopedHandleMessage);
      window.clearTimeout(this.timeout);
      /** @type {function(): undefined} */
      this.onMessageCallback = empty;
      /** @type {function(): undefined} */
      this.onTimeoutCallback = empty;
    }, self.prototype.disableTimeout = function() {
      /** @type {function(): undefined} */
      this.onTimeoutCallback = empty;
    }, self.prototype.handleMessage = function(messageObject) {
      var JSON = this;
      this.logger.tryToExecute("XdframeMessage", function() {
        JSON.onMessageCallback(messageObject);
      })();
    }, self;
  }();
  var combiFunc = function() {
    /**
     * @param {?} pos
     * @param {!Object} obj
     * @return {?}
     */
    var fn = function(pos, obj) {
      return (fn = Object.setPrototypeOf || {
        __proto__ : []
      } instanceof Array && function(win, obj) {
        /** @type {!Object} */
        win.__proto__ = obj;
      } || function(el, obj) {
        var key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            el[key] = obj[key];
          }
        }
      })(pos, obj);
    };
    return function(child, data) {
      /**
       * @return {undefined}
       */
      function base() {
        this.constructor = child;
      }
      fn(child, data);
      child.prototype = null === data ? Object.create(data) : (base.prototype = data.prototype, new base);
    };
  }();
  var Parser = function(t) {
    /**
     * @param {?} endpoint
     * @param {?} params
     * @param {!Function} connection
     * @param {string} debug
     * @return {?}
     */
    function WebSocketTransport(endpoint, params, connection, debug) {
      var options = t.call(this, endpoint, params) || this;
      return options.logger = connection, options.compressor = debug, options.afterRequestDataRetrievedCallbacks = [], options.requestHeaders = [], options;
    }
    return combiFunc(WebSocketTransport, t), WebSocketTransport.prototype.setRequestPayloadProvider = function(connection) {
      /** @type {string} */
      this.requestPayloadProvider = connection;
    }, WebSocketTransport.prototype.setRequestHeader = function(header) {
      this.requestHeaders.push(header);
    }, WebSocketTransport.prototype.afterProvidersCalled = function(t) {
      this.afterRequestDataRetrievedCallbacks.push(t);
    }, WebSocketTransport.prototype.send = function() {
      var self = this;
      this.beforeRequestCallbacks.forEach(function(failure) {
        return failure();
      });
      var query = this.retrieveParameters();
      var data = result.toQuery(query);
      var buffer = this.retrievePayload();
      this.afterRequestDataRetrievedCallbacks.forEach(function(failure) {
        return failure();
      });
      if (this.compressor) {
        this.compressor.compress(buffer, function(e) {
          self.doSend(data, e);
        });
      } else {
        this.doSend(data, buffer);
      }
    }, WebSocketTransport.prototype.retrievePayload = function() {
      return this.requestPayloadProvider ? this.requestPayloadProvider.getRequestPayload() : "";
    }, WebSocketTransport.prototype.doSend = function(type, callback) {
      var self = this;
      this.logger.tryToExecute("POST request", function() {
        self.sendXMLHttpRequest(type, callback);
        self.afterRequestCallbacks.forEach(function(saveNotifs) {
          return saveNotifs();
        });
      })();
    }, WebSocketTransport.prototype.sendXMLHttpRequest = function(name, data) {
      if (null !== window.XMLHttpRequest) {
        /** @type {!XMLHttpRequest} */
        var xhr = new XMLHttpRequest;
        xhr.open("POST", this.domainUri + "/" + this.path + "?" + name, true);
        /** @type {number} */
        var i = 0;
        var requestHeaders = this.requestHeaders;
        for (; i < requestHeaders.length; i++) {
          var header = requestHeaders[i];
          xhr.setRequestHeader(header.name, header.value);
        }
        /** @type {function(): undefined} */
        xhr.onreadystatechange = empty;
        xhr.send(data);
      }
    }, WebSocketTransport;
  }(node);
  !function(Event) {
    /** @type {string} */
    Event[Event.MUTATION_INSERT = 1] = "MUTATION_INSERT";
    /** @type {string} */
    Event[Event.MUTATION_REMOVE = 2] = "MUTATION_REMOVE";
    /** @type {string} */
    Event[Event.MUTATION_ATTRIBUTE = 3] = "MUTATION_ATTRIBUTE";
    /** @type {string} */
    Event[Event.MUTATION_CHARACTER_DATA = 4] = "MUTATION_CHARACTER_DATA";
    /** @type {string} */
    Event[Event.INITIAL_DOM = 5] = "INITIAL_DOM";
    /** @type {string} */
    Event[Event.SCROLL = 6] = "SCROLL";
    /** @type {string} */
    Event[Event.MOUSE_MOVE = 7] = "MOUSE_MOVE";
    /** @type {string} */
    Event[Event.CLICK = 8] = "CLICK";
    /** @type {string} */
    Event[Event.RESIZE = 9] = "RESIZE";
    /** @type {string} */
    Event[Event.INPUT_CHECKABLE = 10] = "INPUT_CHECKABLE";
    /** @type {string} */
    Event[Event.INPUT_SELECT = 11] = "INPUT_SELECT";
    /** @type {string} */
    Event[Event.INPUT_TEXT = 12] = "INPUT_TEXT";
    /** @type {string} */
    Event[Event.HASH_CHANGE = 13] = "HASH_CHANGE";
    /** @type {string} */
    Event[Event.CONSENT_GRANTED = 14] = "CONSENT_GRANTED";
    /** @type {string} */
    Event[Event.CONSENT_WITHDRAWN = 15] = "CONSENT_WITHDRAWN";
    /** @type {string} */
    Event[Event.MOUSE_OVER = 16] = "MOUSE_OVER";
    /** @type {string} */
    Event[Event.VISIBILITY_CHANGE = 17] = "VISIBILITY_CHANGE";
    /** @type {string} */
    Event[Event.STYLESHEET_RULE_INSERT = 18] = "STYLESHEET_RULE_INSERT";
    /** @type {string} */
    Event[Event.STATIC_RESOURCE_URL = 19] = "STATIC_RESOURCE_URL";
    /** @type {string} */
    Event[Event.PERFORMANCE_TIMINGS = 20] = "PERFORMANCE_TIMINGS";
    /** @type {string} */
    Event[Event.ATTACH_SHADOW = 22] = "ATTACH_SHADOW";
    /** @type {string} */
    Event[Event.STYLESHEET_CSS_TEXT_UPDATE = 23] = "STYLESHEET_CSS_TEXT_UPDATE";
  }(Event || (Event = {}));
  /** @type {boolean} */
  var server = true;
  /**
   * @return {?}
   */
  var check = function() {
    return (check = Object.assign || function(result) {
      var src;
      /** @type {number} */
      var i = 1;
      /** @type {number} */
      var argl = arguments.length;
      for (; i < argl; i++) {
        var prop;
        for (prop in src = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(src, prop)) {
            result[prop] = src[prop];
          }
        }
      }
      return result;
    }).apply(this, arguments);
  };
  var Sub = function() {
    /**
     * @param {!Function} l
     * @param {!Object} s
     * @param {string} index
     * @param {?} inputs
     * @return {undefined}
     */
    function init(l, s, index, inputs) {
      var fs = this;
      /** @type {!Function} */
      this.logger = l;
      /** @type {!Object} */
      this.selector = s;
      /** @type {string} */
      this.nodeIdentifier = index;
      this.sensitiveContent = inputs;
      /** @type {!Array} */
      this.documents = [];
      /** @type {!Array} */
      this.onEventCallbacks = [];
      /** @type {!Array} */
      this.eventHandlers = [{
        type : "change",
        listener : this.selector.on(init.whiteListedCheckableInputsSelector, function(zip) {
          return fs.inputCheckableListener(zip.target);
        })
      }, {
        type : "change",
        listener : this.selector.on("select", function(zip) {
          return fs.inputSelectListener(zip.target);
        })
      }, {
        type : "keyup",
        listener : this.selector.on(init.whiteListedTextInputSelector, function(zip) {
          return fs.inputTextListener(zip.target);
        })
      }, {
        type : "scroll",
        listener : function(event) {
          return fs.scrollListener(event.target);
        }
      }, {
        type : "mouseover",
        listener : function(f) {
          return fs.mouseOverListener(f);
        }
      }, {
        type : "click",
        listener : function(value) {
          return fs.clickListener(value);
        }
      }];
      this.initSubscribers();
    }
    return init.prototype.initSubscribers = function() {
      var self = this;
      this.nodeIdentifier.onIdentifierAdded(function(tx) {
        if (func(tx)) {
          self.bindHandlers(tx);
        }
      });
      this.nodeIdentifier.onIdentifierRemoved(function(tx) {
        if (func(tx)) {
          self.unbindHandlers(tx);
        }
      });
    }, init.prototype.onEvent = function(callback) {
      this.onEventCallbacks.push(function(e) {
        e.date = clock.now();
        callback(e);
      });
    }, init.prototype.triggerCallbacks = function(size) {
      this.onEventCallbacks.forEach(function(fstore) {
        return fstore(size);
      });
    }, init.prototype.start = function() {
      this.triggerInitialEvents();
    }, init.prototype.stop = function() {
      this.unbindAllHandlers();
    }, init.prototype.bindHandlers = function(spec) {
      if (-1 === this.documents.indexOf(spec)) {
        this.documents.push(spec);
        this.eventHandlers.forEach(function(JohnDoe) {
          return subscribe(check({
            boundElement : spec
          }, JohnDoe));
        });
      }
    }, init.prototype.unbindHandlers = function(value) {
      this.documents = this.documents.filter(function(optionsValue) {
        return optionsValue !== value;
      });
      this.eventHandlers.forEach(function(schema) {
        return done(check({
          boundElement : value
        }, schema));
      });
    }, init.prototype.unbindAllHandlers = function() {
      var self = this;
      this.documents.forEach(function(target) {
        return self.unbindHandlers(target);
      });
    }, init.prototype.triggerInitialEvents = function() {
      this.initialTextInputListener();
      this.initialScrollListener();
      this.initialSelectListener();
      this.initialCheckableListener();
    }, init.prototype.initialTextInputListener = function() {
      /** @type {!NodeList<Element>} */
      var snnm = document.querySelectorAll(init.whiteListedTextInputSelector);
      /** @type {number} */
      var i = 0;
      for (; i < snnm.length; i = i + 1) {
        /** @type {(Element|null)} */
        var e = snnm.item(i);
        if (e.value.length > 0) {
          this.inputTextListener(e);
        }
      }
    }, init.prototype.initialScrollListener = function() {
      /** @type {!NodeList<Element>} */
      var horizontal_guides = document.getElementsByTagName("*");
      /** @type {number} */
      var i = 0;
      for (; i < horizontal_guides.length; i = i + 1) {
        /** @type {!Element} */
        var position = horizontal_guides[i];
        var oldPosition = this.getScrollPosition(position);
        var fhTop = oldPosition.top;
        var el_left = oldPosition.left;
        if (!(0 === fhTop && 0 === el_left)) {
          this.scrollListener(position);
        }
      }
    }, init.prototype.initialSelectListener = function() {
      /** @type {!NodeList<Element>} */
      var $selects = document.getElementsByTagName("select");
      /** @type {number} */
      var i = 0;
      for (; i < $selects.length; i = i + 1) {
        this.inputSelectListener($selects[i]);
      }
    }, init.prototype.initialCheckableListener = function() {
      /** @type {!NodeList<Element>} */
      var keywordResults = document.querySelectorAll(init.whiteListedCheckableInputsSelector);
      /** @type {number} */
      var i = 0;
      for (; i < keywordResults.length; i = i + 1) {
        this.inputCheckableListener(keywordResults[i]);
      }
    }, init.prototype.getScrollPosition = function(container) {
      return container === document ? {
        top : window.pageYOffset,
        left : window.pageXOffset
      } : {
        top : container.scrollTop,
        left : container.scrollLeft
      };
    }, init.prototype.scrollListener = function(e) {
      var self = this;
      this.logger.tryToExecute("scroll", function() {
        self.nodeIdentifier.ifIdentified(e, function(quickReplyIndex) {
          if (!self.sensitiveContent.isSensitiveElementNode(e)) {
            var originOffset = self.getScrollPosition(e);
            self.triggerCallbacks({
              type : Event.SCROLL,
              args : [quickReplyIndex, originOffset.left, originOffset.top]
            });
          }
        });
      })();
    }, init.prototype.mouseOverListener = function(e) {
      var self = this;
      this.logger.tryToExecute("mouseOver", function() {
        self.nodeIdentifier.ifIdentified(e.target, function(quickReplyIndex) {
          self.triggerCallbacks({
            type : Event.MOUSE_OVER,
            args : [quickReplyIndex]
          });
        });
      })();
    }, init.prototype.clickListener = function(e) {
      var self = this;
      this.logger.tryToExecute("click", function() {
        self.nodeIdentifier.ifIdentified(e.target, function(quickReplyIndex) {
          self.triggerCallbacks({
            type : Event.CLICK,
            args : [quickReplyIndex]
          });
        });
      })();
    }, init.prototype.inputCheckableListener = function(t) {
      var self = this;
      this.logger.tryToExecute("checkable", function() {
        self.nodeIdentifier.ifIdentified(t, function(quickReplyIndex) {
          if (!self.sensitiveContent.isSensitiveElementNode(t)) {
            self.triggerCallbacks({
              type : Event.INPUT_CHECKABLE,
              args : [quickReplyIndex, t.checked]
            });
          }
        });
      })();
    }, init.prototype.inputSelectListener = function(inmediate_node) {
      var self = this;
      this.logger.tryToExecute("select", function() {
        self.nodeIdentifier.ifIdentified(inmediate_node, function(quickReplyIndex) {
          if (!self.sensitiveContent.isSensitiveElementNode(inmediate_node)) {
            self.triggerCallbacks({
              type : Event.INPUT_SELECT,
              args : [quickReplyIndex, inmediate_node.selectedIndex]
            });
          }
        });
      })();
    }, init.prototype.inputTextListener = function(rep) {
      var self = this;
      this.logger.tryToExecute("text", function() {
        self.nodeIdentifier.ifIdentified(rep, function(quickReplyIndex) {
          if (!self.sensitiveContent.isSensitiveElementNode(rep)) {
            self.triggerCallbacks({
              type : Event.INPUT_TEXT,
              args : [quickReplyIndex, rep.value.replace(/\S/g, "\u2022")]
            });
          }
        });
      })();
    }, init.whiteListedTextInputSelector = ["textarea", "input:not([type])", 'input[type="text"]', 'input[type="email"]', 'input[type="search"]', 'input[type="tel"]', 'input[type="url"]'].join(","), init.whiteListedCheckableInputsSelector = ['input[type="checkbox"]', 'input[type="radio"]'].join(","), init;
  }();
  var Farm = function() {
    /**
     * @param {?} observerList
     * @param {!Object} mutationObserver
     * @param {!Object} styleGenerator
     * @return {undefined}
     */
    function NodeObserver(observerList, mutationObserver, styleGenerator) {
      var allTraps = this;
      this.mutationSerializer = observerList;
      /** @type {!Object} */
      this.mutationObserver = mutationObserver;
      /** @type {!Object} */
      this.staticResourceUrlTracker = styleGenerator;
      this.mutationObserver.onCharacterDataMutation(function(t) {
        return allTraps.characterDataMutation(t);
      });
      this.mutationObserver.onAttributesMutation(function(propName) {
        return allTraps.attributesMutation(propName);
      });
      this.mutationObserver.onChildListMutation(function(t) {
        return allTraps.childListMutation(t);
      });
      this.mutationObserver.onAttachShadowMutation(function(t) {
        return allTraps.attachShadowEvent(t);
      });
    }
    return NodeObserver.prototype.onEvent = function(name) {
      /** @type {!Function} */
      this.onEventCallback = name;
    }, NodeObserver.prototype.start = function() {
      this.mutationObserver.start();
      this.recordInitialDom();
    }, NodeObserver.prototype.stop = function() {
      this.mutationObserver.stop();
    }, NodeObserver.prototype.recordInitialDom = function() {
      var argstring = this.mutationSerializer.serializeDocument(document);
      this.onEventCallback({
        args : argstring,
        date : clock.now(),
        type : Event.INITIAL_DOM
      });
    }, NodeObserver.prototype.attachShadowEvent = function(row) {
      var lst = this.mutationSerializer.serializeAttachShadowEvent(row);
      if (lst) {
        this.onEventCallback({
          args : lst,
          date : row.date,
          type : Event.ATTACH_SHADOW
        });
      }
    }, NodeObserver.prototype.attributesMutation = function(value) {
      var str = this.mutationSerializer.serializeMutationAttribute(value);
      if (str) {
        this.onEventCallback({
          args : str,
          date : value.date,
          type : Event.MUTATION_ATTRIBUTE
        });
        this.staticResourceUrlTracker.scanAttribute(value.target, value.attributeName);
      }
    }, NodeObserver.prototype.characterDataMutation = function(target) {
      var peerId = this.mutationSerializer.serializeMutationCharacterData(target);
      if (peerId) {
        this.onEventCallback({
          args : peerId,
          date : target.date,
          type : Event.MUTATION_CHARACTER_DATA
        });
        this.staticResourceUrlTracker.scanText(target.target);
      }
    }, NodeObserver.prototype.childListMutation = function(message) {
      var watchedMovies = this;
      var record = this.mutationSerializer.serializeMutationChildList(message);
      if (record) {
        var removed = record.removedNodes;
        var added = record.addedNodes;
        removed.forEach(function(argstring) {
          watchedMovies.onEventCallback({
            args : argstring,
            date : message.date,
            type : Event.MUTATION_REMOVE
          });
        });
        added.forEach(function(argstring) {
          watchedMovies.onEventCallback({
            args : argstring,
            date : message.date,
            type : Event.MUTATION_INSERT
          });
        });
      }
    }, NodeObserver;
  }();
  /** @type {number} */
  var _num1 = 2;
  var Chartlet = function() {
    /**
     * @param {number} context
     * @return {undefined}
     */
    function MultiLineDialogViewModel(context) {
      /** @type {number} */
      this.storageCharsUsed = 0;
      /** @type {number} */
      this.maxStoredChars = 0;
      /** @type {number} */
      this.maxStoredChars = context / _num1;
    }
    return MultiLineDialogViewModel.prototype.add = function(view_types) {
      this.storageCharsUsed += view_types.length;
    }, MultiLineDialogViewModel.prototype.isThresholdReached = function() {
      return this.storageCharsUsed > this.maxStoredChars;
    }, MultiLineDialogViewModel.prototype.reset = function() {
      /** @type {number} */
      this.storageCharsUsed = 0;
    }, MultiLineDialogViewModel;
  }();
  /** @type {number} */
  var gaxOptions = 512E3;
  var VodClient = function() {
    /**
     * @param {!Array} typeList
     * @param {number} options
     * @param {number} callback
     * @return {undefined}
     */
    function Calendar(typeList, options, callback) {
      if (void 0 === typeList) {
        /** @type {!Array} */
        typeList = [];
      }
      if (void 0 === options) {
        options = {};
      }
      if (void 0 === callback) {
        /** @type {number} */
        callback = gaxOptions;
      }
      /** @type {!Array} */
      this.events = typeList;
      /** @type {number} */
      this.requestParameters = options;
      this.sizeCounter = new Chartlet(callback);
    }
    return Calendar.prototype.addEvent = function(data) {
      this.sizeCounter.add(JSON.stringify(data));
      this.events.push(data);
    }, Calendar.prototype.eventsCount = function() {
      return this.events.length;
    }, Calendar.prototype.clearEvents = function() {
      this.sizeCounter.reset();
      /** @type {!Array} */
      this.events = [];
    }, Calendar.prototype.isFull = function() {
      return this.sizeCounter.isThresholdReached() || this.eventsCount() >= 100;
    }, Calendar.prototype.setRequestParametersFromProvider = function(event) {
      var folder = event.getRequestParameters();
      var folderEntity;
      for (folderEntity in folder) {
        if (folder.hasOwnProperty(folderEntity)) {
          this.requestParameters[folderEntity] = folder[folderEntity];
        }
      }
    }, Calendar.prototype.getEvents = function() {
      return this.events;
    }, Calendar.prototype.getRequestPayload = function() {
      return JSON.stringify(this.events);
    }, Calendar.prototype.getRequestParameters = function() {
      return this.requestParameters;
    }, Calendar;
  }();
  var Network = function() {
    /**
     * @return {undefined}
     */
    function o() {
      /** @type {number} */
      this.index = 1;
    }
    return o.prototype.increment = function() {
      this.index += 1;
    }, o.prototype.reset = function() {
      /** @type {number} */
      this.index = 1;
    }, o.prototype.getRequestParameters = function() {
      return {
        ri : "" + this.index
      };
    }, o;
  }();
  /** @type {string} */
  var frameworkLibScriptTag = exports.toString();
  var d = exports();
  var settings;
  var ScopeChain = function() {
    /**
     * @param {!Function} packagedJs
     * @return {undefined}
     */
    function WorkerClient(packagedJs) {
      /** @type {!Function} */
      this.onError = packagedJs;
      this.worker = this.tryCreateCompressionWorker();
      this.callbacks = {};
      /** @type {number} */
      this.callbackId = 0;
    }
    return WorkerClient.prototype.isSupported = function() {
      return null !== this.worker;
    }, WorkerClient.prototype.compress = function(data, callback) {
      if (this.isSupported()) {
        var event = this.getNewCallbackId();
        /** @type {!Function} */
        this.callbacks[event] = callback;
        this.worker.postMessage([data, event]);
      }
    }, WorkerClient.prototype.compressSync = function(data) {
      return d.compressToBase64(data);
    }, WorkerClient.prototype.terminateWorker = function() {
      if (null !== this.worker) {
        this.worker.terminate();
      }
    }, WorkerClient.prototype.tryCreateCompressionWorker = function() {
      try {
        var output = this.compressionScript.toString().replace("GET_LZ_STRING_SOURCE", frameworkLibScriptTag);
        return this.createWorker("(" + output + ")();");
      } catch (t) {
        return null;
      }
    }, WorkerClient.prototype.createWorker = function(fn) {
      var _this = this;
      var URL = window.URL || window.webkitURL;
      var Blob = window.Blob;
      var Worker = window.Worker;
      if (!URL || !Blob || !Worker) {
        return null;
      }
      var blob = new Blob([fn], {
        type : "application/javascript"
      });
      var pdfWorker = new Worker(URL.createObjectURL(blob));
      return pdfWorker.onerror = function(message) {
        return _this.handleWorkerError(message);
      }, pdfWorker.onmessage = function(e) {
        return _this.handleWorkerMessage(e);
      }, pdfWorker;
    }, WorkerClient.prototype.handleWorkerError = function(message) {
      /** @type {string} */
      var xhr = "WorkerError: " + (message.message ? message.message : "No message");
      return this.onError(xhr);
    }, WorkerClient.prototype.handleWorkerMessage = function(e) {
      var message = e.data;
      var id = message[0];
      var data = message[1];
      this.callbacks[id](data);
      delete this.callbacks[id];
    }, WorkerClient.prototype.compressionScript = function() {
      var LZString = GET_LZ_STRING_SOURCE();
      self.addEventListener("message", function(unit) {
        var terms = unit.data;
        var data = terms[0];
        var id = terms[1];
        self.postMessage([id, LZString.compressToBase64(data)]);
      });
    }, WorkerClient.prototype.getNewCallbackId = function() {
      return this.callbackId += 1;
    }, WorkerClient;
  }();
  var CubeInterface = function() {
    /**
     * @return {undefined}
     */
    function self() {
    }
    return self.prototype.emit = function(type, data) {
      /** @type {string} */
      var name = self.prefix + "." + type;
      var eventName = self.createEvent(name, {
        detail : data
      });
      if (null !== eventName) {
        document.dispatchEvent(eventName);
      }
    }, self.createEvent = function(name, params) {
      if (void 0 === params && (params = {}), "function" == typeof CustomEvent) {
        return new CustomEvent(name, params);
      }
      var e = this.tryToCreateCustomEvent();
      if (null === e) {
        return null;
      }
      var oldBubbles = params.bubbles;
      var n = void 0 !== oldBubbles && oldBubbles;
      var bindDomElem = params.cancelable;
      var cancelable = void 0 !== bindDomElem && bindDomElem;
      var data = params.detail;
      return e.initCustomEvent(name, n, cancelable, data), e;
    }, self.tryToCreateCustomEvent = function() {
      try {
        return document.createEvent("CustomEvent");
      } catch (t) {
        return null;
      }
    }, self.prefix = "cs.tracking", self;
  }();
  var tagsize = function() {
    /**
     * @return {undefined}
     */
    function ProcessHost() {
      /** @type {boolean} */
      this.isStarted = false;
    }
    return ProcessHost.prototype.start = function() {
      if (!this.isStarted) {
        /** @type {boolean} */
        this.isStarted = true;
        this.onStart();
      }
    }, ProcessHost.prototype.stop = function() {
      if (this.isStarted) {
        /** @type {boolean} */
        this.isStarted = false;
        this.onStop();
      }
    }, ProcessHost.prototype.restart = function() {
      this.stop();
      this.start();
    }, ProcessHost;
  }();
  var debug = function() {
    /**
     * @param {?} pos
     * @param {!Object} obj
     * @return {?}
     */
    var fn = function(pos, obj) {
      return (fn = Object.setPrototypeOf || {
        __proto__ : []
      } instanceof Array && function(win, obj) {
        /** @type {!Object} */
        win.__proto__ = obj;
      } || function(el, obj) {
        var key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            el[key] = obj[key];
          }
        }
      })(pos, obj);
    };
    return function(child, data) {
      /**
       * @return {undefined}
       */
      function base() {
        this.constructor = child;
      }
      fn(child, data);
      child.prototype = null === data ? Object.create(data) : (base.prototype = data.prototype, new base);
    };
  }();
  /**
   * @return {?}
   */
  var concat = function() {
    return (concat = Object.assign || function(o) {
      var props;
      /** @type {number} */
      var i = 1;
      /** @type {number} */
      var argl = arguments.length;
      for (; i < argl; i++) {
        var prop;
        for (prop in props = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(props, prop)) {
            o[prop] = props[prop];
          }
        }
      }
      return o;
    }).apply(this, arguments);
  };
  var CssRules = function(size) {
    /**
     * @param {!Object} key
     * @param {!Object} value
     * @param {number} options
     * @param {!Object} index
     * @param {!Object} error
     * @param {!Object} chunk
     * @param {!Object} context
     * @param {!Object} urls
     * @param {boolean} url
     * @param {!Object} win
     * @param {!Object} identifier
     * @return {?}
     */
    function constructor(key, value, options, index, error, chunk, context, urls, url, win, identifier) {
      var self = size.call(this) || this;
      return self.recordingRequest = key, self.recordingBatch = value, self.requestParameters = options, self.requestIndex = index, self.styleSheetRuleTracker = error, self.recordingMutationsTracker = chunk, self.recordingPageEventsTracker = context, self.recordingBrowserEventsTracker = urls, self.sessionRenewer = url, self.staticResourceUrlTracker = win, self.recordingPerformanceTimingsTracker = identifier, self.eventEmitter = new CubeInterface, self;
    }
    return debug(constructor, size), constructor.prototype.init = function() {
      this.bindRecordingRequest();
      this.bindTrackers();
    }, constructor.prototype.bindRecordingRequest = function() {
      var options = this;
      this.recordingRequest.setRequestPayloadProvider(this.recordingBatch);
      this.recordingRequest.setRequestParametersProviders(this.recordingBatch);
      this.recordingRequest.afterProvidersCalled(function() {
        options.recordingBatch.clearEvents();
        options.requestIndex.increment();
        options.recordingBatch.setRequestParametersFromProvider(options.requestParameters);
      });
    }, constructor.prototype.bindTrackers = function() {
      var goal = this;
      /**
       * @param {!Event} type
       * @return {?}
       */
      var ok = function(type) {
        return goal.processEvent(type);
      };
      this.styleSheetRuleTracker.onEvent(ok);
      this.recordingMutationsTracker.onEvent(ok);
      this.recordingBrowserEventsTracker.onEvent(ok);
      this.recordingPageEventsTracker.onEvent(ok);
      this.staticResourceUrlTracker.onEvent(ok);
      this.recordingPerformanceTimingsTracker.onEvent(ok);
    }, constructor.prototype.processEvent = function(name) {
      if (this.sessionRenewer.isSessionValid()) {
        this.recordingBatch.addEvent(name);
        if (this.recordingBatch.isFull()) {
          this.pushEvents();
        }
        this.eventEmitter.emit("recordingEvent", concat({}, name, {
          typeName : Event[name.type]
        }));
      }
    }, constructor.prototype.onStart = function() {
      this.recordingBatch.setRequestParametersFromProvider(this.requestParameters);
      this.recordingPerformanceTimingsTracker.start();
      this.styleSheetRuleTracker.start();
      this.recordingMutationsTracker.start();
      this.recordingBrowserEventsTracker.start();
      this.recordingPageEventsTracker.start();
      this.eventEmitter.emit("replayRecordingStarted");
    }, constructor.prototype.onStop = function() {
      this.styleSheetRuleTracker.stop();
      this.recordingMutationsTracker.stop();
      this.recordingBrowserEventsTracker.stop();
      this.recordingPageEventsTracker.stop();
    }, constructor.prototype.clearStates = function() {
      this.pushEvents();
      this.requestIndex.reset();
      this.recordingBatch.setRequestParametersFromProvider(this.requestParameters);
    }, constructor.prototype.pushEvents = function() {
      if (this.recordingBatch.eventsCount() > 0) {
        this.recordingRequest.send();
      }
    }, constructor.prototype.triggerConsentGranted = function() {
      this.recordingBatch.addEvent({
        date : clock.now(),
        type : Event.CONSENT_GRANTED
      });
    }, constructor.prototype.triggerConsentWithdrawn = function() {
      this.recordingBatch.addEvent({
        date : clock.now(),
        type : Event.CONSENT_WITHDRAWN
      });
    }, constructor;
  }(tagsize);
  var defineProperty = function() {
    /**
     * @param {?} pos
     * @param {!Object} obj
     * @return {?}
     */
    var fn = function(pos, obj) {
      return (fn = Object.setPrototypeOf || {
        __proto__ : []
      } instanceof Array && function(win, obj) {
        /** @type {!Object} */
        win.__proto__ = obj;
      } || function(el, obj) {
        var key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            el[key] = obj[key];
          }
        }
      })(pos, obj);
    };
    return function(child, data) {
      /**
       * @return {undefined}
       */
      function base() {
        this.constructor = child;
      }
      fn(child, data);
      child.prototype = null === data ? Object.create(data) : (base.prototype = data.prototype, new base);
    };
  }();
  var TooltipDialog = function(size) {
    /**
     * @param {!Object} key
     * @param {!Object} value
     * @param {(Object|number|string)} limit
     * @return {?}
     */
    function self(key, value, limit) {
      var vm = size.call(this) || this;
      return vm.recordingRecoveryRequest = key, vm.recordingBatch = value, vm.recoveryStorage = limit, vm.pageChangeHandler = function() {
        try {
          if (vm.recordingBatch.eventsCount() > 0) {
            vm.recoveryStorage.save({
              events : vm.recordingBatch.getEvents(),
              metadata : vm.recordingBatch.getRequestParameters()
            });
          }
        } catch (t) {
        }
      }, vm;
    }
    return defineProperty(self, size), self.prototype.onStart = function() {
      this.addPageChangeListener();
    }, self.prototype.onStop = function() {
      this.removePageChangeListener();
    }, self.prototype.recover = function() {
      this.sendPersistedRecordings();
    }, self.prototype.sendPersistedRecordings = function() {
      var _this4 = this.recoveryStorage.recover();
      if (null !== _this4) {
        var that = _this4;
        var id = that.metadata;
        var ep_uri = that.events;
        var client = new VodClient(ep_uri, id);
        this.recordingRecoveryRequest.setRequestPayloadProvider(client);
        this.recordingRecoveryRequest.setRequestParametersProviders(client);
        this.recordingRecoveryRequest.send();
      }
    }, self.prototype.addPageChangeListener = function() {
      window.addEventListener("pagehide", this.pageChangeHandler);
    }, self.prototype.removePageChangeListener = function() {
      window.removeEventListener("pagehide", this.pageChangeHandler);
    }, self;
  }(tagsize);
  var Circle = function() {
    /**
     * @param {?} to
     * @param {!Object} data
     * @param {string} $cont
     * @param {?} $slides
     * @param {?} callback
     * @return {undefined}
     */
    function fade(to, data, $cont, $slides, callback) {
      this.consentService = to;
      /** @type {!Object} */
      this.domSerializer = data;
      /** @type {string} */
      this.nodeIdentifier = $cont;
      this.sensitiveContent = $slides;
      this.anonymization = callback;
      this.resetAnonymization();
    }
    return fade.prototype.serializeDocument = function(value) {
      return [this.domSerializer.serialize(value, {
        forceChildrenSerialization : true,
        withAnonymization : this.useAnonymization
      })];
    }, fade.prototype.serializeMutationCharacterData = function(node) {
      var TAGS_ADDED = this;
      return this.nodeIdentifier.ifIdentified(node.target, function(i) {
        var name = node.target.data;
        if (name !== node.oldValue) {
          return [i, name = TAGS_ADDED.anonymizeTextIfNeeded(name)];
        }
      });
    }, fade.prototype.anonymizeTextIfNeeded = function(onStr) {
      return this.useAnonymization ? this.anonymization.anonymizeText(onStr) : onStr;
    }, fade.prototype.serializeAttachShadowEvent = function(element) {
      var node = element.target;
      var value = element.shadowRoot;
      if (this.nodeIdentifier.hasIdentifier(node) && !this.nodeIdentifier.hasIdentifier(value)) {
        return [this.nodeIdentifier.getId(node), this.domSerializer.serialize(value)];
      }
    }, fade.prototype.serializeMutationAttribute = function(item) {
      var e = this;
      var itemString = item.target;
      var key = item.attributeName;
      var element = item.attributeNamespace;
      return this.nodeIdentifier.ifIdentified(item.target, function(require) {
        if (!e.sensitiveContent.isSensitiveAttributeName(itemString, key)) {
          var i = item.target.getAttributeNS(element, key);
          if (i !== item.oldValue) {
            return i = e.anonymization.anonymizeAttributeIfNeeded(e.useAnonymization, key, i), [require, element, key, i];
          }
        }
      });
    }, fade.prototype.serializeMutationChildList = function(mutations) {
      var promise = this;
      return this.nodeIdentifier.ifIdentified(mutations.target, function(products) {
        if (!promise.sensitiveContent.isSensitiveElementNode(mutations.target)) {
          return {
            removedNodes : promise.serializeRemovedNodes(mutations),
            addedNodes : promise.serializeAddedNodes(mutations, products)
          };
        }
      });
    }, fade.prototype.serializeRemovedNodes = function(data) {
      /** @type {!Array} */
      var aPositions = [];
      /** @type {number} */
      var i = 0;
      for (; i < data.removedNodes.length; i = i + 1) {
        var iStart = this.nodeIdentifier.popId(data.removedNodes[i]);
        if (iStart) {
          aPositions.push([iStart]);
        }
      }
      return aPositions;
    }, fade.prototype.serializeAddedNodes = function(data, e) {
      /** @type {!Array} */
      var triggerStack = [];
      var model = data.nextSibling ? this.nodeIdentifier.ifIdentified(data.nextSibling, function(canCreateDiscussions) {
        return canCreateDiscussions;
      }) : null;
      /** @type {number} */
      var i = 0;
      for (; i < data.addedNodes.length; i = i + 1) {
        var value = data.addedNodes[i];
        if (!this.nodeIdentifier.hasIdentifier(value)) {
          var s = this.domSerializer.serialize(value, {
            withAnonymization : this.useAnonymization
          });
          triggerStack.push([e, model, s]);
        }
      }
      return triggerStack;
    }, fade.prototype.resetAnonymization = function() {
      /** @type {boolean} */
      this.useAnonymization = !this.consentService.isAllowedByConsent();
    }, fade;
  }();
  var Holder = function() {
    /**
     * @param {?} data
     * @param {string} marker
     * @param {!Object} feature
     * @param {!Function} seconds
     * @return {undefined}
     */
    function callback(data, marker, feature, seconds) {
      var $mmaModSurveyOffline = this;
      this.monkeyPatcher = data;
      /** @type {string} */
      this.nodeIdentifier = marker;
      /** @type {!Object} */
      this.staticResourceUrlTracker = feature;
      /** @type {!Function} */
      this.logger = seconds;
      if (this.canTrackRuleInsertions()) {
        this.insertRuleInterceptor = this.monkeyPatcher.createFunctionInterceptor(window.CSSStyleSheet.prototype, "insertRule", function(selectedSheets, canCreateDiscussions, name) {
          return $mmaModSurveyOffline.sendInsertion(selectedSheets, name);
        });
      }
      if (this.canTrackStyleDeclarationChanges()) {
        this.cssTextInterceptor = this.monkeyPatcher.createDescriptorInterceptor(window.CSSStyleDeclaration.prototype, "cssText", function(dep_rule, name) {
          return $mmaModSurveyOffline.setStyleDeclarationCssText(dep_rule, name);
        });
      }
    }
    return callback.prototype.onEvent = function(name) {
      /** @type {!Function} */
      this.onEventCallback = name;
    }, callback.prototype.start = function() {
      if (this.insertRuleInterceptor) {
        this.insertRuleInterceptor.activate();
      }
      if (this.cssTextInterceptor) {
        this.cssTextInterceptor.activate();
      }
    }, callback.prototype.stop = function() {
      if (this.insertRuleInterceptor) {
        this.insertRuleInterceptor.deactivate();
      }
      if (this.cssTextInterceptor) {
        this.cssTextInterceptor.deactivate();
      }
    }, callback.prototype.setStyleDeclarationCssText = function(rule, name) {
      var self = this;
      this.logger.tryToExecute("styleSheetRuleTracker.setStyleDeclarationCssText", function() {
        var sheet = self.getSyleSheet(rule);
        if (sheet && sheet.ownerNode) {
          self.nodeIdentifier.ifIdentified(sheet.ownerNode, function(quickReplyIndex) {
            var inverseToCslId = self.indexOfRule(sheet.cssRules, rule.parentRule);
            self.onEventCallback({
              date : clock.now(),
              type : Event.STYLESHEET_CSS_TEXT_UPDATE,
              args : [quickReplyIndex, inverseToCslId, name]
            });
            self.staticResourceUrlTracker.scanCssString(name);
          });
        }
      })();
    }, callback.prototype.getSyleSheet = function(rule) {
      var aRule = rule.parentRule;
      return aRule && aRule.parentStyleSheet;
    }, callback.prototype.indexOfRule = function(name, ast) {
      return Array.from(name).indexOf(ast);
    }, callback.prototype.canTrackRuleInsertions = function() {
      return window.CSSStyleSheet && window.CSSStyleSheet.prototype && "function" == typeof window.CSSStyleSheet.prototype.insertRule;
    }, callback.prototype.canTrackStyleDeclarationChanges = function() {
      return window.CSSStyleDeclaration && window.CSSStyleDeclaration.prototype && Object.getOwnPropertyDescriptor(window.CSSStyleDeclaration.prototype, "cssText");
    }, callback.prototype.sendInsertion = function(sheet, module) {
      var deferred = this;
      var url = module[0];
      var dependencies = module[1];
      this.logger.tryToExecute("styleSheetRuleTracker.sendInsertion", function() {
        deferred.nodeIdentifier.ifIdentified(sheet.ownerNode, function(mid) {
          deferred.onEventCallback({
            date : clock.now(),
            type : Event.STYLESHEET_RULE_INSERT,
            args : isArray(dependencies) ? [mid, url, dependencies] : [mid, url]
          });
          deferred.staticResourceUrlTracker.scanCssString(url);
        });
      })();
    }, callback;
  }();
  var transformsAfterLastStep = function() {
    /**
     * @return {undefined}
     */
    function Serializer() {
    }
    return Serializer.prototype.beforeSerialize = function(element, options) {
      return element;
    }, Serializer.prototype.beforeSerializeChildren = function(text, entities, options) {
      return entities;
    }, Serializer.prototype.beforeSerializeAttributes = function(t, xgh2, xgh3) {
      return xgh2;
    }, Serializer.prototype.serializeNode = function(node, data, options) {
      return data;
    }, Serializer.prototype.serializeElementNode = function(_, sink, min) {
      return sink;
    }, Serializer.prototype.serializeAttribute = function(snapshot, name, value, attr) {
      return value;
    }, Serializer.prototype.serializeTextNode = function(t, result, opt_key) {
      return result;
    }, Serializer.prototype.serializeCommentNode = function(hierarchy, instance, track) {
      return instance;
    }, Serializer.prototype.serializeDoctypeNode = function(hierarchy, instance, oldName) {
      return instance;
    }, Serializer.prototype.serializeDocumentNode = function(event, source, resources) {
      return source;
    }, Serializer.prototype.serializeShadowRootNode = function(comment, i, reads) {
      return i;
    }, Serializer;
  }();
  var coveredByRange = function() {
    /**
     * @param {?} pos
     * @param {!Object} obj
     * @return {?}
     */
    var fn = function(pos, obj) {
      return (fn = Object.setPrototypeOf || {
        __proto__ : []
      } instanceof Array && function(win, obj) {
        /** @type {!Object} */
        win.__proto__ = obj;
      } || function(el, obj) {
        var key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            el[key] = obj[key];
          }
        }
      })(pos, obj);
    };
    return function(child, data) {
      /**
       * @return {undefined}
       */
      function base() {
        this.constructor = child;
      }
      fn(child, data);
      child.prototype = null === data ? Object.create(data) : (base.prototype = data.prototype, new base);
    };
  }();
  var EventSource = function(end) {
    /**
     * @return {?}
     */
    function State() {
      var e = end.call(this) || this;
      return e.identifierAddedHandlers = [], e.identifierRemovedHandlers = [], e.currentCsId = 1, e;
    }
    return coveredByRange(State, end), State.prototype.beforeSerialize = function(element, options) {
      return options.forceChildrenSerialization && this.popId(element), element;
    }, State.prototype.beforeSerializeChildren = function(engine, config) {
      var EditRoute = this;
      return config.filter(function(itemModel) {
        return !EditRoute.hasIdentifier(itemModel);
      });
    }, State.prototype.serializeNode = function(node, options) {
      var i = this.currentCsId;
      return this.currentCsId += 1, node.__contentsquare_identifier = i, options.csId = i, this.notifySubscribers(this.identifierAddedHandlers, node), options;
    }, State.prototype.ifIdentified = function(str, testfn) {
      if (this.hasIdentifier(str)) {
        return testfn(this.getId(str));
      }
    }, State.prototype.getId = function(body) {
      return body.__contentsquare_identifier;
    }, State.prototype.onIdentifierAdded = function(t) {
      this.identifierAddedHandlers.push(t);
    }, State.prototype.onIdentifierRemoved = function(t) {
      this.identifierRemovedHandlers.push(t);
    }, State.prototype.popId = function(data) {
      var type = this.getId(data);
      delete data.__contentsquare_identifier;
      this.notifySubscribers(this.identifierRemovedHandlers, data);
      var d = data.firstChild;
      for (; null !== d; d = d.nextSibling) {
        this.popId(d);
      }
      var tree = data.shadowRoot;
      return tree && this.popId(tree), type;
    }, State.prototype.hasIdentifier = function(value) {
      return "__contentsquare_identifier" in value;
    }, State.prototype.notifySubscribers = function(newValue, event) {
      /** @type {number} */
      var i = 0;
      /** @type {!Object} */
      var testValue = newValue;
      for (; i < testValue.length; i++) {
        (0, testValue[i])(event);
      }
    }, State;
  }(transformsAfterLastStep);
  var loadExtraneous = function() {
    /**
     * @param {?} pos
     * @param {!Object} obj
     * @return {?}
     */
    var fn = function(pos, obj) {
      return (fn = Object.setPrototypeOf || {
        __proto__ : []
      } instanceof Array && function(win, obj) {
        /** @type {!Object} */
        win.__proto__ = obj;
      } || function(el, obj) {
        var key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            el[key] = obj[key];
          }
        }
      })(pos, obj);
    };
    return function(child, data) {
      /**
       * @return {undefined}
       */
      function base() {
        this.constructor = child;
      }
      fn(child, data);
      child.prototype = null === data ? Object.create(data) : (base.prototype = data.prototype, new base);
    };
  }();
  /** @type {!Array} */
  var args = ["value", "checked", "src", "data", "alt"];
  var Vector = function(log) {
    /**
     * @return {?}
     */
    function child() {
      return null !== log && log.apply(this, arguments) || this;
    }
    return loadExtraneous(child, log), child.prototype.beforeSerializeChildren = function(parentNode, node) {
      return this.isSensitiveElementNode(parentNode) ? [] : node;
    }, child.prototype.beforeSerializeAttributes = function(text, button) {
      var that = this;
      return this.isSensitiveElementNode(text) && button.push(this.createSensitiveElementDimensionsAttribute(text)), button.filter(function(elem) {
        return !that.isSensitiveAttribute(text, elem.name, elem.value);
      });
    }, child.prototype.isSensitiveElementNode = function(node) {
      return next(node) && (node.hasAttribute("data-cs-mask") || function(left) {
        return next(left) && "script" === left.localName;
      }(node));
    }, child.prototype.isSensitiveAttributeName = function(json, fn) {
      return this.isSensitiveElementNode(json) && -1 !== args.indexOf(fn) || this.isSensitiveInputValue(json, fn);
    }, child.prototype.isSensitiveAttribute = function(v, e, skipFrames) {
      return this.isSensitiveAttributeName(v, e) || this.isSensitiveImage(v, e, skipFrames);
    }, child.prototype.isSensitiveInputValue = function(value, string) {
      return error(value) && "value" === string && "button" !== value.getAttribute("type");
    }, child.prototype.isSensitiveImage = function(array, value, i) {
      return defined(array) && "src" === value && get(i, "data:");
    }, child.prototype.createSensitiveElementDimensionsAttribute = function(chars) {
      var cssChanges = chars.getBoundingClientRect();
      /** @type {!Attr} */
      var namedItem = document.createAttribute("style");
      return namedItem.value = "width: " + cssChanges.width + "px; height: " + cssChanges.height + "px;", namedItem;
    }, child;
  }(transformsAfterLastStep);
  var parseWriteArg = function() {
    /**
     * @param {?} pos
     * @param {!Object} obj
     * @return {?}
     */
    var fn = function(pos, obj) {
      return (fn = Object.setPrototypeOf || {
        __proto__ : []
      } instanceof Array && function(win, obj) {
        /** @type {!Object} */
        win.__proto__ = obj;
      } || function(el, obj) {
        var key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            el[key] = obj[key];
          }
        }
      })(pos, obj);
    };
    return function(child, data) {
      /**
       * @return {undefined}
       */
      function base() {
        this.constructor = child;
      }
      fn(child, data);
      child.prototype = null === data ? Object.create(data) : (base.prototype = data.prototype, new base);
    };
  }();
  /** @type {!Array<?>} */
  var filesPassive = ["id", "class", "style", "src", "srcset", "href", "rel", "type", "width", "height", "media", p].concat(["data-component-type", "aria-expanded"]);
  /** @type {!RegExp} */
  var OR_REG = /[^\s]/g;
  var Uint32Array = function(t) {
    /**
     * @param {?} index
     * @return {?}
     */
    function Serializer(index) {
      var REGEX = t.call(this) || this;
      return REGEX.pii = index, REGEX;
    }
    return parseWriteArg(Serializer, t), Serializer.prototype.beforeSerializeChildren = function(pos, e, noAlert) {
      return traverse(pos) && (noAlert.withAnonymization = false), e;
    }, Serializer.prototype.serializeNode = function(data, node, options) {
      return node.anonymized = options.withAnonymization, node;
    }, Serializer.prototype.serializeAttribute = function(node, value, key, type) {
      key.anonymized = type.withAnonymization;
      var total = this.anonymizeAttributeIfNeeded(type.withAnonymization, value.name, value.value);
      return key.value = this.piiAnonymizeAttributeIfNeeded(value.name, total), key;
    }, Serializer.prototype.serializeTextNode = function(options, node, i) {
      var oc = options.data;
      var uppercase_re = i.withAnonymization ? this.anonymizeText(oc) : oc;
      return node.data = this.pii.anonymize(uppercase_re), node;
    }, Serializer.prototype.anonymizeAttributeIfNeeded = function(n, v, i) {
      return n ? this.isWhitelistedAttribute(v) ? i : "" : i;
    }, Serializer.prototype.piiAnonymizeAttributeIfNeeded = function(element, text) {
      return this.isWhitelistedAttribute(element) ? text : this.pii.anonymize(text);
    }, Serializer.prototype.anonymizeText = function(str) {
      return str.replace(OR_REG, "a");
    }, Serializer.prototype.isWhitelistedAttribute = function(element) {
      return -1 !== filesPassive.indexOf(element);
    }, Serializer;
  }(transformsAfterLastStep);
  var ImageMagick = function() {
    /**
     * @param {string} selector
     * @param {!Function} expectedIds
     * @return {undefined}
     */
    function t(selector, expectedIds) {
      /** @type {string} */
      this.storageName = selector;
      /** @type {!Function} */
      this.logger = expectedIds;
    }
    return t.prototype.save = function(defaultItems) {
      localStorage.setItem(this.storageName, JSON.stringify(defaultItems));
    }, t.prototype.clear = function() {
      localStorage.removeItem(this.storageName);
    }, t.prototype.recover = function() {
      var value = localStorage.getItem(this.storageName);
      if (null === value) {
        return null;
      }
      /** @type {null} */
      var key = null;
      try {
        /** @type {*} */
        key = JSON.parse(value);
      } catch (e) {
        this.logger.logError("Invalid item in localStorage.\n         (key:" + this.storageName + "; value:" + value + ")");
      } finally {
        this.clear();
      }
      return key;
    }, t;
  }();
  /**
   * @return {?}
   */
  var update = function() {
    return (update = Object.assign || function(result) {
      var src;
      /** @type {number} */
      var i = 1;
      /** @type {number} */
      var argl = arguments.length;
      for (; i < argl; i++) {
        var prop;
        for (prop in src = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(src, prop)) {
            result[prop] = src[prop];
          }
        }
      }
      return result;
    }).apply(this, arguments);
  };
  var LogicGate = function() {
    /**
     * @return {undefined}
     */
    function Reduxible() {
      /** @type {!Array} */
      var argumentsArray = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        argumentsArray[i] = arguments[i];
      }
      /** @type {!Array} */
      this.requestParametersProviders = argumentsArray;
    }
    return Reduxible.prototype.getRequestParameters = function() {
      return this.requestParametersProviders.reduce(function(context, event) {
        return update({}, event.getRequestParameters(), context);
      }, {});
    }, Reduxible;
  }();
  var FalcorPubSubDataSource = function() {
    /**
     * @param {!Object} $element
     * @return {undefined}
     */
    function Taps($element) {
      /** @type {!Object} */
      this.asyncTaskFactory = $element;
      /** @type {boolean} */
      this.userActive = false;
      /** @type {null} */
      this.pendingInactivity = null;
    }
    return Taps.prototype.start = function() {
      /** @type {boolean} */
      this.userActive = true;
      this.createPendingInactivity();
    }, Taps.prototype.stop = function() {
      /** @type {boolean} */
      this.userActive = false;
      this.clearPendingInactivity();
    }, Taps.prototype.trackActivity = function() {
      if (!this.userActive) {
        this.onActivityResumedCallback();
        /** @type {boolean} */
        this.userActive = true;
      }
      this.clearPendingInactivity();
      this.createPendingInactivity();
    }, Taps.prototype.createPendingInactivity = function() {
      var player = this;
      this.pendingInactivity = this.asyncTaskFactory.create("recorded user inactive", function() {
        /** @type {boolean} */
        player.userActive = false;
        player.clearPendingInactivity();
        player.onActivityStoppedCallback();
      }, 3E4);
    }, Taps.prototype.clearPendingInactivity = function() {
      if (null !== this.pendingInactivity) {
        this.pendingInactivity.cancel();
        /** @type {null} */
        this.pendingInactivity = null;
      }
    }, Taps.prototype.isUserActive = function() {
      return this.userActive;
    }, Taps.prototype.onActivityStopped = function(activity) {
      /** @type {!Function} */
      this.onActivityStoppedCallback = activity;
    }, Taps.prototype.onActivityResumed = function(activity) {
      /** @type {!Function} */
      this.onActivityResumedCallback = activity;
    }, Taps;
  }();
  var Route = function() {
    /**
     * @param {!Function} logger
     * @param {string} state
     * @param {!Object} task
     * @param {number} timeout
     * @return {undefined}
     */
    function run(logger, state, task, timeout) {
      var valamisApp = this;
      /** @type {!Function} */
      this.logger = logger;
      /** @type {string} */
      this.taskName = state;
      /** @type {!Object} */
      this.task = task;
      /** @type {number} */
      this.timeout = timeout;
      /** @type {number} */
      this.timeoutId = setTimeout(function() {
        valamisApp.execute();
      }, this.timeout);
    }
    return run.prototype.execute = function() {
      var actualLog = this;
      this.logger.tryToExecute(this.taskName, function() {
        actualLog.task();
      })();
    }, run.prototype.cancel = function() {
      clearTimeout(this.timeoutId);
    }, run;
  }();
  var SocketIO = function() {
    /**
     * @param {!Console} gotoEnd
     * @return {undefined}
     */
    function t(gotoEnd) {
      /** @type {!Console} */
      this.logger = gotoEnd;
    }
    return t.prototype.create = function(route, callback, options) {
      return new Route(this.logger, route, callback, options);
    }, t;
  }();
  !function(self) {
    /**
     * @return {?}
     */
    function request() {
      /** @type {!Array} */
      var wrapper = [s()];
      return document.documentElement && wrapper.push(document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight), document.body && wrapper.push(document.body.scrollHeight, document.body.offsetHeight), Math.max.apply(Math, wrapper);
    }
    /**
     * @return {?}
     */
    function getWidth() {
      return document.documentElement.scrollWidth;
    }
    /**
     * @return {?}
     */
    function s() {
      return window.innerHeight;
    }
    /**
     * @return {?}
     */
    function width() {
      return window.innerWidth;
    }
    /**
     * @return {?}
     */
    function get() {
      return screen.width;
    }
    /**
     * @return {?}
     */
    function height() {
      return screen.height;
    }
    /** @type {function(): ?} */
    self.documentHeight = request;
    /** @type {function(): ?} */
    self.documentWidth = getWidth;
    /** @type {function(): ?} */
    self.windowHeight = s;
    /** @type {function(): ?} */
    self.windowWidth = width;
    /** @type {function(): ?} */
    self.screenWidth = get;
    /** @type {function(): ?} */
    self.screenHeight = height;
    /**
     * @return {?}
     */
    self.windowOffsetX = function() {
      return window.pageXOffset;
    };
    /**
     * @return {?}
     */
    self.windowOffsetY = function() {
      return window.pageYOffset;
    };
    /**
     * @return {?}
     */
    self.getRequestParameters = function() {
      return {
        dw : "" + getWidth(),
        dh : "" + request(),
        ww : "" + width(),
        wh : "" + s(),
        sw : "" + get(),
        sh : "" + height()
      };
    };
  }(settings || (settings = {}));
  var TouchAxis = function() {
    /**
     * @param {!Function} logger
     * @param {string} file
     * @param {?} projCode
     * @return {undefined}
     */
    function initialize(logger, file, projCode) {
      var that = this;
      /** @type {!Function} */
      this.logger = logger;
      /** @type {string} */
      this.location = file;
      this.pii = projCode;
      /** @type {!Array} */
      this.eventHandlers = [{
        boundElement : window,
        type : "resize",
        listener : function() {
          return that.resizeListener();
        }
      }, {
        boundElement : window,
        type : "hashchange",
        listener : function() {
          return that.hashChangeListener();
        }
      }, {
        boundElement : window,
        type : "mousemove",
        listener : function(f) {
          return that.mouseMoveListener(f);
        }
      }, {
        boundElement : document,
        type : "visibilitychange",
        listener : function() {
          return that.visibilityChangeListener();
        }
      }];
    }
    return initialize.prototype.onEvent = function(callback) {
      /**
       * @param {!Object} event
       * @return {undefined}
       */
      this.onEventCallback = function(event) {
        event.date = clock.now();
        callback(event);
      };
    }, initialize.prototype.start = function() {
      this.bindHandlers();
      this.triggerInitialEvents();
    }, initialize.prototype.stop = function() {
      this.unbindHandlers();
    }, initialize.prototype.bindHandlers = function() {
      this.eventHandlers.forEach(function(o) {
        return subscribe(o);
      });
    }, initialize.prototype.unbindHandlers = function() {
      this.eventHandlers.forEach(function(t) {
        return done(t);
      });
    }, initialize.prototype.triggerInitialEvents = function() {
      this.resizeListener();
      this.hashChangeListener();
    }, initialize.prototype.resizeListener = function() {
      var whereToPush = this;
      this.logger.tryToExecute("resize", function() {
        whereToPush.onEventCallback({
          type : Event.RESIZE,
          args : [settings.windowWidth(), settings.windowHeight()]
        });
      })();
    }, initialize.prototype.hashChangeListener = function() {
      var child = this;
      this.logger.tryToExecute("hashChange", function() {
        child.onEventCallback({
          type : Event.HASH_CHANGE,
          args : [child.pii.anonymize(child.location.href)]
        });
      })();
    }, initialize.prototype.visibilityChangeListener = function() {
      var whereToPush = this;
      this.logger.tryToExecute("visibilityChange", function() {
        whereToPush.onEventCallback({
          type : Event.VISIBILITY_CHANGE,
          args : [document.visibilityState]
        });
      })();
    }, initialize.prototype.mouseMoveListener = function(e) {
      var whereToPush = this;
      this.logger.tryToExecute("mouseMove", function() {
        whereToPush.onEventCallback({
          type : Event.MOUSE_MOVE,
          args : [e.clientX, e.clientY]
        });
      })();
    }, initialize;
  }();
  var isTileBoundary = function() {
    /**
     * @param {?} pos
     * @param {!Object} obj
     * @return {?}
     */
    var fn = function(pos, obj) {
      return (fn = Object.setPrototypeOf || {
        __proto__ : []
      } instanceof Array && function(win, obj) {
        /** @type {!Object} */
        win.__proto__ = obj;
      } || function(el, obj) {
        var key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            el[key] = obj[key];
          }
        }
      })(pos, obj);
    };
    return function(child, data) {
      /**
       * @return {undefined}
       */
      function base() {
        this.constructor = child;
      }
      fn(child, data);
      child.prototype = null === data ? Object.create(data) : (base.prototype = data.prototype, new base);
    };
  }();
  var RegExp = function(size) {
    /**
     * @param {!Object} e
     * @param {!Object} n
     * @param {!Object} r
     * @param {!Object} v
     * @return {?}
     */
    function p(e, n, r, v) {
      var ret = size.call(this) || this;
      return ret.recordingPageEventsTracker = e, ret.recordingMutationsTracker = n, ret.recordingActivityTracker = r, ret.recordingRequest = v, ret.recordingRequestDuringInactivityCount = 0, ret.isMutationTrackerStopped = false, ret;
    }
    return isTileBoundary(p, size), p.prototype.init = function() {
      var BeanstalkWorker = this;
      this.recordingPageEventsTracker.onEvent(function() {
        BeanstalkWorker.recordingActivityTracker.trackActivity();
        /** @type {number} */
        BeanstalkWorker.recordingRequestDuringInactivityCount = 0;
      });
      this.recordingRequest.after(function() {
        BeanstalkWorker.recordingRequestDuringInactivityCount += 1;
      });
      this.recordingActivityTracker.onActivityStopped(function() {
        if (BeanstalkWorker.recordingRequestDuringInactivityCount >= 2) {
          BeanstalkWorker.recordingMutationsTracker.stop();
          /** @type {boolean} */
          BeanstalkWorker.isMutationTrackerStopped = true;
        }
      });
      this.recordingActivityTracker.onActivityResumed(function() {
        if (BeanstalkWorker.isMutationTrackerStopped) {
          BeanstalkWorker.recordingMutationsTracker.start();
          /** @type {boolean} */
          BeanstalkWorker.isMutationTrackerStopped = false;
        }
      });
    }, p.prototype.onStart = function() {
      this.recordingActivityTracker.start();
    }, p.prototype.onStop = function() {
      this.recordingActivityTracker.stop();
    }, p;
  }(tagsize);
  var pkg = clone(3);
  var types;
  var _inherits = function() {
    /**
     * @param {?} pos
     * @param {!Object} obj
     * @return {?}
     */
    var fn = function(pos, obj) {
      return (fn = Object.setPrototypeOf || {
        __proto__ : []
      } instanceof Array && function(win, obj) {
        /** @type {!Object} */
        win.__proto__ = obj;
      } || function(el, obj) {
        var key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            el[key] = obj[key];
          }
        }
      })(pos, obj);
    };
    return function(child, data) {
      /**
       * @return {undefined}
       */
      function base() {
        this.constructor = child;
      }
      fn(child, data);
      child.prototype = null === data ? Object.create(data) : (base.prototype = data.prototype, new base);
    };
  }();
  var Module = function(t) {
    /**
     * @return {?}
     */
    function Parser() {
      var $this = null !== t && t.apply(this, arguments) || this;
      return $this.toAbsoluteUrlHelperAnchor = document.createElement("a"), $this;
    }
    return _inherits(Parser, t), Parser.prototype.onEvent = function(name) {
      /** @type {!Function} */
      this.onEventCallback = name;
    }, Parser.prototype.serializeElementNode = function(key, value, placeholderTxt) {
      return this.scanElement(key), value;
    }, Parser.prototype.beforeSerializeChildren = function(key, value, parentOptions) {
      return this.scanStyleElement(key, value), value;
    }, Parser.prototype.scanElement = function(element) {
      this.scanElementAttributes(element);
    }, Parser.prototype.scanAttribute = function($tab, e) {
      this.scanElementAttributes($tab, e);
    }, Parser.prototype.scanText = function(node) {
      if (appendChild(node) && node.parentNode && traverse(node.parentNode)) {
        this.scanCssString(node.data);
      }
    }, Parser.prototype.scanStyleElement = function(id, arr) {
      if (traverse(id)) {
        /** @type {number} */
        var i = 0;
        /** @type {!Object} */
        var widgets = arr;
        for (; i < widgets.length; i++) {
          var child = widgets[i];
          if (appendChild(child)) {
            this.scanCssString(child.data);
          }
        }
      }
    }, Parser.prototype.scanElementAttributes = function(t, o) {
      this.scanCssLink(t, o);
      this.scanImage(t, o);
      this.scanStyleAttribute(t, o);
    }, Parser.prototype.scanCssLink = function(target, href) {
      if (!(!run(target) || href && "href" !== href || !target.href)) {
        this.onStaticResourceUrl(target.href);
      }
    }, Parser.prototype.scanImage = function(w, s) {
      if (defined(w)) {
        if (!(s && "src" !== s || !w.src || this.isDataUrl(w.src) || null === w.getAttribute("src") || this.isHashStartUrl(w.getAttribute("src")))) {
          this.onStaticResourceUrl(w.src);
        }
        if (!(s && "srcset" !== s || !w.srcset)) {
          this.scanSrcset(w.srcset);
        }
      }
    }, Parser.prototype.scanStyleAttribute = function(cell, label) {
      if (!(label && "style" !== label || !cell.hasAttribute("style"))) {
        this.scanCssString(cell.getAttribute("style"));
      }
    }, Parser.prototype.isHashStartUrl = function(b) {
      return get(b, "#");
    }, Parser.prototype.isDataUrl = function(url) {
      return get(url, "data:");
    }, Parser.prototype.scanCssString = function(module) {
      this.processRawUrls(Object(pkg.extractFrom)(module));
    }, Parser.prototype.scanSrcset = function(cipherContactsHex) {
      this.processRawUrls(function run(str) {
        var UTC_FEB_29_1972 = str.trim();
        if ("" === str) {
          return [];
        }
        var mat22 = function(t) {
          return t.split(/\s(.+)/);
        }(UTC_FEB_29_1972);
        var b = mat22[0];
        var d = mat22[1];
        return d ? (toArray(b, ",") || (d = function(name1) {
          return name1.split(/,(.+)/)[1] || "";
        }(d)), [forEach(b)].concat(run(d))) : [forEach(b)];
      }(cipherContactsHex));
    }, Parser.prototype.processRawUrls = function(swimlanes) {
      var utils = this;
      return swimlanes.filter(function(url) {
        return !utils.isDataUrl(url);
      }).filter(function(t) {
        return !utils.isHashStartUrl(t);
      }).map(function(url) {
        return utils.toAbsoluteUrl(url);
      }).forEach(function(element) {
        return utils.onStaticResourceUrl(element);
      });
    }, Parser.prototype.toAbsoluteUrl = function(relativeUrl) {
      return this.toAbsoluteUrlHelperAnchor.href = relativeUrl, this.toAbsoluteUrlHelperAnchor.href;
    }, Parser.prototype.onStaticResourceUrl = function(item) {
      this.onEventCallback({
        date : clock.now(),
        type : Event.STATIC_RESOURCE_URL,
        args : [item]
      });
    }, Parser;
  }(transformsAfterLastStep);
  !function(types) {
    /** @type {string} */
    types.REQUEST_START = "requestStart";
    /** @type {string} */
    types.DOM_INTERACTIVE = "domInteractive";
  }(types || (types = {}));
  var root;
  var Platform = function() {
    /**
     * @param {!Window} module
     * @return {undefined}
     */
    function Test(module) {
      this.windowPerformance = module.performance;
    }
    return Test.prototype.onEvent = function(name) {
      /** @type {!Function} */
      this.onEventCallback = name;
    }, Test.prototype.start = function() {
      if (this.areTimingsAvailable()) {
        this.recordPerformanceTimings();
      }
    }, Test.prototype.recordPerformanceTimings = function() {
      var argstring = this.getPerformanceTimings();
      this.onEventCallback({
        args : argstring,
        date : clock.now(),
        type : Event.PERFORMANCE_TIMINGS
      });
    }, Test.prototype.areTimingsAvailable = function() {
      return !(!this.windowPerformance || !this.windowPerformance.timing);
    }, Test.prototype.getPerformanceTimings = function() {
      return [{
        performanceTiming : types.REQUEST_START,
        timestamp : this.windowPerformance.timing.requestStart
      }, {
        performanceTiming : types.DOM_INTERACTIVE,
        timestamp : this.windowPerformance.timing.domInteractive
      }];
    }, Test;
  }();
  var updateSiteUsage = function() {
    /**
     * @param {?} pos
     * @param {!Object} obj
     * @return {?}
     */
    var fn = function(pos, obj) {
      return (fn = Object.setPrototypeOf || {
        __proto__ : []
      } instanceof Array && function(win, obj) {
        /** @type {!Object} */
        win.__proto__ = obj;
      } || function(el, obj) {
        var key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            el[key] = obj[key];
          }
        }
      })(pos, obj);
    };
    return function(child, data) {
      /**
       * @return {undefined}
       */
      function base() {
        this.constructor = child;
      }
      fn(child, data);
      child.prototype = null === data ? Object.create(data) : (base.prototype = data.prototype, new base);
    };
  }();
  var PageModule = function(size) {
    /**
     * @param {?} name
     * @param {string} version
     * @param {!Function} options
     * @return {?}
     */
    function Tracker(name, version, options) {
      var self = size.call(this) || this;
      return self.monkeyPatcher = name, self.nodeIdentifier = version, self.logger = options, self;
    }
    return updateSiteUsage(Tracker, size), Tracker.prototype.init = function() {
      this.initInterceptors();
      this.initSubscribers();
      this.initMutationObserver();
    }, Tracker.prototype.initMutationObserver = function() {
      var connect = this;
      /** @type {!MutationObserver} */
      this.observer = new MutationObserver(function(e) {
        connect.logger.tryToExecute("mutations", function() {
          connect.handleMutations(e);
        })();
      });
    }, Tracker.prototype.initInterceptors = function() {
      var recentList = this;
      if (this.supportAttachShadow()) {
        this.attachShadowInterceptor = this.monkeyPatcher.createFunctionInterceptor(Element.prototype, "attachShadow", function(e, f) {
          return recentList.handleAttachShadow(e, f);
        });
      }
      if (this.supportCreateShadowRoot()) {
        this.createShadowRootInterceptor = this.monkeyPatcher.createFunctionInterceptor(Element.prototype, "createShadowRoot", function(e, f) {
          return recentList.handleAttachShadow(e, f);
        });
      }
    }, Tracker.prototype.initSubscribers = function() {
      var QuickBase = this;
      this.nodeIdentifier.onIdentifierAdded(function(val) {
        if (func(val)) {
          QuickBase.observe(val);
        }
      });
    }, Tracker.prototype.onChildListMutation = function(canCreateDiscussions) {
      /** @type {!Function} */
      this.childListMutationCallback = canCreateDiscussions;
    }, Tracker.prototype.onCharacterDataMutation = function(canCreateDiscussions) {
      /** @type {!Function} */
      this.characterDataMutationCallback = canCreateDiscussions;
    }, Tracker.prototype.onAttributesMutation = function(canCreateDiscussions) {
      /** @type {!Function} */
      this.attributesMutationCallback = canCreateDiscussions;
    }, Tracker.prototype.onAttachShadowMutation = function(canCreateDiscussions) {
      /** @type {!Function} */
      this.attachShadowMutationCallback = canCreateDiscussions;
    }, Tracker.prototype.observe = function(target) {
      if (!this.isStarted) {
        throw new Error("MutationObserverService not started");
      }
      this.observer.observe(target, {
        subtree : true,
        attributes : true,
        childList : true,
        characterData : true,
        attributeOldValue : true,
        characterDataOldValue : true
      });
    }, Tracker.prototype.onStart = function() {
      if (this.attachShadowInterceptor) {
        this.attachShadowInterceptor.activate();
      }
      if (this.createShadowRootInterceptor) {
        this.createShadowRootInterceptor.activate();
      }
    }, Tracker.prototype.onStop = function() {
      if (this.attachShadowInterceptor) {
        this.attachShadowInterceptor.deactivate();
      }
      if (this.createShadowRootInterceptor) {
        this.createShadowRootInterceptor.deactivate();
      }
      this.observer.disconnect();
    }, Tracker.prototype.supportAttachShadow = function() {
      return window.Element && window.Element.prototype && "function" == typeof window.Element.prototype.attachShadow;
    }, Tracker.prototype.supportCreateShadowRoot = function() {
      return window.Element && window.Element.prototype && "function" == typeof window.Element.prototype.createShadowRoot;
    }, Tracker.prototype.handleMutations = function(endpoints) {
      var content = clock.now();
      /** @type {number} */
      var i = 0;
      for (; i < endpoints.length; i = i + 1) {
        var e = endpoints[i];
        switch(e.date = content, e.type) {
          case "attributes":
            this.attributesMutationCallback(e);
            break;
          case "characterData":
            this.characterDataMutationCallback(e);
            break;
          case "childList":
            this.childListMutationCallback(e);
            break;
          default:
            throw new Error("mutation type is not supported");
        }
      }
    }, Tracker.prototype.handleAttachShadow = function(instance, i) {
      this.attachShadowMutationCallback({
        shadowRoot : i,
        date : clock.now(),
        target : instance
      });
    }, Tracker;
  }(tagsize);
  /**
   * @return {?}
   */
  var create = function() {
    return (create = Object.assign || function(s) {
      var props;
      /** @type {number} */
      var i = 1;
      /** @type {number} */
      var argl = arguments.length;
      for (; i < argl; i++) {
        var prop;
        for (prop in props = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(props, prop)) {
            s[prop] = props[prop];
          }
        }
      }
      return s;
    }).apply(this, arguments);
  };
  !function(wd) {
    /** @type {string} */
    wd[wd.WebElement = 0] = "WebElement";
    /** @type {string} */
    wd[wd.MobileView = 1] = "MobileView";
    /** @type {string} */
    wd[wd.WebViewContainer = 2] = "WebViewContainer";
  }(root || (root = {}));
  var EventType;
  var TiltRecognizer;
  var EVENT;
  var valueProgess = function() {
    /**
     * @param {!Array} object
     * @return {undefined}
     */
    function Serializer(object) {
      /** @type {!Array} */
      this.processors = object;
    }
    return Serializer.prototype.serialize = function(element, styles) {
      if (void 0 === styles) {
        styles = {};
      }
      var obj = create({}, styles);
      var type = element.nodeType;
      var data = this.processors.reduce(function(element_settings, ajax) {
        return ajax.beforeSerialize(element_settings, obj);
      }, element);
      switch(type) {
        case Node.ELEMENT_NODE:
          return this.serializeElementNode(data, obj);
        case Node.TEXT_NODE:
          return this.serializeTextNode(data, obj);
        case Node.COMMENT_NODE:
          return this.serializeCommentNode(data, obj);
        case Node.DOCUMENT_TYPE_NODE:
          return this.serializeDoctypeNode(data, obj);
        case Node.DOCUMENT_NODE:
          return this.serializeDocumentNode(data, obj);
        case Node.DOCUMENT_FRAGMENT_NODE:
          return this.serializeDocumentFragmentNode(data, obj);
        default:
          throw new Error("serialization is not supported (nodeType: " + type + ")");
      }
    }, Serializer.prototype.serializeElementNode = function(node, val) {
      var data;
      var el = this.processors.reduce(function(options, Raw) {
        var key = Raw.serializeNode(node, options, val);
        return Raw.serializeElementNode(node, key, val);
      }, {
        attributes : []
      });
      (data = el.attributes).push.apply(data, this.serializeAttributes(node, val));
      var content = node.shadowRoot;
      return content && (el.shadowRoot = this.serializeShadowRootNode(content, val)), el.children = this.serializeChildren(node, val), el;
    }, Serializer.prototype.serializeAttributes = function(result, value) {
      var tthis = this;
      var flags = _(result.attributes);
      return this.processors.reduce(function(i, assert) {
        return assert.beforeSerializeAttributes(result, i, value);
      }, flags).map(function(key) {
        return tthis.serializeAttribute(result, key, value);
      });
    }, Serializer.prototype.serializeAttribute = function(node, key, type) {
      return this.processors.reduce(function(value, exports) {
        return exports.serializeAttribute(node, key, value, type);
      }, {});
    }, Serializer.prototype.serializeChildren = function(node, options) {
      var dom = this;
      var flags = _(node.childNodes);
      return this.processors.reduce(function(name, _self) {
        return _self.beforeSerializeChildren(node, name, options);
      }, flags).map(function(element3) {
        return dom.serialize(element3, options);
      });
    }, Serializer.prototype.serializeTextNode = function(result, name) {
      return this.processors.reduce(function(options, _this) {
        var t = _this.serializeNode(result, options, name);
        return _this.serializeTextNode(result, t, name);
      }, {});
    }, Serializer.prototype.serializeCommentNode = function(node, id) {
      return this.processors.reduce(function(options, _this) {
        var items = _this.serializeNode(node, options, id);
        return _this.serializeCommentNode(node, items, id);
      }, {});
    }, Serializer.prototype.serializeDoctypeNode = function(node, data) {
      return this.processors.reduce(function(options, _this) {
        var value = _this.serializeNode(node, options, data);
        return _this.serializeDoctypeNode(node, value, data);
      }, {});
    }, Serializer.prototype.serializeDocumentNode = function(node, file) {
      var i = this.processors.reduce(function(options, _this) {
        var filePath = _this.serializeNode(node, options, file);
        return _this.serializeDocumentNode(node, filePath, file);
      }, {});
      return i.children = this.serializeChildren(node, file), i;
    }, Serializer.prototype.serializeShadowRootNode = function(node, i) {
      var instance = this.processors.reduce(function(options, _this) {
        var f = _this.serializeNode(node, options, i);
        return _this.serializeShadowRootNode(node, f, i);
      }, {});
      return instance.children = this.serializeChildren(node, i), instance;
    }, Serializer.prototype.serializeDocumentFragmentNode = function(content, f) {
      if (content.mode) {
        return this.serializeShadowRootNode(content, f);
      }
      throw new Error("Not implemented yet.");
    }, Serializer;
  }();
  var print = (clone(1), function() {
    /**
     * @param {?} pos
     * @param {!Object} obj
     * @return {?}
     */
    var fn = function(pos, obj) {
      return (fn = Object.setPrototypeOf || {
        __proto__ : []
      } instanceof Array && function(win, obj) {
        /** @type {!Object} */
        win.__proto__ = obj;
      } || function(el, obj) {
        var key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            el[key] = obj[key];
          }
        }
      })(pos, obj);
    };
    return function(child, data) {
      /**
       * @return {undefined}
       */
      function base() {
        this.constructor = child;
      }
      fn(child, data);
      child.prototype = null === data ? Object.create(data) : (base.prototype = data.prototype, new base);
    };
  }());
  var Fet = function(t) {
    /**
     * @return {?}
     */
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }
    return print(e, t), e.prototype.beforeSerializeChildren = function(s, index) {
      if (traverse(s)) {
        var i = this.cssRules(s);
        if (this.isEmptyStyleElementWithRules(s, i)) {
          index.push(this.createTextNodeFromRules(i));
        }
      }
      return index;
    }, e.prototype.cssRules = function(styleElement) {
      try {
        var styleSheet = styleElement.sheet;
        if (!styleSheet) {
          return;
        }
        return styleSheet.cssRules || styleSheet.rules;
      } catch (allBox) {
        if ("SecurityError" !== allBox.name && "InvalidAccessError" !== allBox.name) {
          throw allBox;
        }
        return;
      }
    }, e.prototype.isEmptyStyleElementWithRules = function(text, constructor) {
      var val = text.textContent || "";
      return /^\s*$/.test(val) && void 0 !== constructor && 0 !== constructor.length;
    }, e.prototype.createTextNodeFromRules = function(t) {
      var e = _(t).map(function(tagData) {
        return tagData.cssText;
      }).join("");
      return document.createTextNode(e);
    }, e.prototype.serializeNode = function(node, options) {
      return options.nodeType = node.nodeType, options.format = root.WebElement, options;
    }, e.prototype.serializeElementNode = function(parent, element) {
      return element.localName = parent.localName, element.namespaceURI = parent.namespaceURI, element;
    }, e.prototype.serializeAttribute = function(attr, data, val) {
      return val.name = data.name, val.value = data.value, val.namespaceURI = null !== data.namespaceURI ? data.namespaceURI : "", val;
    }, e.prototype.serializeTextNode = function(t, r) {
      return r.data = t.data, r;
    }, e.prototype.serializeCommentNode = function(node, a) {
      return a.data = node.data, a;
    }, e.prototype.serializeDoctypeNode = function(node, data) {
      return data.name = node.name, data.publicId = node.publicId, data.systemId = node.systemId, data;
    }, e.prototype.serializeDocumentNode = function(t, child) {
      return child.baseURI = e.getBaseURI(t), child;
    }, e.prototype.serializeShadowRootNode = function(data, obj) {
      return obj.mode = data.mode, obj;
    }, e.getBaseURI = function(doc) {
      var path = doc.baseURI;
      if (null === path || void 0 === path) {
        var bases = doc.getElementsByTagName("base");
        path = 0 !== bases.length ? bases[0].href : doc.URL;
      }
      return path;
    }, e;
  }(transformsAfterLastStep);
  var code_tree = (function() {
    /**
     * @param {!Array} name
     * @return {undefined}
     */
    function File(name) {
      /** @type {!Array} */
      this.processors = name;
    }
    /**
     * @param {string} text
     * @return {?}
     */
    File.prototype.unserialize = function(text) {
      if (void 0 !== text.format && text.format !== root.WebElement) {
        throw new Error("unserialization is not supported (format: " + text.format + ")");
      }
      var type = text.nodeType;
      switch(type) {
        case Node.ELEMENT_NODE:
          return this.unserializeElementNode(text);
        case Node.TEXT_NODE:
          return this.unserializeTextNode(text);
        case Node.COMMENT_NODE:
          return this.unserializeCommentNode(text);
        case Node.DOCUMENT_TYPE_NODE:
          return this.unserializeDoctypeNode(text);
        case Node.DOCUMENT_NODE:
          return this.unserializeDocumentNode(text);
        default:
          throw new Error("unserialization is not supported (nodeType: " + type + ")");
      }
    };
    /**
     * @param {?} name
     * @param {!Object} document
     * @return {?}
     */
    File.prototype.unserializeShadowRoot = function(name, document) {
      var n = this.processors.reduce(function(width, $) {
        var rules = $.unserializeShadowRoot(name, document, width);
        return $.unserializeNode(document, rules);
      }, null);
      return this.unserializeChildren(n, document.children), n;
    };
    /**
     * @param {!HTMLElement} node
     * @return {?}
     */
    File.prototype.unserializeElementNode = function(node) {
      var name = this.processors.reduce(function(element, mNavUtils) {
        var item = mNavUtils.unserializeElementNode(node, element);
        return mNavUtils.unserializeNode(node, item);
      }, null);
      return this.unserializeAttributes(name, node.attributes), this.unserializeChildren(name, node.children), node.shadowRoot && this.unserializeShadowRoot(name, node.shadowRoot), name;
    };
    /**
     * @param {!Object} el
     * @param {?} t
     * @return {undefined}
     */
    File.prototype.unserializeChildren = function(el, t) {
      var hprose = this;
      _(t).forEach(function(value) {
        return el.appendChild(hprose.unserialize(value));
      });
    };
    /**
     * @param {!Object} t
     * @param {?} i
     * @return {undefined}
     */
    File.prototype.unserializeAttributes = function(t, i) {
      var Jmol = this;
      _(i).forEach(function(value) {
        try {
          Jmol.unserializeAttribute(t, value);
        } catch (t) {
        }
      });
    };
    /**
     * @param {!Object} stream
     * @param {!Object} t
     * @return {undefined}
     */
    File.prototype.unserializeAttribute = function(stream, t) {
      this.processors.reduce(function(n, i) {
        return i.unserializeAttribute(t, n);
      }, stream);
    };
    /**
     * @param {!Object} t
     * @return {?}
     */
    File.prototype.unserializeTextNode = function(t) {
      return this.processors.reduce(function(name, d) {
        var tm = d.unserializeTextNode(t, name);
        return d.unserializeNode(t, tm);
      }, null);
    };
    /**
     * @param {!Object} t
     * @return {?}
     */
    File.prototype.unserializeCommentNode = function(t) {
      return this.processors.reduce(function(name, d) {
        var tm = d.unserializeCommentNode(t, name);
        return d.unserializeNode(t, tm);
      }, null);
    };
    /**
     * @param {!HTMLElement} s
     * @return {?}
     */
    File.prototype.unserializeDoctypeNode = function(s) {
      return this.processors.reduce(function(name, util) {
        var src = util.unserializeDoctypeNode(s, name);
        return util.unserializeNode(s, src);
      }, null);
    };
    /**
     * @param {!Object} data
     * @return {?}
     */
    File.prototype.unserializeDocumentNode = function(data) {
      var _this = this;
      var docFrag = this.processors.reduce(function(n, i) {
        var e = i.unserializeDocumentNode(data, n);
        return i.unserializeNode(data, e);
      }, null);
      return _(data.children).forEach(function(result) {
        return docFrag.appendChild(_this.unserialize(result));
      }), docFrag;
    };
  }(), clone(2), function() {
    /**
     * @return {undefined}
     */
    function HTMLSectionBuilder() {
    }
    return HTMLSectionBuilder.prototype.unserializeShadowRoot = function(controlName, value, prototype) {
      return prototype;
    }, HTMLSectionBuilder.prototype.unserializeNode = function(template, model) {
      return model;
    }, HTMLSectionBuilder.prototype.unserializeElementNode = function(topnode, suppressDisabledCheck) {
      return suppressDisabledCheck;
    }, HTMLSectionBuilder.prototype.unserializeAttribute = function(asyncFunction, thisArg) {
      return thisArg;
    }, HTMLSectionBuilder.prototype.unserializeTextNode = function(source, o) {
      return o;
    }, HTMLSectionBuilder.prototype.unserializeCommentNode = function(source, o) {
      return o;
    }, HTMLSectionBuilder.prototype.unserializeDoctypeNode = function(source, done) {
      return done;
    }, HTMLSectionBuilder.prototype.unserializeDocumentNode = function(t, i) {
      return i;
    }, HTMLSectionBuilder;
  }());
  var ChildNodes = function() {
    /**
     * @return {undefined}
     */
    function elem() {
      /** @type {!DOMParser} */
      this.domParser = new DOMParser;
    }
    return elem.prototype.createElement = function(name) {
      var bluePrint = this.htmlSanitizer(name);
      return this.parseHtmlElement("<" + bluePrint + " />");
    }, elem.prototype.createAttribute = function(value, type) {
      var name = this.htmlSanitizer(value);
      var script = this.parseHtmlElement("<div " + name + '=""></div>');
      var val = script.getAttributeNode(name);
      return script.removeAttributeNode(val), val.value = type, val;
    }, elem.prototype.parseHtmlElement = function(text) {
      return this.domParser.parseFromString(text, "text/html").body.children[0];
    }, elem.prototype.htmlSanitizer = function(html) {
      return html.replace(/[\s<>\/\0]/g, "");
    }, elem;
  }();
  var _extends = function() {
    /**
     * @param {?} pos
     * @param {!Object} obj
     * @return {?}
     */
    var fn = function(pos, obj) {
      return (fn = Object.setPrototypeOf || {
        __proto__ : []
      } instanceof Array && function(win, obj) {
        /** @type {!Object} */
        win.__proto__ = obj;
      } || function(el, obj) {
        var key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            el[key] = obj[key];
          }
        }
      })(pos, obj);
    };
    return function(child, data) {
      /**
       * @return {undefined}
       */
      function base() {
        this.constructor = child;
      }
      fn(child, data);
      child.prototype = null === data ? Object.create(data) : (base.prototype = data.prototype, new base);
    };
  }();
  var g = (function(t) {
    /**
     * @param {string} model
     * @return {?}
     */
    function Node(model) {
      var window = t.call(this) || this;
      return window.document = model, window.dirtyElementBuilder = new ChildNodes, window;
    }
    _extends(Node, t);
    /**
     * @param {?} element
     * @param {!Object} value
     * @return {?}
     */
    Node.prototype.unserializeShadowRoot = function(element, value) {
      return value.mode, element.attachShadow({
        mode : "open"
      });
    };
    /**
     * @param {!Element} el
     * @return {?}
     */
    Node.prototype.unserializeElementNode = function(el) {
      var tagName = this.getTagName(el);
      var ns = el.namespaceURI;
      try {
        return this.isXhtmlNamespace(ns) && tagName.indexOf(":") > -1 ? this.document.createElement(tagName) : this.document.createElementNS(ns, tagName);
      } catch (allBox) {
        switch(allBox.name) {
          case "InvalidCharacterError":
            return this.dirtyElementBuilder.createElement(tagName);
          default:
            throw allBox;
        }
      }
    };
    /**
     * @param {!Object} a
     * @param {!Object} e
     * @return {?}
     */
    Node.prototype.unserializeAttribute = function(a, e) {
      try {
        e.setAttributeNS(a.namespaceURI, a.name, a.value);
      } catch (allBox) {
        switch(allBox.name) {
          case "NamespaceError":
            e.setAttribute(a.name, a.value);
            break;
          case "InvalidCharacterError":
            e.setAttributeNode(this.dirtyElementBuilder.createAttribute(a.name, a.value));
            break;
          default:
            throw allBox;
        }
      }
      return e;
    };
    /**
     * @param {!Object} token
     * @return {?}
     */
    Node.prototype.unserializeTextNode = function(token) {
      return this.document.createTextNode(token.data);
    };
    /**
     * @param {!Object} token
     * @return {?}
     */
    Node.prototype.unserializeCommentNode = function(token) {
      return this.document.createComment(token.data);
    };
    /**
     * @param {!Node} node
     * @return {?}
     */
    Node.prototype.unserializeDoctypeNode = function(node) {
      return this.document.implementation.createDocumentType(node.name, node.publicId, node.systemId);
    };
    /**
     * @return {?}
     */
    Node.prototype.unserializeDocumentNode = function() {
      return this.document.implementation.createDocument(null, null, null);
    };
    /**
     * @param {string} locNs
     * @return {?}
     */
    Node.prototype.isXhtmlNamespace = function(locNs) {
      return "http://www.w3.org/1999/xhtml" === locNs;
    };
    /**
     * @param {string} canCreateDiscussions
     * @return {?}
     */
    Node.prototype.isSvgNamespace = function(canCreateDiscussions) {
      return "http://www.w3.org/2000/svg" === canCreateDiscussions;
    };
    /**
     * @param {!Element} el
     * @return {?}
     */
    Node.prototype.getTagName = function(el) {
      /** @type {!Element} */
      var child = el;
      var localName = child.localName;
      var nodeName = child.tagName;
      return localName || (this.isSvgNamespace(el.namespaceURI) ? nodeName : nodeName.toLowerCase());
    };
  }(code_tree), function() {
    /**
     * @param {?} pos
     * @param {!Object} obj
     * @return {?}
     */
    var fn = function(pos, obj) {
      return (fn = Object.setPrototypeOf || {
        __proto__ : []
      } instanceof Array && function(win, obj) {
        /** @type {!Object} */
        win.__proto__ = obj;
      } || function(el, obj) {
        var key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            el[key] = obj[key];
          }
        }
      })(pos, obj);
    };
    return function(child, data) {
      /**
       * @return {undefined}
       */
      function base() {
        this.constructor = child;
      }
      fn(child, data);
      child.prototype = null === data ? Object.create(data) : (base.prototype = data.prototype, new base);
    };
  }());
  var Matrix = function(a) {
    /**
     * @param {?} i
     * @return {?}
     */
    function n(i) {
      return a.call(this, [new Fet].concat(i)) || this;
    }
    return g(n, a), n;
  }(valueProgess);
  /**
   * @return {?}
   */
  var extend = function() {
    return (extend = Object.assign || function(result) {
      var src;
      /** @type {number} */
      var i = 1;
      /** @type {number} */
      var argl = arguments.length;
      for (; i < argl; i++) {
        var prop;
        for (prop in src = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(src, prop)) {
            result[prop] = src[prop];
          }
        }
      }
      return result;
    }).apply(this, arguments);
  };
  var SomeRequest = function() {
    /**
     * @param {!Function} gotoEnd
     * @return {undefined}
     */
    function t(gotoEnd) {
      /** @type {!Function} */
      this.logger = gotoEnd;
    }
    return t.prototype.copyFunctionSignature = function(data, element) {
      data.prototype = element.prototype;
      Object.defineProperty(data, "toString", {
        value : function() {
          return element.toString();
        }
      });
    }, t.prototype.createFunctionInterceptor = function(options, prop, callback) {
      /** @type {boolean} */
      var n = false;
      var fn = options[prop];
      var logger = this.logger;
      if ("function" == typeof fn) {
        /**
         * @return {?}
         */
        var value = function() {
          var isFirstTimeShow = this;
          /** @type {!Arguments} */
          var args = arguments;
          var r = fn.apply(this, args);
          return n && logger.tryToExecute("FunctionInterceptor", function() {
            callback(isFirstTimeShow, r, args);
          })(), r;
        };
        this.copyFunctionSignature(value, fn);
        /** @type {function(): ?} */
        options[prop] = value;
      }
      return {
        activate : function() {
          return n = true;
        },
        deactivate : function() {
          return n = false;
        }
      };
    }, t.prototype.createDescriptorInterceptor = function(component, key, callback) {
      /** @type {boolean} */
      var n = false;
      var logger = this.logger;
      /** @type {(ObjectPropertyDescriptor<?>|undefined)} */
      var o = Object.getOwnPropertyDescriptor(component, key);
      if (o) {
        Object.defineProperty(component, key, extend({}, o.get ? {
          get : function() {
            return o.get.apply(this, arguments);
          }
        } : {}, o.set ? {
          set : function() {
            var parserErr = this;
            /** @type {!Arguments} */
            var args = arguments;
            var r = o.set.apply(this, args);
            return n && logger.tryToExecute("DescriptorInterceptor", function() {
              callback(parserErr, args[0]);
            })(), r;
          }
        } : {}));
      }
      return {
        activate : function() {
          return n = true;
        },
        deactivate : function() {
          return n = false;
        }
      };
    }, t;
  }();
  var Date = function() {
    /**
     * @param {?} metadata
     * @param {!Object} config
     * @param {!Function} logger
     * @param {string} type
     * @param {!Object} s
     * @param {?} index
     * @param {?} rows
     * @param {!Object} cols
     * @param {string} options
     * @param {boolean} doneCallback
     * @return {undefined}
     */
    function get(metadata, config, logger, type, s, index, rows, cols, options, doneCallback) {
      this.sessionService = metadata;
      /** @type {!Object} */
      this.configuration = config;
      /** @type {!Function} */
      this.logger = logger;
      /** @type {string} */
      this.compressor = type;
      /** @type {!Object} */
      this.selector = s;
      this.consentService = index;
      this.basicParameters = rows;
      /** @type {!Object} */
      this.commandsService = cols;
      /** @type {string} */
      this.pii = options;
      /** @type {boolean} */
      this.sessionRenewer = doneCallback;
    }
    return get.prototype.init = function() {
      var context = this;
      var request = new SomeRequest(this.logger);
      var events = new EventSource;
      var n = new Vector;
      var r = new Uint32Array(this.pii);
      var module = new Module;
      var res = new PageModule(request, events, this.logger);
      var b = new Matrix([events, n, r, module]);
      var c = new VodClient;
      var network = new Network;
      var txb = new LogicGate(network, this.basicParameters);
      var fileInfo = this.createRecordingPostRequest(this.compressor);
      this.mutationSerializer = new Circle(this.consentService, b, events, n, r);
      var sub = new Sub(this.logger, this.selector, events, n);
      var f = new Farm(this.mutationSerializer, res, module);
      this.recordingService = new CssRules(fileInfo, c, txb, network, new Holder(request, events, module, this.logger), f, sub, new TouchAxis(this.logger, window.location, this.pii), this.sessionRenewer, module, new Platform(window));
      this.recordingInactivityService = new RegExp(sub, f, new FalcorPubSubDataSource(new SocketIO(this.logger)), fileInfo);
      var imageMagick = new ImageMagick("csPersisted", this.logger);
      var socketPath = this.createRecordingPostRequest(this.compressor);
      this.recordingRecoveryService = new TooltipDialog(socketPath, c, imageMagick);
      res.init();
      this.recordingInactivityService.init();
      this.recordingService.init();
      this.commandsService.register("isRecording", function() {
        return context.sessionService.isReplayRecorded();
      });
    }, get.prototype.onStartTracking = function() {
      this.recordingRecoveryService.recover();
      if (this.sessionService.isReplayRecorded()) {
        this.recordingInactivityService.start();
        this.recordingService.start();
        this.recordingRecoveryService.start();
      }
    }, get.prototype.onAfterArtificialPageView = function() {
      this.recordingService.clearStates();
      if (this.sessionService.isReplayRecorded()) {
        this.recordingInactivityService.restart();
        this.recordingService.restart();
        this.recordingRecoveryService.restart();
      } else {
        this.recordingInactivityService.stop();
        this.recordingService.stop();
        this.recordingRecoveryService.stop();
      }
    }, get.prototype.onBeforeSessionRenewal = function() {
      this.recordingService.clearStates();
      this.recordingInactivityService.stop();
      this.recordingService.stop();
      this.recordingRecoveryService.stop();
    }, get.prototype.onOptout = function() {
      this.recordingInactivityService.stop();
      this.recordingService.stop();
      this.recordingRecoveryService.stop();
    }, get.prototype.onConsentGranted = function() {
      this.mutationSerializer.resetAnonymization();
      this.recordingService.triggerConsentGranted();
    }, get.prototype.onConsentWithdrawn = function() {
      this.mutationSerializer.resetAnonymization();
      this.recordingService.triggerConsentWithdrawn();
    }, get.prototype.createRecordingPostRequest = function(options) {
      return new Parser(this.configuration.getRecordingUri(), "recording", this.logger, options);
    }, get.isSupported = function() {
      var emptyScopeChain = new ScopeChain(empty);
      var e = "MutationObserver" in window && emptyScopeChain.isSupported() && "visibilityState" in document;
      return emptyScopeChain.terminateWorker(), e;
    }, get;
  }();
  var newNotebookListMenu = function() {
    /**
     * @param {?} is_acceptor
     * @param {!Object} sessionService
     * @return {undefined}
     */
    function Session(is_acceptor, sessionService) {
      this.visitorService = is_acceptor;
      /** @type {!Object} */
      this.sessionService = sessionService;
      /** @type {boolean} */
      this.naturalPageViewSent = false;
    }
    return Session.prototype.isNaturalPageViewSent = function() {
      return this.naturalPageViewSent;
    }, Session.prototype.setNaturalPageViewSent = function(zoomAware) {
      /** @type {boolean} */
      this.naturalPageViewSent = zoomAware;
    }, Session.prototype.getTrackingContext = function() {
      var decryptedSessionKey = this.getSessionKey();
      var page = this.getPageNumber();
      return decryptedSessionKey && page ? {
        sessionKey : decryptedSessionKey,
        pageNumber : page
      } : null;
    }, Session.prototype.getSessionKey = function() {
      if (this.visitorService.doesVisitorExist()) {
        var wunderlist_list = this.visitorService.getVisitor();
        return wunderlist_list.id + "." + wunderlist_list.visitsCount;
      }
      return null;
    }, Session.prototype.getPageNumber = function() {
      return this.sessionService.doesSessionExist() ? this.sessionService.getSession().pageNumber : null;
    }, Session;
  }();
  var SkillSlot = function() {
    /**
     * @param {?} noise
     * @return {undefined}
     */
    function WD1770(noise) {
      this.trackingContextService = noise;
      /** @type {!Array} */
      this.registeredCallbacks = [];
    }
    return WD1770.prototype.handleCommand = function(key) {
      if (hide(key) && (this.registerCallback(key), this.trackingContextService.isNaturalPageViewSent())) {
        var cb = this.trackingContextService.getTrackingContext();
        if (null !== cb) {
          this.executeAsync(key, cb);
        }
      }
    }, WD1770.prototype.registerCallback = function(name) {
      this.registeredCallbacks.push(name);
    }, WD1770.prototype.executeRegisteredCallbacks = function() {
      var browser = this;
      var url = this.trackingContextService.getTrackingContext();
      if (null !== url) {
        this.registeredCallbacks.map(function(execute) {
          return browser.executeAsync(execute, url);
        });
      }
    }, WD1770.prototype.executeAsync = function(callback, fn) {
      setTimeout(function() {
        callback(fn);
      });
    }, WD1770;
  }();
  var ConditionElementDispalyer = function() {
    /**
     * @param {?} noise
     * @return {undefined}
     */
    function WD1770(noise) {
      this.trackingContextService = noise;
      /** @type {!Array} */
      this.pendingCallbacks = [];
    }
    return WD1770.prototype.handleCommand = function(app) {
      return this.trackingContextService.isNaturalPageViewSent() ? this.applyGetSessionKey(app) : void this.addPendingCallback(app);
    }, WD1770.prototype.applyGetSessionKey = function(field) {
      var object = this.trackingContextService.getSessionKey();
      return this.hasCallback(field) && null !== object && this.executeAsync(field.callback, object), object;
    }, WD1770.prototype.addPendingCallback = function(field) {
      if (this.hasCallback(field)) {
        this.pendingCallbacks.push(field.callback);
      }
    }, WD1770.prototype.flushPendingCallbacks = function() {
      var commonUtils = this;
      var context = this.trackingContextService.getSessionKey();
      if (null !== context) {
        this.pendingCallbacks.forEach(function(action) {
          commonUtils.executeAsync(action, context);
        });
      }
      /** @type {!Array} */
      this.pendingCallbacks = [];
    }, WD1770.prototype.hasCallback = function(callback) {
      return callback && "function" == typeof callback.callback;
    }, WD1770.prototype.executeAsync = function(method, callback) {
      setTimeout(function() {
        method(callback);
      });
    }, WD1770;
  }();
  var LockConstraint = function() {
    /**
     * @param {?} is_acceptor
     * @param {?} opt
     * @param {?} items
     * @return {undefined}
     */
    function Session(is_acceptor, opt, items) {
      this.visitorService = is_acceptor;
      this.sessionService = opt;
      this.commandsService = items;
    }
    return Session.prototype.init = function() {
      var Navigation = this;
      this.trackingContextService = new newNotebookListMenu(this.visitorService, this.sessionService);
      this.afterPageViewService = new SkillSlot(this.trackingContextService);
      this.getSessionKeyService = new ConditionElementDispalyer(this.trackingContextService);
      this.commandsService.register("getSessionKey", function(app) {
        return Navigation.getSessionKeyService.handleCommand(app);
      });
      this.commandsService.register("afterPageView", function(app) {
        Navigation.afterPageViewService.handleCommand(app);
      });
    }, Session.prototype.onAfterNaturalPageView = function() {
      this.trackingContextService.setNaturalPageViewSent(true);
      this.getSessionKeyService.flushPendingCallbacks();
      this.afterPageViewService.executeRegisteredCallbacks();
    }, Session.prototype.onAfterArtificialPageView = function() {
      this.afterPageViewService.executeRegisteredCallbacks();
    }, Session;
  }();
  /** @type {number} */
  var first_open = 50;
  /** @type {number} */
  var idx = 255;
  var type = function() {
    /**
     * @param {string} string
     * @param {string} value
     * @return {undefined}
     */
    function t(string, value) {
      this.key = string.slice(0, first_open);
      this.value = isString(value) ? value.slice(0, idx) : value;
    }
    return t.isValid = function(source, value) {
      return isString(source) && (isString(value) || isNumber(value));
    }, t;
  }();
  var UserService = function() {
    /**
     * @param {!Object} event
     * @param {?} data
     * @return {undefined}
     */
    function handler(event, data) {
      /** @type {!Object} */
      this.batch = event;
      this.pii = data;
    }
    return handler.prototype.trackDynamicVariable = function(key, data) {
      if (type.isValid(key, data)) {
        this.batch.add(new type(this.pii.anonymize(key), this.pii.anonymize(data)));
      }
    }, handler;
  }();
  var TestResult = function() {
    /**
     * @param {!Function} l
     * @param {?} a
     * @return {undefined}
     */
    function handler(l, a) {
      /** @type {!Function} */
      this.logger = l;
      this.compressor = a;
      /** @type {!Array} */
      this.batch = [];
    }
    return handler.prototype.add = function(key) {
      this.batch.push(key);
      this.setBatchReadyCall();
    }, handler.prototype.clear = function() {
      /** @type {!Array} */
      this.batch = [];
    }, handler.prototype.onBatchReady = function(canCreateDiscussions) {
      /** @type {!Function} */
      this.batchReadyCallback = canCreateDiscussions;
    }, handler.prototype.getRequestParameters = function() {
      var t = {};
      /** @type {number} */
      var i = 0;
      var dragAreas = this.batch;
      for (; i < dragAreas.length; i++) {
        var d = dragAreas[i];
        t[d.key] = d.value;
      }
      return {
        dv : this.compressor.compressSync(JSON.stringify(t))
      };
    }, handler.prototype.setBatchReadyCall = function() {
      var localTask = this;
      if (void 0 === this.timeout) {
        /** @type {number} */
        this.timeout = setTimeout(this.logger.tryToExecute("dynamicVariablesBatchReady", function() {
          localTask.batchReadyCallback();
          localTask.timeout = void 0;
        }));
      }
    }, handler;
  }();
  /** @type {string} */
  var options = "dvar";
  var Monitor = function() {
    /**
     * @param {!Object} is_acceptor
     * @param {?} opt
     * @param {!Object} config
     * @param {?} state
     * @param {!Function} doc
     * @param {string} localName
     * @param {string} bonjourName
     * @return {undefined}
     */
    function Session(is_acceptor, opt, config, state, doc, localName, bonjourName) {
      /** @type {!Object} */
      this.commandsService = is_acceptor;
      this.sessionService = opt;
      /** @type {!Object} */
      this.configuration = config;
      this.basicParameters = state;
      /** @type {!Function} */
      this.logger = doc;
      /** @type {string} */
      this.compressor = localName;
      /** @type {string} */
      this.pii = bonjourName;
      this.request = new Node(this.configuration.getTrackerUri(), options);
      this.batch = new TestResult(this.logger, this.compressor);
      this.service = new UserService(this.batch, this.pii);
    }
    return Session.prototype.init = function() {
      var _this2 = this;
      this.request.setRequestParametersProviders(this.basicParameters, this.batch);
      this.sessionService.setDynamicVariablesService(this.service);
      this.batch.onBatchReady(function() {
        return _this2.request.send();
      });
      this.request.after(function() {
        return _this2.batch.clear();
      });
      this.commandsService.register("trackDynamicVariable", function(val) {
        var obj = void 0 === val ? {} : val;
        var y = obj.key;
        var d = obj.value;
        _this2.service.trackDynamicVariable(y, d);
      });
    }, Session;
  }();
  var Bufferish = function() {
    /**
     * @param {string} id
     * @param {number} projectileType
     * @return {undefined}
     */
    function init(id, projectileType) {
      /** @type {string} */
      this.id = id;
      /** @type {number} */
      this.revenue = projectileType;
    }
    return init.from = function(obj) {
      var $scope = new init(obj.id, parseFloat(obj.revenue));
      return isNaN(parseFloat(obj.tax)) || ($scope.tax = parseFloat(obj.tax)), isNaN(parseFloat(obj.shipping)) || ($scope.shipping = parseFloat(obj.shipping)), $scope;
    }, init;
  }();
  var transformSpec = function() {
    /**
     * @param {string} i
     * @param {!Object} name
     * @param {number} value
     * @param {number} isLabel
     * @return {undefined}
     */
    function Item(i, name, value, isLabel) {
      /** @type {string} */
      this.id = i;
      /** @type {!Object} */
      this.name = name;
      /** @type {number} */
      this.price = value;
      /** @type {number} */
      this.quantity = isLabel;
    }
    return Item.from = function(item) {
      if (!Item.isValid(item)) {
        return null;
      }
      var e = new Item(item.id, item.name, parseFloat(item.price), parseInt(item.quantity, 10));
      return isArray(item.sku) && (e.sku = item.sku), isArray(item.category) && (e.category = item.category), e;
    }, Item.isValid = function(data) {
      return isString(data.id) && isString(data.name) && isDefined(parseFloat(data.price)) && isNumber(parseInt(data.quantity, 10)) && (!isArray(data.sku) || isString(data.sku)) && (!isArray(data.category) || isString(data.category));
    }, Item;
  }();
  var p5 = function() {
    /**
     * @param {?} name
     * @param {!Object} err
     * @param {?} users
     * @return {undefined}
     */
    function self(name, err, users) {
      this.pii = name;
      /** @type {!Object} */
      this.transactionRequest = err;
      this.sessionRenewer = users;
      this.clear();
    }
    return self.prototype.addTransaction = function(data) {
      var value = this.pii.anonymizeFields(data, ["id"]);
      this.transaction = Bufferish.from(value);
    }, self.prototype.getTransaction = function() {
      return this.transaction;
    }, self.prototype.sendTransaction = function() {
      if (this.sessionRenewer.isSessionValid()) {
        this.transactionRequest.send();
      }
    }, self.prototype.addItem = function(id) {
      if (!hide(id)) {
        var value = this.pii.anonymizeFields(id, ["id", "name", "sku", "category"]);
        var i = transformSpec.from(value);
        if (null !== i) {
          this.transactionItems.push(i);
        }
      }
    }, self.prototype.getItems = function() {
      return this.transactionItems;
    }, self.prototype.clear = function() {
      this.transaction = {
        id : void 0,
        revenue : NaN
      };
      /** @type {!Array} */
      this.transactionItems = [];
    }, self.prototype.getRequestParameters = function() {
      var obj = {
        id : "" + this.transaction.id,
        revenue : "" + this.transaction.revenue
      };
      return isArray(this.transaction.tax) && (obj.tax = "" + this.transaction.tax), isArray(this.transaction.shipping) && (obj.shipping = "" + this.transaction.shipping), obj.items = window.JSON.stringify(this.transactionItems), obj;
    }, self;
  }();
  /** @type {number} */
  var elem = 100;
  var test = function() {
    /**
     * @param {string} rules
     * @return {undefined}
     */
    function C(rules) {
      this.skuItem = rules.slice(0, elem);
    }
    return Object.defineProperty(C.prototype, "sku", {
      get : function() {
        return this.skuItem;
      },
      enumerable : true,
      configurable : true
    }), C.isValid = function(value) {
      return isString(value) && value.length > 0;
    }, C.from = function(arg) {
      return C.isValid(arg) ? new C(arg) : null;
    }, C;
  }();
  var DocumentsViewModel = function() {
    /**
     * @param {!Object} handler
     * @param {boolean} target
     * @return {undefined}
     */
    function TapRecognizer(handler, target) {
      /** @type {!Object} */
      this.cartItemRequest = handler;
      /** @type {boolean} */
      this.sessionRenewer = target;
      /** @type {null} */
      this.cartItem = null;
    }
    return TapRecognizer.prototype.addToCart = function(item) {
      this.cartItem = test.from(item.sku);
      if (this.cartItem) {
        this.sendCartItem();
      }
    }, TapRecognizer.prototype.getCartItem = function() {
      return this.cartItem;
    }, TapRecognizer.prototype.sendCartItem = function() {
      if (this.sessionRenewer.isSessionValid()) {
        this.cartItemRequest.send();
      }
    }, TapRecognizer.prototype.clear = function() {
      /** @type {null} */
      this.cartItem = null;
    }, TapRecognizer.prototype.getRequestParameters = function() {
      return this.cartItem ? {
        sku : "" + this.cartItem.sku
      } : {};
    }, TapRecognizer;
  }();
  var String = function() {
    /**
     * @param {!Object} options
     * @param {?} bep
     * @param {?} call_on_terminate
     * @param {!Object} context
     * @param {string} items
     * @param {boolean} account
     * @return {undefined}
     */
    function Session(options, bep, call_on_terminate, context, items, account) {
      /** @type {!Object} */
      this.configuration = options;
      this.visitorService = bep;
      this.sessionService = call_on_terminate;
      /** @type {!Object} */
      this.commandsService = context;
      /** @type {string} */
      this.pii = items;
      /** @type {boolean} */
      this.sessionRenewer = account;
    }
    return Session.prototype.init = function() {
      var node = new Node(this.configuration.getTrackerUri(), "transaction");
      var _ = new Node(this.configuration.getTrackerUri(), "addtocart");
      var self = new p5(this.pii, node, this.sessionRenewer);
      var vm = new DocumentsViewModel(_, this.sessionRenewer);
      node.setRequestParametersProviders(this.configuration, this.visitorService, this.sessionService, self, n);
      node.after(function() {
        self.clear();
      });
      _.setRequestParametersProviders(this.configuration, this.visitorService, this.sessionService, vm, n);
      _.after(function() {
        vm.clear();
      });
      this.commandsService.register("ecommerce:addTransaction", function(h) {
        self.addTransaction(h);
      });
      this.commandsService.register("ecommerce:addItem", function(requestKey) {
        return self.addItem(requestKey);
      });
      this.commandsService.register("ecommerce:send", function() {
        return self.sendTransaction();
      });
      this.commandsService.register("ecommerce:addToCart", function(item) {
        vm.addToCart(item);
      });
    }, Session;
  }();
  var WindowIOStream = function() {
    /**
     * @param {!Window} context
     * @return {undefined}
     */
    function val(context) {
      this.windowPerformance = context.performance;
    }
    return val.prototype.getRequestParameters = function() {
      if (this.areTimingsUnavailable()) {
        return {};
      }
      var t = this.compute();
      return {
        str : t.startRender,
        di : t.domInteractive,
        dc : t.domComplete,
        fl : t.fullyLoaded
      };
    }, val.prototype.compute = function() {
      var timing = this.windowPerformance.timing;
      return {
        startRender : "" + (timing.domLoading - timing.requestStart),
        domInteractive : "" + (timing.domInteractive - timing.requestStart),
        domComplete : "" + (timing.domComplete - timing.requestStart),
        fullyLoaded : "" + (timing.loadEventEnd - timing.requestStart)
      };
    }, val.prototype.areTimingsUnavailable = function() {
      return !(this.windowPerformance && this.windowPerformance.timing && this.windowPerformance.timing.loadEventEnd > 0);
    }, val;
  }();
  !function(EventType) {
    /** @type {string} */
    EventType[EventType.TAP = 0] = "TAP";
    /** @type {string} */
    EventType[EventType.LONG_PRESS = 1] = "LONG_PRESS";
    /** @type {string} */
    EventType[EventType.DRAG = 2] = "DRAG";
    /** @type {string} */
    EventType[EventType.FLICK = 3] = "FLICK";
  }(EventType || (EventType = {}));
  (function(keyMap) {
    /** @type {string} */
    keyMap[keyMap.UP = 1] = "UP";
    /** @type {string} */
    keyMap[keyMap.DOWN = 2] = "DOWN";
    /** @type {string} */
    keyMap[keyMap.LEFT = 3] = "LEFT";
    /** @type {string} */
    keyMap[keyMap.RIGHT = 4] = "RIGHT";
  })(TiltRecognizer || (TiltRecognizer = {}));
  (function(EVENT) {
    /** @type {string} */
    EVENT[EVENT.RESIZE = 0] = "RESIZE";
    /** @type {string} */
    EVENT[EVENT.SCROLL = 1] = "SCROLL";
    /** @type {string} */
    EVENT[EVENT.MOUSEMOVE = 2] = "MOUSEMOVE";
    /** @type {string} */
    EVENT[EVENT.MOUSEDOWN = 3] = "MOUSEDOWN";
    /** @type {string} */
    EVENT[EVENT.MOUSEUP = 4] = "MOUSEUP";
    /** @type {string} */
    EVENT[EVENT.CLICK = 5] = "CLICK";
    /** @type {string} */
    EVENT[EVENT.MOUSEOVER = 6] = "MOUSEOVER";
    /** @type {string} */
    EVENT[EVENT.MOUSEOUT = 7] = "MOUSEOUT";
    /** @type {string} */
    EVENT[EVENT.FOCUSIN = 11] = "FOCUSIN";
    /** @type {string} */
    EVENT[EVENT.FOCUSOUT = 12] = "FOCUSOUT";
    /** @type {string} */
    EVENT[EVENT.TAP = 14] = "TAP";
  })(EVENT || (EVENT = {}));
  var u = function() {
    return function() {
    };
  }();
  var setTimeout = function() {
    /**
     * @param {?} pos
     * @param {!Object} obj
     * @return {?}
     */
    var fn = function(pos, obj) {
      return (fn = Object.setPrototypeOf || {
        __proto__ : []
      } instanceof Array && function(win, obj) {
        /** @type {!Object} */
        win.__proto__ = obj;
      } || function(el, obj) {
        var key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            el[key] = obj[key];
          }
        }
      })(pos, obj);
    };
    return function(child, data) {
      /**
       * @return {undefined}
       */
      function base() {
        this.constructor = child;
      }
      fn(child, data);
      child.prototype = null === data ? Object.create(data) : (base.prototype = data.prototype, new base);
    };
  }();
  var DATE = function(v) {
    /**
     * @param {?} key
     * @param {?} index
     * @return {?}
     */
    function callback(key, index) {
      var action = v.call(this) || this;
      return action.projectConfiguration = key, action.pathComputation = index, action.supportedEventTypes = [EVENT.MOUSEDOWN, EVENT.MOUSEUP, EVENT.CLICK, EVENT.MOUSEOVER, EVENT.TAP], action;
    }
    return setTimeout(callback, v), callback.prototype.isEventTypeSupported = function(sceneUid) {
      return -1 !== this.supportedEventTypes.indexOf(sceneUid);
    }, callback.prototype.enhanceAnalysisEvent = function(value, label) {
      if (this.projectConfiguration.eMerchandisingEnabled) {
        var result = this.pathComputation.getTargetPathAndTargetLink(value);
        var id = result.path;
        var courseSections = result.targetLink;
        label.target = id;
        label.targetLink = courseSections;
      } else {
        label.target = this.pathComputation.getTargetPath(value);
        /** @type {string} */
        label.targetLink = "";
      }
      return label;
    }, callback;
  }(u);
  /**
   * @param {!MouseEvent} props
   * @return {?}
   */
  var jQuery = function(props) {
    return null !== props.target && props.target.shadowRoot && props.composedPath ? props.composedPath()[0] : props.target;
  };
  var bind = function() {
    /**
     * @param {?} pos
     * @param {!Object} obj
     * @return {?}
     */
    var fn = function(pos, obj) {
      return (fn = Object.setPrototypeOf || {
        __proto__ : []
      } instanceof Array && function(win, obj) {
        /** @type {!Object} */
        win.__proto__ = obj;
      } || function(el, obj) {
        var key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            el[key] = obj[key];
          }
        }
      })(pos, obj);
    };
    return function(child, data) {
      /**
       * @return {undefined}
       */
      function base() {
        this.constructor = child;
      }
      fn(child, data);
      child.prototype = null === data ? Object.create(data) : (base.prototype = data.prototype, new base);
    };
  }();
  var View = function(binding) {
    /**
     * @param {?} event
     * @return {?}
     */
    function triggerEvent(event) {
      var action = binding.call(this) || this;
      return action.projectConfiguration = event, action.supportedEventTypes = [EVENT.CLICK, EVENT.MOUSEDOWN, EVENT.MOUSEUP, EVENT.TAP], action;
    }
    return bind(triggerEvent, binding), triggerEvent.prototype.isEventTypeSupported = function(sceneUid) {
      return -1 !== this.supportedEventTypes.indexOf(sceneUid);
    }, triggerEvent.prototype.enhanceAnalysisEvent = function(target, node) {
      if (this.projectConfiguration.autoInsightsEnabled) {
        /** @type {string} */
        node.className = "";
        /** @type {string} */
        node.typeAttribute = "";
        var value = jQuery(target);
        if (value && next(value)) {
          node.className = value.className;
          if (function(e) {
            return next(e) && "button" === e.localName;
          }(value) || error(value)) {
            node.typeAttribute = value.type;
          }
        }
      }
      return node;
    }, triggerEvent;
  }(u);
  var ThalassaAgent = function() {
    /**
     * @param {!Object} options
     * @param {?} addr
     * @param {!Object} req
     * @return {undefined}
     */
    function view(options, addr, req) {
      var target = this;
      /** @type {!Object} */
      this.configuration = options;
      this.pathComputation = addr;
      /** @type {!Object} */
      this.gestureTracker = req;
      /** @type {!Array} */
      this.analysisEventsEnhancers = [new DATE(this.configuration, this.pathComputation), new View(this.configuration)];
      this.gestureTracker.onEvent(function(pos, e) {
        return target.onTap(pos, e);
      });
    }
    return view.prototype.onTap = function(pos, e) {
      if (pos.type === EventType.TAP) {
        var callback = this.buildAnalysisEvent(e, {
          type : EVENT.TAP
        });
        if (callback.target !== evt.INVALID_ELEMENT) {
          this.onEventCallback(callback);
        }
      }
    }, view.prototype.onEvent = function(name) {
      /** @type {!Function} */
      this.onEventCallback = name;
    }, view.prototype.start = function() {
      this.gestureTracker.start();
    }, view.prototype.stop = function() {
      this.gestureTracker.stop();
    }, view.prototype.buildAnalysisEvent = function(obj, params) {
      return this.analysisEventsEnhancers.filter(function(xhr) {
        return xhr.isEventTypeSupported(params.type);
      }).reduce(function(s, qq) {
        return qq.enhanceAnalysisEvent(obj, s);
      }, params);
    }, view;
  }();
  var cssStyle = function() {
    /**
     * @return {undefined}
     */
    function IdentityStatistic() {
    }
    return IdentityStatistic.prototype.compute = function(options, context) {
      /** @type {number} */
      var x = this.convertPixelsToDPs(context.x) - this.convertPixelsToDPs(options.x);
      /** @type {number} */
      var dx = this.convertPixelsToDPs(context.y) - this.convertPixelsToDPs(options.y);
      /** @type {number} */
      var val = context.time - options.time;
      return {
        duration : val,
        distance : this.computeGestureDistance(x, dx),
        direction : this.computeGestureDirection(x, dx),
        velocity : this.computeGestureVelocity(x, dx, val)
      };
    }, IdentityStatistic.prototype.convertPixelsToDPs = function(rowHeight) {
      return rowHeight / window.devicePixelRatio;
    }, IdentityStatistic.prototype.computeGestureDistance = function(z, y) {
      return Math.round(Math.sqrt(z * z + y * y));
    }, IdentityStatistic.prototype.computeGestureVelocity = function(v, a, dist) {
      /** @type {number} */
      var scale = dist / 1E3;
      /** @type {number} */
      var i = v / scale;
      /** @type {number} */
      var ratio = a / scale;
      return Math.round(Math.abs(i) + Math.abs(ratio));
    }, IdentityStatistic.prototype.computeGestureDirection = function(dx, dy) {
      return Math.abs(dx) > Math.abs(dy) ? dx > 0 ? TiltRecognizer.RIGHT : TiltRecognizer.LEFT : dy > 0 ? TiltRecognizer.DOWN : TiltRecognizer.UP;
    }, IdentityStatistic;
  }();
  var DataTransfer = function() {
    /**
     * @return {undefined}
     */
    function $() {
      this.metricsComputer = new cssStyle;
      this.reset();
    }
    return $.prototype.onGesture = function(eventName) {
      /** @type {!Function} */
      this.onGestureCallback = eventName;
    }, $.prototype.isValidTouchEvent = function(evt) {
      return "touches" in evt && "changedTouches" in evt;
    }, $.prototype.processActionDown = function(e) {
      if (this.isGestureStart(e)) {
        this.reset();
      }
      this.pendingInputs.push({
        x : e.touches[0].pageX,
        y : e.touches[0].pageY,
        time : Date.now()
      });
      this.target = jQuery(e);
    }, $.prototype.processActionMove = function() {
      /** @type {boolean} */
      this.hasMove = true;
    }, $.prototype.processActionUp = function(event) {
      this.pendingInputs.push({
        x : event.changedTouches[0].pageX,
        y : event.changedTouches[0].pageY,
        time : Date.now()
      });
      if (this.isValidSingleTouchGesture()) {
        this.runDetection(event);
      }
    }, $.prototype.reset = function() {
      /** @type {!Array} */
      this.pendingInputs = [];
      /** @type {null} */
      this.target = null;
      /** @type {boolean} */
      this.hasMove = false;
    }, $.prototype.runDetection = function(eventHash) {
      var entries = this.metricsComputer.compute(this.pendingInputs[0], this.pendingInputs[1]);
      var i = this.hasMove ? this.computeSwipeGesture(entries) : this.computePressGesture(entries);
      this.onGestureCallback(i, eventHash);
    }, $.prototype.computeSwipeGesture = function(data) {
      return {
        type : data.velocity < 100 ? EventType.DRAG : EventType.FLICK,
        target : this.target,
        velocity : data.velocity,
        distance : data.distance,
        direction : data.direction
      };
    }, $.prototype.computePressGesture = function(ast) {
      return {
        type : ast.duration < 1E3 ? EventType.TAP : EventType.LONG_PRESS,
        target : this.target
      };
    }, $.prototype.isGestureStart = function(event) {
      return 1 === event.touches.length;
    }, $.prototype.isValidSingleTouchGesture = function() {
      return 2 === this.pendingInputs.length;
    }, $;
  }();
  var NATGateway = function() {
    /**
     * @param {!Function} destElId
     * @return {undefined}
     */
    function drag(destElId) {
      var sequencer = this;
      /** @type {!Function} */
      this.logger = destElId;
      /** @type {!Array} */
      this.eventHandlers = [{
        boundElement : document,
        type : "touchstart",
        listener : function(msg) {
          return sequencer.processEvent(msg);
        }
      }, {
        boundElement : document,
        type : "touchmove",
        listener : function(msg) {
          return sequencer.processEvent(msg);
        }
      }, {
        boundElement : document,
        type : "touchend",
        listener : function(msg) {
          return sequencer.processEvent(msg);
        }
      }];
      this.detector = new DataTransfer;
    }
    return drag.prototype.onEvent = function(eventType) {
      this.detector.onGesture(eventType);
    }, drag.prototype.start = function() {
      if (this.canDetectGesture()) {
        this.eventHandlers.forEach(function(o) {
          return subscribe(o);
        });
      }
    }, drag.prototype.stop = function() {
      if (this.canDetectGesture()) {
        this.eventHandlers.forEach(function(t) {
          return done(t);
        });
      }
    }, drag.prototype.canDetectGesture = function() {
      return void 0 !== window.devicePixelRatio;
    }, drag.prototype.processEvent = function(evt) {
      var full = this;
      this.logger.tryToExecute("process gesture event", function() {
        if (full.detector.isValidTouchEvent(evt)) {
          switch(evt.type) {
            case "touchstart":
              full.detector.processActionDown(evt);
              break;
            case "touchmove":
              full.detector.processActionMove();
              break;
            case "touchend":
              full.detector.processActionUp(evt);
          }
        }
      })();
    }, drag.isSwipe = function(verifiedEvent) {
      return verifiedEvent.type === EventType.FLICK || verifiedEvent.type === EventType.DRAG;
    }, drag;
  }();
  var _self;
  /** @type {string} */
  var dateFormatTag = "data-cs-scroll-container";
  !function(cas) {
    /**
     * @param {!MouseEvent} context
     * @return {?}
     */
    cas.isEventOnScrollContainer = function(context) {
      return !!($(context) && function(a) {
        try {
          if ($(a.target)) {
            return true;
          }
        } catch (t) {
        }
        return false;
      }(context) && getPosition(context.target) && null !== context.target.getAttribute(dateFormatTag));
    };
    /**
     * @return {?}
     */
    cas.getScrollContainer = function() {
      return document.querySelector("[" + dateFormatTag + "]");
    };
  }(_self || (_self = {}));
  var Utils;
  /** @type {number} */
  var scale = 65535;
  !function(canCreateDiscussions) {
    /**
     * @param {!MouseEvent} e
     * @return {?}
     */
    (Utils || (Utils = {})).getRelativePosition = function(e) {
      if (getPosition(e.target) && hide(e.target.getBoundingClientRect) && $(e.pageX) && $(e.pageY)) {
        var bounds = e.target.getBoundingClientRect();
        /** @type {number} */
        var x = e.pageX - bounds.left - settings.windowOffsetX();
        /** @type {number} */
        var y = e.pageY - bounds.top - settings.windowOffsetY();
        if (e.target !== document.documentElement) {
          x = x + e.target.scrollLeft;
          y = y + e.target.scrollTop;
        }
        /** @type {number} */
        var imageWidth = Math.max(e.target.scrollWidth, bounds.width);
        /** @type {number} */
        var height = Math.max(e.target.scrollHeight, bounds.height);
        return {
          xRel : Math.round(x / imageWidth * scale),
          yRel : Math.round(y / height * scale),
          valid : true
        };
      }
      return {
        xRel : -1,
        yRel : -1,
        valid : false
      };
    };
  }();
  var setStatus = function() {
    /**
     * @param {?} pos
     * @param {!Object} obj
     * @return {?}
     */
    var fn = function(pos, obj) {
      return (fn = Object.setPrototypeOf || {
        __proto__ : []
      } instanceof Array && function(win, obj) {
        /** @type {!Object} */
        win.__proto__ = obj;
      } || function(el, obj) {
        var key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            el[key] = obj[key];
          }
        }
      })(pos, obj);
    };
    return function(child, data) {
      /**
       * @return {undefined}
       */
      function base() {
        this.constructor = child;
      }
      fn(child, data);
      child.prototype = null === data ? Object.create(data) : (base.prototype = data.prototype, new base);
    };
  }();
  var uNode = function(uri) {
    /**
     * @param {?} e
     * @param {?} n
     * @return {?}
     */
    function release(e, n) {
      var settings = uri.call(this) || this;
      return settings.projectConfiguration = e, settings.pathComputation = n, settings.supportedEventTypes = [EVENT.MOUSEMOVE], settings.currentMouseMovePath = "", settings;
    }
    return setStatus(release, uri), release.prototype.isEventTypeSupported = function(sceneUid) {
      return -1 !== this.supportedEventTypes.indexOf(sceneUid);
    }, release.prototype.enhanceAnalysisEvent = function(e, pos) {
      if (this.projectConfiguration.mouseMoveHeatmapEnabled) {
        var pos = Utils.getRelativePosition(e);
        var valid = pos.valid;
        var xRel = pos.xRel;
        var foo = pos.yRel;
        if (valid) {
          var after = this.pathComputation.getTargetPath(e);
          if (after !== evt.INVALID_ELEMENT) {
            /** @type {number} */
            pos.target = 0;
            pos.xRel = xRel;
            pos.yRel = foo;
            if (after !== this.currentMouseMovePath) {
              this.currentMouseMovePath = after;
              pos.targetHeatmap = after;
            } else {
              /** @type {string} */
              pos.targetHeatmap = "";
            }
          }
        } else {
          /** @type {string} */
          this.currentMouseMovePath = "";
        }
      }
      return pos;
    }, release;
  }(u);
  var monitor = function() {
    /**
     * @param {?} reason
     * @param {!Function} request
     * @param {?} event
     * @param {!Object} selector
     * @return {undefined}
     */
    function init(reason, request, event, selector) {
      var _this = this;
      this.projectConfiguration = reason;
      /** @type {!Function} */
      this.logger = request;
      this.pathComputation = event;
      /** @type {!Object} */
      this.selector = selector;
      /** @type {string} */
      this.FOCUSABLE_ELEMENTS_SELECTOR = "select, select *, input, textarea";
      /** @type {string} */
      this.HOVERABLE_ELEMENTS_SELECTOR = "a, a *, button, button *, select, select *, input, textarea";
      /** @type {number} */
      this.DEBOUNCE_DURATION = 150;
      /** @type {number} */
      this.THROTTLE_DURATION = 400;
      /** @type {boolean} */
      this.scrollContainerDimensionSent = false;
      this.debouncedScrollEventCallback = throttle(function(t, e) {
        return _this.scrollListener(t, e);
      }, this.DEBOUNCE_DURATION);
      this.debouncedResizeEventCallback = throttle(function(t) {
        return _this.resizeListener(t);
      }, this.DEBOUNCE_DURATION);
      this.throttledMouseMoveCallback = function(require, wait) {
        var template;
        var uriTemplate;
        /** @type {null} */
        var timeoutId = null;
        /** @type {number} */
        var concurency = 0;
        /**
         * @return {undefined}
         */
        var tick = function() {
          concurency = clock.now();
          /** @type {null} */
          timeoutId = null;
          uriTemplate = require(template);
        };
        return function() {
          /** @type {!Array} */
          var argumentsArray = [];
          /** @type {number} */
          var i = 0;
          for (; i < arguments.length; i++) {
            argumentsArray[i] = arguments[i];
          }
          var connectNumber = clock.now();
          if (!concurency) {
            concurency = connectNumber;
          }
          /** @type {number} */
          var remaining = wait - (connectNumber - concurency);
          return template = argumentsArray.slice()[0], remaining <= 0 || remaining > wait ? (concurency = connectNumber, uriTemplate = require(template), timeoutId ? (window.clearTimeout(timeoutId), timeoutId = null) : template = null) : timeoutId || (timeoutId = window.setTimeout(tick, remaining)), uriTemplate;
        };
      }(function(params) {
        return _this.mouseMoveListener(params);
      }, this.THROTTLE_DURATION);
      /** @type {!Array} */
      this.globalHandlers = [{
        boundElement : window,
        type : "resize",
        listener : function() {
          return _this.debouncedResizeEventCallback();
        }
      }, {
        boundElement : document,
        type : "scroll",
        listener : function(type) {
          return _this.debouncedScrollEventCallback(type);
        }
      }, {
        boundElement : window,
        type : "mousemove",
        listener : function(type) {
          return _this.throttledMouseMoveCallback(type);
        }
      }, {
        boundElement : document,
        type : "mousedown",
        listener : function(value) {
          return _this.mouseDownListener(value);
        }
      }, {
        boundElement : document,
        type : "mouseup",
        listener : function(type) {
          return _this.mouseUpListener(type);
        }
      }, {
        boundElement : document,
        type : "click",
        listener : function(evt) {
          return _this.clickListener(evt);
        }
      }];
      /** @type {!Array} */
      this.onSelectorHandlers = [{
        boundElement : document,
        type : "mouseover",
        listener : this.selector.on(this.HOVERABLE_ELEMENTS_SELECTOR, function(t) {
          return _this.mouseOverListener(t);
        })
      }, {
        boundElement : document,
        type : "mouseout",
        listener : this.selector.on(this.HOVERABLE_ELEMENTS_SELECTOR, function(t) {
          return _this.mouseOutListener(t);
        })
      }, {
        boundElement : document,
        type : "focusin",
        listener : this.selector.on(this.FOCUSABLE_ELEMENTS_SELECTOR, function(t) {
          return _this.focusInListener(t);
        })
      }, {
        boundElement : document,
        type : "focusout",
        listener : this.selector.on(this.FOCUSABLE_ELEMENTS_SELECTOR, function(t) {
          return _this.focusOutListener(t);
        })
      }];
      /** @type {!Array} */
      this.analysisEventsEnhancers = [new DATE(this.projectConfiguration, this.pathComputation), new uNode(this.projectConfiguration, this.pathComputation), new View(this.projectConfiguration)];
    }
    return init.prototype.onEvent = function(name) {
      /** @type {!Function} */
      this.onEventCallback = name;
    }, init.prototype.start = function() {
      this.getSupportedHandlers().forEach(function(o) {
        return subscribe(o);
      });
      this.resizeListener();
    }, init.prototype.stop = function() {
      this.getSupportedHandlers().forEach(function(t) {
        return done(t);
      });
    }, init.prototype.getSupportedHandlers = function() {
      return this.selector.isMatchesSelectorSupported() ? this.globalHandlers.concat(this.onSelectorHandlers) : (this.logger.logMessage("Element.matches is not implemented yet"), this.globalHandlers);
    }, init.prototype.resizeListener = function(f) {
      var changedRadioControls = this;
      this.logger.tryToExecute("Event handler type: resize", function() {
        var item = _self.getScrollContainer();
        var v = getPosition(item);
        if (v) {
          /** @type {boolean} */
          changedRadioControls.scrollContainerDimensionSent = true;
        }
        var values = {
          type : EVENT.RESIZE,
          x : v ? item.clientWidth : settings.windowWidth(),
          y : v ? item.clientHeight : settings.windowHeight()
        };
        if (f) {
          /** @type {!Object} */
          values.target = f;
        }
        changedRadioControls.onEventCallback(values);
      })();
    }, init.prototype.scrollListener = function(e, event) {
      var that = this;
      this.logger.tryToExecute("Event handler type: scroll", function() {
        var el = _self.isEventOnScrollContainer(event);
        if (!that.scrollContainerDimensionSent && el) {
          that.resizeListener();
        }
        var r = that.buildAnalysisEvent(event, {
          type : EVENT.SCROLL,
          x : el ? event.target.scrollLeft : settings.windowOffsetX(),
          y : el ? event.target.scrollTop : settings.windowOffsetY(),
          target : e
        });
        that.onEventCallback(r);
      })();
    }, init.prototype.mouseMoveListener = function(a) {
      var poster = this;
      this.logger.tryToExecute("Event handler type: mouseMove", function() {
        var id = poster.buildAnalysisEvent(a, {
          type : EVENT.MOUSEMOVE,
          x : a.pageX,
          y : a.pageY
        });
        poster.onEventCallback(id);
      })();
    }, init.prototype.mouseDownListener = function(e) {
      var that = this;
      this.logger.tryToExecute("Event handler type: mouseDown", function() {
        var a = that.buildAnalysisEvent(e, {
          type : EVENT.MOUSEDOWN,
          x : e.pageX,
          y : e.pageY
        });
        that.onEventCallbackIfValidTarget(a);
      })();
    }, init.prototype.mouseUpListener = function(event) {
      var $ = this;
      this.logger.tryToExecute("Event handler type: mouseUp", function() {
        var handlerQueue = $.buildAnalysisEvent(event, {
          type : EVENT.MOUSEUP,
          x : event.pageX,
          y : event.pageY
        });
        $.onEventCallbackIfValidTarget(handlerQueue);
      })();
    }, init.prototype.clickListener = function(e) {
      var that = this;
      this.logger.tryToExecute("Event handler type: click", function() {
        var a = that.buildAnalysisEvent(e, {
          type : EVENT.CLICK,
          x : e.pageX,
          y : e.pageY
        });
        that.onEventCallbackIfValidTarget(a);
      })();
    }, init.prototype.mouseOverListener = function(a) {
      var poster = this;
      this.logger.tryToExecute("Event handler type: mouseOver", function() {
        var id = poster.buildAnalysisEvent(a, {
          type : EVENT.MOUSEOVER,
          x : a.pageX,
          y : a.pageY
        });
        poster.onEventCallbackIfValidTarget(id);
      })();
    }, init.prototype.mouseOutListener = function(e) {
      var $ = this;
      this.logger.tryToExecute("Event handler type: mouseOut", function() {
        var i = $.buildAnalysisEvent(e, {
          type : EVENT.MOUSEOUT,
          x : e.pageX,
          y : e.pageY,
          target : $.pathComputation.getTargetPath(e)
        });
        $.onEventCallbackIfValidTarget(i);
      })();
    }, init.prototype.focusInListener = function(target) {
      var grunt = this;
      this.logger.tryToExecute("Event handler type: focusIn", function() {
        var close = grunt.buildAnalysisEvent(target, {
          type : EVENT.FOCUSIN,
          target : grunt.pathComputation.getTargetPath(target)
        });
        grunt.onEventCallbackIfValidTarget(close);
      })();
    }, init.prototype.focusOutListener = function(target) {
      var grunt = this;
      this.logger.tryToExecute("Event handler type: focusOut", function() {
        var close = grunt.buildAnalysisEvent(target, {
          type : EVENT.FOCUSOUT,
          target : grunt.pathComputation.getTargetPath(target)
        });
        grunt.onEventCallbackIfValidTarget(close);
      })();
    }, init.prototype.onEventCallbackIfValidTarget = function(callback) {
      if (callback.target !== evt.INVALID_ELEMENT) {
        this.onEventCallback(callback);
      }
    }, init.prototype.buildAnalysisEvent = function(obj, params) {
      return this.analysisEventsEnhancers.filter(function(xhr) {
        return xhr.isEventTypeSupported(params.type);
      }).reduce(function(s, qq) {
        return qq.enhanceAnalysisEvent(obj, s);
      }, params);
    }, init;
  }();
  var HaproxyStats = function() {
    /**
     * @param {!Function} gotoEnd
     * @return {undefined}
     */
    function t(gotoEnd) {
      var QuickBase = this;
      /** @type {!Function} */
      this.logger = gotoEnd;
      /** @type {number} */
      this.MAX_SCROLL_RATE_THRESHOLD = 100;
      /** @type {number} */
      this.maxScrollRate = 0;
      this.maxDocumentHeight = settings.documentHeight();
      this.maxScrollRateHandler = {
        boundElement : document,
        type : "scroll",
        listener : function(val) {
          return QuickBase.maxScrollRateListener(val);
        }
      };
    }
    return t.prototype.onEvent = function(name) {
      /** @type {!Function} */
      this.onEventCallback = name;
    }, t.prototype.start = function() {
      subscribe(this.maxScrollRateHandler);
      this.reset();
    }, t.prototype.stop = function() {
      done(this.maxScrollRateHandler);
    }, t.prototype.reset = function() {
      var level = _self.getScrollContainer();
      if (null === level) {
        this.maxScrollRate = this.currentScrollRate(settings.documentHeight());
      } else {
        var promise = this.computePaddingTop(level);
        this.maxScrollRate = this.currentScrollRateWithScrollContainer(level, promise);
      }
      this.onEventCallback();
    }, t.prototype.maxScrollRateListener = function(parent) {
      var that = this;
      this.logger.tryToExecute("MaxScrollRate handler", function() {
        var m;
        var n;
        if (_self.isEventOnScrollContainer(parent)) {
          var el = parent.target;
          var o = that.computePaddingTop(el);
          m = that.documentHeightWithScrollContainer(el, o);
          n = that.currentScrollRateWithScrollContainer(el, o);
        } else {
          m = settings.documentHeight();
          n = that.currentScrollRate(m);
        }
        if (n > that.maxScrollRate || m > that.maxDocumentHeight) {
          that.maxScrollRate = n;
          if (m > that.maxDocumentHeight) {
            that.maxDocumentHeight = m;
          }
          that.onEventCallback();
        }
      })();
    }, t.prototype.currentScrollRate = function(includeAll) {
      /** @type {number} */
      var minPxPerValUnit = Math.round(this.lastPixelLine() / includeAll * 100);
      return Math.min(minPxPerValUnit, this.MAX_SCROLL_RATE_THRESHOLD);
    }, t.prototype.lastPixelLine = function() {
      var t = settings.windowHeight();
      return settings.windowOffsetY() + t;
    }, t.prototype.currentScrollRateWithScrollContainer = function(el, value) {
      var h = el.scrollTop + el.clientHeight + el.getBoundingClientRect().top + value;
      var r = this.documentHeightWithScrollContainer(el, value);
      /** @type {number} */
      var minPxPerValUnit = Math.round(h / r * 100);
      return Math.min(minPxPerValUnit, this.MAX_SCROLL_RATE_THRESHOLD);
    }, t.prototype.computePaddingTop = function(el) {
      var total_pageviews_raw = window.getComputedStyle(el).paddingTop || "0px";
      return parseInt(total_pageviews_raw, 10);
    }, t.prototype.documentHeightWithScrollContainer = function(element, type) {
      return element.scrollHeight + element.getBoundingClientRect().top + type;
    }, t.prototype.getRequestParameters = function() {
      return {
        sr : "" + this.maxScrollRate,
        mdh : "" + this.maxDocumentHeight
      };
    }, t;
  }();
  /**
   * @return {?}
   */
  var emit = function() {
    return (emit = Object.assign || function(result) {
      var src;
      /** @type {number} */
      var i = 1;
      /** @type {number} */
      var argl = arguments.length;
      for (; i < argl; i++) {
        var prop;
        for (prop in src = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(src, prop)) {
            result[prop] = src[prop];
          }
        }
      }
      return result;
    }).apply(this, arguments);
  };
  var RrdGraphDesc = function() {
    /**
     * @param {!Object} options
     * @param {!Object} users
     * @param {!Object} name
     * @param {!Object} n
     * @param {?} limit
     * @param {!Object} cb
     * @param {!Object} key
     * @param {!Object} val
     * @param {?} pattern
     * @param {?} data
     * @param {(Object|number|string)} count
     * @return {undefined}
     */
    function self(options, users, name, n, limit, cb, key, val, pattern, data, count) {
      var p = this;
      /** @type {!Object} */
      this.configuration = options;
      /** @type {!Object} */
      this.analysisEventsTracker = users;
      /** @type {!Object} */
      this.gestureTracker = name;
      /** @type {!Object} */
      this.maxScrollRateTracker = n;
      this.performanceTimingMetrics = limit;
      /** @type {!Object} */
      this.analysisEventsBatch = cb;
      /** @type {!Object} */
      this.analysisEventsRequest = key;
      /** @type {!Object} */
      this.analysisLastEventsRequest = val;
      this.analysisEventRequestParameters = pattern;
      this.sessionRenewer = data;
      /** @type {(Object|number|string)} */
      this.recoveryStorage = count;
      this.eventEmitter = new CubeInterface;
      /**
       * @return {undefined}
       */
      this.visibilityChangeListener = function() {
        if ("hidden" === document.visibilityState) {
          p.sendLastEvents();
        }
      };
      /**
       * @return {undefined}
       */
      this.sendLastEvents = function() {
        if (!p.analysisEventsBatch.isEmpty()) {
          p.analysisLastEventsRequest.send();
        }
      };
    }
    return self.prototype.init = function() {
      var goal = this;
      this.analysisEventsTracker.onEvent(function(type) {
        return goal.processEvent(type);
      });
      this.gestureTracker.onEvent(function(type) {
        return goal.processEvent(type);
      });
      this.maxScrollRateTracker.onEvent(function() {
        goal.analysisEventsBatch.setRequestParametersFromProvider(goal.maxScrollRateTracker);
      });
      this.bindRequests();
    }, self.prototype.bindRequests = function() {
      var br = this;
      this.analysisEventsRequest.setRequestParametersProviders(this.analysisEventsBatch);
      this.analysisEventsRequest.before(function() {
        br.analysisEventsBatch.setRequestParametersFromProvider(br.performanceTimingMetrics);
        br.analysisEventsBatch.enableCompression();
      });
      this.analysisEventsRequest.after(function() {
        br.analysisEventsBatch.clearEvents();
        br.analysisEventsBatch.setRequestParametersFromProvider(br.analysisEventRequestParameters);
      });
      this.analysisLastEventsRequest.setRequestParametersProviders(this.analysisEventsBatch);
      this.analysisLastEventsRequest.before(function() {
        br.analysisEventsBatch.setRequestParametersFromProvider(br.performanceTimingMetrics);
        br.analysisEventsBatch.disableCompression();
      });
      this.analysisLastEventsRequest.onBeaconSuccess(function() {
        br.analysisEventsBatch.clearEvents();
        br.analysisEventsBatch.setRequestParametersFromProvider(br.analysisEventRequestParameters);
      });
      this.analysisLastEventsRequest.onBeaconFailure(function() {
        br.saveLastEvents();
      });
    }, self.prototype.initStates = function() {
      this.analysisEventsBatch.setRequestParametersFromProvider(this.analysisEventRequestParameters);
      this.resetStartTime();
    }, self.prototype.start = function() {
      this.addLastEventsListeners();
      this.analysisEventsTracker.start();
      this.maxScrollRateTracker.start();
      this.gestureTracker.start();
    }, self.prototype.processEvent = function(name) {
      if (this.sessionRenewer.isSessionValid()) {
        this.analysisEventsBatch.addEvent(this.serializeAnalysisEvent(name));
        if (this.analysisEventsBatch.isFull()) {
          this.sendEvents();
        }
        this.eventEmitter.emit("analysisEvent", emit({}, name, {
          typeName : EVENT[name.type]
        }));
      }
    }, self.prototype.serializeAnalysisEvent = function(node) {
      /** @type {!Array} */
      var self = [node.type, this.getRelativeTime()];
      return "x" in node && self.push(node.x), "y" in node && self.push(node.y), "target" in node && self.push(node.target), this.configuration.mouseMoveHeatmapEnabled && ("targetHeatmap" in node && self.push(node.targetHeatmap), "xRel" in node && self.push(node.xRel), "yRel" in node && self.push(node.yRel)), "targetLink" in node && self.push(node.targetLink), "className" in node && self.push(node.className), "typeAttribute" in node && self.push(node.typeAttribute), self;
    }, self.prototype.sendEvents = function() {
      if (!this.analysisEventsBatch.isEmpty()) {
        this.analysisEventsRequest.send();
      }
    }, self.prototype.stop = function() {
      this.removeLastEventsListeners();
      this.analysisEventsTracker.stop();
      this.maxScrollRateTracker.stop();
      this.gestureTracker.stop();
      this.analysisEventsBatch.empty();
    }, self.prototype.clearStates = function() {
      this.sendEvents();
      this.maxScrollRateTracker.reset();
    }, self.prototype.resetStartTime = function() {
      this.startTime = clock.now();
    }, self.prototype.getRelativeTime = function() {
      return clock.now() - this.startTime;
    }, self.prototype.addLastEventsListeners = function() {
      this.addVisibilityChangeListener();
      this.addPageHideListener();
      this.addBlurListener();
    }, self.prototype.removeLastEventsListeners = function() {
      this.removeVisibilityChangeListener();
      this.removePageHideListener();
      this.removeBlurListener();
    }, self.prototype.addVisibilityChangeListener = function() {
      document.addEventListener("visibilitychange", this.visibilityChangeListener);
    }, self.prototype.removeVisibilityChangeListener = function() {
      document.removeEventListener("visibilitychange", this.visibilityChangeListener);
    }, self.prototype.addPageHideListener = function() {
      window.addEventListener("pagehide", this.sendLastEvents);
    }, self.prototype.removePageHideListener = function() {
      window.removeEventListener("pagehide", this.sendLastEvents);
    }, self.prototype.addBlurListener = function() {
      window.addEventListener("blur", this.sendLastEvents);
    }, self.prototype.removeBlurListener = function() {
      window.removeEventListener("blur", this.sendLastEvents);
    }, self.prototype.saveLastEvents = function() {
      try {
        if (!this.analysisEventsBatch.isEmpty()) {
          this.recoveryStorage.save({
            events : this.analysisEventsBatch.getEvents(),
            metadata : this.analysisEventsBatch.getMetadata()
          });
        }
      } catch (t) {
      }
    }, self;
  }();
  /**
   * @return {?}
   */
  var parseArgs = function() {
    return (parseArgs = Object.assign || function(obj) {
      var src;
      /** @type {number} */
      var i = 1;
      /** @type {number} */
      var argl = arguments.length;
      for (; i < argl; i++) {
        var prop;
        for (prop in src = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(src, prop)) {
            obj[prop] = src[prop];
          }
        }
      }
      return obj;
    }).apply(this, arguments);
  };
  /** @type {number} */
  var enter = 15360;
  var Schema = function() {
    /**
     * @param {!Array} name
     * @param {number} val
     * @return {undefined}
     */
    function self(name, val) {
      if (void 0 === name) {
        /** @type {!Array} */
        name = [];
      }
      if (void 0 === val) {
        val = {};
      }
      /** @type {!Array} */
      this.events = name;
      /** @type {number} */
      this.requestParameters = val;
      /** @type {boolean} */
      this.compressed = true;
      this.sizeCounter = new Chartlet(enter);
    }
    return self.prototype.addEvent = function(data) {
      this.sizeCounter.add(encodeURIComponent(JSON.stringify(data)));
      this.events.push(data);
    }, self.prototype.setRequestParametersFromProvider = function(event) {
      var folder = event.getRequestParameters();
      var folderEntity;
      for (folderEntity in folder) {
        if (folder.hasOwnProperty(folderEntity)) {
          this.requestParameters[folderEntity] = folder[folderEntity];
        }
      }
    }, self.prototype.eventsCount = function() {
      return this.events.length;
    }, self.prototype.clearEvents = function() {
      this.sizeCounter.reset();
      /** @type {!Array} */
      this.events = [];
    }, self.prototype.empty = function() {
      this.clearEvents();
    }, self.prototype.isFull = function() {
      return this.sizeCounter.isThresholdReached() || this.eventsCount() >= 50;
    }, self.prototype.isEmpty = function() {
      return 0 === this.events.length;
    }, self.prototype.getEvents = function() {
      return this.events;
    }, self.prototype.getMetadata = function() {
      return this.requestParameters;
    }, self.prototype.getRequestParameters = function() {
      var keys = window.JSON.stringify(this.events);
      return this.compressed ? parseArgs({}, this.requestParameters, {
        e : d.compressToBase64(keys)
      }) : parseArgs({}, this.requestParameters, {
        eu : keys
      });
    }, self.prototype.enableCompression = function() {
      /** @type {boolean} */
      this.compressed = true;
    }, self.prototype.disableCompression = function() {
      /** @type {boolean} */
      this.compressed = false;
    }, self;
  }();
  var CandidateElement = function() {
    /**
     * @param {!Object} shouldRemove
     * @param {(Object|number|string)} $element
     * @return {undefined}
     */
    function Taps(shouldRemove, $element) {
      var i = this;
      /** @type {!Object} */
      this.analysisEventsRecoveryRequest = shouldRemove;
      /** @type {(Object|number|string)} */
      this.recoveryStorage = $element;
      /**
       * @return {undefined}
       */
      this.visibilityChangeHandler = function() {
        if ("visible" === document.visibilityState) {
          i.sendPersistedRecordings();
        }
      };
    }
    return Taps.prototype.start = function() {
      this.sendPersistedRecordings();
      this.addVisibilityChangeListener();
    }, Taps.prototype.stop = function() {
      this.removeVisibilityChangeListener();
    }, Taps.prototype.getRecoveryStorage = function() {
      return this.recoveryStorage;
    }, Taps.prototype.sendPersistedRecordings = function() {
      var e6484 = this.recoveryStorage.recover();
      if (null !== e6484) {
        var e = e6484;
        var opts = e.metadata;
        var es = e.events;
        var options = new Schema(es, opts);
        this.analysisEventsRecoveryRequest.setRequestParametersProviders(options);
        this.analysisEventsRecoveryRequest.before(function() {
          options.enableCompression();
        });
        this.analysisEventsRecoveryRequest.send();
      }
    }, Taps.prototype.addVisibilityChangeListener = function() {
      document.addEventListener("visibilitychange", this.visibilityChangeHandler);
    }, Taps.prototype.removeVisibilityChangeListener = function() {
      document.removeEventListener("visibilitychange", this.visibilityChangeHandler);
    }, Taps;
  }();
  /** @type {string} */
  var lockID = "csLegacyRecovered";
  /** @type {string} */
  var hour = "CSStorageData";
  var make_forecast = function() {
    /**
     * @param {?} pos
     * @param {!Object} obj
     * @return {?}
     */
    var fn = function(pos, obj) {
      return (fn = Object.setPrototypeOf || {
        __proto__ : []
      } instanceof Array && function(win, obj) {
        /** @type {!Object} */
        win.__proto__ = obj;
      } || function(el, obj) {
        var key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            el[key] = obj[key];
          }
        }
      })(pos, obj);
    };
    return function(child, data) {
      /**
       * @return {undefined}
       */
      function base() {
        this.constructor = child;
      }
      fn(child, data);
      child.prototype = null === data ? Object.create(data) : (base.prototype = data.prototype, new base);
    };
  }();
  var EmbeddedTemplateAst = function(t) {
    /**
     * @param {?} i
     * @param {?} array
     * @return {?}
     */
    function model(i, array) {
      var n = t.call(this, i, array) || this;
      return n.onBeaconSuccessCallbacks = [], n.onBeaconFailureCallbacks = [], n;
    }
    return make_forecast(model, t), model.prototype.setRequestPayloadProvider = function(connection) {
      /** @type {string} */
      this.requestPayloadProvider = connection;
    }, model.prototype.onBeaconSuccess = function(t) {
      this.onBeaconSuccessCallbacks.push(t);
    }, model.prototype.onBeaconFailure = function(t) {
      this.onBeaconFailureCallbacks.push(t);
    }, model.prototype.send = function() {
      this.beforeRequestCallbacks.forEach(function(failure) {
        return failure();
      });
      var query = this.retrieveParameters();
      var trimed = result.toQuery(query);
      var originHtml = this.retrievePayload();
      if (this.sendBeacon(trimed, originHtml)) {
        this.onBeaconSuccessCallbacks.forEach(function(failure) {
          return failure();
        });
      } else {
        this.onBeaconFailureCallbacks.forEach(function(failure) {
          return failure();
        });
      }
      this.afterRequestCallbacks.forEach(function(failure) {
        return failure();
      });
    }, model.prototype.retrievePayload = function() {
      return this.requestPayloadProvider ? this.requestPayloadProvider.getRequestPayload() : "";
    }, model.prototype.sendBeacon = function(data, payload) {
      return void 0 !== navigator.sendBeacon && navigator.sendBeacon(this.domainUri + "/" + this.path + "?" + data, payload);
    }, model;
  }(node);
  var Tile = function() {
    /**
     * @param {!Object} options
     * @param {?} auth
     * @param {?} session
     * @param {!Function} logger
     * @param {?} state
     * @param {!Object} node
     * @param {?} localName
     * @param {?} bonjourName
     * @return {undefined}
     */
    function Session(options, auth, session, logger, state, node, localName, bonjourName) {
      /** @type {!Object} */
      this.configuration = options;
      this.visitorService = auth;
      this.sessionService = session;
      /** @type {!Function} */
      this.logger = logger;
      this.eventPathComputation = state;
      /** @type {!Object} */
      this.selector = node;
      this.commandsService = localName;
      this.sessionRenewer = bonjourName;
    }
    return Session.prototype.init = function() {
      !function() {
        localStorage.removeItem(lockID);
        /** @type {!Array} */
        var infoParts = [];
        /** @type {number} */
        var ls = 0;
        for (; ls < localStorage.length; ls = ls + 1) {
          var start = localStorage.key(ls);
          if (0 === start.indexOf(hour)) {
            infoParts.push(start);
          }
        }
        infoParts.forEach(function(mirrorName) {
          return localStorage.removeItem(mirrorName);
        });
      }();
      var schema = new Schema;
      this.analysisEventsRecovery = this.createRecovery();
      this.analysisEventsService = this.createService(schema, this.analysisEventsRecovery.getRecoveryStorage());
      this.analysisEventsService.init();
    }, Session.prototype.onStartTracking = function() {
      this.analysisEventsRecovery.start();
      this.analysisEventsService.start();
    }, Session.prototype.onAfterNaturalPageView = function() {
      this.analysisEventsService.initStates();
    }, Session.prototype.onAfterArtificialPageView = function() {
      this.analysisEventsService.initStates();
    }, Session.prototype.onBeforeArtificialPageView = function() {
      this.analysisEventsService.clearStates();
    }, Session.prototype.onBeforeSessionRenewal = function() {
      this.analysisEventsService.clearStates();
      this.analysisEventsService.stop();
      this.analysisEventsRecovery.stop();
    }, Session.prototype.onOptout = function() {
      this.analysisEventsService.stop();
      this.analysisEventsRecovery.stop();
    }, Session.prototype.createService = function(type, callback) {
      var frame = new WindowIOStream(window);
      var haproxyStats = new HaproxyStats(this.logger);
      var imageMagick = new monitor(this.configuration, this.logger, this.eventPathComputation, this.selector);
      var thalassaAgent = new ThalassaAgent(this.configuration, this.eventPathComputation, new NATGateway(this.logger));
      var step = new Node(this.configuration.getTrackerUri(), "events");
      var dashes = new EmbeddedTemplateAst(this.configuration.getTrackerUri(), "events");
      var nineSliceObject = new LogicGate(this.configuration, this.visitorService, this.sessionService, haproxyStats, frame, n);
      return new RrdGraphDesc(this.configuration, imageMagick, thalassaAgent, haproxyStats, frame, type, step, dashes, nineSliceObject, this.sessionRenewer, callback);
    }, Session.prototype.createRecovery = function() {
      var node = new Node(this.configuration.getTrackerUri(), "events");
      return new CandidateElement(node, new ImageMagick("csAnalysisEventsPersisted", this.logger));
    }, Session;
  }();
  var Lyric = function() {
    /**
     * @param {!Object} drawingToolbar
     * @param {!Object} doodlePopup
     * @param {?} selectedDoodle
     * @param {?} applicationPane
     * @return {undefined}
     */
    function Controller(drawingToolbar, doodlePopup, selectedDoodle, applicationPane) {
      /** @type {!Object} */
      this.lifeCycleEvents = drawingToolbar;
      /** @type {!Object} */
      this.pageViewRequest = doodlePopup;
      this.pii = selectedDoodle;
      this.urlService = applicationPane;
    }
    return Controller.prototype.init = function() {
      /** @type {boolean} */
      this.isNaturalPageViewTriggered = false;
    }, Controller.prototype.triggerNaturalPageView = function() {
      if (!this.isNaturalPageViewTriggered) {
        this.sendNaturalPageView();
      }
    }, Controller.prototype.triggerArtificialPageView = function(service) {
      this.urlService.overridePath(service);
      if (this.isNaturalPageViewTriggered) {
        this.sendArtificialPageView();
      } else {
        this.sendNaturalPageView();
      }
    }, Controller.prototype.sendNaturalPageView = function() {
      /** @type {boolean} */
      this.isNaturalPageViewTriggered = true;
      this.lifeCycleEvents.emitBeforeNaturalPageView();
      this.pageViewRequest.send();
      this.lifeCycleEvents.emitAfterNaturalPageView();
    }, Controller.prototype.sendArtificialPageView = function() {
      this.lifeCycleEvents.emitBeforeArtificialPageView();
      this.pageViewRequest.send();
      this.lifeCycleEvents.emitAfterArtificialPageView();
    }, Controller.prototype.getRequestParameters = function() {
      var license = this.urlService.getUrl();
      return {
        url : this.pii.anonymize(license)
      };
    }, Controller;
  }();
  var license = window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage || window.navigator.systemLanguage || "unknown";
  var PortalDeleteDialog = function() {
    /**
     * @param {?} is_acceptor
     * @param {?} opt
     * @return {undefined}
     */
    function Session(is_acceptor, opt) {
      this.pii = is_acceptor;
      this.cookieDomain = opt;
    }
    return Session.prototype.getRequestParameters = function() {
      return {
        dr : this.get()
      };
    }, Session.prototype.get = function() {
      var t = this.consumeTestingTagRedirectionReferrer();
      return this.pii.anonymize(t || this.getReferrer());
    }, Session.prototype.consumeTestingTagRedirectionReferrer = function() {
      var t = me.get("uxt_referrer_source");
      return null !== t ? (me.remove("uxt_referrer_source", this.cookieDomain), t) : null;
    }, Session.prototype.getReferrer = function() {
      /** @type {string} */
      var url = "";
      try {
        url = window.top.document.referrer;
      } catch (e) {
        if (window.parent) {
          try {
            url = window.parent.document.referrer;
          } catch (e) {
            /** @type {string} */
            url = "";
          }
        }
      }
      return "" === url && (url = document.referrer), url;
    }, Session;
  }();
  var Rectangle = function() {
    /**
     * @param {!Object} options
     * @param {?} doc
     * @param {?} localName
     * @param {?} bonjourName
     * @param {!Object} sessionService
     * @param {?} bep
     * @param {string} call_on_terminate
     * @param {string} context
     * @param {string} url
     * @param {?} presentationId
     * @param {?} data
     * @return {undefined}
     */
    function Session(options, doc, localName, bonjourName, sessionService, bep, call_on_terminate, context, url, presentationId, data) {
      /** @type {!Object} */
      this.configuration = options;
      this.commandsService = doc;
      this.lifeCycleEvents = localName;
      this.visitorService = bonjourName;
      /** @type {!Object} */
      this.sessionService = sessionService;
      this.consentService = bep;
      /** @type {string} */
      this.customVariablesService = call_on_terminate;
      /** @type {string} */
      this.testContextService = context;
      /** @type {string} */
      this.pii = url;
      this.cookieDomain = presentationId;
      this.urlService = data;
    }
    return Session.prototype.init = function() {
      var args = this;
      var _ = new Node(this.configuration.getTrackerUri(), "pageview");
      this.pageViewService = new Lyric(this.lifeCycleEvents, _, this.pii, this.urlService);
      this.pageViewService.init();
      _.setRequestParametersProviders(this.configuration, this.visitorService, this.sessionService, this.testContextService, settings, new PortalDeleteDialog(this.pii, this.cookieDomain), this.pageViewService, this.consentService, b, this.customVariablesService, n);
      this.commandsService.register("trackPageview", function(s) {
        return args.pageViewService.triggerArtificialPageView(s);
      });
      this.commandsService.register("setPath", function(childCompute) {
        return args.urlService.overridePath(childCompute);
      });
      this.commandsService.register("setQuery", function(childCompute) {
        return args.urlService.overrideQuery(childCompute);
      });
    }, Session.prototype.start = function() {
      this.pageViewService.triggerNaturalPageView();
    }, Session.prototype.onBeforeSessionRenewal = function() {
      this.pageViewService.init();
    }, Session;
  }();
  var AudioSys = function() {
    /**
     * @param {?} options
     * @param {!Object} configuration
     * @return {undefined}
     */
    function Cerebrum(options, configuration) {
      this.pathComputation = options;
      /** @type {!Object} */
      this.configuration = configuration;
    }
    return Cerebrum.prototype.getTargetPath = function(obj) {
      var target = jQuery(obj);
      return this.pathComputation.getElementPath(target, {
        dynamicIdRegex : this.configuration.dynamicIdRegex
      });
    }, Cerebrum.prototype.getTargetPathAndTargetLink = function(field) {
      var a = jQuery(field);
      var args = this.pathComputation.getElementPathAndFirstAnchorParent(a, {
        dynamicIdRegex : this.configuration.dynamicIdRegex
      });
      var root = args.path;
      var r = args.firstAnchorParent;
      return {
        path : root,
        targetLink : this.hasValidTargetLink(r) ? r.href : ""
      };
    }, Cerebrum.prototype.hasValidTarget = function(proto) {
      var child = jQuery(proto);
      return this.pathComputation.isValidElement(child);
    }, Cerebrum.prototype.hasValidTargetLink = function(t) {
      return null !== t && t.hasAttribute("href") && !get(t.getAttribute("href"), "#");
    }, Cerebrum;
  }();
  var Constructor = function() {
    /**
     * @param {?} canCreateDiscussions
     * @return {undefined}
     */
    function WorkerDomAdapter(canCreateDiscussions) {
      this.pathComputation = canCreateDiscussions;
    }
    return WorkerDomAdapter.prototype.on = function(name, cb) {
      var i = this;
      return function(prop) {
        if (i.pathComputation.hasValidTarget(prop) && i.targetMatchesSelector(prop, name)) {
          cb(prop);
        }
      };
    }, WorkerDomAdapter.prototype.targetMatchesSelector = function(t, i) {
      var btn = jQuery(t);
      return this.getSelectorMatcher().call(btn, i);
    }, WorkerDomAdapter.prototype.isMatchesSelectorSupported = function() {
      return !!this.getSelectorMatcher();
    }, WorkerDomAdapter.prototype.getSelectorMatcher = function() {
      return Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;
    }, WorkerDomAdapter;
  }();
  /**
   * @return {?}
   */
  var evaluate = function() {
    return (evaluate = Object.assign || function(result) {
      var src;
      /** @type {number} */
      var i = 1;
      /** @type {number} */
      var argl = arguments.length;
      for (; i < argl; i++) {
        var prop;
        for (prop in src = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(src, prop)) {
            result[prop] = src[prop];
          }
        }
      }
      return result;
    }).apply(this, arguments);
  };
  var Array = function() {
    /**
     * @param {!Object} configuration
     * @param {?} initialAssetBundle
     * @param {?} sessionService
     * @return {undefined}
     */
    function Cerebrum(configuration, initialAssetBundle, sessionService) {
      /** @type {!Object} */
      this.configuration = configuration;
      this.visitorService = initialAssetBundle;
      this.sessionService = sessionService;
    }
    return Cerebrum.prototype.getRequestParameters = function() {
      if (!this.visitorService.doesVisitorExist() || !this.sessionService.doesSessionExist()) {
        return {};
      }
      var parent_topic = this.visitorService.getVisitor();
      return evaluate({}, castTemplate(), this.configuration.getRequestParameters(), {
        uu : parent_topic.id,
        sn : "" + parent_topic.visitsCount,
        pn : "" + this.sessionService.getSession().pageNumber
      });
    }, Cerebrum;
  }();
  var $rootScope = {
    SESSION : ["visit", 2],
    PAGE : ["page", 3]
  };
  var Set = function() {
    /**
     * @param {?} headers_to_sign
     * @param {?} header
     * @param {!Object} options
     * @param {?} firstOperand
     * @param {?} opt_lastResultName
     * @return {undefined}
     */
    function constructor(headers_to_sign, header, options, firstOperand, opt_lastResultName) {
      this.pii = headers_to_sign;
      this.cookieDomain = header;
      /** @type {!Object} */
      this.configuration = options;
      this.sameSiteService = firstOperand;
      this.crossDomainSingleIframeService = opt_lastResultName;
      this.customVariablesPage = {};
    }
    return constructor.prototype.set = function(v, data, value, f) {
      var sum;
      var result;
      if (v > 0 && $(data) && $(value)) {
        var charListNotLatin = this.pii.anonymize("" + (isString(data) ? data : String(data)));
        var a = this.pii.anonymize("" + (isString(value) ? value : String(value)));
        if (sum = [charListNotLatin.slice(0, 20), a.slice(0, 255)], result = "" !== value, !isArray(f) || $rootScope.SESSION.indexOf(f) >= 0) {
          var c = this.getCustomVariablesSession();
          if (result) {
            /** @type {!Array} */
            c[v] = sum;
          } else {
            delete c[v];
          }
          config.setRaw(window.JSON.stringify(c), this.cookieDomain, this.configuration, this.sameSiteService, this.crossDomainSingleIframeService);
        }
        if (!isArray(f) || $rootScope.PAGE.indexOf(f) >= 0) {
          if (result) {
            /** @type {!Array} */
            this.customVariablesPage[v] = sum;
          } else {
            delete this.customVariablesPage[v];
          }
        }
      }
    }, constructor.prototype.getRequestParameters = function() {
      var emoticons = this.getCustomVariablesSession();
      var i;
      for (i in this.customVariablesPage) {
        if (this.customVariablesPage.hasOwnProperty(i)) {
          emoticons[i] = this.customVariablesPage[i];
        }
      }
      if (window.JSON.stringify(emoticons).length <= 2) {
        return {};
      }
      var e = {
        cvars : this.getValidCustomVars(emoticons)
      };
      return this.customVariablesPage && window.JSON.stringify(this.customVariablesPage).length > 2 && (e.cvarp = this.getValidCustomVars(this.customVariablesPage)), e;
    }, constructor.prototype.getCustomVariablesSession = function() {
      var bCtor = config.get();
      return null !== bCtor && isFunction(bCtor) ? bCtor : {};
    }, constructor.prototype.getValidCustomVars = function(cls) {
      var name;
      for (name in cls) {
        if (cls.hasOwnProperty(name)) {
          /** @type {number} */
          var i = parseInt(name, 10);
          var cl = cls[name];
          var value = cl[0];
          var col = cl[1];
          if (!contains(i, 1, 20) || value.length > 20 || col.length > 255) {
            delete cls[name];
          }
        }
      }
      var add = function(value) {
        var fqPropertyName;
        for (fqPropertyName in value) {
          return false;
        }
        return true;
      }(cls) ? [] : cls;
      return window.JSON.stringify(add);
    }, constructor;
  }();
  var Router = function() {
    /**
     * @param {?} name
     * @param {string} options
     * @param {?} urls
     * @param {?} version
     * @return {undefined}
     */
    function Tracker(name, options, urls, version) {
      this.commandsService = name;
      /** @type {string} */
      this.customVariablesService = options;
      this.crossDomainSingleIframeService = urls;
      this.cookieDomain = version;
    }
    return Tracker.prototype.init = function() {
      var LacesArray = this;
      this.commandsService.register("setCustomVariable", function(e, i, n, w) {
        LacesArray.customVariablesService.set(e, i, n, w);
      });
    }, Tracker.prototype.onOptout = function() {
      config.remove(this.cookieDomain, this.crossDomainSingleIframeService);
    }, Tracker;
  }();
  var loader = function() {
    /**
     * @return {undefined}
     */
    function StringIntArray() {
    }
    return StringIntArray.prototype.set = function(arg) {
      this.activeTests = arg.tests;
      this.testingTagVersion = arg.tagVersion;
    }, StringIntArray.prototype.getRequestParameters = function() {
      return this.activeTests && this.testingTagVersion ? {
        uxt : function(buildInTemplates) {
          return window.JSON.stringify(buildInTemplates.map(function(t) {
            return [t.id, t.version];
          }));
        }(this.activeTests),
        uxtv : this.testingTagVersion
      } : {};
    }, StringIntArray;
  }();
  var Function = function() {
    /**
     * @param {?} server
     * @param {string} connection
     * @return {undefined}
     */
    function Controller(server, connection) {
      this.commandsService = server;
      /** @type {string} */
      this.testContextService = connection;
    }
    return Controller.prototype.init = function() {
      var LacesArray = this;
      this.commandsService.register("setTestContext", function(e) {
        return LacesArray.testContextService.set(e);
      });
    }, Controller;
  }();
  var Spooler = function() {
    /**
     * @param {!Function} logger
     * @return {undefined}
     */
    function Request(logger) {
      /** @type {!Function} */
      this.logger = logger;
    }
    return Request.prototype.onLoad = function(callback) {
      /** @type {!Function} */
      this.onLoadCallback = callback;
    }, Request.prototype.start = function() {
      var loader = this;
      this.onDocumentLoaded(function() {
        loader.logger.tryToExecute("onLoad", function() {
          loader.onLoadCallback();
        })();
      });
    }, Request.prototype.onDocumentLoaded = function(t) {
      /**
       * @return {undefined}
       */
      function $__jsx_onload() {
        document.removeEventListener("DOMContentLoaded", $__jsx_onload);
        window.removeEventListener("load", $__jsx_onload);
        t();
      }
      if ("complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll) {
        setTimeout(t);
      } else {
        document.addEventListener("DOMContentLoaded", $__jsx_onload);
        window.addEventListener("load", $__jsx_onload);
      }
    }, Request;
  }();
  var EventDispatcher = function() {
    /**
     * @param {?} is_acceptor
     * @param {?} sessionService
     * @param {?} bonjourName
     * @param {?} ssrc
     * @param {?} published
     * @return {undefined}
     */
    function Session(is_acceptor, sessionService, bonjourName, ssrc, published) {
      this.visitorService = is_acceptor;
      this.sessionService = sessionService;
      this.commandsService = bonjourName;
      this.cookieDomain = ssrc;
      this.urlService = published;
    }
    return Session.prototype.init = function() {
      var self = this;
      this.commandsService.register("clearSession", function() {
        return self.sessionService.removeSession(self.cookieDomain);
      });
      this.commandsService.register("extendSession", function() {
        return self.sessionService.extendSessionPeriodically(self.urlService.getUrl());
      });
    }, Session.prototype.onBeforeNaturalPageView = function() {
      this.visitorService.createOrUpdateVisitor();
      this.sessionService.createOrUpdateSession(this.urlService.getUrl());
    }, Session.prototype.onBeforeArtificialPageView = function() {
      this.visitorService.createOrUpdateVisitor();
      this.sessionService.createOrUpdateSession(this.urlService.getUrl());
    }, Session.prototype.onOptout = function() {
      this.visitorService.removeCurrentVisitor();
      this.sessionService.removeCurrentSession();
    }, Session;
  }();
  var AABB = function() {
    /**
     * @param {!Object} sessionService
     * @return {undefined}
     */
    function Session(sessionService) {
      /** @type {!Object} */
      this.sessionService = sessionService;
    }
    return Session.prototype.onSessionExpired = function(dataSet) {
      /** @type {!Function} */
      this.onSessionExpiredCallback = dataSet;
    }, Session.prototype.isSessionValid = function() {
      var t = this.sessionService.hasValidSession();
      return !t && this.canRenewSession() ? (this.lastSessionRenewalTime = clock.now(), this.onSessionExpiredCallback(), this.sessionService.hasValidSession()) : t;
    }, Session.prototype.canRenewSession = function() {
      return !isArray(this.lastSessionRenewalTime) || clock.now() - this.lastSessionRenewalTime > 6E4;
    }, Session;
  }();
  var SimpleModule = function() {
    /**
     * @param {!Object} url
     * @param {!Object} newConfig
     * @return {undefined}
     */
    function init(url, newConfig) {
      /** @type {!Object} */
      this.eMerchandisingRequest = url;
      /** @type {!Object} */
      this.configuration = newConfig;
      /** @type {!Array} */
      this.products = [];
    }
    return init.prototype.start = function() {
      this.collectEMerchandisingData();
      this.sendEMerchandisingData();
    }, init.prototype.clearProducts = function() {
      /** @type {!Array} */
      this.products = [];
    }, init.prototype.getRequestPayload = function() {
      return JSON.stringify({
        targetUrl : this.targetUrl,
        windowWidth : settings.windowWidth(),
        windowHeight : settings.windowHeight(),
        products : this.products
      });
    }, init.prototype.collectEMerchandisingData = function() {
      var report = this;
      /** @type {string} */
      this.targetUrl = window.location.href;
      _(document.querySelectorAll("a")).filter(function(qrContainer) {
        return qrContainer.offsetWidth > 0 && qrContainer.offsetHeight > 0;
      }).forEach(function(e) {
        var data = {
          targetPath : evt.getElementPath(e, {
            dynamicIdRegex : report.configuration.dynamicIdRegex
          }),
          fullPath : evt.getElementPath(e, {
            fullPath : true
          }),
          width : e.offsetWidth,
          height : e.offsetHeight,
          href : e.href
        };
        var pixels = e.querySelector("img");
        if (null !== pixels) {
          data.imgSrc = pixels.src;
        }
        report.products.push(data);
      });
    }, init.prototype.sendEMerchandisingData = function() {
      this.eMerchandisingRequest.send();
    }, init;
  }();
  var ValidatorChain = function() {
    /**
     * @param {!Object} config
     * @param {!Function} logger
     * @param {?} force_promise
     * @param {?} do_not_create
     * @param {string} peopleID
     * @return {undefined}
     */
    function get(config, logger, force_promise, do_not_create, peopleID) {
      /** @type {!Object} */
      this.configuration = config;
      /** @type {!Function} */
      this.logger = logger;
      this.compressor = force_promise;
      this.basicRequestParameters = do_not_create;
      /** @type {string} */
      this.customVariablesService = peopleID;
    }
    return get.prototype.init = function() {
      var request = this.createEMerchandisingPostRequest(this.compressor);
      request.setRequestParametersProviders(this.basicRequestParameters, this.customVariablesService);
      this.eMerchandisingService = new SimpleModule(request, this.configuration);
      request.setRequestPayloadProvider(this.eMerchandisingService);
      request.setRequestHeader({
        name : "Access-Control-Expose-Headers",
        value : "Content-compression"
      });
      request.setRequestHeader({
        name : "Content-type",
        value : "text/plain; charset=UTF-8"
      });
      request.setRequestHeader({
        name : "Content-compression",
        value : "LZString"
      });
    }, get.prototype.onStartTracking = function() {
      this.eMerchandisingService.start();
    }, get.prototype.onBeforeSessionRenewal = function() {
      this.eMerchandisingService.clearProducts();
    }, get.prototype.onBeforeArtificialPageView = function() {
      this.eMerchandisingService.clearProducts();
    }, get.prototype.onAfterArtificialPageView = function() {
      this.eMerchandisingService.start();
    }, get.prototype.createEMerchandisingPostRequest = function(options) {
      return new Parser(this.configuration.getTrackerUri(), "display", this.logger, options);
    }, get;
  }();
  var recorder;
  var Application = function() {
    /**
     * @param {string} position
     * @return {undefined}
     */
    function Plugin(position) {
      /** @type {string} */
      this.location = position;
    }
    return Plugin.prototype.overridePath = function(value) {
      if (isArray(value) && isString(value)) {
        this.path = "" === value ? void 0 : value;
      }
    }, Plugin.prototype.overrideQuery = function(value) {
      if (isArray(value) && isString(value)) {
        /** @type {string} */
        this.query = value;
      }
    }, Plugin.prototype.getUrl = function() {
      return toString(this.location, this.path, this.query);
    }, Plugin;
  }();
  var conn7 = clone(0);
  !function(recorder) {
    /**
     * @return {?}
     */
    recorder.isRecording = function() {
      return window.ClickTaleIsRecording && window.ClickTaleIsRecording();
    };
    /**
     * @return {undefined}
     */
    recorder.stopRecording = function() {
      if (window.ClickTaleStop) {
        window.ClickTaleStop();
      }
    };
    /**
     * @param {?} t
     * @return {undefined}
     */
    recorder.triggerLogicalPageView = function(t) {
      if (window.ClickTaleLogicalWithUploadPage) {
        window.ClickTaleLogicalWithUploadPage(t);
      }
    };
    /**
     * @param {string} type
     * @return {undefined}
     */
    recorder.sendPageEvent = function(type) {
      if (window.ClickTaleEvent) {
        window.ClickTaleEvent(type);
      }
    };
    /**
     * @param {string} type
     * @return {undefined}
     */
    recorder.sendEventTriggerRecording = function(type) {
      if (window.ClickTaleEventTrigger) {
        window.ClickTaleEventTrigger(type);
      }
    };
  }(recorder || (recorder = {}));
  var moduleGenerator;
  var Sound = function() {
    /**
     * @param {!Object} args
     * @param {!Object} ref
     * @param {?} force_promise
     * @param {?} do_not_create
     * @param {?} peopleID
     * @return {undefined}
     */
    function get(args, ref, force_promise, do_not_create, peopleID) {
      /** @type {!Object} */
      this.configuration = args;
      /** @type {!Object} */
      this.pageEventRequest = ref;
      this.compressor = force_promise;
      this.visitorService = do_not_create;
      this.sessionService = peopleID;
    }
    return get.prototype.init = function() {
      /** @type {boolean} */
      this.isClicktalePtcLoaded = false;
      /** @type {boolean} */
      this.isContentSquareDataCollectionStarted = false;
    }, get.prototype.loadClicktalePtc = function() {
      if (!this.isClicktalePtcLoaded && this.configuration.ptcDomain && this.configuration.ptcGuid) {
        this.doLoadClicktalePtc();
      }
    }, get.prototype.getSessionData = function() {
      var projectId = this.configuration.projectId;
      var simonFull = this.visitorService.getVisitor();
      return {
        projectId : projectId,
        userId : simonFull.id,
        sessionNumber : simonFull.visitsCount,
        pageNumber : this.sessionService.getSession().pageNumber
      };
    }, get.prototype.trackPageEvent = function(type) {
      if (removePassingAssertion(this.configuration)) {
        this.pageEventRequestParameter = {
          eventName : type,
          isETR : false
        };
        this.sendPageEvent();
        if (!remove(this.configuration)) {
          recorder.sendPageEvent(type);
        }
      }
    }, get.prototype.trackEventTriggerRecording = function(type) {
      if (removePassingAssertion(this.configuration)) {
        this.pageEventRequestParameter = {
          eventName : type,
          isETR : true
        };
        this.sendPageEvent();
        if (!remove(this.configuration)) {
          recorder.sendEventTriggerRecording(type);
        }
      }
    }, get.prototype.startDataCollection = function(saveNotifs) {
      if (!this.isContentSquareDataCollectionStarted) {
        if (remove(this.configuration)) {
          saveNotifs();
          /** @type {boolean} */
          this.isContentSquareDataCollectionStarted = true;
        }
      }
    }, get.prototype.doLoadClicktalePtc = function() {
      /** @type {boolean} */
      this.isClicktalePtcLoaded = true;
      var userJoinedText = this.buildScriptElement();
      document.getElementsByTagName("head")[0].appendChild(userJoinedText);
    }, get.prototype.buildScriptElement = function() {
      /** @type {!Element} */
      var script = document.createElementNS("http://www.w3.org/1999/xhtml", "script");
      return script.async = true, script.crossOrigin = "anonymous", script.type = "text/javascript", this.configuration.ptcSha512 && this.configuration.ptcSnapshotPath ? (script.integrity = "sha512-" + this.configuration.ptcSha512, script.src = "https://" + this.configuration.ptcDomain + "/" + this.configuration.ptcSnapshotPath + "/ptc.js") : script.src = "https://" + this.configuration.ptcDomain + "/ptc/" + this.configuration.ptcGuid + ".js", script;
    }, get.prototype.getRequestParameters = function() {
      return {
        value : this.compressor.compressSync(this.pageEventRequestParameter.eventName),
        isETR : "" + this.pageEventRequestParameter.isETR
      };
    }, get.prototype.sendPageEvent = function() {
      this.pageEventRequest.send();
    }, get;
  }();
  var SnappingData = function() {
    /**
     * @param {!Object} options
     * @param {string} version
     * @param {?} index
     * @param {?} store
     * @param {?} dependencyName
     * @param {?} callback
     * @param {?} redirect
     * @param {?} url
     * @return {undefined}
     */
    function get(options, version, index, store, dependencyName, callback, redirect, url) {
      /** @type {!Object} */
      this.configuration = options;
      /** @type {string} */
      this.compressor = version;
      this.visitorService = index;
      this.sessionService = store;
      this.urlService = dependencyName;
      this.commandsService = callback;
      this.basicParameters = redirect;
      this.startDataCollectionCallback = url;
    }
    return get.prototype.init = function() {
      var t = this;
      var parent = new Node(this.configuration.getTrackerUri(), "pageEvent");
      this.clicktaleIntegrationService = new Sound(this.configuration, parent, this.compressor, this.visitorService, this.sessionService);
      this.clicktaleIntegrationService.init();
      this.loadPtcForDualCollection();
      parent.setRequestParametersProviders(this.basicParameters, this.clicktaleIntegrationService);
      this.commandsService.register("getSessionData", function() {
        return t.clicktaleIntegrationService.getSessionData();
      });
      this.commandsService.register("trackPageEvent", function(unbindFinished) {
        t.clicktaleIntegrationService.trackPageEvent(unbindFinished);
      });
      this.commandsService.register("trackEventTriggerRecording", function(unbindFinished) {
        t.clicktaleIntegrationService.trackEventTriggerRecording(unbindFinished);
      });
      this.commandsService.register("startDataCollection", function() {
        t.clicktaleIntegrationService.startDataCollection(t.startDataCollectionCallback);
      });
    }, get.prototype.loadPtcForDualCollection = function() {
      if (remove(this.configuration)) {
        this.clicktaleIntegrationService.loadClicktalePtc();
      }
    }, get.prototype.onAfterNaturalPageView = function() {
      if (!(this.configuration.tagDeploymentMode !== conn7.TagDeploymentMode.LoadClicktalePtc || this.sessionService.isReplayRecorded())) {
        this.clicktaleIntegrationService.loadClicktalePtc();
      }
    }, get.prototype.onAfterArtificialPageView = function() {
      if (!this.sessionService.isReplayRecorded() && recorder.isRecording() && this.configuration.tagDeploymentMode === conn7.TagDeploymentMode.LoadClicktalePtc) {
        recorder.triggerLogicalPageView(this.urlService.getUrl());
      }
    }, get.prototype.onAfterSessionRenewal = function() {
      if (!this.sessionService.isReplayRecorded() && recorder.isRecording()) {
        recorder.triggerLogicalPageView(this.urlService.getUrl());
      }
    }, get.prototype.onOptout = function() {
      if (recorder.isRecording()) {
        recorder.stopRecording();
      }
    }, get;
  }();
  var User = function() {
    /**
     * @param {?} bep
     * @param {?} call_on_terminate
     * @param {!Object} database
     * @param {!Function} logger
     * @param {?} name
     * @param {?} thread
     * @param {!Object} options
     * @param {!Object} version
     * @param {!Object} data
     * @param {!Object} server
     * @param {?} account
     * @param {?} config
     * @param {?} domain
     * @param {?} type
     * @param {!Object} published
     * @return {undefined}
     */
    function Session(bep, call_on_terminate, database, logger, name, thread, options, version, data, server, account, config, domain, type, published) {
      var rcSlice = this;
      this.visitorService = bep;
      this.sessionService = call_on_terminate;
      /** @type {!Object} */
      this.lifeCycleEvents = database;
      /** @type {!Function} */
      this.logger = logger;
      this.commandsService = name;
      this.commandsModule = thread;
      /** @type {!Object} */
      this.configuration = options;
      /** @type {!Object} */
      this.optoutModule = version;
      /** @type {!Object} */
      this.optoutService = data;
      /** @type {!Object} */
      this.consentModule = server;
      this.consentService = account;
      this.pii = config;
      this.cookieDomain = domain;
      this.sameSiteService = type;
      /** @type {!Object} */
      this.crossDomainSingleIframeService = published;
      /**
       * @return {undefined}
       */
      this.startDataCollection = function() {
        rcSlice.pageViewModule.start();
        rcSlice.loadTracker.start();
      };
    }
    return Session.prototype.start = function() {
      var self = this;
      if (this.optoutModule.init(), this.optoutService.init(), !this.optoutService.isActive()) {
        var a = new AABB(this.sessionService);
        var tileSize = new AudioSys(evt, this.configuration);
        var j = new Constructor(tileSize);
        var i = new ScopeChain(function(message) {
          self.logger.logMessage(message);
        });
        var ms = new Array(this.configuration, this.visitorService, this.sessionService);
        var tile = new Tile(this.configuration, this.visitorService, this.sessionService, this.logger, tileSize, j, this.commandsService, a);
        var stepMonitor = new Monitor(this.commandsService, this.sessionService, this.configuration, ms, this.logger, i, this.pii);
        var c = new LockConstraint(this.visitorService, this.sessionService, this.commandsService);
        var output = new String(this.configuration, this.visitorService, this.sessionService, this.commandsService, this.pii, a);
        var options = new Set(this.pii, this.cookieDomain, this.configuration, this.sameSiteService, this.crossDomainSingleIframeService);
        var router = new Router(this.commandsService, options, this.crossDomainSingleIframeService, this.cookieDomain);
        var l = new loader;
        var handler = new Function(this.commandsService, l);
        var uid = new Application(window.location);
        this.pageViewModule = new Rectangle(this.configuration, this.commandsService, this.lifeCycleEvents, this.visitorService, this.sessionService, this.consentService, options, l, this.pii, this.cookieDomain, uid);
        var self = new EventDispatcher(this.visitorService, this.sessionService, this.commandsService, this.cookieDomain, uid);
        var date = new SnappingData(this.configuration, i, this.visitorService, this.sessionService, uid, this.commandsService, ms, this.startDataCollection);
        if (this.loadTracker = new Spooler(this.logger), this.consentModule.init(), c.init(), stepMonitor.init(), output.init(), router.init(), handler.init(), this.pageViewModule.init(), self.init(), date.init(), this.lifeCycleEvents.addListeners(self, this.commandsModule, tile, this.consentModule, c, router, this.pageViewModule, date), Date.isSupported()) {
          var d = new Date(this.sessionService, this.configuration, this.logger, i, j, this.consentService, ms, this.commandsService, this.pii, a);
          d.init();
          this.lifeCycleEvents.addListeners(d);
        }
        if (this.configuration.eMerchandisingEnabled) {
          var validator = new ValidatorChain(this.configuration, this.logger, i, ms, options);
          validator.init();
          this.lifeCycleEvents.addListeners(validator);
        }
        tile.init();
        a.onSessionExpired(function() {
          self.lifeCycleEvents.emitBeforeSessionRenewal();
          self.doStart(true);
          self.lifeCycleEvents.emitAfterSessionRenewal();
        });
        this.doStart();
      }
    }, Session.prototype.doStart = function(y) {
      var e = this;
      if (void 0 === y) {
        /** @type {boolean} */
        y = false;
      }
      this.commandsService.start();
      this.loadTracker.onLoad(function() {
        e.lifeCycleEvents.emitStartTracking();
      });
      if (!(remove(this.configuration) && !y)) {
        this.startDataCollection();
      }
    }, Session;
  }();
  var Signal = function() {
    /**
     * @param {!Object} options
     * @param {?} job
     * @param {string} context
     * @param {!Object} scene
     * @param {!Function} type
     * @param {?} range
     * @param {?} styles
     * @param {?} basedOn
     * @return {undefined}
     */
    function constructor(options, job, context, scene, type, range, styles, basedOn) {
      /** @type {!Object} */
      this.configuration = options;
      this.visitorService = job;
      /** @type {string} */
      this.exclusionService = context;
      /** @type {!Object} */
      this.outdatedState = scene;
      /** @type {!Function} */
      this.allowSubdomainsChange = type;
      this.crossDomainService = range;
      this.crossDomainSingleIframeService = styles;
      this.forceInclusionService = basedOn;
    }
    return constructor.prototype.compute = function(t) {
      var allTraps = this;
      if (this.configuration.crossDomainTracking) {
        if (this.configuration.crossDomainSingleIframeTracking) {
          this.crossDomainSingleIframeService.start(function() {
            return allTraps.computeState(t);
          });
        } else {
          this.crossDomainService.applyUpToDate(function() {
            return allTraps.computeState(t);
          });
        }
      } else {
        this.computeState(t);
      }
    }, constructor.prototype.computeState = function(asyncFunction) {
      this.allowSubdomainsChange.handle();
      this.outdatedState.clear();
      if (this.isIncluded()) {
        this.outdatedState.restoreClearedVisitor();
        asyncFunction(true);
      } else {
        this.exclusionService.exclude(this.configuration);
        asyncFunction(false);
      }
    }, constructor.prototype.isIncluded = function() {
      var enc_length = Number(this.configuration.sampleRate);
      return this.forceInclusionService.isForceIncluded() || !this.exclusionService.isExcluded() && this.visitorService.doesVisitorExist() || !this.exclusionService.isExcluded() && enc_length;
    }, constructor;
  }();
  !function(RandomStringService) {
    /**
     * @return {?}
     */
    RandomStringService.generate = function() {
      var sizeDiv1 = function(param_hash) {
        /** @type {number} */
        var hash = 0;
        /** @type {number} */
        var i = 0;
        for (; i < param_hash.length; i = i + 1) {
          /** @type {number} */
          hash = param_hash.charCodeAt(i) + (hash << 6) + (hash << 16) - hash;
        }
        return Math.abs(hash);
      }(navigator.userAgent + navigator.language + navigator.platform).toString(16).slice(-4);
      /** @type {number} */
      var candidatesWidth = (new Date).getTime();
      return "xxxxxxxx-hhhh-axxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(object) {
        /** @type {number} */
        var u = (candidatesWidth + 16 * Math.random()) % 16 | 0;
        return candidatesWidth = Math.floor(candidatesWidth / 16), ("x" === object ? u : 7 & u | 8).toString(16);
      }).replace("hhhh", sizeDiv1);
    };
  }(moduleGenerator || (moduleGenerator = {}));
  var metadata;
  var Cursor = function() {
    /**
     * @param {!Object} options
     * @param {!Object} bep
     * @param {?} call_on_terminate
     * @param {?} type
     * @param {?} published
     * @return {undefined}
     */
    function Session(options, bep, call_on_terminate, type, published) {
      /** @type {!Object} */
      this.configuration = options;
      /** @type {!Object} */
      this.sessionService = bep;
      this.cookieDomain = call_on_terminate;
      this.sameSiteService = type;
      this.crossDomainSingleIframeService = published;
    }
    return Session.prototype.createOrUpdateVisitor = function() {
      var value = this.getVisitor();
      if (null === value) {
        value = this.createVisitor();
        this.sessionService.removeCurrentSession();
      } else {
        value = this.manageSameSiteForVisitor(value);
      }
      this.updateVisitor(value);
      this.setVisitor(value);
    }, Session.prototype.createVisitor = function() {
      return {
        id : moduleGenerator.generate(),
        visitsCount : 0,
        appliedTrackingDraw : this.configuration.lastTrackingDraw,
        creationTimestamp : floor(),
        lastVisitTimestamp : 0,
        hitTimestamp : 0,
        expires : clock.now() + this.configuration.visitorCookieTimeout,
        sameSite : $tar.computeSameSite(this.configuration),
        secured : $tar.computeSecured(this.configuration)
      };
    }, Session.prototype.updateVisitor = function(data) {
      var index = floor();
      if (!this.sessionService.doesSessionExist()) {
        data.visitsCount += 1;
        data.lastVisitTimestamp = index;
      }
      data.hitTimestamp = index;
      data.appliedTrackingDraw = this.configuration.lastTrackingDraw;
    }, Session.prototype.getRequestParameters = function() {
      if (this.doesVisitorExist()) {
        var data = this.getVisitor();
        return {
          uu : data.id,
          sn : "" + data.visitsCount,
          lv : "" + data.lastVisitTimestamp,
          lhd : "" + data.lastVisitTimestamp,
          hd : "" + data.hitTimestamp
        };
      }
      return {};
    }, Session.prototype.getVisitor = function() {
      return r.get();
    }, Session.prototype.setVisitor = function(obj) {
      r.set(obj, this.cookieDomain, this.sameSiteService, this.crossDomainSingleIframeService);
    }, Session.prototype.doesVisitorExist = function() {
      return null !== r.get();
    }, Session.prototype.removeCurrentVisitor = function() {
      this.removeVisitor(this.cookieDomain);
    }, Session.prototype.removeVisitor = function(obj) {
      r.remove(obj, this.crossDomainSingleIframeService);
    }, Session.prototype.visitorHasSameSiteDefined = function(data) {
      return isArray(data.sameSite) && isArray(data.secured);
    }, Session.prototype.isProtocolMigratedToHttps = function(data) {
      return this.visitorHasSameSiteDefined(data) && data.secured === opts.No && "https:" === $tar.getUrlProtocol();
    }, Session.prototype.visitorUpgradesToBrowserSupportingSameSite = function(data) {
      return this.visitorHasSameSiteDefined(data) && data.sameSite === win.NotSet && this.sameSiteService.isSameSiteSupported();
    }, Session.prototype.migrateSameSiteVisitor = function(data) {
      return data.sameSite = $tar.computeSameSite(this.configuration), data.secured = $tar.computeSecured(this.configuration), data;
    }, Session.prototype.manageSameSiteForVisitor = function(value) {
      if (this.configuration.crossDomainTracking) {
        if (!this.visitorHasSameSiteDefined(value)) {
          var rewriteVisitor = this.createVisitor();
          return this.sessionService.removeCurrentSession(), rewriteVisitor;
        }
        if (this.isProtocolMigratedToHttps(value)) {
          return this.migrateSameSiteVisitor(value);
        }
      } else {
        if (!this.visitorHasSameSiteDefined(value)) {
          return this.migrateSameSiteVisitor(value);
        }
      }
      return this.visitorUpgradesToBrowserSupportingSameSite(value) ? this.migrateSameSiteVisitor(value) : value;
    }, Session;
  }();
  var Group = function() {
    /**
     * @param {!Object} options
     * @param {!Object} version
     * @param {?} type
     * @param {?} username
     * @param {?} email
     * @param {?} callback
     * @return {undefined}
     */
    function Session(options, version, type, username, email, callback) {
      /** @type {!Object} */
      this.configuration = options;
      /** @type {!Object} */
      this.sessionStorage = version;
      this.forceInclusionService = type;
      this.cookieDomain = username;
      this.sameSiteService = email;
      this.crossDomainSingleIframeService = callback;
      /** @type {boolean} */
      this.triggerSessionReplayOngoing = false;
      /** @type {null} */
      this.extendedSessionTimeoutId = null;
      /** @type {number} */
      this.sessionExtensionCount = 0;
    }
    return Session.prototype.upgradeDeprecatedRecordingStateInCookie = function(d) {
      if ("0" === d.recordingState || "2" === d.recordingState) {
        if ("0" === d.recordingState) {
          /** @type {string} */
          d.recordingState = "1";
        } else {
          if ("2" === d.recordingState) {
            /** @type {string} */
            d.recordingState = "3";
          }
        }
        var value = this.sessionStorage.toString(d);
        self.setCookie("_cs_s", value, this.cookieDomain, 18E5, this.configuration, this.sameSiteService);
        this.crossDomainSingleIframeService.setCookie("_cs_s", value, 18E5);
      }
    }, Session.prototype.setDynamicVariablesService = function(canCreateDiscussions) {
      this.dynamicVariablesService = canCreateDiscussions;
    }, Session.prototype.createOrUpdateSession = function(lastPage) {
      if (void 0 === lastPage) {
        /** @type {string} */
        lastPage = window.location.href;
      }
      this.stopSessionExtension();
      this.beginSession = clock.now();
      /** @type {number} */
      this.sessionExtensionCount = 0;
      var right = this.getSessionWithoutCache();
      if (null === right) {
        right = this.buildSessionObject();
      } else {
        this.upgradeDeprecatedRecordingStateInCookie(right);
      }
      this.incrementSessionPageNumber(right);
      this.setSession(right);
      this.setTriggerSessionReplay(right, lastPage);
    }, Session.prototype.buildSessionObject = function() {
      return {
        pageNumber : 0,
        recordingState : this.computeRecordingState()
      };
    }, Session.prototype.setTriggerSessionReplay = function(fn, value) {
      if (this.configuration.triggerSessionReplayEnabled && "3" !== fn.recordingState) {
        this.triggerSessionReplayOngoing = this.doesUrlTriggerSessionReplay(value, this.configuration.triggerSessionReplayRegex);
      }
    }, Session.prototype.createExtendedSession = function(s) {
      var e = this.buildSessionObject();
      return this.incrementSessionPageNumber(e), this.setTriggerSessionReplay(e, s), e;
    }, Session.prototype.computeRecordingState = function() {
      return this.isCompressionSupported() ? this.forceInclusionService.isForceReplayRecorded() ? "3" : this.computeRecordingType(this.configuration.replayRecordingRate) : "1";
    }, Session.prototype.isCompressionSupported = function() {
      var emptyScopeChain = new ScopeChain(empty);
      var e = emptyScopeChain.isSupported();
      return emptyScopeChain.terminateWorker(), e;
    }, Session.prototype.computeRecordingType = function(num) {
      return rand() < num && Date.isSupported() ? "3" : "1";
    }, Session.prototype.doesUrlTriggerSessionReplay = function(type, dt) {
      return !!dt && dt.test(type);
    }, Session.prototype.incrementSessionPageNumber = function(event) {
      event.pageNumber += 1;
    }, Session.prototype.isReplayRecorded = function() {
      return this.doesSessionExist() && ("3" === this.getSession().recordingState || this.triggerSessionReplayOngoing);
    }, Session.prototype.removeCurrentSession = function() {
      this.removeSession(this.cookieDomain);
    }, Session.prototype.getRequestParameters = function() {
      if (this.doesSessionExist()) {
        var result = this.getSession();
        var regExp = result.recordingState;
        return this.triggerSessionReplayOngoing && (regExp = "5"), {
          re : regExp,
          pn : "" + result.pageNumber
        };
      }
      return {};
    }, Session.prototype.getSession = function() {
      return this.sessionStorage.get();
    }, Session.prototype.getSessionWithoutCache = function() {
      return this.sessionStorage.get(true);
    }, Session.prototype.doesSessionExist = function() {
      return null !== this.sessionStorage.get();
    }, Session.prototype.setSession = function(key, data) {
      if (void 0 === data) {
        /** @type {number} */
        data = 18E5;
      }
      this.sessionStorage.set(key, this.configuration, data);
    }, Session.prototype.removeSession = function(cb) {
      this.sessionStorage.remove(cb);
    }, Session.prototype.hasValidSession = function() {
      var t = this.sessionStorage.getRawSession();
      return this.sessionStorage.isValid(t);
    }, Session.prototype.extendSessionPeriodically = function(api_spec) {
      if (!this.extendedSessionTimeoutId) {
        this.extendSession(api_spec);
      }
    }, Session.prototype.extendSession = function(req) {
      if (this.hasReachedMaxDuration()) {
        this.stopSessionExtension();
      } else {
        var session = this.getSession();
        if (null === session) {
          session = this.createExtendedSession(req);
        }
        this.setSession(session, 174E4);
        this.sendDynamicVar();
        this.scheduleNextSessionUpdate(req);
      }
    }, Session.prototype.scheduleNextSessionUpdate = function(raw) {
      var that = this;
      this.extendedSessionTimeoutId = window.setTimeout(function() {
        that.extendSession(raw);
      }, 174E4);
    }, Session.prototype.hasReachedMaxDuration = function() {
      return 1434E4 - (clock.now() + 18E5 - this.beginSession) < 0;
    }, Session.prototype.stopSessionExtension = function() {
      if (this.extendedSessionTimeoutId) {
        window.clearTimeout(this.extendedSessionTimeoutId);
        /** @type {null} */
        this.extendedSessionTimeoutId = null;
      }
    }, Session.prototype.sendDynamicVar = function() {
      this.sessionExtensionCount += 1;
      this.dynamicVariablesService.trackDynamicVariable("session_expiry_update", this.sessionExtensionCount);
    }, Session;
  }();
  var Rule = function() {
    /**
     * @param {!Object} options
     * @param {?} doc
     * @param {string} localName
     * @param {?} bonjourName
     * @return {undefined}
     */
    function Session(options, doc, localName, bonjourName) {
      /** @type {!Object} */
      this.configuration = options;
      this.visitorService = doc;
      /** @type {string} */
      this.exclusionService = localName;
      this.cookieDomain = bonjourName;
    }
    return Session.prototype.clear = function() {
      if (this.isVisitorOutdated()) {
        this.savedVisitor = this.visitorService.getVisitor();
        this.visitorService.removeVisitor(this.cookieDomain);
      }
      if (this.isExclusionOutdated()) {
        this.exclusionService.removeExclusion();
      }
    }, Session.prototype.isVisitorOutdated = function() {
      return this.visitorService.doesVisitorExist() && this.visitorService.getVisitor().appliedTrackingDraw !== this.configuration.lastTrackingDraw;
    }, Session.prototype.isExclusionOutdated = function() {
      return this.exclusionService.getAppliedTrackingDraw() !== this.configuration.lastTrackingDraw;
    }, Session.prototype.restoreClearedVisitor = function() {
      if (this.savedVisitor) {
        this.visitorService.setVisitor(this.savedVisitor);
      }
    }, Session;
  }();
  var ChildActivity = function() {
    /**
     * @param {!Object} configuration
     * @param {?} initialAssetBundle
     * @param {?} sessionService
     * @return {undefined}
     */
    function Cerebrum(configuration, initialAssetBundle, sessionService) {
      /** @type {!Object} */
      this.configuration = configuration;
      this.visitorService = initialAssetBundle;
      this.sessionService = sessionService;
    }
    return Cerebrum.prototype.handle = function() {
      this.handleVisitor();
      this.handleSession();
    }, Cerebrum.prototype.handleVisitor = function() {
      var pornResult = this.visitorService.getVisitor();
      if (pornResult) {
        if (this.configuration.allowSubdomains) {
          this.visitorService.removeVisitor(me.CURRENT_DOMAIN);
        } else {
          this.visitorService.removeVisitor(me.getRootDomain());
        }
        this.visitorService.setVisitor(pornResult);
      }
    }, Cerebrum.prototype.handleSession = function() {
      var newSession = this.sessionService.getSessionWithoutCache();
      if (newSession) {
        if (this.configuration.allowSubdomains) {
          this.sessionService.removeSession(me.CURRENT_DOMAIN);
        } else {
          this.sessionService.removeSession(me.getRootDomain());
        }
        this.sessionService.setSession(newSession);
      }
    }, Cerebrum;
  }();
  var Float32Array = function() {
    /**
     * @return {undefined}
     */
    function View() {
      /** @type {!Array} */
      this.listeners = [];
    }
    return View.prototype.addListeners = function() {
      var events;
      /** @type {!Array} */
      var ar = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        ar[i] = arguments[i];
      }
      (events = this.listeners).push.apply(events, ar);
    }, View.prototype.emitBeforeNaturalPageView = function() {
      /** @type {number} */
      var layer_i = 0;
      var crossfilterable_layers = this.listeners;
      for (; layer_i < crossfilterable_layers.length; layer_i++) {
        var layer = crossfilterable_layers[layer_i];
        if (layer.onBeforeNaturalPageView) {
          layer.onBeforeNaturalPageView();
        }
      }
    }, View.prototype.emitAfterNaturalPageView = function() {
      /** @type {number} */
      var layer_i = 0;
      var crossfilterable_layers = this.listeners;
      for (; layer_i < crossfilterable_layers.length; layer_i++) {
        var layer = crossfilterable_layers[layer_i];
        if (layer.onAfterNaturalPageView) {
          layer.onAfterNaturalPageView();
        }
      }
    }, View.prototype.emitInitTracking = function() {
      /** @type {number} */
      var layer_i = 0;
      var crossfilterable_layers = this.listeners;
      for (; layer_i < crossfilterable_layers.length; layer_i++) {
        var layer = crossfilterable_layers[layer_i];
        if (layer.onInitTracking) {
          layer.onInitTracking();
        }
      }
    }, View.prototype.emitStartTracking = function() {
      /** @type {number} */
      var layer_i = 0;
      var crossfilterable_layers = this.listeners;
      for (; layer_i < crossfilterable_layers.length; layer_i++) {
        var layer = crossfilterable_layers[layer_i];
        if (layer.onStartTracking) {
          layer.onStartTracking();
        }
      }
    }, View.prototype.emitBeforeArtificialPageView = function() {
      /** @type {number} */
      var layer_i = 0;
      var crossfilterable_layers = this.listeners;
      for (; layer_i < crossfilterable_layers.length; layer_i++) {
        var layer = crossfilterable_layers[layer_i];
        if (layer.onBeforeArtificialPageView) {
          layer.onBeforeArtificialPageView();
        }
      }
    }, View.prototype.emitAfterArtificialPageView = function() {
      /** @type {number} */
      var layer_i = 0;
      var crossfilterable_layers = this.listeners;
      for (; layer_i < crossfilterable_layers.length; layer_i++) {
        var layer = crossfilterable_layers[layer_i];
        if (layer.onAfterArtificialPageView) {
          layer.onAfterArtificialPageView();
        }
      }
    }, View.prototype.emitBeforeSessionRenewal = function() {
      /** @type {number} */
      var layer_i = 0;
      var crossfilterable_layers = this.listeners;
      for (; layer_i < crossfilterable_layers.length; layer_i++) {
        var layer = crossfilterable_layers[layer_i];
        if (layer.onBeforeSessionRenewal) {
          layer.onBeforeSessionRenewal();
        }
      }
    }, View.prototype.emitAfterSessionRenewal = function() {
      /** @type {number} */
      var layer_i = 0;
      var crossfilterable_layers = this.listeners;
      for (; layer_i < crossfilterable_layers.length; layer_i++) {
        var layer = crossfilterable_layers[layer_i];
        if (layer.onAfterSessionRenewal) {
          layer.onAfterSessionRenewal();
        }
      }
    }, View.prototype.emitOptout = function() {
      /** @type {number} */
      var layer_i = 0;
      var crossfilterable_layers = this.listeners;
      for (; layer_i < crossfilterable_layers.length; layer_i++) {
        var layer = crossfilterable_layers[layer_i];
        if (layer.onOptout) {
          layer.onOptout();
        }
      }
    }, View.prototype.emitConsentGranted = function() {
      /** @type {number} */
      var layer_i = 0;
      var crossfilterable_layers = this.listeners;
      for (; layer_i < crossfilterable_layers.length; layer_i++) {
        var layer = crossfilterable_layers[layer_i];
        if (layer.onConsentGranted) {
          layer.onConsentGranted();
        }
      }
    }, View.prototype.emitConsentWithdrawn = function() {
      /** @type {number} */
      var layer_i = 0;
      var crossfilterable_layers = this.listeners;
      for (; layer_i < crossfilterable_layers.length; layer_i++) {
        var layer = crossfilterable_layers[layer_i];
        if (layer.onConsentWithdrawn) {
          layer.onConsentWithdrawn();
        }
      }
    }, View;
  }();
  !function(ParametersEscapingStatus) {
    /** @type {string} */
    ParametersEscapingStatus[ParametersEscapingStatus.NOT_REQUIRED = 0] = "NOT_REQUIRED";
    /** @type {string} */
    ParametersEscapingStatus[ParametersEscapingStatus.NOT_EXPRESSED = 1] = "NOT_EXPRESSED";
    /** @type {string} */
    ParametersEscapingStatus[ParametersEscapingStatus.GRANTED = 2] = "GRANTED";
    /** @type {string} */
    ParametersEscapingStatus[ParametersEscapingStatus.WITHDRAWN = 3] = "WITHDRAWN";
  }(metadata || (metadata = {}));
  var task;
  var SymbolValue = function() {
    /**
     * @param {?} gotoEnd
     * @return {undefined}
     */
    function t(gotoEnd) {
      this.cookieDomain = gotoEnd;
    }
    return t.prototype.get = function() {
      var string = me.get("_cs_c");
      return null === string ? string : Number(string);
    }, t.prototype.set = function(value) {
      me.set("_cs_c", value, this.cookieDomain, w);
    }, t.prototype.remove = function(name) {
      me.remove("_cs_c", name);
    }, t;
  }();
  var Object = function() {
    /**
     * @param {!Object} selector
     * @param {!Object} expectedIds
     * @return {undefined}
     */
    function t(selector, expectedIds) {
      /** @type {!Object} */
      this.commandsService = selector;
      /** @type {!Object} */
      this.service = expectedIds;
    }
    return t.prototype.init = function() {
      this.service.handleSubdomainChange();
      this.service.setInitialConsent();
      this.registerCommands();
    }, t.prototype.registerCommands = function() {
      var presigner = this;
      this.commandsService.register("trackConsentGranted", function() {
        presigner.service.grantConsent();
      });
      this.commandsService.register("trackConsentWithdrawn", function() {
        presigner.service.withdrawConsent();
      });
    }, t.prototype.onOptout = function() {
      this.service.removeCurrentConsent();
    }, t;
  }();
  var Error = function() {
    /**
     * @param {!Object} options
     * @param {!Object} storage
     * @param {!Object} updateKeysCallback
     * @param {?} showMensajeCallback
     * @return {undefined}
     */
    function Session(options, storage, updateKeysCallback, showMensajeCallback) {
      /** @type {!Object} */
      this.configuration = options;
      /** @type {!Object} */
      this.storage = storage;
      /** @type {!Object} */
      this.lifeCycleEvents = updateKeysCallback;
      this.cookieDomain = showMensajeCallback;
    }
    return Session.prototype.setInitialConsent = function() {
      var userId = this.storage.get();
      if (null === userId || this.hasConsentRequiredChanged(userId)) {
        this.setDefault();
      }
    }, Session.prototype.hasConsentRequiredChanged = function(error) {
      var expect_failure = this.configuration.consentRequired;
      return expect_failure && error === metadata.NOT_REQUIRED || !expect_failure && error !== metadata.NOT_REQUIRED;
    }, Session.prototype.handleSubdomainChange = function() {
      if (this.configuration.allowSubdomains) {
        this.storage.remove(me.CURRENT_DOMAIN);
      } else {
        this.storage.remove(me.getRootDomain());
      }
    }, Session.prototype.setDefault = function() {
      var bytes = this.configuration.consentRequired ? metadata.NOT_EXPRESSED : metadata.NOT_REQUIRED;
      this.storage.set(bytes);
    }, Session.prototype.grantConsent = function() {
      if (this.configuration.consentRequired) {
        this.storage.set(metadata.GRANTED);
        this.lifeCycleEvents.emitConsentGranted();
      }
    }, Session.prototype.withdrawConsent = function() {
      if (this.configuration.consentRequired) {
        this.storage.set(metadata.WITHDRAWN);
        this.lifeCycleEvents.emitConsentWithdrawn();
      }
    }, Session.prototype.removeCurrentConsent = function() {
      this.storage.remove(this.cookieDomain);
    }, Session.prototype.isAllowedByConsent = function() {
      return !this.configuration.consentRequired || this.storage.get() === metadata.GRANTED;
    }, Session.prototype.getRequestParameters = function() {
      return {
        uc : "" + this.storage.get()
      };
    }, Session;
  }();
  var Session = function() {
    /**
     * @param {?} bowline
     * @param {?} opts
     * @param {?} qaTilesPath
     * @param {!Object} tigerTilesPath
     * @param {!Object} name
     * @param {?} falseCase
     * @param {!Object} value
     * @return {undefined}
     */
    function exports(bowline, opts, qaTilesPath, tigerTilesPath, name, falseCase, value) {
      this.lifeCycleEvents = bowline;
      this.commandsService = opts;
      this.commandsModule = qaTilesPath;
      /** @type {!Object} */
      this.optoutModule = tigerTilesPath;
      /** @type {!Object} */
      this.optoutService = name;
      this.exclusionModule = falseCase;
      /** @type {!Object} */
      this.consentModule = value;
    }
    return exports.prototype.start = function() {
      this.lifeCycleEvents.addListeners(this.exclusionModule, this.consentModule, this.commandsModule);
      this.consentModule.init();
      this.optoutModule.init();
      this.optoutService.init();
      if (!this.optoutService.isActive()) {
        this.commandsService.start();
      }
    }, exports;
  }();
  var Promise = function() {
    /**
     * @param {!Object} gotoEnd
     * @return {undefined}
     */
    function t(gotoEnd) {
      /** @type {!Object} */
      this.service = gotoEnd;
    }
    return t.prototype.onOptout = function() {
      this.service.removeExclusion();
    }, t;
  }();
  var RiftSandbox = function() {
    /**
     * @param {string} value
     * @return {undefined}
     */
    function TypeWidget(value) {
      /** @type {string} */
      this.location = value;
    }
    return TypeWidget.prototype.isForceIncluded = function() {
      return this.hasForceInclusionCookie() || this.hasForceInclusionInURL();
    }, TypeWidget.prototype.isForceReplayRecorded = function() {
      return this.hasForceInclusionCookieValue("3") || this.hasForceInclusionValueInURL("3");
    }, TypeWidget.prototype.hasForceInclusionCookie = function() {
      return null !== me.get("_cs_inc");
    }, TypeWidget.prototype.hasForceInclusionCookieValue = function(canCreateDiscussions) {
      return me.get("_cs_inc") === canCreateDiscussions;
    }, TypeWidget.prototype.hasForceInclusionInURL = function() {
      return this.location.href.indexOf("_cs_inc") > 0;
    }, TypeWidget.prototype.hasForceInclusionValueInURL = function(slashListname) {
      return this.location.href.indexOf("_cs_inc=" + slashListname) > 0;
    }, TypeWidget;
  }();
  /**
   * @return {?}
   */
  var callback = function() {
    return (callback = Object.assign || function(result) {
      var src;
      /** @type {number} */
      var i = 1;
      /** @type {number} */
      var argl = arguments.length;
      for (; i < argl; i++) {
        var prop;
        for (prop in src = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(src, prop)) {
            result[prop] = src[prop];
          }
        }
      }
      return result;
    }).apply(this, arguments);
  };
  var EventEmitter = function() {
    /**
     * @return {undefined}
     */
    function Module() {
      this.metrics = {};
    }
    return Module.prototype.start = function(name, time) {
      if (void 0 === time) {
        time = clock.now();
      }
      var originalScript = this.metrics[name];
      this.metrics[name] = callback({
        startedAt : time
      }, originalScript);
    }, Module.prototype.stop = function(id, connection) {
      if (void 0 === connection) {
        connection = clock.now();
      }
      var ret = this.metrics[id];
      this.metrics[id] = callback({
        stoppedAt : connection
      }, ret);
      this.onStopCallback(id, this.metrics[id]);
    }, Module.prototype.onStop = function(callback) {
      /** @type {!Function} */
      this.onStopCallback = callback;
    }, Module;
  }();
  var TypedBuffer = function() {
    /**
     * @return {undefined}
     */
    function HTMLSectionBuilder() {
    }
    return HTMLSectionBuilder.prototype.getRequestParameters = function() {
      /** @type {!Location} */
      var location = window.location;
      return {
        pr : location.protocol,
        ho : location.hostname,
        pa : location.pathname,
        qu : location.search,
        ha : location.hash
      };
    }, HTMLSectionBuilder;
  }();
  var Codec = function() {
    /**
     * @param {!Object} options
     * @param {!Object} req
     * @return {undefined}
     */
    function self(options, req) {
      /** @type {!Object} */
      this.configuration = options;
      /** @type {!Object} */
      this.request = req;
      /** @type {boolean} */
      this.isLoggingActive = false;
    }
    return self.prototype.init = function() {
      this.isLoggingActive = Number(this.configuration.metricRate);
    }, self.prototype.getRequestParameters = function() {
      return {
        a : "uxam",
        mk : this.metricKey,
        mv : "" + this.metricValue
      };
    }, self.prototype.logMetric = function(callback, self) {
      this.metricKey = callback;
      /** @type {number} */
      this.metricValue = self.stoppedAt - self.startedAt;
      this.sendLog();
    }, self.prototype.sendLog = function() {
      if (this.isLoggingActive) {
        this.request.send();
      }
    }, self;
  }();
  !function(canCreateDiscussions) {
    /** @type {string} */
    canCreateDiscussions.TIME_BEFORE_EXECUTION = "TimeBeforeExecution";
    /** @type {string} */
    canCreateDiscussions.PAGE_LOAD = "PageLoad";
  }(task || (task = {}));
  var canvasLayersManager;
  var TimelineNode = function() {
    /**
     * @param {string} options
     * @param {!Object} section
     * @param {?} version
     * @return {undefined}
     */
    function t(options, section, version) {
      /** @type {!Object} */
      this.service = section;
      this.pii = version;
      this.locationRequestParameters = new TypedBuffer;
      this.basicLogRequestParameters = new ApplicationClients(options, this.pii);
      this.request = new Node(options.getLoggerUri());
      this.logger = new Codec(options, this.request);
    }
    return t.prototype.init = function() {
      var site_cfg = this;
      this.request.setRequestParametersProviders(this.logger, this.basicLogRequestParameters, this.locationRequestParameters);
      this.logger.init();
      this.service.onStop(function(e, posterElem) {
        site_cfg.logger.logMetric(e, posterElem);
      });
      this.recordInitialMetrics();
    }, t.prototype.recordInitialMetrics = function() {
      if (this.isSupported()) {
        this.service.start(task.PAGE_LOAD, window.performance.timing.navigationStart);
        this.service.stop(task.PAGE_LOAD, window.performance.timing.domContentLoadedEventEnd);
        this.service.start(task.TIME_BEFORE_EXECUTION, window.performance.timing.domContentLoadedEventEnd);
        this.service.stop(task.TIME_BEFORE_EXECUTION);
      }
    }, t.prototype.isSupported = function() {
      return window.performance && window.performance.timing;
    }, t;
  }();
  var Task = function() {
    /**
     * @param {!Object} $wydevice
     * @param {string} $timeout
     * @param {?} $mmApp
     * @return {undefined}
     */
    function controller($wydevice, $timeout, $mmApp) {
      /** @type {!Object} */
      this.lifeCycleEvents = $wydevice;
      /** @type {string} */
      this.location = $timeout;
      this.cookieDomain = $mmApp;
    }
    return controller.prototype.init = function() {
      if (!this.isActive() && this.hasOptoutInURL()) {
        this.activate();
      }
    }, controller.prototype.isActive = function() {
      return "1" === me.get("_cs_optout");
    }, controller.prototype.activate = function() {
      this.lifeCycleEvents.emitOptout();
      me.set("_cs_optout", "1", this.cookieDomain, w);
    }, controller.prototype.hasOptoutInURL = function() {
      return this.location.href.indexOf("_cs_optout") > 0;
    }, controller;
  }();
  var File = function() {
    /**
     * @param {?} server
     * @param {!Object} connection
     * @return {undefined}
     */
    function Controller(server, connection) {
      this.commandsService = server;
      /** @type {!Object} */
      this.optoutService = connection;
    }
    return Controller.prototype.init = function() {
      var NavScope = this;
      this.commandsService.register("optout", function() {
        NavScope.optoutService.activate();
      });
    }, Controller;
  }();
  !function(gestureSequence) {
    /**
     * @param {!Array} i
     * @param {?} array
     * @return {?}
     */
    gestureSequence.select = function(i, array) {
      var p = function(statements, type) {
        return statements.filter(function(options) {
          return options.exclusion === type;
        })[0];
      }(i, array);
      var el = function(statements, e) {
        return statements.filter(function(request_) {
          return function(request_, a22) {
            return request_.visitor && request_.visitor.appliedTrackingDraw === a22;
          }(request_, e);
        }).sort(walk)[0];
      }(i, array);
      return p || el;
    };
  }(canvasLayersManager || (canvasLayersManager = {}));
  var WebdavWrapper = function() {
    /**
     * @param {!Object} configuration
     * @param {string} initialAssetBundle
     * @param {number} versionsDirectory
     * @return {undefined}
     */
    function constructor(configuration, initialAssetBundle, versionsDirectory) {
      /** @type {!Object} */
      this.configuration = configuration;
      /** @type {string} */
      this.currentDomainState = initialAssetBundle;
      /** @type {number} */
      this.otherDomainStates = versionsDirectory;
    }
    return constructor.prototype.applyUpToDate = function(saveNotifs) {
      var mod = this;
      this.otherDomainStates.retrieve(this.configuration.hostnames, function(i) {
        /** @type {!Array<?>} */
        var j = [mod.currentDomainState.get()].concat(i);
        var child = canvasLayersManager.select(j, mod.configuration.lastTrackingDraw);
        mod.currentDomainState.apply(child);
        saveNotifs();
      });
    }, constructor;
  }();
  var Element = function() {
    /**
     * @param {?} callback
     * @return {undefined}
     */
    function extractPresetLocal(callback) {
      this.commandsService = callback;
    }
    return extractPresetLocal.prototype.onOptout = function() {
      this.commandsService.stop();
    }, extractPresetLocal.prototype.onBeforeSessionRenewal = function() {
      this.commandsService.stop();
    }, extractPresetLocal;
  }();
  var adapter;
  var URL = function() {
    /**
     * @param {!Function} gotoEnd
     * @return {undefined}
     */
    function t(gotoEnd) {
      /** @type {!Function} */
      this.logger = gotoEnd;
      this.registry = {};
    }
    return t.prototype.register = function(type, data) {
      /** @type {!Object} */
      this.registry[type] = data;
      this.registry;
    }, t.prototype.start = function() {
      this.applyPending();
      this.enableImmediateApplication();
    }, t.prototype.stop = function() {
      /** @type {!Array} */
      window._uxa = [];
    }, t.prototype.applyPending = function() {
      var t = this;
      window._uxa.forEach(function(idArray) {
        var type = idArray[0];
        var data = idArray.slice(1);
        return t.apply(type, data);
      });
    }, t.prototype.enableImmediateApplication = function() {
      var t = this;
      window._uxa = {
        push : function(str) {
          var first = str[0];
          var n = str.slice(1);
          return t.apply(first, n);
        }
      };
    }, t.prototype.apply = function(key, obj) {
      var state = this;
      return this.logger.tryToExecute("Commands.apply", function() {
        var attributes;
        if (state.registry[key]) {
          return (attributes = state.registry)[key].apply(attributes, obj);
        }
      })();
    }, t;
  }();
  var Uint8Array = function() {
    /**
     * @param {!Function} gotoEnd
     * @return {undefined}
     */
    function t(gotoEnd) {
      var thalassaServicesSet = this;
      /** @type {!Function} */
      this.logger = gotoEnd;
      this.eventHandler = {
        boundElement : document,
        type : "securitypolicyviolation",
        listener : function(remove) {
          return thalassaServicesSet.securityPolicyViolationListener(remove);
        }
      };
    }
    return t.prototype.onEvent = function(name) {
      /** @type {!Function} */
      this.onEventCallback = name;
    }, t.prototype.start = function() {
      subscribe(this.eventHandler);
    }, t.prototype.stop = function() {
      done(this.eventHandler);
    }, t.prototype.securityErrorIsRelevant = function(options) {
      return options && options.sourceFile && 0 !== options.sourceFile.length && t.whilelistDomains.some(function(sceneUid) {
        return options.sourceFile.indexOf(sceneUid) > 0;
      });
    }, t.prototype.securityPolicyViolationListener = function(options) {
      var file = this;
      this.logger.tryToExecute("Event handler type: securitypolicyviolation", function() {
        if (file.securityErrorIsRelevant(options)) {
          file.onEventCallback({
            violatedDirective : options.violatedDirective,
            sourceFile : options.sourceFile
          });
        }
      })();
    }, t.whilelistDomains = ["contentsquare", "localhost", "website.com/build/e2e"], t;
  }();
  var DAWG = function() {
    /**
     * @param {!Function} q
     * @param {!Object} a
     * @return {undefined}
     */
    function t(q, a) {
      /** @type {!Function} */
      this.logger = q;
      /** @type {!Object} */
      this.contentSecurityPolicyErrorsTracker = a;
    }
    return t.prototype.init = function() {
      var goal = this;
      this.contentSecurityPolicyErrorsTracker.onEvent(function(type) {
        return goal.processEvent(type);
      });
    }, t.prototype.start = function() {
      this.contentSecurityPolicyErrorsTracker.start();
    }, t.prototype.stop = function() {
      this.contentSecurityPolicyErrorsTracker.stop();
    }, t.prototype.processEvent = function(data) {
      /** @type {string} */
      var message = "Content Security Policy error. Violated directive: " + data.violatedDirective + " - Source file: " + data.sourceFile;
      this.logger.logMessage(message);
    }, t;
  }();
  var Cache = function() {
    /**
     * @param {!Object} config
     * @param {!Object} options
     * @param {?} dest
     * @return {undefined}
     */
    function Instrument(config, options, dest) {
      /** @type {!Object} */
      this.javaScriptErrorsTracker = config;
      /** @type {!Object} */
      this.javaScriptErrorsRequest = options;
      this.basicRequestParameters = dest;
      /** @type {!Array} */
      this.javaScriptErrorsBatch = [];
      /** @type {number} */
      this.javaScriptErrorsCount = 0;
    }
    return Instrument.prototype.init = function() {
      var goal = this;
      this.javaScriptErrorsTracker.onEvent(function(type) {
        return goal.processEvent(type);
      });
      this.bindRequest();
    }, Instrument.prototype.initStates = function() {
      this.startTime = clock.now();
      /** @type {!Array} */
      this.javaScriptErrorsBatch = [];
      /** @type {number} */
      this.javaScriptErrorsCount = 0;
    }, Instrument.prototype.start = function() {
      this.javaScriptErrorsTracker.start();
    }, Instrument.prototype.stop = function() {
      this.javaScriptErrorsTracker.stop();
    }, Instrument.prototype.getRequestPayload = function() {
      return JSON.stringify({
        errors : this.javaScriptErrorsBatch
      });
    }, Instrument.prototype.bindRequest = function() {
      var t = this;
      this.javaScriptErrorsRequest.setRequestParametersProviders(this.basicRequestParameters);
      this.javaScriptErrorsRequest.setRequestPayloadProvider(this);
      this.javaScriptErrorsRequest.after(function() {
        /** @type {!Array} */
        t.javaScriptErrorsBatch = [];
        t.javaScriptErrorsCount += 1;
      });
    }, Instrument.prototype.processEvent = function(data) {
      if (this.javaScriptErrorsCount < 20) {
        data.rt = this.getRelativeTime();
        this.javaScriptErrorsBatch.push(data);
        this.sendErrors();
      }
    }, Instrument.prototype.getRelativeTime = function() {
      return clock.now() - this.startTime;
    }, Instrument.prototype.sendErrors = function() {
      this.javaScriptErrorsRequest.send();
    }, Instrument;
  }();
  var Client = function() {
    /**
     * @param {!Function} gotoEnd
     * @return {undefined}
     */
    function t(gotoEnd) {
      var ref = this;
      /** @type {!Function} */
      this.logger = gotoEnd;
      /** @type {boolean} */
      this.useCapture = false;
      this.eventHandler = {
        boundElement : window,
        type : "error",
        listener : function(evt) {
          return ref.errorListener(evt);
        }
      };
    }
    return t.prototype.onEvent = function(name) {
      /** @type {!Function} */
      this.onEventCallback = name;
    }, t.prototype.start = function() {
      subscribe(this.eventHandler, this.useCapture);
    }, t.prototype.stop = function() {
      done(this.eventHandler, this.useCapture);
    }, t.prototype.errorListener = function(e) {
      var finalDeferred = this;
      this.logger.tryToExecute("Event handler type: error", function() {
        var err = finalDeferred.buildJavaScriptError(e);
        finalDeferred.onEventCallback(err);
      })();
    }, t.prototype.buildJavaScriptError = function(e) {
      return {
        errorType : "jsError",
        message : e.message,
        filename : e.filename,
        lineno : e.lineno,
        colno : e.colno
      };
    }, t;
  }();
  var Buffer = function() {
    /**
     * @param {!Function} category
     * @param {!Object} options
     * @param {?} state
     * @return {undefined}
     */
    function t(category, options, state) {
      /** @type {!Function} */
      this.logger = category;
      /** @type {!Object} */
      this.configuration = options;
      this.basicRequestParameters = state;
    }
    return t.prototype.init = function() {
      this.contentSecurityPolicyErrorsService = new DAWG(this.logger, new Uint8Array(this.logger));
      this.contentSecurityPolicyErrorsService.init();
      var parser = new Parser(this.configuration.getTrackerUri(), "errors", this.logger);
      this.javaScriptErrorsService = new Cache(new Client(this.logger), parser, this.basicRequestParameters);
      this.javaScriptErrorsService.init();
    }, t.prototype.onInitTracking = function() {
      this.contentSecurityPolicyErrorsService.start();
    }, t.prototype.onStartTracking = function() {
      if (this.configuration.jsErrorsEnabled) {
        this.javaScriptErrorsService.start();
      }
    }, t.prototype.onAfterNaturalPageView = function() {
      this.javaScriptErrorsService.initStates();
    }, t.prototype.onAfterArtificialPageView = function() {
      this.javaScriptErrorsService.initStates();
    }, t.prototype.onBeforeSessionRenewal = function() {
      this.javaScriptErrorsService.stop();
    }, t.prototype.onOptout = function() {
      this.contentSecurityPolicyErrorsService.stop();
      this.javaScriptErrorsService.stop();
    }, t;
  }();
  var joLabel = function() {
    /**
     * @param {!Object} newConfig
     * @return {undefined}
     */
    function config(newConfig) {
      /** @type {!Object} */
      this.configuration = newConfig;
      /** @type {boolean} */
      this.supportSameSite = false;
    }
    return config.prototype.init = function() {
      if ($tar.browserIsSafariV12()) {
        /** @type {boolean} */
        this.supportSameSite = false;
      } else {
        me.set("_cs_same_site", "Test same site", me.CURRENT_DOMAIN, void 0, $tar.computeSameSite(this.configuration), $tar.computeSecured(this.configuration));
        if (me.get("_cs_same_site")) {
          /** @type {boolean} */
          this.supportSameSite = true;
          me.remove("_cs_same_site", me.CURRENT_DOMAIN);
        } else {
          /** @type {boolean} */
          this.supportSameSite = false;
        }
      }
    }, config.prototype.isSameSiteSupported = function() {
      return this.supportSameSite;
    }, config;
  }();
  !function(exports) {
    /** @type {string} */
    exports.Set = "set";
    /** @type {string} */
    exports.Remove = "remove";
  }(adapter || (adapter = {}));
  var TrackerDash = function() {
    /**
     * @param {!Object} options
     * @param {?} users
     * @param {!Function} name
     * @return {undefined}
     */
    function self(options, users, name) {
      /** @type {!Object} */
      this.configuration = options;
      this.sameSiteService = users;
      /** @type {!Function} */
      this.logger = name;
      this.sameSite = win.None;
      /** @type {boolean} */
      this.isActivated = false;
      /** @type {!Array} */
      this.setCookieBatch = [];
      /** @type {!Array} */
      this.removeCookieBatch = [];
      /** @type {null} */
      this.batchTimeout = null;
    }
    return self.prototype.init = function() {
      this.sameSite = this.sameSiteService.isSameSiteSupported() ? win.None : win.NotSet;
    }, self.prototype.setStates = function(value, name) {
      /** @type {string} */
      this.currentDomainState = value;
      /** @type {!Object} */
      this.iframeDomainState = name;
    }, self.prototype.start = function(callback_out) {
      var plugin = this;
      this.iframeDomainState.init(this.getIframeDomain(), function(rest, n) {
        /** @type {!Array} */
        var j = [plugin.currentDomainState.get()];
        if (n) {
          j.push(rest);
        }
        var child = canvasLayersManager.select(j, plugin.configuration.lastTrackingDraw);
        /** @type {boolean} */
        plugin.isActivated = true;
        plugin.currentDomainState.apply(child);
        callback_out();
      });
      this.iframe = this.iframeDomainState.openIframe();
    }, self.prototype.setCookie = function(val, name, value) {
      if (this.isActivated) {
        var data = {
          name : val,
          value : name,
          samesite : this.sameSite,
          secure : opts.Yes
        };
        if (value) {
          data.expires = me.toExpireDate(value).getTime();
        }
        this.addToSetCookieBatch(data);
      }
    }, self.prototype.removeCookie = function(name) {
      if (this.isActivated) {
        this.addToRemoveCookieBatch(name);
      }
    }, self.prototype.addToRemoveCookieBatch = function(className) {
      this.removeCookieBatch = this.removeCookieBatch.filter(function(name) {
        return name !== className;
      });
      this.setCookieBatch = this.setCookieBatch.filter(function(elem) {
        return elem.name !== className;
      });
      this.removeCookieBatch.push(className);
      this.setBatchReadyCall();
    }, self.prototype.addToSetCookieBatch = function(data) {
      this.removeCookieBatch = this.removeCookieBatch.filter(function(p) {
        return p !== data.name;
      });
      this.setCookieBatch = this.setCookieBatch.filter(function(where) {
        return where.name !== data.name;
      });
      this.setCookieBatch.push(data);
      this.setBatchReadyCall();
    }, self.prototype.setBatchReadyCall = function() {
      var opts = this;
      if (null === this.batchTimeout) {
        this.batchTimeout = window.setTimeout(this.logger.tryToExecute("send xdframe-single-iframe batch", function() {
          opts.sendMessagesBatchs();
          /** @type {null} */
          opts.batchTimeout = null;
        }));
      }
    }, self.prototype.sendMessagesBatchs = function() {
      if (this.setCookieBatch.length > 0) {
        var msg = this.buildMessage(adapter.Set, this.setCookieBatch);
        this.sendMessage(msg);
        /** @type {!Array} */
        this.setCookieBatch = [];
      }
      if (this.removeCookieBatch.length > 0) {
        var msg = this.buildMessage(adapter.Remove, this.removeCookieBatch);
        this.sendMessage(msg);
        /** @type {!Array} */
        this.removeCookieBatch = [];
      }
    }, self.prototype.buildMessage = function(obj, indent) {
      return {
        command : obj,
        cookies : indent,
        domain : null,
        pid : this.configuration.projectId
      };
    }, self.prototype.sendMessage = function(message) {
      var scmHost = "https://" + this.getIframeDomain();
      if (this.iframe.contentWindow) {
        this.iframe.contentWindow.postMessage(message, scmHost);
      }
    }, self.prototype.getIframeDomain = function() {
      return this.configuration.dualCollectionTagDomain && "contentsquare.net" !== this.configuration.dualCollectionTagDomain ? "cdnssl." + this.configuration.dualCollectionTagDomain : "csxd.contentsquare.net";
    }, self;
  }();
  /** @type {!Array} */
  var fields = [name, "_cs_s", key, "_cs_ex"];
  var ArrayType = function() {
    /**
     * @param {!Object} options
     * @param {!Object} version
     * @param {!Function} logger
     * @return {undefined}
     */
    function Request(options, version, logger) {
      /** @type {!Object} */
      this.configuration = options;
      /** @type {!Object} */
      this.xdframeOpener = version;
      /** @type {!Function} */
      this.logger = logger;
    }
    return Request.prototype.init = function(singleEventData, done) {
      /** @type {string} */
      this.xdframeOrigin = "https://" + singleEventData;
      /** @type {!Function} */
      this.callback = done;
    }, Request.prototype.openIframe = function() {
      var me = this;
      this.xdframeOpener.onMessage(function(e) {
        me.handleXdframeMessage(e);
      });
      this.xdframeOpener.onTimeout(function() {
        me.handleTimeout();
      });
      this.xdframeOpener.start();
      var e = this.getXdframeUrl(this.xdframeOrigin);
      return this.xdframeOpener.open(e);
    }, Request.prototype.handleXdframeMessage = function(o) {
      if (this.isXdframeMessage(o)) {
        var data = o.data;
        /** @type {boolean} */
        var callbackOneIsCalled = true;
        if (this.isXdframeErrorMessage(o)) {
          this.logger.logMessage("Error xdframe single domain: " + JSON.stringify(o.data) + " from " + o.origin);
          /** @type {boolean} */
          callbackOneIsCalled = false;
        } else {
          if (!$jwterm.isValid(data)) {
            this.logger.logMessage("Invalid xdframe single domain state: " + JSON.stringify(o.data) + " from " + o.origin);
            /** @type {boolean} */
            callbackOneIsCalled = false;
          }
        }
        this.xdframeOpener.disableTimeout();
        this.callback(formatter.fromRaw(data), callbackOneIsCalled);
      }
    }, Request.prototype.handleTimeout = function() {
      this.logger.logMessage("xdframe single domain: all messages not received");
    }, Request.prototype.isXdframeMessage = function(instance) {
      return instance.origin === this.xdframeOrigin && isFunction(instance.data);
    }, Request.prototype.isXdframeErrorMessage = function(spec) {
      return !!spec.data.error;
    }, Request.prototype.getXdframeUrl = function(contextPath) {
      /** @type {string} */
      var e = fields.join(",");
      return contextPath + "/uxa/xdframe-single-domain-1.1.0.html?pid=" + this.configuration.projectId + "&cookieNames=" + e;
    }, Request;
  }();
  var Model = function() {
    /**
     * @param {!Object} options
     * @param {!Function} meta
     * @param {?} insert_value
     * @return {undefined}
     */
    function t(options, meta, insert_value) {
      /** @type {!Object} */
      this.configuration = options;
      /** @type {!Function} */
      this.logger = meta;
      this.pii = insert_value;
    }
    return t.prototype.init = function() {
      var response = this;
      var self = new EventEmitter;
      var newItem = new TimelineNode(this.configuration, self, this.pii);
      var name = new RiftSandbox(window.location);
      var description = me.getCookieDomain(this.configuration.allowSubdomains);
      var appSettings = new joLabel(this.configuration);
      appSettings.init();
      var app = new TrackerDash(this.configuration, appSettings, this.logger);
      app.init();
      var color = new Color(description, appSettings, app);
      var options = new Group(this.configuration, color, name, description, appSettings, app);
      var context = new Cursor(this.configuration, options, description, appSettings, app);
      this.logger.setContext(context, options);
      var call = new ChildActivity(this.configuration, context, options);
      var callback = new Option(window.location, description, appSettings, app);
      var promise = new Promise(callback);
      var rule = new Rule(this.configuration, context, callback, description);
      var result = new ValueReader(context, options, callback, this.configuration, description, appSettings, app);
      var sub = new Logger(this.logger);
      var fIdent = new Animation(sub, this.logger, window.location);
      var fakeWebdav = new WebdavWrapper(this.configuration, result, fIdent);
      var value = new ArrayType(this.configuration, sub, this.logger);
      app.setStates(result, value);
      var s = new Signal(this.configuration, context, callback, rule, call, fakeWebdav, app, name);
      return newItem.init(), s.compute(function(canCreateDiscussions) {
        var obj = new URL(response.logger);
        var status = new Element(obj);
        var data = new Float32Array;
        var value = new SymbolValue(description);
        var result = new Error(response.configuration, value, data, description);
        var i = new Object(obj, result);
        var f = new Task(data, window.location, description);
        var x = new File(obj, f);
        var offset = new Array(response.configuration, context, options);
        var buf = new Buffer(response.logger, response.configuration, offset);
        if (buf.init(), data.addListeners(buf), canCreateDiscussions) {
          data.emitInitTracking();
          (new User(context, options, data, response.logger, obj, status, response.configuration, x, f, i, result, response.pii, description, appSettings, app)).start();
        } else {
          (new Session(data, obj, status, x, f, promise, i)).start();
        }
      }), {
        LZString : d
      };
    }, t;
  }();
  try {
    var ctx = new Poster(window.CS_CONF);
    window._uxa = window._uxa || [];
    ctx.processOptionOverrides(window._uxa);
    var options = new FullContactCardOptions;
    var name = (new Tooltip(ctx, options)).create();
    name.tryToExecute("index.start", function() {
      var wallcandle = new Emitter(ctx);
      if (!window.UXAnalytics && wallcandle.canTrack()) {
        var m = new Model(ctx, name, options);
        window.UXAnalytics = m.init();
      }
      if (!window.CSFrameCommunication && context.isActivable()) {
        window.CSFrameCommunication = context;
        context.waitForConnection();
      }
    })();
  } catch (t) {
  }
}]);
