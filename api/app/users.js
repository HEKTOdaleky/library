const express = require('express');
const User = require('../models/User');

const createRouter = () => {
  const router = express.Router();

  router.post('/', (req, res) => {
    const user = new User({
      username: req.body.username,
      password: req.body.password
    });

    user.save()
      .then(user => res.send(user))
      .catch(error => res.status(400).send(error))
  });

  router.post('/sessions', async (req, res) => {
    console.log(req.body);
    const user = await User.findOne({username: req.body.username});

    if (!user) {
      return res.status(400).send({error: 'Имя пользователя или пароль неправильные!'});
    }

    const isMatch = await user.checkPassword(req.body.password);

    if (!isMatch) {
      return res.status(400).send({error: 'Имя пользователя или пароль неправильные!'});
    }

    const token = user.generateToken();

    return res.send({message: 'Пользователь и пароль правильные!', user, token});
  });


  router.delete('/sessions', async (req, res) => {
    const token = req.get('Token');
    const success = {message: 'Выход успешно произведен!'};

    if (!token) return res.send(success);

    const user = await User.findOne({token});

    if (!user) return res.send(success);

    user.generateToken();
    await user.save();

    return res.send(success);
  });

  return router;
};

module.exports = createRouter;