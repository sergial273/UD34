"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lavadora = void 0;
const electrodomestico_1 = require("./electrodomestico");
class Lavadora extends electrodomestico_1.Electrodomestico {
    constructor(carga = Lavadora.CARGA_POR_DEFECTO, precioBase = electrodomestico_1.Electrodomestico.PRECIO_BASE_POR_DEFECTO, color = electrodomestico_1.Electrodomestico.COLOR_POR_DEFECTO, consumoEnergetico = electrodomestico_1.Electrodomestico.CONSUMO_POR_DEFECTO, peso = electrodomestico_1.Electrodomestico.PESO_POR_DEFECTO) {
        super(precioBase, color, consumoEnergetico, peso);
        this.carga = carga;
    }
    getCarga() {
        return this.carga;
    }
    precioFinal() {
        const precioBaseElectrodomestico = super.precioFinal();
        return this.carga > 30 ? precioBaseElectrodomestico + 50 : precioBaseElectrodomestico;
    }
}
exports.Lavadora = Lavadora;
// Constante
Lavadora.CARGA_POR_DEFECTO = 5;
