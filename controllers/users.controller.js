// let playlist = [{
//         id: 1,
//         title: "someone like you",
//         artist: 'John',
//         url: 'https://spotify.com/album/someone-like-you',
//         repeats: 10,
//         isPlaying: true

//     },
//     {
//         id: 2,
//         title: "I am yours",
//         artist: 'Bruno Mars',
//         url: 'https://spotify.com/album/i-am-yours',
//         repeats: 1000,
//         isPlaying: false
//     }
// ]

const { getPlayedSongBySongStatus, getSongPlaylist, addSongToPlaylist, getLastPlayedSong, setChangePlayedSong } = require('../services/users.service');

const getPlaylist = () => {
    return getSongPlaylist();
}

const getPlayedSong = (method) => {
    // input validation
    if (method != 'GET') {
        throw {
            status: "Method Not Allowed",
            message: "Only GET methods are allowed"
        };
    }



    // fetching data
    try {
        const playedSong = getPlayedSongBySongStatus();
        return playedSong
    } catch (err) {
        throw err;
    }


}

const addSong = (req) => {

    // input validation
    if (req.method != 'POST') {
        res.status(405).send({
            status: "Method Not Allowed",
            message: "Only POST methods are allowed"
        });

        return;
    }

    const title = req.body.title;
    const artist = req.body.artist;
    const url = req.body.url;


    addSongToPlaylist(title, artist, url)
}

const lastPlayedSong = () => {
    return getLastPlayedSong();
}

const nowPlayedSong = () => {
    return getNowPlayedSong();
}

const changedPlayedSong = (title) => {
    setChangePlayedSong(title)
}

const mostPlayedSong = () => {
    getMostPlayedSong();
}

module.exports = {
    getPlayedSong,
    getPlaylist,
    addSong,
    changedPlayedSong,
    mostPlayedSong
}