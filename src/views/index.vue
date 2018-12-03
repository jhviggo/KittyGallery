<template>
  <div>
    <front-page-header
      :title="title"
      :text="text"
      :image="image"
      :socials="socials"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FrontPageHeader from '@/components/FrontPageHeader.vue';

@Component({
  components: {
    FrontPageHeader
  }
})

export default class FrontPage extends Vue {
  title: string = 'Welcome to KittyGallery';
  text: string = 'Feel free to look around or follow me on social media!';
  image: string = '/img/kitty_image.jpg';
  socials: Array = [
    {
      image: '/img/facebook-logo.svg',
      link: 'https://www.facebook.com/coloursofthekitty/'
    }
  ];
}
</script>
