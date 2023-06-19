 ! function (e, t) {
	"use strict";
	window.XproLottie = new function () {
		var o            = this;
		this.hoverEvent  = function (e, t, o, n, i, a) {
			n.on(
				e,
				(function () {
					i[t]( o )
				})
			)
		}, this.hover    = function (e, t, n) {
			switch (e) {
				case"play":
					o.hoverEvent( "mouseover", "play", "", t, n ), o.hoverEvent( "mouseout", "pause", "", t, n );
					break;
				case"pause":
					o.hoverEvent( "mouseover", "pause", "", t, n, 1 ), o.hoverEvent( "mouseout", "play", "", t, n, n.isPaused );
					break;
				case"reverse":
					o.hoverEvent( "mouseover", "setDirection", -1, t, n ), o.hoverEvent( "mouseout", "setDirection", 1, t, n )
			}
		}, this.onScroll = function (t, o) {
			e.waypoint(
				t,
				(function () {
					o.play()
				})
			)
		}, this.lottie   = function (e) {
			var t = e.find( ".xpro_lottie" ), n = t.attr( "id" ), i = t.data( "speed" ), a = t.data( "direction" ),
				r = t.data( "action" );
			o[n]  = bodymovin.loadAnimation(
				{
					container: t[0],
					path: t.data( "path" ),
					autoplay: t.data( "autoplay" ),
					loop: t.data( "loop" ) || ! 1,
					renderer: t.data( "renderer" )
				}
			), "" !== i && o[n].setSpeed( i ), "" !== a && o[n].setDirection( -1 ), "" !== r && o.hover( r, t, o[n] ), "" !== t.data( "on-scroll" ) && o.onScroll( t, o[n] )
		}, this.init     = function () {
			e.hooks.addAction( "frontend/element_ready/xpro-lottie.default", o.lottie )
		}, t.on( "elementor/frontend/init", this.init )
	}
}(elementorFrontend, elementorFrontend.elements.$window);
