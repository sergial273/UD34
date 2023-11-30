export class Electrodomestico {
    private precioBase: number;
    private color: string;
    private consumoEnergetico: string;
    private peso: number;
  
    // Constantes
    public static COLOR_POR_DEFECTO: string = 'blanco';
    public static CONSUMO_POR_DEFECTO: string = 'F';
    public static PRECIO_BASE_POR_DEFECTO: number = 100;
    public static PESO_POR_DEFECTO: number = 5;
  
    constructor(
      precioBase: number = Electrodomestico.PRECIO_BASE_POR_DEFECTO,
      color: string = Electrodomestico.COLOR_POR_DEFECTO,
      consumoEnergetico: string = Electrodomestico.CONSUMO_POR_DEFECTO,
      peso: number = Electrodomestico.PESO_POR_DEFECTO
    ) {
      this.precioBase = precioBase;
      this.color = this.comprobarColor(color);
      this.consumoEnergetico = this.comprobarConsumoEnergetico(consumoEnergetico);
      this.peso = peso;
    }
  
    getPrecioBase(): number {
      return this.precioBase;
    }
  
    getColor(): string {
      return this.color;
    }
  
    getConsumoEnergetico(): string {
      return this.consumoEnergetico;
    }
  
    getPeso(): number {
      return this.peso;
    }
  
    private comprobarConsumoEnergetico(letra: string): string {
      const letrasValidas = ['A', 'B', 'C', 'D', 'E', 'F'];
      return letrasValidas.includes(letra.toUpperCase()) ? letra.toUpperCase() : Electrodomestico.CONSUMO_POR_DEFECTO;
    }
  
    private comprobarColor(color: string): string {
      const coloresValidos = ['blanco', 'negro', 'rojo', 'azul', 'gris'];
      return coloresValidos.includes(color.toLowerCase()) ? color.toLowerCase() : Electrodomestico.COLOR_POR_DEFECTO;
    }
  
    precioFinal(): number {
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
      } else if (this.peso >= 20 && this.peso <= 49) {
        precioFinal += 50;
      } else if (this.peso >= 50 && this.peso <= 79) {
        precioFinal += 80;
      } else if (this.peso >= 80) {
        precioFinal += 100;
      }
  
      return precioFinal;
    }
  }
  