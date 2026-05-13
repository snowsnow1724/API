const conexion = require("../config/db");

//Consulta
function obtenerAlumnos(callback){
    const sql = "SELECT * FROM alumnos";
    conexion.query(sql,callback);
}

//Insertar
function agregarAlumno(nombre,callback){
    const sql = "INSERT INTO alumnos (nombre) VALUES (?)";
    conexion.query(sql,nombre,callback);
}

module.exports={
    obtenerAlumnos,
    agregarAlumno
};
