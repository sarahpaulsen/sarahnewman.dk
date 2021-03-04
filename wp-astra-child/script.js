console.log("Astra Child Theme JS is running!");

document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM is ready!");
    initScrollToTop()
    initTypedJs()
});


// ---------- smooth scroll ---------- //

function initScrollToTop() {
    window.onscroll = function () {
        scrollFunction();
    };
}

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none";
    }
}

function scrollToTheTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ---------- typed.js ---------- //

function initTypedJs() {
    new Typed(".typed", {
        strings: ["Rasmus Cederdorff.", "a Freelancer.", "a Lecturer.", "a Web Developer.", "an App Developer.", "a Web Architect.", "a Teacher."],
        typeSpeed: 75,
        loop: true,
    });
};