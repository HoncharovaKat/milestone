// Utilitza tot allò que has aprè per a manipular el DOM per tal de completar les següents preguntes
// quan facis "submit" del formulari:
// 1. Canvia el estil del <body> element perquè el text tingui una font-family de "Verdana, sans-serif".
// 2. Assegura't que tots els <span> mostrin el contingut que has introduït en els inputs.
// 3. Fes un loop per a cada <li> i canvia la classe per a "list-item".
// 4. Crea un nou <img> element, fes que el seu atribut src sigui una imatge de tu,
//    i afegeix-la a la part superior de la pàgina "About Me". Si necessites afegir algun element addicional
//    al index.html, pots fer-ho (però busca a Google si hi ha alguna manera de fer-ho sense afegir elements addicioals!)
// 5. Bonus - Fes que la teva pàgina "About Me" tingui una estil més polit.

function handleSubmit(event) {
  // No eliminis aquesta linia!
  event.preventDefault();
  // El teu codi a partir d'aqui:
  alert("Submit!");
}

const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);
