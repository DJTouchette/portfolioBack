import { Quote } from '../../models/index';
import ControllerHelper from '../helpers/controllerHelper.js';
import { mailQuoteRequest } from '../helpers/mailer.js';

const type = 'Quote';

class QuoteController extends ControllerHelper {

  constructor() {
    super(type);
  }

  getById(res, id) {
    super.getById(res, id);
  }

   create(res, newQuote) {
    super.create(res, newQuote, mailQuoteRequest);
  }

   getAll(res) {
    super.getAll(res);
  }

  deleteQuote(res, id) {
    super.deleteDocument(res, id);
  }

  updateQuote(res, id, fields) {
    super.updateDocument(res, id, fields);
  }

  respondQuote(res, id) {
    const responded = { responded: true };
    super.updateDocument(res, id, responded);
  }

}

export default QuoteController;
