<template>
  <div>
    <front-page-header
      :title="title"
    />
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

export default class FrontPage extends Vue {
  title: string = 'Front page';
}
</script>
