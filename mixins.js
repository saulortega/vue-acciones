var MixinDialog = {
	data: () => ({
    ver: false
  }),
	methods: {
		alCrear: function (c) {
			this.$emit('creado', c)
			this.cerrarSiEsExitoso(c)
		},
		alEditar: function (e) {
			this.$emit('editado', e)
			this.cerrarSiEsExitoso(e)
		},
		alEliminar: function (e) {
			this.$emit('eliminado', e)
			this.cerrarSiEsExitoso(e)
		},
		cerrarSiEsExitoso: function (e) {
			if (e) {
        this.ver = false
      }
		}
	}
}

var MixinDialogBtn = {
	methods: {
		alCrear: function (c) {
			this.$emit('creado', c)
		},
		alEditar: function (e) {
			this.$emit('editado', e)
		},
		alEliminar: function (e) {
			this.$emit('eliminado', e)
		}
	}
}

var MixinDialogBtnListado = {
	methods: {
		alCrear: function (c) {
			this.$emit('creado', c)
			this.listarSiEsExitoso(c)
		},
		alEditar: function (e) {
			this.$emit('editado', e)
			this.listarSiEsExitoso(e)
		},
		alEliminar: function (e) {
			this.$emit('eliminado', e)
			this.listarSiEsExitoso(e)
		},
		listarSiEsExitoso: function (e) {
			if (e && this.$refs.lis) {
        this.$refs.lis.listar()
      }
		}
	}
}