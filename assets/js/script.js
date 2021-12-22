import {Propietario} from './Propietario.js';
import {Animal} from './Animal.js';
import {Mascota} from './Mascota.js';

const _propietario = document.querySelector('#propietario');
const _telefono = document.querySelector('#telefono');        
const _direccion = document.querySelector('#direccion');        
const _nombreMascota = document.querySelector('#nombreMascota');        
const _enfermedad = document.querySelector('#enfermedad');        
const _tipo = document.querySelector('#tipo');
const _resultado = document.querySelector('#resultado');
$("#resultado").hide();
$('#mascota').on('submit', function(ev) {
        // primero evitamos que se recargue la página
        ev.preventDefault();

        // obtengo valoes ingresados por el usuario
        const _propietario = $('#propietario').val();
        const _telefono = $('#telefono').val();
        const _direccion = $('#direccion').val();
        const _tipo = $('#tipo').val();
        const _nombreMascota = $('#nombreMascota').val();
        const _enfermedad = $('#enfermedad').val();

        // Craeo los objetos
        const mascotanueva = new Mascota(_propietario, _direccion, _telefono, _tipo, _nombreMascota, _enfermedad);
        //        const _propietario = new Propietario(_propietario, _direccion, _telefono); 
        //        const _animal = new Animal(_nombre, _direccion, _telefono, _tipo);

        console.log(mascotanueva);
        // Muestro resultado
        $("#resultado").show();
        $("#resultado").html(`<p> El nombre del dueño es ${mascotanueva._nombre}. El domicilio es: ${mascotanueva._direccion}, y el número telefónico de contacto: ${mascotanueva._telefono} </p>
        <p>El tipo de animal es un: ${mascotanueva._tipo}, mientras que el nombre de la mascota es: ${mascotanueva._nombremascota} y la enfermedad es: ${mascotanueva.enfermedad}</p>`);
 
});
