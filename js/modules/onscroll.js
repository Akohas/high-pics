module.exports = function(){
	var header = $('.header');

	alert();

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

 	console.log(123);

 	if( scrolled > 300){
 		(!header.hassClass('state-fix') ? header.addClass('state-fix') : return);
 		headerAnimate();
 	}else{
 		header.removeClass('state-fix');
 	}

}