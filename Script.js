
const list = document.querySelectorAll("button").forEach(item => {
    item.addEventListener('click', event => {
        audiofilename = item.className;
        let sound = new Audio ('assetFolder/'+audiofilename+'.wav');
        sound.play();
        sound.remove();
    })
});

