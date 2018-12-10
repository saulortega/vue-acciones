
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