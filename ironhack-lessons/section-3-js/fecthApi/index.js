//Funcion para llamar a un recurso interno que seria el doc de txt document (sample.txt)
//part 1 creamos la funcion

const getText = () => {
    // part 2 llamamos al metodo fetch y le pasamos la url de lrecurso que queremos usar
    fetch("sample.txt")
    // part 3 recibimos la llamada por parte del fetch y dentro de la promesa llamamos a una expresiión para poder manipular/limpiar la info que recibimos dentro del fetch. Como esta info es texto (.txt) tenemos que convertirlo en un string.
    .then((response) => response.text())
    .then((cleanText) => console.log(cleanText))
    .catch((error) => console.log(error))
}
document.querySelector('#getText').addEventListener('click', getText);
