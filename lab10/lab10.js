"use strict";

$(function() {
	$('#hw').change(function() {
		
		var file = 'homeworks/'+$('#hw').val();
		// $.ajax({
		// 	'url': file,
		// 	'type': 'GET',
		// 	'success': ajaxSuccess,
		// 	'error': ajaxFailure
		// });
		$.get(file)
		.done(ajaxSuccess)
		.fail(ajaxFailure);
	});
});

function ajaxSuccess(data) {
	$('#output').val(data)+post();
}

function ajaxFailure(xhr, status, exception) {
  console.log(xhr, status, exception);
}
$(function post(){
	$.ajax({
		'url': file,
		'type': 'POST',
		'data':{"age":23,"place of  birth":"demkros"},
		'success': ajaxSuccess,
		'error': ajaxFailure
	});
	

	})



$.get('https://www.google.com/images/branding/product/ico/googleg_lodp.ico');
