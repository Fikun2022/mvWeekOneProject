

//Simple solutiom

/*

function play(element){
    var audio = document.getElementById(element);
    audio.play();
              }

*/


const list = document.querySelectorAll("button").forEach(item => {
    item.addEventListener('click', event => {
        audiofilename = item.className;
        let sound = new Audio ('drum/'+audiofilename+'.wav');
        sound.play();
        sound.remove();
    })
});

/*
 const list = document.querySelectorAll("button").forEach(item => {

    item.addEventListener('click', event => {
      
        if (item.className === 'rideCymbal') {

            function playSound (){
                let sound = new Audio ('drum/ride.wav');
                sound.play();
                sound.remove();
                
            }
        }
     
    })
})

    */
 




       


/*
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (butto)
    { 
        let sound = new Audio ('drum/ride.wav');
        sound.play();
    }
  });
});


    
const btnrideCymbal = document.querySelector("#rideCymbal");

btnrideCymbal.addEventListener ("click", playSound);

function playSound (){
    let sound = new Audio ('drum/ride.wav');
    sound.play();
    sound.remove();
    
}




const btncrashCymbal = document.querySelector("#crashCymbal");

btncrashCymbal.addEventListener ("click", playSound);

function playSound (){
    let sound = new Audio ('drum/crash.wav');
    sound.play();
    sound.remove();
}



const btnmediumTom = document.querySelector("#mediumTom");

btnmediumTom.addEventListener ("click", playSound);

function playSound (){
    let sound = new Audio ('drum/medium-tom.wav');
    sound.play();
}


const btnhighTom = document.querySelector("#highTom");

btnhighTom.addEventListener ("click", ()) {

    let sound = new Audio ('drum/high-tom.wav');
    sound.play();
}

const btnhiHatCymbal = document.querySelector("#hiHatCymbal");

btnhiHatCymbal.addEventListener ("click", playSound);

function playSound (){
    let sound = new Audio ('drum/hi-hat.wav');
    sound.play();
}


const btnfloorTom = document.querySelector("#floorTom");

btnfloorTom.addEventListener ("click", playSound);

function playSound (){
    let sound = new Audio ('drum/floor-tom.wav');
    sound.play();
}

const btnsnareDrum = document.querySelector("#snareDrum");

btnsnareDrum.addEventListener ("click", playSound);

function playSound (){
    let sound = new Audio ('drum/snare.wav');
    sound.play();
}

const btnbassDrum = document.querySelector("#bassDrum");

btnbassDrum.addEventListener ("click", playSound);

function playSound (){
    let sound = new Audio ('drum/bass-drum.wav');
    sound.play();
}




//DRY


const selectAllButton = document.querySelectorAll('button');
const buttonArray = [...selectAllButton];

buttonArray.forEach (button => {

    if (id === "#rideCymbal" && btnrideCymbal.addEventListener ("click") {

        
    }
});


*/

