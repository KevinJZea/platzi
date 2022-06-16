const elements = ["Fire", "Water", "Air", "Earth"];

let rta = "";
const separator = "--";
for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  if (i < elements.length - 1) {
    rta += element + separator;
  } else {
    rta += element;
  }
}
console.log("For", rta);

const rta2 = elements.join("--");
console.log("Join", rta2);

// ---------- || ----------

const title = "Curso de Manipulación de Arrays";

const url = title.split(" ").join("-").toLowerCase();
console.log("url:", url);
