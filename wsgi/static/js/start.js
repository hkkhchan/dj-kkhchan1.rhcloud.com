$(document).ready(function(){
  $(document).keydown(function(e){
    if ($('.start-wrapper').is(':visible')){
      $('.start-wrapper').hide();
      $('.option-wrapper').show();
    }
  });
});