<template>
  <div>
    <page-header
      :title="title"
      :text="text"
    />
    <image-gallery/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FrontPageHeader from '@/components/PageHeaderImage.vue';
import ImageGallery from '@/components/ImageGallery.vue'
import PageHeader from '@/components/PageHeader.vue';

@Component({
  components: {
    FrontPageHeader,
    ImageGallery,
    PageHeader
  }
})

export default class Gallery extends Vue {
  title: string = "My Gallery";
  text: string = "Over the year i have worked on a lot og different pieces, below you can see most of them. Some of them were commission others were painted because i love painting";
}
</script>

