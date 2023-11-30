import { Password } from './contraseña';

const password1 = new Password();
console.log(`Contraseña: ${password1.getContraseña()}`);

const password2 = new Password(12);
console.log(`Longitud: ${password2.getLongitud()}`);
console.log(`Contraseña: ${password2.getContraseña()}`);