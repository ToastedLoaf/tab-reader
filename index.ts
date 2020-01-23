import * as Notesheet from './src/notesheet'

let ctx = document.getElementById('ctx').getContext('2d')
ctx.font = '30px Arial'

let screenWidth = 500
let screenHeight = 500

let notes = []

let noteSpeed = 50


const update = (ctx: CanvasRenderingContext2D) => {
	ctx.clearRect(0, 0, screenWidth, screenHeight)
	Notesheet.updateNotes(ctx)
}

window.onkeydown = (event) => {
	console.log(event.keyCode)
	if (event.keyCode == 73) Notesheet.startNotes(300)
	if (event.keyCode == 79) Notesheet.stopNotes()
}

// const note = new Note(ar1, arg2)
