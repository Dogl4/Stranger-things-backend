require('dotenv').config();
const express = require('express');
const cors = require('cors');

const strangerThingsDataset = require('./data/dataset/stranger-things-characters.json');
const StrangerThingsRepository = require('./data/repository/StrangerThings');
const StrangerThingsService = require('./services/StrangerThings');

const app = express();

const strangerThingsRepository = new StrangerThingsRepository(
  strangerThingsDataset,
);
const strangerThingsService = new StrangerThingsService(
  strangerThingsRepository,
);

app.use(cors());

// UPSIDEDOWN_MODE vem como string, ::___::
const UPSIDEDOWN_MODE = (process.env.UPSIDEDOWN_MODE === 'true');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const characters = strangerThingsService.search(
    req.query,
    UPSIDEDOWN_MODE,
  );
  res.status(200).json(characters);
});

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
