<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="item in employeesData" :key="item.id">
      <p>{{item.aaa}}</p>

    </div>
  </div>
</template>

<script>
import { firestore as db } from '../firebaseInit'

export default {
  data() {
    return {
      employeesData: [],
    };
  },
  created() {
    db.collection("employees")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.employeesData.push({
            id: doc.id,
            aaa: doc.data().aaa
          });
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  },
};
</script>
