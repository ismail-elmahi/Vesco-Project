 $(document).ready(function(){
	$('.carousel').carousel({interval:5000});

	$("body").niceScroll({
cursorcolor:"#d9534f",
cursorwidth:"10px"
});


// Caching the scroll top element

var scrollButton=$("#scroll-top");
$(window).scroll(function()
{
	$(this).scrollTop()>=700 ? scrollButton.show():scrollButton.hide();
	});

//Click On Button to Scroll Top

scrollButton.click(function()
{
	$("html,body").animate({scrollTop : 0 }, 600);

});


});	

 
	
//Loading Screen
$(window).on('load',function()
{
	$(".loading-overlay .sk-fading-circle").fadeOut(2000,function()
		{
			$(this).parent().fadeOut(2000);
		});
});




