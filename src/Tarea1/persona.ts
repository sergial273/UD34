export class Persona {
    private nombre: string;
    private edad: number;
    private dni: string;
    private sexo: string;
    private peso: number;
    private altura: number;
  
    private static SEXO_POR_DEFECTO: string = 'H';
  
    constructor(nombre: string = '', edad: number = 0, dni: string, sexo: string = Persona.SEXO_POR_DEFECTO, peso: number = 0, altura: number = 0) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
    }
  
    getNombre(): string {
      return this.nombre;
    }
  
    setNombre(nombre: string): void {
      this.nombre = nombre;
    }
  
    getEdad(): number {
      return this.edad;
    }
  
    setEdad(edad: number): void {
      this.edad = edad;
    }
  
    getDNI(): string {
      return this.dni;
    }
  
    getSexo(): string {
      return this.sexo;
    }
  
    getPeso(): number {
      return this.peso;
    }
  
    setPeso(peso: number): void {
      this.peso = peso;
    }
  
    getAltura(): number {
      return this.altura;
    }
  
    setAltura(altura: number): void {
      this.altura = altura;
    }
  }