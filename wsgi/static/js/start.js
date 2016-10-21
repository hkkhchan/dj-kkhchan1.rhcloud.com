$(document).ready(function(){
  var page=0;
  $(document).keydown(function(e){
    if (page===0){
      $('.start-wrapper').hide();
      $('.option-wrapper').show();
      page=1;
    }
    else if (page===1){
      switch(e.keyCode){
        case 38://up
          if ($('.play').hasClass('selected')){
            $('.play, .setting').toggleClass('selected');
          }
          else{
            $('.selected').removeClass('selected').prev().addClass('selected');
          }
          break;
        case 40:
          if ($('.setting').hasClass('selected')){
            $('.play, .setting').toggleClass('selected');
          }
          else{
            $('.selected').removeClass('selected').next().addClass('selected');
          }
          break;
        default:
          break;
      }
    }
  });
});