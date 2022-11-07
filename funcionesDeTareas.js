const fs = require("fs");
const path = require("path");
const archivoTareas = {
    leerArchivo: function () {
        const tareas = fs.readFileSync(path.join("tareas.json"), "utf-8");
        const tareasParse = JSON.parse(tareas);
        return tareasParse
    },
    guardarJSON: function (guardar) {
        fs.writeFileSync(path.join(__dirname, "tareas.json"), JSON.stringify(guardar, null, 5), "utf-8")
        return "Archivo de tareas actualizado!!"
    },
    guardarTareas: function(titulo, estado){
        const leerJSON = this.leerArchivo();
        const nuevoId = leerJSON[leerJSON.length - 1].id
        const nuevaTarea = {
            id : nuevoId + 1,
            titulo : titulo,
            estado: estado
        }
        leerJSON.push(nuevaTarea)
        this.guardarJSON(leerJSON)
        return "Agregaste una nueva tarea"
    },
    filtrarPorEstado: function (estado) {

        const tareas = this.leerArchivo();
        const buscar = tareas.filter(function (tareas) {
            return tareas.estado.toLowerCase().includes(estado.toLowerCase())});
        return buscar
    }
}
module.exports = archivoTareas;