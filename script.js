const JUEGO = {
    nivelActual: 0,
    vidas: 3,
    puntos: 0,
    inventario: [],
    enJuego: false
};

const DIFICULTADES = {
    facil: {
        nombre: 'FÁCIL',
        vidas: 5,
        multiplicadorVelocidad: 0.6,
        recompensa: 0.8,
        color: '#00dd88'
    },
    normal: {
        nombre: 'NORMAL',
        vidas: 3,
        multiplicadorVelocidad: 1.0,
        recompensa: 1.0,
        color: '#ffcc00'
    },
    dificil: {
        nombre: 'DIFÍCIL',
        vidas: 2,
        multiplicadorVelocidad: 1.6,
        recompensa: 1.5,
        color: '#ff2222'
    }
};

const NIVELES = [
    {
        id: 1,
        nombre: "Aula Abandonada",
        objetivo: "Encuentra la llave oxidada",
        ancho: 800,
        alto: 400,
        gravedad: 0.5,
        jugador: {x: 40, y: 300, w: 28, h: 36},
        items: [{x: 420, y: 305, w: 18, h: 18, emoji: '🔑', nombre: 'Llave Oxidada'}],
        enemigos: [
            {x: 550, y: 310, w: 28, h: 32, velocidad: 1.2, rango: 150, tipo: 'fantasma'}
        ],
        plataformas: [
            {x: 0, y: 370, w: 800, h: 30},
            {x: 180, y: 290, w: 100, h: 14},
            {x: 300, y: 250, w: 120, h: 14}
        ],
        zonasSeguras: [
            {x: 180, y: 290, w: 100, h: 14},
            {x: 300, y: 250, w: 120, h: 14}
        ],
        salida: {x: 700, y: 330, w: 40, h: 40},
        mensaje: "El aula está en silencio... demasiado silencio...",
        pista: "La llave está sobre el pupitre del profesor",
        fondo: '#0d0d18',
        recompensa: 10,
        obstaculos: [
            {x: 237, y: 272, w: 30, h: 15, tipo: 'pinchos'},
            {x: 620, y: 355, w: 30, h: 10, tipo: 'pinchos'},
            {x: 360, y: 355, w: 40, h: 15, tipo: 'fuego'},
            {x: 550, y: 355, w: 30, h: 15, tipo: 'pinchos'},
            {x: 150, y: 355, w: 30, h: 15, tipo: 'fuego'}
        ],
        decoraciones: [
            {x: 80, y: 310, emoji: '🪑', size: 28},
            {x: 225, y: 270, emoji: '🪑', size: 28},
            {x: 360, y: 210, emoji: '📚', size: 24}
        ]
    },
    {
        id: 2,
        nombre: "Pasillo Oscuro",
        objetivo: "Encuentra el diario",
        ancho: 1000,
        alto: 400,
        gravedad: 0.5,
        jugador: {x: 40, y: 300, w: 28, h: 36},
        items: [{x: 520, y: 305, w: 18, h: 18, emoji: '📖', nombre: 'Diario del Estudiante'}],
        enemigos: [
            {x: 300, y: 310, w: 28, h: 32, velocidad: 1.5, rango: 200, tipo: 'fantasma'},
            {x: 600, y: 150, w: 30, h: 30, velocidad: 1.8, rango: 150, tipo: 'murcielago'}
        ],
        plataformas: [
            {x: 0, y: 370, w: 1000, h: 40},
            {x: 140, y: 280, w: 130, h: 14},
            {x: 360, y: 230, w: 100, h: 14},
            {x: 600, y: 280, w: 80, h: 14},
            {x: 800, y: 230, w: 100, h: 23}
        ],
        zonasSeguras: [
            {x: 140, y: 280, w: 80, h: 14},
            {x: 600, y: 280, w: 80, h: 14}
        ],
        salida: {x: 920, y: 330, w: 40, h: 40},
        mensaje: "El pasillo se estira interminablemente...",
        pista: "El diario está en el suelo, cerca de la taquilla rota",
        fondo: '#0a0a14',
        recompensa: 15,
        obstaculos: [
            {x: 200, y: 355, w: 50, h: 15, tipo: 'pinchos'},
            {x: 448, y: 355, w: 50, h: 15, tipo: 'fuego'},
            {x: 750, y: 355, w: 40, h: 15, tipo: 'pinchos'},
            {x: 350, y: 355, w: 40, h: 15, tipo: 'fuego'},
            {x: 880, y: 355, w: 30, h: 15, tipo: 'pinchos'}
        ],
        decoraciones: [
            {x: 200, y: 310, emoji: '🚪', size: 32},
            {x: 500, y: 310, emoji: '🚪', size: 32},
            {x: 800, y: 310, emoji: '🚪', size: 32}
        ]
    },
    {
        id: 3,
        nombre: "Biblioteca Maldita",
        objetivo: "Encuentra el libro antiguo",
        ancho: 900,
        alto: 400,
        gravedad: 0.5,
        jugador: {x: 40, y: 300, w: 28, h: 36},
        items: [{x: 460, y: 305, w: 18, h: 18, emoji: '📜', nombre: 'Libro Antiguo'}],
        enemigos: [
            {x: 650, y: 310, w: 28, h: 32, velocidad: 1.2, rango: 180, tipo: 'fantasma'},
            {x: 400, y: 180, w: 26, h: 26, velocidad: 1.0, rango: 120, tipo: 'araña'}
        ],
        plataformas: [
            {x: 0, y: 370, w: 900, h: 30},
            {x: 100, y: 290, w: 120, h: 14},
            {x: 350, y: 240, w: 150, h: 14},
            {x: 650, y: 290, w: 120, h: 14}
        ],
        zonasSeguras: [
            {x: 350, y: 240, w: 150, h: 14}
        ],
        salida: {x: 820, y: 330, w: 40, h: 40},
        mensaje: "Los libros parecen moverse solos...",
        pista: "El libro está en la sección de historia",
        fondo: '#0a0805',
        recompensa: 20,
        obstaculos: [
            {x: 220, y: 355, w: 60, h: 15, tipo: 'fuego'},
            {x: 520, y: 355, w: 40, h: 15, tipo: 'pinchos'},
            {x: 700, y: 355, w: 50, h: 15, tipo: 'fuego'},
            {x: 380, y: 355, w: 40, h: 15, tipo: 'pinchos'}
        ],
        decoraciones: [
            {x: 160, y: 230, emoji: '📚', size: 24},
            {x: 400, y: 210, emoji: '📚', size: 24},
            {x: 700, y: 230, emoji: '📚', size: 24}
        ]
    },
    {
        id: 4,
        nombre: "Laboratorio",
        objetivo: "Encuentra el frasco",
        ancho: 850,
        alto: 400,
        gravedad: 0.5,
        jugador: {x: 40, y: 300, w: 28, h: 36},
        items: [{x: 360, y: 305, w: 18, h: 18, emoji: '⚗️', nombre: 'Frasco de Memoria'}],
        enemigos: [
            {x: 200, y: 310, w: 28, h: 32, velocidad: 1.0, rango: 150, tipo: 'fantasma'},
            {x: 600, y: 310, w: 28, h: 32, velocidad: 0.7, rango: 200, tipo: 'fantasma'},
            {x: 400, y: 130, w: 30, h: 30, velocidad: 1.6, rango: 180, tipo: 'murcielago'}
        ],
        plataformas: [
            {x: 0, y: 370, w: 850, h: 30},
            {x: 150, y: 280, w: 100, h: 14},
            {x: 250, y: 180, w: 100, h: 14},
            {x: 400, y: 230, w: 100, h: 14},
            {x: 600, y: 280, w: 100, h: 14}
        ],
        zonasSeguras: [
            {x: 400, y: 230, w: 100, h: 14}
        ],
        salida: {x: 770, y: 330, w: 40, h: 40},
        mensaje: "Los tubos de ensayo brillan con un color extraño...",
        pista: "El frasco está en la mesa del profesor",
        fondo: '#0a1212',
        recompensa: 25,
        obstaculos: [
            {x: 100, y: 355, w: 40, h: 15, tipo: 'fuego'},
            {x: 450, y: 355, w: 60, h: 15, tipo: 'pinchos'},
            {x: 680, y: 355, w: 40, h: 15, tipo: 'fuego'},
            {x: 280, y: 355, w: 40, h: 15, tipo: 'pinchos'},
            {x: 580, y: 355, w: 40, h: 15, tipo: 'fuego'}
        ],
        decoraciones: [
            {x: 100, y: 310, emoji: '🧪', size: 24},
            {x: 300, y: 310, emoji: '🧪', size: 24},
            {x: 500, y: 200, emoji: '⚗️', size: 28}
        ]
    },
    {
        id: 5,
        nombre: "Gimnasio Vacío",
        objetivo: "Encuentra la pelota",
        ancho: 1000,
        alto: 400,
        gravedad: 0.5,
        jugador: {x: 40, y: 300, w: 28, h: 36},
        items: [{x: 520, y: 208, w: 18, h: 18, emoji: '🏀', nombre: 'Pelota de Baloncesto'}],
        enemigos: [
            {x: 350, y: 310, w: 28, h: 32, velocidad: 1.5, rango: 250, tipo: 'fantasma'},
            {x: 700, y: 160, w: 30, h: 30, velocidad: 1.4, rango: 200, tipo: 'murcielago'}
        ],
        plataformas: [
            {x: 0, y: 370, w: 1000, h: 30},
            {x: 230, y: 280, w: 120, h: 14},
            {x: 440, y: 230, w: 150, h: 14},
            {x: 750, y: 280, w: 120, h: 14}
        ],
        zonasSeguras: [
            {x: 500, y: 230, w: 150, h: 14}
        ],
        salida: {x: 920, y: 330, w: 40, h: 40},
        mensaje: "Las gradas están vacías... pero escuchas aplausos...",
        pista: "La pelota está debajo de la canasta",
        fondo: '#1a1008',
        recompensa: 30,
        obstaculos: [
            {x: 100, y: 355, w: 50, h: 15, tipo: 'pinchos'},
            {x: 609, y: 355, w: 50, h: 15, tipo: 'fuego'},
            {x: 390, y: 355, w: 60, h: 15, tipo: 'pinchos'},
            {x: 830, y: 355, w: 40, h: 15, tipo: 'fuego'}
        ],
        decoraciones: [
            {x: 200, y: 200, emoji: '🏀', size: 32},
            {x: 800, y: 200, emoji: '🏀', size: 32}
        ]
    },
    {
        id: 6,
        nombre: "Sala de Música",
        objetivo: "Encuentra la partitura",
        ancho: 850,
        alto: 400,
        gravedad: 0.5,
        jugador: {x: 40, y: 300, w: 28, h: 36},
        items: [{x: 410, y: 305, w: 18, h: 18, emoji: '🎼', nombre: 'Partitura Maldita'}],
        enemigos: [
            {x: 550, y: 310, w: 28, h: 32, velocidad: 1.3, rango: 180, tipo: 'fantasma'},
            {x: 250, y: 170, w: 26, h: 26, velocidad: 0.9, rango: 100, tipo: 'araña'}
        ],
        plataformas: [
            {x: 0, y: 370, w: 850, h: 30},
            {x: 150, y: 280, w: 100, h: 14},
            {x: 200, y: 230, w: 100, h: 14},
            {x: 595, y: 280, w: 100, h: 14}
        ],
        zonasSeguras: [
            {x: 400, y: 230, w: 100, h: 14}
        ],
        salida: {x: 770, y: 330, w: 40, h: 40},
        mensaje: "Un piano toca solo una canción triste...",
        pista: "La partitura está en el atril del director",
        fondo: '#0f0812',
        recompensa: 35,
        obstaculos: [
            {x: 300, y: 355, w: 40, h: 15, tipo: 'pinchos'},
            {x: 550, y: 355, w: 40, h: 15, tipo: 'fuego'},
            {x: 180, y: 355, w: 40, h: 15, tipo: 'pinchos'},
            {x: 680, y: 355, w: 40, h: 15, tipo: 'fuego'}
        ],
        decoraciones: [
            {x: 100, y: 260, emoji: '🎹', size: 32},
            {x: 400, y: 190, emoji: '🎵', size: 18},
            {x: 700, y: 260, emoji: '🎻', size: 28}
        ]
    },
    {
        id: 7,
        nombre: "Patio Embrujado",
        objetivo: "Encuentra el colgante",
        ancho: 950,
        alto: 400,
        gravedad: 0.5,
        jugador: {x: 40, y: 300, w: 28, h: 36},
        items: [{x: 460, y: 305, w: 18, h: 18, emoji: '💎', nombre: 'Colgante de Cristal'}],
        enemigos: [
            {x: 200, y: 310, w: 28, h: 32, velocidad: 1.2, rango: 200, tipo: 'fantasma'},
            {x: 700, y: 310, w: 28, h: 32, velocidad: 0.9, rango: 180, tipo: 'fantasma'},
            {x: 450, y: 150, w: 30, h: 30, velocidad: 1.5, rango: 200, tipo: 'murcielago'}
        ],
        plataformas: [
            {x: 0, y: 370, w: 950, h: 30},
            {x: 100, y: 290, w: 80, h: 14},
            {x: 200, y: 240, w: 120, h: 14},
            {x: 600, y: 290, w: 80, h: 14},
            {x: 800, y: 240, w: 80, h: 14}
        ],
        zonasSeguras: [
            {x: 350, y: 240, w: 120, h: 14}
        ],
        salida: {x: 870, y: 330, w: 40, h: 40},
        mensaje: "Los árboles se mecen sin viento...",
        pista: "El colgante está bajo el árbol grande",
        fondo: '#0a0a2a',
        recompensa: 40,
        obstaculos: [
            {x: 150, y: 355, w: 50, h: 15, tipo: 'fuego'},
            {x: 300, y: 355, w: 60, h: 15, tipo: 'pinchos'},
            {x: 720, y: 355, w: 50, h: 15, tipo: 'fuego'},
            {x: 300, y: 355, w: 40, h: 15, tipo: 'pinchos'},
            {x: 600, y: 355, w: 40, h: 15, tipo: 'pinchos'}
        ],
        decoraciones: [
            {x: 150, y: 260, emoji: '🌳', size: 48},
            {x: 500, y: 260, emoji: '🌳', size: 48},
            {x: 800, y: 260, emoji: '🌳', size: 48}
        ]
    },
    {
        id: 8,
        nombre: "Oficina del Director",
        objetivo: "Encuentra el expediente",
        ancho: 850,
        alto: 400,
        gravedad: 0.5,
        jugador: {x: 40, y: 300, w: 28, h: 36},
        items: [{x: 360, y: 305, w: 18, h: 18, emoji: '📁', nombre: 'Expediente Secreto'}],
        enemigos: [
            {x: 500, y: 310, w: 28, h: 32, velocidad: 0.8, rango: 150, tipo: 'fantasma'},
            {x: 300, y: 180, w: 26, h: 26, velocidad: 1.0, rango: 120, tipo: 'araña'}
        ],
        plataformas: [
            {x: 0, y: 370, w: 850, h: 30},
            {x: 150, y: 280, w: 100, h: 14},
            {x: 340, y: 230, w: 120, h: 14},
            {x: 600, y: 280, w: 100, h: 14}
        ],
        zonasSeguras: [
            {x: 400, y: 230, w: 120, h: 14}
        ],
        salida: {x: 770, y: 330, w: 40, h: 40},
        mensaje: "Los cajones están abiertos...",
        pista: "El expediente está en el cajón de la derecha",
        fondo: '#0f0a05',
        recompensa: 45,
        obstaculos: [
            {x: 250, y: 355, w: 40, h: 15, tipo: 'pinchos'},
            {x: 590, y: 355, w: 40, h: 15, tipo: 'fuego'},
            {x: 400, y: 355, w: 50, h: 15, tipo: 'pinchos'},
            {x: 680, y: 355, w: 40, h: 15, tipo: 'fuego'}
        ],
        decoraciones: [
            {x: 200, y: 260, emoji: '🪑', size: 28},
            {x: 400, y: 190, emoji: '📋', size: 22},
            {x: 600, y: 260, emoji: '🪑', size: 28}
        ]
    },
    {
        id: 9,
        nombre: "Sótano Olvidado",
        objetivo: "Encuentra la vela",
        ancho: 800,
        alto: 400,
        gravedad: 0.5,
        jugador: {x: 40, y: 300, w: 28, h: 36},
        items: [{x: 360, y: 305, w: 18, h: 18, emoji: '🕯️', nombre: 'Vela Misteriosa'}],
        enemigos: [
            {x: 200, y: 310, w: 28, h: 32, velocidad: 1.5, rango: 250, tipo: 'fantasma'},
            {x: 600, y: 310, w: 28, h: 32, velocidad: 1.0, rango: 200, tipo: 'fantasma'},
            {x: 400, y: 140, w: 26, h: 26, velocidad: 1.2, rango: 150, tipo: 'araña'}
        ],
        plataformas: [
            {x: 0, y: 370, w: 800, h: 30},
            {x: 100, y: 290, w: 80, h: 14},
            {x: 260, y: 290, w: 80, h: 14},
            {x: 377, y: 250, w: 100, h: 14},
            {x: 550, y: 290, w: 80, h: 14}
        ],
        zonasSeguras: [
            {x: 350, y: 240, w: 100, h: 14}
        ],
        salida: {x: 720, y: 330, w: 40, h: 40},
        mensaje: "Las ratas huyen de algo...",
        pista: "La vela está en la estantería del fondo",
        fondo: '#050505',
        recompensa: 50,
        obstaculos: [
            {x: 180, y: 355, w: 50, h: 15, tipo: 'pinchos'},
            {x: 400, y: 355, w: 50, h: 15, tipo: 'fuego'},
            {x: 620, y: 355, w: 50, h: 15, tipo: 'pinchos'},
            {x: 280, y: 355, w: 40, h: 15, tipo: 'fuego'},
            {x: 520, y: 355, w: 40, h: 15, tipo: 'pinchos'}
        ],
        decoraciones: [
            {x: 160, y: 260, emoji: '🕷️', size: 18},
            {x: 400, y: 200, emoji: '🕸️', size: 28},
            {x: 650, y: 260, emoji: '🕷️', size: 18}
        ]
    },
    {
        id: 10,
        nombre: "Azotea - El Final",
        objetivo: "Encuentra la verdad",
        ancho: 900,
        alto: 400,
        gravedad: 0.5,
        jugador: {x: 40, y: 300, w: 28, h: 36},
        items: [{x: 460, y: 305, w: 18, h: 18, emoji: '⭐', nombre: 'La Verdad'}],
        enemigos: [
            {x: 350, y: 308, w: 32, h: 36, velocidad: 2, rango: 300, tipo: 'fantasma'},
            {x: 600, y: 150, w: 30, h: 30, velocidad: 1.8, rango: 220, tipo: 'murcielago'},
            {x: 200, y: 160, w: 26, h: 26, velocidad: 1.3, rango: 130, tipo: 'araña'}
        ],
        plataformas: [
            {x: 0, y: 370, w: 900, h: 30},
            {x: 150, y: 280, w: 100, h: 14},
            {x: 400, y: 230, w: 120, h: 14},
            {x: 650, y: 280, w: 100, h: 14}
        ],
        zonasSeguras: [
            {x: 400, y: 230, w: 120, h: 14}
        ],
        salida: {x: 820, y: 330, w: 40, h: 40},
        mensaje: "El espíritu del estudiante está cerca...",
        pista: "La verdad siempre ha estado frente a ti",
        esFinal: true,
        fondo: '#050520',
        recompensa: 100,
        obstaculos: [
            {x: 220, y: 355, w: 60, h: 15, tipo: 'fuego'},
            {x: 500, y: 355, w: 40, h: 15, tipo: 'pinchos'},
            {x: 720, y: 355, w: 60, h: 15, tipo: 'fuego'},
            {x: 350, y: 355, w: 40, h: 15, tipo: 'pinchos'}
        ],
        decoraciones: [
            {x: 200, y: 200, emoji: '🌙', size: 36},
            {x: 700, y: 200, emoji: '⭐', size: 28}
        ]
    }
];

const DIALOGOS = {
    1: { personaje: "???", mensaje: "Veo que has encontrado la llave oxidada... la misma que sostenía cuando todo comenzó. Este lugar guarda más secretos de los que imaginas. Cada objeto que encuentres es un fragmento de mi memoria. No te detengas ahora... el pasillo te espera." },
    2: { personaje: "???", mensaje: "Ese diario... era mío. Lo escribía cada tarde antes de irme a casa. En sus páginas está la última persona que me vio con vida. Poco a poco vas recuperando lo que yo mismo olvidé. ¿Podrás soportar la verdad que se esconde más adelante?" },
    3: { personaje: "???", mensaje: "La biblioteca siempre fue mi refugio. Pasaba horas entre estos estantes, soñando con mundos que no eran el mío. Pero un día encontré un libro que no debía leer. Ahí estaba escrito lo que me pasaría. Ahora tú también lo sabes... pero el final aún no está escrito." },
    4: { personaje: "???", mensaje: "El laboratorio guarda uno de los recuerdos más oscuros de esta escuela. Aquí se hicieron experimentos que nadie debería conocer. El frasco que encontraste contiene parte de mi esencia. Con cada objeto, me vuelvo más fuerte... y más consciente del horror que me rodea." },
    5: { personaje: "???", mensaje: "El gimnasio... cuántas veces jugué aquí. Fui feliz en este lugar, rodeado de amigos que después me dieron la espalda. Las gradas que ves vacías, alguna vez estuvieron llenas de gente que me aplaudía. Ahora solo quedan los ecos de sus voces... y la mía, atrapada en el tiempo." },
    6: { personaje: "???", mensaje: "La música era mi escape. Cuando todo se volvía oscuro, tocaba el piano hasta que mis dedos dolían. Esa partitura es mi composición favorita... la escribí la noche antes de desaparecer. Nadie la escuchó nunca. Solo tú. Solo yo. Solo nosotros dos en este silencio que grita." },
    7: { personaje: "???", mensaje: "El patio era mi lugar favorito. Bajo ese árbol grande pasaba los recreos, soñando con escapar de aquí. Ironía, ¿no? Ahora estoy atrapado, y ni siquiera puedo irme. El colgante que encontraste era de mi madre. Ella siempre supo que algo me pasaría. Nunca hizo nada para evitarlo." },
    8: { personaje: "???", mensaje: "El director siempre supo la verdad. Firmó el expediente que borró mi nombre de todos los registros. Guardó silencio cuando le preguntaron. Ese expediente que tienes en tus manos es la prueba de que no fue un accidente. Fue... algo peor. Algo que esta escuela prefirió enterrar." },
    9: { personaje: "???", mensaje: "El sótano... el lugar más oscuro de todos. Aquí fue donde todo terminó. La vela que encontraste fue la última que encendí antes de que se apagara mi vida. Escucho aún las voces que me llamaron. Escucho los pasos que bajaron las escaleras. Escucho... mi propio grito." },
    10: { personaje: "???", mensaje: "Ahora lo sabes todo. Cada objeto, cada recuerdo, cada fragmento de mi existencia ha sido reconstruido. Ahora entiendo: YO SOY ese estudiante. El que desapareció. El que nadie buscó. Pero ya no estoy solo. Tú me acompañaste hasta el final. Ahora debo elegir: descansar en paz... o quedarme aquí, atrapado para siempre. ¿Qué crees que debería hacer?" }
};

const CONVERSACION_FINAL = [
    { texto: "Has llegado hasta el final. Mírate... yo alguna vez fui así. Caminando por estos pasillos, sin saber que sería la última vez.", pregunta: null },
    { texto: "Antes de irme, quiero preguntarte algo. No hay respuestas correctas. Solo quiero saber qué pensás.", pregunta: null },
    { texto: "Cuando caminabas por esta escuela... ¿alguna vez sentiste que no estabas solo? ¿Que algo te observaba desde las sombras?", pregunta: "¿Sentiste algo?" },
    { texto: "Yo lo sentí muchas veces. Pero nadie me creyó. Todos decían que era mi imaginación. Ahora estoy aquí... y vos también sentís mi presencia. ¿Verdad?", pregunta: "¿Me sentís?" },
    { texto: "La última pregunta. Si pudieras elegir por mí... ¿qué harías? ¿Dejarme descansar en paz... o dejarme aquí, atrapado, para no estar nunca más solo?", pregunta: "¿Qué elegís para mí?" },
    { texto: "Gracias por escucharme. Por acompañarme. Por recordar lo que yo mismo había olvidado.", pregunta: null },
    { texto: "Pero hay algo que no te dije... esta escuela tiene más de un espíritu. Y yo... yo no soy el único que te ha estado observando.", pregunta: null },
    { texto: "Ahora podés irte. Pero recordá: lo que viste aquí... nunca se va del todo. Los pasillos siempre llaman a quien los conoce. Y vos... ya los conocés.", pregunta: null }
];

let canvas, ctx;
let nivelActual = 0;
let fondoCanvas = null;
let fondoNivelActual = -1;
let jugador = {x: 40, y: 300, w: 28, h: 36, vx: 0, vy: 0, enSuelo: false, dir: 1};
let items = [];
let enemigos = [];
let plataformas = [];
let salida = null;
let teclas = {};
let frameId = null;
let frames = 0;
let framesInvulnerable = 0;
let dialogoActivo = false;
let dialogoCompletado = false;
let juegoActivo = true;
let jugadorNombre = localStorage.getItem('jugadorNombre') || '';

let musicaActiva = localStorage.getItem('musicaActiva') !== 'false';
let volumenGuardado = localStorage.getItem('volumen') || '70';
let dificultadActual = localStorage.getItem('dificultad') || 'normal';
let controlesVisibles = localStorage.getItem('controlesVisibles') !== 'false';

let indexConversacionFinal = 0;
let respuestasFinales = [];

const musica = document.getElementById("musicaFondo");
const btnMusicaGlobal = document.getElementById("btnMusica");

function iniciarMusica() {
    if (!musica) return;
    
    musica.volume = volumenGuardado / 100;
    
    const tiempoGuardado = localStorage.getItem('tiempoMusica');
    if (tiempoGuardado) {
        const saltarAlTiempo = () => {
            try {
                const t = parseFloat(tiempoGuardado);
                if (!isNaN(t) && t > 0 && (!musica.duration || t < musica.duration)) {
                    musica.currentTime = t;
                }
            } catch (e) {}
        };
        
        if (musica.readyState >= 1) {
            saltarAlTiempo();
        } else {
            musica.addEventListener('loadedmetadata', saltarAlTiempo, { once: true });
        }
    }
    
    if (musicaActiva) {
        musica.play().then(() => {
            if (btnMusicaGlobal) btnMusicaGlobal.textContent = "⏸";
        }).catch(() => {
            const iniciarUnaVez = () => {
                if (musica.paused) {
                    musica.play().then(() => {
                        if (btnMusicaGlobal) btnMusicaGlobal.textContent = "⏸";
                    }).catch(() => {});
                }
            };
            document.addEventListener('click', iniciarUnaVez, { once: true });
            document.addEventListener('keydown', iniciarUnaVez, { once: true });
        });
    }
    
    setInterval(() => {
        if (musica && !musica.paused) {
            localStorage.setItem('tiempoMusica', musica.currentTime);
            localStorage.setItem('musicaActiva', 'true');
        }
    }, 500);
    
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('tiempoMusica', musica.currentTime);
        localStorage.setItem('musicaActiva', !musica.paused);
    });
}

function toggleMusica() {
    if (!musica) return;
    if (musica.paused) {
        musica.play();
        localStorage.setItem('musicaActiva', 'true');
        if (btnMusicaGlobal) btnMusicaGlobal.textContent = "⏸";
    } else {
        musica.pause();
        localStorage.setItem('musicaActiva', 'false');
        if (btnMusicaGlobal) btnMusicaGlobal.textContent = "►";
    }
}

function irAPagina(url) {
    if (musica) {
        try {
            localStorage.setItem('tiempoMusica', musica.currentTime);
            localStorage.setItem('musicaActiva', 'true');
        } catch (e) {}
    }
    location.href = url;
}

function configurarSliderVolumen() {
    const volSlider = document.getElementById('volumen');
    const textoVol = document.getElementById('textovolumen');
    
    if (!volSlider) return;
    
    volSlider.value = localStorage.getItem('volumen') || 70;
    if (textoVol) textoVol.textContent = volSlider.value + '%';
    if (musica) musica.volume = volSlider.value / 100;
    
    volSlider.addEventListener('input', (e) => {
        const valor = e.target.value;
        if (musica) musica.volume = valor / 100;
        if (textoVol) textoVol.textContent = valor + '%';
        localStorage.setItem('volumen', valor);
    });
}

function iniciarJuego() {
    if (!jugadorNombre) {
        jugadorNombre = 'Invitado';
        localStorage.setItem('jugadorNombre', jugadorNombre);
    }
    
    canvas = document.getElementById('canvas');
    if (!canvas) return;
    
    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    
    const dif = DIFICULTADES[dificultadActual] || DIFICULTADES.normal;
    
    const nivelGuardado = parseInt(localStorage.getItem('nivelGuardado') || '0');
    const puntosGuardados = parseInt(localStorage.getItem('puntosGuardados') || '0');
    const vidasGuardadas = parseInt(localStorage.getItem('vidasGuardadas') || String(dif.vidas));
    const inventarioGuardado = JSON.parse(localStorage.getItem('inventarioGuardado') || '[]');
    
    JUEGO.puntos = puntosGuardados;
    JUEGO.vidas = vidasGuardadas > 0 ? vidasGuardadas : dif.vidas;
    JUEGO.nivelActual = nivelGuardado;
    JUEGO.enJuego = true;
    juegoActivo = true;
    
    JUEGO.inventario = inventarioGuardado.map(nombre => {
        for (const nivel of NIVELES) {
            for (const item of nivel.items) {
                if (item.nombre === nombre) {
                    return { ...item, recogido: true };
                }
            }
        }
        return { nombre, emoji: '📦', recogido: true };
    });
    
    cargarNivel(nivelGuardado);
    configurarControles();
    
    if (nivelGuardado > 0) {
        mostrarMensaje(`✅ Retomando desde el nivel ${nivelGuardado + 1}`, "exito");
    } else {
        mostrarMensaje("Usa ◄ ► para moverte y ▲ para saltar", "importante");
    }
}

function cargarNivel(indice) {
    if (indice >= NIVELES.length) {
        completarJuego();
        return;
    }
    
    teclas = {};
    framesInvulnerable = 0;
    fondoCanvas = null;
    fondoNivelActual = -1;

    const modales = ['game-over', 'nivel-completado', 'dialogo-modal', 'final-modal', 'ranking-juego'];
    modales.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    
    nivelActual = indice;
    JUEGO.nivelActual = indice;
    const nivel = NIVELES[indice];
    
    const dif = DIFICULTADES[dificultadActual] || DIFICULTADES.normal;
    JUEGO.vidas = dif.vidas;
    juegoActivo = true;
    JUEGO.enJuego = true;
    
    canvas.width = nivel.ancho;
    canvas.height = nivel.alto;
    
    const j = nivel.jugador;
    jugador = {
        x: j.x, y: j.y, w: j.w, h: j.h,
        vx: 0, vy: 0, enSuelo: false, dir: 1
    };
    
    items = nivel.items.map(item => ({...item, recogido: false}));
    enemigos = nivel.enemigos.map(en => ({
        ...en,
        xOriginal: en.x,
        yOriginal: en.y,
        dir: 1
    }));
    plataformas = nivel.plataformas.map(p => ({...p}));
    salida = {...nivel.salida};
    
    actualizarUI();
    mostrarMensaje(nivel.mensaje, "importante");
    
    setTimeout(() => {
        mostrarMensaje(`💡 Pista: ${nivel.pista}`, "");
    }, 5000);
    
    if (frameId) cancelAnimationFrame(frameId);
    loopJuego();
}

function loopJuego() {
    if (framesInvulnerable > 0) framesInvulnerable--;
    if (!JUEGO.enJuego || !juegoActivo) {
        frameId = requestAnimationFrame(loopJuego);
        return;
    }
    
    frames++;
    const nivel = NIVELES[nivelActual];
    
    jugador.vy += nivel.gravedad;
    
    let movX = 0;
    if (teclas['izquierda'] || teclas['ArrowLeft']) movX = -3.5;
    if (teclas['derecha'] || teclas['ArrowRight']) movX = 3.5;
    
    if (movX !== 0) jugador.dir = movX > 0 ? 1 : -1;
    jugador.vx = movX;
    
    if ((teclas['saltar'] || teclas['ArrowUp']) && jugador.enSuelo) {
        jugador.vy = -10;
        jugador.enSuelo = false;
    }
    
    jugador.x += jugador.vx;
    for (const p of plataformas) {
        if (colision(jugador, p)) {
            if (jugador.vx > 0) jugador.x = p.x - jugador.w;
            else if (jugador.vx < 0) jugador.x = p.x + p.w;
            jugador.vx = 0;
        }
    }
    
    jugador.y += jugador.vy;
    jugador.enSuelo = false;
    for (const p of plataformas) {
        if (colision(jugador, p)) {
            if (jugador.vy > 0) {
                jugador.y = p.y - jugador.h;
                jugador.vy = 0;
                jugador.enSuelo = true;
            } else if (jugador.vy < 0) {
                jugador.y = p.y + p.h;
                jugador.vy = 0;
            }
        }
    }
    
    if (jugador.x < 0) jugador.x = 0;
    if (jugador.x + jugador.w > canvas.width) jugador.x = canvas.width - jugador.w;
    if (jugador.y + jugador.h > canvas.height) {
        jugador.y = canvas.height - jugador.h;
        jugador.vy = 0;
        jugador.enSuelo = true;
    }
    
    for (const item of items) {
        if (!item.recogido && colision(jugador, item)) {
            recogerItem(item);
        }
    }
    
    const dif = DIFICULTADES[dificultadActual] || DIFICULTADES.normal;

    let enZonaSegura = false;
    if (nivel.zonasSeguras) {
        for (const z of nivel.zonasSeguras) {
            if (colision(jugador, z) && jugador.y + jugador.h <= z.y + 8) {
                enZonaSegura = true;
                break;
            }
        }
    }

    for (const enemigo of enemigos) {
        if (enemigo.tipo === 'murcielago') {
            enemigo.x += enemigo.velocidad * enemigo.dir * dif.multiplicadorVelocidad;
            if (Math.abs(enemigo.x - enemigo.xOriginal) > enemigo.rango) {
                enemigo.dir *= -1;
            }
            const vuelo = Math.sin(frames * 0.1 + enemigo.x * 0.05) * 15;
            enemigo.y = enemigo.yOriginal + vuelo;
        } else if (enemigo.tipo === 'araña') {
            enemigo.x += enemigo.velocidad * enemigo.dir * dif.multiplicadorVelocidad * 0.5;
            if (Math.abs(enemigo.x - enemigo.xOriginal) > enemigo.rango) {
                enemigo.dir *= -1;
            }
            enemigo.y = enemigo.yOriginal + Math.sin(frames * 0.05 + enemigo.x * 0.1) * 8;
        } else {
            enemigo.x += enemigo.velocidad * enemigo.dir * dif.multiplicadorVelocidad;
            if (Math.abs(enemigo.x - enemigo.xOriginal) > enemigo.rango) {
                enemigo.dir *= -1;
            }
        }
        
        if (!enZonaSegura && colision(jugador, enemigo)) {
            perderVida();
        }
    }

    if (nivel.obstaculos) {
        const obstaculosActivos = dif.multiplicadorVelocidad >= 1.0 
            ? nivel.obstaculos 
            : nivel.obstaculos.slice(0, Math.ceil(nivel.obstaculos.length * dif.multiplicadorVelocidad));
        
        for (const obs of obstaculosActivos) {
            if (colision(jugador, obs)) {
                perderVida();
                jugador.x -= jugador.dir * 50;
                if (jugador.x < 0) jugador.x = 0;
                if (jugador.x + jugador.w > canvas.width) jugador.x = canvas.width - jugador.w;
                break;
            }
        }
    }
    
    if (salida && colision(jugador, salida)) {
        const restantes = items.filter(i => !i.recogido);
        if (restantes.length === 0) {
            completarNivel();
        } else {
            mostrarMensaje(`❌ Encuentra: ${restantes.map(i => i.nombre).join(', ')}`, "peligro");
        }
    }
    
    dibujar();
    frameId = requestAnimationFrame(loopJuego);
}

function preRenderizarFondo(nivelIdx, W, H) {
    if (fondoCanvas && fondoNivelActual === nivelIdx) {
        return fondoCanvas;
    }
    
    fondoCanvas = document.createElement('canvas');
    fondoCanvas.width = W;
    fondoCanvas.height = H;
    
    const ctxViejo = ctx;
    ctx = fondoCanvas.getContext('2d');
    
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);
    
    dibujarFondoNivel(nivelIdx, W, H);
    
    const nivel = NIVELES[nivelIdx];
    if (nivel.decoraciones) {
        ctx.shadowBlur = 0;
        ctx.shadowColor = 'transparent';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (const d of nivel.decoraciones) {
            ctx.font = `${d.size}px Arial`;
            ctx.fillText(d.emoji, d.x, d.y);
        }
    }
    
    ctx = ctxViejo;
    fondoNivelActual = nivelIdx;
    
    return fondoCanvas;
}

function dibujarFondoNivel(nivelIdx, W, H) {
    switch(nivelIdx) {
        case 0: fondoAula(W, H); break;
        case 1: fondoPasillo(W, H); break;
        case 2: fondoBiblioteca(W, H); break;
        case 3: fondoLaboratorio(W, H); break;
        case 4: fondoGimnasio(W, H); break;
        case 5: fondoSalaMusica(W, H); break;
        case 6: fondoPatio(W, H); break;
        case 7: fondoOficina(W, H); break;
        case 8: fondoSotano(W, H); break;
        case 9: fondoAzotea(W, H); break;
    }
}

function fondoAula(W, H) {
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#1a1a30');
    grad.addColorStop(0.6, '#202035');
    grad.addColorStop(1, '#15152a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
    
    ctx.fillStyle = '#252540';
    for (let x = 0; x < W; x += 100) {
        ctx.fillRect(x, 0, 2, H);
    }
    for (let y = 100; y < H - 80; y += 100) {
        ctx.fillRect(0, y, W, 1);
    }
    
    const ventanas = [
        { x: 30, y: 80, w: 110, h: 140 },
        { x: W - 140, y: 80, w: 110, h: 140 }
    ];
    
    for (const v of ventanas) {
        const luzVentana = ctx.createLinearGradient(v.x, v.y, v.x, v.y + v.h);
        luzVentana.addColorStop(0, '#3a5a8a');
        luzVentana.addColorStop(0.5, '#2a4a7a');
        luzVentana.addColorStop(1, '#1a3a6a');
        ctx.fillStyle = luzVentana;
        ctx.fillRect(v.x, v.y, v.w, v.h);
        
        ctx.fillStyle = '#0a0a15';
        ctx.fillRect(v.x - 5, v.y - 5, v.w + 10, 7);
        ctx.fillRect(v.x - 5, v.y + v.h - 2, v.w + 10, 7);
        ctx.fillRect(v.x - 5, v.y, 7, v.h);
        ctx.fillRect(v.x + v.w - 2, v.y, 7, v.h);
        
        ctx.fillRect(v.x + v.w / 2 - 2, v.y, 4, v.h);
        ctx.fillRect(v.x, v.y + v.h / 2 - 2, v.w, 4);
        
        ctx.fillStyle = 'rgba(255, 240, 200, 0.1)';
        ctx.fillRect(v.x + 5, v.y + 5, v.w - 10, 2);
        ctx.fillRect(v.x + 5, v.y + 5, 2, v.h - 10);
    }
    
    const pizarron = { x: 170, y: 60, w: 460, h: 210 };
    
    ctx.fillStyle = '#0a0a15';
    ctx.fillRect(pizarron.x - 5, pizarron.y - 5, pizarron.w + 10, pizarron.h + 10);
    
    ctx.fillStyle = '#4a3a1a';
    ctx.fillRect(pizarron.x - 3, pizarron.y - 3, pizarron.w + 6, pizarron.h + 6);
    
    ctx.fillStyle = '#1a3a1a';
    ctx.fillRect(pizarron.x, pizarron.y, pizarron.w, pizarron.h);
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.fillRect(pizarron.x + 5, pizarron.y + 5, pizarron.w - 10, 3);
    ctx.fillRect(pizarron.x + 5, pizarron.y + 5, 3, pizarron.h - 10);
    
    ctx.fillStyle = '#0a0a15';
    ctx.fillRect(pizarron.x + 10, pizarron.y + pizarron.h - 12, pizarron.w - 20, 5);
    
    ctx.fillStyle = '#f0f0e0';
    ctx.font = 'bold 14px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('TEMA 5: LA ESCUELA', pizarron.x + 25, pizarron.y + 45);
    
    ctx.strokeStyle = '#f0f0e0';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(pizarron.x + 25, pizarron.y + 55);
    ctx.lineTo(pizarron.x + 220, pizarron.y + 55);
    ctx.stroke();
    
    ctx.fillStyle = '#f0f0e0';
    ctx.font = '13px monospace';
    ctx.fillText('Ejercicio 1:', pizarron.x + 40, pizarron.y + 90);
    ctx.fillText('Ejercicio 2:', pizarron.x + 40, pizarron.y + 115);
    ctx.fillText('Ejercicio 3:', pizarron.x + 40, pizarron.y + 140);
    
    ctx.fillStyle = 'rgba(240, 240, 224, 0.6)';
    ctx.font = '12px monospace';
    ctx.fillText('Resolver', pizarron.x + 140, pizarron.y + 90);
    ctx.fillText('Analizar', pizarron.x + 140, pizarron.y + 115);
    ctx.fillText('Completar', pizarron.x + 140, pizarron.y + 140);
    
    ctx.fillStyle = 'rgba(240, 240, 224, 0.35)';
    ctx.font = 'italic 11px monospace';
    ctx.fillText('Página 42, ejercicio 3', pizarron.x + 40, pizarron.y + 175);
    
    ctx.fillStyle = 'rgba(255, 200, 100, 0.12)';
    ctx.font = 'italic 10px monospace';
    ctx.fillText('no te olvides de mirar atrás', pizarron.x + 250, pizarron.y + 195);
    
    ctx.fillStyle = '#2a1a10';
    ctx.fillRect(0, H - 80, W, 80);
    ctx.fillStyle = '#3a2a1a';
    ctx.fillRect(0, H - 80, W, 5);
    
    for (let x = 0; x < W; x += 40) {
        ctx.fillStyle = '#1f1408';
        ctx.fillRect(x, H - 75, 38, 3);
    }
    
    for (let i = 0; i < 4; i++) {
        const bx = 60 + i * 180;
        const by = 320;
        
        ctx.fillStyle = '#5a3a20';
        ctx.fillRect(bx, by, 55, 6);
        ctx.fillStyle = '#4a2a15';
        ctx.fillRect(bx, by + 6, 55, 3);
        ctx.fillRect(bx + 5, by + 9, 5, 35);
        ctx.fillRect(bx + 45, by + 9, 5, 35);
        ctx.fillStyle = '#3a2010';
        ctx.fillRect(bx + 8, by + 12, 39, 22);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(bx + 8, by + 34, 39, 6);
    }
    
    const viñeta = ctx.createRadialGradient(W/2, H/2, H*0.35, W/2, H/2, H*0.95);
    viñeta.addColorStop(0, 'rgba(0,0,0,0)');
    viñeta.addColorStop(1, 'rgba(0,0,0,0.5)');
    ctx.fillStyle = viñeta;
    ctx.fillRect(0, 0, W, H);
}
function fondoPasillo(W, H) {
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#0f1520');
    grad.addColorStop(0.5, '#1a2030');
    grad.addColorStop(1, '#101520');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
    
    const pisoY = H - 110;
    
    ctx.fillStyle = '#2a2a3a';
    ctx.fillRect(0, 0, W, 40);
    
    ctx.fillStyle = '#3a3a4a';
    ctx.fillRect(0, 38, W, 4);
    
    for (let i = 0; i < 5; i++) {
        const lx = W * 0.15 + i * (W * 0.17);
        
        ctx.fillStyle = '#1a1a2a';
        ctx.fillRect(lx - 30, 0, 60, 8);
        
        ctx.fillStyle = '#e0e0c0';
        ctx.fillRect(lx - 28, 8, 56, 6);
        
        ctx.fillStyle = 'rgba(255, 250, 200, 0.35)';
        ctx.beginPath();
        ctx.moveTo(lx - 30, 14);
        ctx.lineTo(lx + 30, 14);
        ctx.lineTo(lx + 120, pisoY);
        ctx.lineTo(lx - 120, pisoY);
        ctx.closePath();
        ctx.fill();
    }
    
    ctx.fillStyle = '#2a3a4a';
    ctx.fillRect(0, 42, W, pisoY - 42);
    
    for (let y = 42; y < pisoY; y += 30) {
        for (let x = 0; x < W; x += 40) {
            const shade = ((x / 40 + y / 30) % 2 === 0) ? '#2a3a4a' : '#253545';
            ctx.fillStyle = shade;
            ctx.fillRect(x, y, 40, 30);
        }
    }
    
    ctx.fillStyle = '#1a2530';
    ctx.fillRect(0, pisoY - 15, W, 15);
    ctx.fillStyle = '#3a4a5a';
    ctx.fillRect(0, pisoY - 15, W, 3);
    
    const puertas = [
        { x: 20, side: 'left' },
        { x: W - 130, side: 'right' },
        { x: 260, side: 'left' },
        { x: W - 370, side: 'right' }
    ];
    
    for (const p of puertas) {
        const doorW = 100;
        const doorH = 180;
        const doorY = pisoY - doorH;
        const doorX = p.x;
        
        ctx.fillStyle = '#0a0a15';
        ctx.fillRect(doorX - 6, doorY - 6, doorW + 12, doorH + 12);
        
        ctx.fillStyle = '#3a2a1a';
        ctx.fillRect(doorX, doorY, doorW, doorH);
        
        ctx.fillStyle = '#4a3520';
        ctx.fillRect(doorX + 4, doorY + 4, doorW - 8, doorH - 8);
        
        ctx.fillStyle = 'rgba(255, 220, 150, 0.15)';
        ctx.fillRect(doorX + 8, doorY + 8, doorW - 16, doorH - 16);
        
        ctx.fillStyle = '#2a1a10';
        ctx.fillRect(doorX + 15, doorY + 40, doorW - 30, doorH - 100);
        
        ctx.fillStyle = 'rgba(60, 40, 30, 0.6)';
        ctx.fillRect(doorX + 20, doorY + 50, doorW - 40, 40);
        
        ctx.fillStyle = '#c0c0c0';
        ctx.beginPath();
        ctx.arc(doorX + doorW - 15, doorY + doorH / 2, 5, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(doorX + doorW / 2 - 25, doorY - 20, 50, 16);
        
        ctx.fillStyle = '#e0e0d0';
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'center';
        
        const numeros = ['1°A', '1°B', '2°A', '2°B'];
        const num = numeros[puertas.indexOf(p) % numeros.length];
        ctx.fillText(num, doorX + doorW / 2, doorY - 9);
    }
    
    for (let i = 0; i < 2; i++) {
        const tx = 160 + i * (W - 320);
        const ty = pisoY - 200;
        
        ctx.fillStyle = '#1a1a25';
        ctx.fillRect(tx, ty, 70, 200);
        
        ctx.fillStyle = '#2a2a35';
        ctx.fillRect(tx, ty, 70, 8);
        ctx.fillRect(tx, ty, 8, 200);
        ctx.fillRect(tx + 62, ty, 8, 200);
        ctx.fillRect(tx, ty + 192, 70, 8);
        
        for (let f = 0; f < 4; f++) {
            const fy = ty + 15 + f * 45;
            
            ctx.fillStyle = '#3a3a45';
            ctx.fillRect(tx + 12, fy, 46, 40);
            
            ctx.fillStyle = '#1a1a25';
            ctx.fillRect(tx + 14, fy + 2, 42, 36);
            
            if (f === 1) {
                ctx.fillStyle = '#2a4a2a';
                ctx.fillRect(tx + 30, fy + 8, 12, 20);
            }
        }
    }
    
    ctx.fillStyle = '#3a2a1a';
    ctx.fillRect(W/2 - 100, 50, 200, 60);
    ctx.fillStyle = '#4a3520';
    ctx.fillRect(W/2 - 96, 54, 192, 52);
    
    ctx.fillStyle = '#e0e0c0';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('¡BIENVENIDOS!', W/2, 78);
    ctx.font = '9px monospace';
    ctx.fillText('SECUNDARIA TECNICA N2', W/2, 95);
    
    ctx.fillStyle = '#2a1a10';
    ctx.fillRect(0, pisoY, W, 110);
    
    ctx.fillStyle = '#3a2a1a';
    ctx.fillRect(0, pisoY, W, 6);
    
    for (let y = pisoY + 6; y < H; y += 25) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(0, y, W, 2);
    }
    
    for (let x = 0; x < W; x += 60) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        ctx.fillRect(x, pisoY, 2, 110);
    }
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(W/2 - 30, H - 20, 60, 15);
    
    const viñeta = ctx.createRadialGradient(W/2, H/2, H*0.4, W/2, H/2, H*0.95);
    viñeta.addColorStop(0, 'rgba(0,0,0,0)');
    viñeta.addColorStop(1, 'rgba(0,0,0,0.55)');
    ctx.fillStyle = viñeta;
    ctx.fillRect(0, 0, W, H);
}

function fondoBiblioteca(W, H) {
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#1a1008');
    grad.addColorStop(0.6, '#2a1808');
    grad.addColorStop(1, '#1a1008');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
    
    ctx.fillStyle = '#2a1808';
    for (let y = 0; y < H; y += 40) {
        ctx.fillRect(0, y, W, 2);
    }
    for (let x = 0; x < W; x += 40) {
        ctx.fillRect(x, 0, 2, H);
    }
    
    const coloresLibros = [
        '#8a2020', '#204a20', '#20204a', '#4a4a20', '#3a2040',
        '#5a2010', '#103a3a', '#4a3a1a', '#2a1a4a', '#3a2a10',
        '#6a3020', '#203020'
    ];
    
    for (let i = 0; i < 5; i++) {
        const x = 30 + i * 175;
        const y = 20;
        const w = 160;
        const h = 310;
        
        ctx.fillStyle = '#3a2010';
        ctx.fillRect(x, y, w, h);
        
        ctx.fillStyle = '#5a3015';
        ctx.fillRect(x, y, w, 8);
        ctx.fillRect(x, y, 8, h);
        ctx.fillRect(x + w - 8, y, 8, h);
        ctx.fillRect(x, y + h - 8, w, 8);
        
        ctx.fillStyle = '#1a0a05';
        ctx.fillRect(x + 8, y + 8, w - 16, h - 16);
        
        for (let fila = 0; fila < 4; fila++) {
            const filaY = y + 15 + fila * 72;
            
            ctx.fillStyle = '#0a0503';
            ctx.fillRect(x + 8, filaY + 60, w - 16, 10);
            
            ctx.fillStyle = '#4a2010';
            ctx.fillRect(x + 8, filaY + 60, w - 16, 3);
            
            let libroX = x + 12;
            let contador = 0;
            
            while (libroX < x + w - 18) {
                const libroW = 10 + ((contador + fila * 3 + i * 5) % 4);
                const libroH = 45 + ((contador * 3 + fila * 7 + i * 2) % 12);
                const colorIdx = (contador + fila * 5 + i * 3) % coloresLibros.length;
                const color = coloresLibros[colorIdx];
                
                ctx.fillStyle = color;
                ctx.fillRect(libroX, filaY + (60 - libroH), libroW, libroH);
                
                ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
                ctx.fillRect(libroX, filaY + (60 - libroH), 2, libroH);
                
                ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
                ctx.fillRect(libroX + libroW - 2, filaY + (60 - libroH), 2, libroH);
                
                ctx.fillStyle = 'rgba(255, 220, 150, 0.15)';
                ctx.fillRect(libroX + 3, filaY + (60 - libroH) + libroH / 2, libroW - 5, 2);
                
                libroX += libroW + 2;
                contador++;
            }
        }
    }
    
    ctx.fillStyle = '#2a1808';
    ctx.fillRect(0, H - 80, W, 80);
    ctx.fillStyle = '#3a2010';
    for (let x = 0; x < W; x += 25) {
        ctx.fillRect(x, H - 80, 23, 4);
    }
    
    const viñeta = ctx.createRadialGradient(W/2, H/2, H*0.35, W/2, H/2, H*0.95);
    viñeta.addColorStop(0, 'rgba(0,0,0,0)');
    viñeta.addColorStop(1, 'rgba(0,0,0,0.5)');
    ctx.fillStyle = viñeta;
    ctx.fillRect(0, 0, W, H);
}

function fondoLaboratorio(W, H) {
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#0f1a1a');
    grad.addColorStop(0.5, '#152525');
    grad.addColorStop(1, '#0a1515');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
    
    const pisoY = H - 100;
    
    ctx.fillStyle = '#e8e8e0';
    ctx.fillRect(0, 0, W, pisoY);
    
    ctx.fillStyle = '#c8c8c0';
    for (let y = 0; y < pisoY; y += 40) {
        ctx.fillRect(0, y, W, 2);
    }
    for (let x = 0; x < W; x += 40) {
        ctx.fillRect(x, 0, 2, pisoY);
    }
    
    ctx.fillStyle = '#1a2530';
    ctx.fillRect(0, 0, W, 30);
    ctx.fillStyle = '#0a1520';
    ctx.fillRect(0, 28, W, 3);
    
    for (let i = 0; i < 4; i++) {
        const lx = 80 + i * (W - 160) / 3;
        
        ctx.fillStyle = '#1a1a2a';
        ctx.fillRect(lx - 40, 0, 80, 6);
        
        ctx.fillStyle = '#e0e0c0';
        ctx.fillRect(lx - 38, 6, 76, 5);
        
        ctx.fillStyle = 'rgba(255, 250, 200, 0.2)';
        ctx.beginPath();
        ctx.moveTo(lx - 38, 11);
        ctx.lineTo(lx + 38, 11);
        ctx.lineTo(lx + 90, pisoY);
        ctx.lineTo(lx - 90, pisoY);
        ctx.closePath();
        ctx.fill();
    }
    
    ctx.fillStyle = '#f0f0e8';
    ctx.fillRect(60, 60, 260, 140);
    ctx.strokeStyle = '#8a8a80';
    ctx.lineWidth = 3;
    ctx.strokeRect(60, 60, 260, 140);
    ctx.strokeStyle = '#8a8a80';
    ctx.lineWidth = 1;
    ctx.strokeRect(65, 65, 250, 130);
    
    ctx.fillStyle = '#2a4a8a';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('REACCIONES QUÍMICAS', 75, 85);
    
    ctx.strokeStyle = '#2a4a8a';
    ctx.beginPath();
    ctx.moveTo(75, 92);
    ctx.lineTo(240, 92);
    ctx.stroke();
    
    ctx.fillStyle = '#1a1a1a';
    ctx.font = '11px monospace';
    ctx.fillText('H₂O + NaCl →', 75, 115);
    ctx.fillText('2H₂ + O₂ → 2H₂O', 75, 132);
    ctx.fillText('C₆H₁₂O₆ + O₂ →', 75, 149);
    ctx.fillText('CH₄ + 2O₂ → CO₂ + 2H₂O', 75, 166);
    
    ctx.fillStyle = 'rgba(200, 50, 50, 0.6)';
    ctx.font = 'bold 9px monospace';
    ctx.fillText('¡NO TOCAR SIN GUANTES!', 75, 185);
    
    const mesadas = [
        { x: 40, y: pisoY - 80, w: 220 },
        { x: 360, y: pisoY - 80, w: 220 },
        { x: 680, y: pisoY - 80, w: 220 }
    ];
    
    for (const m of mesadas) {
        ctx.fillStyle = '#3a3a3a';
        ctx.fillRect(m.x, m.y, m.w, 10);
        ctx.fillStyle = '#4a4a4a';
        ctx.fillRect(m.x, m.y, m.w, 3);
        
        ctx.fillStyle = '#5a5a5a';
        ctx.fillRect(m.x + 5, m.y + 10, m.w - 10, 50);
        ctx.fillStyle = '#4a4a4a';
        ctx.fillRect(m.x + 5, m.y + 10, m.w - 10, 3);
        
        ctx.fillStyle = '#2a2a2a';
        for (let d = 0; d < 3; d++) {
            const dx = m.x + 20 + d * 70;
            ctx.fillRect(dx, m.y + 15, 55, 40);
            ctx.fillStyle = '#3a3a3a';
            ctx.fillRect(dx + 2, m.y + 17, 51, 36);
            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(dx + 25, m.y + 32, 8, 4);
            ctx.fillStyle = '#2a2a2a';
        }
        
        ctx.fillStyle = '#2a1a10';
        ctx.fillRect(m.x + 10, m.y + 60, m.w - 20, 20);
    }
    
    for (let i = 0; i < 3; i++) {
        const mx = mesadas[i].x + mesadas[i].w / 2;
        const my = mesadas[i].y + 15;
        
        ctx.fillStyle = '#3a3a3a';
        ctx.fillRect(mx - 25, my, 50, 20);
        ctx.fillStyle = '#2a2a2a';
        ctx.fillRect(mx - 22, my + 3, 44, 14);
        
        ctx.fillStyle = '#6a6a6a';
        ctx.fillRect(mx - 3, my - 25, 6, 25);
        ctx.fillStyle = '#8a8a8a';
        ctx.fillRect(mx - 5, my - 27, 10, 4);
        
        ctx.fillStyle = '#6a6a6a';
        ctx.beginPath();
        ctx.arc(mx, my - 25, 5, Math.PI, 0);
        ctx.fill();
    }
    
    for (let i = 0; i < 3; i++) {
        const mx = mesadas[i].x + mesadas[i].w / 2 - 40;
        const my = mesadas[i].y + 8;
        
        ctx.fillStyle = '#5a3a20';
        ctx.fillRect(mx, my - 25, 50, 15);
        ctx.fillStyle = '#3a2510';
        ctx.fillRect(mx, my - 25, 50, 3);
        
        for (let t = 0; t < 5; t++) {
            const tx = mx + 5 + t * 9;
            ctx.fillStyle = '#a0d0e0';
            ctx.fillRect(tx, my - 22, 6, 12);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
            ctx.fillRect(tx + 1, my - 21, 2, 8);
        }
    }
    
    for (let i = 0; i < 3; i++) {
        const mx = mesadas[i].x + mesadas[i].w / 2 + 30;
        const my = mesadas[i].y + 8;
        
        ctx.fillStyle = '#6a6a6a';
        ctx.fillRect(mx, my - 20, 25, 10);
        ctx.fillStyle = '#8a8a8a';
        ctx.fillRect(mx + 2, my - 18, 21, 6);
        
        ctx.fillStyle = 'rgba(255, 100, 0, 0.3)';
        ctx.beginPath();
        ctx.arc(mx + 12, my - 25, 10, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#ffaa00';
        ctx.fillRect(mx + 10, my - 28, 4, 6);
    }
    
    ctx.fillStyle = '#3a2515';
    ctx.fillRect(W - 200, 50, 170, 220);
    ctx.strokeStyle = '#5a3520';
    ctx.lineWidth = 3;
    ctx.strokeRect(W - 200, 50, 170, 220);
    
    const coloresFrascos = ['#8a4040', '#406040', '#40408a', '#8a8a40'];
    
    for (let e = 0; e < 3; e++) {
        const ey = 65 + e * 68;
        
        ctx.fillStyle = '#2a1508';
        ctx.fillRect(W - 195, ey + 60, 160, 5);
        
        for (let f = 0; f < 4; f++) {
            const fx = W - 190 + f * 38;
            const color = coloresFrascos[(e + f) % coloresFrascos.length];
            
            ctx.fillStyle = color;
            ctx.fillRect(fx, ey, 30, 55);
            
            ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.fillRect(fx + 3, ey + 3, 24, 8);
            
            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            ctx.fillRect(fx + 3, ey + 20, 24, 20);
        }
    }
    
    ctx.fillStyle = '#1a1a1a';
    ctx.font = 'bold 8px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('REACTIVOS', W - 115, 45);
    
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(W - 250, 100, 40, 100);
    ctx.fillStyle = '#e0e0e0';
    ctx.fillRect(W - 250, 100, 40, 5);
    ctx.fillRect(W - 250, 100, 5, 100);
    ctx.fillRect(W - 215, 100, 5, 100);
    ctx.fillStyle = '#3a3a3a';
    ctx.fillRect(W - 240, 110, 20, 3);
    ctx.fillRect(W - 240, 118, 20, 3);
    ctx.fillRect(W - 235, 180, 15, 15);
    
    ctx.fillStyle = '#0a0a10';
    ctx.fillRect(0, pisoY, W, 100);
    ctx.fillStyle = '#1a1a25';
    ctx.fillRect(0, pisoY, W, 4);
    
    for (let y = pisoY + 4; y < H; y += 20) {
        for (let x = 0; x < W; x += 30) {
            ctx.fillStyle = ((x / 30 + y / 20) % 2 === 0) ? '#1a1a25' : '#151520';
            ctx.fillRect(x, y, 28, 18);
        }
    }
    
    ctx.fillStyle = 'rgba(255, 100, 0, 0.08)';
    ctx.fillRect(0, pisoY, W, 40);
    
    const viñeta = ctx.createRadialGradient(W/2, H/2, H*0.4, W/2, H/2, H*0.95);
    viñeta.addColorStop(0, 'rgba(0,0,0,0)');
    viñeta.addColorStop(1, 'rgba(0,0,0,0.6)');
    ctx.fillStyle = viñeta;
    ctx.fillRect(0, 0, W, H);
}

function fondoGimnasio(W, H) {
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#1a1008');
    grad.addColorStop(0.5, '#251810');
    grad.addColorStop(1, '#0f0a05');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
    
    ctx.fillStyle = '#2a1a10';
    ctx.fillRect(0, 0, W, 60);
    
    ctx.fillStyle = '#3a2515';
    for (let x = 0; x < W; x += 30) {
        ctx.fillRect(x, 0, 3, 60);
        ctx.fillRect(x, 30, 30, 3);
    }
    
    for (let i = 0; i < 5; i++) {
        const tx = 80 + i * (W - 160) / 4;
        
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(tx - 30, 50, 60, 6);
        ctx.fillRect(tx - 6, 50, 12, 20);
        
        ctx.fillStyle = '#e0d8a0';
        ctx.fillRect(tx - 28, 56, 56, 4);
        
        ctx.fillStyle = 'rgba(255, 240, 180, 0.25)';
        ctx.beginPath();
        ctx.moveTo(tx - 28, 60);
        ctx.lineTo(tx + 28, 60);
        ctx.lineTo(tx + 90, H - 130);
        ctx.lineTo(tx - 90, H - 130);
        ctx.closePath();
        ctx.fill();
    }
    
    const pisoY = H - 130;
    
    ctx.fillStyle = '#c8a060';
    ctx.fillRect(0, pisoY, W, 130);
    
    ctx.fillStyle = '#d8b070';
    for (let x = 0; x < W; x += 60) {
        ctx.fillRect(x, pisoY, 58, 3);
    }
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.fillRect(0, pisoY + 20, W, 2);
    ctx.fillRect(0, pisoY + 60, W, 2);
    ctx.fillRect(0, pisoY + 100, W, 2);
    
    ctx.strokeStyle = '#f0f0f0';
    ctx.lineWidth = 3;
    ctx.strokeRect(30, pisoY + 10, W - 60, 100);
    
    ctx.beginPath();
    ctx.moveTo(30, pisoY + 60);
    ctx.lineTo(W - 30, pisoY + 60);
    ctx.stroke();
    
    const cx = W / 2;
    const cy = pisoY + 60;
    
    ctx.beginPath();
    ctx.arc(cx, cy, 40, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(cx, cy, 15, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.strokeStyle = 'rgba(240, 240, 240, 0.5)';
    ctx.beginPath();
    ctx.moveTo(30, pisoY + 10);
    ctx.lineTo(30, pisoY + 110);
    ctx.moveTo(W - 30, pisoY + 10);
    ctx.lineTo(W - 30, pisoY + 110);
    ctx.stroke();
    
    const aros = [
        { x: W * 0.18, side: 'left' },
        { x: W * 0.82, side: 'right' }
    ];
    
    for (const aro of aros) {
        const tableroW = 90;
        const tableroH = 70;
        const tableroY = pisoY - 280;
        const tableroX = aro.x - tableroW / 2;
        
        ctx.fillStyle = '#5a5a5a';
        ctx.fillRect(tableroX + tableroW/2 - 4, 60, 8, tableroY - 60 + 20);
        
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(tableroX - 4, tableroY - 4, tableroW + 8, tableroH + 8);
        
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(tableroX, tableroY, tableroW, tableroH);
        
        ctx.fillStyle = '#e0e0e0';
        ctx.fillRect(tableroX, tableroY, tableroW, 3);
        ctx.fillRect(tableroX, tableroY + tableroH - 3, tableroW, 3);
        
        ctx.strokeStyle = '#cc4400';
        ctx.lineWidth = 3;
        ctx.strokeRect(tableroX + 15, tableroY + 40, tableroW - 30, 25);
        
        ctx.strokeStyle = '#cc4400';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(tableroX + tableroW/2, tableroY + 50, 14, 0, Math.PI * 2);
        ctx.stroke();
        
        const aroY = tableroY + tableroH - 10;
        const aroX = tableroX + tableroW/2;
        
        ctx.fillStyle = '#cc4400';
        ctx.beginPath();
        ctx.ellipse(aroX, aroY, 22, 6, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = '#a03000';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.strokeStyle = '#f0f0f0';
        ctx.lineWidth = 1;
        for (let r = 0; r < 6; r++) {
            const angle1 = (r / 6) * Math.PI * 2;
            const angle2 = ((r + 1) / 6) * Math.PI * 2;
            
            const x1 = aroX + Math.cos(angle1) * 20;
            const y1 = aroY + Math.sin(angle1) * 5;
            const x2 = aroX + Math.cos(angle2) * 20;
            const y2 = aroY + Math.sin(angle2) * 5;
            
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
    }
    
    ctx.fillStyle = '#2a1a10';
    ctx.fillRect(20, H - 200, W - 40, 70);
    
    for (let i = 0; i < 10; i++) {
        const gx = 30 + i * (W - 60) / 10;
        
        ctx.fillStyle = i % 2 === 0 ? '#3a2515' : '#2a1a10';
        ctx.fillRect(gx, H - 200, (W - 60) / 10 - 2, 70);
        
        ctx.fillStyle = '#1a0f08';
        ctx.fillRect(gx + 5, H - 195, (W - 60) / 10 - 12, 25);
        
        ctx.fillStyle = '#4a3520';
        ctx.fillRect(gx + 2, H - 170, (W - 60) / 10 - 4, 3);
    }
    
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(W/2 - 80, 70, 160, 70);
    ctx.strokeStyle = '#3a3a3a';
    ctx.lineWidth = 3;
    ctx.strokeRect(W/2 - 80, 70, 160, 70);
    
    ctx.fillStyle = '#cc0000';
    ctx.font = 'bold 28px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('00', W/2 - 40, 115);
    
    ctx.fillStyle = '#f0f0f0';
    ctx.font = 'bold 12px monospace';
    ctx.fillText('LOCAL', W/2 - 40, 90);
    ctx.fillText('VISITA', W/2 + 40, 90);
    
    ctx.fillStyle = '#cc0000';
    ctx.font = 'bold 28px monospace';
    ctx.fillText('00', W/2 + 40, 115);
    
    ctx.fillStyle = '#8a6a3a';
    ctx.fillRect(30, H - 260, 90, 60);
    ctx.strokeStyle = '#5a3a1a';
    ctx.lineWidth = 3;
    ctx.strokeRect(30, H - 260, 90, 60);
    
    ctx.fillStyle = '#f0e0c0';
    ctx.font = 'bold 10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('ENTRADA', 75, H - 235);
    ctx.font = '8px monospace';
    ctx.fillText('EQUIPO LOCAL', 75, H - 220);
    
    ctx.fillStyle = '#8a6a3a';
    ctx.fillRect(W - 120, H - 260, 90, 60);
    ctx.strokeStyle = '#5a3a1a';
    ctx.lineWidth = 3;
    ctx.strokeRect(W - 120, H - 260, 90, 60);
    
    ctx.fillStyle = '#f0e0c0';
    ctx.font = 'bold 10px monospace';
    ctx.fillText('VISITANTES', W - 75, H - 235);
    ctx.fillText('EQUIPO VISITA', W - 75, H - 220);
    
    const viñeta = ctx.createRadialGradient(W/2, H/2, H*0.4, W/2, H/2, H*0.95);
    viñeta.addColorStop(0, 'rgba(0,0,0,0)');
    viñeta.addColorStop(1, 'rgba(0,0,0,0.6)');
    ctx.fillStyle = viñeta;
    ctx.fillRect(0, 0, W, H);
}

function fondoSalaMusica(W, H) {
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#1a0a1a');
    grad.addColorStop(0.5, '#25102a');
    grad.addColorStop(1, '#0f0515');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
    
    ctx.fillStyle = '#2a1535';
    for (let x = 0; x < W; x += 80) {
        for (let y = 0; y < H * 0.7; y += 80) {
            ctx.fillRect(x, y, 4, 80);
            ctx.fillRect(x, y, 80, 4);
        }
    }
    
    const paneles = [
        { x: 50, y: 50, w: 80, h: 80 },
        { x: 160, y: 50, w: 80, h: 80 },
        { x: W - 240, y: 50, w: 80, h: 80 },
        { x: W - 130, y: 50, w: 80, h: 80 }
    ];
    
    for (const p of paneles) {
        ctx.fillStyle = '#1a0a20';
        ctx.fillRect(p.x - 3, p.y - 3, p.w + 6, p.h + 6);
        
        ctx.fillStyle = '#3a1a45';
        ctx.fillRect(p.x, p.y, p.w, p.h);
        
        for (let i = 0; i < 6; i++) {
            ctx.fillStyle = i % 2 === 0 ? '#4a1a55' : '#2a0a35';
            ctx.fillRect(p.x + 2 + (i % 3) * 26, p.y + 2 + Math.floor(i / 3) * 38, 24, 36);
        }
    }
    
    ctx.fillStyle = '#3a0a0a';
    ctx.fillRect(0, 0, W, 25);
    ctx.fillStyle = '#5a0a0a';
    ctx.fillRect(0, 22, W, 4);
    
    const pisoY = H - 130;
    
    ctx.fillStyle = '#2a1a0a';
    ctx.fillRect(0, pisoY, W, 130);
    
    ctx.fillStyle = '#3a2515';
    for (let x = 0; x < W; x += 70) {
        ctx.fillRect(x, pisoY, 68, 3);
    }
    
    for (let y = pisoY; y < H; y += 30) {
        for (let x = 0; x < W; x += 100) {
            const offset = (y / 30) % 2 === 0 ? 0 : 50;
            ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
            ctx.fillRect(x + offset, y, 2, 30);
        }
    }
    
    ctx.fillStyle = '#2a1508';
    ctx.fillRect(40, pisoY - 130, 60, 130);
    ctx.fillStyle = '#3a2010';
    ctx.fillRect(40, pisoY - 130, 60, 5);
    ctx.fillRect(40, pisoY - 130, 5, 130);
    ctx.fillRect(95, pisoY - 130, 5, 130);
    
    ctx.fillStyle = '#1a0a05';
    ctx.fillRect(45, pisoY - 125, 50, 120);
    
    for (let s = 0; s < 5; s++) {
        ctx.fillStyle = '#3a2515';
        ctx.fillRect(45, pisoY - 125 + s * 25, 50, 3);
    }
    
    for (let n = 0; n < 12; n++) {
        const nx = 48 + (n % 3) * 16;
        const ny = pisoY - 120 + Math.floor(n / 3) * 25;
        const colores = ['#8a2020', '#2a4a2a', '#2a2a4a', '#8a8a20'];
        ctx.fillStyle = colores[n % colores.length];
        ctx.fillRect(nx, ny, 12, 20);
    }
    
    ctx.fillStyle = '#3a0a0a';
    ctx.fillRect(W - 90, pisoY - 180, 50, 180);
    ctx.fillStyle = '#4a0a0a';
    ctx.fillRect(W - 90, pisoY - 180, 50, 5);
    ctx.fillRect(W - 90, pisoY - 180, 5, 180);
    ctx.fillRect(W - 45, pisoY - 180, 5, 180);
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(W - 85, pisoY - 175, 40, 175);
    
    ctx.strokeStyle = '#6a6a6a';
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    ctx.moveTo(W - 65, pisoY - 150);
    ctx.lineTo(W - 65, pisoY - 80);
    ctx.stroke();
    
    ctx.fillStyle = '#8a5a2a';
    ctx.beginPath();
    ctx.ellipse(W - 65, pisoY - 75, 20, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#6a3a1a';
    ctx.fillRect(W - 67, pisoY - 155, 4, 40);
    
    const atriles = [
        { x: 200, y: pisoY - 70 },
        { x: 400, y: pisoY - 70 },
        { x: 600, y: pisoY - 70 }
    ];
    
    for (const atril of atriles) {
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(atril.x - 4, atril.y, 8, 70);
        
        ctx.fillStyle = '#2a1a0f';
        ctx.beginPath();
        ctx.moveTo(atril.x - 18, atril.y);
        ctx.lineTo(atril.x, atril.y - 35);
        ctx.lineTo(atril.x + 18, atril.y);
        ctx.closePath();
        ctx.fill();
        
        ctx.fillStyle = '#3a2010';
        ctx.fillRect(atril.x - 22, atril.y - 5, 44, 6);
        
        ctx.fillStyle = '#f0e8d0';
        ctx.fillRect(atril.x - 15, atril.y - 30, 30, 22);
        
        ctx.fillStyle = '#2a2a2a';
        for (let l = 0; l < 5; l++) {
            ctx.fillRect(atril.x - 12, atril.y - 27 + l * 4, 24, 1);
        }
        
        ctx.fillStyle = 'rgba(255, 220, 150, 0.9)';
        ctx.beginPath();
        ctx.arc(atril.x, atril.y - 55, 4, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = 'rgba(255, 220, 150, 0.3)';
        ctx.beginPath();
        ctx.arc(atril.x, atril.y - 55, 15, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#f0f0e0';
        ctx.fillRect(atril.x - 2, atril.y - 65, 4, 10);
    }
    
    ctx.fillStyle = '#3a2515';
    ctx.fillRect(120, pisoY - 200, 80, 200);
    ctx.strokeStyle = '#5a3520';
    ctx.lineWidth = 3;
    ctx.strokeRect(120, pisoY - 200, 80, 200);
    
    ctx.fillStyle = '#2a1a10';
    ctx.fillRect(125, pisoY - 195, 70, 190);
    
    for (let i = 0; i < 3; i++) {
        const iy = pisoY - 185 + i * 60;
        
        ctx.fillStyle = '#1a0a05';
        ctx.fillRect(128, iy + 45, 64, 4);
        
        ctx.fillStyle = '#8a4a2a';
        ctx.beginPath();
        ctx.ellipse(160, iy + 25, 20, 25, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#6a3a1a';
        ctx.fillRect(158, iy + 40, 4, 20);
        
        ctx.fillStyle = '#3a1a0a';
        ctx.beginPath();
        ctx.ellipse(160, iy + 45, 15, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#8a5a2a';
        ctx.fillRect(148, iy, 3, 15);
        ctx.fillRect(169, iy, 3, 15);
        
        ctx.strokeStyle = '#f0e8d0';
        ctx.lineWidth = 0.5;
        for (let s = 0; s < 4; s++) {
            ctx.beginPath();
            ctx.moveTo(148 + s * 7, iy);
            ctx.lineTo(148 + s * 7, iy + 12);
            ctx.stroke();
        }
    }
    
    ctx.fillStyle = '#5a3a20';
    ctx.fillRect(W - 220, pisoY - 200, 100, 200);
    ctx.strokeStyle = '#7a4a2a';
    ctx.lineWidth = 3;
    ctx.strokeRect(W - 220, pisoY - 200, 100, 200);
    
    ctx.fillStyle = '#3a2515';
    ctx.fillRect(W - 215, pisoY - 195, 90, 190);
    
    ctx.fillStyle = '#1a0a05';
    ctx.fillRect(W - 210, pisoY - 190, 80, 85);
    
    ctx.fillStyle = '#0a0a0a';
    ctx.beginPath();
    ctx.ellipse(W - 170, pisoY - 155, 30, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#5a2a0a';
    ctx.beginPath();
    ctx.ellipse(W - 170, pisoY - 160, 25, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#3a1a0a';
    ctx.lineWidth = 1;
    for (let s = 0; s < 6; s++) {
        ctx.beginPath();
        ctx.moveTo(W - 195 + s * 10, pisoY - 160);
        ctx.lineTo(W - 195 + s * 10, pisoY - 190);
        ctx.stroke();
    }
    
    ctx.fillStyle = '#3a1a0a';
    ctx.fillRect(W - 180, pisoY - 210, 20, 60);
    
    ctx.fillStyle = '#2a1a0f';
    ctx.fillRect(W - 200, pisoY - 105, 60, 100);
    
    ctx.fillStyle = '#f0e8d0';
    ctx.fillRect(W - 195, pisoY - 100, 50, 70);
    
    ctx.fillStyle = '#2a2a2a';
    for (let l = 0; l < 8; l++) {
        ctx.fillRect(W - 190, pisoY - 97 + l * 8, 40, 1);
    }
    
    ctx.strokeStyle = 'rgba(200, 200, 200, 0.4)';
    ctx.lineWidth = 1;
    for (let s = 0; s < 6; s++) {
        const sx = 30 + s * 40;
        const sy = 30;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + 15, sy + 25);
        ctx.moveTo(sx + 15, sy + 25);
        ctx.lineTo(sx + 5, sy + 30);
        ctx.stroke();
    }
    
    ctx.strokeStyle = 'rgba(200, 200, 200, 0.5)';
    ctx.beginPath();
    ctx.moveTo(W - 100, 30);
    ctx.lineTo(W - 140, 70);
    ctx.moveTo(W - 140, 70);
    ctx.lineTo(W - 130, 75);
    ctx.moveTo(W - 140, 70);
    ctx.lineTo(W - 135, 85);
    ctx.stroke();
    
    const notas = [
        { x: 250, y: 180, char: '♪', size: 24 },
        { x: 400, y: 140, char: '♫', size: 28 },
        { x: 550, y: 200, char: '♪', size: 22 },
        { x: 700, y: 160, char: '♬', size: 26 }
    ];
    
    notas.forEach(n => {
        const pulso = Math.sin(frames * 0.03 + n.x * 0.01) * 0.4 + 0.6;
        ctx.fillStyle = `rgba(180, 100, 220, ${0.4 * pulso})`;
        ctx.font = `${n.size}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText(n.char, n.x, n.y);
    });
    
    ctx.fillStyle = 'rgba(80, 20, 100, 0.15)';
    ctx.beginPath();
    ctx.arc(W/2, H/2, H*0.6, 0, Math.PI * 2);
    ctx.fill();
    
    const viñeta = ctx.createRadialGradient(W/2, H/2, H*0.35, W/2, H/2, H*0.95);
    viñeta.addColorStop(0, 'rgba(0,0,0,0)');
    viñeta.addColorStop(1, 'rgba(0,0,0,0.7)');
    ctx.fillStyle = viñeta;
    ctx.fillRect(0, 0, W, H);
}

function fondoPatio(W, H) {
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#050520');
    grad.addColorStop(0.5, '#0f0f35');
    grad.addColorStop(1, '#08081a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
    
    for (let i = 0; i < 100; i++) {
        const x = (i * 47 + i * i * 3) % W;
        const y = (i * 29 + i * i * 2) % (H * 0.6);
        const size = (i % 3) + 1;
        ctx.fillStyle = i % 7 === 0 ? 'rgba(255, 255, 200, 0.9)' : 'rgba(180, 190, 220, 0.6)';
        ctx.fillRect(x, y, size, size);
    }
    
    const mx = W - 130;
    const my = 90;
    
    ctx.fillStyle = 'rgba(220, 220, 200, 0.15)';
    ctx.beginPath();
    ctx.arc(mx, my, 110, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#f0f0d8';
    ctx.beginPath();
    ctx.arc(mx, my, 55, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(200, 200, 180, 0.4)';
    ctx.beginPath();
    ctx.arc(mx - 15, my - 12, 10, 0, Math.PI * 2);
    ctx.arc(mx + 20, my + 18, 12, 0, Math.PI * 2);
    ctx.arc(mx + 5, my - 25, 7, 0, Math.PI * 2);
    ctx.fill();
    
    const pisoY = H - 110;
    
    ctx.fillStyle = '#0f2a15';
    ctx.fillRect(0, pisoY, W, 110);
    
    ctx.fillStyle = '#0a1f10';
    for (let x = 0; x < W; x += 30) {
        ctx.fillRect(x, pisoY, 28, 3);
    }
    
    const arboles = [
        { x: 130, scale: 0.85 },
        { x: 400, scale: 1.0 },
        { x: 660, scale: 0.9 }
    ];
    
    for (const a of arboles) {
        const s = a.scale;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.beginPath();
        ctx.ellipse(a.x + 15, pisoY + 10, 65 * s, 12, 0, 0, Math.PI * 2);
        ctx.fill();
        
        const troncoW = 30 * s;
        const troncoH = 110 * s;
        
        ctx.fillStyle = '#3a2010';
        ctx.beginPath();
        ctx.moveTo(a.x - troncoW, pisoY);
        ctx.lineTo(a.x - troncoW * 0.7, pisoY - troncoH * 0.5);
        ctx.lineTo(a.x - troncoW * 0.5, pisoY - troncoH);
        ctx.lineTo(a.x + troncoW * 0.5, pisoY - troncoH);
        ctx.lineTo(a.x + troncoW * 0.7, pisoY - troncoH * 0.5);
        ctx.lineTo(a.x + troncoW, pisoY);
        ctx.closePath();
        ctx.fill();
        
        ctx.fillStyle = '#2a1508';
        ctx.fillRect(a.x - troncoW * 0.2, pisoY - troncoH, troncoW * 0.3, troncoH);
        
        ctx.strokeStyle = '#4a2a15';
        ctx.lineWidth = 3 * s;
        ctx.beginPath();
        ctx.moveTo(a.x, pisoY - troncoH * 0.6);
        ctx.lineTo(a.x - 40 * s, pisoY - troncoH * 1.3);
        ctx.moveTo(a.x, pisoY - troncoH * 0.7);
        ctx.lineTo(a.x + 45 * s, pisoY - troncoH * 1.2);
        ctx.stroke();
        
        const copaY = pisoY - troncoH - 60 * s;
        const copaR = 65 * s;
        
        ctx.fillStyle = '#0a2a10';
        ctx.beginPath();
        ctx.arc(a.x - copaR * 0.5, copaY + 20 * s, copaR * 0.85, 0, Math.PI * 2);
        ctx.arc(a.x + copaR * 0.5, copaY + 20 * s, copaR * 0.85, 0, Math.PI * 2);
        ctx.arc(a.x, copaY - 15 * s, copaR * 0.9, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#0f3a15';
        ctx.beginPath();
        ctx.arc(a.x - copaR * 0.4, copaY + 10 * s, copaR * 0.75, 0, Math.PI * 2);
        ctx.arc(a.x + copaR * 0.4, copaY + 10 * s, copaR * 0.75, 0, Math.PI * 2);
        ctx.arc(a.x, copaY - 20 * s, copaR * 0.8, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#155a20';
        ctx.beginPath();
        ctx.arc(a.x, copaY - 25 * s, copaR * 0.65, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#1a7a28';
        ctx.beginPath();
        ctx.arc(a.x - copaR * 0.15, copaY, copaR * 0.4, 0, Math.PI * 2);
        ctx.fill();
    }
    
    const bancoX = W/2;
    const bancoY = pisoY - 10;
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.beginPath();
    ctx.ellipse(bancoX, bancoY + 50, 75, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#4a2a15';
    ctx.fillRect(bancoX - 70, bancoY, 140, 10);
    ctx.fillStyle = '#6a3a1a';
    ctx.fillRect(bancoX - 70, bancoY, 140, 3);
    
    ctx.fillStyle = '#4a2a15';
    ctx.fillRect(bancoX - 70, bancoY + 35, 140, 10);
    ctx.fillStyle = '#6a3a1a';
    ctx.fillRect(bancoX - 70, bancoY + 35, 140, 3);
    
    ctx.fillStyle = '#3a1a08';
    ctx.fillRect(bancoX - 60, bancoY + 10, 6, 25);
    ctx.fillRect(bancoX + 54, bancoY + 10, 6, 25);
    ctx.fillRect(bancoX - 60, bancoY + 45, 6, 25);
    ctx.fillRect(bancoX + 54, bancoY + 45, 6, 25);
    
    ctx.fillStyle = '#3a3a3a';
    ctx.beginPath();
    ctx.arc(W - 60, pisoY - 100, 20, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#2a2a2a';
    ctx.fillRect(W - 68, pisoY - 80, 16, 80);
    
    ctx.fillStyle = 'rgba(255, 220, 100, 0.3)';
    ctx.beginPath();
    ctx.arc(W - 60, pisoY - 120, 40, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#ffdd66';
    ctx.beginPath();
    ctx.arc(W - 60, pisoY - 120, 12, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(bancoX - 30, bancoY - 12, 60, 12);
    
    ctx.fillStyle = 'rgba(255, 220, 150, 0.5)';
    ctx.font = 'italic 9px monospace';
    ctx.fillText('busca bajo el árbol', bancoX, bancoY + 80);
    
    const viñeta = ctx.createRadialGradient(W/2, H/2, H*0.4, W/2, H/2, H*0.95);
    viñeta.addColorStop(0, 'rgba(0,0,0,0)');
    viñeta.addColorStop(1, 'rgba(0,0,0,0.55)');
    ctx.fillStyle = viñeta;
    ctx.fillRect(0, 0, W, H);
}

function fondoOficina(W, H) {
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#1a1208');
    grad.addColorStop(0.5, '#251a0f');
    grad.addColorStop(1, '#100a05');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
    
    ctx.fillStyle = '#2a1a0a';
    for (let y = 0; y < H - 100; y += 60) {
        ctx.fillRect(0, y, W, 2);
    }
    for (let x = 0; x < W; x += 100) {
        ctx.fillRect(x, 0, 2, H - 100);
    }
    
    ctx.fillStyle = '#3a2515';
    ctx.fillRect(0, 0, W, 15);
    ctx.fillStyle = '#4a3020';
    ctx.fillRect(0, 13, W, 5);
    
    const pisoY = H - 100;
    
    ctx.fillStyle = '#1a0f08';
    ctx.fillRect(0, pisoY, W, 100);
    
    ctx.fillStyle = '#2a1a0f';
    for (let x = 0; x < W; x += 80) {
        ctx.fillRect(x, pisoY, 78, 2);
    }
    for (let y = pisoY; y < H; y += 30) {
        ctx.fillRect(0, y, W, 2);
    }
    
    ctx.fillStyle = '#4a1010';
    ctx.fillRect(W/2 - 220, pisoY + 10, 440, 75);
    ctx.strokeStyle = '#6a2020';
    ctx.lineWidth = 4;
    ctx.strokeRect(W/2 - 220, pisoY + 10, 440, 75);
    
    ctx.fillStyle = '#5a1818';
    ctx.fillRect(W/2 - 215, pisoY + 15, 430, 65);
    ctx.strokeStyle = 'rgba(120, 40, 40, 0.6)';
    ctx.lineWidth = 2;
    ctx.strokeRect(W/2 - 205, pisoY + 25, 410, 45);
    
    ctx.fillStyle = '#3a1a10';
    ctx.fillRect(W - 260, 30, 220, 280);
    ctx.strokeStyle = '#5a3015';
    ctx.lineWidth = 5;
    ctx.strokeRect(W - 260, 30, 220, 280);
    
    ctx.fillStyle = '#1a0f08';
    ctx.fillRect(W - 255, 35, 210, 270);
    
    for (let e = 0; e < 4; e++) {
        const ey = 50 + e * 65;
        
        ctx.fillStyle = '#3a2010';
        ctx.fillRect(W - 250, ey + 55, 200, 5);
        
        let libroX = W - 245;
        const colores = ['#8a2020', '#2a4a2a', '#2a2a4a', '#8a8a20', '#5a2a4a', '#2a5a5a'];
        
        for (let b = 0; b < 8; b++) {
            const libroW = 20 + (b * 3) % 8;
            const libroH = 40 + (b * 7) % 10;
            const color = colores[(e * 5 + b * 3) % colores.length];
            
            ctx.fillStyle = color;
            ctx.fillRect(libroX, ey + (55 - libroH), libroW, libroH);
            
            ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
            ctx.fillRect(libroX, ey + (55 - libroH), 3, libroH);
            
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(libroX + libroW - 2, ey + (55 - libroH), 2, libroH);
            
            libroX += libroW + 3;
        }
    }
    
    const escX = 100;
    const escY = pisoY - 90;
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.beginPath();
    ctx.ellipse(escX + 200, escY + 95, 240, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#3a1a0a';
    ctx.fillRect(escX - 10, escY - 8, 420, 10);
    
    ctx.fillStyle = '#5a2a15';
    ctx.fillRect(escX, escY, 400, 90);
    
    ctx.fillStyle = '#6a3520';
    ctx.fillRect(escX, escY, 400, 8);
    
    ctx.fillStyle = '#4a1a0a';
    for (let i = 0; i < 4; i++) {
        ctx.fillRect(escX + 20 + i * 95, escY + 15, 80, 60);
        ctx.fillStyle = '#5a2515';
        ctx.fillRect(escX + 25 + i * 95, escY + 20, 70, 50);
        ctx.fillStyle = '#3a0a00';
        ctx.fillRect(escX + 55 + i * 95, escY + 42, 10, 4);
        ctx.fillStyle = '#4a1a0a';
    }
    
    ctx.fillStyle = '#f0e8d0';
    ctx.fillRect(escX + 40, escY - 30, 100, 40);
    ctx.strokeStyle = '#2a1a10';
    ctx.lineWidth = 1;
    for (let l = 0; l < 5; l++) {
        ctx.beginPath();
        ctx.moveTo(escX + 45, escY - 22 + l * 7);
        ctx.lineTo(escX + 135, escY - 22 + l * 7);
        ctx.stroke();
    }
    
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(escX + 160, escY - 25, 50, 30);
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(escX + 163, escY - 22, 44, 24);
    
    ctx.fillStyle = '#3a3a3a';
    ctx.fillRect(escX + 175, escY - 35, 20, 15);
    ctx.fillRect(escX + 180, escY - 40, 10, 8);
    
    ctx.fillStyle = '#2a2a2a';
    ctx.fillRect(escX + 230, escY - 35, 30, 40);
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(escX + 233, escY - 32, 24, 34);
    
    ctx.fillStyle = '#4a1010';
    ctx.fillRect(escX + 280, escY - 30, 70, 45);
    ctx.strokeStyle = '#8a2020';
    ctx.lineWidth = 2;
    ctx.strokeRect(escX + 280, escY - 30, 70, 45);
    
    ctx.fillStyle = '#f0e8d0';
    ctx.font = 'bold 7px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('EXPEDIENTE', escX + 315, escY - 15);
    ctx.fillText('A-42', escX + 315, escY - 3);
    ctx.fillText('CONFIDENCIAL', escX + 315, escY + 9);
    
    const sillaCx = escX + 300;
    
    ctx.fillStyle = '#0a0505';
    ctx.beginPath();
    ctx.ellipse(sillaCx, escY + 100, 45, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#1a0f08';
    ctx.fillRect(sillaCx - 40, escY - 80, 80, 90);
    ctx.strokeStyle = '#3a1f0a';
    ctx.lineWidth = 3;
    ctx.strokeRect(sillaCx - 40, escY - 80, 80, 90);
    
    ctx.fillStyle = '#2a1508';
    ctx.fillRect(sillaCx - 35, escY - 75, 70, 80);
    
    ctx.strokeStyle = '#4a2515';
    ctx.lineWidth = 1;
    for (let l = 0; l < 4; l++) {
        ctx.beginPath();
        ctx.moveTo(sillaCx - 30, escY - 60 + l * 15);
        ctx.lineTo(sillaCx + 30, escY - 60 + l * 15);
        ctx.stroke();
    }
    
    ctx.fillStyle = '#1a0a05';
    ctx.fillRect(sillaCx - 15, escY + 10, 30, 15);
    ctx.fillRect(sillaCx - 5, escY + 25, 10, 40);
    
    ctx.fillStyle = '#0a0505';
    ctx.fillRect(sillaCx - 30, escY + 65, 60, 6);
    
    for (let i = 0; i < 2; i++) {
        const sillaX = escX + 60 + i * 240;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.beginPath();
        ctx.ellipse(sillaX, pisoY + 15, 35, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#3a1a0a';
        ctx.fillRect(sillaX - 30, pisoY - 60, 60, 60);
        ctx.strokeStyle = '#5a2a15';
        ctx.lineWidth = 3;
        ctx.strokeRect(sillaX - 30, pisoY - 60, 60, 60);
        
        ctx.fillStyle = '#4a2515';
        ctx.fillRect(sillaX - 25, pisoY - 55, 50, 50);
        
        ctx.strokeStyle = '#6a3520';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(sillaX, pisoY - 55);
        ctx.lineTo(sillaX, pisoY - 5);
        ctx.stroke();
        
        ctx.fillStyle = '#2a1005';
        ctx.fillRect(sillaX - 30, pisoY, 60, 8);
        
        ctx.fillStyle = '#3a1a0a';
        ctx.fillRect(sillaX - 25, pisoY + 8, 8, 40);
        ctx.fillRect(sillaX + 17, pisoY + 8, 8, 40);
    }
    
    const cuadros = [
        { x: 80, y: 60, w: 100, h: 70 },
        { x: 200, y: 60, w: 100, h: 70 }
    ];
    
    for (const c of cuadros) {
        ctx.fillStyle = '#1a0a05';
        ctx.fillRect(c.x - 5, c.y - 5, c.w + 10, c.h + 10);
        
        ctx.fillStyle = '#8a6a3a';
        ctx.fillRect(c.x, c.y, c.w, c.h);
        
        ctx.fillStyle = '#f0e8d0';
        ctx.fillRect(c.x + 8, c.y + 8, c.w - 16, c.h - 16);
        
        ctx.fillStyle = '#2a1a10';
        ctx.font = '6px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('DIPLOMA', c.x + c.w/2, c.y + 22);
        
        ctx.strokeStyle = '#8a2020';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(c.x + c.w/2, c.y + 42, 12, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.fillStyle = '#8a2020';
        ctx.fillRect(c.x + c.w/2 - 8, c.y + 56, 16, 6);
    }
    
    ctx.fillStyle = '#1a1a1a';
    ctx.beginPath();
    ctx.arc(420, 70, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#5a3a1a';
    ctx.lineWidth = 4;
    ctx.stroke();
    
    ctx.fillStyle = '#f0e8d0';
    ctx.beginPath();
    ctx.arc(420, 70, 20, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(420, 70);
    ctx.lineTo(420, 55);
    ctx.moveTo(420, 70);
    ctx.lineTo(430, 75);
    ctx.stroke();
    
    const viñeta = ctx.createRadialGradient(W/2, H/2, H*0.4, W/2, H/2, H*0.95);
    viñeta.addColorStop(0, 'rgba(0,0,0,0)');
    viñeta.addColorStop(1, 'rgba(0,0,0,0.65)');
    ctx.fillStyle = viñeta;
    ctx.fillRect(0, 0, W, H);
}
function fondoSotano(W, H) {
    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, W, H);
    
    const ladrilloW = 60;
    const ladrilloH = 26;
    
    for (let y = 0; y < H - 100; y += ladrilloH) {
        const offset = (y / ladrilloH) % 2 === 0 ? 0 : ladrilloW / 2;
        
        for (let x = -ladrilloW; x < W + ladrilloW; x += ladrilloW) {
            const bx = x + offset;
            const shadeIdx = (Math.floor(x / ladrilloW) + Math.floor(y / ladrilloH)) % 4;
            const shades = ['#2a1a12', '#251610', '#2d1c14', '#22140e'];
            
            ctx.fillStyle = shades[shadeIdx];
            ctx.fillRect(bx + 2, y + 2, ladrilloW - 4, ladrilloH - 4);
            
            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            ctx.fillRect(bx + 2, y + ladrilloH - 3, ladrilloW - 4, 2);
            ctx.fillRect(bx + ladrilloW - 3, y + 2, 2, ladrilloH - 4);
            
            ctx.fillStyle = 'rgba(80, 50, 30, 0.3)';
            ctx.fillRect(bx + 3, y + 3, ladrilloW - 6, 1);
        }
    }
    
    ctx.fillStyle = '#1a0f08';
    ctx.fillRect(0, 0, W, 40);
    ctx.fillStyle = '#0a0505';
    ctx.fillRect(0, 36, W, 4);
    
    ctx.strokeStyle = '#3a2a1a';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(0, 60);
    ctx.lineTo(W, 60);
    ctx.stroke();
    
    ctx.strokeStyle = '#4a3520';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 57);
    ctx.lineTo(W, 57);
    ctx.stroke();
    
    ctx.strokeStyle = '#3a2a1a';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(W, 20);
    ctx.stroke();
    
    ctx.strokeStyle = '#2a1a10';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 60);
    ctx.moveTo(500, 0);
    ctx.lineTo(500, 60);
    ctx.moveTo(750, 0);
    ctx.lineTo(750, 60);
    ctx.stroke();
    
    const pisoY = H - 100;
    
    ctx.fillStyle = '#1a1410';
    ctx.fillRect(0, pisoY, W, 100);
    
    ctx.fillStyle = '#0f0a08';
    for (let x = 0; x < W; x += 50) {
        ctx.fillRect(x, pisoY, 48, 4);
    }
    
    for (let y = pisoY; y < H; y += 25) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(0, y, W, 2);
    }
    
    ctx.fillStyle = 'rgba(30, 50, 80, 0.15)';
    ctx.beginPath();
    ctx.ellipse(W * 0.3, pisoY + 40, 80, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(W * 0.7, pisoY + 60, 60, 15, 0, 0, Math.PI * 2);
    ctx.fill();
    
    const ventanas = [
        { x: 60, y: 90 },
        { x: W - 130, y: 90 }
    ];
    
    for (const v of ventanas) {
        const vx = v.x;
        const vy = v.y;
        const vw = 70;
        const vh = 50;
        
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(vx - 4, vy - 4, vw + 8, vh + 8);
        
        const gradVent = ctx.createLinearGradient(vx, vy, vx, vy + vh);
        gradVent.addColorStop(0, '#2a3a5a');
        gradVent.addColorStop(1, '#1a2a4a');
        ctx.fillStyle = gradVent;
        ctx.fillRect(vx, vy, vw, vh);
        
        ctx.strokeStyle = '#0a0a0a';
        ctx.lineWidth = 3;
        for (let r = 0; r < 5; r++) {
            ctx.beginPath();
            ctx.moveTo(vx, vy + r * (vh / 4));
            ctx.lineTo(vx + vw, vy + r * (vh / 4));
            ctx.stroke();
        }
        
        ctx.beginPath();
        ctx.moveTo(vx + vw / 2, vy);
        ctx.lineTo(vx + vw / 2, vy + vh);
        ctx.stroke();
        
        ctx.fillStyle = 'rgba(100, 150, 220, 0.15)';
        ctx.fillRect(vx, vy + vh, 60, 50);
    }
    
    const estanteria1 = { x: 130, y: pisoY - 160, w: 150, h: 160 };
    
    ctx.fillStyle = '#3a2a1a';
    ctx.fillRect(estanteria1.x, estanteria1.y, estanteria1.w, estanteria1.h);
    
    ctx.fillStyle = '#4a3520';
    ctx.fillRect(estanteria1.x, estanteria1.y, estanteria1.w, 6);
    ctx.fillRect(estanteria1.x, estanteria1.y, 6, estanteria1.h);
    ctx.fillRect(estanteria1.x + estanteria1.w - 6, estanteria1.y, 6, estanteria1.h);
    ctx.fillRect(estanteria1.x, estanteria1.y + estanteria1.h - 6, estanteria1.w, 6);
    
    for (let e = 0; e < 3; e++) {
        const ey = estanteria1.y + 10 + e * 50;
        
        ctx.fillStyle = '#2a1a10';
        ctx.fillRect(estanteria1.x + 6, ey + 40, estanteria1.w - 12, 5);
        
        for (let c = 0; c < 4; c++) {
            const cx = estanteria1.x + 12 + c * 35;
            const ch = 25 + (c * 3) % 12;
            const colores = ['#8a4a20', '#6a3a1a', '#7a4020', '#5a2a10'];
            
            ctx.fillStyle = colores[(e * 4 + c) % colores.length];
            ctx.fillRect(cx, ey + (40 - ch), 28, ch);
            
            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            ctx.fillRect(cx + 2, ey + (40 - ch) + 5, 24, 2);
            ctx.fillRect(cx + 2, ey + (40 - ch) + 12, 24, 2);
        }
    }
    
    const estanteria2 = { x: W - 280, y: pisoY - 180, w: 150, h: 180 };
    
    ctx.fillStyle = '#3a2a1a';
    ctx.fillRect(estanteria2.x, estanteria2.y, estanteria2.w, estanteria2.h);
    
    ctx.fillStyle = '#4a3520';
    ctx.fillRect(estanteria2.x, estanteria2.y, estanteria2.w, 6);
    ctx.fillRect(estanteria2.x, estanteria2.y, 6, estanteria2.h);
    ctx.fillRect(estanteria2.x + estanteria2.w - 6, estanteria2.y, 6, estanteria2.h);
    ctx.fillRect(estanteria2.x, estanteria2.y + estanteria2.h - 6, estanteria2.w, 6);
    
    for (let e = 0; e < 3; e++) {
        const ey = estanteria2.y + 10 + e * 55;
        
        ctx.fillStyle = '#2a1a10';
        ctx.fillRect(estanteria2.x + 6, ey + 45, estanteria2.w - 12, 5);
        
        for (let b = 0; b < 3; b++) {
            const bx = estanteria2.x + 15 + b * 45;
            const bh = 30 + (b * 5) % 15;
            const colores = ['#7a3a5a', '#2a4a5a', '#5a4a2a'];
            
            ctx.fillStyle = colores[(e * 3 + b) % colores.length];
            ctx.fillRect(bx, ey + (45 - bh), 38, bh);
            
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.fillRect(bx + 3, ey + (45 - bh) + 5, 30, 3);
        }
    }
    
    const cajas = [
        { x: 320, y: pisoY - 60, w: 70, h: 60 },
        { x: 380, y: pisoY - 100, w: 60, h: 100 },
        { x: 450, y: pisoY - 50, w: 80, h: 50 },
        { x: W - 130, y: pisoY - 70, w: 70, h: 70 }
    ];
    
    for (let i = 0; i < cajas.length; i++) {
        const c = cajas[i];
        
        const colorBase = i % 2 === 0 ? '#6a4a25' : '#5a3a1a';
        const colorTapa = i % 2 === 0 ? '#7a5a30' : '#6a4a25';
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.beginPath();
        ctx.ellipse(c.x + c.w / 2, c.y + c.h + 3, c.w / 2 + 5, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = colorBase;
        ctx.fillRect(c.x, c.y, c.w, c.h);
        
        ctx.strokeStyle = '#3a2010';
        ctx.lineWidth = 3;
        ctx.strokeRect(c.x, c.y, c.w, c.h);
        
        ctx.fillStyle = colorTapa;
        ctx.fillRect(c.x, c.y, c.w, 6);
        
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(c.x, c.y + c.h / 2);
        ctx.lineTo(c.x + c.w, c.y + c.h / 2);
        ctx.stroke();
        
        ctx.strokeStyle = '#3a2010';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(c.x + c.w / 2, c.y);
        ctx.lineTo(c.x + c.w / 2, c.y + c.h);
        ctx.stroke();
        
        ctx.fillStyle = '#f0e8d0';
        ctx.font = 'bold 8px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('FRÁGIL', c.x + c.w / 2, c.y + c.h / 2 + 4);
        
        ctx.fillStyle = '#8a2020';
        ctx.fillRect(c.x + 5, c.y + c.h - 20, c.w - 10, 12);
        
        ctx.fillStyle = '#f0e8d0';
        ctx.font = 'bold 6px monospace';
        ctx.fillText('↑↑↑', c.x + c.w / 2, c.y + c.h - 12);
    }
    
    const velas = [
        { x: W * 0.5, y: pisoY - 5 },
    ];
    
    for (const v of velas) {
        ctx.fillStyle = 'rgba(255, 220, 100, 0.1)';
        ctx.beginPath();
        ctx.arc(v.x, v.y - 40, 120, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = 'rgba(255, 220, 100, 0.2)';
        ctx.beginPath();
        ctx.arc(v.x, v.y - 40, 70, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#1a0a05';
        ctx.fillRect(v.x - 20, v.y, 40, 8);
        ctx.fillStyle = '#3a2515';
        ctx.fillRect(v.x - 18, v.y, 36, 4);
        
        ctx.fillStyle = '#f0e0a0';
        ctx.fillRect(v.x - 4, v.y - 40, 8, 40);
        
        ctx.fillStyle = 'rgba(240, 220, 160, 0.5)';
        ctx.fillRect(v.x - 6, v.y - 42, 12, 4);
        
        const llamaY = v.y - 48 + Math.sin(frames * 0.15 + v.x) * 1.5;
        const llamaX = v.x + Math.sin(frames * 0.1 + v.x * 0.1) * 0.8;
        
        ctx.fillStyle = 'rgba(255, 180, 30, 0.9)';
        ctx.beginPath();
        ctx.ellipse(llamaX, llamaY, 3, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = 'rgba(255, 255, 200, 0.9)';
        ctx.beginPath();
        ctx.ellipse(llamaX, llamaY + 2, 1.5, 4, 0, 0, Math.PI * 2);
        ctx.fill();
    }
    
    ctx.fillStyle = '#3a2a1a';
    ctx.fillRect(W - 100, 0, 90, 100);
    
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(W - 95, 10, 80, 80);
    
    for (let r = 0; r < 4; r++) {
        const ry = 15 + r * 18;
        
        ctx.fillStyle = '#4a3520';
        ctx.fillRect(W - 80, ry, 50, 8);
        
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(W - 75, ry + 2, 40, 4);
    }
    
    ctx.fillStyle = '#8a8a8a';
    ctx.beginPath();
    ctx.arc(W - 55, 92, 3, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = 'rgba(200, 200, 200, 0.3)';
    ctx.lineWidth = 1;
    for (let s = 0; s < 8; s++) {
        const sx = 20 + s * 45;
        const sy = 40;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + 12, sy + 20);
        ctx.moveTo(sx + 12, sy + 20);
        ctx.lineTo(sx + 5, sy + 25);
        ctx.stroke();
    }
    
    ctx.strokeStyle = 'rgba(200, 200, 200, 0.35)';
    ctx.beginPath();
    ctx.moveTo(W - 200, 40);
    ctx.lineTo(W - 150, 70);
    ctx.moveTo(W - 150, 70);
    ctx.lineTo(W - 165, 85);
    ctx.moveTo(W - 150, 70);
    ctx.lineTo(W - 145, 90);
    ctx.stroke();
    
    const viñeta = ctx.createRadialGradient(W/2, H/2, H*0.3, W/2, H/2, H*0.95);
    viñeta.addColorStop(0, 'rgba(0,0,0,0)');
    viñeta.addColorStop(1, 'rgba(0,0,0,0.85)');
    ctx.fillStyle = viñeta;
    ctx.fillRect(0, 0, W, H);
}

function fondoAzotea(W, H) {
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#030318');
    grad.addColorStop(0.4, '#0a0a35');
    grad.addColorStop(0.7, '#15102a');
    grad.addColorStop(1, '#050510');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
    
    for (let i = 0; i < 150; i++) {
        const x = (i * 43 + i * i * 2) % W;
        const y = (i * 31 + i * i * 3) % (H * 0.6);
        const size = (i % 4) + 1;
        ctx.fillStyle = i % 6 === 0 ? 'rgba(255, 255, 220, 0.9)' : 'rgba(200, 210, 240, 0.6)';
        ctx.fillRect(x, y, size, size);
    }
    
    const mx = W - 160;
    const my = 110;
    
    ctx.fillStyle = 'rgba(220, 220, 200, 0.2)';
    ctx.beginPath();
    ctx.arc(mx, my, 130, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(240, 240, 220, 0.3)';
    ctx.beginPath();
    ctx.arc(mx, my, 100, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#f5f5e8';
    ctx.beginPath();
    ctx.arc(mx, my, 65, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(210, 210, 190, 0.6)';
    ctx.beginPath();
    ctx.arc(mx - 20, my - 15, 12, 0, Math.PI * 2);
    ctx.arc(mx + 25, my + 20, 14, 0, Math.PI * 2);
    ctx.arc(mx + 8, my - 30, 9, 0, Math.PI * 2);
    ctx.arc(mx - 30, my + 18, 10, 0, Math.PI * 2);
    ctx.fill();
    
    const horizonteY = H - 160;
    
    for (let i = 0; i < 12; i++) {
        const bx = i * 80;
        const bw = 50 + (i % 3) * 30;
        const bh = 80 + (i % 4) * 40;
        
        ctx.fillStyle = '#0a0a18';
        ctx.fillRect(bx, horizonteY - bh, bw, bh);
        
        for (let v = 0; v < 6; v++) {
            const vx = bx + 8 + (v % 3) * 15;
            const vy = horizonteY - bh + 15 + Math.floor(v / 3) * 20;
            
            if (vx < bx + bw - 5 && (v + i) % 3 !== 0) {
                ctx.fillStyle = 'rgba(255, 220, 100, 0.4)';
                ctx.fillRect(vx, vy, 6, 8);
            }
        }
    }
    
    ctx.fillStyle = 'rgba(100, 100, 150, 0.15)';
    ctx.fillRect(0, horizonteY - 5, W, 10);
    
    const pisoY = H - 130;
    
    ctx.fillStyle = '#0a0a15';
    ctx.fillRect(0, pisoY, W, 130);
    
    ctx.fillStyle = '#1a1a2a';
    ctx.fillRect(0, pisoY, W, 6);
    
    for (let x = 0; x < W; x += 50) {
        ctx.fillStyle = '#252540';
        ctx.fillRect(x, pisoY + 6, 48, 4);
    }
    
    for (let y = pisoY + 10; y < H; y += 40) {
        for (let x = 0; x < W; x += 40) {
            const offset = (y / 40) % 2 === 0 ? 0 : 20;
            ctx.strokeStyle = 'rgba(50, 50, 80, 0.4)';
            ctx.lineWidth = 1;
            ctx.strokeRect(x + offset, y, 40, 40);
        }
    }
    
    const barandas = [
        { x: 0, w: W/2 - 60 },
        { x: W/2 + 60, w: W/2 - 60 }
    ];
    
    for (const b of barandas) {
        ctx.fillStyle = '#1a1a2a';
        ctx.fillRect(b.x, pisoY - 150, b.w, 6);
        
        ctx.fillStyle = '#2a2a45';
        ctx.fillRect(b.x, pisoY - 148, b.w, 2);
        
        for (let px = b.x + 20; px < b.x + b.w - 20; px += 40) {
            ctx.fillStyle = '#1a1a2a';
            ctx.fillRect(px, pisoY - 150, 6, 150);
        }
    }
    
    ctx.fillStyle = '#1a1a2a';
    ctx.fillRect(0, pisoY - 100, 60, 100);
    ctx.fillStyle = '#0a0a15';
    ctx.fillRect(4, pisoY - 96, 52, 92);
    ctx.strokeStyle = '#2a2a45';
    ctx.lineWidth = 3;
    ctx.strokeRect(4, pisoY - 96, 52, 92);
    
    ctx.fillStyle = '#1a1a2a';
    ctx.fillRect(W - 50, pisoY - 120, 50, 120);
    ctx.fillStyle = '#0a0a15';
    ctx.fillRect(W - 46, pisoY - 116, 42, 112);
    ctx.strokeStyle = '#2a2a45';
    ctx.lineWidth = 3;
    ctx.strokeRect(W - 46, pisoY - 116, 42, 112);
    
    ctx.fillStyle = '#2a1a10';
    ctx.fillRect(W/2 - 15, pisoY - 30, 30, 30);
    ctx.fillStyle = '#3a2515';
    ctx.fillRect(W/2 - 15, pisoY - 30, 30, 4);
    
    const viñeta = ctx.createRadialGradient(W/2, H/2, H*0.4, W/2, H/2, H*0.95);
    viñeta.addColorStop(0, 'rgba(0,0,0,0)');
    viñeta.addColorStop(1, 'rgba(0,0,0,0.75)');
    ctx.fillStyle = viñeta;
    ctx.fillRect(0, 0, W, H);
}

function dibujar() {
    const nivel = NIVELES[nivelActual];
    
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.shadowBlur = 0;
    ctx.shadowColor = 'transparent';
    
    const fondoPre = preRenderizarFondo(nivelActual, canvas.width, canvas.height);
    ctx.drawImage(fondoPre, 0, 0);
    
    
    ctx.shadowBlur = 0;
    ctx.shadowColor = 'transparent';
    for (const p of plataformas) {
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(p.x, p.y, p.w, p.h);
        ctx.strokeStyle = '#2a2a2a';
        ctx.lineWidth = 1;
        ctx.strokeRect(p.x, p.y, p.w, p.h);
    }

    if (nivel.obstaculos) {
        const dif = DIFICULTADES[dificultadActual] || DIFICULTADES.normal;
        const obstaculosVisibles = dif.multiplicadorVelocidad >= 1.0 
            ? nivel.obstaculos 
            : nivel.obstaculos.slice(0, Math.ceil(nivel.obstaculos.length * dif.multiplicadorVelocidad));
        
        for (const obs of obstaculosVisibles) {
            if (obs.tipo === 'pinchos') {
                ctx.shadowColor = '#888';
                ctx.shadowBlur = 5;
                ctx.fillStyle = '#555';
                ctx.strokeStyle = '#888';
                ctx.lineWidth = 1;
                
                const numPinchos = Math.floor(obs.w / 12);
                const anchoPincho = obs.w / numPinchos;
                
                for (let i = 0; i < numPinchos; i++) {
                    const px = obs.x + i * anchoPincho;
                    ctx.beginPath();
                    ctx.moveTo(px, obs.y + obs.h);
                    ctx.lineTo(px + anchoPincho / 2, obs.y);
                    ctx.lineTo(px + anchoPincho, obs.y + obs.h);
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                }
                ctx.shadowBlur = 0;
                
            } else if (obs.tipo === 'fuego') {
                const pulso = Math.sin(frames * 0.15 + obs.x) * 0.3 + 0.7;
                
                ctx.shadowColor = '#ff2200';
                ctx.shadowBlur = 25 * pulso;
                ctx.fillStyle = `rgba(180, 30, 0, ${0.7 + pulso * 0.3})`;
                ctx.fillRect(obs.x, obs.y, obs.w, obs.h);
                
                ctx.shadowBlur = 15 * pulso;
                ctx.fillStyle = `rgba(255, 200, 0, ${0.6 + pulso * 0.4})`;
                ctx.fillRect(obs.x + obs.w * 0.25, obs.y + obs.h * 0.3, obs.w * 0.5, obs.h * 0.7);
                
                for (let i = 0; i < 3; i++) {
                    const fx = obs.x + obs.w * (0.2 + i * 0.3);
                    const altura = 10 + Math.sin(frames * 0.2 + i) * 5;
                    ctx.fillStyle = `rgba(255, ${150 + Math.sin(frames * 0.3 + i) * 50}, 0, 0.7)`;
                    ctx.beginPath();
                    ctx.moveTo(fx - 3, obs.y);
                    ctx.lineTo(fx, obs.y - altura);
                    ctx.lineTo(fx + 3, obs.y);
                    ctx.closePath();
                    ctx.fill();
                }
                
                ctx.shadowBlur = 0;
            }
        }
    }
    
    for (const item of items) {
        if (!item.recogido) {
            ctx.shadowColor = '#886600';
            ctx.shadowBlur = 15;
            ctx.font = '22px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(item.emoji, item.x + item.w / 2, item.y + item.h / 2);
            ctx.shadowBlur = 0;
        }
    }
    
    for (const enemigo of enemigos) {
        const pulse = Math.sin(frames * 0.05) * 0.3 + 0.7;
        ctx.shadowColor = '#880000';
        ctx.shadowBlur = 25 * pulse;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        let emoji = '👻';
        if (enemigo.tipo === 'murcielago') {
            emoji = '🦇';
            ctx.font = `${enemigo.h}px Arial`;
            ctx.fillText(emoji, enemigo.x + enemigo.w / 2, enemigo.y + enemigo.h / 2);
        } else if (enemigo.tipo === 'araña') {
            emoji = '🕷️';
            ctx.strokeStyle = `rgba(200, 200, 200, ${0.3 + Math.sin(frames * 0.05) * 0.1})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(enemigo.x + enemigo.w / 2, 0);
            ctx.lineTo(enemigo.x + enemigo.w / 2, enemigo.y);
            ctx.stroke();
            ctx.font = `${enemigo.h}px Arial`;
            ctx.fillText(emoji, enemigo.x + enemigo.w / 2, enemigo.y + enemigo.h / 2);
        } else {
            ctx.font = `${enemigo.h}px Arial`;
            ctx.fillText(emoji, enemigo.x + enemigo.w / 2, enemigo.y + enemigo.h / 2 - 2);
        }
        ctx.shadowBlur = 0;
    }
    
    if (salida) {
        const pulse = Math.sin(frames * 0.04) * 0.3 + 0.7;
        ctx.shadowColor = '#00bbdd';
        ctx.shadowBlur = 25 * pulse;
        ctx.font = '36px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('🚪', salida.x + salida.w / 2, salida.y + salida.h / 2);
        ctx.shadowBlur = 0;
    }
    
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    ctx.shadowColor = 'transparent';
    
    const j = jugador;
    const yOff = Math.sin(frames * 0.06) * 2;
    const cx = j.x + j.w / 2;
    const cy = j.y + j.h / 2 + yOff;
    
    if (framesInvulnerable > 0 && Math.floor(frames / 4) % 2 === 0) {
        ctx.shadowColor = '#ff2222';
        ctx.shadowBlur = 30;
    } else {
        ctx.shadowColor = '#4466ff';
        ctx.shadowBlur = 20;
    }
    
    ctx.fillStyle = 'rgba(80, 130, 255, 0.12)';
    ctx.strokeStyle = 'rgba(80, 130, 255, 0.25)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(cx, cy, j.w / 2, j.h / 2 * 0.75, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    const oY = cy - 2;
    ctx.fillStyle = 'rgba(180, 200, 255, 0.25)';
    ctx.beginPath();
    ctx.arc(cx - 5, oY, 3.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx + 5, oY, 3.5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(180, 200, 255, 0.4)';
    const dX = j.dir === 1 ? 1.5 : -1.5;
    ctx.beginPath();
    ctx.arc(cx - 5 + dX, oY, 1.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx + 5 + dX, oY, 1.5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.shadowBlur = 0;
    ctx.shadowColor = 'transparent';
    
    const gradiente = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.height * 0.25,
        canvas.width / 2, canvas.height / 2, canvas.height * 0.95
    );
    gradiente.addColorStop(0, 'rgba(0,0,0,0)');
    gradiente.addColorStop(1, 'rgba(0,0,0,0.35)');
    ctx.fillStyle = gradiente;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    if (Math.random() < 0.008) {
        ctx.fillStyle = `rgba(80,0,0,${Math.random() * 0.15})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function perderVida() {
    if (framesInvulnerable > 0) return;
    framesInvulnerable = 60;
    
    JUEGO.vidas--;
    actualizarUI();
    mostrarMensaje(`💀 ¡Te ha atrapado! Vidas: ${JUEGO.vidas}`, "peligro");
    
    document.getElementById('escenario').style.backgroundColor = '#1a0000';
    setTimeout(() => {
        document.getElementById('escenario').style.backgroundColor = '';
    }, 300);
    
    if (JUEGO.vidas <= 0) {
        setTimeout(() => {
            const puntosPerdidos = Math.floor(JUEGO.puntos * 0.3);
            JUEGO.puntos -= puntosPerdidos;
            
            let objetoPerdido = null;
            if (JUEGO.inventario.length > 0) {
                objetoPerdido = JUEGO.inventario.pop();
            }
            
            const puntosFinales = document.getElementById('puntos-finales');
            if (puntosFinales) {
                let mensajePuntos = `Puntos: ${JUEGO.puntos}`;
                if (puntosPerdidos > 0) {
                    mensajePuntos += ` <span style="color:#ff2222;font-size:0.4rem;">(-${puntosPerdidos})</span>`;
                }
                puntosFinales.innerHTML = mensajePuntos;
            }
            
            const gameOverDiv = document.getElementById('game-over');
            let avisoObjeto = document.getElementById('aviso-objeto-perdido');
            if (!avisoObjeto) {
                avisoObjeto = document.createElement('p');
                avisoObjeto.id = 'aviso-objeto-perdido';
                avisoObjeto.style.cssText = 'color:#ff8800;font-size:0.45rem;margin:10px 0;letter-spacing:1px;';
                gameOverDiv.insertBefore(avisoObjeto, gameOverDiv.querySelector('button'));
            }
            
            if (objetoPerdido) {
                avisoObjeto.textContent = `💔 Perdiste: ${objetoPerdido.emoji} ${objetoPerdido.nombre}`;
                avisoObjeto.style.display = 'block';
            } else {
                avisoObjeto.style.display = 'none';
            }
            
            gameOverDiv.style.display = 'flex';
            JUEGO.enJuego = false;
            juegoActivo = false;

            if (jugadorNombre) {
                fetch('http://localhost:3000/api/guardar', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        jugador_nombre: jugadorNombre,
                        nivel_actual: nivelActual + 1,
                        vidas: 0,
                        puntos: JUEGO.puntos,
                        inventario: JUEGO.inventario.map(i => i.nombre || i),
                        partida_perdida: true
                    })
                })
                .then(res => res.json())
                .then(data => {
                    console.log('💀 Derrota guardada. Mejor puntaje:', data.mejor_puntaje);
                })
                .catch(() => {
                    console.log('⚠️ No se pudo guardar la derrota');
                });
            }
        }, 500);
    } else {
        const nivel = NIVELES[nivelActual];
        const j = nivel.jugador;
        jugador.x = j.x;
        jugador.y = j.y;
        jugador.vx = 0;
        jugador.vy = 0;
    }
}

function reiniciarJuegoCompleto() {
    teclas = {};
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('nivel-completado').style.display = 'none';
    
    const dif = DIFICULTADES[dificultadActual] || DIFICULTADES.normal;
    JUEGO.vidas = dif.vidas;
    
    JUEGO.enJuego = true;
    juegoActivo = true;
    
    cargarNivel(nivelActual);
    
    mostrarMensaje(`🔄 ¡Reintentando! Nivel ${nivelActual + 1}`, 'importante');
}

function salirAlMenu() {
    localStorage.removeItem('nivelGuardado');
    localStorage.removeItem('puntosGuardados');
    localStorage.removeItem('vidasGuardadas');
    localStorage.removeItem('inventarioGuardado');
    
    if (jugadorNombre) {
        const data = {
            jugador_nombre: jugadorNombre,
            nivel_actual: nivelActual + 1,
            vidas: 0,
            puntos: JUEGO.puntos,
            inventario: JUEGO.inventario.map(i => i.nombre || i),
            partida_perdida: true
        };
        
        fetch('http://localhost:3000/api/guardar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(() => irAPagina('index.html'))
        .catch(() => irAPagina('index.html'));
    } else {
        irAPagina('index.html');
    }
}

function completarNivel() {
    const dif = DIFICULTADES[dificultadActual] || DIFICULTADES.normal;
    const recompensaBase = NIVELES[nivelActual].recompensa || 10;
    const recompensaFinal = Math.floor(recompensaBase * dif.recompensa);
    
    JUEGO.puntos += recompensaFinal;
    actualizarUI();
    
    const modalCompletado = document.getElementById('nivel-completado');
    const btnSiguiente = document.getElementById('btn-siguiente-nivel');
    
    if (NIVELES[nivelActual].esFinal) {
        document.querySelector('#nivel-completado h2').textContent = '🏆 ¡MISIÓN COMPLETA!';
        btnSiguiente.textContent = '📖 VER MENSAJE FINAL';
    } else {
        document.querySelector('#nivel-completado h2').textContent = `✨ NIVEL ${nivelActual + 1} COMPLETADO`;
        document.querySelector('#nivel-completado h2').style.color = dif.color;
        btnSiguiente.textContent = `▶ VER MENSAJE (+${recompensaFinal} pts)`;
    }

    if (jugadorNombre) {
        fetch('http://localhost:3000/api/guardar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                jugador_nombre: jugadorNombre,
                nivel_actual: nivelActual + 1,
                vidas: JUEGO.vidas,
                puntos: JUEGO.puntos,
                inventario: JUEGO.inventario.map(i => i.nombre || i),
                partida_perdida: false
            })
        });
    }
    
    modalCompletado.style.display = 'flex';
}

function avanzarNivelDirecto() {
    teclas = {};
    document.getElementById('nivel-completado').style.display = 'none';
    
    if (NIVELES[nivelActual].esFinal) {
        abrirFinalInteractivo();
        return;
    }
    
    cargarNivel(nivelActual + 1);
}

function abrirDialogoNivel() {
    const nivelID = nivelActual + 1;
    
    if (!DIALOGOS[nivelID]) {
        avanzarNivelDirecto();
        return;
    }
    
    const dialogo = DIALOGOS[nivelID];
    dialogoActivo = true;
    dialogoCompletado = false;
    
    const modal = document.getElementById('dialogo-modal');
    const nombre = document.getElementById('dialogo-nombre');
    const textoEscrito = document.getElementById('texto-escrito');
    const continuarBtn = document.getElementById('dialogo-continuar');
    
    nombre.textContent = ` ${dialogo.personaje}`;
    textoEscrito.textContent = '';
    continuarBtn.style.display = 'none';
    
    modal.style.display = 'flex';
    modal.style.animation = 'aparecerDialogo 0.3s ease-out';
    
    let indice = 0;
    const mensaje = dialogo.mensaje;
    
    function escribirTexto() {
        if (indice < mensaje.length) {
            const char = mensaje[indice];
            textoEscrito.textContent += char;
            indice++;
            
            let velocidad = 30;
            if (char === '.' || char === ',' || char === '?' || char === '!') {
                velocidad = 120;
            } else if (char === ' ') {
                velocidad = 15;
            }
            
            setTimeout(escribirTexto, velocidad);
        } else {
            continuarBtn.style.display = 'block';
            dialogoCompletado = true;
        }
    }
    
    setTimeout(escribirTexto, 300);
}

function cerrarDialogo() {
    const modal = document.getElementById('dialogo-modal');
    modal.style.animation = 'desaparecerDialogo 0.3s ease-out';
    
    setTimeout(() => {
        modal.style.display = 'none';
        modal.style.animation = 'aparecerDialogo 0.3s ease-out';
        dialogoActivo = false;
        avanzarNivelDirecto();
    }, 300);
}

function guardarProgreso() {
    if (!jugadorNombre) {
        mostrarMensaje('❌ No hay jugador activo', 'peligro');
        return;
    }

    const data = {
        jugador_nombre: jugadorNombre,
        nivel_actual: nivelActual + 1,
        vidas: JUEGO.vidas,
        puntos: JUEGO.puntos,
        inventario: JUEGO.inventario.map(i => i.nombre || i)
    };

    fetch('http://localhost:3000/api/guardar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            mostrarMensaje(`💾 ¡Guardado! (${jugadorNombre})`, 'exito');
        } else {
            mostrarMensaje('❌ Error al guardar', 'peligro');
        }
    })
    .catch(err => {
        mostrarMensaje('❌ No se pudo conectar al servidor', 'peligro');
    });
}

function cargarProgreso() {
    const nombre = prompt('Ingresa tu nombre:');
    if (!nombre || !nombre.trim()) return;
    
    jugadorNombre = nombre.trim();
    localStorage.setItem('jugadorNombre', jugadorNombre);
    
    fetch(`http://localhost:3000/api/cargar/${encodeURIComponent(jugadorNombre)}`)
        .then(res => res.json())
        .then(data => {
            if (!data.existe) {
                mostrarMensaje(`❌ No hay progreso para "${jugadorNombre}"`, 'peligro');
                return;
            }
            
            JUEGO.vidas = data.vidas;
            JUEGO.puntos = data.puntos;
            JUEGO.inventario = data.inventario.map(nombre => {
                for (const nivel of NIVELES) {
                    for (const item of nivel.items) {
                        if (item.nombre === nombre) {
                            return { ...item, recogido: true };
                        }
                    }
                }
                return { nombre, emoji: '📦', recogido: true };
            });
            
            const nivelIndex = data.nivel_actual - 1;
            if (nivelIndex >= 0 && nivelIndex < NIVELES.length) {
                cargarNivel(nivelIndex);
            } else {
                cargarNivel(0);
            }
            
            mostrarMensaje(`✅ ¡Cargado! Nivel ${data.nivel_actual}`, 'exito');
            actualizarUI();
        })
        .catch(err => {
            mostrarMensaje('❌ No se pudo conectar al servidor', 'peligro');
        });
}

function colision(a, b) {
    return a.x < b.x + b.w &&
           a.x + a.w > b.x &&
           a.y < b.y + b.h &&
           a.y + a.h > b.y;
}

function recogerItem(item) {
    item.recogido = true;
    JUEGO.inventario.push(item);
    actualizarUI();
    mostrarMensaje(`✅ Has encontrado: ${item.nombre}`, "exito");
}

function completarJuego() {
    JUEGO.enJuego = false;
    abrirFinalInteractivo();
}

function configurarControles() {
    document.addEventListener('keydown', (e) => {
        teclas[e.key] = true;
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') e.preventDefault();
        
        if ((e.key === ' ' || e.key === 'Enter') && dialogoActivo && dialogoCompletado) {
            cerrarDialogo();
            e.preventDefault();
        }
    });
    
    document.addEventListener('keyup', (e) => {
        teclas[e.key] = false;
    });
    
    document.addEventListener('blur', () => {
        teclas = {};
    });
    
    const btnIzq = document.getElementById('btn-izquierda');
    const btnDer = document.getElementById('btn-derecha');
    const btnSaltar = document.getElementById('btn-saltar');
    const btnInter = document.getElementById('btn-interactuar');
    
    if (btnIzq) {
        btnIzq.addEventListener('mousedown', () => teclas['izquierda'] = true);
        btnIzq.addEventListener('mouseup', () => teclas['izquierda'] = false);
        btnIzq.addEventListener('mouseleave', () => teclas['izquierda'] = false);
        btnIzq.addEventListener('touchstart', (e) => { e.preventDefault(); teclas['izquierda'] = true; });
        btnIzq.addEventListener('touchend', (e) => { e.preventDefault(); teclas['izquierda'] = false; });
    }
    
    if (btnDer) {
        btnDer.addEventListener('mousedown', () => teclas['derecha'] = true);
        btnDer.addEventListener('mouseup', () => teclas['derecha'] = false);
        btnDer.addEventListener('mouseleave', () => teclas['derecha'] = false);
        btnDer.addEventListener('touchstart', (e) => { e.preventDefault(); teclas['derecha'] = true; });
        btnDer.addEventListener('touchend', (e) => { e.preventDefault(); teclas['derecha'] = false; });
    }
    
    if (btnSaltar) {
        btnSaltar.addEventListener('mousedown', () => teclas['saltar'] = true);
        btnSaltar.addEventListener('mouseup', () => teclas['saltar'] = false);
        btnSaltar.addEventListener('mouseleave', () => teclas['saltar'] = false);
        btnSaltar.addEventListener('touchstart', (e) => { e.preventDefault(); teclas['saltar'] = true; });
        btnSaltar.addEventListener('touchend', (e) => { e.preventDefault(); teclas['saltar'] = false; });
    }
    
    if (btnInter) {
        btnInter.addEventListener('click', () => {
            for (const item of items) {
                if (!item.recogido) {
                    const dist = Math.abs(jugador.x - item.x);
                    if (dist < 80) {
                        recogerItem(item);
                        return;
                    }
                }
            }
            mostrarMensaje("🔍 No hay nada aquí", "");
        });
    }
}

function actualizarUI() {
    document.getElementById('vidas').textContent = JUEGO.vidas;
    document.getElementById('puntos').textContent = JUEGO.puntos;
    document.getElementById('nivel').textContent = `${nivelActual + 1}/${NIVELES.length}`;
    
    if (NIVELES[nivelActual]) {
        document.getElementById('objetivo').textContent = NIVELES[nivelActual].objetivo;
    }

    const difHud = document.getElementById('dificultad-hud');
    if (difHud) {
        const dif = DIFICULTADES[dificultadActual] || DIFICULTADES.normal;
        difHud.textContent = dif.nombre;
        difHud.style.color = dif.color;
    }
    
    const contenedor = document.getElementById('items-inventario');
    contenedor.innerHTML = '';
    
    for (let i = 0; i < 10; i++) {
        const div = document.createElement('span');
        div.className = 'item-inventario';
        if (i < JUEGO.inventario.length) {
            const item = JUEGO.inventario[i];
            div.textContent = `${item.emoji} ${item.nombre}`;
            div.classList.add('importante');
        } else {
            div.textContent = '⬜ Vacío';
            div.classList.add('vacio');
        }
        contenedor.appendChild(div);
    }
}

function mostrarMensaje(texto, tipo = '') {
    const el = document.getElementById('mensaje');
    el.textContent = texto;
    el.className = tipo;
    
    if (tipo !== 'importante' && tipo !== 'peligro') {
        clearTimeout(window.mensajeTimeout);
        window.mensajeTimeout = setTimeout(() => {
            el.textContent = 'Usa las flechas para moverte';
            el.className = '';
        }, 4000);
    }
}

function irAlJuego() {
    const contenedor = document.getElementById('contenedor-inicio');
    if (contenedor) contenedor.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'juego.html';
    }, 400);
}

function mostrarCreditos() {
    document.getElementById('modal-creditos').style.display = 'flex';
}

function cerrarCreditos() {
    document.getElementById('modal-creditos').style.display = 'none';
}

function mostrarRanking() {
    const modal = document.getElementById('modal-ranking');
    if (!modal) return;
    
    modal.style.display = 'flex';
    const lista = document.getElementById('lista-ranking');
    lista.innerHTML = '<p style="color:#666;font-size:0.5rem;text-align:center;padding:20px;">Cargando ranking...</p>';
    
    fetch('http://localhost:3000/api/ranking')
        .then(res => res.json())
        .then(datos => {
            if (!datos.length) {
                lista.innerHTML = '<p style="color:#666;font-size:0.5rem;text-align:center;padding:20px;">No hay registros aún.<br><br>¡Sé el primero en jugar!</p>';
                return;
            }
            
            lista.innerHTML = datos.map((r, i) => {
                let color = '#666';
                let medalla = `${i + 1}.`;
                if (i === 0) { color = '#ffcc00'; medalla = '🥇'; }
                else if (i === 1) { color = '#c0c0c0'; medalla = '🥈'; }
                else if (i === 2) { color = '#cd7f32'; medalla = '🥉'; }
                
                return `
                    <div style="display:flex;justify-content:space-between;padding:10px 8px;border-bottom:1px solid #1a1a1a;font-size:0.5rem;color:#888;align-items:center;">
                        <span style="color:${color};font-weight:bold;">
                            ${medalla} ${r.jugador_nombre}
                        </span>
                        <span style="color:#00dd88;">⭐ ${r.mejor_puntaje} pts</span>
                    </div>
                `;
            }).join('');
        })
        .catch(err => {
            lista.innerHTML = '<p style="color:#ff2222;font-size:0.5rem;text-align:center;padding:20px;">⚠ Servidor no disponible</p>';
        });
}

function cerrarRanking() {
    const modal = document.getElementById('modal-ranking');
    if (modal) modal.style.display = 'none';
}

function mostrarRankingJuego() {
    const modal = document.getElementById('ranking-juego');
    if (!modal) return;
    
    modal.style.display = 'flex';
    const lista = document.getElementById('lista-ranking-juego');
    lista.innerHTML = '<p style="color:#666;font-size:0.5rem;text-align:center;padding:20px;">Cargando...</p>';
    
    fetch('http://localhost:3000/api/ranking')
        .then(res => res.json())
        .then(datos => {
            if (!datos.length) {
                lista.innerHTML = '<p style="color:#666;font-size:0.5rem;text-align:center;padding:20px;">Sin registros aún</p>';
                return;
            }
            
            lista.innerHTML = datos.map((r, i) => {
                let color = '#666';
                let medalla = `${i + 1}.`;
                if (i === 0) { color = '#ffcc00'; medalla = '🥇'; }
                else if (i === 1) { color = '#c0c0c0'; medalla = '🥈'; }
                else if (i === 2) { color = '#cd7f32'; medalla = '🥉'; }
                
                return `
                    <div style="display:flex;justify-content:space-between;padding:10px 8px;border-bottom:1px solid #1a1a1a;font-size:0.5rem;color:#888;align-items:center;">
                        <span style="color:${color};font-weight:bold;">${medalla} ${r.jugador_nombre}</span>
                        <span style="color:#00dd88;">⭐ ${r.mejor_puntaje}</span>
                    </div>
                `;
            }).join('');
        })
        .catch(() => {
            lista.innerHTML = '<p style="color:#ff2222;font-size:0.5rem;text-align:center;padding:20px;">⚠ Servidor no disponible</p>';
        });
}

function cerrarRankingJuego() {
    const modal = document.getElementById('ranking-juego');
    if (modal) modal.style.display = 'none';
}

function volverAlMenuDesdeJuego() {
    const confirmar = confirm('¿Volver al menú? El progreso se guardará.');
    if (confirmar) {
        salirAlMenu();
    }
}

function abrirModalJugador() {
    const modal = document.getElementById('modal-jugador');
    const textoActual = document.getElementById('texto-jugador-actual');
    const botones = document.getElementById('botones-jugador');
    if (!modal) return;
    
    modal.style.display = 'flex';
    botones.innerHTML = '';
    
    const nombreGuardado = localStorage.getItem('jugadorNombre');
    
    if (nombreGuardado) {
        textoActual.innerHTML = `Último jugador: <strong style="color:#cc0000;">${nombreGuardado}</strong>`;
        
        const btnContinuar = document.createElement('button');
        btnContinuar.className = 'btn-jugar';
        btnContinuar.style.fontSize = '0.55rem';
        btnContinuar.textContent = `▶ CONTINUAR COMO ${nombreGuardado.toUpperCase()}`;
        btnContinuar.onclick = () => {
        continuarPartidaGuardada(nombreGuardado);
    };
      botones.appendChild(btnContinuar);
    } else {
        textoActual.textContent = 'No hay perfil guardado.';
    }
    
                  const btnNuevo = document.createElement('button');
      btnNuevo.className = 'btn-config';
     btnNuevo.style.fontSize = '0.55rem';
     btnNuevo.textContent = '➕ NUEVO JUGADOR';
     btnNuevo.onclick = () => {
    const nuevoNombre = prompt('Ingresa el nombre del nuevo jugador:');
    if (nuevoNombre && nuevoNombre.trim()) {
        localStorage.removeItem('jugadorNombre');
        localStorage.removeItem('tiempoMusica');
        localStorage.removeItem('nivelGuardado');
        localStorage.removeItem('puntosGuardados');
        localStorage.removeItem('vidasGuardadas');
        localStorage.removeItem('inventarioGuardado');
        
        localStorage.setItem('jugadorNombre', nuevoNombre.trim());
        localStorage.setItem('nivelGuardado', '0');
        localStorage.setItem('puntosGuardados', '0');
        localStorage.setItem('inventarioGuardado', '[]');
        
        jugadorNombre = nuevoNombre.trim();
        cerrarModalJugador();
        irAlJuego();
    }
};
botones.appendChild(btnNuevo);
    
    if (nombreGuardado) {
            const btnCambiar = document.createElement('button');
        btnCambiar.className = 'btn-config';
         btnCambiar.style.fontSize = '0.55rem';
        btnCambiar.textContent = '🔄 CAMBIAR DE USUARIO';
       btnCambiar.onclick = () => {
    const otroNombre = prompt('Ingresa el nombre del jugador a cargar:');
    if (otroNombre && otroNombre.trim()) {
        localStorage.removeItem('nivelGuardado');
        localStorage.removeItem('puntosGuardados');
        localStorage.removeItem('vidasGuardadas');
        localStorage.removeItem('inventarioGuardado');
        
        localStorage.setItem('jugadorNombre', otroNombre.trim());
        jugadorNombre = otroNombre.trim();
        cerrarModalJugador();
        irAlJuego();
    }
};
botones.appendChild(btnCambiar);
    }
    
    const btnCancelar = document.createElement('button');
    btnCancelar.className = 'btn-creditos';
    btnCancelar.style.fontSize = '0.5rem';
    btnCancelar.textContent = 'CANCELAR';
    btnCancelar.onclick = cerrarModalJugador;
    botones.appendChild(btnCancelar);
}

function cerrarModalJugador() {
    const modal = document.getElementById('modal-jugador');
    if (modal) modal.style.display = 'none';
}

function toggleControles() {
    controlesVisibles = !controlesVisibles;
    localStorage.setItem('controlesVisibles', controlesVisibles);
    
    const controles = document.getElementById('controles');
    const btn = document.getElementById('btn-toggle-controles');
    
    if (controles) {
        controles.style.display = controlesVisibles ? 'flex' : 'none';
    }
    if (btn) {
        btn.textContent = controlesVisibles ? '🎮' : '👁️';
    }
}

function abrirConfigEnJuego() {
    const modal = document.getElementById('config-en-juego');
    if (!modal) return;
    modal.style.display = 'flex';
    
    const vol = document.getElementById('volumenJuego');
    const textoVol = document.getElementById('textoVolumenJuego');
    if (vol && musica) {
        vol.value = musica.volume * 100;
        if (textoVol) textoVol.textContent = Math.round(musica.volume * 100) + '%';
    }
    
    document.querySelectorAll('.dif-btn-juego').forEach(btn => {
        btn.classList.toggle('activo', btn.dataset.dif === dificultadActual);
    });
}

function cerrarConfigEnJuego() {
    const modal = document.getElementById('config-en-juego');
    if (modal) modal.style.display = 'none';
}

function abrirFinalInteractivo() {
    const modal = document.getElementById('final-modal');
    if (!modal) return;
    
    modal.style.display = 'flex';
    indexConversacionFinal = 0;
    respuestasFinales = [];
    
    const dialogo = document.getElementById('final-dialogo');
    const texto = document.getElementById('final-texto');
    const inputContainer = document.getElementById('final-input-container');
    const gracias = document.getElementById('final-gracias');
    
    if (dialogo) dialogo.style.display = 'block';
    if (inputContainer) inputContainer.style.display = 'none';
    if (gracias) gracias.style.display = 'none';
    if (texto) texto.textContent = '';
    
    setTimeout(() => {
        mostrarLineaFinal();
    }, 1500);
}

function mostrarLineaFinal() {
    const texto = document.getElementById('final-texto');
    const inputContainer = document.getElementById('final-input-container');
    const input = document.getElementById('final-input');
    
    if (indexConversacionFinal >= CONVERSACION_FINAL.length) {
        cerrarFinalInteractivo();
        return;
    }
    
    const linea = CONVERSACION_FINAL[indexConversacionFinal];
    texto.textContent = '';
    inputContainer.style.display = 'none';
    
    let indice = 0;
    function escribirTexto() {
        if (indice < linea.texto.length) {
            texto.textContent += linea.texto[indice];
            indice++;
            
            let velocidad = 35;
            if (linea.texto[indice - 1] === '.' || linea.texto[indice - 1] === '?' || linea.texto[indice - 1] === '!') {
                velocidad = 200;
            } else if (linea.texto[indice - 1] === ',') {
                velocidad = 100;
            }
            
            setTimeout(escribirTexto, velocidad);
        } else {
            if (linea.pregunta) {
                inputContainer.style.display = 'flex';
                input.value = '';
                input.focus();
            } else {
                indexConversacionFinal++;
                setTimeout(mostrarLineaFinal, 2000);
            }
        }
    }
    
    setTimeout(escribirTexto, 300);
}

function enviarRespuestaFinal() {
    const input = document.getElementById('final-input');
    const inputContainer = document.getElementById('final-input-container');
    const texto = document.getElementById('final-texto');
    
    if (!input || !input.value.trim()) return;
    
    const respuesta = input.value.trim();
    respuestasFinales.push(respuesta);
    input.value = '';
    inputContainer.style.display = 'none';
    
    texto.textContent = `> ${respuesta}`;
    
    setTimeout(() => {
        indexConversacionFinal++;
        mostrarLineaFinal();
    }, 1500);
}

function cerrarFinalInteractivo() {
    const modal = document.getElementById('final-modal');
    const gracias = document.getElementById('final-gracias');
    const dialogo = document.getElementById('final-dialogo');
    const inputContainer = document.getElementById('final-input-container');
    
    if (dialogo) dialogo.style.display = 'none';
    if (inputContainer) inputContainer.style.display = 'none';
    if (gracias) {
        gracias.style.display = 'block';
        setTimeout(() => {
            irAPagina('index.html');
        }, 6000);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('canvas')) {
        iniciarJuego();
    }
    
    if (document.getElementById('lluvia-pixel')) {
        const contenedor = document.getElementById('lluvia-pixel');
        for (let i = 0; i < 50; i++) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel-lluvia';
            pixel.style.left = Math.random() * 100 + '%';
            pixel.style.height = (Math.random() * 12 + 4) + 'px';
            pixel.style.animationDelay = (Math.random() * 8) + 's';
            pixel.style.animationDuration = (Math.random() * 6 + 4) + 's';
            contenedor.appendChild(pixel);
        }
    }
    
    const controles = document.getElementById('controles');
    if (controles) {
        controles.style.display = controlesVisibles ? 'flex' : 'none';
    }
    const btn = document.getElementById('btn-toggle-controles');
    if (btn) {
        btn.textContent = controlesVisibles ? '🎮' : '👁️';
    }
    
    iniciarMusica();
    configurarSliderVolumen();
});

document.addEventListener('DOMContentLoaded', () => {
    const volJuego = document.getElementById('volumenJuego');
    const textoVolJuego = document.getElementById('textoVolumenJuego');
    if (volJuego) {
        volJuego.value = localStorage.getItem('volumen') || 70;
        if (textoVolJuego) textoVolJuego.textContent = volJuego.value + '%';
        
        volJuego.addEventListener('input', (e) => {
            const v = e.target.value;
            if (musica) musica.volume = v / 100;
            if (textoVolJuego) textoVolJuego.textContent = v + '%';
            localStorage.setItem('volumen', v);
        });
    }
    
    document.querySelectorAll('.dif-btn-juego').forEach(btn => {
        if (btn.dataset.dif === dificultadActual) {
            btn.classList.add('activo');
        } else {
            btn.classList.remove('activo');
        }
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.dif-btn-juego').forEach(b => b.classList.remove('activo'));
            btn.classList.add('activo');
            dificultadActual = btn.dataset.dif;
            localStorage.setItem('dificultad', dificultadActual);
            
            mostrarMensaje(`🎮 Dificultad: ${DIFICULTADES[dificultadActual].nombre}`, 'importante');
            
            const dif = DIFICULTADES[dificultadActual];
            JUEGO.vidas = dif.vidas;
            actualizarUI();
            
            cerrarConfigEnJuego();
        });
    });
    
    document.querySelectorAll('.dif-btn[data-dificultad]').forEach(btn => {
        if (btn.dataset.dificultad === dificultadActual) {
            btn.classList.add('activo');
        } else {
            btn.classList.remove('activo');
        }
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.dif-btn[data-dificultad]').forEach(b => b.classList.remove('activo'));
            btn.classList.add('activo');
            dificultadActual = btn.dataset.dificultad;
            localStorage.setItem('dificultad', dificultadActual);
        });
    });
    
    const finalInput = document.getElementById('final-input');
    if (finalInput) {
        finalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                enviarRespuestaFinal();
            }
        });
    }
});

function continuarPartidaGuardada(nombre) {
    const btn = event.target;
    btn.textContent = '⏳ CARGANDO...';
    btn.disabled = true;
    
    fetch(`http://localhost:3000/api/cargar/${encodeURIComponent(nombre)}`)
        .then(res => res.json())
        .then(data => {
            if (!data.existe) {
                localStorage.setItem('jugadorNombre', nombre);
                jugadorNombre = nombre;
                localStorage.setItem('nivelGuardado', '0');
                cerrarModalJugador();
                irAlJuego();
                return;
            }
            
            const nivelGuardado = Math.max(0, (data.nivel_actual || 1) - 1);
            
            localStorage.setItem('jugadorNombre', nombre);
            localStorage.setItem('nivelGuardado', String(nivelGuardado));
            localStorage.setItem('puntosGuardados', String(data.puntos || 0));
            localStorage.setItem('vidasGuardadas', String(data.vidas || 3));
            localStorage.setItem('inventarioGuardado', JSON.stringify(data.inventario || []));
            
            jugadorNombre = nombre;
            
            cerrarModalJugador();
            irAlJuego();
        })
        .catch(() => {
            localStorage.setItem('jugadorNombre', nombre);
            jugadorNombre = nombre;
            localStorage.setItem('nivelGuardado', '0');
            cerrarModalJugador();
            irAlJuego();
        });
}