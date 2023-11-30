
import { Persona } from './persona';

const persona1 = new Persona('Juan', 30, 'dni', 'H', 75, 175);
const persona2 = new Persona('Maria', 25, 'dni1', 'M', 60, 160);
const persona3 = new Persona('Pedro', 40, 'dni2', undefined, 80, 180); 

console.log(persona1.getNombre());
console.log(persona2.getEdad());
console.log(persona3.getSexo());