<template>
  <div>
    <front-page-header
      :title="title"
      :text="text"
      :image="image"
      :socials="socials"
    />
    <div class="container my-4">
      <image-panel
        class="py-4 light-border"
        image="/img/waterfall.jpg"
        text="Hey guys, I just finished this awesome painting for a friend of mine! If you like it then feel free to follow me on facebook to see updates when i post stuff like this. If you want a commission for a painting or drawing, you can hit me up at the commission page."
      />
      <image-panel
        class="py-4 light-border"
        image="/img/cat_bubbles.jpg"
        text="Hey guys, I just finished this awesome painting for a friend of mine! If you like it then feel free to follow me on facebook to see updates when i post stuff like this. If you want a commission for a painting or drawing, you can hit me up at the commission page."
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FrontPageHeader from '@/components/FrontPageHeader.vue';
import ImagePanel from '@/components/ImagePanel.vue';

@Component({
  components: {
    FrontPageHeader,
    ImagePanel
  }
})

export default class FrontPage extends Vue {
  title: string = 'Welcome to KittyGallery';
  text: string = 'Feel free to look around or follow me on social media!';
  image: string = '/img/kitty_image.jpg';
  socials: Array<Object> = [
    {
      image: '/img/facebook-logo.svg',
      link: 'https://www.facebook.com/coloursofthekitty/'
    }
  ];
}
</script>

<style scoped>
.light-border {
  border-bottom: 1px solid #EFEFEF;
}
</style>
