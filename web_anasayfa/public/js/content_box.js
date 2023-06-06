!function(e) {
    var r = {};
    function t(i) {
        if (r[i])
            return r[i].exports;
        var o = r[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t),
            o.l = !0,
            o.exports
    }
    t.m = e,
        t.c = r,
        t.d = function(e, r, i) {
            t.o(e, r) || Object.defineProperty(e, r, {
                enumerable: !0,
                get: i
            })
        }
        ,
        t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        t.t = function(e, r) {
            if (1 & r && (e = t(e)),
            8 & r)
                return e;
            if (4 & r && "object" == typeof e && e && e.__esModule)
                return e;
            var i = Object.create(null);
            if (t.r(i),
                Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }),
            2 & r && "string" != typeof e)
                for (var o in e)
                    t.d(i, o, function(r) {
                        return e[r]
                    }
                        .bind(null, o));
            return i
        }
        ,
        t.n = function(e) {
            var r = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
            ;
            return t.d(r, "a", r),
                r
        }
        ,
        t.o = function(e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        }
        ,
        t.p = "/assets/",
        t(t.s = 29)
}({
    29: function(e, r, t) {
        e.exports = t(30)
    },
    30: function(e, r, t) {
        "use strict";
        t.r(r);
        t(31);
        Drupal.behaviors.populer_swiper = {
            attach: function(e, r) {
                jQuery(".popular-content-show-more", e).once("populer_swiper").click((function() {
                        jQuery(this).hasClass("opened") ? (jQuery(this).removeClass("opened"),
                            jQuery(this).text(Drupal.t("Daha Fazla Gör"))) : (jQuery(this).addClass("opened"),
                            jQuery(this).text(Drupal.t("Daha Az Gör"))),
                            jQuery(this).closest(".view").find(".popular-content-more").slideToggle("slow")
                    }
                ));
                var t = void 0;
                function i() {
                    var e = jQuery(window).width();
                    e < 992 && null == t ? (t = new Swiper(".view-populer-icerikler .blog-swiper-container",{
                        slidesPerView: 1,
                        spaceBetween: 16,
                        centeredSlides: !0
                    }),
                        jQuery(".view-populer-icerikler .m-popular-slider").addClass("activated"),
                        jQuery(".view-populer-icerikler .swiper-wrapper").removeClass("m-grid")) : e > 991 && null != t && (jQuery(".view-populer-icerikler .m-popular-slider").removeClass("activated"),
                        t.destroy(),
                        t = void 0,
                        jQuery(".view-populer-icerikler .blog-swiper-container .swiper-wrapper").removeAttr("style"),
                        jQuery(".view-populer-icerikler .swiper-wrapper").addClass("m-grid"),
                        jQuery(".view-populer-icerikler .blog-swiper-container .swiper-slide").removeAttr("style"))
                }
                i(),
                    jQuery(window).on("resize", (function() {
                            i()
                        }
                    ))
            }
        }
    },
    31: function(e, r, t) {}
});
