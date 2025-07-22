const mysql = require('mysql');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'My181*-*',
  database: 'vehiculos'
});

conexion.connect((err) => {
  if (err) {
    console.error('Error de conexión:', err.stack);
    return;
  }
  console.log('Conectado como id ' + conexion.threadId);
});


conexion.query('SELECT * FROM vehiculos', (error, resultados, campos) => {
  if (error) throw error;
  console.log('Resultados:', resultados);
});

conexion.end();