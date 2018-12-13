<template>
  <div>
    <v-card>

      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
        v-model="buscar"
        append-icon="search"
        label="Buscar"
        single-line
        hide-details
        ></v-text-field>
      </v-card-title>

      <v-data-table
      :loading="cargando"
      :headers="headers"
      :items="datos"
      item-key="llave"
      no-data-text="No hay datos disponibles"
      no-results-text="No se encontraron resultados"
      :rows-per-page-items="[10, 25, 50, 100]"
      rows-per-page-text="Filas por página:"
      :pagination.sync="paginando"
      :total-items="total"
      disable-initial-sort
      class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <slot name="items" v-bind="props"></slot>
        </template>
      </v-data-table>

    </v-card>
  </div>
</template>

<script>
import { MixinPlural } from '../index'

export default {
  name: 'va-data-table',
  data: () => ({}),
  mixins: [MixinPlural],
  props: ['recurso', 'headers'],
}
</script>
