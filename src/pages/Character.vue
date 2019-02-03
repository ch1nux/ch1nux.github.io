<template>
  <div
    :class="[
      'align-center',
      'card',
      'rounded',
      'smooth',
      { 'has-shadow': isHovered }
    ]"
    :style="{ 'backgroundColor': color }"
    @mouseover="isHovered = true"
    @mouseout="isHovered = false"
  >
    <router-link :to="route">
      <img
        :src="image"
        alt="character"
        class="squared"
      >
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Character',
  props: {
    'color': {
      type: String,
      default: '#464646'
    },
    'image': {
      type: String,
      default: ''
    },
    'route': {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isHovered: false
    }
  }
}
</script>
