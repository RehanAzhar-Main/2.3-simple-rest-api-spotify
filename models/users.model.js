let playlist = [{
        id: 1,
        title: "someone like you",
        artist: 'John',
        url: 'https://spotify.com/album/someone-like-you',
        repeats: 10,
        isPlaying: true

    },
    {
        id: 2,
        title: "I am yours",
        artist: 'Bruno Mars',
        url: 'https://spotify.com/album/i-am-yours',
        repeats: 1000,
        isPlaying: false
    }
]

const findPlayedSongBySongStatus = () => {
    return playlist.find(song => song.isPlaying === true)
}

const findPlaylist = () => {
    return playlist
}

const addSongDb = (song) => {
    return playlist.push(song);
}

const findLastPlayedSong = () => {
    return playlist.findIndex(song => song.isPlaying === true);
}

const ChangePlayedSong = (title) => {

    const lastPlayedIdx = findLastPlayedSong()
    playlist[lastPlayedIdx].isPlaying = false;


    const nowPlayedIdx = playlist.findIndex(song => song.title === title);
    playlist[nowPlayedIdx].isPlaying = true;
}

const findMostPlayedSong = () => {
    const repeats = playlist.map(song => {
        return song.repeats;
    });

    const maxRepeat = Math.max(...repeats);

    const mostRepeatsSong = playlist.find(song => song.repeats === maxRepeat);

    return mostRepeatsSong
}

module.exports = {
    findPlayedSongBySongStatus,
    findPlaylist,
    addSongDb,
    findLastPlayedSong,
    ChangePlayedSong,
    findMostPlayedSong
}