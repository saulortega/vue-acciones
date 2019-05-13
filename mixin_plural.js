var axios = require('axios')
var fncns = require('./funciones')

var MixinPlural = {
	data: () => ({
		cargando: false,
		datos: [],
		total: 0,
		paginando: {},
		buscar: '',
    	tl: 0,
	}),
	watch: {
		'buscar': function(bscr, bscrAntes){
			if(bscr && (bscr.length >= 3 || bscrAntes.length >= 3)){
				if(this.tl){
					clearTimeout(this.tl)
				}
				
				this.tl = setTimeout( () => {
					this.listar()
				}, 250)
			}
		},
		paginando: {
			handler(ahora, antes){
				//Evitar doble cargue debido al totalItems:
				if(ahora.descending !== antes.descending || ahora.page !== antes.page || ahora.rowsPerPage !== antes.rowsPerPage || ahora.sortBy !== antes.sortBy){
					this.listar()
				}
			},
			deep: true,
		},
	},
	methods: {
		listar: function(){
			return new Promise((resolve, reject) => {
				if(!this.recurso){
					console.warn('recurso no especificado')
					reject()
					return
				}

				if(this.buscar && this.buscar.length < 3){
					this.buscar = ''
				}

				let prelistado = this.prelistado || this.$parent.prelistado
				let poslistado = this.poslistado || this.$parent.poslistado

				this.cargando = true
				fncns.PrmsaFncn(prelistado).then( () => {
					axios.get(this.recurso, { params: Object.assign({'buscar': (this.buscar || '')}, this.paginando) }).then( rta => {
						//this.datos = this.interceptorListado(rta.data || [])
						this.datos = (rta.data || [])
						this.cargando = false
						if(poslistado){
							poslistado()
						}
						this.total = Number(rta.headers['x-total']) || 0
						resolve(rta)
					}).catch( (error) => {
						this.cargando = false
						reject(error)
					})
				}).catch( (error) => {
					this.cargando = false
					reject(error)
				})
			})
		},
		/*interceptorListado: function(datos){
			if(!this.interceptarListado){
				return datos
			}

			return this.interceptarListado(datos) || []
		}*/
	},
}

module.exports = MixinPlural