import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";
import { useFirebaseAuth } from "vuefire";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

export const useAuthStore = defineStore("auth", () => {
    const auth = useFirebaseAuth();

    const authUser = ref(null);

    const router = useRouter();

    const errorMsg = ref("");

    const errorCodes = {
        "auth/invalid-credential": "Usuario o Contrasena Incorrectos",
    };

    onMounted(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                authUser.value = user;
            }
        });
    });

    const login = ({ email, password }) => {
        // console.log(auth);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                authUser.value = user;
                // console.log(authUser.value);
                router.push({ name: "admin-propiedades" });
            })
            .catch((error) => {
                // console.log(error.code);
                // console.log(error.message);
                errorMsg.value = errorCodes[error.code];
            });
    };

    const logout = () => {
        signOut(auth)
            .then(() => {
                authUser.value = null;
                router.push({ name: "login" });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const hasError = computed(() => {
        return errorMsg.value;
    });

    const isAuth = computed(() => {
        return authUser.value;
    });

    return {
        login,
        hasError,
        errorMsg,
        isAuth,
        logout,
    };
});
