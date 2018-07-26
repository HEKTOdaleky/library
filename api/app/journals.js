const express = require('express');
const Journal = require('../models/Journal');
const TakeBookJournal = require('../models/TakeBookJournal');
const Book = require('../models/Book');
const Status = require('../models/Status');
const auth = require('../middleware/auth');
const permit = require('../middleware/permit');

const createRouter = () => {
    const router = express.Router();

    router.post('/report', [auth, permit('admin')], async (req, res) => {
        const {startdate, enddate} = req.body;
        let report;
        try {
            report = await Journal.find()
                .populate({path: 'userId', populate: {path: 'groupId', select: ['name', '_id']}})
                .populate({path: 'bookId'})

        }
        catch (error) {
            res.status(400).send({message: "Ошибка в полуении данных", error})
        }
        res.send({report,message:"Данные загружены"});

    });

    router.post('/', [auth, permit('librarian')], async (req, res) => {
        const data = {
            bookId: req.body.bookId,
            userId: req.body.userId,
            estimatedDate: req.body.estimatedDate
        };

        const newRecordInJournal = new Journal(data);
        try {
            const journal = await newRecordInJournal.save();
            const status = await Status.findOne({name: "Выдана"});
            await Book.findOneAndUpdate({_id: data.bookId}, {$set: {statusId: status, lastRec: journal._id}});
            return res.send({message: "Книга выдана успешно"});
        } catch (e) {
            return res.send({error: "Не удалось сохранить запись в журнал"});
        }
    });

    router.post('/take-book', [auth, permit('librarian')], async (req, res) => {
        const data = {
            bookId: req.body.bookId,
            closeDate: req.body.closeDate
        };


        const newRecordTakeBookInJournal = new TakeBookJournal(data);
        try {
            await newRecordTakeBookInJournal.save();
            const status = await Status.findOne({name: "В наличии"});
            const book = await Book.findOne({_id: data.bookId});
            const journal = await Journal.findOne({_id: book.lastRec});
console.log(book,'BOOK', journal);
            book.statusId = status;
            book.lastRec = "";
            journal.closeDate = data.closeDate;
            await book.save();
            await journal.save();
            return res.send({message: "Книга принята успешно"});
        } catch (e) {
            return res.status(400).send({error: "Не удалось сохранить запись в журнал"});
        }
    });


    return router;
};

module.exports = createRouter;