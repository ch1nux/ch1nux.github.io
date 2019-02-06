<template>
  <div
    class="card rounded smooth align-center has-shadow"
    :style="{ 'backgroundColor': color }"
  >
    <a
      v-if="isWebpage"
      :href="link"
      target="_blank"
      class="smooth coral"
    >
      ⚓🌎
    </a>
    <a
      v-else-if="isPen"
      :href="link"
      target="_blank"
      class="smooth coral"
    >
      💻🖊️
    </a>
    <a
      v-else
      :href="repo"
      target="_blank"
      class="smooth coral"
    >
      🐙🐱
    </a> |
    <span
      v-if="repo !== null"
      class="mono"
    >
      <a
        :href="link"
        target="_blank"
        class="smooth coral"
      >
        {{ identifier }}
      </a>
    </span>
    <span
      v-else
      class="mono"
    >
      {{ identifier }}
    </span>
    <p class="x-small text">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'WorkCard',
  props: {
    'color': {
      type: String,
      default: '#464646'
    },
    'isWebpage': {
      type: Boolean,
      default: false
    },
    'isPen': {
      type: Boolean,
      default: false
    },
    'repo': {
      type: String,
      default: ''
    },
    'link': {
      type: String,
      default: ''
    },
    'identifier': {
      type: String,
      default: ''
    },
    'description': {
      type: String,
      default: ''
    }
  }
}
</script>
