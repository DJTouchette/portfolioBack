import { Quote } from '../../models/index';

const modelReference = {
  Quote: Quote
};

function makeResponse(success, content) {
  if (success) {
    return { success: true, content: content  }
  }

  return { success: false, err: content }
}

class ControllerHelper {

  constructor(reference) {
    this.model = modelReference[reference];
  }

   getById(res, id) {
    this.model.findById(id, (err, quote) => {
      if (err) return res.json(makeResponse(false, err));
      if (!quote) {
        return res.json(makeResponse(false, 'None Found'));
      }
      res.json(makeResponse(true, quote));
      return quote;
    });
  }

   getAll(res) {
    this.model.find({}, (err, quotes) => {
      if (err) return res.json(makeResponse(false, err));
      if (!quotes) {
        return res.json(makeResponse(false, 404, 'No records were found.'));
      }
      res.json(makeResponse(true, quotes));
      return quotes;
    });
  }

  create(res, fields, mail) {
    const newModel = new this.model(fields);

    newModel.save((err) => {
      if (err) return res.json(makeResponse(false, err));

      res.json(makeResponse(true, newModel));
      if (mail) mail(newModel.email, newModel);

      return;
    });
  }

  deleteDocument(res, id) {
    this.model.remove({ _id: id }, (err) => {
      if (err) return res.json(makeResponse(false, err));
      return res.json(makeResponse(true, 'All is well'))
    });
  }

  updateDocument(res, id, fields) {
    this.model.update(id, { $set: fields }, { new: true }, (err, updatedDoc) => {
      if (err) return res.json(makeResponse(false, err));
      return res.json(makeResponse(true, updatedDoc));
    });
  }

}

export default ControllerHelper;
