import { defineComponent as er, ref as xn, watch as Fn, onMounted as nr, onUnmounted as rr, openBlock as Un, createElementBlock as Hn, createElementVNode as Ue, mergeProps as ir, createCommentVNode as or, nextTick as lr } from "vue";
var Kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Gn(B) {
  return B && B.__esModule && Object.prototype.hasOwnProperty.call(B, "default") ? B.default : B;
}
var Vn = { exports: {} };
/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function(B, Y) {
  (function(v, d) {
    B.exports = d();
  })(typeof self < "u" ? self : Kt, function() {
    return function(x) {
      var v = {};
      function d(k) {
        if (v[k])
          return v[k].exports;
        var E = v[k] = {
          i: k,
          l: !1,
          exports: {}
        };
        return x[k].call(E.exports, E, E.exports, d), E.l = !0, E.exports;
      }
      return d.m = x, d.c = v, d.d = function(k, E, m) {
        d.o(k, E) || Object.defineProperty(k, E, {
          configurable: !1,
          enumerable: !0,
          get: m
        });
      }, d.n = function(k) {
        var E = k && k.__esModule ? function() {
          return k.default;
        } : function() {
          return k;
        };
        return d.d(E, "a", E), E;
      }, d.o = function(k, E) {
        return Object.prototype.hasOwnProperty.call(k, E);
      }, d.p = "", d(d.s = 109);
    }([
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", { value: !0 });
        var k = d(17), E = d(18), m = d(19), p = d(45), y = d(46), h = d(47), l = d(48), t = d(49), e = d(12), u = d(32), o = d(33), a = d(31), r = d(1), i = {
          Scope: r.Scope,
          create: r.create,
          find: r.find,
          query: r.query,
          register: r.register,
          Container: k.default,
          Format: E.default,
          Leaf: m.default,
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
      function(x, v, d) {
        var k = this && this.__extends || function() {
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
        var E = function(a) {
          k(r, a);
          function r(i) {
            var f = this;
            return i = "[Parchment] " + i, f = a.call(this, i) || this, f.message = i, f.name = f.constructor.name, f;
          }
          return r;
        }(Error);
        v.ParchmentError = E;
        var m = {}, p = {}, y = {}, h = {};
        v.DATA_KEY = "__blot";
        var l;
        (function(a) {
          a[a.TYPE = 3] = "TYPE", a[a.LEVEL = 12] = "LEVEL", a[a.ATTRIBUTE = 13] = "ATTRIBUTE", a[a.BLOT = 14] = "BLOT", a[a.INLINE = 7] = "INLINE", a[a.BLOCK = 11] = "BLOCK", a[a.BLOCK_BLOT = 10] = "BLOCK_BLOT", a[a.INLINE_BLOT = 6] = "INLINE_BLOT", a[a.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", a[a.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", a[a.ANY = 15] = "ANY";
        })(l = v.Scope || (v.Scope = {}));
        function t(a, r) {
          var i = u(a);
          if (i == null)
            throw new E("Unable to create " + a + " blot");
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
            i = h[a] || m[a];
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
            throw new E("Invalid definition");
          if (i.blotName === "abstract")
            throw new E("Cannot register abstract class");
          if (h[i.blotName || i.attrName] = i, typeof i.keyName == "string")
            m[i.keyName] = i;
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
      function(x, v, d) {
        var k = d(51), E = d(11), m = d(3), p = d(20), y = String.fromCharCode(0), h = function(l) {
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
          if (l = m(!0, {}, l), typeof e == "object") {
            if (typeof l.delete == "number" && typeof e.delete == "number")
              return this.ops[t - 1] = { delete: e.delete + l.delete }, this;
            if (typeof e.delete == "number" && l.insert != null && (t -= 1, e = this.ops[t - 1], typeof e != "object"))
              return this.ops.unshift(l), this;
            if (E(l.attributes, e.attributes)) {
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
                var T = p.attributes.compose(f.attributes, n.attributes, typeof f.retain == "number");
                if (T && (c.attributes = T), r.push(c), !e.hasNext() && E(r.ops[r.ops.length - 1], c)) {
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
          }), u = new h(), o = k(e[0], e[1], t), a = p.iterator(this.ops), r = p.iterator(l.ops);
          return o.forEach(function(i) {
            for (var f = i[1].length; f > 0; ) {
              var n = 0;
              switch (i[0]) {
                case k.INSERT:
                  n = Math.min(r.peekLength(), f), u.push(r.next(n));
                  break;
                case k.DELETE:
                  n = Math.min(f, a.peekLength()), a.next(n), u.delete(n);
                  break;
                case k.EQUAL:
                  n = Math.min(a.peekLength(), r.peekLength(), f);
                  var c = a.next(n), T = r.next(n);
                  E(c.insert, T.insert) ? u.retain(n, p.attributes.diff(c.attributes, T.attributes)) : u.push(T).delete(n);
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
        }, x.exports = h;
      },
      function(x, v) {
        var d = Object.prototype.hasOwnProperty, k = Object.prototype.toString, E = Object.defineProperty, m = Object.getOwnPropertyDescriptor, p = function(e) {
          return typeof Array.isArray == "function" ? Array.isArray(e) : k.call(e) === "[object Array]";
        }, y = function(e) {
          if (!e || k.call(e) !== "[object Object]")
            return !1;
          var u = d.call(e, "constructor"), o = e.constructor && e.constructor.prototype && d.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !u && !o)
            return !1;
          var a;
          for (a in e)
            ;
          return typeof a > "u" || d.call(e, a);
        }, h = function(e, u) {
          E && u.name === "__proto__" ? E(e, u.name, {
            enumerable: !0,
            configurable: !0,
            value: u.newValue,
            writable: !0
          }) : e[u.name] = u.newValue;
        }, l = function(e, u) {
          if (u === "__proto__")
            if (d.call(e, u)) {
              if (m)
                return m(e, u).value;
            } else
              return;
          return e[u];
        };
        x.exports = function t() {
          var e, u, o, a, r, i, f = arguments[0], n = 1, c = arguments.length, T = !1;
          for (typeof f == "boolean" && (T = f, f = arguments[1] || {}, n = 2), (f == null || typeof f != "object" && typeof f != "function") && (f = {}); n < c; ++n)
            if (e = arguments[n], e != null)
              for (u in e)
                o = l(f, u), a = l(e, u), f !== a && (T && a && (y(a) || (r = p(a))) ? (r ? (r = !1, i = o && p(o) ? o : []) : i = o && y(o) ? o : {}, h(f, { name: u, newValue: t(T, i, a) })) : typeof a < "u" && h(f, { name: u, newValue: a }));
          return f;
        };
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.default = v.BlockEmbed = v.bubbleFormats = void 0;
        var k = function() {
          function g(_, O) {
            for (var P = 0; P < O.length; P++) {
              var j = O[P];
              j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(_, j.key, j);
            }
          }
          return function(_, O, P) {
            return O && g(_.prototype, O), P && g(_, P), _;
          };
        }(), E = function g(_, O, P) {
          _ === null && (_ = Function.prototype);
          var j = Object.getOwnPropertyDescriptor(_, O);
          if (j === void 0) {
            var U = Object.getPrototypeOf(_);
            return U === null ? void 0 : g(U, O, P);
          } else {
            if ("value" in j)
              return j.value;
            var z = j.get;
            return z === void 0 ? void 0 : z.call(P);
          }
        }, m = d(3), p = f(m), y = d(2), h = f(y), l = d(0), t = f(l), e = d(16), u = f(e), o = d(6), a = f(o), r = d(7), i = f(r);
        function f(g) {
          return g && g.__esModule ? g : { default: g };
        }
        function n(g, _) {
          if (!(g instanceof _))
            throw new TypeError("Cannot call a class as a function");
        }
        function c(g, _) {
          if (!g)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return _ && (typeof _ == "object" || typeof _ == "function") ? _ : g;
        }
        function T(g, _) {
          if (typeof _ != "function" && _ !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof _);
          g.prototype = Object.create(_ && _.prototype, { constructor: { value: g, enumerable: !1, writable: !0, configurable: !0 } }), _ && (Object.setPrototypeOf ? Object.setPrototypeOf(g, _) : g.__proto__ = _);
        }
        var b = 1, w = function(g) {
          T(_, g);
          function _() {
            return n(this, _), c(this, (_.__proto__ || Object.getPrototypeOf(_)).apply(this, arguments));
          }
          return k(_, [{
            key: "attach",
            value: function() {
              E(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "attach", this).call(this), this.attributes = new t.default.Attributor.Store(this.domNode);
            }
          }, {
            key: "delta",
            value: function() {
              return new h.default().insert(this.value(), (0, p.default)(this.formats(), this.attributes.values()));
            }
          }, {
            key: "format",
            value: function(P, j) {
              var U = t.default.query(P, t.default.Scope.BLOCK_ATTRIBUTE);
              U != null && this.attributes.attribute(U, j);
            }
          }, {
            key: "formatAt",
            value: function(P, j, U, z) {
              this.format(U, z);
            }
          }, {
            key: "insertAt",
            value: function(P, j, U) {
              if (typeof j == "string" && j.endsWith(`
`)) {
                var z = t.default.create(L.blotName);
                this.parent.insertBefore(z, P === 0 ? this : this.next), z.insertAt(0, j.slice(0, -1));
              } else
                E(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "insertAt", this).call(this, P, j, U);
            }
          }]), _;
        }(t.default.Embed);
        w.scope = t.default.Scope.BLOCK_BLOT;
        var L = function(g) {
          T(_, g);
          function _(O) {
            n(this, _);
            var P = c(this, (_.__proto__ || Object.getPrototypeOf(_)).call(this, O));
            return P.cache = {}, P;
          }
          return k(_, [{
            key: "delta",
            value: function() {
              return this.cache.delta == null && (this.cache.delta = this.descendants(t.default.Leaf).reduce(function(P, j) {
                return j.length() === 0 ? P : P.insert(j.value(), A(j));
              }, new h.default()).insert(`
`, A(this))), this.cache.delta;
            }
          }, {
            key: "deleteAt",
            value: function(P, j) {
              E(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "deleteAt", this).call(this, P, j), this.cache = {};
            }
          }, {
            key: "formatAt",
            value: function(P, j, U, z) {
              j <= 0 || (t.default.query(U, t.default.Scope.BLOCK) ? P + j === this.length() && this.format(U, z) : E(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "formatAt", this).call(this, P, Math.min(j, this.length() - P - 1), U, z), this.cache = {});
            }
          }, {
            key: "insertAt",
            value: function(P, j, U) {
              if (U != null)
                return E(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "insertAt", this).call(this, P, j, U);
              if (j.length !== 0) {
                var z = j.split(`
`), X = z.shift();
                X.length > 0 && (P < this.length() - 1 || this.children.tail == null ? E(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "insertAt", this).call(this, Math.min(P, this.length() - 1), X) : this.children.tail.insertAt(this.children.tail.length(), X), this.cache = {});
                var H = this;
                z.reduce(function(R, N) {
                  return H = H.split(R, !0), H.insertAt(0, N), N.length;
                }, P + X.length);
              }
            }
          }, {
            key: "insertBefore",
            value: function(P, j) {
              var U = this.children.head;
              E(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "insertBefore", this).call(this, P, j), U instanceof u.default && U.remove(), this.cache = {};
            }
          }, {
            key: "length",
            value: function() {
              return this.cache.length == null && (this.cache.length = E(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "length", this).call(this) + b), this.cache.length;
            }
          }, {
            key: "moveChildren",
            value: function(P, j) {
              E(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "moveChildren", this).call(this, P, j), this.cache = {};
            }
          }, {
            key: "optimize",
            value: function(P) {
              E(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "optimize", this).call(this, P), this.cache = {};
            }
          }, {
            key: "path",
            value: function(P) {
              return E(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "path", this).call(this, P, !0);
            }
          }, {
            key: "removeChild",
            value: function(P) {
              E(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "removeChild", this).call(this, P), this.cache = {};
            }
          }, {
            key: "split",
            value: function(P) {
              var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
              if (j && (P === 0 || P >= this.length() - b)) {
                var U = this.clone();
                return P === 0 ? (this.parent.insertBefore(U, this), this) : (this.parent.insertBefore(U, this.next), U);
              } else {
                var z = E(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "split", this).call(this, P, j);
                return this.cache = {}, z;
              }
            }
          }]), _;
        }(t.default.Block);
        L.blotName = "block", L.tagName = "P", L.defaultChild = "break", L.allowedChildren = [a.default, t.default.Embed, i.default];
        function A(g) {
          var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return g == null || (typeof g.formats == "function" && (_ = (0, p.default)(_, g.formats())), g.parent == null || g.parent.blotName == "scroll" || g.parent.statics.scope !== g.statics.scope) ? _ : A(g.parent, _);
        }
        v.bubbleFormats = A, v.BlockEmbed = w, v.default = L;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.default = v.overload = v.expandConfig = void 0;
        var k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(H) {
          return typeof H;
        } : function(H) {
          return H && typeof Symbol == "function" && H.constructor === Symbol && H !== Symbol.prototype ? "symbol" : typeof H;
        }, E = function() {
          function H(R, N) {
            var M = [], I = !0, K = !1, C = void 0;
            try {
              for (var q = R[Symbol.iterator](), F; !(I = (F = q.next()).done) && (M.push(F.value), !(N && M.length === N)); I = !0)
                ;
            } catch ($) {
              K = !0, C = $;
            } finally {
              try {
                !I && q.return && q.return();
              } finally {
                if (K)
                  throw C;
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
        }(), m = function() {
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
        var p = d(2), y = A(p), h = d(14), l = A(h), t = d(8), e = A(t), u = d(9), o = A(u), a = d(0), r = A(a), i = d(15), f = A(i), n = d(3), c = A(n), T = d(10), b = A(T), w = d(34), L = A(w);
        function A(H) {
          return H && H.__esModule ? H : { default: H };
        }
        function g(H, R, N) {
          return R in H ? Object.defineProperty(H, R, { value: N, enumerable: !0, configurable: !0, writable: !0 }) : H[R] = N, H;
        }
        function _(H, R) {
          if (!(H instanceof R))
            throw new TypeError("Cannot call a class as a function");
        }
        var O = (0, b.default)("quill"), P = function() {
          m(H, null, [{
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
              return this.imports[N] == null && O.error("Cannot import " + N + ". Are you sure it was registered?"), this.imports[N];
            }
          }, {
            key: "register",
            value: function(N, M) {
              var I = this, K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
              if (typeof N != "string") {
                var C = N.attrName || N.blotName;
                typeof C == "string" ? this.register("formats/" + C, N, M) : Object.keys(N).forEach(function(q) {
                  I.register(q, N[q], M);
                });
              } else
                this.imports[N] != null && !K && O.warn("Overwriting " + N + " with", M), this.imports[N] = M, (N.startsWith("blots/") || N.startsWith("formats/")) && M.blotName !== "abstract" ? r.default.register(M) : N.startsWith("modules") && typeof M.register == "function" && M.register();
            }
          }]);
          function H(R) {
            var N = this, M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (_(this, H), this.options = j(R, M), this.container = this.options.container, this.container == null)
              return O.error("Invalid Quill container", R);
            this.options.debug && H.debug(this.options.debug);
            var I = this.container.innerHTML.trim();
            this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new e.default(), this.scroll = r.default.create(this.root, {
              emitter: this.emitter,
              whitelist: this.options.formats
            }), this.editor = new l.default(this.scroll), this.selection = new f.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(e.default.events.EDITOR_CHANGE, function(C) {
              C === e.default.events.TEXT_CHANGE && N.root.classList.toggle("ql-blank", N.editor.isBlank());
            }), this.emitter.on(e.default.events.SCROLL_UPDATE, function(C, q) {
              var F = N.selection.lastRange, $ = F && F.length === 0 ? F.index : void 0;
              U.call(N, function() {
                return N.editor.update(null, q, $);
              }, C);
            });
            var K = this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">` + I + "<p><br></p></div>");
            this.setContents(K), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable();
          }
          return m(H, [{
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
              var K = this, C = z(N, M, I), q = E(C, 4);
              return N = q[0], M = q[1], I = q[3], U.call(this, function() {
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
              return U.call(this, function() {
                var C = I.getSelection(!0), q = new y.default();
                if (C == null)
                  return q;
                if (r.default.query(N, r.default.Scope.BLOCK))
                  q = I.editor.formatLine(C.index, C.length, g({}, N, M));
                else {
                  if (C.length === 0)
                    return I.selection.format(N, M), q;
                  q = I.editor.formatText(C.index, C.length, g({}, N, M));
                }
                return I.setSelection(C, e.default.sources.SILENT), q;
              }, K);
            }
          }, {
            key: "formatLine",
            value: function(N, M, I, K, C) {
              var q = this, F = void 0, $ = z(N, M, I, K, C), G = E($, 4);
              return N = G[0], M = G[1], F = G[2], C = G[3], U.call(this, function() {
                return q.editor.formatLine(N, M, F);
              }, C, N, 0);
            }
          }, {
            key: "formatText",
            value: function(N, M, I, K, C) {
              var q = this, F = void 0, $ = z(N, M, I, K, C), G = E($, 4);
              return N = G[0], M = G[1], F = G[2], C = G[3], U.call(this, function() {
                return q.editor.formatText(N, M, F);
              }, C, N, 0);
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
              var N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - N, I = z(N, M), K = E(I, 2);
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
              var N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - N, I = z(N, M), K = E(I, 2);
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
              var K = this, C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : H.sources.API;
              return U.call(this, function() {
                return K.editor.insertEmbed(N, M, I);
              }, C, N);
            }
          }, {
            key: "insertText",
            value: function(N, M, I, K, C) {
              var q = this, F = void 0, $ = z(N, 0, I, K, C), G = E($, 4);
              return N = G[0], F = G[2], C = G[3], U.call(this, function() {
                return q.editor.insertText(N, M, F);
              }, C, N, M.length);
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
              var K = this, C = z(N, M, I), q = E(C, 4);
              return N = q[0], M = q[1], I = q[3], U.call(this, function() {
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
              return U.call(this, function() {
                N = new y.default(N);
                var K = M.getLength(), C = M.editor.deleteText(0, K), q = M.editor.applyDelta(N), F = q.ops[q.ops.length - 1];
                F != null && typeof F.insert == "string" && F.insert[F.insert.length - 1] === `
` && (M.editor.deleteText(M.getLength() - 1, 1), q.delete(1));
                var $ = C.compose(q);
                return $;
              }, I);
            }
          }, {
            key: "setSelection",
            value: function(N, M, I) {
              if (N == null)
                this.selection.setRange(null, M || H.sources.API);
              else {
                var K = z(N, M, I), C = E(K, 4);
                N = C[0], M = C[1], I = C[3], this.selection.setRange(new i.Range(N, M), I), I !== e.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer);
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
              return U.call(this, function() {
                return N = new y.default(N), M.editor.applyDelta(N, I);
              }, I, !0);
            }
          }]), H;
        }();
        P.DEFAULTS = {
          bounds: null,
          formats: null,
          modules: {},
          placeholder: "",
          readOnly: !1,
          scrollingContainer: null,
          strict: !0,
          theme: "default"
        }, P.events = e.default.events, P.sources = e.default.sources, P.version = "1.3.7", P.imports = {
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
          }, R), !R.theme || R.theme === P.DEFAULTS.theme)
            R.theme = L.default;
          else if (R.theme = P.import("themes/" + R.theme), R.theme == null)
            throw new Error("Invalid theme " + R.theme + ". Did you register it?");
          var N = (0, c.default)(!0, {}, R.theme.DEFAULTS);
          [N, R].forEach(function(K) {
            K.modules = K.modules || {}, Object.keys(K.modules).forEach(function(C) {
              K.modules[C] === !0 && (K.modules[C] = {});
            });
          });
          var M = Object.keys(N.modules).concat(Object.keys(R.modules)), I = M.reduce(function(K, C) {
            var q = P.import("modules/" + C);
            return q == null ? O.error("Cannot load " + C + " module. Are you sure you registered it?") : K[C] = q.DEFAULTS || {}, K;
          }, {});
          return R.modules != null && R.modules.toolbar && R.modules.toolbar.constructor !== Object && (R.modules.toolbar = {
            container: R.modules.toolbar
          }), R = (0, c.default)(!0, {}, P.DEFAULTS, { modules: I }, N, R), ["bounds", "container", "scrollingContainer"].forEach(function(K) {
            typeof R[K] == "string" && (R[K] = document.querySelector(R[K]));
          }), R.modules = Object.keys(R.modules).reduce(function(K, C) {
            return R.modules[C] && (K[C] = R.modules[C]), K;
          }, {}), R;
        }
        function U(H, R, N, M) {
          if (this.options.strict && !this.isEnabled() && R === e.default.sources.USER)
            return new y.default();
          var I = N == null ? null : this.getSelection(), K = this.editor.delta, C = H();
          if (I != null && (N === !0 && (N = I.index), M == null ? I = X(I, C, R) : M !== 0 && (I = X(I, N, M, R)), this.setSelection(I, e.default.sources.SILENT)), C.length() > 0) {
            var q, F = [e.default.events.TEXT_CHANGE, C, K, R];
            if ((q = this.emitter).emit.apply(q, [e.default.events.EDITOR_CHANGE].concat(F)), R !== e.default.sources.SILENT) {
              var $;
              ($ = this.emitter).emit.apply($, F);
            }
          }
          return C;
        }
        function z(H, R, N, M, I) {
          var K = {};
          return typeof H.index == "number" && typeof H.length == "number" ? typeof R != "number" ? (I = M, M = N, N = R, R = H.length, H = H.index) : (R = H.length, H = H.index) : typeof R != "number" && (I = M, M = N, N = R, R = 0), (typeof N > "u" ? "undefined" : k(N)) === "object" ? (K = N, I = M) : typeof N == "string" && (M != null ? K[N] = M : I = N), I = I || e.default.sources.API, [H, R, K, I];
        }
        function X(H, R, N, M) {
          if (H == null)
            return null;
          var I = void 0, K = void 0;
          if (R instanceof y.default) {
            var C = [H.index, H.index + H.length].map(function(G) {
              return R.transformPosition(G, M !== e.default.sources.USER);
            }), q = E(C, 2);
            I = q[0], K = q[1];
          } else {
            var F = [H.index, H.index + H.length].map(function(G) {
              return G < R || G === R && M === e.default.sources.USER ? G : N >= 0 ? G + N : Math.max(R, G + N);
            }), $ = E(F, 2);
            I = $[0], K = $[1];
          }
          return new i.Range(I, K - I);
        }
        v.expandConfig = j, v.overload = z, v.default = P;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = function() {
          function a(r, i) {
            for (var f = 0; f < i.length; f++) {
              var n = i[f];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, f) {
            return i && a(r.prototype, i), f && a(r, f), r;
          };
        }(), E = function a(r, i, f) {
          r === null && (r = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(r, i);
          if (n === void 0) {
            var c = Object.getPrototypeOf(r);
            return c === null ? void 0 : a(c, i, f);
          } else {
            if ("value" in n)
              return n.value;
            var T = n.get;
            return T === void 0 ? void 0 : T.call(f);
          }
        }, m = d(7), p = l(m), y = d(0), h = l(y);
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
          return k(r, [{
            key: "formatAt",
            value: function(f, n, c, T) {
              if (r.compare(this.statics.blotName, c) < 0 && h.default.query(c, h.default.Scope.BLOT)) {
                var b = this.isolate(f, n);
                T && b.wrap(c, T);
              } else
                E(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "formatAt", this).call(this, f, n, c, T);
            }
          }, {
            key: "optimize",
            value: function(f) {
              if (E(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "optimize", this).call(this, f), this.parent instanceof r && r.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                var n = this.parent.isolate(this.offset(), this.length());
                this.moveChildren(n), n.wrap(this);
              }
            }
          }], [{
            key: "compare",
            value: function(f, n) {
              var c = r.order.indexOf(f), T = r.order.indexOf(n);
              return c >= 0 || T >= 0 ? c - T : f === n ? 0 : f < n ? -1 : 1;
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
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = d(0), E = m(k);
        function m(t) {
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
        }(E.default.Text);
        v.default = l;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = function() {
          function i(f, n) {
            for (var c = 0; c < n.length; c++) {
              var T = n[c];
              T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(f, T.key, T);
            }
          }
          return function(f, n, c) {
            return n && i(f.prototype, n), c && i(f, c), f;
          };
        }(), E = function i(f, n, c) {
          f === null && (f = Function.prototype);
          var T = Object.getOwnPropertyDescriptor(f, n);
          if (T === void 0) {
            var b = Object.getPrototypeOf(f);
            return b === null ? void 0 : i(b, n, c);
          } else {
            if ("value" in T)
              return T.value;
            var w = T.get;
            return w === void 0 ? void 0 : w.call(c);
          }
        }, m = d(54), p = l(m), y = d(10), h = l(y);
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
            [].slice.call(document.querySelectorAll(".ql-container")).forEach(function(T) {
              if (T.__quill && T.__quill.emitter) {
                var b;
                (b = T.__quill.emitter).handleDOM.apply(b, n);
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
          return k(f, [{
            key: "emit",
            value: function() {
              o.log.apply(o, arguments), E(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "emit", this).apply(this, arguments);
            }
          }, {
            key: "handleDOM",
            value: function(c) {
              for (var T = arguments.length, b = Array(T > 1 ? T - 1 : 0), w = 1; w < T; w++)
                b[w - 1] = arguments[w];
              (this.listeners[c.type] || []).forEach(function(L) {
                var A = L.node, g = L.handler;
                (c.target === A || A.contains(c.target)) && g.apply(void 0, [c].concat(b));
              });
            }
          }, {
            key: "listenDOM",
            value: function(c, T, b) {
              this.listeners[c] || (this.listeners[c] = []), this.listeners[c].push({ node: T, handler: b });
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
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        function k(m, p) {
          if (!(m instanceof p))
            throw new TypeError("Cannot call a class as a function");
        }
        var E = function m(p) {
          var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          k(this, m), this.quill = p, this.options = y;
        };
        E.DEFAULTS = {}, v.default = E;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = ["error", "warn", "log", "info"], E = "warn";
        function m(y) {
          if (k.indexOf(y) <= k.indexOf(E)) {
            for (var h, l = arguments.length, t = Array(l > 1 ? l - 1 : 0), e = 1; e < l; e++)
              t[e - 1] = arguments[e];
            (h = console)[y].apply(h, t);
          }
        }
        function p(y) {
          return k.reduce(function(h, l) {
            return h[l] = m.bind(console, l, y), h;
          }, {});
        }
        m.level = p.level = function(y) {
          E = y;
        }, v.default = p;
      },
      function(x, v, d) {
        var k = Array.prototype.slice, E = d(52), m = d(53), p = x.exports = function(t, e, u) {
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
          if (m(t))
            return m(e) ? (t = k.call(t), e = k.call(e), p(t, e, u)) : !1;
          if (h(t)) {
            if (!h(e) || t.length !== e.length)
              return !1;
            for (o = 0; o < t.length; o++)
              if (t[o] !== e[o])
                return !1;
            return !0;
          }
          try {
            var r = E(t), i = E(e);
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
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", { value: !0 });
        var k = d(1), E = function() {
          function m(p, y, h) {
            h === void 0 && (h = {}), this.attrName = p, this.keyName = y;
            var l = k.Scope.TYPE & k.Scope.ATTRIBUTE;
            h.scope != null ? this.scope = h.scope & k.Scope.LEVEL | l : this.scope = k.Scope.ATTRIBUTE, h.whitelist != null && (this.whitelist = h.whitelist);
          }
          return m.keys = function(p) {
            return [].map.call(p.attributes, function(y) {
              return y.name;
            });
          }, m.prototype.add = function(p, y) {
            return this.canAdd(p, y) ? (p.setAttribute(this.keyName, y), !0) : !1;
          }, m.prototype.canAdd = function(p, y) {
            var h = k.query(p, k.Scope.BLOT & (this.scope | k.Scope.TYPE));
            return h == null ? !1 : this.whitelist == null ? !0 : typeof y == "string" ? this.whitelist.indexOf(y.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(y) > -1;
          }, m.prototype.remove = function(p) {
            p.removeAttribute(this.keyName);
          }, m.prototype.value = function(p) {
            var y = p.getAttribute(this.keyName);
            return this.canAdd(p, y) && y ? y : "";
          }, m;
        }();
        v.default = E;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.default = v.Code = void 0;
        var k = function() {
          function w(L, A) {
            var g = [], _ = !0, O = !1, P = void 0;
            try {
              for (var j = L[Symbol.iterator](), U; !(_ = (U = j.next()).done) && (g.push(U.value), !(A && g.length === A)); _ = !0)
                ;
            } catch (z) {
              O = !0, P = z;
            } finally {
              try {
                !_ && j.return && j.return();
              } finally {
                if (O)
                  throw P;
              }
            }
            return g;
          }
          return function(L, A) {
            if (Array.isArray(L))
              return L;
            if (Symbol.iterator in Object(L))
              return w(L, A);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), E = function() {
          function w(L, A) {
            for (var g = 0; g < A.length; g++) {
              var _ = A[g];
              _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(L, _.key, _);
            }
          }
          return function(L, A, g) {
            return A && w(L.prototype, A), g && w(L, g), L;
          };
        }(), m = function w(L, A, g) {
          L === null && (L = Function.prototype);
          var _ = Object.getOwnPropertyDescriptor(L, A);
          if (_ === void 0) {
            var O = Object.getPrototypeOf(L);
            return O === null ? void 0 : w(O, A, g);
          } else {
            if ("value" in _)
              return _.value;
            var P = _.get;
            return P === void 0 ? void 0 : P.call(g);
          }
        }, p = d(2), y = i(p), h = d(0), l = i(h), t = d(4), e = i(t), u = d(6), o = i(u), a = d(7), r = i(a);
        function i(w) {
          return w && w.__esModule ? w : { default: w };
        }
        function f(w, L) {
          if (!(w instanceof L))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(w, L) {
          if (!w)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return L && (typeof L == "object" || typeof L == "function") ? L : w;
        }
        function c(w, L) {
          if (typeof L != "function" && L !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof L);
          w.prototype = Object.create(L && L.prototype, { constructor: { value: w, enumerable: !1, writable: !0, configurable: !0 } }), L && (Object.setPrototypeOf ? Object.setPrototypeOf(w, L) : w.__proto__ = L);
        }
        var T = function(w) {
          c(L, w);
          function L() {
            return f(this, L), n(this, (L.__proto__ || Object.getPrototypeOf(L)).apply(this, arguments));
          }
          return L;
        }(o.default);
        T.blotName = "code", T.tagName = "CODE";
        var b = function(w) {
          c(L, w);
          function L() {
            return f(this, L), n(this, (L.__proto__ || Object.getPrototypeOf(L)).apply(this, arguments));
          }
          return E(L, [{
            key: "delta",
            value: function() {
              var g = this, _ = this.domNode.textContent;
              return _.endsWith(`
`) && (_ = _.slice(0, -1)), _.split(`
`).reduce(function(O, P) {
                return O.insert(P).insert(`
`, g.formats());
              }, new y.default());
            }
          }, {
            key: "format",
            value: function(g, _) {
              if (!(g === this.statics.blotName && _)) {
                var O = this.descendant(r.default, this.length() - 1), P = k(O, 1), j = P[0];
                j != null && j.deleteAt(j.length() - 1, 1), m(L.prototype.__proto__ || Object.getPrototypeOf(L.prototype), "format", this).call(this, g, _);
              }
            }
          }, {
            key: "formatAt",
            value: function(g, _, O, P) {
              if (_ !== 0 && !(l.default.query(O, l.default.Scope.BLOCK) == null || O === this.statics.blotName && P === this.statics.formats(this.domNode))) {
                var j = this.newlineIndex(g);
                if (!(j < 0 || j >= g + _)) {
                  var U = this.newlineIndex(g, !0) + 1, z = j - U + 1, X = this.isolate(U, z), H = X.next;
                  X.format(O, P), H instanceof L && H.formatAt(0, g - U + _ - z, O, P);
                }
              }
            }
          }, {
            key: "insertAt",
            value: function(g, _, O) {
              if (O == null) {
                var P = this.descendant(r.default, g), j = k(P, 2), U = j[0], z = j[1];
                U.insertAt(z, _);
              }
            }
          }, {
            key: "length",
            value: function() {
              var g = this.domNode.textContent.length;
              return this.domNode.textContent.endsWith(`
`) ? g : g + 1;
            }
          }, {
            key: "newlineIndex",
            value: function(g) {
              var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
              if (_)
                return this.domNode.textContent.slice(0, g).lastIndexOf(`
`);
              var O = this.domNode.textContent.slice(g).indexOf(`
`);
              return O > -1 ? g + O : -1;
            }
          }, {
            key: "optimize",
            value: function(g) {
              this.domNode.textContent.endsWith(`
`) || this.appendChild(l.default.create("text", `
`)), m(L.prototype.__proto__ || Object.getPrototypeOf(L.prototype), "optimize", this).call(this, g);
              var _ = this.next;
              _ != null && _.prev === this && _.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === _.statics.formats(_.domNode) && (_.optimize(g), _.moveChildren(this), _.remove());
            }
          }, {
            key: "replace",
            value: function(g) {
              m(L.prototype.__proto__ || Object.getPrototypeOf(L.prototype), "replace", this).call(this, g), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(_) {
                var O = l.default.find(_);
                O == null ? _.parentNode.removeChild(_) : O instanceof l.default.Embed ? O.remove() : O.unwrap();
              });
            }
          }], [{
            key: "create",
            value: function(g) {
              var _ = m(L.__proto__ || Object.getPrototypeOf(L), "create", this).call(this, g);
              return _.setAttribute("spellcheck", !1), _;
            }
          }, {
            key: "formats",
            value: function() {
              return !0;
            }
          }]), L;
        }(e.default);
        b.blotName = "code-block", b.tagName = "PRE", b.TAB = "  ", v.Code = T, v.default = b;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(H) {
          return typeof H;
        } : function(H) {
          return H && typeof Symbol == "function" && H.constructor === Symbol && H !== Symbol.prototype ? "symbol" : typeof H;
        }, E = function() {
          function H(R, N) {
            var M = [], I = !0, K = !1, C = void 0;
            try {
              for (var q = R[Symbol.iterator](), F; !(I = (F = q.next()).done) && (M.push(F.value), !(N && M.length === N)); I = !0)
                ;
            } catch ($) {
              K = !0, C = $;
            } finally {
              try {
                !I && q.return && q.return();
              } finally {
                if (K)
                  throw C;
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
        }(), m = function() {
          function H(R, N) {
            for (var M = 0; M < N.length; M++) {
              var I = N[M];
              I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(R, I.key, I);
            }
          }
          return function(R, N, M) {
            return N && H(R.prototype, N), M && H(R, M), R;
          };
        }(), p = d(2), y = _(p), h = d(20), l = _(h), t = d(0), e = _(t), u = d(13), o = _(u), a = d(24), r = _(a), i = d(4), f = _(i), n = d(16), c = _(n), T = d(21), b = _(T), w = d(11), L = _(w), A = d(3), g = _(A);
        function _(H) {
          return H && H.__esModule ? H : { default: H };
        }
        function O(H, R, N) {
          return R in H ? Object.defineProperty(H, R, { value: N, enumerable: !0, configurable: !0, writable: !0 }) : H[R] = N, H;
        }
        function P(H, R) {
          if (!(H instanceof R))
            throw new TypeError("Cannot call a class as a function");
        }
        var j = /^[ -~]*$/, U = function() {
          function H(R) {
            P(this, H), this.scroll = R, this.delta = this.getDelta();
          }
          return m(H, [{
            key: "applyDelta",
            value: function(N) {
              var M = this, I = !1;
              this.scroll.update();
              var K = this.scroll.length();
              return this.scroll.batchStart(), N = X(N), N.reduce(function(C, q) {
                var F = q.retain || q.delete || q.insert.length || 1, $ = q.attributes || {};
                if (q.insert != null) {
                  if (typeof q.insert == "string") {
                    var G = q.insert;
                    G.endsWith(`
`) && I && (I = !1, G = G.slice(0, -1)), C >= K && !G.endsWith(`
`) && (I = !0), M.scroll.insertAt(C, G);
                    var Q = M.scroll.line(C), nt = E(Q, 2), it = nt[0], lt = nt[1], ft = (0, g.default)({}, (0, i.bubbleFormats)(it));
                    if (it instanceof f.default) {
                      var ht = it.descendant(e.default.Leaf, lt), mt = E(ht, 1), gt = mt[0];
                      ft = (0, g.default)(ft, (0, i.bubbleFormats)(gt));
                    }
                    $ = l.default.attributes.diff(ft, $) || {};
                  } else if (k(q.insert) === "object") {
                    var Z = Object.keys(q.insert)[0];
                    if (Z == null)
                      return C;
                    M.scroll.insertAt(C, Z, q.insert[Z]);
                  }
                  K += F;
                }
                return Object.keys($).forEach(function(W) {
                  M.scroll.formatAt(C, F, W, $[W]);
                }), C + F;
              }, 0), N.reduce(function(C, q) {
                return typeof q.delete == "number" ? (M.scroll.deleteAt(C, q.delete), C) : C + (q.retain || q.insert.length || 1);
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
              return this.scroll.update(), Object.keys(K).forEach(function(C) {
                if (!(I.scroll.whitelist != null && !I.scroll.whitelist[C])) {
                  var q = I.scroll.lines(N, Math.max(M, 1)), F = M;
                  q.forEach(function($) {
                    var G = $.length();
                    if (!($ instanceof o.default))
                      $.format(C, K[C]);
                    else {
                      var Q = N - $.offset(I.scroll), nt = $.newlineIndex(Q + F) - Q + 1;
                      $.formatAt(Q, nt, C, K[C]);
                    }
                    F -= G;
                  });
                }
              }), this.scroll.optimize(), this.update(new y.default().retain(N).retain(M, (0, b.default)(K)));
            }
          }, {
            key: "formatText",
            value: function(N, M) {
              var I = this, K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              return Object.keys(K).forEach(function(C) {
                I.scroll.formatAt(N, M, C, K[C]);
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
                var F = E(q, 1), $ = F[0];
                $ instanceof f.default ? I.push($) : $ instanceof e.default.Leaf && K.push($);
              }) : (I = this.scroll.lines(N, M), K = this.scroll.descendants(e.default.Leaf, N, M));
              var C = [I, K].map(function(q) {
                if (q.length === 0)
                  return {};
                for (var F = (0, i.bubbleFormats)(q.shift()); Object.keys(F).length > 0; ) {
                  var $ = q.shift();
                  if ($ == null)
                    return F;
                  F = z((0, i.bubbleFormats)($), F);
                }
                return F;
              });
              return g.default.apply(g.default, C);
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
              return this.scroll.insertAt(N, M, I), this.update(new y.default().retain(N).insert(O({}, M, I)));
            }
          }, {
            key: "insertText",
            value: function(N, M) {
              var I = this, K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              return M = M.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(N, M), Object.keys(K).forEach(function(C) {
                I.scroll.formatAt(N, M.length, C, K[C]);
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
              var I = this.getText(N, M), K = this.scroll.line(N + M), C = E(K, 2), q = C[0], F = C[1], $ = 0, G = new y.default();
              q != null && (q instanceof o.default ? $ = q.newlineIndex(F) - F + 1 : $ = q.length() - F, G = q.delta().slice(F, F + $ - 1).insert(`
`));
              var Q = this.getContents(N, M + $), nt = Q.diff(new y.default().insert(I).concat(G)), it = new y.default().retain(N).concat(nt);
              return this.applyDelta(it);
            }
          }, {
            key: "update",
            value: function(N) {
              var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, K = this.delta;
              if (M.length === 1 && M[0].type === "characterData" && M[0].target.data.match(j) && e.default.find(M[0].target)) {
                var C = e.default.find(M[0].target), q = (0, i.bubbleFormats)(C), F = C.offset(this.scroll), $ = M[0].oldValue.replace(r.default.CONTENTS, ""), G = new y.default().insert($), Q = new y.default().insert(C.value()), nt = new y.default().retain(F).concat(G.diff(Q, I));
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
        function X(H) {
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
        v.default = U;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.default = v.Range = void 0;
        var k = function() {
          function w(L, A) {
            var g = [], _ = !0, O = !1, P = void 0;
            try {
              for (var j = L[Symbol.iterator](), U; !(_ = (U = j.next()).done) && (g.push(U.value), !(A && g.length === A)); _ = !0)
                ;
            } catch (z) {
              O = !0, P = z;
            } finally {
              try {
                !_ && j.return && j.return();
              } finally {
                if (O)
                  throw P;
              }
            }
            return g;
          }
          return function(L, A) {
            if (Array.isArray(L))
              return L;
            if (Symbol.iterator in Object(L))
              return w(L, A);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), E = function() {
          function w(L, A) {
            for (var g = 0; g < A.length; g++) {
              var _ = A[g];
              _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(L, _.key, _);
            }
          }
          return function(L, A, g) {
            return A && w(L.prototype, A), g && w(L, g), L;
          };
        }(), m = d(0), p = r(m), y = d(21), h = r(y), l = d(11), t = r(l), e = d(8), u = r(e), o = d(10), a = r(o);
        function r(w) {
          return w && w.__esModule ? w : { default: w };
        }
        function i(w) {
          if (Array.isArray(w)) {
            for (var L = 0, A = Array(w.length); L < w.length; L++)
              A[L] = w[L];
            return A;
          } else
            return Array.from(w);
        }
        function f(w, L) {
          if (!(w instanceof L))
            throw new TypeError("Cannot call a class as a function");
        }
        var n = (0, a.default)("quill:selection"), c = function w(L) {
          var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          f(this, w), this.index = L, this.length = A;
        }, T = function() {
          function w(L, A) {
            var g = this;
            f(this, w), this.emitter = A, this.scroll = L, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = p.default.create("cursor", this), this.lastRange = this.savedRange = new c(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function() {
              g.mouseDown || setTimeout(g.update.bind(g, u.default.sources.USER), 1);
            }), this.emitter.on(u.default.events.EDITOR_CHANGE, function(_, O) {
              _ === u.default.events.TEXT_CHANGE && O.length() > 0 && g.update(u.default.sources.SILENT);
            }), this.emitter.on(u.default.events.SCROLL_BEFORE_UPDATE, function() {
              if (!!g.hasFocus()) {
                var _ = g.getNativeRange();
                _ != null && _.start.node !== g.cursor.textNode && g.emitter.once(u.default.events.SCROLL_UPDATE, function() {
                  try {
                    g.setNativeRange(_.start.node, _.start.offset, _.end.node, _.end.offset);
                  } catch {
                  }
                });
              }
            }), this.emitter.on(u.default.events.SCROLL_OPTIMIZE, function(_, O) {
              if (O.range) {
                var P = O.range, j = P.startNode, U = P.startOffset, z = P.endNode, X = P.endOffset;
                g.setNativeRange(j, U, z, X);
              }
            }), this.update(u.default.sources.SILENT);
          }
          return E(w, [{
            key: "handleComposition",
            value: function() {
              var A = this;
              this.root.addEventListener("compositionstart", function() {
                A.composing = !0;
              }), this.root.addEventListener("compositionend", function() {
                if (A.composing = !1, A.cursor.parent) {
                  var g = A.cursor.restore();
                  if (!g)
                    return;
                  setTimeout(function() {
                    A.setNativeRange(g.startNode, g.startOffset, g.endNode, g.endOffset);
                  }, 1);
                }
              });
            }
          }, {
            key: "handleDragging",
            value: function() {
              var A = this;
              this.emitter.listenDOM("mousedown", document.body, function() {
                A.mouseDown = !0;
              }), this.emitter.listenDOM("mouseup", document.body, function() {
                A.mouseDown = !1, A.update(u.default.sources.USER);
              });
            }
          }, {
            key: "focus",
            value: function() {
              this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
            }
          }, {
            key: "format",
            value: function(A, g) {
              if (!(this.scroll.whitelist != null && !this.scroll.whitelist[A])) {
                this.scroll.update();
                var _ = this.getNativeRange();
                if (!(_ == null || !_.native.collapsed || p.default.query(A, p.default.Scope.BLOCK))) {
                  if (_.start.node !== this.cursor.textNode) {
                    var O = p.default.find(_.start.node, !1);
                    if (O == null)
                      return;
                    if (O instanceof p.default.Leaf) {
                      var P = O.split(_.start.offset);
                      O.parent.insertBefore(this.cursor, P);
                    } else
                      O.insertBefore(this.cursor, _.start.node);
                    this.cursor.attach();
                  }
                  this.cursor.format(A, g), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
                }
              }
            }
          }, {
            key: "getBounds",
            value: function(A) {
              var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, _ = this.scroll.length();
              A = Math.min(A, _ - 1), g = Math.min(A + g, _ - 1) - A;
              var O = void 0, P = this.scroll.leaf(A), j = k(P, 2), U = j[0], z = j[1];
              if (U == null)
                return null;
              var X = U.position(z, !0), H = k(X, 2);
              O = H[0], z = H[1];
              var R = document.createRange();
              if (g > 0) {
                R.setStart(O, z);
                var N = this.scroll.leaf(A + g), M = k(N, 2);
                if (U = M[0], z = M[1], U == null)
                  return null;
                var I = U.position(z, !0), K = k(I, 2);
                return O = K[0], z = K[1], R.setEnd(O, z), R.getBoundingClientRect();
              } else {
                var C = "left", q = void 0;
                return O instanceof Text ? (z < O.data.length ? (R.setStart(O, z), R.setEnd(O, z + 1)) : (R.setStart(O, z - 1), R.setEnd(O, z), C = "right"), q = R.getBoundingClientRect()) : (q = U.domNode.getBoundingClientRect(), z > 0 && (C = "right")), {
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
              var A = document.getSelection();
              if (A == null || A.rangeCount <= 0)
                return null;
              var g = A.getRangeAt(0);
              if (g == null)
                return null;
              var _ = this.normalizeNative(g);
              return n.info("getNativeRange", _), _;
            }
          }, {
            key: "getRange",
            value: function() {
              var A = this.getNativeRange();
              if (A == null)
                return [null, null];
              var g = this.normalizedToRange(A);
              return [g, A];
            }
          }, {
            key: "hasFocus",
            value: function() {
              return document.activeElement === this.root;
            }
          }, {
            key: "normalizedToRange",
            value: function(A) {
              var g = this, _ = [[A.start.node, A.start.offset]];
              A.native.collapsed || _.push([A.end.node, A.end.offset]);
              var O = _.map(function(U) {
                var z = k(U, 2), X = z[0], H = z[1], R = p.default.find(X, !0), N = R.offset(g.scroll);
                return H === 0 ? N : R instanceof p.default.Container ? N + R.length() : N + R.index(X, H);
              }), P = Math.min(Math.max.apply(Math, i(O)), this.scroll.length() - 1), j = Math.min.apply(Math, [P].concat(i(O)));
              return new c(j, P - j);
            }
          }, {
            key: "normalizeNative",
            value: function(A) {
              if (!b(this.root, A.startContainer) || !A.collapsed && !b(this.root, A.endContainer))
                return null;
              var g = {
                start: { node: A.startContainer, offset: A.startOffset },
                end: { node: A.endContainer, offset: A.endOffset },
                native: A
              };
              return [g.start, g.end].forEach(function(_) {
                for (var O = _.node, P = _.offset; !(O instanceof Text) && O.childNodes.length > 0; )
                  if (O.childNodes.length > P)
                    O = O.childNodes[P], P = 0;
                  else if (O.childNodes.length === P)
                    O = O.lastChild, P = O instanceof Text ? O.data.length : O.childNodes.length + 1;
                  else
                    break;
                _.node = O, _.offset = P;
              }), g;
            }
          }, {
            key: "rangeToNative",
            value: function(A) {
              var g = this, _ = A.collapsed ? [A.index] : [A.index, A.index + A.length], O = [], P = this.scroll.length();
              return _.forEach(function(j, U) {
                j = Math.min(P - 1, j);
                var z = void 0, X = g.scroll.leaf(j), H = k(X, 2), R = H[0], N = H[1], M = R.position(N, U !== 0), I = k(M, 2);
                z = I[0], N = I[1], O.push(z, N);
              }), O.length < 2 && (O = O.concat(O)), O;
            }
          }, {
            key: "scrollIntoView",
            value: function(A) {
              var g = this.lastRange;
              if (g != null) {
                var _ = this.getBounds(g.index, g.length);
                if (_ != null) {
                  var O = this.scroll.length() - 1, P = this.scroll.line(Math.min(g.index, O)), j = k(P, 1), U = j[0], z = U;
                  if (g.length > 0) {
                    var X = this.scroll.line(Math.min(g.index + g.length, O)), H = k(X, 1);
                    z = H[0];
                  }
                  if (!(U == null || z == null)) {
                    var R = A.getBoundingClientRect();
                    _.top < R.top ? A.scrollTop -= R.top - _.top : _.bottom > R.bottom && (A.scrollTop += _.bottom - R.bottom);
                  }
                }
              }
            }
          }, {
            key: "setNativeRange",
            value: function(A, g) {
              var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : A, O = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : g, P = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
              if (n.info("setNativeRange", A, g, _, O), !(A != null && (this.root.parentNode == null || A.parentNode == null || _.parentNode == null))) {
                var j = document.getSelection();
                if (j != null)
                  if (A != null) {
                    this.hasFocus() || this.root.focus();
                    var U = (this.getNativeRange() || {}).native;
                    if (U == null || P || A !== U.startContainer || g !== U.startOffset || _ !== U.endContainer || O !== U.endOffset) {
                      A.tagName == "BR" && (g = [].indexOf.call(A.parentNode.childNodes, A), A = A.parentNode), _.tagName == "BR" && (O = [].indexOf.call(_.parentNode.childNodes, _), _ = _.parentNode);
                      var z = document.createRange();
                      z.setStart(A, g), z.setEnd(_, O), j.removeAllRanges(), j.addRange(z);
                    }
                  } else
                    j.removeAllRanges(), this.root.blur(), document.body.focus();
              }
            }
          }, {
            key: "setRange",
            value: function(A) {
              var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : u.default.sources.API;
              if (typeof g == "string" && (_ = g, g = !1), n.info("setRange", A), A != null) {
                var O = this.rangeToNative(A);
                this.setNativeRange.apply(this, i(O).concat([g]));
              } else
                this.setNativeRange(null);
              this.update(_);
            }
          }, {
            key: "update",
            value: function() {
              var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u.default.sources.USER, g = this.lastRange, _ = this.getRange(), O = k(_, 2), P = O[0], j = O[1];
              if (this.lastRange = P, this.lastRange != null && (this.savedRange = this.lastRange), !(0, t.default)(g, this.lastRange)) {
                var U;
                !this.composing && j != null && j.native.collapsed && j.start.node !== this.cursor.textNode && this.cursor.restore();
                var z = [u.default.events.SELECTION_CHANGE, (0, h.default)(this.lastRange), (0, h.default)(g), A];
                if ((U = this.emitter).emit.apply(U, [u.default.events.EDITOR_CHANGE].concat(z)), A !== u.default.sources.SILENT) {
                  var X;
                  (X = this.emitter).emit.apply(X, z);
                }
              }
            }
          }]), w;
        }();
        function b(w, L) {
          try {
            L.parentNode;
          } catch {
            return !1;
          }
          return L instanceof Text && (L = L.parentNode), w.contains(L);
        }
        v.Range = c, v.default = T;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = function() {
          function u(o, a) {
            for (var r = 0; r < a.length; r++) {
              var i = a[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, i.key, i);
            }
          }
          return function(o, a, r) {
            return a && u(o.prototype, a), r && u(o, r), o;
          };
        }(), E = function u(o, a, r) {
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
        }, m = d(0), p = y(m);
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
          return k(o, [{
            key: "insertInto",
            value: function(r, i) {
              r.children.length === 0 ? E(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "insertInto", this).call(this, r, i) : this.remove();
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
      function(x, v, d) {
        var k = this && this.__extends || function() {
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
        var E = d(44), m = d(30), p = d(1), y = function(l) {
          k(t, l);
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
            this.children = new E.default(), [].slice.call(this.domNode.childNodes).reverse().forEach(function(u) {
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
        }(m.default);
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
      function(x, v, d) {
        var k = this && this.__extends || function() {
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
        var E = d(12), m = d(31), p = d(17), y = d(1), h = function(l) {
          k(t, l);
          function t(e) {
            var u = l.call(this, e) || this;
            return u.attributes = new m.default(u.domNode), u;
          }
          return t.formats = function(e) {
            if (typeof this.tagName == "string")
              return !0;
            if (Array.isArray(this.tagName))
              return e.tagName.toLowerCase();
          }, t.prototype.format = function(e, u) {
            var o = y.query(e);
            o instanceof E.default ? this.attributes.attribute(o, u) : u && o != null && (e !== this.statics.blotName || this.formats()[e] !== u) && this.replaceWith(e, u);
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
      function(x, v, d) {
        var k = this && this.__extends || function() {
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
        var E = d(30), m = d(1), p = function(y) {
          k(h, y);
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
          }, h.scope = m.Scope.INLINE_BLOT, h;
        }(E.default);
        v.default = p;
      },
      function(x, v, d) {
        var k = d(11), E = d(3), m = {
          attributes: {
            compose: function(y, h, l) {
              typeof y != "object" && (y = {}), typeof h != "object" && (h = {});
              var t = E(!0, {}, h);
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
                return k(y[e], h[e]) || (t[e] = h[e] === void 0 ? null : h[e]), t;
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
            var l = this.offset, t = m.length(h);
            if (y >= t - l ? (y = t - l, this.index += 1, this.offset = 0) : this.offset += y, typeof h.delete == "number")
              return { delete: y };
            var e = {};
            return h.attributes && (e.attributes = h.attributes), typeof h.retain == "number" ? e.retain = y : typeof h.insert == "string" ? e.insert = h.insert.substr(l, y) : e.insert = h.insert, e;
          } else
            return { retain: 1 / 0 };
        }, p.prototype.peek = function() {
          return this.ops[this.index];
        }, p.prototype.peekLength = function() {
          return this.ops[this.index] ? m.length(this.ops[this.index]) - this.offset : 1 / 0;
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
        }, x.exports = m;
      },
      function(x, v) {
        var d = function() {
          function k(o, a) {
            return a != null && o instanceof a;
          }
          var E;
          try {
            E = Map;
          } catch {
            E = function() {
            };
          }
          var m;
          try {
            m = Set;
          } catch {
            m = function() {
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
            var n = [], c = [], T = typeof Buffer < "u";
            typeof a > "u" && (a = !0), typeof r > "u" && (r = 1 / 0);
            function b(w, L) {
              if (w === null)
                return null;
              if (L === 0)
                return w;
              var A, g;
              if (typeof w != "object")
                return w;
              if (k(w, E))
                A = new E();
              else if (k(w, m))
                A = new m();
              else if (k(w, p))
                A = new p(function(R, N) {
                  w.then(function(M) {
                    R(b(M, L - 1));
                  }, function(M) {
                    N(b(M, L - 1));
                  });
                });
              else if (y.__isArray(w))
                A = [];
              else if (y.__isRegExp(w))
                A = new RegExp(w.source, u(w)), w.lastIndex && (A.lastIndex = w.lastIndex);
              else if (y.__isDate(w))
                A = new Date(w.getTime());
              else {
                if (T && Buffer.isBuffer(w))
                  return Buffer.allocUnsafe ? A = Buffer.allocUnsafe(w.length) : A = new Buffer(w.length), w.copy(A), A;
                k(w, Error) ? A = Object.create(w) : typeof i > "u" ? (g = Object.getPrototypeOf(w), A = Object.create(g)) : (A = Object.create(i), g = i);
              }
              if (a) {
                var _ = n.indexOf(w);
                if (_ != -1)
                  return c[_];
                n.push(w), c.push(A);
              }
              k(w, E) && w.forEach(function(R, N) {
                var M = b(N, L - 1), I = b(R, L - 1);
                A.set(M, I);
              }), k(w, m) && w.forEach(function(R) {
                var N = b(R, L - 1);
                A.add(N);
              });
              for (var O in w) {
                var P;
                g && (P = Object.getOwnPropertyDescriptor(g, O)), !(P && P.set == null) && (A[O] = b(w[O], L - 1));
              }
              if (Object.getOwnPropertySymbols)
                for (var j = Object.getOwnPropertySymbols(w), O = 0; O < j.length; O++) {
                  var U = j[O], z = Object.getOwnPropertyDescriptor(w, U);
                  z && !z.enumerable && !f || (A[U] = b(w[U], L - 1), z.enumerable || Object.defineProperty(A, U, {
                    enumerable: !1
                  }));
                }
              if (f)
                for (var X = Object.getOwnPropertyNames(w), O = 0; O < X.length; O++) {
                  var H = X[O], z = Object.getOwnPropertyDescriptor(w, H);
                  z && z.enumerable || (A[H] = b(w[H], L - 1), Object.defineProperty(A, H, {
                    enumerable: !1
                  }));
                }
              return A;
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
        typeof x == "object" && x.exports && (x.exports = d);
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = function() {
          function A(g, _) {
            var O = [], P = !0, j = !1, U = void 0;
            try {
              for (var z = g[Symbol.iterator](), X; !(P = (X = z.next()).done) && (O.push(X.value), !(_ && O.length === _)); P = !0)
                ;
            } catch (H) {
              j = !0, U = H;
            } finally {
              try {
                !P && z.return && z.return();
              } finally {
                if (j)
                  throw U;
              }
            }
            return O;
          }
          return function(g, _) {
            if (Array.isArray(g))
              return g;
            if (Symbol.iterator in Object(g))
              return A(g, _);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), E = function() {
          function A(g, _) {
            for (var O = 0; O < _.length; O++) {
              var P = _[O];
              P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(g, P.key, P);
            }
          }
          return function(g, _, O) {
            return _ && A(g.prototype, _), O && A(g, O), g;
          };
        }(), m = function A(g, _, O) {
          g === null && (g = Function.prototype);
          var P = Object.getOwnPropertyDescriptor(g, _);
          if (P === void 0) {
            var j = Object.getPrototypeOf(g);
            return j === null ? void 0 : A(j, _, O);
          } else {
            if ("value" in P)
              return P.value;
            var U = P.get;
            return U === void 0 ? void 0 : U.call(O);
          }
        }, p = d(0), y = n(p), h = d(8), l = n(h), t = d(4), e = n(t), u = d(16), o = n(u), a = d(13), r = n(a), i = d(25), f = n(i);
        function n(A) {
          return A && A.__esModule ? A : { default: A };
        }
        function c(A, g) {
          if (!(A instanceof g))
            throw new TypeError("Cannot call a class as a function");
        }
        function T(A, g) {
          if (!A)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return g && (typeof g == "object" || typeof g == "function") ? g : A;
        }
        function b(A, g) {
          if (typeof g != "function" && g !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof g);
          A.prototype = Object.create(g && g.prototype, { constructor: { value: A, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(A, g) : A.__proto__ = g);
        }
        function w(A) {
          return A instanceof e.default || A instanceof t.BlockEmbed;
        }
        var L = function(A) {
          b(g, A);
          function g(_, O) {
            c(this, g);
            var P = T(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this, _));
            return P.emitter = O.emitter, Array.isArray(O.whitelist) && (P.whitelist = O.whitelist.reduce(function(j, U) {
              return j[U] = !0, j;
            }, {})), P.domNode.addEventListener("DOMNodeInserted", function() {
            }), P.optimize(), P.enable(), P;
          }
          return E(g, [{
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
            value: function(O, P) {
              var j = this.line(O), U = k(j, 2), z = U[0], X = U[1], H = this.line(O + P), R = k(H, 1), N = R[0];
              if (m(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "deleteAt", this).call(this, O, P), N != null && z !== N && X > 0) {
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
              var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
              this.domNode.setAttribute("contenteditable", O);
            }
          }, {
            key: "formatAt",
            value: function(O, P, j, U) {
              this.whitelist != null && !this.whitelist[j] || (m(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "formatAt", this).call(this, O, P, j, U), this.optimize());
            }
          }, {
            key: "insertAt",
            value: function(O, P, j) {
              if (!(j != null && this.whitelist != null && !this.whitelist[P])) {
                if (O >= this.length())
                  if (j == null || y.default.query(P, y.default.Scope.BLOCK) == null) {
                    var U = y.default.create(this.statics.defaultChild);
                    this.appendChild(U), j == null && P.endsWith(`
`) && (P = P.slice(0, -1)), U.insertAt(0, P, j);
                  } else {
                    var z = y.default.create(P, j);
                    this.appendChild(z);
                  }
                else
                  m(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "insertAt", this).call(this, O, P, j);
                this.optimize();
              }
            }
          }, {
            key: "insertBefore",
            value: function(O, P) {
              if (O.statics.scope === y.default.Scope.INLINE_BLOT) {
                var j = y.default.create(this.statics.defaultChild);
                j.appendChild(O), O = j;
              }
              m(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "insertBefore", this).call(this, O, P);
            }
          }, {
            key: "leaf",
            value: function(O) {
              return this.path(O).pop() || [null, -1];
            }
          }, {
            key: "line",
            value: function(O) {
              return O === this.length() ? this.line(O - 1) : this.descendant(w, O);
            }
          }, {
            key: "lines",
            value: function() {
              var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, j = function U(z, X, H) {
                var R = [], N = H;
                return z.children.forEachAt(X, H, function(M, I, K) {
                  w(M) ? R.push(M) : M instanceof y.default.Container && (R = R.concat(U(M, I, N))), N -= K;
                }), R;
              };
              return j(this, O, P);
            }
          }, {
            key: "optimize",
            value: function() {
              var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              this.batch !== !0 && (m(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "optimize", this).call(this, O, P), O.length > 0 && this.emitter.emit(l.default.events.SCROLL_OPTIMIZE, O, P));
            }
          }, {
            key: "path",
            value: function(O) {
              return m(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "path", this).call(this, O).slice(1);
            }
          }, {
            key: "update",
            value: function(O) {
              if (this.batch !== !0) {
                var P = l.default.sources.USER;
                typeof O == "string" && (P = O), Array.isArray(O) || (O = this.observer.takeRecords()), O.length > 0 && this.emitter.emit(l.default.events.SCROLL_BEFORE_UPDATE, P, O), m(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "update", this).call(this, O.concat([])), O.length > 0 && this.emitter.emit(l.default.events.SCROLL_UPDATE, P, O);
              }
            }
          }]), g;
        }(y.default.Scroll);
        L.blotName = "scroll", L.className = "ql-editor", L.tagName = "DIV", L.defaultChild = "block", L.allowedChildren = [e.default, t.BlockEmbed, f.default], v.default = L;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.SHORTKEY = v.default = void 0;
        var k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(q) {
          return typeof q;
        } : function(q) {
          return q && typeof Symbol == "function" && q.constructor === Symbol && q !== Symbol.prototype ? "symbol" : typeof q;
        }, E = function() {
          function q(F, $) {
            var G = [], Q = !0, nt = !1, it = void 0;
            try {
              for (var lt = F[Symbol.iterator](), ft; !(Q = (ft = lt.next()).done) && (G.push(ft.value), !($ && G.length === $)); Q = !0)
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
          return function(F, $) {
            if (Array.isArray(F))
              return F;
            if (Symbol.iterator in Object(F))
              return q(F, $);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), m = function() {
          function q(F, $) {
            for (var G = 0; G < $.length; G++) {
              var Q = $[G];
              Q.enumerable = Q.enumerable || !1, Q.configurable = !0, "value" in Q && (Q.writable = !0), Object.defineProperty(F, Q.key, Q);
            }
          }
          return function(F, $, G) {
            return $ && q(F.prototype, $), G && q(F, G), F;
          };
        }(), p = d(21), y = A(p), h = d(11), l = A(h), t = d(3), e = A(t), u = d(2), o = A(u), a = d(20), r = A(a), i = d(0), f = A(i), n = d(5), c = A(n), T = d(10), b = A(T), w = d(9), L = A(w);
        function A(q) {
          return q && q.__esModule ? q : { default: q };
        }
        function g(q, F, $) {
          return F in q ? Object.defineProperty(q, F, { value: $, enumerable: !0, configurable: !0, writable: !0 }) : q[F] = $, q;
        }
        function _(q, F) {
          if (!(q instanceof F))
            throw new TypeError("Cannot call a class as a function");
        }
        function O(q, F) {
          if (!q)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return F && (typeof F == "object" || typeof F == "function") ? F : q;
        }
        function P(q, F) {
          if (typeof F != "function" && F !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof F);
          q.prototype = Object.create(F && F.prototype, { constructor: { value: q, enumerable: !1, writable: !0, configurable: !0 } }), F && (Object.setPrototypeOf ? Object.setPrototypeOf(q, F) : q.__proto__ = F);
        }
        var j = (0, b.default)("quill:keyboard"), U = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey", z = function(q) {
          P(F, q), m(F, null, [{
            key: "match",
            value: function(G, Q) {
              return Q = C(Q), ["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(nt) {
                return !!Q[nt] !== G[nt] && Q[nt] !== null;
              }) ? !1 : Q.key === (G.which || G.keyCode);
            }
          }]);
          function F($, G) {
            _(this, F);
            var Q = O(this, (F.__proto__ || Object.getPrototypeOf(F)).call(this, $, G));
            return Q.bindings = {}, Object.keys(Q.options.bindings).forEach(function(nt) {
              nt === "list autofill" && $.scroll.whitelist != null && !$.scroll.whitelist.list || Q.options.bindings[nt] && Q.addBinding(Q.options.bindings[nt]);
            }), Q.addBinding({ key: F.keys.ENTER, shiftKey: null }, M), Q.addBinding({ key: F.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function() {
            }), /Firefox/i.test(navigator.userAgent) ? (Q.addBinding({ key: F.keys.BACKSPACE }, { collapsed: !0 }, H), Q.addBinding({ key: F.keys.DELETE }, { collapsed: !0 }, R)) : (Q.addBinding({ key: F.keys.BACKSPACE }, { collapsed: !0, prefix: /^.?$/ }, H), Q.addBinding({ key: F.keys.DELETE }, { collapsed: !0, suffix: /^.?$/ }, R)), Q.addBinding({ key: F.keys.BACKSPACE }, { collapsed: !1 }, N), Q.addBinding({ key: F.keys.DELETE }, { collapsed: !1 }, N), Q.addBinding({ key: F.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: !0, offset: 0 }, H), Q.listen(), Q;
          }
          return m(F, [{
            key: "addBinding",
            value: function(G) {
              var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, nt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, it = C(G);
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
                    return F.match(Q, dt);
                  });
                  if (it.length !== 0) {
                    var lt = G.quill.getSelection();
                    if (!(lt == null || !G.quill.hasFocus())) {
                      var ft = G.quill.getLine(lt.index), ht = E(ft, 2), mt = ht[0], gt = ht[1], Z = G.quill.getLeaf(lt.index), W = E(Z, 2), tt = W[0], et = W[1], J = lt.length === 0 ? [tt, et] : G.quill.getLeaf(lt.index + lt.length), st = E(J, 2), ot = st[0], at = st[1], wt = tt instanceof f.default.Text ? tt.value().slice(0, et) : "", Ot = ot instanceof f.default.Text ? ot.value().slice(at) : "", vt = {
                        collapsed: lt.length === 0,
                        empty: lt.length === 0 && mt.length() <= 1,
                        format: G.quill.getFormat(lt),
                        offset: gt,
                        prefix: wt,
                        suffix: Ot
                      }, Zt = it.some(function(dt) {
                        if (dt.collapsed != null && dt.collapsed !== vt.collapsed || dt.empty != null && dt.empty !== vt.empty || dt.offset != null && dt.offset !== vt.offset)
                          return !1;
                        if (Array.isArray(dt.format)) {
                          if (dt.format.every(function(qt) {
                            return vt.format[qt] == null;
                          }))
                            return !1;
                        } else if (k(dt.format) === "object" && !Object.keys(dt.format).every(function(qt) {
                          return dt.format[qt] === !0 ? vt.format[qt] != null : dt.format[qt] === !1 ? vt.format[qt] == null : (0, l.default)(dt.format[qt], vt.format[qt]);
                        }))
                          return !1;
                        return dt.prefix != null && !dt.prefix.test(vt.prefix) || dt.suffix != null && !dt.suffix.test(vt.suffix) ? !1 : dt.handler.call(G, lt, vt) !== !0;
                      });
                      Zt && Q.preventDefault();
                    }
                  }
                }
              });
            }
          }]), F;
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
              handler: function(F, $) {
                if ($.collapsed && $.offset !== 0)
                  return !0;
                this.quill.format("indent", "+1", c.default.sources.USER);
              }
            },
            outdent: {
              key: z.keys.TAB,
              shiftKey: !0,
              format: ["blockquote", "indent", "list"],
              handler: function(F, $) {
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
              handler: function(F, $) {
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
              handler: function(F) {
                this.quill.deleteText(F.index - 1, 1, c.default.sources.USER);
              }
            },
            tab: {
              key: z.keys.TAB,
              handler: function(F) {
                this.quill.history.cutoff();
                var $ = new o.default().retain(F.index).delete(F.length).insert("	");
                this.quill.updateContents($, c.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(F.index + 1, c.default.sources.SILENT);
              }
            },
            "list empty enter": {
              key: z.keys.ENTER,
              collapsed: !0,
              format: ["list"],
              empty: !0,
              handler: function(F, $) {
                this.quill.format("list", !1, c.default.sources.USER), $.format.indent && this.quill.format("indent", !1, c.default.sources.USER);
              }
            },
            "checklist enter": {
              key: z.keys.ENTER,
              collapsed: !0,
              format: { list: "checked" },
              handler: function(F) {
                var $ = this.quill.getLine(F.index), G = E($, 2), Q = G[0], nt = G[1], it = (0, e.default)({}, Q.formats(), { list: "checked" }), lt = new o.default().retain(F.index).insert(`
`, it).retain(Q.length() - nt - 1).retain(1, { list: "unchecked" });
                this.quill.updateContents(lt, c.default.sources.USER), this.quill.setSelection(F.index + 1, c.default.sources.SILENT), this.quill.scrollIntoView();
              }
            },
            "header enter": {
              key: z.keys.ENTER,
              collapsed: !0,
              format: ["header"],
              suffix: /^$/,
              handler: function(F, $) {
                var G = this.quill.getLine(F.index), Q = E(G, 2), nt = Q[0], it = Q[1], lt = new o.default().retain(F.index).insert(`
`, $.format).retain(nt.length() - it - 1).retain(1, { header: null });
                this.quill.updateContents(lt, c.default.sources.USER), this.quill.setSelection(F.index + 1, c.default.sources.SILENT), this.quill.scrollIntoView();
              }
            },
            "list autofill": {
              key: " ",
              collapsed: !0,
              format: { list: !1 },
              prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
              handler: function(F, $) {
                var G = $.prefix.length, Q = this.quill.getLine(F.index), nt = E(Q, 2), it = nt[0], lt = nt[1];
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
                this.quill.insertText(F.index, " ", c.default.sources.USER), this.quill.history.cutoff();
                var ht = new o.default().retain(F.index - lt).delete(G + 1).retain(it.length() - 2 - lt).retain(1, { list: ft });
                this.quill.updateContents(ht, c.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(F.index - G, c.default.sources.SILENT);
              }
            },
            "code exit": {
              key: z.keys.ENTER,
              collapsed: !0,
              format: ["code-block"],
              prefix: /\n\n$/,
              suffix: /^\s+$/,
              handler: function(F) {
                var $ = this.quill.getLine(F.index), G = E($, 2), Q = G[0], nt = G[1], it = new o.default().retain(F.index + Q.length() - nt - 2).retain(1, { "code-block": null }).delete(1);
                this.quill.updateContents(it, c.default.sources.USER);
              }
            },
            "embed left": X(z.keys.LEFT, !1),
            "embed left shift": X(z.keys.LEFT, !0),
            "embed right": X(z.keys.RIGHT, !1),
            "embed right shift": X(z.keys.RIGHT, !0)
          }
        };
        function X(q, F) {
          var $, G = q === z.keys.LEFT ? "prefix" : "suffix";
          return $ = {
            key: q,
            shiftKey: F,
            altKey: null
          }, g($, G, /^$/), g($, "handler", function(nt) {
            var it = nt.index;
            q === z.keys.RIGHT && (it += nt.length + 1);
            var lt = this.quill.getLeaf(it), ft = E(lt, 1), ht = ft[0];
            return ht instanceof f.default.Embed ? (q === z.keys.LEFT ? F ? this.quill.setSelection(nt.index - 1, nt.length + 1, c.default.sources.USER) : this.quill.setSelection(nt.index - 1, c.default.sources.USER) : F ? this.quill.setSelection(nt.index, nt.length + 1, c.default.sources.USER) : this.quill.setSelection(nt.index + nt.length + 1, c.default.sources.USER), !1) : !0;
          }), $;
        }
        function H(q, F) {
          if (!(q.index === 0 || this.quill.getLength() <= 1)) {
            var $ = this.quill.getLine(q.index), G = E($, 1), Q = G[0], nt = {};
            if (F.offset === 0) {
              var it = this.quill.getLine(q.index - 1), lt = E(it, 1), ft = lt[0];
              if (ft != null && ft.length() > 1) {
                var ht = Q.formats(), mt = this.quill.getFormat(q.index - 1, 1);
                nt = r.default.attributes.diff(ht, mt) || {};
              }
            }
            var gt = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(F.prefix) ? 2 : 1;
            this.quill.deleteText(q.index - gt, gt, c.default.sources.USER), Object.keys(nt).length > 0 && this.quill.formatLine(q.index - gt, gt, nt, c.default.sources.USER), this.quill.focus();
          }
        }
        function R(q, F) {
          var $ = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(F.suffix) ? 2 : 1;
          if (!(q.index >= this.quill.getLength() - $)) {
            var G = {}, Q = 0, nt = this.quill.getLine(q.index), it = E(nt, 1), lt = it[0];
            if (F.offset >= lt.length() - 1) {
              var ft = this.quill.getLine(q.index + 1), ht = E(ft, 1), mt = ht[0];
              if (mt) {
                var gt = lt.formats(), Z = this.quill.getFormat(q.index, 1);
                G = r.default.attributes.diff(gt, Z) || {}, Q = mt.length();
              }
            }
            this.quill.deleteText(q.index, $, c.default.sources.USER), Object.keys(G).length > 0 && this.quill.formatLine(q.index + Q - 1, $, G, c.default.sources.USER);
          }
        }
        function N(q) {
          var F = this.quill.getLines(q), $ = {};
          if (F.length > 1) {
            var G = F[0].formats(), Q = F[F.length - 1].formats();
            $ = r.default.attributes.diff(Q, G) || {};
          }
          this.quill.deleteText(q, c.default.sources.USER), Object.keys($).length > 0 && this.quill.formatLine(q.index, 1, $, c.default.sources.USER), this.quill.setSelection(q.index, c.default.sources.SILENT), this.quill.focus();
        }
        function M(q, F) {
          var $ = this;
          q.length > 0 && this.quill.scroll.deleteAt(q.index, q.length);
          var G = Object.keys(F.format).reduce(function(Q, nt) {
            return f.default.query(nt, f.default.Scope.BLOCK) && !Array.isArray(F.format[nt]) && (Q[nt] = F.format[nt]), Q;
          }, {});
          this.quill.insertText(q.index, `
`, G, c.default.sources.USER), this.quill.setSelection(q.index + 1, c.default.sources.SILENT), this.quill.focus(), Object.keys(F.format).forEach(function(Q) {
            G[Q] == null && (Array.isArray(F.format[Q]) || Q !== "link" && $.quill.format(Q, F.format[Q], c.default.sources.USER));
          });
        }
        function I(q) {
          return {
            key: z.keys.TAB,
            shiftKey: !q,
            format: { "code-block": !0 },
            handler: function($) {
              var G = f.default.query("code-block"), Q = $.index, nt = $.length, it = this.quill.scroll.descendant(G, Q), lt = E(it, 2), ft = lt[0], ht = lt[1];
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
        function C(q) {
          if (typeof q == "string" || typeof q == "number")
            return C({ key: q });
          if ((typeof q > "u" ? "undefined" : k(q)) === "object" && (q = (0, y.default)(q, !1)), typeof q.key == "string")
            if (z.keys[q.key.toUpperCase()] != null)
              q.key = z.keys[q.key.toUpperCase()];
            else if (q.key.length === 1)
              q.key = q.key.toUpperCase().charCodeAt(0);
            else
              return null;
          return q.shortKey && (q[U] = q.shortKey, delete q.shortKey), q;
        }
        v.default = z, v.SHORTKEY = U;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = function() {
          function r(i, f) {
            var n = [], c = !0, T = !1, b = void 0;
            try {
              for (var w = i[Symbol.iterator](), L; !(c = (L = w.next()).done) && (n.push(L.value), !(f && n.length === f)); c = !0)
                ;
            } catch (A) {
              T = !0, b = A;
            } finally {
              try {
                !c && w.return && w.return();
              } finally {
                if (T)
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
        }(), E = function r(i, f, n) {
          i === null && (i = Function.prototype);
          var c = Object.getOwnPropertyDescriptor(i, f);
          if (c === void 0) {
            var T = Object.getPrototypeOf(i);
            return T === null ? void 0 : r(T, f, n);
          } else {
            if ("value" in c)
              return c.value;
            var b = c.get;
            return b === void 0 ? void 0 : b.call(n);
          }
        }, m = function() {
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
          o(i, r), m(i, null, [{
            key: "value",
            value: function() {
            }
          }]);
          function i(f, n) {
            e(this, i);
            var c = u(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, f));
            return c.selection = n, c.textNode = document.createTextNode(i.CONTENTS), c.domNode.appendChild(c.textNode), c._length = 0, c;
          }
          return m(i, [{
            key: "detach",
            value: function() {
              this.parent != null && this.parent.removeChild(this);
            }
          }, {
            key: "format",
            value: function(n, c) {
              if (this._length !== 0)
                return E(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "format", this).call(this, n, c);
              for (var T = this, b = 0; T != null && T.statics.scope !== y.default.Scope.BLOCK_BLOT; )
                b += T.offset(T.parent), T = T.parent;
              T != null && (this._length = i.CONTENTS.length, T.optimize(), T.formatAt(b, i.CONTENTS.length, n, c), this._length = 0);
            }
          }, {
            key: "index",
            value: function(n, c) {
              return n === this.textNode ? 0 : E(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "index", this).call(this, n, c);
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
              E(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "remove", this).call(this), this.parent = null;
            }
          }, {
            key: "restore",
            value: function() {
              if (!(this.selection.composing || this.parent == null)) {
                var n = this.textNode, c = this.selection.getNativeRange(), T = void 0, b = void 0, w = void 0;
                if (c != null && c.start.node === n && c.end.node === n) {
                  var L = [n, c.start.offset, c.end.offset];
                  T = L[0], b = L[1], w = L[2];
                }
                for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
                  this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                if (this.textNode.data !== i.CONTENTS) {
                  var A = this.textNode.data.split(i.CONTENTS).join("");
                  this.next instanceof l.default ? (T = this.next.domNode, this.next.insertAt(0, A), this.textNode.data = i.CONTENTS) : (this.textNode.data = A, this.parent.insertBefore(y.default.create(this.textNode), this), this.textNode = document.createTextNode(i.CONTENTS), this.domNode.appendChild(this.textNode));
                }
                if (this.remove(), b != null) {
                  var g = [b, w].map(function(O) {
                    return Math.max(0, Math.min(T.data.length, O - 1));
                  }), _ = k(g, 2);
                  return b = _[0], w = _[1], {
                    startNode: T,
                    startOffset: b,
                    endNode: T,
                    endOffset: w
                  };
                }
              }
            }
          }, {
            key: "update",
            value: function(n, c) {
              var T = this;
              if (n.some(function(w) {
                return w.type === "characterData" && w.target === T.textNode;
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
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = d(0), E = y(k), m = d(4), p = y(m);
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
        }(E.default.Container);
        e.allowedChildren = [p.default, m.BlockEmbed, e], v.default = e;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.ColorStyle = v.ColorClass = v.ColorAttributor = void 0;
        var k = function() {
          function a(r, i) {
            for (var f = 0; f < i.length; f++) {
              var n = i[f];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, f) {
            return i && a(r.prototype, i), f && a(r, f), r;
          };
        }(), E = function a(r, i, f) {
          r === null && (r = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(r, i);
          if (n === void 0) {
            var c = Object.getPrototypeOf(r);
            return c === null ? void 0 : a(c, i, f);
          } else {
            if ("value" in n)
              return n.value;
            var T = n.get;
            return T === void 0 ? void 0 : T.call(f);
          }
        }, m = d(0), p = y(m);
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
          return k(r, [{
            key: "value",
            value: function(f) {
              var n = E(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "value", this).call(this, f);
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
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.sanitize = v.default = void 0;
        var k = function() {
          function o(a, r) {
            for (var i = 0; i < r.length; i++) {
              var f = r[i];
              f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(a, f.key, f);
            }
          }
          return function(a, r, i) {
            return r && o(a.prototype, r), i && o(a, i), a;
          };
        }(), E = function o(a, r, i) {
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
        }, m = d(6), p = y(m);
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
          return k(a, [{
            key: "format",
            value: function(i, f) {
              if (i !== this.statics.blotName || !f)
                return E(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "format", this).call(this, i, f);
              f = this.constructor.sanitize(f), this.domNode.setAttribute("href", f);
            }
          }], [{
            key: "create",
            value: function(i) {
              var f = E(a.__proto__ || Object.getPrototypeOf(a), "create", this).call(this, i);
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
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
          return typeof a;
        } : function(a) {
          return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
        }, E = function() {
          function a(r, i) {
            for (var f = 0; f < i.length; f++) {
              var n = i[f];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, f) {
            return i && a(r.prototype, i), f && a(r, f), r;
          };
        }(), m = d(23), p = l(m), y = d(107), h = l(y);
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
          return E(a, [{
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
                else if ((typeof Event > "u" ? "undefined" : k(Event)) === "object") {
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
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = d(0), E = j(k), m = d(5), p = j(m), y = d(4), h = j(y), l = d(16), t = j(l), e = d(25), u = j(e), o = d(24), a = j(o), r = d(35), i = j(r), f = d(6), n = j(f), c = d(22), T = j(c), b = d(7), w = j(b), L = d(55), A = j(L), g = d(42), _ = j(g), O = d(23), P = j(O);
        function j(U) {
          return U && U.__esModule ? U : { default: U };
        }
        p.default.register({
          "blots/block": h.default,
          "blots/block/embed": y.BlockEmbed,
          "blots/break": t.default,
          "blots/container": u.default,
          "blots/cursor": a.default,
          "blots/embed": i.default,
          "blots/inline": n.default,
          "blots/scroll": T.default,
          "blots/text": w.default,
          "modules/clipboard": A.default,
          "modules/history": _.default,
          "modules/keyboard": P.default
        }), E.default.register(h.default, t.default, a.default, n.default, T.default, w.default), v.default = p.default;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", { value: !0 });
        var k = d(1), E = function() {
          function m(p) {
            this.domNode = p, this.domNode[k.DATA_KEY] = { blot: this };
          }
          return Object.defineProperty(m.prototype, "statics", {
            get: function() {
              return this.constructor;
            },
            enumerable: !0,
            configurable: !0
          }), m.create = function(p) {
            if (this.tagName == null)
              throw new k.ParchmentError("Blot definition missing tagName");
            var y;
            return Array.isArray(this.tagName) ? (typeof p == "string" && (p = p.toUpperCase(), parseInt(p).toString() === p && (p = parseInt(p))), typeof p == "number" ? y = document.createElement(this.tagName[p - 1]) : this.tagName.indexOf(p) > -1 ? y = document.createElement(p) : y = document.createElement(this.tagName[0])) : y = document.createElement(this.tagName), this.className && y.classList.add(this.className), y;
          }, m.prototype.attach = function() {
            this.parent != null && (this.scroll = this.parent.scroll);
          }, m.prototype.clone = function() {
            var p = this.domNode.cloneNode(!1);
            return k.create(p);
          }, m.prototype.detach = function() {
            this.parent != null && this.parent.removeChild(this), delete this.domNode[k.DATA_KEY];
          }, m.prototype.deleteAt = function(p, y) {
            var h = this.isolate(p, y);
            h.remove();
          }, m.prototype.formatAt = function(p, y, h, l) {
            var t = this.isolate(p, y);
            if (k.query(h, k.Scope.BLOT) != null && l)
              t.wrap(h, l);
            else if (k.query(h, k.Scope.ATTRIBUTE) != null) {
              var e = k.create(this.statics.scope);
              t.wrap(e), e.format(h, l);
            }
          }, m.prototype.insertAt = function(p, y, h) {
            var l = h == null ? k.create("text", y) : k.create(y, h), t = this.split(p);
            this.parent.insertBefore(l, t);
          }, m.prototype.insertInto = function(p, y) {
            y === void 0 && (y = null), this.parent != null && this.parent.children.remove(this);
            var h = null;
            p.children.insertBefore(this, y), y != null && (h = y.domNode), (this.domNode.parentNode != p.domNode || this.domNode.nextSibling != h) && p.domNode.insertBefore(this.domNode, h), this.parent = p, this.attach();
          }, m.prototype.isolate = function(p, y) {
            var h = this.split(p);
            return h.split(y), h;
          }, m.prototype.length = function() {
            return 1;
          }, m.prototype.offset = function(p) {
            return p === void 0 && (p = this.parent), this.parent == null || this == p ? 0 : this.parent.children.offset(this) + this.parent.offset(p);
          }, m.prototype.optimize = function(p) {
            this.domNode[k.DATA_KEY] != null && delete this.domNode[k.DATA_KEY].mutations;
          }, m.prototype.remove = function() {
            this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
          }, m.prototype.replace = function(p) {
            p.parent != null && (p.parent.insertBefore(this, p.next), p.remove());
          }, m.prototype.replaceWith = function(p, y) {
            var h = typeof p == "string" ? k.create(p, y) : p;
            return h.replace(this), h;
          }, m.prototype.split = function(p, y) {
            return p === 0 ? this : this.next;
          }, m.prototype.update = function(p, y) {
          }, m.prototype.wrap = function(p, y) {
            var h = typeof p == "string" ? k.create(p, y) : p;
            return this.parent != null && this.parent.insertBefore(h, this.next), h.appendChild(this), h;
          }, m.blotName = "abstract", m;
        }();
        v.default = E;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", { value: !0 });
        var k = d(12), E = d(32), m = d(33), p = d(1), y = function() {
          function h(l) {
            this.attributes = {}, this.domNode = l, this.build();
          }
          return h.prototype.attribute = function(l, t) {
            t ? l.add(this.domNode, t) && (l.value(this.domNode) != null ? this.attributes[l.attrName] = l : delete this.attributes[l.attrName]) : (l.remove(this.domNode), delete this.attributes[l.attrName]);
          }, h.prototype.build = function() {
            var l = this;
            this.attributes = {};
            var t = k.default.keys(this.domNode), e = E.default.keys(this.domNode), u = m.default.keys(this.domNode);
            t.concat(e).concat(u).forEach(function(o) {
              var a = p.query(o, p.Scope.ATTRIBUTE);
              a instanceof k.default && (l.attributes[a.attrName] = a);
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
      function(x, v, d) {
        var k = this && this.__extends || function() {
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
        var E = d(12);
        function m(y, h) {
          var l = y.getAttribute("class") || "";
          return l.split(/\s+/).filter(function(t) {
            return t.indexOf(h + "-") === 0;
          });
        }
        var p = function(y) {
          k(h, y);
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
            var t = m(l, this.keyName);
            t.forEach(function(e) {
              l.classList.remove(e);
            }), l.classList.length === 0 && l.removeAttribute("class");
          }, h.prototype.value = function(l) {
            var t = m(l, this.keyName)[0] || "", e = t.slice(this.keyName.length + 1);
            return this.canAdd(l, e) ? e : "";
          }, h;
        }(E.default);
        v.default = p;
      },
      function(x, v, d) {
        var k = this && this.__extends || function() {
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
        var E = d(12);
        function m(y) {
          var h = y.split("-"), l = h.slice(1).map(function(t) {
            return t[0].toUpperCase() + t.slice(1);
          }).join("");
          return h[0] + l;
        }
        var p = function(y) {
          k(h, y);
          function h() {
            return y !== null && y.apply(this, arguments) || this;
          }
          return h.keys = function(l) {
            return (l.getAttribute("style") || "").split(";").map(function(t) {
              var e = t.split(":");
              return e[0].trim();
            });
          }, h.prototype.add = function(l, t) {
            return this.canAdd(l, t) ? (l.style[m(this.keyName)] = t, !0) : !1;
          }, h.prototype.remove = function(l) {
            l.style[m(this.keyName)] = "", l.getAttribute("style") || l.removeAttribute("style");
          }, h.prototype.value = function(l) {
            var t = l.style[m(this.keyName)];
            return this.canAdd(l, t) ? t : "";
          }, h;
        }(E.default);
        v.default = p;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = function() {
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
        function E(p, y) {
          if (!(p instanceof y))
            throw new TypeError("Cannot call a class as a function");
        }
        var m = function() {
          function p(y, h) {
            E(this, p), this.quill = y, this.options = h, this.modules = {};
          }
          return k(p, [{
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
        m.DEFAULTS = {
          modules: {}
        }, m.themes = {
          default: m
        }, v.default = m;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = function() {
          function r(i, f) {
            for (var n = 0; n < f.length; n++) {
              var c = f[n];
              c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(i, c.key, c);
            }
          }
          return function(i, f, n) {
            return f && r(i.prototype, f), n && r(i, n), i;
          };
        }(), E = function r(i, f, n) {
          i === null && (i = Function.prototype);
          var c = Object.getOwnPropertyDescriptor(i, f);
          if (c === void 0) {
            var T = Object.getPrototypeOf(i);
            return T === null ? void 0 : r(T, f, n);
          } else {
            if ("value" in c)
              return c.value;
            var b = c.get;
            return b === void 0 ? void 0 : b.call(n);
          }
        }, m = d(0), p = l(m), y = d(7), h = l(y);
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
          return k(i, [{
            key: "index",
            value: function(n, c) {
              return n === this.leftGuard ? 0 : n === this.rightGuard ? 1 : E(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "index", this).call(this, n, c);
            }
          }, {
            key: "restore",
            value: function(n) {
              var c = void 0, T = void 0, b = n.data.split(o).join("");
              if (n === this.leftGuard)
                if (this.prev instanceof h.default) {
                  var w = this.prev.length();
                  this.prev.insertAt(w, b), c = {
                    startNode: this.prev.domNode,
                    startOffset: w + b.length
                  };
                } else
                  T = document.createTextNode(b), this.parent.insertBefore(p.default.create(T), this), c = {
                    startNode: T,
                    startOffset: b.length
                  };
              else
                n === this.rightGuard && (this.next instanceof h.default ? (this.next.insertAt(0, b), c = {
                  startNode: this.next.domNode,
                  startOffset: b.length
                }) : (T = document.createTextNode(b), this.parent.insertBefore(p.default.create(T), this.next), c = {
                  startNode: T,
                  startOffset: b.length
                }));
              return n.data = o, c;
            }
          }, {
            key: "update",
            value: function(n, c) {
              var T = this;
              n.forEach(function(b) {
                if (b.type === "characterData" && (b.target === T.leftGuard || b.target === T.rightGuard)) {
                  var w = T.restore(b.target);
                  w && (c.range = w);
                }
              });
            }
          }]), i;
        }(p.default.Embed);
        v.default = a;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.AlignStyle = v.AlignClass = v.AlignAttribute = void 0;
        var k = d(0), E = m(k);
        function m(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var p = {
          scope: E.default.Scope.BLOCK,
          whitelist: ["right", "center", "justify"]
        }, y = new E.default.Attributor.Attribute("align", "align", p), h = new E.default.Attributor.Class("align", "ql-align", p), l = new E.default.Attributor.Style("align", "text-align", p);
        v.AlignAttribute = y, v.AlignClass = h, v.AlignStyle = l;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.BackgroundStyle = v.BackgroundClass = void 0;
        var k = d(0), E = p(k), m = d(26);
        function p(l) {
          return l && l.__esModule ? l : { default: l };
        }
        var y = new E.default.Attributor.Class("background", "ql-bg", {
          scope: E.default.Scope.INLINE
        }), h = new m.ColorAttributor("background", "background-color", {
          scope: E.default.Scope.INLINE
        });
        v.BackgroundClass = y, v.BackgroundStyle = h;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.DirectionStyle = v.DirectionClass = v.DirectionAttribute = void 0;
        var k = d(0), E = m(k);
        function m(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var p = {
          scope: E.default.Scope.BLOCK,
          whitelist: ["rtl"]
        }, y = new E.default.Attributor.Attribute("direction", "dir", p), h = new E.default.Attributor.Class("direction", "ql-direction", p), l = new E.default.Attributor.Style("direction", "direction", p);
        v.DirectionAttribute = y, v.DirectionClass = h, v.DirectionStyle = l;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.FontClass = v.FontStyle = void 0;
        var k = function() {
          function r(i, f) {
            for (var n = 0; n < f.length; n++) {
              var c = f[n];
              c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(i, c.key, c);
            }
          }
          return function(i, f, n) {
            return f && r(i.prototype, f), n && r(i, n), i;
          };
        }(), E = function r(i, f, n) {
          i === null && (i = Function.prototype);
          var c = Object.getOwnPropertyDescriptor(i, f);
          if (c === void 0) {
            var T = Object.getPrototypeOf(i);
            return T === null ? void 0 : r(T, f, n);
          } else {
            if ("value" in c)
              return c.value;
            var b = c.get;
            return b === void 0 ? void 0 : b.call(n);
          }
        }, m = d(0), p = y(m);
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
          return k(i, [{
            key: "value",
            value: function(n) {
              return E(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "value", this).call(this, n).replace(/["']/g, "");
            }
          }]), i;
        }(p.default.Attributor.Style), a = new o("font", "font-family", e);
        v.FontStyle = a, v.FontClass = u;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.SizeStyle = v.SizeClass = void 0;
        var k = d(0), E = m(k);
        function m(h) {
          return h && h.__esModule ? h : { default: h };
        }
        var p = new E.default.Attributor.Class("size", "ql-size", {
          scope: E.default.Scope.INLINE,
          whitelist: ["small", "large", "huge"]
        }), y = new E.default.Attributor.Style("size", "font-size", {
          scope: E.default.Scope.INLINE,
          whitelist: ["10px", "18px", "32px"]
        });
        v.SizeClass = p, v.SizeStyle = y;
      },
      function(x, v, d) {
        x.exports = {
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
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.getLastChangeIndex = v.default = void 0;
        var k = function() {
          function f(n, c) {
            for (var T = 0; T < c.length; T++) {
              var b = c[T];
              b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(n, b.key, b);
            }
          }
          return function(n, c, T) {
            return c && f(n.prototype, c), T && f(n, T), n;
          };
        }(), E = d(0), m = t(E), p = d(5), y = t(p), h = d(9), l = t(h);
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
          function n(c, T) {
            e(this, n);
            var b = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, c, T));
            return b.lastRecorded = 0, b.ignoreChange = !1, b.clear(), b.quill.on(y.default.events.EDITOR_CHANGE, function(w, L, A, g) {
              w !== y.default.events.TEXT_CHANGE || b.ignoreChange || (!b.options.userOnly || g === y.default.sources.USER ? b.record(L, A) : b.transform(L));
            }), b.quill.keyboard.addBinding({ key: "Z", shortKey: !0 }, b.undo.bind(b)), b.quill.keyboard.addBinding({ key: "Z", shortKey: !0, shiftKey: !0 }, b.redo.bind(b)), /Win/i.test(navigator.platform) && b.quill.keyboard.addBinding({ key: "Y", shortKey: !0 }, b.redo.bind(b)), b;
          }
          return k(n, [{
            key: "change",
            value: function(T, b) {
              if (this.stack[T].length !== 0) {
                var w = this.stack[T].pop();
                this.stack[b].push(w), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(w[T], y.default.sources.USER), this.ignoreChange = !1;
                var L = i(w[T]);
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
            value: function(T, b) {
              if (T.ops.length !== 0) {
                this.stack.redo = [];
                var w = this.quill.getContents().diff(b), L = Date.now();
                if (this.lastRecorded + this.options.delay > L && this.stack.undo.length > 0) {
                  var A = this.stack.undo.pop();
                  w = w.compose(A.undo), T = A.redo.compose(T);
                } else
                  this.lastRecorded = L;
                this.stack.undo.push({
                  redo: T,
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
            value: function(T) {
              this.stack.undo.forEach(function(b) {
                b.undo = T.transform(b.undo, !0), b.redo = T.transform(b.redo, !0);
              }), this.stack.redo.forEach(function(b) {
                b.undo = T.transform(b.undo, !0), b.redo = T.transform(b.redo, !0);
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
            return m.default.query(c, m.default.Scope.BLOCK) != null;
          }) : !1;
        }
        function i(f) {
          var n = f.reduce(function(T, b) {
            return T += b.delete || 0, T;
          }, 0), c = f.length() - n;
          return r(f) && (c -= 1), c;
        }
        v.default = a, v.getLastChangeIndex = i;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.default = v.BaseTooltip = void 0;
        var k = function() {
          function M(I, K) {
            for (var C = 0; C < K.length; C++) {
              var q = K[C];
              q.enumerable = q.enumerable || !1, q.configurable = !0, "value" in q && (q.writable = !0), Object.defineProperty(I, q.key, q);
            }
          }
          return function(I, K, C) {
            return K && M(I.prototype, K), C && M(I, C), I;
          };
        }(), E = function M(I, K, C) {
          I === null && (I = Function.prototype);
          var q = Object.getOwnPropertyDescriptor(I, K);
          if (q === void 0) {
            var F = Object.getPrototypeOf(I);
            return F === null ? void 0 : M(F, K, C);
          } else {
            if ("value" in q)
              return q.value;
            var $ = q.get;
            return $ === void 0 ? void 0 : $.call(C);
          }
        }, m = d(3), p = L(m), y = d(2), h = L(y), l = d(8), t = L(l), e = d(23), u = L(e), o = d(34), a = L(o), r = d(59), i = L(r), f = d(60), n = L(f), c = d(28), T = L(c), b = d(61), w = L(b);
        function L(M) {
          return M && M.__esModule ? M : { default: M };
        }
        function A(M, I) {
          if (!(M instanceof I))
            throw new TypeError("Cannot call a class as a function");
        }
        function g(M, I) {
          if (!M)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return I && (typeof I == "object" || typeof I == "function") ? I : M;
        }
        function _(M, I) {
          if (typeof I != "function" && I !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof I);
          M.prototype = Object.create(I && I.prototype, { constructor: { value: M, enumerable: !1, writable: !0, configurable: !0 } }), I && (Object.setPrototypeOf ? Object.setPrototypeOf(M, I) : M.__proto__ = I);
        }
        var O = [!1, "center", "right", "justify"], P = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], j = [!1, "serif", "monospace"], U = ["1", "2", "3", !1], z = ["small", !1, "large", "huge"], X = function(M) {
          _(I, M);
          function I(K, C) {
            A(this, I);
            var q = g(this, (I.__proto__ || Object.getPrototypeOf(I)).call(this, K, C)), F = function $(G) {
              if (!document.body.contains(K.root))
                return document.body.removeEventListener("click", $);
              q.tooltip != null && !q.tooltip.root.contains(G.target) && document.activeElement !== q.tooltip.textbox && !q.quill.hasFocus() && q.tooltip.hide(), q.pickers != null && q.pickers.forEach(function(Q) {
                Q.container.contains(G.target) || Q.close();
              });
            };
            return K.emitter.listenDOM("click", document.body, F), q;
          }
          return k(I, [{
            key: "addModule",
            value: function(C) {
              var q = E(I.prototype.__proto__ || Object.getPrototypeOf(I.prototype), "addModule", this).call(this, C);
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
                      var Q = F.value || "";
                      Q != null && q[G][Q] && (F.innerHTML = q[G][Q]);
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
                  return G.querySelector("option") == null && N(G, O), new n.default(G, q.align);
                if (G.classList.contains("ql-background") || G.classList.contains("ql-color")) {
                  var Q = G.classList.contains("ql-background") ? "background" : "color";
                  return G.querySelector("option") == null && N(G, P, Q === "background" ? "#ffffff" : "#000000"), new i.default(G, q[Q]);
                } else
                  return G.querySelector("option") == null && (G.classList.contains("ql-font") ? N(G, j) : G.classList.contains("ql-header") ? N(G, U) : G.classList.contains("ql-size") && N(G, z)), new T.default(G);
              });
              var $ = function() {
                F.pickers.forEach(function(Q) {
                  Q.update();
                });
              };
              this.quill.on(t.default.events.EDITOR_CHANGE, $);
            }
          }]), I;
        }(a.default);
        X.DEFAULTS = (0, p.default)(!0, {}, a.default.DEFAULTS, {
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
                      var C = new FileReader();
                      C.onload = function(q) {
                        var F = I.quill.getSelection(!0);
                        I.quill.updateContents(new h.default().retain(F.index).delete(F.length).insert({ image: q.target.result }), t.default.sources.USER), I.quill.setSelection(F.index + 1, t.default.sources.SILENT), K.value = "";
                      }, C.readAsDataURL(K.files[0]);
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
          function I(K, C) {
            A(this, I);
            var q = g(this, (I.__proto__ || Object.getPrototypeOf(I)).call(this, K, C));
            return q.textbox = q.root.querySelector('input[type="text"]'), q.listen(), q;
          }
          return k(I, [{
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
                  C = R(C);
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
        function R(M) {
          var I = M.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || M.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
          return I ? (I[1] || "https") + "://www.youtube.com/embed/" + I[2] + "?showinfo=0" : (I = M.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (I[1] || "https") + "://player.vimeo.com/video/" + I[2] + "/" : M;
        }
        function N(M, I) {
          var K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          I.forEach(function(C) {
            var q = document.createElement("option");
            C === K ? q.setAttribute("selected", "selected") : q.setAttribute("value", C), M.appendChild(q);
          });
        }
        v.BaseTooltip = H, v.default = X;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", { value: !0 });
        var k = function() {
          function E() {
            this.head = this.tail = null, this.length = 0;
          }
          return E.prototype.append = function() {
            for (var m = [], p = 0; p < arguments.length; p++)
              m[p] = arguments[p];
            this.insertBefore(m[0], null), m.length > 1 && this.append.apply(this, m.slice(1));
          }, E.prototype.contains = function(m) {
            for (var p, y = this.iterator(); p = y(); )
              if (p === m)
                return !0;
            return !1;
          }, E.prototype.insertBefore = function(m, p) {
            !m || (m.next = p, p != null ? (m.prev = p.prev, p.prev != null && (p.prev.next = m), p.prev = m, p === this.head && (this.head = m)) : this.tail != null ? (this.tail.next = m, m.prev = this.tail, this.tail = m) : (m.prev = null, this.head = this.tail = m), this.length += 1);
          }, E.prototype.offset = function(m) {
            for (var p = 0, y = this.head; y != null; ) {
              if (y === m)
                return p;
              p += y.length(), y = y.next;
            }
            return -1;
          }, E.prototype.remove = function(m) {
            !this.contains(m) || (m.prev != null && (m.prev.next = m.next), m.next != null && (m.next.prev = m.prev), m === this.head && (this.head = m.next), m === this.tail && (this.tail = m.prev), this.length -= 1);
          }, E.prototype.iterator = function(m) {
            return m === void 0 && (m = this.head), function() {
              var p = m;
              return m != null && (m = m.next), p;
            };
          }, E.prototype.find = function(m, p) {
            p === void 0 && (p = !1);
            for (var y, h = this.iterator(); y = h(); ) {
              var l = y.length();
              if (m < l || p && m === l && (y.next == null || y.next.length() !== 0))
                return [y, m];
              m -= l;
            }
            return [null, 0];
          }, E.prototype.forEach = function(m) {
            for (var p, y = this.iterator(); p = y(); )
              m(p);
          }, E.prototype.forEachAt = function(m, p, y) {
            if (!(p <= 0))
              for (var h = this.find(m), l = h[0], t = h[1], e, u = m - t, o = this.iterator(l); (e = o()) && u < m + p; ) {
                var a = e.length();
                m > u ? y(e, m - u, Math.min(p, u + a - m)) : y(e, 0, Math.min(a, m + p - u)), u += a;
              }
          }, E.prototype.map = function(m) {
            return this.reduce(function(p, y) {
              return p.push(m(y)), p;
            }, []);
          }, E.prototype.reduce = function(m, p) {
            for (var y, h = this.iterator(); y = h(); )
              p = m(p, y);
            return p;
          }, E;
        }();
        v.default = k;
      },
      function(x, v, d) {
        var k = this && this.__extends || function() {
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
        var E = d(17), m = d(1), p = {
          attributes: !0,
          characterData: !0,
          characterDataOldValue: !0,
          childList: !0,
          subtree: !0
        }, y = 100, h = function(l) {
          k(t, l);
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
            for (var r = function(c, T) {
              T === void 0 && (T = !0), !(c == null || c === o) && c.domNode.parentNode != null && (c.domNode[m.DATA_KEY].mutations == null && (c.domNode[m.DATA_KEY].mutations = []), T && r(c.parent));
            }, i = function(c) {
              c.domNode[m.DATA_KEY] == null || c.domNode[m.DATA_KEY].mutations == null || (c instanceof E.default && c.children.forEach(i), c.optimize(u));
            }, f = e, n = 0; f.length > 0; n += 1) {
              if (n >= y)
                throw new Error("[Parchment] Maximum optimize iterations reached");
              for (f.forEach(function(c) {
                var T = m.find(c.target, !0);
                T != null && (T.domNode === c.target && (c.type === "childList" ? (r(m.find(c.previousSibling, !1)), [].forEach.call(c.addedNodes, function(b) {
                  var w = m.find(b, !1);
                  r(w, !1), w instanceof E.default && w.children.forEach(function(L) {
                    r(L, !1);
                  });
                })) : c.type === "attributes" && r(T.prev)), r(T));
              }), this.children.forEach(i), f = [].slice.call(this.observer.takeRecords()), a = f.slice(); a.length > 0; )
                e.push(a.pop());
            }
          }, t.prototype.update = function(e, u) {
            var o = this;
            u === void 0 && (u = {}), e = e || this.observer.takeRecords(), e.map(function(a) {
              var r = m.find(a.target, !0);
              return r == null ? null : r.domNode[m.DATA_KEY].mutations == null ? (r.domNode[m.DATA_KEY].mutations = [a], r) : (r.domNode[m.DATA_KEY].mutations.push(a), null);
            }).forEach(function(a) {
              a == null || a === o || a.domNode[m.DATA_KEY] == null || a.update(a.domNode[m.DATA_KEY].mutations || [], u);
            }), this.domNode[m.DATA_KEY].mutations != null && l.prototype.update.call(this, this.domNode[m.DATA_KEY].mutations, u), this.optimize(e, u);
          }, t.blotName = "scroll", t.defaultChild = "block", t.scope = m.Scope.BLOCK_BLOT, t.tagName = "DIV", t;
        }(E.default);
        v.default = h;
      },
      function(x, v, d) {
        var k = this && this.__extends || function() {
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
        var E = d(18), m = d(1);
        function p(h, l) {
          if (Object.keys(h).length !== Object.keys(l).length)
            return !1;
          for (var t in h)
            if (h[t] !== l[t])
              return !1;
          return !0;
        }
        var y = function(h) {
          k(l, h);
          function l() {
            return h !== null && h.apply(this, arguments) || this;
          }
          return l.formats = function(t) {
            if (t.tagName !== l.tagName)
              return h.formats.call(this, t);
          }, l.prototype.format = function(t, e) {
            var u = this;
            t === this.statics.blotName && !e ? (this.children.forEach(function(o) {
              o instanceof E.default || (o = o.wrap(l.blotName, !0)), u.attributes.copy(o);
            }), this.unwrap()) : h.prototype.format.call(this, t, e);
          }, l.prototype.formatAt = function(t, e, u, o) {
            if (this.formats()[u] != null || m.query(u, m.Scope.ATTRIBUTE)) {
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
          }, l.blotName = "inline", l.scope = m.Scope.INLINE_BLOT, l.tagName = "SPAN", l;
        }(E.default);
        v.default = y;
      },
      function(x, v, d) {
        var k = this && this.__extends || function() {
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
        var E = d(18), m = d(1), p = function(y) {
          k(h, y);
          function h() {
            return y !== null && y.apply(this, arguments) || this;
          }
          return h.formats = function(l) {
            var t = m.query(h.blotName).tagName;
            if (l.tagName !== t)
              return y.formats.call(this, l);
          }, h.prototype.format = function(l, t) {
            m.query(l, m.Scope.BLOCK) != null && (l === this.statics.blotName && !t ? this.replaceWith(h.blotName) : y.prototype.format.call(this, l, t));
          }, h.prototype.formatAt = function(l, t, e, u) {
            m.query(e, m.Scope.BLOCK) != null ? this.format(e, u) : y.prototype.formatAt.call(this, l, t, e, u);
          }, h.prototype.insertAt = function(l, t, e) {
            if (e == null || m.query(t, m.Scope.INLINE) != null)
              y.prototype.insertAt.call(this, l, t, e);
            else {
              var u = this.split(l), o = m.create(t, e);
              u.parent.insertBefore(o, u);
            }
          }, h.prototype.update = function(l, t) {
            navigator.userAgent.match(/Trident/) ? this.build() : y.prototype.update.call(this, l, t);
          }, h.blotName = "block", h.scope = m.Scope.BLOCK_BLOT, h.tagName = "P", h;
        }(E.default);
        v.default = p;
      },
      function(x, v, d) {
        var k = this && this.__extends || function() {
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
        var E = d(19), m = function(p) {
          k(y, p);
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
        }(E.default);
        v.default = m;
      },
      function(x, v, d) {
        var k = this && this.__extends || function() {
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
        var E = d(19), m = d(1), p = function(y) {
          k(h, y);
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
            var e = m.create(this.domNode.splitText(l));
            return this.parent.insertBefore(e, this.next), this.text = this.statics.value(this.domNode), e;
          }, h.prototype.update = function(l, t) {
            var e = this;
            l.some(function(u) {
              return u.type === "characterData" && u.target === e.domNode;
            }) && (this.text = this.statics.value(this.domNode));
          }, h.prototype.value = function() {
            return this.text;
          }, h.blotName = "text", h.scope = m.Scope.INLINE_BLOT, h;
        }(E.default);
        v.default = p;
      },
      function(x, v, d) {
        var k = document.createElement("div");
        if (k.classList.toggle("test-class", !1), k.classList.contains("test-class")) {
          var E = DOMTokenList.prototype.toggle;
          DOMTokenList.prototype.toggle = function(m, p) {
            return arguments.length > 1 && !this.contains(m) == !p ? p : E.call(this, m);
          };
        }
        String.prototype.startsWith || (String.prototype.startsWith = function(m, p) {
          return p = p || 0, this.substr(p, m.length) === m;
        }), String.prototype.endsWith || (String.prototype.endsWith = function(m, p) {
          var y = this.toString();
          (typeof p != "number" || !isFinite(p) || Math.floor(p) !== p || p > y.length) && (p = y.length), p -= m.length;
          var h = y.indexOf(m, p);
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
      function(x, v) {
        var d = -1, k = 1, E = 0;
        function m(n, c, T) {
          if (n == c)
            return n ? [[E, n]] : [];
          (T < 0 || n.length < T) && (T = null);
          var b = l(n, c), w = n.substring(0, b);
          n = n.substring(b), c = c.substring(b), b = t(n, c);
          var L = n.substring(n.length - b);
          n = n.substring(0, n.length - b), c = c.substring(0, c.length - b);
          var A = p(n, c);
          return w && A.unshift([E, w]), L && A.push([E, L]), u(A), T != null && (A = r(A, T)), A = i(A), A;
        }
        function p(n, c) {
          var T;
          if (!n)
            return [[k, c]];
          if (!c)
            return [[d, n]];
          var b = n.length > c.length ? n : c, w = n.length > c.length ? c : n, L = b.indexOf(w);
          if (L != -1)
            return T = [
              [k, b.substring(0, L)],
              [E, w],
              [k, b.substring(L + w.length)]
            ], n.length > c.length && (T[0][0] = T[2][0] = d), T;
          if (w.length == 1)
            return [[d, n], [k, c]];
          var A = e(n, c);
          if (A) {
            var g = A[0], _ = A[1], O = A[2], P = A[3], j = A[4], U = m(g, O), z = m(_, P);
            return U.concat([[E, j]], z);
          }
          return y(n, c);
        }
        function y(n, c) {
          for (var T = n.length, b = c.length, w = Math.ceil((T + b) / 2), L = w, A = 2 * w, g = new Array(A), _ = new Array(A), O = 0; O < A; O++)
            g[O] = -1, _[O] = -1;
          g[L + 1] = 0, _[L + 1] = 0;
          for (var P = T - b, j = P % 2 != 0, U = 0, z = 0, X = 0, H = 0, R = 0; R < w; R++) {
            for (var N = -R + U; N <= R - z; N += 2) {
              var M = L + N, I;
              N == -R || N != R && g[M - 1] < g[M + 1] ? I = g[M + 1] : I = g[M - 1] + 1;
              for (var K = I - N; I < T && K < b && n.charAt(I) == c.charAt(K); )
                I++, K++;
              if (g[M] = I, I > T)
                z += 2;
              else if (K > b)
                U += 2;
              else if (j) {
                var C = L + P - N;
                if (C >= 0 && C < A && _[C] != -1) {
                  var q = T - _[C];
                  if (I >= q)
                    return h(n, c, I, K);
                }
              }
            }
            for (var F = -R + X; F <= R - H; F += 2) {
              var C = L + F, q;
              F == -R || F != R && _[C - 1] < _[C + 1] ? q = _[C + 1] : q = _[C - 1] + 1;
              for (var $ = q - F; q < T && $ < b && n.charAt(T - q - 1) == c.charAt(b - $ - 1); )
                q++, $++;
              if (_[C] = q, q > T)
                H += 2;
              else if ($ > b)
                X += 2;
              else if (!j) {
                var M = L + P - F;
                if (M >= 0 && M < A && g[M] != -1) {
                  var I = g[M], K = L + I - M;
                  if (q = T - q, I >= q)
                    return h(n, c, I, K);
                }
              }
            }
          }
          return [[d, n], [k, c]];
        }
        function h(n, c, T, b) {
          var w = n.substring(0, T), L = c.substring(0, b), A = n.substring(T), g = c.substring(b), _ = m(w, L), O = m(A, g);
          return _.concat(O);
        }
        function l(n, c) {
          if (!n || !c || n.charAt(0) != c.charAt(0))
            return 0;
          for (var T = 0, b = Math.min(n.length, c.length), w = b, L = 0; T < w; )
            n.substring(L, w) == c.substring(L, w) ? (T = w, L = T) : b = w, w = Math.floor((b - T) / 2 + T);
          return w;
        }
        function t(n, c) {
          if (!n || !c || n.charAt(n.length - 1) != c.charAt(c.length - 1))
            return 0;
          for (var T = 0, b = Math.min(n.length, c.length), w = b, L = 0; T < w; )
            n.substring(n.length - w, n.length - L) == c.substring(c.length - w, c.length - L) ? (T = w, L = T) : b = w, w = Math.floor((b - T) / 2 + T);
          return w;
        }
        function e(n, c) {
          var T = n.length > c.length ? n : c, b = n.length > c.length ? c : n;
          if (T.length < 4 || b.length * 2 < T.length)
            return null;
          function w(z, X, H) {
            for (var R = z.substring(H, H + Math.floor(z.length / 4)), N = -1, M = "", I, K, C, q; (N = X.indexOf(R, N + 1)) != -1; ) {
              var F = l(
                z.substring(H),
                X.substring(N)
              ), $ = t(
                z.substring(0, H),
                X.substring(0, N)
              );
              M.length < $ + F && (M = X.substring(N - $, N) + X.substring(N, N + F), I = z.substring(0, H - $), K = z.substring(H + F), C = X.substring(0, N - $), q = X.substring(N + F));
            }
            return M.length * 2 >= z.length ? [
              I,
              K,
              C,
              q,
              M
            ] : null;
          }
          var L = w(
            T,
            b,
            Math.ceil(T.length / 4)
          ), A = w(
            T,
            b,
            Math.ceil(T.length / 2)
          ), g;
          if (!L && !A)
            return null;
          A ? L ? g = L[4].length > A[4].length ? L : A : g = A : g = L;
          var _, O, P, j;
          n.length > c.length ? (_ = g[0], O = g[1], P = g[2], j = g[3]) : (P = g[0], j = g[1], _ = g[2], O = g[3]);
          var U = g[4];
          return [_, O, P, j, U];
        }
        function u(n) {
          n.push([E, ""]);
          for (var c = 0, T = 0, b = 0, w = "", L = "", A; c < n.length; )
            switch (n[c][0]) {
              case k:
                b++, L += n[c][1], c++;
                break;
              case d:
                T++, w += n[c][1], c++;
                break;
              case E:
                T + b > 1 ? (T !== 0 && b !== 0 && (A = l(L, w), A !== 0 && (c - T - b > 0 && n[c - T - b - 1][0] == E ? n[c - T - b - 1][1] += L.substring(0, A) : (n.splice(0, 0, [
                  E,
                  L.substring(0, A)
                ]), c++), L = L.substring(A), w = w.substring(A)), A = t(L, w), A !== 0 && (n[c][1] = L.substring(L.length - A) + n[c][1], L = L.substring(0, L.length - A), w = w.substring(0, w.length - A))), T === 0 ? n.splice(
                  c - b,
                  T + b,
                  [k, L]
                ) : b === 0 ? n.splice(
                  c - T,
                  T + b,
                  [d, w]
                ) : n.splice(
                  c - T - b,
                  T + b,
                  [d, w],
                  [k, L]
                ), c = c - T - b + (T ? 1 : 0) + (b ? 1 : 0) + 1) : c !== 0 && n[c - 1][0] == E ? (n[c - 1][1] += n[c][1], n.splice(c, 1)) : c++, b = 0, T = 0, w = "", L = "";
                break;
            }
          n[n.length - 1][1] === "" && n.pop();
          var g = !1;
          for (c = 1; c < n.length - 1; )
            n[c - 1][0] == E && n[c + 1][0] == E && (n[c][1].substring(n[c][1].length - n[c - 1][1].length) == n[c - 1][1] ? (n[c][1] = n[c - 1][1] + n[c][1].substring(0, n[c][1].length - n[c - 1][1].length), n[c + 1][1] = n[c - 1][1] + n[c + 1][1], n.splice(c - 1, 1), g = !0) : n[c][1].substring(0, n[c + 1][1].length) == n[c + 1][1] && (n[c - 1][1] += n[c + 1][1], n[c][1] = n[c][1].substring(n[c + 1][1].length) + n[c + 1][1], n.splice(c + 1, 1), g = !0)), c++;
          g && u(n);
        }
        var o = m;
        o.INSERT = k, o.DELETE = d, o.EQUAL = E, x.exports = o;
        function a(n, c) {
          if (c === 0)
            return [E, n];
          for (var T = 0, b = 0; b < n.length; b++) {
            var w = n[b];
            if (w[0] === d || w[0] === E) {
              var L = T + w[1].length;
              if (c === L)
                return [b + 1, n];
              if (c < L) {
                n = n.slice();
                var A = c - T, g = [w[0], w[1].slice(0, A)], _ = [w[0], w[1].slice(A)];
                return n.splice(b, 1, g, _), [b + 1, n];
              } else
                T = L;
            }
          }
          throw new Error("cursor_pos is out of bounds!");
        }
        function r(n, c) {
          var T = a(n, c), b = T[1], w = T[0], L = b[w], A = b[w + 1];
          if (L == null)
            return n;
          if (L[0] !== E)
            return n;
          if (A != null && L[1] + A[1] === A[1] + L[1])
            return b.splice(w, 2, A, L), f(b, w, 2);
          if (A != null && A[1].indexOf(L[1]) === 0) {
            b.splice(w, 2, [A[0], L[1]], [0, L[1]]);
            var g = A[1].slice(L[1].length);
            return g.length > 0 && b.splice(w + 2, 0, [A[0], g]), f(b, w, 3);
          } else
            return n;
        }
        function i(n) {
          for (var c = !1, T = function(A) {
            return A.charCodeAt(0) >= 56320 && A.charCodeAt(0) <= 57343;
          }, b = function(A) {
            return A.charCodeAt(A.length - 1) >= 55296 && A.charCodeAt(A.length - 1) <= 56319;
          }, w = 2; w < n.length; w += 1)
            n[w - 2][0] === E && b(n[w - 2][1]) && n[w - 1][0] === d && T(n[w - 1][1]) && n[w][0] === k && T(n[w][1]) && (c = !0, n[w - 1][1] = n[w - 2][1].slice(-1) + n[w - 1][1], n[w][1] = n[w - 2][1].slice(-1) + n[w][1], n[w - 2][1] = n[w - 2][1].slice(0, -1));
          if (!c)
            return n;
          for (var L = [], w = 0; w < n.length; w += 1)
            n[w][1].length > 0 && L.push(n[w]);
          return L;
        }
        function f(n, c, T) {
          for (var b = c + T - 1; b >= 0 && b >= c - 1; b--)
            if (b + 1 < n.length) {
              var w = n[b], L = n[b + 1];
              w[0] === L[1] && n.splice(b, 2, [w[0], w[1] + L[1]]);
            }
          return n;
        }
      },
      function(x, v) {
        v = x.exports = typeof Object.keys == "function" ? Object.keys : d, v.shim = d;
        function d(k) {
          var E = [];
          for (var m in k)
            E.push(m);
          return E;
        }
      },
      function(x, v) {
        var d = function() {
          return Object.prototype.toString.call(arguments);
        }() == "[object Arguments]";
        v = x.exports = d ? k : E, v.supported = k;
        function k(m) {
          return Object.prototype.toString.call(m) == "[object Arguments]";
        }
        v.unsupported = E;
        function E(m) {
          return m && typeof m == "object" && typeof m.length == "number" && Object.prototype.hasOwnProperty.call(m, "callee") && !Object.prototype.propertyIsEnumerable.call(m, "callee") || !1;
        }
      },
      function(x, v) {
        var d = Object.prototype.hasOwnProperty, k = "~";
        function E() {
        }
        Object.create && (E.prototype = /* @__PURE__ */ Object.create(null), new E().__proto__ || (k = !1));
        function m(y, h, l) {
          this.fn = y, this.context = h, this.once = l || !1;
        }
        function p() {
          this._events = new E(), this._eventsCount = 0;
        }
        p.prototype.eventNames = function() {
          var h = [], l, t;
          if (this._eventsCount === 0)
            return h;
          for (t in l = this._events)
            d.call(l, t) && h.push(k ? t.slice(1) : t);
          return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(l)) : h;
        }, p.prototype.listeners = function(h, l) {
          var t = k ? k + h : h, e = this._events[t];
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
          var a = k ? k + h : h;
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
            var c = r.length, T;
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
                    for (T = 1, f = new Array(i - 1); T < i; T++)
                      f[T - 1] = arguments[T];
                  r[n].fn.apply(r[n].context, f);
              }
          }
          return !0;
        }, p.prototype.on = function(h, l, t) {
          var e = new m(l, t || this), u = k ? k + h : h;
          return this._events[u] ? this._events[u].fn ? this._events[u] = [this._events[u], e] : this._events[u].push(e) : (this._events[u] = e, this._eventsCount++), this;
        }, p.prototype.once = function(h, l, t) {
          var e = new m(l, t || this, !0), u = k ? k + h : h;
          return this._events[u] ? this._events[u].fn ? this._events[u] = [this._events[u], e] : this._events[u].push(e) : (this._events[u] = e, this._eventsCount++), this;
        }, p.prototype.removeListener = function(h, l, t, e) {
          var u = k ? k + h : h;
          if (!this._events[u])
            return this;
          if (!l)
            return --this._eventsCount === 0 ? this._events = new E() : delete this._events[u], this;
          var o = this._events[u];
          if (o.fn)
            o.fn === l && (!e || o.once) && (!t || o.context === t) && (--this._eventsCount === 0 ? this._events = new E() : delete this._events[u]);
          else {
            for (var a = 0, r = [], i = o.length; a < i; a++)
              (o[a].fn !== l || e && !o[a].once || t && o[a].context !== t) && r.push(o[a]);
            r.length ? this._events[u] = r.length === 1 ? r[0] : r : --this._eventsCount === 0 ? this._events = new E() : delete this._events[u];
          }
          return this;
        }, p.prototype.removeAllListeners = function(h) {
          var l;
          return h ? (l = k ? k + h : h, this._events[l] && (--this._eventsCount === 0 ? this._events = new E() : delete this._events[l])) : (this._events = new E(), this._eventsCount = 0), this;
        }, p.prototype.off = p.prototype.removeListener, p.prototype.addListener = p.prototype.on, p.prototype.setMaxListeners = function() {
          return this;
        }, p.prefixed = k, p.EventEmitter = p, typeof x < "u" && (x.exports = p);
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.matchText = v.matchSpacing = v.matchNewline = v.matchBlot = v.matchAttributor = v.default = void 0;
        var k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(Z) {
          return typeof Z;
        } : function(Z) {
          return Z && typeof Symbol == "function" && Z.constructor === Symbol && Z !== Symbol.prototype ? "symbol" : typeof Z;
        }, E = function() {
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
        }(), m = function() {
          function Z(W, tt) {
            for (var et = 0; et < tt.length; et++) {
              var J = tt[et];
              J.enumerable = J.enumerable || !1, J.configurable = !0, "value" in J && (J.writable = !0), Object.defineProperty(W, J.key, J);
            }
          }
          return function(W, tt, et) {
            return tt && Z(W.prototype, tt), et && Z(W, et), W;
          };
        }(), p = d(3), y = _(p), h = d(2), l = _(h), t = d(0), e = _(t), u = d(5), o = _(u), a = d(10), r = _(a), i = d(9), f = _(i), n = d(36), c = d(37), T = d(13), b = _(T), w = d(26), L = d(38), A = d(39), g = d(40);
        function _(Z) {
          return Z && Z.__esModule ? Z : { default: Z };
        }
        function O(Z, W, tt) {
          return W in Z ? Object.defineProperty(Z, W, { value: tt, enumerable: !0, configurable: !0, writable: !0 }) : Z[W] = tt, Z;
        }
        function P(Z, W) {
          if (!(Z instanceof W))
            throw new TypeError("Cannot call a class as a function");
        }
        function j(Z, W) {
          if (!Z)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return W && (typeof W == "object" || typeof W == "function") ? W : Z;
        }
        function U(Z, W) {
          if (typeof W != "function" && W !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof W);
          Z.prototype = Object.create(W && W.prototype, { constructor: { value: Z, enumerable: !1, writable: !0, configurable: !0 } }), W && (Object.setPrototypeOf ? Object.setPrototypeOf(Z, W) : Z.__proto__ = W);
        }
        var z = (0, r.default)("quill:clipboard"), X = "__ql-matcher", H = [[Node.TEXT_NODE, gt], [Node.TEXT_NODE, ft], ["br", nt], [Node.ELEMENT_NODE, ft], [Node.ELEMENT_NODE, Q], [Node.ELEMENT_NODE, ht], [Node.ELEMENT_NODE, G], [Node.ELEMENT_NODE, mt], ["li", lt], ["b", $.bind($, "bold")], ["i", $.bind($, "italic")], ["style", it]], R = [n.AlignAttribute, L.DirectionAttribute].reduce(function(Z, W) {
          return Z[W.keyName] = W, Z;
        }, {}), N = [n.AlignStyle, c.BackgroundStyle, w.ColorStyle, L.DirectionStyle, A.FontStyle, g.SizeStyle].reduce(function(Z, W) {
          return Z[W.keyName] = W, Z;
        }, {}), M = function(Z) {
          U(W, Z);
          function W(tt, et) {
            P(this, W);
            var J = j(this, (W.__proto__ || Object.getPrototypeOf(W)).call(this, tt, et));
            return J.quill.root.addEventListener("paste", J.onPaste.bind(J)), J.container = J.quill.addContainer("ql-clipboard"), J.container.setAttribute("contenteditable", !0), J.container.setAttribute("tabindex", -1), J.matchers = [], H.concat(J.options.matchers).forEach(function(st) {
              var ot = E(st, 2), at = ot[0], wt = ot[1];
              !et.matchVisual && wt === ht || J.addMatcher(at, wt);
            }), J;
          }
          return m(W, [{
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
                return this.container.innerHTML = "", new l.default().insert(st, O({}, b.default.blotName, J[b.default.blotName]));
              }
              var ot = this.prepareMatching(), at = E(ot, 2), wt = at[0], Ot = at[1], vt = F(this.container, wt, Ot);
              return C(vt, `
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
                var at = E(ot, 2), wt = at[0], Ot = at[1];
                switch (wt) {
                  case Node.TEXT_NODE:
                    st.push(Ot);
                    break;
                  case Node.ELEMENT_NODE:
                    J.push(Ot);
                    break;
                  default:
                    [].forEach.call(et.container.querySelectorAll(wt), function(vt) {
                      vt[X] = vt[X] || [], vt[X].push(Ot);
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
          return (typeof W > "u" ? "undefined" : k(W)) === "object" ? Object.keys(W).reduce(function(et, J) {
            return I(et, J, W[J]);
          }, Z) : Z.reduce(function(et, J) {
            return J.attributes && J.attributes[W] ? et.push(J) : et.insert(J.insert, (0, y.default)({}, O({}, W, tt), J.attributes));
          }, new l.default());
        }
        function K(Z) {
          if (Z.nodeType !== Node.ELEMENT_NODE)
            return {};
          var W = "__ql-computed-style";
          return Z[W] || (Z[W] = window.getComputedStyle(Z));
        }
        function C(Z, W) {
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
        function F(Z, W, tt) {
          return Z.nodeType === Z.TEXT_NODE ? tt.reduce(function(et, J) {
            return J(Z, et);
          }, new l.default()) : Z.nodeType === Z.ELEMENT_NODE ? [].reduce.call(Z.childNodes || [], function(et, J) {
            var st = F(J, W, tt);
            return J.nodeType === Z.ELEMENT_NODE && (st = W.reduce(function(ot, at) {
              return at(J, ot);
            }, st), st = (J[X] || []).reduce(function(ot, at) {
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
          return C(W, `
`) || W.insert(`
`), W;
        }
        function it() {
          return new l.default();
        }
        function lt(Z, W) {
          var tt = e.default.query(Z);
          if (tt == null || tt.blotName !== "list-item" || !C(W, `
`))
            return W;
          for (var et = -1, J = Z.parentNode; !J.classList.contains("ql-clipboard"); )
            (e.default.query(J) || {}).blotName === "list" && (et += 1), J = J.parentNode;
          return et <= 0 ? W : W.compose(new l.default().retain(W.length() - 1).retain(1, { indent: et }));
        }
        function ft(Z, W) {
          return C(W, `
`) || (q(Z) || W.length() > 0 && Z.nextSibling && q(Z.nextSibling)) && W.insert(`
`), W;
        }
        function ht(Z, W) {
          if (q(Z) && Z.nextElementSibling != null && !C(W, `

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
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = function() {
          function u(o, a) {
            for (var r = 0; r < a.length; r++) {
              var i = a[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, i.key, i);
            }
          }
          return function(o, a, r) {
            return a && u(o.prototype, a), r && u(o, r), o;
          };
        }(), E = function u(o, a, r) {
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
        }, m = d(6), p = y(m);
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
          return k(o, [{
            key: "optimize",
            value: function(r) {
              E(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "optimize", this).call(this, r), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
            }
          }], [{
            key: "create",
            value: function() {
              return E(o.__proto__ || Object.getPrototypeOf(o), "create", this).call(this);
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
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.addControls = v.default = void 0;
        var k = function() {
          function g(_, O) {
            var P = [], j = !0, U = !1, z = void 0;
            try {
              for (var X = _[Symbol.iterator](), H; !(j = (H = X.next()).done) && (P.push(H.value), !(O && P.length === O)); j = !0)
                ;
            } catch (R) {
              U = !0, z = R;
            } finally {
              try {
                !j && X.return && X.return();
              } finally {
                if (U)
                  throw z;
              }
            }
            return P;
          }
          return function(_, O) {
            if (Array.isArray(_))
              return _;
            if (Symbol.iterator in Object(_))
              return g(_, O);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), E = function() {
          function g(_, O) {
            for (var P = 0; P < O.length; P++) {
              var j = O[P];
              j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(_, j.key, j);
            }
          }
          return function(_, O, P) {
            return O && g(_.prototype, O), P && g(_, P), _;
          };
        }(), m = d(2), p = r(m), y = d(0), h = r(y), l = d(5), t = r(l), e = d(10), u = r(e), o = d(9), a = r(o);
        function r(g) {
          return g && g.__esModule ? g : { default: g };
        }
        function i(g, _, O) {
          return _ in g ? Object.defineProperty(g, _, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : g[_] = O, g;
        }
        function f(g, _) {
          if (!(g instanceof _))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(g, _) {
          if (!g)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return _ && (typeof _ == "object" || typeof _ == "function") ? _ : g;
        }
        function c(g, _) {
          if (typeof _ != "function" && _ !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof _);
          g.prototype = Object.create(_ && _.prototype, { constructor: { value: g, enumerable: !1, writable: !0, configurable: !0 } }), _ && (Object.setPrototypeOf ? Object.setPrototypeOf(g, _) : g.__proto__ = _);
        }
        var T = (0, u.default)("quill:toolbar"), b = function(g) {
          c(_, g);
          function _(O, P) {
            f(this, _);
            var j = n(this, (_.__proto__ || Object.getPrototypeOf(_)).call(this, O, P));
            if (Array.isArray(j.options.container)) {
              var U = document.createElement("div");
              L(U, j.options.container), O.container.parentNode.insertBefore(U, O.container), j.container = U;
            } else
              typeof j.options.container == "string" ? j.container = document.querySelector(j.options.container) : j.container = j.options.container;
            if (!(j.container instanceof HTMLElement)) {
              var z;
              return z = T.error("Container required for toolbar", j.options), n(j, z);
            }
            return j.container.classList.add("ql-toolbar"), j.controls = [], j.handlers = {}, Object.keys(j.options.handlers).forEach(function(X) {
              j.addHandler(X, j.options.handlers[X]);
            }), [].forEach.call(j.container.querySelectorAll("button, select"), function(X) {
              j.attach(X);
            }), j.quill.on(t.default.events.EDITOR_CHANGE, function(X, H) {
              X === t.default.events.SELECTION_CHANGE && j.update(H);
            }), j.quill.on(t.default.events.SCROLL_OPTIMIZE, function() {
              var X = j.quill.selection.getRange(), H = k(X, 1), R = H[0];
              j.update(R);
            }), j;
          }
          return E(_, [{
            key: "addHandler",
            value: function(P, j) {
              this.handlers[P] = j;
            }
          }, {
            key: "attach",
            value: function(P) {
              var j = this, U = [].find.call(P.classList, function(X) {
                return X.indexOf("ql-") === 0;
              });
              if (!!U) {
                if (U = U.slice(3), P.tagName === "BUTTON" && P.setAttribute("type", "button"), this.handlers[U] == null) {
                  if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[U] == null) {
                    T.warn("ignoring attaching to disabled format", U, P);
                    return;
                  }
                  if (h.default.query(U) == null) {
                    T.warn("ignoring attaching to nonexistent format", U, P);
                    return;
                  }
                }
                var z = P.tagName === "SELECT" ? "change" : "click";
                P.addEventListener(z, function(X) {
                  var H = void 0;
                  if (P.tagName === "SELECT") {
                    if (P.selectedIndex < 0)
                      return;
                    var R = P.options[P.selectedIndex];
                    R.hasAttribute("selected") ? H = !1 : H = R.value || !1;
                  } else
                    P.classList.contains("ql-active") ? H = !1 : H = P.value || !P.hasAttribute("value"), X.preventDefault();
                  j.quill.focus();
                  var N = j.quill.selection.getRange(), M = k(N, 1), I = M[0];
                  if (j.handlers[U] != null)
                    j.handlers[U].call(j, H);
                  else if (h.default.query(U).prototype instanceof h.default.Embed) {
                    if (H = prompt("Enter " + U), !H)
                      return;
                    j.quill.updateContents(new p.default().retain(I.index).delete(I.length).insert(i({}, U, H)), t.default.sources.USER);
                  } else
                    j.quill.format(U, H, t.default.sources.USER);
                  j.update(I);
                }), this.controls.push([U, P]);
              }
            }
          }, {
            key: "update",
            value: function(P) {
              var j = P == null ? {} : this.quill.getFormat(P);
              this.controls.forEach(function(U) {
                var z = k(U, 2), X = z[0], H = z[1];
                if (H.tagName === "SELECT") {
                  var R = void 0;
                  if (P == null)
                    R = null;
                  else if (j[X] == null)
                    R = H.querySelector("option[selected]");
                  else if (!Array.isArray(j[X])) {
                    var N = j[X];
                    typeof N == "string" && (N = N.replace(/\"/g, '\\"')), R = H.querySelector('option[value="' + N + '"]');
                  }
                  R == null ? (H.value = "", H.selectedIndex = -1) : R.selected = !0;
                } else if (P == null)
                  H.classList.remove("ql-active");
                else if (H.hasAttribute("value")) {
                  var M = j[X] === H.getAttribute("value") || j[X] != null && j[X].toString() === H.getAttribute("value") || j[X] == null && !H.getAttribute("value");
                  H.classList.toggle("ql-active", M);
                } else
                  H.classList.toggle("ql-active", j[X] != null);
              });
            }
          }]), _;
        }(a.default);
        b.DEFAULTS = {};
        function w(g, _, O) {
          var P = document.createElement("button");
          P.setAttribute("type", "button"), P.classList.add("ql-" + _), O != null && (P.value = O), g.appendChild(P);
        }
        function L(g, _) {
          Array.isArray(_[0]) || (_ = [_]), _.forEach(function(O) {
            var P = document.createElement("span");
            P.classList.add("ql-formats"), O.forEach(function(j) {
              if (typeof j == "string")
                w(P, j);
              else {
                var U = Object.keys(j)[0], z = j[U];
                Array.isArray(z) ? A(P, U, z) : w(P, U, z);
              }
            }), g.appendChild(P);
          });
        }
        function A(g, _, O) {
          var P = document.createElement("select");
          P.classList.add("ql-" + _), O.forEach(function(j) {
            var U = document.createElement("option");
            j !== !1 ? U.setAttribute("value", j) : U.setAttribute("selected", "selected"), P.appendChild(U);
          }), g.appendChild(P);
        }
        b.DEFAULTS = {
          container: null,
          handlers: {
            clean: function() {
              var _ = this, O = this.quill.getSelection();
              if (O != null)
                if (O.length == 0) {
                  var P = this.quill.getFormat();
                  Object.keys(P).forEach(function(j) {
                    h.default.query(j, h.default.Scope.INLINE) != null && _.quill.format(j, !1);
                  });
                } else
                  this.quill.removeFormat(O, t.default.sources.USER);
            },
            direction: function(_) {
              var O = this.quill.getFormat().align;
              _ === "rtl" && O == null ? this.quill.format("align", "right", t.default.sources.USER) : !_ && O === "right" && this.quill.format("align", !1, t.default.sources.USER), this.quill.format("direction", _, t.default.sources.USER);
            },
            indent: function(_) {
              var O = this.quill.getSelection(), P = this.quill.getFormat(O), j = parseInt(P.indent || 0);
              if (_ === "+1" || _ === "-1") {
                var U = _ === "+1" ? 1 : -1;
                P.direction === "rtl" && (U *= -1), this.quill.format("indent", j + U, t.default.sources.USER);
              }
            },
            link: function(_) {
              _ === !0 && (_ = prompt("Enter link URL:")), this.quill.format("link", _, t.default.sources.USER);
            },
            list: function(_) {
              var O = this.quill.getSelection(), P = this.quill.getFormat(O);
              _ === "check" ? P.list === "checked" || P.list === "unchecked" ? this.quill.format("list", !1, t.default.sources.USER) : this.quill.format("list", "unchecked", t.default.sources.USER) : this.quill.format("list", _, t.default.sources.USER);
            }
          }
        }, v.default = b, v.addControls = L;
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = function() {
          function u(o, a) {
            for (var r = 0; r < a.length; r++) {
              var i = a[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, i.key, i);
            }
          }
          return function(o, a, r) {
            return a && u(o.prototype, a), r && u(o, r), o;
          };
        }(), E = function u(o, a, r) {
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
        }, m = d(28), p = y(m);
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
          return k(o, [{
            key: "buildItem",
            value: function(r) {
              var i = E(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "buildItem", this).call(this, r);
              return i.style.backgroundColor = r.getAttribute("value") || "", i;
            }
          }, {
            key: "selectItem",
            value: function(r, i) {
              E(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "selectItem", this).call(this, r, i);
              var f = this.label.querySelector(".ql-color-label"), n = r && r.getAttribute("data-value") || "";
              f && (f.tagName === "line" ? f.style.stroke = n : f.style.fill = n);
            }
          }]), o;
        }(p.default);
        v.default = e;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = function() {
          function u(o, a) {
            for (var r = 0; r < a.length; r++) {
              var i = a[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, i.key, i);
            }
          }
          return function(o, a, r) {
            return a && u(o.prototype, a), r && u(o, r), o;
          };
        }(), E = function u(o, a, r) {
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
        }, m = d(28), p = y(m);
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
          return k(o, [{
            key: "selectItem",
            value: function(r, i) {
              E(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "selectItem", this).call(this, r, i), r = r || this.defaultItem, this.label.innerHTML = r.innerHTML;
            }
          }]), o;
        }(p.default);
        v.default = e;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = function() {
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
        function E(p, y) {
          if (!(p instanceof y))
            throw new TypeError("Cannot call a class as a function");
        }
        var m = function() {
          function p(y, h) {
            var l = this;
            E(this, p), this.quill = y, this.boundsContainer = h || document.body, this.root = y.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function() {
              l.root.style.marginTop = -1 * l.quill.root.scrollTop + "px";
            }), this.hide();
          }
          return k(p, [{
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
        v.default = m;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = function() {
          function A(g, _) {
            var O = [], P = !0, j = !1, U = void 0;
            try {
              for (var z = g[Symbol.iterator](), X; !(P = (X = z.next()).done) && (O.push(X.value), !(_ && O.length === _)); P = !0)
                ;
            } catch (H) {
              j = !0, U = H;
            } finally {
              try {
                !P && z.return && z.return();
              } finally {
                if (j)
                  throw U;
              }
            }
            return O;
          }
          return function(g, _) {
            if (Array.isArray(g))
              return g;
            if (Symbol.iterator in Object(g))
              return A(g, _);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), E = function A(g, _, O) {
          g === null && (g = Function.prototype);
          var P = Object.getOwnPropertyDescriptor(g, _);
          if (P === void 0) {
            var j = Object.getPrototypeOf(g);
            return j === null ? void 0 : A(j, _, O);
          } else {
            if ("value" in P)
              return P.value;
            var U = P.get;
            return U === void 0 ? void 0 : U.call(O);
          }
        }, m = function() {
          function A(g, _) {
            for (var O = 0; O < _.length; O++) {
              var P = _[O];
              P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(g, P.key, P);
            }
          }
          return function(g, _, O) {
            return _ && A(g.prototype, _), O && A(g, O), g;
          };
        }(), p = d(3), y = f(p), h = d(8), l = f(h), t = d(43), e = f(t), u = d(27), o = f(u), a = d(15), r = d(41), i = f(r);
        function f(A) {
          return A && A.__esModule ? A : { default: A };
        }
        function n(A, g) {
          if (!(A instanceof g))
            throw new TypeError("Cannot call a class as a function");
        }
        function c(A, g) {
          if (!A)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return g && (typeof g == "object" || typeof g == "function") ? g : A;
        }
        function T(A, g) {
          if (typeof g != "function" && g !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof g);
          A.prototype = Object.create(g && g.prototype, { constructor: { value: A, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(A, g) : A.__proto__ = g);
        }
        var b = [[{ header: ["1", "2", "3", !1] }], ["bold", "italic", "underline", "link"], [{ list: "ordered" }, { list: "bullet" }], ["clean"]], w = function(A) {
          T(g, A);
          function g(_, O) {
            n(this, g), O.modules.toolbar != null && O.modules.toolbar.container == null && (O.modules.toolbar.container = b);
            var P = c(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this, _, O));
            return P.quill.container.classList.add("ql-snow"), P;
          }
          return m(g, [{
            key: "extendToolbar",
            value: function(O) {
              O.container.classList.add("ql-snow"), this.buildButtons([].slice.call(O.container.querySelectorAll("button")), i.default), this.buildPickers([].slice.call(O.container.querySelectorAll("select")), i.default), this.tooltip = new L(this.quill, this.options.bounds), O.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({ key: "K", shortKey: !0 }, function(P, j) {
                O.handlers.link.call(O, !j.format.link);
              });
            }
          }]), g;
        }(e.default);
        w.DEFAULTS = (0, y.default)(!0, {}, e.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                link: function(g) {
                  if (g) {
                    var _ = this.quill.getSelection();
                    if (_ == null || _.length == 0)
                      return;
                    var O = this.quill.getText(_);
                    /^\S+@\S+\.\S+$/.test(O) && O.indexOf("mailto:") !== 0 && (O = "mailto:" + O);
                    var P = this.quill.theme.tooltip;
                    P.edit("link", O);
                  } else
                    this.quill.format("link", !1);
                }
              }
            }
          }
        });
        var L = function(A) {
          T(g, A);
          function g(_, O) {
            n(this, g);
            var P = c(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this, _, O));
            return P.preview = P.root.querySelector("a.ql-preview"), P;
          }
          return m(g, [{
            key: "listen",
            value: function() {
              var O = this;
              E(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function(P) {
                O.root.classList.contains("ql-editing") ? O.save() : O.edit("link", O.preview.textContent), P.preventDefault();
              }), this.root.querySelector("a.ql-remove").addEventListener("click", function(P) {
                if (O.linkRange != null) {
                  var j = O.linkRange;
                  O.restoreFocus(), O.quill.formatText(j, "link", !1, l.default.sources.USER), delete O.linkRange;
                }
                P.preventDefault(), O.hide();
              }), this.quill.on(l.default.events.SELECTION_CHANGE, function(P, j, U) {
                if (P != null) {
                  if (P.length === 0 && U === l.default.sources.USER) {
                    var z = O.quill.scroll.descendant(o.default, P.index), X = k(z, 2), H = X[0], R = X[1];
                    if (H != null) {
                      O.linkRange = new a.Range(P.index - R, H.length());
                      var N = o.default.formats(H.domNode);
                      O.preview.textContent = N, O.preview.setAttribute("href", N), O.show(), O.position(O.quill.getBounds(O.linkRange));
                      return;
                    }
                  } else
                    delete O.linkRange;
                  O.hide();
                }
              });
            }
          }, {
            key: "show",
            value: function() {
              E(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "show", this).call(this), this.root.removeAttribute("data-mode");
            }
          }]), g;
        }(t.BaseTooltip);
        L.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), v.default = w;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = d(29), E = J(k), m = d(36), p = d(38), y = d(64), h = d(65), l = J(h), t = d(66), e = J(t), u = d(67), o = J(u), a = d(37), r = d(26), i = d(39), f = d(40), n = d(56), c = J(n), T = d(68), b = J(T), w = d(27), L = J(w), A = d(69), g = J(A), _ = d(70), O = J(_), P = d(71), j = J(P), U = d(72), z = J(U), X = d(73), H = J(X), R = d(13), N = J(R), M = d(74), I = J(M), K = d(75), C = J(K), q = d(57), F = J(q), $ = d(41), G = J($), Q = d(28), nt = J(Q), it = d(59), lt = J(it), ft = d(60), ht = J(ft), mt = d(61), gt = J(mt), Z = d(108), W = J(Z), tt = d(62), et = J(tt);
        function J(st) {
          return st && st.__esModule ? st : { default: st };
        }
        E.default.register({
          "attributors/attribute/direction": p.DirectionAttribute,
          "attributors/class/align": m.AlignClass,
          "attributors/class/background": a.BackgroundClass,
          "attributors/class/color": r.ColorClass,
          "attributors/class/direction": p.DirectionClass,
          "attributors/class/font": i.FontClass,
          "attributors/class/size": f.SizeClass,
          "attributors/style/align": m.AlignStyle,
          "attributors/style/background": a.BackgroundStyle,
          "attributors/style/color": r.ColorStyle,
          "attributors/style/direction": p.DirectionStyle,
          "attributors/style/font": i.FontStyle,
          "attributors/style/size": f.SizeStyle
        }, !0), E.default.register({
          "formats/align": m.AlignClass,
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
          "formats/script": g.default,
          "formats/strike": O.default,
          "formats/underline": j.default,
          "formats/image": z.default,
          "formats/video": H.default,
          "formats/list/item": u.ListItem,
          "modules/formula": I.default,
          "modules/syntax": C.default,
          "modules/toolbar": F.default,
          "themes/bubble": W.default,
          "themes/snow": et.default,
          "ui/icons": G.default,
          "ui/picker": nt.default,
          "ui/icon-picker": ht.default,
          "ui/color-picker": lt.default,
          "ui/tooltip": gt.default
        }, !0), v.default = E.default;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.IndentClass = void 0;
        var k = function() {
          function o(a, r) {
            for (var i = 0; i < r.length; i++) {
              var f = r[i];
              f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(a, f.key, f);
            }
          }
          return function(a, r, i) {
            return r && o(a.prototype, r), i && o(a, i), a;
          };
        }(), E = function o(a, r, i) {
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
        }, m = d(0), p = y(m);
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
          return k(a, [{
            key: "add",
            value: function(i, f) {
              if (f === "+1" || f === "-1") {
                var n = this.value(i) || 0;
                f = f === "+1" ? n + 1 : n - 1;
              }
              return f === 0 ? (this.remove(i), !0) : E(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "add", this).call(this, i, f);
            }
          }, {
            key: "canAdd",
            value: function(i, f) {
              return E(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "canAdd", this).call(this, i, f) || E(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "canAdd", this).call(this, i, parseInt(f));
            }
          }, {
            key: "value",
            value: function(i) {
              return parseInt(E(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "value", this).call(this, i)) || void 0;
            }
          }]), a;
        }(p.default.Attributor.Class), u = new e("indent", "ql-indent", {
          scope: p.default.Scope.BLOCK,
          whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
        });
        v.IndentClass = u;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = d(4), E = m(k);
        function m(t) {
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
        }(E.default);
        l.blotName = "blockquote", l.tagName = "blockquote", v.default = l;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = function() {
          function e(u, o) {
            for (var a = 0; a < o.length; a++) {
              var r = o[a];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(u, r.key, r);
            }
          }
          return function(u, o, a) {
            return o && e(u.prototype, o), a && e(u, a), u;
          };
        }(), E = d(4), m = p(E);
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
          return k(u, null, [{
            key: "formats",
            value: function(a) {
              return this.tagName.indexOf(a.tagName) + 1;
            }
          }]), u;
        }(m.default);
        t.blotName = "header", t.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], v.default = t;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.default = v.ListItem = void 0;
        var k = function() {
          function n(c, T) {
            for (var b = 0; b < T.length; b++) {
              var w = T[b];
              w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(c, w.key, w);
            }
          }
          return function(c, T, b) {
            return T && n(c.prototype, T), b && n(c, b), c;
          };
        }(), E = function n(c, T, b) {
          c === null && (c = Function.prototype);
          var w = Object.getOwnPropertyDescriptor(c, T);
          if (w === void 0) {
            var L = Object.getPrototypeOf(c);
            return L === null ? void 0 : n(L, T, b);
          } else {
            if ("value" in w)
              return w.value;
            var A = w.get;
            return A === void 0 ? void 0 : A.call(b);
          }
        }, m = d(0), p = e(m), y = d(4), h = e(y), l = d(25), t = e(l);
        function e(n) {
          return n && n.__esModule ? n : { default: n };
        }
        function u(n, c, T) {
          return c in n ? Object.defineProperty(n, c, { value: T, enumerable: !0, configurable: !0, writable: !0 }) : n[c] = T, n;
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
          return k(c, [{
            key: "format",
            value: function(b, w) {
              b === f.blotName && !w ? this.replaceWith(p.default.create(this.statics.scope)) : E(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "format", this).call(this, b, w);
            }
          }, {
            key: "remove",
            value: function() {
              this.prev == null && this.next == null ? this.parent.remove() : E(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "remove", this).call(this);
            }
          }, {
            key: "replaceWith",
            value: function(b, w) {
              return this.parent.isolate(this.offset(this.parent), this.length()), b === this.parent.statics.blotName ? (this.parent.replaceWith(b, w), this) : (this.parent.unwrap(), E(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "replaceWith", this).call(this, b, w));
            }
          }], [{
            key: "formats",
            value: function(b) {
              return b.tagName === this.tagName ? void 0 : E(c.__proto__ || Object.getPrototypeOf(c), "formats", this).call(this, b);
            }
          }]), c;
        }(h.default);
        i.blotName = "list-item", i.tagName = "LI";
        var f = function(n) {
          r(c, n), k(c, null, [{
            key: "create",
            value: function(b) {
              var w = b === "ordered" ? "OL" : "UL", L = E(c.__proto__ || Object.getPrototypeOf(c), "create", this).call(this, w);
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
          function c(T) {
            o(this, c);
            var b = a(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, T)), w = function(A) {
              if (A.target.parentNode === T) {
                var g = b.statics.formats(T), _ = p.default.find(A.target);
                g === "checked" ? _.format("list", "unchecked") : g === "unchecked" && _.format("list", "checked");
              }
            };
            return T.addEventListener("touchstart", w), T.addEventListener("mousedown", w), b;
          }
          return k(c, [{
            key: "format",
            value: function(b, w) {
              this.children.length > 0 && this.children.tail.format(b, w);
            }
          }, {
            key: "formats",
            value: function() {
              return u({}, this.statics.blotName, this.statics.formats(this.domNode));
            }
          }, {
            key: "insertBefore",
            value: function(b, w) {
              if (b instanceof i)
                E(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "insertBefore", this).call(this, b, w);
              else {
                var L = w == null ? this.length() : w.offset(this), A = this.split(L);
                A.parent.insertBefore(b, A);
              }
            }
          }, {
            key: "optimize",
            value: function(b) {
              E(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "optimize", this).call(this, b);
              var w = this.next;
              w != null && w.prev === this && w.statics.blotName === this.statics.blotName && w.domNode.tagName === this.domNode.tagName && w.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (w.moveChildren(this), w.remove());
            }
          }, {
            key: "replace",
            value: function(b) {
              if (b.statics.blotName !== this.statics.blotName) {
                var w = p.default.create(this.statics.defaultChild);
                b.moveChildren(w), this.appendChild(w);
              }
              E(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "replace", this).call(this, b);
            }
          }]), c;
        }(t.default);
        f.blotName = "list", f.scope = p.default.Scope.BLOCK_BLOT, f.tagName = ["OL", "UL"], f.defaultChild = "list-item", f.allowedChildren = [i], v.ListItem = i, v.default = f;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = d(56), E = m(k);
        function m(t) {
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
        }(E.default);
        l.blotName = "italic", l.tagName = ["EM", "I"], v.default = l;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = function() {
          function u(o, a) {
            for (var r = 0; r < a.length; r++) {
              var i = a[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, i.key, i);
            }
          }
          return function(o, a, r) {
            return a && u(o.prototype, a), r && u(o, r), o;
          };
        }(), E = function u(o, a, r) {
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
        }, m = d(6), p = y(m);
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
          return k(o, null, [{
            key: "create",
            value: function(r) {
              return r === "super" ? document.createElement("sup") : r === "sub" ? document.createElement("sub") : E(o.__proto__ || Object.getPrototypeOf(o), "create", this).call(this, r);
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
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = d(6), E = m(k);
        function m(t) {
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
        }(E.default);
        l.blotName = "strike", l.tagName = "S", v.default = l;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = d(6), E = m(k);
        function m(t) {
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
        }(E.default);
        l.blotName = "underline", l.tagName = "U", v.default = l;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = function() {
          function a(r, i) {
            for (var f = 0; f < i.length; f++) {
              var n = i[f];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, f) {
            return i && a(r.prototype, i), f && a(r, f), r;
          };
        }(), E = function a(r, i, f) {
          r === null && (r = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(r, i);
          if (n === void 0) {
            var c = Object.getPrototypeOf(r);
            return c === null ? void 0 : a(c, i, f);
          } else {
            if ("value" in n)
              return n.value;
            var T = n.get;
            return T === void 0 ? void 0 : T.call(f);
          }
        }, m = d(0), p = h(m), y = d(27);
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
          return k(r, [{
            key: "format",
            value: function(f, n) {
              u.indexOf(f) > -1 ? n ? this.domNode.setAttribute(f, n) : this.domNode.removeAttribute(f) : E(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "format", this).call(this, f, n);
            }
          }], [{
            key: "create",
            value: function(f) {
              var n = E(r.__proto__ || Object.getPrototypeOf(r), "create", this).call(this, f);
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
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        });
        var k = function() {
          function a(r, i) {
            for (var f = 0; f < i.length; f++) {
              var n = i[f];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, f) {
            return i && a(r.prototype, i), f && a(r, f), r;
          };
        }(), E = function a(r, i, f) {
          r === null && (r = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(r, i);
          if (n === void 0) {
            var c = Object.getPrototypeOf(r);
            return c === null ? void 0 : a(c, i, f);
          } else {
            if ("value" in n)
              return n.value;
            var T = n.get;
            return T === void 0 ? void 0 : T.call(f);
          }
        }, m = d(4), p = d(27), y = h(p);
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
          return k(r, [{
            key: "format",
            value: function(f, n) {
              u.indexOf(f) > -1 ? n ? this.domNode.setAttribute(f, n) : this.domNode.removeAttribute(f) : E(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "format", this).call(this, f, n);
            }
          }], [{
            key: "create",
            value: function(f) {
              var n = E(r.__proto__ || Object.getPrototypeOf(r), "create", this).call(this, f);
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
        }(m.BlockEmbed);
        o.blotName = "video", o.className = "ql-video", o.tagName = "IFRAME", v.default = o;
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.default = v.FormulaBlot = void 0;
        var k = function() {
          function f(n, c) {
            for (var T = 0; T < c.length; T++) {
              var b = c[T];
              b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(n, b.key, b);
            }
          }
          return function(n, c, T) {
            return c && f(n.prototype, c), T && f(n, T), n;
          };
        }(), E = function f(n, c, T) {
          n === null && (n = Function.prototype);
          var b = Object.getOwnPropertyDescriptor(n, c);
          if (b === void 0) {
            var w = Object.getPrototypeOf(n);
            return w === null ? void 0 : f(w, c, T);
          } else {
            if ("value" in b)
              return b.value;
            var L = b.get;
            return L === void 0 ? void 0 : L.call(T);
          }
        }, m = d(35), p = e(m), y = d(5), h = e(y), l = d(9), t = e(l);
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
          return k(n, null, [{
            key: "create",
            value: function(T) {
              var b = E(n.__proto__ || Object.getPrototypeOf(n), "create", this).call(this, T);
              return typeof T == "string" && (window.katex.render(T, b, {
                throwOnError: !1,
                errorColor: "#f00"
              }), b.setAttribute("data-value", T)), b;
            }
          }, {
            key: "value",
            value: function(T) {
              return T.getAttribute("data-value");
            }
          }]), n;
        }(p.default);
        r.blotName = "formula", r.className = "ql-formula", r.tagName = "SPAN";
        var i = function(f) {
          a(n, f), k(n, null, [{
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
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.default = v.CodeToken = v.CodeBlock = void 0;
        var k = function() {
          function T(b, w) {
            for (var L = 0; L < w.length; L++) {
              var A = w[L];
              A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), Object.defineProperty(b, A.key, A);
            }
          }
          return function(b, w, L) {
            return w && T(b.prototype, w), L && T(b, L), b;
          };
        }(), E = function T(b, w, L) {
          b === null && (b = Function.prototype);
          var A = Object.getOwnPropertyDescriptor(b, w);
          if (A === void 0) {
            var g = Object.getPrototypeOf(b);
            return g === null ? void 0 : T(g, w, L);
          } else {
            if ("value" in A)
              return A.value;
            var _ = A.get;
            return _ === void 0 ? void 0 : _.call(L);
          }
        }, m = d(0), p = o(m), y = d(5), h = o(y), l = d(9), t = o(l), e = d(13), u = o(e);
        function o(T) {
          return T && T.__esModule ? T : { default: T };
        }
        function a(T, b) {
          if (!(T instanceof b))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(T, b) {
          if (!T)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return b && (typeof b == "object" || typeof b == "function") ? b : T;
        }
        function i(T, b) {
          if (typeof b != "function" && b !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof b);
          T.prototype = Object.create(b && b.prototype, { constructor: { value: T, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(T, b) : T.__proto__ = b);
        }
        var f = function(T) {
          i(b, T);
          function b() {
            return a(this, b), r(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
          }
          return k(b, [{
            key: "replaceWith",
            value: function(L) {
              this.domNode.textContent = this.domNode.textContent, this.attach(), E(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "replaceWith", this).call(this, L);
            }
          }, {
            key: "highlight",
            value: function(L) {
              var A = this.domNode.textContent;
              this.cachedText !== A && ((A.trim().length > 0 || this.cachedText == null) && (this.domNode.innerHTML = L(A), this.domNode.normalize(), this.attach()), this.cachedText = A);
            }
          }]), b;
        }(u.default);
        f.className = "ql-syntax";
        var n = new p.default.Attributor.Class("token", "hljs", {
          scope: p.default.Scope.INLINE
        }), c = function(T) {
          i(b, T), k(b, null, [{
            key: "register",
            value: function() {
              h.default.register(n, !0), h.default.register(f, !0);
            }
          }]);
          function b(w, L) {
            a(this, b);
            var A = r(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, w, L));
            if (typeof A.options.highlight != "function")
              throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
            var g = null;
            return A.quill.on(h.default.events.SCROLL_OPTIMIZE, function() {
              clearTimeout(g), g = setTimeout(function() {
                A.highlight(), g = null;
              }, A.options.interval);
            }), A.highlight(), A;
          }
          return k(b, [{
            key: "highlight",
            value: function() {
              var L = this;
              if (!this.quill.selection.composing) {
                this.quill.update(h.default.sources.USER);
                var A = this.quill.getSelection();
                this.quill.scroll.descendants(f).forEach(function(g) {
                  g.highlight(L.options.highlight);
                }), this.quill.update(h.default.sources.SILENT), A != null && this.quill.setSelection(A, h.default.sources.SILENT);
              }
            }
          }]), b;
        }(t.default);
        c.DEFAULTS = {
          highlight: function() {
            return window.hljs == null ? null : function(T) {
              var b = window.hljs.highlightAuto(T);
              return b.value;
            };
          }(),
          interval: 1e3
        }, v.CodeBlock = f, v.CodeToken = n, v.default = c;
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
      },
      function(x, v) {
        x.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
      },
      function(x, v) {
        x.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
      },
      function(x, v) {
        x.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
      },
      function(x, v, d) {
        Object.defineProperty(v, "__esModule", {
          value: !0
        }), v.default = v.BubbleTooltip = void 0;
        var k = function b(w, L, A) {
          w === null && (w = Function.prototype);
          var g = Object.getOwnPropertyDescriptor(w, L);
          if (g === void 0) {
            var _ = Object.getPrototypeOf(w);
            return _ === null ? void 0 : b(_, L, A);
          } else {
            if ("value" in g)
              return g.value;
            var O = g.get;
            return O === void 0 ? void 0 : O.call(A);
          }
        }, E = function() {
          function b(w, L) {
            for (var A = 0; A < L.length; A++) {
              var g = L[A];
              g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(w, g.key, g);
            }
          }
          return function(w, L, A) {
            return L && b(w.prototype, L), A && b(w, A), w;
          };
        }(), m = d(3), p = a(m), y = d(8), h = a(y), l = d(43), t = a(l), e = d(15), u = d(41), o = a(u);
        function a(b) {
          return b && b.__esModule ? b : { default: b };
        }
        function r(b, w) {
          if (!(b instanceof w))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(b, w) {
          if (!b)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return w && (typeof w == "object" || typeof w == "function") ? w : b;
        }
        function f(b, w) {
          if (typeof w != "function" && w !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof w);
          b.prototype = Object.create(w && w.prototype, { constructor: { value: b, enumerable: !1, writable: !0, configurable: !0 } }), w && (Object.setPrototypeOf ? Object.setPrototypeOf(b, w) : b.__proto__ = w);
        }
        var n = [["bold", "italic", "link"], [{ header: 1 }, { header: 2 }, "blockquote"]], c = function(b) {
          f(w, b);
          function w(L, A) {
            r(this, w), A.modules.toolbar != null && A.modules.toolbar.container == null && (A.modules.toolbar.container = n);
            var g = i(this, (w.__proto__ || Object.getPrototypeOf(w)).call(this, L, A));
            return g.quill.container.classList.add("ql-bubble"), g;
          }
          return E(w, [{
            key: "extendToolbar",
            value: function(A) {
              this.tooltip = new T(this.quill, this.options.bounds), this.tooltip.root.appendChild(A.container), this.buildButtons([].slice.call(A.container.querySelectorAll("button")), o.default), this.buildPickers([].slice.call(A.container.querySelectorAll("select")), o.default);
            }
          }]), w;
        }(t.default);
        c.DEFAULTS = (0, p.default)(!0, {}, t.default.DEFAULTS, {
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
        var T = function(b) {
          f(w, b);
          function w(L, A) {
            r(this, w);
            var g = i(this, (w.__proto__ || Object.getPrototypeOf(w)).call(this, L, A));
            return g.quill.on(h.default.events.EDITOR_CHANGE, function(_, O, P, j) {
              if (_ === h.default.events.SELECTION_CHANGE)
                if (O != null && O.length > 0 && j === h.default.sources.USER) {
                  g.show(), g.root.style.left = "0px", g.root.style.width = "", g.root.style.width = g.root.offsetWidth + "px";
                  var U = g.quill.getLines(O.index, O.length);
                  if (U.length === 1)
                    g.position(g.quill.getBounds(O));
                  else {
                    var z = U[U.length - 1], X = g.quill.getIndex(z), H = Math.min(z.length() - 1, O.index + O.length - X), R = g.quill.getBounds(new e.Range(X, H));
                    g.position(R);
                  }
                } else
                  document.activeElement !== g.textbox && g.quill.hasFocus() && g.hide();
            }), g;
          }
          return E(w, [{
            key: "listen",
            value: function() {
              var A = this;
              k(w.prototype.__proto__ || Object.getPrototypeOf(w.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function() {
                A.root.classList.remove("ql-editing");
              }), this.quill.on(h.default.events.SCROLL_OPTIMIZE, function() {
                setTimeout(function() {
                  if (!A.root.classList.contains("ql-hidden")) {
                    var g = A.quill.getSelection();
                    g != null && A.position(A.quill.getBounds(g));
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
            value: function(A) {
              var g = k(w.prototype.__proto__ || Object.getPrototypeOf(w.prototype), "position", this).call(this, A), _ = this.root.querySelector(".ql-tooltip-arrow");
              if (_.style.marginLeft = "", g === 0)
                return g;
              _.style.marginLeft = -1 * g - _.offsetWidth / 2 + "px";
            }
          }]), w;
        }(l.BaseTooltip);
        T.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), v.BubbleTooltip = T, v.default = c;
      },
      function(x, v, d) {
        x.exports = d(63);
      }
    ]).default;
  });
})(Vn);
const Vt = /* @__PURE__ */ Gn(Vn.exports);
var Ln = { exports: {} }, Ct = -1, Mt = 1, Lt = 0;
function Ee(B, Y, x, v) {
  if (B === Y)
    return B ? [[Lt, B]] : [];
  if (x != null) {
    var d = cr(B, Y, x);
    if (d)
      return d;
  }
  var k = Rn(B, Y), E = B.substring(0, k);
  B = B.substring(k), Y = Y.substring(k), k = Mn(B, Y);
  var m = B.substring(B.length - k);
  B = B.substring(0, B.length - k), Y = Y.substring(0, Y.length - k);
  var p = ar(B, Y);
  return E && p.unshift([Lt, E]), m && p.push([Lt, m]), Zn(p, v), p;
}
function ar(B, Y) {
  var x;
  if (!B)
    return [[Mt, Y]];
  if (!Y)
    return [[Ct, B]];
  var v = B.length > Y.length ? B : Y, d = B.length > Y.length ? Y : B, k = v.indexOf(d);
  if (k !== -1)
    return x = [
      [Mt, v.substring(0, k)],
      [Lt, d],
      [Mt, v.substring(k + d.length)]
    ], B.length > Y.length && (x[0][0] = x[2][0] = Ct), x;
  if (d.length === 1)
    return [[Ct, B], [Mt, Y]];
  var E = sr(B, Y);
  if (E) {
    var m = E[0], p = E[1], y = E[2], h = E[3], l = E[4], t = Ee(m, y), e = Ee(p, h);
    return t.concat([[Lt, l]], e);
  }
  return ur(B, Y);
}
function ur(B, Y) {
  for (var x = B.length, v = Y.length, d = Math.ceil((x + v) / 2), k = d, E = 2 * d, m = new Array(E), p = new Array(E), y = 0; y < E; y++)
    m[y] = -1, p[y] = -1;
  m[k + 1] = 0, p[k + 1] = 0;
  for (var h = x - v, l = h % 2 !== 0, t = 0, e = 0, u = 0, o = 0, a = 0; a < d; a++) {
    for (var r = -a + t; r <= a - e; r += 2) {
      var i = k + r, f;
      r === -a || r !== a && m[i - 1] < m[i + 1] ? f = m[i + 1] : f = m[i - 1] + 1;
      for (var n = f - r; f < x && n < v && B.charAt(f) === Y.charAt(n); )
        f++, n++;
      if (m[i] = f, f > x)
        e += 2;
      else if (n > v)
        t += 2;
      else if (l) {
        var c = k + h - r;
        if (c >= 0 && c < E && p[c] !== -1) {
          var T = x - p[c];
          if (f >= T)
            return zn(B, Y, f, n);
        }
      }
    }
    for (var b = -a + u; b <= a - o; b += 2) {
      var c = k + b, T;
      b === -a || b !== a && p[c - 1] < p[c + 1] ? T = p[c + 1] : T = p[c - 1] + 1;
      for (var w = T - b; T < x && w < v && B.charAt(x - T - 1) === Y.charAt(v - w - 1); )
        T++, w++;
      if (p[c] = T, T > x)
        o += 2;
      else if (w > v)
        u += 2;
      else if (!l) {
        var i = k + h - b;
        if (i >= 0 && i < E && m[i] !== -1) {
          var f = m[i], n = k + f - i;
          if (T = x - T, f >= T)
            return zn(B, Y, f, n);
        }
      }
    }
  }
  return [[Ct, B], [Mt, Y]];
}
function zn(B, Y, x, v) {
  var d = B.substring(0, x), k = Y.substring(0, v), E = B.substring(x), m = Y.substring(v), p = Ee(d, k), y = Ee(E, m);
  return p.concat(y);
}
function Rn(B, Y) {
  if (!B || !Y || B.charAt(0) !== Y.charAt(0))
    return 0;
  for (var x = 0, v = Math.min(B.length, Y.length), d = v, k = 0; x < d; )
    B.substring(k, d) == Y.substring(k, d) ? (x = d, k = x) : v = d, d = Math.floor((v - x) / 2 + x);
  return Wn(B.charCodeAt(d - 1)) && d--, d;
}
function Mn(B, Y) {
  if (!B || !Y || B.slice(-1) !== Y.slice(-1))
    return 0;
  for (var x = 0, v = Math.min(B.length, Y.length), d = v, k = 0; x < d; )
    B.substring(B.length - d, B.length - k) == Y.substring(Y.length - d, Y.length - k) ? (x = d, k = x) : v = d, d = Math.floor((v - x) / 2 + x);
  return Yn(B.charCodeAt(B.length - d)) && d--, d;
}
function sr(B, Y) {
  var x = B.length > Y.length ? B : Y, v = B.length > Y.length ? Y : B;
  if (x.length < 4 || v.length * 2 < x.length)
    return null;
  function d(e, u, o) {
    for (var a = e.substring(o, o + Math.floor(e.length / 4)), r = -1, i = "", f, n, c, T; (r = u.indexOf(a, r + 1)) !== -1; ) {
      var b = Rn(
        e.substring(o),
        u.substring(r)
      ), w = Mn(
        e.substring(0, o),
        u.substring(0, r)
      );
      i.length < w + b && (i = u.substring(
        r - w,
        r
      ) + u.substring(r, r + b), f = e.substring(0, o - w), n = e.substring(o + b), c = u.substring(0, r - w), T = u.substring(r + b));
    }
    return i.length * 2 >= e.length ? [
      f,
      n,
      c,
      T,
      i
    ] : null;
  }
  var k = d(x, v, Math.ceil(x.length / 4)), E = d(x, v, Math.ceil(x.length / 2)), m;
  if (!k && !E)
    return null;
  E ? k ? m = k[4].length > E[4].length ? k : E : m = E : m = k;
  var p, y, h, l;
  B.length > Y.length ? (p = m[0], y = m[1], h = m[2], l = m[3]) : (h = m[0], l = m[1], p = m[2], y = m[3]);
  var t = m[4];
  return [p, y, h, l, t];
}
function Zn(B, Y) {
  B.push([Lt, ""]);
  for (var x = 0, v = 0, d = 0, k = "", E = "", m; x < B.length; ) {
    if (x < B.length - 1 && !B[x][1]) {
      B.splice(x, 1);
      continue;
    }
    switch (B[x][0]) {
      case Mt:
        d++, E += B[x][1], x++;
        break;
      case Ct:
        v++, k += B[x][1], x++;
        break;
      case Lt:
        var p = x - d - v - 1;
        if (Y) {
          if (p >= 0 && Qn(B[p][1])) {
            var y = B[p][1].slice(-1);
            if (B[p][1] = B[p][1].slice(0, -1), k = y + k, E = y + E, !B[p][1]) {
              B.splice(p, 1), x--;
              var h = p - 1;
              B[h] && B[h][0] === Mt && (d++, E = B[h][1] + E, h--), B[h] && B[h][0] === Ct && (v++, k = B[h][1] + k, h--), p = h;
            }
          }
          if (Xn(B[x][1])) {
            var y = B[x][1].charAt(0);
            B[x][1] = B[x][1].slice(1), k += y, E += y;
          }
        }
        if (x < B.length - 1 && !B[x][1]) {
          B.splice(x, 1);
          break;
        }
        if (k.length > 0 || E.length > 0) {
          k.length > 0 && E.length > 0 && (m = Rn(E, k), m !== 0 && (p >= 0 ? B[p][1] += E.substring(0, m) : (B.splice(0, 0, [Lt, E.substring(0, m)]), x++), E = E.substring(m), k = k.substring(m)), m = Mn(E, k), m !== 0 && (B[x][1] = E.substring(E.length - m) + B[x][1], E = E.substring(0, E.length - m), k = k.substring(0, k.length - m)));
          var l = d + v;
          k.length === 0 && E.length === 0 ? (B.splice(x - l, l), x = x - l) : k.length === 0 ? (B.splice(x - l, l, [Mt, E]), x = x - l + 1) : E.length === 0 ? (B.splice(x - l, l, [Ct, k]), x = x - l + 1) : (B.splice(x - l, l, [Ct, k], [Mt, E]), x = x - l + 2);
        }
        x !== 0 && B[x - 1][0] === Lt ? (B[x - 1][1] += B[x][1], B.splice(x, 1)) : x++, d = 0, v = 0, k = "", E = "";
        break;
    }
  }
  B[B.length - 1][1] === "" && B.pop();
  var t = !1;
  for (x = 1; x < B.length - 1; )
    B[x - 1][0] === Lt && B[x + 1][0] === Lt && (B[x][1].substring(B[x][1].length - B[x - 1][1].length) === B[x - 1][1] ? (B[x][1] = B[x - 1][1] + B[x][1].substring(0, B[x][1].length - B[x - 1][1].length), B[x + 1][1] = B[x - 1][1] + B[x + 1][1], B.splice(x - 1, 1), t = !0) : B[x][1].substring(0, B[x + 1][1].length) == B[x + 1][1] && (B[x - 1][1] += B[x + 1][1], B[x][1] = B[x][1].substring(B[x + 1][1].length) + B[x + 1][1], B.splice(x + 1, 1), t = !0)), x++;
  t && Zn(B, Y);
}
function Wn(B) {
  return B >= 55296 && B <= 56319;
}
function Yn(B) {
  return B >= 56320 && B <= 57343;
}
function Xn(B) {
  return Yn(B.charCodeAt(0));
}
function Qn(B) {
  return Wn(B.charCodeAt(B.length - 1));
}
function fr(B) {
  for (var Y = [], x = 0; x < B.length; x++)
    B[x][1].length > 0 && Y.push(B[x]);
  return Y;
}
function Pn(B, Y, x, v) {
  return Qn(B) || Xn(v) ? null : fr([
    [Lt, B],
    [Ct, Y],
    [Mt, x],
    [Lt, v]
  ]);
}
function cr(B, Y, x) {
  var v = typeof x == "number" ? { index: x, length: 0 } : x.oldRange, d = typeof x == "number" ? null : x.newRange, k = B.length, E = Y.length;
  if (v.length === 0 && (d === null || d.length === 0)) {
    var m = v.index, p = B.slice(0, m), y = B.slice(m), h = d ? d.index : null;
    t: {
      var l = m + E - k;
      if (h !== null && h !== l || l < 0 || l > E)
        break t;
      var t = Y.slice(0, l), e = Y.slice(l);
      if (e !== y)
        break t;
      var u = Math.min(m, l), o = p.slice(0, u), a = t.slice(0, u);
      if (o !== a)
        break t;
      var r = p.slice(u), i = t.slice(u);
      return Pn(o, r, i, y);
    }
    t: {
      if (h !== null && h !== m)
        break t;
      var f = m, t = Y.slice(0, f), e = Y.slice(f);
      if (t !== p)
        break t;
      var n = Math.min(k - f, E - f), c = y.slice(y.length - n), T = e.slice(e.length - n);
      if (c !== T)
        break t;
      var r = y.slice(0, y.length - n), i = e.slice(0, e.length - n);
      return Pn(p, r, i, c);
    }
  }
  if (v.length > 0 && d && d.length === 0) {
    t: {
      var o = B.slice(0, v.index), c = B.slice(v.index + v.length), u = o.length, n = c.length;
      if (E < u + n)
        break t;
      var a = Y.slice(0, u), T = Y.slice(E - n);
      if (o !== a || c !== T)
        break t;
      var r = B.slice(u, k - n), i = Y.slice(u, E - n);
      return Pn(o, r, i, c);
    }
  }
  return null;
}
function He(B, Y, x) {
  return Ee(B, Y, x, !0);
}
He.INSERT = Mt;
He.DELETE = Ct;
He.EQUAL = Lt;
var hr = He, Ce = { exports: {} };
(function(B, Y) {
  var x = 200, v = "__lodash_hash_undefined__", d = 9007199254740991, k = "[object Arguments]", E = "[object Array]", m = "[object Boolean]", p = "[object Date]", y = "[object Error]", h = "[object Function]", l = "[object GeneratorFunction]", t = "[object Map]", e = "[object Number]", u = "[object Object]", o = "[object Promise]", a = "[object RegExp]", r = "[object Set]", i = "[object String]", f = "[object Symbol]", n = "[object WeakMap]", c = "[object ArrayBuffer]", T = "[object DataView]", b = "[object Float32Array]", w = "[object Float64Array]", L = "[object Int8Array]", A = "[object Int16Array]", g = "[object Int32Array]", _ = "[object Uint8Array]", O = "[object Uint8ClampedArray]", P = "[object Uint16Array]", j = "[object Uint32Array]", U = /[\\^$.*+?()[\]{}|]/g, z = /\w*$/, X = /^\[object .+?Constructor\]$/, H = /^(?:0|[1-9]\d*)$/, R = {};
  R[k] = R[E] = R[c] = R[T] = R[m] = R[p] = R[b] = R[w] = R[L] = R[A] = R[g] = R[t] = R[e] = R[u] = R[a] = R[r] = R[i] = R[f] = R[_] = R[O] = R[P] = R[j] = !0, R[y] = R[h] = R[n] = !1;
  var N = typeof Kt == "object" && Kt && Kt.Object === Object && Kt, M = typeof self == "object" && self && self.Object === Object && self, I = N || M || Function("return this")(), K = Y && !Y.nodeType && Y, C = K && !0 && B && !B.nodeType && B, q = C && C.exports === K;
  function F(s, S) {
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
    "^" + st.call(ot).replace(U, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ot = q ? I.Buffer : void 0, vt = I.Symbol, Zt = I.Uint8Array, dt = mt(Object.getPrototypeOf, Object), qt = Object.create, Ae = tt.propertyIsEnumerable, Ke = Z.splice, se = Object.getOwnPropertySymbols, ee = Ot ? Ot.isBuffer : void 0, we = mt(Object.keys, Object), ne = Rt(I, "DataView"), Wt = Rt(I, "Map"), jt = Rt(I, "Promise"), re = Rt(I, "Set"), fe = Rt(I, "WeakMap"), Yt = Rt(Object, "create"), ce = St(ne), Xt = St(Wt), he = St(jt), de = St(re), pe = St(fe), $t = vt ? vt.prototype : void 0, Te = $t ? $t.valueOf : void 0;
  function Ft(s) {
    var S = -1, D = s ? s.length : 0;
    for (this.clear(); ++S < D; ) {
      var V = s[S];
      this.set(V[0], V[1]);
    }
  }
  function $e() {
    this.__data__ = Yt ? Yt(null) : {};
  }
  function Ge(s) {
    return this.has(s) && delete this.__data__[s];
  }
  function Ve(s) {
    var S = this.__data__;
    if (Yt) {
      var D = S[s];
      return D === v ? void 0 : D;
    }
    return ot.call(S, s) ? S[s] : void 0;
  }
  function ke(s) {
    var S = this.__data__;
    return Yt ? S[s] !== void 0 : ot.call(S, s);
  }
  function ve(s, S) {
    var D = this.__data__;
    return D[s] = Yt && S === void 0 ? v : S, this;
  }
  Ft.prototype.clear = $e, Ft.prototype.delete = Ge, Ft.prototype.get = Ve, Ft.prototype.has = ke, Ft.prototype.set = ve;
  function Et(s) {
    var S = -1, D = s ? s.length : 0;
    for (this.clear(); ++S < D; ) {
      var V = s[S];
      this.set(V[0], V[1]);
    }
  }
  function Ze() {
    this.__data__ = [];
  }
  function We(s) {
    var S = this.__data__, D = oe(S, s);
    if (D < 0)
      return !1;
    var V = S.length - 1;
    return D == V ? S.pop() : Ke.call(S, D, 1), !0;
  }
  function Ye(s) {
    var S = this.__data__, D = oe(S, s);
    return D < 0 ? void 0 : S[D][1];
  }
  function Xe(s) {
    return oe(this.__data__, s) > -1;
  }
  function Qe(s, S) {
    var D = this.__data__, V = oe(D, s);
    return V < 0 ? D.push([s, S]) : D[V][1] = S, this;
  }
  Et.prototype.clear = Ze, Et.prototype.delete = We, Et.prototype.get = Ye, Et.prototype.has = Xe, Et.prototype.set = Qe;
  function Tt(s) {
    var S = -1, D = s ? s.length : 0;
    for (this.clear(); ++S < D; ) {
      var V = s[S];
      this.set(V[0], V[1]);
    }
  }
  function Je() {
    this.__data__ = {
      hash: new Ft(),
      map: new (Wt || Et)(),
      string: new Ft()
    };
  }
  function tn(s) {
    return Jt(this, s).delete(s);
  }
  function en(s) {
    return Jt(this, s).get(s);
  }
  function nn(s) {
    return Jt(this, s).has(s);
  }
  function rn(s, S) {
    return Jt(this, s).set(s, S), this;
  }
  Tt.prototype.clear = Je, Tt.prototype.delete = tn, Tt.prototype.get = en, Tt.prototype.has = nn, Tt.prototype.set = rn;
  function xt(s) {
    this.__data__ = new Et(s);
  }
  function on() {
    this.__data__ = new Et();
  }
  function ln(s) {
    return this.__data__.delete(s);
  }
  function an(s) {
    return this.__data__.get(s);
  }
  function un(s) {
    return this.__data__.has(s);
  }
  function sn(s, S) {
    var D = this.__data__;
    if (D instanceof Et) {
      var V = D.__data__;
      if (!Wt || V.length < x - 1)
        return V.push([s, S]), this;
      D = this.__data__ = new Tt(V);
    }
    return D.set(s, S), this;
  }
  xt.prototype.clear = on, xt.prototype.delete = ln, xt.prototype.get = an, xt.prototype.has = un, xt.prototype.set = sn;
  function ie(s, S) {
    var D = be(s) || ae(s) ? it(s.length, String) : [], V = D.length, ut = !!V;
    for (var rt in s)
      (S || ot.call(s, rt)) && !(ut && (rt == "length" || An(rt, V))) && D.push(rt);
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
      if (pt = On(s), !S)
        return mn(s, pt);
    } else {
      var yt = Ht(s), kt = yt == h || yt == l;
      if (je(s))
        return le(s, S);
      if (yt == u || yt == k || kt && !rt) {
        if (ft(s))
          return rt ? s : {};
        if (pt = Dt(kt ? {} : s), !S)
          return bn(s, It(pt, s));
      } else {
        if (!R[yt])
          return rt ? s : {};
        pt = En(s, yt, ye, S);
      }
    }
    ct || (ct = new xt());
    var Pt = ct.get(s);
    if (Pt)
      return Pt;
    if (ct.set(s, pt), !bt)
      var _t = D ? _n(s) : Oe(s);
    return G(_t || s, function(Nt, At) {
      _t && (At = Nt, Nt = s[At]), Ne(pt, At, ye(Nt, S, D, V, At, s, ct));
    }), pt;
  }
  function fn(s) {
    return Bt(s) ? qt(s) : {};
  }
  function cn(s, S, D) {
    var V = S(s);
    return be(s) ? V : Q(V, D(s));
  }
  function hn(s) {
    return at.call(s);
  }
  function dn(s) {
    if (!Bt(s) || Tn(s))
      return !1;
    var S = _e(s) || ft(s) ? wt : X;
    return S.test(St(s));
  }
  function pn(s) {
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
    return new Zt(S).set(new Zt(s)), S;
  }
  function Qt(s, S) {
    var D = S ? ge(s.buffer) : s.buffer;
    return new s.constructor(D, s.byteOffset, s.byteLength);
  }
  function Se(s, S, D) {
    var V = S ? D(ht(s), !0) : ht(s);
    return nt(V, F, new s.constructor());
  }
  function xe(s) {
    var S = new s.constructor(s.source, z.exec(s));
    return S.lastIndex = s.lastIndex, S;
  }
  function vn(s, S, D) {
    var V = S ? D(gt(s), !0) : gt(s);
    return nt(V, $, new s.constructor());
  }
  function yn(s) {
    return Te ? Object(Te.call(s)) : {};
  }
  function gn(s, S) {
    var D = S ? ge(s.buffer) : s.buffer;
    return new s.constructor(D, s.byteOffset, s.length);
  }
  function mn(s, S) {
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
  function bn(s, S) {
    return me(s, Ut(s), S);
  }
  function _n(s) {
    return cn(s, Oe, Ut);
  }
  function Jt(s, S) {
    var D = s.__data__;
    return wn(S) ? D[typeof S == "string" ? "string" : "hash"] : D.map;
  }
  function Rt(s, S) {
    var D = lt(s, S);
    return dn(D) ? D : void 0;
  }
  var Ut = se ? mt(se, Object) : Nn, Ht = hn;
  (ne && Ht(new ne(new ArrayBuffer(1))) != T || Wt && Ht(new Wt()) != t || jt && Ht(jt.resolve()) != o || re && Ht(new re()) != r || fe && Ht(new fe()) != n) && (Ht = function(s) {
    var S = at.call(s), D = S == u ? s.constructor : void 0, V = D ? St(D) : void 0;
    if (V)
      switch (V) {
        case ce:
          return T;
        case Xt:
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
  function On(s) {
    var S = s.length, D = s.constructor(S);
    return S && typeof s[0] == "string" && ot.call(s, "index") && (D.index = s.index, D.input = s.input), D;
  }
  function Dt(s) {
    return typeof s.constructor == "function" && !Pe(s) ? fn(dt(s)) : {};
  }
  function En(s, S, D, V) {
    var ut = s.constructor;
    switch (S) {
      case c:
        return ge(s);
      case m:
      case p:
        return new ut(+s);
      case T:
        return Qt(s, V);
      case b:
      case w:
      case L:
      case A:
      case g:
      case _:
      case O:
      case P:
      case j:
        return gn(s, V);
      case t:
        return Se(s, V, D);
      case e:
      case i:
        return new ut(s);
      case a:
        return xe(s);
      case r:
        return vn(s, V, D);
      case f:
        return yn(s);
    }
  }
  function An(s, S) {
    return S = S == null ? d : S, !!S && (typeof s == "number" || H.test(s)) && s > -1 && s % 1 == 0 && s < S;
  }
  function wn(s) {
    var S = typeof s;
    return S == "string" || S == "number" || S == "symbol" || S == "boolean" ? s !== "__proto__" : s === null;
  }
  function Tn(s) {
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
    return kn(s) && ot.call(s, "callee") && (!Ae.call(s, "callee") || at.call(s) == k);
  }
  var be = Array.isArray;
  function ue(s) {
    return s != null && Re(s.length) && !_e(s);
  }
  function kn(s) {
    return Me(s) && ue(s);
  }
  var je = ee || Sn;
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
    return ue(s) ? ie(s) : pn(s);
  }
  function Nn() {
    return [];
  }
  function Sn() {
    return !1;
  }
  B.exports = Le;
})(Ce, Ce.exports);
var Fe = { exports: {} };
(function(B, Y) {
  var x = 200, v = "__lodash_hash_undefined__", d = 1, k = 2, E = 9007199254740991, m = "[object Arguments]", p = "[object Array]", y = "[object AsyncFunction]", h = "[object Boolean]", l = "[object Date]", t = "[object Error]", e = "[object Function]", u = "[object GeneratorFunction]", o = "[object Map]", a = "[object Number]", r = "[object Null]", i = "[object Object]", f = "[object Promise]", n = "[object Proxy]", c = "[object RegExp]", T = "[object Set]", b = "[object String]", w = "[object Symbol]", L = "[object Undefined]", A = "[object WeakMap]", g = "[object ArrayBuffer]", _ = "[object DataView]", O = "[object Float32Array]", P = "[object Float64Array]", j = "[object Int8Array]", U = "[object Int16Array]", z = "[object Int32Array]", X = "[object Uint8Array]", H = "[object Uint8ClampedArray]", R = "[object Uint16Array]", N = "[object Uint32Array]", M = /[\\^$.*+?()[\]{}|]/g, I = /^\[object .+?Constructor\]$/, K = /^(?:0|[1-9]\d*)$/, C = {};
  C[O] = C[P] = C[j] = C[U] = C[z] = C[X] = C[H] = C[R] = C[N] = !0, C[m] = C[p] = C[g] = C[h] = C[_] = C[l] = C[t] = C[e] = C[o] = C[a] = C[i] = C[c] = C[T] = C[b] = C[A] = !1;
  var q = typeof Kt == "object" && Kt && Kt.Object === Object && Kt, F = typeof self == "object" && self && self.Object === Object && self, $ = q || F || Function("return this")(), G = Y && !Y.nodeType && Y, Q = G && !0 && B && !B.nodeType && B, nt = Q && Q.exports === G, it = nt && q.process, lt = function() {
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
  var at = Array.prototype, wt = Function.prototype, Ot = Object.prototype, vt = $["__core-js_shared__"], Zt = wt.toString, dt = Ot.hasOwnProperty, qt = function() {
    var s = /[^.]+$/.exec(vt && vt.keys && vt.keys.IE_PROTO || "");
    return s ? "Symbol(src)_1." + s : "";
  }(), Ae = Ot.toString, Ke = RegExp(
    "^" + Zt.call(dt).replace(M, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), se = nt ? $.Buffer : void 0, ee = $.Symbol, we = $.Uint8Array, ne = Ot.propertyIsEnumerable, Wt = at.splice, jt = ee ? ee.toStringTag : void 0, re = Object.getOwnPropertySymbols, fe = se ? se.isBuffer : void 0, Yt = st(Object.keys, Object), ce = Ut($, "DataView"), Xt = Ut($, "Map"), he = Ut($, "Promise"), de = Ut($, "Set"), pe = Ut($, "WeakMap"), $t = Ut(Object, "create"), Te = St(ce), Ft = St(Xt), $e = St(he), Ge = St(de), Ve = St(pe), ke = ee ? ee.prototype : void 0, ve = ke ? ke.valueOf : void 0;
  function Et(s) {
    var S = -1, D = s == null ? 0 : s.length;
    for (this.clear(); ++S < D; ) {
      var V = s[S];
      this.set(V[0], V[1]);
    }
  }
  function Ze() {
    this.__data__ = $t ? $t(null) : {}, this.size = 0;
  }
  function We(s) {
    var S = this.has(s) && delete this.__data__[s];
    return this.size -= S ? 1 : 0, S;
  }
  function Ye(s) {
    var S = this.__data__;
    if ($t) {
      var D = S[s];
      return D === v ? void 0 : D;
    }
    return dt.call(S, s) ? S[s] : void 0;
  }
  function Xe(s) {
    var S = this.__data__;
    return $t ? S[s] !== void 0 : dt.call(S, s);
  }
  function Qe(s, S) {
    var D = this.__data__;
    return this.size += this.has(s) ? 0 : 1, D[s] = $t && S === void 0 ? v : S, this;
  }
  Et.prototype.clear = Ze, Et.prototype.delete = We, Et.prototype.get = Ye, Et.prototype.has = Xe, Et.prototype.set = Qe;
  function Tt(s) {
    var S = -1, D = s == null ? 0 : s.length;
    for (this.clear(); ++S < D; ) {
      var V = s[S];
      this.set(V[0], V[1]);
    }
  }
  function Je() {
    this.__data__ = [], this.size = 0;
  }
  function tn(s) {
    var S = this.__data__, D = le(S, s);
    if (D < 0)
      return !1;
    var V = S.length - 1;
    return D == V ? S.pop() : Wt.call(S, D, 1), --this.size, !0;
  }
  function en(s) {
    var S = this.__data__, D = le(S, s);
    return D < 0 ? void 0 : S[D][1];
  }
  function nn(s) {
    return le(this.__data__, s) > -1;
  }
  function rn(s, S) {
    var D = this.__data__, V = le(D, s);
    return V < 0 ? (++this.size, D.push([s, S])) : D[V][1] = S, this;
  }
  Tt.prototype.clear = Je, Tt.prototype.delete = tn, Tt.prototype.get = en, Tt.prototype.has = nn, Tt.prototype.set = rn;
  function xt(s) {
    var S = -1, D = s == null ? 0 : s.length;
    for (this.clear(); ++S < D; ) {
      var V = s[S];
      this.set(V[0], V[1]);
    }
  }
  function on() {
    this.size = 0, this.__data__ = {
      hash: new Et(),
      map: new (Xt || Tt)(),
      string: new Et()
    };
  }
  function ln(s) {
    var S = Rt(this, s).delete(s);
    return this.size -= S ? 1 : 0, S;
  }
  function an(s) {
    return Rt(this, s).get(s);
  }
  function un(s) {
    return Rt(this, s).has(s);
  }
  function sn(s, S) {
    var D = Rt(this, s), V = D.size;
    return D.set(s, S), this.size += D.size == V ? 0 : 1, this;
  }
  xt.prototype.clear = on, xt.prototype.delete = ln, xt.prototype.get = an, xt.prototype.has = un, xt.prototype.set = sn;
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
  function fn(s) {
    var S = this.__data__, D = S.delete(s);
    return this.size = S.size, D;
  }
  function cn(s) {
    return this.__data__.get(s);
  }
  function hn(s) {
    return this.__data__.has(s);
  }
  function dn(s, S) {
    var D = this.__data__;
    if (D instanceof Tt) {
      var V = D.__data__;
      if (!Xt || V.length < x - 1)
        return V.push([s, S]), this.size = ++D.size, this;
      D = this.__data__ = new xt(V);
    }
    return D.set(s, S), this.size = D.size, this;
  }
  It.prototype.clear = ye, It.prototype.delete = fn, It.prototype.get = cn, It.prototype.has = hn, It.prototype.set = dn;
  function pn(s, S) {
    var D = ae(s), V = !D && qe(s), ut = !D && !V && ue(s), rt = !D && !V && !ut && Me(s), ct = D || V || ut || rt, pt = ct ? Z(s.length, String) : [], bt = pt.length;
    for (var yt in s)
      (S || dt.call(s, yt)) && !(ct && (yt == "length" || ut && (yt == "offset" || yt == "parent") || rt && (yt == "buffer" || yt == "byteLength" || yt == "byteOffset") || En(yt, bt))) && pt.push(yt);
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
  function Qt(s) {
    return s == null ? s === void 0 ? L : r : jt && jt in Object(s) ? Ht(s) : Pe(s);
  }
  function Se(s) {
    return Bt(s) && Qt(s) == m;
  }
  function xe(s, S, D, V, ut) {
    return s === S ? !0 : s == null || S == null || !Bt(s) && !Bt(S) ? s !== s && S !== S : vn(s, S, D, V, xe, ut);
  }
  function vn(s, S, D, V, ut, rt) {
    var ct = ae(s), pt = ae(S), bt = ct ? p : Dt(s), yt = pt ? p : Dt(S);
    bt = bt == m ? i : bt, yt = yt == m ? i : yt;
    var kt = bt == i, Pt = yt == i, _t = bt == yt;
    if (_t && ue(s)) {
      if (!ue(S))
        return !1;
      ct = !0, kt = !1;
    }
    if (_t && !kt)
      return rt || (rt = new It()), ct || Me(s) ? me(s, S, D, V, ut, rt) : bn(s, S, bt, D, V, ut, rt);
    if (!(D & d)) {
      var Nt = kt && dt.call(s, "__wrapped__"), At = Pt && dt.call(S, "__wrapped__");
      if (Nt || At) {
        var Gt = Nt ? s.value() : s, zt = At ? S.value() : S;
        return rt || (rt = new It()), ut(Gt, zt, D, V, rt);
      }
    }
    return _t ? (rt || (rt = new It()), _n(s, S, D, V, ut, rt)) : !1;
  }
  function yn(s) {
    if (!Re(s) || wn(s))
      return !1;
    var S = je(s) ? Ke : I;
    return S.test(St(s));
  }
  function gn(s) {
    return Bt(s) && _e(s.length) && !!C[Qt(s)];
  }
  function mn(s) {
    if (!Tn(s))
      return Yt(s);
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
    var kt = -1, Pt = !0, _t = D & k ? new ie() : void 0;
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
        if (!gt(S, function(zt, te) {
          if (!tt(_t, te) && (Nt === zt || ut(Nt, zt, D, V, rt)))
            return _t.push(te);
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
  function bn(s, S, D, V, ut, rt, ct) {
    switch (D) {
      case _:
        if (s.byteLength != S.byteLength || s.byteOffset != S.byteOffset)
          return !1;
        s = s.buffer, S = S.buffer;
      case g:
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
      case T:
        var bt = V & d;
        if (pt || (pt = ot), s.size != S.size && !bt)
          return !1;
        var yt = ct.get(s);
        if (yt)
          return yt == S;
        V |= k, ct.set(s, S);
        var kt = me(pt(s), pt(S), V, ut, rt, ct);
        return ct.delete(s), kt;
      case w:
        if (ve)
          return ve.call(s) == ve.call(S);
    }
    return !1;
  }
  function _n(s, S, D, V, ut, rt) {
    var ct = D & d, pt = Jt(s), bt = pt.length, yt = Jt(S), kt = yt.length;
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
      var zt = s[_t], te = S[_t];
      if (V)
        var Cn = ct ? V(te, zt, _t, S, s, rt) : V(zt, te, _t, s, S, rt);
      if (!(Cn === void 0 ? zt === te || ut(zt, te, D, V, rt) : Cn)) {
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
  function Jt(s) {
    return ge(s, Oe, On);
  }
  function Rt(s, S) {
    var D = s.__data__;
    return An(S) ? D[typeof S == "string" ? "string" : "hash"] : D.map;
  }
  function Ut(s, S) {
    var D = et(s, S);
    return yn(D) ? D : void 0;
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
  var On = re ? function(s) {
    return s == null ? [] : (s = Object(s), ht(re(s), function(S) {
      return ne.call(s, S);
    }));
  } : Nn, Dt = Qt;
  (ce && Dt(new ce(new ArrayBuffer(1))) != _ || Xt && Dt(new Xt()) != o || he && Dt(he.resolve()) != f || de && Dt(new de()) != T || pe && Dt(new pe()) != A) && (Dt = function(s) {
    var S = Qt(s), D = S == i ? s.constructor : void 0, V = D ? St(D) : "";
    if (V)
      switch (V) {
        case Te:
          return _;
        case Ft:
          return o;
        case $e:
          return f;
        case Ge:
          return T;
        case Ve:
          return A;
      }
    return S;
  });
  function En(s, S) {
    return S = S == null ? E : S, !!S && (typeof s == "number" || K.test(s)) && s > -1 && s % 1 == 0 && s < S;
  }
  function An(s) {
    var S = typeof s;
    return S == "string" || S == "number" || S == "symbol" || S == "boolean" ? s !== "__proto__" : s === null;
  }
  function wn(s) {
    return !!qt && qt in s;
  }
  function Tn(s) {
    var S = s && s.constructor, D = typeof S == "function" && S.prototype || Ot;
    return s === D;
  }
  function Pe(s) {
    return Ae.call(s);
  }
  function St(s) {
    if (s != null) {
      try {
        return Zt.call(s);
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
  var ue = fe || Sn;
  function kn(s, S) {
    return xe(s, S);
  }
  function je(s) {
    if (!Re(s))
      return !1;
    var S = Qt(s);
    return S == e || S == u || S == y || S == n;
  }
  function _e(s) {
    return typeof s == "number" && s > -1 && s % 1 == 0 && s <= E;
  }
  function Re(s) {
    var S = typeof s;
    return s != null && (S == "object" || S == "function");
  }
  function Bt(s) {
    return s != null && typeof s == "object";
  }
  var Me = ft ? W(ft) : gn;
  function Oe(s) {
    return be(s) ? pn(s) : mn(s);
  }
  function Nn() {
    return [];
  }
  function Sn() {
    return !1;
  }
  B.exports = kn;
})(Fe, Fe.exports);
var In = {};
Object.defineProperty(In, "__esModule", { value: !0 });
const dr = Ce.exports, pr = Fe.exports;
var qn;
(function(B) {
  function Y(k = {}, E = {}, m = !1) {
    typeof k != "object" && (k = {}), typeof E != "object" && (E = {});
    let p = dr(E);
    m || (p = Object.keys(p).reduce((y, h) => (p[h] != null && (y[h] = p[h]), y), {}));
    for (const y in k)
      k[y] !== void 0 && E[y] === void 0 && (p[y] = k[y]);
    return Object.keys(p).length > 0 ? p : void 0;
  }
  B.compose = Y;
  function x(k = {}, E = {}) {
    typeof k != "object" && (k = {}), typeof E != "object" && (E = {});
    const m = Object.keys(k).concat(Object.keys(E)).reduce((p, y) => (pr(k[y], E[y]) || (p[y] = E[y] === void 0 ? null : E[y]), p), {});
    return Object.keys(m).length > 0 ? m : void 0;
  }
  B.diff = x;
  function v(k = {}, E = {}) {
    k = k || {};
    const m = Object.keys(E).reduce((p, y) => (E[y] !== k[y] && k[y] !== void 0 && (p[y] = E[y]), p), {});
    return Object.keys(k).reduce((p, y) => (k[y] !== E[y] && E[y] === void 0 && (p[y] = null), p), m);
  }
  B.invert = v;
  function d(k, E, m = !1) {
    if (typeof k != "object")
      return E;
    if (typeof E != "object")
      return;
    if (!m)
      return E;
    const p = Object.keys(E).reduce((y, h) => (k[h] === void 0 && (y[h] = E[h]), y), {});
    return Object.keys(p).length > 0 ? p : void 0;
  }
  B.transform = d;
})(qn || (qn = {}));
In.default = qn;
var ze = {};
Object.defineProperty(ze, "__esModule", { value: !0 });
var jn;
(function(B) {
  function Y(x) {
    return typeof x.delete == "number" ? x.delete : typeof x.retain == "number" ? x.retain : typeof x.retain == "object" && x.retain !== null ? 1 : typeof x.insert == "string" ? x.insert.length : 1;
  }
  B.length = Y;
})(jn || (jn = {}));
ze.default = jn;
var Dn = {};
Object.defineProperty(Dn, "__esModule", { value: !0 });
const Kn = ze;
class vr {
  constructor(Y) {
    this.ops = Y, this.index = 0, this.offset = 0;
  }
  hasNext() {
    return this.peekLength() < 1 / 0;
  }
  next(Y) {
    Y || (Y = 1 / 0);
    const x = this.ops[this.index];
    if (x) {
      const v = this.offset, d = Kn.default.length(x);
      if (Y >= d - v ? (Y = d - v, this.index += 1, this.offset = 0) : this.offset += Y, typeof x.delete == "number")
        return { delete: Y };
      {
        const k = {};
        return x.attributes && (k.attributes = x.attributes), typeof x.retain == "number" ? k.retain = Y : typeof x.retain == "object" && x.retain !== null ? k.retain = x.retain : typeof x.insert == "string" ? k.insert = x.insert.substr(v, Y) : k.insert = x.insert, k;
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
    const Y = this.ops[this.index];
    return Y ? typeof Y.delete == "number" ? "delete" : typeof Y.retain == "number" || typeof Y.retain == "object" && Y.retain !== null ? "retain" : "insert" : "retain";
  }
  rest() {
    if (this.hasNext()) {
      if (this.offset === 0)
        return this.ops.slice(this.index);
      {
        const Y = this.offset, x = this.index, v = this.next(), d = this.ops.slice(this.index);
        return this.offset = Y, this.index = x, [v].concat(d);
      }
    } else
      return [];
  }
}
Dn.default = vr;
(function(B, Y) {
  Object.defineProperty(Y, "__esModule", { value: !0 }), Y.AttributeMap = Y.OpIterator = Y.Op = void 0;
  const x = hr, v = Ce.exports, d = Fe.exports, k = In;
  Y.AttributeMap = k.default;
  const E = ze;
  Y.Op = E.default;
  const m = Dn;
  Y.OpIterator = m.default;
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
      return this.reduce((t, e) => e.insert ? t + E.default.length(e) : e.delete ? t - e.delete : t, 0);
    }
    length() {
      return this.reduce((t, e) => t + E.default.length(e), 0);
    }
    slice(t = 0, e = 1 / 0) {
      const u = [], o = new m.default(this.ops);
      let a = 0;
      for (; a < e && o.hasNext(); ) {
        let r;
        a < t ? r = o.next(t - a) : (r = o.next(e - a), u.push(r)), a += E.default.length(r);
      }
      return new h(u);
    }
    compose(t) {
      const e = new m.default(this.ops), u = new m.default(t.ops), o = [], a = u.peek();
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
              const b = f.retain == null ? "insert" : "retain", [w, L, A] = y(f[b], n.retain), g = h.getHandler(w);
              c[b] = {
                [w]: g.compose(L, A, b === "retain")
              };
            }
            const T = k.default.compose(f.attributes, n.attributes, typeof f.retain == "number");
            if (T && (c.attributes = T), r.push(c), !u.hasNext() && d(r.ops[r.ops.length - 1], c)) {
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
      }).join("")), o = new h(), a = x(u[0], u[1], e), r = new m.default(this.ops), i = new m.default(t.ops);
      return a.forEach((f) => {
        let n = f[1].length;
        for (; n > 0; ) {
          let c = 0;
          switch (f[0]) {
            case x.INSERT:
              c = Math.min(i.peekLength(), n), o.push(i.next(c));
              break;
            case x.DELETE:
              c = Math.min(n, r.peekLength()), r.next(c), o.delete(c);
              break;
            case x.EQUAL:
              c = Math.min(r.peekLength(), i.peekLength(), n);
              const T = r.next(c), b = i.next(c);
              d(T.insert, b.insert) ? o.retain(c, k.default.diff(T.attributes, b.attributes)) : o.push(b).delete(c);
              break;
          }
          n -= c;
        }
      }), o.chop();
    }
    eachLine(t, e = `
`) {
      const u = new m.default(this.ops);
      let o = new h(), a = 0;
      for (; u.hasNext(); ) {
        if (u.peekType() !== "insert")
          return;
        const r = u.peek(), i = E.default.length(r) - u.peekLength(), f = typeof r.insert == "string" ? r.insert.indexOf(e, i) - i : -1;
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
          e.delete(E.default.length(o));
        else {
          if (typeof o.retain == "number" && o.attributes == null)
            return e.retain(o.retain), u + o.retain;
          if (o.delete || typeof o.retain == "number") {
            const a = o.delete || o.retain;
            return t.slice(u, u + a).forEach((i) => {
              o.delete ? e.push(i) : o.retain && o.attributes && e.retain(E.default.length(i), k.default.invert(o.attributes, i.attributes));
            }), u + a;
          } else if (typeof o.retain == "object" && o.retain !== null) {
            const a = t.slice(u, u + 1), r = new m.default(a.ops).next(), [i, f, n] = y(o.retain, r.insert), c = h.getHandler(i);
            return e.retain({ [i]: c.invert(f, n) }, k.default.invert(o.attributes, r.attributes)), u + 1;
          }
        }
        return u;
      }, 0), e.chop();
    }
    transform(t, e = !1) {
      if (e = !!e, typeof t == "number")
        return this.transformPosition(t, e);
      const u = t, o = new m.default(this.ops), a = new m.default(u.ops), r = new h();
      for (; o.hasNext() || a.hasNext(); )
        if (o.peekType() === "insert" && (e || a.peekType() !== "insert"))
          r.retain(E.default.length(o.next()));
        else if (a.peekType() === "insert")
          r.push(a.next());
        else {
          const i = Math.min(o.peekLength(), a.peekLength()), f = o.next(i), n = a.next(i);
          if (f.delete)
            continue;
          if (n.delete)
            r.push(n);
          else {
            const c = f.retain, T = n.retain;
            let b = typeof T == "object" && T !== null ? T : i;
            if (typeof c == "object" && c !== null && typeof T == "object" && T !== null) {
              const w = Object.keys(c)[0];
              if (w === Object.keys(T)[0]) {
                const L = h.getHandler(w);
                L && (b = {
                  [w]: L.transform(c[w], T[w], e)
                });
              }
            }
            r.retain(b, k.default.transform(f.attributes, n.attributes, e));
          }
        }
      return r.chop();
    }
    transformPosition(t, e = !1) {
      e = !!e;
      const u = new m.default(this.ops);
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
  h.Op = E.default, h.OpIterator = m.default, h.AttributeMap = k.default, h.handlers = {}, Y.default = h, B.exports = h, B.exports.default = h;
})(Ln, Ln.exports);
const yr = /* @__PURE__ */ Gn(Ln.exports), Bn = Vt.import("attributors/style/size");
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
Vt.register(Bn, !0);
const Jn = Vt.import("attributors/style/font"), tr = [
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
Vt.register(Jn, !0);
const gr = Bn.whitelist, $n = {
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
    [{ size: gr }],
    [{ header: [1, 2, 3, 4, 5, 6, !1] }],
    [{ font: tr }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["clean"],
    ["link", "image", "video"]
  ]
};
const mr = { class: "vusui-editor" }, br = /* @__PURE__ */ Ue("i", { class: "drag-arrow top" }, null, -1), _r = /* @__PURE__ */ Ue("i", { class: "drag-line" }, null, -1), Or = /* @__PURE__ */ Ue("i", { class: "drag-arrow bottom" }, null, -1), Er = [
  br,
  _r,
  Or
], Ar = {
  name: "VusuiEditor"
}, Be = /* @__PURE__ */ er({
  ...Ar,
  props: {
    content: {
      type: [String, Object],
      default: () => {
      }
    },
    contentType: {
      type: String,
      default: "html",
      validator: (B) => ["delta", "html", "text"].includes(B)
    },
    theme: {
      type: String,
      default: "snow",
      validator: (B) => ["snow", "bubble"].includes(B)
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
      validator: (B) => typeof B == "string" && B !== "" ? B.charAt(0) === "#" ? !0 : Object.keys($n).indexOf(B) !== -1 : !0
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
    "change",
    "ready",
    "input",
    "blur",
    "focus",
    "update:content"
  ],
  setup(B, { expose: Y, emit: x }) {
    const v = B, d = xn(), k = xn(), E = xn(!1), m = {
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
      (O) => {
        m.quill && m.quill.enable(!O);
      }
    ), Fn(E, (O) => {
      x(O ? "focus" : "blur", d);
    }), nr(() => {
      l();
    }), rr(() => {
      m.quill = null;
    });
    const h = () => {
      var P, j;
      const O = {};
      if (v.theme && (O.theme = v.theme), v.placeholder && (O.placeholder = v.placeholder), (v.readOnly || ((P = v.options) == null ? void 0 : P.readOnly)) && (O.readOnly = v.readOnly, O.placeholder = v.content ? "" : ((j = v.options) == null ? void 0 : j.placeholder) || v.placeholder), v.toolbar && v.toolbar !== "" && (O.modules = {
        toolbar: (() => {
          if (typeof v.toolbar == "object")
            return v.toolbar;
          if (typeof v.toolbar == "string")
            return v.toolbar.charAt(0) === "#" ? v.toolbar : $n[v.toolbar];
        })()
      }), v.modules) {
        const U = (() => {
          var X, H;
          const z = {};
          if (Array.isArray(v.modules))
            for (const R of v.modules)
              z[R.name] = (X = R.options) != null ? X : {};
          else
            z[v.modules.name] = (H = v.modules.options) != null ? H : {};
          return z;
        })();
        O.modules = Object.assign({}, O.modules, U);
      }
      return Object.assign({}, v.options, O);
    }, l = () => {
      var O, P, j, U, z;
      if (!d.value)
        return !1;
      if (m.options = h(), v.modules)
        if (Array.isArray(v.modules))
          for (const X of v.modules)
            Vt.register(`modules/${X.name}`, X.module);
        else
          Vt.register(`modules/${v.modules.name}`, v.modules.module);
      m.quill = new Vt(d.value, m.options), f(v.content), m.quill.on("text-change", t), m.quill.on("selection-change", e), m.quill.on("change", u), v.theme !== "bubble" && ((P = (O = d.value) == null ? void 0 : O.classList) == null || P.remove("ql-bubble")), v.theme !== "snow" && ((U = (j = d.value) == null ? void 0 : j.classList) == null || U.remove("ql-snow")), (z = m.quill.getModule("toolbar")) == null || z.container.addEventListener("mousedown", (X) => {
        X.preventDefault();
      }), x("ready", m.quill);
    }, t = (O, P, j) => {
      x("update:content", i()), x("textChange", { delta: O, oldContents: P, source: j });
    }, e = (O, P, j) => {
      var U;
      E.value = !!((U = m.quill) != null && U.hasFocus()), x("selectionChange", { range: O, oldRange: P, source: j });
    }, u = (...O) => {
      O[0] === "text-change" && x("change", {
        name: O[0],
        delta: O[1],
        oldContents: O[2],
        source: O[3]
      }), O[0] === "selection-change" && x("change", {
        name: O[0],
        range: O[1],
        oldRange: O[2],
        source: O[3]
      });
    }, o = () => d.value, a = () => {
      var O, P;
      return (P = (O = m.quill) == null ? void 0 : O.getModule("toolbar")) == null ? void 0 : P.container;
    }, r = () => {
      if (m.quill)
        return m.quill;
      throw "Quill\u52A0\u8F7D\u5931\u8D25";
    }, i = (O, P) => {
      var j;
      return v.contentType === "html" ? T() : v.contentType === "text" ? n(O, P) : (j = m.quill) == null ? void 0 : j.getContents(O, P);
    }, f = (O, P = "api") => {
      var j;
      v.contentType === "html" ? b(O) : v.contentType === "text" ? c(O, P) : (j = m.quill) == null || j.setContents(O, P);
    }, n = (O, P) => {
      var j, U;
      return (U = (j = m.quill) == null ? void 0 : j.getText(O, P)) != null ? U : "";
    }, c = (O, P = "api") => {
      var j;
      (j = m.quill) == null || j.setText(O, P);
    }, T = () => {
      var O, P;
      return (P = (O = m.quill) == null ? void 0 : O.root.innerHTML) != null ? P : "";
    }, b = (O) => {
      m.quill && (m.quill.root.innerHTML = O);
    }, w = (O, P = "api") => {
      var U, z;
      const j = (U = m.quill) == null ? void 0 : U.clipboard.convert(O);
      j && ((z = m.quill) == null || z.setContents(j, P));
    }, L = () => {
      lr(() => {
        l();
      });
    }, A = (O) => {
      document.onselectstart = () => !1, document.ondragstart = () => !1, p.startMouseTop = O.clientY, p.endMouseTop = O.clientY, document.addEventListener("mousemove", g), document.addEventListener("mouseup", _);
    }, g = (O) => {
      const { endMouseTop: P } = p, j = d.value.getBoundingClientRect().height || 0;
      let U = 0;
      const z = Math.abs(
        parseInt(((P - O.clientY) * 100).toString(), 10) / 100
      );
      if (P < O.clientY) {
        if (j >= y.MaxHeight)
          return k.value.style.cursor = "s-resize", !1;
        U = j + z;
      } else {
        if (j <= y.MinHeight)
          return k.value.style.cursor = "n-resize", !1;
        U = j - z;
      }
      U > y.MaxHeight && (U = y.MaxHeight), U < y.MinHeight && (U = y.MinHeight), d.value.style.height = U + "px", k.value.style.cursor = "move", p.endMouseTop = O.clientY;
    }, _ = () => {
      document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", _), document.onselectstart = null, document.ondragstart = null;
    };
    return Y({
      editor: d,
      editorDrag: k,
      reinit: L,
      getEditor: o,
      getToolbar: a,
      getQuill: r,
      getContents: i,
      setContents: f,
      getHTML: T,
      setHTML: b,
      pasteHTML: w,
      getText: n,
      setText: c
    }), (O, P) => (Un(), Hn("div", mr, [
      Ue("div", ir({
        ref_key: "editor",
        ref: d,
        class: "vusui-editor-container",
        style: { height: B.height + "px" }
      }, O.$attrs), null, 16),
      B.showDrag ? (Un(), Hn("div", {
        key: 0,
        ref_key: "editorDrag",
        ref: k,
        class: "vusui-editor-drag",
        onMousedown: A
      }, Er, 544)) : or("", !0)
    ]));
  }
});
Be.install = (B) => {
  B.component(Be.name, Be);
};
const Tr = { Quill: Vt, Delta: yr, VusuiEditor: Be };
export {
  yr as Delta,
  Vt as Quill,
  Be as VusuiEditor,
  Tr as default
};