import { defineComponent as er, ref as Sn, watch as Fn, onMounted as nr, onUnmounted as rr, openBlock as Un, createElementBlock as Hn, createElementVNode as Fe, mergeProps as ir, createCommentVNode as or, nextTick as lr } from "vue";
var Kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Gn(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
var Vn = { exports: {} };
/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function(C, X) {
  (function(v, d) {
    C.exports = d();
  })(typeof self < "u" ? self : Kt, function() {
    return function(P) {
      var v = {};
      function d(T) {
        if (v[T])
          return v[T].exports;
        var O = v[T] = {
          i: T,
          l: !1,
          exports: {}
        };
        return P[T].call(O.exports, O, O.exports, d), O.l = !0, O.exports;
      }
      return d.m = P, d.c = v, d.d = function(T, O, g) {
        d.o(T, O) || Object.defineProperty(T, O, {
          configurable: !1,
          enumerable: !0,
          get: g
        });
      }, d.n = function(T) {
        var O = T && T.__esModule ? function() {
          return T.default;
        } : function() {
          return T;
        };
        return d.d(O, "a", O), O;
      }, d.o = function(T, O) {
        return Object.prototype.hasOwnProperty.call(T, O);
      }, d.p = "", d(d.s = 109);
    }([
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", { value: !0 });
        var T = d(17), O = d(18), g = d(19), p = d(45), y = d(46), h = d(47), l = d(48), t = d(49), e = d(12), u = d(32), o = d(33), a = d(31), r = d(1), i = {
          Scope: r.Scope,
          create: r.create,
          find: r.find,
          query: r.query,
          register: r.register,
          Container: T.default,
          Format: O.default,
          Leaf: g.default,
          Embed: l.default,
          Scroll: p.default,
          Block: h.default,
          Inline: y.default,
          Text: t.default,
          Attributor: {
            Attribute: e.default,
            Class: u.default,
            Style: o.default,
            Store: a.default
          }
        };
        v.default = i;
      },
      function(P, v, d) {
        var T = this && this.__extends || function() {
          var a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
            r.__proto__ = i;
          } || function(r, i) {
            for (var f in i)
              i.hasOwnProperty(f) && (r[f] = i[f]);
          };
          return function(r, i) {
            a(r, i);
            function f() {
              this.constructor = r;
            }
            r.prototype = i === null ? Object.create(i) : (f.prototype = i.prototype, new f());
          };
        }();
        Object.defineProperty(v, "__esModule", { value: !0 });
        var O = function(a) {
          T(r, a);
          function r(i) {
            var f = this;
            return i = "[Parchment] " + i, f = a.call(this, i) || this, f.message = i, f.name = f.constructor.name, f;
          }
          return r;
        }(Error);
        v.ParchmentError = O;
        var g = {}, p = {}, y = {}, h = {};
        v.DATA_KEY = "__blot";
        var l;
        (function(a) {
          a[a.TYPE = 3] = "TYPE", a[a.LEVEL = 12] = "LEVEL", a[a.ATTRIBUTE = 13] = "ATTRIBUTE", a[a.BLOT = 14] = "BLOT", a[a.INLINE = 7] = "INLINE", a[a.BLOCK = 11] = "BLOCK", a[a.BLOCK_BLOT = 10] = "BLOCK_BLOT", a[a.INLINE_BLOT = 6] = "INLINE_BLOT", a[a.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", a[a.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", a[a.ANY = 15] = "ANY";
        })(l = v.Scope || (v.Scope = {}));
        function t(a, r) {
          var i = u(a);
          if (i == null)
            throw new O("Unable to create " + a + " blot");
          var f = i, n = a instanceof Node || a.nodeType === Node.TEXT_NODE ? a : f.create(r);
          return new f(n, r);
        }
        v.create = t;
        function e(a, r) {
          return r === void 0 && (r = !1), a == null ? null : a[v.DATA_KEY] != null ? a[v.DATA_KEY].blot : r ? e(a.parentNode, r) : null;
        }
        v.find = e;
        function u(a, r) {
          r === void 0 && (r = l.ANY);
          var i;
          if (typeof a == "string")
            i = h[a] || g[a];
          else if (a instanceof Text || a.nodeType === Node.TEXT_NODE)
            i = h.text;
          else if (typeof a == "number")
            a & l.LEVEL & l.BLOCK ? i = h.block : a & l.LEVEL & l.INLINE && (i = h.inline);
          else if (a instanceof HTMLElement) {
            var f = (a.getAttribute("class") || "").split(/\s+/);
            for (var n in f)
              if (i = p[f[n]], i)
                break;
            i = i || y[a.tagName];
          }
          return i == null ? null : r & l.LEVEL & i.scope && r & l.TYPE & i.scope ? i : null;
        }
        v.query = u;
        function o() {
          for (var a = [], r = 0; r < arguments.length; r++)
            a[r] = arguments[r];
          if (a.length > 1)
            return a.map(function(n) {
              return o(n);
            });
          var i = a[0];
          if (typeof i.blotName != "string" && typeof i.attrName != "string")
            throw new O("Invalid definition");
          if (i.blotName === "abstract")
            throw new O("Cannot register abstract class");
          if (h[i.blotName || i.attrName] = i, typeof i.keyName == "string")
            g[i.keyName] = i;
          else if (i.className != null && (p[i.className] = i), i.tagName != null) {
            Array.isArray(i.tagName) ? i.tagName = i.tagName.map(function(n) {
              return n.toUpperCase();
            }) : i.tagName = i.tagName.toUpperCase();
            var f = Array.isArray(i.tagName) ? i.tagName : [i.tagName];
            f.forEach(function(n) {
              (y[n] == null || i.className == null) && (y[n] = i);
            });
          }
          return i;
        }
        v.register = o;
      },
      function(P, v, d) {
        var T = d(51), O = d(11), g = d(3), p = d(20), y = String.fromCharCode(0), h = function(l) {
          Array.isArray(l) ? this.ops = l : l != null && Array.isArray(l.ops) ? this.ops = l.ops : this.ops = [];
        };
        h.prototype.insert = function(l, t) {
          var e = {};
          return l.length === 0 ? this : (e.insert = l, t != null && typeof t == "object" && Object.keys(t).length > 0 && (e.attributes = t), this.push(e));
        }, h.prototype.delete = function(l) {
          return l <= 0 ? this : this.push({ delete: l });
        }, h.prototype.retain = function(l, t) {
          if (l <= 0)
            return this;
          var e = { retain: l };
          return t != null && typeof t == "object" && Object.keys(t).length > 0 && (e.attributes = t), this.push(e);
        }, h.prototype.push = function(l) {
          var t = this.ops.length, e = this.ops[t - 1];
          if (l = g(!0, {}, l), typeof e == "object") {
            if (typeof l.delete == "number" && typeof e.delete == "number")
              return this.ops[t - 1] = { delete: e.delete + l.delete }, this;
            if (typeof e.delete == "number" && l.insert != null && (t -= 1, e = this.ops[t - 1], typeof e != "object"))
              return this.ops.unshift(l), this;
            if (O(l.attributes, e.attributes)) {
              if (typeof l.insert == "string" && typeof e.insert == "string")
                return this.ops[t - 1] = { insert: e.insert + l.insert }, typeof l.attributes == "object" && (this.ops[t - 1].attributes = l.attributes), this;
              if (typeof l.retain == "number" && typeof e.retain == "number")
                return this.ops[t - 1] = { retain: e.retain + l.retain }, typeof l.attributes == "object" && (this.ops[t - 1].attributes = l.attributes), this;
            }
          }
          return t === this.ops.length ? this.ops.push(l) : this.ops.splice(t, 0, l), this;
        }, h.prototype.chop = function() {
          var l = this.ops[this.ops.length - 1];
          return l && l.retain && !l.attributes && this.ops.pop(), this;
        }, h.prototype.filter = function(l) {
          return this.ops.filter(l);
        }, h.prototype.forEach = function(l) {
          this.ops.forEach(l);
        }, h.prototype.map = function(l) {
          return this.ops.map(l);
        }, h.prototype.partition = function(l) {
          var t = [], e = [];
          return this.forEach(function(u) {
            var o = l(u) ? t : e;
            o.push(u);
          }), [t, e];
        }, h.prototype.reduce = function(l, t) {
          return this.ops.reduce(l, t);
        }, h.prototype.changeLength = function() {
          return this.reduce(function(l, t) {
            return t.insert ? l + p.length(t) : t.delete ? l - t.delete : l;
          }, 0);
        }, h.prototype.length = function() {
          return this.reduce(function(l, t) {
            return l + p.length(t);
          }, 0);
        }, h.prototype.slice = function(l, t) {
          l = l || 0, typeof t != "number" && (t = 1 / 0);
          for (var e = [], u = p.iterator(this.ops), o = 0; o < t && u.hasNext(); ) {
            var a;
            o < l ? a = u.next(l - o) : (a = u.next(t - o), e.push(a)), o += p.length(a);
          }
          return new h(e);
        }, h.prototype.compose = function(l) {
          var t = p.iterator(this.ops), e = p.iterator(l.ops), u = [], o = e.peek();
          if (o != null && typeof o.retain == "number" && o.attributes == null) {
            for (var a = o.retain; t.peekType() === "insert" && t.peekLength() <= a; )
              a -= t.peekLength(), u.push(t.next());
            o.retain - a > 0 && e.next(o.retain - a);
          }
          for (var r = new h(u); t.hasNext() || e.hasNext(); )
            if (e.peekType() === "insert")
              r.push(e.next());
            else if (t.peekType() === "delete")
              r.push(t.next());
            else {
              var i = Math.min(t.peekLength(), e.peekLength()), f = t.next(i), n = e.next(i);
              if (typeof n.retain == "number") {
                var c = {};
                typeof f.retain == "number" ? c.retain = i : c.insert = f.insert;
                var w = p.attributes.compose(f.attributes, n.attributes, typeof f.retain == "number");
                if (w && (c.attributes = w), r.push(c), !e.hasNext() && O(r.ops[r.ops.length - 1], c)) {
                  var b = new h(t.rest());
                  return r.concat(b).chop();
                }
              } else
                typeof n.delete == "number" && typeof f.retain == "number" && r.push(n);
            }
          return r.chop();
        }, h.prototype.concat = function(l) {
          var t = new h(this.ops.slice());
          return l.ops.length > 0 && (t.push(l.ops[0]), t.ops = t.ops.concat(l.ops.slice(1))), t;
        }, h.prototype.diff = function(l, t) {
          if (this.ops === l.ops)
            return new h();
          var e = [this, l].map(function(i) {
            return i.map(function(f) {
              if (f.insert != null)
                return typeof f.insert == "string" ? f.insert : y;
              var n = i === l ? "on" : "with";
              throw new Error("diff() called " + n + " non-document");
            }).join("");
          }), u = new h(), o = T(e[0], e[1], t), a = p.iterator(this.ops), r = p.iterator(l.ops);
          return o.forEach(function(i) {
            for (var f = i[1].length; f > 0; ) {
              var n = 0;
              switch (i[0]) {
                case T.INSERT:
                  n = Math.min(r.peekLength(), f), u.push(r.next(n));
                  break;
                case T.DELETE:
                  n = Math.min(f, a.peekLength()), a.next(n), u.delete(n);
                  break;
                case T.EQUAL:
                  n = Math.min(a.peekLength(), r.peekLength(), f);
                  var c = a.next(n), w = r.next(n);
                  O(c.insert, w.insert) ? u.retain(n, p.attributes.diff(c.attributes, w.attributes)) : u.push(w).delete(n);
                  break;
              }
              f -= n;
            }
          }), u.chop();
        }, h.prototype.eachLine = function(l, t) {
          t = t || `
`;
          for (var e = p.iterator(this.ops), u = new h(), o = 0; e.hasNext(); ) {
            if (e.peekType() !== "insert")
              return;
            var a = e.peek(), r = p.length(a) - e.peekLength(), i = typeof a.insert == "string" ? a.insert.indexOf(t, r) - r : -1;
            if (i < 0)
              u.push(e.next());
            else if (i > 0)
              u.push(e.next(i));
            else {
              if (l(u, e.next(1).attributes || {}, o) === !1)
                return;
              o += 1, u = new h();
            }
          }
          u.length() > 0 && l(u, {}, o);
        }, h.prototype.transform = function(l, t) {
          if (t = !!t, typeof l == "number")
            return this.transformPosition(l, t);
          for (var e = p.iterator(this.ops), u = p.iterator(l.ops), o = new h(); e.hasNext() || u.hasNext(); )
            if (e.peekType() === "insert" && (t || u.peekType() !== "insert"))
              o.retain(p.length(e.next()));
            else if (u.peekType() === "insert")
              o.push(u.next());
            else {
              var a = Math.min(e.peekLength(), u.peekLength()), r = e.next(a), i = u.next(a);
              if (r.delete)
                continue;
              i.delete ? o.push(i) : o.retain(a, p.attributes.transform(r.attributes, i.attributes, t));
            }
          return o.chop();
        }, h.prototype.transformPosition = function(l, t) {
          t = !!t;
          for (var e = p.iterator(this.ops), u = 0; e.hasNext() && u <= l; ) {
            var o = e.peekLength(), a = e.peekType();
            if (e.next(), a === "delete") {
              l -= Math.min(o, l - u);
              continue;
            } else
              a === "insert" && (u < l || !t) && (l += o);
            u += o;
          }
          return l;
        }, P.exports = h;
      },
      function(P, v) {
        var d = Object.prototype.hasOwnProperty, T = Object.prototype.toString, O = Object.defineProperty, g = Object.getOwnPropertyDescriptor, p = function(e) {
          return typeof Array.isArray == "function" ? Array.isArray(e) : T.call(e) === "[object Array]";
        }, y = function(e) {
          if (!e || T.call(e) !== "[object Object]")
            return !1;
          var u = d.call(e, "constructor"), o = e.constructor && e.constructor.prototype && d.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !u && !o)
            return !1;
          var a;
          for (a in e)
            ;
          return typeof a > "u" || d.call(e, a);
        }, h = function(e, u) {
          O && u.name === "__proto__" ? O(e, u.name, {
            enumerable: !0,
            configurable: !0,
            value: u.newValue,
            writable: !0
          }) : e[u.name] = u.newValue;
        }, l = function(e, u) {
          if (u === "__proto__")
            if (d.call(e, u)) {
              if (g)
                return g(e, u).value;
            } else
              return;
          return e[u];
        };
        P.exports = function t() {
          var e, u, o, a, r, i, f = arguments[0], n = 1, c = arguments.length, w = !1;
          for (typeof f == "boolean" && (w = f, f = arguments[1] || {}, n = 2), (f == null || typeof f != "object" && typeof f != "function") && (f = {}); n < c; ++n)
            if (e = arguments[n], e != null)
              for (u in e)
                o = l(f, u), a = l(e, u), f !== a && (w && a && (y(a) || (r = p(a))) ? (r ? (r = !1, i = o && p(o) ? o : []) : i = o && y(o) ? o : {}, h(f, { name: u, newValue: t(w, i, a) })) : typeof a < "u" && h(f, { name: u, newValue: a }));
          return f;
        };
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.default = v.BlockEmbed = v.bubbleFormats = void 0;
        var T = function() {
          function m(_, x) {
            for (var k = 0; k < x.length; k++) {
              var j = x[k];
              j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(_, j.key, j);
            }
          }
          return function(_, x, k) {
            return x && m(_.prototype, x), k && m(_, k), _;
          };
        }(), O = function m(_, x, k) {
          _ === null && (_ = Function.prototype);
          var j = Object.getOwnPropertyDescriptor(_, x);
          if (j === void 0) {
            var B = Object.getPrototypeOf(_);
            return B === null ? void 0 : m(B, x, k);
          } else {
            if ("value" in j)
              return j.value;
            var z = j.get;
            return z === void 0 ? void 0 : z.call(k);
          }
        }, g = d(3), p = f(g), y = d(2), h = f(y), l = d(0), t = f(l), e = d(16), u = f(e), o = d(6), a = f(o), r = d(7), i = f(r);
        function f(m) {
          return m && m.__esModule ? m : { default: m };
        }
        function n(m, _) {
          if (!(m instanceof _))
            throw new TypeError("Cannot call a class as a function");
        }
        function c(m, _) {
          if (!m)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return _ && (typeof _ == "object" || typeof _ == "function") ? _ : m;
        }
        function w(m, _) {
          if (typeof _ != "function" && _ !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof _);
          m.prototype = Object.create(_ && _.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), _ && (Object.setPrototypeOf ? Object.setPrototypeOf(m, _) : m.__proto__ = _);
        }
        var b = 1, A = function(m) {
          w(_, m);
          function _() {
            return n(this, _), c(this, (_.__proto__ || Object.getPrototypeOf(_)).apply(this, arguments));
          }
          return T(_, [{
            key: "attach",
            value: function() {
              O(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "attach", this).call(this), this.attributes = new t.default.Attributor.Store(this.domNode);
            }
          }, {
            key: "delta",
            value: function() {
              return new h.default().insert(this.value(), (0, p.default)(this.formats(), this.attributes.values()));
            }
          }, {
            key: "format",
            value: function(k, j) {
              var B = t.default.query(k, t.default.Scope.BLOCK_ATTRIBUTE);
              B != null && this.attributes.attribute(B, j);
            }
          }, {
            key: "formatAt",
            value: function(k, j, B, z) {
              this.format(B, z);
            }
          }, {
            key: "insertAt",
            value: function(k, j, B) {
              if (typeof j == "string" && j.endsWith(`
`)) {
                var z = t.default.create(L.blotName);
                this.parent.insertBefore(z, k === 0 ? this : this.next), z.insertAt(0, j.slice(0, -1));
              } else
                O(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "insertAt", this).call(this, k, j, B);
            }
          }]), _;
        }(t.default.Embed);
        A.scope = t.default.Scope.BLOCK_BLOT;
        var L = function(m) {
          w(_, m);
          function _(x) {
            n(this, _);
            var k = c(this, (_.__proto__ || Object.getPrototypeOf(_)).call(this, x));
            return k.cache = {}, k;
          }
          return T(_, [{
            key: "delta",
            value: function() {
              return this.cache.delta == null && (this.cache.delta = this.descendants(t.default.Leaf).reduce(function(k, j) {
                return j.length() === 0 ? k : k.insert(j.value(), E(j));
              }, new h.default()).insert(`
`, E(this))), this.cache.delta;
            }
          }, {
            key: "deleteAt",
            value: function(k, j) {
              O(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "deleteAt", this).call(this, k, j), this.cache = {};
            }
          }, {
            key: "formatAt",
            value: function(k, j, B, z) {
              j <= 0 || (t.default.query(B, t.default.Scope.BLOCK) ? k + j === this.length() && this.format(B, z) : O(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "formatAt", this).call(this, k, Math.min(j, this.length() - k - 1), B, z), this.cache = {});
            }
          }, {
            key: "insertAt",
            value: function(k, j, B) {
              if (B != null)
                return O(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "insertAt", this).call(this, k, j, B);
              if (j.length !== 0) {
                var z = j.split(`
`), Y = z.shift();
                Y.length > 0 && (k < this.length() - 1 || this.children.tail == null ? O(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "insertAt", this).call(this, Math.min(k, this.length() - 1), Y) : this.children.tail.insertAt(this.children.tail.length(), Y), this.cache = {});
                var H = this;
                z.reduce(function(R, N) {
                  return H = H.split(R, !0), H.insertAt(0, N), N.length;
                }, k + Y.length);
              }
            }
          }, {
            key: "insertBefore",
            value: function(k, j) {
              var B = this.children.head;
              O(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "insertBefore", this).call(this, k, j), B instanceof u.default && B.remove(), this.cache = {};
            }
          }, {
            key: "length",
            value: function() {
              return this.cache.length == null && (this.cache.length = O(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "length", this).call(this) + b), this.cache.length;
            }
          }, {
            key: "moveChildren",
            value: function(k, j) {
              O(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "moveChildren", this).call(this, k, j), this.cache = {};
            }
          }, {
            key: "optimize",
            value: function(k) {
              O(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "optimize", this).call(this, k), this.cache = {};
            }
          }, {
            key: "path",
            value: function(k) {
              return O(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "path", this).call(this, k, !0);
            }
          }, {
            key: "removeChild",
            value: function(k) {
              O(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "removeChild", this).call(this, k), this.cache = {};
            }
          }, {
            key: "split",
            value: function(k) {
              var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
              if (j && (k === 0 || k >= this.length() - b)) {
                var B = this.clone();
                return k === 0 ? (this.parent.insertBefore(B, this), this) : (this.parent.insertBefore(B, this.next), B);
              } else {
                var z = O(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "split", this).call(this, k, j);
                return this.cache = {}, z;
              }
            }
          }]), _;
        }(t.default.Block);
        L.blotName = "block", L.tagName = "P", L.defaultChild = "break", L.allowedChildren = [a.default, t.default.Embed, i.default];
        function E(m) {
          var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return m == null || (typeof m.formats == "function" && (_ = (0, p.default)(_, m.formats())), m.parent == null || m.parent.blotName == "scroll" || m.parent.statics.scope !== m.statics.scope) ? _ : E(m.parent, _);
        }
        v.bubbleFormats = E, v.BlockEmbed = A, v.default = L;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.default = v.overload = v.expandConfig = void 0;
        var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(H) {
          return typeof H;
        } : function(H) {
          return H && typeof Symbol == "function" && H.constructor === Symbol && H !== Symbol.prototype ? "symbol" : typeof H;
        }, O = function() {
          function H(R, N) {
            var M = [], I = !0, K = !1, F = void 0;
            try {
              for (var q = R[Symbol.iterator](), U; !(I = (U = q.next()).done) && (M.push(U.value), !(N && M.length === N)); I = !0)
                ;
            } catch ($) {
              K = !0, F = $;
            } finally {
              try {
                !I && q.return && q.return();
              } finally {
                if (K)
                  throw F;
              }
            }
            return M;
          }
          return function(R, N) {
            if (Array.isArray(R))
              return R;
            if (Symbol.iterator in Object(R))
              return H(R, N);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), g = function() {
          function H(R, N) {
            for (var M = 0; M < N.length; M++) {
              var I = N[M];
              I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(R, I.key, I);
            }
          }
          return function(R, N, M) {
            return N && H(R.prototype, N), M && H(R, M), R;
          };
        }();
        d(50);
        var p = d(2), y = E(p), h = d(14), l = E(h), t = d(8), e = E(t), u = d(9), o = E(u), a = d(0), r = E(a), i = d(15), f = E(i), n = d(3), c = E(n), w = d(10), b = E(w), A = d(34), L = E(A);
        function E(H) {
          return H && H.__esModule ? H : { default: H };
        }
        function m(H, R, N) {
          return R in H ? Object.defineProperty(H, R, { value: N, enumerable: !0, configurable: !0, writable: !0 }) : H[R] = N, H;
        }
        function _(H, R) {
          if (!(H instanceof R))
            throw new TypeError("Cannot call a class as a function");
        }
        var x = (0, b.default)("quill"), k = function() {
          g(H, null, [{
            key: "debug",
            value: function(N) {
              N === !0 && (N = "log"), b.default.level(N);
            }
          }, {
            key: "find",
            value: function(N) {
              return N.__quill || r.default.find(N);
            }
          }, {
            key: "import",
            value: function(N) {
              return this.imports[N] == null && x.error("Cannot import " + N + ". Are you sure it was registered?"), this.imports[N];
            }
          }, {
            key: "register",
            value: function(N, M) {
              var I = this, K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
              if (typeof N != "string") {
                var F = N.attrName || N.blotName;
                typeof F == "string" ? this.register("formats/" + F, N, M) : Object.keys(N).forEach(function(q) {
                  I.register(q, N[q], M);
                });
              } else
                this.imports[N] != null && !K && x.warn("Overwriting " + N + " with", M), this.imports[N] = M, (N.startsWith("blots/") || N.startsWith("formats/")) && M.blotName !== "abstract" ? r.default.register(M) : N.startsWith("modules") && typeof M.register == "function" && M.register();
            }
          }]);
          function H(R) {
            var N = this, M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (_(this, H), this.options = j(R, M), this.container = this.options.container, this.container == null)
              return x.error("Invalid Quill container", R);
            this.options.debug && H.debug(this.options.debug);
            var I = this.container.innerHTML.trim();
            this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new e.default(), this.scroll = r.default.create(this.root, {
              emitter: this.emitter,
              whitelist: this.options.formats
            }), this.editor = new l.default(this.scroll), this.selection = new f.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(e.default.events.EDITOR_CHANGE, function(F) {
              F === e.default.events.TEXT_CHANGE && N.root.classList.toggle("ql-blank", N.editor.isBlank());
            }), this.emitter.on(e.default.events.SCROLL_UPDATE, function(F, q) {
              var U = N.selection.lastRange, $ = U && U.length === 0 ? U.index : void 0;
              B.call(N, function() {
                return N.editor.update(null, q, $);
              }, F);
            });
            var K = this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">` + I + "<p><br></p></div>");
            this.setContents(K), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable();
          }
          return g(H, [{
            key: "addContainer",
            value: function(N) {
              var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
              if (typeof N == "string") {
                var I = N;
                N = document.createElement("div"), N.classList.add(I);
              }
              return this.container.insertBefore(N, M), N;
            }
          }, {
            key: "blur",
            value: function() {
              this.selection.setRange(null);
            }
          }, {
            key: "deleteText",
            value: function(N, M, I) {
              var K = this, F = z(N, M, I), q = O(F, 4);
              return N = q[0], M = q[1], I = q[3], B.call(this, function() {
                return K.editor.deleteText(N, M);
              }, I, N, -1 * M);
            }
          }, {
            key: "disable",
            value: function() {
              this.enable(!1);
            }
          }, {
            key: "enable",
            value: function() {
              var N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
              this.scroll.enable(N), this.container.classList.toggle("ql-disabled", !N);
            }
          }, {
            key: "focus",
            value: function() {
              var N = this.scrollingContainer.scrollTop;
              this.selection.focus(), this.scrollingContainer.scrollTop = N, this.scrollIntoView();
            }
          }, {
            key: "format",
            value: function(N, M) {
              var I = this, K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.default.sources.API;
              return B.call(this, function() {
                var F = I.getSelection(!0), q = new y.default();
                if (F == null)
                  return q;
                if (r.default.query(N, r.default.Scope.BLOCK))
                  q = I.editor.formatLine(F.index, F.length, m({}, N, M));
                else {
                  if (F.length === 0)
                    return I.selection.format(N, M), q;
                  q = I.editor.formatText(F.index, F.length, m({}, N, M));
                }
                return I.setSelection(F, e.default.sources.SILENT), q;
              }, K);
            }
          }, {
            key: "formatLine",
            value: function(N, M, I, K, F) {
              var q = this, U = void 0, $ = z(N, M, I, K, F), G = O($, 4);
              return N = G[0], M = G[1], U = G[2], F = G[3], B.call(this, function() {
                return q.editor.formatLine(N, M, U);
              }, F, N, 0);
            }
          }, {
            key: "formatText",
            value: function(N, M, I, K, F) {
              var q = this, U = void 0, $ = z(N, M, I, K, F), G = O($, 4);
              return N = G[0], M = G[1], U = G[2], F = G[3], B.call(this, function() {
                return q.editor.formatText(N, M, U);
              }, F, N, 0);
            }
          }, {
            key: "getBounds",
            value: function(N) {
              var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, I = void 0;
              typeof N == "number" ? I = this.selection.getBounds(N, M) : I = this.selection.getBounds(N.index, N.length);
              var K = this.container.getBoundingClientRect();
              return {
                bottom: I.bottom - K.top,
                height: I.height,
                left: I.left - K.left,
                right: I.right - K.left,
                top: I.top - K.top,
                width: I.width
              };
            }
          }, {
            key: "getContents",
            value: function() {
              var N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - N, I = z(N, M), K = O(I, 2);
              return N = K[0], M = K[1], this.editor.getContents(N, M);
            }
          }, {
            key: "getFormat",
            value: function() {
              var N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
              return typeof N == "number" ? this.editor.getFormat(N, M) : this.editor.getFormat(N.index, N.length);
            }
          }, {
            key: "getIndex",
            value: function(N) {
              return N.offset(this.scroll);
            }
          }, {
            key: "getLength",
            value: function() {
              return this.scroll.length();
            }
          }, {
            key: "getLeaf",
            value: function(N) {
              return this.scroll.leaf(N);
            }
          }, {
            key: "getLine",
            value: function(N) {
              return this.scroll.line(N);
            }
          }, {
            key: "getLines",
            value: function() {
              var N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
              return typeof N != "number" ? this.scroll.lines(N.index, N.length) : this.scroll.lines(N, M);
            }
          }, {
            key: "getModule",
            value: function(N) {
              return this.theme.modules[N];
            }
          }, {
            key: "getSelection",
            value: function() {
              var N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
              return N && this.focus(), this.update(), this.selection.getRange()[0];
            }
          }, {
            key: "getText",
            value: function() {
              var N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - N, I = z(N, M), K = O(I, 2);
              return N = K[0], M = K[1], this.editor.getText(N, M);
            }
          }, {
            key: "hasFocus",
            value: function() {
              return this.selection.hasFocus();
            }
          }, {
            key: "insertEmbed",
            value: function(N, M, I) {
              var K = this, F = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : H.sources.API;
              return B.call(this, function() {
                return K.editor.insertEmbed(N, M, I);
              }, F, N);
            }
          }, {
            key: "insertText",
            value: function(N, M, I, K, F) {
              var q = this, U = void 0, $ = z(N, 0, I, K, F), G = O($, 4);
              return N = G[0], U = G[2], F = G[3], B.call(this, function() {
                return q.editor.insertText(N, M, U);
              }, F, N, M.length);
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
            value: function(N, M, I) {
              this.clipboard.dangerouslyPasteHTML(N, M, I);
            }
          }, {
            key: "removeFormat",
            value: function(N, M, I) {
              var K = this, F = z(N, M, I), q = O(F, 4);
              return N = q[0], M = q[1], I = q[3], B.call(this, function() {
                return K.editor.removeFormat(N, M);
              }, I, N);
            }
          }, {
            key: "scrollIntoView",
            value: function() {
              this.selection.scrollIntoView(this.scrollingContainer);
            }
          }, {
            key: "setContents",
            value: function(N) {
              var M = this, I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.default.sources.API;
              return B.call(this, function() {
                N = new y.default(N);
                var K = M.getLength(), F = M.editor.deleteText(0, K), q = M.editor.applyDelta(N), U = q.ops[q.ops.length - 1];
                U != null && typeof U.insert == "string" && U.insert[U.insert.length - 1] === `
` && (M.editor.deleteText(M.getLength() - 1, 1), q.delete(1));
                var $ = F.compose(q);
                return $;
              }, I);
            }
          }, {
            key: "setSelection",
            value: function(N, M, I) {
              if (N == null)
                this.selection.setRange(null, M || H.sources.API);
              else {
                var K = z(N, M, I), F = O(K, 4);
                N = F[0], M = F[1], I = F[3], this.selection.setRange(new i.Range(N, M), I), I !== e.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer);
              }
            }
          }, {
            key: "setText",
            value: function(N) {
              var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.default.sources.API, I = new y.default().insert(N);
              return this.setContents(I, M);
            }
          }, {
            key: "update",
            value: function() {
              var N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.default.sources.USER, M = this.scroll.update(N);
              return this.selection.update(N), M;
            }
          }, {
            key: "updateContents",
            value: function(N) {
              var M = this, I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.default.sources.API;
              return B.call(this, function() {
                return N = new y.default(N), M.editor.applyDelta(N, I);
              }, I, !0);
            }
          }]), H;
        }();
        k.DEFAULTS = {
          bounds: null,
          formats: null,
          modules: {},
          placeholder: "",
          readOnly: !1,
          scrollingContainer: null,
          strict: !0,
          theme: "default"
        }, k.events = e.default.events, k.sources = e.default.sources, k.version = "1.3.7", k.imports = {
          delta: y.default,
          parchment: r.default,
          "core/module": o.default,
          "core/theme": L.default
        };
        function j(H, R) {
          if (R = (0, c.default)(!0, {
            container: H,
            modules: {
              clipboard: !0,
              keyboard: !0,
              history: !0
            }
          }, R), !R.theme || R.theme === k.DEFAULTS.theme)
            R.theme = L.default;
          else if (R.theme = k.import("themes/" + R.theme), R.theme == null)
            throw new Error("Invalid theme " + R.theme + ". Did you register it?");
          var N = (0, c.default)(!0, {}, R.theme.DEFAULTS);
          [N, R].forEach(function(K) {
            K.modules = K.modules || {}, Object.keys(K.modules).forEach(function(F) {
              K.modules[F] === !0 && (K.modules[F] = {});
            });
          });
          var M = Object.keys(N.modules).concat(Object.keys(R.modules)), I = M.reduce(function(K, F) {
            var q = k.import("modules/" + F);
            return q == null ? x.error("Cannot load " + F + " module. Are you sure you registered it?") : K[F] = q.DEFAULTS || {}, K;
          }, {});
          return R.modules != null && R.modules.toolbar && R.modules.toolbar.constructor !== Object && (R.modules.toolbar = {
            container: R.modules.toolbar
          }), R = (0, c.default)(!0, {}, k.DEFAULTS, { modules: I }, N, R), ["bounds", "container", "scrollingContainer"].forEach(function(K) {
            typeof R[K] == "string" && (R[K] = document.querySelector(R[K]));
          }), R.modules = Object.keys(R.modules).reduce(function(K, F) {
            return R.modules[F] && (K[F] = R.modules[F]), K;
          }, {}), R;
        }
        function B(H, R, N, M) {
          if (this.options.strict && !this.isEnabled() && R === e.default.sources.USER)
            return new y.default();
          var I = N == null ? null : this.getSelection(), K = this.editor.delta, F = H();
          if (I != null && (N === !0 && (N = I.index), M == null ? I = Y(I, F, R) : M !== 0 && (I = Y(I, N, M, R)), this.setSelection(I, e.default.sources.SILENT)), F.length() > 0) {
            var q, U = [e.default.events.TEXT_CHANGE, F, K, R];
            if ((q = this.emitter).emit.apply(q, [e.default.events.EDITOR_CHANGE].concat(U)), R !== e.default.sources.SILENT) {
              var $;
              ($ = this.emitter).emit.apply($, U);
            }
          }
          return F;
        }
        function z(H, R, N, M, I) {
          var K = {};
          return typeof H.index == "number" && typeof H.length == "number" ? typeof R != "number" ? (I = M, M = N, N = R, R = H.length, H = H.index) : (R = H.length, H = H.index) : typeof R != "number" && (I = M, M = N, N = R, R = 0), (typeof N > "u" ? "undefined" : T(N)) === "object" ? (K = N, I = M) : typeof N == "string" && (M != null ? K[N] = M : I = N), I = I || e.default.sources.API, [H, R, K, I];
        }
        function Y(H, R, N, M) {
          if (H == null)
            return null;
          var I = void 0, K = void 0;
          if (R instanceof y.default) {
            var F = [H.index, H.index + H.length].map(function(G) {
              return R.transformPosition(G, M !== e.default.sources.USER);
            }), q = O(F, 2);
            I = q[0], K = q[1];
          } else {
            var U = [H.index, H.index + H.length].map(function(G) {
              return G < R || G === R && M === e.default.sources.USER ? G : N >= 0 ? G + N : Math.max(R, G + N);
            }), $ = O(U, 2);
            I = $[0], K = $[1];
          }
          return new i.Range(I, K - I);
        }
        v.expandConfig = j, v.overload = z, v.default = k;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = function() {
          function a(r, i) {
            for (var f = 0; f < i.length; f++) {
              var n = i[f];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, f) {
            return i && a(r.prototype, i), f && a(r, f), r;
          };
        }(), O = function a(r, i, f) {
          r === null && (r = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(r, i);
          if (n === void 0) {
            var c = Object.getPrototypeOf(r);
            return c === null ? void 0 : a(c, i, f);
          } else {
            if ("value" in n)
              return n.value;
            var w = n.get;
            return w === void 0 ? void 0 : w.call(f);
          }
        }, g = d(7), p = l(g), y = d(0), h = l(y);
        function l(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function t(a, r) {
          if (!(a instanceof r))
            throw new TypeError("Cannot call a class as a function");
        }
        function e(a, r) {
          if (!a)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return r && (typeof r == "object" || typeof r == "function") ? r : a;
        }
        function u(a, r) {
          if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof r);
          a.prototype = Object.create(r && r.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(a, r) : a.__proto__ = r);
        }
        var o = function(a) {
          u(r, a);
          function r() {
            return t(this, r), e(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
          }
          return T(r, [{
            key: "formatAt",
            value: function(f, n, c, w) {
              if (r.compare(this.statics.blotName, c) < 0 && h.default.query(c, h.default.Scope.BLOT)) {
                var b = this.isolate(f, n);
                w && b.wrap(c, w);
              } else
                O(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "formatAt", this).call(this, f, n, c, w);
            }
          }, {
            key: "optimize",
            value: function(f) {
              if (O(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "optimize", this).call(this, f), this.parent instanceof r && r.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                var n = this.parent.isolate(this.offset(), this.length());
                this.moveChildren(n), n.wrap(this);
              }
            }
          }], [{
            key: "compare",
            value: function(f, n) {
              var c = r.order.indexOf(f), w = r.order.indexOf(n);
              return c >= 0 || w >= 0 ? c - w : f === n ? 0 : f < n ? -1 : 1;
            }
          }]), r;
        }(h.default.Inline);
        o.allowedChildren = [o, h.default.Embed, p.default], o.order = [
          "cursor",
          "inline",
          "underline",
          "strike",
          "italic",
          "bold",
          "script",
          "link",
          "code"
        ], v.default = o;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = d(0), O = g(T);
        function g(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function p(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function y(t, e) {
          if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function h(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        var l = function(t) {
          h(e, t);
          function e() {
            return p(this, e), y(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }
          return e;
        }(O.default.Text);
        v.default = l;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = function() {
          function i(f, n) {
            for (var c = 0; c < n.length; c++) {
              var w = n[c];
              w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(f, w.key, w);
            }
          }
          return function(f, n, c) {
            return n && i(f.prototype, n), c && i(f, c), f;
          };
        }(), O = function i(f, n, c) {
          f === null && (f = Function.prototype);
          var w = Object.getOwnPropertyDescriptor(f, n);
          if (w === void 0) {
            var b = Object.getPrototypeOf(f);
            return b === null ? void 0 : i(b, n, c);
          } else {
            if ("value" in w)
              return w.value;
            var A = w.get;
            return A === void 0 ? void 0 : A.call(c);
          }
        }, g = d(54), p = l(g), y = d(10), h = l(y);
        function l(i) {
          return i && i.__esModule ? i : { default: i };
        }
        function t(i, f) {
          if (!(i instanceof f))
            throw new TypeError("Cannot call a class as a function");
        }
        function e(i, f) {
          if (!i)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return f && (typeof f == "object" || typeof f == "function") ? f : i;
        }
        function u(i, f) {
          if (typeof f != "function" && f !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof f);
          i.prototype = Object.create(f && f.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), f && (Object.setPrototypeOf ? Object.setPrototypeOf(i, f) : i.__proto__ = f);
        }
        var o = (0, h.default)("quill:events"), a = ["selectionchange", "mousedown", "mouseup", "click"];
        a.forEach(function(i) {
          document.addEventListener(i, function() {
            for (var f = arguments.length, n = Array(f), c = 0; c < f; c++)
              n[c] = arguments[c];
            [].slice.call(document.querySelectorAll(".ql-container")).forEach(function(w) {
              if (w.__quill && w.__quill.emitter) {
                var b;
                (b = w.__quill.emitter).handleDOM.apply(b, n);
              }
            });
          });
        });
        var r = function(i) {
          u(f, i);
          function f() {
            t(this, f);
            var n = e(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this));
            return n.listeners = {}, n.on("error", o.error), n;
          }
          return T(f, [{
            key: "emit",
            value: function() {
              o.log.apply(o, arguments), O(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "emit", this).apply(this, arguments);
            }
          }, {
            key: "handleDOM",
            value: function(c) {
              for (var w = arguments.length, b = Array(w > 1 ? w - 1 : 0), A = 1; A < w; A++)
                b[A - 1] = arguments[A];
              (this.listeners[c.type] || []).forEach(function(L) {
                var E = L.node, m = L.handler;
                (c.target === E || E.contains(c.target)) && m.apply(void 0, [c].concat(b));
              });
            }
          }, {
            key: "listenDOM",
            value: function(c, w, b) {
              this.listeners[c] || (this.listeners[c] = []), this.listeners[c].push({ node: w, handler: b });
            }
          }]), f;
        }(p.default);
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
        }, v.default = r;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        function T(g, p) {
          if (!(g instanceof p))
            throw new TypeError("Cannot call a class as a function");
        }
        var O = function g(p) {
          var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          T(this, g), this.quill = p, this.options = y;
        };
        O.DEFAULTS = {}, v.default = O;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = ["error", "warn", "log", "info"], O = "warn";
        function g(y) {
          if (T.indexOf(y) <= T.indexOf(O)) {
            for (var h, l = arguments.length, t = Array(l > 1 ? l - 1 : 0), e = 1; e < l; e++)
              t[e - 1] = arguments[e];
            (h = console)[y].apply(h, t);
          }
        }
        function p(y) {
          return T.reduce(function(h, l) {
            return h[l] = g.bind(console, l, y), h;
          }, {});
        }
        g.level = p.level = function(y) {
          O = y;
        }, v.default = p;
      },
      function(P, v, d) {
        var T = Array.prototype.slice, O = d(52), g = d(53), p = P.exports = function(t, e, u) {
          return u || (u = {}), t === e ? !0 : t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || typeof t != "object" && typeof e != "object" ? u.strict ? t === e : t == e : l(t, e, u);
        };
        function y(t) {
          return t == null;
        }
        function h(t) {
          return !(!t || typeof t != "object" || typeof t.length != "number" || typeof t.copy != "function" || typeof t.slice != "function" || t.length > 0 && typeof t[0] != "number");
        }
        function l(t, e, u) {
          var o, a;
          if (y(t) || y(e) || t.prototype !== e.prototype)
            return !1;
          if (g(t))
            return g(e) ? (t = T.call(t), e = T.call(e), p(t, e, u)) : !1;
          if (h(t)) {
            if (!h(e) || t.length !== e.length)
              return !1;
            for (o = 0; o < t.length; o++)
              if (t[o] !== e[o])
                return !1;
            return !0;
          }
          try {
            var r = O(t), i = O(e);
          } catch {
            return !1;
          }
          if (r.length != i.length)
            return !1;
          for (r.sort(), i.sort(), o = r.length - 1; o >= 0; o--)
            if (r[o] != i[o])
              return !1;
          for (o = r.length - 1; o >= 0; o--)
            if (a = r[o], !p(t[a], e[a], u))
              return !1;
          return typeof t == typeof e;
        }
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", { value: !0 });
        var T = d(1), O = function() {
          function g(p, y, h) {
            h === void 0 && (h = {}), this.attrName = p, this.keyName = y;
            var l = T.Scope.TYPE & T.Scope.ATTRIBUTE;
            h.scope != null ? this.scope = h.scope & T.Scope.LEVEL | l : this.scope = T.Scope.ATTRIBUTE, h.whitelist != null && (this.whitelist = h.whitelist);
          }
          return g.keys = function(p) {
            return [].map.call(p.attributes, function(y) {
              return y.name;
            });
          }, g.prototype.add = function(p, y) {
            return this.canAdd(p, y) ? (p.setAttribute(this.keyName, y), !0) : !1;
          }, g.prototype.canAdd = function(p, y) {
            var h = T.query(p, T.Scope.BLOT & (this.scope | T.Scope.TYPE));
            return h == null ? !1 : this.whitelist == null ? !0 : typeof y == "string" ? this.whitelist.indexOf(y.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(y) > -1;
          }, g.prototype.remove = function(p) {
            p.removeAttribute(this.keyName);
          }, g.prototype.value = function(p) {
            var y = p.getAttribute(this.keyName);
            return this.canAdd(p, y) && y ? y : "";
          }, g;
        }();
        v.default = O;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.default = v.Code = void 0;
        var T = function() {
          function A(L, E) {
            var m = [], _ = !0, x = !1, k = void 0;
            try {
              for (var j = L[Symbol.iterator](), B; !(_ = (B = j.next()).done) && (m.push(B.value), !(E && m.length === E)); _ = !0)
                ;
            } catch (z) {
              x = !0, k = z;
            } finally {
              try {
                !_ && j.return && j.return();
              } finally {
                if (x)
                  throw k;
              }
            }
            return m;
          }
          return function(L, E) {
            if (Array.isArray(L))
              return L;
            if (Symbol.iterator in Object(L))
              return A(L, E);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), O = function() {
          function A(L, E) {
            for (var m = 0; m < E.length; m++) {
              var _ = E[m];
              _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(L, _.key, _);
            }
          }
          return function(L, E, m) {
            return E && A(L.prototype, E), m && A(L, m), L;
          };
        }(), g = function A(L, E, m) {
          L === null && (L = Function.prototype);
          var _ = Object.getOwnPropertyDescriptor(L, E);
          if (_ === void 0) {
            var x = Object.getPrototypeOf(L);
            return x === null ? void 0 : A(x, E, m);
          } else {
            if ("value" in _)
              return _.value;
            var k = _.get;
            return k === void 0 ? void 0 : k.call(m);
          }
        }, p = d(2), y = i(p), h = d(0), l = i(h), t = d(4), e = i(t), u = d(6), o = i(u), a = d(7), r = i(a);
        function i(A) {
          return A && A.__esModule ? A : { default: A };
        }
        function f(A, L) {
          if (!(A instanceof L))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(A, L) {
          if (!A)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return L && (typeof L == "object" || typeof L == "function") ? L : A;
        }
        function c(A, L) {
          if (typeof L != "function" && L !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof L);
          A.prototype = Object.create(L && L.prototype, { constructor: { value: A, enumerable: !1, writable: !0, configurable: !0 } }), L && (Object.setPrototypeOf ? Object.setPrototypeOf(A, L) : A.__proto__ = L);
        }
        var w = function(A) {
          c(L, A);
          function L() {
            return f(this, L), n(this, (L.__proto__ || Object.getPrototypeOf(L)).apply(this, arguments));
          }
          return L;
        }(o.default);
        w.blotName = "code", w.tagName = "CODE";
        var b = function(A) {
          c(L, A);
          function L() {
            return f(this, L), n(this, (L.__proto__ || Object.getPrototypeOf(L)).apply(this, arguments));
          }
          return O(L, [{
            key: "delta",
            value: function() {
              var m = this, _ = this.domNode.textContent;
              return _.endsWith(`
`) && (_ = _.slice(0, -1)), _.split(`
`).reduce(function(x, k) {
                return x.insert(k).insert(`
`, m.formats());
              }, new y.default());
            }
          }, {
            key: "format",
            value: function(m, _) {
              if (!(m === this.statics.blotName && _)) {
                var x = this.descendant(r.default, this.length() - 1), k = T(x, 1), j = k[0];
                j != null && j.deleteAt(j.length() - 1, 1), g(L.prototype.__proto__ || Object.getPrototypeOf(L.prototype), "format", this).call(this, m, _);
              }
            }
          }, {
            key: "formatAt",
            value: function(m, _, x, k) {
              if (_ !== 0 && !(l.default.query(x, l.default.Scope.BLOCK) == null || x === this.statics.blotName && k === this.statics.formats(this.domNode))) {
                var j = this.newlineIndex(m);
                if (!(j < 0 || j >= m + _)) {
                  var B = this.newlineIndex(m, !0) + 1, z = j - B + 1, Y = this.isolate(B, z), H = Y.next;
                  Y.format(x, k), H instanceof L && H.formatAt(0, m - B + _ - z, x, k);
                }
              }
            }
          }, {
            key: "insertAt",
            value: function(m, _, x) {
              if (x == null) {
                var k = this.descendant(r.default, m), j = T(k, 2), B = j[0], z = j[1];
                B.insertAt(z, _);
              }
            }
          }, {
            key: "length",
            value: function() {
              var m = this.domNode.textContent.length;
              return this.domNode.textContent.endsWith(`
`) ? m : m + 1;
            }
          }, {
            key: "newlineIndex",
            value: function(m) {
              var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
              if (_)
                return this.domNode.textContent.slice(0, m).lastIndexOf(`
`);
              var x = this.domNode.textContent.slice(m).indexOf(`
`);
              return x > -1 ? m + x : -1;
            }
          }, {
            key: "optimize",
            value: function(m) {
              this.domNode.textContent.endsWith(`
`) || this.appendChild(l.default.create("text", `
`)), g(L.prototype.__proto__ || Object.getPrototypeOf(L.prototype), "optimize", this).call(this, m);
              var _ = this.next;
              _ != null && _.prev === this && _.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === _.statics.formats(_.domNode) && (_.optimize(m), _.moveChildren(this), _.remove());
            }
          }, {
            key: "replace",
            value: function(m) {
              g(L.prototype.__proto__ || Object.getPrototypeOf(L.prototype), "replace", this).call(this, m), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(_) {
                var x = l.default.find(_);
                x == null ? _.parentNode.removeChild(_) : x instanceof l.default.Embed ? x.remove() : x.unwrap();
              });
            }
          }], [{
            key: "create",
            value: function(m) {
              var _ = g(L.__proto__ || Object.getPrototypeOf(L), "create", this).call(this, m);
              return _.setAttribute("spellcheck", !1), _;
            }
          }, {
            key: "formats",
            value: function() {
              return !0;
            }
          }]), L;
        }(e.default);
        b.blotName = "code-block", b.tagName = "PRE", b.TAB = "  ", v.Code = w, v.default = b;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(H) {
          return typeof H;
        } : function(H) {
          return H && typeof Symbol == "function" && H.constructor === Symbol && H !== Symbol.prototype ? "symbol" : typeof H;
        }, O = function() {
          function H(R, N) {
            var M = [], I = !0, K = !1, F = void 0;
            try {
              for (var q = R[Symbol.iterator](), U; !(I = (U = q.next()).done) && (M.push(U.value), !(N && M.length === N)); I = !0)
                ;
            } catch ($) {
              K = !0, F = $;
            } finally {
              try {
                !I && q.return && q.return();
              } finally {
                if (K)
                  throw F;
              }
            }
            return M;
          }
          return function(R, N) {
            if (Array.isArray(R))
              return R;
            if (Symbol.iterator in Object(R))
              return H(R, N);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), g = function() {
          function H(R, N) {
            for (var M = 0; M < N.length; M++) {
              var I = N[M];
              I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(R, I.key, I);
            }
          }
          return function(R, N, M) {
            return N && H(R.prototype, N), M && H(R, M), R;
          };
        }(), p = d(2), y = _(p), h = d(20), l = _(h), t = d(0), e = _(t), u = d(13), o = _(u), a = d(24), r = _(a), i = d(4), f = _(i), n = d(16), c = _(n), w = d(21), b = _(w), A = d(11), L = _(A), E = d(3), m = _(E);
        function _(H) {
          return H && H.__esModule ? H : { default: H };
        }
        function x(H, R, N) {
          return R in H ? Object.defineProperty(H, R, { value: N, enumerable: !0, configurable: !0, writable: !0 }) : H[R] = N, H;
        }
        function k(H, R) {
          if (!(H instanceof R))
            throw new TypeError("Cannot call a class as a function");
        }
        var j = /^[ -~]*$/, B = function() {
          function H(R) {
            k(this, H), this.scroll = R, this.delta = this.getDelta();
          }
          return g(H, [{
            key: "applyDelta",
            value: function(N) {
              var M = this, I = !1;
              this.scroll.update();
              var K = this.scroll.length();
              return this.scroll.batchStart(), N = Y(N), N.reduce(function(F, q) {
                var U = q.retain || q.delete || q.insert.length || 1, $ = q.attributes || {};
                if (q.insert != null) {
                  if (typeof q.insert == "string") {
                    var G = q.insert;
                    G.endsWith(`
`) && I && (I = !1, G = G.slice(0, -1)), F >= K && !G.endsWith(`
`) && (I = !0), M.scroll.insertAt(F, G);
                    var Q = M.scroll.line(F), nt = O(Q, 2), it = nt[0], lt = nt[1], ft = (0, m.default)({}, (0, i.bubbleFormats)(it));
                    if (it instanceof f.default) {
                      var ht = it.descendant(e.default.Leaf, lt), mt = O(ht, 1), gt = mt[0];
                      ft = (0, m.default)(ft, (0, i.bubbleFormats)(gt));
                    }
                    $ = l.default.attributes.diff(ft, $) || {};
                  } else if (T(q.insert) === "object") {
                    var Z = Object.keys(q.insert)[0];
                    if (Z == null)
                      return F;
                    M.scroll.insertAt(F, Z, q.insert[Z]);
                  }
                  K += U;
                }
                return Object.keys($).forEach(function(W) {
                  M.scroll.formatAt(F, U, W, $[W]);
                }), F + U;
              }, 0), N.reduce(function(F, q) {
                return typeof q.delete == "number" ? (M.scroll.deleteAt(F, q.delete), F) : F + (q.retain || q.insert.length || 1);
              }, 0), this.scroll.batchEnd(), this.update(N);
            }
          }, {
            key: "deleteText",
            value: function(N, M) {
              return this.scroll.deleteAt(N, M), this.update(new y.default().retain(N).delete(M));
            }
          }, {
            key: "formatLine",
            value: function(N, M) {
              var I = this, K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              return this.scroll.update(), Object.keys(K).forEach(function(F) {
                if (!(I.scroll.whitelist != null && !I.scroll.whitelist[F])) {
                  var q = I.scroll.lines(N, Math.max(M, 1)), U = M;
                  q.forEach(function($) {
                    var G = $.length();
                    if (!($ instanceof o.default))
                      $.format(F, K[F]);
                    else {
                      var Q = N - $.offset(I.scroll), nt = $.newlineIndex(Q + U) - Q + 1;
                      $.formatAt(Q, nt, F, K[F]);
                    }
                    U -= G;
                  });
                }
              }), this.scroll.optimize(), this.update(new y.default().retain(N).retain(M, (0, b.default)(K)));
            }
          }, {
            key: "formatText",
            value: function(N, M) {
              var I = this, K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              return Object.keys(K).forEach(function(F) {
                I.scroll.formatAt(N, M, F, K[F]);
              }), this.update(new y.default().retain(N).retain(M, (0, b.default)(K)));
            }
          }, {
            key: "getContents",
            value: function(N, M) {
              return this.delta.slice(N, N + M);
            }
          }, {
            key: "getDelta",
            value: function() {
              return this.scroll.lines().reduce(function(N, M) {
                return N.concat(M.delta());
              }, new y.default());
            }
          }, {
            key: "getFormat",
            value: function(N) {
              var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, I = [], K = [];
              M === 0 ? this.scroll.path(N).forEach(function(q) {
                var U = O(q, 1), $ = U[0];
                $ instanceof f.default ? I.push($) : $ instanceof e.default.Leaf && K.push($);
              }) : (I = this.scroll.lines(N, M), K = this.scroll.descendants(e.default.Leaf, N, M));
              var F = [I, K].map(function(q) {
                if (q.length === 0)
                  return {};
                for (var U = (0, i.bubbleFormats)(q.shift()); Object.keys(U).length > 0; ) {
                  var $ = q.shift();
                  if ($ == null)
                    return U;
                  U = z((0, i.bubbleFormats)($), U);
                }
                return U;
              });
              return m.default.apply(m.default, F);
            }
          }, {
            key: "getText",
            value: function(N, M) {
              return this.getContents(N, M).filter(function(I) {
                return typeof I.insert == "string";
              }).map(function(I) {
                return I.insert;
              }).join("");
            }
          }, {
            key: "insertEmbed",
            value: function(N, M, I) {
              return this.scroll.insertAt(N, M, I), this.update(new y.default().retain(N).insert(x({}, M, I)));
            }
          }, {
            key: "insertText",
            value: function(N, M) {
              var I = this, K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              return M = M.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(N, M), Object.keys(K).forEach(function(F) {
                I.scroll.formatAt(N, M.length, F, K[F]);
              }), this.update(new y.default().retain(N).insert(M, (0, b.default)(K)));
            }
          }, {
            key: "isBlank",
            value: function() {
              if (this.scroll.children.length == 0)
                return !0;
              if (this.scroll.children.length > 1)
                return !1;
              var N = this.scroll.children.head;
              return N.statics.blotName !== f.default.blotName || N.children.length > 1 ? !1 : N.children.head instanceof c.default;
            }
          }, {
            key: "removeFormat",
            value: function(N, M) {
              var I = this.getText(N, M), K = this.scroll.line(N + M), F = O(K, 2), q = F[0], U = F[1], $ = 0, G = new y.default();
              q != null && (q instanceof o.default ? $ = q.newlineIndex(U) - U + 1 : $ = q.length() - U, G = q.delta().slice(U, U + $ - 1).insert(`
`));
              var Q = this.getContents(N, M + $), nt = Q.diff(new y.default().insert(I).concat(G)), it = new y.default().retain(N).concat(nt);
              return this.applyDelta(it);
            }
          }, {
            key: "update",
            value: function(N) {
              var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, K = this.delta;
              if (M.length === 1 && M[0].type === "characterData" && M[0].target.data.match(j) && e.default.find(M[0].target)) {
                var F = e.default.find(M[0].target), q = (0, i.bubbleFormats)(F), U = F.offset(this.scroll), $ = M[0].oldValue.replace(r.default.CONTENTS, ""), G = new y.default().insert($), Q = new y.default().insert(F.value()), nt = new y.default().retain(U).concat(G.diff(Q, I));
                N = nt.reduce(function(it, lt) {
                  return lt.insert ? it.insert(lt.insert, q) : it.push(lt);
                }, new y.default()), this.delta = K.compose(N);
              } else
                this.delta = this.getDelta(), (!N || !(0, L.default)(K.compose(N), this.delta)) && (N = K.diff(this.delta, I));
              return N;
            }
          }]), H;
        }();
        function z(H, R) {
          return Object.keys(R).reduce(function(N, M) {
            return H[M] == null || (R[M] === H[M] ? N[M] = R[M] : Array.isArray(R[M]) ? R[M].indexOf(H[M]) < 0 && (N[M] = R[M].concat([H[M]])) : N[M] = [R[M], H[M]]), N;
          }, {});
        }
        function Y(H) {
          return H.reduce(function(R, N) {
            if (N.insert === 1) {
              var M = (0, b.default)(N.attributes);
              return delete M.image, R.insert({ image: N.attributes.image }, M);
            }
            if (N.attributes != null && (N.attributes.list === !0 || N.attributes.bullet === !0) && (N = (0, b.default)(N), N.attributes.list ? N.attributes.list = "ordered" : (N.attributes.list = "bullet", delete N.attributes.bullet)), typeof N.insert == "string") {
              var I = N.insert.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
              return R.insert(I, N.attributes);
            }
            return R.push(N);
          }, new y.default());
        }
        v.default = B;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.default = v.Range = void 0;
        var T = function() {
          function A(L, E) {
            var m = [], _ = !0, x = !1, k = void 0;
            try {
              for (var j = L[Symbol.iterator](), B; !(_ = (B = j.next()).done) && (m.push(B.value), !(E && m.length === E)); _ = !0)
                ;
            } catch (z) {
              x = !0, k = z;
            } finally {
              try {
                !_ && j.return && j.return();
              } finally {
                if (x)
                  throw k;
              }
            }
            return m;
          }
          return function(L, E) {
            if (Array.isArray(L))
              return L;
            if (Symbol.iterator in Object(L))
              return A(L, E);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), O = function() {
          function A(L, E) {
            for (var m = 0; m < E.length; m++) {
              var _ = E[m];
              _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(L, _.key, _);
            }
          }
          return function(L, E, m) {
            return E && A(L.prototype, E), m && A(L, m), L;
          };
        }(), g = d(0), p = r(g), y = d(21), h = r(y), l = d(11), t = r(l), e = d(8), u = r(e), o = d(10), a = r(o);
        function r(A) {
          return A && A.__esModule ? A : { default: A };
        }
        function i(A) {
          if (Array.isArray(A)) {
            for (var L = 0, E = Array(A.length); L < A.length; L++)
              E[L] = A[L];
            return E;
          } else
            return Array.from(A);
        }
        function f(A, L) {
          if (!(A instanceof L))
            throw new TypeError("Cannot call a class as a function");
        }
        var n = (0, a.default)("quill:selection"), c = function A(L) {
          var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          f(this, A), this.index = L, this.length = E;
        }, w = function() {
          function A(L, E) {
            var m = this;
            f(this, A), this.emitter = E, this.scroll = L, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = p.default.create("cursor", this), this.lastRange = this.savedRange = new c(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function() {
              m.mouseDown || setTimeout(m.update.bind(m, u.default.sources.USER), 1);
            }), this.emitter.on(u.default.events.EDITOR_CHANGE, function(_, x) {
              _ === u.default.events.TEXT_CHANGE && x.length() > 0 && m.update(u.default.sources.SILENT);
            }), this.emitter.on(u.default.events.SCROLL_BEFORE_UPDATE, function() {
              if (!!m.hasFocus()) {
                var _ = m.getNativeRange();
                _ != null && _.start.node !== m.cursor.textNode && m.emitter.once(u.default.events.SCROLL_UPDATE, function() {
                  try {
                    m.setNativeRange(_.start.node, _.start.offset, _.end.node, _.end.offset);
                  } catch {
                  }
                });
              }
            }), this.emitter.on(u.default.events.SCROLL_OPTIMIZE, function(_, x) {
              if (x.range) {
                var k = x.range, j = k.startNode, B = k.startOffset, z = k.endNode, Y = k.endOffset;
                m.setNativeRange(j, B, z, Y);
              }
            }), this.update(u.default.sources.SILENT);
          }
          return O(A, [{
            key: "handleComposition",
            value: function() {
              var E = this;
              this.root.addEventListener("compositionstart", function() {
                E.composing = !0;
              }), this.root.addEventListener("compositionend", function() {
                if (E.composing = !1, E.cursor.parent) {
                  var m = E.cursor.restore();
                  if (!m)
                    return;
                  setTimeout(function() {
                    E.setNativeRange(m.startNode, m.startOffset, m.endNode, m.endOffset);
                  }, 1);
                }
              });
            }
          }, {
            key: "handleDragging",
            value: function() {
              var E = this;
              this.emitter.listenDOM("mousedown", document.body, function() {
                E.mouseDown = !0;
              }), this.emitter.listenDOM("mouseup", document.body, function() {
                E.mouseDown = !1, E.update(u.default.sources.USER);
              });
            }
          }, {
            key: "focus",
            value: function() {
              this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
            }
          }, {
            key: "format",
            value: function(E, m) {
              if (!(this.scroll.whitelist != null && !this.scroll.whitelist[E])) {
                this.scroll.update();
                var _ = this.getNativeRange();
                if (!(_ == null || !_.native.collapsed || p.default.query(E, p.default.Scope.BLOCK))) {
                  if (_.start.node !== this.cursor.textNode) {
                    var x = p.default.find(_.start.node, !1);
                    if (x == null)
                      return;
                    if (x instanceof p.default.Leaf) {
                      var k = x.split(_.start.offset);
                      x.parent.insertBefore(this.cursor, k);
                    } else
                      x.insertBefore(this.cursor, _.start.node);
                    this.cursor.attach();
                  }
                  this.cursor.format(E, m), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
                }
              }
            }
          }, {
            key: "getBounds",
            value: function(E) {
              var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, _ = this.scroll.length();
              E = Math.min(E, _ - 1), m = Math.min(E + m, _ - 1) - E;
              var x = void 0, k = this.scroll.leaf(E), j = T(k, 2), B = j[0], z = j[1];
              if (B == null)
                return null;
              var Y = B.position(z, !0), H = T(Y, 2);
              x = H[0], z = H[1];
              var R = document.createRange();
              if (m > 0) {
                R.setStart(x, z);
                var N = this.scroll.leaf(E + m), M = T(N, 2);
                if (B = M[0], z = M[1], B == null)
                  return null;
                var I = B.position(z, !0), K = T(I, 2);
                return x = K[0], z = K[1], R.setEnd(x, z), R.getBoundingClientRect();
              } else {
                var F = "left", q = void 0;
                return x instanceof Text ? (z < x.data.length ? (R.setStart(x, z), R.setEnd(x, z + 1)) : (R.setStart(x, z - 1), R.setEnd(x, z), F = "right"), q = R.getBoundingClientRect()) : (q = B.domNode.getBoundingClientRect(), z > 0 && (F = "right")), {
                  bottom: q.top + q.height,
                  height: q.height,
                  left: q[F],
                  right: q[F],
                  top: q.top,
                  width: 0
                };
              }
            }
          }, {
            key: "getNativeRange",
            value: function() {
              var E = document.getSelection();
              if (E == null || E.rangeCount <= 0)
                return null;
              var m = E.getRangeAt(0);
              if (m == null)
                return null;
              var _ = this.normalizeNative(m);
              return n.info("getNativeRange", _), _;
            }
          }, {
            key: "getRange",
            value: function() {
              var E = this.getNativeRange();
              if (E == null)
                return [null, null];
              var m = this.normalizedToRange(E);
              return [m, E];
            }
          }, {
            key: "hasFocus",
            value: function() {
              return document.activeElement === this.root;
            }
          }, {
            key: "normalizedToRange",
            value: function(E) {
              var m = this, _ = [[E.start.node, E.start.offset]];
              E.native.collapsed || _.push([E.end.node, E.end.offset]);
              var x = _.map(function(B) {
                var z = T(B, 2), Y = z[0], H = z[1], R = p.default.find(Y, !0), N = R.offset(m.scroll);
                return H === 0 ? N : R instanceof p.default.Container ? N + R.length() : N + R.index(Y, H);
              }), k = Math.min(Math.max.apply(Math, i(x)), this.scroll.length() - 1), j = Math.min.apply(Math, [k].concat(i(x)));
              return new c(j, k - j);
            }
          }, {
            key: "normalizeNative",
            value: function(E) {
              if (!b(this.root, E.startContainer) || !E.collapsed && !b(this.root, E.endContainer))
                return null;
              var m = {
                start: { node: E.startContainer, offset: E.startOffset },
                end: { node: E.endContainer, offset: E.endOffset },
                native: E
              };
              return [m.start, m.end].forEach(function(_) {
                for (var x = _.node, k = _.offset; !(x instanceof Text) && x.childNodes.length > 0; )
                  if (x.childNodes.length > k)
                    x = x.childNodes[k], k = 0;
                  else if (x.childNodes.length === k)
                    x = x.lastChild, k = x instanceof Text ? x.data.length : x.childNodes.length + 1;
                  else
                    break;
                _.node = x, _.offset = k;
              }), m;
            }
          }, {
            key: "rangeToNative",
            value: function(E) {
              var m = this, _ = E.collapsed ? [E.index] : [E.index, E.index + E.length], x = [], k = this.scroll.length();
              return _.forEach(function(j, B) {
                j = Math.min(k - 1, j);
                var z = void 0, Y = m.scroll.leaf(j), H = T(Y, 2), R = H[0], N = H[1], M = R.position(N, B !== 0), I = T(M, 2);
                z = I[0], N = I[1], x.push(z, N);
              }), x.length < 2 && (x = x.concat(x)), x;
            }
          }, {
            key: "scrollIntoView",
            value: function(E) {
              var m = this.lastRange;
              if (m != null) {
                var _ = this.getBounds(m.index, m.length);
                if (_ != null) {
                  var x = this.scroll.length() - 1, k = this.scroll.line(Math.min(m.index, x)), j = T(k, 1), B = j[0], z = B;
                  if (m.length > 0) {
                    var Y = this.scroll.line(Math.min(m.index + m.length, x)), H = T(Y, 1);
                    z = H[0];
                  }
                  if (!(B == null || z == null)) {
                    var R = E.getBoundingClientRect();
                    _.top < R.top ? E.scrollTop -= R.top - _.top : _.bottom > R.bottom && (E.scrollTop += _.bottom - R.bottom);
                  }
                }
              }
            }
          }, {
            key: "setNativeRange",
            value: function(E, m) {
              var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : E, x = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : m, k = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
              if (n.info("setNativeRange", E, m, _, x), !(E != null && (this.root.parentNode == null || E.parentNode == null || _.parentNode == null))) {
                var j = document.getSelection();
                if (j != null)
                  if (E != null) {
                    this.hasFocus() || this.root.focus();
                    var B = (this.getNativeRange() || {}).native;
                    if (B == null || k || E !== B.startContainer || m !== B.startOffset || _ !== B.endContainer || x !== B.endOffset) {
                      E.tagName == "BR" && (m = [].indexOf.call(E.parentNode.childNodes, E), E = E.parentNode), _.tagName == "BR" && (x = [].indexOf.call(_.parentNode.childNodes, _), _ = _.parentNode);
                      var z = document.createRange();
                      z.setStart(E, m), z.setEnd(_, x), j.removeAllRanges(), j.addRange(z);
                    }
                  } else
                    j.removeAllRanges(), this.root.blur(), document.body.focus();
              }
            }
          }, {
            key: "setRange",
            value: function(E) {
              var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : u.default.sources.API;
              if (typeof m == "string" && (_ = m, m = !1), n.info("setRange", E), E != null) {
                var x = this.rangeToNative(E);
                this.setNativeRange.apply(this, i(x).concat([m]));
              } else
                this.setNativeRange(null);
              this.update(_);
            }
          }, {
            key: "update",
            value: function() {
              var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u.default.sources.USER, m = this.lastRange, _ = this.getRange(), x = T(_, 2), k = x[0], j = x[1];
              if (this.lastRange = k, this.lastRange != null && (this.savedRange = this.lastRange), !(0, t.default)(m, this.lastRange)) {
                var B;
                !this.composing && j != null && j.native.collapsed && j.start.node !== this.cursor.textNode && this.cursor.restore();
                var z = [u.default.events.SELECTION_CHANGE, (0, h.default)(this.lastRange), (0, h.default)(m), E];
                if ((B = this.emitter).emit.apply(B, [u.default.events.EDITOR_CHANGE].concat(z)), E !== u.default.sources.SILENT) {
                  var Y;
                  (Y = this.emitter).emit.apply(Y, z);
                }
              }
            }
          }]), A;
        }();
        function b(A, L) {
          try {
            L.parentNode;
          } catch {
            return !1;
          }
          return L instanceof Text && (L = L.parentNode), A.contains(L);
        }
        v.Range = c, v.default = w;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = function() {
          function u(o, a) {
            for (var r = 0; r < a.length; r++) {
              var i = a[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, i.key, i);
            }
          }
          return function(o, a, r) {
            return a && u(o.prototype, a), r && u(o, r), o;
          };
        }(), O = function u(o, a, r) {
          o === null && (o = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(o, a);
          if (i === void 0) {
            var f = Object.getPrototypeOf(o);
            return f === null ? void 0 : u(f, a, r);
          } else {
            if ("value" in i)
              return i.value;
            var n = i.get;
            return n === void 0 ? void 0 : n.call(r);
          }
        }, g = d(0), p = y(g);
        function y(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function h(u, o) {
          if (!(u instanceof o))
            throw new TypeError("Cannot call a class as a function");
        }
        function l(u, o) {
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
            return h(this, o), l(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
          }
          return T(o, [{
            key: "insertInto",
            value: function(r, i) {
              r.children.length === 0 ? O(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "insertInto", this).call(this, r, i) : this.remove();
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
        }(p.default.Embed);
        e.blotName = "break", e.tagName = "BR", v.default = e;
      },
      function(P, v, d) {
        var T = this && this.__extends || function() {
          var l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
            t.__proto__ = e;
          } || function(t, e) {
            for (var u in e)
              e.hasOwnProperty(u) && (t[u] = e[u]);
          };
          return function(t, e) {
            l(t, e);
            function u() {
              this.constructor = t;
            }
            t.prototype = e === null ? Object.create(e) : (u.prototype = e.prototype, new u());
          };
        }();
        Object.defineProperty(v, "__esModule", { value: !0 });
        var O = d(44), g = d(30), p = d(1), y = function(l) {
          T(t, l);
          function t(e) {
            var u = l.call(this, e) || this;
            return u.build(), u;
          }
          return t.prototype.appendChild = function(e) {
            this.insertBefore(e);
          }, t.prototype.attach = function() {
            l.prototype.attach.call(this), this.children.forEach(function(e) {
              e.attach();
            });
          }, t.prototype.build = function() {
            var e = this;
            this.children = new O.default(), [].slice.call(this.domNode.childNodes).reverse().forEach(function(u) {
              try {
                var o = h(u);
                e.insertBefore(o, e.children.head || void 0);
              } catch (a) {
                if (a instanceof p.ParchmentError)
                  return;
                throw a;
              }
            });
          }, t.prototype.deleteAt = function(e, u) {
            if (e === 0 && u === this.length())
              return this.remove();
            this.children.forEachAt(e, u, function(o, a, r) {
              o.deleteAt(a, r);
            });
          }, t.prototype.descendant = function(e, u) {
            var o = this.children.find(u), a = o[0], r = o[1];
            return e.blotName == null && e(a) || e.blotName != null && a instanceof e ? [a, r] : a instanceof t ? a.descendant(e, r) : [null, -1];
          }, t.prototype.descendants = function(e, u, o) {
            u === void 0 && (u = 0), o === void 0 && (o = Number.MAX_VALUE);
            var a = [], r = o;
            return this.children.forEachAt(u, o, function(i, f, n) {
              (e.blotName == null && e(i) || e.blotName != null && i instanceof e) && a.push(i), i instanceof t && (a = a.concat(i.descendants(e, f, r))), r -= n;
            }), a;
          }, t.prototype.detach = function() {
            this.children.forEach(function(e) {
              e.detach();
            }), l.prototype.detach.call(this);
          }, t.prototype.formatAt = function(e, u, o, a) {
            this.children.forEachAt(e, u, function(r, i, f) {
              r.formatAt(i, f, o, a);
            });
          }, t.prototype.insertAt = function(e, u, o) {
            var a = this.children.find(e), r = a[0], i = a[1];
            if (r)
              r.insertAt(i, u, o);
            else {
              var f = o == null ? p.create("text", u) : p.create(u, o);
              this.appendChild(f);
            }
          }, t.prototype.insertBefore = function(e, u) {
            if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function(o) {
              return e instanceof o;
            }))
              throw new p.ParchmentError("Cannot insert " + e.statics.blotName + " into " + this.statics.blotName);
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
            if (l.prototype.optimize.call(this, e), this.children.length === 0)
              if (this.statics.defaultChild != null) {
                var u = p.create(this.statics.defaultChild);
                this.appendChild(u), u.optimize(e);
              } else
                this.remove();
          }, t.prototype.path = function(e, u) {
            u === void 0 && (u = !1);
            var o = this.children.find(e, u), a = o[0], r = o[1], i = [[this, e]];
            return a instanceof t ? i.concat(a.path(r, u)) : (a != null && i.push([a, r]), i);
          }, t.prototype.removeChild = function(e) {
            this.children.remove(e);
          }, t.prototype.replace = function(e) {
            e instanceof t && e.moveChildren(this), l.prototype.replace.call(this, e);
          }, t.prototype.split = function(e, u) {
            if (u === void 0 && (u = !1), !u) {
              if (e === 0)
                return this;
              if (e === this.length())
                return this.next;
            }
            var o = this.clone();
            return this.parent.insertBefore(o, this.next), this.children.forEachAt(e, this.length(), function(a, r, i) {
              a = a.split(r, u), o.appendChild(a);
            }), o;
          }, t.prototype.unwrap = function() {
            this.moveChildren(this.parent, this.next), this.remove();
          }, t.prototype.update = function(e, u) {
            var o = this, a = [], r = [];
            e.forEach(function(i) {
              i.target === o.domNode && i.type === "childList" && (a.push.apply(a, i.addedNodes), r.push.apply(r, i.removedNodes));
            }), r.forEach(function(i) {
              if (!(i.parentNode != null && i.tagName !== "IFRAME" && document.body.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                var f = p.find(i);
                f != null && (f.domNode.parentNode == null || f.domNode.parentNode === o.domNode) && f.detach();
              }
            }), a.filter(function(i) {
              return i.parentNode == o.domNode;
            }).sort(function(i, f) {
              return i === f ? 0 : i.compareDocumentPosition(f) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1;
            }).forEach(function(i) {
              var f = null;
              i.nextSibling != null && (f = p.find(i.nextSibling));
              var n = h(i);
              (n.next != f || n.next == null) && (n.parent != null && n.parent.removeChild(o), o.insertBefore(n, f || void 0));
            });
          }, t;
        }(g.default);
        function h(l) {
          var t = p.find(l);
          if (t == null)
            try {
              t = p.create(l);
            } catch {
              t = p.create(p.Scope.INLINE), [].slice.call(l.childNodes).forEach(function(u) {
                t.domNode.appendChild(u);
              }), l.parentNode && l.parentNode.replaceChild(t.domNode, l), t.attach();
            }
          return t;
        }
        v.default = y;
      },
      function(P, v, d) {
        var T = this && this.__extends || function() {
          var l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
            t.__proto__ = e;
          } || function(t, e) {
            for (var u in e)
              e.hasOwnProperty(u) && (t[u] = e[u]);
          };
          return function(t, e) {
            l(t, e);
            function u() {
              this.constructor = t;
            }
            t.prototype = e === null ? Object.create(e) : (u.prototype = e.prototype, new u());
          };
        }();
        Object.defineProperty(v, "__esModule", { value: !0 });
        var O = d(12), g = d(31), p = d(17), y = d(1), h = function(l) {
          T(t, l);
          function t(e) {
            var u = l.call(this, e) || this;
            return u.attributes = new g.default(u.domNode), u;
          }
          return t.formats = function(e) {
            if (typeof this.tagName == "string")
              return !0;
            if (Array.isArray(this.tagName))
              return e.tagName.toLowerCase();
          }, t.prototype.format = function(e, u) {
            var o = y.query(e);
            o instanceof O.default ? this.attributes.attribute(o, u) : u && o != null && (e !== this.statics.blotName || this.formats()[e] !== u) && this.replaceWith(e, u);
          }, t.prototype.formats = function() {
            var e = this.attributes.values(), u = this.statics.formats(this.domNode);
            return u != null && (e[this.statics.blotName] = u), e;
          }, t.prototype.replaceWith = function(e, u) {
            var o = l.prototype.replaceWith.call(this, e, u);
            return this.attributes.copy(o), o;
          }, t.prototype.update = function(e, u) {
            var o = this;
            l.prototype.update.call(this, e, u), e.some(function(a) {
              return a.target === o.domNode && a.type === "attributes";
            }) && this.attributes.build();
          }, t.prototype.wrap = function(e, u) {
            var o = l.prototype.wrap.call(this, e, u);
            return o instanceof t && o.statics.scope === this.statics.scope && this.attributes.move(o), o;
          }, t;
        }(p.default);
        v.default = h;
      },
      function(P, v, d) {
        var T = this && this.__extends || function() {
          var y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, l) {
            h.__proto__ = l;
          } || function(h, l) {
            for (var t in l)
              l.hasOwnProperty(t) && (h[t] = l[t]);
          };
          return function(h, l) {
            y(h, l);
            function t() {
              this.constructor = h;
            }
            h.prototype = l === null ? Object.create(l) : (t.prototype = l.prototype, new t());
          };
        }();
        Object.defineProperty(v, "__esModule", { value: !0 });
        var O = d(30), g = d(1), p = function(y) {
          T(h, y);
          function h() {
            return y !== null && y.apply(this, arguments) || this;
          }
          return h.value = function(l) {
            return !0;
          }, h.prototype.index = function(l, t) {
            return this.domNode === l || this.domNode.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(t, 1) : -1;
          }, h.prototype.position = function(l, t) {
            var e = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
            return l > 0 && (e += 1), [this.parent.domNode, e];
          }, h.prototype.value = function() {
            var l;
            return l = {}, l[this.statics.blotName] = this.statics.value(this.domNode) || !0, l;
          }, h.scope = g.Scope.INLINE_BLOT, h;
        }(O.default);
        v.default = p;
      },
      function(P, v, d) {
        var T = d(11), O = d(3), g = {
          attributes: {
            compose: function(y, h, l) {
              typeof y != "object" && (y = {}), typeof h != "object" && (h = {});
              var t = O(!0, {}, h);
              l || (t = Object.keys(t).reduce(function(u, o) {
                return t[o] != null && (u[o] = t[o]), u;
              }, {}));
              for (var e in y)
                y[e] !== void 0 && h[e] === void 0 && (t[e] = y[e]);
              return Object.keys(t).length > 0 ? t : void 0;
            },
            diff: function(y, h) {
              typeof y != "object" && (y = {}), typeof h != "object" && (h = {});
              var l = Object.keys(y).concat(Object.keys(h)).reduce(function(t, e) {
                return T(y[e], h[e]) || (t[e] = h[e] === void 0 ? null : h[e]), t;
              }, {});
              return Object.keys(l).length > 0 ? l : void 0;
            },
            transform: function(y, h, l) {
              if (typeof y != "object")
                return h;
              if (typeof h == "object") {
                if (!l)
                  return h;
                var t = Object.keys(h).reduce(function(e, u) {
                  return y[u] === void 0 && (e[u] = h[u]), e;
                }, {});
                return Object.keys(t).length > 0 ? t : void 0;
              }
            }
          },
          iterator: function(y) {
            return new p(y);
          },
          length: function(y) {
            return typeof y.delete == "number" ? y.delete : typeof y.retain == "number" ? y.retain : typeof y.insert == "string" ? y.insert.length : 1;
          }
        };
        function p(y) {
          this.ops = y, this.index = 0, this.offset = 0;
        }
        p.prototype.hasNext = function() {
          return this.peekLength() < 1 / 0;
        }, p.prototype.next = function(y) {
          y || (y = 1 / 0);
          var h = this.ops[this.index];
          if (h) {
            var l = this.offset, t = g.length(h);
            if (y >= t - l ? (y = t - l, this.index += 1, this.offset = 0) : this.offset += y, typeof h.delete == "number")
              return { delete: y };
            var e = {};
            return h.attributes && (e.attributes = h.attributes), typeof h.retain == "number" ? e.retain = y : typeof h.insert == "string" ? e.insert = h.insert.substr(l, y) : e.insert = h.insert, e;
          } else
            return { retain: 1 / 0 };
        }, p.prototype.peek = function() {
          return this.ops[this.index];
        }, p.prototype.peekLength = function() {
          return this.ops[this.index] ? g.length(this.ops[this.index]) - this.offset : 1 / 0;
        }, p.prototype.peekType = function() {
          return this.ops[this.index] ? typeof this.ops[this.index].delete == "number" ? "delete" : typeof this.ops[this.index].retain == "number" ? "retain" : "insert" : "retain";
        }, p.prototype.rest = function() {
          if (this.hasNext()) {
            if (this.offset === 0)
              return this.ops.slice(this.index);
            var y = this.offset, h = this.index, l = this.next(), t = this.ops.slice(this.index);
            return this.offset = y, this.index = h, [l].concat(t);
          } else
            return [];
        }, P.exports = g;
      },
      function(P, v) {
        var d = function() {
          function T(o, a) {
            return a != null && o instanceof a;
          }
          var O;
          try {
            O = Map;
          } catch {
            O = function() {
            };
          }
          var g;
          try {
            g = Set;
          } catch {
            g = function() {
            };
          }
          var p;
          try {
            p = Promise;
          } catch {
            p = function() {
            };
          }
          function y(o, a, r, i, f) {
            typeof a == "object" && (r = a.depth, i = a.prototype, f = a.includeNonEnumerable, a = a.circular);
            var n = [], c = [], w = typeof Buffer < "u";
            typeof a > "u" && (a = !0), typeof r > "u" && (r = 1 / 0);
            function b(A, L) {
              if (A === null)
                return null;
              if (L === 0)
                return A;
              var E, m;
              if (typeof A != "object")
                return A;
              if (T(A, O))
                E = new O();
              else if (T(A, g))
                E = new g();
              else if (T(A, p))
                E = new p(function(R, N) {
                  A.then(function(M) {
                    R(b(M, L - 1));
                  }, function(M) {
                    N(b(M, L - 1));
                  });
                });
              else if (y.__isArray(A))
                E = [];
              else if (y.__isRegExp(A))
                E = new RegExp(A.source, u(A)), A.lastIndex && (E.lastIndex = A.lastIndex);
              else if (y.__isDate(A))
                E = new Date(A.getTime());
              else {
                if (w && Buffer.isBuffer(A))
                  return Buffer.allocUnsafe ? E = Buffer.allocUnsafe(A.length) : E = new Buffer(A.length), A.copy(E), E;
                T(A, Error) ? E = Object.create(A) : typeof i > "u" ? (m = Object.getPrototypeOf(A), E = Object.create(m)) : (E = Object.create(i), m = i);
              }
              if (a) {
                var _ = n.indexOf(A);
                if (_ != -1)
                  return c[_];
                n.push(A), c.push(E);
              }
              T(A, O) && A.forEach(function(R, N) {
                var M = b(N, L - 1), I = b(R, L - 1);
                E.set(M, I);
              }), T(A, g) && A.forEach(function(R) {
                var N = b(R, L - 1);
                E.add(N);
              });
              for (var x in A) {
                var k;
                m && (k = Object.getOwnPropertyDescriptor(m, x)), !(k && k.set == null) && (E[x] = b(A[x], L - 1));
              }
              if (Object.getOwnPropertySymbols)
                for (var j = Object.getOwnPropertySymbols(A), x = 0; x < j.length; x++) {
                  var B = j[x], z = Object.getOwnPropertyDescriptor(A, B);
                  z && !z.enumerable && !f || (E[B] = b(A[B], L - 1), z.enumerable || Object.defineProperty(E, B, {
                    enumerable: !1
                  }));
                }
              if (f)
                for (var Y = Object.getOwnPropertyNames(A), x = 0; x < Y.length; x++) {
                  var H = Y[x], z = Object.getOwnPropertyDescriptor(A, H);
                  z && z.enumerable || (E[H] = b(A[H], L - 1), Object.defineProperty(E, H, {
                    enumerable: !1
                  }));
                }
              return E;
            }
            return b(o, r);
          }
          y.clonePrototype = function(a) {
            if (a === null)
              return null;
            var r = function() {
            };
            return r.prototype = a, new r();
          };
          function h(o) {
            return Object.prototype.toString.call(o);
          }
          y.__objToStr = h;
          function l(o) {
            return typeof o == "object" && h(o) === "[object Date]";
          }
          y.__isDate = l;
          function t(o) {
            return typeof o == "object" && h(o) === "[object Array]";
          }
          y.__isArray = t;
          function e(o) {
            return typeof o == "object" && h(o) === "[object RegExp]";
          }
          y.__isRegExp = e;
          function u(o) {
            var a = "";
            return o.global && (a += "g"), o.ignoreCase && (a += "i"), o.multiline && (a += "m"), a;
          }
          return y.__getRegExpFlags = u, y;
        }();
        typeof P == "object" && P.exports && (P.exports = d);
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = function() {
          function E(m, _) {
            var x = [], k = !0, j = !1, B = void 0;
            try {
              for (var z = m[Symbol.iterator](), Y; !(k = (Y = z.next()).done) && (x.push(Y.value), !(_ && x.length === _)); k = !0)
                ;
            } catch (H) {
              j = !0, B = H;
            } finally {
              try {
                !k && z.return && z.return();
              } finally {
                if (j)
                  throw B;
              }
            }
            return x;
          }
          return function(m, _) {
            if (Array.isArray(m))
              return m;
            if (Symbol.iterator in Object(m))
              return E(m, _);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), O = function() {
          function E(m, _) {
            for (var x = 0; x < _.length; x++) {
              var k = _[x];
              k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(m, k.key, k);
            }
          }
          return function(m, _, x) {
            return _ && E(m.prototype, _), x && E(m, x), m;
          };
        }(), g = function E(m, _, x) {
          m === null && (m = Function.prototype);
          var k = Object.getOwnPropertyDescriptor(m, _);
          if (k === void 0) {
            var j = Object.getPrototypeOf(m);
            return j === null ? void 0 : E(j, _, x);
          } else {
            if ("value" in k)
              return k.value;
            var B = k.get;
            return B === void 0 ? void 0 : B.call(x);
          }
        }, p = d(0), y = n(p), h = d(8), l = n(h), t = d(4), e = n(t), u = d(16), o = n(u), a = d(13), r = n(a), i = d(25), f = n(i);
        function n(E) {
          return E && E.__esModule ? E : { default: E };
        }
        function c(E, m) {
          if (!(E instanceof m))
            throw new TypeError("Cannot call a class as a function");
        }
        function w(E, m) {
          if (!E)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return m && (typeof m == "object" || typeof m == "function") ? m : E;
        }
        function b(E, m) {
          if (typeof m != "function" && m !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof m);
          E.prototype = Object.create(m && m.prototype, { constructor: { value: E, enumerable: !1, writable: !0, configurable: !0 } }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(E, m) : E.__proto__ = m);
        }
        function A(E) {
          return E instanceof e.default || E instanceof t.BlockEmbed;
        }
        var L = function(E) {
          b(m, E);
          function m(_, x) {
            c(this, m);
            var k = w(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this, _));
            return k.emitter = x.emitter, Array.isArray(x.whitelist) && (k.whitelist = x.whitelist.reduce(function(j, B) {
              return j[B] = !0, j;
            }, {})), k.domNode.addEventListener("DOMNodeInserted", function() {
            }), k.optimize(), k.enable(), k;
          }
          return O(m, [{
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
            value: function(x, k) {
              var j = this.line(x), B = T(j, 2), z = B[0], Y = B[1], H = this.line(x + k), R = T(H, 1), N = R[0];
              if (g(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "deleteAt", this).call(this, x, k), N != null && z !== N && Y > 0) {
                if (z instanceof t.BlockEmbed || N instanceof t.BlockEmbed) {
                  this.optimize();
                  return;
                }
                if (z instanceof r.default) {
                  var M = z.newlineIndex(z.length(), !0);
                  if (M > -1 && (z = z.split(M + 1), z === N)) {
                    this.optimize();
                    return;
                  }
                } else if (N instanceof r.default) {
                  var I = N.newlineIndex(0);
                  I > -1 && N.split(I + 1);
                }
                var K = N.children.head instanceof o.default ? null : N.children.head;
                z.moveChildren(N, K), z.remove();
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
            value: function(x, k, j, B) {
              this.whitelist != null && !this.whitelist[j] || (g(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "formatAt", this).call(this, x, k, j, B), this.optimize());
            }
          }, {
            key: "insertAt",
            value: function(x, k, j) {
              if (!(j != null && this.whitelist != null && !this.whitelist[k])) {
                if (x >= this.length())
                  if (j == null || y.default.query(k, y.default.Scope.BLOCK) == null) {
                    var B = y.default.create(this.statics.defaultChild);
                    this.appendChild(B), j == null && k.endsWith(`
`) && (k = k.slice(0, -1)), B.insertAt(0, k, j);
                  } else {
                    var z = y.default.create(k, j);
                    this.appendChild(z);
                  }
                else
                  g(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "insertAt", this).call(this, x, k, j);
                this.optimize();
              }
            }
          }, {
            key: "insertBefore",
            value: function(x, k) {
              if (x.statics.scope === y.default.Scope.INLINE_BLOT) {
                var j = y.default.create(this.statics.defaultChild);
                j.appendChild(x), x = j;
              }
              g(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "insertBefore", this).call(this, x, k);
            }
          }, {
            key: "leaf",
            value: function(x) {
              return this.path(x).pop() || [null, -1];
            }
          }, {
            key: "line",
            value: function(x) {
              return x === this.length() ? this.line(x - 1) : this.descendant(A, x);
            }
          }, {
            key: "lines",
            value: function() {
              var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, j = function B(z, Y, H) {
                var R = [], N = H;
                return z.children.forEachAt(Y, H, function(M, I, K) {
                  A(M) ? R.push(M) : M instanceof y.default.Container && (R = R.concat(B(M, I, N))), N -= K;
                }), R;
              };
              return j(this, x, k);
            }
          }, {
            key: "optimize",
            value: function() {
              var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              this.batch !== !0 && (g(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "optimize", this).call(this, x, k), x.length > 0 && this.emitter.emit(l.default.events.SCROLL_OPTIMIZE, x, k));
            }
          }, {
            key: "path",
            value: function(x) {
              return g(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "path", this).call(this, x).slice(1);
            }
          }, {
            key: "update",
            value: function(x) {
              if (this.batch !== !0) {
                var k = l.default.sources.USER;
                typeof x == "string" && (k = x), Array.isArray(x) || (x = this.observer.takeRecords()), x.length > 0 && this.emitter.emit(l.default.events.SCROLL_BEFORE_UPDATE, k, x), g(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "update", this).call(this, x.concat([])), x.length > 0 && this.emitter.emit(l.default.events.SCROLL_UPDATE, k, x);
              }
            }
          }]), m;
        }(y.default.Scroll);
        L.blotName = "scroll", L.className = "ql-editor", L.tagName = "DIV", L.defaultChild = "block", L.allowedChildren = [e.default, t.BlockEmbed, f.default], v.default = L;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.SHORTKEY = v.default = void 0;
        var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(q) {
          return typeof q;
        } : function(q) {
          return q && typeof Symbol == "function" && q.constructor === Symbol && q !== Symbol.prototype ? "symbol" : typeof q;
        }, O = function() {
          function q(U, $) {
            var G = [], Q = !0, nt = !1, it = void 0;
            try {
              for (var lt = U[Symbol.iterator](), ft; !(Q = (ft = lt.next()).done) && (G.push(ft.value), !($ && G.length === $)); Q = !0)
                ;
            } catch (ht) {
              nt = !0, it = ht;
            } finally {
              try {
                !Q && lt.return && lt.return();
              } finally {
                if (nt)
                  throw it;
              }
            }
            return G;
          }
          return function(U, $) {
            if (Array.isArray(U))
              return U;
            if (Symbol.iterator in Object(U))
              return q(U, $);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), g = function() {
          function q(U, $) {
            for (var G = 0; G < $.length; G++) {
              var Q = $[G];
              Q.enumerable = Q.enumerable || !1, Q.configurable = !0, "value" in Q && (Q.writable = !0), Object.defineProperty(U, Q.key, Q);
            }
          }
          return function(U, $, G) {
            return $ && q(U.prototype, $), G && q(U, G), U;
          };
        }(), p = d(21), y = E(p), h = d(11), l = E(h), t = d(3), e = E(t), u = d(2), o = E(u), a = d(20), r = E(a), i = d(0), f = E(i), n = d(5), c = E(n), w = d(10), b = E(w), A = d(9), L = E(A);
        function E(q) {
          return q && q.__esModule ? q : { default: q };
        }
        function m(q, U, $) {
          return U in q ? Object.defineProperty(q, U, { value: $, enumerable: !0, configurable: !0, writable: !0 }) : q[U] = $, q;
        }
        function _(q, U) {
          if (!(q instanceof U))
            throw new TypeError("Cannot call a class as a function");
        }
        function x(q, U) {
          if (!q)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return U && (typeof U == "object" || typeof U == "function") ? U : q;
        }
        function k(q, U) {
          if (typeof U != "function" && U !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof U);
          q.prototype = Object.create(U && U.prototype, { constructor: { value: q, enumerable: !1, writable: !0, configurable: !0 } }), U && (Object.setPrototypeOf ? Object.setPrototypeOf(q, U) : q.__proto__ = U);
        }
        var j = (0, b.default)("quill:keyboard"), B = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey", z = function(q) {
          k(U, q), g(U, null, [{
            key: "match",
            value: function(G, Q) {
              return Q = F(Q), ["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(nt) {
                return !!Q[nt] !== G[nt] && Q[nt] !== null;
              }) ? !1 : Q.key === (G.which || G.keyCode);
            }
          }]);
          function U($, G) {
            _(this, U);
            var Q = x(this, (U.__proto__ || Object.getPrototypeOf(U)).call(this, $, G));
            return Q.bindings = {}, Object.keys(Q.options.bindings).forEach(function(nt) {
              nt === "list autofill" && $.scroll.whitelist != null && !$.scroll.whitelist.list || Q.options.bindings[nt] && Q.addBinding(Q.options.bindings[nt]);
            }), Q.addBinding({ key: U.keys.ENTER, shiftKey: null }, M), Q.addBinding({ key: U.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function() {
            }), /Firefox/i.test(navigator.userAgent) ? (Q.addBinding({ key: U.keys.BACKSPACE }, { collapsed: !0 }, H), Q.addBinding({ key: U.keys.DELETE }, { collapsed: !0 }, R)) : (Q.addBinding({ key: U.keys.BACKSPACE }, { collapsed: !0, prefix: /^.?$/ }, H), Q.addBinding({ key: U.keys.DELETE }, { collapsed: !0, suffix: /^.?$/ }, R)), Q.addBinding({ key: U.keys.BACKSPACE }, { collapsed: !1 }, N), Q.addBinding({ key: U.keys.DELETE }, { collapsed: !1 }, N), Q.addBinding({ key: U.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: !0, offset: 0 }, H), Q.listen(), Q;
          }
          return g(U, [{
            key: "addBinding",
            value: function(G) {
              var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, nt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, it = F(G);
              if (it == null || it.key == null)
                return j.warn("Attempted to add invalid keyboard binding", it);
              typeof Q == "function" && (Q = { handler: Q }), typeof nt == "function" && (nt = { handler: nt }), it = (0, e.default)(it, Q, nt), this.bindings[it.key] = this.bindings[it.key] || [], this.bindings[it.key].push(it);
            }
          }, {
            key: "listen",
            value: function() {
              var G = this;
              this.quill.root.addEventListener("keydown", function(Q) {
                if (!Q.defaultPrevented) {
                  var nt = Q.which || Q.keyCode, it = (G.bindings[nt] || []).filter(function(dt) {
                    return U.match(Q, dt);
                  });
                  if (it.length !== 0) {
                    var lt = G.quill.getSelection();
                    if (!(lt == null || !G.quill.hasFocus())) {
                      var ft = G.quill.getLine(lt.index), ht = O(ft, 2), mt = ht[0], gt = ht[1], Z = G.quill.getLeaf(lt.index), W = O(Z, 2), tt = W[0], et = W[1], J = lt.length === 0 ? [tt, et] : G.quill.getLeaf(lt.index + lt.length), st = O(J, 2), ot = st[0], at = st[1], wt = tt instanceof f.default.Text ? tt.value().slice(0, et) : "", Ot = ot instanceof f.default.Text ? ot.value().slice(at) : "", vt = {
                        collapsed: lt.length === 0,
                        empty: lt.length === 0 && mt.length() <= 1,
                        format: G.quill.getFormat(lt),
                        offset: gt,
                        prefix: wt,
                        suffix: Ot
                      }, Vt = it.some(function(dt) {
                        if (dt.collapsed != null && dt.collapsed !== vt.collapsed || dt.empty != null && dt.empty !== vt.empty || dt.offset != null && dt.offset !== vt.offset)
                          return !1;
                        if (Array.isArray(dt.format)) {
                          if (dt.format.every(function(qt) {
                            return vt.format[qt] == null;
                          }))
                            return !1;
                        } else if (T(dt.format) === "object" && !Object.keys(dt.format).every(function(qt) {
                          return dt.format[qt] === !0 ? vt.format[qt] != null : dt.format[qt] === !1 ? vt.format[qt] == null : (0, l.default)(dt.format[qt], vt.format[qt]);
                        }))
                          return !1;
                        return dt.prefix != null && !dt.prefix.test(vt.prefix) || dt.suffix != null && !dt.suffix.test(vt.suffix) ? !1 : dt.handler.call(G, lt, vt) !== !0;
                      });
                      Vt && Q.preventDefault();
                    }
                  }
                }
              });
            }
          }]), U;
        }(L.default);
        z.keys = {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          ESCAPE: 27,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46
        }, z.DEFAULTS = {
          bindings: {
            bold: K("bold"),
            italic: K("italic"),
            underline: K("underline"),
            indent: {
              key: z.keys.TAB,
              format: ["blockquote", "indent", "list"],
              handler: function(U, $) {
                if ($.collapsed && $.offset !== 0)
                  return !0;
                this.quill.format("indent", "+1", c.default.sources.USER);
              }
            },
            outdent: {
              key: z.keys.TAB,
              shiftKey: !0,
              format: ["blockquote", "indent", "list"],
              handler: function(U, $) {
                if ($.collapsed && $.offset !== 0)
                  return !0;
                this.quill.format("indent", "-1", c.default.sources.USER);
              }
            },
            "outdent backspace": {
              key: z.keys.BACKSPACE,
              collapsed: !0,
              shiftKey: null,
              metaKey: null,
              ctrlKey: null,
              altKey: null,
              format: ["indent", "list"],
              offset: 0,
              handler: function(U, $) {
                $.format.indent != null ? this.quill.format("indent", "-1", c.default.sources.USER) : $.format.list != null && this.quill.format("list", !1, c.default.sources.USER);
              }
            },
            "indent code-block": I(!0),
            "outdent code-block": I(!1),
            "remove tab": {
              key: z.keys.TAB,
              shiftKey: !0,
              collapsed: !0,
              prefix: /\t$/,
              handler: function(U) {
                this.quill.deleteText(U.index - 1, 1, c.default.sources.USER);
              }
            },
            tab: {
              key: z.keys.TAB,
              handler: function(U) {
                this.quill.history.cutoff();
                var $ = new o.default().retain(U.index).delete(U.length).insert("	");
                this.quill.updateContents($, c.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(U.index + 1, c.default.sources.SILENT);
              }
            },
            "list empty enter": {
              key: z.keys.ENTER,
              collapsed: !0,
              format: ["list"],
              empty: !0,
              handler: function(U, $) {
                this.quill.format("list", !1, c.default.sources.USER), $.format.indent && this.quill.format("indent", !1, c.default.sources.USER);
              }
            },
            "checklist enter": {
              key: z.keys.ENTER,
              collapsed: !0,
              format: { list: "checked" },
              handler: function(U) {
                var $ = this.quill.getLine(U.index), G = O($, 2), Q = G[0], nt = G[1], it = (0, e.default)({}, Q.formats(), { list: "checked" }), lt = new o.default().retain(U.index).insert(`
`, it).retain(Q.length() - nt - 1).retain(1, { list: "unchecked" });
                this.quill.updateContents(lt, c.default.sources.USER), this.quill.setSelection(U.index + 1, c.default.sources.SILENT), this.quill.scrollIntoView();
              }
            },
            "header enter": {
              key: z.keys.ENTER,
              collapsed: !0,
              format: ["header"],
              suffix: /^$/,
              handler: function(U, $) {
                var G = this.quill.getLine(U.index), Q = O(G, 2), nt = Q[0], it = Q[1], lt = new o.default().retain(U.index).insert(`
`, $.format).retain(nt.length() - it - 1).retain(1, { header: null });
                this.quill.updateContents(lt, c.default.sources.USER), this.quill.setSelection(U.index + 1, c.default.sources.SILENT), this.quill.scrollIntoView();
              }
            },
            "list autofill": {
              key: " ",
              collapsed: !0,
              format: { list: !1 },
              prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
              handler: function(U, $) {
                var G = $.prefix.length, Q = this.quill.getLine(U.index), nt = O(Q, 2), it = nt[0], lt = nt[1];
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
                this.quill.insertText(U.index, " ", c.default.sources.USER), this.quill.history.cutoff();
                var ht = new o.default().retain(U.index - lt).delete(G + 1).retain(it.length() - 2 - lt).retain(1, { list: ft });
                this.quill.updateContents(ht, c.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(U.index - G, c.default.sources.SILENT);
              }
            },
            "code exit": {
              key: z.keys.ENTER,
              collapsed: !0,
              format: ["code-block"],
              prefix: /\n\n$/,
              suffix: /^\s+$/,
              handler: function(U) {
                var $ = this.quill.getLine(U.index), G = O($, 2), Q = G[0], nt = G[1], it = new o.default().retain(U.index + Q.length() - nt - 2).retain(1, { "code-block": null }).delete(1);
                this.quill.updateContents(it, c.default.sources.USER);
              }
            },
            "embed left": Y(z.keys.LEFT, !1),
            "embed left shift": Y(z.keys.LEFT, !0),
            "embed right": Y(z.keys.RIGHT, !1),
            "embed right shift": Y(z.keys.RIGHT, !0)
          }
        };
        function Y(q, U) {
          var $, G = q === z.keys.LEFT ? "prefix" : "suffix";
          return $ = {
            key: q,
            shiftKey: U,
            altKey: null
          }, m($, G, /^$/), m($, "handler", function(nt) {
            var it = nt.index;
            q === z.keys.RIGHT && (it += nt.length + 1);
            var lt = this.quill.getLeaf(it), ft = O(lt, 1), ht = ft[0];
            return ht instanceof f.default.Embed ? (q === z.keys.LEFT ? U ? this.quill.setSelection(nt.index - 1, nt.length + 1, c.default.sources.USER) : this.quill.setSelection(nt.index - 1, c.default.sources.USER) : U ? this.quill.setSelection(nt.index, nt.length + 1, c.default.sources.USER) : this.quill.setSelection(nt.index + nt.length + 1, c.default.sources.USER), !1) : !0;
          }), $;
        }
        function H(q, U) {
          if (!(q.index === 0 || this.quill.getLength() <= 1)) {
            var $ = this.quill.getLine(q.index), G = O($, 1), Q = G[0], nt = {};
            if (U.offset === 0) {
              var it = this.quill.getLine(q.index - 1), lt = O(it, 1), ft = lt[0];
              if (ft != null && ft.length() > 1) {
                var ht = Q.formats(), mt = this.quill.getFormat(q.index - 1, 1);
                nt = r.default.attributes.diff(ht, mt) || {};
              }
            }
            var gt = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(U.prefix) ? 2 : 1;
            this.quill.deleteText(q.index - gt, gt, c.default.sources.USER), Object.keys(nt).length > 0 && this.quill.formatLine(q.index - gt, gt, nt, c.default.sources.USER), this.quill.focus();
          }
        }
        function R(q, U) {
          var $ = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(U.suffix) ? 2 : 1;
          if (!(q.index >= this.quill.getLength() - $)) {
            var G = {}, Q = 0, nt = this.quill.getLine(q.index), it = O(nt, 1), lt = it[0];
            if (U.offset >= lt.length() - 1) {
              var ft = this.quill.getLine(q.index + 1), ht = O(ft, 1), mt = ht[0];
              if (mt) {
                var gt = lt.formats(), Z = this.quill.getFormat(q.index, 1);
                G = r.default.attributes.diff(gt, Z) || {}, Q = mt.length();
              }
            }
            this.quill.deleteText(q.index, $, c.default.sources.USER), Object.keys(G).length > 0 && this.quill.formatLine(q.index + Q - 1, $, G, c.default.sources.USER);
          }
        }
        function N(q) {
          var U = this.quill.getLines(q), $ = {};
          if (U.length > 1) {
            var G = U[0].formats(), Q = U[U.length - 1].formats();
            $ = r.default.attributes.diff(Q, G) || {};
          }
          this.quill.deleteText(q, c.default.sources.USER), Object.keys($).length > 0 && this.quill.formatLine(q.index, 1, $, c.default.sources.USER), this.quill.setSelection(q.index, c.default.sources.SILENT), this.quill.focus();
        }
        function M(q, U) {
          var $ = this;
          q.length > 0 && this.quill.scroll.deleteAt(q.index, q.length);
          var G = Object.keys(U.format).reduce(function(Q, nt) {
            return f.default.query(nt, f.default.Scope.BLOCK) && !Array.isArray(U.format[nt]) && (Q[nt] = U.format[nt]), Q;
          }, {});
          this.quill.insertText(q.index, `
`, G, c.default.sources.USER), this.quill.setSelection(q.index + 1, c.default.sources.SILENT), this.quill.focus(), Object.keys(U.format).forEach(function(Q) {
            G[Q] == null && (Array.isArray(U.format[Q]) || Q !== "link" && $.quill.format(Q, U.format[Q], c.default.sources.USER));
          });
        }
        function I(q) {
          return {
            key: z.keys.TAB,
            shiftKey: !q,
            format: { "code-block": !0 },
            handler: function($) {
              var G = f.default.query("code-block"), Q = $.index, nt = $.length, it = this.quill.scroll.descendant(G, Q), lt = O(it, 2), ft = lt[0], ht = lt[1];
              if (ft != null) {
                var mt = this.quill.getIndex(ft), gt = ft.newlineIndex(ht, !0) + 1, Z = ft.newlineIndex(mt + ht + nt), W = ft.domNode.textContent.slice(gt, Z).split(`
`);
                ht = 0, W.forEach(function(tt, et) {
                  q ? (ft.insertAt(gt + ht, G.TAB), ht += G.TAB.length, et === 0 ? Q += G.TAB.length : nt += G.TAB.length) : tt.startsWith(G.TAB) && (ft.deleteAt(gt + ht, G.TAB.length), ht -= G.TAB.length, et === 0 ? Q -= G.TAB.length : nt -= G.TAB.length), ht += tt.length + 1;
                }), this.quill.update(c.default.sources.USER), this.quill.setSelection(Q, nt, c.default.sources.SILENT);
              }
            }
          };
        }
        function K(q) {
          return {
            key: q[0].toUpperCase(),
            shortKey: !0,
            handler: function($, G) {
              this.quill.format(q, !G.format[q], c.default.sources.USER);
            }
          };
        }
        function F(q) {
          if (typeof q == "string" || typeof q == "number")
            return F({ key: q });
          if ((typeof q > "u" ? "undefined" : T(q)) === "object" && (q = (0, y.default)(q, !1)), typeof q.key == "string")
            if (z.keys[q.key.toUpperCase()] != null)
              q.key = z.keys[q.key.toUpperCase()];
            else if (q.key.length === 1)
              q.key = q.key.toUpperCase().charCodeAt(0);
            else
              return null;
          return q.shortKey && (q[B] = q.shortKey, delete q.shortKey), q;
        }
        v.default = z, v.SHORTKEY = B;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = function() {
          function r(i, f) {
            var n = [], c = !0, w = !1, b = void 0;
            try {
              for (var A = i[Symbol.iterator](), L; !(c = (L = A.next()).done) && (n.push(L.value), !(f && n.length === f)); c = !0)
                ;
            } catch (E) {
              w = !0, b = E;
            } finally {
              try {
                !c && A.return && A.return();
              } finally {
                if (w)
                  throw b;
              }
            }
            return n;
          }
          return function(i, f) {
            if (Array.isArray(i))
              return i;
            if (Symbol.iterator in Object(i))
              return r(i, f);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), O = function r(i, f, n) {
          i === null && (i = Function.prototype);
          var c = Object.getOwnPropertyDescriptor(i, f);
          if (c === void 0) {
            var w = Object.getPrototypeOf(i);
            return w === null ? void 0 : r(w, f, n);
          } else {
            if ("value" in c)
              return c.value;
            var b = c.get;
            return b === void 0 ? void 0 : b.call(n);
          }
        }, g = function() {
          function r(i, f) {
            for (var n = 0; n < f.length; n++) {
              var c = f[n];
              c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(i, c.key, c);
            }
          }
          return function(i, f, n) {
            return f && r(i.prototype, f), n && r(i, n), i;
          };
        }(), p = d(0), y = t(p), h = d(7), l = t(h);
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
        var a = function(r) {
          o(i, r), g(i, null, [{
            key: "value",
            value: function() {
            }
          }]);
          function i(f, n) {
            e(this, i);
            var c = u(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, f));
            return c.selection = n, c.textNode = document.createTextNode(i.CONTENTS), c.domNode.appendChild(c.textNode), c._length = 0, c;
          }
          return g(i, [{
            key: "detach",
            value: function() {
              this.parent != null && this.parent.removeChild(this);
            }
          }, {
            key: "format",
            value: function(n, c) {
              if (this._length !== 0)
                return O(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "format", this).call(this, n, c);
              for (var w = this, b = 0; w != null && w.statics.scope !== y.default.Scope.BLOCK_BLOT; )
                b += w.offset(w.parent), w = w.parent;
              w != null && (this._length = i.CONTENTS.length, w.optimize(), w.formatAt(b, i.CONTENTS.length, n, c), this._length = 0);
            }
          }, {
            key: "index",
            value: function(n, c) {
              return n === this.textNode ? 0 : O(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "index", this).call(this, n, c);
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
              O(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "remove", this).call(this), this.parent = null;
            }
          }, {
            key: "restore",
            value: function() {
              if (!(this.selection.composing || this.parent == null)) {
                var n = this.textNode, c = this.selection.getNativeRange(), w = void 0, b = void 0, A = void 0;
                if (c != null && c.start.node === n && c.end.node === n) {
                  var L = [n, c.start.offset, c.end.offset];
                  w = L[0], b = L[1], A = L[2];
                }
                for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
                  this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                if (this.textNode.data !== i.CONTENTS) {
                  var E = this.textNode.data.split(i.CONTENTS).join("");
                  this.next instanceof l.default ? (w = this.next.domNode, this.next.insertAt(0, E), this.textNode.data = i.CONTENTS) : (this.textNode.data = E, this.parent.insertBefore(y.default.create(this.textNode), this), this.textNode = document.createTextNode(i.CONTENTS), this.domNode.appendChild(this.textNode));
                }
                if (this.remove(), b != null) {
                  var m = [b, A].map(function(x) {
                    return Math.max(0, Math.min(w.data.length, x - 1));
                  }), _ = T(m, 2);
                  return b = _[0], A = _[1], {
                    startNode: w,
                    startOffset: b,
                    endNode: w,
                    endOffset: A
                  };
                }
              }
            }
          }, {
            key: "update",
            value: function(n, c) {
              var w = this;
              if (n.some(function(A) {
                return A.type === "characterData" && A.target === w.textNode;
              })) {
                var b = this.restore();
                b && (c.range = b);
              }
            }
          }, {
            key: "value",
            value: function() {
              return "";
            }
          }]), i;
        }(y.default.Embed);
        a.blotName = "cursor", a.className = "ql-cursor", a.tagName = "span", a.CONTENTS = "\uFEFF", v.default = a;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = d(0), O = y(T), g = d(4), p = y(g);
        function y(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function h(u, o) {
          if (!(u instanceof o))
            throw new TypeError("Cannot call a class as a function");
        }
        function l(u, o) {
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
            return h(this, o), l(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
          }
          return o;
        }(O.default.Container);
        e.allowedChildren = [p.default, g.BlockEmbed, e], v.default = e;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.ColorStyle = v.ColorClass = v.ColorAttributor = void 0;
        var T = function() {
          function a(r, i) {
            for (var f = 0; f < i.length; f++) {
              var n = i[f];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, f) {
            return i && a(r.prototype, i), f && a(r, f), r;
          };
        }(), O = function a(r, i, f) {
          r === null && (r = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(r, i);
          if (n === void 0) {
            var c = Object.getPrototypeOf(r);
            return c === null ? void 0 : a(c, i, f);
          } else {
            if ("value" in n)
              return n.value;
            var w = n.get;
            return w === void 0 ? void 0 : w.call(f);
          }
        }, g = d(0), p = y(g);
        function y(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function h(a, r) {
          if (!(a instanceof r))
            throw new TypeError("Cannot call a class as a function");
        }
        function l(a, r) {
          if (!a)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return r && (typeof r == "object" || typeof r == "function") ? r : a;
        }
        function t(a, r) {
          if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof r);
          a.prototype = Object.create(r && r.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(a, r) : a.__proto__ = r);
        }
        var e = function(a) {
          t(r, a);
          function r() {
            return h(this, r), l(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
          }
          return T(r, [{
            key: "value",
            value: function(f) {
              var n = O(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "value", this).call(this, f);
              return n.startsWith("rgb(") ? (n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + n.split(",").map(function(c) {
                return ("00" + parseInt(c).toString(16)).slice(-2);
              }).join("")) : n;
            }
          }]), r;
        }(p.default.Attributor.Style), u = new p.default.Attributor.Class("color", "ql-color", {
          scope: p.default.Scope.INLINE
        }), o = new e("color", "color", {
          scope: p.default.Scope.INLINE
        });
        v.ColorAttributor = e, v.ColorClass = u, v.ColorStyle = o;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.sanitize = v.default = void 0;
        var T = function() {
          function o(a, r) {
            for (var i = 0; i < r.length; i++) {
              var f = r[i];
              f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(a, f.key, f);
            }
          }
          return function(a, r, i) {
            return r && o(a.prototype, r), i && o(a, i), a;
          };
        }(), O = function o(a, r, i) {
          a === null && (a = Function.prototype);
          var f = Object.getOwnPropertyDescriptor(a, r);
          if (f === void 0) {
            var n = Object.getPrototypeOf(a);
            return n === null ? void 0 : o(n, r, i);
          } else {
            if ("value" in f)
              return f.value;
            var c = f.get;
            return c === void 0 ? void 0 : c.call(i);
          }
        }, g = d(6), p = y(g);
        function y(o) {
          return o && o.__esModule ? o : { default: o };
        }
        function h(o, a) {
          if (!(o instanceof a))
            throw new TypeError("Cannot call a class as a function");
        }
        function l(o, a) {
          if (!o)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return a && (typeof a == "object" || typeof a == "function") ? a : o;
        }
        function t(o, a) {
          if (typeof a != "function" && a !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof a);
          o.prototype = Object.create(a && a.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(o, a) : o.__proto__ = a);
        }
        var e = function(o) {
          t(a, o);
          function a() {
            return h(this, a), l(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
          }
          return T(a, [{
            key: "format",
            value: function(i, f) {
              if (i !== this.statics.blotName || !f)
                return O(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "format", this).call(this, i, f);
              f = this.constructor.sanitize(f), this.domNode.setAttribute("href", f);
            }
          }], [{
            key: "create",
            value: function(i) {
              var f = O(a.__proto__ || Object.getPrototypeOf(a), "create", this).call(this, i);
              return i = this.sanitize(i), f.setAttribute("href", i), f.setAttribute("rel", "noopener noreferrer"), f.setAttribute("target", "_blank"), f;
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
          }]), a;
        }(p.default);
        e.blotName = "link", e.tagName = "A", e.SANITIZED_URL = "about:blank", e.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"];
        function u(o, a) {
          var r = document.createElement("a");
          r.href = o;
          var i = r.href.slice(0, r.href.indexOf(":"));
          return a.indexOf(i) > -1;
        }
        v.default = e, v.sanitize = u;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
          return typeof a;
        } : function(a) {
          return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
        }, O = function() {
          function a(r, i) {
            for (var f = 0; f < i.length; f++) {
              var n = i[f];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, f) {
            return i && a(r.prototype, i), f && a(r, f), r;
          };
        }(), g = d(23), p = l(g), y = d(107), h = l(y);
        function l(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function t(a, r) {
          if (!(a instanceof r))
            throw new TypeError("Cannot call a class as a function");
        }
        var e = 0;
        function u(a, r) {
          a.setAttribute(r, a.getAttribute(r) !== "true");
        }
        var o = function() {
          function a(r) {
            var i = this;
            t(this, a), this.select = r, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", function() {
              i.togglePicker();
            }), this.label.addEventListener("keydown", function(f) {
              switch (f.keyCode) {
                case p.default.keys.ENTER:
                  i.togglePicker();
                  break;
                case p.default.keys.ESCAPE:
                  i.escape(), f.preventDefault();
                  break;
              }
            }), this.select.addEventListener("change", this.update.bind(this));
          }
          return O(a, [{
            key: "togglePicker",
            value: function() {
              this.container.classList.toggle("ql-expanded"), u(this.label, "aria-expanded"), u(this.options, "aria-hidden");
            }
          }, {
            key: "buildItem",
            value: function(i) {
              var f = this, n = document.createElement("span");
              return n.tabIndex = "0", n.setAttribute("role", "button"), n.classList.add("ql-picker-item"), i.hasAttribute("value") && n.setAttribute("data-value", i.getAttribute("value")), i.textContent && n.setAttribute("data-label", i.textContent), n.addEventListener("click", function() {
                f.selectItem(n, !0);
              }), n.addEventListener("keydown", function(c) {
                switch (c.keyCode) {
                  case p.default.keys.ENTER:
                    f.selectItem(n, !0), c.preventDefault();
                    break;
                  case p.default.keys.ESCAPE:
                    f.escape(), c.preventDefault();
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
              var i = this, f = document.createElement("span");
              f.classList.add("ql-picker-options"), f.setAttribute("aria-hidden", "true"), f.tabIndex = "-1", f.id = "ql-picker-options-" + e, e += 1, this.label.setAttribute("aria-controls", f.id), this.options = f, [].slice.call(this.select.options).forEach(function(n) {
                var c = i.buildItem(n);
                f.appendChild(c), n.selected === !0 && i.selectItem(c);
              }), this.container.appendChild(f);
            }
          }, {
            key: "buildPicker",
            value: function() {
              var i = this;
              [].slice.call(this.select.attributes).forEach(function(f) {
                i.container.setAttribute(f.name, f.value);
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
              var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = this.container.querySelector(".ql-selected");
              if (i !== n && (n != null && n.classList.remove("ql-selected"), i != null && (i.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(i.parentNode.children, i), i.hasAttribute("data-value") ? this.label.setAttribute("data-value", i.getAttribute("data-value")) : this.label.removeAttribute("data-value"), i.hasAttribute("data-label") ? this.label.setAttribute("data-label", i.getAttribute("data-label")) : this.label.removeAttribute("data-label"), f))) {
                if (typeof Event == "function")
                  this.select.dispatchEvent(new Event("change"));
                else if ((typeof Event > "u" ? "undefined" : T(Event)) === "object") {
                  var c = document.createEvent("Event");
                  c.initEvent("change", !0, !0), this.select.dispatchEvent(c);
                }
                this.close();
              }
            }
          }, {
            key: "update",
            value: function() {
              var i = void 0;
              if (this.select.selectedIndex > -1) {
                var f = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                i = this.select.options[this.select.selectedIndex], this.selectItem(f);
              } else
                this.selectItem(null);
              var n = i != null && i !== this.select.querySelector("option[selected]");
              this.label.classList.toggle("ql-active", n);
            }
          }]), a;
        }();
        v.default = o;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = d(0), O = j(T), g = d(5), p = j(g), y = d(4), h = j(y), l = d(16), t = j(l), e = d(25), u = j(e), o = d(24), a = j(o), r = d(35), i = j(r), f = d(6), n = j(f), c = d(22), w = j(c), b = d(7), A = j(b), L = d(55), E = j(L), m = d(42), _ = j(m), x = d(23), k = j(x);
        function j(B) {
          return B && B.__esModule ? B : { default: B };
        }
        p.default.register({
          "blots/block": h.default,
          "blots/block/embed": y.BlockEmbed,
          "blots/break": t.default,
          "blots/container": u.default,
          "blots/cursor": a.default,
          "blots/embed": i.default,
          "blots/inline": n.default,
          "blots/scroll": w.default,
          "blots/text": A.default,
          "modules/clipboard": E.default,
          "modules/history": _.default,
          "modules/keyboard": k.default
        }), O.default.register(h.default, t.default, a.default, n.default, w.default, A.default), v.default = p.default;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", { value: !0 });
        var T = d(1), O = function() {
          function g(p) {
            this.domNode = p, this.domNode[T.DATA_KEY] = { blot: this };
          }
          return Object.defineProperty(g.prototype, "statics", {
            get: function() {
              return this.constructor;
            },
            enumerable: !0,
            configurable: !0
          }), g.create = function(p) {
            if (this.tagName == null)
              throw new T.ParchmentError("Blot definition missing tagName");
            var y;
            return Array.isArray(this.tagName) ? (typeof p == "string" && (p = p.toUpperCase(), parseInt(p).toString() === p && (p = parseInt(p))), typeof p == "number" ? y = document.createElement(this.tagName[p - 1]) : this.tagName.indexOf(p) > -1 ? y = document.createElement(p) : y = document.createElement(this.tagName[0])) : y = document.createElement(this.tagName), this.className && y.classList.add(this.className), y;
          }, g.prototype.attach = function() {
            this.parent != null && (this.scroll = this.parent.scroll);
          }, g.prototype.clone = function() {
            var p = this.domNode.cloneNode(!1);
            return T.create(p);
          }, g.prototype.detach = function() {
            this.parent != null && this.parent.removeChild(this), delete this.domNode[T.DATA_KEY];
          }, g.prototype.deleteAt = function(p, y) {
            var h = this.isolate(p, y);
            h.remove();
          }, g.prototype.formatAt = function(p, y, h, l) {
            var t = this.isolate(p, y);
            if (T.query(h, T.Scope.BLOT) != null && l)
              t.wrap(h, l);
            else if (T.query(h, T.Scope.ATTRIBUTE) != null) {
              var e = T.create(this.statics.scope);
              t.wrap(e), e.format(h, l);
            }
          }, g.prototype.insertAt = function(p, y, h) {
            var l = h == null ? T.create("text", y) : T.create(y, h), t = this.split(p);
            this.parent.insertBefore(l, t);
          }, g.prototype.insertInto = function(p, y) {
            y === void 0 && (y = null), this.parent != null && this.parent.children.remove(this);
            var h = null;
            p.children.insertBefore(this, y), y != null && (h = y.domNode), (this.domNode.parentNode != p.domNode || this.domNode.nextSibling != h) && p.domNode.insertBefore(this.domNode, h), this.parent = p, this.attach();
          }, g.prototype.isolate = function(p, y) {
            var h = this.split(p);
            return h.split(y), h;
          }, g.prototype.length = function() {
            return 1;
          }, g.prototype.offset = function(p) {
            return p === void 0 && (p = this.parent), this.parent == null || this == p ? 0 : this.parent.children.offset(this) + this.parent.offset(p);
          }, g.prototype.optimize = function(p) {
            this.domNode[T.DATA_KEY] != null && delete this.domNode[T.DATA_KEY].mutations;
          }, g.prototype.remove = function() {
            this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
          }, g.prototype.replace = function(p) {
            p.parent != null && (p.parent.insertBefore(this, p.next), p.remove());
          }, g.prototype.replaceWith = function(p, y) {
            var h = typeof p == "string" ? T.create(p, y) : p;
            return h.replace(this), h;
          }, g.prototype.split = function(p, y) {
            return p === 0 ? this : this.next;
          }, g.prototype.update = function(p, y) {
          }, g.prototype.wrap = function(p, y) {
            var h = typeof p == "string" ? T.create(p, y) : p;
            return this.parent != null && this.parent.insertBefore(h, this.next), h.appendChild(this), h;
          }, g.blotName = "abstract", g;
        }();
        v.default = O;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", { value: !0 });
        var T = d(12), O = d(32), g = d(33), p = d(1), y = function() {
          function h(l) {
            this.attributes = {}, this.domNode = l, this.build();
          }
          return h.prototype.attribute = function(l, t) {
            t ? l.add(this.domNode, t) && (l.value(this.domNode) != null ? this.attributes[l.attrName] = l : delete this.attributes[l.attrName]) : (l.remove(this.domNode), delete this.attributes[l.attrName]);
          }, h.prototype.build = function() {
            var l = this;
            this.attributes = {};
            var t = T.default.keys(this.domNode), e = O.default.keys(this.domNode), u = g.default.keys(this.domNode);
            t.concat(e).concat(u).forEach(function(o) {
              var a = p.query(o, p.Scope.ATTRIBUTE);
              a instanceof T.default && (l.attributes[a.attrName] = a);
            });
          }, h.prototype.copy = function(l) {
            var t = this;
            Object.keys(this.attributes).forEach(function(e) {
              var u = t.attributes[e].value(t.domNode);
              l.format(e, u);
            });
          }, h.prototype.move = function(l) {
            var t = this;
            this.copy(l), Object.keys(this.attributes).forEach(function(e) {
              t.attributes[e].remove(t.domNode);
            }), this.attributes = {};
          }, h.prototype.values = function() {
            var l = this;
            return Object.keys(this.attributes).reduce(function(t, e) {
              return t[e] = l.attributes[e].value(l.domNode), t;
            }, {});
          }, h;
        }();
        v.default = y;
      },
      function(P, v, d) {
        var T = this && this.__extends || function() {
          var y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, l) {
            h.__proto__ = l;
          } || function(h, l) {
            for (var t in l)
              l.hasOwnProperty(t) && (h[t] = l[t]);
          };
          return function(h, l) {
            y(h, l);
            function t() {
              this.constructor = h;
            }
            h.prototype = l === null ? Object.create(l) : (t.prototype = l.prototype, new t());
          };
        }();
        Object.defineProperty(v, "__esModule", { value: !0 });
        var O = d(12);
        function g(y, h) {
          var l = y.getAttribute("class") || "";
          return l.split(/\s+/).filter(function(t) {
            return t.indexOf(h + "-") === 0;
          });
        }
        var p = function(y) {
          T(h, y);
          function h() {
            return y !== null && y.apply(this, arguments) || this;
          }
          return h.keys = function(l) {
            return (l.getAttribute("class") || "").split(/\s+/).map(function(t) {
              return t.split("-").slice(0, -1).join("-");
            });
          }, h.prototype.add = function(l, t) {
            return this.canAdd(l, t) ? (this.remove(l), l.classList.add(this.keyName + "-" + t), !0) : !1;
          }, h.prototype.remove = function(l) {
            var t = g(l, this.keyName);
            t.forEach(function(e) {
              l.classList.remove(e);
            }), l.classList.length === 0 && l.removeAttribute("class");
          }, h.prototype.value = function(l) {
            var t = g(l, this.keyName)[0] || "", e = t.slice(this.keyName.length + 1);
            return this.canAdd(l, e) ? e : "";
          }, h;
        }(O.default);
        v.default = p;
      },
      function(P, v, d) {
        var T = this && this.__extends || function() {
          var y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, l) {
            h.__proto__ = l;
          } || function(h, l) {
            for (var t in l)
              l.hasOwnProperty(t) && (h[t] = l[t]);
          };
          return function(h, l) {
            y(h, l);
            function t() {
              this.constructor = h;
            }
            h.prototype = l === null ? Object.create(l) : (t.prototype = l.prototype, new t());
          };
        }();
        Object.defineProperty(v, "__esModule", { value: !0 });
        var O = d(12);
        function g(y) {
          var h = y.split("-"), l = h.slice(1).map(function(t) {
            return t[0].toUpperCase() + t.slice(1);
          }).join("");
          return h[0] + l;
        }
        var p = function(y) {
          T(h, y);
          function h() {
            return y !== null && y.apply(this, arguments) || this;
          }
          return h.keys = function(l) {
            return (l.getAttribute("style") || "").split(";").map(function(t) {
              var e = t.split(":");
              return e[0].trim();
            });
          }, h.prototype.add = function(l, t) {
            return this.canAdd(l, t) ? (l.style[g(this.keyName)] = t, !0) : !1;
          }, h.prototype.remove = function(l) {
            l.style[g(this.keyName)] = "", l.getAttribute("style") || l.removeAttribute("style");
          }, h.prototype.value = function(l) {
            var t = l.style[g(this.keyName)];
            return this.canAdd(l, t) ? t : "";
          }, h;
        }(O.default);
        v.default = p;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = function() {
          function p(y, h) {
            for (var l = 0; l < h.length; l++) {
              var t = h[l];
              t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(y, t.key, t);
            }
          }
          return function(y, h, l) {
            return h && p(y.prototype, h), l && p(y, l), y;
          };
        }();
        function O(p, y) {
          if (!(p instanceof y))
            throw new TypeError("Cannot call a class as a function");
        }
        var g = function() {
          function p(y, h) {
            O(this, p), this.quill = y, this.options = h, this.modules = {};
          }
          return T(p, [{
            key: "init",
            value: function() {
              var h = this;
              Object.keys(this.options.modules).forEach(function(l) {
                h.modules[l] == null && h.addModule(l);
              });
            }
          }, {
            key: "addModule",
            value: function(h) {
              var l = this.quill.constructor.import("modules/" + h);
              return this.modules[h] = new l(this.quill, this.options.modules[h] || {}), this.modules[h];
            }
          }]), p;
        }();
        g.DEFAULTS = {
          modules: {}
        }, g.themes = {
          default: g
        }, v.default = g;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = function() {
          function r(i, f) {
            for (var n = 0; n < f.length; n++) {
              var c = f[n];
              c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(i, c.key, c);
            }
          }
          return function(i, f, n) {
            return f && r(i.prototype, f), n && r(i, n), i;
          };
        }(), O = function r(i, f, n) {
          i === null && (i = Function.prototype);
          var c = Object.getOwnPropertyDescriptor(i, f);
          if (c === void 0) {
            var w = Object.getPrototypeOf(i);
            return w === null ? void 0 : r(w, f, n);
          } else {
            if ("value" in c)
              return c.value;
            var b = c.get;
            return b === void 0 ? void 0 : b.call(n);
          }
        }, g = d(0), p = l(g), y = d(7), h = l(y);
        function l(r) {
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
        var o = "\uFEFF", a = function(r) {
          u(i, r);
          function i(f) {
            t(this, i);
            var n = e(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, f));
            return n.contentNode = document.createElement("span"), n.contentNode.setAttribute("contenteditable", !1), [].slice.call(n.domNode.childNodes).forEach(function(c) {
              n.contentNode.appendChild(c);
            }), n.leftGuard = document.createTextNode(o), n.rightGuard = document.createTextNode(o), n.domNode.appendChild(n.leftGuard), n.domNode.appendChild(n.contentNode), n.domNode.appendChild(n.rightGuard), n;
          }
          return T(i, [{
            key: "index",
            value: function(n, c) {
              return n === this.leftGuard ? 0 : n === this.rightGuard ? 1 : O(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "index", this).call(this, n, c);
            }
          }, {
            key: "restore",
            value: function(n) {
              var c = void 0, w = void 0, b = n.data.split(o).join("");
              if (n === this.leftGuard)
                if (this.prev instanceof h.default) {
                  var A = this.prev.length();
                  this.prev.insertAt(A, b), c = {
                    startNode: this.prev.domNode,
                    startOffset: A + b.length
                  };
                } else
                  w = document.createTextNode(b), this.parent.insertBefore(p.default.create(w), this), c = {
                    startNode: w,
                    startOffset: b.length
                  };
              else
                n === this.rightGuard && (this.next instanceof h.default ? (this.next.insertAt(0, b), c = {
                  startNode: this.next.domNode,
                  startOffset: b.length
                }) : (w = document.createTextNode(b), this.parent.insertBefore(p.default.create(w), this.next), c = {
                  startNode: w,
                  startOffset: b.length
                }));
              return n.data = o, c;
            }
          }, {
            key: "update",
            value: function(n, c) {
              var w = this;
              n.forEach(function(b) {
                if (b.type === "characterData" && (b.target === w.leftGuard || b.target === w.rightGuard)) {
                  var A = w.restore(b.target);
                  A && (c.range = A);
                }
              });
            }
          }]), i;
        }(p.default.Embed);
        v.default = a;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.AlignStyle = v.AlignClass = v.AlignAttribute = void 0;
        var T = d(0), O = g(T);
        function g(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var p = {
          scope: O.default.Scope.BLOCK,
          whitelist: ["right", "center", "justify"]
        }, y = new O.default.Attributor.Attribute("align", "align", p), h = new O.default.Attributor.Class("align", "ql-align", p), l = new O.default.Attributor.Style("align", "text-align", p);
        v.AlignAttribute = y, v.AlignClass = h, v.AlignStyle = l;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.BackgroundStyle = v.BackgroundClass = void 0;
        var T = d(0), O = p(T), g = d(26);
        function p(l) {
          return l && l.__esModule ? l : { default: l };
        }
        var y = new O.default.Attributor.Class("background", "ql-bg", {
          scope: O.default.Scope.INLINE
        }), h = new g.ColorAttributor("background", "background-color", {
          scope: O.default.Scope.INLINE
        });
        v.BackgroundClass = y, v.BackgroundStyle = h;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.DirectionStyle = v.DirectionClass = v.DirectionAttribute = void 0;
        var T = d(0), O = g(T);
        function g(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var p = {
          scope: O.default.Scope.BLOCK,
          whitelist: ["rtl"]
        }, y = new O.default.Attributor.Attribute("direction", "dir", p), h = new O.default.Attributor.Class("direction", "ql-direction", p), l = new O.default.Attributor.Style("direction", "direction", p);
        v.DirectionAttribute = y, v.DirectionClass = h, v.DirectionStyle = l;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.FontClass = v.FontStyle = void 0;
        var T = function() {
          function r(i, f) {
            for (var n = 0; n < f.length; n++) {
              var c = f[n];
              c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(i, c.key, c);
            }
          }
          return function(i, f, n) {
            return f && r(i.prototype, f), n && r(i, n), i;
          };
        }(), O = function r(i, f, n) {
          i === null && (i = Function.prototype);
          var c = Object.getOwnPropertyDescriptor(i, f);
          if (c === void 0) {
            var w = Object.getPrototypeOf(i);
            return w === null ? void 0 : r(w, f, n);
          } else {
            if ("value" in c)
              return c.value;
            var b = c.get;
            return b === void 0 ? void 0 : b.call(n);
          }
        }, g = d(0), p = y(g);
        function y(r) {
          return r && r.__esModule ? r : { default: r };
        }
        function h(r, i) {
          if (!(r instanceof i))
            throw new TypeError("Cannot call a class as a function");
        }
        function l(r, i) {
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
          scope: p.default.Scope.INLINE,
          whitelist: ["serif", "monospace"]
        }, u = new p.default.Attributor.Class("font", "ql-font", e), o = function(r) {
          t(i, r);
          function i() {
            return h(this, i), l(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
          }
          return T(i, [{
            key: "value",
            value: function(n) {
              return O(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "value", this).call(this, n).replace(/["']/g, "");
            }
          }]), i;
        }(p.default.Attributor.Style), a = new o("font", "font-family", e);
        v.FontStyle = a, v.FontClass = u;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.SizeStyle = v.SizeClass = void 0;
        var T = d(0), O = g(T);
        function g(h) {
          return h && h.__esModule ? h : { default: h };
        }
        var p = new O.default.Attributor.Class("size", "ql-size", {
          scope: O.default.Scope.INLINE,
          whitelist: ["small", "large", "huge"]
        }), y = new O.default.Attributor.Style("size", "font-size", {
          scope: O.default.Scope.INLINE,
          whitelist: ["10px", "18px", "32px"]
        });
        v.SizeClass = p, v.SizeStyle = y;
      },
      function(P, v, d) {
        P.exports = {
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
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.getLastChangeIndex = v.default = void 0;
        var T = function() {
          function f(n, c) {
            for (var w = 0; w < c.length; w++) {
              var b = c[w];
              b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(n, b.key, b);
            }
          }
          return function(n, c, w) {
            return c && f(n.prototype, c), w && f(n, w), n;
          };
        }(), O = d(0), g = t(O), p = d(5), y = t(p), h = d(9), l = t(h);
        function t(f) {
          return f && f.__esModule ? f : { default: f };
        }
        function e(f, n) {
          if (!(f instanceof n))
            throw new TypeError("Cannot call a class as a function");
        }
        function u(f, n) {
          if (!f)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return n && (typeof n == "object" || typeof n == "function") ? n : f;
        }
        function o(f, n) {
          if (typeof n != "function" && n !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof n);
          f.prototype = Object.create(n && n.prototype, { constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 } }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(f, n) : f.__proto__ = n);
        }
        var a = function(f) {
          o(n, f);
          function n(c, w) {
            e(this, n);
            var b = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, c, w));
            return b.lastRecorded = 0, b.ignoreChange = !1, b.clear(), b.quill.on(y.default.events.EDITOR_CHANGE, function(A, L, E, m) {
              A !== y.default.events.TEXT_CHANGE || b.ignoreChange || (!b.options.userOnly || m === y.default.sources.USER ? b.record(L, E) : b.transform(L));
            }), b.quill.keyboard.addBinding({ key: "Z", shortKey: !0 }, b.undo.bind(b)), b.quill.keyboard.addBinding({ key: "Z", shortKey: !0, shiftKey: !0 }, b.redo.bind(b)), /Win/i.test(navigator.platform) && b.quill.keyboard.addBinding({ key: "Y", shortKey: !0 }, b.redo.bind(b)), b;
          }
          return T(n, [{
            key: "change",
            value: function(w, b) {
              if (this.stack[w].length !== 0) {
                var A = this.stack[w].pop();
                this.stack[b].push(A), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(A[w], y.default.sources.USER), this.ignoreChange = !1;
                var L = i(A[w]);
                this.quill.setSelection(L);
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
            value: function(w, b) {
              if (w.ops.length !== 0) {
                this.stack.redo = [];
                var A = this.quill.getContents().diff(b), L = Date.now();
                if (this.lastRecorded + this.options.delay > L && this.stack.undo.length > 0) {
                  var E = this.stack.undo.pop();
                  A = A.compose(E.undo), w = E.redo.compose(w);
                } else
                  this.lastRecorded = L;
                this.stack.undo.push({
                  redo: w,
                  undo: A
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
            value: function(w) {
              this.stack.undo.forEach(function(b) {
                b.undo = w.transform(b.undo, !0), b.redo = w.transform(b.redo, !0);
              }), this.stack.redo.forEach(function(b) {
                b.undo = w.transform(b.undo, !0), b.redo = w.transform(b.redo, !0);
              });
            }
          }, {
            key: "undo",
            value: function() {
              this.change("undo", "redo");
            }
          }]), n;
        }(l.default);
        a.DEFAULTS = {
          delay: 1e3,
          maxStack: 100,
          userOnly: !1
        };
        function r(f) {
          var n = f.ops[f.ops.length - 1];
          return n == null ? !1 : n.insert != null ? typeof n.insert == "string" && n.insert.endsWith(`
`) : n.attributes != null ? Object.keys(n.attributes).some(function(c) {
            return g.default.query(c, g.default.Scope.BLOCK) != null;
          }) : !1;
        }
        function i(f) {
          var n = f.reduce(function(w, b) {
            return w += b.delete || 0, w;
          }, 0), c = f.length() - n;
          return r(f) && (c -= 1), c;
        }
        v.default = a, v.getLastChangeIndex = i;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.default = v.BaseTooltip = void 0;
        var T = function() {
          function M(I, K) {
            for (var F = 0; F < K.length; F++) {
              var q = K[F];
              q.enumerable = q.enumerable || !1, q.configurable = !0, "value" in q && (q.writable = !0), Object.defineProperty(I, q.key, q);
            }
          }
          return function(I, K, F) {
            return K && M(I.prototype, K), F && M(I, F), I;
          };
        }(), O = function M(I, K, F) {
          I === null && (I = Function.prototype);
          var q = Object.getOwnPropertyDescriptor(I, K);
          if (q === void 0) {
            var U = Object.getPrototypeOf(I);
            return U === null ? void 0 : M(U, K, F);
          } else {
            if ("value" in q)
              return q.value;
            var $ = q.get;
            return $ === void 0 ? void 0 : $.call(F);
          }
        }, g = d(3), p = L(g), y = d(2), h = L(y), l = d(8), t = L(l), e = d(23), u = L(e), o = d(34), a = L(o), r = d(59), i = L(r), f = d(60), n = L(f), c = d(28), w = L(c), b = d(61), A = L(b);
        function L(M) {
          return M && M.__esModule ? M : { default: M };
        }
        function E(M, I) {
          if (!(M instanceof I))
            throw new TypeError("Cannot call a class as a function");
        }
        function m(M, I) {
          if (!M)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return I && (typeof I == "object" || typeof I == "function") ? I : M;
        }
        function _(M, I) {
          if (typeof I != "function" && I !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof I);
          M.prototype = Object.create(I && I.prototype, { constructor: { value: M, enumerable: !1, writable: !0, configurable: !0 } }), I && (Object.setPrototypeOf ? Object.setPrototypeOf(M, I) : M.__proto__ = I);
        }
        var x = [!1, "center", "right", "justify"], k = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], j = [!1, "serif", "monospace"], B = ["1", "2", "3", !1], z = ["small", !1, "large", "huge"], Y = function(M) {
          _(I, M);
          function I(K, F) {
            E(this, I);
            var q = m(this, (I.__proto__ || Object.getPrototypeOf(I)).call(this, K, F)), U = function $(G) {
              if (!document.body.contains(K.root))
                return document.body.removeEventListener("click", $);
              q.tooltip != null && !q.tooltip.root.contains(G.target) && document.activeElement !== q.tooltip.textbox && !q.quill.hasFocus() && q.tooltip.hide(), q.pickers != null && q.pickers.forEach(function(Q) {
                Q.container.contains(G.target) || Q.close();
              });
            };
            return K.emitter.listenDOM("click", document.body, U), q;
          }
          return T(I, [{
            key: "addModule",
            value: function(F) {
              var q = O(I.prototype.__proto__ || Object.getPrototypeOf(I.prototype), "addModule", this).call(this, F);
              return F === "toolbar" && this.extendToolbar(q), q;
            }
          }, {
            key: "buildButtons",
            value: function(F, q) {
              F.forEach(function(U) {
                var $ = U.getAttribute("class") || "";
                $.split(/\s+/).forEach(function(G) {
                  if (!!G.startsWith("ql-") && (G = G.slice(3), q[G] != null))
                    if (G === "direction")
                      U.innerHTML = q[G][""] + q[G].rtl;
                    else if (typeof q[G] == "string")
                      U.innerHTML = q[G];
                    else {
                      var Q = U.value || "";
                      Q != null && q[G][Q] && (U.innerHTML = q[G][Q]);
                    }
                });
              });
            }
          }, {
            key: "buildPickers",
            value: function(F, q) {
              var U = this;
              this.pickers = F.map(function(G) {
                if (G.classList.contains("ql-align"))
                  return G.querySelector("option") == null && N(G, x), new n.default(G, q.align);
                if (G.classList.contains("ql-background") || G.classList.contains("ql-color")) {
                  var Q = G.classList.contains("ql-background") ? "background" : "color";
                  return G.querySelector("option") == null && N(G, k, Q === "background" ? "#ffffff" : "#000000"), new i.default(G, q[Q]);
                } else
                  return G.querySelector("option") == null && (G.classList.contains("ql-font") ? N(G, j) : G.classList.contains("ql-header") ? N(G, B) : G.classList.contains("ql-size") && N(G, z)), new w.default(G);
              });
              var $ = function() {
                U.pickers.forEach(function(Q) {
                  Q.update();
                });
              };
              this.quill.on(t.default.events.EDITOR_CHANGE, $);
            }
          }]), I;
        }(a.default);
        Y.DEFAULTS = (0, p.default)(!0, {}, a.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                formula: function() {
                  this.quill.theme.tooltip.edit("formula");
                },
                image: function() {
                  var I = this, K = this.container.querySelector("input.ql-image[type=file]");
                  K == null && (K = document.createElement("input"), K.setAttribute("type", "file"), K.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), K.classList.add("ql-image"), K.addEventListener("change", function() {
                    if (K.files != null && K.files[0] != null) {
                      var F = new FileReader();
                      F.onload = function(q) {
                        var U = I.quill.getSelection(!0);
                        I.quill.updateContents(new h.default().retain(U.index).delete(U.length).insert({ image: q.target.result }), t.default.sources.USER), I.quill.setSelection(U.index + 1, t.default.sources.SILENT), K.value = "";
                      }, F.readAsDataURL(K.files[0]);
                    }
                  }), this.container.appendChild(K)), K.click();
                },
                video: function() {
                  this.quill.theme.tooltip.edit("video");
                }
              }
            }
          }
        });
        var H = function(M) {
          _(I, M);
          function I(K, F) {
            E(this, I);
            var q = m(this, (I.__proto__ || Object.getPrototypeOf(I)).call(this, K, F));
            return q.textbox = q.root.querySelector('input[type="text"]'), q.listen(), q;
          }
          return T(I, [{
            key: "listen",
            value: function() {
              var F = this;
              this.textbox.addEventListener("keydown", function(q) {
                u.default.match(q, "enter") ? (F.save(), q.preventDefault()) : u.default.match(q, "escape") && (F.cancel(), q.preventDefault());
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
              var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
              this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), q != null ? this.textbox.value = q : F !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + F) || ""), this.root.setAttribute("data-mode", F);
            }
          }, {
            key: "restoreFocus",
            value: function() {
              var F = this.quill.scrollingContainer.scrollTop;
              this.quill.focus(), this.quill.scrollingContainer.scrollTop = F;
            }
          }, {
            key: "save",
            value: function() {
              var F = this.textbox.value;
              switch (this.root.getAttribute("data-mode")) {
                case "link": {
                  var q = this.quill.root.scrollTop;
                  this.linkRange ? (this.quill.formatText(this.linkRange, "link", F, t.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", F, t.default.sources.USER)), this.quill.root.scrollTop = q;
                  break;
                }
                case "video":
                  F = R(F);
                case "formula": {
                  if (!F)
                    break;
                  var U = this.quill.getSelection(!0);
                  if (U != null) {
                    var $ = U.index + U.length;
                    this.quill.insertEmbed($, this.root.getAttribute("data-mode"), F, t.default.sources.USER), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText($ + 1, " ", t.default.sources.USER), this.quill.setSelection($ + 2, t.default.sources.USER);
                  }
                  break;
                }
              }
              this.textbox.value = "", this.hide();
            }
          }]), I;
        }(A.default);
        function R(M) {
          var I = M.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || M.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
          return I ? (I[1] || "https") + "://www.youtube.com/embed/" + I[2] + "?showinfo=0" : (I = M.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (I[1] || "https") + "://player.vimeo.com/video/" + I[2] + "/" : M;
        }
        function N(M, I) {
          var K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          I.forEach(function(F) {
            var q = document.createElement("option");
            F === K ? q.setAttribute("selected", "selected") : q.setAttribute("value", F), M.appendChild(q);
          });
        }
        v.BaseTooltip = H, v.default = Y;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", { value: !0 });
        var T = function() {
          function O() {
            this.head = this.tail = null, this.length = 0;
          }
          return O.prototype.append = function() {
            for (var g = [], p = 0; p < arguments.length; p++)
              g[p] = arguments[p];
            this.insertBefore(g[0], null), g.length > 1 && this.append.apply(this, g.slice(1));
          }, O.prototype.contains = function(g) {
            for (var p, y = this.iterator(); p = y(); )
              if (p === g)
                return !0;
            return !1;
          }, O.prototype.insertBefore = function(g, p) {
            !g || (g.next = p, p != null ? (g.prev = p.prev, p.prev != null && (p.prev.next = g), p.prev = g, p === this.head && (this.head = g)) : this.tail != null ? (this.tail.next = g, g.prev = this.tail, this.tail = g) : (g.prev = null, this.head = this.tail = g), this.length += 1);
          }, O.prototype.offset = function(g) {
            for (var p = 0, y = this.head; y != null; ) {
              if (y === g)
                return p;
              p += y.length(), y = y.next;
            }
            return -1;
          }, O.prototype.remove = function(g) {
            !this.contains(g) || (g.prev != null && (g.prev.next = g.next), g.next != null && (g.next.prev = g.prev), g === this.head && (this.head = g.next), g === this.tail && (this.tail = g.prev), this.length -= 1);
          }, O.prototype.iterator = function(g) {
            return g === void 0 && (g = this.head), function() {
              var p = g;
              return g != null && (g = g.next), p;
            };
          }, O.prototype.find = function(g, p) {
            p === void 0 && (p = !1);
            for (var y, h = this.iterator(); y = h(); ) {
              var l = y.length();
              if (g < l || p && g === l && (y.next == null || y.next.length() !== 0))
                return [y, g];
              g -= l;
            }
            return [null, 0];
          }, O.prototype.forEach = function(g) {
            for (var p, y = this.iterator(); p = y(); )
              g(p);
          }, O.prototype.forEachAt = function(g, p, y) {
            if (!(p <= 0))
              for (var h = this.find(g), l = h[0], t = h[1], e, u = g - t, o = this.iterator(l); (e = o()) && u < g + p; ) {
                var a = e.length();
                g > u ? y(e, g - u, Math.min(p, u + a - g)) : y(e, 0, Math.min(a, g + p - u)), u += a;
              }
          }, O.prototype.map = function(g) {
            return this.reduce(function(p, y) {
              return p.push(g(y)), p;
            }, []);
          }, O.prototype.reduce = function(g, p) {
            for (var y, h = this.iterator(); y = h(); )
              p = g(p, y);
            return p;
          }, O;
        }();
        v.default = T;
      },
      function(P, v, d) {
        var T = this && this.__extends || function() {
          var l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
            t.__proto__ = e;
          } || function(t, e) {
            for (var u in e)
              e.hasOwnProperty(u) && (t[u] = e[u]);
          };
          return function(t, e) {
            l(t, e);
            function u() {
              this.constructor = t;
            }
            t.prototype = e === null ? Object.create(e) : (u.prototype = e.prototype, new u());
          };
        }();
        Object.defineProperty(v, "__esModule", { value: !0 });
        var O = d(17), g = d(1), p = {
          attributes: !0,
          characterData: !0,
          characterDataOldValue: !0,
          childList: !0,
          subtree: !0
        }, y = 100, h = function(l) {
          T(t, l);
          function t(e) {
            var u = l.call(this, e) || this;
            return u.scroll = u, u.observer = new MutationObserver(function(o) {
              u.update(o);
            }), u.observer.observe(u.domNode, p), u.attach(), u;
          }
          return t.prototype.detach = function() {
            l.prototype.detach.call(this), this.observer.disconnect();
          }, t.prototype.deleteAt = function(e, u) {
            this.update(), e === 0 && u === this.length() ? this.children.forEach(function(o) {
              o.remove();
            }) : l.prototype.deleteAt.call(this, e, u);
          }, t.prototype.formatAt = function(e, u, o, a) {
            this.update(), l.prototype.formatAt.call(this, e, u, o, a);
          }, t.prototype.insertAt = function(e, u, o) {
            this.update(), l.prototype.insertAt.call(this, e, u, o);
          }, t.prototype.optimize = function(e, u) {
            var o = this;
            e === void 0 && (e = []), u === void 0 && (u = {}), l.prototype.optimize.call(this, u);
            for (var a = [].slice.call(this.observer.takeRecords()); a.length > 0; )
              e.push(a.pop());
            for (var r = function(c, w) {
              w === void 0 && (w = !0), !(c == null || c === o) && c.domNode.parentNode != null && (c.domNode[g.DATA_KEY].mutations == null && (c.domNode[g.DATA_KEY].mutations = []), w && r(c.parent));
            }, i = function(c) {
              c.domNode[g.DATA_KEY] == null || c.domNode[g.DATA_KEY].mutations == null || (c instanceof O.default && c.children.forEach(i), c.optimize(u));
            }, f = e, n = 0; f.length > 0; n += 1) {
              if (n >= y)
                throw new Error("[Parchment] Maximum optimize iterations reached");
              for (f.forEach(function(c) {
                var w = g.find(c.target, !0);
                w != null && (w.domNode === c.target && (c.type === "childList" ? (r(g.find(c.previousSibling, !1)), [].forEach.call(c.addedNodes, function(b) {
                  var A = g.find(b, !1);
                  r(A, !1), A instanceof O.default && A.children.forEach(function(L) {
                    r(L, !1);
                  });
                })) : c.type === "attributes" && r(w.prev)), r(w));
              }), this.children.forEach(i), f = [].slice.call(this.observer.takeRecords()), a = f.slice(); a.length > 0; )
                e.push(a.pop());
            }
          }, t.prototype.update = function(e, u) {
            var o = this;
            u === void 0 && (u = {}), e = e || this.observer.takeRecords(), e.map(function(a) {
              var r = g.find(a.target, !0);
              return r == null ? null : r.domNode[g.DATA_KEY].mutations == null ? (r.domNode[g.DATA_KEY].mutations = [a], r) : (r.domNode[g.DATA_KEY].mutations.push(a), null);
            }).forEach(function(a) {
              a == null || a === o || a.domNode[g.DATA_KEY] == null || a.update(a.domNode[g.DATA_KEY].mutations || [], u);
            }), this.domNode[g.DATA_KEY].mutations != null && l.prototype.update.call(this, this.domNode[g.DATA_KEY].mutations, u), this.optimize(e, u);
          }, t.blotName = "scroll", t.defaultChild = "block", t.scope = g.Scope.BLOCK_BLOT, t.tagName = "DIV", t;
        }(O.default);
        v.default = h;
      },
      function(P, v, d) {
        var T = this && this.__extends || function() {
          var h = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, t) {
            l.__proto__ = t;
          } || function(l, t) {
            for (var e in t)
              t.hasOwnProperty(e) && (l[e] = t[e]);
          };
          return function(l, t) {
            h(l, t);
            function e() {
              this.constructor = l;
            }
            l.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
          };
        }();
        Object.defineProperty(v, "__esModule", { value: !0 });
        var O = d(18), g = d(1);
        function p(h, l) {
          if (Object.keys(h).length !== Object.keys(l).length)
            return !1;
          for (var t in h)
            if (h[t] !== l[t])
              return !1;
          return !0;
        }
        var y = function(h) {
          T(l, h);
          function l() {
            return h !== null && h.apply(this, arguments) || this;
          }
          return l.formats = function(t) {
            if (t.tagName !== l.tagName)
              return h.formats.call(this, t);
          }, l.prototype.format = function(t, e) {
            var u = this;
            t === this.statics.blotName && !e ? (this.children.forEach(function(o) {
              o instanceof O.default || (o = o.wrap(l.blotName, !0)), u.attributes.copy(o);
            }), this.unwrap()) : h.prototype.format.call(this, t, e);
          }, l.prototype.formatAt = function(t, e, u, o) {
            if (this.formats()[u] != null || g.query(u, g.Scope.ATTRIBUTE)) {
              var a = this.isolate(t, e);
              a.format(u, o);
            } else
              h.prototype.formatAt.call(this, t, e, u, o);
          }, l.prototype.optimize = function(t) {
            h.prototype.optimize.call(this, t);
            var e = this.formats();
            if (Object.keys(e).length === 0)
              return this.unwrap();
            var u = this.next;
            u instanceof l && u.prev === this && p(e, u.formats()) && (u.moveChildren(this), u.remove());
          }, l.blotName = "inline", l.scope = g.Scope.INLINE_BLOT, l.tagName = "SPAN", l;
        }(O.default);
        v.default = y;
      },
      function(P, v, d) {
        var T = this && this.__extends || function() {
          var y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, l) {
            h.__proto__ = l;
          } || function(h, l) {
            for (var t in l)
              l.hasOwnProperty(t) && (h[t] = l[t]);
          };
          return function(h, l) {
            y(h, l);
            function t() {
              this.constructor = h;
            }
            h.prototype = l === null ? Object.create(l) : (t.prototype = l.prototype, new t());
          };
        }();
        Object.defineProperty(v, "__esModule", { value: !0 });
        var O = d(18), g = d(1), p = function(y) {
          T(h, y);
          function h() {
            return y !== null && y.apply(this, arguments) || this;
          }
          return h.formats = function(l) {
            var t = g.query(h.blotName).tagName;
            if (l.tagName !== t)
              return y.formats.call(this, l);
          }, h.prototype.format = function(l, t) {
            g.query(l, g.Scope.BLOCK) != null && (l === this.statics.blotName && !t ? this.replaceWith(h.blotName) : y.prototype.format.call(this, l, t));
          }, h.prototype.formatAt = function(l, t, e, u) {
            g.query(e, g.Scope.BLOCK) != null ? this.format(e, u) : y.prototype.formatAt.call(this, l, t, e, u);
          }, h.prototype.insertAt = function(l, t, e) {
            if (e == null || g.query(t, g.Scope.INLINE) != null)
              y.prototype.insertAt.call(this, l, t, e);
            else {
              var u = this.split(l), o = g.create(t, e);
              u.parent.insertBefore(o, u);
            }
          }, h.prototype.update = function(l, t) {
            navigator.userAgent.match(/Trident/) ? this.build() : y.prototype.update.call(this, l, t);
          }, h.blotName = "block", h.scope = g.Scope.BLOCK_BLOT, h.tagName = "P", h;
        }(O.default);
        v.default = p;
      },
      function(P, v, d) {
        var T = this && this.__extends || function() {
          var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, h) {
            y.__proto__ = h;
          } || function(y, h) {
            for (var l in h)
              h.hasOwnProperty(l) && (y[l] = h[l]);
          };
          return function(y, h) {
            p(y, h);
            function l() {
              this.constructor = y;
            }
            y.prototype = h === null ? Object.create(h) : (l.prototype = h.prototype, new l());
          };
        }();
        Object.defineProperty(v, "__esModule", { value: !0 });
        var O = d(19), g = function(p) {
          T(y, p);
          function y() {
            return p !== null && p.apply(this, arguments) || this;
          }
          return y.formats = function(h) {
          }, y.prototype.format = function(h, l) {
            p.prototype.formatAt.call(this, 0, this.length(), h, l);
          }, y.prototype.formatAt = function(h, l, t, e) {
            h === 0 && l === this.length() ? this.format(t, e) : p.prototype.formatAt.call(this, h, l, t, e);
          }, y.prototype.formats = function() {
            return this.statics.formats(this.domNode);
          }, y;
        }(O.default);
        v.default = g;
      },
      function(P, v, d) {
        var T = this && this.__extends || function() {
          var y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, l) {
            h.__proto__ = l;
          } || function(h, l) {
            for (var t in l)
              l.hasOwnProperty(t) && (h[t] = l[t]);
          };
          return function(h, l) {
            y(h, l);
            function t() {
              this.constructor = h;
            }
            h.prototype = l === null ? Object.create(l) : (t.prototype = l.prototype, new t());
          };
        }();
        Object.defineProperty(v, "__esModule", { value: !0 });
        var O = d(19), g = d(1), p = function(y) {
          T(h, y);
          function h(l) {
            var t = y.call(this, l) || this;
            return t.text = t.statics.value(t.domNode), t;
          }
          return h.create = function(l) {
            return document.createTextNode(l);
          }, h.value = function(l) {
            var t = l.data;
            return t.normalize && (t = t.normalize()), t;
          }, h.prototype.deleteAt = function(l, t) {
            this.domNode.data = this.text = this.text.slice(0, l) + this.text.slice(l + t);
          }, h.prototype.index = function(l, t) {
            return this.domNode === l ? t : -1;
          }, h.prototype.insertAt = function(l, t, e) {
            e == null ? (this.text = this.text.slice(0, l) + t + this.text.slice(l), this.domNode.data = this.text) : y.prototype.insertAt.call(this, l, t, e);
          }, h.prototype.length = function() {
            return this.text.length;
          }, h.prototype.optimize = function(l) {
            y.prototype.optimize.call(this, l), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof h && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
          }, h.prototype.position = function(l, t) {
            return [this.domNode, l];
          }, h.prototype.split = function(l, t) {
            if (t === void 0 && (t = !1), !t) {
              if (l === 0)
                return this;
              if (l === this.length())
                return this.next;
            }
            var e = g.create(this.domNode.splitText(l));
            return this.parent.insertBefore(e, this.next), this.text = this.statics.value(this.domNode), e;
          }, h.prototype.update = function(l, t) {
            var e = this;
            l.some(function(u) {
              return u.type === "characterData" && u.target === e.domNode;
            }) && (this.text = this.statics.value(this.domNode));
          }, h.prototype.value = function() {
            return this.text;
          }, h.blotName = "text", h.scope = g.Scope.INLINE_BLOT, h;
        }(O.default);
        v.default = p;
      },
      function(P, v, d) {
        var T = document.createElement("div");
        if (T.classList.toggle("test-class", !1), T.classList.contains("test-class")) {
          var O = DOMTokenList.prototype.toggle;
          DOMTokenList.prototype.toggle = function(g, p) {
            return arguments.length > 1 && !this.contains(g) == !p ? p : O.call(this, g);
          };
        }
        String.prototype.startsWith || (String.prototype.startsWith = function(g, p) {
          return p = p || 0, this.substr(p, g.length) === g;
        }), String.prototype.endsWith || (String.prototype.endsWith = function(g, p) {
          var y = this.toString();
          (typeof p != "number" || !isFinite(p) || Math.floor(p) !== p || p > y.length) && (p = y.length), p -= g.length;
          var h = y.indexOf(g, p);
          return h !== -1 && h === p;
        }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
          value: function(p) {
            if (this === null)
              throw new TypeError("Array.prototype.find called on null or undefined");
            if (typeof p != "function")
              throw new TypeError("predicate must be a function");
            for (var y = Object(this), h = y.length >>> 0, l = arguments[1], t, e = 0; e < h; e++)
              if (t = y[e], p.call(l, t, e, y))
                return t;
          }
        }), document.addEventListener("DOMContentLoaded", function() {
          document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1);
        });
      },
      function(P, v) {
        var d = -1, T = 1, O = 0;
        function g(n, c, w) {
          if (n == c)
            return n ? [[O, n]] : [];
          (w < 0 || n.length < w) && (w = null);
          var b = l(n, c), A = n.substring(0, b);
          n = n.substring(b), c = c.substring(b), b = t(n, c);
          var L = n.substring(n.length - b);
          n = n.substring(0, n.length - b), c = c.substring(0, c.length - b);
          var E = p(n, c);
          return A && E.unshift([O, A]), L && E.push([O, L]), u(E), w != null && (E = r(E, w)), E = i(E), E;
        }
        function p(n, c) {
          var w;
          if (!n)
            return [[T, c]];
          if (!c)
            return [[d, n]];
          var b = n.length > c.length ? n : c, A = n.length > c.length ? c : n, L = b.indexOf(A);
          if (L != -1)
            return w = [
              [T, b.substring(0, L)],
              [O, A],
              [T, b.substring(L + A.length)]
            ], n.length > c.length && (w[0][0] = w[2][0] = d), w;
          if (A.length == 1)
            return [[d, n], [T, c]];
          var E = e(n, c);
          if (E) {
            var m = E[0], _ = E[1], x = E[2], k = E[3], j = E[4], B = g(m, x), z = g(_, k);
            return B.concat([[O, j]], z);
          }
          return y(n, c);
        }
        function y(n, c) {
          for (var w = n.length, b = c.length, A = Math.ceil((w + b) / 2), L = A, E = 2 * A, m = new Array(E), _ = new Array(E), x = 0; x < E; x++)
            m[x] = -1, _[x] = -1;
          m[L + 1] = 0, _[L + 1] = 0;
          for (var k = w - b, j = k % 2 != 0, B = 0, z = 0, Y = 0, H = 0, R = 0; R < A; R++) {
            for (var N = -R + B; N <= R - z; N += 2) {
              var M = L + N, I;
              N == -R || N != R && m[M - 1] < m[M + 1] ? I = m[M + 1] : I = m[M - 1] + 1;
              for (var K = I - N; I < w && K < b && n.charAt(I) == c.charAt(K); )
                I++, K++;
              if (m[M] = I, I > w)
                z += 2;
              else if (K > b)
                B += 2;
              else if (j) {
                var F = L + k - N;
                if (F >= 0 && F < E && _[F] != -1) {
                  var q = w - _[F];
                  if (I >= q)
                    return h(n, c, I, K);
                }
              }
            }
            for (var U = -R + Y; U <= R - H; U += 2) {
              var F = L + U, q;
              U == -R || U != R && _[F - 1] < _[F + 1] ? q = _[F + 1] : q = _[F - 1] + 1;
              for (var $ = q - U; q < w && $ < b && n.charAt(w - q - 1) == c.charAt(b - $ - 1); )
                q++, $++;
              if (_[F] = q, q > w)
                H += 2;
              else if ($ > b)
                Y += 2;
              else if (!j) {
                var M = L + k - U;
                if (M >= 0 && M < E && m[M] != -1) {
                  var I = m[M], K = L + I - M;
                  if (q = w - q, I >= q)
                    return h(n, c, I, K);
                }
              }
            }
          }
          return [[d, n], [T, c]];
        }
        function h(n, c, w, b) {
          var A = n.substring(0, w), L = c.substring(0, b), E = n.substring(w), m = c.substring(b), _ = g(A, L), x = g(E, m);
          return _.concat(x);
        }
        function l(n, c) {
          if (!n || !c || n.charAt(0) != c.charAt(0))
            return 0;
          for (var w = 0, b = Math.min(n.length, c.length), A = b, L = 0; w < A; )
            n.substring(L, A) == c.substring(L, A) ? (w = A, L = w) : b = A, A = Math.floor((b - w) / 2 + w);
          return A;
        }
        function t(n, c) {
          if (!n || !c || n.charAt(n.length - 1) != c.charAt(c.length - 1))
            return 0;
          for (var w = 0, b = Math.min(n.length, c.length), A = b, L = 0; w < A; )
            n.substring(n.length - A, n.length - L) == c.substring(c.length - A, c.length - L) ? (w = A, L = w) : b = A, A = Math.floor((b - w) / 2 + w);
          return A;
        }
        function e(n, c) {
          var w = n.length > c.length ? n : c, b = n.length > c.length ? c : n;
          if (w.length < 4 || b.length * 2 < w.length)
            return null;
          function A(z, Y, H) {
            for (var R = z.substring(H, H + Math.floor(z.length / 4)), N = -1, M = "", I, K, F, q; (N = Y.indexOf(R, N + 1)) != -1; ) {
              var U = l(
                z.substring(H),
                Y.substring(N)
              ), $ = t(
                z.substring(0, H),
                Y.substring(0, N)
              );
              M.length < $ + U && (M = Y.substring(N - $, N) + Y.substring(N, N + U), I = z.substring(0, H - $), K = z.substring(H + U), F = Y.substring(0, N - $), q = Y.substring(N + U));
            }
            return M.length * 2 >= z.length ? [
              I,
              K,
              F,
              q,
              M
            ] : null;
          }
          var L = A(
            w,
            b,
            Math.ceil(w.length / 4)
          ), E = A(
            w,
            b,
            Math.ceil(w.length / 2)
          ), m;
          if (!L && !E)
            return null;
          E ? L ? m = L[4].length > E[4].length ? L : E : m = E : m = L;
          var _, x, k, j;
          n.length > c.length ? (_ = m[0], x = m[1], k = m[2], j = m[3]) : (k = m[0], j = m[1], _ = m[2], x = m[3]);
          var B = m[4];
          return [_, x, k, j, B];
        }
        function u(n) {
          n.push([O, ""]);
          for (var c = 0, w = 0, b = 0, A = "", L = "", E; c < n.length; )
            switch (n[c][0]) {
              case T:
                b++, L += n[c][1], c++;
                break;
              case d:
                w++, A += n[c][1], c++;
                break;
              case O:
                w + b > 1 ? (w !== 0 && b !== 0 && (E = l(L, A), E !== 0 && (c - w - b > 0 && n[c - w - b - 1][0] == O ? n[c - w - b - 1][1] += L.substring(0, E) : (n.splice(0, 0, [
                  O,
                  L.substring(0, E)
                ]), c++), L = L.substring(E), A = A.substring(E)), E = t(L, A), E !== 0 && (n[c][1] = L.substring(L.length - E) + n[c][1], L = L.substring(0, L.length - E), A = A.substring(0, A.length - E))), w === 0 ? n.splice(
                  c - b,
                  w + b,
                  [T, L]
                ) : b === 0 ? n.splice(
                  c - w,
                  w + b,
                  [d, A]
                ) : n.splice(
                  c - w - b,
                  w + b,
                  [d, A],
                  [T, L]
                ), c = c - w - b + (w ? 1 : 0) + (b ? 1 : 0) + 1) : c !== 0 && n[c - 1][0] == O ? (n[c - 1][1] += n[c][1], n.splice(c, 1)) : c++, b = 0, w = 0, A = "", L = "";
                break;
            }
          n[n.length - 1][1] === "" && n.pop();
          var m = !1;
          for (c = 1; c < n.length - 1; )
            n[c - 1][0] == O && n[c + 1][0] == O && (n[c][1].substring(n[c][1].length - n[c - 1][1].length) == n[c - 1][1] ? (n[c][1] = n[c - 1][1] + n[c][1].substring(0, n[c][1].length - n[c - 1][1].length), n[c + 1][1] = n[c - 1][1] + n[c + 1][1], n.splice(c - 1, 1), m = !0) : n[c][1].substring(0, n[c + 1][1].length) == n[c + 1][1] && (n[c - 1][1] += n[c + 1][1], n[c][1] = n[c][1].substring(n[c + 1][1].length) + n[c + 1][1], n.splice(c + 1, 1), m = !0)), c++;
          m && u(n);
        }
        var o = g;
        o.INSERT = T, o.DELETE = d, o.EQUAL = O, P.exports = o;
        function a(n, c) {
          if (c === 0)
            return [O, n];
          for (var w = 0, b = 0; b < n.length; b++) {
            var A = n[b];
            if (A[0] === d || A[0] === O) {
              var L = w + A[1].length;
              if (c === L)
                return [b + 1, n];
              if (c < L) {
                n = n.slice();
                var E = c - w, m = [A[0], A[1].slice(0, E)], _ = [A[0], A[1].slice(E)];
                return n.splice(b, 1, m, _), [b + 1, n];
              } else
                w = L;
            }
          }
          throw new Error("cursor_pos is out of bounds!");
        }
        function r(n, c) {
          var w = a(n, c), b = w[1], A = w[0], L = b[A], E = b[A + 1];
          if (L == null)
            return n;
          if (L[0] !== O)
            return n;
          if (E != null && L[1] + E[1] === E[1] + L[1])
            return b.splice(A, 2, E, L), f(b, A, 2);
          if (E != null && E[1].indexOf(L[1]) === 0) {
            b.splice(A, 2, [E[0], L[1]], [0, L[1]]);
            var m = E[1].slice(L[1].length);
            return m.length > 0 && b.splice(A + 2, 0, [E[0], m]), f(b, A, 3);
          } else
            return n;
        }
        function i(n) {
          for (var c = !1, w = function(E) {
            return E.charCodeAt(0) >= 56320 && E.charCodeAt(0) <= 57343;
          }, b = function(E) {
            return E.charCodeAt(E.length - 1) >= 55296 && E.charCodeAt(E.length - 1) <= 56319;
          }, A = 2; A < n.length; A += 1)
            n[A - 2][0] === O && b(n[A - 2][1]) && n[A - 1][0] === d && w(n[A - 1][1]) && n[A][0] === T && w(n[A][1]) && (c = !0, n[A - 1][1] = n[A - 2][1].slice(-1) + n[A - 1][1], n[A][1] = n[A - 2][1].slice(-1) + n[A][1], n[A - 2][1] = n[A - 2][1].slice(0, -1));
          if (!c)
            return n;
          for (var L = [], A = 0; A < n.length; A += 1)
            n[A][1].length > 0 && L.push(n[A]);
          return L;
        }
        function f(n, c, w) {
          for (var b = c + w - 1; b >= 0 && b >= c - 1; b--)
            if (b + 1 < n.length) {
              var A = n[b], L = n[b + 1];
              A[0] === L[1] && n.splice(b, 2, [A[0], A[1] + L[1]]);
            }
          return n;
        }
      },
      function(P, v) {
        v = P.exports = typeof Object.keys == "function" ? Object.keys : d, v.shim = d;
        function d(T) {
          var O = [];
          for (var g in T)
            O.push(g);
          return O;
        }
      },
      function(P, v) {
        var d = function() {
          return Object.prototype.toString.call(arguments);
        }() == "[object Arguments]";
        v = P.exports = d ? T : O, v.supported = T;
        function T(g) {
          return Object.prototype.toString.call(g) == "[object Arguments]";
        }
        v.unsupported = O;
        function O(g) {
          return g && typeof g == "object" && typeof g.length == "number" && Object.prototype.hasOwnProperty.call(g, "callee") && !Object.prototype.propertyIsEnumerable.call(g, "callee") || !1;
        }
      },
      function(P, v) {
        var d = Object.prototype.hasOwnProperty, T = "~";
        function O() {
        }
        Object.create && (O.prototype = /* @__PURE__ */ Object.create(null), new O().__proto__ || (T = !1));
        function g(y, h, l) {
          this.fn = y, this.context = h, this.once = l || !1;
        }
        function p() {
          this._events = new O(), this._eventsCount = 0;
        }
        p.prototype.eventNames = function() {
          var h = [], l, t;
          if (this._eventsCount === 0)
            return h;
          for (t in l = this._events)
            d.call(l, t) && h.push(T ? t.slice(1) : t);
          return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(l)) : h;
        }, p.prototype.listeners = function(h, l) {
          var t = T ? T + h : h, e = this._events[t];
          if (l)
            return !!e;
          if (!e)
            return [];
          if (e.fn)
            return [e.fn];
          for (var u = 0, o = e.length, a = new Array(o); u < o; u++)
            a[u] = e[u].fn;
          return a;
        }, p.prototype.emit = function(h, l, t, e, u, o) {
          var a = T ? T + h : h;
          if (!this._events[a])
            return !1;
          var r = this._events[a], i = arguments.length, f, n;
          if (r.fn) {
            switch (r.once && this.removeListener(h, r.fn, void 0, !0), i) {
              case 1:
                return r.fn.call(r.context), !0;
              case 2:
                return r.fn.call(r.context, l), !0;
              case 3:
                return r.fn.call(r.context, l, t), !0;
              case 4:
                return r.fn.call(r.context, l, t, e), !0;
              case 5:
                return r.fn.call(r.context, l, t, e, u), !0;
              case 6:
                return r.fn.call(r.context, l, t, e, u, o), !0;
            }
            for (n = 1, f = new Array(i - 1); n < i; n++)
              f[n - 1] = arguments[n];
            r.fn.apply(r.context, f);
          } else {
            var c = r.length, w;
            for (n = 0; n < c; n++)
              switch (r[n].once && this.removeListener(h, r[n].fn, void 0, !0), i) {
                case 1:
                  r[n].fn.call(r[n].context);
                  break;
                case 2:
                  r[n].fn.call(r[n].context, l);
                  break;
                case 3:
                  r[n].fn.call(r[n].context, l, t);
                  break;
                case 4:
                  r[n].fn.call(r[n].context, l, t, e);
                  break;
                default:
                  if (!f)
                    for (w = 1, f = new Array(i - 1); w < i; w++)
                      f[w - 1] = arguments[w];
                  r[n].fn.apply(r[n].context, f);
              }
          }
          return !0;
        }, p.prototype.on = function(h, l, t) {
          var e = new g(l, t || this), u = T ? T + h : h;
          return this._events[u] ? this._events[u].fn ? this._events[u] = [this._events[u], e] : this._events[u].push(e) : (this._events[u] = e, this._eventsCount++), this;
        }, p.prototype.once = function(h, l, t) {
          var e = new g(l, t || this, !0), u = T ? T + h : h;
          return this._events[u] ? this._events[u].fn ? this._events[u] = [this._events[u], e] : this._events[u].push(e) : (this._events[u] = e, this._eventsCount++), this;
        }, p.prototype.removeListener = function(h, l, t, e) {
          var u = T ? T + h : h;
          if (!this._events[u])
            return this;
          if (!l)
            return --this._eventsCount === 0 ? this._events = new O() : delete this._events[u], this;
          var o = this._events[u];
          if (o.fn)
            o.fn === l && (!e || o.once) && (!t || o.context === t) && (--this._eventsCount === 0 ? this._events = new O() : delete this._events[u]);
          else {
            for (var a = 0, r = [], i = o.length; a < i; a++)
              (o[a].fn !== l || e && !o[a].once || t && o[a].context !== t) && r.push(o[a]);
            r.length ? this._events[u] = r.length === 1 ? r[0] : r : --this._eventsCount === 0 ? this._events = new O() : delete this._events[u];
          }
          return this;
        }, p.prototype.removeAllListeners = function(h) {
          var l;
          return h ? (l = T ? T + h : h, this._events[l] && (--this._eventsCount === 0 ? this._events = new O() : delete this._events[l])) : (this._events = new O(), this._eventsCount = 0), this;
        }, p.prototype.off = p.prototype.removeListener, p.prototype.addListener = p.prototype.on, p.prototype.setMaxListeners = function() {
          return this;
        }, p.prefixed = T, p.EventEmitter = p, typeof P < "u" && (P.exports = p);
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.matchText = v.matchSpacing = v.matchNewline = v.matchBlot = v.matchAttributor = v.default = void 0;
        var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(Z) {
          return typeof Z;
        } : function(Z) {
          return Z && typeof Symbol == "function" && Z.constructor === Symbol && Z !== Symbol.prototype ? "symbol" : typeof Z;
        }, O = function() {
          function Z(W, tt) {
            var et = [], J = !0, st = !1, ot = void 0;
            try {
              for (var at = W[Symbol.iterator](), wt; !(J = (wt = at.next()).done) && (et.push(wt.value), !(tt && et.length === tt)); J = !0)
                ;
            } catch (Ot) {
              st = !0, ot = Ot;
            } finally {
              try {
                !J && at.return && at.return();
              } finally {
                if (st)
                  throw ot;
              }
            }
            return et;
          }
          return function(W, tt) {
            if (Array.isArray(W))
              return W;
            if (Symbol.iterator in Object(W))
              return Z(W, tt);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), g = function() {
          function Z(W, tt) {
            for (var et = 0; et < tt.length; et++) {
              var J = tt[et];
              J.enumerable = J.enumerable || !1, J.configurable = !0, "value" in J && (J.writable = !0), Object.defineProperty(W, J.key, J);
            }
          }
          return function(W, tt, et) {
            return tt && Z(W.prototype, tt), et && Z(W, et), W;
          };
        }(), p = d(3), y = _(p), h = d(2), l = _(h), t = d(0), e = _(t), u = d(5), o = _(u), a = d(10), r = _(a), i = d(9), f = _(i), n = d(36), c = d(37), w = d(13), b = _(w), A = d(26), L = d(38), E = d(39), m = d(40);
        function _(Z) {
          return Z && Z.__esModule ? Z : { default: Z };
        }
        function x(Z, W, tt) {
          return W in Z ? Object.defineProperty(Z, W, { value: tt, enumerable: !0, configurable: !0, writable: !0 }) : Z[W] = tt, Z;
        }
        function k(Z, W) {
          if (!(Z instanceof W))
            throw new TypeError("Cannot call a class as a function");
        }
        function j(Z, W) {
          if (!Z)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return W && (typeof W == "object" || typeof W == "function") ? W : Z;
        }
        function B(Z, W) {
          if (typeof W != "function" && W !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof W);
          Z.prototype = Object.create(W && W.prototype, { constructor: { value: Z, enumerable: !1, writable: !0, configurable: !0 } }), W && (Object.setPrototypeOf ? Object.setPrototypeOf(Z, W) : Z.__proto__ = W);
        }
        var z = (0, r.default)("quill:clipboard"), Y = "__ql-matcher", H = [[Node.TEXT_NODE, gt], [Node.TEXT_NODE, ft], ["br", nt], [Node.ELEMENT_NODE, ft], [Node.ELEMENT_NODE, Q], [Node.ELEMENT_NODE, ht], [Node.ELEMENT_NODE, G], [Node.ELEMENT_NODE, mt], ["li", lt], ["b", $.bind($, "bold")], ["i", $.bind($, "italic")], ["style", it]], R = [n.AlignAttribute, L.DirectionAttribute].reduce(function(Z, W) {
          return Z[W.keyName] = W, Z;
        }, {}), N = [n.AlignStyle, c.BackgroundStyle, A.ColorStyle, L.DirectionStyle, E.FontStyle, m.SizeStyle].reduce(function(Z, W) {
          return Z[W.keyName] = W, Z;
        }, {}), M = function(Z) {
          B(W, Z);
          function W(tt, et) {
            k(this, W);
            var J = j(this, (W.__proto__ || Object.getPrototypeOf(W)).call(this, tt, et));
            return J.quill.root.addEventListener("paste", J.onPaste.bind(J)), J.container = J.quill.addContainer("ql-clipboard"), J.container.setAttribute("contenteditable", !0), J.container.setAttribute("tabindex", -1), J.matchers = [], H.concat(J.options.matchers).forEach(function(st) {
              var ot = O(st, 2), at = ot[0], wt = ot[1];
              !et.matchVisual && wt === ht || J.addMatcher(at, wt);
            }), J;
          }
          return g(W, [{
            key: "addMatcher",
            value: function(et, J) {
              this.matchers.push([et, J]);
            }
          }, {
            key: "convert",
            value: function(et) {
              if (typeof et == "string")
                return this.container.innerHTML = et.replace(/\>\r?\n +\</g, "><"), this.convert();
              var J = this.quill.getFormat(this.quill.selection.savedRange.index);
              if (J[b.default.blotName]) {
                var st = this.container.innerText;
                return this.container.innerHTML = "", new l.default().insert(st, x({}, b.default.blotName, J[b.default.blotName]));
              }
              var ot = this.prepareMatching(), at = O(ot, 2), wt = at[0], Ot = at[1], vt = U(this.container, wt, Ot);
              return F(vt, `
`) && vt.ops[vt.ops.length - 1].attributes == null && (vt = vt.compose(new l.default().retain(vt.length() - 1).delete(1))), z.log("convert", this.container.innerHTML, vt), this.container.innerHTML = "", vt;
            }
          }, {
            key: "dangerouslyPasteHTML",
            value: function(et, J) {
              var st = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : o.default.sources.API;
              if (typeof et == "string")
                this.quill.setContents(this.convert(et), J), this.quill.setSelection(0, o.default.sources.SILENT);
              else {
                var ot = this.convert(J);
                this.quill.updateContents(new l.default().retain(et).concat(ot), st), this.quill.setSelection(et + ot.length(), o.default.sources.SILENT);
              }
            }
          }, {
            key: "onPaste",
            value: function(et) {
              var J = this;
              if (!(et.defaultPrevented || !this.quill.isEnabled())) {
                var st = this.quill.getSelection(), ot = new l.default().retain(st.index), at = this.quill.scrollingContainer.scrollTop;
                this.container.focus(), this.quill.selection.update(o.default.sources.SILENT), setTimeout(function() {
                  ot = ot.concat(J.convert()).delete(st.length), J.quill.updateContents(ot, o.default.sources.USER), J.quill.setSelection(ot.length() - st.length, o.default.sources.SILENT), J.quill.scrollingContainer.scrollTop = at, J.quill.focus();
                }, 1);
              }
            }
          }, {
            key: "prepareMatching",
            value: function() {
              var et = this, J = [], st = [];
              return this.matchers.forEach(function(ot) {
                var at = O(ot, 2), wt = at[0], Ot = at[1];
                switch (wt) {
                  case Node.TEXT_NODE:
                    st.push(Ot);
                    break;
                  case Node.ELEMENT_NODE:
                    J.push(Ot);
                    break;
                  default:
                    [].forEach.call(et.container.querySelectorAll(wt), function(vt) {
                      vt[Y] = vt[Y] || [], vt[Y].push(Ot);
                    });
                    break;
                }
              }), [J, st];
            }
          }]), W;
        }(f.default);
        M.DEFAULTS = {
          matchers: [],
          matchVisual: !0
        };
        function I(Z, W, tt) {
          return (typeof W > "u" ? "undefined" : T(W)) === "object" ? Object.keys(W).reduce(function(et, J) {
            return I(et, J, W[J]);
          }, Z) : Z.reduce(function(et, J) {
            return J.attributes && J.attributes[W] ? et.push(J) : et.insert(J.insert, (0, y.default)({}, x({}, W, tt), J.attributes));
          }, new l.default());
        }
        function K(Z) {
          if (Z.nodeType !== Node.ELEMENT_NODE)
            return {};
          var W = "__ql-computed-style";
          return Z[W] || (Z[W] = window.getComputedStyle(Z));
        }
        function F(Z, W) {
          for (var tt = "", et = Z.ops.length - 1; et >= 0 && tt.length < W.length; --et) {
            var J = Z.ops[et];
            if (typeof J.insert != "string")
              break;
            tt = J.insert + tt;
          }
          return tt.slice(-1 * W.length) === W;
        }
        function q(Z) {
          if (Z.childNodes.length === 0)
            return !1;
          var W = K(Z);
          return ["block", "list-item"].indexOf(W.display) > -1;
        }
        function U(Z, W, tt) {
          return Z.nodeType === Z.TEXT_NODE ? tt.reduce(function(et, J) {
            return J(Z, et);
          }, new l.default()) : Z.nodeType === Z.ELEMENT_NODE ? [].reduce.call(Z.childNodes || [], function(et, J) {
            var st = U(J, W, tt);
            return J.nodeType === Z.ELEMENT_NODE && (st = W.reduce(function(ot, at) {
              return at(J, ot);
            }, st), st = (J[Y] || []).reduce(function(ot, at) {
              return at(J, ot);
            }, st)), et.concat(st);
          }, new l.default()) : new l.default();
        }
        function $(Z, W, tt) {
          return I(tt, Z, !0);
        }
        function G(Z, W) {
          var tt = e.default.Attributor.Attribute.keys(Z), et = e.default.Attributor.Class.keys(Z), J = e.default.Attributor.Style.keys(Z), st = {};
          return tt.concat(et).concat(J).forEach(function(ot) {
            var at = e.default.query(ot, e.default.Scope.ATTRIBUTE);
            at != null && (st[at.attrName] = at.value(Z), st[at.attrName]) || (at = R[ot], at != null && (at.attrName === ot || at.keyName === ot) && (st[at.attrName] = at.value(Z) || void 0), at = N[ot], at != null && (at.attrName === ot || at.keyName === ot) && (at = N[ot], st[at.attrName] = at.value(Z) || void 0));
          }), Object.keys(st).length > 0 && (W = I(W, st)), W;
        }
        function Q(Z, W) {
          var tt = e.default.query(Z);
          if (tt == null)
            return W;
          if (tt.prototype instanceof e.default.Embed) {
            var et = {}, J = tt.value(Z);
            J != null && (et[tt.blotName] = J, W = new l.default().insert(et, tt.formats(Z)));
          } else
            typeof tt.formats == "function" && (W = I(W, tt.blotName, tt.formats(Z)));
          return W;
        }
        function nt(Z, W) {
          return F(W, `
`) || W.insert(`
`), W;
        }
        function it() {
          return new l.default();
        }
        function lt(Z, W) {
          var tt = e.default.query(Z);
          if (tt == null || tt.blotName !== "list-item" || !F(W, `
`))
            return W;
          for (var et = -1, J = Z.parentNode; !J.classList.contains("ql-clipboard"); )
            (e.default.query(J) || {}).blotName === "list" && (et += 1), J = J.parentNode;
          return et <= 0 ? W : W.compose(new l.default().retain(W.length() - 1).retain(1, { indent: et }));
        }
        function ft(Z, W) {
          return F(W, `
`) || (q(Z) || W.length() > 0 && Z.nextSibling && q(Z.nextSibling)) && W.insert(`
`), W;
        }
        function ht(Z, W) {
          if (q(Z) && Z.nextElementSibling != null && !F(W, `

`)) {
            var tt = Z.offsetHeight + parseFloat(K(Z).marginTop) + parseFloat(K(Z).marginBottom);
            Z.nextElementSibling.offsetTop > Z.offsetTop + tt * 1.5 && W.insert(`
`);
          }
          return W;
        }
        function mt(Z, W) {
          var tt = {}, et = Z.style || {};
          return et.fontStyle && K(Z).fontStyle === "italic" && (tt.italic = !0), et.fontWeight && (K(Z).fontWeight.startsWith("bold") || parseInt(K(Z).fontWeight) >= 700) && (tt.bold = !0), Object.keys(tt).length > 0 && (W = I(W, tt)), parseFloat(et.textIndent || 0) > 0 && (W = new l.default().insert("	").concat(W)), W;
        }
        function gt(Z, W) {
          var tt = Z.data;
          if (Z.parentNode.tagName === "O:P")
            return W.insert(tt.trim());
          if (tt.trim().length === 0 && Z.parentNode.classList.contains("ql-clipboard"))
            return W;
          if (!K(Z.parentNode).whiteSpace.startsWith("pre")) {
            var et = function(st, ot) {
              return ot = ot.replace(/[^\u00a0]/g, ""), ot.length < 1 && st ? " " : ot;
            };
            tt = tt.replace(/\r\n/g, " ").replace(/\n/g, " "), tt = tt.replace(/\s\s+/g, et.bind(et, !0)), (Z.previousSibling == null && q(Z.parentNode) || Z.previousSibling != null && q(Z.previousSibling)) && (tt = tt.replace(/^\s+/, et.bind(et, !1))), (Z.nextSibling == null && q(Z.parentNode) || Z.nextSibling != null && q(Z.nextSibling)) && (tt = tt.replace(/\s+$/, et.bind(et, !1)));
          }
          return W.insert(tt);
        }
        v.default = M, v.matchAttributor = G, v.matchBlot = Q, v.matchNewline = ft, v.matchSpacing = ht, v.matchText = gt;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = function() {
          function u(o, a) {
            for (var r = 0; r < a.length; r++) {
              var i = a[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, i.key, i);
            }
          }
          return function(o, a, r) {
            return a && u(o.prototype, a), r && u(o, r), o;
          };
        }(), O = function u(o, a, r) {
          o === null && (o = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(o, a);
          if (i === void 0) {
            var f = Object.getPrototypeOf(o);
            return f === null ? void 0 : u(f, a, r);
          } else {
            if ("value" in i)
              return i.value;
            var n = i.get;
            return n === void 0 ? void 0 : n.call(r);
          }
        }, g = d(6), p = y(g);
        function y(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function h(u, o) {
          if (!(u instanceof o))
            throw new TypeError("Cannot call a class as a function");
        }
        function l(u, o) {
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
            return h(this, o), l(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
          }
          return T(o, [{
            key: "optimize",
            value: function(r) {
              O(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "optimize", this).call(this, r), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
            }
          }], [{
            key: "create",
            value: function() {
              return O(o.__proto__ || Object.getPrototypeOf(o), "create", this).call(this);
            }
          }, {
            key: "formats",
            value: function() {
              return !0;
            }
          }]), o;
        }(p.default);
        e.blotName = "bold", e.tagName = ["STRONG", "B"], v.default = e;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.addControls = v.default = void 0;
        var T = function() {
          function m(_, x) {
            var k = [], j = !0, B = !1, z = void 0;
            try {
              for (var Y = _[Symbol.iterator](), H; !(j = (H = Y.next()).done) && (k.push(H.value), !(x && k.length === x)); j = !0)
                ;
            } catch (R) {
              B = !0, z = R;
            } finally {
              try {
                !j && Y.return && Y.return();
              } finally {
                if (B)
                  throw z;
              }
            }
            return k;
          }
          return function(_, x) {
            if (Array.isArray(_))
              return _;
            if (Symbol.iterator in Object(_))
              return m(_, x);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), O = function() {
          function m(_, x) {
            for (var k = 0; k < x.length; k++) {
              var j = x[k];
              j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(_, j.key, j);
            }
          }
          return function(_, x, k) {
            return x && m(_.prototype, x), k && m(_, k), _;
          };
        }(), g = d(2), p = r(g), y = d(0), h = r(y), l = d(5), t = r(l), e = d(10), u = r(e), o = d(9), a = r(o);
        function r(m) {
          return m && m.__esModule ? m : { default: m };
        }
        function i(m, _, x) {
          return _ in m ? Object.defineProperty(m, _, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : m[_] = x, m;
        }
        function f(m, _) {
          if (!(m instanceof _))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(m, _) {
          if (!m)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return _ && (typeof _ == "object" || typeof _ == "function") ? _ : m;
        }
        function c(m, _) {
          if (typeof _ != "function" && _ !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof _);
          m.prototype = Object.create(_ && _.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), _ && (Object.setPrototypeOf ? Object.setPrototypeOf(m, _) : m.__proto__ = _);
        }
        var w = (0, u.default)("quill:toolbar"), b = function(m) {
          c(_, m);
          function _(x, k) {
            f(this, _);
            var j = n(this, (_.__proto__ || Object.getPrototypeOf(_)).call(this, x, k));
            if (Array.isArray(j.options.container)) {
              var B = document.createElement("div");
              L(B, j.options.container), x.container.parentNode.insertBefore(B, x.container), j.container = B;
            } else
              typeof j.options.container == "string" ? j.container = document.querySelector(j.options.container) : j.container = j.options.container;
            if (!(j.container instanceof HTMLElement)) {
              var z;
              return z = w.error("Container required for toolbar", j.options), n(j, z);
            }
            return j.container.classList.add("ql-toolbar"), j.controls = [], j.handlers = {}, Object.keys(j.options.handlers).forEach(function(Y) {
              j.addHandler(Y, j.options.handlers[Y]);
            }), [].forEach.call(j.container.querySelectorAll("button, select"), function(Y) {
              j.attach(Y);
            }), j.quill.on(t.default.events.EDITOR_CHANGE, function(Y, H) {
              Y === t.default.events.SELECTION_CHANGE && j.update(H);
            }), j.quill.on(t.default.events.SCROLL_OPTIMIZE, function() {
              var Y = j.quill.selection.getRange(), H = T(Y, 1), R = H[0];
              j.update(R);
            }), j;
          }
          return O(_, [{
            key: "addHandler",
            value: function(k, j) {
              this.handlers[k] = j;
            }
          }, {
            key: "attach",
            value: function(k) {
              var j = this, B = [].find.call(k.classList, function(Y) {
                return Y.indexOf("ql-") === 0;
              });
              if (!!B) {
                if (B = B.slice(3), k.tagName === "BUTTON" && k.setAttribute("type", "button"), this.handlers[B] == null) {
                  if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[B] == null) {
                    w.warn("ignoring attaching to disabled format", B, k);
                    return;
                  }
                  if (h.default.query(B) == null) {
                    w.warn("ignoring attaching to nonexistent format", B, k);
                    return;
                  }
                }
                var z = k.tagName === "SELECT" ? "change" : "click";
                k.addEventListener(z, function(Y) {
                  var H = void 0;
                  if (k.tagName === "SELECT") {
                    if (k.selectedIndex < 0)
                      return;
                    var R = k.options[k.selectedIndex];
                    R.hasAttribute("selected") ? H = !1 : H = R.value || !1;
                  } else
                    k.classList.contains("ql-active") ? H = !1 : H = k.value || !k.hasAttribute("value"), Y.preventDefault();
                  j.quill.focus();
                  var N = j.quill.selection.getRange(), M = T(N, 1), I = M[0];
                  if (j.handlers[B] != null)
                    j.handlers[B].call(j, H);
                  else if (h.default.query(B).prototype instanceof h.default.Embed) {
                    if (H = prompt("Enter " + B), !H)
                      return;
                    j.quill.updateContents(new p.default().retain(I.index).delete(I.length).insert(i({}, B, H)), t.default.sources.USER);
                  } else
                    j.quill.format(B, H, t.default.sources.USER);
                  j.update(I);
                }), this.controls.push([B, k]);
              }
            }
          }, {
            key: "update",
            value: function(k) {
              var j = k == null ? {} : this.quill.getFormat(k);
              this.controls.forEach(function(B) {
                var z = T(B, 2), Y = z[0], H = z[1];
                if (H.tagName === "SELECT") {
                  var R = void 0;
                  if (k == null)
                    R = null;
                  else if (j[Y] == null)
                    R = H.querySelector("option[selected]");
                  else if (!Array.isArray(j[Y])) {
                    var N = j[Y];
                    typeof N == "string" && (N = N.replace(/\"/g, '\\"')), R = H.querySelector('option[value="' + N + '"]');
                  }
                  R == null ? (H.value = "", H.selectedIndex = -1) : R.selected = !0;
                } else if (k == null)
                  H.classList.remove("ql-active");
                else if (H.hasAttribute("value")) {
                  var M = j[Y] === H.getAttribute("value") || j[Y] != null && j[Y].toString() === H.getAttribute("value") || j[Y] == null && !H.getAttribute("value");
                  H.classList.toggle("ql-active", M);
                } else
                  H.classList.toggle("ql-active", j[Y] != null);
              });
            }
          }]), _;
        }(a.default);
        b.DEFAULTS = {};
        function A(m, _, x) {
          var k = document.createElement("button");
          k.setAttribute("type", "button"), k.classList.add("ql-" + _), x != null && (k.value = x), m.appendChild(k);
        }
        function L(m, _) {
          Array.isArray(_[0]) || (_ = [_]), _.forEach(function(x) {
            var k = document.createElement("span");
            k.classList.add("ql-formats"), x.forEach(function(j) {
              if (typeof j == "string")
                A(k, j);
              else {
                var B = Object.keys(j)[0], z = j[B];
                Array.isArray(z) ? E(k, B, z) : A(k, B, z);
              }
            }), m.appendChild(k);
          });
        }
        function E(m, _, x) {
          var k = document.createElement("select");
          k.classList.add("ql-" + _), x.forEach(function(j) {
            var B = document.createElement("option");
            j !== !1 ? B.setAttribute("value", j) : B.setAttribute("selected", "selected"), k.appendChild(B);
          }), m.appendChild(k);
        }
        b.DEFAULTS = {
          container: null,
          handlers: {
            clean: function() {
              var _ = this, x = this.quill.getSelection();
              if (x != null)
                if (x.length == 0) {
                  var k = this.quill.getFormat();
                  Object.keys(k).forEach(function(j) {
                    h.default.query(j, h.default.Scope.INLINE) != null && _.quill.format(j, !1);
                  });
                } else
                  this.quill.removeFormat(x, t.default.sources.USER);
            },
            direction: function(_) {
              var x = this.quill.getFormat().align;
              _ === "rtl" && x == null ? this.quill.format("align", "right", t.default.sources.USER) : !_ && x === "right" && this.quill.format("align", !1, t.default.sources.USER), this.quill.format("direction", _, t.default.sources.USER);
            },
            indent: function(_) {
              var x = this.quill.getSelection(), k = this.quill.getFormat(x), j = parseInt(k.indent || 0);
              if (_ === "+1" || _ === "-1") {
                var B = _ === "+1" ? 1 : -1;
                k.direction === "rtl" && (B *= -1), this.quill.format("indent", j + B, t.default.sources.USER);
              }
            },
            link: function(_) {
              _ === !0 && (_ = prompt("Enter link URL:")), this.quill.format("link", _, t.default.sources.USER);
            },
            list: function(_) {
              var x = this.quill.getSelection(), k = this.quill.getFormat(x);
              _ === "check" ? k.list === "checked" || k.list === "unchecked" ? this.quill.format("list", !1, t.default.sources.USER) : this.quill.format("list", "unchecked", t.default.sources.USER) : this.quill.format("list", _, t.default.sources.USER);
            }
          }
        }, v.default = b, v.addControls = L;
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = function() {
          function u(o, a) {
            for (var r = 0; r < a.length; r++) {
              var i = a[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, i.key, i);
            }
          }
          return function(o, a, r) {
            return a && u(o.prototype, a), r && u(o, r), o;
          };
        }(), O = function u(o, a, r) {
          o === null && (o = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(o, a);
          if (i === void 0) {
            var f = Object.getPrototypeOf(o);
            return f === null ? void 0 : u(f, a, r);
          } else {
            if ("value" in i)
              return i.value;
            var n = i.get;
            return n === void 0 ? void 0 : n.call(r);
          }
        }, g = d(28), p = y(g);
        function y(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function h(u, o) {
          if (!(u instanceof o))
            throw new TypeError("Cannot call a class as a function");
        }
        function l(u, o) {
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
          function o(a, r) {
            h(this, o);
            var i = l(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, a));
            return i.label.innerHTML = r, i.container.classList.add("ql-color-picker"), [].slice.call(i.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function(f) {
              f.classList.add("ql-primary");
            }), i;
          }
          return T(o, [{
            key: "buildItem",
            value: function(r) {
              var i = O(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "buildItem", this).call(this, r);
              return i.style.backgroundColor = r.getAttribute("value") || "", i;
            }
          }, {
            key: "selectItem",
            value: function(r, i) {
              O(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "selectItem", this).call(this, r, i);
              var f = this.label.querySelector(".ql-color-label"), n = r && r.getAttribute("data-value") || "";
              f && (f.tagName === "line" ? f.style.stroke = n : f.style.fill = n);
            }
          }]), o;
        }(p.default);
        v.default = e;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = function() {
          function u(o, a) {
            for (var r = 0; r < a.length; r++) {
              var i = a[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, i.key, i);
            }
          }
          return function(o, a, r) {
            return a && u(o.prototype, a), r && u(o, r), o;
          };
        }(), O = function u(o, a, r) {
          o === null && (o = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(o, a);
          if (i === void 0) {
            var f = Object.getPrototypeOf(o);
            return f === null ? void 0 : u(f, a, r);
          } else {
            if ("value" in i)
              return i.value;
            var n = i.get;
            return n === void 0 ? void 0 : n.call(r);
          }
        }, g = d(28), p = y(g);
        function y(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function h(u, o) {
          if (!(u instanceof o))
            throw new TypeError("Cannot call a class as a function");
        }
        function l(u, o) {
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
          function o(a, r) {
            h(this, o);
            var i = l(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, a));
            return i.container.classList.add("ql-icon-picker"), [].forEach.call(i.container.querySelectorAll(".ql-picker-item"), function(f) {
              f.innerHTML = r[f.getAttribute("data-value") || ""];
            }), i.defaultItem = i.container.querySelector(".ql-selected"), i.selectItem(i.defaultItem), i;
          }
          return T(o, [{
            key: "selectItem",
            value: function(r, i) {
              O(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "selectItem", this).call(this, r, i), r = r || this.defaultItem, this.label.innerHTML = r.innerHTML;
            }
          }]), o;
        }(p.default);
        v.default = e;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = function() {
          function p(y, h) {
            for (var l = 0; l < h.length; l++) {
              var t = h[l];
              t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(y, t.key, t);
            }
          }
          return function(y, h, l) {
            return h && p(y.prototype, h), l && p(y, l), y;
          };
        }();
        function O(p, y) {
          if (!(p instanceof y))
            throw new TypeError("Cannot call a class as a function");
        }
        var g = function() {
          function p(y, h) {
            var l = this;
            O(this, p), this.quill = y, this.boundsContainer = h || document.body, this.root = y.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function() {
              l.root.style.marginTop = -1 * l.quill.root.scrollTop + "px";
            }), this.hide();
          }
          return T(p, [{
            key: "hide",
            value: function() {
              this.root.classList.add("ql-hidden");
            }
          }, {
            key: "position",
            value: function(h) {
              var l = h.left + h.width / 2 - this.root.offsetWidth / 2, t = h.bottom + this.quill.root.scrollTop;
              this.root.style.left = l + "px", this.root.style.top = t + "px", this.root.classList.remove("ql-flip");
              var e = this.boundsContainer.getBoundingClientRect(), u = this.root.getBoundingClientRect(), o = 0;
              if (u.right > e.right && (o = e.right - u.right, this.root.style.left = l + o + "px"), u.left < e.left && (o = e.left - u.left, this.root.style.left = l + o + "px"), u.bottom > e.bottom) {
                var a = u.bottom - u.top, r = h.bottom - h.top + a;
                this.root.style.top = t - r + "px", this.root.classList.add("ql-flip");
              }
              return o;
            }
          }, {
            key: "show",
            value: function() {
              this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
            }
          }]), p;
        }();
        v.default = g;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = function() {
          function E(m, _) {
            var x = [], k = !0, j = !1, B = void 0;
            try {
              for (var z = m[Symbol.iterator](), Y; !(k = (Y = z.next()).done) && (x.push(Y.value), !(_ && x.length === _)); k = !0)
                ;
            } catch (H) {
              j = !0, B = H;
            } finally {
              try {
                !k && z.return && z.return();
              } finally {
                if (j)
                  throw B;
              }
            }
            return x;
          }
          return function(m, _) {
            if (Array.isArray(m))
              return m;
            if (Symbol.iterator in Object(m))
              return E(m, _);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), O = function E(m, _, x) {
          m === null && (m = Function.prototype);
          var k = Object.getOwnPropertyDescriptor(m, _);
          if (k === void 0) {
            var j = Object.getPrototypeOf(m);
            return j === null ? void 0 : E(j, _, x);
          } else {
            if ("value" in k)
              return k.value;
            var B = k.get;
            return B === void 0 ? void 0 : B.call(x);
          }
        }, g = function() {
          function E(m, _) {
            for (var x = 0; x < _.length; x++) {
              var k = _[x];
              k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(m, k.key, k);
            }
          }
          return function(m, _, x) {
            return _ && E(m.prototype, _), x && E(m, x), m;
          };
        }(), p = d(3), y = f(p), h = d(8), l = f(h), t = d(43), e = f(t), u = d(27), o = f(u), a = d(15), r = d(41), i = f(r);
        function f(E) {
          return E && E.__esModule ? E : { default: E };
        }
        function n(E, m) {
          if (!(E instanceof m))
            throw new TypeError("Cannot call a class as a function");
        }
        function c(E, m) {
          if (!E)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return m && (typeof m == "object" || typeof m == "function") ? m : E;
        }
        function w(E, m) {
          if (typeof m != "function" && m !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof m);
          E.prototype = Object.create(m && m.prototype, { constructor: { value: E, enumerable: !1, writable: !0, configurable: !0 } }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(E, m) : E.__proto__ = m);
        }
        var b = [[{ header: ["1", "2", "3", !1] }], ["bold", "italic", "underline", "link"], [{ list: "ordered" }, { list: "bullet" }], ["clean"]], A = function(E) {
          w(m, E);
          function m(_, x) {
            n(this, m), x.modules.toolbar != null && x.modules.toolbar.container == null && (x.modules.toolbar.container = b);
            var k = c(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this, _, x));
            return k.quill.container.classList.add("ql-snow"), k;
          }
          return g(m, [{
            key: "extendToolbar",
            value: function(x) {
              x.container.classList.add("ql-snow"), this.buildButtons([].slice.call(x.container.querySelectorAll("button")), i.default), this.buildPickers([].slice.call(x.container.querySelectorAll("select")), i.default), this.tooltip = new L(this.quill, this.options.bounds), x.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({ key: "K", shortKey: !0 }, function(k, j) {
                x.handlers.link.call(x, !j.format.link);
              });
            }
          }]), m;
        }(e.default);
        A.DEFAULTS = (0, y.default)(!0, {}, e.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                link: function(m) {
                  if (m) {
                    var _ = this.quill.getSelection();
                    if (_ == null || _.length == 0)
                      return;
                    var x = this.quill.getText(_);
                    /^\S+@\S+\.\S+$/.test(x) && x.indexOf("mailto:") !== 0 && (x = "mailto:" + x);
                    var k = this.quill.theme.tooltip;
                    k.edit("link", x);
                  } else
                    this.quill.format("link", !1);
                }
              }
            }
          }
        });
        var L = function(E) {
          w(m, E);
          function m(_, x) {
            n(this, m);
            var k = c(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this, _, x));
            return k.preview = k.root.querySelector("a.ql-preview"), k;
          }
          return g(m, [{
            key: "listen",
            value: function() {
              var x = this;
              O(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function(k) {
                x.root.classList.contains("ql-editing") ? x.save() : x.edit("link", x.preview.textContent), k.preventDefault();
              }), this.root.querySelector("a.ql-remove").addEventListener("click", function(k) {
                if (x.linkRange != null) {
                  var j = x.linkRange;
                  x.restoreFocus(), x.quill.formatText(j, "link", !1, l.default.sources.USER), delete x.linkRange;
                }
                k.preventDefault(), x.hide();
              }), this.quill.on(l.default.events.SELECTION_CHANGE, function(k, j, B) {
                if (k != null) {
                  if (k.length === 0 && B === l.default.sources.USER) {
                    var z = x.quill.scroll.descendant(o.default, k.index), Y = T(z, 2), H = Y[0], R = Y[1];
                    if (H != null) {
                      x.linkRange = new a.Range(k.index - R, H.length());
                      var N = o.default.formats(H.domNode);
                      x.preview.textContent = N, x.preview.setAttribute("href", N), x.show(), x.position(x.quill.getBounds(x.linkRange));
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
              O(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "show", this).call(this), this.root.removeAttribute("data-mode");
            }
          }]), m;
        }(t.BaseTooltip);
        L.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), v.default = A;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = d(29), O = J(T), g = d(36), p = d(38), y = d(64), h = d(65), l = J(h), t = d(66), e = J(t), u = d(67), o = J(u), a = d(37), r = d(26), i = d(39), f = d(40), n = d(56), c = J(n), w = d(68), b = J(w), A = d(27), L = J(A), E = d(69), m = J(E), _ = d(70), x = J(_), k = d(71), j = J(k), B = d(72), z = J(B), Y = d(73), H = J(Y), R = d(13), N = J(R), M = d(74), I = J(M), K = d(75), F = J(K), q = d(57), U = J(q), $ = d(41), G = J($), Q = d(28), nt = J(Q), it = d(59), lt = J(it), ft = d(60), ht = J(ft), mt = d(61), gt = J(mt), Z = d(108), W = J(Z), tt = d(62), et = J(tt);
        function J(st) {
          return st && st.__esModule ? st : { default: st };
        }
        O.default.register({
          "attributors/attribute/direction": p.DirectionAttribute,
          "attributors/class/align": g.AlignClass,
          "attributors/class/background": a.BackgroundClass,
          "attributors/class/color": r.ColorClass,
          "attributors/class/direction": p.DirectionClass,
          "attributors/class/font": i.FontClass,
          "attributors/class/size": f.SizeClass,
          "attributors/style/align": g.AlignStyle,
          "attributors/style/background": a.BackgroundStyle,
          "attributors/style/color": r.ColorStyle,
          "attributors/style/direction": p.DirectionStyle,
          "attributors/style/font": i.FontStyle,
          "attributors/style/size": f.SizeStyle
        }, !0), O.default.register({
          "formats/align": g.AlignClass,
          "formats/direction": p.DirectionClass,
          "formats/indent": y.IndentClass,
          "formats/background": a.BackgroundStyle,
          "formats/color": r.ColorStyle,
          "formats/font": i.FontClass,
          "formats/size": f.SizeClass,
          "formats/blockquote": l.default,
          "formats/code-block": N.default,
          "formats/header": e.default,
          "formats/list": o.default,
          "formats/bold": c.default,
          "formats/code": R.Code,
          "formats/italic": b.default,
          "formats/link": L.default,
          "formats/script": m.default,
          "formats/strike": x.default,
          "formats/underline": j.default,
          "formats/image": z.default,
          "formats/video": H.default,
          "formats/list/item": u.ListItem,
          "modules/formula": I.default,
          "modules/syntax": F.default,
          "modules/toolbar": U.default,
          "themes/bubble": W.default,
          "themes/snow": et.default,
          "ui/icons": G.default,
          "ui/picker": nt.default,
          "ui/icon-picker": ht.default,
          "ui/color-picker": lt.default,
          "ui/tooltip": gt.default
        }, !0), v.default = O.default;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.IndentClass = void 0;
        var T = function() {
          function o(a, r) {
            for (var i = 0; i < r.length; i++) {
              var f = r[i];
              f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(a, f.key, f);
            }
          }
          return function(a, r, i) {
            return r && o(a.prototype, r), i && o(a, i), a;
          };
        }(), O = function o(a, r, i) {
          a === null && (a = Function.prototype);
          var f = Object.getOwnPropertyDescriptor(a, r);
          if (f === void 0) {
            var n = Object.getPrototypeOf(a);
            return n === null ? void 0 : o(n, r, i);
          } else {
            if ("value" in f)
              return f.value;
            var c = f.get;
            return c === void 0 ? void 0 : c.call(i);
          }
        }, g = d(0), p = y(g);
        function y(o) {
          return o && o.__esModule ? o : { default: o };
        }
        function h(o, a) {
          if (!(o instanceof a))
            throw new TypeError("Cannot call a class as a function");
        }
        function l(o, a) {
          if (!o)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return a && (typeof a == "object" || typeof a == "function") ? a : o;
        }
        function t(o, a) {
          if (typeof a != "function" && a !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof a);
          o.prototype = Object.create(a && a.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(o, a) : o.__proto__ = a);
        }
        var e = function(o) {
          t(a, o);
          function a() {
            return h(this, a), l(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
          }
          return T(a, [{
            key: "add",
            value: function(i, f) {
              if (f === "+1" || f === "-1") {
                var n = this.value(i) || 0;
                f = f === "+1" ? n + 1 : n - 1;
              }
              return f === 0 ? (this.remove(i), !0) : O(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "add", this).call(this, i, f);
            }
          }, {
            key: "canAdd",
            value: function(i, f) {
              return O(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "canAdd", this).call(this, i, f) || O(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "canAdd", this).call(this, i, parseInt(f));
            }
          }, {
            key: "value",
            value: function(i) {
              return parseInt(O(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "value", this).call(this, i)) || void 0;
            }
          }]), a;
        }(p.default.Attributor.Class), u = new e("indent", "ql-indent", {
          scope: p.default.Scope.BLOCK,
          whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
        });
        v.IndentClass = u;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = d(4), O = g(T);
        function g(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function p(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function y(t, e) {
          if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function h(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        var l = function(t) {
          h(e, t);
          function e() {
            return p(this, e), y(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }
          return e;
        }(O.default);
        l.blotName = "blockquote", l.tagName = "blockquote", v.default = l;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = function() {
          function e(u, o) {
            for (var a = 0; a < o.length; a++) {
              var r = o[a];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(u, r.key, r);
            }
          }
          return function(u, o, a) {
            return o && e(u.prototype, o), a && e(u, a), u;
          };
        }(), O = d(4), g = p(O);
        function p(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function y(e, u) {
          if (!(e instanceof u))
            throw new TypeError("Cannot call a class as a function");
        }
        function h(e, u) {
          if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return u && (typeof u == "object" || typeof u == "function") ? u : e;
        }
        function l(e, u) {
          if (typeof u != "function" && u !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof u);
          e.prototype = Object.create(u && u.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), u && (Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : e.__proto__ = u);
        }
        var t = function(e) {
          l(u, e);
          function u() {
            return y(this, u), h(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments));
          }
          return T(u, null, [{
            key: "formats",
            value: function(a) {
              return this.tagName.indexOf(a.tagName) + 1;
            }
          }]), u;
        }(g.default);
        t.blotName = "header", t.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], v.default = t;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.default = v.ListItem = void 0;
        var T = function() {
          function n(c, w) {
            for (var b = 0; b < w.length; b++) {
              var A = w[b];
              A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), Object.defineProperty(c, A.key, A);
            }
          }
          return function(c, w, b) {
            return w && n(c.prototype, w), b && n(c, b), c;
          };
        }(), O = function n(c, w, b) {
          c === null && (c = Function.prototype);
          var A = Object.getOwnPropertyDescriptor(c, w);
          if (A === void 0) {
            var L = Object.getPrototypeOf(c);
            return L === null ? void 0 : n(L, w, b);
          } else {
            if ("value" in A)
              return A.value;
            var E = A.get;
            return E === void 0 ? void 0 : E.call(b);
          }
        }, g = d(0), p = e(g), y = d(4), h = e(y), l = d(25), t = e(l);
        function e(n) {
          return n && n.__esModule ? n : { default: n };
        }
        function u(n, c, w) {
          return c in n ? Object.defineProperty(n, c, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : n[c] = w, n;
        }
        function o(n, c) {
          if (!(n instanceof c))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(n, c) {
          if (!n)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return c && (typeof c == "object" || typeof c == "function") ? c : n;
        }
        function r(n, c) {
          if (typeof c != "function" && c !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof c);
          n.prototype = Object.create(c && c.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), c && (Object.setPrototypeOf ? Object.setPrototypeOf(n, c) : n.__proto__ = c);
        }
        var i = function(n) {
          r(c, n);
          function c() {
            return o(this, c), a(this, (c.__proto__ || Object.getPrototypeOf(c)).apply(this, arguments));
          }
          return T(c, [{
            key: "format",
            value: function(b, A) {
              b === f.blotName && !A ? this.replaceWith(p.default.create(this.statics.scope)) : O(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "format", this).call(this, b, A);
            }
          }, {
            key: "remove",
            value: function() {
              this.prev == null && this.next == null ? this.parent.remove() : O(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "remove", this).call(this);
            }
          }, {
            key: "replaceWith",
            value: function(b, A) {
              return this.parent.isolate(this.offset(this.parent), this.length()), b === this.parent.statics.blotName ? (this.parent.replaceWith(b, A), this) : (this.parent.unwrap(), O(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "replaceWith", this).call(this, b, A));
            }
          }], [{
            key: "formats",
            value: function(b) {
              return b.tagName === this.tagName ? void 0 : O(c.__proto__ || Object.getPrototypeOf(c), "formats", this).call(this, b);
            }
          }]), c;
        }(h.default);
        i.blotName = "list-item", i.tagName = "LI";
        var f = function(n) {
          r(c, n), T(c, null, [{
            key: "create",
            value: function(b) {
              var A = b === "ordered" ? "OL" : "UL", L = O(c.__proto__ || Object.getPrototypeOf(c), "create", this).call(this, A);
              return (b === "checked" || b === "unchecked") && L.setAttribute("data-checked", b === "checked"), L;
            }
          }, {
            key: "formats",
            value: function(b) {
              if (b.tagName === "OL")
                return "ordered";
              if (b.tagName === "UL")
                return b.hasAttribute("data-checked") ? b.getAttribute("data-checked") === "true" ? "checked" : "unchecked" : "bullet";
            }
          }]);
          function c(w) {
            o(this, c);
            var b = a(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, w)), A = function(E) {
              if (E.target.parentNode === w) {
                var m = b.statics.formats(w), _ = p.default.find(E.target);
                m === "checked" ? _.format("list", "unchecked") : m === "unchecked" && _.format("list", "checked");
              }
            };
            return w.addEventListener("touchstart", A), w.addEventListener("mousedown", A), b;
          }
          return T(c, [{
            key: "format",
            value: function(b, A) {
              this.children.length > 0 && this.children.tail.format(b, A);
            }
          }, {
            key: "formats",
            value: function() {
              return u({}, this.statics.blotName, this.statics.formats(this.domNode));
            }
          }, {
            key: "insertBefore",
            value: function(b, A) {
              if (b instanceof i)
                O(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "insertBefore", this).call(this, b, A);
              else {
                var L = A == null ? this.length() : A.offset(this), E = this.split(L);
                E.parent.insertBefore(b, E);
              }
            }
          }, {
            key: "optimize",
            value: function(b) {
              O(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "optimize", this).call(this, b);
              var A = this.next;
              A != null && A.prev === this && A.statics.blotName === this.statics.blotName && A.domNode.tagName === this.domNode.tagName && A.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (A.moveChildren(this), A.remove());
            }
          }, {
            key: "replace",
            value: function(b) {
              if (b.statics.blotName !== this.statics.blotName) {
                var A = p.default.create(this.statics.defaultChild);
                b.moveChildren(A), this.appendChild(A);
              }
              O(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "replace", this).call(this, b);
            }
          }]), c;
        }(t.default);
        f.blotName = "list", f.scope = p.default.Scope.BLOCK_BLOT, f.tagName = ["OL", "UL"], f.defaultChild = "list-item", f.allowedChildren = [i], v.ListItem = i, v.default = f;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = d(56), O = g(T);
        function g(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function p(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function y(t, e) {
          if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function h(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        var l = function(t) {
          h(e, t);
          function e() {
            return p(this, e), y(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }
          return e;
        }(O.default);
        l.blotName = "italic", l.tagName = ["EM", "I"], v.default = l;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = function() {
          function u(o, a) {
            for (var r = 0; r < a.length; r++) {
              var i = a[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, i.key, i);
            }
          }
          return function(o, a, r) {
            return a && u(o.prototype, a), r && u(o, r), o;
          };
        }(), O = function u(o, a, r) {
          o === null && (o = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(o, a);
          if (i === void 0) {
            var f = Object.getPrototypeOf(o);
            return f === null ? void 0 : u(f, a, r);
          } else {
            if ("value" in i)
              return i.value;
            var n = i.get;
            return n === void 0 ? void 0 : n.call(r);
          }
        }, g = d(6), p = y(g);
        function y(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function h(u, o) {
          if (!(u instanceof o))
            throw new TypeError("Cannot call a class as a function");
        }
        function l(u, o) {
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
            return h(this, o), l(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
          }
          return T(o, null, [{
            key: "create",
            value: function(r) {
              return r === "super" ? document.createElement("sup") : r === "sub" ? document.createElement("sub") : O(o.__proto__ || Object.getPrototypeOf(o), "create", this).call(this, r);
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
        }(p.default);
        e.blotName = "script", e.tagName = ["SUB", "SUP"], v.default = e;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = d(6), O = g(T);
        function g(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function p(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function y(t, e) {
          if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function h(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        var l = function(t) {
          h(e, t);
          function e() {
            return p(this, e), y(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }
          return e;
        }(O.default);
        l.blotName = "strike", l.tagName = "S", v.default = l;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = d(6), O = g(T);
        function g(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function p(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function y(t, e) {
          if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function h(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        var l = function(t) {
          h(e, t);
          function e() {
            return p(this, e), y(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }
          return e;
        }(O.default);
        l.blotName = "underline", l.tagName = "U", v.default = l;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = function() {
          function a(r, i) {
            for (var f = 0; f < i.length; f++) {
              var n = i[f];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, f) {
            return i && a(r.prototype, i), f && a(r, f), r;
          };
        }(), O = function a(r, i, f) {
          r === null && (r = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(r, i);
          if (n === void 0) {
            var c = Object.getPrototypeOf(r);
            return c === null ? void 0 : a(c, i, f);
          } else {
            if ("value" in n)
              return n.value;
            var w = n.get;
            return w === void 0 ? void 0 : w.call(f);
          }
        }, g = d(0), p = h(g), y = d(27);
        function h(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function l(a, r) {
          if (!(a instanceof r))
            throw new TypeError("Cannot call a class as a function");
        }
        function t(a, r) {
          if (!a)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return r && (typeof r == "object" || typeof r == "function") ? r : a;
        }
        function e(a, r) {
          if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof r);
          a.prototype = Object.create(r && r.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(a, r) : a.__proto__ = r);
        }
        var u = ["alt", "height", "width"], o = function(a) {
          e(r, a);
          function r() {
            return l(this, r), t(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
          }
          return T(r, [{
            key: "format",
            value: function(f, n) {
              u.indexOf(f) > -1 ? n ? this.domNode.setAttribute(f, n) : this.domNode.removeAttribute(f) : O(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "format", this).call(this, f, n);
            }
          }], [{
            key: "create",
            value: function(f) {
              var n = O(r.__proto__ || Object.getPrototypeOf(r), "create", this).call(this, f);
              return typeof f == "string" && n.setAttribute("src", this.sanitize(f)), n;
            }
          }, {
            key: "formats",
            value: function(f) {
              return u.reduce(function(n, c) {
                return f.hasAttribute(c) && (n[c] = f.getAttribute(c)), n;
              }, {});
            }
          }, {
            key: "match",
            value: function(f) {
              return /\.(jpe?g|gif|png)$/.test(f) || /^data:image\/.+;base64/.test(f);
            }
          }, {
            key: "sanitize",
            value: function(f) {
              return (0, y.sanitize)(f, ["http", "https", "data"]) ? f : "//:0";
            }
          }, {
            key: "value",
            value: function(f) {
              return f.getAttribute("src");
            }
          }]), r;
        }(p.default.Embed);
        o.blotName = "image", o.tagName = "IMG", v.default = o;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var T = function() {
          function a(r, i) {
            for (var f = 0; f < i.length; f++) {
              var n = i[f];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, f) {
            return i && a(r.prototype, i), f && a(r, f), r;
          };
        }(), O = function a(r, i, f) {
          r === null && (r = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(r, i);
          if (n === void 0) {
            var c = Object.getPrototypeOf(r);
            return c === null ? void 0 : a(c, i, f);
          } else {
            if ("value" in n)
              return n.value;
            var w = n.get;
            return w === void 0 ? void 0 : w.call(f);
          }
        }, g = d(4), p = d(27), y = h(p);
        function h(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function l(a, r) {
          if (!(a instanceof r))
            throw new TypeError("Cannot call a class as a function");
        }
        function t(a, r) {
          if (!a)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return r && (typeof r == "object" || typeof r == "function") ? r : a;
        }
        function e(a, r) {
          if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof r);
          a.prototype = Object.create(r && r.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(a, r) : a.__proto__ = r);
        }
        var u = ["height", "width"], o = function(a) {
          e(r, a);
          function r() {
            return l(this, r), t(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
          }
          return T(r, [{
            key: "format",
            value: function(f, n) {
              u.indexOf(f) > -1 ? n ? this.domNode.setAttribute(f, n) : this.domNode.removeAttribute(f) : O(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "format", this).call(this, f, n);
            }
          }], [{
            key: "create",
            value: function(f) {
              var n = O(r.__proto__ || Object.getPrototypeOf(r), "create", this).call(this, f);
              return n.setAttribute("frameborder", "0"), n.setAttribute("allowfullscreen", !0), n.setAttribute("src", this.sanitize(f)), n;
            }
          }, {
            key: "formats",
            value: function(f) {
              return u.reduce(function(n, c) {
                return f.hasAttribute(c) && (n[c] = f.getAttribute(c)), n;
              }, {});
            }
          }, {
            key: "sanitize",
            value: function(f) {
              return y.default.sanitize(f);
            }
          }, {
            key: "value",
            value: function(f) {
              return f.getAttribute("src");
            }
          }]), r;
        }(g.BlockEmbed);
        o.blotName = "video", o.className = "ql-video", o.tagName = "IFRAME", v.default = o;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.default = v.FormulaBlot = void 0;
        var T = function() {
          function f(n, c) {
            for (var w = 0; w < c.length; w++) {
              var b = c[w];
              b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(n, b.key, b);
            }
          }
          return function(n, c, w) {
            return c && f(n.prototype, c), w && f(n, w), n;
          };
        }(), O = function f(n, c, w) {
          n === null && (n = Function.prototype);
          var b = Object.getOwnPropertyDescriptor(n, c);
          if (b === void 0) {
            var A = Object.getPrototypeOf(n);
            return A === null ? void 0 : f(A, c, w);
          } else {
            if ("value" in b)
              return b.value;
            var L = b.get;
            return L === void 0 ? void 0 : L.call(w);
          }
        }, g = d(35), p = e(g), y = d(5), h = e(y), l = d(9), t = e(l);
        function e(f) {
          return f && f.__esModule ? f : { default: f };
        }
        function u(f, n) {
          if (!(f instanceof n))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(f, n) {
          if (!f)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return n && (typeof n == "object" || typeof n == "function") ? n : f;
        }
        function a(f, n) {
          if (typeof n != "function" && n !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof n);
          f.prototype = Object.create(n && n.prototype, { constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 } }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(f, n) : f.__proto__ = n);
        }
        var r = function(f) {
          a(n, f);
          function n() {
            return u(this, n), o(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
          }
          return T(n, null, [{
            key: "create",
            value: function(w) {
              var b = O(n.__proto__ || Object.getPrototypeOf(n), "create", this).call(this, w);
              return typeof w == "string" && (window.katex.render(w, b, {
                throwOnError: !1,
                errorColor: "#f00"
              }), b.setAttribute("data-value", w)), b;
            }
          }, {
            key: "value",
            value: function(w) {
              return w.getAttribute("data-value");
            }
          }]), n;
        }(p.default);
        r.blotName = "formula", r.className = "ql-formula", r.tagName = "SPAN";
        var i = function(f) {
          a(n, f), T(n, null, [{
            key: "register",
            value: function() {
              h.default.register(r, !0);
            }
          }]);
          function n() {
            u(this, n);
            var c = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            if (window.katex == null)
              throw new Error("Formula module requires KaTeX.");
            return c;
          }
          return n;
        }(t.default);
        v.FormulaBlot = r, v.default = i;
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.default = v.CodeToken = v.CodeBlock = void 0;
        var T = function() {
          function w(b, A) {
            for (var L = 0; L < A.length; L++) {
              var E = A[L];
              E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(b, E.key, E);
            }
          }
          return function(b, A, L) {
            return A && w(b.prototype, A), L && w(b, L), b;
          };
        }(), O = function w(b, A, L) {
          b === null && (b = Function.prototype);
          var E = Object.getOwnPropertyDescriptor(b, A);
          if (E === void 0) {
            var m = Object.getPrototypeOf(b);
            return m === null ? void 0 : w(m, A, L);
          } else {
            if ("value" in E)
              return E.value;
            var _ = E.get;
            return _ === void 0 ? void 0 : _.call(L);
          }
        }, g = d(0), p = o(g), y = d(5), h = o(y), l = d(9), t = o(l), e = d(13), u = o(e);
        function o(w) {
          return w && w.__esModule ? w : { default: w };
        }
        function a(w, b) {
          if (!(w instanceof b))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(w, b) {
          if (!w)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return b && (typeof b == "object" || typeof b == "function") ? b : w;
        }
        function i(w, b) {
          if (typeof b != "function" && b !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof b);
          w.prototype = Object.create(b && b.prototype, { constructor: { value: w, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(w, b) : w.__proto__ = b);
        }
        var f = function(w) {
          i(b, w);
          function b() {
            return a(this, b), r(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
          }
          return T(b, [{
            key: "replaceWith",
            value: function(L) {
              this.domNode.textContent = this.domNode.textContent, this.attach(), O(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "replaceWith", this).call(this, L);
            }
          }, {
            key: "highlight",
            value: function(L) {
              var E = this.domNode.textContent;
              this.cachedText !== E && ((E.trim().length > 0 || this.cachedText == null) && (this.domNode.innerHTML = L(E), this.domNode.normalize(), this.attach()), this.cachedText = E);
            }
          }]), b;
        }(u.default);
        f.className = "ql-syntax";
        var n = new p.default.Attributor.Class("token", "hljs", {
          scope: p.default.Scope.INLINE
        }), c = function(w) {
          i(b, w), T(b, null, [{
            key: "register",
            value: function() {
              h.default.register(n, !0), h.default.register(f, !0);
            }
          }]);
          function b(A, L) {
            a(this, b);
            var E = r(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, A, L));
            if (typeof E.options.highlight != "function")
              throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
            var m = null;
            return E.quill.on(h.default.events.SCROLL_OPTIMIZE, function() {
              clearTimeout(m), m = setTimeout(function() {
                E.highlight(), m = null;
              }, E.options.interval);
            }), E.highlight(), E;
          }
          return T(b, [{
            key: "highlight",
            value: function() {
              var L = this;
              if (!this.quill.selection.composing) {
                this.quill.update(h.default.sources.USER);
                var E = this.quill.getSelection();
                this.quill.scroll.descendants(f).forEach(function(m) {
                  m.highlight(L.options.highlight);
                }), this.quill.update(h.default.sources.SILENT), E != null && this.quill.setSelection(E, h.default.sources.SILENT);
              }
            }
          }]), b;
        }(t.default);
        c.DEFAULTS = {
          highlight: function() {
            return window.hljs == null ? null : function(w) {
              var b = window.hljs.highlightAuto(w);
              return b.value;
            };
          }(),
          interval: 1e3
        }, v.CodeBlock = f, v.CodeToken = n, v.default = c;
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
      },
      function(P, v) {
        P.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
      },
      function(P, v) {
        P.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
      },
      function(P, v) {
        P.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
      },
      function(P, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.default = v.BubbleTooltip = void 0;
        var T = function b(A, L, E) {
          A === null && (A = Function.prototype);
          var m = Object.getOwnPropertyDescriptor(A, L);
          if (m === void 0) {
            var _ = Object.getPrototypeOf(A);
            return _ === null ? void 0 : b(_, L, E);
          } else {
            if ("value" in m)
              return m.value;
            var x = m.get;
            return x === void 0 ? void 0 : x.call(E);
          }
        }, O = function() {
          function b(A, L) {
            for (var E = 0; E < L.length; E++) {
              var m = L[E];
              m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(A, m.key, m);
            }
          }
          return function(A, L, E) {
            return L && b(A.prototype, L), E && b(A, E), A;
          };
        }(), g = d(3), p = a(g), y = d(8), h = a(y), l = d(43), t = a(l), e = d(15), u = d(41), o = a(u);
        function a(b) {
          return b && b.__esModule ? b : { default: b };
        }
        function r(b, A) {
          if (!(b instanceof A))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(b, A) {
          if (!b)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return A && (typeof A == "object" || typeof A == "function") ? A : b;
        }
        function f(b, A) {
          if (typeof A != "function" && A !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof A);
          b.prototype = Object.create(A && A.prototype, { constructor: { value: b, enumerable: !1, writable: !0, configurable: !0 } }), A && (Object.setPrototypeOf ? Object.setPrototypeOf(b, A) : b.__proto__ = A);
        }
        var n = [["bold", "italic", "link"], [{ header: 1 }, { header: 2 }, "blockquote"]], c = function(b) {
          f(A, b);
          function A(L, E) {
            r(this, A), E.modules.toolbar != null && E.modules.toolbar.container == null && (E.modules.toolbar.container = n);
            var m = i(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this, L, E));
            return m.quill.container.classList.add("ql-bubble"), m;
          }
          return O(A, [{
            key: "extendToolbar",
            value: function(E) {
              this.tooltip = new w(this.quill, this.options.bounds), this.tooltip.root.appendChild(E.container), this.buildButtons([].slice.call(E.container.querySelectorAll("button")), o.default), this.buildPickers([].slice.call(E.container.querySelectorAll("select")), o.default);
            }
          }]), A;
        }(t.default);
        c.DEFAULTS = (0, p.default)(!0, {}, t.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                link: function(A) {
                  A ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1);
                }
              }
            }
          }
        });
        var w = function(b) {
          f(A, b);
          function A(L, E) {
            r(this, A);
            var m = i(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this, L, E));
            return m.quill.on(h.default.events.EDITOR_CHANGE, function(_, x, k, j) {
              if (_ === h.default.events.SELECTION_CHANGE)
                if (x != null && x.length > 0 && j === h.default.sources.USER) {
                  m.show(), m.root.style.left = "0px", m.root.style.width = "", m.root.style.width = m.root.offsetWidth + "px";
                  var B = m.quill.getLines(x.index, x.length);
                  if (B.length === 1)
                    m.position(m.quill.getBounds(x));
                  else {
                    var z = B[B.length - 1], Y = m.quill.getIndex(z), H = Math.min(z.length() - 1, x.index + x.length - Y), R = m.quill.getBounds(new e.Range(Y, H));
                    m.position(R);
                  }
                } else
                  document.activeElement !== m.textbox && m.quill.hasFocus() && m.hide();
            }), m;
          }
          return O(A, [{
            key: "listen",
            value: function() {
              var E = this;
              T(A.prototype.__proto__ || Object.getPrototypeOf(A.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function() {
                E.root.classList.remove("ql-editing");
              }), this.quill.on(h.default.events.SCROLL_OPTIMIZE, function() {
                setTimeout(function() {
                  if (!E.root.classList.contains("ql-hidden")) {
                    var m = E.quill.getSelection();
                    m != null && E.position(E.quill.getBounds(m));
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
            value: function(E) {
              var m = T(A.prototype.__proto__ || Object.getPrototypeOf(A.prototype), "position", this).call(this, E), _ = this.root.querySelector(".ql-tooltip-arrow");
              if (_.style.marginLeft = "", m === 0)
                return m;
              _.style.marginLeft = -1 * m - _.offsetWidth / 2 + "px";
            }
          }]), A;
        }(l.BaseTooltip);
        w.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), v.BubbleTooltip = w, v.default = c;
      },
      function(P, v, d) {
        P.exports = d(63);
      }
    ]).default;
  });
})(Vn);
const te = /* @__PURE__ */ Gn(Vn.exports);
var Ln = { exports: {} }, Ct = -1, Mt = 1, Lt = 0;
function Ee(C, X, P, v) {
  if (C === X)
    return C ? [[Lt, C]] : [];
  if (P != null) {
    var d = cr(C, X, P);
    if (d)
      return d;
  }
  var T = Rn(C, X), O = C.substring(0, T);
  C = C.substring(T), X = X.substring(T), T = Mn(C, X);
  var g = C.substring(C.length - T);
  C = C.substring(0, C.length - T), X = X.substring(0, X.length - T);
  var p = ar(C, X);
  return O && p.unshift([Lt, O]), g && p.push([Lt, g]), Zn(p, v), p;
}
function ar(C, X) {
  var P;
  if (!C)
    return [[Mt, X]];
  if (!X)
    return [[Ct, C]];
  var v = C.length > X.length ? C : X, d = C.length > X.length ? X : C, T = v.indexOf(d);
  if (T !== -1)
    return P = [
      [Mt, v.substring(0, T)],
      [Lt, d],
      [Mt, v.substring(T + d.length)]
    ], C.length > X.length && (P[0][0] = P[2][0] = Ct), P;
  if (d.length === 1)
    return [[Ct, C], [Mt, X]];
  var O = sr(C, X);
  if (O) {
    var g = O[0], p = O[1], y = O[2], h = O[3], l = O[4], t = Ee(g, y), e = Ee(p, h);
    return t.concat([[Lt, l]], e);
  }
  return ur(C, X);
}
function ur(C, X) {
  for (var P = C.length, v = X.length, d = Math.ceil((P + v) / 2), T = d, O = 2 * d, g = new Array(O), p = new Array(O), y = 0; y < O; y++)
    g[y] = -1, p[y] = -1;
  g[T + 1] = 0, p[T + 1] = 0;
  for (var h = P - v, l = h % 2 !== 0, t = 0, e = 0, u = 0, o = 0, a = 0; a < d; a++) {
    for (var r = -a + t; r <= a - e; r += 2) {
      var i = T + r, f;
      r === -a || r !== a && g[i - 1] < g[i + 1] ? f = g[i + 1] : f = g[i - 1] + 1;
      for (var n = f - r; f < P && n < v && C.charAt(f) === X.charAt(n); )
        f++, n++;
      if (g[i] = f, f > P)
        e += 2;
      else if (n > v)
        t += 2;
      else if (l) {
        var c = T + h - r;
        if (c >= 0 && c < O && p[c] !== -1) {
          var w = P - p[c];
          if (f >= w)
            return zn(C, X, f, n);
        }
      }
    }
    for (var b = -a + u; b <= a - o; b += 2) {
      var c = T + b, w;
      b === -a || b !== a && p[c - 1] < p[c + 1] ? w = p[c + 1] : w = p[c - 1] + 1;
      for (var A = w - b; w < P && A < v && C.charAt(P - w - 1) === X.charAt(v - A - 1); )
        w++, A++;
      if (p[c] = w, w > P)
        o += 2;
      else if (A > v)
        u += 2;
      else if (!l) {
        var i = T + h - b;
        if (i >= 0 && i < O && g[i] !== -1) {
          var f = g[i], n = T + f - i;
          if (w = P - w, f >= w)
            return zn(C, X, f, n);
        }
      }
    }
  }
  return [[Ct, C], [Mt, X]];
}
function zn(C, X, P, v) {
  var d = C.substring(0, P), T = X.substring(0, v), O = C.substring(P), g = X.substring(v), p = Ee(d, T), y = Ee(O, g);
  return p.concat(y);
}
function Rn(C, X) {
  if (!C || !X || C.charAt(0) !== X.charAt(0))
    return 0;
  for (var P = 0, v = Math.min(C.length, X.length), d = v, T = 0; P < d; )
    C.substring(T, d) == X.substring(T, d) ? (P = d, T = P) : v = d, d = Math.floor((v - P) / 2 + P);
  return Wn(C.charCodeAt(d - 1)) && d--, d;
}
function Mn(C, X) {
  if (!C || !X || C.slice(-1) !== X.slice(-1))
    return 0;
  for (var P = 0, v = Math.min(C.length, X.length), d = v, T = 0; P < d; )
    C.substring(C.length - d, C.length - T) == X.substring(X.length - d, X.length - T) ? (P = d, T = P) : v = d, d = Math.floor((v - P) / 2 + P);
  return Yn(C.charCodeAt(C.length - d)) && d--, d;
}
function sr(C, X) {
  var P = C.length > X.length ? C : X, v = C.length > X.length ? X : C;
  if (P.length < 4 || v.length * 2 < P.length)
    return null;
  function d(e, u, o) {
    for (var a = e.substring(o, o + Math.floor(e.length / 4)), r = -1, i = "", f, n, c, w; (r = u.indexOf(a, r + 1)) !== -1; ) {
      var b = Rn(
        e.substring(o),
        u.substring(r)
      ), A = Mn(
        e.substring(0, o),
        u.substring(0, r)
      );
      i.length < A + b && (i = u.substring(
        r - A,
        r
      ) + u.substring(r, r + b), f = e.substring(0, o - A), n = e.substring(o + b), c = u.substring(0, r - A), w = u.substring(r + b));
    }
    return i.length * 2 >= e.length ? [
      f,
      n,
      c,
      w,
      i
    ] : null;
  }
  var T = d(P, v, Math.ceil(P.length / 4)), O = d(P, v, Math.ceil(P.length / 2)), g;
  if (!T && !O)
    return null;
  O ? T ? g = T[4].length > O[4].length ? T : O : g = O : g = T;
  var p, y, h, l;
  C.length > X.length ? (p = g[0], y = g[1], h = g[2], l = g[3]) : (h = g[0], l = g[1], p = g[2], y = g[3]);
  var t = g[4];
  return [p, y, h, l, t];
}
function Zn(C, X) {
  C.push([Lt, ""]);
  for (var P = 0, v = 0, d = 0, T = "", O = "", g; P < C.length; ) {
    if (P < C.length - 1 && !C[P][1]) {
      C.splice(P, 1);
      continue;
    }
    switch (C[P][0]) {
      case Mt:
        d++, O += C[P][1], P++;
        break;
      case Ct:
        v++, T += C[P][1], P++;
        break;
      case Lt:
        var p = P - d - v - 1;
        if (X) {
          if (p >= 0 && Qn(C[p][1])) {
            var y = C[p][1].slice(-1);
            if (C[p][1] = C[p][1].slice(0, -1), T = y + T, O = y + O, !C[p][1]) {
              C.splice(p, 1), P--;
              var h = p - 1;
              C[h] && C[h][0] === Mt && (d++, O = C[h][1] + O, h--), C[h] && C[h][0] === Ct && (v++, T = C[h][1] + T, h--), p = h;
            }
          }
          if (Xn(C[P][1])) {
            var y = C[P][1].charAt(0);
            C[P][1] = C[P][1].slice(1), T += y, O += y;
          }
        }
        if (P < C.length - 1 && !C[P][1]) {
          C.splice(P, 1);
          break;
        }
        if (T.length > 0 || O.length > 0) {
          T.length > 0 && O.length > 0 && (g = Rn(O, T), g !== 0 && (p >= 0 ? C[p][1] += O.substring(0, g) : (C.splice(0, 0, [Lt, O.substring(0, g)]), P++), O = O.substring(g), T = T.substring(g)), g = Mn(O, T), g !== 0 && (C[P][1] = O.substring(O.length - g) + C[P][1], O = O.substring(0, O.length - g), T = T.substring(0, T.length - g)));
          var l = d + v;
          T.length === 0 && O.length === 0 ? (C.splice(P - l, l), P = P - l) : T.length === 0 ? (C.splice(P - l, l, [Mt, O]), P = P - l + 1) : O.length === 0 ? (C.splice(P - l, l, [Ct, T]), P = P - l + 1) : (C.splice(P - l, l, [Ct, T], [Mt, O]), P = P - l + 2);
        }
        P !== 0 && C[P - 1][0] === Lt ? (C[P - 1][1] += C[P][1], C.splice(P, 1)) : P++, d = 0, v = 0, T = "", O = "";
        break;
    }
  }
  C[C.length - 1][1] === "" && C.pop();
  var t = !1;
  for (P = 1; P < C.length - 1; )
    C[P - 1][0] === Lt && C[P + 1][0] === Lt && (C[P][1].substring(C[P][1].length - C[P - 1][1].length) === C[P - 1][1] ? (C[P][1] = C[P - 1][1] + C[P][1].substring(0, C[P][1].length - C[P - 1][1].length), C[P + 1][1] = C[P - 1][1] + C[P + 1][1], C.splice(P - 1, 1), t = !0) : C[P][1].substring(0, C[P + 1][1].length) == C[P + 1][1] && (C[P - 1][1] += C[P + 1][1], C[P][1] = C[P][1].substring(C[P + 1][1].length) + C[P + 1][1], C.splice(P + 1, 1), t = !0)), P++;
  t && Zn(C, X);
}
function Wn(C) {
  return C >= 55296 && C <= 56319;
}
function Yn(C) {
  return C >= 56320 && C <= 57343;
}
function Xn(C) {
  return Yn(C.charCodeAt(0));
}
function Qn(C) {
  return Wn(C.charCodeAt(C.length - 1));
}
function fr(C) {
  for (var X = [], P = 0; P < C.length; P++)
    C[P][1].length > 0 && X.push(C[P]);
  return X;
}
function xn(C, X, P, v) {
  return Qn(C) || Xn(v) ? null : fr([
    [Lt, C],
    [Ct, X],
    [Mt, P],
    [Lt, v]
  ]);
}
function cr(C, X, P) {
  var v = typeof P == "number" ? { index: P, length: 0 } : P.oldRange, d = typeof P == "number" ? null : P.newRange, T = C.length, O = X.length;
  if (v.length === 0 && (d === null || d.length === 0)) {
    var g = v.index, p = C.slice(0, g), y = C.slice(g), h = d ? d.index : null;
    t: {
      var l = g + O - T;
      if (h !== null && h !== l || l < 0 || l > O)
        break t;
      var t = X.slice(0, l), e = X.slice(l);
      if (e !== y)
        break t;
      var u = Math.min(g, l), o = p.slice(0, u), a = t.slice(0, u);
      if (o !== a)
        break t;
      var r = p.slice(u), i = t.slice(u);
      return xn(o, r, i, y);
    }
    t: {
      if (h !== null && h !== g)
        break t;
      var f = g, t = X.slice(0, f), e = X.slice(f);
      if (t !== p)
        break t;
      var n = Math.min(T - f, O - f), c = y.slice(y.length - n), w = e.slice(e.length - n);
      if (c !== w)
        break t;
      var r = y.slice(0, y.length - n), i = e.slice(0, e.length - n);
      return xn(p, r, i, c);
    }
  }
  if (v.length > 0 && d && d.length === 0) {
    t: {
      var o = C.slice(0, v.index), c = C.slice(v.index + v.length), u = o.length, n = c.length;
      if (O < u + n)
        break t;
      var a = X.slice(0, u), w = X.slice(O - n);
      if (o !== a || c !== w)
        break t;
      var r = C.slice(u, T - n), i = X.slice(u, O - n);
      return xn(o, r, i, c);
    }
  }
  return null;
}
function Ue(C, X, P) {
  return Ee(C, X, P, !0);
}
Ue.INSERT = Mt;
Ue.DELETE = Ct;
Ue.EQUAL = Lt;
var hr = Ue, Be = { exports: {} };
(function(C, X) {
  var P = 200, v = "__lodash_hash_undefined__", d = 9007199254740991, T = "[object Arguments]", O = "[object Array]", g = "[object Boolean]", p = "[object Date]", y = "[object Error]", h = "[object Function]", l = "[object GeneratorFunction]", t = "[object Map]", e = "[object Number]", u = "[object Object]", o = "[object Promise]", a = "[object RegExp]", r = "[object Set]", i = "[object String]", f = "[object Symbol]", n = "[object WeakMap]", c = "[object ArrayBuffer]", w = "[object DataView]", b = "[object Float32Array]", A = "[object Float64Array]", L = "[object Int8Array]", E = "[object Int16Array]", m = "[object Int32Array]", _ = "[object Uint8Array]", x = "[object Uint8ClampedArray]", k = "[object Uint16Array]", j = "[object Uint32Array]", B = /[\\^$.*+?()[\]{}|]/g, z = /\w*$/, Y = /^\[object .+?Constructor\]$/, H = /^(?:0|[1-9]\d*)$/, R = {};
  R[T] = R[O] = R[c] = R[w] = R[g] = R[p] = R[b] = R[A] = R[L] = R[E] = R[m] = R[t] = R[e] = R[u] = R[a] = R[r] = R[i] = R[f] = R[_] = R[x] = R[k] = R[j] = !0, R[y] = R[h] = R[n] = !1;
  var N = typeof Kt == "object" && Kt && Kt.Object === Object && Kt, M = typeof self == "object" && self && self.Object === Object && self, I = N || M || Function("return this")(), K = X && !X.nodeType && X, F = K && !0 && C && !C.nodeType && C, q = F && F.exports === K;
  function U(s, S) {
    return s.set(S[0], S[1]), s;
  }
  function $(s, S) {
    return s.add(S), s;
  }
  function G(s, S) {
    for (var D = -1, V = s ? s.length : 0; ++D < V && S(s[D], D, s) !== !1; )
      ;
    return s;
  }
  function Q(s, S) {
    for (var D = -1, V = S.length, ut = s.length; ++D < V; )
      s[ut + D] = S[D];
    return s;
  }
  function nt(s, S, D, V) {
    var ut = -1, rt = s ? s.length : 0;
    for (V && rt && (D = s[++ut]); ++ut < rt; )
      D = S(D, s[ut], ut, s);
    return D;
  }
  function it(s, S) {
    for (var D = -1, V = Array(s); ++D < s; )
      V[D] = S(D);
    return V;
  }
  function lt(s, S) {
    return s == null ? void 0 : s[S];
  }
  function ft(s) {
    var S = !1;
    if (s != null && typeof s.toString != "function")
      try {
        S = !!(s + "");
      } catch {
      }
    return S;
  }
  function ht(s) {
    var S = -1, D = Array(s.size);
    return s.forEach(function(V, ut) {
      D[++S] = [ut, V];
    }), D;
  }
  function mt(s, S) {
    return function(D) {
      return s(S(D));
    };
  }
  function gt(s) {
    var S = -1, D = Array(s.size);
    return s.forEach(function(V) {
      D[++S] = V;
    }), D;
  }
  var Z = Array.prototype, W = Function.prototype, tt = Object.prototype, et = I["__core-js_shared__"], J = function() {
    var s = /[^.]+$/.exec(et && et.keys && et.keys.IE_PROTO || "");
    return s ? "Symbol(src)_1." + s : "";
  }(), st = W.toString, ot = tt.hasOwnProperty, at = tt.toString, wt = RegExp(
    "^" + st.call(ot).replace(B, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ot = q ? I.Buffer : void 0, vt = I.Symbol, Vt = I.Uint8Array, dt = mt(Object.getPrototypeOf, Object), qt = Object.create, Ae = tt.propertyIsEnumerable, ze = Z.splice, se = Object.getOwnPropertySymbols, ee = Ot ? Ot.isBuffer : void 0, we = mt(Object.keys, Object), ne = Rt(I, "DataView"), Zt = Rt(I, "Map"), jt = Rt(I, "Promise"), re = Rt(I, "Set"), fe = Rt(I, "WeakMap"), Wt = Rt(Object, "create"), ce = St(ne), Yt = St(Zt), he = St(jt), de = St(re), pe = St(fe), $t = vt ? vt.prototype : void 0, Te = $t ? $t.valueOf : void 0;
  function Ft(s) {
    var S = -1, D = s ? s.length : 0;
    for (this.clear(); ++S < D; ) {
      var V = s[S];
      this.set(V[0], V[1]);
    }
  }
  function Ke() {
    this.__data__ = Wt ? Wt(null) : {};
  }
  function $e(s) {
    return this.has(s) && delete this.__data__[s];
  }
  function Ge(s) {
    var S = this.__data__;
    if (Wt) {
      var D = S[s];
      return D === v ? void 0 : D;
    }
    return ot.call(S, s) ? S[s] : void 0;
  }
  function ke(s) {
    var S = this.__data__;
    return Wt ? S[s] !== void 0 : ot.call(S, s);
  }
  function ve(s, S) {
    var D = this.__data__;
    return D[s] = Wt && S === void 0 ? v : S, this;
  }
  Ft.prototype.clear = Ke, Ft.prototype.delete = $e, Ft.prototype.get = Ge, Ft.prototype.has = ke, Ft.prototype.set = ve;
  function Et(s) {
    var S = -1, D = s ? s.length : 0;
    for (this.clear(); ++S < D; ) {
      var V = s[S];
      this.set(V[0], V[1]);
    }
  }
  function Ve() {
    this.__data__ = [];
  }
  function Ze(s) {
    var S = this.__data__, D = oe(S, s);
    if (D < 0)
      return !1;
    var V = S.length - 1;
    return D == V ? S.pop() : ze.call(S, D, 1), !0;
  }
  function We(s) {
    var S = this.__data__, D = oe(S, s);
    return D < 0 ? void 0 : S[D][1];
  }
  function Ye(s) {
    return oe(this.__data__, s) > -1;
  }
  function Xe(s, S) {
    var D = this.__data__, V = oe(D, s);
    return V < 0 ? D.push([s, S]) : D[V][1] = S, this;
  }
  Et.prototype.clear = Ve, Et.prototype.delete = Ze, Et.prototype.get = We, Et.prototype.has = Ye, Et.prototype.set = Xe;
  function Tt(s) {
    var S = -1, D = s ? s.length : 0;
    for (this.clear(); ++S < D; ) {
      var V = s[S];
      this.set(V[0], V[1]);
    }
  }
  function Qe() {
    this.__data__ = {
      hash: new Ft(),
      map: new (Zt || Et)(),
      string: new Ft()
    };
  }
  function Je(s) {
    return Qt(this, s).delete(s);
  }
  function tn(s) {
    return Qt(this, s).get(s);
  }
  function en(s) {
    return Qt(this, s).has(s);
  }
  function nn(s, S) {
    return Qt(this, s).set(s, S), this;
  }
  Tt.prototype.clear = Qe, Tt.prototype.delete = Je, Tt.prototype.get = tn, Tt.prototype.has = en, Tt.prototype.set = nn;
  function xt(s) {
    this.__data__ = new Et(s);
  }
  function rn() {
    this.__data__ = new Et();
  }
  function on(s) {
    return this.__data__.delete(s);
  }
  function ln(s) {
    return this.__data__.get(s);
  }
  function an(s) {
    return this.__data__.has(s);
  }
  function un(s, S) {
    var D = this.__data__;
    if (D instanceof Et) {
      var V = D.__data__;
      if (!Zt || V.length < P - 1)
        return V.push([s, S]), this;
      D = this.__data__ = new Tt(V);
    }
    return D.set(s, S), this;
  }
  xt.prototype.clear = rn, xt.prototype.delete = on, xt.prototype.get = ln, xt.prototype.has = an, xt.prototype.set = un;
  function ie(s, S) {
    var D = be(s) || ae(s) ? it(s.length, String) : [], V = D.length, ut = !!V;
    for (var rt in s)
      (S || ot.call(s, rt)) && !(ut && (rt == "length" || En(rt, V))) && D.push(rt);
    return D;
  }
  function Ne(s, S, D) {
    var V = s[S];
    (!(ot.call(s, S) && qe(V, D)) || D === void 0 && !(S in s)) && (s[S] = D);
  }
  function oe(s, S) {
    for (var D = s.length; D--; )
      if (qe(s[D][0], S))
        return D;
    return -1;
  }
  function It(s, S) {
    return s && me(S, Oe(S), s);
  }
  function ye(s, S, D, V, ut, rt, ct) {
    var pt;
    if (V && (pt = rt ? V(s, ut, rt, ct) : V(s)), pt !== void 0)
      return pt;
    if (!Bt(s))
      return s;
    var bt = be(s);
    if (bt) {
      if (pt = _n(s), !S)
        return gn(s, pt);
    } else {
      var yt = Ht(s), kt = yt == h || yt == l;
      if (je(s))
        return le(s, S);
      if (yt == u || yt == T || kt && !rt) {
        if (ft(s))
          return rt ? s : {};
        if (pt = Dt(kt ? {} : s), !S)
          return mn(s, It(pt, s));
      } else {
        if (!R[yt])
          return rt ? s : {};
        pt = On(s, yt, ye, S);
      }
    }
    ct || (ct = new xt());
    var Pt = ct.get(s);
    if (Pt)
      return Pt;
    if (ct.set(s, pt), !bt)
      var _t = D ? bn(s) : Oe(s);
    return G(_t || s, function(Nt, At) {
      _t && (At = Nt, Nt = s[At]), Ne(pt, At, ye(Nt, S, D, V, At, s, ct));
    }), pt;
  }
  function sn(s) {
    return Bt(s) ? qt(s) : {};
  }
  function fn(s, S, D) {
    var V = S(s);
    return be(s) ? V : Q(V, D(s));
  }
  function cn(s) {
    return at.call(s);
  }
  function hn(s) {
    if (!Bt(s) || wn(s))
      return !1;
    var S = _e(s) || ft(s) ? wt : Y;
    return S.test(St(s));
  }
  function dn(s) {
    if (!Pe(s))
      return we(s);
    var S = [];
    for (var D in Object(s))
      ot.call(s, D) && D != "constructor" && S.push(D);
    return S;
  }
  function le(s, S) {
    if (S)
      return s.slice();
    var D = new s.constructor(s.length);
    return s.copy(D), D;
  }
  function ge(s) {
    var S = new s.constructor(s.byteLength);
    return new Vt(S).set(new Vt(s)), S;
  }
  function Xt(s, S) {
    var D = S ? ge(s.buffer) : s.buffer;
    return new s.constructor(D, s.byteOffset, s.byteLength);
  }
  function Se(s, S, D) {
    var V = S ? D(ht(s), !0) : ht(s);
    return nt(V, U, new s.constructor());
  }
  function xe(s) {
    var S = new s.constructor(s.source, z.exec(s));
    return S.lastIndex = s.lastIndex, S;
  }
  function pn(s, S, D) {
    var V = S ? D(gt(s), !0) : gt(s);
    return nt(V, $, new s.constructor());
  }
  function vn(s) {
    return Te ? Object(Te.call(s)) : {};
  }
  function yn(s, S) {
    var D = S ? ge(s.buffer) : s.buffer;
    return new s.constructor(D, s.byteOffset, s.length);
  }
  function gn(s, S) {
    var D = -1, V = s.length;
    for (S || (S = Array(V)); ++D < V; )
      S[D] = s[D];
    return S;
  }
  function me(s, S, D, V) {
    D || (D = {});
    for (var ut = -1, rt = S.length; ++ut < rt; ) {
      var ct = S[ut], pt = V ? V(D[ct], s[ct], ct, D, s) : void 0;
      Ne(D, ct, pt === void 0 ? s[ct] : pt);
    }
    return D;
  }
  function mn(s, S) {
    return me(s, Ut(s), S);
  }
  function bn(s) {
    return fn(s, Oe, Ut);
  }
  function Qt(s, S) {
    var D = s.__data__;
    return An(S) ? D[typeof S == "string" ? "string" : "hash"] : D.map;
  }
  function Rt(s, S) {
    var D = lt(s, S);
    return hn(D) ? D : void 0;
  }
  var Ut = se ? mt(se, Object) : kn, Ht = cn;
  (ne && Ht(new ne(new ArrayBuffer(1))) != w || Zt && Ht(new Zt()) != t || jt && Ht(jt.resolve()) != o || re && Ht(new re()) != r || fe && Ht(new fe()) != n) && (Ht = function(s) {
    var S = at.call(s), D = S == u ? s.constructor : void 0, V = D ? St(D) : void 0;
    if (V)
      switch (V) {
        case ce:
          return w;
        case Yt:
          return t;
        case he:
          return o;
        case de:
          return r;
        case pe:
          return n;
      }
    return S;
  });
  function _n(s) {
    var S = s.length, D = s.constructor(S);
    return S && typeof s[0] == "string" && ot.call(s, "index") && (D.index = s.index, D.input = s.input), D;
  }
  function Dt(s) {
    return typeof s.constructor == "function" && !Pe(s) ? sn(dt(s)) : {};
  }
  function On(s, S, D, V) {
    var ut = s.constructor;
    switch (S) {
      case c:
        return ge(s);
      case g:
      case p:
        return new ut(+s);
      case w:
        return Xt(s, V);
      case b:
      case A:
      case L:
      case E:
      case m:
      case _:
      case x:
      case k:
      case j:
        return yn(s, V);
      case t:
        return Se(s, V, D);
      case e:
      case i:
        return new ut(s);
      case a:
        return xe(s);
      case r:
        return pn(s, V, D);
      case f:
        return vn(s);
    }
  }
  function En(s, S) {
    return S = S == null ? d : S, !!S && (typeof s == "number" || H.test(s)) && s > -1 && s % 1 == 0 && s < S;
  }
  function An(s) {
    var S = typeof s;
    return S == "string" || S == "number" || S == "symbol" || S == "boolean" ? s !== "__proto__" : s === null;
  }
  function wn(s) {
    return !!J && J in s;
  }
  function Pe(s) {
    var S = s && s.constructor, D = typeof S == "function" && S.prototype || tt;
    return s === D;
  }
  function St(s) {
    if (s != null) {
      try {
        return st.call(s);
      } catch {
      }
      try {
        return s + "";
      } catch {
      }
    }
    return "";
  }
  function Le(s) {
    return ye(s, !0, !0);
  }
  function qe(s, S) {
    return s === S || s !== s && S !== S;
  }
  function ae(s) {
    return Tn(s) && ot.call(s, "callee") && (!Ae.call(s, "callee") || at.call(s) == T);
  }
  var be = Array.isArray;
  function ue(s) {
    return s != null && Re(s.length) && !_e(s);
  }
  function Tn(s) {
    return Me(s) && ue(s);
  }
  var je = ee || Nn;
  function _e(s) {
    var S = Bt(s) ? at.call(s) : "";
    return S == h || S == l;
  }
  function Re(s) {
    return typeof s == "number" && s > -1 && s % 1 == 0 && s <= d;
  }
  function Bt(s) {
    var S = typeof s;
    return !!s && (S == "object" || S == "function");
  }
  function Me(s) {
    return !!s && typeof s == "object";
  }
  function Oe(s) {
    return ue(s) ? ie(s) : dn(s);
  }
  function kn() {
    return [];
  }
  function Nn() {
    return !1;
  }
  C.exports = Le;
})(Be, Be.exports);
var Ce = { exports: {} };
(function(C, X) {
  var P = 200, v = "__lodash_hash_undefined__", d = 1, T = 2, O = 9007199254740991, g = "[object Arguments]", p = "[object Array]", y = "[object AsyncFunction]", h = "[object Boolean]", l = "[object Date]", t = "[object Error]", e = "[object Function]", u = "[object GeneratorFunction]", o = "[object Map]", a = "[object Number]", r = "[object Null]", i = "[object Object]", f = "[object Promise]", n = "[object Proxy]", c = "[object RegExp]", w = "[object Set]", b = "[object String]", A = "[object Symbol]", L = "[object Undefined]", E = "[object WeakMap]", m = "[object ArrayBuffer]", _ = "[object DataView]", x = "[object Float32Array]", k = "[object Float64Array]", j = "[object Int8Array]", B = "[object Int16Array]", z = "[object Int32Array]", Y = "[object Uint8Array]", H = "[object Uint8ClampedArray]", R = "[object Uint16Array]", N = "[object Uint32Array]", M = /[\\^$.*+?()[\]{}|]/g, I = /^\[object .+?Constructor\]$/, K = /^(?:0|[1-9]\d*)$/, F = {};
  F[x] = F[k] = F[j] = F[B] = F[z] = F[Y] = F[H] = F[R] = F[N] = !0, F[g] = F[p] = F[m] = F[h] = F[_] = F[l] = F[t] = F[e] = F[o] = F[a] = F[i] = F[c] = F[w] = F[b] = F[E] = !1;
  var q = typeof Kt == "object" && Kt && Kt.Object === Object && Kt, U = typeof self == "object" && self && self.Object === Object && self, $ = q || U || Function("return this")(), G = X && !X.nodeType && X, Q = G && !0 && C && !C.nodeType && C, nt = Q && Q.exports === G, it = nt && q.process, lt = function() {
    try {
      return it && it.binding && it.binding("util");
    } catch {
    }
  }(), ft = lt && lt.isTypedArray;
  function ht(s, S) {
    for (var D = -1, V = s == null ? 0 : s.length, ut = 0, rt = []; ++D < V; ) {
      var ct = s[D];
      S(ct, D, s) && (rt[ut++] = ct);
    }
    return rt;
  }
  function mt(s, S) {
    for (var D = -1, V = S.length, ut = s.length; ++D < V; )
      s[ut + D] = S[D];
    return s;
  }
  function gt(s, S) {
    for (var D = -1, V = s == null ? 0 : s.length; ++D < V; )
      if (S(s[D], D, s))
        return !0;
    return !1;
  }
  function Z(s, S) {
    for (var D = -1, V = Array(s); ++D < s; )
      V[D] = S(D);
    return V;
  }
  function W(s) {
    return function(S) {
      return s(S);
    };
  }
  function tt(s, S) {
    return s.has(S);
  }
  function et(s, S) {
    return s == null ? void 0 : s[S];
  }
  function J(s) {
    var S = -1, D = Array(s.size);
    return s.forEach(function(V, ut) {
      D[++S] = [ut, V];
    }), D;
  }
  function st(s, S) {
    return function(D) {
      return s(S(D));
    };
  }
  function ot(s) {
    var S = -1, D = Array(s.size);
    return s.forEach(function(V) {
      D[++S] = V;
    }), D;
  }
  var at = Array.prototype, wt = Function.prototype, Ot = Object.prototype, vt = $["__core-js_shared__"], Vt = wt.toString, dt = Ot.hasOwnProperty, qt = function() {
    var s = /[^.]+$/.exec(vt && vt.keys && vt.keys.IE_PROTO || "");
    return s ? "Symbol(src)_1." + s : "";
  }(), Ae = Ot.toString, ze = RegExp(
    "^" + Vt.call(dt).replace(M, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), se = nt ? $.Buffer : void 0, ee = $.Symbol, we = $.Uint8Array, ne = Ot.propertyIsEnumerable, Zt = at.splice, jt = ee ? ee.toStringTag : void 0, re = Object.getOwnPropertySymbols, fe = se ? se.isBuffer : void 0, Wt = st(Object.keys, Object), ce = Ut($, "DataView"), Yt = Ut($, "Map"), he = Ut($, "Promise"), de = Ut($, "Set"), pe = Ut($, "WeakMap"), $t = Ut(Object, "create"), Te = St(ce), Ft = St(Yt), Ke = St(he), $e = St(de), Ge = St(pe), ke = ee ? ee.prototype : void 0, ve = ke ? ke.valueOf : void 0;
  function Et(s) {
    var S = -1, D = s == null ? 0 : s.length;
    for (this.clear(); ++S < D; ) {
      var V = s[S];
      this.set(V[0], V[1]);
    }
  }
  function Ve() {
    this.__data__ = $t ? $t(null) : {}, this.size = 0;
  }
  function Ze(s) {
    var S = this.has(s) && delete this.__data__[s];
    return this.size -= S ? 1 : 0, S;
  }
  function We(s) {
    var S = this.__data__;
    if ($t) {
      var D = S[s];
      return D === v ? void 0 : D;
    }
    return dt.call(S, s) ? S[s] : void 0;
  }
  function Ye(s) {
    var S = this.__data__;
    return $t ? S[s] !== void 0 : dt.call(S, s);
  }
  function Xe(s, S) {
    var D = this.__data__;
    return this.size += this.has(s) ? 0 : 1, D[s] = $t && S === void 0 ? v : S, this;
  }
  Et.prototype.clear = Ve, Et.prototype.delete = Ze, Et.prototype.get = We, Et.prototype.has = Ye, Et.prototype.set = Xe;
  function Tt(s) {
    var S = -1, D = s == null ? 0 : s.length;
    for (this.clear(); ++S < D; ) {
      var V = s[S];
      this.set(V[0], V[1]);
    }
  }
  function Qe() {
    this.__data__ = [], this.size = 0;
  }
  function Je(s) {
    var S = this.__data__, D = le(S, s);
    if (D < 0)
      return !1;
    var V = S.length - 1;
    return D == V ? S.pop() : Zt.call(S, D, 1), --this.size, !0;
  }
  function tn(s) {
    var S = this.__data__, D = le(S, s);
    return D < 0 ? void 0 : S[D][1];
  }
  function en(s) {
    return le(this.__data__, s) > -1;
  }
  function nn(s, S) {
    var D = this.__data__, V = le(D, s);
    return V < 0 ? (++this.size, D.push([s, S])) : D[V][1] = S, this;
  }
  Tt.prototype.clear = Qe, Tt.prototype.delete = Je, Tt.prototype.get = tn, Tt.prototype.has = en, Tt.prototype.set = nn;
  function xt(s) {
    var S = -1, D = s == null ? 0 : s.length;
    for (this.clear(); ++S < D; ) {
      var V = s[S];
      this.set(V[0], V[1]);
    }
  }
  function rn() {
    this.size = 0, this.__data__ = {
      hash: new Et(),
      map: new (Yt || Tt)(),
      string: new Et()
    };
  }
  function on(s) {
    var S = Rt(this, s).delete(s);
    return this.size -= S ? 1 : 0, S;
  }
  function ln(s) {
    return Rt(this, s).get(s);
  }
  function an(s) {
    return Rt(this, s).has(s);
  }
  function un(s, S) {
    var D = Rt(this, s), V = D.size;
    return D.set(s, S), this.size += D.size == V ? 0 : 1, this;
  }
  xt.prototype.clear = rn, xt.prototype.delete = on, xt.prototype.get = ln, xt.prototype.has = an, xt.prototype.set = un;
  function ie(s) {
    var S = -1, D = s == null ? 0 : s.length;
    for (this.__data__ = new xt(); ++S < D; )
      this.add(s[S]);
  }
  function Ne(s) {
    return this.__data__.set(s, v), this;
  }
  function oe(s) {
    return this.__data__.has(s);
  }
  ie.prototype.add = ie.prototype.push = Ne, ie.prototype.has = oe;
  function It(s) {
    var S = this.__data__ = new Tt(s);
    this.size = S.size;
  }
  function ye() {
    this.__data__ = new Tt(), this.size = 0;
  }
  function sn(s) {
    var S = this.__data__, D = S.delete(s);
    return this.size = S.size, D;
  }
  function fn(s) {
    return this.__data__.get(s);
  }
  function cn(s) {
    return this.__data__.has(s);
  }
  function hn(s, S) {
    var D = this.__data__;
    if (D instanceof Tt) {
      var V = D.__data__;
      if (!Yt || V.length < P - 1)
        return V.push([s, S]), this.size = ++D.size, this;
      D = this.__data__ = new xt(V);
    }
    return D.set(s, S), this.size = D.size, this;
  }
  It.prototype.clear = ye, It.prototype.delete = sn, It.prototype.get = fn, It.prototype.has = cn, It.prototype.set = hn;
  function dn(s, S) {
    var D = ae(s), V = !D && qe(s), ut = !D && !V && ue(s), rt = !D && !V && !ut && Me(s), ct = D || V || ut || rt, pt = ct ? Z(s.length, String) : [], bt = pt.length;
    for (var yt in s)
      (S || dt.call(s, yt)) && !(ct && (yt == "length" || ut && (yt == "offset" || yt == "parent") || rt && (yt == "buffer" || yt == "byteLength" || yt == "byteOffset") || On(yt, bt))) && pt.push(yt);
    return pt;
  }
  function le(s, S) {
    for (var D = s.length; D--; )
      if (Le(s[D][0], S))
        return D;
    return -1;
  }
  function ge(s, S, D) {
    var V = S(s);
    return ae(s) ? V : mt(V, D(s));
  }
  function Xt(s) {
    return s == null ? s === void 0 ? L : r : jt && jt in Object(s) ? Ht(s) : Pe(s);
  }
  function Se(s) {
    return Bt(s) && Xt(s) == g;
  }
  function xe(s, S, D, V, ut) {
    return s === S ? !0 : s == null || S == null || !Bt(s) && !Bt(S) ? s !== s && S !== S : pn(s, S, D, V, xe, ut);
  }
  function pn(s, S, D, V, ut, rt) {
    var ct = ae(s), pt = ae(S), bt = ct ? p : Dt(s), yt = pt ? p : Dt(S);
    bt = bt == g ? i : bt, yt = yt == g ? i : yt;
    var kt = bt == i, Pt = yt == i, _t = bt == yt;
    if (_t && ue(s)) {
      if (!ue(S))
        return !1;
      ct = !0, kt = !1;
    }
    if (_t && !kt)
      return rt || (rt = new It()), ct || Me(s) ? me(s, S, D, V, ut, rt) : mn(s, S, bt, D, V, ut, rt);
    if (!(D & d)) {
      var Nt = kt && dt.call(s, "__wrapped__"), At = Pt && dt.call(S, "__wrapped__");
      if (Nt || At) {
        var Gt = Nt ? s.value() : s, zt = At ? S.value() : S;
        return rt || (rt = new It()), ut(Gt, zt, D, V, rt);
      }
    }
    return _t ? (rt || (rt = new It()), bn(s, S, D, V, ut, rt)) : !1;
  }
  function vn(s) {
    if (!Re(s) || An(s))
      return !1;
    var S = je(s) ? ze : I;
    return S.test(St(s));
  }
  function yn(s) {
    return Bt(s) && _e(s.length) && !!F[Xt(s)];
  }
  function gn(s) {
    if (!wn(s))
      return Wt(s);
    var S = [];
    for (var D in Object(s))
      dt.call(s, D) && D != "constructor" && S.push(D);
    return S;
  }
  function me(s, S, D, V, ut, rt) {
    var ct = D & d, pt = s.length, bt = S.length;
    if (pt != bt && !(ct && bt > pt))
      return !1;
    var yt = rt.get(s);
    if (yt && rt.get(S))
      return yt == S;
    var kt = -1, Pt = !0, _t = D & T ? new ie() : void 0;
    for (rt.set(s, S), rt.set(S, s); ++kt < pt; ) {
      var Nt = s[kt], At = S[kt];
      if (V)
        var Gt = ct ? V(At, Nt, kt, S, s, rt) : V(Nt, At, kt, s, S, rt);
      if (Gt !== void 0) {
        if (Gt)
          continue;
        Pt = !1;
        break;
      }
      if (_t) {
        if (!gt(S, function(zt, Jt) {
          if (!tt(_t, Jt) && (Nt === zt || ut(Nt, zt, D, V, rt)))
            return _t.push(Jt);
        })) {
          Pt = !1;
          break;
        }
      } else if (!(Nt === At || ut(Nt, At, D, V, rt))) {
        Pt = !1;
        break;
      }
    }
    return rt.delete(s), rt.delete(S), Pt;
  }
  function mn(s, S, D, V, ut, rt, ct) {
    switch (D) {
      case _:
        if (s.byteLength != S.byteLength || s.byteOffset != S.byteOffset)
          return !1;
        s = s.buffer, S = S.buffer;
      case m:
        return !(s.byteLength != S.byteLength || !rt(new we(s), new we(S)));
      case h:
      case l:
      case a:
        return Le(+s, +S);
      case t:
        return s.name == S.name && s.message == S.message;
      case c:
      case b:
        return s == S + "";
      case o:
        var pt = J;
      case w:
        var bt = V & d;
        if (pt || (pt = ot), s.size != S.size && !bt)
          return !1;
        var yt = ct.get(s);
        if (yt)
          return yt == S;
        V |= T, ct.set(s, S);
        var kt = me(pt(s), pt(S), V, ut, rt, ct);
        return ct.delete(s), kt;
      case A:
        if (ve)
          return ve.call(s) == ve.call(S);
    }
    return !1;
  }
  function bn(s, S, D, V, ut, rt) {
    var ct = D & d, pt = Qt(s), bt = pt.length, yt = Qt(S), kt = yt.length;
    if (bt != kt && !ct)
      return !1;
    for (var Pt = bt; Pt--; ) {
      var _t = pt[Pt];
      if (!(ct ? _t in S : dt.call(S, _t)))
        return !1;
    }
    var Nt = rt.get(s);
    if (Nt && rt.get(S))
      return Nt == S;
    var At = !0;
    rt.set(s, S), rt.set(S, s);
    for (var Gt = ct; ++Pt < bt; ) {
      _t = pt[Pt];
      var zt = s[_t], Jt = S[_t];
      if (V)
        var Cn = ct ? V(Jt, zt, _t, S, s, rt) : V(zt, Jt, _t, s, S, rt);
      if (!(Cn === void 0 ? zt === Jt || ut(zt, Jt, D, V, rt) : Cn)) {
        At = !1;
        break;
      }
      Gt || (Gt = _t == "constructor");
    }
    if (At && !Gt) {
      var Ie = s.constructor, De = S.constructor;
      Ie != De && "constructor" in s && "constructor" in S && !(typeof Ie == "function" && Ie instanceof Ie && typeof De == "function" && De instanceof De) && (At = !1);
    }
    return rt.delete(s), rt.delete(S), At;
  }
  function Qt(s) {
    return ge(s, Oe, _n);
  }
  function Rt(s, S) {
    var D = s.__data__;
    return En(S) ? D[typeof S == "string" ? "string" : "hash"] : D.map;
  }
  function Ut(s, S) {
    var D = et(s, S);
    return vn(D) ? D : void 0;
  }
  function Ht(s) {
    var S = dt.call(s, jt), D = s[jt];
    try {
      s[jt] = void 0;
      var V = !0;
    } catch {
    }
    var ut = Ae.call(s);
    return V && (S ? s[jt] = D : delete s[jt]), ut;
  }
  var _n = re ? function(s) {
    return s == null ? [] : (s = Object(s), ht(re(s), function(S) {
      return ne.call(s, S);
    }));
  } : kn, Dt = Xt;
  (ce && Dt(new ce(new ArrayBuffer(1))) != _ || Yt && Dt(new Yt()) != o || he && Dt(he.resolve()) != f || de && Dt(new de()) != w || pe && Dt(new pe()) != E) && (Dt = function(s) {
    var S = Xt(s), D = S == i ? s.constructor : void 0, V = D ? St(D) : "";
    if (V)
      switch (V) {
        case Te:
          return _;
        case Ft:
          return o;
        case Ke:
          return f;
        case $e:
          return w;
        case Ge:
          return E;
      }
    return S;
  });
  function On(s, S) {
    return S = S == null ? O : S, !!S && (typeof s == "number" || K.test(s)) && s > -1 && s % 1 == 0 && s < S;
  }
  function En(s) {
    var S = typeof s;
    return S == "string" || S == "number" || S == "symbol" || S == "boolean" ? s !== "__proto__" : s === null;
  }
  function An(s) {
    return !!qt && qt in s;
  }
  function wn(s) {
    var S = s && s.constructor, D = typeof S == "function" && S.prototype || Ot;
    return s === D;
  }
  function Pe(s) {
    return Ae.call(s);
  }
  function St(s) {
    if (s != null) {
      try {
        return Vt.call(s);
      } catch {
      }
      try {
        return s + "";
      } catch {
      }
    }
    return "";
  }
  function Le(s, S) {
    return s === S || s !== s && S !== S;
  }
  var qe = Se(function() {
    return arguments;
  }()) ? Se : function(s) {
    return Bt(s) && dt.call(s, "callee") && !ne.call(s, "callee");
  }, ae = Array.isArray;
  function be(s) {
    return s != null && _e(s.length) && !je(s);
  }
  var ue = fe || Nn;
  function Tn(s, S) {
    return xe(s, S);
  }
  function je(s) {
    if (!Re(s))
      return !1;
    var S = Xt(s);
    return S == e || S == u || S == y || S == n;
  }
  function _e(s) {
    return typeof s == "number" && s > -1 && s % 1 == 0 && s <= O;
  }
  function Re(s) {
    var S = typeof s;
    return s != null && (S == "object" || S == "function");
  }
  function Bt(s) {
    return s != null && typeof s == "object";
  }
  var Me = ft ? W(ft) : yn;
  function Oe(s) {
    return be(s) ? dn(s) : gn(s);
  }
  function kn() {
    return [];
  }
  function Nn() {
    return !1;
  }
  C.exports = Tn;
})(Ce, Ce.exports);
var In = {};
Object.defineProperty(In, "__esModule", { value: !0 });
const dr = Be.exports, pr = Ce.exports;
var qn;
(function(C) {
  function X(T = {}, O = {}, g = !1) {
    typeof T != "object" && (T = {}), typeof O != "object" && (O = {});
    let p = dr(O);
    g || (p = Object.keys(p).reduce((y, h) => (p[h] != null && (y[h] = p[h]), y), {}));
    for (const y in T)
      T[y] !== void 0 && O[y] === void 0 && (p[y] = T[y]);
    return Object.keys(p).length > 0 ? p : void 0;
  }
  C.compose = X;
  function P(T = {}, O = {}) {
    typeof T != "object" && (T = {}), typeof O != "object" && (O = {});
    const g = Object.keys(T).concat(Object.keys(O)).reduce((p, y) => (pr(T[y], O[y]) || (p[y] = O[y] === void 0 ? null : O[y]), p), {});
    return Object.keys(g).length > 0 ? g : void 0;
  }
  C.diff = P;
  function v(T = {}, O = {}) {
    T = T || {};
    const g = Object.keys(O).reduce((p, y) => (O[y] !== T[y] && T[y] !== void 0 && (p[y] = O[y]), p), {});
    return Object.keys(T).reduce((p, y) => (T[y] !== O[y] && O[y] === void 0 && (p[y] = null), p), g);
  }
  C.invert = v;
  function d(T, O, g = !1) {
    if (typeof T != "object")
      return O;
    if (typeof O != "object")
      return;
    if (!g)
      return O;
    const p = Object.keys(O).reduce((y, h) => (T[h] === void 0 && (y[h] = O[h]), y), {});
    return Object.keys(p).length > 0 ? p : void 0;
  }
  C.transform = d;
})(qn || (qn = {}));
In.default = qn;
var He = {};
Object.defineProperty(He, "__esModule", { value: !0 });
var jn;
(function(C) {
  function X(P) {
    return typeof P.delete == "number" ? P.delete : typeof P.retain == "number" ? P.retain : typeof P.retain == "object" && P.retain !== null ? 1 : typeof P.insert == "string" ? P.insert.length : 1;
  }
  C.length = X;
})(jn || (jn = {}));
He.default = jn;
var Dn = {};
Object.defineProperty(Dn, "__esModule", { value: !0 });
const Kn = He;
class vr {
  constructor(X) {
    this.ops = X, this.index = 0, this.offset = 0;
  }
  hasNext() {
    return this.peekLength() < 1 / 0;
  }
  next(X) {
    X || (X = 1 / 0);
    const P = this.ops[this.index];
    if (P) {
      const v = this.offset, d = Kn.default.length(P);
      if (X >= d - v ? (X = d - v, this.index += 1, this.offset = 0) : this.offset += X, typeof P.delete == "number")
        return { delete: X };
      {
        const T = {};
        return P.attributes && (T.attributes = P.attributes), typeof P.retain == "number" ? T.retain = X : typeof P.retain == "object" && P.retain !== null ? T.retain = P.retain : typeof P.insert == "string" ? T.insert = P.insert.substr(v, X) : T.insert = P.insert, T;
      }
    } else
      return { retain: 1 / 0 };
  }
  peek() {
    return this.ops[this.index];
  }
  peekLength() {
    return this.ops[this.index] ? Kn.default.length(this.ops[this.index]) - this.offset : 1 / 0;
  }
  peekType() {
    const X = this.ops[this.index];
    return X ? typeof X.delete == "number" ? "delete" : typeof X.retain == "number" || typeof X.retain == "object" && X.retain !== null ? "retain" : "insert" : "retain";
  }
  rest() {
    if (this.hasNext()) {
      if (this.offset === 0)
        return this.ops.slice(this.index);
      {
        const X = this.offset, P = this.index, v = this.next(), d = this.ops.slice(this.index);
        return this.offset = X, this.index = P, [v].concat(d);
      }
    } else
      return [];
  }
}
Dn.default = vr;
(function(C, X) {
  Object.defineProperty(X, "__esModule", { value: !0 }), X.AttributeMap = X.OpIterator = X.Op = void 0;
  const P = hr, v = Be.exports, d = Ce.exports, T = In;
  X.AttributeMap = T.default;
  const O = He;
  X.Op = O.default;
  const g = Dn;
  X.OpIterator = g.default;
  const p = String.fromCharCode(0), y = (l, t) => {
    if (typeof l != "object" || l === null)
      throw new Error(`cannot retain a ${typeof l}`);
    if (typeof t != "object" || t === null)
      throw new Error(`cannot retain a ${typeof t}`);
    const e = Object.keys(l)[0];
    if (!e || e !== Object.keys(t)[0])
      throw new Error(`embed types not matched: ${e} != ${Object.keys(t)[0]}`);
    return [e, l[e], t[e]];
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
      if (t = v(t), typeof u == "object") {
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
      return this.reduce((t, e) => e.insert ? t + O.default.length(e) : e.delete ? t - e.delete : t, 0);
    }
    length() {
      return this.reduce((t, e) => t + O.default.length(e), 0);
    }
    slice(t = 0, e = 1 / 0) {
      const u = [], o = new g.default(this.ops);
      let a = 0;
      for (; a < e && o.hasNext(); ) {
        let r;
        a < t ? r = o.next(t - a) : (r = o.next(e - a), u.push(r)), a += O.default.length(r);
      }
      return new h(u);
    }
    compose(t) {
      const e = new g.default(this.ops), u = new g.default(t.ops), o = [], a = u.peek();
      if (a != null && typeof a.retain == "number" && a.attributes == null) {
        let i = a.retain;
        for (; e.peekType() === "insert" && e.peekLength() <= i; )
          i -= e.peekLength(), o.push(e.next());
        a.retain - i > 0 && u.next(a.retain - i);
      }
      const r = new h(o);
      for (; e.hasNext() || u.hasNext(); )
        if (u.peekType() === "insert")
          r.push(u.next());
        else if (e.peekType() === "delete")
          r.push(e.next());
        else {
          const i = Math.min(e.peekLength(), u.peekLength()), f = e.next(i), n = u.next(i);
          if (n.retain) {
            const c = {};
            if (typeof f.retain == "number")
              c.retain = typeof n.retain == "number" ? i : n.retain;
            else if (typeof n.retain == "number")
              f.retain == null ? c.insert = f.insert : c.retain = f.retain;
            else {
              const b = f.retain == null ? "insert" : "retain", [A, L, E] = y(f[b], n.retain), m = h.getHandler(A);
              c[b] = {
                [A]: m.compose(L, E, b === "retain")
              };
            }
            const w = T.default.compose(f.attributes, n.attributes, typeof f.retain == "number");
            if (w && (c.attributes = w), r.push(c), !u.hasNext() && d(r.ops[r.ops.length - 1], c)) {
              const b = new h(e.rest());
              return r.concat(b).chop();
            }
          } else
            typeof n.delete == "number" && (typeof f.retain == "number" || typeof f.retain == "object" && f.retain !== null) && r.push(n);
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
      const u = [this, t].map((f) => f.map((n) => {
        if (n.insert != null)
          return typeof n.insert == "string" ? n.insert : p;
        const c = f === t ? "on" : "with";
        throw new Error("diff() called " + c + " non-document");
      }).join("")), o = new h(), a = P(u[0], u[1], e), r = new g.default(this.ops), i = new g.default(t.ops);
      return a.forEach((f) => {
        let n = f[1].length;
        for (; n > 0; ) {
          let c = 0;
          switch (f[0]) {
            case P.INSERT:
              c = Math.min(i.peekLength(), n), o.push(i.next(c));
              break;
            case P.DELETE:
              c = Math.min(n, r.peekLength()), r.next(c), o.delete(c);
              break;
            case P.EQUAL:
              c = Math.min(r.peekLength(), i.peekLength(), n);
              const w = r.next(c), b = i.next(c);
              d(w.insert, b.insert) ? o.retain(c, T.default.diff(w.attributes, b.attributes)) : o.push(b).delete(c);
              break;
          }
          n -= c;
        }
      }), o.chop();
    }
    eachLine(t, e = `
`) {
      const u = new g.default(this.ops);
      let o = new h(), a = 0;
      for (; u.hasNext(); ) {
        if (u.peekType() !== "insert")
          return;
        const r = u.peek(), i = O.default.length(r) - u.peekLength(), f = typeof r.insert == "string" ? r.insert.indexOf(e, i) - i : -1;
        if (f < 0)
          o.push(u.next());
        else if (f > 0)
          o.push(u.next(f));
        else {
          if (t(o, u.next(1).attributes || {}, a) === !1)
            return;
          a += 1, o = new h();
        }
      }
      o.length() > 0 && t(o, {}, a);
    }
    invert(t) {
      const e = new h();
      return this.reduce((u, o) => {
        if (o.insert)
          e.delete(O.default.length(o));
        else {
          if (typeof o.retain == "number" && o.attributes == null)
            return e.retain(o.retain), u + o.retain;
          if (o.delete || typeof o.retain == "number") {
            const a = o.delete || o.retain;
            return t.slice(u, u + a).forEach((i) => {
              o.delete ? e.push(i) : o.retain && o.attributes && e.retain(O.default.length(i), T.default.invert(o.attributes, i.attributes));
            }), u + a;
          } else if (typeof o.retain == "object" && o.retain !== null) {
            const a = t.slice(u, u + 1), r = new g.default(a.ops).next(), [i, f, n] = y(o.retain, r.insert), c = h.getHandler(i);
            return e.retain({ [i]: c.invert(f, n) }, T.default.invert(o.attributes, r.attributes)), u + 1;
          }
        }
        return u;
      }, 0), e.chop();
    }
    transform(t, e = !1) {
      if (e = !!e, typeof t == "number")
        return this.transformPosition(t, e);
      const u = t, o = new g.default(this.ops), a = new g.default(u.ops), r = new h();
      for (; o.hasNext() || a.hasNext(); )
        if (o.peekType() === "insert" && (e || a.peekType() !== "insert"))
          r.retain(O.default.length(o.next()));
        else if (a.peekType() === "insert")
          r.push(a.next());
        else {
          const i = Math.min(o.peekLength(), a.peekLength()), f = o.next(i), n = a.next(i);
          if (f.delete)
            continue;
          if (n.delete)
            r.push(n);
          else {
            const c = f.retain, w = n.retain;
            let b = typeof w == "object" && w !== null ? w : i;
            if (typeof c == "object" && c !== null && typeof w == "object" && w !== null) {
              const A = Object.keys(c)[0];
              if (A === Object.keys(w)[0]) {
                const L = h.getHandler(A);
                L && (b = {
                  [A]: L.transform(c[A], w[A], e)
                });
              }
            }
            r.retain(b, T.default.transform(f.attributes, n.attributes, e));
          }
        }
      return r.chop();
    }
    transformPosition(t, e = !1) {
      e = !!e;
      const u = new g.default(this.ops);
      let o = 0;
      for (; u.hasNext() && o <= t; ) {
        const a = u.peekLength(), r = u.peekType();
        if (u.next(), r === "delete") {
          t -= Math.min(a, t - o);
          continue;
        } else
          r === "insert" && (o < t || !e) && (t += a);
        o += a;
      }
      return t;
    }
  }
  h.Op = O.default, h.OpIterator = g.default, h.AttributeMap = T.default, h.handlers = {}, X.default = h, C.exports = h, C.exports.default = h;
})(Ln, Ln.exports);
const wr = /* @__PURE__ */ Gn(Ln.exports), Bn = te.import("attributors/style/size");
Bn.whitelist = [
  "12px",
  !1,
  "16px",
  "18px",
  "20px",
  "24px",
  "28px",
  "32px",
  "36px",
  "72px"
];
te.register(Bn, !0);
const Jn = te.import("attributors/style/font"), tr = [
  "SimSun",
  "SimHei",
  !1,
  "KaiTi",
  "FangSong",
  "Arail",
  "Tahoma",
  "Verdana",
  "Courier New"
];
Jn.whitelist = tr;
te.register(Jn, !0);
const yr = Bn.whitelist, $n = {
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
    [{ size: yr }],
    [{ header: [1, 2, 3, 4, 5, 6, !1] }],
    [{ font: tr }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["clean"],
    ["link", "image", "video"]
  ]
};
const gr = { class: "vusui-editor" }, mr = /* @__PURE__ */ Fe("i", { class: "drag-arrow top" }, null, -1), br = /* @__PURE__ */ Fe("i", { class: "drag-line" }, null, -1), _r = /* @__PURE__ */ Fe("i", { class: "drag-arrow bottom" }, null, -1), Or = [
  mr,
  br,
  _r
], Er = {
  name: "VusuiEditor"
}, Pn = /* @__PURE__ */ er({
  ...Er,
  props: {
    content: {
      type: [String, Object],
      default: ""
    },
    contentType: {
      type: String,
      default: "html",
      validator: (C) => ["delta", "html", "text"].includes(C)
    },
    theme: {
      type: String,
      default: "snow",
      validator: (C) => ["snow", "bubble"].includes(C)
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
      validator: (C) => typeof C == "string" && C !== "" ? C.charAt(0) === "#" ? !0 : Object.keys($n).indexOf(C) !== -1 : !0
    },
    modules: {
      type: Object,
      required: !1
    },
    options: {
      type: Object,
      required: !1
    },
    height: {
      type: Number,
      default: 400
    },
    showDrag: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "textChange",
    "selectionChange",
    "editorChange",
    "ready",
    "focus",
    "blur",
    "update:content"
  ],
  setup(C, { expose: X, emit: P }) {
    const v = C, d = Sn(null), T = Sn(null), O = Sn(!1), g = {
      options: {},
      quill: null
    }, p = {
      startMouseTop: 0,
      endMouseTop: 0
    }, y = {
      MaxHeight: 800,
      MinHeight: 100
    };
    Fn(
      () => v.disabled,
      (k) => {
        g.quill && g.quill.enable(!k);
      }
    ), Fn(O, (k) => {
      P(k ? "focus" : "blur", d);
    }), nr(() => {
      l();
    }), rr(() => {
      g.quill = null;
    });
    const h = () => {
      var j, B;
      const k = {};
      if (v.theme && (k.theme = v.theme), v.placeholder && (k.placeholder = v.placeholder), (v.readOnly || ((j = v.options) == null ? void 0 : j.readOnly)) && (k.readOnly = v.readOnly, k.placeholder = v.content ? "" : ((B = v.options) == null ? void 0 : B.placeholder) || v.placeholder), v.toolbar && v.toolbar !== "" && (k.modules = {
        toolbar: (() => {
          if (typeof v.toolbar == "object")
            return v.toolbar;
          if (typeof v.toolbar == "string")
            return v.toolbar.charAt(0) === "#" ? v.toolbar : $n[v.toolbar];
        })()
      }), v.modules) {
        const z = (() => {
          var H, R;
          const Y = {};
          if (Array.isArray(v.modules))
            for (const N of v.modules)
              Y[N.name] = (H = N.options) != null ? H : {};
          else
            Y[v.modules.name] = (R = v.modules.options) != null ? R : {};
          return Y;
        })();
        k.modules = Object.assign({}, k.modules, z);
      }
      return Object.assign({}, v.options, k);
    }, l = () => {
      var k, j, B, z, Y;
      if (!d.value)
        return !1;
      if (g.options = h(), v.modules)
        if (Array.isArray(v.modules))
          for (const H of v.modules)
            te.register(`modules/${H.name}`, H.module);
        else
          te.register(`modules/${v.modules.name}`, v.modules.module);
      g.quill = new te(d.value, g.options), n(v.content), g.quill.on("text-change", t), g.quill.on("selection-change", e), g.quill.on("editor-change", u), v.theme !== "bubble" && ((j = (k = d.value) == null ? void 0 : k.classList) == null || j.remove("ql-bubble")), v.theme !== "snow" && ((z = (B = d.value) == null ? void 0 : B.classList) == null || z.remove("ql-snow")), (Y = g.quill.getModule("toolbar")) == null || Y.container.addEventListener("mousedown", (H) => {
        H.preventDefault();
      }), P("ready", g.quill);
    }, t = (k, j, B) => {
      P("update:content", f()), P("textChange", { delta: k, oldContents: j, source: B });
    }, e = (k, j, B) => {
      var z;
      O.value = !!((z = g.quill) != null && z.hasFocus()), P("selectionChange", { range: k, oldRange: j, source: B });
    }, u = (...k) => {
      k[0] === "text-change" && P("editorChange", {
        name: k[0],
        delta: k[1],
        oldContents: k[2],
        source: k[3]
      }), k[0] === "selection-change" && P("editorChange", {
        name: k[0],
        range: k[1],
        oldRange: k[2],
        source: k[3]
      });
    }, o = () => d.value, a = () => T.value, r = () => {
      var k, j;
      return (j = (k = g.quill) == null ? void 0 : k.getModule("toolbar")) == null ? void 0 : j.container;
    }, i = () => {
      if (g.quill)
        return g.quill;
      throw "Quill\u52A0\u8F7D\u5931\u8D25";
    }, f = (k, j) => {
      var B;
      return v.contentType === "html" ? b() : v.contentType === "text" ? c(k, j) : (B = g.quill) == null ? void 0 : B.getContents(k, j);
    }, n = (k, j = "api") => {
      var B;
      v.contentType === "html" ? A(k) : v.contentType === "text" ? w(k, j) : (B = g.quill) == null || B.setContents(k, j);
    }, c = (k, j) => {
      var B, z;
      return (z = (B = g.quill) == null ? void 0 : B.getText(k, j)) != null ? z : "";
    }, w = (k, j = "api") => {
      var B;
      (B = g.quill) == null || B.setText(k, j);
    }, b = () => {
      var k, j;
      return (j = (k = g.quill) == null ? void 0 : k.root.innerHTML) != null ? j : "";
    }, A = (k) => {
      g.quill && (g.quill.root.innerHTML = k);
    }, L = (k, j = "api") => {
      var z, Y;
      const B = (z = g.quill) == null ? void 0 : z.clipboard.convert(k);
      B && ((Y = g.quill) == null || Y.setContents(B, j));
    }, E = () => {
      lr(() => {
        l();
      });
    }, m = (k) => {
      document.onselectstart = () => !1, document.ondragstart = () => !1, p.startMouseTop = k.clientY, p.endMouseTop = k.clientY, document.addEventListener("mousemove", _), document.addEventListener("mouseup", x);
    }, _ = (k) => {
      const { endMouseTop: j } = p, B = d.value.getBoundingClientRect().height || 0;
      let z = 0;
      const Y = Math.abs(
        parseInt(((j - k.clientY) * 100).toString(), 10) / 100
      );
      if (j < k.clientY) {
        if (B >= y.MaxHeight)
          return T.value.style.cursor = "s-resize", !1;
        z = B + Y;
      } else {
        if (B <= y.MinHeight)
          return T.value.style.cursor = "n-resize", !1;
        z = B - Y;
      }
      z > y.MaxHeight && (z = y.MaxHeight), z < y.MinHeight && (z = y.MinHeight), d.value.style.height = z + "px", T.value.style.cursor = "move", p.endMouseTop = k.clientY;
    }, x = () => {
      document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", x), document.onselectstart = null, document.ondragstart = null;
    };
    return X({
      editor: d,
      editorDrag: T,
      reinit: E,
      getEditor: o,
      getEditorDrag: a,
      getToolbar: r,
      getQuill: i,
      getContents: f,
      setContents: n,
      getHTML: b,
      setHTML: A,
      pasteHTML: L,
      getText: c,
      setText: w
    }), (k, j) => (Un(), Hn("div", gr, [
      Fe("div", ir({
        ref_key: "editor",
        ref: d,
        class: "vusui-editor-container",
        style: { height: C.height + "px" }
      }, k.$attrs), null, 16),
      C.showDrag ? (Un(), Hn("div", {
        key: 0,
        ref_key: "editorDrag",
        ref: T,
        class: "vusui-editor-drag",
        onMousedown: m
      }, Or, 544)) : or("", !0)
    ]));
  }
});
Pn.install = (C) => {
  C.component(Pn.name, Pn);
};
export {
  wr as Delta,
  te as Quill,
  Pn as VusuiEditor
};
