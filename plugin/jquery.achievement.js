/**
 *  Achievement
 *
 *	Copyright (c) 2010 Knewton
 *	Dual licensed under:
 *		MIT: http://www.opensource.org/licenses/mit-license.php
 *		GPLv3: http://www.opensource.org/licenses/gpl-3.0.html
 */

/*global isValid, KOI, Class, window, jQuery */

/*jslint white: true, browser: true, onevar: true, undef: true, eqeqeq: true, bitwise: true, regexp: false, strict: true, newcap: true, immed: true, maxerr: 50, indent: 4 */

(function ($) {

	"use strict";

	//------------------------------
	//
	//	Constants
	//
	//------------------------------
	
	//------------------------------
	//
	//	Property Declaration
	//
	//------------------------------
	
		/**
		 *	The achievement pane.
		 */
    var pane = $(
			"<div id='achievement-pane'>" +
				"<div id='achievement-header' class='achievement-backdrop'></div>" +
				"<div id='achievement-body' class='achievement-backdrop'></div>" +
				"<div id='achievement-footer' class='achievement-backdrop'></div>" + 
				"<div id='achievement-content'></div>" +
            "</div>"
		),
		
		/**
		 *	The plugin.
		 */
		_ = {
            /**
             *	The decay timeout.
             */
            decay_timeout: 3e3,
            
            /**
             *	The fade timeout.
             */
            fade_timeout: 1e3
        },
			
		//------------------------------
		//  State flags
		//------------------------------
		
		/**
		 *	If the achievement pane is active.
		 */
		active = false;
	
	//------------------------------
	//
	//	Internal Methods
	//
	//------------------------------

	//------------------------------
	//
	//	Plugin Definition
	//
	//------------------------------
	
	$.extend(_, {
		/**
		 *	Activate the achievement pane.
		 */
		activate: function (content) {
			if (active) {
				return;
			}

            $("#achievement-content", pane).html(content);
			
			active = true;
			
			pane.show();
			
			setTimeout(function () {
				_.deactivate();
			}, _.decay_timeout);
		},
		
		/**
		 *	Deactivate the pane.
		 */
		deactivate: function () {
			if (!active) {
				return;
			}
			
			active = false;
			
			pane.fadeOut(_.fade_timeout, "linear");
		}
	});
	
	//------------------------------
	//
	//	Event Bindings
	//
	//------------------------------
	
	//------------------------------
	//
	//	Startup Code
	//
	//------------------------------
	
	//------------------------------
	//  Destroy config
	//------------------------------
	
    $.achievement = _;
	
	//------------------------------
	//  Plugin ready
	//------------------------------
	
	$(function () {
		pane.appendTo("body");
	});
		
}(jQuery));
