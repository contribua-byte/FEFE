const express = require('express');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'bot-financeiro' });
});

app.post('/webhook', (req, res) => {
  console.log('Mensagem recebida:', req.body);

  res.json({
    received: true,
    message: 'Webhook recebido com sucesso'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
