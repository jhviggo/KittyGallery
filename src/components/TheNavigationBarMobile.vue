<template>
  <div>
    <div id="nav-bar__background" @click="toggleMenu" v-if="menuOpen" class="w-100 h-100"></div>
    <div class="nav-bar" id="mobileMenu">
      <div class="d-flex justify-content-center" id="nav-bar__toggle" @click="toggleMenu">
        <template v-if="menuOpen">X</template>
        <template v-else>&#9776;</template>
      </div>
      <div class="icon-custom__container">
        <div @click="goToUrl('/')">
          <img class="w-50 h-100" :src="logo"/>
        </div>
      </div>
      <div class="p-2 pl-3 btn-custom w-100 text-left" v-for="button in menuButtons" :key="button.url" @click="goToUrl(button.url)">
        {{ button.text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TheNavigationBarMobile extends Vue {
  @Prop({ required: true }) logo!: string;
  @Prop({ required: true }) menuButtons!: Array<object>;

  menuOpen: boolean = false;

  toggleMenu(): void {
    if (!this.menuOpen) {
      document.getElementById('app')!.style.maxHeight = `${document.getElementById('mobileMenu')!.offsetHeight}px`;
    } else {
      document.getElementById('app')!.style.maxHeight = 'none';
    }

    document.getElementById('mobileMenu')!.classList!.toggle('nav-bar__display');
    this.menuOpen = !this.menuOpen;
  }

  goToUrl(url: string): void {
    this.$router.push(url);
    this.toggleMenu();
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

.nav-bar__display {
  left: 0 !important;
}

.nav-bar {
  transition: all .5s ease;
  left: -60vw;
  width: 60vw;
  min-width: 150px;
  height: 100%;
  background-color: #3C3C3C;
  position: fixed;
  z-index: 99;
}

#nav-bar__background {
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  z-index: 80;
  opacity: .5;
  filter: alpha(opacity=50);
}

#nav-bar__toggle {
  width: 52px;
  height: 50px;
  background-color: #3C3C3C;
  color: white;
  position: absolute;
  z-index: 100;
  font-size: 2em;
  right: -50px;
}

.btn-custom {
  color: #DFDCE3;
}

.btn-custom:hover {
  background-color: #2C2C2C;
  cursor: pointer;
}

@media(min-width: 768px) {
  .nav-bar {
    display: none;
  }
}
</style>
