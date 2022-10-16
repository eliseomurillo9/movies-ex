<template>
  <div class="movie">
  <MovieInformation movieId = {this.$route.params.movieId}></MovieInformation>
  </div>
</template>

<script>
import MovieInformation from '@/components/MovieInformation.vue';

export default {

    name: "Movie",
    data: () => ({
    }),
    methods: {

    },
    created() {
    },
    computed: {

    },
    components: { MovieInformation }
}
</script>