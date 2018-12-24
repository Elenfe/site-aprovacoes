<template>
  <div class="home">
    <b-container>
        <b-row>
        <b-col cols="4"></b-col>
        <b-col cols="4"></b-col>
        <b-col cols="4"><b-button>CAdastrar concurso</b-button></b-col>
      </b-row>
    </b-container>
    <b-container>
        <b-row>
        <b-col cols="4">
          <b-form inline>
            <!-- <b-col cols="4"> -->
          <b-form-select
                          :value="null"
                          :options="anos"
                          required
                          v-model="form.anos">
          </b-form-select>
          <!-- </b-col> -->
          </b-form>
          </b-col>
        <b-col cols="4">
          <b-form>
            <!-- <b-col cols="4"> -->
          <b-form-select
                          :value="null"
                          :options="concurso"
                          required
                          v-model="form.concurso">
          </b-form-select>
          <!-- </b-col> -->
          </b-form>
        </b-col>
        <b-col cols="4">
          <b-form inline>
            <!-- <b-col cols="4"> -->
          <b-form-select
                          :value="null"
                          :options="sigla"
                          required
                          v-model="form.sigla">
          </b-form-select>
          <!-- </b-col> -->
          </b-form>
          </b-col>
      </b-row>
    </b-container>
<div class="aprovacoes__box">
    <div class="lista-aprovados">
        <h2 class="lista-aprovados__titulo"><span>HMAG ES - 2018<br>Hospital e Maternidade DR. Arthur Gerhardt</span><span class="destaque">Residência Médica</span></h2>
        <h3 class="lista-aprovados__subtitulo"><span>Resultado Final</span></h3>
        <h2 class="lista-aprovados__negrito"><span>Aprovados em negrito</span></h2>
        <div class="content-lista-aprovados">
            <div class="content-lista-aprovados__container">
                <div class="content-lista-aprovados__hospital"><span>hospital e maternidade dr. arthur gerhardt</span></div>
                <div>
                    <h4 class="content-lista-aprovados__titulo"><span>neonatologia</span></h4>
                    <div class="content-lista-aprovados__info"><span class="destaque">TODOS</span> os aprovados foram do <span class="destaque">MEDGRUPO</span> !!!</div>
                    <ul class="content-lista-aprovados__nomes stamp">
                        <li class=""><span class="destaque">1. juliana neves ferreira</span><span>MEDGRUPO</span></li>
                        <li class=""><span class="destaque">2. sara dos santos jorge</span><span>MEDGRUPO</span></li>
                        <li class=""><span class="">3. janine horsth silva</span><span>MEDGRUPO</span></li>
                        <li class=""><span class="">4. adanna débora brunou capila</span><span>MEDGRUPO</span></li>
                        <li class=""><span class="">5. lara nicoli passamani</span><span>MEDGRUPO</span></li>
                        <li class=""><span class="">6. letícia altoé almeida e silva</span><span>MEDGRUPO</span></li>
                        <li class=""><span class="">7. amanda neves siqueira</span><span>MEDGRUPO</span></li>
                        <li class=""><span class="">8. renata cristina moreira queiroz</span><span>MEDGRUPO</span></li>
                        <li class=""><span class="">9. rainara fratus avance baggieri</span><span>MEDGRUPO</span></li>
                        <li class=""><span class="">10. marcela assis freitas</span><span>MEDGRUPO</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
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
export default class Home extends Vue {
  data () {
    return {
      form: {
        anos: null,
        concurso: null,
        sigla: null
      },
      anos: [
        { text: 'Selecione o Ano', value: null },
        '2018', '2017', '2016', '2015'
      ],
       concurso: [
        { text: 'Selecione o concurso', value: null },
        'Hospital do carmo', 'Hospital de olhos', 'Hospital Salgado Filho', 'Hospital lourenço Jorge'
      ],
       sigla: [
        { text: 'Sigla', value: null },
        'HC-RJ', 'HO-RJ', 'HSF-RJ', 'HLJ-RJ'
      ]
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/variables';
  @import '../assets/styles/bootstrap';
</style>
