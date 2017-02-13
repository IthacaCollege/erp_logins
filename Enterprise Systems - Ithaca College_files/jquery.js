/*
Source: http://www.seodenver.com/simple-vertical-align-plugin-for-jquery/
Usage: $('#example p').vAlign();

*/

(function ($) {
// VERTICALLY ALIGN FUNCTION
$.fn.vAlign = function() {
	return this.each(function(i){
	var ah = $(this).height();
	var ph = $(this).parent().height();
	var mh = Math.ceil((ph-ah) / 2);
	$(this).css('margin-top', mh);
	});
};
})(jQuery);

jQuery(function($){
		$('.valign').vAlign();
});


(function ($) {
// VERTICALLY ALIGN FUNCTION - PADDING ALT
$.fn.vAlignPad = function() {
	return this.each(function(i){
	var ah = $(this).height();
	var ph = $(this).parent().height();
	var mh = Math.ceil((ph-ah) / 2);
	$(this).css('padding-top', mh);
	});
};
})(jQuery);


jQuery(function($){
		$('.valign').vAlign();
		$('.valignpad').vAlignPad();
});