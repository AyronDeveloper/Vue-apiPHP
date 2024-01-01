<script setup>
import {useGetData} from "../hook/getData.js"
import axios from 'axios';
import { ref, onMounted } from "vue"
import { useRoute, useRouter } from 'vue-router';

const apiUrl="http://localhost/proyectos/SistemasWeb/ComidaAzar/apiPHP/"
const route=useRoute()
const router=useRouter()
const nombre=ref("")
const imagen=ref("")
const id=route.params.id
const {data}=useGetData(`${id}`)

onMounted(() => {
    setTimeout(()=>{
        nombre.value=data.value.nombre
        imagen.value=data.value.imagen
    },50) 
})

const actualizar=async()=>{
    try{
        const f=new FormData()
        f.append("nombre",nombre.value)
        f.append("imagen",imagen.value)
        f.append("METHOD","PUT")
        const response = await axios.post(apiUrl,f,{params:{id:id}})
        //console.log(response.data)
        router.push("/")
    }catch(error){
        console.log(error)
    }
}


</script>
<template>
    <h1 class="text-center">Editar Comida</h1>
    <form @submit.prevent="actualizar" class="form-control">
      <input class="form-control mb-3" v-model="nombre" type="text" placeholder="Nombre de la comida"/>
      <input class="form-control mb-3" v-model="imagen" type="text" placeholder="Link de la imagen de la comida"/>
      <img :src="imagen" class="card-img mb-5">
      <button class="btn btn-warning d-block mx-auto mb-3" style="width: 200px;">Editar</button>
    </form>
</template>