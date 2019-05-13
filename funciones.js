
function PrmsaFncn(fncn) {
	let P

	if(fncn){
		P = fncn()
		if(!(P instanceof Promise)){
			if(P){
				P = new Promise( (resolve, reject) => { resolve() })
			} else {
				P = new Promise( (resolve, reject) => { reject() })
			}
		}
	} else {
		P = new Promise( (resolve, reject) => { resolve() })
	}

	return P
}
module.exports.PrmsaFncn = PrmsaFncn

/*
var notificación = {
	correcto: function(texto, tiempo){
		this.lanzar(texto, tiempo, true, false, false, false)
	},
	informativo: function(texto, tiempo){
		this.lanzar(texto, tiempo, false, true, false, false)
	},
	advertencia: function(texto, tiempo){
		this.lanzar(texto, tiempo, false, false, true, false)
	},
	error: function(texto, tiempo){
		this.lanzar(texto, tiempo, false, false, false, true)
	},
	lanzar: function(texto, tiempo, cor, inf, adv, err){
		console.warn(":::::::. NOTIFICACIÓN .:::::::")
		console.warn(texto)
		//alert(texto)
	}
}
*/

/*
function Notificaciones(n) {
	if(!n){ return; }

	if(typeof(n) == 'string'){
		n = JSON.parse(decodeURIComponent(escape(atob(n))))
	}

	var notis = [];
	if(n.length === undefined){
		notis.push(n)
	} else {
		notis = n
	}

	var t = 10
	if(sds.notificación.activa){
		t = 1000
	}

	for (var i = 0; i < notis.length; i++) {
		Notificación(notis[i], (t + (1000*i)) )
	}
}
*/

/*
function Notificación(n, t) {
	var t = t || 10;
	if(!n){ return; }
	if(n.Tipo != 'error' && n.Tipo != 'advertencia' && n.Tipo != 'información' & n.Tipo != 'correcto'){ return; }

	setTimeout(() => {
		sds.notificación.color = ''
		sds.notificación.tiempo = n.Tiempo
		sds.notificación.msjs = n.Mensajes

		if(n.Tipo == 'error'){
			sds.notificación.color = 'red'
			console.error(n.Mensajes)
		} else if(n.Tipo == 'advertencia'){
			sds.notificación.color = 'orange'
			console.warn(n.Mensajes)
		} else if(n.Tipo == 'información'){
			sds.notificación.color = 'blue'
			console.info(n.Mensajes)
		} else if(n.Tipo == 'correcto'){
			sds.notificación.color = 'green'
			console.info(n.Mensajes)
		}
		sds.notificación.activa = false
		setTimeout(() => {
			sds.notificación.activa = true
		},100)
	}, t)
}
*/


// ------------------

/*
axios.interceptors.request.use(function(config){

	//
	if(config.data && !(config.data instanceof FormData)){
		let datos = new FormData();
		for (let i in config.data) {
			if(config.data.hasOwnProperty(i)) {
				datos.append(i, config.data[i])
			}
		}
		config.data = datos
	}
	//

	//
	// if(config.headers && config.headers.common){
	  // config.headers.common.Authorization = interfazAdmon() ? localStorage.ServiciosSaludTokenAdmon : localStorage.ServiciosSaludToken
  // }
	//

	//
	// config.baseURL = 'http://'+location.host
	//

	return config
})
*/

/*
//
axios.interceptors.response.use(function (response) {
	// Do something with response data
	if(response.config.method == 'put' || response.config.method == 'post' || response.config.method == 'delete'){
		Notificación({
			Tipo: 'correcto',
			Tiempo: 3000,
			Mensajes: ['Hecho'],
		}) //Temporal...
	}
	return response;
}, function (error) {
	// Do something with response error
	if(error.response && error.response.headers){
		if(error.response.headers['x-notificaciones']){
			Notificaciones(error.response.headers['x-notificaciones'])
		} else if(error.response.headers['x-msj']){
			Notificación({
				Tipo: 'error',
				Tiempo: 4000,
				Mensajes: [decodeURIComponent(escape(error.response.headers['x-msj']))],
			}) //Temporal...
		}
	}
	return Promise.reject(error);
})
*/