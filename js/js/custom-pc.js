$('html').css("overflow-y", "hidden");
$('#content').addClass("col-lg-8 col-md-8 col-sm-12 col-xs-12");
$('#breadcrumb-bar').addClass("col-lg-8 col-md-8 col-sm-12 col-xs-12");
$('#button-toggle').addClass("hidden-lg hidden-md");
$(window).resize(function() {
    affixSidebar();
    sidebarHeight();
    toggler();
    if (toggle) {
        if (screen()) slideOut();
    }
});
$(window).scroll(function() {
    affixSidebar();
    sidebarHeight();
    affixChapter();
    if (cbar.css("position") == "fixed") closeMenu();
    if (!toggle && (togl.css("right") == "0px" || togl.css("right") == 0)) togl.css("right", -togl.innerWidth() * 0.7 + "px");
});
sbar.click(function() {
    closeMenu();
});
$('#onClick').click(function() {
    closeMenu();
});
togl.hover(function() {
    if (!toggle) togl.css("right", "0px");
}, function() {
    if (!toggle) togl.css("right", -togl.innerWidth() * 0.7 + "px");
});
affixSidebar();
sidebarHeight();