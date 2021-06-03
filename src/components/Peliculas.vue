<template>
<div class="col-md-3">
  
        <div class="card m-2 alignt-center" >
          <div class="card-body">
               
            <img class="card-img-top" style="max-height: 300px; max-width:200px;" :src=pelicula.poster_path>
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
export default {
  
  props: {
    pelicula: {
      required: true,
      type: Movie,
    },
  },
 
};
</script>
<style>
  .class{
    color: red;
  }
</style>