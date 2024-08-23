var baxiaXhrHandler = function() {
    "use strict";
    var e = function(t, n) {
        return (e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
    };
    var t = function() {
            return (t = Object.assign || function(e) {
                for (var t, n = arguments, i = 1, o = arguments.length; o > i; i++)
                    for (var r in t = n[i]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        },
        n = window,
        i = function(e, t) {
            var i = n.__baxia__ || {};
            return e ? i[e] || t : i
        },
        o = function(e, t) {
            n.__baxia__ = n.__baxia__ || {}, n.__baxia__[e] = t
        },
        r = location,
        a = document,
        s = function(e, t, n, i, o) {
            if (void 0 === t && (t = 1), void 0 === n && (n = .1), 0 >= n || Math.random() < n) {
                var s = {
                    code: t,
                    msg: (e + "").substr(0, 1e3) + ";v:" + c,
                    pid: "baxia",
                    page: r.href.split(/[#?]/)[0],
                    query: r.search.substr(1),
                    hash: r.hash,
                    referrer: a.referrer,
                    title: a.title,
                    ua: navigator.userAgent
                };
                i && (s.c1 = i), o && (s.c2 = o),
                    function(e, t) {
                        var n = [];
                        for (var i in e) n.push(i + "=" + encodeURIComponent(e[i]));
                        (new Image).src = t + n.join("&")
                    }(s, "//gm.mmstat.com/fsp.1.1?")
            }
        };

    function d(e) {
        s(e, 16, 1)
    }
    var l = function() {
        return navigator.userAgent.match(/.*(iPhone|iPad|Android|ios|SymbianOS|Windows Phone|ArkWeb).*/i)
    };
    var c = "2.5.14",
        u = {},
        h = i("events", {}),
        p = {
            on: function(e, t) {
                return (h[e] || (h[e] = [])).push(t), o("events", h), u
            },
            once: function(e, t) {
                var n = this,
                    i = function() {
                        t.apply(n, function(e) {
                            for (var t = Array(e.length), n = 0; t.length > n; ++n) t[n] = e[n];
                            return t
                        }(arguments)), n.off(e, i)
                    };
                return this.on(e, i), u
            },
            off: function(e, t) {
                if (!e && !t) return h = {}, u;
                var n = h[e];
                if (n)
                    if (t)
                        for (var i = n.length - 1; i >= 0; i--) n[i] === t && n.splice(i, 1);
                    else delete h[e];
                return u
            },
            fire: function(e, t) {
                var n = (h = i("events", {}))[e];
                if (n)
                    for (var o = 0, r = (n = n.slice()).length; r > o; o++) n[o](t);
                return u
            }
        },
        f = "@=_=@",
        g = null,
        m = null,
        x = null,
        y = [],
        v = {
            uid: 0,
            hid: -1,
            q: [],
            tm: 0,
            postMessage: function(e, t) {
                var n = ++v.uid,
                    i = v.q,
                    o = {
                        name: +new Date + "" + n + "^" + document.domain + "&" + t,
                        uid: n,
                        target: e
                    };
                i.push(o), v.tm || (v.tm = setInterval(function() {
                    var e = v.q;
                    if (0 !== e.length && e[0].uid > v.hid) {
                        var t = e[0];
                        v.hid = t.uid, t.target.name = t.name
                    }
                }, 10))
            },
            ListenerMessage: function(e, t) {
                var n = "",
                    i = /^(\d+?)\^(.+?)&(.*?)$/;
                setInterval(function() {
                    if (!e) return !1;
                    var o = e.name;
                    if (o !== n) {
                        v.q.shift(), n = o;
                        var r = i.exec(o);
                        if (!r) return;
                        t && t({
                            origin: r[2],
                            data: r[3]
                        })
                    }
                }, 10)
            }
        };

    function b(e) {
        try {
            var t = e.data.split(f),
                n = void 0,
                i = void 0;
            if (t.length > 1) n = t[0], i = t[1];
            else {
                try {
                    t = _(t[0])
                } catch (a) {
                    t = _(decodeURIComponent(t[0]))
                }
                n = t.type, i = t.content, "resizeIframe" === t.action && (n = t.action, i = t)
            }
            for (var o = 0, r = y.length; r > o; o++) y[o].event === n && y[o].callback(i)
        } catch (a) {}
    }
    var w = {
        initListener: function(e) {
            m = e.originWin, x = e.msgTransfer, (g = e.currentWin) && m && x && (g.postMessage ? g.addEventListener ? g.addEventListener("message", b, !1) : g.attachEvent && g.attachEvent("onmessage", b) : v.ListenerMessage("fromFrame" == x ? m : g, b))
        },
        register: function(e, t) {
            y.push({
                event: e,
                callback: t
            })
        },
        send: function(e) {
            var t = e.type + f + e.content;
            g && m && x && (m.postMessage ? m.postMessage(t, "*") : v.postMessage("fromFrame" == x ? m : g, t))
        }
    };

    function _(e) {
        return JSON.parse(e)
    }
    o("Messenger", w);
    var O = function(e, t, n, i) {
        if (void 0 === i && (i = !1), t.addEventListener) t.addEventListener(e, n, i);
        else if (t.attachEvent) return t.attachEvent("on" + e, n), !1
    };

    function M(e, t) {
        return e + (e.indexOf("?") > -1 ? "&" : "?") + t
    }! function(e, t) {
        void 0 === t && (t = {});
        var n = t.insertAt;
        if (e && "undefined" != typeof document) {
            var i = document.head || document.getElementsByTagName("head")[0],
                o = document.createElement("style");
            o.type = "text/css", "top" === n && i.firstChild ? i.insertBefore(o, i.firstChild) : i.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
        }
    }(".baxia-dialog {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2147483647;\n}\n\n.baxia-dialog-mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: .5;\n  filter:alpha(opacity=50);\n}\n\n.sufei-dialog {\n  opacity: 0;\n}\n\n.baxia-dialog-close {\n  position: absolute;\n  top: 20px;\n  right: 24px;\n  cursor: pointer;\n  transform: scaleY(0.8);\n  -ms-transform: scaleY(0.8);\n  /* IE 9 */\n  -moz-transform: scaleY(0.8);\n  /* Firefox */\n  -webkit-transform: scaleY(0.8);\n  /* Safari 和 Chrome */\n  -o-transform: scaleY(0.8);\n  font-size: 16px;\n  /* padding:10px; */\n  width: 10px;\n  height: 10px;\n}\n\n.baxia-dialog-content {\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 420px;\n  /* min-width: 420px; */\n  height: 320px;\n}\n\n.baxia-mobile .baxia-dialog-content {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  min-width: auto;\n  top: 0;\n  left: 0;\n}\n\n.baxia-mobile .baxia-dialog-content iframe {\n  border-radius: 0;\n}\n\n.baxia-dialog.map .baxia-dialog-content {\n  height: 100%;\n  width: 100%;\n  position: static;\n  margin: 0;\n  /* height: 700px;\n  min-width: 800px;\n  left: 50%;\n  top: 50%;\n  margin: -350px 0 0 -400px; */\n}\n.baxia-dialog.map  .baxia-dialog-mask{\n  display: none;\n}\n\n.baxia-dialog-content iframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: #fff;\n  border-radius: 18px;\n}\n\n.baxia-ios-fix-fixed .baxia-dialog {\n  position: absolute;\n}\n@media screen and (max-height:720px) {\n  .baxia-dialog-content.map {\n    top: 50%;\n    left: 50%;\n    min-width: 520px;\n    height: 520px;\n    margin: -260px 0 0 -260px;\n  }\n}\n\n.custom-dialog-wrapper .nc-container .nc_scale span{\n  height: auto;\n}");
    var T = document,
        S = function(e, t, n, i) {
            if (!e) return t();
            var o = T.getElementsByTagName("script")[0],
                r = T.createElement("script");
            if (r.async = !0, r.src = e, i && (r.bxOriginUrl = i), e.indexOf("alicdn") > -1 && (r.crossOrigin = !0), r.onerror = function(t) {
                    s("function:loadJS. msg:" + e + "load error。props：" + JSON.stringify(n)), r.onerror = null
                }, t) {
                var a = !1;
                r.onload = r.onreadystatechange = function() {
                    a || r.readyState && !/loaded|complete/.test(r.readyState) || (r.onload = r.onreadystatechange = null, a = !0, t())
                }
            }
            o.parentNode.insertBefore(r, o)
        },
        C = null,
        k = l(),
        R = function(e) {
            if (e.renderNC = e.renderNC || location.search.indexOf("renderNC") > -1, e.renderNC)
                if (function(e) {
                        if (e && !document.getElementById(e.id)) return !1;
                        var t = e && e.querySelector(".nc_wrapper"),
                            n = e && e.querySelector("._nc");
                        return !!t || !!n
                    }(e.renderTo)) console.log("已经渲染或者 DOM 元素不存在");
                else {
                    var t, n, i, r = "";
                    e.cssLink && (t = e.cssLink, n = document.getElementsByTagName("head")[0], (i = document.createElement("link")).type = "text/css", i.rel = "stylesheet", i.href = t, n.appendChild(i)), k ? (r = "register_h5", S("//g.alicdn.com/sd/nch5/index.js", function() {
                        C = window.NoCaptcha, c.bannerHidden = !1, C.init(c), C.setEnabled(!0)
                    })) : (r = "register", S("//g.alicdn.com/sd/ncpc/nc.js", function() {
                        C = new window.noCaptcha(c)
                    }));
                    var a = e.verifiedCallback,
                        s = e.showCallback,
                        d = e.ncAppkey,
                        l = e.ncToken,
                        c = {
                            renderTo: "#" + e.renderTo.id,
                            appkey: void 0 === d ? "NCAPPKEY" : d,
                            token: void 0 === l ? "NCTOKENSTR" : l,
                            bannerHidden: !1,
                            scene: r,
                            replaceCallback: function(e, t, n) {
                                var i, r = [];
                                k ? i = n.bind(this, "ok") : (i = e.success, t = e.data), r.push({
                                    key: "bx-nc-ua",
                                    value: t.n
                                }), o("ncData", r), o("ncSlideData", t), i({
                                    success: !0,
                                    result: {
                                        code: 0
                                    }
                                }), a && a()
                            },
                            language: e.ncLanguage
                        };
                    s && s()
                }
        },
        N = function(e) {
            return void 0 === e && (e = {}), "https://" + e.HOST + e.PATH
        };

    function E(e, t, n) {
        var i = function(e, t) {
            return {
                data: {
                    slidedata: JSON.stringify(t.data),
                    x5secdata: e.SECDATA
                },
                url: N(e) + "/_____tmd_____/slide"
            }
        }(e, t);
        L({
            url: i.url,
            type: "GET",
            dataType: "json",
            data: i.data,
            success: function(e, t) {
                n(!0)
            },
            error: function(e) {
                n(!1)
            }
        })
    }
    var L = function(e) {
            e = e || {};
            var t = [];
            for (var n in e.data) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e.data[n]));
            t.push(("v=" + Math.random()).replace(".", ""));
            var i = t.join("&"),
                o = new XMLHttpRequest;
            o.onreadystatechange = function() {
                if (4 === o.readyState) {
                    var t = o.status;
                    t >= 200 && 300 > t ? e.success && e.success(o.responseText, o.responseXML) : e.error && e.error(t)
                }
            }, "GET" === e.type ? (o.open("GET", e.url + "?" + i, !0), o.send(null)) : "POST" === e.type && (o.open("POST", e.url, !0), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.send(i))
        },
        I = document,
        q = window,
        H = l(),
        P = "false",
        D = ["captchacapslidev2", "captchascene", "captchacappuzzle", "captcharecaptcha", "captchaclick", "captchadrag", "captchaconnect"];

    function W(e) {
        return I.querySelector(e)
    }

    function z(e) {
        return JSON.parse(e)
    }
    return function(t) {
        function n(e) {
            return void 0 === e && (e = {}), t.call(this, e) || this
        }
        return function(t, n) {
            function i() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
        }(n, t), n.prototype.fail = function() {
            this.forEachQueue(function(e) {
                e && e.fail()
            })
        }, n.prototype.resend = function() {
            this.forEachQueue(function(e) {
                if (e.xhr) {
                    var t = e.xhr;
                    try {
                        t.open.apply(t, t.bxOriginXhr ? t.bxOriginXhr.openParams : t.openParams);
                        var n = t._header_;
                        for (var i in n) t.setRequestHeader(i, n[i]);
                        t.send.apply(t, t.bxOriginXhr ? t.bxOriginXhr.sendParams : t.sendParams), t._processing = !1
                    } catch (o) {
                        throw t.openParams && d("【Resend Step】Xhr resend error, message: " + o.message + ", openParams: " + JSON.stringify(t && t.openParams) + ", sendParams: " + JSON.stringify(t && t.sendParams) + ", url: " + t.responseURL + ", stack: " + o.stack), Error(o)
                    }
                }
            })
        }, n
    }(function() {
        function e(e) {
            this.queue = [];
            this.dialog = null, this.reset(), this.on = p.on
        }
        return e.prototype.handler = function(e) {
            this.props = this.formatProps(e), this.options = i("options") || {}, this.run(e)
        }, e.prototype.formatProps = function(e) {
            var t, n = e && e.result;
            if ("string" == typeof n && n) try {
                n = JSON.parse(n)
            } catch (i) {
                try {
                    void 0 === (t = n) && (t = ""), n = t.substring(t.indexOf("{"), t.lastIndexOf("}") + 1), n = JSON.parse(n + "")
                } catch (i) {
                    throw "baxia.js data error"
                }
            }
            return n.url = n.url || n.data && n.data.url || "", e.result = n, e
        }, e.prototype.showDialog = function(e) {
            var t, n, i = e.url,
                o = e.h5url;
            if (H && o && (i = o, e.url = o), i) {
                if (this.options && (this.options.language && (i = M(i, "language=" + this.options.language)), this.options.ncLanguage && (i = M(i, "ncLanguage=" + this.options.ncLanguage))), i && -1 === i.indexOf("http")) i = this.getDomain(this.currentRequest.url) + i;
                var r = i.match(/action=([^&]+)/);
                r && (this.props.result.action = r[1]);
                try {
                    var a = this.currentRequest.bxOriginUrl || ((null === (t = this.currentRequest.xhr) || void 0 === t ? void 0 : t.bxOriginXhr) ? null === (n = this.currentRequest.xhr) || void 0 === n ? void 0 : n.bxOriginXhr.openParams[1] : this.currentRequest.url);
                    i.indexOf("_____tmd_____/punish") > -1 && (0 === a.indexOf("http:") || 0 === a.indexOf("//") && "http:" === location.protocol) && (i = i.replace("https:", "http:"), e.url = i, s("hit http", 20, 1, a, i))
                } catch (c) {
                    s("check http error", 20, 1, null, i)
                }
                var d = i.match(/pureCaptcha=([^&]+)/);
                d && (this.props.result.pureCaptcha = d[1]);
                var l = i.match(/pureDenyWait=([^&]+)/);
                l && (this.props.result.pureDenyWait = l[1]), this.dialog || W("#baxia-dialog-content") ? e.dialogHide || this.show(i) : (this.render(e), e.dialogHide || this.show(i))
            }
        }, e.prototype.hide = function(e) {
            void 0 === e && (e = !1), e ? this.resend() : this.fail();
            try {
                if (this.dialog) {
                    if ("none" === this.dialog.style.display) return;
                    this.dialog.style.display = "none"
                }
                p.fire("event:dialogHide@baxia", {
                    validateSuccess: e
                }), this.reset(), this.closeSufei()
            } catch (t) {
                throw d("【Hide Step】Hide error, message: " + t.message + ", stack: " + t.stack), Error(t)
            }
            this.options && this.options.hideCallback && this.options.hideCallback(e)
        }, e.prototype.closeSufei = function() {
            try {
                setTimeout(function() {
                    W(".sufei-dialog") && q.parent && q.parent.postMessage && q.parent.postMessage(JSON.stringify({
                        type: "child",
                        content: '{"smToken":"","sm":""}'
                    }), "*")
                }, 200)
            } catch (e) {
                s("closeSufei" + e.message)
            }
        }, e.prototype.destroy = function() {
            this.reset(), this.dialog && (this.dialog.innerHTML = "", this.dialog = null), this.options && this.options.renderTo && (this.options.renderTo.innerHTML = "")
        }, e.prototype.show = function(e) {
            e && this.frame && this.frame.src != e && -1 >= e.indexOf("renderIframe") && (this.frame.src = e), this.dialog && (this.dialog.style.display = "block"), p.fire("event:dialogShow@baxia"), this.options && this.options.showCallback && this.options.showCallback(e)
        }, e.prototype.canRenderTo = function() {
            var e, t, n, i, o, r, a;
            return !(!this.options.renderTo || this.options.renderNC) && (null === (e = this.props.result) || void 0 === e || !e.action || ("captcha" === (null === (t = this.props.result) || void 0 === t ? void 0 : t.action) ? !!(null === (n = this.props.result) || void 0 === n ? void 0 : n.pureCaptcha) : "deny" === (null === (i = this.props.result) || void 0 === i ? void 0 : i.action) || "wait" === (null === (o = this.props.result) || void 0 === o ? void 0 : o.action) ? !!(null === (r = this.props.result) || void 0 === r ? void 0 : r.pureDenyWait) : 0 > D.indexOf(null === (a = this.props.result) || void 0 === a ? void 0 : a.action)))
        }, e.prototype.render = function(e) {
            var t, n = this,
                i = this,
                o = "420px",
                r = "320px",
                a = e.url,
                d = e.dialogSize,
                l = e.dialogHide,
                c = this.options,
                u = c.dialogSize;
            H || (c.autoSize ? (t = this.getDialogSize(u || d), O("resize", q, function() {
                t = n.getDialogSize(u || d), i.frame.parentElement.style.width = t.width, i.frame.parentElement.style.height = t.height
            })) : t = u || d), t && (o = t.width || "420px", r = t.height || "320px");
            var h = I.createElement("div"),
                p = this.options.renderTo;
            h.style.display = "none";
            var f = this.canRenderTo(),
                g = "",
                m = I.body;
            if (f ? (m = p, g = this.getRenderContainer()) : g = '<div class="baxia-dialog-mask"></div><div class="baxia-dialog-content"' + (t ? 'style="width:' + o + ";height:" + r + ';"' : "") + ">\n      " + this.getRenderContainer() + '\n      <div class="baxia-dialog-close">X</div>\n      </div>', h.innerHTML = g, !f && !m) return q && O("load", q, function() {
                I.body.appendChild(h), i.renderDialog(f, h, a), l || (i.show(a), (e.url.indexOf("login.m.taobao.com") > -1 || e.url.indexOf("login.taobao.com") > -1) && n.sendReferer())
            }), void s("body未渲染时弹窗:" + location.href);
            m.appendChild(h), this.renderDialog(f, h, a), l || -1 >= e.url.indexOf("login.m.taobao.com") && -1 >= e.url.indexOf("login.taobao.com") || this.sendReferer()
        }, e.prototype.sendReferer = function() {
            try {
                var e, t = this,
                    n = this.props.result.url.match(/redirectURL=([^&]+)/);
                n && n[1] && (e = (e = decodeURIComponent(n[1]).match(/uuid=([^&]+)/)) && e[1]), setTimeout(function() {
                    var n, i, o = {
                        actionType: "baxiaLoginFrame",
                        uuid: e,
                        payload: {
                            url: location.href
                        }
                    };
                    null === (i = null === (n = t.frame) || void 0 === n ? void 0 : n.contentWindow) || void 0 === i || i.postMessage(encodeURIComponent(JSON.stringify(o)), "*")
                }, 1500)
            } catch (i) {
                s("向h5登录页发送referer异常，message：" + i && i.message, 1, 1)
            }
        }, e.prototype.getDialogSize = function(e) {
            var t, n, i, o, r = 420,
                a = 320;
            if (e && (t = e.width || "", n = e.height || "", t.indexOf("px") > -1 && (r = +t.replace("px", "")), n.indexOf("px") > -1 && (a = +n.replace("px", "")), t.indexOf("%") > -1 && (i = t, r = +t.replace("%", "") / 100 * window.innerWidth), n.indexOf("%") > -1 && (o = n, a = +n.replace("%", "") / 100 * window.innerHeight)), window.innerWidth / window.innerHeight < r / a) {
                if (window.innerWidth < r) return {
                    width: window.innerWidth + "px",
                    height: Math.round(window.innerWidth * a / r) + "px"
                }
            } else if (window.innerHeight < a) return {
                width: Math.round(window.innerHeight * r / a) + "px",
                height: window.innerHeight + "px"
            };
            return {
                width: i || r + "px",
                height: o || a + "px"
            }
        }, e.prototype.renderDialog = function(e, n, i) {
            var o = this,
                r = W(".baxia-dialog-close");
            e || O("click", r, function() {
                o.hide()
            }), o.dialog = n, o.frame = W("#baxia-dialog-content"), o.frame && o.initMessenger(o.frame.contentWindow), P = o.props.result.fullScreen || o.props.result.data && o.props.result.data.fullScreen || "false", o.dialogStyleFix(n), !H && "true" !== P || e || o.mobileFix(), i.indexOf("/assist") > -1 && (r.style.display = "none", 800 > screen.width || (n.className = n.className + " map")), this.props.result.renderNC ? this.handleRenderNC(t({}, this.props.result)) : "renderIframe" !== this.props.result.url || this.handleShowIframeDialog()
        }, e.prototype.getRenderContainer = function() {
            var e = this.props.result,
                t = e.url,
                n = e.action,
                i = e.pureCaptcha,
                o = e.pureDenyWait,
                r = e.attributes;
            if (this.props.result.renderNC) return '<div id="baxia-nc-container"></div>';
            if ("renderIframe" === t) return '<iframe id="baxia-dialog-content" frameborder="none"></iframe>';
            if (r) try {
                r = Object.keys(r).map(function(e) {
                    return e + "='" + r[e] + "'"
                }).join(" ")
            } catch (a) {
                r = ""
            }
            return '<iframe id="baxia-dialog-content" ' + (r ? r + " " : "") + 'frameborder="none" src="' + t + '"' + ("captcha" === n && i || ("deny" === n || "wait" === n) && o ? ' style="height:34px"' : "") + "></iframe>"
        }, e.prototype.initMessenger = function(e) {
            var t = this,
                n = this;
            w.initListener({
                currentWin: q,
                originWin: e,
                msgTransfer: "fromFrame"
            }), w.register("msg:validateSuccess@sufei", function(e) {
                n.hide(!0)
            }), w.register("child", function(e) {
                if (!(e = z(decodeURIComponent(e))).queryToken && !e.smToken) return n.hide();
                e.queryToken = "not-send" === e.smToken ? "" : "smToken=success", n.hide(!0)
            }), w.register("callApp", function(e) {
                var t;
                e = z(decodeURIComponent(e));
                try {
                    "alipays:" !== (t = new URL(e.url)).protocol && (t = null)
                } catch (n) {
                    t = null
                }
                t ? location.href = t.href : s("callApp url invalied:" + e.url)
            }), w.register("msg:changeHeight", function(e) {
                var t = W("#baxia-dialog-content");
                t.style.height = e + "px", t.style.position = "static"
            }), w.register("resizeIframe", function(e) {
                !t.canRenderTo() && t.frame && (t.frame.style.width = e.width + "px", t.frame.style.height = e.width + "px")
            })
        }, e.prototype.dialogStyleFix = function(e) {
            this.canRenderTo() ? e.className += " custom-dialog-wrapper" : (e.className = " baxia-dialog auto ", (H || "true" === P) && (e.className += " baxia-mobile"))
        }, e.prototype.reset = function() {
            this.currentRequest = null, this.queue = [], this.status = 0
        }, e.prototype.getDomain = function(e) {
            if (!e) return "";
            var t = e.match(/(https|http):\/\/([^\/]+)\//i);
            return t ? t[0] : ""
        }, e.prototype.mobileFix = function() {
            var e = I.body,
                t = 0,
                n = this.dialog,
                i = e.style.height,
                o = q.dpr || 1,
                r = document.documentElement.getBoundingClientRect(),
                a = Math.max(r.width, q.innerWidth) / o;
            n.style.cssText = ["-webkit-transform:scale(" + o + ") translateZ(0)", "-ms-transform:scale(" + o + ") translateZ(0)", "transform:scale(" + o + ") translateZ(0)", "-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0", "width:" + a + "px", "height:" + Math.max(r.height, q.innerHeight) / o + "px", "z-index:2147483647;position: fixed;left:0;top:0px", "background:" + (a > 800 ? "rgba(0,0,0,.5)" : "#FFF"), "display:none"].join(";"), p.on("event:dialogShow@baxia", function() {
                t = q.pageYOffset || I.documentElement.scrollTop || e.scrollTop, n.style.height = Math.max(q.innerHeight, e.scrollHeight) > q.screen.height ? q.screen.height + "px" : "100%", e.style.height = n.style.height, setTimeout(function() {
                    e.scrollTop = 0;
                    try {
                        q.scrollTo && q.scrollTo(0, 0)
                    } catch (t) {}
                }, 200)
            }), p.on("event:dialogHide@baxia", function() {
                e.scrollTop = t, e.style.height = i;
                try {
                    q.scrollTo && q.scrollTo(0, t)
                } catch (n) {}
            })
        }, e.prototype.run = function(e) {
            var t = e.result,
                n = e.config,
                i = e.checkJsFlag;
            200 !== this.status ? (this.currentRequest = this.currentRequest || n, this.status = 200, i ? (this.autoSample(t), this.resend()) : this.showDialog(t)) : this.queue.push(n)
        }, e.prototype.autoSample = function(e) {
            try {
                var t = I && !!I._sufei_data2;
                "string" == typeof e && (e = JSON.parse(e));
                var n = "https://fourier.taobao.com/ts?ext=200&uuid=" + e.uuid + "&serid=" + e.serid + "&sufei=" + t;
                q.location && location.href && (n = n + "&href==" + location.href.substr(0, 128)), q.__fyModule && (n = n + "&fyModuleLoad=" + q.__fyModule.load + "&fyModuleInit=" + q.__fyModule.init), q.__umModule && (n = n + "&umModuleLoad=" + q.__umModule.load + "&umModuleInit=" + q.__umModule.init), q.__uabModule && (n = n + "&uabModuleLoad=" + q.__uabModule.load + "&uabModuleInit=" + q.__uabModule.init), q.__ncModule && (n = n + "&ncModuleLoad=" + q.__ncModule.load + "&ncModuleInit=" + q.__ncModule.init), q.__nsModule && (n = n + "&nsModuleLoad=" + q.__nsModule.load + "&nsModuleInit=" + q.__nsModule.init), q.__etModule && (n = n + "&etModuleLoad=" + q.__etModule.load + "&etModuleInit=" + q.__etModule.init), (new Image).src = n
            } catch (i) {
                s("checkJsFlagFailed")
            }
        }, e.prototype.forEachQueue = function(e) {
            for (var t = [this.currentRequest].concat(this.queue), n = 0; t.length > n; n++)
                if (t[n]) {
                    if (t[n].url && t[n].url.indexOf("reqeust=getpunishpage") > -1 && 0 > t[n].url.indexOf("source=xagent") || t[n].xhr && !t[n].xhr.openParams || t[n].xhr && t[n].xhr.bxOriginXhr && !t[n].xhr.bxOriginXhr.openParams) return void location.reload();
                    e(t[n])
                }
        }, e.prototype.handleShowIframeDialog = function() {
            var e = this.props.result.data;
            W("#baxia-dialog-content").contentDocument.write(e)
        }, e.prototype.handleRenderNC = function(e) {
            var n = this;
            R(t(t({}, e), {
                renderTo: W("#baxia-nc-container"),
                verifiedCallback: function(t) {
                    E(e, {
                        data: t
                    }, function(e) {
                        n.hide(e)
                    })
                }
            }))
        }, e.prototype.handleAutoSubmit = function(e, t) {}, e.prototype.fail = function() {}, e.prototype.resend = function() {}, e
    }())
}();