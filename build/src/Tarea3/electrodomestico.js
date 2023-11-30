"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electrodomestico = void 0;
class Electrodomestico {
    constructor(precioBase = Electrodomestico.PRECIO_BASE_POR_DEFECTO, color = Electrodomestico.COLOR_POR_DEFECTO, consumoEnergetico = Electrodomestico.CONSUMO_POR_DEFECTO, peso = Electrodomestico.PESO_POR_DEFECTO) {
        this.precioBase = precioBase;
        this.color = this.comprobarColor(color);
        this.consumoEnergetico = this.comprobarConsumoEnergetico(consumoEnergetico);
        this.peso = peso;
    }
    getPrecioBase() {
        return this.precioBase;
    }
    getColor() {
        return this.color;
    }
    getConsumoEnergetico() {
        return this.consumoEnergetico;
    }
    getPeso() {
        return this.peso;
    }
    comprobarConsumoEnergetico(letra) {
        const letrasValidas = ['A', 'B', 'C', 'D', 'E', 'F'];
        return letrasValidas.includes(letra.toUpperCase()) ? letra.toUpperCase() : Electrodomestico.CONSUMO_POR_DEFECTO;
    }
    comprobarColor(color) {
        const coloresValidos = ['blanco', 'negro', 'rojo', 'azul', 'gris'];
        return coloresValidos.includes(color.toLowerCase()) ? color.toLowerCase() : Electrodomestico.COLOR_POR_DEFECTO;
    }
    precioFinal() {
        let precioFinal = this.precioBase;
        switch (this.consumoEnergetico) {
            case 'A':
                precioFinal += 100;
                break;
            case 'B':
                precioFinal += 80;
                break;
            case 'C':
                precioFinal += 60;
                break;
            case 'D':
                precioFinal += 50;
                break;
            case 'E':
                precioFinal += 30;
                break;
            case 'F':
                precioFinal += 10;
                break;
            default:
                break;
        }
        if (this.peso >= 0 && this.peso <= 19) {
            precioFinal += 10;
        }
        else if (this.peso >= 20 && this.peso <= 49) {
            precioFinal += 50;
        }
        else if (this.peso >= 50 && this.peso <= 79) {
            precioFinal += 80;
        }
        else if (this.peso >= 80) {
            precioFinal += 100;
        }
        return precioFinal;
    }
}
exports.Electrodomestico = Electrodomestico;
// Constantes
Electrodomestico.COLOR_POR_DEFECTO = 'blanco';
Electrodomestico.CONSUMO_POR_DEFECTO = 'F';
Electrodomestico.PRECIO_BASE_POR_DEFECTO = 100;
Electrodomestico.PESO_POR_DEFECTO = 5;
