import Notesheet from './Notesheet'

const root = document.getElementById('root')

const screenWidth = 500
const screenHeight = 500

const canvas = <HTMLCanvasElement> document.getElementById('ctx')
const ctx = <CanvasRenderingContext2D> canvas.getContext('2d')

ctx.font = '30px Arial'

let notesheet = new Notesheet(ctx)

notesheet.createNote(4, 2, 10, 3, 3)

// notesheet

window.onkeydown = (event) => {
	console.log(event.keyCode)
	if (event.keyCode == 73) notesheet.startNotes(screenWidth, screenHeight)
	if (event.keyCode == 79) notesheet.stopNotes()
}
