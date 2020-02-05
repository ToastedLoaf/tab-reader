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
                if (!(speed >= 1 && speed <=25)) throw "Speed has to be between 1 and 25"
                this.noteSpeed = speed
                break

            default:
                this.noteSpeed += speed
                if (speed < 1) speed = 1
                if (speed > 25) speed = 25
                break
        }
        return this.noteSpeed
    }

    startNotes = (screenWidth: number, screenHeight: number) => {
    	if (this.loop === undefined) {
    		this.loop = setInterval(() => {
                
                this.canvasContext.clearRect(0, 0, screenWidth, screenHeight)
                this.moveNotes()
                this.renderNotes(this.canvasContext)

    		}, (1000/this.noteSpeed))
            
    		return true
    	}
    	return false
    }
    
    stopNotes = () => {
        if (this.loop !== undefined) {
            clearInterval(this.loop)
            this.loop = undefined
            return true
        } else {
            return false
        }
    }

    renderNotes = (ctx: CanvasRenderingContext2D) => {
        this.notes.forEach(element => {
            console.log(element)
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
        })
    }

    moveNotes = () => {
        this.notes.forEach(element => {
            element.updatePos(1)
        })
    }
}