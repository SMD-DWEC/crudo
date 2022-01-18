/**
	vistacrear.js Vista de Formulario para la creación de objetivos.
	@author Miguel Jaque <mjaque@migueljaque.com>
	@license GPL-3.0-or-later
*/

/**
	Vista de Formulario para la creación de objetivos.
*/

import {Vista} from './vista.js'
import {Modelo} from './modelo.js'
import {Europa} from './europa.js'

export class VistaListar extends Vista{
	/**
		Constructor de la vista.
		Declara a inicializa los atributos del objeto.
		@param controlador {Crudo} Controlador de la aplicación.
		@param base {HTMLElement} Elemento HTML en el que se creará la vista principal.
	*/
	constructor(controlador, base){
		super(controlador, base)

		//Referencias a Elementos HTML en la plantilla
		this.html = {
			'div' : null,
			'paises' : null
		}

		//Subvistas. No se cargan hasta tener registradas las referencias a la plantilla.
		this.hijos = {
		}

	}
	/**
	Registra las referencias de la vista a los elementos de la plantilla.
	Es necesario registrar antes de transferir los elementos de la plantilla al documento principal.
	@param docPlantilla {Document} Documento cargado desde la plantilla.
	*/
	registrar(docPlantilla){
		//Guardamos las referencias a los elementos del interfaz
		this.html.div = docPlantilla.getElementsByTagName('div')[0]
		this.html.paises = docPlantilla.getElementsByTagName('table')[0]


	}
	/**
	Asocia los manejadores de eventos a los eventos del documento.
	**/
	asociar(){
		//this.html.btnAceptar.onclick = this.aceptar.bind(this)
	}

	iniciar()
	{
		this.html.paises
		let tr = document.createElement("tr");
		

		let td = document.createElement("td");
		//let model = new Modelo();
		//let listado = model.listar(this.iniciar);

		//console.log(listado);
		
		tr.appendChild(td);

		this.html.paises.appendChild(tr);
	}


	mostrar(bool)
	{
	  //(bool) ? this.html.div.style.display = "block" : this.html.div.style.display = "none";
	  (bool) ? $(this.html.div).show() : $(this.html.div).hide();
	}
}
