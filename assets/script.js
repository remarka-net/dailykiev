 
 var swiper = new Swiper('.swiper-container', {
      slidesPerView: '2',
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
    });

//\/\/\/\\\/\/\/\/\/\/\/\/\//\/Main Menu animation/\/\/\\/\/\/\/\/\//\/\\/\/\/\/\\/\/\

      $(function() {
    $(".subheading").on("click",function() {
        $(".submenu").slideToggle(350);
    });
    });


		if ($( document ).width() > 864) {

        $(function(){
  $(".heading").children().hover(
      function(){
          $(this).not(".btn").css({'border-bottom' : 'solid #000080', "border-width": "2px"}); 
      },
      function(){
          $(this).not(".btn").css('border-bottom', 'none');
      }
  		);                             
			});
	};
	
	if($( document ).width() <= 864){
	$(function(){
			$(".heading").children().hover(
				function(){
					$(this).not(".btn").css({"background-color" : "#7D7D7D"})
				},
				function(){
					$(this).not("btn").css({"background-color" : "rgba(255,255,255,0.7)"});
				}
			);
	});
}

//==========================Main Menu========================================
jQuery(function($){
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".submenu"); // тут указываем ID элемента
    if (!div.is(e.target)// если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.hide(".submenu"); // скрываем его
    }
  });
});

//Mobile designed menu=============================================----]

$(function(){
		$("#sm_menu").on("click",function(){
			$(".heading").css({"margin-left": "0"});
		});
});


/*
$('.здесь_id_меню li').click(function(){
	$('здесь_Id_меню_или_во_что_оно_оборачивается').hide(300);
	*/

//--=========================Gallery----------------------------------

if(864 > $(window).width() < 1000) {
$(function(){
  $('#slider').height($('#slider').width()/3.1);

  $(window).resize(function(){
    $('#slider').height($('#slider').width()/3.1);
  });
});
}else if( $(window).width() <= 864){
	$(function(){
		$('#slider').height($('#slider').width()/1.5);
	
		$(window).resize(function(){
			$('#slider').height($('#slider').width()/1.5);
		});
	});
}else {
	$(function(){
		$('#slider').height($('#slider').width()/2.5);
	
		$(window).resize(function(){
			$('#slider').height($('#slider').width()/2.5);
		});
	});
}



if($(window).width() <= 864 ) {
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: '1',
		spaceBetween: 40,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		 navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
		}/*else if($(window).width() <= 864 )*/,
	});
}