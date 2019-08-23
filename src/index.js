// import {ProductBundles} from "./modules/ProductBundles";
import './styles/main.scss';
import loadSVGs from './modules/svg-replace';
import 'popper.js';
import 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  loadSVGs();
  tallestProductBox();
});

headerContactHours();
videoOverlayPlay();
percentOffBubble();
yearsModal();

function videoOverlayPlay() {
	window._wq = window._wq || [];
	_wq.push({ id: 'zwflowymel', onReady: function(video) {
		jQuery('#play-button-overlay-zwflowymel').on('click', function() {
			jQuery(this).fadeOut(500);
		 	video.play();
		});
	}});

}

function percentOffBubble() {
	$('.percent-off').each(function() {
		if($(this).attr('data-total-savings-amount') == 0) {
			$(this).hide();
		}
	});
}

function tallestProductBox() {
	var productBoxesHeights = $('.product-box').map(function() {
    	return $(this).height();
  	}).get();
  	var tallestHeight = Math.max.apply(null, productBoxesHeights);
  	$('.product-box').height(tallestHeight);
}

function yearsModal() {
	$.ajax({ 
	    type: 'GET', 
	    url: 'https://www.algaecal.com/wp-json/acf/v3/options/options', 
	    dataType: 'json',
	    success: function (data) { 
	    	var yearsVal = data['acf']['7yr_full_copy'];
	    	if(yearsVal != '') {
	    		 $('#guarantee .modal-body-wrapper').append($('<p>'), yearsVal);
	    	}
	    },
	    error: function() {
			$('#guarantee .modal-body-wrapper').append($('<p>'), '<strong>There was an error loading this information. <br>Please contact us below.<br><br></strong>');
		}

	});
}

function headerContactHours() {
	$('.speak-to-our-bone-specialists').hide();
	$.ajax({ 
	    type: 'GET', 
	    url: 'https://www.algaecal.com/wp-json/acf/v3/options/options', 
	    dataType: 'json',
	    success: function (data) { 
	    	var callCenter = data['acf']['office_hours'];
	    	var currentDay = new Date().getDay();
	    	var callCenterDay = callCenter[currentDay];
	    	var callCenterStart = callCenterDay['starting_time'];
	    	var callCenterClose = callCenterDay['closing_time'];
	    	var currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	    	var currentTime = new Date(Date.now());
			var currentTimeFormatted = currentTime.getHours() + "" + currentTime.getMinutes();

	    	if(currentTimeFormatted < callCenterClose && currentTimeFormatted > callCenterStart) {
	    		// open
	    		$('.speak-to-our-bone-specialists').fadeIn(500);
	    	} else {
	    		// closed
	    	}
	    },
	    error: function() {
			console.log("There was an error with headerContactHours");
		}

	});
}