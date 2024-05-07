<script setup>
import { useForm, useField } from "vee-validate";
import { useFirebaseAuth } from "vuefire";
import { signInWithEmailAndPassword } from "firebase/auth";
import { loginSchema } from "../validation/loginSchema.js";

const { handleSubmit } = useForm({ validationSchema: loginSchema });
const auth = useFirebaseAuth();

console.log(auth);

const email = useField("email");
const password = useField("password");

console.log(email);
console.log(password);

const submit = handleSubmit((values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
});
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
                :error-messages="email.errorMessage.value"
                class="mb-3"
            />

            <v-text-field
                type="password"
                label="Password"
                bg-color="blue-grey-lighten-5"
                v-model="password.value.value"
                :error-messages="password.errorMessage.value"
                class="mb-3"
            />

            <v-btn @click="submit" block color="pink-accent-3">
                Iniciar Sesion
            </v-btn>
        </v-form>
    </v-card>
</template>

<style></style>
