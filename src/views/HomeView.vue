<script setup>
import usePropiedades from "../composables/usePropiedades.js";
import Propiedad from "../components/Propiedad.vue";
import { propertyPrice } from "../helpers/index";
const { propiedadesCollection } = usePropiedades();
</script>

<template>
    <h1 class="text-center text-h3 font-weight-bold my-5">Vue Bienes Raices</h1>
    <v-card flat class="py-10">
        <v-row>
            <Propiedad
                v-for="propiedad in propiedadesCollection"
                :key="propiedad.id"
                :propiedad="propiedad"
                :price="propertyPrice"
            />
        </v-row>
    </v-card>
</template>

<style></style>
