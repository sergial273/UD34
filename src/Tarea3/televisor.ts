import { Electrodomestico } from './electrodomestico';

export class Television extends Electrodomestico {
    private resolucion: number;
    private es4K: boolean;
  
    // Constantes
    private static RESOLUCION_POR_DEFECTO: number = 20;
    private static ES_4K_POR_DEFECTO: boolean = false;
  
    constructor(
      resolucion: number = Television.RESOLUCION_POR_DEFECTO,
      es4K: boolean = Television.ES_4K_POR_DEFECTO,
      precioBase: number = Electrodomestico.PRECIO_BASE_POR_DEFECTO,
      color: string = Electrodomestico.COLOR_POR_DEFECTO,
      consumoEnergetico: string = Electrodomestico.CONSUMO_POR_DEFECTO,
      peso: number = Electrodomestico.PESO_POR_DEFECTO
    ) {
      super(precioBase, color, consumoEnergetico, peso);
      this.resolucion = resolucion;
      this.es4K = es4K;
    }
  
    getResolucion(): number {
      return this.resolucion;
    }
  
    es4k(): boolean {
      return this.es4K;
    }
  
    precioFinal(): number {
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
  