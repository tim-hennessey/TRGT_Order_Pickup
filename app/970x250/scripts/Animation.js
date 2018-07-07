var app = app || {};

app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();

    var txt1 = document.getElementById('txt1');

    var bag = document.getElementById('bag');
    var book = document.getElementById('book');
    var crayons = document.getElementById('crayons');
    var notes = document.getElementById('notes');
    var pens = document.getElementById('pens');
    var ruler = document.getElementById('ruler');
    var erasers = document.getElementById('erasers');
    // var img1 = document.getElementById('img1');

    var cta = document.getElementById('cta');
    var cta_txt = document.getElementById('cta_txt');
    var cta_txt_ovr = document.getElementById('cta_txt_ovr');
    var buttonExit = document.getElementById('button-exit');

	// --------------------------------------------------------------------------------------
	function initialize() {
		t.set(banner, {opacity:1});

        buttonExit.addEventListener('mouseover', function () {
            TweenMax.to(cta, .25, {backgroundColor: "#ffffff"});
            TweenMax.to(cta_txt_ovr, .25, {opacity:1});
        });

        buttonExit.addEventListener('mouseout', function () {
            TweenMax.to(cta, .25, {backgroundColor: "#cc0000"});
            TweenMax.to(cta_txt_ovr, .25, {opacity:0});
        });

	}
	// --------------------------------------------------------------------------------------
	function start() {
        tl1.from(bag, 1, {y: 250, ease: Cubic.easeOut})
            .from(book, 1, {y: 500, ease: Cubic.easeOut}, "-=.8")
            .from(crayons, 1, {y: 250, ease: Cubic.easeOut}, "-=1")
            .from(notes, 1, {y: 250, ease: Cubic.easeOut}, "-=1")
            .from(pens, 1, {y: 250, ease: Cubic.easeOut}, "-=.8")
            .from(ruler, 1, {y: 250, ease: Cubic.easeOut}, "-=.8")
            .from(erasers, 1, {y: 250, ease: Cubic.easeOut}, "-=.9")
            .from(txt1, 1, {y: -130, ease: Cubic.easeInOut});
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
