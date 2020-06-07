<template>
  <div class="d-flex flex-column justify-center">
    <publication v-for="(item, i) in items" :key="i" 
      class="mx-auto"
      :user="item.author"
      :description="item.url"
      :url="item.download_url"
    ></publication>
  </div>
</template>

<script>
import axios from 'axios'
import publication from '../components/publication'

export default {
  components: { publication },
  data: () => ({
    items: []
  }),
  mounted() {
    for (let i=0; i<10; i++) {
      axios.get(`https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/info`)
      .then(response => {
        this.items.push(response.data);
      })
    }
  }
}
</script>