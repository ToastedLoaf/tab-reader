class Note {
    constructor() {
        this.screenWidth = 500;
        this.screenHeight = 500;
        this.notes = []

        let ctx = document.getElementById("ctx").getContext("2d");
        ctx.font = "30px Arial";

        let notes = [];

        let noteSpeed = 50;
        let loop = 0;

        let giveId = 0;
    }

    createNote = (str, frt, dur, fngr) => {
        if (str == undefined || str < 0 || str > 5) return;
    
        var note = {
            id: giveId,
            posX: screenWidth,
            string: Math.floor(str),
            fret: 0,
            finger: 0,
            duration: 10
        };
        
        giveId++;
        
        note.fret = (typeof frt == 'number' && frt >= 0 && frt <= 24) ? Math.floor(frt) : note.fret;
        note.duration = (typeof dur == 'number' && dur >= 5) ? Math.floor(dur) : note.duration;
        note.finger = (typeof fngr == 'number' && fngr >= 0 && fngr <= 4) ? Math.floor(fngr) : note.finger;
    
        notes.push(note);
    }

    update = () => {
        ctx.clearRect(0,0,screenWidth,screenHeight);
        updateNotes();
    }
    
    updateNotes = () => {
        var tempNotes = Array.from(notes);
    
        console.log(notes);
        
        for (let index = 0; index < tempNotes.length; index++) {
            const element = tempNotes[index];
            element.posX -= noteSpeed;
    
            if ((element.posX + element.duration) < 0) {
               notes.splice(index, 1);
            }
        }
    
        console.log(notes);
        
        notes.forEach(element => {
            ctx.beginPath();
            ctx.lineWidth = "6";
            ctx.strokeStyle = "red";
            ctx.rect(element.posX, (50 + element.string*40), element.duration, 10);
            ctx.stroke();
        });
    }
    
    startNotes = (speed) => {
        if (typeof speed == "number" && speed >= 1 && loop == undefined) {
            loop = setInterval(update, speed);
            return true;
        }
        return false;
    }
    
    stopNotes = () => {
        if (loop != undefined) {
            clearInterval(loop);
            loop = undefined;
            return true
        } else {
            return false;
        }
    }
}

export default Note