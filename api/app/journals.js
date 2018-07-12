const express = require('express');
const Journal = require('../models/Journal');
const Book = require('../models/Book');
const Status = require('../models/Status');
const auth = require('../middleware/auth');
const permit = require('../middleware/permit');

const createRouter = () => {
  const router = express.Router();

  router.post('/', [auth, permit('librarian')], async (req, res) => {    
    const data = {
      bookId: req.body.bookId,
      userId: req.body.userId,
      estimatedDate: req.body.estimatedDate
    };

    const newRecordInJournal = new Journal(data);
    try {
      await newRecordInJournal.save();
      const status = await Status.findOne({name: "Выдана"});
      await Book.findOneAndUpdate({_id: data.bookId}, {$set: {statusId: status }});
      return res.send({message: "Книга выдана успешно"});
    } catch (e) {
      return res.send({error: "Не удалось сохранить запись в журнал"});
    }
  });


  return router;
};

module.exports = createRouter;