var $ = require('./modules/jquery.js');
var onscroll = require('./modules/onscroll.js');

$(document).ready(function(){
	onscroll();
	function showModal(PhotoElem) {

		var modal = $(document.createElement('div'));
		var photoPath = $(PhotoElem).attr('href');
    var img = $(document.createElement('img'));

    $(img).addClass('modal-img');
    $(img).attr('src', photoPath);

    $('.modal').addClass('modal-animate');
    $('.modal').append(img);

    $('body').css('overflow', 'hidden');

    setTimeout(function(){

      $('.modal-close, .modal-author-cont, .modal-buttons' ).addClass('fixed-buttons');
      if($(window).width() > 1024){

        $('.modal-buttons').css('padding-right', '16px');
      
      } 
    }, 400);


    $('.modal-close').on('click', function(){
    	hideModal();
    });
  }

  function hideModal() {

    $('.modal').removeClass('modal-animate');
    $('.modal-close, .modal-author-cont, .modal-buttons' ).removeClass('fixed-buttons');
    $('.modal-buttons').css('padding-right', '0px');
    setTimeout(function(){
      $('.modal').find($('.modal-img')).remove();
    }, 300);
    if($('.gallery').length){
    	$('body').css('overflow', 'hidden');
    }else{ 
    	$('body').css('overflow', 'auto');
  	}

  }

  function ShowGallery(arr){
    $('.gallery').show();
      setTimeout(function(){
        $('.gallery-container').addClass('modal-animate');
      }, 0);
    $('body').css('overflow', 'hidden');
    $('.gallery-close').on('click', function(){
    	hideGallery();
    });
  }
  function hideGallery(){
    $('.gallery-container').removeClass('modal-animate');
      setTimeout(function(){
        $('.gallery').css('display', 'none');
      }, 500);
  	 $('body').css('overflow', 'auto');
  }
   
  $('.photo-link-js').on('click', function(event){
    event.preventDefault();
    showModal(this);
    $('.modal-img').on('click', function(){
    	hideModal();
    });
	});
     

  $('.set-js').on('click', function(){
    ShowGallery();
    $('.gallery').on('click', function(event){
    	if($(event.target).hasClass('gallery')){
    			hideGallery();		
    	}else if($(event.target).hasClass('gallery-item')){
    		showModal($(event.target));
    		$('.modal-img').on('click', function(){
    			hideModal();
    		});
    	}
    });   
  });



});
