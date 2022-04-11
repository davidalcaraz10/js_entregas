let nuevaCancion
let capturarCancion
let capturarArtista

function capturar(){
    alert("Termina la lista con «aceptar» sin escribir nada")
    while (true){
        function Lista(cancion, artista){
            this.cancion = cancion;
            this.artista = artista;
        }
        capturarCancion = prompt("Escribe una canción");
        if(capturarCancion == "") break   
        capturarArtista = prompt("Escribe el artista de la canción");
        
        nuevaCancion = new Lista(capturarCancion, capturarArtista);
        agregar();
    } 
}

let guardados = []
function agregar(){
    guardados.push(nuevaCancion);
    console.log(guardados);
}

capturar()