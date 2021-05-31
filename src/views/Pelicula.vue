<template>
    <div>
       <Pelicula :pelicula="pelicula" />
     
         
     <div class=" card align-content-center mt-5" style="width: 50rem;">
       <div class="">
            <h1 class="mb-5">Title: {{pelicula.title}}</h1>
            <h5 class="mb-2">Release: {{pelicula.release_date}}</h5>
            <h5 class="mb-2">Vote Averge: {{pelicula.vote_average}}</h5>
            <h5 class="mb-2">Original Language: {{pelicula.original_language}}</h5>
            <h5 class="mb-1" style="text-descoration:">Overview</h5>
            <h6 class="mb-2 display-7">{{pelicula.overview}}</h6>
            <div>
                <h5>Genres:</h5>
                <li
                    class="display-9"
                    style="text-weigth:bold;"
                    v-for="genre in pelicula.genres"
                    :key="genre.name">
                    {{genre.name}}
                </li>
            </div>
       </div>
        <div class="mt-5">
             
            <img class="card-img-top text-center pb-4" style="display: block;margin: 0 auto;max-height: 700px; max-width:500px;" :src="pelicula.poster_path">
        </div>
       
     
    
      </div>
    </div>
    
</template>

<script>
import api from "@/services/api.service";
import Movie from "@/models/Movie";
import Pelicula from "@/components/Pelicula";

export default{
    components: {
        Pelicula,
    },
    data(){
        return{
         pelicula: {},
    };
    },
    mounted(){
         this.getPelicula();
    },
    methods:{
    async getPelicula(){
        console.log(this.$route.params.id);
        const{ data } = await api.getMovie(this.$route.params.id);
        this.pelicula = new Movie(data);
          },
    },
}
</script>
<style>
#nav{
  background-color: blue;
  text-align: right;
  font-size: 2rem;
  color: white;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
}
</style>