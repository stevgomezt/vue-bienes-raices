<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <v-card elevation="3" max-width="1200" class="mx-auto">
        <v-layout>
            <v-app-bar color="blue-darken-1">
                <template v-slot:prepend>Iz</template>
                <template v-slot:append>De</template>
            </v-app-bar>
            <v-main>
                <v-container>
                    <RouterView />
                </v-container>
            </v-main>
        </v-layout>
    </v-card>
</template>

<style scoped></style>
