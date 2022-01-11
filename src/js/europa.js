/**
	clase.js Clase de negocio que representa un objeto.
	Representa los paises europeos.
	@author Miguel Jaque <mjaque@migueljaque.com>
	@license GPL-3.0-or-later
*/

/**
	Clase de negocio que representa un objeto.
*/
export class Europa{
	//Atributos estáticos
	static ESTADO = {
		Estado1: Symbol(),
		Estado2: Symbol(),
		Estado3: Symbol()
	}
	
	//Atributos Dinámicos
	//Encapsulamos los atributos como privados.
	#id	//Identificador único del objeto
	#nombre
	#descripcion
	#fecha
	#estado	//Enumerado de tipo ESTADO
	#booleano
	#imagen

	/**
		Constructor de la clase.
		@param nombre {String} Nombre del objeto.
	**/
	constructor(nombre){
		this.nombre = nombre
	}

	getNombre(){
		return this.nombre
	}
	setNombre(nombre){
		this.nombre = nombre
	}
}
