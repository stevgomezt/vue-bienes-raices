import { defineStore } from "pinia";
import { useFirebaseAuth } from "vuefire";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useAuthStore = defineStore("auth", () => {
    const auth = useFirebaseAuth();

    const login = ({ email, password }) => {
        // console.log(auth);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    };
    return {
        login,
    };
});
