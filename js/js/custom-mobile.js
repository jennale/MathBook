mobile = true;
sbar.css("height", "100%");
sbar.css("width", "85%");
sbar.css("right", "-100%");
sbar.css("position", "fixed");
sbar.css("margin", "0");
sbar.css("-webkit-transition", "all 0.3s");
sbar.css("-moz-transition", "all 0.3s");
sbar.css("-ms-transition", "all 0.3s");
sbar.css("-o-transition", "all 0.3s");
sbar.css("transition", "all 0.3s");
togl.css("width", "25px");
$(window).resize(function() {
    toggler();
});
$(window).scroll(function() {
    affixChapter();
    if (cbar.css("position") == "fixed") closeMenu();
});
$('#onClick').click(function() {
    closeMenu();
});