<template>
    <div class="pagina">
        <nav id="nav">
         <a class="" @click="getTop(1)">Top Rated</a>
         <a class="" @click="getPeliculas(1)">Populares</a>
        </nav>
        <h1>Lista de peliculas</h1>
        <div v-if="loading" class="text-center my-3 d-flex justify-content-center">
          <b-spinner variant="primary" style="width: 5rem; height: 5rem" />
        </div>
         <div v-else class="row mx-0">
    
      
            
                        
            <Peliculas v-for="pelicula in peliculas" :key="pelicula.id" :pelicula="pelicula">
               {{pelicula.title}}
             </Peliculas>
        <p></p>
        <div class="boton">
            <button class="btn btn-outline-primary m-2 " @click="getPeliculas(page + 1)">
          Ver mas
        </button>
     
        </div>
      
    </div>

  </div>
</template>
<script>
import Movie from "@/models/Movie";
import Peliculas from "@/components/Peliculas";
import api from "@/services/api.service";

export default{
    components: {
        Peliculas,
    },
    data() {
        return{
            page: 1,
            loading: true,
            peliculas: [],
        };
    },
    mounted(){
        this.getPeliculas(1);
    },
    methods:{
        async getPeliculas(page){
            this.page = page;
            const{ data } = await api.getPopular(this.page);
            this.peliculas = data.results;
            //this.peliculas = api.getTopRated(1);
            this.loading = false;
        },
        async getTop(page){
          this.page = page;
          const{data} = await api.getTopRated(this.page);
          this.peliculas = data.results;
          this.loading = false;
        },

        async getPelicula(movieId){
            const { data } = await api.getMovie(movieId);
            return new Movie(data);
        },
    },
};


</script>
<style>
.pagina{


}
#nav{
  background-color: blue;
  text-align: right;
  font-size: 2rem;
  color: white;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
}
a{
  margin-right: 10px;
}

.boton{
  display: flex;
  justify-content: center;
  
}

button{
  width: 400px;
}

</style>