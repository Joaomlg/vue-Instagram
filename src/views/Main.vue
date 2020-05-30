<template>
  <div class="d-flex flex-column justify-center">
    <publication v-for="i in 10" :key="i" class="mx-auto"></publication>
  </div>
</template>

<script>
import publication from '../components/publication'

export default {
  components: { publication }
}
</script>