<script setup>
    import axios from "axios";
    import { useGetData } from "../hook/getData"
    import {ref} from "vue"

    const apiUrl="http://localhost/proyectos/SistemasWeb/ComidaAzar/apiPHP/"
    const { data }=useGetData()
    const AllData=ref([])

    setTimeout(()=>{
      AllData.value=data.value
    },50)

    const eliminar=async(idFood)=>{
      if(confirm("Desesas eliminar esta informacion?")){
        try{
          const f = new FormData()
          f.append("METHOD","DELETE")
          const response= await axios.post(apiUrl, f, {params:{id:idFood}})
          //console.log(response.data)
          AllData.value=AllData.value.filter(comida=>comida.id!==idFood)
          //console.log("Eliminaste la comida: "+idFood)
        }catch(error){
          console.log(error)
        }
      }else{
        console.log("Cancelado")
      }
    }

</script>

<template>
  <h1 class="text-center">Todas los platos</h1>
  <div class="row justify-content-center">
    <div v-for="food in AllData" class="card " style="width: 18rem;">
        <img :src="food.imagen" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ food.nombre }}</h5>
            <div class="btn-group">
                <router-link :to="`/editar/${food.id}`" class="btn btn-warning">Editar</router-link>
                <button @click="eliminar(food.id)" class="btn btn-danger">Eliminar</button>
            </div>
        </div>
    </div>
  </div>
</template>