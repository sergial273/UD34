"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contrase_a_1 = require("./contrase\u00F1a");
const password1 = new contrase_a_1.Password();
console.log(`Contraseña: ${password1.getContraseña()}`);
const password2 = new contrase_a_1.Password(12);
console.log(`Longitud: ${password2.getLongitud()}`);
console.log(`Contraseña: ${password2.getContraseña()}`);
