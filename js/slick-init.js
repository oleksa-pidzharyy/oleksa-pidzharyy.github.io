$(document).ready(function(){
	$('.slider').slick({
        autoplay:false,
        autoplaySpeed:3000,
		arrows:true,
		dots:false,
        pauseOnDotsHover:true,
		slidesToShow:1,
		speed:350,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					arrows:true,
				}
			},
			{
				breakpoint: 640,
				settings: {
                    arrows:true,
				}
			}
		]
	});

	// $('#sl2').slick({
 //        autoplay:false,
 //        autoplaySpeed:3000,
	// 	arrows:true,
	// 	dots:true,
 //        pauseOnDotsHover:true,
	// 	slidesToShow:1,
	// 	speed:350,
	// 	responsive:[
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				arrows:false,
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 640,
	// 			settings: {
 //                    arrows:false,
	// 			}
	// 		}
	// 	]
	// });
});

