<template>
  <div>
    <h1>{{ title }}</h1>
    <p class="mx-3 my-0">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class PageHeader extends Vue {
  @Prop({ required: true }) title!: string;
  @Prop({ required: true }) text!: string;
}
</script>
