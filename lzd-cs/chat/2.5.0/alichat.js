! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(exports, e, n) {
        t.o(exports, e) || Object.defineProperty(exports, e, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "/build/", t(t.s = 401)
}({
    106: function(e, t, n) {
        "use strict";
        var r = n(11),
            o = n(16);
        t.a = function() {
            return r.b.cscMedusaDebug && "live" !== o.a.env ? function(e) {
                return e
            } : function(e, t) {
                var n = window.__cscMessages__[e];
                if (t && n)
                    for (var r in t) n = n.replace(new RegExp("%{0,1}{".concat(r, "}"), "g"), t[r] || "");
                return n || e
            }
        }()
    },
    11: function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e) {
            var t = e.announcementEnabled,
                n = e.isMobile,
                r = e.bot,
                o = void 0 === r ? {} : r,
                i = o.hmacToken;
            d.chatConfig = {
                announcementEnabled: t,
                isMobile: n
            }, d.hmacToken = i
        }
        t.a = i;
        var a = n(6),
            c = n(22),
            u = window,
            s = u.g_config,
            f = void 0 === s ? {} : s,
            d = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach(function(t) {
                        o(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }({}, f),
            l = Object(c.b)("vendor"),
            p = "1" === Object(c.b)("anonymous"),
            m = Object(c.b)("csc-chat"),
            g = "1" === Object(c.b)("csc-agent"),
            h = Object(c.b)("csc-env") || Object(c.b)("cscEnv"),
            v = "1" === Object(c.b)("live-up"),
            _ = Object(c.b)("csc-page"),
            b = Object(c.b)("announcementId"),
            w = "1" === Object(c.b)("csc-medusa"),
            y = "1" === Object(c.b)("csc-open") || "1" === Object(c.b)("live-chat"),
            O = Object(c.b)("csc-bot-channel"),
            R = Object(c.b)("xspace-env");
        l && (d.cscVendor = l), p && (d.cscAnonymous = p), m && (d.cscChatWith = m), g && (d.cscAgentOnly = !0), h && (d.cscEnv = h), v && (d.cscLiveUp = v), _ && (d.cscPage = _), w && (d.cscMedusaDebug = w), y && (d.cscOpen = y), O && (d.cscBotChannel = O), d.cscXEnv = R, d.cscDisabledAutoInit = d.cscDisabledAutoInit || d.disabledAutoInit, g && (d.cscChatWith = a.b), d.cscClient = d.cscClient || a.i, d.isGspSeller = d.cscClient === a.w, d.isSeller = d.isGspSeller || d.cscClient === a.H, d.isMinishop = d.cscClient === a.C, d.enableCsat = "1" === Object(c.b)("csat"), d.announcementId = b, d.chatConfig = {}, t.b = d
    },
    12: function(e, exports) {
        var t;
        t = function() {
            return this
        }();
        try {
            t = t || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (t = window)
        }
        e.exports = t
    },
    124: function(e, exports) {
        e.exports = {
            container: "_9hPS2"
        }
    },
    125: function(e, t, n) {
        "use strict";

        function r() {
            var e = window,
                t = e.g_config,
                n = void 0 === t ? {} : t;
            if (n.cscClient) return n.cscClient;
            var r = window.location.hostname;
            return r.includes("gsp") ? "gsp" : r.includes("sellercenter") ? "seller" : "buyer"
        }
        n.d(t, "a", function() {
            return o
        });
        var o = r()
    },
    15: function(e, exports, t) {
        "use strict";
        (function(n) {
            function r(e, t) {
                !o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var o = t(7),
                i = t(58),
                a = {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                c = {
                    adapter: function() {
                        var e;
                        return "undefined" != typeof XMLHttpRequest ? e = t(26) : void 0 !== n && (e = t(26)), e
                    }(),
                    transformRequest: [function(e, t) {
                        return i(t, "Content-Type"), o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e) ? e : o.isArrayBufferView(e) ? e.buffer : o.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : o.isObject(e) ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                    }],
                    transformResponse: [function(e) {
                        if ("string" == typeof e) try {
                            e = JSON.parse(e)
                        } catch (e) {}
                        return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    validateStatus: function(e) {
                        return e >= 200 && e < 300
                    }
                };
            c.headers = {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }, o.forEach(["delete", "get", "head"], function(e) {
                c.headers[e] = {}
            }), o.forEach(["post", "put", "patch"], function(e) {
                c.headers[e] = o.merge(a)
            }), e.exports = c
        }).call(exports, t(57))
    },
    16: function(e, t, n) {
        "use strict";

        function r() {
            return /windows phone/i.test(a) ? "Windows Phone" : /android/i.test(a) ? "Android" : /iPad|iPhone|iPod/.test(a) && !window.MSStream ? "iOS" : "unknown"
        }

        function o() {
            if ("function" == typeof callNative) return "app";
            var e = a.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/);
            return e && e.length ? "webview" : "browser"
        }
        var i = n(11),
            a = navigator.userAgent || navigator.vendor || window.opera;
        t.a = {
            isWebview: function() {
                return "webview" === o()
            }(),
            container: o(),
            platform: r(),
            env: function() {
                var e = i.b.cscEnv;
                return e || (document.location.host.match(/-pre\.|-staging\.|-p\./g) ? "pre" : "live")
            }(),
            venture: function() {
                var e = i.b.regionID;
                return e ? e.toLowerCase() : window.location.hostname.split(".").pop().toLowerCase()
            }(),
            iOSVersion: function() {
                var e = a.indexOf("OS ");
                return "iOS" === r() && e > -1 ? window.Number(a.substr(e + 3, 3).replace("_", ".")) : 0
            }()
        }
    },
    22: function(e, t, n) {
        "use strict";

        function r() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = e.indexOf("?"),
                n = "",
                r = ""; - 1 === t ? n = e : (n = e.slice(0, t)) && (r = e.replace("".concat(n, "?"), ""));
            var o = {};
            return r.split("&").forEach(function(e) {
                if (e) {
                    var t = e.split("=");
                    o[t[0]] = t[1]
                }
            }), {
                domain: n,
                queryString: r,
                params: o
            }
        }

        function o() {
            return c.a.parse(location.search.replace(/^\?/, ""))
        }

        function i(e) {
            return o()[e]
        }
        n.d(t, "c", function() {
            return o
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "a", function() {
            return u
        });
        var a = n(44),
            c = n.n(a);
        n.d(t, "e", function() {
            return c.a
        });
        var u = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = r(e),
                o = Object.assign({}, n.params, t),
                i = Object.keys(o).map(function(e) {
                    return "".concat(e, "=").concat(o[e])
                });
            return i.length ? "".concat(n.domain, "?").concat(i.join("&")) : n.domain
        }
    },
    25: function(e, exports, t) {
        "use strict";
        e.exports = function(e, t) {
            return function() {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                return e.apply(t, n)
            }
        }
    },
    26: function(e, exports, t) {
        "use strict";
        var n = t(7),
            r = t(59),
            o = t(61),
            i = t(62),
            a = t(63),
            c = t(27),
            u = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || t(64);
        e.exports = function(e) {
            return new Promise(function(s, f) {
                var d = e.data,
                    l = e.headers;
                n.isFormData(d) && delete l["Content-Type"];
                var p = new XMLHttpRequest,
                    m = "onreadystatechange",
                    g = !1;
                if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in p || a(e.url) || (p = new window.XDomainRequest, m = "onload", g = !0, p.onprogress = function() {}, p.ontimeout = function() {}), e.auth) {
                    var h = e.auth.username || "",
                        v = e.auth.password || "";
                    l.Authorization = "Basic " + u(h + ":" + v)
                }
                if (p.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p[m] = function() {
                        if (p && (4 === p.readyState || g) && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                            var t = "getAllResponseHeaders" in p ? i(p.getAllResponseHeaders()) : null,
                                n = e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                                o = {
                                    data: n,
                                    status: 1223 === p.status ? 204 : p.status,
                                    statusText: 1223 === p.status ? "No Content" : p.statusText,
                                    headers: t,
                                    config: e,
                                    request: p
                                };
                            r(s, f, o), p = null
                        }
                    }, p.onerror = function() {
                        f(c("Network Error", e, null, p)), p = null
                    }, p.ontimeout = function() {
                        f(c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", p)), p = null
                    }, n.isStandardBrowserEnv()) {
                    var _ = t(65),
                        b = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? _.read(e.xsrfCookieName) : void 0;
                    b && (l[e.xsrfHeaderName] = b)
                }
                if ("setRequestHeader" in p && n.forEach(l, function(e, t) {
                        void 0 === d && "content-type" === t.toLowerCase() ? delete l[t] : p.setRequestHeader(t, e)
                    }), e.withCredentials && (p.withCredentials = !0), e.responseType) try {
                    p.responseType = e.responseType
                } catch (t) {
                    if ("json" !== e.responseType) throw t
                }
                "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
                    p && (p.abort(), f(e), p = null)
                }), void 0 === d && (d = null), p.send(d)
            })
        }
    },
    27: function(e, exports, t) {
        "use strict";
        var n = t(60);
        e.exports = function(e, t, r, o, i) {
            var a = new Error(e);
            return n(a, t, r, o, i)
        }
    },
    28: function(e, exports, t) {
        "use strict";
        e.exports = function(e) {
            return !(!e || !e.__CANCEL__)
        }
    },
    29: function(e, exports, t) {
        "use strict";

        function n(e) {
            this.message = e
        }
        n.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, n.prototype.__CANCEL__ = !0, e.exports = n
    },
    32: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.g_config && window.g_config.regionID ? window.g_config.regionID.toLowerCase() : window.location.hostname.split(".").pop().toLowerCase()
        }
    },
    37: function(e, exports) {
        function t(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }

        function n(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && t(e.slice(0, 0))
        }
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        e.exports = function(e) {
            return null != e && (t(e) || n(e) || !!e._isBuffer)
        }
    },
    39: function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    i(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e, t, n) {
            if (n = Object.assign({
                    path: "/"
                }, s, n), "number" == typeof n.expires) {
                var r = new Date;
                r.setMilliseconds(r.getMilliseconds() + 864e5 * n.expires), n.expires = r
            }
            var o;
            n.expires = n.expires ? n.expires.toUTCString() : "";
            try {
                o = JSON.stringify(t), /^[{[]/.test(o) && (t = o)
            } catch (e) {
                console.log(e)
            }
            t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)), e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), e = e.replace(/[()]/g, escape);
            var i = "";
            for (var a in n) n[a] && (i += "; ".concat(a), !0 !== n[a] && (i += "=".concat(n[a])));
            return document.cookie = "".concat(e, "=").concat(t).concat(i)
        }

        function c(e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e ? null : {}, r = document.cookie ? document.cookie.split("; ") : [], o = /(%[0-9A-Z]{2})+/g, i = 0; i < r.length; i++) {
                var a = r[i].split("="),
                    c = a.slice(1).join("=");
                t.json || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                try {
                    var u = a[0].replace(o, decodeURIComponent);
                    if (c = c.replace(o, decodeURIComponent), t.json) try {
                        c = JSON.parse(c)
                    } catch (e) {
                        console.log(e)
                    }
                    if (e === u) {
                        n = c;
                        break
                    }
                    e || (n[u] = c)
                } catch (e) {
                    console.log(e)
                }
            }
            return n
        }
        var u = {},
            s = {};
        u.getJSON = function(e) {
            return c(e, o({
                json: !0
            }, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}))
        }, u.get = c, u.set = a, u.remove = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            a(e, "", Object.assign(t, {
                expires: -1
            }))
        }, t.a = u
    },
    391: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return l
        }), n.d(t, "a", function() {
            return m
        });
        var r = n(51),
            o = n.n(r),
            i = n(125),
            a = n(32),
            c = function() {
                return document.location.host.match(/-pre\.|-staging\.|-p\./g) ? "pre" : "live"
            }(),
            u = {
                "get-bot-config": "/mock/get-bot-config.json"
            },
            s = "//".concat(location.hostname),
            f = function() {
                switch (i.a) {
                    case "gsp":
                        return "".concat(s, "/gsp/helpcenter/chat/");
                    case "seller":
                        return "".concat(s, "/seller/helpcenter/chat/");
                    default:
                        return "pre" === c ? "".concat(s, "/help/chat/") : "//lazada".concat(location.hostname.split("lazada")[1], "/help/chat/")
                }
            }(),
            d = function(e) {
                var t = "";
                if (e.url) t = e.url;
                else {
                    var n = e.path;
                    e.params;
                    if ("dev" === c) n && (t = "".concat(u[n]));
                    else if (!t) {
                        if (!n) return Promise.reject("REQUEST NOT FOUND");
                        t = "".concat(f).concat(n)
                    }
                }
                return t ? o()({
                    url: t,
                    method: e.method || "get",
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8"
                    },
                    withCredentials: !0,
                    data: JSON.stringify(e.data || {}),
                    params: e.params || {}
                }) : Promise.reject("REQUEST NOT FOUND")
            },
            l = function(e) {
                return d({
                    path: "get-bot-config",
                    params: e
                })
            },
            p = {
                sg: "lazada.sg",
                vn: "lazada.vn",
                th: "lazada.co.th",
                id: "lazada.co.id",
                ph: "lazada.com.ph",
                my: "lazada.com.my"
            }[Object(a.a)()],
            m = function() {
                return d({
                    url: "//member.".concat(p, "/user/api/getUser")
                })
            }
    },
    392: function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = e.loginUrl,
                r = e.isMobile,
                o = e.isWebview;
            if (n || o) {
                if (r && o) {
                    var i = window,
                        a = i.lib;
                    return void(a && a.windvane && a.windvane.call && a.windvane.call("LAWVUserInfo", "login", {
                        email: "",
                        token: ""
                    }, t, function() {}))
                }
                var c = document.createElement("div");
                c.className = "chat-login-container";
                var u = document.createElement("iframe");
                if (u.src = n, u.className = "chat-login-popup ".concat(window.location.hostname.split(".").pop()), c.appendChild(u), document.body.appendChild(c), r) document.addEventListener("LOGIN_DONE", t);
                else {
                    var s = function e(n) {
                        "login" === n.data.type && (window.removeEventListener("message", e), document.body.removeChild(c), t())
                    };
                    window.addEventListener("message", s, !1), c.addEventListener("click", function() {
                        window.removeEventListener("message", s), document.body.removeChild(c)
                    }, !1)
                }
            }
        }
        n.d(t, "b", function() {
            return o
        }), t.a = r;
        var o = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
            if (e) {
                var n = document.createElement("script");
                n.setAttribute("defer", ""), n.setAttribute("async", ""), n.setAttribute("crossorigin", ""), n.src = e, n.onload = t, document.body.appendChild(n)
            }
        }
    },
    401: function(e, exports, t) {
        e.exports = t(402)
    },
    402: function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function i(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), e
        }

        function a(e, t) {
            if (null == e) return {};
            var n, r, o = c(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }

        function c(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }

        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach(function(t) {
                    f(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        function f(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var d = n(42),
            l = n.n(d),
            p = n(39),
            m = n(106),
            g = n(22),
            h = n(32),
            v = n(391),
            _ = n(125),
            b = n(392),
            w = n(124),
            y = n.n(w);
        window.g_config = window.g_config || {};
        var O = function(e, t) {
            if (!e) return !1;
            if (e.classList) {
                if (e.classList.contains(t)) return !0
            } else if (new RegExp("(^| )".concat(t, "( |$)"), "gi").test(e.className)) return !0;
            return !1
        };
        window.CSChat = function() {
            var e = {
                position: {
                    bottom: 10,
                    right: 10
                },
                floatButton: {}
            };
            switch (_.a) {
                case "gsp":
                    e = Object.assign(e, {
                        pageLoadTrigger: !1,
                        requireToken: !0,
                        requireLogin: !0,
                        loginRedirect: !0
                    });
                    break;
                case "seller":
                    e = Object.assign(e, {
                        pageLoadTrigger: !0,
                        requireToken: !1,
                        requireLogin: !1,
                        loginRedirect: !1
                    });
                    break;
                case "buyer":
                default:
                    e = Object.assign(e, {
                        pageLoadTrigger: !0,
                        enableWidget: !0,
                        requireToken: !1,
                        requireLogin: !0,
                        loginRedirect: !1,
                        loginPopup: !0,
                        loginDetection: "id" === Object(h.a)(),
                        disableFloatButton: !0,
                        attemptquery: ""
                    })
            }
            var t = !1,
                n = !1,
                o = null,
                c = null,
                u = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = window.g_config.cscBot,
                        n = s({}, e),
                        r = n.from;
                    return t && (n.from = t, n.botUrl = (n.botUrl || "").replace(new RegExp("".concat(r), "g"), t)), n
                },
                f = function(e) {
                    var t = e.bot,
                        n = a(e, ["bot"]);
                    return t ? Promise.resolve({
                        data: s({
                            api: u(t)
                        }, n)
                    }) : Object(v.b)().then(function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = n.api;
                        return r ? {
                            data: s(s({}, n), {}, {
                                api: u(r)
                            })
                        } : e
                    })
                },
                d = function() {
                    function e() {
                        var t = this,
                            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        r(this, e), this.options = n, this.targetId = y.a[Object.keys(y.a)[0]], this.botConfigs = {
                            notReady: !0
                        };
                        var o = this.options,
                            i = o.pageLoadTrigger,
                            a = o.container;
                        a = void 0 === a ? {} : a;
                        var c = a.selector,
                            u = o.requireLogin,
                            s = o.isLogin;
                        this.isLoggedIn = !u || (!window.g_config || !window.g_config.sellerLoginUrl), void 0 !== s && u && (this.isLoggedIn = s), this.initBackground = i || c, this.initBackground ? f(this.options).then(function(e) {
                            var n = e.data;
                            n = void 0 === n ? {} : n;
                            var r = n.api,
                                o = n.messages,
                                i = void 0 === o ? {} : o;
                            t.botConfigs = e.data, r && (t.wsApi = r, window.__cscMessages__ = i), t.initUI()
                        }).catch(function(e) {
                            console.log(e)
                        }) : this.initUI()
                    }
                    return i(e, [{
                        key: "initAlimeChat",
                        value: function(e) {
                            var t = this,
                                n = this.wsApi,
                                r = n.botUrl,
                                i = void 0 === r ? "" : r,
                                a = n.from,
                                c = n.requestHost,
                                u = this.options,
                                s = this.botConfigs,
                                f = u.floatButton,
                                d = f.icon,
                                p = f.text,
                                h = f.tpl,
                                v = u.disableFloatButton,
                                _ = u.container;
                            _ = void 0 === _ ? {} : _;
                            var b = _.selector,
                                w = _.iframeClass,
                                y = u.enableWidget,
                                O = u.requireToken,
                                R = u.requireLogin,
                                E = u.zIndex,
                                D = void 0 === E ? 1000001 : E;
                            if (this.enableWidget = void 0 === y ? s.enableWidget : y, R && (!s.isLogin || !this.enableWidget) && !b) return e && e();
                            var x = g.e.parse(i.split("?")[1] || "");
                            s.attemptquery && (x.attemptquery = s.attemptquery);
                            var A = Object(g.c)(),
                                S = Object.assign({}, x, A.attemptquery ? {
                                    attemptquery: A.attemptquery
                                } : {}),
                                C = b ? document.querySelectorAll(b)[0] : void 0;
                            if (delete S.from, b) {
                                if (C) {
                                    var j = document.createElement("iframe");
                                    j.src = i, j.className = "csc-chat-iframe".concat(w ? " ".concat(w) : ""), j.setAttribute("frameborder", "0"), C.appendChild(j)
                                }
                            } else l()("//g.alicdn.com/alime/dialog/alicare-dialog.js").then(function() {
                                o = new window.AlicareDialog({
                                    from: a,
                                    botUrl: i.split("?")[0],
                                    requestHost: c,
                                    tpl: v || O ? "<div></div>" : h || '<div class="chatnow-float-button"><span class="alime-need-help">'.concat(p || Object(m.a)("csc.widget.btn.need_heep"), "</span></div>"),
                                    container: {
                                        align: "right"
                                    },
                                    position: u.position,
                                    params: S,
                                    "z-index": D
                                }), o.onRendered(function(n) {
                                    var r = n.layout,
                                        i = n.config;
                                    if ("customized" === i.type) {
                                        if (!v && !O) {
                                            var a = d || i.avatar;
                                            if (!h && a) {
                                                var c = document.createElement("img");
                                                c.className = "alime-bot-avatar", c.src = a, r.insertBefore(c, r.firstChild)
                                            }
                                            var u = !0,
                                                s = {};
                                            r.addEventListener("mousedown", function(e) {
                                                var t = e.pageX,
                                                    n = e.pageY;
                                                s.x = t, s.y = n
                                            }), r.addEventListener("mouseup", function(e) {
                                                var t = e.pageX,
                                                    n = e.pageY,
                                                    r = s.x,
                                                    o = s.y;
                                                u = t === r && n === o
                                            }), r.addEventListener("click", function() {
                                                u && o.ui.emit("openDialog")
                                            })
                                        }
                                        "1" === A["live-chat"] && t.open(), e && e()
                                    }
                                })
                            })
                        }
                    }, {
                        key: "initApp",
                        value: function(e) {
                            t || n || (t = !0, n = !0, p.a.set("csc-auto-init", "1"), this.initAlimeChat(e), n = !1)
                        }
                    }, {
                        key: "initUI",
                        value: function() {
                            var e = this.wsApi,
                                t = this.options,
                                n = this.isLoggedIn,
                                r = this.initBackground,
                                o = t.container;
                            if (o = void 0 === o ? {} : o, !o.selector) {
                                var i = function(e) {
                                    var t = e.target;
                                    (O(t, "--js-csc-trigger") || O(t.parentNode, "--js-csc-trigger")) && (e.preventDefault(), c.open())
                                };
                                document.addEventListener("click", i, !1)
                            }(e || "1" === p.a.get("csc-auto-init")) && n && r && this.initApp()
                        }
                    }, {
                        key: "open",
                        value: function(e) {
                            var r = this,
                                i = this.options,
                                a = i.requireToken,
                                c = i.container;
                            c = void 0 === c ? {} : c;
                            var u = c.selector,
                                s = i.requireLogin,
                                d = i.loginRedirect,
                                l = i.loginPopup;
                            if (!u) {
                                var p = function(t) {
                                        var n = r.wsApi,
                                            i = r.enableWidget;
                                        if (n)
                                            if (i) o && o.ui && (e && -1 !== n.botUrl.inddexOf("attemptquery") ? o.ui.emit("message", e) : o.ui.emit("openDialog"));
                                            else {
                                                var c = function() {
                                                    n.botUrl && window.open(e ? Object(g.a)(n.botUrl, {
                                                        attemptquery: e
                                                    }) : n.botUrl, "_blank")
                                                };
                                                a && !t ? Object(v.b)().then(function(e) {
                                                    var t = e.data;
                                                    t = void 0 === t ? {} : t;
                                                    var n = t.api;
                                                    n = void 0 === n ? {} : n, n.botUrl && c()
                                                }).catch(function(e) {
                                                    console.log(e)
                                                }) : c()
                                            }
                                    },
                                    m = function() {
                                        var e = r.botConfigs,
                                            o = e.isLogin,
                                            i = e.loginUrl;
                                        s && !o ? d ? i && (window.location.href = i) : l && Object(b.a)({
                                            loginUrl: i
                                        }, function() {
                                            r.botConfigs.isLogin = !0, r.initApp(function() {
                                                p(!0)
                                            })
                                        }) : t ? !n && p() : r.initApp(function() {
                                            p(!0)
                                        })
                                    };
                                this.botConfigs.notReady ? f(i).then(function(e) {
                                    var t = e.data;
                                    t = void 0 === t ? {} : t;
                                    var n = t.api,
                                        o = t.messages,
                                        i = void 0 === o ? {} : o;
                                    r.botConfigs = e.data, n && (r.wsApi = n, window.__cscMessages__ = i, m())
                                }).catch(function(e) {
                                    console.log(e)
                                }) : m()
                            }
                        }
                    }, {
                        key: "close",
                        value: function() {}
                    }]), e
                }();
            return function() {
                function t(n) {
                    r(this, t);
                    var o = Object.assign({}, e, n);
                    c || ("buyer" === _.a && o.loginDetection ? Object(v.a)().then(function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t;
                        c = new d(s(s({}, o), {}, {
                            isLogin: !!n.module
                        })), window._csChat_ = c
                    }).catch(function() {
                        c = new d(o), window._csChat_ = c
                    }) : (c = new d(o), window._csChat_ = c))
                }
                return i(t, [{
                    key: "open",
                    value: function(e) {
                        c.open(e)
                    }
                }]), t
            }()
        }()
    },
    42: function(e, exports, t) {
        ! function(t, n) {
            e.exports = n()
        }(0, function() {
            return function(e) {
                function t(r) {
                    if (n[r]) return n[r].exports;
                    var o = n[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                }
                var n = {};
                return t.m = e, t.c = n, t.i = function(e) {
                    return e
                }, t.d = function(exports, e, n) {
                    t.o(exports, e) || Object.defineProperty(exports, e, {
                        configurable: !1,
                        enumerable: !0,
                        get: n
                    })
                }, t.n = function(e) {
                    var n = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return t.d(n, "a", n), n
                }, t.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 0)
            }([function(e, exports, t) {
                "use strict";
                e.exports = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function(n, r) {
                        if (!e) throw new Error("src parameter must be specified");
                        var o = {
                                force: !1
                            },
                            i = Object.assign({}, o, "string" == typeof t ? {
                                id: t
                            } : t),
                            a = i.id,
                            c = i.async,
                            u = i.integrity,
                            s = i.type,
                            f = i.text,
                            d = i.defer,
                            l = i.charset,
                            p = i.crossorigin,
                            m = i.force,
                            g = document.createElement("script");
                        if (g.src = e, a) {
                            if (g.setAttribute("id", a), document.getElementById(a)) return void n(document.getElementById(a))
                        } else {
                            var h = document.querySelector('script[src="' + e + '"]');
                            if (!m && h) return void n(h)
                        }
                        c && g.setAttribute("async", "true"), d && g.setAttribute("defer", "true"), u && g.setAttribute("integrity", u), s && g.setAttribute("type", s), f && g.setAttribute("text", f), l && g.setAttribute("charset", l), p && g.setAttribute("crossorigin", p), g.onload = function(e) {
                            n(g)
                        }, g.onerror = function(e) {
                            r(e)
                        }, document.body.appendChild(g)
                    })
                }
            }])
        })
    },
    44: function(e, exports, t) {
        "use strict";
        exports.decode = exports.parse = t(45), exports.encode = exports.stringify = t(46)
    },
    45: function(e, exports, t) {
        "use strict";

        function n(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        e.exports = function(e, t, o, i) {
            t = t || "&", o = o || "=";
            var a = {};
            if ("string" != typeof e || 0 === e.length) return a;
            var c = /\+/g;
            e = e.split(t);
            var u = 1e3;
            i && "number" == typeof i.maxKeys && (u = i.maxKeys);
            var s = e.length;
            u > 0 && s > u && (s = u);
            for (var f = 0; f < s; ++f) {
                var d, l, p, m, g = e[f].replace(c, "%20"),
                    h = g.indexOf(o);
                h >= 0 ? (d = g.substr(0, h), l = g.substr(h + 1)) : (d = g, l = ""), p = decodeURIComponent(d), m = decodeURIComponent(l), n(a, p) ? r(a[p]) ? a[p].push(m) : a[p] = [a[p], m] : a[p] = m
            }
            return a
        };
        var r = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    },
    46: function(e, exports, t) {
        "use strict";

        function n(e, t) {
            if (e.map) return e.map(t);
            for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
            return n
        }
        var r = function(e) {
            switch (typeof e) {
                case "string":
                    return e;
                case "boolean":
                    return e ? "true" : "false";
                case "number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
            }
        };
        e.exports = function(e, t, a, c) {
            return t = t || "&", a = a || "=", null === e && (e = void 0), "object" == typeof e ? n(i(e), function(i) {
                var c = encodeURIComponent(r(i)) + a;
                return o(e[i]) ? n(e[i], function(e) {
                    return c + encodeURIComponent(r(e))
                }).join(t) : c + encodeURIComponent(r(e[i]))
            }).join(t) : c ? encodeURIComponent(r(c)) + a + encodeURIComponent(r(e)) : ""
        };
        var o = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            i = Object.keys || function(e) {
                var t = [];
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t
            }
    },
    51: function(e, exports, t) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            var t = document.createElement("a");
            return t.href = e, t.origin || ("" !== t.protocol && ":" !== t.protocol || (t.protocol = window.location.protocol || "https:"), t.origin = t.protocol + "//" + t.hostname + (t.port && -1 === (0, u.default)(["0", "80", "443"], t.port) ? ":" + t.port : "")), t.newPathname = ("/" !== t.pathname.charAt(0) ? "/" : "") + t.pathname, t
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.tld = exports.hostname = void 0;
        var o = t(52);
        Object.defineProperty(exports, "hostname", {
            enumerable: !0,
            get: function() {
                return o.hostname
            }
        }), Object.defineProperty(exports, "tld", {
            enumerable: !0,
            get: function() {
                return o.tld
            }
        });
        var i = t(54),
            a = n(i),
            c = t(73),
            u = n(c),
            s = t(74),
            f = n(s),
            d = t(75),
            l = n(d),
            p = a.default.create();
        if ("undefined" !== document) {
            var m = document.head.querySelector('[name="X-CSRF-TOKEN"]');
            m && m.content && (p.defaults.headers["X-CSRF-TOKEN"] = m.content)
        }
        p.defaults.headers["X-Requested-With"] = "XMLHttpRequest", p.defaults.errorCode && Array.isArray(p.defaults.errorCode) ? p.defaults.errorCode = l.default.concat(p.defaults.errorCode) : p.defaults.errorCode = l.default, p.interceptors.request.use(function(e) {
            return new Promise(function(t) {
                var n = e.umid || {},
                    r = function() {
                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (r && r.ua && r.umidToken ? (e.headers["x-ua"] = r.ua, e.headers["x-umidtoken"] = r.umidToken) : (!1 !== n.required && window.Group_umid && window.Group_umid.getUA && (e.headers["x-ua"] = window.Group_umid.getUA()), !1 !== n.required && window.Group_umid && window.Group_umid.getUmidToken && (e.headers["x-umidtoken"] = window.Group_umid.getUmidToken())), e.data && "string" == typeof e.data) try {
                            var o = JSON.parse(e.data);
                            o["X-CSRF-TOKEN"] && (e.headers["X-CSRF-TOKEN"] = o["X-CSRF-TOKEN"])
                        } catch (e) {
                            console.error(e)
                        }
                        e.retcodeStartTime = Date.now(), t(e)
                    };
                if (!1 !== n.required && window.umidTokenFromHeader)
                    if (/defaultToken[1,2]/.test(window.umidTokenFromHeader) || /defaultUAFromHeader/.test(window.UAFromHeader)) {
                        var o = n.timeout || 2e3;
                        setTimeout(function() {
                            r({
                                umidToken: window.umidTokenFromHeader,
                                ua: window.uabModule && window.uabModule.getUA ? window.uabModule.getUA() : window.UAFromHeader
                            })
                        }, o)
                    } else r({
                        umidToken: window.umidTokenFromHeader,
                        ua: window.uabModule && window.uabModule.getUA ? window.uabModule.getUA() : window.UAFromHeader
                    });
                else if (!1 !== n.required && window.Group_umid) {
                    var i = n.timeout || 2e3,
                        a = !1;
                    window.Group_umid.ready(function() {
                        a || (a = !0, r())
                    }), setTimeout(function() {
                        a || (a = !0, r())
                    }, i)
                } else r()
            })
        }, function(e) {
            return Promise.reject(e)
        }), p.interceptors.response.use(function(e) {
            return new Promise(function(t) {
                var n = e.config,
                    o = r(n.url),
                    i = n.retcode || {},
                    a = i.apiName || "" + o.origin + o.newPathname,
                    c = n.retcodeStartTime ? Date.now() - n.retcodeStartTime : 0,
                    s = function() {
                        n.disableDefaultRetcode && t(e);
                        var r = "";
                        if (e.data && !1 === e.data.success && e.data.errorCode && e.data.errorCode.key && -1 !== (0, u.default)(p.defaults.errorCode, e.data.errorCode.key)) {
                            try {
                                r += JSON.stringify(e.data.errorCode)
                            } catch (e) {
                                r += e.message
                            }
                            o.search && (r += " query = " + o.search), window._blReport && window._blReport("api", [a, !1, c, "data-success-false", r])
                        } else window._blReport && window._blReport("api", [a, !0, c, 200, "Successfully"]);
                        t(e)
                    };
                n.disableDefaultSufei ? s() : f.default.check(e.data, function(r, o) {
                    r ? s() : o && o._sufeiToken ? (window._blReport && window._blReport("api", [a, !1, c, "data-success-false", "sufei intercepted, user pass verification, will resend request"]), p(n).then(function(e) {
                        t(e)
                    }).catch(function(e) {
                        window._blReport && window._blReport("api", [a, !1, c, "data-success-false", "sufei send request fail: " + JSON.stringify(e)])
                    })) : (window._blReport && window._blReport("api", [a, !1, c, "data-success-false", "sufei intercepted, user haven't pass verification"]), t(e))
                })
            })
        }, function(e) {
            if (e && e.config) {
                var t = e.config;
                if (t.disableDefaultRetcode) return Promise.reject(e);
                var n = t.retcodeStartTime ? Date.now() - t.retcodeStartTime : 0,
                    o = r(t.url),
                    i = t.retcode || {},
                    a = i.apiName || "" + o.origin + o.newPathname;
                window._blReport && window._blReport("api", [a, !1, n, "server-error", e])
            } else window._blReport && window._blReport("api", ["api not found", !1, Date.now(), "api-not-found", e]);
            return Promise.reject(e)
        }), exports.default = p
    },
    52: function(e, exports, t) {
        "use strict";

        function n(e, t) {
            var n = e.split(".");
            return n[0] = t, n.join(".")
        }

        function r(e) {
            return n(window.location.hostname, e)
        }

        function o() {
            if ("undefined" != typeof window) {
                var e = (0, i.projectDetection)(),
                    t = ".lazada.";
                e.isYatra ? t = "MM" === e.venture ? ".shop." : ".daraz." : e.isVoyager && (t = ".lazada.");
                var n = window.location.hostname,
                    r = n.split(t);
                if (r && r.length && r[1]) return r[1]
            }
            return "sg"
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.buildHostname = n, exports.hostname = r, exports.tld = o;
        var i = t(53)
    },
    53: function(e, exports) {
        function t(e) {
            "@babel/helpers - typeof";
            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        e.exports = function(e) {
            function t(r) {
                if (n[r]) return n[r].exports;
                var o = n[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.d = function(e, n, r) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            }, t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "//g.alicdn.com/lzdmod/common-info/6.0.20/", t(t.s = 3)
        }([function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                if (n = Object.assign({
                        path: "/"
                    }, a, n), "number" == typeof n.expires) {
                    var r = new Date;
                    r.setMilliseconds(r.getMilliseconds() + 864e5 * n.expires), n.expires = r
                }
                var o = void 0;
                n.expires = n.expires ? n.expires.toUTCString() : "";
                try {
                    o = JSON.stringify(t), /^[\{\[]/.test(o) && (t = o)
                } catch (e) {}
                t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)), e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), e = e.replace(/[\(\)]/g, escape);
                var i = "";
                for (var c in n) n[c] && (i += "; " + c, !0 !== n[c] && (i += "=" + n[c]));
                return document.cookie = e + "=" + t + i
            }

            function o(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e ? null : {}, r = document.cookie ? document.cookie.split("; ") : [], o = /(%[0-9A-Z]{2})+/g, i = 0; i < r.length; i++) {
                    var a = r[i].split("="),
                        c = a.slice(1).join("=");
                    t.json || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                    try {
                        var u = a[0].replace(o, decodeURIComponent);
                        if (c = c.replace(o, decodeURIComponent), t.json) try {
                            c = JSON.parse(c)
                        } catch (e) {}
                        if (e === u) {
                            n = c;
                            break
                        }
                        e || (n[u] = c)
                    } catch (e) {}
                }
                return n
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = {},
                a = {};
            i.getJSON = function() {
                return get({
                    json: !0
                })
            }, i.get = o, i.set = r, i.remove = function(e, t) {
                r(e, "", Object.assign(t, {
                    expires: -1
                }))
            }, t.default = i
        }, function(e, n, r) {
            "use strict";

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e = g({}, w, e);
                var t = u(),
                    n = {
                        regionID: "",
                        language: ""
                    };
                return "weex" === t ? n = c() : "object" === ("undefined" == typeof window ? "undefined" : m(window)) && "web" === t && (n = a()), n.regionID = n.regionID.toLocaleUpperCase(), n.language = s(n.regionID, n.language), e.short && !l(n.regionID) && (n.language = n.language.substring(0, 2)), n
            }

            function a() {
                var e = "",
                    t = "";
                if ("object" === ("undefined" == typeof window ? "undefined" : m(window)) && window._i18n_) {
                    var n = window._i18n_;
                    if ("string" == typeof n) try {
                        n = JSON.parse(n)
                    } catch (e) {}
                    "object" === (void 0 === n ? "undefined" : m(n)) && (e = n.regionID, t = n.language)
                }
                if (!e && window.g_config && "object" === m(window.g_config) && (e = window.g_config.regionID, t = window.g_config.language), !e && "object" === ("undefined" == typeof location ? "undefined" : m(location)) && location.hostname) {
                    for (var r in b.default) {
                        var o = b.default[r];
                        if (o && o.domain && location.hostname.indexOf(o.domain) >= 0) {
                            e = r;
                            break
                        }
                    }
                    t = f(v.default.get("hng"))[1]
                }
                if (!e) {
                    var i = f(v.default.get("hng"));
                    e = i[0], t = i[1]
                }
                return e = e || "", t = t || "", {
                    regionID: e,
                    language: t
                }
            }

            function c() {
                var e = "",
                    t = "";
                return "object" === ("undefined" == typeof WXEnvironment ? "undefined" : m(WXEnvironment)) && (e = WXEnvironment && WXEnvironment["_i18n_.regionID"] || "", t = WXEnvironment && WXEnvironment["_i18n_.language"] || ""), {
                    regionID: e,
                    language: t
                }
            }

            function u() {
                var e = "";
                return "function" == typeof callNative ? e = "weex" : "object" !== ("undefined" == typeof navigator ? "undefined" : m(navigator)) || "Mozilla" !== navigator.appCodeName && "Gecko" !== navigator.product || (e = "web"), e
            }

            function s() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments[1],
                    n = b.default[e] ? b.default[e].lang : "";
                if (!n) return "";
                if (!t) return n[0];
                for (var r = "", o = 0; o < n.length; o++) {
                    var i = n[o];
                    if (i && i.indexOf(t) > -1) {
                        r = i;
                        break
                    }
                }
                return r || (r = n[0]), r
            }

            function f(e) {
                return e ? e.split("|") : []
            }

            function d(e) {
                return "VN" === e || "SG" === e || "MY" === e || "PH" === e || "ID" === e || "TH" === e
            }

            function l(e) {
                return "PK" === e || "LK" === e || "BD" === e || "NP" === e || "MM" === e
            }

            function p() {
                var e = i(),
                    t = e.regionID;
                return t ? {
                    isVoyager: d(t),
                    isYatra: l(t),
                    venture: t
                } : {
                    test: !0
                }
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var m = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                    return t(e)
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                },
                g = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                };
            n.getContainer = u, n.isYatra = l, n.projectDetection = p;
            var h = r(0),
                v = o(h),
                _ = r(2),
                b = o(_),
                w = {
                    short: !0
                };
            n.default = i
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = {
                ID: {
                    id: "360",
                    lang: ["id"],
                    langShort: ["id"],
                    currency: "IDR",
                    domain: "lazada.co.id"
                },
                MY: {
                    id: "458",
                    currency: "MYR",
                    lang: ["en-MY", "ms"],
                    langShort: ["en", "ms"],
                    domain: "lazada.com.my"
                },
                PH: {
                    id: "608",
                    currency: "PHP",
                    lang: ["en-PH"],
                    langShort: ["en"],
                    domain: "lazada.com.ph"
                },
                SG: {
                    id: "702",
                    currency: "SGD",
                    lang: ["en-SG"],
                    langShort: ["en"],
                    domain: "lazada.sg"
                },
                TH: {
                    id: "764",
                    currency: "THB",
                    lang: ["th", "en"],
                    domain: "lazada.co.th"
                },
                VN: {
                    id: "704",
                    currency: "VND",
                    lang: ["vi", "en"],
                    domain: "lazada.vn"
                },
                BD: {
                    id: "050",
                    currency: "BDT",
                    lang: ["en-BD", "bn-BD"],
                    langShort: ["en", "bn"],
                    domain: "daraz.com.bd"
                },
                LK: {
                    id: "144",
                    currency: "LKR",
                    lang: ["en-LK", "si-LK"],
                    langShort: ["en", "si"],
                    domain: "daraz.lk"
                },
                MM: {
                    id: "104",
                    currency: "MMK",
                    lang: ["en-MM", "my-MM"],
                    langShort: ["en", "my"],
                    domain: "shop.com.mm"
                },
                NP: {
                    id: "524",
                    currency: "NPR",
                    lang: ["en-NP", "ne-NP"],
                    langShort: ["en", "ne"],
                    domain: "daraz.com.np"
                },
                PK: {
                    id: "586",
                    currency: "PKR",
                    lang: ["en-PK", "ur-PK"],
                    langShort: ["en", "ur"],
                    domain: "daraz.pk"
                }
            }
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = n(0),
                i = r(o),
                a = n(1),
                c = r(a),
                u = n(2),
                s = r(u),
                f = n(4),
                d = r(f),
                l = n(5),
                p = r(l),
                m = n(6),
                g = r(m);
            t.default = {
                Cookie: i.default,
                SITE_CONFIGS: s.default,
                getEnv: c.default,
                projectDetection: a.projectDetection,
                LzdCookie: d.default,
                getAnonUID: p.default,
                getMtopDomain: g.default
            }, e.exports = {
                Cookie: i.default,
                SITE_CONFIGS: s.default,
                getEnv: c.default,
                projectDetection: a.projectDetection,
                LzdCookie: d.default,
                getAnonUID: p.default,
                getMtopDomain: g.default
            }
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function o(e, t) {
                var n = void 0;
                try {
                    n = p.default[t].lang
                } catch (e) {}
                return n ? Array.isArray(n) ? (n.forEach(function(t) {
                    (t === e || t.indexOf(e) > -1) && (e = t)
                }), e) : n : null
            }

            function i() {
                if ("weex" !== (0, f.getContainer)()) {
                    var e = (0, d.default)(),
                        t = e.regionID,
                        n = e.language,
                        r = void 0;
                    try {
                        r = p.default[t].lang
                    } catch (e) {}
                    if (r) return c(Array.isArray(r) ? r.indexOf(n) > -1 ? n : r[0] : r)
                }
            }

            function a() {
                if ("weex" !== (0, f.getContainer)()) {
                    var e = (0, d.default)(),
                        t = e.regionID,
                        n = p.default[t],
                        r = n ? {
                            path: "/",
                            domain: "." + n.domain
                        } : {
                            path: "/"
                        };
                    s.default.remove(m, r)
                }
            }

            function c(e) {
                if (e && "weex" !== (0, f.getContainer)()) {
                    var t = (0, d.default)(),
                        n = t.regionID;
                    e = o(e, n);
                    var r = p.default[n],
                        i = location.hostname.indexOf(g) > 0;
                    if (e || r) {
                        var a = {
                            domain: i ? "." + g : "." + r.domain,
                            expires: 30
                        };
                        s.default.set("hng", n + "|" + e + "|" + r.currency + "|" + r.id, a), i || (s.default.remove(m, {
                            path: "/",
                            domain: "." + r.domain
                        }), (0, f.isYatra)(n) || (e = e.substring(0, 2)), s.default.set(m, e, {
                            expires: 30
                        }))
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = n(0),
                s = r(u),
                f = n(1),
                d = r(f),
                l = n(2),
                p = r(l),
                m = "userLanguageML",
                g = "lazada.test",
                h = {
                    setDefault: i,
                    setLang: c,
                    get: function() {
                        return s.default.get("hng")
                    },
                    removeRoot: a
                };
            t.default = h
        }, function(e, t, n) {
            "use strict";

            function r() {
                return i.default.get("anon_uid") || i.default.get("t_uid") || ""
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(0),
                i = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(o);
            t.default = r
        }, function(e, n, r) {
            "use strict";

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i() {
                var e = /127\.0\.0\.1|localhost|daily|waptest|\.test/;
                if ("web" === p) {
                    var t = "object" === ("undefined" == typeof location ? "undefined" : u(location)) && location.hostname || "";
                    return e.test(t) || location.search.indexOf("wh_debug=true") >= 0
                }
                return !1
            }

            function a() {
                var e = "object" === ("undefined" == typeof location ? "undefined" : u(location)) && location.hostname || "";
                return e.indexOf("-rm.lazada.sg") >= 0 || e.indexOf("-rm-p.lazada.sg") >= 0 || "rm-p.lazada.sg" === e
            }

            function c() {
                if ("web" === p) {
                    var e = "object" === ("undefined" == typeof location ? "undefined" : u(location)) && location.hostname || "";
                    return e.indexOf("-p.lazada.") >= 0 || e.indexOf("-p.daraz.") >= 0 || e.indexOf("-p.shop.") >= 0 || e.indexOf("pre-wormhole.") >= 0 || a() || location.search.indexOf("debug_pre_env=true") >= 0
                }
                return !1
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var u = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                return t(e)
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
            };
            n.default = function(e) {
                var t = "";
                if (i()) t = f.default.DAILY;
                else if ("string" == typeof e && e || (e = ((0, l.default)() || {}).regionID), c()) {
                    var n = e.toLocaleUpperCase();
                    a() && (n = "SG_RED_MART"), t = f.default.PRE[n]
                } else t = f.default[e.toLocaleUpperCase()];
                return t
            };
            var s = r(7),
                f = o(s),
                d = r(1),
                l = o(d),
                p = (0, d.getContainer)()
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = {
                ID: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "lazada.co.id"
                },
                MY: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "lazada.com.my"
                },
                PH: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "lazada.com.ph"
                },
                SG: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "lazada.sg"
                },
                TH: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "lazada.co.th"
                },
                VN: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "lazada.vn"
                },
                PK: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "daraz.pk"
                },
                BD: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "daraz.com.bd"
                },
                MM: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "shop.com.mm"
                },
                NP: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "daraz.com.np"
                },
                LK: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "daraz.lk"
                },
                DAILY: {
                    prefix: "acs",
                    subDomain: "waptest",
                    mainDomain: "lazada.test"
                },
                PRE: {
                    ID: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "lazada.co.id"
                    },
                    MY: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "lazada.com.my"
                    },
                    PH: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "lazada.com.ph"
                    },
                    SG: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "lazada.sg"
                    },
                    SG_RED_MART: {
                        prefix: "",
                        subDomain: "acs-wapa-rm",
                        mainDomain: "lazada.sg"
                    },
                    TH: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "lazada.co.th"
                    },
                    VN: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "lazada.vn"
                    },
                    PK: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "daraz.pk"
                    },
                    BD: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "daraz.com.bd"
                    },
                    MM: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "shop.com.mm"
                    },
                    NP: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "daraz.com.np"
                    },
                    LK: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "daraz.lk"
                    }
                }
            }
        }])
    },
    54: function(e, exports, t) {
        e.exports = t(55)
    },
    55: function(e, exports, t) {
        "use strict";

        function n(e) {
            var t = new i(e),
                n = o(i.prototype.request, t);
            return r.extend(n, i.prototype, t), r.extend(n, t), n
        }
        var r = t(7),
            o = t(25),
            i = t(56),
            a = t(15),
            c = n(a);
        c.Axios = i, c.create = function(e) {
            return n(r.merge(a, e))
        }, c.Cancel = t(29), c.CancelToken = t(71), c.isCancel = t(28), c.all = function(e) {
            return Promise.all(e)
        }, c.spread = t(72), e.exports = c, e.exports.default = c
    },
    56: function(e, exports, t) {
        "use strict";

        function n(e) {
            this.defaults = e, this.interceptors = {
                request: new i,
                response: new i
            }
        }
        var r = t(15),
            o = t(7),
            i = t(66),
            a = t(67);
        n.prototype.request = function(e) {
            "string" == typeof e && (e = o.merge({
                url: arguments[0]
            }, arguments[1])), e = o.merge(r, this.defaults, {
                method: "get"
            }, e), e.method = e.method.toLowerCase();
            var t = [a, void 0],
                n = Promise.resolve(e);
            for (this.interceptors.request.forEach(function(e) {
                    t.unshift(e.fulfilled, e.rejected)
                }), this.interceptors.response.forEach(function(e) {
                    t.push(e.fulfilled, e.rejected)
                }); t.length;) n = n.then(t.shift(), t.shift());
            return n
        }, o.forEach(["delete", "get", "head", "options"], function(e) {
            n.prototype[e] = function(t, n) {
                return this.request(o.merge(n || {}, {
                    method: e,
                    url: t
                }))
            }
        }), o.forEach(["post", "put", "patch"], function(e) {
            n.prototype[e] = function(t, n, r) {
                return this.request(o.merge(r || {}, {
                    method: e,
                    url: t,
                    data: n
                }))
            }
        }), e.exports = n
    },
    57: function(e, exports) {
        function t() {
            throw new Error("setTimeout has not been defined")
        }

        function n() {
            throw new Error("clearTimeout has not been defined")
        }

        function r(e) {
            if (s === setTimeout) return setTimeout(e, 0);
            if ((s === t || !s) && setTimeout) return s = setTimeout, setTimeout(e, 0);
            try {
                return s(e, 0)
            } catch (t) {
                try {
                    return s.call(null, e, 0)
                } catch (t) {
                    return s.call(this, e, 0)
                }
            }
        }

        function o(e) {
            if (f === clearTimeout) return clearTimeout(e);
            if ((f === n || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
            try {
                return f(e)
            } catch (t) {
                try {
                    return f.call(null, e)
                } catch (t) {
                    return f.call(this, e)
                }
            }
        }

        function i() {
            m && l && (m = !1, l.length ? p = l.concat(p) : g = -1, p.length && a())
        }

        function a() {
            if (!m) {
                var e = r(i);
                m = !0;
                for (var t = p.length; t;) {
                    for (l = p, p = []; ++g < t;) l && l[g].run();
                    g = -1, t = p.length
                }
                l = null, m = !1, o(e)
            }
        }

        function c(e, t) {
            this.fun = e, this.array = t
        }

        function u() {}
        var s, f, d = e.exports = {};
        ! function() {
            try {
                s = "function" == typeof setTimeout ? setTimeout : t
            } catch (e) {
                s = t
            }
            try {
                f = "function" == typeof clearTimeout ? clearTimeout : n
            } catch (e) {
                f = n
            }
        }();
        var l, p = [],
            m = !1,
            g = -1;
        d.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            p.push(new c(e, t)), 1 !== p.length || m || r(a)
        }, c.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = u, d.addListener = u, d.once = u, d.off = u, d.removeListener = u, d.removeAllListeners = u, d.emit = u, d.prependListener = u, d.prependOnceListener = u, d.listeners = function(e) {
            return []
        }, d.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, d.cwd = function() {
            return "/"
        }, d.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, d.umask = function() {
            return 0
        }
    },
    58: function(e, exports, t) {
        "use strict";
        var n = t(7);
        e.exports = function(e, t) {
            n.forEach(e, function(n, r) {
                r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
            })
        }
    },
    59: function(e, exports, t) {
        "use strict";
        var n = t(27);
        e.exports = function(e, t, r) {
            var o = r.config.validateStatus;
            r.status && o && !o(r.status) ? t(n("Request failed with status code " + r.status, r.config, null, r.request, r)) : e(r)
        }
    },
    6: function(e, t, n) {
        "use strict";
        n.d(t, "r", function() {
            return r
        }), n.d(t, "A", function() {
            return o
        }), n.d(t, "B", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "g", function() {
            return c
        }), n.d(t, "q", function() {
            return u
        }), n.d(t, "M", function() {
            return s
        }), n.d(t, "x", function() {
            return f
        }), n.d(t, "t", function() {
            return d
        }), n.d(t, "I", function() {
            return l
        }), n.d(t, "J", function() {
            return p
        }), n.d(t, "H", function() {
            return m
        }), n.d(t, "i", function() {
            return g
        }), n.d(t, "w", function() {
            return h
        }), n.d(t, "C", function() {
            return v
        }), n.d(t, "u", function() {
            return _
        }), n.d(t, "f", function() {
            return b
        }), n.d(t, "e", function() {
            return w
        }), n.d(t, "F", function() {
            return y
        }), n.d(t, "v", function() {
            return O
        }), n.d(t, "P", function() {
            return R
        }), n.d(t, "s", function() {
            return E
        }), n.d(t, "d", function() {
            return D
        }), n.d(t, "N", function() {
            return x
        }), n.d(t, "y", function() {
            return A
        }), n.d(t, "z", function() {
            return S
        }), n.d(t, "c", function() {
            return C
        }), n.d(t, "h", function() {
            return j
        }), n.d(t, "Q", function() {
            return T
        }), n.d(t, "E", function() {
            return L
        }), n.d(t, "D", function() {
            return I
        }), n.d(t, "G", function() {
            return P
        }), n.d(t, "a", function() {
            return U
        }), n.d(t, "m", function() {
            return M
        }), n.d(t, "k", function() {
            return N
        }), n.d(t, "j", function() {
            return k
        }), n.d(t, "l", function() {
            return B
        }), n.d(t, "L", function() {
            return F
        }), n.d(t, "K", function() {
            return z
        }), n.d(t, "o", function() {
            return q
        }), n.d(t, "p", function() {
            return W
        }), n.d(t, "n", function() {
            return V
        }), n.d(t, "O", function() {
            return Y
        });
        var r = "customer",
            o = "login",
            i = "LOGIN_DONE",
            a = "agent",
            c = "bot",
            u = "csc",
            s = "system",
            f = "image",
            d = "emoji",
            l = "SHOW_CSC_EVENT",
            p = "SHOW_CSC_WINDOW_EVENT",
            m = "seller",
            g = "buyer",
            h = "gsp",
            v = "minishop",
            _ = "end-conversation",
            b = "//laz-img-cdn.alicdn.com/tfs/TB1h23BduP2gK0jSZFoXXauIVXa-172-172.png",
            w = "//laz-img-cdn.alicdn.com/tfs/TB1sB_dpXzqK1RjSZFvXXcB7VXa-86-86.png",
            y = "pdf",
            O = "excel",
            R = "word",
            E = "dropdown",
            D = "article",
            x = "text",
            A = "link",
            S = "live-agent",
            C = "ambassador",
            j = "bot-survey",
            T = "XSPACE",
            L = "OSS",
            I = "NONE",
            P = "return-and-refund-list",
            U = "ACTION",
            M = ".live_chat.entrance_click",
            N = ".live_chat.page",
            k = ".live_chat.end_session",
            B = ".live_chat.send_picture",
            F = ".chatbot.live_chat_transfers",
            z = ".chatbot.ambassador_transfers",
            q = ".chatbot.page",
            W = ".chatbot.entrance_click",
            V = ".chatbot.banner_link_redirect",
            Y = ".chatbot.int_chatbot"
    },
    60: function(e, exports, t) {
        "use strict";
        e.exports = function(e, t, n, r, o) {
            return e.config = t, n && (e.code = n), e.request = r, e.response = o, e
        }
    },
    61: function(e, exports, t) {
        "use strict";

        function n(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        var r = t(7);
        e.exports = function(e, t, o) {
            if (!t) return e;
            var i;
            if (o) i = o(t);
            else if (r.isURLSearchParams(t)) i = t.toString();
            else {
                var a = [];
                r.forEach(t, function(e, t) {
                    null !== e && void 0 !== e && (r.isArray(e) && (t += "[]"), r.isArray(e) || (e = [e]), r.forEach(e, function(e) {
                        r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), a.push(n(t) + "=" + n(e))
                    }))
                }), i = a.join("&")
            }
            return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e
        }
    },
    62: function(e, exports, t) {
        "use strict";
        var n = t(7),
            r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function(e) {
            var t, o, i, a = {};
            return e ? (n.forEach(e.split("\n"), function(e) {
                if (i = e.indexOf(":"), t = n.trim(e.substr(0, i)).toLowerCase(), o = n.trim(e.substr(i + 1)), t) {
                    if (a[t] && r.indexOf(t) >= 0) return;
                    a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([o]) : a[t] ? a[t] + ", " + o : o
                }
            }), a) : a
        }
    },
    63: function(e, exports, t) {
        "use strict";
        var n = t(7);
        e.exports = n.isStandardBrowserEnv() ? function() {
            function e(e) {
                var t = e;
                return r && (o.setAttribute("href", t), t = o.href), o.setAttribute("href", t), {
                    href: o.href,
                    protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                    host: o.host,
                    search: o.search ? o.search.replace(/^\?/, "") : "",
                    hash: o.hash ? o.hash.replace(/^#/, "") : "",
                    hostname: o.hostname,
                    port: o.port,
                    pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
                }
            }
            var t, r = /(msie|trident)/i.test(navigator.userAgent),
                o = document.createElement("a");
            return t = e(window.location.href),
                function(r) {
                    var o = n.isString(r) ? e(r) : r;
                    return o.protocol === t.protocol && o.host === t.host
                }
        }() : function() {
            return function() {
                return !0
            }
        }()
    },
    64: function(e, exports, t) {
        "use strict";

        function n() {
            this.message = "String contains an invalid character"
        }

        function r(e) {
            for (var t, r, i = String(e), a = "", c = 0, u = o; i.charAt(0 | c) || (u = "=", c % 1); a += u.charAt(63 & t >> 8 - c % 1 * 8)) {
                if ((r = i.charCodeAt(c += .75)) > 255) throw new n;
                t = t << 8 | r
            }
            return a
        }
        var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        n.prototype = new Error, n.prototype.code = 5, n.prototype.name = "InvalidCharacterError", e.exports = r
    },
    65: function(e, exports, t) {
        "use strict";
        var n = t(7);
        e.exports = n.isStandardBrowserEnv() ? function() {
            return {
                write: function(e, t, r, o, i, a) {
                    var c = [];
                    c.push(e + "=" + encodeURIComponent(t)), n.isNumber(r) && c.push("expires=" + new Date(r).toGMTString()), n.isString(o) && c.push("path=" + o), n.isString(i) && c.push("domain=" + i), !0 === a && c.push("secure"), document.cookie = c.join("; ")
                },
                read: function(e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            }
        }() : function() {
            return {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        }()
    },
    66: function(e, exports, t) {
        "use strict";

        function n() {
            this.handlers = []
        }
        var r = t(7);
        n.prototype.use = function(e, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t
            }), this.handlers.length - 1
        }, n.prototype.eject = function(e) {
            this.handlers[e] && (this.handlers[e] = null)
        }, n.prototype.forEach = function(e) {
            r.forEach(this.handlers, function(t) {
                null !== t && e(t)
            })
        }, e.exports = n
    },
    67: function(e, exports, t) {
        "use strict";

        function n(e) {
            e.cancelToken && e.cancelToken.throwIfRequested()
        }
        var r = t(7),
            o = t(68),
            i = t(28),
            a = t(15),
            c = t(69),
            u = t(70);
        e.exports = function(e) {
            return n(e), e.baseURL && !c(e.url) && (e.url = u(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
                delete e.headers[t]
            }), (e.adapter || a.adapter)(e).then(function(t) {
                return n(e), t.data = o(t.data, t.headers, e.transformResponse), t
            }, function(t) {
                return i(t) || (n(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
            })
        }
    },
    68: function(e, exports, t) {
        "use strict";
        var n = t(7);
        e.exports = function(e, t, r) {
            return n.forEach(r, function(n) {
                e = n(e, t)
            }), e
        }
    },
    69: function(e, exports, t) {
        "use strict";
        e.exports = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    },
    7: function(e, exports, t) {
        "use strict";

        function n(e) {
            return "[object Array]" === R.call(e)
        }

        function r(e) {
            return "[object ArrayBuffer]" === R.call(e)
        }

        function o(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        }

        function i(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        }

        function a(e) {
            return "string" == typeof e
        }

        function c(e) {
            return "number" == typeof e
        }

        function u(e) {
            return void 0 === e
        }

        function s(e) {
            return null !== e && "object" == typeof e
        }

        function f(e) {
            return "[object Date]" === R.call(e)
        }

        function d(e) {
            return "[object File]" === R.call(e)
        }

        function l(e) {
            return "[object Blob]" === R.call(e)
        }

        function p(e) {
            return "[object Function]" === R.call(e)
        }

        function m(e) {
            return s(e) && p(e.pipe)
        }

        function g(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        }

        function h(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }

        function v() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        }

        function _(e, t) {
            if (null !== e && void 0 !== e)
                if ("object" != typeof e && (e = [e]), n(e))
                    for (var r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
                else
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
        }

        function b() {
            function e(e, n) {
                "object" == typeof t[n] && "object" == typeof e ? t[n] = b(t[n], e) : t[n] = e
            }
            for (var t = {}, n = 0, r = arguments.length; n < r; n++) _(arguments[n], e);
            return t
        }

        function w(e, t, n) {
            return _(t, function(t, r) {
                e[r] = n && "function" == typeof t ? y(t, n) : t
            }), e
        }
        var y = t(25),
            O = t(37),
            R = Object.prototype.toString;
        e.exports = {
            isArray: n,
            isArrayBuffer: r,
            isBuffer: O,
            isFormData: o,
            isArrayBufferView: i,
            isString: a,
            isNumber: c,
            isObject: s,
            isUndefined: u,
            isDate: f,
            isFile: d,
            isBlob: l,
            isFunction: p,
            isStream: m,
            isURLSearchParams: g,
            isStandardBrowserEnv: v,
            forEach: _,
            merge: b,
            extend: w,
            trim: h
        }
    },
    70: function(e, exports, t) {
        "use strict";
        e.exports = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    },
    71: function(e, exports, t) {
        "use strict";

        function n(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function(e) {
                t = e
            });
            var n = this;
            e(function(e) {
                n.reason || (n.reason = new r(e), t(n.reason))
            })
        }
        var r = t(29);
        n.prototype.throwIfRequested = function() {
            if (this.reason) throw this.reason
        }, n.source = function() {
            var e;
            return {
                token: new n(function(t) {
                    e = t
                }),
                cancel: e
            }
        }, e.exports = n
    },
    72: function(e, exports, t) {
        "use strict";
        e.exports = function(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
    },
    73: function(e, exports) {
        var t = [].indexOf;
        e.exports = function(e, n) {
            if (t) return e.indexOf(n);
            for (var r = 0; r < e.length; ++r)
                if (e[r] === n) return r;
            return -1
        }
    },
    74: function(e, exports, t) {
        (function(t) {
            function n(e) {
                "@babel/helpers - typeof";
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var require, require;
            ! function(r) {
                if ("object" == n(exports)) e.exports = r();
                else {
                    var o;
                    "undefined" != typeof window ? o = window : void 0 !== t ? o = t : "undefined" != typeof self && (o = self), o.sufei = r()
                }
            }(function() {
                return function e(t, n, r) {
                    function o(a, c) {
                        if (!n[a]) {
                            if (!t[a]) {
                                var u = "function" == typeof require && require;
                                if (!c && u) return require(a, !0);
                                if (i) return i(a, !0);
                                throw new Error("Cannot find module '" + a + "'")
                            }
                            var s = n[a] = {
                                exports: {}
                            };
                            t[a][0].call(s.exports, function(e) {
                                var n = t[a][1][e];
                                return o(n || e)
                            }, s, s.exports, e, t, n, r)
                        }
                        return n[a].exports
                    }
                    for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
                    return o
                }({
                    1: [function(e, t, n) {
                        function r(e) {
                            return this instanceof r || !d(e) ? void 0 : i(e)
                        }

                        function o(e) {
                            var t, n;
                            for (t in e) n = e[t], r.Mutators.hasOwnProperty(t) ? r.Mutators[t].call(this, n) : this.prototype[t] = n
                        }

                        function i(e) {
                            return e.extend = r.extend, e.implement = o, e
                        }

                        function a() {}

                        function c(e, t, n) {
                            for (var r in t)
                                if (t.hasOwnProperty(r)) {
                                    if (n && -1 === l(n, r)) continue;
                                    "prototype" !== r && (e[r] = t[r])
                                }
                        }
                        t.exports = r, r.create = function(e, t) {
                            function n() {
                                e.apply(this, arguments), this.constructor === n && this.initialize && this.initialize.apply(this, arguments)
                            }
                            return d(e) || (t = e, e = null), t || (t = {}), e || (e = t.Extends || r), t.Extends = e, e !== r && c(n, e, e.StaticsWhiteList), o.call(n, t), i(n)
                        }, r.extend = function(e) {
                            return e || (e = {}), e.Extends = this, r.create(e)
                        }, r.Mutators = {
                            Extends: function(e) {
                                var t = this.prototype,
                                    n = u(e.prototype);
                                c(n, t), n.constructor = this, this.prototype = n, this.superclass = e.prototype
                            },
                            Implements: function(e) {
                                f(e) || (e = [e]);
                                for (var t, n = this.prototype; t = e.shift();) c(n, t.prototype || t)
                            },
                            Statics: function(e) {
                                c(this, e)
                            }
                        };
                        var u = Object.__proto__ ? function(e) {
                                return {
                                    __proto__: e
                                }
                            } : function(e) {
                                return a.prototype = e, new a
                            },
                            s = Object.prototype.toString,
                            f = Array.isArray || function(e) {
                                return "[object Array]" === s.call(e)
                            },
                            d = function(e) {
                                return "[object Function]" === s.call(e)
                            },
                            l = Array.prototype.indexOf ? function(e, t) {
                                return e.indexOf(t)
                            } : function(e, t) {
                                for (var n = 0, r = e.length; r > n; n++)
                                    if (e[n] === t) return n;
                                return -1
                            }
                    }, {}],
                    2: [function(e, t, n) {
                        t.exports = {
                            app: "seed",
                            style: "app/common/sufei-tb.css"
                        }
                    }, {}],
                    3: [function(e, t, n) {
                        var r = {},
                            o = {};
                        r.on = function(e, t) {
                            return (o[e] || (o[e] = [])).push(t), r
                        }, r.off = function(e, t) {
                            if (!e && !t) return o = {}, r;
                            var n = o[e];
                            if (n)
                                if (t)
                                    for (var i = n.length - 1; i >= 0; i--) n[i] === t && n.splice(i, 1);
                                else delete o[e];
                            return r
                        }, r.fire = function(e, t) {
                            var n = o[e];
                            if (n) {
                                n = n.slice();
                                for (var i = 0, a = n.length; a > i; i++) n[i](t)
                            }
                            return r
                        }, t.exports = r
                    }, {}],
                    4: [function(e, t, n) {
                        var r = e("./mod/sufei-seed"),
                            o = e("./config/sufei-seed");
                        screen.width < 800 && (o.style = "app/common/sufei-h5.css");
                        var i = "0.3.116";
                        o.version = i, o.style = "//g.alicdn.com/sd/sufei/" + i + "/" + o.style, t.exports = new r(o), window.__sufei_injected__ = 1
                    }, {
                        "./config/sufei-seed": 2,
                        "./mod/sufei-seed": 6
                    }],
                    5: [function(e, t, n) {
                        var r = e("./utils");
                        t.exports = {
                            limit: function(e, t) {
                                var n = document.createElement("div"),
                                    o = {
                                        mask: "width: 100%;height: 100%;background-color: rgba(0, 0, 0, .7);position: fixed;top: 0;left: 0;",
                                        alert: "width: 60%;max-width: 350px;position: fixed;top: 40%;left: 0;right: 0;margin: auto;padding: 10px;box-sizing: border-box;background: #fcfcfc;border-radius: 4px;text-align: center;color: #666;",
                                        close: "color: #108ee9;border-top: 1px solid #ccc;margin-top: 10px;padding-top: 10px;"
                                    },
                                    i = e.ret && e.ret[0];
                                i && i.indexOf("::") > -1 && (i = i.split("::")[1], (i = "\u6d41\u91cf\u9650\u5236") && (i = "\u54ce\u5466\u5582\uff0c\u6324\u7206\u4e86\uff01\uff01")), n.innerHTML = '<div style="' + o.mask + '" id="mask"></div><div style="' + o.alert + '"id="alert"><div>' + i + '</div><div id="sufei-dialog-close" style="' + o.close + '">\u7a0d\u540e\u91cd\u8bd5</div></div>', document.body.appendChild(n);
                                var a = document.getElementById("sufei-dialog-close");
                                r.addEvent("click", a, function() {
                                    n.innerHTML = "", t && t(!1, {})
                                })
                            },
                            antiFlood: function(e) {
                                e.AntiFloodReferer ? location.href = e.data.url.replace(/(http_referer=).+/, "$1" + e.AntiFloodReferer) : location.href = e.data.url
                            },
                            antiCreep: function(e, t) {
                                var n = function() {
                                    var n = window.__sufeiCaller__,
                                        r = {
                                            data: "",
                                            url: ""
                                        };
                                    n.check(e, r).then(function() {});
                                    var o = !1;
                                    n.on("event:resendRequest@sufei-caller", function(e) {
                                        o = !0, t && t(!1, e)
                                    }), n.on("event:dialogHide@sufei", function(e) {
                                        o || t && t(!1, e || {})
                                    })
                                };
                                return window.__sufeiCaller__ ? void n(window.__sufeiCaller__) : ("undefined" == typeof sufei && (window.sufei = {}), window.__sufeiSeed__ = sufei, void r.loadJS("https://g.alicdn.com/sd/sufei/0.3.116/app/common/sufei-caller.js", {}, function() {
                                    window.__sufeiCaller__ = sufei, window.__sufeiCaller__.dialogWrapper = window.__sufeiSeed__.dialogWrapper, window.sufei = __sufeiSeed__, n()
                                }))
                            }
                        }
                    }, {
                        "./utils": 7
                    }],
                    6: [function(e, t, n) {
                        var r = e("../utils"),
                            o = e("../emit"),
                            i = e("../class"),
                            a = e("../intercept-handler"),
                            c = i.create({
                                initialize: function() {
                                    o.on("event:triggerFn@sufei", this.callback)
                                },
                                check: function(e, t) {
                                    var n = this;
                                    this.initialize(e, t), e.url = e.url || e.data && e.data.url || "";
                                    var o = r.checkResult(e);
                                    o.pass ? t(!0, e) : (n.queue = n.queue || [], n.queue.push({
                                        result: e,
                                        fn: t
                                    }), 1 === n.queue.length && a[o.interceptType] && a[o.interceptType].call(this, e, function(e, t) {
                                        n.callback(e, t)
                                    }))
                                },
                                callback: function(e, t) {
                                    var n = this;
                                    n.queue && (n.queue.forEach(function(n) {
                                        n.fn && n.fn(e, t)
                                    }), n.queue = [])
                                }
                            });
                        t.exports = c
                    }, {
                        "../class": 1,
                        "../emit": 3,
                        "../intercept-handler": 5,
                        "../utils": 7
                    }],
                    7: [function(e, t, r) {
                        var o = document,
                            i = "rgv587_flag",
                            a = "sm",
                            c = "RGV587_ERROR::SM",
                            u = "assist_flag",
                            s = {
                                loadJS: function(e, t, n) {
                                    var r, i = [];
                                    if ("string" == typeof t) i.push(t);
                                    else
                                        for (r in t) t.hasOwnProperty(r) && i.push(r + "=" + encodeURIComponent(t[r]));
                                    e = e + (-1 == e.indexOf("?") ? "?" : "&") + i.join("&");
                                    var a = "script",
                                        c = o.getElementsByTagName(a)[0],
                                        u = o.createElement(a);
                                    if (u.async = 1, u.src = e, n) {
                                        var s = !1;
                                        u.onload = u.onreadystatechange = function() {
                                            s || u.readyState && !/loaded|complete/.test(u.readyState) || (u.onload = u.onreadystatechange = null, s = !0, n())
                                        }
                                    }
                                    c.parentNode.insertBefore(u, c)
                                },
                                checkResult: function(e) {
                                    if (e) {
                                        var t = e.ret;
                                        "object" == n(t) && (t = JSON.stringify(t)), (e && e[i] === a || e[i + "0"] === a) && (t = c), e && "true" === e[u] && (t = c);
                                        var r = "";
                                        t && (t.indexOf(c) > -1 || t.indexOf(u) > -1 ? r = "antiCreep" : t.indexOf("FAIL_SYS_USER_VALIDATE") > -1 ? r = "antiFlood" : (t.indexOf("FAIL_SYS_TRAFFIC_LIMIT::\u6d41\u91cf\u9650\u5236") > -1 || t.indexOf("FAIL_SYS_FLOWLIMIT") > -1 || t.indexOf("FAIL_SYS_TRAFFIC_LIMIT") > -1) && (r = "limit"));
                                        var o = "antiCreep" === r;
                                        return {
                                            pass: !r,
                                            interceptType: r,
                                            isAntiFlood: "antiFlood" === r,
                                            isAntiCreep: o,
                                            immediate: o && e[i + "0"] !== a
                                        }
                                    }
                                    return {
                                        pass: !0
                                    }
                                },
                                addEvent: function(e, t, n) {
                                    t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent("on" + e, n)
                                },
                                removeEvent: function(e, t, n) {
                                    t.removeEventListener ? t.addEventListener(e, n, !1) : t.detachEvent("on" + e, n)
                                },
                                getDomainURI: function(e) {
                                    var t = /(https|http):\/\/([^\/]+)\//i,
                                        n = e.match(t);
                                    return n ? n[0] : ""
                                }
                            };
                        t.exports = s
                    }, {}]
                }, {}, [4])(4)
            })
        }).call(exports, t(12))
    },
    75: function(e, exports, t) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = ["LZD_MEMBER_USER_1000", "LZD_MEMBER_USER_1001", "LZD_MEMBER_USER_1010", "LZD_MEMBER_USER_1014", "LZD_MEMBER_USER_1018", "LZD_MEMBER_USER_1021", "LZD_MEMBER_CACHE_1000", "LZD_MEMBER_SESSION_1000", "LZD_MEMBER_SESSION_1001", "LZD_MEMBER_ADDRESS_1000", "LZD_MEMBER_ADDRESS_1001", "LZD_PA_INNER_ERROR", "RO_ACTIVITY_SCENARIO_001", "RO_ORDER_VALIDATE_001", "RO_ORDER_VALIDATE_002", "RO_ORDER_VALIDATE_003", "RO_ORDER_VALIDATE_004", "RO_ORDER_VALIDATE_005", "RO_ORDER_VALIDATE_006", "RO_ORDER_VALIDATE_007", "RO_ORDER_VALIDATE_008", "RO_ORDER_VALIDATE_009", "RO_ORDER_VALIDATE_010", "RO_ORDER_VALIDATE_011", "RO_ORDER_VALIDATE_012", "RO_ORDER_VALIDATE_013", "RO_ORDER_VALIDATE_014", "RO_ORDER_VALIDATE_015", "RO_ORDER_VALIDATE_016", "RO_ORDER_VALIDATE_017", "RO_ORDER_VALIDATE_018", "RO_ORDER_VALIDATE_019", "RO_ORDER_VALIDATE_020", "RO_ORDER_VALIDATE_021", "RO_ORDER_CAN_APPLY_EMPTY", "RO_ORDER_RENDER_001", "RO_ORDER_RENDER_002", "RO_REASON_RENDER_001", "RO_REASON_QUERY_001", "RO_REASON_ERROR_001", "RO_REASON_QUERY_002", "RO_LOGISTIC_ERROR_001", "RO_LOGISTIC_ERROR_002", "RO_LOGISTIC_ERROR_003", "RO_LOGISTIC_ERROR_004", "RO_LOGISTIC_ERROR_005", "RO_LOGISTIC_ERROR_006", "RO-RULE-ERROR-001", "RO-RULE-ERROR-002", "RO-RULE-ERROR-003", "RO-RULE-ERROR-004", "RO-RULE-QUERY-001", "RO-RETURN-POLICY-001", "RO_RETURN-POLICY_002", "RO-RETURN-POLICY-DUPLICATE", "RO-REFUND-TYPE-DUPLICATE", "RO-RETURN-POLICY-QUERY-001", "RO_ORDER_CREATE_OFC_001", "RO_OFC_STATUS_CHANGED_001", "RO_RECORD_QUERY_001", "RO_RECORD_VALIDATE_001", "RO_RECORD_VALIDATE_002", "RO_RECORD_CREATE_001", "RO_FUNDS_BANK_ERROR", "RO_FUNDS_PAYMENT_ERROR", "RO_ORDER_ERROR_001", "RO_WORKFLOW_PROCESS_ERROR_001", "RO_WORKFLOW_PROCESS_ERROR_002", "RO_WORKFLOW_GATEWAY_ERROR_001", "RO_WORKFLOW_GATEWAY_ERROR_002", "RO_WORKFLOW_GATEWAY_ERROR_003", "RO_WORKFLOW_ACTIVITY_ERROR_001", "RO_WORKFLOW_ACTIVITY_ERROR_002", "RO_WORKFLOW_ACTIVITY_ERROR_003", "RO_WORKFLOW_ACTIVITY_ERROR_004", "RO_WORKFLOW_ACTIVITY_ERROR_005", "LZD_REVIEW_COMMON_FAILED", "LZD_REVIEW_COMMON_TOKEN_FAILED", "PAYMENT_ULTRON_RENDER_ERROR", "PAYMENT_ULTRON_ADJUST_ERROR", "LZD_BUY_PAYMENT_001", "LZD_BUY_PAYMENT_002", "LZD_BUY_PAYMENT_003", "LZD_BUY_PAYMENT_005", "LZD_BUY_RENDER_006"]
    }
});