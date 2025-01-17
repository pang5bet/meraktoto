! function(c, r) {
    var i, o, t, a, s, l, e, n = "26",
        u = {
            epssw: {
                stable: ["/lzd_sec/epssw/0.0.19/epssw.js"],
                gray: ["/lzd_sec/epssw/0.0.21/epssw.js"],
                ratio: 1e4
            }
        };

    function d(t) {
        return t.hasAttribute ? t.src : t.getAttribute("src", 4)
    }

    function p(t, e, n) {
        0 === t.indexOf("/") && (t = o + t);
        var a = r.currentScript;
        e && "loading" === r.readyState && a && !a.async ? (e = '<script src="'.concat(t, '" crossorigin referrerPolicy="unsafe-url" ').concat(n ? 'onload="'.concat(n, '()"') : "", "><\/script>"), r.write(e)) : ((a = r.createElement("script")).async = !1, a.crossOrigin = "", a.referrerPolicy = "unsafe-url", a.src = t, a.onload = "string" == typeof n ? c[n] : n, (e = r.getElementsByTagName("script")[0]) && e.parentNode ? e.parentNode.insertBefore(a, e) : (r.head || r.body).appendChild(a))
    }

    function f(t) {
        var e = void 0,
            n = "";
        try {
            n = r.cookie
        } catch (t) {
            return e
        }
        var t = t + "=",
            a = t,
            o = n.indexOf(a);
        return -1 !== o && -1 !== (o = 0 < o ? n.indexOf(a = "; " + t) : o) && (t = o + a.length, -1 === (o = n.indexOf("; ", t)) && (o = n.length), e = n.substring(t, o)), e
    }

    function m(t, e, n, a, o) {
        t = t + "=" + e;
        a && (t += "; domain=" + a), o && (t += "; path=" + o), n && (t += "; expires=" + n), r.cookie = t
    }

    function g(t) {
        for (var e = 0, n = 0; n < t.length; n++) e = 31 * e + t.charCodeAt(n) & 4294967295;
        return e
    }

    function h(t, e) {
        (new Image).src = "https://epss.alibaba-inc.com/report/web-e?host=".concat(location.hostname, "&jf=lwsc&cv=").concat(encodeURIComponent(t), "&jv=").concat(n, "&m=").concat(encodeURIComponent(e))
    }

    function b(t) {
        h("error", encodeURIComponent("error=".concat(t.message, "&stack=").concat(t.stack)))
    }

    function v() {
        for (var t = [], e = (t.push(2), +new Date), n = 0; n < 6; n++) {
            var a = Math.pow(256, 5 - n);
            t.push(e / a | 0), e %= a
        }
        for (var o = 0; o < 8; o++) t.push(255 * Math.random() & 255);
        for (var r, c, i, s, l, u, d = function() {
                for (var t = navigator.userAgent, e = 65535 & g(((e = t.match(/\([^)]+\)/g)) && e[0] || "").replace(/Build\/[^;)]+/g, "").replace(/\d[\d._]*/g, "#")), n = t.match(/\w+\/\d[\d.]*/g), a = [], o = [], r = 0; n && r < n.length; r++) {
                    var c = n[r].split("/");
                    a.push(c[0]), o.push(c[1])
                }
                return [e, 65535 & g(a.join("/")), 65535 & g(o.join("/"))]
            }(), p = (t.push(d[0] >> 8), t.push(255 & d[0]), t.push(d[1] >> 8), t.push(255 & d[1]), t.push(d[2] >> 8), t.push(255 & d[2]), t), f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", m = "", h = 0; h < p.length;) i = (r = p[h++]) >> 2, s = (3 & r) << 4 | (r = p[h++]) >> 4, l = (15 & r) << 2 | (c = p[h++]) >> 6, u = 63 & c, isNaN(r) ? l = u = 64 : isNaN(c) && (u = 64), m = m + f.charAt(i) + f.charAt(s) + f.charAt(l) + f.charAt(u);
        return m
    }

    function C() {
        var t = (t = f("lwrid")) || encodeURIComponent(v()),
            e = "lwrid",
            n = t,
            t = 31536e6,
            a = location.hostname,
            o = new Date(+new Date + t).toUTCString(),
            r = a.split("."),
            c = r.length;
        if (1 === c) m(e, n, o, r[0], "/");
        else {
            5 < c && (c = 5);
            for (var a = r.pop(), i = 2; i <= c && (m(e, n, o, a = r.pop() + "." + a, "/"), f(e) !== n); i++);
        }
    }

    function x(t) {
        var n, e, a, o = (location.protocol + "//" + location.host + location.pathname).substr(0, 128);
        i = {
            getFYToken: function() {
                return "defaultFY0_fymodule_not_loaded@@" + o + "@@" + (new Date).getTime()
            },
            getUidToken: function() {
                return "defaultUID0_fymodule_not_loaded@@" + o + "@@" + (new Date).getTime()
            }
        }, Object.assign && (n = Object.assign, Object.assign = function() {
            var t, e = n.apply(Object, arguments);
            return e && e.isSec && e.api && e.appKey && i && (delete e.isSec, (t = e.ext_headers || {})["x-ua"] = i.getFYToken(), t["x-umidtoken"] = i.getUidToken(), e.ext_headers = t), e
        }), (t = t || {}).location || (t.location = "lazada"), c.AWSC ? i = c.AWSC.configFYSyncEx(t) : (e = +new Date, a = setInterval(function() {
            c.AWSC ? (clearInterval(a), i = c.AWSC.configFYSyncEx(t)) : 5e3 < +new Date - e && clearInterval(a)
        }, 100))
    }

    function y(t) {
        return u[t]
    }

    function S(t) {
        clearTimeout(t.timer), t.timer = 0;
        for (var e = (t.callbacks || []).slice(), n = (t.callbacks = [], t.state), a = t.obj, o = 0; o < e.length; o++) {
            var r = e[o];
            if (a && a.init) t.init(r);
            else try {
                "function" == typeof r ? r(n, a) : r && "function" == typeof r.callback && r.callback(n, a)
            } catch (t) {
                c.console && console.error(t)
            }
            e[o] = void 0
        }
    }

    function w(t, e, n) {
        t = y(t);
        t && (t.state = "loaded", t.obj = e, S(t))
    }
    try {
        c.LWSC || (C(), t = function() {
            for (var t = r.getElementsByTagName("script"), e = 0; e < t.length; e++) {
                var n = d(t[e]);
                if (-1 < n.indexOf("/lzd_sec/LWSC")) return n
            }
            return r.currentScript ? d(r.currentScript) : t[t.length - 1]
        }(), Math.random() < .01 && h("src", "src=" + t + "&href=" + location.href), e = t, o || (o = "https://g.alicdn.com", e && (-1 < e.indexOf("o.alicdn.com") || -1 < e.indexOf("g.lazcdn.com") ? o = "https://g.lazcdn.com/g" : -1 < e.indexOf("assets.alicdn.com") ? o = "https://assets.alicdn.com/g" : -1 < e.indexOf("aeis.alicdn.com") ? o = "https://aeis.alicdn.com" : -1 < e.indexOf("dev.g.alicdn.com") && (o = "https://dev.g.alicdn.com"))), l = [], !c.baxiaCommon && c.Proxy && (c.baxiaCommon = new Proxy({}, {
            get: function(t, e, n) {
                return function() {
                    l.push([e, arguments])
                }
            }
        })), c.__bxEntryCB__ = function() {
            try {
                for (var t = 0; c.baxiaCommon && t < l.length; t++) {
                    var e = l[t][0],
                        n = l[t][1];
                    c.baxiaCommon[e].apply(c.baxiaCommon, n)
                }
            } catch (t) {
                b(t)
            }
        }, p("/??/AWSC/AWSC/awsc.js,/sd/baxia-entry/baxiaCommon.js,secdev/entry/index.js", !0, "__bxEntryCB__"), c.LWSC = {
            use: function(t, e, n) {
                var a = y(t);
                if (!a) return c.AWSC && c.AWSC.use(t, e, n);
                if (a.callbacks = a.callbacks || [], a.callbacks.push(e), void 0 === a.state || "timeout" === a.state) {
                    a.timer = setTimeout(function() {
                        a.state = "timeout", S(a)
                    }, n && n.timeout || 3e3), a.state = "loading";
                    for (var o = c["LWSC_SPECIFY_".concat(t.toUpperCase(), "MODULE_ADDRESSES")] || (1e4 * Math.random() < a.ratio ? a.gray : a.stable), r = 0; r < o.length; r++) p(o[r], !1)
                } else "loaded" === a.state && S(a)
            },
            initLWSC: function(t) {
                return t.uabOptions = t.uabOptions || {}, t.uabOptions.location = t.uabOptions.location || "lazada", c.baxiaCommon && c.baxiaCommon.init(t)
            },
            initMtopSecurity: x,
            register: w
        }, c.LWSCInner = {
            register: w
        }, a = 0, s = Math.random(), function n() {
            c.LWSC.use("epssw", function(t, e) {
                (1 === ++a && s < .01 || 2 === a && s < .1 || 2 < a) && h("epssw", t + a), "timeout" === t && a < 3 && n()
            }, {
                timeout: 3e3
            })
        }())
    } catch (t) {
        b(t)
    }
}(window, document);