const express = require('express');
const HotGirl = require('./HotGirl');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/hotgirl/:id', (req, res) => {
    const { id } = req.params;
    HotGirl.getHotGirlById(id)
    .then(hotGirl => res.render('home', { hotGirl }))
    .catch(err => res.send(err.message));
});

app.get('/like/:id', (req, res) => {
    const { id } = req.params;
    HotGirl.likeGirlById(id)
    .then(newLikeNumber => res.status(200).send(newLikeNumber.toString()))
    .catch(err => res.status(404).send(err.message));
});

app.get('/dislike/:id', (req, res) => {
    const { id } = req.params;
    HotGirl.dislikeGirlById(id)
    .then(newDislikeNumber => res.send(newDislikeNumber.toString()))
    .catch(err => res.status(404).send(err.message));
});

app.get('/api/hotgirl/:id', (req, res) => {
    HotGirl.getHotGirlById(req.params.id)
    .then(hotGirl => res.send(hotGirl))
    .catch(err => res.send(err));
});

module.exports = app;

