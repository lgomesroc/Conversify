const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/chat', (req, res) => {
    const userMessage = req.body.message;
    const botResponse = getBotResponse(userMessage);
    res.send({ message: botResponse });
});

function getBotResponse(message) {
    // Lógica simples para responder
    if (message.toLowerCase() === 'oi') {
        return 'Olá! Como posso ajudar você hoje?';
    } else {
        return 'Desculpe, não entendi sua mensagem.';
    }
}

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
