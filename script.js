/* ========================================
   REGISTER GSAP PLUGIN
======================================== */

gsap.registerPlugin(ScrollTrigger);


/* ========================================
   SELECT ELEMENTS
======================================== */

const navbar =
    document.querySelector(".navbar");

const eyebrow =
    document.querySelector(".eyebrow");

const heroTitle =
    document.querySelector(".hero-title");

const description =
    document.querySelector(".hero-description");

const stats =
    document.querySelectorAll(".stat");

const heroObject =
    document.querySelector(".hero-object");

const objectInner =
    document.querySelector(".object-inner");

const glow =
    document.querySelector(".glow");

const scrollIndicator =
    document.querySelector(".scroll-indicator");


/* ========================================
   PAGE LOAD ANIMATION
======================================== */

/*
    We use GSAP to create a premium
    entrance animation.

    The elements are initially moved
    slightly down and made transparent.
*/

gsap.set(navbar, {
    opacity: 0,
    y: -20
});

gsap.set(eyebrow, {
    opacity: 0,
    y: 25
});

gsap.set(heroTitle, {
    opacity: 0,
    y: 50
});

gsap.set(description, {
    opacity: 0,
    y: 30
});

gsap.set(stats, {
    opacity: 0,
    y: 30
});

gsap.set(scrollIndicator, {
    opacity: 0,
    y: 20
});

gsap.set(heroObject, {
    opacity: 0,
    scale: 0.65,
    rotation: -25
});

gsap.set(glow, {
    opacity: 0,
    scale: 0.5
});


/* ========================================
   INTRO TIMELINE
======================================== */

const intro =
    gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });


/* NAVBAR */

intro.to(navbar, {

    opacity: 1,

    y: 0,

    duration: 0.7

});


/* EYEBROW */

intro.to(eyebrow, {

    opacity: 1,

    y: 0,

    duration: 0.6

}, "-=0.35");


/* MAIN HEADING */

intro.to(heroTitle, {

    opacity: 1,

    y: 0,

    duration: 1

}, "-=0.3");


/* DESCRIPTION */

intro.to(description, {

    opacity: 1,

    y: 0,

    duration: 0.7

}, "-=0.5");


/* MAIN OBJECT */

intro.to(heroObject, {

    opacity: 1,

    scale: 1,

    rotation: 0,

    duration: 1.2,

    ease: "back.out(1.5)"

}, "-=0.8");


/* GLOW */

intro.to(glow, {

    opacity: 1,

    scale: 1,

    duration: 1

}, "-=1");


/* STATISTICS */

intro.to(stats, {

    opacity: 1,

    y: 0,

    duration: 0.6,

    stagger: 0.15

}, "-=0.5");


/* SCROLL INDICATOR */

intro.to(scrollIndicator, {

    opacity: 1,

    y: 0,

    duration: 0.5

}, "-=0.2");


/* ========================================
   SCROLL-DRIVEN OBJECT
======================================== */

/*
    CORE REQUIREMENT

    The object moves according
    to the user's scroll position.

    scrub: 1 makes the animation
    smoothly follow the scrollbar.
*/

gsap.to(heroObject, {

    x: -180,

    y: 260,

    rotation: 220,

    scale: 0.48,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});


/* ========================================
   INNER CIRCLE ROTATION
======================================== */

gsap.to(objectInner, {

    rotation: -360,

    scale: 0.72,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});


/* ========================================
   GLOW MOVEMENT
======================================== */

gsap.to(glow, {

    x: -100,

    y: 180,

    scale: 1.6,

    opacity: 0.2,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});


/* ========================================
   HEADING SCROLL
======================================== */

/*
    IMPORTANT:

    We DON'T reduce opacity here.

    This keeps the required headline
    visible while scrolling.
*/

gsap.to(heroTitle, {

    y: -120,

    scale: 0.92,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});


/* ========================================
   EYEBROW SCROLL
======================================== */

gsap.to(eyebrow, {

    y: -80,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "10% top",

        end: "40% top",

        scrub: 1

    }

});


/* ========================================
   DESCRIPTION SCROLL
======================================== */

gsap.to(description, {

    y: -100,

    opacity: 0,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "15% top",

        end: "50% top",

        scrub: 1

    }

});


/* ========================================
   STATISTICS SCROLL
======================================== */

gsap.to(stats, {

    y: -100,

    opacity: 0,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "20% top",

        end: "60% top",

        scrub: 1

    }

});


/* ========================================
   SCROLL INDICATOR
======================================== */

gsap.to(scrollIndicator, {

    opacity: 0,

    y: 30,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "5% top",

        end: "25% top",

        scrub: 1

    }

});


/* ========================================
   TEXT PARALLAX
======================================== */

gsap.to(".hero-text", {

    y: -50,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1.2

    }

});


/* ========================================
   REFRESH SCROLLTRIGGER
======================================== */

window.addEventListener(
    "load",
    () => {

        ScrollTrigger.refresh();

    }
);