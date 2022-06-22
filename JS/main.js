$(document).ready(
  function(){
    $('.dropdown1').hover(function onIn1(){
    $('.dropdown-menu1').toggleClass('show');
    });
  $('.dropdown2').hover(function onIn2(){
    $('.dropdown-menu2').toggleClass('show');
  });
  $('.main__form-theme').click(function dropMenuShow(){
    $('.main__form-menu').show();
    $('.main__form-theme').css('border','2px solid #14988B');
    $('.main__form-theme .up').css('display','block');
    $('.main__form-theme .down').css('display','none');
  });
  $('.main__form-menu ul li').click(function(e){ 
    $('.main__form-theme input').val($(this).text());
    $('.main__form-menu').hide();
    $('.main__form-theme').css('border', '1px solid #E3E3E3');
    $('.main__form-theme .up').css('display','none');
    $('.main__form-theme .down').css('display','block');        
  });
  $('#regionCity .main__form-region').click(function dropList1Show(){
    $('.main__form-list1').show();
    $('.main__form-region').css('border','2px solid #14988B');
    $('.main__form-region .up').css('display','block');
    $('.main__form-region .down').css('display','none');
  });
  $('.main__form-list1 li').click(function(e){ 
    $('.main__form-region input').val($(this).text());
    $('.main__form-list1').hide();
    $('.main__form-region').css('border', '1px solid #E3E3E3');
    $('.main__form-region .up').css('display','none');
    $('.main__form-region .down').css('display','block');        
  });
$('#regionCity .main__form-city').click(function dropList2Show(){
    $('.main__form-list2').show();
    $('.main__form-city').css('border','2px solid #14988B');
    $('.main__form-city .up').css('display','block');
    $('.main__form-city .down').css('display','none');
  });
  $('.main__form-list2 li').click(function(e){ 
    $('.main__form-city input').val($(this).text());
    $('.main__form-list2').hide();
    $('.main__form-city').css('border', '1px solid #E3E3E3');
    $('.main__form-city .up').css('display','none');
    $('.main__form-city .down').css('display','block');        
  });
  new Swiper('.swiper-container', {
    slidesPerView: 1,
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
  });
});












 

