! function(e, t) {
    var n = 1e4,
        g_moduleConfig = {
            uabModule: {
                grey: ["AWSC/uab/1.140.0/collina.js"],
                stable: ["AWSC/uab/1.140.0/collina.js"],
                greyBr: ["AWSC-br/uab/1.140.0/collina.js"],
                stableBr: ["AWSC-br/uab/1.140.0/collina.js"],
                ratio: 1e4,
                greyConfig: {},
                stableConfig: {}
            },
            fyModule: {
                grey: ["AWSC/fireyejs/1.228.23/fireyejs.js"],
                stable: ["AWSC/fireyejs/1.227.0/fireyejs.js"],
                greyBr: ["AWSC-br/fireyejs/1.227.0/fireyejs.js"],
                stableBr: ["AWSC-br/fireyejs/1.227.0/fireyejs.js"],
                ratio: 3e3,
                greyConfig: {},
                stableConfig: {}
            },
            nsModule: {
                grey: ["js/nc/60.js"],
                stable: ["js/nc/60.js"],
                ratio: 1e4,
                greyConfig: {},
                stableConfig: {}
            },
            umidPCModule: {
                grey: ["AWSC/WebUMID/1.93.0/um.js"],
                stable: ["AWSC/WebUMID/1.93.0/um.js"],
                greyBr: ["AWSC-br/WebUMID/1.93.0/um.js"],
                stableBr: ["AWSC-br/WebUMID/1.93.0/um.js"],
                ratio: 1e4,
                greyConfig: {},
                stableConfig: {}
            },
            etModule: {
                grey: ["AWSC/et/1.80.9/et_f.js", "AWSC/et/1.80.9/et_n.js"],
                stable: ["AWSC/et/1.77.4/et_f.js", "AWSC/et/1.77.4/et_n.js"],
                greyBr: ["AWSC-br/et/1.80.0/et_f.js", "AWSC-br/et/1.80.1/et_n.js"],
                stableBr: ["AWSC-br/et/1.80.0/et_f.js", "AWSC-br/et/1.80.1/et_n.js"],
                ratio: 1,
                greyConfig: {
                    whitelist: ["*"]
                },
                stableConfig: {
                    whitelist: ["*"]
                }
            },
            ncModule: {
                grey: ["AWSC/nc/1.97.0/nc.js"],
                stable: ["AWSC/nc/1.97.0/nc.js"],
                ratio: 1e4,
                greyConfig: {},
                stableConfig: {}
            }
        },
        o = [{
            name: "umidPCModule",
            features: ["umpc", "um", "umh5"],
            depends: [],
            sync: !1
        }, {
            name: "uabModule",
            features: ["uab"],
            depends: [],
            sync: !1
        }, {
            name: "fyModule",
            features: ["fy"],
            depends: [],
            sync: !1
        }, {
            name: "nsModule",
            features: ["ns"],
            depends: [],
            sync: !1
        }, {
            name: "etModule",
            features: ["et"],
            depends: [],
            sync: !1
        }, {
            name: "ncModule",
            features: ["nc", "nvc", "ic"],
            depends: ["fy"],
            sync: !1
        }],
        r = navigator.userAgent,
        a = r.match(/Chrome\/(\d*)/);
    a && (a = +a[1]);
    var i = r.match(/Edge\/([\d]*)/),
        s = r.match(/Safari\/([\d]*)/),
        c = r.match(/Firefox\/([\d]*)/),
        d = r.match(/MSIE|Trident/);

    function u() {
        var e = "function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D";
        return "WebkitAppearance" in document.documentElement.style && escape(navigator.javaEnabled.toString()) === e ? !0 : !1
    }

    function l(t, o) {
        var r = "AWSC_SPECIFY_" + t.toUpperCase() + "_ADDRESSES";
        if (e[r]) return e[r];
        var l = {
            normalAddresses: [],
            brAddresses: []
        };
        for (var f in g_moduleConfig)
            if (g_moduleConfig.hasOwnProperty(f) && f === t) {
                var m = g_moduleConfig[f],
                    g = Math.ceil(Math.random() * n) <= m.ratio;
                l.normalAddresses = g ? m.grey.slice() : m.stable.slice(), m.stableBr && m.greyBr && (l.brAddresses = g ? m.greyBr.slice() : m.stableBr.slice()), "etModule" === t && (i ? (l.normalAddresses.pop(), l.brAddresses.pop()) : a ? (l.normalAddresses.pop(), l.brAddresses.pop()) : s || c || d ? (l.normalAddresses.shift(), l.brAddresses.shift()) : u() ? (l.normalAddresses.pop(), l.brAddresses.pop()) : (l.normalAddresses.shift(), l.brAddresses.shift()));
                for (var p = 0; p < l.normalAddresses.length; p++) {
                    var b = o ? "https://" + o + "/" : A;
                    ("https://assets.alicdn.com/" === b || "https://lzd-g.slatic.net/" === b || "https://g.lazcdn.com/" === b) && (b += "g/"), l.normalAddresses[p] = b + l.normalAddresses[p], l.brAddresses[p] && (l.brAddresses[p] = b + l.brAddresses[p])
                }
                return l
            }
    }
    var f = [],
        m = "loading",
        g = "loaded",
        p = "timeout",
        b = "unexpected",
        h = "no such feature",
        v = new RegExp("^([\\w\\d+.-]+:)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(\\?[^#]*)?(#.*)?$"),
        A = U(D());

    function y(e, t, n) {
        try {
            var o = e + "=";
            t && (o += "; domain=" + t + "; path= /;"), o += "; expires=Thu, 01 Jan 1970 00:00:00 GMT", n && (o += "; SameSite=None; Secure", o += "; Partitioned"), document.cookie = o
        } catch (r) {}
    }
    try {
        var C = window.awscrprtrt || 1;
        if (Math.random() < C) {
            var w = window.location.hostname,
                j = /^(\d+\.)*\d+$/;
            if (!j.test(w)) {
                var S = "(^|\\.)" + w.replace(/\./g, "\\.") + "$",
                    _ = e.RegExp(S, "i"),
                    T = w.split("."),
                    W = T.length;
                if (W > 1) {
                    W = W > 5 ? 5 : W, w = T.pop();
                    for (var k = 2; W >= k; k++) w = T.pop() + "." + w, y("tfstk", w, !0)
                }
            }
        }
    } catch (M) {}

    function U(e) {
        var t = "https://g.alicdn.com/";
        if (!e) return t;
        if (/aliexpress/.test(location.href)) return "https://aeis.alicdn.com/";
        var n = v.exec(e);
        return n ? "https://" + n[3] + (n[4] ? ":" + n[4] : "") + "/" : t
    }

    function D() {
        for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) {
            var n = e[t],
                o = n.hasAttribute ? n.src : n.getAttribute("src", 4);
            if (/\/awsc\.js/.test(o)) return o
        }
    }

    function x(e) {
        for (var t = void 0, n = 0; n < o.length; n++) {
            for (var r = o[n], a = 0; a < r.features.length; a++)
                if (r.features[a] === e) {
                    t = r;
                    break
                }
            if (t) break
        }
        return t
    }

    function E(e) {
        for (var t = 0; t < f.length; t++) {
            var n = f[t];
            if (n.name === e) return n
        }
    }

    function B(e) {
        for (var t = void 0, n = 0; n < o.length; n++) {
            var r = o[n];
            if (r.name === e) {
                t = r;
                break
            }
            if (t) break
        }
        return t
    }

    function F(e, n, o) {
        if (o)
            for (var r = 0; r < e.normalAddresses.length; r++) {
                var a = e.normalAddresses[r];
                t.write("<script src=" + a + "></script>")
            } else {
                function i(e, o, r) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a],
                            s = t.createElement("script");
                        s.async = !1, s.src = i, s.id = n;
                        var c = (new Date).getTime();
                        s.onerror = o || function() {};
                        var d = window.awscrprtrt || .001;
                        Math.random() < d ? s.onload = r || function() {
                            I("loadtime", "loadid=" + n + "&time=" + ((new Date).getTime() - c), "awsc_load")
                        } : s.onload = r || function() {};
                        var u = t.getElementsByTagName("script")[0];
                        u && u.parentNode ? u.parentNode.insertBefore(s, u) : (u = t.body || t.head, u && u.appendChild(s))
                    }
                }
                i(e.normalAddresses)
            }
    }

    function I(t, n, o) {
        var r = "https://acjs.aliyun.com/error?v=" + t + "&e=" + encodeURIComponent(n) + "&stack=" + encodeURIComponent(o) + "&version=1.0.0&log=awsc&href=" + encodeURIComponent(location.href),
            a = new Image,
            i = "_awsc_img_" + Math.floor(1e6 * Math.random());
        e[i] = a, a.onload = a.onerror = function() {
            try {
                delete e[i]
            } catch (t) {
                e[i] = null
            }
        }, a.src = r
    }

    function Y(e, t) {
        Math.random() < 1e-4 && I("awsc_state", "feature=" + e.name + "&state=" + e.state + "&href=" + encodeURIComponent(location.href));
        for (var n = void 0; n = e.callbacks.shift();) try {
            if ("function" == typeof n) n(e.state, e.exportObj);
            else if ("object" == typeof n) {
                var o = e.exportObj;
                o && "function" == typeof o.init && o.init(n)
            }
        } catch (r) {
            if (t) throw r;
            I(e.name, r.message, r.stack)
        }
    }

    function O(e, t, n, o) {
        var r = x(e);
        if (!r) return "function" == typeof t && t(h), void 0;
        var a = n && n.cdn,
            i = n && n.sync,
            s = n && n.timeout || 5e3;
        if (0 !== r.depends.length)
            for (var c = 0; c < r.depends.length; c++) {
                var d = r.depends[c];
                n && (delete n.sync, delete n.timeout, delete n.cdn), R(d, void 0, n)
            }
        var u = o || {};
        u.module = r, u.name = e, u.state = m, u.callbacks = u.callbacks || [], u.options = n, t && u.callbacks.push(t), u.timeoutTimer = setTimeout(function() {
            u.state = p, Y(u, n && n.throwExceptionInCallback)
        }, s), o || f.push(u);
        var g = r.sync;
        i && (g = i);
        var b = l(r.name, a);
        F(b, "AWSC_" + r.name, g)
    }

    function R(e, t, n) {
        var o = E(e);
        if (o)
            if (o.state === p) O(e, t, n, o);
            else if (o.state === g) {
            if ("function" == typeof t) t(o.state, o.exportObj);
            else if ("object" == typeof t) {
                var r = o.exportObj;
                r && "function" == typeof r.init && r.init(t)
            }
        } else o.state === m ? t && o.callbacks.push(t) : void 0;
        else O(e, t, n)
    }

    function N(e, t, n) {
        var o = !1;
        try {
            var r = B(e);
            r || void 0, r.moduleLoadStatus = g;
            for (var a = void 0, i = 0; i < f.length; i++) {
                var s = f[i];
                s.module === r && s.name === t && (o = s.options && s.options.throwExceptionInCallback, a = s, clearTimeout(a.timeoutTimer), delete a.timeoutTimer, a.exportObj = n, s.state === m || s.state === p ? (a.state = g, setTimeout(function() {
                    Y(a, o)
                }, 0)) : void 0)
            }
            a || (a = {}, a.module = r, a.name = t, a.state = g, a.exportObj = n, a.callbacks = [], f.push(a))
        } catch (c) {
            if (o) throw c;
            I("awsc_error", c.message, c.stack)
        }
    }

    function P(e) {
        e.AWSCFY = function() {}, e.AWSC.configFY = function(e, n, o, r) {
            return t(e, n, o, r)
        }, e.AWSC.configFYSync = function(e, n) {
            return t(null, e, n)
        };

        function t(t, n, o, r) {
            var a = location.protocol + "//" + location.host + location.pathname,
                i = new e.AWSCFY;
            e._umopt_npfp = 0;
            var s = !1;
            i.umidToken = "defaultToken1_um_not_loaded@@" + a + "@@" + (new Date).getTime(), e.AWSC.use("um", function(e, t) {
                "loaded" === e ? (i.umidToken = "defaultToken3_init_callback_not_called@@" + a + "@@" + (new Date).getTime(), t.init(n, function(e, t) {
                    "success" === e ? i.umidToken = t.tn : i.umidToken = "defaultToken4_init_failed with " + e + "@@" + a + "@@" + (new Date).getTime(), s = !0, u()
                })) : (i.umidToken = "defaultToken2_load_failed with " + e + "@@" + a + "@@" + (new Date).getTime(), s = !0, u())
            });
            var c = !1;
            if (i.getUA = function() {
                    return "defaultUA1_uab_not_loaded@@" + a + "@@" + (new Date).getTime()
                }, e.AWSC.use("uab", function(e, t) {
                    c = !0, "loaded" === e ? (i.uabModule = t, i.uabConfig = o, i.getUA = function() {
                        return this.uabModule.getUA(this.uabConfig)
                    }) : i.getUA = function() {
                        return "defaultUA2_load_failed with " + e + "@@" + a + "@@" + (new Date).getTime()
                    }, u()
                }), null != t) var d = e.setTimeout(function() {
                u(!0)
            }, r ? r : 2e3);

            function u(n) {
                null != t && (c && s || n) && (t(i), e.clearTimeout(d))
            }
            return null == t ? i : void 0
        }
    }

    function $(e) {
        var t = function() {};
        e.AWSC.configFYEx = function(e, t, o) {
            return n(e, t, o)
        }, e.AWSC.configFYSyncEx = function(e) {
            return n(null, e)
        };

        function n(n, o, r) {
            var a = (location.protocol + "//" + location.host + location.pathname).substr(0, 128),
                i = new t;
            if (r = r || 5e3, "function" == typeof n) var s = e.setTimeout(function() {
                c()
            }, r);

            function c() {
                "function" == typeof n && (n(i), e.clearTimeout(s))
            }
            return i.getFYToken = i.getUidToken = function() {
                return "defaultFY1_fyjs_not_loaded@@" + a + "@@" + (new Date).getTime()
            }, e.fyglobalopt = o, e.AWSC.use("fy", function(e, t) {
                "loaded" === e ? (i.getFYToken = i.getUidToken = function() {
                    return "defaultFY3_fyjs_not_initialized@@" + a + "@@" + (new Date).getTime()
                }, i.fyObj = t, t.init(o, function(e) {
                    i.getFYToken = function(e) {
                        return o.reqUrl = e, this.fyObj.getFYToken(o)
                    }, i.getUidToken = function() {
                        return this.fyObj.getUidToken(o)
                    }, c()
                })) : (i.getFYToken = i.getUidToken = function() {
                    return "defaultFY2_load_failed with " + e + "@@" + a + "@@" + (new Date).getTime()
                }, c())
            }, {
                timeout: r
            }), "function" == typeof n ? void 0 : i
        }
    }

    function z(e) {
        var t = g_moduleConfig.etModule,
            o = Math.ceil(Math.random() * n) <= t.ratio,
            r = o ? t.greyConfig.whitelist : t.stableConfig.whitelist,
            a = new RegExp(("^" + r.join("$|^") + "$").replace(/\*/g, ".*"));
        a.test(location.host + location.pathname) && (window.etrprtrt = .01, e.__etModule || e.AWSC.use("et"))
    }
    var q = window.awscrprtrt || .01;
    Math.random() < q && I("init", "report", "awsc");

    function G(e) {
        e.AWSC || (e.AWSC = {}, e.AWSC.use = R, e.AWSCInner = {}, e.AWSCInner.register = N, P(e), $(e), z(e))
    }
    G(e)
}(window, document);