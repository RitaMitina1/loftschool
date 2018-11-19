$().ready(function(){

  $('#hamburger').on('click', function(){
		$('.hamburger__active').slideToggle(10, function(){
			
			if($(this).css('display') == 'none'){
				$(this).removeAttr('style');
    }
	});
	
 });

});