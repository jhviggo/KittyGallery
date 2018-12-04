<template>
  <div class="col-12 py-5 header">
    <img class="header__image mb-5" :src="image"/>
    <h1 class="mb-3 header__title">{{ title }}</h1>
    <p>{{ text }}</p>
    <div>
      <a class="px-1" v-for="social in socials" :href="social.link" :key="social.link">
        <img class="header__social" :src="social.image"/>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class FrontPageHeader extends Vue {
  @Prop({ required: true }) title!: string;
  @Prop({ required: true }) text!: string;
  @Prop({ required: true }) image!: string;
  @Prop({ required: true }) socials!: Array<Object>;
}
</script>

<style scoped>
.header {
  background-color: #EFEFEF;
}

h1 {
  font-size: 8vw;
}

.header__title {
  white-space: pre-wrap;
}

.header__image {
  border-radius: 50%;
  border: 1px solid gray;
  width: 40vw;
}

@media(min-width: 768px) {
  .header__image {
    width: 25vw
  }

  h1 {
    font-size: 6vw;
  }
}

@media(min-width: 1200px) {
  .header__image {
    width: 20vw
  }

  h1 {
    font-size: 3em;;
  }
}

.header__social {
  width: 2em;
}
</style>
