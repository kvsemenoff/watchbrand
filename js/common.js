

$(document).ready(function(){
  var owl = $(".slider-db");

owl.owlCarousel({

        loop:true,//Зацикливаем слайдер
        nav:true, //Навигация включена
        autoplay:false,//автозапуск
        smartSpeed:1000,//Время движения
        margin:0,    
        navText:['<span class="db-left"></span>','<span class="db-right"></span>'],
        responsive:{
          0:{
            items:1
        },       
        1000:{
            items:1
        },
        1248:{
            items:1
        }
    }

});

    $('.az-select').each(function(){
        var select = $(this);    
        var option = select.find('select option');
        var str = '<div class="az-options">';
        select.find('option').each(function(){
            str+= '<div data-val="' +$(this).val() + '">' + $(this).text() + '</div>'
        });
        str+= '</div>';
        select.html(select.html() + str);

        select.find('select').mousedown(function(){
            return false;
        });
        select.mouseup(function(){
            select.find('select').focus();
        });
        select.find('.az-options div[data-val]').click(function(){
            select.find('select').val($(this).attr('data-val'));
        });
        select.find('select').focusout(function(){
            if(!select.is(':hover')){
                select.find('.az-options').slideUp(0);
                select.removeClass('az-select-focus');
            }
        });
    });

    $(".az-select").click(function(){
        $(this).find('.az-options').slideToggle(0);
        $(this).toggleClass('az-select-focus');
    });

/* Таймер
=====================================*/
var count = 8;
var minutes = 29;
var hours = 00;

var end = 0;

if (count < 10) {
    $('.dd-sec').each(function(){
       $(this).html('0'+count); 
   });
}
else {
  $('.dd-sec').each(function(){
   $(this).html(count); 
});
}

if (minutes < 10) {
  $('.dd-min').each(function(){
   $(this).html('0'+minutes); 
});
}
else {
   $('.dd-min').each(function(){
       $(this).html(minutes); 
   });
}

if (hours < 10) {
    $('.dd-hours').each(function(){
       $(this).html('0'+hours);
   });
}
else {
    $('.dd-hours').each(function(){
       $(this).html(hours);
   });
}

    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer()
    {
        count = count - 1;
        if (count < 10) {
            $('.dd-sec').each(function(){
               $(this).html('0'+count); 
           });
        }
        else {
          $('.dd-sec').each(function(){
           $(this).html(count); 
       });
      }
      if (count == 0) {
        minutes = minutes - 1;
        if (minutes < 10 && minutes >= 0) {
            $('.dd-min').each(function(){
               $(this).html('0'+minutes); 
           });
        }
        if (minutes > 10) {
            $('.dd-min').each(function(){
               $(this).html(minutes); 
           });
        }
        if (minutes < 0) {
            hours = hours - 1;
            if (hours < 10 && hours >=0) {
                $('.dd-hours').each(function(){
                   $(this).html('0'+hours); 
               });
            }
            if (hours>10) {
                $('.dd-hours').each(function(){
                   $(this).html('0'+hours); 
               });
            }
            if (hours < 0 ) {
                end = 1;
                clearTimeout(counter);
            }
            if (end) { minutes = '00';}
            else {
                minutes = 59;
            }
            $('.dd-min').each(function(){
                $('.dd-min').html(minutes);
            });
        }
        if (end) { count = '00';}
        else {
            count = 59;
        }
        $('.dd-sec').each(function(){
            $(this).html(count);
        });
    }
}


$('.df-littleimg a').click(function(evt) {   
  evt.preventDefault();    
      var imgPath = $(this).attr('href'); 
        
      var oldImage = $('.df-gal-img img');         
      
    var newImage = $('<img src="' + imgPath +'">');
      
         newImage.hide();     
         $('.df-gal-img').prepend(newImage);     
         newImage.fadeIn(300);    
      
        oldImage.fadeOut(200,function(){
             $(this).remove();
        });    
});   
$('.df-littleimg a:first').click();



});


