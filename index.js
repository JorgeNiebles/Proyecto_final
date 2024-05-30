const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

//resolver las rutas statics
app.use(express.static("public"));

//rutas de la url
app.get('/', (req, res) => {
    res.sendFile(_dirname + '/public/index.html');
});

//iniciar server
app.listen(PORT, () => {
    console.log(`servidor iniciado en el puerto:${PORT}`);
});


