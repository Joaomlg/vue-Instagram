<template>
  <div class="d-flex flex-wrap justify-space-around">
    <exploreImgCard 
      v-for="(item, i) in items" :key="i"
      :src="item.download_url"
      :author="item.author"
    ></exploreImgCard>
    <v-btn rounded color="white" class="d-block mt-3" @click="loadPage">Ver mais</v-btn>
  </div>
</template>

<script>
import exploreImgCard from '../components/exploreImgCard'
import axios from 'axios'

export default {
  components: { exploreImgCard },
  data: () => ({
    items: [],
    img_per_page: 0
  }),
  methods: {
    loadPage() {
      for (let i=0; i<this.img_per_page; i++) {
        axios.get(`https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/info`)
        .then(response => {
          this.items.push(response.data);
        })
        .catch(() => {
          this.items.push({
            author: null,
            download_url: null
          })
        })
      }
    }
  },
  created() {
    this.img_per_page = Math.floor((window.innerHeight - (this.$isMobile ? 112 : 56)) / (window.innerWidth * 0.225) + 1) * 4;
    this.loadPage();
  }
}
</script>