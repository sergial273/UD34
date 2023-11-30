"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Television = void 0;
const electrodomestico_1 = require("./electrodomestico");
class Television extends electrodomestico_1.Electrodomestico {
    constructor(resolucion = Television.RESOLUCION_POR_DEFECTO, es4K = Television.ES_4K_POR_DEFECTO, precioBase = electrodomestico_1.Electrodomestico.PRECIO_BASE_POR_DEFECTO, color = electrodomestico_1.Electrodomestico.COLOR_POR_DEFECTO, consumoEnergetico = electrodomestico_1.Electrodomestico.CONSUMO_POR_DEFECTO, peso = electrodomestico_1.Electrodomestico.PESO_POR_DEFECTO) {
        super(precioBase, color, consumoEnergetico, peso);
        this.resolucion = resolucion;
        this.es4K = es4K;
    }
    getResolucion() {
        return this.resolucion;
    }
    es4k() {
        return this.es4K;
    }
    precioFinal() {
        let precioBaseElectrodomestico = super.precioFinal();
        if (this.resolucion > 40) {
            precioBaseElectrodomestico += precioBaseElectrodomestico * 0.3; // Incremento del 30%
        }
        if (this.es4K) {
            precioBaseElectrodomestico += 50;
        }
        return precioBaseElectrodomestico;
    }
}
exports.Television = Television;
// Constantes
Television.RESOLUCION_POR_DEFECTO = 20;
Television.ES_4K_POR_DEFECTO = false;
