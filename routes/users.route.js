const express = require('express');

const { getPlayedSong, getPlaylist, addSong, changedPlayedSong, mostPlayedSong } = require('../controllers/users.controller');


// router middleware -> router object
const router = express.Router();

router.get('/', (req, res) => {
    try {
        const playedSong = getPlayedSong(req.method);
        const playlist = getPlaylist();

        res.status(200).render('index', { playedSong, playlist });
    } catch (err) {
        res.status(400).send(err);
    }

})

router.get("/form-song", (req, res) => {
    // input validation
    if (req.method != 'GET') {
        res.status(405).send({
            status: "Method Not Allowed",
            message: "Only GET methods are allowed"
        });

        return;
    }
    res.render("add_song.ejs");
});

router.post('/add-song', (req, res) => {
    try {
        addSong(req);
        res.status(200)
        res.redirect('/users');
    } catch (err) {
        res.status(400).send(err);
    }
})

router.put('/playing/:song', function(req, res) {
    try {
        changedPlayedSong(req.params.song)

        res.status(200);
        res.redirect('/users');
    } catch (err) {
        res.status(400).send(err);
    }
});

//most played song
router.get('/most-played', (req, res) => {
    try {
        mostPlayedSong()
        res.status(200);
        res.redirect('/users');
    } catch (err) {
        res.status(400).send(err);
    }
})


module.exports = router;