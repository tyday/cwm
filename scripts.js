window.onscroll = function() {scrollFunction()};


function scrollFunction(){
    if (document.body.scrollTop > 80 ||
    document.documentElement.scrollTop > 80){
        document.getElementById("headerID").style.height = "50px";
        document.getElementById("logo").style.height = "50px";
        document.getElementById("nav-links").style.height = "40px";
        document.getElementById("nav-links").style.padding = "10px 0 0 0";
    }
    else{
        document.getElementById("headerID").style.height = "100px";
        document.getElementById("logo").style.height = "100px";
        document.getElementById("nav-links").style.height = "60px";
        document.getElementById("nav-links").style.padding = "40px 0 0 0";
    }
}