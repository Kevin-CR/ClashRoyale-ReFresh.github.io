alert("The header is resposive but the rest of the website is just to check whether everything can be online properly!")

$(document).ready(function(){

	$('li a').click(function(){

		$('li a').removeClass("active")
		$(this).addClass("active");

	})
})

