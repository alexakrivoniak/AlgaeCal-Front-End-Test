// import {ProductBundles} from "./modules/ProductBundles";
import './styles/main.scss';
import loadSVGs from './modules/svg-replace';
import 'popper.js';
import 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  loadSVGs();
  tallestProductBox();
});

videoOverlayPlay();
percentOffBubble();

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