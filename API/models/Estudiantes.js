const db = require('../config/db');
/*  Pueden usarlo así, pero no es necesario y exportar los métodos con exports 
//module .exports = Estudiante;
const Estudiante = {
  getAll: (callback) => {
    const query = 'SELECT * FROM estudiantes';
    db.query(query, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  }
};
*/

// Obtener todos los estudiantes
exports.getAllStudents = (callback) => {
  const query = 'SELECT * FROM estudiantes';
  db.query(query, callback);
};


// Consultar estudiantes por estatus
exports.getStudentsByStatus = (estatus, callback) => {
  const query = 'SELECT * FROM estudiantes WHERE estatus = ?';
  db.query(query, [estatus], callback);
};

// Agregar un nuevo estudiante
exports.addStudent = (studentData, callback) => {
  const query = 'INSERT INTO estudiantes (matricula, nombre, carrera) VALUES (?, ?, ?)';
  db.query(query, [studentData.matricula, studentData.nombre, studentData.carrera], callback);

};

// Modificar un estudiante existente
exports.updateStudent = (matricula, studentData, callback) => {
  const query = 'UPDATE estudiantes SET nombre = ?, carrera = ? WHERE matricula = ?';
  db.query(query, [studentData.nombre, studentData.carrera, matricula], callback);
};


// Eliminar un estudiante
exports.deleteStudent = (matricula, callback) => {
  const query = 'DELETE FROM estudiantes WHERE matricula= ?';
  db.query(query, [matricula], callback);
};

/*module.exports = Estudiante;*/