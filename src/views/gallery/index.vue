<template>
  <div class="margin-top-50">
    <image-gallery/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FrontPageHeader from '@/components/FrontPageHeader.vue';
import ImageGallery from '@/components/ImageGallery.vue'

@Component({
  components: {
    FrontPageHeader,
    ImageGallery
  }
})

export default class Gallery extends Vue {}
</script>

<style scoped>
.margin-top-50 {
  margin-top: 50px;
}
</style>
