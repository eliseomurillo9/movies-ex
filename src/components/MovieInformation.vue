<template>
  <v-container >
    <div max-width="300px">
      <router-link :to=" {name: 'home' }"> <v-btn> <v-icon>mdi-arrow-left-circle</v-icon> </v-btn></router-link>
      <v-img :src="getMovieInfo().poster" class="mx-auto" max-width="250px">
    </v-img>
    <h3 class="text-center">{{getMovieInfo().title}}</h3>
    <p class="text-center">{{getMovieInfo().description}}</p>
    </div>
    

  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'MovieInformation',
  props: { 'movieId': String },

  data: () => ({
  }),


  methods: {
    getMovieInfo() {
      return this.movies.find(movie => movie.id === Number(this.movieId));
      
    },

  },

  created() {
    console.log(this.getMovieInfo());
  },

  computed: (
    mapGetters([
      'movies'
    ])
  )
}
</script>