<template>
    <div v-if="loading" class="text-center h-screen pt-20">
        <div role="status">
            <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-600"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor" />
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill" />
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
    </div>

    <div v-else>

        <h1 class="pt-5 decoration-1 text-center uppercase text-xl font-extrabold text-gray-200">{{ categoryName }}</h1>

        <div class="grid grid-cols-1 pb-5 text-center relative">
            <div v-if="recipes.length != 0">
                <div v-for="item in recipes" :key="item.id"
                    class="mt-5 bg-white rounded-xl shadow-xl mx-3 bg-opacity-50 border border-solid border-slate-400">
                    <button @click="deleteRecipe(item.id)"
                        class="float-right mr-4 absolute right-1 -mt-1 font-medium">x</button>
                    <p class="uppercase font-semibold mb-2 text-md mt-2">{{ item.name }}</p>
                    <!-- <p v-if="item.source != 'URL'">{{ item.source }}</p> -->
                    <a v-if="item.source === 'URL'" :href="item.sourceDetail" target="_blank">Link</a>
                    <p v-else class="text-sm text-gray-600 mb-2">{{ item.sourceDetail }}</p>
                </div>
            </div>
            <div v-else>
                <p class="font-extrabold mt-5 text-xl text-gray-300">Momentálne tu nie sú <br>žiadne recepty :(</p>
            </div>
        </div>

        <div class="grid grid-cols-1 mt-5">
            <input type="text" id="small-input" v-model="name" placeholder="Názov receptu"
                class="block w-50% p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 mx-2">

            <select id="countries" v-model="source"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-2 p-2 mt-2 ">
                <option value="Book">Kniha</option>
                <option value="URL">Stránka</option>
                <option value="Own">Vlastný recept</option>
            </select>

            <input type="text" id="small-input" v-model="sourceDetail" placeholder="Kniha, strana, URL, poznámky, ..."
                class="block w-50% p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 mt-2 mx-2">

            <button @click="createRecipe()" type="button"
                class="text-white mt-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 mb-2">+
                Pridať</button>
        </div>

        <div class="grid grid-cols-1 mt-5">
            <button @click="deleteCategory()" type="button"
                class="text-white mt-2 bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 mb-2">Vymazať
                kategóriu</button>
        </div>
    </div>

</template>

<script>
import { firestore as db } from '../firebaseInit'

export default {
    data() {
        return {
            recipes: [],
            name: '',
            source: 'Book',
            sourceDetail: '',
            loading: true,
            categoryName: ''
        };
    },
    created() {
        this.categoryName = this.$route.query.name
        this.loadRecipes();
    },
    methods: {
        deleteCategory() {
            this.recipes.forEach((item) => {
                db.collection("recipes")
                    .doc(item.id)
                    .delete()
                    .then(() => {
                        console.log("Document successfully deleted!");
                    })
                    .catch((error) => {
                        console.error("Error removing document: ", error);
                    });
            });

            db.collection("categories")
                .doc(this.$route.params.id)
                .delete()
                .then(() => {
                    console.log("Document successfully deleted!");
                    this.$router.push({ path: '/' });
                })
                .catch((error) => {
                    console.error("Error removing document: ", error);
                });

        },
        deleteRecipe(id) {
            this.loading = true;
            db.collection("recipes")
                .doc(id)
                .delete()
                .then(() => {
                    console.log("Document successfully deleted!");
                    this.loadRecipes();
                })
                .catch((error) => {
                    console.error("Error removing document: ", error);
                });
        },
        loadRecipes() {
            this.recipes = [];
            db.collection("recipes").where("category", "==", this.$route.params.id)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        this.recipes.push({
                            id: doc.id,
                            name: doc.data().name,
                            source: doc.data().source,
                            sourceDetail: doc.data().sourceDetail,
                        });
                        console.log(doc.id, " => ", doc.data());
                    });
                    this.loading = false;
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        },
        createRecipe() {
            if (this.name !== '') {
                this.loading = true;
                db.collection("recipes")
                    .add({ name: this.name, category: this.$route.params.id, source: this.source, sourceDetail: this.sourceDetail })
                    .then(() => {
                        console.log("Document successfully written!");
                        this.name = '';
                        this.sourceDetail = '';
                        this.loadRecipes();
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            }
        },
    }
}

</script>