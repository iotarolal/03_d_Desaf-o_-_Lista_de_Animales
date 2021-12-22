import {Animal} from './Animal.js';

export class Mascota extends Animal {
    constructor (nombre, direccion, telefono, tipo, nombremascota , enfermedad) {
        super (nombre, direccion, telefono, tipo, nombremascota , enfermedad)
        this._nombremascota = nombremascota;
        this._enfermedad = enfermedad;
    }

    get nombremascota () {
        return this._nombremascota;
    }

    set nombremascota (nombremascota) {
        this._nombremascota = nombremascota;
    }

    get enfermedad () {
        return this._enfermedad;
    }

    set enfermedad (enfermedad) {
        this._enfermedad = enfermedad;
    }
}