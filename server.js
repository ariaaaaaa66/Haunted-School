const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'haunted_school'
});

db.connect((err) => {
    if (err) {
        console.error('❌ Error conectando a MySQL:', err);
        console.log('📌 Asegúrate de que MySQL esté corriendo en XAMPP');
        return;
    }
    console.log('✅ Conectado a MySQL');
    console.log('📊 Base de datos: haunted_school');
});

app.post('/api/guardar', (req, res) => {
    const { jugador_nombre, nivel_actual, vidas, puntos, inventario, partida_perdida } = req.body;
    
    if (!jugador_nombre) {
        res.status(400).json({ error: 'Nombre de jugador requerido' });
        return;
    }
    
    const checkSql = 'SELECT mejor_puntaje, partidas_jugadas FROM progreso WHERE jugador_nombre = ?';
    
    db.query(checkSql, [jugador_nombre], (err, results) => {
        if (err) {
            console.error('Error consultando:', err);
            res.status(500).json({ error: 'Error DB' });
            return;
        }
        
        const existe = results.length > 0;
        const mejorPuntajeActual = existe ? (results[0].mejor_puntaje || 0) : 0;
        const mejorPuntaje = Math.max(mejorPuntajeActual, puntos || 0);
        const partidas = existe ? (results[0].partidas_jugadas || 0) + (partida_perdida ? 1 : 0) : 1;
        
        const sql = `
            INSERT INTO progreso (jugador_nombre, nivel_actual, vidas, puntos, inventario, partidas_jugadas, mejor_puntaje, ultimo_juego)
            VALUES (?, ?, ?, ?, ?, ?, ?, NOW())
            ON DUPLICATE KEY UPDATE
                nivel_actual = VALUES(nivel_actual),
                vidas = VALUES(vidas),
                puntos = VALUES(puntos),
                inventario = VALUES(inventario),
                partidas_jugadas = VALUES(partidas_jugadas),
                mejor_puntaje = VALUES(mejor_puntaje),
                ultimo_juego = NOW()
        `;
        
        const values = [
            jugador_nombre,
            nivel_actual || 1,
            vidas || 0,
            puntos || 0,
            JSON.stringify(inventario || []),
            partidas,
            mejorPuntaje
        ];
        
        db.query(sql, values, (err2) => {
            if (err2) {
                console.error('Error guardando:', err2);
                res.status(500).json({ error: 'Error guardando' });
                return;
            }
            res.json({ 
                success: true, 
                message: '✅ Progreso guardado',
                mejor_puntaje: mejorPuntaje,
                partidas_jugadas: partidas
            });
        });
    });
});

app.get('/api/cargar/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    
    const sql = 'SELECT * FROM progreso WHERE jugador_nombre = ?';
    db.query(sql, [nombre], (err, results) => {
        if (err) {
            console.error('Error cargando:', err);
            res.status(500).json({ error: 'Error cargando progreso' });
            return;
        }
        
        if (results.length === 0) {
            res.json({ existe: false });
            return;
        }
        
        const data = results[0];
        
        let inventario = [];
        try {
            inventario = JSON.parse(data.inventario || '[]');
        } catch (e) {
            inventario = [];
        }
        
        res.json({
            existe: true,
            nivel_actual: data.nivel_actual,
            vidas: data.vidas,
            puntos: data.puntos,
            inventario: inventario,
            mejor_puntaje: data.mejor_puntaje || 0,
            partidas_jugadas: data.partidas_jugadas || 1,
            ultimo_juego: data.ultimo_juego
        });
    });
});

app.get('/api/ranking', (req, res) => {
    const sql = `
        SELECT jugador_nombre, mejor_puntaje, nivel_actual, partidas_jugadas, ultimo_juego 
        FROM progreso 
        ORDER BY mejor_puntaje DESC, nivel_actual DESC 
        LIMIT 10
    `;
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error ranking:', err);
            res.status(500).json({ error: 'Error ranking' });
            return;
        }
        res.json(results);
    });
});

app.delete('/api/borrar/:nombre', (req, res) => {
    db.query('DELETE FROM progreso WHERE jugador_nombre = ?', [req.params.nombre], (err) => {
        if (err) {
            res.status(500).json({ error: 'Error' });
            return;
        }
        res.json({ success: true });
    });
});

// cd C:\xampp\htdocs\haunted-school
// node server.js

app.listen(port, () => {
    console.log(`🚀 Servidor en http://localhost:${port}`);
    console.log('📝 Endpoints disponibles:');
    console.log(`  POST   http://localhost:${port}/api/guardar`);
    console.log(`  GET    http://localhost:${port}/api/cargar/:nombre`);
    console.log(`  GET    http://localhost:${port}/api/ranking`);
    console.log(`  DELETE http://localhost:${port}/api/borrar/:nombre`);
});