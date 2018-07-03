const express = require('express');
const User = require('../models/User');

const createRouter = () => {
    const router = express.Router();

    router.post('/', (req, res) => {
        if (req.body.password != req.body.confirmPassword)
            res.status(400).send({_message: "Пароли не совпадают"});


        const user = new User({
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        });

        user.save()
            .then(user => res.send(user))
            .catch(error => res.status(400).send(error))
    });

    router.post('/sessions', async (req, res) => {
        let user;
        try {
            user = await User.findOne({username: req.body.username});
        }
        catch (error) {
            res.status(400).send({message: error})
        }

        if (!user) {
            return res.status(400).send({error: 'Имя пользователя или пароль неправильные!'});
        }
        let isMatch;
        try {
            isMatch = await user.checkPassword(req.body.password);
        }
        catch (error) {
            res.status(400).send({message: error})

        }

        if (!isMatch) {
            return res.status(400).send({error: 'Имя пользователя или пароль неправильные!'});
        }

        const token = user.generateToken();
        user.token = token;
        try {
            await user.save();
        }
        catch (error) {
            res.status(400).send({message: error})

        }


        return res.send({message: 'Пользователь и пароль правильные!', user, token});
    });


    router.delete('/sessions', async (req, res) => {
        const token = req.get('Token');
        const success = {message: 'Вы успешно вышли из приложения!'};

        if (!token) return res.send(success);
        let user;
        try {
            user = await User.findOne({token});
        }
        catch (error) {
            res.status(400).send({message: error})

        }

        if (!user) return res.send(success);

        user.generateToken();
        try {
            await user.save();
        }
        catch (error) {
            res.status(400).send({message: error})

        }

        return res.send(success);
    });

    return router;
};

module.exports = createRouter;