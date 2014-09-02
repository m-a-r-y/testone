$(document).ready(function(){
	$('button').on('click', function(){
		$.ajax({
	  		url: "http://domains.bootname.com/",
	  		dataType:"jasonp",
	  		beforeSend: function() {
			$('#pendingR').append("Checking domain availability").show();
		  	}
	  	})
			.done(function(data) {
				$('#pendingR').hide();
	  			if (data === "#domainname") {
	  				$('#trueR').append("This domain is available").css({"text-color": "green"}).show();
	  			} else {
	  				$('#falseR').append("This domain is not available").css({"text-color": "red"}).show();
	  		};
		});
	});
});
