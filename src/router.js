import { createRouter, createWebHistory } from "vue-router";


const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass:"active",
    routes:[
        {
            path:"/",
            name:"AllComidas",
            component:()=>import("./views/AllComidas.vue")
        },
        {
            path:"/add",
            name:"add",
            component:()=>import("./views/AgregarComidas.vue")
        },
        {
            path:"/editar/:id",
            name:"editar",
            component:()=>import("./views/EditarComida.vue")
        }
    ]
})

export default router