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
      :loading="loading"
      :headers="headers"
      :items="items"
      item-key="llave"
      no-data-text="No hay datos disponibles"
      no-results-text="No se encontraron resultados"
      :rows-per-page-items="[10, 25, 50, 100]"
      rows-per-page-text="Filas por página:"
      :pagination.sync="pagination"
      :total-items="totalItems"
      disable-initial-sort
      class="elevation-1"
      >
        <slot name="items"></slot>
        <slot name="footer"></slot>
      </v-data-table>
    </v-card>

  </div>
</template>

<script>
export default {
  props: ['loading', 'headers', 'items', 'pagination', 'totalItems', 'buscar']
}
</script>
