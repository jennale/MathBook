/* ----------------- */
/* ---- MAIN JS ---- */
/* ----------------- */
var js = document.createElement("script"),
	head = document.getElementsByTagName('head')[0],
	link = document.createElement("link"),
    body = $('body'),
    sbar = $('#sidebar'),
    mask = $('#mask'),
    cbar = $('#chapter-menu'),
    anch = $('#stickyAnchor'),
    togl = $('.toggler'),
    sbox = $('#sidebar-box'),
    pos = "position",
    toggle = false,
    mobile = false;
var color = 'nothing';
js.type = "text/javascript";
$(document).ready(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	    link.rel = "stylesheet";
	    link.type = "text/css";
	    link.href = "css/mobile.css";
	    js.src = "js/custom-mobile.min.js";
	    body.on("swipeleft", function() {
	        slideIn();
	    });
	    body.on("swiperight", function() {
	        slideOut();
	    });
    }
    else js.src = "js/custom-pc.min.js";
    document.head.appendChild(link);
    document.body.appendChild(js);
    $('#chapters-inner').load("menus/chapters.html");
    sbar.load("menus/chapter" + chapter + ".html");
    sbar.on('hidden.bs.collapse', function() {
        sbar.find(".collapsed").find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus").removeClass("active-parent");
    });
    sbar.on('shown.bs.collapse', function() {
        sbar.find(".collapse.in").parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus").addClass(
            "active-parent");
    });
    $("#mural").prepend($('<div class=\"navmenu accent-font hidden-sm hidden-xs\">').load("menus/options.html"));
    $("#footer").load("menus/footer.html");
    $('#button-toggle').click(function() {
        if (toggle) slideOut();
        else slideIn();
    });
    mask.click(function() {
        slideOut();
    });

});
/**NICESCROLL**/
body.niceScroll({
    cursorcolor: "#CCC",
    cursorborder: "#CCC",
    touchbehaviour: true,
    cursoropacitymin: .9,
    cursorwidthmin: 10,
    cursorwidthmax: 30
});
sbar.niceScroll().hide();
mask.hide();
affixChapter();
toggler();
/* ----------------- */
/* --- FUNCTIONS --- */
/* ----------------- */
function affixSidebar() {
    if ($(window).scrollTop() > $('#mural').height() && $('html').innerWidth() > 991 - 15) {
        sbox.css(pos, "fixed");
        sbox.css("top", "50px");
    }
    else {
        sbox.css(pos, "relative");
        sbox.css("top", 0);
    }
}

function affixChapter() {
    if ($(window).scrollTop() > $('#mural').height()) {
        cbar.css(pos, "fixed");
        cbar.css("top", "0");
        anch.css("height", "50px");
    }
    else {
        cbar.css(pos, "relative");
        anch.css("height", 0 + "px");
    }
}

function sidebarHeight() {
    var mhgt, ihgt, stop, ftop, max = "max-height",
        temp;
    if ($('html').innerWidth() > 991 - 15) {
        mhgt = $('#mural').height();
        ihgt = $(window).innerHeight();
        stop = $(window).scrollTop();
        ftop = $('#footer').offset().top;
        if (stop < mhgt) sbar.css(max, (temp = ihgt - mhgt + stop - 90) + "px");
        else if (stop + ihgt > ftop) sbar.css(max, (temp = ftop - stop - 85) + "px");
        else sbar.css(max, (temp = ihgt - 90) + "px");
        if (temp > 0) sbar.show();
        else sbar.hide();
    }
}

function closeMenu() {
    if ($('#chapters').hasClass("in")) $("#main-menu-heading").find("a").click();
}

function slideIn() {
    if (!screen() || mobile) {
        toggle = true;
        sbar.show();
        body.addClass("slide");
        mask.fadeIn();
    }
}

function slideOut() {
    toggle = false;
    body.removeClass("slide");
    mask.fadeOut();
}

function screen() {
    if ($('html').innerWidth() < 991) return false;
    return true;
}

function toggler() {
    togl.css("top", $(window).innerHeight() * 0.8 - 50 + "px");
}