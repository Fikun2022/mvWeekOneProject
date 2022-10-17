
const list = document.querySelectorAll("button").forEach(item => {
    item.addEventListener('click', event => {
        audiofilename = item.className;
        let sound = new Audio ('drum/'+audiofilename+'.wav');
        sound.play();
        sound.remove();
    })
});

