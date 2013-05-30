/*! playground 30-05-2013 */
var requirejs, require, define;

(function(a) {
    function b(a, b) {
        return r.call(a, b);
    }
    function c(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m = b && b.split("/"), n = p.map, o = n && n["*"] || {};
        if (a && "." === a.charAt(0)) if (b) {
            for (m = m.slice(0, m.length - 1), a = m.concat(a.split("/")), j = 0; j < a.length; j += 1) if (l = a[j], 
            "." === l) a.splice(j, 1), j -= 1; else if (".." === l) {
                if (1 === j && (".." === a[2] || ".." === a[0])) break;
                j > 0 && (a.splice(j - 1, 2), j -= 2);
            }
            a = a.join("/");
        } else 0 === a.indexOf("./") && (a = a.substring(2));
        if ((m || o) && n) {
            for (c = a.split("/"), j = c.length; j > 0; j -= 1) {
                if (d = c.slice(0, j).join("/"), m) for (k = m.length; k > 0; k -= 1) if (e = n[m.slice(0, k).join("/")], 
                e && (e = e[d])) {
                    f = e, g = j;
                    break;
                }
                if (f) break;
                !h && o && o[d] && (h = o[d], i = j);
            }
            !f && h && (f = h, g = i), f && (c.splice(0, g, f), a = c.join("/"));
        }
        return a;
    }
    function d(b, c) {
        return function() {
            return k.apply(a, s.call(arguments, 0).concat([ b, c ]));
        };
    }
    function e(a) {
        return function(b) {
            return c(b, a);
        };
    }
    function f(a) {
        return function(b) {
            n[a] = b;
        };
    }
    function g(c) {
        if (b(o, c)) {
            var d = o[c];
            delete o[c], q[c] = !0, j.apply(a, d);
        }
        if (!b(n, c) && !b(q, c)) throw new Error("No " + c);
        return n[c];
    }
    function h(a) {
        var b, c = a ? a.indexOf("!") : -1;
        return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [ b, a ];
    }
    function i(a) {
        return function() {
            return p && p.config && p.config[a] || {};
        };
    }
    var j, k, l, m, n = {}, o = {}, p = {}, q = {}, r = Object.prototype.hasOwnProperty, s = [].slice;
    l = function(a, b) {
        var d, f = h(a), i = f[0];
        return a = f[1], i && (i = c(i, b), d = g(i)), i ? a = d && d.normalize ? d.normalize(a, e(b)) : c(a, b) : (a = c(a, b), 
        f = h(a), i = f[0], a = f[1], i && (d = g(i))), {
            f: i ? i + "!" + a : a,
            n: a,
            pr: i,
            p: d
        };
    }, m = {
        require: function(a) {
            return d(a);
        },
        exports: function(a) {
            var b = n[a];
            return "undefined" != typeof b ? b : n[a] = {};
        },
        module: function(a) {
            return {
                id: a,
                uri: "",
                exports: n[a],
                config: i(a)
            };
        }
    }, j = function(c, e, h, i) {
        var j, k, p, r, s, t, u = [];
        if (i = i || c, "function" == typeof h) {
            for (e = !e.length && h.length ? [ "require", "exports", "module" ] : e, s = 0; s < e.length; s += 1) if (r = l(e[s], i), 
            k = r.f, "require" === k) u[s] = m.require(c); else if ("exports" === k) u[s] = m.exports(c), 
            t = !0; else if ("module" === k) j = u[s] = m.module(c); else if (b(n, k) || b(o, k) || b(q, k)) u[s] = g(k); else {
                if (!r.p) throw new Error(c + " missing " + k);
                r.p.load(r.n, d(i, !0), f(k), {}), u[s] = n[k];
            }
            p = h.apply(n[c], u), c && (j && j.exports !== a && j.exports !== n[c] ? n[c] = j.exports : p === a && t || (n[c] = p));
        } else c && (n[c] = h);
    }, requirejs = require = k = function(b, c, d, e, f) {
        return "string" == typeof b ? m[b] ? m[b](c) : g(l(b, c).f) : (b.splice || (p = b, 
        c.splice ? (b = c, c = d, d = null) : b = a), c = c || function() {}, "function" == typeof d && (d = e, 
        e = f), e ? j(a, b, c, d) : setTimeout(function() {
            j(a, b, c, d);
        }, 4), k);
    }, k.config = function(a) {
        return p = a, p.deps && k(p.deps, p.callback), k;
    }, define = function(a, c, d) {
        c.splice || (d = c, c = []), b(n, a) || b(o, a) || (o[a] = [ a, c, d ]);
    }, define.amd = {
        jQuery: !0
    };
})(), define("Child", [ "Parent" ], function(a) {
    "use strict";
    return a.extend({
        name: "Child Class",
        init: function(a, b) {
            this._super(a, b), window.console.log("Child: " + this.name, this);
        },
        childFunction: function() {
            window.console.log("childFunction", this);
        }
    });
}), define("Class", function() {
    "use strict";
    var a = !1, b = /var xyz/.test(function() {}) ? /\b_super\b/ : /[\D|\d]*/, c = function() {}, d = function(a, b, c) {
        return function() {
            var d, e = this._super;
            return this._super = c[a], d = b.apply(this, arguments), this._super = e, d;
        };
    };
    return c.extend = function e(c) {
        function f() {
            !a && this.init && this.init.apply(this, arguments);
        }
        var g, h, i = this.prototype;
        a = !0, g = new this(), a = !1;
        for (h in c) c.hasOwnProperty(h) && (g[h] = "function" == typeof c[h] && "function" == typeof i[h] && b.test(c[h]) ? d(h, c[h], i) : c[h]);
        return f.prototype = g, f.prototype.constructor = f, f.extend = e, f;
    }, c;
}), define("Parent", [ "Class" ], function(a) {
    "use strict";
    return a.extend({
        name: "Parent Class",
        init: function(a, b) {
            this.id = a, this.options = b, window.console.log("Parent: " + this.name, this);
        },
        parentFunction: function() {
            window.console.log("parent", this);
        }
    });
}), function() {
    "use strict";
    require([ "Child" ], function(a) {
        var b = new a("test1", {
            options1: "child options param"
        });
        b.childFunction(), b.parentFunction();
    });
}();
//# sourceMappingURL=../bin/js/source-map.js
