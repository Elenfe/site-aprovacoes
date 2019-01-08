<template>
  <div class="home">
    <b-container class="bg-info" fluid>
        <b-row class="mb-4 p-4 text-center">
          <b-col size="sm" cols="4" class="text-white">FILTRO</b-col>
          <b-col cols="4"></b-col>
          <b-btn cols="4" @click="show=true" variant="primary">Cadastrar concurso</b-btn>
        </b-row>
    </b-container>
    <b-container>
        <b-row>
          <b-col cols="3" sm="2">
            <b-form>
              <select v-model="anoselected" @change="onChange">
                <option disabled value="">Escolha o Ano</option>
                <option v-for="ano in anos.data" :key="ano._id" :value="ano">{{ano.year}}</option>
              </select>
            </b-form>
          </b-col>
          <b-col cols="3" sm="3">
            <b-form>
              <select v-model="estadoselected" @change="onChangeestado">
                <option disabled value="">Escolha o Estado</option>
                <option v-for="estado in estados.states" :key="estado._id" :value="estado">{{estado.name.toUpperCase()}} - {{estado.shortname.toUpperCase()}}</option>
              </select>
            </b-form>
          </b-col>
          <b-col cols="3" sm="3">
            <b-form>
              <select v-model="instituteselected" @change="onChangeinstitute">
                <option disabled value="">Escolha o Instituto</option>
                <option v-for="institute in estadoselected.institutes" :key="institute._id" :value="estado">{{institute.name.toUpperCase()}}- {{institute.shortname.toUpperCase()}}</option>
              </select>
            </b-form>
          </b-col>
        </b-row>
    </b-container>

    <!-- Tabela de aprovações -->
<!-- <template>
  <b-container class="mt-5">
    <p bg-variant="tbl-localHosp">UFRJ-2018 <br>Universidade Federal do Rio de Janeiro</p>
    <p>Residência Médica</p>
    <p>RESULTADO FINAL<br><span> APROVADOS EM NEGRITO</span></p>
    <p>HOSPITAL UNIVERSITÁRIO CLEMENTINO FRAGA FILHO</p>
    <p>ANESTESIOLOGIA</p>
    <p>TODOS OS APROVADOS FORAM DO MEDGRUPO !!!</p>
  </b-container>
  <b-container>
    <table stacked class="table">
      <tbody>
        <tr>
          <td>1</td>
          <td>Élenfe Gomes da Silva</td>
          <td>MEDGRUPO</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Moe</td>
          <td>MEDGRUPO</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Dooley</td>
          <td>MEDGRUPO</td>
        </tr>
      </tbody>
    </table>
  </b-container>
</template> -->
<!-- Fim Tabela de aprovações -->

<!-- Cadastro de aprovações -->
<template>
  <div>
    <b-modal v-model="show" size="lg">
       <b-container>

         <b-row class="mb-3">
            <b-col cols="6" sm="3">
              <b-form>
              <select v-model="anoselected" @change="onChange">
                <option disabled value="">Escolha o Ano</option>
                <option v-for="ano in anos.data" :key="ano._id" :value="ano">{{ano.year}}</option>
              </select>
            </b-form>
            </b-col>
            <b-col cols="6" sm="3">
              <b-form>
                <select v-model="estadoselected" @change="onChangeestado">
                <option disabled value="">Escolha o Estado</option>
                <option v-for="estado in estados.states" :key="estado._id" :value="estado">{{estado.name.toUpperCase()}} - {{estado.shortname.toUpperCase()}}</option>
              </select>
               </b-form>
            </b-col>
         </b-row>

         <b-row class="mb-3">
            <b-col cols="4">
              <b-form>
              <select v-model="anoselected" @change="onChange">
                <option disabled value="">Escolha a especialidade</option>
                <option v-for="ano in anos.data" :key="ano._id" :value="ano">{{ano.year}}</option>
              </select>
            </b-form>
            </b-col>
            <b-col cols="3">
              <b-form>
                <select v-model="instituteselected" @change="onChangeinstitute">
                  <option disabled value="">Escolha o Instituto</option>
                  <option v-for="institute in estadoselected.institutes" :key="institute._id" :value="estado">{{institute.name.toUpperCase()}}- {{institute.shortname.toUpperCase()}}</option>
                </select>
              </b-form>
            </b-col>
         </b-row>

         <b-row class="mb-3">
           <b-col cols="12" ><b-form-input placeholder="Digite o Texto"></b-form-input></b-col>
          </b-row>
        <b-row class="mb-2">
          <b-col cols="3" sm="2">
            <b-form-input placeholder="Posição"></b-form-input>
          </b-col>
            <b-col cols="3" sm="7">
              <!-- <b-form-group horizontal> -->
                <b-form-input placeholder="Digite o nome"></b-form-input>
              <!-- </b-form-group> -->
            </b-col>
            <b-col sm="2">
              <!-- <b-form-group>
                  <b-form-checkbox-group plain stacked v-model="selected" :options="options" />
              </b-form-group> -->
            </b-col>
            <b-col>
              <b-btn size="sm" variant="primary">
                +
              </b-btn>
            </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="3" sm="2">
            <b-form-input placeholder="Posição"></b-form-input>
          </b-col>
            <b-col cols="3" sm="7">
                <b-form-input placeholder="Digite o nome"></b-form-input>
            </b-col>
            <b-col sm="2">
              <!-- <b-form-group>
                  <b-form-checkbox-group plain stacked v-model="selected" :options="options" />
              </b-form-group> -->
            </b-col>
            <b-col>
              <b-btn size="sm" variant="primary">
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

<<<<<<< HEAD
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import Aprovacoes from '../services/aprovacoes';

@Component({
  components: {
  },
})
export default class Home extends Vue {

  aprovacoes: any[] = [];

  anos = [];
  estados = [];

  anoselected = { year: '', _id: '' };
  estadoselected = { name: '', _id: '', institutes: [] };
  instituteselected = { nane: '', _id: '' };

  options = [
    {text: 'MEDGRUPO', value: 'medgrupo'},
    {text: 'SUPLENTE', value: 'suplente'},
  ]

  show = false;

  mounted(){
    this.listar();
  }

  async onChange(){
    const content = await Aprovacoes.getano(this.anoselected._id);
    this.estados = content.data;
  }

  onChangeestado(){
  }

  onChangeinstitute(){
  }

  async listar() {
    this.anos = await Aprovacoes.getanos();
    // this.estados = await Aprovacoes.getanos();
    // debugger
=======
// <script lang="ts">
// import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// @Component({
//   components: {
//     HelloWorld,
//   },
// })
export default class Home extends Vue {
  data () {
  //   return {
  //     form: {
  //       anos: null,
  //     }
  //   }
    return {
      form: {
        anos: null,
        estados: null,
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
      estados: [
        { text: 'Selecione o estado', value: null },
        'RJ', 'SP', 'MG', 'ES', 'BA'
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
      show: false,
      selected: [],
      options: [
        {text: 'MEDGRUPO', value: 'medgrupo'},
        {text: 'SUPLENTE', value: 'suplente'},
      ]

    }
>>>>>>> 8078f88b51e2781e5b78e2f69c188e7719b5e557
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/variables';
  @import '../assets/styles/bootstrap';
</style>
