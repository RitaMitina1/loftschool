$().ready(function(){

  $('.hamburger').on('click', function(){
		$('#hamburger__active').slideToggle(function(){
			
			if(	$('#hamburger__active').css('visibility') == 'hidden'){
        // $(this).removeAttr('style');
        $('#hamburger__active').css({
          'visibility': 'visible',
          'display': 'flex',
          'justify-content': 'center',
          'align-items': 'center',
          'margin-left': '0px'
        });
    }
	});
	
 });

});