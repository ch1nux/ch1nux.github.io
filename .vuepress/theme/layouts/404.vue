<template>
  <div class="content">
    <img alt="404 Not Found" src="/404.gif">
    <div class="fourohfour">4 + 0 = 4</div>
    <div class="message">
    ← <router-link to="/">{{ getMsg() }}</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `Así como cuando te equivocas, pues así...`,
  `Mi lógica es innegable -_-`,
  `No, no, no, no, no. ¡En mi máquina funciona!`,
  `Si, o sea, que no encontró lo que buscas pues.`,
  `Ehm, este, pues...`,
  `¿Qué esperabas? Si no está, no está... ¬_¬`,
  `Arriba dice '404' y significa que no soy adivino`,
  `Meh. ¯\\_(ツ)_/¯`,
  `Cannot get 'undefined' from la reconcha de la lora`,
  `¡Qué no, que no hay nivel de las vacas!`,
  `atrás, atrás, abajo, A, B, start, ah, no...`,
  `Creo que vi a un lindo gatito ^_^`,
  `#allyourbasearebelongtous`,
  `... No hay huevos de pascua en esta página. Estoy seguro`,
  `ページが見つかりませんでした`,
  `'El pastel es una mentira' y lo sabes, ¿no?`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

