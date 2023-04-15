export class Disk {
    image: string;
    title: string;
    artist: string;
    genre: string;
    tracks: string[];
    year: string;


    constructor(image: string, title: string, artist: string, genre: string, tracks: Array<string>, year: string) {
        this.image = image;
        this.title = title;
        this.artist = artist;
        this.genre = genre;
        this.tracks = tracks;
        this.year = year;
    }

    getImages() {
        return this.image;
    }

    getTitle() {
        return this.title;
    }

    getArtist() {
        return this.artist;
    }

    getGenre() {
        return this.genre;
    }

    getTracks() {
        return this.tracks;
    }

    getYear() {
        return this.year;
    }

}