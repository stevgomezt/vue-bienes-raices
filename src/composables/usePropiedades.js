import { computed, ref } from "vue";
import { collection, doc, deleteDoc } from "firebase/firestore";
import { useFirestore, useCollection } from "vuefire";

export default function usePropiedades() {
    const db = useFirestore();
    const propiedadesCollection = useCollection(collection(db, "propiedades"));
    const alberca = ref(false);

    async function deleteItem(id) {
        // console.log(id)
        if (confirm('Deseas eliminar esta propiedad?')) {
            const docRef = doc(db, 'propiedades', id)
            await deleteDoc(docRef)
        }
    }

    const propiedadesFiltradas = computed(() => {
        return alberca.value
            ? propiedadesCollection.value.filter(
                (propiedad) => propiedad.alberca
            )
            : propiedadesCollection.value;
    });

    return {
        propiedadesCollection,
        alberca,
        propiedadesFiltradas,
        deleteItem
    };
}
