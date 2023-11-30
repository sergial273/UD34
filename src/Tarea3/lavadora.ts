import { Electrodomestico } from './electrodomestico';

export class Lavadora extends Electrodomestico {
    private carga: number;
  
    // Constante
    private static CARGA_POR_DEFECTO: number = 5;
  
    constructor(
      carga: number = Lavadora.CARGA_POR_DEFECTO,
      precioBase: number = Electrodomestico.PRECIO_BASE_POR_DEFECTO,
      color: string = Electrodomestico.COLOR_POR_DEFECTO,
      consumoEnergetico: string = Electrodomestico.CONSUMO_POR_DEFECTO,
      peso: number = Electrodomestico.PESO_POR_DEFECTO
    ) {
      super(precioBase, color, consumoEnergetico, peso);
      this.carga = carga;
    }
  
    getCarga(): number {
      return this.carga;
    }
  
    precioFinal(): number {
      const precioBaseElectrodomestico = super.precioFinal();
  
      return this.carga > 30 ? precioBaseElectrodomestico + 50 : precioBaseElectrodomestico;
    }
  }
  