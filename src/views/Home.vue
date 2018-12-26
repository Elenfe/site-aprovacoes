<template>
  <div class="home">
    <b-container fluid>
        <b-row class="mb-4 mt-4 text-center">
        <b-col cols="4">FILTRO</b-col>
        <b-col cols="4"></b-col>
        <b-btn cols="4" @click="show=true" variant="primary">Cadastrar concurso</b-btn>
      </b-row>
    </b-container>
    <b-container>
        <b-row>
        <b-col cols="4" sm="2">
          <b-form>
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
        <b-col cols="4" sm="6">
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
    <template>

    </template>
<!-- Cadastro de aprovações -->
<template>
  <div>
    <b-modal v-model="show" size="lg">
       <b-container>
         <b-row class="mb-3">
           <b-col cols="3"><b-form-select
                          :value="null"
                          :options="anos"
                          required
                          v-model="form.anos" /></b-col>
           <b-col><b-form-select
                          :value="null"
                          :options="concurso"
                          required
                          v-model="form.concurso" /></b-col>
           <b-col><b-form-select
                          :value="null"
                          :options="sigla"
                          required
                          v-model="form.sigla" /></b-col>
         </b-row>
         <b-row class="mb-3">
           <b-col cols="2"><b-form-select
                          :value="null"
                          :options="especialidade"
                          required
                          v-model="form.especialidade" /></b-col>
           <b-col><b-form-select
                          :value="null"
                          :options="hospital"
                          required
                          v-model="form.hospital" /></b-col>
         </b-row>
         <b-row class="mb-3">
           <b-col cols="12" ><b-form-textarea id="textarea3"
                   v-model="text1"
                   placeholder="Digite o Texto"
                   :rows="3"></b-form-textarea></b-col>
          </b-row>
        <b-row class="mb-2">
            <b-col sm="2" cols="4">
              <b-form-select
                        :options="posicao"
                        required />
            </b-col>
            <b-col sm="6">
              <b-form-group horizontal
                :label-cols="1"
                label-for="input_default">
                <b-form-input id="input_default"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group>
                  <b-form-checkbox-group plain stacked v-model="selected" :options="options" />
              </b-form-group>
            </b-col>
            <b-col>
              <b-btn size="sm" class="float-left" variant="primary">
                +
              </b-btn>
            </b-col>
        </b-row>
       </b-container>
       <div slot="modal-footer" class="w-100">
         <b-btn size="sm" class="float-right" variant="primary" @click="show=false">
           Salvar
         </b-btn>
         <b-btn size="sm" class="float-left" variant="primary" @click="show=false">
           Fechar
         </b-btn>
       </div>
    </b-modal>
  </div>
</template>
<!-- Fim cadastro de aprovações -->
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
        sigla: null,
        especialidade: null,
        hospital: null,
        texto: null,
        nomeAluno: null
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
      ],
       especialidade: [
        { text: 'Especialidade', value: null },
        'Cirurgia', 'ginecologia', 'Clinica Medica', 'Ortopedia'
      ],
       hospital: [
        { text: 'Hospital', value: null },
        'Hospital Municipal Salgado Filho', 'Hospital Municipal lourenço Jorge', 'Hospital Estadua do Carmo', 'Hospital Municipal Suza Aguiar'
      ],
       text: '',
       text1: '',
      show: true,
      selected: [],
      options: [
        {text: 'MEDGRUPO', value: 'medgrupo'},
        {text: 'SUPLENTE', value: 'suplente'},
      ]

    }
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/variables';
  @import '../assets/styles/bootstrap';
</style>
