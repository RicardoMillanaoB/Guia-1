<template>
<div class="col-md-3">
  
        <div class="card m-2" >
          <div class="card-body">
               
            <img class="card-img-top" style="max-height: 300px; max-width:200px;" src="../imagen.png">
        <p></p>
      
         
            <router-link class="card-title text-left text-uppercase font-weight-bold" :to="`/pelicula/${pelicula.id}`">{{pelicula.title}}</router-link>
          
          <p class="card-subtitle text-warning display-7">{{pelicula.vote_average}}</p>
          <p>{{pelicula.release_date}}</p>
         </div>
          
        </div>
 
    </div>
  
</template>

<script>
import Movie from "@/models/Movie";
import { imageChecker } from "@/mixins";

export default {
  //no es posible agregar una imagen en esta view
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