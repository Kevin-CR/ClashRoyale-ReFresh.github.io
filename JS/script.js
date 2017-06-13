// alert("The header is resposive but the rest of the website is just to check whether everything can be online!")

$(document).ready(function(){

	$('#RF-logo').addClass('spin')

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



$(document).ready(function(){

	$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();

		if(scrollPos >= 0) {
			$("header").addClass('fixed');
		} else {
			$("header").removeClass('fixed');
		}
	})	

});




$(document).ready(function(){

	$('#21').click(function(){
  	    $('#cir').animate({left: '631px'}, 300)
    })

    $('#31').click(function(){
  	    $('#cir').animate({left: '827.6px'}, 300)
    })

    $('#12').click(function(){
  	    $('#cir').animate({left: '435px'}, 300)
    })

    function select1() {
	    $('.main-text').hide();
	    $('#11').slideDown(800);
    }

    function select2() {
	    $('.main-text').hide();
	    $('#22').slideDown(800);
    }

	function select3() {
		$('.main-text').hide();
		$('#33').slideDown(800);
	};

})

	$('#21').click(function(){
  	    $('#cir').animate({left: '631px'}, 300)
    })

    $('#31').click(function(){
  	    $('#cir').animate({left: '827.6px'}, 300)
    })

    $('#12').click(function(){
  	    $('#cir').animate({left: '435px'}, 300)
    })

    function select1() {
	    $('.main-text').hide();
	    $('#11').slideDown(800);
    }

    function select2() {
	    $('.main-text').hide();
	    $('#22').slideDown(800);
    }

	function select3() {
		$('.main-text').hide();
		$('#33').slideDown(800);
	};

    $(function () {

  		setTimeout(function() {
  			$('.flew').removeClass('hide')
  		}, 500);

  	})








