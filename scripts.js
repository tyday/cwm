window.onscroll = function() {scrollFunction()};


function scrollFunction(){
    if (document.body.scrollTop > 80 ||
    document.documentElement.scrollTop > 80){
        document.getElementById("headerID").style.height = "50px";
        document.getElementById("logo").style.height = "50px";
        document.getElementById("nav-links").style.height = "50px";
    }
}