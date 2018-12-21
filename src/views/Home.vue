<template>
  <div class="home">
    <div>
      <b-card-group deck class="mb-3">
        <b-card header="FILTRO" class="text-center"></b-card>
      </b-card-group>
    </div>
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
export default class Home extends Vue {}
</script>

<style lang="scss">
  @import '../assets/styles/variables';
  @import '../assets/styles/bootstrap';
</style>
