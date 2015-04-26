jQuery(document).ready(function($){
	
	$('#add-bet-btn').click(function(){
		$('#mod-add-bet').modal('show');
		//var t = $('#mod-add-bet');
		//t.show();
	});
	$('#mod-add-bet').on('show.bs.modal', function (e) {
		$(this).center();
	});
});
jQuery.fn.center = function () {
	this.css("position","absolute");
	this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
												$(window).scrollTop()) + "px");
	this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
												$(window).scrollLeft()) + "px");
	return this;
}