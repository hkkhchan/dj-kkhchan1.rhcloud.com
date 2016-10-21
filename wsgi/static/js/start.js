document.addEventListener('keydown', _k,false);
var _k = function(e){
  var keyCode = e.keyCode;
  if (document.querySelector('.option-wrapper').offsetLeft < 0){
    console.log('test');
  }
}