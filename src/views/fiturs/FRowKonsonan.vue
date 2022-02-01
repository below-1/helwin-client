<template>
  <div>
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
					          <th class="text-left">Onset</th>
					          <th class="text-left">Coda</th>
					          <th class="text-left">Total</th>
					        </tr>
					      </thead>
					      <tbody>
					        <tr v-for="fd in fitur.plus.points" :key="`fit_${fitur._id}_${fd.letter}`">
					          <td>{{ fd.letter }}</td>
					          <td>{{ fd.onset }}</td>
					          <td>{{ fd.coda }}</td>
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
					          <th class="text-left">Onset</th>
					          <th class="text-left">Coda</th>
					          <th class="text-left">Total</th>
					        </tr>
					      </thead>
					      <tbody>
					        <tr v-for="fd in fitur.minus.points" :key="`fit_${fitur._id}_${fd.letter}`">
					          <td>{{ fd.letter }}</td>
					          <td>{{ fd.onset }}</td>
					          <td>{{ fd.coda }}</td>
					          <td>{{ fd.total }}</td>
					        </tr>
					      </tbody>
					    </template>
			      </v-simple-table>
	    		</v-list-group>

	    	</v-list-group>
    	</template>
    </v-list>

    <!--
  	<template v-for="fitur in fiturs">
  	  <div :key="`fit_${fitur._id}`">
	      <v-row no-gutters class="fitur">
	        <v-col cols=5 align-self="center">
	          <div class="body-1 text-uppercase">
	             {{ fitur.name }}
	          </div>
	        </v-col>
	      </v-row>

	      <v-row no-gutters>
	        <v-col cols=5 offset=1 align-self="center">
	          <div class="body-1 text-uppercase">
	             +
	          </div>
	        </v-col>
	      </v-row>
	      <v-simple-table class="ml-12">
	      	<template v-slot:default>
			      <thead>
			        <tr>
			          <th class="text-left"></th>
			          <th class="text-left">Coda</th>
			          <th class="text-left">Onset</th>
			          <th class="text-left">Total</th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr v-for="fd in fitur.plus.points" :key="`fit_${fitur._id}_${fd.letter}`">
			          <td>{{ fd.letter }}</td>
			          <td>{{ fd.coda }}</td>
			          <td>{{ fd.onset }}</td>
			          <td>{{ fd.total }}</td>
			        </tr>
			      </tbody>
			    </template>
	      </v-simple-table>

  	  </div>
      <v-divider :key="`div_fit_${fitur._id}`"/>
    </template>
  	-->

  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { thousand } from '@/service/common';

export default Vue.extend({
	name: 'f-row-konsonan',
	props: {
    fiturs: [] as any[]
  },
  data: () => ({
    thousand
  })
});
</script>