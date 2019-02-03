<template>
  <li class="flex flex-center slide smooth">
    <a
      :href="link"
      target="_blank"
    >
      <img
        class="squared-small hidden-on-mobile"
        :src="image"
        alt="slide"
      >
      <span class="slide-content">
        {{ description }}<br>{{ placement }}
      </span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'Slide',
  props: {
    'image': {
      type: String,
      default: ''
    },
    'description': {
      type: String,
      default: ''
    },
    'placement': {
      type: String,
      default: ''
    },
    'link': {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.slide {
  margin: .5rem 0;
}
.slide-content {
  display: inline-block;
  margin-left: 1rem;
}
</style>
