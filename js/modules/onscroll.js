module.exports = function(){

	var header = $('.header');



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



 	if( scrolled > 300){
 		 header.addClass('fixed');		
 	}else{
 		header.removeClass('fixed');
 	}
}

}