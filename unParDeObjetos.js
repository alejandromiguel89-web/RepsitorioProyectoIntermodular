class Alumno {
  constructor(nombre, apellido, numero) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.numero = numero;
  }
}
const alumno = new Alumno("Alejandro", "Gomez", "7");

console.log(`Hola ${alumno.nombre}`);
