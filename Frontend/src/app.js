var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/api/ventas', empresaRoutes);


app.use(express.static(path.join(__dirname,'public')));
