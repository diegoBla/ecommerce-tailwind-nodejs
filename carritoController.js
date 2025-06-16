const WA_NUMBER = '519XXXXXXXX'; // Reemplaza con tu número

exports.agregarAlCarrito = (carrito) => (req, res) => {
  const { id, cantidad } = req.body;
  const prod = carrito.find(p => p.id === id);
  if (prod) prod.cantidad = parseInt(cantidad);
  else carrito.push({ id, cantidad: parseInt(cantidad) });
  res.redirect('/');
};

exports.verCarrito = (carrito) => (req, res) => {
  res.render('carrito', { carrito });
};

exports.finalizarPedido = (carrito) => (req, res) => {
  res.render('gracias', { carrito, waNumber: WA_NUMBER });
};
