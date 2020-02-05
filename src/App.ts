import Notesheet from './Notesheet'

const screenWidth = 500
const screenHeight = 500

const canvas = <HTMLCanvasElement> document.getElementById('ctx')
const ctx = <CanvasRenderingContext2D> canvas.getContext('2d')

ctx.font = '30px Arial'

const update = (canvas: CanvasRenderingContext2D, sheet: Notesheet) => {
	canvas.clearRect(0, 0, screenWidth, screenHeight)
	sheet.moveNotes()
	sheet.renderNotes(canvas)
}

let notesheet = new Notesheet(ctx)

notesheet.createNote(4, 2, 10, 3, 3)

// notesheet

window.onkeydown = (event) => {
	console.log(event.keyCode)
	if (event.keyCode == 73) notesheet.startNotes()
	if (event.keyCode == 79) notesheet.stopNotes()
}

notesheet.startNotes()