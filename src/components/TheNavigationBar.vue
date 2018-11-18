<template>
  <div class="nav-bar">
    <div class="icon-custom__container">
      <router-link to="/">
        <img class="w-50 h-100" :src="logo"/>
      </router-link>
    </div>
    <div class="p-2 pl-3 btn-custom w-100 text-left" v-for="button in menuButtons" :key="button.url" @click="goToUrl(button.url)">
      {{ button.text }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TheNavigationBar extends Vue {
  @Prop({ required: true }) logo!: string;
  @Prop({ required: true }) menuButtons!: Array<object>;

  goToUrl(url: string): void {
    this.$router.push(url);
  }
}
</script>

<style scoped>
.icon-custom__container {
  width: 15vw;
  height: 7.5vw;
  min-width: 150px;
  min-height: 75px;
  cursor: pointer;
}

.icon-custom__container:hover {
  background: #2C2C2C;
}

.nav-bar {
  width: 15vw;
  min-width: 150px;
  height: 100%;
  background-color: #3C3C3C;
  position: fixed;
}

.btn-custom {
  color: #DFDCE3;
}

.btn-custom:hover {
  background-color: #2C2C2C;
  cursor: pointer;
}

@media(max-width: 768px) {
  .nav-bar {
    display: none;
  }
}
</style>
