function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}

function navAnimation() {
    var navBar = document.querySelector("nav")
    navBar.addEventListener("mouseenter", function() {
        let tl = gsap.timeline()
        tl.to("#nav-bottom",{
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration:0.1
        })
        tl.to(".nav-part2 h5 span", {
            y:0,
            stagger:{
                amount: 0.5
            }
        })
    })
    navBar.addEventListener("mouseleave", function() {
        let tl = gsap.timeline()
    
        tl.to(".nav-part2 h5 span", {
            y:25,
            stagger:{
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}

function page2Animation() {
    var relem = document.querySelectorAll(".right-elem")

    relem.forEach(function(e){
        e.addEventListener("mouseenter", function(){
            gsap.to(e.childNodes[3], {
               opacity: 1,
               scale: 1
            })
        })
        e.addEventListener("mouseleave", function(){
            gsap.to(e.childNodes[3], {
               opacity: 0,
               scale: 0
            })
        })
        e.addEventListener("mousemove", function(dets){
            gsap.to(e.childNodes[3], {
                x: dets.x - e.getBoundingClientRect().x-50,
                y: dets.y - e.getBoundingClientRect().y-150
            })
        })
    })
}

function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center")
    var vdo = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function(){
       vdo.play()
        gsap.to(vdo, {
           transform: "scaleX(1) scaleY(1)",
           opacity: 1,
           borderRadius: 0
        })
    })

    vdo.addEventListener("click", function(){
        vdo.pause()
        gsap.to(vdo, {
           transform: "scaleX(0.7) scaleY(1)",
           opacity: 0,
          borderRadius: "30px"
        })
    })

    
    var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function(elem) {
        elem.addEventListener("mouseenter", function(){
           elem.childNodes[3].style.opacity = 1
           elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function(){
           elem.childNodes[3].style.opacity = 0
           elem.childNodes[3].load()
        })
    })
}


function page10Animations() {
    gsap.from("#btm10-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm10-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
    gsap.from("#btm10-part3 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm10-part3",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
    gsap.from("#btm10-part4 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm10-part4",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
} 


locomotiveAnimation()

navAnimation()

page2Animation()

page3VideoAnimation()

page10Animations()

loadingAnimation()
