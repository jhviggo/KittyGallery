<template>
  <div class="container-fluid border">
    <div class="row">
      <div class="col-12 col-lg-6 px-0">
        <img class="w-100" :src="image" alt="art gallery picture update"/>
      </div>
      <div class="col-12 col-lg-6 d-flex px-0 flex-column justify-content-between">
        <div class="text-left p-3">
          <h3>{{ title }}</h3>
          <div>{{ description }}</div>
        </div>
        <button class="button">{{ buttonText }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component
export default class ImagePanel extends Vue {
  @Prop({ required: true }) title!: string;
  @Prop({ required: true }) description!: string;
  @Prop({ required: true }) image!: string;
  @Prop({ required: true }) buttonText!: string;
  @Prop({ default: '' }) imageAlt!: string;
}
</script>
