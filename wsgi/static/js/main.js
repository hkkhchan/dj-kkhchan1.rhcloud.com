var vn = new Vue({
  el : '#main',
  created: function(){
    window.addEventListener('keydown',this.key)
  },
  methods: {
    key : function (e){
      console.log(e);
    }
  }
});