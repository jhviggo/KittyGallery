<template>
  <div>
    <div class="mb-4 position-relative header__container">
      <img class="w-100"
           :src="headerImage"/>
      <h1 class="header">{{ headerText }}</h1>
    </div>
    <div class="col-12 col-lg-6 mx-auto">
      <netlify-form
        :form-inputs="forms"
        :form-submit-text="formText"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import NetlifyForm from '@/components/NetlifyForm.vue';

@Component({
  components: {
    NetlifyForm
  },
})

export default class Commissions extends Vue {
  page: Array<object> = require('@/content/contact.json');
  headerText: string = 'Contact me';
  headerImage: string = '/img/commission_header.jpg';
  formText: string = 'click me';
  forms: Array<object> = [
    {
      name: 'name',
      text: 'Name',
      type: 'text'
    },
    {
      name: 'email',
      text: 'E-mail',
      type: 'email'
    },
    {
      name: 'phone',
      text: 'Phone number',
      type: 'tel'
    },
    {
      name: 'about',
      text: 'About',
      type: 'text'
    },

  ];
}
</script>

<style scoped>
.header {
  z-index: 50;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.header__container {
  max-height: 150px;
  overflow: hidden;
}
</style>
