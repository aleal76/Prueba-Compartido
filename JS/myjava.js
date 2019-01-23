
	$(document).ready( function(){
		//alert("Ya estÃ¡ cargado");
		//$("h2").hide();
		//$("h1").hide();
		//$("h2").slideDown();
		//$("h2").fadeOut(3000);
		//$("h2").fadeToggle();
		//$("h1").slideUp();

		//$("h1").animate({"margin-left": "150px"}, 1000);
		//$("body").html("<h3>NuevoH3 por soft<h3>");
		var i;
		for(i=1;i<10;i++){
			$("body").append("<h3>Nuevo "+i+" H3 por soft</h3>");
		}
		//$("h3").slideUp(3000);
		$("h3").hide();
		$("h3").slideDown(3000);

		$("h3").click(function()
			{
  			$(this).fadeOut();
  			});
		$("h1,h2").hover( function(){
  			//$(this).css({"color": "red"}, 0);
  			$(this).animate({"marginLeft": "3em"}, 1000);
			}, function(){
  			//$(this).css({"color": "blue"}, 500);
			$(this).animate({"marginLeft": ""}, 1000);
			});

		//$("#colorido").hide();
  		//$("#descolorido").fadeIn();
		
});

