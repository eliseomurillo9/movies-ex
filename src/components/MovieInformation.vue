<template>
  <v-container>


  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'MovieInformation',

  data: () => ({
    movieInformation: null,

  }),


  methods: {
getMovieInfo(){
 movieInformation = this.movies.filter(movie => movie.id === this.$route.params.movieId);
 console.log('hello', movieInformation, this.$route.params.movieId);
}
  },

  created() {

  },

  computed: (
    mapGetters([
      'movies'
    ])
  )
}
</script>