<template>
  <div
    :class="[
      'card',
      'rounded',
      'smooth',
      { 'has-shadow': isHovered }
    ]"
    :style="{ 'backgroundColor': color }"
    @mouseover="isHovered = true"
    @mouseout="isHovered = false"
  >
    <div class="flex flex-top mobile-card">
      <div class="image">
        <img
          :src="image"
          alt="identifier"
          class="squared"
        >
      </div>
      <div class="content">
        {{ description }}
        <div class="flex flex-space">
          <div>
            <span
              class="small mono"
              title="Health points"
            >
              HP: {{ indicatorBar('❤️', hP) }}
            </span><br>
            <span
              class="small mono"
              title="Magic points"
            >
              MP: {{ indicatorBar('🍫', mP) }}
            </span><br>
            <span
              class="small mono"
              title="Strength points"
            >
              SP: {{ indicatorBar('🥑', sP) }}
            </span>
          </div>
          <div>
            <span class="small mono">
              {{ hP }}/3
            </span><br>
            <span class="small mono">
              {{ mP }}/3
            </span><br>
            <span class="small mono">
              {{ sP }}/3
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PresentationCard',
  props: {
    'color': {
      type: String,
      default: '#464646'
    },
    'image': {
      type: String,
      default: ''
    },
    'description': {
      type: String,
      default: ''
    },
    'hP': {
      type: Number,
      default: 1
    },
    'mP': {
      type: Number,
      default: 1
    },
    'sP': {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      isHovered: false
    }
  },
  computed: {
    classes () {
      return [
      ]
    }
  },
  methods: {
    indicatorBar (indicator, limit) {
      return Array(limit).fill(indicator).join('')
    }
  }
}
</script>
