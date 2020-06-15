function activeOne(){
        document.getElementById("nirvana").style.order = "2";
        document.getElementById("rafa").style.order = "1";
        document.getElementById("puth").style.order = "3";


        document.getElementById("nirvana").style.width = "200px";
        document.getElementById("nirvana").style.height = "200px";

        document.getElementById("rafa").style.width = "150px";
        document.getElementById("rafa").style.height = "150px";
      
        
        document.getElementById("puth").style.width = "150px";
        document.getElementById("puth").style.height = "150px";

        document.getElementById("rafa").style.transition = "width 0.5s linear, height 0.5s linear";
        document.getElementById("nirvana").style.transition = "width 0.5s linear, height 0.5s linear";

        document.getElementById("title").innerHTML = "Smells Like Teen Spirit";
        document.getElementById("artist").innerHTML = "Nirvana";

        pauseOne();
        
        document.getElementById("audio").src = "slts.mp3";
    
        playOne();

}

function activeTwo(){
        document.getElementById("rafa").style.order = "2";
        document.getElementById("nirvana").style.order = "1";
        document.getElementById("puth").style.order = "3";

        document.getElementById("rafa").style.width = "200px";
        document.getElementById("rafa").style.height = "200px";

        document.getElementById("nirvana").style.width = "150px";
        document.getElementById("nirvana").style.height = "150px";

        document.getElementById("puth").style.width = "150px";
        document.getElementById("puth").style.height = "150px";

        document.getElementById("title").innerHTML = "Anmone 2";
        document.getElementById("artist").innerHTML = "Aurthohin";

        pauseOne();

        document.getElementById("audio").src = "anmone2.mp3"

        playOne();

}

function activeThree(){
    document.getElementById("rafa").style.order = "3";
    document.getElementById("nirvana").style.order = "1";
    document.getElementById("puth").style.order = "2";

    document.getElementById("puth").style.width = "200px";
    document.getElementById("puth").style.height = "200px";

    document.getElementById("nirvana").style.width = "150px";
    document.getElementById("nirvana").style.height = "150px";

    document.getElementById("rafa").style.width = "150px";
    document.getElementById("rafa").style.height = "150px";

    document.getElementById("rafa").style.transition = "width 0.5s linear, height 0.5s linear";

    document.getElementById("title").innerHTML = "We Don't Talk Anymore";
    document.getElementById("artist").innerHTML = "Charlie Puth feat. Selena Gomez";

    pauseOne();

    document.getElementById("audio").src = "wdta.mp3";

    playOne();
}

var canvasWidth = 500
var audioEl = document.getElementById("audio")
var canvas = document.getElementById("progress").getContext('2d')
var ctrl = document.getElementById("control")

audioEl.addEventListener('loadedmetadata', function() {
        var duration = audioEl.duration
        var currentTime = audioEl.currentTime
        document.getElementById("duration").innerHTML = convertElapsedTime(duration)
        document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime)
        canvas.fillRect(0, 0, canvasWidth, 50);
      });

function playOne(){
        document.getElementById("play").style.display = "none"
        document.getElementById("pause").style.display = "block"
        document.getElementById("audio").play()
}

function pauseOne(){
        document.getElementById("play").style.display = "block"
        document.getElementById("pause").style.display = "none"
        document.getElementById("audio").pause()
}

function updateBar() {
        canvas.clearRect(0, 0, canvasWidth, 50)
        canvas.fillStyle = "#ff80ff";
        canvas.fillRect(0, 0, canvasWidth, 50)
        
        var currentTime = audioEl.currentTime
        var duration = audioEl.duration

        document.getElementById("duration").innerHTML = convertElapsedTime(duration)
        
        if (currentTime === duration) {
          pauseOne()
        }
        
        document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime)
        
        var percentage = currentTime / duration
        var progress = (canvasWidth * percentage)
        canvas.fillStyle = "#ff00ff"
        canvas.fillRect(0, 0, progress, 50)
      }

      function convertElapsedTime(inputSeconds) {
        var seconds = Math.floor(inputSeconds % 60)
        if (seconds < 10) {
          seconds = "0" + seconds
        }
        var minutes = Math.floor(inputSeconds / 60)
        return minutes + ":" + seconds
      }

function prevOne(){
        activeOne()
        document.getElementById("prevOne").style.display = "none"
        document.getElementById("prevTwo").style.display = "block"
}

function prevTwo(){
        activeTwo()
        document.getElementById("prevTwo").style.display = "none"
        document.getElementById("prevOne").style.display = "block"
}

function nextOne(){
        activeThree()
        document.getElementById("nextOne").style.display = "none"
        document.getElementById("nextTwo").style.display = "block"
}

function nextTwo(){
        activeTwo()
        document.getElementById("nextOne").style.display = "block"
        document.getElementById("nextTwo").style.display = "none"
}

      
      
