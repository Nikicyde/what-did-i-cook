<template>
  <div
    class="overflow-auto overscroll-auto min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 scroll-smooth">
    <!-- <nav>
      <router-link to="/">Home</router-link>
    </nav> -->
    <h1 class="pt-5 mb-4 pl-2 text-3xl font-extrabold text-white" @click="showHome()">Sooo, what
      did
      I
      cook?
    </h1>
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
