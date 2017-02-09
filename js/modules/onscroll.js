module.exports = function(){

	var header = $('.header-fixed');
	var width = $(window).width();
	var scrollForFixed;
	if(width > 940){
		scrollForFixed = 110;
	}else if(width < 940 && width > 768 ){
		scrollForFixed = 89;
	}else{
		scrollForFixed = 65;
	}


	headerOnScroll();

var scrollTimeOut;

 $(window).on('scroll', function(env){
	
	clearTimeout(scrollTimeOut);
	scrollTimeOut = setTimeout(function(){
		headerOnScroll();

	}, 100);	

});


function headerOnScroll(){
 	var scrolled = $(window).scrollTop();

 	if(scrolled > scrollForFixed){
 		header.addClass('header-top');
 		setTimeout(function(){
 			header.removeClass('header-top');
 			header.addClass('fixed');
 		}, 300);

 	}else{
 		header.removeClass('fixed');
 	}

}





}