<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-6 px-0">
        <img class="w-100" :src="image" alt="art gallery picture update"/>
      </div>
      <div class="col-12 col-lg-6 py-2 text-left">
        <div>{{ text }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component
export default class ImagePanel extends Vue {
  @Prop({ required: true }) text!: string;
  @Prop({ required: true }) image!: string;
}
</script>
