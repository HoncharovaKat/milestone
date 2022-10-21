// Completa el mètode "getPeopleOver".
// Aquest mètode rep un número (age) com a únic argument.
// Aquest mètode ha de retornar un array d'strings amb el
// "first name" + "last name" de cada persona que sigui més gran
// que "age".

// Llegeix el fitxer de test associat per comprendre el format
// del resultat que s'espera.

// La propietat "people" introduïda per inicialitzar la classe
// és un array d'objectes amb aquesta estructura:

// [
//   { firstName: "John", lastName: "Smith", age: 40 },
//   { firstName: "Jane", lastName: "Doe", age: 68 },
//   { firstName: "Grace", lastName: "Hopper", age: 85 },
//   { firstName: "Bart", lastName: "Simpson", age: 10 }
// ];

// Per construir aquest mètode només pots fer servir les Higher
// Order Functions disponibles a l'Array prototype (forEach, map,
// filter, find, reduce o altres).
// Les pots fer servir tants cops com necessitis.


class Inhabitants {
  constructor(people) {
    this.people = people;
  }

  getPeopleOver(age) {}
}

module.exports = Inhabitants;
