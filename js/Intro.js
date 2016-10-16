var extend = function(t, e) {
        function o() {
            this.constructor = t;
        }
        for (var i in e) hasProp.call(e, i) && (t[i] = e[i]);
        return o.prototype = e.prototype, t.prototype = new o, t.__super__ = e.prototype, t
    },
    hasProp = {}.hasOwnProperty;

window.Compass = {
    init: function() {
        "use strict";
        var t;
        return t = new Compass.Router, Backbone.history.start({
            pushState: !0,
            hashChange: !1,
            root: "/"
        })
    }
};

$(function() {
    "use strict";
    return Compass.init();
});

Compass.Router = function(t) {
    function e() {
        return e.__super__.constructor.apply(this, arguments)
    }
    return extend(e, t), e.prototype.elements = {}, e.prototype.initialize = function() {
        return new IntroSection, this.elements.navigation = new Compass.Views.Navigation
    }, e
}(Backbone.Router);

var CompassIntro, Dot, coloredDotIndex, ColoredDot, pixelRatio, random, toRad, IntroSection;
CompassIntro = function() {
    function t(t) {
        var e, o, i;
        this.el = t, this.dots = [], this.mouse = {}, this.center = {}, this.center.x = this.el.width() / 2, this.center.y = this.el.height() / 3, this.radius = 150, this.density = 15, this.generateDots(), this.generateColoredDots(), e = function(t) {
            return function(e) {
                return t.mouse.x = e.offsetX || e.layerX - t.el.offsetLeft || e.pageX, t.mouse.y = e.offsetY || e.layerY - t.el.offsetTop || e.pageY
            }
        }(this), this.el.mousemove(e), i = function(t) {
            return function(e) {
                var o, i, n, s, r;
                for (t.center.x = t.el.width() / 2, t.center.y = t.el.height() / 3, s = t.dots, r = [], i = 0, n = s.length; n > i; i++) o = s[i], r.push(o.initPosition());
                return r
            }
        }(this), $(window).resize(i), o = function(t) {
            return function() {
                var e, i, n, s;
                for (s = t.dots, i = 0, n = s.length; n > i; i++) e = s[i], e.updateDotMouse();
                requestAnimationFrame(o)
            }
        }(this), requestAnimationFrame(o)
    }
    return t.prototype.render = function() {
        return this.el.style.width = "100%", this.el.style.height = "100%", this.el.style.position = "relative"
    }, t.prototype.generateDots = function() {
        var t, e, o, i, n, s, r, a;
        for (t = o = 0, r = 720, a = this.density; a > 0 ? r > o : o > r; t = o += a) i = Math.floor(t / 360), s = this.radius + 12 * i, t += i * this.density / 2, n = random(5, 20 - 10 * i), e = new Dot(n, s, this.center, t, this.mouse), this.dots.push(e), this.el.append(e.el)
    }, t.prototype.generateColoredDots = function() {
        var t, e, o, i, n, s, r;
        for (e = ["#4A90E2", "#F5A623", "#7ED321", "#D0021B", "#417505"], t = i = 0, r = 360; r > i; t = i += 72) s = this.radius + 5, n = random(25, 35), o = new ColoredDot(e.pop(), n, s, this.center, t, this.mouse), this.dots.push(o), this.el.append(o.el)
    }, t
}();

Dot = function() {
    function t(t, e, o, i, n) {
        return this.el = document.createElement("li"), this.radius = t, this.centerRadius = e, this.center = o, this.angle = i, this.mouse = n, this.noise = random(-10, 10), this.initPosition(), this.render(), this
    }
    return t.prototype.render = function() {
        return this.el.style.position = "absolute", this.el.style.width = this.radius + "px", this.el.style.height = this.radius + "px", this.el.style.borderRadius = this.radius + "px", this.el.style.backgroundColor = "black", this.el.style.transform = "translate(" + this.x + "px, " + this.y + "px)"
    }, t.prototype.initAnimation = function() {
        var t, e;
        this.alpha = 0, this.scaleX = .5, this.scaleY = .5, t = this.x, e = this.y, this.updatePosition({
            centerRadius: this.centerRadius + 200
        })
    }, t.prototype.initPosition = function() {
        return this.x = this.originalX = this.center.x + this.centerRadius * Math.cos(toRad(this.angle)) + this.noise, this.y = this.originalY = this.center.y + this.centerRadius * Math.sin(toRad(this.angle)) + this.noise
    }, t.prototype.updatePosition = function(t) {
        var e, o, i;
        t = t || {}, i = t.centerRadius || this.centerRadius, o = t.center || this.center, e = t.angle || this.angle, this.x = o.x + i * Math.cos(toRad(e)) + this.noise, this.y = o.y + i * Math.sin(toRad(e)) + this.noise
    }, t.prototype.updateDotMouse = function() {
        var t, e;
        this.mouse.x && this.mouse.y && (e = Math.atan2(this.y - this.mouse.y, this.x - this.mouse.x), t = 200 / Math.sqrt((this.mouse.x - this.x) * (this.mouse.x - this.x) + (this.mouse.y - this.y) * (this.mouse.y - this.y)), this.x += Math.cos(e) * t + .05 * (this.originalX - this.x), this.y += Math.sin(e) * t + .05 * (this.originalY - this.y), this.el.style.transform = "translate(" + this.x + "px, " + this.y + "px)", this.el.style.webkitTransform = "translate(" + this.x + "px, " + this.y + "px)")
    }, t
}();

coloredDotIndex = 0;
ColoredDot = function(t) {
    function e(t, o, i, n, s, r) {
        var a;
        e.__super__.constructor.call(this, o, i, n, s, r), this.el.style.backgroundColor = t, a = this.index = coloredDotIndex, coloredDotIndex++, 0 === this.index && $(this.el).addClass("selected"), this.el.addEventListener("mouseover", function() {
            return $(this).addClass("selected"), $(this).siblings().removeClass("selected"), $("#intro .banner li").removeClass("selected").eq(a).addClass("selected")
        })
    }
    return extend(e, t), e.prototype.updateDotMouse = function() {
        var t, e;
        this.mouse.x && this.mouse.y && (e = Math.atan2(this.y - this.mouse.y, this.x - this.mouse.x), t = 50 / Math.sqrt((this.mouse.x - this.x) * (this.mouse.x - this.x) + (this.mouse.y - this.y) * (this.mouse.y - this.y)), this.x += Math.cos(e) * t + .05 * (this.originalX - this.x), this.y += Math.sin(e) * t + .05 * (this.originalY - this.y), this.el.style.transform = "translate(" + this.x + "px, " + this.y + "px)", this.el.style.webkitTransform = "translate(" + this.x + "px, " + this.y + "px)")
    }, e.prototype.show = function() {}, e
}(Dot);

random = function(t, e) {
    return Math.floor(Math.random() * (e - t + 1) + t)
};

toRad = function(t) {
    return t * Math.PI / 180
};

IntroSection = function(t) {
    function e() {
        return e.__super__.constructor.apply(this, arguments)
    }
    return extend(e, t), e.prototype.el = "#intro", e.prototype.initialize = function() {
        var t;
        return t = this.$(".dots"), new CompassIntro(t)
    }, e
}(Backbone.View);