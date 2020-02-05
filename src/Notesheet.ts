import Note from './Note'

export default class Notesheet {
    noteSpeed: number
    notes: Array<Note>
    loop: any
    canvasContext: CanvasRenderingContext2D

    constructor (canvasContext: CanvasRenderingContext2D, noteSpeed: number = 10) {
        this.noteSpeed = noteSpeed
        this.notes = []
        this.loop = undefined
        this.canvasContext = canvasContext
    }

    createNote(entryBeat: number, string: number, duration: number, fret: number, finger: number) {
        this.notes.unshift(new Note(entryBeat, string, duration, fret, finger))
    }

    updateSpeed(speed: number, type: string = "set") {
        switch (type) {
            case "set":
                if (!(speed >= 1 && speed <=20)) throw "Speed has to be between 1 and 20"
                this.noteSpeed = speed
                break

            default:
                this.noteSpeed += speed
                if (speed < 1) speed = 1
                if (speed > 20) speed = 20
                break
        }
        return speed
    }

    startNotes = () => {
        if (this.loop == undefined) {
            // console.log(ctx)
            // this.renderNotes(ctx)
            this.loop = setInterval(function(){
                this.renderNotes(this.canvasContext)
            }, this.noteSpeed)
            
            return true
        }
        return false
    }
    
    stopNotes = () => {
        if (this.loop != undefined) {
            clearInterval(this.loop)
            this.loop = undefined
            return true
        } else {
            return false
        }
    }

    renderNotes = (ctx: any) => {
        this.notes.forEach(element => {
            console.log(element);
            ctx.beginPath()
            ctx.lineWidth = 6

            switch (element.finger) {
                case 0:
                    ctx.strokeStyle = '#ffff00'
                    break

                case 1:
                    ctx.strokeStyle = '#0000ff'
                    break

                case 2:
                    ctx.strokeStyle = '#00ff00'
                    break

                case 3:
                    ctx.strokeStyle = '#ff0000'
                    break

                default:
                    break
            }

            ctx.fillRect(element.posX, 50 + element.string * 40, element.duration, 10)
            ctx.stroke()
        });
    }

    moveNotes = () => {
        this.notes.forEach(element => {
            element.updatePos(this.noteSpeed)
        });
    }
}