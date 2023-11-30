import { Electrodomestico } from './electrodomestico';
import { Lavadora } from './lavadora';
import { Television } from './televisor';

class MainApp {
    public static main(): void {
      const electrodomesticos: Electrodomestico[] = [
        new Electrodomestico(150, 'rojo', 'A', 25),
        new Lavadora(30, 200, 'azul', 'B', 40),
        new Television(50, true, 400, 'negro', 'C', 60),
        new Electrodomestico(120, 'gris', 'D', 15),
        new Lavadora(25, 180, 'blanco', 'E', 35),
        new Television(30, false, 300, 'rojo', 'F', 45),
        new Electrodomestico(90, 'negro', 'A', 10),
        new Lavadora(40, 250, 'gris', 'B', 50),
        new Television(55, true, 500, 'azul', 'C', 70),
        new Electrodomestico(80, 'blanco', 'D', 30),
      ];
  
      let precioTotalElectrodomesticos = 0;
      let precioTotalLavadoras = 0;
      let precioTotalTelevisiones = 0;
  
      for (const electrodomestico of electrodomesticos) {
        const precioFinal = electrodomestico.precioFinal();
        precioTotalElectrodomesticos += precioFinal;
  
        if (electrodomestico instanceof Lavadora) {
          precioTotalLavadoras += precioFinal;
        } else if (electrodomestico instanceof Television) {
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
  