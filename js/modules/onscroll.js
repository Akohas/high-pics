module.exports = function(){

	var header = $('.header-fixed');



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

 	if(scrolled > 200){
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