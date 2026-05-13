const express = require("express");
const alumnoModel = require("./models/alumnoModel");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.static("public"));

//GET
app.get("/api/alumnos", (req,res)=>{
    alumnoModel.obtenerAlumnos((error,resultados)=>{
        if(error){
            res.status(500).json({mensaje:"Error al consultar alumno"});
        } else {
            res.json(resultados);
        }
    });
});

//POST
app.post("/api/alumnos",(req,res)=>{
    const {nombre} = req.body;
    alumnoModel.agregarAlumno(nombre,(error,resultado)=>{
        if(error){
            res.status(500).json({mensaje:"Error al guardar"});
        } else {
            res.json({
                mensaje:"Alumno guardado correctamente",id:resultado.insertId
            });
        }
    });
});

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
