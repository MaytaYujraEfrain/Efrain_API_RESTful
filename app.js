const express = require('express');
const mysql = require('mysql');

const app = express();

// Configurar la conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  
    database: 'laboratorio'  
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Definir una ruta para obtener datos desde la base de datos
app.get('/usuarios', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Failed to retrieve data', details: err.message });
            return;
        }
        res.json(results);  // Devolver los resultados en formato JSON
    });
});

const PORT = 3002;  // Cambiar a 3001
app.listen(PORT, () => {  // Iniciar el servidor en el puerto 3001
    console.log(`Server started on port ${PORT}`);
});
