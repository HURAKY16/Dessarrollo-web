
const express = require('express');
const connectDB = require('./db');  // Ruta correcta
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

connectDB().then((Bd) => {
  const usuarios = Bd.collection('usuarios');

  app.get('/api/usuarios', async (req, res) => {
    const data = await usuarios.find().toArray();
    res.json(data);
  });

  app.post('/api/usuarios', async (req, res) => {
    const nuevo = req.body;
    await usuarios.insertOne(nuevo);
    res.status(201).send('Usuario insertado');
  });

  app.listen(3001, () => {
    console.log('✅ API corriendo en http://localhost:3001');
  });
});