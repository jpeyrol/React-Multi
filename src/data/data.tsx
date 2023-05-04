import { Disk } from "../modal/Disc";
import * as db from "../database/db";

const disk1 = new Disk("https://upload.wikimedia.org/wikipedia/en/a/a1/Nirvana-Bleach.jpg", "Bleach",
    "Nirvana", "Grunge", [""], "1989");

const disk2 = new Disk("https://upload.wikimedia.org/wikipedia/ro/e/e5/In_Utero_%28Nirvana%29_album_cover.jpg",
    "In Utero", "Nirvana", "Grunge", [""], "1993");

const disk3 = new Disk("https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
    "Nevermind", "Nirvana", "Grunge", [""], "1991");

const disk4 = new Disk("https://upload.wikimedia.org/wikipedia/en/3/3d/Paraside_Lost_-_Gothic.jpg",
    "Gothic", "Paradise Lost", "Grunge", [""], "1991");

const disk5 = new Disk("https://upload.wikimedia.org/wikipedia/en/2/21/Paradiselost-shadesofgod.jpg",
    "Shades of God", "Paradise Lost", "Doom Metal", [""], "1992");

const disk6 = new Disk("https://upload.wikimedia.org/wikipedia/en/0/0f/Paradise_Lost_-_Icon.jpg",
    "Icon", "Paradise Lost", "Doom Metal", [""], "1993");

db.insertDisk(disk1);
db.insertDisk(disk2);
db.insertDisk(disk3);
db.insertDisk(disk4);
db.insertDisk(disk5);
db.insertDisk(disk6);

export const DATA = [disk1, disk2, disk3, disk4, disk5, disk6];


/* export const DATA: Disk[] = [];

db.getAllDisks((disks) => {
    disks.forEach((disk) => {
        DATA.push(disk);
    });
}); */
