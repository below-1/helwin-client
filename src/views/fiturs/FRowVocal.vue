<template>
  <div>
    <v-row class="mt-4">
      <v-col sm="12">
        <div class="headline">
           {{ label }}
        </div>
      </v-col>
    </v-row>

    <v-list class="fitur">
      <template v-for="fitur in fiturs">

        <v-list-group :key="`fit_${fitur._id}`">

          <template v-slot:activator>
            <v-list-item-icon>
              <v-avatar size=30 dark color="indigo" class="white--text font-weight-bold">
                {{ fitur.plus.points.length + fitur.minus.points.length }}
              </v-avatar>
            </v-list-item-icon>
            <v-list-item-title>{{ fitur.name }}</v-list-item-title>
          </template>

          <v-list-group
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-icon>
                <v-avatar size=30 dark color="indigo" class="white--text font-weight-bold">
                  {{ fitur.plus.points.length }}
                </v-avatar>
              </v-list-item-icon>
              <v-list-item-title>+ PLUS</v-list-item-title>
            </template>

            <v-simple-table class="ml-12">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left"></th>
                    <th class="text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="fd in fitur.plus.points" :key="`fit_${fitur._id}_${fd.letter}`">
                    <td>{{ fd.letter }}</td>
                    <td>{{ fd.total }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-list-group>

          <v-list-group
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-icon>
                <v-avatar size=30 dark color="indigo" class="white--text font-weight-bold">
                  {{ fitur.minus.points.length }}
                </v-avatar>
              </v-list-item-icon>
              <v-list-item-title>- MINUS</v-list-item-title>
            </template>

            <v-simple-table class="ml-12">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left"></th>
                    <th class="text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="fd in fitur.minus.points" :key="`fit_${fitur._id}_${fd.letter}`">
                    <td>{{ fd.letter }}</td>
                    <td>{{ fd.total }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-list-group>

        </v-list-group>
      </template>
    </v-list>
  </div>
</template>


<script lang="ts">
import Vue, { PropType } from 'vue';
import { thousand } from '@/service/common';


export default Vue.extend({
  name: 'f-row-vocal',
  props: {
    label: String,
    fiturs: [] as any[]
  },
  data: () => ({
    thousand
  })
});
</script>