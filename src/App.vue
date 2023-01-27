<template>
  <div
    class="overflow-auto overscroll-auto min-h-screen bg-gradient-to-tr from-[#a8a59f] to-[#ffaaa5] scroll-smooth">
    <!-- <nav>
      <router-link to="/">Home</router-link>
    </nav> -->
    <h1 class="pt-5 mb-2 pl-2 text-3xl font-extrabold text-white text-center drop-shadow-lg" @click="showHome()">Sooo, what
      did
      I
      cook?
    </h1>
    <div class="border-b-2 mx-16 mb-2">

    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    showHome() {
      this.$router.push({ path: '/' })
    },
  },
};
</script>
