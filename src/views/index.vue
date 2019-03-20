<template>
  <div>
    <page-header
      class="bg-gray"
      :title="data.title"
      :text="data.description"
    />
    <div class="container">
      <div v-for="article in imageArticles" :key="article.id">
        <image-panel
          class="my-4"
          :title="article.title"
          :image="article.image"
          :image-alt="article.imageAlt"
          :description="article.description"
          :button-text="data.buttonText"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageHeader from '@/components/PageHeader.vue';
import ImagePanel from '@/components/ImagePanel.vue';

import { getHomeView, getImageArticle } from '@/utils/contentful';
import { HomeView, ImageArticle } from '@/interfaces/contentful';

@Component({
  components: {
    PageHeader,
    ImagePanel
  }
})

export default class FrontPage extends Vue {
  data: HomeView = new HomeView();

  imageArticles: Array<ImageArticle> = [];

  async created(): Promise<void> {
    this.data = await getHomeView();
    this.imageArticles = await getImageArticle();
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

<style scoped>
.light-border {
  border-bottom: 1px solid #EFEFEF;
}

>>> h1 {
  font-size: 2em;
  padding-top: 50px;
}
</style>
