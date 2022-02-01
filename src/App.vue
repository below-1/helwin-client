<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="/img/logo_2.png"
          transition="scale-transition"
          width="50"
          @click="$router.push('/')"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">About Me</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content class="white">
      <router-view/>
    </v-content>
    <v-footer
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="link in links"
          :key="link"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col
          class="indigo lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Helwin Edon</strong>
        </v-col>
      </v-row>
    </v-footer>
    <v-bottom-navigation app fixed dark hide-on-scroll class="align-center">
      <v-btn to="/parser">
        <span>Parser</span>
        <v-icon>spellcheck</v-icon>
      </v-btn>

      <v-btn to="/letters">
        <span>Rangkuman Huruf</span>
        <v-icon>subject</v-icon>
      </v-btn>

      <v-btn to="/fiturs">
        <span>Rangkuman Fitur</span>
        <v-icon>list</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    links: [
      'About Me',
      'Contact'
    ],
    foo: 'bar'
  }),
});
</script>
