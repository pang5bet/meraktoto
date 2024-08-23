! function() {
    "use strict";
    var e = location,
        a = document,
        t = function(t, o, n, r) {
            (void 0 === o && (o = 1), void 0 === n && (n = .1), void 0 === r && (r = "baxia-fast"), 0 >= n || Math.random() < n) && function(e, a) {
                var t = [];
                for (var o in e) t.push(o + "=" + encodeURIComponent(e[o]));
                (new Image).src = a + t.join("&")
            }({
                code: o,
                msg: t + "",
                pid: r,
                page: e.href.split(/[#?]/)[0],
                query: e.search.substr(1),
                hash: e.hash,
                referrer: a.referrer,
                title: a.title,
                ua: navigator.userAgent
            }, "//gm.mmstat.com/fsp.1.1?")
        };
    var o = ["alires", "pha_pageheader", "pha_header", "/punish", "fourier.taobao.com/assist", "fourier.alibaba.com/assist", "market.m.taobao.com/app/tbhome/common/index.html", ".sm.cn", ".sm-tc.cn", ".alipay.com", ".aliyun.com", "error.taobao.com", "sialiagames", "vntth", "qookkagames", "mobijoygames"];
    var n = document,
        r = window,
        c = "https://bdc.alibabachengdun.com/wcfg.json";
    location.hostname.includes("taobao.com") ? c = "https://umdc.taobao.com/wcfg.json" : location.hostname.includes("tmall.com") && (c = "https://umdc.tmall.com/wcfg.json");
    var i = function(e) {
            for (var a = n.cookie.split(";"), t = 0; a.length > t; t++) {
                var o = a[t].split("=");
                if (e.trim() === o[0].trim()) try {
                    return decodeURIComponent(o[1])
                } catch (r) {
                    return o[1]
                }
            }
            return null
        },
        s = function(e) {
            "fireye" === e.name && r.AWSC && r.AWSC.configFYEx ? r.AWSC.configFYEx(function(a) {
                a && a.fyObj && a.fyObj.UBInit && a.fyObj.UBInit(e.params || {})
            }) : e.url && function(e, a, o, r) {
                if (!e) return a();
                var c = n.getElementsByTagName("script")[0],
                    i = n.createElement("script");
                if (i.async = !0, i.src = e, r && (i.bxOriginUrl = r), e.indexOf("alicdn") > -1 && (i.crossOrigin = !0), i.onerror = function(a) {
                        t("function:loadJS web_behavior_sample error. msg:" + e + "load error。props：" + JSON.stringify(o)), i.onerror = null
                    }, a) {
                    var s = !1;
                    i.onload = i.onreadystatechange = function() {
                        s || i.readyState && !/loaded|complete/.test(i.readyState) || (i.onload = i.onreadystatechange = null, s = !0, a())
                    }
                }
                c.parentNode.insertBefore(i, c)
            }(e.url, function() {
                t("function:web_behavior_sample request success", 12, .01, "spl")
            })
        },
        l = function() {
            var e = window.etSign && window.etSign();
            e || (e = i("tfstk"));
            var a = i("cookie2"),
                o = i("unb"),
                n = i("sgcookie"),
                l = i("cna"),
                m = window.location.href;
            m && m.length > 512 && (m = m.substring(0, 512));
            try {
                var d = +new Date,
                    u = localStorage.getItem("web_behavior_time"),
                    f = localStorage.getItem("web_behavior_jsArr_conf");
                if (u && +u >= d) {
                    if (!f) return;
                    return f && "string" == typeof f && (f = JSON.parse(f)), void(f && f.length && setTimeout(function() {
                        s(f[0])
                    }, 300))
                }
            } catch (h) {
                t("function:web_behavior_sample local init error", 12, 1, "spl")
            }
            var p = {};
            e && (p.bx_et = e), a && (p.cookie2 = a), n && (p.sgcookie = n), o && (p.unb = o), l && (p.cna = l), m && (p.href = m),
                function(e) {
                    e = e || {};
                    var a = [];
                    for (var t in e.data) a.push(encodeURIComponent(t) + "=" + encodeURIComponent(e.data[t]));
                    a.push(("v=" + Math.random()).replace(".", ""));
                    var o = a.join("&"),
                        n = new XMLHttpRequest;
                    n.onreadystatechange = function() {
                        if (4 === n.readyState) {
                            var a = n.status;
                            a >= 200 && 300 > a ? e.success && e.success(n.responseText, n.responseXML) : e.error && e.error(a)
                        }
                    }, "GET" === e.type ? (n.open("GET", e.url + "?" + o, !0), n.send(null)) : "POST" === e.type && (n.open("POST", e.url, !0), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.send(o))
                }({
                    url: c,
                    type: "GET",
                    dataType: "json",
                    data: p,
                    success: function(e) {
                        try {
                            if (e && "string" == typeof e && (e = JSON.parse(e)), e && e.succ) {
                                var a = e.dt,
                                    o = a.cacheAge,
                                    n = a.jsList;
                                if (o && r.localStorage) o = +o, localStorage.setItem("web_behavior_time", +new Date + 1e3 * o), n && n.length && (localStorage.setItem("web_behavior_jsArr_conf", JSON.stringify(n)), s(n[0]))
                            }
                        } catch (h) {
                            t("function:web_behavior_sample request error", 12, 1, "spl")
                        }
                    },
                    error: function(e) {
                        t("function:web_behavior_sample request net error", 12, 1, "spl")
                    }
                })
        },
        m = document,
        d = 1,
        u = function(e, a, o) {
            if (!e) return a();
            var n = m.getElementsByTagName("script")[0],
                r = m.createElement("script");
            if (r.async = !0, r.src = e, (e.indexOf("alicdn") > -1 || e.indexOf("lazcdn") > -1 || e.indexOf("lzd-g.slatic.net") > -1) && (r.crossOrigin = !0), r.onerror = function(n) {
                    5 > d ? (d++, u(e, a, o)) : (r.onerror = null, t("function:loadJS. msg:" + e + "load error。props：" + JSON.stringify(o)))
                }, a) {
                var c = !1;
                r.onload = r.onreadystatechange = function() {
                    c || r.readyState && !/loaded|complete/.test(r.readyState) || (r.onload = r.onreadystatechange = null, c = !0, a())
                }
            }
            n.parentNode.insertBefore(r, n)
        },
        f = function(e, a) {
            return !!e && e.indexOf(a) > -1
        },
        p = function() {
            if (document.currentScript) return document.currentScript;
            var e = null,
                a = document.getElementsByTagName("script"),
                t = null;
            try {
                throw Error()
            } catch (r) {
                var o, n = (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack) || [!1])[1];
                for (o in a)
                    if ((t = a[o]).src == n || "interactive" == t.readyState) return e = a[o], a[o]
            }
            return e
        },
        h = {
            "post.alibaba.com": ["/product/publish.htm"]
        };
    var g = location.href || "",
        b = location.host || "";
    try {
        u("https://g.alicdn.com/secdev/sufei_data/3.9.14/index.js", null, null)
    } catch (C) {
        t("sufei load erro:  " + C.message || C)
    }
    try {
        ["item.upload.taobao.com", "detail.m.tmall.com", "myseller.taobao.com", "detail.tmall.com", "sucai.wangpu.taobao.com", "market.m.taobao.com", "h5.m.taobao.com", "m.quark.cn", "m.taopiaopiao.com", "qn.taobao.com"].indexOf(b) > -1 && u("https://g.alicdn.com/AWSC/et/1.77.4/et_f.js", null, null)
    } catch (C) {
        t("et load erro:  " + C.message || C)
    }
    try {
        var v = !1;
        if (!window.AWSC && function() {
                var e = location.host || location.hostname,
                    a = h[e];
                if (!a || -1 >= a.indexOf(location.pathname)) {
                    var o = p(),
                        n = o && o.src ? o.src.match(/https\:\/\/([^&]+).alicdn/) : [, "g"],
                        r = n && n[1],
                        c = ""; - 1 === ["laz-g-cdn", "aeis", "assets"].indexOf(r) && (r = "g"), c = "https://" + r + ".alicdn.com/", "assets" === r && (c += "g/"), u(c + "AWSC/AWSC/awsc.js", function() {
                        t("funcion:load AWSC success. msg: " + c + "AWSC/AWSC/awsc.js", "load_awsc", .01)
                    }, null)
                }
            }(), g.indexOf("loadbaxiajs") > -1 || document.cookie.indexOf("loadbaxiajs") > -1) {
            var _ = null;
            if (g.indexOf("_set_bx_v_") > -1) {
                var y = g.match(/_set_bx_v_=([^&]+)/);
                _ = encodeURIComponent(y && y[1])
            }
            O(1, _), v = !0
        }
        var x = [];
        x.push("crm.simba.taobao.com"), x.push("7.alibaba-inc.com"), x.push("chaoshi.service.xixikf.cn"), x.push("taobao.service.xixikf.cn"), x.push("tongyi.aliyun.com/chat");
        for (var w = 0; x.length > w; w++) f(g, x[w]) && (v = !0);
        if (!self.baxiaCommon && !v) {
            t("init", "aplus_js_load", .01);
            var S = [];
            S.push({
                path: ".",
                ratio: 1,
                jsv: "2.5.16"
            });
            for (w = 0; S.length > w; w++) f(g, S[w].path) && O(S[w].ratio, S[w].jsv)
        }! function() {
            var e, a, n, r = (Math.random() + "").replace("0.", "");
            try {
                var c = document.cookie.match(/cna=([^;]+)/),
                    i = location.href || "",
                    s = "https://fourier.taobao.com/rp?ext=51&data=jm_" + (c && c[1]) + "&random=" + r + "&href=" + encodeURIComponent(i) + "&protocol=" + location.protocol + "&callback=jsonpCallback";
                (function() {
                    for (var e = location.href || "", a = 0; o.length > a; a++)
                        if (e.indexOf(o[a]) > -1) return !0;
                    return !1
                })() || document.cookie.indexOf("xlly") > -1 || (e = s, a = document.createElement("script"), n = document.getElementsByTagName("head")[0], a.type = "text/javascript", a.charset = "UTF-8", a.src = e, n.appendChild(a))
            } catch (C) {
                t(C.message + "random=" + r, 12, 1, "spl")
            }
        }()
    } catch (C) {
        t("err" + C.message, "aplus_js_baxia_err", 1)
    }
    var j = !1;

    function O(e, a) {
        if (void 0 === a && (a = "2.5.16"), e >= Math.random() && !j) {
            j = !0, t("baxiajs", "aplus_js_load", .01);
            var o = "//g.alicdn.com",
                n = self.goldlog;
            if (n && n.getCdnPath && (o = n.getCdnPath()), b && b.indexOf("www.miravia.") > -1 && (o = "//g.mdvcdn.com"), g.indexOf("_set_bx_v_") > -1) {
                var r = g.match(/_set_bx_v_=([^&]+)/);
                a = encodeURIComponent(r && r[1])
            }
            t("/sd/baxia/" + a + "/baxiaCommon.js", 13, .01), o = o + "/sd/baxia/" + a + "/baxiaCommon.js", g.indexOf("_set_bx_v_=debug") > -1 && (o = "http://localhost:8064/build/baxiaCommon.js"), u(o, null, null);
            try {
                l()
            } catch (C) {
                t("behaviorSample init error" + C.message, 12, 1, "spl")
            }
        }
    }
}();