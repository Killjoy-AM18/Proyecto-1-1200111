const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from areas_trabajo',(err,areas_trabajo) =>{
            if(err){
                res.json(err);
            }
            res.json(areas_trabajo);
        });

    });

};

controller.edit = (req, res) => {

    const {idarea}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from areas_trabajo where idarea=?', [idarea], (err,areas_trabajo) => {
            res.json(areas_trabajo[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into areas_trabajo set?', [data], (err,areas_trabajo) => {
        res.json(areas_trabajo);
       });
   })
};

controller.update = (req,res) =>{

    const {idarea}= req.params;
    const nuevo_areas_trabajo = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update areas_trabajo set ? where idarea =?', [nuevo_areas_trabajo, idarea], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idarea}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from areas_trabajo where idarea =?', [idarea], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

clientesController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM clientes', (err, clientes) => {
            if (err) res.json(err);
            res.json(clientes);
        });
    });
};

clientesController.edit = (req, res) => {
    const { num_clie } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM clientes WHERE num_clie = ?', [num_clie], (err, cliente) => {
            res.json(cliente[0]);
        });
    });
};

clientesController.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO clientes SET ?', [data], (err, result) => {
            res.json(result);
        });
    });
};

clientesController.update = (req, res) => {
    const { num_clie } = req.params;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE clientes SET ? WHERE num_clie = ?', [data, num_clie], (err, result) => {
            res.json({ message: "Registro actualizado" });
        });
    });
};

clientesController.delete = (req, res) => {
    const { num_clie } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM clientes WHERE num_clie = ?', [num_clie], (err, result) => {
            res.json({ message: "Registro eliminado" });
        });
    });
};

module.exports = clientesController;

const pagosController = {};

pagosController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM pagos', (err, pagos) => {
            if (err) res.json(err);
            res.json(pagos);
        });
    });
};

pagosController.edit = (req, res) => {
    const { idpago } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM pagos WHERE idpago = ?', [idpago], (err, pago) => {
            res.json(pago[0]);
        });
    });
};

pagosController.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO pagos SET ?', [data], (err, result) => {
            res.json(result);
        });
    });
};

pagosController.update = (req, res) => {
    const { idpago } = req.params;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE pagos SET ? WHERE idpago = ?', [data, idpago], (err, result) => {
            res.json({ message: "Registro actualizado" });
        });
    });
};

pagosController.delete = (req, res) => {
    const { idpago } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM pagos WHERE idpago = ?', [idpago], (err, result) => {
            res.json({ message: "Registro eliminado" });
        });
    });
};

module.exports = pagosController;

const sucursalesController = {};

sucursalesController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM sucursales', (err, sucursales) => {
            if (err) res.json(err);
            res.json(sucursales);
        });
    });
};

sucursalesController.edit = (req, res) => {
    const { idsuc } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM sucursales WHERE idsuc = ?', [idsuc], (err, sucursal) => {
            res.json(sucursal[0]);
        });
    });
};

sucursalesController.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO sucursales SET ?', [data], (err, result) => {
            res.json(result);
        });
    });
};

sucursalesController.update = (req, res) => {
    const { idsuc } = req.params;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE sucursales SET ? WHERE idsuc = ?', [data, idsuc], (err, result) => {
            res.json({ message: "Registro actualizado" });
        });
    });
};

sucursalesController.delete = (req, res) => {
    const { idsuc } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM sucursales WHERE idsuc = ?', [idsuc], (err, result) => {
            res.json({ message: "Registro eliminado" });
        });
    });
};

module.exports = sucursalesController;
const productoController = {};

productoController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM producto', (err, productos) => {
            if (err) res.json(err);
            res.json(productos);
        });
    });
};

productoController.edit = (req, res) => {
    const { num_prod } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM producto WHERE num_prod = ?', [num_prod], (err, producto) => {
            res.json(producto[0]);
        });
    });
};

productoController.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO producto SET ?', [data], (err, result) => {
            res.json(result);
        });
    });
};

productoController.update = (req, res) => {
    const { num_prod } = req.params;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE producto SET ? WHERE num_prod = ?', [data, num_prod], (err, result) => {
            res.json({ message: "Registro actualizado" });
        });
    });
};

productoController.delete = (req, res) => {
    const { num_prod } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM producto WHERE num_prod = ?', [num_prod], (err, result) => {
            res.json({ message: "Registro eliminado" });
        });
    });
};

module.exports = productoController;

const empleadosController = {};

empleadosController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM empleados', (err, empleados) => {
            if (err) res.json(err);
            res.json(empleados);
        });
    });
};

empleadosController.edit = (req, res) => {
    const { idemp } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM empleados WHERE idemp = ?', [idemp], (err, empleado) => {
            res.json(empleado[0]);
        });
    });
};

empleadosController.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO empleados SET ?', [data], (err, result) => {
            res.json(result);
        });
    });
};

empleadosController.update = (req, res) => {
    const { idemp } = req.params;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE empleados SET ? WHERE idemp = ?', [data, idemp], (err, result) => {
            res.json({ message: "Registro actualizado" });
        });
    });
};

empleadosController.delete = (req, res) => {
    const { idemp } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM empleados WHERE idemp = ?', [idemp], (err, result) => {
            res.json({ message: "Registro eliminado" });
        });
    });
};

module.exports = empleadosController;

const tipoproductoController = {};

tipoproductoController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tipoproducto', (err, tipos) => {
            if (err) res.json(err);
            res.json(tipos);
        });
    });
};

tipoproductoController.edit = (req, res) => {
    const { idtpprod } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tipoproducto WHERE idtpprod = ?', [idtpprod], (err, tipo) => {
            res.json(tipo[0]);
        });
    });
};

tipoproductoController.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO tipoproducto SET ?', [data], (err, result) => {
            res.json(result);
        });
    });
};

tipoproductoController.update = (req, res) => {
    const { idtpprod } = req.params;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE tipoproducto SET ? WHERE idtpprod = ?', [data, idtpprod], (err, result) => {
            res.json({ message: "Registro actualizado" });
        });
    });
};

tipoproductoController.delete = (req, res) => {
    const { idtpprod } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM tipoproducto WHERE idtpprod = ?', [idtpprod], (err, result) => {
            res.json({ message: "Registro eliminado" });
        });
    });
};

module.exports = tipoproductoController;

const formapagoController = {};

formapagoController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM formapago', (err, formas) => {
            if (err) res.json(err);
            res.json(formas);
        });
    });
};

formapagoController.edit = (req, res) => {
    const { idfpago } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM formapago WHERE idfpago = ?', [idfpago], (err, forma) => {
            res.json(forma[0]);
        });
    });
};

formapagoController.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO formapago SET ?', [data], (err, result) => {
            res.json(result);
        });
    });
};

formapagoController.update = (req, res) => {
    const { idfpago } = req.params;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE formapago SET ? WHERE idfpago = ?', [data, idfpago], (err, result) => {
            res.json({ message: "Registro actualizado" });
        });
    });
};

formapagoController.delete = (req, res) => {
    const { idfpago } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM formapago WHERE idfpago = ?', [idfpago], (err, result) => {
            res.json({ message: "Registro eliminado" });
        });
    });
};

module.exports = formapagoController;