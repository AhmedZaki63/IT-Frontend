! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = "length" in t && t.length,
            i = K.type(t);
        return "function" === i || K.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function n(t, e, i) {
        if (K.isFunction(e)) return K.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return K.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (at.test(e)) return K.filter(e, t, i);
            e = K.filter(e, t)
        }
        return K.grep(t, function(t) {
            return X.call(e, t) >= 0 !== i
        })
    }

    function r(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function s(t) {
        var e = ft[t] = {};
        return K.each(t.match(pt) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function o() {
        Z.removeEventListener("DOMContentLoaded", o, !1), t.removeEventListener("load", o, !1), K.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = K.expando + a.uid++
    }

    function l(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(bt, "-$1").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : _t.test(i) ? K.parseJSON(i) : i
                } catch (r) {}
                yt.set(t, e, i)
            } else i = void 0;
        return i
    }

    function u() {
        return !0
    }

    function c() {
        return !1
    }

    function h() {
        try {
            return Z.activeElement
        } catch (t) {}
    }

    function d(t, e) {
        return K.nodeName(t, "table") && K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function p(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function f(t) {
        var e = jt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function m(t, e) {
        for (var i = 0, n = t.length; n > i; i++) vt.set(t[i], "globalEval", !e || vt.get(e[i], "globalEval"))
    }

    function g(t, e) {
        var i, n, r, s, o, a, l, u;
        if (1 === e.nodeType) {
            if (vt.hasData(t) && (s = vt.access(t), o = vt.set(e, s), u = s.events)) {
                delete o.handle, o.events = {};
                for (r in u)
                    for (i = 0, n = u[r].length; n > i; i++) K.event.add(e, r, u[r][i])
            }
            yt.hasData(t) && (a = yt.access(t), l = K.extend({}, a), yt.set(e, l))
        }
    }

    function v(t, e) {
        var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && K.nodeName(t, e) ? K.merge([t], i) : i
    }

    function y(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && kt.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
    }

    function _(e, i) {
        var n, r = K(i.createElement(e)).appendTo(i.body),
            s = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0])) ? n.display : K.css(r[0], "display");
        return r.detach(), s
    }

    function b(t) {
        var e = Z,
            i = Ht[t];
        return i || (i = _(t, e), "none" !== i && i || (Ft = (Ft || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ft[0].contentDocument, e.write(), e.close(), i = _(t, e), Ft.detach()), Ht[t] = i), i
    }

    function w(t, e, i) {
        var n, r, s, o, a = t.style;
        return i = i || Bt(t), i && (o = i.getPropertyValue(e) || i[e]), i && ("" !== o || K.contains(t.ownerDocument, t) || (o = K.style(t, e)), qt.test(o) && zt.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
    }

    function x(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function T(t, e) {
        if (e in t) return e;
        for (var i = e[0].toUpperCase() + e.slice(1), n = e, r = Qt.length; r--;)
            if (e = Qt[r] + i, e in t) return e;
        return n
    }

    function k(t, e, i) {
        var n = Ut.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function S(t, e, i, n, r) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === i && (o += K.css(t, i + xt[s], !0, r)), n ? ("content" === i && (o -= K.css(t, "padding" + xt[s], !0, r)), "margin" !== i && (o -= K.css(t, "border" + xt[s] + "Width", !0, r))) : (o += K.css(t, "padding" + xt[s], !0, r), "padding" !== i && (o += K.css(t, "border" + xt[s] + "Width", !0, r)));
        return o
    }

    function C(t, e, i) {
        var n = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            s = Bt(t),
            o = "border-box" === K.css(t, "boxSizing", !1, s);
        if (0 >= r || null == r) {
            if (r = w(t, e, s), (0 > r || null == r) && (r = t.style[e]), qt.test(r)) return r;
            n = o && (G.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + S(t, e, i || (o ? "border" : "content"), n, s) + "px"
    }

    function P(t, e) {
        for (var i, n, r, s = [], o = 0, a = t.length; a > o; o++) n = t[o], n.style && (s[o] = vt.get(n, "olddisplay"), i = n.style.display, e ? (s[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && Tt(n) && (s[o] = vt.access(n, "olddisplay", b(n.nodeName)))) : (r = Tt(n), "none" === i && r || vt.set(n, "olddisplay", r ? i : K.css(n, "display"))));
        for (o = 0; a > o; o++) n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[o] || "" : "none"));
        return t
    }

    function $(t, e, i, n, r) {
        return new $.prototype.init(t, e, i, n, r)
    }

    function A() {
        return setTimeout(function() {
            Gt = void 0
        }), Gt = K.now()
    }

    function O(t, e) {
        var i, n = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = xt[n], r["margin" + i] = r["padding" + i] = t;
        return e && (r.opacity = r.width = t), r
    }

    function E(t, e, i) {
        for (var n, r = (ie[e] || []).concat(ie["*"]), s = 0, o = r.length; o > s; s++)
            if (n = r[s].call(i, e, t)) return n
    }

    function D(t, e, i) {
        var n, r, s, o, a, l, u, c, h = this,
            d = {},
            p = t.style,
            f = t.nodeType && Tt(t),
            m = vt.get(t, "fxshow");
        i.queue || (a = K._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, h.always(function() {
            h.always(function() {
                a.unqueued--, K.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], u = K.css(t, "display"), c = "none" === u ? vt.get(t, "olddisplay") || b(t.nodeName) : u, "inline" === c && "none" === K.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", h.always(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (r = e[n], Jt.exec(r)) {
                if (delete e[n], s = s || "toggle" === r, r === (f ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[n]) continue;
                    f = !0
                }
                d[n] = m && m[n] || K.style(t, n)
            } else u = void 0;
        if (K.isEmptyObject(d)) "inline" === ("none" === u ? b(t.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden" in m && (f = m.hidden) : m = vt.access(t, "fxshow", {}), s && (m.hidden = !f), f ? K(t).show() : h.done(function() {
                K(t).hide()
            }), h.done(function() {
                var e;
                vt.remove(t, "fxshow");
                for (e in d) K.style(t, e, d[e])
            });
            for (n in d) o = E(f ? m[n] : 0, n, h), n in m || (m[n] = o.start, f && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function N(t, e) {
        var i, n, r, s, o;
        for (i in t)
            if (n = K.camelCase(i), r = e[n], s = t[i], K.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), o = K.cssHooks[n], o && "expand" in o) {
                s = o.expand(s), delete t[n];
                for (i in s) i in t || (t[i] = s[i], e[i] = r)
            } else e[n] = r
    }

    function R(t, e, i) {
        var n, r, s = 0,
            o = ee.length,
            a = K.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = Gt || A(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, s = 1 - n, o = 0, l = u.tweens.length; l > o; o++) u.tweens[o].run(s);
                return a.notifyWith(t, [u, s, i]), 1 > s && l ? i : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: K.extend({}, e),
                opts: K.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Gt || A(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = K.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n > i; i++) u.tweens[i].run(1);
                    return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (N(c, u.opts.specialEasing); o > s; s++)
            if (n = ee[s].call(u, t, c, u.opts)) return n;
        return K.map(c, E, u), K.isFunction(u.opts.start) && u.opts.start.call(t, u), K.fx.timer(K.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function M(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, r = 0,
                s = e.toLowerCase().match(pt) || [];
            if (K.isFunction(i))
                for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function j(t, e, i, n) {
        function r(a) {
            var l;
            return s[a] = !0, K.each(t[a] || [], function(t, a) {
                var u = a(e, i, n);
                return "string" != typeof u || o || s[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var s = {},
            o = t === _e;
        return r(e.dataTypes[0]) || !s["*"] && r("*")
    }

    function I(t, e) {
        var i, n, r = K.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && K.extend(!0, t, n), t
    }

    function L(t, e, i) {
        for (var n, r, s, o, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n)
            for (r in a)
                if (a[r] && a[r].test(n)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in i) s = l[0];
        else {
            for (r in i) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    s = r;
                    break
                }
                o || (o = r)
            }
            s = s || o
        }
        return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
    }

    function F(t, e, i, n) {
        var r, s, o, a, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
        for (s = c.shift(); s;)
            if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (o = u[l + " " + s] || u["* " + s], !o)
                for (r in u)
                    if (a = r.split(" "), a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                        o === !0 ? o = u[r] : u[r] !== !0 && (s = a[0], c.unshift(a[1]));
                        break
                    }
            if (o !== !0)
                if (o && t["throws"]) e = o(e);
                else try {
                    e = o(e)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: o ? h : "No conversion from " + l + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function H(t, e, i, n) {
        var r;
        if (K.isArray(e)) K.each(e, function(e, r) {
            i || ke.test(t) ? n(t, r) : H(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
        });
        else if (i || "object" !== K.type(e)) n(t, e);
        else
            for (r in e) H(t + "[" + r + "]", e[r], i, n)
    }

    function z(t) {
        return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var q = [],
        B = q.slice,
        W = q.concat,
        U = q.push,
        X = q.indexOf,
        Y = {},
        V = Y.toString,
        Q = Y.hasOwnProperty,
        G = {},
        Z = t.document,
        J = "2.1.4",
        K = function(t, e) {
            return new K.fn.init(t, e)
        },
        tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        et = /^-ms-/,
        it = /-([\da-z])/gi,
        nt = function(t, e) {
            return e.toUpperCase()
        };
    K.fn = K.prototype = {
        jquery: J,
        constructor: K,
        selector: "",
        length: 0,
        toArray: function() {
            return B.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : B.call(this)
        },
        pushStack: function(t) {
            var e = K.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return K.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(K.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(B.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: U,
        sort: q.sort,
        splice: q.splice
    }, K.extend = K.fn.extend = function() {
        var t, e, i, n, r, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || K.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = o[e], n = t[e], o !== n && (u && n && (K.isPlainObject(n) || (r = K.isArray(n))) ? (r ? (r = !1, s = i && K.isArray(i) ? i : []) : s = i && K.isPlainObject(i) ? i : {}, o[e] = K.extend(u, s, n)) : void 0 !== n && (o[e] = n));
        return o
    }, K.extend({
        expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === K.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !K.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(t) {
            return "object" !== K.type(t) || t.nodeType || K.isWindow(t) ? !1 : t.constructor && !Q.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Y[V.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, i = eval;
            t = K.trim(t), t && (1 === t.indexOf("use strict") ? (e = Z.createElement("script"), e.text = t, Z.head.appendChild(e).parentNode.removeChild(e)) : i(t))
        },
        camelCase: function(t) {
            return t.replace(et, "ms-").replace(it, nt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, n) {
            var r, s = 0,
                o = t.length,
                a = i(t);
            if (n) {
                if (a)
                    for (; o > s && (r = e.apply(t[s], n), r !== !1); s++);
                else
                    for (s in t)
                        if (r = e.apply(t[s], n), r === !1) break
            } else if (a)
                for (; o > s && (r = e.call(t[s], s, t[s]), r !== !1); s++);
            else
                for (s in t)
                    if (r = e.call(t[s], s, t[s]), r === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(tt, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? K.merge(n, "string" == typeof t ? [t] : t) : U.call(n, t)), n
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : X.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, r = t.length; i > n; n++) t[r++] = e[n];
            return t.length = r, t
        },
        grep: function(t, e, i) {
            for (var n, r = [], s = 0, o = t.length, a = !i; o > s; s++) n = !e(t[s], s), n !== a && r.push(t[s]);
            return r
        },
        map: function(t, e, n) {
            var r, s = 0,
                o = t.length,
                a = i(t),
                l = [];
            if (a)
                for (; o > s; s++) r = e(t[s], s, n), null != r && l.push(r);
            else
                for (s in t) r = e(t[s], s, n), null != r && l.push(r);
            return W.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, r;
            return "string" == typeof e && (i = t[e], e = t, t = i), K.isFunction(t) ? (n = B.call(arguments, 2), r = function() {
                return t.apply(e || this, n.concat(B.call(arguments)))
            }, r.guid = t.guid = t.guid || K.guid++, r) : void 0
        },
        now: Date.now,
        support: G
    }), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        Y["[object " + e + "]"] = e.toLowerCase()
    });
    var rt = function(t) {
        function e(t, e, i, n) {
            var r, s, o, a, l, u, h, p, f, m;
            if ((e ? e.ownerDocument || e : H) !== D && E(e), e = e || D, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
            if (!n && R) {
                if (11 !== a && (r = yt.exec(t)))
                    if (o = r[1]) {
                        if (9 === a) {
                            if (s = e.getElementById(o), !s || !s.parentNode) return i;
                            if (s.id === o) return i.push(s), i
                        } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(o)) && L(e, s) && s.id === o) return i.push(s), i
                    } else {
                        if (r[2]) return J.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = r[3]) && w.getElementsByClassName) return J.apply(i, e.getElementsByClassName(o)), i
                    }
                if (w.qsa && (!M || !M.test(t))) {
                    if (p = h = F, f = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (u = S(t), (h = e.getAttribute("id")) ? p = h.replace(bt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + d(u[l]);
                        f = _t.test(t) && c(e.parentNode) || e, m = u.join(",")
                    }
                    if (m) try {
                        return J.apply(i, f.querySelectorAll(m)), i
                    } catch (g) {} finally {
                        h || e.removeAttribute("id")
                    }
                }
            }
            return P(t.replace(lt, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[F] = !0, t
        }

        function r(t) {
            var e = D.createElement("div");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function s(t, e) {
            for (var i = t.split("|"), n = t.length; n--;) x.attrHandle[i[n]] = e
        }

        function o(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function u(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var r, s = t([], i.length, e), o = s.length; o--;) i[r = s[o]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function h() {}

        function d(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n
        }

        function p(t, e, i) {
            var n = e.dir,
                r = i && "parentNode" === n,
                s = q++;
            return e.first ? function(e, i, s) {
                for (; e = e[n];)
                    if (1 === e.nodeType || r) return t(e, i, s)
            } : function(e, i, o) {
                var a, l, u = [z, s];
                if (o) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || r) && t(e, i, o)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || r) {
                            if (l = e[F] || (e[F] = {}), (a = l[n]) && a[0] === z && a[1] === s) return u[2] = a[2];
                            if (l[n] = u, u[2] = t(e, i, o)) return !0
                        }
            }
        }

        function f(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var r = t.length; r--;)
                    if (!t[r](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function m(t, i, n) {
            for (var r = 0, s = i.length; s > r; r++) e(t, i[r], n);
            return n
        }

        function g(t, e, i, n, r) {
            for (var s, o = [], a = 0, l = t.length, u = null != e; l > a; a++)(s = t[a]) && (!i || i(s, n, r)) && (o.push(s), u && e.push(a));
            return o
        }

        function v(t, e, i, r, s, o) {
            return r && !r[F] && (r = v(r)), s && !s[F] && (s = v(s, o)), n(function(n, o, a, l) {
                var u, c, h, d = [],
                    p = [],
                    f = o.length,
                    v = n || m(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !n && e ? v : g(v, d, t, a, l),
                    _ = i ? s || (n ? t : f || r) ? [] : o : y;
                if (i && i(y, _, a, l), r)
                    for (u = g(_, p), r(u, [], a, l), c = u.length; c--;)(h = u[c]) && (_[p[c]] = !(y[p[c]] = h));
                if (n) {
                    if (s || t) {
                        if (s) {
                            for (u = [], c = _.length; c--;)(h = _[c]) && u.push(y[c] = h);
                            s(null, _ = [], u, l)
                        }
                        for (c = _.length; c--;)(h = _[c]) && (u = s ? tt(n, h) : d[c]) > -1 && (n[u] = !(o[u] = h))
                    }
                } else _ = g(_ === o ? _.splice(f, _.length) : _), s ? s(null, o, _, l) : J.apply(o, _)
            })
        }

        function y(t) {
            for (var e, i, n, r = t.length, s = x.relative[t[0].type], o = s || x.relative[" "], a = s ? 1 : 0, l = p(function(t) {
                    return t === e
                }, o, !0), u = p(function(t) {
                    return tt(e, t) > -1
                }, o, !0), c = [function(t, i, n) {
                    var r = !s && (n || i !== $) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
                    return e = null, r
                }]; r > a; a++)
                if (i = x.relative[t[a].type]) c = [p(f(c), i)];
                else {
                    if (i = x.filter[t[a].type].apply(null, t[a].matches), i[F]) {
                        for (n = ++a; r > n && !x.relative[t[n].type]; n++);
                        return v(a > 1 && f(c), a > 1 && d(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(lt, "$1"), i, n > a && y(t.slice(a, n)), r > n && y(t = t.slice(n)), r > n && d(t))
                    }
                    c.push(i)
                }
            return f(c)
        }

        function _(t, i) {
            var r = i.length > 0,
                s = t.length > 0,
                o = function(n, o, a, l, u) {
                    var c, h, d, p = 0,
                        f = "0",
                        m = n && [],
                        v = [],
                        y = $,
                        _ = n || s && x.find.TAG("*", u),
                        b = z += null == y ? 1 : Math.random() || .1,
                        w = _.length;
                    for (u && ($ = o !== D && o); f !== w && null != (c = _[f]); f++) {
                        if (s && c) {
                            for (h = 0; d = t[h++];)
                                if (d(c, o, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (z = b)
                        }
                        r && ((c = !d && c) && p--, n && m.push(c))
                    }
                    if (p += f, r && f !== p) {
                        for (h = 0; d = i[h++];) d(m, v, o, a);
                        if (n) {
                            if (p > 0)
                                for (; f--;) m[f] || v[f] || (v[f] = G.call(l));
                            v = g(v)
                        }
                        J.apply(l, v), u && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return u && (z = b, $ = y), m
                };
            return r ? n(o) : o
        }
        var b, w, x, T, k, S, C, P, $, A, O, E, D, N, R, M, j, I, L, F = "sizzle" + 1 * new Date,
            H = t.document,
            z = 0,
            q = 0,
            B = i(),
            W = i(),
            U = i(),
            X = function(t, e) {
                return t === e && (O = !0), 0
            },
            Y = 1 << 31,
            V = {}.hasOwnProperty,
            Q = [],
            G = Q.pop,
            Z = Q.push,
            J = Q.push,
            K = Q.slice,
            tt = function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = nt.replace("w", "w#"),
            st = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + it + "*\\]",
            ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
            at = new RegExp(it + "+", "g"),
            lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            ut = new RegExp("^" + it + "*," + it + "*"),
            ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
            dt = new RegExp(ot),
            pt = new RegExp("^" + rt + "$"),
            ft = {
                ID: new RegExp("^#(" + nt + ")"),
                CLASS: new RegExp("^\\.(" + nt + ")"),
                TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + st),
                PSEUDO: new RegExp("^" + ot),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            },
            mt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _t = /[+~]/,
            bt = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            xt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            Tt = function() {
                E()
            };
        try {
            J.apply(Q = K.call(H.childNodes), H.childNodes), Q[H.childNodes.length].nodeType
        } catch (kt) {
            J = {
                apply: Q.length ? function(t, e) {
                    Z.apply(t, K.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        w = e.support = {}, k = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, E = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : H;
            return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, N = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), R = !k(n), w.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = r(function(t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = vt.test(n.getElementsByClassName), w.getById = r(function(t) {
                return N.appendChild(t).id = F, !n.getElementsByName || !n.getElementsByName(F).length
            }), w.getById ? (x.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && R) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }, x.filter.ID = function(t) {
                var e = t.replace(wt, xt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete x.find.ID, x.filter.ID = function(t) {
                var e = t.replace(wt, xt);
                return function(t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), x.find.TAG = w.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var i, n = [],
                    r = 0,
                    s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }, x.find.CLASS = w.getElementsByClassName && function(t, e) {
                return R ? e.getElementsByClassName(t) : void 0
            }, j = [], M = [], (w.qsa = vt.test(n.querySelectorAll)) && (r(function(t) {
                N.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + F + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || M.push(".#.+[+~]")
            }), r(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
            })), (w.matchesSelector = vt.test(I = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(t) {
                w.disconnectedMatch = I.call(t, "div"), I.call(t, "[s!='']:x"), j.push("!=", ot)
            }), M = M.length && new RegExp(M.join("|")), j = j.length && new RegExp(j.join("|")), e = vt.test(N.compareDocumentPosition), L = e || vt.test(N.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, X = e ? function(t, e) {
                if (t === e) return O = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === H && L(H, t) ? -1 : e === n || e.ownerDocument === H && L(H, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return O = !0, 0;
                var i, r = 0,
                    s = t.parentNode,
                    a = e.parentNode,
                    l = [t],
                    u = [e];
                if (!s || !a) return t === n ? -1 : e === n ? 1 : s ? -1 : a ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                if (s === a) return o(t, e);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (i = e; i = i.parentNode;) u.unshift(i);
                for (; l[r] === u[r];) r++;
                return r ? o(l[r], u[r]) : l[r] === H ? -1 : u[r] === H ? 1 : 0
            }, n) : D
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== D && E(t), i = i.replace(ht, "='$1']"), !(!w.matchesSelector || !R || j && j.test(i) || M && M.test(i))) try {
                var n = I.call(t, i);
                if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (r) {}
            return e(i, D, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== D && E(t), L(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== D && E(t);
            var i = x.attrHandle[e.toLowerCase()],
                n = i && V.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !R) : void 0;
            return void 0 !== n ? n : w.attributes || !R ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                r = 0;
            if (O = !w.detectDuplicates, A = !w.sortStable && t.slice(0), t.sort(X), O) {
                for (; e = t[r++];) e === t[r] && (n = i.push(r));
                for (; n--;) t.splice(i[n], 1)
            }
            return A = null, t
        }, T = e.getText = function(t) {
            var e, i = "",
                n = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += T(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[n++];) i += T(e);
            return i
        }, x = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && dt.test(i) && (e = S(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(wt, xt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = B[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && B(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(r) {
                        var s = e.attr(r, t);
                        return null == s ? "!=" === i : i ? (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(at, " ") + " ").indexOf(n) > -1 : "|=" === i ? s === n || s.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, i, n, r) {
                    var s = "nth" !== t.slice(0, 3),
                        o = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var u, c, h, d, p, f, m = s !== o ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (g) {
                            if (s) {
                                for (; m;) {
                                    for (h = e; h = h[m];)
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [o ? g.firstChild : g.lastChild], o && y) {
                                for (c = g[F] || (g[F] = {}), u = c[t] || [], p = u[0] === z && u[1], d = u[0] === z && u[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (d = p = 0) || f.pop();)
                                    if (1 === h.nodeType && ++d && h === e) {
                                        c[t] = [z, p, d];
                                        break
                                    }
                            } else if (y && (u = (e[F] || (e[F] = {}))[t]) && u[0] === z) d = u[1];
                            else
                                for (;
                                    (h = ++p && h && h[m] || (d = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (y && ((h[F] || (h[F] = {}))[t] = [z, d]), h !== e)););
                            return d -= r, d === n || d % n === 0 && d / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var r, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return s[F] ? s(i) : s.length > 1 ? (r = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, r = s(t, i), o = r.length; o--;) n = tt(t, r[o]), t[n] = !(e[n] = r[o])
                    }) : function(t) {
                        return s(t, 0, r)
                    }) : s
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        r = C(t.replace(lt, "$1"));
                    return r[F] ? n(function(t, e, i, n) {
                        for (var s, o = r(t, null, n, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                    }) : function(t, n, s) {
                        return e[0] = t, r(e, null, s, i), e[0] = null, !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(wt, xt),
                        function(e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                }),
                lang: n(function(t) {
                    return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(),
                        function(e) {
                            var i;
                            do
                                if (i = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === N
                },
                focus: function(t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !x.pseudos.empty(t)
                },
                header: function(t) {
                    return gt.test(t.nodeName)
                },
                input: function(t) {
                    return mt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: u(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: u(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: u(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[b] = a(b);
        for (b in {
                submit: !0,
                reset: !0
            }) x.pseudos[b] = l(b);
        return h.prototype = x.filters = x.pseudos, x.setFilters = new h, S = e.tokenize = function(t, i) {
            var n, r, s, o, a, l, u, c = W[t + " "];
            if (c) return i ? 0 : c.slice(0);
            for (a = t, l = [], u = x.preFilter; a;) {
                (!n || (r = ut.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = ct.exec(a)) && (n = r.shift(), s.push({
                    value: n,
                    type: r[0].replace(lt, " ")
                }), a = a.slice(n.length));
                for (o in x.filter) !(r = ft[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), s.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? e.error(t) : W(t, l).slice(0)
        }, C = e.compile = function(t, e) {
            var i, n = [],
                r = [],
                s = U[t + " "];
            if (!s) {
                for (e || (e = S(t)), i = e.length; i--;) s = y(e[i]), s[F] ? n.push(s) : r.push(s);
                s = U(t, _(r, n)), s.selector = t
            }
            return s
        }, P = e.select = function(t, e, i, n) {
            var r, s, o, a, l, u = "function" == typeof t && t,
                h = !n && S(t = u.selector || t);
            if (i = i || [], 1 === h.length) {
                if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && w.getById && 9 === e.nodeType && R && x.relative[s[1].type]) {
                    if (e = (x.find.ID(o.matches[0].replace(wt, xt), e) || [])[0], !e) return i;
                    u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (r = ft.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !x.relative[a = o.type]);)
                    if ((l = x.find[a]) && (n = l(o.matches[0].replace(wt, xt), _t.test(s[0].type) && c(e.parentNode) || e))) {
                        if (s.splice(r, 1), t = n.length && d(s), !t) return J.apply(i, n), i;
                        break
                    }
            }
            return (u || C(t, h))(n, e, !R, i, _t.test(t) && c(e.parentNode) || e), i
        }, w.sortStable = F.split("").sort(X).join("") === F, w.detectDuplicates = !!O, E(), w.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(D.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || s("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || s(et, function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    K.find = rt, K.expr = rt.selectors, K.expr[":"] = K.expr.pseudos, K.unique = rt.uniqueSort, K.text = rt.getText, K.isXMLDoc = rt.isXML, K.contains = rt.contains;
    var st = K.expr.match.needsContext,
        ot = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        at = /^.[^:#\[\.,]*$/;
    K.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? K.find.matchesSelector(n, t) ? [n] : [] : K.find.matches(t, K.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, K.fn.extend({
        find: function(t) {
            var e, i = this.length,
                n = [],
                r = this;

            if ("string" != typeof t) return this.pushStack(K(t).filter(function() {
                for (e = 0; i > e; e++)
                    if (K.contains(r[e], this)) return !0
            }));
            for (e = 0; i > e; e++) K.find(t, r[e], n);
            return n = this.pushStack(i > 1 ? K.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && st.test(t) ? K(t) : t || [], !1).length
        }
    });
    var lt, ut = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ct = K.fn.init = function(t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ut.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof K ? e[0] : e, K.merge(this, K.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), ot.test(i[1]) && K.isPlainObject(e))
                        for (i in e) K.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return n = Z.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = Z, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : K.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(K) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), K.makeArray(t, this))
        };
    ct.prototype = K.fn, lt = K(Z);
    var ht = /^(?:parents|prev(?:Until|All))/,
        dt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    K.extend({
        dir: function(t, e, i) {
            for (var n = [], r = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && K(t).is(i)) break;
                    n.push(t)
                }
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }), K.fn.extend({
        has: function(t) {
            var e = K(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; i > t; t++)
                    if (K.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, r = this.length, s = [], o = st.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; r > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && K.find.matchesSelector(i, t))) {
                        s.push(i);
                        break
                    }
            return this.pushStack(s.length > 1 ? K.unique(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? X.call(K(t), this[0]) : X.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(K.unique(K.merge(this.get(), K(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), K.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return K.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return K.dir(t, "parentNode", i)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return K.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return K.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return K.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return K.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return K.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return K.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || K.merge([], t.childNodes)
        }
    }, function(t, e) {
        K.fn[t] = function(i, n) {
            var r = K.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = K.filter(n, r)), this.length > 1 && (dt[t] || K.unique(r), ht.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var pt = /\S+/g,
        ft = {};
    K.Callbacks = function(t) {
        t = "string" == typeof t ? ft[t] || s(t) : K.extend({}, t);
        var e, i, n, r, o, a, l = [],
            u = !t.once && [],
            c = function(s) {
                for (e = t.memory && s, i = !0, a = r || 0, r = 0, o = l.length, n = !0; l && o > a; a++)
                    if (l[a].apply(s[0], s[1]) === !1 && t.stopOnFalse) {
                        e = !1;
                        break
                    }
                n = !1, l && (u ? u.length && c(u.shift()) : e ? l = [] : h.disable())
            },
            h = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function s(e) {
                            K.each(e, function(e, i) {
                                var n = K.type(i);
                                "function" === n ? t.unique && h.has(i) || l.push(i) : i && i.length && "string" !== n && s(i)
                            })
                        }(arguments), n ? o = l.length : e && (r = i, c(e))
                    }
                    return this
                },
                remove: function() {
                    return l && K.each(arguments, function(t, e) {
                        for (var i;
                            (i = K.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (o >= i && o--, a >= i && a--)
                    }), this
                },
                has: function(t) {
                    return t ? K.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = u = e = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, e || h.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(t, e) {
                    return !l || i && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? u.push(e) : c(e)), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return h
    }, K.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", K.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", K.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", K.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return K.Deferred(function(i) {
                            K.each(e, function(e, s) {
                                var o = K.isFunction(t[e]) && t[e];
                                r[s[1]](function() {
                                    var t = o && o.apply(this, arguments);
                                    t && K.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? K.extend(t, n) : n
                    }
                },
                r = {};
            return n.pipe = n.then, K.each(e, function(t, s) {
                var o = s[2],
                    a = s[3];
                n[s[1]] = o.add, a && o.add(function() {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function() {
                    return r[s[0] + "With"](this === r ? n : this, arguments), this
                }, r[s[0] + "With"] = o.fireWith
            }), n.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, i, n, r = 0,
                s = B.call(arguments),
                o = s.length,
                a = 1 !== o || t && K.isFunction(t.promise) ? o : 0,
                l = 1 === a ? t : K.Deferred(),
                u = function(t, i, n) {
                    return function(r) {
                        i[t] = this, n[t] = arguments.length > 1 ? B.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (o > 1)
                for (e = new Array(o), i = new Array(o), n = new Array(o); o > r; r++) s[r] && K.isFunction(s[r].promise) ? s[r].promise().done(u(r, n, s)).fail(l.reject).progress(u(r, i, e)) : --a;
            return a || l.resolveWith(n, s), l.promise()
        }
    });
    var mt;
    K.fn.ready = function(t) {
        return K.ready.promise().done(t), this
    }, K.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? K.readyWait++ : K.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --K.readyWait : K.isReady) || (K.isReady = !0, t !== !0 && --K.readyWait > 0 || (mt.resolveWith(Z, [K]), K.fn.triggerHandler && (K(Z).triggerHandler("ready"), K(Z).off("ready"))))
        }
    }), K.ready.promise = function(e) {
        return mt || (mt = K.Deferred(), "complete" === Z.readyState ? setTimeout(K.ready) : (Z.addEventListener("DOMContentLoaded", o, !1), t.addEventListener("load", o, !1))), mt.promise(e)
    }, K.ready.promise();
    var gt = K.access = function(t, e, i, n, r, s, o) {
        var a = 0,
            l = t.length,
            u = null == i;
        if ("object" === K.type(i)) {
            r = !0;
            for (a in i) K.access(t, e, a, i[a], !0, s, o)
        } else if (void 0 !== n && (r = !0, K.isFunction(n) || (o = !0), u && (o ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) {
                return u.call(K(t), i)
            })), e))
            for (; l > a; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
        return r ? t : u ? e.call(t) : l ? e(t[0], i) : s
    };
    K.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, a.uid = 1, a.accepts = K.acceptData, a.prototype = {
        key: function(t) {
            if (!a.accepts(t)) return 0;
            var e = {},
                i = t[this.expando];
            if (!i) {
                i = a.uid++;
                try {
                    e[this.expando] = {
                        value: i
                    }, Object.defineProperties(t, e)
                } catch (n) {
                    e[this.expando] = i, K.extend(t, e)
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i
        },
        set: function(t, e, i) {
            var n, r = this.key(t),
                s = this.cache[r];
            if ("string" == typeof e) s[e] = i;
            else if (K.isEmptyObject(s)) K.extend(this.cache[r], e);
            else
                for (n in e) s[n] = e[n];
            return s
        },
        get: function(t, e) {
            var i = this.cache[this.key(t)];
            return void 0 === e ? i : i[e]
        },
        access: function(t, e, i) {
            var n;
            return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, K.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n, r, s = this.key(t),
                o = this.cache[s];
            if (void 0 === e) this.cache[s] = {};
            else {
                K.isArray(e) ? n = e.concat(e.map(K.camelCase)) : (r = K.camelCase(e), e in o ? n = [e, r] : (n = r, n = n in o ? [n] : n.match(pt) || [])), i = n.length;
                for (; i--;) delete o[n[i]]
            }
        },
        hasData: function(t) {
            return !K.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var vt = new a,
        yt = new a,
        _t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        bt = /([A-Z])/g;
    K.extend({
        hasData: function(t) {
            return yt.hasData(t) || vt.hasData(t)
        },
        data: function(t, e, i) {
            return yt.access(t, e, i)
        },
        removeData: function(t, e) {
            yt.remove(t, e)
        },
        _data: function(t, e, i) {
            return vt.access(t, e, i)
        },
        _removeData: function(t, e) {
            vt.remove(t, e)
        }
    }), K.fn.extend({
        data: function(t, e) {
            var i, n, r, s = this[0],
                o = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (r = yt.get(s), 1 === s.nodeType && !vt.get(s, "hasDataAttrs"))) {
                    for (i = o.length; i--;) o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = K.camelCase(n.slice(5)), l(s, n, r[n])));
                    vt.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                yt.set(this, t)
            }) : gt(this, function(e) {
                var i, n = K.camelCase(t);
                if (s && void 0 === e) {
                    if (i = yt.get(s, t), void 0 !== i) return i;
                    if (i = yt.get(s, n), void 0 !== i) return i;
                    if (i = l(s, n, void 0), void 0 !== i) return i
                } else this.each(function() {
                    var i = yt.get(this, n);
                    yt.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && yt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                yt.remove(this, t)
            })
        }
    }), K.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = vt.get(t, e), i && (!n || K.isArray(i) ? n = vt.access(t, e, K.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = K.queue(t, e),
                n = i.length,
                r = i.shift(),
                s = K._queueHooks(t, e),
                o = function() {
                    K.dequeue(t, e)
                };
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return vt.get(t, i) || vt.access(t, i, {
                empty: K.Callbacks("once memory").add(function() {
                    vt.remove(t, [e + "queue", i])
                })
            })
        }
    }), K.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? K.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = K.queue(this, t, e);
                K._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && K.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                K.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                r = K.Deferred(),
                s = this,
                o = this.length,
                a = function() {
                    --n || r.resolveWith(s, [s])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) i = vt.get(s[o], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        xt = ["Top", "Right", "Bottom", "Left"],
        Tt = function(t, e) {
            return t = e || t, "none" === K.css(t, "display") || !K.contains(t.ownerDocument, t)
        },
        kt = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = Z.createDocumentFragment(),
            e = t.appendChild(Z.createElement("div")),
            i = Z.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), G.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var St = "undefined";
    G.focusinBubbles = "onfocusin" in t;
    var Ct = /^key/,
        Pt = /^(?:mouse|pointer|contextmenu)|click/,
        $t = /^(?:focusinfocus|focusoutblur)$/,
        At = /^([^.]*)(?:\.(.+)|)$/;
    K.event = {
        global: {},
        add: function(t, e, i, n, r) {
            var s, o, a, l, u, c, h, d, p, f, m, g = vt.get(t);
            if (g)
                for (i.handler && (s = i, i = s.handler, r = s.selector), i.guid || (i.guid = K.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(e) {
                        return typeof K !== St && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(pt) || [""], u = e.length; u--;) a = At.exec(e[u]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p && (h = K.event.special[p] || {}, p = (r ? h.delegateType : h.bindType) || p, h = K.event.special[p] || {}, c = K.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && K.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, s), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, h.setup && h.setup.call(t, n, f, o) !== !1 || t.addEventListener && t.addEventListener(p, o, !1)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), K.event.global[p] = !0)
        },
        remove: function(t, e, i, n, r) {
            var s, o, a, l, u, c, h, d, p, f, m, g = vt.hasData(t) && vt.get(t);
            if (g && (l = g.events)) {
                for (e = (e || "").match(pt) || [""], u = e.length; u--;)
                    if (a = At.exec(e[u]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (h = K.event.special[p] || {}, p = (n ? h.delegateType : h.bindType) || p, d = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = d.length; s--;) c = d[s], !r && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (d.splice(s, 1), c.selector && d.delegateCount--, h.remove && h.remove.call(t, c));
                        o && !d.length && (h.teardown && h.teardown.call(t, f, g.handle) !== !1 || K.removeEvent(t, p, g.handle), delete l[p])
                    } else
                        for (p in l) K.event.remove(t, p + e[u], i, n, !0);
                K.isEmptyObject(l) && (delete g.handle, vt.remove(t, "events"))
            }
        },
        trigger: function(e, i, n, r) {
            var s, o, a, l, u, c, h, d = [n || Z],
                p = Q.call(e, "type") ? e.type : e,
                f = Q.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = a = n = n || Z, 3 !== n.nodeType && 8 !== n.nodeType && !$t.test(p + K.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[K.expando] ? e : new K.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : K.makeArray(i, [e]), h = K.event.special[p] || {}, r || !h.trigger || h.trigger.apply(n, i) !== !1)) {
                if (!r && !h.noBubble && !K.isWindow(n)) {
                    for (l = h.delegateType || p, $t.test(l + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
                    a === (n.ownerDocument || Z) && d.push(a.defaultView || a.parentWindow || t)
                }
                for (s = 0;
                    (o = d[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : h.bindType || p, c = (vt.get(o, "events") || {})[e.type] && vt.get(o, "handle"), c && c.apply(o, i), c = u && o[u], c && c.apply && K.acceptData(o) && (e.result = c.apply(o, i), e.result === !1 && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || h._default && h._default.apply(d.pop(), i) !== !1 || !K.acceptData(n) || u && K.isFunction(n[p]) && !K.isWindow(n) && (a = n[u], a && (n[u] = null), K.event.triggered = p, n[p](), K.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        dispatch: function(t) {
            t = K.event.fix(t);
            var e, i, n, r, s, o = [],
                a = B.call(arguments),
                l = (vt.get(this, "events") || {})[t.type] || [],
                u = K.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (o = K.event.handlers.call(this, t, l), e = 0;
                    (r = o[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, i = 0;
                        (s = r.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(s.namespace)) && (t.handleObj = s, t.data = s.data, n = ((K.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, r, s, o = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== t.type) {
                        for (n = [], i = 0; a > i; i++) s = e[i], r = s.selector + " ", void 0 === n[r] && (n[r] = s.needsContext ? K(r, this).index(l) >= 0 : K.find(r, this, null, [l]).length), n[r] && n.push(s);
                        n.length && o.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < e.length && o.push({
                elem: this,
                handlers: e.slice(a)
            }), o
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, r, s = e.button;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || Z, n = i.documentElement, r = i.body, t.pageX = e.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[K.expando]) return t;
            var e, i, n, r = t.type,
                s = t,
                o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = Pt.test(r) ? this.mouseHooks : Ct.test(r) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new K.Event(s), e = n.length; e--;) i = n[e], t[i] = s[i];
            return t.target || (t.target = Z), 3 === t.target.nodeType && (t.target = t.target.parentNode), o.filter ? o.filter(t, s) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== h() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && K.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return K.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var r = K.extend(new K.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? K.event.trigger(r, null, e) : K.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault()
        }
    }, K.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    }, K.Event = function(t, e) {
        return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? u : c) : this.type = t, e && K.extend(this, e), this.timeStamp = t && t.timeStamp || K.now(), void(this[K.expando] = !0)) : new K.Event(t, e)
    }, K.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = u, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = u, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = u, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, K.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        K.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    r = t.relatedTarget,
                    s = t.handleObj;
                return (!r || r !== n && !K.contains(n, r)) && (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), G.focusinBubbles || K.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            K.event.simulate(e, t.target, K.event.fix(t), !0)
        };
        K.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    r = vt.access(n, e);
                r || n.addEventListener(t, i, !0), vt.access(n, e, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    r = vt.access(n, e) - 1;
                r ? vt.access(n, e, r) : (n.removeEventListener(t, i, !0), vt.remove(n, e))
            }
        }
    }), K.fn.extend({
        on: function(t, e, i, n, r) {
            var s, o;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (o in t) this.on(o, e, i, t[o], r);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = c;
            else if (!n) return this;
            return 1 === r && (s = n, n = function(t) {
                return K().off(t), s.apply(this, arguments)
            }, n.guid = s.guid || (s.guid = K.guid++)), this.each(function() {
                K.event.add(this, t, n, i, e)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, K(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = c), this.each(function() {
                K.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                K.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? K.event.trigger(t, e, i, !0) : void 0
        }
    });
    var Ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Et = /<([\w:]+)/,
        Dt = /<|&#?\w+;/,
        Nt = /<(?:script|style|link)/i,
        Rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Mt = /^$|\/(?:java|ecma)script/i,
        jt = /^true\/(.*)/,
        It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, K.extend({
        clone: function(t, e, i) {
            var n, r, s, o, a = t.cloneNode(!0),
                l = K.contains(t.ownerDocument, t);
            if (!(G.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t)))
                for (o = v(a), s = v(t), n = 0, r = s.length; r > n; n++) y(s[n], o[n]);
            if (e)
                if (i)
                    for (s = s || v(t), o = o || v(a), n = 0, r = s.length; r > n; n++) g(s[n], o[n]);
                else g(t, a);
            return o = v(a, "script"), o.length > 0 && m(o, !l && v(t, "script")), a
        },
        buildFragment: function(t, e, i, n) {
            for (var r, s, o, a, l, u, c = e.createDocumentFragment(), h = [], d = 0, p = t.length; p > d; d++)
                if (r = t[d], r || 0 === r)
                    if ("object" === K.type(r)) K.merge(h, r.nodeType ? [r] : r);
                    else if (Dt.test(r)) {
                for (s = s || c.appendChild(e.createElement("div")), o = (Et.exec(r) || ["", ""])[1].toLowerCase(), a = Lt[o] || Lt._default, s.innerHTML = a[1] + r.replace(Ot, "<$1></$2>") + a[2], u = a[0]; u--;) s = s.lastChild;
                K.merge(h, s.childNodes), s = c.firstChild, s.textContent = ""
            } else h.push(e.createTextNode(r));
            for (c.textContent = "", d = 0; r = h[d++];)
                if ((!n || -1 === K.inArray(r, n)) && (l = K.contains(r.ownerDocument, r), s = v(c.appendChild(r), "script"), l && m(s), i))
                    for (u = 0; r = s[u++];) Mt.test(r.type || "") && i.push(r);
            return c
        },
        cleanData: function(t) {
            for (var e, i, n, r, s = K.event.special, o = 0; void 0 !== (i = t[o]); o++) {
                if (K.acceptData(i) && (r = i[vt.expando], r && (e = vt.cache[r]))) {
                    if (e.events)
                        for (n in e.events) s[n] ? K.event.remove(i, n) : K.removeEvent(i, n, e.handle);
                    vt.cache[r] && delete vt.cache[r]
                }
                delete yt.cache[i[yt.expando]]
            }
        }
    }), K.fn.extend({
        text: function(t) {
            return gt(this, function(t) {
                return void 0 === t ? K.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = d(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = d(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? K.filter(t, this) : this, r = 0; null != (i = n[r]); r++) e || 1 !== i.nodeType || K.cleanData(v(i)), i.parentNode && (e && K.contains(i.ownerDocument, i) && m(v(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (K.cleanData(v(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return K.clone(this, t, e)
            })
        },
        html: function(t) {
            return gt(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Nt.test(t) && !Lt[(Et.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Ot, "<$1></$2>");
                    try {
                        for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (K.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, K.cleanData(v(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = W.apply([], t);
            var i, n, r, s, o, a, l = 0,
                u = this.length,
                c = this,
                h = u - 1,
                d = t[0],
                m = K.isFunction(d);
            if (m || u > 1 && "string" == typeof d && !G.checkClone && Rt.test(d)) return this.each(function(i) {
                var n = c.eq(i);
                m && (t[0] = d.call(this, i, n.html())), n.domManip(t, e)
            });
            if (u && (i = K.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                for (r = K.map(v(i, "script"), p), s = r.length; u > l; l++) o = i, l !== h && (o = K.clone(o, !0, !0), s && K.merge(r, v(o, "script"))), e.call(this[l], o, l);
                if (s)
                    for (a = r[r.length - 1].ownerDocument, K.map(r, f), l = 0; s > l; l++) o = r[l], Mt.test(o.type || "") && !vt.access(o, "globalEval") && K.contains(a, o) && (o.src ? K._evalUrl && K._evalUrl(o.src) : K.globalEval(o.textContent.replace(It, "")))
            }
            return this
        }
    }), K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        K.fn[t] = function(t) {
            for (var i, n = [], r = K(t), s = r.length - 1, o = 0; s >= o; o++) i = o === s ? this : this.clone(!0), K(r[o])[e](i), U.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Ft, Ht = {},
        zt = /^margin/,
        qt = new RegExp("^(" + wt + ")(?!px)[a-z%]+$", "i"),
        Bt = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        };
    ! function() {
        function e() {
            o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o.innerHTML = "", r.appendChild(s);
            var e = t.getComputedStyle(o, null);
            i = "1%" !== e.top, n = "4px" === e.width, r.removeChild(s)
        }
        var i, n, r = Z.documentElement,
            s = Z.createElement("div"),
            o = Z.createElement("div");
        o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === o.style.backgroundClip, s.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", s.appendChild(o), t.getComputedStyle && K.extend(G, {
            pixelPosition: function() {
                return e(), i
            },
            boxSizingReliable: function() {
                return null == n && e(), n
            },
            reliableMarginRight: function() {
                var e, i = o.appendChild(Z.createElement("div"));
                return i.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", o.style.width = "1px", r.appendChild(s), e = !parseFloat(t.getComputedStyle(i, null).marginRight), r.removeChild(s), o.removeChild(i), e
            }
        }))
    }(), K.swap = function(t, e, i, n) {
        var r, s, o = {};
        for (s in e) o[s] = t.style[s], t.style[s] = e[s];
        r = i.apply(t, n || []);
        for (s in e) t.style[s] = o[s];
        return r
    };
    var Wt = /^(none|table(?!-c[ea]).+)/,
        Ut = new RegExp("^(" + wt + ")(.*)$", "i"),
        Xt = new RegExp("^([+-])=(" + wt + ")", "i"),
        Yt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Vt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Qt = ["Webkit", "O", "Moz", "ms"];
    K.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = w(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = K.camelCase(e),
                    l = t.style;
                return e = K.cssProps[a] || (K.cssProps[a] = T(l, a)), o = K.cssHooks[e] || K.cssHooks[a], void 0 === i ? o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : l[e] : (s = typeof i, "string" === s && (r = Xt.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(K.css(t, e)), s = "number"), null != i && i === i && ("number" !== s || K.cssNumber[a] || (i += "px"), G.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, n)) || (l[e] = i)), void 0)
            }
        },
        css: function(t, e, i, n) {
            var r, s, o, a = K.camelCase(e);
            return e = K.cssProps[a] || (K.cssProps[a] = T(t.style, a)), o = K.cssHooks[e] || K.cssHooks[a], o && "get" in o && (r = o.get(t, !0, i)), void 0 === r && (r = w(t, e, n)), "normal" === r && e in Vt && (r = Vt[e]), "" === i || i ? (s = parseFloat(r), i === !0 || K.isNumeric(s) ? s || 0 : r) : r
        }
    }), K.each(["height", "width"], function(t, e) {
        K.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? Wt.test(K.css(t, "display")) && 0 === t.offsetWidth ? K.swap(t, Yt, function() {
                    return C(t, e, n)
                }) : C(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var r = n && Bt(t);
                return k(t, i, n ? S(t, e, n, "border-box" === K.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), K.cssHooks.marginRight = x(G.reliableMarginRight, function(t, e) {
        return e ? K.swap(t, {
            display: "inline-block"
        }, w, [t, "marginRight"]) : void 0
    }), K.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        K.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + xt[n] + e] = s[n] || s[n - 2] || s[0];
                return r
            }
        }, zt.test(t) || (K.cssHooks[t + e].set = k)
    }), K.fn.extend({
        css: function(t, e) {
            return gt(this, function(t, e, i) {
                var n, r, s = {},
                    o = 0;
                if (K.isArray(e)) {
                    for (n = Bt(t), r = e.length; r > o; o++) s[e[o]] = K.css(t, e[o], !1, n);
                    return s
                }
                return void 0 !== i ? K.style(t, e, i) : K.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return P(this, !0)
        },
        hide: function() {
            return P(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Tt(this) ? K(this).show() : K(this).hide()
            })
        }
    }), K.Tween = $, $.prototype = {
        constructor: $,
        init: function(t, e, i, n, r, s) {
            this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (K.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = $.propHooks[this.prop];
            return t && t.get ? t.get(this) : $.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = $.propHooks[this.prop];
            return this.pos = e = this.options.duration ? K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : $.propHooks._default.set(this), this
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = K.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                K.fx.step[t.prop] ? K.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop]) ? K.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, K.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, K.fx = $.prototype.init, K.fx.step = {};
    var Gt, Zt, Jt = /^(?:toggle|show|hide)$/,
        Kt = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$", "i"),
        te = /queueHooks$/,
        ee = [D],
        ie = {
            "*": [function(t, e) {
                var i = this.createTween(t, e),
                    n = i.cur(),
                    r = Kt.exec(e),
                    s = r && r[3] || (K.cssNumber[t] ? "" : "px"),
                    o = (K.cssNumber[t] || "px" !== s && +n) && Kt.exec(K.css(i.elem, t)),
                    a = 1,
                    l = 20;
                if (o && o[3] !== s) {
                    s = s || o[3], r = r || [], o = +n || 1;
                    do a = a || ".5", o /= a, K.style(i.elem, t, o + s); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                }
                return r && (o = i.start = +o || +n || 0, i.unit = s, i.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), i
            }]
        };
    K.Animation = K.extend(R, {
            tweener: function(t, e) {
                K.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, r = t.length; r > n; n++) i = t[n], ie[i] = ie[i] || [], ie[i].unshift(e)
            },
            prefilter: function(t, e) {
                e ? ee.unshift(t) : ee.push(t)
            }
        }), K.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? K.extend({}, t) : {
                complete: i || !i && e || K.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !K.isFunction(e) && e
            };
            return n.duration = K.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in K.fx.speeds ? K.fx.speeds[n.duration] : K.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                K.isFunction(n.old) && n.old.call(this), n.queue && K.dequeue(this, n.queue)
            }, n
        }, K.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(Tt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var r = K.isEmptyObject(t),
                    s = K.speed(e, i, n),
                    o = function() {
                        var e = R(this, K.extend({}, t), s);
                        (r || vt.get(this, "finish")) && e.stop(!0)
                    };
                return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        s = K.timers,
                        o = vt.get(this);
                    if (r) o[r] && o[r].stop && n(o[r]);
                    else
                        for (r in o) o[r] && o[r].stop && te.test(r) && n(o[r]);
                    for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i), e = !1, s.splice(r, 1));
                    (e || !i) && K.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = vt.get(this),
                        n = i[t + "queue"],
                        r = i[t + "queueHooks"],
                        s = K.timers,
                        o = n ? n.length : 0;
                    for (i.finish = !0, K.queue(this, t, []), r && r.stop && r.stop.call(this, !0),
                        e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; o > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), K.each(["toggle", "show", "hide"], function(t, e) {
            var i = K.fn[e];
            K.fn[e] = function(t, n, r) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(O(e, !0), t, n, r)
            }
        }), K.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            K.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), K.timers = [], K.fx.tick = function() {
            var t, e = 0,
                i = K.timers;
            for (Gt = K.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
            i.length || K.fx.stop(), Gt = void 0
        }, K.fx.timer = function(t) {
            K.timers.push(t), t() ? K.fx.start() : K.timers.pop()
        }, K.fx.interval = 13, K.fx.start = function() {
            Zt || (Zt = setInterval(K.fx.tick, K.fx.interval))
        }, K.fx.stop = function() {
            clearInterval(Zt), Zt = null
        }, K.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, K.fn.delay = function(t, e) {
            return t = K.fx ? K.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        function() {
            var t = Z.createElement("input"),
                e = Z.createElement("select"),
                i = e.appendChild(Z.createElement("option"));
            t.type = "checkbox", G.checkOn = "" !== t.value, G.optSelected = i.selected, e.disabled = !0, G.optDisabled = !i.disabled, t = Z.createElement("input"), t.value = "t", t.type = "radio", G.radioValue = "t" === t.value
        }();
    var ne, re, se = K.expr.attrHandle;
    K.fn.extend({
        attr: function(t, e) {
            return gt(this, K.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                K.removeAttr(this, t)
            })
        }
    }), K.extend({
        attr: function(t, e, i) {
            var n, r, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === St ? K.prop(t, e, i) : (1 === s && K.isXMLDoc(t) || (e = e.toLowerCase(), n = K.attrHooks[e] || (K.expr.match.bool.test(e) ? re : ne)), void 0 === i ? n && "get" in n && null !== (r = n.get(t, e)) ? r : (r = K.find.attr(t, e), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(t, i, e)) ? r : (t.setAttribute(e, i + ""), i) : void K.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var i, n, r = 0,
                s = e && e.match(pt);
            if (s && 1 === t.nodeType)
                for (; i = s[r++];) n = K.propFix[i] || i, K.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!G.radioValue && "radio" === e && K.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }
    }), re = {
        set: function(t, e, i) {
            return e === !1 ? K.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, K.each(K.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = se[e] || K.find.attr;
        se[e] = function(t, e, n) {
            var r, s;
            return n || (s = se[e], se[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, se[e] = s), r
        }
    });
    var oe = /^(?:input|select|textarea|button)$/i;
    K.fn.extend({
        prop: function(t, e) {
            return gt(this, K.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[K.propFix[t] || t]
            })
        }
    }), K.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, i) {
            var n, r, s, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !K.isXMLDoc(t), s && (e = K.propFix[e] || e, r = K.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || oe.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), G.optSelected || (K.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        K.propFix[this.toLowerCase()] = this
    });
    var ae = /[\t\r\n\f]/g;
    K.fn.extend({
        addClass: function(t) {
            var e, i, n, r, s, o, a = "string" == typeof t && t,
                l = 0,
                u = this.length;
            if (K.isFunction(t)) return this.each(function(e) {
                K(this).addClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(pt) || []; u > l; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ae, " ") : " ")) {
                        for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        o = K.trim(n), i.className !== o && (i.className = o)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, r, s, o, a = 0 === arguments.length || "string" == typeof t && t,
                l = 0,
                u = this.length;
            if (K.isFunction(t)) return this.each(function(e) {
                K(this).removeClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(pt) || []; u > l; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ae, " ") : "")) {
                        for (s = 0; r = e[s++];)
                            for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                        o = t ? K.trim(n) : "", i.className !== o && (i.className = o)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(K.isFunction(t) ? function(i) {
                K(this).toggleClass(t.call(this, i, this.className, e), e)
            } : function() {
                if ("string" === i)
                    for (var e, n = 0, r = K(this), s = t.match(pt) || []; e = s[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(i === St || "boolean" === i) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : vt.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(ae, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var le = /\r/g;
    K.fn.extend({
        val: function(t) {
            var e, i, n, r = this[0]; {
                if (arguments.length) return n = K.isFunction(t), this.each(function(i) {
                    var r;
                    1 === this.nodeType && (r = n ? t.call(this, i, K(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : K.isArray(r) && (r = K.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), e = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                });
                if (r) return e = K.valHooks[r.type] || K.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(le, "") : null == i ? "" : i)
            }
        }
    }), K.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = K.find.attr(t, "value");
                    return null != e ? e : K.trim(K.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, o = s ? null : [], a = s ? r + 1 : n.length, l = 0 > r ? a : s ? r : 0; a > l; l++)
                        if (i = n[l], !(!i.selected && l !== r || (G.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && K.nodeName(i.parentNode, "optgroup"))) {
                            if (e = K(i).val(), s) return e;
                            o.push(e)
                        }
                    return o
                },
                set: function(t, e) {
                    for (var i, n, r = t.options, s = K.makeArray(e), o = r.length; o--;) n = r[o], (n.selected = K.inArray(n.value, s) >= 0) && (i = !0);
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = {
            set: function(t, e) {
                return K.isArray(e) ? t.checked = K.inArray(K(t).val(), e) >= 0 : void 0
            }
        }, G.checkOn || (K.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        K.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), K.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var ue = K.now(),
        ce = /\?/;
    K.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, K.parseXML = function(t) {
        var e, i;
        if (!t || "string" != typeof t) return null;
        try {
            i = new DOMParser, e = i.parseFromString(t, "text/xml")
        } catch (n) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + t), e
    };
    var he = /#.*$/,
        de = /([?&])_=[^&]*/,
        pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        me = /^(?:GET|HEAD)$/,
        ge = /^\/\//,
        ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        ye = {},
        _e = {},
        be = "*/".concat("*"),
        we = t.location.href,
        xe = ve.exec(we.toLowerCase()) || [];
    K.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: we,
            type: "GET",
            isLocal: fe.test(xe[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": be,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? I(I(t, K.ajaxSettings), e) : I(K.ajaxSettings, t)
        },
        ajaxPrefilter: M(ye),
        ajaxTransport: M(_e),
        ajax: function(t, e) {
            function i(t, e, i, o) {
                var l, c, v, y, b, x = e;
                2 !== _ && (_ = 2, a && clearTimeout(a), n = void 0, s = o || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (y = L(h, w, i)), y = F(h, y, w, l), l ? (h.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (K.lastModified[r] = b), b = w.getResponseHeader("etag"), b && (K.etag[r] = b)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = y.state, c = y.data, v = y.error, l = !v)) : (v = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", l ? f.resolveWith(d, [c, x, w]) : f.rejectWith(d, [w, x, v]), w.statusCode(g), g = void 0, u && p.trigger(l ? "ajaxSuccess" : "ajaxError", [w, h, l ? c : v]), m.fireWith(d, [w, x]), u && (p.trigger("ajaxComplete", [w, h]), --K.active || K.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, r, s, o, a, l, u, c, h = K.ajaxSetup({}, e),
                d = h.context || h,
                p = h.context && (d.nodeType || d.jquery) ? K(d) : K.event,
                f = K.Deferred(),
                m = K.Callbacks("once memory"),
                g = h.statusCode || {},
                v = {},
                y = {},
                _ = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === _) {
                            if (!o)
                                for (o = {}; e = pe.exec(s);) o[e[1].toLowerCase()] = e[2];
                            e = o[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === _ ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return _ || (t = y[i] = y[i] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return _ || (h.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > _)
                                for (e in t) g[e] = [g[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || b;
                        return n && n.abort(e), i(0, e), this
                    }
                };
            if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, h.url = ((t || h.url || we) + "").replace(he, "").replace(ge, xe[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = K.trim(h.dataType || "*").toLowerCase().match(pt) || [""], null == h.crossDomain && (l = ve.exec(h.url.toLowerCase()), h.crossDomain = !(!l || l[1] === xe[1] && l[2] === xe[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (xe[3] || ("http:" === xe[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = K.param(h.data, h.traditional)), j(ye, h, e, w), 2 === _) return w;
            u = K.event && h.global, u && 0 === K.active++ && K.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !me.test(h.type), r = h.url, h.hasContent || (h.data && (r = h.url += (ce.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = de.test(r) ? r.replace(de, "$1_=" + ue++) : r + (ce.test(r) ? "&" : "?") + "_=" + ue++)), h.ifModified && (K.lastModified[r] && w.setRequestHeader("If-Modified-Since", K.lastModified[r]), K.etag[r] && w.setRequestHeader("If-None-Match", K.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + be + "; q=0.01" : "") : h.accepts["*"]);
            for (c in h.headers) w.setRequestHeader(c, h.headers[c]);
            if (h.beforeSend && (h.beforeSend.call(d, w, h) === !1 || 2 === _)) return w.abort();
            b = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[c](h[c]);
            if (n = j(_e, h, e, w)) {
                w.readyState = 1, u && p.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, h.timeout));
                try {
                    _ = 1, n.send(v, i)
                } catch (x) {
                    if (!(2 > _)) throw x;
                    i(-1, x)
                }
            } else i(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, i) {
            return K.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return K.get(t, void 0, e, "script")
        }
    }), K.each(["get", "post"], function(t, e) {
        K[e] = function(t, i, n, r) {
            return K.isFunction(i) && (r = r || n, n = i, i = void 0), K.ajax({
                url: t,
                type: e,
                dataType: r,
                data: i,
                success: n
            })
        }
    }), K._evalUrl = function(t) {
        return K.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, K.fn.extend({
        wrapAll: function(t) {
            var e;
            return K.isFunction(t) ? this.each(function(e) {
                K(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = K(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return this.each(K.isFunction(t) ? function(e) {
                K(this).wrapInner(t.call(this, e))
            } : function() {
                var e = K(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = K.isFunction(t);
            return this.each(function(i) {
                K(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }).end()
        }
    }), K.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, K.expr.filters.visible = function(t) {
        return !K.expr.filters.hidden(t)
    };
    var Te = /%20/g,
        ke = /\[\]$/,
        Se = /\r?\n/g,
        Ce = /^(?:submit|button|image|reset|file)$/i,
        Pe = /^(?:input|select|textarea|keygen)/i;
    K.param = function(t, e) {
        var i, n = [],
            r = function(t, e) {
                e = K.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(t) || t.jquery && !K.isPlainObject(t)) K.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (i in t) H(i, t[i], e, r);
        return n.join("&").replace(Te, "+")
    }, K.fn.extend({
        serialize: function() {
            return K.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = K.prop(this, "elements");
                return t ? K.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !K(this).is(":disabled") && Pe.test(this.nodeName) && !Ce.test(t) && (this.checked || !kt.test(t))
            }).map(function(t, e) {
                var i = K(this).val();
                return null == i ? null : K.isArray(i) ? K.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Se, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Se, "\r\n")
                }
            }).get()
        }
    }), K.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var $e = 0,
        Ae = {},
        Oe = {
            0: 200,
            1223: 204
        },
        Ee = K.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Ae) Ae[t]()
    }), G.cors = !!Ee && "withCredentials" in Ee, G.ajax = Ee = !!Ee, K.ajaxTransport(function(t) {
        var e;
        return G.cors || Ee && !t.crossDomain ? {
            send: function(i, n) {
                var r, s = t.xhr(),
                    o = ++$e;
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) s[r] = t.xhrFields[r];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (r in i) s.setRequestHeader(r, i[r]);
                e = function(t) {
                    return function() {
                        e && (delete Ae[o], e = s.onload = s.onerror = null, "abort" === t ? s.abort() : "error" === t ? n(s.status, s.statusText) : n(Oe[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                            text: s.responseText
                        } : void 0, s.getAllResponseHeaders()))
                    }
                }, s.onload = e(), s.onerror = e("error"), e = Ae[o] = e("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (a) {
                    if (e) throw a
                }
            },
            abort: function() {
                e && e()
            }
        } : void 0
    }), K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return K.globalEval(t), t
            }
        }
    }), K.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), K.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function(n, r) {
                    e = K("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), Z.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var De = [],
        Ne = /(=)\?(?=&|$)|\?\?/;
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = De.pop() || K.expando + "_" + ue++;
            return this[t] = !0, t
        }
    }), K.ajaxPrefilter("json jsonp", function(e, i, n) {
        var r, s, o, a = e.jsonp !== !1 && (Ne.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ne.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ne, "$1" + r) : e.jsonp !== !1 && (e.url += (ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || K.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", s = t[r], t[r] = function() {
            o = arguments
        }, n.always(function() {
            t[r] = s, e[r] && (e.jsonpCallback = i.jsonpCallback, De.push(r)), o && K.isFunction(s) && s(o[0]), o = s = void 0
        }), "script") : void 0
    }), K.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || Z;
        var n = ot.exec(t),
            r = !i && [];
        return n ? [e.createElement(n[1])] : (n = K.buildFragment([t], e, r), r && r.length && K(r).remove(), K.merge([], n.childNodes))
    };
    var Re = K.fn.load;
    K.fn.load = function(t, e, i) {
        if ("string" != typeof t && Re) return Re.apply(this, arguments);
        var n, r, s, o = this,
            a = t.indexOf(" ");
        return a >= 0 && (n = K.trim(t.slice(a)), t = t.slice(0, a)), K.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && K.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments, o.html(n ? K("<div>").append(K.parseHTML(t)).find(n) : t)
        }).complete(i && function(t, e) {
            o.each(i, s || [t.responseText, e, t])
        }), this
    }, K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        K.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), K.expr.filters.animated = function(t) {
        return K.grep(K.timers, function(e) {
            return t === e.elem
        }).length
    };
    var Me = t.document.documentElement;
    K.offset = {
        setOffset: function(t, e, i) {
            var n, r, s, o, a, l, u, c = K.css(t, "position"),
                h = K(t),
                d = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), s = K.css(t, "top"), l = K.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1, u ? (n = h.position(), o = n.top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), K.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (d.top = e.top - a.top + o), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : h.css(d)
        }
    }, K.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                K.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                s = n && n.ownerDocument;
            if (s) return e = s.documentElement, K.contains(e, n) ? (typeof n.getBoundingClientRect !== St && (r = n.getBoundingClientRect()), i = z(s), {
                top: r.top + i.pageYOffset - e.clientTop,
                left: r.left + i.pageXOffset - e.clientLeft
            }) : r
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === K.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), K.nodeName(t[0], "html") || (n = t.offset()), n.top += K.css(t[0], "borderTopWidth", !0), n.left += K.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - K.css(i, "marginTop", !0),
                    left: e.left - n.left - K.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || Me; t && !K.nodeName(t, "html") && "static" === K.css(t, "position");) t = t.offsetParent;
                return t || Me
            })
        }
    }), K.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, i) {
        var n = "pageYOffset" === i;
        K.fn[e] = function(r) {
            return gt(this, function(e, r, s) {
                var o = z(e);
                return void 0 === s ? o ? o[i] : e[r] : void(o ? o.scrollTo(n ? t.pageXOffset : s, n ? s : t.pageYOffset) : e[r] = s)
            }, e, r, arguments.length, null)
        }
    }), K.each(["top", "left"], function(t, e) {
        K.cssHooks[e] = x(G.pixelPosition, function(t, i) {
            return i ? (i = w(t, e), qt.test(i) ? K(t).position()[e] + "px" : i) : void 0
        })
    }), K.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        K.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            K.fn[n] = function(n, r) {
                var s = arguments.length && (i || "boolean" != typeof n),
                    o = i || (n === !0 || r === !0 ? "margin" : "border");
                return gt(this, function(e, i, n) {
                    var r;
                    return K.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? K.css(e, i, o) : K.style(e, i, n, o)
                }, e, s ? n : void 0, s, null)
            }
        })
    }), K.fn.size = function() {
        return this.length
    }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return K
    });
    var je = t.jQuery,
        Ie = t.$;
    return K.noConflict = function(e) {
        return t.$ === K && (t.$ = Ie), e && t.jQuery === K && (t.jQuery = je), K
    }, typeof e === St && (t.jQuery = t.$ = K), K
}),
function() {
    function t(t) {
        function e(e, i, n, r, s, o) {
            for (; s >= 0 && o > s; s += t) {
                var a = r ? r[s] : s;
                n = i(n, e[a], a, e)
            }
            return n
        }
        return function(i, n, r, s) {
            n = _(n, s, 4);
            var o = !C(i) && y.keys(i),
                a = (o || i).length,
                l = t > 0 ? 0 : a - 1;
            return arguments.length < 3 && (r = i[o ? o[l] : l], l += t), e(i, n, r, o, l, a)
        }
    }

    function e(t) {
        return function(e, i, n) {
            i = b(i, n);
            for (var r = S(e), s = t > 0 ? 0 : r - 1; s >= 0 && r > s; s += t)
                if (i(e[s], s, e)) return s;
            return -1
        }
    }

    function i(t, e, i) {
        return function(n, r, s) {
            var o = 0,
                a = S(n);
            if ("number" == typeof s) t > 0 ? o = s >= 0 ? s : Math.max(s + a, o) : a = s >= 0 ? Math.min(s + 1, a) : s + a + 1;
            else if (i && s && a) return s = i(n, r), n[s] === r ? s : -1;
            if (r !== r) return s = e(c.call(n, o, a), y.isNaN), s >= 0 ? s + o : -1;
            for (s = t > 0 ? o : a - 1; s >= 0 && a > s; s += t)
                if (n[s] === r) return s;
            return -1
        }
    }

    function n(t, e) {
        var i = E.length,
            n = t.constructor,
            r = y.isFunction(n) && n.prototype || a,
            s = "constructor";
        for (y.has(t, s) && !y.contains(e, s) && e.push(s); i--;) s = E[i], s in t && t[s] !== r[s] && !y.contains(e, s) && e.push(s)
    }
    var r = this,
        s = r._,
        o = Array.prototype,
        a = Object.prototype,
        l = Function.prototype,
        u = o.push,
        c = o.slice,
        h = a.toString,
        d = a.hasOwnProperty,
        p = Array.isArray,
        f = Object.keys,
        m = l.bind,
        g = Object.create,
        v = function() {},
        y = function(t) {
            return t instanceof y ? t : this instanceof y ? void(this._wrapped = t) : new y(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : r._ = y, y.VERSION = "1.8.3";
    var _ = function(t, e, i) {
            if (void 0 === e) return t;
            switch (null == i ? 3 : i) {
                case 1:
                    return function(i) {
                        return t.call(e, i)
                    };
                case 2:
                    return function(i, n) {
                        return t.call(e, i, n)
                    };
                case 3:
                    return function(i, n, r) {
                        return t.call(e, i, n, r)
                    };
                case 4:
                    return function(i, n, r, s) {
                        return t.call(e, i, n, r, s)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        },
        b = function(t, e, i) {
            return null == t ? y.identity : y.isFunction(t) ? _(t, e, i) : y.isObject(t) ? y.matcher(t) : y.property(t)
        };
    y.iteratee = function(t, e) {
        return b(t, e, 1 / 0)
    };
    var w = function(t, e) {
            return function(i) {
                var n = arguments.length;
                if (2 > n || null == i) return i;
                for (var r = 1; n > r; r++)
                    for (var s = arguments[r], o = t(s), a = o.length, l = 0; a > l; l++) {
                        var u = o[l];
                        e && void 0 !== i[u] || (i[u] = s[u])
                    }
                return i
            }
        },
        x = function(t) {
            if (!y.isObject(t)) return {};
            if (g) return g(t);
            v.prototype = t;
            var e = new v;
            return v.prototype = null, e
        },
        T = function(t) {
            return function(e) {
                return null == e ? void 0 : e[t]
            }
        },
        k = Math.pow(2, 53) - 1,
        S = T("length"),
        C = function(t) {
            var e = S(t);
            return "number" == typeof e && e >= 0 && k >= e
        };
    y.each = y.forEach = function(t, e, i) {
        e = _(e, i);
        var n, r;
        if (C(t))
            for (n = 0, r = t.length; r > n; n++) e(t[n], n, t);
        else {
            var s = y.keys(t);
            for (n = 0, r = s.length; r > n; n++) e(t[s[n]], s[n], t)
        }
        return t
    }, y.map = y.collect = function(t, e, i) {
        e = b(e, i);
        for (var n = !C(t) && y.keys(t), r = (n || t).length, s = Array(r), o = 0; r > o; o++) {
            var a = n ? n[o] : o;
            s[o] = e(t[a], a, t)
        }
        return s
    }, y.reduce = y.foldl = y.inject = t(1), y.reduceRight = y.foldr = t(-1), y.find = y.detect = function(t, e, i) {
        var n;
        return n = C(t) ? y.findIndex(t, e, i) : y.findKey(t, e, i), void 0 !== n && -1 !== n ? t[n] : void 0
    }, y.filter = y.select = function(t, e, i) {
        var n = [];
        return e = b(e, i), y.each(t, function(t, i, r) {
            e(t, i, r) && n.push(t)
        }), n
    }, y.reject = function(t, e, i) {
        return y.filter(t, y.negate(b(e)), i)
    }, y.every = y.all = function(t, e, i) {
        e = b(e, i);
        for (var n = !C(t) && y.keys(t), r = (n || t).length, s = 0; r > s; s++) {
            var o = n ? n[s] : s;
            if (!e(t[o], o, t)) return !1
        }
        return !0
    }, y.some = y.any = function(t, e, i) {
        e = b(e, i);
        for (var n = !C(t) && y.keys(t), r = (n || t).length, s = 0; r > s; s++) {
            var o = n ? n[s] : s;
            if (e(t[o], o, t)) return !0
        }
        return !1
    }, y.contains = y.includes = y.include = function(t, e, i, n) {
        return C(t) || (t = y.values(t)), ("number" != typeof i || n) && (i = 0), y.indexOf(t, e, i) >= 0
    }, y.invoke = function(t, e) {
        var i = c.call(arguments, 2),
            n = y.isFunction(e);
        return y.map(t, function(t) {
            var r = n ? e : t[e];
            return null == r ? r : r.apply(t, i)
        })
    }, y.pluck = function(t, e) {
        return y.map(t, y.property(e))
    }, y.where = function(t, e) {
        return y.filter(t, y.matcher(e))
    }, y.findWhere = function(t, e) {
        return y.find(t, y.matcher(e))
    }, y.max = function(t, e, i) {
        var n, r, s = -(1 / 0),
            o = -(1 / 0);
        if (null == e && null != t) {
            t = C(t) ? t : y.values(t);
            for (var a = 0, l = t.length; l > a; a++) n = t[a], n > s && (s = n)
        } else e = b(e, i), y.each(t, function(t, i, n) {
            r = e(t, i, n), (r > o || r === -(1 / 0) && s === -(1 / 0)) && (s = t, o = r)
        });
        return s
    }, y.min = function(t, e, i) {
        var n, r, s = 1 / 0,
            o = 1 / 0;
        if (null == e && null != t) {
            t = C(t) ? t : y.values(t);
            for (var a = 0, l = t.length; l > a; a++) n = t[a], s > n && (s = n)
        } else e = b(e, i), y.each(t, function(t, i, n) {
            r = e(t, i, n), (o > r || r === 1 / 0 && s === 1 / 0) && (s = t, o = r)
        });
        return s
    }, y.shuffle = function(t) {
        for (var e, i = C(t) ? t : y.values(t), n = i.length, r = Array(n), s = 0; n > s; s++) e = y.random(0, s), e !== s && (r[s] = r[e]), r[e] = i[s];
        return r
    }, y.sample = function(t, e, i) {
        return null == e || i ? (C(t) || (t = y.values(t)), t[y.random(t.length - 1)]) : y.shuffle(t).slice(0, Math.max(0, e))
    }, y.sortBy = function(t, e, i) {
        return e = b(e, i), y.pluck(y.map(t, function(t, i, n) {
            return {
                value: t,
                index: i,
                criteria: e(t, i, n)
            }
        }).sort(function(t, e) {
            var i = t.criteria,
                n = e.criteria;
            if (i !== n) {
                if (i > n || void 0 === i) return 1;
                if (n > i || void 0 === n) return -1
            }
            return t.index - e.index
        }), "value")
    };
    var P = function(t) {
        return function(e, i, n) {
            var r = {};
            return i = b(i, n), y.each(e, function(n, s) {
                var o = i(n, s, e);
                t(r, n, o)
            }), r
        }
    };
    y.groupBy = P(function(t, e, i) {
        y.has(t, i) ? t[i].push(e) : t[i] = [e]
    }), y.indexBy = P(function(t, e, i) {
        t[i] = e
    }), y.countBy = P(function(t, e, i) {
        y.has(t, i) ? t[i]++ : t[i] = 1
    }), y.toArray = function(t) {
        return t ? y.isArray(t) ? c.call(t) : C(t) ? y.map(t, y.identity) : y.values(t) : []
    }, y.size = function(t) {
        return null == t ? 0 : C(t) ? t.length : y.keys(t).length
    }, y.partition = function(t, e, i) {
        e = b(e, i);
        var n = [],
            r = [];
        return y.each(t, function(t, i, s) {
            (e(t, i, s) ? n : r).push(t)
        }), [n, r]
    }, y.first = y.head = y.take = function(t, e, i) {
        return null == t ? void 0 : null == e || i ? t[0] : y.initial(t, t.length - e)
    }, y.initial = function(t, e, i) {
        return c.call(t, 0, Math.max(0, t.length - (null == e || i ? 1 : e)))
    }, y.last = function(t, e, i) {
        return null == t ? void 0 : null == e || i ? t[t.length - 1] : y.rest(t, Math.max(0, t.length - e))
    }, y.rest = y.tail = y.drop = function(t, e, i) {
        return c.call(t, null == e || i ? 1 : e)
    }, y.compact = function(t) {
        return y.filter(t, y.identity)
    };
    var $ = function(t, e, i, n) {
        for (var r = [], s = 0, o = n || 0, a = S(t); a > o; o++) {
            var l = t[o];
            if (C(l) && (y.isArray(l) || y.isArguments(l))) {
                e || (l = $(l, e, i));
                var u = 0,
                    c = l.length;
                for (r.length += c; c > u;) r[s++] = l[u++]
            } else i || (r[s++] = l)
        }
        return r
    };
    y.flatten = function(t, e) {
        return $(t, e, !1)
    }, y.without = function(t) {
        return y.difference(t, c.call(arguments, 1))
    }, y.uniq = y.unique = function(t, e, i, n) {
        y.isBoolean(e) || (n = i, i = e, e = !1), null != i && (i = b(i, n));
        for (var r = [], s = [], o = 0, a = S(t); a > o; o++) {
            var l = t[o],
                u = i ? i(l, o, t) : l;
            e ? (o && s === u || r.push(l), s = u) : i ? y.contains(s, u) || (s.push(u), r.push(l)) : y.contains(r, l) || r.push(l)
        }
        return r
    }, y.union = function() {
        return y.uniq($(arguments, !0, !0))
    }, y.intersection = function(t) {
        for (var e = [], i = arguments.length, n = 0, r = S(t); r > n; n++) {
            var s = t[n];
            if (!y.contains(e, s)) {
                for (var o = 1; i > o && y.contains(arguments[o], s); o++);
                o === i && e.push(s)
            }
        }
        return e
    }, y.difference = function(t) {
        var e = $(arguments, !0, !0, 1);
        return y.filter(t, function(t) {
            return !y.contains(e, t)
        })
    }, y.zip = function() {
        return y.unzip(arguments)
    }, y.unzip = function(t) {
        for (var e = t && y.max(t, S).length || 0, i = Array(e), n = 0; e > n; n++) i[n] = y.pluck(t, n);
        return i
    }, y.object = function(t, e) {
        for (var i = {}, n = 0, r = S(t); r > n; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
        return i
    }, y.findIndex = e(1), y.findLastIndex = e(-1), y.sortedIndex = function(t, e, i, n) {
        i = b(i, n, 1);
        for (var r = i(e), s = 0, o = S(t); o > s;) {
            var a = Math.floor((s + o) / 2);
            i(t[a]) < r ? s = a + 1 : o = a
        }
        return s
    }, y.indexOf = i(1, y.findIndex, y.sortedIndex), y.lastIndexOf = i(-1, y.findLastIndex), y.range = function(t, e, i) {
        null == e && (e = t || 0, t = 0), i = i || 1;
        for (var n = Math.max(Math.ceil((e - t) / i), 0), r = Array(n), s = 0; n > s; s++, t += i) r[s] = t;
        return r
    };
    var A = function(t, e, i, n, r) {
        if (!(n instanceof e)) return t.apply(i, r);
        var s = x(t.prototype),
            o = t.apply(s, r);
        return y.isObject(o) ? o : s
    };
    y.bind = function(t, e) {
        if (m && t.bind === m) return m.apply(t, c.call(arguments, 1));
        if (!y.isFunction(t)) throw new TypeError("Bind must be called on a function");
        var i = c.call(arguments, 2),
            n = function() {
                return A(t, n, e, this, i.concat(c.call(arguments)))
            };
        return n
    }, y.partial = function(t) {
        var e = c.call(arguments, 1),
            i = function() {
                for (var n = 0, r = e.length, s = Array(r), o = 0; r > o; o++) s[o] = e[o] === y ? arguments[n++] : e[o];
                for (; n < arguments.length;) s.push(arguments[n++]);
                return A(t, i, this, this, s)
            };
        return i
    }, y.bindAll = function(t) {
        var e, i, n = arguments.length;
        if (1 >= n) throw new Error("bindAll must be passed function names");
        for (e = 1; n > e; e++) i = arguments[e], t[i] = y.bind(t[i], t);
        return t
    }, y.memoize = function(t, e) {
        var i = function(n) {
            var r = i.cache,
                s = "" + (e ? e.apply(this, arguments) : n);
            return y.has(r, s) || (r[s] = t.apply(this, arguments)), r[s]
        };
        return i.cache = {}, i
    }, y.delay = function(t, e) {
        var i = c.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, i)
        }, e)
    }, y.defer = y.partial(y.delay, y, 1), y.throttle = function(t, e, i) {
        var n, r, s, o = null,
            a = 0;
        i || (i = {});
        var l = function() {
            a = i.leading === !1 ? 0 : y.now(), o = null, s = t.apply(n, r), o || (n = r = null)
        };
        return function() {
            var u = y.now();
            a || i.leading !== !1 || (a = u);
            var c = e - (u - a);
            return n = this, r = arguments, 0 >= c || c > e ? (o && (clearTimeout(o), o = null), a = u, s = t.apply(n, r), o || (n = r = null)) : o || i.trailing === !1 || (o = setTimeout(l, c)), s
        }
    }, y.debounce = function(t, e, i) {
        var n, r, s, o, a, l = function() {
            var u = y.now() - o;
            e > u && u >= 0 ? n = setTimeout(l, e - u) : (n = null, i || (a = t.apply(s, r), n || (s = r = null)))
        };
        return function() {
            s = this, r = arguments, o = y.now();
            var u = i && !n;
            return n || (n = setTimeout(l, e)), u && (a = t.apply(s, r), s = r = null), a
        }
    }, y.wrap = function(t, e) {
        return y.partial(e, t)
    }, y.negate = function(t) {
        return function() {
            return !t.apply(this, arguments)
        }
    }, y.compose = function() {
        var t = arguments,
            e = t.length - 1;
        return function() {
            for (var i = e, n = t[e].apply(this, arguments); i--;) n = t[i].call(this, n);
            return n
        }
    }, y.after = function(t, e) {
        return function() {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    }, y.before = function(t, e) {
        var i;
        return function() {
            return --t > 0 && (i = e.apply(this, arguments)), 1 >= t && (e = null), i
        }
    }, y.once = y.partial(y.before, 2);
    var O = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        E = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    y.keys = function(t) {
        if (!y.isObject(t)) return [];
        if (f) return f(t);
        var e = [];
        for (var i in t) y.has(t, i) && e.push(i);
        return O && n(t, e), e
    }, y.allKeys = function(t) {
        if (!y.isObject(t)) return [];
        var e = [];
        for (var i in t) e.push(i);
        return O && n(t, e), e
    }, y.values = function(t) {
        for (var e = y.keys(t), i = e.length, n = Array(i), r = 0; i > r; r++) n[r] = t[e[r]];
        return n
    }, y.mapObject = function(t, e, i) {
        e = b(e, i);
        for (var n, r = y.keys(t), s = r.length, o = {}, a = 0; s > a; a++) n = r[a], o[n] = e(t[n], n, t);
        return o
    }, y.pairs = function(t) {
        for (var e = y.keys(t), i = e.length, n = Array(i), r = 0; i > r; r++) n[r] = [e[r], t[e[r]]];
        return n
    }, y.invert = function(t) {
        for (var e = {}, i = y.keys(t), n = 0, r = i.length; r > n; n++) e[t[i[n]]] = i[n];
        return e
    }, y.functions = y.methods = function(t) {
        var e = [];
        for (var i in t) y.isFunction(t[i]) && e.push(i);
        return e.sort()
    }, y.extend = w(y.allKeys), y.extendOwn = y.assign = w(y.keys), y.findKey = function(t, e, i) {
        e = b(e, i);
        for (var n, r = y.keys(t), s = 0, o = r.length; o > s; s++)
            if (n = r[s], e(t[n], n, t)) return n
    }, y.pick = function(t, e, i) {
        var n, r, s = {},
            o = t;
        if (null == o) return s;
        y.isFunction(e) ? (r = y.allKeys(o), n = _(e, i)) : (r = $(arguments, !1, !1, 1), n = function(t, e, i) {
            return e in i
        }, o = Object(o));
        for (var a = 0, l = r.length; l > a; a++) {
            var u = r[a],
                c = o[u];
            n(c, u, o) && (s[u] = c)
        }
        return s
    }, y.omit = function(t, e, i) {
        if (y.isFunction(e)) e = y.negate(e);
        else {
            var n = y.map($(arguments, !1, !1, 1), String);
            e = function(t, e) {
                return !y.contains(n, e)
            }
        }
        return y.pick(t, e, i)
    }, y.defaults = w(y.allKeys, !0), y.create = function(t, e) {
        var i = x(t);
        return e && y.extendOwn(i, e), i
    }, y.clone = function(t) {
        return y.isObject(t) ? y.isArray(t) ? t.slice() : y.extend({}, t) : t
    }, y.tap = function(t, e) {
        return e(t), t
    }, y.isMatch = function(t, e) {
        var i = y.keys(e),
            n = i.length;
        if (null == t) return !n;
        for (var r = Object(t), s = 0; n > s; s++) {
            var o = i[s];
            if (e[o] !== r[o] || !(o in r)) return !1
        }
        return !0
    };
    var D = function(t, e, i, n) {
        if (t === e) return 0 !== t || 1 / t === 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof y && (t = t._wrapped), e instanceof y && (e = e._wrapped);
        var r = h.call(t);
        if (r !== h.call(e)) return !1;
        switch (r) {
            case "[object RegExp]":
            case "[object String]":
                return "" + t == "" + e;
            case "[object Number]":
                return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t === +e
        }
        var s = "[object Array]" === r;
        if (!s) {
            if ("object" != typeof t || "object" != typeof e) return !1;
            var o = t.constructor,
                a = e.constructor;
            if (o !== a && !(y.isFunction(o) && o instanceof o && y.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1;

        }
        i = i || [], n = n || [];
        for (var l = i.length; l--;)
            if (i[l] === t) return n[l] === e;
        if (i.push(t), n.push(e), s) {
            if (l = t.length, l !== e.length) return !1;
            for (; l--;)
                if (!D(t[l], e[l], i, n)) return !1
        } else {
            var u, c = y.keys(t);
            if (l = c.length, y.keys(e).length !== l) return !1;
            for (; l--;)
                if (u = c[l], !y.has(e, u) || !D(t[u], e[u], i, n)) return !1
        }
        return i.pop(), n.pop(), !0
    };
    y.isEqual = function(t, e) {
        return D(t, e)
    }, y.isEmpty = function(t) {
        return null == t ? !0 : C(t) && (y.isArray(t) || y.isString(t) || y.isArguments(t)) ? 0 === t.length : 0 === y.keys(t).length
    }, y.isElement = function(t) {
        return !(!t || 1 !== t.nodeType)
    }, y.isArray = p || function(t) {
        return "[object Array]" === h.call(t)
    }, y.isObject = function(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    }, y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
        y["is" + t] = function(e) {
            return h.call(e) === "[object " + t + "]"
        }
    }), y.isArguments(arguments) || (y.isArguments = function(t) {
        return y.has(t, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function(t) {
        return "function" == typeof t || !1
    }), y.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, y.isNaN = function(t) {
        return y.isNumber(t) && t !== +t
    }, y.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" === h.call(t)
    }, y.isNull = function(t) {
        return null === t
    }, y.isUndefined = function(t) {
        return void 0 === t
    }, y.has = function(t, e) {
        return null != t && d.call(t, e)
    }, y.noConflict = function() {
        return r._ = s, this
    }, y.identity = function(t) {
        return t
    }, y.constant = function(t) {
        return function() {
            return t
        }
    }, y.noop = function() {}, y.property = T, y.propertyOf = function(t) {
        return null == t ? function() {} : function(e) {
            return t[e]
        }
    }, y.matcher = y.matches = function(t) {
        return t = y.extendOwn({}, t),
            function(e) {
                return y.isMatch(e, t)
            }
    }, y.times = function(t, e, i) {
        var n = Array(Math.max(0, t));
        e = _(e, i, 1);
        for (var r = 0; t > r; r++) n[r] = e(r);
        return n
    }, y.random = function(t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    }, y.now = Date.now || function() {
        return (new Date).getTime()
    };
    var N = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        R = y.invert(N),
        M = function(t) {
            var e = function(e) {
                    return t[e]
                },
                i = "(?:" + y.keys(t).join("|") + ")",
                n = RegExp(i),
                r = RegExp(i, "g");
            return function(t) {
                return t = null == t ? "" : "" + t, n.test(t) ? t.replace(r, e) : t
            }
        };
    y.escape = M(N), y.unescape = M(R), y.result = function(t, e, i) {
        var n = null == t ? void 0 : t[e];
        return void 0 === n && (n = i), y.isFunction(n) ? n.call(t) : n
    };
    var j = 0;
    y.uniqueId = function(t) {
        var e = ++j + "";
        return t ? t + e : e
    }, y.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var I = /(.)^/,
        L = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        F = /\\|'|\r|\n|\u2028|\u2029/g,
        H = function(t) {
            return "\\" + L[t]
        };
    y.template = function(t, e, i) {
        !e && i && (e = i), e = y.defaults({}, e, y.templateSettings);
        var n = RegExp([(e.escape || I).source, (e.interpolate || I).source, (e.evaluate || I).source].join("|") + "|$", "g"),
            r = 0,
            s = "__p+='";
        t.replace(n, function(e, i, n, o, a) {
            return s += t.slice(r, a).replace(F, H), r = a + e.length, i ? s += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : n ? s += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), e
        }), s += "';\n", e.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            var o = new Function(e.variable || "obj", "_", s)
        } catch (a) {
            throw a.source = s, a
        }
        var l = function(t) {
                return o.call(this, t, y)
            },
            u = e.variable || "obj";
        return l.source = "function(" + u + "){\n" + s + "}", l
    }, y.chain = function(t) {
        var e = y(t);
        return e._chain = !0, e
    };
    var z = function(t, e) {
        return t._chain ? y(e).chain() : e
    };
    y.mixin = function(t) {
        y.each(y.functions(t), function(e) {
            var i = y[e] = t[e];
            y.prototype[e] = function() {
                var t = [this._wrapped];
                return u.apply(t, arguments), z(this, i.apply(y, t))
            }
        })
    }, y.mixin(y), y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var e = o[t];
        y.prototype[t] = function() {
            var i = this._wrapped;
            return e.apply(i, arguments), "shift" !== t && "splice" !== t || 0 !== i.length || delete i[0], z(this, i)
        }
    }), y.each(["concat", "join", "slice"], function(t) {
        var e = o[t];
        y.prototype[t] = function() {
            return z(this, e.apply(this._wrapped, arguments))
        }
    }), y.prototype.value = function() {
        return this._wrapped
    }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return y
    })
}.call(this),
    function(t) {
        var e = "object" == typeof self && self.self == self && self || "object" == typeof global && global.global == global && global;
        if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function(i, n, r) {
            e.Backbone = t(e, r, i, n)
        });
        else if ("undefined" != typeof exports) {
            var i, n = require("underscore");
            try {
                i = require("jquery")
            } catch (r) {}
            t(e, exports, n, i)
        } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
    }(function(t, e, i, n) {
        var r = t.Backbone,
            s = [].slice;
        e.VERSION = "1.2.1", e.$ = n, e.noConflict = function() {
            return t.Backbone = r, this
        }, e.emulateHTTP = !1, e.emulateJSON = !1;
        var o = function(t, e, n) {
                switch (t) {
                    case 1:
                        return function() {
                            return i[e](this[n])
                        };
                    case 2:
                        return function(t) {
                            return i[e](this[n], t)
                        };
                    case 3:
                        return function(t, r) {
                            return i[e](this[n], t, r)
                        };
                    case 4:
                        return function(t, r, s) {
                            return i[e](this[n], t, r, s)
                        };
                    default:
                        return function() {
                            var t = s.call(arguments);
                            return t.unshift(this[n]), i[e].apply(i, t)
                        }
                }
            },
            a = function(t, e, n) {
                i.each(e, function(e, r) {
                    i[r] && (t.prototype[r] = o(e, r, n))
                })
            },
            l = e.Events = {},
            u = /\s+/,
            c = function(t, e, n, r, s) {
                var o, a = 0;
                if (n && "object" == typeof n) {
                    void 0 !== r && "context" in s && void 0 === s.context && (s.context = r);
                    for (o = i.keys(n); a < o.length; a++) e = t(e, o[a], n[o[a]], s)
                } else if (n && u.test(n))
                    for (o = n.split(u); a < o.length; a++) e = t(e, o[a], r, s);
                else e = t(e, n, r, s);
                return e
            };
        l.on = function(t, e, i) {
            return h(this, t, e, i)
        };
        var h = function(t, e, i, n, r) {
            if (t._events = c(d, t._events || {}, e, i, {
                    context: n,
                    ctx: t,
                    listening: r
                }), r) {
                var s = t._listeners || (t._listeners = {});
                s[r.id] = r
            }
            return t
        };
        l.listenTo = function(t, e, n) {
            if (!t) return this;
            var r = t._listenId || (t._listenId = i.uniqueId("l")),
                s = this._listeningTo || (this._listeningTo = {}),
                o = s[r];
            if (!o) {
                var a = this._listenId || (this._listenId = i.uniqueId("l"));
                o = s[r] = {
                    obj: t,
                    objId: r,
                    id: a,
                    listeningTo: s,
                    count: 0
                }
            }
            return h(t, e, n, this, o), this
        };
        var d = function(t, e, i, n) {
            if (i) {
                var r = t[e] || (t[e] = []),
                    s = n.context,
                    o = n.ctx,
                    a = n.listening;
                a && a.count++, r.push({
                    callback: i,
                    context: s,
                    ctx: s || o,
                    listening: a
                })
            }
            return t
        };
        l.off = function(t, e, i) {
            return this._events ? (this._events = c(p, this._events, t, e, {
                context: i,
                listeners: this._listeners
            }), this) : this
        }, l.stopListening = function(t, e, n) {
            var r = this._listeningTo;
            if (!r) return this;
            for (var s = t ? [t._listenId] : i.keys(r), o = 0; o < s.length; o++) {
                var a = r[s[o]];
                if (!a) break;
                a.obj.off(e, n, this)
            }
            return i.isEmpty(r) && (this._listeningTo = void 0), this
        };
        var p = function(t, e, n, r) {
            if (t) {
                var s, o = 0,
                    a = r.context,
                    l = r.listeners;
                if (e || n || a) {
                    for (var u = e ? [e] : i.keys(t); o < u.length; o++) {
                        e = u[o];
                        var c = t[e];
                        if (!c) break;
                        for (var h = [], d = 0; d < c.length; d++) {
                            var p = c[d];
                            n && n !== p.callback && n !== p.callback._callback || a && a !== p.context ? h.push(p) : (s = p.listening, s && 0 === --s.count && (delete l[s.id], delete s.listeningTo[s.objId]))
                        }
                        h.length ? t[e] = h : delete t[e]
                    }
                    return i.size(t) ? t : void 0
                }
                for (var f = i.keys(l); o < f.length; o++) s = l[f[o]], delete l[s.id], delete s.listeningTo[s.objId]
            }
        };
        l.once = function(t, e, n) {
            var r = c(f, {}, t, e, i.bind(this.off, this));
            return this.on(r, void 0, n)
        }, l.listenToOnce = function(t, e, n) {
            var r = c(f, {}, e, n, i.bind(this.stopListening, this, t));
            return this.listenTo(t, r)
        };
        var f = function(t, e, n, r) {
            if (n) {
                var s = t[e] = i.once(function() {
                    r(e, s), n.apply(this, arguments)
                });
                s._callback = n
            }
            return t
        };
        l.trigger = function(t) {
            if (!this._events) return this;
            for (var e = Math.max(0, arguments.length - 1), i = Array(e), n = 0; e > n; n++) i[n] = arguments[n + 1];
            return c(m, this._events, t, void 0, i), this
        };
        var m = function(t, e, i, n) {
                if (t) {
                    var r = t[e],
                        s = t.all;
                    r && s && (s = s.slice()), r && g(r, n), s && g(s, [e].concat(n))
                }
                return t
            },
            g = function(t, e) {
                var i, n = -1,
                    r = t.length,
                    s = e[0],
                    o = e[1],
                    a = e[2];
                switch (e.length) {
                    case 0:
                        for (; ++n < r;)(i = t[n]).callback.call(i.ctx);
                        return;
                    case 1:
                        for (; ++n < r;)(i = t[n]).callback.call(i.ctx, s);
                        return;
                    case 2:
                        for (; ++n < r;)(i = t[n]).callback.call(i.ctx, s, o);
                        return;
                    case 3:
                        for (; ++n < r;)(i = t[n]).callback.call(i.ctx, s, o, a);
                        return;
                    default:
                        for (; ++n < r;)(i = t[n]).callback.apply(i.ctx, e);
                        return
                }
            };
        l.bind = l.on, l.unbind = l.off, i.extend(e, l);
        var v = e.Model = function(t, e) {
            var n = t || {};
            e || (e = {}), this.cid = i.uniqueId(this.cidPrefix), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (n = this.parse(n, e) || {}), n = i.defaults({}, n, i.result(this, "defaults")), this.set(n, e), this.changed = {}, this.initialize.apply(this, arguments)
        };
        i.extend(v.prototype, l, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            cidPrefix: "c",
            initialize: function() {},
            toJSON: function(t) {
                return i.clone(this.attributes)
            },
            sync: function() {
                return e.sync.apply(this, arguments)
            },
            get: function(t) {
                return this.attributes[t]
            },
            escape: function(t) {
                return i.escape(this.get(t))
            },
            has: function(t) {
                return null != this.get(t)
            },
            matches: function(t) {
                return !!i.iteratee(t, this)(this.attributes)
            },
            set: function(t, e, n) {
                if (null == t) return this;
                var r;
                if ("object" == typeof t ? (r = t, n = e) : (r = {})[t] = e, n || (n = {}), !this._validate(r, n)) return !1;
                var s = n.unset,
                    o = n.silent,
                    a = [],
                    l = this._changing;
                this._changing = !0, l || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
                var u = this.attributes,
                    c = this.changed,
                    h = this._previousAttributes;
                this.idAttribute in r && (this.id = r[this.idAttribute]);
                for (var d in r) e = r[d], i.isEqual(u[d], e) || a.push(d), i.isEqual(h[d], e) ? delete c[d] : c[d] = e, s ? delete u[d] : u[d] = e;
                if (!o) {
                    a.length && (this._pending = n);
                    for (var p = 0; p < a.length; p++) this.trigger("change:" + a[p], this, u[a[p]], n)
                }
                if (l) return this;
                if (!o)
                    for (; this._pending;) n = this._pending, this._pending = !1, this.trigger("change", this, n);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(t, e) {
                return this.set(t, void 0, i.extend({}, e, {
                    unset: !0
                }))
            },
            clear: function(t) {
                var e = {};
                for (var n in this.attributes) e[n] = void 0;
                return this.set(e, i.extend({}, t, {
                    unset: !0
                }))
            },
            hasChanged: function(t) {
                return null == t ? !i.isEmpty(this.changed) : i.has(this.changed, t)
            },
            changedAttributes: function(t) {
                if (!t) return this.hasChanged() ? i.clone(this.changed) : !1;
                var e = this._changing ? this._previousAttributes : this.attributes,
                    n = {};
                for (var r in t) {
                    var s = t[r];
                    i.isEqual(e[r], s) || (n[r] = s)
                }
                return i.size(n) ? n : !1
            },
            previous: function(t) {
                return null != t && this._previousAttributes ? this._previousAttributes[t] : null
            },
            previousAttributes: function() {
                return i.clone(this._previousAttributes)
            },
            fetch: function(t) {
                t = i.extend({
                    parse: !0
                }, t);
                var e = this,
                    n = t.success;
                return t.success = function(i) {
                    var r = t.parse ? e.parse(i, t) : i;
                    return e.set(r, t) ? (n && n.call(t.context, e, i, t), void e.trigger("sync", e, i, t)) : !1
                }, F(this, t), this.sync("read", this, t)
            },
            save: function(t, e, n) {
                var r;
                null == t || "object" == typeof t ? (r = t, n = e) : (r = {})[t] = e, n = i.extend({
                    validate: !0,
                    parse: !0
                }, n);
                var s = n.wait;
                if (r && !s) {
                    if (!this.set(r, n)) return !1
                } else if (!this._validate(r, n)) return !1;
                var o = this,
                    a = n.success,
                    l = this.attributes;
                n.success = function(t) {
                    o.attributes = l;
                    var e = n.parse ? o.parse(t, n) : t;
                    return s && (e = i.extend({}, r, e)), e && !o.set(e, n) ? !1 : (a && a.call(n.context, o, t, n), void o.trigger("sync", o, t, n))
                }, F(this, n), r && s && (this.attributes = i.extend({}, l, r));
                var u = this.isNew() ? "create" : n.patch ? "patch" : "update";
                "patch" !== u || n.attrs || (n.attrs = r);
                var c = this.sync(u, this, n);
                return this.attributes = l, c
            },
            destroy: function(t) {
                t = t ? i.clone(t) : {};
                var e = this,
                    n = t.success,
                    r = t.wait,
                    s = function() {
                        e.stopListening(), e.trigger("destroy", e, e.collection, t)
                    };
                t.success = function(i) {
                    r && s(), n && n.call(t.context, e, i, t), e.isNew() || e.trigger("sync", e, i, t)
                };
                var o = !1;
                return this.isNew() ? i.defer(t.success) : (F(this, t), o = this.sync("delete", this, t)), r || s(), o
            },
            url: function() {
                var t = i.result(this, "urlRoot") || i.result(this.collection, "url") || L();
                if (this.isNew()) return t;
                var e = this.get(this.idAttribute);
                return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e)
            },
            parse: function(t, e) {
                return t
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(t) {
                return this._validate({}, i.defaults({
                    validate: !0
                }, t))
            },
            _validate: function(t, e) {
                if (!e.validate || !this.validate) return !0;
                t = i.extend({}, this.attributes, t);
                var n = this.validationError = this.validate(t, e) || null;
                return n ? (this.trigger("invalid", this, n, i.extend(e, {
                    validationError: n
                })), !1) : !0
            }
        });
        var y = {
            keys: 1,
            values: 1,
            pairs: 1,
            invert: 1,
            pick: 0,
            omit: 0,
            chain: 1,
            isEmpty: 1
        };
        a(v, y, "attributes");
        var _ = e.Collection = function(t, e) {
                e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, i.extend({
                    silent: !0
                }, e))
            },
            b = {
                add: !0,
                remove: !0,
                merge: !0
            },
            w = {
                add: !0,
                remove: !1
            };
        i.extend(_.prototype, l, {
            model: v,
            initialize: function() {},
            toJSON: function(t) {
                return this.map(function(e) {
                    return e.toJSON(t)
                })
            },
            sync: function() {
                return e.sync.apply(this, arguments)
            },
            add: function(t, e) {
                return this.set(t, i.extend({
                    merge: !1
                }, e, w))
            },
            remove: function(t, e) {
                e = i.extend({}, e);
                var n = !i.isArray(t);
                t = n ? [t] : i.clone(t);
                var r = this._removeModels(t, e);
                return !e.silent && r && this.trigger("update", this, e), n ? r[0] : r
            },
            set: function(t, e) {
                e = i.defaults({}, e, b), e.parse && !this._isModel(t) && (t = this.parse(t, e));
                var n = !i.isArray(t);
                t = n ? t ? [t] : [] : t.slice();
                var r, s, o, a, l, u = e.at;
                null != u && (u = +u), 0 > u && (u += this.length + 1);
                for (var c = this.comparator && null == u && e.sort !== !1, h = i.isString(this.comparator) ? this.comparator : null, d = [], p = [], f = {}, m = e.add, g = e.merge, v = e.remove, y = !c && m && v ? [] : !1, _ = !1, w = 0; w < t.length; w++) {
                    if (o = t[w], a = this.get(o)) v && (f[a.cid] = !0), g && o !== a && (o = this._isModel(o) ? o.attributes : o, e.parse && (o = a.parse(o, e)), a.set(o, e), c && !l && a.hasChanged(h) && (l = !0)), t[w] = a;
                    else if (m) {
                        if (s = t[w] = this._prepareModel(o, e), !s) continue;
                        d.push(s), this._addReference(s, e)
                    }
                    s = a || s, s && (r = this.modelId(s.attributes), !y || !s.isNew() && f[r] || (y.push(s), _ = _ || !this.models[w] || s.cid !== this.models[w].cid), f[r] = !0)
                }
                if (v) {
                    for (var w = 0; w < this.length; w++) f[(s = this.models[w]).cid] || p.push(s);
                    p.length && this._removeModels(p, e)
                }
                if (d.length || _)
                    if (c && (l = !0), this.length += d.length, null != u)
                        for (var w = 0; w < d.length; w++) this.models.splice(u + w, 0, d[w]);
                    else {
                        y && (this.models.length = 0);
                        for (var x = y || d, w = 0; w < x.length; w++) this.models.push(x[w])
                    }
                if (l && this.sort({
                        silent: !0
                    }), !e.silent) {
                    for (var T = null != u ? i.clone(e) : e, w = 0; w < d.length; w++) null != u && (T.index = u + w), (s = d[w]).trigger("add", s, this, T);
                    (l || _) && this.trigger("sort", this, e), (d.length || p.length) && this.trigger("update", this, e)
                }
                return n ? t[0] : t
            },
            reset: function(t, e) {
                e = e ? i.clone(e) : {};
                for (var n = 0; n < this.models.length; n++) this._removeReference(this.models[n], e);
                return e.previousModels = this.models, this._reset(), t = this.add(t, i.extend({
                    silent: !0
                }, e)), e.silent || this.trigger("reset", this, e), t
            },
            push: function(t, e) {
                return this.add(t, i.extend({
                    at: this.length
                }, e))
            },
            pop: function(t) {
                var e = this.at(this.length - 1);
                return this.remove(e, t)
            },
            unshift: function(t, e) {
                return this.add(t, i.extend({
                    at: 0
                }, e))
            },
            shift: function(t) {
                var e = this.at(0);
                return this.remove(e, t)
            },
            slice: function() {
                return s.apply(this.models, arguments)
            },
            get: function(t) {
                if (null == t) return void 0;
                var e = this.modelId(this._isModel(t) ? t.attributes : t);
                return this._byId[t] || this._byId[e] || this._byId[t.cid]
            },
            at: function(t) {
                return 0 > t && (t += this.length), this.models[t]
            },
            where: function(t, e) {
                var n = i.matches(t);
                return this[e ? "find" : "filter"](function(t) {
                    return n(t.attributes)
                })
            },
            findWhere: function(t) {
                return this.where(t, !0)
            },
            sort: function(t) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return t || (t = {}), i.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(i.bind(this.comparator, this)), t.silent || this.trigger("sort", this, t), this
            },
            pluck: function(t) {
                return i.invoke(this.models, "get", t)
            },
            fetch: function(t) {
                t = i.extend({
                    parse: !0
                }, t);
                var e = t.success,
                    n = this;
                return t.success = function(i) {
                    var r = t.reset ? "reset" : "set";
                    n[r](i, t), e && e.call(t.context, n, i, t), n.trigger("sync", n, i, t)
                }, F(this, t), this.sync("read", this, t)
            },
            create: function(t, e) {
                e = e ? i.clone(e) : {};
                var n = e.wait;
                if (t = this._prepareModel(t, e), !t) return !1;
                n || this.add(t, e);
                var r = this,
                    s = e.success;
                return e.success = function(t, e, i) {
                    n && r.add(t, i), s && s.call(i.context, t, e, i)
                }, t.save(null, e), t
            },
            parse: function(t, e) {
                return t
            },
            clone: function() {
                return new this.constructor(this.models, {
                    model: this.model,
                    comparator: this.comparator
                })
            },
            modelId: function(t) {
                return t[this.model.prototype.idAttribute || "id"]
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(t, e) {
                if (this._isModel(t)) return t.collection || (t.collection = this), t;
                e = e ? i.clone(e) : {}, e.collection = this;
                var n = new this.model(t, e);
                return n.validationError ? (this.trigger("invalid", this, n.validationError, e), !1) : n
            },
            _removeModels: function(t, e) {
                for (var i = [], n = 0; n < t.length; n++) {
                    var r = this.get(t[n]);
                    if (r) {
                        var s = this.indexOf(r);
                        this.models.splice(s, 1), this.length--, e.silent || (e.index = s, r.trigger("remove", r, this, e)), i.push(r), this._removeReference(r, e)
                    }
                }
                return i.length ? i : !1
            },
            _isModel: function(t) {
                return t instanceof v
            },
            _addReference: function(t, e) {
                this._byId[t.cid] = t;
                var i = this.modelId(t.attributes);
                null != i && (this._byId[i] = t), t.on("all", this._onModelEvent, this)
            },
            _removeReference: function(t, e) {
                delete this._byId[t.cid];
                var i = this.modelId(t.attributes);
                null != i && delete this._byId[i], this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(t, e, i, n) {
                if ("add" !== t && "remove" !== t || i === this) {
                    if ("destroy" === t && this.remove(e, n), "change" === t) {
                        var r = this.modelId(e.previousAttributes()),
                            s = this.modelId(e.attributes);
                        r !== s && (null != r && delete this._byId[r], null != s && (this._byId[s] = e))
                    }
                    this.trigger.apply(this, arguments)
                }
            }
        });
        var x = {
            forEach: 3,
            each: 3,
            map: 3,
            collect: 3,
            reduce: 4,
            foldl: 4,
            inject: 4,
            reduceRight: 4,
            foldr: 4,
            find: 3,
            detect: 3,
            filter: 3,
            select: 3,
            reject: 3,
            every: 3,
            all: 3,
            some: 3,
            any: 3,
            include: 2,
            contains: 2,
            invoke: 0,
            max: 3,
            min: 3,
            toArray: 1,
            size: 1,
            first: 3,
            head: 3,
            take: 3,
            initial: 3,
            rest: 3,
            tail: 3,
            drop: 3,
            last: 3,
            without: 0,
            difference: 0,
            indexOf: 3,
            shuffle: 1,
            lastIndexOf: 3,
            isEmpty: 1,
            chain: 1,
            sample: 3,
            partition: 3
        };
        a(_, x, "models");
        var T = ["groupBy", "countBy", "sortBy", "indexBy"];
        i.each(T, function(t) {
            i[t] && (_.prototype[t] = function(e, n) {
                var r = i.isFunction(e) ? e : function(t) {
                    return t.get(e)
                };
                return i[t](this.models, r, n)
            })
        });
        var k = e.View = function(t) {
                this.cid = i.uniqueId("view"), i.extend(this, i.pick(t, C)), this._ensureElement(), this.initialize.apply(this, arguments)
            },
            S = /^(\S+)\s*(.*)$/,
            C = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        i.extend(k.prototype, l, {
            tagName: "div",
            $: function(t) {
                return this.$el.find(t)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this._removeElement(), this.stopListening(), this
            },
            _removeElement: function() {
                this.$el.remove()
            },
            setElement: function(t) {
                return this.undelegateEvents(), this._setElement(t), this.delegateEvents(), this
            },
            _setElement: function(t) {
                this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0]
            },
            delegateEvents: function(t) {
                if (t || (t = i.result(this, "events")), !t) return this;
                this.undelegateEvents();
                for (var e in t) {
                    var n = t[e];
                    if (i.isFunction(n) || (n = this[n]), n) {
                        var r = e.match(S);
                        this.delegate(r[1], r[2], i.bind(n, this))
                    }
                }
                return this
            },
            delegate: function(t, e, i) {
                return this.$el.on(t + ".delegateEvents" + this.cid, e, i), this
            },
            undelegateEvents: function() {
                return this.$el && this.$el.off(".delegateEvents" + this.cid), this
            },
            undelegate: function(t, e, i) {
                return this.$el.off(t + ".delegateEvents" + this.cid, e, i), this
            },
            _createElement: function(t) {
                return document.createElement(t)
            },
            _ensureElement: function() {
                if (this.el) this.setElement(i.result(this, "el"));
                else {
                    var t = i.extend({}, i.result(this, "attributes"));
                    this.id && (t.id = i.result(this, "id")), this.className && (t["class"] = i.result(this, "className")), this.setElement(this._createElement(i.result(this, "tagName"))), this._setAttributes(t)
                }
            },
            _setAttributes: function(t) {
                this.$el.attr(t)
            }
        }), e.sync = function(t, n, r) {
            var s = P[t];
            i.defaults(r || (r = {}), {
                emulateHTTP: e.emulateHTTP,
                emulateJSON: e.emulateJSON
            });
            var o = {
                type: s,
                dataType: "json"
            };
            if (r.url || (o.url = i.result(n, "url") || L()), null != r.data || !n || "create" !== t && "update" !== t && "patch" !== t || (o.contentType = "application/json", o.data = JSON.stringify(r.attrs || n.toJSON(r))), r.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
                    model: o.data
                } : {}), r.emulateHTTP && ("PUT" === s || "DELETE" === s || "PATCH" === s)) {
                o.type = "POST", r.emulateJSON && (o.data._method = s);
                var a = r.beforeSend;
                r.beforeSend = function(t) {
                    return t.setRequestHeader("X-HTTP-Method-Override", s), a ? a.apply(this, arguments) : void 0
                }
            }
            "GET" === o.type || r.emulateJSON || (o.processData = !1);
            var l = r.error;
            r.error = function(t, e, i) {
                r.textStatus = e, r.errorThrown = i, l && l.call(r.context, t, e, i)
            };
            var u = r.xhr = e.ajax(i.extend(o, r));
            return n.trigger("request", n, u, r), u
        };
        var P = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
        e.ajax = function() {
            return e.$.ajax.apply(e.$, arguments)
        };
        var $ = e.Router = function(t) {
                t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            A = /\((.*?)\)/g,
            O = /(\(\?)?:\w+/g,
            E = /\*\w+/g,
            D = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        i.extend($.prototype, l, {
            initialize: function() {},
            route: function(t, n, r) {
                i.isRegExp(t) || (t = this._routeToRegExp(t)), i.isFunction(n) && (r = n, n = ""), r || (r = this[n]);
                var s = this;
                return e.history.route(t, function(i) {
                    var o = s._extractParameters(t, i);
                    s.execute(r, o, n) !== !1 && (s.trigger.apply(s, ["route:" + n].concat(o)), s.trigger("route", n, o), e.history.trigger("route", s, n, o))
                }), this
            },
            execute: function(t, e, i) {
                t && t.apply(this, e)
            },
            navigate: function(t, i) {
                return e.history.navigate(t, i), this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = i.result(this, "routes");
                    for (var t, e = i.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
                }
            },
            _routeToRegExp: function(t) {
                return t = t.replace(D, "\\$&").replace(A, "(?:$1)?").replace(O, function(t, e) {
                    return e ? t : "([^/?]+)"
                }).replace(E, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(t, e) {
                var n = t.exec(e).slice(1);
                return i.map(n, function(t, e) {
                    return e === n.length - 1 ? t || null : t ? decodeURIComponent(t) : null
                })
            }
        });
        var N = e.History = function() {
                this.handlers = [], i.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            R = /^[#\/]|\s+$/g,
            M = /^\/+|\/+$/g,
            j = /#.*$/;
        N.started = !1, i.extend(N.prototype, l, {
            interval: 50,
            atRoot: function() {
                var t = this.location.pathname.replace(/[^\/]$/, "$&/");
                return t === this.root && !this.getSearch()
            },
            matchRoot: function() {
                var t = this.decodeFragment(this.location.pathname),
                    e = t.slice(0, this.root.length - 1) + "/";
                return e === this.root
            },
            decodeFragment: function(t) {
                return decodeURI(t.replace(/%25/g, "%2525"))
            },
            getSearch: function() {
                var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
                return t ? t[0] : ""
            },
            getHash: function(t) {
                var e = (t || this).location.href.match(/#(.*)$/);
                return e ? e[1] : ""
            },
            getPath: function() {
                var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                return "/" === t.charAt(0) ? t.slice(1) : t
            },
            getFragment: function(t) {
                return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), t.replace(R, "")
            },
            start: function(t) {
                if (N.started) throw new Error("Backbone.history has already been started");
                if (N.started = !0, this.options = i.extend({
                        root: "/"
                    }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window, this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(M, "/"), this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) {
                        var e = this.root.slice(0, -1) || "/";
                        return this.location.replace(e + "#" + this.getPath()), !0
                    }
                    this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                        replace: !0
                    })
                }
                if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                    this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                    var n = document.body,
                        r = n.insertBefore(this.iframe, n.firstChild).contentWindow;
                    r.document.open(), r.document.close(), r.location.hash = "#" + this.fragment
                }
                var s = window.addEventListener || function(t, e) {
                    return attachEvent("on" + t, e)
                };
                return this._usePushState ? s("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? s("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.options.silent ? void 0 : this.loadUrl()
            },
            stop: function() {
                var t = window.removeEventListener || function(t, e) {
                    return detachEvent("on" + t, e)
                };
                this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), N.started = !1
            },
            route: function(t, e) {
                this.handlers.unshift({
                    route: t,
                    callback: e
                })
            },
            checkUrl: function(t) {
                var e = this.getFragment();
                return e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)), e === this.fragment ? !1 : (this.iframe && this.navigate(e), void this.loadUrl())
            },
            loadUrl: function(t) {
                return this.matchRoot() ? (t = this.fragment = this.getFragment(t), i.any(this.handlers, function(e) {
                    return e.route.test(t) ? (e.callback(t), !0) : void 0
                })) : !1
            },
            navigate: function(t, e) {
                if (!N.started) return !1;
                e && e !== !0 || (e = {
                    trigger: !!e
                }), t = this.getFragment(t || "");
                var i = this.root;
                ("" === t || "?" === t.charAt(0)) && (i = i.slice(0, -1) || "/");
                var n = i + t;
                if (t = this.decodeFragment(t.replace(j, "")), this.fragment !== t) {
                    if (this.fragment = t, this._usePushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(n);
                        if (this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
                            var r = this.iframe.contentWindow;
                            e.replace || (r.document.open(), r.document.close()), this._updateHash(r.location, t, e.replace)
                        }
                    }
                    return e.trigger ? this.loadUrl(t) : void 0
                }
            },
            _updateHash: function(t, e, i) {
                if (i) {
                    var n = t.href.replace(/(javascript:|#).*$/, "");
                    t.replace(n + "#" + e)
                } else t.hash = "#" + e
            }
        }), e.history = new N;
        var I = function(t, e) {
            var n, r = this;
            n = t && i.has(t, "constructor") ? t.constructor : function() {
                return r.apply(this, arguments)
            }, i.extend(n, r, e);
            var s = function() {
                this.constructor = n
            };
            return s.prototype = r.prototype, n.prototype = new s, t && i.extend(n.prototype, t), n.__super__ = r.prototype, n
        };
        v.extend = _.extend = $.extend = k.extend = N.extend = I;
        var L = function() {
                throw new Error('A "url" property or function must be specified')
            },
            F = function(t, e) {
                var i = e.error;
                e.error = function(n) {
                    i && i.call(e.context, t, n, e), t.trigger("error", t, n, e)
                }
            };
        return e
    });
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
if ((_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    s = 1e-10,
                    o = i._internals,
                    a = o.isSelector,
                    l = o.isArray,
                    u = r.prototype = i.to({}, .1, {}),
                    c = [];
                r.version = "1.17.0", u.constructor = r, u.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, u.updateTo = function(t, e) {
                    var n, r = this.ratio,
                        s = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || s)
                        if (e) this._initted = !1, s && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var o = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                    } else if (this._time > 0 || s) {
                        this._initted = !1, this._init();
                        for (var a, l = 1 / (1 - r), u = this._firstPT; u;) a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next
                    }
                    return this
                }, u.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, r, a, l, u, c, h, d, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        m = this._totalTime,
                        g = this._cycle,
                        v = this._duration,
                        y = this._rawPrevTime;
                    if (t >= p ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === s) && y !== t && (i = !0, y > s && (r = "onReverseComplete")), this._rawPrevTime = d = !e || t || y === t ? t : s)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === v && y > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = d = !e || t || y === t ? t : s)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = v + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType ? (u = this._time / v, c = this._easeType, h = this._easePower, (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : this._time / v < .5 ? u / 2 : 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / v)), f === this._time && !i && g === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = f, this._totalTime = m, this._rawPrevTime = y, this._cycle = g, o.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== f && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || n) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === v && this._rawPrevTime === s && d !== s && (this._rawPrevTime = 0))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(t, e, n)
                }, r.staggerTo = r.allTo = function(t, e, s, o, u, h, d) {
                    o = o || 0;
                    var p, f, m, g, v = s.delay || 0,
                        y = [],
                        _ = function() {
                            s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), u.apply(d || s.callbackScope || this, h || c)
                        };
                    for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], 0 > o && (t = n(t), t.reverse(), o *= -1), p = t.length - 1, m = 0; p >= m; m++) {
                        f = {};
                        for (g in s) f[g] = s[g];
                        f.delay = v, m === p && u && (f.onComplete = _), y[m] = new r(t[m], e, f), v += o
                    }
                    return y
                }, r.staggerFrom = r.allFrom = function(t, e, i, n, s, o, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender,
                        r.staggerTo(t, e, i, n, s, o, a)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, n, s, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, n, s, o, a, l)
                }, r.delayedCall = function(t, e, i, n, s) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: s,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var h = function(t, e) {
                        for (var n = [], r = 0, s = t._first; s;) s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(h(s, e)), r = n.length), s = s._next;
                        return n
                    },
                    d = r.getAllTweens = function(e) {
                        return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var s, o, a, l = d(0 != r),
                        u = l.length,
                        c = i && n && r;
                    for (a = 0; u > a; a++) o = l[a], (c || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var s, u, c, h, d, p = o.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t))
                            for (h = t.length; --h > -1;) r.killChildTweensOf(t[h], e);
                        else {
                            s = [];
                            for (c in p)
                                for (u = p[c].target.parentNode; u;) u === t && (s = s.concat(p[c].tweens)), u = u.parentNode;
                            for (d = s.length, h = 0; d > h; h++) e && s[h].totalTime(s[h].totalDuration()), s[h]._enabled(!1, !1)
                        }
                    }
                };
                var p = function(t, i, n, r) {
                    i = i !== !1, n = n !== !1, r = r !== !1;
                    for (var s, o, a = d(r), l = i && n && r, u = a.length; --u > -1;) o = a[u], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    p(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    p(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || s, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, u.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, u.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, u.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, u.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, u.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, u.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    s = i._internals,
                    o = n._internals = {},
                    a = s.isSelector,
                    l = s.isArray,
                    u = s.lazyTweens,
                    c = s.lazyRender,
                    h = [],
                    d = _gsScope._gsDefine.globals,
                    p = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    f = o.pauseCallback = function(t, e, i, n) {
                        var s, o = t._timeline,
                            a = o._totalTime,
                            l = t._startTime,
                            u = t._rawPrevTime < 0 || 0 === t._rawPrevTime && o._reversed,
                            c = u ? 0 : r,
                            d = u ? r : 0;
                        if (e || !this._forcingPlayhead) {
                            for (o.pause(l), s = t._prev; s && s._startTime === l;) s._rawPrevTime = d, s = s._prev;
                            for (s = t._next; s && s._startTime === l;) s._rawPrevTime = c, s = s._next;
                            e && e.apply(n || o.vars.callbackScope || o, i || h), (this._forcingPlayhead || !o._paused) && o.seek(a)
                        }
                    },
                    m = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    g = n.prototype = new e;
                return n.version = "1.17.0", g.constructor = n, g.kill()._gc = g._forcingPlayhead = !1, g.to = function(t, e, n, r) {
                    var s = n.repeat && d.TweenMax || i;
                    return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
                }, g.from = function(t, e, n, r) {
                    return this.add((n.repeat && d.TweenMax || i).from(t, e, n), r)
                }, g.fromTo = function(t, e, n, r, s) {
                    var o = r.repeat && d.TweenMax || i;
                    return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
                }, g.staggerTo = function(t, e, r, s, o, l, u, c) {
                    var h, d = new n({
                        onComplete: l,
                        onCompleteParams: u,
                        callbackScope: c,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), s = s || 0, 0 > s && (t = m(t), t.reverse(), s *= -1), h = 0; h < t.length; h++) r.startAt && (r.startAt = p(r.startAt)), d.to(t[h], e, p(r), h * s);
                    return this.add(d, o)
                }, g.staggerFrom = function(t, e, i, n, r, s, o, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
                }, g.staggerFromTo = function(t, e, i, n, r, s, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
                }, g.call = function(t, e, n, r) {
                    return this.add(i.delayedCall(0, t, e, n), r)
                }, g.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, s, o = new n(t),
                        a = o._timeline;
                    for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r;) s = r._next, e && r instanceof i && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), r = s;
                    return a.add(o, 0), o
                }, g.add = function(r, s, o, a) {
                    var u, c, h, d, p, f;
                    if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (o = o || "normal", a = a || 0, u = s, c = r.length, h = 0; c > h; h++) l(d = r[h]) && (d = new n({
                                tweens: d
                            })), this.add(d, u), "string" != typeof d && "function" != typeof d && ("sequence" === o ? u = d._startTime + d.totalDuration() / d._timeScale : "start" === o && (d._startTime -= d.delay())), u += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, s);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = this, f = p.rawTime() > r._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                    return this
                }, g.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, g._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var n = this._last;
                    return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, g.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, g.insert = g.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, g.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, g.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, g.addPause = function(t, e, n, r) {
                    var s = i.delayedCall(0, f, ["{self}", e, n, r], this);
                    return s.data = "isPause", this.add(s, t)
                }, g.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, g.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, g._parseTimeOrLabel = function(e, i, n, r) {
                    var s;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (s = r.length; --s > -1;) r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (s = e.indexOf("="), -1 === s) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
                    }
                    return Number(e) + i
                }, g.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, g.stop = function() {
                    return this.paused(!0)
                }, g.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, g.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, g.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, o, a, l, h = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        p = this._startTime,
                        f = this._timeScale,
                        m = this._paused;
                    if (t >= h) this._totalTime = this._time = h, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = h + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        }
                    else this._totalTime = this._time = this._rawPrevTime = t;
                    if (this._time !== d && this._first || i || l) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= d)
                            for (n = this._first; n && (o = n._next, !this._paused || m);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                        else
                            for (n = this._last; n && (o = n._prev, !this._paused || m);)(n._active || n._startTime <= d && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                        this._onUpdate && (e || (u.length && c(), this._callback("onUpdate"))), a && (this._gc || (p === this._startTime || f !== this._timeScale) && (0 === this._time || h >= this.totalDuration()) && (s && (u.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                    }
                }, g._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, g.getChildren = function(t, e, n, r) {
                    r = r || -9999999999;
                    for (var s = [], o = this._first, a = 0; o;) o._startTime < r || (o instanceof i ? e !== !1 && (s[a++] = o) : (n !== !1 && (s[a++] = o), t !== !1 && (s = s.concat(o.getChildren(!0, e, n)), a = s.length))), o = o._next;
                    return s
                }, g.getTweensOf = function(t, e) {
                    var n, r, s = this._gc,
                        o = [],
                        a = 0;
                    for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
                    return s && this._enabled(!1, !0), o
                }, g.recent = function() {
                    return this._recent
                }, g._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, g.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (n in s) s[n] >= i && (s[n] += t);
                    return this._uncache(!0)
                }, g._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                    return r
                }, g.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, g.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, g._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, g.totalTime = function(e, i, n) {
                    this._forcingPlayhead = !0;
                    var r = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, g.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, g.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, g.paused = function(e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, g.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, g.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    s = e._internals,
                    o = s.lazyTweens,
                    a = s.lazyRender,
                    l = new i(null, null, 1, 0),
                    u = n.prototype = new t;
                return u.constructor = n, u.kill()._gc = !1, n.version = "1.17.0", u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, u.addCallback = function(t, i, n, r) {
                    return this.add(e.delayedCall(0, t, n, r), i)
                }, u.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                    return this
                }, u.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, u.tweenTo = function(t, i) {
                    i = i || {};
                    var n, r, s, o = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) o[r] = i[r];
                    return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new e(this, n, o), o.onStart = function() {
                        s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && s._callback("onStart")
                    }, s
                }, u.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, u.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, l, u, c, h, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._duration,
                        f = this._time,
                        m = this._totalTime,
                        g = this._startTime,
                        v = this._timeScale,
                        y = this._rawPrevTime,
                        _ = this._paused,
                        b = this._cycle;
                    if (t >= d) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, u = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (c = !0, y > r && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = p, t = p + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== f || 0 === p && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (u = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = s = !0, u = "onReverseComplete") : y >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = p || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (c = !0)
                        }
                    else 0 === p && 0 > y && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (h = p + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, t = p + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time));
                    if (this._cycle !== b && !this._locked) {
                        var w = this._yoyo && 0 !== (1 & b),
                            x = w === (this._yoyo && 0 !== (1 & this._cycle)),
                            T = this._totalTime,
                            k = this._cycle,
                            S = this._rawPrevTime,
                            C = this._time;
                        if (this._totalTime = b * p, this._cycle < b ? w = !w : this._totalTime += p, this._time = f, this._rawPrevTime = 0 === p ? y - 1e-4 : y, this._cycle = b, this._locked = !0, f = w ? 0 : p, this.render(f, e, 0 === p), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), x && (f = w ? p + 1e-4 : -1e-4, this.render(f, !0, !1)), this._locked = !1, this._paused && !_) return;
                        this._time = C, this._totalTime = T, this._cycle = k, this._rawPrevTime = S
                    }
                    if (!(this._time !== f && this._first || i || c)) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), this._time >= f)
                        for (n = this._first; n && (l = n._next, !this._paused || _);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                    else
                        for (n = this._last; n && (l = n._prev, !this._paused || _);)(n._active || n._startTime <= f && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                    this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), u && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (s && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this._callback(u)))
                }, u.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, r, s = [],
                        o = this.getChildren(t, e, i),
                        a = 0,
                        l = o.length;
                    for (n = 0; l > n; n++) r = o[n], r.isActive() && (s[a++] = r);
                    return s
                }, u.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, u.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, u.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, u.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, u.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, u.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, u.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, u.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, u.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    r = {},
                    s = _gsScope._gsDefine.globals,
                    o = function(t, e, i, n) {
                        this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(t, e, i, n) {
                        var r = {
                                a: t
                            },
                            s = {},
                            o = {},
                            a = {
                                c: n
                            },
                            l = (t + e) / 2,
                            u = (e + i) / 2,
                            c = (i + n) / 2,
                            h = (l + u) / 2,
                            d = (u + c) / 2,
                            p = (d - h) / 8;
                        return r.b = l + (t - l) / 4, s.b = h + p, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (h + d) / 2, o.b = d - p, a.b = c + (n - c) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
                    },
                    u = function(t, r, s, o, a) {
                        var u, c, h, d, p, f, m, g, v, y, _, b, w, x = t.length - 1,
                            T = 0,
                            k = t[0].a;
                        for (u = 0; x > u; u++) p = t[T], c = p.a, h = p.d, d = t[T + 1].d, a ? (_ = e[u], b = i[u], w = (b + _) * r * .25 / (o ? .5 : n[u] || .5), f = h - (h - c) * (o ? .5 * r : 0 !== _ ? w / _ : 0), m = h + (d - h) * (o ? .5 * r : 0 !== b ? w / b : 0), g = h - (f + ((m - f) * (3 * _ / (_ + b) + .5) / 4 || 0))) : (f = h - (h - c) * r * .5, m = h + (d - h) * r * .5, g = h - (f + m) / 2), f += g, m += g, p.c = v = f, p.b = 0 !== u ? k : k = p.a + .6 * (p.c - p.a), p.da = h - c, p.ca = v - c, p.ba = k - c, s ? (y = l(c, k, v, h), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, k = m;
                        p = t[T], p.b = k, p.c = k + .4 * (p.d - k), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = k - p.a, s && (y = l(p.a, k, p.c, p.d), t.splice(T, 1, y[0], y[1], y[2], y[3]))
                    },
                    c = function(t, n, r, s) {
                        var a, l, u, c, h, d, p = [];
                        if (s)
                            for (t = [s].concat(t), l = t.length; --l > -1;) "string" == typeof(d = t[l][n]) && "=" === d.charAt(1) && (t[l][n] = s[n] + Number(d.charAt(0) + d.substr(2)));
                        if (a = t.length - 2, 0 > a) return p[0] = new o(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), p;
                        for (l = 0; a > l; l++) u = t[l][n], c = t[l + 1][n], p[l] = new o(u, 0, 0, c), r && (h = t[l + 2][n], e[l] = (e[l] || 0) + (c - u) * (c - u), i[l] = (i[l] || 0) + (h - c) * (h - c));
                        return p[l] = new o(t[l][n], 0, 0, t[l + 1][n]), p
                    },
                    h = function(t, s, o, l, h, d) {
                        var p, f, m, g, v, y, _, b, w = {},
                            x = [],
                            T = d || t[0];
                        h = "string" == typeof h ? "," + h + "," : a, null == s && (s = 1);
                        for (f in t[0]) x.push(f);
                        if (t.length > 1) {
                            for (b = t[t.length - 1], _ = !0, p = x.length; --p > -1;)
                                if (f = x[p], Math.abs(T[f] - b[f]) > .05) {
                                    _ = !1;
                                    break
                                }
                            _ && (t = t.concat(), d && t.unshift(d), t.push(t[1]), d = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, p = x.length; --p > -1;) f = x[p], r[f] = -1 !== h.indexOf("," + f + ","), w[f] = c(t, f, r[f], d);
                        for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
                        if (!l) {
                            for (p = x.length; --p > -1;)
                                if (r[f])
                                    for (m = w[x[p]], y = m.length - 1, g = 0; y > g; g++) v = m[g + 1].da / i[g] + m[g].da / e[g], n[g] = (n[g] || 0) + v * v;
                            for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                        }
                        for (p = x.length, g = o ? 4 : 1; --p > -1;) f = x[p], m = w[f], u(m, s, o, l, r[f]), _ && (m.splice(0, g), m.splice(m.length - g, g));
                        return w
                    },
                    d = function(t, e, i) {
                        e = e || "soft";
                        var n, r, s, a, l, u, c, h, d, p, f, m = {},
                            g = "cubic" === e ? 3 : 2,
                            v = "soft" === e,
                            y = [];
                        if (v && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
                        for (d in t[0]) y.push(d);
                        for (u = y.length; --u > -1;) {
                            for (d = y[u], m[d] = l = [], p = 0, h = t.length, c = 0; h > c; c++) n = null == i ? t[c][d] : "string" == typeof(f = t[c][d]) && "=" === f.charAt(1) ? i[d] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && c > 1 && h - 1 > c && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                            for (h = p - g + 1, p = 0, c = 0; h > c; c += g) n = l[c], r = l[c + 1], s = l[c + 2], a = 2 === g ? 0 : l[c + 3], l[p++] = f = 3 === g ? new o(n, r, s, a) : new o(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                            l.length = p
                        }
                        return m
                    },
                    p = function(t, e, i) {
                        for (var n, r, s, o, a, l, u, c, h, d, p, f = 1 / i, m = t.length; --m > -1;)
                            for (d = t[m], s = d.a, o = d.d - s, a = d.c - s, l = d.b - s, n = r = 0, c = 1; i >= c; c++) u = f * c, h = 1 - u, n = r - (r = (u * u * o + 3 * h * (u * a + h * l)) * u), p = m * i + c - 1, e[p] = (e[p] || 0) + n * n
                    },
                    f = function(t, e) {
                        e = e >> 0 || 6;
                        var i, n, r, s, o = [],
                            a = [],
                            l = 0,
                            u = 0,
                            c = e - 1,
                            h = [],
                            d = [];
                        for (i in t) p(t[i], o, e);
                        for (r = o.length, n = 0; r > n; n++) l += Math.sqrt(o[n]), s = n % e, d[s] = l, s === c && (u += l, s = n / e >> 0, h[s] = d, a[s] = u, l = 0, d = []);
                        return {
                            length: u,
                            lengths: a,
                            segments: h
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, r, s, o, a, l = e.values || [],
                                u = {},
                                c = l[0],
                                p = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = p ? p instanceof Array ? p : [
                                ["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]
                            ] : null;
                            for (n in c) this._props.push(n);
                            for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || u[n] !== l[0][n] && (a = u);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : d(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                                var m = f(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (p = this._autoRotate)
                                for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), s = p.length; --s > -1;) {
                                    for (o = 0; 3 > o; o++) n = p[s][o], this._func[n] = "function" == typeof t[n] ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                                    n = p[s][2], this._initialRotations[s] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, n, r, s, o, a, l, u, c, h, d = this._segCount,
                                p = this._func,
                                f = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (c = this._lengths, h = this._curSeg, e *= this._length, r = this._li, e > this._l2 && d - 1 > r) {
                                    for (u = d - 1; u > r && (this._l2 = c[++r]) <= e;);
                                    this._l1 = c[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
                                } else if (e < this._l1 && r > 0) {
                                    for (; r > 0 && (this._l1 = c[--r]) >= e;);
                                    0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < h.length - 1) {
                                    for (u = h.length - 1; u > r && (this._s2 = h[++r]) <= e;);
                                    this._s1 = h[r - 1], this._si = r
                                } else if (e < this._s1 && r > 0) {
                                    for (; r > 0 && (this._s1 = h[--r]) >= e;);
                                    0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
                                }
                                a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? d - 1 : d * e >> 0, a = (e - i * (1 / d)) * d;
                            for (n = 1 - a, r = this._props.length; --r > -1;) s = this._props[r], o = this._beziers[s][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._round[s] && (l = Math.round(l)), p[s] ? f[s](l) : f[s] = l;
                            if (this._autoRotate) {
                                var g, v, y, _, b, w, x, T = this._autoRotate;
                                for (r = T.length; --r > -1;) s = T[r][2], w = T[r][3] || 0, x = T[r][4] === !0 ? 1 : t, o = this._beziers[T[r][0]], g = this._beziers[T[r][1]], o && g && (o = o[i], g = g[i], v = o.a + (o.b - o.a) * a, _ = o.b + (o.c - o.b) * a, v += (_ - v) * a, _ += (o.c + (o.d - o.c) * a - _) * a, y = g.a + (g.b - g.a) * a, b = g.b + (g.c - g.b) * a, y += (b - y) * a, b += (g.c + (g.d - g.c) * a - b) * a, l = m ? Math.atan2(b - y, _ - v) * x + w : this._initialRotations[r], p[s] ? f[s](l) : f[s] = l)
                            }
                        }
                    }),
                    g = m.prototype;
                m.bezierThrough = h, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
                    return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, m._cssRegister = function() {
                    var t = s.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, s, o, a, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new m;
                                var u, c, h, d = e.values,
                                    p = d.length - 1,
                                    f = [],
                                    g = {};
                                if (0 > p) return a;
                                for (u = 0; p >= u; u++) h = i(t, d[u], o, a, l, p !== u), f[u] = h.end;
                                for (c in e) g[c] = e[c];
                                return g.values = f, a = new r(t, "bezier", 0, 0, h.pt, 2), a.data = h, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (u = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != h.end.left ? [
                                    ["left", "top", "rotation", u, !1]
                                ] : null != h.end.x ? [
                                    ["x", "y", "rotation", u, !1]
                                ] : !1), g.autoRotate && (o._transform || o._enableTransforms(!1), h.autoRotate = o._target._gsTransform), l._onInitTween(h.proxy, g, o._tween), a
                            }
                        })
                    }
                }, g._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
                }, g._kill = function(t) {
                    var e, i, n = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, r, s, o = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    u = o.prototype = new t("css");
                u.constructor = o, o.version = "1.17.0", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, u = "px", o.suffixMap = {
                    top: u,
                    right: u,
                    bottom: u,
                    left: u,
                    width: u,
                    height: u,
                    fontSize: u,
                    padding: u,
                    margin: u,
                    perspective: u,
                    lineHeight: ""
                };
                var c, h, d, p, f, m, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    _ = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    b = /(?:\d|\-|\+|=|#|\.)*/g,
                    w = /opacity *= *([^)]*)/i,
                    x = /opacity:([^;]*)/i,
                    T = /alpha\(opacity *=.+?\)/i,
                    k = /^(rgb|hsl)/,
                    S = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    $ = function(t, e) {
                        return e.toUpperCase()
                    },
                    A = /(?:Left|Right|Width)/i,
                    O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    D = /,(?=[^\)]*(?:\(|$))/gi,
                    N = Math.PI / 180,
                    R = 180 / Math.PI,
                    M = {},
                    j = document,
                    I = function(t) {
                        return j.createElementNS ? j.createElementNS("http://www.w3.org/1999/xhtml", t) : j.createElement(t)
                    },
                    L = I("div"),
                    F = I("img"),
                    H = o._internals = {
                        _specialProps: l
                    },
                    z = navigator.userAgent,
                    q = function() {
                        var t = z.indexOf("Android"),
                            e = I("a");
                        return d = -1 !== z.indexOf("Safari") && -1 === z.indexOf("Chrome") && (-1 === t || Number(z.substr(t + 8, 1)) > 3), f = d && Number(z.substr(z.indexOf("Version/") + 8, 1)) < 6, p = -1 !== z.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(z)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                    }(),
                    B = function(t) {
                        return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    W = function(t) {
                        window.console && console.log(t)
                    },
                    U = "",
                    X = "",
                    Y = function(t, e) {
                        e = e || L;
                        var i, n, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                        return n >= 0 ? (X = 3 === n ? "ms" : i[n], U = "-" + X.toLowerCase() + "-", X + t) : null
                    },
                    V = j.defaultView ? j.defaultView.getComputedStyle : function() {},
                    Q = o.getStyle = function(t, e, i, n, r) {
                        var s;
                        return q || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || V(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : B(t)
                    },
                    G = H.convertToPixels = function(t, i, n, r, s) {
                        if ("px" === r || !r) return n;
                        if ("auto" === r || !n) return 0;
                        var a, l, u, c = A.test(i),
                            h = t,
                            d = L.style,
                            p = 0 > n;
                        if (p && (n = -n), "%" === r && -1 !== i.indexOf("border")) a = n / 100 * (c ? t.clientWidth : t.clientHeight);
                        else {
                            if (d.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && h.appendChild) d[c ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                            else {
                                if (h = t.parentNode || j.body, l = h._gsCache, u = e.ticker.frame, l && c && l.time === u) return l.width * n / 100;
                                d[c ? "width" : "height"] = n + r
                            }
                            h.appendChild(L), a = parseFloat(L[c ? "offsetWidth" : "offsetHeight"]), h.removeChild(L), c && "%" === r && o.cacheWidths !== !1 && (l = h._gsCache = h._gsCache || {}, l.time = u, l.width = a / n * 100), 0 !== a || s || (a = G(t, i, n, r, !0))
                        }
                        return p ? -a : a
                    },
                    Z = H.calculateOffset = function(t, e, i) {
                        if ("absolute" !== Q(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = Q(t, "margin" + n, i);
                        return t["offset" + n] - (G(t, e, parseFloat(r), r.replace(b, "")) || 0)
                    },
                    J = function(t, e) {
                        var i, n, r, s = {};
                        if (e = e || V(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || kt === r) && (s[r.replace(C, $)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || Tt === i) && (s[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(C, $)] = e[i]);
                        return q || (s.opacity = B(t)), n = jt(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Ct && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                    },
                    K = function(t, e, i, n, r) {
                        var s, o, a, l = {},
                            u = t.style;
                        for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(_, "") ? s : 0 : Z(t, o), void 0 !== u[o] && (a = new pt(u, o, u[o], a)));
                        if (n)
                            for (o in n) "className" !== o && (l[o] = n[o]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    tt = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    it = function(t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = tt[e],
                            s = r.length;
                        for (i = i || V(t, null); --s > -1;) n -= parseFloat(Q(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(Q(t, "border" + r[s] + "Width", i, !0)) || 0;
                        return n
                    },
                    nt = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(_, "")), e.oy = parseFloat(r.replace(_, "")), e.v = t), e || t
                    },
                    rt = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    st = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    ot = function(t, e, i, n) {
                        var r, s, o, a, l, u = 1e-6;
                        return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : R) - (l ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= r, o !== o % (r / 2) && (o = 0 > o ? o + r : o - r)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * r) % r - (o / r | 0) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)), a = e + o), u > a && a > -u && (a = 0), a
                    },
                    at = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    lt = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    ut = o.parseColor = function(t) {
                        var e, i, n, r, s, o;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, t >> 8 & 255, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), at[t] ? at[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, t >> 8 & 255, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(g), r = Number(t[0]) % 360 / 360, s = Number(t[1]) / 100, o = Number(t[2]) / 100, i = .5 >= o ? o * (s + 1) : o + s - o * s, e = 2 * o - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = lt(r + 1 / 3, e, i), t[1] = lt(r, e, i), t[2] = lt(r - 1 / 3, e, i), t) : (t = t.match(g) || at.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : at.black
                    },
                    ct = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (u in at) ct += "|" + u + "\\b";
                ct = new RegExp(ct + ")", "gi");
                var ht = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, s = e ? (t.match(ct) || [""])[0] : "",
                            o = t.split(s).join("").match(y) || [],
                            a = t.substr(0, t.indexOf(o[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            u = -1 !== t.indexOf(" ") ? " " : ",",
                            c = o.length,
                            h = c > 0 ? o[0].replace(g, "") : "";
                        return c ? r = e ? function(t) {
                            var e, d, p, f;
                            if ("number" == typeof t) t += h;
                            else if (n && D.test(t)) {
                                for (f = t.replace(D, "|").split("|"), p = 0; p < f.length; p++) f[p] = r(f[p]);
                                return f.join(",")
                            }
                            if (e = (t.match(ct) || [s])[0], d = t.split(e).join("").match(y) || [], p = d.length, c > p--)
                                for (; ++p < c;) d[p] = i ? d[(p - 1) / 2 | 0] : o[p];
                            return a + d.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, s, d;
                            if ("number" == typeof t) t += h;
                            else if (n && D.test(t)) {
                                for (s = t.replace(D, "|").split("|"), d = 0; d < s.length; d++) s[d] = r(s[d]);
                                return s.join(",")
                            }
                            if (e = t.match(y) || [], d = e.length, c > d--)
                                for (; ++d < c;) e[d] = i ? e[(d - 1) / 2 | 0] : o[d];
                            return a + e.join(u) + l
                        } : function(t) {
                            return t
                        }
                    },
                    dt = function(t) {
                        return t = t.split(","),
                            function(e, i, n, r, s, o, a) {
                                var l, u = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                                return r.parse(e, a, s, o)
                            }
                    },
                    pt = (H._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, s = this.data, o = s.proxy, a = s.firstMPT, l = 1e-6; a;) e = o[a.v], a.r ? e = Math.round(e) : l > e && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
                        if (s.autoRotate && (s.autoRotate.rotation = o.rotation), 1 === t)
                            for (a = s.firstMPT; a;) {
                                if (i = a.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                a = a._next
                            }
                    }, function(t, e, i, n, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                    }),
                    ft = (H._parseToProxy = function(t, e, i, n, r, s) {
                        var o, a, l, u, c, h = n,
                            d = {},
                            p = {},
                            f = i._transform,
                            m = M;
                        for (i._transform = null, M = e, n = c = i.parse(t, e, n, r), M = m, s && (i._transform = f, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
                            if (n.type <= 1 && (a = n.p, p[a] = n.s + n.c, d[a] = n.s, s || (u = new pt(n, "s", a, u, n.r), n.c = 0), 1 === n.type))
                                for (o = n.l; --o > 0;) l = "xn" + o, a = n.p + "_" + l, p[a] = n.data[l], d[a] = n[l], s || (u = new pt(n, l, a, u, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: d,
                            end: p,
                            firstMPT: u,
                            pt: c
                        }
                    }, H.CSSPropTween = function(t, e, n, r, o, a, l, u, c, h, d) {
                        this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof ft || s.push(this.n), this.r = u, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === h ? n : h, this.e = void 0 === d ? n + r : d, o && (this._next = o, o._prev = this)
                    }),
                    mt = function(t, e, i, n, r, s) {
                        var o = new ft(t, e, i, n - i, r, -1, s);
                        return o.b = i, o.e = o.xs0 = n, o
                    },
                    gt = o.parseComplex = function(t, e, i, n, r, s, o, a, l, u) {
                        i = i || s || "", o = new ft(t, e, 0, 0, o, u ? 2 : 1, null, !1, a, i, n), n += "";
                        var h, d, p, f, m, y, _, b, w, x, T, S, C = i.split(", ").join(",").split(" "),
                            P = n.split(", ").join(",").split(" "),
                            $ = C.length,
                            A = c !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (C = C.join(" ").replace(D, ", ").split(" "), P = P.join(" ").replace(D, ", ").split(" "), $ = C.length), $ !== P.length && (C = (s || "").split(" "), $ = C.length), o.plugin = l, o.setRatio = u, h = 0; $ > h; h++)
                            if (f = C[h], m = P[h], b = parseFloat(f), b || 0 === b) o.appendXtra("", b, rt(m, b), m.replace(v, ""), A && -1 !== m.indexOf("px"), !0);
                            else if (r && ("#" === f.charAt(0) || at[f] || k.test(f))) S = "," === m.charAt(m.length - 1) ? ")," : ")", f = ut(f), m = ut(m), w = f.length + m.length > 6, w && !q && 0 === m[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(P[h]).join("transparent")) : (q || (w = !1), o.appendXtra(w ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0).appendXtra("", f[1], m[1] - f[1], ",", !0).appendXtra("", f[2], m[2] - f[2], w ? "," : S, !0), w && (f = f.length < 4 ? 1 : f[3], o.appendXtra("", f, (m.length < 4 ? 1 : m[3]) - f, S, !1)));
                        else if (y = f.match(g)) {
                            if (_ = m.match(v), !_ || _.length !== y.length) return o;
                            for (p = 0, d = 0; d < y.length; d++) T = y[d], x = f.indexOf(T, p), o.appendXtra(f.substr(p, x - p), Number(T), rt(_[d], T), "", A && "px" === f.substr(x + T.length, 2), 0 === d), p = x + T.length;
                            o["xs" + o.l] += f.substr(p)
                        } else o["xs" + o.l] += o.l ? " " + f : f;
                        if (-1 !== n.indexOf("=") && o.data) {
                            for (S = o.xs0 + o.data.s, h = 1; h < o.l; h++) S += o["xs" + h] + o.data["xn" + h];
                            o.e = S + o["xs" + h]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    },
                    vt = 9;
                for (u = ft.prototype, u.l = u.pr = 0; --vt > 0;) u["xn" + vt] = 0, u["xs" + vt] = "";
                u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(t, e, i, n, r, s) {
                    var o = this,
                        a = o.l;
                    return o["xs" + a] += s && a ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new ft(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                        s: e + i
                    }, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o)
                };
                var yt = function(t, e) {
                        e = e || {}, this.p = e.prefix ? Y(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ht(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    _t = H._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r, s = t.split(","),
                            o = e.defaultValue;
                        for (i = i || [o], n = 0; n < s.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, r = new yt(s[n], e)
                    },
                    bt = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            _t(t, {
                                parser: function(t, i, n, r, s, o, u) {
                                    var c = a.com.greensock.plugins[e];
                                    return c ? (c._cssRegister(), l[n].parse(t, i, n, r, s, o, u)) : (W("Error: " + e + " js file not loaded."), s)
                                }
                            })
                        }
                    };
                u = yt.prototype, u.parseComplex = function(t, e, i, n, r, s) {
                    var o, a, l, u, c, h, d = this.keyword;
                    if (this.multi && (D.test(i) || D.test(e) ? (a = e.replace(D, "|").split("|"), l = i.replace(D, "|").split("|")) : d && (a = [e], l = [i])), l) {
                        for (u = l.length > a.length ? l.length : a.length, o = 0; u > o; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, d && (c = e.indexOf(d), h = i.indexOf(d), c !== h && (-1 === h ? a[o] = a[o].split(d).join("") : -1 === c && (a[o] += " " + d)));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return gt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
                }, u.parse = function(t, e, i, n, s, o, a) {
                    return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), s, o)
                }, o.registerSpecialProp = function(t, e, i) {
                    _t(t, {
                        parser: function(t, n, r, s, o, a, l) {
                            var u = new ft(t, r, 0, 0, o, 2, r, !1, i);
                            return u.plugin = a, u.setRatio = e(t, n, s._tween, r), u
                        },
                        priority: i
                    })
                }, o.useSVGTransformAttr = d || p;
                var wt, xt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Tt = Y("transform"),
                    kt = U + "transform",
                    St = Y("transformOrigin"),
                    Ct = null !== Y("perspective"),
                    Pt = H.Transform = function() {
                        this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = o.defaultForce3D !== !1 && Ct ? o.defaultForce3D || "auto" : !1
                    },
                    $t = window.SVGElement,
                    At = function(t, e, i) {
                        var n, r = j.createElementNS("http://www.w3.org/2000/svg", t),
                            s = /([a-z])([A-Z])/g;
                        for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(r), r
                    },
                    Ot = j.documentElement,
                    Et = function() {
                        var t, e, i, n = m || /Android/i.test(z) && !window.chrome;
                        return j.createElementNS && !n && (t = At("svg", Ot), e = At("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[St] = "50% 50%", e.style[Tt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(p && Ct), Ot.removeChild(t)), n
                    }(),
                    Dt = function(t, e, i, n, r) {
                        var s, a, l, u, c, h, d, p, f, m, g, v, y, _, b = t._gsTransform,
                            w = Mt(t, !0);
                        b && (y = b.xOrigin, _ = b.yOrigin), (!n || (s = n.split(" ")).length < 2) && (d = t.getBBox(), e = nt(e).split(" "), s = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), i.xOrigin = u = parseFloat(s[0]), i.yOrigin = c = parseFloat(s[1]), n && w !== Rt && (h = w[0], d = w[1], p = w[2], f = w[3], m = w[4], g = w[5], v = h * f - d * p, a = u * (f / v) + c * (-p / v) + (p * g - f * m) / v, l = u * (-d / v) + c * (h / v) - (h * g - d * m) / v, u = i.xOrigin = s[0] = a, c = i.yOrigin = s[1] = l), b && (r || r !== !1 && o.defaultSmoothOrigin !== !1 ? (a = u - y, l = c - _, b.xOffset += a * w[0] + l * w[2] - a, b.yOffset += a * w[1] + l * w[3] - l) : b.xOffset = b.yOffset = 0), t.setAttribute("data-svg-origin", s.join(" "))
                    },
                    Nt = function(t) {
                        return !!($t && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    Rt = [1, 0, 0, 1, 0, 0],
                    Mt = function(t, e) {
                        var i, n, r, s, o, a = t._gsTransform || new Pt,
                            l = 1e5;
                        if (Tt ? n = Q(t, kt, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(O), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, (a.svg || t.getBBox && Nt(t)) && (i && -1 !== (t.style[Tt] + "").indexOf("matrix") && (n = t.style[Tt], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Rt;
                        for (r = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], vt = r.length; --vt > -1;) s = Number(r[vt]), r[vt] = (o = s - (s |= 0)) ? (o * l + (0 > o ? -.5 : .5) | 0) / l + s : s;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    jt = H.getTransform = function(t, i, n, s) {
                        if (t._gsTransform && n && !s) return t._gsTransform;
                        var a, l, u, c, h, d, p = n ? t._gsTransform || new Pt : new Pt,
                            f = p.scaleX < 0,
                            m = 2e-5,
                            g = 1e5,
                            v = Ct ? parseFloat(Q(t, St, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                            y = parseFloat(o.defaultTransformPerspective) || 0;
                        if (p.svg = !(!t.getBBox || !Nt(t)), p.svg && (Dt(t, Q(t, St, r, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), wt = o.useSVGTransformAttr || Et), a = Mt(t), a !== Rt) {
                            if (16 === a.length) {
                                var _, b, w, x, T, k = a[0],
                                    S = a[1],
                                    C = a[2],
                                    P = a[3],
                                    $ = a[4],
                                    A = a[5],
                                    O = a[6],
                                    E = a[7],
                                    D = a[8],
                                    N = a[9],
                                    M = a[10],
                                    j = a[12],
                                    I = a[13],
                                    L = a[14],
                                    F = a[11],
                                    H = Math.atan2(O, M);
                                p.zOrigin && (L = -p.zOrigin, j = D * L - a[12], I = N * L - a[13], L = M * L + p.zOrigin - a[14]), p.rotationX = H * R, H && (x = Math.cos(-H), T = Math.sin(-H), _ = $ * x + D * T, b = A * x + N * T, w = O * x + M * T, D = $ * -T + D * x, N = A * -T + N * x, M = O * -T + M * x, F = E * -T + F * x, $ = _, A = b, O = w), H = Math.atan2(D, M), p.rotationY = H * R, H && (x = Math.cos(-H), T = Math.sin(-H), _ = k * x - D * T, b = S * x - N * T, w = C * x - M * T, N = S * T + N * x, M = C * T + M * x, F = P * T + F * x, k = _, S = b, C = w), H = Math.atan2(S, k), p.rotation = H * R, H && (x = Math.cos(-H), T = Math.sin(-H), k = k * x + $ * T, b = S * x + A * T, A = S * -T + A * x, O = C * -T + O * x, S = b), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY += 180), p.scaleX = (Math.sqrt(k * k + S * S) * g + .5 | 0) / g, p.scaleY = (Math.sqrt(A * A + N * N) * g + .5 | 0) / g, p.scaleZ = (Math.sqrt(O * O + M * M) * g + .5 | 0) / g, p.skewX = 0, p.perspective = F ? 1 / (0 > F ? -F : F) : 0, p.x = j, p.y = I, p.z = L, p.svg && (p.x -= p.xOrigin - (p.xOrigin * k - p.yOrigin * $), p.y -= p.yOrigin - (p.yOrigin * S - p.xOrigin * A))
                            } else if (!(Ct && !s && a.length && p.x === a[4] && p.y === a[5] && (p.rotationX || p.rotationY) || void 0 !== p.x && "none" === Q(t, "display", i))) {
                                var z = a.length >= 6,
                                    q = z ? a[0] : 1,
                                    B = a[1] || 0,
                                    W = a[2] || 0,
                                    U = z ? a[3] : 1;
                                p.x = a[4] || 0, p.y = a[5] || 0, u = Math.sqrt(q * q + B * B), c = Math.sqrt(U * U + W * W), h = q || B ? Math.atan2(B, q) * R : p.rotation || 0, d = W || U ? Math.atan2(W, U) * R + h : p.skewX || 0, Math.abs(d) > 90 && Math.abs(d) < 270 && (f ? (u *= -1, d += 0 >= h ? 180 : -180, h += 0 >= h ? 180 : -180) : (c *= -1, d += 0 >= d ? 180 : -180)), p.scaleX = u, p.scaleY = c, p.rotation = h, p.skewX = d, Ct && (p.rotationX = p.rotationY = p.z = 0, p.perspective = y, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * q + p.yOrigin * W), p.y -= p.yOrigin - (p.xOrigin * B + p.yOrigin * U))
                            }
                            p.zOrigin = v;
                            for (l in p) p[l] < m && p[l] > -m && (p[l] = 0)
                        }
                        return n && (t._gsTransform = p, p.svg && (wt && t.style[Tt] ? e.delayedCall(.001, function() {
                            Ht(t.style, Tt)
                        }) : !wt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), p
                    },
                    It = function(t) {
                        var e, i, n = this.data,
                            r = -n.rotation * N,
                            s = r + n.skewX * N,
                            o = 1e5,
                            a = (Math.cos(r) * n.scaleX * o | 0) / o,
                            l = (Math.sin(r) * n.scaleX * o | 0) / o,
                            u = (Math.sin(s) * -n.scaleY * o | 0) / o,
                            c = (Math.cos(s) * n.scaleY * o | 0) / o,
                            h = this.t.style,
                            d = this.t.currentStyle;
                        if (d) {
                            i = l, l = -u, u = -i, e = d.filter, h.filter = "";
                            var p, f, g = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                y = "absolute" !== d.position,
                                _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c,
                                x = n.x + g * n.xPercent / 100,
                                T = n.y + v * n.yPercent / 100;
                            if (null != n.ox && (p = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2, f = (n.oyp ? v * n.oy * .01 : n.oy) - v / 2, x += p - (p * a + f * l), T += f - (p * u + f * c)), y ? (p = g / 2, f = v / 2, _ += ", Dx=" + (p - (p * a + f * l) + x) + ", Dy=" + (f - (p * u + f * c) + T) + ")") : _ += ", sizingMethod='auto expand')", h.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(E, _) : _ + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === c && (y && -1 === _.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && h.removeAttribute("filter")), !y) {
                                var k, S, C, P = 8 > m ? 1 : -1;
                                for (p = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + x), n.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > u ? -u : u) * g)) / 2 + T), vt = 0; 4 > vt; vt++) S = et[vt], k = d[S], i = -1 !== k.indexOf("px") ? parseFloat(k) : G(this.t, S, parseFloat(k), k.replace(b, "")) || 0, C = i !== n[S] ? 2 > vt ? -n.ieOffsetX : -n.ieOffsetY : 2 > vt ? p - n.ieOffsetX : f - n.ieOffsetY, h[S] = (n[S] = Math.round(i - C * (0 === vt || 2 === vt ? 1 : P))) + "px"
                            }
                        }
                    },
                    Lt = H.set3DTransformRatio = H.setTransformRatio = function(t) {
                        var e, i, n, r, s, o, a, l, u, c, h, d, f, m, g, v, y, _, b, w, x, T, k, S = this.data,
                            C = this.t.style,
                            P = S.rotation,
                            $ = S.rotationX,
                            A = S.rotationY,
                            O = S.scaleX,
                            E = S.scaleY,
                            D = S.scaleZ,
                            R = S.x,
                            M = S.y,
                            j = S.z,
                            I = S.svg,
                            L = S.perspective,
                            F = S.force3D;
                        if (!(((1 !== t && 0 !== t || "auto" !== F || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && F || j || L || A || $) && (!wt || !I) && Ct)) return void(P || S.skewX || I ? (P *= N, T = S.skewX * N, k = 1e5, e = Math.cos(P) * O, r = Math.sin(P) * O, i = Math.sin(P - T) * -E, s = Math.cos(P - T) * E, T && "simple" === S.skewType && (y = Math.tan(T), y = Math.sqrt(1 + y * y), i *= y, s *= y, S.skewY && (e *= y, r *= y)), I && (R += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, M += S.yOrigin - (S.xOrigin * r + S.yOrigin * s) + S.yOffset, wt && (S.xPercent || S.yPercent) && (m = this.t.getBBox(), R += .01 * S.xPercent * m.width, M += .01 * S.yPercent * m.height), m = 1e-6, m > R && R > -m && (R = 0), m > M && M > -m && (M = 0)), b = (e * k | 0) / k + "," + (r * k | 0) / k + "," + (i * k | 0) / k + "," + (s * k | 0) / k + "," + R + "," + M + ")", I && wt ? this.t.setAttribute("transform", "matrix(" + b) : C[Tt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + b) : C[Tt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + O + ",0,0," + E + "," + R + "," + M + ")");
                        if (p && (m = 1e-4, m > O && O > -m && (O = D = 2e-5), m > E && E > -m && (E = D = 2e-5), !L || S.z || S.rotationX || S.rotationY || (L = 0)), P || S.skewX) P *= N, g = e = Math.cos(P), v = r = Math.sin(P), S.skewX && (P -= S.skewX * N, g = Math.cos(P), v = Math.sin(P), "simple" === S.skewType && (y = Math.tan(S.skewX * N), y = Math.sqrt(1 + y * y), g *= y, v *= y, S.skewY && (e *= y, r *= y))), i = -v, s = g;
                        else {
                            if (!(A || $ || 1 !== D || L || I)) return void(C[Tt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + R + "px," + M + "px," + j + "px)" + (1 !== O || 1 !== E ? " scale(" + O + "," + E + ")" : ""));
                            e = s = 1, i = r = 0
                        }
                        u = 1, n = o = a = l = c = h = 0, d = L ? -1 / L : 0, f = S.zOrigin, m = 1e-6, w = ",", x = "0", P = A * N, P && (g = Math.cos(P), v = Math.sin(P), a = -v, c = d * -v, n = e * v, o = r * v, u = g, d *= g, e *= g, r *= g), P = $ * N, P && (g = Math.cos(P), v = Math.sin(P), y = i * g + n * v, _ = s * g + o * v, l = u * v, h = d * v, n = i * -v + n * g, o = s * -v + o * g, u *= g, d *= g, i = y, s = _), 1 !== D && (n *= D, o *= D, u *= D, d *= D), 1 !== E && (i *= E, s *= E, l *= E, h *= E), 1 !== O && (e *= O, r *= O, a *= O, c *= O), (f || I) && (f && (R += n * -f, M += o * -f, j += u * -f + f), I && (R += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, M += S.yOrigin - (S.xOrigin * r + S.yOrigin * s) + S.yOffset), m > R && R > -m && (R = x), m > M && M > -m && (M = x), m > j && j > -m && (j = 0)), b = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", b += (m > e && e > -m ? x : e) + w + (m > r && r > -m ? x : r) + w + (m > a && a > -m ? x : a), b += w + (m > c && c > -m ? x : c) + w + (m > i && i > -m ? x : i) + w + (m > s && s > -m ? x : s), $ || A ? (b += w + (m > l && l > -m ? x : l) + w + (m > h && h > -m ? x : h) + w + (m > n && n > -m ? x : n), b += w + (m > o && o > -m ? x : o) + w + (m > u && u > -m ? x : u) + w + (m > d && d > -m ? x : d) + w) : b += ",0,0,0,0,1,0,", b += R + w + M + w + j + w + (L ? 1 + -j / L : 1) + ")", C[Tt] = b
                    };
                u = Pt.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, _t("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, n, s, a, l) {
                        if (n._lastParsedTransform === l) return s;
                        n._lastParsedTransform = l;
                        var u, c, h, d, p, f, m, g, v, y = t._gsTransform,
                            _ = n._transform = jt(t, r, !0, l.parseTransform),
                            b = t.style,
                            w = 1e-6,
                            x = xt.length,
                            T = l,
                            k = {},
                            S = "transformOrigin";
                        if ("string" == typeof T.transform && Tt) h = L.style, h[Tt] = T.transform, h.display = "block", h.position = "absolute", j.body.appendChild(L), u = jt(L, null, !1), j.body.removeChild(L), null != T.xPercent && (u.xPercent = st(T.xPercent, _.xPercent)), null != T.yPercent && (u.yPercent = st(T.yPercent, _.yPercent));
                        else if ("object" == typeof T) {
                            if (u = {
                                    scaleX: st(null != T.scaleX ? T.scaleX : T.scale, _.scaleX),
                                    scaleY: st(null != T.scaleY ? T.scaleY : T.scale, _.scaleY),
                                    scaleZ: st(T.scaleZ, _.scaleZ),
                                    x: st(T.x, _.x),
                                    y: st(T.y, _.y),
                                    z: st(T.z, _.z),
                                    xPercent: st(T.xPercent, _.xPercent),
                                    yPercent: st(T.yPercent, _.yPercent),
                                    perspective: st(T.transformPerspective, _.perspective)
                                }, m = T.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (h in m) T[h] = m[h];
                                else T.rotation = m;
                                "string" == typeof T.x && -1 !== T.x.indexOf("%") && (u.x = 0, u.xPercent = st(T.x, _.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (u.y = 0, u.yPercent = st(T.y, _.yPercent)), u.rotation = ot("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : _.rotation, _.rotation, "rotation", k), Ct && (u.rotationX = ot("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : _.rotationX || 0, _.rotationX, "rotationX", k), u.rotationY = ot("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : _.rotationY || 0, _.rotationY, "rotationY", k)), u.skewX = null == T.skewX ? _.skewX : ot(T.skewX, _.skewX), u.skewY = null == T.skewY ? _.skewY : ot(T.skewY, _.skewY), (c = u.skewY - _.skewY) && (u.skewX += c, u.rotation += c)
                        }
                        for (Ct && null != T.force3D && (_.force3D = T.force3D, f = !0), _.skewType = T.skewType || _.skewType || o.defaultSkewType, p = _.force3D || _.z || _.rotationX || _.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, p || null == T.scale || (u.scaleZ = 1); --x > -1;) i = xt[x], d = u[i] - _[i], (d > w || -w > d || null != T[i] || null != M[i]) && (f = !0, s = new ft(_, i, _[i], d, s), i in k && (s.e = k[i]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
                        return d = T.transformOrigin, _.svg && (d || T.svgOrigin) && (g = _.xOffset, v = _.yOffset, Dt(t, nt(d), u, T.svgOrigin, T.smoothOrigin), s = mt(_, "xOrigin", (y ? _ : u).xOrigin, u.xOrigin, s, S), s = mt(_, "yOrigin", (y ? _ : u).yOrigin, u.yOrigin, s, S), (g !== _.xOffset || v !== _.yOffset) && (s = mt(_, "xOffset", y ? g : _.xOffset, _.xOffset, s, S), s = mt(_, "yOffset", y ? v : _.yOffset, _.yOffset, s, S)), d = wt ? null : "0px 0px"), (d || Ct && p && _.zOrigin) && (Tt ? (f = !0, i = St, d = (d || Q(t, i, r, !1, "50% 50%")) + "", s = new ft(b, i, 0, 0, s, -1, S), s.b = b[i], s.plugin = a, Ct ? (h = _.zOrigin, d = d.split(" "), _.zOrigin = (d.length > 2 && (0 === h || "0px" !== d[2]) ? parseFloat(d[2]) : h) || 0, s.xs0 = s.e = d[0] + " " + (d[1] || "50%") + " 0px", s = new ft(_, "zOrigin", 0, 0, s, -1, s.n), s.b = h, s.xs0 = s.e = _.zOrigin) : s.xs0 = s.e = d) : nt(d + "", _)), f && (n._transformType = _.svg && wt || !p && 3 !== this._transformType ? 2 : 3), s
                    },
                    prefix: !0
                }), _t("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), _t("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, s, o, a) {
                        e = this.format(e);
                        var l, u, c, h, d, p, f, m, g, v, y, _, b, w, x, T, k = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            S = t.style;
                        for (g = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), u = 0; u < k.length; u++) this.p.indexOf("border") && (k[u] = Y(k[u])), d = h = Q(t, k[u], r, !1, "0px"), -1 !== d.indexOf(" ") && (h = d.split(" "), d = h[0], h = h[1]), p = c = l[u], f = parseFloat(d), _ = d.substr((f + "").length), b = "=" === p.charAt(1), b ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), y = p.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(p), y = p.substr((m + "").length)), "" === y && (y = n[i] || _), y !== _ && (w = G(t, "borderLeft", f, _), x = G(t, "borderTop", f, _), "%" === y ? (d = w / g * 100 + "%", h = x / v * 100 + "%") : "em" === y ? (T = G(t, "borderLeft", 1, "em"), d = w / T + "em", h = x / T + "em") : (d = w + "px", h = x + "px"), b && (p = parseFloat(d) + m + y, c = parseFloat(h) + m + y)), o = gt(S, k[u], d + " " + h, p + " " + c, !1, "0px", o);
                        return o
                    },
                    prefix: !0,
                    formatter: ht("0px 0px 0px 0px", !1, !0)
                }), _t("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, s, o) {
                        var a, l, u, c, h, d, p = "background-position",
                            f = r || V(t, null),
                            g = this.format((f ? m ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(e);
                        if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && (d = Q(t, "backgroundImage").replace(P, ""), d && "none" !== d)) {
                            for (a = g.split(" "), l = v.split(" "), F.setAttribute("src", d), u = 2; --u > -1;) g = a[u], c = -1 !== g.indexOf("%"), c !== (-1 !== l[u].indexOf("%")) && (h = 0 === u ? t.offsetWidth - F.width : t.offsetHeight - F.height, a[u] = c ? parseFloat(g) / 100 * h + "px" : parseFloat(g) / h * 100 + "%");
                            g = a.join(" ")
                        }
                        return this.parseComplex(t.style, g, v, s, o)
                    },
                    formatter: nt
                }), _t("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: nt
                }), _t("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), _t("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), _t("transformStyle", {
                    prefix: !0
                }), _t("backfaceVisibility", {
                    prefix: !0
                }), _t("userSelect", {
                    prefix: !0
                }), _t("margin", {
                    parser: dt("marginTop,marginRight,marginBottom,marginLeft")
                }), _t("padding", {
                    parser: dt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), _t("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, s, o) {
                        var a, l, u;
                        return 9 > m ? (l = t.currentStyle, u = 8 > m ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o)
                    }
                }), _t("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), _t("autoRound,strictUnits", {
                    parser: function(t, e, i, n, r) {
                        return r
                    }
                }), _t("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, s, o) {
                        return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), s, o)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ct) || ["#000"])[0]
                    }
                }), _t("borderWidth", {
                    parser: dt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), _t("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, r, s) {
                        var o = t.style,
                            a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                        return new ft(o, a, 0, 0, r, -1, i, !1, 0, o[a], e)
                    }
                });
                var Ft = function(t) {
                    var e, i = this.t,
                        n = i.filter || Q(this.data, "filter") || "",
                        r = this.s + this.c * t | 0;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = n.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(w, "opacity=" + r))
                };
                _t("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, s, o) {
                        var a = parseFloat(Q(t, "opacity", r, !1, "1")),
                            l = t.style,
                            u = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === Q(t, "visibility", r) && 0 !== e && (a = 0), q ? s = new ft(l, "opacity", a, e - a, s) : (s = new ft(l, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = u ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = Ft), u && (s = new ft(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                    }
                });
                var Ht = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    zt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ht(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                _t("className", {
                    parser: function(t, e, n, s, o, a, l) {
                        var u, c, h, d, p, f = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (o = s._classNamePT = new ft(t, n, 0, 0, o, 2), o.setRatio = zt, o.pr = -11, i = !0, o.b = f, c = J(t, r), h = t._gsClassPT) {
                            for (d = {}, p = h.data; p;) d[p.p] = 1, p = p._next;
                            h.setRatio(1)
                        }
                        return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), u = K(t, c, J(t), l, d), t.setAttribute("class", f), o.data = u.firstMPT, t.style.cssText = m, o = o.xfirst = s.parse(t, u.difs, o, a)
                    }
                });
                var qt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, r, s, o = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) o.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? St : l[i].p), Ht(o, i);
                        r && (Ht(o, Tt), s = this.t._gsTransform, s && (s.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                    }
                };
                for (_t("clearProps", {
                        parser: function(t, e, n, r, s) {
                            return s = new ft(t, n, 0, 0, s, 2), s.setRatio = qt, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
                        }
                    }), u = "bezier,throwProps,physicsProps,physics2D".split(","), vt = u.length; vt--;) bt(u[vt]);
                u = o.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(t, e, a) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = a, this._vars = e, c = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, r = V(t, ""), s = this._overwriteProps;
                    var u, p, m, g, v, y, _, b, w, T = t.style;
                    if (h && "" === T.zIndex && (u = Q(t, "zIndex", r), ("auto" === u || "" === u) && this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (g = T.cssText, u = J(t, r), T.cssText = g + ";" + e, u = K(t, u, J(t)).difs, !q && x.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, T.cssText = g), this._firstPT = p = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                        for (w = 3 === this._transformType, Tt ? d && (h = !0, "" === T.zIndex && (_ = Q(t, "zIndex", r), ("auto" === _ || "" === _) && this._addLazySet(T, "zIndex", 0)), f && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : T.zoom = 1, m = p; m && m._next;) m = m._next;
                        b = new ft(t, "transform", 0, 0, null, 2), this._linkCSSP(b, null, m), b.setRatio = Tt ? Lt : It, b.data = this._transform || jt(t, r, !0), b.tween = a, b.pr = -1, s.pop()
                    }
                    if (i) {
                        for (; p;) {
                            for (y = p._next, m = g; m && m.pr > p.pr;) m = m._next;
                            (p._prev = m ? m._prev : v) ? p._prev._next = p: g = p, (p._next = m) ? m._prev = p : v = p, p = y
                        }
                        this._firstPT = g
                    }
                    return !0
                }, u.parse = function(t, e, i, s) {
                    var o, a, u, h, d, p, f, m, g, v, y = t.style;
                    for (o in e) p = e[o], a = l[o], a ? i = a.parse(t, p, o, this, i, s, e) : (d = Q(t, o, r) + "", g = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || g && k.test(p) ? (g || (p = ut(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = gt(y, o, d, p, !0, "transparent", i, 0, s)) : !g || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (u = parseFloat(d), f = u || 0 === u ? d.substr((u + "").length) : "", ("" === d || "auto" === d) && ("width" === o || "height" === o ? (u = it(t, o, r), f = "px") : "left" === o || "top" === o ? (u = Z(t, o, r), f = "px") : (u = "opacity" !== o ? 0 : 1, f = "")), v = g && "=" === p.charAt(1), v ? (h = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), h *= parseFloat(p), m = p.replace(b, "")) : (h = parseFloat(p), m = g ? p.replace(b, "") : ""), "" === m && (m = o in n ? n[o] : f), p = h || 0 === h ? (v ? h + u : h) + m : e[o], f !== m && "" !== m && (h || 0 === h) && u && (u = G(t, o, u, f), "%" === m ? (u /= G(t, o, 100, "%") / 100, e.strictUnits !== !0 && (d = u + "%")) : "em" === m ? u /= G(t, o, 1, "em") : "px" !== m && (h = G(t, o, h, m), m = "px"), v && (h || 0 === h) && (p = h + u + m)), v && (h += u), !u && 0 !== u || !h && 0 !== h ? void 0 !== y[o] && (p || p + "" != "NaN" && null != p) ? (i = new ft(y, o, h || u || 0, 0, i, -1, o, !1, 0, d, p), i.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : d) : W("invalid " + o + " tween value: " + e[o]) : (i = new ft(y, o, u, h - u, i, 0, o, c !== !1 && ("px" === m || "zIndex" === o), 0, d, p), i.xs0 = m)) : i = gt(y, o, d, p, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
                    return i
                }, u.setRatio = function(t) {
                    var e, i, n, r = this._firstPT,
                        s = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s > e && e > -s && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, u._enableTransforms = function(t) {
                    this._transform = this._transform || jt(this._target, r, !0), this._transformType = this._transform.svg && wt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Bt = function(t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                u._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new ft(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Bt, n.data = this
                }, u._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, u._kill = function(e) {
                    var i, n, r, s = e;
                    if (e.autoAlpha || e.alpha) {
                        s = {};
                        for (n in e) s[n] = e[n];
                        s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, s)
                };
                var Wt = function(t, e, i) {
                    var n, r, s, o;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Wt(t[r], e, i);
                    else
                        for (n = t.childNodes, r = n.length; --r > -1;) s = n[r], o = s.type, s.style && (e.push(J(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Wt(s, e, i)
                };
                return o.cascadeTo = function(t, i, n) {
                    var r, s, o, a, l = e.to(t, i, n),
                        u = [l],
                        c = [],
                        h = [],
                        d = [],
                        p = e._internals.reservedProps;
                    for (t = l._targets || l.target, Wt(t, c, d), l.render(i, !0, !0), Wt(t, h), l.render(0, !0, !0), l._enabled(!0), r = d.length; --r > -1;)
                        if (s = K(d[r], c[r], h[r]), s.firstMPT) {
                            s = s.difs;
                            for (o in n) p[o] && (s[o] = n[o]);
                            a = {};
                            for (o in s) a[o] = c[r][o];
                            u.push(e.fromTo(d[r], i, a, s))
                        }
                    return u
                }, t.activate([o]), o
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = t.prototype;
                e._onInitAllProps = function() {
                    for (var t, e, i, n = this._tween, r = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), s = r.length, o = {}, a = n._propLookup.roundProps; --s > -1;) o[r[s]] = 1;
                    for (s = r.length; --s > -1;)
                        for (t = r[s], e = n._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(o, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = a), e = i;
                    return !1
                }, e._add = function(t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
                }
            }(),
            function() {
                var t = /(?:\d|\-|\+|=|#|\.)*/g,
                    e = /[A-Za-z%]/g;
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.4.0",
                    init: function(i, n, r) {
                        var s, o, a, l, u;
                        if ("function" != typeof i.setAttribute) return !1;
                        this._target = i, this._proxy = {}, this._start = {}, this._end = {}, this._suffix = {};
                        for (s in n) this._start[s] = this._proxy[s] = o = i.getAttribute(s) + "", this._end[s] = a = n[s] + "", this._suffix[s] = l = e.test(a) ? a.replace(t, "") : e.test(o) ? o.replace(t, "") : "", l && (u = a.indexOf(l), -1 !== u && (a = a.substr(0, u))), this._addTween(this._proxy, s, parseFloat(o), a, s) || (this._suffix[s] = ""), "=" === a.charAt(1) && (this._end[s] = this._firstPT.s + this._firstPT.c + l), this._overwriteProps.push(s);
                        return !0
                    },
                    set: function(t) {
                        this._super.setRatio.call(this, t);
                        for (var e, i = this._overwriteProps, n = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start, s = r === this._proxy; --n > -1;) e = i[n], this._target.setAttribute(e, r[e] + (s ? this._suffix[e] : ""))
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e, i) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var n, r, s, o, a, l, u = e.useRadians === !0 ? 2 * Math.PI : 360,
                        c = 1e-6;
                    for (n in e) "useRadians" !== n && (l = (e[n] + "").split("_"), r = l[0], s = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), o = this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? s + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, a = o - s, l.length && (r = l.join("_"), -1 !== r.indexOf("short") && (a %= u, a !== a % (u / 2) && (a = 0 > a ? a + u : a - u)), -1 !== r.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * u) % u - (a / u | 0) * u : -1 !== r.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * u) % u - (a / u | 0) * u)), (a > c || -c > a) && (this._addTween(t, n, s, s + a, n), this._overwriteProps.push(n)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
                    s = r.com.greensock,
                    o = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = s._class,
                    u = function(e, i) {
                        var n = l("easing." + e, function() {}, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    c = t.register || function() {},
                    h = function(t, e, i, n, r) {
                        var s = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return c(s, t), s
                    },
                    d = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    p = function(e, i) {
                        var n = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    f = h("Back", p("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), p("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), p("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    g = m.prototype = new t;
                return g.constructor = m, g.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, g.config = e.config = function(t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, n, r, s, o, a, l = e.taper || "none", u = [], c = 0, h = 0 | (e.points || 20), p = h, f = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / h * p, n = g ? g.getRatio(i) : i, "none" === l ? r = v : "out" === l ? (s = 1 - i, r = s * s * v) : "in" === l ? r = i * i * v : .5 > i ? (s = 2 * i, r = s * s * .5 * v) : (s = 2 * (1 - i), r = s * s * .5 * v), f ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), u[c++] = {
                        x: i,
                        y: n
                    };
                    for (u.sort(function(t, e) {
                            return t.x - e.x
                        }), a = new d(1, 1, null), p = h; --p > -1;) o = u[p], a = new d(o.x, o.y, a);
                    this._prev = new d(0, 0, 0 !== a.t ? a : a.next)
                }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function(t) {
                    return new i(t)
                }, i.ease = new i, h("Bounce", u("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), u("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), u("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), h("Circ", u("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), u("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), u("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function(e, i, n) {
                    var r = l("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                        }, !0),
                        s = r.prototype = new t;
                    return s.constructor = r, s.getRatio = i, s.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, h("Elastic", n("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), n("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), h("Expo", u("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), u("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), u("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), h("Sine", u("SineOut", function(t) {
                    return Math.sin(t * a)
                }), u("SineIn", function(t) {
                    return -Math.cos(t * a) + 1
                }), u("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), f
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var n, r, s, o, a, l = function(t) {
                    var e, n = t.split("."),
                        r = i;
                    for (e = 0; e < n.length; e++) r[n[e]] = r = r[n[e]] || {};
                    return r
                },
                u = l("com.greensock"),
                c = 1e-10,
                h = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                d = function() {},
                p = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                f = {},
                m = function(n, r, s, o) {
                    this.sc = f[n] ? f[n].sc : [], f[n] = this, this.gsClass = null, this.func = s;
                    var a = [];
                    this.check = function(u) {
                        for (var c, h, d, p, g = r.length, v = g; --g > -1;)(c = f[r[g]] || new m(r[g], [])).gsClass ? (a[g] = c.gsClass, v--) : u && c.sc.push(this);
                        if (0 === v && s)
                            for (h = ("com.greensock." + n).split("."), d = h.pop(), p = l(h.join("."))[d] = this.gsClass = s.apply(s, a), o && (i[d] = p, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                    return p
                                }) : n === e && "undefined" != typeof module && module.exports && (module.exports = p)), g = 0; g < this.sc.length; g++) this.sc[g].check()
                    }, this.check(!0)
                },
                g = t._gsDefine = function(t, e, i, n) {
                    return new m(t, e, i, n)
                },
                v = u._class = function(t, e, i) {
                    return e = e || function() {}, g(t, [], function() {
                        return e
                    }, i), e
                };
            g.globals = i;
            var y = [0, 0, 1, 1],
                _ = [],
                b = v("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? y.concat(e) : y
                }, !0),
                w = b.map = {},
                x = b.register = function(t, e, i, n) {
                    for (var r, s, o, a, l = e.split(","), c = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                        for (s = l[c], r = n ? v("easing." + s, null, !0) : u.easing[s] || {}, o = h.length; --o > -1;) a = h[o], w[s + "." + a] = w[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                };
            for (s = b.prototype, s._calcEnd = !1, s.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) s = n[r] + ",Power" + r, x(new b(null, null, 1, r), s, "easeOut", !0), x(new b(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), x(new b(null, null, 3, r), s, "easeInOut");
            w.linear = u.easing.Linear.easeIn, w.swing = u.easing.Quad.easeInOut;
            var T = v("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            s = T.prototype, s.addEventListener = function(t, e, i, n, r) {
                r = r || 0;
                var s, l, u = this._listeners[t],
                    c = 0;
                for (null == u && (this._listeners[t] = u = []), l = u.length; --l > -1;) s = u[l], s.c === e && s.s === i ? u.splice(l, 1) : 0 === c && s.pr < r && (c = l + 1);
                u.splice(c, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: r
                }), this !== o || a || o.wake()
            }, s.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, s.dispatchEvent = function(t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var k = t.requestAnimationFrame,
                S = t.cancelAnimationFrame,
                C = Date.now || function() {
                    return (new Date).getTime()
                },
                P = C();
            for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !k;) k = t[n[r] + "RequestAnimationFrame"], S = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, n, r, s, l, u = this,
                    h = C(),
                    p = e !== !1 && k,
                    f = 500,
                    m = 33,
                    g = "tick",
                    v = function(t) {
                        var e, o, a = C() - P;
                        a > f && (h += a - m), P += a, u.time = (P - h) / 1e3, e = u.time - l, (!i || e > 0 || t === !0) && (u.frame++, l += e + (e >= s ? .004 : s - e), o = !0), t !== !0 && (r = n(v)), o && u.dispatchEvent(g)
                    };
                T.call(u), u.time = u.frame = 0, u.tick = function() {
                    v(!0)
                }, u.lagSmoothing = function(t, e) {
                    f = t || 1 / c, m = Math.min(e, f, 0)
                }, u.sleep = function() {
                    null != r && (p && S ? S(r) : clearTimeout(r), n = d, r = null, u === o && (a = !1))
                }, u.wake = function() {
                    null !== r ? u.sleep() : u.frame > 10 && (P = C() - f + 5), n = 0 === i ? d : p && k ? k : function(t) {
                        return setTimeout(t, 1e3 * (l - u.time) + 1 | 0)
                    }, u === o && (a = !0), v(2)
                }, u.fps = function(t) {
                    return arguments.length ? (i = t, s = 1 / (i || 60), l = this.time + s, void u.wake()) : i
                }, u.useRAF = function(t) {
                    return arguments.length ? (u.sleep(), p = t, void u.fps(i)) : p
                }, u.fps(t), setTimeout(function() {
                    p && u.frame < 5 && u.useRAF(!1)
                }, 1500)
            }), s = u.Ticker.prototype = new u.events.EventDispatcher, s.constructor = u.Ticker;
            var $ = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) {
                    a || o.wake();
                    var i = this.vars.useFrames ? q : B;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            o = $.ticker = new u.Ticker, s = $.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
            var A = function() {
                a && C() - P > 2e3 && o.wake(), setTimeout(A, 2e3)
            };
            A(), s.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, s.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, s.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, s.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, s.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, s.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, s.render = function(t, e, i) {}, s.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, s.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
            }, s._enabled = function(t, e) {
                return a || o.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, s._kill = function(t, e) {
                return this._enabled(!1, !1)
            }, s.kill = function(t, e) {
                return this._kill(t, e), this
            }, s._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, s._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, s._callback = function(t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || _)
            }, s.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, s.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, s.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, s.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, s.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, s.totalTime = function(t, e, i) {
                if (a || o.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), R.length && U())
                }
                return this
            }, s.progress = s.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, s.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, s.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, s.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, s.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, s.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (a || t || o.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
            };
            var O = v("core.SimpleTimeline", function(t) {
                $.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            s = O.prototype = new $, s.constructor = O, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function(t, e, i, n) {
                var r, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                    for (s = t._startTime; r && r._startTime > s;) r = r._prev;
                return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
            }, s._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, s.render = function(t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, s.rawTime = function() {
                return a || o.wake(), this._totalTime
            };
            var E = v("TweenLite", function(e, i, n) {
                    if ($.call(this, i, n), this.render = E.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : E.selector(e) || e;
                    var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? z[E.defaultOverwrite] : "number" == typeof l ? l >> 0 : z[l], (a || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                        for (this._targets = o = h(e), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++) s = o[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(h(s))) : (this._siblings[r] = X(s, this, !1), 1 === l && this._siblings[r].length > 1 && V(s, this, null, 1, this._siblings[r])) : (s = o[r--] = E.selector(s), "string" == typeof s && o.splice(r + 1, 1)) : o.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = X(e, this, !1), 1 === l && this._siblings.length > 1 && V(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
                }, !0),
                D = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                N = function(t, e) {
                    var i, n = {};
                    for (i in t) H[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!I[i] || I[i] && I[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            s = E.prototype = new $, s.constructor = E, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, E.version = "1.17.0", E.defaultEase = s._ease = new b(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = o, E.autoSleep = 120, E.lagSmoothing = function(t, e) {
                o.lagSmoothing(t, e)
            }, E.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (E.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var R = [],
                M = {},
                j = E._internals = {
                    isArray: p,
                    isSelector: D,
                    lazyTweens: R
                },
                I = E._plugins = {},
                L = j.tweenLookup = {},
                F = 0,
                H = j.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1
                },
                z = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                q = $._rootFramesTimeline = new O,
                B = $._rootTimeline = new O,
                W = 30,
                U = j.lazyRender = function() {
                    var t, e = R.length;
                    for (M = {}; --e > -1;) t = R[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    R.length = 0
                };
            B._startTime = o.time, q._startTime = o.frame, B._active = q._active = !0, setTimeout(U, 1), $._updateRoot = E.render = function() {
                var t, e, i;
                if (R.length && U(), B.render((o.time - B._startTime) * B._timeScale, !1, !1), q.render((o.frame - q._startTime) * q._timeScale, !1, !1), R.length && U(), o.frame >= W) {
                    W = o.frame + (parseInt(E.autoSleep, 10) || 120);
                    for (i in L) {
                        for (e = L[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete L[i]
                    }
                    if (i = B._first, (!i || i._paused) && E.autoSleep && !q._first && 1 === o._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || o.sleep()
                    }
                }
            }, o.addEventListener("tick", $._updateRoot);
            var X = function(t, e, i) {
                    var n, r, s = t._gsTweenID;
                    if (L[s || (t._gsTweenID = s = "t" + F++)] || (L[s] = {
                            target: t,
                            tweens: []
                        }), e && (n = L[s].tweens, n[r = n.length] = e, i))
                        for (; --r > -1;) n[r] === e && n.splice(r, 1);
                    return L[s].tweens
                },
                Y = function(t, e, i, n) {
                    var r, s, o = t.vars.onOverwrite;
                    return o && (r = o(t, e, i, n)), o = E.onOverwrite, o && (s = o(t, e, i, n)), r !== !1 && s !== !1
                },
                V = function(t, e, i, n, r) {
                    var s, o, a, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, s = 0; l > s; s++)
                            if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                            else if (5 === n) break;
                        return o
                    }
                    var u, h = e._startTime + c,
                        d = [],
                        p = 0,
                        f = 0 === e._duration;
                    for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || Q(e, 0, f), 0 === Q(a, u, f) && (d[p++] = a)) : a._startTime <= h && a._startTime + a.totalDuration() / a._timeScale > h && ((f || !a._initted) && h - a._startTime <= 2e-10 || (d[p++] = a)));
                    for (s = p; --s > -1;)
                        if (a = d[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !Y(a, e)) continue;
                            a._enabled(!1, !1) && (o = !0)
                        }
                    return o
                },
                Q = function(t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                        if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * c > s - e ? c : (s += t.totalDuration() / t._timeScale / r) > e + c ? 0 : s - e - c
                };
            s._init = function() {
                var t, e, i, n, r, s = this.vars,
                    o = this._overwrittenProps,
                    a = this._duration,
                    l = !!s.immediateRender,
                    u = s.ease;
                if (s.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (n in s.startAt) r[n] = s.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = E.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (s.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (n in s) H[n] && "autoCSS" !== n || (i[n] = s[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = E.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = u = u ? u instanceof b ? u : "function" == typeof u ? new b(u, s.easeParams) : w[u] || E.defaultEase : E.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, o);
                if (e && E._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = s.onUpdate, this._initted = !0
            }, s._initProps = function(e, i, n, r) {
                var s, o, a, l, u, c;
                if (null == e) return !1;
                M[e._gsTweenID] && U(), this.vars.css || e.style && e !== t && e.nodeType && I.css && this.vars.autoCSS !== !1 && N(this.vars, e);
                for (s in this.vars) {
                    if (c = this.vars[s], H[s]) c && (c instanceof Array || c.push && p(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this));
                    else if (I[s] && (l = new I[s])._onInitTween(e, this.vars[s], this)) {
                        for (this._firstPT = u = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: s,
                                pg: !0,
                                pr: l._priority
                            }, o = l._overwriteProps.length; --o > -1;) i[l._overwriteProps[o]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[s] = u = {
                        _next: this._firstPT,
                        t: e,
                        p: s,
                        f: "function" == typeof e[s],
                        n: s,
                        pg: !1,
                        pr: 0
                    }, u.s = u.f ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]), u.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - u.s || 0;
                    u && u._next && (u._next._prev = u)
                }
                return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && V(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (M[e._gsTweenID] = !0), a)
            }, s.render = function(t, e, i) {
                var n, r, s, o, a = this._time,
                    l = this._duration,
                    u = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > u || u === c && "isPause" !== this.data) && u !== t && (i = !0, u > c && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : c);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (u !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || u === t ? t : c)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var h = t / l,
                        d = this._easeType,
                        p = this._easePower;
                    (1 === d || 3 === d && h >= .5) && (h = 1 - h), 3 === d && (h *= 2), 1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h), this.ratio = 1 === d ? 1 - h : 2 === d ? h : .5 > t / l ? h / 2 : 1 - h / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, R.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === c && o !== c && (this._rawPrevTime = 0))
                }
            }, s._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : E.selector(e) || e;
                var n, r, s, o, a, l, u, c, h, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((p(e) || D(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (u = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (E.onOverwrite || this.vars.onOverwrite)) {
                            for (s in u) a[s] && (h || (h = []), h.push(s));
                            if ((h || !t) && !Y(this, i, e, h)) return !1
                        }
                        for (s in u)(o = a[s]) && (d && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), c && (r[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, s.invalidate = function() {
                return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], $.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
            }, s._enabled = function(t, e) {
                if (a || o.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = X(n[i], this, !0);
                    else this._siblings = X(this.target, this, !0)
                }
                return $.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? E._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, E.to = function(t, e, i) {
                return new E(t, e, i)
            }, E.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new E(t, e, i)
            }, E.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new E(t, e, n)
            }, E.delayedCall = function(t, e, i, n, r) {
                return new E(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, E.set = function(t, e) {
                return new E(t, 0, e)
            }, E.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : E.selector(t) || t;
                var i, n, r, s;
                if ((p(t) || D(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(E.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
                } else
                    for (n = X(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);

                return n
            }, E.killTweensOf = E.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = E.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
            };
            var G = v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = G.prototype
            }, !0);
            if (s = G.prototype, G.version = "1.10.1", G.API = 2, s._firstPT = null, s._addTween = function(t, e, i, n, r, s) {
                    var o, a;
                    return null != n && (o = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - Number(i) : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: o,
                        f: "function" == typeof t[e],
                        n: r || e,
                        r: s
                    }, a._next && (a._next._prev = a), a) : void 0
                }, s.setRatio = function(t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, s._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, s._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, E._onPluginEvent = function(t, e) {
                    var i, n, r, s, o, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
                        }
                        a = e._firstPT = r
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, G.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === G.API && (I[(new t[e])._propName] = t[e]);
                    return !0
                }, g.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        r = t.overwriteProps,
                        s = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        o = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            G.call(this, i, n), this._overwriteProps = r || []
                        }, t.global === !0),
                        a = o.prototype = new G(i);
                    a.constructor = o, o.API = t.API;
                    for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                    return o.version = t.version, G.activate([o]), o
                }, n = t._gsQueue) {
                for (r = 0; r < n.length; r++) n[r]();
                for (s in f) f[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
            }
            a = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            n = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var r = function() {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(r, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.alert");
            r || i.data("bs.alert", r = new n(this)), "string" == typeof e && r[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        n = function(e) {
            t(e).on("click", i, this.close)
        };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
        function i() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        var r = t(this),
            s = r.attr("data-target");
        s || (s = r.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t(s);
        e && e.preventDefault(), o.length || (o = r.closest(".alert")), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var r = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
        return t.fn.alert = r, this
    }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.button"),
                s = "object" == typeof e && e;
            r || n.data("bs.button", r = new i(this, s)), "toggle" == e ? r.toggle() : e && r.setState(e)
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
    };
    i.VERSION = "3.3.5", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            n = this.$element,
            r = n.is("input") ? "val" : "html",
            s = n.data();
        e += "Text", null == s.resetText && n.data("resetText", n[r]()), setTimeout(t.proxy(function() {
            n[r](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var n = t(i.target);
        n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                o = "string" == typeof e ? e : s.slide;
            r || n.data("bs.carousel", r = new i(this, s)), "number" == typeof e ? r.to(e) : o ? r[o]() : s.interval && r.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e),
            n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (n && !this.options.wrap) return e;
        var r = "prev" == t ? -1 : 1,
            s = (i + r) % this.$items.length;
        return this.$items.eq(s)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(e, n) {
        var r = this.$element.find(".item.active"),
            s = n || this.getItemForDirection(e, r),
            o = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var u = s[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = t(this.$indicators.children()[this.getItemIndex(s)]);
                h && h.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, r.addClass(a), s.addClass(a), r.one("bsTransitionEnd", function() {
                s.removeClass([e, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (r.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(d)), o && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n, this
    };
    var r = function(i) {
        var n, r = t(this),
            s = t(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var o = t.extend({}, s.data(), r.data()),
                a = r.attr("data-slide-to");
            a && (o.interval = !1), e.call(s, o), a && s.data("bs.carousel").to(a), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(n)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.collapse"),
                s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !r && s.toggle && /show|hide/.test(e) && (s.toggle = !1), r || i.data("bs.collapse", r = new n(this, s)), "string" == typeof e && r[e]()
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (e = r.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    r && r.length && (i.call(r, "hide"), e || r.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", o].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[o](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var r = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : r.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
            var r = t(n);
            this.addAriaAndCollapsedClass(e(r), r)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var r = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = r, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        /* here */
       /* var r = t(this);
        r.attr("data-target") || n.preventDefault();
        var s = e(r),
            o = s.data("bs.collapse"),
            a = o ? "toggle" : r.data();
        i.call(s, a) */
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(r).remove(), t(s).each(function() {
            var n = t(this),
                r = e(n),
                s = {
                    relatedTarget: this
                };
            r.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(r[0], i.target) || (r.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), r.removeClass("open").trigger("hidden.bs.dropdown", s))))
        }))
    }

    function n(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var r = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        o = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    o.VERSION = "3.3.5", o.prototype.toggle = function(n) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var s = e(r),
                o = s.hasClass("open");
            if (i(), !o) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var a = {
                    relatedTarget: this
                };
                if (s.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                r.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, o.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var n = t(this);
            if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                var r = e(n),
                    o = r.hasClass("open");
                if (!o && 27 != i.which || o && 27 == i.which) return 27 == i.which && r.find(s).trigger("focus"), n.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = r.find(".dropdown-menu" + a);
                if (l.length) {
                    var u = l.index(i.target);
                    38 == i.which && u > 0 && u--, 40 == i.which && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, n) {
        return this.each(function() {
            var r = t(this),
                s = r.data("bs.modal"),
                o = t.extend({}, i.DEFAULTS, r.data(), "object" == typeof e && e);
            s || r.data("bs.modal", s = new i(this, o)), "string" == typeof e ? s[e](n) : o.show && s.show(n)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var n = this,
            r = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var r = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), r && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            r ? n.$dialog.one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var n = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && r;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : o()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var n = t(this),
            r = n.attr("href"),
            s = t(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            o = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(r) && r
            }, s.data(), n.data());
        n.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(s, o, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.tooltip"),
                s = "object" == typeof e && e;
            (r || !/destroy|hide/.test(e)) && (r || n.data("bs.tooltip", r = new i(this, s)), "string" == typeof e && r[e]())
        })
    }
    var i = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function(e, i, n) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), s = r.length; s--;) {
            var o = r[s];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != o) {
                var a = "hover" == o ? "mouseenter" : "focusin",
                    l = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var r = this,
                s = this.tip(),
                o = this.getUID(this.type);
            this.setContent(), s.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && s.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                u = l.test(a);
            u && (a = a.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                h = s[0].offsetWidth,
                d = s[0].offsetHeight;
            if (u) {
                var p = a,
                    f = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + d > f.bottom ? "top" : "top" == a && c.top - d < f.top ? "bottom" : "right" == a && c.right + h > f.width ? "left" : "left" == a && c.left - h < f.left ? "right" : a, s.removeClass(p).addClass(a)
            }
            var m = this.getCalculatedOffset(a, c, h, d);
            this.applyPlacement(m, a);
            var g = function() {
                var t = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
            r = n[0].offsetWidth,
            s = n[0].offsetHeight,
            o = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(a) && (a = 0), e.top += o, e.left += a, t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            u = n[0].offsetHeight;
        "top" == i && u != s && (e.top = e.top + s - u);
        var c = this.getViewportAdjustedDelta(i, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var h = /top|bottom/.test(i),
            d = h ? 2 * c.left - r + l : 2 * c.top - s + u,
            p = h ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(d, n[0][p], h)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function(e) {
        function n() {
            "in" != r.hoverState && s.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), e && e()
        }
        var r = this,
            s = t(this.$tip),
            o = t.Event("hide.bs." + this.type);
        return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            n = "BODY" == i.tagName,
            r = i.getBoundingClientRect();
        null == r.width && (r = t.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top
        }));
        var s = n ? {
                top: 0,
                left: 0
            } : e.offset(),
            o = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = n ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, r, o, a, s)
    }, i.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            o = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - o.scroll,
                l = e.top + s - o.scroll + n;
            a < o.top ? r.top = o.top - a : l > o.top + o.height && (r.top = o.top + o.height - l)
        } else {
            var u = e.left - s,
                c = e.left + s + i;
            u < o.left ? r.left = o.left - u : c > o.right && (r.left = o.left + o.width - c)
        }
        return r
    }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function() {
        this.enabled = !0
    }, i.prototype.disable = function() {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.popover"),
                s = "object" == typeof e && e;
            (r || !/destroy|hide/.test(e)) && (r || n.data("bs.popover", r = new i(this, s)), "string" == typeof e && r[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.5", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"),
            t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = n, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(i, n) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.scrollspy"),
                s = "object" == typeof i && i;
            r || n.data("bs.scrollspy", r = new e(this, s)), "string" == typeof i && r[i]()
        })
    }
    e.VERSION = "3.3.5", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                r = e.data("target") || e.attr("href"),
                s = /^#./.test(r) && t(r);
            return s && s.length && s.is(":visible") && [
                [s[i]().top + n, r]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            r = this.offsets,
            s = this.targets,
            o = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return o != (t = s[s.length - 1]) && this.activate(t);
        if (o && e < r[0]) return this.activeTarget = null, this.clear();
        for (t = r.length; t--;) o != s[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.tab");
            r || n.data("bs.tab", r = new i(this)), "string" == typeof e && r[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = i.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                o = t.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            if (r.trigger(s), e.trigger(o), !o.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = t(n);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
                    r.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, n, r) {
        function s() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
        }
        var o = n.find("> .active"),
            a = r && t.support.transition && (o.length && o.hasClass("fade") || !!n.find("> .fade").length);
        o.length && a ? o.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), o.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this
    };
    var r = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.affix"),
                s = "object" == typeof e && e;
            r || n.data("bs.affix", r = new i(this, s)), "string" == typeof e && r[e]()
        })
    }
    var i = function(e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.5", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, n) {
        var r = this.$target.scrollTop(),
            s = this.$element.offset(),
            o = this.$target.height();
        if (null != i && "top" == this.affixed) return i > r ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? r + this.unpin <= s.top ? !1 : "bottom" : t - n >= r + o ? !1 : "bottom";
        var a = null == this.affixed,
            l = a ? r : s.top,
            u = a ? o : e;
        return null != i && i >= r ? "top" : null != n && l + u >= t - n ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                n = this.options.offset,
                r = n.top,
                s = n.bottom,
                o = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof n && (s = r = n), "function" == typeof r && (r = n.top(this.$element)), "function" == typeof s && (s = n.bottom(this.$element));
            var a = this.getState(o, e, r, s);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    u = t.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: o - e - s
            })
        }
    };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = n, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                n = i.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
        })
    })
}(jQuery), ! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = window.Slick || {};
    e = function() {
        function e(e, n) {
            var r, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(e),
                appendDots: t(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, e) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (e + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.hidden = "hidden", s.paused = !1, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(e), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, r = t(e).data("slick") || {}, s.options = t.extend({}, s.defaults, r, n), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, "undefined" != typeof document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.instanceUid = i++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0), s.checkResponsive(!0)
        }
        var i = 0;
        return e
    }(), e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
        var r = this;
        if ("boolean" == typeof i) n = i, i = null;
        else if (0 > i || i >= r.slideCount) return !1;
        r.unload(), "number" == typeof i ? 0 === i && 0 === r.$slides.length ? t(e).appendTo(r.$slideTrack) : n ? t(e).insertBefore(r.$slides.eq(i)) : t(e).insertAfter(r.$slides.eq(i)) : n === !0 ? t(e).prependTo(r.$slideTrack) : t(e).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e)
        }), r.$slidesCache = r.$slides, r.reinit()
    }, e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }, e.prototype.animateSlide = function(e, i) {
        var n = {},
            r = this;
        r.animateHeight(), r.options.rtl === !0 && r.options.vertical === !1 && (e = -e), r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
            left: e
        }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
            top: e
        }, r.options.speed, r.options.easing, i) : r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft), t({
            animStart: r.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: r.options.speed,
            easing: r.options.easing,
            step: function(t) {
                t = Math.ceil(t), r.options.vertical === !1 ? (n[r.animType] = "translate(" + t + "px, 0px)", r.$slideTrack.css(n)) : (n[r.animType] = "translate(0px," + t + "px)", r.$slideTrack.css(n))
            },
            complete: function() {
                i && i.call()
            }
        })) : (r.applyTransition(), e = Math.ceil(e), n[r.animType] = r.options.vertical === !1 ? "translate3d(" + e + "px, 0px, 0px)" : "translate3d(0px," + e + "px, 0px)", r.$slideTrack.css(n), i && setTimeout(function() {
            r.disableTransition(), i.call()
        }, r.options.speed))
    }, e.prototype.asNavFor = function(e) {
        var i = this,
            n = i.options.asNavFor;
        n && null !== n && (n = t(n).not(i.$slider)), null !== n && "object" == typeof n && n.each(function() {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function(t) {
        var e = this,
            i = {};
        i[e.transitionType] = e.options.fade === !1 ? e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer), t.slideCount > t.options.slidesToShow && t.paused !== !0 && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var t = this;
        t.options.infinite === !1 ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0), t.slideHandler(t.currentSlide + t.options.slidesToScroll)) : (0 === t.currentSlide - 1 && (t.direction = 1), t.slideHandler(t.currentSlide - t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll)
    }, e.prototype.buildArrows = function() {
        var e = this;
        e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function() {
        var e, i, n = this;
        if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
            for (i = '<ul class="' + n.options.dotsClass + '">', e = 0; e <= n.getDotCount(); e += 1) i += "<li>" + n.options.customPaging.call(this, n, e) + "</li>";
            i += "</ul>", n.$dots = t(i).appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }), e.$slidesCache = e.$slides, e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function() {
        var t, e, i, n, r, s, o, a = this;
        if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
            for (o = a.options.slidesPerRow * a.options.rows, r = Math.ceil(s.length / o), t = 0; r > t; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var u = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var c = t * o + (e * a.options.slidesPerRow + i);
                        s.get(c) && u.appendChild(s.get(c))
                    }
                    l.appendChild(u)
                }
                n.appendChild(l)
            }
            a.$slider.html(n), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function(e, i) {
        var n, r, s, o = this,
            a = !1,
            l = o.$slider.width(),
            u = window.innerWidth || t(window).width();
        if ("window" === o.respondTo ? s = u : "slider" === o.respondTo ? s = l : "min" === o.respondTo && (s = Math.min(u, l)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
            r = null;
            for (n in o.breakpoints) o.breakpoints.hasOwnProperty(n) && (o.originalSettings.mobileFirst === !1 ? s < o.breakpoints[n] && (r = o.breakpoints[n]) : s > o.breakpoints[n] && (r = o.breakpoints[n]));
            null !== r ? null !== o.activeBreakpoint ? (r !== o.activeBreakpoint || i) && (o.activeBreakpoint = r, "unslick" === o.breakpointSettings[r] ? o.unslick(r) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[r]), e === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(e)), a = r) : (o.activeBreakpoint = r, "unslick" === o.breakpointSettings[r] ? o.unslick(r) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[r]), e === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(e)), a = r) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, e === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(e), a = r), e || a === !1 || o.$slider.trigger("breakpoint", [o, a])
        }
    }, e.prototype.changeSlide = function(e, i) {
        var n, r, s, o = this,
            a = t(e.target);
        switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), s = 0 !== o.slideCount % o.options.slidesToScroll, n = s ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
            case "previous":
                r = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - r, !1, i);
                break;
            case "next":
                r = 0 === n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + r, !1, i);
                break;
            case "index":
                var l = 0 === e.data.index ? 0 : e.data.index || a.index() * o.options.slidesToScroll;
                o.slideHandler(o.checkNavigable(l), !1, i), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function(t) {
        var e, i, n = this;
        if (e = n.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
        else
            for (var r in e) {
                if (t < e[r]) {
                    t = i;
                    break
                }
                i = e[r]
            }
        return t
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide), e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t("li", e.$dots).off("mouseenter.slick", t.proxy(e.setPaused, e, !0)).off("mouseleave.slick", t.proxy(e.setPaused, e, !1))), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.$list.off("mouseenter.slick", t.proxy(e.setPaused, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.setPaused, e, !1)), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.html(t))
    }, e.prototype.clickHandler = function(t) {
        var e = this;
        e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, e.prototype.destroy = function(e) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
    }, e.prototype.disableTransition = function(t) {
        var e = this,
            i = {};
        i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.fadeSlide = function(t, e) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function() {
            i.disableTransition(t), e.call()
        }, i.options.speed))
    }, e.prototype.fadeSlideOut = function(t) {
        var e = this;
        e.cssTransitions === !1 ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        var t = this;
        return t.currentSlide
    }, e.prototype.getDotCount = function() {
        var t = this,
            e = 0,
            i = 0,
            n = 0;
        if (t.options.infinite === !0)
            for (; e < t.slideCount;) ++n, e = i + t.options.slidesToShow, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (t.options.centerMode === !0) n = t.slideCount;
        else
            for (; e < t.slideCount;) ++n, e = i + t.options.slidesToShow, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return n - 1
    }, e.prototype.getLeft = function(t) {
        var e, i, n, r = this,
            s = 0;
        return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), r.options.infinite === !0 ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = -1 * r.slideWidth * r.options.slidesToShow, s = -1 * i * r.options.slidesToShow), 0 !== r.slideCount % r.options.slidesToScroll && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (t > r.slideCount ? (r.slideOffset = -1 * (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth, s = -1 * (r.options.slidesToShow - (t - r.slideCount)) * i) : (r.slideOffset = -1 * r.slideCount % r.options.slidesToScroll * r.slideWidth, s = -1 * r.slideCount % r.options.slidesToScroll * i))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (t + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), r.options.centerMode === !0 && r.options.infinite === !0 ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : r.options.centerMode === !0 && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), e = r.options.vertical === !1 ? -1 * t * r.slideWidth + r.slideOffset : -1 * t * i + s, r.options.variableWidth === !0 && (n = r.$slideTrack.children(".slick-slide").eq(r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? t : t + r.options.slidesToShow), e = n[0] ? -1 * n[0].offsetLeft : 0, r.options.centerMode === !0 && (n = r.$slideTrack.children(".slick-slide").eq(r.options.infinite === !1 ? t : t + r.options.slidesToShow + 1), e = n[0] ? -1 * n[0].offsetLeft : 0, e += (r.$list.width() - n.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        var e = this;
        return e.options[t]
    }, e.prototype.getNavigableIndexes = function() {
        var t, e = this,
            i = 0,
            n = 0,
            r = [];
        for (e.options.infinite === !1 ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > i;) r.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return r
    }, e.prototype.getSlick = function() {
        return this
    }, e.prototype.getSlideCount = function() {
        var e, i, n, r = this;
        return n = r.options.centerMode === !0 ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0, r.options.swipeToSlide === !0 ? (r.$slideTrack.find(".slick-slide").each(function(e, s) {
            return s.offsetLeft - n + t(s).outerWidth() / 2 > -1 * r.swipeLeft ? (i = s, !1) : void 0
        }), e = Math.abs(t(i).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        var i = this;
        i.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }, e.prototype.init = function(e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots()), e && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA()
    }, e.prototype.initArrowEvents = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on("click.slick", {
            message: "previous"
        }, t.changeSlide), t.$nextArrow.on("click.slick", {
            message: "next"
        }, t.changeSlide))
    }, e.prototype.initDotEvents = function() {
        var e = this;
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.setPaused, e, !0)).on("mouseleave.slick", t.proxy(e.setPaused, e, !1))
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.$list.on("mouseenter.slick", t.proxy(e.setPaused, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.setPaused, e, !1)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.initUI = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show(), t.options.autoplay === !0 && t.autoPlay()
    }, e.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
            data: {
                message: "next"
            }
        }))
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each(function() {
                var e = t(this),
                    i = t(this).attr("data-lazy"),
                    n = document.createElement("img");
                n.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        e.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                }, n.src = i
            })
        }
        var i, n, r, s, o = this;
        o.options.centerMode === !0 ? o.options.infinite === !0 ? (r = o.currentSlide + (o.options.slidesToShow / 2 + 1), s = r + o.options.slidesToShow + 2) : (r = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), s = 2 + (o.options.slidesToShow / 2 + 1) + o.currentSlide) : (r = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, s = r + o.options.slidesToShow, o.options.fade === !0 && (r > 0 && r--, s <= o.slideCount && s++)), i = o.$slider.find(".slick-slide").slice(r, s), e(i), o.slideCount <= o.options.slidesToShow ? (n = o.$slider.find(".slick-slide"), e(n)) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? (n = o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow), e(n)) : 0 === o.currentSlide && (n = o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow), e(n))
    }, e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(), t.$slideTrack.css({
            opacity: 1
        }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function() {
        var t = this;
        t.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function() {
        var t = this;
        t.checkResponsive(), t.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function() {
        var t = this;
        t.autoPlayClear(), t.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.paused = !1, t.autoPlay()
    }, e.prototype.postSlide = function(t) {
        var e = this;
        e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay === !0 && e.paused === !1 && e.autoPlay(), e.options.accessibility === !0 && e.initADA()
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        var t = this;
        t.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }, e.prototype.progressiveLazyLoad = function() {
        var e, i, n = this;
        e = t("img[data-lazy]", n.$slider).length, e > 0 && (i = t("img[data-lazy]", n.$slider).first(), i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function() {
            i.removeAttr("data-lazy"), n.progressiveLazyLoad(), n.options.adaptiveHeight === !0 && n.setPosition()
        }).error(function() {
            i.removeAttr("data-lazy"), n.progressiveLazyLoad()
        }))
    }, e.prototype.refresh = function(e) {
        var i = this,
            n = i.currentSlide;
        i.destroy(!0), t.extend(i, i.initials, {
            currentSlide: n
        }), i.init(), e || i.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function() {
        var e, i, n, r = this,
            s = r.options.responsive || null;
        if ("array" === t.type(s) && s.length) {
            r.respondTo = r.options.respondTo || "window";
            for (e in s)
                if (n = r.breakpoints.length - 1, i = s[e].breakpoint, s.hasOwnProperty(e)) {
                    for (; n >= 0;) r.breakpoints[n] && r.breakpoints[n] === i && r.breakpoints.splice(n, 1), n--;
                    r.breakpoints.push(i), r.breakpointSettings[i] = s[e].settings
                }
            r.breakpoints.sort(function(t, e) {
                return r.options.mobileFirst ? t - e : e - t
            })
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses(0), e.setPosition(), e.$slider.trigger("reInit", [e]), e.options.autoplay === !0 && e.focusHandler()
    }, e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
        var n = this;
        return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, n.slideCount < 1 || 0 > t || t > n.slideCount - 1 ? !1 : (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
    }, e.prototype.setCSS = function(t) {
        var e, i, n = this,
            r = {};
        n.options.rtl === !0 && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", r[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(r) : (r = {}, n.cssTransitions === !1 ? (r[n.animType] = "translate(" + e + ", " + i + ")",
            n.$slideTrack.css(r)) : (r[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(r)))
    }, e.prototype.setDimensions = function() {
        var t = this;
        t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, e.prototype.setFade = function() {
        var e, i = this;
        i.$slides.each(function(n, r) {
            e = -1 * i.slideWidth * n, t(r).css(i.options.rtl === !0 ? {
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            } : {
                position: "relative",
                left: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function(e, i, n) {
        var r, s, o = this;
        if ("responsive" === e && "array" === t.type(i))
            for (s in i)
                if ("array" !== t.type(o.options.responsive)) o.options.responsive = [i[s]];
                else {
                    for (r = o.options.responsive.length - 1; r >= 0;) o.options.responsive[r].breakpoint === i[s].breakpoint && o.options.responsive.splice(r, 1), r--;
                    o.options.responsive.push(i[s])
                }
        else o.options[e] = i;
        n === !0 && (o.unload(), o.reinit())
    }, e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, e.prototype.setProps = function() {
        var t = this,
            e = document.body.style;
        t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = null !== t.animType && t.animType !== !1
    }, e.prototype.setSlideClasses = function(t) {
        var e, i, n, r, s = this;
        i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), s.options.centerMode === !0 ? (e = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = s.slideCount % s.options.slidesToShow, n = s.options.infinite === !0 ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e, i, n, r = this;
        if (r.options.fade === !0 && (r.options.centerMode = !1), r.options.infinite === !0 && r.options.fade === !1 && (i = null, r.slideCount > r.options.slidesToShow)) {
            for (n = r.options.centerMode === !0 ? r.options.slidesToShow + 1 : r.options.slidesToShow, e = r.slideCount; e > r.slideCount - n; e -= 1) i = e - 1, t(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
            for (e = 0; n > e; e += 1) i = e, t(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
            r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                t(this).attr("id", "")
            })
        }
    }, e.prototype.setPaused = function(t) {
        var e = this;
        e.options.autoplay === !0 && e.options.pauseOnHover === !0 && (e.paused = t, t ? e.autoPlayClear() : e.autoPlay())
    }, e.prototype.selectHandler = function(e) {
        var i = this,
            n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            r = parseInt(n.attr("data-slick-index"));
        return r || (r = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(r), void i.asNavFor(r)) : void i.slideHandler(r)
    }, e.prototype.slideHandler = function(t, e, i) {
        var n, r, s, o, a = null,
            l = this;
        return e = e || !1, l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === t || l.slideCount <= l.options.slidesToShow ? void 0 : (e === !1 && l.asNavFor(t), n = t, a = l.getLeft(n), o = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? o : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > t || t > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(o, function() {
            l.postSlide(n)
        }) : l.postSlide(n))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > t || t > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(o, function() {
            l.postSlide(n)
        }) : l.postSlide(n))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), r = 0 > n ? 0 !== l.slideCount % l.options.slidesToScroll ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? 0 !== l.slideCount % l.options.slidesToScroll ? 0 : n - l.slideCount : n, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, r]), s = l.currentSlide, l.currentSlide = r, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (i !== !0 ? (l.fadeSlideOut(s), l.fadeSlide(r, function() {
            l.postSlide(r)
        })) : l.postSlide(r), void l.animateHeight()) : void(i !== !0 ? l.animateSlide(a, function() {
            l.postSlide(r)
        }) : l.postSlide(r))))
    }, e.prototype.startLoad = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function() {
        var t, e, i, n, r = this;
        return t = r.touchObject.startX - r.touchObject.curX, e = r.touchObject.startY - r.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? r.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? r.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? r.options.rtl === !1 ? "right" : "left" : r.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "left" : "right" : "vertical"
    }, e.prototype.swipeEnd = function() {
        var t, e = this;
        if (e.dragging = !1, e.shouldClick = e.touchObject.swipeLength > 10 ? !1 : !0, void 0 === e.touchObject.curX) return !1;
        if (e.touchObject.edgeHit === !0 && e.$slider.trigger("edge", [e, e.swipeDirection()]), e.touchObject.swipeLength >= e.touchObject.minSwipe) switch (e.swipeDirection()) {
            case "left":
                t = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide + e.getSlideCount()) : e.currentSlide + e.getSlideCount(), e.slideHandler(t), e.currentDirection = 0, e.touchObject = {}, e.$slider.trigger("swipe", [e, "left"]);
                break;
            case "right":
                t = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide - e.getSlideCount()) : e.currentSlide - e.getSlideCount(), e.slideHandler(t), e.currentDirection = 1, e.touchObject = {}, e.$slider.trigger("swipe", [e, "right"])
        } else e.touchObject.startX !== e.touchObject.curX && (e.slideHandler(e.currentSlide), e.touchObject = {})
    }, e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
        }
    }, e.prototype.swipeMove = function(t) {
        var e, i, n, r, s, o = this;
        return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !o.dragging || s && 1 !== s.length ? !1 : (e = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, o.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), o.options.verticalSwiping === !0 && (o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2)))), i = o.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && o.touchObject.swipeLength > 4 && t.preventDefault(), r = (o.options.rtl === !1 ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), o.options.verticalSwiping === !0 && (r = o.touchObject.curY > o.touchObject.startY ? 1 : -1), n = o.touchObject.swipeLength, o.touchObject.edgeHit = !1, o.options.infinite === !1 && (0 === o.currentSlide && "right" === i || o.currentSlide >= o.getDotCount() && "left" === i) && (n = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), o.swipeLeft = o.options.vertical === !1 ? e + n * r : e + n * (o.$list.height() / o.listWidth) * r, o.options.verticalSwiping === !0 && (o.swipeLeft = e + n * r), o.options.fade === !0 || o.options.touchMove === !1 ? !1 : o.animating === !0 ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft)) : void 0)
    }, e.prototype.swipeStart = function(t) {
        var e, i = this;
        return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, e.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy()
    }, e.prototype.updateArrows = function() {
        var t, e = this;
        t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, e.prototype.visibility = function() {
        var t = this;
        document[t.hidden] ? (t.paused = !0, t.autoPlayClear()) : t.options.autoplay === !0 && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function() {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
            t(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + e.instanceUid + i
            })
        }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
            t(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + i,
                id: "slick-slide" + e.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
    }, e.prototype.activateADA = function() {
        var t = this,
            e = t.$slider.find("*").is(":focus");
        t.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false",
            tabindex: "0"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        }), e && t.$slideTrack.find(".slick-active").focus()
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.on("focus.slick blur.slick", "*", function(i) {
            i.stopImmediatePropagation();
            var n = t(this);
            setTimeout(function() {
                e.isPlay && (n.is(":focus") ? (e.autoPlayClear(), e.paused = !0) : (e.paused = !1, e.autoPlay()))
            }, 0)
        })
    }, t.fn.slick = function() {
        var t, i = this,
            n = arguments[0],
            r = Array.prototype.slice.call(arguments, 1),
            s = i.length,
            o = 0;
        for (o; s > o; o++)
            if ("object" == typeof n || "undefined" == typeof n ? i[o].slick = new e(i[o], n) : t = i[o].slick[n].apply(i[o].slick, r), "undefined" != typeof t) return t;
        return i
    }
});
var module, countdown = function(t) {
    "use strict";

    function e(t, e) {
        var i = t.getTime();
        return t.setMonth(t.getMonth() + e), Math.round((t.getTime() - i) / F)
    }

    function i(t) {
        var e = t.getTime(),
            i = new Date(e);
        return i.setMonth(t.getMonth() + 1), Math.round((i.getTime() - e) / F)
    }

    function n(t) {
        var e = t.getTime(),
            i = new Date(e);
        return i.setFullYear(t.getFullYear() + 1), Math.round((i.getTime() - e) / F)
    }

    function r(t, e) {
        if (e = e instanceof Date || null !== e && isFinite(e) ? new Date(+e) : new Date, !t) return e;
        var i = +t.value || 0;
        return i ? (e.setTime(e.getTime() + i), e) : (i = +t.milliseconds || 0, i && e.setMilliseconds(e.getMilliseconds() + i), i = +t.seconds || 0, i && e.setSeconds(e.getSeconds() + i), i = +t.minutes || 0, i && e.setMinutes(e.getMinutes() + i), i = +t.hours || 0, i && e.setHours(e.getHours() + i), i = +t.weeks || 0, i && (i *= H), i += +t.days || 0, i && e.setDate(e.getDate() + i), i = +t.months || 0, i && e.setMonth(e.getMonth() + i), i = +t.millennia || 0, i && (i *= W), i += +t.centuries || 0, i && (i *= B), i += +t.decades || 0, i && (i *= q), i += +t.years || 0, i && e.setFullYear(e.getFullYear() + i), e)
    }

    function s(t, e) {
        return w(t) + (1 === t ? m[e] : g[e])
    }

    function o() {}

    function a(t, e) {
        switch (e) {
            case "seconds":
                if (t.seconds !== j || isNaN(t.minutes)) return;
                t.minutes++, t.seconds = 0;
            case "minutes":
                if (t.minutes !== I || isNaN(t.hours)) return;
                t.hours++, t.minutes = 0;
            case "hours":
                if (t.hours !== L || isNaN(t.days)) return;
                t.days++, t.hours = 0;
            case "days":
                if (t.days !== H || isNaN(t.weeks)) return;
                t.weeks++, t.days = 0;
            case "weeks":
                if (t.weeks !== i(t.refMonth) / H || isNaN(t.months)) return;
                t.months++, t.weeks = 0;
            case "months":
                if (t.months !== z || isNaN(t.years)) return;
                t.years++, t.months = 0;
            case "years":
                if (t.years !== q || isNaN(t.decades)) return;
                t.decades++, t.years = 0;
            case "decades":
                if (t.decades !== B || isNaN(t.centuries)) return;
                t.centuries++, t.decades = 0;
            case "centuries":
                if (t.centuries !== W || isNaN(t.millennia)) return;
                t.millennia++, t.centuries = 0
        }
    }

    function l(t, e, i, n, r, s) {
        return t[i] >= 0 && (e += t[i], delete t[i]), e /= r, 1 >= e + 1 ? 0 : t[n] >= 0 ? (t[n] = +(t[n] + e).toFixed(s), a(t, n), 0) : e
    }

    function u(t, e) {
        var r = l(t, 0, "milliseconds", "seconds", M, e);
        if (r && (r = l(t, r, "seconds", "minutes", j, e), r && (r = l(t, r, "minutes", "hours", I, e), r && (r = l(t, r, "hours", "days", L, e), r && (r = l(t, r, "days", "weeks", H, e), r && (r = l(t, r, "weeks", "months", i(t.refMonth) / H, e), r && (r = l(t, r, "months", "years", n(t.refMonth) / i(t.refMonth), e), r && (r = l(t, r, "years", "decades", q, e), r && (r = l(t, r, "decades", "centuries", B, e), r && (r = l(t, r, "centuries", "millennia", W, e))))))))))) throw new Error("Fractional unit overflow")
    }

    function c(t) {
        var i;
        for (t.milliseconds < 0 ? (i = U(-t.milliseconds / M), t.seconds -= i, t.milliseconds += i * M) : t.milliseconds >= M && (t.seconds += X(t.milliseconds / M), t.milliseconds %= M), t.seconds < 0 ? (i = U(-t.seconds / j), t.minutes -= i, t.seconds += i * j) : t.seconds >= j && (t.minutes += X(t.seconds / j), t.seconds %= j), t.minutes < 0 ? (i = U(-t.minutes / I), t.hours -= i, t.minutes += i * I) : t.minutes >= I && (t.hours += X(t.minutes / I), t.minutes %= I), t.hours < 0 ? (i = U(-t.hours / L), t.days -= i, t.hours += i * L) : t.hours >= L && (t.days += X(t.hours / L), t.hours %= L); t.days < 0;) t.months--, t.days += e(t.refMonth, 1);
        t.days >= H && (t.weeks += X(t.days / H), t.days %= H), t.months < 0 ? (i = U(-t.months / z), t.years -= i, t.months += i * z) : t.months >= z && (t.years += X(t.months / z), t.months %= z), t.years >= q && (t.decades += X(t.years / q), t.years %= q, t.decades >= B && (t.centuries += X(t.decades / B), t.decades %= B, t.centuries >= W && (t.millennia += X(t.centuries / W), t.centuries %= W)))
    }

    function h(t, i, n, r) {
        var s = 0;
        !(i & N) || s >= n ? (t.centuries += t.millennia * W, delete t.millennia) : t.millennia && s++, !(i & D) || s >= n ? (t.decades += t.centuries * B, delete t.centuries) : t.centuries && s++, !(i & E) || s >= n ? (t.years += t.decades * q, delete t.decades) : t.decades && s++, !(i & O) || s >= n ? (t.months += t.years * z, delete t.years) : t.years && s++, !(i & A) || s >= n ? (t.months && (t.days += e(t.refMonth, t.months)), delete t.months, t.days >= H && (t.weeks += X(t.days / H), t.days %= H)) : t.months && s++, !(i & $) || s >= n ? (t.days += t.weeks * H, delete t.weeks) : t.weeks && s++, !(i & P) || s >= n ? (t.hours += t.days * L, delete t.days) : t.days && s++, !(i & C) || s >= n ? (t.minutes += t.hours * I, delete t.hours) : t.hours && s++, !(i & S) || s >= n ? (t.seconds += t.minutes * j, delete t.minutes) : t.minutes && s++, !(i & k) || s >= n ? (t.milliseconds += t.seconds * M, delete t.seconds) : t.seconds && s++, (!(i & T) || s >= n) && u(t, r)
    }

    function d(t, e, i, n, r, s) {
        var o = new Date;
        if (t.start = e = e || o, t.end = i = i || o, t.units = n, t.value = i.getTime() - e.getTime(), t.value < 0) {
            var a = i;
            i = e, e = a
        }
        t.refMonth = new Date(e.getFullYear(), e.getMonth(), 15, 12, 0, 0);
        try {
            t.millennia = 0, t.centuries = 0, t.decades = 0, t.years = i.getFullYear() - e.getFullYear(), t.months = i.getMonth() - e.getMonth(), t.weeks = 0, t.days = i.getDate() - e.getDate(), t.hours = i.getHours() - e.getHours(), t.minutes = i.getMinutes() - e.getMinutes(), t.seconds = i.getSeconds() - e.getSeconds(), t.milliseconds = i.getMilliseconds() - e.getMilliseconds(), c(t), h(t, n, r, s)
        } finally {
            delete t.refMonth
        }
        return t
    }

    function p(t) {
        return t & T ? M / 30 : t & k ? M : t & S ? M * j : t & C ? M * j * I : t & P ? M * j * I * L : M * j * I * L * H
    }

    function f(t, e, i, n, s) {
        var a;
        i = +i || R, n = n > 0 ? n : 0 / 0, s = s > 0 ? 20 > s ? Math.round(s) : 20 : 0;
        var l = null;
        "function" == typeof t ? (a = t, t = null) : t instanceof Date || (null !== t && isFinite(t) ? t = new Date(+t) : ("object" == typeof l && (l = t), t = null));
        var u = null;
        if ("function" == typeof e ? (a = e, e = null) : e instanceof Date || (null !== e && isFinite(e) ? e = new Date(+e) : ("object" == typeof e && (u = e), e = null)), l && (t = r(l, e)), u && (e = r(u, t)), !t && !e) return new o;
        if (!a) return d(new o, t, e, i, n, s);
        var c, h = p(i),
            f = function() {
                a(d(new o, t, e, i, n, s), c)
            };
        return f(), c = setInterval(f, h)
    }
    var m, g, v, y, _, b, w, x, T = 1,
        k = 2,
        S = 4,
        C = 8,
        P = 16,
        $ = 32,
        A = 64,
        O = 128,
        E = 256,
        D = 512,
        N = 1024,
        R = O | A | P | C | S | k,
        M = 1e3,
        j = 60,
        I = 60,
        L = 24,
        F = L * I * j * M,
        H = 7,
        z = 12,
        q = 10,
        B = 10,
        W = 10,
        U = Math.ceil,
        X = Math.floor,
        Y = 0,
        V = 1,
        Q = 2,
        G = 3,
        Z = 4,
        J = 5,
        K = 6,
        tt = 7,
        et = 8,
        it = 9,
        nt = 10;
    o.prototype.toString = function(t) {
        var e = x(this),
            i = e.length;
        if (!i) return t ? "" + t : _;
        if (1 === i) return e[0];
        var n = v + e.pop();
        return e.join(y) + n
    }, o.prototype.toHTML = function(t, e) {
        t = t || "span";
        var i = x(this),
            n = i.length;
        if (!n) return e = e || _, e ? "<" + t + ">" + e + "</" + t + ">" : e;
        for (var r = 0; n > r; r++) i[r] = "<" + t + ">" + i[r] + "</" + t + ">";
        if (1 === n) return i[0];
        var s = v + i.pop();
        return i.join(y) + s
    }, o.prototype.addTo = function(t) {
        return r(this, t)
    }, x = function(t) {
        var e = [],
            i = t.millennia;
        return i && e.push(b(i, nt)), i = t.centuries, i && e.push(b(i, it)), i = t.decades, i && e.push(b(i, et)), i = t.years, i && e.push(b(i, tt)), i = t.months, i && e.push(b(i, K)), i = t.weeks, i && e.push(b(i, J)), i = t.days, i && e.push(b(i, Z)), i = t.hours, i && e.push(b(i, G)), i = t.minutes, i && e.push(b(i, Q)), i = t.seconds, i && e.push(b(i, V)), i = t.milliseconds, i && e.push(b(i, Y)), e
    }, f.MILLISECONDS = T, f.SECONDS = k, f.MINUTES = S, f.HOURS = C, f.DAYS = P, f.WEEKS = $, f.MONTHS = A, f.YEARS = O, f.DECADES = E, f.CENTURIES = D, f.MILLENNIA = N, f.DEFAULTS = R, f.ALL = N | D | E | O | A | $ | P | C | S | k | T;
    var rt = f.setFormat = function(t) {
            if (t) {
                if ("singular" in t || "plural" in t) {
                    var e = t.singular || [];
                    e.split && (e = e.split("|"));
                    var i = t.plural || [];
                    i.split && (i = i.split("|"));
                    for (var n = Y; nt >= n; n++) m[n] = e[n] || m[n], g[n] = i[n] || g[n]
                }
                "string" == typeof t.last && (v = t.last), "string" == typeof t.delim && (y = t.delim), "string" == typeof t.empty && (_ = t.empty), "function" == typeof t.formatNumber && (w = t.formatNumber), "function" == typeof t.formatter && (b = t.formatter)
            }
        },
        st = f.resetFormat = function() {
            m = " millisecond| second| minute| hour| day| week| month| year| decade| century| millennium".split("|"), g = " milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia".split("|"), v = " and ", y = ", ", _ = "", w = function(t) {
                return t
            }, b = s
        };
    return f.setLabels = function(t, e, i, n, r, s, o) {
        rt({
            singular: t,
            plural: e,
            last: i,
            delim: n,
            empty: r,
            formatNumber: s,
            formatter: o
        })
    }, f.resetLabels = st, st(), t && t.exports ? t.exports = f : "function" == typeof window.define && "undefined" != typeof window.define.amd && window.define("countdown", [], function() {
        return f
    }), f
}(module);
//# sourceMappingURL=vendor.js.map