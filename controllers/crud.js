const conexion = require('../database/db');

exports.save = (req, res)=>{
	const nombre = req.body.nombre;
	const apellido = req.body.apellido;
	const nacimiento = req.body.nacimiento;
	const puesto = req.body.puesto;
	conexion.query('INSERT INTO empleados SET ?', {nombre:nombre, apellido:apellido, nacimiento:nacimiento, puesto:puesto}, (error, results)=>{
		if (error) {
			console.log(error);
		}else{
			res.redirect('/');
		}
	})
};

exports.update = (req, res)=>{
	const id = req.body.id;
	const nombre = req.body.nombre;
	const apellido = req.body.apellido;
	const nacimiento = req.body.nacimiento;
	const puesto = req.body.puesto;
	conexion.query('UPDATE empleados SET ? WHERE id = ?',[{nombre:nombre, apellido:apellido, nacimiento:nacimiento, puesto:puesto}, id], (error, results)=>{
		if (error) {
			console.log(error);
		}else{
			res.redirect('/');
		}
	});
}
