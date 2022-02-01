<template>
  <div id="home">
    <div class="hero">
      <v-slide-y-transition>
        <div class="font-weight-bold lead">S I F O N O</div>
      </v-slide-y-transition>
      <div class="font-weight-bold second">Aplikasi Fonemik</div>
    </div>
    <v-container>
      <v-row style="margin-bottom: 84px;">

        <v-col
          v-for="(menu, idx) in menus"
          :key="`app-menu-${idx + 1}`"
          cols="12"
        >
          <v-card class="text-center" :to="menu.to">
            <v-card-text v-bind:class="menu.color" class="white--text">
              <v-icon dark size="100">{{menu.icon}}</v-icon>
            </v-card-text>
            <v-card-title class="d-flex justify-center">
              <div class="text-center">{{menu.title}}</div>
            </v-card-title>
            <v-card-text>
              {{menu.desc}}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-divider/>
      <v-row>
        <v-col cols="12">
          <div class="headline font-weight-bold text-center my-4">
            Tentang Applikasi Ini
          </div>
          <div class="px-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Eu sem integer vitae justo eget. Arcu risus quis varius quam. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Lectus sit amet est placerat in.
            </p>
            <p>
              Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Vestibulum lorem sed risus ultricies tristique nulla. Gravida in fermentum et sollicitudin ac orci. Quis commodo odio aenean sed adipiscing diam donec. Rutrum tellus pellentesque eu tincidunt. Arcu bibendum at varius vel pharetra. Ut consequat semper viverra nam. Dolor purus non enim praesent elementum facilisis leo vel. Sagittis purus sit amet volutpat consequat. Lectus sit amet est placerat.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'home',
  data: () => ({
    menus: [
      {
        title: 'Parser',
        to: '/parser',
        desc: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Etiam erat velit scelerisque in dictum non consectetur a erat. 
          Pellentesque dignissim enim sit amet venenatis urna cursus.
        `,
        color: 'indigo',
        icon: 'spellcheck'
      },
      {
        title: 'Rangkuman Huruf',
        to: '/letters',
        desc: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Etiam erat velit scelerisque in dictum non consectetur a erat. 
          Pellentesque dignissim enim sit amet venenatis urna cursus.
        `,
        color: 'pink',
        icon: 'subject'
      },
      {
        title: 'Rangkuman Fitur',
        to: '/fiturs',
        desc: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Etiam erat velit scelerisque in dictum non consectetur a erat. 
          Pellentesque dignissim enim sit amet venenatis urna cursus.
        `,
        color: 'teal',
        icon: 'list'
      },
    ]
  })
});
</script>

<style lang="scss">
  $layer-color: rgba(255, 255, 255, 0.5);
  #home {
    .hero {
      width: 100vw;
      height: 500px;
      background-attachment: fixed;
      background-position: center;
      background-size: cover;
      background-image: 
        linear-gradient(to bottom, $layer-color, $layer-color),
        url(/img/bg.png);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: 'Courier Prime', monospace;
      text-align: center;

      .lead {
        font-size: 48px;
      }
      .second {
        font-size: 24px;
      }
    }
  }
</style>
