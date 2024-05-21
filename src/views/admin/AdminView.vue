<script setup>
import usePropiedades from "../../composables/usePropiedades.js";
import { propertyPrice } from "../../helpers/index";
const { propiedadesCollection, deleteItem } = usePropiedades();

// console.log(propiedadesCollection);
</script>

<template>
    <h2 class="text-center text-h3 my-5 mt-5 font-weight-bold">Admin Panel</h2>

    <v-btn class="" color="blue" variant="flat" :to="{ name: 'nueva-propiedad' }">Nueva Propiedad</v-btn>

    <v-card class="mx-auto mt-10" flat>
        <v-list>
            <v-list-item v-for="propiedad in propiedadesCollection" :key="propiedad.id" border>
                <template v-slot:prepend>
                    <v-list-item-media :start="true">
                        <img width="180" :src="propiedad.imagen" alt="" />
                    </v-list-item-media>
                </template>

                <v-list-item-title class="ml-5">{{
                    propiedad.titulo
                    }}</v-list-item-title>
                <v-list-item-subtitle class="ml-5">{{
                    propertyPrice(propiedad.precio)
                    }}</v-list-item-subtitle>

                <template v-slot:append>
                    <v-btn color="info" flat class="mr-2" :to="{
                        name: 'editar-propiedad',
                        params: { id: propiedad.id },
                    }">
                        Editar
                    </v-btn>
                    <v-btn color="red-darken-3" flat class="mr-2" @click="deleteItem(propiedad.id)">
                        Eliminar
                    </v-btn>
                </template>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<style scoped></style>
