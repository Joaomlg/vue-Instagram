<template>
  <v-card min-height="100%" width="100%">
    <v-container v-if="!$isMobile" fluid class="py-0">
      <v-row>
        <v-col cols="3">
          <v-img :src="user.avatar_url"></v-img>
          <h2 class="text-center mt-3 black--text">{{ user.name }}</h2>
          <h3 class="text-center font-weight-regular black--text">{{ user.bio }}</h3>
          <h4 class="font-weight-regular mt-5 black--text"><v-icon color="icons" class="mr-1">mdi-account</v-icon>{{ user.login }}</h4>
          <h4 class="font-weight-regular black--text"><v-icon color="icons" class="mr-1">mdi-map-marker</v-icon>{{ user.location }}</h4>
          <h4 class="font-weight-regular black--text"><v-icon color="icons" class="mr-1">mdi-briefcase</v-icon>{{ user.company }}</h4>
          <v-footer absolute color="white">
            <span class="mt-3 d-block">Link: <a :href="user.html_url" target="blank" class="black--text">{{ user.html_url }}</a></span>
          </v-footer>
        </v-col>
        <v-col cols="9">
          <h2 class="black--text mb-3">Repositórios</h2>
          <div class="d-flex flex-wrap justify-space-between">
            <v-card outlined v-for="(item, i) in repos" :key="i" class="mb-3" width="49%" @click="open_new_tab(item.html_url)">
              <v-card-title class="pt-4 pb-0">{{ item.name }}</v-card-title>
              <v-card-text class="pb-0">{{ item.description }}</v-card-text>
              <v-card-actions class="px-4 pt-0 pb-4">
                <v-icon size="15px" class="mr-1">mdi-script-text</v-icon>
                <span class="caption">{{ item.language }}</span>
                <v-icon size="16px" class="ml-3 mr-1">mdi-star</v-icon>
                <span class="caption">{{ item.stargazers_count }}</span>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else fluid class="py-0">
      <v-row align="center">
        <v-col cols="6">
          <v-img :src="user.avatar_url"></v-img>
        </v-col>
        <v-col cols="6">
          <h2 class="text-center black--text">{{ user.name }}</h2>
          <h3 class="text-center font-weight-regular black--text">{{ user.bio }}</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h4 class="font-weight-regular black--text"><v-icon color="icons" class="mr-1">mdi-account</v-icon>{{ user.login }}</h4>
          <h4 class="font-weight-regular black--text"><v-icon color="icons" class="mr-1">mdi-map-marker</v-icon>{{ user.location }}</h4>
          <h4 class="font-weight-regular black--text"><v-icon color="icons" class="mr-1">mdi-briefcase</v-icon>{{ user.company }}</h4>
          <span class="mt-3 d-block">Link: <a :href="user.html_url" target="blank" class="black--text">{{ user.html_url }}</a></span>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12">
          <h2 class="black--text mb-3">Repositórios</h2>
          <div class="d-flex flex-wrap justify-center">
            <v-card outlined v-for="(item, i) in repos" :key="i" class="mb-3" width="100%" @click="open_new_tab(item.html_url)">
              <v-card-title class="pt-4 pb-0">{{ item.name }}</v-card-title>
              <v-card-text class="pb-0">{{ item.description }}</v-card-text>
              <v-card-actions class="px-4 pt-0 pb-4">
                <v-icon size="15px" class="mr-1">mdi-script-text</v-icon>
                <span class="caption">{{ item.language }}</span>
                <v-icon size="16px" class="ml-3 mr-1">mdi-star</v-icon>
                <span class="caption">{{ item.stargazers_count }}</span>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    user: {},
    repos: []
  }),
  methods: {
    open_new_tab(url) {
      window.open(url, '_blank').focus();
    }
  },
  mounted() {
    axios.get('https://api.github.com/users/joaomlg')
    .then(response => {
      this.user = response.data;
    })

    axios.get('https://api.github.com/users/joaomlg/repos')
    .then(response => {
      this.repos = response.data;
    })
  }
}
</script>