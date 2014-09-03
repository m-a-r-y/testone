$(document).ready(function(){
	$('form').on('submit', function(){
		$('#pendingR').append("Loading...").show();
		var domain = $("#domain").val();
		$.ajax("http://domains.bootname.co/api/v1/domain/" + domain, {
	  		dataType: "jasonp",
	  		success: function(data) {
				$('#pendingR').hide();
				var result = data[0];
				if (result.available) {
	  				$('#trueR').append("This domain is available").css({"text-color": "green"}).show();
	  			} else {
	  				$('#falseR').append("This domain is not available").css({"text-color": "red"}).show();
	  			};	
			}
		});
		return false;
	});
});
