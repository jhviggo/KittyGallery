<template>
  <div class="bg-gray h-100">
    <page-header-image
      :title="data.title"
      :text="data.desc"
      :image="data.image"
      :image-alt="data.imageAlt"
      :socials="socials"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageHeaderImage from '@/components/PageHeaderImage.vue';
import ImagePanel from '@/components/ImagePanel.vue';
import { getAboutMeView } from '@/utils/contentful';
import { AboutMeView } from '@/interfaces/contentful';

@Component({
  components: {
    PageHeaderImage,
    ImagePanel
  }
})

export default class FrontPage extends Vue {
  data: AboutMeView = new AboutMeView();

  async created(): Promise<void> {
    this.data =  await getAboutMeView();
    console.log(this.data);
  }

  socials: Array<Object> = [
    {
      image: '/img/facebook-logo.svg',
      link: 'https://www.facebook.com/coloursofthekitty/'
    },
    {
      image: '/img/instagram-logo.svg',
      link: ''
    }
  ];
}
</script>
