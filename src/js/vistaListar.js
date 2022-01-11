/**
	vistaprincipal.js Vista principal de la aplicación.
	@author Sergio Matamoros Delgado
	@license GPL-3.0-or-later
*/

/**
	Vista principal de la aplicación.
	Construye el layout y crea las vistas secundarias (header, nav, main y footer)
*/

import {Vista} from './vista.js'
import {Menu} from './menu.js'
import {VistaCrear} from './vistacrear.js'

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
			'paises' : null,
			'btnAceptar' : null
		}

        console.log("ENTRA LISTAR");

		//Subvistas. No se cargan hasta tener registradas las referencias a la plantilla.
		this.hijos = {
            'menu' : new Menu(this.controlador, this.html.nav)
		}

	}

    mostrar(){
        console.log("Vista listar");
    }
	/**
	Registra las referencias de la vista a los elementos de la plantilla.
	Es necesario registrar antes de transferir los elementos de la plantilla al documento principal.
	@param docPlantilla {Document} Documento cargado desde la plantilla.
	*/
	registrar(docPlantilla){
        console.log("registro");
		//Guardamos las referencias a los elementos del interfaz
		this.html.paises = docPlantilla.getElementsByTagName('div')[0]
		//this.html.btnAceptar = docPlantilla.getElementsByTagName('button')[0]

        this.cargar();
	}
	/**
	Asocia los manejadores de eventos a los eventos del documento.
	**/
	asociar(){
		//this.html.btnAceptar.onclick = this.aceptar.bind(this)
	}

    /**
     * Carga los elementos necesarios
     */
    cargar()
    {
        console.log("CARGA DATOS");
        let paises = this.html.paises;
        console.log(paises);
    }
}
