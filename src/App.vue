<script setup>
</script>

<template>
  <div class="container border pb-5">
    <div class="btn-group">
        <router-link class="btn btn-primary" to="/">Inicio</router-link>
        <router-link class="btn btn-success" to="/add">Agregar</router-link>
    </div>
    <RouterView/>
  </div>
</template>
