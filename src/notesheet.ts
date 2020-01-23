export let giveId = 0
export let loop

export interface INote {
    noteSpeed: number;
    id: number;
    posX: number;
    string: number;
    fret: number;
    finger: number;
    duration: number;
}

// export default class Notesheet {
//     constructor() {
//         this.notes = Array[]
//     }

export const createNote = (string: number, fret: number, finger: number, duration: number, entryBeat: number) => {
    
}

export const createNotes = (ar: Array) => {
    const result = []

    ar.forEach(element => {
        createNote()
        result.push(element)
    });
    return result
}

export const updateNotes = (ctx: CanvasRenderingContext2D) => {
    this.notes.forEach(element => {
        ctx.beginPath()
        ctx.lineWidth = 6

        switch (element.finger) {
            case 0:
                ctx.strokeStyle = 'yellow'
                break

            case 1:
                ctx.strokeStyle = 'blue'
                break

            case 2:
                ctx.strokeStyle = 'green'
                break

            case 3:
                ctx.strokeStyle = 'red'
                break

            default:
                break
        }

        ctx.fillRect(element.posX, 50 + element.string * 40, element.duration, 10)
        ctx.stroke()
    })
}

export const startNotes = (speed) => {
    if (typeof speed == 'number' && speed >= 1 && loop == undefined) {
        loop = setInterval(update, speed)
        return true
    }
    return false
}

export const stopNotes = () => {
    if (loop != undefined) {
        clearInterval(loop)
        loop = undefined
        return true
    } else {
        return false
    }
}