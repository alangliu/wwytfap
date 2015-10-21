$(".clickable").click(function() {
	var url = $(this).find("img").attr("src");
	var info = trade.filter(function(e) e.url == url);
	$('.bs-example-modal-sm').modal({});
});