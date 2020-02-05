const canvas = <HTMLCanvasElement> document.getElementById('ctx')
const ctx = <CanvasRenderingContext2D> canvas.getContext('2d')

/*
 * var canvas = <SVGSVGElement><any>document.getElementById('ctx');
 * var canvas = document.getElementById('ctx') as HTMLCanvasElement;
 * var ctx = canvas.getContext('2d');
 */

ctx.font = '30px Arial'

const screenWidth = 500
const screenHeight = 500

class Notesheet {
	noteSpeed: number
	notes: Note[]
	loop: any
	constructor (noteSpeed: number = 10) {
		this.noteSpeed = noteSpeed
		this.notes = []
		this.loop = undefined
	}

	createNote(entryBeat: number, string: number, duration: number, fret: number, finger: number) {
		this.notes.unshift(new Note(entryBeat, string, duration, fret, finger))
	}

	updateSpeed(speed: number, type: string = 'set') {
		switch (type) {
			case 'set':
				if (!(speed >= 1 && speed <= 20)) throw 'Speed has to be between 1 and 20'
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
			console.log(ctx)

			// this.renderNotes(ctx)
			this.loop = setInterval(function(){
				this.renderNotes(ctx)
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

	renderNotes(ctx: any) {
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
			element.updatePos(this.noteSpeed)
		})
	}
}

class Note {
	id: number
	posX: number
	string: number
	fret: number
	finger: number
	duration: number

	constructor(entryBeat: number, string: number, duration: number = 10, fret: number = 0, finger: number = 0) {
		if (!(entryBeat >= 4)) throw 'Parameter entryBeat is not a number greater than 4!'
		if (!(string >= 0 && string <= 5)) throw 'Parameter string is not a number from 0 to 5!'
		this.id = 23
		this.posX = entryBeat * 20
		this.string = string
		this.fret = (fret >= 0 && fret <= 24) ? fret : 0
		this.finger = (finger >= 0 && finger <= 5) ? finger : 0
		this.duration = (duration >= 5) ? duration : 5
	}
	updatePos(noteSpeed: number) {
		this.posX -= noteSpeed
	}
}

const update = (canvas: CanvasRenderingContext2D, sheet: Notesheet) => {
	canvas.clearRect(0, 0, screenWidth, screenHeight)
	sheet.moveNotes()
	sheet.renderNotes(canvas)
}

let notesheet = new Notesheet()

notesheet.createNote(4, 2, 10, 3, 3)

// notesheet

window.onkeydown = (event) => {
	console.log(event.keyCode)
	if (event.keyCode == 73) notesheet.startNotes()
	if (event.keyCode == 79) notesheet.stopNotes()
}

notesheet.startNotes()
