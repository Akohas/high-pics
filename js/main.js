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
    $('.modal').css('display', 'block');
    $('.modal').append(img);
    $('body').css('overflow', 'hidden');
    $('.header-fixed').addClass('hide-header');
    $('.modal-close').on('click', function(){
    	hideModal();
    });
  }

  function hideModal() {
    $('.modal').find($('.modal-img')).remove();
    $('.modal').css('display', 'none');
    if($('.gallery').length){
    	$('body').css('overflow', 'hidden');
    }else{ 
    	$('body').css('overflow', 'auto');
  	}
    $('.header-fixed').removeClass('hide-header');
  }
  function ShowGallery(arr){
    $('.gallery').css('display', 'block');
    $('body').css('overflow', 'hidden');
    $('.header-fixed').addClass('hide-header');
    $('.gallery-close').on('click', function(){
    	hideGallery();
    });
  }
  function hideGallery(){
  	 $('.gallery').find($('.gallery-item')).remove();
  	 $('.gallery').css('display', 'none');
  	 $('body').css('overflow', 'auto');
  	 $('.header-fixed').removeClass('hide-header');
  }
   
  $('.photo-link-js').on('click', function(event){
    event.preventDefault();
    showModal(this);
    $('.modal-img').on('click', function(){
    	hideModal();
    });
	});
     

  $('.set-js').on('click', function(){
    var photoArr = $(this).attr('data-arr');
    ShowGallery(photoArr);
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
