const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Yefer:1305Qs..25@programacion.btvq7.mongodb.net/?retryWrites=true&w=majority&appName=programacion'; // Usa tu URI si estás en MongoDB Atlas

async function connectDB() {
    try {
        const client = await MongoClient.connect(uri);  // Elimina las opciones aquí
        console.log('Conectado a MongoDB');

        const db = client.db('Bd_Houspet'); // Cambia esto por el nombre que prefieras
        return db;
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        throw error; // Lanza el error para que se maneje fuera
    }
}

module.exports = connectDB;