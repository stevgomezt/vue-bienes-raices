<script setup>
import { useForm, useField } from "vee-validate";

const { handleSubmit } = useForm();

const email = useField('email')
const password = useField('password')

</script>

<template>
    <v-card flat max-width="600" class="mx-auto my-10">
        <v-card-title class="text-h4 font-weight-bold">
            Iniciar Sesion
        </v-card-title>

        <v-card-subtitle class="text-h5 font-weight-bold">
            Inicia Sesion con tu Cuenta
        </v-card-subtitle>

        <v-form class="mt-5">
            <v-text-field
                type="email"
                label="Email"
                bg-color="blue-grey-lighten-5"
                v-model="email.value.value"
            />

            <v-text-field
                type="password"
                label="Password"
                bg-color="blue-grey-lighten-5"
                v-model="password.value.value"
            />

            <v-btn block color="pink-accent-3"> Iniciar Sesion </v-btn>
        </v-form>
    </v-card>
</template>

<style></style>
