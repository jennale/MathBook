var hori = $(window).width();
var vert = $(window).height();
/* --- MURAL OBJECTS --- */
var mural = $("#mural");
var loader = $("#loader");
var muralloader = $("#mural,#loader");
var logo = $("#logo");
var snail = $("#mural .animSnail");
var squid = $("#mural .animBlueSquid");
var potato = $("#mural .animPotato");
var chicky = $("#mural .animChicky");
var octo = $("#mural .animOctopus");
var clouds = $("#mural .clouds");
var waterfall = $("#bgWaterfall");
var forest = $("#bgForest");
var sun = $("#bgSun");
var land = $("#bgLand2");
var foot = $("#footer");
/* --- CHAPTER ICON OBJECTS --- */
var octo2 = $("#chapter1 .animOctopus");
var squid2 = $("#chapter2 .animBlueSquid");
var captain2 = $("#chapter3 .animCaptain");
var snail2 = $("#chapter4 .animSnail");
var potato2 = $("#chapter5 .animPotato");
var bgLand2,bgWater;
var tl, tl2, tl3, tl4, tl5;

$(window).load(function() {
    getProportions();
    placesPeople();
    mural.prepend($('<div class=\"navmenu accent-font\">').load("menus/options.html"));
    foot.load("menus/footer.html");
    TweenLite.to(loader, 0.5, {
        autoAlpha: 0,
        delay: 1.0
    });
});
var mobile = 1;
$(document).ready(function() {
    $('#mural').bind('contextmenu', function() {
        return false;
    }).on('dragstart', function(event) {
        event.preventDefault();
    });
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // loopClouds();  //Turned off cause makes things slow... :'( 
        mobile = 0;
    }
    $(window).resize(function() {
        getProportions();
        placesPeople();
    });
    animate(octo2, -32, 1.4, 1);
    animate(captain2, -20, 1.4, 3);
    animate(snail2, 15, 1.4, 4);
    animate(squid2, 23, 1.3, 2);
    animate(potato2, -25, 1.8, 5);
    logo.click(function() {
        tl.play().restart();
        tl2.play().restart();
        tl3.play().restart();
        tl4.play().restart();
        tl5.play().restart();
    });
});

function placesPeople() {
    waterfall.css({
        'bottom': bgLand2 - bgLand2 / 6,
        'left': hori * 0.05
    });
    forest.css({
        'bottom': bgLand2 - bgLand2 / 6
    });
    sun.css({
        'bottom': bgLand2 - bgLand2 / 6
    });
    squid.css({
        'bottom': bgLand2 - bgLand2 / 4 + "px"
    });
    snail.css({
        'bottom': bgLand2 - bgLand2 / 3 + "px"
    });
    tl = animate(snail, 15, 1.4);
    tl2 = animate(squid, 23, 1.3);
    tl3 = animate(potato, -25, 1.8);
    tl4 = animate(chicky, -17, 1.6);
    tl5 = animate(octo, -32, 1.4);
}

function getProportions() {
    hori = $(window).width();
    vert = $(window).height();
    muralloader.css("height", vert - $("#slogan").height());
    muralloader.css("min-height",logo.height()+70);
    bgWater = waterfall.height();
    bgLand2 = land.height();
    resizeAnim(snail, 9, 14, 1);
    resizeAnim(squid, 10, 23, 1);
    resizeAnim(potato, 8, 25, 0);
    resizeAnim(chicky, 7, 16, 0);
    resizeAnim(octo, 5, 32, 0);
    
}

function resizeAnim(anima, bgProportion, numFrames, roundTF) {
    var toon = anima;
    var ratio;
    if (roundTF === 1){
     ratio = Math.round(toon.height() / toon.width() * 10) / 10;
    }
    else { 
     ratio = Math.round(toon.height() / toon.width());
    }
    var proportion = Math.round(hori / bgProportion);
    var height = Math.round(proportion * ratio);
    toon.css({
        'width': proportion,
        'height': height,
        'background-size': proportion + "px " + height * numFrames + "px"
    });
}

function animate(anima, numFrames, frameRate) {
    var toon = anima;
    var spriteHeight = toon.height();
    var steppedEase = new SteppedEase(numFrames);
    var tl = new TimelineLite({
        repeat: 0,
        repeatDelay: 2
    });
    tl.pause();
    var tween = TweenLite.fromTo(toon, frameRate, {
        backgroundPosition: '0px 0px'
    }, {
        backgroundPosition: '0px ' + numFrames * spriteHeight + 'px',
        ease: steppedEase
    });
    tl.add(tween);
    if (mobile === 0) {
        toon.mouseenter(function() {
            tl.restart();
            tl.play();
        }).mouseleave(function() {
            tl.restart();
            tl.stop();
        });
    }
    else {
        toon.on("tap", function() {
            tl.play();
            tl.restart();
        });
    }
    return tl;
}

function animate(anima, numFrames, frameRate, sectionChapter) {
    var toon = anima;
    var spriteHeight = toon.height();
    var steppedEase = new SteppedEase(numFrames);
    var tl = new TimelineLite({
        repeat: 0,
        repeatDelay: 2
    });
    var button = $("#chapter" + sectionChapter + " .btn");
    tl.pause();
    var tween = TweenLite.fromTo(toon, frameRate, {
        backgroundPosition: '0px 0px'
    }, {
        backgroundPosition: '0px ' + numFrames * spriteHeight + 'px',
        ease: steppedEase
    });
    tl.add(tween);
    if (mobile === 0) {
        toon.mouseenter(function() {
            tl.restart();
            tl.play();
        }).mouseleave(function() {
            tl.restart();
            tl.stop();
        });
        button.mouseenter(function() {
            tl.restart();
            tl.play();
        }).mouseleave(function() {
            tl.restart();
            tl.stop();
        });
    }
    else {
        toon.on("tap", function() {
            tl.play();
            tl.restart();
        });
        button.on("tap", function() {
            tl.play();
            tl.restart();
        });
    }
    return tl;
}

function loopClouds() {
    var cloud = clouds;
    clouds.first().css("left", -hori);
    TweenMax.to(cloud, 50, {
        left: vert,
        repeat: -1,
        yoyo: true,
        ease: Linear.easeNone
    });
}