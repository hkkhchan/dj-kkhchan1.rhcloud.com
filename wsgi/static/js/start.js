$(document).ready(function(){
  var page=0;
  $(document).keydown(function(e){
    if (page===0){
      $('.start-wrapper').hide();
      $('.option-wrapper').show();
      page=1;
    }
    else if (page===1){
      option_nav(e.keyCode);
    }
  });
  
  var option_nav=function (keyCode){
    switch(keyCode){
      case 38: //up arrow
        if ($('.play').hasClass('selected')){
          $('.play, .setting').toggleClass('selected');
        }
        else{
          $('.selected').removeClass('selected').prev().addClass('selected');
        }
        break;
      case 40: //down arrow
        if ($('.setting').hasClass('selected')){
          $('.play, .setting').toggleClass('selected');
        }
        else{
          $('.selected').removeClass('selected').next().addClass('selected');
        }
        break;
      case 27: //Esc
        page=0;
        $('.option-wrapper').hide();
        $('.start-wrapper').show();
        break;
      default:
        break;
    }
  }
});