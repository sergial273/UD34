"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electrodomestico_1 = require("./electrodomestico");
const lavadora_1 = require("./lavadora");
const televisor_1 = require("./televisor");
class MainApp {
    static main() {
        const electrodomesticos = [
            new electrodomestico_1.Electrodomestico(150, 'rojo', 'A', 25),
            new lavadora_1.Lavadora(30, 200, 'azul', 'B', 40),
            new televisor_1.Television(50, true, 400, 'negro', 'C', 60),
            new electrodomestico_1.Electrodomestico(120, 'gris', 'D', 15),
            new lavadora_1.Lavadora(25, 180, 'blanco', 'E', 35),
            new televisor_1.Television(30, false, 300, 'rojo', 'F', 45),
            new electrodomestico_1.Electrodomestico(90, 'negro', 'A', 10),
            new lavadora_1.Lavadora(40, 250, 'gris', 'B', 50),
            new televisor_1.Television(55, true, 500, 'azul', 'C', 70),
            new electrodomestico_1.Electrodomestico(80, 'blanco', 'D', 30),
        ];
        let precioTotalElectrodomesticos = 0;
        let precioTotalLavadoras = 0;
        let precioTotalTelevisiones = 0;
        for (const electrodomestico of electrodomesticos) {
            const precioFinal = electrodomestico.precioFinal();
            precioTotalElectrodomesticos += precioFinal;
            if (electrodomestico instanceof lavadora_1.Lavadora) {
                precioTotalLavadoras += precioFinal;
            }
            else if (electrodomestico instanceof televisor_1.Television) {
                precioTotalTelevisiones += precioFinal;
            }
        }
        console.log(`Precio total de electrodomésticos: ${precioTotalElectrodomesticos} €`);
        console.log(`Precio total de lavadoras: ${precioTotalLavadoras} €`);
        console.log(`Precio total de televisiones: ${precioTotalTelevisiones} €`);
    }
}
// Ejecutar la aplicación principal
MainApp.main();
