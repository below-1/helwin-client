<template>
   <div id="parser">
     <v-container>
       <v-row class="grey lighten-4">
         <v-col cols=12>
           <div class="headline text-center font-weight-bold">
             Parser
           </div>
         </v-col>
       </v-row>
       <v-divider/>
       <v-row class="mt-8">
         <v-col cols=10 offset=1>
           <v-autocomplete
            label="Masukan Kata"
            @update:search-input="search"
            @change="parse"
            v-model="keyword"
            :items="completions"
           >
           </v-autocomplete>
         </v-col>
       </v-row>
       <v-row class="mt-8 result">
         <v-col cols=12>
           <div class="tokens_joined">{{tokens_joined}}</div>
         </v-col>
       </v-row>
       <v-row class="result">
         <v-col cols=8 offset=2>
           <v-list dense>
             <template v-for="(token, idx) in tokens">
               <v-list-item :key="`token-${idx+1}`">
                 <v-list-item-content>
                   <v-list-item-title>
                     <div class="title">{{ idx + 1 }}. {{ token.token }}</div>
                   </v-list-item-title>
                   <v-list-item-subtitle class="body-2">
                     <div>Onset: <span class="body-1 font-weight-bold">{{ token.onset }}</span></div>
                     <div>Nucleus: <span class="body-1 font-weight-bold">{{ token.nucleus }}</span></div>
                     <div>Coda: <span class="body-1 font-weight-bold">{{ token.coda }}</span></div>
                   </v-list-item-subtitle>
                 </v-list-item-content>
               </v-list-item>
               <v-divider :key="`token-sep-${idx+1}`"/>
             </template>
           </v-list>
         </v-col>
       </v-row>
       <v-divider class="my-8"/>
     </v-container>
   </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { search_kata, parse_tokens } from '@/service/kata';


export default Vue.extend({
  data: () => ({
    completions: [],
    keyword: '',
    tokens: [],
    has_result: false,
    char_idx: 0, 
    chars: [] as string[],
    char: '',
    char_headers: [] as string[],
    char_items: [] as any[]
  }),
  computed: {
    tokens_joined(): string {
      return this.tokens.map((it: any) => it.token).join('-');
    }
  },
  methods: {
    async search(kata: string) {
      if (!kata || kata.length == 0) {
        return
      }
      const result = await search_kata(kata);
      this.completions = result.map((it: any) => ({
        value: it.word,
        text: it.word
      }));
    },
    async parse(kata: string) {
      if (!kata || kata.length == 0) {
        return
      }
      this.tokens = (await parse_tokens(kata)).tokens;
    },
    nextCharFitur() {
      if (this.char_idx >= this.chars.length - 1) {
        return;
      }
      this.char_idx += 1;
    },
    prevCharFitur() {
      if (this.char_idx <= 0) {
        return;
      }
      this.char_idx -= 1;
    }
  }
});
</script>

<style lang="scss">
  #parser {
    .result {
      .tokens_joined {
        font-family: 'Courier Prime', monospace;
        text-align: center;
        font-weight: bold;
        font-size: 36px;
      }
    }
  }
</style>