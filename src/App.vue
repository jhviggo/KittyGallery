<template>
  <div id="app" class="row m-0">
    <div>
      <the-navigation-bar-mobile
        :logo="image"
        :menuButtons="menu"
      />
      <the-navigation-bar
        :logo="image"
        :menuButtons="menu"
      />
      <div class="spacer"></div>
    </div>
    <div class="col p-0" id="nav">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheNavigationBar from '@/components/TheNavigationBar.vue';
import TheNavigationBarMobile from '@/components/TheNavigationBarMobile.vue';

/** Declare require method type for json imports */
declare function require(name:string): Array<object>;

@Component({
  components: {
    TheNavigationBar,
    TheNavigationBarMobile
  }
})

export default class AppMain extends Vue {
  image: string = '/img/logo.svg';
  menu: Array<object> = require('@/content/Navigation.json');
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.spacer {
  width: 15vw;
  min-width: 150px;
  min-height: 15px;
  height: 100%;
}

@media(max-width: 768px) {
  .spacer {
    display: none;
  }
}
</style>
