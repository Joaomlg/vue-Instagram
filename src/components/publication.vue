<template>
  <v-card width="500px" class="mb-3">
    <v-card-title class="py-0 px-0">
      <v-container>
        <v-row align="center">
          <v-avatar class="ml-3" size="38px" color="grey lighten-3">
            <v-img :src="avatar_img"></v-img>
          </v-avatar>
          <v-col cols="8" class="py-0">
            <span class="d-block subtitle-2 black--text">{{ user }}</span>
            <span class="d-block caption black--text">{{ local }}</span>
          </v-col>
          <v-spacer></v-spacer>
          <v-btn icon class="mr-3"><v-icon color="icons" v-text="$isMobile ? 'mdi-dots-vertical' : 'mdi-dots-horizontal'"></v-icon></v-btn>
        </v-row>
      </v-container>
    </v-card-title>
    <v-img max-height="300px" :src="url"></v-img>
    <v-card-text class="py-0 px-0">
      <v-container>
        <v-row class="px-3 pb-1">
          <v-icon class="mr-2" color="icons">mdi-heart-outline</v-icon>
          <v-icon class="mr-2" color="icons">mdi-message-outline</v-icon>
          <v-icon class="mr-2" color="icons">mdi-send-outline</v-icon>
          <v-spacer></v-spacer>
          <v-icon color="icons">mdi-bookmark-outline</v-icon>
        </v-row>
        <v-row class="px-3">
          <span class="subtitle-2 black--text mr-3">{{ user }}</span>
          <span class="caption black--text text-wrap">{{ description }}</span>
        </v-row>
        <v-divider class="mt-3 mb-1"></v-divider>
        <v-row align="center" class="px-3">
          <v-text-field hide-details solo flat dense label="Adicionar um comentário...">
            <template #append>
              <v-btn text class="px-1 ml-1" style="margin-right: -12px">Publicar</v-btn>
            </template>
          </v-text-field>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['user', 'local', 'description', 'url'],
  computed: {
    avatar_img() {
      return `https://avatars.dicebear.com/api/bottts/${this.$props.user}.svg`
    }
  }
}
</script>