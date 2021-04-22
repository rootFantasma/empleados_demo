const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

//Muestra los registros
router.get('/', (req, res)=>{

	conexion.query('SELECT * FROM empleados', (error, results)=>{
		if (error) {
			throw error;
		}else{
			res.render('index', {results:results});
		}
	})
});


//Datos JSON
//Muestra los registros
router.get('/data', (req, res)=>{

	conexion.query('SELECT * FROM empleados', (error, results)=>{
		if (error) {
			throw error;
		}else{
			data = JSON.stringify(results);
			res.send(data);
		}
	})
});


//Crear Empleado
router.get('/create', (req, res)=>{
	res.render('create');
});

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);


//Editar Empleado

router.get('/edit/:id', (req, res)=>{
	const id = req.params.id;
	conexion.query('SELECT * FROM empleados WHERE id=?', [id], (error, results)=>{
		if (error) {
			throw error;
		}else{
			res.render('edit', {empleado:results[0]});
		}
	})
})

//Eliminar Usuario

router.get('/delete/:id', (req, res)=>{
	const id = req.params.id;
	conexion.query('DELETE FROM empleados WHERE id = ?', [id], (error, results)=>{
		if (error) {
			throw error;
		}else{
			res.redirect('/');
		}
	})
})

module.exports = router;