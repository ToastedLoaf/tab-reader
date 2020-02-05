export default class Note {
    id: number
    posX: number
    string: number
    fret: number
    finger: number
    duration: number

    constructor(entryBeat: number, string: number, duration: number = 10, fret: number = 0, finger: number = 0) {
        if (!(entryBeat >= 4)) throw "Parameter entryBeat is not a number greater than 4!"
        if (!(string >= 0 && string <=5)) throw "Parameter string is not a number from 0 to 5!"
        this.id = 23;
        this.posX = entryBeat*20;
        this.string = string;
        this.fret = (fret >= 0 && fret <=24) ? fret : 0;
        this.finger = (finger >= 0 && finger <=5) ? finger : 0;
        this.duration = (duration >= 5) ? duration : 5;
    }
    updatePos(noteSpeed: number) {
        this.posX -= noteSpeed
    }
}