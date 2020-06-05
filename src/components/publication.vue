<style scoped>
  .card-img-placeholder {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    opacity: .6;
    color: white;
  }
</style>

<template>
  <v-card width="600px" class="mb-3">
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
    <v-img max-height="300px" :src="url" v-on:dblclick="like">
      <template #placeholder>
        <div class="card-img-placeholder">
          <v-progress-circular indeterminate></v-progress-circular>
        </div>
      </template>
    </v-img>
    <v-card-text class="py-0 px-0">
      <v-container>
        <v-row class="px-3 pb-1">
          <v-icon @click="like" class="mr-4" :color="liked ? 'red' : 'icons'" v-text="liked ? 'mdi-heart': 'mdi-heart-outline'"></v-icon>
          <v-icon @click="comment" class="mr-4" color="icons">mdi-message-outline</v-icon>
          <v-icon @click="send" class="mr-4" color="icons">mdi-send-outline</v-icon>
          <v-spacer></v-spacer>
          <v-icon @click="save" color="icons" v-text="saved ? 'mdi-bookmark' : 'mdi-bookmark-outline'"></v-icon>
        </v-row>
        <v-row class="px-3 py-1">
          <span class="subtitle-2 black--text mr-3">{{ user }}</span>
          <a :href="description" target="_blank" class="caption black--text text-wrap">{{ description }}</a>
        </v-row>
        <v-divider class="mt-3 mb-1"></v-divider>
        <v-row align="center" class="px-3">
          <v-text-field ref="commentField" hide-details solo flat dense clearable label="Adicionar um comentário..." color="grey darken-3">
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
  data: () => ({
    liked: false,
    saved: false
  }),
  computed: {
    avatar_img() {
      return `https://avatars.dicebear.com/api/bottts/${this.$props.user}.svg`
    }
  },
  methods: {
    like() {
      this.liked = !this.liked;
    },
    comment() {
      this.$refs.commentField.focus();
    },
    send() {

    },
    save() {
      this.saved = !this.saved;
    }
  }
}
</script>