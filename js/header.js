// Menu Navigation

// menuNav.addEventListener("click", function() {
//     console.log("menu clicked");
//     menuNav.classList.toggle("menuActive");
//     menuContent.classList.toggle("menuActive");
//     menuNav.innerText = "close";
// });
const header = document.querySelector(".header");
const menuNav = document.querySelector(".menuBtn");
const menuContent = document.querySelector(".menuBtnContent");
menuNav.addEventListener("click", navigation);

function navigation(e) {
    menuNav.classList.toggle("menuActive");
    menuContent.classList.toggle("menuActive");
    if (menuNav.classList.contains("menuActive")) {
        menuNav.innerText = "close";
    } else {
        menuNav.innerText = "menu";
    }
    e.preventDefault();
}

// header scroll effect

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $("header").removeClass("nav-down").addClass("nav-up");
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $("header").removeClass("nav-up").addClass("nav-down");
        }
    }

    lastScrollTop = st;
}