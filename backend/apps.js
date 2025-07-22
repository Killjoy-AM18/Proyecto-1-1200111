const express= require('express');
const morgan = require('morgan');
const path= require('path');
const mysql= require('mysql');
const cors = require('cors');
const myConnection= require('express-myconnection');
const app= express();

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:4200", 
                    credentials: true
                }
            ]
        }
}
};

app.use(cors(
    config.application.cors.server
  ));
app.set('port', process.env.PORT || 4200);

app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'My181*-*',
    port:3306,
    database:'ventas'
}, 'single'));
app.use(express.urlencoded({extended: false}));

var bodyParser = require('body-parser');

app.use(bodyParser.json());


app.listen(app.get('port'), () =>{
    console.log("PUERTO 4200");
});	

const productosRoutes = require('./routes/productos');
app.use('/api/productos', productosRoutes);

const estadosRoutes = require('./rutas/estados');
const paisesRoutes = require('./rutas/paises');
const ciudadRoutes = require('./rutas/ciudad');

const asignaviajeRoutes = require('./rutas/asignaviaje');
const bancosRoutes = require('./rutas/bancos');
const destinoRoutes = require('./rutas/destino');

const empleadosRoutes = require('./rutas/empleados');
const origenRoutes = require('./rutas/origen');
const tipoempleadoRoutes = require('./rutas/tipoempleado');

const tipousuariosRoutes = require('./rutas/tipousuarios');
const tipovehiculoRoutes = require('./rutas/tipovehiculo');
const transportistasRoutes = require('./rutas/transportistas');

const usuariosRoutes = require('./rutas/usuarios');
const vehiculosRoutes = require('./rutas/vehiculos');
const viajecompletoRoutes = require('./rutas/viajecompleto');
const formabagoRoutes = require('./rutas/formapago');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/api/ventas', ventasRoutes);

app.use(express.static(path.join(__dirname,'public')));
