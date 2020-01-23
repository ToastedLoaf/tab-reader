interface INote {
	id: number
}

class Note {
	constructor(id, x, string, fret, finger, duration) {
		this.noteSpeed = 50
		this.id = id
		this.posX = x
		this.string = Math.floor(string)
		this.fret  = (typeof fret === 'number' && fret >= 0 && fret <= 24) ? Math.floor(fret) : 0
		this.finger  = (typeof finger == 'number' && finger >= 0 && finger <= 4) ? Math.floor(finger) : 0
		this.duration = (typeof duration == 'number' && duration >= 5) ? Math.floor(duration) : 10
	}

	update() {
		ctx.clearRect(0, 0, screenWidth, screenHeight)
		updateNotes()
	}
    
	updateNotes () {
		var tempNotes = Array.from(notes)
    
		console.log(notes)
        
		for (let index = 0; index < tempNotes.length; index++) {
			const element = tempNotes[index]
			element.posX -= noteSpeed
    
			if ((element.posX + element.duration) < 0) {
				notes.splice(index, 1)
			}
		}
    
		console.log(notes)
        
		notes.forEach(element => {
			ctx.beginPath()
			ctx.lineWidth = '6'
			ctx.strokeStyle = 'red'
			ctx.rect(element.posX, (50 + element.string * 40), element.duration, 10)
			ctx.stroke()
		})
	}
    
	startNotes(speed) {
		if (typeof speed == 'number' && speed >= 1 && loop == undefined) {
			loop = setInterval(update, speed)
			return true
		}
		return false
	}
    
	stopNotes(){
		if (loop != undefined) {
			clearInterval(loop)
			loop = undefined
			return true
		} else {
			return false
		}
	}
}

export default Note
