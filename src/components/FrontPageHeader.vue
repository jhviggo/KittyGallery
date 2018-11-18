<template>
  <div class="col-12 p-5">
    <h1 class="header__title">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class FrontPageHeader extends Vue {
  @Prop({ required: true }) title!: string;
}
</script>

<style scoped>
.header__title {
  white-space: pre;
}
</style>
