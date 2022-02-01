<template>
  <div id="letters">
     <v-container>
       <v-row class="grey lighten-4">
         <v-col cols=12>
           <div class="headline text-center font-weight-bold">
             Rangkuman Huruf
           </div>
         </v-col>
       </v-row>
       <v-divider class="my-8"/>
       <v-row>
         <v-col cols=12>
           <div class="headline">
             Vocal
           </div>
           <v-simple-table>
             <template v-slot:default>
               <thead>
                 <tr>
                   <td>Huruf</td>
                   <td>Jumlah</td>
                 </tr>
               </thead>
               <tbody>
                 <tr v-for="(item, idx) in vocals" :key="`vocal-row-${idx+1}`">
                   <td class="font-weight-bold">{{ item.letter }}</td>
                   <td>{{ thousand(item.total) }}</td>
                 </tr>
               </tbody>
             </template>
           </v-simple-table>
         </v-col>
       </v-row>
       <v-row>
         <v-col cols=12>
           <div class="headline">
             Konsonan
           </div>
           <v-simple-table>
             <template v-slot:default>
               <thead>
                 <tr>
                   <td>Huruf</td>
                   <td>Onset</td>
                   <td>Coda</td>
                   <td>Total</td>
                 </tr>
               </thead>
               <tbody>
                 <tr v-for="item in consonants" :key="`consonant-row-${item._id}`">
                   <td class="font-weight-bold" >{{ item.letter }}</td>
                   <td>{{ thousand(item.syll_detail.onset) }}</td>
                   <td>{{ thousand(item.syll_detail.coda) }}</td>
                   <td>{{ thousand(item.total) }}</td>
                 </tr>
               </tbody>
             </template>
           </v-simple-table>
         </v-col>
       </v-row>
     </v-container>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { letters_for } from '@/service/letters';
import { thousand } from '@/service/common';


export default Vue.extend({
  data: () => ({
    vocals: [] as any[],
    consonants: [] as any[],
    thousand
  }),
  methods: {
    async loadData() {
      this.vocals = await letters_for('vocal');
      this.consonants = await letters_for('konsonan');
    }
  },
  mounted() {
    this.loadData();
  }
});
</script>

<style lang="scss">
#letters {
  table {
    font-family: 'Courier Prime', monospace;
  }
}
</style>