<template>
  <div id="fiturs-wrapper">
    <v-container>
      <v-row class="grey lighten-4">
        <v-col cols=12>
          <div class="headline text-center font-weight-bold">
             Rangkuman Fitur
          </div>
        </v-col>
      </v-row>
      <f-row-vocal label="Vocal" :fiturs="vocals" />
      <v-row class="mt-4">
        <v-col sm="12">
          <div class="headline">
             Konsonan
          </div>
        </v-col>
      </v-row>
      <f-row-konsonan :fiturs="consonants" />
    </v-container>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { fitur_for } from '@/service/fiturs';
import FRowVocal from './FRowVocal.vue';
import FRowKonsonan from "./FRowKonsonan.vue";


export default Vue.extend({
  name: 'Fitur',

  components: {
    FRowVocal,
    FRowKonsonan
  },

  data: () => ({
    vocals: [] as any[],
    consonants: [] as any[]
  }),

  methods: {

    async loadData() {
      this.vocals = await fitur_for('vocal');
      this.consonants = await fitur_for('konsonan');
    }

  },

  mounted() {
    this.loadData();
  }

});
</script>

<style lang="scss">
  #fiturs-wrapper {
    .fitur {
      font-family: 'Courier Prime', monospace;
    }
  }
</style>