const process = require("process");
const archivoTareas = require("./funcionesDeTareas");
const comando = process.argv[2];
let estado;
let nombre;
switch (comando) {
    case "listar":
        const listaTareas = archivoTareas.leerArchivo();
        console.log("\nListado de tareas")
        console.log("-----------------------------------------------------");
        listaTareas.forEach(listaTareas => {
        console.log(`   ${listaTareas.id}- ${listaTareas.titulo}  -->  ${listaTareas.estado}`);
        }); 
        console.log("\n")
        break;
    case "crear": // solo se pasa el numbre de la tarea. el estado siempre sera guardado como "pendiente"
            nombre = process.argv[3]
            console.log(archivoTareas.guardarTareas(nombre, "pendiente"));
        break;
    case "filtrar": //los parametros de busqueda son "pendiente", "en proceso" y "terminada"
        estado = process.argv[3]
        estados = archivoTareas.filtrarPorEstado(estado);
        console.log("\nTareas " + estado + "s\n-----------------------------------------------------");
        estados.forEach(listaTareas => {
        console.log(`   ${listaTareas.id}- ${listaTareas.titulo}`);
        });
        console.log("\n")
        break;
    case undefined:
    console.log("\nAtencion, tenes que pasar una accion!!!\n" + "Las acciones disponible son: listar - crear - filtrar\n");
        break;
    default:
        console.log("\nNo entiendo que quieres hacer!!!\n" + "Las acciones disponible son: listar - crear - filtrar\n");   
        break;
}

