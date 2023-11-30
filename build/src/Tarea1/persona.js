"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre = '', edad = 0, dni, sexo = Persona.SEXO_POR_DEFECTO, peso = 0, altura = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getDNI() {
        return this.dni;
    }
    getSexo() {
        return this.sexo;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(peso) {
        this.peso = peso;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(altura) {
        this.altura = altura;
    }
}
exports.Persona = Persona;
Persona.SEXO_POR_DEFECTO = 'H';
