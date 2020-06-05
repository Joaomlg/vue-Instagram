<style scoped>
  .card-hover {
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    background: black;
    opacity: 0.6;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<template>
  <v-hover v-slot:default="{ hover }">
    <v-card tile width="22.5vw" height="22.5vw" style="margin-bottom: calc(10vw / 8)">
      <v-img v-if="src" height="22.5vw" width="22.5vw" :src="src">
        <template #placeholder>
          <div class="card-hover">
            <v-progress-circular indeterminate></v-progress-circular>
          </div>
        </template>
      </v-img>
      <v-avatar v-else size="100%" color="black" tile>
        <v-icon color="grey darken-3">mdi-image-broken-variant</v-icon>
      </v-avatar>
      <v-fade-transition>
        <div v-if="hover && author" class="card-hover">
          <span class="text-center">{{ author }}</span>
        </div>
      </v-fade-transition>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ['src', 'author']
}
</script>