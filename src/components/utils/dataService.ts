
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
    trackName: "Mitski Nobody",
    others: [],
    album: "Be The Cowboy",
    soundCloudLink: "https://soundcloud.com/mitskiofficial/nobody",
    showSoundCloud: false,
    soundSpotifyLink: "https://open.spotify.com/track/6bTn1ovliI0OkjUNkiMBJq?si=6effdec0d4844951",
    image: "https://en.wikipedia.org/wiki/Be_the_Cowboy#/media/File:Be_the_Cowboy.jpg"
};

const SONG_DATABASE: Map = {}


export const getDailySong = (): Promise<any> => {
    let day = getDayStr()

    let hardCodedSong = DEFAULT_SONG;
    if (SONG_DATABASE[day]) {
        hardCodedSong = SONG_DATABASE[day];
    }

    return new Promise<SongConfig>((resolve, reject) => {

        let day = getDayStrAsPath()
        const database = getDatabase(app);
        const songRef = ref(database, 'songs/' + day);

        onValue(songRef, (snapshot) => {
            const data = snapshot.val();
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