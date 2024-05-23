import { computed, ref } from "vue";
import { collection, doc, deleteDoc } from "firebase/firestore";
import { ref as storageRef, deleteObject } from "firebase/storage";
import { useFirestore, useCollection, useFirebaseStorage } from "vuefire";

export default function usePropiedades() {
    const db = useFirestore();
    const storage = useFirebaseStorage()
    const propiedadesCollection = useCollection(collection(db, "propiedades"));
    const alberca = ref(false);

    async function deleteItem(id, urlImage) {
        // console.log(id)
        if (confirm('Deseas eliminar esta propiedad?')) {
            const docRef = doc(db, 'propiedades', id)
            const imageRef = storageRef(storage, urlImage)
            await Promise.all([
                deleteDoc(docRef),
                deleteObject(imageRef)
            ])
            // await deleteDoc(docRef)
            // await deleteObject(urlImage)
        }
    }

    const filteredItems = computed(() => {
        return alberca.value
            ? propiedadesCollection.value.filter(
                (propiedad) => propiedad.alberca
            )
            : propiedadesCollection.value;
    });

    return {
        propiedadesCollection,
        alberca,
        filteredItems,
        deleteItem
    };
}
