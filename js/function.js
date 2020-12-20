var mybutton = document.getElementById("myBtn");

function scrollFunction() { document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? mybutton.style.display = "block" : mybutton.style.display = "none" }

function toggleDarkLight() {
    var e = document.getElementById("body"),
        t = e.className;
    e.className = "white-vertion black-bg" == t ? "dark-vertion black-bg" : "white-vertion black-bg";
    var o = document.getElementById("chnge");
    if ("dark-vertion black-bg" == document.body.classList) {
        var n = "Light Mode".bold();
        o.innerHTML = n
    } else {
        n = "Dark Mode".bold();
        o.innerHTML = n
    }
}
window.onscroll = function() { scrollFunction() }, $("#myBtn").click(function() { return $("html, body").animate({ scrollTop: 0 }, 800), !1 }), $(document).ready(function() { $("body").bind("cut copy paste", function(e) { e.preventDefault() }), $("body").on("contextmenu", function(e) { return !1 }) });
let darkMode = localStorage.getItem("dark-vertion");
const darkModeToggle = document.querySelector("#chnge"),
    enableDarkMode = () => {
        document.body.classList.add("dark-vertion"), document.body.classList.remove("white-vertion");
        var e = document.getElementById("chnge"),
            t = "Light Mode".bold();
        e.innerHTML = t, localStorage.setItem("dark-vertion", "enabled")
    },
    disableDarkMode = () => { document.body.classList.remove("dark-vertion"), localStorage.setItem("dark-vertion", null) };
"enabled" === darkMode && enableDarkMode(), darkModeToggle.addEventListener("click", () => { "enabled" !== (darkMode = localStorage.getItem("dark-vertion")) ? enableDarkMode(): (document.body.classList.remove("dark-vertion"), localStorage.setItem("dark-vertion", null)) });
var typed = new Typed(".type", { strings: ["Nawodya Jayalath", "Web Developer", "Flutter Developer"], typeSpeed: 100, backSpeed: 30, loop: !0 });
$(".toggle_btn").click(function() { $(this).toggleClass("active"), $(".mh-about .mh-about-inner p").toggleClass("active"), $(".mh-about .mh-about-inner .toggle_btn").remove(), document.getElementById("about_tag").style.marginTop = "40px" });