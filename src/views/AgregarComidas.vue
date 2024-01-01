<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const apiUrl="http://localhost/proyectos/SistemasWeb/ComidaAzar/apiPHP/"
const nombre=ref("")
const imagen=ref("")
const router=useRouter()

const crear=async()=>{
  try{
    const f = new FormData()
    f.append("nombre",nombre.value)
    f.append("imagen",imagen.value)
    f.append("METHOD","POST")
    const response=await axios.post(apiUrl,f)
    //console.log(response.data)
    router.push("/")
  }catch(error){
    console.log(error)
  }
}
</script>
<template>
    <h1 class="text-center">Agregar Comida</h1>
    <form @submit.prevent="crear" class="form-control">
      <input class="form-control mb-3" v-model="nombre" type="text" placeholder="Nombre de la comida"/>
      <input class="form-control mb-3" v-model="imagen" type="text" placeholder="Link de la imagen de la comida"/>
      <button class="btn btn-success d-block mx-auto mb-3" style="width: 200px;">Agregar</button>
    </form>
</template>