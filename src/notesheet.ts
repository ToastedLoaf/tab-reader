import Note from './Note'

export default class Notesheet {
  notes: Note[];
  ctx: CanvasRenderingContext2D;

  constructor(notes: Note[]) {
  	this.notes = notes
  }

  updateNotes() {
  	notes.forEach(element => {
  		ctx.beginPath()
  		ctx.lineWidth = '6'

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

  startNotes(speed) {
  	if (typeof speed == 'number' && speed >= 1 && loop == undefined) {
  		loop = setInterval(update, speed)
  		return true
  	}
  	return false
  }

  stopNotes() {
  	if (loop != undefined) {
  		clearInterval(loop)
  		loop = undefined
  		return true
  	} else {
  		return false
  	}
  }
}
