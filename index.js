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

app.listen(3000, () => console.log('Server started'));
