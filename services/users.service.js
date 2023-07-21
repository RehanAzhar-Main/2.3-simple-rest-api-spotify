const { findPlayedSongBySongStatus, findPlaylist, addSongDb, findLastPlayedSong, ChangePlayedSong, findMostPlayedSong } = require('../models/users.model');
const uuid = require('uuid');

const getPlayedSongBySongStatus = () => {
    // fetching data (fetching and bussiness logic)
    const playedSong = findPlayedSongBySongStatus();

    if (playedSong.title == null) {
        type: "not-found";
        message: "Cannot find a song"
    }

    return playedSong;
}

const getSongPlaylist = () => {
    return findPlaylist();
}

const addSongToPlaylist = (title, artist, url) => {
    // bussines logic
    const id = uuid.v4();


    const newSong = {
        id: id,
        title: title,
        artist: artist,
        url: url,
        repeats: 0
    }

    return addSongDb(newSong);
}

const getLastPlayedSong = () => {
    return findLastPlayedSong();
}

const setChangePlayedSong = (title) => {
    return ChangePlayedSong(title);
}

const getMostPlayedSong = () => {
    return findMostPlayedSong();
}

module.exports = {
    getPlayedSongBySongStatus,
    getSongPlaylist,
    addSongToPlaylist,
    getLastPlayedSong,
    setChangePlayedSong,
    getMostPlayedSong
}