<template>
  <the-navbar>
    <router-link to="/"></router-link>
  </the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  components: {
    TheNavbar
  }
}
</script>

<style>

</style>
