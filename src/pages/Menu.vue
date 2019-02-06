<template>
  <article class="menu flex flex-column">
    <router-link
      class="block mono small smooth align-center slide-right"
      to="/"
    >
      🏠 About
    </router-link>
    <router-link
      class="block mono small smooth align-center slide-right"
      to="/work"
    >
      💻 Work
    </router-link>
    <router-link
      class="block mono small smooth align-center slide-right"
      to="/know"
    >
      💡 Know
    </router-link>
    <router-link
      class="block mono small smooth align-center slide-right"
      to="/contact"
    >
      📱 Touch
    </router-link>
  </article>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style lang="scss">
.menu {
  padding: 0;
  width: 200px;
  position: fixed;
  right: 2rem;
  height: 100%;
}
.block {
  background-color: $marine-blue !important;
  color: $metal-blue !important;
  display: block;
  padding: .5rem 0;
  width: 100%;
}
.block:first-child {
  border-radius: .5rem .5rem 0 0;
}
.block:last-child {
  border-radius: 0 0 .5rem .5rem;
}
.block:hover {
  background-color: $metal-blue !important;
  color: $marine-blue !important;
}
.slide-right:hover {
  transform: translateX(10px) skew(-20deg, -2deg);
}
</style>
