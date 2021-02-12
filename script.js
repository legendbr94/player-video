let video = document.getElementById("video1");

function retroceder() {
 video.currentTime -= 10;
}

function avancar() {
    video.currentTime += 10;
}
function diminuir_vel() {
    video.playbackRate -= 0.1;
}
function aumentar_vel() {
    video.playbackRate += 0.1;
}
function pause() {
    video.pause();
}
function play() {
    video.play();
}
function stop() {
    video.pause();
    video.currentTime = 0;
}

function vol_mudo() {
    video.volume = 0.0;
}
function vol_diminuir() {
    video.volume = 0.5;
}
function vol_aumentar() {
video.volume = 1.0;
}

function displayControllers() {
    const controllers = document.getElementsByClassName("controls-row")[0];
  
    controllers.style.display = "flex";
  }
  
  function hideControllers() {
    const controllers = document.getElementsByClassName("controls-row")[0];
  
    controllers.style.display = "none";
  }