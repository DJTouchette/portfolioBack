
import QuoteController from './controller.js';

function QuoteRoutes(app) {
  const Quote = new QuoteController();

  app.get('/quote/all', (req, res) => {
    Quote.getAll(res);
  });

  app.get('/quote/:id', (req, res) => {
    const id = req.params.id;
    Quote.getById(res, id);
  });

  app.delete('/quote/:id', (req, res) => {
    const id = req.params.id;
    Quote.deleteQuote(res, id);
  });

  app.put('/quote/responded/:id', (req, res) => {
    const id = req.params.id;
    Quote.respondQuote(res, id);
  });

  app.put('/quote/:id', (req, res) => {
    const id = req.params.id;
    const fields = req.body;

    Quote.updateQuote(res, id, fields);
  });

  app.post('/quote', (req, res) => {
    const fields = req.body;
    Quote
      .create(res, fields);
  });
}

export default QuoteRoutes;
