(function($) {
    "use strict";

    $(".tbtn").click(function() {
        $("html,body").animate({
                scrollTop: $("#experience").offset().top,
            },

            "slow"
        );
    });

    $(".tbtn2").click(function() {
        $("html,body").animate({
                scrollTop: $("#portfolio").offset().top,
            },

            "slow"
        );
    });

    $(".tbtn3").click(function() {
        $("html,body").animate({
                scrollTop: $("#certifications").offset().top,
            },

            "slow"
        );
    });

    jQuery(document).ready(function($) {
        //open popup

        $(".popup-trigger").on("click", function(event) {
            event.preventDefault();

            $(".popup").addClass("is-visible");
        });

        $(".popup-triggers").on("click", function(event) {
            event.preventDefault();

            $(".popup2").addClass("is-visible");
        });

        //close popup

        $(".popup").on("click", function(event) {
            if ($(event.target).is(".popup-close") || $(event.target).is(".popup")) {
                event.preventDefault();

                $(this).removeClass("is-visible");
            }
        });

        //close popup when clicking the esc keyboard button

        $(document).keyup(function(event) {
            if (event.which == "27") {
                $(".popup").removeClass("is-visible");
            }
        });
    });

    $.fn.andSelf = function() {
        return this.addBack.apply(this, arguments);
    };

    /* Loader Code Start */

    $(window).on("load", function() {
        $(".section-loader").fadeOut("slow");

        var $container = $(".portfolioContainer");

        $container.isotope({
            filter: "*",

            animationOptions: {
                queue: true,
            },
        });

        $(".portfolio-nav li").click(function() {
            $(".portfolio-nav .current").removeClass("current");

            $(this).addClass("current");

            var selector = $(this).attr("data-filter");

            $container.isotope({
                filter: selector,

                animationOptions: {
                    queue: true,
                },
            });

            return false;
        });
    });

    /* Loader Code End */

    //Disable source view

    window.onload = function disabled() {
        document.addEventListener(
            "contextmenu",
            function(e) {
                e.preventDefault();
            },
            false
        );

        document.addEventListener(
            "keydown",
            function(e) {
                //document.onkeydown = function(e) {

                // "I" key

                if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
                    disabledEvent(e);
                }

                // "J" key

                if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
                    disabledEvent(e);
                }

                // "S" key + macOS

                if (
                    e.keyCode == 83 &&
                    (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
                ) {
                    disabledEvent(e);
                }

                // "U" key

                if (e.ctrlKey && e.keyCode == 85) {
                    disabledEvent(e);
                }

                // "F12" key

                if (event.keyCode == 123) {
                    disabledEvent(e);
                }
            },
            false
        );

        function disabledEvent(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            } else if (window.event) {
                window.event.cancelBubble = true;
            }

            e.preventDefault();

            return false;
        }
    };

    /*

  

        |====================

  

        | Mobile NAv trigger

  

        |=====================

  

        */

    var trigger = $(".navbar-toggler"),
        overlay = $(".overlay"),
        navc = $(".navbar-collapse"),
        active = false;

    $(".navbar-toggler, .navbar-nav li a, .overlay").on("click", function() {
        $(".navbar-toggler").toggleClass("active");

        //   $('#js-navbar-menu').toggleClass('active');

        //   $('.navbar-collapse').toggleClass('show');

        overlay.toggleClass("active");

        navc.toggleClass("active");
    });

    /*

  

        |=================

  

        | Onepage Nav

  

        |================

  

        */

    $("#mh-header").onePageNav({
        currentClass: "active",

        changeHash: false,

        scrollSpeed: 500,

        scrollThreshold: 0.5,
    });

    /*

  

        |=================

  

        | fancybox

  

        |================

  

        */

    $("[data-fancybox]").fancybox({});

    /*

  

        |===============

  

        | WOW ANIMATION

  

        |==================

  

        */

    var wow = new WOW({
        mobile: false, // trigger animations on mobile devices (default is true)
    });

    wow.init();

    /*

  

        |=================

  

        | AOS

  

        |================

  

        */

    //AOS.init();

    /*

  

        | ==========================

  

        | NAV FIXED ON SCROLL

  

        | ==========================

  

        */

    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".nav-scroll").addClass("nav-strict");
        } else {
            $(".nav-scroll").removeClass("nav-strict");
        }
    });

    /*

  

        |=================

  

        | Progress bar

  

        |================

  

        */

    $(".determinate").each(function() {
        var width = $(this).text();

        $(this)
            .css("width", width)

        .empty()

        .append('<i class="fa fa-circle"></i>');
    });

    /*

  

        |=================

  

        | Portfolio mixin

  

        |================

  

        */

    $("#portfolio-item").mixItUp();

    /*

  

        |=================

  

        | Client review

  

        |================

  

        */

    $("#mh-client-review").owlCarousel({
        loop: false,

        responsiveClass: true,

        nav: true,

        autoplay: false,

        smartSpeed: 450,

        stopOnHover: true,

        animateIn: "slideInRight",

        animateOut: "slideOutLeft",

        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1,
            },

            768: {
                items: 2,
            },

            1170: {
                items: 3,
            },
        },
    });

    /*

  

        |=================

  

        | Project review slide

  

        |================

  

        */

    $(".mh-project-testimonial").owlCarousel({
        loop: true,

        responsiveClass: true,

        nav: false,

        dots: false,

        autoplay: true,

        smartSpeed: 450,

        stopOnHover: true,

        animateIn: "slideInRight",

        animateOut: "slideOutLeft",

        autoplayHoverPause: true,

        pagination: false,

        responsive: {
            0: {
                items: 1,
            },

            768: {
                items: 1,
            },

            1170: {
                items: 1,
            },
        },
    });

    /*

  

        |=================

  

        | Single Project review

  

        |================

  

        */

    $("#single-project").owlCarousel({
        loop: false,

        responsiveClass: true,

        nav: false,

        dots: true,

        autoplay: false,

        smartSpeed: 450,

        stopOnHover: true,

        animateIn: "slideInRight",

        animateOut: "slideOutLeft",

        autoplayHoverPause: true,

        pagination: false,

        responsive: {
            0: {
                items: 1,
            },

            768: {
                items: 1,
            },

            1170: {
                items: 1,
            },
        },
    });

    /*

  

        |=================

  

        | Project review slide

  

        |================

  

        */

    $(".mh-single-project-slide-by-side").owlCarousel({
        loop: false,

        responsiveClass: true,

        nav: true,

        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
        ],

        dots: false,

        autoplay: false,

        smartSpeed: 450,

        stopOnHover: true,

        animateIn: "slideInRight",

        animateOut: "slideOutLeft",

        autoplayHoverPause: true,

        pagination: false,

        responsive: {
            0: {
                items: 1,
            },

            768: {
                items: 1,
            },

            1170: {
                items: 1,
            },
        },
    });

    /*

  

        |=================

  

        | Single client review

  

        |================

  

        */

    $("#mh-single-client-review").owlCarousel({
        loop: false,

        responsiveClass: true,

        nav: true,

        autoplay: false,

        smartSpeed: 450,

        stopOnHover: true,

        animateIn: "slideInRight",

        animateOut: "slideOutLeft",

        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1,
            },

            768: {
                items: 1,
            },

            1170: {
                items: 1,
            },
        },
    });

    /*

  

        |=================

  

        | Clint review slide

  

        |================

  

        */

    $("#mh-2-client-review").owlCarousel({
        loop: false,

        responsiveClass: true,

        nav: true,

        autoplay: false,

        smartSpeed: 450,

        stopOnHover: true,

        animateIn: "slideInRight",

        animateOut: "slideOutLeft",

        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1,
            },

            768: {
                items: 2,
            },

            1170: {
                items: 2,
            },
        },
    });

    //Smooth Scroll

    $(function() {
        $(".nav-link-footer").click(function() {
            if (
                location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);

                target = target.length ?
                    target :
                    $("[name=" + this.hash.slice(1) + "]");

                if (target.length) {
                    $("html,body").animate({
                            scrollTop: target.offset().top,
                        },
                        800
                    );

                    return false;
                }
            }
        });
    });

    /*

  

        |=================

  

        | CONTACT FORM

  

        |=================

  

        */

    $("#contactForm")
        .validator()
        .on("submit", function(event) {
            if (event.isDefaultPrevented()) {
                // handle the invalid form...

                formError();
            } else {
                // everything looks good!

                event.preventDefault();

                submitForm();
                $('#contactForm')[0].reset();
                alert("Message Submitted");
            }
        });

    function submitForm() {
        // Initiate Variables With Form Content

        var name = $("#name").val();

        var email = $("#email").val();

        var message = $("#message").val();

        $.ajax({
            type: "POST",

            url: "https://formspree.io/f/xoqppqzw",

            data: "name=" + name + "&email=" + email + "&message=" + message,
            
            success: function(text) {
               
                if (text == "success") {
                    formSuccess();
                } else {
                    formError();

                    document.getElementById("#contactForm").reset();
                }
            },
        });
    }

    function formSuccess() {        
        swal(
            "Message submitted",
            "I will contact you as soon as possible",
            "success"
        );

        $(":input").val("");

        $("textarea").val("");
    }

    function formError() {
        swal(
            "Did you fill in all the information correctly?",
            " * Your name is required \n * Valid Email is required \n * Your message is required",
            "error"
        );
    }

    jQuery(document).ready(function($) {
        //open popup

        $(".popupt-trigger").on("click", function(event) {
            event.preventDefault();

            $(".popupt").addClass("is-visible");
        });

        //close popup

        $(".popupt").on("click", function(event) {
            if (
                $(event.target).is(".popupt-close") ||
                $(event.target).is(".popupt")
            ) {
                event.preventDefault();

                $(this).removeClass("is-visible");
            }
        });

        //close popup when clicking the esc keyboard button

        $(document).keyup(function(event) {
            if (event.which == "27") {
                $(".popupt").removeClass("is-visible");
            }
        });
    });

    jQuery(document).ready(function($) {
        //open popup

        $(".popups-trigger").on("click", function(event) {
            event.preventDefault();

            $(".popups").addClass("is-visible");
        });

        //close popup

        $(".popups").on("click", function(event) {
            if (
                $(event.target).is(".popups-close") ||
                $(event.target).is(".popups")
            ) {
                event.preventDefault();

                $(this).removeClass("is-visible");
            }
        });

        //close popup when clicking the esc keyboard button

        $(document).keyup(function(event) {
            if (event.which == "27") {
                $(".popups").removeClass("is-visible");
            }
        });
    });
})(jQuery);