export class Password {
    private longitud: number;
    private contraseña: string;
  
    constructor(longitud: number = 8) {
      this.longitud = longitud;
      this.contraseña = this.generarContraseñaAleatoria();
    }
  
    private generarContraseñaAleatoria(): string {
      const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let contraseñaGenerada = '';
      for (let i = 0; i < this.longitud; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        contraseñaGenerada += caracteres.charAt(indice);
      }
      return contraseñaGenerada;
    }
  
    getLongitud(): number {
      return this.longitud;
    }
  
    setLongitud(longitud: number): void {
      this.longitud = longitud;
      this.contraseña = this.generarContraseñaAleatoria();
    }
  
    getContraseña(): string {
      return this.contraseña;
    }
  }