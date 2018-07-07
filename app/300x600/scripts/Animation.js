var app = app || {};

app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();
    var scissors = document.getElementById('scissors');
    var notes = document.getElementById('notes');
    var crayons = document.getElementById('crayons');
    var pens = document.getElementById('pens');
    var books = document.getElementById('books');
    var txt1 = document.getElementById('txt1');
    var bag = document.getElementById('bag');
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
        tl1.from(bag, 1, {y: 200, ease: Cubic.easeOut},"-=.5")
            .from(books, 1, {rotation:40, x:20, y: 300, ease: Cubic.easeOut},"-=1")


            .from(pens, 1, {rotation:60, y: 300, ease: Cubic.easeOut},"-=1")
            .from(scissors, 1, {rotation:40, x:20, y: 300, ease: Cubic.easeOut},"-=.8")
            .from(notes, 1, {rotation:40, x:20, y: 300, ease: Cubic.easeOut},"-=.9")
            .from(crayons, 1, {rotation:60, x:100, y: 300, ease: Cubic.easeOut},"-=1")


            .from(txt1, 1, {y: -85, ease: Cubic.easeInOut})
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
