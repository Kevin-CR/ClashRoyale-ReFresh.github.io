// alert("The header is resposive but the rest of the website is just to check whether everything can be online!")

$(document).ready(function(){

	$('li a').click(function(){

		$('li a').removeClass("active");
		$(this).addClass("active");

	});
	
	$('#Re').click(function(){

		$(".clanName").toggleClass("clan-name-display");

	});

	$('#RF-secondLogo').click(function(){

		$(".clanName").toggleClass("clan-name-display");

	});

	$('#Fresh').click(function(){

		$(".clanName").toggleClass("clan-name-display");

	});
});

