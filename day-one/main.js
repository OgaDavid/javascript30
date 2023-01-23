function playAudio(e) {
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)  
    if(!audio) return
    audio.play();
    key.classList.add('playing')
    audio.currentTime = 0
}

const keys = document.querySelectorAll('.key')
function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    this.classList.remove("playing")
}
keys.forEach(key => key.addEventListener("transitionend", removeTransition))
window.addEventListener("keydown", playAudio)