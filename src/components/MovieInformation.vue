<template>
  <v-container>
    <div max-width="300px">
      <router-link :to=" {name: 'home' }">
        <v-btn>
          <v-icon>mdi-arrow-left-circle</v-icon>
        </v-btn>
      </router-link>
      <v-img :src="movieInfo.poster" class="mx-auto" max-width="250px">
      </v-img>
      <h3 class="text-center">{{movieInfo.title}}</h3>
      <p class="text-center">{{movieInfo.description}}</p>
    </div>


  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { getFilms } from '../service/films-service'

export default {
  name: 'MovieInformation',
  props: { 'movieId': String },

  data: () => ({
    movieInfo: '',
  }),


  methods: {
    async getMovieInfo() {
      await getFilms();
      this.movieInfo = this.films.find(movie => movie.id === Number(this.movieId));
      console.log(this.movieInfo);
    },

  },

  mounted() {
    getFilms();

    this.getMovieInfo()
  },

  computed: (
    mapGetters([
      'films'
    ])
  )
}
</script>