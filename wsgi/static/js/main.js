var before_data = {before_ptr : 0};
var after_data = {after_ptr : 0};
Vue.component("before_login",{
  template : '<div> \
    <div class="topic-wrapper"> \
      <div class="topic">WEB MINI GAME CENTER</div> \
    </div> \
    <div v-show="before_ptr == 0" class="start-wrapper"> \
      <div class="message">Press any key to start</div> \
    </div> \
    <div v-show="before_ptr > 0" class="option-wrapper"> \
      <div :class="before_ptr == 1?\'selected\':\'\'">Play</div> \
      <div :class="before_ptr == 2?\'selected\':\'\'">Login</div> \
      <div :class="before_ptr == 3?\'selected\':\'\'">Signup</div> \
      <div :class="before_ptr == 4?\'selected\':\'\'">Setting</div> \
    </div> \
  </div>',
  data : function(){
    return before_data
  }
});

Vue.component("after_login",{
  template : '<div> \
    <div class="header"> \
      <div class="hello">{{ name }}</div>\
      <div class="current_time">{{ current_time }}</div>\
    </div> \
    <div class="topic-wrapper"> \
      <div class="topic">WEB MINI GAME CENTER</div> \
    </div> \
    <div v-show="after_ptr == 0" class="start-wrapper"> \
      <div class="message">Press any key to start</div> \
    </div> \
    <div v-show="after_ptr > 0" class="option-wrapper"> \
      <div :class="after_ptr == 1?\'selected\':\'\'">Play</div> \
      <div :class="after_ptr == 2?\'selected\':\'\'">Setting</div> \
      <div :class="after_ptr == 3?\'selected\':\'\'">Logout</div> \
    </div> \
  </div>',
  data: function (){
    return after_data
  }
});

var vm = new Vue({
  el : '#main',
  data : {
    currentView : "before_login"
  },
  created: function(){
    window.addEventListener('keydown',this.key)
  },
  methods: {
    key : function (e){
      switch(vm.currentView){
        case 'before_login':
          if (this.before_ptr > 0){
            if (this.before_ptr > 1 && e.key == 'ArrowUp'){
              this.before_ptr--;
            } else if (this.before_ptr < 4 && e.key == 'ArrowDown'){
              this.before_ptr++;
            } else if (e.key == 'Escape'){
              this.before_ptr = 0;
            } else if (e.key == 'Enter'){
              console.log('run ' + this.before_ptr);
            }
          } else {
            this.before_ptr = 1;
          }
          break;
        case 'after_login':
          if (this.after_ptr > 0){
            if (this.after_ptr > 1 && e.key == 'ArrowUp'){
              this.after_ptr--;
            } else if (this.after_ptr < 3 && e.key == 'ArrowDown'){
              this.after_ptr++;
            } else if (e.key == 'Escape'){
              this.after_ptr = 0;
            } else if (e.key == 'Enter'){
              console.log('run ' + this.after_ptr);
            }
          } else {
            this.after_ptr = 1;
          }
          break;
      }
    },
    login: function(login_id,password){
             
           }
  }
});
