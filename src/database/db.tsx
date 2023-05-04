import SQLite from 'react-native-sqlite-storage';
import { Disk } from '../modal/Disc';

export async function initDB() {
    let db = await SQLite.openDatabase({ name: 'discotheque.db', location: 'default' });
    db.transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS disks (id INTEGER PRIMARY KEY AUTOINCREMENT, image TEXT, title TEXT, artist TEXT, genre TEXT, tracks TEXT, year TEXT)');
    });
    return db;
}

export async function insertDisk(disk: Disk) {
    let db = await SQLite.openDatabase({ name: 'discotheque.db', location: 'default' });
    db.transaction((tx) => {
        tx.executeSql('INSERT INTO disks (image, title, artist, genre, tracks, year) VALUES (?, ?, ?, ?, ?, ?)', [disk.image, disk.title, disk.artist, disk.genre, disk.tracks.join(','), disk.year]);
    });
}

export async function getAllDisks(callback: (disks: Disk[]) => void) {
    let db = await SQLite.openDatabase({ name: 'discotheque.db', location: 'default' });
    db.transaction((tx) => {
        tx.executeSql('SELECT * FROM disks', [], (tx, results) => {
            const len = results.rows.length;
            const disks = [];
            for (let i = 0; i < len; i++) {
                const row = results.rows.item(i);
                disks.push(new Disk(row.image, row.title, row.artist, row.genre, row.tracks.split(','), row.year));
            }
            callback(disks);
        });
    });
}



