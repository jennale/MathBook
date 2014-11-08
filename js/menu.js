$(window).load(function() {
    $("#" + section).parent().find("a").click();
    $("#panel" + section + " li:nth-child(" + (parseInt(subsection) + 1) + ")").addClass("active");
    $("#panel" + section).find('div').css("color", window.color);
    $('.toggler').css("background-color", window.color);
    $(".breadcrumb.style li:last-child a").css("color", window.color);
    $("#backtotop").css("color", window.color);
    sbar.prepend($("<div class=\"navmenu accent-font visible-xs visible-sm\">").load("menus/options.html"));
});