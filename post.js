function openNav() {
    document.getElementById("myTopnav").style.left = "0"
}
function closeNav() {
    document.getElementById("myTopnav").style.left = "-250px"
}
function menuoverlayOn() {
    document.getElementById("menuoverlay").style.display = "block"
}
function menuoverlayOff() {
    document.getElementById("menuoverlay").style.display = "none"
}
function addClassBody() {
    var t, e, a;
    t = document.body,
    e = "flow",
    a = t.className.split(" "),
    -1 == a.indexOf(e) && (t.className += " " + e)
}
function removeClassBody() {
    var t = document.body;
    t.className = t.className.replace(/\bflow\b/g, "")
}
function jump(t) {
    var e = document.getElementById(t).offsetTop;
    window.scrollTo(0, e)
}
function scrollFunction() {
    document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ? document.getElementById("backToTop").style.display = "block" : document.getElementById("backToTop").style.display = "none"
}
function topFunction() {
    document.body.scrollTop = 0,
    document.documentElement.scrollTop = 0
}
function videoPlay(t) {
    return t.innerHTML = t.innerHTML.replace("<!--", "").replace("-->", ""),
    t.onclick = null,
    !1
}
for (var btns = document.getElementsByClassName("dropbtn"), i = 0; i < btns.length; i++)
    btns[i].addEventListener("click", function() {
        var t = document.getElementsByClassName("active");
        t.length > 0 && (t[0].className = t[0].className.replace(" active", "")),
        this.className += " active"
    });
window.onclick = function(t) {
    if (!t.target.matches(".dropbtn")) {
        var e, a = document.getElementsByClassName("dropbtn");
        for (e = 0; e < a.length; e++) {
            var n = a[e];
            n.classList.contains("active") && n.classList.remove("active")
        }
    }
}
;
