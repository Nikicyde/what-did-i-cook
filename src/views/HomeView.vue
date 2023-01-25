<template>

  <h1 class="pt-5 mb-4 pl-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Soo, what did
    I
    cook?
  </h1>

  <div class="grid grid-cols-2 text-center pb-5">
    <div v-for="item in categories" :key="item.id"
      class="py-10 mx-4 mt-5 border border-black rounded-lg shadow-lg uppercase bg-slate-600 bg-opacity-25 hover:bg-slate-400 font-extrabold text-white">
      {{ item.name }}
    </div>
  </div>

  <div class="grid grid-cols-1 mt-5">
    <input type="text" id="small-input" v-model="name" placeholder="Insert category name"
      class="block w-50% p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500">

    <button @click="createCategory()" type="button"
      class="text-white mt-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">+
      Add Category</button>
  </div>

</template>

<script>
import { firestore as db } from '../firebaseInit'

export default {
  data() {
    return {
      categories: [],
      name: ''
    };
  },
  created() {
    this.loadCategories();
  },
  methods: {
    loadCategories() {
      this.categories = [];
      db.collection("categories")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.categories.push({
              id: doc.id,
              name: doc.data().name
            });
            console.log(doc.id, " => ", doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    createCategory() {
      db.collection("categories")
        .add({ name: this.name })
        .then(() => {
          console.log("Document successfully written!");
          this.name = '';
          this.loadCategories();
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    }
  },
};
</script>
