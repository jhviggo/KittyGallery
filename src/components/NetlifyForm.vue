<template>
  <form class="input-group"
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        netlify>
    <div v-for="input in formInputs"
         :key="input.name"
         class="w-100 mb-4">
      <input :name="input.name"
             :type="input.type"
             required="true"
             class="form-control"
             :id="`input-${input.name}`"
             :placeholder="input.text"/>
    </div>
    <button class="btn btn-outline-success btn-block"
            type="submit">
      {{ formSubmitText }}
    </button>
  </form>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component
export default class NetlifyForm extends Vue {
  @Prop({ required: true }) formInputs!: Array<object>;
  @Prop({ required: true }) formSubmitText!: string;
}
</script>
