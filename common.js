// Menu
$(function(){
    $open=false;
    
	function menuMb() {
		if($open==false){
			$open=true;
            $('#btn-menu').addClass('is-open');
            $(".menu").addClass('is-open');
		}else{
			$open=false;
            $('#btn-menu').removeClass('is-open');
            $(".menu").removeClass('is-open');
		}
	}
    
	$('#btn-menu').on('click',function() {
		menuMb();
	});
    
    $('.menu-wrap a').on('click',function() {
		menuMb();
	});
});

// Pagetop
$(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#pagetop').fadeIn();
        } else {
            $('#pagetop').fadeOut();
        }
    });

    $('#pagetop').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 200);
        return false;
    });	
});