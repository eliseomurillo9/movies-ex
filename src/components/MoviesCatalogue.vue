<template>
  <v-container>
    <div class="d-flex justify-space-between">
      <v-card v-for="movie in movies" :key="movie.id" max-width="250px" class="d-flex flex-column justify-center">
        <v-img :src="movie.poster" position="center center">
        </v-img>
        <h3 class="text-center">{{movie.title}}</h3>
        <v-icon color="yellow">mdi-star-settings</v-icon>
        <span class="text-center font-weight-bold">{{movie.rating}}</span>
          <v-card-actions class="white justify-space-between mb-5 mx-auto" style="width: 100px" >
           <router-link :to=" {name: 'movie', params: {movieId: movie.id}}">  <v-btn color="primary" elevation="2" small raised rounded>More</v-btn></router-link>
            <v-icon slot="icon" size="20" color="red"> mdi-cards-heart</v-icon>
          </v-card-actions>

      </v-card>
    </div>

  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'MoviesCatalogue',

  data: () => ({

  }),


  methods: {

  },

  created() {
    console.log(this.movies);
  },

  computed: (
    mapGetters([
      'movies'
    ])
  )
}
</script>