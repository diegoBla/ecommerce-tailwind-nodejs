const fs = require('fs');
const csv = require('csv-parser');
const productos = [];

fs.createReadStream('./data/productos.csv')
  .pipe(csv())
  .on('data', (row) => productos.push(row));

exports.listaProductos = (req, res) => {
  res.render('index', { productos });
};
