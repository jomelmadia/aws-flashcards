(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function rc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var $a = { exports: {} },
  ei = {},
  Va = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gn = Symbol.for("react.element"),
  ic = Symbol.for("react.portal"),
  oc = Symbol.for("react.fragment"),
  lc = Symbol.for("react.strict_mode"),
  ac = Symbol.for("react.profiler"),
  sc = Symbol.for("react.provider"),
  uc = Symbol.for("react.context"),
  cc = Symbol.for("react.forward_ref"),
  dc = Symbol.for("react.suspense"),
  fc = Symbol.for("react.memo"),
  pc = Symbol.for("react.lazy"),
  Ml = Symbol.iterator;
function mc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ml && e[Ml]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Qa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ka = Object.assign,
  Ga = {};
function on(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Ga),
    (this.updater = n || Qa));
}
on.prototype.isReactComponent = {};
on.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
on.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ya() {}
Ya.prototype = on.prototype;
function jo(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Ga),
    (this.updater = n || Qa));
}
var Bo = (jo.prototype = new Ya());
Bo.constructor = jo;
Ka(Bo, on.prototype);
Bo.isPureReactComponent = !0;
var Rl = Array.isArray,
  Za = Object.prototype.hasOwnProperty,
  Uo = { current: null },
  Xa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ja(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Za.call(t, r) && !Xa.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var s = Array(a), c = 0; c < a; c++) s[c] = arguments[c + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Gn,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Uo.current,
  };
}
function hc(e, t) {
  return {
    $$typeof: Gn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function qo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gn;
}
function gc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Fl = /\/+/g;
function wi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? gc("" + e.key)
    : t.toString(36);
}
function vr(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gn:
          case ic:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + wi(l, 0) : r),
      Rl(i)
        ? ((n = ""),
          e != null && (n = e.replace(Fl, "$&/") + "/"),
          vr(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (qo(i) &&
            (i = hc(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Fl, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Rl(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var s = r + wi(o, a);
      l += vr(o, t, n, s, i);
    }
  else if (((s = mc(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(o = e.next()).done;)
      ((o = o.value), (s = r + wi(o, a++)), (l += vr(o, t, n, s, i)));
  else if (o === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return l;
}
function tr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    vr(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function yc(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  wr = { transition: null },
  vc = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: wr,
    ReactCurrentOwner: Uo,
  };
function ba() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = {
  map: tr,
  forEach: function (e, t, n) {
    tr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      tr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      tr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!qo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
I.Component = on;
I.Fragment = oc;
I.Profiler = ac;
I.PureComponent = jo;
I.StrictMode = lc;
I.Suspense = dc;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vc;
I.act = ba;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Ka({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = Uo.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      Za.call(t, s) &&
        !Xa.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var c = 0; c < s; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Gn, type: e.type, key: i, ref: o, props: r, _owner: l };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: uc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: sc, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = Ja;
I.createFactory = function (e) {
  var t = Ja.bind(null, e);
  return ((t.type = e), t);
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: cc, render: e };
};
I.isValidElement = qo;
I.lazy = function (e) {
  return { $$typeof: pc, _payload: { _status: -1, _result: e }, _init: yc };
};
I.memo = function (e, t) {
  return { $$typeof: fc, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = wr.transition;
  wr.transition = {};
  try {
    e();
  } finally {
    wr.transition = t;
  }
};
I.unstable_act = ba;
I.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
I.useContext = function (e) {
  return ae.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
I.useId = function () {
  return ae.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return ae.current.useRef(e);
};
I.useState = function (e) {
  return ae.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return ae.current.useTransition();
};
I.version = "18.3.1";
Va.exports = I;
var Se = Va.exports;
const wc = rc(Se);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sc = Se,
  kc = Symbol.for("react.element"),
  Cc = Symbol.for("react.fragment"),
  Ac = Object.prototype.hasOwnProperty,
  Ec = Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  xc = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  (n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref));
  for (r in t) Ac.call(t, r) && !xc.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: kc,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Ec.current,
  };
}
ei.Fragment = Cc;
ei.jsx = es;
ei.jsxs = es;
$a.exports = ei;
var z = $a.exports,
  Vi = {},
  ts = { exports: {} },
  ve = {},
  ns = { exports: {} },
  rs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, P) {
    var _ = A.length;
    A.push(P);
    e: for (; 0 < _;) {
      var $ = (_ - 1) >>> 1,
        Y = A[$];
      if (0 < i(Y, P)) ((A[$] = P), (A[_] = Y), (_ = $));
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var P = A[0],
      _ = A.pop();
    if (_ !== P) {
      A[0] = _;
      e: for (var $ = 0, Y = A.length, bn = Y >>> 1; $ < bn;) {
        var gt = 2 * ($ + 1) - 1,
          vi = A[gt],
          yt = gt + 1,
          er = A[yt];
        if (0 > i(vi, _))
          yt < Y && 0 > i(er, vi)
            ? ((A[$] = er), (A[yt] = _), ($ = yt))
            : ((A[$] = vi), (A[gt] = _), ($ = gt));
        else if (yt < Y && 0 > i(er, _)) ((A[$] = er), (A[yt] = _), ($ = yt));
        else break e;
      }
    }
    return P;
  }
  function i(A, P) {
    var _ = A.sortIndex - P.sortIndex;
    return _ !== 0 ? _ : A.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    v = !1,
    w = !1,
    S = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(A) {
    for (var P = n(c); P !== null;) {
      if (P.callback === null) r(c);
      else if (P.startTime <= A)
        (r(c), (P.sortIndex = P.expirationTime), t(s, P));
      else break;
      P = n(c);
    }
  }
  function g(A) {
    if (((S = !1), f(A), !w))
      if (n(s) !== null) ((w = !0), gi(C));
      else {
        var P = n(c);
        P !== null && yi(g, P.startTime - A);
      }
  }
  function C(A, P) {
    ((w = !1), S && ((S = !1), d(W), (W = -1)), (v = !0));
    var _ = p;
    try {
      for (
        f(P), m = n(s);
        m !== null && (!(m.expirationTime > P) || (A && !Pe()));
      ) {
        var $ = m.callback;
        if (typeof $ == "function") {
          ((m.callback = null), (p = m.priorityLevel));
          var Y = $(m.expirationTime <= P);
          ((P = e.unstable_now()),
            typeof Y == "function" ? (m.callback = Y) : m === n(s) && r(s),
            f(P));
        } else r(s);
        m = n(s);
      }
      if (m !== null) var bn = !0;
      else {
        var gt = n(c);
        (gt !== null && yi(g, gt.startTime - P), (bn = !1));
      }
      return bn;
    } finally {
      ((m = null), (p = _), (v = !1));
    }
  }
  var E = !1,
    x = null,
    W = -1,
    H = 5,
    N = -1;
  function Pe() {
    return !(e.unstable_now() - N < H);
  }
  function sn() {
    if (x !== null) {
      var A = e.unstable_now();
      N = A;
      var P = !0;
      try {
        P = x(!0, A);
      } finally {
        P ? un() : ((E = !1), (x = null));
      }
    } else E = !1;
  }
  var un;
  if (typeof u == "function")
    un = function () {
      u(sn);
    };
  else if (typeof MessageChannel < "u") {
    var Ll = new MessageChannel(),
      nc = Ll.port2;
    ((Ll.port1.onmessage = sn),
      (un = function () {
        nc.postMessage(null);
      }));
  } else
    un = function () {
      T(sn, 0);
    };
  function gi(A) {
    ((x = A), E || ((E = !0), un()));
  }
  function yi(A, P) {
    W = T(function () {
      A(e.unstable_now());
    }, P);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), gi(C));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (H = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (A) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = p;
      }
      var _ = p;
      p = P;
      try {
        return A();
      } finally {
        p = _;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, P) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var _ = p;
      p = A;
      try {
        return P();
      } finally {
        p = _;
      }
    }),
    (e.unstable_scheduleCallback = function (A, P, _) {
      var $ = e.unstable_now();
      switch (
        (typeof _ == "object" && _ !== null
          ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? $ + _ : $))
          : (_ = $),
        A)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = _ + Y),
        (A = {
          id: h++,
          callback: P,
          priorityLevel: A,
          startTime: _,
          expirationTime: Y,
          sortIndex: -1,
        }),
        _ > $
          ? ((A.sortIndex = _),
            t(c, A),
            n(s) === null &&
              A === n(c) &&
              (S ? (d(W), (W = -1)) : (S = !0), yi(g, _ - $)))
          : ((A.sortIndex = Y), t(s, A), w || v || ((w = !0), gi(C))),
        A
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (A) {
      var P = p;
      return function () {
        var _ = p;
        p = P;
        try {
          return A.apply(this, arguments);
        } finally {
          p = _;
        }
      };
    }));
})(rs);
ns.exports = rs;
var Wc = ns.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pc = Se,
  ye = Wc;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var is = new Set(),
  Nn = {};
function It(e, t) {
  (Xt(e, t), Xt(e + "Capture", t));
}
function Xt(e, t) {
  for (Nn[e] = t, e = 0; e < t.length; e++) is.add(t[e]);
}
var Ve = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Qi = Object.prototype.hasOwnProperty,
  zc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Dl = {},
  Ol = {};
function _c(e) {
  return Qi.call(Ol, e)
    ? !0
    : Qi.call(Dl, e)
      ? !1
      : zc.test(e)
        ? (Ol[e] = !0)
        : ((Dl[e] = !0), !1);
}
function Ic(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Nc(e, t, n, r) {
  if (t === null || typeof t > "u" || Ic(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function se(e, t, n, r, i, o, l) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l));
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ee[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ho = /[\-:]([a-z])/g;
function $o(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ho, $o);
    ee[t] = new se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ho, $o);
    ee[t] = new se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ho, $o);
  ee[t] = new se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Vo(e, t, n, r) {
  var i = ee.hasOwnProperty(t) ? ee[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Nc(t, n, i, r) && (n = null),
    r || i === null
      ? _c(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ye = Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  nr = Symbol.for("react.element"),
  Lt = Symbol.for("react.portal"),
  Mt = Symbol.for("react.fragment"),
  Qo = Symbol.for("react.strict_mode"),
  Ki = Symbol.for("react.profiler"),
  os = Symbol.for("react.provider"),
  ls = Symbol.for("react.context"),
  Ko = Symbol.for("react.forward_ref"),
  Gi = Symbol.for("react.suspense"),
  Yi = Symbol.for("react.suspense_list"),
  Go = Symbol.for("react.memo"),
  Xe = Symbol.for("react.lazy"),
  as = Symbol.for("react.offscreen"),
  jl = Symbol.iterator;
function cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (jl && e[jl]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var U = Object.assign,
  Si;
function vn(e) {
  if (Si === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Si = (t && t[1]) || "";
    }
  return (
    `
` +
    Si +
    e
  );
}
var ki = !1;
function Ci(e, t) {
  if (!e || ki) return "";
  ki = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          a = o.length - 1;
        1 <= l && 0 <= a && i[l] !== o[a];
      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (i[l] !== o[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || i[l] !== o[a])) {
                var s =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    ((ki = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? vn(e) : "";
}
function Tc(e) {
  switch (e.tag) {
    case 5:
      return vn(e.type);
    case 16:
      return vn("Lazy");
    case 13:
      return vn("Suspense");
    case 19:
      return vn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Ci(e.type, !1)), e);
    case 11:
      return ((e = Ci(e.type.render, !1)), e);
    case 1:
      return ((e = Ci(e.type, !0)), e);
    default:
      return "";
  }
}
function Zi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mt:
      return "Fragment";
    case Lt:
      return "Portal";
    case Ki:
      return "Profiler";
    case Qo:
      return "StrictMode";
    case Gi:
      return "Suspense";
    case Yi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ls:
        return (e.displayName || "Context") + ".Consumer";
      case os:
        return (e._context.displayName || "Context") + ".Provider";
      case Ko:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Go:
        return (
          (t = e.displayName || null),
          t !== null ? t : Zi(e.type) || "Memo"
        );
      case Xe:
        ((t = e._payload), (e = e._init));
        try {
          return Zi(e(t));
        } catch {}
    }
  return null;
}
function Lc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Zi(t);
    case 8:
      return t === Qo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function dt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ss(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Mc(e) {
  var t = ss(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          ((r = "" + l), o.call(this, l));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function rr(e) {
  e._valueTracker || (e._valueTracker = Mc(e));
}
function us(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ss(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ir(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xi(e, t) {
  var n = t.checked;
  return U({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Bl(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = dt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function cs(e, t) {
  ((t = t.checked), t != null && Vo(e, "checked", t, !1));
}
function Ji(e, t) {
  cs(e, t);
  var n = dt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? bi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && bi(e, t.type, dt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Ul(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(
      (r !== "submit" && r !== "reset") ||
      (t.value !== void 0 && t.value !== null)
    ))
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function bi(e, t, n) {
  (t !== "number" || Ir(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var wn = Array.isArray;
function Vt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + dt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function eo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return U({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ql(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (wn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: dt(n) };
}
function ds(e, t) {
  var n = dt(t.value),
    r = dt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Hl(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function fs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function to(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? fs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var ir,
  ps = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ir = ir || document.createElement("div"),
          ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ir.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild;) e.appendChild(t.firstChild);
    }
  });
function Tn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Cn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Rc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Cn).forEach(function (e) {
  Rc.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Cn[t] = Cn[e]));
  });
});
function ms(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Cn.hasOwnProperty(e) && Cn[e])
      ? ("" + t).trim()
      : t + "px";
}
function hs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = ms(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var Fc = U(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function no(e, t) {
  if (t) {
    if (Fc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function ro(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var io = null;
function Yo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var oo = null,
  Qt = null,
  Kt = null;
function $l(e) {
  if ((e = Xn(e))) {
    if (typeof oo != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = oi(t)), oo(e.stateNode, e.type, t));
  }
}
function gs(e) {
  Qt ? (Kt ? Kt.push(e) : (Kt = [e])) : (Qt = e);
}
function ys() {
  if (Qt) {
    var e = Qt,
      t = Kt;
    if (((Kt = Qt = null), $l(e), t)) for (e = 0; e < t.length; e++) $l(t[e]);
  }
}
function vs(e, t) {
  return e(t);
}
function ws() {}
var Ai = !1;
function Ss(e, t, n) {
  if (Ai) return e(t, n);
  Ai = !0;
  try {
    return vs(e, t, n);
  } finally {
    ((Ai = !1), (Qt !== null || Kt !== null) && (ws(), ys()));
  }
}
function Ln(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = oi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var lo = !1;
if (Ve)
  try {
    var dn = {};
    (Object.defineProperty(dn, "passive", {
      get: function () {
        lo = !0;
      },
    }),
      window.addEventListener("test", dn, dn),
      window.removeEventListener("test", dn, dn));
  } catch {
    lo = !1;
  }
function Dc(e, t, n, r, i, o, l, a, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var An = !1,
  Nr = null,
  Tr = !1,
  ao = null,
  Oc = {
    onError: function (e) {
      ((An = !0), (Nr = e));
    },
  };
function jc(e, t, n, r, i, o, l, a, s) {
  ((An = !1), (Nr = null), Dc.apply(Oc, arguments));
}
function Bc(e, t, n, r, i, o, l, a, s) {
  if ((jc.apply(this, arguments), An)) {
    if (An) {
      var c = Nr;
      ((An = !1), (Nr = null));
    } else throw Error(y(198));
    Tr || ((Tr = !0), (ao = c));
  }
}
function Nt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return;) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ks(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Vl(e) {
  if (Nt(e) !== e) throw Error(y(188));
}
function Uc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Nt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ;) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o;) {
        if (o === n) return (Vl(i), e);
        if (o === r) return (Vl(i), t);
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) ((n = i), (r = o));
    else {
      for (var l = !1, a = i.child; a;) {
        if (a === n) {
          ((l = !0), (n = i), (r = o));
          break;
        }
        if (a === r) {
          ((l = !0), (r = i), (n = o));
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = o.child; a;) {
          if (a === n) {
            ((l = !0), (n = o), (r = i));
            break;
          }
          if (a === r) {
            ((l = !0), (r = o), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Cs(e) {
  return ((e = Uc(e)), e !== null ? As(e) : null);
}
function As(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = As(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Es = ye.unstable_scheduleCallback,
  Ql = ye.unstable_cancelCallback,
  qc = ye.unstable_shouldYield,
  Hc = ye.unstable_requestPaint,
  V = ye.unstable_now,
  $c = ye.unstable_getCurrentPriorityLevel,
  Zo = ye.unstable_ImmediatePriority,
  xs = ye.unstable_UserBlockingPriority,
  Lr = ye.unstable_NormalPriority,
  Vc = ye.unstable_LowPriority,
  Ws = ye.unstable_IdlePriority,
  ti = null,
  Oe = null;
function Qc(e) {
  if (Oe && typeof Oe.onCommitFiberRoot == "function")
    try {
      Oe.onCommitFiberRoot(ti, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Te = Math.clz32 ? Math.clz32 : Yc,
  Kc = Math.log,
  Gc = Math.LN2;
function Yc(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Kc(e) / Gc) | 0)) | 0);
}
var or = 64,
  lr = 4194304;
function Sn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Mr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~i;
    a !== 0 ? (r = Sn(a)) : ((o &= l), o !== 0 && (r = Sn(o)));
  } else ((l = n & ~i), l !== 0 ? (r = Sn(l)) : o !== 0 && (r = Sn(o)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t;)
      ((n = 31 - Te(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function Zc(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Xc(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;
  ) {
    var l = 31 - Te(o),
      a = 1 << l,
      s = i[l];
    (s === -1
      ? (!(a & n) || a & r) && (i[l] = Zc(a, t))
      : s <= t && (e.expiredLanes |= a),
      (o &= ~a));
  }
}
function so(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ps() {
  var e = or;
  return ((or <<= 1), !(or & 4194240) && (or = 64), e);
}
function Ei(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Yn(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Te(t)),
    (e[t] = n));
}
function Jc(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var i = 31 - Te(n),
      o = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o));
  }
}
function Xo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n;) {
    var r = 31 - Te(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var M = 0;
function zs(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var _s,
  Jo,
  Is,
  Ns,
  Ts,
  uo = !1,
  ar = [],
  rt = null,
  it = null,
  ot = null,
  Mn = new Map(),
  Rn = new Map(),
  be = [],
  bc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Kl(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rt = null;
      break;
    case "dragenter":
    case "dragleave":
      it = null;
      break;
    case "mouseover":
    case "mouseout":
      ot = null;
      break;
    case "pointerover":
    case "pointerout":
      Mn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Rn.delete(t.pointerId);
  }
}
function fn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Xn(t)), t !== null && Jo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function ed(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((rt = fn(rt, e, t, n, r, i)), !0);
    case "dragenter":
      return ((it = fn(it, e, t, n, r, i)), !0);
    case "mouseover":
      return ((ot = fn(ot, e, t, n, r, i)), !0);
    case "pointerover":
      var o = i.pointerId;
      return (Mn.set(o, fn(Mn.get(o) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (o = i.pointerId),
        Rn.set(o, fn(Rn.get(o) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function Ls(e) {
  var t = St(e.target);
  if (t !== null) {
    var n = Nt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ks(n)), t !== null)) {
          ((e.blockedOn = t),
            Ts(e.priority, function () {
              Is(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Sr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = co(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((io = r), n.target.dispatchEvent(r), (io = null));
    } else return ((t = Xn(n)), t !== null && Jo(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Gl(e, t, n) {
  Sr(e) && n.delete(t);
}
function td() {
  ((uo = !1),
    rt !== null && Sr(rt) && (rt = null),
    it !== null && Sr(it) && (it = null),
    ot !== null && Sr(ot) && (ot = null),
    Mn.forEach(Gl),
    Rn.forEach(Gl));
}
function pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    uo ||
      ((uo = !0),
      ye.unstable_scheduleCallback(ye.unstable_NormalPriority, td)));
}
function Fn(e) {
  function t(i) {
    return pn(i, e);
  }
  if (0 < ar.length) {
    pn(ar[0], e);
    for (var n = 1; n < ar.length; n++) {
      var r = ar[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rt !== null && pn(rt, e),
      it !== null && pn(it, e),
      ot !== null && pn(ot, e),
      Mn.forEach(t),
      Rn.forEach(t),
      n = 0;
    n < be.length;
    n++
  )
    ((r = be[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < be.length && ((n = be[0]), n.blockedOn === null);)
    (Ls(n), n.blockedOn === null && be.shift());
}
var Gt = Ye.ReactCurrentBatchConfig,
  Rr = !0;
function nd(e, t, n, r) {
  var i = M,
    o = Gt.transition;
  Gt.transition = null;
  try {
    ((M = 1), bo(e, t, n, r));
  } finally {
    ((M = i), (Gt.transition = o));
  }
}
function rd(e, t, n, r) {
  var i = M,
    o = Gt.transition;
  Gt.transition = null;
  try {
    ((M = 4), bo(e, t, n, r));
  } finally {
    ((M = i), (Gt.transition = o));
  }
}
function bo(e, t, n, r) {
  if (Rr) {
    var i = co(e, t, n, r);
    if (i === null) (Mi(e, t, r, Fr, n), Kl(e, r));
    else if (ed(i, e, t, n, r)) r.stopPropagation();
    else if ((Kl(e, r), t & 4 && -1 < bc.indexOf(e))) {
      for (; i !== null;) {
        var o = Xn(i);
        if (
          (o !== null && _s(o),
          (o = co(e, t, n, r)),
          o === null && Mi(e, t, r, Fr, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Mi(e, t, r, null, n);
  }
}
var Fr = null;
function co(e, t, n, r) {
  if (((Fr = null), (e = Yo(r)), (e = St(e)), e !== null))
    if (((t = Nt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ks(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Fr = e), null);
}
function Ms(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch ($c()) {
        case Zo:
          return 1;
        case xs:
          return 4;
        case Lr:
        case Vc:
          return 16;
        case Ws:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tt = null,
  el = null,
  kr = null;
function Rs() {
  if (kr) return kr;
  var e,
    t = el,
    n = t.length,
    r,
    i = "value" in tt ? tt.value : tt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (kr = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Cr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function sr() {
  return !0;
}
function Yl() {
  return !1;
}
function we(e) {
  function t(n, r, i, o, l) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? sr
        : Yl),
      (this.isPropagationStopped = Yl),
      this
    );
  }
  return (
    U(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = sr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = sr));
      },
      persist: function () {},
      isPersistent: sr,
    }),
    t
  );
}
var ln = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  tl = we(ln),
  Zn = U({}, ln, { view: 0, detail: 0 }),
  id = we(Zn),
  xi,
  Wi,
  mn,
  ni = U({}, Zn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: nl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== mn &&
            (mn && e.type === "mousemove"
              ? ((xi = e.screenX - mn.screenX), (Wi = e.screenY - mn.screenY))
              : (Wi = xi = 0),
            (mn = e)),
          xi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Wi;
    },
  }),
  Zl = we(ni),
  od = U({}, ni, { dataTransfer: 0 }),
  ld = we(od),
  ad = U({}, Zn, { relatedTarget: 0 }),
  Pi = we(ad),
  sd = U({}, ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ud = we(sd),
  cd = U({}, ln, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  dd = we(cd),
  fd = U({}, ln, { data: 0 }),
  Xl = we(fd),
  pd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  md = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  hd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = hd[e]) ? !!t[e] : !1;
}
function nl() {
  return gd;
}
var yd = U({}, Zn, {
    key: function (e) {
      if (e.key) {
        var t = pd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Cr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? md[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nl,
    charCode: function (e) {
      return e.type === "keypress" ? Cr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Cr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  vd = we(yd),
  wd = U({}, ni, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Jl = we(wd),
  Sd = U({}, Zn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nl,
  }),
  kd = we(Sd),
  Cd = U({}, ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ad = we(Cd),
  Ed = U({}, ni, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  xd = we(Ed),
  Wd = [9, 13, 27, 32],
  rl = Ve && "CompositionEvent" in window,
  En = null;
Ve && "documentMode" in document && (En = document.documentMode);
var Pd = Ve && "TextEvent" in window && !En,
  Fs = Ve && (!rl || (En && 8 < En && 11 >= En)),
  bl = " ",
  ea = !1;
function Ds(e, t) {
  switch (e) {
    case "keyup":
      return Wd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Os(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Rt = !1;
function zd(e, t) {
  switch (e) {
    case "compositionend":
      return Os(t);
    case "keypress":
      return t.which !== 32 ? null : ((ea = !0), bl);
    case "textInput":
      return ((e = t.data), e === bl && ea ? null : e);
    default:
      return null;
  }
}
function _d(e, t) {
  if (Rt)
    return e === "compositionend" || (!rl && Ds(e, t))
      ? ((e = Rs()), (kr = el = tt = null), (Rt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Fs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Id = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ta(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Id[e.type] : t === "textarea";
}
function js(e, t, n, r) {
  (gs(r),
    (t = Dr(t, "onChange")),
    0 < t.length &&
      ((n = new tl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var xn = null,
  Dn = null;
function Nd(e) {
  Zs(e, 0);
}
function ri(e) {
  var t = Ot(e);
  if (us(t)) return e;
}
function Td(e, t) {
  if (e === "change") return t;
}
var Bs = !1;
if (Ve) {
  var zi;
  if (Ve) {
    var _i = "oninput" in document;
    if (!_i) {
      var na = document.createElement("div");
      (na.setAttribute("oninput", "return;"),
        (_i = typeof na.oninput == "function"));
    }
    zi = _i;
  } else zi = !1;
  Bs = zi && (!document.documentMode || 9 < document.documentMode);
}
function ra() {
  xn && (xn.detachEvent("onpropertychange", Us), (Dn = xn = null));
}
function Us(e) {
  if (e.propertyName === "value" && ri(Dn)) {
    var t = [];
    (js(t, Dn, e, Yo(e)), Ss(Nd, t));
  }
}
function Ld(e, t, n) {
  e === "focusin"
    ? (ra(), (xn = t), (Dn = n), xn.attachEvent("onpropertychange", Us))
    : e === "focusout" && ra();
}
function Md(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ri(Dn);
}
function Rd(e, t) {
  if (e === "click") return ri(t);
}
function Fd(e, t) {
  if (e === "input" || e === "change") return ri(t);
}
function Dd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == "function" ? Object.is : Dd;
function On(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Qi.call(t, i) || !Me(e[i], t[i])) return !1;
  }
  return !0;
}
function ia(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e;
}
function oa(e, t) {
  var n = ia(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ia(n);
  }
}
function qs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? qs(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Hs() {
  for (var e = window, t = Ir(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ir(e.document);
  }
  return t;
}
function il(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Od(e) {
  var t = Hs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    qs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && il(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        ((r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = oa(n, o)));
        var l = oa(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode);)
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var jd = Ve && "documentMode" in document && 11 >= document.documentMode,
  Ft = null,
  fo = null,
  Wn = null,
  po = !1;
function la(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  po ||
    Ft == null ||
    Ft !== Ir(r) ||
    ((r = Ft),
    "selectionStart" in r && il(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Wn && On(Wn, r)) ||
      ((Wn = r),
      (r = Dr(fo, "onSelect")),
      0 < r.length &&
        ((t = new tl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ft))));
}
function ur(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Dt = {
    animationend: ur("Animation", "AnimationEnd"),
    animationiteration: ur("Animation", "AnimationIteration"),
    animationstart: ur("Animation", "AnimationStart"),
    transitionend: ur("Transition", "TransitionEnd"),
  },
  Ii = {},
  $s = {};
Ve &&
  (($s = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Dt.animationend.animation,
    delete Dt.animationiteration.animation,
    delete Dt.animationstart.animation),
  "TransitionEvent" in window || delete Dt.transitionend.transition);
function ii(e) {
  if (Ii[e]) return Ii[e];
  if (!Dt[e]) return e;
  var t = Dt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in $s) return (Ii[e] = t[n]);
  return e;
}
var Vs = ii("animationend"),
  Qs = ii("animationiteration"),
  Ks = ii("animationstart"),
  Gs = ii("transitionend"),
  Ys = new Map(),
  aa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function pt(e, t) {
  (Ys.set(e, t), It(t, [e]));
}
for (var Ni = 0; Ni < aa.length; Ni++) {
  var Ti = aa[Ni],
    Bd = Ti.toLowerCase(),
    Ud = Ti[0].toUpperCase() + Ti.slice(1);
  pt(Bd, "on" + Ud);
}
pt(Vs, "onAnimationEnd");
pt(Qs, "onAnimationIteration");
pt(Ks, "onAnimationStart");
pt("dblclick", "onDoubleClick");
pt("focusin", "onFocus");
pt("focusout", "onBlur");
pt(Gs, "onTransitionEnd");
Xt("onMouseEnter", ["mouseout", "mouseover"]);
Xt("onMouseLeave", ["mouseout", "mouseover"]);
Xt("onPointerEnter", ["pointerout", "pointerover"]);
Xt("onPointerLeave", ["pointerout", "pointerover"]);
It(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
It(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
It(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
It(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var kn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  qd = new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));
function sa(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Bc(r, t, void 0, e), (e.currentTarget = null));
}
function Zs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            s = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), s !== o && i.isPropagationStopped())) break e;
          (sa(i, a, c), (o = s));
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (s = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            s !== o && i.isPropagationStopped())
          )
            break e;
          (sa(i, a, c), (o = s));
        }
    }
  }
  if (Tr) throw ((e = ao), (Tr = !1), (ao = null), e);
}
function F(e, t) {
  var n = t[vo];
  n === void 0 && (n = t[vo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Xs(t, e, 2, !1), n.add(r));
}
function Li(e, t, n) {
  var r = 0;
  (t && (r |= 4), Xs(n, e, r, t));
}
var cr = "_reactListening" + Math.random().toString(36).slice(2);
function jn(e) {
  if (!e[cr]) {
    ((e[cr] = !0),
      is.forEach(function (n) {
        n !== "selectionchange" && (qd.has(n) || Li(n, !1, e), Li(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[cr] || ((t[cr] = !0), Li("selectionchange", !1, t));
  }
}
function Xs(e, t, n, r) {
  switch (Ms(t)) {
    case 1:
      var i = nd;
      break;
    case 4:
      i = rd;
      break;
    default:
      i = bo;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !lo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function Mi(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null;) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; a !== null;) {
          if (((l = St(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = o = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Ss(function () {
    var c = o,
      h = Yo(n),
      m = [];
    e: {
      var p = Ys.get(e);
      if (p !== void 0) {
        var v = tl,
          w = e;
        switch (e) {
          case "keypress":
            if (Cr(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = vd;
            break;
          case "focusin":
            ((w = "focus"), (v = Pi));
            break;
          case "focusout":
            ((w = "blur"), (v = Pi));
            break;
          case "beforeblur":
          case "afterblur":
            v = Pi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Zl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = ld;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = kd;
            break;
          case Vs:
          case Qs:
          case Ks:
            v = ud;
            break;
          case Gs:
            v = Ad;
            break;
          case "scroll":
            v = id;
            break;
          case "wheel":
            v = xd;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = dd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Jl;
        }
        var S = (t & 4) !== 0,
          T = !S && e === "scroll",
          d = S ? (p !== null ? p + "Capture" : null) : p;
        S = [];
        for (var u = c, f; u !== null;) {
          f = u;
          var g = f.stateNode;
          if (
            (f.tag === 5 &&
              g !== null &&
              ((f = g),
              d !== null && ((g = Ln(u, d)), g != null && S.push(Bn(u, g, f)))),
            T)
          )
            break;
          u = u.return;
        }
        0 < S.length &&
          ((p = new v(p, w, null, n, h)), m.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          p &&
            n !== io &&
            (w = n.relatedTarget || n.fromElement) &&
            (St(w) || w[Qe]))
        )
          break e;
        if (
          (v || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = c),
              (w = w ? St(w) : null),
              w !== null &&
                ((T = Nt(w)), w !== T || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = c)),
          v !== w)
        ) {
          if (
            ((S = Zl),
            (g = "onMouseLeave"),
            (d = "onMouseEnter"),
            (u = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Jl),
              (g = "onPointerLeave"),
              (d = "onPointerEnter"),
              (u = "pointer")),
            (T = v == null ? p : Ot(v)),
            (f = w == null ? p : Ot(w)),
            (p = new S(g, u + "leave", v, n, h)),
            (p.target = T),
            (p.relatedTarget = f),
            (g = null),
            St(h) === c &&
              ((S = new S(d, u + "enter", w, n, h)),
              (S.target = f),
              (S.relatedTarget = T),
              (g = S)),
            (T = g),
            v && w)
          )
            t: {
              for (S = v, d = w, u = 0, f = S; f; f = Tt(f)) u++;
              for (f = 0, g = d; g; g = Tt(g)) f++;
              for (; 0 < u - f;) ((S = Tt(S)), u--);
              for (; 0 < f - u;) ((d = Tt(d)), f--);
              for (; u--;) {
                if (S === d || (d !== null && S === d.alternate)) break t;
                ((S = Tt(S)), (d = Tt(d)));
              }
              S = null;
            }
          else S = null;
          (v !== null && ua(m, p, v, S, !1),
            w !== null && T !== null && ua(m, T, w, S, !0));
        }
      }
      e: {
        if (
          ((p = c ? Ot(c) : window),
          (v = p.nodeName && p.nodeName.toLowerCase()),
          v === "select" || (v === "input" && p.type === "file"))
        )
          var C = Td;
        else if (ta(p))
          if (Bs) C = Fd;
          else {
            C = Md;
            var E = Ld;
          }
        else
          (v = p.nodeName) &&
            v.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (C = Rd);
        if (C && (C = C(e, c))) {
          js(m, C, n, h);
          break e;
        }
        (E && E(e, p, c),
          e === "focusout" &&
            (E = p._wrapperState) &&
            E.controlled &&
            p.type === "number" &&
            bi(p, "number", p.value));
      }
      switch (((E = c ? Ot(c) : window), e)) {
        case "focusin":
          (ta(E) || E.contentEditable === "true") &&
            ((Ft = E), (fo = c), (Wn = null));
          break;
        case "focusout":
          Wn = fo = Ft = null;
          break;
        case "mousedown":
          po = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((po = !1), la(m, n, h));
          break;
        case "selectionchange":
          if (jd) break;
        case "keydown":
        case "keyup":
          la(m, n, h);
      }
      var x;
      if (rl)
        e: {
          switch (e) {
            case "compositionstart":
              var W = "onCompositionStart";
              break e;
            case "compositionend":
              W = "onCompositionEnd";
              break e;
            case "compositionupdate":
              W = "onCompositionUpdate";
              break e;
          }
          W = void 0;
        }
      else
        Rt
          ? Ds(e, n) && (W = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (W = "onCompositionStart");
      (W &&
        (Fs &&
          n.locale !== "ko" &&
          (Rt || W !== "onCompositionStart"
            ? W === "onCompositionEnd" && Rt && (x = Rs())
            : ((tt = h),
              (el = "value" in tt ? tt.value : tt.textContent),
              (Rt = !0))),
        (E = Dr(c, W)),
        0 < E.length &&
          ((W = new Xl(W, e, null, n, h)),
          m.push({ event: W, listeners: E }),
          x ? (W.data = x) : ((x = Os(n)), x !== null && (W.data = x)))),
        (x = Pd ? zd(e, n) : _d(e, n)) &&
          ((c = Dr(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new Xl("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: c }),
            (h.data = x))));
    }
    Zs(m, t);
  });
}
function Bn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Dr(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var i = e,
      o = i.stateNode;
    (i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Ln(e, n)),
      o != null && r.unshift(Bn(e, o, i)),
      (o = Ln(e, t)),
      o != null && r.push(Bn(e, o, i))),
      (e = e.return));
  }
  return r;
}
function Tt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ua(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r;) {
    var a = n,
      s = a.alternate,
      c = a.stateNode;
    if (s !== null && s === r) break;
    (a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((s = Ln(n, o)), s != null && l.unshift(Bn(n, s, a)))
        : i || ((s = Ln(n, o)), s != null && l.push(Bn(n, s, a)))),
      (n = n.return));
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Hd = /\r\n?/g,
  $d = /\u0000|\uFFFD/g;
function ca(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Hd,
      `
`,
    )
    .replace($d, "");
}
function dr(e, t, n) {
  if (((t = ca(t)), ca(e) !== t && n)) throw Error(y(425));
}
function Or() {}
var mo = null,
  ho = null;
function go(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var yo = typeof setTimeout == "function" ? setTimeout : void 0,
  Vd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  da = typeof Promise == "function" ? Promise : void 0,
  Qd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof da < "u"
        ? function (e) {
            return da.resolve(null).then(e).catch(Kd);
          }
        : yo;
function Kd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ri(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), Fn(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Fn(t);
}
function lt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function fa(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var an = Math.random().toString(36).slice(2),
  De = "__reactFiber$" + an,
  Un = "__reactProps$" + an,
  Qe = "__reactContainer$" + an,
  vo = "__reactEvents$" + an,
  Gd = "__reactListeners$" + an,
  Yd = "__reactHandles$" + an;
function St(e) {
  var t = e[De];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if ((t = n[Qe] || n[De])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fa(e); e !== null;) {
          if ((n = e[De])) return n;
          e = fa(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Xn(e) {
  return (
    (e = e[De] || e[Qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ot(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function oi(e) {
  return e[Un] || null;
}
var wo = [],
  jt = -1;
function mt(e) {
  return { current: e };
}
function D(e) {
  0 > jt || ((e.current = wo[jt]), (wo[jt] = null), jt--);
}
function R(e, t) {
  (jt++, (wo[jt] = e.current), (e.current = t));
}
var ft = {},
  ie = mt(ft),
  de = mt(!1),
  xt = ft;
function Jt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function fe(e) {
  return ((e = e.childContextTypes), e != null);
}
function jr() {
  (D(de), D(ie));
}
function pa(e, t, n) {
  if (ie.current !== ft) throw Error(y(168));
  (R(ie, t), R(de, n));
}
function Js(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(y(108, Lc(e) || "Unknown", i));
  return U({}, n, r);
}
function Br(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ft),
    (xt = ie.current),
    R(ie, e),
    R(de, de.current),
    !0
  );
}
function ma(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  (n
    ? ((e = Js(e, t, xt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      D(de),
      D(ie),
      R(ie, e))
    : D(de),
    R(de, n));
}
var Ue = null,
  li = !1,
  Fi = !1;
function bs(e) {
  Ue === null ? (Ue = [e]) : Ue.push(e);
}
function Zd(e) {
  ((li = !0), bs(e));
}
function ht() {
  if (!Fi && Ue !== null) {
    Fi = !0;
    var e = 0,
      t = M;
    try {
      var n = Ue;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Ue = null), (li = !1));
    } catch (i) {
      throw (Ue !== null && (Ue = Ue.slice(e + 1)), Es(Zo, ht), i);
    } finally {
      ((M = t), (Fi = !1));
    }
  }
  return null;
}
var Bt = [],
  Ut = 0,
  Ur = null,
  qr = 0,
  ke = [],
  Ce = 0,
  Wt = null,
  qe = 1,
  He = "";
function vt(e, t) {
  ((Bt[Ut++] = qr), (Bt[Ut++] = Ur), (Ur = e), (qr = t));
}
function eu(e, t, n) {
  ((ke[Ce++] = qe), (ke[Ce++] = He), (ke[Ce++] = Wt), (Wt = e));
  var r = qe;
  e = He;
  var i = 32 - Te(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var o = 32 - Te(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    ((o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (qe = (1 << (32 - Te(t) + i)) | (n << i) | r),
      (He = o + e));
  } else ((qe = (1 << o) | (n << i) | r), (He = e));
}
function ol(e) {
  e.return !== null && (vt(e, 1), eu(e, 1, 0));
}
function ll(e) {
  for (; e === Ur;)
    ((Ur = Bt[--Ut]), (Bt[Ut] = null), (qr = Bt[--Ut]), (Bt[Ut] = null));
  for (; e === Wt;)
    ((Wt = ke[--Ce]),
      (ke[Ce] = null),
      (He = ke[--Ce]),
      (ke[Ce] = null),
      (qe = ke[--Ce]),
      (ke[Ce] = null));
}
var ge = null,
  he = null,
  O = !1,
  Ne = null;
function tu(e, t) {
  var n = Ae(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function ha(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ge = e), (he = lt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ge = e), (he = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Wt !== null ? { id: qe, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ae(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ge = e),
            (he = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function So(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ko(e) {
  if (O) {
    var t = he;
    if (t) {
      var n = t;
      if (!ha(e, t)) {
        if (So(e)) throw Error(y(418));
        t = lt(n.nextSibling);
        var r = ge;
        t && ha(e, t)
          ? tu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (O = !1), (ge = e));
      }
    } else {
      if (So(e)) throw Error(y(418));
      ((e.flags = (e.flags & -4097) | 2), (O = !1), (ge = e));
    }
  }
}
function ga(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return;
  ge = e;
}
function fr(e) {
  if (e !== ge) return !1;
  if (!O) return (ga(e), (O = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !go(e.type, e.memoizedProps))),
    t && (t = he))
  ) {
    if (So(e)) throw (nu(), Error(y(418)));
    for (; t;) (tu(e, t), (t = lt(t.nextSibling)));
  }
  if ((ga(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              he = lt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ge ? lt(e.stateNode.nextSibling) : null;
  return !0;
}
function nu() {
  for (var e = he; e;) e = lt(e.nextSibling);
}
function bt() {
  ((he = ge = null), (O = !1));
}
function al(e) {
  Ne === null ? (Ne = [e]) : Ne.push(e);
}
var Xd = Ye.ReactCurrentBatchConfig;
function hn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var a = i.refs;
            l === null ? delete a[o] : (a[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function pr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function ya(e) {
  var t = e._init;
  return t(e._payload);
}
function ru(e) {
  function t(d, u) {
    if (e) {
      var f = d.deletions;
      f === null ? ((d.deletions = [u]), (d.flags |= 16)) : f.push(u);
    }
  }
  function n(d, u) {
    if (!e) return null;
    for (; u !== null;) (t(d, u), (u = u.sibling));
    return null;
  }
  function r(d, u) {
    for (d = new Map(); u !== null;)
      (u.key !== null ? d.set(u.key, u) : d.set(u.index, u), (u = u.sibling));
    return d;
  }
  function i(d, u) {
    return ((d = ct(d, u)), (d.index = 0), (d.sibling = null), d);
  }
  function o(d, u, f) {
    return (
      (d.index = f),
      e
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < u ? ((d.flags |= 2), u) : f)
            : ((d.flags |= 2), u))
        : ((d.flags |= 1048576), u)
    );
  }
  function l(d) {
    return (e && d.alternate === null && (d.flags |= 2), d);
  }
  function a(d, u, f, g) {
    return u === null || u.tag !== 6
      ? ((u = Hi(f, d.mode, g)), (u.return = d), u)
      : ((u = i(u, f)), (u.return = d), u);
  }
  function s(d, u, f, g) {
    var C = f.type;
    return C === Mt
      ? h(d, u, f.props.children, g, f.key)
      : u !== null &&
          (u.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === Xe &&
              ya(C) === u.type))
        ? ((g = i(u, f.props)), (g.ref = hn(d, u, f)), (g.return = d), g)
        : ((g = _r(f.type, f.key, f.props, null, d.mode, g)),
          (g.ref = hn(d, u, f)),
          (g.return = d),
          g);
  }
  function c(d, u, f, g) {
    return u === null ||
      u.tag !== 4 ||
      u.stateNode.containerInfo !== f.containerInfo ||
      u.stateNode.implementation !== f.implementation
      ? ((u = $i(f, d.mode, g)), (u.return = d), u)
      : ((u = i(u, f.children || [])), (u.return = d), u);
  }
  function h(d, u, f, g, C) {
    return u === null || u.tag !== 7
      ? ((u = Et(f, d.mode, g, C)), (u.return = d), u)
      : ((u = i(u, f)), (u.return = d), u);
  }
  function m(d, u, f) {
    if ((typeof u == "string" && u !== "") || typeof u == "number")
      return ((u = Hi("" + u, d.mode, f)), (u.return = d), u);
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case nr:
          return (
            (f = _r(u.type, u.key, u.props, null, d.mode, f)),
            (f.ref = hn(d, null, u)),
            (f.return = d),
            f
          );
        case Lt:
          return ((u = $i(u, d.mode, f)), (u.return = d), u);
        case Xe:
          var g = u._init;
          return m(d, g(u._payload), f);
      }
      if (wn(u) || cn(u))
        return ((u = Et(u, d.mode, f, null)), (u.return = d), u);
      pr(d, u);
    }
    return null;
  }
  function p(d, u, f, g) {
    var C = u !== null ? u.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return C !== null ? null : a(d, u, "" + f, g);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case nr:
          return f.key === C ? s(d, u, f, g) : null;
        case Lt:
          return f.key === C ? c(d, u, f, g) : null;
        case Xe:
          return ((C = f._init), p(d, u, C(f._payload), g));
      }
      if (wn(f) || cn(f)) return C !== null ? null : h(d, u, f, g, null);
      pr(d, f);
    }
    return null;
  }
  function v(d, u, f, g, C) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return ((d = d.get(f) || null), a(u, d, "" + g, C));
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case nr:
          return (
            (d = d.get(g.key === null ? f : g.key) || null),
            s(u, d, g, C)
          );
        case Lt:
          return (
            (d = d.get(g.key === null ? f : g.key) || null),
            c(u, d, g, C)
          );
        case Xe:
          var E = g._init;
          return v(d, u, f, E(g._payload), C);
      }
      if (wn(g) || cn(g)) return ((d = d.get(f) || null), h(u, d, g, C, null));
      pr(u, g);
    }
    return null;
  }
  function w(d, u, f, g) {
    for (
      var C = null, E = null, x = u, W = (u = 0), H = null;
      x !== null && W < f.length;
      W++
    ) {
      x.index > W ? ((H = x), (x = null)) : (H = x.sibling);
      var N = p(d, x, f[W], g);
      if (N === null) {
        x === null && (x = H);
        break;
      }
      (e && x && N.alternate === null && t(d, x),
        (u = o(N, u, W)),
        E === null ? (C = N) : (E.sibling = N),
        (E = N),
        (x = H));
    }
    if (W === f.length) return (n(d, x), O && vt(d, W), C);
    if (x === null) {
      for (; W < f.length; W++)
        ((x = m(d, f[W], g)),
          x !== null &&
            ((u = o(x, u, W)),
            E === null ? (C = x) : (E.sibling = x),
            (E = x)));
      return (O && vt(d, W), C);
    }
    for (x = r(d, x); W < f.length; W++)
      ((H = v(x, d, W, f[W], g)),
        H !== null &&
          (e && H.alternate !== null && x.delete(H.key === null ? W : H.key),
          (u = o(H, u, W)),
          E === null ? (C = H) : (E.sibling = H),
          (E = H)));
    return (
      e &&
        x.forEach(function (Pe) {
          return t(d, Pe);
        }),
      O && vt(d, W),
      C
    );
  }
  function S(d, u, f, g) {
    var C = cn(f);
    if (typeof C != "function") throw Error(y(150));
    if (((f = C.call(f)), f == null)) throw Error(y(151));
    for (
      var E = (C = null), x = u, W = (u = 0), H = null, N = f.next();
      x !== null && !N.done;
      W++, N = f.next()
    ) {
      x.index > W ? ((H = x), (x = null)) : (H = x.sibling);
      var Pe = p(d, x, N.value, g);
      if (Pe === null) {
        x === null && (x = H);
        break;
      }
      (e && x && Pe.alternate === null && t(d, x),
        (u = o(Pe, u, W)),
        E === null ? (C = Pe) : (E.sibling = Pe),
        (E = Pe),
        (x = H));
    }
    if (N.done) return (n(d, x), O && vt(d, W), C);
    if (x === null) {
      for (; !N.done; W++, N = f.next())
        ((N = m(d, N.value, g)),
          N !== null &&
            ((u = o(N, u, W)),
            E === null ? (C = N) : (E.sibling = N),
            (E = N)));
      return (O && vt(d, W), C);
    }
    for (x = r(d, x); !N.done; W++, N = f.next())
      ((N = v(x, d, W, N.value, g)),
        N !== null &&
          (e && N.alternate !== null && x.delete(N.key === null ? W : N.key),
          (u = o(N, u, W)),
          E === null ? (C = N) : (E.sibling = N),
          (E = N)));
    return (
      e &&
        x.forEach(function (sn) {
          return t(d, sn);
        }),
      O && vt(d, W),
      C
    );
  }
  function T(d, u, f, g) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Mt &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case nr:
          e: {
            for (var C = f.key, E = u; E !== null;) {
              if (E.key === C) {
                if (((C = f.type), C === Mt)) {
                  if (E.tag === 7) {
                    (n(d, E.sibling),
                      (u = i(E, f.props.children)),
                      (u.return = d),
                      (d = u));
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Xe &&
                    ya(C) === E.type)
                ) {
                  (n(d, E.sibling),
                    (u = i(E, f.props)),
                    (u.ref = hn(d, E, f)),
                    (u.return = d),
                    (d = u));
                  break e;
                }
                n(d, E);
                break;
              } else t(d, E);
              E = E.sibling;
            }
            f.type === Mt
              ? ((u = Et(f.props.children, d.mode, g, f.key)),
                (u.return = d),
                (d = u))
              : ((g = _r(f.type, f.key, f.props, null, d.mode, g)),
                (g.ref = hn(d, u, f)),
                (g.return = d),
                (d = g));
          }
          return l(d);
        case Lt:
          e: {
            for (E = f.key; u !== null;) {
              if (u.key === E)
                if (
                  u.tag === 4 &&
                  u.stateNode.containerInfo === f.containerInfo &&
                  u.stateNode.implementation === f.implementation
                ) {
                  (n(d, u.sibling),
                    (u = i(u, f.children || [])),
                    (u.return = d),
                    (d = u));
                  break e;
                } else {
                  n(d, u);
                  break;
                }
              else t(d, u);
              u = u.sibling;
            }
            ((u = $i(f, d.mode, g)), (u.return = d), (d = u));
          }
          return l(d);
        case Xe:
          return ((E = f._init), T(d, u, E(f._payload), g));
      }
      if (wn(f)) return w(d, u, f, g);
      if (cn(f)) return S(d, u, f, g);
      pr(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        u !== null && u.tag === 6
          ? (n(d, u.sibling), (u = i(u, f)), (u.return = d), (d = u))
          : (n(d, u), (u = Hi(f, d.mode, g)), (u.return = d), (d = u)),
        l(d))
      : n(d, u);
  }
  return T;
}
var en = ru(!0),
  iu = ru(!1),
  Hr = mt(null),
  $r = null,
  qt = null,
  sl = null;
function ul() {
  sl = qt = $r = null;
}
function cl(e) {
  var t = Hr.current;
  (D(Hr), (e._currentValue = t));
}
function Co(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Yt(e, t) {
  (($r = e),
    (sl = qt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ce = !0), (e.firstContext = null)));
}
function xe(e) {
  var t = e._currentValue;
  if (sl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), qt === null)) {
      if ($r === null) throw Error(y(308));
      ((qt = e), ($r.dependencies = { lanes: 0, firstContext: e }));
    } else qt = qt.next = e;
  return t;
}
var kt = null;
function dl(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
function ou(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), dl(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Ke(e, r)
  );
}
function Ke(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Je = !1;
function fl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function lu(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function $e(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), L & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Ke(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), dl(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Ke(e, n)
  );
}
function Ar(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xo(e, n));
  }
}
function va(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (o === null ? (i = o = l) : (o = o.next = l), (n = n.next));
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Vr(e, t, n, r) {
  var i = e.updateQueue;
  Je = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var s = a,
      c = s.next;
    ((s.next = null), l === null ? (o = c) : (l.next = c), (l = s));
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (a = h.lastBaseUpdate),
      a !== l &&
        (a === null ? (h.firstBaseUpdate = c) : (a.next = c),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = i.baseState;
    ((l = 0), (h = c = s = null), (a = o));
    do {
      var p = a.lane,
        v = a.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            S = a;
          switch (((p = t), (v = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                m = w.call(v, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (p = typeof w == "function" ? w.call(v, m, p) : w),
                p == null)
              )
                break e;
              m = U({}, m, p);
              break e;
            case 2:
              Je = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [a]) : p.push(a));
      } else
        ((v = {
          eventTime: v,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          h === null ? ((c = h = v), (s = m)) : (h = h.next = v),
          (l |= p));
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        ((p = a),
          (a = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (h === null && (s = m),
      (i.baseState = s),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = h),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((l |= i.lane), (i = i.next));
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    ((zt |= l), (e.lanes = l), (e.memoizedState = m));
  }
}
function wa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(y(191, i));
        i.call(r);
      }
    }
}
var Jn = {},
  je = mt(Jn),
  qn = mt(Jn),
  Hn = mt(Jn);
function Ct(e) {
  if (e === Jn) throw Error(y(174));
  return e;
}
function pl(e, t) {
  switch ((R(Hn, t), R(qn, e), R(je, Jn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : to(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = to(t, e)));
  }
  (D(je), R(je, t));
}
function tn() {
  (D(je), D(qn), D(Hn));
}
function au(e) {
  Ct(Hn.current);
  var t = Ct(je.current),
    n = to(t, e.type);
  t !== n && (R(qn, e), R(je, n));
}
function ml(e) {
  qn.current === e && (D(je), D(qn));
}
var j = mt(0);
function Qr(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Di = [];
function hl() {
  for (var e = 0; e < Di.length; e++)
    Di[e]._workInProgressVersionPrimary = null;
  Di.length = 0;
}
var Er = Ye.ReactCurrentDispatcher,
  Oi = Ye.ReactCurrentBatchConfig,
  Pt = 0,
  B = null,
  K = null,
  Z = null,
  Kr = !1,
  Pn = !1,
  $n = 0,
  Jd = 0;
function te() {
  throw Error(y(321));
}
function gl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function yl(e, t, n, r, i, o) {
  if (
    ((Pt = o),
    (B = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Er.current = e === null || e.memoizedState === null ? nf : rf),
    (e = n(r, i)),
    Pn)
  ) {
    o = 0;
    do {
      if (((Pn = !1), ($n = 0), 25 <= o)) throw Error(y(301));
      ((o += 1),
        (Z = K = null),
        (t.updateQueue = null),
        (Er.current = of),
        (e = n(r, i)));
    } while (Pn);
  }
  if (
    ((Er.current = Gr),
    (t = K !== null && K.next !== null),
    (Pt = 0),
    (Z = K = B = null),
    (Kr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function vl() {
  var e = $n !== 0;
  return (($n = 0), e);
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Z === null ? (B.memoizedState = Z = e) : (Z = Z.next = e), Z);
}
function We() {
  if (K === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var t = Z === null ? B.memoizedState : Z.next;
  if (t !== null) ((Z = t), (K = e));
  else {
    if (e === null) throw Error(y(310));
    ((K = e),
      (e = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null,
      }),
      Z === null ? (B.memoizedState = Z = e) : (Z = Z.next = e));
  }
  return Z;
}
function Vn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ji(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = K,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      ((i.next = o.next), (o.next = l));
    }
    ((r.baseQueue = i = o), (n.pending = null));
  }
  if (i !== null) {
    ((o = i.next), (r = r.baseState));
    var a = (l = null),
      s = null,
      c = o;
    do {
      var h = c.lane;
      if ((Pt & h) === h)
        (s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (s === null ? ((a = s = m), (l = r)) : (s = s.next = m),
          (B.lanes |= h),
          (zt |= h));
      }
      c = c.next;
    } while (c !== null && c !== o);
    (s === null ? (l = r) : (s.next = a),
      Me(r, t.memoizedState) || (ce = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((o = i.lane), (B.lanes |= o), (zt |= o), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bi(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do ((o = e(o, l.action)), (l = l.next));
    while (l !== i);
    (Me(o, t.memoizedState) || (ce = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function su() {}
function uu(e, t) {
  var n = B,
    r = We(),
    i = t(),
    o = !Me(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (ce = !0)),
    (r = r.queue),
    wl(fu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qn(9, du.bind(null, n, r, i, t), void 0, null),
      X === null)
    )
      throw Error(y(349));
    Pt & 30 || cu(n, t, i);
  }
  return i;
}
function cu(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function du(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), pu(t) && mu(e));
}
function fu(e, t, n) {
  return n(function () {
    pu(t) && mu(e);
  });
}
function pu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function mu(e) {
  var t = Ke(e, 1);
  t !== null && Le(t, e, 1, -1);
}
function Sa(e) {
  var t = Fe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = tf.bind(null, B, e)),
    [t.memoizedState, e]
  );
}
function Qn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function hu() {
  return We().memoizedState;
}
function xr(e, t, n, r) {
  var i = Fe();
  ((B.flags |= e),
    (i.memoizedState = Qn(1 | t, n, void 0, r === void 0 ? null : r)));
}
function ai(e, t, n, r) {
  var i = We();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (K !== null) {
    var l = K.memoizedState;
    if (((o = l.destroy), r !== null && gl(r, l.deps))) {
      i.memoizedState = Qn(t, n, o, r);
      return;
    }
  }
  ((B.flags |= e), (i.memoizedState = Qn(1 | t, n, o, r)));
}
function ka(e, t) {
  return xr(8390656, 8, e, t);
}
function wl(e, t) {
  return ai(2048, 8, e, t);
}
function gu(e, t) {
  return ai(4, 2, e, t);
}
function yu(e, t) {
  return ai(4, 4, e, t);
}
function vu(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function wu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    ai(4, 4, vu.bind(null, t, e), n)
  );
}
function Sl() {}
function Su(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ku(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Cu(e, t, n) {
  return Pt & 21
    ? (Me(n, t) || ((n = Ps()), (B.lanes |= n), (zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function bd(e, t) {
  var n = M;
  ((M = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Oi.transition;
  Oi.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((M = n), (Oi.transition = r));
  }
}
function Au() {
  return We().memoizedState;
}
function ef(e, t, n) {
  var r = ut(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Eu(e))
  )
    xu(t, n);
  else if (((n = ou(e, t, n, r)), n !== null)) {
    var i = le();
    (Le(n, e, r, i), Wu(n, t, r));
  }
}
function tf(e, t, n) {
  var r = ut(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Eu(e)) xu(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Me(a, l))) {
          var s = t.interleaved;
          (s === null
            ? ((i.next = i), dl(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = ou(e, t, i, r)),
      n !== null && ((i = le()), Le(n, e, r, i), Wu(n, t, r)));
  }
}
function Eu(e) {
  var t = e.alternate;
  return e === B || (t !== null && t === B);
}
function xu(e, t) {
  Pn = Kr = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Wu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xo(e, n));
  }
}
var Gr = {
    readContext: xe,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  nf = {
    readContext: xe,
    useCallback: function (e, t) {
      return ((Fe().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: xe,
    useEffect: ka,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        xr(4194308, 4, vu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return xr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return xr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ef.bind(null, B, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Sa,
    useDebugValue: Sl,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = Sa(!1),
        t = e[0];
      return ((e = bd.bind(null, e[1])), (Fe().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = B,
        i = Fe();
      if (O) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), X === null)) throw Error(y(349));
        Pt & 30 || cu(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        ka(fu.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Qn(9, du.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = X.identifierPrefix;
      if (O) {
        var n = He,
          r = qe;
        ((n = (r & ~(1 << (32 - Te(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = $n++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Jd++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  rf = {
    readContext: xe,
    useCallback: Su,
    useContext: xe,
    useEffect: wl,
    useImperativeHandle: wu,
    useInsertionEffect: gu,
    useLayoutEffect: yu,
    useMemo: ku,
    useReducer: ji,
    useRef: hu,
    useState: function () {
      return ji(Vn);
    },
    useDebugValue: Sl,
    useDeferredValue: function (e) {
      var t = We();
      return Cu(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = ji(Vn)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: su,
    useSyncExternalStore: uu,
    useId: Au,
    unstable_isNewReconciler: !1,
  },
  of = {
    readContext: xe,
    useCallback: Su,
    useContext: xe,
    useEffect: wl,
    useImperativeHandle: wu,
    useInsertionEffect: gu,
    useLayoutEffect: yu,
    useMemo: ku,
    useReducer: Bi,
    useRef: hu,
    useState: function () {
      return Bi(Vn);
    },
    useDebugValue: Sl,
    useDeferredValue: function (e) {
      var t = We();
      return K === null ? (t.memoizedState = e) : Cu(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Bi(Vn)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: su,
    useSyncExternalStore: uu,
    useId: Au,
    unstable_isNewReconciler: !1,
  };
function _e(e, t) {
  if (e && e.defaultProps) {
    ((t = U({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ao(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : U({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var si = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Nt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = le(),
      i = ut(e),
      o = $e(r, i);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = at(e, o, i)),
      t !== null && (Le(t, e, i, r), Ar(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = le(),
      i = ut(e),
      o = $e(r, i);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = at(e, o, i)),
      t !== null && (Le(t, e, i, r), Ar(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = le(),
      r = ut(e),
      i = $e(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = at(e, i, r)),
      t !== null && (Le(t, e, r, n), Ar(t, e, r)));
  },
};
function Ca(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !On(n, r) || !On(i, o)
        : !0
  );
}
function Pu(e, t, n) {
  var r = !1,
    i = ft,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = xe(o))
      : ((i = fe(t) ? xt : ie.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Jt(e, i) : ft)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = si),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Aa(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && si.enqueueReplaceState(t, t.state, null));
}
function Eo(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), fl(e));
  var o = t.contextType;
  (typeof o == "object" && o !== null
    ? (i.context = xe(o))
    : ((o = fe(t) ? xt : ie.current), (i.context = Jt(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ao(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && si.enqueueReplaceState(i, i.state, null),
      Vr(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function nn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Tc(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ui(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var lf = typeof WeakMap == "function" ? WeakMap : Map;
function zu(e, t, n) {
  ((n = $e(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Zr || ((Zr = !0), (Ro = r)), xo(e, t));
    }),
    n
  );
}
function _u(e, t, n) {
  ((n = $e(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        xo(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        (xo(e, t),
          typeof r != "function" &&
            (st === null ? (st = new Set([this])) : st.add(this)));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Ea(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new lf();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = Sf.bind(null, e, t, n)), t.then(e, e));
}
function xa(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Wa(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = $e(-1, 1)), (t.tag = 2), at(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var af = Ye.ReactCurrentOwner,
  ce = !1;
function oe(e, t, n, r) {
  t.child = e === null ? iu(t, null, n, r) : en(t, e.child, n, r);
}
function Pa(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Yt(t, i),
    (r = yl(e, t, n, r, o, i)),
    (n = vl()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ge(e, t, i))
      : (O && n && ol(t), (t.flags |= 1), oe(e, t, r, i), t.child)
  );
}
function za(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !zl(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Iu(e, t, o, r, i))
      : ((e = _r(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : On), n(l, r) && e.ref === t.ref)
    )
      return Ge(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = ct(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Iu(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (On(o, r) && e.ref === t.ref)
      if (((ce = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (ce = !0);
      else return ((t.lanes = e.lanes), Ge(e, t, i));
  }
  return Wo(e, t, n, r, i);
}
function Nu(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        R($t, me),
        (me |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          R($t, me),
          (me |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        R($t, me),
        (me |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      R($t, me),
      (me |= r));
  return (oe(e, t, i, n), t.child);
}
function Tu(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Wo(e, t, n, r, i) {
  var o = fe(n) ? xt : ie.current;
  return (
    (o = Jt(t, o)),
    Yt(t, i),
    (n = yl(e, t, n, r, o, i)),
    (r = vl()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ge(e, t, i))
      : (O && r && ol(t), (t.flags |= 1), oe(e, t, n, i), t.child)
  );
}
function _a(e, t, n, r, i) {
  if (fe(n)) {
    var o = !0;
    Br(t);
  } else o = !1;
  if ((Yt(t, i), t.stateNode === null))
    (Wr(e, t), Pu(t, n, r), Eo(t, n, r, i), (r = !0));
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = xe(c))
      : ((c = fe(n) ? xt : ie.current), (c = Jt(t, c)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    (m ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || s !== c) && Aa(t, l, r, c)),
      (Je = !1));
    var p = t.memoizedState;
    ((l.state = p),
      Vr(t, r, l, i),
      (s = t.memoizedState),
      a !== r || p !== s || de.current || Je
        ? (typeof h == "function" && (Ao(t, n, h, r), (s = t.memoizedState)),
          (a = Je || Ca(t, n, a, r, p, s, c))
            ? (m ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = c),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((l = t.stateNode),
      lu(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : _e(t.type, a)),
      (l.props = c),
      (m = t.pendingProps),
      (p = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = xe(s))
        : ((s = fe(n) ? xt : ie.current), (s = Jt(t, s))));
    var v = n.getDerivedStateFromProps;
    ((h =
      typeof v == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== m || p !== s) && Aa(t, l, r, s)),
      (Je = !1),
      (p = t.memoizedState),
      (l.state = p),
      Vr(t, r, l, i));
    var w = t.memoizedState;
    a !== m || p !== w || de.current || Je
      ? (typeof v == "function" && (Ao(t, n, v, r), (w = t.memoizedState)),
        (c = Je || Ca(t, n, c, r, p, w, s) || !1)
          ? (h ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, w, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, w, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (l.props = r),
        (l.state = w),
        (l.context = s),
        (r = c))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Po(e, t, n, r, o, i);
}
function Po(e, t, n, r, i, o) {
  Tu(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return (i && ma(t, n, !1), Ge(e, t, o));
  ((r = t.stateNode), (af.current = t));
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = en(t, e.child, null, o)), (t.child = en(t, null, a, o)))
      : oe(e, t, a, o),
    (t.memoizedState = r.state),
    i && ma(t, n, !0),
    t.child
  );
}
function Lu(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? pa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && pa(e, t.context, !1),
    pl(e, t.containerInfo));
}
function Ia(e, t, n, r, i) {
  return (bt(), al(i), (t.flags |= 256), oe(e, t, n, r), t.child);
}
var zo = { dehydrated: null, treeContext: null, retryLane: 0 };
function _o(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Mu(e, t, n) {
  var r = t.pendingProps,
    i = j.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    R(j, i & 1),
    e === null)
  )
    return (
      ko(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = di(l, r, 0, null)),
              (e = Et(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = _o(n)),
              (t.memoizedState = zo),
              e)
            : kl(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return sf(e, t, l, r, a, i, n);
  if (o) {
    ((o = r.fallback), (l = t.mode), (i = e.child), (a = i.sibling));
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ct(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = ct(a, o)) : ((o = Et(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? _o(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = zo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ct(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function kl(e, t) {
  return (
    (t = di({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function mr(e, t, n, r) {
  return (
    r !== null && al(r),
    en(t, e.child, null, n),
    (e = kl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function sf(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ui(Error(y(422)))), mr(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = di({ mode: "visible", children: r.children }, i, 0, null)),
          (o = Et(o, i, l, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && en(t, e.child, null, l),
          (t.child.memoizedState = _o(l)),
          (t.memoizedState = zo),
          o);
  if (!(t.mode & 1)) return mr(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (o = Error(y(419))),
      (r = Ui(o, r, void 0)),
      mr(e, t, l, r)
    );
  }
  if (((a = (l & e.childLanes) !== 0), ce || a)) {
    if (((r = X), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Ke(e, i), Le(r, e, i, -1)));
    }
    return (Pl(), (r = Ui(Error(y(421)))), mr(e, t, l, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = kf.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (he = lt(i.nextSibling)),
      (ge = t),
      (O = !0),
      (Ne = null),
      e !== null &&
        ((ke[Ce++] = qe),
        (ke[Ce++] = He),
        (ke[Ce++] = Wt),
        (qe = e.id),
        (He = e.overflow),
        (Wt = t)),
      (t = kl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Na(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Co(e.return, t, n));
}
function qi(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Ru(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((oe(e, t, r.children, n), (r = j.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && Na(e, n, t);
        else if (e.tag === 19) Na(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((R(j, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null;)
          ((e = n.alternate),
            e !== null && Qr(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          qi(t, !1, i, n, o));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null;) {
          if (((e = i.alternate), e !== null && Qr(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        qi(t, !0, n, null, o);
        break;
      case "together":
        qi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ge(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = ct(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function uf(e, t, n) {
  switch (t.tag) {
    case 3:
      (Lu(t), bt());
      break;
    case 5:
      au(t);
      break;
    case 1:
      fe(t.type) && Br(t);
      break;
    case 4:
      pl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (R(Hr, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (R(j, j.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Mu(e, t, n)
            : (R(j, j.current & 1),
              (e = Ge(e, t, n)),
              e !== null ? e.sibling : null);
      R(j, j.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ru(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        R(j, j.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Nu(e, t, n));
  }
  return Ge(e, t, n);
}
var Fu, Io, Du, Ou;
Fu = function (e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Io = function () {};
Du = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), Ct(je.current));
    var o = null;
    switch (n) {
      case "input":
        ((i = Xi(e, i)), (r = Xi(e, r)), (o = []));
        break;
      case "select":
        ((i = U({}, i, { value: void 0 })),
          (r = U({}, r, { value: void 0 })),
          (o = []));
        break;
      case "textarea":
        ((i = eo(e, i)), (r = eo(e, r)), (o = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Or);
    }
    no(n, r);
    var l;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Nn.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((a = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && s !== a && (s != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else (n || (o || (o = []), o.push(c, n)), (n = s));
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (o = o || []).push(c, s))
            : c === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (o = o || []).push(c, "" + s)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Nn.hasOwnProperty(c)
                  ? (s != null && c === "onScroll" && F("scroll", e),
                    o || a === s || (o = []))
                  : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ou = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gn(e, t) {
  if (!O)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null;)
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null;)
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null;)
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null;)
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function cf(e, t, n) {
  var r = t.pendingProps;
  switch ((ll(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (ne(t), null);
    case 1:
      return (fe(t.type) && jr(), ne(t), null);
    case 3:
      return (
        (r = t.stateNode),
        tn(),
        D(de),
        D(ie),
        hl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (fr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ne !== null && (Oo(Ne), (Ne = null)))),
        Io(e, t),
        ne(t),
        null
      );
    case 5:
      ml(t);
      var i = Ct(Hn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Du(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return (ne(t), null);
        }
        if (((e = Ct(je.current)), fr(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[De] = t), (r[Un] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (F("cancel", r), F("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < kn.length; i++) F(kn[i], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (F("error", r), F("load", r));
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              (Bl(r, o), F("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!o.multiple }),
                F("invalid", r));
              break;
            case "textarea":
              (ql(r, o), F("invalid", r));
          }
          (no(n, o), (i = null));
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var a = o[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Nn.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              (rr(r), Ul(r, o, !0));
              break;
            case "textarea":
              (rr(r), Hl(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Or);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = fs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = l.createElement(n, { is: r.is }))
                  : ((e = l.createElement(n)),
                    n === "select" &&
                      ((l = e),
                      r.multiple
                        ? (l.multiple = !0)
                        : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[De] = t),
            (e[Un] = r),
            Fu(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((l = ro(n, r)), n)) {
              case "dialog":
                (F("cancel", e), F("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (F("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < kn.length; i++) F(kn[i], e);
                i = r;
                break;
              case "source":
                (F("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (F("error", e), F("load", e), (i = r));
                break;
              case "details":
                (F("toggle", e), (i = r));
                break;
              case "input":
                (Bl(e, r), (i = Xi(e, r)), F("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = U({}, r, { value: void 0 })),
                  F("invalid", e));
                break;
              case "textarea":
                (ql(e, r), (i = eo(e, r)), F("invalid", e));
                break;
              default:
                i = r;
            }
            (no(n, i), (a = i));
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var s = a[o];
                o === "style"
                  ? hs(e, s)
                  : o === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && ps(e, s))
                    : o === "children"
                      ? typeof s == "string"
                        ? (n !== "textarea" || s !== "") && Tn(e, s)
                        : typeof s == "number" && Tn(e, "" + s)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Nn.hasOwnProperty(o)
                          ? s != null && o === "onScroll" && F("scroll", e)
                          : s != null && Vo(e, o, s, l));
              }
            switch (n) {
              case "input":
                (rr(e), Ul(e, r, !1));
                break;
              case "textarea":
                (rr(e), Hl(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Vt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Vt(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Or);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (ne(t), null);
    case 6:
      if (e && t.stateNode != null) Ou(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = Ct(Hn.current)), Ct(je.current), fr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[De] = t),
            (o = r.nodeValue !== n) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                dr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  dr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[De] = t),
            (t.stateNode = r));
      }
      return (ne(t), null);
    case 13:
      if (
        (D(j),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (O && he !== null && t.mode & 1 && !(t.flags & 128))
          (nu(), bt(), (t.flags |= 98560), (o = !1));
        else if (((o = fr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[De] = t;
          } else
            (bt(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ne(t), (o = !1));
        } else (Ne !== null && (Oo(Ne), (Ne = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || j.current & 1 ? G === 0 && (G = 3) : Pl())),
          t.updateQueue !== null && (t.flags |= 4),
          ne(t),
          null);
    case 4:
      return (
        tn(),
        Io(e, t),
        e === null && jn(t.stateNode.containerInfo),
        ne(t),
        null
      );
    case 10:
      return (cl(t.type._context), ne(t), null);
    case 17:
      return (fe(t.type) && jr(), ne(t), null);
    case 19:
      if ((D(j), (o = t.memoizedState), o === null)) return (ne(t), null);
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) gn(o, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null;) {
              if (((l = Qr(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    gn(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (R(j, (j.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            V() > rn &&
            ((t.flags |= 128), (r = !0), gn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Qr(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !O)
            )
              return (ne(t), null);
          } else
            2 * V() - o.renderingStartTime > rn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), gn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = V()),
          (t.sibling = null),
          (n = j.current),
          R(j, r ? (n & 1) | 2 : n & 1),
          t)
        : (ne(t), null);
    case 22:
    case 23:
      return (
        Wl(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? me & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function df(e, t) {
  switch ((ll(t), t.tag)) {
    case 1:
      return (
        fe(t.type) && jr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        tn(),
        D(de),
        D(ie),
        hl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (ml(t), null);
    case 13:
      if ((D(j), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        bt();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (D(j), null);
    case 4:
      return (tn(), null);
    case 10:
      return (cl(t.type._context), null);
    case 22:
    case 23:
      return (Wl(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var hr = !1,
  re = !1,
  ff = typeof WeakSet == "function" ? WeakSet : Set,
  k = null;
function Ht(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        q(e, t, r);
      }
    else n.current = null;
}
function No(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var Ta = !1;
function pf(e, t) {
  if (((mo = Rr), (e = Hs()), il(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, o.nodeType);
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var v;
              m !== n || (i !== 0 && m.nodeType !== 3) || (a = l + i),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = l + r),
                m.nodeType === 3 && (l += m.nodeValue.length),
                (v = m.firstChild) !== null;
            )
              ((p = m), (m = v));
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++c === i && (a = l),
                p === o && ++h === r && (s = l),
                (v = m.nextSibling) !== null)
              )
                break;
              ((m = p), (p = m.parentNode));
            }
            m = v;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ho = { focusedElem: e, selectionRange: n }, Rr = !1, k = t; k !== null;)
    if (((t = k), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (k = e));
    else
      for (; k !== null;) {
        t = k;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    T = w.memoizedState,
                    d = t.stateNode,
                    u = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : _e(t.type, S),
                      T,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = u;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          q(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (k = e));
          break;
        }
        k = t.return;
      }
  return ((w = Ta), (Ta = !1), w);
}
function zn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        ((i.destroy = void 0), o !== void 0 && No(t, n, o));
      }
      i = i.next;
    } while (i !== r);
  }
}
function ui(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function To(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ju(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), ju(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[De], delete t[Un], delete t[vo], delete t[Gd], delete t[Yd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Bu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function La(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || Bu(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Lo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Or)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Lo(e, t, n), e = e.sibling; e !== null;)
      (Lo(e, t, n), (e = e.sibling));
}
function Mo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mo(e, t, n), e = e.sibling; e !== null;)
      (Mo(e, t, n), (e = e.sibling));
}
var J = null,
  Ie = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null;) (Uu(e, t, n), (n = n.sibling));
}
function Uu(e, t, n) {
  if (Oe && typeof Oe.onCommitFiberUnmount == "function")
    try {
      Oe.onCommitFiberUnmount(ti, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Ht(n, t);
    case 6:
      var r = J,
        i = Ie;
      ((J = null),
        Ze(e, t, n),
        (J = r),
        (Ie = i),
        J !== null &&
          (Ie
            ? ((e = J),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : J.removeChild(n.stateNode)));
      break;
    case 18:
      J !== null &&
        (Ie
          ? ((e = J),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ri(e.parentNode, n)
              : e.nodeType === 1 && Ri(e, n),
            Fn(e))
          : Ri(J, n.stateNode));
      break;
    case 4:
      ((r = J),
        (i = Ie),
        (J = n.stateNode.containerInfo),
        (Ie = !0),
        Ze(e, t, n),
        (J = r),
        (Ie = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          ((o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && No(n, t, l),
            (i = i.next));
        } while (i !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !re &&
        (Ht(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          q(n, t, a);
        }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((re = (r = re) || n.memoizedState !== null), Ze(e, t, n), (re = r))
        : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function Ma(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new ff()),
      t.forEach(function (r) {
        var i = Cf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          a = l;
        e: for (; a !== null;) {
          switch (a.tag) {
            case 5:
              ((J = a.stateNode), (Ie = !1));
              break e;
            case 3:
              ((J = a.stateNode.containerInfo), (Ie = !0));
              break e;
            case 4:
              ((J = a.stateNode.containerInfo), (Ie = !0));
              break e;
          }
          a = a.return;
        }
        if (J === null) throw Error(y(160));
        (Uu(o, l, i), (J = null), (Ie = !1));
        var s = i.alternate;
        (s !== null && (s.return = null), (i.return = null));
      } catch (c) {
        q(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) (qu(t, e), (t = t.sibling));
}
function qu(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), Re(e), r & 4)) {
        try {
          (zn(3, e, e.return), ui(3, e));
        } catch (S) {
          q(e, e.return, S);
        }
        try {
          zn(5, e, e.return);
        } catch (S) {
          q(e, e.return, S);
        }
      }
      break;
    case 1:
      (ze(t, e), Re(e), r & 512 && n !== null && Ht(n, n.return));
      break;
    case 5:
      if (
        (ze(t, e),
        Re(e),
        r & 512 && n !== null && Ht(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Tn(i, "");
        } catch (S) {
          q(e, e.return, S);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            (a === "input" && o.type === "radio" && o.name != null && cs(i, o),
              ro(a, l));
            var c = ro(a, o);
            for (l = 0; l < s.length; l += 2) {
              var h = s[l],
                m = s[l + 1];
              h === "style"
                ? hs(i, m)
                : h === "dangerouslySetInnerHTML"
                  ? ps(i, m)
                  : h === "children"
                    ? Tn(i, m)
                    : Vo(i, h, m, c);
            }
            switch (a) {
              case "input":
                Ji(i, o);
                break;
              case "textarea":
                ds(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? Vt(i, !!o.multiple, v, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Vt(i, !!o.multiple, o.defaultValue, !0)
                      : Vt(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Un] = o;
          } catch (S) {
            q(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((ze(t, e), Re(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        ((i = e.stateNode), (o = e.memoizedProps));
        try {
          i.nodeValue = o;
        } catch (S) {
          q(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), Re(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fn(t.containerInfo);
        } catch (S) {
          q(e, e.return, S);
        }
      break;
    case 4:
      (ze(t, e), Re(e));
      break;
    case 13:
      (ze(t, e),
        Re(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (El = V())),
        r & 4 && Ma(e));
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || h), ze(t, e), (re = c)) : ze(t, e),
        Re(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (k = e, h = e.child; h !== null;) {
            for (m = k = h; k !== null;) {
              switch (((p = k), (v = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zn(4, p, p.return);
                  break;
                case 1:
                  Ht(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((r = p), (n = p.return));
                    try {
                      ((t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (S) {
                      q(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Ht(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Fa(m);
                    continue;
                  }
              }
              v !== null ? ((v.return = p), (k = v)) : Fa(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ;) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                ((i = m.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = m.stateNode),
                      (s = m.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = ms("display", l))));
              } catch (S) {
                q(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (S) {
                q(e, e.return, S);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            ((m.child.return = m), (m = m.child));
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null;) {
            if (m.return === null || m.return === e) break e;
            (h === m && (h = null), (m = m.return));
          }
          (h === m && (h = null),
            (m.sibling.return = m.return),
            (m = m.sibling));
        }
      }
      break;
    case 19:
      (ze(t, e), Re(e), r & 4 && Ma(e));
      break;
    case 21:
      break;
    default:
      (ze(t, e), Re(e));
  }
}
function Re(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (Bu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Tn(i, ""), (r.flags &= -33));
          var o = La(e);
          Mo(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = La(e);
          Lo(e, a, l);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function mf(e, t, n) {
  ((k = e), Hu(e));
}
function Hu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; k !== null;) {
    var i = k,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || hr;
      if (!l) {
        var a = i.alternate,
          s = (a !== null && a.memoizedState !== null) || re;
        a = hr;
        var c = re;
        if (((hr = l), (re = s) && !c))
          for (k = i; k !== null;)
            ((l = k),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Da(i)
                : s !== null
                  ? ((s.return = l), (k = s))
                  : Da(i));
        for (; o !== null;) ((k = o), Hu(o), (o = o.sibling));
        ((k = i), (hr = a), (re = c));
      }
      Ra(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (k = o)) : Ra(e);
  }
}
function Ra(e) {
  for (; k !== null;) {
    var t = k;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || ui(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : _e(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && wa(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                wa(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Fn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        re || (t.flags & 512 && To(t));
      } catch (p) {
        q(t, t.return, p);
      }
    }
    if (t === e) {
      k = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (k = n));
      break;
    }
    k = t.return;
  }
}
function Fa(e) {
  for (; k !== null;) {
    var t = k;
    if (t === e) {
      k = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (k = n));
      break;
    }
    k = t.return;
  }
}
function Da(e) {
  for (; k !== null;) {
    var t = k;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ui(4, t);
          } catch (s) {
            q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              q(t, i, s);
            }
          }
          var o = t.return;
          try {
            To(t);
          } catch (s) {
            q(t, o, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            To(t);
          } catch (s) {
            q(t, l, s);
          }
      }
    } catch (s) {
      q(t, t.return, s);
    }
    if (t === e) {
      k = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (k = a));
      break;
    }
    k = t.return;
  }
}
var hf = Math.ceil,
  Yr = Ye.ReactCurrentDispatcher,
  Cl = Ye.ReactCurrentOwner,
  Ee = Ye.ReactCurrentBatchConfig,
  L = 0,
  X = null,
  Q = null,
  b = 0,
  me = 0,
  $t = mt(0),
  G = 0,
  Kn = null,
  zt = 0,
  ci = 0,
  Al = 0,
  _n = null,
  ue = null,
  El = 0,
  rn = 1 / 0,
  Be = null,
  Zr = !1,
  Ro = null,
  st = null,
  gr = !1,
  nt = null,
  Xr = 0,
  In = 0,
  Fo = null,
  Pr = -1,
  zr = 0;
function le() {
  return L & 6 ? V() : Pr !== -1 ? Pr : (Pr = V());
}
function ut(e) {
  return e.mode & 1
    ? L & 2 && b !== 0
      ? b & -b
      : Xd.transition !== null
        ? (zr === 0 && (zr = Ps()), zr)
        : ((e = M),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ms(e.type))),
          e)
    : 1;
}
function Le(e, t, n, r) {
  if (50 < In) throw ((In = 0), (Fo = null), Error(y(185)));
  (Yn(e, n, r),
    (!(L & 2) || e !== X) &&
      (e === X && (!(L & 2) && (ci |= n), G === 4 && et(e, b)),
      pe(e, r),
      n === 1 && L === 0 && !(t.mode & 1) && ((rn = V() + 500), li && ht())));
}
function pe(e, t) {
  var n = e.callbackNode;
  Xc(e, t);
  var r = Mr(e, e === X ? b : 0);
  if (r === 0)
    (n !== null && Ql(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ql(n), t === 1))
      (e.tag === 0 ? Zd(Oa.bind(null, e)) : bs(Oa.bind(null, e)),
        Qd(function () {
          !(L & 6) && ht();
        }),
        (n = null));
    else {
      switch (zs(r)) {
        case 1:
          n = Zo;
          break;
        case 4:
          n = xs;
          break;
        case 16:
          n = Lr;
          break;
        case 536870912:
          n = Ws;
          break;
        default:
          n = Lr;
      }
      n = Xu(n, $u.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function $u(e, t) {
  if (((Pr = -1), (zr = 0), L & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (Zt() && e.callbackNode !== n) return null;
  var r = Mr(e, e === X ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Jr(e, r);
  else {
    t = r;
    var i = L;
    L |= 2;
    var o = Qu();
    (X !== e || b !== t) && ((Be = null), (rn = V() + 500), At(e, t));
    do
      try {
        vf();
        break;
      } catch (a) {
        Vu(e, a);
      }
    while (!0);
    (ul(),
      (Yr.current = o),
      (L = i),
      Q !== null ? (t = 0) : ((X = null), (b = 0), (t = G)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = so(e)), i !== 0 && ((r = i), (t = Do(e, i)))), t === 1)
    )
      throw ((n = Kn), At(e, 0), et(e, r), pe(e, V()), n);
    if (t === 6) et(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !gf(i) &&
          ((t = Jr(e, r)),
          t === 2 && ((o = so(e)), o !== 0 && ((r = o), (t = Do(e, o)))),
          t === 1))
      )
        throw ((n = Kn), At(e, 0), et(e, r), pe(e, V()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          wt(e, ue, Be);
          break;
        case 3:
          if (
            (et(e, r), (r & 130023424) === r && ((t = El + 500 - V()), 10 < t))
          ) {
            if (Mr(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (le(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = yo(wt.bind(null, e, ue, Be), t);
            break;
          }
          wt(e, ue, Be);
          break;
        case 4:
          if ((et(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r;) {
            var l = 31 - Te(r);
            ((o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o));
          }
          if (
            ((r = i),
            (r = V() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * hf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = yo(wt.bind(null, e, ue, Be), r);
            break;
          }
          wt(e, ue, Be);
          break;
        case 5:
          wt(e, ue, Be);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return (pe(e, V()), e.callbackNode === n ? $u.bind(null, e) : null);
}
function Do(e, t) {
  var n = _n;
  return (
    e.current.memoizedState.isDehydrated && (At(e, t).flags |= 256),
    (e = Jr(e, t)),
    e !== 2 && ((t = ue), (ue = n), t !== null && Oo(t)),
    e
  );
}
function Oo(e) {
  ue === null ? (ue = e) : ue.push.apply(ue, e);
}
function gf(e) {
  for (var t = e; ;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Me(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function et(e, t) {
  for (
    t &= ~Al,
      t &= ~ci,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Te(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Oa(e) {
  if (L & 6) throw Error(y(327));
  Zt();
  var t = Mr(e, 0);
  if (!(t & 1)) return (pe(e, V()), null);
  var n = Jr(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = so(e);
    r !== 0 && ((t = r), (n = Do(e, r)));
  }
  if (n === 1) throw ((n = Kn), At(e, 0), et(e, t), pe(e, V()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wt(e, ue, Be),
    pe(e, V()),
    null
  );
}
function xl(e, t) {
  var n = L;
  L |= 1;
  try {
    return e(t);
  } finally {
    ((L = n), L === 0 && ((rn = V() + 500), li && ht()));
  }
}
function _t(e) {
  nt !== null && nt.tag === 0 && !(L & 6) && Zt();
  var t = L;
  L |= 1;
  var n = Ee.transition,
    r = M;
  try {
    if (((Ee.transition = null), (M = 1), e)) return e();
  } finally {
    ((M = r), (Ee.transition = n), (L = t), !(L & 6) && ht());
  }
}
function Wl() {
  ((me = $t.current), D($t));
}
function At(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Vd(n)), Q !== null))
    for (n = Q.return; n !== null;) {
      var r = n;
      switch ((ll(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && jr());
          break;
        case 3:
          (tn(), D(de), D(ie), hl());
          break;
        case 5:
          ml(r);
          break;
        case 4:
          tn();
          break;
        case 13:
          D(j);
          break;
        case 19:
          D(j);
          break;
        case 10:
          cl(r.type._context);
          break;
        case 22:
        case 23:
          Wl();
      }
      n = n.return;
    }
  if (
    ((X = e),
    (Q = e = ct(e.current, null)),
    (b = me = t),
    (G = 0),
    (Kn = null),
    (Al = ci = zt = 0),
    (ue = _n = null),
    kt !== null)
  ) {
    for (t = 0; t < kt.length; t++)
      if (((n = kt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          ((o.next = i), (r.next = l));
        }
        n.pending = r;
      }
    kt = null;
  }
  return e;
}
function Vu(e, t) {
  do {
    var n = Q;
    try {
      if ((ul(), (Er.current = Gr), Kr)) {
        for (var r = B.memoizedState; r !== null;) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        Kr = !1;
      }
      if (
        ((Pt = 0),
        (Z = K = B = null),
        (Pn = !1),
        ($n = 0),
        (Cl.current = null),
        n === null || n.return === null)
      ) {
        ((G = 1), (Kn = t), (Q = null));
        break;
      }
      e: {
        var o = e,
          l = n.return,
          a = n,
          s = t;
        if (
          ((t = b),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            h = a,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var v = xa(l);
          if (v !== null) {
            ((v.flags &= -257),
              Wa(v, l, a, o, t),
              v.mode & 1 && Ea(o, c, t),
              (t = v),
              (s = c));
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              (S.add(s), (t.updateQueue = S));
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              (Ea(o, c, t), Pl());
              break e;
            }
            s = Error(y(426));
          }
        } else if (O && a.mode & 1) {
          var T = xa(l);
          if (T !== null) {
            (!(T.flags & 65536) && (T.flags |= 256),
              Wa(T, l, a, o, t),
              al(nn(s, a)));
            break e;
          }
        }
        ((o = s = nn(s, a)),
          G !== 4 && (G = 2),
          _n === null ? (_n = [o]) : _n.push(o),
          (o = l));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var d = zu(o, s, t);
              va(o, d);
              break e;
            case 1:
              a = s;
              var u = o.type,
                f = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof u.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (st === null || !st.has(f))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var g = _u(o, a, t);
                va(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Gu(n);
    } catch (C) {
      ((t = C), Q === n && n !== null && (Q = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Qu() {
  var e = Yr.current;
  return ((Yr.current = Gr), e === null ? Gr : e);
}
function Pl() {
  ((G === 0 || G === 3 || G === 2) && (G = 4),
    X === null || (!(zt & 268435455) && !(ci & 268435455)) || et(X, b));
}
function Jr(e, t) {
  var n = L;
  L |= 2;
  var r = Qu();
  (X !== e || b !== t) && ((Be = null), At(e, t));
  do
    try {
      yf();
      break;
    } catch (i) {
      Vu(e, i);
    }
  while (!0);
  if ((ul(), (L = n), (Yr.current = r), Q !== null)) throw Error(y(261));
  return ((X = null), (b = 0), G);
}
function yf() {
  for (; Q !== null;) Ku(Q);
}
function vf() {
  for (; Q !== null && !qc();) Ku(Q);
}
function Ku(e) {
  var t = Zu(e.alternate, e, me);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Gu(e) : (Q = t),
    (Cl.current = null));
}
function Gu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = df(n, t)), n !== null)) {
        ((n.flags &= 32767), (Q = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((G = 6), (Q = null));
        return;
      }
    } else if (((n = cf(n, t, me)), n !== null)) {
      Q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Q = t;
      return;
    }
    Q = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function wt(e, t, n) {
  var r = M,
    i = Ee.transition;
  try {
    ((Ee.transition = null), (M = 1), wf(e, t, n, r));
  } finally {
    ((Ee.transition = i), (M = r));
  }
  return null;
}
function wf(e, t, n, r) {
  do Zt();
  while (nt !== null);
  if (L & 6) throw Error(y(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    (Jc(e, o),
    e === X && ((Q = X = null), (b = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gr ||
      ((gr = !0),
      Xu(Lr, function () {
        return (Zt(), null);
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ((o = Ee.transition), (Ee.transition = null));
    var l = M;
    M = 1;
    var a = L;
    ((L |= 4),
      (Cl.current = null),
      pf(e, n),
      qu(n, e),
      Od(ho),
      (Rr = !!mo),
      (ho = mo = null),
      (e.current = n),
      mf(n),
      Hc(),
      (L = a),
      (M = l),
      (Ee.transition = o));
  } else e.current = n;
  if (
    (gr && ((gr = !1), (nt = e), (Xr = i)),
    (o = e.pendingLanes),
    o === 0 && (st = null),
    Qc(n.stateNode),
    pe(e, V()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (Zr) throw ((Zr = !1), (e = Ro), (Ro = null), e);
  return (
    Xr & 1 && e.tag !== 0 && Zt(),
    (o = e.pendingLanes),
    o & 1 ? (e === Fo ? In++ : ((In = 0), (Fo = e))) : (In = 0),
    ht(),
    null
  );
}
function Zt() {
  if (nt !== null) {
    var e = zs(Xr),
      t = Ee.transition,
      n = M;
    try {
      if (((Ee.transition = null), (M = 16 > e ? 16 : e), nt === null))
        var r = !1;
      else {
        if (((e = nt), (nt = null), (Xr = 0), L & 6)) throw Error(y(331));
        var i = L;
        for (L |= 4, k = e.current; k !== null;) {
          var o = k,
            l = o.child;
          if (k.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var c = a[s];
                for (k = c; k !== null;) {
                  var h = k;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zn(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) ((m.return = h), (k = m));
                  else
                    for (; k !== null;) {
                      h = k;
                      var p = h.sibling,
                        v = h.return;
                      if ((ju(h), h === c)) {
                        k = null;
                        break;
                      }
                      if (p !== null) {
                        ((p.return = v), (k = p));
                        break;
                      }
                      k = v;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var T = S.sibling;
                    ((S.sibling = null), (S = T));
                  } while (S !== null);
                }
              }
              k = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) ((l.return = o), (k = l));
          else
            e: for (; k !== null;) {
              if (((o = k), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zn(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                ((d.return = o.return), (k = d));
                break e;
              }
              k = o.return;
            }
        }
        var u = e.current;
        for (k = u; k !== null;) {
          l = k;
          var f = l.child;
          if (l.subtreeFlags & 2064 && f !== null) ((f.return = l), (k = f));
          else
            e: for (l = u; k !== null;) {
              if (((a = k), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ui(9, a);
                  }
                } catch (C) {
                  q(a, a.return, C);
                }
              if (a === l) {
                k = null;
                break e;
              }
              var g = a.sibling;
              if (g !== null) {
                ((g.return = a.return), (k = g));
                break e;
              }
              k = a.return;
            }
        }
        if (
          ((L = i), ht(), Oe && typeof Oe.onPostCommitFiberRoot == "function")
        )
          try {
            Oe.onPostCommitFiberRoot(ti, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((M = n), (Ee.transition = t));
    }
  }
  return !1;
}
function ja(e, t, n) {
  ((t = nn(n, t)),
    (t = zu(e, t, 1)),
    (e = at(e, t, 1)),
    (t = le()),
    e !== null && (Yn(e, 1, t), pe(e, t)));
}
function q(e, t, n) {
  if (e.tag === 3) ja(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        ja(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (st === null || !st.has(r)))
        ) {
          ((e = nn(n, e)),
            (e = _u(t, e, 1)),
            (t = at(t, e, 1)),
            (e = le()),
            t !== null && (Yn(t, 1, e), pe(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Sf(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = le()),
    (e.pingedLanes |= e.suspendedLanes & n),
    X === e &&
      (b & n) === n &&
      (G === 4 || (G === 3 && (b & 130023424) === b && 500 > V() - El)
        ? At(e, 0)
        : (Al |= n)),
    pe(e, t));
}
function Yu(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = lr), (lr <<= 1), !(lr & 130023424) && (lr = 4194304))
      : (t = 1));
  var n = le();
  ((e = Ke(e, t)), e !== null && (Yn(e, t, n), pe(e, n)));
}
function kf(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Yu(e, n));
}
function Cf(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  (r !== null && r.delete(t), Yu(e, n));
}
var Zu;
Zu = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((ce = !1), uf(e, t, n));
      ce = !!(e.flags & 131072);
    }
  else ((ce = !1), O && t.flags & 1048576 && eu(t, qr, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Wr(e, t), (e = t.pendingProps));
      var i = Jt(t, ie.current);
      (Yt(t, n), (i = yl(null, t, r, e, i, n)));
      var o = vl();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            fe(r) ? ((o = !0), Br(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            fl(t),
            (i.updater = si),
            (t.stateNode = i),
            (i._reactInternals = t),
            Eo(t, r, e, n),
            (t = Po(null, t, r, !0, o, n)))
          : ((t.tag = 0), O && o && ol(t), oe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wr(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Ef(r)),
          (e = _e(r, e)),
          i)
        ) {
          case 0:
            t = Wo(null, t, r, e, n);
            break e;
          case 1:
            t = _a(null, t, r, e, n);
            break e;
          case 11:
            t = Pa(null, t, r, e, n);
            break e;
          case 14:
            t = za(null, t, r, _e(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _e(r, i)),
        Wo(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _e(r, i)),
        _a(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Lu(t), e === null)) throw Error(y(387));
        ((r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          lu(e, t),
          Vr(t, r, null, n));
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ((i = nn(Error(y(423)), t)), (t = Ia(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = nn(Error(y(424)), t)), (t = Ia(e, t, r, n, i)));
            break e;
          } else
            for (
              he = lt(t.stateNode.containerInfo.firstChild),
                ge = t,
                O = !0,
                Ne = null,
                n = iu(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((bt(), r === i)) {
            t = Ge(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        au(t),
        e === null && ko(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        go(r, i) ? (l = null) : o !== null && go(r, o) && (t.flags |= 32),
        Tu(e, t),
        oe(e, t, l, n),
        t.child
      );
    case 6:
      return (e === null && ko(t), null);
    case 13:
      return Mu(e, t, n);
    case 4:
      return (
        pl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = en(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _e(r, i)),
        Pa(e, t, r, i, n)
      );
    case 7:
      return (oe(e, t, t.pendingProps, n), t.child);
    case 8:
      return (oe(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (oe(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          R(Hr, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Me(o.value, l)) {
            if (o.children === i.children && !de.current) {
              t = Ge(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null;) {
              var a = o.dependencies;
              if (a !== null) {
                l = o.child;
                for (var s = a.firstContext; s !== null;) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      ((s = $e(-1, n & -n)), (s.tag = 2));
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        (h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s));
                      }
                    }
                    ((o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Co(o.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(y(341));
                ((l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  Co(l, n, t),
                  (l = o.sibling));
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null;) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    ((o.return = l.return), (l = o));
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        (oe(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Yt(t, n),
        (i = xe(i)),
        (r = r(i)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = _e(r, t.pendingProps)),
        (i = _e(r.type, i)),
        za(e, t, r, i, n)
      );
    case 15:
      return Iu(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _e(r, i)),
        Wr(e, t),
        (t.tag = 1),
        fe(r) ? ((e = !0), Br(t)) : (e = !1),
        Yt(t, n),
        Pu(t, r, i),
        Eo(t, r, i, n),
        Po(null, t, r, !0, e, n)
      );
    case 19:
      return Ru(e, t, n);
    case 22:
      return Nu(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function Xu(e, t) {
  return Es(e, t);
}
function Af(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Ae(e, t, n, r) {
  return new Af(e, t, n, r);
}
function zl(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Ef(e) {
  if (typeof e == "function") return zl(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ko)) return 11;
    if (e === Go) return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ae(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function _r(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) zl(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Mt:
        return Et(n.children, i, o, t);
      case Qo:
        ((l = 8), (i |= 8));
        break;
      case Ki:
        return (
          (e = Ae(12, n, t, i | 2)),
          (e.elementType = Ki),
          (e.lanes = o),
          e
        );
      case Gi:
        return ((e = Ae(13, n, t, i)), (e.elementType = Gi), (e.lanes = o), e);
      case Yi:
        return ((e = Ae(19, n, t, i)), (e.elementType = Yi), (e.lanes = o), e);
      case as:
        return di(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case os:
              l = 10;
              break e;
            case ls:
              l = 9;
              break e;
            case Ko:
              l = 11;
              break e;
            case Go:
              l = 14;
              break e;
            case Xe:
              ((l = 16), (r = null));
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ae(l, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = o),
    t
  );
}
function Et(e, t, n, r) {
  return ((e = Ae(7, e, r, t)), (e.lanes = n), e);
}
function di(e, t, n, r) {
  return (
    (e = Ae(22, e, r, t)),
    (e.elementType = as),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Hi(e, t, n) {
  return ((e = Ae(6, e, null, t)), (e.lanes = n), e);
}
function $i(e, t, n) {
  return (
    (t = Ae(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function xf(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ei(0)),
    (this.expirationTimes = Ei(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ei(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function _l(e, t, n, r, i, o, l, a, s) {
  return (
    (e = new xf(e, t, n, a, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ae(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fl(o),
    e
  );
}
function Wf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Lt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ju(e) {
  if (!e) return ft;
  e = e._reactInternals;
  e: {
    if (Nt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (fe(n)) return Js(e, n, t);
  }
  return t;
}
function bu(e, t, n, r, i, o, l, a, s) {
  return (
    (e = _l(n, r, !0, e, i, o, l, a, s)),
    (e.context = Ju(null)),
    (n = e.current),
    (r = le()),
    (i = ut(n)),
    (o = $e(r, i)),
    (o.callback = t ?? null),
    at(n, o, i),
    (e.current.lanes = i),
    Yn(e, i, r),
    pe(e, r),
    e
  );
}
function fi(e, t, n, r) {
  var i = t.current,
    o = le(),
    l = ut(i);
  return (
    (n = Ju(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $e(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = at(i, t, l)),
    e !== null && (Le(e, i, l, o), Ar(e, i, l)),
    l
  );
}
function br(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ba(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Il(e, t) {
  (Ba(e, t), (e = e.alternate) && Ba(e, t));
}
function Pf() {
  return null;
}
var ec =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Nl(e) {
  this._internalRoot = e;
}
pi.prototype.render = Nl.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  fi(e, t, null, null);
};
pi.prototype.unmount = Nl.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (_t(function () {
      fi(null, e, null, null);
    }),
      (t[Qe] = null));
  }
};
function pi(e) {
  this._internalRoot = e;
}
pi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ns();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++);
    (be.splice(n, 0, e), n === 0 && Ls(e));
  }
};
function Tl(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function mi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ua() {}
function zf(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = br(l);
        o.call(c);
      };
    }
    var l = bu(t, r, e, 0, null, !1, !1, "", Ua);
    return (
      (e._reactRootContainer = l),
      (e[Qe] = l.current),
      jn(e.nodeType === 8 ? e.parentNode : e),
      _t(),
      l
    );
  }
  for (; (i = e.lastChild);) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = br(s);
      a.call(c);
    };
  }
  var s = _l(e, 0, !1, null, null, !1, !1, "", Ua);
  return (
    (e._reactRootContainer = s),
    (e[Qe] = s.current),
    jn(e.nodeType === 8 ? e.parentNode : e),
    _t(function () {
      fi(t, s, n, r);
    }),
    s
  );
}
function hi(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var s = br(l);
        a.call(s);
      };
    }
    fi(t, l, e, i);
  } else l = zf(n, t, e, i, r);
  return br(l);
}
_s = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sn(t.pendingLanes);
        n !== 0 &&
          (Xo(t, n | 1), pe(t, V()), !(L & 6) && ((rn = V() + 500), ht()));
      }
      break;
    case 13:
      (_t(function () {
        var r = Ke(e, 1);
        if (r !== null) {
          var i = le();
          Le(r, e, 1, i);
        }
      }),
        Il(e, 1));
  }
};
Jo = function (e) {
  if (e.tag === 13) {
    var t = Ke(e, 134217728);
    if (t !== null) {
      var n = le();
      Le(t, e, 134217728, n);
    }
    Il(e, 134217728);
  }
};
Is = function (e) {
  if (e.tag === 13) {
    var t = ut(e),
      n = Ke(e, t);
    if (n !== null) {
      var r = le();
      Le(n, e, t, r);
    }
    Il(e, t);
  }
};
Ns = function () {
  return M;
};
Ts = function (e, t) {
  var n = M;
  try {
    return ((M = e), t());
  } finally {
    M = n;
  }
};
oo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ji(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = oi(r);
            if (!i) throw Error(y(90));
            (us(r), Ji(r, i));
          }
        }
      }
      break;
    case "textarea":
      ds(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Vt(e, !!n.multiple, t, !1));
  }
};
vs = xl;
ws = _t;
var _f = { usingClientEntryPoint: !1, Events: [Xn, Ot, oi, gs, ys, xl] },
  yn = {
    findFiberByHostInstance: St,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  If = {
    bundleType: yn.bundleType,
    version: yn.version,
    rendererPackageName: yn.rendererPackageName,
    rendererConfig: yn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ye.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Cs(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: yn.findFiberByHostInstance || Pf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yr.isDisabled && yr.supportsFiber)
    try {
      ((ti = yr.inject(If)), (Oe = yr));
    } catch {}
}
ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _f;
ve.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Tl(t)) throw Error(y(200));
  return Wf(e, t, null, n);
};
ve.createRoot = function (e, t) {
  if (!Tl(e)) throw Error(y(299));
  var n = !1,
    r = "",
    i = ec;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = _l(e, 1, !1, null, null, n, !1, r, i)),
    (e[Qe] = t.current),
    jn(e.nodeType === 8 ? e.parentNode : e),
    new Nl(t)
  );
};
ve.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return ((e = Cs(t)), (e = e === null ? null : e.stateNode), e);
};
ve.flushSync = function (e) {
  return _t(e);
};
ve.hydrate = function (e, t, n) {
  if (!mi(t)) throw Error(y(200));
  return hi(null, e, t, !0, n);
};
ve.hydrateRoot = function (e, t, n) {
  if (!Tl(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = ec;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = bu(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[Qe] = t.current),
    jn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new pi(t);
};
ve.render = function (e, t, n) {
  if (!mi(t)) throw Error(y(200));
  return hi(null, e, t, !1, n);
};
ve.unmountComponentAtNode = function (e) {
  if (!mi(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (_t(function () {
        hi(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Qe] = null));
        });
      }),
      !0)
    : !1;
};
ve.unstable_batchedUpdates = xl;
ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!mi(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return hi(e, t, n, !1, r);
};
ve.version = "18.3.1-next-f1338f8080-20240426";
function tc() {
  if (!(
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
  ))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc);
    } catch (e) {
      console.error(e);
    }
}
(tc(), (ts.exports = ve));
var Nf = ts.exports,
  qa = Nf;
((Vi.createRoot = qa.createRoot), (Vi.hydrateRoot = qa.hydrateRoot));
const Tf = "AWS Fundamentals Flashcards",
  Lf = [
    {
      id: "aws-001",
      category: "Storage",
      question: "What is Amazon EBS?",
      answer:
        "Amazon Elastic Block Store (EBS) provides persistent block storage volumes for EC2 instances. Think of it as a virtual hard drive for an EC2 server.",
      tags: ["EBS", "EC2", "block storage"],
    },
    {
      id: "aws-002",
      category: "Storage",
      question: "What is Amazon EFS?",
      answer:
        "Amazon Elastic File System (EFS) is a managed, shared file system that multiple supported compute resources can access. It uses NFS, making it useful when several EC2 instances need shared files.",
      tags: ["EFS", "NFS", "shared storage"],
    },
    {
      id: "aws-003",
      category: "Storage",
      question: "What is the difference between EBS and EFS?",
      answer:
        "EBS is block storage, commonly used as a disk for an EC2 instance. EFS is a shared network file system that multiple clients can access. Remember: EBS is like a disk; EFS is like a shared network folder.",
      tags: ["EBS", "EFS", "comparison"],
    },
    {
      id: "aws-004",
      category: "Storage",
      question: "What is Amazon S3 Glacier?",
      answer:
        "S3 Glacier is a set of S3 storage classes designed for low-cost archival storage. Retrieval speed and cost depend on the class, such as Instant Retrieval, Flexible Retrieval, or Deep Archive.",
      tags: ["S3", "Glacier", "archive"],
    },
    {
      id: "aws-005",
      category: "Compute",
      question: "What is AWS Elastic Beanstalk?",
      answer:
        "Elastic Beanstalk is a managed application deployment service. You provide application code, and AWS helps provision and manage the underlying environment, such as EC2 instances, load balancing, and scaling.",
      tags: ["Elastic Beanstalk", "deployment", "PaaS"],
    },
    {
      id: "aws-006",
      category: "Security",
      question: "What is Amazon Inspector?",
      answer:
        "Amazon Inspector is an automated vulnerability management service. It identifies known vulnerabilities and unintended network exposure in supported workloads, including EC2 instances, ECR container images, and Lambda functions.",
      tags: ["Inspector", "vulnerability", "security"],
    },
    {
      id: "aws-007",
      category: "Developer Tools",
      question: "What was AWS Cloud9?",
      answer:
        "AWS Cloud9 was a browser-based integrated development environment. AWS stopped making it available to new customers; existing customers may have different access. Alternatives include local VS Code, CloudShell, or a development environment on EC2.",
      tags: ["Cloud9", "IDE", "developer tools"],
    },
    {
      id: "aws-008",
      category: "Database",
      question: "What is Amazon Aurora?",
      answer:
        "Amazon Aurora is a relational database engine compatible with MySQL and PostgreSQL, offered through Amazon RDS. AWS manages much of its database infrastructure, availability, and storage.",
      tags: ["Aurora", "RDS", "database"],
    },
    {
      id: "aws-009",
      category: "Database",
      question: "How is Amazon Aurora different from standard RDS MySQL?",
      answer:
        "Aurora is an AWS-designed MySQL- or PostgreSQL-compatible database engine with a different distributed storage and availability architecture. Standard RDS MySQL runs the MySQL engine. Aurora can offer performance and availability benefits, but compare features and cost for your workload.",
      tags: ["Aurora", "RDS", "MySQL", "comparison"],
    },
    {
      id: "aws-010",
      category: "Compute",
      question: "What is AWS Batch?",
      answer:
        "AWS Batch schedules, queues, and runs batch computing jobs. It provisions and manages compute resources for jobs, commonly using containers, so you do not have to build your own job scheduler.",
      tags: ["Batch", "jobs", "containers"],
    },
    {
      id: "aws-011",
      category: "Compute",
      question: "What is AWS Fargate?",
      answer:
        "AWS Fargate is serverless compute for containers. You run containers through services such as Amazon ECS or Amazon EKS, while AWS manages the underlying server infrastructure.",
      tags: ["Fargate", "containers", "serverless", "ECS", "EKS"],
    },
    {
      id: "aws-012",
      category: "Networking",
      question: "What is AWS Direct Connect?",
      answer:
        "AWS Direct Connect provides a dedicated network connection between an organization’s premises or data center and AWS. It can provide more consistent network performance than internet-based connectivity. The connection is not automatically encrypted; use encryption such as VPN when needed.",
      tags: ["Direct Connect", "networking", "hybrid cloud"],
    },
    {
      id: "aws-013",
      category: "Compute and Pricing",
      question: "What is an EC2 Reserved Instance?",
      answer:
        "A Reserved Instance is primarily a pricing commitment that can provide a discount for eligible EC2 usage over a one- or three-year term. It is not, by itself, a guarantee of capacity.",
      tags: ["EC2", "Reserved Instance", "pricing"],
    },
    {
      id: "aws-014",
      category: "Compute and Pricing",
      question: "What is an EC2 Spot Instance?",
      answer:
        "A Spot Instance uses spare EC2 capacity at a discounted price. AWS can interrupt it when capacity is needed, typically providing a two-minute interruption notice. Use it for fault-tolerant workloads.",
      tags: ["EC2", "Spot", "pricing"],
    },
    {
      id: "aws-015",
      category: "Compute and Pricing",
      question:
        "What is the difference between Reserved Instances and Spot Instances?",
      answer:
        "Reserved Instances are a pricing commitment for eligible usage. Spot Instances use spare capacity at a discount but can be interrupted. Reserved is useful for predictable workloads; Spot is useful for flexible, interruption-tolerant workloads.",
      tags: ["EC2", "Spot", "Reserved Instance", "comparison"],
    },
    {
      id: "aws-016",
      category: "Application Services",
      question: "What is Amazon Connect?",
      answer:
        "Amazon Connect is a cloud-based contact center service for handling customer interactions such as phone calls and chat, with features for routing, queues, and interactive voice response.",
      tags: ["Connect", "contact center", "CCaaS"],
    },
    {
      id: "aws-017",
      category: "Monitoring",
      question: "What is AWS X-Ray?",
      answer:
        "AWS X-Ray helps developers trace requests as they travel through an application and its services. It helps identify latency, errors, and performance bottlenecks in distributed applications.",
      tags: ["X-Ray", "tracing", "observability"],
    },
    {
      id: "aws-018",
      category: "Networking and Content Delivery",
      question: "What is Amazon CloudFront?",
      answer:
        "Amazon CloudFront is a content delivery network (CDN). It caches and delivers content from edge locations closer to users, helping reduce latency and origin load.",
      tags: ["CloudFront", "CDN", "caching"],
    },
    {
      id: "aws-019",
      category: "Compute",
      question: "What is Amazon Lightsail?",
      answer:
        "Amazon Lightsail is a simplified cloud hosting service with bundled plans for virtual servers, storage, and networking. It is suited to straightforward workloads such as small websites and applications.",
      tags: ["Lightsail", "VPS", "hosting"],
    },
    {
      id: "aws-020",
      category: "Compute",
      question: "How does Amazon Lightsail differ from Amazon EC2?",
      answer:
        "Lightsail offers simpler bundled hosting plans and an easier setup experience. EC2 offers more granular control, configuration choices, and integration with the wider AWS ecosystem.",
      tags: ["Lightsail", "EC2", "comparison"],
    },
    {
      id: "aws-021",
      category: "Security",
      question: "What is AWS Key Management Service (KMS)?",
      answer:
        "AWS KMS lets you create and control cryptographic keys used to encrypt and decrypt data. AWS services such as EBS, S3, and RDS can integrate with KMS to protect stored data.",
      tags: ["KMS", "encryption", "keys"],
    },
    {
      id: "aws-022",
      category: "Security",
      question: "What is a KMS key policy?",
      answer:
        "A KMS key policy is a resource-based policy that controls who can use or manage a KMS key. IAM policies may also grant permissions, but authorization depends on the applicable key policy and IAM rules.",
      tags: ["KMS", "key policy", "IAM"],
    },
    {
      id: "aws-023",
      category: "Security",
      question: "What is envelope encryption?",
      answer:
        "Envelope encryption uses a data key to encrypt the actual data, then protects that data key with another key, such as a KMS key. This is efficient for encrypting large amounts of data.",
      tags: ["KMS", "envelope encryption", "cryptography"],
    },
    {
      id: "aws-024",
      category: "Security",
      question: "What is AWS Config?",
      answer:
        "AWS Config records and evaluates the configuration of supported AWS resources over time. It helps identify configuration changes and check whether resources comply with desired rules, such as requiring S3 buckets to be private.",
      tags: ["Config", "compliance", "resource configuration"],
    },
    {
      id: "aws-025",
      category: "Security",
      question: "What is AWS Secrets Manager?",
      answer:
        "AWS Secrets Manager securely stores, retrieves, and manages secrets such as database credentials and API keys. It supports rotation for supported secret types and integrations.",
      tags: ["Secrets Manager", "credentials", "secrets"],
    },
    {
      id: "aws-026",
      category: "Security",
      question:
        "What is the difference between AWS Config and AWS Secrets Manager?",
      answer:
        "AWS Config monitors and evaluates the configuration of AWS resources. Secrets Manager stores and manages sensitive values such as passwords, API keys, and database credentials. Config checks infrastructure; Secrets Manager protects application secrets.",
      tags: ["Config", "Secrets Manager", "comparison"],
    },
    {
      id: "aws-027",
      category: "Security",
      question:
        "What is the difference between AWS KMS and AWS Secrets Manager?",
      answer:
        "KMS manages cryptographic keys and performs key-related cryptographic operations. Secrets Manager stores and manages secret values such as passwords and tokens, using encryption (often backed by KMS) to protect them.",
      tags: ["KMS", "Secrets Manager", "comparison"],
    },
    {
      id: "aws-028",
      category: "Security",
      question:
        "What is the difference between Amazon Inspector and AWS Config?",
      answer:
        "Inspector finds software vulnerabilities and certain network exposure issues in supported workloads. AWS Config tracks resource configuration and evaluates compliance with configuration rules. Inspector asks whether software has known weaknesses; Config asks whether resources are configured correctly.",
      tags: ["Inspector", "Config", "comparison"],
    },
    {
      id: "aws-029",
      category: "Security",
      question:
        "How is Amazon Inspector different from penetration testing (VAPT)?",
      answer:
        "Inspector automates vulnerability management for supported AWS workloads, including identifying known vulnerabilities. VAPT is a broader assessment that can include manual testing and attempts to exploit weaknesses. Inspector does not replace a full penetration test.",
      tags: ["Inspector", "VAPT", "penetration testing"],
    },
    {
      id: "aws-030",
      category: "Security",
      question:
        "What is the difference between Amazon Inspector and Amazon GuardDuty?",
      answer:
        "Inspector identifies vulnerabilities and exposure in supported workloads. GuardDuty detects suspicious activity and potential threats using relevant AWS data sources. Inspector looks for weaknesses; GuardDuty looks for signs of malicious activity.",
      tags: ["Inspector", "GuardDuty", "comparison"],
    },
    {
      id: "aws-031",
      category: "Security",
      question: "What is AWS Security Hub?",
      answer:
        "AWS Security Hub provides a centralized view of security findings and security posture across supported AWS services and integrations. It helps prioritize and manage findings; it is not a replacement for the individual detection services.",
      tags: ["Security Hub", "security posture", "findings"],
    },
    {
      id: "aws-032",
      category: "Security",
      question: "What is AWS CloudTrail?",
      answer:
        "AWS CloudTrail records account activity and API events, helping you audit who performed actions in AWS, what actions occurred, and when they happened.",
      tags: ["CloudTrail", "auditing", "API activity"],
    },
    {
      id: "aws-033",
      category: "Security",
      question: "What is AWS Systems Manager Parameter Store?",
      answer:
        "Parameter Store stores configuration values and parameters, including encrypted SecureString values. It is useful for application settings and some secrets; Secrets Manager is generally more specialized for secret lifecycle management and rotation.",
      tags: ["Parameter Store", "configuration", "secrets"],
    },
    {
      id: "aws-034",
      category: "Security",
      question: "When should you use Parameter Store versus Secrets Manager?",
      answer:
        "Use Parameter Store for configuration values and parameters, including encrypted values where appropriate. Use Secrets Manager for sensitive credentials that need dedicated secret management, retrieval workflows, and rotation support.",
      tags: ["Parameter Store", "Secrets Manager", "comparison"],
    },
    {
      id: "aws-035",
      category: "Networking",
      question: "What is a practical example of using AWS Direct Connect?",
      answer:
        "Imagine a company has an office network (192.168.1.0/24) and an AWS VPC (10.0.0.0/16). The office connects its router to AWS through Direct Connect. An employee can then reach a private EC2 application server (10.0.1.10) or an RDS database (10.0.2.10) using private IP addresses. Traffic travels over the dedicated connection instead of the public internet. Direct Connect requires a connection through an AWS Direct Connect location or supported partner, plus routing and security configuration. It is useful when predictable network performance, high bandwidth, or large data transfers matter; a Site-to-Site VPN may be enough for smaller setups. Direct Connect is not encrypted by default.",
      tags: [
        "Direct Connect",
        "networking",
        "hybrid cloud",
        "example",
        "VPC",
        "EC2",
        "RDS",
      ],
    },
    {
      id: "aws-036",
      category: "Compute",
      question:
        "What is the difference between AWS Fargate and AWS CloudFormation?",
      answer:
        "AWS Fargate is a serverless compute engine that runs containers for Amazon ECS or EKS without requiring you to manage the underlying servers. AWS CloudFormation is an Infrastructure as Code service that creates and manages AWS resources from YAML or JSON templates. They are not alternatives: CloudFormation can provision an ECS service configured to run containers on Fargate.",
      tags: ["Fargate", "CloudFormation", "ECS", "IaC", "comparison"],
    },
    {
      id: "aws-037",
      category: "Compute",
      question:
        "How can AWS CloudFormation and Fargate work together to deploy a Docker application?",
      answer:
        "For a Django Docker application, a CloudFormation template can create the required AWS resources, such as an ECS cluster, task definition, IAM roles, networking, and an ECS service. The ECS service can use the Fargate launch type or Fargate capacity providers to run the application containers without managing EC2 instances. Amazon ECR can store the Docker image, and an Application Load Balancer can route incoming traffic. In short: CloudFormation provisions infrastructure, ECS orchestrates containers, and Fargate supplies the container compute.",
      tags: [
        "CloudFormation",
        "Fargate",
        "ECS",
        "ECR",
        "Docker",
        "deployment",
        "example",
      ],
    },
    {
      id: "aws-038",
      category: "Compute",
      question: "What are Amazon EC2 Reserved Instances?",
      answer:
        "Reserved Instances are a pricing commitment for eligible EC2 usage. You commit to a 1-year or 3-year term in exchange for a discount compared with On-Demand pricing. They are best for predictable workloads that run regularly. A Reserved Instance is primarily a billing discount, not a guarantee that EC2 capacity will be available.",
      tags: ["EC2", "Reserved Instances", "pricing", "cost optimization"],
    },
    {
      id: "aws-039",
      category: "Compute",
      question: "What are Amazon EC2 On-Demand Instances?",
      answer:
        "On-Demand Instances let you pay for EC2 compute capacity as you use it, without a long-term commitment. They are useful for development, testing, short-term workloads, or applications with uncertain usage. They generally cost more per unit than suitable long-term commitment options.",
      tags: ["EC2", "On-Demand", "pricing", "flexibility"],
    },
    {
      id: "aws-040",
      category: "Compute",
      question: "What are Amazon EC2 Dedicated Instances?",
      answer:
        "Dedicated Instances run on hardware dedicated to a single AWS customer account, providing hardware-level isolation from instances belonging to other customers. The hardware may still be shared among that customer's own instances. They are useful when workload or compliance requirements call for dedicated hardware. Dedicated Instances are a tenancy option, not simply a long-term pricing plan.",
      tags: ["EC2", "Dedicated Instances", "tenancy", "isolation"],
    },
    {
      id: "aws-041",
      category: "Compute",
      question: "What are Amazon EC2 Spot Instances?",
      answer:
        "Spot Instances let you use spare AWS EC2 capacity at steep discounts compared with On-Demand prices. AWS can interrupt Spot Instances when it needs the capacity back, typically providing a two-minute interruption notice. They are best for flexible, fault-tolerant workloads such as batch processing, data analysis, and jobs that can be retried. Avoid relying on a single Spot Instance for workloads that cannot tolerate interruption.",
      tags: [
        "EC2",
        "Spot Instances",
        "pricing",
        "interruptible",
        "batch processing",
      ],
    },
    {
      id: "aws-042",
      category: "Compute",
      question:
        "How do EC2 Reserved, On-Demand, Dedicated, and Spot options differ?",
      answer:
        "Reserved Instances offer discounted pricing in exchange for a 1-year or 3-year commitment; On-Demand offers flexible pay-as-you-go pricing with no long-term commitment; Dedicated Instances provide hardware dedicated to one AWS customer; Spot Instances use discounted spare capacity but can be interrupted. These options describe different dimensions: Reserved, On-Demand, and Spot are purchasing or pricing models, while Dedicated describes instance tenancy. Some options can be combined where AWS supports them.",
      tags: [
        "EC2",
        "Reserved Instances",
        "On-Demand",
        "Dedicated Instances",
        "Spot Instances",
        "comparison",
      ],
    },
    {
      id: "aws-043",
      category: "Compute",
      question:
        "When should you use Reserved, On-Demand, Dedicated, or Spot EC2 capacity?",
      answer:
        "Use Reserved Instances for predictable, steady workloads where a 1-year or 3-year pricing commitment makes sense. Use On-Demand for short-term, variable, or uncertain workloads. Use Dedicated Instances when you need hardware isolation from other AWS customers. Use Spot Instances for interruptible, fault-tolerant workloads such as batch jobs that can pause, restart, or be retried.",
      tags: ["EC2", "workload selection", "cost optimization", "architecture"],
    },
    {
      id: "aws-044",
      category: "Security",
      question: "What is AWS Trusted Advisor?",
      answer:
        "AWS Trusted Advisor reviews your AWS environment and recommends improvements across areas such as cost optimization, performance, security, fault tolerance, service limits, and operational excellence. Think of it as an AWS best-practice consultant.",
      tags: [
        "Trusted Advisor",
        "best practices",
        "cost optimization",
        "security",
      ],
    },
    {
      id: "aws-045",
      category: "Security",
      question: "What is Amazon Inspector?",
      answer:
        "Amazon Inspector automatically discovers and assesses supported AWS workloads for software vulnerabilities and unintended network exposure. Think of it as a vulnerability checker for supported EC2 instances, container images in ECR, and Lambda functions.",
      tags: [
        "Inspector",
        "vulnerability management",
        "security",
        "EC2",
        "ECR",
        "Lambda",
      ],
    },
    {
      id: "aws-046",
      category: "Security",
      question: "What is Amazon GuardDuty?",
      answer:
        "Amazon GuardDuty is a threat-detection service that analyzes relevant AWS logs and signals to identify suspicious activity and potential threats. Think of it as a security alarm watching for unusual behavior in your AWS environment.",
      tags: [
        "GuardDuty",
        "threat detection",
        "suspicious activity",
        "security",
      ],
    },
    {
      id: "aws-047",
      category: "Security",
      question: "What is AWS Security Hub?",
      answer:
        "AWS Security Hub centralizes and helps prioritize security findings and security posture information from supported AWS services and other integrations. Think of it as one dashboard for reviewing security issues across your AWS environment.",
      tags: [
        "Security Hub",
        "security findings",
        "posture management",
        "centralization",
      ],
    },
    {
      id: "aws-048",
      category: "Monitoring",
      question: "What is Amazon CloudWatch?",
      answer:
        "Amazon CloudWatch collects and monitors metrics, logs, and events from AWS resources and applications. You can use it to create dashboards, alarms, and automated responses. Think of it as the monitoring system for your AWS applications and infrastructure.",
      tags: ["CloudWatch", "monitoring", "metrics", "logs", "alarms"],
    },
    {
      id: "aws-049",
      category: "Security",
      question:
        "How do Trusted Advisor, Inspector, GuardDuty, Security Hub, and CloudWatch differ?",
      answer:
        "Trusted Advisor recommends AWS best-practice improvements. Inspector finds software vulnerabilities and network exposure. GuardDuty detects suspicious activity and potential threats. Security Hub centralizes security findings. CloudWatch monitors metrics, logs, and events. Remember: Advisor recommends, Inspector scans, GuardDuty detects, Security Hub consolidates, and CloudWatch monitors.",
      tags: [
        "AWS security",
        "Trusted Advisor",
        "Inspector",
        "GuardDuty",
        "Security Hub",
        "CloudWatch",
        "comparison",
      ],
    },
    {
      id: "aws-050",
      category: "Security & Compliance",
      question: "What is AWS Artifact?",
      answer:
        "AWS Artifact is AWS's self-service portal for accessing compliance documents and agreements. Artifact Reports lets you download AWS compliance reports and certifications, such as SOC reports, ISO certifications, and PCI DSS documentation. Artifact Agreements lets you review and accept certain legal agreements with AWS. Remember: Artifact provides evidence about AWS's compliance; it does not automatically certify your own application or company.",
      tags: ["AWS Artifact", "compliance", "SOC", "ISO", "PCI DSS", "security"],
    },
    {
      id: "aws-051",
      category: "Global Infrastructure",
      question: "What is an AWS Region?",
      answer:
        "An AWS Region is a separate geographic area where AWS has multiple data centers grouped into Availability Zones. You choose a Region to place resources close to users, meet data-residency requirements, or improve resilience. Remember: Region = geographic area.",
      tags: [
        "AWS Region",
        "global infrastructure",
        "geography",
        "data residency",
      ],
    },
    {
      id: "aws-052",
      category: "Global Infrastructure",
      question: "What is an Availability Zone (AZ)?",
      answer:
        "An Availability Zone is an isolated location within an AWS Region, made up of one or more data centers with independent power, cooling, and networking. AZs are connected to other AZs in the same Region through high-bandwidth, low-latency links. Deploying across multiple AZs helps an application keep running if one AZ has a failure. Remember: AZ = isolated location inside a Region.",
      tags: ["Availability Zone", "AZ", "high availability", "fault tolerance"],
    },
    {
      id: "aws-053",
      category: "Global Infrastructure",
      question:
        "What is the difference between an AWS Region and an Availability Zone?",
      answer:
        "A Region is a geographic area; an Availability Zone is an isolated location within that Region. A Region contains multiple AZs. For example, you can deploy an application across two AZs in one Region so it can tolerate the failure of one AZ. Remember: Region = where in the world; AZ = which isolated location within that Region.",
      tags: [
        "AWS Region",
        "Availability Zone",
        "comparison",
        "high availability",
      ],
    },
    {
      id: "aws-054",
      category: "Global Infrastructure",
      question: "What is an AWS Edge Location?",
      answer:
        "An AWS Edge Location is a point of presence where AWS delivers content closer to users, commonly through Amazon CloudFront. CloudFront can cache copies of website files such as images, videos, and scripts at edge locations. When a user requests cached content, it can be delivered from a nearby edge location instead of traveling all the way to the origin server. Remember: Edge Location = brings content closer to users.",
      tags: [
        "Edge Location",
        "CloudFront",
        "CDN",
        "caching",
        "global infrastructure",
      ],
    },
    {
      id: "aws-055",
      category: "Global Infrastructure",
      question:
        "What is an example of an AWS Edge Location, and how is it different from a Region or Availability Zone?",
      answer:
        "Imagine your website is hosted on an EC2 instance in the Singapore Region and a visitor in the Philippines requests an image. CloudFront may serve a cached copy from an edge location closer to that visitor; if the image is not cached, CloudFront retrieves it from the origin and can cache it. A Region is a geographic area where AWS runs infrastructure; an Availability Zone is an isolated location within a Region; an Edge Location is a point of presence used to deliver content closer to users. Remember: Region = where workloads run; AZ = isolated infrastructure location; Edge Location = where content is delivered from.",
      tags: [
        "Edge Location",
        "AWS Region",
        "Availability Zone",
        "CloudFront",
        "comparison",
        "example",
      ],
    },
    {
      id: "aws-056",
      category: "Management & Governance",
      question: "What is AWS CloudFormation?",
      answer:
        "AWS CloudFormation is an Infrastructure as Code (IaC) service. You describe the AWS resources you want in a YAML or JSON template, and CloudFormation provisions and manages them as a stack. You can create, update, and delete the stack to manage its resources together. For example, a template can define an EC2 instance and its security group. Think of it as Docker Compose for AWS infrastructure. Remember: CloudFormation = describe infrastructure as code, and AWS builds it.",
      tags: [
        "CloudFormation",
        "Infrastructure as Code",
        "IaC",
        "templates",
        "stacks",
        "automation",
      ],
    },
    {
      id: "aws-057",
      category: "Security and Monitoring",
      question:
        "What are the main AWS security, compliance, and monitoring services?",
      answer:
        "Trusted Advisor — recommends improvements to your AWS environment. Inspector — finds software vulnerabilities. GuardDuty — detects suspicious activity and potential threats. Security Hub — centralizes security findings. CloudWatch — monitors metrics, logs, and alarms. Artifact — provides AWS compliance reports and agreements.",
      tags: [
        "Trusted Advisor",
        "Inspector",
        "GuardDuty",
        "Security Hub",
        "CloudWatch",
        "Artifact",
        "security",
        "compliance",
        "monitoring",
        "comparison",
      ],
    },
    {
      id: "aws-058",
      category: "Networking and Content Delivery",
      question: "What is Elastic Load Balancing (ELB), and how does it work?",
      answer:
        "Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, or IP addresses. For example, an Application Load Balancer can distribute website requests across three EC2 instances and stop sending traffic to an unhealthy instance. Main types: Application Load Balancer (ALB) for HTTP/HTTPS at Layer 7; Network Load Balancer (NLB) for high-performance TCP/UDP/TLS at Layer 4; Gateway Load Balancer (GWLB) for virtual network appliances; and Classic Load Balancer (CLB), the older generation. ELB distributes traffic; Auto Scaling adds or removes capacity.",
      tags: [
        "ELB",
        "Elastic Load Balancing",
        "ALB",
        "NLB",
        "GWLB",
        "CLB",
        "EC2",
        "load balancer",
        "high availability",
        "Auto Scaling",
      ],
    },
    {
      id: "aws-059",
      category: "AWS Well-Architected Framework",
      question:
        "What are the six pillars of the AWS Well-Architected Framework?",
      answer:
        "The six pillars are Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. They provide a way to evaluate and improve cloud workloads. A design decision can support more than one pillar.",
      tags: ["Well-Architected", "pillars", "framework"],
    },
    {
      id: "aws-060",
      category: "AWS Well-Architected Framework",
      question: "What is the Operational Excellence pillar? Give an example.",
      answer:
        "Operational Excellence focuses on running and monitoring systems, continually improving processes, and learning from operational events. Example: a team uses infrastructure as code, centralized logs, dashboards, runbooks, and post-incident reviews to deploy and operate an application consistently.",
      tags: [
        "Well-Architected",
        "Operational Excellence",
        "operations",
        "monitoring",
      ],
    },
    {
      id: "aws-061",
      category: "AWS Well-Architected Framework",
      question: "What is the Security pillar? Give an example.",
      answer:
        "Security focuses on protecting data, systems, and assets through risk assessment and security controls. Example: an application uses IAM least-privilege roles, MFA, encryption with AWS KMS, network segmentation, and continuous security monitoring.",
      tags: ["Well-Architected", "Security", "IAM", "encryption"],
    },
    {
      id: "aws-062",
      category: "AWS Well-Architected Framework",
      question: "What is the Reliability pillar? Give an example.",
      answer:
        "Reliability focuses on ensuring a workload performs its intended function correctly and consistently, recovering from failures, and handling changing demand. Example: deploy across multiple Availability Zones, use load balancing and health checks, back up data, and test recovery procedures.",
      tags: ["Well-Architected", "Reliability", "availability", "recovery"],
    },
    {
      id: "aws-063",
      category: "AWS Well-Architected Framework",
      question: "What is the Performance Efficiency pillar? Give an example.",
      answer:
        "Performance Efficiency focuses on using computing resources efficiently to meet requirements and adapting as technology and demand change. Example: benchmark instance types, use caching or CloudFront, choose an appropriate database, and scale resources based on workload metrics.",
      tags: [
        "Well-Architected",
        "Performance Efficiency",
        "performance",
        "scaling",
      ],
    },
    {
      id: "aws-064",
      category: "AWS Well-Architected Framework",
      question: "What is the Cost Optimization pillar? Give an example.",
      answer:
        "Cost Optimization focuses on delivering business value at the lowest appropriate cost, avoiding waste, and understanding spending. Example: right-size underused EC2 instances, stop non-production resources when idle, use suitable Savings Plans for steady usage, and review costs with AWS Cost Explorer.",
      tags: ["Well-Architected", "Cost Optimization", "cost", "right-sizing"],
    },
    {
      id: "aws-065",
      category: "AWS Well-Architected Framework",
      question: "What is the Sustainability pillar? Give an example.",
      answer:
        "Sustainability focuses on minimizing the environmental impacts of running cloud workloads, especially energy use and resource consumption. Example: right-size resources, use managed services and efficient architectures, scale capacity with demand, and remove idle resources.",
      tags: ["Well-Architected", "Sustainability", "efficiency", "environment"],
    },
    {
      id: "aws-066",
      category: "AWS Well-Architected Framework - Scenario Practice",
      question:
        "Scenario: A team deploys its application across multiple Availability Zones and configures automatic failover and tested backups. Which Well-Architected pillar is primarily addressed?",
      answer:
        "Reliability. Multi-AZ deployment, failover, backups, and recovery testing help the workload continue operating and recover from failures.",
      tags: ["Well-Architected", "scenario", "Reliability"],
    },
    {
      id: "aws-067",
      category: "AWS Well-Architected Framework - Scenario Practice",
      question:
        "Scenario: A company requires MFA, grants each application only the IAM permissions it needs, and encrypts sensitive data. Which Well-Architected pillar is primarily addressed?",
      answer:
        "Security. MFA, least-privilege access, and encryption protect identities, data, and systems. These controls can also support compliance and operational goals.",
      tags: ["Well-Architected", "scenario", "Security", "IAM"],
    },
    {
      id: "aws-068",
      category: "AWS Well-Architected Framework - Scenario Practice",
      question:
        "Scenario: Developers use CloudWatch dashboards, automated deployments, runbooks, and post-incident reviews to improve how they operate a service. Which pillar is primarily addressed?",
      answer:
        "Operational Excellence. The focus is on operating, observing, automating, and continually improving the workload and its processes.",
      tags: [
        "Well-Architected",
        "scenario",
        "Operational Excellence",
        "CloudWatch",
      ],
    },
    {
      id: "aws-069",
      category: "AWS Well-Architected Framework - Scenario Practice",
      question:
        "Scenario: A web application adds caching, selects a more suitable EC2 instance family after benchmarking, and uses CloudFront to reduce latency. Which pillar is primarily addressed?",
      answer:
        "Performance Efficiency. The changes improve how effectively the workload uses compute and delivery resources to meet performance requirements.",
      tags: [
        "Well-Architected",
        "scenario",
        "Performance Efficiency",
        "CloudFront",
      ],
    },
    {
      id: "aws-070",
      category: "AWS Well-Architected Framework - Scenario Practice",
      question:
        "Scenario: A company identifies idle EC2 instances, rightsizes oversized databases, and chooses a Savings Plan for predictable compute usage. Which pillar is primarily addressed?",
      answer:
        "Cost Optimization. The actions reduce waste and align spending with actual workload needs. Rightsizing can also improve sustainability.",
      tags: [
        "Well-Architected",
        "scenario",
        "Cost Optimization",
        "Savings Plans",
      ],
    },
    {
      id: "aws-071",
      category: "AWS Well-Architected Framework - Scenario Practice",
      question:
        "Scenario: A team removes unused resources, scales capacity with actual demand, and redesigns a workload to consume fewer compute resources. Which pillar is primarily addressed?",
      answer:
        "Sustainability. The goal is to reduce the environmental impact of the workload by improving resource utilization and avoiding unnecessary consumption. These changes may also reduce cost.",
      tags: [
        "Well-Architected",
        "scenario",
        "Sustainability",
        "resource efficiency",
      ],
    },
    {
      id: "aws-072",
      category: "AWS Cloud Benefits",
      question: "What are the six major benefits of AWS Cloud?",
      answer: `- Trade capital expense for variable expense
- Benefit from economies of scale
- Stop guessing capacity
- Increase speed and agility
- Stop spending money running and maintaining data centers
- Go global in minutes`,
      tags: ["cloud benefits", "fundamentals"],
    },
    {
      id: "aws-073",
      category: "AWS Cloud Benefits",
      question: "What is elasticity in cloud computing?",
      answer:
        "Elasticity is the ability to automatically increase or decrease computing resources as demand changes. For example, EC2 Auto Scaling can add instances during a traffic spike and remove them when traffic falls.",
      tags: ["elasticity", "scalability", "EC2", "Auto Scaling"],
    },
    {
      id: "aws-074",
      category: "AWS Cloud Benefits",
      question: "What is the difference between elasticity and scalability?",
      answer:
        "Scalability is the ability to increase or decrease capacity to handle workload changes, whether manually or automatically. Elasticity is the dynamic adjustment of resources to match changing demand, often automatically scaling out and back in.",
      tags: ["elasticity", "scalability"],
    },
    {
      id: "aws-075",
      category: "AWS Cloud Benefits",
      question:
        "Which AWS services can work together to provide elasticity for an application?",
      answer:
        "EC2 Auto Scaling adds or removes EC2 instances; Elastic Load Balancing distributes incoming traffic across healthy instances; and Amazon CloudWatch monitors metrics and can trigger scaling policies.",
      tags: ["elasticity", "EC2", "Auto Scaling", "ELB", "CloudWatch"],
    },
    {
      id: "aws-076",
      category: "AWS Cloud Benefits - Scenario Practice",
      question:
        "Scenario: An online store normally runs two EC2 instances. During a sale, traffic spikes and Auto Scaling launches four more instances. When traffic returns to normal, the extra instances are removed. Which cloud benefit does this demonstrate?",
      answer:
        "Elasticity. Resources automatically scale out when demand increases and scale in when demand decreases.",
      tags: ["scenario", "elasticity", "Auto Scaling"],
    },
    {
      id: "aws-077",
      category: "Security",
      question: "What is the AWS shared responsibility model?",
      answer:
        "AWS is responsible for security of the cloud, including physical facilities, hardware, and the infrastructure running AWS services. Customers are responsible for security in the cloud, including their data, identities, permissions, and service configuration. The exact division depends on the service. Remember: AWS protects the infrastructure; you secure how you use it.",
      tags: ["shared responsibility", "security", "fundamentals"],
    },
    {
      id: "aws-078",
      category: "Security",
      question:
        "Who is responsible for patching an EC2 instance's operating system?",
      answer:
        "The customer is responsible for patching the guest operating system and applications on an EC2 instance, along with configuring access and network controls. AWS maintains the underlying physical infrastructure and virtualization layer. Managed services can shift more maintenance to AWS, but customers still manage their data and access permissions.",
      tags: ["shared responsibility", "EC2", "patching"],
    },
    {
      id: "aws-079",
      category: "Security",
      question: "What is AWS Identity and Access Management (IAM)?",
      answer:
        "IAM controls who or what can access AWS resources and which actions they can perform. Policies define permissions for identities and resources. For example, an IAM policy can allow an application to read objects from one S3 bucket without allowing it to delete them. Remember: IAM = access control for AWS.",
      tags: ["IAM", "permissions", "access control"],
    },
    {
      id: "aws-080",
      category: "Security",
      question: "What is the difference between an IAM user, group, and role?",
      answer:
        "An IAM user is an identity in an AWS account that can have long-term credentials. An IAM group is a collection of IAM users that share permissions; it cannot be assumed and does not have credentials. An IAM role is an identity assumed by trusted users, applications, or AWS services using temporary credentials. Prefer federation for people and roles for workloads over long-term access keys.",
      tags: ["IAM", "users", "groups", "roles", "comparison"],
    },
    {
      id: "aws-081",
      category: "Security",
      question: "What does the principle of least privilege mean in AWS?",
      answer:
        "Grant only the permissions needed to perform a task, on only the required resources, and under appropriate conditions. For example, a reporting application that only reads one S3 bucket should not receive administrator access or permission to delete objects. Review access regularly and remove permissions that are no longer needed.",
      tags: ["IAM", "least privilege", "permissions"],
    },
    {
      id: "aws-082",
      category: "Security",
      question:
        "What is multi-factor authentication (MFA), and why is it important?",
      answer:
        "MFA requires more than one authentication factor, such as a password plus a security key or authenticator code. It reduces the risk of account compromise when a password is stolen. Protect root and human access with MFA. MFA for console sign-in does not automatically protect every API request made with long-term access keys.",
      tags: ["MFA", "authentication", "account protection"],
    },
    {
      id: "aws-083",
      category: "Security",
      question: "How should you protect and use the AWS account root user?",
      answer:
        "Protect root access with a strong, unique password and MFA, secure the associated email account, and avoid creating root access keys. Do not use root for everyday administration; use federated access or IAM roles with appropriate permissions. Use root only for tasks that specifically require it, and monitor root activity.",
      tags: ["root user", "MFA", "best practices"],
    },
    {
      id: "aws-084",
      category: "Security",
      question: "What is AWS Security Token Service (STS)?",
      answer:
        "AWS STS issues temporary, limited-lifetime credentials for accessing AWS resources. It supports workflows such as assuming an IAM role and federating external identities. Temporary credentials include an access key ID, secret access key, and session token. Their permissions depend on the role and applicable policies; temporary does not automatically mean least privilege.",
      tags: ["STS", "IAM", "temporary credentials", "federation"],
    },
    {
      id: "aws-085",
      category: "Security",
      question: "What is AWS IAM Identity Center?",
      answer:
        "IAM Identity Center centrally manages workforce access to multiple AWS accounts and supported business applications. It can connect to an existing identity provider and use permission sets to assign AWS account access. Remember: Identity Center helps employees sign in and access their assigned accounts; it is not a replacement for workload IAM roles.",
      tags: [
        "IAM Identity Center",
        "single sign-on",
        "workforce access",
        "permission sets",
      ],
    },
    {
      id: "aws-086",
      category: "Security",
      question: "What is an AWS Organizations service control policy (SCP)?",
      answer:
        "An SCP sets permission guardrails for principals in member accounts within an AWS organization. It limits the maximum available permissions but does not grant access; IAM or resource policies must still allow the action. SCPs do not restrict the management account or service-linked roles. Remember: SCP = organization-level permission boundary, not a permission grant.",
      tags: ["Organizations", "SCP", "guardrails", "permissions"],
    },
    {
      id: "aws-087",
      category: "Security",
      question: "What is IAM Access Analyzer?",
      answer:
        "IAM Access Analyzer helps identify supported resources that allow access from outside your chosen zone of trust, such as another AWS account or the public. It also provides policy validation and capabilities for analyzing unused access. Findings help you review permissions; a finding does not necessarily mean the access is malicious or unintended.",
      tags: [
        "IAM Access Analyzer",
        "external access",
        "policy validation",
        "least privilege",
      ],
    },
    {
      id: "aws-088",
      category: "Security",
      question: "What is AWS WAF?",
      answer:
        "AWS WAF is a web application firewall that filters HTTP and HTTPS requests to supported resources such as CloudFront distributions and Application Load Balancers. Web ACL rules can help block common attacks such as SQL injection and cross-site scripting, filter IP addresses, or rate-limit requests. Remember: WAF inspects web requests; it does not replace secure application code.",
      tags: ["WAF", "web application firewall", "SQL injection", "web ACL"],
    },
    {
      id: "aws-089",
      category: "Security",
      question: "What is AWS Shield, and how do Standard and Advanced differ?",
      answer:
        "AWS Shield provides protection against distributed denial-of-service (DDoS) attacks. Shield Standard is automatically included at no additional charge and protects against common network and transport layer attacks. Shield Advanced is a paid service with enhanced protection for supported resources, additional visibility, and access to specialized response assistance. Features and eligibility depend on the protected resource and service requirements.",
      tags: ["Shield", "DDoS", "Shield Standard", "Shield Advanced"],
    },
    {
      id: "aws-090",
      category: "Security",
      question: "What is the difference between AWS WAF and AWS Shield?",
      answer:
        "WAF filters application-layer HTTP and HTTPS requests using rules, such as blocking SQL injection patterns or excessive requests from an IP address. Shield focuses on DDoS protection, especially network and transport layer attacks. They can work together: Shield helps maintain availability during attacks, while WAF controls which web requests reach the application.",
      tags: ["WAF", "Shield", "DDoS", "comparison"],
    },
    {
      id: "aws-091",
      category: "Security",
      question:
        "What is the difference between a security group and a network ACL?",
      answer:
        "A security group controls traffic for associated network interfaces, such as those on EC2 instances. It is stateful and has allow rules only, so response traffic for an allowed connection is automatically permitted. A network ACL controls traffic at the subnet boundary, is stateless, and supports numbered allow and deny rules evaluated in order. Network ACL rules must permit both request and response traffic.",
      tags: ["security groups", "network ACL", "VPC", "stateful", "comparison"],
    },
    {
      id: "aws-092",
      category: "Security",
      question: "What is Amazon Macie?",
      answer:
        "Amazon Macie helps discover and protect sensitive data in Amazon S3 using machine learning and pattern matching. It can identify data such as personally identifiable information (PII) in supported objects and report bucket security risks. Macie produces findings; it does not automatically redact or remove sensitive data from your objects.",
      tags: ["Macie", "S3", "sensitive data", "PII"],
    },
    {
      id: "aws-093",
      category: "Security",
      question: "What is AWS Certificate Manager (ACM)?",
      answer:
        "ACM helps provision and manage TLS certificates used to secure network communications, such as HTTPS for a website behind an Application Load Balancer or CloudFront. It supports managed renewal for eligible certificates when renewal requirements are met. Remember: ACM manages certificates for encryption in transit; KMS manages cryptographic keys used by applications and AWS services.",
      tags: ["ACM", "TLS", "certificates", "encryption in transit"],
    },
    {
      id: "aws-094",
      category: "Security",
      question: "What is AWS CloudHSM, and how does it differ from AWS KMS?",
      answer:
        "CloudHSM provides dedicated hardware security modules in your VPC with direct control over cryptographic keys, users, and operations. You manage the HSM users and your cluster's capacity and availability design. KMS provides a more managed key service with broad AWS integrations. Choose CloudHSM when requirements call for dedicated HSMs or direct cryptographic control; choose KMS for simpler integrated key management.",
      tags: ["CloudHSM", "KMS", "HSM", "comparison"],
    },
    {
      id: "aws-095",
      category: "Security",
      question: "What does Amazon S3 Block Public Access do?",
      answer:
        "S3 Block Public Access helps prevent public access granted through bucket policies and access control lists (ACLs). Settings can apply at the account, bucket, and access point levels, and S3 applies the most restrictive applicable combination. Keep it enabled unless public access is deliberately required. It does not encrypt data or replace least-privilege access policies.",
      tags: ["S3", "Block Public Access", "bucket policies", "data protection"],
    },
    {
      id: "aws-096",
      category: "Security",
      question:
        "What is the difference between encryption at rest and encryption in transit?",
      answer:
        "Encryption at rest protects stored data, such as objects in S3 or data on EBS volumes, often using keys managed through KMS. Encryption in transit protects data moving between systems, commonly using TLS or a VPN. Use both where appropriate. Encryption does not replace authorization: an identity with permission to retrieve and decrypt data can still read it.",
      tags: ["encryption", "KMS", "TLS", "data protection", "comparison"],
    },
    {
      id: "aws-097",
      category: "Security - Scenario Practice",
      question:
        "Scenario: An application on EC2 needs to read objects from one S3 bucket. How should it obtain AWS credentials?",
      answer:
        "Attach an IAM role to the EC2 instance through an instance profile and grant only the required S3 read permissions. The AWS SDK can obtain temporary role credentials automatically. Avoid embedding long-term access keys in code or configuration files. Remember: workload role plus least privilege.",
      tags: ["scenario", "IAM role", "EC2", "S3", "least privilege"],
    },
    {
      id: "aws-098",
      category: "Security - Scenario Practice",
      question:
        "Scenario: A website behind an Application Load Balancer receives SQL injection attempts. Which AWS service can help filter these requests?",
      answer:
        "AWS WAF. Associate a web ACL with the Application Load Balancer and configure appropriate managed or custom rules to detect and block malicious requests. Continue fixing application vulnerabilities, including using parameterized queries; a web application firewall is an additional defense, not a substitute for secure code.",
      tags: ["scenario", "WAF", "ALB", "SQL injection"],
    },
    {
      id: "aws-099",
      category: "Security - Scenario Practice",
      question:
        "Scenario: A company wants to find personally identifiable information stored in its S3 objects. Which AWS service should it use?",
      answer:
        "Amazon Macie. Configure sensitive data discovery for the relevant S3 data and review its findings for supported objects. Macie identifies sensitive content, while services such as GuardDuty focus on suspicious activity and Inspector focuses on workload vulnerabilities.",
      tags: ["scenario", "Macie", "S3", "PII"],
    },
    {
      id: "aws-100",
      category: "Security - Scenario Practice",
      question:
        "Scenario: A security group was changed unexpectedly. Which AWS service helps determine who made the change and when?",
      answer:
        "AWS CloudTrail. Review the relevant recorded management events for the identity, API action, timestamp, and request details. AWS Config can help show the resource's configuration history when recording is enabled, but CloudTrail provides the API activity audit trail.",
      tags: ["scenario", "CloudTrail", "Config", "auditing", "security groups"],
    },
  ],
  Ha = { title: Tf, cards: Lf };
function Mf(e) {
  const t = e.slice();
  for (let n = t.length - 1; n > 0; n--) {
    const r = Math.floor(Math.random() * (n + 1));
    [t[n], t[r]] = [t[r], t[n]];
  }
  return t;
}
function Rf(e) {
  const [t, n] = Se.useState("All"),
    [r, i] = Se.useState(e),
    [o, l] = Se.useState(0),
    [a, s] = Se.useState(!1),
    c = Se.useMemo(() => ["All", ...new Set(e.map((T) => T.category))], [e]),
    h = Se.useMemo(
      () => (t === "All" ? r : r.filter((T) => T.category === t)),
      [t, r],
    ),
    m = Se.useCallback(() => s((T) => !T), []),
    p = Se.useCallback(
      (T) => {
        (s(!1), l((d) => Math.min(h.length - 1, Math.max(0, d + T))));
      },
      [h.length],
    ),
    v = (T) => {
      (n(T), l(0), s(!1));
    },
    w = () => {
      (i(Mf(e)), l(0), s(!1));
    },
    S = () => {
      (i(e), l(0), s(!1));
    };
  return {
    categories: c,
    category: t,
    deck: h,
    index: o,
    flipped: a,
    card: h[o],
    flip: m,
    move: p,
    selectCategory: v,
    shuffleDeck: w,
    resetOrder: S,
  };
}
function Ff({ onPrev: e, onNext: t, onFlip: n }) {
  Se.useEffect(() => {
    const r = (i) => {
      i.key === "ArrowRight"
        ? t()
        : i.key === "ArrowLeft"
          ? e()
          : (i.key === " " || i.key === "Enter") &&
            i.target.tagName !== "BUTTON" &&
            (i.preventDefault(), n());
    };
    return (
      window.addEventListener("keydown", r),
      () => window.removeEventListener("keydown", r)
    );
  }, [e, t, n]);
}
function Df({ categories: e, selected: t, onSelect: n }) {
  return z.jsx("div", {
    className: "chips",
    role: "group",
    "aria-label": "Topics",
    children: e.map((r) =>
      z.jsx(
        "button",
        {
          className: "chip",
          "aria-pressed": r === t,
          onClick: () => n(r),
          children: r,
        },
        r,
      ),
    ),
  });
}
function Of({ current: e, total: t, flipped: n }) {
  return z.jsxs(z.Fragment, {
    children: [
      z.jsxs("div", {
        className: "meta",
        children: [
          z.jsxs("span", { children: ["Card ", e, " of ", t] }),
          z.jsx("span", { children: n ? "Answer" : "Question" }),
        ],
      }),
      z.jsx("div", {
        className: "bar",
        children: z.jsx("i", { style: { width: `${(e / t) * 100}%` } }),
      }),
    ],
  });
}
function jf({ card: e, flipped: t, onFlip: n }) {
  return z.jsx("div", {
    className: "scene",
    children: z.jsx("button", {
      className: `card${t ? " flipped" : ""}`,
      onClick: n,
      "aria-label": t
        ? "Showing answer. Flip to question"
        : "Showing question. Flip to answer",
      children: z.jsxs("span", {
        className: "inner",
        children: [
          z.jsxs("span", {
            className: "face front",
            children: [
              z.jsx("span", { className: "cat", children: e.category }),
              z.jsx("span", { className: "q", children: e.question }),
              z.jsx("span", { className: "hint", children: "Tap to flip" }),
            ],
          }),
          z.jsxs("span", {
            className: "face rear",
            "aria-hidden": !t,
            children: [
              z.jsx("span", { className: "cat", children: e.question }),
              z.jsx("span", { className: "a", children: e.answer }),
              z.jsx("span", {
                className: "tags",
                children: (e.tags || []).map((r) =>
                  z.jsx("span", { className: "tag", children: r }, r),
                ),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Bf({
  canPrev: e,
  canNext: t,
  flipped: n,
  onPrev: r,
  onNext: i,
  onFlip: o,
  onShuffle: l,
  onReset: a,
}) {
  return z.jsxs(z.Fragment, {
    children: [
      z.jsxs("div", {
        className: "ctl",
        children: [
          z.jsx("button", {
            className: "btn",
            disabled: !e,
            onClick: r,
            children: "Previous",
          }),
          z.jsx("button", {
            className: "btn main",
            onClick: o,
            children: n ? "Show question" : "Show answer",
          }),
          z.jsx("button", {
            className: "btn",
            disabled: !t,
            onClick: i,
            children: "Next",
          }),
        ],
      }),
      z.jsxs("div", {
        className: "tools",
        children: [
          z.jsx("button", {
            className: "link",
            onClick: l,
            children: "Shuffle",
          }),
          z.jsx("button", {
            className: "link",
            onClick: a,
            children: "Reset order",
          }),
        ],
      }),
    ],
  });
}
function Uf() {
  const e = Rf(Ha.cards);
  return (
    Ff({ onPrev: () => e.move(-1), onNext: () => e.move(1), onFlip: e.flip }),
    z.jsxs("main", {
      children: [
        z.jsx("h1", { children: Ha.title }),
        z.jsx("p", {
          className: "sub",
          children: "Select a topic, tap the card to see the answer.",
        }),
        z.jsx(Df, {
          categories: e.categories,
          selected: e.category,
          onSelect: e.selectCategory,
        }),
        e.card &&
          z.jsxs(z.Fragment, {
            children: [
              z.jsx(Of, {
                current: e.index + 1,
                total: e.deck.length,
                flipped: e.flipped,
              }),
              z.jsx(jf, { card: e.card, flipped: e.flipped, onFlip: e.flip }),
              z.jsx(Bf, {
                canPrev: e.index > 0,
                canNext: e.index < e.deck.length - 1,
                flipped: e.flipped,
                onPrev: () => e.move(-1),
                onNext: () => e.move(1),
                onFlip: e.flip,
                onShuffle: e.shuffleDeck,
                onReset: e.resetOrder,
              }),
            ],
          }),
      ],
    })
  );
}
Vi.createRoot(document.getElementById("root")).render(
  z.jsx(wc.StrictMode, { children: z.jsx(Uf, {}) }),
);
