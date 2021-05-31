<template>
<div class="col-md-4">
 
    </div>
  
</template>

<script>
import Movie from "@/models/Movie";
import { imageChecker } from "@/mixins";

export default {
  //{{imageChecker(pelicula.poster_path)}}
  props: {
    pelicula: {
      required: true,
      type: Movie,
    },
   mixins: [imageChecker]
  },
  computed: {

    peliculaId() {
      if (this.pelicula.id >= 100) return this.pelicula.id;
      if (this.pelicula.id >= 10) return `0${this.pelicula.id}`;
      return `00${this.pelicula.id}`;
    },
  },

};
</script>
<style>
  .class{
    color: red;
  }
</style>