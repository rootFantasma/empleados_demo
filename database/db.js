const mysql = require('mysql');

const conexion = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'crud_empleados'
});

conexion.connect((error)=>{
	if (error) {
		console.error('Error : '+error);
		return
	}
	console.log('Conexion Existosa');
});

module.exports = conexion;