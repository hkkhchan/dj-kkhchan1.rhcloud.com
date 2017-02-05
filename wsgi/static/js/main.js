/*
var menu = Vue.component('main-menu',{
  template : `
  <div>
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
  </div>
  `,
  data : {
    ptr : 0
  }
});
*/
var vm = new Vue({
  el : '#main',
  data : {
    ptr : 0
  },
  template : `
  <div id="main">
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
  </div>
  `,
  created: function(){
    window.addEventListener('keydown',this.key)
  },
  methods: {
    key : function (e){
      if (this.ptr > 0){
        if (this.ptr > 1 && e.key == 'ArrowDown'){
          this.ptr--;
        } else if (this.ptr < 4 && e.key == 'ArrowUp'){
          this.ptr++;
        } else if (e.key == 'Escape'){
          this.ptr = 0;
        } else if (e.key == 'Enter'){
          console.log('run ' + this.ptr);
        }
      } else {
        this.ptr = 1;
      }
    }
  }
});
