$(document).ready(function(){
  document.addEventListener('keydown', _k,false);
  var _k = function(e){
    var keyCode = e.keyCode;
    if ($('.start-wrapper').is(':visible')){
      $('.start-wrapper').hide();
      $('.option-wrapper').show();
    }
  }
});