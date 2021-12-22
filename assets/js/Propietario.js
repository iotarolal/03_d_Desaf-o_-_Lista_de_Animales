export class Propietario {
    constructor (nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
// metodo getter y setter
    datospropietarios() {
        return `El nombre del propietario de la mascota es ${this._nombre}`
    }

}