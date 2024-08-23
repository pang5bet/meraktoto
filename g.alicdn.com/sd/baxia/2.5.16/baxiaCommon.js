var baxiaCommon = function() {
    "use strict";
    var win = window,
        BAXIA_KEY = "__baxia__",
        getStore = function(e, t) {
            var n = win[BAXIA_KEY] || {};
            return e ? n[e] || t : n
        },
        setStore = function(e, t) {
            win[BAXIA_KEY] = win[BAXIA_KEY] || {}, win[BAXIA_KEY][e] = t
        },
        includes = function(e, t) {
            return !!e && e.indexOf(t) > -1
        },
        isObjectString = function(e) {
            var t = !0;
            try {
                JSON.parse(e)
            } catch (n) {
                t = !1
            }
            return t
        },
        isEmptyObject = function(e) {
            if (!e) return !0;
            for (var t in e) return !1;
            return !0
        },
        toArray = function(e) {
            for (var t = Array(e.length), n = 0; t.length > n; ++n) t[n] = e[n];
            return t
        },
        addQueryString = function(e, t, n) {
            return includes(e, t) ? e : e.indexOf("?") > -1 ? e + "&" + t + "=" + n : e + "?" + t + "=" + n
        },
        addFormUrlEncoded = function(e, t, n) {
            return includes(e, t) ? e : e + "&" + t + "=" + n
        },
        isMobile = function() {
            return navigator.userAgent.match(/.*(iPhone|iPad|Android|ios|SymbianOS|Windows Phone|ArkWeb).*/i)
        },
        isAliApp = function(e) {
            void 0 === e && (e = "[\\w-]+");
            try {
                var t = (null === navigator || void 0 === navigator ? void 0 : navigator.userAgent) || "";
                return RegExp(e + "(-PD)?/", "i").test(t)
            } catch (n) {
                return !1
            }
        },
        isWindVaneAvailable = function() {
            return window.WindVane && window.WindVane.isAvailable
        },
        isRendered = function(e) {
            if (e && !document.getElementById(e.id)) return !1;
            var t = e && e.querySelector(".nc_wrapper"),
                n = e && e.querySelector("._nc");
            return !!t || !!n
        };

    function addVersionToUrl(e) {
        return getStore("options", {}).addVersionToUrl ? !e || endsWith(e, ".js") || endsWith(e, ".css") || includes(e, "_bx-v") ? e : addQueryString(e, "_bx-v", version) : e
    }

    function endsWith(e, t) {
        return !!e && e.substring(e.length - t.length) === t
    }

    function formatJsonp(e) {
        return void 0 === e && (e = ""), e.substring(e.indexOf("{"), e.lastIndexOf("}") + 1)
    }
    var formatInjectOptions = function(options) {
            if ("string" == typeof options.checkApiPath) {
                var reg_1 = options.checkApiPath + "";
                options.checkApiPath = function(e) {
                    return RegExp(reg_1).test(e)
                }
            }
            if ("string" == typeof options.renderTo && (options.renderTo = document.querySelector(options.renderTo)), "string" == typeof options.renderNC && (options.renderNC = "true" === options.renderNC), "string" == typeof options.awscTimeout && (options.awscTimeout = +options.awscTimeout), "string" == typeof options.showCallback) {
                var _showCallback_1 = options.showCallback + "";
                options.showCallback = function() {
                    eval(_showCallback_1)
                }
            }
            if ("string" == typeof options.hideCallback) {
                var _hideCallback_1 = options.hideCallback + "";
                options.hideCallback = function() {
                    eval(_hideCallback_1)
                }
            }
            return options
        },
        isGray = function() {
            var e = document.currentScript && document.currentScript.src;
            if (e && e.indexOf("ratio") > -1) {
                var t = e.match(/ratio=([^&]+)/),
                    n = +encodeURIComponent(t && t[1]);
                return Math.random() <= n
            }
            return !0
        };

    function getCurrentJSDomain() {
        var e = getCurrentScript(),
            t = e && e.src ? e.src.match(/https\:\/\/([^&]+).alicdn/) : null;
        t || (t = e && e.src ? e.src.match(/https\:\/\/([^&]+).slatic.net/) : [, "g"]);
        var n = t && t[1],
            r = "";
        return -1 === ["laz-g-cdn", "aeis", "assets", "lazada-slatic-g", "lzd-g"].indexOf(n) && (n = "g"), "lzd-g" === n ? r = "https://" + n + ".slatic.net/g/" : (r = "https://" + n + ".alicdn.com/", "assets" === n && (r += "g/")), r
    }

    function getCurrentScript() {
        if (document.currentScript) return document.currentScript;
        var e = null,
            t = document.getElementsByTagName("script"),
            n = null;
        try {
            throw Error()
        } catch (a) {
            var r, o = (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(a.stack) || [!1])[1];
            for (r in t)
                if ((n = t[r]).src == o || "interactive" == n.readyState) return e = t[r], t[r]
        }
        return e
    }

    function getDomain(e) {
        var t = e.match(/(https?:\/\/)?((([\w-]+\.)+\w+)|localhost)(:\d{1,5})?/g);
        return t && t[0] || ""
    }

    function crossOrigin(e) {
        try {
            return !e || ("string" == typeof e && (0 === e.indexOf("data:") || e.length > 1e4) || (e.url ? e = e.url : e.href ? e = e.href : "[object Array]" === Object.prototype.toString.call(e) && (e = e[0]), "/" !== e.substring(0, 1) ? host !== getDomain(e) : "//" === e.substring(0, 2) && host !== getDomain(location.protocol + e)))
        } catch (t) {
            return log("跨域校验异常，message：" + t, 1, 1), !0
        }
    }
    var host = location.protocol + "//" + location.host,
        version = "2.5.14",
        loc = location,
        doc = document,
        log = function(e, t, n, r, o) {
            if (void 0 === t && (t = 1), void 0 === n && (n = .1), 0 >= n || Math.random() < n) {
                var a = {
                    code: t,
                    msg: (e + "").substr(0, 1e3) + ";v:" + version,
                    pid: "baxia",
                    page: loc.href.split(/[#?]/)[0],
                    query: loc.search.substr(1),
                    hash: loc.hash,
                    referrer: doc.referrer,
                    title: doc.title,
                    ua: navigator.userAgent
                };
                r && (a.c1 = r), o && (a.c2 = o), _send(a, "//gm.mmstat.com/fsp.1.1?")
            }
        };

    function importantLog(e) {
        log(e, 13, .1)
    }

    function veryImportantLog(e) {
        log(e, 16, 1)
    }

    function _send(e, t) {
        var n = [];
        for (var r in e) n.push(r + "=" + encodeURIComponent(e[r]));
        (new Image).src = t + n.join("&")
    }
    var addEvent = function(e, t, n, r) {
            if (void 0 === r && (r = !1), t.addEventListener) t.addEventListener(e, n, r);
            else if (t.attachEvent) return t.attachEvent("on" + e, n), !1
        },
        isSupportedHookProperty = function() {
            var e = {
                test: "true"
            };
            try {
                return Object.defineProperty(e, "test", {
                    enumerable: !1,
                    value: e
                }), Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "readyState") && e.test == e.test
            } catch (t) {
                return !1
            }
        }(),
        hookFunctionAndArguments = function(e, t, n, r) {
            var o = e[t];
            e[t] = function() {
                var e = toArray(arguments);
                if (n && !r && !1 === n.apply(this, e)) return;
                return r && (e = n.apply(this, e)), o.apply(this, e)
            }
        },
        hookFunction = function(e, t, n) {
            var r = e[t];
            e[t] = function() {
                var e = toArray(arguments);
                if (n && !1 === n.apply(this, e)) return;
                return r.apply(this, e)
            }
        },
        hookProperty = function(e, t, n, r) {
            if (Object.getOwnPropertyDescriptor) {
                var o = Object.getOwnPropertyDescriptor(e, t);
                if (isSupportedHookProperty && !o || !o) importantLog("错误：不支持 hookProperty");
                else {
                    var a = o.set,
                        i = o.get;
                    isSupportedHookProperty && Object.defineProperty(e, t, {
                        set: function() {
                            var e = toArray(arguments);
                            if (n) {
                                var t = n && n.apply(this, e);
                                e = t ? [t] : e
                            }
                            a && a.apply(this, e)
                        },
                        get: function() {
                            var e = i && i.apply(this);
                            return r ? r.call(this, e) : e
                        }
                    })
                }
            }
        },
        resetReadonlyProperty = function(e, t, n) {
            Object.defineProperty(e, t, {
                writable: !0
            }), e[t] = n
        },
        validate = function(e) {
            var t, n;
            void 0 === e && (e = "");
            var r = {
                    valid: !1,
                    type: "",
                    checkjs_flag: !1
                },
                o = {};
            if ("string" != typeof e && "object" != typeof e) return r.valid = !0, r;
            if ("string" == typeof e) {
                if (e.length > 5e4) return r.valid = !0, r;
                if (!includes(e, "rgv587_flag") && !includes(e, "RGV587_ERROR::SM") && !includes(e, "CHECKJS_FLAG")) return r.valid = !0, r;
                try {
                    o = JSON.parse(e)
                } catch (c) {
                    try {
                        e = formatJsonp(e), o = JSON.parse(e)
                    } catch (c) {
                        return r.valid = !0, r
                    }
                }
            } else o = e;
            if (o && o._bx_upgrade_) return r.valid = !0, r;
            var a, i, s = o && "sm" === o.rgv587_flag && o.url,
                u = o && o.ret && o.data && o.ret.indexOf("RGV587_ERROR::SM") && o.data.url;
            return o.CHECKJS_FLAG && o.uuid && o.serid && (log("triggerCheckJsFlag"), r.checkjs_flag = !0, a = !0), o.x5step && (s || u) && (log("Ajax hit anti brush: uuid=" + o.uuid, 17, 1), r.anti_brush_flag = !0, i = !0), (s || u) && (o.h5url || (null === (t = o.data) || void 0 === t ? void 0 : t.h5url)) && (o.dialogSize || (null === (n = o.data) || void 0 === n ? void 0 : n.dialogSize)) && (r.login_flag = !0, r.url = o.h5url || o.data.h5url), s || u || a || i ? r : (r.valid = !0, r)
        };

    function handleAutoResponse(e) {
        var t = e;
        try {
            if (includes(e, "rgv587_flag:sm") && includes(e, "window._config_")) {
                var n = "";
                (t = e.replace(/\s+/g, "").match(/window\.\_config_\=([^;]+)/)) && t[1] && (n = t[1]), (t = n && JSON.parse(n)).rgv587_flag = "sm", t.url || (t.url = "renderIframe"), t.data = e, t._bx_upgrade_ = "true" === t.isUpgrade
            }
        } catch (r) {}
        return t
    }
    var handlerSecdata = [];

    function isBaxiaBlockByCookie() {
        var e, t = document.cookie.split("; ");
        if (!t.length) return !1;
        for (var n = 0, r = t; r.length > n; n++) {
            var o = r[n].split("=");
            if ("x5secdata" === o[0]) {
                e = o[1];
                break
            }
        }
        return !(!e || document.hidden) && (-1 >= handlerSecdata.indexOf(e) && ("__bx__" !== e && (-1 >= e.indexOf("mtop.") && (clearX5SecData(), (!window._config_ || !window._config_.action) && (handlerSecdata.push(e), e)))))
    }

    function clearCookie(e) {
        var t = new Date;
        t.setTime(t.getTime() + -100);
        var n = "x5secdata=;maxAge=-100;expires=" + t.toUTCString() + ";path=/;domain=" + e + ";";
        document.cookie = n, document.cookie = n + "Secure;SameSite=None"
    }

    function clearX5SecData() {
        try {
            if (-1 >= document.cookie.indexOf("x5secdata")) return;
            var e = location.host,
                t = e.split("."),
                n = t.length > 5 ? 5 : t.length;
            1 !== n && 2 !== n || clearCookie(e), e = "." + t.pop();
            for (var r = 2; n > r; r++) clearCookie(e = "." + t.pop() + e);
            clearCookie(e = (t.pop() || "") + e)
        } catch (o) {
            importantLog("x5secdata clear error")
        }
    }

    function otherFlowTypeBlock(e, t, n) {
        try {
            var r = {
                valid: !0,
                url: ""
            };
            if (419 === e.status || 420 === e.status) return "string" == typeof t && 1e3 > t.length && t.indexOf("FAIL_SYS_") > -1 && log(n + " hit native response", 18, 1), r;
            if (e.url && 0 > e.url.indexOf("getpunishpage") && "string" == typeof t && 1e4 > t.length && t.indexOf("_____tmd_____") > -1) {
                var o = t.replace(/\s+/g, "").match(/punishPath="([^";]+)/);
                if (o && o[1]) return log(n + " hit jsonp response", 18, 1), r.valid = !1, r.url = o[1], r
            }
            return r
        } catch (a) {
            return log("check otherFlowTypeBlock error：" + a.message, 18, 1), {
                valid: !0,
                url: ""
            }
        }
    }
    var XHRPrototype = XMLHttpRequest.prototype,
        _event = null,
        HookBX = function(e) {
            var t = e.done;
            try {
                isSupportedHookProperty && hookProperty(XHRPrototype, "readyState", null, function(e) {
                    try {
                        var n = e,
                            r = this;
                        this._onreadystatechange = this._onreadystatechange || this.onreadystatechange;
                        var o = getResponse(r);
                        if (3 !== n || validate(o).valid && otherFlowTypeBlock(r, o, "xhr").valid) {
                            if (4 === n && !("json" !== r.responseType || validate(o).valid && otherFlowTypeBlock(r, o, "xhr").valid)) return void t({
                                response: o,
                                readyState: n,
                                xhr: this,
                                eventKey: "onreadystatechange"
                            })
                        } else this.onreadystatechange = function(e) {
                            var a = this;
                            _event = window.event || e || _event, o = getResponse(r), t({
                                response: o,
                                readyState: n,
                                xhr: r,
                                eventKey: "onreadystatechange",
                                event: _event
                            }, function() {
                                a._onreadystatechange !== a.onreadystatechange && a._onreadystatechange(_event)
                            })
                        };
                        return n
                    } catch (a) {
                        throw veryImportantLog("【Response Step】Xhr readyState error, message: " + a.message + ", stack: " + a.stack), Error(a)
                    }
                })
            } catch (n) {
                importantLog("Hook xhr readyState error, message:" + n.message)
            }
            hookFunction(XHRPrototype, "send", function() {
                var e = this;
                try {
                    this.sendParams = arguments;
                    var r = toArray(this.openParams || []);
                    if (!crossOrigin(r[1] || "")) try {
                        this.setRequestHeader("bx-v", version)
                    } catch (n) {
                        log("xhr添加版本号失败，message：" + n + "，url：" + r[1], 1, 1)
                    }
                    this._onload || (this._onload = this.onload), this.onload && (this.onload = function(e) {
                        var n = this;
                        _event = window.event || e;
                        var r = getResponse(this, function(e) {
                            t({
                                response: e,
                                readyState: 3,
                                xhr: n,
                                eventKey: "onload"
                            }, function() {
                                n._onload && n._onload(_event)
                            })
                        });
                        "bx blob handled" !== r && t({
                            response: r,
                            readyState: 3,
                            xhr: this,
                            eventKey: "onload"
                        }, function() {
                            n._onload && n._onload(_event)
                        })
                    }), !isSupportedHookProperty && addEvent("readystatechange", this, function() {
                        var n = getResponse(e);
                        t({
                            response: n,
                            readyState: e.readyState,
                            xhr: e,
                            eventKey: "readystatechange"
                        })
                    }), this._onloadend || (this._onloadend = this.onloadend), this.onloadend && (this.onloadend = function(e) {
                        var n = this;
                        _event = window.event || e;
                        var r = getResponse(this, function(e) {
                            t({
                                response: e,
                                readyState: 3,
                                xhr: n,
                                eventKey: "onloadend"
                            }, function() {
                                n._onloadend && n._onloadend(_event)
                            })
                        });
                        "bx blob handled" !== r && t({
                            response: r,
                            readyState: 3,
                            xhr: this,
                            eventKey: "onloadend"
                        }, function() {
                            n._onloadend && n._onloadend(_event)
                        })
                    })
                } catch (n) {
                    throw veryImportantLog("【Request Step】Xhr send error, message: " + n.message + ", stack: " + n.stack), Error(n)
                }
            }), hookFunction(XHRPrototype, "setRequestHeader", function(e, t) {
                this._header_ = this._header_ || {}, this._header_[e] = t
            }), hookFunctionAndArguments(XHRPrototype, "open", function() {
                try {
                    this.openParams = arguments;
                    var e = toArray(arguments);
                    return e[1] = addVersionToUrl(e[1]), e
                } catch (n) {
                    throw veryImportantLog("【Request Step】Xhr open error, message: " + n.message + ", stack: " + n.stack), Error(n)
                }
            }, !0)
        };

    function getResponse(e, t) {
        var n = "";
        try {
            if ((n = handleAutoResponse(n = e.response || e.responseText)) instanceof Blob && t) {
                if (n.size > 1e4) return n;
                var r = new FileReader;
                r.onload = function() {
                    try {
                        var e = JSON.parse(this.result);
                        validate(e).valid ? t(this.result) : t(e)
                    } catch (n) {
                        t("")
                    }
                }, r.readAsText(n), n = "bx blob handled"
            }
            if ("[object ArrayBuffer]" === Object.prototype.toString.call(n)) {
                if (n.byteLength > 1e4) return n;
                var o = new TextDecoder("utf-8").decode(n);
                try {
                    var a = JSON.parse(o);
                    validate(a).valid || (n = a)
                } catch (i) {}
            }
        } catch (i) {
            n = ""
        }
        return n
    }
    var doc$1 = document,
        loadJS = function(e, t, n, r) {
            if (!e) return t();
            var o = doc$1.getElementsByTagName("script")[0],
                a = doc$1.createElement("script");
            if (a.async = !0, a.src = e, r && (a.bxOriginUrl = r), e.indexOf("alicdn") > -1 && (a.crossOrigin = !0), a.onerror = function(t) {
                    log("function:loadJS. msg:" + e + "load error。props：" + JSON.stringify(n)), a.onerror = null
                }, t) {
                var i = !1;
                a.onload = a.onreadystatechange = function() {
                    i || a.readyState && !/loaded|complete/.test(a.readyState) || (a.onload = a.onreadystatechange = null, i = !0, t())
                }
            }
            o.parentNode.insertBefore(a, o)
        },
        loadCSS = function(e) {
            var t = document.getElementsByTagName("head")[0],
                n = document.createElement("link");
            n.type = "text/css", n.rel = "stylesheet", n.href = e, t.appendChild(n)
        },
        getHandlerPath = function(e, t) {
            return t && t.result && t.result.jsPath ? t.result.jsPath : "" + getStore("cdnPath", "https://g.alicdn.com/sd/baxia/" + version + "/") + e + ".js"
        },
        _handlerQueue = [],
        pluginInstance, handler = function(e, t) {
            if (void 0 === e && (e = "Xhr"), void 0 === t && (t = {}), pluginInstance) {
                var n = getStore("options", {});
                return (n.renderTo || n.autoDestroy) && pluginInstance.destroy(), pluginInstance.handler(t)
            }
            _handlerQueue.push({
                pluginName: e,
                props: t
            });
            var r = _handlerQueue[0],
                o = "baxia" + r.pluginName + "Handler",
                a = getHandlerPath(o, r.props);
            loadJS(a, function() {
                if (!pluginInstance) {
                    pluginInstance = new window[o];
                    for (var e = 0; _handlerQueue.length > e; e++) try {
                        pluginInstance.handler(_handlerQueue[e].props)
                    } catch (t) {
                        pluginInstance = null, veryImportantLog("【Handler Step】handler error, type: " + _handlerQueue[e].pluginName + ", action: " + _handlerQueue[e].props.result.action + ", url: " + _handlerQueue[e].props.result.url + ", message:" + t.message + ", stack:" + t.stack);
                        break
                    }
                    _handlerQueue = []
                }
            })
        },
        handler$1 = function(e, t) {
            void 0 === e && (e = "Xhr"), void 0 === t && (t = {});
            try {
                if (t.validateResult && t.validateResult.login_flag && t.validateResult.url && t.validateResult.url.indexOf("login.m.taobao.com") > -1 && isWindVaneAvailable() && (isAliApp("TB") || isAliApp("TM"))) return log("hit native login", 19, 1), void window.WindVane.call("aluWVJSBridge", "sdkLogin", {}, function() {
                    log("native login success", 19, 1);
                    var n = t.validateResult.url.match(/redirectURL=([^&]+)/);
                    if (!n || !n[1]) return log("native login not found redirectURL", 19, 1), void location.reload();
                    t.result = {
                        url: decodeURIComponent(n[1]),
                        dialogHide: !0
                    }, log("native login close_iframe_page", 19, 1), handler(e, t)
                }, function(n) {
                    var r = n && n.ret;
                    if (r && "HY_FAILED" === r) return log("native login close: " + r, 19, 1), void t.config.fail();
                    r && r.indexOf("HY_") > -1 ? (log("call native login fail: " + r, 19, 1), handler(e, t)) : (log("native login close: " + r, 19, 1), t.config.fail())
                });
                handler(e, t)
            } catch (n) {
                throw pluginInstance = null, veryImportantLog("【Handler Step】handler error, type: " + e + ", action: " + t.result.action + ", url: " + t.result.url + ", message:" + n.message + ", stack:" + n.stack), Error(n)
            }
        };

    function init() {
        try {
            HookBX({
                done: function(e, t) {
                    var n, r, o = e.response,
                        a = e.readyState,
                        i = e.xhr,
                        s = e.eventKey;
                    if (o || (o = getResponse$1(i)), !i._processing) {
                        var u = validate(o);
                        if (u.valid) {
                            var c = otherFlowTypeBlock(i, o, "xhr");
                            c.valid || (o = {
                                url: c.url
                            }, u.valid = !1)
                        }
                        if (i._processing || a < 3 || u.valid) t && t();
                        else {
                            if (i._processing = !0, "onreadystatechange" === s && (i.onload = i._onload), clearX5SecData(), u.anti_brush_flag) {
                                if ("string" == typeof o) try {
                                    o = JSON.parse(o)
                                } catch (p) {
                                    o = formatJsonp(o), o = JSON.parse(o)
                                }
                                var d = null === (r = null === (n = o.data) || void 0 === n ? void 0 : n.url) || void 0 === r ? void 0 : r.replace("&x5step=2", "&x5step=" + o.x5step);
                                if (d) {
                                    var l = i.openParams && i.openParams[1];
                                    return l && (0 === l.indexOf("http:") || 0 === l.indexOf("//") && "http:" === location.protocol) && (d = d.replace("https:", "http:")), i.bxOriginXhr = {
                                        openParams: i.openParams,
                                        sendParams: i.sendParams
                                    }, i._processing = !1, 3 === a && i.onreadystatechange !== i._onreadystatechange && (i.onreadystatechange = i._onreadystatechange), i.open("GET", d), void i.send()
                                }
                                veryImportantLog("【Done Step】Xhr anti brush error, no url:" + JSON.stringify(o))
                            }
                            handler$1("Xhr", {
                                result: o,
                                checkJsFlag: u.checkjs_flag,
                                validateResult: u,
                                config: {
                                    xhr: i,
                                    url: i.openParams && i.openParams[1] || i.responseURL,
                                    fail: function() {
                                        var e = i.onerror || i.onabort || i.ontimeout;
                                        e ? e() : (resetReadonlyProperty(i, "status", 500), t())
                                    }
                                }
                            })
                        }
                    }
                }
            })
        } catch (e) {
            importantLog("Hook xhr error, message:" + e.message)
        }
    }
    var xhrPrompt = {
        version: version,
        init: init
    };

    function getResponse$1(e) {
        var t = "";
        try {
            t = e.response || e.responseText
        } catch (n) {
            t = ""
        }
        return t
    }

    function initXHR() {
        var e = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function() {
            if (this.addEventListener) this.addEventListener("readystatechange", function() {
                if (4 === this.readyState && 200 === this.status && !this._processing) {
                    var e = "";
                    try {
                        e = handleAutoResponse(e = this.response || this.responseText)
                    } catch (t) {
                        e = ""
                    }
                    validate(e).valid && "" !== e || handler$2("xhr")
                }
            });
            else if (this.attachEvent) {
                var t = "";
                try {
                    t = handleAutoResponse(t = this.response || this.responseText)
                } catch (n) {
                    t = ""
                }
                validate(t).valid && "" !== t || handler$2("xhr-ie")
            }
            e.apply(this, toArray(arguments))
        }
    }

    function handler$2(e) {
        setTimeout(function() {
            var t = isBaxiaBlockByCookie();
            if (t) {
                var n = new XMLHttpRequest;
                n.open("GET", getPunishUrlBySecData(t, e)), n.send(null)
            }
        }, 500)
    }

    function getPunishUrlBySecData(e, t) {
        return "https://" + decodeURIComponent(e).split("__bx__")[1] + "/_____tmd_____/punish?reqeust=getpunishpage&source=" + t + "&x5secdata=" + e
    }

    function init$1() {
        try {
            handler$2("cookie"), initXHR()
        } catch (e) {
            importantLog("Hook cookie error, message:" + e.message)
        }
    }
    var cookiePrompt = {
            init: init$1
        },
        HookBX$1 = function(e) {
            var t = e.done,
                n = window.fetch;
            n && (window.fetch = function() {
                var e = arguments;
                return new window.Promise(function(r, o) {
                    var a = e[1] || {};
                    if (a.credentials && "omit" !== a.credentials || (a.credentials = "same-origin"), !crossOrigin(e[0] || "")) try {
                        e[1] || e[0].url ? (a.headers = e[1] ? a.headers || {} : e[0].headers || {}, a.headers.has ? a.headers.set("bx-v", version) : a.headers["bx-v"] = version) : (e.length = 2, e[1] = {
                            headers: {
                                "bx-v": version
                            }
                        })
                    } catch (i) {
                        log("fetch添加版本号失败，message：" + i, 1, 1)
                    }
                    e[0].url ? getStore("options", {}).addVersionToUrl && (e[0] = new Request(addVersionToUrl(e[0].url), e[0])) : e[0].href ? e[0].href = addVersionToUrl(e[0].href) : e[0] = addVersionToUrl(e[0]);
                    n.apply(window, e).then(function(n) {
                        try {
                            var s = n.headers.get("content-type");
                            if (-1 >= s.indexOf("json") && -1 >= s.indexOf("text") && -1 >= s.indexOf("application/javascript") || s.indexOf("event-stream") > -1) return r(n);
                            n.clone().text().then(function(i) {
                                return t ? t({
                                    parentConfig: a,
                                    parentArguments: e,
                                    response: n,
                                    data: i,
                                    resolve: r,
                                    reject: o
                                }) : (r(n), i)
                            })["catch"](function(e) {
                                o(e)
                            })
                        } catch (i) {
                            return r(n)
                        }
                    })["catch"](function(e) {
                        o(e)
                    })
                })
            })
        };

    function init$2() {
        try {
            HookBX$1({
                done: function(e) {
                    var t, n, r = e.parentConfig,
                        o = e.parentArguments,
                        a = e.response,
                        i = e.data,
                        s = e.resolve,
                        u = e.reject;
                    try {
                        var c = i && i.config || {};
                        c && ((c = r).url = o[0] && (o[0].url || o[0].href) || o[0]);
                        var d = void 0;
                        i = handleAutoResponse(i);
                        var l = validate(i);
                        if (l.valid) {
                            var p = otherFlowTypeBlock(a, i, "fetch");
                            p.valid || (i = {
                                url: p.url
                            }, l.valid = !1)
                        }
                        if (l.valid) return (d = c.baxiaData && c.baxiaData.defer) ? d.resolve(a) : s(a), i;
                        if (d = {
                                resolve: s,
                                reject: u
                            }, c.baxiaData = c.baxiaData || {
                                defer: d,
                                response: a
                            }, clearX5SecData(), l.anti_brush_flag) {
                            if ("string" == typeof i) try {
                                i = JSON.parse(i)
                            } catch (h) {
                                i = formatJsonp(i), i = JSON.parse(i)
                            }
                            var f = null === (n = null === (t = i.data) || void 0 === t ? void 0 : t.url) || void 0 === n ? void 0 : n.replace("&x5step=2", "&x5step=" + i.x5step);
                            if (f) return c.url && (0 === c.url.indexOf("http:") || 0 === c.url.indexOf("//") && "http:" === location.protocol) && (f = f.replace("https:", "http:")), c.bxOriginUrl = c.url, c.url = f, void window.fetch(c.url, c);
                            veryImportantLog("【Done Step】Fetch anti brush error, no url:" + JSON.stringify(i))
                        }
                        return handler$1("Fetch", {
                            result: i,
                            config: c,
                            checkJsFlag: l.checkjs_flag,
                            validateResult: l
                        }), d.promise
                    } catch (h) {
                        throw veryImportantLog("【Response Step】Fetch response done error, message: " + h.message + ", stack: " + h.stack), Error(h)
                    }
                }
            })
        } catch (e) {
            importantLog("Hook fetch error, message:" + e.message)
        }
    }
    var fetchPrompt = {
            init: init$2
        },
        init$3 = function() {
            xhrPrompt.init(), cookiePrompt.init(), fetchPrompt.init()
        },
        CONST_BAXIA_PROMPT_INIT = "baxiaPromptInit",
        CONST_BAXIA_INIT = "baxiaInit",
        CONST_OPTIONS = "options",
        SEA_DOMAIN = /lazada|alibaba.com|aliexpress|localhost/,
        isEffectUrl = function(e, t) {
            if (!e || "string" != typeof e || e.indexOf("ynuf.aliapp.org/service/um.json") > -1) return !1;
            var n = e + t,
                r = getStore("handleEffectUrl", {});
            if ("boolean" == typeof r[e + "fetch"] && "xhr" === t) return !1;
            var o = !1,
                a = getStore(CONST_OPTIONS, {}).checkApiPath;
            return a && a(e) && (o = !0), r[n] = o, setStore("handleEffectUrl", r), o
        };

    function canSubmit(e) {
        var t = getStore() || {},
            n = t.options,
            r = void 0 === n ? {} : n,
            o = t.ncData,
            a = r.canSubmit;
        if (!r.renderNC) return !0;
        if (a) {
            var i = a(e.url, o);
            return !i && _unVerifiedCallback(), i
        }
        return !(!o || 0 === o.length) || (_unVerifiedCallback(), !1)
    }

    function _unVerifiedCallback() {
        var e = (getStore() || {}).options;
        ((void 0 === e ? {} : e).unVerifiedCallback || function() {
            alert("请先完成验证后再进行操作")
        })()
    }
    var hookRewriteArgumentsAndApply = function(e, t, n) {
            var r = e[t];
            e[t] = function() {
                var e = toArray(arguments);
                n.call(this, e, r)
            }
        },
        getET = function(e) {
            var t = getStore("etModule", {});
            return t && t.getETToken ? t.getETToken(e) : "not_loaded"
        },
        getPostUA = function(e) {
            var t = getStore("postFYModule", {});
            return t && t.getFYToken ? t.getFYToken(e) : "not_loaded"
        },
        getUA = function(e) {
            return getPostUA(e)
        },
        getGetUA = function(e) {
            var t = getStore("getFYModule", {});
            return t && t.getFYToken ? t.getFYToken(e) : "not_loaded"
        },
        getUmidToken = function() {
            var e = getStore("getFYModule", {});
            return e && e.getUidToken ? e.getUidToken() : "not_loaded"
        },
        getDefaultLocation = function() {
            var e = document.currentScript ? document.currentScript.src : "";
            return e ? e.indexOf("laz-g-cdn") > -1 || e.indexOf("lzd-g.slatic.net") ? "sea" : includes(e, "assets.") ? "us" : "cn" : "cn"
        },
        emit = {},
        events = getStore("events", {}),
        _emit = {
            on: function(e, t) {
                return (events[e] || (events[e] = [])).push(t), setStore("events", events), emit
            },
            once: function(e, t) {
                var n = this,
                    r = function() {
                        t.apply(n, toArray(arguments)), n.off(e, r)
                    };
                return this.on(e, r), emit
            },
            off: function(e, t) {
                if (!e && !t) return events = {}, emit;
                var n = events[e];
                if (n)
                    if (t)
                        for (var r = n.length - 1; r >= 0; r--) n[r] === t && n.splice(r, 1);
                    else delete events[e];
                return emit
            },
            fire: function(e, t) {
                var n = (events = getStore("events", {}))[e];
                if (n)
                    for (var r = 0, o = (n = n.slice()).length; o > r; r++) n[r](t);
                return emit
            }
        },
        ModuleType;
    ! function(e) {
        e.uab = "uab", e.et = "et", e.umid = "umid"
    }(ModuleType || (ModuleType = {}));
    var NC_PARAM_UMIDTOKEN = "bx-umidtoken",
        NC_PARAM_UA = "bx-ua",
        NC_PARAM_ASAC = "bx-asac",
        EVENT_AWSC_READY = "event:awscReady@baxia",
        NC_PARAM_ET = "bx_et",
        SubmitType;
    ! function(e) {
        e[e.Null = 0] = "Null", e[e.QueryString = 1] = "QueryString", e[e.JSONString = 2] = "JSONString", e[e.FormData = 3] = "FormData", e[e.FormUrlEncoded = 4] = "FormUrlEncoded", e[e.Form = 5] = "Form", e[e.XHRHeader = 6] = "XHRHeader", e[e.FetchHeader = 7] = "FetchHeader"
    }(SubmitType || (SubmitType = {}));
    var getUA$1 = function(e, t) {
            return e === SubmitType.QueryString ? getGetUA(t) : getPostUA(t)
        },
        addASACParamToRequest = function(e) {
            if (!e) return e;
            var t = getStore("options", {}).asac;
            return t ? e = addParamToRequest(getASACSubmitType(e), e, [{
                key: NC_PARAM_ASAC,
                value: t
            }]) : e
        },
        addNCParamToRequest = function(e) {
            try {
                var t = getNCSubmitType(e),
                    n = getUA$1(t, e.url),
                    r = getUmidToken(),
                    o = getStore("options", {}),
                    a = o.needUmidToken,
                    i = o.uabOptions,
                    s = void 0 === i ? {} : i,
                    u = o.umOptions,
                    c = void 0 === u ? {} : u,
                    d = o.paramsType,
                    l = [];
                if ((d && d.indexOf(ModuleType.uab) > -1 || !d) && l.push({
                        key: NC_PARAM_UA,
                        value: n
                    }), d ? d.indexOf(ModuleType.umid) > -1 && l.push({
                        key: NC_PARAM_UMIDTOKEN,
                        value: r
                    }) : a && l.push({
                        key: NC_PARAM_UMIDTOKEN,
                        value: r
                    }), d && d.indexOf(ModuleType.et) > -1) {
                    var p = getET(e.url);
                    l.push({
                        key: NC_PARAM_ET,
                        value: p
                    })
                }
                var f = getStore("ncData");
                f && f.length > 0 && (l = l.concat(f));
                try {
                    SEA_DOMAIN.test(location.host) && (s.location || c.location || console && console.log("umOptions.location not set"), l = l.concat([{
                        key: "bx-sys",
                        value: "ua-l:" + (s.location || "no") + "__um-l:" + (c.serviceLocation || "no") + "__js:" + getCurrentJSDomain()
                    }]))
                } catch (h) {}
                e = addParamToRequest(t, e, l)
            } catch (h) {
                log("addParamToRequest:" + h.message)
            }
            return e
        },
        getNCSubmitType = function(e) {
            var t = getCustomSubmitType(e);
            if (t) return t;
            var n = e.params;
            return isObjectString(n) ? t = SubmitType.JSONString : n instanceof FormData ? t = SubmitType.FormData : "string" == typeof n && n.indexOf("=") > -1 ? t = SubmitType.FormUrlEncoded : n instanceof HTMLFormElement && (t = SubmitType.Form), t
        },
        getASACSubmitType = function(e) {
            return getCustomSubmitType(e) || SubmitType.QueryString
        },
        getCustomSubmitType = function(e) {
            var t = getStore("options", {}).appendTo,
                n = null;
            return "header" === t ? e.request && (e.request instanceof XMLHttpRequest || e.request.send) ? n = SubmitType.XHRHeader : e.request && "object" == typeof e.request && (n = SubmitType.FetchHeader) : "get" !== e.method && "querystring" !== t || (n = SubmitType.QueryString), n
        };

    function preRequest(e) {
        var t = getStore("options", {}),
            n = t.asac,
            r = t.awscTimeout,
            o = t.paramsType,
            a = Math.random() + "".substring(1, 10),
            i = EVENT_AWSC_READY + a;
        _emit.once(i, function(e) {
            e.isAppend() || (n && (e = addASACParamToRequest(e)), e = addNCParamToRequest(e)), canSubmit(e) ? e.process(e) : e.canNotSubmit && e.canNotSubmit()
        });
        var s = !!(o && 0 > o.indexOf(ModuleType.umid) && 0 > o.indexOf(ModuleType.uab));
        if (!isAwscReady() && !s) {
            var u = setInterval(function() {
                    (isAwscReady() || s) && (clearInterval(u), clearTimeout(c), _emit.fire(i, e))
                }, 200),
                c = setTimeout(function() {
                    clearInterval(u), _emit.fire(i, e)
                }, r + 200);
            return e
        }
        _emit.fire(i, e)
    }

    function isAwscReady() {
        var e = getStore("options", {}).needUmidToken,
            t = getUmidToken();
        return !(e && (-1 !== t.indexOf("defaultToken1") || -1 !== t.indexOf("defaultToken3")) || !getStore("getFYModule") && !getStore("postFYModule"))
    }

    function addParamToRequest(e, t, n) {
        switch (e) {
            case SubmitType.XHRHeader:
                addParam(t.params, n, function(e) {
                    t.request.setRequestHeader(e.key, e.value)
                });
                break;
            case SubmitType.FetchHeader:
                var r = t.headers || {};
                addParam(t.params, n, function(e) {
                    var t = e.key,
                        n = e.value;
                    r.append ? r.append(t, n) : r[t] = n
                }), t.headers = r;
                break;
            case SubmitType.Form:
                addParam(t.params, n, function(e) {
                    addInput(t.params, e.key, e.value)
                });
                break;
            case SubmitType.QueryString:
                addParam(t.params, n, function(e) {
                    t.url = addQueryString(t.url, e.key, encodeURIComponent(e.value))
                });
                break;
            case SubmitType.FormUrlEncoded:
                addParam(t.params, n, function(e) {
                    t.params = addFormUrlEncoded(t.params, e.key, e.value)
                });
                break;
            case SubmitType.FormData:
                addParam(t.params, n, function(e) {
                    t.params.append(e.key, e.value)
                });
                break;
            case SubmitType.JSONString:
                var o = t.params ? JSON.parse(t.params) : {};
                addParam(o, n, function(e) {
                    o[e.key] = e.value
                }), t.params = JSON.stringify(o)
        }
        return t
    }

    function addParam(e, t, n) {
        for (var r = t.length, o = 0; r > o; o++) n(t[o]);
        return e
    }

    function addInput(e, t, n) {
        var r = document.createElement("input");
        r.type = "hidden", r.name = t, r.value = n, e.appendChild(r)
    }
    var initFetch = function() {
            try {
                var e = window.fetch;
                if (!e) return;
                window.fetch = function() {
                    var t = arguments;
                    return new window.Promise(function(n, r) {
                        var o = t[0],
                            a = t[1] || {},
                            i = function() {
                                e.apply(window, t).then(function(e) {
                                    return n(e)
                                })["catch"](function(e) {
                                    r(e)
                                })
                            };
                        if ("string" != typeof o) return i();
                        if (!isEffectUrl(o, "fetch")) return i();
                        var s = a.headers,
                            u = a.body,
                            c = void 0 === u ? "{}" : u,
                            d = a.method;
                        preRequest({
                            url: o,
                            params: c,
                            method: void 0 === d ? "get" : d,
                            headers: s,
                            request: {},
                            isAppend: function() {
                                return !(!s || !s["bx-ua"]) || (!!(s && s.has && s.has("bx-ua")) || ("string" == typeof c ? c && c.indexOf("bx-ua") > -1 : c && c.has && c.has("bx-ua")))
                            },
                            process: function(e) {
                                var n = e.headers,
                                    r = e.params;
                                t[0] = e.url, isEmptyObject(n) || (a.headers = n), r && "{}" !== r && (a.body = r), t[1] = a, i()
                            }
                        })
                    })
                }
            } catch (t) {
                importantLog("fetch token" + t.message)
            }
        },
        XHRPrototype$1 = XMLHttpRequest.prototype,
        initXhr = function() {
            try {
                hookRewriteArgumentsAndApply(XHRPrototype$1, "send", function(e, t) {
                    var n = this;
                    if (!this.effectUrl || this.handleToken) return t.apply(this, e);
                    this.handleToken = !0, preRequest({
                        url: this.effectUrl,
                        request: this,
                        params: e[0],
                        headers: null,
                        isAppend: function() {
                            return n.appended
                        },
                        process: function(e) {
                            t.call(n, e.params)
                        }
                    })
                }), hookFunctionAndArguments(XHRPrototype$1, "open", function() {
                    var e = toArray(arguments),
                        t = e[1];
                    if (!isEffectUrl(t, "xhr") || this.effectUrl) return this.appended = !0, e;
                    this.effectUrl = e[1];
                    var n = getStore("options", {}).appendTo,
                        r = (e[0] + "").toLocaleLowerCase();
                    return "header" === n ? e : ("querystring" !== n && "get" !== r || (t = addNCParamToRequest({
                        url: t,
                        method: r,
                        request: null,
                        params: null,
                        headers: null
                    }).url), t = addASACParamToRequest({
                        url: t,
                        request: null,
                        params: null,
                        headers: null
                    }).url, e[1] = t, e)
                }, !0)
            } catch (e) {
                importantLog("xhr token" + e.message)
            }
        },
        initJsonp = function() {
            var e = HTMLScriptElement.prototype;
            hookFunctionAndArguments(e, "setAttribute", function() {
                var e = toArray(arguments),
                    t = e[1];
                "src" === e[0] && isEffectUrl(t, "script") && preRequest({
                    url: t,
                    method: "get",
                    request: {},
                    isAppend: function() {
                        return t && t.indexOf("bx-ua") > -1
                    },
                    process: function(t) {
                        e[1] = t.url
                    }
                });
                return e
            }, !0), hookProperty(e, "src", function(e) {
                isEffectUrl(e, "script") && (preRequest({
                    url: e,
                    method: "get",
                    request: {},
                    isAppend: function() {
                        return e && e.indexOf("bx-ua") > -1
                    },
                    process: function(t) {
                        e = t.url
                    }
                }), e.indexOf("bx-ua") > -1 || (e = addQueryString(e, "bx-ua", "fast-load")));
                return e
            })
        },
        initForm = function() {
            try {
                var e = !1,
                    t = function(t) {
                        if ("submit" === t.type) {
                            var n = t.target || t.srcElement,
                                r = n.getAttribute("action") || location.href;
                            if (!isEffectUrl(r, "form")) return;
                            if (!0 === e) return void t.preventDefault();
                            e = t.formSubmit, preRequest({
                                url: r,
                                params: n,
                                headers: {},
                                request: {},
                                isAppend: function() {
                                    return !!n["bx-ua"]
                                },
                                canNotSubmit: function() {
                                    t.preventDefault()
                                },
                                process: function(e) {
                                    var t = e.url;
                                    r !== t && n.setAttribute("action", t)
                                }
                            })
                        }
                    };
                addEvent("submit", document, t);
                var n = window.HTMLFormElement;
                n && hookFunction(n.prototype, "submit", function() {
                    e = !1, t({
                        type: "submit",
                        target: this,
                        formSubmit: !0,
                        preventDefault: function() {
                            throw "未完成验证"
                        }
                    })
                })
            } catch (r) {
                importantLog("form token" + r.message)
            }
        },
        init$4 = function() {
            var e = getStore(CONST_OPTIONS, {}),
                t = e.paramsType;
            (t && (t.indexOf(ModuleType.uab) > -1 || t.indexOf(ModuleType.umid) > -1) || !t) && (initGetAWSC(e), initPostAWSC(e)), t && t.indexOf(ModuleType.et) > -1 && initET(e), initFetch(), initXhr(), initForm(), initJsonp()
        };

    function initPostAWSC(e) {
        var t = window.AWSC,
            n = e.paramsType,
            r = e.uabOptions || {};
        r.location = r.location || getDefaultLocation(), n && (r.MaxMTLog = r.MaxMTLog || 20, r.MaxNGPLog = r.MaxNGPLog || 10, r.MaxKSLog = r.MaxKSLog || 5, r.MaxFocusLog = r.MaxFocusLog || 3), t.configFYEx(function(e) {
            setStore("postFYModule", e)
        }, r || {}, e.awscTimeout)
    }

    function initGetAWSC(e) {
        var t = window.AWSC,
            n = e.uabOptions || {};
        n.MaxMTLog = n.MaxMTLog || 20, n.MaxNGPLog = n.MaxNGPLog || 10, n.MaxKSLog = n.MaxKSLog || 5, n.MaxFocusLog = n.MaxFocusLog || 3, n.location = n.location || getDefaultLocation(), t.configFYEx(function(e) {
            setStore("getFYModule", e)
        }, n || {}, e.awscTimeout)
    }

    function initET(e) {
        window.AWSC.use("et", function(e, t) {
            "loaded" === e && setStore("etModule", t)
        }, {
            timeout: e.etTimeout || e.awscTimeout
        })
    }
    var noCaptcha = null,
        isMobile$1 = isMobile(),
        renderNC = function(e) {
            if (e.renderNC = e.renderNC || location.search.indexOf("renderNC") > -1, e.renderNC)
                if (isRendered(e.renderTo)) console.log("已经渲染或者 DOM 元素不存在");
                else {
                    var t = "";
                    e.cssLink && loadCSS(e.cssLink), isMobile$1 ? (t = "register_h5", loadJS("//g.alicdn.com/sd/nch5/index.js", function() {
                        noCaptcha = window.NoCaptcha, i.bannerHidden = !1, noCaptcha.init(i), noCaptcha.setEnabled(!0)
                    })) : (t = "register", loadJS("//g.alicdn.com/sd/ncpc/nc.js", function() {
                        noCaptcha = new window.noCaptcha(i)
                    }));
                    var n = e.verifiedCallback,
                        r = e.showCallback,
                        o = e.ncAppkey,
                        a = e.ncToken,
                        i = {
                            renderTo: "#" + e.renderTo.id,
                            appkey: void 0 === o ? "NCAPPKEY" : o,
                            token: void 0 === a ? "NCTOKENSTR" : a,
                            bannerHidden: !1,
                            scene: t,
                            replaceCallback: function(e, t, r) {
                                var o, a = [];
                                isMobile$1 ? o = r.bind(this, "ok") : (o = e.success, t = e.data), a.push({
                                    key: "bx-nc-ua",
                                    value: t.n
                                }), setStore("ncData", a), setStore("ncSlideData", t), o({
                                    success: !0,
                                    result: {
                                        code: 0
                                    }
                                }), n && n()
                            },
                            language: e.ncLanguage
                        };
                    r && r()
                }
        },
        NC = {
            reset: function() {
                if (isMobile$1) return noCaptcha.reset();
                noCaptcha.reload()
            },
            show: function() {
                noCaptcha.show()
            },
            hide: function() {
                noCaptcha.hide()
            },
            setTrans: function(e) {
                noCaptcha.setTrans(e)
            },
            upLang: function(e, t) {
                noCaptcha.upLang(e, t)
            }
        },
        _isGray = isGray();
    !getStore(CONST_BAXIA_PROMPT_INIT) && _isGray && (setStore(CONST_BAXIA_PROMPT_INIT, !0), init$3());
    var init$5 = function(e) {
            void 0 === e && (e = {}), _isGray && ((e = formatInjectOptions(e)).awscTimeout = e.awscTimeout || 3e3, setStore(CONST_OPTIONS, e), renderNC(e), getStore(CONST_BAXIA_INIT) || (setStore(CONST_BAXIA_INIT, !0), e.checkApiPath && init$4()))
        },
        BaxiaCommon = function() {
            return function(e) {
                this.set = setStore, this.version = version, this.getUA = getUA, this.NC = NC, init$5(e)
            }
        }();
    return BaxiaCommon.set = setStore, BaxiaCommon.version = version, BaxiaCommon.getUA = getUA, BaxiaCommon.NC = NC, BaxiaCommon.init = function(e) {
        void 0 === e && (e = {}), e.needUmidToken = !0, init$5(e)
    }, log("i,c", 11, .01), BaxiaCommon
}();