<style>
  html::-webkit-scrollbar {
    display: none;
  }

  .search-field > .v-input__control > .v-input__slot {
    margin: 0 !important;
  }

  .search-field > .v-input__control > .v-text-field__details {
    display: none !important;
  }
</style>

<template>
  <v-app>
    <v-app-bar absolute v-if="!$isMobile" app flat elevation="1" color="appBarBackground" :dark="$dark" scroll-target="#scroll">
      <v-icon color="icons" size="32px">mdi-instagram</v-icon>
      <v-spacer></v-spacer>
      <v-text-field rounded filled single-line dense prepend-inner-icon="mdi-magnify" label="Pesquisar" clearable class="search-field"></v-text-field>
      <v-spacer></v-spacer>
      <v-icon class="mr-5" color="icons" size="32px" @click="$router.push('/')">mdi-home</v-icon>
      <v-icon class="mr-5" color="icons" size="32px" >mdi-send-outline</v-icon>
      <v-icon class="mr-5" color="icons" size="32px" @click="$router.push('/explore')">mdi-compass-outline</v-icon>
      <v-icon class="mr-5" color="icons" size="32px">mdi-heart-outline</v-icon>
      <v-avatar color="grey" size="28px">
        <v-img src="https://avatars1.githubusercontent.com/u/40251227?v=4"></v-img>
      </v-avatar>
    </v-app-bar>
    <v-app-bar v-else app flat elevation="1" color="appBarBackground" :dark="$dark">
      <v-icon color="icons" size="32px">mdi-instagram</v-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title style="font-family: 'Chelsea Market', cursive;">Vue</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon color="icons" size="32px">mdi-send-outline</v-icon>
    </v-app-bar>
    <v-content>
      <v-sheet id="scroll" class="overflow-y-auto px-3 py-5" color="appBackground" :height="$isMobile ? 'calc(100vh - 56px - 56px)' : 'calc(100vh - 56px)'">
        <router-view></router-view>
      </v-sheet>
    </v-content>
    <v-footer absolute v-if="$isMobile" height="56px" color="appBarBackground" class="d-flex justify-space-around">
      <v-icon color="icons" size="32px" @click="$router.push('/')">mdi-home</v-icon>
      <v-icon color="icons" size="32px" @click="$router.push('/explore')">mdi-magnify</v-icon>
      <v-icon color="icons" size="32px">mdi-plus-circle-outline</v-icon>
      <v-icon color="icons" size="32px">mdi-heart-outline</v-icon>
      <v-avatar color="grey" size="28px">
        <v-img src="https://avatars1.githubusercontent.com/u/40251227?v=4"></v-img>
      </v-avatar>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    //
  })
};
</script>
