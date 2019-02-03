<template>
  <p>
    You can either
    <a
      href="/resume.pdf"
      target="_blank"
    >
      download my resume
    </a>
    or
    <router-link
      to="/"
      class="smooth"
    >
      select another character ;)
    </router-link>
  </p>
</template>

<script>
export default {
  name: 'ToHome'
}
</script>
