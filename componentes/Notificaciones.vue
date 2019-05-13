<template>
  <v-snackbar
    :vertical="false"
    :multi-line="true"
    :timeout="tiempo"
    :color="color"
    :left="posiciónx == 'izquierda'"
    :right="posiciónx == 'derecha'"
    :top="posicióny == 'arriba'"
    :bottom="posicióny == 'abajo'"
    v-model="activa"
  >
    <div style="">
      {{ msjs.join('; ') }}
    </div>
    <v-btn flat color="white" @click.native="activa = !activa">Cerrar</v-btn>
  </v-snackbar>
</template>

<script>

export default {
  name: 'notificaciones',
  data: () => ({
    tiempo: 20000,
    color: 'blue',
    posiciónx: 'derecha',
    posicióny: 'abajo',
    activa: false,
    msjs: []
  }),
  watch: {
    'activa': (a, b) => {
      console.log('aaaaaaaaaaaaaaaaaaaaa--', a, b)
    }
  }
  // mixins: [MixinPlural],
  // props: ['recurso', 'headers'],
}
</script>
