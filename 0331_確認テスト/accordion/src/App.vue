<template>
  <div id="app">
    <div class="js-accordion" v-cloak>
    <button class="js-accordion--trigger" type="button" :class="{ '_state-open': isOpened }" @click="accordionToggle()">
      アコーディオン
    </button>
    <div class="js-accordion--target" :class="{ '_state-open': isOpened }" v-if="isOpened">
  <div class="js-accordion--body">
      アコーディオンの中身が入ります
  </div>
    </div>
  </div>
  </div>
</template>

<script>
export default{
  data() {
    return {
      isOpened: false
    };
  },
  methods: {
    accordionToggle: function(){
      this.isOpened = !this.isOpened;
    },
  }
};
</script>


<style>
#app{
  padding:20px;
  width:80vw;
  margin:0 auto;
}
.js-accordion{
  background-color: #fff;
  border-color: #666;
  border-style: solid;
  border-width:1px;
  border-radius: 2px;
}
.js-accordion--trigger{
    position: relative;
    display: block;
    width: 100%;
    transition: all 0.2s ease-in;
    color: #000;
    display: block;
    font-size:20px;
    text-align: left;
    padding: 20px;
    outline: none;
    border: none;
    cursor: pointer;
}
._state-open{
      background-color: #f1f1f1;
      text-decoration: none;
    }

.js-accordion--target{
    overflow: hidden;
    transition: 0.4s ease-in-out;
  }
  .js-accordion--body{
    background-color:#fff;
    padding: 30px;
  }
  .-enter-active{
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: js-accordion--anime__opend;
  }
  .-leave-active{
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: js-accordion--anime__closed;
  }


@keyframes js-accordion--anime__opend {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
   }
}
@keyframes js-accordion--anime__closed {
  0% {
   opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
    
</style>