<template>
  <div class="bg-gray h-100">
    <page-header-image
      :title="title"
      :text="text"
      :image="image"
      :socials="socials"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageHeaderImage from '@/components/PageHeaderImage.vue';
import ImagePanel from '@/components/ImagePanel.vue';

@Component({
  components: {
    PageHeaderImage,
    ImagePanel
  }
})

export default class FrontPage extends Vue {
  title: string = 'Welcome to Colours of the Kitty';
  text: string = 'My name is Kitty Petersen, i am an artist from Denmark. I love to paint, draw and create art, which i strive to do as much as possible.';
  image: string = '/img/kitty_image.jpg';
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
