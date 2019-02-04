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
          <b-col cols="4" sm="2">
            <b-form>
              <select v-model="anoselected" @change="onChange">
                <option disabled value="">Escolha o Ano</option>
                <option v-for="ano in anos.data" :key="ano._id" :value="ano">{{ano.year}}</option>
              </select>
            </b-form>
          </b-col>
          <b-col cols="4" sm="3">
            <b-form>
              <select v-model="estadoselected" @change="onChangeestado">
                <option disabled value="">Escolha o Estado</option>
                <option v-for="estado in estados.states" :key="estado._id" :value="estado">{{estado.name.toUpperCase()}} - {{estado.shortname.toUpperCase()}}</option>
              </select>
            </b-form>
          </b-col>
          <b-col cols="4" sm="3">
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
<template>
  <div v-for="estado in estados.states" :key="estado._id" :value="estado">
      <b-container class="mt-5">
      <p bg-variant="tbl-localHosp">{{estado.year}}<br>Universidade Federal do Rio de Janeiro</p>
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
  </div>
</template>
<!-- Fim Tabela de aprovações -->

<!-- Cadastro de aprovações -->
<template>
  <div>
    <b-modal v-model="show" size="lg">
       <b-container>

         <b-row class="mb-2">
          <b-col cols="3" sm="2">
            <label class="col-form-label-sm">Ano</label>
            <b-form-input></b-form-input>
          </b-col>
            <b-col cols="3" sm="7">
              <label class="col-form-label-sm">Estado</label>
                <b-form-input></b-form-input>
            </b-col>
            <b-col sm="2">
            </b-col>
        </b-row>

         <b-row class="mb-2">
          <b-col cols="3" sm="2">
            <label class="col-form-label-sm">Especialidade</label>
            <b-form-input></b-form-input>
          </b-col>
            <b-col cols="3" sm="7">
              <label class="col-form-label-sm">Instituto</label>
                <b-form-input></b-form-input>
            </b-col>
            <b-col sm="2">
            </b-col>
        </b-row>
         <b-row class="mb-3">
           <label class="col-form-label-sm">Texto Extra</label>
           <b-col cols="12" ><b-form-input></b-form-input></b-col>
          </b-row>
        <b-row class="mb-2">
          <b-col cols="3" sm="1">
            <label class="col-form-label-sm">Posição</label>
            <b-form-input></b-form-input>
          </b-col>
            <b-col cols="3" sm="8">
              <label class="col-form-label-sm">Nome do Aluno</label>
                <b-form-input></b-form-input>
            </b-col>
            <b-col sm="2" class="medSuplente">
              <b-form-group>
                  <b-form-checkbox-group plain stacked v-model="selected" :options="options" />
              </b-form-group>
            </b-col>
            <b-col>
              <b-btn class="btnPlus" size="sm" variant="primary">
                +
              </b-btn>
            </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="3" sm="1">
            <label class="col-form-label-sm">Posição</label>
            <b-form-input></b-form-input>
          </b-col>
            <b-col cols="3" sm="8">
              <label class="col-form-label-sm">Nome do Aluno</label>
                <b-form-input></b-form-input>
            </b-col>
            <b-col sm="2" class="medSuplente">
              <b-form-group>
                  <b-form-checkbox-group plain stacked v-model="selected" :options="options" />
              </b-form-group>
            </b-col>
            <b-col>
              <b-btn class="btnPlus" size="sm" variant="primary">
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

  async onChangeinstitute(){
    const institute = this.instituteselected._id;
    // const institute = await Aprovacoes.getinstitute(this.anoselected._id);
    console.log(this.instituteselected._id);
  }

  async listar(){
    this.anos = await Aprovacoes.getanos();
    // this.estados = await Aprovacoes.getanos();
    // debugger
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/variables';
  @import '../assets/styles/bootstrap';
</style>
