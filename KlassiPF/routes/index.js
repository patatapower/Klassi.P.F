'use strict'

const express = require('express');
const api = express.Router();

// /* Controllers */
const alumnoController = require("../controllers/alumnoController");
const profesoresController = require("../controllers/profesoresController");
const claseController = require("../controllers/claseController");
const utilsController = require("../controllers/utilsController");

// /* Alumno ROUTES */
api.post("/register", alumnoController.postRegister);
api.post("/login", alumnoController.postLogin);
// gets
api.get("/alumnos/:id", alumnoController.findAlumno);

// /* Profesores ROUTES */
api.get("/profesores/materias/:id", profesoresController.findProfesorByMateria);
api.get("/profesores/:id", profesoresController.findProfesorById);
api.get("/profesores/myz/:id:id", profesoresController.findProfesorById);
api.get("/profesores/horarios/:date", profesoresController.findProfesorById);

// /* Clases ROUTES */
api.post("/clase", claseController.createClass)
api.post("/clase/id/:id", claseController.createClass)
api.post("/clase/profesor/:id", claseController.createClass)
api.post("/clase/fecha/:id", claseController.createClass)
api.post("/clase/alumno/:id", claseController.createClass)


// /* Clases utils */
api.get("/utils/materias", utilsController.getMaterias)
api.get("/utils/materias/escolaridad/:id", utilsController.getMaterias)
api.get("/utils/escolaridad", utilsController.getEscolaridad)
api.get("/utils/zona", utilsController.getZona)
/** END ROUTES **/

module.exports = api;
