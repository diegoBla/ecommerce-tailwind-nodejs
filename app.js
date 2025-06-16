const express = require('express');
const path = require('path');
const productosRouter = require('./routes/productos');
const carritoRouter = require('./routes/carrito');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', productosRouter);
app.use('/carrito', carritoRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
