import { defineComponent as Zn, ref as kn, reactive as Wn, watch as Dn, onMounted as Yn, onUnmounted as Xn, h as Qn, nextTick as Jn } from "vue";
var Kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Un(D) {
  return D && D.__esModule && Object.prototype.hasOwnProperty.call(D, "default") ? D.default : D;
}
var Hn = { exports: {} };
/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function(D, W) {
  (function(m, d) {
    D.exports = d();
  })(typeof self < "u" ? self : Kt, function() {
    return function(S) {
      var m = {};
      function d(T) {
        if (m[T])
          return m[T].exports;
        var A = m[T] = {
          i: T,
          l: !1,
          exports: {}
        };
        return S[T].call(A.exports, A, A.exports, d), A.l = !0, A.exports;
      }
      return d.m = S, d.c = m, d.d = function(T, A, b) {
        d.o(T, A) || Object.defineProperty(T, A, {
          configurable: !1,
          enumerable: !0,
          get: b
        });
      }, d.n = function(T) {
        var A = T && T.__esModule ? function() {
          return T.default;
        } : function() {
          return T;
        };
        return d.d(A, "a", A), A;
      }, d.o = function(T, A) {
        return Object.prototype.hasOwnProperty.call(T, A);
      }, d.p = "", d(d.s = 109);
    }([
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", { value: !0 });
        var T = d(17), A = d(18), b = d(19), v = d(45), p = d(46), h = d(47), a = d(48), t = d(49), e = d(12), u = d(32), o = d(33), l = d(31), r = d(1), i = {
          Scope: r.Scope,
          create: r.create,
          find: r.find,
          query: r.query,
          register: r.register,
          Container: T.default,
          Format: A.default,
          Leaf: b.default,
          Embed: a.default,
          Scroll: v.default,
          Block: h.default,
          Inline: p.default,
          Text: t.default,
          Attributor: {
            Attribute: e.default,
            Class: u.default,
            Style: o.default,
            Store: l.default
          }
        };
        m.default = i;
      },
      function(S, m, d) {
        var T = this && this.__extends || function() {
          var l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
            r.__proto__ = i;
          } || function(r, i) {
            for (var c in i)
              i.hasOwnProperty(c) && (r[c] = i[c]);
          };
          return function(r, i) {
            l(r, i);
            function c() {
              this.constructor = r;
            }
            r.prototype = i === null ? Object.create(i) : (c.prototype = i.prototype, new c());
          };
        }();
        Object.defineProperty(m, "__esModule", { value: !0 });
        var A = function(l) {
          T(r, l);
          function r(i) {
            var c = this;
            return i = "[Parchment] " + i, c = l.call(this, i) || this, c.message = i, c.name = c.constructor.name, c;
          }
          return r;
        }(Error);
        m.ParchmentError = A;
        var b = {}, v = {}, p = {}, h = {};
        m.DATA_KEY = "__blot";
        var a;
        (function(l) {
          l[l.TYPE = 3] = "TYPE", l[l.LEVEL = 12] = "LEVEL", l[l.ATTRIBUTE = 13] = "ATTRIBUTE", l[l.BLOT = 14] = "BLOT", l[l.INLINE = 7] = "INLINE", l[l.BLOCK = 11] = "BLOCK", l[l.BLOCK_BLOT = 10] = "BLOCK_BLOT", l[l.INLINE_BLOT = 6] = "INLINE_BLOT", l[l.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", l[l.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", l[l.ANY = 15] = "ANY";
        })(a = m.Scope || (m.Scope = {}));
        function t(l, r) {
          var i = u(l);
          if (i == null)
            throw new A("Unable to create " + l + " blot");
          var c = i, n = l instanceof Node || l.nodeType === Node.TEXT_NODE ? l : c.create(r);
          return new c(n, r);
        }
        m.create = t;
        function e(l, r) {
          return r === void 0 && (r = !1), l == null ? null : l[m.DATA_KEY] != null ? l[m.DATA_KEY].blot : r ? e(l.parentNode, r) : null;
        }
        m.find = e;
        function u(l, r) {
          r === void 0 && (r = a.ANY);
          var i;
          if (typeof l == "string")
            i = h[l] || b[l];
          else if (l instanceof Text || l.nodeType === Node.TEXT_NODE)
            i = h.text;
          else if (typeof l == "number")
            l & a.LEVEL & a.BLOCK ? i = h.block : l & a.LEVEL & a.INLINE && (i = h.inline);
          else if (l instanceof HTMLElement) {
            var c = (l.getAttribute("class") || "").split(/\s+/);
            for (var n in c)
              if (i = v[c[n]], i)
                break;
            i = i || p[l.tagName];
          }
          return i == null ? null : r & a.LEVEL & i.scope && r & a.TYPE & i.scope ? i : null;
        }
        m.query = u;
        function o() {
          for (var l = [], r = 0; r < arguments.length; r++)
            l[r] = arguments[r];
          if (l.length > 1)
            return l.map(function(n) {
              return o(n);
            });
          var i = l[0];
          if (typeof i.blotName != "string" && typeof i.attrName != "string")
            throw new A("Invalid definition");
          if (i.blotName === "abstract")
            throw new A("Cannot register abstract class");
          if (h[i.blotName || i.attrName] = i, typeof i.keyName == "string")
            b[i.keyName] = i;
          else if (i.className != null && (v[i.className] = i), i.tagName != null) {
            Array.isArray(i.tagName) ? i.tagName = i.tagName.map(function(n) {
              return n.toUpperCase();
            }) : i.tagName = i.tagName.toUpperCase();
            var c = Array.isArray(i.tagName) ? i.tagName : [i.tagName];
            c.forEach(function(n) {
              (p[n] == null || i.className == null) && (p[n] = i);
            });
          }
          return i;
        }
        m.register = o;
      },
      function(S, m, d) {
        var T = d(51), A = d(11), b = d(3), v = d(20), p = String.fromCharCode(0), h = function(a) {
          Array.isArray(a) ? this.ops = a : a != null && Array.isArray(a.ops) ? this.ops = a.ops : this.ops = [];
        };
        h.prototype.insert = function(a, t) {
          var e = {};
          return a.length === 0 ? this : (e.insert = a, t != null && typeof t == "object" && Object.keys(t).length > 0 && (e.attributes = t), this.push(e));
        }, h.prototype.delete = function(a) {
          return a <= 0 ? this : this.push({ delete: a });
        }, h.prototype.retain = function(a, t) {
          if (a <= 0)
            return this;
          var e = { retain: a };
          return t != null && typeof t == "object" && Object.keys(t).length > 0 && (e.attributes = t), this.push(e);
        }, h.prototype.push = function(a) {
          var t = this.ops.length, e = this.ops[t - 1];
          if (a = b(!0, {}, a), typeof e == "object") {
            if (typeof a.delete == "number" && typeof e.delete == "number")
              return this.ops[t - 1] = { delete: e.delete + a.delete }, this;
            if (typeof e.delete == "number" && a.insert != null && (t -= 1, e = this.ops[t - 1], typeof e != "object"))
              return this.ops.unshift(a), this;
            if (A(a.attributes, e.attributes)) {
              if (typeof a.insert == "string" && typeof e.insert == "string")
                return this.ops[t - 1] = { insert: e.insert + a.insert }, typeof a.attributes == "object" && (this.ops[t - 1].attributes = a.attributes), this;
              if (typeof a.retain == "number" && typeof e.retain == "number")
                return this.ops[t - 1] = { retain: e.retain + a.retain }, typeof a.attributes == "object" && (this.ops[t - 1].attributes = a.attributes), this;
            }
          }
          return t === this.ops.length ? this.ops.push(a) : this.ops.splice(t, 0, a), this;
        }, h.prototype.chop = function() {
          var a = this.ops[this.ops.length - 1];
          return a && a.retain && !a.attributes && this.ops.pop(), this;
        }, h.prototype.filter = function(a) {
          return this.ops.filter(a);
        }, h.prototype.forEach = function(a) {
          this.ops.forEach(a);
        }, h.prototype.map = function(a) {
          return this.ops.map(a);
        }, h.prototype.partition = function(a) {
          var t = [], e = [];
          return this.forEach(function(u) {
            var o = a(u) ? t : e;
            o.push(u);
          }), [t, e];
        }, h.prototype.reduce = function(a, t) {
          return this.ops.reduce(a, t);
        }, h.prototype.changeLength = function() {
          return this.reduce(function(a, t) {
            return t.insert ? a + v.length(t) : t.delete ? a - t.delete : a;
          }, 0);
        }, h.prototype.length = function() {
          return this.reduce(function(a, t) {
            return a + v.length(t);
          }, 0);
        }, h.prototype.slice = function(a, t) {
          a = a || 0, typeof t != "number" && (t = 1 / 0);
          for (var e = [], u = v.iterator(this.ops), o = 0; o < t && u.hasNext(); ) {
            var l;
            o < a ? l = u.next(a - o) : (l = u.next(t - o), e.push(l)), o += v.length(l);
          }
          return new h(e);
        }, h.prototype.compose = function(a) {
          var t = v.iterator(this.ops), e = v.iterator(a.ops), u = [], o = e.peek();
          if (o != null && typeof o.retain == "number" && o.attributes == null) {
            for (var l = o.retain; t.peekType() === "insert" && t.peekLength() <= l; )
              l -= t.peekLength(), u.push(t.next());
            o.retain - l > 0 && e.next(o.retain - l);
          }
          for (var r = new h(u); t.hasNext() || e.hasNext(); )
            if (e.peekType() === "insert")
              r.push(e.next());
            else if (t.peekType() === "delete")
              r.push(t.next());
            else {
              var i = Math.min(t.peekLength(), e.peekLength()), c = t.next(i), n = e.next(i);
              if (typeof n.retain == "number") {
                var s = {};
                typeof c.retain == "number" ? s.retain = i : s.insert = c.insert;
                var _ = v.attributes.compose(c.attributes, n.attributes, typeof c.retain == "number");
                if (_ && (s.attributes = _), r.push(s), !e.hasNext() && A(r.ops[r.ops.length - 1], s)) {
                  var g = new h(t.rest());
                  return r.concat(g).chop();
                }
              } else
                typeof n.delete == "number" && typeof c.retain == "number" && r.push(n);
            }
          return r.chop();
        }, h.prototype.concat = function(a) {
          var t = new h(this.ops.slice());
          return a.ops.length > 0 && (t.push(a.ops[0]), t.ops = t.ops.concat(a.ops.slice(1))), t;
        }, h.prototype.diff = function(a, t) {
          if (this.ops === a.ops)
            return new h();
          var e = [this, a].map(function(i) {
            return i.map(function(c) {
              if (c.insert != null)
                return typeof c.insert == "string" ? c.insert : p;
              var n = i === a ? "on" : "with";
              throw new Error("diff() called " + n + " non-document");
            }).join("");
          }), u = new h(), o = T(e[0], e[1], t), l = v.iterator(this.ops), r = v.iterator(a.ops);
          return o.forEach(function(i) {
            for (var c = i[1].length; c > 0; ) {
              var n = 0;
              switch (i[0]) {
                case T.INSERT:
                  n = Math.min(r.peekLength(), c), u.push(r.next(n));
                  break;
                case T.DELETE:
                  n = Math.min(c, l.peekLength()), l.next(n), u.delete(n);
                  break;
                case T.EQUAL:
                  n = Math.min(l.peekLength(), r.peekLength(), c);
                  var s = l.next(n), _ = r.next(n);
                  A(s.insert, _.insert) ? u.retain(n, v.attributes.diff(s.attributes, _.attributes)) : u.push(_).delete(n);
                  break;
              }
              c -= n;
            }
          }), u.chop();
        }, h.prototype.eachLine = function(a, t) {
          t = t || `
`;
          for (var e = v.iterator(this.ops), u = new h(), o = 0; e.hasNext(); ) {
            if (e.peekType() !== "insert")
              return;
            var l = e.peek(), r = v.length(l) - e.peekLength(), i = typeof l.insert == "string" ? l.insert.indexOf(t, r) - r : -1;
            if (i < 0)
              u.push(e.next());
            else if (i > 0)
              u.push(e.next(i));
            else {
              if (a(u, e.next(1).attributes || {}, o) === !1)
                return;
              o += 1, u = new h();
            }
          }
          u.length() > 0 && a(u, {}, o);
        }, h.prototype.transform = function(a, t) {
          if (t = !!t, typeof a == "number")
            return this.transformPosition(a, t);
          for (var e = v.iterator(this.ops), u = v.iterator(a.ops), o = new h(); e.hasNext() || u.hasNext(); )
            if (e.peekType() === "insert" && (t || u.peekType() !== "insert"))
              o.retain(v.length(e.next()));
            else if (u.peekType() === "insert")
              o.push(u.next());
            else {
              var l = Math.min(e.peekLength(), u.peekLength()), r = e.next(l), i = u.next(l);
              if (r.delete)
                continue;
              i.delete ? o.push(i) : o.retain(l, v.attributes.transform(r.attributes, i.attributes, t));
            }
          return o.chop();
        }, h.prototype.transformPosition = function(a, t) {
          t = !!t;
          for (var e = v.iterator(this.ops), u = 0; e.hasNext() && u <= a; ) {
            var o = e.peekLength(), l = e.peekType();
            if (e.next(), l === "delete") {
              a -= Math.min(o, a - u);
              continue;
            } else
              l === "insert" && (u < a || !t) && (a += o);
            u += o;
          }
          return a;
        }, S.exports = h;
      },
      function(S, m) {
        var d = Object.prototype.hasOwnProperty, T = Object.prototype.toString, A = Object.defineProperty, b = Object.getOwnPropertyDescriptor, v = function(e) {
          return typeof Array.isArray == "function" ? Array.isArray(e) : T.call(e) === "[object Array]";
        }, p = function(e) {
          if (!e || T.call(e) !== "[object Object]")
            return !1;
          var u = d.call(e, "constructor"), o = e.constructor && e.constructor.prototype && d.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !u && !o)
            return !1;
          var l;
          for (l in e)
            ;
          return typeof l > "u" || d.call(e, l);
        }, h = function(e, u) {
          A && u.name === "__proto__" ? A(e, u.name, {
            enumerable: !0,
            configurable: !0,
            value: u.newValue,
            writable: !0
          }) : e[u.name] = u.newValue;
        }, a = function(e, u) {
          if (u === "__proto__")
            if (d.call(e, u)) {
              if (b)
                return b(e, u).value;
            } else
              return;
          return e[u];
        };
        S.exports = function t() {
          var e, u, o, l, r, i, c = arguments[0], n = 1, s = arguments.length, _ = !1;
          for (typeof c == "boolean" && (_ = c, c = arguments[1] || {}, n = 2), (c == null || typeof c != "object" && typeof c != "function") && (c = {}); n < s; ++n)
            if (e = arguments[n], e != null)
              for (u in e)
                o = a(c, u), l = a(e, u), c !== l && (_ && l && (p(l) || (r = v(l))) ? (r ? (r = !1, i = o && v(o) ? o : []) : i = o && p(o) ? o : {}, h(c, { name: u, newValue: t(_, i, l) })) : typeof l < "u" && h(c, { name: u, newValue: l }));
          return c;
        };
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.default = m.BlockEmbed = m.bubbleFormats = void 0;
        var T = function() {
          function y(E, x) {
            for (var L = 0; L < x.length; L++) {
              var M = x[L];
              M.enumerable = M.enumerable || !1, M.configurable = !0, "value" in M && (M.writable = !0), Object.defineProperty(E, M.key, M);
            }
          }
          return function(E, x, L) {
            return x && y(E.prototype, x), L && y(E, L), E;
          };
        }(), A = function y(E, x, L) {
          E === null && (E = Function.prototype);
          var M = Object.getOwnPropertyDescriptor(E, x);
          if (M === void 0) {
            var H = Object.getPrototypeOf(E);
            return H === null ? void 0 : y(H, x, L);
          } else {
            if ("value" in M)
              return M.value;
            var K = M.get;
            return K === void 0 ? void 0 : K.call(L);
          }
        }, b = d(3), v = c(b), p = d(2), h = c(p), a = d(0), t = c(a), e = d(16), u = c(e), o = d(6), l = c(o), r = d(7), i = c(r);
        function c(y) {
          return y && y.__esModule ? y : { default: y };
        }
        function n(y, E) {
          if (!(y instanceof E))
            throw new TypeError("Cannot call a class as a function");
        }
        function s(y, E) {
          if (!y)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return E && (typeof E == "object" || typeof E == "function") ? E : y;
        }
        function _(y, E) {
          if (typeof E != "function" && E !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof E);
          y.prototype = Object.create(E && E.prototype, { constructor: { value: y, enumerable: !1, writable: !0, configurable: !0 } }), E && (Object.setPrototypeOf ? Object.setPrototypeOf(y, E) : y.__proto__ = E);
        }
        var g = 1, w = function(y) {
          _(E, y);
          function E() {
            return n(this, E), s(this, (E.__proto__ || Object.getPrototypeOf(E)).apply(this, arguments));
          }
          return T(E, [{
            key: "attach",
            value: function() {
              A(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "attach", this).call(this), this.attributes = new t.default.Attributor.Store(this.domNode);
            }
          }, {
            key: "delta",
            value: function() {
              return new h.default().insert(this.value(), (0, v.default)(this.formats(), this.attributes.values()));
            }
          }, {
            key: "format",
            value: function(L, M) {
              var H = t.default.query(L, t.default.Scope.BLOCK_ATTRIBUTE);
              H != null && this.attributes.attribute(H, M);
            }
          }, {
            key: "formatAt",
            value: function(L, M, H, K) {
              this.format(H, K);
            }
          }, {
            key: "insertAt",
            value: function(L, M, H) {
              if (typeof M == "string" && M.endsWith(`
`)) {
                var K = t.default.create(P.blotName);
                this.parent.insertBefore(K, L === 0 ? this : this.next), K.insertAt(0, M.slice(0, -1));
              } else
                A(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "insertAt", this).call(this, L, M, H);
            }
          }]), E;
        }(t.default.Embed);
        w.scope = t.default.Scope.BLOCK_BLOT;
        var P = function(y) {
          _(E, y);
          function E(x) {
            n(this, E);
            var L = s(this, (E.__proto__ || Object.getPrototypeOf(E)).call(this, x));
            return L.cache = {}, L;
          }
          return T(E, [{
            key: "delta",
            value: function() {
              return this.cache.delta == null && (this.cache.delta = this.descendants(t.default.Leaf).reduce(function(L, M) {
                return M.length() === 0 ? L : L.insert(M.value(), O(M));
              }, new h.default()).insert(`
`, O(this))), this.cache.delta;
            }
          }, {
            key: "deleteAt",
            value: function(L, M) {
              A(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "deleteAt", this).call(this, L, M), this.cache = {};
            }
          }, {
            key: "formatAt",
            value: function(L, M, H, K) {
              M <= 0 || (t.default.query(H, t.default.Scope.BLOCK) ? L + M === this.length() && this.format(H, K) : A(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "formatAt", this).call(this, L, Math.min(M, this.length() - L - 1), H, K), this.cache = {});
            }
          }, {
            key: "insertAt",
            value: function(L, M, H) {
              if (H != null)
                return A(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "insertAt", this).call(this, L, M, H);
              if (M.length !== 0) {
                var K = M.split(`
`), J = K.shift();
                J.length > 0 && (L < this.length() - 1 || this.children.tail == null ? A(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "insertAt", this).call(this, Math.min(L, this.length() - 1), J) : this.children.tail.insertAt(this.children.tail.length(), J), this.cache = {});
                var U = this;
                K.reduce(function(j, k) {
                  return U = U.split(j, !0), U.insertAt(0, k), k.length;
                }, L + J.length);
              }
            }
          }, {
            key: "insertBefore",
            value: function(L, M) {
              var H = this.children.head;
              A(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "insertBefore", this).call(this, L, M), H instanceof u.default && H.remove(), this.cache = {};
            }
          }, {
            key: "length",
            value: function() {
              return this.cache.length == null && (this.cache.length = A(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "length", this).call(this) + g), this.cache.length;
            }
          }, {
            key: "moveChildren",
            value: function(L, M) {
              A(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "moveChildren", this).call(this, L, M), this.cache = {};
            }
          }, {
            key: "optimize",
            value: function(L) {
              A(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "optimize", this).call(this, L), this.cache = {};
            }
          }, {
            key: "path",
            value: function(L) {
              return A(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "path", this).call(this, L, !0);
            }
          }, {
            key: "removeChild",
            value: function(L) {
              A(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "removeChild", this).call(this, L), this.cache = {};
            }
          }, {
            key: "split",
            value: function(L) {
              var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
              if (M && (L === 0 || L >= this.length() - g)) {
                var H = this.clone();
                return L === 0 ? (this.parent.insertBefore(H, this), this) : (this.parent.insertBefore(H, this.next), H);
              } else {
                var K = A(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "split", this).call(this, L, M);
                return this.cache = {}, K;
              }
            }
          }]), E;
        }(t.default.Block);
        P.blotName = "block", P.tagName = "P", P.defaultChild = "break", P.allowedChildren = [l.default, t.default.Embed, i.default];
        function O(y) {
          var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return y == null || (typeof y.formats == "function" && (E = (0, v.default)(E, y.formats())), y.parent == null || y.parent.blotName == "scroll" || y.parent.statics.scope !== y.statics.scope) ? E : O(y.parent, E);
        }
        m.bubbleFormats = O, m.BlockEmbed = w, m.default = P;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.default = m.overload = m.expandConfig = void 0;
        var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(U) {
          return typeof U;
        } : function(U) {
          return U && typeof Symbol == "function" && U.constructor === Symbol && U !== Symbol.prototype ? "symbol" : typeof U;
        }, A = function() {
          function U(j, k) {
            var R = [], I = !0, z = !1, C = void 0;
            try {
              for (var q = j[Symbol.iterator](), F; !(I = (F = q.next()).done) && (R.push(F.value), !(k && R.length === k)); I = !0)
                ;
            } catch ($) {
              z = !0, C = $;
            } finally {
              try {
                !I && q.return && q.return();
              } finally {
                if (z)
                  throw C;
              }
            }
            return R;
          }
          return function(j, k) {
            if (Array.isArray(j))
              return j;
            if (Symbol.iterator in Object(j))
              return U(j, k);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), b = function() {
          function U(j, k) {
            for (var R = 0; R < k.length; R++) {
              var I = k[R];
              I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(j, I.key, I);
            }
          }
          return function(j, k, R) {
            return k && U(j.prototype, k), R && U(j, R), j;
          };
        }();
        d(50);
        var v = d(2), p = O(v), h = d(14), a = O(h), t = d(8), e = O(t), u = d(9), o = O(u), l = d(0), r = O(l), i = d(15), c = O(i), n = d(3), s = O(n), _ = d(10), g = O(_), w = d(34), P = O(w);
        function O(U) {
          return U && U.__esModule ? U : { default: U };
        }
        function y(U, j, k) {
          return j in U ? Object.defineProperty(U, j, { value: k, enumerable: !0, configurable: !0, writable: !0 }) : U[j] = k, U;
        }
        function E(U, j) {
          if (!(U instanceof j))
            throw new TypeError("Cannot call a class as a function");
        }
        var x = (0, g.default)("quill"), L = function() {
          b(U, null, [{
            key: "debug",
            value: function(k) {
              k === !0 && (k = "log"), g.default.level(k);
            }
          }, {
            key: "find",
            value: function(k) {
              return k.__quill || r.default.find(k);
            }
          }, {
            key: "import",
            value: function(k) {
              return this.imports[k] == null && x.error("Cannot import " + k + ". Are you sure it was registered?"), this.imports[k];
            }
          }, {
            key: "register",
            value: function(k, R) {
              var I = this, z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
              if (typeof k != "string") {
                var C = k.attrName || k.blotName;
                typeof C == "string" ? this.register("formats/" + C, k, R) : Object.keys(k).forEach(function(q) {
                  I.register(q, k[q], R);
                });
              } else
                this.imports[k] != null && !z && x.warn("Overwriting " + k + " with", R), this.imports[k] = R, (k.startsWith("blots/") || k.startsWith("formats/")) && R.blotName !== "abstract" ? r.default.register(R) : k.startsWith("modules") && typeof R.register == "function" && R.register();
            }
          }]);
          function U(j) {
            var k = this, R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (E(this, U), this.options = M(j, R), this.container = this.options.container, this.container == null)
              return x.error("Invalid Quill container", j);
            this.options.debug && U.debug(this.options.debug);
            var I = this.container.innerHTML.trim();
            this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new e.default(), this.scroll = r.default.create(this.root, {
              emitter: this.emitter,
              whitelist: this.options.formats
            }), this.editor = new a.default(this.scroll), this.selection = new c.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(e.default.events.EDITOR_CHANGE, function(C) {
              C === e.default.events.TEXT_CHANGE && k.root.classList.toggle("ql-blank", k.editor.isBlank());
            }), this.emitter.on(e.default.events.SCROLL_UPDATE, function(C, q) {
              var F = k.selection.lastRange, $ = F && F.length === 0 ? F.index : void 0;
              H.call(k, function() {
                return k.editor.update(null, q, $);
              }, C);
            });
            var z = this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">` + I + "<p><br></p></div>");
            this.setContents(z), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable();
          }
          return b(U, [{
            key: "addContainer",
            value: function(k) {
              var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
              if (typeof k == "string") {
                var I = k;
                k = document.createElement("div"), k.classList.add(I);
              }
              return this.container.insertBefore(k, R), k;
            }
          }, {
            key: "blur",
            value: function() {
              this.selection.setRange(null);
            }
          }, {
            key: "deleteText",
            value: function(k, R, I) {
              var z = this, C = K(k, R, I), q = A(C, 4);
              return k = q[0], R = q[1], I = q[3], H.call(this, function() {
                return z.editor.deleteText(k, R);
              }, I, k, -1 * R);
            }
          }, {
            key: "disable",
            value: function() {
              this.enable(!1);
            }
          }, {
            key: "enable",
            value: function() {
              var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
              this.scroll.enable(k), this.container.classList.toggle("ql-disabled", !k);
            }
          }, {
            key: "focus",
            value: function() {
              var k = this.scrollingContainer.scrollTop;
              this.selection.focus(), this.scrollingContainer.scrollTop = k, this.scrollIntoView();
            }
          }, {
            key: "format",
            value: function(k, R) {
              var I = this, z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.default.sources.API;
              return H.call(this, function() {
                var C = I.getSelection(!0), q = new p.default();
                if (C == null)
                  return q;
                if (r.default.query(k, r.default.Scope.BLOCK))
                  q = I.editor.formatLine(C.index, C.length, y({}, k, R));
                else {
                  if (C.length === 0)
                    return I.selection.format(k, R), q;
                  q = I.editor.formatText(C.index, C.length, y({}, k, R));
                }
                return I.setSelection(C, e.default.sources.SILENT), q;
              }, z);
            }
          }, {
            key: "formatLine",
            value: function(k, R, I, z, C) {
              var q = this, F = void 0, $ = K(k, R, I, z, C), G = A($, 4);
              return k = G[0], R = G[1], F = G[2], C = G[3], H.call(this, function() {
                return q.editor.formatLine(k, R, F);
              }, C, k, 0);
            }
          }, {
            key: "formatText",
            value: function(k, R, I, z, C) {
              var q = this, F = void 0, $ = K(k, R, I, z, C), G = A($, 4);
              return k = G[0], R = G[1], F = G[2], C = G[3], H.call(this, function() {
                return q.editor.formatText(k, R, F);
              }, C, k, 0);
            }
          }, {
            key: "getBounds",
            value: function(k) {
              var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, I = void 0;
              typeof k == "number" ? I = this.selection.getBounds(k, R) : I = this.selection.getBounds(k.index, k.length);
              var z = this.container.getBoundingClientRect();
              return {
                bottom: I.bottom - z.top,
                height: I.height,
                left: I.left - z.left,
                right: I.right - z.left,
                top: I.top - z.top,
                width: I.width
              };
            }
          }, {
            key: "getContents",
            value: function() {
              var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - k, I = K(k, R), z = A(I, 2);
              return k = z[0], R = z[1], this.editor.getContents(k, R);
            }
          }, {
            key: "getFormat",
            value: function() {
              var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
              return typeof k == "number" ? this.editor.getFormat(k, R) : this.editor.getFormat(k.index, k.length);
            }
          }, {
            key: "getIndex",
            value: function(k) {
              return k.offset(this.scroll);
            }
          }, {
            key: "getLength",
            value: function() {
              return this.scroll.length();
            }
          }, {
            key: "getLeaf",
            value: function(k) {
              return this.scroll.leaf(k);
            }
          }, {
            key: "getLine",
            value: function(k) {
              return this.scroll.line(k);
            }
          }, {
            key: "getLines",
            value: function() {
              var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
              return typeof k != "number" ? this.scroll.lines(k.index, k.length) : this.scroll.lines(k, R);
            }
          }, {
            key: "getModule",
            value: function(k) {
              return this.theme.modules[k];
            }
          }, {
            key: "getSelection",
            value: function() {
              var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
              return k && this.focus(), this.update(), this.selection.getRange()[0];
            }
          }, {
            key: "getText",
            value: function() {
              var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - k, I = K(k, R), z = A(I, 2);
              return k = z[0], R = z[1], this.editor.getText(k, R);
            }
          }, {
            key: "hasFocus",
            value: function() {
              return this.selection.hasFocus();
            }
          }, {
            key: "insertEmbed",
            value: function(k, R, I) {
              var z = this, C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : U.sources.API;
              return H.call(this, function() {
                return z.editor.insertEmbed(k, R, I);
              }, C, k);
            }
          }, {
            key: "insertText",
            value: function(k, R, I, z, C) {
              var q = this, F = void 0, $ = K(k, 0, I, z, C), G = A($, 4);
              return k = G[0], F = G[2], C = G[3], H.call(this, function() {
                return q.editor.insertText(k, R, F);
              }, C, k, R.length);
            }
          }, {
            key: "isEnabled",
            value: function() {
              return !this.container.classList.contains("ql-disabled");
            }
          }, {
            key: "off",
            value: function() {
              return this.emitter.off.apply(this.emitter, arguments);
            }
          }, {
            key: "on",
            value: function() {
              return this.emitter.on.apply(this.emitter, arguments);
            }
          }, {
            key: "once",
            value: function() {
              return this.emitter.once.apply(this.emitter, arguments);
            }
          }, {
            key: "pasteHTML",
            value: function(k, R, I) {
              this.clipboard.dangerouslyPasteHTML(k, R, I);
            }
          }, {
            key: "removeFormat",
            value: function(k, R, I) {
              var z = this, C = K(k, R, I), q = A(C, 4);
              return k = q[0], R = q[1], I = q[3], H.call(this, function() {
                return z.editor.removeFormat(k, R);
              }, I, k);
            }
          }, {
            key: "scrollIntoView",
            value: function() {
              this.selection.scrollIntoView(this.scrollingContainer);
            }
          }, {
            key: "setContents",
            value: function(k) {
              var R = this, I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.default.sources.API;
              return H.call(this, function() {
                k = new p.default(k);
                var z = R.getLength(), C = R.editor.deleteText(0, z), q = R.editor.applyDelta(k), F = q.ops[q.ops.length - 1];
                F != null && typeof F.insert == "string" && F.insert[F.insert.length - 1] === `
` && (R.editor.deleteText(R.getLength() - 1, 1), q.delete(1));
                var $ = C.compose(q);
                return $;
              }, I);
            }
          }, {
            key: "setSelection",
            value: function(k, R, I) {
              if (k == null)
                this.selection.setRange(null, R || U.sources.API);
              else {
                var z = K(k, R, I), C = A(z, 4);
                k = C[0], R = C[1], I = C[3], this.selection.setRange(new i.Range(k, R), I), I !== e.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer);
              }
            }
          }, {
            key: "setText",
            value: function(k) {
              var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.default.sources.API, I = new p.default().insert(k);
              return this.setContents(I, R);
            }
          }, {
            key: "update",
            value: function() {
              var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.default.sources.USER, R = this.scroll.update(k);
              return this.selection.update(k), R;
            }
          }, {
            key: "updateContents",
            value: function(k) {
              var R = this, I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.default.sources.API;
              return H.call(this, function() {
                return k = new p.default(k), R.editor.applyDelta(k, I);
              }, I, !0);
            }
          }]), U;
        }();
        L.DEFAULTS = {
          bounds: null,
          formats: null,
          modules: {},
          placeholder: "",
          readOnly: !1,
          scrollingContainer: null,
          strict: !0,
          theme: "default"
        }, L.events = e.default.events, L.sources = e.default.sources, L.version = "1.3.7", L.imports = {
          delta: p.default,
          parchment: r.default,
          "core/module": o.default,
          "core/theme": P.default
        };
        function M(U, j) {
          if (j = (0, s.default)(!0, {
            container: U,
            modules: {
              clipboard: !0,
              keyboard: !0,
              history: !0
            }
          }, j), !j.theme || j.theme === L.DEFAULTS.theme)
            j.theme = P.default;
          else if (j.theme = L.import("themes/" + j.theme), j.theme == null)
            throw new Error("Invalid theme " + j.theme + ". Did you register it?");
          var k = (0, s.default)(!0, {}, j.theme.DEFAULTS);
          [k, j].forEach(function(z) {
            z.modules = z.modules || {}, Object.keys(z.modules).forEach(function(C) {
              z.modules[C] === !0 && (z.modules[C] = {});
            });
          });
          var R = Object.keys(k.modules).concat(Object.keys(j.modules)), I = R.reduce(function(z, C) {
            var q = L.import("modules/" + C);
            return q == null ? x.error("Cannot load " + C + " module. Are you sure you registered it?") : z[C] = q.DEFAULTS || {}, z;
          }, {});
          return j.modules != null && j.modules.toolbar && j.modules.toolbar.constructor !== Object && (j.modules.toolbar = {
            container: j.modules.toolbar
          }), j = (0, s.default)(!0, {}, L.DEFAULTS, { modules: I }, k, j), ["bounds", "container", "scrollingContainer"].forEach(function(z) {
            typeof j[z] == "string" && (j[z] = document.querySelector(j[z]));
          }), j.modules = Object.keys(j.modules).reduce(function(z, C) {
            return j.modules[C] && (z[C] = j.modules[C]), z;
          }, {}), j;
        }
        function H(U, j, k, R) {
          if (this.options.strict && !this.isEnabled() && j === e.default.sources.USER)
            return new p.default();
          var I = k == null ? null : this.getSelection(), z = this.editor.delta, C = U();
          if (I != null && (k === !0 && (k = I.index), R == null ? I = J(I, C, j) : R !== 0 && (I = J(I, k, R, j)), this.setSelection(I, e.default.sources.SILENT)), C.length() > 0) {
            var q, F = [e.default.events.TEXT_CHANGE, C, z, j];
            if ((q = this.emitter).emit.apply(q, [e.default.events.EDITOR_CHANGE].concat(F)), j !== e.default.sources.SILENT) {
              var $;
              ($ = this.emitter).emit.apply($, F);
            }
          }
          return C;
        }
        function K(U, j, k, R, I) {
          var z = {};
          return typeof U.index == "number" && typeof U.length == "number" ? typeof j != "number" ? (I = R, R = k, k = j, j = U.length, U = U.index) : (j = U.length, U = U.index) : typeof j != "number" && (I = R, R = k, k = j, j = 0), (typeof k > "u" ? "undefined" : T(k)) === "object" ? (z = k, I = R) : typeof k == "string" && (R != null ? z[k] = R : I = k), I = I || e.default.sources.API, [U, j, z, I];
        }
        function J(U, j, k, R) {
          if (U == null)
            return null;
          var I = void 0, z = void 0;
          if (j instanceof p.default) {
            var C = [U.index, U.index + U.length].map(function(G) {
              return j.transformPosition(G, R !== e.default.sources.USER);
            }), q = A(C, 2);
            I = q[0], z = q[1];
          } else {
            var F = [U.index, U.index + U.length].map(function(G) {
              return G < j || G === j && R === e.default.sources.USER ? G : k >= 0 ? G + k : Math.max(j, G + k);
            }), $ = A(F, 2);
            I = $[0], z = $[1];
          }
          return new i.Range(I, z - I);
        }
        m.expandConfig = M, m.overload = K, m.default = L;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = function() {
          function l(r, i) {
            for (var c = 0; c < i.length; c++) {
              var n = i[c];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, c) {
            return i && l(r.prototype, i), c && l(r, c), r;
          };
        }(), A = function l(r, i, c) {
          r === null && (r = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(r, i);
          if (n === void 0) {
            var s = Object.getPrototypeOf(r);
            return s === null ? void 0 : l(s, i, c);
          } else {
            if ("value" in n)
              return n.value;
            var _ = n.get;
            return _ === void 0 ? void 0 : _.call(c);
          }
        }, b = d(7), v = a(b), p = d(0), h = a(p);
        function a(l) {
          return l && l.__esModule ? l : { default: l };
        }
        function t(l, r) {
          if (!(l instanceof r))
            throw new TypeError("Cannot call a class as a function");
        }
        function e(l, r) {
          if (!l)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return r && (typeof r == "object" || typeof r == "function") ? r : l;
        }
        function u(l, r) {
          if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof r);
          l.prototype = Object.create(r && r.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(l, r) : l.__proto__ = r);
        }
        var o = function(l) {
          u(r, l);
          function r() {
            return t(this, r), e(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
          }
          return T(r, [{
            key: "formatAt",
            value: function(c, n, s, _) {
              if (r.compare(this.statics.blotName, s) < 0 && h.default.query(s, h.default.Scope.BLOT)) {
                var g = this.isolate(c, n);
                _ && g.wrap(s, _);
              } else
                A(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "formatAt", this).call(this, c, n, s, _);
            }
          }, {
            key: "optimize",
            value: function(c) {
              if (A(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "optimize", this).call(this, c), this.parent instanceof r && r.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                var n = this.parent.isolate(this.offset(), this.length());
                this.moveChildren(n), n.wrap(this);
              }
            }
          }], [{
            key: "compare",
            value: function(c, n) {
              var s = r.order.indexOf(c), _ = r.order.indexOf(n);
              return s >= 0 || _ >= 0 ? s - _ : c === n ? 0 : c < n ? -1 : 1;
            }
          }]), r;
        }(h.default.Inline);
        o.allowedChildren = [o, h.default.Embed, v.default], o.order = [
          "cursor",
          "inline",
          "underline",
          "strike",
          "italic",
          "bold",
          "script",
          "link",
          "code"
        ], m.default = o;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = d(0), A = b(T);
        function b(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function v(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function p(t, e) {
          if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function h(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        var a = function(t) {
          h(e, t);
          function e() {
            return v(this, e), p(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }
          return e;
        }(A.default.Text);
        m.default = a;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = function() {
          function i(c, n) {
            for (var s = 0; s < n.length; s++) {
              var _ = n[s];
              _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(c, _.key, _);
            }
          }
          return function(c, n, s) {
            return n && i(c.prototype, n), s && i(c, s), c;
          };
        }(), A = function i(c, n, s) {
          c === null && (c = Function.prototype);
          var _ = Object.getOwnPropertyDescriptor(c, n);
          if (_ === void 0) {
            var g = Object.getPrototypeOf(c);
            return g === null ? void 0 : i(g, n, s);
          } else {
            if ("value" in _)
              return _.value;
            var w = _.get;
            return w === void 0 ? void 0 : w.call(s);
          }
        }, b = d(54), v = a(b), p = d(10), h = a(p);
        function a(i) {
          return i && i.__esModule ? i : { default: i };
        }
        function t(i, c) {
          if (!(i instanceof c))
            throw new TypeError("Cannot call a class as a function");
        }
        function e(i, c) {
          if (!i)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return c && (typeof c == "object" || typeof c == "function") ? c : i;
        }
        function u(i, c) {
          if (typeof c != "function" && c !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof c);
          i.prototype = Object.create(c && c.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), c && (Object.setPrototypeOf ? Object.setPrototypeOf(i, c) : i.__proto__ = c);
        }
        var o = (0, h.default)("quill:events"), l = ["selectionchange", "mousedown", "mouseup", "click"];
        l.forEach(function(i) {
          document.addEventListener(i, function() {
            for (var c = arguments.length, n = Array(c), s = 0; s < c; s++)
              n[s] = arguments[s];
            [].slice.call(document.querySelectorAll(".ql-container")).forEach(function(_) {
              if (_.__quill && _.__quill.emitter) {
                var g;
                (g = _.__quill.emitter).handleDOM.apply(g, n);
              }
            });
          });
        });
        var r = function(i) {
          u(c, i);
          function c() {
            t(this, c);
            var n = e(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this));
            return n.listeners = {}, n.on("error", o.error), n;
          }
          return T(c, [{
            key: "emit",
            value: function() {
              o.log.apply(o, arguments), A(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "emit", this).apply(this, arguments);
            }
          }, {
            key: "handleDOM",
            value: function(s) {
              for (var _ = arguments.length, g = Array(_ > 1 ? _ - 1 : 0), w = 1; w < _; w++)
                g[w - 1] = arguments[w];
              (this.listeners[s.type] || []).forEach(function(P) {
                var O = P.node, y = P.handler;
                (s.target === O || O.contains(s.target)) && y.apply(void 0, [s].concat(g));
              });
            }
          }, {
            key: "listenDOM",
            value: function(s, _, g) {
              this.listeners[s] || (this.listeners[s] = []), this.listeners[s].push({ node: _, handler: g });
            }
          }]), c;
        }(v.default);
        r.events = {
          EDITOR_CHANGE: "editor-change",
          SCROLL_BEFORE_UPDATE: "scroll-before-update",
          SCROLL_OPTIMIZE: "scroll-optimize",
          SCROLL_UPDATE: "scroll-update",
          SELECTION_CHANGE: "selection-change",
          TEXT_CHANGE: "text-change"
        }, r.sources = {
          API: "api",
          SILENT: "silent",
          USER: "user"
        }, m.default = r;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        function T(b, v) {
          if (!(b instanceof v))
            throw new TypeError("Cannot call a class as a function");
        }
        var A = function b(v) {
          var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          T(this, b), this.quill = v, this.options = p;
        };
        A.DEFAULTS = {}, m.default = A;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = ["error", "warn", "log", "info"], A = "warn";
        function b(p) {
          if (T.indexOf(p) <= T.indexOf(A)) {
            for (var h, a = arguments.length, t = Array(a > 1 ? a - 1 : 0), e = 1; e < a; e++)
              t[e - 1] = arguments[e];
            (h = console)[p].apply(h, t);
          }
        }
        function v(p) {
          return T.reduce(function(h, a) {
            return h[a] = b.bind(console, a, p), h;
          }, {});
        }
        b.level = v.level = function(p) {
          A = p;
        }, m.default = v;
      },
      function(S, m, d) {
        var T = Array.prototype.slice, A = d(52), b = d(53), v = S.exports = function(t, e, u) {
          return u || (u = {}), t === e ? !0 : t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || typeof t != "object" && typeof e != "object" ? u.strict ? t === e : t == e : a(t, e, u);
        };
        function p(t) {
          return t == null;
        }
        function h(t) {
          return !(!t || typeof t != "object" || typeof t.length != "number" || typeof t.copy != "function" || typeof t.slice != "function" || t.length > 0 && typeof t[0] != "number");
        }
        function a(t, e, u) {
          var o, l;
          if (p(t) || p(e) || t.prototype !== e.prototype)
            return !1;
          if (b(t))
            return b(e) ? (t = T.call(t), e = T.call(e), v(t, e, u)) : !1;
          if (h(t)) {
            if (!h(e) || t.length !== e.length)
              return !1;
            for (o = 0; o < t.length; o++)
              if (t[o] !== e[o])
                return !1;
            return !0;
          }
          try {
            var r = A(t), i = A(e);
          } catch {
            return !1;
          }
          if (r.length != i.length)
            return !1;
          for (r.sort(), i.sort(), o = r.length - 1; o >= 0; o--)
            if (r[o] != i[o])
              return !1;
          for (o = r.length - 1; o >= 0; o--)
            if (l = r[o], !v(t[l], e[l], u))
              return !1;
          return typeof t == typeof e;
        }
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", { value: !0 });
        var T = d(1), A = function() {
          function b(v, p, h) {
            h === void 0 && (h = {}), this.attrName = v, this.keyName = p;
            var a = T.Scope.TYPE & T.Scope.ATTRIBUTE;
            h.scope != null ? this.scope = h.scope & T.Scope.LEVEL | a : this.scope = T.Scope.ATTRIBUTE, h.whitelist != null && (this.whitelist = h.whitelist);
          }
          return b.keys = function(v) {
            return [].map.call(v.attributes, function(p) {
              return p.name;
            });
          }, b.prototype.add = function(v, p) {
            return this.canAdd(v, p) ? (v.setAttribute(this.keyName, p), !0) : !1;
          }, b.prototype.canAdd = function(v, p) {
            var h = T.query(v, T.Scope.BLOT & (this.scope | T.Scope.TYPE));
            return h == null ? !1 : this.whitelist == null ? !0 : typeof p == "string" ? this.whitelist.indexOf(p.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(p) > -1;
          }, b.prototype.remove = function(v) {
            v.removeAttribute(this.keyName);
          }, b.prototype.value = function(v) {
            var p = v.getAttribute(this.keyName);
            return this.canAdd(v, p) && p ? p : "";
          }, b;
        }();
        m.default = A;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.default = m.Code = void 0;
        var T = function() {
          function w(P, O) {
            var y = [], E = !0, x = !1, L = void 0;
            try {
              for (var M = P[Symbol.iterator](), H; !(E = (H = M.next()).done) && (y.push(H.value), !(O && y.length === O)); E = !0)
                ;
            } catch (K) {
              x = !0, L = K;
            } finally {
              try {
                !E && M.return && M.return();
              } finally {
                if (x)
                  throw L;
              }
            }
            return y;
          }
          return function(P, O) {
            if (Array.isArray(P))
              return P;
            if (Symbol.iterator in Object(P))
              return w(P, O);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), A = function() {
          function w(P, O) {
            for (var y = 0; y < O.length; y++) {
              var E = O[y];
              E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(P, E.key, E);
            }
          }
          return function(P, O, y) {
            return O && w(P.prototype, O), y && w(P, y), P;
          };
        }(), b = function w(P, O, y) {
          P === null && (P = Function.prototype);
          var E = Object.getOwnPropertyDescriptor(P, O);
          if (E === void 0) {
            var x = Object.getPrototypeOf(P);
            return x === null ? void 0 : w(x, O, y);
          } else {
            if ("value" in E)
              return E.value;
            var L = E.get;
            return L === void 0 ? void 0 : L.call(y);
          }
        }, v = d(2), p = i(v), h = d(0), a = i(h), t = d(4), e = i(t), u = d(6), o = i(u), l = d(7), r = i(l);
        function i(w) {
          return w && w.__esModule ? w : { default: w };
        }
        function c(w, P) {
          if (!(w instanceof P))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(w, P) {
          if (!w)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return P && (typeof P == "object" || typeof P == "function") ? P : w;
        }
        function s(w, P) {
          if (typeof P != "function" && P !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof P);
          w.prototype = Object.create(P && P.prototype, { constructor: { value: w, enumerable: !1, writable: !0, configurable: !0 } }), P && (Object.setPrototypeOf ? Object.setPrototypeOf(w, P) : w.__proto__ = P);
        }
        var _ = function(w) {
          s(P, w);
          function P() {
            return c(this, P), n(this, (P.__proto__ || Object.getPrototypeOf(P)).apply(this, arguments));
          }
          return P;
        }(o.default);
        _.blotName = "code", _.tagName = "CODE";
        var g = function(w) {
          s(P, w);
          function P() {
            return c(this, P), n(this, (P.__proto__ || Object.getPrototypeOf(P)).apply(this, arguments));
          }
          return A(P, [{
            key: "delta",
            value: function() {
              var y = this, E = this.domNode.textContent;
              return E.endsWith(`
`) && (E = E.slice(0, -1)), E.split(`
`).reduce(function(x, L) {
                return x.insert(L).insert(`
`, y.formats());
              }, new p.default());
            }
          }, {
            key: "format",
            value: function(y, E) {
              if (!(y === this.statics.blotName && E)) {
                var x = this.descendant(r.default, this.length() - 1), L = T(x, 1), M = L[0];
                M != null && M.deleteAt(M.length() - 1, 1), b(P.prototype.__proto__ || Object.getPrototypeOf(P.prototype), "format", this).call(this, y, E);
              }
            }
          }, {
            key: "formatAt",
            value: function(y, E, x, L) {
              if (E !== 0 && !(a.default.query(x, a.default.Scope.BLOCK) == null || x === this.statics.blotName && L === this.statics.formats(this.domNode))) {
                var M = this.newlineIndex(y);
                if (!(M < 0 || M >= y + E)) {
                  var H = this.newlineIndex(y, !0) + 1, K = M - H + 1, J = this.isolate(H, K), U = J.next;
                  J.format(x, L), U instanceof P && U.formatAt(0, y - H + E - K, x, L);
                }
              }
            }
          }, {
            key: "insertAt",
            value: function(y, E, x) {
              if (x == null) {
                var L = this.descendant(r.default, y), M = T(L, 2), H = M[0], K = M[1];
                H.insertAt(K, E);
              }
            }
          }, {
            key: "length",
            value: function() {
              var y = this.domNode.textContent.length;
              return this.domNode.textContent.endsWith(`
`) ? y : y + 1;
            }
          }, {
            key: "newlineIndex",
            value: function(y) {
              var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
              if (E)
                return this.domNode.textContent.slice(0, y).lastIndexOf(`
`);
              var x = this.domNode.textContent.slice(y).indexOf(`
`);
              return x > -1 ? y + x : -1;
            }
          }, {
            key: "optimize",
            value: function(y) {
              this.domNode.textContent.endsWith(`
`) || this.appendChild(a.default.create("text", `
`)), b(P.prototype.__proto__ || Object.getPrototypeOf(P.prototype), "optimize", this).call(this, y);
              var E = this.next;
              E != null && E.prev === this && E.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === E.statics.formats(E.domNode) && (E.optimize(y), E.moveChildren(this), E.remove());
            }
          }, {
            key: "replace",
            value: function(y) {
              b(P.prototype.__proto__ || Object.getPrototypeOf(P.prototype), "replace", this).call(this, y), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(E) {
                var x = a.default.find(E);
                x == null ? E.parentNode.removeChild(E) : x instanceof a.default.Embed ? x.remove() : x.unwrap();
              });
            }
          }], [{
            key: "create",
            value: function(y) {
              var E = b(P.__proto__ || Object.getPrototypeOf(P), "create", this).call(this, y);
              return E.setAttribute("spellcheck", !1), E;
            }
          }, {
            key: "formats",
            value: function() {
              return !0;
            }
          }]), P;
        }(e.default);
        g.blotName = "code-block", g.tagName = "PRE", g.TAB = "  ", m.Code = _, m.default = g;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(U) {
          return typeof U;
        } : function(U) {
          return U && typeof Symbol == "function" && U.constructor === Symbol && U !== Symbol.prototype ? "symbol" : typeof U;
        }, A = function() {
          function U(j, k) {
            var R = [], I = !0, z = !1, C = void 0;
            try {
              for (var q = j[Symbol.iterator](), F; !(I = (F = q.next()).done) && (R.push(F.value), !(k && R.length === k)); I = !0)
                ;
            } catch ($) {
              z = !0, C = $;
            } finally {
              try {
                !I && q.return && q.return();
              } finally {
                if (z)
                  throw C;
              }
            }
            return R;
          }
          return function(j, k) {
            if (Array.isArray(j))
              return j;
            if (Symbol.iterator in Object(j))
              return U(j, k);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), b = function() {
          function U(j, k) {
            for (var R = 0; R < k.length; R++) {
              var I = k[R];
              I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(j, I.key, I);
            }
          }
          return function(j, k, R) {
            return k && U(j.prototype, k), R && U(j, R), j;
          };
        }(), v = d(2), p = E(v), h = d(20), a = E(h), t = d(0), e = E(t), u = d(13), o = E(u), l = d(24), r = E(l), i = d(4), c = E(i), n = d(16), s = E(n), _ = d(21), g = E(_), w = d(11), P = E(w), O = d(3), y = E(O);
        function E(U) {
          return U && U.__esModule ? U : { default: U };
        }
        function x(U, j, k) {
          return j in U ? Object.defineProperty(U, j, { value: k, enumerable: !0, configurable: !0, writable: !0 }) : U[j] = k, U;
        }
        function L(U, j) {
          if (!(U instanceof j))
            throw new TypeError("Cannot call a class as a function");
        }
        var M = /^[ -~]*$/, H = function() {
          function U(j) {
            L(this, U), this.scroll = j, this.delta = this.getDelta();
          }
          return b(U, [{
            key: "applyDelta",
            value: function(k) {
              var R = this, I = !1;
              this.scroll.update();
              var z = this.scroll.length();
              return this.scroll.batchStart(), k = J(k), k.reduce(function(C, q) {
                var F = q.retain || q.delete || q.insert.length || 1, $ = q.attributes || {};
                if (q.insert != null) {
                  if (typeof q.insert == "string") {
                    var G = q.insert;
                    G.endsWith(`
`) && I && (I = !1, G = G.slice(0, -1)), C >= z && !G.endsWith(`
`) && (I = !0), R.scroll.insertAt(C, G);
                    var X = R.scroll.line(C), nt = A(X, 2), it = nt[0], lt = nt[1], ft = (0, y.default)({}, (0, i.bubbleFormats)(it));
                    if (it instanceof c.default) {
                      var ht = it.descendant(e.default.Leaf, lt), mt = A(ht, 1), gt = mt[0];
                      ft = (0, y.default)(ft, (0, i.bubbleFormats)(gt));
                    }
                    $ = a.default.attributes.diff(ft, $) || {};
                  } else if (T(q.insert) === "object") {
                    var Z = Object.keys(q.insert)[0];
                    if (Z == null)
                      return C;
                    R.scroll.insertAt(C, Z, q.insert[Z]);
                  }
                  z += F;
                }
                return Object.keys($).forEach(function(Y) {
                  R.scroll.formatAt(C, F, Y, $[Y]);
                }), C + F;
              }, 0), k.reduce(function(C, q) {
                return typeof q.delete == "number" ? (R.scroll.deleteAt(C, q.delete), C) : C + (q.retain || q.insert.length || 1);
              }, 0), this.scroll.batchEnd(), this.update(k);
            }
          }, {
            key: "deleteText",
            value: function(k, R) {
              return this.scroll.deleteAt(k, R), this.update(new p.default().retain(k).delete(R));
            }
          }, {
            key: "formatLine",
            value: function(k, R) {
              var I = this, z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              return this.scroll.update(), Object.keys(z).forEach(function(C) {
                if (!(I.scroll.whitelist != null && !I.scroll.whitelist[C])) {
                  var q = I.scroll.lines(k, Math.max(R, 1)), F = R;
                  q.forEach(function($) {
                    var G = $.length();
                    if (!($ instanceof o.default))
                      $.format(C, z[C]);
                    else {
                      var X = k - $.offset(I.scroll), nt = $.newlineIndex(X + F) - X + 1;
                      $.formatAt(X, nt, C, z[C]);
                    }
                    F -= G;
                  });
                }
              }), this.scroll.optimize(), this.update(new p.default().retain(k).retain(R, (0, g.default)(z)));
            }
          }, {
            key: "formatText",
            value: function(k, R) {
              var I = this, z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              return Object.keys(z).forEach(function(C) {
                I.scroll.formatAt(k, R, C, z[C]);
              }), this.update(new p.default().retain(k).retain(R, (0, g.default)(z)));
            }
          }, {
            key: "getContents",
            value: function(k, R) {
              return this.delta.slice(k, k + R);
            }
          }, {
            key: "getDelta",
            value: function() {
              return this.scroll.lines().reduce(function(k, R) {
                return k.concat(R.delta());
              }, new p.default());
            }
          }, {
            key: "getFormat",
            value: function(k) {
              var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, I = [], z = [];
              R === 0 ? this.scroll.path(k).forEach(function(q) {
                var F = A(q, 1), $ = F[0];
                $ instanceof c.default ? I.push($) : $ instanceof e.default.Leaf && z.push($);
              }) : (I = this.scroll.lines(k, R), z = this.scroll.descendants(e.default.Leaf, k, R));
              var C = [I, z].map(function(q) {
                if (q.length === 0)
                  return {};
                for (var F = (0, i.bubbleFormats)(q.shift()); Object.keys(F).length > 0; ) {
                  var $ = q.shift();
                  if ($ == null)
                    return F;
                  F = K((0, i.bubbleFormats)($), F);
                }
                return F;
              });
              return y.default.apply(y.default, C);
            }
          }, {
            key: "getText",
            value: function(k, R) {
              return this.getContents(k, R).filter(function(I) {
                return typeof I.insert == "string";
              }).map(function(I) {
                return I.insert;
              }).join("");
            }
          }, {
            key: "insertEmbed",
            value: function(k, R, I) {
              return this.scroll.insertAt(k, R, I), this.update(new p.default().retain(k).insert(x({}, R, I)));
            }
          }, {
            key: "insertText",
            value: function(k, R) {
              var I = this, z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              return R = R.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(k, R), Object.keys(z).forEach(function(C) {
                I.scroll.formatAt(k, R.length, C, z[C]);
              }), this.update(new p.default().retain(k).insert(R, (0, g.default)(z)));
            }
          }, {
            key: "isBlank",
            value: function() {
              if (this.scroll.children.length == 0)
                return !0;
              if (this.scroll.children.length > 1)
                return !1;
              var k = this.scroll.children.head;
              return k.statics.blotName !== c.default.blotName || k.children.length > 1 ? !1 : k.children.head instanceof s.default;
            }
          }, {
            key: "removeFormat",
            value: function(k, R) {
              var I = this.getText(k, R), z = this.scroll.line(k + R), C = A(z, 2), q = C[0], F = C[1], $ = 0, G = new p.default();
              q != null && (q instanceof o.default ? $ = q.newlineIndex(F) - F + 1 : $ = q.length() - F, G = q.delta().slice(F, F + $ - 1).insert(`
`));
              var X = this.getContents(k, R + $), nt = X.diff(new p.default().insert(I).concat(G)), it = new p.default().retain(k).concat(nt);
              return this.applyDelta(it);
            }
          }, {
            key: "update",
            value: function(k) {
              var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, z = this.delta;
              if (R.length === 1 && R[0].type === "characterData" && R[0].target.data.match(M) && e.default.find(R[0].target)) {
                var C = e.default.find(R[0].target), q = (0, i.bubbleFormats)(C), F = C.offset(this.scroll), $ = R[0].oldValue.replace(r.default.CONTENTS, ""), G = new p.default().insert($), X = new p.default().insert(C.value()), nt = new p.default().retain(F).concat(G.diff(X, I));
                k = nt.reduce(function(it, lt) {
                  return lt.insert ? it.insert(lt.insert, q) : it.push(lt);
                }, new p.default()), this.delta = z.compose(k);
              } else
                this.delta = this.getDelta(), (!k || !(0, P.default)(z.compose(k), this.delta)) && (k = z.diff(this.delta, I));
              return k;
            }
          }]), U;
        }();
        function K(U, j) {
          return Object.keys(j).reduce(function(k, R) {
            return U[R] == null || (j[R] === U[R] ? k[R] = j[R] : Array.isArray(j[R]) ? j[R].indexOf(U[R]) < 0 && (k[R] = j[R].concat([U[R]])) : k[R] = [j[R], U[R]]), k;
          }, {});
        }
        function J(U) {
          return U.reduce(function(j, k) {
            if (k.insert === 1) {
              var R = (0, g.default)(k.attributes);
              return delete R.image, j.insert({ image: k.attributes.image }, R);
            }
            if (k.attributes != null && (k.attributes.list === !0 || k.attributes.bullet === !0) && (k = (0, g.default)(k), k.attributes.list ? k.attributes.list = "ordered" : (k.attributes.list = "bullet", delete k.attributes.bullet)), typeof k.insert == "string") {
              var I = k.insert.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
              return j.insert(I, k.attributes);
            }
            return j.push(k);
          }, new p.default());
        }
        m.default = H;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.default = m.Range = void 0;
        var T = function() {
          function w(P, O) {
            var y = [], E = !0, x = !1, L = void 0;
            try {
              for (var M = P[Symbol.iterator](), H; !(E = (H = M.next()).done) && (y.push(H.value), !(O && y.length === O)); E = !0)
                ;
            } catch (K) {
              x = !0, L = K;
            } finally {
              try {
                !E && M.return && M.return();
              } finally {
                if (x)
                  throw L;
              }
            }
            return y;
          }
          return function(P, O) {
            if (Array.isArray(P))
              return P;
            if (Symbol.iterator in Object(P))
              return w(P, O);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), A = function() {
          function w(P, O) {
            for (var y = 0; y < O.length; y++) {
              var E = O[y];
              E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(P, E.key, E);
            }
          }
          return function(P, O, y) {
            return O && w(P.prototype, O), y && w(P, y), P;
          };
        }(), b = d(0), v = r(b), p = d(21), h = r(p), a = d(11), t = r(a), e = d(8), u = r(e), o = d(10), l = r(o);
        function r(w) {
          return w && w.__esModule ? w : { default: w };
        }
        function i(w) {
          if (Array.isArray(w)) {
            for (var P = 0, O = Array(w.length); P < w.length; P++)
              O[P] = w[P];
            return O;
          } else
            return Array.from(w);
        }
        function c(w, P) {
          if (!(w instanceof P))
            throw new TypeError("Cannot call a class as a function");
        }
        var n = (0, l.default)("quill:selection"), s = function w(P) {
          var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          c(this, w), this.index = P, this.length = O;
        }, _ = function() {
          function w(P, O) {
            var y = this;
            c(this, w), this.emitter = O, this.scroll = P, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = v.default.create("cursor", this), this.lastRange = this.savedRange = new s(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function() {
              y.mouseDown || setTimeout(y.update.bind(y, u.default.sources.USER), 1);
            }), this.emitter.on(u.default.events.EDITOR_CHANGE, function(E, x) {
              E === u.default.events.TEXT_CHANGE && x.length() > 0 && y.update(u.default.sources.SILENT);
            }), this.emitter.on(u.default.events.SCROLL_BEFORE_UPDATE, function() {
              if (!!y.hasFocus()) {
                var E = y.getNativeRange();
                E != null && E.start.node !== y.cursor.textNode && y.emitter.once(u.default.events.SCROLL_UPDATE, function() {
                  try {
                    y.setNativeRange(E.start.node, E.start.offset, E.end.node, E.end.offset);
                  } catch {
                  }
                });
              }
            }), this.emitter.on(u.default.events.SCROLL_OPTIMIZE, function(E, x) {
              if (x.range) {
                var L = x.range, M = L.startNode, H = L.startOffset, K = L.endNode, J = L.endOffset;
                y.setNativeRange(M, H, K, J);
              }
            }), this.update(u.default.sources.SILENT);
          }
          return A(w, [{
            key: "handleComposition",
            value: function() {
              var O = this;
              this.root.addEventListener("compositionstart", function() {
                O.composing = !0;
              }), this.root.addEventListener("compositionend", function() {
                if (O.composing = !1, O.cursor.parent) {
                  var y = O.cursor.restore();
                  if (!y)
                    return;
                  setTimeout(function() {
                    O.setNativeRange(y.startNode, y.startOffset, y.endNode, y.endOffset);
                  }, 1);
                }
              });
            }
          }, {
            key: "handleDragging",
            value: function() {
              var O = this;
              this.emitter.listenDOM("mousedown", document.body, function() {
                O.mouseDown = !0;
              }), this.emitter.listenDOM("mouseup", document.body, function() {
                O.mouseDown = !1, O.update(u.default.sources.USER);
              });
            }
          }, {
            key: "focus",
            value: function() {
              this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
            }
          }, {
            key: "format",
            value: function(O, y) {
              if (!(this.scroll.whitelist != null && !this.scroll.whitelist[O])) {
                this.scroll.update();
                var E = this.getNativeRange();
                if (!(E == null || !E.native.collapsed || v.default.query(O, v.default.Scope.BLOCK))) {
                  if (E.start.node !== this.cursor.textNode) {
                    var x = v.default.find(E.start.node, !1);
                    if (x == null)
                      return;
                    if (x instanceof v.default.Leaf) {
                      var L = x.split(E.start.offset);
                      x.parent.insertBefore(this.cursor, L);
                    } else
                      x.insertBefore(this.cursor, E.start.node);
                    this.cursor.attach();
                  }
                  this.cursor.format(O, y), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
                }
              }
            }
          }, {
            key: "getBounds",
            value: function(O) {
              var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, E = this.scroll.length();
              O = Math.min(O, E - 1), y = Math.min(O + y, E - 1) - O;
              var x = void 0, L = this.scroll.leaf(O), M = T(L, 2), H = M[0], K = M[1];
              if (H == null)
                return null;
              var J = H.position(K, !0), U = T(J, 2);
              x = U[0], K = U[1];
              var j = document.createRange();
              if (y > 0) {
                j.setStart(x, K);
                var k = this.scroll.leaf(O + y), R = T(k, 2);
                if (H = R[0], K = R[1], H == null)
                  return null;
                var I = H.position(K, !0), z = T(I, 2);
                return x = z[0], K = z[1], j.setEnd(x, K), j.getBoundingClientRect();
              } else {
                var C = "left", q = void 0;
                return x instanceof Text ? (K < x.data.length ? (j.setStart(x, K), j.setEnd(x, K + 1)) : (j.setStart(x, K - 1), j.setEnd(x, K), C = "right"), q = j.getBoundingClientRect()) : (q = H.domNode.getBoundingClientRect(), K > 0 && (C = "right")), {
                  bottom: q.top + q.height,
                  height: q.height,
                  left: q[C],
                  right: q[C],
                  top: q.top,
                  width: 0
                };
              }
            }
          }, {
            key: "getNativeRange",
            value: function() {
              var O = document.getSelection();
              if (O == null || O.rangeCount <= 0)
                return null;
              var y = O.getRangeAt(0);
              if (y == null)
                return null;
              var E = this.normalizeNative(y);
              return n.info("getNativeRange", E), E;
            }
          }, {
            key: "getRange",
            value: function() {
              var O = this.getNativeRange();
              if (O == null)
                return [null, null];
              var y = this.normalizedToRange(O);
              return [y, O];
            }
          }, {
            key: "hasFocus",
            value: function() {
              return document.activeElement === this.root;
            }
          }, {
            key: "normalizedToRange",
            value: function(O) {
              var y = this, E = [[O.start.node, O.start.offset]];
              O.native.collapsed || E.push([O.end.node, O.end.offset]);
              var x = E.map(function(H) {
                var K = T(H, 2), J = K[0], U = K[1], j = v.default.find(J, !0), k = j.offset(y.scroll);
                return U === 0 ? k : j instanceof v.default.Container ? k + j.length() : k + j.index(J, U);
              }), L = Math.min(Math.max.apply(Math, i(x)), this.scroll.length() - 1), M = Math.min.apply(Math, [L].concat(i(x)));
              return new s(M, L - M);
            }
          }, {
            key: "normalizeNative",
            value: function(O) {
              if (!g(this.root, O.startContainer) || !O.collapsed && !g(this.root, O.endContainer))
                return null;
              var y = {
                start: { node: O.startContainer, offset: O.startOffset },
                end: { node: O.endContainer, offset: O.endOffset },
                native: O
              };
              return [y.start, y.end].forEach(function(E) {
                for (var x = E.node, L = E.offset; !(x instanceof Text) && x.childNodes.length > 0; )
                  if (x.childNodes.length > L)
                    x = x.childNodes[L], L = 0;
                  else if (x.childNodes.length === L)
                    x = x.lastChild, L = x instanceof Text ? x.data.length : x.childNodes.length + 1;
                  else
                    break;
                E.node = x, E.offset = L;
              }), y;
            }
          }, {
            key: "rangeToNative",
            value: function(O) {
              var y = this, E = O.collapsed ? [O.index] : [O.index, O.index + O.length], x = [], L = this.scroll.length();
              return E.forEach(function(M, H) {
                M = Math.min(L - 1, M);
                var K = void 0, J = y.scroll.leaf(M), U = T(J, 2), j = U[0], k = U[1], R = j.position(k, H !== 0), I = T(R, 2);
                K = I[0], k = I[1], x.push(K, k);
              }), x.length < 2 && (x = x.concat(x)), x;
            }
          }, {
            key: "scrollIntoView",
            value: function(O) {
              var y = this.lastRange;
              if (y != null) {
                var E = this.getBounds(y.index, y.length);
                if (E != null) {
                  var x = this.scroll.length() - 1, L = this.scroll.line(Math.min(y.index, x)), M = T(L, 1), H = M[0], K = H;
                  if (y.length > 0) {
                    var J = this.scroll.line(Math.min(y.index + y.length, x)), U = T(J, 1);
                    K = U[0];
                  }
                  if (!(H == null || K == null)) {
                    var j = O.getBoundingClientRect();
                    E.top < j.top ? O.scrollTop -= j.top - E.top : E.bottom > j.bottom && (O.scrollTop += E.bottom - j.bottom);
                  }
                }
              }
            }
          }, {
            key: "setNativeRange",
            value: function(O, y) {
              var E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : O, x = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : y, L = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
              if (n.info("setNativeRange", O, y, E, x), !(O != null && (this.root.parentNode == null || O.parentNode == null || E.parentNode == null))) {
                var M = document.getSelection();
                if (M != null)
                  if (O != null) {
                    this.hasFocus() || this.root.focus();
                    var H = (this.getNativeRange() || {}).native;
                    if (H == null || L || O !== H.startContainer || y !== H.startOffset || E !== H.endContainer || x !== H.endOffset) {
                      O.tagName == "BR" && (y = [].indexOf.call(O.parentNode.childNodes, O), O = O.parentNode), E.tagName == "BR" && (x = [].indexOf.call(E.parentNode.childNodes, E), E = E.parentNode);
                      var K = document.createRange();
                      K.setStart(O, y), K.setEnd(E, x), M.removeAllRanges(), M.addRange(K);
                    }
                  } else
                    M.removeAllRanges(), this.root.blur(), document.body.focus();
              }
            }
          }, {
            key: "setRange",
            value: function(O) {
              var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : u.default.sources.API;
              if (typeof y == "string" && (E = y, y = !1), n.info("setRange", O), O != null) {
                var x = this.rangeToNative(O);
                this.setNativeRange.apply(this, i(x).concat([y]));
              } else
                this.setNativeRange(null);
              this.update(E);
            }
          }, {
            key: "update",
            value: function() {
              var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u.default.sources.USER, y = this.lastRange, E = this.getRange(), x = T(E, 2), L = x[0], M = x[1];
              if (this.lastRange = L, this.lastRange != null && (this.savedRange = this.lastRange), !(0, t.default)(y, this.lastRange)) {
                var H;
                !this.composing && M != null && M.native.collapsed && M.start.node !== this.cursor.textNode && this.cursor.restore();
                var K = [u.default.events.SELECTION_CHANGE, (0, h.default)(this.lastRange), (0, h.default)(y), O];
                if ((H = this.emitter).emit.apply(H, [u.default.events.EDITOR_CHANGE].concat(K)), O !== u.default.sources.SILENT) {
                  var J;
                  (J = this.emitter).emit.apply(J, K);
                }
              }
            }
          }]), w;
        }();
        function g(w, P) {
          try {
            P.parentNode;
          } catch {
            return !1;
          }
          return P instanceof Text && (P = P.parentNode), w.contains(P);
        }
        m.Range = s, m.default = _;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = function() {
          function u(o, l) {
            for (var r = 0; r < l.length; r++) {
              var i = l[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, i.key, i);
            }
          }
          return function(o, l, r) {
            return l && u(o.prototype, l), r && u(o, r), o;
          };
        }(), A = function u(o, l, r) {
          o === null && (o = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(o, l);
          if (i === void 0) {
            var c = Object.getPrototypeOf(o);
            return c === null ? void 0 : u(c, l, r);
          } else {
            if ("value" in i)
              return i.value;
            var n = i.get;
            return n === void 0 ? void 0 : n.call(r);
          }
        }, b = d(0), v = p(b);
        function p(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function h(u, o) {
          if (!(u instanceof o))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(u, o) {
          if (!u)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return o && (typeof o == "object" || typeof o == "function") ? o : u;
        }
        function t(u, o) {
          if (typeof o != "function" && o !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof o);
          u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
        }
        var e = function(u) {
          t(o, u);
          function o() {
            return h(this, o), a(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
          }
          return T(o, [{
            key: "insertInto",
            value: function(r, i) {
              r.children.length === 0 ? A(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "insertInto", this).call(this, r, i) : this.remove();
            }
          }, {
            key: "length",
            value: function() {
              return 0;
            }
          }, {
            key: "value",
            value: function() {
              return "";
            }
          }], [{
            key: "value",
            value: function() {
            }
          }]), o;
        }(v.default.Embed);
        e.blotName = "break", e.tagName = "BR", m.default = e;
      },
      function(S, m, d) {
        var T = this && this.__extends || function() {
          var a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
            t.__proto__ = e;
          } || function(t, e) {
            for (var u in e)
              e.hasOwnProperty(u) && (t[u] = e[u]);
          };
          return function(t, e) {
            a(t, e);
            function u() {
              this.constructor = t;
            }
            t.prototype = e === null ? Object.create(e) : (u.prototype = e.prototype, new u());
          };
        }();
        Object.defineProperty(m, "__esModule", { value: !0 });
        var A = d(44), b = d(30), v = d(1), p = function(a) {
          T(t, a);
          function t(e) {
            var u = a.call(this, e) || this;
            return u.build(), u;
          }
          return t.prototype.appendChild = function(e) {
            this.insertBefore(e);
          }, t.prototype.attach = function() {
            a.prototype.attach.call(this), this.children.forEach(function(e) {
              e.attach();
            });
          }, t.prototype.build = function() {
            var e = this;
            this.children = new A.default(), [].slice.call(this.domNode.childNodes).reverse().forEach(function(u) {
              try {
                var o = h(u);
                e.insertBefore(o, e.children.head || void 0);
              } catch (l) {
                if (l instanceof v.ParchmentError)
                  return;
                throw l;
              }
            });
          }, t.prototype.deleteAt = function(e, u) {
            if (e === 0 && u === this.length())
              return this.remove();
            this.children.forEachAt(e, u, function(o, l, r) {
              o.deleteAt(l, r);
            });
          }, t.prototype.descendant = function(e, u) {
            var o = this.children.find(u), l = o[0], r = o[1];
            return e.blotName == null && e(l) || e.blotName != null && l instanceof e ? [l, r] : l instanceof t ? l.descendant(e, r) : [null, -1];
          }, t.prototype.descendants = function(e, u, o) {
            u === void 0 && (u = 0), o === void 0 && (o = Number.MAX_VALUE);
            var l = [], r = o;
            return this.children.forEachAt(u, o, function(i, c, n) {
              (e.blotName == null && e(i) || e.blotName != null && i instanceof e) && l.push(i), i instanceof t && (l = l.concat(i.descendants(e, c, r))), r -= n;
            }), l;
          }, t.prototype.detach = function() {
            this.children.forEach(function(e) {
              e.detach();
            }), a.prototype.detach.call(this);
          }, t.prototype.formatAt = function(e, u, o, l) {
            this.children.forEachAt(e, u, function(r, i, c) {
              r.formatAt(i, c, o, l);
            });
          }, t.prototype.insertAt = function(e, u, o) {
            var l = this.children.find(e), r = l[0], i = l[1];
            if (r)
              r.insertAt(i, u, o);
            else {
              var c = o == null ? v.create("text", u) : v.create(u, o);
              this.appendChild(c);
            }
          }, t.prototype.insertBefore = function(e, u) {
            if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function(o) {
              return e instanceof o;
            }))
              throw new v.ParchmentError("Cannot insert " + e.statics.blotName + " into " + this.statics.blotName);
            e.insertInto(this, u);
          }, t.prototype.length = function() {
            return this.children.reduce(function(e, u) {
              return e + u.length();
            }, 0);
          }, t.prototype.moveChildren = function(e, u) {
            this.children.forEach(function(o) {
              e.insertBefore(o, u);
            });
          }, t.prototype.optimize = function(e) {
            if (a.prototype.optimize.call(this, e), this.children.length === 0)
              if (this.statics.defaultChild != null) {
                var u = v.create(this.statics.defaultChild);
                this.appendChild(u), u.optimize(e);
              } else
                this.remove();
          }, t.prototype.path = function(e, u) {
            u === void 0 && (u = !1);
            var o = this.children.find(e, u), l = o[0], r = o[1], i = [[this, e]];
            return l instanceof t ? i.concat(l.path(r, u)) : (l != null && i.push([l, r]), i);
          }, t.prototype.removeChild = function(e) {
            this.children.remove(e);
          }, t.prototype.replace = function(e) {
            e instanceof t && e.moveChildren(this), a.prototype.replace.call(this, e);
          }, t.prototype.split = function(e, u) {
            if (u === void 0 && (u = !1), !u) {
              if (e === 0)
                return this;
              if (e === this.length())
                return this.next;
            }
            var o = this.clone();
            return this.parent.insertBefore(o, this.next), this.children.forEachAt(e, this.length(), function(l, r, i) {
              l = l.split(r, u), o.appendChild(l);
            }), o;
          }, t.prototype.unwrap = function() {
            this.moveChildren(this.parent, this.next), this.remove();
          }, t.prototype.update = function(e, u) {
            var o = this, l = [], r = [];
            e.forEach(function(i) {
              i.target === o.domNode && i.type === "childList" && (l.push.apply(l, i.addedNodes), r.push.apply(r, i.removedNodes));
            }), r.forEach(function(i) {
              if (!(i.parentNode != null && i.tagName !== "IFRAME" && document.body.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                var c = v.find(i);
                c != null && (c.domNode.parentNode == null || c.domNode.parentNode === o.domNode) && c.detach();
              }
            }), l.filter(function(i) {
              return i.parentNode == o.domNode;
            }).sort(function(i, c) {
              return i === c ? 0 : i.compareDocumentPosition(c) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1;
            }).forEach(function(i) {
              var c = null;
              i.nextSibling != null && (c = v.find(i.nextSibling));
              var n = h(i);
              (n.next != c || n.next == null) && (n.parent != null && n.parent.removeChild(o), o.insertBefore(n, c || void 0));
            });
          }, t;
        }(b.default);
        function h(a) {
          var t = v.find(a);
          if (t == null)
            try {
              t = v.create(a);
            } catch {
              t = v.create(v.Scope.INLINE), [].slice.call(a.childNodes).forEach(function(u) {
                t.domNode.appendChild(u);
              }), a.parentNode && a.parentNode.replaceChild(t.domNode, a), t.attach();
            }
          return t;
        }
        m.default = p;
      },
      function(S, m, d) {
        var T = this && this.__extends || function() {
          var a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
            t.__proto__ = e;
          } || function(t, e) {
            for (var u in e)
              e.hasOwnProperty(u) && (t[u] = e[u]);
          };
          return function(t, e) {
            a(t, e);
            function u() {
              this.constructor = t;
            }
            t.prototype = e === null ? Object.create(e) : (u.prototype = e.prototype, new u());
          };
        }();
        Object.defineProperty(m, "__esModule", { value: !0 });
        var A = d(12), b = d(31), v = d(17), p = d(1), h = function(a) {
          T(t, a);
          function t(e) {
            var u = a.call(this, e) || this;
            return u.attributes = new b.default(u.domNode), u;
          }
          return t.formats = function(e) {
            if (typeof this.tagName == "string")
              return !0;
            if (Array.isArray(this.tagName))
              return e.tagName.toLowerCase();
          }, t.prototype.format = function(e, u) {
            var o = p.query(e);
            o instanceof A.default ? this.attributes.attribute(o, u) : u && o != null && (e !== this.statics.blotName || this.formats()[e] !== u) && this.replaceWith(e, u);
          }, t.prototype.formats = function() {
            var e = this.attributes.values(), u = this.statics.formats(this.domNode);
            return u != null && (e[this.statics.blotName] = u), e;
          }, t.prototype.replaceWith = function(e, u) {
            var o = a.prototype.replaceWith.call(this, e, u);
            return this.attributes.copy(o), o;
          }, t.prototype.update = function(e, u) {
            var o = this;
            a.prototype.update.call(this, e, u), e.some(function(l) {
              return l.target === o.domNode && l.type === "attributes";
            }) && this.attributes.build();
          }, t.prototype.wrap = function(e, u) {
            var o = a.prototype.wrap.call(this, e, u);
            return o instanceof t && o.statics.scope === this.statics.scope && this.attributes.move(o), o;
          }, t;
        }(v.default);
        m.default = h;
      },
      function(S, m, d) {
        var T = this && this.__extends || function() {
          var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, a) {
            h.__proto__ = a;
          } || function(h, a) {
            for (var t in a)
              a.hasOwnProperty(t) && (h[t] = a[t]);
          };
          return function(h, a) {
            p(h, a);
            function t() {
              this.constructor = h;
            }
            h.prototype = a === null ? Object.create(a) : (t.prototype = a.prototype, new t());
          };
        }();
        Object.defineProperty(m, "__esModule", { value: !0 });
        var A = d(30), b = d(1), v = function(p) {
          T(h, p);
          function h() {
            return p !== null && p.apply(this, arguments) || this;
          }
          return h.value = function(a) {
            return !0;
          }, h.prototype.index = function(a, t) {
            return this.domNode === a || this.domNode.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(t, 1) : -1;
          }, h.prototype.position = function(a, t) {
            var e = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
            return a > 0 && (e += 1), [this.parent.domNode, e];
          }, h.prototype.value = function() {
            var a;
            return a = {}, a[this.statics.blotName] = this.statics.value(this.domNode) || !0, a;
          }, h.scope = b.Scope.INLINE_BLOT, h;
        }(A.default);
        m.default = v;
      },
      function(S, m, d) {
        var T = d(11), A = d(3), b = {
          attributes: {
            compose: function(p, h, a) {
              typeof p != "object" && (p = {}), typeof h != "object" && (h = {});
              var t = A(!0, {}, h);
              a || (t = Object.keys(t).reduce(function(u, o) {
                return t[o] != null && (u[o] = t[o]), u;
              }, {}));
              for (var e in p)
                p[e] !== void 0 && h[e] === void 0 && (t[e] = p[e]);
              return Object.keys(t).length > 0 ? t : void 0;
            },
            diff: function(p, h) {
              typeof p != "object" && (p = {}), typeof h != "object" && (h = {});
              var a = Object.keys(p).concat(Object.keys(h)).reduce(function(t, e) {
                return T(p[e], h[e]) || (t[e] = h[e] === void 0 ? null : h[e]), t;
              }, {});
              return Object.keys(a).length > 0 ? a : void 0;
            },
            transform: function(p, h, a) {
              if (typeof p != "object")
                return h;
              if (typeof h == "object") {
                if (!a)
                  return h;
                var t = Object.keys(h).reduce(function(e, u) {
                  return p[u] === void 0 && (e[u] = h[u]), e;
                }, {});
                return Object.keys(t).length > 0 ? t : void 0;
              }
            }
          },
          iterator: function(p) {
            return new v(p);
          },
          length: function(p) {
            return typeof p.delete == "number" ? p.delete : typeof p.retain == "number" ? p.retain : typeof p.insert == "string" ? p.insert.length : 1;
          }
        };
        function v(p) {
          this.ops = p, this.index = 0, this.offset = 0;
        }
        v.prototype.hasNext = function() {
          return this.peekLength() < 1 / 0;
        }, v.prototype.next = function(p) {
          p || (p = 1 / 0);
          var h = this.ops[this.index];
          if (h) {
            var a = this.offset, t = b.length(h);
            if (p >= t - a ? (p = t - a, this.index += 1, this.offset = 0) : this.offset += p, typeof h.delete == "number")
              return { delete: p };
            var e = {};
            return h.attributes && (e.attributes = h.attributes), typeof h.retain == "number" ? e.retain = p : typeof h.insert == "string" ? e.insert = h.insert.substr(a, p) : e.insert = h.insert, e;
          } else
            return { retain: 1 / 0 };
        }, v.prototype.peek = function() {
          return this.ops[this.index];
        }, v.prototype.peekLength = function() {
          return this.ops[this.index] ? b.length(this.ops[this.index]) - this.offset : 1 / 0;
        }, v.prototype.peekType = function() {
          return this.ops[this.index] ? typeof this.ops[this.index].delete == "number" ? "delete" : typeof this.ops[this.index].retain == "number" ? "retain" : "insert" : "retain";
        }, v.prototype.rest = function() {
          if (this.hasNext()) {
            if (this.offset === 0)
              return this.ops.slice(this.index);
            var p = this.offset, h = this.index, a = this.next(), t = this.ops.slice(this.index);
            return this.offset = p, this.index = h, [a].concat(t);
          } else
            return [];
        }, S.exports = b;
      },
      function(S, m) {
        var d = function() {
          function T(o, l) {
            return l != null && o instanceof l;
          }
          var A;
          try {
            A = Map;
          } catch {
            A = function() {
            };
          }
          var b;
          try {
            b = Set;
          } catch {
            b = function() {
            };
          }
          var v;
          try {
            v = Promise;
          } catch {
            v = function() {
            };
          }
          function p(o, l, r, i, c) {
            typeof l == "object" && (r = l.depth, i = l.prototype, c = l.includeNonEnumerable, l = l.circular);
            var n = [], s = [], _ = typeof Buffer < "u";
            typeof l > "u" && (l = !0), typeof r > "u" && (r = 1 / 0);
            function g(w, P) {
              if (w === null)
                return null;
              if (P === 0)
                return w;
              var O, y;
              if (typeof w != "object")
                return w;
              if (T(w, A))
                O = new A();
              else if (T(w, b))
                O = new b();
              else if (T(w, v))
                O = new v(function(j, k) {
                  w.then(function(R) {
                    j(g(R, P - 1));
                  }, function(R) {
                    k(g(R, P - 1));
                  });
                });
              else if (p.__isArray(w))
                O = [];
              else if (p.__isRegExp(w))
                O = new RegExp(w.source, u(w)), w.lastIndex && (O.lastIndex = w.lastIndex);
              else if (p.__isDate(w))
                O = new Date(w.getTime());
              else {
                if (_ && Buffer.isBuffer(w))
                  return Buffer.allocUnsafe ? O = Buffer.allocUnsafe(w.length) : O = new Buffer(w.length), w.copy(O), O;
                T(w, Error) ? O = Object.create(w) : typeof i > "u" ? (y = Object.getPrototypeOf(w), O = Object.create(y)) : (O = Object.create(i), y = i);
              }
              if (l) {
                var E = n.indexOf(w);
                if (E != -1)
                  return s[E];
                n.push(w), s.push(O);
              }
              T(w, A) && w.forEach(function(j, k) {
                var R = g(k, P - 1), I = g(j, P - 1);
                O.set(R, I);
              }), T(w, b) && w.forEach(function(j) {
                var k = g(j, P - 1);
                O.add(k);
              });
              for (var x in w) {
                var L;
                y && (L = Object.getOwnPropertyDescriptor(y, x)), !(L && L.set == null) && (O[x] = g(w[x], P - 1));
              }
              if (Object.getOwnPropertySymbols)
                for (var M = Object.getOwnPropertySymbols(w), x = 0; x < M.length; x++) {
                  var H = M[x], K = Object.getOwnPropertyDescriptor(w, H);
                  K && !K.enumerable && !c || (O[H] = g(w[H], P - 1), K.enumerable || Object.defineProperty(O, H, {
                    enumerable: !1
                  }));
                }
              if (c)
                for (var J = Object.getOwnPropertyNames(w), x = 0; x < J.length; x++) {
                  var U = J[x], K = Object.getOwnPropertyDescriptor(w, U);
                  K && K.enumerable || (O[U] = g(w[U], P - 1), Object.defineProperty(O, U, {
                    enumerable: !1
                  }));
                }
              return O;
            }
            return g(o, r);
          }
          p.clonePrototype = function(l) {
            if (l === null)
              return null;
            var r = function() {
            };
            return r.prototype = l, new r();
          };
          function h(o) {
            return Object.prototype.toString.call(o);
          }
          p.__objToStr = h;
          function a(o) {
            return typeof o == "object" && h(o) === "[object Date]";
          }
          p.__isDate = a;
          function t(o) {
            return typeof o == "object" && h(o) === "[object Array]";
          }
          p.__isArray = t;
          function e(o) {
            return typeof o == "object" && h(o) === "[object RegExp]";
          }
          p.__isRegExp = e;
          function u(o) {
            var l = "";
            return o.global && (l += "g"), o.ignoreCase && (l += "i"), o.multiline && (l += "m"), l;
          }
          return p.__getRegExpFlags = u, p;
        }();
        typeof S == "object" && S.exports && (S.exports = d);
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = function() {
          function O(y, E) {
            var x = [], L = !0, M = !1, H = void 0;
            try {
              for (var K = y[Symbol.iterator](), J; !(L = (J = K.next()).done) && (x.push(J.value), !(E && x.length === E)); L = !0)
                ;
            } catch (U) {
              M = !0, H = U;
            } finally {
              try {
                !L && K.return && K.return();
              } finally {
                if (M)
                  throw H;
              }
            }
            return x;
          }
          return function(y, E) {
            if (Array.isArray(y))
              return y;
            if (Symbol.iterator in Object(y))
              return O(y, E);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), A = function() {
          function O(y, E) {
            for (var x = 0; x < E.length; x++) {
              var L = E[x];
              L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(y, L.key, L);
            }
          }
          return function(y, E, x) {
            return E && O(y.prototype, E), x && O(y, x), y;
          };
        }(), b = function O(y, E, x) {
          y === null && (y = Function.prototype);
          var L = Object.getOwnPropertyDescriptor(y, E);
          if (L === void 0) {
            var M = Object.getPrototypeOf(y);
            return M === null ? void 0 : O(M, E, x);
          } else {
            if ("value" in L)
              return L.value;
            var H = L.get;
            return H === void 0 ? void 0 : H.call(x);
          }
        }, v = d(0), p = n(v), h = d(8), a = n(h), t = d(4), e = n(t), u = d(16), o = n(u), l = d(13), r = n(l), i = d(25), c = n(i);
        function n(O) {
          return O && O.__esModule ? O : { default: O };
        }
        function s(O, y) {
          if (!(O instanceof y))
            throw new TypeError("Cannot call a class as a function");
        }
        function _(O, y) {
          if (!O)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return y && (typeof y == "object" || typeof y == "function") ? y : O;
        }
        function g(O, y) {
          if (typeof y != "function" && y !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof y);
          O.prototype = Object.create(y && y.prototype, { constructor: { value: O, enumerable: !1, writable: !0, configurable: !0 } }), y && (Object.setPrototypeOf ? Object.setPrototypeOf(O, y) : O.__proto__ = y);
        }
        function w(O) {
          return O instanceof e.default || O instanceof t.BlockEmbed;
        }
        var P = function(O) {
          g(y, O);
          function y(E, x) {
            s(this, y);
            var L = _(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, E));
            return L.emitter = x.emitter, Array.isArray(x.whitelist) && (L.whitelist = x.whitelist.reduce(function(M, H) {
              return M[H] = !0, M;
            }, {})), L.domNode.addEventListener("DOMNodeInserted", function() {
            }), L.optimize(), L.enable(), L;
          }
          return A(y, [{
            key: "batchStart",
            value: function() {
              this.batch = !0;
            }
          }, {
            key: "batchEnd",
            value: function() {
              this.batch = !1, this.optimize();
            }
          }, {
            key: "deleteAt",
            value: function(x, L) {
              var M = this.line(x), H = T(M, 2), K = H[0], J = H[1], U = this.line(x + L), j = T(U, 1), k = j[0];
              if (b(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "deleteAt", this).call(this, x, L), k != null && K !== k && J > 0) {
                if (K instanceof t.BlockEmbed || k instanceof t.BlockEmbed) {
                  this.optimize();
                  return;
                }
                if (K instanceof r.default) {
                  var R = K.newlineIndex(K.length(), !0);
                  if (R > -1 && (K = K.split(R + 1), K === k)) {
                    this.optimize();
                    return;
                  }
                } else if (k instanceof r.default) {
                  var I = k.newlineIndex(0);
                  I > -1 && k.split(I + 1);
                }
                var z = k.children.head instanceof o.default ? null : k.children.head;
                K.moveChildren(k, z), K.remove();
              }
              this.optimize();
            }
          }, {
            key: "enable",
            value: function() {
              var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
              this.domNode.setAttribute("contenteditable", x);
            }
          }, {
            key: "formatAt",
            value: function(x, L, M, H) {
              this.whitelist != null && !this.whitelist[M] || (b(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "formatAt", this).call(this, x, L, M, H), this.optimize());
            }
          }, {
            key: "insertAt",
            value: function(x, L, M) {
              if (!(M != null && this.whitelist != null && !this.whitelist[L])) {
                if (x >= this.length())
                  if (M == null || p.default.query(L, p.default.Scope.BLOCK) == null) {
                    var H = p.default.create(this.statics.defaultChild);
                    this.appendChild(H), M == null && L.endsWith(`
`) && (L = L.slice(0, -1)), H.insertAt(0, L, M);
                  } else {
                    var K = p.default.create(L, M);
                    this.appendChild(K);
                  }
                else
                  b(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "insertAt", this).call(this, x, L, M);
                this.optimize();
              }
            }
          }, {
            key: "insertBefore",
            value: function(x, L) {
              if (x.statics.scope === p.default.Scope.INLINE_BLOT) {
                var M = p.default.create(this.statics.defaultChild);
                M.appendChild(x), x = M;
              }
              b(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "insertBefore", this).call(this, x, L);
            }
          }, {
            key: "leaf",
            value: function(x) {
              return this.path(x).pop() || [null, -1];
            }
          }, {
            key: "line",
            value: function(x) {
              return x === this.length() ? this.line(x - 1) : this.descendant(w, x);
            }
          }, {
            key: "lines",
            value: function() {
              var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, M = function H(K, J, U) {
                var j = [], k = U;
                return K.children.forEachAt(J, U, function(R, I, z) {
                  w(R) ? j.push(R) : R instanceof p.default.Container && (j = j.concat(H(R, I, k))), k -= z;
                }), j;
              };
              return M(this, x, L);
            }
          }, {
            key: "optimize",
            value: function() {
              var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              this.batch !== !0 && (b(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "optimize", this).call(this, x, L), x.length > 0 && this.emitter.emit(a.default.events.SCROLL_OPTIMIZE, x, L));
            }
          }, {
            key: "path",
            value: function(x) {
              return b(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "path", this).call(this, x).slice(1);
            }
          }, {
            key: "update",
            value: function(x) {
              if (this.batch !== !0) {
                var L = a.default.sources.USER;
                typeof x == "string" && (L = x), Array.isArray(x) || (x = this.observer.takeRecords()), x.length > 0 && this.emitter.emit(a.default.events.SCROLL_BEFORE_UPDATE, L, x), b(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "update", this).call(this, x.concat([])), x.length > 0 && this.emitter.emit(a.default.events.SCROLL_UPDATE, L, x);
              }
            }
          }]), y;
        }(p.default.Scroll);
        P.blotName = "scroll", P.className = "ql-editor", P.tagName = "DIV", P.defaultChild = "block", P.allowedChildren = [e.default, t.BlockEmbed, c.default], m.default = P;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.SHORTKEY = m.default = void 0;
        var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(q) {
          return typeof q;
        } : function(q) {
          return q && typeof Symbol == "function" && q.constructor === Symbol && q !== Symbol.prototype ? "symbol" : typeof q;
        }, A = function() {
          function q(F, $) {
            var G = [], X = !0, nt = !1, it = void 0;
            try {
              for (var lt = F[Symbol.iterator](), ft; !(X = (ft = lt.next()).done) && (G.push(ft.value), !($ && G.length === $)); X = !0)
                ;
            } catch (ht) {
              nt = !0, it = ht;
            } finally {
              try {
                !X && lt.return && lt.return();
              } finally {
                if (nt)
                  throw it;
              }
            }
            return G;
          }
          return function(F, $) {
            if (Array.isArray(F))
              return F;
            if (Symbol.iterator in Object(F))
              return q(F, $);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), b = function() {
          function q(F, $) {
            for (var G = 0; G < $.length; G++) {
              var X = $[G];
              X.enumerable = X.enumerable || !1, X.configurable = !0, "value" in X && (X.writable = !0), Object.defineProperty(F, X.key, X);
            }
          }
          return function(F, $, G) {
            return $ && q(F.prototype, $), G && q(F, G), F;
          };
        }(), v = d(21), p = O(v), h = d(11), a = O(h), t = d(3), e = O(t), u = d(2), o = O(u), l = d(20), r = O(l), i = d(0), c = O(i), n = d(5), s = O(n), _ = d(10), g = O(_), w = d(9), P = O(w);
        function O(q) {
          return q && q.__esModule ? q : { default: q };
        }
        function y(q, F, $) {
          return F in q ? Object.defineProperty(q, F, { value: $, enumerable: !0, configurable: !0, writable: !0 }) : q[F] = $, q;
        }
        function E(q, F) {
          if (!(q instanceof F))
            throw new TypeError("Cannot call a class as a function");
        }
        function x(q, F) {
          if (!q)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return F && (typeof F == "object" || typeof F == "function") ? F : q;
        }
        function L(q, F) {
          if (typeof F != "function" && F !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof F);
          q.prototype = Object.create(F && F.prototype, { constructor: { value: q, enumerable: !1, writable: !0, configurable: !0 } }), F && (Object.setPrototypeOf ? Object.setPrototypeOf(q, F) : q.__proto__ = F);
        }
        var M = (0, g.default)("quill:keyboard"), H = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey", K = function(q) {
          L(F, q), b(F, null, [{
            key: "match",
            value: function(G, X) {
              return X = C(X), ["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(nt) {
                return !!X[nt] !== G[nt] && X[nt] !== null;
              }) ? !1 : X.key === (G.which || G.keyCode);
            }
          }]);
          function F($, G) {
            E(this, F);
            var X = x(this, (F.__proto__ || Object.getPrototypeOf(F)).call(this, $, G));
            return X.bindings = {}, Object.keys(X.options.bindings).forEach(function(nt) {
              nt === "list autofill" && $.scroll.whitelist != null && !$.scroll.whitelist.list || X.options.bindings[nt] && X.addBinding(X.options.bindings[nt]);
            }), X.addBinding({ key: F.keys.ENTER, shiftKey: null }, R), X.addBinding({ key: F.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function() {
            }), /Firefox/i.test(navigator.userAgent) ? (X.addBinding({ key: F.keys.BACKSPACE }, { collapsed: !0 }, U), X.addBinding({ key: F.keys.DELETE }, { collapsed: !0 }, j)) : (X.addBinding({ key: F.keys.BACKSPACE }, { collapsed: !0, prefix: /^.?$/ }, U), X.addBinding({ key: F.keys.DELETE }, { collapsed: !0, suffix: /^.?$/ }, j)), X.addBinding({ key: F.keys.BACKSPACE }, { collapsed: !1 }, k), X.addBinding({ key: F.keys.DELETE }, { collapsed: !1 }, k), X.addBinding({ key: F.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: !0, offset: 0 }, U), X.listen(), X;
          }
          return b(F, [{
            key: "addBinding",
            value: function(G) {
              var X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, nt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, it = C(G);
              if (it == null || it.key == null)
                return M.warn("Attempted to add invalid keyboard binding", it);
              typeof X == "function" && (X = { handler: X }), typeof nt == "function" && (nt = { handler: nt }), it = (0, e.default)(it, X, nt), this.bindings[it.key] = this.bindings[it.key] || [], this.bindings[it.key].push(it);
            }
          }, {
            key: "listen",
            value: function() {
              var G = this;
              this.quill.root.addEventListener("keydown", function(X) {
                if (!X.defaultPrevented) {
                  var nt = X.which || X.keyCode, it = (G.bindings[nt] || []).filter(function(dt) {
                    return F.match(X, dt);
                  });
                  if (it.length !== 0) {
                    var lt = G.quill.getSelection();
                    if (!(lt == null || !G.quill.hasFocus())) {
                      var ft = G.quill.getLine(lt.index), ht = A(ft, 2), mt = ht[0], gt = ht[1], Z = G.quill.getLeaf(lt.index), Y = A(Z, 2), tt = Y[0], et = Y[1], Q = lt.length === 0 ? [tt, et] : G.quill.getLeaf(lt.index + lt.length), st = A(Q, 2), ot = st[0], at = st[1], wt = tt instanceof c.default.Text ? tt.value().slice(0, et) : "", Ot = ot instanceof c.default.Text ? ot.value().slice(at) : "", pt = {
                        collapsed: lt.length === 0,
                        empty: lt.length === 0 && mt.length() <= 1,
                        format: G.quill.getFormat(lt),
                        offset: gt,
                        prefix: wt,
                        suffix: Ot
                      }, Vt = it.some(function(dt) {
                        if (dt.collapsed != null && dt.collapsed !== pt.collapsed || dt.empty != null && dt.empty !== pt.empty || dt.offset != null && dt.offset !== pt.offset)
                          return !1;
                        if (Array.isArray(dt.format)) {
                          if (dt.format.every(function(qt) {
                            return pt.format[qt] == null;
                          }))
                            return !1;
                        } else if (T(dt.format) === "object" && !Object.keys(dt.format).every(function(qt) {
                          return dt.format[qt] === !0 ? pt.format[qt] != null : dt.format[qt] === !1 ? pt.format[qt] == null : (0, a.default)(dt.format[qt], pt.format[qt]);
                        }))
                          return !1;
                        return dt.prefix != null && !dt.prefix.test(pt.prefix) || dt.suffix != null && !dt.suffix.test(pt.suffix) ? !1 : dt.handler.call(G, lt, pt) !== !0;
                      });
                      Vt && X.preventDefault();
                    }
                  }
                }
              });
            }
          }]), F;
        }(P.default);
        K.keys = {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          ESCAPE: 27,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46
        }, K.DEFAULTS = {
          bindings: {
            bold: z("bold"),
            italic: z("italic"),
            underline: z("underline"),
            indent: {
              key: K.keys.TAB,
              format: ["blockquote", "indent", "list"],
              handler: function(F, $) {
                if ($.collapsed && $.offset !== 0)
                  return !0;
                this.quill.format("indent", "+1", s.default.sources.USER);
              }
            },
            outdent: {
              key: K.keys.TAB,
              shiftKey: !0,
              format: ["blockquote", "indent", "list"],
              handler: function(F, $) {
                if ($.collapsed && $.offset !== 0)
                  return !0;
                this.quill.format("indent", "-1", s.default.sources.USER);
              }
            },
            "outdent backspace": {
              key: K.keys.BACKSPACE,
              collapsed: !0,
              shiftKey: null,
              metaKey: null,
              ctrlKey: null,
              altKey: null,
              format: ["indent", "list"],
              offset: 0,
              handler: function(F, $) {
                $.format.indent != null ? this.quill.format("indent", "-1", s.default.sources.USER) : $.format.list != null && this.quill.format("list", !1, s.default.sources.USER);
              }
            },
            "indent code-block": I(!0),
            "outdent code-block": I(!1),
            "remove tab": {
              key: K.keys.TAB,
              shiftKey: !0,
              collapsed: !0,
              prefix: /\t$/,
              handler: function(F) {
                this.quill.deleteText(F.index - 1, 1, s.default.sources.USER);
              }
            },
            tab: {
              key: K.keys.TAB,
              handler: function(F) {
                this.quill.history.cutoff();
                var $ = new o.default().retain(F.index).delete(F.length).insert("	");
                this.quill.updateContents($, s.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(F.index + 1, s.default.sources.SILENT);
              }
            },
            "list empty enter": {
              key: K.keys.ENTER,
              collapsed: !0,
              format: ["list"],
              empty: !0,
              handler: function(F, $) {
                this.quill.format("list", !1, s.default.sources.USER), $.format.indent && this.quill.format("indent", !1, s.default.sources.USER);
              }
            },
            "checklist enter": {
              key: K.keys.ENTER,
              collapsed: !0,
              format: { list: "checked" },
              handler: function(F) {
                var $ = this.quill.getLine(F.index), G = A($, 2), X = G[0], nt = G[1], it = (0, e.default)({}, X.formats(), { list: "checked" }), lt = new o.default().retain(F.index).insert(`
`, it).retain(X.length() - nt - 1).retain(1, { list: "unchecked" });
                this.quill.updateContents(lt, s.default.sources.USER), this.quill.setSelection(F.index + 1, s.default.sources.SILENT), this.quill.scrollIntoView();
              }
            },
            "header enter": {
              key: K.keys.ENTER,
              collapsed: !0,
              format: ["header"],
              suffix: /^$/,
              handler: function(F, $) {
                var G = this.quill.getLine(F.index), X = A(G, 2), nt = X[0], it = X[1], lt = new o.default().retain(F.index).insert(`
`, $.format).retain(nt.length() - it - 1).retain(1, { header: null });
                this.quill.updateContents(lt, s.default.sources.USER), this.quill.setSelection(F.index + 1, s.default.sources.SILENT), this.quill.scrollIntoView();
              }
            },
            "list autofill": {
              key: " ",
              collapsed: !0,
              format: { list: !1 },
              prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
              handler: function(F, $) {
                var G = $.prefix.length, X = this.quill.getLine(F.index), nt = A(X, 2), it = nt[0], lt = nt[1];
                if (lt > G)
                  return !0;
                var ft = void 0;
                switch ($.prefix.trim()) {
                  case "[]":
                  case "[ ]":
                    ft = "unchecked";
                    break;
                  case "[x]":
                    ft = "checked";
                    break;
                  case "-":
                  case "*":
                    ft = "bullet";
                    break;
                  default:
                    ft = "ordered";
                }
                this.quill.insertText(F.index, " ", s.default.sources.USER), this.quill.history.cutoff();
                var ht = new o.default().retain(F.index - lt).delete(G + 1).retain(it.length() - 2 - lt).retain(1, { list: ft });
                this.quill.updateContents(ht, s.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(F.index - G, s.default.sources.SILENT);
              }
            },
            "code exit": {
              key: K.keys.ENTER,
              collapsed: !0,
              format: ["code-block"],
              prefix: /\n\n$/,
              suffix: /^\s+$/,
              handler: function(F) {
                var $ = this.quill.getLine(F.index), G = A($, 2), X = G[0], nt = G[1], it = new o.default().retain(F.index + X.length() - nt - 2).retain(1, { "code-block": null }).delete(1);
                this.quill.updateContents(it, s.default.sources.USER);
              }
            },
            "embed left": J(K.keys.LEFT, !1),
            "embed left shift": J(K.keys.LEFT, !0),
            "embed right": J(K.keys.RIGHT, !1),
            "embed right shift": J(K.keys.RIGHT, !0)
          }
        };
        function J(q, F) {
          var $, G = q === K.keys.LEFT ? "prefix" : "suffix";
          return $ = {
            key: q,
            shiftKey: F,
            altKey: null
          }, y($, G, /^$/), y($, "handler", function(nt) {
            var it = nt.index;
            q === K.keys.RIGHT && (it += nt.length + 1);
            var lt = this.quill.getLeaf(it), ft = A(lt, 1), ht = ft[0];
            return ht instanceof c.default.Embed ? (q === K.keys.LEFT ? F ? this.quill.setSelection(nt.index - 1, nt.length + 1, s.default.sources.USER) : this.quill.setSelection(nt.index - 1, s.default.sources.USER) : F ? this.quill.setSelection(nt.index, nt.length + 1, s.default.sources.USER) : this.quill.setSelection(nt.index + nt.length + 1, s.default.sources.USER), !1) : !0;
          }), $;
        }
        function U(q, F) {
          if (!(q.index === 0 || this.quill.getLength() <= 1)) {
            var $ = this.quill.getLine(q.index), G = A($, 1), X = G[0], nt = {};
            if (F.offset === 0) {
              var it = this.quill.getLine(q.index - 1), lt = A(it, 1), ft = lt[0];
              if (ft != null && ft.length() > 1) {
                var ht = X.formats(), mt = this.quill.getFormat(q.index - 1, 1);
                nt = r.default.attributes.diff(ht, mt) || {};
              }
            }
            var gt = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(F.prefix) ? 2 : 1;
            this.quill.deleteText(q.index - gt, gt, s.default.sources.USER), Object.keys(nt).length > 0 && this.quill.formatLine(q.index - gt, gt, nt, s.default.sources.USER), this.quill.focus();
          }
        }
        function j(q, F) {
          var $ = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(F.suffix) ? 2 : 1;
          if (!(q.index >= this.quill.getLength() - $)) {
            var G = {}, X = 0, nt = this.quill.getLine(q.index), it = A(nt, 1), lt = it[0];
            if (F.offset >= lt.length() - 1) {
              var ft = this.quill.getLine(q.index + 1), ht = A(ft, 1), mt = ht[0];
              if (mt) {
                var gt = lt.formats(), Z = this.quill.getFormat(q.index, 1);
                G = r.default.attributes.diff(gt, Z) || {}, X = mt.length();
              }
            }
            this.quill.deleteText(q.index, $, s.default.sources.USER), Object.keys(G).length > 0 && this.quill.formatLine(q.index + X - 1, $, G, s.default.sources.USER);
          }
        }
        function k(q) {
          var F = this.quill.getLines(q), $ = {};
          if (F.length > 1) {
            var G = F[0].formats(), X = F[F.length - 1].formats();
            $ = r.default.attributes.diff(X, G) || {};
          }
          this.quill.deleteText(q, s.default.sources.USER), Object.keys($).length > 0 && this.quill.formatLine(q.index, 1, $, s.default.sources.USER), this.quill.setSelection(q.index, s.default.sources.SILENT), this.quill.focus();
        }
        function R(q, F) {
          var $ = this;
          q.length > 0 && this.quill.scroll.deleteAt(q.index, q.length);
          var G = Object.keys(F.format).reduce(function(X, nt) {
            return c.default.query(nt, c.default.Scope.BLOCK) && !Array.isArray(F.format[nt]) && (X[nt] = F.format[nt]), X;
          }, {});
          this.quill.insertText(q.index, `
`, G, s.default.sources.USER), this.quill.setSelection(q.index + 1, s.default.sources.SILENT), this.quill.focus(), Object.keys(F.format).forEach(function(X) {
            G[X] == null && (Array.isArray(F.format[X]) || X !== "link" && $.quill.format(X, F.format[X], s.default.sources.USER));
          });
        }
        function I(q) {
          return {
            key: K.keys.TAB,
            shiftKey: !q,
            format: { "code-block": !0 },
            handler: function($) {
              var G = c.default.query("code-block"), X = $.index, nt = $.length, it = this.quill.scroll.descendant(G, X), lt = A(it, 2), ft = lt[0], ht = lt[1];
              if (ft != null) {
                var mt = this.quill.getIndex(ft), gt = ft.newlineIndex(ht, !0) + 1, Z = ft.newlineIndex(mt + ht + nt), Y = ft.domNode.textContent.slice(gt, Z).split(`
`);
                ht = 0, Y.forEach(function(tt, et) {
                  q ? (ft.insertAt(gt + ht, G.TAB), ht += G.TAB.length, et === 0 ? X += G.TAB.length : nt += G.TAB.length) : tt.startsWith(G.TAB) && (ft.deleteAt(gt + ht, G.TAB.length), ht -= G.TAB.length, et === 0 ? X -= G.TAB.length : nt -= G.TAB.length), ht += tt.length + 1;
                }), this.quill.update(s.default.sources.USER), this.quill.setSelection(X, nt, s.default.sources.SILENT);
              }
            }
          };
        }
        function z(q) {
          return {
            key: q[0].toUpperCase(),
            shortKey: !0,
            handler: function($, G) {
              this.quill.format(q, !G.format[q], s.default.sources.USER);
            }
          };
        }
        function C(q) {
          if (typeof q == "string" || typeof q == "number")
            return C({ key: q });
          if ((typeof q > "u" ? "undefined" : T(q)) === "object" && (q = (0, p.default)(q, !1)), typeof q.key == "string")
            if (K.keys[q.key.toUpperCase()] != null)
              q.key = K.keys[q.key.toUpperCase()];
            else if (q.key.length === 1)
              q.key = q.key.toUpperCase().charCodeAt(0);
            else
              return null;
          return q.shortKey && (q[H] = q.shortKey, delete q.shortKey), q;
        }
        m.default = K, m.SHORTKEY = H;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = function() {
          function r(i, c) {
            var n = [], s = !0, _ = !1, g = void 0;
            try {
              for (var w = i[Symbol.iterator](), P; !(s = (P = w.next()).done) && (n.push(P.value), !(c && n.length === c)); s = !0)
                ;
            } catch (O) {
              _ = !0, g = O;
            } finally {
              try {
                !s && w.return && w.return();
              } finally {
                if (_)
                  throw g;
              }
            }
            return n;
          }
          return function(i, c) {
            if (Array.isArray(i))
              return i;
            if (Symbol.iterator in Object(i))
              return r(i, c);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), A = function r(i, c, n) {
          i === null && (i = Function.prototype);
          var s = Object.getOwnPropertyDescriptor(i, c);
          if (s === void 0) {
            var _ = Object.getPrototypeOf(i);
            return _ === null ? void 0 : r(_, c, n);
          } else {
            if ("value" in s)
              return s.value;
            var g = s.get;
            return g === void 0 ? void 0 : g.call(n);
          }
        }, b = function() {
          function r(i, c) {
            for (var n = 0; n < c.length; n++) {
              var s = c[n];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(i, s.key, s);
            }
          }
          return function(i, c, n) {
            return c && r(i.prototype, c), n && r(i, n), i;
          };
        }(), v = d(0), p = t(v), h = d(7), a = t(h);
        function t(r) {
          return r && r.__esModule ? r : { default: r };
        }
        function e(r, i) {
          if (!(r instanceof i))
            throw new TypeError("Cannot call a class as a function");
        }
        function u(r, i) {
          if (!r)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return i && (typeof i == "object" || typeof i == "function") ? i : r;
        }
        function o(r, i) {
          if (typeof i != "function" && i !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof i);
          r.prototype = Object.create(i && i.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(r, i) : r.__proto__ = i);
        }
        var l = function(r) {
          o(i, r), b(i, null, [{
            key: "value",
            value: function() {
            }
          }]);
          function i(c, n) {
            e(this, i);
            var s = u(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, c));
            return s.selection = n, s.textNode = document.createTextNode(i.CONTENTS), s.domNode.appendChild(s.textNode), s._length = 0, s;
          }
          return b(i, [{
            key: "detach",
            value: function() {
              this.parent != null && this.parent.removeChild(this);
            }
          }, {
            key: "format",
            value: function(n, s) {
              if (this._length !== 0)
                return A(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "format", this).call(this, n, s);
              for (var _ = this, g = 0; _ != null && _.statics.scope !== p.default.Scope.BLOCK_BLOT; )
                g += _.offset(_.parent), _ = _.parent;
              _ != null && (this._length = i.CONTENTS.length, _.optimize(), _.formatAt(g, i.CONTENTS.length, n, s), this._length = 0);
            }
          }, {
            key: "index",
            value: function(n, s) {
              return n === this.textNode ? 0 : A(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "index", this).call(this, n, s);
            }
          }, {
            key: "length",
            value: function() {
              return this._length;
            }
          }, {
            key: "position",
            value: function() {
              return [this.textNode, this.textNode.data.length];
            }
          }, {
            key: "remove",
            value: function() {
              A(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "remove", this).call(this), this.parent = null;
            }
          }, {
            key: "restore",
            value: function() {
              if (!(this.selection.composing || this.parent == null)) {
                var n = this.textNode, s = this.selection.getNativeRange(), _ = void 0, g = void 0, w = void 0;
                if (s != null && s.start.node === n && s.end.node === n) {
                  var P = [n, s.start.offset, s.end.offset];
                  _ = P[0], g = P[1], w = P[2];
                }
                for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
                  this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                if (this.textNode.data !== i.CONTENTS) {
                  var O = this.textNode.data.split(i.CONTENTS).join("");
                  this.next instanceof a.default ? (_ = this.next.domNode, this.next.insertAt(0, O), this.textNode.data = i.CONTENTS) : (this.textNode.data = O, this.parent.insertBefore(p.default.create(this.textNode), this), this.textNode = document.createTextNode(i.CONTENTS), this.domNode.appendChild(this.textNode));
                }
                if (this.remove(), g != null) {
                  var y = [g, w].map(function(x) {
                    return Math.max(0, Math.min(_.data.length, x - 1));
                  }), E = T(y, 2);
                  return g = E[0], w = E[1], {
                    startNode: _,
                    startOffset: g,
                    endNode: _,
                    endOffset: w
                  };
                }
              }
            }
          }, {
            key: "update",
            value: function(n, s) {
              var _ = this;
              if (n.some(function(w) {
                return w.type === "characterData" && w.target === _.textNode;
              })) {
                var g = this.restore();
                g && (s.range = g);
              }
            }
          }, {
            key: "value",
            value: function() {
              return "";
            }
          }]), i;
        }(p.default.Embed);
        l.blotName = "cursor", l.className = "ql-cursor", l.tagName = "span", l.CONTENTS = "\uFEFF", m.default = l;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = d(0), A = p(T), b = d(4), v = p(b);
        function p(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function h(u, o) {
          if (!(u instanceof o))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(u, o) {
          if (!u)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return o && (typeof o == "object" || typeof o == "function") ? o : u;
        }
        function t(u, o) {
          if (typeof o != "function" && o !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof o);
          u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
        }
        var e = function(u) {
          t(o, u);
          function o() {
            return h(this, o), a(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
          }
          return o;
        }(A.default.Container);
        e.allowedChildren = [v.default, b.BlockEmbed, e], m.default = e;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.ColorStyle = m.ColorClass = m.ColorAttributor = void 0;
        var T = function() {
          function l(r, i) {
            for (var c = 0; c < i.length; c++) {
              var n = i[c];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, c) {
            return i && l(r.prototype, i), c && l(r, c), r;
          };
        }(), A = function l(r, i, c) {
          r === null && (r = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(r, i);
          if (n === void 0) {
            var s = Object.getPrototypeOf(r);
            return s === null ? void 0 : l(s, i, c);
          } else {
            if ("value" in n)
              return n.value;
            var _ = n.get;
            return _ === void 0 ? void 0 : _.call(c);
          }
        }, b = d(0), v = p(b);
        function p(l) {
          return l && l.__esModule ? l : { default: l };
        }
        function h(l, r) {
          if (!(l instanceof r))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(l, r) {
          if (!l)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return r && (typeof r == "object" || typeof r == "function") ? r : l;
        }
        function t(l, r) {
          if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof r);
          l.prototype = Object.create(r && r.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(l, r) : l.__proto__ = r);
        }
        var e = function(l) {
          t(r, l);
          function r() {
            return h(this, r), a(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
          }
          return T(r, [{
            key: "value",
            value: function(c) {
              var n = A(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "value", this).call(this, c);
              return n.startsWith("rgb(") ? (n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + n.split(",").map(function(s) {
                return ("00" + parseInt(s).toString(16)).slice(-2);
              }).join("")) : n;
            }
          }]), r;
        }(v.default.Attributor.Style), u = new v.default.Attributor.Class("color", "ql-color", {
          scope: v.default.Scope.INLINE
        }), o = new e("color", "color", {
          scope: v.default.Scope.INLINE
        });
        m.ColorAttributor = e, m.ColorClass = u, m.ColorStyle = o;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.sanitize = m.default = void 0;
        var T = function() {
          function o(l, r) {
            for (var i = 0; i < r.length; i++) {
              var c = r[i];
              c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(l, c.key, c);
            }
          }
          return function(l, r, i) {
            return r && o(l.prototype, r), i && o(l, i), l;
          };
        }(), A = function o(l, r, i) {
          l === null && (l = Function.prototype);
          var c = Object.getOwnPropertyDescriptor(l, r);
          if (c === void 0) {
            var n = Object.getPrototypeOf(l);
            return n === null ? void 0 : o(n, r, i);
          } else {
            if ("value" in c)
              return c.value;
            var s = c.get;
            return s === void 0 ? void 0 : s.call(i);
          }
        }, b = d(6), v = p(b);
        function p(o) {
          return o && o.__esModule ? o : { default: o };
        }
        function h(o, l) {
          if (!(o instanceof l))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(o, l) {
          if (!o)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return l && (typeof l == "object" || typeof l == "function") ? l : o;
        }
        function t(o, l) {
          if (typeof l != "function" && l !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof l);
          o.prototype = Object.create(l && l.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(o, l) : o.__proto__ = l);
        }
        var e = function(o) {
          t(l, o);
          function l() {
            return h(this, l), a(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments));
          }
          return T(l, [{
            key: "format",
            value: function(i, c) {
              if (i !== this.statics.blotName || !c)
                return A(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "format", this).call(this, i, c);
              c = this.constructor.sanitize(c), this.domNode.setAttribute("href", c);
            }
          }], [{
            key: "create",
            value: function(i) {
              var c = A(l.__proto__ || Object.getPrototypeOf(l), "create", this).call(this, i);
              return i = this.sanitize(i), c.setAttribute("href", i), c.setAttribute("rel", "noopener noreferrer"), c.setAttribute("target", "_blank"), c;
            }
          }, {
            key: "formats",
            value: function(i) {
              return i.getAttribute("href");
            }
          }, {
            key: "sanitize",
            value: function(i) {
              return u(i, this.PROTOCOL_WHITELIST) ? i : this.SANITIZED_URL;
            }
          }]), l;
        }(v.default);
        e.blotName = "link", e.tagName = "A", e.SANITIZED_URL = "about:blank", e.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"];
        function u(o, l) {
          var r = document.createElement("a");
          r.href = o;
          var i = r.href.slice(0, r.href.indexOf(":"));
          return l.indexOf(i) > -1;
        }
        m.default = e, m.sanitize = u;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
          return typeof l;
        } : function(l) {
          return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
        }, A = function() {
          function l(r, i) {
            for (var c = 0; c < i.length; c++) {
              var n = i[c];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, c) {
            return i && l(r.prototype, i), c && l(r, c), r;
          };
        }(), b = d(23), v = a(b), p = d(107), h = a(p);
        function a(l) {
          return l && l.__esModule ? l : { default: l };
        }
        function t(l, r) {
          if (!(l instanceof r))
            throw new TypeError("Cannot call a class as a function");
        }
        var e = 0;
        function u(l, r) {
          l.setAttribute(r, l.getAttribute(r) !== "true");
        }
        var o = function() {
          function l(r) {
            var i = this;
            t(this, l), this.select = r, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", function() {
              i.togglePicker();
            }), this.label.addEventListener("keydown", function(c) {
              switch (c.keyCode) {
                case v.default.keys.ENTER:
                  i.togglePicker();
                  break;
                case v.default.keys.ESCAPE:
                  i.escape(), c.preventDefault();
                  break;
              }
            }), this.select.addEventListener("change", this.update.bind(this));
          }
          return A(l, [{
            key: "togglePicker",
            value: function() {
              this.container.classList.toggle("ql-expanded"), u(this.label, "aria-expanded"), u(this.options, "aria-hidden");
            }
          }, {
            key: "buildItem",
            value: function(i) {
              var c = this, n = document.createElement("span");
              return n.tabIndex = "0", n.setAttribute("role", "button"), n.classList.add("ql-picker-item"), i.hasAttribute("value") && n.setAttribute("data-value", i.getAttribute("value")), i.textContent && n.setAttribute("data-label", i.textContent), n.addEventListener("click", function() {
                c.selectItem(n, !0);
              }), n.addEventListener("keydown", function(s) {
                switch (s.keyCode) {
                  case v.default.keys.ENTER:
                    c.selectItem(n, !0), s.preventDefault();
                    break;
                  case v.default.keys.ESCAPE:
                    c.escape(), s.preventDefault();
                    break;
                }
              }), n;
            }
          }, {
            key: "buildLabel",
            value: function() {
              var i = document.createElement("span");
              return i.classList.add("ql-picker-label"), i.innerHTML = h.default, i.tabIndex = "0", i.setAttribute("role", "button"), i.setAttribute("aria-expanded", "false"), this.container.appendChild(i), i;
            }
          }, {
            key: "buildOptions",
            value: function() {
              var i = this, c = document.createElement("span");
              c.classList.add("ql-picker-options"), c.setAttribute("aria-hidden", "true"), c.tabIndex = "-1", c.id = "ql-picker-options-" + e, e += 1, this.label.setAttribute("aria-controls", c.id), this.options = c, [].slice.call(this.select.options).forEach(function(n) {
                var s = i.buildItem(n);
                c.appendChild(s), n.selected === !0 && i.selectItem(s);
              }), this.container.appendChild(c);
            }
          }, {
            key: "buildPicker",
            value: function() {
              var i = this;
              [].slice.call(this.select.attributes).forEach(function(c) {
                i.container.setAttribute(c.name, c.value);
              }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
            }
          }, {
            key: "escape",
            value: function() {
              var i = this;
              this.close(), setTimeout(function() {
                return i.label.focus();
              }, 1);
            }
          }, {
            key: "close",
            value: function() {
              this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
            }
          }, {
            key: "selectItem",
            value: function(i) {
              var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = this.container.querySelector(".ql-selected");
              if (i !== n && (n != null && n.classList.remove("ql-selected"), i != null && (i.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(i.parentNode.children, i), i.hasAttribute("data-value") ? this.label.setAttribute("data-value", i.getAttribute("data-value")) : this.label.removeAttribute("data-value"), i.hasAttribute("data-label") ? this.label.setAttribute("data-label", i.getAttribute("data-label")) : this.label.removeAttribute("data-label"), c))) {
                if (typeof Event == "function")
                  this.select.dispatchEvent(new Event("change"));
                else if ((typeof Event > "u" ? "undefined" : T(Event)) === "object") {
                  var s = document.createEvent("Event");
                  s.initEvent("change", !0, !0), this.select.dispatchEvent(s);
                }
                this.close();
              }
            }
          }, {
            key: "update",
            value: function() {
              var i = void 0;
              if (this.select.selectedIndex > -1) {
                var c = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                i = this.select.options[this.select.selectedIndex], this.selectItem(c);
              } else
                this.selectItem(null);
              var n = i != null && i !== this.select.querySelector("option[selected]");
              this.label.classList.toggle("ql-active", n);
            }
          }]), l;
        }();
        m.default = o;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = d(0), A = M(T), b = d(5), v = M(b), p = d(4), h = M(p), a = d(16), t = M(a), e = d(25), u = M(e), o = d(24), l = M(o), r = d(35), i = M(r), c = d(6), n = M(c), s = d(22), _ = M(s), g = d(7), w = M(g), P = d(55), O = M(P), y = d(42), E = M(y), x = d(23), L = M(x);
        function M(H) {
          return H && H.__esModule ? H : { default: H };
        }
        v.default.register({
          "blots/block": h.default,
          "blots/block/embed": p.BlockEmbed,
          "blots/break": t.default,
          "blots/container": u.default,
          "blots/cursor": l.default,
          "blots/embed": i.default,
          "blots/inline": n.default,
          "blots/scroll": _.default,
          "blots/text": w.default,
          "modules/clipboard": O.default,
          "modules/history": E.default,
          "modules/keyboard": L.default
        }), A.default.register(h.default, t.default, l.default, n.default, _.default, w.default), m.default = v.default;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", { value: !0 });
        var T = d(1), A = function() {
          function b(v) {
            this.domNode = v, this.domNode[T.DATA_KEY] = { blot: this };
          }
          return Object.defineProperty(b.prototype, "statics", {
            get: function() {
              return this.constructor;
            },
            enumerable: !0,
            configurable: !0
          }), b.create = function(v) {
            if (this.tagName == null)
              throw new T.ParchmentError("Blot definition missing tagName");
            var p;
            return Array.isArray(this.tagName) ? (typeof v == "string" && (v = v.toUpperCase(), parseInt(v).toString() === v && (v = parseInt(v))), typeof v == "number" ? p = document.createElement(this.tagName[v - 1]) : this.tagName.indexOf(v) > -1 ? p = document.createElement(v) : p = document.createElement(this.tagName[0])) : p = document.createElement(this.tagName), this.className && p.classList.add(this.className), p;
          }, b.prototype.attach = function() {
            this.parent != null && (this.scroll = this.parent.scroll);
          }, b.prototype.clone = function() {
            var v = this.domNode.cloneNode(!1);
            return T.create(v);
          }, b.prototype.detach = function() {
            this.parent != null && this.parent.removeChild(this), delete this.domNode[T.DATA_KEY];
          }, b.prototype.deleteAt = function(v, p) {
            var h = this.isolate(v, p);
            h.remove();
          }, b.prototype.formatAt = function(v, p, h, a) {
            var t = this.isolate(v, p);
            if (T.query(h, T.Scope.BLOT) != null && a)
              t.wrap(h, a);
            else if (T.query(h, T.Scope.ATTRIBUTE) != null) {
              var e = T.create(this.statics.scope);
              t.wrap(e), e.format(h, a);
            }
          }, b.prototype.insertAt = function(v, p, h) {
            var a = h == null ? T.create("text", p) : T.create(p, h), t = this.split(v);
            this.parent.insertBefore(a, t);
          }, b.prototype.insertInto = function(v, p) {
            p === void 0 && (p = null), this.parent != null && this.parent.children.remove(this);
            var h = null;
            v.children.insertBefore(this, p), p != null && (h = p.domNode), (this.domNode.parentNode != v.domNode || this.domNode.nextSibling != h) && v.domNode.insertBefore(this.domNode, h), this.parent = v, this.attach();
          }, b.prototype.isolate = function(v, p) {
            var h = this.split(v);
            return h.split(p), h;
          }, b.prototype.length = function() {
            return 1;
          }, b.prototype.offset = function(v) {
            return v === void 0 && (v = this.parent), this.parent == null || this == v ? 0 : this.parent.children.offset(this) + this.parent.offset(v);
          }, b.prototype.optimize = function(v) {
            this.domNode[T.DATA_KEY] != null && delete this.domNode[T.DATA_KEY].mutations;
          }, b.prototype.remove = function() {
            this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
          }, b.prototype.replace = function(v) {
            v.parent != null && (v.parent.insertBefore(this, v.next), v.remove());
          }, b.prototype.replaceWith = function(v, p) {
            var h = typeof v == "string" ? T.create(v, p) : v;
            return h.replace(this), h;
          }, b.prototype.split = function(v, p) {
            return v === 0 ? this : this.next;
          }, b.prototype.update = function(v, p) {
          }, b.prototype.wrap = function(v, p) {
            var h = typeof v == "string" ? T.create(v, p) : v;
            return this.parent != null && this.parent.insertBefore(h, this.next), h.appendChild(this), h;
          }, b.blotName = "abstract", b;
        }();
        m.default = A;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", { value: !0 });
        var T = d(12), A = d(32), b = d(33), v = d(1), p = function() {
          function h(a) {
            this.attributes = {}, this.domNode = a, this.build();
          }
          return h.prototype.attribute = function(a, t) {
            t ? a.add(this.domNode, t) && (a.value(this.domNode) != null ? this.attributes[a.attrName] = a : delete this.attributes[a.attrName]) : (a.remove(this.domNode), delete this.attributes[a.attrName]);
          }, h.prototype.build = function() {
            var a = this;
            this.attributes = {};
            var t = T.default.keys(this.domNode), e = A.default.keys(this.domNode), u = b.default.keys(this.domNode);
            t.concat(e).concat(u).forEach(function(o) {
              var l = v.query(o, v.Scope.ATTRIBUTE);
              l instanceof T.default && (a.attributes[l.attrName] = l);
            });
          }, h.prototype.copy = function(a) {
            var t = this;
            Object.keys(this.attributes).forEach(function(e) {
              var u = t.attributes[e].value(t.domNode);
              a.format(e, u);
            });
          }, h.prototype.move = function(a) {
            var t = this;
            this.copy(a), Object.keys(this.attributes).forEach(function(e) {
              t.attributes[e].remove(t.domNode);
            }), this.attributes = {};
          }, h.prototype.values = function() {
            var a = this;
            return Object.keys(this.attributes).reduce(function(t, e) {
              return t[e] = a.attributes[e].value(a.domNode), t;
            }, {});
          }, h;
        }();
        m.default = p;
      },
      function(S, m, d) {
        var T = this && this.__extends || function() {
          var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, a) {
            h.__proto__ = a;
          } || function(h, a) {
            for (var t in a)
              a.hasOwnProperty(t) && (h[t] = a[t]);
          };
          return function(h, a) {
            p(h, a);
            function t() {
              this.constructor = h;
            }
            h.prototype = a === null ? Object.create(a) : (t.prototype = a.prototype, new t());
          };
        }();
        Object.defineProperty(m, "__esModule", { value: !0 });
        var A = d(12);
        function b(p, h) {
          var a = p.getAttribute("class") || "";
          return a.split(/\s+/).filter(function(t) {
            return t.indexOf(h + "-") === 0;
          });
        }
        var v = function(p) {
          T(h, p);
          function h() {
            return p !== null && p.apply(this, arguments) || this;
          }
          return h.keys = function(a) {
            return (a.getAttribute("class") || "").split(/\s+/).map(function(t) {
              return t.split("-").slice(0, -1).join("-");
            });
          }, h.prototype.add = function(a, t) {
            return this.canAdd(a, t) ? (this.remove(a), a.classList.add(this.keyName + "-" + t), !0) : !1;
          }, h.prototype.remove = function(a) {
            var t = b(a, this.keyName);
            t.forEach(function(e) {
              a.classList.remove(e);
            }), a.classList.length === 0 && a.removeAttribute("class");
          }, h.prototype.value = function(a) {
            var t = b(a, this.keyName)[0] || "", e = t.slice(this.keyName.length + 1);
            return this.canAdd(a, e) ? e : "";
          }, h;
        }(A.default);
        m.default = v;
      },
      function(S, m, d) {
        var T = this && this.__extends || function() {
          var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, a) {
            h.__proto__ = a;
          } || function(h, a) {
            for (var t in a)
              a.hasOwnProperty(t) && (h[t] = a[t]);
          };
          return function(h, a) {
            p(h, a);
            function t() {
              this.constructor = h;
            }
            h.prototype = a === null ? Object.create(a) : (t.prototype = a.prototype, new t());
          };
        }();
        Object.defineProperty(m, "__esModule", { value: !0 });
        var A = d(12);
        function b(p) {
          var h = p.split("-"), a = h.slice(1).map(function(t) {
            return t[0].toUpperCase() + t.slice(1);
          }).join("");
          return h[0] + a;
        }
        var v = function(p) {
          T(h, p);
          function h() {
            return p !== null && p.apply(this, arguments) || this;
          }
          return h.keys = function(a) {
            return (a.getAttribute("style") || "").split(";").map(function(t) {
              var e = t.split(":");
              return e[0].trim();
            });
          }, h.prototype.add = function(a, t) {
            return this.canAdd(a, t) ? (a.style[b(this.keyName)] = t, !0) : !1;
          }, h.prototype.remove = function(a) {
            a.style[b(this.keyName)] = "", a.getAttribute("style") || a.removeAttribute("style");
          }, h.prototype.value = function(a) {
            var t = a.style[b(this.keyName)];
            return this.canAdd(a, t) ? t : "";
          }, h;
        }(A.default);
        m.default = v;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = function() {
          function v(p, h) {
            for (var a = 0; a < h.length; a++) {
              var t = h[a];
              t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(p, t.key, t);
            }
          }
          return function(p, h, a) {
            return h && v(p.prototype, h), a && v(p, a), p;
          };
        }();
        function A(v, p) {
          if (!(v instanceof p))
            throw new TypeError("Cannot call a class as a function");
        }
        var b = function() {
          function v(p, h) {
            A(this, v), this.quill = p, this.options = h, this.modules = {};
          }
          return T(v, [{
            key: "init",
            value: function() {
              var h = this;
              Object.keys(this.options.modules).forEach(function(a) {
                h.modules[a] == null && h.addModule(a);
              });
            }
          }, {
            key: "addModule",
            value: function(h) {
              var a = this.quill.constructor.import("modules/" + h);
              return this.modules[h] = new a(this.quill, this.options.modules[h] || {}), this.modules[h];
            }
          }]), v;
        }();
        b.DEFAULTS = {
          modules: {}
        }, b.themes = {
          default: b
        }, m.default = b;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = function() {
          function r(i, c) {
            for (var n = 0; n < c.length; n++) {
              var s = c[n];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(i, s.key, s);
            }
          }
          return function(i, c, n) {
            return c && r(i.prototype, c), n && r(i, n), i;
          };
        }(), A = function r(i, c, n) {
          i === null && (i = Function.prototype);
          var s = Object.getOwnPropertyDescriptor(i, c);
          if (s === void 0) {
            var _ = Object.getPrototypeOf(i);
            return _ === null ? void 0 : r(_, c, n);
          } else {
            if ("value" in s)
              return s.value;
            var g = s.get;
            return g === void 0 ? void 0 : g.call(n);
          }
        }, b = d(0), v = a(b), p = d(7), h = a(p);
        function a(r) {
          return r && r.__esModule ? r : { default: r };
        }
        function t(r, i) {
          if (!(r instanceof i))
            throw new TypeError("Cannot call a class as a function");
        }
        function e(r, i) {
          if (!r)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return i && (typeof i == "object" || typeof i == "function") ? i : r;
        }
        function u(r, i) {
          if (typeof i != "function" && i !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof i);
          r.prototype = Object.create(i && i.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(r, i) : r.__proto__ = i);
        }
        var o = "\uFEFF", l = function(r) {
          u(i, r);
          function i(c) {
            t(this, i);
            var n = e(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, c));
            return n.contentNode = document.createElement("span"), n.contentNode.setAttribute("contenteditable", !1), [].slice.call(n.domNode.childNodes).forEach(function(s) {
              n.contentNode.appendChild(s);
            }), n.leftGuard = document.createTextNode(o), n.rightGuard = document.createTextNode(o), n.domNode.appendChild(n.leftGuard), n.domNode.appendChild(n.contentNode), n.domNode.appendChild(n.rightGuard), n;
          }
          return T(i, [{
            key: "index",
            value: function(n, s) {
              return n === this.leftGuard ? 0 : n === this.rightGuard ? 1 : A(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "index", this).call(this, n, s);
            }
          }, {
            key: "restore",
            value: function(n) {
              var s = void 0, _ = void 0, g = n.data.split(o).join("");
              if (n === this.leftGuard)
                if (this.prev instanceof h.default) {
                  var w = this.prev.length();
                  this.prev.insertAt(w, g), s = {
                    startNode: this.prev.domNode,
                    startOffset: w + g.length
                  };
                } else
                  _ = document.createTextNode(g), this.parent.insertBefore(v.default.create(_), this), s = {
                    startNode: _,
                    startOffset: g.length
                  };
              else
                n === this.rightGuard && (this.next instanceof h.default ? (this.next.insertAt(0, g), s = {
                  startNode: this.next.domNode,
                  startOffset: g.length
                }) : (_ = document.createTextNode(g), this.parent.insertBefore(v.default.create(_), this.next), s = {
                  startNode: _,
                  startOffset: g.length
                }));
              return n.data = o, s;
            }
          }, {
            key: "update",
            value: function(n, s) {
              var _ = this;
              n.forEach(function(g) {
                if (g.type === "characterData" && (g.target === _.leftGuard || g.target === _.rightGuard)) {
                  var w = _.restore(g.target);
                  w && (s.range = w);
                }
              });
            }
          }]), i;
        }(v.default.Embed);
        m.default = l;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.AlignStyle = m.AlignClass = m.AlignAttribute = void 0;
        var T = d(0), A = b(T);
        function b(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var v = {
          scope: A.default.Scope.BLOCK,
          whitelist: ["right", "center", "justify"]
        }, p = new A.default.Attributor.Attribute("align", "align", v), h = new A.default.Attributor.Class("align", "ql-align", v), a = new A.default.Attributor.Style("align", "text-align", v);
        m.AlignAttribute = p, m.AlignClass = h, m.AlignStyle = a;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.BackgroundStyle = m.BackgroundClass = void 0;
        var T = d(0), A = v(T), b = d(26);
        function v(a) {
          return a && a.__esModule ? a : { default: a };
        }
        var p = new A.default.Attributor.Class("background", "ql-bg", {
          scope: A.default.Scope.INLINE
        }), h = new b.ColorAttributor("background", "background-color", {
          scope: A.default.Scope.INLINE
        });
        m.BackgroundClass = p, m.BackgroundStyle = h;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.DirectionStyle = m.DirectionClass = m.DirectionAttribute = void 0;
        var T = d(0), A = b(T);
        function b(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var v = {
          scope: A.default.Scope.BLOCK,
          whitelist: ["rtl"]
        }, p = new A.default.Attributor.Attribute("direction", "dir", v), h = new A.default.Attributor.Class("direction", "ql-direction", v), a = new A.default.Attributor.Style("direction", "direction", v);
        m.DirectionAttribute = p, m.DirectionClass = h, m.DirectionStyle = a;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.FontClass = m.FontStyle = void 0;
        var T = function() {
          function r(i, c) {
            for (var n = 0; n < c.length; n++) {
              var s = c[n];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(i, s.key, s);
            }
          }
          return function(i, c, n) {
            return c && r(i.prototype, c), n && r(i, n), i;
          };
        }(), A = function r(i, c, n) {
          i === null && (i = Function.prototype);
          var s = Object.getOwnPropertyDescriptor(i, c);
          if (s === void 0) {
            var _ = Object.getPrototypeOf(i);
            return _ === null ? void 0 : r(_, c, n);
          } else {
            if ("value" in s)
              return s.value;
            var g = s.get;
            return g === void 0 ? void 0 : g.call(n);
          }
        }, b = d(0), v = p(b);
        function p(r) {
          return r && r.__esModule ? r : { default: r };
        }
        function h(r, i) {
          if (!(r instanceof i))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(r, i) {
          if (!r)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return i && (typeof i == "object" || typeof i == "function") ? i : r;
        }
        function t(r, i) {
          if (typeof i != "function" && i !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof i);
          r.prototype = Object.create(i && i.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(r, i) : r.__proto__ = i);
        }
        var e = {
          scope: v.default.Scope.INLINE,
          whitelist: ["serif", "monospace"]
        }, u = new v.default.Attributor.Class("font", "ql-font", e), o = function(r) {
          t(i, r);
          function i() {
            return h(this, i), a(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
          }
          return T(i, [{
            key: "value",
            value: function(n) {
              return A(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "value", this).call(this, n).replace(/["']/g, "");
            }
          }]), i;
        }(v.default.Attributor.Style), l = new o("font", "font-family", e);
        m.FontStyle = l, m.FontClass = u;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.SizeStyle = m.SizeClass = void 0;
        var T = d(0), A = b(T);
        function b(h) {
          return h && h.__esModule ? h : { default: h };
        }
        var v = new A.default.Attributor.Class("size", "ql-size", {
          scope: A.default.Scope.INLINE,
          whitelist: ["small", "large", "huge"]
        }), p = new A.default.Attributor.Style("size", "font-size", {
          scope: A.default.Scope.INLINE,
          whitelist: ["10px", "18px", "32px"]
        });
        m.SizeClass = v, m.SizeStyle = p;
      },
      function(S, m, d) {
        S.exports = {
          align: {
            "": d(76),
            center: d(77),
            right: d(78),
            justify: d(79)
          },
          background: d(80),
          blockquote: d(81),
          bold: d(82),
          clean: d(83),
          code: d(58),
          "code-block": d(58),
          color: d(84),
          direction: {
            "": d(85),
            rtl: d(86)
          },
          float: {
            center: d(87),
            full: d(88),
            left: d(89),
            right: d(90)
          },
          formula: d(91),
          header: {
            1: d(92),
            2: d(93)
          },
          italic: d(94),
          image: d(95),
          indent: {
            "+1": d(96),
            "-1": d(97)
          },
          link: d(98),
          list: {
            ordered: d(99),
            bullet: d(100),
            check: d(101)
          },
          script: {
            sub: d(102),
            super: d(103)
          },
          strike: d(104),
          underline: d(105),
          video: d(106)
        };
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.getLastChangeIndex = m.default = void 0;
        var T = function() {
          function c(n, s) {
            for (var _ = 0; _ < s.length; _++) {
              var g = s[_];
              g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(n, g.key, g);
            }
          }
          return function(n, s, _) {
            return s && c(n.prototype, s), _ && c(n, _), n;
          };
        }(), A = d(0), b = t(A), v = d(5), p = t(v), h = d(9), a = t(h);
        function t(c) {
          return c && c.__esModule ? c : { default: c };
        }
        function e(c, n) {
          if (!(c instanceof n))
            throw new TypeError("Cannot call a class as a function");
        }
        function u(c, n) {
          if (!c)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return n && (typeof n == "object" || typeof n == "function") ? n : c;
        }
        function o(c, n) {
          if (typeof n != "function" && n !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof n);
          c.prototype = Object.create(n && n.prototype, { constructor: { value: c, enumerable: !1, writable: !0, configurable: !0 } }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(c, n) : c.__proto__ = n);
        }
        var l = function(c) {
          o(n, c);
          function n(s, _) {
            e(this, n);
            var g = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, s, _));
            return g.lastRecorded = 0, g.ignoreChange = !1, g.clear(), g.quill.on(p.default.events.EDITOR_CHANGE, function(w, P, O, y) {
              w !== p.default.events.TEXT_CHANGE || g.ignoreChange || (!g.options.userOnly || y === p.default.sources.USER ? g.record(P, O) : g.transform(P));
            }), g.quill.keyboard.addBinding({ key: "Z", shortKey: !0 }, g.undo.bind(g)), g.quill.keyboard.addBinding({ key: "Z", shortKey: !0, shiftKey: !0 }, g.redo.bind(g)), /Win/i.test(navigator.platform) && g.quill.keyboard.addBinding({ key: "Y", shortKey: !0 }, g.redo.bind(g)), g;
          }
          return T(n, [{
            key: "change",
            value: function(_, g) {
              if (this.stack[_].length !== 0) {
                var w = this.stack[_].pop();
                this.stack[g].push(w), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(w[_], p.default.sources.USER), this.ignoreChange = !1;
                var P = i(w[_]);
                this.quill.setSelection(P);
              }
            }
          }, {
            key: "clear",
            value: function() {
              this.stack = { undo: [], redo: [] };
            }
          }, {
            key: "cutoff",
            value: function() {
              this.lastRecorded = 0;
            }
          }, {
            key: "record",
            value: function(_, g) {
              if (_.ops.length !== 0) {
                this.stack.redo = [];
                var w = this.quill.getContents().diff(g), P = Date.now();
                if (this.lastRecorded + this.options.delay > P && this.stack.undo.length > 0) {
                  var O = this.stack.undo.pop();
                  w = w.compose(O.undo), _ = O.redo.compose(_);
                } else
                  this.lastRecorded = P;
                this.stack.undo.push({
                  redo: _,
                  undo: w
                }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift();
              }
            }
          }, {
            key: "redo",
            value: function() {
              this.change("redo", "undo");
            }
          }, {
            key: "transform",
            value: function(_) {
              this.stack.undo.forEach(function(g) {
                g.undo = _.transform(g.undo, !0), g.redo = _.transform(g.redo, !0);
              }), this.stack.redo.forEach(function(g) {
                g.undo = _.transform(g.undo, !0), g.redo = _.transform(g.redo, !0);
              });
            }
          }, {
            key: "undo",
            value: function() {
              this.change("undo", "redo");
            }
          }]), n;
        }(a.default);
        l.DEFAULTS = {
          delay: 1e3,
          maxStack: 100,
          userOnly: !1
        };
        function r(c) {
          var n = c.ops[c.ops.length - 1];
          return n == null ? !1 : n.insert != null ? typeof n.insert == "string" && n.insert.endsWith(`
`) : n.attributes != null ? Object.keys(n.attributes).some(function(s) {
            return b.default.query(s, b.default.Scope.BLOCK) != null;
          }) : !1;
        }
        function i(c) {
          var n = c.reduce(function(_, g) {
            return _ += g.delete || 0, _;
          }, 0), s = c.length() - n;
          return r(c) && (s -= 1), s;
        }
        m.default = l, m.getLastChangeIndex = i;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.default = m.BaseTooltip = void 0;
        var T = function() {
          function R(I, z) {
            for (var C = 0; C < z.length; C++) {
              var q = z[C];
              q.enumerable = q.enumerable || !1, q.configurable = !0, "value" in q && (q.writable = !0), Object.defineProperty(I, q.key, q);
            }
          }
          return function(I, z, C) {
            return z && R(I.prototype, z), C && R(I, C), I;
          };
        }(), A = function R(I, z, C) {
          I === null && (I = Function.prototype);
          var q = Object.getOwnPropertyDescriptor(I, z);
          if (q === void 0) {
            var F = Object.getPrototypeOf(I);
            return F === null ? void 0 : R(F, z, C);
          } else {
            if ("value" in q)
              return q.value;
            var $ = q.get;
            return $ === void 0 ? void 0 : $.call(C);
          }
        }, b = d(3), v = P(b), p = d(2), h = P(p), a = d(8), t = P(a), e = d(23), u = P(e), o = d(34), l = P(o), r = d(59), i = P(r), c = d(60), n = P(c), s = d(28), _ = P(s), g = d(61), w = P(g);
        function P(R) {
          return R && R.__esModule ? R : { default: R };
        }
        function O(R, I) {
          if (!(R instanceof I))
            throw new TypeError("Cannot call a class as a function");
        }
        function y(R, I) {
          if (!R)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return I && (typeof I == "object" || typeof I == "function") ? I : R;
        }
        function E(R, I) {
          if (typeof I != "function" && I !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof I);
          R.prototype = Object.create(I && I.prototype, { constructor: { value: R, enumerable: !1, writable: !0, configurable: !0 } }), I && (Object.setPrototypeOf ? Object.setPrototypeOf(R, I) : R.__proto__ = I);
        }
        var x = [!1, "center", "right", "justify"], L = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], M = [!1, "serif", "monospace"], H = ["1", "2", "3", !1], K = ["small", !1, "large", "huge"], J = function(R) {
          E(I, R);
          function I(z, C) {
            O(this, I);
            var q = y(this, (I.__proto__ || Object.getPrototypeOf(I)).call(this, z, C)), F = function $(G) {
              if (!document.body.contains(z.root))
                return document.body.removeEventListener("click", $);
              q.tooltip != null && !q.tooltip.root.contains(G.target) && document.activeElement !== q.tooltip.textbox && !q.quill.hasFocus() && q.tooltip.hide(), q.pickers != null && q.pickers.forEach(function(X) {
                X.container.contains(G.target) || X.close();
              });
            };
            return z.emitter.listenDOM("click", document.body, F), q;
          }
          return T(I, [{
            key: "addModule",
            value: function(C) {
              var q = A(I.prototype.__proto__ || Object.getPrototypeOf(I.prototype), "addModule", this).call(this, C);
              return C === "toolbar" && this.extendToolbar(q), q;
            }
          }, {
            key: "buildButtons",
            value: function(C, q) {
              C.forEach(function(F) {
                var $ = F.getAttribute("class") || "";
                $.split(/\s+/).forEach(function(G) {
                  if (!!G.startsWith("ql-") && (G = G.slice(3), q[G] != null))
                    if (G === "direction")
                      F.innerHTML = q[G][""] + q[G].rtl;
                    else if (typeof q[G] == "string")
                      F.innerHTML = q[G];
                    else {
                      var X = F.value || "";
                      X != null && q[G][X] && (F.innerHTML = q[G][X]);
                    }
                });
              });
            }
          }, {
            key: "buildPickers",
            value: function(C, q) {
              var F = this;
              this.pickers = C.map(function(G) {
                if (G.classList.contains("ql-align"))
                  return G.querySelector("option") == null && k(G, x), new n.default(G, q.align);
                if (G.classList.contains("ql-background") || G.classList.contains("ql-color")) {
                  var X = G.classList.contains("ql-background") ? "background" : "color";
                  return G.querySelector("option") == null && k(G, L, X === "background" ? "#ffffff" : "#000000"), new i.default(G, q[X]);
                } else
                  return G.querySelector("option") == null && (G.classList.contains("ql-font") ? k(G, M) : G.classList.contains("ql-header") ? k(G, H) : G.classList.contains("ql-size") && k(G, K)), new _.default(G);
              });
              var $ = function() {
                F.pickers.forEach(function(X) {
                  X.update();
                });
              };
              this.quill.on(t.default.events.EDITOR_CHANGE, $);
            }
          }]), I;
        }(l.default);
        J.DEFAULTS = (0, v.default)(!0, {}, l.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                formula: function() {
                  this.quill.theme.tooltip.edit("formula");
                },
                image: function() {
                  var I = this, z = this.container.querySelector("input.ql-image[type=file]");
                  z == null && (z = document.createElement("input"), z.setAttribute("type", "file"), z.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), z.classList.add("ql-image"), z.addEventListener("change", function() {
                    if (z.files != null && z.files[0] != null) {
                      var C = new FileReader();
                      C.onload = function(q) {
                        var F = I.quill.getSelection(!0);
                        I.quill.updateContents(new h.default().retain(F.index).delete(F.length).insert({ image: q.target.result }), t.default.sources.USER), I.quill.setSelection(F.index + 1, t.default.sources.SILENT), z.value = "";
                      }, C.readAsDataURL(z.files[0]);
                    }
                  }), this.container.appendChild(z)), z.click();
                },
                video: function() {
                  this.quill.theme.tooltip.edit("video");
                }
              }
            }
          }
        });
        var U = function(R) {
          E(I, R);
          function I(z, C) {
            O(this, I);
            var q = y(this, (I.__proto__ || Object.getPrototypeOf(I)).call(this, z, C));
            return q.textbox = q.root.querySelector('input[type="text"]'), q.listen(), q;
          }
          return T(I, [{
            key: "listen",
            value: function() {
              var C = this;
              this.textbox.addEventListener("keydown", function(q) {
                u.default.match(q, "enter") ? (C.save(), q.preventDefault()) : u.default.match(q, "escape") && (C.cancel(), q.preventDefault());
              });
            }
          }, {
            key: "cancel",
            value: function() {
              this.hide();
            }
          }, {
            key: "edit",
            value: function() {
              var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
              this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), q != null ? this.textbox.value = q : C !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + C) || ""), this.root.setAttribute("data-mode", C);
            }
          }, {
            key: "restoreFocus",
            value: function() {
              var C = this.quill.scrollingContainer.scrollTop;
              this.quill.focus(), this.quill.scrollingContainer.scrollTop = C;
            }
          }, {
            key: "save",
            value: function() {
              var C = this.textbox.value;
              switch (this.root.getAttribute("data-mode")) {
                case "link": {
                  var q = this.quill.root.scrollTop;
                  this.linkRange ? (this.quill.formatText(this.linkRange, "link", C, t.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", C, t.default.sources.USER)), this.quill.root.scrollTop = q;
                  break;
                }
                case "video":
                  C = j(C);
                case "formula": {
                  if (!C)
                    break;
                  var F = this.quill.getSelection(!0);
                  if (F != null) {
                    var $ = F.index + F.length;
                    this.quill.insertEmbed($, this.root.getAttribute("data-mode"), C, t.default.sources.USER), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText($ + 1, " ", t.default.sources.USER), this.quill.setSelection($ + 2, t.default.sources.USER);
                  }
                  break;
                }
              }
              this.textbox.value = "", this.hide();
            }
          }]), I;
        }(w.default);
        function j(R) {
          var I = R.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || R.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
          return I ? (I[1] || "https") + "://www.youtube.com/embed/" + I[2] + "?showinfo=0" : (I = R.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (I[1] || "https") + "://player.vimeo.com/video/" + I[2] + "/" : R;
        }
        function k(R, I) {
          var z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          I.forEach(function(C) {
            var q = document.createElement("option");
            C === z ? q.setAttribute("selected", "selected") : q.setAttribute("value", C), R.appendChild(q);
          });
        }
        m.BaseTooltip = U, m.default = J;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", { value: !0 });
        var T = function() {
          function A() {
            this.head = this.tail = null, this.length = 0;
          }
          return A.prototype.append = function() {
            for (var b = [], v = 0; v < arguments.length; v++)
              b[v] = arguments[v];
            this.insertBefore(b[0], null), b.length > 1 && this.append.apply(this, b.slice(1));
          }, A.prototype.contains = function(b) {
            for (var v, p = this.iterator(); v = p(); )
              if (v === b)
                return !0;
            return !1;
          }, A.prototype.insertBefore = function(b, v) {
            !b || (b.next = v, v != null ? (b.prev = v.prev, v.prev != null && (v.prev.next = b), v.prev = b, v === this.head && (this.head = b)) : this.tail != null ? (this.tail.next = b, b.prev = this.tail, this.tail = b) : (b.prev = null, this.head = this.tail = b), this.length += 1);
          }, A.prototype.offset = function(b) {
            for (var v = 0, p = this.head; p != null; ) {
              if (p === b)
                return v;
              v += p.length(), p = p.next;
            }
            return -1;
          }, A.prototype.remove = function(b) {
            !this.contains(b) || (b.prev != null && (b.prev.next = b.next), b.next != null && (b.next.prev = b.prev), b === this.head && (this.head = b.next), b === this.tail && (this.tail = b.prev), this.length -= 1);
          }, A.prototype.iterator = function(b) {
            return b === void 0 && (b = this.head), function() {
              var v = b;
              return b != null && (b = b.next), v;
            };
          }, A.prototype.find = function(b, v) {
            v === void 0 && (v = !1);
            for (var p, h = this.iterator(); p = h(); ) {
              var a = p.length();
              if (b < a || v && b === a && (p.next == null || p.next.length() !== 0))
                return [p, b];
              b -= a;
            }
            return [null, 0];
          }, A.prototype.forEach = function(b) {
            for (var v, p = this.iterator(); v = p(); )
              b(v);
          }, A.prototype.forEachAt = function(b, v, p) {
            if (!(v <= 0))
              for (var h = this.find(b), a = h[0], t = h[1], e, u = b - t, o = this.iterator(a); (e = o()) && u < b + v; ) {
                var l = e.length();
                b > u ? p(e, b - u, Math.min(v, u + l - b)) : p(e, 0, Math.min(l, b + v - u)), u += l;
              }
          }, A.prototype.map = function(b) {
            return this.reduce(function(v, p) {
              return v.push(b(p)), v;
            }, []);
          }, A.prototype.reduce = function(b, v) {
            for (var p, h = this.iterator(); p = h(); )
              v = b(v, p);
            return v;
          }, A;
        }();
        m.default = T;
      },
      function(S, m, d) {
        var T = this && this.__extends || function() {
          var a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
            t.__proto__ = e;
          } || function(t, e) {
            for (var u in e)
              e.hasOwnProperty(u) && (t[u] = e[u]);
          };
          return function(t, e) {
            a(t, e);
            function u() {
              this.constructor = t;
            }
            t.prototype = e === null ? Object.create(e) : (u.prototype = e.prototype, new u());
          };
        }();
        Object.defineProperty(m, "__esModule", { value: !0 });
        var A = d(17), b = d(1), v = {
          attributes: !0,
          characterData: !0,
          characterDataOldValue: !0,
          childList: !0,
          subtree: !0
        }, p = 100, h = function(a) {
          T(t, a);
          function t(e) {
            var u = a.call(this, e) || this;
            return u.scroll = u, u.observer = new MutationObserver(function(o) {
              u.update(o);
            }), u.observer.observe(u.domNode, v), u.attach(), u;
          }
          return t.prototype.detach = function() {
            a.prototype.detach.call(this), this.observer.disconnect();
          }, t.prototype.deleteAt = function(e, u) {
            this.update(), e === 0 && u === this.length() ? this.children.forEach(function(o) {
              o.remove();
            }) : a.prototype.deleteAt.call(this, e, u);
          }, t.prototype.formatAt = function(e, u, o, l) {
            this.update(), a.prototype.formatAt.call(this, e, u, o, l);
          }, t.prototype.insertAt = function(e, u, o) {
            this.update(), a.prototype.insertAt.call(this, e, u, o);
          }, t.prototype.optimize = function(e, u) {
            var o = this;
            e === void 0 && (e = []), u === void 0 && (u = {}), a.prototype.optimize.call(this, u);
            for (var l = [].slice.call(this.observer.takeRecords()); l.length > 0; )
              e.push(l.pop());
            for (var r = function(s, _) {
              _ === void 0 && (_ = !0), !(s == null || s === o) && s.domNode.parentNode != null && (s.domNode[b.DATA_KEY].mutations == null && (s.domNode[b.DATA_KEY].mutations = []), _ && r(s.parent));
            }, i = function(s) {
              s.domNode[b.DATA_KEY] == null || s.domNode[b.DATA_KEY].mutations == null || (s instanceof A.default && s.children.forEach(i), s.optimize(u));
            }, c = e, n = 0; c.length > 0; n += 1) {
              if (n >= p)
                throw new Error("[Parchment] Maximum optimize iterations reached");
              for (c.forEach(function(s) {
                var _ = b.find(s.target, !0);
                _ != null && (_.domNode === s.target && (s.type === "childList" ? (r(b.find(s.previousSibling, !1)), [].forEach.call(s.addedNodes, function(g) {
                  var w = b.find(g, !1);
                  r(w, !1), w instanceof A.default && w.children.forEach(function(P) {
                    r(P, !1);
                  });
                })) : s.type === "attributes" && r(_.prev)), r(_));
              }), this.children.forEach(i), c = [].slice.call(this.observer.takeRecords()), l = c.slice(); l.length > 0; )
                e.push(l.pop());
            }
          }, t.prototype.update = function(e, u) {
            var o = this;
            u === void 0 && (u = {}), e = e || this.observer.takeRecords(), e.map(function(l) {
              var r = b.find(l.target, !0);
              return r == null ? null : r.domNode[b.DATA_KEY].mutations == null ? (r.domNode[b.DATA_KEY].mutations = [l], r) : (r.domNode[b.DATA_KEY].mutations.push(l), null);
            }).forEach(function(l) {
              l == null || l === o || l.domNode[b.DATA_KEY] == null || l.update(l.domNode[b.DATA_KEY].mutations || [], u);
            }), this.domNode[b.DATA_KEY].mutations != null && a.prototype.update.call(this, this.domNode[b.DATA_KEY].mutations, u), this.optimize(e, u);
          }, t.blotName = "scroll", t.defaultChild = "block", t.scope = b.Scope.BLOCK_BLOT, t.tagName = "DIV", t;
        }(A.default);
        m.default = h;
      },
      function(S, m, d) {
        var T = this && this.__extends || function() {
          var h = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, t) {
            a.__proto__ = t;
          } || function(a, t) {
            for (var e in t)
              t.hasOwnProperty(e) && (a[e] = t[e]);
          };
          return function(a, t) {
            h(a, t);
            function e() {
              this.constructor = a;
            }
            a.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
          };
        }();
        Object.defineProperty(m, "__esModule", { value: !0 });
        var A = d(18), b = d(1);
        function v(h, a) {
          if (Object.keys(h).length !== Object.keys(a).length)
            return !1;
          for (var t in h)
            if (h[t] !== a[t])
              return !1;
          return !0;
        }
        var p = function(h) {
          T(a, h);
          function a() {
            return h !== null && h.apply(this, arguments) || this;
          }
          return a.formats = function(t) {
            if (t.tagName !== a.tagName)
              return h.formats.call(this, t);
          }, a.prototype.format = function(t, e) {
            var u = this;
            t === this.statics.blotName && !e ? (this.children.forEach(function(o) {
              o instanceof A.default || (o = o.wrap(a.blotName, !0)), u.attributes.copy(o);
            }), this.unwrap()) : h.prototype.format.call(this, t, e);
          }, a.prototype.formatAt = function(t, e, u, o) {
            if (this.formats()[u] != null || b.query(u, b.Scope.ATTRIBUTE)) {
              var l = this.isolate(t, e);
              l.format(u, o);
            } else
              h.prototype.formatAt.call(this, t, e, u, o);
          }, a.prototype.optimize = function(t) {
            h.prototype.optimize.call(this, t);
            var e = this.formats();
            if (Object.keys(e).length === 0)
              return this.unwrap();
            var u = this.next;
            u instanceof a && u.prev === this && v(e, u.formats()) && (u.moveChildren(this), u.remove());
          }, a.blotName = "inline", a.scope = b.Scope.INLINE_BLOT, a.tagName = "SPAN", a;
        }(A.default);
        m.default = p;
      },
      function(S, m, d) {
        var T = this && this.__extends || function() {
          var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, a) {
            h.__proto__ = a;
          } || function(h, a) {
            for (var t in a)
              a.hasOwnProperty(t) && (h[t] = a[t]);
          };
          return function(h, a) {
            p(h, a);
            function t() {
              this.constructor = h;
            }
            h.prototype = a === null ? Object.create(a) : (t.prototype = a.prototype, new t());
          };
        }();
        Object.defineProperty(m, "__esModule", { value: !0 });
        var A = d(18), b = d(1), v = function(p) {
          T(h, p);
          function h() {
            return p !== null && p.apply(this, arguments) || this;
          }
          return h.formats = function(a) {
            var t = b.query(h.blotName).tagName;
            if (a.tagName !== t)
              return p.formats.call(this, a);
          }, h.prototype.format = function(a, t) {
            b.query(a, b.Scope.BLOCK) != null && (a === this.statics.blotName && !t ? this.replaceWith(h.blotName) : p.prototype.format.call(this, a, t));
          }, h.prototype.formatAt = function(a, t, e, u) {
            b.query(e, b.Scope.BLOCK) != null ? this.format(e, u) : p.prototype.formatAt.call(this, a, t, e, u);
          }, h.prototype.insertAt = function(a, t, e) {
            if (e == null || b.query(t, b.Scope.INLINE) != null)
              p.prototype.insertAt.call(this, a, t, e);
            else {
              var u = this.split(a), o = b.create(t, e);
              u.parent.insertBefore(o, u);
            }
          }, h.prototype.update = function(a, t) {
            navigator.userAgent.match(/Trident/) ? this.build() : p.prototype.update.call(this, a, t);
          }, h.blotName = "block", h.scope = b.Scope.BLOCK_BLOT, h.tagName = "P", h;
        }(A.default);
        m.default = v;
      },
      function(S, m, d) {
        var T = this && this.__extends || function() {
          var v = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, h) {
            p.__proto__ = h;
          } || function(p, h) {
            for (var a in h)
              h.hasOwnProperty(a) && (p[a] = h[a]);
          };
          return function(p, h) {
            v(p, h);
            function a() {
              this.constructor = p;
            }
            p.prototype = h === null ? Object.create(h) : (a.prototype = h.prototype, new a());
          };
        }();
        Object.defineProperty(m, "__esModule", { value: !0 });
        var A = d(19), b = function(v) {
          T(p, v);
          function p() {
            return v !== null && v.apply(this, arguments) || this;
          }
          return p.formats = function(h) {
          }, p.prototype.format = function(h, a) {
            v.prototype.formatAt.call(this, 0, this.length(), h, a);
          }, p.prototype.formatAt = function(h, a, t, e) {
            h === 0 && a === this.length() ? this.format(t, e) : v.prototype.formatAt.call(this, h, a, t, e);
          }, p.prototype.formats = function() {
            return this.statics.formats(this.domNode);
          }, p;
        }(A.default);
        m.default = b;
      },
      function(S, m, d) {
        var T = this && this.__extends || function() {
          var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, a) {
            h.__proto__ = a;
          } || function(h, a) {
            for (var t in a)
              a.hasOwnProperty(t) && (h[t] = a[t]);
          };
          return function(h, a) {
            p(h, a);
            function t() {
              this.constructor = h;
            }
            h.prototype = a === null ? Object.create(a) : (t.prototype = a.prototype, new t());
          };
        }();
        Object.defineProperty(m, "__esModule", { value: !0 });
        var A = d(19), b = d(1), v = function(p) {
          T(h, p);
          function h(a) {
            var t = p.call(this, a) || this;
            return t.text = t.statics.value(t.domNode), t;
          }
          return h.create = function(a) {
            return document.createTextNode(a);
          }, h.value = function(a) {
            var t = a.data;
            return t.normalize && (t = t.normalize()), t;
          }, h.prototype.deleteAt = function(a, t) {
            this.domNode.data = this.text = this.text.slice(0, a) + this.text.slice(a + t);
          }, h.prototype.index = function(a, t) {
            return this.domNode === a ? t : -1;
          }, h.prototype.insertAt = function(a, t, e) {
            e == null ? (this.text = this.text.slice(0, a) + t + this.text.slice(a), this.domNode.data = this.text) : p.prototype.insertAt.call(this, a, t, e);
          }, h.prototype.length = function() {
            return this.text.length;
          }, h.prototype.optimize = function(a) {
            p.prototype.optimize.call(this, a), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof h && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
          }, h.prototype.position = function(a, t) {
            return [this.domNode, a];
          }, h.prototype.split = function(a, t) {
            if (t === void 0 && (t = !1), !t) {
              if (a === 0)
                return this;
              if (a === this.length())
                return this.next;
            }
            var e = b.create(this.domNode.splitText(a));
            return this.parent.insertBefore(e, this.next), this.text = this.statics.value(this.domNode), e;
          }, h.prototype.update = function(a, t) {
            var e = this;
            a.some(function(u) {
              return u.type === "characterData" && u.target === e.domNode;
            }) && (this.text = this.statics.value(this.domNode));
          }, h.prototype.value = function() {
            return this.text;
          }, h.blotName = "text", h.scope = b.Scope.INLINE_BLOT, h;
        }(A.default);
        m.default = v;
      },
      function(S, m, d) {
        var T = document.createElement("div");
        if (T.classList.toggle("test-class", !1), T.classList.contains("test-class")) {
          var A = DOMTokenList.prototype.toggle;
          DOMTokenList.prototype.toggle = function(b, v) {
            return arguments.length > 1 && !this.contains(b) == !v ? v : A.call(this, b);
          };
        }
        String.prototype.startsWith || (String.prototype.startsWith = function(b, v) {
          return v = v || 0, this.substr(v, b.length) === b;
        }), String.prototype.endsWith || (String.prototype.endsWith = function(b, v) {
          var p = this.toString();
          (typeof v != "number" || !isFinite(v) || Math.floor(v) !== v || v > p.length) && (v = p.length), v -= b.length;
          var h = p.indexOf(b, v);
          return h !== -1 && h === v;
        }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
          value: function(v) {
            if (this === null)
              throw new TypeError("Array.prototype.find called on null or undefined");
            if (typeof v != "function")
              throw new TypeError("predicate must be a function");
            for (var p = Object(this), h = p.length >>> 0, a = arguments[1], t, e = 0; e < h; e++)
              if (t = p[e], v.call(a, t, e, p))
                return t;
          }
        }), document.addEventListener("DOMContentLoaded", function() {
          document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1);
        });
      },
      function(S, m) {
        var d = -1, T = 1, A = 0;
        function b(n, s, _) {
          if (n == s)
            return n ? [[A, n]] : [];
          (_ < 0 || n.length < _) && (_ = null);
          var g = a(n, s), w = n.substring(0, g);
          n = n.substring(g), s = s.substring(g), g = t(n, s);
          var P = n.substring(n.length - g);
          n = n.substring(0, n.length - g), s = s.substring(0, s.length - g);
          var O = v(n, s);
          return w && O.unshift([A, w]), P && O.push([A, P]), u(O), _ != null && (O = r(O, _)), O = i(O), O;
        }
        function v(n, s) {
          var _;
          if (!n)
            return [[T, s]];
          if (!s)
            return [[d, n]];
          var g = n.length > s.length ? n : s, w = n.length > s.length ? s : n, P = g.indexOf(w);
          if (P != -1)
            return _ = [
              [T, g.substring(0, P)],
              [A, w],
              [T, g.substring(P + w.length)]
            ], n.length > s.length && (_[0][0] = _[2][0] = d), _;
          if (w.length == 1)
            return [[d, n], [T, s]];
          var O = e(n, s);
          if (O) {
            var y = O[0], E = O[1], x = O[2], L = O[3], M = O[4], H = b(y, x), K = b(E, L);
            return H.concat([[A, M]], K);
          }
          return p(n, s);
        }
        function p(n, s) {
          for (var _ = n.length, g = s.length, w = Math.ceil((_ + g) / 2), P = w, O = 2 * w, y = new Array(O), E = new Array(O), x = 0; x < O; x++)
            y[x] = -1, E[x] = -1;
          y[P + 1] = 0, E[P + 1] = 0;
          for (var L = _ - g, M = L % 2 != 0, H = 0, K = 0, J = 0, U = 0, j = 0; j < w; j++) {
            for (var k = -j + H; k <= j - K; k += 2) {
              var R = P + k, I;
              k == -j || k != j && y[R - 1] < y[R + 1] ? I = y[R + 1] : I = y[R - 1] + 1;
              for (var z = I - k; I < _ && z < g && n.charAt(I) == s.charAt(z); )
                I++, z++;
              if (y[R] = I, I > _)
                K += 2;
              else if (z > g)
                H += 2;
              else if (M) {
                var C = P + L - k;
                if (C >= 0 && C < O && E[C] != -1) {
                  var q = _ - E[C];
                  if (I >= q)
                    return h(n, s, I, z);
                }
              }
            }
            for (var F = -j + J; F <= j - U; F += 2) {
              var C = P + F, q;
              F == -j || F != j && E[C - 1] < E[C + 1] ? q = E[C + 1] : q = E[C - 1] + 1;
              for (var $ = q - F; q < _ && $ < g && n.charAt(_ - q - 1) == s.charAt(g - $ - 1); )
                q++, $++;
              if (E[C] = q, q > _)
                U += 2;
              else if ($ > g)
                J += 2;
              else if (!M) {
                var R = P + L - F;
                if (R >= 0 && R < O && y[R] != -1) {
                  var I = y[R], z = P + I - R;
                  if (q = _ - q, I >= q)
                    return h(n, s, I, z);
                }
              }
            }
          }
          return [[d, n], [T, s]];
        }
        function h(n, s, _, g) {
          var w = n.substring(0, _), P = s.substring(0, g), O = n.substring(_), y = s.substring(g), E = b(w, P), x = b(O, y);
          return E.concat(x);
        }
        function a(n, s) {
          if (!n || !s || n.charAt(0) != s.charAt(0))
            return 0;
          for (var _ = 0, g = Math.min(n.length, s.length), w = g, P = 0; _ < w; )
            n.substring(P, w) == s.substring(P, w) ? (_ = w, P = _) : g = w, w = Math.floor((g - _) / 2 + _);
          return w;
        }
        function t(n, s) {
          if (!n || !s || n.charAt(n.length - 1) != s.charAt(s.length - 1))
            return 0;
          for (var _ = 0, g = Math.min(n.length, s.length), w = g, P = 0; _ < w; )
            n.substring(n.length - w, n.length - P) == s.substring(s.length - w, s.length - P) ? (_ = w, P = _) : g = w, w = Math.floor((g - _) / 2 + _);
          return w;
        }
        function e(n, s) {
          var _ = n.length > s.length ? n : s, g = n.length > s.length ? s : n;
          if (_.length < 4 || g.length * 2 < _.length)
            return null;
          function w(K, J, U) {
            for (var j = K.substring(U, U + Math.floor(K.length / 4)), k = -1, R = "", I, z, C, q; (k = J.indexOf(j, k + 1)) != -1; ) {
              var F = a(
                K.substring(U),
                J.substring(k)
              ), $ = t(
                K.substring(0, U),
                J.substring(0, k)
              );
              R.length < $ + F && (R = J.substring(k - $, k) + J.substring(k, k + F), I = K.substring(0, U - $), z = K.substring(U + F), C = J.substring(0, k - $), q = J.substring(k + F));
            }
            return R.length * 2 >= K.length ? [
              I,
              z,
              C,
              q,
              R
            ] : null;
          }
          var P = w(
            _,
            g,
            Math.ceil(_.length / 4)
          ), O = w(
            _,
            g,
            Math.ceil(_.length / 2)
          ), y;
          if (!P && !O)
            return null;
          O ? P ? y = P[4].length > O[4].length ? P : O : y = O : y = P;
          var E, x, L, M;
          n.length > s.length ? (E = y[0], x = y[1], L = y[2], M = y[3]) : (L = y[0], M = y[1], E = y[2], x = y[3]);
          var H = y[4];
          return [E, x, L, M, H];
        }
        function u(n) {
          n.push([A, ""]);
          for (var s = 0, _ = 0, g = 0, w = "", P = "", O; s < n.length; )
            switch (n[s][0]) {
              case T:
                g++, P += n[s][1], s++;
                break;
              case d:
                _++, w += n[s][1], s++;
                break;
              case A:
                _ + g > 1 ? (_ !== 0 && g !== 0 && (O = a(P, w), O !== 0 && (s - _ - g > 0 && n[s - _ - g - 1][0] == A ? n[s - _ - g - 1][1] += P.substring(0, O) : (n.splice(0, 0, [
                  A,
                  P.substring(0, O)
                ]), s++), P = P.substring(O), w = w.substring(O)), O = t(P, w), O !== 0 && (n[s][1] = P.substring(P.length - O) + n[s][1], P = P.substring(0, P.length - O), w = w.substring(0, w.length - O))), _ === 0 ? n.splice(
                  s - g,
                  _ + g,
                  [T, P]
                ) : g === 0 ? n.splice(
                  s - _,
                  _ + g,
                  [d, w]
                ) : n.splice(
                  s - _ - g,
                  _ + g,
                  [d, w],
                  [T, P]
                ), s = s - _ - g + (_ ? 1 : 0) + (g ? 1 : 0) + 1) : s !== 0 && n[s - 1][0] == A ? (n[s - 1][1] += n[s][1], n.splice(s, 1)) : s++, g = 0, _ = 0, w = "", P = "";
                break;
            }
          n[n.length - 1][1] === "" && n.pop();
          var y = !1;
          for (s = 1; s < n.length - 1; )
            n[s - 1][0] == A && n[s + 1][0] == A && (n[s][1].substring(n[s][1].length - n[s - 1][1].length) == n[s - 1][1] ? (n[s][1] = n[s - 1][1] + n[s][1].substring(0, n[s][1].length - n[s - 1][1].length), n[s + 1][1] = n[s - 1][1] + n[s + 1][1], n.splice(s - 1, 1), y = !0) : n[s][1].substring(0, n[s + 1][1].length) == n[s + 1][1] && (n[s - 1][1] += n[s + 1][1], n[s][1] = n[s][1].substring(n[s + 1][1].length) + n[s + 1][1], n.splice(s + 1, 1), y = !0)), s++;
          y && u(n);
        }
        var o = b;
        o.INSERT = T, o.DELETE = d, o.EQUAL = A, S.exports = o;
        function l(n, s) {
          if (s === 0)
            return [A, n];
          for (var _ = 0, g = 0; g < n.length; g++) {
            var w = n[g];
            if (w[0] === d || w[0] === A) {
              var P = _ + w[1].length;
              if (s === P)
                return [g + 1, n];
              if (s < P) {
                n = n.slice();
                var O = s - _, y = [w[0], w[1].slice(0, O)], E = [w[0], w[1].slice(O)];
                return n.splice(g, 1, y, E), [g + 1, n];
              } else
                _ = P;
            }
          }
          throw new Error("cursor_pos is out of bounds!");
        }
        function r(n, s) {
          var _ = l(n, s), g = _[1], w = _[0], P = g[w], O = g[w + 1];
          if (P == null)
            return n;
          if (P[0] !== A)
            return n;
          if (O != null && P[1] + O[1] === O[1] + P[1])
            return g.splice(w, 2, O, P), c(g, w, 2);
          if (O != null && O[1].indexOf(P[1]) === 0) {
            g.splice(w, 2, [O[0], P[1]], [0, P[1]]);
            var y = O[1].slice(P[1].length);
            return y.length > 0 && g.splice(w + 2, 0, [O[0], y]), c(g, w, 3);
          } else
            return n;
        }
        function i(n) {
          for (var s = !1, _ = function(O) {
            return O.charCodeAt(0) >= 56320 && O.charCodeAt(0) <= 57343;
          }, g = function(O) {
            return O.charCodeAt(O.length - 1) >= 55296 && O.charCodeAt(O.length - 1) <= 56319;
          }, w = 2; w < n.length; w += 1)
            n[w - 2][0] === A && g(n[w - 2][1]) && n[w - 1][0] === d && _(n[w - 1][1]) && n[w][0] === T && _(n[w][1]) && (s = !0, n[w - 1][1] = n[w - 2][1].slice(-1) + n[w - 1][1], n[w][1] = n[w - 2][1].slice(-1) + n[w][1], n[w - 2][1] = n[w - 2][1].slice(0, -1));
          if (!s)
            return n;
          for (var P = [], w = 0; w < n.length; w += 1)
            n[w][1].length > 0 && P.push(n[w]);
          return P;
        }
        function c(n, s, _) {
          for (var g = s + _ - 1; g >= 0 && g >= s - 1; g--)
            if (g + 1 < n.length) {
              var w = n[g], P = n[g + 1];
              w[0] === P[1] && n.splice(g, 2, [w[0], w[1] + P[1]]);
            }
          return n;
        }
      },
      function(S, m) {
        m = S.exports = typeof Object.keys == "function" ? Object.keys : d, m.shim = d;
        function d(T) {
          var A = [];
          for (var b in T)
            A.push(b);
          return A;
        }
      },
      function(S, m) {
        var d = function() {
          return Object.prototype.toString.call(arguments);
        }() == "[object Arguments]";
        m = S.exports = d ? T : A, m.supported = T;
        function T(b) {
          return Object.prototype.toString.call(b) == "[object Arguments]";
        }
        m.unsupported = A;
        function A(b) {
          return b && typeof b == "object" && typeof b.length == "number" && Object.prototype.hasOwnProperty.call(b, "callee") && !Object.prototype.propertyIsEnumerable.call(b, "callee") || !1;
        }
      },
      function(S, m) {
        var d = Object.prototype.hasOwnProperty, T = "~";
        function A() {
        }
        Object.create && (A.prototype = /* @__PURE__ */ Object.create(null), new A().__proto__ || (T = !1));
        function b(p, h, a) {
          this.fn = p, this.context = h, this.once = a || !1;
        }
        function v() {
          this._events = new A(), this._eventsCount = 0;
        }
        v.prototype.eventNames = function() {
          var h = [], a, t;
          if (this._eventsCount === 0)
            return h;
          for (t in a = this._events)
            d.call(a, t) && h.push(T ? t.slice(1) : t);
          return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(a)) : h;
        }, v.prototype.listeners = function(h, a) {
          var t = T ? T + h : h, e = this._events[t];
          if (a)
            return !!e;
          if (!e)
            return [];
          if (e.fn)
            return [e.fn];
          for (var u = 0, o = e.length, l = new Array(o); u < o; u++)
            l[u] = e[u].fn;
          return l;
        }, v.prototype.emit = function(h, a, t, e, u, o) {
          var l = T ? T + h : h;
          if (!this._events[l])
            return !1;
          var r = this._events[l], i = arguments.length, c, n;
          if (r.fn) {
            switch (r.once && this.removeListener(h, r.fn, void 0, !0), i) {
              case 1:
                return r.fn.call(r.context), !0;
              case 2:
                return r.fn.call(r.context, a), !0;
              case 3:
                return r.fn.call(r.context, a, t), !0;
              case 4:
                return r.fn.call(r.context, a, t, e), !0;
              case 5:
                return r.fn.call(r.context, a, t, e, u), !0;
              case 6:
                return r.fn.call(r.context, a, t, e, u, o), !0;
            }
            for (n = 1, c = new Array(i - 1); n < i; n++)
              c[n - 1] = arguments[n];
            r.fn.apply(r.context, c);
          } else {
            var s = r.length, _;
            for (n = 0; n < s; n++)
              switch (r[n].once && this.removeListener(h, r[n].fn, void 0, !0), i) {
                case 1:
                  r[n].fn.call(r[n].context);
                  break;
                case 2:
                  r[n].fn.call(r[n].context, a);
                  break;
                case 3:
                  r[n].fn.call(r[n].context, a, t);
                  break;
                case 4:
                  r[n].fn.call(r[n].context, a, t, e);
                  break;
                default:
                  if (!c)
                    for (_ = 1, c = new Array(i - 1); _ < i; _++)
                      c[_ - 1] = arguments[_];
                  r[n].fn.apply(r[n].context, c);
              }
          }
          return !0;
        }, v.prototype.on = function(h, a, t) {
          var e = new b(a, t || this), u = T ? T + h : h;
          return this._events[u] ? this._events[u].fn ? this._events[u] = [this._events[u], e] : this._events[u].push(e) : (this._events[u] = e, this._eventsCount++), this;
        }, v.prototype.once = function(h, a, t) {
          var e = new b(a, t || this, !0), u = T ? T + h : h;
          return this._events[u] ? this._events[u].fn ? this._events[u] = [this._events[u], e] : this._events[u].push(e) : (this._events[u] = e, this._eventsCount++), this;
        }, v.prototype.removeListener = function(h, a, t, e) {
          var u = T ? T + h : h;
          if (!this._events[u])
            return this;
          if (!a)
            return --this._eventsCount === 0 ? this._events = new A() : delete this._events[u], this;
          var o = this._events[u];
          if (o.fn)
            o.fn === a && (!e || o.once) && (!t || o.context === t) && (--this._eventsCount === 0 ? this._events = new A() : delete this._events[u]);
          else {
            for (var l = 0, r = [], i = o.length; l < i; l++)
              (o[l].fn !== a || e && !o[l].once || t && o[l].context !== t) && r.push(o[l]);
            r.length ? this._events[u] = r.length === 1 ? r[0] : r : --this._eventsCount === 0 ? this._events = new A() : delete this._events[u];
          }
          return this;
        }, v.prototype.removeAllListeners = function(h) {
          var a;
          return h ? (a = T ? T + h : h, this._events[a] && (--this._eventsCount === 0 ? this._events = new A() : delete this._events[a])) : (this._events = new A(), this._eventsCount = 0), this;
        }, v.prototype.off = v.prototype.removeListener, v.prototype.addListener = v.prototype.on, v.prototype.setMaxListeners = function() {
          return this;
        }, v.prefixed = T, v.EventEmitter = v, typeof S < "u" && (S.exports = v);
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.matchText = m.matchSpacing = m.matchNewline = m.matchBlot = m.matchAttributor = m.default = void 0;
        var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(Z) {
          return typeof Z;
        } : function(Z) {
          return Z && typeof Symbol == "function" && Z.constructor === Symbol && Z !== Symbol.prototype ? "symbol" : typeof Z;
        }, A = function() {
          function Z(Y, tt) {
            var et = [], Q = !0, st = !1, ot = void 0;
            try {
              for (var at = Y[Symbol.iterator](), wt; !(Q = (wt = at.next()).done) && (et.push(wt.value), !(tt && et.length === tt)); Q = !0)
                ;
            } catch (Ot) {
              st = !0, ot = Ot;
            } finally {
              try {
                !Q && at.return && at.return();
              } finally {
                if (st)
                  throw ot;
              }
            }
            return et;
          }
          return function(Y, tt) {
            if (Array.isArray(Y))
              return Y;
            if (Symbol.iterator in Object(Y))
              return Z(Y, tt);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), b = function() {
          function Z(Y, tt) {
            for (var et = 0; et < tt.length; et++) {
              var Q = tt[et];
              Q.enumerable = Q.enumerable || !1, Q.configurable = !0, "value" in Q && (Q.writable = !0), Object.defineProperty(Y, Q.key, Q);
            }
          }
          return function(Y, tt, et) {
            return tt && Z(Y.prototype, tt), et && Z(Y, et), Y;
          };
        }(), v = d(3), p = E(v), h = d(2), a = E(h), t = d(0), e = E(t), u = d(5), o = E(u), l = d(10), r = E(l), i = d(9), c = E(i), n = d(36), s = d(37), _ = d(13), g = E(_), w = d(26), P = d(38), O = d(39), y = d(40);
        function E(Z) {
          return Z && Z.__esModule ? Z : { default: Z };
        }
        function x(Z, Y, tt) {
          return Y in Z ? Object.defineProperty(Z, Y, { value: tt, enumerable: !0, configurable: !0, writable: !0 }) : Z[Y] = tt, Z;
        }
        function L(Z, Y) {
          if (!(Z instanceof Y))
            throw new TypeError("Cannot call a class as a function");
        }
        function M(Z, Y) {
          if (!Z)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return Y && (typeof Y == "object" || typeof Y == "function") ? Y : Z;
        }
        function H(Z, Y) {
          if (typeof Y != "function" && Y !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof Y);
          Z.prototype = Object.create(Y && Y.prototype, { constructor: { value: Z, enumerable: !1, writable: !0, configurable: !0 } }), Y && (Object.setPrototypeOf ? Object.setPrototypeOf(Z, Y) : Z.__proto__ = Y);
        }
        var K = (0, r.default)("quill:clipboard"), J = "__ql-matcher", U = [[Node.TEXT_NODE, gt], [Node.TEXT_NODE, ft], ["br", nt], [Node.ELEMENT_NODE, ft], [Node.ELEMENT_NODE, X], [Node.ELEMENT_NODE, ht], [Node.ELEMENT_NODE, G], [Node.ELEMENT_NODE, mt], ["li", lt], ["b", $.bind($, "bold")], ["i", $.bind($, "italic")], ["style", it]], j = [n.AlignAttribute, P.DirectionAttribute].reduce(function(Z, Y) {
          return Z[Y.keyName] = Y, Z;
        }, {}), k = [n.AlignStyle, s.BackgroundStyle, w.ColorStyle, P.DirectionStyle, O.FontStyle, y.SizeStyle].reduce(function(Z, Y) {
          return Z[Y.keyName] = Y, Z;
        }, {}), R = function(Z) {
          H(Y, Z);
          function Y(tt, et) {
            L(this, Y);
            var Q = M(this, (Y.__proto__ || Object.getPrototypeOf(Y)).call(this, tt, et));
            return Q.quill.root.addEventListener("paste", Q.onPaste.bind(Q)), Q.container = Q.quill.addContainer("ql-clipboard"), Q.container.setAttribute("contenteditable", !0), Q.container.setAttribute("tabindex", -1), Q.matchers = [], U.concat(Q.options.matchers).forEach(function(st) {
              var ot = A(st, 2), at = ot[0], wt = ot[1];
              !et.matchVisual && wt === ht || Q.addMatcher(at, wt);
            }), Q;
          }
          return b(Y, [{
            key: "addMatcher",
            value: function(et, Q) {
              this.matchers.push([et, Q]);
            }
          }, {
            key: "convert",
            value: function(et) {
              if (typeof et == "string")
                return this.container.innerHTML = et.replace(/\>\r?\n +\</g, "><"), this.convert();
              var Q = this.quill.getFormat(this.quill.selection.savedRange.index);
              if (Q[g.default.blotName]) {
                var st = this.container.innerText;
                return this.container.innerHTML = "", new a.default().insert(st, x({}, g.default.blotName, Q[g.default.blotName]));
              }
              var ot = this.prepareMatching(), at = A(ot, 2), wt = at[0], Ot = at[1], pt = F(this.container, wt, Ot);
              return C(pt, `
`) && pt.ops[pt.ops.length - 1].attributes == null && (pt = pt.compose(new a.default().retain(pt.length() - 1).delete(1))), K.log("convert", this.container.innerHTML, pt), this.container.innerHTML = "", pt;
            }
          }, {
            key: "dangerouslyPasteHTML",
            value: function(et, Q) {
              var st = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : o.default.sources.API;
              if (typeof et == "string")
                this.quill.setContents(this.convert(et), Q), this.quill.setSelection(0, o.default.sources.SILENT);
              else {
                var ot = this.convert(Q);
                this.quill.updateContents(new a.default().retain(et).concat(ot), st), this.quill.setSelection(et + ot.length(), o.default.sources.SILENT);
              }
            }
          }, {
            key: "onPaste",
            value: function(et) {
              var Q = this;
              if (!(et.defaultPrevented || !this.quill.isEnabled())) {
                var st = this.quill.getSelection(), ot = new a.default().retain(st.index), at = this.quill.scrollingContainer.scrollTop;
                this.container.focus(), this.quill.selection.update(o.default.sources.SILENT), setTimeout(function() {
                  ot = ot.concat(Q.convert()).delete(st.length), Q.quill.updateContents(ot, o.default.sources.USER), Q.quill.setSelection(ot.length() - st.length, o.default.sources.SILENT), Q.quill.scrollingContainer.scrollTop = at, Q.quill.focus();
                }, 1);
              }
            }
          }, {
            key: "prepareMatching",
            value: function() {
              var et = this, Q = [], st = [];
              return this.matchers.forEach(function(ot) {
                var at = A(ot, 2), wt = at[0], Ot = at[1];
                switch (wt) {
                  case Node.TEXT_NODE:
                    st.push(Ot);
                    break;
                  case Node.ELEMENT_NODE:
                    Q.push(Ot);
                    break;
                  default:
                    [].forEach.call(et.container.querySelectorAll(wt), function(pt) {
                      pt[J] = pt[J] || [], pt[J].push(Ot);
                    });
                    break;
                }
              }), [Q, st];
            }
          }]), Y;
        }(c.default);
        R.DEFAULTS = {
          matchers: [],
          matchVisual: !0
        };
        function I(Z, Y, tt) {
          return (typeof Y > "u" ? "undefined" : T(Y)) === "object" ? Object.keys(Y).reduce(function(et, Q) {
            return I(et, Q, Y[Q]);
          }, Z) : Z.reduce(function(et, Q) {
            return Q.attributes && Q.attributes[Y] ? et.push(Q) : et.insert(Q.insert, (0, p.default)({}, x({}, Y, tt), Q.attributes));
          }, new a.default());
        }
        function z(Z) {
          if (Z.nodeType !== Node.ELEMENT_NODE)
            return {};
          var Y = "__ql-computed-style";
          return Z[Y] || (Z[Y] = window.getComputedStyle(Z));
        }
        function C(Z, Y) {
          for (var tt = "", et = Z.ops.length - 1; et >= 0 && tt.length < Y.length; --et) {
            var Q = Z.ops[et];
            if (typeof Q.insert != "string")
              break;
            tt = Q.insert + tt;
          }
          return tt.slice(-1 * Y.length) === Y;
        }
        function q(Z) {
          if (Z.childNodes.length === 0)
            return !1;
          var Y = z(Z);
          return ["block", "list-item"].indexOf(Y.display) > -1;
        }
        function F(Z, Y, tt) {
          return Z.nodeType === Z.TEXT_NODE ? tt.reduce(function(et, Q) {
            return Q(Z, et);
          }, new a.default()) : Z.nodeType === Z.ELEMENT_NODE ? [].reduce.call(Z.childNodes || [], function(et, Q) {
            var st = F(Q, Y, tt);
            return Q.nodeType === Z.ELEMENT_NODE && (st = Y.reduce(function(ot, at) {
              return at(Q, ot);
            }, st), st = (Q[J] || []).reduce(function(ot, at) {
              return at(Q, ot);
            }, st)), et.concat(st);
          }, new a.default()) : new a.default();
        }
        function $(Z, Y, tt) {
          return I(tt, Z, !0);
        }
        function G(Z, Y) {
          var tt = e.default.Attributor.Attribute.keys(Z), et = e.default.Attributor.Class.keys(Z), Q = e.default.Attributor.Style.keys(Z), st = {};
          return tt.concat(et).concat(Q).forEach(function(ot) {
            var at = e.default.query(ot, e.default.Scope.ATTRIBUTE);
            at != null && (st[at.attrName] = at.value(Z), st[at.attrName]) || (at = j[ot], at != null && (at.attrName === ot || at.keyName === ot) && (st[at.attrName] = at.value(Z) || void 0), at = k[ot], at != null && (at.attrName === ot || at.keyName === ot) && (at = k[ot], st[at.attrName] = at.value(Z) || void 0));
          }), Object.keys(st).length > 0 && (Y = I(Y, st)), Y;
        }
        function X(Z, Y) {
          var tt = e.default.query(Z);
          if (tt == null)
            return Y;
          if (tt.prototype instanceof e.default.Embed) {
            var et = {}, Q = tt.value(Z);
            Q != null && (et[tt.blotName] = Q, Y = new a.default().insert(et, tt.formats(Z)));
          } else
            typeof tt.formats == "function" && (Y = I(Y, tt.blotName, tt.formats(Z)));
          return Y;
        }
        function nt(Z, Y) {
          return C(Y, `
`) || Y.insert(`
`), Y;
        }
        function it() {
          return new a.default();
        }
        function lt(Z, Y) {
          var tt = e.default.query(Z);
          if (tt == null || tt.blotName !== "list-item" || !C(Y, `
`))
            return Y;
          for (var et = -1, Q = Z.parentNode; !Q.classList.contains("ql-clipboard"); )
            (e.default.query(Q) || {}).blotName === "list" && (et += 1), Q = Q.parentNode;
          return et <= 0 ? Y : Y.compose(new a.default().retain(Y.length() - 1).retain(1, { indent: et }));
        }
        function ft(Z, Y) {
          return C(Y, `
`) || (q(Z) || Y.length() > 0 && Z.nextSibling && q(Z.nextSibling)) && Y.insert(`
`), Y;
        }
        function ht(Z, Y) {
          if (q(Z) && Z.nextElementSibling != null && !C(Y, `

`)) {
            var tt = Z.offsetHeight + parseFloat(z(Z).marginTop) + parseFloat(z(Z).marginBottom);
            Z.nextElementSibling.offsetTop > Z.offsetTop + tt * 1.5 && Y.insert(`
`);
          }
          return Y;
        }
        function mt(Z, Y) {
          var tt = {}, et = Z.style || {};
          return et.fontStyle && z(Z).fontStyle === "italic" && (tt.italic = !0), et.fontWeight && (z(Z).fontWeight.startsWith("bold") || parseInt(z(Z).fontWeight) >= 700) && (tt.bold = !0), Object.keys(tt).length > 0 && (Y = I(Y, tt)), parseFloat(et.textIndent || 0) > 0 && (Y = new a.default().insert("	").concat(Y)), Y;
        }
        function gt(Z, Y) {
          var tt = Z.data;
          if (Z.parentNode.tagName === "O:P")
            return Y.insert(tt.trim());
          if (tt.trim().length === 0 && Z.parentNode.classList.contains("ql-clipboard"))
            return Y;
          if (!z(Z.parentNode).whiteSpace.startsWith("pre")) {
            var et = function(st, ot) {
              return ot = ot.replace(/[^\u00a0]/g, ""), ot.length < 1 && st ? " " : ot;
            };
            tt = tt.replace(/\r\n/g, " ").replace(/\n/g, " "), tt = tt.replace(/\s\s+/g, et.bind(et, !0)), (Z.previousSibling == null && q(Z.parentNode) || Z.previousSibling != null && q(Z.previousSibling)) && (tt = tt.replace(/^\s+/, et.bind(et, !1))), (Z.nextSibling == null && q(Z.parentNode) || Z.nextSibling != null && q(Z.nextSibling)) && (tt = tt.replace(/\s+$/, et.bind(et, !1)));
          }
          return Y.insert(tt);
        }
        m.default = R, m.matchAttributor = G, m.matchBlot = X, m.matchNewline = ft, m.matchSpacing = ht, m.matchText = gt;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = function() {
          function u(o, l) {
            for (var r = 0; r < l.length; r++) {
              var i = l[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, i.key, i);
            }
          }
          return function(o, l, r) {
            return l && u(o.prototype, l), r && u(o, r), o;
          };
        }(), A = function u(o, l, r) {
          o === null && (o = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(o, l);
          if (i === void 0) {
            var c = Object.getPrototypeOf(o);
            return c === null ? void 0 : u(c, l, r);
          } else {
            if ("value" in i)
              return i.value;
            var n = i.get;
            return n === void 0 ? void 0 : n.call(r);
          }
        }, b = d(6), v = p(b);
        function p(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function h(u, o) {
          if (!(u instanceof o))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(u, o) {
          if (!u)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return o && (typeof o == "object" || typeof o == "function") ? o : u;
        }
        function t(u, o) {
          if (typeof o != "function" && o !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof o);
          u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
        }
        var e = function(u) {
          t(o, u);
          function o() {
            return h(this, o), a(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
          }
          return T(o, [{
            key: "optimize",
            value: function(r) {
              A(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "optimize", this).call(this, r), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
            }
          }], [{
            key: "create",
            value: function() {
              return A(o.__proto__ || Object.getPrototypeOf(o), "create", this).call(this);
            }
          }, {
            key: "formats",
            value: function() {
              return !0;
            }
          }]), o;
        }(v.default);
        e.blotName = "bold", e.tagName = ["STRONG", "B"], m.default = e;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.addControls = m.default = void 0;
        var T = function() {
          function y(E, x) {
            var L = [], M = !0, H = !1, K = void 0;
            try {
              for (var J = E[Symbol.iterator](), U; !(M = (U = J.next()).done) && (L.push(U.value), !(x && L.length === x)); M = !0)
                ;
            } catch (j) {
              H = !0, K = j;
            } finally {
              try {
                !M && J.return && J.return();
              } finally {
                if (H)
                  throw K;
              }
            }
            return L;
          }
          return function(E, x) {
            if (Array.isArray(E))
              return E;
            if (Symbol.iterator in Object(E))
              return y(E, x);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), A = function() {
          function y(E, x) {
            for (var L = 0; L < x.length; L++) {
              var M = x[L];
              M.enumerable = M.enumerable || !1, M.configurable = !0, "value" in M && (M.writable = !0), Object.defineProperty(E, M.key, M);
            }
          }
          return function(E, x, L) {
            return x && y(E.prototype, x), L && y(E, L), E;
          };
        }(), b = d(2), v = r(b), p = d(0), h = r(p), a = d(5), t = r(a), e = d(10), u = r(e), o = d(9), l = r(o);
        function r(y) {
          return y && y.__esModule ? y : { default: y };
        }
        function i(y, E, x) {
          return E in y ? Object.defineProperty(y, E, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : y[E] = x, y;
        }
        function c(y, E) {
          if (!(y instanceof E))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(y, E) {
          if (!y)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return E && (typeof E == "object" || typeof E == "function") ? E : y;
        }
        function s(y, E) {
          if (typeof E != "function" && E !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof E);
          y.prototype = Object.create(E && E.prototype, { constructor: { value: y, enumerable: !1, writable: !0, configurable: !0 } }), E && (Object.setPrototypeOf ? Object.setPrototypeOf(y, E) : y.__proto__ = E);
        }
        var _ = (0, u.default)("quill:toolbar"), g = function(y) {
          s(E, y);
          function E(x, L) {
            c(this, E);
            var M = n(this, (E.__proto__ || Object.getPrototypeOf(E)).call(this, x, L));
            if (Array.isArray(M.options.container)) {
              var H = document.createElement("div");
              P(H, M.options.container), x.container.parentNode.insertBefore(H, x.container), M.container = H;
            } else
              typeof M.options.container == "string" ? M.container = document.querySelector(M.options.container) : M.container = M.options.container;
            if (!(M.container instanceof HTMLElement)) {
              var K;
              return K = _.error("Container required for toolbar", M.options), n(M, K);
            }
            return M.container.classList.add("ql-toolbar"), M.controls = [], M.handlers = {}, Object.keys(M.options.handlers).forEach(function(J) {
              M.addHandler(J, M.options.handlers[J]);
            }), [].forEach.call(M.container.querySelectorAll("button, select"), function(J) {
              M.attach(J);
            }), M.quill.on(t.default.events.EDITOR_CHANGE, function(J, U) {
              J === t.default.events.SELECTION_CHANGE && M.update(U);
            }), M.quill.on(t.default.events.SCROLL_OPTIMIZE, function() {
              var J = M.quill.selection.getRange(), U = T(J, 1), j = U[0];
              M.update(j);
            }), M;
          }
          return A(E, [{
            key: "addHandler",
            value: function(L, M) {
              this.handlers[L] = M;
            }
          }, {
            key: "attach",
            value: function(L) {
              var M = this, H = [].find.call(L.classList, function(J) {
                return J.indexOf("ql-") === 0;
              });
              if (!!H) {
                if (H = H.slice(3), L.tagName === "BUTTON" && L.setAttribute("type", "button"), this.handlers[H] == null) {
                  if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[H] == null) {
                    _.warn("ignoring attaching to disabled format", H, L);
                    return;
                  }
                  if (h.default.query(H) == null) {
                    _.warn("ignoring attaching to nonexistent format", H, L);
                    return;
                  }
                }
                var K = L.tagName === "SELECT" ? "change" : "click";
                L.addEventListener(K, function(J) {
                  var U = void 0;
                  if (L.tagName === "SELECT") {
                    if (L.selectedIndex < 0)
                      return;
                    var j = L.options[L.selectedIndex];
                    j.hasAttribute("selected") ? U = !1 : U = j.value || !1;
                  } else
                    L.classList.contains("ql-active") ? U = !1 : U = L.value || !L.hasAttribute("value"), J.preventDefault();
                  M.quill.focus();
                  var k = M.quill.selection.getRange(), R = T(k, 1), I = R[0];
                  if (M.handlers[H] != null)
                    M.handlers[H].call(M, U);
                  else if (h.default.query(H).prototype instanceof h.default.Embed) {
                    if (U = prompt("Enter " + H), !U)
                      return;
                    M.quill.updateContents(new v.default().retain(I.index).delete(I.length).insert(i({}, H, U)), t.default.sources.USER);
                  } else
                    M.quill.format(H, U, t.default.sources.USER);
                  M.update(I);
                }), this.controls.push([H, L]);
              }
            }
          }, {
            key: "update",
            value: function(L) {
              var M = L == null ? {} : this.quill.getFormat(L);
              this.controls.forEach(function(H) {
                var K = T(H, 2), J = K[0], U = K[1];
                if (U.tagName === "SELECT") {
                  var j = void 0;
                  if (L == null)
                    j = null;
                  else if (M[J] == null)
                    j = U.querySelector("option[selected]");
                  else if (!Array.isArray(M[J])) {
                    var k = M[J];
                    typeof k == "string" && (k = k.replace(/\"/g, '\\"')), j = U.querySelector('option[value="' + k + '"]');
                  }
                  j == null ? (U.value = "", U.selectedIndex = -1) : j.selected = !0;
                } else if (L == null)
                  U.classList.remove("ql-active");
                else if (U.hasAttribute("value")) {
                  var R = M[J] === U.getAttribute("value") || M[J] != null && M[J].toString() === U.getAttribute("value") || M[J] == null && !U.getAttribute("value");
                  U.classList.toggle("ql-active", R);
                } else
                  U.classList.toggle("ql-active", M[J] != null);
              });
            }
          }]), E;
        }(l.default);
        g.DEFAULTS = {};
        function w(y, E, x) {
          var L = document.createElement("button");
          L.setAttribute("type", "button"), L.classList.add("ql-" + E), x != null && (L.value = x), y.appendChild(L);
        }
        function P(y, E) {
          Array.isArray(E[0]) || (E = [E]), E.forEach(function(x) {
            var L = document.createElement("span");
            L.classList.add("ql-formats"), x.forEach(function(M) {
              if (typeof M == "string")
                w(L, M);
              else {
                var H = Object.keys(M)[0], K = M[H];
                Array.isArray(K) ? O(L, H, K) : w(L, H, K);
              }
            }), y.appendChild(L);
          });
        }
        function O(y, E, x) {
          var L = document.createElement("select");
          L.classList.add("ql-" + E), x.forEach(function(M) {
            var H = document.createElement("option");
            M !== !1 ? H.setAttribute("value", M) : H.setAttribute("selected", "selected"), L.appendChild(H);
          }), y.appendChild(L);
        }
        g.DEFAULTS = {
          container: null,
          handlers: {
            clean: function() {
              var E = this, x = this.quill.getSelection();
              if (x != null)
                if (x.length == 0) {
                  var L = this.quill.getFormat();
                  Object.keys(L).forEach(function(M) {
                    h.default.query(M, h.default.Scope.INLINE) != null && E.quill.format(M, !1);
                  });
                } else
                  this.quill.removeFormat(x, t.default.sources.USER);
            },
            direction: function(E) {
              var x = this.quill.getFormat().align;
              E === "rtl" && x == null ? this.quill.format("align", "right", t.default.sources.USER) : !E && x === "right" && this.quill.format("align", !1, t.default.sources.USER), this.quill.format("direction", E, t.default.sources.USER);
            },
            indent: function(E) {
              var x = this.quill.getSelection(), L = this.quill.getFormat(x), M = parseInt(L.indent || 0);
              if (E === "+1" || E === "-1") {
                var H = E === "+1" ? 1 : -1;
                L.direction === "rtl" && (H *= -1), this.quill.format("indent", M + H, t.default.sources.USER);
              }
            },
            link: function(E) {
              E === !0 && (E = prompt("Enter link URL:")), this.quill.format("link", E, t.default.sources.USER);
            },
            list: function(E) {
              var x = this.quill.getSelection(), L = this.quill.getFormat(x);
              E === "check" ? L.list === "checked" || L.list === "unchecked" ? this.quill.format("list", !1, t.default.sources.USER) : this.quill.format("list", "unchecked", t.default.sources.USER) : this.quill.format("list", E, t.default.sources.USER);
            }
          }
        }, m.default = g, m.addControls = P;
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = function() {
          function u(o, l) {
            for (var r = 0; r < l.length; r++) {
              var i = l[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, i.key, i);
            }
          }
          return function(o, l, r) {
            return l && u(o.prototype, l), r && u(o, r), o;
          };
        }(), A = function u(o, l, r) {
          o === null && (o = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(o, l);
          if (i === void 0) {
            var c = Object.getPrototypeOf(o);
            return c === null ? void 0 : u(c, l, r);
          } else {
            if ("value" in i)
              return i.value;
            var n = i.get;
            return n === void 0 ? void 0 : n.call(r);
          }
        }, b = d(28), v = p(b);
        function p(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function h(u, o) {
          if (!(u instanceof o))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(u, o) {
          if (!u)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return o && (typeof o == "object" || typeof o == "function") ? o : u;
        }
        function t(u, o) {
          if (typeof o != "function" && o !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof o);
          u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
        }
        var e = function(u) {
          t(o, u);
          function o(l, r) {
            h(this, o);
            var i = a(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, l));
            return i.label.innerHTML = r, i.container.classList.add("ql-color-picker"), [].slice.call(i.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function(c) {
              c.classList.add("ql-primary");
            }), i;
          }
          return T(o, [{
            key: "buildItem",
            value: function(r) {
              var i = A(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "buildItem", this).call(this, r);
              return i.style.backgroundColor = r.getAttribute("value") || "", i;
            }
          }, {
            key: "selectItem",
            value: function(r, i) {
              A(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "selectItem", this).call(this, r, i);
              var c = this.label.querySelector(".ql-color-label"), n = r && r.getAttribute("data-value") || "";
              c && (c.tagName === "line" ? c.style.stroke = n : c.style.fill = n);
            }
          }]), o;
        }(v.default);
        m.default = e;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = function() {
          function u(o, l) {
            for (var r = 0; r < l.length; r++) {
              var i = l[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, i.key, i);
            }
          }
          return function(o, l, r) {
            return l && u(o.prototype, l), r && u(o, r), o;
          };
        }(), A = function u(o, l, r) {
          o === null && (o = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(o, l);
          if (i === void 0) {
            var c = Object.getPrototypeOf(o);
            return c === null ? void 0 : u(c, l, r);
          } else {
            if ("value" in i)
              return i.value;
            var n = i.get;
            return n === void 0 ? void 0 : n.call(r);
          }
        }, b = d(28), v = p(b);
        function p(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function h(u, o) {
          if (!(u instanceof o))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(u, o) {
          if (!u)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return o && (typeof o == "object" || typeof o == "function") ? o : u;
        }
        function t(u, o) {
          if (typeof o != "function" && o !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof o);
          u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
        }
        var e = function(u) {
          t(o, u);
          function o(l, r) {
            h(this, o);
            var i = a(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, l));
            return i.container.classList.add("ql-icon-picker"), [].forEach.call(i.container.querySelectorAll(".ql-picker-item"), function(c) {
              c.innerHTML = r[c.getAttribute("data-value") || ""];
            }), i.defaultItem = i.container.querySelector(".ql-selected"), i.selectItem(i.defaultItem), i;
          }
          return T(o, [{
            key: "selectItem",
            value: function(r, i) {
              A(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "selectItem", this).call(this, r, i), r = r || this.defaultItem, this.label.innerHTML = r.innerHTML;
            }
          }]), o;
        }(v.default);
        m.default = e;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = function() {
          function v(p, h) {
            for (var a = 0; a < h.length; a++) {
              var t = h[a];
              t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(p, t.key, t);
            }
          }
          return function(p, h, a) {
            return h && v(p.prototype, h), a && v(p, a), p;
          };
        }();
        function A(v, p) {
          if (!(v instanceof p))
            throw new TypeError("Cannot call a class as a function");
        }
        var b = function() {
          function v(p, h) {
            var a = this;
            A(this, v), this.quill = p, this.boundsContainer = h || document.body, this.root = p.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function() {
              a.root.style.marginTop = -1 * a.quill.root.scrollTop + "px";
            }), this.hide();
          }
          return T(v, [{
            key: "hide",
            value: function() {
              this.root.classList.add("ql-hidden");
            }
          }, {
            key: "position",
            value: function(h) {
              var a = h.left + h.width / 2 - this.root.offsetWidth / 2, t = h.bottom + this.quill.root.scrollTop;
              this.root.style.left = a + "px", this.root.style.top = t + "px", this.root.classList.remove("ql-flip");
              var e = this.boundsContainer.getBoundingClientRect(), u = this.root.getBoundingClientRect(), o = 0;
              if (u.right > e.right && (o = e.right - u.right, this.root.style.left = a + o + "px"), u.left < e.left && (o = e.left - u.left, this.root.style.left = a + o + "px"), u.bottom > e.bottom) {
                var l = u.bottom - u.top, r = h.bottom - h.top + l;
                this.root.style.top = t - r + "px", this.root.classList.add("ql-flip");
              }
              return o;
            }
          }, {
            key: "show",
            value: function() {
              this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
            }
          }]), v;
        }();
        m.default = b;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = function() {
          function O(y, E) {
            var x = [], L = !0, M = !1, H = void 0;
            try {
              for (var K = y[Symbol.iterator](), J; !(L = (J = K.next()).done) && (x.push(J.value), !(E && x.length === E)); L = !0)
                ;
            } catch (U) {
              M = !0, H = U;
            } finally {
              try {
                !L && K.return && K.return();
              } finally {
                if (M)
                  throw H;
              }
            }
            return x;
          }
          return function(y, E) {
            if (Array.isArray(y))
              return y;
            if (Symbol.iterator in Object(y))
              return O(y, E);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), A = function O(y, E, x) {
          y === null && (y = Function.prototype);
          var L = Object.getOwnPropertyDescriptor(y, E);
          if (L === void 0) {
            var M = Object.getPrototypeOf(y);
            return M === null ? void 0 : O(M, E, x);
          } else {
            if ("value" in L)
              return L.value;
            var H = L.get;
            return H === void 0 ? void 0 : H.call(x);
          }
        }, b = function() {
          function O(y, E) {
            for (var x = 0; x < E.length; x++) {
              var L = E[x];
              L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(y, L.key, L);
            }
          }
          return function(y, E, x) {
            return E && O(y.prototype, E), x && O(y, x), y;
          };
        }(), v = d(3), p = c(v), h = d(8), a = c(h), t = d(43), e = c(t), u = d(27), o = c(u), l = d(15), r = d(41), i = c(r);
        function c(O) {
          return O && O.__esModule ? O : { default: O };
        }
        function n(O, y) {
          if (!(O instanceof y))
            throw new TypeError("Cannot call a class as a function");
        }
        function s(O, y) {
          if (!O)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return y && (typeof y == "object" || typeof y == "function") ? y : O;
        }
        function _(O, y) {
          if (typeof y != "function" && y !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof y);
          O.prototype = Object.create(y && y.prototype, { constructor: { value: O, enumerable: !1, writable: !0, configurable: !0 } }), y && (Object.setPrototypeOf ? Object.setPrototypeOf(O, y) : O.__proto__ = y);
        }
        var g = [[{ header: ["1", "2", "3", !1] }], ["bold", "italic", "underline", "link"], [{ list: "ordered" }, { list: "bullet" }], ["clean"]], w = function(O) {
          _(y, O);
          function y(E, x) {
            n(this, y), x.modules.toolbar != null && x.modules.toolbar.container == null && (x.modules.toolbar.container = g);
            var L = s(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, E, x));
            return L.quill.container.classList.add("ql-snow"), L;
          }
          return b(y, [{
            key: "extendToolbar",
            value: function(x) {
              x.container.classList.add("ql-snow"), this.buildButtons([].slice.call(x.container.querySelectorAll("button")), i.default), this.buildPickers([].slice.call(x.container.querySelectorAll("select")), i.default), this.tooltip = new P(this.quill, this.options.bounds), x.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({ key: "K", shortKey: !0 }, function(L, M) {
                x.handlers.link.call(x, !M.format.link);
              });
            }
          }]), y;
        }(e.default);
        w.DEFAULTS = (0, p.default)(!0, {}, e.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                link: function(y) {
                  if (y) {
                    var E = this.quill.getSelection();
                    if (E == null || E.length == 0)
                      return;
                    var x = this.quill.getText(E);
                    /^\S+@\S+\.\S+$/.test(x) && x.indexOf("mailto:") !== 0 && (x = "mailto:" + x);
                    var L = this.quill.theme.tooltip;
                    L.edit("link", x);
                  } else
                    this.quill.format("link", !1);
                }
              }
            }
          }
        });
        var P = function(O) {
          _(y, O);
          function y(E, x) {
            n(this, y);
            var L = s(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, E, x));
            return L.preview = L.root.querySelector("a.ql-preview"), L;
          }
          return b(y, [{
            key: "listen",
            value: function() {
              var x = this;
              A(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function(L) {
                x.root.classList.contains("ql-editing") ? x.save() : x.edit("link", x.preview.textContent), L.preventDefault();
              }), this.root.querySelector("a.ql-remove").addEventListener("click", function(L) {
                if (x.linkRange != null) {
                  var M = x.linkRange;
                  x.restoreFocus(), x.quill.formatText(M, "link", !1, a.default.sources.USER), delete x.linkRange;
                }
                L.preventDefault(), x.hide();
              }), this.quill.on(a.default.events.SELECTION_CHANGE, function(L, M, H) {
                if (L != null) {
                  if (L.length === 0 && H === a.default.sources.USER) {
                    var K = x.quill.scroll.descendant(o.default, L.index), J = T(K, 2), U = J[0], j = J[1];
                    if (U != null) {
                      x.linkRange = new l.Range(L.index - j, U.length());
                      var k = o.default.formats(U.domNode);
                      x.preview.textContent = k, x.preview.setAttribute("href", k), x.show(), x.position(x.quill.getBounds(x.linkRange));
                      return;
                    }
                  } else
                    delete x.linkRange;
                  x.hide();
                }
              });
            }
          }, {
            key: "show",
            value: function() {
              A(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "show", this).call(this), this.root.removeAttribute("data-mode");
            }
          }]), y;
        }(t.BaseTooltip);
        P.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), m.default = w;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = d(29), A = Q(T), b = d(36), v = d(38), p = d(64), h = d(65), a = Q(h), t = d(66), e = Q(t), u = d(67), o = Q(u), l = d(37), r = d(26), i = d(39), c = d(40), n = d(56), s = Q(n), _ = d(68), g = Q(_), w = d(27), P = Q(w), O = d(69), y = Q(O), E = d(70), x = Q(E), L = d(71), M = Q(L), H = d(72), K = Q(H), J = d(73), U = Q(J), j = d(13), k = Q(j), R = d(74), I = Q(R), z = d(75), C = Q(z), q = d(57), F = Q(q), $ = d(41), G = Q($), X = d(28), nt = Q(X), it = d(59), lt = Q(it), ft = d(60), ht = Q(ft), mt = d(61), gt = Q(mt), Z = d(108), Y = Q(Z), tt = d(62), et = Q(tt);
        function Q(st) {
          return st && st.__esModule ? st : { default: st };
        }
        A.default.register({
          "attributors/attribute/direction": v.DirectionAttribute,
          "attributors/class/align": b.AlignClass,
          "attributors/class/background": l.BackgroundClass,
          "attributors/class/color": r.ColorClass,
          "attributors/class/direction": v.DirectionClass,
          "attributors/class/font": i.FontClass,
          "attributors/class/size": c.SizeClass,
          "attributors/style/align": b.AlignStyle,
          "attributors/style/background": l.BackgroundStyle,
          "attributors/style/color": r.ColorStyle,
          "attributors/style/direction": v.DirectionStyle,
          "attributors/style/font": i.FontStyle,
          "attributors/style/size": c.SizeStyle
        }, !0), A.default.register({
          "formats/align": b.AlignClass,
          "formats/direction": v.DirectionClass,
          "formats/indent": p.IndentClass,
          "formats/background": l.BackgroundStyle,
          "formats/color": r.ColorStyle,
          "formats/font": i.FontClass,
          "formats/size": c.SizeClass,
          "formats/blockquote": a.default,
          "formats/code-block": k.default,
          "formats/header": e.default,
          "formats/list": o.default,
          "formats/bold": s.default,
          "formats/code": j.Code,
          "formats/italic": g.default,
          "formats/link": P.default,
          "formats/script": y.default,
          "formats/strike": x.default,
          "formats/underline": M.default,
          "formats/image": K.default,
          "formats/video": U.default,
          "formats/list/item": u.ListItem,
          "modules/formula": I.default,
          "modules/syntax": C.default,
          "modules/toolbar": F.default,
          "themes/bubble": Y.default,
          "themes/snow": et.default,
          "ui/icons": G.default,
          "ui/picker": nt.default,
          "ui/icon-picker": ht.default,
          "ui/color-picker": lt.default,
          "ui/tooltip": gt.default
        }, !0), m.default = A.default;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.IndentClass = void 0;
        var T = function() {
          function o(l, r) {
            for (var i = 0; i < r.length; i++) {
              var c = r[i];
              c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(l, c.key, c);
            }
          }
          return function(l, r, i) {
            return r && o(l.prototype, r), i && o(l, i), l;
          };
        }(), A = function o(l, r, i) {
          l === null && (l = Function.prototype);
          var c = Object.getOwnPropertyDescriptor(l, r);
          if (c === void 0) {
            var n = Object.getPrototypeOf(l);
            return n === null ? void 0 : o(n, r, i);
          } else {
            if ("value" in c)
              return c.value;
            var s = c.get;
            return s === void 0 ? void 0 : s.call(i);
          }
        }, b = d(0), v = p(b);
        function p(o) {
          return o && o.__esModule ? o : { default: o };
        }
        function h(o, l) {
          if (!(o instanceof l))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(o, l) {
          if (!o)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return l && (typeof l == "object" || typeof l == "function") ? l : o;
        }
        function t(o, l) {
          if (typeof l != "function" && l !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof l);
          o.prototype = Object.create(l && l.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(o, l) : o.__proto__ = l);
        }
        var e = function(o) {
          t(l, o);
          function l() {
            return h(this, l), a(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments));
          }
          return T(l, [{
            key: "add",
            value: function(i, c) {
              if (c === "+1" || c === "-1") {
                var n = this.value(i) || 0;
                c = c === "+1" ? n + 1 : n - 1;
              }
              return c === 0 ? (this.remove(i), !0) : A(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "add", this).call(this, i, c);
            }
          }, {
            key: "canAdd",
            value: function(i, c) {
              return A(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "canAdd", this).call(this, i, c) || A(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "canAdd", this).call(this, i, parseInt(c));
            }
          }, {
            key: "value",
            value: function(i) {
              return parseInt(A(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "value", this).call(this, i)) || void 0;
            }
          }]), l;
        }(v.default.Attributor.Class), u = new e("indent", "ql-indent", {
          scope: v.default.Scope.BLOCK,
          whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
        });
        m.IndentClass = u;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = d(4), A = b(T);
        function b(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function v(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function p(t, e) {
          if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function h(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        var a = function(t) {
          h(e, t);
          function e() {
            return v(this, e), p(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }
          return e;
        }(A.default);
        a.blotName = "blockquote", a.tagName = "blockquote", m.default = a;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = function() {
          function e(u, o) {
            for (var l = 0; l < o.length; l++) {
              var r = o[l];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(u, r.key, r);
            }
          }
          return function(u, o, l) {
            return o && e(u.prototype, o), l && e(u, l), u;
          };
        }(), A = d(4), b = v(A);
        function v(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function p(e, u) {
          if (!(e instanceof u))
            throw new TypeError("Cannot call a class as a function");
        }
        function h(e, u) {
          if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return u && (typeof u == "object" || typeof u == "function") ? u : e;
        }
        function a(e, u) {
          if (typeof u != "function" && u !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof u);
          e.prototype = Object.create(u && u.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), u && (Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : e.__proto__ = u);
        }
        var t = function(e) {
          a(u, e);
          function u() {
            return p(this, u), h(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments));
          }
          return T(u, null, [{
            key: "formats",
            value: function(l) {
              return this.tagName.indexOf(l.tagName) + 1;
            }
          }]), u;
        }(b.default);
        t.blotName = "header", t.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], m.default = t;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.default = m.ListItem = void 0;
        var T = function() {
          function n(s, _) {
            for (var g = 0; g < _.length; g++) {
              var w = _[g];
              w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(s, w.key, w);
            }
          }
          return function(s, _, g) {
            return _ && n(s.prototype, _), g && n(s, g), s;
          };
        }(), A = function n(s, _, g) {
          s === null && (s = Function.prototype);
          var w = Object.getOwnPropertyDescriptor(s, _);
          if (w === void 0) {
            var P = Object.getPrototypeOf(s);
            return P === null ? void 0 : n(P, _, g);
          } else {
            if ("value" in w)
              return w.value;
            var O = w.get;
            return O === void 0 ? void 0 : O.call(g);
          }
        }, b = d(0), v = e(b), p = d(4), h = e(p), a = d(25), t = e(a);
        function e(n) {
          return n && n.__esModule ? n : { default: n };
        }
        function u(n, s, _) {
          return s in n ? Object.defineProperty(n, s, { value: _, enumerable: !0, configurable: !0, writable: !0 }) : n[s] = _, n;
        }
        function o(n, s) {
          if (!(n instanceof s))
            throw new TypeError("Cannot call a class as a function");
        }
        function l(n, s) {
          if (!n)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return s && (typeof s == "object" || typeof s == "function") ? s : n;
        }
        function r(n, s) {
          if (typeof s != "function" && s !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof s);
          n.prototype = Object.create(s && s.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(n, s) : n.__proto__ = s);
        }
        var i = function(n) {
          r(s, n);
          function s() {
            return o(this, s), l(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
          }
          return T(s, [{
            key: "format",
            value: function(g, w) {
              g === c.blotName && !w ? this.replaceWith(v.default.create(this.statics.scope)) : A(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "format", this).call(this, g, w);
            }
          }, {
            key: "remove",
            value: function() {
              this.prev == null && this.next == null ? this.parent.remove() : A(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "remove", this).call(this);
            }
          }, {
            key: "replaceWith",
            value: function(g, w) {
              return this.parent.isolate(this.offset(this.parent), this.length()), g === this.parent.statics.blotName ? (this.parent.replaceWith(g, w), this) : (this.parent.unwrap(), A(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "replaceWith", this).call(this, g, w));
            }
          }], [{
            key: "formats",
            value: function(g) {
              return g.tagName === this.tagName ? void 0 : A(s.__proto__ || Object.getPrototypeOf(s), "formats", this).call(this, g);
            }
          }]), s;
        }(h.default);
        i.blotName = "list-item", i.tagName = "LI";
        var c = function(n) {
          r(s, n), T(s, null, [{
            key: "create",
            value: function(g) {
              var w = g === "ordered" ? "OL" : "UL", P = A(s.__proto__ || Object.getPrototypeOf(s), "create", this).call(this, w);
              return (g === "checked" || g === "unchecked") && P.setAttribute("data-checked", g === "checked"), P;
            }
          }, {
            key: "formats",
            value: function(g) {
              if (g.tagName === "OL")
                return "ordered";
              if (g.tagName === "UL")
                return g.hasAttribute("data-checked") ? g.getAttribute("data-checked") === "true" ? "checked" : "unchecked" : "bullet";
            }
          }]);
          function s(_) {
            o(this, s);
            var g = l(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, _)), w = function(O) {
              if (O.target.parentNode === _) {
                var y = g.statics.formats(_), E = v.default.find(O.target);
                y === "checked" ? E.format("list", "unchecked") : y === "unchecked" && E.format("list", "checked");
              }
            };
            return _.addEventListener("touchstart", w), _.addEventListener("mousedown", w), g;
          }
          return T(s, [{
            key: "format",
            value: function(g, w) {
              this.children.length > 0 && this.children.tail.format(g, w);
            }
          }, {
            key: "formats",
            value: function() {
              return u({}, this.statics.blotName, this.statics.formats(this.domNode));
            }
          }, {
            key: "insertBefore",
            value: function(g, w) {
              if (g instanceof i)
                A(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "insertBefore", this).call(this, g, w);
              else {
                var P = w == null ? this.length() : w.offset(this), O = this.split(P);
                O.parent.insertBefore(g, O);
              }
            }
          }, {
            key: "optimize",
            value: function(g) {
              A(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "optimize", this).call(this, g);
              var w = this.next;
              w != null && w.prev === this && w.statics.blotName === this.statics.blotName && w.domNode.tagName === this.domNode.tagName && w.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (w.moveChildren(this), w.remove());
            }
          }, {
            key: "replace",
            value: function(g) {
              if (g.statics.blotName !== this.statics.blotName) {
                var w = v.default.create(this.statics.defaultChild);
                g.moveChildren(w), this.appendChild(w);
              }
              A(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "replace", this).call(this, g);
            }
          }]), s;
        }(t.default);
        c.blotName = "list", c.scope = v.default.Scope.BLOCK_BLOT, c.tagName = ["OL", "UL"], c.defaultChild = "list-item", c.allowedChildren = [i], m.ListItem = i, m.default = c;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = d(56), A = b(T);
        function b(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function v(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function p(t, e) {
          if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function h(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        var a = function(t) {
          h(e, t);
          function e() {
            return v(this, e), p(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }
          return e;
        }(A.default);
        a.blotName = "italic", a.tagName = ["EM", "I"], m.default = a;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = function() {
          function u(o, l) {
            for (var r = 0; r < l.length; r++) {
              var i = l[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, i.key, i);
            }
          }
          return function(o, l, r) {
            return l && u(o.prototype, l), r && u(o, r), o;
          };
        }(), A = function u(o, l, r) {
          o === null && (o = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(o, l);
          if (i === void 0) {
            var c = Object.getPrototypeOf(o);
            return c === null ? void 0 : u(c, l, r);
          } else {
            if ("value" in i)
              return i.value;
            var n = i.get;
            return n === void 0 ? void 0 : n.call(r);
          }
        }, b = d(6), v = p(b);
        function p(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function h(u, o) {
          if (!(u instanceof o))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(u, o) {
          if (!u)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return o && (typeof o == "object" || typeof o == "function") ? o : u;
        }
        function t(u, o) {
          if (typeof o != "function" && o !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof o);
          u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
        }
        var e = function(u) {
          t(o, u);
          function o() {
            return h(this, o), a(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
          }
          return T(o, null, [{
            key: "create",
            value: function(r) {
              return r === "super" ? document.createElement("sup") : r === "sub" ? document.createElement("sub") : A(o.__proto__ || Object.getPrototypeOf(o), "create", this).call(this, r);
            }
          }, {
            key: "formats",
            value: function(r) {
              if (r.tagName === "SUB")
                return "sub";
              if (r.tagName === "SUP")
                return "super";
            }
          }]), o;
        }(v.default);
        e.blotName = "script", e.tagName = ["SUB", "SUP"], m.default = e;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = d(6), A = b(T);
        function b(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function v(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function p(t, e) {
          if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function h(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        var a = function(t) {
          h(e, t);
          function e() {
            return v(this, e), p(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }
          return e;
        }(A.default);
        a.blotName = "strike", a.tagName = "S", m.default = a;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = d(6), A = b(T);
        function b(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function v(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function p(t, e) {
          if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function h(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        var a = function(t) {
          h(e, t);
          function e() {
            return v(this, e), p(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }
          return e;
        }(A.default);
        a.blotName = "underline", a.tagName = "U", m.default = a;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = function() {
          function l(r, i) {
            for (var c = 0; c < i.length; c++) {
              var n = i[c];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, c) {
            return i && l(r.prototype, i), c && l(r, c), r;
          };
        }(), A = function l(r, i, c) {
          r === null && (r = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(r, i);
          if (n === void 0) {
            var s = Object.getPrototypeOf(r);
            return s === null ? void 0 : l(s, i, c);
          } else {
            if ("value" in n)
              return n.value;
            var _ = n.get;
            return _ === void 0 ? void 0 : _.call(c);
          }
        }, b = d(0), v = h(b), p = d(27);
        function h(l) {
          return l && l.__esModule ? l : { default: l };
        }
        function a(l, r) {
          if (!(l instanceof r))
            throw new TypeError("Cannot call a class as a function");
        }
        function t(l, r) {
          if (!l)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return r && (typeof r == "object" || typeof r == "function") ? r : l;
        }
        function e(l, r) {
          if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof r);
          l.prototype = Object.create(r && r.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(l, r) : l.__proto__ = r);
        }
        var u = ["alt", "height", "width"], o = function(l) {
          e(r, l);
          function r() {
            return a(this, r), t(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
          }
          return T(r, [{
            key: "format",
            value: function(c, n) {
              u.indexOf(c) > -1 ? n ? this.domNode.setAttribute(c, n) : this.domNode.removeAttribute(c) : A(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "format", this).call(this, c, n);
            }
          }], [{
            key: "create",
            value: function(c) {
              var n = A(r.__proto__ || Object.getPrototypeOf(r), "create", this).call(this, c);
              return typeof c == "string" && n.setAttribute("src", this.sanitize(c)), n;
            }
          }, {
            key: "formats",
            value: function(c) {
              return u.reduce(function(n, s) {
                return c.hasAttribute(s) && (n[s] = c.getAttribute(s)), n;
              }, {});
            }
          }, {
            key: "match",
            value: function(c) {
              return /\.(jpe?g|gif|png)$/.test(c) || /^data:image\/.+;base64/.test(c);
            }
          }, {
            key: "sanitize",
            value: function(c) {
              return (0, p.sanitize)(c, ["http", "https", "data"]) ? c : "//:0";
            }
          }, {
            key: "value",
            value: function(c) {
              return c.getAttribute("src");
            }
          }]), r;
        }(v.default.Embed);
        o.blotName = "image", o.tagName = "IMG", m.default = o;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var T = function() {
          function l(r, i) {
            for (var c = 0; c < i.length; c++) {
              var n = i[c];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, c) {
            return i && l(r.prototype, i), c && l(r, c), r;
          };
        }(), A = function l(r, i, c) {
          r === null && (r = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(r, i);
          if (n === void 0) {
            var s = Object.getPrototypeOf(r);
            return s === null ? void 0 : l(s, i, c);
          } else {
            if ("value" in n)
              return n.value;
            var _ = n.get;
            return _ === void 0 ? void 0 : _.call(c);
          }
        }, b = d(4), v = d(27), p = h(v);
        function h(l) {
          return l && l.__esModule ? l : { default: l };
        }
        function a(l, r) {
          if (!(l instanceof r))
            throw new TypeError("Cannot call a class as a function");
        }
        function t(l, r) {
          if (!l)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return r && (typeof r == "object" || typeof r == "function") ? r : l;
        }
        function e(l, r) {
          if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof r);
          l.prototype = Object.create(r && r.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(l, r) : l.__proto__ = r);
        }
        var u = ["height", "width"], o = function(l) {
          e(r, l);
          function r() {
            return a(this, r), t(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
          }
          return T(r, [{
            key: "format",
            value: function(c, n) {
              u.indexOf(c) > -1 ? n ? this.domNode.setAttribute(c, n) : this.domNode.removeAttribute(c) : A(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "format", this).call(this, c, n);
            }
          }], [{
            key: "create",
            value: function(c) {
              var n = A(r.__proto__ || Object.getPrototypeOf(r), "create", this).call(this, c);
              return n.setAttribute("frameborder", "0"), n.setAttribute("allowfullscreen", !0), n.setAttribute("src", this.sanitize(c)), n;
            }
          }, {
            key: "formats",
            value: function(c) {
              return u.reduce(function(n, s) {
                return c.hasAttribute(s) && (n[s] = c.getAttribute(s)), n;
              }, {});
            }
          }, {
            key: "sanitize",
            value: function(c) {
              return p.default.sanitize(c);
            }
          }, {
            key: "value",
            value: function(c) {
              return c.getAttribute("src");
            }
          }]), r;
        }(b.BlockEmbed);
        o.blotName = "video", o.className = "ql-video", o.tagName = "IFRAME", m.default = o;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.default = m.FormulaBlot = void 0;
        var T = function() {
          function c(n, s) {
            for (var _ = 0; _ < s.length; _++) {
              var g = s[_];
              g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(n, g.key, g);
            }
          }
          return function(n, s, _) {
            return s && c(n.prototype, s), _ && c(n, _), n;
          };
        }(), A = function c(n, s, _) {
          n === null && (n = Function.prototype);
          var g = Object.getOwnPropertyDescriptor(n, s);
          if (g === void 0) {
            var w = Object.getPrototypeOf(n);
            return w === null ? void 0 : c(w, s, _);
          } else {
            if ("value" in g)
              return g.value;
            var P = g.get;
            return P === void 0 ? void 0 : P.call(_);
          }
        }, b = d(35), v = e(b), p = d(5), h = e(p), a = d(9), t = e(a);
        function e(c) {
          return c && c.__esModule ? c : { default: c };
        }
        function u(c, n) {
          if (!(c instanceof n))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(c, n) {
          if (!c)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return n && (typeof n == "object" || typeof n == "function") ? n : c;
        }
        function l(c, n) {
          if (typeof n != "function" && n !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof n);
          c.prototype = Object.create(n && n.prototype, { constructor: { value: c, enumerable: !1, writable: !0, configurable: !0 } }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(c, n) : c.__proto__ = n);
        }
        var r = function(c) {
          l(n, c);
          function n() {
            return u(this, n), o(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
          }
          return T(n, null, [{
            key: "create",
            value: function(_) {
              var g = A(n.__proto__ || Object.getPrototypeOf(n), "create", this).call(this, _);
              return typeof _ == "string" && (window.katex.render(_, g, {
                throwOnError: !1,
                errorColor: "#f00"
              }), g.setAttribute("data-value", _)), g;
            }
          }, {
            key: "value",
            value: function(_) {
              return _.getAttribute("data-value");
            }
          }]), n;
        }(v.default);
        r.blotName = "formula", r.className = "ql-formula", r.tagName = "SPAN";
        var i = function(c) {
          l(n, c), T(n, null, [{
            key: "register",
            value: function() {
              h.default.register(r, !0);
            }
          }]);
          function n() {
            u(this, n);
            var s = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            if (window.katex == null)
              throw new Error("Formula module requires KaTeX.");
            return s;
          }
          return n;
        }(t.default);
        m.FormulaBlot = r, m.default = i;
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.default = m.CodeToken = m.CodeBlock = void 0;
        var T = function() {
          function _(g, w) {
            for (var P = 0; P < w.length; P++) {
              var O = w[P];
              O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(g, O.key, O);
            }
          }
          return function(g, w, P) {
            return w && _(g.prototype, w), P && _(g, P), g;
          };
        }(), A = function _(g, w, P) {
          g === null && (g = Function.prototype);
          var O = Object.getOwnPropertyDescriptor(g, w);
          if (O === void 0) {
            var y = Object.getPrototypeOf(g);
            return y === null ? void 0 : _(y, w, P);
          } else {
            if ("value" in O)
              return O.value;
            var E = O.get;
            return E === void 0 ? void 0 : E.call(P);
          }
        }, b = d(0), v = o(b), p = d(5), h = o(p), a = d(9), t = o(a), e = d(13), u = o(e);
        function o(_) {
          return _ && _.__esModule ? _ : { default: _ };
        }
        function l(_, g) {
          if (!(_ instanceof g))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(_, g) {
          if (!_)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return g && (typeof g == "object" || typeof g == "function") ? g : _;
        }
        function i(_, g) {
          if (typeof g != "function" && g !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof g);
          _.prototype = Object.create(g && g.prototype, { constructor: { value: _, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(_, g) : _.__proto__ = g);
        }
        var c = function(_) {
          i(g, _);
          function g() {
            return l(this, g), r(this, (g.__proto__ || Object.getPrototypeOf(g)).apply(this, arguments));
          }
          return T(g, [{
            key: "replaceWith",
            value: function(P) {
              this.domNode.textContent = this.domNode.textContent, this.attach(), A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "replaceWith", this).call(this, P);
            }
          }, {
            key: "highlight",
            value: function(P) {
              var O = this.domNode.textContent;
              this.cachedText !== O && ((O.trim().length > 0 || this.cachedText == null) && (this.domNode.innerHTML = P(O), this.domNode.normalize(), this.attach()), this.cachedText = O);
            }
          }]), g;
        }(u.default);
        c.className = "ql-syntax";
        var n = new v.default.Attributor.Class("token", "hljs", {
          scope: v.default.Scope.INLINE
        }), s = function(_) {
          i(g, _), T(g, null, [{
            key: "register",
            value: function() {
              h.default.register(n, !0), h.default.register(c, !0);
            }
          }]);
          function g(w, P) {
            l(this, g);
            var O = r(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this, w, P));
            if (typeof O.options.highlight != "function")
              throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
            var y = null;
            return O.quill.on(h.default.events.SCROLL_OPTIMIZE, function() {
              clearTimeout(y), y = setTimeout(function() {
                O.highlight(), y = null;
              }, O.options.interval);
            }), O.highlight(), O;
          }
          return T(g, [{
            key: "highlight",
            value: function() {
              var P = this;
              if (!this.quill.selection.composing) {
                this.quill.update(h.default.sources.USER);
                var O = this.quill.getSelection();
                this.quill.scroll.descendants(c).forEach(function(y) {
                  y.highlight(P.options.highlight);
                }), this.quill.update(h.default.sources.SILENT), O != null && this.quill.setSelection(O, h.default.sources.SILENT);
              }
            }
          }]), g;
        }(t.default);
        s.DEFAULTS = {
          highlight: function() {
            return window.hljs == null ? null : function(_) {
              var g = window.hljs.highlightAuto(_);
              return g.value;
            };
          }(),
          interval: 1e3
        }, m.CodeBlock = c, m.CodeToken = n, m.default = s;
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
      },
      function(S, m) {
        S.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
      },
      function(S, m) {
        S.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
      },
      function(S, m) {
        S.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
      },
      function(S, m, d) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        }), m.default = m.BubbleTooltip = void 0;
        var T = function g(w, P, O) {
          w === null && (w = Function.prototype);
          var y = Object.getOwnPropertyDescriptor(w, P);
          if (y === void 0) {
            var E = Object.getPrototypeOf(w);
            return E === null ? void 0 : g(E, P, O);
          } else {
            if ("value" in y)
              return y.value;
            var x = y.get;
            return x === void 0 ? void 0 : x.call(O);
          }
        }, A = function() {
          function g(w, P) {
            for (var O = 0; O < P.length; O++) {
              var y = P[O];
              y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(w, y.key, y);
            }
          }
          return function(w, P, O) {
            return P && g(w.prototype, P), O && g(w, O), w;
          };
        }(), b = d(3), v = l(b), p = d(8), h = l(p), a = d(43), t = l(a), e = d(15), u = d(41), o = l(u);
        function l(g) {
          return g && g.__esModule ? g : { default: g };
        }
        function r(g, w) {
          if (!(g instanceof w))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(g, w) {
          if (!g)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return w && (typeof w == "object" || typeof w == "function") ? w : g;
        }
        function c(g, w) {
          if (typeof w != "function" && w !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof w);
          g.prototype = Object.create(w && w.prototype, { constructor: { value: g, enumerable: !1, writable: !0, configurable: !0 } }), w && (Object.setPrototypeOf ? Object.setPrototypeOf(g, w) : g.__proto__ = w);
        }
        var n = [["bold", "italic", "link"], [{ header: 1 }, { header: 2 }, "blockquote"]], s = function(g) {
          c(w, g);
          function w(P, O) {
            r(this, w), O.modules.toolbar != null && O.modules.toolbar.container == null && (O.modules.toolbar.container = n);
            var y = i(this, (w.__proto__ || Object.getPrototypeOf(w)).call(this, P, O));
            return y.quill.container.classList.add("ql-bubble"), y;
          }
          return A(w, [{
            key: "extendToolbar",
            value: function(O) {
              this.tooltip = new _(this.quill, this.options.bounds), this.tooltip.root.appendChild(O.container), this.buildButtons([].slice.call(O.container.querySelectorAll("button")), o.default), this.buildPickers([].slice.call(O.container.querySelectorAll("select")), o.default);
            }
          }]), w;
        }(t.default);
        s.DEFAULTS = (0, v.default)(!0, {}, t.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                link: function(w) {
                  w ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1);
                }
              }
            }
          }
        });
        var _ = function(g) {
          c(w, g);
          function w(P, O) {
            r(this, w);
            var y = i(this, (w.__proto__ || Object.getPrototypeOf(w)).call(this, P, O));
            return y.quill.on(h.default.events.EDITOR_CHANGE, function(E, x, L, M) {
              if (E === h.default.events.SELECTION_CHANGE)
                if (x != null && x.length > 0 && M === h.default.sources.USER) {
                  y.show(), y.root.style.left = "0px", y.root.style.width = "", y.root.style.width = y.root.offsetWidth + "px";
                  var H = y.quill.getLines(x.index, x.length);
                  if (H.length === 1)
                    y.position(y.quill.getBounds(x));
                  else {
                    var K = H[H.length - 1], J = y.quill.getIndex(K), U = Math.min(K.length() - 1, x.index + x.length - J), j = y.quill.getBounds(new e.Range(J, U));
                    y.position(j);
                  }
                } else
                  document.activeElement !== y.textbox && y.quill.hasFocus() && y.hide();
            }), y;
          }
          return A(w, [{
            key: "listen",
            value: function() {
              var O = this;
              T(w.prototype.__proto__ || Object.getPrototypeOf(w.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function() {
                O.root.classList.remove("ql-editing");
              }), this.quill.on(h.default.events.SCROLL_OPTIMIZE, function() {
                setTimeout(function() {
                  if (!O.root.classList.contains("ql-hidden")) {
                    var y = O.quill.getSelection();
                    y != null && O.position(O.quill.getBounds(y));
                  }
                }, 1);
              });
            }
          }, {
            key: "cancel",
            value: function() {
              this.show();
            }
          }, {
            key: "position",
            value: function(O) {
              var y = T(w.prototype.__proto__ || Object.getPrototypeOf(w.prototype), "position", this).call(this, O), E = this.root.querySelector(".ql-tooltip-arrow");
              if (E.style.marginLeft = "", y === 0)
                return y;
              E.style.marginLeft = -1 * y - E.offsetWidth / 2 + "px";
            }
          }]), w;
        }(a.BaseTooltip);
        _.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), m.BubbleTooltip = _, m.default = s;
      },
      function(S, m, d) {
        S.exports = d(63);
      }
    ]).default;
  });
})(Hn);
const Nn = /* @__PURE__ */ Un(Hn.exports);
var xn = { exports: {} }, Ct = -1, It = 1, Lt = 0;
function Oe(D, W, S, m) {
  if (D === W)
    return D ? [[Lt, D]] : [];
  if (S != null) {
    var d = ir(D, W, S);
    if (d)
      return d;
  }
  var T = qn(D, W), A = D.substring(0, T);
  D = D.substring(T), W = W.substring(T), T = jn(D, W);
  var b = D.substring(D.length - T);
  D = D.substring(0, D.length - T), W = W.substring(0, W.length - T);
  var v = tr(D, W);
  return A && v.unshift([Lt, A]), b && v.push([Lt, b]), zn(v, m), v;
}
function tr(D, W) {
  var S;
  if (!D)
    return [[It, W]];
  if (!W)
    return [[Ct, D]];
  var m = D.length > W.length ? D : W, d = D.length > W.length ? W : D, T = m.indexOf(d);
  if (T !== -1)
    return S = [
      [It, m.substring(0, T)],
      [Lt, d],
      [It, m.substring(T + d.length)]
    ], D.length > W.length && (S[0][0] = S[2][0] = Ct), S;
  if (d.length === 1)
    return [[Ct, D], [It, W]];
  var A = nr(D, W);
  if (A) {
    var b = A[0], v = A[1], p = A[2], h = A[3], a = A[4], t = Oe(b, p), e = Oe(v, h);
    return t.concat([[Lt, a]], e);
  }
  return er(D, W);
}
function er(D, W) {
  for (var S = D.length, m = W.length, d = Math.ceil((S + m) / 2), T = d, A = 2 * d, b = new Array(A), v = new Array(A), p = 0; p < A; p++)
    b[p] = -1, v[p] = -1;
  b[T + 1] = 0, v[T + 1] = 0;
  for (var h = S - m, a = h % 2 !== 0, t = 0, e = 0, u = 0, o = 0, l = 0; l < d; l++) {
    for (var r = -l + t; r <= l - e; r += 2) {
      var i = T + r, c;
      r === -l || r !== l && b[i - 1] < b[i + 1] ? c = b[i + 1] : c = b[i - 1] + 1;
      for (var n = c - r; c < S && n < m && D.charAt(c) === W.charAt(n); )
        c++, n++;
      if (b[i] = c, c > S)
        e += 2;
      else if (n > m)
        t += 2;
      else if (a) {
        var s = T + h - r;
        if (s >= 0 && s < A && v[s] !== -1) {
          var _ = S - v[s];
          if (c >= _)
            return Bn(D, W, c, n);
        }
      }
    }
    for (var g = -l + u; g <= l - o; g += 2) {
      var s = T + g, _;
      g === -l || g !== l && v[s - 1] < v[s + 1] ? _ = v[s + 1] : _ = v[s - 1] + 1;
      for (var w = _ - g; _ < S && w < m && D.charAt(S - _ - 1) === W.charAt(m - w - 1); )
        _++, w++;
      if (v[s] = _, _ > S)
        o += 2;
      else if (w > m)
        u += 2;
      else if (!a) {
        var i = T + h - g;
        if (i >= 0 && i < A && b[i] !== -1) {
          var c = b[i], n = T + c - i;
          if (_ = S - _, c >= _)
            return Bn(D, W, c, n);
        }
      }
    }
  }
  return [[Ct, D], [It, W]];
}
function Bn(D, W, S, m) {
  var d = D.substring(0, S), T = W.substring(0, m), A = D.substring(S), b = W.substring(m), v = Oe(d, T), p = Oe(A, b);
  return v.concat(p);
}
function qn(D, W) {
  if (!D || !W || D.charAt(0) !== W.charAt(0))
    return 0;
  for (var S = 0, m = Math.min(D.length, W.length), d = m, T = 0; S < d; )
    D.substring(T, d) == W.substring(T, d) ? (S = d, T = S) : m = d, d = Math.floor((m - S) / 2 + S);
  return Kn(D.charCodeAt(d - 1)) && d--, d;
}
function jn(D, W) {
  if (!D || !W || D.slice(-1) !== W.slice(-1))
    return 0;
  for (var S = 0, m = Math.min(D.length, W.length), d = m, T = 0; S < d; )
    D.substring(D.length - d, D.length - T) == W.substring(W.length - d, W.length - T) ? (S = d, T = S) : m = d, d = Math.floor((m - S) / 2 + S);
  return $n(D.charCodeAt(D.length - d)) && d--, d;
}
function nr(D, W) {
  var S = D.length > W.length ? D : W, m = D.length > W.length ? W : D;
  if (S.length < 4 || m.length * 2 < S.length)
    return null;
  function d(e, u, o) {
    for (var l = e.substring(o, o + Math.floor(e.length / 4)), r = -1, i = "", c, n, s, _; (r = u.indexOf(l, r + 1)) !== -1; ) {
      var g = qn(
        e.substring(o),
        u.substring(r)
      ), w = jn(
        e.substring(0, o),
        u.substring(0, r)
      );
      i.length < w + g && (i = u.substring(
        r - w,
        r
      ) + u.substring(r, r + g), c = e.substring(0, o - w), n = e.substring(o + g), s = u.substring(0, r - w), _ = u.substring(r + g));
    }
    return i.length * 2 >= e.length ? [
      c,
      n,
      s,
      _,
      i
    ] : null;
  }
  var T = d(S, m, Math.ceil(S.length / 4)), A = d(S, m, Math.ceil(S.length / 2)), b;
  if (!T && !A)
    return null;
  A ? T ? b = T[4].length > A[4].length ? T : A : b = A : b = T;
  var v, p, h, a;
  D.length > W.length ? (v = b[0], p = b[1], h = b[2], a = b[3]) : (h = b[0], a = b[1], v = b[2], p = b[3]);
  var t = b[4];
  return [v, p, h, a, t];
}
function zn(D, W) {
  D.push([Lt, ""]);
  for (var S = 0, m = 0, d = 0, T = "", A = "", b; S < D.length; ) {
    if (S < D.length - 1 && !D[S][1]) {
      D.splice(S, 1);
      continue;
    }
    switch (D[S][0]) {
      case It:
        d++, A += D[S][1], S++;
        break;
      case Ct:
        m++, T += D[S][1], S++;
        break;
      case Lt:
        var v = S - d - m - 1;
        if (W) {
          if (v >= 0 && Vn(D[v][1])) {
            var p = D[v][1].slice(-1);
            if (D[v][1] = D[v][1].slice(0, -1), T = p + T, A = p + A, !D[v][1]) {
              D.splice(v, 1), S--;
              var h = v - 1;
              D[h] && D[h][0] === It && (d++, A = D[h][1] + A, h--), D[h] && D[h][0] === Ct && (m++, T = D[h][1] + T, h--), v = h;
            }
          }
          if (Gn(D[S][1])) {
            var p = D[S][1].charAt(0);
            D[S][1] = D[S][1].slice(1), T += p, A += p;
          }
        }
        if (S < D.length - 1 && !D[S][1]) {
          D.splice(S, 1);
          break;
        }
        if (T.length > 0 || A.length > 0) {
          T.length > 0 && A.length > 0 && (b = qn(A, T), b !== 0 && (v >= 0 ? D[v][1] += A.substring(0, b) : (D.splice(0, 0, [Lt, A.substring(0, b)]), S++), A = A.substring(b), T = T.substring(b)), b = jn(A, T), b !== 0 && (D[S][1] = A.substring(A.length - b) + D[S][1], A = A.substring(0, A.length - b), T = T.substring(0, T.length - b)));
          var a = d + m;
          T.length === 0 && A.length === 0 ? (D.splice(S - a, a), S = S - a) : T.length === 0 ? (D.splice(S - a, a, [It, A]), S = S - a + 1) : A.length === 0 ? (D.splice(S - a, a, [Ct, T]), S = S - a + 1) : (D.splice(S - a, a, [Ct, T], [It, A]), S = S - a + 2);
        }
        S !== 0 && D[S - 1][0] === Lt ? (D[S - 1][1] += D[S][1], D.splice(S, 1)) : S++, d = 0, m = 0, T = "", A = "";
        break;
    }
  }
  D[D.length - 1][1] === "" && D.pop();
  var t = !1;
  for (S = 1; S < D.length - 1; )
    D[S - 1][0] === Lt && D[S + 1][0] === Lt && (D[S][1].substring(D[S][1].length - D[S - 1][1].length) === D[S - 1][1] ? (D[S][1] = D[S - 1][1] + D[S][1].substring(0, D[S][1].length - D[S - 1][1].length), D[S + 1][1] = D[S - 1][1] + D[S + 1][1], D.splice(S - 1, 1), t = !0) : D[S][1].substring(0, D[S + 1][1].length) == D[S + 1][1] && (D[S - 1][1] += D[S + 1][1], D[S][1] = D[S][1].substring(D[S + 1][1].length) + D[S + 1][1], D.splice(S + 1, 1), t = !0)), S++;
  t && zn(D, W);
}
function Kn(D) {
  return D >= 55296 && D <= 56319;
}
function $n(D) {
  return D >= 56320 && D <= 57343;
}
function Gn(D) {
  return $n(D.charCodeAt(0));
}
function Vn(D) {
  return Kn(D.charCodeAt(D.length - 1));
}
function rr(D) {
  for (var W = [], S = 0; S < D.length; S++)
    D[S][1].length > 0 && W.push(D[S]);
  return W;
}
function Sn(D, W, S, m) {
  return Vn(D) || Gn(m) ? null : rr([
    [Lt, D],
    [Ct, W],
    [It, S],
    [Lt, m]
  ]);
}
function ir(D, W, S) {
  var m = typeof S == "number" ? { index: S, length: 0 } : S.oldRange, d = typeof S == "number" ? null : S.newRange, T = D.length, A = W.length;
  if (m.length === 0 && (d === null || d.length === 0)) {
    var b = m.index, v = D.slice(0, b), p = D.slice(b), h = d ? d.index : null;
    t: {
      var a = b + A - T;
      if (h !== null && h !== a || a < 0 || a > A)
        break t;
      var t = W.slice(0, a), e = W.slice(a);
      if (e !== p)
        break t;
      var u = Math.min(b, a), o = v.slice(0, u), l = t.slice(0, u);
      if (o !== l)
        break t;
      var r = v.slice(u), i = t.slice(u);
      return Sn(o, r, i, p);
    }
    t: {
      if (h !== null && h !== b)
        break t;
      var c = b, t = W.slice(0, c), e = W.slice(c);
      if (t !== v)
        break t;
      var n = Math.min(T - c, A - c), s = p.slice(p.length - n), _ = e.slice(e.length - n);
      if (s !== _)
        break t;
      var r = p.slice(0, p.length - n), i = e.slice(0, e.length - n);
      return Sn(v, r, i, s);
    }
  }
  if (m.length > 0 && d && d.length === 0) {
    t: {
      var o = D.slice(0, m.index), s = D.slice(m.index + m.length), u = o.length, n = s.length;
      if (A < u + n)
        break t;
      var l = W.slice(0, u), _ = W.slice(A - n);
      if (o !== l || s !== _)
        break t;
      var r = D.slice(u, T - n), i = W.slice(u, A - n);
      return Sn(o, r, i, s);
    }
  }
  return null;
}
function Ce(D, W, S) {
  return Oe(D, W, S, !0);
}
Ce.INSERT = It;
Ce.DELETE = Ct;
Ce.EQUAL = Lt;
var or = Ce, De = { exports: {} };
(function(D, W) {
  var S = 200, m = "__lodash_hash_undefined__", d = 9007199254740991, T = "[object Arguments]", A = "[object Array]", b = "[object Boolean]", v = "[object Date]", p = "[object Error]", h = "[object Function]", a = "[object GeneratorFunction]", t = "[object Map]", e = "[object Number]", u = "[object Object]", o = "[object Promise]", l = "[object RegExp]", r = "[object Set]", i = "[object String]", c = "[object Symbol]", n = "[object WeakMap]", s = "[object ArrayBuffer]", _ = "[object DataView]", g = "[object Float32Array]", w = "[object Float64Array]", P = "[object Int8Array]", O = "[object Int16Array]", y = "[object Int32Array]", E = "[object Uint8Array]", x = "[object Uint8ClampedArray]", L = "[object Uint16Array]", M = "[object Uint32Array]", H = /[\\^$.*+?()[\]{}|]/g, K = /\w*$/, J = /^\[object .+?Constructor\]$/, U = /^(?:0|[1-9]\d*)$/, j = {};
  j[T] = j[A] = j[s] = j[_] = j[b] = j[v] = j[g] = j[w] = j[P] = j[O] = j[y] = j[t] = j[e] = j[u] = j[l] = j[r] = j[i] = j[c] = j[E] = j[x] = j[L] = j[M] = !0, j[p] = j[h] = j[n] = !1;
  var k = typeof Kt == "object" && Kt && Kt.Object === Object && Kt, R = typeof self == "object" && self && self.Object === Object && self, I = k || R || Function("return this")(), z = W && !W.nodeType && W, C = z && !0 && D && !D.nodeType && D, q = C && C.exports === z;
  function F(f, N) {
    return f.set(N[0], N[1]), f;
  }
  function $(f, N) {
    return f.add(N), f;
  }
  function G(f, N) {
    for (var B = -1, V = f ? f.length : 0; ++B < V && N(f[B], B, f) !== !1; )
      ;
    return f;
  }
  function X(f, N) {
    for (var B = -1, V = N.length, ut = f.length; ++B < V; )
      f[ut + B] = N[B];
    return f;
  }
  function nt(f, N, B, V) {
    var ut = -1, rt = f ? f.length : 0;
    for (V && rt && (B = f[++ut]); ++ut < rt; )
      B = N(B, f[ut], ut, f);
    return B;
  }
  function it(f, N) {
    for (var B = -1, V = Array(f); ++B < f; )
      V[B] = N(B);
    return V;
  }
  function lt(f, N) {
    return f == null ? void 0 : f[N];
  }
  function ft(f) {
    var N = !1;
    if (f != null && typeof f.toString != "function")
      try {
        N = !!(f + "");
      } catch {
      }
    return N;
  }
  function ht(f) {
    var N = -1, B = Array(f.size);
    return f.forEach(function(V, ut) {
      B[++N] = [ut, V];
    }), B;
  }
  function mt(f, N) {
    return function(B) {
      return f(N(B));
    };
  }
  function gt(f) {
    var N = -1, B = Array(f.size);
    return f.forEach(function(V) {
      B[++N] = V;
    }), B;
  }
  var Z = Array.prototype, Y = Function.prototype, tt = Object.prototype, et = I["__core-js_shared__"], Q = function() {
    var f = /[^.]+$/.exec(et && et.keys && et.keys.IE_PROTO || "");
    return f ? "Symbol(src)_1." + f : "";
  }(), st = Y.toString, ot = tt.hasOwnProperty, at = tt.toString, wt = RegExp(
    "^" + st.call(ot).replace(H, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ot = q ? I.Buffer : void 0, pt = I.Symbol, Vt = I.Uint8Array, dt = mt(Object.getPrototypeOf, Object), qt = Object.create, Ee = tt.propertyIsEnumerable, Ue = Z.splice, ue = Object.getOwnPropertySymbols, te = Ot ? Ot.isBuffer : void 0, Ae = mt(Object.keys, Object), ee = Rt(I, "DataView"), Zt = Rt(I, "Map"), jt = Rt(I, "Promise"), ne = Rt(I, "Set"), se = Rt(I, "WeakMap"), Wt = Rt(Object, "create"), fe = St(ee), Yt = St(Zt), ce = St(jt), he = St(ne), de = St(se), $t = pt ? pt.prototype : void 0, we = $t ? $t.valueOf : void 0;
  function Ft(f) {
    var N = -1, B = f ? f.length : 0;
    for (this.clear(); ++N < B; ) {
      var V = f[N];
      this.set(V[0], V[1]);
    }
  }
  function He() {
    this.__data__ = Wt ? Wt(null) : {};
  }
  function ze(f) {
    return this.has(f) && delete this.__data__[f];
  }
  function Ke(f) {
    var N = this.__data__;
    if (Wt) {
      var B = N[f];
      return B === m ? void 0 : B;
    }
    return ot.call(N, f) ? N[f] : void 0;
  }
  function Te(f) {
    var N = this.__data__;
    return Wt ? N[f] !== void 0 : ot.call(N, f);
  }
  function ve(f, N) {
    var B = this.__data__;
    return B[f] = Wt && N === void 0 ? m : N, this;
  }
  Ft.prototype.clear = He, Ft.prototype.delete = ze, Ft.prototype.get = Ke, Ft.prototype.has = Te, Ft.prototype.set = ve;
  function Et(f) {
    var N = -1, B = f ? f.length : 0;
    for (this.clear(); ++N < B; ) {
      var V = f[N];
      this.set(V[0], V[1]);
    }
  }
  function $e() {
    this.__data__ = [];
  }
  function Ge(f) {
    var N = this.__data__, B = ie(N, f);
    if (B < 0)
      return !1;
    var V = N.length - 1;
    return B == V ? N.pop() : Ue.call(N, B, 1), !0;
  }
  function Ve(f) {
    var N = this.__data__, B = ie(N, f);
    return B < 0 ? void 0 : N[B][1];
  }
  function Ze(f) {
    return ie(this.__data__, f) > -1;
  }
  function We(f, N) {
    var B = this.__data__, V = ie(B, f);
    return V < 0 ? B.push([f, N]) : B[V][1] = N, this;
  }
  Et.prototype.clear = $e, Et.prototype.delete = Ge, Et.prototype.get = Ve, Et.prototype.has = Ze, Et.prototype.set = We;
  function Tt(f) {
    var N = -1, B = f ? f.length : 0;
    for (this.clear(); ++N < B; ) {
      var V = f[N];
      this.set(V[0], V[1]);
    }
  }
  function Ye() {
    this.__data__ = {
      hash: new Ft(),
      map: new (Zt || Et)(),
      string: new Ft()
    };
  }
  function Xe(f) {
    return Qt(this, f).delete(f);
  }
  function Qe(f) {
    return Qt(this, f).get(f);
  }
  function Je(f) {
    return Qt(this, f).has(f);
  }
  function tn(f, N) {
    return Qt(this, f).set(f, N), this;
  }
  Tt.prototype.clear = Ye, Tt.prototype.delete = Xe, Tt.prototype.get = Qe, Tt.prototype.has = Je, Tt.prototype.set = tn;
  function xt(f) {
    this.__data__ = new Et(f);
  }
  function en() {
    this.__data__ = new Et();
  }
  function nn(f) {
    return this.__data__.delete(f);
  }
  function rn(f) {
    return this.__data__.get(f);
  }
  function on(f) {
    return this.__data__.has(f);
  }
  function ln(f, N) {
    var B = this.__data__;
    if (B instanceof Et) {
      var V = B.__data__;
      if (!Zt || V.length < S - 1)
        return V.push([f, N]), this;
      B = this.__data__ = new Tt(V);
    }
    return B.set(f, N), this;
  }
  xt.prototype.clear = en, xt.prototype.delete = nn, xt.prototype.get = rn, xt.prototype.has = on, xt.prototype.set = ln;
  function re(f, N) {
    var B = me(f) || le(f) ? it(f.length, String) : [], V = B.length, ut = !!V;
    for (var rt in f)
      (N || ot.call(f, rt)) && !(ut && (rt == "length" || _n(rt, V))) && B.push(rt);
    return B;
  }
  function ke(f, N, B) {
    var V = f[N];
    (!(ot.call(f, N) && Le(V, B)) || B === void 0 && !(N in f)) && (f[N] = B);
  }
  function ie(f, N) {
    for (var B = f.length; B--; )
      if (Le(f[B][0], N))
        return B;
    return -1;
  }
  function Mt(f, N) {
    return f && ge(N, _e(N), f);
  }
  function pe(f, N, B, V, ut, rt, ct) {
    var vt;
    if (V && (vt = rt ? V(f, ut, rt, ct) : V(f)), vt !== void 0)
      return vt;
    if (!Bt(f))
      return f;
    var bt = me(f);
    if (bt) {
      if (vt = mn(f), !N)
        return pn(f, vt);
    } else {
      var yt = Ht(f), kt = yt == h || yt == a;
      if (qe(f))
        return oe(f, N);
      if (yt == u || yt == T || kt && !rt) {
        if (ft(f))
          return rt ? f : {};
        if (vt = Dt(kt ? {} : f), !N)
          return yn(f, Mt(vt, f));
      } else {
        if (!j[yt])
          return rt ? f : {};
        vt = bn(f, yt, pe, N);
      }
    }
    ct || (ct = new xt());
    var Pt = ct.get(f);
    if (Pt)
      return Pt;
    if (ct.set(f, vt), !bt)
      var _t = B ? gn(f) : _e(f);
    return G(_t || f, function(Nt, At) {
      _t && (At = Nt, Nt = f[At]), ke(vt, At, pe(Nt, N, B, V, At, f, ct));
    }), vt;
  }
  function an(f) {
    return Bt(f) ? qt(f) : {};
  }
  function un(f, N, B) {
    var V = N(f);
    return me(f) ? V : X(V, B(f));
  }
  function sn(f) {
    return at.call(f);
  }
  function fn(f) {
    if (!Bt(f) || En(f))
      return !1;
    var N = be(f) || ft(f) ? wt : J;
    return N.test(St(f));
  }
  function cn(f) {
    if (!xe(f))
      return Ae(f);
    var N = [];
    for (var B in Object(f))
      ot.call(f, B) && B != "constructor" && N.push(B);
    return N;
  }
  function oe(f, N) {
    if (N)
      return f.slice();
    var B = new f.constructor(f.length);
    return f.copy(B), B;
  }
  function ye(f) {
    var N = new f.constructor(f.byteLength);
    return new Vt(N).set(new Vt(f)), N;
  }
  function Xt(f, N) {
    var B = N ? ye(f.buffer) : f.buffer;
    return new f.constructor(B, f.byteOffset, f.byteLength);
  }
  function Ne(f, N, B) {
    var V = N ? B(ht(f), !0) : ht(f);
    return nt(V, F, new f.constructor());
  }
  function Se(f) {
    var N = new f.constructor(f.source, K.exec(f));
    return N.lastIndex = f.lastIndex, N;
  }
  function hn(f, N, B) {
    var V = N ? B(gt(f), !0) : gt(f);
    return nt(V, $, new f.constructor());
  }
  function dn(f) {
    return we ? Object(we.call(f)) : {};
  }
  function vn(f, N) {
    var B = N ? ye(f.buffer) : f.buffer;
    return new f.constructor(B, f.byteOffset, f.length);
  }
  function pn(f, N) {
    var B = -1, V = f.length;
    for (N || (N = Array(V)); ++B < V; )
      N[B] = f[B];
    return N;
  }
  function ge(f, N, B, V) {
    B || (B = {});
    for (var ut = -1, rt = N.length; ++ut < rt; ) {
      var ct = N[ut], vt = V ? V(B[ct], f[ct], ct, B, f) : void 0;
      ke(B, ct, vt === void 0 ? f[ct] : vt);
    }
    return B;
  }
  function yn(f, N) {
    return ge(f, Ut(f), N);
  }
  function gn(f) {
    return un(f, _e, Ut);
  }
  function Qt(f, N) {
    var B = f.__data__;
    return On(N) ? B[typeof N == "string" ? "string" : "hash"] : B.map;
  }
  function Rt(f, N) {
    var B = lt(f, N);
    return fn(B) ? B : void 0;
  }
  var Ut = ue ? mt(ue, Object) : wn, Ht = sn;
  (ee && Ht(new ee(new ArrayBuffer(1))) != _ || Zt && Ht(new Zt()) != t || jt && Ht(jt.resolve()) != o || ne && Ht(new ne()) != r || se && Ht(new se()) != n) && (Ht = function(f) {
    var N = at.call(f), B = N == u ? f.constructor : void 0, V = B ? St(B) : void 0;
    if (V)
      switch (V) {
        case fe:
          return _;
        case Yt:
          return t;
        case ce:
          return o;
        case he:
          return r;
        case de:
          return n;
      }
    return N;
  });
  function mn(f) {
    var N = f.length, B = f.constructor(N);
    return N && typeof f[0] == "string" && ot.call(f, "index") && (B.index = f.index, B.input = f.input), B;
  }
  function Dt(f) {
    return typeof f.constructor == "function" && !xe(f) ? an(dt(f)) : {};
  }
  function bn(f, N, B, V) {
    var ut = f.constructor;
    switch (N) {
      case s:
        return ye(f);
      case b:
      case v:
        return new ut(+f);
      case _:
        return Xt(f, V);
      case g:
      case w:
      case P:
      case O:
      case y:
      case E:
      case x:
      case L:
      case M:
        return vn(f, V);
      case t:
        return Ne(f, V, B);
      case e:
      case i:
        return new ut(f);
      case l:
        return Se(f);
      case r:
        return hn(f, V, B);
      case c:
        return dn(f);
    }
  }
  function _n(f, N) {
    return N = N == null ? d : N, !!N && (typeof f == "number" || U.test(f)) && f > -1 && f % 1 == 0 && f < N;
  }
  function On(f) {
    var N = typeof f;
    return N == "string" || N == "number" || N == "symbol" || N == "boolean" ? f !== "__proto__" : f === null;
  }
  function En(f) {
    return !!Q && Q in f;
  }
  function xe(f) {
    var N = f && f.constructor, B = typeof N == "function" && N.prototype || tt;
    return f === B;
  }
  function St(f) {
    if (f != null) {
      try {
        return st.call(f);
      } catch {
      }
      try {
        return f + "";
      } catch {
      }
    }
    return "";
  }
  function Pe(f) {
    return pe(f, !0, !0);
  }
  function Le(f, N) {
    return f === N || f !== f && N !== N;
  }
  function le(f) {
    return An(f) && ot.call(f, "callee") && (!Ee.call(f, "callee") || at.call(f) == T);
  }
  var me = Array.isArray;
  function ae(f) {
    return f != null && je(f.length) && !be(f);
  }
  function An(f) {
    return Re(f) && ae(f);
  }
  var qe = te || Tn;
  function be(f) {
    var N = Bt(f) ? at.call(f) : "";
    return N == h || N == a;
  }
  function je(f) {
    return typeof f == "number" && f > -1 && f % 1 == 0 && f <= d;
  }
  function Bt(f) {
    var N = typeof f;
    return !!f && (N == "object" || N == "function");
  }
  function Re(f) {
    return !!f && typeof f == "object";
  }
  function _e(f) {
    return ae(f) ? re(f) : cn(f);
  }
  function wn() {
    return [];
  }
  function Tn() {
    return !1;
  }
  D.exports = Pe;
})(De, De.exports);
var Be = { exports: {} };
(function(D, W) {
  var S = 200, m = "__lodash_hash_undefined__", d = 1, T = 2, A = 9007199254740991, b = "[object Arguments]", v = "[object Array]", p = "[object AsyncFunction]", h = "[object Boolean]", a = "[object Date]", t = "[object Error]", e = "[object Function]", u = "[object GeneratorFunction]", o = "[object Map]", l = "[object Number]", r = "[object Null]", i = "[object Object]", c = "[object Promise]", n = "[object Proxy]", s = "[object RegExp]", _ = "[object Set]", g = "[object String]", w = "[object Symbol]", P = "[object Undefined]", O = "[object WeakMap]", y = "[object ArrayBuffer]", E = "[object DataView]", x = "[object Float32Array]", L = "[object Float64Array]", M = "[object Int8Array]", H = "[object Int16Array]", K = "[object Int32Array]", J = "[object Uint8Array]", U = "[object Uint8ClampedArray]", j = "[object Uint16Array]", k = "[object Uint32Array]", R = /[\\^$.*+?()[\]{}|]/g, I = /^\[object .+?Constructor\]$/, z = /^(?:0|[1-9]\d*)$/, C = {};
  C[x] = C[L] = C[M] = C[H] = C[K] = C[J] = C[U] = C[j] = C[k] = !0, C[b] = C[v] = C[y] = C[h] = C[E] = C[a] = C[t] = C[e] = C[o] = C[l] = C[i] = C[s] = C[_] = C[g] = C[O] = !1;
  var q = typeof Kt == "object" && Kt && Kt.Object === Object && Kt, F = typeof self == "object" && self && self.Object === Object && self, $ = q || F || Function("return this")(), G = W && !W.nodeType && W, X = G && !0 && D && !D.nodeType && D, nt = X && X.exports === G, it = nt && q.process, lt = function() {
    try {
      return it && it.binding && it.binding("util");
    } catch {
    }
  }(), ft = lt && lt.isTypedArray;
  function ht(f, N) {
    for (var B = -1, V = f == null ? 0 : f.length, ut = 0, rt = []; ++B < V; ) {
      var ct = f[B];
      N(ct, B, f) && (rt[ut++] = ct);
    }
    return rt;
  }
  function mt(f, N) {
    for (var B = -1, V = N.length, ut = f.length; ++B < V; )
      f[ut + B] = N[B];
    return f;
  }
  function gt(f, N) {
    for (var B = -1, V = f == null ? 0 : f.length; ++B < V; )
      if (N(f[B], B, f))
        return !0;
    return !1;
  }
  function Z(f, N) {
    for (var B = -1, V = Array(f); ++B < f; )
      V[B] = N(B);
    return V;
  }
  function Y(f) {
    return function(N) {
      return f(N);
    };
  }
  function tt(f, N) {
    return f.has(N);
  }
  function et(f, N) {
    return f == null ? void 0 : f[N];
  }
  function Q(f) {
    var N = -1, B = Array(f.size);
    return f.forEach(function(V, ut) {
      B[++N] = [ut, V];
    }), B;
  }
  function st(f, N) {
    return function(B) {
      return f(N(B));
    };
  }
  function ot(f) {
    var N = -1, B = Array(f.size);
    return f.forEach(function(V) {
      B[++N] = V;
    }), B;
  }
  var at = Array.prototype, wt = Function.prototype, Ot = Object.prototype, pt = $["__core-js_shared__"], Vt = wt.toString, dt = Ot.hasOwnProperty, qt = function() {
    var f = /[^.]+$/.exec(pt && pt.keys && pt.keys.IE_PROTO || "");
    return f ? "Symbol(src)_1." + f : "";
  }(), Ee = Ot.toString, Ue = RegExp(
    "^" + Vt.call(dt).replace(R, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ue = nt ? $.Buffer : void 0, te = $.Symbol, Ae = $.Uint8Array, ee = Ot.propertyIsEnumerable, Zt = at.splice, jt = te ? te.toStringTag : void 0, ne = Object.getOwnPropertySymbols, se = ue ? ue.isBuffer : void 0, Wt = st(Object.keys, Object), fe = Ut($, "DataView"), Yt = Ut($, "Map"), ce = Ut($, "Promise"), he = Ut($, "Set"), de = Ut($, "WeakMap"), $t = Ut(Object, "create"), we = St(fe), Ft = St(Yt), He = St(ce), ze = St(he), Ke = St(de), Te = te ? te.prototype : void 0, ve = Te ? Te.valueOf : void 0;
  function Et(f) {
    var N = -1, B = f == null ? 0 : f.length;
    for (this.clear(); ++N < B; ) {
      var V = f[N];
      this.set(V[0], V[1]);
    }
  }
  function $e() {
    this.__data__ = $t ? $t(null) : {}, this.size = 0;
  }
  function Ge(f) {
    var N = this.has(f) && delete this.__data__[f];
    return this.size -= N ? 1 : 0, N;
  }
  function Ve(f) {
    var N = this.__data__;
    if ($t) {
      var B = N[f];
      return B === m ? void 0 : B;
    }
    return dt.call(N, f) ? N[f] : void 0;
  }
  function Ze(f) {
    var N = this.__data__;
    return $t ? N[f] !== void 0 : dt.call(N, f);
  }
  function We(f, N) {
    var B = this.__data__;
    return this.size += this.has(f) ? 0 : 1, B[f] = $t && N === void 0 ? m : N, this;
  }
  Et.prototype.clear = $e, Et.prototype.delete = Ge, Et.prototype.get = Ve, Et.prototype.has = Ze, Et.prototype.set = We;
  function Tt(f) {
    var N = -1, B = f == null ? 0 : f.length;
    for (this.clear(); ++N < B; ) {
      var V = f[N];
      this.set(V[0], V[1]);
    }
  }
  function Ye() {
    this.__data__ = [], this.size = 0;
  }
  function Xe(f) {
    var N = this.__data__, B = oe(N, f);
    if (B < 0)
      return !1;
    var V = N.length - 1;
    return B == V ? N.pop() : Zt.call(N, B, 1), --this.size, !0;
  }
  function Qe(f) {
    var N = this.__data__, B = oe(N, f);
    return B < 0 ? void 0 : N[B][1];
  }
  function Je(f) {
    return oe(this.__data__, f) > -1;
  }
  function tn(f, N) {
    var B = this.__data__, V = oe(B, f);
    return V < 0 ? (++this.size, B.push([f, N])) : B[V][1] = N, this;
  }
  Tt.prototype.clear = Ye, Tt.prototype.delete = Xe, Tt.prototype.get = Qe, Tt.prototype.has = Je, Tt.prototype.set = tn;
  function xt(f) {
    var N = -1, B = f == null ? 0 : f.length;
    for (this.clear(); ++N < B; ) {
      var V = f[N];
      this.set(V[0], V[1]);
    }
  }
  function en() {
    this.size = 0, this.__data__ = {
      hash: new Et(),
      map: new (Yt || Tt)(),
      string: new Et()
    };
  }
  function nn(f) {
    var N = Rt(this, f).delete(f);
    return this.size -= N ? 1 : 0, N;
  }
  function rn(f) {
    return Rt(this, f).get(f);
  }
  function on(f) {
    return Rt(this, f).has(f);
  }
  function ln(f, N) {
    var B = Rt(this, f), V = B.size;
    return B.set(f, N), this.size += B.size == V ? 0 : 1, this;
  }
  xt.prototype.clear = en, xt.prototype.delete = nn, xt.prototype.get = rn, xt.prototype.has = on, xt.prototype.set = ln;
  function re(f) {
    var N = -1, B = f == null ? 0 : f.length;
    for (this.__data__ = new xt(); ++N < B; )
      this.add(f[N]);
  }
  function ke(f) {
    return this.__data__.set(f, m), this;
  }
  function ie(f) {
    return this.__data__.has(f);
  }
  re.prototype.add = re.prototype.push = ke, re.prototype.has = ie;
  function Mt(f) {
    var N = this.__data__ = new Tt(f);
    this.size = N.size;
  }
  function pe() {
    this.__data__ = new Tt(), this.size = 0;
  }
  function an(f) {
    var N = this.__data__, B = N.delete(f);
    return this.size = N.size, B;
  }
  function un(f) {
    return this.__data__.get(f);
  }
  function sn(f) {
    return this.__data__.has(f);
  }
  function fn(f, N) {
    var B = this.__data__;
    if (B instanceof Tt) {
      var V = B.__data__;
      if (!Yt || V.length < S - 1)
        return V.push([f, N]), this.size = ++B.size, this;
      B = this.__data__ = new xt(V);
    }
    return B.set(f, N), this.size = B.size, this;
  }
  Mt.prototype.clear = pe, Mt.prototype.delete = an, Mt.prototype.get = un, Mt.prototype.has = sn, Mt.prototype.set = fn;
  function cn(f, N) {
    var B = le(f), V = !B && Le(f), ut = !B && !V && ae(f), rt = !B && !V && !ut && Re(f), ct = B || V || ut || rt, vt = ct ? Z(f.length, String) : [], bt = vt.length;
    for (var yt in f)
      (N || dt.call(f, yt)) && !(ct && (yt == "length" || ut && (yt == "offset" || yt == "parent") || rt && (yt == "buffer" || yt == "byteLength" || yt == "byteOffset") || bn(yt, bt))) && vt.push(yt);
    return vt;
  }
  function oe(f, N) {
    for (var B = f.length; B--; )
      if (Pe(f[B][0], N))
        return B;
    return -1;
  }
  function ye(f, N, B) {
    var V = N(f);
    return le(f) ? V : mt(V, B(f));
  }
  function Xt(f) {
    return f == null ? f === void 0 ? P : r : jt && jt in Object(f) ? Ht(f) : xe(f);
  }
  function Ne(f) {
    return Bt(f) && Xt(f) == b;
  }
  function Se(f, N, B, V, ut) {
    return f === N ? !0 : f == null || N == null || !Bt(f) && !Bt(N) ? f !== f && N !== N : hn(f, N, B, V, Se, ut);
  }
  function hn(f, N, B, V, ut, rt) {
    var ct = le(f), vt = le(N), bt = ct ? v : Dt(f), yt = vt ? v : Dt(N);
    bt = bt == b ? i : bt, yt = yt == b ? i : yt;
    var kt = bt == i, Pt = yt == i, _t = bt == yt;
    if (_t && ae(f)) {
      if (!ae(N))
        return !1;
      ct = !0, kt = !1;
    }
    if (_t && !kt)
      return rt || (rt = new Mt()), ct || Re(f) ? ge(f, N, B, V, ut, rt) : yn(f, N, bt, B, V, ut, rt);
    if (!(B & d)) {
      var Nt = kt && dt.call(f, "__wrapped__"), At = Pt && dt.call(N, "__wrapped__");
      if (Nt || At) {
        var Gt = Nt ? f.value() : f, zt = At ? N.value() : N;
        return rt || (rt = new Mt()), ut(Gt, zt, B, V, rt);
      }
    }
    return _t ? (rt || (rt = new Mt()), gn(f, N, B, V, ut, rt)) : !1;
  }
  function dn(f) {
    if (!je(f) || On(f))
      return !1;
    var N = qe(f) ? Ue : I;
    return N.test(St(f));
  }
  function vn(f) {
    return Bt(f) && be(f.length) && !!C[Xt(f)];
  }
  function pn(f) {
    if (!En(f))
      return Wt(f);
    var N = [];
    for (var B in Object(f))
      dt.call(f, B) && B != "constructor" && N.push(B);
    return N;
  }
  function ge(f, N, B, V, ut, rt) {
    var ct = B & d, vt = f.length, bt = N.length;
    if (vt != bt && !(ct && bt > vt))
      return !1;
    var yt = rt.get(f);
    if (yt && rt.get(N))
      return yt == N;
    var kt = -1, Pt = !0, _t = B & T ? new re() : void 0;
    for (rt.set(f, N), rt.set(N, f); ++kt < vt; ) {
      var Nt = f[kt], At = N[kt];
      if (V)
        var Gt = ct ? V(At, Nt, kt, N, f, rt) : V(Nt, At, kt, f, N, rt);
      if (Gt !== void 0) {
        if (Gt)
          continue;
        Pt = !1;
        break;
      }
      if (_t) {
        if (!gt(N, function(zt, Jt) {
          if (!tt(_t, Jt) && (Nt === zt || ut(Nt, zt, B, V, rt)))
            return _t.push(Jt);
        })) {
          Pt = !1;
          break;
        }
      } else if (!(Nt === At || ut(Nt, At, B, V, rt))) {
        Pt = !1;
        break;
      }
    }
    return rt.delete(f), rt.delete(N), Pt;
  }
  function yn(f, N, B, V, ut, rt, ct) {
    switch (B) {
      case E:
        if (f.byteLength != N.byteLength || f.byteOffset != N.byteOffset)
          return !1;
        f = f.buffer, N = N.buffer;
      case y:
        return !(f.byteLength != N.byteLength || !rt(new Ae(f), new Ae(N)));
      case h:
      case a:
      case l:
        return Pe(+f, +N);
      case t:
        return f.name == N.name && f.message == N.message;
      case s:
      case g:
        return f == N + "";
      case o:
        var vt = Q;
      case _:
        var bt = V & d;
        if (vt || (vt = ot), f.size != N.size && !bt)
          return !1;
        var yt = ct.get(f);
        if (yt)
          return yt == N;
        V |= T, ct.set(f, N);
        var kt = ge(vt(f), vt(N), V, ut, rt, ct);
        return ct.delete(f), kt;
      case w:
        if (ve)
          return ve.call(f) == ve.call(N);
    }
    return !1;
  }
  function gn(f, N, B, V, ut, rt) {
    var ct = B & d, vt = Qt(f), bt = vt.length, yt = Qt(N), kt = yt.length;
    if (bt != kt && !ct)
      return !1;
    for (var Pt = bt; Pt--; ) {
      var _t = vt[Pt];
      if (!(ct ? _t in N : dt.call(N, _t)))
        return !1;
    }
    var Nt = rt.get(f);
    if (Nt && rt.get(N))
      return Nt == N;
    var At = !0;
    rt.set(f, N), rt.set(N, f);
    for (var Gt = ct; ++Pt < bt; ) {
      _t = vt[Pt];
      var zt = f[_t], Jt = N[_t];
      if (V)
        var Mn = ct ? V(Jt, zt, _t, N, f, rt) : V(zt, Jt, _t, f, N, rt);
      if (!(Mn === void 0 ? zt === Jt || ut(zt, Jt, B, V, rt) : Mn)) {
        At = !1;
        break;
      }
      Gt || (Gt = _t == "constructor");
    }
    if (At && !Gt) {
      var Ie = f.constructor, Me = N.constructor;
      Ie != Me && "constructor" in f && "constructor" in N && !(typeof Ie == "function" && Ie instanceof Ie && typeof Me == "function" && Me instanceof Me) && (At = !1);
    }
    return rt.delete(f), rt.delete(N), At;
  }
  function Qt(f) {
    return ye(f, _e, mn);
  }
  function Rt(f, N) {
    var B = f.__data__;
    return _n(N) ? B[typeof N == "string" ? "string" : "hash"] : B.map;
  }
  function Ut(f, N) {
    var B = et(f, N);
    return dn(B) ? B : void 0;
  }
  function Ht(f) {
    var N = dt.call(f, jt), B = f[jt];
    try {
      f[jt] = void 0;
      var V = !0;
    } catch {
    }
    var ut = Ee.call(f);
    return V && (N ? f[jt] = B : delete f[jt]), ut;
  }
  var mn = ne ? function(f) {
    return f == null ? [] : (f = Object(f), ht(ne(f), function(N) {
      return ee.call(f, N);
    }));
  } : wn, Dt = Xt;
  (fe && Dt(new fe(new ArrayBuffer(1))) != E || Yt && Dt(new Yt()) != o || ce && Dt(ce.resolve()) != c || he && Dt(new he()) != _ || de && Dt(new de()) != O) && (Dt = function(f) {
    var N = Xt(f), B = N == i ? f.constructor : void 0, V = B ? St(B) : "";
    if (V)
      switch (V) {
        case we:
          return E;
        case Ft:
          return o;
        case He:
          return c;
        case ze:
          return _;
        case Ke:
          return O;
      }
    return N;
  });
  function bn(f, N) {
    return N = N == null ? A : N, !!N && (typeof f == "number" || z.test(f)) && f > -1 && f % 1 == 0 && f < N;
  }
  function _n(f) {
    var N = typeof f;
    return N == "string" || N == "number" || N == "symbol" || N == "boolean" ? f !== "__proto__" : f === null;
  }
  function On(f) {
    return !!qt && qt in f;
  }
  function En(f) {
    var N = f && f.constructor, B = typeof N == "function" && N.prototype || Ot;
    return f === B;
  }
  function xe(f) {
    return Ee.call(f);
  }
  function St(f) {
    if (f != null) {
      try {
        return Vt.call(f);
      } catch {
      }
      try {
        return f + "";
      } catch {
      }
    }
    return "";
  }
  function Pe(f, N) {
    return f === N || f !== f && N !== N;
  }
  var Le = Ne(function() {
    return arguments;
  }()) ? Ne : function(f) {
    return Bt(f) && dt.call(f, "callee") && !ee.call(f, "callee");
  }, le = Array.isArray;
  function me(f) {
    return f != null && be(f.length) && !qe(f);
  }
  var ae = se || Tn;
  function An(f, N) {
    return Se(f, N);
  }
  function qe(f) {
    if (!je(f))
      return !1;
    var N = Xt(f);
    return N == e || N == u || N == p || N == n;
  }
  function be(f) {
    return typeof f == "number" && f > -1 && f % 1 == 0 && f <= A;
  }
  function je(f) {
    var N = typeof f;
    return f != null && (N == "object" || N == "function");
  }
  function Bt(f) {
    return f != null && typeof f == "object";
  }
  var Re = ft ? Y(ft) : vn;
  function _e(f) {
    return me(f) ? cn(f) : pn(f);
  }
  function wn() {
    return [];
  }
  function Tn() {
    return !1;
  }
  D.exports = An;
})(Be, Be.exports);
var Rn = {};
Object.defineProperty(Rn, "__esModule", { value: !0 });
const lr = De.exports, ar = Be.exports;
var Pn;
(function(D) {
  function W(T = {}, A = {}, b = !1) {
    typeof T != "object" && (T = {}), typeof A != "object" && (A = {});
    let v = lr(A);
    b || (v = Object.keys(v).reduce((p, h) => (v[h] != null && (p[h] = v[h]), p), {}));
    for (const p in T)
      T[p] !== void 0 && A[p] === void 0 && (v[p] = T[p]);
    return Object.keys(v).length > 0 ? v : void 0;
  }
  D.compose = W;
  function S(T = {}, A = {}) {
    typeof T != "object" && (T = {}), typeof A != "object" && (A = {});
    const b = Object.keys(T).concat(Object.keys(A)).reduce((v, p) => (ar(T[p], A[p]) || (v[p] = A[p] === void 0 ? null : A[p]), v), {});
    return Object.keys(b).length > 0 ? b : void 0;
  }
  D.diff = S;
  function m(T = {}, A = {}) {
    T = T || {};
    const b = Object.keys(A).reduce((v, p) => (A[p] !== T[p] && T[p] !== void 0 && (v[p] = A[p]), v), {});
    return Object.keys(T).reduce((v, p) => (T[p] !== A[p] && A[p] === void 0 && (v[p] = null), v), b);
  }
  D.invert = m;
  function d(T, A, b = !1) {
    if (typeof T != "object")
      return A;
    if (typeof A != "object")
      return;
    if (!b)
      return A;
    const v = Object.keys(A).reduce((p, h) => (T[h] === void 0 && (p[h] = A[h]), p), {});
    return Object.keys(v).length > 0 ? v : void 0;
  }
  D.transform = d;
})(Pn || (Pn = {}));
Rn.default = Pn;
var Fe = {};
Object.defineProperty(Fe, "__esModule", { value: !0 });
var Ln;
(function(D) {
  function W(S) {
    return typeof S.delete == "number" ? S.delete : typeof S.retain == "number" ? S.retain : typeof S.retain == "object" && S.retain !== null ? 1 : typeof S.insert == "string" ? S.insert.length : 1;
  }
  D.length = W;
})(Ln || (Ln = {}));
Fe.default = Ln;
var In = {};
Object.defineProperty(In, "__esModule", { value: !0 });
const Cn = Fe;
class ur {
  constructor(W) {
    this.ops = W, this.index = 0, this.offset = 0;
  }
  hasNext() {
    return this.peekLength() < 1 / 0;
  }
  next(W) {
    W || (W = 1 / 0);
    const S = this.ops[this.index];
    if (S) {
      const m = this.offset, d = Cn.default.length(S);
      if (W >= d - m ? (W = d - m, this.index += 1, this.offset = 0) : this.offset += W, typeof S.delete == "number")
        return { delete: W };
      {
        const T = {};
        return S.attributes && (T.attributes = S.attributes), typeof S.retain == "number" ? T.retain = W : typeof S.retain == "object" && S.retain !== null ? T.retain = S.retain : typeof S.insert == "string" ? T.insert = S.insert.substr(m, W) : T.insert = S.insert, T;
      }
    } else
      return { retain: 1 / 0 };
  }
  peek() {
    return this.ops[this.index];
  }
  peekLength() {
    return this.ops[this.index] ? Cn.default.length(this.ops[this.index]) - this.offset : 1 / 0;
  }
  peekType() {
    const W = this.ops[this.index];
    return W ? typeof W.delete == "number" ? "delete" : typeof W.retain == "number" || typeof W.retain == "object" && W.retain !== null ? "retain" : "insert" : "retain";
  }
  rest() {
    if (this.hasNext()) {
      if (this.offset === 0)
        return this.ops.slice(this.index);
      {
        const W = this.offset, S = this.index, m = this.next(), d = this.ops.slice(this.index);
        return this.offset = W, this.index = S, [m].concat(d);
      }
    } else
      return [];
  }
}
In.default = ur;
(function(D, W) {
  Object.defineProperty(W, "__esModule", { value: !0 }), W.AttributeMap = W.OpIterator = W.Op = void 0;
  const S = or, m = De.exports, d = Be.exports, T = Rn;
  W.AttributeMap = T.default;
  const A = Fe;
  W.Op = A.default;
  const b = In;
  W.OpIterator = b.default;
  const v = String.fromCharCode(0), p = (a, t) => {
    if (typeof a != "object" || a === null)
      throw new Error(`cannot retain a ${typeof a}`);
    if (typeof t != "object" || t === null)
      throw new Error(`cannot retain a ${typeof t}`);
    const e = Object.keys(a)[0];
    if (!e || e !== Object.keys(t)[0])
      throw new Error(`embed types not matched: ${e} != ${Object.keys(t)[0]}`);
    return [e, a[e], t[e]];
  };
  class h {
    constructor(t) {
      Array.isArray(t) ? this.ops = t : t != null && Array.isArray(t.ops) ? this.ops = t.ops : this.ops = [];
    }
    static registerEmbed(t, e) {
      this.handlers[t] = e;
    }
    static unregisterEmbed(t) {
      delete this.handlers[t];
    }
    static getHandler(t) {
      const e = this.handlers[t];
      if (!e)
        throw new Error(`no handlers for embed type "${t}"`);
      return e;
    }
    insert(t, e) {
      const u = {};
      return typeof t == "string" && t.length === 0 ? this : (u.insert = t, e != null && typeof e == "object" && Object.keys(e).length > 0 && (u.attributes = e), this.push(u));
    }
    delete(t) {
      return t <= 0 ? this : this.push({ delete: t });
    }
    retain(t, e) {
      if (typeof t == "number" && t <= 0)
        return this;
      const u = { retain: t };
      return e != null && typeof e == "object" && Object.keys(e).length > 0 && (u.attributes = e), this.push(u);
    }
    push(t) {
      let e = this.ops.length, u = this.ops[e - 1];
      if (t = m(t), typeof u == "object") {
        if (typeof t.delete == "number" && typeof u.delete == "number")
          return this.ops[e - 1] = { delete: u.delete + t.delete }, this;
        if (typeof u.delete == "number" && t.insert != null && (e -= 1, u = this.ops[e - 1], typeof u != "object"))
          return this.ops.unshift(t), this;
        if (d(t.attributes, u.attributes)) {
          if (typeof t.insert == "string" && typeof u.insert == "string")
            return this.ops[e - 1] = { insert: u.insert + t.insert }, typeof t.attributes == "object" && (this.ops[e - 1].attributes = t.attributes), this;
          if (typeof t.retain == "number" && typeof u.retain == "number")
            return this.ops[e - 1] = { retain: u.retain + t.retain }, typeof t.attributes == "object" && (this.ops[e - 1].attributes = t.attributes), this;
        }
      }
      return e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t), this;
    }
    chop() {
      const t = this.ops[this.ops.length - 1];
      return t && typeof t.retain == "number" && !t.attributes && this.ops.pop(), this;
    }
    filter(t) {
      return this.ops.filter(t);
    }
    forEach(t) {
      this.ops.forEach(t);
    }
    map(t) {
      return this.ops.map(t);
    }
    partition(t) {
      const e = [], u = [];
      return this.forEach((o) => {
        (t(o) ? e : u).push(o);
      }), [e, u];
    }
    reduce(t, e) {
      return this.ops.reduce(t, e);
    }
    changeLength() {
      return this.reduce((t, e) => e.insert ? t + A.default.length(e) : e.delete ? t - e.delete : t, 0);
    }
    length() {
      return this.reduce((t, e) => t + A.default.length(e), 0);
    }
    slice(t = 0, e = 1 / 0) {
      const u = [], o = new b.default(this.ops);
      let l = 0;
      for (; l < e && o.hasNext(); ) {
        let r;
        l < t ? r = o.next(t - l) : (r = o.next(e - l), u.push(r)), l += A.default.length(r);
      }
      return new h(u);
    }
    compose(t) {
      const e = new b.default(this.ops), u = new b.default(t.ops), o = [], l = u.peek();
      if (l != null && typeof l.retain == "number" && l.attributes == null) {
        let i = l.retain;
        for (; e.peekType() === "insert" && e.peekLength() <= i; )
          i -= e.peekLength(), o.push(e.next());
        l.retain - i > 0 && u.next(l.retain - i);
      }
      const r = new h(o);
      for (; e.hasNext() || u.hasNext(); )
        if (u.peekType() === "insert")
          r.push(u.next());
        else if (e.peekType() === "delete")
          r.push(e.next());
        else {
          const i = Math.min(e.peekLength(), u.peekLength()), c = e.next(i), n = u.next(i);
          if (n.retain) {
            const s = {};
            if (typeof c.retain == "number")
              s.retain = typeof n.retain == "number" ? i : n.retain;
            else if (typeof n.retain == "number")
              c.retain == null ? s.insert = c.insert : s.retain = c.retain;
            else {
              const g = c.retain == null ? "insert" : "retain", [w, P, O] = p(c[g], n.retain), y = h.getHandler(w);
              s[g] = {
                [w]: y.compose(P, O, g === "retain")
              };
            }
            const _ = T.default.compose(c.attributes, n.attributes, typeof c.retain == "number");
            if (_ && (s.attributes = _), r.push(s), !u.hasNext() && d(r.ops[r.ops.length - 1], s)) {
              const g = new h(e.rest());
              return r.concat(g).chop();
            }
          } else
            typeof n.delete == "number" && (typeof c.retain == "number" || typeof c.retain == "object" && c.retain !== null) && r.push(n);
        }
      return r.chop();
    }
    concat(t) {
      const e = new h(this.ops.slice());
      return t.ops.length > 0 && (e.push(t.ops[0]), e.ops = e.ops.concat(t.ops.slice(1))), e;
    }
    diff(t, e) {
      if (this.ops === t.ops)
        return new h();
      const u = [this, t].map((c) => c.map((n) => {
        if (n.insert != null)
          return typeof n.insert == "string" ? n.insert : v;
        const s = c === t ? "on" : "with";
        throw new Error("diff() called " + s + " non-document");
      }).join("")), o = new h(), l = S(u[0], u[1], e), r = new b.default(this.ops), i = new b.default(t.ops);
      return l.forEach((c) => {
        let n = c[1].length;
        for (; n > 0; ) {
          let s = 0;
          switch (c[0]) {
            case S.INSERT:
              s = Math.min(i.peekLength(), n), o.push(i.next(s));
              break;
            case S.DELETE:
              s = Math.min(n, r.peekLength()), r.next(s), o.delete(s);
              break;
            case S.EQUAL:
              s = Math.min(r.peekLength(), i.peekLength(), n);
              const _ = r.next(s), g = i.next(s);
              d(_.insert, g.insert) ? o.retain(s, T.default.diff(_.attributes, g.attributes)) : o.push(g).delete(s);
              break;
          }
          n -= s;
        }
      }), o.chop();
    }
    eachLine(t, e = `
`) {
      const u = new b.default(this.ops);
      let o = new h(), l = 0;
      for (; u.hasNext(); ) {
        if (u.peekType() !== "insert")
          return;
        const r = u.peek(), i = A.default.length(r) - u.peekLength(), c = typeof r.insert == "string" ? r.insert.indexOf(e, i) - i : -1;
        if (c < 0)
          o.push(u.next());
        else if (c > 0)
          o.push(u.next(c));
        else {
          if (t(o, u.next(1).attributes || {}, l) === !1)
            return;
          l += 1, o = new h();
        }
      }
      o.length() > 0 && t(o, {}, l);
    }
    invert(t) {
      const e = new h();
      return this.reduce((u, o) => {
        if (o.insert)
          e.delete(A.default.length(o));
        else {
          if (typeof o.retain == "number" && o.attributes == null)
            return e.retain(o.retain), u + o.retain;
          if (o.delete || typeof o.retain == "number") {
            const l = o.delete || o.retain;
            return t.slice(u, u + l).forEach((i) => {
              o.delete ? e.push(i) : o.retain && o.attributes && e.retain(A.default.length(i), T.default.invert(o.attributes, i.attributes));
            }), u + l;
          } else if (typeof o.retain == "object" && o.retain !== null) {
            const l = t.slice(u, u + 1), r = new b.default(l.ops).next(), [i, c, n] = p(o.retain, r.insert), s = h.getHandler(i);
            return e.retain({ [i]: s.invert(c, n) }, T.default.invert(o.attributes, r.attributes)), u + 1;
          }
        }
        return u;
      }, 0), e.chop();
    }
    transform(t, e = !1) {
      if (e = !!e, typeof t == "number")
        return this.transformPosition(t, e);
      const u = t, o = new b.default(this.ops), l = new b.default(u.ops), r = new h();
      for (; o.hasNext() || l.hasNext(); )
        if (o.peekType() === "insert" && (e || l.peekType() !== "insert"))
          r.retain(A.default.length(o.next()));
        else if (l.peekType() === "insert")
          r.push(l.next());
        else {
          const i = Math.min(o.peekLength(), l.peekLength()), c = o.next(i), n = l.next(i);
          if (c.delete)
            continue;
          if (n.delete)
            r.push(n);
          else {
            const s = c.retain, _ = n.retain;
            let g = typeof _ == "object" && _ !== null ? _ : i;
            if (typeof s == "object" && s !== null && typeof _ == "object" && _ !== null) {
              const w = Object.keys(s)[0];
              if (w === Object.keys(_)[0]) {
                const P = h.getHandler(w);
                P && (g = {
                  [w]: P.transform(s[w], _[w], e)
                });
              }
            }
            r.retain(g, T.default.transform(c.attributes, n.attributes, e));
          }
        }
      return r.chop();
    }
    transformPosition(t, e = !1) {
      e = !!e;
      const u = new b.default(this.ops);
      let o = 0;
      for (; u.hasNext() && o <= t; ) {
        const l = u.peekLength(), r = u.peekType();
        if (u.next(), r === "delete") {
          t -= Math.min(l, t - o);
          continue;
        } else
          r === "insert" && (o < t || !e) && (t += l);
        o += l;
      }
      return t;
    }
  }
  h.Op = A.default, h.OpIterator = b.default, h.AttributeMap = T.default, h.handlers = {}, W.default = h, D.exports = h, D.exports.default = h;
})(xn, xn.exports);
const fr = /* @__PURE__ */ Un(xn.exports), Fn = {
  essential: [
    [{ header: [1, 2, 3, 4, 5, 6, !1] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
    ["blockquote", "code-block", "link"],
    [{ color: [] }, "clean"]
  ],
  minimal: [
    [{ header: 1 }, { header: 2 }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }, { align: [] }]
  ],
  full: [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", !1, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, !1] }],
    [{ font: [] }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["clean"],
    ["link", "image", "video"]
  ]
};
const cr = Zn({
  name: "VusuiEditor",
  inheritAttrs: !1,
  props: {
    content: {
      type: [String, Object],
      default: () => {
      }
    },
    contentType: {
      type: String,
      default: "delta",
      validator: (D) => ["delta", "html", "text"].includes(D)
    },
    theme: {
      type: String,
      default: "snow",
      validator: (D) => ["snow", "bubble", ""].includes(D)
    },
    disabled: {
      type: Boolean,
      default: !0
    },
    readOnly: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: "\u8BF7\u8F93\u5165\u5185\u5BB9..."
    },
    toolbar: {
      type: [String, Array, Object],
      required: !1,
      validator: (D) => typeof D == "string" && D !== "" ? D.charAt(0) === "#" ? !0 : Object.keys(Fn).indexOf(D) !== -1 : !0
    },
    modules: {
      type: Object,
      required: !1
    },
    options: {
      type: Object,
      required: !1
    }
  },
  emits: [
    "textChange",
    "editorChange",
    "selectionChange",
    "ready",
    "input",
    "blur",
    "focus",
    "update:content"
  ],
  setup: (D, W) => {
    const S = kn();
    kn();
    const m = kn(), d = Wn({
      options: {},
      quill: null
    });
    Dn(
      () => D.disabled,
      (s) => {
        d.quill && d.quill.enable(!s);
      }
    ), Dn(m, (s) => {
      s ? W.emit("focus", S) : W.emit("blur", S);
    }), Yn(() => {
      A();
    }), Xn(() => {
      d.quill = null;
    });
    const T = () => {
      const s = {};
      if (D.theme !== "" && (s.theme = D.theme), D.readOnly && (s.readOnly = D.readOnly), D.placeholder && (s.placeholder = D.placeholder), D.toolbar && D.toolbar !== "" && (s.modules = {
        toolbar: (() => {
          if (typeof D.toolbar == "object")
            return D.toolbar;
          if (typeof D.toolbar == "string")
            return D.toolbar.charAt(0) === "#" ? D.toolbar : Fn[D.toolbar];
        })()
      }), D.modules) {
        const _ = (() => {
          var w, P;
          const g = {};
          if (Array.isArray(D.modules))
            for (const O of D.modules)
              g[O.name] = (w = O.options) != null ? w : {};
          else
            g[D.modules.name] = (P = D.modules.options) != null ? P : {};
          return g;
        })();
        s.modules = Object.assign(
          {},
          s.modules,
          _
        );
      }
      return Object.assign({}, D.options, s);
    }, A = () => {
      var s;
      if (!S.value)
        return !1;
      if (d.options = T(), D.modules)
        if (Array.isArray(D.modules))
          for (const _ of D.modules)
            Nn.register(`modules/${_.name}`, _.module);
        else
          Nn.register(`modules/${D.modules.name}`, D.modules.module);
      d.quill = new Nn(S.value, d.options), u(D.content), d.quill.on("text-change", b), d.quill.on("selection-change", v), d.quill.on("editor-change", p), D.theme !== "bubble" && S.value.classList.remove("ql-bubble"), D.theme !== "snow" && S.value.classList.remove("ql-snow"), (s = d.quill.getModule("toolbar")) == null || s.container.addEventListener("mousedown", (_) => {
        _.preventDefault();
      }), W.emit("ready", d.quill);
    }, b = (s, _, g) => {
      W.emit("update:content", e()), W.emit("textChange", { delta: s, oldContents: _, source: g });
    }, v = (s, _, g) => {
      var w;
      m.value = !!((w = d.quill) != null && w.hasFocus()), W.emit("selectionChange", { range: s, oldRange: _, source: g });
    }, p = (...s) => {
      s[0] === "text-change" && W.emit("editorChange", {
        name: s[0],
        delta: s[1],
        oldContents: s[2],
        source: s[3]
      }), s[0] === "selection-change" && W.emit("editorChange", {
        name: s[0],
        range: s[1],
        oldRange: s[2],
        source: s[3]
      });
    }, h = () => S.value, a = () => {
      var s, _;
      return (_ = (s = d.quill) == null ? void 0 : s.getModule("toolbar")) == null ? void 0 : _.container;
    }, t = () => {
      if (d.quill)
        return d.quill;
      throw 'Quill\u7F16\u8F91\u5668\u8FD8\u6CA1\u6709\u5B9E\u4F8B\u5316,\u786E\u4FDD\u5728\u7F16\u8F91\u5668\u51C6\u5907\u597D\u65F6\u8C03\u7528\u6B64\u65B9\u6CD5,\u6216\u8005\u4F7F\u7528v-on:ready="onReady(quill)"\u4E8B\u4EF6';
    }, e = (s, _) => {
      var g;
      return D.contentType === "html" ? r() : D.contentType === "text" ? o(s, _) : (g = d.quill) == null ? void 0 : g.getContents(s, _);
    }, u = (s, _ = "api") => {
      var g;
      D.contentType === "html" ? i(s) : D.contentType === "text" ? l(s, _) : (g = d.quill) == null || g.setContents(s, _);
    }, o = (s, _) => {
      var g, w;
      return (w = (g = d.quill) == null ? void 0 : g.getText(s, _)) != null ? w : "";
    }, l = (s, _ = "api") => {
      var g;
      (g = d.quill) == null || g.setText(s, _);
    }, r = () => {
      var s, _;
      return (_ = (s = d.quill) == null ? void 0 : s.root.innerHTML) != null ? _ : "";
    }, i = (s) => {
      d.quill && (d.quill.root.innerHTML = s);
    };
    return {
      editor: S,
      reinit: () => {
        Jn(() => {
          var s, _;
          !W.slots.toolbar && d.quill && ((_ = (s = d.quill) == null ? void 0 : s.getModule("toolbar")) == null || _.container.remove()), A();
        });
      },
      getEditor: h,
      getToolbar: a,
      getQuill: t,
      getContents: e,
      setContents: u,
      getHTML: r,
      setHTML: i,
      pasteHTML: (s, _ = "api") => {
        var w, P;
        const g = (w = d.quill) == null ? void 0 : w.clipboard.convert(s);
        g && ((P = d.quill) == null || P.setContents(g, _));
      },
      getText: o,
      setText: l
    };
  },
  render() {
    var D, W;
    return [
      (W = (D = this.$slots).toolbar) == null ? void 0 : W.call(D),
      Qn("div", { ref: "editor", ...this.$attrs })
    ];
  }
});
export {
  fr as Delta,
  Nn as Quill,
  cr as VusuiEditor
};
