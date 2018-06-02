window.onload = function () {
    var titlestyle = document.getElementById("bodytitle").style;

    setInterval(function() {
        var bannerheight = document.getElementById("banner").clientHeight;
        titlestyle.cssText = "margin-top: " + (bannerheight + 120) + "px;";
    }, 100);

}
