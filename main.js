function playSound(idElementAudio) {
    const element = document.querySelector(idElementAudio);

    if (element && element.localName === 'audio') {
        element.play();
    }

    else {
        alert('Elemento não encontrado ou seletor inválido')
    }
}

const soundList = document.querySelectorAll('.tecla');

for (let counter = 0; counter < soundList.length; counter++) {
    const key = soundList[counter];
    const soundInstrument = key.classList[1];
    const idAudio = `#som_${soundInstrument}`;

    key.onclick = function() {
        playSound(idAudio)
    }

    key.onkeydown = function(event) {
        if (event.code === 'Space' || event.code === 'Enter')
        key.classList.add('ativa');
    }

    key.onkeyup = function(event) {
        if (event.code === 'Space' || event.code === 'Enter')
        key.classList.remove('ativa');
    }

}
