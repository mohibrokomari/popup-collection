$(document).ready(function() {

/* Popup Menu One------------
------------------------------*/
  $('.popup-btn').click(function(e) {
    $('.popup-wrap').fadeIn(250);
    $('.popup-box').removeClass('transform-out').addClass('transform-in');

    e.preventDefault();
  });

  $('.popup-close').click(function(e) {
    $('.popup-wrap').fadeOut(500);
    $('.popup-box').removeClass('transform-in').addClass('transform-out');

    e.preventDefault();
  });


/* Popup Menu Two------------
------------------------------*/
  	//open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });

/* Popup Menu Three------------
------------------------------*/
  $('.popup-button-tree').on('mouseenter', function(){
    $('.wrap, a').toggleClass('active');
  });

  $('.popup3-close').on('click', function(){
    $('.wrap, a').removeClass('active');
    
  });


/* Popup Menu Four------------
------------------------------*/
  $(document).scroll(function() {
  var scroll = $(this).scrollTop();
  if (scroll >= 150) {
    $("#popUp").css("margin-left", "-425px");
    $("#plus").css("margin-left", "0px");
  }
});

$("#plus").click(function() {
  $("#popUp").css("margin-left", "0px");
  $("#plus").css("margin-left", "-425px");
});

$("#close").click(function() {
  $("#popUp").css("margin-left", "-425px");
  $("#plus").css("margin-left", "0px");
});
});