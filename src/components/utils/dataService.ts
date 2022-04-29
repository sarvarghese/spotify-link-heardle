
import { getDatabase, ref, onValue } from "firebase/database";
import { getDayStr, getDayStrAsPath } from ".";
import { SongConfig } from "../game/Models";
import app from "./firebase"

interface Map {
    [key: string]: any
}

const DEFAULT_SONG = {
    songLength: 30,
    breaks: [3, 8, 15, 21, 25, 30],
    trackName: "Mitski - Nobody",
    soundCloudLink: "https://soundcloud.com/mitskiofficial/nobody",
    soundSpotifyLink: "https://open.spotify.com/track/6bTn1ovliI0OkjUNkiMBJq?si=6effdec0d4844951",
    // album: "Be The Cowboy",
    // showSoundCloud: true,
    // others: [],
    // image: "https://en.wikipedia.org/wiki/Be_the_Cowboy#/media/File:Be_the_Cowboy.jpg"
};

const SONG_DATABASE: Map = {}


let songs = [
    {
        songLength: 30,
        breaks: [3, 8, 15, 21, 25, 30],
        trackName: "Mitski - Nobody",
        soundCloudLink: "https://soundcloud.com/mitskiofficial/nobody",
        soundSpotifyLink: "https://open.spotify.com/track/6bTn1ovliI0OkjUNkiMBJq?si=6effdec0d4844951",    
    },
    {
        songLength: 30,
        breaks: [3, 8, 15, 21, 25, 30],
        trackName: "Mitski - Me and My Husband",
        soundCloudLink: "https://soundcloud.com/mitskiofficial/nobody",
        soundSpotifyLink: "https://open.spotify.com/track/3pANfZVFdtuVnJsE6xa5Ox?si=52212c98a62f41a1",
    },
    {
        songLength: 30,
        breaks: [3, 8, 15, 21, 25, 30],
        trackName: "Mitski - Pink In The Night",
        soundCloudLink: "https://soundcloud.com/mitskiofficial/nobody",
        soundSpotifyLink: "https://open.spotify.com/track/51vArgRF64yIWk3JIcRITo?si=524f60da4be14cc7",
    }
]

export const getDailySong = (): Promise<any> => {
    let day = getDayStr()

    // let hardCodedSong = DEFAULT_SONG;
    // if (SONG_DATABASE[day]) {
    //     hardCodedSong = SONG_DATABASE[day];
    // }


    const msInDay = 86400000;
    const startDate = new Date('4/26/2022');
    const todaysDate = new Date();
    const index = Math.floor((todaysDate.getTime() - startDate.getTime() )/msInDay)

    let hardCodedSong = songs[index % songs.length];

    return new Promise<SongConfig>((resolve, reject) => {

        let day = getDayStrAsPath()
        const database = getDatabase(app);
        const songRef = ref(database, 'songs/' + day);

        onValue(songRef, (snapshot) => {
            const data = snapshot.val();
            console.log('data', data)
            // if (data) {
            //     resolve(data);
            // } else {
                resolve(hardCodedSong)
            // }
        }, (err) => {
            console.error(err);
            resolve(hardCodedSong)
        }, {
            onlyOnce: true
        });
    });
}