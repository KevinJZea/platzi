function curso(titulo, docente, categoria) {
    this.titulo = titulo;
    this.docente = docente;
    this.categoria = categoria;
}

var numCursos = parseInt(prompt("¿Cuántos cursos quieres crear?: "));
var cursos = [];

// for (let i = 0; i < numCursos; i++) {
    
//     var cursos = [];

//     for (let j = 0; j < numCursos; j++) {
//         var nuevoCurso = cursos.push();
        
//     }
    
//     cursos[i] = new curso(
//         prompt(`Ingresa el nombre del curso ${i+1}: `),
//         prompt(`Ingresa el docente del curso ${i+1}: `),
//         prompt(`Ingresa la categoría del curso ${i+1}: `)
//     )

// }


for (let i = 0; i < numCursos; i++) {
    
    var nuevoCurso = cursos.push(new curso(
        prompt(`Ingresa el nombre del curso ${i+1}: `),
        prompt(`Ingresa el docente del curso ${i+1}: `),
        prompt(`Ingresa la categoría del curso ${i+1}: `)
    ));

}

