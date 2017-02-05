var vn = new Vue({
  el : 'main',
  created: function(){
    window.addEventListener('keydown',this.key)
  },
  method: {
    key : function (e){
      console.log(e);
    }
  }
});