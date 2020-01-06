const express = require('express');
const path = require('path');
const server = express();
const morgan = require('morgan');
const http = require('http');
const cors = require('cors');

// settings
server.set('port', process.env.PORT || 4000);
server.set('Vistas', path.join(__dirname, 'Vistas'));
server.set('view engine', 'ejs');
server.use(cors());
server.options('*', cors())

//middlewares
server.use(morgan('dev'));
server.use(express.json());

// rutas
server.use('/Crear_Admin', require('./Rutas/server_administradores'));
server.use('/Crear_Cola', require('./Rutas/server_colaboradores'));
server.use('/Crear_Estu', require('./Rutas/server_estudiantes'));
server.use('/Crear_Cate', require('./Rutas/server_catedraticos'));
server.use('/Crear_Bien', require('./Rutas/server_inventario'));
server.use('/Crear_Conta', require('./Rutas/server_contactos'));
server.use('/Crear_Curso', require('./Rutas/server_cursos'));
server.use('/Presupuesto', require('./Rutas/server_presupuesto'));
server.use('/Asignacion_Curso', require('./Rutas/server_asignacion_cursos'));
server.use('/Noticias', require('./Rutas/server_noticias'));
server.use('/Actividades',require('./Rutas/server_actividades'))
server.use('/Tareas',require('./Rutas/server_tareas'))
server.use('/Asignacion_Actividad',require('./Rutas/server_asignacion_actividades'))
server.use('/Mensajes',require('./Rutas/server_mensajes'))
server.use('/Entregas',require('./Rutas/server_entregas'))
server.use('/Codigos',require('./Rutas/server_codigo'))
server.use('/Puntuacion',require('./Rutas/server_puntuacion'))

// archivos estaticos
server.use(express.static(path.join('../public')));

// iniciar servidor
server.listen(server.get('port'), () => { console.log('Server on port', server.get('port')) });