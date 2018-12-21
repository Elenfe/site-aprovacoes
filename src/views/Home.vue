<template>
  <div class="home">
<b-jumbotron>
  <template slot="header">
    <b-form-select
                     :value="null"
                     :options="{ '1': '2018', '2': '2017', '3': '2016', '4': '2015' }"
                     id="inlineFormCustomSelectPref">
        <option slot="first" :value="null">Selecione o ano</option>
    </b-form-select>
    <!-- <b-btn variant="primary" href="#">Do Something</b-btn> -->
  </template>
  <!-- <hr class="my-4"> -->

</b-jumbotron>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  // data () {
  //   return {
  //     select: 't',
  //     options: [
  //       { value: 't', text: 'Escolha o Ano' },
  //       { value: 'a', text: '2018' },
  //       { value: 'b', text: '2017' },
  //       { value: 'c', text: '2016' },
  //       { value: 'd', text: '2015' }
  //     ]
  //   }
  // }
}
</script>

<style lang="scss">
  @import '../assets/styles/variables';
  @import '../assets/styles/bootstrap';
</style>
