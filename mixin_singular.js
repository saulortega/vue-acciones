var axios = require('axios')
var fncns = require('./funciones')

var MixinSingular = {
	data: () => ({
		obteniendo: false,
		creando: false,
		editando: false,
		datos: {},
	}),
	/*created: function(){
		this.$emit('created')
	},*/
	watch: {
		'obteniendo': function(v){
			this.$emit('obteniendo', v)
		},
		'creando': function(v){
			this.$emit('creando', v)
		},
		'editando': function(v){
			this.$emit('editando', v)
		},
	},
	methods: {
		obtener: function(llave){
			if(!this.verificarRecurso() || !this.verificarLlave(llave)){
				return
			}

			this.obteniendo = true
			fncns.PrmsaFncn(this.preobtención).then( () => {
				axios.get(this.recurso+'/'+llave).then( rta => {
					this.datos = rta.data || {}
					this.obteniendo = false
					this.$emit('obtenido', true)
					if(this.posobtención){
						this.posobtención()
					}
				}).catch( (error) => {
					this.obteniendo = false
					this.$emit('obtenido', false)
				})
			}).catch( (error) => {
				this.obteniendo = false
				this.$emit('obtenido', false)
			})
		},
		crear: function(){
			if(!this.verificarRecurso()){
				return
			}

			this.creando = true
			fncns.PrmsaFncn(this.precreación).then( () => {
				axios.post(this.recurso, this.datos).then( rta => {
					this.creando = false
					this.$emit('creado', true)
					if(this.poscreación){
						this.poscreación()
					}
				}).catch( error => {
					this.creando = false
					this.$emit('creado', false)
				})
			}).catch( () => {
				this.creando = false
				this.$emit('creado', false)
			})

		},
		editar: function(){
			if(!this.verificarRecurso() || !this.verificarLlave(this.datos.llave)){
				return
			}

			this.editando = true
			fncns.PrmsaFncn(this.preedición).then( () => {
				axios.put(this.recurso+'/'+this.datos.llave, this.datos).then( rta => {
					this.editando = false
					this.$emit('editado', true)
					if(this.posedición){
						this.posedición()
					}
				}).catch( error => {
					this.editando = false
					this.$emit('editado', false)
				})
			}).catch( () => {
				this.editando = false
				this.$emit('editado', false)
			})
		},
		verificarRecurso: function(){
			if(!this.recurso){
				console.warn('recurso no especificado')
				this.$emit('fallo')
				return false
			}

			return true
		},
		verificarLlave: function(l){
			if(!l){
				console.warn('llave no recibida')
				this.$emit('fallo')
				return false
			}

			return true
		}
	},
}

module.exports = MixinSingular