const productosController = {};

// Listar productos
productosController.listar = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM producto', (err, productos) => {
            if (err) return res.status(500).json(err);
            res.json(productos);
        });
    });
};

// Agregar producto
productosController.agregar = (req, res) => {
    const datos = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO producto SET ?', [datos], (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ mensaje: 'Producto agregado' });
        });
    });
};

// Editar producto
productosController.editar = (req, res) => {
    const { id } = req.params;
    const nuevosDatos = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE producto SET ? WHERE id = ?', [nuevosDatos, id], (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ mensaje: 'Producto actualizado' });
        });
    });
};

// Eliminar producto
productosController.eliminar = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM producto WHERE id = ?', [id], (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ mensaje: 'Producto eliminado' });
        });
    });
};

module.exports = productosController;