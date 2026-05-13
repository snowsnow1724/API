const mysql = require("mysql2");
const conexion = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "escuela"
});

conexion.connect((error)=>{
    if(error){
        console.log("Error al conectar con MySQL: ", error);
    }
});

module.exports = conexion;
