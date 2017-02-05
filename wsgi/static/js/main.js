var menu = Vue.component('menu',{
  template : `
    <div class="topic-wrapper">
      <div class="topic">WEB MINI GAME CENTER</div>
    </div>
    <div v-if="ptr == 0" class="start-wrapper">
      <div class="message">Press any key to start</div>
    </div>
    <div v-if="ptr > 0" class="option-wrapper">
      <div v-bind:class="ptr == 1?'selected':''">Play</div>
      <div v-bind:class="ptr == 2?'selected':''">Login</div>
      <div v-bind:class="ptr == 3?'selected':''">Signup</div>
      <div v-bind:class="ptr == 4?'selected':''">Setting</div>
    </div>
  `;
});

var vm = new Vue({
  el : '#main',
  data : {
    ptr = 0
  },
  created: function(){
    window.addEventListener('keydown',this.key)
  },
  methods: {
    key : function (e){
      if (ptr > 0){
        if (ptr > 1 && e.key == 'ArrowDown'){
          ptr--;
        } else if (ptr < 4 && e.key == 'ArrowUp'){
          ptr++;
        } else if (e.key == 'Escape'){
          ptr = 0;
        } else if (e.key == 'Enter'){
          console.log('run ' + ptr);
        }
      } else {
        ptr = 1;
      }
    }
  }
});