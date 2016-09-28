import QuoteRoutes from './quote/index.js';
import { mailQuoteRequest } from './helpers/mailer.js';

export default function testRoute(app, port) {
  app.get('/', (req, res) => {
    res.send('Hello! The API is at http://localhost:' + port + ' /api');
  });

  app.get('/email', (req, res) => {
    mailQuoteRequest();
  });

  QuoteRoutes(app);
}
